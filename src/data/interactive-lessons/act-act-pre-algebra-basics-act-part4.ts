export const actPreAlgebraPart4Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Ratios & Proportions

**Part 4 of 7 — Setting Up, Cross-Multiplying, Scaling & Unit Rates**

A **ratio** compares two quantities: $a : b$ or $\\frac{a}{b}$.

A **proportion** states that two ratios are equal: $\\frac{a}{b} = \\frac{c}{d}$.

**Cross-multiplication** is the go-to strategy:

$$\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc$$

**Example 1:** If $\\frac{3}{5} = \\frac{x}{20}$, find $x$.

$$3 \\times 20 = 5 \\times x \\implies 60 = 5x \\implies x = 12$$
      `
    },
    {
      id: 'act-pa4-scaling',
      type: 'text' as const,
      content: `
## Scaling & Part-to-Whole

When a ratio is $a : b$, the total parts are $a + b$.

**Example 2:** A class has boys and girls in the ratio $3 : 5$. If there are $40$ students, how many are boys?

Total parts $= 3 + 5 = 8$. Each part $= \\frac{40}{8} = 5$.

$$\\text{Boys} = 3 \\times 5 = 15$$

**Example 3 — Scaling a recipe:** A recipe uses flour and sugar in a $4 : 1$ ratio. If you use $12$ cups of flour, how much sugar?

$$\\frac{4}{1} = \\frac{12}{x} \\implies 4x = 12 \\implies x = 3 \\text{ cups}$$

**Example 4 — Map scale:** On a map, $1$ inch represents $25$ miles. Two cities are $3.5$ inches apart. Actual distance?

$$3.5 \\times 25 = 87.5 \\text{ miles}$$
      `
    },
    {
      id: 'act-pa4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Ratios & Proportions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\frac{7}{x} = \\frac{21}{15}$, what is $x$?',
            options: ['$3$', '$5$', '$7$', '$9$'],
            correctAnswer: 1,
            explanation: 'Cross-multiply: $7 \\times 15 = 21x \\implies 105 = 21x \\implies x = 5$.'
          },
          {
            question: 'Red and blue marbles are in a $2 : 7$ ratio. If there are $63$ total marbles, how many are red?',
            options: ['$9$', '$14$', '$18$', '$49$'],
            correctAnswer: 1,
            explanation: 'Total parts $= 2 + 7 = 9$. Each part $= 63 \\div 9 = 7$. Red $= 2 \\times 7 = 14$.'
          }
        ]
      }
    },
    {
      id: 'act-pa4-unitrate',
      type: 'text' as const,
      content: `
## Unit Rates

A **unit rate** expresses a ratio per **one** unit of the second quantity.

**Example 5:** A car travels $210$ miles in $3.5$ hours. What is the speed in mph?

$$\\text{Rate} = \\frac{210}{3.5} = 60 \\text{ mph}$$

**Example 6 — Unit price:** A 12-pack of soda costs $\\$4.80$. Price per can?

$$\\frac{4.80}{12} = \\$0.40 \\text{ per can}$$

**Example 7 — Better deal:** Store A sells $5$ lb of apples for $\\$6.25$. Store B sells $3$ lb for $\\$3.45$. Which is cheaper per pound?

$$A: \\frac{6.25}{5} = \\$1.25/\\text{lb} \\qquad B: \\frac{3.45}{3} = \\$1.15/\\text{lb}$$

Store B is cheaper.
      `
    },
    {
      id: 'act-pa4-input1',
      type: 'input-boxes' as const,
      content: `
**Ratio & Rate Practice** 🧮

1) Solve: $\\frac{4}{9} = \\frac{x}{27}$. What is $x$?
2) A printer prints $120$ pages in $8$ minutes. Pages per minute?
3) Markers and pens are in a $3 : 4$ ratio. If there are $28$ pens, how many markers?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '15', '21'],
        hint1: 'Cross-multiply: $4 \\times 27 = 9x$.',
        hint2: '$\\frac{120}{8}$.',
        hint3: '$\\frac{3}{4} = \\frac{m}{28}$, cross-multiply.',
        explanation: '$4 \\times 27 = 108 = 9x \\implies x = 12$. $120 \\div 8 = 15$ pages/min. $\\frac{3}{4}=\\frac{m}{28} \\implies 4m = 84 \\implies m = 21$.'
      }
    },
    {
      id: 'act-pa4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve a proportion, the standard strategy is to …',
            options: ['add the fractions', 'cross-multiply', 'find the LCM', 'take the square root']
          },
          {
            label: 'In a ratio $5 : 3$, there are ______ total parts.',
            options: ['$2$', '$5$', '$8$', '$15$']
          },
          {
            label: 'A unit rate always has ______ in the denominator.',
            options: ['$0$', '$1$', '$10$', '$100$']
          }
        ],
        correctAnswers: ['cross-multiply', '$8$', '$1$'],
        hint1: 'Set up $\\frac{a}{b} = \\frac{c}{d}$ and multiply diagonals.',
        hint2: '$5 + 3 = 8$ total parts.',
        hint3: '"Unit" means one.',
        explanation: 'Cross-multiply to solve proportions. $5 + 3 = 8$ total parts. A unit rate is "per 1" unit.'
      }
    },
    {
      id: 'act-pa4-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A train travels $180$ miles in $2.5$ hours. At the same rate, how far will it travel in $4$ hours?',
            options: ['$240$ miles', '$270$ miles', '$288$ miles', '$320$ miles'],
            correctAnswer: 2,
            explanation: 'Rate $= \\frac{180}{2.5} = 72$ mph. Distance $= 72 \\times 4 = 288$ miles.'
          },
          {
            question: 'The ratio of cats to dogs in a shelter is $5 : 8$. If there are $40$ dogs, how many animals are there in total?',
            options: ['$55$', '$60$', '$65$', '$75$'],
            correctAnswer: 2,
            explanation: 'Each part $= 40 \\div 8 = 5$. Cats $= 5 \\times 5 = 25$. Total $= 25 + 40 = 65$.'
          }
        ]
      }
    }
  ]
};
