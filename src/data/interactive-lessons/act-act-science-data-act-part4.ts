export const actScienceDataPart4Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p4-intro',
      type: 'text' as const,
      content: `
# 🔗 Comparing Data Sets

**Part 4 of 7 — Linking Tables, Comparing Studies, Spread, and Error Bars**

Many ACT Science questions cannot be answered from a single figure. They say "Based on Tables 1 and 2" or "According to Figures 1 and 2," or they ask whether two groups really differ. This part covers both skills.

## Linking Two Tables Through a Shared Variable

When two tables share a variable, you can **chain** them: use the first table to get a value, then carry that value into the second table.

| Step | What to do |
|---|---|
| 1. Find the bridge | Which variable appears in **both** tables? (For example, air pressure appears in a pressure-vs-altitude table and a boiling-point-vs-pressure table.) |
| 2. Check the units | The bridge must be in the same units in both tables, or you must convert |
| 3. Go in | Use the question's given value to read the bridge value from the first table |
| 4. Go out | Find that bridge value in the second table and read the answer |
| 5. Interpolate if needed | If the bridge value falls between rows, estimate between neighbors (Part 5) |

**The classic trap** is stopping halfway and answering with the bridge value itself, such as reporting a pressure when the question asked for a temperature.

## Linking Tables by Labels

Sometimes two tables describe the **same samples** (Sample A, B, C or Trial 1, 2, 3), but the rows are listed in **different orders**. Match by **label**, not by row position. Rewriting the pairs side by side (A: pH 4.5, 12 worms; B: pH 5.5, 30 worms) takes ten seconds and prevents most errors.

## Comparing Two Studies or Two Curves

- **"Both studies show ..."** must be true in **each** study separately. Check every interval for both.
- **Agree vs. disagree:** find the x-values where the two data sets are close and where they split. A question may ask over which range the gap exceeds some amount.
- **Higher vs. faster:** a curve that is higher is not necessarily changing faster. Compare values for "greater," slopes for "faster."
- **Same conditions?** Two studies may cover different ranges or use different units. Compare only where both have data.

## Repeated Trials, Means, and Spread

Scientists repeat trials because measurements vary by chance. For a set of repeated trials:

- The **mean** (average) summarizes the typical value.
- The **range** (largest − smallest) shows the **spread**. A small spread means precise, consistent measurements; a large spread means the mean is less certain.
- Two groups whose trial values **interleave** (some of each group above and below the other) do not clearly differ, even if their means are different.

## Error Bars and ± Values

An **error bar** or a **±** value shows a range of uncertainty around a measured value.

| Reported as | Range |
|---|---|
| 12.4 ± 1.5 kg | 10.9 kg to 13.9 kg |
| 4.62 ± 0.05 g | 4.57 g to 4.67 g |

To compare two groups:

| What you see | Safest conclusion |
|---|---|
| The ranges **do not overlap** | Strong evidence of a real difference |
| The ranges **overlap** | The difference is **uncertain**; it could be chance variation |
| One range sits **entirely inside** another | Very weak evidence of any difference |

**Wider bars mean less precision.** A mean of 50 ± 10 is far less certain than 50 ± 1. The ACT rewards conservative answers here: when bars overlap, avoid choices that say one group "clearly" or "definitely" did better.

## Common Comparison Traps

| Trap | How to avoid it |
|---|---|
| Answering with the bridge value | Ask: which variable does the question want? |
| Matching rows by position | Match by sample or trial label |
| "Both" true in only one study | Check each study on its own |
| Trusting a gap in the means alone | Check the error bars or the spread of trials |
| Mixing units across tables | Convert before chaining |
      `
    },
    {
      id: 'act-sdata-p4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Chaining two tables</b></summary>

**Table 1** — Light at different depths in a lake

| Depth (m) | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| Light (% of surface) | 100 | 60 | 36 | 22 | 13 |

**Table 2** — Growth of an alga at different light levels

| Light (% of surface) | 13 | 22 | 36 | 60 | 100 |
|---|---|---|---|---|---|
| Growth (doublings/day) | 0.4 | 0.9 | 1.6 | 2.3 | 2.6 |

**Question 1:** What is the algae's growth rate at a depth of 4 m?

The bridge is **light**. Table 1: 4 m → 36%. Table 2: 36% → **1.6 doublings/day**. Answering "36" reports the light level, not the growth rate.

**Question 2:** At about what depth would the alga grow at 0.9 doublings per day?

Work backward. Table 2: 0.9 → 22% light. Table 1: 22% → **6 m**.
</details>

<details>
<summary><b>Example 2: Do the error bars overlap?</b></summary>

Three groups of tomato plants were grown for 4 weeks. Each mean height is shown with its uncertainty.

| Group | Mean height (cm) | Uncertainty (cm) | Range (cm) |
|---|---|---|---|
| Control (no supplement) | 21.0 | ± 1.5 | 19.5 to 22.5 |
| Low dose | 22.5 | ± 1.0 | 21.5 to 23.5 |
| High dose | 26.0 | ± 1.2 | 24.8 to 27.2 |

**Question:** Which dose gives clear evidence of taller plants than the control?

- **Low dose:** 21.5 to 23.5 overlaps the control's 19.5 to 22.5. The 1.5 cm gap in the means is uncertain.
- **High dose:** 24.8 to 27.2 sits entirely above 22.5. That is clear evidence.

**Answer: the high dose only.** A choice saying "both doses clearly increased height" trusts the low-dose mean without checking its error bar.
</details>
      `
    },
    {
      id: 'act-sdata-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Link and Compare** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Table 1 lists the density of four rock samples. Table 2 lists the time each sample took to sink 1 m in a column of water.

**Table 1**

| Sample | Density (g/cm³) |
|---|---|
| A | 2.3 |
| B | 2.7 |
| C | 3.0 |
| D | 3.3 |

**Table 2**

| Sample | Time to sink 1 m (s) |
|---|---|
| C | 1.8 |
| A | 2.6 |
| D | 1.6 |
| B | 2.1 |

Based on both tables, as density increases, the time to sink 1 m:`,
            options: [`increases steadily`, `decreases`, `increases, then decreases`, `stays about the same`],
            correctAnswer: 1,
            explanation: `Matching by label, in order of increasing density the times are A 2.6, B 2.1, C 1.8, and D 1.6 s, so the time decreases. Reading Table 2 top to bottom (1.8, 2.6, 1.6, 2.1) matches rows by position, which suggests a pattern that is not there. The times only fall as density rises, so they neither increase steadily nor rise and then fall, and a change of a full second is not staying the same.`
          },
          {
            question: `Table 1 gives the air temperature at four times of day. Table 2 gives the chirp rate of a cricket at four air temperatures.

**Table 1**

| Time of day | 6 a.m. | 9 a.m. | Noon | 3 p.m. |
|---|---|---|---|---|
| Air temperature (°C) | 14 | 18 | 24 | 27 |

**Table 2**

| Air temperature (°C) | 14 | 18 | 24 | 27 |
|---|---|---|---|---|
| Chirps per minute | 52 | 80 | 122 | 143 |

Based on both tables, how many times per minute would the cricket chirp at noon?`,
            options: [`24`, `80`, `122`, `143`],
            correctAnswer: 2,
            explanation: `Table 1 gives 24°C at noon, and Table 2 gives 122 chirps per minute at 24°C. Answering 24 stops at the bridge value, which is a temperature. The value 80 belongs to 9 a.m. (18°C) and 143 belongs to 3 p.m. (27°C).`
          },
          {
            question: `Two labs measured the percent of lettuce seeds that germinated at different salt concentrations.

| Salt (g/L) | Study 1 (%) | Study 2 (%) |
|---|---|---|
| 0 | 92 | 88 |
| 2 | 85 | 86 |
| 4 | 70 | 79 |
| 6 | 41 | 80 |
| 8 | 15 | 52 |

At which salt concentrations do the two studies differ by more than 10 percentage points?`,
            options: [`6 and 8 g/L only`, `4 g/L and above`, `0 and 2 g/L only`, `At every concentration`],
            correctAnswer: 0,
            explanation: `The gaps are 4, 1, 9, 39, and 37 points, so only 6 and 8 g/L exceed 10. At 4 g/L the gap is 9 points, just under the cutoff, which rules out "4 g/L and above." At 0 and 2 g/L the studies nearly agree, so they cannot be the concentrations with large gaps, or part of "every concentration."`
          },
          {
            question: `Two brands of battery were each tested in the same flashlight. Brand M lasted 14.2 ± 0.6 hours, and Brand N lasted 15.5 ± 0.4 hours. Which statement is best supported?`,
            options: [
              `Brand N lasted longer, but the ranges overlap`,
              `Brand M lasted longer, and the ranges are separate`,
              `The two brands lasted the same time within error`,
              `Brand N lasted longer, and the ranges do not overlap`
            ],
            correctAnswer: 3,
            explanation: `Brand M's range is 13.6 to 14.8 h and Brand N's is 15.1 to 15.9 h, so N's whole range sits above M's: N lasted longer and the ranges do not overlap. Saying they overlap miscomputes a range, Brand M has the lower mean, and with no overlap the brands are not the same within error.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p4-input',
      type: 'input-boxes' as const,
      content: `
**Ranges and Means** 🧮

Enter numbers only.

1) A mass is reported as 8.4 ± 0.3 g. What is the lowest value in its range, in grams?

