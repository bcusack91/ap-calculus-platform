export const macroAdAsPart2Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada2-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 2 of 7 — SRAS and LRAS in Depth**

---

| Section |
|---------|
| 📖 The Short Run and the Long Run in Macroeconomics |
| Why SRAS Slopes Upward |
| What Shifts SRAS |
| Why LRAS Is Vertical, and What Shifts It |
| Sorting Events by Curve |

> 🔑 **Key Concept:** The difference between the short run and the long run in macroeconomics is about **wages and input prices**. In the short run they are sticky, so a higher price level raises the quantity of output firms supply. In the long run they fully adjust, so output returns to the level set by the economy's resources and technology: **full-employment output**.
`
    },
    {
      id: 'macroada2-runs',
      type: 'text' as const,
      content: `
## 📖 The Short Run and the Long Run in Macroeconomics

In AP Macroeconomics, "short run" and "long run" are not measured in months. They are defined by whether **nominal wages and other input prices** have had time to adjust to changes in the price level.

| | Short run | Long run |
|---|---|---|
| **Nominal wages and input prices** | Sticky: fixed by contracts, custom and imperfect information | Flexible: fully adjust to the price level |
| **Output** | Can be above or below full-employment output | Returns to full-employment output |
| **Unemployment** | Can be above or below the natural rate | Equals the natural rate |
| **Aggregate supply curve** | SRAS slopes **upward** | LRAS is **vertical** at full-employment output |

### Why input prices are sticky

- **Wage contracts.** Many workers have annual salaries or multi-year union contracts that fix the nominal wage.
- **Menu costs.** Changing posted prices and price lists takes time and money, so firms change them only occasionally.
- **Imperfect information.** Workers and firms do not instantly see that the overall price level has changed, so they keep negotiating wages based on last year's prices.
- **Resistance to wage cuts.** Employers are reluctant to cut nominal pay because it hurts morale, so wages are especially slow to fall.

> 🔑 **AP Connection:** "Sticky wages" is the standard reason the AP exam accepts for the upward slope of SRAS and for why the economy can stay away from full employment for a while.
`
    },
    {
      id: 'macroada2-slope',
      type: 'text' as const,
      content: `
## Why SRAS Slopes Upward

Short-run aggregate supply shows the total real output firms are willing to produce at each price level **while nominal wages and other input prices are fixed**.

### Worked Example: The Price Level Rises 5%

A bicycle maker sells each bike for \\$400. Its labor cost per bike is \\$240 under a one-year wage contract, and its other input costs are \\$100 per bike.

| | Before | After the price level rises 5% |
|---|---|---|
| Price of a bike | \\$400 | \\$420 |
| Labor cost per bike (contract) | \\$240 | \\$240 |
| Other input costs per bike (also sticky) | \\$100 | \\$100 |
| Profit per bike | \\$60 | \\$80 |

Profit per bike rises by one third, so the firm adds a shift and produces more bikes. When firms across the economy do the same, real output rises as the price level rises. That is a **movement along** SRAS.

The same logic runs in reverse: if the price level falls while wages stay fixed, profit per unit shrinks and firms cut output.

### Movement along SRAS vs. a shift of SRAS

