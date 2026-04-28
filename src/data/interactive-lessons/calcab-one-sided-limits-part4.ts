export const calcabOneSidedLimitsPart4Data = {
  topicSlug: 'one-sided-limits',
  sections: [
    {
      id: 'osl4-intro',
      type: 'text' as const,
      content: `# ⚠️ When Only ONE Side Exists

**Part 4 of 4 — Domain restrictions and one-sided endpoints**

---

### Topics in This Part

| Section |
|---------|
| Why Only One Side Might Exist |
| 📝 Square Roots and Endpoints |
| The Two-Sided Limit at a Domain Endpoint |

> 🔑 **Why this matters:** AP loves to ask about $\\sqrt{x}$ at $x = 0$ and similar functions where one side is *undefined*.`
    },
    {
      id: 'osl4-why',
      type: 'text' as const,
      content: `
## 🤔 Why Only One Side Might Exist

If a function is **only defined on one side** of $x = a$, you can only approach $a$ from that side. The other one-sided limit doesn't exist (because the function values don't exist there).

| Function | Domain near 0 | Limits at 0 |
|----------|---------------|-------------|
| $\\sqrt{x}$ | $x \\ge 0$ only | $\\lim_{x \\to 0^+} \\sqrt{x} = 0$; left limit doesn't make sense |
| $\\ln x$ | $x > 0$ only | $\\lim_{x \\to 0^+} \\ln x = -\\infty$; left limit doesn't make sense |
| $\\sqrt{x - 5}$ | $x \\ge 5$ | $\\lim_{x \\to 5^+} \\sqrt{x - 5} = 0$; left limit not defined |
      `
    },
    {
      id: 'osl4-sqrt',
      type: 'text' as const,
      content: `
## 📝 Worked Example: $\\sqrt{x - 3}$ at $x = 3$

The expression $\\sqrt{x - 3}$ requires $x \\ge 3$.

- $\\lim_{x \\to 3^+} \\sqrt{x - 3} = \\sqrt{0} = 0$. ✅ Defined.
- $\\lim_{x \\to 3^-} \\sqrt{x - 3}$: for $x < 3$, the radicand is negative, so $\\sqrt{x - 3}$ isn't a real number. Left-hand limit doesn't exist.

> 💡 In AP-style problems, the answer here is *"the right-hand limit equals 0; the left-hand limit does not exist."*
      `
    },
    {
      id: 'osl4-endpoint',
      type: 'text' as const,
      content: `
## ⚖️ The Two-Sided Limit at a Domain Endpoint

What is $\\lim_{x \\to 3} \\sqrt{x - 3}$?

By the strict existence theorem, the two-sided limit DNE because the left-hand limit doesn't exist.

> ⚠️ **AP convention exception:** for the purposes of *continuity from the right at an endpoint*, AP textbooks often define $\\lim_{x \\to 3} \\sqrt{x - 3} = 0$ by treating the right-hand limit as the relevant one. Read the problem context: most AP problems will ask explicitly for $\\lim_{x \\to 3^+}$, sidestepping the technicality.
      `
    },
    {
      id: 'osl4-mc',
      type: 'multiple-choice' as const,
      content: `**Endpoint Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\sqrt{x - 7}$, what is $\\lim_{x \\to 7^+} f(x)$?',
            options: ['$0$', '$7$', 'DNE', '$-7$'],
            correctAnswer: 0,
            explanation: 'For $x > 7$, $\\sqrt{x-7}$ is defined and approaches $\\sqrt{0} = 0$.'
          },
          {
            question: 'For $f(x) = \\sqrt{x - 7}$, what is $\\lim_{x \\to 7^-} f(x)$?',
            options: ['$0$', '$-i$', 'DNE — function not defined for $x < 7$', '$-\\infty$'],
            correctAnswer: 2,
            explanation: '$\\sqrt{x - 7}$ requires $x \\ge 7$. The left-hand limit asks about $x < 7$, where the function isn\'t real-valued — left-hand limit DNE.'
          },
          {
            question: 'For $f(x) = \\ln x$, what is $\\lim_{x \\to 0^+} f(x)$?',
            options: ['$0$', '$1$', '$-\\infty$', '$+\\infty$'],
            correctAnswer: 2,
            explanation: '$\\ln x$ heads to $-\\infty$ as $x \\to 0^+$. The left-hand limit doesn\'t exist (function undefined for $x \\le 0$).'
          }
        ]
      }
    },
    {
      id: 'osl4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'Which statement is TRUE about $\\lim_{x \\to 0} \\sqrt{x}$ under the strict existence theorem?',
            options: [
              'It equals 0 because $f(0) = 0$',
              'It DNE strictly, because $\\sqrt{x}$ isn\'t defined for $x < 0$ (left-hand limit fails)',
              'It equals $-1$',
              'It equals $\\infty$'
            ],
            correctAnswer: 1,
            explanation: 'Strict existence requires both one-sided limits. The left-hand side doesn\'t exist (domain issue). AP often uses one-sided notation here to avoid the ambiguity.'
          },
          {
            question: 'Two-sided existence theorem in plain English:',
            options: [
              '$\\lim_{x\\to a} f$ exists iff $f(a)$ is defined',
              '$\\lim_{x\\to a} f$ exists iff both one-sided limits exist and are equal',
              '$\\lim_{x\\to a} f$ exists iff $f$ is differentiable at $a$',
              '$\\lim_{x\\to a} f$ exists iff $f$ is bounded near $a$'
            ],
            correctAnswer: 1,
            explanation: 'The defining theorem of one-sided vs. two-sided limits. Memorize and cite.'
          }
        ]
      }
    }
  ]
}
