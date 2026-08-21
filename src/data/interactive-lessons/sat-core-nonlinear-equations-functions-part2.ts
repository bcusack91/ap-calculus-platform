export const lessonData = {
  topicSlug: 'sat-nonlinear-equations-functions-core-skills',
  sections: [
    {
      id: 'nlf-core-p2-recap',
      type: 'text' as const,
      content: `# Functions: Practice

**Part 2 of 2 — Run the Steps**

Here are the steps again, in order:

1. Write down the rule, exactly as given.
2. Replace **every** $x$ in the rule with the number in the parentheses.
3. Do exponents first, then multiply, then add or subtract.
4. Write your answer as a single number.

### Three extra facts worth memorizing

These show up again and again, and each one is a one-line fact.

**Shifting a graph up or down.** Adding a number on the outside moves the whole graph up. $f(x) + 3$ is the graph of $f$ moved up $3$ units. Subtracting moves it down.

**Vertex form.** When you see $f(x) = (x - h)^{2} + k$, the lowest point of the graph, called the **vertex**, sits at $(h, k)$. Watch the sign: $(x - 5)^{2} + 2$ has its vertex at $(5, 2)$, because $x - 5$ matches $x - h$ when $h = 5$.

**Dividing by zero is not allowed.** In a fraction like $\\frac{1}{x - 6}$, the bottom cannot equal zero. Set the bottom equal to zero and solve: $x - 6 = 0$ gives $x = 6$. So $x = 6$ is the one value the function cannot use.`
    },
    {
      id: 'nlf-core-p2-q1',
      type: 'quiz' as const,
      question: 'If $f(x) = x^{2} - 4x$, what is $f(5)$?',
      options: ['$1$', '$45$', '$5$', '$-5$'],
      correctAnswer: 2,
      explanation: 'The answer is $5$. Replace both $x$ values with $5$: $f(5) = 5^{2} - 4(5)$. Now $5^{2} = 5 \\times 5 = 25$, and $4 \\times 5 = 20$. Subtract: $25 - 20 = 5$. The choice $45$ comes from adding instead of subtracting.'
    },
    {
      id: 'nlf-core-p2-q2',
      type: 'quiz' as const,
      question: 'How does the graph of $f(x) + 3$ compare to the graph of $f(x)$?',
      options: ['It shifts up $3$ units', 'It shifts right $3$ units', 'It shifts down $3$ units', 'It shifts left $3$ units'],
      correctAnswer: 0,
      explanation: 'The answer is that it shifts up $3$ units. Adding $3$ on the outside adds $3$ to every output, so every point on the graph rises by $3$. Shifting right or left happens when the number is inside the parentheses with the $x$, which is not the case here.'
    },
    {
      id: 'nlf-core-p2-q3',
      type: 'quiz' as const,
      question: 'What is the vertex of $f(x) = (x - 5)^{2} + 2$?',
      options: ['$(-5, 2)$', '$(5, -2)$', '$(2, 5)$', '$(5, 2)$'],
      correctAnswer: 3,
      explanation: 'The answer is $(5, 2)$. The pattern is $(x - h)^{2} + k$, and the vertex is $(h, k)$. Matching pieces, $x - 5$ lines up with $x - h$, so $h = 5$, and the $+2$ on the end gives $k = 2$. The choice $(-5, 2)$ comes from copying the minus sign into the answer instead of solving $x - 5 = 0$.'
    },
    {
      id: 'nlf-core-p2-q4',
      type: 'quiz' as const,
      question: 'For which value of $x$ is $f(x) = \\frac{1}{x - 6}$ undefined?',
      options: ['$x = -6$', '$x = 6$', '$x = 0$', '$x = 1$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 6$. A fraction is undefined when its bottom equals zero, so set the bottom equal to zero: $x - 6 = 0$. Add $6$ to both sides to get $x = 6$. At every other number the bottom is not zero, so the function works fine.'
    }
  ]
}
