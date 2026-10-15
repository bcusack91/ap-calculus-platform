export const precalcContinuityPart7Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'precalc-continuity-precalc-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🏆 Continuity — Putting It All Together

**Part 7 of 7 — Synthesis Review and the Bridge to Calculus**

Parts 1–6 each gave you one tool. Real problems hand you a function and expect you to choose the tools yourself, in the right order. This part works two full problems that use every tool, then shows where each one reappears in calculus.

> **AP note:** Continuity tests, limit evaluation and the IVT are not assessed on the AP Precalculus exam (May 2027). Holes and vertical asymptotes of rational functions are, and they appear in Worked Example 1. Treat the rest of this part as preparation for AP Calculus, whose first unit is built on these ideas.

### The Toolkit at a Glance

| You are asked to... | Tool | Part |
|:---|:---|:---|
| decide continuity at one point | three conditions: defined, limit exists, limit $= f(c)$ | 1 |
| name a break | removable, jump or infinite | 2 |
| make pieces join, or find $k$ | set left limit $=$ right limit $=$ value | 3 |
| state where $f$ is continuous | domain plus every break, written as intervals | 4 |
| prove a solution exists | IVT on a closed interval with no breaks | 5 |
| evaluate a limit quickly | substitute into a continuous function | 6 |

### One Routine for Any Function

1. **List the candidates.** Only three kinds of $x$-value can break a function built from familiar pieces: zeros of a denominator, boundaries of a piecewise rule, and edges of a domain (a root or log argument reaching $0$).
2. **Test each candidate** with the three conditions. Everywhere else the function is continuous automatically.
3. **Name and use the result.** Classify each break, write the intervals of continuity, and only then apply a theorem that needs continuity.
      `
    },
    {
      id: 'precalc-continuity-precalc-p7-s2-worked-one',
      type: 'text' as const,
      content: `
## 🧩 Worked Example 1: One Function, Every Break Type

$$f(x) = \\begin{cases} x + k & x \\leq -2 \\\\[4pt] \\dfrac{x^2 - 9}{x^2 - 2x - 3} & x > -2 \\end{cases}$$

**Step 1: List the candidates.** Factor the rational piece:

$$\\frac{x^2-9}{x^2-2x-3} = \\frac{(x-3)(x+3)}{(x-3)(x+1)} = \\frac{x+3}{x+1}, \\quad x \\neq 3$$

The candidates are $x = -2$ (piece boundary), $x = -1$ (a factor that does not cancel) and $x = 3$ (a factor that cancels). Both $-1$ and $3$ lie in the region $x > -2$, so both matter.

**Step 2: Test each candidate.**

| $x$ | Left side | Right side | $f(x)$ | Verdict |
|:---|:---|:---|:---|:---|
| $-1$ | $\\frac{2}{0^-} \\to -\\infty$ | $\\frac{2}{0^+} \\to +\\infty$ | undefined | **infinite** (vertical asymptote) |
| $3$ | $\\frac{6}{4} = \\frac{3}{2}$ | $\\frac{3}{2}$ | undefined | **removable** (hole at $(3, \\frac{3}{2})$) |
| $-2$ | $-2 + k$ | $\\frac{-2+3}{-2+1} = -1$ | $-2 + k$ | continuous only if $k = 1$ |

At the boundary, the left piece supplies both the left limit and the value, so a single equation does the job: $-2 + k = -1$, giving $k = 1$. Any other $k$ leaves a **jump** of size $|k - 1|$.

**Step 3: Name and use the result** (with $k = 1$).

