export const lessonData = {
  topicSlug: 'sat-linear-equations-inequalities-core-skills',
  sections: [
    {
      id: 'lei-core-p1-intro',
      type: 'text' as const,
      content: `# Solving for $x$: The Basics

**Part 1 of 2 — The Basics**

An **equation** is two things that are equal, with an equals sign between them. A **variable** is a letter that stands for a number you do not know yet. Usually that letter is $x$.

Solving an equation means getting $x$ alone on one side. When $x$ is alone, you can read the answer.

### The one rule

Whatever you do to one side, do the exact same thing to the other side. That keeps the two sides equal.

To get $x$ alone, you **undo** what is being done to it:

- If a number is **added** to $x$, subtract that number from both sides.
- If a number is **subtracted** from $x$, add that number to both sides.
- If $x$ is **multiplied** by a number, divide both sides by that number.
- If $x$ is **divided** by a number, multiply both sides by that number.

### Worked example

Solve $3x + 4 = 19$.

**Step 1.** The $4$ is being added. Undo it by subtracting $4$ from both sides.

$3x + 4 - 4 = 19 - 4$

$3x = 15$

**Step 2.** The $3$ is multiplying $x$. Undo it by dividing both sides by $3$.

$\\frac{3x}{3} = \\frac{15}{3}$

$x = 5$

**Step 3 (the check).** Put $5$ back into the original equation: $3(5) + 4 = 15 + 4 = 19$. That matches, so $x = 5$ is correct.

Checking your answer takes about ten seconds and it tells you for sure whether you are right. Do it every time.`
    },
    {
      id: 'lei-core-p1-q1',
      type: 'quiz' as const,
      question: 'Solve for $x$: $x + 6 = 15$',
      options: ['$6$', '$8$', '$9$', '$21$'],
      correctAnswer: 2,
      explanation: 'The answer is $x = 9$. The $6$ is being added to $x$, so undo it by subtracting $6$ from both sides. On the left, $x + 6 - 6$ leaves $x$. On the right, $15 - 6 = 9$. So $x = 9$. Check it: $9 + 6 = 15$, which matches. The choice $21$ comes from adding $6$ instead of subtracting it.'
    },
    {
      id: 'lei-core-p1-q2',
      type: 'quiz' as const,
      question: 'Solve for $x$: $4x = 28$',
      options: ['$7$', '$14$', '$24$', '$32$'],
      correctAnswer: 0,
      explanation: 'The answer is $x = 7$. Here $4$ is multiplying $x$, so undo it by dividing both sides by $4$. On the left, $\\frac{4x}{4}$ leaves $x$. On the right, $\\frac{28}{4} = 7$. So $x = 7$. Check it: $4 \\times 7 = 28$, which matches. The choice $24$ comes from subtracting $4$, but $4$ is multiplying, not adding.'
    },
    {
      id: 'lei-core-p1-q3',
      type: 'quiz' as const,
      question: 'Solve for $x$: $2x + 5 = 17$',
      options: ['$11$', '$8$', '$5$', '$6$'],
      correctAnswer: 3,
      explanation: 'The answer is $x = 6$. First undo the $+5$ by subtracting $5$ from both sides: $2x = 17 - 5$, so $2x = 12$. Then undo the $2$ by dividing both sides by $2$: $x = \\frac{12}{2} = 6$. Check it: $2(6) + 5 = 12 + 5 = 17$, which matches. The choice $11$ comes from subtracting $5$ but forgetting to divide by $2$.'
    },
    {
      id: 'lei-core-p1-q4',
      type: 'quiz' as const,
      question: 'Solve for $x$: $\\frac{x}{3} = 5$',
      options: ['$\\frac{5}{3}$', '$15$', '$8$', '$2$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 15$. Here $x$ is being divided by $3$, so undo it by multiplying both sides by $3$. On the left, $\\frac{x}{3} \\times 3$ leaves $x$. On the right, $5 \\times 3 = 15$. So $x = 15$. Check it: $\\frac{15}{3} = 5$, which matches. The choice $\\frac{5}{3}$ comes from dividing by $3$ again instead of multiplying.'
    }
  ]
}
