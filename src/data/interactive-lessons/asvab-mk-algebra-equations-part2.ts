export const asvabMkAlgebraEquationsPart2Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle2-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 2 of 7 — Solving Linear Equations**

### The Balance Idea

An equation is a balance: the left side and the right side weigh the same. You can do anything you like to one side **as long as you do the same thing to the other side**. The goal is to get the variable alone.

To get $x$ alone, **undo** what was done to it, in reverse order:

| If the equation does this to $x$ | Undo it by |
|:---|:---|
| adds a number | subtracting that number from both sides |
| subtracts a number | adding that number to both sides |
| multiplies by a number | dividing both sides by that number |
| divides by a number | multiplying both sides by that number |

Usually you undo addition and subtraction **first**, then multiplication and division.

### The standard order of moves

1. **Distribute** to clear any parentheses.
2. **Combine like terms** on each side.
3. **Move the variable terms** to one side and the numbers to the other.
4. **Divide** by the coefficient.
5. **Check** by substituting into the original equation.`
    },
    {
      id: 'mkle2-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Two steps

Solve $5x - 8 = 27$.

$$5x - 8 + 8 = 27 + 8 \\quad\\Rightarrow\\quad 5x = 35 \\quad\\Rightarrow\\quad x = 7$$

Check: $5(7) - 8 = 35 - 8 = 27$ ✓

### Dividing by a number

Solve $\\frac{x}{4} + 3 = 10$.

Subtract $3$: $\\frac{x}{4} = 7$. Multiply both sides by $4$: $x = 28$.

### Parentheses and variables on both sides

Solve $3(x - 2) = 2x + 5$.

1. Distribute: $3x - 6 = 2x + 5$
2. Subtract $2x$ from both sides: $x - 6 = 5$
3. Add $6$: $x = 11$

Check: $3(11 - 2) = 27$ and $2(11) + 5 = 27$ ✓

### Negative coefficients

Solve $7 - 2x = 4x - 11$.

Add $2x$ to both sides: $7 = 6x - 11$. Add $11$: $18 = 6x$. Divide: $x = 3$.

Tip: move the variable to the side where its coefficient stays **positive**. Fewer negatives, fewer mistakes.

### Fractions: clear them first

Solve $\\frac{x}{2} + \\frac{x}{3} = 10$.

Multiply **every term** by $6$, the smallest number both denominators go into:

$$6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 10 \\quad\\Rightarrow\\quad 3x + 2x = 60 \\quad\\Rightarrow\\quad 5x = 60 \\quad\\Rightarrow\\quad x = 12$$`
    },
    {
      id: 'mkle2-literal',
      type: 'text' as const,
      content: `## Solving a Formula for One Letter

Some MK questions hand you a formula and ask you to solve it for a different letter. Treat every other letter as if it were a number and use the same moves.

### Example 1

Solve $A = \\frac{1}{2}bh$ for $h$.

Multiply both sides by $2$: $2A = bh$. Divide both sides by $b$:

$$h = \\frac{2A}{b}$$

### Example 2

Solve $P = 2l + 2w$ for $w$.

Subtract $2l$: $P - 2l = 2w$. Divide by $2$:

$$w = \\frac{P - 2l}{2}$$

A quick way to check a formula answer: pick easy numbers. If $l = 3$ and $w = 4$, then $P = 14$, and $\\frac{14 - 6}{2} = 4$ ✓`
    },
    {
      id: 'mkle2-mc',
      type: 'multiple-choice' as const,
      content: '**Solve it.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve for $x$: $4x + 9 = 41$',
            options: ['$12.5$', '$32$', '$8$', '$50$'],
            correctAnswer: 2,
            explanation: 'Subtract $9$: $4x = 32$. Divide by $4$: $x = 8$. Stopping at $4x = 32$ gives $32$, and adding $9$ instead of subtracting gives $4x = 50$, which leads to $12.5$.'
          },
          {
            question: 'Solve for $x$: $6(x + 1) = 4x + 20$',
            options: ['$7$', '$9.5$', '$13$', '$2.6$'],
            correctAnswer: 0,
            explanation: 'Distribute: $6x + 6 = 4x + 20$. Subtract $4x$: $2x + 6 = 20$. Subtract $6$: $2x = 14$, so $x = 7$. Multiplying only the $x$ by $6$ ($6x + 1$) leads to $9.5$.'
          },
          {
            question: 'Solve $d = rt + 5$ for $t$.',
            options: ['$t = \\frac{d}{r} - 5$', '$t = \\frac{d + 5}{r}$', '$t = r(d - 5)$', '$t = \\frac{d - 5}{r}$'],
            correctAnswer: 3,
            explanation: 'Undo the $+5$ first: $d - 5 = rt$. Then divide by $r$: $t = \\frac{d - 5}{r}$. Dividing before subtracting would divide only part of the right side, and adding $5$ moves it the wrong way.'
          }
        ]
      }
    },
    {
      id: 'mkle2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Follow the steps.** 🔽 Solve $5(x - 3) = 2x + 9$.`,
      exercise: {
        dropdowns: [
          {
            label: 'After distributing, the equation is:',
            options: ['$5x - 3 = 2x + 9$', '$5x + 15 = 2x + 9$', '$5x - 15 = 2x + 9$', '$x - 15 = 2x + 9$'],
            correctAnswer: 2
          },
          {
            label: 'After moving the $x$-terms to the left and the numbers to the right:',
            options: ['$3x = 24$', '$7x = 24$', '$3x = -6$', '$3x = 6$'],
            correctAnswer: 0
          },
          {
            label: 'The solution is:',
            options: ['$x = -2$', '$x = 8$', '$x = \\frac{24}{7}$', '$x = 2$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$5x - 15 = 2x + 9$', '$3x = 24$', '$x = 8$'],
        hint1: 'Multiply both $x$ and $-3$ by $5$.',
        hint2: 'Subtract $2x$ from both sides, then add $15$ to both sides.',
        hint3: 'Divide both sides by the coefficient of $x$.',
        explanation: '$5(x - 3) = 5x - 15$. Subtracting $2x$ and adding $15$ gives $3x = 24$, so $x = 8$. Check: $5(8 - 3) = 25$ and $2(8) + 9 = 25$ ✓'
      }
    },
    {
      id: 'mkle2-input',
      type: 'input-boxes' as const,
      content: `**Your turn.** ✍️ Solve each equation for $x$.

**1)** $9 - 3x = 2x - 16$

**2)** $\\frac{x}{5} - 2 = 4$

**3)** $\\frac{x}{3} + \\frac{x}{6} = 7$`,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '30', '14'],
        hint1: 'For (1), add $3x$ to both sides and add $16$ to both sides.',
        hint2: 'For (2), add $2$ first, then multiply by $5$.',
        hint3: 'For (3), multiply every term by $6$.',
        explanation: '(1) $9 + 16 = 2x + 3x$, so $25 = 5x$ and $x = 5$. (2) $\\frac{x}{5} = 6$, so $x = 30$. (3) Multiply by $6$: $2x + x = 42$, so $3x = 42$ and $x = 14$.'
      }
    },
    {
      id: 'mkle2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Whatever you do to one side, do to the **other side**
- Order of moves: **distribute → combine → move variables → divide → check**
- Undo addition and subtraction before multiplication and division
- Clear fractions by multiplying **every term** by a common denominator
- To solve a formula for a letter, treat the other letters as numbers
- Always **check** by substituting into the original equation: on the ASVAB it takes seconds and catches sign slips

> **Up Next:** Part 3 — turning sentences into equations.`
    }
  ]
};
