export const actAlgebraPart7Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed ACT-Style Problems & Time Strategy**

This final part pulls together everything from Parts 1–6.

## Quick-Reference Cheat Sheet

| Topic | Key Formula / Rule |
|-------|--------------------|
| Linear equations | Isolate $x$: inverse operations |
| Systems | Substitution or elimination |
| Inequalities | Flip sign when × or ÷ by negative |
| Absolute value | $|A|=b \\implies A = b$ or $A = -b$ |
| Factoring | $a^2 - b^2 = (a+b)(a-b)$ |
| $d = rt$ | Distance = rate × time |
| Mixtures | $\\sum (\\text{amount}_i \\times \\text{conc}_i) = \\text{total} \\times \\text{target}$ |
      `
    },
    {
      id: 'act-alg7-strategy',
      type: 'text' as const,
      content: `
## ACT Math Time Strategy

You have **60 minutes for 60 questions** — exactly 1 minute per question.

| Question # | Difficulty | Strategy |
|-----------|-----------|----------|
| 1–20 | Easy | Solve directly, aim for < 30 sec each |
| 21–40 | Medium | Most algebra questions fall here |
| 41–60 | Hard | Skip & return if stuck > 90 sec |

**Top 5 Algebra Speed Tips:**

1. **Back-solve** from answer choices on tough questions
2. **Plug in numbers** when variables make things abstract
3. **Eliminate obviously wrong answers** first
4. **Memorise special products** — never FOIL $a^2 - b^2$
5. **Clear fractions immediately** by multiplying by the LCD
      `
    },
    {
      id: 'act-alg7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\frac{3x-1}{2} = 7$, what is $x$?',
            options: ['$3$', '$5$', '$\\frac{15}{3}$', '$\\frac{13}{3}$'],
            correctAnswer: 1,
            explanation: '$3x - 1 = 14 \\implies 3x = 15 \\implies x = 5$.'
          },
          {
            question: 'If $|2x - 10| = 4$, what is the product of the two solutions?',
            options: ['$21$', '$20$', '$18$', '$24$'],
            correctAnswer: 0,
            explanation: '$2x - 10 = 4 \\implies x = 7$. $2x - 10 = -4 \\implies x = 3$. Product $= 7 \\times 3 = 21$.'
          }
        ]
      }
    },
    {
      id: 'act-alg7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Skills** 🧮

1) Solve: $4(x - 3) = 2(x + 5)$. What is $x$?
2) Factor: $x^2 - 16 = (x + a)(x - a)$. What is $a$?
3) System: $x + y = 9$ and $x - y = 3$. What is $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11', '4', '6'],
        hint1: '$4x - 12 = 2x + 10 \\implies 2x = 22$.',
        hint2: '$16 = 4^2$, so difference of squares gives $a = 4$.',
        hint3: 'Add the equations: $2x = 12$.',
        explanation: '1) $x = 11$. 2) $a = 4$ (difference of squares). 3) $x = 6$ (elimination by adding).'
      }
    },
    {
      id: 'act-alg7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Strategy Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You\'re on question 52 and stuck after 45 seconds. You should …',
            options: ['Keep working — you\'ll get it', 'Skip it and come back', 'Guess randomly', 'Erase all work and start over']
          },
          {
            label: 'The fastest way to solve a system when one variable is isolated is …',
            options: ['Graphing', 'Elimination', 'Substitution', 'Cramer\'s rule']
          },
          {
            label: 'When you see $x^2 - 25$ in a denominator, you should immediately think …',
            options: ['Quadratic formula', 'Completing the square', 'Difference of squares', 'Long division']
          }
        ],
        correctAnswers: ['Skip it and come back', 'Substitution', 'Difference of squares'],
        hint1: 'Hard questions at the end are worth the same as easy ones at the beginning.',
        hint2: 'If $y = \\ldots$ is given, just plug it in.',
        hint3: '$x^2 - 25 = (x+5)(x-5)$ — a pattern you should recognize instantly.',
        explanation: 'Time management is crucial: skip and return. Use substitution when a variable is isolated. Difference of squares is one of the most tested patterns.'
      }
    },
    {
      id: 'act-alg7-mixed',
      type: 'text' as const,
      content: `
## Final Mixed Problems

Try these under timed conditions — **6 minutes for 6 questions**.

| # | Problem | Answer |
|---|---------|--------|
| 1 | Solve $5x - 3(x + 2) = 8$ | $x = 7$ |
| 2 | Solve the system: $2x + y = 7$, $x - y = 2$ | $(3,\\, 1)$ |
| 3 | Solve $|x + 3| = 2x - 1$ | $x = 4$ only |
| 4 | Factor $2x^2 - 8$ completely | $2(x+2)(x-2)$ |
| 5 | A train at 80 mph and a car at 60 mph leave at the same time in the same direction. After how many hours is the train 50 miles ahead? | $2.5$ hr |
| 6 | Solve $-5 < 3x + 1 \\leq 13$ | $-2 < x \\leq 4$ |

**Check:** Problem 3 — Case 1: $x + 3 = 2x - 1 \\implies x = 4$. Case 2: $x + 3 = -(2x-1) \\implies 3x = -2 \\implies x = -\\frac{2}{3}$.
Check Case 2: $|{-\\frac{2}{3}}+3| = \\frac{7}{3}$ but $2(-\\frac{2}{3})-1 = -\\frac{7}{3} < 0$ ✗ Extraneous!
      `
    },
    {
      id: 'act-alg7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Final ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $3(2x - 4) = 2(3x - 6)$, how many solutions does the equation have?',
            options: ['$0$', '$1$', 'Infinitely many', '$2$'],
            correctAnswer: 2,
            explanation: '$6x - 12 = 6x - 12$ is an identity — true for all $x$. Infinitely many solutions.'
          },
          {
            question: 'A 20% salt solution is mixed with a 50% salt solution to make 30 liters of a 40% solution. How many liters of the 50% solution are needed?',
            options: ['$10$', '$15$', '$20$', '$25$'],
            correctAnswer: 2,
            explanation: 'Let $x$ = liters of 50%. Then $0.20(30-x) + 0.50x = 0.40(30)$. $6 - 0.20x + 0.50x = 12 \\implies 0.30x = 6 \\implies x = 20$.'
          }
        ]
      }
    }
  ]
};
