const turbineFigure = {
  svg: '<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="160" x2="340" y2="160"/><line x1="40" y1="110" x2="340" y2="110"/><line x1="40" y1="60" x2="340" y2="60"/><line x1="115" y1="30" x2="115" y2="210"/><line x1="190" y1="30" x2="190" y2="210"/><line x1="265" y1="30" x2="265" y2="210"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="210" x2="345" y2="210"/><line x1="40" y1="215" x2="40" y2="25"/></g><g class="fig-accent"><polyline fill="none" stroke="currentColor" stroke-width="2.5" points="40,60 41.2,60.1 42.5,60.3 43.8,60.6 45,61.1 46.2,61.7 47.5,62.4 48.8,63.3 50,64.3 51.2,65.4 52.5,66.7 53.8,68.1 55,69.5 56.2,71.1 57.5,72.8 58.8,74.6 60,76.5 61.2,78.5 62.5,80.6 63.8,82.8 65,85 66.2,87.3 67.5,89.7 68.8,92.1 70,94.5 71.2,97.1 72.5,99.6 73.8,102.2 75,104.8 76.2,107.4 77.5,110 78.8,112.6 80,115.2 81.2,117.8 82.5,120.4 83.8,122.9 85,125.5 86.2,127.9 87.5,130.3 88.8,132.7 90,135 91.2,137.2 92.5,139.4 93.8,141.5 95,143.5 96.2,145.4 97.5,147.2 98.8,148.9 100,150.5 101.2,151.9 102.5,153.3 103.8,154.6 105,155.7 106.2,156.7 107.5,157.6 108.8,158.3 110,158.9 111.2,159.4 112.5,159.7 113.8,159.9 115,160 116.2,159.9 117.5,159.7 118.8,159.4 120,158.9 121.2,158.3 122.5,157.6 123.8,156.7 125,155.7 126.2,154.6 127.5,153.3 128.8,151.9 130,150.5 131.2,148.9 132.5,147.2 133.8,145.4 135,143.5 136.2,141.5 137.5,139.4 138.8,137.2 140,135 141.2,132.7 142.5,130.3 143.8,127.9 145,125.5 146.2,122.9 147.5,120.4 148.8,117.8 150,115.2 151.2,112.6 152.5,110 153.8,107.4 155,104.8 156.2,102.2 157.5,99.6 158.8,97.1 160,94.5 161.2,92.1 162.5,89.7 163.8,87.3 165,85 166.2,82.8 167.5,80.6 168.8,78.5 170,76.5 171.2,74.6 172.5,72.8 173.8,71.1 175,69.5 176.2,68.1 177.5,66.7 178.8,65.4 180,64.3 181.2,63.3 182.5,62.4 183.8,61.7 185,61.1 186.2,60.6 187.5,60.3 188.8,60.1 190,60 191.2,60.1 192.5,60.3 193.8,60.6 195,61.1 196.2,61.7 197.5,62.4 198.8,63.3 200,64.3 201.2,65.4 202.5,66.7 203.8,68.1 205,69.5 206.2,71.1 207.5,72.8 208.8,74.6 210,76.5 211.2,78.5 212.5,80.6 213.8,82.8 215,85 216.2,87.3 217.5,89.7 218.8,92.1 220,94.5 221.2,97.1 222.5,99.6 223.8,102.2 225,104.8 226.2,107.4 227.5,110 228.8,112.6 230,115.2 231.2,117.8 232.5,120.4 233.8,122.9 235,125.5 236.2,127.9 237.5,130.3 238.8,132.7 240,135 241.3,137.2 242.5,139.4 243.8,141.5 245,143.5 246.2,145.4 247.5,147.2 248.8,148.9 250,150.5 251.2,151.9 252.5,153.3 253.8,154.6 255,155.7 256.2,156.7 257.5,157.6 258.8,158.3 260,158.9 261.2,159.4 262.5,159.7 263.8,159.9 265,160 266.2,159.9 267.5,159.7 268.8,159.4 270,158.9 271.2,158.3 272.5,157.6 273.8,156.7 275,155.7 276.2,154.6 277.5,153.3 278.8,151.9 280,150.5 281.2,148.9 282.5,147.2 283.8,145.4 285,143.5 286.2,141.5 287.5,139.4 288.8,137.2 290,135 291.2,132.7 292.5,130.3 293.8,127.9 295,125.5 296.2,122.9 297.5,120.4 298.8,117.8 300,115.2 301.2,112.6 302.5,110 303.8,107.4 305,104.8 306.2,102.2 307.5,99.6 308.8,97.1 310,94.5 311.2,92.1 312.5,89.7 313.8,87.3 315,85 316.2,82.8 317.5,80.6 318.8,78.5 320,76.5 321.2,74.6 322.5,72.8 323.8,71.1 325,69.5 326.2,68.1 327.5,66.7 328.8,65.4 330,64.3 331.2,63.3 332.5,62.4 333.8,61.7 335,61.1 336.2,60.6 337.5,60.3 338.8,60.1 340,60"/><circle cx="40" cy="60" r="4" fill="currentColor"/><circle cx="115" cy="160" r="4" fill="currentColor"/><circle cx="190" cy="60" r="4" fill="currentColor"/><circle cx="265" cy="160" r="4" fill="currentColor"/><circle cx="340" cy="60" r="4" fill="currentColor"/></g><g fill="currentColor"><text x="40" y="226" text-anchor="middle">0</text><text x="115" y="226" text-anchor="middle">3</text><text x="190" y="226" text-anchor="middle">6</text><text x="265" y="226" text-anchor="middle">9</text><text x="340" y="226" text-anchor="middle">12</text><text x="34" y="164" text-anchor="end">40</text><text x="34" y="114" text-anchor="end">80</text><text x="34" y="64" text-anchor="end">120</text><text x="345" y="226" text-anchor="end" font-style="italic">t (s)</text><text x="12" y="30" font-style="italic">h</text><text x="12" y="42">(m)</text></g></svg>',
  alt: 'Graph of the height h, in meters, of a wind-turbine blade tip against time t in seconds, from t = 0 to t = 12. The curve is a cosine wave starting at a maximum of 120 at t = 0, falling to a minimum of 40 at t = 3, rising back to 120 at t = 6, falling to 40 at t = 9 and returning to 120 at t = 12. Dashed horizontal lines mark h = 40, 80 and 120; dashed vertical lines mark t = 3, 6 and 9. Filled dots mark the five maximum and minimum points.',
  caption: 'Figure 1. The height $h(t)$ of the blade tip; the pattern repeats every $6$ seconds.',
  size: 'md' as const,
}

