export const precalcPolarPart6Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📏 Polar Rates of Change and Distance from the Origin

**Part 6 of 7 — Polar Rates of Change and Distance from the Origin**

For a polar function $r = f(\\theta)$, the distance from the point $(f(\\theta), \\theta)$ to the origin is $\\lvert f(\\theta) \\rvert$. So whether the curve is moving **away from** or **toward** the origin depends on two things at once: the **sign** of $r$ and whether $r$ is **increasing or decreasing**.

### The Four Cases

| $r = f(\\theta)$ is | and is | so $\\lvert r \\rvert$ is | Distance from the origin is |
|:--------------------|:-------|:------------|:----------------------------|
| positive | increasing | growing | **increasing** |
| positive | decreasing | shrinking | **decreasing** |
| negative | decreasing | growing (e.g. $-1 \\to -3$) | **increasing** |
| negative | increasing | shrinking (e.g. $-3 \\to -1$) | **decreasing** |

$$\\boxed{\\text{Same direction (positive and increasing, or negative and decreasing)} \\implies \\text{moving away from the origin}}$$

$$\\boxed{\\text{Opposite direction (positive and decreasing, or negative and increasing)} \\implies \\text{moving toward the origin}}$$

### Relative Extrema

If $r = f(\\theta)$ changes from increasing to decreasing (or from decreasing to increasing) on an interval, then $f$ has a **relative extremum** there, and that point is **relatively closest to or farthest from** the origin. A relative minimum with a **negative** value, such as $r = -3$, is a farthest point, because its distance is $3$.
      `
    },
    {
      id: 'p6-example',
      type: 'text' as const,
      figure: [
        {
          svg: '<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>Rectangular graph of r = 3 sin 2 theta on 0 to pi</title><g stroke="currentColor" stroke-width="1.4"><line x1="24" y1="107" x2="330" y2="107"/><line x1="30" y1="204" x2="30" y2="10"/></g><text x="332" y="111" font-size="12" fill="currentColor">θ</text><text x="36" y="12" font-size="12" fill="currentColor">r</text><line x1="104" y1="104" x2="104" y2="110" stroke="currentColor" stroke-width="1"/><text x="104" y="121" font-size="10.5" fill="currentColor" text-anchor="middle">π/4</text><line x1="178" y1="104" x2="178" y2="110" stroke="currentColor" stroke-width="1"/><text x="178" y="121" font-size="10.5" fill="currentColor" text-anchor="middle">π/2</text><line x1="252" y1="104" x2="252" y2="110" stroke="currentColor" stroke-width="1"/><text x="252" y="121" font-size="10.5" fill="currentColor" text-anchor="middle">3π/4</text><line x1="326" y1="104" x2="326" y2="110" stroke="currentColor" stroke-width="1"/><text x="326" y="121" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="27" y1="184.5" x2="33" y2="184.5" stroke="currentColor" stroke-width="1"/><text x="24" y="188" font-size="10.5" fill="currentColor" text-anchor="end">−3</text><line x1="27" y1="29.5" x2="33" y2="29.5" stroke="currentColor" stroke-width="1"/><text x="24" y="33" font-size="10.5" fill="currentColor" text-anchor="end">3</text><g class="fig-accent"><path d="M 30 107 L 31.5 104.6 L 33 102.1 L 34.4 99.7 L 35.9 97.3 L 37.4 94.9 L 38.9 92.5 L 40.4 90.1 L 41.8 87.7 L 43.3 85.4 L 44.8 83.1 L 46.3 80.7 L 47.8 78.5 L 49.2 76.2 L 50.7 74 L 52.2 71.8 L 53.7 69.7 L 55.2 67.5 L 56.6 65.5 L 58.1 63.4 L 59.6 61.4 L 61.1 59.5 L 62.6 57.6 L 64 55.7 L 65.5 53.9 L 67 52.2 L 68.5 50.5 L 70 48.9 L 71.4 47.3 L 72.9 45.8 L 74.4 44.3 L 75.9 42.9 L 77.4 41.6 L 78.8 40.3 L 80.3 39.1 L 81.8 37.9 L 83.3 36.9 L 84.8 35.9 L 86.2 34.9 L 87.7 34.1 L 89.2 33.3 L 90.7 32.6 L 92.2 31.9 L 93.6 31.4 L 95.1 30.9 L 96.6 30.5 L 98.1 30.1 L 99.6 29.8 L 101 29.7 L 102.5 29.5 L 104 29.5 L 105.5 29.5 L 107 29.7 L 108.4 29.8 L 109.9 30.1 L 111.4 30.5 L 112.9 30.9 L 114.4 31.4 L 115.8 31.9 L 117.3 32.6 L 118.8 33.3 L 120.3 34.1 L 121.8 34.9 L 123.2 35.9 L 124.7 36.9 L 126.2 37.9 L 127.7 39.1 L 129.2 40.3 L 130.6 41.6 L 132.1 42.9 L 133.6 44.3 L 135.1 45.8 L 136.6 47.3 L 138 48.9 L 139.5 50.5 L 141 52.2 L 142.5 53.9 L 144 55.7 L 145.4 57.6 L 146.9 59.5 L 148.4 61.4 L 149.9 63.4 L 151.4 65.5 L 152.8 67.5 L 154.3 69.7 L 155.8 71.8 L 157.3 74 L 158.8 76.2 L 160.2 78.5 L 161.7 80.7 L 163.2 83.1 L 164.7 85.4 L 166.2 87.7 L 167.6 90.1 L 169.1 92.5 L 170.6 94.9 L 172.1 97.3 L 173.6 99.7 L 175 102.1 L 176.5 104.6 L 178 107 L 179.5 109.4 L 181 111.9 L 182.4 114.3 L 183.9 116.7 L 185.4 119.1 L 186.9 121.5 L 188.4 123.9 L 189.8 126.3 L 191.3 128.6 L 192.8 130.9 L 194.3 133.3 L 195.8 135.5 L 197.2 137.8 L 198.7 140 L 200.2 142.2 L 201.7 144.3 L 203.2 146.5 L 204.6 148.5 L 206.1 150.6 L 207.6 152.6 L 209.1 154.5 L 210.6 156.4 L 212 158.3 L 213.5 160.1 L 215 161.8 L 216.5 163.5 L 218 165.1 L 219.4 166.7 L 220.9 168.2 L 222.4 169.7 L 223.9 171.1 L 225.4 172.4 L 226.8 173.7 L 228.3 174.9 L 229.8 176.1 L 231.3 177.1 L 232.8 178.1 L 234.2 179.1 L 235.7 179.9 L 237.2 180.7 L 238.7 181.4 L 240.2 182.1 L 241.6 182.6 L 243.1 183.1 L 244.6 183.5 L 246.1 183.9 L 247.6 184.2 L 249 184.3 L 250.5 184.5 L 252 184.5 L 253.5 184.5 L 255 184.3 L 256.4 184.2 L 257.9 183.9 L 259.4 183.5 L 260.9 183.1 L 262.4 182.6 L 263.8 182.1 L 265.3 181.4 L 266.8 180.7 L 268.3 179.9 L 269.8 179.1 L 271.2 178.1 L 272.7 177.1 L 274.2 176.1 L 275.7 174.9 L 277.2 173.7 L 278.6 172.4 L 280.1 171.1 L 281.6 169.7 L 283.1 168.2 L 284.6 166.7 L 286 165.1 L 287.5 163.5 L 289 161.8 L 290.5 160.1 L 292 158.3 L 293.4 156.4 L 294.9 154.5 L 296.4 152.6 L 297.9 150.6 L 299.4 148.5 L 300.8 146.5 L 302.3 144.3 L 303.8 142.2 L 305.3 140 L 306.8 137.8 L 308.2 135.5 L 309.7 133.3 L 311.2 130.9 L 312.7 128.6 L 314.2 126.3 L 315.6 123.9 L 317.1 121.5 L 318.6 119.1 L 320.1 116.7 L 321.6 114.3 L 323 111.9 L 324.5 109.4 L 326 107" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent"><circle cx="104" cy="29.5" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="252" cy="184.5" r="4" fill="currentColor"/></g><g class="fig-accent"><circle cx="178" cy="107" r="4" fill="currentColor"/></g><g class="fig-accent"><text x="112" y="27.5" font-size="10.5" fill="currentColor" text-anchor="start">max r = 3</text></g><g class="fig-accent-2"><text x="260" y="188.5" font-size="10.5" fill="currentColor" text-anchor="start">min r = −3</text></g><g class="fig-accent"><text x="41.3" y="26.9" font-size="11.5" fill="currentColor" text-anchor="start">r = 3sin 2θ</text></g></svg>',
          alt: 'Rectangular graph of r = 3 sin 2 theta for theta from 0 to pi: the curve rises from 0 to a maximum of r = 3 at theta = pi/4, falls through 0 at theta = pi/2 to a minimum of r = -3 at theta = 3 pi/4, and returns to 0 at theta = pi.',
          caption: 'Rectangular graph of $r = 3\\sin 2\\theta$ on $[0, \\pi]$: maximum $3$ at $\\frac{\\pi}{4}$, minimum $-3$ at $\\frac{3\\pi}{4}$.',
          size: 'sm' as const,
        },
        {
          svg: '<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>Polar graph of r = 3 sin 2 theta for theta from 0 to pi: a petal in Quadrant I and a petal in Quadrant IV</title><g class="fig-muted"><circle cx="130" cy="130" r="32.6" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="65.1" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="97.7" fill="none" stroke="currentColor" stroke-width="0.8"/><line x1="130" y1="130" x2="244" y2="130" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="228.7" y2="73" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="187" y2="31.3" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="130" y2="16" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="73" y2="31.3" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="31.3" y2="73" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="16" y2="130" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="31.3" y2="187" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="73" y2="228.7" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="130" y2="244" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="187" y2="228.7" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="228.7" y2="187" stroke="currentColor" stroke-width="0.6"/></g><g stroke="currentColor" stroke-width="1.3"><line x1="12" y1="130" x2="248" y2="130"/><line x1="130" y1="248" x2="130" y2="12"/></g><text x="163.6" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">1</text><text x="196.1" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">2</text><text x="228.7" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">3</text><g class="fig-accent"><path d="M 130 130 L 132.6 130 L 135.1 129.9 L 137.7 129.7 L 140.2 129.5 L 142.7 129.2 L 145.2 128.8 L 147.7 128.4 L 150.2 127.9 L 152.7 127.3 L 155.1 126.7 L 157.5 126 L 159.8 125.3 L 162.1 124.5 L 164.4 123.6 L 166.7 122.7 L 168.9 121.7 L 171 120.7 L 173.1 119.6 L 175.2 118.5 L 177.2 117.4 L 179.1 116.1 L 181 114.9 L 182.9 113.6 L 184.6 112.3 L 186.3 110.9 L 188 109.5 L 189.5 108 L 191 106.6 L 192.5 105.1 L 193.8 103.6 L 195.1 102 L 196.3 100.5 L 197.5 98.9 L 198.5 97.3 L 199.5 95.7 L 200.4 94.1 L 201.3 92.5 L 202 90.9 L 202.7 89.3 L 203.3 87.7 L 203.8 86.1 L 204.2 84.5 L 204.6 82.9 L 204.9 81.4 L 205.1 79.8 L 205.2 78.3 L 205.2 76.8 L 205.2 75.4 L 205.1 73.9 L 204.9 72.5 L 204.6 71.2 L 204.3 69.9 L 203.9 68.6 L 203.4 67.3 L 202.8 66.1 L 202.2 65 L 201.5 63.9 L 200.8 62.8 L 200 61.8 L 199.1 60.9 L 198.2 60 L 197.2 59.2 L 196.1 58.5 L 195 57.8 L 193.9 57.2 L 192.7 56.6 L 191.4 56.1 L 190.1 55.7 L 188.8 55.4 L 187.5 55.1 L 186.1 54.9 L 184.6 54.8 L 183.2 54.8 L 181.7 54.8 L 180.2 54.9 L 178.6 55.1 L 177.1 55.4 L 175.5 55.8 L 173.9 56.2 L 172.3 56.7 L 170.7 57.3 L 169.1 58 L 167.5 58.7 L 165.9 59.6 L 164.3 60.5 L 162.7 61.5 L 161.1 62.5 L 159.5 63.7 L 158 64.9 L 156.4 66.2 L 154.9 67.5 L 153.4 69 L 152 70.5 L 150.5 72 L 149.1 73.7 L 147.7 75.4 L 146.4 77.1 L 145.1 79 L 143.9 80.9 L 142.6 82.8 L 141.5 84.8 L 140.4 86.9 L 139.3 89 L 138.3 91.1 L 137.3 93.3 L 136.4 95.6 L 135.5 97.9 L 134.7 100.2 L 134 102.5 L 133.3 104.9 L 132.7 107.3 L 132.1 109.8 L 131.6 112.3 L 131.2 114.8 L 130.8 117.3 L 130.5 119.8 L 130.3 122.3 L 130.1 124.9 L 130 127.4 L 130 130" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent-2"><path d="M 130 130 L 130 132.6 L 130.1 135.1 L 130.3 137.7 L 130.5 140.2 L 130.8 142.7 L 131.2 145.2 L 131.6 147.7 L 132.1 150.2 L 132.7 152.7 L 133.3 155.1 L 134 157.5 L 134.7 159.8 L 135.5 162.1 L 136.4 164.4 L 137.3 166.7 L 138.3 168.9 L 139.3 171 L 140.4 173.1 L 141.5 175.2 L 142.6 177.2 L 143.9 179.1 L 145.1 181 L 146.4 182.9 L 147.7 184.6 L 149.1 186.3 L 150.5 188 L 152 189.5 L 153.4 191 L 154.9 192.5 L 156.4 193.8 L 158 195.1 L 159.5 196.3 L 161.1 197.5 L 162.7 198.5 L 164.3 199.5 L 165.9 200.4 L 167.5 201.3 L 169.1 202 L 170.7 202.7 L 172.3 203.3 L 173.9 203.8 L 175.5 204.2 L 177.1 204.6 L 178.6 204.9 L 180.2 205.1 L 181.7 205.2 L 183.2 205.2 L 184.6 205.2 L 186.1 205.1 L 187.5 204.9 L 188.8 204.6 L 190.1 204.3 L 191.4 203.9 L 192.7 203.4 L 193.9 202.8 L 195 202.2 L 196.1 201.5 L 197.2 200.8 L 198.2 200 L 199.1 199.1 L 200 198.2 L 200.8 197.2 L 201.5 196.1 L 202.2 195 L 202.8 193.9 L 203.4 192.7 L 203.9 191.4 L 204.3 190.1 L 204.6 188.8 L 204.9 187.5 L 205.1 186.1 L 205.2 184.6 L 205.2 183.2 L 205.2 181.7 L 205.1 180.2 L 204.9 178.6 L 204.6 177.1 L 204.2 175.5 L 203.8 173.9 L 203.3 172.3 L 202.7 170.7 L 202 169.1 L 201.3 167.5 L 200.4 165.9 L 199.5 164.3 L 198.5 162.7 L 197.5 161.1 L 196.3 159.5 L 195.1 158 L 193.8 156.4 L 192.5 154.9 L 191 153.4 L 189.5 152 L 188 150.5 L 186.3 149.1 L 184.6 147.7 L 182.9 146.4 L 181 145.1 L 179.1 143.9 L 177.2 142.6 L 175.2 141.5 L 173.1 140.4 L 171 139.3 L 168.9 138.3 L 166.7 137.3 L 164.4 136.4 L 162.1 135.5 L 159.8 134.7 L 157.5 134 L 155.1 133.3 L 152.7 132.7 L 150.2 132.1 L 147.7 131.6 L 145.2 131.2 L 142.7 130.8 L 140.2 130.5 L 137.7 130.3 L 135.1 130.1 L 132.6 130 L 130 130" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent"><circle cx="199.1" cy="60.9" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="199.1" cy="199.1" r="4" fill="currentColor"/></g><g class="fig-accent"><text x="191.1" y="52.9" font-size="10.5" fill="currentColor" text-anchor="end">r = 3 (θ = π/4)</text></g><g class="fig-accent-2"><text x="191.1" y="215.1" font-size="10.5" fill="currentColor" text-anchor="end">r = −3 (θ = 3π/4)</text></g><text x="14" y="16" font-size="11" fill="currentColor" text-anchor="start">0 ≤ θ ≤ π</text></svg>',
          alt: 'Polar graph of r = 3 sin 2 theta for theta from 0 to pi: one petal in Quadrant I whose tip, at angle pi/4, is 3 units from the pole (r = 3), and one petal in Quadrant IV whose tip is also 3 units from the pole, plotted at angle 3 pi/4 with r = -3.',
          caption: 'Polar graph: both petal tips are $3$ units from the pole, one with $r = 3$ and one with $r = -3$.',
          size: 'sm' as const,
        },
      ],
      content: `
