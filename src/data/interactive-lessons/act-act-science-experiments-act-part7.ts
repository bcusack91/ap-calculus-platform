export const actScienceExpPart7Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# ⏱️ Timed Research Summary Passage

**Part 7 of 7 — Putting It All Together Under Enhanced ACT Timing**

This part pulls every skill from Parts 1–6 into one full Research Summaries passage, worked under real timing.

## The timing you are working with

| Feature | Enhanced ACT Science |
|---|---|
| Status | Optional section, scored separately from the composite |
| Length | 40 questions in 40 minutes |
| Answer choices | 4 per question |
| Pace | About 1 minute per question, including reading time |
| Wrong answers | No penalty, so never leave a question blank |

One minute per question includes the time spent reading the passage. A passage with 8 questions therefore gets about **8 minutes total**, not 8 minutes plus reading time. That is why the reading routine below is short.

## A 90-second passage routine

1. **Introduction (15 seconds):** what question are the researchers asking? Write it in a few words.
2. **Each experiment (20–25 seconds):** label the IV, DV, and constants in the margin. For "repeated **except**…" experiments, write only what changed.
3. **Tables (10 seconds each):** read the headings and units, and note the overall trend (up, down, or up-then-down). Do not study every number.
4. **Go to the questions.** Return to the passage only for the specific number or sentence a question needs.

## The question types you will meet, and where you learned them

| Question type | What to do | Part |
|---|---|---|
| Identify the IV, DV, constant, or control | Picked vs. recorded; what stayed the same; the untreated baseline | 1 |
| Why did the researchers…? / improve the design | Fair test, one variable at a time, sample size, replication, bias | 2 |
| How did Experiment 2 differ? / which experiment? | Read the "except" sentence and your margin notes | 3 |
| Support or weaken a hypothesis | Find the finding that one claim predicts and another contradicts | 4 |
| Is the conclusion supported? | Whole trend, tested scope, alternative explanations, no extrapolation as certainty | 5 |
| Predict a new trial / combine experiments | Interpolate, extrapolate cautiously, chain the two effects | 6 |

## Triage: which questions to do first

- **Fast (about 30 seconds):** identify a variable, read a value, find the highest or lowest result. Do these immediately.
- **Medium (about 1 minute):** trends, "how did Experiment 2 differ," interpolation.
- **Slow (up to 2 minutes):** combining experiments, evaluating a conclusion with "Yes, because / No, because" choices, designing a new trial.

If a question is taking more than 2 minutes, eliminate what you can, choose an answer, mark it, and move on. Saved seconds from the fast questions pay for the slow ones.

## Elimination habits that work on every question

- Cross out choices that quote a **true fact from the wrong experiment**.
- Cross out choices that use **absolute words** ("all," "proves," "exactly") about untested cases.
- In "Yes/No, because" questions, decide yes or no first, then compare only the two remaining reasons.
- In "supports X but not Y" questions, cross out any finding both viewpoints already accept.

## Replication inside a passage

Researchers often run several dishes, plants, or trials per condition and report the **mean**. When individual trials are shown, look at how much they vary. If three dishes in one condition gave 83%, 86%, and 83%, the mean of 84% is trustworthy. If they gave 40%, 84%, and 128 eggs out of 200, something is wrong with the measurement. A single trial per condition is a weakness: the result could be a fluke, and repeating it would make it more reliable.

## Now try the passage

