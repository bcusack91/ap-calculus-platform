export const macroFiscalPolicyToolsPart5Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {
      id: 'macrofis5-tools-intro',
      type: 'text' as const,
      content: `
# 🛠️ Fiscal Policy Tools

**Part 5 of 7 — Supply-Side Fiscal Policy and Long-Run Growth**

---

| Section |
|---------|
| 📖 Demand-Side vs. Supply-Side Effects |
| Worked Example: A Broadband and Training Program |
| The Trade-Off with Crowding Out |
| Misconceptions to Avoid |

> 🔑 **Key Concept:** Some fiscal policies do more than shift AD. Public investment in **infrastructure**, **education and training** and **research and development**, and tax incentives for **private investment**, add to the economy's productive capacity. They shift **AD** in the short run and **LRAS** (potential output) in the long run. If they are financed by borrowing, crowding out of private capital works against part of that long-run gain.
`
    },
    {
      id: 'macrofis5-tools-compare',
      type: 'text' as const,
      content: `
## 📖 Demand-Side vs. Supply-Side Effects

| Policy | Short run: effect on AD | Long run: effect on LRAS |
|---|---|---|
| **Building highways, ports and broadband** | G ↑ → AD right | Public capital ↑ → LRAS right |
| **Funding education and job training** | G ↑ → AD right | Human capital ↑ → LRAS right |
| **Grants for research and development** | G ↑ → AD right | Technology improves → LRAS right |
| **Tax credit for business investment** | I ↑ → AD right | Private physical capital ↑ → LRAS right |
| **One-time tax rebate to households** | C ↑ → AD right | Little or no direct effect |
| **Larger transfer payments** | C ↑ → AD right | Little or no direct effect |

### The key distinction

- **Demand-side effect:** any increase in G, cut in taxes or increase in transfers raises spending **now**. It moves the economy along SRAS toward or beyond Yf.
- **Supply-side effect:** only spending or incentives that add **capital, skills or technology** raise the economy's capacity. LRAS shifts right, potential output rises, and the PPC shifts outward.

A policy belongs in the supply-side column because of **what it builds**, not because of how big it is. A \\$100 billion rebate is a large demand-side stimulus, but it adds nothing to productive capacity by itself.

> 🔑 **AP Connection:** If a question says a policy "increases the productivity of workers" or "increases the economy's capital stock," it is asking about **LRAS** and long-run growth, not just AD.
`
    },
    {
      id: 'macrofis5-tools-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which fiscal policy is most likely to shift LRAS to the right in the long run?',
            options: [
              'A one-time tax rebate to all households',
              'Larger monthly Social Security checks',
              'Federal grants for basic research',
              'A temporary cut in the federal gasoline tax'
            ],
            correctAnswer: 2,
            explanation: 'Research grants can produce new technology, which raises potential output. A rebate, larger Social Security checks and a gasoline tax cut raise spending in the short run but add no capital, skills or technology.'
          },
          {
            question: 'A government offers firms a tax credit for buying new equipment. What are the expected short-run and long-run effects?',
            options: [
              'AD shifts left; later LRAS shifts right',
              'SRAS shifts left; later AD shifts right',
              'AD shifts right; LRAS never moves',
              'AD shifts right; later LRAS shifts right'
            ],
            correctAnswer: 3,
            explanation: 'Firms buy more equipment, which is investment spending, so AD rises first; the added capital then raises potential output. Saying LRAS never moves ignores the larger capital stock the credit creates.'
          },
          {
            question: 'Why does a large one-time tax rebate usually not count as a supply-side policy?',
            options: [
              'It adds nothing to productive capacity',
              'It shifts AD to the left in the short run',
              'It is a form of monetary policy',
              'It is too small to change real GDP'
            ],
            correctAnswer: 0,
            explanation: 'A rebate raises disposable income and consumption, a demand-side effect, but it builds no capital, skills or technology. It shifts AD right rather than left, it is a fiscal tool, and its size is not what decides the category.'
          }
        ]
      }
    },
    {
      id: 'macrofis5-tools-example',
      type: 'text' as const,
      content: `
## Worked Example: A Broadband and Training Program

A hypothetical economy begins in long-run equilibrium: real GDP = Yf = **\\$1,000 billion**, price level **100**. The government starts spending \\$30 billion a year on rural broadband and worker training and keeps the program running.

| Stage | What shifts | Real GDP | Price level | Full-employment output |
|---|---|---|---|---|
| Start | — | \\$1,000 billion | 100 | \\$1,000 billion |
| Short run (construction years) | AD right | \\$1,030 billion | 104 | \\$1,000 billion |
| Long run (projects finished, workers trained) | LRAS and SRAS right | \\$1,040 billion | 102 | **\\$1,040 billion** |

**Short run:** the spending is government purchases, so AD shifts right. Output rises above the old Yf and the price level rises, as with any fiscal stimulus.

**Long run:** finished broadband lines and better-trained workers raise productivity. LRAS shifts right to \\$1,040 billion. Because capacity has grown, the economy can sustain higher output, and the extra supply holds the price level below its short-run peak.

Compare this with Part 2 of the Fiscal Policy topic: stimulus that builds nothing leaves real GDP back at the **old** Yf in the long run, with only a higher price level.
`
    },
    {
      id: 'macrofis5-tools-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Government spending on job training increases ___ capital.',
            options: ['physical', 'financial', 'human', 'public']
          },
          {
            label: 'In the short run, public spending on infrastructure shifts ___ to the right.',
            options: ['AD', 'LRAS', 'the PPC', 'SRAS']
          },
          {
            label: 'In the long run, a policy that raises productivity shifts ___ to the right.',
            options: ['money supply', 'only AD', 'LRAS', 'the Phillips curve']
          },
          {
            label: 'Long-run economic growth is shown as an outward shift of the ___.',
            options: ['AD curve', 'demand for loanable funds', 'money supply', 'PPC']
          }
        ],
        correctAnswers: ['human', 'AD', 'LRAS', 'PPC'],
        hint1: 'This kind of capital lives in workers\' knowledge and skills.',
        hint2: 'Spending happens before anything is finished.',
        hint3: 'Potential output is shown by this vertical curve.',
        explanation: 'Training builds human capital. Infrastructure spending raises AD first, and the finished projects raise productivity, shifting LRAS right. Long-run growth appears as an outward shift of the PPC.'
      }
    },
    {
      id: 'macrofis5-tools-tradeoff',
      type: 'text' as const,
      content: `
## The Trade-Off with Crowding Out

Public investment is usually financed by borrowing, and Part 3 showed what borrowing does: it raises the real interest rate and **crowds out private investment**. So a deficit-financed growth policy pulls the capital stock in two directions.

| Force | Effect on future capacity |
|---|---|
| New public capital (roads, broadband, research, skills) | **Raises** potential output |
| Less private capital (crowded-out factories and equipment) | **Lowers** potential output growth |
| Higher future interest payments on the debt | Leaves less room for future public investment or tax cuts |

### Worked Example: Netting the effects

The government borrows \\$100 billion for highways. The real interest rate rises, and private investment falls by \\$40 billion.

- If the highways raise future output by more than the lost \\$40 billion of private capital would have, potential output still grows **faster** than without the program.
- If the money goes to projects with little payoff, the economy can end up with **less** capacity than before, because the crowded-out private capital was lost.

The same logic applies to tax incentives for investment: if they are financed by borrowing, part of the private investment they encourage is offset by private investment crowded out.

> 🔑 **AP Connection:** An AP question may ask how deficit-financed spending affects long-run growth. A strong answer names the crowding-out channel: **higher real interest rate → less private investment → slower growth of the capital stock and potential output.**
`
    },
    {
      id: 'macrofis5-tools-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "The deficit and the debt are the same thing." | The deficit is one year's shortfall; the debt is the accumulated total. A falling deficit still adds to the debt. |
| "When the government borrows, it prints money." | The Treasury borrows existing money by selling securities. The money supply changes through the Federal Reserve's actions and bank lending, not through Treasury borrowing. |
| "Most of the debt is owed to foreign countries." | Most U.S. federal debt is held domestically: by U.S. households, firms, banks and funds, by the Federal Reserve and by government trust funds. |
| "Crowding out makes fiscal policy useless." | Crowding out usually **reduces** the effect on AD; it is rarely complete, and it is small in a deep recession. |
| "Supply-side policy only affects AS." | Most supply-side fiscal policies raise spending first, so AD shifts right in the short run before LRAS shifts. |
| "Any government spending raises potential output." | Only spending that adds capital, skills or technology shifts LRAS. |
`
    },
    {
      id: 'macrofis5-tools-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government borrows to fund new highways. Which combination determines whether long-run growth speeds up?',
            options: [
              'The rise in the price level vs. the rise in tax revenue',
              'Gains from new public capital vs. lost private investment',
              'The size of the money multiplier vs. the reserve ratio',
              'Gains in net exports vs. losses in consumer spending'
            ],
            correctAnswer: 1,
            explanation: 'Highways add public capital, but the borrowing raises the real interest rate and crowds out some private capital, so the net effect on capacity depends on which is larger. The money multiplier, net exports and the price level do not decide long-run capacity.'
          },
          {
            question: 'Which statement about the U.S. federal debt is accurate?',
            options: [
              'Most is held by foreign governments',
              'It is repaid by printing new currency',
              'Most of it is held by domestic holders',
              'It falls whenever the deficit falls'
            ],
            correctAnswer: 2,
            explanation: 'U.S. households, institutions, the Federal Reserve and federal trust funds together hold most of the debt. It is financed by borrowing, not printing currency, and it falls only when there is a surplus.'
          },
          {
            question: 'An economy is in a deep recession. The government borrows to build bridges. Compared with doing the same thing at full employment, the crowding out is likely to be',
            options: [
              'larger',
              'about the same',
              'complete',
              'smaller'
            ],
            correctAnswer: 3,
            explanation: 'With weak private demand for loans and idle resources, extra government borrowing raises the real interest rate only slightly, so little private investment is displaced. Crowding out is largest near full employment.'
          }
        ]
      }
    }
  ]
}
