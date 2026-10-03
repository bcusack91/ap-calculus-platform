export const actReadSciTipsPart6Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Predictions, Quick Calculations, and Trap Elimination**

This part covers the questions that ask you to go one step **beyond** the data: predict a value, compute a percent, or choose the conclusion the evidence actually supports. These are where careful students separate from fast guessers.

## Predicting From a Pattern

| Situation | Name | Method |
|---|---|---|
| The value lies **between** two tested values | Interpolation | The answer lies between the neighboring results; halfway in, roughly halfway out |
| The value lies **beyond** the tested range | Extrapolation | Continue the pattern by its rule |
| Equal steps in x give equal steps in y | Linear | Find the change per unit, then multiply |
| Equal steps in x **multiply** y by the same factor | Doubling (exponential) | Count the steps; double each time |

**Linear example:** a spring stretches 3.0 cm per 100 g, which is 0.03 cm per gram. At 450 g: 450 × 0.03 = 13.5 cm. Check the neighbors: 400 g gives 12.0 cm and 500 g gives 15.0 cm, so 13.5 cm sits between them.

**Doubling example:** 300 cells, 600, 1,200, 2,400 every 30 minutes. Each step doubles. Two more steps: 4,800, then 9,600. The trap is adding a fixed amount (600 more each step) instead of doubling.

**Interpolation shortcut:** if a value falls between two rows, the answer must fall between their results. Often that alone eliminates three choices.

## Quick Calculations

- **Percent** = part ÷ whole × 100. 42 of 60 seeds sprouted: 42 ÷ 60 = 0.70 = **70%**. Dividing upside down (60 ÷ 42) gives more than 100%, which cannot be a share of a group.
- **Change** = final − initial. **Percent change** = change ÷ initial × 100.
- **Rate** = change ÷ time (or per unit). Rates let you compare intervals of different lengths.
- **Units first:** 1 g = 1,000 mg. A list of masses in mg compared with "1 gram" requires converting before counting.

## Patterns That Are Not Straight Lines

| Pattern | What the data look like | What you may conclude |
|---|---|---|
| **Diminishing returns** | Gains shrink: +1.2, +0.7, +0.3 | Still rising, but more slowly; "always rises" overreaches |
| **Peak (optimum)** | Rises, then falls | The best level **among those tested** |
| **Inverse proportion** | Doubling x halves y | "Whenever x doubled, y halved"; the drops per equal step are **not** equal |

Inverse proportion is a classic trap. If volume goes 5, 10, 15, 20 mL and pressure goes 360, 180, 120, 90 kPa, the drops per 5 mL are 180, 60, and 30. They are not equal. But each **doubling** (5 → 10, 10 → 20) halves the pressure.

## Trap Elimination: Six Wrong-Answer Patterns

| Trap | Signal words | Why it fails |
|---|---|---|
| **Overclaiming** | *always, never, proves, only factor* | The data cover a few conditions, not every case |
| **Correlation as cause** | *causes, will increase if we add* | An observational study shows things occurring together, not why |
| **Wrong column or unit** | right digits, wrong label | Copies a number into the wrong variable |
| **Combined change** | compares a trial where two things changed | Credit a factor only by changing it alone from the same baseline |
| **Beyond the range** | claims about untested levels | "For the doses tested" is safe; "at any dose" is not |
| **Right fact, wrong question** | true statement that does not answer the stem | Accurate but irrelevant |

**Observational vs experimental:** If researchers only **observed** existing conditions (a survey of streams, a count of birds in different forests), the safe conclusion is "X **tended to** occur with Y." If researchers **changed** one factor and held the rest constant, a cause-and-effect conclusion becomes reasonable for the conditions tested.

**Comparing two effects:** to say which of two changes mattered more, compare each against the **same baseline trial**. A trial where both factors changed at once cannot be credited to either factor alone.

## Reading-Section Traps on Science Passages

The same logic applies in natural-science Reading passages:

