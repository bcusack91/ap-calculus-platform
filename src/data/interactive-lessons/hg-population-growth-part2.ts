export const hgPopulationGrowthPart2Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula2-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 2 of 7 — Population Dynamics: Measuring and Explaining Change**

---

| Section |
|---------|
| 📖 The Three Components of Change |
| Worked Calculations with Real Data |
| Fertility, Infant Mortality and Life Expectancy |
| What Drives Fertility and Mortality |

> 🔑 **Key Concept:** A population changes in only three ways: people are **born**, people **die**, and people **move** in or out. Every population measure on the AP exam describes one of these three components (fertility, mortality, migration), and every explanation of growth or decline traces back to the social, economic and political forces that shape them.
`
    },
    {
      id: 'hgpopula2-components',
      type: 'text' as const,
      content: `
## 📖 The Three Components of Change

### The Demographic Equation

For any place and any period:

**Population change = (births − deaths) + (immigrants − emigrants)**

| Part of the equation | Name | Measured by |
|---|---|---|
| Births − deaths | **Natural increase** (or natural decrease if negative) | Rate of natural increase (RNI) |
| Immigrants − emigrants | **Net migration** | Net migration rate per 1,000 people |
| Both together | **Population growth rate** | Percent change per year |

Part 1 gave you the formulas for CBR, CDR, RNI and doubling time. This part uses them on real data and explains **why** the numbers differ so much from place to place.

### Scale Changes Which Components Matter

| Scale of analysis | Components that apply | Why |
|---|---|---|
| **Global** | Births and deaths only | No one migrates off the planet, so world growth equals natural increase |
| **National** | All three | International migration adds or removes people |
| **Regional / local** | All three, and migration often dominates | Internal migration (rural to urban, Rust Belt to Sun Belt) can outweigh births and deaths |

A rural county in the U.S. Great Plains can shrink even when its births exceed its deaths, because young adults move to cities. A Sun Belt metro can grow quickly even with a low birth rate, because people move in from other states and countries.

> ⚠️ **RNI is not the growth rate.** RNI leaves migration out. A country's total growth rate equals RNI plus its net migration rate.
`
    },
    {
      id: 'hgpopula2-calculations',
      type: 'text' as const,
      content: `
## Worked Calculations with Real Data

All figures below are rounded. Rates are per 1,000 people per year.

### Worked Example 1: Niger, 2023 (World Bank)

Niger's crude birth rate was about **42** and its crude death rate about **9**.

1. RNI = (CBR − CDR) ÷ 10 = (42 − 9) ÷ 10 = **3.3% per year**
2. Doubling time ≈ 70 ÷ 3.3 ≈ **21 years**

At that pace, a child born in Niger in 2023 would see the country's population double before turning 22. Niger's total fertility rate was about **6.1** children per woman, among the highest in the world.

### Worked Example 2: Japan, 2023 (Ministry of Health, Labour and Welfare)

Japan recorded about **730,000 births** and **1.58 million deaths** in a population of about **124 million**.

1. CBR = 730,000 ÷ 124,000,000 × 1,000 ≈ **5.9**
2. CDR = 1,580,000 ÷ 124,000,000 × 1,000 ≈ **12.7**
3. RNI = (5.9 − 12.7) ÷ 10 ≈ **−0.7% per year**

Japan has a **natural decrease**: deaths outnumber births by more than two to one. A negative RNI has no doubling time; at this pace the population shrinks instead. Japan's total population peaked around 2008–2010 and has fallen since.

### Worked Example 3: United States, July 2023 to July 2024 (U.S. Census Bureau)

| Component | People | Share of a population of about 337 million |
|---|---|---|
| Natural increase (births − deaths) | about 519,000 | about 0.15% |
| Net international migration | about 2.8 million | about 0.83% |
| **Total growth** | **about 3.3 million** | **about 1.0%** |

Natural increase alone would have added about 0.15%. Migration made the actual growth rate more than **six times** the RNI and accounted for about **84%** of the increase.

### Doubling Time Is a Projection, Not a Prediction

The rule of 70 assumes the growth rate stays **constant**. Growth rates almost never do: Niger's RNI will fall as its birth rate declines, so its real doubling time will be longer than 21 years. Use doubling time to compare growth rates, not to forecast a specific year.

