export const actScienceExpPart1Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 🔬 Science Experiments: Research Summaries

**Part 1 of 7 — Experimental Design: The Anatomy of an Experiment**

On the Enhanced ACT, Science is an **optional** section: **40 questions in 40 minutes**, every question with **4 answer choices**. It earns its own score and is not part of the composite (which comes from English, Math, and Reading). Science questions come in three passage formats:

| Passage format | What you see | What you do |
|---|---|---|
| Data Representation | One set of graphs or tables | Read and interpret the data |
| **Research Summaries** | One or more experiments, each with a procedure and results | Understand the design and use the results |
| Conflicting Viewpoints | Two or more competing explanations | Compare the claims |

This lesson is about **Research Summaries** — the passages that describe experiments. You do not need outside science knowledge for most of these questions. You need to know how an experiment is built, because almost every question asks what was changed, what was measured, what was kept the same, and what the results allow you to say.

## The six parts of every experiment

| Term | Definition | How to spot it in a passage |
|---|---|---|
| **Hypothesis** | A testable prediction about how one thing affects another | "The researchers predicted that…", "If…, then…" |
| **Independent variable (IV)** | The condition the experimenter deliberately chooses or changes | Usually the left column of a table or the x-axis of a graph; tidy values such as 10, 20, 30 |
| **Dependent variable (DV)** | The outcome that is measured in response | Usually the right column or the y-axis; values that were recorded, not chosen |
| **Constants (controlled variables)** | Everything kept the same in every trial | "Each trial used…", "All other conditions were identical" |
| **Control group / control trial** | The baseline condition that receives none (or a standard amount) of the treatment | "0 g", "no fertilizer", "untreated", "placebo" |
| **Trials** | Separate runs of a condition | "Each condition was tested 3 times" |

**The quick test for IV vs. DV:** ask "Did the experimenter *pick* this value, or *record* it?" Picked values are the IV. Recorded values are the DV. If a researcher set the temperatures at 20, 40, 60, and 80 °C and then timed how long sugar took to dissolve, temperature was picked (IV) and time was recorded (DV).

## Constants are not the same thing as the control group

This is the most common mix-up on the test, so keep the two ideas separate.

- A **constant** is a *variable* that never changes from trial to trial: the same 200 mL of water, the same 6-volt battery, the same room temperature.
- The **control group** is a *group or trial* — the one that gets no treatment (or the standard treatment) so the others can be compared with it.

In a fertilizer study with plants given 0 g, 5 g, and 10 g each week, the **0 g group is the control group**. Water, soil, and light are **constants**. The 5 g group is not a control just because it has the smallest dose; it is still being treated.

## Kinds of control groups

| Control type | Example | Why it is needed |
|---|---|---|
| No treatment | Plants given no fertilizer | Shows what happens without the treatment |
| Placebo | Patients given a look-alike pill with no drug | Many conditions improve on their own or because people expect to improve; a placebo group measures that baseline |
| Standard condition | Seeds kept at normal room temperature | Gives a reference point when "none" is impossible (every seed is at *some* temperature) |

A medical result such as "40 of 50 patients felt better after taking Drug X" means little by itself. If headaches often fade within an hour anyway, you need a placebo group of similar patients. Only if the Drug X group improves **more** than the placebo group is the drug doing something.

## Hypotheses and predictions

A hypothesis names a relationship between the IV and the DV, and it predicts a direction:

- *Hypothesis:* "Increasing the angle of a ramp increases how far a toy car rolls past the bottom."
- *Prediction for the study:* as the angle goes from 10° to 40°, the rolling distance should get longer.

When the ACT asks which hypothesis a study was **designed to test**, match the hypothesis to what was varied and what was measured. A hypothesis about ramp *surface* cannot be what a study tested if every trial used the same surface.

## Reading a results table

| Ramp angle (°) | Distance rolled (cm) |
|---|---|
| 10 | 42 |
| 20 | 81 |
| 30 | 117 |
| 40 | 149 |

- **IV:** ramp angle (left column, evenly spaced values someone chose)
- **DV:** distance rolled (right column, measured values)
- **Trend:** distance increases as angle increases

