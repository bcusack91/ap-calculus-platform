export const actScienceReasonPart7Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# 🏁 Integrated Practice

**Part 7 of 7 — A Mixed Passage Set Under Enhanced ACT Science Timing**

## The Section in One Table

| Feature | Enhanced ACT Science |
|---|---|
| Status | Optional; scored separately, **not** part of the composite |
| Length | **40 questions in 40 minutes** |
| Answer choices | 4 per question |
| Guessing | No penalty for wrong answers, so answer everything |
| Pace | About 1 minute per question, roughly 5 to 6 minutes per passage |

## Recognize the Passage Format in Ten Seconds

| You see... | Format | Questions mostly test | Lesson parts |
|---|---|---|---|
| Tables or graphs with a short introduction, no numbered experiments | Data representation | Lookups, trends, interpolation, comparing series | 3, 4, 5 |
| "Experiment 1," "Study 2," a procedure, then results | Research summary | Variables, controls, design, predictions, combining experiments | 1, 2, 4 |
| "Scientist 1," "Student 2," "Hypothesis 1" | Conflicting viewpoints | Claims, agreement, which evidence supports or weakens which view | 3, 6 |

## Designing a Fair Test

Research summaries often ask which design would best test a question, or why researchers included a step.

| Feature of a good design | Why it matters |
|---|---|
| Change **only one** variable at a time | Any difference can be traced to that variable |
| Hold every other factor **constant** | Other factors cannot explain the results |
| Include a **control** (no treatment or standard condition) | Gives a baseline for comparison |
| **Repeat** trials and average | Reduces the effect of random variation |
| **Randomly assign** living subjects to groups | Makes groups alike except for the treatment, so a difference can show a **cause** |

To pick the best design, eliminate any choice that changes two things at once (color **and** size, treatment **and** location) or that never changes the variable being tested. To test whether one factor **causes** another in people or animals, the strongest design randomly assigns the factor rather than surveying people who chose it themselves.

## A 40-Minute Game Plan

1. **Preview each passage** for about 30 seconds: introduction, figure titles, axes, units, trends.
2. **First pass:** answer what you can; for a question that stalls you past a minute or so, guess, mark it, and move on.
3. **Checkpoints:** about 10 questions done by minute 10, 20 by minute 20, 30 by minute 30.
4. **Order is your choice.** If Conflicting Viewpoints passages are slow for you, you may save them for later, but don't spend time hunting; move through the booklet or screen efficiently.
5. **Final two minutes:** make sure every question has an answer.

## Mixed-Set Checklist

| Question type | Do this |
|---|---|
| Trend | Trace every point: increases, decreases, rises then falls |
| Interpolation | The answer lies between the two neighboring results |
| Extrapolation | Use the typical step; test for linear, inverse, or doubling |
| Variables | Changed on purpose = independent; measured = dependent; same in all trials = controlled |
| Supports / weakens | Turn the claim into a prediction, then compare |
| Viewpoints | Map each one; agreement = stated by both |
| Correlation | A survey shows association, not cause |

