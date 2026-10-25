export const asvabArFractionsDecimalsPart7Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd7-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 7 of 7 — Mixed Mastery Set**

This set mixes everything from Parts 2 through 5 the way the real AR subtest does: a few quick ones, several medium ones, and a few multi-step problems. Treat it like test day:

- **No calculator.** Use scratch paper for every step.
- **Read the last sentence first** and circle words like *left*, *not* and *rest*.
- **Estimate** before you compute, and **check** before you answer, because on the real test you cannot go back.
- Aim for about **3.5 minutes per question** or less.`
    },
    {
      id: 'arfd7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Set A: warm-up to medium.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A fire station has 45 volunteers, and $\\frac{2}{9}$ of them are on call this weekend. How many volunteers are on call this weekend?',
            options: ['35', '10', '5', '43'],
            correctAnswer: 1,
            explanation: '$45 \\div 9 = 5$, and $5 \\times 2 = 10$ volunteers. The 35 volunteers are the ones not on call, 5 is one ninth only (stopped after dividing), and 43 subtracts the numerator from 45.'
          },
          {
            question: 'Work shirts cost \\$12.99 each. How much do 3 shirts cost?',
            options: ['\\$36.99', '\\$15.99', '\\$38.97', '\\$389.70'],
            correctAnswer: 2,
            explanation: 'Think of \\$12.99 as \\$13 minus 1 cent: $3 \\times 13 = 39$, minus 3 cents, is \\$38.97. \\$36.99 multiplies only the dollars and keeps the 99 cents once, \\$15.99 adds 3 instead of multiplying, and \\$389.70 has the decimal point one place too far right.'
          },
          {
            question: 'A delivery driver drives $1\\frac{1}{4}$ miles to the first stop and then $2\\frac{1}{2}$ miles to the second stop. How many miles does the driver cover in all?',
            options: ['$3\\frac{1}{3}$', '$1\\frac{1}{4}$', '$3\\frac{1}{8}$', '$3\\frac{3}{4}$'],
            correctAnswer: 3,
            explanation: 'With fourths: $1\\frac{1}{4} + 2\\frac{2}{4} = 3\\frac{3}{4}$ miles. $3\\frac{1}{3}$ adds the tops and the bottoms of the fractions ($\\frac{2}{6}$), $1\\frac{1}{4}$ subtracts the distances, and $3\\frac{1}{8}$ multiplies them.'
          },
          {
            question: 'Workers have unloaded $\\frac{5}{8}$ of the boxes from a shipment, which is 40 boxes. How many boxes were in the whole shipment?',
            options: ['64', '25', '24', '320'],
            correctAnswer: 0,
            explanation: 'Five eighths is 40 boxes, so one eighth is $40 \\div 5 = 8$ and the whole is $8 \\times 8 = 64$ boxes. 25 takes $\\frac{5}{8}$ of 40 (smaller than the part already unloaded, so impossible), 24 is the number of boxes still to unload, and 320 multiplies 40 by 8 without dividing by 5.'
          },
          {
            question: 'Trail mix is packed into bags that hold $1\\frac{1}{2}$ pounds each. How many bags can be filled from 24 pounds of trail mix?',
            options: ['36', '16', '48', '12'],
            correctAnswer: 1,
            explanation: '$24 \\div \\frac{3}{2} = 24 \\times \\frac{2}{3} = 16$ bags. 36 multiplies by $1\\frac{1}{2}$ instead of dividing (a bag holds more than a pound, so there must be fewer than 24 bags), 48 divides by just the $\\frac{1}{2}$, and 12 rounds each bag up to 2 pounds.'
          }
        ]
      }
    },
    {
      id: 'arfd7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Set B: medium to hard.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Ground coffee costs \\$0.45 per ounce. How many ounces can you buy with \\$5.40?',
            options: ['120 ounces', '1.2 ounces', '2.43 ounces', '12 ounces'],
            correctAnswer: 3,
            explanation: 'Move both decimal points two places: $540 \\div 45 = 12$ ounces. Check: $12 \\times 0.45 = 5.40$. ✓ 120 and 1.2 ounces have the decimal point in the wrong place, and 2.43 ounces multiplies the price by the money instead of dividing.'
          },
          {
            question: 'A plumber has a $6\\frac{1}{8}$-foot length of pipe and cuts off $2\\frac{3}{4}$ feet. How many feet of pipe are left?',
            options: ['$3\\frac{3}{8}$', '$4\\frac{5}{8}$', '$3\\frac{5}{8}$', '$8\\frac{7}{8}$'],
            correctAnswer: 0,
            explanation: 'Eighths: $6\\frac{1}{8} - 2\\frac{6}{8}$. Borrow 1 as $\\frac{8}{8}$: $5\\frac{9}{8} - 2\\frac{6}{8} = 3\\frac{3}{8}$ feet. $4\\frac{5}{8}$ subtracts $\\frac{1}{8}$ from $\\frac{6}{8}$ (flipped), $3\\frac{5}{8}$ borrows as if it were 10 eighths, and $8\\frac{7}{8}$ adds the lengths.'
          },
          {
            question: 'A house sits on a $\\frac{3}{4}$-acre lot, and $\\frac{2}{3}$ of the lot is lawn. How many acres are lawn?',
            options: ['$\\frac{5}{7}$', '$\\frac{1}{2}$', '$1\\frac{1}{8}$', '$\\frac{1}{4}$'],
            correctAnswer: 1,
            explanation: '"$\\frac{2}{3}$ of $\\frac{3}{4}$" means multiply: cancel the 3s and $\\frac{2}{4} = \\frac{1}{2}$ acre. $\\frac{5}{7}$ adds tops and bottoms, $1\\frac{1}{8}$ divides (and is bigger than the whole lot), and $\\frac{1}{4}$ is the part of the lot that is not lawn.'
          },
          {
            question: 'A unit\'s training budget is \\$4,800. It spends $\\frac{5}{12}$ of the budget on equipment repairs and then $\\frac{1}{4}$ of the remaining money on travel. How much of the budget is left?',
            options: ['\\$1,600', '\\$2,800', '\\$700', '\\$2,100'],
            correctAnswer: 3,
            explanation: 'Repairs: $4{,}800 \\div 12 \\times 5 = 2{,}000$, leaving \\$2,800. Travel: $2{,}800 \\div 4 = 700$, leaving \\$2,100. Taking $\\frac{1}{4}$ of the full \\$4,800 (\\$1,200) gives \\$1,600, the classic trap. \\$2,800 stops after the repairs, and \\$700 is the travel cost, not the money left.'
          },
          {
            question: 'A carpenter cuts two shelves, each $3\\frac{3}{4}$ feet long, from a 15-foot plank. She cuts the rest of the plank into blocks $\\frac{5}{8}$ foot long. How many blocks does she get?',
            options: ['24', '12', '18', '13'],
            correctAnswer: 1,
            explanation: 'The shelves use $2 \\times 3\\frac{3}{4} = 7\\frac{1}{2}$ feet, leaving $7\\frac{1}{2}$ feet. Then $\\frac{15}{2} \\times \\frac{8}{5} = 12$ blocks. 24 divides the whole 15 feet and ignores the shelves, 18 subtracts only one shelf, and 13 doubles only the whole part of $3\\frac{3}{4}$ (using $6\\frac{3}{4}$ feet for the shelves).'
          },
          {
            question: 'A cashier earns \\$12.40 an hour. Last week she worked 30 regular hours plus 4 overtime hours, paid at $1\\frac{1}{2}$ times her regular rate. What was her total pay?',
            options: ['\\$446.40', '\\$421.60', '\\$471.20', '\\$372.00'],
            correctAnswer: 0,
            explanation: 'Regular: $12.40 \\times 30 = 372.00$. Overtime rate: $12.40 + 6.20 = 18.60$, and $18.60 \\times 4 = 74.40$. Total: \\$446.40. \\$421.60 pays all 34 hours at the regular rate, \\$471.20 pays overtime at double time, and \\$372.00 leaves out the overtime.'
          }
        ]
      }
    },
    {
      id: 'arfd7-input',
      type: 'input-boxes' as const,
      content: `**One to type.** ✍️

