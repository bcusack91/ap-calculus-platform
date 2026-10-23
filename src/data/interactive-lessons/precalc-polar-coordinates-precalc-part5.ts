export const precalcPolarPart5Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📈 Polar Function Graphs — Reading $r = f(\\theta)$

**Part 5 of 7 — Polar Function Graphs and Domain Restrictions**

A **polar function** $r = f(\\theta)$ takes an **angle** as its input and returns a **signed radius** as its output. Its graph in the polar plane is the set of points $(f(\\theta), \\theta)$.

### Two Pictures of the Same Function

The same function can be drawn two ways:

| Picture | Horizontal / input | Vertical / output |
|:--------|:-------------------|:------------------|
| Rectangular graph of $r = f(\\theta)$ | $\\theta$ on the horizontal axis | $r$ on the vertical axis |
| Polar graph of $r = f(\\theta)$ | $\\theta$ is a **rotation** from the polar axis | $r$ is a **signed distance** along that ray |

A change in the input rotates you around the pole. A change in the output moves you along the line through the pole at that angle: outward on the terminal ray when $r > 0$, and outward on the **opposite** ray when $r < 0$.

### Translating Features

| On the rectangular graph of $r = f(\\theta)$ | On the polar graph |
|:---------------------------------------------|:-------------------|
| $f(\\theta) = 0$ (a $\\theta$-intercept) | The curve passes through the pole |
| $f(\\theta) > 0$ | The point lies on the terminal ray of $\\theta$ |
| $f(\\theta) < 0$ | The point lies on the ray opposite $\\theta$ (rotated by $\\pi$) |
| Largest value of $\\lvert f(\\theta) \\rvert$ | The point farthest from the pole |