export const precalcFrqStrategiesPart4Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs4-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 4 of 7 — Question 3: Modeling a Periodic Context**

### The Shape of Question 3

Question 3 opens Part B: **no calculator**. It describes something that **repeats** (a rotating wheel or blade, a tide, a bouncing spring, a seasonal temperature) and gives a **graph** of the quantity, usually marking a maximum, a minimum and the period. Everything must be exact: $\\pi$ stays $\\pi$.

| Part | Typical task | What earns the point |
|:---:|:---|:---|
| (A)(i) | Read the **midline**, **amplitude** and **period** from the graph | midline $= \\frac{\\max + \\min}{2}$, amplitude $= \\frac{\\max - \\min}{2}$, period $=$ one full cycle |
| (A)(ii) | Write a sinusoidal function $f(t) = a\\sin(b(t + c)) + d$ or with cosine | $b = \\frac{2\\pi}{\\text{period}}$; any correct equivalent form |
| (B)(i) | Evaluate the model at a given time | exact value, from the unit circle |
| (B)(ii) | Find **all** times in an interval when the quantity equals a value | every solution in the interval, exact |
| (C) | Describe how the quantity changes on a sub-interval | **increasing or decreasing**, and **rate of change increasing or decreasing** (concavity), with a reason from the graph |

> **Key Fact:** The period is the time for **one complete cycle** (maximum to the next maximum), not the time from a maximum to the next minimum, which is **half** a period.`
    },
    {
      id: 'pfs4-worked',
      type: 'figure' as const,
      figure: turbineFigure,
      content: `## Worked Question 3

