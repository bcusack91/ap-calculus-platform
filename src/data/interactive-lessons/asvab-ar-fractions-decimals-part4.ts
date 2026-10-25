export const asvabArFractionsDecimalsPart4Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd4-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 4 of 7 — Multiplying and Dividing Fractions in Context**

### Multiplying: Tops Times Tops, Bottoms Times Bottoms

To multiply fractions, multiply the numerators and multiply the denominators. No common denominator needed.

**Example 1.** Two-thirds of a field is planted, and $\\frac{3}{4}$ of the planted part is corn. What fraction of the whole field is corn?

"Three-fourths **of** two-thirds" means multiply:

$$\\frac{3}{4} \\times \\frac{2}{3}$$

**Cancel first.** The 3 on top cancels the 3 on the bottom, and the 2 on top goes into the 4 on the bottom twice, leaving a 2 on the bottom:

$$\\frac{3}{4} \\times \\frac{2}{3} = \\frac{1}{2} \\times \\frac{1}{1} = \\frac{1}{2}$$

(Without canceling: $\\frac{6}{12}$, which simplifies to the same $\\frac{1}{2}$.)

Half of the field is corn. **Reasonableness:** a fraction of a fraction must be smaller than both, and $\\frac{1}{2}$ is smaller than $\\frac{2}{3}$ and $\\frac{3}{4}$. ✓

> **Key Fact:** Cancel any top number with any bottom number before you multiply. The numbers stay small and you rarely need to simplify at the end.`
    },
    {
      id: 'arfd4-mixed',
      type: 'text' as const,
      content: `## Mixed Numbers: Make Them Improper First

Never multiply the whole parts and the fraction parts separately. Convert each mixed number to an improper fraction: whole $\\times$ denominator $+$ numerator, over the denominator.

**Example 2 — scaling a recipe.** A recipe calls for $2\\frac{2}{3}$ cups of flour. The mess hall cook makes $1\\frac{1}{2}$ times the recipe. How much flour is needed?

| Step | Work |
|:---|:---|
| Convert | $2\\frac{2}{3} = \\frac{8}{3}$ and $1\\frac{1}{2} = \\frac{3}{2}$ |
| Cancel | the 3s cancel; 2 goes into 8 four times |
| Multiply | $\\frac{8}{3} \\times \\frac{3}{2} = 4$ cups |

**Estimate:** about $2\\frac{1}{2}$ cups times $1\\frac{1}{2}$ is about $2\\frac{1}{2} + 1\\frac{1}{4} = 3\\frac{3}{4}$, so 4 cups fits.

**The slip to avoid:** $2 \\times 1 + \\frac{2}{3} \\times \\frac{1}{2} = 2\\frac{1}{3}$ cups. That skips the cross terms and is far too small.`
    },
    {
      id: 'arfd4-divide',
      type: 'text' as const,
      content: `## Dividing: Invert and Multiply

"How many pieces of length $\\frac{3}{4}$ fit into 9?" is a **division**: $9 \\div \\frac{3}{4}$. To divide by a fraction, flip it and multiply.

**Example 3.** How many $\\frac{3}{4}$-foot shelf brackets can be cut from a 9-foot board?

$$9 \\div \\frac{3}{4} = 9 \\times \\frac{4}{3} = \\frac{36}{3} = 12 \\text{ brackets}$$

**Reasonableness:** each bracket is **shorter than 1 foot**, so you get **more than 9** of them. Dividing by a fraction less than 1 always gives a bigger number.

**Example 4.** A pot holds $7\\frac{1}{2}$ cups of rice. Each serving is $\\frac{3}{4}$ cup. How many servings is that?

$$7\\frac{1}{2} \\div \\frac{3}{4} = \\frac{15}{2} \\times \\frac{4}{3} = \\frac{60}{6} = 10 \\text{ servings}$$

Check: $10 \\times \\frac{3}{4} = \\frac{30}{4} = 7\\frac{1}{2}$. ✓

### Multiply or Divide? Let the Words Decide

| The words say... | Operation | Example |
|:---|:---:|:---|
| "$\\frac{2}{3}$ **of** the 30 trucks" | multiply | $\\frac{2}{3} \\times 30 = 20$ |
| "**how many** $\\frac{1}{2}$-pound bags **from** 6 pounds" | divide | $6 \\div \\frac{1}{2} = 12$ |
| "$1\\frac{1}{2}$ **times** the recipe" | multiply | scale up |
| "split **equally among** 4 people" | divide by 4 | each gets $\\frac{1}{4}$ |