> 🔑 **AP Connection:** When a question gives CBR, CDR **and** a migration rate, decide whether it asks for **natural increase** (ignore migration) or **population change** (include it). Many wrong answers on the exam come from answering the other question.
`
    },
    {
      id: 'hgpopula2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "In 2023 Japan recorded about 730,000 births and 1.58 million deaths in a population of about 124 million. Which statement describes its natural increase?",
            options: [
              "About −0.7% per year, a natural decrease",
              "About +0.7% per year, a natural increase",
              "About −7% per year, a natural decrease",
              "About 0% per year, as migration offsets it"
            ],
            correctAnswer: 0,
            explanation: "CBR is about 5.9 and CDR about 12.7, so RNI = (5.9 − 12.7) ÷ 10 ≈ −0.7%. Forgetting to divide by 10 gives −7%, and migration never enters natural increase."
          },
          {
            question: "From mid-2023 to mid-2024 the U.S. population grew by about 3.3 million people, but births exceeded deaths by only about 519,000. What accounts for most of the difference?",
            options: [
              "Net international migration",
              "A rise in the total fertility rate",
              "A sharp decline in infant mortality",
              "Longer life expectancy among older adults"
            ],
            correctAnswer: 0,
            explanation: "Births and deaths are already counted in the 519,000 of natural increase, so rising fertility, lower infant mortality and longer lives cannot explain the rest. Net international migration of about 2.8 million supplied roughly 84% of the growth."
          },
          {
            question: "Why can two countries with the same crude birth rate have very different total fertility rates?",
            options: [
              "CBR depends on how many people are in the childbearing ages, while TFR does not",
              "TFR counts births to migrants, while CBR counts only births to citizens",
              "CBR is measured per woman, while TFR is measured per 1,000 people",
              "TFR includes infant deaths, while CBR leaves infant deaths out of the count"
            ],
            correctAnswer: 0,
            explanation: "CBR divides births by the whole population, so a country with many young adults can have a high CBR even if each woman has few children. TFR measures children per woman over a lifetime, so it is not distorted by age structure; the per-woman and per-1,000 definitions are reversed in the distractor."
          }
        ]
      }
    },
    {
      id: 'hgpopula2-fertility',
      type: 'text' as const,
      content: `
## Fertility, Infant Mortality and Life Expectancy

### TFR and Replacement Level

The **total fertility rate (TFR)** is the average number of children a woman would have over her lifetime at current age-specific birth rates. **Replacement level** is the TFR at which each generation exactly replaces itself, without migration.

| Setting | Replacement-level TFR | Why |
|---|---|---|
| Low child mortality (Japan, U.S.) | about **2.1** | Slightly over 2 because a few children die before adulthood and slightly more boys than girls are born |
| High child mortality | **above 2.1** | More children die before reaching their own childbearing years |

| Country (year) | TFR | Reading |
|---|---|---|
| Niger (2023, World Bank) | about 6.1 | Far above replacement: rapid growth for decades |
| Nigeria (2023, World Bank) | about 4.5 | Above replacement, falling slowly |
| United States (2023, CDC) | about 1.6 | Below replacement; growth comes from migration and momentum |
| Japan (2023, MHLW) | about 1.2 | Far below replacement: natural decrease |
| South Korea (2023, Statistics Korea) | **0.72** | Among the lowest national TFRs ever recorded |

### Population Momentum

A country whose TFR has just fallen to replacement keeps growing for decades. Earlier high fertility left a **large cohort of young people**, and as they enter their childbearing years they produce many births even at two children each. India's TFR reached about **2.0** in its 2019–21 national survey, yet its population is still growing.

### Infant Mortality Rate (IMR)

IMR counts deaths of infants **under one year old per 1,000 live births**. It is one of the most sensitive indicators of development because it responds quickly to clean water, vaccination, nutrition and prenatal care.

### Life Expectancy at Birth: What the Average Hides

Life expectancy at birth is the average number of years a newborn would live at current death rates. Nigeria's was about **54** (World Bank, 2022) and Japan's about **84**.

A life expectancy of 54 does **not** mean most Nigerian adults die at 54. High infant and child mortality pulls the average down. A person who survives childhood in a low-life-expectancy country can expect to live well past the at-birth average.

> 🔑 **AP Connection:** IMR and life expectancy are usually read as signs of **development** and **health-care access**, and TFR as a sign of **women's status and economic structure**. If a question asks what a high IMR suggests, answer with the conditions behind it (limited clean water, vaccination or prenatal care), not just "the country is poor."
`
    },
    {
      id: 'hgpopula2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A country of **2,000,000** people records **50,000 births** and **16,000 deaths** in one year.

**1)** What is its crude birth rate (per 1,000)?

**2)** Its crude death rate is 8. What is its rate of natural increase, in percent?

**3)** Using the rule of 70, about how many years will it take this population to double? Round to the nearest whole year.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '1.7', '41'],
        hint1: 'Divide births by total population, then multiply by 1,000.',
        hint2: 'Subtract CDR from CBR, then divide by 10 to get a percent.',
        hint3: 'Divide 70 by the RNI percentage you just found.',
        explanation: '1) 50,000 ÷ 2,000,000 × 1,000 = 25. 2) (25 − 8) ÷ 10 = 1.7%. 3) 70 ÷ 1.7 ≈ 41 years, assuming the growth rate stays constant.'
      }
    },
    {
      id: 'hgpopula2-drivers',
      type: 'text' as const,
      content: `
