export const calcabDirectSubstitutionPart1Data = {
  topicSlug: 'direct-substitution-method',
  sections: [
    {
      id: 'dsm1-intro',
      type: 'text' as const,
      content: `# 🎯 Direct Substitution — The Idea

**Part 1 of 4 — When you can "just plug in"**

---

### Topics in This Part

| Section |
|---------|
| The Big Idea |
| 🔑 The Continuity Connection |
| Easy Examples |

> 🔑 **Why this matters:** Direct substitution is the *first thing you try* on every limit problem. Many AP limits are solved in one line.`
    },
    {
      id: 'dsm1-idea',
      type: 'text' as const,
      content: `
## 💡 The Big Idea

> **Direct substitution:** to find $\\lim_{x \\to a} f(x)$, simply compute $f(a)$.

If $f$ is **continuous at $a$**, the answer is just $f(a)$ — no fancy work needed.

$$\\lim_{x \\to a} f(x) = f(a) \\quad \\text{whenever $f$ is continuous at $a$.}$$

> 💡 This is the *definition* of continuity: limit equals value.
      `
    },
    {
      id: 'dsm1-continuity',
      type: 'text' as const,
      content: `
## 🔑 The Continuity Connection

Direct substitution works because of a chain of facts:

1. Polynomials are continuous everywhere.
2. Rational functions are continuous everywhere their denominator is nonzero.
3. $\\sin x$, $\\cos x$, $e^x$ are continuous everywhere.
4. $\\ln x$ is continuous on $x > 0$.
5. $\\sqrt{x}$ is continuous on $x \\ge 0$.
6. Sums, products, quotients (denominator $\\ne 0$), and compositions of continuous functions are continuous.

> 💡 **Strategy:** before trying anything fancy, *try plugging in*. If it gives a clean number, you're done.
      `
    },
    {
      id: 'dsm1-easy',
      type: 'text' as const,
      content: `
## 📝 Easy Examples

| Limit | Substitution | Answer |
|-------|--------------|--------|
| $\\lim_{x \\to 4} (3x^2 - 2x + 1)$ | $3(16) - 2(4) + 1 = 41$ | $41$ |
| $\\lim_{x \\to 0} \\cos x$ | $\\cos 0 = 1$ | $1$ |
| $\\lim_{x \\to 1} \\dfrac{x^2 + 5}{x + 2}$ | $\\dfrac{1 + 5}{1 + 2} = 2$ | $2$ |
| $\\lim_{x \\to e} \\ln x$ | $\\ln e = 1$ | $1$ |
| $\\lim_{x \\to 2} e^x$ | $e^2 \\approx 7.389$ | $e^2$ |
      `
    },
    {
      id: 'dsm1-mc',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Direct substitution gives the limit when:',
            options: ['Always', 'The function is continuous at the target point', 'The function equals zero at the target point', 'The function is a polynomial of degree 1'],
            correctAnswer: 1,
            explanation: 'Continuity at $a$ is precisely the property that lets us substitute: $\\lim_{x\\to a} f = f(a)$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 3} (x^2 - 4)$.',
            options: ['$5$', '$0$', '$9$', '$-5$'],
            correctAnswer: 0,
            explanation: 'Polynomials are continuous everywhere. Substitute: $9 - 4 = 5$.'
          }
        ]
      }
    },
    {
      id: 'dsm1-input',
      type: 'input-boxes' as const,
      content: `**Substitute** 🧮

Compute each limit by direct substitution:

**1)** $\\lim_{x \\to 2} (x^3 - x) = ?$

**2)** $\\lim_{x \\to 0} (\\sin x + 5) = ?$

**3)** $\\lim_{x \\to 4} \\dfrac{x + 1}{x - 1} = ?$ (decimal or fraction)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '5', '5/3'],
        hint1: '$2^3 - 2 = 8 - 2 = 6$.',
        hint2: '$\\sin 0 = 0$.',
        hint3: '$(4+1)/(4-1) = 5/3 \\approx 1.667$.',
        explanation: 'All three are continuous at the target points — direct substitution works.'
      }
    }
  ]
}
