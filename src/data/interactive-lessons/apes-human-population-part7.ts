export const apesHumanPopulationPart7Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshuma7-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Topic on One Page |
| Calculations Recap |
| Mixed Review |

> 🔑 **Key Concept:** Every idea in this topic connects through one chain: **fertility** sets the width of the base, the **age structure** sets future births and momentum, births, deaths and migration set the **growth rate**, and development moves a country through the **demographic transition**, which changes both its growth and its environmental impact.
      `
    },
    {
      id: 'apeshuma7-summary-table',
      type: 'text' as const,
      content: `
## 📖 The Whole Topic on One Page

| CED topic | Core idea | Must-know facts |
|---|---|---|
| 3.6 Age structure diagrams | Shape predicts growth | Cohorts 0–14, 15–44, 45+; wide base = growth, column = stable, narrow base = decline; momentum; baby-boom bulges move up over time |
| 3.7 Total fertility rate | Fertility sets the base | TFR = lifetime children per woman; replacement about 2.1 (higher where child mortality is high); IMR per 1,000 live births; women's education is the strongest lever |
| 3.8 Human population dynamics | Four processes, one rate | Growth % = [(CBR + immigration) − (CDR + emigration)] ÷ 10; rule of 70; Malthus (1798) and its critique; density-dependent vs density-independent factors |
| 3.9 Demographic transition | Development changes rates | Stage 1 high/high; Stage 2 deaths fall, fastest growth; Stage 3 births fall; Stage 4 low/low; model is based on European history and ignores migration |

### How the pieces connect

| If you see ... | Think ... |
|---|---|
| High IMR and low female education | High TFR, wide base, Stage 2 |
| TFR at replacement but 40% under 15 | Momentum: growth continues for decades |
| CDR higher than CBR but population rising | Net immigration |
| High CDR with low IMR | An old population, not poor health care (Stage 4) |
| Slow growth with high per-capita consumption | Large total footprint despite few new people |

### The world today

World population is about 8.2 billion (2025) and growing about 0.9% per year, with a global TFR of about 2.2 to 2.3. The UN (World Population Prospects 2024) projects a peak of about 10.3 billion in the 2080s. Growth is concentrated in sub-Saharan Africa, while much of Europe and East Asia is aging and some countries are already shrinking.
      `
    },
    {
      id: 'apeshuma7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country has a high infant mortality rate, and few of its women complete secondary school. Which pair of characteristics would you most expect to find there?',
            options: [
              'A wide-based age structure and a high TFR',
              'A column-shaped age structure and a TFR near 2.1',
              'A narrow-based age structure and a low TFR',
              'A top-heavy age structure and a falling population'
            ],
            correctAnswer: 0,
            explanation: 'High infant mortality and low female education both raise fertility, which produces many children and a wide base. Column and narrow-based shapes go with fertility near or below replacement.'
          },
          {
            question: 'A country\'s CDR is 12 per 1,000 and its IMR is 3 per 1,000 live births. What best explains the relatively high CDR?',
            options: [
              'Frequent outbreaks of waterborne disease',
              'A large share of elderly residents',
              'Poor access to doctors and hospitals',
              'Many deaths from famine and drought'
            ],
            correctAnswer: 1,
            explanation: 'A very low IMR shows good health care, so the high crude death rate reflects an aging population: many elderly people die each year even when life expectancy is long. Disease, poor medical care and famine would also raise IMR.'
          },
          {
            question: 'Which statement about the demographic transition model is accurate?',
            options: [
              'Growth is fastest in Stage 1, when birth rates are highest',
              'Growth is fastest in Stage 2, when deaths fall but births stay high',
              'Growth is fastest in Stage 3, when birth rates begin to fall',
              'Growth is fastest in Stage 4, when both rates are at their lowest'
            ],
            correctAnswer: 1,
            explanation: 'In Stage 2 the death rate has fallen while the birth rate is still high, so the gap between them, and therefore growth, is largest. In Stage 1 high deaths offset high births.'
          }
        ]
      }
    },
    {
      id: 'apeshuma7-formulas',
      type: 'text' as const,
      content: `
## Calculations Recap

| Quantity | Formula | Watch out for |
|---|---|---|
| Cohort share | cohort ÷ total × 100 | Post-reproductive includes every group 45 and older |
| Dependency ratio | (0–14 + 65+) ÷ (15–64) × 100 | Working age here is 15–64, not 15–44 |
| CBR or CDR | births or deaths ÷ population × 1,000 | Per 1,000, not percent |
| IMR | infant deaths ÷ live births × 1,000 | Divide by live births, not population |
| TFR | sum of births per woman across age bands | It is per woman, not per 1,000 people |
| Growth rate (%) | [(CBR + immigration) − (CDR + emigration)] ÷ 10 | Include migration whenever it is given |
| Doubling time | 70 ÷ growth rate (%) | Use 2, not 0.02 |
| Future population | initial × 2 raised to the number of doublings | Count doublings first |
| Total footprint | population × footprint per person | Compare totals, not per-person values |

### Worked Example: One Country, Every Formula

