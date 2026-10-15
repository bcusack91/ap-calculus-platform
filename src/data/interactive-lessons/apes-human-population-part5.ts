export const apesHumanPopulationPart5Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshuma5-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 5 of 7 — The Demographic Transition in Depth**

---

| Section |
|---------|
| 📖 Why the Rates Change in Each Stage |
| Population Size Versus Environmental Impact |
| Limits of the Model |
| Common Misconceptions |

> 🔑 **Key Concept:** Part 1 gave the stage table. This part explains the **causes** behind each stage, which is what FRQs ask for. The demographic transition is the shift from high birth and death rates to low birth and death rates as a country moves from a preindustrial to an industrialized economy. The AP course describes it with a four-stage model; some textbooks add a fifth stage in which births fall below deaths.
      `
    },
    {
      id: 'apeshuma5-stages',
      type: 'text' as const,
      content: `
## 📖 Why the Rates Change in Each Stage

| Stage | Death rate, and why | Birth rate, and why | Growth |
|---|---|---|---|
| **1 Preindustrial** | High: famine, infectious disease, unsafe water, no modern medicine | High: children work on farms, many die young, no access to contraception | Slow; births and deaths nearly balance |
| **2 Transitional** | Falls fast: clean water, sanitation, vaccines, antibiotics, steadier food supply | Stays high: cultural norms and family-size expectations lag behind the drop in deaths | **Fastest**; the gap between births and deaths is widest |
| **3 Industrial** | Keeps falling, then levels off | Falls: urbanization makes children costly, women gain education and jobs, contraception spreads, infant mortality is low | Slowing |
| **4 Postindustrial** | Low; may rise slightly as the population ages | Low; TFR near or below replacement | Near zero |

Two ideas tie the table together:

1. **Deaths fall before births.** Lowering deaths takes technology (clean water, vaccines) that spreads quickly. Lowering births takes changes in family decisions, which spread slowly. The lag between the two is Stage 2.
2. **An aging population raises the crude death rate.** A Stage 4 country can have a CDR of 10 or more even though its people live long lives, simply because a large share of them are old. A young Stage 2 country can have a lower CDR.

### Worked Example 1: Classifying Countries From Data

Three countries (illustrative data), rates per 1,000:

| Country | CBR | CDR | Natural increase (%) | Stage |
|---|---|---|---|---|
| H | 41 | 34 | (41 − 34) ÷ 10 = 0.7 | 1: both rates high |
| J | 38 | 9 | (38 − 9) ÷ 10 = 2.9 | 2: deaths low, births still high |
| K | 10 | 11 | (10 − 11) ÷ 10 = −0.1 | 4 (or 5): both low; deaths now exceed births |

**Step 1.** Look at the death rate. High means Stage 1; low means Stage 2 or later.
**Step 2.** Look at the birth rate. High with low deaths is Stage 2; falling is Stage 3; low is Stage 4.
**Step 3.** Confirm with the growth rate. The largest gap marks Stage 2.
      `
    },
    {
      id: 'apeshuma5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What causes the death rate to fall sharply in Stage 2 of the demographic transition?',
            options: [
              'Women gain better access to education and contraception',
              'Clean water, sanitation and vaccines reduce disease',
              'Most families move from farms into factory towns',
              'The share of older people in the population shrinks'
            ],
            correctAnswer: 1,
            explanation: 'Clean water, sanitation, vaccines and a steadier food supply cut deaths from infectious disease, especially among children. Education and contraception lower the birth rate, which happens later, in Stage 3.'
          },
          {
            question: 'Why does the birth rate stay high during Stage 2 even after the death rate drops?',
            options: [
              'Family-size norms change more slowly than death rates',
              'Governments in Stage 2 usually require large families',
              'Falling death rates cause families to want more children',
              'Industrial jobs pay parents for each child they have'
            ],
            correctAnswer: 0,
            explanation: 'Medicine and sanitation spread quickly, but decisions about family size depend on culture, women\'s education and trust that children will survive, which change over a generation. That lag creates the Stage 2 gap.'
          },
          {
            question: 'A country (illustrative data) has a CBR of 9 and a CDR of 12. Which stage of the demographic transition does it most likely show?',
            options: [
              'Stage 1',
              'Stage 2',
              'Stage 3',
              'Stage 4'
            ],
            correctAnswer: 3,
            explanation: 'Both rates are low and deaths slightly exceed births, which fits the final stage of the four-stage model (the extra Stage 5 in some textbooks). Its relatively high death rate comes from an aging population, not from poor health care.'
          }
        ]
      }
    },
    {
      id: 'apeshuma5-impact',
      type: 'text' as const,
      content: `
## Population Size Versus Environmental Impact

Environmental impact depends on **how many people there are** and **how much each person consumes**. Stage 4 countries grow slowly but consume far more per person: more energy, more meat, more manufactured goods, more waste.

### Worked Example 2: Total Footprint

An **ecological footprint** is the area of productive land and water needed to supply a person's resources and absorb their wastes, measured in global hectares (gha).

| Country (illustrative data) | Stage | Population | Footprint per person | Total footprint |
|---|---|---|---|---|
| L | 2 | 100 million | 1.5 gha | 150 million gha |
| M | 4 | 50 million | 6.0 gha | 300 million gha |

**Step 1.** Multiply population by footprint per person for each country.
**Step 2.** Compare: Country M has half the people but twice the total footprint.
**Step 3.** Project: if Country L grows at 2.8% per year, it doubles in 70 ÷ 2.8 = 25 years, reaching 200 million people and 300 million gha at today's consumption. If its consumption per person also rises as it develops, its footprint grows even faster.

