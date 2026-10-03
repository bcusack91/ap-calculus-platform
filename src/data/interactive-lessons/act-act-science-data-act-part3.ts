export const actScienceDataPart3Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p3-intro',
      type: 'text' as const,
      content: `
# 📉 Identifying Trends

**Part 3 of 7 — Direct, Inverse, Linear, Leveling Off, and Peaks**

"As X increases, Y ..." is one of the most common ways an ACT Science question begins. To answer it, you need a precise vocabulary for trends and a quick way to check which one the data show.

## The Trend Vocabulary

| Trend | What the data do | Example values of y as x increases |
|---|---|---|
| **Direct (positive)** | y increases as x increases | 4, 7, 11, 16 |
| **Inverse (negative)** | y decreases as x increases | 50, 38, 29, 23 |
| **Linear** | y changes by the **same amount** for each equal step in x | 10, 14, 18, 22 |
| **Accelerating** | The changes get **larger** each step | 2, 3, 6, 12, 25 |
| **Leveling off** | The changes get **smaller**; y approaches a plateau | 20, 28, 33, 35, 35.5 |
| **Peak (optimum)** | y rises, reaches a maximum, then falls | 12, 25, 38, 31, 9 |
| **Trough** | y falls, reaches a minimum, then rises | 40, 22, 15, 21, 37 |
| **No clear relationship** | y stays about the same or jumps around with no pattern | 31, 29, 32, 30, 31 |

## The First-Differences Check

When x goes up in equal steps, subtract each y-value from the next one. The list of differences tells you the shape:

| Differences | Shape |
|---|---|
| All the same | Linear |
| Growing | Curving upward (accelerating) |
| Shrinking toward 0 | Leveling off |
| Positive, then negative | Peak |
| Negative, then positive | Trough |

If the x-steps are **unequal**, divide each difference by its own Δx before comparing. A drop of 8 over 20 units is slower than a drop of 6 over 10 units.

## Proportional Relationships

Some questions go beyond "increases" and ask what happens if x **doubles**.

- **Directly proportional:** y ÷ x is constant (the graph is a straight line through the origin). Doubling x doubles y.
- **Inversely proportional:** x × y is constant. Doubling x **halves** y. The graph is a curve that falls quickly, then flattens; it is **not** a straight line.
- **Doubling each step:** if y is multiplied by the same factor for each equal step in x (100, 200, 400, 800), the growth is accelerating, not linear.

Check proportionality by **computing** the ratio or the product for every row. A relationship can be inverse (one goes up, the other down) without being inversely proportional.

## Describing the Whole Trend

- A trend choice must fit **every** step of the data. If one interval goes the other way, "increases only" is wrong, and you may need "increases, then decreases."
- A peak's location is the x-value with the **largest y**, not the first big jump.
- Trends describe the data **within the tested range**. A choice that claims the pattern holds far beyond the data, or "for all values," says more than the table shows.
- With two or more curves or columns, a question may ask about the trend **at each level** of the second variable ("at every stirring speed") or about the trend in the **gap** between two columns.

## Association Is Not Causation

When researchers only **observe** two variables changing together (a survey of ponds, neighborhoods, or patients), the data show an **association**. Other differences between the groups could explain it. A conclusion that one variable **causes** the other needs an experiment in which the researchers changed only that variable. On the ACT, "is associated with," "tended to," and "was higher when" are safe phrasings; "causes" and "proves" usually overreach.

## Common Trend Traps

| Trap | How to avoid it |
|---|---|
| Calling any increase "linear" | Check whether the differences are equal |
| Missing a reversal at the end | Look at the last interval before choosing "increases only" |
| Confusing "inverse" with "inversely proportional" | Compute x × y for each row |
| Picking the peak too early | Find the single largest y-value |
| Turning a correlation into a cause | Ask whether the researchers changed the variable themselves |
      `
    },
    {
      id: 'act-sdata-p3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Classify two trends with first differences</b></summary>

**Table A** — Distance a ball has rolled down a long ramp

| Time (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Distance (m) | 0 | 0.3 | 1.2 | 2.7 | 4.8 |

Differences: 0.3, 0.9, 1.5, 2.1. They **grow** each second, so distance increases at an **accelerating** rate; the ball is speeding up. "Linear increase" is wrong because the steps are not equal.

**Table B** — Oxygen output of a leaf at different light levels

| Light (lux) | 0 | 200 | 400 | 600 | 800 | 1,000 |
|---|---|---|---|---|---|---|
| Oxygen (units/h) | 0 | 14 | 22 | 26 | 27 | 27 |

Differences: 14, 8, 4, 1, 0. They **shrink** to zero, so oxygen output **increases, then levels off**. Adding light beyond about 800 lux produced no more oxygen.
</details>

<details>
<summary><b>Example 2: Is it inversely proportional?</b></summary>

A gas was trapped in a syringe and squeezed at constant temperature.

| Pressure (kPa) | 100 | 150 | 200 | 300 |
|---|---|---|---|---|
| Volume (mL) | 60 | 40 | 30 | 20 |

**Step 1: Direction.** As pressure rises, volume falls, so the relationship is inverse.

**Step 2: Check the product.** 100 × 60 = 6,000; 150 × 40 = 6,000; 200 × 30 = 6,000; 300 × 20 = 6,000. The product is constant, so volume is **inversely proportional** to pressure.

**Step 3: Use it.** At 400 kPa, volume = 6,000 ÷ 400 = **15 mL**. Doubling the pressure from 200 to 400 kPa halves the volume from 30 to 15 mL.

**Why not linear?** The volume drops by 20, then 10, then 10 mL over pressure steps of 50, 50, and 100 kPa. Per kPa, that is 0.4, 0.2, and 0.1 mL; the drop keeps slowing, so the graph curves.
</details>
      `
    },
    {
      id: 'act-sdata-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Name the Trend** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Wheat was grown with different amounts of fertilizer per plot.

| Fertilizer (g) | Yield (kg) |
|---|---|
| 0 | 20 |
| 10 | 28 |
| 20 | 33 |
| 30 | 35 |
| 40 | 35.5 |

As the amount of fertilizer increases, the yield:`,
            options: [`increases, then levels off`, `increases at a steady rate`, `increases, then decreases`, `decreases, then levels off`],
            correctAnswer: 0,
            explanation: `The yield gains are 8, 5, 2, and 0.5 kg per 10 g step, shrinking toward zero, so the yield rises and then levels off. The gains are not equal, so the rate is not steady. No value drops, which rules out both "then decreases" and "decreases, then levels off."`
          },
          {
            question: `A guitar string was shortened, and its frequency was measured.

| String length (cm) | Frequency (Hz) |
|---|---|
| 20 | 600 |
| 40 | 300 |
| 60 | 200 |
| 80 | 150 |

Which statement best describes the relationship?`,
            options: [
              `Frequency is directly proportional to length`,
              `Frequency drops by the same amount per 20 cm`,
              `Frequency does not depend on string length`,
              `Frequency is inversely proportional to length`
            ],
            correctAnswer: 3,
            explanation: `Length × frequency is 12,000 in every row, and doubling the length from 20 to 40 cm halves the frequency, so the relationship is inversely proportional. Direct proportion would need frequency to rise with length. The drops are 300, 100, and 50 Hz, not equal amounts, and a frequency that changes fourfold clearly depends on length.`
          },
          {
            question: `A bacterial culture was counted every hour.

| Hour | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Cells (per mL) | 100 | 200 | 400 | 800 | 1,600 |

Which statement best describes how the count changes?`,
            options: [`It doubles every hour`, `It rises by 100 each hour`, `It rises, then levels off`, `It rises by 50% each hour`],
            correctAnswer: 0,
            explanation: `Each count is twice the one before it (200 ÷ 100 = 2, 1,600 ÷ 800 = 2), so the culture doubles every hour. It rose by 100 only in the first hour; later hours add 200, 400, and 800 cells. The gains grow rather than shrink, so it is not leveling off, and doubling is a 100% increase, not 50%.`
          },
          {
            question: `A survey of 12 ponds found that ponds with more aquatic plants had more dragonfly larvae. The researchers did not add or remove anything from the ponds. Which conclusion is best supported?`,
            options: [
              `Adding plants to a pond raises its larva count`,
              `Larvae cause aquatic plants to grow more quickly`,
              `Plant cover and larva count are unrelated`,
              `Ponds with more plants tended to have more larvae`
            ],
            correctAnswer: 3,
            explanation: `The survey only observed the ponds, so it shows an association: more plants went with more larvae. Claiming that adding plants will raise the count, or that larvae make plants grow, assigns a cause the survey cannot establish, since other pond differences could explain the pattern. A consistent pattern across 12 ponds rules out "unrelated."`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Pattern** 🔍

Each list gives y-values for x = 1, 2, 3, 4, 5.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pattern for y = 3, 6, 9, 12, 15:',
            options: ['linear increase', 'increase that levels off', 'peak', 'trough']
          },
          {
            label: 'Pattern for y = 10, 18, 22, 23, 23:',
            options: ['linear increase', 'increase that levels off', 'peak', 'trough']
          },
          {
            label: 'Pattern for y = 4, 9, 13, 9, 3:',
            options: ['linear increase', 'increase that levels off', 'peak', 'trough']
          }
        ],
        correctAnswers: ['linear increase', 'increase that levels off', 'peak'],
        hint1: 'The differences are 3, 3, 3, 3.',
        hint2: 'The differences are 8, 4, 1, 0.',
        hint3: 'The values rise to 13, then fall.',
        explanation: 'Equal differences mean linear. Differences shrinking to zero mean the increase levels off. Rising to a maximum and then falling is a peak.'
      }
    },
    {
      id: 'act-sdata-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Set: Dissolving Times** 📋

Students timed how long a 2.0 g tablet took to dissolve completely in 200 mL of water at five temperatures and three stirring speeds.

**Table 1** — Time to dissolve (s)

| Water temperature (°C) | No stirring | 100 rpm | 200 rpm |
|---|---|---|---|
| 10 | 240 | 150 | 110 |
| 20 | 180 | 110 | 80 |
| 30 | 135 | 85 | 62 |
| 40 | 100 | 64 | 48 |
| 50 | 76 | 50 | 38 |
      `,
      exercise: {
        questions: [
          {
            question: `According to Table 1, at each stirring speed, as water temperature increases, the time to dissolve:`,
            options: [`increases steadily`, `stays about the same`, `decreases only`, `decreases, then increases`],
            correctAnswer: 2,
            explanation: `In all three columns, every value is smaller than the one above it (for example, 240, 180, 135, 100, 76), so the time decreases only. No column ever rises, which rules out "increases steadily" and "decreases, then increases," and the values change far too much to stay about the same.`
          },
          {
            question: `For the trials with no stirring, the decrease in dissolving time for each 10°C increase in temperature:`,
            options: [`stays the same at each step`, `gets smaller with each step`, `gets larger with each step`, `grows, then shrinks`],
            correctAnswer: 1,
            explanation: `The decreases are 240 − 180 = 60, 180 − 135 = 45, 135 − 100 = 35, and 100 − 76 = 24 s, so each step saves less time than the one before. Equal steps would mean a linear trend, which these are not, and the decreases never grow.`
          },
          {
            question: `At 30°C, how does increasing the stirring speed from no stirring to 200 rpm affect the time to dissolve?`,
            options: [
              `It cuts the time by more than half`,
              `It cuts the time by about a quarter`,
              `It roughly doubles the dissolving time`,
              `It has almost no effect on the time`
            ],
            correctAnswer: 0,
            explanation: `At 30°C the time falls from 135 s to 62 s, and half of 135 is 67.5 s, so the time is cut by more than half. A one-quarter cut would leave about 101 s. Stirring shortens the time rather than doubling it, and a 73 s change is a large effect.`
          },
          {
            question: `Is the time to dissolve with no stirring inversely proportional to the water temperature in °C?`,
            options: [
              `Yes, because the time falls as temperature rises`,
              `Yes, because temperature × time stays near 2,400`,
              `No, because the time rises as temperature rises`,
              `No, because temperature × time is not constant`
            ],
            correctAnswer: 3,
            explanation: `Inverse proportion requires a constant product, but 10 × 240 = 2,400 while 20 × 180 = 3,600 and 50 × 76 = 3,800. Falling time shows an inverse trend, not inverse proportion. The product stays near 2,400 only in the first row, and the time falls rather than rises as temperature increases.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

A biologist measured how many seeds of a desert shrub germinated at different soil moisture levels.

| Soil moisture (%) | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|
| Seeds germinated (of 100) | 8 | 31 | 57 | 64 | 49 | 22 |

**Question:** Which statement best describes the data?

<details>
<summary><b>Show answer</b></summary>

**Germination rises to a maximum at 20% moisture, then falls.** The differences are +23, +26, +7, −15, and −27: positive, then negative, which is a peak. The biggest single jump is from 10% to 15%, but the peak is where the count is largest, 64 at 20%. "Increases with moisture" ignores the last two intervals.
</details>
      `
    },
    {
      id: 'act-sdata-p3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Direct** means both rise; **inverse** means one rises as the other falls.
- Use **first differences**: equal → linear; growing → accelerating; shrinking → leveling off; sign change → peak or trough.
- **Directly proportional:** y ÷ x constant. **Inversely proportional:** x × y constant, so doubling x halves y. Compute it for every row.
- A trend choice must fit **every interval** and only the **tested range**.
- The **peak** is at the largest y-value, not the biggest jump.
- Observational data show **association**, not causation; "tended to" beats "causes."
      `
    }
  ]
};
