export const lessonData = {
  topicSlug: 'sat-systems-linear-equations-core-skills',
  sections: [
    {
      id: 'sys-core-p1-intro',
      type: 'text' as const,
      content: `# Systems of Equations: The Basics

**Part 1 of 2 — The Basics**

A **system** is two equations that are true at the same time. They share the same $x$ and the same $y$.

The **solution** is the one pair of numbers that makes **both** equations true. It is written as a point, $(x, y)$.

### Method 1: Substitution

Use this when one equation already tells you what a variable equals.

**Worked example.** Solve:

$y = 2x$

$x + y = 9$

**Step 1.** The first equation says $y$ is the same as $2x$. So in the second equation, replace $y$ with $2x$:

$x + 2x = 9$

**Step 2.** Combine $x$ and $2x$ to get $3x$:

$3x = 9$

**Step 3.** Divide both sides by $3$: $x = 3$.

**Step 4.** Put $x = 3$ back into $y = 2x$: $y = 2(3) = 6$.

The solution is $(3, 6)$.

### Method 2: Add the two equations

Use this when one equation has $+y$ and the other has $-y$. Stack them and add straight down. The $y$ terms cancel out.

**Worked example.** Solve:

$x + y = 10$

$x - y = 4$

Add the left sides and add the right sides:

$(x + y) + (x - y) = 10 + 4$

The $+y$ and $-y$ cancel, leaving $2x = 14$, so $x = 7$.

Then put $x = 7$ into $x + y = 10$: $7 + y = 10$, so $y = 3$.

The solution is $(7, 3)$.`
    },
    {
      id: 'sys-core-p1-q1',
      type: 'quiz' as const,
      question: 'If $x + y = 12$ and $x - y = 2$, what is the value of $x$?',
      options: ['$5$', '$7$', '$10$', '$14$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 7$. Add the two equations straight down. The left sides give $x + y + x - y$, and the $+y$ and $-y$ cancel, leaving $2x$. The right sides give $12 + 2 = 14$. So $2x = 14$, and dividing both sides by $2$ gives $x = 7$. The choice $14$ is the value of $2x$, not $x$.'
    },
    {
      id: 'sys-core-p1-q2',
      type: 'quiz' as const,
      question: 'The sum of two numbers is $20$. Their difference is $4$. What is the larger number?',
      options: ['$8$', '$16$', '$10$', '$12$'],
      correctAnswer: 3,
      explanation: 'The answer is $12$. Call the larger number $x$ and the smaller one $y$. Sum means $x + y = 20$. Difference means $x - y = 4$. Add the two equations: the $y$ terms cancel and you get $2x = 24$. Divide both sides by $2$ to get $x = 12$. Check it: the other number is $8$, and $12 + 8 = 20$ while $12 - 8 = 4$. The choice $8$ is the smaller number.'
    },
    {
      id: 'sys-core-p1-q3',
      type: 'quiz' as const,
      question: 'If $y = 3x$ and $x + y = 16$, what is the value of $x$?',
      options: ['$4$', '$8$', '$12$', '$16$'],
      correctAnswer: 0,
      explanation: 'The answer is $x = 4$. The first equation says $y$ is the same as $3x$, so replace $y$ in the second equation: $x + 3x = 16$. Combining $x$ and $3x$ gives $4x = 16$. Divide both sides by $4$ to get $x = 4$. Check it: $y = 3(4) = 12$, and $4 + 12 = 16$, which matches. The choice $12$ is the value of $y$.'
    },
    {
      id: 'sys-core-p1-q4',
      type: 'quiz' as const,
      question: 'Two lines are graphed and they cross at the point $(5, 2)$. What is the value of $x + y$ at that point?',
      options: ['$3$', '$10$', '$7$', '$52$'],
      correctAnswer: 2,
      explanation: 'The answer is $7$. In a point written $(x, y)$, the first number is $x$ and the second number is $y$. So $x = 5$ and $y = 2$. Adding them gives $5 + 2 = 7$. The choice $3$ comes from subtracting instead of adding.'
    }
  ]
}
