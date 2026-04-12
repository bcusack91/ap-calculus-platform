export const calcbcDiffEqPart1Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'differentialequationsbc-p1-intro',
      type: 'text' as const,
      content: `# 📐 Differential Equations (BC Topics)

**Part 1 of 7 — Separable Equations Review**

---

### Separable Differential Equations

A separable DE can be written as:
$$\\\\frac{dy}{dx} = f(x) \\\\cdot g(y)$$

**Solution Method:**
$$\\\\frac{dy}{g(y)} = f(x)\\\\,dx \\\\quad \\\\Rightarrow \\\\quad \\\\int \\\\frac{dy}{g(y)} = \\\\int f(x)\\\\,dx$$

---

### Worked Example

$$\\\\frac{dy}{dx} = 2xy, \\\\quad y(0) = 3$$

$$\\\\frac{dy}{y} = 2x\\\\,dx \\\\quad \\\\Rightarrow \\\\quad \\\\ln|y| = x^2 + C$$

$$y = Ae^{x^2}$$

Using $y(0) = 3$: $A = 3$, so $y = 3e^{x^2}$.

---

### Key BC Extension: Logistic Model

$$\\\\frac{dP}{dt} = kP\\\\left(1 - \\\\frac{P}{L}\\\\right)$$

Solution: $P(t) = \\\\frac{L}{1 + Ae^{-kt}}$ where $A = \\\\frac{L - P_0}{P_0}$.`
    },
    {
      id: 'differentialequationsbc-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes separable equations review?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: 'Separable Equations Review is a key topic tested on the AP Calculus BC exam.'
          }
        ]
      }
    }
  ]
};
