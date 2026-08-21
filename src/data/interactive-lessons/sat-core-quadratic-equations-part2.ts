export const lessonData = {
  topicSlug: 'sat-quadratic-equations-core-skills',
  sections: [
    {
      id: 'quad-core-p2-recap',
      type: 'text' as const,
      content: `# Quadratic Equations: Practice

**Part 2 of 2 — Run the Steps**

To solve $x^{2} + bx + c = 0$ by factoring:

1. Make sure one side is $0$. Move everything to the left if you have to.
2. Find two numbers that **multiply to $c$** and **add to $b$**.
3. Write $(x + \\text{first number})(x + \\text{second number}) = 0$.
4. Set each parenthesis equal to $0$ and solve the two small equations.
5. Write both answers.

### Two shortcuts you will use often

**No constant term.** If the equation looks like $x^{2} - 5x = 0$, pull out the shared $x$: $x(x - 5) = 0$. Then $x = 0$ or $x = 5$. Do not divide both sides by $x$ — that would throw away the answer $x = 0$.

**A plain square.** If the equation looks like $x^{2} = 36$, take the square root of both sides and keep **both** signs: $x = 6$ or $x = -6$. Both work, because $6 \\times 6 = 36$ and $(-6) \\times (-6) = 36$.

### A quick sign guide

- Both numbers positive when $b$ and $c$ are both positive.
- Both numbers negative when $c$ is positive and $b$ is negative.
- One positive and one negative when $c$ is negative.`
    },
    {
      id: 'quad-core-p2-q1',
      type: 'quiz' as const,
      question: 'What are the solutions of $x^{2} + 2x - 15 = 0$?',
      options: ['$x = -5$ or $x = 3$', '$x = 5$ or $x = -3$', '$x = -5$ or $x = -3$', '$x = 15$ or $x = 1$'],
      correctAnswer: 0,
      explanation: 'The answer is $x = -5$ or $x = 3$. You need two numbers that multiply to $-15$ and add to $2$. Since they multiply to a negative, one is positive and one is negative. Try $5$ and $-3$: they multiply to $-15$ and add to $2$. So the factored form is $(x + 5)(x - 3) = 0$. From $x + 5 = 0$ you get $x = -5$, and from $x - 3 = 0$ you get $x = 3$. The choice $x = 5$ or $x = -3$ has both signs backwards.'
    },
    {
      id: 'quad-core-p2-q2',
      type: 'quiz' as const,
      question: 'What are the solutions of $x^{2} - 5x = 0$?',
      options: ['$x = 5$ only', '$x = 0$ or $x = 5$', '$x = 0$ only', '$x = -5$ or $x = 5$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 0$ or $x = 5$. Both terms contain an $x$, so pull it out front: $x(x - 5) = 0$. Now set each piece equal to zero. The first piece gives $x = 0$. The second gives $x - 5 = 0$, so $x = 5$. The choice $x = 5$ only is what happens if you divide both sides by $x$, which erases the solution $x = 0$.'
    },
    {
      id: 'quad-core-p2-q3',
      type: 'quiz' as const,
      question: 'One solution of $x^{2} + x - 12 = 0$ is $x = 3$. What is the other solution?',
      options: ['$4$', '$12$', '$-4$', '$-12$'],
      correctAnswer: 2,
      explanation: 'The answer is $-4$. You need two numbers that multiply to $-12$ and add to $1$. The pair $4$ and $-3$ multiplies to $-12$ and adds to $1$, so the factored form is $(x + 4)(x - 3) = 0$. The factor $x - 3$ gives the solution you were handed, $x = 3$. The factor $x + 4$ gives $x = -4$. The choice $4$ is the number inside the parenthesis before you solve for $x$.'
    },
    {
      id: 'quad-core-p2-q4',
      type: 'quiz' as const,
      question: 'What are the solutions of $x^{2} = 36$?',
      options: ['$x = 6$ only', '$x = 18$ or $x = -18$', '$x = 36$', '$x = 6$ or $x = -6$'],
      correctAnswer: 3,
      explanation: 'The answer is $x = 6$ or $x = -6$. Take the square root of both sides and keep both signs. Since $6 \\times 6 = 36$, one solution is $x = 6$. Since $(-6) \\times (-6) = 36$ as well, $x = -6$ works too. The choice $x = 6$ only leaves out the negative answer, which a quadratic almost always has.'
    }
  ]
}
