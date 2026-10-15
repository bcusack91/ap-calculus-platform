export const macroAdAsPart3Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada3-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 3 of 7 — Short-Run Shocks: Four Cases Worked**

---

| Section |
|---------|
| 📖 A Four-Step Routine for Any Shock |
| The Four Basic Cases |
| Worked Scenarios |
| When Two Curves Shift at Once |

> 🔑 **Key Concept:** Every short-run question in the AD-AS model comes down to one of four shifts: AD right, AD left, SRAS right or SRAS left. Each one moves the **price level**, **real GDP** and **unemployment** in a predictable direction. When two curves shift together, one of the results can be **indeterminate**.
`
    },
    {
      id: 'macroada3-routine',
      type: 'text' as const,
      content: `
## 📖 A Four-Step Routine for Any Shock

1. **Identify the curve.** Does the event change spending (AD) or production costs (SRAS)? Use the quick test from Part 2.
2. **Identify the direction.** More spending or lower costs at every price level means a shift **right**; less spending or higher costs means a shift **left**.
3. **Find the new short-run equilibrium.** It is where the new curve crosses the curve that did not move.
4. **Read off the results.** Compare the new price level and real output to the old ones. Then connect output to unemployment: **more real output means more workers hired, so unemployment falls**; less output means unemployment rises.

> 🔑 **AP Connection:** In the short run, the LRAS curve does not determine equilibrium. Short-run equilibrium is where **AD crosses SRAS**, which can be to the left or right of LRAS. LRAS tells you whether that point is a recessionary gap, an inflationary gap or full employment.
`
    },
    {
      id: 'macroada3-cases',
      type: 'text' as const,
      content: `
## The Four Basic Cases

| Shift | Price level | Real GDP | Unemployment | Name for the inflation |
|---|---|---|---|---|
| **AD right** (increase) | Rises | Rises | Falls | Demand-pull inflation |
| **AD left** (decrease) | Falls | Falls | Rises | Deflationary pressure |
| **SRAS left** (decrease) | Rises | Falls | Rises | Cost-push inflation (stagflation) |
| **SRAS right** (increase) | Falls | Rises | Falls | None: prices fall as output grows |

Two patterns are worth memorizing:

- **AD shifts move the price level and output in the same direction.** Both rise or both fall.
- **SRAS shifts move the price level and output in opposite directions.** One rises while the other falls.

That gives you a shortcut in reverse. If data show the price level and real GDP moving **together**, the source was a demand shift. If they move **in opposite directions**, the source was a supply shift.

### Stagflation

A leftward SRAS shift is especially painful because the price level **rises** while output **falls** and unemployment **rises**. This combination of stagnant output and inflation is called **stagflation**. It creates a policy dilemma: shifting AD right to restore output pushes the price level even higher, and shifting AD left to fight inflation deepens the recession.
`
    },
    {
      id: 'macroada3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is in long-run equilibrium. Which shift would cause the price level to rise and the unemployment rate to rise in the short run?',
            options: [
              'An increase in SRAS',
              'A decrease in SRAS',
              'An increase in AD',
              'A decrease in AD'
            ],
            correctAnswer: 1,
            explanation: 'A decrease in SRAS raises the price level and lowers real output, so unemployment rises. An increase in AD raises the price level but lowers unemployment, and a decrease in AD lowers the price level.'
          },
          {
            question: 'Data show that the price level fell and real GDP rose over the past year. Which change in the AD-AS model best explains both results?',
            options: [
              'A leftward shift of SRAS',
              'A rightward shift of AD',
              'A rightward shift of SRAS',
              'A leftward shift of AD'
            ],
            correctAnswer: 2,
            explanation: 'The price level and output moved in opposite directions, which points to a supply shift, and rising output means SRAS shifted right. An AD shift would move the price level and output the same way.'
          },
          {
            question: 'Starting from long-run equilibrium, aggregate demand decreases. In the short run, what happens to the price level and real GDP?',
            options: [
              'The price level rises and real GDP falls',
              'The price level falls and real GDP rises',
              'The price level rises and real GDP rises',
              'The price level falls and real GDP falls'
            ],
            correctAnswer: 3,
            explanation: 'A leftward AD shift slides the economy down along SRAS, so both the price level and real GDP fall. Opposite movements in the two would require a shift of SRAS instead.'
          }
        ]
      }
    },
    {
      id: 'macroada3-scenarios',
      type: 'text' as const,
      content: `
## Worked Scenarios

Each scenario starts from long-run equilibrium, with AD, SRAS and LRAS crossing at full-employment output.

### Scenario 1: A recession abroad

Canada and Mexico, two large buyers of U.S. goods, fall into recession.

- **Curve:** Foreign buyers purchase fewer U.S. exports, so net exports (Xn) fall. That is spending, so **AD** shifts.
- **Direction:** Less spending at every price level, so AD shifts **left**.
- **Results:** The price level **falls**, real GDP **falls**, unemployment **rises**. The economy now has a **recessionary gap**.

### Scenario 2: An oil price spike

A conflict in an oil-producing region doubles the world price of crude oil for a year.

- **Curve:** Energy is an input for almost every firm, so production costs rise. **SRAS** shifts.
- **Direction:** Higher costs at every price level, so SRAS shifts **left**.
- **Results:** The price level **rises**, real GDP **falls**, unemployment **rises**: stagflation. LRAS does not shift, because the price spike is temporary.

### Scenario 3: A productivity breakthrough

New software lets firms in many industries produce the same output with fewer worker-hours.

