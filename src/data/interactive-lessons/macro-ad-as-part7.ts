export const macroAdAsPart7Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada7-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Model on One Page |
| From Shock to Long Run: The Full Chain |
| Connections to the Rest of the Course |
| Mixed Review |

> 🔑 **Key Concept:** The AD-AS model ties together three curves and two time frames. **AD** captures spending; **SRAS** captures costs when wages are sticky; **LRAS** captures capacity. In the short run, AD and SRAS decide the price level and output. In the long run, output returns to LRAS, and only the price level carries the lasting effect of a demand change.
`
    },
    {
      id: 'macroada7-summary',
      type: 'text' as const,
      content: `
## 📖 The Whole Model on One Page

| Curve | Shape and why | Shifts when… | Does NOT shift when… |
|---|---|---|---|
| **AD** | Slopes down: wealth, interest rate and net export effects | C, I, G or Xn change at every price level (confidence, taxes, interest rates, foreign incomes, exchange rates) | The price level changes (movement along) |
| **SRAS** | Slopes up: sticky wages and input prices | Wages, input prices, productivity, expected inflation, business taxes or subsidies, supply shocks | The price level changes (movement along) |
| **LRAS** | Vertical at Yf: wages fully adjust | Quantity or quality of resources, technology, natural rate of unemployment | Input prices, wages, expectations or the price level change |

| State of the economy | Equilibrium vs. LRAS | Unemployment | Self-adjustment |
|---|---|---|---|
| Long-run equilibrium | On LRAS | = natural rate | None needed |
| Recessionary gap | Left of LRAS | > natural rate | Wages fall, SRAS right, price level falls |
| Inflationary gap | Right of LRAS | < natural rate | Wages rise, SRAS left, price level rises |

| Shock | Short-run PL | Short-run real GDP | Short-run unemployment |
|---|---|---|---|
| AD right | ↑ | ↑ | ↓ |
| AD left | ↓ | ↓ | ↑ |
| SRAS left | ↑ | ↓ | ↑ |
| SRAS right | ↓ | ↑ | ↓ |
`
    },
    {
      id: 'macroada7-chain',
      type: 'text' as const,
      content: `
## From Shock to Long Run: The Full Chain

Strong free-response answers follow the same chain every time. Here it is for a fall in exports.

1. **Event:** A major trading partner's economy slows, so it buys fewer of our exports.
2. **Component:** Net exports (Xn) fall.
3. **Curve:** AD shifts **left**.
4. **Short run:** The price level falls, real GDP falls, unemployment rises above the natural rate: a recessionary gap.
5. **Long run, no policy:** High unemployment pushes nominal wages down; SRAS shifts **right**; output returns to Yf at a lower price level.
6. **Long run, with policy:** Expansionary fiscal or monetary policy shifts AD back **right**; output returns to Yf at a higher price level than under self-adjustment.

And for a supply shock:

1. **Event:** A drought raises food and input prices across the economy.
2. **Curve:** SRAS shifts **left**; LRAS is unchanged because the shock is temporary.
3. **Short run:** The price level rises, real GDP falls, unemployment rises: stagflation.
4. **Long run, no policy:** Unemployment pushes wages down, SRAS shifts back right, and the economy returns to Yf.
`
    },
    {
      id: 'macroada7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of events would both shift the AD curve to the right?',
            options: [
              'A rise in nominal wages and a fall in oil prices',
              'A cut in income taxes and a rise in exports',
              'A fall in the price level and a rise in exports',
              'A rise in productivity and a cut in income taxes'
            ],
            correctAnswer: 1,
            explanation: 'An income tax cut raises consumption and a rise in exports raises net exports, so both increase spending at every price level. Wages, oil prices and productivity shift SRAS, and a lower price level is a movement along AD.'
          },
          {
            question: 'An economy is producing at full-employment output. In the long run, a permanent increase in government purchases will',
            options: [
              'raise both the price level and real GDP permanently',
              'raise real GDP but leave the price level unchanged',
              'raise the price level but leave real GDP the same',
              'lower the price level and leave real GDP unchanged'
            ],
            correctAnswer: 2,
            explanation: 'In the short run output rises above Yf, but rising nominal wages then shift SRAS left until output returns to full employment. The lasting effect is only a higher price level.'
          },
          {
            question: 'Which event shifts LRAS to the right?',
            options: [
              'A one-time fall in oil prices',
              'A cut in personal income taxes',
              'A drop in expected inflation',
              'Growth in the capital stock'
            ],
            correctAnswer: 3,
            explanation: 'More physical capital raises the economy\'s productive capacity, so potential output and LRAS rise. A temporary oil price drop and lower expected inflation shift only SRAS, and an income tax cut shifts AD.'
          }
        ]
      }
    },
    {
      id: 'macroada7-connections',
      type: 'text' as const,
      content: `
