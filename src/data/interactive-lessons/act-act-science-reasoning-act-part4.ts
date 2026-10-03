export const actScienceReasonPart4Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# 🔁 Applying Concepts

**Part 4 of 7 — Interpolating, Extrapolating, Finding the Pattern, and Using Results in New Situations**

Many ACT Science questions ask about a value the passage **never measured**: a point between two trials, a point beyond the last trial, or a real-world situation the experiment only models. The skill is always the same: find the pattern, then extend it honestly.

## 1. Interpolation: Between Tested Values

If the data change steadily, a value halfway between two trials gives a result about halfway between their results.

| Time filling (min) | 0 | 10 | 20 | 30 |
|---|---|---|---|---|
| Water depth in tank (cm) | 12 | 18 | 24 | 30 |

15 minutes falls halfway between 10 and 20 minutes, so the depth is about halfway between 18 cm and 24 cm: **21 cm**. Always check the two neighbors: the answer **must** lie between them.

## 2. Extrapolation: "If the Trend Continues"

To go beyond the last trial, use the **typical step size**.

| Altitude (m) | 0 | 1,000 | 2,000 | 3,000 |
|---|---|---|---|---|
| Air pressure (kPa) | 101 | 90 | 79 | 70 |

The pressure falls by about 9 to 11 kPa per 1,000 m, and the drops are shrinking slightly, so at 4,000 m expect about **61 to 62 kPa**. Common traps: repeating the last value (as if the trend stopped) or jumping by far more than one step.

## 3. Identify the Pattern Type

Not every pattern is a straight line. Test the data before you extend them.

| Pattern | Test | Example | Next value |
|---|---|---|---|
| Linear | Y changes by the **same amount** each equal step in X | 10, 16, 22, 28 | 34 |
| Inverse | **X × Y** stays the same; doubling X halves Y | X = 1, 2, 4, 5 with Y = 20, 10, 5, 4 (product 20) | X = 8 gives Y = 2.5 |
| Doubling (exponential) | Y **multiplies** by the same factor each step | 300, 600, 1,200, 2,400 | 4,800 |
| Peak | Y rises, then falls | 5, 12, 20, 13 | keeps falling past the peak |

The inverse pattern is the classic trap: from X = 4 to X = 5 the Y value drops by 1, but it will **not** keep dropping by 1 for each step in X, because the product must stay 20.

## 4. Applying a Result to a New Situation

Map the new situation onto the experiment's variables, then read off the answer.

| Lab finding | Same principle in everyday life |
|---|---|
| Salt water freezes at a lower temperature than fresh water | Salting icy roads, so ice melts even somewhat below 0°C |
| Water boils at a lower temperature at lower air pressure | Water boils below 100°C at high altitude, so pasta cooks more slowly |
| Dark surfaces warmed more in sunlight than light surfaces | Light-colored roofs keep houses cooler in hot climates |
| Foam-wrapped cups lost heat most slowly | Foam coolers and insulated lunch containers |

Be careful to match the **mechanism**, not just the topic: freezing food slows bacteria because of cold, not because of any change in freezing point.

## 5. Combining Two Experiments

Research summaries often vary one factor in Experiment 1 and a different factor in Experiment 2. To predict a combination neither experiment tested:

1. Start from the measured value that shares **one** of the conditions.
2. Use the other experiment to decide whether the second condition pushes the result **up or down**.

If a high dose of fertilizer gave 6.0 cm of growth at 20°C, and the other experiment shows plants grow more slowly at 10°C than at 20°C, then the same high dose at 10°C should give **less than 6.0 cm**.

## 6. Placing a New Trial

Questions often ask where a new trial would fall: "between 1.9 s and 2.3 s," "greater than 3.2 s." Find the two tested values on either side and choose the range between their results, as long as the trend is steady through that region.

