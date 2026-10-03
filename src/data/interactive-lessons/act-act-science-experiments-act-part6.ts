export const actScienceExpPart6Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s6-intro',
      type: 'text' as const,
      content: `
# 🔗 Combining Experiments & Predicting New Trials

**Part 6 of 7 — Using Several Studies Together**

The hardest Research Summaries questions ask you to go beyond a single table: combine results from two experiments, predict the outcome of a trial nobody ran, design the next experiment, or decide which results would support a claim. Each of these has a reliable method.

## Skill 1: Interpolation — predicting inside the tested range

If the new condition falls **between** two tested values, the result should fall between their results.

| Wing length (cm) | Fall time (s) |
|---|---|
| 4 | 1.2 |
| 6 | 1.6 |
| 8 | 2.0 |
| 10 | 2.4 |

A 7 cm wing lies halfway between 6 and 8 cm, so its fall time should be about halfway between 1.6 and 2.0 s: **about 1.8 s**. Here the time rises by 0.4 s for every 2 cm, a steady pattern. If the pattern is curved, the estimate is rougher, but it still belongs between the neighbors.

## Skill 2: Extrapolation — predicting outside the range

For a condition **beyond** the tested values, continue the trend only as far as it reasonably goes. ACT answer choices for these questions are often ranges ("greater than 2.4 s") or values that continue the pattern. A 12 cm wing would most likely fall in **more than 2.4 s** (roughly 2.8 s if the pattern holds). Remember from Part 5: an extrapolated value is an estimate, never a certainty.

## Skill 3: Combining two experiments

When Experiment 1 varies one factor and Experiment 2 varies another, find the **shared condition** that links them, then apply each effect in turn.

1. Start from the trial that matches the new condition in one factor.
2. Use the other experiment to see how changing the second factor scales the result (doubles it, halves it, adds a fixed amount).
3. Apply that change.

| Experiment 1 (1 paper clip, 2.0 m drop) | | Experiment 3 (8 cm wings, 1 clip) | |
|---|---|---|---|
| Wing length (cm) | Fall time (s) | Drop height (m) | Fall time (s) |
| 8 | 2.0 | 1.0 | 1.0 |
| 10 | 2.4 | 2.0 | 2.0 |
| | | 3.0 | 3.0 |

Shared condition: 8 cm wings, 1 clip, 2.0 m → 2.0 s in both tables.

**Prediction for 10 cm wings dropped from 1.0 m:** Experiment 1 gives 2.4 s for 10 cm at 2.0 m. Experiment 3 shows that halving the height halves the time (2.0 → 1.0 s). So 10 cm at 1.0 m ≈ 2.4 ÷ 2 = **1.2 s**.

## Skill 4: Designing the next trial

To test a new variable, the new experiment must:

- change **only** the new variable,
- hold every other variable at the values already used (often the shared condition), and
- measure the same DV so the results can be compared with earlier ones.

A choice that changes two things, drops the measurement, or tests a variable already studied is wrong.

## Skill 5: Which results would support a claim?

Turn the claim into a prediction about the data, then find the data set that matches it.

**Claim:** "Increasing the salt concentration of water raises its boiling point."
**Prediction:** as salt goes up, boiling point goes up at every step.

| Data set | Pattern | Supports claim? |
|---|---|---|
| 100.0, 100.4, 100.9 °C | rises each step | Yes |
| 100.0, 99.6, 99.1 °C | falls | No (opposite) |
| 100.0, 100.0, 100.0 °C | flat | No (no effect) |
| 100.0, 100.6, 100.2 °C | rises then falls | No (not consistent) |

## Skill 6: Comparing studies that disagree

When two studies of the same question get different results, look for a **procedural difference**: different subjects, different starting conditions, different amounts, different measurement times. The best explanation is a difference that would plausibly change the DV. For example, a fertilizer that helped plants in poor soil may show no effect in soil that was already rich in the same nutrients.

## Skill 7: Predicting under a hypothesis

"If Hypothesis 2 is correct, what would be the result of the new trial?" Apply the hypothesis's mechanism to the new setup, exactly as you did with "How would Scientist X explain…?" in Part 4. If a hypothesis says plants bend toward blue light but not red, a seedling lit with red from the left and blue from the right should bend **right**.
      `
    },
    {
      id: 'act-s6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Combine two tables</b></summary>

**Data:** Experiment 1 (1 bulb): a light sensor read 400 units at 1 m, 100 at 2 m, and 25 at 4 m. Experiment 2 (sensor at 1 m): 1, 2, and 3 bulbs gave 400, 800, and 1,200 units.

**Question:** Predict the reading for 3 bulbs at 2 m.

**Solution:**
1. Shared condition: 1 bulb at 1 m → 400 in both tables.
2. From Experiment 1, moving from 1 m to 2 m divides the reading by 4.
3. From Experiment 2, 3 bulbs at 1 m gives 1,200.
4. 3 bulbs at 2 m ≈ 1,200 ÷ 4 = **300 units**.
</details>

<details>
<summary><b>Example 2: Explain why two studies disagree</b></summary>

**Studies:** Study A found that Fertilizer N increased lettuce growth by 30%. Study B, using the same fertilizer dose, found no increase.

**Procedural differences:** Study A used sandy soil low in nitrogen; Study B used soil already rich in nitrogen. Study A measured growth after 30 days; Study B measured after 32 days.

**Solution:** A 2-day difference in measurement time is unlikely to erase a 30% effect. Soil that already contains plenty of nitrogen would leave little room for a nitrogen fertilizer to help, so the **soil difference** best explains the conflicting results.
</details>
      `
    },
    {
      id: 'act-s6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set A — Paper Helicopters** 🎯

Students built paper helicopters, added paper clips to the base for weight, and timed how long each took to fall to the floor.

**Experiment 1:** 1 paper clip, dropped from 2.0 m, wing length varied.

| Wing length (cm) | Fall time (s) |
|---|---|
| 4 | 1.2 |
| 6 | 1.6 |
| 8 | 2.0 |
| 10 | 2.4 |

**Experiment 2:** 8 cm wings, dropped from 2.0 m, number of paper clips varied.

| Paper clips | Fall time (s) |
|---|---|
| 1 | 2.0 |
| 2 | 1.5 |
| 3 | 1.2 |
| 4 | 1.0 |

**Experiment 3:** 8 cm wings, 1 paper clip, drop height varied.

| Drop height (m) | Fall time (s) |
|---|---|
| 1.0 | 1.0 |
| 2.0 | 2.0 |
| 3.0 | 3.0 |
      `,
      exercise: {
        questions: [
          {
            question: `If a helicopter with 7 cm wings and 1 paper clip were dropped from 2.0 m, its fall time would most likely be closest to:`,
            options: [`1.4 s`, `1.8 s`, `2.2 s`, `2.6 s`],
            correctAnswer: 1,
            explanation: `A 7 cm wing lies halfway between the 6 cm (1.6 s) and 8 cm (2.0 s) trials, so its fall time should be about 1.8 s. A value of 1.4 s falls between the 4 and 6 cm results, which would fit a shorter wing. A value of 2.2 s fits a wing between 8 and 10 cm, and 2.6 s is longer than even the 10 cm wing took.`
          },
          {
            question: `If the students had also tested a helicopter with 12 cm wings, 1 paper clip, and a 2.0 m drop, the fall time would most likely have been:`,
            options: [
              `less than 1.2 s`,
              `between 1.2 s and 2.0 s`,
              `between 2.0 s and 2.4 s`,
              `greater than 2.4 s`
            ],
            correctAnswer: 3,
            explanation: `In Experiment 1, fall time rose steadily with wing length, reaching 2.4 s at 10 cm, so a 12 cm wing would most likely take longer than 2.4 s. Less than 1.2 s is shorter than the 4 cm wing's time. Times between 1.2 and 2.0 s fit wings from 4 to 8 cm, and times between 2.0 and 2.4 s fit wings from 8 to 10 cm, all shorter than 12 cm.`
          },
          {
            question: `Which combination of conditions was tested in all three experiments?`,
            options: [
              `8 cm wings, 1 clip, 2.0 m drop`,
              `8 cm wings, 2 clips, 2.0 m drop`,
              `10 cm wings, 1 clip, 2.0 m drop`,
              `8 cm wings, 1 clip, 3.0 m drop`
            ],
            correctAnswer: 0,
            explanation: `Experiment 1 includes 8 cm wings with 1 clip at 2.0 m, Experiment 2 includes 1 clip with 8 cm wings at 2.0 m, and Experiment 3 includes a 2.0 m drop with 8 cm wings and 1 clip; all three gave 2.0 s. Two clips appear only in Experiment 2, 10 cm wings only in Experiment 1, and a 3.0 m drop only in Experiment 3.`
          },
          {
            question: `Based on Experiments 2 and 3, a helicopter with 8 cm wings and 2 paper clips dropped from 4.0 m would most likely fall in about:`,
            options: [`1.5 s`, `2.0 s`, `3.0 s`, `4.0 s`],
            correctAnswer: 2,
            explanation: `Experiment 2 gives 1.5 s for 2 clips at 2.0 m, and Experiment 3 shows that doubling the drop height doubles the fall time, so 4.0 m gives about 3.0 s. A time of 1.5 s ignores the higher drop. A time of 2.0 s is the 1-clip result at 2.0 m, and 4.0 s doubles the 1-clip time instead of the 2-clip time.`
          }
        ]
      }
    },
    {
      id: 'act-s6-input',
      type: 'input-boxes' as const,
      content: `
**Predict the Fall Times** 🧮

Use the helicopter experiments. Give each answer in seconds.

1) 10 cm wings, 1 clip, dropped from 1.0 m

2) 8 cm wings, 4 clips, dropped from 1.0 m

3) 5 cm wings, 1 clip, dropped from 2.0 m
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.2', '0.5', '1.4'],
        hint1: 'Experiment 1 gives 2.4 s for 10 cm at 2.0 m; Experiment 3 shows halving the height halves the time.',
        hint2: 'Experiment 2 gives 1.0 s for 4 clips at 2.0 m; now halve the height.',
        hint3: '5 cm is halfway between 4 cm (1.2 s) and 6 cm (1.6 s).',
        explanation: '1) 2.4 ÷ 2 = 1.2 s. 2) 1.0 ÷ 2 = 0.5 s. 3) Halfway between 1.2 and 1.6 s is 1.4 s.'
      }
    },
    {
      id: 'act-s6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set B — Design, Support, and Predict** 📋
      `,
      exercise: {
        questions: [
          {
            question: `The students want to test whether the type of paper affects fall time. Which new experiment would best do this, while allowing comparison with their earlier results?`,
            options: [
              `Build 8 cm helicopters from cardstock and from regular paper, each with 1 clip, and drop them from 2.0 m`,
              `Build cardstock helicopters with 4, 6, 8, and 10 cm wings, each with 1 clip, and drop them from 2.0 m`,
              `Build an 8 cm cardstock helicopter with 2 clips and a regular one with 1 clip, and drop both from 2.0 m`,
              `Build 8 cm helicopters from cardstock and from regular paper with 1 clip, and count their spins`
            ],
            correctAnswer: 0,
            explanation: `Comparing the two papers while holding wing length, clips, and height at the shared condition changes only the paper type and measures the same fall time as before. Testing cardstock alone at several wing lengths never compares it with regular paper. Giving the two helicopters different numbers of clips adds a confound, and counting spins switches the DV so the results cannot be compared with fall times.`
          },
          {
            question: `A student claims that dissolving more sugar in water lowers its freezing point. Which set of results, all measured the same way, would best support this claim?`,
            options: [
              `0 g/L: 0.0 °C; 100 g/L: 0.0 °C; 200 g/L: 0.0 °C`,
              `0 g/L: 0.0 °C; 100 g/L: 0.6 °C; 200 g/L: 1.2 °C`,
              `0 g/L: 0.0 °C; 100 g/L: -0.6 °C; 200 g/L: -0.3 °C`,
              `0 g/L: 0.0 °C; 100 g/L: -0.6 °C; 200 g/L: -1.2 °C`
            ],
            correctAnswer: 3,
            explanation: `The claim predicts that the freezing point drops each time more sugar is added, and only the set falling from 0.0 to -0.6 to -1.2 °C shows that. An unchanged freezing point shows no effect, and a rising freezing point is the opposite of the claim. A drop followed by a rise at 200 g/L does not support a steady lowering.`
          },
          {
            question: `Hypothesis: Seedlings bend toward blue light but are not affected by red light. In a new trial, a seedling is lit by red light from its left side and by blue light from its right side. If the hypothesis is correct, the seedling should:`,
            options: [
              `bend to the left, toward the red light`,
              `grow straight up without bending at all`,
              `bend to the right, toward blue`,
              `bend left first, then right as it grows`
            ],
            correctAnswer: 2,
            explanation: `The hypothesis says only blue light causes bending, so with blue on the right the seedling should bend right. Bending toward the red light contradicts the claim that red has no effect. Growing straight would mean neither light had an effect, and bending one way and then the other has no basis in the hypothesis.`
          },
          {
            question: `Study A found that a fertilizer increased lettuce growth by 30%, but Study B, using the same dose, found no increase. Which difference between the studies would best explain the conflicting results?`,
            options: [
              `Study B's soil already contained ample amounts of the fertilizer's nutrients`,
              `Study B measured the plants after 32 days rather than after 30 days`,
              `Study B used plastic pots, while Study A used clay pots of the same size`,
              `Study B recorded its results in a notebook instead of a spreadsheet`
            ],
            correctAnswer: 0,
            explanation: `If the soil in Study B already held plenty of the nutrients the fertilizer supplies, adding more would have little effect, which explains the missing increase. A 2-day difference in timing is too small to erase a 30% effect. Pot material of the same size is unlikely to cancel a fertilizer effect, and how results were recorded cannot change the plants' growth.`
          }
        ]
      }
    },
    {
      id: 'act-s6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Mini-passage:** Experiment 1 (all wires 1 m long) measured the resistance of copper wires with diameters 0.5, 1.0, and 2.0 mm: 0.088, 0.022, and 0.0055 ohms. Experiment 2 (all wires 1.0 mm in diameter) measured lengths of 1, 2, and 4 m: 0.022, 0.044, and 0.088 ohms.

1. Predict the resistance of a 4 m wire with a 0.5 mm diameter.
2. Which new trial would test whether copper and aluminum wires differ in resistance?

<details>
<summary><b>Answers</b></summary>

1. A 1 m, 0.5 mm wire has 0.088 ohms. Experiment 2 shows that 4 times the length gives 4 times the resistance, so 4 m gives about **0.35 ohms** (0.088 × 4 = 0.352).
2. Measure a 1 m copper wire and a 1 m aluminum wire, both 1.0 mm in diameter, with the same equipment. Only the metal changes, and the copper result can be checked against the known 0.022 ohms.
</details>

**ACT Tip:** For a combined prediction, say the chain out loud: "Start at the tested value, then double (or halve) for the other factor." Wrong answers usually skip one link of the chain.
      `
    },
    {
      id: 'act-s6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Interpolate** between neighboring tested values; **extrapolate** cautiously, following the trend's direction.
- To combine experiments, start from the shared condition or a matching trial and apply the second factor's effect.
- A good new trial changes only the new variable and keeps everything else at the earlier values, measuring the same DV.
- To find data that support a claim, turn the claim into a predicted pattern and match it at every step.
- Conflicting studies are best explained by a procedural difference that would plausibly change the DV.
      `
    }
  ]
}
