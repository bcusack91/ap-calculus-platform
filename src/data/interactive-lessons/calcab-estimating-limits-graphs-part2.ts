export const calcabEstimatingLimitsGraphsPart2Data = {
  topicSlug: 'estimating-limits-graphs',
  sections: [
    {
      id: 'elg2-intro',
      type: 'text' as const,
      content: `# 📈 One-Sided Limits from a Graph

**Part 2 of 4 — Left arm, right arm**

---

### Topics in This Part

| Section |
|---------|
| Left vs. Right Visually |
| The Existence Theorem (visual form) |
| Worked Reading |

> 🔑 **Why this matters:** AP graphs love to show piecewise functions where the two sides do different things.`
    },
    {
      id: 'elg2-leftright',
      type: 'text' as const,
      content: `
## 👈👉 Left vs. Right Visually

Two notations on the same graph:

- $\\lim_{x \\to a^-} f(x)$: trace from the **left** toward $a$. Read the $y$-value the curve heads for.
- $\\lim_{x \\to a^+} f(x)$: trace from the **right** toward $a$. Read the $y$-value the curve heads for.

> 💡 **Tip:** the superscript $-$ means "from values less than $a$" (left). The superscript $+$ means "from values greater than $a$" (right).
      `
    },
    {
      id: 'elg2-existence',
      type: 'text' as const,
      content: `
## ✅ The Existence Theorem — Visually

Two-sided limit exists $\\iff$ both arms of the graph aim at the same $y$-value at $x = a$.

| Picture at $x = a$ | What it means |
|--------------------|---------------|
| Both arms meet at the same $y$ | $\\lim_{x \\to a} f(x) = $ that $y$-value |
| Arms aim at different $y$-values (graph "jumps") | $\\lim_{x \\to a} f(x)$ DNE |
| Either arm shoots up/down to $\\pm\\infty$ | $\\lim_{x \\to a} f(x)$ DNE (vertical asymptote) |

The value $f(a)$ — drawn as a closed dot, open circle, or missing entirely — does NOT affect the limit.
      `
    },
    {
      id: 'elg2-reading',
      type: 'text' as const,
      content: `
## 📖 Worked Reading

A piecewise graph $f$ near $x = 1$ shows:
- Left arm aiming at $y = 4$ (open circle at $(1, 4)$).
- Right arm aiming at $y = 2$ (closed dot at $(1, 2)$).

| Question | Answer |
|----------|--------|
| $\\lim_{x \\to 1^-} f(x)$ | $4$ |
| $\\lim_{x \\to 1^+} f(x)$ | $2$ |
| $\\lim_{x \\to 1} f(x)$ | DNE (the two sides disagree) |
| $f(1)$ | $2$ (the closed dot) |

> ⚠️ Don't confuse "$f(1)$ exists" with "the limit at 1 exists." They are independent.
      `
    },
    {
      id: 'elg2-mc',
      type: 'multiple-choice' as const,
      content: `**Read the One-Sided Limits** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A graph shows the left arm at $x = 0$ aiming at $y = 2$ and the right arm aiming at $y = 5$. What is $\\lim_{x \\to 0} f(x)$?',
            options: ['$2$', '$5$', '$3.5$', 'DNE'],
            correctAnswer: 3,
            explanation: 'One-sided limits disagree (2 vs 5), so the two-sided limit DNE.'
          },
          {
            question: 'Same graph as above: what is $\\lim_{x \\to 0^+} f(x)$?',
            options: ['$2$', '$5$', '$0$', 'DNE'],
            correctAnswer: 1,
            explanation: 'The right arm aims at 5, so the right-hand limit is 5.'
          }
        ]
      }
    },
    {
      id: 'elg2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Picture Match** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Both arms meet at $y = 3$, with a closed dot at $(2, 3)$. $\\lim_{x \\to 2} f(x) = $', options: ['$0$', '$3$', 'DNE', '$2$'] },
          { label: 'Both arms meet at $y = 3$, but a solid dot is drawn at $(2, 7)$. $\\lim_{x \\to 2} f(x) = $', options: ['$3$', '$7$', '$5$', 'DNE'] },
          { label: 'Left arm $\\to 1$, right arm $\\to 4$, no dot drawn. $\\lim_{x \\to 2} f(x) = $', options: ['$1$', '$4$', '$2.5$', 'DNE'] },
        ],
        correctAnswers: ['$3$', '$3$', 'DNE'],
        hint1: 'Limit is what the arms aim at, not what dot is drawn.',
        hint2: 'Even with $f(2) = 7$, both arms still aim at 3.',
        hint3: 'Disagreeing arms → DNE.',
        explanation: 'The limit is determined entirely by the arms, not by any dot drawn at $x = a$.'
      }
    }
  ]
}
