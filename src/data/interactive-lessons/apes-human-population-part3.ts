export const apesHumanPopulationPart3Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshuma3-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 3 of 7 — Fertility and Its Drivers**

---

| Section |
|---------|
| 📖 Total Fertility Rate and Replacement Level |
| Infant Mortality: Measuring Child Survival |
| Why Families Have Fewer or More Children |
| Population Policies: Antinatalist and Pronatalist |

> 🔑 **Key Concept:** The width of a pyramid's base is set by fertility. This part defines total fertility rate precisely, shows why replacement level is about 2.1 only where child survival is high, calculates infant mortality rate, and explains the social, economic and government factors that push fertility up or down.
      `
    },
    {
      id: 'apeshuma3-tfr',
      type: 'text' as const,
      content: `
## 📖 Total Fertility Rate and Replacement Level

**Total fertility rate (TFR)** is the average number of children a woman would have over her lifetime if she bore children at the rates observed for each age group in a given year. It is a per-woman measure, unlike the crude birth rate, which counts births per 1,000 people of all ages and both sexes.

### Worked Example 1: Building a TFR

Country D (illustrative data). The table shows the average number of births per woman **during each 5-year age band**:

| Age band | Births per woman in that band |
|---|---|
| 15–19 | 0.30 |
| 20–24 | 0.70 |
| 25–29 | 0.80 |
| 30–34 | 0.60 |
| 35–39 | 0.40 |
| 40–44 | 0.20 |

**Step 1. Add the bands.** A woman who lives through every band has, on average:

$$0.30 + 0.70 + 0.80 + 0.60 + 0.40 + 0.20 = 3.0\\ \\text{children}$$

**Step 2. Interpret.** Country D's TFR is 3.0, well above replacement, so its population will grow.

**Step 3. Test a change.** If women in Country D delay their first child until after age 20, the 0.30 for ages 15–19 drops toward zero and the TFR falls toward 2.7, even if every later band stays the same. This is why **age at first birth** is one of the strongest levers on fertility.

### Replacement-level fertility

Replacement level is the TFR at which each generation exactly replaces itself.

| Reason the number is above 2.0 | Effect |
|---|---|
| Two parents must be replaced by two children who survive to have their own children | Base of 2.0 |
| About 105 boys are born for every 100 girls, and only daughters bear the next generation | Adds a little |
| Some girls die before reaching their reproductive years | Adds more where child mortality is high |

Where nearly all children survive to adulthood, replacement level is **about 2.1**. Where many children die young, it is higher, in some countries 2.5 or more.

Worldwide, TFR is about 2.2 to 2.3 today, down from about 5 in the 1950s. Most high-income countries, including Japan, South Korea, Italy and Germany, are below replacement, while several countries in sub-Saharan Africa still have TFRs above 5.
      `
    },
    {
      id: 'apeshuma3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which definition matches total fertility rate?',
            options: [
              'Births per 1,000 people in a population each year',
              'Average number of children a woman would have in her lifetime at current rates',
              'Births per 1,000 women aged 15 to 44 each year',
              'Number of children each couple needs to replace itself'
            ],
            correctAnswer: 1,
            explanation: 'TFR is a lifetime, per-woman average built from the current birth rate of each age group. Births per 1,000 people is the crude birth rate, and the number needed for a couple to replace itself is replacement-level fertility.'
          },
          {
            question: 'Why is replacement-level fertility higher than 2.1 in countries where many children die young?',
            options: [
              'Parents there plan for more children than they want',
              'Extra births are needed to offset children who die before adulthood',
              'High child mortality lowers the number of boys born per girl',
              'Children there start families of their own at younger ages'
            ],
            correctAnswer: 1,
            explanation: 'Replacement means enough daughters survive to bear the next generation, so where more children die before adulthood, more births are needed per woman. Age at first birth changes how fast a population grows, not the replacement number itself.'
          },
          {
            question: 'In Country D (illustrative data), women have an average of 0.30 births during ages 15–19. If all women delayed childbearing until after 20 and later bands were unchanged, what would happen to the TFR of 3.0?',
            options: [
              'It would fall to about 2.7',
              'It would rise to about 3.3',
              'It would stay at about 3.0',
              'It would fall to about 2.1'
            ],
            correctAnswer: 0,
            explanation: 'TFR is the sum of the age bands, so removing the 0.30 from ages 15–19 lowers it from 3.0 to about 2.7. Delaying first births is one reason fertility falls as more girls stay in school.'
          }
        ]
      }
    },
    {
      id: 'apeshuma3-imr',
      type: 'text' as const,
      content: `
