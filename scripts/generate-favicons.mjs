// Generates public/favicon.ico (16/32/48 PNG frames) from the same "JB"
// monogram geometry as public/favicon.svg. No external image tooling required.
// Usage: node scripts/generate-favicons.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const W = 64;
const H = 64;
const R_CORNER = 14;
const STROKE = 7;
const BG = [0x18, 0x0f, 0x10, 255];
const FG = [0xc9, 0xbf, 0xc0, 255];

const line = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
// Arc bulging clockwise (screen coords, y down) from `a0` to `a1` degrees.
const arc = (cx, cy, r, a0, a1) => ({ type: 'arc', cx, cy, r, a0, a1 });

const STROKES = [
  line(28, 16, 28, 40),
  arc(20, 40, 8, 0, 180), // J hook
  line(40, 16, 40, 48), // B stem
  line(40, 16, 46, 16),
  arc(46, 24, 8, -90, 90), // B top bowl
  line(46, 32, 40, 32),
  line(40, 32, 46, 32),
  arc(46, 40, 8, -90, 90), // B bottom bowl
  line(46, 48, 40, 48),
];

const distToSegment = (px, py, x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy || 1;
  let t = ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const qx = x1 + t * dx;
  const qy = y1 + t * dy;
  return Math.hypot(px - qx, py - qy);
};

const distToShape = (px, py) => {
  let best = Infinity;
  for (const s of STROKES) {
    if (s.type === 'line') {
      best = Math.min(best, distToSegment(px, py, s.x1, s.y1, s.x2, s.y2));
      continue;
    }
    const d = Math.hypot(px - s.cx, py - s.cy);
    let ang = (Math.atan2(py - s.cy, px - s.cx) * 180) / Math.PI;
    if (ang >= s.a0 && ang <= s.a1) {
      best = Math.min(best, Math.abs(d - s.r));
    } else {
      // round caps at both arc endpoints
      for (const a of [s.a0, s.a1]) {
        const ex = s.cx + s.r * Math.cos((a * Math.PI) / 180);
        const ey = s.cy + s.r * Math.sin((a * Math.PI) / 180);
        best = Math.min(best, Math.hypot(px - ex, py - ey));
      }
    }
  }
  return best;
};

const inRoundedRect = (x, y) => {
  if (x < 0 || y < 0 || x > W || y > H) return false;
  const cx = x < R_CORNER ? R_CORNER : x > W - R_CORNER ? W - R_CORNER : x;
  const cy = y < R_CORNER ? R_CORNER : y > H - R_CORNER ? H - R_CORNER : y;
  return Math.hypot(x - cx, y - cy) <= R_CORNER;
};

const render = (size) => {
  const ss = 4; // 4x4 supersampling for smooth edges
  const scale = size / W;
  const px = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let fg = 0;
      let covered = 0;
      for (let sy = 0; sy < ss; sy++) {
        for (let sx = 0; sx < ss; sx++) {
          const ux = (x + (sx + 0.5) / ss) / scale;
          const uy = (y + (sy + 0.5) / ss) / scale;
          if (!inRoundedRect(ux, uy)) continue;
          covered++;
          if (distToShape(ux, uy) <= STROKE / 2) fg++;
        }
      }
      if (covered === 0) continue;
      const i = (y * size + x) * 4;
      const cover = covered / (ss * ss); // rounded-rect alpha
      const f = fg / covered; // stroke share inside the visible shape
      px[i] = Math.round(BG[0] + (FG[0] - BG[0]) * f);
      px[i + 1] = Math.round(BG[1] + (FG[1] - BG[1]) * f);
      px[i + 2] = Math.round(BG[2] + (FG[2] - BG[2]) * f);
      px[i + 3] = Math.round(255 * cover);
    }
  }
  return px;
};

const crcTable = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
};

const toPng = (size) => {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  const px = render(size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
};

const sizes = [16, 32, 48];
const images = sizes.map((s) => ({ size: s, data: toPng(s) }));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);

let offset = 6 + images.length * 16;
const entries = [];
for (const img of images) {
  const e = Buffer.alloc(16);
  e[0] = img.size >= 256 ? 0 : img.size;
  e[1] = img.size >= 256 ? 0 : img.size;
  e[2] = 0;
  e[3] = 0;
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(img.data.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += img.data.length;
  entries.push(e);
}

const ico = Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'favicon.ico');
writeFileSync(out, ico);
console.log(`wrote ${out} (${ico.length} bytes)`);
