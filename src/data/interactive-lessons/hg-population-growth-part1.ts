export const hgPopulationGrowthPart1Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpop1-intro',
      type: 'text' as const,
      content: `
# 🌍 Population & Growth Patterns

**Part 1 of 7 — Understanding Global Population Dynamics**

---

## Key Population Measures

| Measure | Definition | Formula |
|---------|-----------|---------|
| **Crude Birth Rate (CBR)** | Births per 1,000 people per year | (Births / Total Pop) × 1,000 |
| **Crude Death Rate (CDR)** | Deaths per 1,000 people per year | (Deaths / Total Pop) × 1,000 |
| **Rate of Natural Increase (RNI)** | Annual population growth from births vs deaths | (CBR − CDR) / 10 = % |
| **Total Fertility Rate (TFR)** | Average children per woman over her lifetime | Typically 1.0–7.0 |
| **Infant Mortality Rate (IMR)** | Deaths of infants < 1 year per 1,000 live births | Key development indicator |
| **Doubling Time** | Years for population to double | ~70 / RNI% |

> 🔑 **AP Key Point:** RNI does NOT include migration. Net migration must be added separately for total population change.

---

## The Demographic Transition Model (DTM)

The DTM explains how countries move from high birth/death rates to low birth/death rates through **4 (or 5) stages**:

| Stage | CBR | CDR | RNI | Characteristics | Example |
|-------|-----|-----|-----|----------------|---------|
| **1** | High | High | ~0% | Pre-industrial; disease, famine | No modern countries |
| **2** | High | **Falling** | **High** | Improved sanitation, medicine | Sub-Saharan Africa |
| **3** | **Falling** | Low | Moderate | Urbanization, education, contraception | India, Brazil |
| **4** | Low | Low | ~0% | Post-industrial; gender equity | USA, France |
| **5** | **Very low** | Low | **Negative** | Below-replacement TFR (<2.1) | Japan, Germany |
      `
    },
    {
      id: 'hgpop1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Stage 2 of the Demographic Transition Model, population grows rapidly because:',
            options: [
              'CBR and CDR are both declining at equal rates',
              'CDR drops sharply while CBR remains high',
              'CBR increases rapidly due to government incentives',
              'Immigration exceeds emigration'
            ],
            correctAnswer: 1,
            explanation: 'Stage 2 is characterized by a sharp decline in CDR (due to improved medicine, sanitation, food supply) while CBR stays high — creating a large gap and rapid natural increase.'
          },
          {
            question: 'A country has a CBR of 32 and CDR of 8. Its Rate of Natural Increase is:',
            options: [
              '0.24%',
              '2.4%',
              '24%',
              '4.0%'
            ],
            correctAnswer: 1,
            explanation: 'RNI = (CBR − CDR) / 10 = (32 − 8) / 10 = 2.4%. Its doubling time would be approximately 70 / 2.4 ≈ 29 years.'
          },
          {
            question: 'Which stage of the DTM is associated with below-replacement fertility (TFR < 2.1)?',
            options: [
              'Stage 2',
              'Stage 3',
              'Stage 4',
              'Stage 5'
            ],
            correctAnswer: 3,
            explanation: 'Stage 5 features TFR well below replacement level (2.1), leading to population decline. Countries like Japan, South Korea, and Italy are experiencing this.'
          }
        ]
      }
    },
    {
      id: 'hgpop1-content',
      type: 'text' as const,
      content: `
## Population Pyramids

Population pyramids (age-sex diagrams) visually represent a country's age and gender structure:

| Shape | Stage | What It Tells You |
|-------|-------|------------------|
| **Wide base, narrow top** | Stage 2 | High birth rates, low life expectancy, rapid growth |
| **Rectangular / column** | Stage 4 | Low birth & death rates, stable population |
| **Inverted / top-heavy** | Stage 5 | Aging population, declining births, potential shrinkage |
| **Bulge in middle** | Varies | Baby boom generation or large working-age cohort |

### Dependency Ratio

The dependency ratio measures the proportion of non-working-age population (under 15 and over 64) to working-age population (15–64), multiplied by 100.

- **High youth dependency** → need schools, healthcare for children (Stage 2-3 countries)
- **High elderly dependency** → need pensions, elder care (Stage 4-5 countries)
      `
    },
    {
      id: 'hgpop1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The model that describes the transition from high birth/death rates to low birth/death rates is called the Demographic _______ Model.

2) A TFR below 2.1 is called _______-replacement fertility.

