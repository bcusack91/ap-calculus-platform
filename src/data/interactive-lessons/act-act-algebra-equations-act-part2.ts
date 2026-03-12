export const actAlgebraPart2Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg2-intro',
      type: 'text' as const,
      content: `
# 📐 Systems of Equations

**Part 2 of 7 — Substitution, Elimination & Word Problems**

A **system of equations** is two (or more) equations with the same unknowns.

| Method | Best When |
|--------|-----------|
| Substitution | One variable is already isolated |
| Elimination | Coefficients are easy to match or cancel |

**Goal:** Find the $(x, y)$ pair that satisfies *both* equations simultaneously.
      `
    },
    {
      id: 'act-alg2-worked',
      type: 'text' as const,
      content: `
## Substitution — Worked Example

Solve:
$$y = 2x + 1$$
$$3x + y = 16$$

Substitute $y = 2x + 1$ into the second equation:

$$3x + (2x + 1) = 16 \\implies 5x + 1 = 16 \\implies x = 3$$

Back-substitute: $y = 2(3) + 1 = 7$.

**Solution:** $(3,\\, 7)$

---

## Elimination — Worked Example

Solve:
$$2x + 3y = 12$$
$$4x - 3y = 6$$

Add the two equations:

$$6x = 18 \\implies x = 3$$

Substitute back: $2(3) + 3y = 12 \\implies y = 2$.

**Solution:** $(3,\\, 2)$

**ACT Tip:** If the ACT asks only for $x$ or only for $y$, elimination is usually faster — you can skip the back-substitution step entirely.
      `
    },
    {
      id: 'act-alg2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Systems Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $x + y = 10$ and $x - y = 4$. What is $x$?',
            options: ['$3$', '$7$', '$5$', '$8$'],
            correctAnswer: 1,
            explanation: 'Add the equations: $2x = 14 \\implies x = 7$.'
          },
          {
            question: 'Solve: $y = 3x$ and $2x + y = 15$. What is $y$?',
            options: ['$3$', '$9$', '$12$', '$15$'],
            correctAnswer: 1,
            explanation: 'Substitute: $2x + 3x = 15 \\implies 5x = 15 \\implies x = 3$, so $y = 9$.'
          }
        ]
      }
    },
    {
      id: 'act-alg2-input1',
      type: 'input-boxes' as const,
      content: `
**Find the Values** 🧮

System: $3x + 2y = 19$ and $x - 2y = -3$.

1) What is $x$?
2) What is $y$?
3) What is $x + y$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3.5', '7.5'],
        hint1: 'Add the two equations to eliminate $y$: $4x = 16$.',
        hint2: 'Substitute $x = 4$ back: $3(4) + 2y = 19 \\implies 2y = 7$.',
        hint3: 'Simply add your values of $x$ and $y$.',
        explanation: 'Adding the equations gives $4x = 16$, so $x = 4$. Then $2y = 7$, so $y = 3.5$. Thus $x + y = 7.5$.'
      }
    },
    {
      id: 'act-alg2-word',
      type: 'text' as const,
      content: `
## Word Problems → Systems

**Example:** A store sells pencils for \\$0.50 and pens for \\$1.25. Maria buys 14 items for \\$11.00. How many of each?

Let $p$ = pencils, $n$ = pens.

$$p + n = 14$$
$$0.50p + 1.25n = 11$$

Multiply the second equation by 4: $2p + 5n = 44$.

From the first: $p = 14 - n$ → substitute:

$$2(14 - n) + 5n = 44 \\implies 28 - 2n + 5n = 44 \\implies 3n = 16$$

Hmm — let's try \\$0.50 and \\$1.00:

$$0.50p + 1.00n = 11 \\implies p + 2n = 22$$

Subtract from $p + n = 14$: $n = 8$, $p = 6$. ✓

**ACT Tip:** On the ACT, back-solve from the answer choices when the algebra gets messy — it's often faster.
      `
    },
    {
      id: 'act-alg2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Method Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = 5x - 1$ and $2x + 3y = 20$ → best method?',
            options: ['Substitution', 'Elimination', 'Graphing', 'Guessing']
          },
          {
            label: '$3x + 4y = 10$ and $3x - 4y = 2$ → best method?',
            options: ['Substitution', 'Elimination', 'Graphing', 'Guessing']
          },
          {
            label: 'When the ACT gives integer answer choices for a system, a good backup strategy is …',
            options: ['Graphing', 'Cramer\'s rule', 'Back-solving from answer choices', 'Dimensional analysis']
          }
        ],
        correctAnswers: ['Substitution', 'Elimination', 'Back-solving from answer choices'],
        hint1: 'One variable is already isolated — just plug it in.',
        hint2: 'The $y$-coefficients are equal and opposite — adding cancels $y$.',
        hint3: 'Plugging answer choices into both equations is a reliable ACT strategy.',
        explanation: 'Use substitution when a variable is isolated; elimination when coefficients align. Back-solving is a powerful ACT shortcut for multiple-choice systems.'
      }
    },
    {
      id: 'act-alg2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Two numbers have a sum of 20 and a difference of 6. What is the larger number?',
            options: ['$10$', '$13$', '$14$', '$7$'],
            correctAnswer: 1,
            explanation: '$x + y = 20$ and $x - y = 6$. Adding: $2x = 26 \\implies x = 13$.'
          },
          {
            question: 'If $2x + y = 11$ and $x + 2y = 13$, what is $x + y$?',
            options: ['$6$', '$8$', '$12$', '$24$'],
            correctAnswer: 1,
            explanation: 'Add both equations: $3x + 3y = 24 \\implies x + y = 8$.'
          }
        ]
      }
    }
  ]
};
