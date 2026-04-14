export const calcbcAdvIntegrationPart4Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai4-intro',
      type: 'text' as const,
      content: `# Definite Integrals and Accumulation

**Part 4 of 7 — FTC Applications at BC Level**

### The Fundamental Theorem — Both Parts

**FTC Part 1 (Evaluation):**
$$\\boxed{\\int_a^b f(x)\\,dx = F(b) - F(a) \\quad \\text{where } F' = f}$$

**FTC Part 2 (Derivative of accumulation):**
$$\\boxed{\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)}$$

### Chain Rule Variation (BC Favorite)

$$\\boxed{\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)}$$

This appears frequently on BC exams and requires careful application of the chain rule.

> **Key Fact:** If BOTH bounds are functions of $x$: split using additivity of integrals.
> $\\frac{d}{dx}\\int_{h(x)}^{g(x)} f(t)\\,dt = f(g(x))g'(x) - f(h(x))h'(x)$`
    },
    {
      id: 'ai4-example',
      type: 'text' as const,
      content: `### Worked Example

Let $F(x) = \\int_1^{x^2} \\frac{\\sin t}{t}\\,dt$. Find $F'(x)$.

Using the chain rule version with $g(x) = x^2$:

$$F'(x) = \\frac{\\sin(x^2)}{x^2} \\cdot 2x = \\frac{2\\sin(x^2)}{x}$$

### Accumulation in Context

If $R(t)$ is a rate (gallons/hour), then:

$$\\int_a^b R(t)\\,dt = \\text{total quantity accumulated from } t = a \\text{ to } t = b$$

**Common BC applications:**
| $R(t)$ represents | $\\int R\\,dt$ gives |
|-------------------|-------------------|
| Velocity | Displacement |
| Speed | Distance |
| Population growth rate | Change in population |
| Flow rate | Total volume |

> **AP Tip:** "Rate" in the integrand → the integral gives total change. This is tested in nearly every AP FRQ.`
    },
    {
      id: 'ai4-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}\\int_0^{3x} e^{t^2}\\,dt =$',
            options: ['$3e^{9x^2}$', '$e^{9x^2}$', '$3e^{3x}$', '$e^{t^2}$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $f(g(x)) \\cdot g\'(x) = e^{(3x)^2} \\cdot 3 = 3e^{9x^2}$.'
          },
          {
            question: 'If $G(x) = \\int_x^5 \\cos(t^3)\\,dt$, then $G\'(x) =$',
            options: ['$-\\cos(x^3)$', '$\\cos(x^3)$', '$-\\cos(125)$', '$\\cos(5^3) - \\cos(x^3)$'],
            correctAnswer: 0,
            explanation: 'Flip limits: $G(x) = -\\int_5^x \\cos(t^3)\\,dt$. So $G\'(x) = -\\cos(x^3)$.'
          },
          {
            question: 'Water enters a tank at $R(t) = 5 + 2t$ gal/min. Total water added from $t = 0$ to $t = 4$:',
            options: ['$36$ gallons ($\\int_0^4 (5+2t)\\,dt = [5t+t^2]_0^4 = 36$)', '$13$ gallons', '$20$ gallons', '$28$ gallons'],
            correctAnswer: 0,
            explanation: '$\\int_0^4 (5+2t)\\,dt = [5t + t^2]_0^4 = 20 + 16 = 36$.'
          }
        ]
      }
    },
    {
      id: 'ai4-dropdown',
      type: 'dropdown-select' as const,
      content: '**FTC with Variable Bounds**',
      exercise: {
        dropdowns: [
          {
            label: '$H(x) = \\int_2^{x^3} \\ln t\\,dt$. Then $H\'(x) =$',
            options: ['$3x^2 \\ln(x^3) = 9x^2 \\ln x$', '$\\ln(x^3) = 3\\ln x$', '$3x^2 / x^3 = 3/x$', '$x^3 \\ln x$'],
            correctAnswers: ['$3x^2 \\ln(x^3) = 9x^2 \\ln x$'],
            hints: ['$f(g(x)) \\cdot g\'(x)$ where $f(t) = \\ln t$ and $g(x) = x^3$.'],
            explanation: '$\\ln(x^3) \\cdot 3x^2 = 3\\ln x \\cdot 3x^2 = 9x^2 \\ln x$.'
          },
          {
            label: '$\\frac{d}{dx}\\int_{2x}^{x^2} e^t\\,dt =$',
            options: ['$2xe^{x^2} - 2e^{2x}$', '$e^{x^2} - e^{2x}$', '$2xe^{x^2} + 2e^{2x}$', '$e^{x^2} - 2e^{2x}$'],
            correctAnswers: ['$2xe^{x^2} - 2e^{2x}$'],
            hints: ['Upper: $e^{x^2} \\cdot 2x$. Lower: $e^{2x} \\cdot 2$.'],
            explanation: '$f(g(x))g\'(x) - f(h(x))h\'(x) = e^{x^2} \\cdot 2x - e^{2x} \\cdot 2$.'
          }
        ]
      }
    },
    {
      id: 'ai4-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'If $F(x) = \\int_0^x (3t^2 + 1)\\,dt$, what is $F(2)$?',
        correctAnswer: '10',
        acceptableAnswers: ['10', '10.0'],
        hints: ['$F(2) = \\int_0^2 (3t^2+1)\\,dt = [t^3 + t]_0^2$.'],
        explanation: '$[t^3 + t]_0^2 = (8 + 2) - 0 = 10$.'
      }
    },
    {
      id: 'ai4-summary',
      type: 'text' as const,
      content: `### Key Formulas

$$\\boxed{\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)}$$

| Scenario | Formula |
|----------|---------|
| Fixed lower bound | $F'(x) = f(x)$ |
| Upper bound $g(x)$ | $F'(x) = f(g(x)) \\cdot g'(x)$ |
| Both bounds variable | $f(g)g' - f(h)h'$ |

**Next: Part 5 — AP Exam Strategies**`
    }
  ]
};