> 💡 The rectangular graph is a roadmap. Sketch it first, mark where $r$ is zero, positive and negative, then rotate around the pole to draw the polar curve.
      `
    },
    {
      id: 'p5-example',
      type: 'text' as const,
      figure: [
        {
          svg: '<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>Rectangular graph of r = 1 + 2 cos theta</title><g class="fig-accent-2"><rect x="128.7" y="14" width="98.7" height="186" fill="currentColor" fill-opacity="0.14" stroke="none"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="24" y1="140.5" x2="330" y2="140.5"/><line x1="30" y1="204" x2="30" y2="10"/></g><text x="332" y="144.5" font-size="12" fill="currentColor">θ</text><text x="36" y="12" font-size="12" fill="currentColor">r</text><line x1="104" y1="137.5" x2="104" y2="143.5" stroke="currentColor" stroke-width="1"/><text x="104" y="154.5" font-size="10.5" fill="currentColor" text-anchor="middle">π/2</text><line x1="128.7" y1="137.5" x2="128.7" y2="143.5" stroke="currentColor" stroke-width="1"/><text x="128.7" y="154.5" font-size="10.5" fill="currentColor" text-anchor="middle">2π/3</text><line x1="178" y1="137.5" x2="178" y2="143.5" stroke="currentColor" stroke-width="1"/><text x="178" y="154.5" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="227.3" y1="137.5" x2="227.3" y2="143.5" stroke="currentColor" stroke-width="1"/><text x="227.3" y="154.5" font-size="10.5" fill="currentColor" text-anchor="middle">4π/3</text><line x1="252" y1="137.5" x2="252" y2="143.5" stroke="currentColor" stroke-width="1"/><text x="252" y="154.5" font-size="10.5" fill="currentColor" text-anchor="middle">3π/2</text><line x1="326" y1="137.5" x2="326" y2="143.5" stroke="currentColor" stroke-width="1"/><text x="326" y="154.5" font-size="10.5" fill="currentColor" text-anchor="middle">2π</text><line x1="27" y1="177.7" x2="33" y2="177.7" stroke="currentColor" stroke-width="1"/><text x="24" y="181.2" font-size="10.5" fill="currentColor" text-anchor="end">−1</text><line x1="27" y1="103.3" x2="33" y2="103.3" stroke="currentColor" stroke-width="1"/><text x="24" y="106.8" font-size="10.5" fill="currentColor" text-anchor="end">1</text><line x1="27" y1="66.1" x2="33" y2="66.1" stroke="currentColor" stroke-width="1"/><text x="24" y="69.6" font-size="10.5" fill="currentColor" text-anchor="end">2</text><line x1="27" y1="28.9" x2="33" y2="28.9" stroke="currentColor" stroke-width="1"/><text x="24" y="32.4" font-size="10.5" fill="currentColor" text-anchor="end">3</text><g class="fig-accent"><path d="M 30 28.9 L 31.5 28.9 L 33 29 L 34.4 29.2 L 35.9 29.5 L 37.4 29.8 L 38.9 30.2 L 40.4 30.7 L 41.8 31.2 L 43.3 31.8 L 44.8 32.5 L 46.3 33.3 L 47.8 34.1 L 49.2 35 L 50.7 36 L 52.2 37 L 53.7 38.1 L 55.2 39.2 L 56.6 40.5 L 58.1 41.7 L 59.6 43.1 L 61.1 44.5 L 62.6 46 L 64 47.5 L 65.5 49 L 67 50.7 L 68.5 52.3 L 70 54.1 L 71.4 55.9 L 72.9 57.7 L 74.4 59.5 L 75.9 61.5 L 77.4 63.4 L 78.8 65.4 L 80.3 67.4 L 81.8 69.5 L 83.3 71.6 L 84.8 73.7 L 86.2 75.9 L 87.7 78.1 L 89.2 80.3 L 90.7 82.5 L 92.2 84.8 L 93.6 87.1 L 95.1 89.3 L 96.6 91.6 L 98.1 94 L 99.6 96.3 L 101 98.6 L 102.5 100.9 L 104 103.3 L 105.5 105.6 L 107 108 L 108.4 110.3 L 109.9 112.6 L 111.4 114.9 L 112.9 117.2 L 114.4 119.5 L 115.8 121.8 L 117.3 124 L 118.8 126.3 L 120.3 128.5 L 121.8 130.7 L 123.2 132.8 L 124.7 135 L 126.2 137.1 L 127.7 139.1 L 129.2 141.2 L 130.6 143.1 L 132.1 145.1 L 133.6 147 L 135.1 148.9 L 136.6 150.7 L 138 152.5 L 139.5 154.2 L 141 155.9 L 142.5 157.5 L 144 159.1 L 145.4 160.6 L 146.9 162.1 L 148.4 163.5 L 149.9 164.8 L 151.4 166.1 L 152.8 167.3 L 154.3 168.5 L 155.8 169.6 L 157.3 170.6 L 158.8 171.6 L 160.2 172.5 L 161.7 173.3 L 163.2 174 L 164.7 174.7 L 166.2 175.3 L 167.6 175.9 L 169.1 176.4 L 170.6 176.8 L 172.1 177.1 L 173.6 177.3 L 175 177.5 L 176.5 177.6 L 178 177.7 L 179.5 177.6 L 181 177.5 L 182.4 177.3 L 183.9 177.1 L 185.4 176.8 L 186.9 176.4 L 188.4 175.9 L 189.8 175.3 L 191.3 174.7 L 192.8 174 L 194.3 173.3 L 195.8 172.5 L 197.2 171.6 L 198.7 170.6 L 200.2 169.6 L 201.7 168.5 L 203.2 167.3 L 204.6 166.1 L 206.1 164.8 L 207.6 163.5 L 209.1 162.1 L 210.6 160.6 L 212 159.1 L 213.5 157.5 L 215 155.9 L 216.5 154.2 L 218 152.5 L 219.4 150.7 L 220.9 148.9 L 222.4 147 L 223.9 145.1 L 225.4 143.1 L 226.8 141.2 L 228.3 139.1 L 229.8 137.1 L 231.3 135 L 232.8 132.8 L 234.2 130.7 L 235.7 128.5 L 237.2 126.3 L 238.7 124 L 240.2 121.8 L 241.6 119.5 L 243.1 117.2 L 244.6 114.9 L 246.1 112.6 L 247.6 110.3 L 249 108 L 250.5 105.6 L 252 103.3 L 253.5 100.9 L 255 98.6 L 256.4 96.3 L 257.9 94 L 259.4 91.6 L 260.9 89.3 L 262.4 87.1 L 263.8 84.8 L 265.3 82.5 L 266.8 80.3 L 268.3 78.1 L 269.8 75.9 L 271.2 73.7 L 272.7 71.6 L 274.2 69.5 L 275.7 67.4 L 277.2 65.4 L 278.6 63.4 L 280.1 61.5 L 281.6 59.5 L 283.1 57.7 L 284.6 55.9 L 286 54.1 L 287.5 52.3 L 289 50.7 L 290.5 49 L 292 47.5 L 293.4 46 L 294.9 44.5 L 296.4 43.1 L 297.9 41.7 L 299.4 40.5 L 300.8 39.2 L 302.3 38.1 L 303.8 37 L 305.3 36 L 306.8 35 L 308.2 34.1 L 309.7 33.3 L 311.2 32.5 L 312.7 31.8 L 314.2 31.2 L 315.6 30.7 L 317.1 30.2 L 318.6 29.8 L 320.1 29.5 L 321.6 29.2 L 323 29 L 324.5 28.9 L 326 28.9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent"><circle cx="128.7" cy="140.5" r="4" fill="currentColor"/></g><g class="fig-accent"><circle cx="227.3" cy="140.5" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="178" cy="177.7" r="4" fill="currentColor"/></g><g class="fig-accent-2"><text x="178" y="193.7" font-size="10.5" fill="currentColor" text-anchor="middle">r = −1</text></g><g class="fig-accent"><text x="41.8" y="28.9" font-size="11.5" fill="currentColor" text-anchor="start">r = 1 + 2cos θ</text></g><g class="fig-accent-2"><text x="178" y="43.8" font-size="11" fill="currentColor" text-anchor="middle">r &lt; 0</text></g></svg>',
          alt: 'Rectangular graph of r = 1 + 2 cos theta for theta from 0 to 2 pi: the curve starts at r = 3, falls through r = 0 at theta = 2 pi/3, reaches its minimum r = -1 at theta = pi, rises back through r = 0 at theta = 4 pi/3, and returns to r = 3 at 2 pi. The interval from 2 pi/3 to 4 pi/3, where r is negative, is shaded.',
          caption: 'Rectangular graph of $r = 1 + 2\\cos\\theta$; shaded where $r < 0$.',
          size: 'sm' as const,
        },
        {
          svg: '<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>Polar graph of r = 1 + 2 cos theta: a limaçon whose inner loop is highlighted</title><g class="fig-muted"><circle cx="130" cy="130" r="32.6" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="65.1" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="97.7" fill="none" stroke="currentColor" stroke-width="0.8"/><line x1="130" y1="130" x2="244" y2="130" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="228.7" y2="73" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="187" y2="31.3" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="130" y2="16" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="73" y2="31.3" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="31.3" y2="73" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="16" y2="130" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="31.3" y2="187" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="73" y2="228.7" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="130" y2="244" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="187" y2="228.7" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="228.7" y2="187" stroke="currentColor" stroke-width="0.6"/></g><g stroke="currentColor" stroke-width="1.3"><line x1="12" y1="130" x2="248" y2="130"/><line x1="130" y1="248" x2="130" y2="12"/></g><text x="163.6" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">1</text><text x="196.1" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">2</text><text x="228.7" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">3</text><g class="fig-accent"><path d="M 227.7 130 L 227.7 128.3 L 227.6 126.6 L 227.5 124.9 L 227.3 123.2 L 227.1 121.5 L 226.8 119.8 L 226.5 118.2 L 226.1 116.5 L 225.7 114.8 L 225.3 113.2 L 224.7 111.6 L 224.2 110 L 223.6 108.4 L 222.9 106.8 L 222.2 105.3 L 221.5 103.8 L 220.7 102.3 L 219.9 100.8 L 219 99.3 L 218.1 97.9 L 217.2 96.5 L 216.2 95.2 L 215.2 93.8 L 214.1 92.5 L 213 91.3 L 211.9 90.1 L 210.7 88.9 L 209.5 87.7 L 208.3 86.6 L 207.1 85.5 L 205.8 84.5 L 204.5 83.5 L 203.1 82.5 L 201.8 81.6 L 200.4 80.7 L 199 79.9 L 197.6 79.1 L 196.1 78.3 L 194.7 77.6 L 193.2 77 L 191.7 76.4 L 190.2 75.8 L 188.7 75.3 L 187.1 74.8 L 185.6 74.4 L 184.1 74 L 182.5 73.7 L 181 73.4 L 179.4 73.2 L 177.9 73 L 176.3 72.8 L 174.7 72.7 L 173.2 72.7 L 171.7 72.7 L 170.1 72.7 L 168.6 72.8 L 167.1 72.9 L 165.6 73.1 L 164.1 73.3 L 162.6 73.6 L 161.1 73.9 L 159.6 74.2 L 158.2 74.6 L 156.8 75.1 L 155.4 75.5 L 154 76 L 152.7 76.6 L 151.3 77.2 L 150 77.8 L 148.8 78.5 L 147.5 79.2 L 146.3 79.9 L 145.1 80.6 L 143.9 81.4 L 142.8 82.3 L 141.7 83.1 L 140.6 84 L 139.6 84.9 L 138.6 85.8 L 137.6 86.8 L 136.7 87.8 L 135.8 88.8 L 134.9 89.8 L 134.1 90.8 L 133.3 91.9 L 132.6 93 L 131.9 94.1 L 131.2 95.2 L 130.6 96.3 L 130 97.4 L 129.5 98.6 L 128.9 99.7 L 128.5 100.9 L 128 102 L 127.7 103.2 L 127.3 104.4 L 127 105.6 L 126.7 106.7 L 126.5 107.9 L 126.3 109.1 L 126.2 110.2 L 126 111.4 L 126 112.5 L 125.9 113.7 L 125.9 114.8 L 126 116 L 126 117.1 L 126.2 118.2 L 126.3 119.3 L 126.5 120.3 L 126.7 121.4 L 126.9 122.4 L 127.2 123.4 L 127.5 124.4 L 127.9 125.4 L 128.2 126.4 L 128.6 127.3 L 129.1 128.2 L 129.5 129.1 L 130 130" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent"><path d="M 130 130 L 129.5 130.9 L 129.1 131.8 L 128.6 132.7 L 128.2 133.6 L 127.9 134.6 L 127.5 135.6 L 127.2 136.6 L 126.9 137.6 L 126.7 138.6 L 126.5 139.7 L 126.3 140.7 L 126.2 141.8 L 126 142.9 L 126 144 L 125.9 145.2 L 125.9 146.3 L 126 147.5 L 126 148.6 L 126.2 149.8 L 126.3 150.9 L 126.5 152.1 L 126.7 153.3 L 127 154.4 L 127.3 155.6 L 127.7 156.8 L 128 158 L 128.5 159.1 L 128.9 160.3 L 129.5 161.4 L 130 162.6 L 130.6 163.7 L 131.2 164.8 L 131.9 165.9 L 132.6 167 L 133.3 168.1 L 134.1 169.2 L 134.9 170.2 L 135.8 171.2 L 136.7 172.2 L 137.6 173.2 L 138.6 174.2 L 139.6 175.1 L 140.6 176 L 141.7 176.9 L 142.8 177.7 L 143.9 178.6 L 145.1 179.4 L 146.3 180.1 L 147.5 180.8 L 148.8 181.5 L 150 182.2 L 151.3 182.8 L 152.7 183.4 L 154 184 L 155.4 184.5 L 156.8 184.9 L 158.2 185.4 L 159.6 185.8 L 161.1 186.1 L 162.6 186.4 L 164.1 186.7 L 165.6 186.9 L 167.1 187.1 L 168.6 187.2 L 170.1 187.3 L 171.7 187.3 L 173.2 187.3 L 174.7 187.3 L 176.3 187.2 L 177.9 187 L 179.4 186.8 L 181 186.6 L 182.5 186.3 L 184.1 186 L 185.6 185.6 L 187.1 185.2 L 188.7 184.7 L 190.2 184.2 L 191.7 183.6 L 193.2 183 L 194.7 182.4 L 196.1 181.7 L 197.6 180.9 L 199 180.1 L 200.4 179.3 L 201.8 178.4 L 203.1 177.5 L 204.5 176.5 L 205.8 175.5 L 207.1 174.5 L 208.3 173.4 L 209.5 172.3 L 210.7 171.1 L 211.9 169.9 L 213 168.7 L 214.1 167.5 L 215.2 166.2 L 216.2 164.8 L 217.2 163.5 L 218.1 162.1 L 219 160.7 L 219.9 159.2 L 220.7 157.7 L 221.5 156.2 L 222.2 154.7 L 222.9 153.2 L 223.6 151.6 L 224.2 150 L 224.7 148.4 L 225.3 146.8 L 225.7 145.2 L 226.1 143.5 L 226.5 141.8 L 226.8 140.2 L 227.1 138.5 L 227.3 136.8 L 227.5 135.1 L 227.6 133.4 L 227.7 131.7 L 227.7 130" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent-2"><path d="M 130 130 L 130.5 130.8 L 131 131.7 L 131.6 132.4 L 132.2 133.2 L 132.7 133.9 L 133.4 134.6 L 134 135.3 L 134.6 135.9 L 135.3 136.5 L 136 137.1 L 136.7 137.7 L 137.4 138.2 L 138.1 138.7 L 138.8 139.1 L 139.5 139.5 L 140.3 139.9 L 141 140.3 L 141.8 140.6 L 142.5 140.9 L 143.3 141.1 L 144 141.4 L 144.8 141.6 L 145.5 141.7 L 146.3 141.8 L 147 141.9 L 147.8 142 L 148.5 142 L 149.2 142 L 149.9 142 L 150.6 141.9 L 151.3 141.8 L 152 141.7 L 152.7 141.6 L 153.3 141.4 L 154 141.2 L 154.6 141 L 155.2 140.7 L 155.8 140.4 L 156.4 140.1 L 156.9 139.8 L 157.4 139.4 L 157.9 139.1 L 158.4 138.7 L 158.9 138.3 L 159.3 137.9 L 159.7 137.4 L 160.1 137 L 160.5 136.5 L 160.8 136 L 161.1 135.5 L 161.4 135 L 161.6 134.4 L 161.8 133.9 L 162 133.4 L 162.2 132.8 L 162.3 132.3 L 162.4 131.7 L 162.5 131.1 L 162.6 130.6 L 162.6 130 L 162.6 129.4 L 162.5 128.9 L 162.4 128.3 L 162.3 127.7 L 162.2 127.2 L 162 126.6 L 161.8 126.1 L 161.6 125.6 L 161.4 125 L 161.1 124.5 L 160.8 124 L 160.5 123.5 L 160.1 123 L 159.7 122.6 L 159.3 122.1 L 158.9 121.7 L 158.4 121.3 L 157.9 120.9 L 157.4 120.6 L 156.9 120.2 L 156.4 119.9 L 155.8 119.6 L 155.2 119.3 L 154.6 119 L 154 118.8 L 153.3 118.6 L 152.7 118.4 L 152 118.3 L 151.3 118.2 L 150.6 118.1 L 149.9 118 L 149.2 118 L 148.5 118 L 147.8 118 L 147 118.1 L 146.3 118.2 L 145.5 118.3 L 144.8 118.4 L 144 118.6 L 143.3 118.9 L 142.5 119.1 L 141.8 119.4 L 141 119.7 L 140.3 120.1 L 139.5 120.5 L 138.8 120.9 L 138.1 121.3 L 137.4 121.8 L 136.7 122.3 L 136 122.9 L 135.3 123.5 L 134.6 124.1 L 134 124.7 L 133.4 125.4 L 132.7 126.1 L 132.2 126.8 L 131.6 127.6 L 131 128.3 L 130.5 129.2 L 130 130" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></g><g class="fig-accent"><text x="14" y="16" font-size="12" fill="currentColor" text-anchor="start">r = 1 + 2cos θ</text></g><g class="fig-accent-2"><text x="14" y="30" font-size="10" fill="currentColor" text-anchor="start">inner loop: 2π/3 ≤ θ ≤ 4π/3</text></g></svg>',
          alt: 'Polar graph of r = 1 + 2 cos theta: a limaçon with a large outer loop reaching 3 units to the right of the pole and a small inner loop, 1 unit wide, just to the right of the pole. The inner loop, traced for theta between 2 pi/3 and 4 pi/3, is highlighted in the same color as the shaded interval.',
          caption: 'Polar graph; the highlighted inner loop is exactly the shaded (negative-$r$) interval.',
          size: 'sm' as const,
        },
      ],
      content: `
