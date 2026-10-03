export const actScienceReasonPart5Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s5-intro',
      type: 'text' as const,
      content: `
# 🧭 Science Passage Strategy

**Part 5 of 7 — Pacing, Previewing Figures, and Avoiding Data Traps**

## Timing on the Enhanced ACT

The optional Science section gives you **40 questions in 40 minutes**, about **one minute per question**, and that minute includes reading. Questions come in sets attached to passages, so think in passages: at about a minute per question, a typical passage should take roughly **5 to 6 minutes**.

| Situation | Best move |
|---|---|
| You are well past 6 minutes on one passage | Make your best guesses, mark the questions, and move on |
| A question needs a long calculation or comparison | Answer the quick questions in the set first, then return |
| Time is almost up | Fill in an answer for every remaining question |

Wrong answers cost nothing extra on the ACT, so **never leave a question blank**. Points from easy questions in later passages are worth exactly as much as points from the hard question that is eating your time.

## The 30-Second Preview

Before reading questions, spend about half a minute on:

1. **The introduction:** what was studied and why (one or two sentences is usually enough).
2. **Each table or graph:** the title, the axis labels or column headers, the **units**, the legend or key, and the overall **trend**.

Do **not** read every value or memorize tables. You will look values up as each question needs them.

## Unfamiliar Terms Are Just Labels

Passages are full of names you have never seen: "Compound J," "protein RX," "Species B." Treat them as labels. A question about a protein you have never heard of is still answerable if the table shows how it behaves. Answer choices that rely on facts the passage never gives ("RX is made in the liver," "RX works faster than every other protein of its kind") cannot be concluded from the passage, however scientific they sound.

## Reading Figures Accurately

| Figure feature | What to check |
|---|---|
| Axes or column headers | Which variable is which, and in what **units** |
| Legend or key | Which line, bar, or symbol belongs to which condition |
| Two series side by side | Do they share a trend? Which is higher, and is it higher everywhere? |
| Scale | Do grid lines go up by 1, 5, or 10? Does an axis start at 0? |
| Rates | "per minute" vs. "per hour" vs. "per day" |

## The Most Common Data Traps

| Trap | Example | Defense |
|---|---|---|
| Absolute vs. relative change | Compound L rose from 90 g to 115 g (25 g); Compound K rose from 6 g to 26 g (20 g) but more than quadrupled | Ask: "change in grams" or "how many times as much"? |
| Wrong series or column | Reading the 20°C column when the question asks about 40°C | Put a finger on the row and the column |
| Units | The table is per day; the question asks per week | Convert before choosing |
| Reversed comparison | "higher at 20°C" when every 20°C value is lower | Check one row explicitly |
| NOT / EXCEPT questions | "Which is NOT supported?" | Mark each choice true or false and pick the odd one out |

## Question Types in Rough Order of Speed

| Type | What it asks |
|---|---|
| Lookup | Read one value |
| Trend | Describe how one variable changes with another |
| Comparison | Compare two series, columns, or experiments |
| Interpolate / extrapolate | Estimate an unmeasured value |
| Design | Identify a variable, a control, or the purpose of a step |
| Synthesis | Combine two figures or a figure with the text |

**ACT Tip:** Within a passage, lookups and trend questions are the fastest points. If a synthesis question is slowing you down, answer the rest of the set first.
      `
    },
    {
      id: 'act-s5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Comparing two series</b></summary>

**Data:** Rate of gas production (mL per minute) when a catalyst is added to a peroxide solution.

| Catalyst mass (g) | At 25°C | At 35°C |
|---|---|---|
| 0.5 | 2.1 | 3.0 |
| 1.0 | 4.0 | 5.8 |
| 2.0 | 7.9 | 11.2 |

**Question:** Which statement is supported by the data?

- A. At both temperatures, the rate rose with catalyst mass and was higher at 25°C.
- B. At both temperatures, the rate fell with catalyst mass and was higher at 35°C.
- C. At both temperatures, the rate rose with catalyst mass and was greater at 35°C.
- D. The rate rose with catalyst mass at 25°C but fell at 35°C.

**Solution:**
1. **Trend in each column:** both columns increase going down, so the rate **rose** with catalyst mass at both temperatures. That eliminates B and D.
2. **Which column is higher?** In every row, the 35°C value is larger (3.0 > 2.1, 5.8 > 4.0, 11.2 > 7.9). That eliminates A.

**Answer: C** ✓

**Skill:** Split a two-part statement into its parts and test each part separately.
</details>

<details>
<summary><b>Example 2: Absolute versus relative change</b></summary>

**Data:** Grams of three compounds that dissolve in 100 mL of water.

| Compound | At 10°C | At 50°C |
|---|---|---|
| J | 50 | 58 |
| K | 6 | 26 |
| L | 90 | 115 |

**Question:** Which compound's solubility increased by the greatest number of grams?

**Solution:**
1. **Compute each change in grams:** J: 58 − 50 = 8 g; K: 26 − 6 = 20 g; L: 115 − 90 = 25 g.
2. **Largest absolute change:** Compound L (25 g).
3. **Trap:** Compound K more than **quadrupled**, the largest *relative* change, but the question asks about grams.

**Answer: Compound L** ✓
</details>
      `
    },
    {
      id: 'act-s5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Pacing and Previewing** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student has spent 8 minutes on the second Science passage and still has three questions in that set that confuse her. Based on the recommended pacing of about 5 to 6 minutes per passage, what is her best move?`,
            options: [
              `Keep working until all three are solved, however long it takes`,
              `Go back and reread the introduction and every figure in the set`,
              `Choose her best answers for the three, mark them, and go on`,
              `Leave the three blank and return only if time happens to remain`
            ],
            correctAnswer: 2,
            explanation: `She is already past the 5-to-6-minute target, so choosing her best answers, marking them, and moving on protects time for the passages still ahead; she can return if time remains. Working until all three are solved, or rereading everything, spends even more time on the hardest questions. Leaving them blank risks never coming back, and a blank can never earn a point, while a guess might.`
          },
          {
            question: `Which is the best use of a student's first 30 seconds on a new Science passage?`,
            options: [
              `Reading the introduction and noting each figure's axes, units, and trend`,
              `Memorizing the values in every table before looking at any question`,
              `Reading all of the questions and answer choices in the set first`,
              `Recalling everything she learned about the topic in science class`
            ],
            correctAnswer: 0,
            explanation: `A quick look at the introduction and the figures tells her what was studied and what each table or graph shows, so she knows where to look when the questions arrive. Memorizing values wastes time when they can be looked up as needed. Reading every question first skips that setup, and class knowledge is not enough, because the answers come from the passage.`
          },
          {
            question: `A passage describes "ribozyme cleavage rates" and plots them against "Mg²⁺ concentration." The student has never seen either term. While previewing the figure, what is most worth noting?`,
            options: [
              `The precise definition of a ribozyme from her biology course`,
              `The axis variables, their units, and the trend`,
              `The exact value of every point plotted on the graph`,
              `Which research group first measured these cleavage rates`
            ],
            correctAnswer: 1,
            explanation: `Most questions ask what is plotted and how the variables relate, so the axes, units, and trend are the most useful things to note, and they work even for unfamiliar terms. A textbook definition is not needed, because the passage treats the terms as labels. Exact values can be looked up when a question asks, and the history of the research is not tested.`
          },
          {
            question: `With two minutes left, a student has six unanswered Science questions. What should she do?`,
            options: [
              `Leave them blank, because wrong answers lower her score`,
              `Answer only the two she can solve fully and leave the rest`,
              `Spend the time checking answers she already chose earlier`,
              `Mark an answer for all six, since guesses cost nothing`
            ],
            correctAnswer: 3,
            explanation: `The ACT does not deduct points for wrong answers, so a guess can only help, and every question should get an answer. Leaving questions blank gives up free chances at points, whether she leaves all six or four of them. Rechecking old answers is a poor use of the time while six questions still have no answer at all.`
          }
        ]
      }
    },
    {
      id: 'act-s5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Read the Figure Accurately** 📋

> **Table 1:** Researchers measured the average daily water loss from leaves of two plant species at four air temperatures. Species B is a newly described fern.

| Air temperature (°C) | Species A (mL per day) | Species B (mL per day) |
|---|---|---|
| 15 | 40 | 10 |
| 20 | 48 | 14 |
| 25 | 60 | 19 |
| 30 | 72 | 25 |
      `,
      exercise: {
        questions: [
          {
            question: `Which statement is supported by Table 1?`,
            options: [
              `Water loss rose with temperature for both species, and Species A lost more at every temperature`,
              `Water loss rose with temperature for both species, and Species B lost more at every temperature`,
              `Water loss fell with temperature for both species, and Species A lost more at every temperature`,
              `Water loss rose with temperature for Species A but fell with temperature for Species B`
            ],
            correctAnswer: 0,
            explanation: `Both columns increase from 15°C to 30°C, and in every row the Species A value is larger (for example, 40 versus 10 at 15°C). Saying Species B lost more reverses the comparison, and saying water loss fell reverses the trend. The Species B column rises just as Species A does, so the two species do not show opposite trends.`
          },
          {
            question: `From 15°C to 30°C, which species' water loss increased by the greater number of milliliters per day, and by how much?`,
            options: [
              `Species B, by 15 mL per day`,
              `Species A, by 32 mL per day`,
              `Species B, by 25 mL per day`,
              `Species A, by 72 mL per day`
            ],
            correctAnswer: 1,
            explanation: `Species A rose from 40 to 72 mL per day, an increase of 32 mL, while Species B rose from 10 to 25 mL per day, an increase of 15 mL. Species B's increase is larger relative to its starting value, but the question asks about milliliters. The values 25 mL and 72 mL are the 30°C readings themselves, not the changes.`
          },
          {
            question: `Based on Table 1 alone, which statement about Species B can be concluded?`,
            options: [
              `It grows only in warm, wet rain forests`,
              `It has fewer leaf pores than Species A`,
              `It lost more water at 30°C than at 15°C`,
              `It lost water faster than A did at 30°C`
            ],
            correctAnswer: 2,
            explanation: `The table shows Species B losing 25 mL per day at 30°C and 10 mL per day at 15°C, so that statement comes straight from the data. Where the fern grows and how many leaf pores it has are never given, so those claims need outside information. At 30°C Species B lost 25 mL per day while Species A lost 72 mL, so B was slower, not faster.`
          },
          {
            question: `According to Table 1, how much water would a Species A plant lose in one week at 25°C?`,
            options: [
              `60 mL`,
              `133 mL`,
              `420 mL`,
              `1,440 mL`
            ],
            correctAnswer: 2,
            explanation: `The table gives water loss per day, so at 25°C Species A loses 60 mL × 7 days = 420 mL in a week. 60 mL is the one-day value with no conversion, and 133 mL uses the Species B value of 19 mL per day. 1,440 mL multiplies by 24 as if the table were per hour.`
          }
        ]
      }
    },
    {
      id: 'act-s5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> Researchers studied a newly described protein, RX, by measuring the percent of RX molecules bound to zinc at different zinc concentrations: 1 µM, 20%; 2 µM, 38%; 4 µM, 61%; 8 µM, 80%; 16 µM, 88%.

**Question:** A student has never heard of RX. What can she conclude from this information alone, and what can she NOT conclude?

<details>
<summary><b>Show answer</b></summary>

**She can conclude that the percent of RX bound to zinc rose as zinc concentration rose** (20% up to 88%), and that the increase slowed at higher concentrations (it was leveling off). She **cannot** conclude where RX is made in the body or how it compares with other proteins; the passage gives no information about either. Everything a question needs here is in the data, so never having heard of RX costs nothing.
</details>
      `
    },
    {
      id: 'act-s5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **40 questions, 40 minutes:** about a minute per question, roughly **5 to 6 minutes per passage**.
- Past your time on a passage? **Guess, mark, move on.** Never leave a question blank.
- **Preview** first: the introduction, then each figure's title, axes, **units**, legend, and trend.
- Unfamiliar terms are just **labels**; answer from the data, not from facts the passage never gives.
- Watch the traps: **absolute vs. relative** change, wrong column, **units** and rates, reversed comparisons, NOT/EXCEPT.
- Split two-part statements and **test each part**.
      `
    }
  ]
}