If the procedure says the same car and the same ramp surface were used each time, the car's mass and the surface are **constants**.
      `
    },
    {
      id: 'act-s1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Label every part of a procedure</b></summary>

**Procedure:** A student placed 2.0 g of yeast in each of four flasks containing 100 mL of water. The water in the flasks contained 0%, 2%, 4%, or 6% sugar. All flasks were kept at 30 °C. She collected the gas released by each flask for 20 minutes and recorded its volume in milliliters.

**Solution:**
1. What did she *pick*? The sugar percentage (0, 2, 4, 6) → **IV**.
2. What did she *record*? The volume of gas → **DV**.
3. What stayed the same? Yeast mass (2.0 g), water volume (100 mL), temperature (30 °C), collection time (20 min) → **constants**.
4. Which flask is the baseline? The 0% sugar flask → **control**. It shows how much gas the yeast releases with no added sugar.

**ACT skill:** Underline numbers that repeat in every trial (constants) and numbers that change (the IV).
</details>

<details>
<summary><b>Example 2: Which hypothesis was the study testing?</b></summary>

**Question:** Using the yeast study above, which hypothesis was the study designed to test?
- Yeast releases more gas at higher temperatures.
- Yeast releases more gas when more sugar is available.
- Larger amounts of yeast release more gas.
- Yeast releases more gas in larger volumes of water.

**Solution:** The study varied only sugar percentage and measured gas, so the hypothesis must link sugar to gas: **"Yeast releases more gas when more sugar is available."** Temperature, yeast mass, and water volume were all held constant, so no hypothesis about them could be tested here.
</details>
      `
    },
    {
      id: 'act-s1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set A — The Yeast Study** 🎯

A student placed 2.0 g of yeast in each of four flasks of 100 mL of water containing different amounts of sugar. Every flask was kept at 30 °C, and gas was collected for 20 minutes.

| Sugar (%) | Gas collected (mL) |
|---|---|
| 0 | 0.5 |
| 2 | 6.1 |
| 4 | 11.8 |
| 6 | 15.2 |
      `,
      exercise: {
        questions: [
          {
            question: `What is the dependent variable in this study?`,
            options: [`The percentage of sugar`, `The volume of gas collected`, `The flask temperature`, `The mass of yeast used`],
            correctAnswer: 1,
            explanation: `The dependent variable is the outcome that was recorded, and the student recorded the volume of gas from each flask. The sugar percentage was chosen ahead of time, which makes it the independent variable. The temperature (30 °C) and the yeast mass (2.0 g) were the same in every flask, so they are constants.`
          },
          {
            question: `Which of the following was a constant in this study?`,
            options: [`The sugar percentage`, `The gas volume`, `The water volume`, `The sugar mass added`],
            correctAnswer: 2,
            explanation: `Every flask held 100 mL of water, so water volume never changed and is a constant. The sugar percentage was deliberately varied, and the amount of sugar added rises with it, so neither is constant. The gas volume was measured and differed from flask to flask.`
          },
          {
            question: `What was the purpose of the flask with 0% sugar?`,
            options: [
              `It showed how much gas the yeast gave off with no added sugar`,
              `It kept the temperature of the other three flasks steady at 30 °C`,
              `It tested whether a larger mass of yeast would release more gas`,
              `It provided the highest gas volume for the other flasks to match`
            ],
            correctAnswer: 0,
            explanation: `The 0% flask is the control: it shows what the yeast does without the treatment, so the gas from the sugar flasks can be compared with it. Each flask was held at 30 °C by the setup, not by the 0% flask. Yeast mass was 2.0 g everywhere, so no flask tested a larger mass, and the 0% flask actually produced the least gas (0.5 mL), not the most.`
          },
          {
            question: `Which hypothesis is the study best designed to test?`,
            options: [
              `Yeast releases more gas at warmer temperatures`,
              `Yeast releases more gas in larger water volumes`,
              `More yeast in a flask releases more total gas`,
              `More sugar makes the yeast release more gas`
            ],
            correctAnswer: 3,
            explanation: `The only thing that changed between flasks was the sugar percentage, and the outcome recorded was gas volume, so the study tests a link between sugar and gas. Temperature, water volume, and yeast mass were all held constant, so the study gives no information about how any of them affects gas production.`
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the Ramp Study** 🔍

A student released the same toy car from a wooden ramp tilted at 10°, 20°, 30°, and 40° and measured how far the car rolled past the bottom.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The ramp angle is the …',
            options: ['independent variable', 'dependent variable', 'constant', 'control group']
          },
          {
            label: 'The distance rolled is the …',
            options: ['independent variable', 'dependent variable', 'constant', 'control group']
          },
          {
            label: 'The wooden ramp surface is a …',
            options: ['independent variable', 'dependent variable', 'constant', 'control group']
          }
        ],
        correctAnswers: ['independent variable', 'dependent variable', 'constant'],
        hint1: 'Which value did the student choose before each trial?',
        hint2: 'Which value could only be known after the car stopped?',
        hint3: 'Which value was the same in all four trials?',
        explanation: 'The student picked the angle (IV) and recorded the distance (DV). The same wooden surface was used in every trial, so it is a constant.'
      }
    },
    {
      id: 'act-s1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set B — New Studies** 📋
      `,
      exercise: {
        questions: [
          {
            question: `Researchers grew bean plants for 21 days under red, blue, or white light, giving each plant the same soil and 50 mL of water per day. They then measured each plant's height. Which choice correctly pairs the independent variable (IV) with the dependent variable (DV)?`,
            options: [
              `IV: plant height; DV: light color`,
              `IV: light color; DV: plant height`,
              `IV: water volume; DV: plant height`,
              `IV: light color; DV: soil type`
            ],
            correctAnswer: 1,
            explanation: `The researchers chose the light color for each group and then measured height, so light color is the IV and height is the DV. Reversing them confuses what was set with what was recorded. Water volume (50 mL per day) and soil type were the same for every plant, so they are constants, not the IV or the DV.`
          },
          {
            question: `A study tested Fertilizer F on tomatoes. Group 1 received 5 g per week, Group 2 received 10 g per week, and Group 3 received no fertilizer; light, water, and soil were the same for all. Which statement is accurate?`,
            options: [
              `Group 1 is the control because it got the smallest dose`,
              `Water and light make up the control group of this study`,
              `Group 3 is the control; water and light are constants`,
              `There is no control, because every group was watered`
            ],
            correctAnswer: 2,
            explanation: `The control group is the one that gets none of the treatment, which is Group 3; water and light are variables held the same, so they are constants. Group 1 still received fertilizer, so its small dose is a treatment level, not a baseline. Water and light are variables, not groups, and giving every group water does not remove the untreated baseline.`
          },
          {
            question: `Researchers gave a new pain reliever to 60 patients with sore muscles, and 45 reported less pain the next day. Sore muscles usually improve overnight. Which added group would best show whether the drug itself reduced pain?`,
            options: [
              `60 more patients given a double dose of the drug`,
              `Similar patients given an identical pill with no drug`,
              `The same 60 patients given the drug again next week`,
              `Patients without sore muscles who are given the drug`
            ],
            correctAnswer: 1,
            explanation: `Because sore muscles often improve on their own, the study needs a placebo group of similar patients who receive a look-alike pill with no drug; the drug works only if its group improves more than that baseline. A double dose or a repeat dose still has nothing untreated to compare against, and patients without sore muscles cannot show whether muscle pain decreased.`
          },
          {
            question: `In a table of results, the left column lists "Salt added (g): 0, 5, 10, 15" and the right column lists "Freezing point (°C): 0.0, -1.6, -3.1, -4.9". Which statement is most likely true?`,
            options: [
              `Salt added is the IV and freezing point is the DV`,
              `Freezing point is the IV and salt added is the DV`,
              `Both columns list constants held for all trials`,
              `Salt added is the DV, since it is listed first`
            ],
            correctAnswer: 0,
            explanation: `The salt amounts are tidy, evenly spaced values that someone chose, and the freezing points are irregular values that had to be measured, so salt is the IV and freezing point is the DV. Swapping them gets the roles backward. Both columns change from row to row, so neither can be a constant, and a column's position alone never makes it the DV.`
          }
        ]
      }
    },
    {
      id: 'act-s1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Mini-passage:** To study how water temperature affects the time needed for a tablet to dissolve, a student dropped identical 1 g tablets into 250 mL of water at 10, 25, 40, and 55 °C. The water was not stirred. She recorded the time until no solid remained: 96 s, 61 s, 38 s, and 24 s.

Try each question in under 30 seconds.

| # | Question | Answer |
|---|---|---|
| 1 | What is the IV? | Water temperature |
| 2 | Name two constants. | Tablet mass (1 g), water volume (250 mL), no stirring |
| 3 | What is the trend? | Dissolving time decreases as temperature increases |
| 4 | Which hypothesis was tested? | Warmer water dissolves the tablet faster |

<details>
<summary><b>Why isn't stirring the IV?</b></summary>

Stirring was the same in every trial (none), so it is a constant. A variable can be the IV only if it changes from trial to trial.
</details>

**ACT Tip:** Before reading the questions, spend about 20 seconds labeling the IV, DV, and constants in the margin of each experiment. Many questions are answered by those labels alone.
      `
    },
    {
      id: 'act-s1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Enhanced ACT Science is optional: 40 questions, 40 minutes, 4 choices, scored separately from the composite.
- **IV** = picked by the experimenter (often the left column or x-axis). **DV** = recorded as the outcome (often the right column or y-axis).
- **Constants** are variables kept the same in every trial; the **control group** is the untreated or standard group used as a baseline. Do not confuse them.
- A **placebo group** is the control when people (or conditions) might improve on their own.
- A study can only test a hypothesis that links the variable it changed to the variable it measured.
      `
    }
  ]
}