## 📝 Worked Example: $r = 1 + 2\\cos\\theta$

### Step 1: Key values

| $\\theta$ | $0$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\pi$ | $\\frac{4\\pi}{3}$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |
|:--|:--|:--|:--|:--|:--|:--|:--|
| $r$ | $3$ | $1$ | $0$ | $-1$ | $0$ | $1$ | $3$ |

$r = 0$ when $\\cos\\theta = -\\frac{1}{2}$, so at $\\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$.

### Step 2: Read the rectangular graph interval by interval

| Interval of $\\theta$ | Sign of $r$ | Angles point into | Points are plotted in |
|:----------------------|:------------|:------------------|:----------------------|
| $0 \\le \\theta \\le \\frac{\\pi}{2}$ | positive, $3 \\to 1$ | Quadrant I | Quadrant I |
| $\\frac{\\pi}{2} \\le \\theta \\le \\frac{2\\pi}{3}$ | positive, $1 \\to 0$ | Quadrant II | Quadrant II |
| $\\frac{2\\pi}{3} \\le \\theta \\le \\pi$ | negative, $0 \\to -1$ | Quadrant II | Quadrant IV |
| $\\pi \\le \\theta \\le \\frac{4\\pi}{3}$ | negative, $-1 \\to 0$ | Quadrant III | Quadrant I |
| $\\frac{4\\pi}{3} \\le \\theta \\le 2\\pi$ | positive, $0 \\to 3$ | Quadrants III, IV | Quadrants III, IV |

