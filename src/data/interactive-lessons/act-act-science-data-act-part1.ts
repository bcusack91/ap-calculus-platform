export const actScienceDataPart1Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p1-intro',
      type: 'text' as const,
      content: `
# 📊 Reading Data Tables

**Part 1 of 7 — Headers, Units, Lookups, Running Totals, and Unit Conversions**

## How ACT Science Works

On the Enhanced ACT, the Science test is **optional**: **40 questions in 40 minutes**, each with **4 answer choices**. It is not part of the composite score (English, Math, and Reading make up the composite); Science gets its own score and is combined with Math into a STEM score. That pace is about **one minute per question, including reading time**.

Most Science questions are **data questions**. They give you tables, graphs, and short descriptions of experiments, and the answer comes from the data, not from facts you memorized in biology or chemistry class. This lesson trains the core data skills:

| Part | Skill |
|---|---|
| 1 | Reading tables: headers, units, lookups, running totals, conversions |
| 2 | Reading graphs: axes, scales, slopes and rates with units |
| 3 | Identifying trends: direct, inverse, linear, leveling off, peaks |
| 4 | Comparing data sets: linking tables, comparing studies, error bars |
| 5 | Making predictions: interpolation, extrapolation, prediction error |
| 6 | Variables, controls, and evaluating claims |
| 7 | Integrated timed practice |

## Anatomy of a Data Table

| Piece | What it tells you | What to check |
|---|---|---|
| Title or caption | What was measured and under what conditions | Conditions held fixed ("at 25°C," "in 100 mL of water") |
| Column headers | The variable in each column | The **units** in parentheses |
| Left column | Usually the **independent variable**, the one the researchers chose or changed | Values are often evenly spaced or round numbers |
| Other columns | Usually **dependent variables**, the results that were measured | Whether a column is a running total or a per-interval value |
| Rows | One trial, sample, or condition each | Rows in two tables may be listed in different orders |

The **independent variable** is the factor the researchers set (temperature, distance, dose). The **dependent variable** is what they measured in response (time, mass, growth). Part 6 covers variables and controls in depth; for now, the key habit is noticing which column was set and which was measured.

## How to Look Up a Value

1. **Match the words.** Find the column header that matches the question's wording exactly. "Germinated by Day 7" is not the same column as "Germinated by Day 3."
2. **Check the units.** Is it mm or cm? Seconds or minutes? mA or A? "Grams per 100 g of water" or grams total?
3. **Read across one row.** Put a finger (or the cursor) on the row so your eye cannot slip to the line above.
4. **Reverse lookups work the same way.** If the question gives a result and asks for the condition, find the result in its column, then read back to the left.

## Running Totals vs. Per-Interval Values

Headers like **"Total volume collected,"** **"Cumulative distance,"** or **"Mass formed so far"** describe a **running total**: each row includes everything from earlier rows.

- The amount produced **during** an interval = later total − earlier total.
- The **largest total** is not the interval where the most was produced. A running total always grows (or stays flat), even when production slows down.
- If the header instead says **"produced during each interval,"** each row stands alone, and you would **add** rows to get a total.

## Differences and Ratios Between Columns

When a table has two result columns side by side, some questions ask about the **gap** or the **ratio** between them. Compute it row by row, then describe how that new list changes. Two columns can both rise while the gap between them shrinks.

## Unit Conversions You Will Need

| Convert | Operation | Example |
|---|---|---|
| mA → A | ÷ 1,000 | 36 mA = 0.036 A |
| g → kg, mL → L | ÷ 1,000 | 450 mL = 0.45 L |
| kPa → Pa | × 1,000 | 2.5 kPa = 2,500 Pa |
| cm → m | ÷ 100 | 85 cm = 0.85 m |
| mm → cm | ÷ 10 | 42 mm = 4.2 cm |
| s → min, min → h | ÷ 60 | 450 s = 7.5 min |
| "per 100 g water" → per 300 g water | × 3 | 20 g per 100 g → 60 g per 300 g |

**Sanity check:** converting to a **larger** unit makes the number **smaller** (36 mA becomes 0.036 A, not 36,000 A). If your conversion went the wrong way, the answer choices usually include that mistake.

## Common Table Traps

| Trap | How to avoid it |
|---|---|
| Reading the neighboring column or row | Match the full header wording; keep a finger on the row |
| Ignoring units in the header | Circle the units before computing |
| Treating a running total as a per-interval amount | Subtract consecutive totals |
| Forgetting a "per 100 g" or "per mL" basis | Scale the value to the amount in the question |
| Converting in the wrong direction | Bigger unit means smaller number |
      `
    },
    {
      id: 'act-sdata-p1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A running total</b></summary>

A student dropped magnesium ribbon into acid and recorded the total volume of hydrogen gas collected.

| Time (min) | Total H₂ collected (mL) |
|---|---|
| 0 | 0 |
| 1 | 18 |
| 2 | 33 |
| 3 | 45 |
| 4 | 54 |
| 5 | 60 |

**Question 1:** How much gas was produced from minute 2 to minute 4?

The header says **total**, so subtract: 54 − 33 = **21 mL**. Answering 54 mL would count the gas from minutes 0 to 2 as well.

**Question 2:** During which 1-minute interval was the least gas produced?

The per-minute amounts are 18, 15, 12, 9, and 6 mL. The least, **6 mL**, came from **minute 4 to minute 5**, even though that row has the largest total.
</details>

<details>
<summary><b>Example 2: A reverse lookup with a unit conversion</b></summary>

A student measured the current through a resistor at four voltages.

| Voltage (V) | Current (mA) |
|---|---|
| 1.5 | 12 |
| 3.0 | 24 |
| 4.5 | 36 |
| 6.0 | 48 |

**Question:** At what voltage was the current 0.024 A?

1. **Units first.** The table is in mA, the question is in A. Convert: 0.024 A × 1,000 = 24 mA.
2. **Reverse lookup.** Find 24 in the Current column and read left: **3.0 V**.

A student who skips the conversion looks for "0.024" in the table, finds nothing, and guesses. Converting the question's value to the table's units is almost always faster than converting the whole table.
</details>
      `
    },
    {
      id: 'act-sdata-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Look It Up** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student planted 50 radish seeds at each of five soil temperatures and counted how many had sprouted.

| Soil temperature (°C) | Sprouted by Day 3 | Sprouted by Day 7 |
|---|---|---|
| 15 | 4 | 22 |
| 20 | 13 | 35 |
| 25 | 27 | 41 |
| 30 | 41 | 46 |
| 35 | 19 | 30 |

At which soil temperature had exactly 41 seeds sprouted by Day 7?`,
            options: [`15°C`, `25°C`, `30°C`, `35°C`],
            correctAnswer: 1,
            explanation: `In the "Sprouted by Day 7" column, 41 appears in the 25°C row. The 30°C row also contains 41, but in the Day 3 column; by Day 7 that row shows 46. The 15°C and 35°C rows show 22 and 30 seeds by Day 7, nowhere near 41.`
          },
          {
            question: `A rain gauge recorded the total rainfall since midnight.

| Hour | Total rainfall (mm) |
|---|---|
| 0 | 0 |
| 1 | 4 |
| 2 | 11 |
| 3 | 23 |
| 4 | 30 |
| 5 | 33 |

During which 1-hour interval did the most rain fall?`,
            options: [`Hour 4 to hour 5`, `Hour 0 to hour 1`, `Hour 3 to hour 4`, `Hour 2 to hour 3`],
            correctAnswer: 3,
            explanation: `The column is a running total, so the rain in each hour is the difference between rows: 4, 7, 12, 7, and 3 mm. The most, 12 mm, fell from hour 2 to hour 3. Hour 4 to hour 5 ends with the largest total but added only 3 mm. The first hour added 4 mm and hour 3 to hour 4 added 7 mm.`
          },
          {
            question: `The table gives the time for 50 mL of water to drain through three soil samples.

| Soil | Drain time (s) |
|---|---|
| Sand | 45 |
| Loam | 210 |
| Clay | 1,380 |

How long did the clay sample take, in minutes?`,
            options: [`13.8 min`, `82,800 min`, `23 min`, `2.3 min`],
            correctAnswer: 2,
            explanation: `There are 60 seconds in a minute, so 1,380 ÷ 60 = 23 min. Dividing by 100 gives 13.8, which treats a minute as 100 seconds. Multiplying by 60 gives 82,800, a conversion in the wrong direction: a larger unit should give a smaller number. The value 2.3 min is off by a factor of 10.`
          },
          {
            question: `Bean seedlings were watered with either tap water or a nutrient solution, and their mean mass was recorded each week.

| Week | Tap water (g) | Nutrient solution (g) |
|---|---|---|
| 1 | 1.2 | 1.4 |
| 2 | 2.0 | 2.9 |
| 3 | 2.7 | 4.5 |
| 4 | 3.1 | 6.2 |

In which week was the mean mass of the nutrient-solution seedlings about twice the mean mass of the tap-water seedlings?`,
            options: [`Week 1`, `Week 2`, `Week 3`, `Week 4`],
            correctAnswer: 3,
            explanation: `Divide row by row: 1.4 ÷ 1.2 ≈ 1.2, 2.9 ÷ 2.0 ≈ 1.5, 4.5 ÷ 2.7 ≈ 1.7, and 6.2 ÷ 3.1 = 2.0. Only Week 4 reaches twice the tap-water mass. Weeks 1 through 3 show the nutrient seedlings ahead, but by a smaller factor each time.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Units and Headers** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A header reads "Current (mA)." A table value of 250 equals …',
            options: ['250 A', '25 A', '2.5 A', '0.25 A']
          },
          {
            label: 'A column titled "Total mass collected (g)" lists values that …',
            options: ['include everything collected so far', 'show only the newest interval', 'average all the trials together', 'were measured in separate flasks']
          },
          {
            label: 'To express 300 s in minutes, you …',
            options: ['multiply by 60', 'divide by 60', 'divide by 100', 'multiply by 100']
          }
        ],
        correctAnswers: ['0.25 A', 'include everything collected so far', 'divide by 60'],
        hint1: 'There are 1,000 mA in 1 A, and amperes are the larger unit.',
        hint2: 'The word "total" means each row adds on to the rows before it.',
        hint3: 'A minute is larger than a second, so the number of minutes is smaller.',
        explanation: '250 mA ÷ 1,000 = 0.25 A. A "total" column is a running total, so subtract rows to find what happened in one interval. 300 s ÷ 60 = 5 min.'
      }
    },
    {
      id: 'act-sdata-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Set: Solubility Table** 📋

A chemistry class measured the greatest mass of three salts that would dissolve in 100 g of water at five temperatures.

**Table 1**

| Temperature (°C) | Salt X (g per 100 g water) | Salt Y (g per 100 g water) | Salt Z (g per 100 g water) |
|---|---|---|---|
| 0 | 26 | 12 | 33 |
| 20 | 32 | 29 | 33 |
| 40 | 38 | 58 | 34 |
| 60 | 44 | 97 | 34 |
| 80 | 50 | 150 | 35 |
      `,
      exercise: {
        questions: [
          {
            question: `According to Table 1, at which temperature are the solubilities of Salt X and Salt Y closest to each other?`,
            options: [`0°C`, `20°C`, `40°C`, `60°C`],
            correctAnswer: 1,
            explanation: `The gaps between Salt X and Salt Y are 14 g at 0°C, 3 g at 20°C, 20 g at 40°C, and 53 g at 60°C, so they are closest at 20°C. At 0°C Salt X is well ahead, and from 40°C on Salt Y pulls far ahead.`
          },
          {
            question: `Based on Table 1, what is the greatest mass of Salt Y that will dissolve in 300 g of water at 60°C?`,
            options: [`291 g`, `97 g`, `194 g`, `32 g`],
            correctAnswer: 0,
            explanation: `The table value is per 100 g of water, so 300 g of water dissolves 3 × 97 = 291 g. The value 97 g ignores the "per 100 g" basis, and 194 g scales by 2 instead of 3. The value 32 g divides 97 by 3 instead of multiplying.`
          },
          {
            question: `A student stirs 40 g of Salt Z into 100 g of water at 80°C. About how much of the salt will remain undissolved?`,
            options: [`0 g`, `5 g`, `35 g`, `40 g`],
            correctAnswer: 1,
            explanation: `At 80°C, at most 35 g of Salt Z dissolves in 100 g of water, so 40 − 35 = 5 g stays undissolved. Choosing 0 g assumes all 40 g dissolves, which exceeds the table value. The value 35 g is the amount that dissolves, not the amount left over, and 40 g assumes none dissolves.`
          },
          {
            question: `Which salt's solubility changes the least from 0°C to 80°C, and by how much?`,
            options: [
              `Salt X, by 24 g per 100 g water`,
              `Salt Y, by 138 g per 100 g water`,
              `Salt Z, by 2 g per 100 g water`,
              `Salt Z, by 35 g per 100 g water`
            ],
            correctAnswer: 2,
            explanation: `Salt Z rises only from 33 to 35 g, a change of 2 g. Salt X changes by 50 − 26 = 24 g and Salt Y by 150 − 12 = 138 g, both far larger. A change of 35 g reads Salt Z's final value instead of subtracting its starting value.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

A student measured the total distance a snail had crawled every 10 minutes.

| Time (min) | Total distance (cm) |
|---|---|
| 0 | 0 |
| 10 | 42 |
| 20 | 78 |
| 30 | 96 |
| 40 | 130 |

**Question:** During which 10-minute interval did the snail crawl the shortest distance, and how far did it crawl, in meters?

<details>
<summary><b>Show answer</b></summary>

**From 20 to 30 min, 0.18 m.** The per-interval distances are 42, 36, 18, and 34 cm, so the shortest is 18 cm. Converting, 18 cm ÷ 100 = 0.18 m. A student who reads the last row (130 cm) has confused a running total with one interval, and a student who writes 1,800 m converted in the wrong direction.
</details>
      `
    },
    {
      id: 'act-sdata-p1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Enhanced ACT Science is **optional**: **40 questions in 40 minutes**, 4 choices each, scored separately from the composite.
- Before computing, read the **title, headers, and units**. Match the question's wording to the exact column.
- The **independent variable** is the one researchers set (often the left column); the **dependent variable** is what they measured.
- In a **running total**, subtract consecutive rows to get what happened in one interval; the largest total is not the busiest interval.
- Watch the **basis** of a value ("per 100 g of water") and scale it to the question.
- Convert the **question's value** into the table's units; a **larger unit gives a smaller number**.
      `
    }
  ]
};
