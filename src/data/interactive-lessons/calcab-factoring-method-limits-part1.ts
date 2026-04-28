export const calcabFactoringMethodPart1Data = {
  topicSlug: 'factoring-method-limits',
  sections: [
    {
      id: 'fml1-intro',
      type: 'text' as const,
      content: `# 🧮 Factoring Method — The $0/0$ Trigger

**Part 1 of 4 — Why factoring resolves indeterminate forms**

---

### Topics in This Part

| Section |
|---------|
| The $0/0$ Trigger |
| 🔑 Why Factoring Works |
| Easy First Example |

> 🔑 **Why this matters:** $0/0$ is the most common indeterminate form on the AP exam. Factoring is the most common technique to resolve it.`
    },
    {
      id: 'fml1-trigger',
      type: 'text' as const,
      content: `
## ⚠️ The $0/0$ Trigger

You computed $\\lim_{x \\to a} \\dfrac{p(x)}{q(x)}$ by direct substitution and got $0/0$. This means:
- $p(a) = 0$ → so $(x - a)$ is a factor of $p(x)$.
- $q(a) = 0$ → so $(x - a)$ is a factor of $q(x)$.

Both top and bottom share the factor $(x - a)$. We can **cancel** that common factor — for $x \\ne a$, the simplified expression equals the original.

> 💡 **Big idea:** the $(x - a)$ in numerator and denominator are causing the $0/0$. Cancel them, and the surviving expression is what the limit "really wants to be."
      `
    },
    {
      id: 'fml1-why',
      type: 'text' as const,
      content: `
## 🔑 Why Factoring Is Justified

The functions $\\dfrac{p(x)}{q(x)}$ and the simplified version $\\dfrac{p(x)/(x-a)}{q(x)/(x-a)}$ are **identical for every $x \\ne a$**.

Limits ignore the value at $x = a$ — they only care about behavior *near* $a$. So the two functions have the *same limit* as $x \\to a$, even though one is $0/0$ at $a$ and the other is well-defined.

$$\\lim_{x \\to a} \\frac{p(x)}{q(x)} = \\lim_{x \\to a} \\frac{p(x)/(x-a)}{q(x)/(x-a)}$$
      `
    },
    {
      id: 'fml1-easy',
      type: 'text' as const,
      content: `
## 📝 Easy First Example

Find $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.

**Step 1:** Try direct substitution: $\\dfrac{4 - 4}{2 - 2} = \\dfrac{0}{0}$. Indeterminate.

**Step 2:** Factor: $x^2 - 4 = (x - 2)(x + 2)$.

**Step 3:** Cancel: $\\dfrac{(x-2)(x+2)}{x - 2} = x + 2$ for $x \\ne 2$.

**Step 4:** Take the limit of the simplified expression: $\\lim_{x \\to 2} (x + 2) = 4$.

$$\\boxed{\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = 4}$$
      `
    },
    {
      id: 'fml1-mc',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Direct substitution into $\\dfrac{p(x)}{q(x)}$ gives $0/0$ at $x = a$. What does this guarantee?',
            options: [
              'The limit is 0',
              'The limit DNE',
              'Both $p$ and $q$ have $(x - a)$ as a factor',
              'The function is continuous'
            ],
            correctAnswer: 2,
            explanation: '$p(a) = 0$ means $(x-a) \\mid p(x)$ (factor theorem); same for $q$. So we can cancel.'
          },
          {
            question: 'Compute $\\lim_{x \\to 5} \\dfrac{x^2 - 25}{x - 5}$.',
            options: ['$0$', '$10$', '$25$', 'DNE'],
            correctAnswer: 1,
            explanation: '$0/0$ → factor: $\\dfrac{(x-5)(x+5)}{x-5} \\to x + 5 \\to 10$.'
          }
        ]
      }
    },
    {
      id: 'fml1-input',
      type: 'input-boxes' as const,
      content: `**Factor and Limit** 🧮

Compute by factoring:

**1)** $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3} = ?$

**2)** $\\lim_{x \\to -2} \\dfrac{x^2 - 4}{x + 2} = ?$
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['6', '-4'],
        hint1: 'Factor numerator as $(x-3)(x+3)$, cancel $(x-3)$, plug in $x = 3$.',
        hint2: 'Factor numerator as $(x-2)(x+2)$, cancel $(x+2)$, plug in $x = -2$.',
        explanation: 'Both are difference-of-squares: cancel the common factor and substitute the simplified expression.'
      }
    }
  ]
}
