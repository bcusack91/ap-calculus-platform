export const actPreAlgebraPart2Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa2-intro',
      type: 'text' as const,
      content: `
# 🍕 Fractions & Decimals

**Part 2 of 7 — Operations, Converting & Ordering**

Fraction and decimal arithmetic appears on virtually every ACT. You need to add, subtract, multiply, and divide with confidence.

**Key fraction rules:**

| Operation | Rule |
|-----------|------|
| Add / Subtract | Common denominator: $\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}$ |
| Multiply | Straight across: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$ |
| Divide | Flip and multiply: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$ |

Always **simplify** your final answer.
      `
    },
    {
      id: 'act-pa2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Addition:** $\\frac{2}{5} + \\frac{1}{3}$

$$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$$

**Example 2 — Subtraction with mixed numbers:** $3\\frac{1}{4} - 1\\frac{2}{3}$

Convert to improper fractions:

$$\\frac{13}{4} - \\frac{5}{3} = \\frac{39}{12} - \\frac{20}{12} = \\frac{19}{12} = 1\\frac{7}{12}$$

**Example 3 — Multiplication:** $\\frac{3}{8} \\times \\frac{4}{9}$

$$\\frac{3}{8} \\times \\frac{4}{9} = \\frac{12}{72} = \\frac{1}{6}$$

**Example 4 — Converting:** $0.375 = \\frac{375}{1000} = \\frac{3}{8}$
      `
    },
    {
      id: 'act-pa2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Fraction Operations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\frac{3}{4} \\div \\frac{2}{5}$?',
            options: ['$\\frac{6}{20}$', '$\\frac{15}{8}$', '$\\frac{3}{10}$', '$\\frac{8}{15}$'],
            correctAnswer: 1,
            explanation: 'Flip and multiply: $\\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8}$.'
          },
          {
            question: 'Which fraction is equivalent to $0.625$?',
            options: ['$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{3}{4}$', '$\\frac{7}{10}$'],
            correctAnswer: 1,
            explanation: '$0.625 = \\frac{625}{1000} = \\frac{5}{8}$.'
          }
        ]
      }
    },
    {
      id: 'act-pa2-ordering',
      type: 'text' as const,
      content: `
## Ordering & Comparing

To compare fractions, use one of these methods:

1. **Common denominator:** Convert all fractions to the same denominator and compare numerators.
2. **Cross-multiply:** To compare $\\frac{a}{b}$ and $\\frac{c}{d}$, check if $ad > bc$.
3. **Convert to decimals.**

**Example 5:** Order from least to greatest: $\\frac{3}{5},\\; \\frac{2}{3},\\; \\frac{7}{10}$

Convert to decimals: $0.60,\\; 0.\\overline{6},\\; 0.70$

$$\\frac{3}{5} < \\frac{2}{3} < \\frac{7}{10}$$

**Mixed Number Tip:** To convert a mixed number $a\\frac{b}{c}$ to an improper fraction: $\\frac{ac + b}{c}$.
      `
    },
    {
      id: 'act-pa2-input1',
      type: 'input-boxes' as const,
      content: `
**Fraction & Decimal Practice** 🧮

1) Simplify $\\frac{2}{3} + \\frac{5}{6}$. Enter the answer as a fraction *(e.g. 3/2)*.
2) What is $\\frac{7}{8}$ as a decimal?
3) Convert the mixed number $2\\frac{3}{5}$ to an improper fraction. Enter the numerator.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3/2', '0.875', '13'],
        hint1: 'Common denominator is 6: $\\frac{4}{6} + \\frac{5}{6} = \\frac{9}{6}$. Simplify.',
        hint2: 'Divide: $7 \\div 8 = 0.875$.',
        hint3: '$2\\frac{3}{5} = \\frac{2 \\times 5 + 3}{5} = \\frac{13}{5}$.',
        explanation: '$\\frac{2}{3}+\\frac{5}{6} = \\frac{4}{6}+\\frac{5}{6} = \\frac{9}{6} = \\frac{3}{2}$. $7 \\div 8 = 0.875$. $2\\frac{3}{5} = \\frac{13}{5}$ so the numerator is $13$.'
      }
    },
    {
      id: 'act-pa2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To add fractions with different denominators, you first need a …',
            options: ['common numerator', 'common denominator', 'prime factorization', 'decimal form']
          },
          {
            label: 'To divide by a fraction, you ______ the second fraction and multiply.',
            options: ['double', 'square', 'flip', 'subtract']
          },
          {
            label: '$\\frac{0}{5}$ equals …',
            options: ['0', '5', 'undefined', '1']
          }
        ],
        correctAnswers: ['common denominator', 'flip', '0'],
        hint1: 'You can only add fractions when the bottom numbers match.',
        hint2: 'Dividing by a fraction is multiplying by its reciprocal.',
        hint3: 'Zero divided by any nonzero number is zero.',
        explanation: 'Add/subtract fractions using a common denominator. Divide by flipping (reciprocal). $\\frac{0}{5} = 0$.'
      }
    },
    {
      id: 'act-pa2-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A recipe calls for $2\\frac{1}{3}$ cups of flour. If you want to make $1\\frac{1}{2}$ times the recipe, how many cups of flour do you need?',
            options: ['$3\\frac{1}{6}$', '$3\\frac{1}{2}$', '$3\\frac{5}{6}$', '$4\\frac{1}{6}$'],
            correctAnswer: 1,
            explanation: '$2\\frac{1}{3} \\times 1\\frac{1}{2} = \\frac{7}{3} \\times \\frac{3}{2} = \\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$.'
          },
          {
            question: 'Which of the following is greatest?',
            options: ['$\\frac{5}{9}$', '$0.54$', '$\\frac{11}{20}$', '$0.56$'],
            correctAnswer: 3,
            explanation: 'Converting: $\\frac{5}{9} \\approx 0.556$, $0.54$, $\\frac{11}{20} = 0.55$, $0.56$. The greatest is $0.56$.'
          }
        ]
      }
    }
  ]
};
