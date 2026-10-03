export const actScienceExpPart4Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Conflicting Viewpoints

**Part 4 of 7 — Comparing Competing Explanations**

A Conflicting Viewpoints passage gives a short background paragraph, then two or more explanations of the same observation from "Scientist 1 and Scientist 2", "Student 1, 2, and 3", or "Hypothesis 1 and Hypothesis 2". There may be little or no data. The questions test whether you can keep each viewpoint's claims straight and judge new evidence against them.

Research Summaries often use the same reasoning: two hypotheses are proposed, and an experiment is run to decide between them. So this skill shows up in both formats.

## Rule 1: Judge by the passage, not by what you think is true

The ACT does not ask which viewpoint is scientifically correct. It asks what each viewpoint **claims** and how evidence **relates** to those claims. A viewpoint you know to be outdated can still be "supported" by a particular finding in the question.

## Rule 2: Build a claim table as you read

After each viewpoint, write a few words in the margin. Then compare.

**Background:** A lake's water became much cloudier after 2018.

| Point | Scientist 1 | Scientist 2 |
|---|---|---|
| Cause of cloudiness | Algae | Stirred-up sediment |
| Source | Fertilizer runoff from new upstream farms | Invasive carp (introduced 2018) feeding on the lake bottom |
| Predicts cloudy water contains… | Mostly algae | Mostly sediment particles |
| Predicts fertilizer levels… | Rose after 2018 | No particular change needed |

Rows where the columns differ are **disagreements**. Facts both accept (the lake got cloudier after 2018) are **agreements**.

## Rule 3: Support and weaken questions

| Question stem | What you need |
|---|---|
| "Which finding would **support** Scientist 2?" | A finding Scientist 2's explanation predicts |
| "Which finding would support Scientist 2 **but not** Scientist 1?" | A finding that Scientist 2 predicts **and** Scientist 1 cannot explain or contradicts |
| "Which finding would **weaken** Scientist 1?" | A finding that contradicts a claim Scientist 1 made |
| "With which statement would **both** agree?" | A fact appearing in both explanations (often the shared observation) |

**The "but not" trap:** an observation both viewpoints already accept cannot separate them. If both scientists agree the lake is cloudier, "the lake is cloudier" supports neither one over the other. Look for the finding that touches a row where the table **differs**.

**Example:** "Fertilizer levels in the lake did not change after 2018." This contradicts Scientist 1's source and leaves Scientist 2 untouched, so it **weakens Scientist 1 but not Scientist 2**.

## Rule 4: Three or more viewpoints

With three viewpoints, a single finding can support two of them and weaken the third. Group the viewpoints by their key claim.

**Background:** A sealed, inflated balloon shrinks after an hour in a freezer.

| Student | Claim | Does air escape? |
|---|---|---|
| 1 | Cold makes the rubber porous, so air leaks out | Yes |
| 2 | Cold air pushes less on the rubber and takes up less space | No |
| 3 | Cold rubber contracts and squeezes the air | No |

If the balloon returns to its full size when warmed **without being refilled**, the air must still be inside, which weakens Student 1. Students 2 and 3 both survive, because both say no air escaped.

## Rule 5: "How would Scientist X explain…?"

These questions ask you to **apply** a viewpoint to a new situation. Use only that scientist's mechanism. If Scientist 2 says carp stir up sediment, then Scientist 2 would explain "the water cleared after the carp were removed" by saying less sediment was being stirred up.

## Reading strategy

