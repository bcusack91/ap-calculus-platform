export const macroFiscalPolicyToolsPart4Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {
      id: 'macrofis4-tools-intro',
      type: 'text' as const,
      content: `
# 🛠️ Fiscal Policy Tools

**Part 4 of 7 — Loanable Funds and Debt Calculations**

---

| Section |
|---------|
| 📖 Reading a Loanable Funds Schedule |
| Adding Government Borrowing |
| The Same Answer from the Supply Side |
| The Debt-to-GDP Ratio |

> 🔑 **Key Concept:** With a supply-and-demand schedule for loanable funds, you can find the equilibrium real interest rate, add government borrowing to demand, and read off the **new real interest rate** and the amount of **private investment crowded out**. To judge whether a debt is growing heavier, compare it with the size of the economy: the **debt-to-GDP ratio**.
`
    },
    {
      id: 'macrofis4-tools-schedule',
      type: 'text' as const,
      content: `
## 📖 Reading a Loanable Funds Schedule

A hypothetical economy (billions of dollars):

| Real interest rate | Quantity supplied (saving) | Quantity demanded (private investment) |
|---|---|---|
| 2% | 400 | 800 |
| 3% | 500 | 700 |
| 4% | 600 | 600 |
| 5% | 700 | 500 |
| 6% | 800 | 400 |
| 7% | 900 | 300 |

**Equilibrium:** quantity supplied equals quantity demanded at a real interest rate of **4%**, where **\\$600 billion** is saved and invested.

Supply slopes upward (a higher real rate rewards saving), and demand slopes downward (a higher real rate leaves fewer investment projects worth borrowing for).
`
    },
    {
      id: 'macrofis4-tools-borrow',
      type: 'text' as const,
      content: `
## Adding Government Borrowing

### Worked Example 1: The government borrows \\$200 billion

Add \\$200 billion to the quantity demanded at **every** interest rate, because the government borrows that amount regardless of the rate.

| Real interest rate | Saving | Private investment | Total demand (private + 200) |
|---|---|---|---|
| 3% | 500 | 700 | 900 |
| 4% | 600 | 600 | 800 |
| **5%** | **700** | **500** | **700** |
| 6% | 800 | 400 | 600 |

**Step 1: New equilibrium.** Saving (700) equals total demand (700) at **5%**.

**Step 2: Private investment.** At 5%, private borrowers want **\\$500 billion**, down from \\$600 billion.

**Step 3: Crowding out.** \\$600 billion − \\$500 billion = **\\$100 billion** of private investment crowded out.

**Check:** the government's \\$200 billion came from \\$100 billion of new saving (600 → 700) plus \\$100 billion of crowded-out investment.

### Worked Example 2: The government borrows \\$400 billion

Total demand equals saving at **6%** (400 + 400 = 800). Private investment falls to \\$400 billion, so **\\$200 billion** is crowded out. Doubling the borrowing doubled the crowding out here, and pushed the real rate up another percentage point.
`
    },
    {
      id: 'macrofis4-tools-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the schedule above, the government borrows \\$200 billion. What is the new equilibrium real interest rate?',
            options: [
              '4%',
              '5%',
              '6%',
              '7%'
            ],
            correctAnswer: 1,
            explanation: 'Adding \\$200 billion to private demand gives total demand of \\$700 billion at 5%, which equals saving at 5%. At 4% total demand of \\$800 billion exceeds saving of \\$600 billion, so the rate must rise.'
          },
          {
            question: 'In the same example, why is crowding out \\$100 billion rather than the full \\$200 billion?',
            options: [
              'The government borrowed only \\$100 billion',
              'Investment demand rose by \\$100 billion',
              'Saving rose by \\$100 billion as the rate rose',
              'Half of the borrowing came from new money'
            ],
            correctAnswer: 2,
            explanation: 'The higher real rate drew out \\$100 billion of extra saving, which covered half of the government\'s borrowing. The rest came from private investment; government borrowing does not create new money.'
          },
          {
            question: 'When adding government borrowing to a loanable funds schedule, what should you do?',
            options: [
              'Subtract it from demand at every rate',
              'Add it to supply at every rate',
              'Add it to demand only at the old rate',
              'Add it to demand at every rate'
            ],
            correctAnswer: 3,
            explanation: 'The government borrows the same amount whatever the rate, so the whole demand curve shifts right by that amount. Adding it at only one rate would not show a shift, and adding it to supply treats borrowing as saving.'
          }
        ]
      }
    },
    {
      id: 'macrofis4-tools-supplyside',
      type: 'text' as const,
      content: `
## The Same Answer from the Supply Side

Some textbooks treat a \\$200 billion deficit as **\\$200 billion less public saving**. Subtract 200 from the supply column instead:

| Real interest rate | Saving after deficit (supply − 200) | Private investment |
|---|---|---|
| 4% | 400 | 600 |
| **5%** | **500** | **500** |
| 6% | 600 | 400 |

The market clears at **5%**, and private investment is **\\$500 billion**: exactly the same rate and the same private investment as Worked Example 1. Only the total quantity on the horizontal axis differs (\\$500 billion here vs. \\$700 billion, which included the government's borrowing).

> 🔑 **AP Connection:** Either representation earns credit if it is labeled clearly and shows the real interest rate **rising**. Do not shift **both** curves for a single deficit: that counts the same borrowing twice.
`
    },
    {
      id: 'macrofis4-tools-input1',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

| Real interest rate | Saving (billions) | Private investment demand (billions) |
|---|---|---|
| 3% | 300 | 700 |
| 4% | 400 | 600 |
| 5% | 500 | 500 |
| 6% | 600 | 400 |
| 7% | 700 | 300 |

**1)** What is the equilibrium real interest rate before any government borrowing, in percent?

