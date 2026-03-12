export const calcabAccumulationPart1Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc1-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 1 of 7 — The Accumulation Concept**

### What is an Accumulation Function?

$$F(x) = \\int_a^x f(t)\\,dt$$

$F(x)$ measures **how much has accumulated** from $a$ to $x$.

### Key Properties

| Property | Explanation |
|----------|------------|
| $F(a) = 0$ | Nothing has accumulated at the starting point |
| $F'(x) = f(x)$ | FTC Part 1 — the rate equals the integrand |
| $F$ increasing | where $f(x) > 0$ |
| $F$ decreasing | where $f(x) < 0$ |
| $F$ has max | where $f$ changes from $+$ to $-$ |
| $F$ has min | where $f$ changes from $-$ to $+$ |

### Worked Example

Let $F(x) = \\int_0^x (2t - 4)\\,dt$. Find $F(3)$ and $F'(3)$.

$F(3) = \\int_0^3 (2t-4)\\,dt = [t^2 - 4t]_0^3 = 9 - 12 = -3$

$F'(3) = f(3) = 2(3) - 4 = 2$

So at $x = 3$, only $-3$ has accumulated so far, but the rate is $+2$ (accumulating positively).`
    },
    {
      id: 'acc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Accumulation Functions** \ud83c\udfaf\n\nLet $g(x) = \\int_1^x f(t)\\,dt$ where $f$ is continuous.',
      exercise: {
        questions: [
          {
            question: 'What is $g(1)$?',
            options: ['$0$', '$f(1)$', '$1$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$g(1) = \\int_1^1 f(t)\\,dt = 0$. The integral from a number to itself is always 0.'
          },
          {
            question: 'If $f(x) > 0$ for all $x$ in $(1, 5)$, what can we say about $g$ on $(1, 5)$?',
            options: ['$g$ is positive', '$g$ is increasing', '$g$ is concave up', '$g$ is decreasing'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x) > 0$, so $g$ is increasing on $(1, 5)$.'
          },
          {
            question: 'If $f(3) = 0$ and $f$ changes from positive to negative at $x = 3$, what happens to $g$ at $x = 3$?',
            options: ['$g$ has a local minimum', '$g$ has a local maximum', '$g$ equals zero', '$g$ has an inflection point'],
            correctAnswer: 1,
            explanation: '$g\'(3) = f(3) = 0$ and $g\'$ changes from $+$ to $-$. This means $g$ has a local maximum at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'acc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1
1. $F(x) = \\int_a^x f(t)\\,dt$ accumulates starting from $a$
2. $F(a) = 0$ always
3. $F' = f$ connects the accumulation function to the original function`
    }
  ]
};
