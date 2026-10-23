const reviewSinusoidFigure = {
  svg: '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="100" x2="340" y2="100"/><line x1="40" y1="40" x2="340" y2="40"/><line x1="40" y1="160" x2="340" y2="160"/><line x1="115" y1="30" x2="115" y2="190"/><line x1="190" y1="30" x2="190" y2="190"/><line x1="265" y1="30" x2="265" y2="190"/><line x1="340" y1="30" x2="340" y2="190"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="120" x2="345" y2="120"/><line x1="40" y1="195" x2="40" y2="20"/></g><g class="fig-accent"><polyline fill="none" stroke="currentColor" stroke-width="2.5" points="40,100 41,97.5 42,95 43,92.5 44,90 45,87.5 46,85.1 47,82.7 48,80.3 49,77.9 50,75.6 51,73.3 52,71.1 53,68.9 54,66.8 55,64.7 56,62.7 57,60.8 58,58.9 59,57.1 60,55.4 61,53.8 62,52.2 63,50.7 64,49.3 65,48 66,46.8 67,45.7 68,44.7 69,43.8 70,42.9 71,42.2 72,41.6 73,41.1 74,40.6 75,40.3 76,40.1 77,40 78,40 79,40.1 80,40.3 81,40.6 82,41.1 83,41.6 84,42.2 85,42.9 86,43.8 87,44.7 88,45.7 89,46.8 90,48 91,49.3 92,50.7 93,52.2 94,53.8 95,55.4 96,57.1 97,58.9 98,60.8 99,62.7 100,64.7 101,66.8 102,68.9 103,71.1 104,73.3 105,75.6 106,77.9 107,80.3 108,82.7 109,85.1 110,87.5 111,90 112,92.5 113,95 114,97.5 115,100 116,102.5 117,105 118,107.5 119,110 120,112.5 121,114.9 122,117.3 123,119.7 124,122.1 125,124.4 126,126.7 127,128.9 128,131.1 129,133.2 130,135.3 131,137.3 132,139.2 133,141.1 134,142.9 135,144.6 136,146.2 137,147.8 138,149.3 139,150.7 140,152 141,153.2 142,154.3 143,155.3 144,156.2 145,157.1 146,157.8 147,158.4 148,158.9 149,159.4 150,159.7 151,159.9 152,160 153,160 154,159.9 155,159.7 156,159.4 157,158.9 158,158.4 159,157.8 160,157.1 161,156.2 162,155.3 163,154.3 164,153.2 165,152 166,150.7 167,149.3 168,147.8 169,146.2 170,144.6 171,142.9 172,141.1 173,139.2 174,137.3 175,135.3 176,133.2 177,131.1 178,128.9 179,126.7 180,124.4 181,122.1 182,119.7 183,117.3 184,114.9 185,112.5 186,110 187,107.5 188,105 189,102.5 190,100 191,97.5 192,95 193,92.5 194,90 195,87.5 196,85.1 197,82.7 198,80.3 199,77.9 200,75.6 201,73.3 202,71.1 203,68.9 204,66.8 205,64.7 206,62.7 207,60.8 208,58.9 209,57.1 210,55.4 211,53.8 212,52.2 213,50.7 214,49.3 215,48 216,46.8 217,45.7 218,44.7 219,43.8 220,42.9 221,42.2 222,41.6 223,41.1 224,40.6 225,40.3 226,40.1 227,40 228,40 229,40.1 230,40.3 231,40.6 232,41.1 233,41.6 234,42.2 235,42.9 236,43.8 237,44.7 238,45.7 239,46.8 240,48 241,49.3 242,50.7 243,52.2 244,53.8 245,55.4 246,57.1 247,58.9 248,60.8 249,62.7 250,64.7 251,66.8 252,68.9 253,71.1 254,73.3 255,75.6 256,77.9 257,80.3 258,82.7 259,85.1 260,87.5 261,90 262,92.5 263,95 264,97.5 265,100 266,102.5 267,105 268,107.5 269,110 270,112.5 271,114.9 272,117.3 273,119.7 274,122.1 275,124.4 276,126.7 277,128.9 278,131.1 279,133.2 280,135.3 281,137.3 282,139.2 283,141.1 284,142.9 285,144.6 286,146.2 287,147.8 288,149.3 289,150.7 290,152 291,153.2 292,154.3 293,155.3 294,156.2 295,157.1 296,157.8 297,158.4 298,158.9 299,159.4 300,159.7 301,159.9 302,160 303,160 304,159.9 305,159.7 306,159.4 307,158.9 308,158.4 309,157.8 310,157.1 311,156.2 312,155.3 313,154.3 314,153.2 315,152 316,150.7 317,149.3 318,147.8 319,146.2 320,144.6 321,142.9 322,141.1 323,139.2 324,137.3 325,135.3 326,133.2 327,131.1 328,128.9 329,126.7 330,124.4 331,122.1 332,119.7 333,117.3 334,114.9 335,112.5 336,110 337,107.5 338,105 339,102.5 340,100"/><circle cx="77.5" cy="40" r="4" fill="currentColor"/><circle cx="152.5" cy="160" r="4" fill="currentColor"/><circle cx="227.5" cy="40" r="4" fill="currentColor"/><circle cx="302.5" cy="160" r="4" fill="currentColor"/></g><g fill="currentColor"><text x="115" y="206" text-anchor="middle">π/2</text><text x="190" y="206" text-anchor="middle">π</text><text x="265" y="206" text-anchor="middle">3π/2</text><text x="340" y="206" text-anchor="middle">2π</text><text x="34" y="164" text-anchor="end">-2</text><text x="34" y="104" text-anchor="end">1</text><text x="34" y="44" text-anchor="end">4</text><text x="345" y="206" text-anchor="end" font-style="italic">x</text><text x="46" y="28" font-style="italic">y</text></g></svg>',
  alt: 'Graph of a sinusoid y = f(x) from x = 0 to x = 2π. The curve starts on the midline y = 1 at x = 0 and rises to a maximum of 4 at x = π/4, falls through the midline at x = π/2 to a minimum of -2 at x = 3π/4, returns to the midline at x = π, reaches 4 again at x = 5π/4 and -2 at x = 7π/4, and ends on the midline at x = 2π. Dashed horizontal lines mark y = -2, 1 and 4; dashed vertical lines mark x = π/2, π, 3π/2 and 2π. Filled dots mark the two maxima and two minima.',
  caption: 'Figure 1. The graph of $y = f(x)$ on $0 \\le x \\le 2\\pi$.',
  size: 'md' as const,
}

