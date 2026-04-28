export const calcabInfiniteLimitsPart3Data = {
  topicSlug: 'infinite-limits-vertical-asymptotes',
  sections: [
    {
      id: 'ilva3-intro',
      type: 'text' as const,
      content: `# 📍 Vertical Asymptotes

**Part 3 of 4 — Where do they live?**

---

### Topics in This Part

| Section |
|---------|
| Definition |
| 🔑 Where to Find Them |
| Holes vs. Asymptotes (the $0/0$ vs. nonzero/0 distinction) |

> 🔑 **Why this matters:** Vertical asymptotes are a graph feature; understanding them connects limits to function behavior.`
    },
    {
      id: 'ilva3-def',
      type: 'text' as const,
      content: `
## 📐 Definition

> The vertical line $x = a$ is a **vertical asymptote** of $f$ if at least one of the following holds:
>
> $\\lim_{x \\to a^+} f(x) = \\pm\\infty \\quad \\text{or} \\quad \\lim_{x \\to a^-} f(x) = \\pm\\infty$.

In other words: the function shoots off to $\\pm\\infty$ as $x$ approaches $a$ from at least one side.

> 💡 You don\'t need both sides to agree. A one-sided infinite limit is enough.
      `
    },
    {
      id: 'ilva3-where',
      type: 'text' as const,
      content: `
## 🔍 Where to Find Vertical Asymptotes

For a rational function $\\dfrac{p(x)}{q(x)}$:

1. **Find zeros of $q(x)$** — these are the *candidate* asymptotes.
2. **For each zero $a$, check the numerator $p(a)$:**
   - $p(a) \\ne 0$ → vertical asymptote at $x = a$.
   - $p(a) = 0$ → it\'s a $0/0$ situation. Could be a **hole** (removable) or a vertical asymptote, depending on multiplicities.

**Worked example.** $f(x) = \\dfrac{x + 1}{x^2 - 4} = \\dfrac{x + 1}{(x - 2)(x + 2)}$.

- Denominator zeros: $x = 2$ and $x = -2$.
- Numerator at $x = 2$: $3 \\ne 0$ → asymptote at $x = 2$.
- Numerator at $x = -2$: $-1 \\ne 0$ → asymptote at $x = -2$.
- Two vertical asymptotes.
      `
    },
    {
      id: 'ilva3-hole',
      type: 'text' as const,
      content: `
## 🕳️ Holes vs. Asymptotes

If both $p(a) = 0$ and $q(a) = 0$, factor to figure out which it is.

**Example 1 — hole.** $f(x) = \\dfrac{x^2 - 1}{x - 1} = \\dfrac{(x-1)(x+1)}{x - 1} = x + 1$ for $x \\ne 1$. The factor cancels exactly. There\'s a **hole** at $x = 1$, no asymptote. The limit there equals $2$.

**Example 2 — asymptote.** $f(x) = \\dfrac{x - 1}{(x - 1)^2} = \\dfrac{1}{x - 1}$. After cancelling, the denominator still has a remaining $(x - 1)$, so there\'s an asymptote.

> 💡 **Rule:** count multiplicities. If the denominator\'s power of $(x - a)$ is greater than the numerator\'s, you have an asymptote. Otherwise, a hole (or no issue).
      `
    },
    {
      id: 'ilva3-mc',
      type: 'multiple-choice' as const,
      content: `**Identify Asymptotes** 🎯`,
      exercise: {
        questions: [
          {
            question: 'How many vertical asymptotes does $f(x) = \\dfrac{x + 5}{x^2 - 9}$ have?',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 2,
            explanation: 'Denominator zeros at $x = \\pm 3$. Neither is a numerator zero. Two asymptotes.'
          },
          {
            question: 'For $f(x) = \\dfrac{x - 4}{x^2 - 16}$, $x = 4$ is a:',
            options: ['Vertical asymptote', 'Hole (removable discontinuity)', 'Horizontal asymptote', 'Critical point'],
            correctAnswer: 1,
            explanation: '$\\dfrac{x-4}{(x-4)(x+4)} = \\dfrac{1}{x+4}$. The $(x-4)$ cancels exactly → hole, not asymptote.'
          },
          {
            question: 'For $f(x) = \\dfrac{(x - 2)}{(x - 2)^3}$, $x = 2$ is a:',
            options: ['Hole', 'Vertical asymptote (denominator power exceeds numerator)', 'Horizontal asymptote', 'Removable point'],
            correctAnswer: 1,
            explanation: 'After cancelling one $(x-2)$, two remain in the denominator: $\\dfrac{1}{(x-2)^2}$. Vertical asymptote.'
          }
        ]
      }
    },
    {
      id: 'ilva3-input',
      type: 'input-boxes' as const,
      content: `**Count Asymptotes** 🧮

How many vertical asymptotes does each function have?

**1)** $f(x) = \\dfrac{1}{x^2 - 9}$ → ?

**2)** $g(x) = \\dfrac{x - 1}{x^2 - 1}$ → ? (think about cancellation)

**3)** $h(x) = \\dfrac{x + 2}{(x - 1)(x - 5)}$ → ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '2'],
        hint1: '$x^2 - 9 = (x-3)(x+3)$. Numerator never 0. Both are asymptotes.',
        hint2: 'Numerator zero at $x = 1$, also denom zero. Cancel $(x-1)$: $\\dfrac{1}{x+1}$. Hole at $x=1$, asymptote at $x=-1$. Total asymptotes: 1.',
        hint3: 'Two distinct denominator zeros, neither is a numerator zero. Two asymptotes.',
        explanation: 'Always check whether each denominator zero cancels with the numerator (hole) or not (asymptote).'
      }
    }
  ]
}
