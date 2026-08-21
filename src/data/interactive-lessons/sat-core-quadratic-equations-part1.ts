export const lessonData = {
  topicSlug: 'sat-quadratic-equations-core-skills',
  sections: [
    {
      id: 'quad-core-p1-intro',
      type: 'text' as const,
      content: `# Quadratic Equations: The Basics

**Part 1 of 2 — One Skill, One Idea**

A **quadratic** is an equation where the highest power of $x$ is $2$. Something like $x^{2} + 7x + 12 = 0$.

To **factor** means to rewrite a sum as a multiplication. For example, $12$ factored is $3 \\times 4$. With quadratics, you rewrite $x^{2} + 7x + 12$ as two parentheses multiplied together.

A **solution** (also called a **zero** or a **root**) is a value of $x$ that makes the equation true.

### The one move: find two numbers

For $x^{2} + bx + c$, look for **two numbers that multiply to $c$ and add to $b$**. Those two numbers go inside the parentheses.

### Worked example

Solve $x^{2} + 7x + 12 = 0$.

Step 1 — Name the parts. Here $b = 7$ and $c = 12$.

Step 2 — Find two numbers that multiply to $12$ and add to $7$. Try the pairs that multiply to $12$: $1$ and $12$ add to $13$. $2$ and $6$ add to $8$. $3$ and $4$ add to $7$. That is the pair.

Step 3 — Write the factored form: $(x + 3)(x + 4) = 0$.

Step 4 — Use the zero rule. If two things multiply to zero, at least one of them must **be** zero. So either $x + 3 = 0$ or $x + 4 = 0$.

Step 5 — Solve each small equation. From $x + 3 = 0$, subtract $3$ from both sides: $x = -3$. From $x + 4 = 0$, subtract $4$: $x = -4$.

The solutions are $x = -3$ and $x = -4$.

### The sign check

Notice the signs flip. A factor of $(x + 3)$ gives the solution $x = -3$. A factor of $(x - 3)$ gives the solution $x = 3$. Set each parenthesis equal to zero and solve, every time, and the signs take care of themselves.`
    },
    {
      id: 'quad-core-p1-q1',
      type: 'quiz' as const,
      question: 'Which is the correct factored form of $x^{2} + 8x + 15$?',
      options: ['$(x + 1)(x + 15)$', '$(x + 3)(x + 5)$', '$(x - 3)(x - 5)$', '$(x + 2)(x + 6)$'],
      correctAnswer: 1,
      explanation: 'The answer is $(x + 3)(x + 5)$. You need two numbers that multiply to $15$ and add to $8$. The pairs that multiply to $15$ are $1$ and $15$, which add to $16$, and $3$ and $5$, which add to $8$. So $3$ and $5$ are the pair. The choice $(x - 3)(x - 5)$ has the right numbers but the wrong signs, since $-3$ and $-5$ add to $-8$.'
    },
    {
      id: 'quad-core-p1-q2',
      type: 'quiz' as const,
      question: 'What are the solutions of $(x - 4)(x + 9) = 0$?',
      options: ['$x = -4$ or $x = 9$', '$x = 4$ or $x = 9$', '$x = 4$ or $x = -9$', '$x = -4$ or $x = -9$'],
      correctAnswer: 2,
      explanation: 'The answer is $x = 4$ or $x = -9$. Set each parenthesis equal to zero. From $x - 4 = 0$, add $4$ to both sides to get $x = 4$. From $x + 9 = 0$, subtract $9$ from both sides to get $x = -9$. The other choices come from copying the signs straight out of the parentheses instead of solving.'
    },
    {
      id: 'quad-core-p1-q3',
      type: 'quiz' as const,
      question: 'What are the solutions of $x^{2} - 9x + 20 = 0$?',
      options: ['$x = 4$ or $x = 5$', '$x = -4$ or $x = -5$', '$x = 2$ or $x = 10$', '$x = 1$ or $x = 20$'],
      correctAnswer: 0,
      explanation: 'The answer is $x = 4$ or $x = 5$. You need two numbers that multiply to $20$ and add to $-9$. Since they multiply to a positive and add to a negative, both are negative: $-4$ and $-5$ multiply to $20$ and add to $-9$. So the factored form is $(x - 4)(x - 5) = 0$. Setting each part to zero gives $x = 4$ and $x = 5$. The choice $x = -4$ or $x = -5$ skips the sign flip.'
    },
    {
      id: 'quad-core-p1-q4',
      type: 'quiz' as const,
      question: 'Which is the correct factored form of $x^{2} - 49$?',
      options: ['$(x - 7)^{2}$', '$(x + 7)^{2}$', '$(x - 49)(x + 1)$', '$(x - 7)(x + 7)$'],
      correctAnswer: 3,
      explanation: 'The answer is $(x - 7)(x + 7)$. This is the difference of squares pattern: $x^{2} - (\\text{a number squared})$ factors into the same two numbers, one with a plus and one with a minus. Since $7 \\times 7 = 49$, the number is $7$. Check by multiplying out: $(x - 7)(x + 7) = x^{2} + 7x - 7x - 49 = x^{2} - 49$. The middle terms cancel, which is exactly why there is no $x$ term.'
    }
  ]
}
