export const calcabEstimatingLimitsTablesPart4Data = {
  topicSlug: 'estimating-limits-tables',
  sections: [
    {
      id: 'elt4-intro',
      type: 'text' as const,
      content: `# ⚠️ Common Pitfalls with Numerical Tables

**Part 4 of 4 — When tables mislead you**

---

### Topics in This Part

| Section |
|---------|
| Calculator Precision Errors |
| The Oscillation Trap |
| Tables vs. Algebraic Proof |

> 🔑 **Why this matters:** A wrong-looking table can convince you of a wrong limit. Knowing the traps protects your AP score.`
    },
    {
      id: 'elt4-precision',
      type: 'text' as const,
      content: `
## 🧮 Pitfall 1: Calculator Precision

Calculators store finite digits. For $f(x) = \\dfrac{1 - \\cos x}{x^2}$ near 0:

| $x$ | $0.1$ | $0.01$ | $0.001$ | $10^{-8}$ |
|---|---|---|---|---|
| $f(x)$ | $0.4996$ | $0.499996$ | $0.49999996$ | $0$ (!) |

For tiny $x$, the numerator $1 - \\cos x$ rounds to **exactly 0** in finite precision — *catastrophic cancellation*. The displayed limit appears to be 0, but the true limit is $\\tfrac{1}{2}$.

> 💡 **Lesson:** trust the *trend* across mid-range values, not the noisiest few. And compare with algebra/theorems when you can.
      `
    },
    {
      id: 'elt4-oscillation-trap',
      type: 'text' as const,
      content: `
## 🌊 Pitfall 2: The Oscillation Trap

Consider $f(x) = \\sin\\!\\left(\\dfrac{\\pi}{x}\\right)$ at $x = 0$. If you sneakily pick $x_n = \\dfrac{1}{n}$ for integer $n$, then $f(x_n) = \\sin(n\\pi) = 0$ — every single time.

| $x$ | $1$ | $1/2$ | $1/3$ | $1/4$ | $1/5$ |
|---|---|---|---|---|---|
| $f(x)$ | $0$ | $0$ | $0$ | $0$ | $0$ |

This table screams "limit = 0" — but the true limit DNE because $\\sin(\\pi/x)$ also hits $\\pm 1$ infinitely often. Different $x$-sequences give different outputs.

> ⚠️ **Lesson:** for trigonometric arguments racing to infinity, always sanity-check with multiple "kinds" of $x$-values.
      `
    },
    {
      id: 'elt4-vs-algebra',
      type: 'text' as const,
      content: `
## 📏 Pitfall 3: A Table Is an Estimate, Not a Proof

On the AP exam:

| Asked to... | What's allowed |
|-------------|----------------|
| **Estimate** the limit | A clean numerical table is fine |
| **Find** the limit | Use algebra (factoring, rationalizing, …) when possible |
| **Justify** an answer | Cite a theorem (continuity, squeeze, etc.) — tables alone usually don't earn justification points |

> 🔑 **Bottom line:** tables are a great *first step* and a great *sanity check*, but algebraic methods are the gold standard for finding exact values.
      `
    },
    {
      id: 'elt4-mc',
      type: 'multiple-choice' as const,
      content: `**Pitfall Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student\'s calculator shows $\\dfrac{1 - \\cos(10^{-8})}{(10^{-8})^2} = 0$ and concludes the limit is 0. The correct response is:',
            options: [
              'They are right: the table at $10^{-8}$ gives exactly 0',
              'Precision failed, and the limit is really $1/2$',
              'The limit is 1, since $1 - \\cos x \\approx x^2$ near 0',
              'The limit DNE, since the function blows up near 0'
            ],
            correctAnswer: 1,
            explanation: 'Catastrophic cancellation — at $10^{-8}$ the numerator is too small for finite precision, so the calculator rounds $\\cos(10^{-8})$ to exactly 1. Algebraically, $1 - \\cos x \\approx x^2/2$, so the true limit is $1/2$; dropping the $\\frac{1}{2}$ gives 1. The function stays near $\\frac{1}{2}$ and does not blow up.'
          },
          {
            question: 'For $f(x) = \\sin(\\pi/x)$, picking $x = 1/n$ for $n = 1, 2, 3, \\ldots$ gives $f(x) = 0$ every time. What is $\\lim_{x \\to 0} f(x)$ really?',
            options: ['$0$, because every sample $x = 1/n$ gives 0', '$1$, since $\\frac{\\sin u}{u} \\to 1$', 'DNE, because it oscillates', '$\\pi$, by the $\\frac{\\sin(kx)}{x} \\to k$ rule'],
            correctAnswer: 2,
            explanation: 'The integer $1/n$ values are *cherry-picked*. Other $x$-values (like $x = 2/(2n+1)$) give $\\pm 1$. The function oscillates infinitely fast — limit DNE. The special limit $\\frac{\\sin u}{u} \\to 1$ and the $\\frac{\\sin(kx)}{x} \\to k$ shortcut do not apply: here the sine\'s argument $\\pi/x$ goes to infinity, not to 0.'
          }
        ]
      }
    },
    {
      id: 'elt4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'Which is the BEST description of when to use a numerical table for limits?',
            options: [
              'Always, since a table proves the exact value of a limit',
              'Never, because only algebraic work counts as justification',
              'As a first estimate or check when substitution fails',
              'Only on the calculator-allowed sections of the AP exam'
            ],
            correctAnswer: 2,
            explanation: 'Tables shine on indeterminate forms, especially as a first estimate or sanity check. They suggest a value but do not prove it — pair with algebra for full credit. They are useful on both calculator and non-calculator work.'
          },
          {
            question: 'A reliable way to spot oscillation from a table is:',
            options: [
              'Outputs grow without bound as $x$ nears $a$',
              'Outputs settle on different values on each side',
              'Outputs keep wandering as $x$ nears $a$',
              'Outputs are exactly 0 at the point $x = a$'
            ],
            correctAnswer: 2,
            explanation: 'Oscillation means no convergence. If outputs keep wandering, refusing to settle even as $|x - a|$ shrinks, suspect an oscillating limit. Unbounded growth signals blow-up, different settled values on each side signal a jump, and the value at $x = a$ says nothing about the limit.'
          }
        ]
      }
    }
  ]
}
