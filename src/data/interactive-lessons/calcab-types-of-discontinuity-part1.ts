export const calcabTypesDiscontinuityPart1Data = {
  topicSlug: 'types-of-discontinuity',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# 🕳️ Removable Discontinuities (Holes)

**Part 1 of 4 — The "fixable" kind**

---

### Topics in This Part

| Section |
|---------|
| What Is a Removable Discontinuity? |
| 🔑 Spotting Holes Algebraically |
| Filling the Hole |

> 🔑 **Why this matters:** Holes happen whenever a factor cancels in a rational expression. They\'re the "$0/0$ that simplifies" case.`
    },
    {
      id: 'td1-def',
      type: 'text' as const,
      content: `
## 📐 Definition

> A discontinuity at $x = a$ is **removable** if $\\lim_{x \\to a} f(x)$ exists (finite), but either $f(a)$ is undefined or $f(a) \\ne$ the limit.

The discontinuity is "removable" because we could *redefine* $f(a)$ to equal the limit and the function would become continuous there.

Visually: a single missing or out-of-place point on an otherwise smooth curve — a **hole**.
      `
    },
    {
      id: 'td1-spot',
      type: 'text' as const,
      content: `
## 🔑 Spotting Holes Algebraically

For a rational function $\\dfrac{p(x)}{q(x)}$, a hole at $x = a$ occurs when $(x - a)$ is a factor of *both* $p$ and $q$ (and after cancelling, the denominator is nonzero at $a$).

**Worked example.** $f(x) = \\dfrac{x^2 - 4}{x - 2}$.

- Direct sub: $0/0$.
- Factor: $\\dfrac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\ne 2$.
- $\\lim_{x \\to 2} f(x) = 4$.
- $f(2)$ undefined → hole at $x = 2$, height 4.
      `
    },
    {
      id: 'td1-fill',
      type: 'text' as const,
      content: `
## 🩹 Filling the Hole

Define a "fixed" function:
$$\\tilde f(x) = \\begin{cases} f(x), & x \\ne 2 \\\\ 4, & x = 2 \\end{cases}$$

This $\\tilde f$ is continuous everywhere — we *removed* the discontinuity by plugging in the limit value.

> 💡 The phrase "removable" means the limit exists; the discontinuity can be patched.
      `
    },
    {
      id: 'td1-mc',
      type: 'multiple-choice' as const,
      content: `**Hole Spotting** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\dfrac{x^2 - 9}{x - 3}$, what type of discontinuity is at $x = 3$?',
            options: ['Vertical asymptote', 'Removable hole', 'Jump', 'No discontinuity'],
            correctAnswer: 1,
            explanation: '$\\dfrac{(x-3)(x+3)}{x-3} = x + 3$. Hole at $x = 3$, height 6.'
          },
          {
            question: 'For the function in the previous question, the height of the hole is:',
            options: ['$0$', '$3$', '$6$', '$9$'],
            correctAnswer: 2,
            explanation: 'After cancelling, $x + 3$ at $x = 3$ is $6$.'
          }
        ]
      }
    },
    {
      id: 'td1-input',
      type: 'input-boxes' as const,
      content: `**Find the Hole Height** 🧮

For each function, compute the limit at the indicated point (the height of the hole).

**1)** $f(x) = \\dfrac{x^2 - 25}{x - 5}$ at $x = 5$ → height ?

**2)** $g(x) = \\dfrac{x^2 - x - 6}{x - 3}$ at $x = 3$ → height ?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '5'],
        hint1: '$\\dfrac{(x-5)(x+5)}{x-5} = x + 5$. At $x = 5$: $10$.',
        hint2: '$x^2 - x - 6 = (x-3)(x+2)$. After cancel: $x + 2$. At $x = 3$: $5$.',
        explanation: 'Factor, cancel the common factor, then plug in.'
      }
    }
  ]
}