1. Read the background for the shared observation.
2. Read Viewpoint 1 and write its claim in a few words; repeat for each viewpoint.
3. Note one key difference per pair of viewpoints.
4. For each question, find the row of your claim table that the finding touches.
      `
    },
    {
      id: 'act-s4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Support one viewpoint but not the other</b></summary>

**Viewpoints:** Student 1 says a wool sweater keeps you warm because the wool itself produces heat. Student 2 says the sweater produces no heat; it slows the loss of heat your body produces.

**Question:** Which finding would support Student 2 but not Student 1?
- A person wearing the sweater feels warmer than without it.
- A thermometer wrapped in the sweater, with no person inside, stays at room temperature.
- The sweater feels warm right after it is taken off.
- Wool sweaters are thicker than cotton shirts.

**Solution:** Both students agree that the sweater makes a person feel warmer, so that finding cannot separate them. If wool produced heat, a thermometer wrapped in it should warm up. The **thermometer staying at room temperature** contradicts Student 1 and fits Student 2. A sweater feeling warm after use fits both (it held body heat, or it made heat), and thickness is not part of either claim.
</details>

<details>
<summary><b>Example 2: A finding that sorts three viewpoints</b></summary>

**Viewpoints:** Three hypotheses explain why a lizard species is darker in the mountains than in the lowlands. H1: dark color absorbs more sunlight in cold air. H2: dark color hides lizards from predators on dark mountain rock. H3: color is set by diet, and mountain insects contain a darkening pigment.

**Finding:** Lowland lizards raised in the lab on mountain insects stayed light-colored.

**Solution:** H3 predicts that eating mountain insects darkens the lizards, so this finding **weakens H3**. H1 and H2 say nothing about diet, so the finding neither supports nor weakens them.
</details>
      `
    },
    {
      id: 'act-s4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set A — The Cloudy Lake** 🎯

The water in a lake became much cloudier after 2018.

**Scientist 1:** New farms upstream began draining fertilizer into the lake. The fertilizer fed rapid algae growth, and the algae clouded the water.

**Scientist 2:** An invasive carp species was introduced to the lake in 2018. The carp feed by rooting through the lake bottom, stirring up sediment that clouds the water.
      `,
      exercise: {
        questions: [
          {
            question: `With which statement would both scientists agree?`,
            options: [
              `Algae growth made the water cloudy`,
              `The lake got cloudier after 2018`,
              `Carp stirred up bottom sediment`,
              `Fertilizer entered the lake after 2018`
            ],
            correctAnswer: 1,
            explanation: `Both scientists start from the same observation, that the water became cloudier after 2018; they disagree only about the cause. Algae growth and fertilizer runoff are parts of Scientist 1's explanation that Scientist 2 does not use, and carp stirring up sediment is Scientist 2's mechanism, which Scientist 1 does not mention.`
          },
          {
            question: `Which finding would support Scientist 2's explanation but not Scientist 1's?`,
            options: [
              `The lake became cloudier after 2018`,
              `Algae counts in the lake doubled after 2018`,
              `Fertilizer levels in the lake rose in 2019`,
              `Samples were sediment, not algae`
            ],
            correctAnswer: 3,
            explanation: `Scientist 2 predicts that the cloudiness is sediment, and Scientist 1 predicts algae, so cloudy-water samples made of sediment rather than algae favor Scientist 2 and contradict Scientist 1. Rising algae counts and rising fertilizer levels fit Scientist 1 instead. Increased cloudiness is the shared observation, so it cannot separate the two.`
          },
          {
            question: `Which finding would weaken Scientist 1's explanation but not Scientist 2's?`,
            options: [
              `Fertilizer levels in the lake stayed the same after 2018`,
              `Carp were first caught in the lake in the summer of 2018`,
              `The lake bottom is covered with a fine, loose sediment`,
              `Algae grew faster in lake water with added fertilizer`
            ],
            correctAnswer: 0,
            explanation: `Scientist 1's explanation depends on fertilizer entering the lake after 2018, so unchanged fertilizer levels undercut it, and Scientist 2's carp explanation does not need fertilizer at all. Carp arriving in 2018 and a loose sediment bottom both support Scientist 2 without touching Scientist 1, and faster algae growth with fertilizer supports Scientist 1.`
          },
          {
            question: `Suppose the carp were removed from the lake in 2023, and the water was clear again by 2024, even though runoff from the farms continued. How does this finding affect the two explanations?`,
            options: [
              `It supports Scientist 1 and weakens Scientist 2`,
              `It supports Scientist 2 and weakens Scientist 1`,
              `It supports both explanations to the same degree`,
              `It weakens both explanations to the same degree`
            ],
            correctAnswer: 1,
            explanation: `Removing the carp cleared the water, as Scientist 2 predicts, while the fertilizer that Scientist 1 blames kept flowing without clouding the lake. That pattern favors Scientist 2 and weakens Scientist 1, so it cannot support Scientist 1. Because the finding separates the two explanations, it cannot affect them equally in either direction.`
          }
        ]
      }
    },
    {
      id: 'act-s4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set B — The Candle in the Jar** 📋

A lit candle is placed in a dish, and a glass jar is lowered over it. After several seconds the flame goes out. Air normally contains about 21% oxygen.

**Student 1:** The flame burns until it has used up all of the oxygen in the jar.

**Student 2:** The flame uses up only part of the oxygen. It goes out once the oxygen level falls below the minimum a flame needs.

**Student 3:** The amount of oxygen does not matter. Carbon dioxide from the flame builds up and smothers it.
      `,
      exercise: {
        questions: [
          {
            question: `An oxygen sensor inside the jar reads 15% oxygen at the moment the flame goes out. Which student's explanation is most directly weakened?`,
            options: [`Student 1`, `Student 2`, `Student 3`, `Students 2 and 3`],
            correctAnswer: 0,
            explanation: `Student 1 claims all of the oxygen is used up, but 15% oxygen remains, which contradicts that claim. Student 2 expects some oxygen to remain, so the reading fits that explanation. Student 3 says oxygen does not matter, so a leftover oxygen level does not contradict that student either.`
          },
          {
            question: `Students 1 and 2 would most likely agree that:`,
            options: [
              `all of the oxygen in the jar is used up`,
              `a lack of oxygen puts out the flame`,
              `carbon dioxide buildup smothers the flame`,
              `the oxygen level has no effect on the flame`
            ],
            correctAnswer: 1,
            explanation: `Both students tie the flame going out to oxygen: Student 1 says all of it is gone, and Student 2 says too little remains. Using up all of the oxygen is Student 1's claim alone, which Student 2 rejects. Carbon dioxide smothering the flame, with oxygen having no effect, is Student 3's view, which neither of the first two students holds.`
          },
          {
            question: `A second jar was filled with air plus extra carbon dioxide before being lowered over a lit candle, and the flame burned just as long as in normal air. This result most weakens the explanation of:`,
            options: [`Student 1 only`, `Student 2 only`, `Student 3 only`, `Students 1 and 2`],
            correctAnswer: 2,
            explanation: `Student 3 says carbon dioxide buildup puts out the flame, so starting with extra carbon dioxide should have shortened the burn; it did not, which weakens Student 3. Students 1 and 2 explain the flame going out through oxygen, and the extra carbon dioxide did not change the oxygen story, so the result does not contradict either of them.`
          },
          {
            question: `Which observation would be consistent with all three students' explanations?`,
            options: [
              `Some oxygen is still left in the jar after the flame goes out`,
              `No oxygen at all is left in the jar after the flame goes out`,
              `The flame goes out within a short time after the jar is lowered`,
              `Extra carbon dioxide makes no difference to the flame`
            ],
            correctAnswer: 2,
            explanation: `All three students accept that the flame goes out soon after the jar is lowered; they disagree about why, so that observation fits every explanation. Leftover oxygen contradicts Student 1, a complete lack of oxygen contradicts Student 2's partial use, and carbon dioxide making no difference contradicts Student 3.`
          }
        ]
      }
    },
    {
      id: 'act-s4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Background:** A metal spoon and a wooden spoon have both sat in a 20 °C room for hours, yet the metal spoon feels colder.

- **Student 1:** The metal spoon is actually at a lower temperature than the wooden spoon.
- **Student 2:** Both spoons are at 20 °C; metal carries heat away from the hand faster, so it feels colder.

1. On what point do the students agree?
2. Which measurement would support Student 2 but not Student 1?

<details>
<summary><b>Answers</b></summary>

1. They agree that the metal spoon **feels** colder; they disagree about why.
2. A thermometer reading 20 °C on **both** spoons. Student 1 claims the temperatures differ, so equal readings contradict Student 1 and match Student 2.
</details>

**ACT Tip:** In Conflicting Viewpoints, wrong answers often restate the shared observation. If both viewpoints already accept a fact, it cannot support one over the other.
      `
    },
    {
      id: 'act-s4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Judge viewpoints by what they claim, not by which one you believe is true.
- Build a claim table: agreements are shared facts; disagreements are where the evidence can decide.
- "Supports X but not Y" needs a finding X predicts that Y cannot explain; a shared observation never works.
- A finding that contradicts one claim weakens only the viewpoints that make that claim.
- With three viewpoints, group them by their key claim; one finding can weaken one viewpoint and leave two standing.
      `
    }
  ]
}
