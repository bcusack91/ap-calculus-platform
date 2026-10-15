export const macroOpenEconomyPart5Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {
      id: 'macroope5-intro',
      type: 'text' as const,
      content: `
# 🌏 Open Economy Macroeconomics

**Part 5 of 7 — Nuance and Misconceptions**

---

| Section |
|---------|
| 📖 Nominal or Real? Matching the Rate to the Graph |
| Inflows and Outflows: Getting the Signs Right |
| Is a Strong Currency Good? |
| Saving, Investment and Growth |
| Misconceptions Table |

> 🔑 **Key Concept:** Most lost points in open-economy questions come from small slips: labeling the wrong interest rate, shifting the wrong curve for a capital flow, or calling a currency change "good" or "bad" without saying for whom. This part collects the distinctions that separate a correct chain from an almost-correct one.
`
    },
    {
      id: 'macroope5-rates',
      type: 'text' as const,
      content: `
## 📖 Nominal or Real? Matching the Rate to the Graph

| Graph | Rate on the vertical axis | Why |
|---|---|---|
| Money market | **Nominal** interest rate | The cost of holding money is the nominal return given up on bonds |
| Loanable funds market | **Real** interest rate | Savers and borrowers care about purchasing power gained or paid |
| Capital flows (6.6) | **Real** rates, compared across countries | Investors compare inflation-adjusted returns |

### Why expansionary monetary policy lowers both rates in the short run

Recall r = i − expected inflation. Suppose the nominal rate is 5% and expected inflation is 2%, so r = 3%.

| | Nominal rate (i) | Expected inflation | Real rate (r) |
|---|---|---|---|
| Before the Fed acts | 5% | 2% | 3% |
| Short run after expansionary policy | 4% | 2% (slow to adjust) | **2%** |

Because people's inflation expectations do not jump at once, a cut in the nominal rate is also a cut in the real rate. That is why the AP exam treats lower interest rates from monetary policy as raising investment **and** causing capital outflow.

In the **long run**, monetary policy does not change real output or the real interest rate; only the price level adjusts. The long-run analysis belongs to the monetary policy topic.

> 🔑 **AP Connection:** If a question says "real interest rate," think loanable funds or capital flows. If it says "nominal interest rate," think money market. If it just says "interest rate" after a monetary policy action, the short-run answer is that both nominal and real rates move the same way.
`
    },
    {
      id: 'macroope5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which interest rate belongs on the vertical axis of the loanable funds graph?',
            options: [
              'The nominal interest rate',
              'The federal funds rate',
              'The real interest rate',
              'The discount rate'
            ],
            correctAnswer: 2,
            explanation: 'Savers and borrowers in the loanable funds market care about the inflation-adjusted return, so the axis is the real interest rate. The nominal rate belongs on the money market graph, and the federal funds and discount rates are specific short-term rates.'
          },
          {
            question: 'The Fed lowers the interest rate on reserve balances, and short-term nominal rates fall by 1 percentage point. Expected inflation does not change right away. What happens to the real interest rate in the short run?',
            options: [
              'It rises by about one point',
              'It stays at its old level',
              'It falls by about two points',
              'It falls by about one point'
            ],
            correctAnswer: 3,
            explanation: 'With expected inflation unchanged, r = i − expected inflation falls by the same amount as the nominal rate. Real rates stay unchanged only in the long run, when prices and expectations have adjusted.'
          }
        ]
      }
    },
    {
      id: 'macroope5-signs',
      type: 'text' as const,
      content: `
## Inflows and Outflows: Getting the Signs Right

The same capital flow shows up in three places. Keep this table in view:

| | **Capital inflow to the U.S.** (foreigners buy U.S. assets) | **Capital outflow from the U.S.** (Americans buy foreign assets) |
|---|---|---|
| U.S. loanable funds | Supply shifts **right** | Supply shifts **left** |
| U.S. real interest rate | Falls | Rises |
| Forex market for dollars | **Demand** for dollars shifts right | **Supply** of dollars shifts right |
| Dollar | Appreciates | Depreciates |
| U.S. balance of payments | Credit (+) in the capital and financial account | Debit (−) in the capital and financial account |

### Two traps

1. **"Outflow" is not a shift of demand.** When Americans buy foreign assets, they **supply** dollars in exchange for foreign currency. The demand for dollars has not changed.
2. **Cause versus effect.** A rise in the U.S. real interest rate **causes** an inflow; the inflow then **lowers** the U.S. real interest rate somewhat. On an exam, follow the question's starting point: if it says "real rates in the U.S. rise," the inflow is the effect; if it says "foreign investors buy more U.S. bonds," the inflow is the cause.
`
    },
    {
      id: 'macroope5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

| Country | Nominal interest rate | Expected inflation |
|---|---|---|
| Norland | 8% | 6% |
| Sudland | 5% | 1% |

**1)** What is Norland's real interest rate, in percent?

