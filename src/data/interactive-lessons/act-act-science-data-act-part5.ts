export const actScienceDataPart5Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p5-intro',
      type: 'text' as const,
      content: `
# 🔮 Making Predictions

**Part 5 of 7 — Interpolation, Extrapolation, Working Backward, and Prediction Error**

ACT Science regularly asks for a value the researchers never measured: "If a trial were run at 25°C ..." or "If the trend continues ...". Every such question is one of two kinds.

| Kind | The new value is ... | Example (data measured at 10, 20, 30, 40°C) |
|---|---|---|
| **Interpolation** | **inside** the measured range | estimate at 25°C |
| **Extrapolation** | **outside** the measured range | estimate at 55°C, or at 0°C |

## Interpolation: Estimating Between Points

1. **Find the true neighbors.** Locate the two measured x-values just below and just above the new x. If the x-values are unevenly spaced (0, 10, 30, 50), the neighbors of 20 are 10 and 30, not the next two rows.
2. **Find how far along you are.** 20 is halfway from 10 to 30, so the fraction is 1/2. 17 between 10 and 20 is 7/10 of the way.
3. **Go the same fraction of the way in y.** Halfway between 20.0 and 12.0 is 16.0.

The answer **must lie between the two neighboring y-values**. That alone eliminates many choices.

**Curved data:** linear interpolation assumes a straight line between points. If the curve is bending, the true value differs a little from the straight-line estimate. For a curve that is falling and flattening (like a cooling cup of coffee), the curve sags **below** the straight line between two points, so the true value is slightly lower than the linear estimate. On most ACT questions, though, the straight-line estimate (or "between these two values") is what the question wants.

## Working Backward

Given a y-value, find the x-value. Locate the two y-values that bracket it, then go the same fraction of the way between their x-values. Example: if 40 g/L gives −2.4°C and 60 g/L gives −3.6°C, then −3.0°C (halfway) corresponds to about 50 g/L.

## Extrapolation: Extending the Pattern

1. **Identify the pattern.** Constant difference (+5 each step) → keep adding 5. Constant ratio (halves each step) → keep halving.
2. **Count the steps** from the last measured value to the target.
3. **Apply the pattern** that many times.

**To find when a target is reached:** time needed = (gap to target) ÷ (rate). If a mass falls 4 g/min and is now at 36 g, reaching 20 g takes 16 ÷ 4 = 4 more minutes. Add that to the current time to get the clock time.

**Caution:** extrapolation assumes the pattern keeps going, and real patterns often change outside the tested range. Growth levels off, a cooling object stops at room temperature, an enzyme stops working at high heat. The ACT signals when to assume the pattern continues ("if the trend continues"); when a passage gives a physical limit (room temperature, 100% germination, zero mass), a prediction cannot cross it.

## Predicted vs. Measured: Prediction Error

When a passage compares a model's predictions with measurements:

| Quantity | Formula | Notes |
|---|---|---|
| Signed difference | measured − predicted | Positive means the model guessed too low |
| **Absolute error** | the distance between predicted and measured | Always positive; ignore the sign |
| Percent error | absolute error ÷ accepted value × 100 | Lets you compare errors on different scales |

"Which prediction was **closest**" or "largest **error**" uses **absolute** error. A prediction that is 5 too high is farther off than one that is 3 too low.

## Common Prediction Traps

| Trap | How to avoid it |
|---|---|
| Using the wrong neighbors on uneven x-spacing | Find the rows just below and just above the new x |
| Copying a neighboring row | An interpolated value lies strictly between the neighbors |
| Reporting the extra time instead of the clock time | Add the extra time to the last measured time |
| Extrapolating past a physical limit | Check the passage for a floor or ceiling |
| Using signed differences for "closest" | Use absolute error |
      `
    },
    {
      id: 'act-sdata-p5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Uneven spacing, forward and backward</b></summary>

A thermometer was placed at different distances from a heat lamp.

| Distance (cm) | 10 | 20 | 40 | 80 |
|---|---|---|---|---|
| Temperature (°C) | 48 | 40 | 32 | 26 |

**Question 1:** Estimate the temperature at 30 cm.

The neighbors of 30 cm are **20 cm and 40 cm** (not 10 and 20). 30 is halfway between them, so the temperature is halfway between 40 and 32: **36°C**.

**Question 2:** At about what distance would the temperature be 29°C?

29°C lies between 32°C (40 cm) and 26°C (80 cm), exactly halfway. Halfway from 40 cm to 80 cm is **60 cm**.

Notice that equal temperature steps take larger and larger distance steps. The spacing of the table is a clue that the relationship is not linear over the whole range, which is why you should always interpolate between the **nearest** rows.
</details>

<details>
<summary><b>Example 2: Extending a trend, and its limit</b></summary>

A water tank was drained through a valve.

| Time (min) | 0 | 5 | 10 | 15 |
|---|---|---|---|---|
| Water remaining (L) | 120 | 105 | 90 | 75 |

**Question:** If the trend continues, when will the tank be empty?

1. **Pattern:** the tank loses 15 L every 5 min, a rate of 3 L/min.
2. **Gap:** 75 L remain at 15 min.
3. **Time needed:** 75 ÷ 3 = 25 more minutes.
4. **Clock time:** 15 + 25 = **40 min**.

Answering 25 min reports only the extra time. And the pattern cannot continue past 40 min: a tank cannot hold negative water, so any prediction of "−15 L at 45 min" is impossible.
</details>
      `
    },
    {
      id: 'act-sdata-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Estimate It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student measured how much light a dye solution absorbed at different concentrations.

| Dye (mg/L) | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|
| Light absorbed (%) | 0 | 12 | 24 | 36 | 48 |

Based on the table, a solution of 12.5 mg/L would absorb about:`,
            options: [`12.5%`, `24%`, `30%`, `36%`],
            correctAnswer: 2,
            explanation: `12.5 mg/L is halfway between 10 and 15 mg/L, so the absorption is halfway between 24% and 36%, which is 30%. Choosing 24% or 36% copies a neighboring row instead of estimating between them. The value 12.5% repeats the concentration as if it were the percent absorbed.`
          },
          {
            question: `An enzyme's activity was measured at pH 4, 5, 6, 7, and 8. Which of the following estimates would require extrapolation?`,
            options: [`Activity at pH 4.5`, `Activity at pH 6.5`, `Activity at pH 7.5`, `Activity at pH 9.5`],
            correctAnswer: 3,
            explanation: `Extrapolation means estimating outside the measured range, and pH 9.5 is above the highest tested pH of 8. The values pH 4.5, 6.5, and 7.5 each fall between two measured pH values, so estimating at any of them is interpolation.`
          },
          {
            question: `The table shows the boiling point of salt water at several salt masses per liter.

| Salt (g) | 0 | 10 | 20 | 30 |
|---|---|---|---|---|
| Boiling point (°C) | 100.0 | 100.6 | 101.2 | 101.8 |

What mass of salt per liter would give a boiling point of 100.9°C?`,
            options: [`15 g`, `10 g`, `20 g`, `25 g`],
            correctAnswer: 0,
            explanation: `100.9°C is halfway between 100.6°C (10 g) and 101.2°C (20 g), so the salt mass is halfway between, at 15 g. Choosing 10 g or 20 g picks a neighboring row instead of estimating between them. A mass of 25 g would give about 101.5°C.`
          },
          {
            question: `A model predicted the height a ball would bounce, and the actual bounce was then measured.

| Trial | Predicted (cm) | Measured (cm) |
|---|---|---|
| 1 | 40.0 | 43.0 |
| 2 | 55.0 | 53.5 |
| 3 | 70.0 | 72.0 |
| 4 | 85.0 | 80.0 |

In which trial was the prediction closest to the measured value?`,
            options: [`Trial 1`, `Trial 2`, `Trial 3`, `Trial 4`],
            correctAnswer: 1,
            explanation: `The absolute errors are 3.0, 1.5, 2.0, and 5.0 cm, so Trial 2's prediction was closest. Trial 4 has the most negative signed difference (80.0 − 85.0 = −5.0), which can look "smallest," but it is the largest error. Trials 1 and 3 missed by 3.0 and 2.0 cm.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Prediction Vocabulary** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Estimating a value between two measured points is called …',
            options: ['interpolation', 'extrapolation', 'calibration', 'replication']
          },
          {
            label: 'Estimating a value beyond the largest measured x-value is called …',
            options: ['interpolation', 'extrapolation', 'calibration', 'replication']
          },
          {
            label: 'A model predicted 18 s and the measured time was 21 s. The absolute error is …',
            options: ['3 s', '-3 s', '21 s', '39 s']
          }
        ],
        correctAnswers: ['interpolation', 'extrapolation', '3 s'],
        hint1: 'The prefix "inter-" means between.',
        hint2: 'The prefix "extra-" means outside or beyond.',
        hint3: 'Absolute error is a distance, so it is never negative.',
        explanation: 'Interpolation estimates inside the data range; extrapolation estimates outside it. Absolute error is the distance between predicted and measured values: |21 − 18| = 3 s.'
      }
    },
    {
      id: 'act-sdata-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Set: A Cooling Cup** 📋

A cup of coffee was left to cool in a room kept at **20°C**. Its temperature was recorded at the times shown.

**Table 1**

| Time (min) | 0 | 5 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|---|
| Temperature (°C) | 90 | 74 | 62 | 46 | 36 | 30 |
      `,
      exercise: {
        questions: [
          {
            question: `Assuming the temperature changed linearly between measurements, what was the temperature at 15 min?`,
            options: [`46°C`, `58°C`, `62°C`, `54°C`],
            correctAnswer: 3,
            explanation: `The neighbors of 15 min are 10 min (62°C) and 20 min (46°C), and 15 is halfway between them, so the estimate is (62 + 46) ÷ 2 = 54°C. The values 62°C and 46°C copy a neighboring row. The value 58°C would be the estimate at about 12.5 min, not 15 min.`
          },
          {
            question: `The cooling curve is falling and flattening. Compared with the linear estimate at 15 min, the actual temperature at 15 min was most likely:`,
            options: [`slightly below 54°C`, `slightly above 54°C`, `exactly 54°C`, `below 46°C`],
            correctAnswer: 0,
            explanation: `A curve that falls and flattens sags below the straight line joining two of its points, so the true temperature at 15 min is a little lower than the 54°C straight-line estimate. "Slightly above" has the bend backward, and "exactly 54°C" would require a straight line. The coffee was 46°C at 20 min and still cooling, so it could not already be below 46°C at 15 min.`
          },
          {
            question: `If the coffee were left for 2 hours, its temperature would most likely be:`,
            options: [
              `about 30°C, the same as at 40 min`,
              `about 21°C, just above room temperature`,
              `about −18°C, continuing the last rate`,
              `about 0°C, the freezing point of water`
            ],
            correctAnswer: 1,
            explanation: `Per 10 minutes, the drops are 28, 16, 10, and 6 degrees, shrinking each time, so the coffee is leveling off toward the room's 20°C and will end just above it. It is still cooling at 40 min, so it will not stay at 30°C. Continuing the last rate in a straight line gives −18°C, which is impossible in a 20°C room, and the room temperature, not the freezing point, sets the limit.`
          },
          {
            question: `At about what time did the coffee reach 50°C?`,
            options: [`About 13 min`, `About 15 min`, `About 18 min`, `About 25 min`],
            correctAnswer: 2,
            explanation: `50°C lies between 62°C (10 min) and 46°C (20 min). The drop from 62 to 50 is 12 of the 16 degrees in that interval, or three-quarters of the way, so the time is about 10 + 7.5 = 17.5 min, closest to 18 min. At 15 min the coffee was about 54°C, still above 50°C, and by 25 min it had cooled to about 41°C.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

A detector counted the radiation from a sample every 2 hours.

| Time (h) | 0 | 2 | 4 | 6 |
|---|---|---|---|---|
| Counts per minute | 1,600 | 800 | 400 | 200 |

**Question:** If the trend continues, what will the count rate be at 10 h?

<details>
<summary><b>Show answer</b></summary>

**50 counts per minute.** The pattern is a constant **ratio**: the count halves every 2 hours. From 6 h to 10 h is two more halvings: 200 → 100 (8 h) → 50 (10 h). Subtracting a constant amount instead (the first drop was 800) would give a negative count, which is impossible; the drops themselves shrink by half each step.
</details>
      `
    },
    {
      id: 'act-sdata-p5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Interpolation** estimates inside the measured range; **extrapolation** estimates outside it.
- Interpolate between the **true neighbors**, going the same fraction of the way in y as in x; the answer lies **between** the neighboring values.
- **Work backward** the same way: bracket the given y, then find the matching fraction of x.
- To extrapolate, identify the pattern (**constant difference** or **constant ratio**) and count steps; for "when," use gap ÷ rate, then add to the last time.
- Extrapolations cannot cross a **physical limit** given in the passage.
- "Closest" and "largest error" use **absolute error**, not signed differences.
      `
    }
  ]
};