## Connections to the Rest of the Course

| Topic | How it connects to AD-AS |
|---|---|
| **PPC** | A point inside the PPC matches a recessionary gap; an outward PPC shift matches LRAS shifting right |
| **Unemployment** | Output below Yf means cyclical unemployment; output at Yf means unemployment at the natural rate |
| **Inflation** | AD right causes demand-pull inflation; SRAS left causes cost-push inflation |
| **Multiplier** | A change in spending shifts AD by the change times the multiplier |
| **Fiscal policy** | Government purchases, taxes and transfers shift AD |
| **Monetary policy** | Changing the interest rate on reserve balances (ample reserves) or open-market operations (limited reserves) changes interest rates, investment and AD |
| **Phillips curve** | Movements along SRAS appear as movements along the short-run Phillips curve; SRAS shifts appear as shifts of the short-run Phillips curve |
| **Economic growth** | Sustained growth is LRAS shifting right over time |

> 🔑 **AP Connection:** Many multi-part free-response questions start with an AD-AS graph and then ask about money, interest rates, the Phillips curve or exchange rates. A clean AD-AS answer in part (a) usually sets up every later part.
`
    },
    {
      id: 'macroada7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Real GDP is below full-employment output and the government takes no action. Which sequence describes the long-run adjustment?',
            options: [
              'High unemployment, falling wages, SRAS shifts right, output reaches Yf',
              'High unemployment, rising wages, SRAS shifts left, output reaches Yf',
              'High unemployment, falling prices, AD shifts right, output reaches Yf',
              'High unemployment, falling wages, LRAS shifts left, output stays low'
            ],
            correctAnswer: 0,
            explanation: 'Unemployment above the natural rate lowers nominal wages, which cuts costs and shifts SRAS right until output reaches full employment. Wages do not rise in a recession, and a falling price level moves the economy along AD rather than shifting it.'
          },
          {
            question: 'Which data pattern most likely comes from a decrease in aggregate demand?',
            options: [
              'Price level up, output down',
              'Price level down, output down',
              'Price level down, output up',
              'Price level up, output up'
            ],
            correctAnswer: 1,
            explanation: 'An AD decrease moves the price level and output in the same direction, both down. Opposite movements point to a supply shift, and higher prices with more output point to an AD increase.'
          },
          {
            question: 'Starting at full employment, the price of imported energy rises sharply and stays high for a year. What happens in the short run?',
            options: [
              'Unemployment rises and the price level falls',
              'Unemployment rises and the price level is unchanged',
              'Unemployment rises and the price level rises',
              'Unemployment falls and the price level rises'
            ],
            correctAnswer: 2,
            explanation: 'Costlier energy shifts SRAS left, which lowers output and raises the price level, so unemployment rises along with prices. That combination is stagflation.'
          }
        ]
      }
    },
    {
      id: 'macroada7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Full-employment output in Meridia is \\$15.0 trillion. In 2025, AD and SRAS cross at real GDP of \\$15.6 trillion and a price level of 130.

**1)** What is the size of the output gap, in trillions of dollars? (Enter a positive number.)

**2)** What is the gap as a percent of full-employment output?

**3)** With no policy action, what will long-run real GDP be, in trillions of dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.6', '4', '15'],
        hint1: 'Output is above full employment, so subtract 15.0 from 15.6.',
        hint2: 'Divide the gap by full-employment output and multiply by 100.',
        hint3: 'Rising wages shift SRAS left until output returns to the LRAS line.',
        explanation: '1) 15.6 − 15.0 = \\$0.6 trillion, an inflationary gap. 2) 0.6 ÷ 15.0 × 100 = 4%. 3) Rising nominal wages shift SRAS left until output equals full-employment output, \\$15.0 trillion, at a higher price level.'
      }
    }
  ]
}
