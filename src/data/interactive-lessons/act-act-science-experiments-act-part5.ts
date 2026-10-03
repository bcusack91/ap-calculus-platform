export const actScienceExpPart5Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s5-intro',
      type: 'text' as const,
      content: `
# 🧐 Evaluating Conclusions

**Part 5 of 7 — Does the Conclusion Follow from the Evidence?**

Many Research Summaries questions end with a claim: "A student concluded that…. Is this conclusion supported?" or "Which conclusion is best supported by the results?" To answer, compare the claim with **exactly what was tested**. A conclusion is supported only if the data show it, for the subjects and conditions that were actually studied.

## Five ways a conclusion goes wrong

| Problem | What it looks like | Example |
|---|---|---|
| **Wrong trend** | The claim describes a pattern the data do not show | "Growth rose with every increase in temperature" when growth peaked and then fell |
| **Overgeneralization** | The claim goes beyond the subjects or conditions tested | Fertilizer tested only on corn → "increases yield in all crops" |
| **Biased sample** | The subjects do not represent the group the claim is about | Surveying a 6 a.m. swim team to estimate how much all students in a city sleep |
| **Correlation treated as causation** | Two things rise together, so one is assumed to cause the other | Ice cream sales and drownings both rise in summer → "ice cream causes drowning" |
| **Extrapolation** | A prediction far outside the tested range is stated as certain | Rates measured from 10 to 30 °C → "the rate will certainly be 64 at 60 °C" |

## Read the whole trend

Data on the ACT often rise and then fall (or the reverse). Describe the pattern in pieces:

| Fertilizer (g) | Mean height (cm) |
|---|---|
| 0 | 12 |
| 5 | 18 |
| 10 | 23 |
| 15 | 22 |
| 20 | 17 |

- Supported: "Height increased up to 10 g, then decreased."
- Not supported: "Height increased with every added 5 g" (it fell after 10 g).
- Not supported: "More than 20 g would produce the tallest plants" (the trend is heading down).
- Check the extremes too: unfertilized plants (12 cm) were **shorter** than 20 g plants (17 cm).

## Stay inside the tested scope

A study of one bacterial strain says nothing certain about other strains. A shoe tested on 20 professional male marathoners aged 25 to 30 says nothing certain about every runner. The safest supported conclusion names what was actually tested: "The fertilizer increased yield **in the corn plants tested**."

Watch for the absolute words that signal overreach:

| Red-flag word | Why it is risky |
|---|---|
| all, every, always | Few studies test every case |
| proves, certain, definitely | One study supports; it rarely proves |
| causes (from survey or observational data) | Without a controlled comparison, a third factor may be responsible |
| exactly (for an untested value) | An untested value can only be estimated |

## Correlation, causation, and alternative explanations

When two variables change together in observational data (nobody assigned the conditions), ask: **Is there a third factor that could drive both?**

- Umbrella sales and traffic accidents both rise on certain days → **rain** causes both.
- Towns with more trees have lower summer temperatures → but if the tree-rich towns are also at **higher elevations**, elevation alone could explain the cooler temperatures.

A fact that offers such a third factor **weakens** a causal conclusion. A fact that keeps conditions the same across the comparison (every temperature recorded at noon) **strengthens** it.

## "Cannot be determined"

If a study held a variable constant, it cannot tell you how that variable affects the outcome. A plant study done entirely at 25 °C cannot show whether temperature matters. On the ACT, the answer to "Do the results show how temperature affects growth?" would be **no, because temperature was not varied**.

## How ACT answer choices are built

Conclusion questions often use a "Yes, because… / No, because…" format. Two steps:

1. Decide **yes or no** from the data.
2. Among the choices with the right yes/no, pick the reason that is **true and relevant**. A wrong choice often pairs the correct "No" with a true fact from the wrong experiment, or with a reason that does not address the claim.
      `
    },
    {
      id: 'act-s5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Extrapolation beyond the data</b></summary>

**Data:** A reaction ran at 2 mmol/min at 10 °C, 4 mmol/min at 20 °C, and 8 mmol/min at 30 °C. A researcher concluded that the rate is **certain** to be 64 mmol/min at 60 °C.

**Solution:**
1. Within the data, the rate doubles every 10 °C, so the pattern itself is real.
2. No trials were run above 30 °C. Many processes level off or reverse at high temperatures (an enzyme, for example, can stop working).
3. **Evaluation:** the conclusion goes beyond the data. A prediction at 60 °C could be an estimate, but not a certainty.
</details>

<details>
<summary><b>Example 2: Yes/No with the right reason</b></summary>

**Data:** Experiment 1 (magnet touching the clips): magnets of strength 1, 2, and 3 units lifted 5, 10, and 15 paper clips. Experiment 2 (strength 2 magnet): held 1, 2, and 3 cm from the clips, it lifted 10, 4, and 1 clips.

**Claim:** "The number of clips lifted depends only on magnet strength."

**Solution:** Experiment 2 held strength constant, yet the number of clips changed with distance. So the answer is **No, because the clips lifted also changed with distance.** "No, because the clips fell as strength rose" has the right yes/no but a false reason, since clips rose with strength.
</details>
      `
    },
    {
      id: 'act-s5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set A — The Trout Study** 🎯

A biologist raised young trout of one species in five tanks, each held at a different water temperature. All tanks received the same food ration, and each tank held 20 fish.

| Water temperature (°C) | Mean growth (g per week) |
|---|---|
| 8 | 3.1 |
| 12 | 5.4 |
| 16 | 6.8 |
| 20 | 6.1 |
| 24 | 2.9 |
      `,
      exercise: {
        questions: [
          {
            question: `Which conclusion is best supported by the data?`,
            options: [
              `Growth rose with every increase in water temperature`,
              `Growth was greatest at 24 °C, the warmest tank`,
              `Growth was the same in the 8 °C and 20 °C tanks`,
              `Growth rose up to 16 °C and then decreased again`
            ],
            correctAnswer: 3,
            explanation: `Mean growth climbed from 3.1 to a peak of 6.8 g per week at 16 °C, then fell to 6.1 and 2.9. It did not rise with every increase, since it dropped after 16 °C. The 24 °C tank actually had the lowest growth, and the 8 °C tank (3.1) grew about half as fast as the 20 °C tank (6.1).`
          },
          {
            question: `The biologist concluded that all freshwater fish grow fastest at 16 °C. Which is the best evaluation of this conclusion?`,
            options: [
              `It is supported, because growth peaked at 16 °C in this study`,
              `It is not supported, because growth at 16 °C was the lowest`,
              `It goes beyond the data, because only one species was tested`,
              `It is supported, because every tank received the same food`
            ],
            correctAnswer: 2,
            explanation: `The study tested one trout species, so a claim about all freshwater fish overgeneralizes; other species may grow best at different temperatures. The 16 °C peak is real but applies only to the fish tested. Growth at 16 °C was the highest, not the lowest, and an equal food ration makes the comparison fair without widening its scope to other species.`
          },
          {
            question: `The biologist predicts that trout kept at 30 °C will certainly grow exactly 1.0 g per week. Which statement best evaluates this prediction?`,
            options: [
              `It is reliable as an exact value, since growth fell steeply after 20 °C`,
              `It is not certain, because no tank was kept warmer than 24 °C`,
              `It is supported, because 30 °C lies between two tested temperatures`,
              `It is contradicted, because growth increased as temperature rose`
            ],
            correctAnswer: 1,
            explanation: `The warmest tank was 24 °C, so any value at 30 °C is an extrapolation and cannot be stated as certain or exact; growth might stop entirely. A falling trend does not fix an exact future value. The temperature 30 °C lies outside the tested range, not between two tested values, and growth decreased, rather than increased, above 16 °C.`
          },
          {
            question: `Do the results show whether the amount of food affects trout growth?`,
            options: [
              `No, because the food ration was not varied`,
              `Yes, because the fish in every tank were fed`,
              `Yes, because growth differed among the tanks`,
              `No, because the 24 °C fish grew very little`
            ],
            correctAnswer: 0,
            explanation: `Every tank received the same food ration, so food was a constant and the study cannot reveal its effect. Feeding every tank is exactly why food cannot be compared. Growth differed among the tanks because temperature changed, not food, and the low growth at 24 °C is a temperature result that says nothing about food.`
          }
        ]
      }
    },
    {
      id: 'act-s5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set B — Weigh the Claim** 📋
      `,
      exercise: {
        questions: [
          {
            question: `City records show that umbrella sales and traffic accidents both increase on the same days. An official concludes that buying umbrellas causes accidents. Which alternative explanation best accounts for the data?`,
            options: [
              `Drivers who buy umbrellas tend to drive more carefully`,
              `Rainy weather increases both umbrella sales and accidents`,
              `Umbrella sales are recorded more often than accidents`,
              `Accidents are more frequent on weekdays than weekends`
            ],
            correctAnswer: 1,
            explanation: `Rain is a third factor that raises umbrella sales and makes roads more dangerous, which explains why both climb on the same days without one causing the other. Careful drivers would lower accidents and do not explain the shared rise. A difference in record-keeping does not explain why both rise together, and a weekday pattern could explain accidents but not umbrella sales.`
          },
          {
            question: `To estimate how many hours per week adults in a city exercise, researchers surveyed 500 people as they left a downtown gym. What is the main weakness of this study?`,
            options: [
              `500 people is too large a sample for a survey`,
              `Exercise should be the IV rather than the outcome`,
              `The survey should have measured sleep in addition`,
              `The people surveyed may exercise more than most adults`
            ],
            correctAnswer: 3,
            explanation: `People leaving a gym likely exercise more than the city's adults overall, so the sample is biased and the estimate would run high. A large sample makes an average more reliable, not less. Hours of exercise is correctly the measured outcome in a survey like this, and adding sleep questions would not fix a sample that misrepresents the city.`
          },
          {
            question: `A school found that students who eat breakfast earn higher grades and concluded that eating breakfast raises grades. Which fact, if true, would most weaken this conclusion?`,
            options: [
              `Breakfast eaters also sleep more each night`,
              `Most students in the school eat breakfast`,
              `Grades were averaged over a full school year`,
              `Breakfast eaters had higher grades in math`
            ],
            correctAnswer: 0,
            explanation: `If breakfast eaters also sleep more, sleep is an alternative explanation for their higher grades, so breakfast may not be the cause. How many students eat breakfast does not create a different cause. Averaging over a full year makes the grade comparison more reliable, and higher math grades simply restate part of the original finding.`
          },
          {
            question: `A mosquito repellent tested on 30 adults in a laboratory reduced mosquito bites by 80% compared with an untreated group. Which conclusion is best supported?`,
            options: [
              `The repellent prevents all mosquito bites outdoors`,
              `The repellent works equally well on children and adults`,
              `The repellent reduced bites for the adults tested`,
              `The repellent works against every biting insect`
            ],
            correctAnswer: 2,
            explanation: `The supported conclusion stays inside what was tested: adults, in a laboratory, with mosquitoes. An 80% reduction is not prevention of all bites, and the test was not run outdoors. No children were tested, so claiming equal effects on them overgeneralizes, and other insects were never tested at all.`
          }
        ]
      }
    },
    {
      id: 'act-s5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Mini-passage:** A microbiologist spread one bacterial strain on plates containing 0, 2, 4, or 8 mg/L of an antibiotic and counted colonies after 24 hours at 37 °C: 210, 150, 60, and 0 colonies.

Decide whether each statement is **supported**, **goes beyond the data**, or **cannot be determined**.

| Statement | Verdict |
|---|---|
| Colony count fell as the antibiotic concentration rose. | Supported |
| The antibiotic kills every type of bacterium. | Goes beyond the data (one strain) |
| At 6 mg/L there would be exactly 30 colonies. | Goes beyond the data (untested value stated exactly) |
| The antibiotic works faster at higher temperatures. | Cannot be determined (temperature held at 37 °C) |

**ACT Tip:** The best-supported conclusion is usually the most modest one that still matches the data. Absolute words such as "all," "always," "proves," and "exactly" are warning signs.
      `
    },
    {
      id: 'act-s5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- A conclusion must match the **whole** trend; rise-then-fall data do not support "always increases."
- Stay inside the tested scope: subjects, conditions, and range. Beyond that is overgeneralization or extrapolation.
- A sample that does not represent the population (a gym, a swim team, young professionals) biases the result.
- Two things rising together can share a third cause; a fact that supplies that cause weakens a causal claim.
- A variable held constant cannot be evaluated. For yes/no choices, get the direction right first, then the reason.
      `
    }
  ]
}