Set a timer for **8 minutes** and answer all 8 questions in the two practice sets below without stopping. Then read every explanation, including those for questions you got right, and note which Part each mistake came from.
      `
    },
    {
      id: 'act-s7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A 90-second read of a short passage</b></summary>

**Passage:** A student hypothesized that adding baking soda raises the pH of pond water. She added 0, 1, 2, or 3 g of baking soda to four 500 mL samples from the same pond and measured pH values of 7.0, 7.8, 8.3, and 8.6. She tested one sample at each amount.

**Margin notes:** IV = baking soda (g); DV = pH; constants = 500 mL, same pond; control = 0 g; trials = 1 per amount.

**Likely question:** "Which statement best evaluates the study?" The pH rose with every gram, so the results **support** the hypothesis. With only one sample per amount, **repeated trials** would make the result more reliable. The study cannot show the effect holds for every pond, because water came from only one pond.
</details>

<details>
<summary><b>Example 2: Spotting a hidden confound fast</b></summary>

**Passage:** Students found that classrooms with windows had higher average test scores than windowless classrooms. Every room with windows was in the school's new building, which also had newer computers and smaller classes.

**Question:** Why can't the students conclude that windows caused the higher scores?

**Solution:** Building age, computers, and class size all differ along with the windows, so each is an **alternative explanation**. Under time pressure, list every difference between the groups; any difference other than the one being tested is a confound.
</details>
      `
    },
    {
      id: 'act-s7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Timed Passage — Brine Shrimp Hatching (Questions 1–4)** 🎯

Brine shrimp eggs can stay dormant for years and hatch when placed in salt water. Biologists studied how conditions affect the percentage of eggs that hatch. In every trial, 200 eggs were placed in a dish of salt water, and the number hatched after 48 hours was counted. Each condition was tested in 3 separate dishes, and the mean percentage hatched is reported.

**Experiment 1:** Dishes were kept at 25 °C under continuous light. The salinity (grams of salt per liter of water) was varied.

| Salinity (g/L) | Mean hatched (%) |
|---|---|
| 10 | 22 |
| 20 | 61 |
| 30 | 84 |
| 40 | 70 |
| 50 | 31 |

**Experiment 2:** The procedure of Experiment 1 was repeated, except that salinity was kept at 30 g/L and the temperature was varied.

| Temperature (°C) | Mean hatched (%) |
|---|---|
| 15 | 18 |
| 20 | 52 |
| 25 | 84 |
| 30 | 88 |
| 35 | 40 |

**Experiment 3:** Dishes were kept at 30 g/L and 25 °C. Half of the dishes were kept under continuous light, and the rest were kept in complete darkness.

| Condition | Dish 1 (%) | Dish 2 (%) | Dish 3 (%) | Mean (%) |
|---|---|---|---|---|
| Light | 83 | 86 | 83 | 84 |
| Dark | 45 | 50 | 46 | 47 |
      `,
      exercise: {
        questions: [
          {
            question: `What is the dependent variable in Experiment 2?`,
            options: [`The salinity`, `The water temperature`, `The number of eggs per dish`, `The percentage of eggs that hatched`],
            correctAnswer: 3,
            explanation: `The biologists recorded how many eggs hatched, reported as a percentage, so that is the outcome being measured. Temperature was chosen for each dish, which makes it the independent variable of Experiment 2. Salinity (30 g/L) and the number of eggs (200) were the same in every dish, so they are constants.`
          },
          {
            question: `Which variable was held constant in Experiment 2 but varied in Experiment 1?`,
            options: [`Salinity`, `Temperature`, `Light condition`, `Eggs per dish`],
            correctAnswer: 0,
            explanation: `The "except" sentence says Experiment 2 kept salinity at 30 g/L, while Experiment 1 varied it from 10 to 50 g/L. Temperature is the reverse: constant in Experiment 1 and varied in Experiment 2. Light was continuous in both experiments, and every dish in every experiment held 200 eggs.`
          },
          {
            question: `Of all the conditions tested in the three experiments, which produced the highest mean percentage hatched?`,
            options: [
              `30 g/L, 25 °C, light`,
              `40 g/L, 25 °C, light`,
              `30 g/L, 30 °C, light`,
              `30 g/L, 25 °C, dark`
            ],
            correctAnswer: 2,
            explanation: `The highest mean anywhere in the passage is 88%, from Experiment 2 at 30 °C and 30 g/L under light. The 30 g/L, 25 °C, light condition gave 84%, the best result in Experiments 1 and 3 but not overall. The 40 g/L condition gave 70%, and darkness gave only 47%.`
          },
          {
            question: `Why did the biologists test each condition in 3 separate dishes instead of 1?`,
            options: [
              `To make the temperature the same in every dish`,
              `To increase the number of variables tested at once`,
              `To provide a control group for each experiment`,
              `To reduce the effect of one unusual dish on the result`
            ],
            correctAnswer: 3,
            explanation: `Averaging several dishes means one unusual dish cannot swing the result much, which makes each mean more reliable; the close dish values in Experiment 3 (83, 86, 83) show this. Extra dishes do not set the temperature, which was controlled separately. Repeating a condition tests the same variables again rather than adding new ones, and a control group is a baseline condition, not a copy of the same condition.`
          }
        ]
      }
    },
    {
      id: 'act-s7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Timed Passage — Brine Shrimp Hatching (Questions 5–8)** 📋

Use the passage above. Two hypotheses had been proposed before Experiment 3:

**Hypothesis 1:** Light triggers hatching, so more eggs hatch in light than in darkness.

**Hypothesis 2:** Hatching depends only on salinity and temperature; light has no effect.
      `,
      exercise: {
        questions: [
          {
            question: `Which hypothesis do the results of Experiment 3 support?`,
            options: [`Hypothesis 2 only`, `Hypothesis 1 only`, `Both hypotheses`, `Neither hypothesis`],
            correctAnswer: 1,
            explanation: `With salinity and temperature held equal, 84% hatched in light and 47% in darkness, exactly as Hypothesis 1 predicts. Hypothesis 2 says light should make no difference, so a gap of 37 percentage points contradicts it. Because the results favor one hypothesis and contradict the other, they cannot support both or neither.`
          },
          {
            question: `Suppose the lamp used in Experiment 3 warmed the light dishes to 28 °C, while the dark dishes stayed at 25 °C. How would this affect the conclusion that light increases hatching?`,
            options: [
              `It would weaken it, since the warmth could explain part of the gap`,
              `It would strengthen it, since warmer dishes always hatch fewer eggs`,
              `It would not affect it, since temperature was the IV in Experiment 2`,
              `It would prove it, since both groups still contained 200 eggs`
            ],
            correctAnswer: 0,
            explanation: `If the light dishes were also warmer, temperature changed along with light, creating a confound; Experiment 2 shows that warmer water near 25 to 30 °C raises hatching, so some of the difference could come from heat. Experiment 2 shows the opposite of warmer dishes hatching fewer eggs in this range. Temperature being the IV elsewhere does not keep it from confounding Experiment 3, and equal egg counts cannot prove a conclusion when another variable differs.`
          },
          {
            question: `If a dish at 35 g/L, 25 °C, under light had been included in Experiment 1, its mean percentage hatched would most likely be closest to:`,
            options: [`61%`, `70%`, `77%`, `89%`],
            correctAnswer: 2,
            explanation: `A salinity of 35 g/L lies halfway between 30 g/L (84%) and 40 g/L (70%), so about 77% is expected. A value of 70% is the result at 40 g/L, a higher salinity than 35 g/L. A value of 61% matches 20 g/L, and 89% is higher than any salinity in Experiment 1 produced.`
          },
          {
            question: `A student concludes that the percentage of eggs that hatch depends only on salinity. Is this conclusion supported by the results?`,
            options: [
              `Yes; hatching changed as salinity changed`,
              `Yes; hatching peaked at 30 g/L in Experiment 1`,
              `No; hatching fell above 30 g/L in Experiment 1`,
              `No; temperature and light also matter`
            ],
            correctAnswer: 3,
            explanation: `Experiments 2 and 3 held salinity at 30 g/L, yet hatching still changed with temperature and with light, so salinity is not the only factor. Hatching did change with salinity and peaked at 30 g/L, but neither fact shows that salinity is the sole cause. The drop above 30 g/L is a true result, but it describes how salinity matters, not whether anything else does.`
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose Your Misses** 🔍

Match each mistake to the Part that teaches the skill you need to review.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Picked "salinity" as the DV of Experiment 2 → review …',
            options: ['Part 1 (variables)', 'Part 3 (reading experiments)', 'Part 5 (conclusions)', 'Part 6 (predictions)']
          },
          {
            label: 'Chose 70% for the 35 g/L dish → review …',
            options: ['Part 1 (variables)', 'Part 3 (reading experiments)', 'Part 5 (conclusions)', 'Part 6 (predictions)']
          },
          {
            label: 'Agreed that hatching depends only on salinity → review …',
            options: ['Part 1 (variables)', 'Part 3 (reading experiments)', 'Part 5 (conclusions)', 'Part 6 (predictions)']
          }
        ],
        correctAnswers: ['Part 1 (variables)', 'Part 6 (predictions)', 'Part 5 (conclusions)'],
        hint1: 'Choosing the wrong DV means mixing up picked and recorded values.',
        hint2: 'Picking a tested value instead of a value between two tested values is an interpolation error.',
        hint3: 'Accepting "depends only on" when other experiments show other factors is a conclusion-scope error.',
        explanation: 'DV errors go back to Part 1. Interpolation errors go back to Part 6. Accepting a claim that ignores other experiments goes back to Part 5.'
      }
    },
    {
      id: 'act-s7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Timing Check

Score your timed attempt on the brine shrimp passage.

| Your time for 8 questions | What it means | Next step |
|---|---|---|
| 8 minutes or less | On pace for 40 questions in 40 minutes | Keep the 90-second reading routine |
| 9–10 minutes | Slightly slow | Cut table reading to headings and trend only |
| More than 10 minutes | Too slow for the full section | Answer fast questions first and limit any single question to 2 minutes |

**Extra question (1 minute):** Based on Experiments 1 and 2, would you expect more eggs to hatch at 40 g/L and 30 °C than at 40 g/L and 25 °C?

<details>
<summary><b>Answer</b></summary>

Probably yes. At 30 g/L, raising the temperature from 25 °C to 30 °C raised hatching slightly (84% to 88%). If temperature has a similar effect at 40 g/L, hatching there should rise a little above 70%. This is a reasonable prediction, not a certainty, because no dish combined 40 g/L with 30 °C.
</details>
      `
    },
    {
      id: 'act-s7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Enhanced ACT Science: optional, 40 questions in 40 minutes, 4 choices, no penalty for guessing. Budget about 1 minute per question, reading included.
- Read a passage in about 90 seconds: goal, IV/DV/constants for each experiment, table headings and trends.
- Do fast questions first; cap any single question at about 2 minutes.
- Mean values from several trials are more reliable than single trials; a factor that changes along with the IV is a confound.
- After each timed set, trace every miss to its skill (variables, design, reading experiments, viewpoints, conclusions, predictions) and review that Part.
      `
    }
  ]
}
