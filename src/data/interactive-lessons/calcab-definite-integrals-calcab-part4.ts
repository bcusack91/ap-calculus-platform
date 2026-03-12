export const calcabDefiniteIntegralsPart4Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int4-intro',
      type: 'text' as const,
      content: `# \u222B Fundamental Theorem of Calculus \u2014 Part 1

**Part 4 of 7 \u2014 FTC Part 1**

### The Big Idea

FTC Part 1 connects **integration and differentiation** as inverse operations:

$$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$$

In words: if you integrate a function and then differentiate, you get the original function back.

### With Chain Rule

If the upper limit is a function $g(x)$ instead of just $x$:

$$\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$$

### Worked Example 1

**Find** $\\frac{d}{dx}\\int_2^x t^3\\,dt$

By FTC Part 1: the answer is simply $x^3$.

### Worked Example 2

**Find** $\\frac{d}{dx}\\int_0^{x^2} \\sin(t)\\,dt$

Upper limit is $g(x) = x^2$, so apply Chain Rule:

$$\\frac{d}{dx}\\int_0^{x^2} \\sin(t)\\,dt = \\sin(x^2) \\cdot 2x = 2x\\sin(x^2)$$

### Worked Example 3

**Find** $\\frac{d}{dx}\\int_x^5 e^{t^2}\\,dt$

Reverse limits first: $\\int_x^5 = -\\int_5^x$. Then:

$$= -e^{x^2} \\cdot 1 = -e^{x^2}$$`
    },
    {
      id: 'int4-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC Part 1** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\int_1^x \\sqrt{t^2 + 4}\\,dt$.',
            options: ['$\\sqrt{x^2 + 4}$', '$\\frac{x}{\\sqrt{x^2+4}}$', '$\\frac{2x}{\\sqrt{x^2+4}}$', '$\\sqrt{x + 4}$'],
            correctAnswer: 0,
            explanation: 'Direct FTC Part 1: just substitute $x$ for $t$ in the integrand. Answer: $\\sqrt{x^2 + 4}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_0^{3x} \\cos(t)\\,dt$.',
            options: ['$\\cos(3x)$', '$3\\cos(3x)$', '$-\\sin(3x)$', '$3\\sin(3x)$'],
            correctAnswer: 1,
            explanation: 'FTC Part 1 with Chain Rule: $\\cos(3x) \\cdot \\frac{d}{dx}(3x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_{x}^{0} t^4\\,dt$.',
            options: ['$x^4$', '$-x^4$', '$0$', '$4x^3$'],
            correctAnswer: 1,
            explanation: '$\\int_x^0 = -\\int_0^x$. So $\\frac{d}{dx}\\int_x^0 t^4\\,dt = -\\frac{d}{dx}\\int_0^x t^4\\,dt = -x^4$.'
          }
        ]
      }
    },
    {
      id: 'int4-text2',
      type: 'text' as const,
      content: `### Accumulation Functions

$F(x) = \\int_a^x f(t)\\,dt$ is called an **accumulation function**. It represents "how much has accumulated from $a$ to $x$."

Key facts:
- $F(a) = 0$ (nothing accumulated yet)
- $F'(x) = f(x)$ (by FTC Part 1)
- $F$ is increasing where $f > 0$ and decreasing where $f < 0$
- $F$ has a local max where $f$ changes from positive to negative

> **AP Tip:** FTC Part 1 with the Chain Rule is tested almost every year on the AP exam.`
    },
    {
      id: 'int4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Accumulation Functions** \ud83c\udfaf\n\nLet $F(x) = \\int_0^x f(t)\\,dt$ where $f$ is continuous.',
      exercise: {
        questions: [
          {
            question: 'If $f(3) = 5$, what is $F\'(3)$?',
            options: ['$5$', '$0$', '$3$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'By FTC Part 1: $F\'(x) = f(x)$, so $F\'(3) = f(3) = 5$.'
          },
          {
            question: 'If $f$ changes from positive to negative at $x = 4$, what happens to $F$ at $x = 4$?',
            options: ['$F$ has a local minimum', '$F$ has a local maximum', '$F$ has an inflection point', '$F = 0$'],
            correctAnswer: 1,
            explanation: '$F\'(x) = f(x)$ changes from positive to negative at $x=4$, so $F$ changes from increasing to decreasing. This is a local maximum of $F$.'
          }
        ]
      }
    },
    {
      id: 'int4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

1. **FTC Part 1:** $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$
2. **With Chain Rule:** $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$
3. **Variable in lower limit:** reverse limits first (adds a negative sign)
4. **Accumulation functions** connect the graph of $f$ to the behavior of $F$`
    }
  ]
};
