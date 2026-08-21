export const lessonData = {
  topicSlug: 'sat-polynomial-rational-expressions-core-skills',
  sections: [
    {
      id: 'rat-core-p1-intro',
      type: 'text' as const,
      content: `# Rational Expressions: The Basics

**Part 1 of 2 — One Skill, One Idea**

A **rational expression** is a fraction with letters in it, like $\\frac{3x + 12}{x + 4}$. The word "rational" here means ratio, which means fraction. Nothing more.

Two rules run this whole topic.

### Rule 1: the bottom can never be zero

Dividing by zero is not allowed in math. So any value of $x$ that makes the bottom equal $0$ is thrown out. That value is called **undefined**, or **excluded from the domain**.

To find it, set the bottom equal to $0$ and solve. For $\\frac{x + 1}{x - 8}$, set $x - 8 = 0$ and add $8$ to both sides: $x = 8$. So $x = 8$ is excluded.

### Rule 2: you may cancel factors, not terms

A **factor** is something being multiplied. A **term** is something being added or subtracted. You may only cancel a whole factor that appears on the top and on the bottom.

### Worked example

Simplify $\\frac{3x + 12}{x + 4}$.

Step 1 — Look at the top. Both $3x$ and $12$ are divisible by $3$, so factor it out: $3x + 12 = 3(x + 4)$.

Step 2 — Rewrite the fraction: $\\frac{3(x + 4)}{x + 4}$.

Step 3 — Now $(x + 4)$ is a factor on the top and a factor on the bottom, so they cancel. Anything divided by itself is $1$.

Step 4 — What is left is $3$.

So $\\frac{3x + 12}{x + 4} = 3$.

### The mistake to avoid

In $\\frac{x + 4}{x + 6}$ you cannot cross out the two $x$ letters. They are terms being added, not factors being multiplied. That fraction is already as simple as it gets.`
    },
    {
      id: 'rat-core-p1-q1',
      type: 'quiz' as const,
      question: 'For which value of $x$ is $\\frac{x + 1}{x - 8}$ undefined?',
      options: ['$x = -8$', '$x = 8$', '$x = 1$', '$x = 0$'],
      correctAnswer: 1,
      explanation: 'The answer is $x = 8$. A fraction is undefined when the bottom equals zero, so set the bottom equal to zero: $x - 8 = 0$. Add $8$ to both sides to get $x = 8$. The top does not matter for this question. The choice $x = -8$ comes from copying the sign in the expression instead of solving the equation.'
    },
    {
      id: 'rat-core-p1-q2',
      type: 'quiz' as const,
      question: 'Simplify $\\frac{5x + 20}{x + 4}$.',
      options: ['$\\frac{5}{x + 4}$', '$5x$', '$x + 4$', '$5$'],
      correctAnswer: 3,
      explanation: 'The answer is $5$. Factor the top first: both $5x$ and $20$ are divisible by $5$, so $5x + 20 = 5(x + 4)$. The fraction becomes $\\frac{5(x + 4)}{x + 4}$. Now $(x + 4)$ is a factor on the top and on the bottom, so it cancels, leaving $5$. The choice $\\frac{5}{x + 4}$ forgets that the bottom cancels away completely.'
    },
    {
      id: 'rat-core-p1-q3',
      type: 'quiz' as const,
      question: 'Simplify $\\frac{3}{x} + \\frac{4}{x}$.',
      options: ['$\\frac{7}{2x}$', '$\\frac{12}{x}$', '$\\frac{7}{x}$', '$\\frac{7}{x^{2}}$'],
      correctAnswer: 2,
      explanation: 'The answer is $\\frac{7}{x}$. The two fractions already have the same bottom, so add the tops and keep the bottom the same: $3 + 4 = 7$, and the bottom stays $x$. This works exactly like $\\frac{3}{5} + \\frac{4}{5} = \\frac{7}{5}$. The choice $\\frac{7}{2x}$ adds the bottoms too, which is not what adding fractions does.'
    },
    {
      id: 'rat-core-p1-q4',
      type: 'quiz' as const,
      question: 'Simplify $\\frac{4x^{2}}{12x}$.',
      options: ['$\\frac{x}{3}$', '$\\frac{1}{3}$', '$\\frac{3}{x}$', '$\\frac{x}{8}$'],
      correctAnswer: 0,
      explanation: 'The answer is $\\frac{x}{3}$. Handle the numbers and the letters separately. For the numbers, $\\frac{4}{12} = \\frac{1}{3}$ because both divide by $4$. For the letters, $x^{2}$ means $x \\times x$, and one of those cancels with the single $x$ on the bottom, leaving one $x$ on top. Putting the pieces together gives $\\frac{x}{3}$. The choice $\\frac{1}{3}$ cancels both $x$ letters, but only one can cancel.'
    }
  ]
}
