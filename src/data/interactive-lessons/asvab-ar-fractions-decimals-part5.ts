export const asvabArFractionsDecimalsPart5Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd5-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 5 of 7 — Decimals and Money by Hand**

Money problems are decimal problems, and on AR you do them without a calculator. Each operation has one rule about the decimal point.

### Adding and Subtracting: Line Up the Decimal Points

Stack the numbers so the decimal points sit in one column, and fill empty places with zeros.

**Example 1 — making change.** A soldier buys a meal for \\$13.47 and pays with a \\$20 bill. How much change does he get?

| | |
|---:|:---|
| $20.00$ | write \\$20 as 20.00 |
| $-\\;13.47$ | points lined up |
| $6.53$ | borrow across the zeros |

So the change is \\$6.53.

**Count-up check (the way a cashier does it):** from \\$13.47, add 3 cents to reach \\$13.50, 50 cents to reach \\$14.00, then \\$6 to reach \\$20.00. Total: $0.03 + 0.50 + 6 = 6.53$, so \\$6.53. ✓

> **Key Fact:** Writing \\$20 as 20.00 before you subtract prevents the most common change-making slip: forgetting to borrow, which gives \\$7.53.`
    },
    {
      id: 'arfd5-multiply',
      type: 'text' as const,
      content: `## Multiplying: Count the Decimal Places

Multiply as if there were no decimal points, then put back as many decimal places as the two factors have **in total**.

**Example 2 — a paycheck.** A recruit earns \\$14.50 an hour and works 36 hours. What is his gross pay?

**Estimate:** about \\$15 $\\times$ 36 $= 540$, so a bit less than \\$540.

**By hand:** $1450 \\times 36 = 52{,}200$. The factors have 2 decimal places in total (14.50 has two, 36 has none), so the answer is $522.00$: \\$522.00.

**Faster: break the wage apart.** $14 \\times 36 = 504$ and $0.50 \\times 36 = 18$ (half of 36), so $504 + 18 = 522$, which is \\$522.00. ✓

**Example 3 — a fill-up.** Gas costs \\$3.20 a gallon. How much do 12 gallons cost?

$$320 \\times 12 = 3{,}840 \\;\\rightarrow\\; 2 \\text{ decimal places} \\;\\rightarrow\\; 38.40$$

So the fill-up is \\$38.40. **Estimate:** about \\$3 $\\times$ 12 $= 36$, so \\$38.40 is right, while \\$384.00 or \\$3.84 has the point in the wrong place.`
    },
    {
      id: 'arfd5-divide',
      type: 'text' as const,
      content: `## Dividing: Make the Divisor a Whole Number

When you divide by a decimal, move the decimal point in the **divisor** to the right until it is a whole number, and move the point in the **dividend** the same number of places.

**Example 4.** Snacks cost \\$0.65 each. How many can you buy with \\$7.80?

$$7.80 \\div 0.65 \\;\\rightarrow\\; 780 \\div 65 = 12$$

(Both points moved 2 places.) Check: $65 \\times 12 = 780$. ✓

**Example 5 — unit cost.** A pack of 6 energy bars costs \\$4.50. What is the cost per bar?

$$4.50 \\div 6 = 0.75$$

The divisor 6 is already whole, so the decimal point goes straight up into the answer: \\$0.75 per bar. **Reasonableness:** 6 bars at under \\$1 each makes sense for a \\$4.50 pack.

### Fraction and Decimal Benchmarks

Know these cold. They turn many money problems into one quick step.

| Fraction | Decimal | Money example |
|:---:|:---:|:---|
| $\\frac{1}{2}$ | $0.5$ | half of \\$36 is \\$18 |
| $\\frac{1}{4}$ | $0.25$ | a quarter |
| $\\frac{3}{4}$ | $0.75$ | three quarters |
| $\\frac{1}{5}$ | $0.2$ | a fifth of \\$45 is \\$9 |
| $\\frac{1}{8}$ | $0.125$ | an eighth of \\$40 is \\$5 |
| $\\frac{3}{8}$ | $0.375$ | three eighths of \\$40 is \\$15 |
| $\\frac{1}{3}$ | $\\approx 0.333$ | a third of \\$36 is \\$12 |
| $\\frac{2}{3}$ | $\\approx 0.667$ | two thirds of \\$36 is \\$24 |

