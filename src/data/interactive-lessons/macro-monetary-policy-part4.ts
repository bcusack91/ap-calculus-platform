export const macroMonetaryPolicyPart4Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {
      id: 'macromon4-intro',
      type: 'text' as const,
      content: `
# 🏦 Monetary Policy

**Part 4 of 7 — Reading Money Market and AD-AS Data**

---

| Section |
|---------|
| 📖 Finding Equilibrium from a Money Demand Schedule |
| Shifting Money Supply and Money Demand with Numbers |
| From the Interest Rate to Investment |
| Two Graphs Side by Side |

> 🔑 **Key Concept:** Exam questions often give a **money demand schedule** or describe a graph in words, then ask what happens to the interest rate, investment and AD. Read the schedule like a supply-and-demand table: equilibrium is the interest rate at which **quantity of money demanded = money supply**.
`
    },
    {
      id: 'macromon4-schedule',
      type: 'text' as const,
      content: `
## 📖 Finding Equilibrium from a Money Demand Schedule

The table shows money demand in the economy of Northland (billions of dollars).

| Nominal interest rate | Quantity of money demanded (MD₁) |
|---|---|
| 7% | \\$300 |
| 6% | \\$350 |
| 5% | \\$400 |
| 4% | \\$450 |
| 3% | \\$500 |
| 2% | \\$550 |

### Worked example 1: equilibrium

The money supply is \\$400 billion. Find the row where quantity demanded = \\$400 billion: **5%**. That is the equilibrium nominal interest rate.

### Worked example 2: what if the rate were 6%?

At 6%, people want to hold only \\$350 billion, but \\$400 billion exists. There is an **excess supply of money** of \\$50 billion. People use it to buy bonds, bond prices rise, and the interest rate falls back toward 5%.

### Worked example 3: what if the rate were 4%?

At 4%, people want \\$450 billion, but only \\$400 billion exists: an **excess demand for money** of \\$50 billion. People sell bonds, bond prices fall, and the rate rises back toward 5%.

| Interest rate above equilibrium | Interest rate below equilibrium |
|---|---|
| Excess supply of money | Excess demand for money |
| People buy bonds | People sell bonds |
| Bond prices rise, rate falls | Bond prices fall, rate rises |
`
    },
    {
      id: 'macromon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the Northland schedule, the money supply is \\$500 billion. What is the equilibrium nominal interest rate?',
            options: [
              '3%',
              '5%',
              '7%',
              '2%'
            ],
            correctAnswer: 0,
            explanation: 'Quantity of money demanded equals \\$500 billion at 3%, so that is where the vertical money supply crosses money demand. At 5% people would want only \\$400 billion.'
          },
          {
            question: 'In Northland the money supply is \\$400 billion, but the interest rate is temporarily 6%. What happens next?',
            options: [
              'People sell bonds, and the rate rises above 6%',
              'People buy bonds, and the rate falls back toward 5%',
              'The Fed sells bonds, and the rate stays at 6%',
              'Money demand shifts right until it reaches 6%'
            ],
            correctAnswer: 1,
            explanation: 'At 6% there is an excess supply of money, so people buy bonds, which raises bond prices and pushes the rate down to the 5% equilibrium. Selling bonds would happen only with an excess demand for money.'
          }
        ]
      }
    },
    {
      id: 'macromon4-shifts',
      type: 'text' as const,
      content: `
## Shifting Money Supply and Money Demand with Numbers

Keep using the Northland schedule. Start at MS = \\$400 billion and i = 5%.

### Case 1: the Fed increases the money supply

The Fed buys bonds and MS rises by \\$100 billion to \\$500 billion. The new equilibrium is the row where quantity demanded = \\$500 billion: **3%**. The rate falls 2 percentage points.

### Case 2: money demand increases with a fixed money supply

Real GDP rises, and at every interest rate people now want \\$100 billion more money (MD₂):

| Nominal interest rate | MD₁ | MD₂ |
|---|---|---|
| 7% | \\$300 | \\$400 |
| 6% | \\$350 | \\$450 |
| 5% | \\$400 | \\$500 |
| 4% | \\$450 | \\$550 |

With MS still \\$400 billion, the new equilibrium is where MD₂ = \\$400 billion: **7%**. The rate rises 2 points, and the quantity of money stays \\$400 billion.

### Case 3: the Fed keeps the rate steady

If the Fed wants to hold the rate at 5% after MD rises to MD₂, it must raise MS to \\$500 billion, the quantity demanded on MD₂ at 5%. This is called **accommodating** the rise in money demand.

> 🔑 **AP Connection:** "What must the Fed do to keep the interest rate constant?" means: find the quantity demanded on the **new** MD curve at the **old** rate, and change MS to match.
`
    },
    {
      id: 'macromon4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Use the Northland MD₁ schedule (7% → \\$300, 6% → \\$350, 5% → \\$400, 4% → \\$450, 3% → \\$500, 2% → \\$550, in billions).

**1)** The money supply is \\$450 billion. What is the equilibrium nominal interest rate, in percent?

**2)** The Fed wants to lower the rate from 4% to 2%. By how many billions of dollars must it increase the money supply?

