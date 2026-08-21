export const lessonData = {
  topicSlug: 'sat-functions-core-skills',
  sections: [
    {
      id: 'fn-core-p1-intro',
      type: 'text' as const,
      content: `# Functions: The Basics

**Part 1 of 2 — The Basics**

A **function** is a rule. You put a number in, the rule does something to it, and one number comes out.

Think of a vending machine. Press button $4$ and you get one specific snack. Press button $4$ again and you get that same snack. A function works the same way: the same number in always gives the same number out.

### Reading the notation

The name $f(x)$ is read "$f$ of $x$."

- $f$ is the **name** of the function.
- $x$ is the number you put **in**.
- $f(x)$ is the number that comes **out**.

Important: $f(x)$ does **not** mean $f$ times $x$. The parentheses are holding the input, not multiplying.

### Evaluating a function

To evaluate a function means to find what comes out. There is one move: wherever you see $x$, write the input number instead. Then do the arithmetic.

**Worked example.** If $f(x) = 3x + 2$, what is $f(4)$?

**Step 1.** The input is $4$, so replace $x$ with $4$:

$f(4) = 3(4) + 2$

**Step 2.** Multiply first: $3 \\times 4 = 12$.

$f(4) = 12 + 2$

**Step 3.** Add: $12 + 2 = 14$.

So $f(4) = 14$.

Always multiply before you add. That order keeps you from getting $3 + 2 = 5$ and then multiplying by $4$, which would give the wrong answer.`
    },
    {
      id: 'fn-core-p1-q1',
      type: 'quiz' as const,
      question: 'If $f(x) = 2x + 5$, what is $f(3)$?',
      options: ['$10$', '$11$', '$16$', '$8$'],
      correctAnswer: 1,
      explanation: 'The answer is $11$. Replace $x$ with $3$ to get $f(3) = 2(3) + 5$. Multiply first: $2 \\times 3 = 6$. Then add: $6 + 5 = 11$. So $f(3) = 11$. The choice $16$ comes from adding $2 + 5$ first and then multiplying by $3$, but multiplication comes before addition.'
    },
    {
      id: 'fn-core-p1-q2',
      type: 'quiz' as const,
      question: 'If $h(x) = x - 9$, what is $h(4)$?',
      options: ['$13$', '$5$', '$-13$', '$-5$'],
      correctAnswer: 3,
      explanation: 'The answer is $-5$. Replace $x$ with $4$ to get $h(4) = 4 - 9$. Since $9$ is bigger than $4$, the result is negative. Counting down $9$ from $4$ lands on $-5$, so $h(4) = -5$. The choice $5$ comes from subtracting in the wrong order, as $9 - 4$ rather than $4 - 9$.'
    },
    {
      id: 'fn-core-p1-q3',
      type: 'quiz' as const,
      question: 'If $f(x) = 5x$, what is $f(6)$?',
      options: ['$30$', '$11$', '$56$', '$1$'],
      correctAnswer: 0,
      explanation: 'The answer is $30$. When a number sits right next to $x$ with no sign between them, it means multiply. So replace $x$ with $6$ to get $f(6) = 5 \\times 6 = 30$. The choice $11$ comes from adding $5 + 6$, but $5x$ means five times $x$.'
    },
    {
      id: 'fn-core-p1-q4',
      type: 'quiz' as const,
      question: 'What is the $y$-intercept of the function $f(x) = 4x + 9$?',
      options: ['$4$', '$13$', '$9$', '$36$'],
      correctAnswer: 2,
      explanation: 'The answer is $9$. The $y$-intercept is the value that comes out when the input is zero, so find $f(0)$. Replacing $x$ with $0$ gives $f(0) = 4(0) + 9 = 0 + 9 = 9$. In a function written $f(x) = mx + b$, the number sitting alone at the end is always the $y$-intercept. The choice $4$ is the slope instead.'
    }
  ]
}