- **Curve:** Lower costs per unit at every price level shift **SRAS**. Because the gain is lasting, **LRAS** also shifts.
- **Direction:** Both shift **right**.
- **Results:** The price level **falls**, real GDP **rises**, unemployment **falls** in the short run, and potential output is higher.

### Scenario 4: A stock market boom

Stock prices rise 30%, and households feel much wealthier.

- **Curve:** Higher wealth raises consumption (C) at every price level, so **AD** shifts.
- **Direction:** Right.
- **Results:** The price level **rises**, real GDP **rises**, unemployment **falls**. If the economy started at full employment, it now has an **inflationary gap**.

> ⚠️ **Do not confuse** the wealth effect that explains the **slope** of AD with a change in wealth that **shifts** AD. A higher price level shrinking the real value of savings is a movement along AD. A stock market boom that raises wealth at every price level shifts AD.
`
    },
    {
      id: 'macroada3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Businesses become pessimistic about future sales and cut planned investment in new equipment. In the short run, what happens to unemployment?',
            options: [
              'It rises',
              'It falls',
              'It stays at the natural rate',
              'It cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'Lower investment spending shifts AD left, so real output falls and firms need fewer workers, which raises unemployment. The effect is clear, because only one curve shifts.'
          },
          {
            question: 'A severe drought destroys a large share of one year\'s harvest across the country. What is the most likely short-run result?',
            options: [
              'Price level down, output down',
              'Price level up, output down',
              'Price level up, output up',
              'Price level down, output up'
            ],
            correctAnswer: 1,
            explanation: 'A drought is a negative supply shock that raises costs and shifts SRAS left, so the price level rises while output falls. Moving the price level and output together would require a shift of aggregate demand.'
          },
          {
            question: 'The government cuts personal income taxes, and households spend part of the extra income. Starting from full employment, the economy moves to',
            options: [
              'a recessionary gap',
              'a point on the LRAS curve at a higher price level',
              'an inflationary gap',
              'a point on the LRAS curve at a lower price level'
            ],
            correctAnswer: 2,
            explanation: 'A tax cut raises consumption and shifts AD right, so short-run output rises above full employment, which is an inflationary gap. The economy returns to LRAS only after wages adjust in the long run.'
          }
        ]
      }
    },
    {
      id: 'macroada3-double',
      type: 'text' as const,
      content: `
## When Two Curves Shift at Once

When AD and SRAS shift at the same time, one result is certain and the other depends on **which shift is larger**. That result is **indeterminate** unless the question gives sizes.

| AD | SRAS | Price level | Real GDP |
|---|---|---|---|
| Right | Right | Indeterminate | **Rises** |
| Left | Left | Indeterminate | **Falls** |
| Right | Left | **Rises** | Indeterminate |
| Left | Right | **Falls** | Indeterminate |

### Why one result is certain

Take AD right with SRAS left. An AD increase raises the price level, and an SRAS decrease also raises the price level, so the price level must rise. But the AD increase raises output while the SRAS decrease lowers it, so the net effect on output depends on which shift is bigger.

### Worked Example: A boom with rising energy costs

Government purchases rise sharply (AD right) in the same year that the price of electricity jumps (SRAS left).

- Price level: both shifts push it up, so it **rises**.
- Real GDP: AD pushes it up, SRAS pushes it down, so it is **indeterminate**.

> 🔑 **AP Connection:** If a question asks for the effect of two simultaneous shifts and you can only say one result for certain, write "indeterminate" for the other and explain why. Guessing a direction for the uncertain variable loses the point.
`
    },
    {
      id: 'macroada3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the result that completes each statement. Each starts from long-run equilibrium.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AD shifts right and SRAS shifts right. Real GDP ___.',
            options: ['rises', 'falls', 'is unchanged', 'is indeterminate']
          },
          {
            label: 'AD shifts right and SRAS shifts right. The price level ___.',
            options: ['rises', 'falls', 'is unchanged', 'is indeterminate']
          },
          {
            label: 'AD shifts left and SRAS shifts right. The price level ___.',
            options: ['rises', 'falls', 'is unchanged', 'is indeterminate']
          },
          {
            label: 'A rise in the price level combined with a fall in real GDP is called ___.',
            options: ['stagflation', 'disinflation', 'deflation', 'hyperinflation']
          }
        ],
        correctAnswers: ['rises', 'is indeterminate', 'falls', 'stagflation'],
        hint1: 'Both rightward shifts push real GDP the same way.',
        hint2: 'For the price level, the two rightward shifts pull in opposite directions.',
        hint3: 'An AD decrease and an SRAS increase both push the price level down.',
        explanation: 'Two rightward shifts both raise real GDP, but AD right raises the price level while SRAS right lowers it, so the price level is indeterminate. AD left and SRAS right both lower the price level. Rising prices with falling output is stagflation.'
      }
    },
    {
      id: 'macroada3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

An economy's full-employment output is \\$800 billion. After a fall in consumer confidence, short-run equilibrium real GDP is \\$760 billion and the price level is 105, down from 110.

**1)** What is the size of the output gap, in billions of dollars? (Enter a positive number.)

**2)** What is the output gap as a percent of full-employment output?

**3)** By what percent did the price level fall? Round to one decimal place.

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '5', '4.5'],
        hint1: 'The gap is the distance between full-employment output and actual output: 800 − 760.',
        hint2: 'Divide the gap by full-employment output and multiply by 100.',
        hint3: 'Percent change in the price level = (110 − 105) ÷ 110 × 100.',
        explanation: '1) 800 − 760 = \\$40 billion, a recessionary gap. 2) 40 ÷ 800 × 100 = 5%. 3) (110 − 105) ÷ 110 × 100 ≈ 4.5%.'
      }
    }
  ]
}