**3)** At a rate of 6% with MS = \\$450 billion, what is the excess supply of money, in billions of dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '100', '100'],
        hint1: 'Find the row where quantity demanded equals \\$450 billion.',
        hint2: 'Compare quantity demanded at 2% with quantity demanded at 4%.',
        hint3: 'Excess supply = money supply − quantity demanded at 6%.',
        explanation: '1) Quantity demanded is \\$450 billion at 4%. 2) At 2% people want \\$550 billion, so MS must rise from \\$450 billion by \\$100 billion. 3) At 6% people want \\$350 billion, so \\$450 − \\$350 = \\$100 billion is an excess supply.'
      }
    },
    {
      id: 'macromon4-investment',
      type: 'text' as const,
      content: `
## From the Interest Rate to Investment

Firms undertake a project when its expected rate of return is at least the **real** interest rate they must pay (or could earn elsewhere). An **investment demand** schedule lists how much investment firms plan at each real interest rate.

| Real interest rate | Planned investment (billions) |
|---|---|
| 5% | \\$200 |
| 4% | \\$240 |
| 3% | \\$280 |
| 2% | \\$320 |
| 1% | \\$360 |

Expected inflation in Northland is 2%.

### Worked example: the Fed raises the money supply from \\$400 to \\$500 billion

1. Money market: nominal rate falls from 5% to 3%.
2. Real rate (short run, expected inflation fixed at 2%): falls from 5% − 2% = **3%** to 3% − 2% = **1%**.
3. Investment schedule: planned investment rises from \\$280 billion to \\$360 billion, an increase of **\\$80 billion**.
4. AD shifts right. With a spending multiplier, AD shifts by more than \\$80 billion at each price level (Multiplier Effect lesson).

> 🔑 **Key Concept:** The money market sets the **nominal** rate; investment responds to the **real** rate. In the short run they move together, so it is enough on most FRQs to say "the interest rate falls, so investment rises."
`
    },
    {
      id: 'macromon4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the Northland schedules, the money supply falls from \\$400 billion to \\$350 billion while expected inflation stays at 2%. By how much does planned investment change?',
            options: [
              'It falls by \\$40 billion',
              'It falls by \\$80 billion',
              'It rises by \\$40 billion',
              'It does not change at all'
            ],
            correctAnswer: 0,
            explanation: 'The nominal rate rises from 5% to 6%, so the real rate rises from 3% to 4%, and planned investment falls from \\$280 billion to \\$240 billion. An \\$80 billion change would need a 2-point move in the real rate.'
          },
          {
            question: 'Money demand rises because of higher real GDP, and the Fed does not change the money supply. What happens to investment?',
            options: [
              'Investment rises, because higher income raises profits',
              'Investment does not change, because MS did not change',
              'Investment falls, because the interest rate rises',
              'Investment rises, because the quantity of money rises'
            ],
            correctAnswer: 2,
            explanation: 'With a fixed money supply, higher money demand raises the equilibrium interest rate, and a higher rate reduces interest-sensitive investment. The quantity of money does not change when only MD shifts.'
          },
          {
            question: 'After money demand rises, the Fed wants to keep the interest rate unchanged. What should it do?',
            options: [
              'Raise IORB enough to offset the higher demand',
              'Sell bonds to reduce the quantity of money',
              'Raise the reserve requirement on deposits',
              'Buy bonds to increase the money supply'
            ],
            correctAnswer: 3,
            explanation: 'Higher money demand would push the rate up, so the Fed must increase the money supply to hold it steady, which in the limited-reserves model means buying bonds. Selling bonds, raising IORB or raising the reserve requirement would push rates even higher.'
          }
        ]
      }
    },
    {
      id: 'macromon4-sidebyside',
      type: 'text' as const,
      content: `
## Two Graphs Side by Side

FRQs often ask for two graphs: the **money market** and the **AD-AS** model. Here is how to describe an expansionary policy in words, the way you would label your drawings.

### Money market

- Axes: nominal interest rate (vertical), quantity of money (horizontal).
- Downward-sloping MD; vertical MS₁ at Q₁; equilibrium rate i₁.
- After a bond purchase: MS₂ to the right of MS₁; new equilibrium rate i₂ **below** i₁.

### AD-AS

- Axes: price level (vertical), real GDP (horizontal).
- AD₁, upward-sloping SRAS, vertical LRAS at full-employment output Yf; initial equilibrium at Y₁ **left** of Yf (recessionary gap).
- After the policy: AD₂ to the right of AD₁; new equilibrium with **higher** real GDP (Y₂) and **higher** price level (PL₂).

### Connecting the graphs

| Money market shows | Which causes | AD-AS shows |
|---|---|---|
| MS → right, i falls | Investment and interest-sensitive consumption rise | AD → right, real GDP and price level rise |
| MS → left, i rises | Investment and interest-sensitive consumption fall | AD → left, real GDP and price level fall |

Under ample reserves, describe the money market result the same way (a lower or higher nominal interest rate), and name the tool as a change in IORB.

> 🔑 **AP Connection:** Label everything: both axes, every curve with a subscript (MS₁, MS₂), and the old and new equilibrium values on the axes. Unlabeled shifts earn no graph points.
`
    }
  ]
};