**ACT Tip:** In a mixed set, the skill matters more than the topic. A lake, a protein, and a glacier all reduce to the same few question types once you name them.
      `
    },
    {
      id: 'act-s7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Choosing the best experimental design</b></summary>

**Question:** A student wants to test whether the color of a pot affects how warm the soil inside it gets in sunlight. Which design is best?

- A. Pots of different colors and different sizes, each filled with soil and placed in the sun.
- B. Identical pots in different colors, filled with the same soil, placed side by side in the sun.
- C. Identical black pots filled with the same soil, some in sun and some in shade.
- D. Pots of different colors, with the black pot indoors and the others outdoors.

**Solution:**
1. **Variable to test:** pot color. It must change, and nothing else should.
2. A changes size along with color; D changes location along with color. Either extra factor could explain the result.
3. C never changes color, so it cannot answer the question.
4. B changes only color and holds pot type, soil, and location constant.

**Answer: B** ✓
</details>

<details>
<summary><b>Example 2: Testing a cause after a correlation</b></summary>

**Situation:** A researcher finds that students who eat breakfast earn higher morning quiz scores.

**Question:** Which follow-up study would best test whether eating breakfast causes higher scores?

**Solution:**
1. The original finding is a **correlation**: students who eat breakfast may differ in sleep, schedules, or other habits.
2. **Surveying more students**, or asking them whether breakfast helps, still measures only an association or an opinion.
3. **Randomly assigning** students to eat or skip breakfast on test days makes the groups alike except for breakfast, so a difference in scores can be traced to it.

**Answer:** Randomly assign breakfast, then compare scores. ✓
</details>
      `
    },
    {
      id: 'act-s7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Passage I (Data Representation)** 🎯

*Suggested time: 4 minutes for 4 questions.*

> Researchers measured water temperature and dissolved oxygen at several depths in a lake in late summer (Table 1). They also set nets at each depth and counted the fish of two species caught per net (Table 2).

**Table 1**

| Depth (m) | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|
| Water temperature (°C) | 24 | 22 | 12 | 8 | 7 |
| Dissolved oxygen (mg/L) | 8.6 | 8.2 | 5.1 | 3.0 | 2.4 |

**Table 2**

| Depth (m) | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|
| Species P (fish per net) | 14 | 11 | 3 | 0 | 0 |
| Species Q (fish per net) | 2 | 5 | 9 | 6 | 3 |
      `,
      exercise: {
        questions: [
          {
            question: `According to Table 1, between which two consecutive depths did water temperature change the most?`,
            options: [
              `0 m and 5 m`,
              `5 m and 10 m`,
              `10 m and 15 m`,
              `15 m and 20 m`
            ],
            correctAnswer: 1,
            explanation: `From 5 m to 10 m the temperature fell from 22°C to 12°C, a drop of 10°C. The other steps are much smaller: 2°C from 0 m to 5 m, 4°C from 10 m to 15 m, and 1°C from 15 m to 20 m.`
          },
          {
            question: `Based on Tables 1 and 2, Species Q was caught in the greatest numbers at a dissolved oxygen level of about:`,
            options: [
              `8.6 mg/L`,
              `8.2 mg/L`,
              `5.1 mg/L`,
              `2.4 mg/L`
            ],
            correctAnswer: 2,
            explanation: `Species Q peaked at 9 fish per net at 10 m, and Table 1 shows 5.1 mg/L of dissolved oxygen at 10 m. 8.6 mg/L and 8.2 mg/L belong to 0 m and 5 m, where Species Q was scarce, and 2.4 mg/L belongs to 20 m, where only 3 fish per net were caught.`
          },
          {
            question: `If the researchers had measured dissolved oxygen at a depth of 12 m, the value would most likely have been:`,
            options: [
              `greater than 8.2 mg/L`,
              `between 5.1 and 8.2 mg/L`,
              `between 3.0 and 5.1 mg/L`,
              `less than 2.4 mg/L`
            ],
            correctAnswer: 2,
            explanation: `12 m lies between the 10 m and 15 m measurements, and dissolved oxygen fell steadily with depth, so the value should fall between 5.1 and 3.0 mg/L. Values between 5.1 and 8.2 mg/L belong to depths shallower than 10 m, and above 8.2 mg/L would be shallower than 5 m. Less than 2.4 mg/L would be lower than the reading at 20 m.`
          },
          {
            question: `Which statement is best supported by the two tables?`,
            options: [
              `Species P catches decreased as dissolved oxygen decreased`,
              `Species P catches increased as water temperature decreased`,
              `Species Q catches increased steadily as the depth increased`,
              `Low dissolved oxygen is proven to kill Species P in the lake`
            ],
            correctAnswer: 0,
            explanation: `As depth increased, dissolved oxygen fell from 8.6 to 2.4 mg/L and Species P catches fell from 14 to 0, so the two decreased together. Species P catches fell, not rose, as the water got colder. Species Q rose to a peak at 10 m and then declined, so it did not increase steadily. The tables show an association only; they cannot prove that low oxygen kills fish, since temperature changed too.`
          }
        ]
      }
    },
    {
      id: 'act-s7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Passage II (Research Summary)** 📋

*Suggested time: 5 minutes for 5 questions.*

> Students studied factors that affect how fast water evaporates. In both experiments, every dish started with 200 mL of water and sat in the same room at 22°C for 48 hours. The volume of water lost was then measured.
>
> **Experiment 1:** Dishes with different surface areas were used, with no fan.
>
> **Experiment 2:** Dishes with a surface area of 100 cm² were placed in front of a fan set to different speeds.

**Table 1 (Experiment 1)**

| Surface area (cm²) | 50 | 100 | 200 | 400 |
|---|---|---|---|---|
| Water lost (mL) | 6 | 12 | 23 | 47 |

**Table 2 (Experiment 2)**

| Fan setting | Off | Low | High |
|---|---|---|---|
| Water lost (mL) | 12 | 19 | 27 |
      `,
      exercise: {
        questions: [
          {
            question: `Which factor was held constant in BOTH experiments?`,
            options: [
              `The surface area of each dish`,
              `The speed of the fan`,
              `The starting volume of water`,
              `The volume of water lost`
            ],
            correctAnswer: 2,
            explanation: `Every dish in both experiments started with 200 mL of water, so the starting volume was controlled throughout. Surface area was the variable changed in Experiment 1, and fan speed was the variable changed in Experiment 2. The volume of water lost was the result measured in both experiments.`
          },
          {
            question: `Based on Experiment 1, a dish with a surface area of 300 cm² would most likely lose:`,
            options: [
              `less than 12 mL`,
              `between 12 and 23 mL`,
              `between 23 and 47 mL`,
              `more than 47 mL`
            ],
            correctAnswer: 2,
            explanation: `300 cm² lies between the 200 cm² and 400 cm² dishes, and water lost rose steadily with surface area, so the loss should fall between 23 mL and 47 mL. Losses between 12 and 23 mL belong to dishes from 100 to 200 cm², below 12 mL to dishes under 100 cm², and above 47 mL to dishes larger than 400 cm².`
          },
          {
            question: `A 400 cm² dish was placed in front of the fan on the high setting under the same conditions. Based on both experiments, the water lost would most likely be:`,
            options: [
              `less than 27 mL`,
              `exactly 27 mL`,
              `exactly 47 mL`,
              `more than 47 mL`
            ],
            correctAnswer: 3,
            explanation: `A 400 cm² dish lost 47 mL with no fan, and Experiment 2 shows that the high fan setting raised water loss well above the no-fan value, so the combined loss should exceed 47 mL. Exactly 47 mL ignores the fan. 27 mL was measured with a much smaller 100 cm² dish, so a value at or below 27 mL ignores the larger surface.`
          },
          {
            question: `Which conclusion is best supported by Experiment 1?`,
            options: [
              `Doubling the surface area roughly doubled the volume of water lost`,
              `Water lost stayed nearly the same at every surface area`,
              `Larger dishes lost less water than the smaller dishes did`,
              `Surface area matters more than fan speed for evaporation`
            ],
            correctAnswer: 0,
            explanation: `Each doubling of surface area (50 to 100 to 200 to 400 cm²) roughly doubled the loss (6 to 12 to 23 to 47 mL). The losses clearly changed, so they did not stay the same, and larger dishes lost more, not less. Experiment 1 never varied fan speed, so it cannot compare the two factors.`
          },
          {
            question: `The students next want to test whether dissolving salt in the water affects evaporation. Which design would best test this?`,
            options: [
              `Dishes of different sizes, each with a different amount of salt, all with no fan`,
              `Identical 100 cm² dishes with different amounts of salt, same room, no fan`,
              `Identical 100 cm² dishes with the same amount of salt, at different fan speeds`,
              `Identical dishes with different amounts of salt, some in sun and some in shade`
            ],
            correctAnswer: 1,
            explanation: `Changing only the amount of salt while keeping the dishes, the room, and the fan the same means any difference in water lost can be traced to salt. Varying dish size or sun and shade along with salt adds factors that could explain the results instead. Keeping the salt the same while changing fan speed never varies the factor being tested.`
          }
        ]
      }
    },
    {
      id: 'act-s7-mcq3',
      type: 'multiple-choice' as const,
      content: `
**Passage III (Conflicting Viewpoints)** ⚖️

*Suggested time: 4 minutes for 4 questions.*

> **Introduction:** Smooth, rounded pebbles of granite are found on top of Harlow Ridge, a hill 150 m above the nearest river. The nearest granite bedrock is 40 km to the north. Two geologists explain how the pebbles got there.
>
> **Geologist 1:** An ancient river once flowed across this area from the north, before the land was pushed upward. The river carried the granite south and rounded the pebbles by tumbling them along its bed. River deposits form a long, narrow band, and the pebbles in them are sorted into layers by size.
>
> **Geologist 2:** A glacier moving south carried the granite here. Meltwater streams flowing beneath and in front of the ice rounded the pebbles. Glacial deposits are spread over a wide area, mix pebbles with large boulders in no particular order, and often carry parallel scratches made as the ice dragged them over bedrock.
      `,
      exercise: {
        questions: [
          {
            question: `The two geologists would most likely agree that the pebbles:`,
            options: [
              `were moved by a glacier`,
              `were rounded by moving water`,
              `were left by a river flowing south`,
              `were lifted when the land was uplifted`
            ],
            correctAnswer: 1,
            explanation: `Geologist 1 credits a river's tumbling, and Geologist 2 credits meltwater streams, so both say moving water rounded the pebbles. A glacier appears only in Geologist 2's account. An ancient river and the uplift of the land appear only in Geologist 1's account.`
          },
          {
            question: `Which finding would support Geologist 2's view but NOT Geologist 1's view?`,
            options: [
              `The pebbles are made of granite that matches bedrock found to the north`,
              `Pebbles lie spread widely among large, scratched boulders`,
              `The pebbles are found in a long, narrow band sorted into layers by size`,
              `The pebbles are smooth and rounded rather than sharp and broken`
            ],
            correctAnswer: 1,
            explanation: `A wide spread of pebbles mixed with large, scratched boulders matches Geologist 2's description of glacial deposits and does not fit the narrow, sorted band Geologist 1 expects from a river. Granite from the north and smooth, rounded shapes fit both views, since both move the rock south and round it with water. A narrow, sorted band supports Geologist 1 instead.`
          },
          {
            question: `Which discovery would most weaken Geologist 2's view?`,
            options: [
              `Evidence that ice sheets never covered this region at any time`,
              `Evidence that the granite pebbles came from bedrock to the north`,
              `Evidence that water once flowed in streams across Harlow Ridge`,
              `Evidence that the pebbles were rounded by tumbling in water`
            ],
            correctAnswer: 0,
            explanation: `Geologist 2's explanation requires a glacier to have carried the granite south, so evidence that ice never reached the region removes the mechanism entirely. A northern source, streams of flowing water, and rounding by tumbling are all parts of Geologist 2's account as well as Geologist 1's, so none of them weakens it.`
          },
          {
            question: `A third geologist suggests that people carried the pebbles to the ridge to build walls. Which finding would be consistent with Geologists 1 and 2 but NOT with this third view?`,
            options: [
              `Pebbles near the ridge top lie in old stone walls`,
              `Pebbles are buried beneath 3 m of undisturbed ancient soil`,
              `Pebbles are found only within the walls of an old farm`,
              `Pebbles show marks left by stone-working tools`
            ],
            correctAnswer: 1,
            explanation: `Pebbles buried under 3 m of undisturbed ancient soil were in place long before any people could have moved them, which fits both natural explanations and contradicts the idea that people carried them. Pebbles in walls, pebbles found only inside a farm's walls, and tool marks all point toward human handling, which supports the third view rather than ruling it out.`
          }
        ]
      }
    },
    {
      id: 'act-s7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Pacing Check

> At minute 20 of the Science section, a student has finished 15 questions. She is halfway through a Conflicting Viewpoints passage, and the passage after it is a short data-representation passage.

**Question:** Is she on pace, and what should she do?

<details>
<summary><b>Show answer</b></summary>

**She is about 5 questions behind** the checkpoint of roughly 20 questions by minute 20. She should finish the current passage briskly, guessing and marking any question that takes more than about a minute, then move on to the data-representation passage, where lookup and trend questions go quickly. She should not leave blanks: if she runs short at the end, a guess on every remaining question costs nothing.
</details>
      `
    },
    {
      id: 'act-s7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Enhanced ACT Science: **optional**, **40 questions in 40 minutes**, **4 choices**, not in the composite, no guessing penalty.
- Identify the format fast: **data representation**, **research summary**, or **conflicting viewpoints**, and expect its typical questions.
- A fair test changes **one** variable, holds the rest **constant**, includes a **control**, **repeats** trials, and **randomly assigns** living subjects when testing a cause.
- Use checkpoints (about 10 questions per 10 minutes), guess and mark when stuck, and answer **every** question.
- Name the question type first; the same few skills solve every topic.
      `
    }
  ]
}
