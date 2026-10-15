export const apesBiogeochemicalCyclesPart6Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbiog6-intro',
      type: 'text' as const,
      content: `
# 🔄 Biogeochemical Cycles

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| Free-Response Practice: Nutrients in the Mill Creek Watershed |
| Model Answers |
| Designing an Investigation: Do Buffer Strips Work? |

> 🔑 **Key Concept:** Nutrient-cycle FRQs almost always follow one path: a human source adds nitrogen or phosphorus, water carries it through a watershed, and the receiving water body becomes eutrophic. Each step is worth a point, and the calculation steps are worth points of their own. This part walks through a complete question.

## Free-Response Practice: Nutrients in the Mill Creek Watershed

Mill Creek drains a farming region into Lake Avon. Researchers collected the data below. (All values are hypothetical.)

| Measure | Value |
|---|---|
| Cropland in the watershed | 12,000 ha of corn |
| Nitrogen applied | 150 kg N per hectare per year, as urea (46-0-0) |
| Share of applied nitrogen that leaches below the roots | 20% |
| Nitrate-nitrogen in Mill Creek, 2000 | 2.0 mg/L |
| Nitrate-nitrogen in Mill Creek, 2020 | 6.5 mg/L |
| Lake Avon bottom-water dissolved oxygen, late summer 2020 | 1.2 mg/L |

**Questions**

(a) **Calculate** the total mass of nitrogen applied to the watershed each year, in tonnes. (1 tonne = 1,000 kg)

(b) **Calculate** the mass of urea the farmers must buy each year to supply that nitrogen, in tonnes.

(c) **Calculate** the mass of nitrogen that leaches each year, in tonnes.

(d) **Calculate** the percent change in creek nitrate from 2000 to 2020.

(e) **Explain** how the leached nitrate leads to the low dissolved oxygen measured in Lake Avon.

(f) **Identify** one way the production of urea fertilizer connects the nitrogen cycle to the carbon cycle.

(g) **Propose** one solution that would reduce nitrate reaching Lake Avon, and **explain** how it works.
      `
    },
    {
      id: 'apesbiog6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) (a) Nitrogen applied each year, in tonnes:

2) (c) Nitrogen leached each year, in tonnes:

