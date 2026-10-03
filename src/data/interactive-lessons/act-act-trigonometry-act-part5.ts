export const actTrigPart5Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t5-intro',
      type: 'text' as const,
      content: `
# 📈 Graphing Trig Functions

**Part 5 of 7 — Amplitude, Period, Phase Shift, Midline, Maximum & Minimum**

ACT graph questions give you an equation and ask for a feature (amplitude, period, maximum), or give you a graph and ask for the equation. Everything comes from four numbers: A, B, C, and D.

## The Parent Graphs

Both $y = \\sin x$ and $y = \\cos x$ repeat every $2\\pi$ and stay between −1 and 1. Memorize their five key points over one cycle; each key point is a quarter-period apart.

| x | 0 | $\\frac{\\pi}{2}$ | $\\pi$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\sin x$ | 0 (midline, rising) | 1 (max) | 0 (midline, falling) | −1 (min) | 0 |
| $\\cos x$ | 1 (max) | 0 (midline, falling) | −1 (min) | 0 (midline, rising) | 1 |

**Sine starts on the midline going up. Cosine starts at the maximum.** The cosine graph is the sine graph shifted $\\frac{\\pi}{2}$ to the left.

## The General Form

$$y = A\\sin(Bx + C) + D \\qquad \\text{or} \\qquad y = A\\cos(Bx + C) + D$$

| Feature | Formula | What it means |
|---|---|---|
| Amplitude | $\\lvert A\\rvert$ | Distance from the midline to a peak |
| Period | $\\dfrac{2\\pi}{\\lvert B\\rvert}$ | Horizontal length of one full cycle |
| Phase shift | $-\\dfrac{C}{B}$ | Horizontal shift; positive means right |
| Midline | $y = D$ | The horizontal center line |
| Maximum | $D + \\lvert A\\rvert$ | Top of the graph |
| Minimum | $D - \\lvert A\\rvert$ | Bottom of the graph |
| Range | $[D - \\lvert A\\rvert,\\; D + \\lvert A\\rvert]$ | All output values |

### Amplitude

The amplitude is $\\lvert A\\rvert$, **always positive**. A negative A flips the graph over its midline: $y = -\\cos x$ starts at a **minimum** instead of a maximum, and $y = -\\sin x$ starts on the midline going **down**. The amplitude of $y = -5\\cos(2x) + 3$ is 5, not −5.

### Period

B squeezes or stretches the graph horizontally. **Bigger B → shorter period → more cycles.**

- $y = \\sin(3x)$: period $\\frac{2\\pi}{3}$ (three cycles fit in $2\\pi$).
- $y = \\cos\\left(\\frac{x}{3}\\right)$: period $\\frac{2\\pi}{1/3} = 6\\pi$.
- $y = \\sin\\left(\\frac{\\pi}{4}x\\right)$: period $\\frac{2\\pi}{\\pi/4} = 8$. When B contains π, the period is often a whole number.

To **double** the period, **halve** B. To halve the period, double B. Changing A or D never changes the period. On $0 \\le x \\le 2\\pi$, the graph of $y = \\sin(Bx)$ completes exactly B cycles when B is a positive whole number.

Working backward: if a cycle takes $P$ units, then $B = \\frac{2\\pi}{P}$.

### Phase shift

Factor B out of the parentheses to see the shift clearly:

$$y = \\sin\\left(2x - \\frac{\\pi}{2}\\right) = \\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right)$$

The graph shifts $\\frac{\\pi}{4}$ to the **right**. Using the formula: $C = -\\frac{\\pi}{2}$, so $-\\frac{C}{B} = \\frac{\\pi/2}{2} = \\frac{\\pi}{4}$. Two common errors: forgetting to divide by B (answering $\\frac{\\pi}{2}$), and reading the minus sign as "left." In $\\sin(x - h)$ the shift is $h$ units **right**; in $\\sin(x + h)$ it is $h$ units **left**.

### Midline, maximum, minimum

D moves the whole graph up or down. The midline is $y = D$, the maximum is $D + \\lvert A\\rvert$, and the minimum is $D - \\lvert A\\rvert$. For $y = 3\\sin x + 7$: midline 7, maximum 10, minimum 4.

## Reading an Equation from a Graph

| You see | You compute |
|---|---|
| Max and min values | Amplitude $= \\frac{\\max - \\min}{2}$, midline $D = \\frac{\\max + \\min}{2}$ |
| Two consecutive maxima | Period = distance between them |
| A maximum and the next minimum | Period = **2 ×** that distance (half a cycle) |
| Midline crossing to the next maximum | Period = **4 ×** that distance (quarter cycle) |
| Graph at a max when x = 0 | Use $+\\cos$ with no shift |
| Graph at a min when x = 0 | Use $-\\cos$ with no shift |
| Graph on the midline, rising, at x = 0 | Use $+\\sin$ with no shift |

## Locating a Specific Maximum or Minimum

The sine function reaches its maximum when its input equals $\\frac{\\pi}{2}$, and its minimum when the input equals $\\frac{3\\pi}{2}$. Cosine reaches its maximum when its input is 0 (or $2\\pi$) and its minimum at $\\pi$. So to find where $y = A\\sin(Bx + C) + D$ (with A > 0) peaks, **solve $Bx + C = \\frac{\\pi}{2}$**. The height there is $A + D$.

## A Quick Word on Tangent

$y = \\tan x$ has **period π**, not $2\\pi$, and vertical asymptotes where $\\cos x = 0$ (at $x = \\frac{\\pi}{2} + k\\pi$). It has **no amplitude** because it has no maximum or minimum. For $y = \\tan(Bx)$, the period is $\\frac{\\pi}{\\lvert B\\rvert}$.
      `
    },
    {
      id: 'act-t5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Read every feature from an equation</b></summary>

**Question:** For $y = -2\\cos(3x) + 1$, find the amplitude, period, midline, maximum, minimum, and the starting point at x = 0.

**Solution:**
- Amplitude $\\lvert -2\\rvert = 2$; period $\\frac{2\\pi}{3}$; midline $y = 1$.
- Maximum $1 + 2 = 3$; minimum $1 - 2 = -1$.
- At x = 0, $\\cos 0 = 1$, so $y = -2(1) + 1 = -1$: the graph **starts at its minimum** because A is negative. ✓
</details>

<details>
<summary><b>Example 2: Find the first maximum after a phase shift</b></summary>

**Question:** For $y = 4\\sin(2x - \\pi) + 3$, where is the first maximum with x > 0?

**Solution:**
1. Phase shift: $-\\frac{C}{B} = \\frac{\\pi}{2}$ to the right.
2. Sine peaks when its input is $\\frac{\\pi}{2}$: $2x - \\pi = \\frac{\\pi}{2} \\implies 2x = \\frac{3\\pi}{2} \\implies x = \\frac{3\\pi}{4}$.
3. Height $= A + D = 4 + 3 = 7$. First maximum: $\\left(\\frac{3\\pi}{4}, 7\\right)$.
4. Check: $y = 4\\sin(2x)$ peaks at $\\frac{\\pi}{4}$, and $\\frac{\\pi}{4} + \\frac{\\pi}{2} = \\frac{3\\pi}{4}$. ✓
</details>

<details>
<summary><b>Example 3: Write the equation from a graph</b></summary>

**Question:** A graph of the form $y = A\\cos(Bx) + D$ has a maximum at $(0, 6)$, and the next minimum is at $\\left(\\frac{\\pi}{2}, -2\\right)$. Find the equation.

**Solution:**
1. Amplitude $= \\frac{6 - (-2)}{2} = 4$; midline $D = \\frac{6 + (-2)}{2} = 2$.
2. Max to next min is half a cycle, so the period is $2 \\cdot \\frac{\\pi}{2} = \\pi$, and $B = \\frac{2\\pi}{\\pi} = 2$.
3. A maximum at x = 0 means positive cosine: $y = 4\\cos(2x) + 2$. ✓
</details>
      `
    },
    {
      id: 'act-t5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Features from the Equation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the period of $y = 2\\cos\\left(\\frac{x}{3}\\right)$?',
            options: ['$\\frac{2\\pi}{3}$', '$6\\pi$', '$2\\pi$', '$\\frac{\\pi}{3}$'],
            correctAnswer: 1,
            explanation: 'B = 1/3, so the period is 2π ÷ (1/3) = 6π. A small B stretches the graph. 2π/3 multiplies 2π by B instead of dividing, 2π ignores B entirely, and π/3 uses π in place of 2π and multiplies.'
          },
          {
            question: 'What is the range of $y = -3\\sin(2x) + 5$?',
            options: ['$-3 \\le y \\le 3$', '$-3 \\le y \\le 5$', '$-8 \\le y \\le 2$', '$2 \\le y \\le 8$'],
            correctAnswer: 3,
            explanation: 'The midline is y = 5 and the amplitude is |−3| = 3, so y runs from 5 − 3 = 2 to 5 + 3 = 8. The negative A flips the graph but does not change the range. −3 to 3 ignores the vertical shift, −3 to 5 uses A and D themselves as the endpoints, and −8 to 2 subtracts 5 instead of adding it.'
          },
          {
            question: 'What is the equation of the midline of $y = 7\\cos(4x) - 2$?',
            options: ['$y = -2$', '$y = 7$', '$y = 5$', '$y = 4$'],
            correctAnswer: 0,
            explanation: 'The midline is y = D = −2. y = 7 uses the amplitude, y = 5 is the maximum (−2 + 7), and y = 4 uses B, which controls the period, not the vertical position.'
          },
          {
            question: 'Compared with $y = \\cos(3x)$, how is the graph of $y = \\cos(3x + \\pi)$ shifted?',
            options: ['$\\pi$ units to the left', '$\\frac{\\pi}{3}$ units to the right', '$\\frac{\\pi}{3}$ units to the left', '$\\pi$ units to the right'],
            correctAnswer: 2,
            explanation: 'Factor out B: cos(3(x + π/3)), so the shift is π/3 to the left (phase shift −C/B = −π/3). The π-unit choices forget to divide by B, and "right" reverses the sign: a plus sign inside the parentheses moves the graph left.'
          },
          {
            question: 'How many complete cycles does the graph of $y = \\sin(4x)$ make on the interval $0 \\le x \\le 2\\pi$?',
            options: ['2', '8', '1', '4'],
            correctAnswer: 3,
            explanation: 'The period is 2π/4 = π/2, and 2π ÷ (π/2) = 4 cycles. 1 is the parent sine graph, 2 halves B, and 8 doubles it.'
          }
        ]
      }
    },
    {
      id: 'act-t5-input1',
      type: 'input-boxes' as const,
      content: `
**Read the Features** 🧮

For $y = 6\\sin\\left(\\frac{\\pi}{4}x\\right) - 1$:

1) What is the amplitude?