## 📝 Worked Example: $r = 3\\sin(2\\theta)$ on $0 \\le \\theta \\le \\pi$

### Step 1: Key values

| $\\theta$ | $0$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{2}$ | $\\frac{3\\pi}{4}$ | $\\pi$ |
|:--|:--|:--|:--|:--|:--|
| $r$ | $0$ | $3$ | $0$ | $-3$ | $0$ |

### Step 2: Classify each interval

| Interval | $r$ is | Distance from the origin |
|:---------|:-------|:-------------------------|
| $0 < \\theta < \\frac{\\pi}{4}$ | positive and increasing ($0 \\to 3$) | increasing |
| $\\frac{\\pi}{4} < \\theta < \\frac{\\pi}{2}$ | positive and decreasing ($3 \\to 0$) | decreasing |
| $\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{4}$ | negative and decreasing ($0 \\to -3$) | increasing |
| $\\frac{3\\pi}{4} < \\theta < \\pi$ | negative and increasing ($-3 \\to 0$) | decreasing |

### Step 3: Interpret the extrema

- At $\\theta = \\frac{\\pi}{4}$, $r$ has a relative **maximum** of $3$: the tip of the Quadrant I petal, a point farthest from the origin.
- At $\\theta = \\frac{3\\pi}{4}$, $r$ has a relative **minimum** of $-3$: also a point farthest from the origin (distance $3$). It is plotted in Quadrant IV, the tip of another petal.
- At $\\theta = \\frac{\\pi}{2}$, $r = 0$: the curve is at the origin, its closest possible point.

