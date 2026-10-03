export const actReadSciTipsPart7Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Applications

**Part 7 of 7 — Putting It Together: A Natural-Science Reading Passage and a Science Research Summary**

This part puts every skill from Parts 1–6 to work on two full-length practice sets: a natural-science Reading passage (36-question test, about 10 minutes per passage) and a Science Research Summary (optional test, 40 questions in 40 minutes). First, a review of the moves that matter most.

## Decision Guide: Question Type → First Move

| If the question asks ... | Your first move | Part |
|---|---|---|
| What a term means "as used in the passage" | Find the definition or contrast in that sentence | 1 |
| Why something happens | Trace the cause-effect chain; watch for reversals | 1 |
| How the author regards a finding | Find the evaluative words and hedges | 1, 4 |
| What a figure shows at one value | Look up the row; check the column and units | 2 |
| Which change was largest | Compute every difference; size ignores direction | 2 |
| What was changed, measured, or kept the same | Build the changed / measured / same table | 3 |
| Which result supports or contradicts a hypothesis | State the prediction, then test each choice | 3 |
| What two viewpoints share or dispute | Introduction = shared; one-line summary of each view | 4 |
| A value from two figures together | Find the shared variable and carry it across | 4 |
| A value between or beyond the data | Interpolate between rows; extrapolate by the rule | 6 |
| Which conclusion is best supported | Eliminate overclaims, causation-from-correlation, wrong units | 6 |

## Reading a Natural-Science Passage: The Routine

1. **First read (3–4 minutes):** label each paragraph's role (phenomenon, puzzle, method, result, interpretation, caveat). Note each technical term with a short label.
2. **Notice the author's voice:** words such as *remarkable*, *tempting*, *premature*, or *remains unclear* will answer attitude questions.
3. **Answer from the map:** go back to the paragraph a question points to and reread only the sentences you need.
4. **Match the hedges:** if the passage says *may* or *in laboratory trials*, the right answer keeps that limit.

## Reading a Research Summary: The Routine

1. **Read the purpose sentence and each experiment's setup** quickly, and build the changed / measured / same table for each experiment.
2. **Scan each table:** title, columns, units, trend.
3. **Look for a shared trial.** When two experiments share a condition (same salinity and same temperature), that trial is your **baseline** for comparing the two factors, and its results should match across experiments.
4. **Answer, pointing at a row** for every choice you select.

## Final Score-Building Checklist

