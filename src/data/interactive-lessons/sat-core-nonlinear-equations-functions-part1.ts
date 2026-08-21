export const lessonData = {
  topicSlug: 'sat-nonlinear-equations-functions-core-skills',
  sections: [
    {
      id: 'nlf-core-p1-intro',
      type: 'text' as const,
      content: `# Functions: The Basics

**Part 1 of 2 — One Skill, One Idea**

A **function** is a machine. You put a number in. The machine does some arithmetic. A number comes out.

The name of the machine is usually $f$. When you see $f(x)$, read it out loud as "f of x." It does **not** mean $f$ times $x$. It means "the number that comes out when you put $x$ in."

### The one move: replace $x$ with the number

If a question says $f(3)$, the $3$ is what you put in. Everywhere you see an $x$ in the rule, you write $3$ instead. Then you do the arithmetic.

### Worked example

Say the rule is $f(x) = x^{2} + 5$. Find $f(4)$.

Step 1 — Write the rule down: $f(x) = x^{2} + 5$.

Step 2 — Replace every $x$ with $4$: $f(4) = 4^{2} + 5$.

Step 3 — Do the exponent first. An **exponent** tells you how many times to multiply a number by itself, so $4^{2}$ means $4 \\times 4 = 16$.

Step 4 — Finish the arithmetic: $16 + 5 = 21$.

So $f(4) = 21$. That is the whole skill.

### Two small things that trip people up

**Negatives inside a square.** $(-3)^{2}$ means $(-3) \\times (-3)$. A negative times a negative is positive, so $(-3)^{2} = 9$, not $-9$.

**Absolute value bars.** The bars in $|x|$ mean "distance from zero," so the answer is never negative. $|-5| = 5$ and $|5| = 5$.`
    },
    {
      id: 'nlf-core-p1-q1',
      type: 'quiz' as const,
      question: 'If $f(x) = x^{2} + 3$, what is $f(4)$?',
      options: ['$11$', '$19$', '$24$', '$35$'],
      correctAnswer: 1,
      explanation: 'The answer is $19$. Replace every $x$ in the rule with $4$: $f(4) = 4^{2} + 3$. The exponent comes first, and $4^{2}$ means $4 \\times 4 = 16$. Then add: $16 + 3 = 19$. The choice $11$ comes from multiplying $4 \\times 2$ instead of squaring.'
    },
    {
      id: 'nlf-core-p1-q2',
      type: 'quiz' as const,
      question: 'If $g(x) = 5x - 2$, what is $g(3)$?',
      options: ['$8$', '$10$', '$15$', '$13$'],
      correctAnswer: 3,
      explanation: 'The answer is $13$. Replace $x$ with $3$: $g(3) = 5(3) - 2$. Multiply first: $5 \\times 3 = 15$. Then subtract: $15 - 2 = 13$. The choice $15$ is what you get if you stop before subtracting the $2$.'
    },
    {
      id: 'nlf-core-p1-q3',
      type: 'quiz' as const,
      question: 'If $h(x) = |x - 7|$, what is $h(2)$?',
      options: ['$5$', '$-5$', '$9$', '$14$'],
      correctAnswer: 0,
      explanation: 'The answer is $5$. Replace $x$ with $2$: $h(2) = |2 - 7|$. Inside the bars, $2 - 7 = -5$. The bars mean distance from zero, so $|-5| = 5$. The choice $-5$ is the value before the bars do their work.'
    },
    {
      id: 'nlf-core-p1-q4',
      type: 'quiz' as const,
      question: 'If $f(x) = 2x^{2}$, what is $f(-3)$?',
      options: ['$-18$', '$-36$', '$18$', '$36$'],
      correctAnswer: 2,
      explanation: 'The answer is $18$. Replace $x$ with $-3$: $f(-3) = 2(-3)^{2}$. Handle the exponent first: $(-3)^{2}$ means $(-3) \\times (-3) = 9$, because a negative times a negative is positive. Then multiply: $2 \\times 9 = 18$. The choice $-18$ comes from squaring and keeping the minus sign.'
    }
  ]
}
