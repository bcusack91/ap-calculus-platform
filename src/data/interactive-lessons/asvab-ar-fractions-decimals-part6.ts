export const asvabArFractionsDecimalsPart6Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd6-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 6 of 7 — Test Strategy and Common Traps**

The wrong answer choices on AR are not random. Each one is the result of a specific, common mistake. If you know the mistakes, you can see the traps coming.

### The Six Big Traps

| Trap | What it looks like | How to dodge it |
|:---|:---|:---|
| **Second fraction on the original** | "Spends $\\frac{1}{3}$, then $\\frac{1}{4}$ of the rest" solved as $\\frac{1}{4}$ of the full amount | Write "rest = ___" and fill it in before using the second fraction |
| **Adding tops and bottoms** | $\\frac{1}{2} + \\frac{1}{3}$ written as $\\frac{2}{5}$ | Common denominator first; the sum must be bigger than each piece |
| **Wrong operation** | Multiplying by $\\frac{3}{4}$ when the question asks how many $\\frac{3}{4}$-foot pieces fit | "Of" = multiply; "how many fit" = divide; check if you should get more or fewer |
| **Misplaced decimal point** | \\$43.20 instead of \\$432.00 for a week's pay | Estimate first; an answer off by a factor of 10 will not match |
| **Fraction used vs fraction left** | Giving the number who passed when asked how many did not | Read the last sentence first; circle *not*, *left*, *remain*, *rest* |
| **Mixed numbers split apart** | $2\\frac{1}{2} \\times 3\\frac{1}{3}$ done as $2 \\times 3$ plus $\\frac{1}{2} \\times \\frac{1}{3}$ | Convert to improper fractions before multiplying or dividing |

> **Key Fact:** Each of these traps produces a number that appears among the answer choices. Finding your answer in the list does not prove it is right. Your check does.`
    },
    {
      id: 'arfd6-timing',
      type: 'text' as const,
      content: `## Timing, Estimation and Back-Solving

### Timing

On the computer test you have **55 minutes for 15 questions**, about **3.5 minutes each**. A one-step "fraction of a group" question should take about a minute. That banked time pays for the multi-step ones: two fractions in a row, or a paycheck plus a deduction. Remember that you cannot go back, so spend the extra seconds checking before you answer.

### Estimate to eliminate choices

Round mixed numbers and prices to friendly values before you compute.

**Example.** Each of 4 tent poles is $5\\frac{7}{8}$ feet long. Round $5\\frac{7}{8}$ up to 6: the total is a bit less than $4 \\times 6 = 24$ feet. Any answer near 20 or near 30 is out immediately. (Exactly: $4 \\times 5\\frac{7}{8} = 23\\frac{1}{2}$ feet.)

### Back-solve "find the whole" questions

When a question gives a part and asks for the whole, the answer must split evenly by the denominator.

**Example.** "Five-ninths of a group is 35 people. How many are in the group?" Choices: 45, 50, 63, 70. The whole must split into ninths, so it must be a multiple of 9: only 45 and 63 qualify. Test 63: $63 \\div 9 \\times 5 = 35$. ✓ The group has 63 people.

### Reasonableness checklist

Before you click, ask:

- Is a **part** smaller than the **whole**, and is a **whole** bigger than a known part?
- Did dividing by a fraction less than 1 give a **bigger** number?
- Is a fraction of a fraction **smaller** than both?
- Does the money answer match my **estimate** to the nearest power of 10?
- Did I answer the question in the **last sentence** (left, not used; did not, not did)?`
    },
    {
      id: 'arfd6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Dana earned \\$90. She spent $\\frac{1}{3}$ of it on her phone bill and then $\\frac{1}{2}$ of the remaining money on groceries. She says she has \\$15 left. What mistake did she make?',
            options: ['She stopped after paying the phone bill', 'She took one half of \\$90, not of the \\$60 left', 'She gave the grocery cost instead of the money left', 'She added the numerators and the denominators'],
            correctAnswer: 1,
            explanation: 'Correctly: phone \\$30, leaving \\$60; groceries are half of \\$60, or \\$30; she has \\$30 left. Taking half of the full \\$90 (\\$45) gives $90 - 30 - 45 = 15$, her answer. Stopping after the phone bill would give \\$60, and adding tops and bottoms ($\\frac{2}{5}$ of 90 spent) would leave \\$54, so neither explains \\$15.'
          },
          {
            question: 'A carpenter needs 3 shelves, each $2\\frac{7}{8}$ feet long, cut from one board. Without computing exactly, what is the shortest board length below that will work?',
            options: ['8 feet', '6 feet', '12 feet', '9 feet'],
            correctAnswer: 3,
            explanation: 'Each shelf is just under 3 feet, so the total is just under 9 feet (exactly $8\\frac{5}{8}$ feet). A 9-foot board works. An 8-foot board is too short; it is the pick if you multiply only the 2 by 3 and add the $\\frac{7}{8}$ once ($6\\frac{7}{8}$ feet). A 6-foot board uses only the whole numbers, and a 12-foot board works but is not the shortest.'
          },
          {
            question: 'Paint costs \\$18.40 a gallon. How much do $2.5$ gallons cost?',
            options: ['\\$460.00', '\\$4.60', '\\$20.90', '\\$46.00'],
            correctAnswer: 3,
            explanation: '$18.40 \\times 2.5$: $18.40 \\times 2 = 36.80$ and half of 18.40 is 9.20, so the total is \\$46.00. Estimate: about \\$20 $\\times$ 2.5 $= 50$, which rules out \\$460.00 and \\$4.60 (decimal point off by a factor of 10). \\$20.90 adds 2.5 to the price instead of multiplying.'
          },
          {
            question: 'Of the 63 people on a bus trip, $\\frac{4}{9}$ bought lunch on the road. How many people did not buy lunch on the road?',
            options: ['28', '7', '35', '59'],
            correctAnswer: 2,
            explanation: 'One ninth of 63 is 7, so 28 people bought lunch and $63 - 28 = 35$ did not (or $\\frac{5}{9}$ of 63 $= 35$). The 28 people are the ones who did buy lunch, the trap for skipping the last sentence; 7 is one ninth only, and 59 subtracts the numerator 4 from 63.'
          }
        ]
      }
    },
    {
      id: 'arfd6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the mistake.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A student writes $\\frac{2}{3} + \\frac{1}{4} = \\frac{3}{7}$. The mistake is:',
            options: ['adding the tops and the bottoms', 'misplacing the decimal point', 'using the fraction that is left', 'flipping the second fraction'],
            correctAnswer: 0
          },
          {
            label: 'A student says $6 \\div \\frac{1}{2} = 3$. The mistake is:',
            options: ['adding 6 and one half instead of dividing', 'dividing by 2 instead of by one half', 'subtracting one half from 6 instead', 'forgetting to carry when multiplying'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['adding the tops and the bottoms', 'dividing by 2 instead of by one half'],
        hint1: 'What do $\\frac{2}{3}$ and $\\frac{1}{4}$ become with denominator 12?',
        hint2: 'How many halves fit into 6?',
        hint3: 'Dividing by a fraction less than 1 should give a bigger number.',
        explanation: '$\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$; adding tops and bottoms gives $\\frac{3}{7}$, which is even smaller than $\\frac{2}{3}$ alone. $6 \\div \\frac{1}{2} = 6 \\times 2 = 12$ halves; the answer 3 is $6 \\div 2$, which divides by 2 instead of by one half.'
      }
    },
    {
      id: 'arfd6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- The wrong choices come from six traps: **second fraction on the original**, **adding tops and bottoms**, **wrong operation**, **misplaced decimal point**, **fraction used vs fraction left**, **mixed numbers split apart**
- Bank time on one-step items (about a minute) for multi-step items; you cannot go back, so check before you click
- **Estimate** to throw out choices; **back-solve** "find the whole" questions with multiples of the denominator
- Run the **reasonableness checklist** on every answer

> **Up Next:** Part 7 — a mixed mastery set in true ASVAB style.`
    }
  ]
};
