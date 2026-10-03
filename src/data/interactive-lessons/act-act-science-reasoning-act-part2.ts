export const actScienceReasonPart2Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# 🧪 Hypothesis Testing

**Part 2 of 7 — Predictions, Support, and Data That Contradict a Claim**

Many ACT Science questions hand you a hypothesis and a set of results and ask one thing: **do the results support it?** Answering well takes three steps.

## Step 1: Turn the Hypothesis into a Prediction

Before you look at the data, say what the hypothesis expects to see.

| Hypothesis wording | What it predicts |
|---|---|
| "As X increases, Y increases." | Higher X values go with higher Y values (a direct relationship). |
| "As X increases, Y decreases." | Higher X values go with lower Y values (an inverse relationship). |
| "X has no effect on Y." | Y stays about the same no matter how X changes. |
| "Y depends **only** on X." | Whenever X is the same, Y is the same, even if other factors change. |
| "Condition A produces more Y than condition B." | The A trials show larger Y values than the B trials. |

Notice the **direction**. In "As light increases, oxygen production increases," light is the factor that changes and oxygen production is the response. Reversing them changes the claim.

## Step 2: Compare the Prediction with the Data

Every result does one of three things to a hypothesis:

| Verdict | When it applies |
|---|---|
| Supports (is consistent with) | The data show the predicted pattern. |
| Weakens (contradicts) | The data show a different or opposite pattern. |
| Neither | The data are about a variable the hypothesis never mentions. |

**Read the measure in the right direction.** If a table reports "days to germinate" or "seconds to dissolve," a **larger** number means **slower**. If a hypothesis says seeds sprout *faster* in the dark, the dark seeds need *fewer* days, not more.

ACT answer choices often take the form "**Yes, because...**" / "**No, because...**". Both halves must be right: decide yes or no first, then pick the reason that cites the data that actually matter.

## Step 3: State the Verdict Carefully

**Supported is not proven.** Data that agree with a hypothesis support it, but a future test could still contradict it. No number of agreeing trials makes a hypothesis "proven," and agreeing trials do not turn it into a law.

**Contradicted means revise or reject.** When results disagree with a prediction, scientists revise or reject the hypothesis. They never discard data simply because the data disagree with what they expected.

## Is the Difference Real? Variation and Sample Size

Individual measurements vary. A difference between two group averages is convincing only when it is large compared with the variation inside each group.

| Group | Growth of each fish in 4 weeks (mm) | Mean |
|---|---|---|
| Food A | 14, 20, 17 | 17.0 |
| Food B | 19, 15, 18 | 17.3 |

The means differ by only 0.3 mm, while fish *within* each group differ by up to 6 mm. With three fish per group, that small gap could easily be chance, so these data show **no clear effect**. More trials and larger differences make a result more convincing; that is why researchers repeat trials and average them.

## "Only" and "All" Hypotheses

A hypothesis that says Y depends **only** on X can be broken by a single result: two trials with the **same X** but **different Y**. That shows something else matters. Trials where X differs and Y differs are consistent with the hypothesis, because it already says X matters.