- $f$ is continuous on $(-\\infty, -1) \\cup (-1, 3) \\cup (3, \\infty)$. The point $x = -2$ is no longer a break.
- Redefining $f(3) = \\frac{3}{2}$ repairs the hole. Nothing repairs $x = -1$.
- **IVT works on $[0, 2]$:** no candidate lies inside, $f(0) = 3$ and $f(2) = \\frac{5}{3}$, so $f$ takes the value $2$ somewhere in $(0, 2)$. (It happens at $x = 1$.)
- **IVT fails on $[-2, 0]$:** $f(-2) = -1$ and $f(0) = 3$ have opposite signs, yet $f$ has no zero there. The sign change happens across the asymptote at $x = -1$, which is exactly why the theorem demands continuity on the whole closed interval.
      `
    },
    {
      id: 'precalc-continuity-precalc-p7-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Check: Reading a Function's Breaks** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\dfrac{x^2-4}{x^2+x-6}$. How should the discontinuities at $x = 2$ and $x = -3$ be classified?',
            options: [
              'Removable at $x=2$; infinite at $x=-3$',
              'Infinite at $x=2$; removable at $x=-3$',
              'Removable at $x=2$ and at $x=-3$',
              'Infinite at $x=2$ and at $x=-3$'
            ],
            correctAnswer: 0,
            explanation: 'Factoring gives $\\frac{(x-2)(x+2)}{(x-2)(x+3)}$. The factor $(x-2)$ cancels, so $x=2$ is a hole with limit $\\frac{4}{5}$, while $(x+3)$ stays in the denominator and produces a vertical asymptote at $x=-3$.'
          },
          {
            question: 'Let $h(x) = \\dfrac{1}{x-2}$. Since $h(1) = -1$ and $h(3) = 1$, what does the IVT guarantee about a zero of $h$ on $(1, 3)$?',
            options: [
              'Nothing, since $h$ breaks at $x=2$',
              'A zero, since $h(1)$ and $h(3)$ differ in sign',
              'A zero, since $h$ is continuous on its domain',
              'Exactly one zero, since $h$ falls on each side of $2$'
            ],
            correctAnswer: 0,
            explanation: 'The IVT needs continuity on all of $[1, 3]$, and $h$ has a vertical asymptote at $x=2$. Being continuous on its domain is not enough, and in fact $h$ is never zero.'
          },
          {
            question: 'In Worked Example 1 with $k = 1$, why can the break at $x = 3$ be repaired by redefining one value while the break at $x = -1$ cannot?',
            options: [
              'Near $x=3$ the outputs approach $\\frac{3}{2}$, but near $x=-1$ they are unbounded',
              'At $x=3$ the one-sided limits differ, but at $x=-1$ they agree',
              'At $x=3$ the value $f(3)$ exists, but $f(-1)$ does not exist',
              'At $x=3$ the factor cancels, so $f$ is already continuous there'
            ],
            correctAnswer: 0,
            explanation: 'A break is removable exactly when the limit exists. Near $3$ the outputs settle on $\\frac{3}{2}$, so assigning that value fills the hole; near $-1$ they run off to $\\pm\\infty$, so no single value can fill the gap. Cancelling a factor does not define $f(3)$.'
          }
        ]
      }
    },
    {
      id: 'precalc-continuity-precalc-p7-s4-worked-two',
      type: 'text' as const,
      content: `
## 🔬 Worked Example 2: Limits, Endpoints and a Root

Let $p(x) = \\sqrt{x + 3} - x + 1$.

**Where is $p$ continuous?** The square root needs $x + 3 \\geq 0$, so the domain is $[-3, \\infty)$. A root function is continuous on its domain, $-x + 1$ is a polynomial, and a sum of continuous functions is continuous. So $p$ is continuous on $[-3, \\infty)$, including the endpoint, where only the right-hand side counts.

**Limits by substitution.** Because $p$ is continuous, every limit inside the domain is just a function value:

$$\\lim_{x \\to 6} p(x) = \\sqrt{9} - 6 + 1 = -2$$

At the endpoint only a one-sided limit makes sense:

$$\\lim_{x \\to -3^+} p(x) = \\sqrt{0} + 3 + 1 = 4 = p(-3)$$

**Proving the equation $\\sqrt{x+3} = x - 1$ has a solution.** A solution is a zero of $p$. Check two inputs:

- $p(3) = \\sqrt{6} - 2 \\approx 0.449 > 0$
- $p(4) = \\sqrt{7} - 3 \\approx -0.354 < 0$

$p$ is continuous on $[3, 4]$ and changes sign, so by the IVT a zero lies in $(3, 4)$.

**Narrowing it down.** One bisection step: $p(3.5) = \\sqrt{6.5} - 2.5 \\approx 0.050 > 0$, so the zero lies in $(3.5, 4)$. Squaring both sides of the equation gives $x^2 - 3x - 2 = 0$ and the exact value $x = \\frac{3 + \\sqrt{17}}{2} \\approx 3.56$, which agrees. Squaring also produces $\\frac{3 - \\sqrt{17}}{2} \\approx -0.56$, but $p(-0.56) \\approx 3.12 \\neq 0$, so that value is extraneous.

**The pattern:** domain first, then continuity, then limits by substitution, then the IVT. Each step relies on the one before it.
      `
    },
    {
      id: 'precalc-continuity-precalc-p7-s5-input',
      type: 'input-boxes' as const,
      content: `
**Make It Continuous: A Three-Piece Function**

