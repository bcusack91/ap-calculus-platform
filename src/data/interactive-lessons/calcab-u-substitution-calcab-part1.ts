export const calcabUSubPart1Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub1-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 1 of 7 — Basic u-Substitution**

### The Idea

u-Substitution is the **reverse of the Chain Rule**. When you see a composite function inside an integral, you substitute $u$ for the inner function.

### The Method

1. **Identify** the inner function — call it $u$
2. **Compute** $du = u'(x)\\,dx$
3. **Rewrite** the entire integral in terms of $u$ and $du$
4. **Integrate** in terms of $u$
5. **Substitute back** to $x$

### Worked Example 1

$$\\int 2x \\cos(x^2)\\,dx$$

Let $u = x^2$, so $du = 2x\\,dx$.

$$\\int \\cos(u)\\,du = \\sin(u) + C = \\sin(x^2) + C$$

### Worked Example 2

$$\\int 3x^2 e^{x^3}\\,dx$$

Let $u = x^3$, so $du = 3x^2\\,dx$.

$$\\int e^u\\,du = e^u + C = e^{x^3} + C$$

### Worked Example 3

$$\\int \\frac{5}{(5x+1)^3}\\,dx$$

Let $u = 5x + 1$, so $du = 5\\,dx$, meaning $dx = \\frac{du}{5}$.

$$\\int \\frac{5}{u^3} \\cdot \\frac{du}{5} = \\int u^{-3}\\,du = \\frac{u^{-2}}{-2} + C = -\\frac{1}{2(5x+1)^2} + C$$`
    },
    {
      id: 'usub1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Basic u-Substitution** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int 4x(x^2 + 3)^5\\,dx$.',
            options: ['$\\frac{(x^2+3)^6}{3} + C$', '$\\frac{2(x^2+3)^6}{6} + C$', '$\\frac{(x^2+3)^6}{6} + C$', '$\\frac{4(x^2+3)^6}{6} + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2 + 3$, $du = 2x\\,dx$, so $4x\\,dx = 2\\,du$. $\\int 2u^5\\,du = \\frac{2u^6}{6} = \\frac{u^6}{3} = \\frac{(x^2+3)^6}{3} + C$.'
          },
          {
            question: 'Evaluate $\\int \\cos(3x)\\,dx$.',
            options: ['$\\sin(3x) + C$', '$3\\sin(3x) + C$', '$\\frac{\\sin(3x)}{3} + C$', '$-\\sin(3x) + C$'],
            correctAnswer: 2,
            explanation: 'Let $u = 3x$, $du = 3\\,dx$, so $dx = \\frac{du}{3}$. $\\frac{1}{3}\\int \\cos(u)\\,du = \\frac{\\sin(u)}{3} = \\frac{\\sin(3x)}{3} + C$.'
          },
          {
            question: 'Evaluate $\\int x\\sqrt{x^2 + 1}\\,dx$.',
            options: ['$\\frac{1}{3}(x^2+1)^{3/2} + C$', '$\\frac{2}{3}(x^2+1)^{3/2} + C$', '$\\frac{1}{2}(x^2+1)^{3/2} + C$', '$(x^2+1)^{3/2} + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$. $\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{2} \\cdot \\frac{u^{3/2}}{3/2} = \\frac{1}{3}u^{3/2} = \\frac{1}{3}(x^2+1)^{3/2} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. u-Substitution reverses the Chain Rule
2. Choose $u$ = inner function of a composition
3. Compute $du$, then rewrite **everything** in terms of $u$
4. If $du$ doesn't appear exactly, adjust with constants`
    }
  ]
};
