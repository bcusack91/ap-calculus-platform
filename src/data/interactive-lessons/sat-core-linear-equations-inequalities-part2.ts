export const lessonData = {
  topicSlug: 'sat-linear-equations-inequalities-core-skills',
  sections: [
    {
      id: 'lei-core-p2-recap',
      type: 'text' as const,
      content: `# Solving for $x$: Practice

**Part 2 of 2 — Practice**

### The steps, every time

1. Look at what is happening to $x$.
2. Undo any adding or subtracting first. Do it to **both** sides.
3. Undo any multiplying or dividing second. Do it to **both** sides.
4. Put your answer back into the original equation to check it.

### Inequalities work almost the same way

An **inequality** uses one of these signs instead of an equals sign:

- $>$ means "greater than"
- $<$ means "less than"
- $\\geq$ means "greater than or equal to"
- $\\leq$ means "less than or equal to"

You solve an inequality with the exact same steps. There is **one extra rule**:

> If you multiply or divide both sides by a **negative** number, flip the direction of the sign.

**Worked example.** Solve $-2x < 8$.

Divide both sides by $-2$. Because $-2$ is negative, the $<$ flips to $>$.

$x > \\frac{8}{-2}$

$x > -4$

That is the whole trick. Nothing else about inequalities is different.`
    },
    {
      id: 'lei-core-p2-q1',
      type: 'quiz' as const,
      question: 'Solve for $x$: $5x - 3 = 22$',
      options: ['$19$', '$5$', '$4$', '$25$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 5$. First undo the $-3$ by adding $3$ to both sides: $5x = 22 + 3$, so $5x = 25$. Then undo the $5$ by dividing both sides by $5$: $x = \\frac{25}{5} = 5$. Check it: $5(5) - 3 = 25 - 3 = 22$, which matches. The choice $25$ is the value of $5x$, not the value of $x$.'
    },
    {
      id: 'lei-core-p2-q2',
      type: 'quiz' as const,
      question: 'A worker earns $\\$18$ per hour. If the worker works $5$ hours, what is the total pay?',
      options: ['$\\$23$', '$\\$13$', '$\\$85$', '$\\$90$'],
      correctAnswer: 3,
      explanation: 'The answer is $\\$90$. Pay per hour times hours worked gives total pay, so multiply: $18 \\times 5 = 90$. The total pay is $\\$90$. The choice $\\$23$ comes from adding $18 + 5$, but each of the $5$ hours pays $\\$18$, so you multiply.'
    },
    {
      id: 'lei-core-p2-q3',
      type: 'quiz' as const,
      question: 'Solve the inequality: $3x > 12$',
      options: ['$x > 4$', '$x < 4$', '$x > 9$', '$x > 36$'],
      correctAnswer: 0,
      explanation: 'The answer is $x > 4$. The $3$ is multiplying $x$, so divide both sides by $3$: $x > \\frac{12}{3}$, which gives $x > 4$. You divided by $3$, and $3$ is positive, so the sign stays pointing the same way. The choice $x < 4$ flips the sign, but the sign only flips when you divide by a negative number.'
    },
    {
      id: 'lei-core-p2-q4',
      type: 'quiz' as const,
      question: 'You divide both sides of an inequality by $-4$. What happens to the inequality sign?',
      options: ['It stays pointing the same way', 'It becomes an equals sign', 'It flips to point the other way', 'It disappears'],
      correctAnswer: 2,
      explanation: 'The sign flips to point the other way. Dividing or multiplying both sides by a negative number reverses the direction of the sign. For example, $-4x < 8$ becomes $x > -2$ after you divide both sides by $-4$. The sign only stays the same when the number you divide by is positive.'
    }
  ]
}
