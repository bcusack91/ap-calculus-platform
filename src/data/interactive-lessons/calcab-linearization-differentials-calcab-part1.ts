export const calcabLinearizationPart1Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin1-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 1 of 7 — The Tangent Line Approximation**

### Local Linearization

Near a point $x = a$, we can approximate $f(x)$ with its tangent line:

$$L(x) = f(a) + f'(a)(x - a)$$

This is also called the **linear approximation** or **tangent line approximation**.

### Why It Works

If $f$ is differentiable at $a$, then for $x$ **near** $a$:
$$f(x) \approx L(x) = f(a) + f'(a)(x - a)$$

### Worked Example

Approximate $\sqrt{4.1}$ using linearization.

Let $f(x) = \sqrt{x}$, $a = 4$.

$f(4) = 2$, $f'(x) = \frac{1}{2\sqrt{x}}$, $f'(4) = \frac{1}{4}$

$L(x) = 2 + \frac{1}{4}(x - 4)$

$L(4.1) = 2 + \frac{1}{4}(0.1) = 2.025$

Actual: $\sqrt{4.1} \approx 2.02485...$  Very close!`
    },
    {
      id: 'lin1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Linearization** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use linearization of $f(x) = x^3$ at $a = 2$ to approximate $f(2.01)$.',
            options: ['$8.12$', '$8.06$', '$8.24$', '$8.01$'],
            correctAnswer: 0,
            explanation: '$f(2) = 8$, $f\'(x) = 3x^2$, $f\'(2) = 12$. $L(2.01) = 8 + 12(0.01) = 8.12$.'
          },
          {
            question: 'Use linearization to approximate $\sin(0.1)$ (near $a = 0$).',
            options: ['$0.1$', '$0$', '$1$', '$0.01$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0$, $f\'(x) = \cos x$, $f\'(0) = 1$. $L(0.1) = 0 + 1(0.1) = 0.1$. (Actual: $0.0998...$)'
          }
        ]
      }
    },
    {
      id: 'lin1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $L(x) = f(a) + f'(a)(x-a)$ is the linearization
2. Works best when $x$ is close to $a$
3. This is simply the tangent line used as an approximation`
    }
  ]
};