**ACT Tip:** Before computing, estimate a range. If your exact answer lands outside the two neighboring values, recheck the pattern.
      `
    },
    {
      id: 'act-s4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Extending an inverse pattern</b></summary>

**Study:** Engineers timed how long identical pumps, working together, took to fill the same tank.

| Number of pumps | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Time to fill (min) | 60 | 30 | 20 | 15 |

**Question:** If the pattern continues, how long would 5 pumps take?

**Solution:**
1. **Test for linear:** the drops are 30, 10, 5 minutes for equal steps, so the time does not fall by a fixed amount.
2. **Test for inverse:** 1 × 60 = 60, 2 × 30 = 60, 3 × 20 = 60, 4 × 15 = 60. The product is constant.
3. **Extend:** time = 60 ÷ 5 = **12 min**.
4. **Trap:** continuing the last drop (5 minutes) would give 10 min, which breaks the constant product.

**Answer: 12 min** ✓
</details>

<details>
<summary><b>Example 2: Combining two experiments</b></summary>

**Experiment 1** (all radish plants at 20°C): 0 g of fertilizer → 3.0 cm of growth per week; 2 g → 4.5 cm; 4 g → 6.0 cm.

**Experiment 2** (all plants given 2 g of fertilizer): 10°C → 2.0 cm per week; 20°C → 4.5 cm; 30°C → 3.5 cm.

**Question:** Predict weekly growth with 4 g of fertilizer at 10°C.

**Solution:**
1. **Start from a shared condition:** 4 g of fertilizer gave 6.0 cm, measured at 20°C.
2. **Adjust with the other experiment:** at 2 g, dropping from 20°C to 10°C cut growth from 4.5 cm to 2.0 cm. Cooler means slower.
3. **Combine:** 4 g at 10°C should be **less than 6.0 cm**. Choosing "more than 6.0 cm" ignores temperature; choosing "exactly 2.0 cm" ignores the extra fertilizer.

**Answer: less than 6.0 cm** ✓
</details>
      `
    },
    {
      id: 'act-s4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Interpolate, Extrapolate, and Find the Pattern** 🎯

> **Table 1:** The pressure of the air inside a sealed steel can was measured at four temperatures.

| Temperature (°C) | 0 | 20 | 40 | 60 |
|---|---|---|---|---|
| Pressure (kPa) | 100 | 107 | 115 | 122 |
      `,
      exercise: {
        questions: [
          {
            question: `Based on Table 1, the pressure at 30°C would be closest to:`,
            options: [
              `104 kPa`,
              `107 kPa`,
              `111 kPa`,
              `118 kPa`
            ],
            correctAnswer: 2,
            explanation: `30°C lies halfway between 20°C and 40°C, so the pressure should lie about halfway between 107 kPa and 115 kPa, near 111 kPa. 107 kPa is the reading at 20°C, not 30°C. 104 kPa falls below the 20°C value and 118 kPa rises above the 40°C value, so neither can be right for a temperature between them.`
          },
          {
            question: `If the trend in Table 1 continues, the pressure at 80°C would be closest to:`,
            options: [
              `122 kPa`,
              `129 kPa`,
              `137 kPa`,
              `144 kPa`
            ],
            correctAnswer: 1,
            explanation: `Pressure rises about 7 to 8 kPa for every 20°C, so one more step past 122 kPa gives about 129 kPa. Keeping 122 kPa assumes the trend stops at 60°C. 137 kPa and 144 kPa add two or three steps' worth of increase for a single 20°C step.`
          },
          {
            question: `A gas was compressed at constant temperature. At 100 kPa its volume was 60 mL; at 150 kPa, 40 mL; at 200 kPa, 30 mL; at 300 kPa, 20 mL. If the pattern continues, its volume at 400 kPa would be:`,
            options: [
              `5 mL`,
              `10 mL`,
              `15 mL`,
              `20 mL`
            ],
            correctAnswer: 2,
            explanation: `Pressure times volume is 6,000 in every trial, so the relationship is inverse and the volume at 400 kPa is 6,000 ÷ 400 = 15 mL. Continuing the last drop of 10 mL gives 10 mL, but an inverse pattern does not fall by a fixed amount. Keeping 20 mL assumes the volume stops changing, and 5 mL falls far faster than the pattern.`
          },
          {
            question: `A bacterial culture held 500 cells at 0 minutes, 1,000 cells at 20 minutes, 2,000 cells at 40 minutes, and 4,000 cells at 60 minutes. If the pattern continues, how many cells would it hold at 80 minutes?`,
            options: [
              `5,000 cells`,
              `6,000 cells`,
              `8,000 cells`,
              `16,000 cells`
            ],
            correctAnswer: 2,
            explanation: `The count doubles every 20 minutes, so 80 minutes gives 4,000 × 2 = 8,000 cells. Adding the last increase of 2,000 gives 6,000, which treats a doubling pattern as linear, and adding 1,000 gives 5,000. 16,000 cells doubles twice, which is the count expected at 100 minutes.`
          }
        ]
      }
    },
    {
      id: 'act-s4-input',
      type: 'input-boxes' as const,
      content: `
**Extend the Pattern** ✏️

Type the number only.

1) Linear: at X = 1, 2, 3, 4, Y = 7, 11, 15, 19. What is Y at X = 5?

2) Inverse: at X = 2, 4, 5, 10, Y = 10, 5, 4, 2. What is Y at X = 20?

3) Interpolate: at X = 10 and X = 20, Y = 36 and Y = 48 (the data are linear). What is Y at X = 15?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['23', '1', '42'],
        hint1: 'Y rises by 4 for each step of 1 in X.',
        hint2: 'X × Y = 20 in every pair.',
        hint3: '15 is halfway between 10 and 20, so Y is halfway between 36 and 48.',
        explanation: '1) 19 + 4 = 23. 2) X × Y = 20, so Y = 20 ÷ 20 = 1. 3) Halfway between 36 and 48 is 42.'
      }
    },
    {
      id: 'act-s4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Apply the Results to New Situations** 📋
      `,
      exercise: {
        questions: [
          {
            question: `Students wrapped identical cups of 70°C water in different materials and measured how much each cooled in 20 minutes: wool, 9°C; aluminum foil, 14°C; foam, 6°C; no wrapping, 18°C. Based on these results, which material would best keep soup hot in a lunch container?`,
            options: [
              `Wool, because it is the material people most often wear in cold weather`,
              `Foam, because the foam-wrapped cup lost the least heat`,
              `Aluminum foil, because metal reflects heat back into the cup`,
              `No wrapping, because an open cup lets the soup breathe`
            ],
            correctAnswer: 1,
            explanation: `The foam-wrapped cup cooled by only 6°C, the smallest drop, so foam kept heat in best. Wool did well, but it let the water cool by 9°C, more than foam did, and what people wear is not part of the data. Foil cooled by 14°C, and the unwrapped cup cooled the most of all, by 18°C.`
          },
          {
            question: `In a lab, students laid a black T-shirt and an identical white T-shirt in sunlight over two thermometers. The air under the black shirt warmed by 9°C and the air under the white shirt by 3°C. Which practice relies on the same finding?`,
            options: [
              `Choosing a white car over a black one to stay cooler`,
              `Storing milk in a refrigerator to slow the growth of bacteria`,
              `Adding ice cubes to a drink so the drink becomes colder`,
              `Cooking food at high altitude, where water boils below 100°C`
            ],
            correctAnswer: 0,
            explanation: `The lab showed that light colors absorb less sunlight than dark colors, which is why a white car stays cooler than a black one parked in the sun. Refrigeration slows bacteria through cold, not color. Ice cools a drink by absorbing heat as it melts, and the lower boiling point at altitude comes from lower air pressure, so neither depends on surface color.`
          },
          {
            question: `Experiment 1 (all plants given 30 mL of water per day): 6 hours of light gave a leaf mass of 1.2 g, 10 hours gave 2.0 g, and 14 hours gave 2.8 g. Experiment 2 (all plants given 10 hours of light): 10 mL of water gave 1.1 g, 30 mL gave 2.0 g, and 50 mL gave 2.4 g. A plant given 14 hours of light and 10 mL of water per day would most likely have a leaf mass:`,
            options: [
              `greater than 2.8 g, because 14 hours of light gave the most mass`,
              `exactly 2.8 g, because water has no effect on the leaf mass`,
              `less than 2.8 g, because 10 mL of water gave less mass than 30 mL`,
              `exactly 1.1 g, because water alone sets the leaf mass of the plant`
            ],
            correctAnswer: 2,
            explanation: `The 2.8 g result for 14 hours of light was measured with 30 mL of water, and Experiment 2 shows that cutting water to 10 mL lowered mass sharply, so the prediction is below 2.8 g. Expecting more than 2.8 g ignores the reduced water. Experiment 2 shows water matters and Experiment 1 shows light matters, so neither "no effect" nor "water alone" fits the data.`
          },
          {
            question: `A cart was released from rest at the top of a track set at different angles: at 15° it took 2.8 s to reach the bottom, at 30° it took 2.0 s, and at 45° it took 1.7 s. If the track were set at 35°, the time would most likely be:`,
            options: [
              `less than 1.7 s`,
              `between 1.7 s and 2.0 s`,
              `between 2.0 s and 2.8 s`,
              `greater than 2.8 s`
            ],
            correctAnswer: 1,
            explanation: `35° falls between the 30° and 45° trials, and time decreased steadily as the angle increased, so the time should fall between their results of 2.0 s and 1.7 s. Less than 1.7 s would be faster than the steeper 45° track. Times between 2.0 s and 2.8 s or above 2.8 s belong to angles below 30°.`
          }
        ]
      }
    },
    {
      id: 'act-s4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> **Table 2:** A student hung masses from a spring and measured the stretch: 50 g, 1.5 cm; 100 g, 3.0 cm; 200 g, 6.0 cm; 300 g, 9.0 cm.

**Question 1:** What stretch would a 150 g mass produce?

**Question 2:** If the pattern continues, what mass would stretch the spring 12.0 cm?

<details>
<summary><b>Show answers</b></summary>

1. **4.5 cm.** The stretch is 3.0 cm per 100 g (a linear pattern), and 150 g is halfway between 100 g and 200 g, so the stretch is halfway between 3.0 cm and 6.0 cm.
2. **400 g.** Each additional 100 g adds 3.0 cm, so 12.0 cm is one step past 9.0 cm, at 400 g. Checking the pattern first (equal differences) is what makes this extrapolation safe.
</details>
      `
    },
    {
      id: 'act-s4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Interpolate** between the two neighboring trials; the answer must lie between their results.
- **Extrapolate** with the typical step size; don't freeze the last value or overshoot.
- Test the **pattern**: equal differences (linear), constant product (inverse), constant multiplier (doubling), or a peak.
- An **inverse** pattern does not fall by a fixed amount; use the constant product.
- Apply a result by matching the new situation to the experiment's **variables and mechanism**.
- To combine two experiments, start from a value that shares one condition and adjust **up or down** with the other experiment.
      `
    }
  ]
}
