export const calcabDirectSubstitutionPart4Data = {
  topicSlug: 'direct-substitution-method',
  sections: [
    {
      id: 'dsm4-intro',
      type: 'text' as const,
      content: `# 🚦 When Direct Substitution Fails

**Part 4 of 4 — Recognize the trigger and switch tools**

---

### Topics in This Part

| Section |
|---------|
| The Indeterminate Form Trigger |
| What to Do Next (a Roadmap) |
| Substitution vs. Indeterminate vs. DNE |

> 🔑 **Why this matters:** When substitution gives $0/0$ or another indeterminate form, that's a *signal* — not an answer. You need a different technique.`
    },
    {
      id: 'dsm4-trigger',
      type: 'text' as const,
      content: `
## ⚠️ The Indeterminate Form Trigger

Plugging in $x = a$ can yield:

| Result | What it means | Next step |
|--------|---------------|-----------|
| Clean number $L$ | Limit is $L$ ✅ | Done |
| Nonzero / 0 | Vertical asymptote — limit DNE (or $\\pm\\infty$) | Analyze sign on each side |
| $0/0$ | **Indeterminate** | Factor, rationalize, L'Hôpital, or known limit |
| $\\infty / \\infty$ | **Indeterminate** | Compare growth rates / divide by dominant term |

> 💡 "Indeterminate" doesn't mean "no answer." It means "more work needed."
      `
    },
    {
      id: 'dsm4-roadmap',
      type: 'text' as const,
      content: `
## 🗺️ What to Do Next (A Roadmap)

| Indeterminate form | Most common technique |
|--------------------|----------------------|
| $0/0$, polynomial-only | **Factor** and cancel the common factor |
| $0/0$, contains $\\sqrt{}$ | **Rationalize** with the conjugate |
| $0/0$, contains $\\sin$ or $\\cos$ | Use known special limits like $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ |
| $\\infty / \\infty$ | Divide top and bottom by highest power of $x$ |

> 🔑 The next four micro-topics in this unit develop these techniques one at a time.
      `
    },
    {
      id: 'dsm4-distinguish',
      type: 'text' as const,
      content: `
## 🧠 Substitution vs. Indeterminate vs. DNE

Three cleanly different outcomes when you "plug in":

1. **Number** — direct substitution wins, you're done.
2. **Indeterminate form** — you don't have the answer yet; switch to factoring/rationalizing/etc. The limit *might* still exist.
3. **Nonzero over zero** — the limit DNE because of unbounded behavior; sometimes we can describe it as $\\pm\\infty$.

> ⚠️ **Common mistake:** writing "DNE" when you actually got $0/0$. $0/0$ is *not* an answer — it's a request to do more work.
      `
    },
    {
      id: 'dsm4-mc',
      type: 'multiple-choice' as const,
      content: `**Diagnose the Trigger** 🎯`,
      exercise: {
        questions: [
          {
            question: 'You plug $x = 3$ into $\\dfrac{x^2 - 9}{x - 3}$ and get $\\dfrac{0}{0}$. The correct conclusion is:',
            options: ['The limit is $0$ since the top is $0$', 'The limit DNE since the bottom is $0$', 'Indeterminate, so factor and retry', 'The limit is $\\infty$ since the bottom is $0$'],
            correctAnswer: 2,
            explanation: '$0/0$ is indeterminate: it says nothing yet about the limit, so neither the zero numerator nor the zero denominator decides it. Factor: $\\dfrac{(x-3)(x+3)}{x-3} \\to x + 3 \\to 6$.'
          },
          {
            question: 'You plug $x = 0$ into $\\dfrac{1}{x}$ and get $\\dfrac{1}{0}$. Conclusion:',
            options: ['The limit is $0$ since the top is $1$', 'DNE, since the sides go to opposite infinities', 'Indeterminate, so factor and retry', 'The limit is $+\\infty$ from both sides'],
            correctAnswer: 1,
            explanation: 'Nonzero over zero is NOT indeterminate — it signals a vertical asymptote. From the right $1/x \\to +\\infty$ and from the left $1/x \\to -\\infty$, so the two-sided limit DNE. Both sides going to $+\\infty$ is the behavior of $1/x^2$, not $1/x$.'
          },
          {
            question: 'You plug into $x^2 - 4x + 1$ at $x = 2$ and get $-3$. Conclusion:',
            options: ['Indeterminate; apply L\'Hôpital\'s Rule', 'The limit is $-3$', 'Unknown until both one-sided limits are checked', 'The limit is near $-3$ but cannot equal it'],
            correctAnswer: 1,
            explanation: 'Polynomials are continuous, so a clean number from substitution IS the limit — no one-sided check or L\'Hôpital is needed, and a limit can equal the function\'s value.'
          }
        ]
      }
    },
    {
      id: 'dsm4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'When direct substitution succeeds, the function MUST be:',
            options: ['Differentiable at $a$', 'Continuous at $a$', 'A polynomial function', 'Defined for every real $x$'],
            correctAnswer: 1,
            explanation: 'Direct substitution works precisely when $\\lim = f(a)$ — the definition of continuity at $a$. Many non-polynomials (like $\\sin x$ or $\\sqrt{x}$ on its domain) allow it, a function need only be defined near $a$, and continuity does not require differentiability.'
          },
          {
            question: 'Direct substitution into $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ gives $\\frac{0}{0}$. What does that tell you?',
            options: ['The limit may still exist after more work', 'The limit is $0$, since the numerator is $0$', 'The limit does not exist, since you cannot divide by $0$', 'The limit is $\\infty$, since the denominator is $0$'],
            correctAnswer: 0,
            explanation: '$\\frac{0}{0}$ is indeterminate: it does not decide the limit by itself. Factor and cancel: $\\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$. A zero numerator or a zero denominator alone does not settle the value when both are $0$.'
          }
        ]
      }
    }
  ]
}
