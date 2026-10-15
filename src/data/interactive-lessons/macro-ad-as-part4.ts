export const macroAdAsPart4Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada4-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 4 of 7 — Reading AD-AS Graphs and Data**

---

| Section |
|---------|
| 📖 Drawing and Labeling the Model |
| Reading a Graph Described in Words |
| Finding Equilibrium from Schedules |
| Working Backward from Data |

> 🔑 **Key Concept:** The AD-AS graph is a tool for reading numbers: the **price level** and **real GDP** at equilibrium, the **size of an output gap**, and which curve must have shifted to produce a set of data. This part practices all three.
`
    },
    {
      id: 'macroada4-labels',
      type: 'text' as const,
      content: `
## 📖 Drawing and Labeling the Model

| Element | Correct label | Common mistake |
|---|---|---|
| Vertical axis | **Price level** (PL) | "Price" or "P", which belongs to a single-market supply and demand graph |
| Horizontal axis | **Real GDP** (or real output, Y) | "Quantity" or "Nominal GDP" |
| Downward-sloping curve | **AD** | "D" |
| Upward-sloping curve | **SRAS** | "S" or "AS" without saying short run |
| Vertical line | **LRAS**, at full-employment output | Drawing it anywhere other than Yf |
| Full-employment output | **Yf** on the horizontal axis, where LRAS starts | Leaving it unlabeled |
| Equilibrium | A point where AD crosses SRAS, with its PL and Y marked on the axes | Marking only the point |

### The three standard pictures

| Picture | Where AD crosses SRAS | Situation |
|---|---|---|
| **Long-run equilibrium** | On the LRAS line | Output = Yf, unemployment = natural rate |
| **Recessionary gap** | To the **left** of LRAS | Output < Yf, unemployment above the natural rate |
| **Inflationary gap** | To the **right** of LRAS | Output > Yf, unemployment below the natural rate |

> 🔑 **AP Connection:** Free-response graphs are scored on labels. A correctly shaped graph with "P" and "Q" on the axes, or with LRAS not drawn at full-employment output, can lose the graphing point.
`
    },
    {
      id: 'macroada4-described',
      type: 'text' as const,
      content: `
## Reading a Graph Described in Words

### Graph A

- The **LRAS** line is vertical at real GDP = **\\$12.0 trillion**.
- **AD₁** and **SRAS₁** cross at price level **115** and real GDP **\\$11.4 trillion**.

**Reading it:**

1. Equilibrium output (\\$11.4 trillion) is to the **left** of LRAS, so there is a **recessionary gap**.
2. Size of the gap: \\$12.0 − \\$11.4 = **\\$0.6 trillion**.
3. As a percent of full-employment output: 0.6 ÷ 12.0 × 100 = **5%** below potential.
4. Unemployment is **above** the natural rate, because fewer workers are needed to produce less than full-employment output.

### Graph B

- The **LRAS** line is vertical at real GDP = **\\$12.0 trillion**.
- After a shift, **AD₂** and **SRAS₁** cross at price level **125** and real GDP **\\$12.3 trillion**.

**Reading it:**

1. Output is to the **right** of LRAS: an **inflationary gap** of \\$12.3 − \\$12.0 = **\\$0.3 trillion**, or 2.5% above potential.
2. Unemployment is **below** the natural rate.
3. Compared with Graph A, the price level rose from 115 to 125 and output rose from \\$11.4 to \\$12.3 trillion. Both moved **up together**, so the shift from AD₁ to AD₂ was a demand increase along SRAS₁.
`
    },
    {
      id: 'macroada4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a correctly labeled AD-AS graph, what belongs on the vertical axis?',
            options: [
              'The inflation rate',
              'The interest rate',
              'The price level',
              'A single market price'
            ],
            correctAnswer: 2,
            explanation: 'The AD-AS model plots the price level against real GDP. The inflation rate belongs on a Phillips curve graph, the interest rate on money and loanable funds graphs, and a single price on a market supply and demand graph.'
          },
          {
            question: 'Full-employment output is \\$20 trillion. AD and SRAS cross at real GDP of \\$21 trillion. Which description is correct?',
            options: [
              'A recessionary gap of \\$1 trillion, with unemployment above the natural rate',
              'An inflationary gap of \\$1 trillion, with unemployment above the natural rate',
              'A recessionary gap of \\$1 trillion, with unemployment below the natural rate',
              'An inflationary gap of \\$1 trillion, with unemployment below the natural rate'
            ],
            correctAnswer: 3,
            explanation: 'Output above full-employment output is an inflationary gap, here \\$21 − \\$20 = \\$1 trillion. Producing more than potential requires extra workers, so unemployment is below the natural rate.'
          }
        ]
      }
    },
    {
      id: 'macroada4-schedules',
      type: 'text' as const,
      content: `
## Finding Equilibrium from Schedules

Some questions give AD and SRAS as tables instead of curves. Equilibrium is the price level where **real GDP demanded equals real GDP supplied**.

### Worked Example: The Economy of Ardena

Ardena's full-employment output is **\\$1,050 billion**.

| Price level | Real GDP demanded (AD₁), \\$ billions | Real GDP supplied (SRAS), \\$ billions |
|---|---|---|
| 90 | 1,150 | 850 |
| 95 | 1,100 | 900 |
| 100 | 1,050 | 950 |
| 105 | 1,000 | 1,000 |
| 110 | 950 | 1,050 |
| 115 | 900 | 1,100 |

