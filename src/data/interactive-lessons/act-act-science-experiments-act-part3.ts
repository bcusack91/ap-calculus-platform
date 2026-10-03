export const actScienceExpPart3Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# 📑 Research Summaries

**Part 3 of 7 — Reading a Multi-Experiment Passage**

A Research Summaries passage describes a short research project, usually as **two or three experiments** that share a goal. Each experiment has a short procedure and a table or graph of results. The experiments are built to differ in a specific way, and many questions test whether you noticed **how**.

## The usual layout

| Piece | What it tells you | What to mark |
|---|---|---|
| Introduction | The question the researchers are investigating and any background | The overall goal in a few words |
| Experiment 1 | Full procedure and results | IV, DV, constants |
| Experiment 2 | Often "the procedure of Experiment 1 was repeated **except**…" | Exactly what changed |
| Experiment 3 | Another "except" change, or a new test | Exactly what changed |
| Tables / figures | The results | Units and the column headings |

## The "except" sentence is the key to the passage

Later experiments are usually described by how they differ from Experiment 1:

> "Experiment 2: The procedure of Experiment 1 was repeated, except that every tray was kept at 25 °C and the volume of water was varied."

That one sentence tells you three things:
1. The new IV is **water volume**.
2. Temperature, which was the IV in Experiment 1, is now a **constant** (25 °C).
3. Everything else from Experiment 1 (seed type, light, number of seeds) is still the same.

Write the change in the margin next to each experiment, for example "E2: water varies, T = 25". Questions such as "How did Experiment 2 differ from Experiment 1?" become one-glance answers.

## Common Research Summaries question types

| Question type | Example stem | How to answer |
|---|---|---|
| Design comparison | "Which variable was held constant in Experiment 2 but varied in Experiment 1?" | Read your margin notes |
| Locate data | "Which condition produced the highest rate?" | Scan every table, not just one; compare units |
| Hypothesis check | "Do the results of Experiment 2 support the hypothesis that…?" | Find the experiment that varies the variable in the hypothesis, then check the whole trend |
| Which experiment? | "In which experiment was the amount of enzyme the IV?" | Match the variable to the experiment that changed it |
| Predict a new trial | "If the procedure were repeated at 35 °C, the result would most likely be…" | Locate the two neighboring tested values and stay between them |
| Purpose of a step | "Why did the researchers rinse each tube?" | Think about what would go wrong without the step (usually: contamination or an unfair comparison) |

## Use the right experiment

A hypothesis about **water** can only be judged with the experiment that varied water. Data from the temperature experiment says nothing about water, even if the numbers look relevant. Wrong answers often quote a true fact from the wrong experiment.

Also check the **whole range**. If germination rises from 5 mL to 10 mL of water and then falls from 10 mL to 20 mL, the hypothesis "germination increases steadily with more water" is **not** supported, even though part of the data goes up.

## The shared condition links experiments

When Experiment 2 holds temperature at the value that worked best in Experiment 1, one trial in Experiment 2 repeats a trial from Experiment 1. The two should give about the same result, and they act as a built-in **consistency check**. They also let you connect the two tables: the 25 °C, 10 mL condition appears in both.

## Preview: combining two experiments

Sometimes each experiment varies a different factor, and a question asks about a condition that combines them. Example:

| Experiment 1 (1 bulb) | | Experiment 2 (sensor at 1 m) | |
|---|---|---|---|
| Distance (m) | Light reading | Number of bulbs | Light reading |
| 1 | 400 | 1 | 400 |
| 2 | 100 | 2 | 800 |
| 4 | 25 | 3 | 1,200 |

