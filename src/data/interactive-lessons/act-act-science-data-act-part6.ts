export const actScienceDataPart6Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p6-intro',
      type: 'text' as const,
      content: `
# 🧪 Variables, Controls & Claims

**Part 6 of 7 — Independent and Dependent Variables, Controls, Fair Comparisons, and Judging Claims**

Data tables come from experiments, and many ACT Science questions ask about the experiment itself: what was changed, what was measured, what was held constant, and whether a conclusion is justified. These questions follow a small set of rules.

## The Vocabulary of an Experiment

| Term | Meaning | Where it usually appears |
|---|---|---|
| **Independent variable** | The factor the researchers **deliberately change** | Left column of a table; x-axis of a graph |
| **Dependent variable** | The result they **measure** in response | Right-hand columns; y-axis |
| **Controlled variable** (constant) | A factor kept the **same** in every trial so it cannot explain differences | Stated in the description, or a column with the same value in every row |
| **Control group / control trial** | A trial **without** the treatment (or with a standard condition), used as a **baseline** | "No fertilizer," "plain water," "placebo" |
| **Trial / replicate** | One run of the procedure; repeating trials shows how much results vary by chance | "Each value is the mean of 5 trials" |

**Quick test for each variable:** Did the researchers **pick** its values (independent), **record** its values (dependent), or **keep** it fixed (controlled)?

## Fair Comparisons: Change Only One Thing

To see the effect of one variable, compare two trials that differ in **that variable only**. Everything else must match.

- **Finding a pair:** for each candidate pair of trials, list what differs. If exactly one variable differs, the pair isolates it.
- **Confounded comparison:** if two variables changed between trials, a difference in results could come from either one. No conclusion about either variable alone is justified.
- **Designing a new trial:** to test variable X alone, copy an existing trial and change **only X**.

## Controls and Baselines

A control shows what happens **without** the treatment. The treatment's own effect is the **difference from the control**:

$$\\text{effect of treatment} = \\text{treatment result} - \\text{control result}$$

If a placebo group's blood pressure dropped 4 points and the medicine group's dropped 13, the medicine accounts for about 9 points, not 13. Pick the control that matches what the question isolates: to find the effect of a hormone **beyond soaking**, compare with seeds soaked in plain water, not unsoaked seeds.

A control does **not** remove random variation. That is the job of repeated trials, which reveal how much results vary by chance.

## Judging Claims and Hypotheses

Every claim gets one of three verdicts:

| Verdict | When |
|---|---|
| **Supported** | The data show what the claim says, over the conditions the claim covers |
| **Contradicted** | At least one fair comparison shows the opposite |
| **Can't tell** | The data don't test it (wrong variable, outside the tested range, confounded trials) |

**Absolute words are fragile.** "Only," "always," "every," and "never" can be defeated by a single fair comparison. To refute "depends **only** on temperature," find two trials at the **same** temperature with **different** results.

**Watch the reasoning, not just the verdict.** ACT choices often pair "Yes" or "No" with a reason. The right choice has the right verdict **and** cites a fair comparison. "Yes, because Trial 5 was fastest" is weak if Trial 5 differs from the others in two ways.

**"If the hypothesis is correct, which result would be expected?"** Translate the hypothesis into a prediction about the table ("more salt → lower freezing point"), then pick the choice whose numbers follow that direction.

## Common Design Traps

| Trap | How to avoid it |
|---|---|
| Calling the measured result the independent variable | Ask which values the researchers chose |
| Comparing trials that differ in two ways | List every difference before comparing |
| Crediting the full treatment result to the treatment | Subtract the control |
| Accepting "only" or "always" from a few trials | Look for one counterexample |
| Trusting a right verdict with a wrong reason | Check that the cited trials are a fair comparison |
      `
    },
    {
      id: 'act-sdata-p6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Which trials isolate which variable?</b></summary>

Students grew bean seedlings under lamps for 14 days.

| Trial | Light color | Light (h/day) | Water (mL/day) | Height (cm) |
|---|---|---|---|---|
| 1 | white | 12 | 20 | 9.1 |
| 2 | red | 12 | 20 | 10.4 |
| 3 | red | 16 | 20 | 12.8 |
| 4 | blue | 16 | 30 | 12.2 |

**Dependent variable:** height, the only value measured. The other three columns were set by the students.

**Effect of light color alone:** Trials 1 and 2 differ only in color (white vs. red), so red light added 1.3 cm under these conditions.

**Effect of hours of light alone:** Trials 2 and 3 differ only in hours (12 vs. 16), so 4 extra hours added 2.4 cm.

**Effect of water:** Trial 4 differs from Trial 3 in **both** color and water, so it is confounded. Nothing can be concluded about water. To fix it, add a trial with **red, 16 h, 30 mL**: compared with Trial 3, it changes only the water.
</details>

<details>
<summary><b>Example 2: Using the right control to judge a claim</b></summary>

Volunteers touched a lab surface, then either did not wash, washed with plain soap, or washed with antibacterial soap. Their fingertips were pressed onto nutrient plates.

| Group | Mean bacterial colonies |
|---|---|
| No washing (control) | 180 |
| Plain soap | 60 |
| Antibacterial soap | 45 |

**Claim 1:** "Antibacterial soap removes 135 more colonies than plain soap." **Contradicted.** The 135 comes from comparing with no washing (180 − 45). Compared with plain soap, antibacterial soap left only 60 − 45 = **15** fewer colonies.

**Claim 2:** "Antibacterial soap is the only soap that reduces bacteria." **Contradicted.** Plain soap cut colonies from 180 to 60.

**Claim 3:** "Antibacterial soap works better on every type of bacterium." **Can't tell.** The study counted colonies but never identified types of bacteria.
</details>
      `
    },
    {
      id: 'act-sdata-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Variables and Controls** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student released a toy car from ramps of height 10, 20, 30, and 40 cm and measured how far it rolled across the floor. The same car, ramp surface, and floor were used each time. What is the independent variable?`,
            options: [`The distance the car rolled`, `The height of the ramp`, `The surface of the ramp`, `The mass of the toy car`],
            correctAnswer: 1,
            explanation: `The student chose the ramp heights, so height is the independent variable. The distance rolled is what was measured, making it the dependent variable. The ramp surface was held the same in every trial, and the same car (so the same mass) was always used, so both are controlled.`
          },
          {
            question: `Yeast was mixed with 0, 5, 10, or 15 g of sugar in 100 mL of water at 35°C, and the volume of CO₂ collected after 20 minutes was recorded. Which of the following was a controlled variable?`,
            options: [`The mass of sugar added`, `The volume of CO₂ collected`, `The temperature of the water`, `The rate of CO₂ production`],
            correctAnswer: 2,
            explanation: `The water was 35°C in every trial, so temperature was held constant. The mass of sugar was deliberately changed, making it the independent variable. The volume of CO₂ was measured, and its rate of production is also a result, so both depend on the sugar.`
          },
          {
            question: `A student measured the electrical resistance of four wires.

| Trial | Length (cm) | Diameter (mm) | Metal | Resistance (Ω) |
|---|---|---|---|---|
| 1 | 50 | 0.5 | copper | 0.04 |
| 2 | 100 | 0.5 | copper | 0.09 |
| 3 | 100 | 1.0 | copper | 0.02 |
| 4 | 100 | 1.0 | iron | 0.13 |

Which two trials show the effect of wire diameter alone?`,
            options: [`Trials 1 and 2`, `Trials 3 and 4`, `Trials 1 and 3`, `Trials 2 and 3`],
            correctAnswer: 3,
            explanation: `Trials 2 and 3 have the same length and metal and differ only in diameter, so they isolate diameter. Trials 1 and 2 differ only in length, and Trials 3 and 4 differ only in metal. Trials 1 and 3 differ in both length and diameter, so that comparison is confounded.`
          },
          {
            question: `Seeds soaked in a growth hormone solution sprouted in a mean of 4.0 days. Seeds soaked in plain water sprouted in 6.5 days, and unsoaked seeds sprouted in 8.0 days. How much sooner did seeds sprout because of the hormone itself, beyond the effect of soaking?`,
            options: [`2.5 days sooner`, `4.0 days sooner`, `1.5 days sooner`, `6.5 days sooner`],
            correctAnswer: 0,
            explanation: `To separate the hormone from soaking, compare with seeds soaked in plain water: 6.5 − 4.0 = 2.5 days. Comparing with unsoaked seeds (8.0 − 4.0 = 4.0) mixes the hormone's effect with soaking's. The 1.5 days is the effect of soaking alone, and 6.5 days is just the plain-water result.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Variables** 🔍

A student tests how the number of turns of wire in a coil affects how many paper clips an electromagnet can lift. She uses the same battery, the same iron nail, and the same type of wire in every trial.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Number of turns in the coil:',
            options: ['independent variable', 'dependent variable', 'controlled variable']
          },
          {
            label: 'Number of paper clips lifted:',
            options: ['independent variable', 'dependent variable', 'controlled variable']
          },
          {
            label: 'The battery used:',
            options: ['independent variable', 'dependent variable', 'controlled variable']
          }
        ],
        correctAnswers: ['independent variable', 'dependent variable', 'controlled variable'],
        hint1: 'The student chooses how many turns to wind.',
        hint2: 'The student counts the clips after each trial.',
        hint3: 'The same battery appears in every trial.',
        explanation: 'The number of turns is set by the student (independent). The clips lifted are measured (dependent). The battery is kept the same so it cannot explain any difference (controlled).'
      }
    },
    {
      id: 'act-sdata-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Set: Melting Ice** 📋

Students placed identical 20 g ice cubes in water and timed how long each took to melt completely.

**Table 1**

| Trial | Water temperature (°C) | Water volume (mL) | Stirred? | Melt time (s) |
|---|---|---|---|---|
| 1 | 20 | 200 | no | 410 |
| 2 | 30 | 200 | no | 300 |
| 3 | 40 | 200 | no | 215 |
| 4 | 40 | 200 | yes | 140 |
| 5 | 40 | 400 | yes | 120 |
| 6 | 20 | 200 | yes | 260 |

**Student A** claims that melt time depends only on water temperature. **Student B** claims that stirring shortens melt time at both 20°C and 40°C.
      `,
      exercise: {
        questions: [
          {
            question: `Which factor was held constant in all six trials?`,
            options: [`The mass of each ice cube`, `The water temperature`, `The volume of water`, `Whether it was stirred`],
            correctAnswer: 0,
            explanation: `Every trial used an identical 20 g ice cube, so ice mass was constant. Water temperature varies from 20°C to 40°C, water volume is 400 mL in Trial 5, and stirring is "no" in some trials and "yes" in others.`
          },
          {
            question: `Which two trials show the effect of stirring alone in 40°C water?`,
            options: [`Trials 4 and 5`, `Trials 2 and 3`, `Trials 1 and 4`, `Trials 3 and 4`],
            correctAnswer: 3,
            explanation: `Trials 3 and 4 both use 200 mL of 40°C water and differ only in stirring. Trials 4 and 5 differ only in water volume. Trials 2 and 3 differ only in temperature, and Trials 1 and 4 differ in both temperature and stirring.`
          },
          {
            question: `Do the data support Student B's claim?`,
            options: [
              `No; at 20°C, stirring made no difference to the melt time`,
              `Yes; Trial 5 had the shortest melt time of all six trials`,
              `Yes; Trials 1 and 6 and Trials 3 and 4 each show it`,
              `No; Trials 4 and 5 show that stirring had no real effect`
            ],
            correctAnswer: 2,
            explanation: `Trials 1 and 6 (20°C) drop from 410 to 260 s with stirring, and Trials 3 and 4 (40°C) drop from 215 to 140 s, so stirring shortened melt time at both temperatures. At 20°C stirring saved 150 s, so it did make a difference. Trial 5 differs from the unstirred trials in volume too, so it is a weak reason, and Trials 4 and 5 are both stirred, so they say nothing about stirring.`
          },
          {
            question: `Which result most directly weakens Student A's claim?`,
            options: [
              `In Trials 1 to 3, melt time falls as temperature rises`,
              `Trials 3 and 4 share a temperature but differ in melt time`,
              `Trial 1 had the longest melt time of all six trials`,
              `Trials 2 and 3 differ in temperature and in melt time`
            ],
            correctAnswer: 1,
            explanation: `If melt time depended only on temperature, trials at the same temperature would have the same melt time, but Trials 3 and 4 are both at 40°C and take 215 s and 140 s. Trials 1 to 3 and Trials 2 and 3 show that temperature matters, which fits Student A's claim rather than weakening it. Trial 1's long time is just the coldest unstirred trial.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

A student tested how far a paper airplane flew.

| Trial | Wing shape | Paper mass (g) | Launch angle (°) | Distance (m) |
|---|---|---|---|---|
| 1 | delta | 5 | 10 | 8.2 |
| 2 | delta | 5 | 20 | 9.6 |
| 3 | straight | 8 | 20 | 7.1 |

**Question:** The student wants to add one trial that, compared with Trial 2, shows the effect of wing shape alone. What should the new trial use?

<details>
<summary><b>Show answer</b></summary>

**Straight wings, 5 g paper, 20° launch angle.** Copy Trial 2 and change only the wing shape. Trial 3 already has straight wings, but it also changes the paper mass, so comparing Trials 2 and 3 cannot separate wing shape from mass.
</details>
      `
    },
    {
      id: 'act-sdata-p6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Independent** = what researchers change; **dependent** = what they measure; **controlled** = what they keep the same.
- A fair comparison uses two trials that differ in **only one** variable; a pair that differs in two is **confounded**.
- To design a test of one variable, **copy an existing trial and change only that variable**.
- A **control** is a baseline: the treatment's effect is **treatment − control**, using the control that matches what you want to isolate.
- Claims are **supported**, **contradicted**, or **can't tell**. One counterexample defeats "only," "always," or "every."
- Choose answers whose **reason** cites a fair comparison, not just the right yes or no.
      `
    }
  ]
};
