export const apesEarthSystemsPart6Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeseart6-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 Free-Response Practice: A Coastal Watershed |
| Model Answers |
| Designing an Investigation: Soil Infiltration |

> 🔑 **Key Concept:** Unit 4 free-response questions usually combine several topics in one place: a watershed on one side of a mountain range, under a particular wind belt, during an El Niño year. This part practices that kind of multi-step question, with full calculations.

## 📖 Free-Response Practice: A Coastal Watershed

The **Riverton watershed** covers **120 $km^{2}$** on the western, ocean-facing slopes of a coastal mountain range at about 35° N. Over the past 30 years, much of the valley floor has been developed.

| Measure | 1995 | 2025 |
|---|---|---|
| Impervious surface (roofs, roads, parking) | 8% of area | 30% of area |
| Fraction of storm rainfall that becomes runoff | 0.15 | 0.35 |
| Cleared hillside (for new housing) | 0 ha | 50 ha |
| Measured erosion on cleared hillside | | 8 tonnes/ha/yr |

**Questions**

(a) **Identify** the prevailing wind belt that brings moist air to this watershed, and **explain** why its western slopes receive more precipitation than the land east of the range.

(b) **Calculate** the volume of runoff, in $m^{3}$, produced by a 4.0 cm storm in 2025.

(c) **Calculate** the percent change in the fraction of rainfall that becomes runoff from 1995 to 2025.

(d) **Calculate** the total soil lost from the cleared hillside each year, in tonnes.

(e) Winters during strong El Niño events are often wetter than normal along the coast of central and southern California. **Explain** how a strong El Niño winter combined with the 2025 land use could affect flooding in Riverton.

