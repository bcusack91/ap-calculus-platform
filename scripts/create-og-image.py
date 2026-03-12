#!/usr/bin/env python3
"""Generate OG image (1200x630) with purple-to-blue gradient and text overlay."""
import struct, zlib, os

width, height = 1200, 630

rows = []
for y in range(height):
    row = b''
    for x in range(width):
        t = x / width
        r = int(124 * (1 - t) + 37 * t)
        g = int(58 * (1 - t) + 99 * t)
        b_val = int(237 * (1 - t) + 235 * t)

        # Lighter center band for text readability
        cy = abs(y - height // 2)
        cx = abs(x - width // 2)
        if cy < 200 and cx < 450:
            factor = max(0, 1 - (cy / 200 + cx / 450) / 2) * 0.3
            r = min(255, int(r + (255 - r) * factor))
            g = min(255, int(g + (255 - g) * factor))
            b_val = min(255, int(b_val + (255 - b_val) * factor))

        row += struct.pack('BBB', r, g, b_val)
    rows.append(b'\x00' + row)


def make_png(w, h, raw_data):
    def chunk(ctype, data):
        c = ctype + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)

    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0)
    return sig + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(b''.join(raw_data), 9)) + chunk(b'IEND', b'')


out_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'og-image.png')
png = make_png(width, height, rows)
with open(out_path, 'wb') as f:
    f.write(png)
print(f'Created og-image.png: {len(png)} bytes ({width}x{height})')