**Step 1: Find equilibrium.** At a price level of **105**, both columns equal **\\$1,000 billion**.

**Step 2: Compare with Yf.** \\$1,000 billion is **\\$50 billion below** full-employment output, so Ardena has a **recessionary gap**.

**Step 3: A shift.** Government purchases rise, and real GDP demanded increases by **\\$100 billion at every price level** (AD₂ = AD₁ + 100).

| Price level | AD₂, \\$ billions | SRAS, \\$ billions |
|---|---|---|
| 105 | 1,100 | 1,000 |
| 110 | 1,050 | 1,050 |
| 115 | 1,000 | 1,100 |

The new equilibrium is price level **110** and real GDP **\\$1,050 billion**, which equals Yf. The gap is closed.

**Step 4: Notice the difference.** AD shifted right by \\$100 billion, but equilibrium output rose by only **\\$50 billion**. Because SRAS slopes upward, part of the extra demand raised the **price level** instead of output. The horizontal shift of AD is always larger than the change in equilibrium output when SRAS slopes upward.
`
    },
    {
      id: 'macroada4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Use this schedule for the economy of Brevia. Full-employment output is \\$600 billion.

| Price level | Real GDP demanded, \\$ billions | Real GDP supplied, \\$ billions |
|---|---|---|
| 100 | 640 | 560 |
| 104 | 620 | 580 |
| 108 | 600 | 600 |
| 112 | 580 | 620 |
| 116 | 560 | 640 |

**1)** What is the equilibrium price level?

**2)** Suppose real GDP demanded falls by \\$40 billion at every price level. What is the new equilibrium price level?

**3)** What is the new equilibrium real GDP, in billions of dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['108', '104', '580'],
        hint1: 'Look for the row where the two real GDP columns are equal.',
        hint2: 'Subtract 40 from every number in the demanded column, then look for a match again.',
        hint3: 'At a price level of 104, the new real GDP demanded is 620 − 40.',
        explanation: '1) At 108, demanded and supplied are both \\$600 billion, which is also full-employment output. 2) After the decrease, demanded at 104 is 620 − 40 = 580, which equals supplied at 104. 3) Real GDP is \\$580 billion, a \\$20 billion recessionary gap.'
      }
    },
    {
      id: 'macroada4-backward',
      type: 'text' as const,
      content: `
## Working Backward from Data

Exam questions often give data and ask which curve shifted. Use the patterns from Part 3: **same-direction** changes in the price level and output point to **AD**; **opposite-direction** changes point to **SRAS**.

| Country | Price level | Real GDP (\\$ trillions) | Unemployment | Most likely cause |
|---|---|---|---|---|
| P | 120 → 123 | 18.0 → 18.4 | 5.0% → 4.4% | AD shifted right |
| Q | 120 → 124 | 18.0 → 17.7 | 5.0% → 5.9% | SRAS shifted left |
| R | 120 → 118 | 18.0 → 17.6 | 5.0% → 6.1% | AD shifted left |
| S | 120 → 119 | 18.0 → 18.5 | 5.0% → 4.6% | SRAS shifted right |

### Reading the unemployment column

Unemployment moves **opposite** to real output in every row. That is the link between the AD-AS model and the labor market: more output requires more labor, so unemployment falls when real GDP rises.

### A caution about inflation data

Data often report the **inflation rate** rather than the price level. A positive inflation rate means the price level is **rising**, even if the inflation rate itself fell from 5% to 3%. Only a **negative** inflation rate means the price level fell.

> 🔑 **AP Connection:** When a question says "the price level and real GDP both increased," the answer is an AD increase. When it says "the price level increased and real GDP decreased," the answer is an SRAS decrease. Write the curve **and** the direction.
`
    },
    {
      id: 'macroada4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Over one year, a country\'s price level rose from 140 to 147 while real GDP fell from \\$3.2 trillion to \\$3.1 trillion. Which shift best explains the data?',
            options: [
              'SRAS shifted left',
              'AD shifted right',
              'AD shifted left',
              'LRAS shifted right'
            ],
            correctAnswer: 0,
            explanation: 'The price level rose while real GDP fell, which is the opposite-direction pattern of a supply decrease, so SRAS shifted left. An AD shift would move the two in the same direction, and a rightward LRAS shift would tend to raise output.'
          },
          {
            question: 'Inflation in a country slowed from 6% to 2% last year. What happened to the price level?',
            options: [
              'It fell by about four percent',
              'It rose, but more slowly than before',
              'It stayed at the same level',
              'It fell to about two percent of its old level'
            ],
            correctAnswer: 1,
            explanation: 'A positive inflation rate of 2% means the price level still rose, just more slowly than the year before. A falling price level would require a negative inflation rate.'
          },
          {
            question: 'An AD increase of \\$80 billion at every price level occurs while SRAS slopes upward. Equilibrium real GDP will most likely rise by',
            options: [
              'exactly \\$80 billion',
              'more than \\$80 billion',
              'under \\$80 billion',
              'zero, as only prices rise'
            ],
            correctAnswer: 2,
            explanation: 'With an upward-sloping SRAS, some of the extra demand raises the price level, so equilibrium output rises by less than the horizontal shift of AD. Output would rise by the full amount only if the price level did not change.'
          }
        ]
      }
    }
  ]
}