- A change in the **price level** moves the economy **along** SRAS.
- A change in **costs of production at every price level** (wages, energy, productivity, taxes on business) **shifts** SRAS.
`
    },
    {
      id: 'macroada2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the AD-AS model, what distinguishes the short run from the long run?',
            options: [
              'Whether nominal wages and other input prices have fully adjusted',
              'Whether the Federal Reserve has changed its policy rate yet',
              'Whether more than one year has passed since a change',
              'Whether firms have finished building new factories'
            ],
            correctAnswer: 0,
            explanation: 'The macro short run is the period when nominal wages and input prices are sticky; the long run is when they have fully adjusted. It is not tied to a calendar length, to Fed decisions, or to factory construction.'
          },
          {
            question: 'Which statement best explains why the SRAS curve slopes upward?',
            options: [
              'A higher price level raises household wealth and spending on output',
              'A higher price level raises profit per unit when wages are fixed',
              'A higher price level lowers interest rates and raises investment',
              'A higher price level makes exports cheaper for foreign buyers'
            ],
            correctAnswer: 1,
            explanation: 'When output prices rise while wages and other input prices stay fixed, each unit becomes more profitable, so firms produce more. The wealth, interest rate and export arguments are about aggregate demand, and the last two also have the direction wrong.'
          },
          {
            question: 'The price level rises while nominal wage contracts remain in place. In the AD-AS model, this causes',
            options: [
              'a leftward shift of the SRAS curve',
              'a rightward shift of the SRAS curve',
              'a movement along the SRAS curve',
              'a rightward shift of the LRAS curve'
            ],
            correctAnswer: 2,
            explanation: 'A change in the price level is shown as a movement along the SRAS curve, not a shift. SRAS shifts only when production costs change at every price level, and LRAS shifts only when resources or technology change.'
          }
        ]
      }
    },
    {
      id: 'macroada2-shifters',
      type: 'text' as const,
      content: `
## What Shifts SRAS

SRAS shifts when the **cost of producing output changes at every price level**. Higher costs shift SRAS **left** (a decrease); lower costs shift it **right** (an increase).

| Determinant | SRAS shifts LEFT when… | SRAS shifts RIGHT when… |
|---|---|---|
| **Nominal wages** | Wages rise across the economy | Wages fall across the economy |
| **Prices of other inputs** (energy, raw materials) | Oil or commodity prices rise | Oil or commodity prices fall |
| **Productivity** | Productivity falls (for example, a natural disaster damages equipment) | Productivity rises (better technology, better-trained workers) |
| **Expected inflation** | Workers and firms expect higher inflation and build it into wages and prices | Expected inflation falls |
| **Business taxes and subsidies** | Taxes on business rise or subsidies are cut | Business taxes fall or subsidies rise |
| **Government regulation** | Costly new regulations | Regulations that reduce compliance costs |
| **Supply shocks** | Drought, war or a pandemic disrupts production | A bumper harvest or a new low-cost energy source |

### Expected inflation deserves extra attention

If workers expect prices to rise 6% next year, they bargain for raises of about 6% to protect their real wage. Firms that expect higher prices for their inputs set higher prices for their output. Both raise costs at every price level, so **higher expected inflation shifts SRAS left** before actual prices have changed. This idea drives long-run adjustment in Part 5 and the Phillips curve topic.

> ⚠️ **Watch the wording:** "Wages rise" shifts SRAS left. "The price level rises" is a movement along SRAS. On the exam, check whether a change is in a **cost** or in the **price level**.
`
    },
    {
      id: 'macroada2-lras',
      type: 'text' as const,
      content: `
## Why LRAS Is Vertical, and What Shifts It

In the long run, nominal wages and input prices catch up with the price level. If prices double and wages double too, firms' profit per unit, measured in real terms, is unchanged, so they have no reason to produce more. Output is set by **real** factors: the quantity and quality of resources and the technology used to combine them.

That output level has several names, all meaning the same thing:

| Name | Meaning |
|---|---|
| **Full-employment output (Yf)** | Output when unemployment equals the natural rate |
| **Potential output** | The economy's sustainable maximum given its resources and technology |
| **Long-run equilibrium output** | Where AD, SRAS and LRAS all intersect |

The LRAS curve is a vertical line at Yf. A point **on** the PPC with full employment corresponds to output **on** LRAS.

### What shifts LRAS

| Shifts LRAS RIGHT (economic growth) | Shifts LRAS LEFT |
|---|---|
| A larger labor force (population growth, immigration, higher participation) | A smaller labor force |
| More physical capital (factories, equipment, infrastructure) | Destruction of capital (war, disaster) |
| More human capital (education, training) | Loss of skills or health |
| Better technology | Loss of usable natural resources |
| A lower natural rate of unemployment | A higher natural rate of unemployment |

Anything that shifts LRAS also shifts SRAS in the same direction, because more resources or better technology lower costs at every price level. The reverse is not true: many events shift **only** SRAS.
`
    },
    {
      id: 'macroada2-sorting',
      type: 'text' as const,
      content: `