$$q(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & x < 2 \\\\[4pt] a & x = 2 \\\\[4pt] bx - 2 & x > 2 \\end{cases}$$

**1)** Find $\\lim_{x \\to 2^-} q(x)$:

**2)** Find the value of $b$ that makes the right-hand limit at $x = 2$ match the left-hand limit:

**3)** Find the value of $a$ that makes $q$ continuous at $x = 2$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3', '4'],
        hint1: 'Factor $x^2 - 4 = (x-2)(x+2)$ and cancel before substituting $x = 2$.',
        hint2: 'The right-hand limit is $2b - 2$. Set it equal to your answer from box 1.',
        hint3: 'Condition 3 says the value $q(2)$ must equal the two-sided limit.',
        explanation: 'The left piece simplifies to $x + 2$, which approaches $4$. Setting $2b - 2 = 4$ gives $b = 3$. The limit is then $4$ from both sides, so continuity requires $a = q(2) = 4$.'
      }
    },
    {
      id: 'precalc-continuity-precalc-p7-s6-bridge',
      type: 'text' as const,
      content: `
## 🌉 Where Each Tool Returns in Calculus

| Precalculus idea | What it becomes in AP Calculus |
|:---|:---|
| Three-condition test | Free-response justifications must show the limit exists **and** equals the function value |
| Removable discontinuity | Every derivative starts as a $\\frac{0}{0}$ limit that you repair by cancelling |
| Matching pieces at a boundary | Differentiability at a boundary: continuity first, then matching slopes |
| IVT and EVT | Named theorems whose hypotheses you must check before citing them |
| Limit by substitution | The fastest first move in any limit problem |

### The Derivative Is a Removable Discontinuity

For $f(x) = x^2$, the slope of the secant line from $x$ to $x + h$ is

$$\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h, \\quad h \\neq 0$$

At $h = 0$ the original expression is $\\frac{0}{0}$, undefined, but the limit exists: $\\lim_{h \\to 0} (2x + h) = 2x$. This is the same cancel-then-substitute move you used on holes in Part 2, and its result is the derivative $f'(x) = 2x$.

### Continuity Comes First

Part 6 showed that differentiable implies continuous, but not the reverse. In calculus this runs as a checklist: before asking whether a function is differentiable at a point, confirm it is continuous there. A piecewise function whose pieces do not meet cannot have a derivative at the boundary, however well the slopes match.
      `
    },
    {
      id: 'precalc-continuity-precalc-p7-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pick the Right Tool** 🔽

Choose the tool that settles each task most directly.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A graph has a hole at $(4, 2)$ and a filled dot at $(4, 7)$. Decide whether it is continuous at $x = 4$:',
            options: ['checking all three conditions', 'matching the one-sided limits', 'the Intermediate Value Theorem', 'direct substitution'],
            correctAnswer: 0
          },
          {
            label: 'Find $k$ so that $kx + 1$ (for $x \\lt 3$) and $x^2$ (for $x \\geq 3$) join with no break:',
            options: ['checking all three conditions', 'matching the one-sided limits', 'the Intermediate Value Theorem', 'direct substitution'],
            correctAnswer: 1
          },
          {
            label: 'Show that $x^3 + x = 5$ has a solution between $x = 1$ and $x = 2$:',
            options: ['checking all three conditions', 'matching the one-sided limits', 'the Intermediate Value Theorem', 'direct substitution'],
            correctAnswer: 2
          },
          {
            label: 'Evaluate $\\lim_{x \\to 2} \\sqrt{x^2 + 5}$:',
            options: ['checking all three conditions', 'matching the one-sided limits', 'the Intermediate Value Theorem', 'direct substitution'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['checking all three conditions', 'matching the one-sided limits', 'the Intermediate Value Theorem', 'direct substitution'],
        hint1: 'At the hole, both one-sided limits equal $2$, so matching them is not enough. Something else must be compared.',
        hint2: 'The value at $x = 3$ comes from the right piece, so one equation between the two sides settles $k$.',
        hint3: 'Compute the left side at $x = 1$ and $x = 2$ and compare each result with $5$.',
        explanation: 'At $x = 4$ the limit is $2$ but the value is $7$, so only the full three-condition test shows the break. For $k$, set $3k + 1 = 9$. For the equation, $1 + 1 = 2$ and $8 + 2 = 10$ bracket $5$, and a polynomial is continuous, so the IVT applies. The square-root expression is continuous at $2$, so substitution gives $\\sqrt{9} = 3$.'
      }
    }
  ]
};