Prediction for **2 bulbs at 2 m:** Experiment 1 says moving from 1 m to 2 m divides the reading by 4 (400 → 100). Experiment 2 says doubling the bulbs doubles the reading. So 2 bulbs at 2 m ≈ 100 × 2 = **200**. Start from a tested value that matches one factor, then apply the effect of the other factor. Part 6 practices this in depth.
      `
    },
    {
      id: 'act-s3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: What changed between the experiments?</b></summary>

**Passage summary:** In Experiment 1, a student dropped one rubber ball from heights of 0.5, 1.0, and 1.5 m and measured how high it bounced. In Experiment 2, she dropped balls made of rubber, plastic, and foam, all with the same diameter, from 1.0 m.

**Question:** Which variable was tested in Experiment 2, and which variable from Experiment 1 became a constant?

**Solution:** Experiment 2 changed the **ball material** (new IV). Drop height, the IV of Experiment 1, was fixed at **1.0 m** (now a constant). Bounce height was the DV in both experiments, and ball diameter was held the same.
</details>

<details>
<summary><b>Example 2: Testing a hypothesis with the right table</b></summary>

**Data:** Experiment 1 (all trays given 10 mL of water per day): 15 °C → 40%, 20 °C → 65%, 25 °C → 85%, 30 °C → 70% germination. Experiment 2 (all trays at 25 °C): 5 mL → 50%, 10 mL → 85%, 15 mL → 80%, 20 mL → 45%.

**Question:** Do the results support the hypothesis that germination increases steadily as more water is supplied?

**Solution:**
1. Water is varied only in **Experiment 2**, so use that table.
2. Germination rises from 50% to 85% (5 → 10 mL) but then falls to 80% and 45%.
3. A steady increase is **not** supported. The highest germination in either table, 85%, is the shared condition: 25 °C with 10 mL per day.
</details>
      `
    },
    {
      id: 'act-s3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set A — The Enzyme Study** 🎯

Catalase, an enzyme found in potatoes, breaks down hydrogen peroxide and releases oxygen gas. In every trial, potato extract was added to 10 mL of 3% hydrogen peroxide, and the oxygen released in 60 seconds was collected.

**Experiment 1:** 2 mL of extract was used at pH 7, and the temperature was varied.

| Temperature (°C) | Oxygen (mL) |
|---|---|
| 10 | 8 |
| 20 | 15 |
| 30 | 24 |
| 40 | 19 |
| 50 | 6 |

**Experiment 2:** The procedure of Experiment 1 was repeated, except that the temperature was kept at 30 °C and the pH was varied.

| pH | Oxygen (mL) |
|---|---|
| 5 | 9 |
| 6 | 17 |
| 7 | 24 |
| 8 | 20 |
| 9 | 11 |

**Experiment 3:** The temperature was kept at 30 °C and the pH at 7, and the volume of extract was varied.

| Extract (mL) | Oxygen (mL) |
|---|---|
| 1 | 12 |
| 2 | 24 |
| 4 | 47 |
      `,
      exercise: {
        questions: [
          {
            question: `How did the procedure of Experiment 2 differ from that of Experiment 1?`,
            options: [
              `Temperature was varied while pH was held at 7`,
              `pH was varied while temperature was held at 30 °C`,
              `Extract volume was varied while pH was held at 7`,
              `Both pH and temperature were varied`
            ],
            correctAnswer: 1,
            explanation: `The "except" sentence says Experiment 2 held the temperature at 30 °C and varied the pH, the reverse of Experiment 1. Varying temperature at pH 7 describes Experiment 1 itself, and varying extract volume describes Experiment 3. No experiment changed two variables at once.`
          },
          {
            question: `Of all the conditions tested, which produced the most oxygen in 60 seconds?`,
            options: [
              `40 °C, pH 7, 2 mL of extract`,
              `30 °C, pH 8, 2 mL of extract`,
              `30 °C, pH 7, 2 mL of extract`,
              `30 °C, pH 7, 4 mL of extract`
            ],
            correctAnswer: 3,
            explanation: `Scanning all three tables, the largest value is 47 mL, from Experiment 3 with 4 mL of extract at 30 °C and pH 7. The 30 °C, pH 7, 2 mL condition gave 24 mL, the best value in Experiments 1 and 2 but not overall. The 40 °C trial gave 19 mL and the pH 8 trial gave 20 mL.`
          },
          {
            question: `A student hypothesizes that oxygen production increases steadily as temperature rises from 10 °C to 50 °C. Do the results support this hypothesis?`,
            options: [
              `Yes; oxygen rose from 8 mL to 24 mL between 10 °C and 30 °C`,
              `No; oxygen fell from 24 mL to 6 mL between 30 °C and 50 °C`,
              `Yes; doubling the extract roughly doubled the oxygen produced`,
              `No; oxygen fell from 24 mL to 9 mL as pH dropped from 7 to 5`
            ],
            correctAnswer: 1,
            explanation: `Experiment 1 is the one that varies temperature, and its oxygen volume dropped after 30 °C, so a steady increase is contradicted. The rise from 10 to 30 °C is real but covers only part of the range. The extract results (Experiment 3) and the pH results (Experiment 2) are true facts, but they come from experiments that held temperature constant, so they cannot test this hypothesis.`
          },
          {
            question: `In which experiment or experiments was the amount of enzyme the independent variable?`,
            options: [`Experiment 1 only`, `Experiment 2 only`, `Experiment 3 only`, `Experiments 1 and 3`],
            correctAnswer: 2,
            explanation: `Only Experiment 3 changed the extract volume (1, 2, and 4 mL), and the extract is the source of the enzyme. Experiments 1 and 2 both used 2 mL of extract in every trial, so in those experiments the amount of enzyme was a constant, while temperature and pH were the IVs.`
          }
        ]
      }
    },
    {
      id: 'act-s3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set B — Using the Enzyme Study** 📋

Use the three experiments from Practice Set A.
      `,
      exercise: {
        questions: [
          {
            question: `Which variable was held constant in all three experiments?`,
            options: [
              `The temperature of the mixture`,
              `The pH of the mixture`,
              `The volume of potato extract`,
              `The peroxide volume`
            ],
            correctAnswer: 3,
            explanation: `Every trial used 10 mL of 3% hydrogen peroxide, so that volume never changed. Temperature was varied in Experiment 1, pH was varied in Experiment 2, and the extract volume was varied in Experiment 3, so each of those was the IV somewhere in the study.`
          },
          {
            question: `The condition 30 °C, pH 7, 2 mL of extract appears in all three experiments, and each time it produced 24 mL of oxygen. What does this most strongly suggest?`,
            options: [
              `The results were consistent across separate experiments`,
              `Temperature has no effect on the activity of catalase`,
              `24 mL is the most oxygen that catalase can produce`,
              `The pH was accidentally changed during Experiment 1`
            ],
            correctAnswer: 0,
            explanation: `Repeating the same condition in different experiments and getting the same value shows that the measurements were reproducible. Experiment 1 clearly shows temperature matters, since oxygen ranged from 6 to 24 mL. Experiment 3 produced 47 mL, so 24 mL is not a maximum, and matching values point to consistent conditions, not an accidental change.`
          },
          {
            question: `If Experiment 3 had included a trial with 3 mL of extract, the oxygen collected would most likely have been closest to:`,
            options: [`18 mL`, `35 mL`, `47 mL`, `58 mL`],
            correctAnswer: 1,
            explanation: `Oxygen rose from 24 mL at 2 mL of extract to 47 mL at 4 mL, so 3 mL of extract falls between those trials, near 35 mL. A value of 18 mL is less than the 2 mL trial produced, even though 3 mL is more extract. A value of 47 mL is what the full 4 mL produced, and 58 mL is more than even 4 mL produced.`
          },
          {
            question: `Based on Experiments 2 and 3, a trial at 30 °C and pH 8 using 4 mL of extract would most likely produce about how much oxygen?`,
            options: [`10 mL`, `20 mL`, `40 mL`, `80 mL`],
            correctAnswer: 2,
            explanation: `Experiment 2 gives 20 mL at pH 8 with 2 mL of extract, and Experiment 3 shows that doubling the extract roughly doubles the oxygen (24 to 47 mL), so 4 mL at pH 8 gives about 40 mL. A value of 20 mL ignores the extra extract, 10 mL halves instead of doubling, and 80 mL doubles twice.`
          }
        ]
      }
    },
    {
      id: 'act-s3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage summary:** Experiment 1 measured the resistance of 1 m copper wires of diameter 0.5, 1.0, and 2.0 mm: 0.088, 0.022, and 0.0055 ohms. Experiment 2 measured 1.0 mm wires of length 1, 2, and 4 m: 0.022, 0.044, and 0.088 ohms.

**Question:** Estimate the resistance of a 2 m wire with a 2.0 mm diameter.

<details>
<summary><b>Answer</b></summary>

Start from Experiment 1: a 1 m, 2.0 mm wire has 0.0055 ohms. Experiment 2 shows that doubling the length doubles the resistance. So a 2 m, 2.0 mm wire has about **0.011 ohms**. Using 0.044 ohms would be a mistake: that value is for a 2 m wire of the thinner 1.0 mm diameter.
</details>

**ACT Tip:** When a stem names a condition, find every table that contains part of it. The answer often requires one number from each.
      `
    },
    {
      id: 'act-s3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Research Summaries passages describe 2–3 related experiments; mark the IV, DV, and constants for each.
- The "repeated **except**…" sentence tells you the new IV and which old variable became a constant.
- Judge a hypothesis with the experiment that varied that variable, and check the entire trend, not just part of it.
- A condition repeated across experiments is a consistency check and the bridge between tables.
- To combine experiments, start from a tested value for one factor and apply the effect of the other.
      `
    }
  ]
}