### Step 3: Draw

The positive pieces form the large outer loop. The negative pieces, from $\\theta = \\frac{2\\pi}{3}$ to $\\theta = \\frac{4\\pi}{3}$, are flipped through the pole into Quadrants IV and I, forming the **inner loop**. That inner loop is exactly the part of the curve where $r < 0$: compare the shaded interval of the rectangular graph with the highlighted loop of the polar graph above.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Reading Polar Function Graphs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A polar function has $f\\left(\\frac{5\\pi}{6}\\right) = -2$. Where is the point $\\left(f\\left(\\frac{5\\pi}{6}\\right), \\frac{5\\pi}{6}\\right)$ located?',
            options: ['Quadrant IV, 2 units from the pole', 'Quadrant II, 2 units from the pole', 'Quadrant III, 2 units from the pole', 'Quadrant I, 2 units from the pole'],
            correctAnswer: 0,
            explanation: 'The angle $\\frac{5\\pi}{6}$ points into Quadrant II, but $r < 0$ sends the point 2 units along the opposite ray, into Quadrant IV.'
          },
          {
            question: 'The rectangular graph of $r = f(\\theta)$ crosses the $\\theta$-axis at $\\theta = \\frac{\\pi}{3}$. What happens on the polar graph at that angle?',
            options: ['The curve crosses the horizontal axis', 'The curve passes through the pole', 'The curve is farthest from the pole', 'The curve crosses the line $\\theta = \\frac{\\pi}{2}$'],
            correctAnswer: 1,
            explanation: 'A $\\theta$-intercept means $f\\left(\\frac{\\pi}{3}\\right) = 0$, and a radius of 0 puts the point at the pole.'
          },
          {
            question: 'On which interval is $r = 1 + 2\\cos\\theta$ negative, tracing the inner loop?',
            options: ['$\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{2}$', '$\\frac{\\pi}{3} < \\theta < \\frac{5\\pi}{3}$', '$\\frac{2\\pi}{3} < \\theta < \\frac{4\\pi}{3}$', '$\\pi < \\theta < 2\\pi$'],
            correctAnswer: 2,
            explanation: '$1 + 2\\cos\\theta < 0$ when $\\cos\\theta < -\\frac{1}{2}$, which happens strictly between $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$.'
          }
        ]
      }
    },
    {
      id: 'p5-domain',
      type: 'text' as const,
      content: `
## ✂️ Restricting the Domain

Often you want only **part** of a polar curve: one petal, the inner loop, or half of a circle. Choose the starting and ending angles so the graph begins and ends at the points you want.

### Example 1: One petal of $r = 4\\sin(2\\theta)$

$r = 0$ at $\\theta = 0$ and again at $\\theta = \\frac{\\pi}{2}$, and $r > 0$ in between. Every angle in between points into Quadrant I, so

$$0 \\le \\theta \\le \\frac{\\pi}{2}$$

draws exactly the Quadrant I petal, reaching $r = 4$ at $\\theta = \\frac{\\pi}{4}$.

### Example 2: The inner loop of $r = 1 + 2\\cos\\theta$

The inner loop starts and ends at the pole, where $r = 0$:

$$\\frac{2\\pi}{3} \\le \\theta \\le \\frac{4\\pi}{3}$$

### Example 3: The upper half of $r = 4\\cos\\theta$

The full circle is traced once on $0 \\le \\theta \\le \\pi$. On $0 \\le \\theta \\le \\frac{\\pi}{2}$, $r \\ge 0$ and the angles point into Quadrant I, so $y = r\\sin\\theta \\ge 0$: that is the **upper** half. On $\\frac{\\pi}{2} \\le \\theta \\le \\pi$, $r \\le 0$ and the points land in Quadrant IV: the **lower** half.

> ⚠️ Pick endpoints by checking **both** the angle and the sign of $r$. An interval of angles in Quadrant II can draw points in Quadrant IV when $r$ is negative.
      `
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Signed Radius Practice** 🧮

For $r = 2 + 4\\cos\\theta$:

**1)** What is $r$ at $\\theta = \\pi$? (e.g., for $r = 1 + 4\\cos\\theta$ at $\\theta = \\pi$: $r = 1 - 4 = -3$)