**ACT Tip:** To find a result that weakens a hypothesis, write its prediction in a few words, then look for the choice that shows the opposite or shows the "only" factor held fixed while the result changed.
      `
    },
    {
      id: 'act-s2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A "Yes, because / No, because" question</b></summary>

**Study:** A student hypothesized, "The activity of Enzyme K increases as temperature increases." She measured activity (in units) at five temperatures.

| Temperature (°C) | 20 | 30 | 40 | 50 | 60 |
|---|---|---|---|---|---|
| Activity (units) | 14 | 26 | 38 | 22 | 6 |

**Question:** Do the results support her hypothesis?

- A. Yes, because activity rose from 20°C to 40°C.
- B. Yes, because the highest activity occurred at a middle temperature.
- C. No, because activity fell at temperatures above 40°C.
- D. No, because only five temperatures were tested.

**Solution:**
1. **Prediction:** activity should rise across the whole range.
2. **Data:** it rises to 40°C, then falls to 6 units at 60°C. The prediction fails above 40°C, so the answer is **No**.
3. **Pick the reason:** C names the data that contradict the claim. D is a weak reason; five temperatures are plenty to reveal the pattern. A and B start with "Yes," which is already wrong.

**Answer: C** ✓
</details>

<details>
<summary><b>Example 2: Which result would weaken an "only" hypothesis?</b></summary>

**Hypothesis:** "The time a cup of water takes to cool from 80°C to 40°C depends only on the volume of water."

**Question:** Which result would contradict this hypothesis?

- A. 200 mL cooled more slowly than 100 mL in identical cups.
- B. Two 150 mL samples in identical cups cooled in the same time.
- C. 300 mL cooled more slowly than 200 mL in identical cups.
- D. Two 150 mL samples, one in a foam cup and one in a metal cup, cooled in very different times.

**Solution:**
1. If volume is the **only** factor, equal volumes must cool in equal times.
2. D holds volume fixed and still gets different times, so the cup material matters too. That breaks "only."
3. A and C show volume mattering, which the hypothesis allows. B is exactly what the hypothesis predicts.

**Answer: D** ✓
</details>
      `
    },
    {
      id: 'act-s2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Does the Evidence Support the Hypothesis?** 🎯

> A student hypothesized: "A longer guitar string vibrates at a lower frequency." She plucked strings of the same material and tension and recorded the frequency of each.

| String length (cm) | Frequency (Hz) |
|---|---|
| 30 | 440 |
| 40 | 330 |
| 50 | 264 |
| 60 | 220 |
      `,
      exercise: {
        questions: [
          {
            question: `Do the results in the table support the student's hypothesis?`,
            options: [
              `No, because the frequency fell instead of rising`,
              `Yes, because frequency fell each time the string got longer`,
              `Yes, because the longest string had the highest frequency`,
              `No, because the student tested only four string lengths`
            ],
            correctAnswer: 1,
            explanation: `The hypothesis predicts lower frequencies for longer strings, and the frequency dropped from 440 Hz to 220 Hz as length rose from 30 cm to 60 cm. A falling frequency is exactly what was predicted, so treating it as a failure misreads the claim. The longest string actually had the lowest frequency, and four evenly spaced lengths are enough to show a clear pattern.`
          },
          {
            question: `Suppose the student also tested a 70 cm string. Which result would contradict her hypothesis?`,
            options: [
              `189 Hz`,
              `200 Hz`,
              `210 Hz`,
              `260 Hz`
            ],
            correctAnswer: 3,
            explanation: `A 70 cm string is longer than the 60 cm string, so the hypothesis predicts a frequency below 220 Hz. A reading of 260 Hz is higher than the 60 cm value and would contradict the claim. The readings of 189 Hz, 200 Hz, and 210 Hz are all below 220 Hz, so each is consistent with longer strings vibrating more slowly.`
          },
          {
            question: `A biologist hypothesized: "Seeds sprout faster in moist soil than in dry soil." Her seeds in moist soil took a mean of 3.2 days to sprout, and her seeds in dry soil took a mean of 5.8 days. Do these results support the hypothesis?`,
            options: [
              `Yes, because moist-soil seeds sprouted in fewer days`,
              `No, because dry-soil seeds had the larger number of days`,
              `Yes, because the seeds in both soils sprouted eventually`,
              `No, because sprouting time was measured in days, not hours`
            ],
            correctAnswer: 0,
            explanation: `Fewer days to sprout means faster sprouting, so the moist-soil seeds were faster, as predicted. Reading the larger number of days as "faster" reverses the measure. Sprouting in both soils says nothing about which was quicker, and measuring in days rather than hours does not change which group sprouted first.`
          },
          {
            question: `A student writes the hypothesis: "As water temperature increases, the heart rate of water fleas increases." Which result is this hypothesis predicting?`,
            options: [
              `Fleas with faster heart rates will warm the water around them`,
              `Fleas in 25°C water will have faster heart rates than at 15°C`,
              `Fleas in 25°C water will have slower heart rates than at 15°C`,
              `Fleas at every temperature will have the same heart rate`
            ],
            correctAnswer: 1,
            explanation: `The hypothesis says heart rate rises as temperature rises, so the warmer 25°C fleas should have faster heart rates. Claiming the fleas warm the water reverses which variable responds to which. Slower heart rates at 25°C predict the opposite direction, and equal heart rates at every temperature describe "no effect," which the hypothesis does not claim.`
          }
        ]
      }
    },
    {
      id: 'act-s2-input',
      type: 'input-boxes' as const,
      content: `
**Support, Weaken, or Neither?** ✏️

**Hypothesis:** "Increasing the amount of sunlight a lettuce plant gets increases the mass of its leaves."

For each finding, type **support**, **weaken**, or **neither**.

1) Plants given 10 hours of light per day had a greater leaf mass than plants given 6 hours.

2) Plants given 12 hours of light per day had a smaller leaf mass than plants given 8 hours.

3) Plants given 8 hours of light per day had longer roots when the soil was sandy.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['support', 'weaken', 'neither'],
        hint1: 'More light went with more leaf mass. Is that the predicted direction?',
        hint2: 'More light went with less leaf mass. Is that the predicted direction?',
        hint3: 'Does the hypothesis say anything about roots or soil type?',
        explanation: '1) More light, more leaf mass: the predicted pattern, so it supports. 2) More light, less leaf mass: the opposite pattern, so it weakens. 3) Root length and soil type are not part of the hypothesis, so the finding neither supports nor weakens it.'
      }
    },
    {
      id: 'act-s2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Proof, Variation, and Revising a Hypothesis** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A chemist predicted that a certain metal would react faster in warmer acid. Her results agreed with the prediction in all 20 trials, run between 10°C and 50°C. Which statement is most accurate?`,
            options: [
              `The prediction is now a law that holds at every temperature`,
              `The results support it, but a later test could still contradict it`,
              `The prediction is proven, so no further testing would be useful`,
              `The prediction is certain to hold at 90°C, a temperature never tested`
            ],
            correctAnswer: 1,
            explanation: `Agreeing data support a hypothesis, but another test, for example at a temperature outside 10°C to 50°C, could still contradict it, so it is never proven. Twenty trials do not turn a prediction into a law, and further testing always remains useful. Nothing was measured at 90°C, so any claim about that temperature goes beyond the data.`
          },
          {
            question: `A team predicted that a new coating would keep metal nails from rusting. After 30 days in salt water, the coated nails had rusted as much as the uncoated nails. What should the team do?`,
            options: [
              `Discard these results, because they disagree with the prediction`,
              `Report that the hypothesis is proven, since some nails did not rust`,
              `Revise or reject the hypothesis, because the data contradict it`,
              `Keep repeating the test until the coated nails rust less than the rest`
            ],
            correctAnswer: 2,
            explanation: `The coating made no difference, which contradicts the prediction, so the hypothesis must be revised or rejected. Throwing out data because they disagree with a prediction is never acceptable. Nothing in the result proves the hypothesis, and rerunning the test until it gives the hoped-for answer simply ignores the evidence.`
          },
          {
            question: `Two groups of 4 mice ran a maze. Group 1 had a mean time of 52.0 s and Group 2 had a mean of 51.6 s, but individual times within each group ranged over about 10 s. Which conclusion is most justified?`,
            options: [
              `Group 2's treatment clearly made the mice faster`,
              `Group 1's treatment clearly made the mice faster`,
              `The two treatments are proven to have the same effect`,
              `The 0.4 s gap may be due to chance, so no clear effect is shown`
            ],
            correctAnswer: 3,
            explanation: `A 0.4 s difference in means is tiny compared with the 10 s spread inside each group of only four mice, so the gap could easily be chance. Claiming that either treatment clearly made mice faster ignores that variation, and Group 1 was actually the slower group. The data also cannot prove the treatments are identical; they only fail to show a difference.`
          },
          {
            question: `A student hypothesized that the time a toy car takes to roll down a ramp depends only on the ramp's angle. Which result would contradict this hypothesis?`,
            options: [
              `Same-angle ramps, one smooth and one carpeted, gave different times`,
              `A ramp at 30° gave a shorter time than a ramp at 15°, using the same car`,
              `Two smooth ramps at the same angle gave the same time with the same car`,
              `Ramps at three different angles gave three different times with the same car`
            ],
            correctAnswer: 0,
            explanation: `If angle is the only factor, ramps at the same angle must give the same time, so a difference caused by the surface alone breaks the hypothesis. Different angles giving different times, including the steeper ramp being faster, shows that angle matters, which the hypothesis allows. Two identical ramps giving equal times is exactly what it predicts.`
          }
        ]
      }
    },
    {
      id: 'act-s2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> **Hypothesis:** "Dissolving sugar in water lowers the temperature at which the water freezes."

| Sugar added (g per L) | 0 | 100 | 200 | 300 |
|---|---|---|---|---|
| Freezing point (°C) | 0.0 | −0.5 | −1.1 | −1.6 |

**Question:** Do these results support the hypothesis, and what is the best reason?

<details>
<summary><b>Show answer</b></summary>

**Yes, because the freezing point dropped each time more sugar was added.** The change is small (1.6°C in total), but it is steady and in the predicted direction, which is what support means. The 0 g trial is the baseline for comparison, not a flaw. Saying the freezing point "stayed near 0°C" ignores the consistent decrease.
</details>
      `
    },
    {
      id: 'act-s2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- First turn the hypothesis into a **prediction**, including its **direction** (which variable responds to which).
- A result **supports**, **weakens**, or does **neither**; data about an unmentioned variable do neither.
- Read measures like "days to sprout" or "seconds to dissolve" carefully: a **larger number means slower**.
- In "Yes, because / No, because" choices, the verdict **and** the reason must both be right.
- Data **support** a hypothesis but never **prove** it; contradictory data mean **revise or reject**, never discard.
- A small difference between means, with large variation and few trials, may be **chance**.
- An "**only**" hypothesis is broken by the same X giving a different Y.
      `
    }
  ]
}
