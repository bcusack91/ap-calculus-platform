export const lessonData = {
  topicSlug: 'sat-polynomial-rational-expressions-core-skills',
  sections: [
    {
      id: 'rat-core-p2-recap',
      type: 'text' as const,
      content: `# Rational Expressions: Practice

**Part 2 of 2 — Run the Steps**

To simplify a rational expression:

1. **Factor the top.** Pull out a common number, or use the two-number trick, or spot a difference of squares.
2. **Factor the bottom** the same way.
3. **Cancel any factor that appears on both.** A factor is something multiplied, never something added.
4. **Write what is left.**

To find where an expression is undefined:

1. Set the **bottom** equal to $0$.
2. If the bottom is already factored, set **each** parenthesis equal to $0$ separately.
3. Solve. Every answer you get is a value $x$ cannot be.

### Two patterns that show up a lot

**Difference of squares on top.** $x^{2} - 9$ factors into $(x - 3)(x + 3)$, because $3 \\times 3 = 9$. If the bottom is $x - 3$, that factor cancels and $x + 3$ is left.

**Vertical asymptotes.** A **vertical asymptote** is an up-and-down line the graph gets close to but never touches. It sits at each $x$ value that makes the bottom zero after all canceling is done. For $f(x) = \\frac{1}{x - 5}$, the vertical asymptote is the line $x = 5$.`
    },
    {
      id: 'rat-core-p2-q1',
      type: 'quiz' as const,
      question: 'Simplify $\\frac{x^{2} - 9}{x - 3}$.',
      options: ['$x - 3$', '$\\frac{1}{x - 3}$', '$x + 3$', '$\\frac{x + 3}{x - 3}$'],
      correctAnswer: 2,
      explanation: 'The answer is $x + 3$. The top is a difference of squares, since $3 \\times 3 = 9$, so $x^{2} - 9 = (x - 3)(x + 3)$. The fraction becomes $\\frac{(x - 3)(x + 3)}{x - 3}$. The factor $(x - 3)$ appears on the top and on the bottom, so it cancels, leaving $x + 3$. The choice $x - 3$ cancels the wrong factor.'
    },
    {
      id: 'rat-core-p2-q2',
      type: 'quiz' as const,
      question: 'Which values of $x$ must be excluded from the domain of $\\frac{2x}{(x - 4)(x + 7)}$?',
      options: ['$x = 4$ and $x = -7$', '$x = -4$ and $x = 7$', '$x = 0$ only', 'There are no excluded values'],
      correctAnswer: 0,
      explanation: 'The answer is $x = 4$ and $x = -7$. The bottom is already factored, so set each parenthesis equal to zero on its own. From $x - 4 = 0$, add $4$ to both sides to get $x = 4$. From $x + 7 = 0$, subtract $7$ from both sides to get $x = -7$. At either of those values the bottom would be zero, which is not allowed. The choice $x = -4$ and $x = 7$ reads the signs off the parentheses without solving.'
    },
    {
      id: 'rat-core-p2-q3',
      type: 'quiz' as const,
      question: 'What is the vertical asymptote of $f(x) = \\frac{1}{x - 5}$?',
      options: ['$y = 5$', '$x = 5$', '$x = -5$', '$x = 0$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 5$. Set the bottom equal to zero: $x - 5 = 0$, so $x = 5$. Nothing cancels here, so that value gives a vertical asymptote, which is a vertical line the graph approaches but never crosses. The answer is written as $x = 5$ and not $y = 5$ because a vertical line is described by an $x$ value.'
    },
    {
      id: 'rat-core-p2-q4',
      type: 'quiz' as const,
      question: 'Simplify $\\frac{3x}{4} \\cdot \\frac{1}{x}$.',
      options: ['$\\frac{3}{4x}$', '$\\frac{3x}{4}$', '$\\frac{4}{3}$', '$\\frac{3}{4}$'],
      correctAnswer: 3,
      explanation: 'The answer is $\\frac{3}{4}$. To multiply fractions, multiply the tops together and the bottoms together: the top is $3x \\times 1 = 3x$ and the bottom is $4 \\times x = 4x$. That gives $\\frac{3x}{4x}$, and the $x$ on the top cancels with the $x$ on the bottom because it is a factor in both, leaving $\\frac{3}{4}$. The choice $\\frac{3}{4x}$ cancels the $x$ from the top but leaves it on the bottom.'
    }
  ]
}
