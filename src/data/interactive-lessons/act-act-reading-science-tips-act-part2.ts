export const actReadSciTipsPart2Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p2-intro',
      type: 'text' as const,
      content: `
# 📊 ACT Science Overview

**Part 2 of 7 — The Science Test and Reading Tables and Graphs**

On the Enhanced ACT, the Science test is **optional**: **40 questions in 40 minutes** (60 seconds per question), four answer choices each. It is reported as its own score and feeds the STEM score, but it is **not part of the composite**, which averages English, Math, and Reading. Check whether the colleges on your list want it before test day.

The test is a series of passages, each followed by a set of questions. Despite the name, it is mainly a **data-reasoning** test. Introductory biology, chemistry, physics, and earth science ideas appear, but the answers come from the figures and text in front of you, not from memorized facts.

| Passage format | What you see | What the questions test |
|---|---|---|
| Data Representation | One or more tables or graphs with a short introduction | Reading values, trends, and relationships |
| Research Summaries | Two or three experiments with their results | Variables, design, comparing trials, predictions |
| Conflicting Viewpoints | Two or more scientists or students explaining one phenomenon | What each view claims, where they agree and differ |

## The Figure-First Method

Before you read any question, spend about 15 seconds on each figure:

1. **Title**: what was studied.
2. **Axes or column headings**: which variables are shown. The variable the researcher set is usually on the horizontal axis or in the left column.
3. **Units**: g vs mg, seconds vs minutes, °C vs K. Unit mismatches are a top trap.
4. **Key or legend**: what each line, symbol, or bar stands for.
5. **The overall trend**: as one variable goes up, does the other go up, go down, or change direction?

Then go to the questions and return to the figure only for the values each question needs.

## The Four Basic Question Types

| Type | Example stem | Move |
|---|---|---|
| Look-up | "According to Table 1, at 40 g/L the freezing point was ..." | Find the row, read across |
| Reverse look-up | "Which concentration froze at −2.3 °C?" | Find the value in the result column, read back |
| Trend | "As depth increased, oxygen ..." | Compare the first, middle, and last values |
| Compare | "Which site changed the most?" | Compute each change; do not eyeball |

## Trend Vocabulary

| Pattern | What it looks like in a table |
|---|---|
| **Direct (positive)** | Both columns rise together |
| **Inverse (negative)** | One rises while the other falls |
| **Rises, then falls** (peak) | Values climb, reach a maximum, then drop |
| **Levels off** | Changes shrink toward zero |
| **No clear relationship** | Values move up and down with no pattern |

When two measured variables move in opposite directions over a day or a season, describe each one separately. If temperature rises then falls, an inversely related variable will **fall then rise**: a mirror image.

## Greatest Value vs Greatest Change

These are different questions, and the ACT pairs them on purpose.

- **Greatest value** asks which number is biggest in a column or row.
- **Greatest change** asks which difference (final minus initial) is biggest.

A site can start low and grow the most while another site starts high, grows little, and still has the largest final value. Always compute the differences.

**Size of a change ignores direction.** If values go 18, 26, 31, 33, 32, the changes are +8, +5, +2, and −1. The smallest change is the last one (size 1), even though it is a decrease.

## Units and Scale

- Convert before comparing: 1 g = 1,000 mg; 1 min = 60 s; 1 L = 1,000 mL.
- Read the scale on each axis. Two graphs side by side may use different scales.
- Do not copy a number from one column into an answer that asks about another column. If a choice shows the right digits with the wrong unit, it is a trap.
      `
    },
    {
      id: 'act-rsci-p2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Table 1** shows measurements in a lake on a summer afternoon.

| Depth (m) | Water temperature (°C) | Dissolved oxygen (mg/L) |
|---|---|---|
| 1 | 24 | 8.6 |
| 4 | 21 | 7.9 |
| 8 | 14 | 5.2 |
| 12 | 9 | 3.0 |
| 16 | 8 | 2.7 |

<details>
<summary><b>Example 1: Reverse look-up and trend</b></summary>

**Question:** According to Table 1, at what depth was the dissolved oxygen 5.2 mg/L, and how did oxygen change as depth increased?

**Solution:**
1. Find 5.2 in the oxygen column and read left: **8 m**.
2. Scan the oxygen column top to bottom: 8.6, 7.9, 5.2, 3.0, 2.7. Every value is lower than the one before.
3. Oxygen **decreased at every depth**, an inverse relationship with depth. Temperature also fell, so oxygen and temperature moved together (both down).
4. Trap check: a choice of "5.2 m" copies the oxygen value into the depth column.
</details>

<details>
<summary><b>Example 2: Where is the biggest change?</b></summary>

**Question:** Between which two consecutive depths did the water temperature change the most?

**Solution:**
1. Compute each change: 24 → 21 is 3; 21 → 14 is 7; 14 → 9 is 5; 9 → 8 is 1.
2. The largest change is **7 °C, between 4 m and 8 m**.
3. Notice the change shrinks to 1 °C at the bottom: temperature **levels off** in deep water. A question asking which depth had the lowest temperature would be a different question (16 m).
</details>
      `
    },
    {
      id: 'act-rsci-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Read the Table** 🎯

A student recorded how long it took ice cubes of the same size to melt in 250 mL of water at different starting temperatures.

| Water temperature (°C) | Melting time (s) | Final water temperature (°C) |
|---|---|---|
| 10 | 410 | 6 |
| 20 | 260 | 15 |
| 30 | 185 | 24 |
| 40 | 150 | 33 |
| 50 | 135 | 42 |
      `,
      exercise: {
        questions: [
          {
            question: `According to the table, which starting temperature produced a melting time of 185 s?`,
            options: [`18.5 °C`, `24 °C`, `30 °C`, `40 °C`],
            correctAnswer: 2,
            explanation: `Find 185 in the melting-time column and read left: the row begins with 30 °C. The 24 °C figure is that row's final temperature, a different column. The 18.5 °C choice turns the melting time into a temperature, and 40 °C belongs to the 150 s row.`
          },
          {
            question: `As the starting water temperature increased, the melting time:`,
            options: [
              `decreased each time, by smaller and smaller amounts`,
              `increased each time, by larger and larger amounts`,
              `decreased each time, by the same amount`,
              `decreased at first and then increased`
            ],
            correctAnswer: 0,
            explanation: `The times fall 410, 260, 185, 150, 135, so melting time always decreased, and the drops (150, 75, 35, 15 s) keep shrinking. The times never increase, which rules out both rising patterns. The drops are clearly unequal, so "the same amount" fails.`
          },
          {
            question: `Between which two consecutive starting temperatures did the melting time change the most?`,
            options: [`40 °C and 50 °C`, `30 °C and 40 °C`, `20 °C and 30 °C`, `10 °C and 20 °C`],
            correctAnswer: 3,
            explanation: `The changes are 150 s (10 to 20 °C), 75 s, 35 s, and 15 s, so the biggest change is between 10 °C and 20 °C. The interval from 40 °C to 50 °C has the smallest change, not the largest, and the middle intervals fall in between.`
          },
          {
            question: `Which statement about the final water temperature is supported by the table?`,
            options: [
              `It was always higher than the starting temperature`,
              `It was the same in every trial, regardless of start`,
              `It was always lower than the starting temperature`,
              `It rose as the melting time increased in each trial`
            ],
            correctAnswer: 2,
            explanation: `Each final temperature (6, 15, 24, 33, 42 °C) is below its starting temperature, because the melting ice cooled the water. The final values differ from row to row, so they were not the same. Longer melting times go with lower final temperatures, so the final temperature fell, not rose, as melting time increased.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p2-input',
      type: 'input-boxes' as const,
      content: `
**Compute the Changes** ✏️

Use this table of a moth's wing-beat rate.

| Air temperature (°C) | Wing beats per second |
|---|---|
| 15 | 24 |
| 20 | 32 |
| 25 | 37 |
| 30 | 39 |
| 35 | 38 |

1) By how many wing beats per second did the rate change from 15 °C to 35 °C? (Enter a positive number.)

2) What is the SIZE of the smallest change between consecutive temperatures? (Enter a positive number.)

3) At what air temperature (°C) was the wing-beat rate highest?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '1', '30'],
        hint1: 'Final minus initial: 38 − 24.',
        hint2: 'The changes are +8, +5, +2, and −1. Size ignores the sign.',
        hint3: 'Find the largest value in the wing-beat column, then read left.',
        explanation: '1) 38 − 24 = 14. 2) The consecutive changes are 8, 5, 2, and 1 in size, so the smallest is 1 (from 30 °C to 35 °C, a decrease). 3) The highest rate, 39, occurs at 30 °C; the rate peaks there and then dips slightly.'
      }
    },
    {
      id: 'act-rsci-p2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Value or Change?

Three stream sites were sampled for insect larvae (larvae per square meter).

| Month | Site X | Site Y | Site Z |
|---|---|---|---|
| March | 40 | 210 | 95 |
| May | 85 | 225 | 120 |
| July | 150 | 232 | 141 |

Answer each in your head, then check.

| # | Question | Answer |
|---|---|---|
| 1 | Which site had the most larvae in July? | Site Y (232) |
| 2 | Which site increased the most from March to July? | Site X (+110, vs +22 and +46) |
| 3 | Which site's increase from May to July was smallest? | Site Y (+7) |
| 4 | Did any site decrease between two months? | No; every value rises |

**ACT Tip:** If one answer choice names the same site for "most" and "biggest increase," check both numbers. The test often pairs a high-but-flat site with a low-but-fast-growing one.
      `
    },
    {
      id: 'act-rsci-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Two Variables, One Figure** 📋

An environmental scientist recorded conditions at a city park on one spring day.

| Time | Air temperature (°C) | Relative humidity (%) | Pollen count (grains per cubic meter) |
|---|---|---|---|
| 6:00 | 11 | 84 | 30 |
| 9:00 | 16 | 70 | 75 |
| 12:00 | 21 | 52 | 160 |
| 15:00 | 23 | 45 | 150 |
| 18:00 | 18 | 61 | 90 |
      `,
      exercise: {
        questions: [
          {
            question: `As air temperature rose from 6:00 to 15:00 and then fell by 18:00, relative humidity:`,
            options: [
              `rose and then fell`,
              `fell and then rose`,
              `fell the entire day`,
              `stayed nearly constant`
            ],
            correctAnswer: 1,
            explanation: `Humidity dropped from 84% to 45% while temperature climbed, then rose to 61% as temperature fell, so it fell and then rose, the mirror image of temperature. Rose-then-fell describes the temperature column. The 18:00 increase rules out falling all day, and a 39-point swing is far from constant.`
          },
          {
            question: `At which time was the pollen count highest?`,
            options: [`9:00`, `12:00`, `15:00`, `18:00`],
            correctAnswer: 1,
            explanation: `The largest value in the pollen column is 160 grains per cubic meter, at 12:00. The temperature peak came later, at 15:00, when pollen had already dipped to 150. The 9:00 and 18:00 counts are both well below 160.`
          },
          {
            question: `Which statement best describes how pollen count was related to relative humidity during the day?`,
            options: [
              `Pollen was generally higher when humidity was lower`,
              `Pollen and humidity always rose together during the day`,
              `Pollen stayed the same no matter what the humidity was`,
              `Pollen rose at every single reading as humidity fell`
            ],
            correctAnswer: 0,
            explanation: `High-humidity readings (84%, 70%) go with low pollen (30, 75), and the lowest humidities (52%, 45%) go with the highest pollen, so the two are generally inversely related. They do not rise together, and pollen clearly changes. "Every single reading" fails because pollen dipped from 160 to 150 between 12:00 and 15:00 even as humidity fell.`
          },
          {
            question: `By how much did the pollen count change from 6:00 to 12:00?`,
            options: [
              `It increased by 160 grains per cubic meter`,
              `It increased by 10 grains per cubic meter`,
              `It decreased by 32 grains per cubic meter`,
              `It increased by 130 grains per cubic meter`
            ],
            correctAnswer: 3,
            explanation: `Pollen went from 30 to 160, an increase of 160 − 30 = 130. The value 160 is the 12:00 reading itself, not the change. A 10-unit change is the gap between 12:00 and 15:00, and the 32 figure comes from the humidity column (84 − 52), not pollen.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Science format:** optional, 40 questions in 40 minutes, four choices; reported separately and not part of the composite.
- **Three passage formats:** Data Representation, Research Summaries, Conflicting Viewpoints.
- **Figure first:** title, axes or headings, units, key, overall trend, in about 15 seconds.
- **Look-up vs reverse look-up:** find the value in the right column, then read across. Never copy digits into the wrong column.
- **Greatest value is not greatest change.** Compute differences; size of a change ignores its direction.
- **Name the pattern:** direct, inverse, peak, levels off. Two inversely related variables make a mirror image.
- **Convert units before comparing.**
      `
    }
  ]
};