3) The approximate doubling time for a population with 2% growth is _______ years.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Transition', 'below', '35'],
        hint1: 'Four-to-five stage model of population change.',
        hint2: 'Fertility is too low to maintain population size.',
        hint3: 'Doubling time ≈ 70 / growth rate.',
        explanation: 'The Demographic Transition Model describes stages of population change. Below-replacement = TFR < 2.1. Doubling time = 70/2 = 35 years.'
      }
    },
    {
      id: 'hgpop1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the DTM Stage** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Japan has a TFR of 1.3, aging population, and declining total population. This is ___',
            options: ['Stage 5', 'Stage 4', 'Stage 3', 'Stage 2']
          },
          {
            label: 'Nigeria has a CBR of 36, CDR of 12, and rapid population growth. This is ___',
            options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5']
          },
          {
            label: 'A population pyramid with a very wide base tapering sharply indicates ___',
            options: ['High birth rate with low life expectancy', 'Low birth rate with high life expectancy', 'Equal birth and death rates', 'An aging population']
          }
        ],
        correctAnswers: ['Stage 5', 'Stage 2', 'High birth rate with low life expectancy'],
        hint1: 'Below-replacement TFR and population decline.',
        hint2: 'High CBR + rapidly falling CDR = rapid growth.',
        hint3: 'Lots of young people, few old people.',
        explanation: 'Japan = Stage 5 (below-replacement fertility). Nigeria = Stage 2 (high CBR, falling CDR). Wide-base pyramid = many children, few elderly.'
      }
    },
    {
      id: 'hgpop1-strategy',
      type: 'text' as const,
      content: `
## Malthus vs. Modern Population Theory

| Thinker | Argument |
|---------|---------|
| **Thomas Malthus** (1798) | Population grows geometrically; food grows arithmetically → inevitable famine |
| **Ester Boserup** | Necessity is the mother of invention — population pressure drives agricultural innovation |
| **Neo-Malthusians** | Earth has carrying capacity limits (resources, climate, water) |
| **Cornucopians** | Technology and human ingenuity will always find solutions |

### AP Exam Strategies for Population Questions

- Always identify the **DTM stage** first — it frames everything else
- RNI does NOT include migration — read carefully
- "Natural increase" vs "total growth" — know the difference
- Population pyramids: read the SHAPE, not just the numbers
- Know anti-natalist (China one-child) vs pro-natalist (France child subsidies) policies
      `
    },
    {
      id: 'hgpop1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country X has a CBR of 12, CDR of 14, and a net immigration rate of 5 per 1,000. Country X total population is:',
            options: [
              'Increasing, because immigration offsets natural decrease',
              'Decreasing, because CDR exceeds CBR',
              'Stable, because births equal deaths',
              'Cannot be determined from this data'
            ],
            correctAnswer: 0,
            explanation: 'Natural change = CBR minus CDR = 12 minus 14 = negative 2 per 1,000. But net immigration = +5 per 1,000. Total change = negative 2 + 5 = +3 per 1,000. Population is increasing.'
          },
          {
            question: 'Ester Boserup would most likely respond to Malthus by arguing that:',
            options: [
              'Population growth will inevitably outpace food production',
              'Population pressure stimulates innovation and intensification of agriculture',
              'Governments must limit population growth through strict policy',
              'Resource depletion is unavoidable regardless of technology'
            ],
            correctAnswer: 1,
            explanation: 'Boserup argued that population growth DRIVES agricultural innovation — people find new techniques (irrigation, terracing, fertilizers) when they need to feed more people.'
          }
        ]
      }
    }
  ]
};
