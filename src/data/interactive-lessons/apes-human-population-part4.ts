export const apesHumanPopulationPart4Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshuma4-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 4 of 7 — Population Dynamics and Calculations**

---

| Section |
|---------|
| 📖 From Counts to Rates: CBR, CDR and Migration |
| Doubling Time and Projections |
| Malthus and Human Carrying Capacity |
| Density-Dependent and Density-Independent Factors |

> 🔑 **Key Concept:** A population changes in only four ways: births, deaths, immigration and emigration. This part turns raw counts into rates, combines the rates into a growth rate, projects that rate forward with the rule of 70, and then asks the big question Malthus raised in 1798: is there a limit to how many people Earth can support?
      `
    },
    {
      id: 'apeshuma4-rates',
      type: 'text' as const,
      content: `
## 📖 From Counts to Rates: CBR, CDR and Migration

Demographers express each process **per 1,000 people per year**, so that countries of different sizes can be compared.

$$\\text{CBR} = \\frac{\\text{births}}{\\text{population}} \\times 1{,}000 \\qquad \\text{CDR} = \\frac{\\text{deaths}}{\\text{population}} \\times 1{,}000$$

Immigration and emigration rates are calculated the same way.

The growth rate as a **percent** combines all four:

$$\\text{Growth rate } (\\%) = \\frac{(\\text{CBR} + \\text{immigration rate}) - (\\text{CDR} + \\text{emigration rate})}{10}$$

Why divide by 10? A rate per 1,000 becomes a rate per 100 (a percent) when you divide by 10. For example, 15 per 1,000 is 1.5 per 100, or 1.5%.

If a question gives no migration data, use only births and deaths. That gives the **rate of natural increase**: (CBR − CDR) ÷ 10.

### Worked Example 1: From Counts to a Growth Rate

Country F (illustrative data) has 25,000,000 people. In one year it records 600,000 births, 200,000 deaths, 75,000 immigrants and 25,000 emigrants.

**Step 1. Convert each count to a rate per 1,000.**

| Process | Calculation | Rate per 1,000 |
|---|---|---|
| Births | 600,000 ÷ 25,000,000 × 1,000 | 24 |
| Deaths | 200,000 ÷ 25,000,000 × 1,000 | 8 |
| Immigration | 75,000 ÷ 25,000,000 × 1,000 | 3 |
| Emigration | 25,000 ÷ 25,000,000 × 1,000 | 1 |

**Step 2. Combine the rates.**

$$\\frac{(24 + 3) - (8 + 1)}{10} = \\frac{18}{10} = 1.8\\%$$

**Step 3. Compare with natural increase.** Without migration: (24 − 8) ÷ 10 = 1.6%. Net immigration adds 0.2 percentage points.