**2)** The government borrows \\$200 billion. What is the new equilibrium real interest rate, in percent?

**3)** How many billion dollars of private investment are crowded out?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '6', '100'],
        hint1: 'Find the row where saving equals investment demand.',
        hint2: 'Add 200 to investment demand in each row and compare with saving.',
        hint3: 'Compare private investment at the old and new rates.',
        explanation: '1) Saving = investment demand = 500 at 5%. 2) Total demand at 6% is 400 + 200 = 600, equal to saving of 600. 3) Private investment falls from 500 to 400, so 100 is crowded out.'
      }
    },
    {
      id: 'macrofis4-tools-ratio',
      type: 'text' as const,
      content: `
## The Debt-to-GDP Ratio

**Debt-to-GDP ratio = (national debt ÷ nominal GDP) × 100**

A \\$12 trillion debt means something very different for an economy producing \\$20 trillion a year than for one producing \\$5 trillion. The ratio measures the debt against the income available to support it.

### Worked Example: Debt \\$12,000 billion, nominal GDP \\$20,000 billion

Starting ratio: 12,000 ÷ 20,000 = **60%**.

Next year the government runs an \\$800 billion deficit, so debt rises to \\$12,800 billion (a 6.7% increase).

| Scenario | Nominal GDP next year | Ratio |
|---|---|---|
| A: GDP grows 5% | \\$21,000 billion | 12,800 ÷ 21,000 ≈ **61.0%** (rises) |
| B: GDP grows 7% | \\$21,400 billion | 12,800 ÷ 21,400 ≈ **59.8%** (falls) |
| C: Recession, GDP falls 2%, deficit grows to \\$1,200 billion | \\$19,600 billion | 13,200 ÷ 19,600 ≈ **67.3%** (jumps) |

### Rules from the table

- The ratio **falls** whenever GDP grows by a larger percentage than the debt, **even with a deficit** (Scenario B).
- The ratio **rises** when the debt grows faster than GDP (Scenario A).
- Recessions hit the ratio twice: deficits grow (automatic stabilizers) **and** GDP shrinks (Scenario C).
`
    },
    {
      id: 'macrofis4-tools-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country\'s debt is \\$4 trillion and its nominal GDP is \\$10 trillion. Next year the debt rises 3% and nominal GDP rises 6%. What happens to the debt-to-GDP ratio?',
            options: [
              'It falls below 40%',
              'It rises to above 40%',
              'It stays at exactly 40%',
              'It rises to exactly 43%'
            ],
            correctAnswer: 0,
            explanation: 'The ratio starts at 40%, and because GDP grows faster than the debt, it falls: \\$4.12 trillion ÷ \\$10.6 trillion is about 38.9%. A deficit can coexist with a falling ratio when the economy grows quickly.'
          },
          {
            question: 'Which change would raise a country\'s debt-to-GDP ratio the most, other things equal?',
            options: [
              'A boom that turns the deficit to surplus',
              'A recession that adds to the deficit',
              'Steady growth with a small deficit',
              'Fast growth with a balanced budget'
            ],
            correctAnswer: 1,
            explanation: 'A recession raises the numerator, because automatic stabilizers enlarge the deficit, and shrinks the denominator, because GDP falls. A surplus or a balanced budget with growth lowers the ratio, and steady growth with a small deficit changes it little.'
          }
        ]
      }
    },
    {
      id: 'macrofis4-tools-input2',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A country has a national debt of \\$9,000 billion and nominal GDP of \\$15,000 billion.

**1)** What is the debt-to-GDP ratio, in percent?

**2)** This year the government runs a \\$600 billion deficit. What is the debt at the end of the year, in billions?

**3)** Nominal GDP grows to \\$16,000 billion. What is the new debt-to-GDP ratio, in percent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '9600', '60'],
        hint1: 'Divide 9,000 by 15,000 and multiply by 100.',
        hint2: 'Add the deficit to the starting debt.',
        hint3: 'Divide the new debt by the new GDP.',
        explanation: '1) 9,000 ÷ 15,000 = 0.60, or 60%. 2) 9,000 + 600 = 9,600. 3) 9,600 ÷ 16,000 = 0.60, or 60%: the debt and GDP both grew by about 6.7%, so the ratio did not change.'
      }
    }
  ]
}
