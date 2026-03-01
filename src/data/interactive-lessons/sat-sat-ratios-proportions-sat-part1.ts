export const satRatiosPart1Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp1-intro',
      type: 'text' as const,
      content: `
# 📊 Ratio Basics

**Part 1 of 7 — Part-to-Part, Part-to-Whole, Simplifying Ratios & Ratio Tables**

A **ratio** compares two (or more) quantities. Ratios show up constantly on the SAT — in word problems, data tables, and geometry.

| Notation | Meaning |
|----------|---------|
| $a : b$ | Part-to-part ratio |
| $\\frac{a}{a+b}$ | Part-to-whole fraction for $a$ |
| $\\frac{b}{a+b}$ | Part-to-whole fraction for $b$ |

**Key idea:** A ratio like $3 : 5$ means for every 3 units of one quantity there are 5 units of another. The actual amounts could be $6 : 10$, $9 : 15$, etc.

**Simplifying ratios:** Divide every term by the GCF (greatest common factor).

$$12 : 8 = \\frac{12}{4} : \\frac{8}{4} = 3 : 2$$
      `
    },
    {
      id: 'sat-rp1-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Part-to-Part:** A bag contains red and blue marbles in the ratio $4 : 7$. If there are 28 blue marbles, how many red marbles are there?

$$\\frac{4}{7} = \\frac{r}{28} \\implies r = 4 \\times 4 = 16 \\text{ red marbles}$$

**Example 2 — Part-to-Whole:** In the same bag, what fraction of the marbles are red?

$$\\text{Total parts} = 4 + 7 = 11 \\implies \\frac{4}{11} \\text{ are red}$$

**Example 3 — Three-part ratio:** A recipe uses flour, sugar, and butter in the ratio $5 : 3 : 2$. If you use 15 cups of flour, how much sugar and butter?

$$\\text{Multiplier} = \\frac{15}{5} = 3 \\implies \\text{sugar} = 9, \\; \\text{butter} = 6$$

**SAT Tip:** When a ratio problem says "the ratio of A to B is $m$ to $n$", set up $\\frac{A}{B} = \\frac{m}{n}$ immediately.

---

### Ratio Tables

A **ratio table** scales every column by the same multiplier:

| Multiplier | Red | Blue | Total |
|------------|-----|------|-------|
| $\\times 1$ | 4 | 7 | 11 |
| $\\times 2$ | 8 | 14 | 22 |
| $\\times 3$ | 12 | 21 | 33 |
| $\\times 5$ | 20 | 35 | 55 |
      `
    },
    {
      id: 'sat-rp1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Ratio Fundamentals** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The ratio of cats to dogs at a shelter is $5 : 3$. If there are 40 cats, how many dogs are there?',
            options: ['$15$', '$20$', '$24$', '$30$'],
            correctAnswer: 2,
            explanation: 'Multiplier $= 40 / 5 = 8$. Dogs $= 3 \\times 8 = 24$.'
          },
          {
            question: 'Simplify the ratio $45 : 30 : 15$.',
            options: ['$9 : 6 : 3$', '$3 : 2 : 1$', '$15 : 10 : 5$', '$6 : 4 : 2$'],
            correctAnswer: 1,
            explanation: 'GCF $= 15$. Divide each term: $45/15 : 30/15 : 15/15 = 3 : 2 : 1$.'
          }
        ]
      }
    },
    {
      id: 'sat-rp1-partwhole',
      type: 'text' as const,
      content: `
## Part-to-Whole Conversions

Conversion between part-to-part and part-to-whole is **the single most tested ratio skill** on the SAT.

**Given:** The ratio of boys to girls in a class is $3 : 5$.

| Question | Setup | Answer |
|----------|-------|--------|
| Fraction of boys | $\\frac{3}{3+5}$ | $\\frac{3}{8}$ |
| Fraction of girls | $\\frac{5}{3+5}$ | $\\frac{5}{8}$ |
| If 40 students total, how many boys? | $\\frac{3}{8} \\times 40$ | $15$ |
| If 25 girls, total students? | $\\frac{5}{8} = \\frac{25}{T}$ | $T = 40$ |

**SAT Tip:** Whenever you see "ratio of A to B", add the parts to get the whole. This converts any part-to-part ratio into part-to-whole fractions instantly.
      `
    },
    {
      id: 'sat-rp1-input1',
      type: 'input-boxes' as const,
      content: `
**Part-to-Whole Practice** 🧮

The ratio of apples to oranges in a basket is $7 : 3$. There are 50 pieces of fruit total.

1) How many apples are in the basket?
2) How many oranges are in the basket?
3) If 5 more oranges are added, what is the new total number of oranges?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['35', '15', '20'],
        hint1: 'Total parts $= 7 + 3 = 10$. Multiplier $= 50 / 10 = 5$. Apples $= 7 \\times 5$.',
        hint2: 'Oranges $= 3 \\times 5 = 15$.',
        hint3: 'New oranges $= 15 + 5 = 20$.',
        explanation: 'Apples $= 35$, oranges $= 15$. After adding 5 oranges you have $20$ oranges total.'
      }
    },
    {
      id: 'sat-rp1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Ratio Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ratio of $4 : 6$ in simplest form is …',
            options: ['$4 : 6$', '$2 : 3$', '$1 : 1.5$', '$8 : 12$']
          },
          {
            label: 'If the ratio of X to Y is $5 : 2$, the fraction of the total that is Y equals …',
            options: ['$\\frac{2}{5}$', '$\\frac{5}{7}$', '$\\frac{2}{7}$', '$\\frac{5}{2}$']
          },
          {
            label: 'Doubling every term in a ratio …',
            options: ['changes the ratio', 'keeps the ratio the same', 'halves the ratio', 'squares the ratio']
          }
        ],
        correctAnswers: ['$2 : 3$', '$\\frac{2}{7}$', 'keeps the ratio the same'],
        hint1: 'Divide both terms by 2.',
        hint2: 'Total parts $= 5 + 2 = 7$. Y\'s share is $2/7$.',
        hint3: 'Multiplying every term by the same number is like scaling — the ratio is unchanged.',
        explanation: '$4:6 = 2:3$. Part-to-whole for Y: $2/(5+2) = 2/7$. Scaling all terms preserves the ratio.'
      }
    },
    {
      id: 'sat-rp1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In a mixture of nuts, almonds and cashews are in the ratio $2 : 3$. If the mixture weighs 500 grams, how many grams of cashews are in the mixture?',
            options: ['$100$', '$200$', '$250$', '$300$'],
            correctAnswer: 3,
            explanation: 'Total parts $= 2 + 3 = 5$. Cashews $= \\frac{3}{5} \\times 500 = 300$ grams.'
          },
          {
            question: 'The ratio of red to blue to green beads on a necklace is $1 : 4 : 5$. If there are 60 beads in total, how many more green beads are there than red beads?',
            options: ['$18$', '$20$', '$24$', '$30$'],
            correctAnswer: 2,
            explanation: 'Total parts $= 10$. Multiplier $= 6$. Red $= 6$, green $= 30$. Difference $= 30 - 6 = 24$.'
          }
        ]
      }
    }
  ]
};