**Step 4. Check with raw counts.** Net change = 600,000 + 75,000 − 200,000 − 25,000 = 450,000 people, and 450,000 ÷ 25,000,000 × 100 = 1.8%. The two methods agree.
      `
    },
    {
      id: 'apeshuma4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Calculate It** 🧮
      `,
      exercise: {
        questions: [
          {
            question: 'A country of 40 million people records 1,000,000 births in a year. What is its crude birth rate?',
            options: [
              '2.5 per 1,000',
              '25 per 1,000',
              '40 per 1,000',
              '250 per 1,000'
            ],
            correctAnswer: 1,
            explanation: '1,000,000 ÷ 40,000,000 × 1,000 = 25 births per 1,000 people. The value 2.5 is the birth rate as a percent, not per 1,000.'
          },
          {
            question: 'A country (illustrative data) has a CBR of 30, a CDR of 10, an immigration rate of 2 and an emigration rate of 6, all per 1,000. What is its annual growth rate?',
            options: [
              '1.8%',
              '2.4%',
              '2.0%',
              '1.6%'
            ],
            correctAnswer: 3,
            explanation: '[(30 + 2) − (10 + 6)] ÷ 10 = 16 ÷ 10 = 1.6%. The value 2.0% is natural increase only, which ignores the net loss of 4 per 1,000 to migration.'
          },
          {
            question: 'Country G\'s population falls by 0.2% in a year even though its births exceed its deaths. Which explanation fits these data?',
            options: [
              'Net emigration is larger than natural increase',
              'Its death rate is higher than its birth rate',
              'Immigration is higher than its emigration',
              'The crude birth rate rose during that year'
            ],
            correctAnswer: 0,
            explanation: 'If births exceed deaths, natural increase is positive, so the only way to shrink is for net emigration to be larger than that natural increase. More immigrants than emigrants would make the population grow even faster.'
          }
        ]
      }
    },
    {
      id: 'apeshuma4-doubling',
      type: 'text' as const,
      content: `
## Doubling Time and Projections

The **rule of 70** gives the approximate number of years for a population growing at a steady percent rate to double:

$$\\text{Doubling time (years)} \\approx \\frac{70}{\\text{growth rate in percent}}$$

Use the growth rate as a percent (2, not 0.02).

### Worked Example 2: Doubling and Counting Doublings

Country F (from Worked Example 1) grows at 1.8% per year.

**Step 1. Doubling time.** $70 \\div 1.8 \\approx 39$ years.

**Step 2. Project forward by counting doublings.** A city of 2 million grows at 3.5% per year. Doubling time = 70 ÷ 3.5 = 20 years. In 60 years there are 60 ÷ 20 = 3 doublings:

$$2 \\to 4 \\to 8 \\to 16\\ \\text{million}$$

Equivalently, $2 \\times 2^{3} = 16$ million.

**Step 3. Work backward.** If a population doubled in 35 years, its growth rate was about 70 ÷ 35 = 2% per year.

### Doubling-time reference

| Growth rate | Doubling time |
|---|---|
| 0.5% | 140 years |
| 0.9% (about the world rate today) | about 78 years |
| 1% | 70 years |
| 2% | 35 years |
| 3.5% | 20 years |

Projections assume the rate stays constant, and it rarely does. World growth peaked at about 2.1% per year in the late 1960s and has fallen to about 0.9%. The UN's 2024 projections show world population, about 8.2 billion in 2025, peaking at about 10.3 billion in the 2080s rather than doubling again.

> 🔑 **AP Connection:** Rule-of-70 problems are common on the calculator-allowed FRQs. Write the formula, substitute, and include units ("about 39 years"). For a "how many people after N years" question, count the doublings first.
      `
    },
    {
      id: 'apeshuma4-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A country of 50,000,000 people records 1,100,000 births, 400,000 deaths, 100,000 immigrants and 50,000 emigrants in a year. What is its growth rate, in percent?

2) Using your answer to question 1, what is the country's doubling time in years?