The graph shows the height $h$, in meters above the ground, of the tip of a wind-turbine blade $t$ seconds after the tip passes its highest point. The tip is $120$ meters high at $t = 0$, $40$ meters high at $t = 3$, and back to $120$ meters at $t = 6$; the motion repeats every $6$ seconds.

### (A)(i) State the midline, amplitude and period of $h$.

$$\\text{midline } h = \\frac{120 + 40}{2} = 80, \\qquad \\text{amplitude} = \\frac{120 - 40}{2} = 40, \\qquad \\text{period} = 6 \\text{ seconds}$$

### (A)(ii) Write a sinusoidal function that models $h(t)$.

The graph is at its **maximum** at $t = 0$, so a cosine with no horizontal shift fits. $b = \\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}$.

$$h(t) = 40\\cos\\left(\\frac{\\pi}{3}t\\right) + 80$$

Equivalent correct forms also earn the point: $h(t) = 40\\sin\\left(\\frac{\\pi}{3}(t + 1.5)\\right) + 80$ or $h(t) = -40\\cos\\left(\\frac{\\pi}{3}(t - 3)\\right) + 80$.

### (B)(i) Find $h(1)$.

$$h(1) = 40\\cos\\left(\\frac{\\pi}{3}\\right) + 80 = 40 \\cdot \\frac{1}{2} + 80 = 100 \\text{ meters}$$

### (B)(ii) Find all times $t$ in $0 \\le t \\le 6$ when the tip is $100$ meters high.

$$40\\cos\\left(\\frac{\\pi}{3}t\\right) + 80 = 100 \\;\\Rightarrow\\; \\cos\\left(\\frac{\\pi}{3}t\\right) = \\frac{1}{2}$$

On one cycle $0 \\le \\frac{\\pi}{3}t < 2\\pi$: $\\dfrac{\\pi}{3}t = \\dfrac{\\pi}{3}$ or $\\dfrac{\\pi}{3}t = \\dfrac{5\\pi}{3}$, so $t = 1$ or $t = 5$.

**Answer:** $t = 1$ second and $t = 5$ seconds. (Giving only $t = 1$ loses the point: the question says **all** times.)

### (C) On the interval $3 < t < 4.5$, is $h$ increasing or decreasing, and is the rate of change of $h$ increasing or decreasing? Give a reason.

**Answer:** "On $3 < t < 4.5$ the tip rises from its minimum of $40$ meters toward the midline of $80$ meters, so $h$ is **increasing**. The graph is **concave up** there (the curve bends upward as it leaves the minimum), so the rate of change of $h$ is **increasing**: the tip is rising faster and faster."

### Scoring guide

| Part | Point | Earned by |
|:---:|:---:|:---|
| (A)(i) | 1 | midline $80$, amplitude $40$, period $6$ |
| (A)(ii) | 1 | a correct sinusoid (any equivalent form) |
| (B)(i) | 1 | $h(1) = 100$ |
| (B)(ii) | 1 | $t = 1$ **and** $t = 5$ |
| (C) | 2 | increasing, with reason; rate of change increasing (concave up), with reason |