- **Too strong:** the passage says a finding "suggests," the choice says it "proves."
- **Right detail, wrong researcher:** a claim from the second study assigned to the first.
- **Reversed cause:** the passage says low fat leads to torpor; the choice says torpor leads to low fat.
- **Outside knowledge:** a true science fact the passage never mentions. If it is not in the text, it is not the answer.
      `
    },
    {
      id: 'act-rsci-p6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Interpolate or extrapolate?</b></summary>

| Elevation (m) | Air pressure (kPa) |
|---|---|
| 0 | 101 |
| 1,000 | 90 |
| 2,000 | 79 |
| 3,000 | 70 |

**Question A:** Estimate the pressure at 1,500 m.
- 1,500 m is between 1,000 m and 2,000 m, so the pressure is between 90 and 79 kPa. Halfway: **about 84.5 kPa**.

**Question B:** If the trend continues, is the pressure at 4,000 m more likely about 62 kPa or about 81 kPa?
- Each 1,000 m lowers pressure by 11, 11, then 9 kPa: steady decrease, slightly shrinking. Another drop of about 8 kPa gives **about 62 kPa**. A value of 81 kPa would mean pressure rose with elevation, reversing the trend.
</details>

<details>
<summary><b>Example 2: Eliminate the traps</b></summary>

A survey of 20 city blocks found that blocks with more street trees had lower summer sidewalk temperatures. No trees were planted or removed during the survey.

**Which conclusion is best supported?**
- *Planting trees on a block will lower its sidewalk temperature.* ❌ Correlation as cause: nothing was changed, so the survey cannot show cause.
- *Trees are the only factor that controls sidewalk temperature.* ❌ Overclaiming: no other factors were studied.
- *Blocks with the fewest trees reached the highest temperatures ever recorded in the city.* ❌ Beyond the data: no city records were compared.
- *Blocks with more street trees tended to have cooler sidewalks.* ✅ Matches an observational study exactly.
</details>
      `
    },
    {
      id: 'act-rsci-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Make the Prediction** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student heated water and recorded its temperature: 20 °C at 0 min, 32 °C at 2 min, 44 °C at 4 min, and 56 °C at 6 min. If the pattern continues, what will the temperature be at 7 min?`,
            options: [`58 °C`, `62 °C`, `68 °C`, `63 °C`],
            correctAnswer: 1,
            explanation: `The temperature rises 12 °C every 2 minutes, or 6 °C per minute, so one more minute gives 56 + 6 = 62 °C. Adding 12 °C gives 68 °C, the prediction for 8 minutes. Adding just 2 °C confuses the time step with the temperature step, and 63 °C adds 7, treating the minute mark as the change.`
          },
          {
            question: `A yeast culture had 400 cells at 0 h, 800 at 2 h, 1,600 at 4 h, and 3,200 at 6 h. If the pattern continues, how many cells will there be at 10 h?`,
            options: [`4,800`, `6,400`, `12,800`, `25,600`],
            correctAnswer: 2,
            explanation: `The count doubles every 2 hours: 6,400 at 8 h and 12,800 at 10 h. The value 6,400 stops one step early, and 25,600 doubles one time too many. Getting 4,800 adds a fixed amount each step instead of doubling.`
          },
          {
            question: `A table shows that a plant grew 3.1 cm at 10 °C and 5.9 cm at 20 °C. At 15 °C, the growth would most likely be:`,
            options: [
              `less than 3.1 cm`,
              `between 3.1 cm and 5.9 cm`,
              `more than 5.9 cm`,
              `exactly 15 cm`
            ],
            correctAnswer: 1,
            explanation: `15 °C lies between the two tested temperatures, so its growth should lie between their results, 3.1 and 5.9 cm. Values below 3.1 cm or above 5.9 cm would mean the trend reversed between two close points, which nothing suggests. Fifteen centimeters copies the temperature into the growth column.`
          },
          {
            question: `In a germination study, 36 of 48 seeds sprouted in moist sand and 18 of 48 sprouted in dry sand. What percent of the seeds in moist sand sprouted?`,
            options: [`36%`, `37.5%`, `75%`, `133%`],
            correctAnswer: 2,
            explanation: `The percent is 36 ÷ 48 = 0.75, or 75%. Reading the raw count 36 as a percent skips the division, and 37.5% is the dry-sand result (18 ÷ 48). Dividing upside down, 48 ÷ 36, gives about 133%, which cannot be a share of the seeds.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p6-input',
      type: 'input-boxes' as const,
      content: `
**Quick Calculations** ✏️

1) Four samples weigh 3,200 mg, 950 mg, 1,050 mg, and 700 mg. How many weigh more than 1 gram?

2) A population grew from 250 to 300. What was the percent increase? (Enter a number only.)