(f) **Propose** one solution that would reduce storm runoff in the developed valley, and **describe** how it works.
      `
    },
    {
      id: 'apeseart6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) (b) Runoff volume from the 4.0 cm storm in 2025, in **millions** of $m^{3}$:

2) (c) Percent change in the runoff fraction, to the nearest whole percent:

3) (d) Soil lost from the cleared hillside each year, in tonnes:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.68', '133', '400'],
        hint1: 'Rain volume = 0.040 m × 120,000,000 m². Then multiply by 0.35.',
        hint2: '(0.35 − 0.15) ÷ 0.15 × 100.',
        hint3: 'Rate × area: 8 tonnes per hectare × 50 hectares.',
        explanation: '(b) 0.040 m × 1.2 × 10^8 m² = 4.8 × 10^6 m³ of rain; × 0.35 = 1.68 × 10^6 m³. (c) 0.20 ÷ 0.15 × 100 ≈ 133 percent. (d) 8 × 50 = 400 tonnes per year.'
      }
    },
    {
      id: 'apeseart6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** The **westerlies** (prevailing winds from about 30° to 60° latitude) carry moist air off the Pacific. As the air is forced up the western (**windward**) slopes, it expands and cools, water vapor condenses and precipitation falls. East of the crest, the air descends, warms and is dry, creating a **rain shadow**.

**(b)**
1. Depth: $4.0\\ \\text{cm} = 0.040\\ \\text{m}$
2. Area: $120\\ km^{2} \\times 10^{6}\\ m^{2}/km^{2} = 1.2 \\times 10^{8}\\ m^{2}$
3. Rain volume: $0.040 \\times 1.2 \\times 10^{8} = 4.8 \\times 10^{6}\\ m^{3}$
4. Runoff: $4.8 \\times 10^{6} \\times 0.35 = 1.68 \\times 10^{6}\\ m^{3}$

**(c)** $\\dfrac{0.35 - 0.15}{0.15} \\times 100 \\approx +133\\%$

**(d)** $8\\ \\text{t/ha/yr} \\times 50\\ \\text{ha} = 400\\ \\text{t/yr}$

**(e)** El Niño would bring **more rainfall**, and the larger impervious area means a **larger share** of that rain runs off instead of infiltrating. Runoff also reaches the streams **faster**, so flood peaks would be higher and stream-bank erosion and sediment from the cleared hillside would increase.

**(f)** Install **permeable pavement** in parking lots: its open pores let rainwater soak through to a gravel bed and the soil below, increasing infiltration and reducing the volume and speed of runoff. (Also acceptable: rain gardens, green roofs, retention ponds, restoring riparian wetlands, replanting the cleared hillside.)

> 🔑 **AP Connection:** In part (e), the scoring point is the **link** between the two causes: more rain AND a higher runoff fraction. Naming only one earns partial reasoning at best.
      `
    },
    {
      id: 'apeseart6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯

Use the Riverton data.
      `,
      exercise: {
        questions: [
          {
            question: 'If the 4.0 cm storm had fallen in 1995 instead, how much runoff would it have produced?',
            options: [
              '$7.2 \\times 10^{5}\\ m^{3}$',
              '$1.68 \\times 10^{6}\\ m^{3}$',
              '$4.8 \\times 10^{6}\\ m^{3}$',
              '$7.2 \\times 10^{4}\\ m^{3}$'
            ],
            correctAnswer: 0,
            explanation: 'The rain volume is the same, 4.8 × 10^6 cubic meters, and the 1995 runoff fraction was 0.15, giving 7.2 × 10^5 cubic meters. The value 1.68 × 10^6 is the 2025 runoff.'
          },
          {
            question: 'Which statement is best supported by the data table?',
            options: [
              'Runoff fraction rose as the impervious surface area increased',
              'Erosion on the hillside was higher in 1995 than in 2025',
              'Total yearly rainfall more than doubled between the two years',
              'Impervious surface now covers most of the Riverton watershed'
            ],
            correctAnswer: 0,
            explanation: 'Impervious cover rose from 8 to 30 percent while the runoff fraction rose from 0.15 to 0.35. The table gives no rainfall totals, the hillside was not cleared in 1995, and 30 percent is less than most of the area.'
          },
          {
            question: 'Land east of the coastal range receives far less rain than Riverton. Which term describes that eastern region?',
            options: [
              'A rain shadow',
              'A windward slope',
              'A divergent zone',
              'An upwelling zone'
            ],
            correctAnswer: 0,
            explanation: 'Air that has dropped its moisture on the windward side descends and warms on the leeward side, producing a dry rain shadow. Upwelling describes ocean water, not land.'
          }
        ]
      }
    },
    {
      id: 'apeseart6-investigation',
      type: 'text' as const,
      content: `
## Designing an Investigation: Soil Infiltration

**Prompt:** A student hypothesizes that soil under lawns in Riverton absorbs water more slowly than soil under undisturbed forest. Design an investigation.

| Element | Model response |
|---|---|
| **Hypothesis** | If soil is under a compacted lawn, then its infiltration rate will be lower than forest soil, because compaction reduces pore space. |
| **Independent variable** | Land cover at the test site (lawn or forest) |
| **Dependent variable** | Infiltration rate, in cm/hr |
| **Controlled variables** | Same cylinder size, same volume of water poured, same soil texture class, tests run on the same dry day |
| **Replication** | At least five test sites in each land cover, averaged |

### Interpreting results

| Land cover | Mean time for 5 cm of water to drain |
|---|---|
| Forest | 6 minutes |
| Lawn | 40 minutes |

Convert each to cm/hr:

1. Forest: $\\dfrac{5\\ \\text{cm}}{6\\ \\text{min}} \\times 60\\ \\text{min/hr} = 50\\ \\text{cm/hr}$
2. Lawn: $\\dfrac{5\\ \\text{cm}}{40\\ \\text{min}} \\times 60\\ \\text{min/hr} = 7.5\\ \\text{cm/hr}$
3. Percent difference relative to forest: $\\dfrac{7.5 - 50}{50} \\times 100 = -85\\%$

The data support the hypothesis.
      `
    },
    {
      id: 'apeseart6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the infiltration investigation, why should every test site have the same soil texture class?',
            options: [
              'So that any difference in drainage speed can be traced to the land cover',
              'So that the land cover can serve as the dependent variable of the study',
              'So that the student needs fewer replicate sites in each land cover',
              'So that compaction can be avoided at both the lawn and forest sites'
            ],
            correctAnswer: 0,
            explanation: 'Texture strongly affects infiltration, so it must be held constant for land cover to be the only factor being tested. Land cover is the independent variable, not the dependent one.'
          },
          {
            question: 'Which result would weaken the student\'s conclusion?',
            options: [
              'The lawn sites were tested right after a heavy rain, but the forest sites were dry',
              'Lawn sites averaged 7.5 cm per hour and forest sites 50 cm per hour',
              'Both land covers were tested with the same cylinder and the same volume of water',
              'Five test sites were averaged within each type of land cover'
            ],
            correctAnswer: 0,
            explanation: 'Wet soil absorbs water more slowly than dry soil, so the slow lawn rate could reflect wet soil rather than compaction; moisture became a confounding variable. The other choices describe the planned data and good controls.'
          }
        ]
      }
    }
  ]
};