3) (d) Percent change in creek nitrate, 2000 to 2020:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1800', '360', '225'],
        hint1: '150 kg/ha × 12,000 ha, then divide by 1,000 kg per tonne.',
        hint2: 'Take 20% of the total nitrogen applied.',
        hint3: '(6.5 − 2.0) ÷ 2.0 × 100.',
        explanation: '(a) 150 × 12,000 = 1,800,000 kg = 1,800 tonnes. (c) 0.20 × 1,800 = 360 tonnes. (d) 4.5 ÷ 2.0 × 100 = 225 percent increase.'
      }
    },
    {
      id: 'apesbiog6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** $150\\ \\dfrac{\\text{kg N}}{\\text{ha}} \\times 12{,}000\\ \\text{ha} = 1{,}800{,}000\\ \\text{kg N} = 1{,}800\\ \\text{t N}$

**(b)** Urea is 46% nitrogen, so divide: $\\dfrac{1{,}800\\ \\text{t N}}{0.46} \\approx 3{,}913\\ \\text{t of urea}$

**(c)** $0.20 \\times 1{,}800\\ \\text{t} = 360\\ \\text{t N}$

**(d)** $\\dfrac{6.5 - 2.0}{2.0} \\times 100 = +225\\%$

**(e)** Nitrate dissolves in water and is carried by runoff and groundwater down Mill Creek into the lake. The extra nitrogen fuels an **algal bloom**. When the algae die and sink, **aerobic decomposers** break them down and their **respiration consumes dissolved oxygen** in the bottom water faster than it is replaced, producing **hypoxia** (below 2 mg/L).

**(f)** The Haber-Bosch process that makes the ammonia for urea gets its hydrogen from **natural gas**, and producing it releases $CO_{2}$. (Also acceptable: urea itself contains carbon, which is released as $CO_{2}$ when it breaks down in soil.)

**(g)** Plant a **riparian buffer strip** of trees and grasses along the creek. Roots take up nitrate before it reaches the water, and the waterlogged, low-oxygen soils near the stream support **denitrifying bacteria** that convert nitrate to $N_{2}$ gas. (Also acceptable: restored wetlands, winter cover crops that absorb leftover nitrate, smaller split fertilizer applications timed to crop demand.)

> 🔑 **AP Connection:** In (e), a full-credit chain names every link: nutrient enters water → algal bloom → algae die → decomposers respire → oxygen falls. "Fertilizer kills the fish" earns nothing because it skips the mechanism.
      `
    },
    {
      id: 'apesbiog6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯

Use the Mill Creek data.
      `,
      exercise: {
        questions: [
          {
            question: 'Fertilizer use in the watershed is growing at 2.5 percent per year. Using the rule of 70, about how long until it doubles?',
            options: [
              '28 years',
              '17.5 years',
              '175 years',
              '35 years'
            ],
            correctAnswer: 0,
            explanation: 'Doubling time is about 70 divided by the percent growth rate: 70 ÷ 2.5 = 28 years. Dividing 70 by 0.025 instead of 2.5 produces an answer a hundred times too large.'
          },
          {
            question: 'Why does nitrate reach Mill Creek through groundwater far more readily than ammonium does?',
            options: [
              'Negatively charged nitrate is repelled by soil particles and moves with water',
              'Ammonium is converted into nitrogen gas as soon as it enters any soil',
              'Nitrate is produced only by lightning and falls directly onto the stream',
              'Ammonium is absorbed by plant roots far more slowly than nitrate is'
            ],
            correctAnswer: 0,
            explanation: 'Clay and humus particles carry negative charges, so they hold positively charged ammonium but repel nitrate, which leaches downward into groundwater. Converting ammonium to nitrogen gas is not a soil process; denitrification acts on nitrate.'
          },
          {
            question: 'Lake Avon\'s bottom water measures 1.2 mg/L of dissolved oxygen in late summer. What does this reading indicate?',
            options: [
              'The bottom water is hypoxic, and most fish will leave or die',
              'The water is healthy enough to support trout throughout the lake',
              'The algae are photosynthesizing rapidly in the bottom water',
              'The lake has no nitrogen left, so algae cannot grow there'
            ],
            correctAnswer: 0,
            explanation: 'Dissolved oxygen below about 2 mg/L is hypoxic, too low for most fish. Trout need well above 6 mg/L, and bottom water is usually too dark for algae to photosynthesize.'
          }
        ]
      }
    },
    {
      id: 'apesbiog6-investigation',
      type: 'text' as const,
      content: `
## Designing an Investigation: Do Buffer Strips Work?

**Prompt:** A student hypothesizes that wider vegetated buffer strips remove more nitrate from farm runoff. Design an investigation.

| Element | Model response |
|---|---|
| **Hypothesis** | If a buffer strip is wider, then the nitrate concentration in water leaving it will be lower, because water spends more time in contact with roots and denitrifying soil. |
| **Independent variable** | Width of the buffer strip (0 m, 5 m, 10 m, 20 m) |
| **Dependent variable** | Nitrate concentration (mg/L) in water collected at the downhill edge of the strip |
| **Controlled variables** | Same soil type, slope, plant species and amount of nitrate-rich water applied at the top of each strip |
| **Control group** | The 0 m strip (bare ground), showing nitrate with no buffer |
| **Replication** | Three plots of each width, averaged |

### Interpreting results

| Buffer width (m) | Nitrate leaving the plot (mg/L) |
|---|---|
| 0 | 12.0 |
| 5 | 7.2 |
| 10 | 4.8 |
| 20 | 3.6 |

**Percent reduction for the 10 m strip compared with bare ground:**

$$\\frac{4.8 - 12.0}{12.0} \\times 100 = -60\\%$$

**Reading the trend:** nitrate falls as width increases, supporting the hypothesis, but each added meter removes less. Going from 0 to 5 m removed 4.8 mg/L, while going from 10 to 20 m removed only 1.2 mg/L. That pattern of **diminishing returns** is the evidence a planner would use to choose a cost-effective width.
      `
    },
    {
      id: 'apesbiog6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the buffer strip investigation, what is the purpose of the 0 m plot?',
            options: [
              'It serves as the control, showing nitrate levels when no buffer is present',
              'It serves as the dependent variable that responds to the buffer width',
              'It removes the need to replicate the wider buffer strip plots',
              'It keeps the slope of all the other plots the same'
            ],
            correctAnswer: 0,
            explanation: 'The bare plot is the control: comparing every buffer width against it shows how much nitrate the vegetation actually removed. The dependent variable is the nitrate concentration, not a plot.'
          },
          {
            question: 'A town has room for either a 10 m or a 20 m buffer along its creek. Based on the data, which statement best supports choosing 10 m?',
            options: [
              'Doubling the width to 20 m lowers nitrate by only 1.2 more mg/L',
              'The 10 m strip removes all nitrate in water that reaches the creek',
              'Wider strips raise nitrate because plants release nitrogen as they grow',
              'The 20 m strip removes less nitrate than the 5 m strip does'
            ],
            correctAnswer: 0,
            explanation: 'Going from 10 to 20 m cut nitrate only from 4.8 to 3.6 mg/L, a small gain for twice the land. The 10 m strip still leaves 4.8 mg/L, and the wider strip did remove more nitrate, not less.'
          }
        ]
      }
    },
    {
      id: 'apesbiog6-scoring',
      type: 'text' as const,
      content: `
## Scoring Reminders

- **Calculate:** write the setup with units, convert kg to tonnes or hectares to square meters **before** multiplying, and label the answer.
- **Percent change:** (new − old) ÷ old × 100, with a sign.
- **Rule of 70:** divide 70 by the rate written as a percent (2.5, not 0.025).
- **Explain eutrophication:** name every link from nutrient to oxygen loss.
- **Propose a solution:** name a specific practice and the cycle process it uses (uptake by plants, denitrification, reduced application).

**Next:** Part 7 ties the four cycles together in one review.
      `
    }
  ]
};