> **Key Fact:** After you divide, ask: "Should I get more pieces than I started with?" If the piece is smaller than 1 unit, yes.`
    },
    {
      id: 'arfd4-mc',
      type: 'multiple-choice' as const,
      content: '**Multiply or divide?** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 20-foot steel bar is cut into pieces that are each $\\frac{4}{5}$ foot long. How many pieces are cut?',
            options: ['16', '5', '25', '100'],
            correctAnswer: 2,
            explanation: '$20 \\div \\frac{4}{5} = 20 \\times \\frac{5}{4} = 25$ pieces. Each piece is shorter than a foot, so there must be more than 20 pieces. 16 multiplies by $\\frac{4}{5}$ instead of dividing, 5 divides 20 by 4 and stops, and 100 multiplies by 5 without dividing by 4.'
          },
          {
            question: 'A motor pool has $\\frac{3}{5}$ of its fuel budget left for the year. It sets aside $\\frac{5}{6}$ of what is left for a convoy. What fraction of the original budget is set aside for the convoy?',
            options: ['$\\frac{18}{25}$', '$\\frac{1}{2}$', '$\\frac{8}{11}$', '$\\frac{1}{10}$'],
            correctAnswer: 1,
            explanation: '"$\\frac{5}{6}$ of $\\frac{3}{5}$" means multiply: cancel the 5s, then $\\frac{3}{6} = \\frac{1}{2}$. $\\frac{18}{25}$ divides the fractions instead of multiplying, $\\frac{8}{11}$ adds tops and bottoms, and $\\frac{1}{10}$ is the part of the budget that is left but not set aside.'
          },
          {
            question: 'A crew lays $2\\frac{1}{2}$ miles of cable per day. How many miles of cable does it lay in $1\\frac{1}{3}$ days at that pace?',
            options: ['$2\\frac{1}{6}$', '$3\\frac{5}{6}$', '$1\\frac{7}{8}$', '$3\\frac{1}{3}$'],
            correctAnswer: 3,
            explanation: '$\\frac{5}{2} \\times \\frac{4}{3} = \\frac{20}{6} = 3\\frac{1}{3}$ miles. $2\\frac{1}{6}$ multiplies the wholes and the fractions separately, $3\\frac{5}{6}$ adds the two mixed numbers, and $1\\frac{7}{8}$ divides instead of multiplying (and a crew working more than a day must lay more than $2\\frac{1}{2}$ miles).'
          }
        ]
      }
    },
    {
      id: 'arfd4-input',
      type: 'input-boxes' as const,
      content: `**Pieces and portions.** ✍️

**1)** A pot holds 10 cups of soup. Each bowl gets $\\frac{2}{3}$ cup. How many bowls can be served? (number only)

**2)** One lap of a track is $\\frac{3}{8}$ mile. A recruit runs 6 laps. How many miles is that? Give a decimal or a mixed number (number only, in miles).`,
      exercise: {
        boxes: 2,
        correctAnswers: ['15', '2.25'],
        hint1: 'For (1), "how many $\\frac{2}{3}$-cup bowls fit into 10 cups" is a division.',
        hint2: '$10 \\div \\frac{2}{3} = 10 \\times \\frac{3}{2}$.',
        hint3: 'For (2), 6 laps of $\\frac{3}{8}$ mile is $6 \\times \\frac{3}{8} = \\frac{18}{8}$.',
        explanation: '(1) $10 \\times \\frac{3}{2} = 15$ bowls; each bowl is less than a cup, so there are more than 10 bowls. (2) $6 \\times \\frac{3}{8} = \\frac{18}{8} = 2\\frac{2}{8} = 2\\frac{1}{4}$ miles, which is $2.25$ miles.'
      }
    },
    {
      id: 'arfd4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Read the words, pick the operation.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: '"How many $\\frac{1}{2}$-pound bags can be filled from 8 pounds of sand?" calls for:',
            options: ['multiplying 8 by $\\frac{1}{2}$', 'dividing 8 by $\\frac{1}{2}$', 'adding 8 and $\\frac{1}{2}$', 'subtracting $\\frac{1}{2}$ from 8'],
            correctAnswer: 1
          },
          {
            label: '"Three-fourths of the 28 vehicles need new tires" calls for:',
            options: ['dividing 28 by $\\frac{3}{4}$', 'subtracting $\\frac{3}{4}$ from 28', 'multiplying 28 by $\\frac{3}{4}$', 'adding $\\frac{3}{4}$ to 28'],
            correctAnswer: 2
          },
          {
            label: 'Dividing 5 by $\\frac{2}{3}$ gives an answer that is:',
            options: ['greater than 5', 'less than 5', 'equal to 5', 'less than $\\frac{2}{3}$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['dividing 8 by $\\frac{1}{2}$', 'multiplying 28 by $\\frac{3}{4}$', 'greater than 5'],
        hint1: '"How many bags fit" asks how many halves are in 8.',
        hint2: '"Of" means multiply.',
        hint3: 'Count how many two-thirds fit into 5. Is it more or fewer than 5?',
        explanation: 'Filling bags of a fixed size is division: $8 \\div \\frac{1}{2} = 16$ bags. "Three-fourths of" is multiplication: $\\frac{3}{4} \\times 28 = 21$ vehicles. Dividing by a fraction less than 1 gives a bigger number: $5 \\div \\frac{2}{3} = 7\\frac{1}{2}$.'
      }
    },
    {
      id: 'arfd4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Multiply fractions: tops times tops, bottoms times bottoms, and **cancel first**
- **Convert mixed numbers to improper fractions** before multiplying or dividing
- Divide by a fraction: **invert and multiply**; dividing by a fraction less than 1 gives a **bigger** answer
- "Of" and "times" mean multiply; "how many ___ fit" and "split equally" mean divide

> **Up Next:** Part 5 — decimals and money by hand: paychecks, change, unit costs and gas prices.`
    }
  ]
};
