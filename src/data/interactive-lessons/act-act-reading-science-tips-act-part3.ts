export const actReadSciTipsPart3Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p3-intro',
      type: 'text' as const,
      content: `
# 🧪 Cross-Section Strategies

**Part 3 of 7 — Experiments and Evidence in Both Reading and Science**

Two habits earn points on **both** the Reading and Science tests:

1. **The answer is in the passage.** Every correct choice can be pointed to: a sentence, a table row, a data point. If you cannot point to it, eliminate it.
2. **Understand the experiment.** Reading natural-science passages describe studies in prose; Science Research Summaries describe them with tables. The logic is the same, and the questions are the same: what was changed, what was measured, what was kept the same, and what the results support.

## The Three Kinds of Variables

| Term | Meaning | How to spot it |
|---|---|---|
| **Independent variable** | The factor the researcher deliberately changes | "at 20 °C, 40 °C, and 60 °C"; "under red, blue, or green light" |
| **Dependent variable** | The result that is measured | "measured the height," "timed how long," "counted the number" |
| **Controlled variables** (constants) | Conditions kept the same in every trial | "the same volume of water," "identical containers," "at the same speed" |

A **control group** (or control trial) is a trial with the independent variable at zero or at a normal baseline, such as 0% extract or no fertilizer. Its job is to show what happens **without the treatment**, so any difference in the treated trials can be credited to the treatment.

## Turn Prose Into a Mini-Table

When a Reading passage describes a study in sentences, sketch it as a table in your head:

> *Researchers grew pea plants in pots with 0, 5, or 10 grams of compost. All pots received the same light and water. After four weeks, they weighed each plant.*

| Changed | Measured | Same in every pot | Control |
|---|---|---|---|
| Compost (0, 5, 10 g) | Plant mass | Light, water, time | The 0 g pots |

Now every design question is a look-up.

## Isolating One Variable

To credit an outcome to one factor, compare two trials that are **identical except for that factor**. If two trials differ in two ways, you cannot tell which change caused the difference. This is called a **confound**.

| Trial | Temperature | Light | Growth |
|---|---|---|---|
| 1 | 20 °C | low | 4 cm |
| 2 | 20 °C | high | 7 cm |
| 3 | 30 °C | high | 9 cm |

- Effect of light alone: compare **Trials 1 and 2** (same temperature).
- Effect of temperature alone: compare **Trials 2 and 3** (same light).
- Trials 1 and 3 differ in **both**, so they cannot isolate either factor.

**Fixing a confound:** If one group differs from the others in an extra way (a shaded pot among sunny pots), the fix is to make that extra condition the same for every group, not to remove the group or add more levels.

## Hypotheses: Support, Weaken, or Neither

A hypothesis makes a prediction. To judge a result, ask: **"What would the hypothesis expect to see?"**

| Result | Verdict |
|---|---|
| Matches the predicted direction strongly | **Strong support** |
| Matches the direction weakly (a small difference) | Weak support |
| Shows no difference | Does not support it; suggests no effect |
| Goes in the opposite direction | **Contradicts** (weakens) the hypothesis |
| Breaks a predicted pattern (more salt, yet lower density) | **Contradicts** |

A new data point that fits between existing values, or continues the trend, is **consistent with** the hypothesis. The result that contradicts is the one that **reverses** the pattern.

## The Same Logic in Reading

Natural-science Reading passages ask the same questions in different words:

- "The researchers included the untreated plots in order to ..." = **purpose of the control**.
- "Which finding, if true, would most weaken the author's claim?" = **contradicting result**.
- "The study was designed to determine whether ..." = **independent and dependent variables**.
- "The author suggests the results are limited because ..." = **confound or narrow conditions**.
      `
    },
    {
      id: 'act-rsci-p3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A Reading-style study in prose</b></summary>

> A marine biologist suspected that a common snail avoids rock pools where crabs are present, even when it cannot see them. She filled twelve identical tanks with seawater. Six tanks received water that had previously held a crab; the other six received plain seawater. She placed ten snails in each tank and, after one hour, counted how many had climbed above the waterline.

**Question:** What was the purpose of the six tanks with plain seawater?

**Solution:**
1. Build the mini-table. Changed: water with or without crab scent. Measured: snails above the waterline. Same: tanks, snail number, time.
2. The plain-seawater tanks have **no crab scent**, so they are the control.
3. They show how many snails climb out **without** any crab signal, so a higher count in crab-scented tanks can be credited to the scent. They were not a second treatment or a way to test vision.
</details>

<details>
<summary><b>Example 2: Which trials isolate the variable?</b></summary>

| Trial | Ramp height (cm) | Cart mass (g) | Surface | Distance (cm) |
|---|---|---|---|---|
| 1 | 20 | 200 | tile | 95 |
| 2 | 40 | 200 | tile | 180 |
| 3 | 40 | 400 | tile | 178 |
| 4 | 40 | 400 | rug | 120 |

**Question:** Which two trials show the effect of cart mass alone?

**Solution:**
1. Mass alone means everything else must match.
2. Trials 2 and 3: height 40 cm both, surface tile both, mass 200 vs 400 g. ✅
3. The distance barely changes (180 vs 178 cm), so mass had little effect. Trials 3 and 4 isolate **surface** instead, and Trials 1 and 2 isolate **height**.
</details>
      `
    },
    {
      id: 'act-rsci-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Read the Design** 🎯

> To test whether caffeine affects how fast a water flea's heart beats, a student placed individual water fleas in drops of pond water containing 0, 10, 20, or 40 milligrams of caffeine per liter. Every drop was kept at 21 °C and viewed under the same microscope. After two minutes in the solution, the student counted heartbeats for 15 seconds and multiplied by four.
      `,
      exercise: {
        questions: [
          {
            question: `What was the dependent variable in this study?`,
            options: [
              `The caffeine concentration`,
              `The water temperature`,
              `The heart rate of each flea`,
              `The microscope being used`
            ],
            correctAnswer: 2,
            explanation: `The student counted heartbeats, so heart rate is the measured result. Caffeine concentration is what the student deliberately varied, the independent variable. Temperature and the microscope were kept the same for every flea, so they are controlled variables.`
          },
          {
            question: `Which factor was held constant in the study?`,
            options: [
              `The temperature of the drops`,
              `The number of heartbeats counted`,
              `The amount of caffeine in the drops`,
              `The heart rate measured in each flea`
            ],
            correctAnswer: 0,
            explanation: `Every drop was kept at 21 °C, so temperature was a constant. Heartbeat counts are the results, which can differ from flea to flea. Caffeine amount was set to four different values on purpose, so it was varied, not held constant.`
          },
          {
            question: `The fleas placed in drops with 0 mg/L of caffeine served mainly to:`,
            options: [
              `raise the number of caffeine levels tested`,
              `show the heart rate without any caffeine`,
              `make sure all the fleas were the same age`,
              `prove that caffeine always speeds up hearts`
            ],
            correctAnswer: 1,
            explanation: `The 0 mg/L fleas are the control: they show the baseline heart rate, so changes at higher doses can be credited to caffeine. A zero level is a comparison point rather than an extra strength of caffeine. The study never mentions flea age, and a control cannot by itself prove that caffeine "always" has an effect.`
          },
          {
            question: `Suppose the 40 mg/L fleas had been kept at 26 °C while all others stayed at 21 °C. Why would this weaken the study?`,
            options: [
              `Temperature, not caffeine, might explain the change`,
              `Water fleas cannot survive in water warmer than 21 °C`,
              `Caffeine would not dissolve fully in water at 26 °C`,
              `The control group would then contain too much caffeine`
            ],
            correctAnswer: 0,
            explanation: `The 40 mg/L group would differ in two ways, caffeine and temperature, so any change in heart rate could come from either one; that is a confound. The passage gives no evidence about survival or dissolving at 26 °C. The control group would still have 0 mg/L of caffeine, so its caffeine level is not the problem.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Role** 🔍

A researcher tested whether soil salt level affects how many radish seeds sprout. She planted 50 seeds in each of four trays with 0, 2, 4, or 8 g of salt per kg of soil. All trays received the same water and light for 10 days, and then she counted the sprouted seeds.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The salt level in the soil is the …',
            options: ['independent variable', 'dependent variable', 'controlled variable', 'control group']
          },
          {
            label: 'The number of sprouted seeds is the …',
            options: ['independent variable', 'dependent variable', 'controlled variable', 'control group']
          },
          {
            label: 'The amount of water each tray received is a …',
            options: ['independent variable', 'dependent variable', 'controlled variable', 'control group']
          }
        ],
        correctAnswers: ['independent variable', 'dependent variable', 'controlled variable'],
        hint1: 'Which factor did she set to different values on purpose?',
        hint2: 'Which number did she count at the end?',
        hint3: 'Which condition was the same in every tray?',
        explanation: 'Salt level was set to four values, so it is the independent variable. Sprouted seeds were counted as the result, the dependent variable. Water was the same for every tray, so it is a controlled variable. (The 0 g tray is the control group.)'
      }
    },
    {
      id: 'act-rsci-p3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Predict Before You Check

A student hypothesizes that **brighter light makes a pond plant release more oxygen bubbles**. Before looking at any result, say what the hypothesis predicts: more light, more bubbles.

| Lamp distance (cm) | Bubbles per minute |
|---|---|
| 10 | 34 |
| 20 | 22 |
| 30 | 13 |
| 40 | 8 |

A closer lamp means brighter light. Decide whether each new result would support, contradict, or fit the pattern.

| New result | Verdict | Why |
|---|---|---|
| 15 cm: 28 bubbles/min | Consistent | Falls between the 10 cm and 20 cm values |
| 5 cm: 41 bubbles/min | Supports | Even brighter light, even more bubbles |
| 50 cm: 19 bubbles/min | Contradicts | Dimmer than 40 cm, yet more bubbles |
| 10 cm, repeated: 33 bubbles/min | Consistent | Close to the first 10 cm trial |

**ACT Tip:** "Contradict" questions usually hide the right answer in a data point **beyond** the tested range that **reverses** the trend. Points that fit between rows almost never contradict.
      `
    },
    {
      id: 'act-rsci-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Hypotheses and Results** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A student hypothesizes that pill bugs prefer dark places to lit ones. She places 30 pill bugs in the middle of a box that is dark on one side and lit on the other, then counts them after 20 minutes. Which result would most strongly support her hypothesis?`,
            options: [
              `16 on the dark side and 14 on the lit side`,
              `8 on the dark side and 22 on the lit side`,
              `15 on the dark side and 15 on the lit side`,
              `27 on the dark side and 3 on the lit side`
            ],
            correctAnswer: 3,
            explanation: `A preference for darkness predicts that most pill bugs end up on the dark side, and 27 to 3 is the most lopsided split in that direction. A 16 to 14 split leans the right way only slightly. An even split shows no preference, and 8 to 22 favors the lit side, which contradicts the hypothesis.`
          },
          {
            question: `A scientist claims that a stream's water clarity increases as the number of freshwater mussels increases. Her data show clarity of 40 cm with 10 mussels per square meter, 55 cm with 20, and 70 cm with 30. Which additional result would contradict her claim?`,
            options: [
              `A 25 mussels per square meter site with 62 cm clarity`,
              `A 40 mussels per square meter site with 85 cm clarity`,
              `A 40 mussels per square meter site with 48 cm clarity`,
              `A 15 mussels per square meter site with 47 cm clarity`
            ],
            correctAnswer: 2,
            explanation: `A site with more mussels (40) but lower clarity (48 cm) than the 30-mussel site (70 cm) reverses the claimed pattern. The 85 cm result continues the trend upward. The 15-mussel and 25-mussel sites fall between the existing values, exactly where the claim predicts.`
          },
          {
            question: `A researcher wants to know whether a new feed affects how much milk goats produce. Goats on the new feed live in a shaded barn, while goats on the old feed graze in an open field. Which change would best allow the researcher to credit any difference in milk to the feed?`,
            options: [
              `Give the goats on the new feed even larger portions`,
              `Keep all of the goats in the same housing conditions`,
              `Measure the milk from the old-feed goats more often`,
              `Stop feeding the old-feed goats so they are a control`
            ],
            correctAnswer: 1,
            explanation: `The two groups differ in both feed and housing, so housing is a confound; putting all goats in the same housing leaves feed as the only difference. Larger portions add another change. Measuring one group more often does not remove the housing difference, and withholding food entirely is neither a fair nor a useful control.`
          },
          {
            question: `A passage reports that "in all six test plots, wildflower counts rose after the deer fence was installed." Which finding, if true, would most weaken the claim that the fence caused the increase?`,
            options: [
              `Wildflower counts rose by a similar amount in nearby unfenced plots`,
              `The fence was tall enough that no deer could jump over it`,
              `Deer were seen grazing just outside the fenced plots`,
              `The plots were counted by the same team every year`
            ],
            correctAnswer: 0,
            explanation: `If unfenced plots rose just as much, something other than the fence, such as a wet year, could explain the increase, so the comparison weakens the causal claim. A fence deer cannot jump strengthens the idea that it kept deer out. Deer grazing outside the fence fits the claim, and using the same counting team makes the data more reliable, not less.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Point to the evidence.** In both Reading and Science, a correct answer is backed by a specific sentence or data point.
- **Independent** = what is changed on purpose; **dependent** = what is measured; **controlled** = what stays the same.
- **The control group** shows the result without the treatment, so differences can be credited to the treatment.
- **Isolate a variable** by comparing trials that differ in that one factor only. Two differences = a confound.
- **Fix a confound** by making the extra condition the same for every group.
- **Judge a hypothesis by its prediction.** A strong result in the predicted direction supports it; a reversal of the pattern contradicts it; in-between points are consistent.
- **Reading uses the same logic** in prose: purpose of a control, what would weaken a claim, what the study was designed to test.
      `
    }
  ]
};