## Sorting Events by Curve

| Event | Curve(s) affected | Direction |
|---|---|---|
| A temporary spike in the world price of oil | SRAS only | Left |
| Nominal wages rise after workers expect higher inflation | SRAS only | Left |
| A one-year subsidy paid to all manufacturers | SRAS only | Right |
| A lasting technological advance in production | SRAS and LRAS | Right |
| A large rise in the education level of the workforce | SRAS and LRAS | Right |
| A war destroys a large share of factories and roads | SRAS and LRAS | Left |
| Consumers become more optimistic about the future | AD | Right |
| The government raises personal income taxes | AD | Left |

### A quick test

1. Does the event change **spending** (C, I, G or Xn) at every price level? Then it shifts **AD**.
2. Does it change **costs of production** at every price level? Then it shifts **SRAS**.
3. Does it change the **economy's capacity** (resources, technology, NRU) for good? Then it shifts **LRAS too**.

> 🔑 **AP Connection:** Free-response questions often ask for "the effect on the LRAS curve." A temporary input-price change, a wage change or a change in expected inflation shifts **only SRAS**, so the correct answer for LRAS is "no change."
`
    },
    {
      id: 'macroada2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Workers across the economy come to expect that inflation will rise from 2% to 5% next year. What is the most likely immediate effect in the AD-AS model?',
            options: [
              'Leftward shift of LRAS',
              'Rightward shift of SRAS',
              'Leftward shift of AD',
              'Leftward shift of SRAS'
            ],
            correctAnswer: 3,
            explanation: 'Higher expected inflation leads workers to demand higher nominal wages and firms to raise prices, which raises costs at every price level and shifts SRAS left. Potential output is unchanged, so LRAS does not move.'
          },
          {
            question: 'A country invests heavily in worker training, and the new skills raise output per worker permanently. How do the aggregate supply curves change?',
            options: [
              'SRAS and LRAS shift right',
              'SRAS alone shifts right',
              'LRAS alone shifts right',
              'SRAS shifts right, LRAS left'
            ],
            correctAnswer: 0,
            explanation: 'More human capital raises the economy\'s capacity, which shifts LRAS right, and it lowers production costs at every price level, which shifts SRAS right too. Any lasting increase in capacity moves both curves the same way.'
          },
          {
            question: 'Which event would shift the SRAS curve to the left but leave the LRAS curve unchanged?',
            options: [
              'A permanent fall in the size of the labor force',
              'A brief spike in natural gas prices',
              'An earthquake that destroys many factories',
              'A loss of farmland to rising sea levels'
            ],
            correctAnswer: 1,
            explanation: 'A temporary input-price increase raises costs without changing the economy\'s long-run resources, so only SRAS shifts. A smaller labor force, destroyed factories and lost farmland all reduce potential output, so they shift LRAS left as well.'
          }
        ]
      }
    },
    {
      id: 'macroada2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the macro short run, nominal wages are ___.',
            options: ['sticky', 'flexible', 'zero', 'indexed']
          },
          {
            label: 'An increase in the price of oil shifts SRAS to the ___.',
            options: ['left', 'right', 'top', 'bottom']
          },
          {
            label: 'The LRAS curve is vertical at ___ output.',
            options: ['full-employment', 'equilibrium-demand', 'short-run', 'maximum-capacity']
          },
          {
            label: 'A lasting increase in the capital stock shifts ___ to the right.',
            options: ['both SRAS and LRAS', 'only SRAS', 'only LRAS', 'only AD']
          }
        ],
        correctAnswers: ['sticky', 'left', 'full-employment', 'both SRAS and LRAS'],
        hint1: 'Contracts and menu costs keep wages from adjusting right away.',
        hint2: 'Higher costs mean less output at every price level.',
        hint3: 'LRAS marks the output level where unemployment equals the natural rate.',
        explanation: 'Sticky nominal wages give SRAS its upward slope. Higher oil prices raise costs and shift SRAS left. LRAS is vertical at full-employment output, and a lasting rise in the capital stock raises capacity and lowers costs, so both SRAS and LRAS shift right.'
      }
    }
  ]
}