Country U (illustrative data): 20 million people; 560,000 births, 160,000 deaths, 40,000 immigrants and 80,000 emigrants in one year; 2,800 deaths of infants under age 1.

**Step 1. Rates per 1,000.** CBR = 560,000 ÷ 20,000,000 × 1,000 = 28. CDR = 8. Immigration = 2. Emigration = 4.

**Step 2. Growth rate.** [(28 + 2) − (8 + 4)] ÷ 10 = 18 ÷ 10 = 1.8%.

**Step 3. Doubling time.** 70 ÷ 1.8 ≈ 39 years.

**Step 4. IMR.** 2,800 ÷ 560,000 × 1,000 = 5 per 1,000 live births.

**Step 5. Interpret.** A low IMR of 5 with a CBR still at 28 suggests deaths have fallen and births are falling more slowly: late Stage 2 or Stage 3. Net emigration slightly reduces growth below the natural increase of 2.0%.
      `
    },
    {
      id: 'apeshuma7-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Country V (illustrative data) has 10 million people. In one year it records 300,000 births, 100,000 deaths, 30,000 immigrants, 10,000 emigrants and 4,500 deaths of infants under age 1. Enter numbers only.

1) What is Country V's growth rate, in percent, including migration?

2) What is Country V's infant mortality rate per 1,000 live births?

3) What is Country V's doubling time, in years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.2', '15', '31.8'],
        hint1: 'Net change = 300,000 + 30,000 − 100,000 − 10,000. Divide by the population and multiply by 100.',
        hint2: 'Divide infant deaths by births (not by the population), then multiply by 1,000.',
        hint3: 'Divide 70 by your growth rate. Round to one decimal place.',
        explanation: '1) 220,000 ÷ 10,000,000 × 100 = 2.2%. 2) 4,500 ÷ 300,000 × 1,000 = 15 per 1,000 live births. 3) 70 ÷ 2.2 ≈ 31.8 years.'
      }
    },
    {
      id: 'apeshuma7-review',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population pyramid shows a bulge at ages 40–49 in 2025. Where will that bulge be in 2045, and what will the country most need then?',
            options: [
              'At ages 60–69; growing pension and health-care costs',
              'At ages 40–49; more jobs for workers in mid-career',
              'At ages 20–29; more housing for young families',
              'At ages 80–89; more nursing homes for the very old'
            ],
            correctAnswer: 0,
            explanation: 'Add 20 years to both ends of the range: 40–49 becomes 60–69, the ages at which people retire and need more health care. A bulge never stays at the same ages or moves down.'
          },
          {
            question: 'Which situation is an example of a density-dependent factor affecting a human population?',
            options: [
              'A tsunami floods a coastal fishing village',
              'Tuberculosis spreads quickly in crowded slums',
              'A heat wave strikes a lightly settled farming region',
              'A volcanic eruption buries several towns'
            ],
            correctAnswer: 1,
            explanation: 'Disease spreads faster where people live close together, so its effect grows with crowding. Tsunamis, heat waves and eruptions harm people whether the area is crowded or not.'
          },
          {
            question: 'A government wants to slow population growth without coercion. Which approach has the strongest evidence of lowering TFR?',
            options: [
              'Offering cash bonuses for each child born',
              'Expanding girls\' education and access to family planning',
              'Lowering the legal minimum age of marriage',
              'Cutting funding for rural health clinics'
            ],
            correctAnswer: 1,
            explanation: 'Educated women marry and have children later, and family planning lets couples choose how many children to have, so both lower TFR. Cash bonuses and earlier marriage raise fertility, and cutting clinics raises infant mortality, which pushes fertility up.'
          },
          {
            question: 'In Malthus\'s model, population grows geometrically while food grows arithmetically. Starting from 1 unit of each, population doubles and food rises by 1 unit every 25 years. What is food per person after 75 years?',
            options: [
              '0.75',
              '0.50',
              '0.25',
              '1.00'
            ],
            correctAnswer: 1,
            explanation: 'After three periods, population is 1 × 2³ = 8 and food is 1 + 3 = 4, so food per person is 4 ÷ 8 = 0.50. The value 0.75 is the result after only two periods.'
          }
        ]
      }
    },
    {
      id: 'apeshuma7-summary',
      type: 'text' as const,
      content: `
## Part 7 Summary

| Big question | Answer in one line |
|---|---|
| What sets future growth? | The age structure, through the size of the pre-reproductive cohort (momentum) |
| What sets fertility? | Women's education and status, family planning, child survival, the cost and value of children, policy |
| How do you compute growth? | [(CBR + immigration) − (CDR + emigration)] ÷ 10; doubling time = 70 ÷ rate |
| Why does growth rise and then fall? | Deaths fall before births in the demographic transition |
| Is there a limit? | Malthus said yes; technology raised the limit; human K depends on consumption |
| Who has the larger impact? | Population × per-capita consumption, so slow-growing rich countries can exceed fast-growing poor ones |

**Next:** You have finished Human Population Dynamics. Review any part whose quiz gave you trouble, then move on to the next topic in your course.
      `
    }
  ]
};
