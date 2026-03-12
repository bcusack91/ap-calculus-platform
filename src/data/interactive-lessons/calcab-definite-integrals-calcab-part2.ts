export const calcabDefiniteIntegralsPart2Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int2-intro',
      type: 'text' as const,
      content: `# \u222B The Definite Integral

**Part 2 of 7 \u2014 Definite Integral Definition**

### From Riemann Sums to the Definite Integral

The definite integral is the **limit of a Riemann sum** as $n \\to \\infty$:

$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x$$

### Geometric Interpretation

- $\\int_a^b f(x)\\,dx$ = **signed area** between $f(x)$ and the $x$-axis
- Area **above** the $x$-axis is **positive**
- Area **below** the $x$-axis is **negative**

### Worked Example

**Evaluate** $\\int_0^3 (2x + 1)\\,dx$ **geometrically.**

This is a trapezoid with:
- Left height: $f(0) = 1$
- Right height: $f(3) = 7$
- Width: $3$

Area $= \\frac{1}{2}(1 + 7)(3) = 12$

So $\\int_0^3 (2x+1)\\,dx = 12$, which we can verify: $\\left[x^2 + x\\right]_0^3 = (9+3) - 0 = 12$ \u2713`
    },
    {
      id: 'int2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Definite Integral Concepts** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $\\int_0^5 f(x)\\,dx = 8$ and the area of the region below the $x$-axis on $[0,5]$ is $3$, what is the total area between $f$ and the $x$-axis?',
            options: ['$5$', '$8$', '$11$', '$14$'],
            correctAnswer: 3,
            explanation: 'The integral gives signed area: (area above) - (area below) = 8. Area below = 3, so area above = 11. Total area = 11 + 3 = 14.'
          },
          {
            question: 'Evaluate $\\int_{-2}^{2} x^3\\,dx$ without computing.',
            options: ['$0$', '$4$', '$8$', '$-8$'],
            correctAnswer: 0,
            explanation: '$x^3$ is an odd function, and the interval $[-2, 2]$ is symmetric about the origin. The integral of an odd function over a symmetric interval is always $0$.'
          }
        ]
      }
    },
    {
      id: 'int2-text2',
      type: 'text' as const,
      content: `### Important Properties

For **odd functions** ($f(-x) = -f(x)$) on symmetric intervals:
$$\\int_{-a}^{a} f(x)\\,dx = 0$$

For **even functions** ($f(-x) = f(x)$) on symmetric intervals:
$$\\int_{-a}^{a} f(x)\\,dx = 2\\int_0^a f(x)\\,dx$$

### Evaluation via Antiderivatives

$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$.`
    },
    {
      id: 'int2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Evaluate Definite Integrals** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^4 (3x^2 - 2x + 1)\\,dx$.',
            options: ['$54$', '$48$', '$51$', '$42$'],
            correctAnswer: 2,
            explanation: 'Antiderivative: $x^3 - x^2 + x$. At $x=4$: $64 - 16 + 4 = 52$. At $x=1$: $1 - 1 + 1 = 1$. Result: $52 - 1 = 51$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} \\sin x\\,dx$.',
            options: ['$0$', '$1$', '$2$', '$\\pi$'],
            correctAnswer: 2,
            explanation: '$[-\\cos x]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) + 1 = 1 + 1 = 2$.'
          }
        ]
      }
    },
    {
      id: 'int2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

1. The definite integral is the limit of Riemann sums
2. It represents **signed area** (above axis positive, below negative)
3. **Odd functions** integrate to 0 over symmetric intervals
4. Evaluate using the **antiderivative**: $\\int_a^b f(x)\\,dx = F(b) - F(a)$`
    }
  ]
};
