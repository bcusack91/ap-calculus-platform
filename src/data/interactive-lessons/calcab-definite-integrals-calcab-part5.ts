export const calcabDefiniteIntegralsPart5Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int5-intro',
      type: 'text' as const,
      content: `# \u222B Fundamental Theorem of Calculus \u2014 Part 2

**Part 5 of 7 \u2014 FTC Part 2 (Evaluation Theorem)**

### The Evaluation Theorem

$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

where $F$ is **any antiderivative** of $f$ (i.e., $F' = f$).

This is the practical computation tool: find an antiderivative, evaluate at the endpoints, subtract.

### Notation

We write $F(x)\\Big|_a^b$ or $\\left[F(x)\\right]_a^b$ to mean $F(b) - F(a)$.

### Worked Examples

| Integral | Antiderivative | Evaluation |
|----------|---------------|------------|
| $\\int_0^2 3x^2\\,dx$ | $x^3$ | $8 - 0 = 8$ |
| $\\int_1^e \\frac{1}{x}\\,dx$ | $\\ln x$ | $\\ln e - \\ln 1 = 1 - 0 = 1$ |
| $\\int_0^1 e^x\\,dx$ | $e^x$ | $e - 1$ |
| $\\int_0^{\\pi/2} \\cos x\\,dx$ | $\\sin x$ | $1 - 0 = 1$ |`
    },
    {
      id: 'int5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Evaluate Using FTC Part 2** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^3 (2x - 1)\\,dx$.',
            options: ['$4$', '$6$', '$8$', '$2$'],
            correctAnswer: 1,
            explanation: 'Antiderivative: $x^2 - x$. At $3$: $9 - 3 = 6$. At $1$: $1 - 1 = 0$. Result: $6 - 0 = 6$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} \\sin x\\,dx$.',
            options: ['$0$', '$1$', '$2$', '$-2$'],
            correctAnswer: 2,
            explanation: '$[-\\cos x]_0^{\\pi} = -\\cos(\\pi) - (-\\cos 0) = -(-1) + 1 = 1 + 1 = 2$.'
          },
          {
            question: 'Evaluate $\\int_1^4 \\frac{3}{\\sqrt{x}}\\,dx$.',
            options: ['$6$', '$3$', '$9$', '$12$'],
            correctAnswer: 0,
            explanation: '$\\frac{3}{\\sqrt{x}} = 3x^{-1/2}$. Antiderivative: $6x^{1/2} = 6\\sqrt{x}$. $[6\\sqrt{x}]_1^4 = 6(2) - 6(1) = 12 - 6 = 6$.'
          }
        ]
      }
    },
    {
      id: 'int5-text2',
      type: 'text' as const,
      content: `### Net Change Theorem

FTC Part 2 gives us the **Net Change Theorem**:

$$\\int_a^b f'(x)\\,dx = f(b) - f(a)$$

The integral of a rate of change gives the **net change** in the quantity.

### Applications

| Context | Rate | Integral gives... |
|---------|------|-------------------|
| Position $s(t)$ | Velocity $v(t) = s'(t)$ | $\\int_a^b v(t)\\,dt = s(b) - s(a)$ = displacement |
| Population $P(t)$ | Growth rate $P'(t)$ | $\\int_a^b P'(t)\\,dt = P(b) - P(a)$ = net population change |
| Water in tank | Flow rate | Net change in water volume |

> **Important:** The integral of velocity gives **displacement** (net change), NOT total distance. For total distance, use $\\int_a^b |v(t)|\\,dt$.`
    },
    {
      id: 'int5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Net Change Theorem** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A particle has velocity $v(t) = t^2 - 4$ m/s. Find its displacement from $t = 0$ to $t = 3$.',
            options: ['$3$ m', '$-3$ m', '$5$ m', '$-1$ m'],
            correctAnswer: 1,
            explanation: '$\\int_0^3 (t^2 - 4)\\,dt = [\\frac{t^3}{3} - 4t]_0^3 = (9 - 12) - 0 = -3$. The displacement is $-3$ m.'
          },
          {
            question: 'Water flows into a tank at rate $R(t) = 5 + 2t$ gallons/min. How much water enters from $t = 0$ to $t = 4$?',
            options: ['$36$ gallons', '$28$ gallons', '$13$ gallons', '$40$ gallons'],
            correctAnswer: 0,
            explanation: '$\\int_0^4 (5 + 2t)\\,dt = [5t + t^2]_0^4 = 20 + 16 = 36$ gallons.'
          }
        ]
      }
    },
    {
      id: 'int5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

1. **FTC Part 2:** $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F' = f$
2. **Net Change:** the integral of a rate gives the net change in the quantity
3. **Displacement vs Distance:** $\\int v\\,dt$ = displacement; $\\int |v|\\,dt$ = total distance
4. Always check that your antiderivative is correct by mentally differentiating it`
    }
  ]
};
