export const calcabOneSidedLimitsPart1Data = {
  topicSlug: 'one-sided-limits',
  sections: [
    {
      id: 'osl1-intro',
      type: 'text' as const,
      content: `# 👈👉 One-Sided Limits — Notation and Idea

**Part 1 of 4 — Introducing $x \\to a^-$ and $x \\to a^+$**

---

### Topics in This Part

| Section |
|---------|
| Why We Need One-Sided Limits |
| 🔑 The $-$ and $+$ Superscript Notation |
| Reading the Symbols Aloud |

> 🔑 **Why this matters:** Some functions behave very differently from the left vs. the right. One-sided limits let us describe each side separately.`
    },
    {
      id: 'osl1-why',
      type: 'text' as const,
      content: `
## 💡 Why We Need One-Sided Limits

Look at $f(x) = \\dfrac{|x|}{x}$.

- For $x < 0$: $|x| = -x$, so $f(x) = -1$.
- For $x > 0$: $|x| = x$, so $f(x) = +1$.

The two sides of $x = 0$ "want" different values. A two-sided limit can't capture this — we need symbols that describe each side separately.
      `
    },
    {
      id: 'osl1-notation',
      type: 'text' as const,
      content: `
## 🔑 The $-$ and $+$ Superscript Notation

| Notation | Meaning |
|----------|---------|
| $\\lim_{x \\to a^-} f(x)$ | "Left-hand limit" — $x$ approaches $a$ from values **less than** $a$ |
| $\\lim_{x \\to a^+} f(x)$ | "Right-hand limit" — $x$ approaches $a$ from values **greater than** $a$ |
| $\\lim_{x \\to a} f(x)$ | "Two-sided limit" — must equal both one-sided limits |

> ⚠️ **Trap:** the superscript $-$ does NOT mean "negative." It means "from the left" (smaller values). $\\lim_{x \\to 5^-}$ uses $x = 4.9, 4.99, \\ldots$ — all positive numbers.
      `
    },
    {
      id: 'osl1-aloud',
      type: 'text' as const,
      content: `
## 🗣️ Reading the Symbols Aloud

| Symbol | English |
|--------|---------|
| $\\lim_{x \\to 2^-} f(x) = 5$ | "The limit of $f$ as $x$ approaches 2 from the left equals 5" |
| $\\lim_{x \\to 0^+} g(x) = -3$ | "The limit of $g$ as $x$ approaches 0 from the right equals $-3$" |
| $\\lim_{x \\to -1^-} h(x) = \\infty$ | "The limit of $h$ as $x$ approaches $-1$ from the left is infinity" |
      `
    },
    {
      id: 'osl1-mc',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In $\\lim_{x \\to 4^-} f(x)$, the $-$ superscript means:',
            options: [
              '$x$ is negative',
              '$x$ approaches 4 from values LESS than 4 (the left)',
              '$x$ approaches $-4$',
              'Subtract from $f(x)$'
            ],
            correctAnswer: 1,
            explanation: 'The "$-$" tells you to approach from the left side of 4 (smaller numbers like 3.9, 3.99…). It has nothing to do with sign.'
          },
          {
            question: 'How do you read $\\lim_{x \\to 0^+} g(x) = 7$ aloud?',
            options: [
              'The limit of $g$ at $0 + 1$ equals 7',
              'The limit of $g$ as $x$ approaches 0 from the right equals 7',
              'The limit of $g$ at positive 0 equals 7',
              '$g(0+) = 7$'
            ],
            correctAnswer: 1,
            explanation: '"$+$" superscript = "from the right" (values greater than 0).'
          }
        ]
      }
    },
    {
      id: 'osl1-input',
      type: 'input-boxes' as const,
      content: `**Translate the Notation** 🧮

For $f(x) = \\dfrac{|x|}{x}$:

**1)** $\\lim_{x \\to 0^-} f(x) = ?$ (whole number with sign)

**2)** $\\lim_{x \\to 0^+} f(x) = ?$ (whole number with sign)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['-1', '1'],
        hint1: 'For $x < 0$, $|x|/x = -x/x = -1$.',
        hint2: 'For $x > 0$, $|x|/x = x/x = 1$.',
        explanation: 'The function equals $-1$ to the left of 0 and $+1$ to the right.'
      }
    }
  ]
}