export const precalcExamReviewPart5Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per5-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 5 of 7 — Unit 3: Trigonometric Functions and Sinusoidal Models**

> **Exam Weight:** Unit 3 is about **33%** of the exam. This part covers CED 3.1–3.8; Part 6 covers 3.9–3.15.

### Angles and the Unit Circle (3.1–3.3)

| Fact | Detail |
|:---|:---|
| Radian measure | $\\theta = \\dfrac{s}{r}$; arc length $s = r\\theta$; $\\pi$ radians $= 180^\\circ$ |
| Coterminal angles | differ by multiples of $2\\pi$ |
| On the unit circle | the point at angle $\\theta$ is $(\\cos\\theta, \\sin\\theta)$; $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ is the slope of the terminal ray |
| Special values | $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$, $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$; cosine reverses the order |
| Signs by quadrant | I: all positive; II: sine; III: tangent; IV: cosine |
| Reference angle | the acute angle to the $x$-axis; the same value with the quadrant's sign |

### Sine, Cosine and Tangent as Functions (3.4, 3.8)

| Function | Period | Domain | Range | Key features |
|:---|:---:|:---|:---|:---|
| $\\sin x$ | $2\\pi$ | all reals | $[-1, 1]$ | odd; zeros at $k\\pi$; max $1$ at $\\frac{\\pi}{2} + 2k\\pi$ |
| $\\cos x$ | $2\\pi$ | all reals | $[-1, 1]$ | even; zeros at $\\frac{\\pi}{2} + k\\pi$; max $1$ at $2k\\pi$ |
| $\\tan x$ | $\\pi$ | $x \\ne \\frac{\\pi}{2} + k\\pi$ | all reals | odd; vertical asymptotes where $\\cos x = 0$; always increasing between asymptotes |

### Sinusoidal Functions (3.5–3.7)

For $f(x) = a\\sin\\big(b(x + c)\\big) + d$ (or with cosine):

| Feature | Formula |
|:---|:---|
| Amplitude | $\\lvert a \\rvert = \\dfrac{\\max - \\min}{2}$ |
| Midline | $y = d = \\dfrac{\\max + \\min}{2}$ |
| Period | $\\dfrac{2\\pi}{\\lvert b \\rvert}$, so $b = \\dfrac{2\\pi}{\\text{period}}$ |
| Frequency | $\\dfrac{1}{\\text{period}} = \\dfrac{\\lvert b \\rvert}{2\\pi}$ cycles per unit |
| Phase shift | $-c$ (the graph of $\\sin(b(x + c))$ is shifted **left** $c$) |
| Concavity | concave down above the midline, concave up below it; points of inflection on the midline |

**Building a model:** read max, min and period from the context; midline and amplitude from max and min; $b$ from the period; choose sine or cosine (and a sign) by where the cycle starts; then shift if needed.

