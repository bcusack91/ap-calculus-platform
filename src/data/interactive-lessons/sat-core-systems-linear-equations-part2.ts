export const lessonData = {
  topicSlug: 'sat-systems-linear-equations-core-skills',
  sections: [
    {
      id: 'sys-core-p2-recap',
      type: 'text' as const,
      content: `# Systems of Equations: Practice

**Part 2 of 2 — Practice**

### The steps, every time

1. Look at the two equations. Does one of them already say what a variable equals, like $y = 4$ or $y = 3x$?
2. **If yes**, put that value into the other equation in place of the variable. Then solve for the letter that is left.
3. **If no**, check whether one equation has $+y$ and the other has $-y$. If so, add the two equations straight down so the $y$ terms cancel.
4. Once you know one variable, put it back into either original equation to find the other one.
5. Check your pair in **both** equations. The solution has to work in both.

### A quick reminder about points

A solution is written $(x, y)$. The first number is always $x$ and the second number is always $y$. Mixing up the order is the most common slip on these questions, so read the point out loud: "$x$ is five, $y$ is two."`
    },
    {
      id: 'sys-core-p2-q1',
      type: 'quiz' as const,
      question: 'If $x + y = 9$ and $y = 4$, what is the value of $x$?',
      options: ['$13$', '$4$', '$5$', '$9$'],
      correctAnswer: 2,
      explanation: 'The answer is $x = 5$. The second equation tells you $y = 4$, so put $4$ in place of $y$ in the first equation: $x + 4 = 9$. Undo the $+4$ by subtracting $4$ from both sides: $x = 9 - 4 = 5$. Check it: $5 + 4 = 9$, which matches. The choice $13$ comes from adding $9 + 4$ instead of subtracting.'
    },
    {
      id: 'sys-core-p2-q2',
      type: 'quiz' as const,
      question: 'If $2x + y = 11$ and $y = 3$, what is the value of $x$?',
      options: ['$4$', '$8$', '$7$', '$14$'],
      correctAnswer: 0,
      explanation: 'The answer is $x = 4$. Put $3$ in place of $y$ in the first equation: $2x + 3 = 11$. Undo the $+3$ by subtracting $3$ from both sides: $2x = 8$. Then divide both sides by $2$: $x = 4$. Check it: $2(4) + 3 = 8 + 3 = 11$, which matches. The choice $8$ is the value of $2x$, not $x$.'
    },
    {
      id: 'sys-core-p2-q3',
      type: 'quiz' as const,
      question: 'If $x + y = 10$ and $x - y = 6$, what is the value of $y$?',
      options: ['$8$', '$16$', '$4$', '$2$'],
      correctAnswer: 3,
      explanation: 'The answer is $y = 2$. Add the two equations straight down: the $y$ terms cancel and you get $2x = 16$, so $x = 8$. Now put $x = 8$ into the first equation: $8 + y = 10$. Subtract $8$ from both sides to get $y = 2$. Check it in the second equation: $8 - 2 = 6$, which matches. The choice $8$ is the value of $x$.'
    },
    {
      id: 'sys-core-p2-q4',
      type: 'quiz' as const,
      question: 'A system has the equations $y = 5$ and $x + y = 9$. What is the solution point $(x, y)$?',
      options: ['$(5, 9)$', '$(4, 5)$', '$(5, 4)$', '$(9, 5)$'],
      correctAnswer: 1,
      explanation: 'The answer is $(4, 5)$. You already know $y = 5$, so put $5$ into the second equation: $x + 5 = 9$. Subtract $5$ from both sides to get $x = 4$. A point is written with $x$ first and $y$ second, so the solution is $(4, 5)$. The choice $(5, 4)$ has the two numbers in the wrong order.'
    }
  ]
}
