import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Aggregate Demand & Aggregate Supply (AP Macroeconomics).
 * Registry key / DB Topic.slug: 'macro-aggregate-demand-supply'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked applications → Exit Quiz. Concept-forward macro topic with quantitative
 * elements (multiplier, GDP gaps, equilibrium), so checks mix all three exercise types.
 * LaTeX uses DOUBLED backslashes (template-literal strings); bare dollar amounts are
 * escaped as \$ so they don't open a math span.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas1-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 1 of 7 — The AD–AS Model & the Aggregate Demand Curve**

---

### Topics in This Part

| Section |
|---------|
| What the AD–AS Model Measures |
| The Aggregate Demand Curve |
| Why AD Slopes Downward (the three effects) |
| Components of AD |

> 🔑 **Key Concept:** The **AD–AS model** is the master diagram of macroeconomics. It puts the **price level** (not the price of one good) on the vertical axis and **real GDP** (total output) on the horizontal axis, and uses two curves — **aggregate demand** and **aggregate supply** — to explain recessions, inflation, and the effects of every policy you'll study.`,
      },
      {
        id: 'adas1-axes',
        type: 'text' as const,
        content: `## A New Pair of Axes

In microeconomics, a demand curve plots the price of *one* good against the quantity of *that* good. The AD–AS model zooms all the way out to the **whole economy**:

| Axis | Micro (one market) | Macro (AD–AS) |
|------|--------------------|----------------|
| Vertical | Price of the good ($P$) | **Price level** (overall, e.g. the GDP deflator or CPI) |
| Horizontal | Quantity of the good ($Q$) | **Real GDP** ($Y$) — total output |

**Aggregate demand (AD)** shows the total quantity of real GDP that households, firms, government, and foreigners want to buy at each price level.

> ⚠️ **Don't confuse the curves.** A micro demand curve slopes down because of substitution and income effects *within* a market. AD slopes down for three *completely different* macro reasons — coming up next.`,
      },
      {
        id: 'adas1-why-down',
        type: 'text' as const,
        content: `## Why Aggregate Demand Slopes Downward

A lower **price level** raises the total quantity of real GDP demanded for three reasons. Memorize these — they are tested directly.

| Effect | Plain-English mechanism |
|--------|-------------------------|
| **Wealth (real-balances) effect** | A lower price level makes the money/savings you hold worth more, so you feel richer and buy more. |
| **Interest-rate effect** | A lower price level means people need less cash for transactions, so they lend the surplus → interest rates fall → investment & big purchases rise. |
| **Net-export (exchange-rate) effect** | A lower U.S. price level makes U.S. goods cheaper relative to foreign goods, so exports rise and imports fall → net exports rise. |

> 💡 All three describe a **movement along** a fixed AD curve caused by a change in the price level — *not* a shift of the curve.`,
      },
      {
        id: 'adas1-why-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When the overall price level falls, the purchasing power of the money households already hold rises, so they buy more. This is the:',
              options: ['Wealth (real-balances) effect', 'Interest-rate effect', 'Net-export effect', 'Substitution effect'],
              correctAnswer: 0,
              explanation: 'The wealth (real-balances) effect: a lower price level raises the real value of money holdings, making consumers feel wealthier so they spend more. The substitution effect is a microeconomic idea about choosing between two goods.',
            },
            {
              question: 'A lower U.S. price level makes American exports cheaper to foreigners, raising net exports. This describes the:',
              options: ['Net-export (exchange-rate) effect', 'Wealth effect', 'Interest-rate effect', 'Multiplier effect'],
              correctAnswer: 0,
              explanation: 'The net-export effect: a lower domestic price level makes home goods relatively cheaper, raising exports and lowering imports, so net exports (and AD quantity) rise.',
            },
          ],
        },
      },
      {
        id: 'adas1-components',
        type: 'text' as const,
        content: `## What's Inside Aggregate Demand?

Aggregate demand is the spending side of GDP. It is built from the same four components as the expenditure approach to GDP:

$$AD = C + I + G + NX$$

| Symbol | Component | Examples |
|--------|-----------|----------|
| $C$ | **Consumption** | Households buying food, cars, services |
| $I$ | **Investment** | Firms buying machinery, building factories, plus new housing |
| $G$ | **Government spending** | Roads, defense, public salaries (*not* transfer payments) |
| $NX$ | **Net exports** | Exports $-$ Imports |

> 🔑 **Key Idea:** Anything that changes $C$, $I$, $G$, or $NX$ *at a given price level* **shifts** the entire AD curve. That is the engine behind fiscal policy, monetary policy, and the multiplier — all of which you'll meet later.`,
      },
      {
        id: 'adas1-components-drop',
        type: 'dropdown-select' as const,
        content: `**Sort the Spending** 🔽

Match each item to the AD component it belongs to.`,
        exercise: {
          dropdowns: [
            { label: 'A family buys a new refrigerator:', options: ['Consumption ($C$)', 'Investment ($I$)', 'Government ($G$)', 'Net exports ($NX$)'] },
            { label: 'A bakery installs a new industrial oven:', options: ['Investment ($I$)', 'Consumption ($C$)', 'Government ($G$)', 'Net exports ($NX$)'] },
            { label: 'The state builds a new highway:', options: ['Government ($G$)', 'Consumption ($C$)', 'Investment ($I$)', 'Net exports ($NX$)'] },
            { label: 'Boeing sells a jet to an airline in France:', options: ['Net exports ($NX$)', 'Consumption ($C$)', 'Investment ($I$)', 'Government ($G$)'] },
          ],
          correctAnswers: ['Consumption ($C$)', 'Investment ($I$)', 'Government ($G$)', 'Net exports ($NX$)'],
          hint1: 'Household purchases of final goods/services count as consumption — even durable goods like appliances.',
          hint2: 'When a *firm* buys capital equipment, it is investment, not consumption.',
          hint3: 'Government purchases of goods/services are $G$; a sale *to a foreign buyer* is an export, which raises $NX$.',
          explanation: 'Fridge → $C$ (household final good). Oven → $I$ (firm buying capital). Highway → $G$ (government purchase). Exported jet → $NX$ (a U.S. export). These four make up $AD = C + I + G + NX$.',
        },
      },
      {
        id: 'adas1-nx-note',
        type: 'text' as const,
        content: `## A Quick Look at Net Exports

Net exports is one piece of AD worth computing directly:

$$NX = \\text{Exports} - \\text{Imports}$$

If a country exports \\$700 billion of goods and imports \\$900 billion, then $NX = 700 - 900 = -\\$200$ billion — a **trade deficit**, which subtracts from aggregate demand.`,
      },
      {
        id: 'adas1-nx-drill',
        type: 'input-boxes' as const,
        content: `**Compute Net Exports** 🧮

Use $NX = \\text{Exports} - \\text{Imports}$ (in billions). Enter signed numbers.

**1)** Exports $= 500$, Imports $= 300$. $NX = \\,?$
**2)** Exports $= 250$, Imports $= 400$. $NX = \\,?$
**3)** Exports $= 600$, Imports $= 600$. $NX = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['200', '-150', '0'],
          hint1: '$500 - 300 = 200$ → a trade surplus, which adds to AD.',
          hint2: '$250 - 400 = -150$ → a trade deficit, which subtracts from AD.',
          hint3: '$600 - 600 = 0$ → balanced trade; $NX$ contributes nothing to AD.',
          explanation: '1) $+200$ (surplus). 2) $-150$ (deficit). 3) $0$ (balanced). Positive $NX$ adds to AD; negative $NX$ subtracts.',
        },
      },
      {
        id: 'adas1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

- The **AD–AS model** plots the **price level** vs. **real GDP** for the whole economy.
- **AD slopes downward** because of the **wealth**, **interest-rate**, and **net-export** effects.
- AD is the sum $C + I + G + NX$; changing any component *at a given price level* shifts AD.

Next up: what makes the AD curve *shift* left or right — the heart of macro policy. 📈`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas2-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 2 of 7 — Shifts in Aggregate Demand**

---

> 🔑 **The Big Distinction:** A change in the **price level** moves you *along* a fixed AD curve. A change in anything *else* that affects spending **shifts the whole curve**. Mixing these up is the #1 AD–AS error on the AP exam.`,
      },
      {
        id: 'adas2-shifters',
        type: 'text' as const,
        content: `## What Shifts Aggregate Demand?

Anything that raises spending at a given price level shifts AD **right** ($\\rightarrow$); anything that lowers it shifts AD **left** ($\\leftarrow$).

| Component | Shifts AD **right** when… | Shifts AD **left** when… |
|-----------|---------------------------|---------------------------|
| $C$ | Consumer confidence ↑, wealth ↑, taxes ↓ | Confidence ↓, taxes ↑ |
| $I$ | Real interest rates ↓, business optimism ↑ | Interest rates ↑, pessimism |
| $G$ | Government spends more | Government spends less |
| $NX$ | Foreign income ↑, weaker dollar | Foreign recession, stronger dollar |

> ⚠️ A **rightward** shift increases real GDP demanded at every price level (more total spending). A **leftward** shift decreases it. Get the direction right *before* you worry about the price level.`,
      },
      {
        id: 'adas2-shift-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Consumer confidence collapses and households cut spending at every price level. Aggregate demand:',
              options: ['Shifts left', 'Shifts right', 'Stays fixed; we move down along it', 'Becomes vertical'],
              correctAnswer: 0,
              explanation: 'Lower confidence reduces $C$ at every price level, so AD shifts left. Because the trigger is NOT a change in the price level, this is a true shift, not a movement along the curve.',
            },
            {
              question: 'The federal government launches a large new infrastructure program. Holding the price level constant, aggregate demand:',
              options: ['Shifts right', 'Shifts left', 'Does not move', 'Slopes upward'],
              correctAnswer: 0,
              explanation: 'More government purchases ($G$) raise total spending at every price level, shifting AD right.',
            },
          ],
        },
      },
      {
        id: 'adas2-along-vs-shift',
        type: 'text' as const,
        content: `## Movement Along vs. Shift — the Decisive Test

Ask one question: **"Did the *price level* change first, or did something else?"**

| Trigger | Result |
|---------|--------|
| The **price level** itself rises or falls | **Movement along** AD (change in quantity of real GDP demanded) |
| $C$, $I$, $G$, or $NX$ changes for **any other reason** | **Shift** of the entire AD curve |

**Example:** A tax cut raises disposable income → households spend more at *every* price level → AD shifts **right**.

**Example:** A higher price level triggers the interest-rate effect → we slide *up and to the left along* the existing AD curve. No shift.

> 💡 Memory hook: *price level → along; everything else → shift.*`,
      },
      {
        id: 'adas2-classify-drop',
        type: 'dropdown-select' as const,
        content: `**Along or Shift — and Which Way?** 🔽

For each event, choose what happens to AD.`,
        exercise: {
          dropdowns: [
            { label: 'The overall price level rises:', options: ['Movement along AD (up-left)', 'AD shifts right', 'AD shifts left', 'AD becomes vertical'] },
            { label: 'A weaker dollar makes exports cheaper abroad:', options: ['AD shifts right', 'AD shifts left', 'Movement along AD', 'No effect on AD'] },
            { label: 'Taxes on households are raised:', options: ['AD shifts left', 'AD shifts right', 'Movement along AD', 'No effect on AD'] },
          ],
          correctAnswers: ['Movement along AD (up-left)', 'AD shifts right', 'AD shifts left'],
          hint1: 'If the *price level* is the trigger, it is a movement along the curve, not a shift.',
          hint2: 'A weaker dollar raises net exports ($NX$) at every price level — a true shift.',
          hint3: 'Higher taxes lower disposable income → less $C$ at every price level → AD shifts left.',
          explanation: 'Price level changing = movement along AD. Weaker dollar → $NX$ ↑ → AD shifts right. Higher taxes → $C$ ↓ → AD shifts left.',
        },
      },
      {
        id: 'adas2-stronger-dollar',
        type: 'text' as const,
        content: `## A Closer Look: the Dollar's Strength

The exchange rate quietly moves AD through net exports:

- A **stronger dollar** makes U.S. goods *more expensive* abroad and imports *cheaper* → exports fall, imports rise → $NX$ ↓ → **AD shifts left**.
- A **weaker dollar** does the reverse → $NX$ ↑ → **AD shifts right**.

> 💡 Same logic applies to foreign income: when our trading partners boom, they buy more of our exports → $NX$ ↑ → AD shifts right.`,
      },
      {
        id: 'adas2-final-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The U.S. dollar strengthens sharply against other currencies. Holding the price level fixed, U.S. aggregate demand:',
              options: ['Shifts left', 'Shifts right', 'Stays fixed', 'Becomes vertical'],
              correctAnswer: 0,
              explanation: 'A stronger dollar makes U.S. exports pricier abroad and imports cheaper, so net exports fall. Lower $NX$ at every price level shifts AD left.',
            },
            {
              question: 'A major trading partner enters a deep recession, so it buys far fewer U.S. exports. U.S. aggregate demand:',
              options: ['Shifts left', 'Shifts right', 'Moves along the curve', 'Is unaffected'],
              correctAnswer: 0,
              explanation: 'Lower foreign income reduces U.S. exports → net exports fall → AD shifts left. The trigger is not the U.S. price level, so it is a shift, not a movement along AD.',
            },
          ],
        },
      },
      {
        id: 'adas2-recap',
        type: 'text' as const,
        content: `## Part 2 Recap

- A change in the **price level** = **movement along** AD.
- A change in $C$, $I$, $G$, or $NX$ for any other reason = **shift** of AD.
- More spending shifts AD **right**; less spending shifts AD **left**.

Now that AD is solid, we turn to the other curve — **aggregate supply** — which behaves very differently in the short run vs. the long run. 🏭`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas3-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 3 of 7 — Short-Run & Long-Run Aggregate Supply**

---

> 🔑 **The Core Insight:** In the **short run**, some input prices (especially nominal wages) are "sticky" and can't adjust quickly, so output responds to the price level → **SRAS slopes upward**. In the **long run**, all prices and wages adjust, so output settles at **potential GDP** regardless of the price level → **LRAS is vertical**.`,
      },
      {
        id: 'adas3-sras',
        type: 'text' as const,
        content: `## Short-Run Aggregate Supply (SRAS)

**SRAS slopes upward.** A higher price level, with input costs (like wages) temporarily fixed, makes production more profitable, so firms expand output.

The reason output can respond at all is **sticky prices/wages**: contracts, menu costs, and slow expectations mean costs lag behind the price level in the short run.

> 💡 Think of it from a firm's view: if the price of what you *sell* rises but the wage you *pay* hasn't changed yet, your profit margin widens, so you hire and produce more.

### What shifts SRAS?

| SRAS shifts **right** (↓ costs / ↑ supply) | SRAS shifts **left** (↑ costs / ↓ supply) |
|--------------------------------------------|-------------------------------------------|
| Input/resource prices fall (e.g. cheaper oil) | Input prices rise (oil shock) |
| Productivity rises | Productivity falls |
| Lower business taxes/regulation | Higher business taxes; supply disruptions |

> ⚠️ A **negative supply shock** (e.g. an oil-price spike) shifts SRAS **left**, raising the price level *and* lowering output at the same time — that's **stagflation**.`,
      },
      {
        id: 'adas3-sras-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A sharp rise in global oil prices increases input costs across the economy. In the short run, SRAS:',
              options: ['Shifts left', 'Shifts right', 'Becomes vertical', 'Does not move'],
              correctAnswer: 0,
              explanation: 'Higher input costs make production less profitable at every price level, shifting SRAS left. This raises the price level and lowers output — a negative supply shock / stagflation.',
            },
            {
              question: 'The main reason SRAS slopes upward (rather than being vertical) is that, in the short run:',
              options: ['Some input prices, especially wages, are sticky', 'The price level never changes', 'Potential GDP is fixed', 'Households save all extra income'],
              correctAnswer: 0,
              explanation: 'Sticky nominal wages and input prices mean a higher output price temporarily widens profit margins, so firms raise output. That responsiveness is exactly what gives SRAS its upward slope.',
            },
          ],
        },
      },
      {
        id: 'adas3-lras',
        type: 'text' as const,
        content: `## Long-Run Aggregate Supply (LRAS)

In the **long run**, wages and all input prices fully adjust. Once they catch up, the temporary profit incentive disappears and the economy produces at **potential (full-employment) output**, $Y_f$ — no matter the price level.

$$\\text{LRAS is a vertical line at } Y = Y_f$$

LRAS represents the economy's **productive capacity** at full employment (where the only unemployment is natural). It does **not** depend on the price level.

### What shifts LRAS (i.e., changes potential GDP)?

Only things that change the economy's real capacity to produce:

- **More/better resources** — labor force growth, more capital, new natural resources
- **Technological progress / higher productivity**
- **Better institutions** — stronger property rights, education, infrastructure

> 🔑 A rightward shift of **LRAS is economic growth**: the entire long-run capacity of the economy expands. Demand-side changes (AD shifts) do *not* move LRAS.`,
      },
      {
        id: 'adas3-lras-drop',
        type: 'dropdown-select' as const,
        content: `**Which Curve Moves?** 🔽

Decide whether each event shifts **SRAS only**, **LRAS (and SRAS)**, or **neither**.`,
        exercise: {
          dropdowns: [
            { label: 'A one-time spike in oil prices:', options: ['SRAS shifts left (short run)', 'LRAS shifts right', 'LRAS shifts left', 'No supply curve moves'] },
            { label: 'A permanent technological breakthrough raises productivity:', options: ['LRAS shifts right (growth)', 'SRAS shifts left only', 'LRAS shifts left', 'Neither curve moves'] },
            { label: 'The labor force grows as immigration rises:', options: ['LRAS shifts right (growth)', 'LRAS shifts left', 'SRAS shifts left', 'AD shifts left'] },
          ],
          correctAnswers: ['SRAS shifts left (short run)', 'LRAS shifts right (growth)', 'LRAS shifts right (growth)'],
          hint1: 'A temporary cost change affects short-run supply; permanent capacity changes affect long-run supply.',
          hint2: 'Productivity and technology raise potential output → LRAS shifts right (that is economic growth).',
          hint3: 'More available labor expands productive capacity → LRAS shifts right.',
          explanation: 'Oil spike = temporary cost shock → SRAS left. Better technology and a larger labor force expand potential GDP → LRAS shifts right (economic growth). Only real-capacity changes move LRAS.',
        },
      },
      {
        id: 'adas3-distinguish',
        type: 'text' as const,
        content: `## SRAS-Only vs. Both Curves

A useful rule of thumb:

- A **temporary** cost change (a one-off oil spike, a bad harvest) moves **SRAS only**.
- A **permanent** change in productive capacity (new technology, more capital or labor, better institutions) moves **LRAS** — and SRAS shifts with it.

> ⚠️ Watch out: a change in the *expected* price level or in nominal wages shifts **SRAS** but leaves **LRAS** untouched, because it doesn't change the economy's real capacity.`,
      },
      {
        id: 'adas3-distinguish-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Workers negotiate higher nominal wages across the economy, raising firms\' costs. In the short run this:',
              options: ['Shifts SRAS left, leaving LRAS unchanged', 'Shifts LRAS left', 'Shifts SRAS right', 'Shifts AD right'],
              correctAnswer: 0,
              explanation: 'Higher nominal wages raise production costs, shifting SRAS left. They do not change the economy\'s real productive capacity, so LRAS (potential output) stays put.',
            },
            {
              question: 'Which of these shifts the LONG-RUN aggregate supply curve to the right?',
              options: ['A lasting increase in worker productivity', 'A temporary drop in oil prices', 'A surge in consumer confidence', 'A cut in income tax rates that boosts spending'],
              correctAnswer: 0,
              explanation: 'LRAS moves only with real capacity. A lasting productivity gain raises potential output → LRAS shifts right (growth). The temporary oil drop affects SRAS; confidence and tax-driven spending affect AD.',
            },
          ],
        },
      },
      {
        id: 'adas3-recap',
        type: 'text' as const,
        content: `## Part 3 Recap

| Curve | Slope | Driven by |
|-------|-------|-----------|
| **SRAS** | Upward | Sticky wages/prices; shifts with input costs & productivity |
| **LRAS** | Vertical at $Y_f$ | Potential output; shifts only with real capacity (growth) |

> 💡 Short run: output *can* differ from potential. Long run: output returns to potential. That tension is what drives the business cycle — and our next topic, **equilibrium**.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas4-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 4 of 7 — Equilibrium & Output Gaps**

---

> 🔑 **Where it all meets:** The economy's **short-run equilibrium** is where **AD crosses SRAS** — that point gives the equilibrium price level and equilibrium real GDP. Comparing that GDP to **potential output ($Y_f$, the LRAS line)** tells you whether the economy is in a boom, a recession, or right on target.`,
      },
      {
        id: 'adas4-equilibrium',
        type: 'text' as const,
        content: `## Short-Run Macroeconomic Equilibrium

Short-run equilibrium occurs where **AD = SRAS**. At that intersection:

- The **equilibrium price level** ($PL$) is read off the vertical axis.
- The **equilibrium real GDP** ($Y$) is read off the horizontal axis.

We then compare equilibrium $Y$ to **potential output $Y_f$** (the vertical LRAS line):

| Situation | Where is $Y$? | Name |
|-----------|---------------|------|
| $Y < Y_f$ | Left of LRAS | **Recessionary gap** (unemployment above natural) |
| $Y = Y_f$ | On LRAS | **Long-run equilibrium** (full employment) |
| $Y > Y_f$ | Right of LRAS | **Inflationary gap** (overheating) |

> 🔑 **Long-run equilibrium** is the special case where **AD, SRAS, and LRAS all intersect at the same point** — output equals potential.`,
      },
      {
        id: 'adas4-gap-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Short-run equilibrium real GDP is \\$18 trillion while potential GDP is \\$20 trillion. The economy has a(n):',
              options: ['Recessionary gap', 'Inflationary gap', 'Long-run equilibrium', 'Supply shock'],
              correctAnswer: 0,
              explanation: 'Equilibrium output (\\$18T) is below potential (\\$20T), so $Y < Y_f$. The economy is producing less than its capacity — a recessionary gap with cyclical unemployment.',
            },
            {
              question: 'An economy is in long-run equilibrium when:',
              options: ['AD, SRAS, and LRAS all intersect at the same point', 'AD intersects SRAS only', 'The price level is zero', 'SRAS is vertical'],
              correctAnswer: 0,
              explanation: 'Long-run equilibrium is the special case where all three curves meet — short-run equilibrium output equals potential output ($Y = Y_f$).',
            },
          ],
        },
      },
      {
        id: 'adas4-gap-size',
        type: 'text' as const,
        content: `## Measuring the Output Gap

The **output gap** is simply the distance between actual equilibrium output and potential output:

$$\\text{Output gap} = Y - Y_f$$

- A **negative** gap ($Y < Y_f$) is a **recessionary gap**.
- A **positive** gap ($Y > Y_f$) is an **inflationary gap**.

**Worked example.** Suppose short-run equilibrium GDP is \\$9.4 trillion and potential GDP is \\$10.0 trillion:

$$\\text{gap} = 9.4 - 10.0 = -0.6 \\text{ trillion}$$

The economy is \\$0.6 trillion *below* potential — a **recessionary gap of \\$0.6 trillion**. (Later you'll see policy must raise AD by *less* than \\$0.6T because of the multiplier.)

> ⚠️ The output gap measures the *spending hole or excess*, but the AD shift needed to close it is **smaller** than the gap — the multiplier does the rest. That's Part 5.`,
      },
      {
        id: 'adas4-gap-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Gap** 🧮

Use $\\text{Output gap} = Y - Y_f$ (in trillions of dollars). Enter signed numbers (e.g. \`-0.5\`).

**1)** $Y = 8.5$, $Y_f = 9.0$. Output gap $= \\,?$
**2)** $Y = 12.4$, $Y_f = 12.0$. Output gap $= \\,?$
**3)** $Y = 15.0$, $Y_f = 15.0$. Output gap $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-0.5', '0.4', '0'],
          hint1: '$8.5 - 9.0 = -0.5$ → below potential, a recessionary gap.',
          hint2: '$12.4 - 12.0 = 0.4$ → above potential, an inflationary gap.',
          hint3: '$15.0 - 15.0 = 0$ → output equals potential, long-run equilibrium.',
          explanation: '1) $-0.5$ (recessionary gap). 2) $+0.4$ (inflationary gap). 3) $0$ (full-employment / long-run equilibrium).',
        },
      },
      {
        id: 'adas4-classify-drop',
        type: 'dropdown-select' as const,
        content: `**Name That Gap** 🔽

For each pairing of equilibrium output ($Y$) and potential output ($Y_f$), choose the economy's condition.`,
        exercise: {
          dropdowns: [
            { label: '$Y = 7.0$T, $Y_f = 7.5$T:', options: ['Recessionary gap', 'Inflationary gap', 'Long-run equilibrium', 'Supply shock'] },
            { label: '$Y = 14.0$T, $Y_f = 14.0$T:', options: ['Long-run equilibrium', 'Recessionary gap', 'Inflationary gap', 'Stagflation'] },
            { label: '$Y = 21.0$T, $Y_f = 20.0$T:', options: ['Inflationary gap', 'Recessionary gap', 'Long-run equilibrium', 'No gap'] },
          ],
          correctAnswers: ['Recessionary gap', 'Long-run equilibrium', 'Inflationary gap'],
          hint1: 'If $Y < Y_f$, output is below potential — a recessionary gap.',
          hint2: 'If $Y = Y_f$, output equals potential — long-run (full-employment) equilibrium.',
          hint3: 'If $Y > Y_f$, output exceeds potential — an inflationary gap (overheating).',
          explanation: '$7.0 < 7.5$ → recessionary gap. $14.0 = 14.0$ → long-run equilibrium. $21.0 > 20.0$ → inflationary gap. Compare $Y$ to $Y_f$: below, equal, or above.',
        },
      },
      {
        id: 'adas4-recap',
        type: 'text' as const,
        content: `## Part 4 Recap

- Short-run equilibrium: **AD = SRAS** → gives equilibrium $PL$ and $Y$.
- Compare $Y$ to $Y_f$: below = **recessionary gap**, above = **inflationary gap**, equal = **long-run equilibrium**.
- Output gap $= Y - Y_f$.

Next: how a single dollar of spending ripples into a *larger* change in GDP — the **multiplier**. 🔁`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas5-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 5 of 7 — The Spending Multiplier & AD Shifts**

---

> 🔑 **Why a small push moves AD a lot:** When one person spends, that becomes another person's income, which they partly spend again, and so on. This chain means an initial change in spending shifts AD by a **multiple** of itself — the **spending (expenditure) multiplier**.`,
      },
      {
        id: 'adas5-mpc',
        type: 'text' as const,
        content: `## MPC, MPS, and the Multiplier

Out of each extra dollar of income, households **spend** a fraction and **save** the rest:

- **MPC** = marginal propensity to consume = fraction of extra income spent.
- **MPS** = marginal propensity to save = fraction saved.

$$MPC + MPS = 1$$

The **spending multiplier** is:

$$\\text{Multiplier} = \\frac{1}{1 - MPC} = \\frac{1}{MPS}$$

| MPC | MPS | Multiplier $= \\dfrac{1}{1-MPC}$ |
|-----|-----|--------------------------------|
| $0.8$ | $0.2$ | $\\dfrac{1}{0.2} = 5$ |
| $0.75$ | $0.25$ | $\\dfrac{1}{0.25} = 4$ |
| $0.9$ | $0.1$ | $\\dfrac{1}{0.1} = 10$ |

> 💡 A **higher MPC** means more of each dollar gets re-spent, so the multiplier is **larger**. A higher MPS shrinks it.`,
      },
      {
        id: 'adas5-mult-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Multiplier** 🧮

Use $\\text{Multiplier} = \\dfrac{1}{1 - MPC} = \\dfrac{1}{MPS}$.

**1)** $MPC = 0.8 \\Rightarrow$ multiplier $= \\,?$
**2)** $MPS = 0.25 \\Rightarrow$ multiplier $= \\,?$
**3)** $MPC = 0.6 \\Rightarrow$ multiplier $= \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '2.5'],
          hint1: '$MPC = 0.8 \\Rightarrow MPS = 0.2 \\Rightarrow 1/0.2 = 5$.',
          hint2: 'When given MPS directly: $1/0.25 = 4$.',
          hint3: '$MPC = 0.6 \\Rightarrow MPS = 0.4 \\Rightarrow 1/0.4 = 2.5$.',
          explanation: '1) $1/(1-0.8) = 1/0.2 = 5$. 2) $1/0.25 = 4$. 3) $1/(1-0.6) = 1/0.4 = 2.5$.',
        },
      },
      {
        id: 'adas5-total-effect',
        type: 'text' as const,
        content: `## From Initial Spending to Total AD Shift

The full change in real GDP (the size of the AD shift) is:

$$\\Delta Y = \\text{Multiplier} \\times \\Delta \\text{(initial spending)}$$

**Worked example.** The government spends an extra \\$50 billion and $MPC = 0.8$.

$$\\text{Multiplier} = \\frac{1}{1 - 0.8} = 5$$

$$\\Delta Y = 5 \\times \\$50\\text{B} = \\$250\\text{ billion}$$

So AD shifts right by **\\$250 billion**, not just the original \\$50 billion.

> 🔑 **Closing a gap.** To erase a \\$250B recessionary gap with $MPC = 0.8$ (multiplier $5$), the government needs an initial spending increase of only
> $$\\frac{\\$250\\text{B}}{5} = \\$50\\text{ billion.}$$
> Always divide the gap by the multiplier to find the required spending change.`,
      },
      {
        id: 'adas5-total-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'With $MPC = 0.75$, an initial \\$40 billion increase in investment shifts AD to the right by approximately:',
              options: ['\\$160 billion', '\\$40 billion', '\\$53 billion', '\\$30 billion'],
              correctAnswer: 0,
              explanation: 'Multiplier $= 1/(1-0.75) = 1/0.25 = 4$. $\\Delta Y = 4 \\times \\$40\\text{B} = \\$160$ billion.',
            },
            {
              question: 'An economy has a \\$300 billion recessionary gap and $MPC = 0.8$ (multiplier $= 5$). The required increase in government spending to close it is:',
              options: ['\\$60 billion', '\\$300 billion', '\\$1500 billion', '\\$240 billion'],
              correctAnswer: 0,
              explanation: 'Required spending $=$ gap $\\div$ multiplier $= \\$300\\text{B} / 5 = \\$60$ billion. The multiplier amplifies that \\$60B back up to a \\$300B rise in GDP.',
            },
          ],
        },
      },
      {
        id: 'adas5-mult-drop',
        type: 'dropdown-select' as const,
        content: `**Match the Multiplier** 🔽

Pick the correct value for each scenario.`,
        exercise: {
          dropdowns: [
            { label: '$MPC = 0.5 \\Rightarrow$ multiplier:', options: ['$2$', '$5$', '$0.5$', '$10$'] },
            { label: '$MPS = 0.4 \\Rightarrow$ multiplier:', options: ['$2.5$', '$4$', '$0.4$', '$6$'] },
            { label: 'A higher MPC makes the multiplier:', options: ['Larger', 'Smaller', 'Unchanged', 'Negative'] },
          ],
          correctAnswers: ['$2$', '$2.5$', 'Larger'],
          hint1: '$MPC = 0.5 \\Rightarrow MPS = 0.5 \\Rightarrow 1/0.5 = 2$.',
          hint2: 'Given MPS directly: $1/0.4 = 2.5$.',
          hint3: 'More of each dollar re-spent (higher MPC) means a larger multiplier.',
          explanation: '$1/(1-0.5) = 1/0.5 = 2$. $1/0.4 = 2.5$. A higher MPC re-spends more of each dollar, so the multiplier is larger.',
        },
      },
      {
        id: 'adas5-recap',
        type: 'text' as const,
        content: `## Part 5 Recap

- $MPC + MPS = 1$; multiplier $= \\dfrac{1}{1-MPC} = \\dfrac{1}{MPS}$.
- Total AD shift $= \\text{multiplier} \\times \\text{initial spending}$.
- Required spending to close a gap $=$ gap $\\div$ multiplier.

> 💡 The multiplier is *why* small policy changes can move the whole AD curve. Now let's watch AD and AS shifts play out as the business cycle. 🔄`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas6-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 6 of 7 — Shocks, Self-Correction & Policy**

---

> 🔑 **Putting the model to work:** Every recession, boom, and inflation episode is a story about AD or AS shifting. This part traces those shifts, shows how the economy **self-corrects** in the long run, and previews how **policy** can close gaps faster.`,
      },
      {
        id: 'adas6-demand-shocks',
        type: 'text' as const,
        content: `## Demand-Side Shocks

Start from long-run equilibrium, then shift **AD**:

| Shock | AD moves | Short-run result | Gap |
|-------|----------|------------------|-----|
| Spending boom (confidence ↑) | Right | Price level ↑, real GDP ↑ | **Inflationary** ($Y > Y_f$) |
| Spending collapse (confidence ↓) | Left | Price level ↓, real GDP ↓ | **Recessionary** ($Y < Y_f$) |

Key fact: a pure **AD shift moves the price level and output in the same direction** (both up, or both down).

> 💡 This is the signature of a demand shock: prices and output rise together (inflationary boom) or fall together (demand-driven recession).`,
      },
      {
        id: 'adas6-supply-shocks',
        type: 'text' as const,
        content: `## Supply-Side Shocks

Now shift **SRAS** instead:

| Shock | SRAS moves | Short-run result |
|-------|-----------|------------------|
| Negative supply shock (oil spike) | Left | Price level ↑, real GDP ↓ → **stagflation** |
| Positive supply shock (cheaper inputs, productivity ↑) | Right | Price level ↓, real GDP ↑ |

Key fact: a **SRAS shift moves the price level and output in *opposite* directions**.

> ⚠️ **Stagflation** — rising prices *and* falling output at once — can only come from a leftward **SRAS** shift, never from an AD shift. The AP exam loves this distinction.`,
      },
      {
        id: 'adas6-shock-drop',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Shock** 🔽

Read the symptoms; identify the curve and direction.`,
        exercise: {
          dropdowns: [
            { label: 'Price level ↑ and real GDP ↑ together:', options: ['AD shifts right', 'AD shifts left', 'SRAS shifts left', 'SRAS shifts right'] },
            { label: 'Price level ↑ but real GDP ↓ (stagflation):', options: ['SRAS shifts left', 'AD shifts right', 'AD shifts left', 'SRAS shifts right'] },
            { label: 'Price level ↓ and real GDP ↓ together:', options: ['AD shifts left', 'AD shifts right', 'SRAS shifts left', 'SRAS shifts right'] },
          ],
          correctAnswers: ['AD shifts right', 'SRAS shifts left', 'AD shifts left'],
          hint1: 'Same-direction price & output → a demand shift; opposite-direction → a supply shift.',
          hint2: 'Stagflation (prices up, output down) is the fingerprint of a leftward SRAS shift.',
          hint3: 'Prices and output falling together is a leftward AD shift (a demand-driven recession).',
          explanation: 'PL ↑ & GDP ↑ → AD right. PL ↑ & GDP ↓ → SRAS left (stagflation). PL ↓ & GDP ↓ → AD left. Demand shifts move PL and Y the same way; supply shifts move them opposite ways.',
        },
      },
      {
        id: 'adas6-self-correct',
        type: 'text' as const,
        content: `## Long-Run Self-Correction

Even with no policy, the economy drifts back to potential as wages adjust:

- **Recessionary gap** ($Y < Y_f$): high unemployment puts *downward* pressure on wages. As nominal wages fall, **SRAS shifts right**, lowering the price level and raising output back to $Y_f$.
- **Inflationary gap** ($Y > Y_f$): tight labor markets push wages *up*. As nominal wages rise, **SRAS shifts left**, raising the price level and pulling output back down to $Y_f$.

> 🔑 Self-correction works through **SRAS moving along the fixed LRAS** until $Y = Y_f$ again. It is slow — which is the case for active **fiscal/monetary policy** to speed things up.

### Policy preview

| Gap | Self-correction (SRAS) | Discretionary policy |
|-----|------------------------|----------------------|
| Recessionary | Wages fall → SRAS right | **Expansionary**: shift AD right (↑$G$, ↓taxes, ↑money supply) |
| Inflationary | Wages rise → SRAS left | **Contractionary**: shift AD left (↓$G$, ↑taxes, ↓money supply) |`,
      },
      {
        id: 'adas6-policy-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An economy is in a recessionary gap and policymakers do nothing. Self-correction occurs because:',
              options: ['High unemployment lowers nominal wages, shifting SRAS right', 'AD spontaneously shifts right on its own', 'LRAS shifts left to meet output', 'The price level is fixed forever'],
              correctAnswer: 0,
              explanation: 'In a recessionary gap, unemployment pushes nominal wages down. Lower input costs shift SRAS right, raising output back toward potential ($Y_f$) and lowering the price level.',
            },
            {
              question: 'To close an inflationary gap, appropriate discretionary policy is:',
              options: ['Contractionary policy that shifts AD left', 'Expansionary policy that shifts AD right', 'A policy that shifts LRAS left', 'No change to AD or AS'],
              correctAnswer: 0,
              explanation: 'An inflationary gap ($Y > Y_f$) calls for contractionary policy — cut $G$, raise taxes, or reduce the money supply — to shift AD left back to potential, easing inflation.',
            },
          ],
        },
      },
      {
        id: 'adas6-policy-drill',
        type: 'input-boxes' as const,
        content: `**Size the Policy** 🧮

Required spending change $=$ gap $\\div$ multiplier. Recall multiplier $= \\dfrac{1}{1 - MPC}$. Enter numbers in billions.

**1)** A \\$400B recessionary gap, $MPC = 0.75$ (multiplier $= 4$). Required increase in $G$ $= \\,?$
**2)** A \\$200B inflationary gap, $MPC = 0.8$ (multiplier $= 5$). Required cut in $G$ $= \\,?$
**3)** $MPC = 0.5$, so the multiplier $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '40', '2'],
          hint1: 'Required spending $=$ gap $\\div$ multiplier $= 400 / 4$.',
          hint2: 'Closing a \\$200B gap with multiplier $5$: $200 / 5$.',
          hint3: '$MPC = 0.5 \\Rightarrow MPS = 0.5 \\Rightarrow 1/0.5 = 2$.',
          explanation: '1) $400 / 4 = \\$100$B. 2) $200 / 5 = \\$40$B. 3) $1/(1-0.5) = 2$. Always divide the gap by the multiplier to find the spending change needed.',
        },
      },
      {
        id: 'adas6-recap',
        type: 'text' as const,
        content: `## Part 6 Recap

- **Demand shocks**: PL and output move the **same** direction.
- **Supply shocks**: PL and output move in **opposite** directions (left SRAS = stagflation).
- **Self-correction** works through SRAS sliding along LRAS back to $Y_f$ — slowly.
- Policy can shift AD to close gaps faster: expansionary for recessions, contractionary for inflation.

Time to bring it all together in the **mastery check**. ✅`,
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'macro-aggregate-demand-supply',
    sections: [
      {
        id: 'adas7-intro',
        type: 'text' as const,
        content: `# 📉 Aggregate Demand & Aggregate Supply

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) explain why AD slopes down and what shifts it, (2) distinguish SRAS from LRAS, (3) find equilibrium and identify output gaps, (4) apply the multiplier, and (5) diagnose demand vs. supply shocks. Let's put it together. 🧩`,
      },
      {
        id: 'adas7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| AD slopes down | Wealth, interest-rate, net-export effects |
| AD shifters | Change in $C$, $I$, $G$, or $NX$ at a fixed price level |
| SRAS | Upward (sticky wages); shifts with input costs & productivity |
| LRAS | Vertical at potential $Y_f$; shifts only with real capacity (growth) |
| Equilibrium | AD = SRAS → equilibrium $PL$ and $Y$ |
| Output gap | $Y - Y_f$ (negative = recessionary, positive = inflationary) |
| Multiplier | $\\dfrac{1}{1-MPC} = \\dfrac{1}{MPS}$; $\\Delta Y = \\text{mult} \\times \\Delta\\text{spending}$ |
| Demand shock | PL and $Y$ move the **same** way |
| Supply shock | PL and $Y$ move **opposite** ways (left SRAS = stagflation) |

> ⚠️ Remember: *price level → movement along AD; everything else → shift.* And only **SRAS-left** causes stagflation.`,
      },
      {
        id: 'adas7-mixed-drop',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

One question from each major idea.`,
        exercise: {
          dropdowns: [
            { label: 'A lower price level raises the real value of money holdings:', options: ['Wealth effect', 'Net-export effect', 'Multiplier effect', 'Supply shock'] },
            { label: 'Output \\$11T, potential \\$12T → gap type:', options: ['Recessionary gap', 'Inflationary gap', 'Long-run equilibrium', 'Stagflation'] },
            { label: '$MPC = 0.75 \\Rightarrow$ multiplier:', options: ['$4$', '$5$', '$1.33$', '$0.25$'] },
            { label: 'Oil-price spike shifts SRAS left → result:', options: ['Stagflation (PL ↑, GDP ↓)', 'PL ↑, GDP ↑', 'PL ↓, GDP ↓', 'No change'] },
          ],
          correctAnswers: ['Wealth effect', 'Recessionary gap', '$4$', 'Stagflation (PL ↑, GDP ↓)'],
          hint1: 'Real value of money rising = the wealth (real-balances) effect.',
          hint2: '\\$11T < \\$12T means output is below potential.',
          hint3: '$1/(1-0.75) = 1/0.25 = 4$; a leftward SRAS shift raises prices while cutting output.',
          explanation: 'Wealth effect (money worth more). \\$11T < \\$12T → recessionary gap. $1/0.25 = 4$. SRAS-left → stagflation: price level up, real GDP down.',
        },
      },
      {
        id: 'adas7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Numerical Practice** 🧮

**1)** $MPC = 0.9$. Multiplier $= \\,?$
**2)** With that multiplier, an initial \\$20B rise in $G$ shifts AD right by how many **billions**? (enter the number) $= \\,?$
**3)** Equilibrium GDP \\$9.7T, potential \\$10.0T. Output gap in trillions (signed) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '200', '-0.3'],
          hint1: '$1/(1-0.9) = 1/0.1 = 10$.',
          hint2: '$\\Delta Y = \\text{multiplier} \\times \\Delta G = 10 \\times 20 = 200$ (billion).',
          hint3: '$9.7 - 10.0 = -0.3$ trillion → a recessionary gap.',
          explanation: '1) multiplier $= 1/0.1 = 10$. 2) $10 \\times \\$20\\text{B} = \\$200$ billion. 3) $9.7 - 10.0 = -0.3$T (recessionary gap).',
        },
      },
      {
        id: 'adas7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which event causes a movement ALONG the aggregate demand curve rather than a shift of it?',
              options: ['A change in the overall price level', 'A cut in income taxes', 'A surge in consumer confidence', 'An increase in government spending'],
              correctAnswer: 0,
              explanation: 'Only a change in the price level moves you along a fixed AD curve. Tax cuts, confidence surges, and more government spending change spending at a given price level, so they shift AD.',
            },
            {
              question: 'The long-run aggregate supply (LRAS) curve is vertical because, in the long run, real GDP is determined by:',
              options: ['The economy\'s productive capacity (potential output), independent of the price level', 'The current price level', 'Aggregate demand alone', 'The marginal propensity to consume'],
              correctAnswer: 0,
              explanation: 'In the long run all wages and prices adjust, so output settles at potential ($Y_f$) regardless of the price level — hence a vertical LRAS at the economy\'s productive capacity.',
            },
            {
              question: 'An economy starts at full employment, then experiences a sharp leftward shift of SRAS from a negative supply shock. The short-run result is:',
              options: ['A higher price level and lower real GDP (stagflation)', 'A higher price level and higher real GDP', 'A lower price level and higher real GDP', 'No change in price level or output'],
              correctAnswer: 0,
              explanation: 'A leftward SRAS shift raises the price level while lowering real GDP — the simultaneous inflation-and-recession combination known as stagflation. Supply shifts always move PL and Y in opposite directions.',
            },
          ],
        },
      },
    ],
  },
]