3) A gas sample has pressure 180 kPa at 10 mL and 90 kPa at 20 mL, and the pattern is inverse proportion. What is the pressure (kPa) at 40 mL?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '20', '45'],
        hint1: '1 gram = 1,000 mg. Which values exceed 1,000?',
        hint2: 'Change ÷ initial: 50 ÷ 250.',
        hint3: 'Doubling the volume halves the pressure.',
        explanation: '1) Only 3,200 mg and 1,050 mg exceed 1,000 mg, so 2 samples. 2) 50 ÷ 250 = 0.20 = 20%. 3) From 20 mL to 40 mL the volume doubles, so the pressure halves from 90 to 45 kPa.'
      }
    },
    {
      id: 'act-rsci-p6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Which Change Mattered More?

| Trial | Light (hours per day) | Fertilizer (g) | Plant mass (g) |
|---|---|---|---|
| 1 | 8 | 1 | 20 |
| 2 | 8 | 2 | 26 |
| 3 | 12 | 1 | 31 |
| 4 | 12 | 2 | 38 |

**Claim:** "Starting from Trial 1, adding 4 hours of light increased mass more than doubling the fertilizer did."

Work it before opening the check.

<details>
<summary><b>Check</b></summary>

1. Light alone (Trial 1 → Trial 3): 20 → 31 g, **+11 g**.
2. Fertilizer alone (Trial 1 → Trial 2): 20 → 26 g, **+6 g**.
3. The claim is **supported**: 11 g > 6 g.
4. Traps: Trial 4 changed both factors, so its 38 g cannot be credited to light alone. Comparing Trials 2 and 4 (+12 g) measures light's effect, but not from the Trial 1 baseline the claim names.
</details>
      `
    },
    {
      id: 'act-rsci-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Trap Elimination** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A farmer tested four irrigation levels: 0 L gave 4.0 kg of beans, 10 L gave 5.1 kg, 20 L gave 5.7 kg, and 30 L gave 5.9 kg. Which conclusion is best supported?`,
            options: [
              `Yield will keep rising no matter how much water is added`,
              `Doubling the water from 10 L to 20 L doubled the yield`,
              `Water is the only factor that affects the bean yield`,
              `Yield rose with water at the levels tested, but more slowly`
            ],
            correctAnswer: 3,
            explanation: `Each increase in water raised the yield, but the gains shrank (1.1, 0.6, 0.2 kg), and limiting the claim to the tested levels keeps it within the evidence. "No matter how much" goes beyond the data. Going from 10 to 20 L raised yield from 5.1 to 5.7 kg, nowhere near double, and no other factors were tested.`
          },
          {
            question: `A student grew seedlings at five temperatures: 10 °C, 9 cm; 15 °C, 13 cm; 20 °C, 16 cm; 25 °C, 14 cm; 30 °C, 8 cm. Which statement is supported?`,
            options: [
              `Growth peaked at 20 °C among the temperatures tested`,
              `Growth rose steadily as the temperature increased to 30 °C`,
              `The warmest seedlings, at 30 °C, grew the most of all`,
              `Temperature had no effect on how much the seedlings grew`
            ],
            correctAnswer: 0,
            explanation: `Growth climbs to 16 cm at 20 °C and then falls, so 20 °C was the best of the levels tested. The drops at 25 °C and 30 °C rule out a steady rise and make 30 °C the smallest growth, not the largest. A range from 8 to 16 cm shows temperature clearly mattered.`
          },
          {
            question: `A gas was compressed at constant temperature: 15 mL, 200 kPa; 30 mL, 100 kPa; 45 mL, 67 kPa; 60 mL, 50 kPa. Which statement best describes the data?`,
            options: [
              `Each 15 mL increase lowered the pressure by the same amount`,
              `Pressure doubled each time the volume was doubled`,
              `Each time the volume doubled, the pressure was cut in half`,
              `Pressure stayed about the same once volume passed 30 mL`
            ],
            correctAnswer: 2,
            explanation: `From 15 to 30 mL the pressure fell from 200 to 100 kPa, and from 30 to 60 mL it fell from 100 to 50 kPa, so each doubling of volume halved the pressure. The drops per 15 mL are 100, 33, and 17 kPa, so they are not equal. Pressure went down, not up, and the fall from 100 to 50 kPa after 30 mL is far from constant.`
          },
          {
            question: `A natural-science passage states that "early results suggest the compound may slow the growth of certain fungi in laboratory cultures." Which statement goes beyond what the passage supports?`,
            options: [
              `The compound can stop fungal disease in crops`,
              `The compound may slow some fungi in lab cultures`,
              `The results reported so far are still early ones`,
              `The study grew certain fungi in laboratory cultures`
            ],
            correctAnswer: 0,
            explanation: `The passage limits the claim three ways: "early," "may," and "in laboratory cultures." Saying the compound can stop disease in crops growing outdoors removes all three limits, so it overreaches. The other choices restate the passage's own wording: a possible effect, early results, and fungi grown in lab cultures.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Interpolation:** a value between two tested values gives a result between their results.
- **Extrapolation:** continue the rule. Linear = same change per step; doubling = multiply by 2 each step.
- **Percent = part ÷ whole.** A share of a group can never exceed 100%.
- **Convert units** before comparing or counting.
- **Non-linear patterns:** diminishing returns, a peak "among the levels tested," and inverse proportion (doubling halves; equal steps do not give equal drops).
- **Eliminate traps:** overclaiming, correlation as cause, wrong column or unit, combined changes, beyond the range, true but irrelevant.
- **Compare effects from the same baseline**, changing one factor at a time.
      `
    }
  ]
};