## What Drives Fertility and Mortality

### Influences on Fertility

| Type of influence | Factor | Effect on TFR | Mechanism |
|---|---|---|---|
| **Social** | Women's education | Lowers | Delays marriage, raises knowledge of contraception, opens paid work |
| **Social** | Religion and cultural norms | Can raise | Some traditions value large families or discourage contraception |
| **Economic** | Agricultural, rural economy | Raises | Children work on the farm and support parents in old age |
| **Economic** | Urban, service economy | Lowers | Housing, schooling and child care make each child expensive |
| **Economic** | Pensions and savings | Lowers | Parents no longer need many children as old-age insurance |
| **Health** | High child mortality | Raises | Families have "insurance births" to ensure some children survive |
| **Political** | Pro-natalist or anti-natalist policy | Raises or lowers | Incentives, penalties, access to family planning (Part 5) |

### Worked Reasoning: Why Fertility Falls as Places Urbanize

Follow one family moving from a farming village to a city:

1. **On the farm**, a child starts helping with crops and animals at a young age; a large family means more labor.
2. **In the city**, the same child needs years of schooling and pays rent-sized costs for space; the child is an **economic cost** rather than an **economic asset**.
3. **Child survival** is higher in the city, where clinics and clean water are closer, so parents do not need extra births for insurance.
4. **Women** in the city are more likely to finish school and work for wages, which raises the opportunity cost of each additional child.

Each step pushes desired family size down. This is the core reason fertility declines in Stage 3 of the DTM (Part 3).

### Influences on Mortality

| Factor | Effect on CDR and IMR |
|---|---|
| Clean water and sanitation | Large drop in deaths from diarrheal disease, especially among infants |
| Vaccination and antibiotics | Drop in deaths from measles, tuberculosis and other infections |
| Reliable food supply | Fewer famine deaths and less malnutrition |
| Conflict and political instability | Raises deaths and disrupts health care |
| An aging population | Raises the **crude** death rate even when health care is excellent |

That last row explains a common surprise: Japan's CDR (about 12.7) is **higher** than Niger's (about 9), even though Japan's health care is far better. Japan simply has many more elderly people. Crude rates reflect **age structure** as well as health.

> 🔑 **AP Connection:** For "explain why fertility is declining" questions, name a specific factor **and** the mechanism. "Women's education" earns less than "more years of schooling for women delays marriage and the first birth, lowering the number of children per woman."
`
    },
    {
      id: 'hgpopula2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which change would most likely lower total fertility in a rural, agricultural region?",
            options: [
              "More girls completing secondary school",
              "Higher demand for children's labor on farms",
              "Rising rates of infant and child mortality",
              "Fewer clinics that provide contraception"
            ],
            correctAnswer: 0,
            explanation: "Schooling for girls delays marriage and the first birth and opens paid work, which lowers TFR. More demand for child labor, higher child mortality and less access to contraception all push fertility up."
          },
          {
            question: "Country X has a life expectancy at birth of 54 years. Which conclusion is best supported by that figure alone?",
            options: [
              "High infant and child mortality pulls the average down",
              "Most adults in Country X die at about the age of 54",
              "Few people in Country X ever live past the age of 60",
              "Its crude death rate must be higher than its crude birth rate"
            ],
            correctAnswer: 0,
            explanation: "Life expectancy at birth is an average heavily weighted by deaths in infancy and early childhood, so many adults live well past 54. The figure says nothing about whether deaths exceed births."
          },
          {
            question: "Japan's crude death rate is higher than Niger's, even though Japan has far better health care. What best explains this?",
            options: [
              "Japan has a much larger share of elderly residents",
              "Japan's infant mortality rate is higher than Niger's",
              "Japan's census counts deaths of its citizens abroad",
              "Niger's emigrants leave before they reach old age"
            ],
            correctAnswer: 0,
            explanation: "The crude death rate divides all deaths by the whole population, so a country with many elderly people records more deaths per 1,000 even with excellent care. Japan's infant mortality is far lower than Niger's, and migration does not drive the gap."
          }
        ]
      }
    }
  ]
}