2) What is the highest value in that range, in grams?

3) Five trials gave times of 12, 15, 11, 14, and 13 s. What is the mean time, in seconds?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.1', '8.7', '13'],
        hint1: 'Subtract the uncertainty from the reported value.',
        hint2: 'Add the uncertainty to the reported value.',
        hint3: 'Add the five times, then divide by 5.',
        explanation: '1) 8.4 − 0.3 = 8.1 g. 2) 8.4 + 0.3 = 8.7 g. 3) (12 + 15 + 11 + 14 + 13) ÷ 5 = 65 ÷ 5 = 13 s.'
      }
    },
    {
      id: 'act-sdata-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Set: Paper Helicopters** 📋

**Experiment 1:** Students dropped three paper-helicopter designs from a height of 2.0 m and timed the fall, five trials each.

**Table 1** — Fall time (s)

| Design | Trial 1 | Trial 2 | Trial 3 | Trial 4 | Trial 5 | Mean |
|---|---|---|---|---|---|---|
| Short wings | 1.31 | 1.28 | 1.35 | 1.30 | 1.26 | 1.30 |
| Long wings | 1.62 | 1.90 | 1.41 | 1.75 | 1.52 | 1.64 |
| Long wings + paper clip | 1.39 | 1.44 | 1.42 | 1.37 | 1.43 | 1.41 |

**Experiment 2:** Using the same paper and no paper clip, the students made helicopters with different wing lengths and recorded the mean of five drops.

**Table 2**

| Wing length (cm) | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|
| Mean fall time (s) | 1.18 | 1.30 | 1.47 | 1.64 | 1.70 |
      `,
      exercise: {
        questions: [
          {
            question: `In Experiment 1, which design's trials had the largest spread?`,
            options: [`Short wings`, `Long wings + paper clip`, `All three had equal spreads`, `Long wings`],
            correctAnswer: 3,
            explanation: `The ranges are 1.35 − 1.26 = 0.09 s for short wings, 1.90 − 1.41 = 0.49 s for long wings, and 1.44 − 1.37 = 0.07 s for long wings with a clip. The long-wing trials vary by far the most. The other two designs have tight, similar spreads, so the spreads are not equal.`
          },
          {
            question: `Based on Tables 1 and 2, the wings of the short-wing design in Experiment 1 were most likely about how long?`,
            options: [`6 cm`, `4 cm`, `8 cm`, `10 cm`],
            correctAnswer: 0,
            explanation: `The short-wing design's mean fall time was 1.30 s, and Table 2 shows a mean of 1.30 s for 6 cm wings. A 4 cm wing fell in 1.18 s and an 8 cm wing in 1.47 s, neither matching. A 10 cm wing matches the long-wing design's 1.64 s instead.`
          },
          {
            question: `According to Table 1, compared with the short-wing design, the long-wing design with a paper clip:`,
            options: [
              `fell faster in every trial`,
              `fell more slowly in every trial`,
              `fell more slowly on average, but the trials overlapped`,
              `had the same mean fall time`
            ],
            correctAnswer: 1,
            explanation: `The slowest short-wing trial took 1.35 s and the fastest paper-clip trial took 1.37 s, so every paper-clip trial took longer: it fell more slowly in every trial. Because the ranges do not overlap at all, saying they overlapped is wrong. The means, 1.41 s and 1.30 s, are not equal, and longer times mean slower falls, not faster ones.`
          },
          {
            question: `According to Table 2, as wing length increases from 4 cm to 12 cm, the mean fall time:`,
            options: [
              `increases at every step by the same amount`,
              `increases, then decreases after 10 cm`,
              `increases at every step, gaining least from 10 to 12 cm`,
              `decreases at every step, losing least after 10 cm`
            ],
            correctAnswer: 2,
            explanation: `The gains are 0.12, 0.17, 0.17, and 0.06 s, so the time rises at every step and gains least from 10 to 12 cm. The gains are not all equal, so the increase is not steady. The time never drops, which rules out both a decrease after 10 cm and a decrease at every step.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

**Table 1** gives the salt content of four water samples, and **Table 2** gives the temperature at which each sample froze.

| Sample | Salt (g/L) |
|---|---|
| P | 10 |
| Q | 35 |
| R | 20 |
| S | 0 |

| Sample | Freezing point (°C) |
|---|---|
| S | 0.0 |
| R | −1.2 |
| P | −0.6 |
| Q | −2.1 |

**Question:** Based on both tables, a sample with 15 g/L of salt would most likely freeze between which two temperatures?

<details>
<summary><b>Show answer</b></summary>

**Between −0.6°C and −1.2°C.** Matching by label, 10 g/L (P) freezes at −0.6°C and 20 g/L (R) freezes at −1.2°C, and 15 g/L lies between them. A student who matches rows by position would pair 10 g/L with 0.0°C and get the wrong range.
</details>
      `
    },
    {
      id: 'act-sdata-p4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- To use two tables together, find the **shared (bridge) variable**, check its units, and **chain**: in through one table, out through the other.
- Don't stop at the bridge value; answer in the variable the question asks for.
- Match rows by **label**, not by position, when two tables list the same samples in different orders.
- "**Both** studies show" must hold in each study separately.
- A large **spread** in repeated trials makes the mean less certain.
- **x ± u** spans x − u to x + u. **No overlap** is strong evidence of a difference; **overlap** means the difference is uncertain.
      `
    }
  ]
};