> 💡 Notice that $r$ is **decreasing** on the whole interval $\\frac{\\pi}{4} < \\theta < \\frac{3\\pi}{4}$, yet the distance first shrinks and then grows. The sign change of $r$ at $\\frac{\\pi}{2}$ is what flips the behavior.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Distance from the Origin** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $r = 3\\sin(2\\theta)$, what happens to the points of the graph as $\\theta$ increases from $\\frac{\\pi}{2}$ to $\\frac{3\\pi}{4}$?',
            options: ['Their distance from the origin shrinks', 'Their distance from the origin grows', 'Their distance from the origin stays at 3', 'They stay on the polar axis the whole time'],
            correctAnswer: 1,
            explanation: 'On that interval $r$ is negative and decreasing, from $0$ to $-3$, so $|r|$ grows from $0$ to $3$ and the points move away from the origin.'
          },
          {
            question: 'A polar function $r = f(\\theta)$ has a relative minimum at $\\theta = \\frac{3\\pi}{2}$ with $f\\left(\\frac{3\\pi}{2}\\right) = -4$. What does this point represent?',
            options: ['A point that is relatively closest to the origin', 'A point where the curve passes through the pole', 'A point that is relatively farthest from the origin', 'A point where the curve meets the polar axis'],
            correctAnswer: 2,
            explanation: 'A relative extremum of $f$ is a relatively closest or farthest point. Here $|r| = 4$, and nearby values of $r$ are slightly greater than $-4$, so their distances are less than 4: this is a farthest point.'
          },
          {
            question: 'On an interval, $r = f(\\theta)$ is positive and decreasing. Which statement is true?',
            options: ['The distance from the origin is decreasing', 'The distance from the origin is growing', 'The curve is passing through the pole', 'The angle $\\theta$ is decreasing'],
            correctAnswer: 0,
            explanation: 'When $r > 0$, the distance from the origin is $r$ itself, so a decreasing $r$ means the points are moving toward the origin.'
          }
        ]
      }
    },
    {
      id: 'p6-aroc',
      type: 'text' as const,
      content: `
## 📐 Average Rate of Change of $r$

The **average rate of change** of $r$ with respect to $\\theta$ on $[\\theta_1, \\theta_2]$ is

$$\\frac{f(\\theta_2) - f(\\theta_1)}{\\theta_2 - \\theta_1}$$

It is the change in the **signed** radius divided by the change in angle, so its units are "radius units **per radian**."

### Example 1: From a formula

For $r = 3\\sin(2\\theta)$ on $\\left[0, \\frac{\\pi}{4}\\right]$:

$$\\frac{3 - 0}{\\frac{\\pi}{4} - 0} = \\frac{12}{\\pi} \\approx 3.82$$

On average, the signed radius grows by about $3.82$ units for each radian of rotation.

### Example 2: Estimating from a table

| $\\theta$ | $0$ | $\\frac{\\pi}{2}$ | $\\pi$ |
|:--|:--|:--|:--|
| $r = f(\\theta)$ | $2$ | $5$ | $3$ |

On $\\left[0, \\frac{\\pi}{2}\\right]$, the average rate of change is $\\frac{5 - 2}{\\frac{\\pi}{2}} = \\frac{6}{\\pi}$ per radian. To **estimate** $f\\left(\\frac{\\pi}{3}\\right)$, start at $\\theta = 0$ and apply that rate for $\\frac{\\pi}{3}$ radians:

$$f\\left(\\frac{\\pi}{3}\\right) \\approx 2 + \\frac{6}{\\pi}\\cdot\\frac{\\pi}{3} = 2 + 2 = 4$$

> ⚠️ This is an estimate, not an exact value: it assumes $r$ changes at a constant rate across the interval. A negative average rate of change means the **signed** radius is decreasing; it does not by itself say the curve is moving toward the origin. Check the sign of $r$ too.

### Example 3: Sign of the rate vs. distance from the origin

For $r = 1 + 2\\cos\\theta$ on $\\left[\\frac{2\\pi}{3}, \\pi\\right]$: $f\\!\\left(\\frac{2\\pi}{3}\\right) = 0$ and $f(\\pi) = -1$, so the average rate of change is $\\frac{-1 - 0}{\\pi/3} = -\\frac{3}{\\pi}$, **negative**. Yet $r$ is negative on this interval, so $\\lvert r \\rvert$ grows from $0$ to $1$: the curve is moving **away** from the origin (it is tracing the inner loop outward). Negative rate, increasing distance.
      `
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Average Rate of Change Practice** 🧮

A polar function has $f\\left(\\frac{\\pi}{4}\\right) = 5$ and $f\\left(\\frac{\\pi}{2}\\right) = 2$.

**1)** What is the change in $r$ from $\\theta = \\frac{\\pi}{4}$ to $\\theta = \\frac{\\pi}{2}$?