2) What is the period?

3) What is the maximum value?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '8', '5'],
        hint1: 'Amplitude is |A|.',
        hint2: 'Period = 2π ÷ (π/4).',
        hint3: 'Maximum = D + |A|.',
        explanation: '1) |6| = 6. 2) 2π ÷ (π/4) = 8. 3) −1 + 6 = 5.'
      }
    },
    {
      id: 'act-t5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

<details>
<summary><b>Try it: Which change to y = 5 sin(2x) would cut its period in half?</b></summary>

The period is $\\frac{2\\pi}{2} = \\pi$. To halve it to $\\frac{\\pi}{2}$, double B: replace the 2 with a **4**. Multiplying the whole function by a number changes the amplitude, and adding a number shifts the graph up; neither touches the period.
</details>

<details>
<summary><b>Try it: Starting at x = 0, the graph of y = 3 sin(Bx), B > 0, completes its first full cycle at x = 2π/5. What is B?</b></summary>

The period is $\\frac{2\\pi}{5}$, so $\\frac{2\\pi}{B} = \\frac{2\\pi}{5}$ and $B = 5$.
</details>

<details>
<summary><b>Try it: What is the period of y = tan(3x)?</b></summary>

Tangent's basic period is π, so the period is $\\frac{\\pi}{3}$, not $\\frac{2\\pi}{3}$.
</details>

**ACT Tip:** For "which equation matches the graph" questions, eliminate choices in this order: midline (D), amplitude (A), starting behavior (sign of A, sine vs cosine), then period (B). Two or three checks usually leave one choice.
      `
    },
    {
      id: 'act-t5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of a function of the form $y = A\\cos(Bx) + D$, with A > 0 and B > 0, has a maximum at $(0, 4)$, and the next minimum is at $(\\pi, -2)$. Which equation is it?',
            options: ['$y = 3\\cos x + 1$', '$y = 6\\cos x + 1$', '$y = 3\\cos(2x) + 1$', '$y = 3\\sin x + 1$'],
            correctAnswer: 0,
            explanation: 'Amplitude = (4 − (−2))/2 = 3 and midline = (4 + (−2))/2 = 1. Max to next min is half a cycle, so the period is 2π and B = 1. A max at x = 0 means cosine. A = 6 uses the full max-to-min distance, B = 2 treats π as the whole period, and sine would put the graph on its midline at x = 0, not at a maximum.'
          },
          {
            question: 'Which change to the equation $y = 5\\sin(2x)$ would cut the period of its graph in half?',
            options: ['Replacing the 2 with a 1/2', 'Replacing the 2 with a 4', 'Replacing the 5 with a 10', 'Adding 2 to the right side'],
            correctAnswer: 1,
            explanation: 'Period = 2π/|B|. Doubling B from 2 to 4 halves the period from π to π/2. Replacing the 2 with 1/2 makes the period 4π, four times longer rather than half as long. Changing 5 to 10 doubles the amplitude, and adding 2 raises the midline; neither affects the period.'
          },
          {
            question: 'For $y = 2\\sin\\left(x - \\frac{\\pi}{3}\\right) + 1$, at what point does the first maximum with x > 0 occur?',
            options: ['$\\left(\\frac{\\pi}{6}, 3\\right)$', '$\\left(\\frac{5\\pi}{6}, 3\\right)$', '$\\left(\\frac{5\\pi}{6}, 2\\right)$', '$\\left(\\frac{\\pi}{2}, 3\\right)$'],
            correctAnswer: 1,
            explanation: 'Sine peaks when its input is π/2: x − π/3 = π/2 gives x = 5π/6, and the height is A + D = 3. π/6 shifts left instead of right (π/2 − π/3). A height of 2 uses only the amplitude and drops the vertical shift. π/2 is where the unshifted graph peaks.'
          },
          {
            question: 'What is the period of $y = \\tan(2x)$?',
            options: ['$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$4\\pi$'],
            correctAnswer: 2,
            explanation: 'Tangent repeats every π, so y = tan(2x) has period π/2. π is the period of the parent tangent graph with B ignored. 2π is the parent period of sine and cosine, and 4π multiplies by B instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'act-t5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Sine starts on the midline rising; cosine starts at a maximum.** A negative A flips either one.
- **Amplitude** $= \\lvert A\\rvert$ (never negative). **Period** $= \\frac{2\\pi}{\\lvert B\\rvert}$. **Midline** $y = D$.
- **Max** $= D + \\lvert A\\rvert$, **min** $= D - \\lvert A\\rvert$.
- **Phase shift** $= -\\frac{C}{B}$: factor B out; $(x - h)$ moves right, $(x + h)$ moves left.
- **From a graph:** amplitude $= \\frac{\\max - \\min}{2}$, midline $= \\frac{\\max + \\min}{2}$, max to next min is half a period, then $B = \\frac{2\\pi}{\\text{period}}$.
- **To find a peak**, set the inside equal to $\\frac{\\pi}{2}$ (sine) or 0 (cosine).
- **Double the period → halve B.** Tangent has period $\\frac{\\pi}{\\lvert B\\rvert}$ and no amplitude.
      `
    }
  ]
}