**2)** How far from the pole is the point at $\\theta = \\pi$? (Distance is never negative.)

**3)** How many times does the graph pass through the pole for $0 \\le \\theta < 2\\pi$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '2', '2'],
        hint1: '$\\cos\\pi = -1$, so $r = 2 + 4(-1)$.',
        hint2: 'Distance from the pole is $|r|$.',
        hint3: 'Solve $2 + 4\\cos\\theta = 0$: $\\cos\\theta = -\\frac{1}{2}$ at $\\theta = \\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$.',
        explanation: '1) $r = -2$. 2) The distance is $|-2| = 2$; the point is plotted at $(2, 0)$ in rectangular coordinates. 3) $r = 0$ at $\\theta = \\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$, so 2 times.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which restriction draws only the upper half of the circle $r = 6\\cos\\theta$?',
            options: ['$0 \\le \\theta \\le \\frac{3\\pi}{2}$', '$0 \\le \\theta \\le \\frac{\\pi}{2}$', '$\\frac{\\pi}{2} \\le \\theta \\le \\pi$', '$-\\frac{\\pi}{2} \\le \\theta \\le 0$'],
            correctAnswer: 1,
            explanation: 'On $0 \\le \\theta \\le \\frac{\\pi}{2}$, $r \\ge 0$ and the angles point into Quadrant I, so every point has $y \\ge 0$. On $\\frac{\\pi}{2} \\le \\theta \\le \\pi$ the radius is negative and the points fall below the axis.'
          },
          {
            question: 'For $\\frac{\\pi}{2} < \\theta < \\pi$, a polar function has $f(\\theta) < 0$. Where are those points of the graph?',
            options: ['In Quadrant II, along each ray', 'In Quadrant IV, opposite each ray', 'In Quadrant III, below each ray', 'On the polar axis, at the pole'],
            correctAnswer: 1,
            explanation: 'Angles between $\\frac{\\pi}{2}$ and $\\pi$ point into Quadrant II; a negative radius sends each point along the opposite ray, into Quadrant IV.'
          }
        ]
      }
    }
  ]
};