**2)** What is the average rate of change of $r$ on $\\left[\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right]$? (Enter in terms of pi, like "-8/pi")

**3)** Use that rate to estimate $f\\left(\\frac{3\\pi}{8}\\right)$. (Enter a decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-3', '-12/pi', '3.5'],
        hint1: 'Change in $r$ = $f\\left(\\frac{\\pi}{2}\\right) - f\\left(\\frac{\\pi}{4}\\right)$.',
        hint2: 'Divide the change in $r$ by the change in $\\theta$, which is $\\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$.',
        hint3: '$\\frac{3\\pi}{8}$ is $\\frac{\\pi}{8}$ past $\\frac{\\pi}{4}$, so the estimate is $5 + \\left(-\\frac{12}{\\pi}\\right)\\cdot\\frac{\\pi}{8}$.',
        explanation: '1) $2 - 5 = -3$. 2) $\\frac{-3}{\\pi/4} = -\\frac{12}{\\pi}$ per radian. 3) $5 - \\frac{12}{\\pi}\\cdot\\frac{\\pi}{8} = 5 - 1.5 = 3.5$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'On an interval, $r = f(\\theta)$ is negative and increasing. What is happening to the distance between the graph and the origin?',
            options: ['It is getting larger', 'It is decreasing', 'It stays the same', 'It increases, then decreases'],
            correctAnswer: 1,
            explanation: 'A negative $r$ that is increasing moves toward zero, for example from $-3$ to $-1$, so $|r|$ shrinks and the points approach the origin.'
          },
          {
            question: 'For $r = 2 + \\cos\\theta$, what is the average rate of change of $r$ on $[0, \\pi]$?',
            options: ['$-\\frac{1}{\\pi}$', '$-\\frac{2}{\\pi}$', '$\\frac{2}{\\pi}$', '$-2\\pi$'],
            correctAnswer: 1,
            explanation: '$f(0) = 3$ and $f(\\pi) = 1$, so the average rate of change is $\\frac{1 - 3}{\\pi - 0} = -\\frac{2}{\\pi}$ per radian.'
          }
        ]
      }
    }
  ]
};