> **Key Fact:** The graph of a sinusoid is **steepest** at the midline and **flat** at the maximum and minimum. Its rate of change is largest in size where it crosses the midline.`
    },
    {
      id: 'per5-mc',
      type: 'multiple-choice' as const,
      figure: reviewSinusoidFigure,
      content: '**Unit 3 practice (no calculator).** 🎯 Question 1 uses the graph above.',
      exercise: {
        questions: [
          {
            question: 'The graph of $f$ above has a maximum of $4$ at $x = \\dfrac{\\pi}{4}$, a minimum of $-2$ at $x = \\dfrac{3\\pi}{4}$, and passes through $(0, 1)$. Which could be $f(x)$?',
            options: ['$f(x) = 3\\sin(2x) + 1$', '$f(x) = 3\\sin\\left(\\dfrac{x}{2}\\right) + 1$', '$f(x) = 3\\cos(2x) + 1$', '$f(x) = 6\\sin(2x) + 1$'],
            correctAnswer: 0,
            explanation: 'Midline $\\frac{4 + (-2)}{2} = 1$, amplitude $\\frac{4 - (-2)}{2} = 3$, and a full cycle from $x = 0$ to $x = \\pi$ gives period $\\pi$, so $b = 2$. Starting on the midline and rising means sine with no shift. $\\frac{x}{2}$ gives period $4\\pi$, cosine would start at the maximum, and $6$ is the full range, not the amplitude.'
          },
          {
            question: 'What is the exact value of $\\cos\\left(\\dfrac{7\\pi}{6}\\right)$?',
            options: ['$-\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{7\\pi}{6}$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$; cosine is negative there, so $\\cos\\frac{7\\pi}{6} = -\\cos\\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{2}$. The value $-\\frac{1}{2}$ is $\\sin\\frac{7\\pi}{6}$.'
          },
          {
            question: 'What is the period of $y = \\tan(3x)$?',
            options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$3\\pi$', '$\\pi$'],
            correctAnswer: 0,
            explanation: 'The tangent function has period $\\pi$, so $\\tan(3x)$ has period $\\frac{\\pi}{3}$. The value $\\frac{2\\pi}{3}$ would be right for $\\sin(3x)$ or $\\cos(3x)$.'
          },
          {
            question: 'A city\'s average daily temperature varies sinusoidally over the year with a period of $12$ months, a maximum of $86^\\circ$F in month $7$ and a minimum of $50^\\circ$F in month $1$. Which function models the temperature $T$ in month $t$?',
            options: ['$T(t) = 18\\cos\\left(\\dfrac{\\pi}{6}(t - 7)\\right) + 68$', '$T(t) = 18\\cos\\left(\\dfrac{\\pi}{6}(t - 1)\\right) + 68$', '$T(t) = 36\\cos\\left(\\dfrac{\\pi}{6}(t - 7)\\right) + 68$', '$T(t) = 18\\cos\\left(\\dfrac{\\pi}{12}(t - 7)\\right) + 68$'],
            correctAnswer: 0,
            explanation: 'Amplitude $\\frac{86 - 50}{2} = 18$, midline $68$, and $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$; a cosine shifted right $7$ has its maximum in month $7$. Shifting to month $1$ would put the maximum in January, $36$ is the full range, and $\\frac{\\pi}{12}$ gives a $24$-month period.'
          }
        ]
      }
    },
    {
      id: 'per5-input',
      type: 'input-boxes' as const,
      content: `**Exact values and features.** ✍️

**1)** $\\sin\\left(\\dfrac{5\\pi}{6}\\right)$:

**2)** The amplitude of $y = -4\\cos(3x) + 2$:

**3)** The period of $y = 5\\sin\\left(\\dfrac{\\pi}{4}x\\right)$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/2', '4', '8'],
        hint1: 'Quadrant II, reference angle $\\frac{\\pi}{6}$; sine is positive there.',
        hint2: 'Amplitude is $\\lvert a \\rvert$; the sign reflects, it does not shrink.',
        hint3: 'Period $= \\frac{2\\pi}{b}$ with $b = \\frac{\\pi}{4}$.',
        explanation: '(1) $\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$. (2) $\\lvert -4 \\rvert = 4$. (3) $\\frac{2\\pi}{\\pi/4} = 8$.'
      }
    },
    {
      id: 'per5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Unit-circle values by **reference angle and quadrant sign**; $\\tan\\theta$ is the slope $\\frac{\\sin\\theta}{\\cos\\theta}$
- $\\sin$ and $\\cos$ have period $2\\pi$; $\\tan$ has period $\\pi$ and asymptotes where $\\cos x = 0$
- Sinusoid: amplitude $\\frac{\\max - \\min}{2}$, midline $\\frac{\\max + \\min}{2}$, $b = \\frac{2\\pi}{\\text{period}}$, shift decided by where the cycle starts
- Steepest at the **midline**, flat at the **extremes**; concave down above the midline, concave up below`
    }
  ]
};
