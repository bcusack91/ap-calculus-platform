export const lessonData = {
  topicSlug: 'sat-functions-core-skills',
  sections: [
    {
      id: 'fn-core-p2-recap',
      type: 'text' as const,
      content: `# Functions: Practice

**Part 2 of 2 — Practice**

### The steps for evaluating

1. Find the number inside the parentheses. That is your input.
2. Rewrite the rule, putting that number everywhere $x$ appears.
3. Multiply before you add or subtract.
4. The number you end with is the output.

### What the two numbers mean

Many SAT functions look like $f(x) = mx + b$. Each part has a name and a meaning, and the test asks about both.

- $m$ is the **slope**, also called the **rate of change**. It is the number multiplied by $x$, and it tells you how much the output changes each time the input goes up by one.
- $b$ is the **$y$-intercept**, also called the **starting value**. It is the number sitting by itself, and it is what you have before anything changes.

A number multiplied by a variable is also called a **coefficient**, so $m$ is the coefficient of $x$.

**Worked example.** A gym charges a $\\$50$ sign-up fee plus $\\$20$ each month. The cost after $m$ months is $C(m) = 20m + 50$.

- The $20$ is the slope. It is the monthly rate, because the cost grows by $\\$20$ every month.
- The $50$ is the $y$-intercept. It is the starting value, because you pay it once at zero months.

When a question asks what a number "represents," check whether it is attached to the variable. Attached means rate. Standing alone means starting value.`
    },
    {
      id: 'fn-core-p2-q1',
      type: 'quiz' as const,
      question: 'In the function $f(x) = 6x + 40$, what does the value $6$ represent?',
      options: ['The starting value', 'The largest possible output', 'The rate of change (slope)', 'The $x$-intercept'],
      correctAnswer: 2,
      explanation: 'The value $6$ is the rate of change, also called the slope. It is the number multiplied by $x$, which means every time $x$ goes up by $1$, the output goes up by $6$. The starting value in this function is $40$, because that is the number standing alone with no $x$ attached to it.'
    },
    {
      id: 'fn-core-p2-q2',
      type: 'quiz' as const,
      question: 'A phone plan costs $\\$50$ to start plus $\\$15$ each month. The total cost is $C(m) = 15m + 50$. What does the value $50$ represent?',
      options: ['The one-time starting cost', 'The cost of each month', 'The number of months', 'The total cost after one year'],
      correctAnswer: 0,
      explanation: 'The value $50$ is the one-time starting cost. It stands alone with no $m$ attached, so it does not grow as months go by. You can see this by finding the cost at zero months: $C(0) = 15(0) + 50 = 50$. The monthly cost is $15$, because that number is attached to the variable $m$.'
    },
    {
      id: 'fn-core-p2-q3',
      type: 'quiz' as const,
      question: 'A gym charges $\\$20$ per month plus a $\\$30$ sign-up fee, so the cost is $C(m) = 20m + 30$. What is $C(2)$?',
      options: ['$\\$50$', '$\\$52$', '$\\$100$', '$\\$70$'],
      correctAnswer: 3,
      explanation: 'The answer is $\\$70$. Replace $m$ with $2$ to get $C(2) = 20(2) + 30$. Multiply first: $20 \\times 2 = 40$. Then add the sign-up fee: $40 + 30 = 70$. So two months cost $\\$70$. The choice $\\$50$ comes from adding $20 + 30$ and skipping the multiplication.'
    },
    {
      id: 'fn-core-p2-q4',
      type: 'quiz' as const,
      question: 'If $f(x) = -2x + 1$, what is $f(-3)$?',
      options: ['$-5$', '$7$', '$5$', '$-7$'],
      correctAnswer: 1,
      explanation: 'The answer is $7$. Replace $x$ with $-3$ to get $f(-3) = -2(-3) + 1$. Multiply first: a negative times a negative gives a positive, so $-2 \\times -3 = 6$. Then add: $6 + 1 = 7$. So $f(-3) = 7$. The choice $-5$ comes from treating the product as $-6$, but two negative signs multiply to a positive.'
    }
  ]
}