> **Key Fact:** Between a **minimum and the midline** a sinusoid is increasing and concave up (rate increasing). Between the **midline and a maximum** it is increasing and concave down (rate decreasing).`
    },
    {
      id: 'pfs4-mc',
      type: 'multiple-choice' as const,
      figure: turbineFigure,
      content: '**Question 3 practice.** 🎯 Use the graph of the blade-tip height above.',
      exercise: {
        questions: [
          {
            question: 'Which set of features is read correctly from the graph?',
            options: ['Amplitude $40$, period $6$, midline $h = 80$', 'Amplitude $80$, period $6$, midline $h = 80$', 'Amplitude $40$, period $3$, midline $h = 80$', 'Amplitude $40$, period $6$, midline $h = 120$'],
            correctAnswer: 0,
            explanation: 'Amplitude is half the distance from minimum to maximum, $\\frac{120 - 40}{2} = 40$; the period is a full cycle, maximum to maximum, $6$ seconds; the midline is the average of maximum and minimum, $80$. The value $80$ is the full range, $3$ is half a period, and $120$ is the maximum.'
          },
          {
            question: 'Which function is equivalent to $h(t) = 40\\cos\\left(\\frac{\\pi}{3}t\\right) + 80$?',
            options: ['$40\\sin\\left(\\dfrac{\\pi}{3}(t + 1.5)\\right) + 80$', '$40\\sin\\left(\\dfrac{\\pi}{3}t\\right) + 80$', '$40\\sin\\left(\\dfrac{\\pi}{3}(t - 1.5)\\right) + 80$', '$80\\sin\\left(\\dfrac{\\pi}{3}(t + 1.5)\\right) + 40$'],
            correctAnswer: 0,
            explanation: 'A sine curve reaches its maximum a quarter period after its midline crossing, so shifting sine left by $\\frac{6}{4} = 1.5$ puts the maximum at $t = 0$: $\\sin\\left(\\frac{\\pi}{3}(0 + 1.5)\\right) = \\sin\\frac{\\pi}{2} = 1$. Unshifted sine starts at the midline, shifting right $1.5$ starts at the minimum, and the last option has amplitude $80$ and midline $40$.'
          },
          {
            question: 'On the interval $3 < t < 4.5$, which statement is correct?',
            options: ['$h$ is increasing, and its rate of change is increasing', '$h$ is increasing, and its rate of change is decreasing', '$h$ is decreasing, and its rate of change is increasing', '$h$ is decreasing, and its rate of change is decreasing'],
            correctAnswer: 0,
            explanation: 'From the minimum at $t = 3$ the tip rises toward the midline at $t = 4.5$, so $h$ is increasing; the graph is concave up on that stretch, so the rate of change is increasing. The rate would be decreasing between the midline and the next maximum, $4.5 < t < 6$.'
          }
        ]
      }
    },
    {
      id: 'pfs4-input',
      type: 'input-boxes' as const,
      content: `**Exact values from the model $h(t) = 40\\cos\\left(\\frac{\\pi}{3}t\\right) + 80$.** ✍️

**1)** $h(2)$, in meters:

**2)** $h(4.5)$, in meters:

**3)** The first time $t > 0$, in seconds, at which the tip is $40$ meters high:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '80', '3'],
        hint1: '$\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$.',
        hint2: '$\\frac{\\pi}{3}(4.5) = \\frac{3\\pi}{2}$, where cosine is $0$.',
        hint3: 'The minimum occurs when $\\cos\\left(\\frac{\\pi}{3}t\\right) = -1$.',
        explanation: '(1) $h(2) = 40\\cos\\frac{2\\pi}{3} + 80 = 40\\left(-\\frac{1}{2}\\right) + 80 = 60$. (2) $h(4.5) = 40\\cos\\frac{3\\pi}{2} + 80 = 0 + 80 = 80$, the midline. (3) $\\cos\\left(\\frac{\\pi}{3}t\\right) = -1$ first when $\\frac{\\pi}{3}t = \\pi$, so $t = 3$.'
      }
    },
    {
      id: 'pfs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Read the graph: midline $\\frac{\\max + \\min}{2}$, amplitude $\\frac{\\max - \\min}{2}$, period $=$ one full cycle, $b = \\frac{2\\pi}{\\text{period}}$
- A maximum at $t = 0$ suggests **cosine**; any **equivalent form** (shifted sine, negative cosine) earns the point
- "Find all times" means **every** solution in the interval; exact values only in Part B
- Describe change with two statements: **increasing/decreasing** and **rate of change increasing/decreasing**, each with a reason from the graph`
    }
  ]
};
