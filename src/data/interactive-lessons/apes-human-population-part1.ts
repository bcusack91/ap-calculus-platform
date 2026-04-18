export const apesHumanPopulationPart1Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshp1-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 1 of 7 — Growth, Demographics, and the Demographic Transition**

---

## Population Growth

| Metric | Definition | Formula/Value |
|--------|-----------|--------------|
| **Global population** | Current world population | ~8 billion (2024) |
| **Growth rate** | Annual % increase | ~1.0% (declining from peak of 2.1% in 1968) |
| **Doubling time** | Years to double at current rate | Rule of 70: 70 / growth rate (%) |
| **CBR** | Crude birth rate (births per 1,000 people per year) | Varies: ~8 (Japan) to ~40+ (Niger) |
| **CDR** | Crude death rate (deaths per 1,000 per year) | Varies: ~3 (Qatar) to ~15+ (Sierra Leone) |
| **NIR** | Natural increase rate | NIR = CBR - CDR |

> 🔑 **Rule of 70:** Doubling time = 70 / growth rate. If a country grows at 2%/year, it doubles in 35 years.

---

## Demographic Transition Model

| Stage | Birth Rate | Death Rate | Population Growth | Description |
|-------|-----------|-----------|------------------|-----------|
| **1: Pre-industrial** | High | High | Low/stable | Subsistence farming; high infant mortality |
| **2: Transitioning** | High | Declining | Rapid increase | Better sanitation, medicine; births still high |
| **3: Industrial** | Declining | Low | Slowing growth | Education, urbanization, contraception access |
| **4: Post-industrial** | Low | Low | Low/stable | Developed nations; birth rate ~ death rate |
| **5: Decline** | Very low | Low | Negative growth | Below-replacement fertility (Japan, Germany) |
      `
    },
    {
      id: 'apeshp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country has a crude birth rate of 35 and a crude death rate of 10. Using the Rule of 70, what is the approximate doubling time?',
            options: [
              '2 years',
              '28 years',
              '35 years',
              '70 years'
            ],
            correctAnswer: 1,
            explanation: 'Growth rate = (CBR - CDR) / 10 = (35 - 10) / 10 = 2.5%. Doubling time = 70 / 2.5 = 28 years. This rapid doubling is typical of Stage 2 countries.'
          },
          {
            question: 'Which stage of the demographic transition has the FASTEST population growth?',
            options: [
              'Stage 1 (pre-industrial)',
              'Stage 2 (transitioning)',
              'Stage 3 (industrial)',
              'Stage 4 (post-industrial)'
            ],
            correctAnswer: 1,
            explanation: 'Stage 2 has the fastest growth because death rates decline (better medicine, sanitation) while birth rates remain high, creating a large gap between births and deaths.'
          }
        ]
      }
    },
    {
      id: 'apeshp1-content',
      type: 'text' as const,
      content: `
## Age Structure Diagrams

| Shape | Meaning | Example Countries |
|-------|---------|------------------|
| **Expansive (wide base)** | High birth rate; rapid growth | Nigeria, Ethiopia |
| **Stationary (column)** | Birth rate = death rate; stable | United States, France |
| **Constrictive (narrow base)** | Below-replacement fertility; declining | Japan, Germany, Italy |

### Total Fertility Rate (TFR)
- Average number of children per woman
- **Replacement-level fertility:** ~2.1 children per woman (needed to maintain population)
- Sub-Saharan Africa: TFR ~4.5
- Europe: TFR ~1.5 (below replacement)

## Factors Affecting Birth Rates

| Factor | Effect on Birth Rate |
|--------|---------------------|
| **Education (especially women)** | Decreases — most powerful predictor |
| **Access to contraception** | Decreases |
| **Urbanization** | Decreases (children cost more in cities) |
| **Cultural/religious norms** | Can increase or decrease |
| **Government policies** | Can promote or discourage births |
| **Infant mortality** | High infant mortality → higher birth rates |
      `
    },
    {
      id: 'apeshp1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The Rule of 70 states that doubling time equals 70 divided by the _______ rate.

2) Replacement-level fertility is approximately _______ children per woman.

3) The most powerful factor in reducing birth rates is _______ of women.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['growth', '2.1', 'education'],
        hint1: 'The annual percentage increase.',
        hint2: 'Just above 2 to account for infant mortality.',
        hint3: 'Knowledge is power — this demographic factor is most predictive.',
        explanation: 'Rule of 70: doubling time = 70/growth rate. Replacement fertility = ~2.1. Education of women is the strongest predictor of declining birth rates.'
      }
    },
    {
      id: 'apeshp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Scenario** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Japan has a TFR of 1.3 and an aging population. Its age structure diagram is ___',
            options: ['Constrictive (narrow base)', 'Expansive (wide base)', 'Stationary (column)', 'Irregular']
          },
          {
            label: 'A country with high birth rates AND high death rates and slow growth is in Stage ___',
            options: ['Stage 1 (pre-industrial)', 'Stage 2 (transitioning)', 'Stage 3 (industrial)', 'Stage 4 (post-industrial)']
          },
          {
            label: 'A country growing at 1% per year will double its population in approximately ___ years',
            options: ['70 years', '35 years', '100 years', '10 years']
          }
        ],
        correctAnswers: ['Constrictive (narrow base)', 'Stage 1 (pre-industrial)', '70 years'],
        hint1: 'Below-replacement fertility = fewer young people.',
        hint2: 'Both rates are high, so growth is minimal.',
        hint3: '70 / 1 = ?',
        explanation: 'Japan = constrictive (TFR below 2.1). High birth + high death = Stage 1. 70/1 = 70 years doubling time.'
      }
    },
    {
      id: 'apeshp1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Human Population

- **Rule of 70 calculations** appear frequently — practice dividing 70 by various growth rates
- Know how to read and interpret age structure diagrams — what shape means what
- The demographic transition model is one of the most tested concepts in APES
- **Stage 2 = fastest growth** (death rates drop but birth rates remain high)
- Know that educating women is the single most effective way to reduce fertility rates
- Understand that some countries (Japan, Germany) face challenges from declining populations (aging workforce, pension funding)
      `
    },
    {
      id: 'apeshp1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A developing country invests heavily in rural health clinics and childhood vaccinations. In the short term, this will MOST likely cause the country to move from:',
            options: [
              'Stage 1 to Stage 2 (death rates drop while birth rates stay high)',
              'Stage 2 to Stage 4 (immediate stabilization)',
              'Stage 4 to Stage 5 (population decline)',
              'Stage 3 to Stage 1 (regression)'
            ],
            correctAnswer: 0,
            explanation: 'Improving healthcare reduces death rates (especially infant mortality) while birth rates remain high in the short term, causing rapid population growth characteristic of Stage 2.'
          },
          {
            question: 'Two countries each have 10 million people. Country A grows at 1% per year and Country B at 3% per year. After 70 years, Country B will have approximately:',
            options: [
              'The same population as Country A',
              'Twice the population of Country A',
              'Four times the population of Country A',
              'Eight times the population of Country A'
            ],
            correctAnswer: 2,
            explanation: 'Country A: doubles once in 70 years (70/1) = 20M. Country B: doubles every ~23 years (70/3), so 3 doublings in 70 years = 10M → 20M → 40M → 80M. 80M/20M = 4 times as large.'
          }
        ]
      }
    }
  ]
};
