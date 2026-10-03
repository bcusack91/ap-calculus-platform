export const actScienceDataPart7Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p7-intro',
      type: 'text' as const,
      content: `
# ⏱️ Integrated Timed Practice

**Part 7 of 7 — Pacing, a Passage Routine, and Mixed ACT-Style Sets**

This part puts Parts 1 through 6 together under time pressure, the way the test does.

## The Format, Once More

| Feature | Enhanced ACT Science |
|---|---|
| Required? | **Optional** |
| Length | **40 questions in 40 minutes** |
| Answer choices | **4** per question |
| Scoring | Reported separately; not part of the composite (English + Math + Reading); combined with Math for the STEM score |
| Wrong answers | No penalty, so **answer every question** |

That works out to **about one minute per question, reading included**. For a passage with six questions, aim for about six minutes total, and move on if you are well past that.

## A Passage Routine

1. **Skim the introduction (about 20 seconds).** What was studied? What was changed, and what was measured?
2. **Glance at each figure.** Read titles, axis labels, units, and legends. Don't memorize numbers; just know where things are.
3. **Go to the questions.** Many name a figure ("According to Table 2 ..."). Go straight there.
4. **Answer from the data.** Outside knowledge rarely decides a data question, and a choice that sounds scientifically true but isn't shown in the figure is a trap.
5. **Read the text only when a question needs it**, such as a question about why a step was done or what was held constant.

## Recognize the Question Type

| The question says ... | It is testing | Lesson part |
|---|---|---|
| "According to Table 1, at 30°C ..." | Lookup, units, running totals | 1 |
| "What is the rate ..." / "slope" | Rise over run, with units | 2 |
| "As X increases, Y ..." | Trend shape | 3 |
| "Based on Tables 1 and 2 ..." / "±" | Chaining tables, error bars | 4 |
| "would most likely be" / "if the trend continues" | Interpolation, extrapolation | 5 |
| "Which trials ..." / "Student 1 claims ..." | Variables, controls, claims | 6 |

## Five Checks Before You Choose

| Check | Catches |
|---|---|
| **Right figure?** | Reading Table 1 when the question asked about Table 2 |
| **Right variable and units?** | Answering with the bridge value; mA vs. A |
| **Right direction?** | "Increases" when the data decrease; a dropped negative sign |
| **Inside the data's limits?** | An interpolated value outside its neighbors; extrapolating past a physical limit |
| **Claim the right size?** | "Causes," "proves," "clearly," or "only" when the data show less |

## Quick Reference: The Arithmetic You'll Use

| Task | Calculation | Part |
|---|---|---|
| Amount during an interval (running total) | later total − earlier total | 1 |
| Rate or slope | change in y ÷ change in x, in y-units per x-unit | 2 |
| Is it linear? | equal differences for equal x-steps | 3 |
| Inversely proportional? | x × y constant in every row | 3 |
| Range from x ± u | x − u to x + u | 4 |
| Linear interpolation | same fraction of the way in y as in x | 5 |
| Time to reach a target | gap ÷ rate, then add to the last time | 5 |
| Absolute error | distance between predicted and measured | 5 |
| Treatment effect | treatment result − control result | 6 |
| Unit conversion | to a larger unit, the number gets smaller (mA ÷ 1,000 = A) | 1 |

## When You're Stuck

- **Eliminate first.** Most questions have one or two choices that fail a direction or units check. With two choices left, compute only what separates them.
- **Skip and return.** A hard question is worth the same as an easy one. Mark it, answer the rest of the passage, and come back if time allows.
- **Never leave a blank.** With no penalty for wrong answers, a guess can only help.
      `
    },
    {
      id: 'act-sdata-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Passage, Start to Finish

<details>
<summary><b>Rainwater pH downwind of a power plant</b></summary>

**Passage:** Researchers collected rainwater at five distances downwind of a coal-burning power plant and measured its pH. Lower pH means more acidic water.

| Distance downwind (km) | 0 | 5 | 10 | 20 | 40 |
|---|---|---|---|---|---|
| Rainwater pH | 4.2 | 4.5 | 4.9 | 5.3 | 5.6 |

**Routine (about 20 seconds):** Distance was chosen (independent); pH was measured (dependent). The distances are **unevenly spaced**, so be careful with neighbors.

**Question 1:** As distance increases, the rainwater pH:

Every value is higher than the one before, so pH **increases**. Per km, the gains are 0.06, 0.08, 0.04, and 0.015, so it rises more slowly at large distances. A choice of "decreases" reverses the trend; "increases, then decreases" has no support. *(About 30 seconds.)*

**Question 2:** Assuming linear change between measurements, the pH at 15 km would be closest to:

The neighbors of 15 km are **10 km and 20 km**, not 5 and 10. Halfway between 4.9 and 5.3 is **5.1**. *(About 30 seconds.)*

**Question 3:** Which conclusion is best supported?

The researchers only observed pH at different distances; they did not change the plant's output. The safe conclusion is that **rain was more acidic closer to the plant**. A choice saying the data **prove** the plant causes the acidity overreaches, and one saying rain "becomes neutral (pH 7) beyond 40 km" extrapolates past the data. *(About 45 seconds.)*

**Total:** under two minutes for three questions, with time banked for harder ones.
</details>
      `
    },
    {
      id: 'act-sdata-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Timed Set 1: Coral Growth** ⏱️ *Aim for 4 minutes.*

Marine biologists grew coral fragments in tanks of seawater and measured the rate at which each fragment built its skeleton (calcification rate, in mg/day).

**Table 1** — Calcification rate at different seawater pH values (water temperature 26°C)

| Seawater pH | 8.2 | 8.0 | 7.8 | 7.6 |
|---|---|---|---|---|
| Calcification (mg/day) | 4.8 | 4.1 | 3.2 | 2.1 |

**Table 2** — Calcification rate at different water temperatures (seawater pH 8.2)

| Water temperature (°C) | 24 | 26 | 28 | 30 |
|---|---|---|---|---|
| Calcification (mg/day) | 4.2 | 4.8 | 4.5 | 2.9 |
      `,
      exercise: {
        questions: [
          {
            question: `According to Table 1, as pH decreases from 8.2 to 7.6, the calcification rate:`,
            options: [
              `decreases, with each drop larger than the last`,
              `decreases by the same amount at each step`,
              `increases, with each gain larger`,
              `decreases, then levels off`
            ],
            correctAnswer: 0,
            explanation: `The rate falls from 4.8 to 4.1 to 3.2 to 2.1, drops of 0.7, 0.9, and 1.1 mg/day, so each drop is larger than the last. The drops are not equal, the rate never rises as pH falls, and growing drops are the opposite of leveling off.`
          },
          {
            question: `Starting from pH 8.2 and 26°C, which change reduced the calcification rate more, and by how much?`,
            options: [
              `Lowering the pH to 7.8, by 1.6 mg/day`,
              `Warming to 30°C, by 1.9 mg/day`,
              `Lowering the pH to 7.8, by 3.2 mg/day`,
              `Warming to 30°C, by 2.9 mg/day`
            ],
            correctAnswer: 1,
            explanation: `Both tables share the condition pH 8.2 at 26°C (4.8 mg/day). Lowering the pH to 7.8 gives 3.2 mg/day, a drop of 1.6; warming to 30°C gives 2.9 mg/day, a drop of 1.9, which is larger. The values 3.2 and 2.9 are the new rates themselves, not the reductions.`
          },
          {
            question: `In the trials shown in Table 1, which factor was held constant?`,
            options: [`The seawater pH`, `Calcification rate`, `Temperature`, `Both pH and temperature`],
            correctAnswer: 2,
            explanation: `Table 1's title states that every trial was run at 26°C, so water temperature was held constant. The pH was the variable deliberately changed, and the calcification rate was measured. Because pH changed, the two were not both held constant.`
          },
          {
            question: `Assuming linear change between measured values, the calcification rate at pH 7.9 and 26°C would be closest to:`,
            options: [`3.2 mg/day`, `4.1 mg/day`, `4.5 mg/day`, `3.7 mg/day`],
            correctAnswer: 3,
            explanation: `pH 7.9 is halfway between pH 8.0 (4.1 mg/day) and pH 7.8 (3.2 mg/day), so the estimate is (4.1 + 3.2) ÷ 2 ≈ 3.7 mg/day. The values 4.1 and 3.2 copy a neighboring column. The value 4.5 comes from Table 2 (28°C), which describes different conditions.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Test-Day Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A question begins "Based on Tables 1 and 2." You should usually …',
            options: ['link the tables through a shared variable', 'answer from Table 1 alone', 'add the matching values from each table', 'rely on outside science knowledge']
          },
          {
            label: 'A choice says the data prove that one variable causes another. In an observational study, that choice is …',
            options: ['an overreach', 'the safest answer', 'correct if the trend is strong', 'correct only for linear data']
          },
          {
            label: 'With 2 minutes left and 4 unanswered questions, you should …',
            options: ['answer all four, guessing where needed', 'answer one carefully and leave three blank', 'reread the passage introduction', 'leave them blank to protect your score']
          }
        ],
        correctAnswers: ['link the tables through a shared variable', 'an overreach', 'answer all four, guessing where needed'],
        hint1: 'Two tables are used together through the variable they share.',
        hint2: 'Observing two variables change together shows association.',
        hint3: 'Wrong answers cost nothing on the ACT.',
        explanation: 'Questions that cite two tables want you to chain them through the shared variable. Observational data cannot prove causation, however strong the trend. There is no penalty for guessing, so every question should get an answer.'
      }
    },
    {
      id: 'act-sdata-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Timed Set 2: Model Wind Turbines** ⏱️ *Aim for 5 minutes.*

Students built model wind turbines and measured the electrical power produced (in milliwatts, mW) in front of a fan.

**Experiment 1:** Turbines with different numbers of blades were tested at a wind speed of **5 m/s**. Each value is the mean of 6 trials, with its uncertainty.

**Table 1**

| Number of blades | Mean power (mW) | Uncertainty (mW) |
|---|---|---|
| 2 | 38 | ± 4 |
| 3 | 52 | ± 3 |
| 4 | 55 | ± 4 |
| 6 | 47 | ± 3 |

**Experiment 2:** The 3-blade turbine was tested at different wind speeds.

**Table 2**

| Wind speed (m/s) | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
| Power (mW) | 3 | 11 | 27 | 52 | 91 |
      `,
      exercise: {
        questions: [
          {
            question: `Which conclusion about the number of blades is best supported by Experiment 1?`,
            options: [
              `4 blades clearly beat 3 blades in power`,
              `6 blades clearly produce the most power of all`,
              `3 and 4 blades give outputs not clearly different`,
              `2 blades and 6 blades produce the same power`
            ],
            correctAnswer: 2,
            explanation: `The 3-blade range is 49 to 55 mW and the 4-blade range is 51 to 59 mW; they overlap, so the difference is uncertain. That overlap also means 4 blades are not clearly better than 3. The 6-blade mean (47 mW) is lower than both, and the 2-blade range (34 to 42) does not overlap the 6-blade range (44 to 50), so those two are not the same.`
          },
          {
            question: `In Experiment 2, when the wind speed doubles from 3 m/s to 6 m/s, the power:`,
            options: [`rises about eightfold`, `about doubles`, `rises about threefold`, `stays about the same`],
            correctAnswer: 0,
            explanation: `Power goes from 11 mW to 91 mW, and 91 ÷ 11 ≈ 8.3, so it rises about eightfold. Doubling would give about 22 mW and tripling about 33 mW, far below the measured 91 mW. A jump of 80 mW is not "about the same."`
          },
          {
            question: `Based on both experiments, the 3-blade result in Experiment 1 matches which wind speed in Experiment 2?`,
            options: [`3 m/s`, `4 m/s`, `6 m/s`, `5 m/s`],
            correctAnswer: 3,
            explanation: `The 3-blade turbine produced 52 mW in Experiment 1, and Table 2 shows 52 mW at 5 m/s, which is consistent with Experiment 1 having been run at 5 m/s. The powers at 3, 4, and 6 m/s are 11, 27, and 91 mW, none of which match.`
          },
          {
            question: `What was the 3-blade turbine's power at 6 m/s, in watts? (1 W = 1,000 mW)`,
            options: [`91 W`, `0.091 W`, `9.1 W`, `0.91 W`],
            correctAnswer: 1,
            explanation: `Table 2 gives 91 mW at 6 m/s, and 91 ÷ 1,000 = 0.091 W. Reporting 91 W skips the conversion. The values 9.1 W and 0.91 W divide by 10 and 100 instead of 1,000.`
          },
          {
            question: `What is the average increase in power per 1 m/s of wind speed between 4 m/s and 6 m/s?`,
            options: [`32 mW per m/s`, `64 mW per m/s`, `45.5 mW per m/s`, `15.2 mW per m/s`],
            correctAnswer: 0,
            explanation: `Power rises from 27 to 91 mW, a change of 64 mW, over 2 m/s, so the rate is 64 ÷ 2 = 32 mW per m/s. The value 64 is the total change with no division by the speed change. The value 45.5 divides 91 by 2, and 15.2 divides 91 by 6; both use a single reading instead of a change.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

A psychologist measured reaction times with and without background music. Each result is a mean with its uncertainty.

| Condition | Mean reaction time (s) | Uncertainty (s) |
|---|---|---|
| Silence | 0.36 | ± 0.02 |
| Music | 0.42 | ± 0.03 |

**Question:** By how many milliseconds did the mean reaction times differ, and is the difference clear?

<details>
<summary><b>Show answer</b></summary>

**60 ms, and yes, the difference is clear.** The means differ by 0.42 − 0.36 = 0.06 s, and 0.06 × 1,000 = 60 ms. The silence range is 0.34 to 0.38 s and the music range is 0.39 to 0.45 s, so the ranges do not overlap. This one question uses three skills: a table lookup, a unit conversion (Part 1), and an error-bar comparison (Part 4).
</details>
      `
    },
    {
      id: 'act-sdata-p7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Enhanced ACT Science: **optional**, **40 questions in 40 minutes**, **4 choices**, no penalty for guessing; budget about **one minute per question**.
- **Routine:** skim the introduction, glance at figure labels and units, then go to the questions and to the figure each one names.
- Identify the **question type** (lookup, rate, trend, linking, prediction, design/claim) and apply that part's method.
- Before choosing, run the five checks: **right figure, right variable and units, right direction, inside the data's limits, claim the right size**.
- Eliminate, skip hard questions and return, and **never leave a blank**.
      `
    }
  ]
};
