export const actIntermAlgPart7Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet & Mixed ACT Intermediate Algebra Problems**

Here's a quick-reference sheet covering every major topic from Parts 1–6.

## Cheat Sheet

| Topic | Key Formula / Fact |
|-------|-------------------|
| Quadratic Formula | $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ |
| Discriminant | $\\Delta > 0$: 2 real; $= 0$: 1 real; $< 0$: none |
| Composition | $(f \\circ g)(x) = f(g(x))$ |
| Domain (radical) | Radicand $\\geq 0$ |
| Domain (fraction) | Denominator $\\neq 0$ |
| Remainder Theorem | $P(x) \\div (x-c)$ has remainder $P(c)$ |
| Log definition | $\\log_b a = c \\iff b^c = a$ |
| Log product rule | $\\log_b(MN) = \\log_b M + \\log_b N$ |
| Arithmetic $n$th term | $a_n = a_1 + (n-1)d$ |
| Geometric $n$th term | $a_n = a_1 \\cdot r^{n-1}$ |
| Arithmetic sum | $S_n = \\frac{n}{2}(a_1 + a_n)$ |
      `
    },
    {
      id: 'act-ia7-tips',
      type: 'text' as const,
      content: `
## ACT Intermediate Algebra Tips

1. **Know your formulas cold.** The quadratic formula, log rules, and sequence formulas appear in nearly every test.
2. **Plug in answers** (backsolving) when algebraic manipulation looks messy — it's often faster.
3. **Watch for extraneous solutions** — especially with logs (arguments must be positive) and rationals (denominators can't be zero).
4. **Factor first** in rational expressions — cancelling saves time.
5. **Time management:** Don't spend more than 60 seconds per problem. Mark and move on.
6. **Discriminant shortcut:** Before solving a quadratic, check $\\Delta$ to see how many real answers to expect.
      `
    },
    {
      id: 'act-ia7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the product of the roots of $x^2 - 7x + 10 = 0$?',
            options: ['$7$', '$10$', '$-10$', '$-7$'],
            correctAnswer: 1,
            explanation: 'By Vieta\'s formulas, the product of the roots is $c/a = 10/1 = 10$. (The roots are 2 and 5.)'
          },
          {
            question: 'If $f(x) = 2^x$, what is $f(f(2))$?',
            options: ['$8$', '$16$', '$32$', '$256$'],
            correctAnswer: 1,
            explanation: '$f(2) = 2^2 = 4$. Then $f(4) = 2^4 = 16$.'
          }
        ]
      }
    },
    {
      id: 'act-ia7-mixed1',
      type: 'text' as const,
      content: `
## Worked Mixed Problems

**Problem A (Polynomials):** What is the remainder when $P(x) = x^3 + 2x^2 - x - 2$ is divided by $(x + 2)$?

$$P(-2) = -8 + 8 + 2 - 2 = 0$$

Remainder is $0$, so $(x + 2)$ is a factor.

**Problem B (Logs):** Solve $\\log_4(x - 1) = 2$.

$$x - 1 = 4^2 = 16 \\implies x = 17$$

**Problem C (Sequences):** The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find the common ratio.

$$a_6 = a_3 \\cdot r^3 \\implies 96 = 12r^3 \\implies r^3 = 8 \\implies r = 2$$
      `
    },
    {
      id: 'act-ia7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice — Fill In** 🧮

1) Solve $x^2 + 2x - 15 = 0$. Enter the **positive** root.
2) If $\\log_3 x = 4$, what is $x$?
3) Find the 7th term of the arithmetic sequence $10, 14, 18, 22, \\ldots$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '81', '34'],
        hint1: 'Factor: two numbers with product $-15$ and sum $2$: $5$ and $-3$.',
        hint2: '$x = 3^4$.',
        hint3: '$a_7 = 10 + 6(4)$.',
        explanation: '$(x+5)(x-3) = 0$, positive root is 3. $3^4 = 81$. $a_7 = 10 + 24 = 34$.'
      }
    },
    {
      id: 'act-ia7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Topic Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{x^2-1}{x+1}$ simplifies to …',
            options: ['$x - 1$', '$x + 1$', '$x^2 - 1$', '$\\frac{1}{x+1}$']
          },
          {
            label: 'The sum $1 + 2 + 3 + \\cdots + 50$ equals …',
            options: ['$1225$', '$1250$', '$1275$', '$2500$']
          },
          {
            label: 'If $f(x) = x^2$ and $g(x) = x + 3$, then $f(g(1))$ equals …',
            options: ['$4$', '$16$', '$10$', '$6$']
          }
        ],
        correctAnswers: ['$x - 1$', '$1275$', '$16$'],
        hint1: '$x^2 - 1 = (x-1)(x+1)$, then cancel $(x+1)$.',
        hint2: '$S_{50} = \\frac{50}{2}(1 + 50) = 25 \\cdot 51$.',
        hint3: '$g(1) = 4$, then $f(4) = 16$.',
        explanation: '$\\frac{(x-1)(x+1)}{x+1} = x - 1$. $S_{50} = 1275$. $g(1) = 4,\\; f(4) = 16$.'
      }
    },
    {
      id: 'act-ia7-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Final Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For the geometric sequence with $a_1 = 5$ and $r = -2$, what is $a_4$?',
            options: ['$20$', '$-40$', '$40$', '$-20$'],
            correctAnswer: 1,
            explanation: '$a_4 = 5 \\cdot (-2)^3 = 5 \\cdot (-8) = -40$.'
          },
          {
            question: 'Which equation has NO real solutions?',
            options: ['$x^2 - 4 = 0$', '$x^2 + 1 = 0$', '$x^2 - 2x + 1 = 0$', '$x^2 + 5x + 6 = 0$'],
            correctAnswer: 1,
            explanation: '$x^2 + 1 = 0 \\implies x^2 = -1$. No real number squared gives $-1$, so there are no real solutions ($\\Delta = 0 - 4 = -4 < 0$).'
          }
        ]
      }
    }
  ]
};