## Infant Mortality: Measuring Child Survival

**Infant mortality rate (IMR)** is the number of deaths of infants under 1 year old per 1,000 live births in a year.

$$\\text{IMR} = \\frac{\\text{deaths of infants under age 1}}{\\text{live births}} \\times 1{,}000$$

### Worked Example 2: Calculating IMR

A region (illustrative data) records 60,000 live births and 1,800 deaths of infants under age 1 in one year.

$$\\text{IMR} = \\frac{1{,}800}{60{,}000} \\times 1{,}000 = 30\\ \\text{per 1,000 live births}$$

Note that the denominator is **live births**, not the total population. Dividing by the population gives a much smaller number that is not the IMR.

### Why IMR drives fertility

| Where IMR is high | Where IMR is low |
|---|---|
| Parents have extra children to make sure some survive to adulthood | Parents can expect each child to survive |
| Children are an insurance policy for old age | Pensions and savings provide old-age security |
| TFR tends to be high | TFR tends to be low |

IMR is lowest, under 5 per 1,000, in most high-income countries and highest in parts of sub-Saharan Africa. The causes of high IMR are mostly preventable: unsafe drinking water, diarrheal disease, malnutrition, lack of vaccinations and lack of skilled care at birth.

When IMR falls, births do not fall at once. Families take years, often a generation, to trust that their children will survive. That lag is the gap that drives Stage 2 of the demographic transition, covered in Part 5.

> 🔑 **AP Connection:** IMR is one of the clearest indicators of a country's development. If an FRQ gives IMR data and asks you to explain a high TFR, link them: high infant mortality leads parents to have more children so that some survive.
      `
    },
    {
      id: 'apeshuma3-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers or a single word.

1) Country E (illustrative data) has births per woman by age band of 0.10 (15–19), 0.50 (20–24), 0.60 (25–29), 0.50 (30–34), 0.30 (35–39) and 0.10 (40–44). What is its TFR?

2) A country records 48,000 live births and 1,200 deaths of infants under age 1 in a year. What is its infant mortality rate per 1,000 live births?

3) A government policy designed to raise the birth rate is called _______ (one word).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.1', '25', 'pronatalist'],
        hint1: 'TFR is the sum of the births per woman across all the age bands.',
        hint2: 'Divide infant deaths by live births, then multiply by 1,000.',
        hint3: '"Natal" refers to birth; this word means in favor of births.',
        explanation: '1) 0.10 + 0.50 + 0.60 + 0.50 + 0.30 + 0.10 = 2.1, which is about replacement level. 2) 1,200 ÷ 48,000 × 1,000 = 25 per 1,000 live births. 3) A pronatalist policy encourages births; an antinatalist policy discourages them.'
      }
    },
    {
      id: 'apeshuma3-factors',
      type: 'text' as const,
      content: `
## Why Families Have Fewer or More Children

| Factor | How it changes TFR | Why |
|---|---|---|
| **Education and status of women** | Lowers | Girls who stay in school marry and give birth later; educated women have more job options and more say in family decisions |
| **Access to family planning** | Lowers | Couples can choose the number and timing of children |
| **Cost of raising children** | Lowers when high | In cities, children need years of schooling and housing costs more |
| **Value of children's labor** | Raises when high | On farms, children help with work from a young age |
| **Pensions and social security** | Lowers | Parents need not rely on children for support in old age |
| **Infant and child mortality** | Raises when high | Parents have extra children to ensure some survive |
| **Religion and cultural norms** | Either way | Some traditions favor large families or oppose contraception |
| **Age at marriage and first birth** | Later lowers | Fewer reproductive years remain, and early high-fertility bands drop out |

### Worked Example 3: Reading a Case

Kerala, a state in India, reached roughly replacement-level fertility by around 1990, decades before India as a whole, while its average income was modest. Kerala's female literacy and child survival rates were among the highest in India.