3) A town of 30,000 grows at 2% per year. If the rate holds, how many people will it have after 105 years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.5', '46.7', '240000'],
        hint1: 'Net change = births + immigrants − deaths − emigrants. Divide by the population, then multiply by 100.',
        hint2: 'Divide 70 by the growth rate in percent. Round to one decimal place.',
        hint3: 'Find the doubling time first, then count how many doublings fit in 105 years.',
        explanation: '1) 1,100,000 + 100,000 − 400,000 − 50,000 = 750,000; 750,000 ÷ 50,000,000 × 100 = 1.5%. 2) 70 ÷ 1.5 ≈ 46.7 years. 3) Doubling time is 70 ÷ 2 = 35 years, so 105 years is 3 doublings: 30,000 × 2³ = 240,000.'
      }
    },
    {
      id: 'apeshuma4-malthus',
      type: 'text' as const,
      content: `
## Malthus and Human Carrying Capacity

### Malthusian theory

In *An Essay on the Principle of Population* (1798), **Thomas Malthus** argued:

| Claim | Meaning |
|---|---|
| Population grows **geometrically** | 1, 2, 4, 8, 16 ... (exponential) |
| Food supply grows **arithmetically** | 1, 2, 3, 4, 5 ... (linear) |
| Prediction | Population will outrun food, and growth will be checked by famine, disease and war |

### Worked Example 3: Malthus's Gap

Start with 1 unit of population and 1 unit of food (illustrative). Each 25-year period, population doubles and food rises by 1 unit.

| Years | Population | Food | Food per person |
|---|---|---|---|
| 0 | 1 | 1 | 1.00 |
| 25 | 2 | 2 | 1.00 |
| 50 | 4 | 3 | 0.75 |
| 75 | 8 | 4 | 0.50 |
| 100 | 16 | 5 | about 0.31 |

The gap opens slowly, then fast. This is the logic of exponential versus linear growth.

### The critique

- **Food grew faster than Malthus expected.** Mechanized farming, synthetic fertilizers, irrigation and high-yield crop varieties (the Green Revolution of the mid-1900s) raised yields far beyond a linear trend.
- **Population growth slowed on its own.** As countries developed, birth rates fell (the demographic transition), something Malthus did not anticipate.
- **Hunger today is mainly about access, not total supply.** Poverty, conflict and distribution leave people hungry even when global production is adequate.

**Neo-Malthusians** answer that today's high yields depend on fossil fuels, groundwater that is being depleted, and soils that are eroding, so the limits Malthus described may only have been postponed.

### Human carrying capacity

Carrying capacity (K) is the largest population an environment can support indefinitely. (The logistic growth model behind K was covered in Population Ecology.) For humans, K is hard to pin down because:

| It depends on | Example |
|---|---|
| Technology | Fertilizer and irrigation raised food output per hectare |
| Per-capita consumption | A billion people eating mostly grain need far less cropland than a billion eating mostly meat |
| Trade | Cities and countries import food, water (in crops) and energy from far away |

Estimates of Earth's human carrying capacity therefore vary widely. Ecological footprint data suggest humanity already uses resources faster than Earth regenerates them, which is a sign of overshoot.
      `
    },
    {
      id: 'apeshuma4-density',
      type: 'text' as const,
      content: `
## Density-Dependent and Density-Independent Factors

| Type | Definition | Human examples |
|---|---|---|
| **Density-dependent** | Effect grows stronger as the population becomes more crowded | Infectious disease spreading faster in crowded cities; competition for water, food and housing; famine in areas that outgrow their food supply |
| **Density-independent** | Effect happens regardless of how crowded the population is | Hurricanes, earthquakes, tsunamis, floods, volcanic eruptions, extreme heat waves |

**How to decide:** ask whether doubling the number of people per square kilometer would change the **percentage** affected. A flu spreads to a larger share of a denser city, so it is density-dependent. A hurricane floods the same coastal area whether 100 or 1,000 people live there, so the share harmed does not depend on density.

> 🔑 **AP Connection:** For "identify one density-dependent factor," pick something whose effect depends on crowding, such as disease spread or competition for clean water. Natural disasters are the standard density-independent examples.
      `
    },
    {
      id: 'apeshuma4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best summarizes the argument Thomas Malthus made in 1798?',
            options: [
              'Population tends to grow faster than the food supply can expand',
              'Food supply tends to grow faster than the population can expand',
              'Population growth halts on its own once a country industrializes',
              'Better farm technology will keep food output ahead of population'
            ],
            correctAnswer: 0,
            explanation: 'Malthus argued that population grows geometrically while food grows arithmetically, so population outruns food until famine, disease or war checks it. The idea that growth slows as countries industrialize comes from the later demographic transition model.'
          },
          {
            question: 'Which factor limits a human population in a density-independent way?',
            options: [
              'A flu outbreak spreading through crowded cities',
              'Rising rents as housing becomes scarce',
              'A hurricane that floods coastal towns',
              'Water shortages as a city outgrows its supply'
            ],
            correctAnswer: 2,
            explanation: 'A hurricane strikes the same area no matter how many people live there, so its effect does not depend on crowding. Disease spread, housing scarcity and water shortages all grow worse as more people crowd together.'
          },
          {
            question: 'World food production has grown faster than world population since Malthus wrote. Which development contributed most to this?',
            options: [
              'A steady fall in birth rates beginning around 1800',
              'Higher crop yields from fertilizer, irrigation and new crop varieties',
              'A shift of most farmland to grazing for livestock',
              'Rising death rates that slowed population growth'
            ],
            correctAnswer: 1,
            explanation: 'Synthetic fertilizers, irrigation and high-yield varieties raised output per hectare far beyond a linear trend. Global birth rates did not begin to fall widely until the 1900s, and death rates fell rather than rose.'
          }
        ]
      }
    },
    {
      id: 'apeshuma4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Rate per 1,000 | Count ÷ population × 1,000 |
| Growth rate (%) | [(CBR + immigration) − (CDR + emigration)] ÷ 10 |
| Natural increase (%) | (CBR − CDR) ÷ 10 |
| Rule of 70 | Doubling time ≈ 70 ÷ growth rate (%) |
| Projection | Count doublings: final = initial × 2 raised to the number of doublings |
| Malthus (1798) | Geometric population vs arithmetic food; checks are famine, disease, war |
| Critique | Green Revolution yields, demographic transition; neo-Malthusians warn of postponed limits |
| Human K | Depends on technology, consumption and trade, so estimates vary widely |
| Density-dependent | Disease, competition for water, food and housing |
| Density-independent | Hurricanes, earthquakes, floods, heat waves |

**Next:** Part 5 returns to the demographic transition model and explains why birth and death rates fall in each stage, what the model gets wrong, and how environmental impact changes as countries develop.
      `
    }
  ]
};