| Stage | Main environmental pressure |
|---|---|
| 1–2 | Clearing land for farms and fuelwood; soil erosion; pressure on local water |
| 3 | Rapid urbanization, industrial air and water pollution, rising energy use |
| 4 | High per-capita energy use, greenhouse gas emissions, consumer waste |

> 🔑 **AP Connection:** If asked whether a slow-growing developed country or a fast-growing developing country has a larger environmental impact, the strongest answers mention both population **and** per-capita consumption, and back the claim with numbers when data are given.
      `
    },
    {
      id: 'apeshuma5-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) Country N (illustrative data) has a CBR of 36 and a CDR of 8. What is its rate of natural increase, in percent?

2) What is Country N's doubling time in years?

3) Country P (illustrative data) has 30 million people with a footprint of 5 gha per person. What is its total footprint, in millions of gha?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.8', '25', '150'],
        hint1: 'Subtract CDR from CBR, then divide by 10.',
        hint2: 'Divide 70 by the growth rate in percent.',
        hint3: 'Multiply the population in millions by the footprint per person.',
        explanation: '1) (36 − 8) ÷ 10 = 2.8%. 2) 70 ÷ 2.8 = 25 years. 3) 30 million × 5 gha = 150 million gha.'
      }
    },
    {
      id: 'apeshuma5-limits',
      type: 'text' as const,
      content: `
## Limits of the Model

The demographic transition model is a generalization, not a law. Know these limits:

| Limit | Explanation |
|---|---|
| **Based on European history** | It describes what happened in Western Europe and North America during industrialization in the 1700s to 1900s. Other countries may not follow the same path or timing. |
| **Ignores migration** | The model tracks only births and deaths. Immigration can keep a Stage 4 country growing, and emigration can shrink a Stage 2 country. |
| **Faster today** | Death rates in today's developing countries fell in decades, not centuries, because vaccines and antibiotics arrived ready-made. Stage 2 growth was therefore steeper than Europe's ever was. |
| **Countries can stall** | Some countries have stayed in Stage 2 or 3 for decades, with falling deaths but persistently high births, often where poverty, low female education and limited contraception persist. |
| **Death rates can rise again** | HIV/AIDS raised death rates in several southern African countries in the 1990s and 2000s, reversing progress. |
| **No clear endpoint** | The original model did not predict that births would fall below deaths, which is now happening in Japan, Italy and South Korea. |

### Common misconceptions

| Misconception | Correction |
|---|---|
| "A falling growth rate means the population is shrinking." | A growth rate that falls from 2% to 1% is still positive; the population still grows, just more slowly. World growth fell from about 2.1% in the late 1960s to about 0.9% today, yet the population keeps rising. |
| "When TFR reaches replacement, growth stops." | Population momentum keeps a young population growing for decades (Part 2). |
| "Stage 1 has the most growth because birth rates are highest." | Stage 2 grows fastest because deaths have fallen while births remain high. |
| "A high death rate means poor health care." | Aging Stage 4 countries can have higher crude death rates than young Stage 2 countries. |
| "Developed countries have little environmental impact because they grow slowly." | High per-capita consumption can give them larger total footprints. |
      `
    },
    {
      id: 'apeshuma5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'World population growth fell from about 2.1% per year in the late 1960s to about 0.9% per year today. What do these data show?',
            options: [
              'World population is now smaller than it was in 1970',
              'World population is still rising, but more slowly',
              'World population has stopped changing from year to year',
              'World population has started to decline in most regions'
            ],
            correctAnswer: 1,
            explanation: 'A positive growth rate, even a falling one, still adds people every year. The population would shrink only if the growth rate fell below zero.'
          },
          {
            question: 'Country L (illustrative data) has 100 million people with a footprint of 1.5 gha each. Country M has 50 million people with a footprint of 6.0 gha each. Which comparison is correct?',
            options: [
              'Country M\'s total footprint is twice that of Country L',
              'Country L\'s total footprint is twice that of Country M',
              'The two countries have the same total footprint',
              'Country M\'s total footprint is four times that of Country L'
            ],
            correctAnswer: 0,
            explanation: 'Country L: 100 million × 1.5 = 150 million gha. Country M: 50 million × 6.0 = 300 million gha, twice as much. Comparing only footprint per person (6.0 ÷ 1.5) gives four times, which ignores the population difference.'
          },
          {
            question: 'Which is a recognized limitation of the demographic transition model?',
            options: [
              'It is drawn from the history of European nations',
              'It leaves out changes in the death rate over time',
              'It treats birth rates as constant in every stage',
              'It applies only to countries that never industrialize'
            ],
            correctAnswer: 0,
            explanation: 'The model was built from the experience of Western Europe and North America, so other countries may not follow its path or timing. It does track changing death and birth rates; what it leaves out is migration.'
          }
        ]
      }
    },
    {
      id: 'apeshuma5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Stage 1 | High births (farm labor, high IMR) and high deaths (disease, famine); slow growth |
| Stage 2 | Deaths fall (water, sanitation, vaccines); births lag; fastest growth |
| Stage 3 | Births fall (urbanization, women's education, contraception) |
| Stage 4 | Both low; aging can push CDR above a young country's |
| Impact | Population × per-capita consumption; Stage 4 countries can have the largest totals |
| Limits | European-based, ignores migration, faster today, countries can stall, no built-in endpoint |
| Misconception | A falling growth rate is not a falling population |

**Next:** Part 6 puts everything together in AP exam-style practice built around a three-country data set.
      `
    }
  ]
};
