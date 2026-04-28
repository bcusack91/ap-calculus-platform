export const calcabEstimatingLimitsTablesPart1Data = {
  topicSlug: 'estimating-limits-tables',
  sections: [
    {
      id: 'elt1-intro',
      type: 'text' as const,
      content: `# 📊 Estimating Limits from Tables

**Part 1 of 4 — Why use a numerical table?**

---

### Topics in This Part

| Section |
|---------|
| The Big Idea |
| 🔑 Choosing Good $x$-Values |
| When Tables Help vs. When They Don't |

> 🔑 **Why this matters:** When you cannot just plug in (because of $0/0$ or an undefined point), a table lets you *watch* the outputs settle.`
    },
    {
      id: 'elt1-idea',
      type: 'text' as const,
      content: `
## 💡 The Big Idea

To estimate $\\lim_{x \\to a} f(x)$ numerically, you pick $x$-values close to $a$ — closer and closer — and read off $f(x)$ in a table. If the outputs **settle on a single number $L$**, then $L$ is the estimated limit.

> 💡 You are *not* plugging in $x = a$. You are watching what $f$ does as $x$ approaches $a$.

### A clean example

Estimate $\\lim_{x \\to 2} (3x + 1)$.

| $x$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $6.7$ | $6.97$ | $6.997$ | $7.003$ | $7.03$ | $7.3$ |

Outputs settle on **7** from both sides. So $\\lim_{x \\to 2} (3x+1) \\approx 7$ (and indeed equals 7).
      `
    },
    {
      id: 'elt1-choosing',
      type: 'text' as const,
      content: `
## 🔑 Choosing Good $x$-Values

A useful table approaches $a$ from **both sides** with values that get visibly closer:

- Left side: $a - 0.1,\\; a - 0.01,\\; a - 0.001$
- Right side: $a + 0.001,\\; a + 0.01,\\; a + 0.1$

> 💡 Use at least 3 values per side, decreasing in distance by powers of 10. This makes the trend obvious.

### Beware: bad table choices

| Bad table | Why |
|-----------|-----|
| Only $x > a$ | You miss the left-hand behavior — could be a jump |
| Big spacing ($a-1, a-0.5$) | Outputs may not have "settled" yet |
| Skipping past $a$ | OK — never include $x = a$ in the table; the limit is about behavior near $a$, not at $a$ |
      `
    },
    {
      id: 'elt1-when',
      type: 'text' as const,
      content: `
## ✅ When Tables Help vs. When They Don't

| Situation | Use a table? |
|-----------|--------------|
| Direct substitution gives a clear number | No — just substitute |
| You get $0/0$ or $0 \\cdot \\infty$ (indeterminate form) | Yes — table gives an estimate |
| The function is given by data only | Yes — table is your only tool |
| Function oscillates wildly (like $\\sin(1/x)$) | ⚠️ Tables can mislead — see Part 4 |

> ⚠️ **A table gives an estimate, not a proof.** On the AP exam, "from the table" answers are valid, but if asked to *justify*, algebra (or theorems) outranks numerical evidence.
      `
    },
    {
      id: 'elt1-mc',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which set of $x$-values is BEST for estimating $\\lim_{x \\to 5} f(x)$ numerically?',
            options: [
              '$\\{0, 1, 2, 3, 4\\}$',
              '$\\{4.9, 4.99, 4.999, 5.001, 5.01, 5.1\\}$',
              '$\\{5, 5, 5, 5\\}$',
              '$\\{4, 4.5, 6, 6.5\\}$'
            ],
            correctAnswer: 1,
            explanation: 'You need values that approach 5 from both sides, getting closer and closer (decreasing by powers of 10). Never include $x = 5$ itself.'
          },
          {
            question: 'A numerical table for $\\lim_{x \\to 0} f(x)$ shows $f(-0.001) \\approx 4.001$ and $f(0.001) \\approx 3.999$. The best estimate is:',
            options: ['$4$', '$3.999$', '$4.001$', 'DNE — values disagree'],
            correctAnswer: 0,
            explanation: 'Both sides are converging on 4 (off by less than 0.001). The estimate is $L \\approx 4$.'
          }
        ]
      }
    },
    {
      id: 'elt1-input',
      type: 'input-boxes' as const,
      content: `**Pick the closest $x$-values** 🧮

You want to estimate $\\lim_{x \\to 7} f(x)$. Type three values approaching 7 from the LEFT, smallest distance first (use comma separation, e.g. \`6.999,6.99,6.9\`):
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ['6.999,6.99,6.9'],
        hint1: 'Each value should be less than 7.',
        hint2: 'Use distances $0.001, 0.01, 0.1$.',
        explanation: '$6.999, 6.99, 6.9$ are the standard left-side approach values for $a = 7$. (The reverse order $6.9, 6.99, 6.999$ also represents the same approach.)'
      }
    }
  ]
}