**2)** What is Sudland's real interest rate, in percent?

**3)** Sudland's central bank cuts its nominal rate to 2%, and expected inflation stays at 1%. What is Sudland's real interest rate now, in percent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '1'],
        hint1: 'Real rate = nominal rate − expected inflation.',
        hint2: 'Subtract Sudland\'s expected inflation from its nominal rate.',
        hint3: 'Expected inflation is unchanged in the short run.',
        explanation: '1) 8% − 6% = 2%. 2) 5% − 1% = 4%, so capital first flows toward Sudland despite its lower nominal rate. 3) 2% − 1% = 1%, now below Norland\'s 2%, so the flow reverses toward Norland.'
      }
    },
    {
      id: 'macroope5-strong',
      type: 'text' as const,
      content: `
## Is a Strong Currency Good?

"Strong" sounds good, but an appreciation helps some groups and hurts others.

| When the dollar appreciates… | Gains | Loses |
|---|---|---|
| U.S. consumers | Imports are cheaper | — |
| U.S. tourists abroad | Hotels and meals abroad cost fewer dollars | — |
| U.S. exporters | — | Their goods cost more in foreign currency, so sales fall |
| U.S. firms competing with imports | — | Foreign rivals' prices fall in dollars |
| Foreign tourists in the U.S. | — | U.S. trips cost more of their currency |

**For the whole economy:** appreciation lowers net exports and shifts AD left. That **helps** when the economy has an inflationary gap and **hurts** during a recession. A depreciation does the reverse. So whether a currency change is "good" depends on where the economy is relative to full employment and on who you ask.

## Saving, Investment and Growth

A rise in the saving rate shifts loanable funds supply right and **lowers** the real interest rate. Firms then **move along** the demand curve and invest more, so:

- the **quantity** of investment rises (demand for loanable funds itself does not shift);
- more investment adds to the **capital stock**, and over time LRAS shifts right (economic growth);
- in the short run, lower consumption can reduce AD, so higher saving is a long-run growth story more than a short-run stimulus.
`
    },
    {
      id: 'macroope5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions Table

| Misconception | Correction |
|---|---|
| "Higher saving means less investment, because people spend less." | Higher saving **lowers** r and **raises** the quantity of investment; it is consumption that falls. |
| "Capital outflow shifts demand for loanable funds left." | Savers leaving shift **supply** left; borrowers' demand is unchanged. |
| "Higher nominal interest rates always attract capital." | Capital chases higher **real** rates; a high nominal rate with high inflation may not attract funds. |
| "A rise in the U.S. real rate always makes the dollar appreciate." | Only a rise **relative to** foreign rates does. If foreign rates rise more, the dollar can depreciate. |
| "Expansionary fiscal policy is reinforced by the exchange rate." | It is **partly offset**: the dollar appreciates and net exports fall. Monetary policy is the one that is reinforced. |
| "The federal funds rate is a tool of monetary policy." | It is the **target**. The main tool with ample reserves is the interest rate on reserve balances. |
| "A strong dollar raises net exports because the U.S. looks healthy." | A strong dollar makes U.S. goods **more** expensive abroad, so net exports **fall**. |
`
    },
    {
      id: 'macroope5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'U.S. residents start buying more foreign stocks. In the forex market for dollars, which curve shifts, and in what direction?',
            options: [
              'Supply of dollars shifts right',
              'Demand for dollars shifts left',
              'Demand for dollars shifts right',
              'Supply of dollars shifts left'
            ],
            correctAnswer: 0,
            explanation: 'To buy foreign stocks, Americans sell dollars for foreign currency, which increases the supply of dollars. Foreigners\' demand for dollars has not changed, even though the dollar depreciates either way.'
          },
          {
            question: 'The U.S. economy is in a deep recession when the dollar depreciates sharply. How does the depreciation affect the economy\'s short-run position?',
            options: [
              'It hurts by raising import prices and lowering exports',
              'It helps by raising net exports and aggregate demand',
              'It hurts by lowering net exports and aggregate demand',
              'It has no effect, since exchange rates affect prices only'
            ],
            correctAnswer: 1,
            explanation: 'A cheaper dollar makes U.S. exports cheaper abroad and imports dearer at home, so net exports and AD rise, which pushes output toward full employment. Lower net exports would follow an appreciation, not a depreciation.'
          },
          {
            question: 'The U.S. real interest rate rises from 3% to 4% while the euro area\'s rises from 3% to 5%. What happens to the dollar against the euro?',
            options: [
              'It appreciates',
              'It stays the same',
              'It depreciates',
              'It moves with U.S. GDP'
            ],
            correctAnswer: 2,
            explanation: 'The euro area\'s real rate is now relatively higher, so capital flows from the United States to Europe and the supply of dollars rises. Looking only at the U.S. rise would wrongly predict an appreciation.'
          }
        ]
      }
    }
  ]
}
