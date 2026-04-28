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

| $x$ | $0.1$ | $0.01$ | $0.001$ | $10^{-6}$ |
|---|---|---|---|---|
| $f(x)$ | $0.4996$ | $0.49996$ | $0.499999\\ldots$ | $0$ (!) |

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
              'They are right — the table is the gold standard',
              'Calculator precision broke down; algebraic methods give limit $= 1/2$',
              'The function oscillates',
              'The function blows up'
            ],
            correctAnswer: 1,
            explanation: 'Catastrophic cancellation — at $10^{-8}$ the numerator is too small for finite precision. Use the identity $1 - \\cos x \\approx x^2/2$ to see the true limit is $1/2$.'
          },
          {
            question: 'For $f(x) = \\sin(\\pi/x)$, picking $x = 1/n$ for $n = 1, 2, 3, \\ldots$ gives $f(x) = 0$ every time. What is $\\lim_{x \\to 0} f(x)$ really?',
            options: ['$0$', '$1$', 'DNE — function oscillates', '$\\pi$'],
            correctAnswer: 2,
            explanation: 'The integer $1/n$ values are *cherry-picked*. Other $x$-values (like $x = 2/(2n+1)$) give $\\pm 1$. The function oscillates infinitely fast — limit DNE.'
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
              'Always — tables are the most rigorous method',
              'Never — only algebra is acceptable',
              'When direct substitution fails, especially as a first estimate or sanity check',
              'Only on the calculator-allowed sections of the AP exam'
            ],
            correctAnswer: 2,
            explanation: 'Tables shine on indeterminate forms. They\'re a starting point — pair with algebra for full credit.'
          },
          {
            question: 'A reliable way to spot oscillation from a table is:',
            options: [
              'Outputs grow without bound',
              'Outputs jump from one value to another',
              'Outputs refuse to settle even as $x$ gets very close to $a$',
              'The function equals 0 at $x = a$'
            ],
            correctAnswer: 2,
            explanation: 'Oscillation means no convergence. If outputs keep wandering as $|x - a|$ shrinks, suspect an oscillating limit.'
          }
        ]
      }
    }
  ]
}