- **Reading pace:** checkpoints at about 10, 20, and 30 minutes.
- **Science pace:** (40 − reserve) ÷ number of passages, checkpoint after each passage.
- **No blanks:** cap, guess, mark, move on, return.
- **After each practice test:** error log, count by category, fix the biggest leak first.
- **Two habits for both tests:** point to evidence for every answer, and never let a choice claim more than the passage or data do.
      `
    },
    {
      id: 'act-rsci-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Question, Every Skill

<details>
<summary><b>Example: Linking two experiments through a shared trial</b></summary>

**Setup:** In Experiment 1, students measured how far a paper airplane flew with wings of 10, 15, and 20 cm at a launch angle of 10°: 6.2 m, 8.0 m, and 7.1 m. In Experiment 2, they kept the wings at 15 cm and changed the launch angle to 5°, 10°, and 15°: 7.4 m, 8.0 m, and 6.5 m.

**Question:** Starting from the 15 cm, 10° design, which single change shortened the flight more: switching to 20 cm wings, or raising the angle to 15°?

**Solution:**
1. **Find the shared trial.** 15 cm at 10° appears in both experiments, and both report 8.0 m. That is the baseline.
2. **Change one factor at a time from the baseline.** Wings to 20 cm: 8.0 → 7.1 m, a drop of 0.9 m. Angle to 15°: 8.0 → 6.5 m, a drop of 1.5 m.
3. **Compare:** raising the angle shortened the flight more.
4. **Trap check:** the longest flight in either experiment (8.0 m) is not the question. And the data cannot predict a 20 cm, 15° airplane, because no trial changed both factors.
</details>
      `
    },
    {
      id: 'act-rsci-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Natural-Science Reading Passage** 🎯

Give yourself about 6 minutes for the passage and five questions.

> **(1)** Each winter in the northern forests of North America, the wood frog does something that would kill most animals: it freezes. Ice forms beneath its skin and around its organs, its heart stops, and it stops breathing. Yet when the ground thaws in spring, the frog's heart starts beating again and within a day the animal hops away.
>
> **(2)** The key is where the ice forms. Ice crystals that grow *inside* cells puncture their delicate membranes, and cells damaged this way do not recover. The wood frog survives because ice forms in the spaces *between* its cells, while the cells themselves stay liquid. As ice begins to form on the frog's skin, its liver rapidly breaks down stored glycogen, a starch-like fuel, into glucose and floods the blood with it. The glucose acts as a *cryoprotectant*, a substance that keeps the fluid inside cells from freezing by lowering its freezing point and limiting how much water the cells lose.
>
> **(3)** In laboratory trials, researchers have found that the speed of freezing matters. Frogs cooled slowly, over many hours, built up far more glucose in their tissues than frogs cooled quickly, and slowly cooled frogs were much more likely to revive. The likely explanation is simple: the liver needs time to release enough glucose before ice spreads inward.
>
> **(4)** Some medical researchers hope that the frog's chemistry might one day help preserve human organs for transplant, which currently survive only hours outside the body. The idea is appealing, but it is far from realized. A frog's tissues have evolved over many generations to tolerate freezing; a human kidney has not, and adding glucose alone has not been shown to protect it. For now, the wood frog is less a recipe than a reminder that the line between frozen and alive is not where we once drew it.
      `,
      exercise: {
        questions: [
          {
            question: `The main purpose of the passage is to:`,
            options: [
              `explain how the wood frog survives being frozen`,
              `argue that frogs should be studied more than mammals`,
              `describe a medical method for storing human organs`,
              `compare the wood frog with other northern animals`
            ],
            correctAnswer: 0,
            explanation: `Paragraphs 1–3 describe the frog's freezing and explain how it survives, and Paragraph 4 considers a possible use of that knowledge. The passage never ranks frogs against mammals. It says organ preservation using frog chemistry is "far from realized," so no working method is described, and no other northern animals are discussed.`
          },
          {
            question: `As it is used in the passage, a *cryoprotectant* is best described as a substance that:`,
            options: [
              `causes ice to form faster around the frog's organs`,
              `helps keep the fluid inside cells from freezing`,
              `restarts the frog's heart when spring arrives`,
              `converts glucose back into glycogen in the liver`
            ],
            correctAnswer: 1,
            explanation: `The passage defines the term right after it: a substance that "keeps the fluid inside cells from freezing by lowering its freezing point." It slows freezing inside cells rather than speeding ice formation. The heart restarting is described in Paragraph 1 without any cause, and the liver breaks glycogen down into glucose, not the reverse.`
          },
          {
            question: `According to the passage, slowly cooled frogs were more likely to revive because:`,
            options: [
              `slow cooling stops ice from forming anywhere in the body`,
              `their hearts keep beating throughout the frozen period`,
              `the liver had more time to release protective glucose`,
              `cold temperatures turn stored glucose into glycogen`
            ],
            correctAnswer: 2,
            explanation: `Paragraph 3 says slowly cooled frogs built up more glucose and explains that "the liver needs time to release enough glucose before ice spreads inward." Ice still forms between cells in surviving frogs, so slow cooling does not prevent ice entirely. Paragraph 1 says the heart stops, and the liver turns glycogen into glucose, not glucose into glycogen.`
          },
          {
            question: `The author's attitude toward using the frog's chemistry to preserve human organs is best described as:`,
            options: [
              `enthusiastic, since glucose has already protected human kidneys`,
              `dismissive, since frogs and humans share no body chemistry`,
              `indifferent, since the passage focuses on frogs rather than people`,
              `interested but cautious, since the idea is far from realized`
            ],
            correctAnswer: 3,
            explanation: `The author calls the idea "appealing" but "far from realized" and notes that glucose alone "has not been shown" to protect a human kidney, which is interest tempered by caution. That same sentence contradicts the claim that glucose has already protected kidneys. The author never says humans and frogs share no chemistry, and devoting a paragraph to the idea shows it is not treated with indifference.`
          },
          {
            question: `In the final sentence, the phrase "less a recipe than a reminder" mainly suggests that the wood frog:`,
            options: [
              `offers no exact method for people but changes how we see freezing`,
              `provides a step-by-step method for preserving human organs`,
              `is no longer of interest to scientists who study freezing`,
              `reminds researchers to use more glucose in their trials`
            ],
            correctAnswer: 0,
            explanation: `A "recipe" would be a method to copy; a "reminder" changes our thinking, here that "the line between frozen and alive is not where we once drew it." So the frog offers insight, not instructions. The step-by-step reading reverses the phrase, the author clearly still finds the frog interesting, and nothing tells researchers to use more glucose.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**First Move Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Based on Tables 1 and 2, the value at 21:00 was most likely ..." Your first move is to …',
            options: ['find the shared variable linking the tables', 'average every number in both tables', 'use the largest value in Table 2', 'reread the introduction twice']
          },
          {
            label: '"Which finding would weaken Scientist 1 but NOT Scientist 2?" Your first move is to …',
            options: ['pick the most technical choice', 'write a one-line summary of each view', 'find the longest answer choice', 'decide which scientist you agree with']
          },
          {
            label: '"The author regards the new findings as ..." Your first move is to …',
            options: ['recall what you know about the topic', 'choose the most positive option', 'find the evaluative words and hedges', 'reread only the first paragraph']
          }
        ],
        correctAnswers: ['find the shared variable linking the tables', 'write a one-line summary of each view', 'find the evaluative words and hedges'],
        hint1: 'Two tables are connected by a variable they both contain.',
        hint2: 'You cannot test a finding against a view until you know what each view claims.',
        hint3: 'Attitude lives in word choice such as "appealing," "premature," or "may."',
        explanation: 'Two-figure questions start with the shared variable. Viewpoint questions start with a one-line summary of each view. Attitude questions start with the author\'s evaluative words and hedges, not outside knowledge or a default positive tone.'
      }
    },
    {
      id: 'act-rsci-p7-actpractice',
      type: 'text' as const,
      content: `
## Practice Set 2: Science Research Summary

Give yourself about 5 minutes for this passage and the five questions that follow.

Students studied how water conditions affect the hatching of brine shrimp eggs.

**Experiment 1:** Five dishes each received 200 eggs in salt water of a different salinity. All dishes were kept at 25 °C under the same light. After 48 hours, the students counted the hatched shrimp and calculated the percent hatched.

| Salinity (g/L) | Percent hatched |
|---|---|
| 10 | 42 |
| 20 | 71 |
| 30 | 88 |
| 40 | 80 |
| 50 | 55 |

**Experiment 2:** Four dishes each received 200 eggs in salt water at 30 g/L. The dishes were kept at different temperatures under the same light. After 48 hours, the students calculated the percent hatched and also recorded how many hours passed before the first shrimp hatched.

| Temperature (°C) | Percent hatched | Hours to first hatch |
|---|---|---|
| 15 | 20 | 40 |
| 20 | 54 | 30 |
| 25 | 88 | 22 |
| 30 | 91 | 18 |

**Before you answer:** build the table for each experiment. Experiment 1 changes salinity, measures percent hatched, and keeps temperature (25 °C), light, egg count, and time the same. Experiment 2 changes temperature and keeps salinity at 30 g/L. **The shared trial** is 30 g/L at 25 °C, and both experiments report 88% for it.
      `
    },
    {
      id: 'act-rsci-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions on the Brine Shrimp Study** 📋
      `,
      exercise: {
        questions: [
          {
            question: `In Experiment 1, which factor was held constant?`,
            options: [
              `The temperature of the dishes`,
              `The salinity of the water`,
              `The percent of eggs hatched`,
              `The number of shrimp that hatched`
            ],
            correctAnswer: 0,
            explanation: `Every dish in Experiment 1 was kept at 25 °C, so temperature was held constant. Salinity was the factor deliberately changed, and the percent hatched and number of hatched shrimp were the results measured.`
          },
          {
            question: `Which statement about Experiment 1 is best supported?`,
            options: [
              `Hatching rose steadily as the salinity increased`,
              `Hatching peaked at 30 g/L of the levels tested`,
              `Salinity had very little effect on the hatching`,
              `The highest salinity tested gave the most hatching`
            ],
            correctAnswer: 1,
            explanation: `Percent hatched rises to 88 at 30 g/L and then falls to 80 and 55, so 30 g/L was the best of the salinities tested. The drop after 30 g/L rules out a steady rise and makes 50 g/L one of the worst levels, not the best. A range from 42% to 88% is a large effect.`
          },
          {
            question: `If a dish at 35 g/L had been included in Experiment 1, its percent hatched would most likely have been:`,
            options: [
              `below 55%`,
              `between 55% and 71%`,
              `between 80% and 88%`,
              `above 91%`
            ],
            correctAnswer: 2,
            explanation: `35 g/L lies between 30 g/L (88%) and 40 g/L (80%), so its result should fall between those values. The range from 55% to 71% matches the edges of the table, not the neighbors of 35 g/L. Values below 55% or above 91% would break the pattern, and 91% comes from Experiment 2, not Experiment 1.`
          },
          {
            question: `How many eggs hatched in the 20 g/L dish of Experiment 1?`,
            options: [`71`, `129`, `142`, `200`],
            correctAnswer: 2,
            explanation: `Each dish held 200 eggs, and 71% of 200 is 0.71 × 200 = 142. The value 71 reads the percent as a count, 129 is the number that did NOT hatch (200 − 71), and 200 is the total number of eggs placed in the dish.`
          },
          {
            question: `Starting from 30 g/L at 25 °C, a student claims that raising the temperature to 30 °C increased hatching, while raising the salinity to 40 g/L decreased it. Is the claim supported?`,
            options: [
              `No; both changes increased hatching above the 88% baseline`,
              `No; the two experiments never shared any trial conditions`,
              `Yes; Experiment 2's warmest dish had the highest percent overall`,
              `Yes; the warmer dish rose to 91% and the saltier dish fell to 80%`
            ],
            correctAnswer: 3,
            explanation: `The shared baseline is 30 g/L at 25 °C (88%). Changing only temperature to 30 °C gives 91%, an increase; changing only salinity to 40 g/L gives 80%, a decrease, so the claim holds. The salinity change lowered hatching, so "both increased" is wrong. The experiments do share a trial, and simply noting the highest percent overall does not address the salinity half of the claim.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Natural-science Reading:** map paragraph roles, read terms in context, follow cause and effect, and match the author's hedges and attitude.
- **Science Research Summaries:** build the changed / measured / same table for every experiment before answering.
- **Shared trials are baselines.** Compare each factor by changing it alone from the shared condition.
- **Peaks and limits:** say "among the levels tested," and interpolate between neighboring rows.
- **Percent of a group:** percent × total. Watch for the complement trap (the number that did not hatch).
- **Every answer needs a pointer:** a sentence, a row, or a data point. If you cannot point to it, eliminate it.
- **Keep the cycle going:** timed practice → error log → fix the biggest leak → timed practice.
      `
    }
  ]
};