In a survey of 1,600 residents, $\\frac{5}{16}$ said they ride the bus to work. How many of the residents surveyed ride the bus to work? (number only)`,
      exercise: {
        boxes: 1,
        correctAnswers: ['500'],
        hint1: 'Divide by the denominator first.',
        hint2: '$1{,}600 \\div 16 = 100$.',
        hint3: 'Now multiply by the numerator, 5.',
        explanation: '$1{,}600 \\div 16 = 100$ residents per sixteenth, and $100 \\times 5 = 500$ residents. Estimate: $\\frac{5}{16}$ is a little less than $\\frac{1}{3}$, and a third of 1,600 is about 533, so 500 fits.'
      }
    },
    {
      id: 'arfd7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Fractions and Decimals in Context

- **Fraction of a quantity:** divide by the denominator, multiply by the numerator; the rest is $1 -$ the fraction
- **Of the rest:** apply the second fraction to what is left, not to the original amount
- **Find the whole:** part $\\div$ numerator $\\times$ denominator, and the whole must be bigger than the part
- **Add and subtract:** common denominators, regroup mixed numbers, borrow 1 whole as $\\frac{d}{d}$
- **Multiply and divide:** cancel first, convert mixed numbers to improper fractions, invert and multiply to divide
- **Decimals and money:** line up points to add or subtract, count decimal places to multiply, move both points to divide, and always estimate

### What to Do Next

1. **Take the exit quiz** for this topic to lock in your score.
2. **Review the flashcards** for the fraction methods and decimal benchmarks until they are automatic.
3. **Move on to the next topic in the AR unit: Percents, Discounts and Interest.** Percents are fractions out of 100, so everything you practiced here carries straight over.`
    }
  ]
};