**Step 1. Name the factors present.** High female literacy, low infant mortality.
**Step 2. Connect each to TFR.** Educated women marry later and use family planning more; low IMR removes the need for extra births.
**Step 3. Conclude.** Kerala shows that women's education and child health can lower fertility even without high income.

> 🔑 **AP Connection:** When asked for "one factor that would lower TFR," the education of women is the strongest and safest choice, but you must explain the mechanism (later marriage, more career options, better knowledge of family planning), not just name it.
      `
    },
    {
      id: 'apeshuma3-policy',
      type: 'text' as const,
      content: `
## Population Policies: Antinatalist and Pronatalist

| Type | Goal | Typical tools |
|---|---|---|
| **Antinatalist** | Lower the birth rate | Free or cheap contraception, education campaigns, raising the legal marriage age, financial penalties for large families |
| **Pronatalist** | Raise the birth rate | Child allowances, paid parental leave, subsidized child care, tax breaks for larger families |

### China: an antinatalist policy and its reversal

| Year | Policy |
|---|---|
| 1980 | One-child policy introduced for most urban couples, with exceptions for many rural and minority families |
| 2016 | Two-child policy for all couples |
| 2021 | Three-child policy announced |

Consequences that appear on the AP exam:
- **Rapid aging.** A shrinking young cohort supports a growing 65+ cohort.
- **Skewed sex ratio at birth.** Preference for sons, combined with the one-child limit, produced far more male than female births for decades.
- **Fertility stayed low after the limits loosened.** China's TFR has stayed near or below 1.2 in recent years, because urban living costs and women's education now keep family size small.

### Pronatalist examples

- **France** pays family allowances, offers subsidized child care and gives tax benefits that grow with family size. Its TFR has stayed higher than that of most European countries, though still below replacement.
- **Hungary** has, since 2020, exempted mothers of four or more children from personal income tax for life.

Pronatalist incentives usually raise TFR only modestly, because the costs of children, housing and careers weigh more than a payment does.
      `
    },
    {
      id: 'apeshuma3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which change would most likely lower a country\'s total fertility rate over the following two decades?',
            options: [
              'A cholera outbreak raising infant deaths',
              'More reliance on children for farm labor',
              'More girls in secondary school',
              'A drop in the average age at marriage'
            ],
            correctAnswer: 2,
            explanation: 'Girls who stay in school marry and have children later and have more career options, so fertility falls. Higher infant deaths, child labor and earlier marriage all push fertility up.'
          },
          {
            question: 'Which statement about China\'s population policy is accurate?',
            options: [
              'A one-child limit began in 1960 and became a two-child limit in 2000',
              'A one-child limit began in 1980 and became a two-child limit in 2016',
              'A one-child limit began in 1980 and became a three-child limit in 2010',
              'A two-child limit began in 1980 and became a one-child limit in 2016'
            ],
            correctAnswer: 1,
            explanation: 'China introduced its one-child policy in 1980, allowed all couples two children from 2016 and announced a three-child policy in 2021. The policy moved toward more children over time, not fewer.'
          },
          {
            question: 'A country with a TFR of 1.2 and a shrinking workforce wants to increase births. Which policy is pronatalist?',
            options: [
              'Free contraception supplied at rural clinics',
              'Paid parental leave and child allowances',
              'Tax penalties for families with a third child',
              'Raising the legal minimum age of marriage'
            ],
            correctAnswer: 1,
            explanation: 'Paid leave and child allowances lower the cost of raising children, which encourages births. Free contraception, penalties on large families and a higher marriage age are antinatalist tools.'
          }
        ]
      }
    },
    {
      id: 'apeshuma3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| TFR | Lifetime average children per woman at current age-specific rates |
| Replacement level | About 2.1 where child survival is high; higher where child mortality is high |
| IMR | Infant deaths under age 1 ÷ live births × 1,000 |
| High IMR | Leads to higher TFR (extra births as insurance) |
| Strongest lever | Education and status of women (later marriage, family planning, career options) |
| Antinatalist | Lowers births; China's one-child policy (1980), two-child (2016), three-child (2021) |
| Pronatalist | Raises births; allowances, paid leave, child care (France, Hungary) |

**Next:** Part 4 combines births, deaths and migration into growth rates, doubling times and projections, and asks whether Earth has a human carrying capacity.
      `
    }
  ]
};
