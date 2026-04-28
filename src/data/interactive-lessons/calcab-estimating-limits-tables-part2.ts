export const calcabEstimatingLimitsTablesPart2Data = {
  topicSlug: 'estimating-limits-tables',
  sections: [
    {
      id: 'elt2-intro',
      type: 'text' as const,
      content: `# 📊 Building a Two-Sided Table

**Part 2 of 4 — From rows of numbers to a limit estimate**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Two-Sided Table Format |
| Worked Example: $\\dfrac{x^2 - 1}{x - 1}$ |
| Reading the Limit Off the Table |

> 🔑 **Why this matters:** Tables shine on $0/0$ forms. You see what the function "wants" to be, even when substitution fails.`
    },
    {
      id: 'elt2-format',
      type: 'text' as const,
      content: `
## 🔑 The Two-Sided Table Format

For $\\lim_{x \\to a} f(x)$, build:

| Approach from the LEFT | $\\to a \\leftarrow$ | Approach from the RIGHT |
|---|---|---|
| $a - 0.1$, $a - 0.01$, $a - 0.001$ | (skip $a$) | $a + 0.001$, $a + 0.01$, $a + 0.1$ |

Compute $f$ at each $x$, then ask:

1. **Are the left outputs settling on a value $L_-$?**
2. **Are the right outputs settling on a value $L_+$?**
3. **Is $L_- = L_+$?** If yes, that common value is your estimate. If no → DNE.
      `
    },
    {
      id: 'elt2-worked',
      type: 'text' as const,
      content: `
## 📝 Worked Example: $f(x) = \\dfrac{x^2 - 1}{x - 1}$

Estimate $\\lim_{x \\to 1} f(x)$. Direct substitution gives $0/0$ — indeterminate.

| $x$ | $0.9$ | $0.99$ | $0.999$ | $1.001$ | $1.01$ | $1.1$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ |

- Left side settles on $L_- = 2$.
- Right side settles on $L_+ = 2$.
- $L_- = L_+ = 2$, so $\\lim_{x \\to 1} f(x) \\approx 2$.

> 💡 **Sanity check:** factor — $\\dfrac{(x-1)(x+1)}{x-1} = x + 1$ for $x \\ne 1$, which gives 2 at $x = 1$. The table agrees.
      `
    },
    {
      id: 'elt2-reading',
      type: 'text' as const,
      content: `
## 📖 Reading the Limit Off the Table

When outputs *agree to the precision shown*, round to a "clean" number — usually the value the digits are clearly converging toward.

| Sample $f(x)$ outputs | Best estimate |
|-----------------------|---------------|
| $2.998, 2.9998, 3.0001, 3.001$ | $L \\approx 3$ |
| $-0.4998, -0.49998, -0.50002, -0.5001$ | $L \\approx -0.5$ |
| $1.4140, 1.41420, 1.41422, 1.4142$ | $L \\approx \\sqrt{2}$ (recognize the digits!) |

> 🔑 Recognize famous decimals: $0.5, 0.333\\ldots, 0.25, 1.414, 2.718, 3.141$.
      `
    },
    {
      id: 'elt2-mc',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A table for $\\lim_{x \\to 0} f(x)$ shows: $f(-0.01)=2.7193$, $f(-0.001)=2.71828$, $f(0.001)=2.71829$, $f(0.01)=2.7196$. The best estimate is:',
            options: ['$2.7$', '$e \\approx 2.71828$', '$2.72$', 'DNE'],
            correctAnswer: 1,
            explanation: 'The digits are converging on $e \\approx 2.71828$. Recognizing famous constants from numerical evidence is a common AP move.'
          },
          {
            question: 'A table shows left outputs settling on 4 and right outputs settling on 7. The two-sided limit is:',
            options: ['$4$', '$7$', '$5.5$ (average)', 'Does not exist'],
            correctAnswer: 3,
            explanation: 'One-sided limits disagree, so the two-sided limit DNE — likely a jump.'
          }
        ]
      }
    },
    {
      id: 'elt2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the table to the limit** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Both sides $\\to 0.5000\\ldots$', options: ['$0.5$', '$5$', 'DNE', '$\\infty$'] },
          { label: 'Left $\\to -3$, right $\\to 3$', options: ['$0$', '$3$', '$-3$', 'DNE'] },
          { label: 'Both sides $\\to 1.41421\\ldots$', options: ['$1$', '$\\sqrt{2}$', '$\\pi/2$', 'DNE'] },
        ],
        correctAnswers: ['$0.5$', 'DNE', '$\\sqrt{2}$'],
        hint1: 'When both sides agree on the same finite number, that\'s the limit.',
        hint2: 'Disagreeing one-sided limits → DNE.',
        hint3: '$\\sqrt{2} = 1.41421356\\ldots$',
        explanation: 'Match each table pattern to the cleanest closed-form value the digits suggest, or to DNE if the sides disagree.'
      }
    }
  ]
}