**Use the friendlier form.** "0.75 times \\$36" is easier as "$\\frac{3}{4}$ of 36": $36 \\div 4 \\times 3 = 27$, so \\$27.`
    },
    {
      id: 'arfd5-mc',
      type: 'multiple-choice' as const,
      content: '**Money by hand.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A warehouse worker earns \\$13.50 an hour and works 32 hours in a week. What is her gross pay for the week?',
            options: ['\\$43.20', '\\$416.00', '\\$432.00', '\\$45.50'],
            correctAnswer: 2,
            explanation: '$13 \\times 32 = 416$ and $0.50 \\times 32 = 16$, so the pay is $416 + 16 = 432$, which is \\$432.00. \\$43.20 puts the decimal point one place too far left (an estimate of \\$13 $\\times$ 30 $\\approx$ \\$400 rules it out), \\$416.00 drops the 50 cents per hour, and \\$45.50 adds the hours to the wage instead of multiplying.'
          },
          {
            question: 'A soldier buys two items at the PX for \\$8.65 and \\$5.78 and pays with a \\$20 bill. How much change should she get?',
            options: ['\\$5.57', '\\$14.43', '\\$6.57', '\\$11.35'],
            correctAnswer: 0,
            explanation: 'Total: $8.65 + 5.78 = 14.43$. Change: $20.00 - 14.43 = 5.57$, so \\$5.57. \\$14.43 is the total cost (stopped one step early), \\$6.57 forgets to borrow from the dollars when subtracting, and \\$11.35 subtracts only the first item.'
          },
          {
            question: 'A case of 24 bottles of water costs \\$10.80. What is the cost per bottle?',
            options: ['\\$4.50', '\\$0.45', '\\$259.20', '\\$2.22'],
            correctAnswer: 1,
            explanation: '$10.80 \\div 24 = 0.45$, so \\$0.45 per bottle (check: $24 \\times 0.45 = 10.80$). \\$4.50 misplaces the decimal point, since 24 bottles at \\$4.50 would cost over \\$100. \\$2.22 divides 24 by 10.80 (the division turned around), and \\$259.20 multiplies instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'arfd5-input',
      type: 'input-boxes' as const,
      content: `**Do it on scratch paper.** ✍️

**1)** Gas costs \\$3.25 a gallon. How many dollars does it cost to buy 14 gallons? (number only, in dollars)

**2)** A bolt is $\\frac{3}{8}$ inch wide. Write its width as a decimal. (number only, in inches)

**3)** Three roommates split a \\$157.50 moving-truck bill evenly. How many dollars does each pay? (number only, in dollars)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['45.50', '0.375', '52.50'],
        hint1: 'For (1), break it apart: $3 \\times 14$ plus $0.25 \\times 14$.',
        hint2: 'For (2), $\\frac{1}{8} = 0.125$, so $\\frac{3}{8}$ is three times that.',
        hint3: 'For (3), divide 157.50 by 3, keeping the decimal point straight above its place.',
        explanation: '(1) $3 \\times 14 = 42$ and $0.25 \\times 14 = 3.50$, so the gas costs \\$45.50. (2) $3 \\times 0.125 = 0.375$ inch. (3) $157.50 \\div 3 = 52.50$, so each pays \\$52.50. Check: $3 \\times 52.50 = 157.50$. ✓'
      }
    },
    {
      id: 'arfd5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Add or subtract:** line up the decimal points and fill in zeros (write \\$20 as 20.00)
- **Multiply:** multiply as whole numbers, then count the **total** decimal places in both factors
- **Divide by a decimal:** move the point in the divisor and the dividend the **same** number of places
- **Estimate** every money answer: a misplaced decimal point is off by a factor of 10 and is easy to spot
- Know the benchmarks: $\\frac{1}{8} = 0.125$, $\\frac{1}{4} = 0.25$, $\\frac{3}{8} = 0.375$, $\\frac{1}{2} = 0.5$, $\\frac{3}{4} = 0.75$

> **Up Next:** Part 6 — test strategy and the traps that catch the most people on fraction and decimal questions.`
    }
  ]
};
