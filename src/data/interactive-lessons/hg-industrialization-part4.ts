export const hgIndustrializationPart4Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgindust4-intro',
      type: 'text' as const,
      content: `
# 🌍 Industrialization & Development

**Part 4 of 7 — Measuring Development: Indicators and Indexes**

---

| Section |
|---------|
| 📖 Economic Measures: GDP, GNP and GNI |
| Social Measures and Income Distribution |
| Composite Indexes: HDI and GII |
| Reading a Development Table |

> 🔑 **Key Concept:** **Development** is the process of improving the material conditions and well-being of people. No single number captures it, so geographers combine **economic** measures (output and income), **social** measures (health and education) and **composite indexes** (HDI, GII). Every measure has blind spots, and national averages hide differences inside a country (CED Topic 7.3).
`
    },
    {
      id: 'hgindust4-economic',
      type: 'text' as const,
      content: `
## 📖 Economic Measures: GDP, GNP and GNI

| Measure | What it counts | Key difference |
|---|---|---|
| **GDP** (gross domestic product) | The value of all final goods and services produced **inside a country's borders** in a year | Counts a foreign-owned factory's output in the country where it sits |
| **GNP** (gross national product) | The value of output produced by a country's **residents and firms, wherever they are** | Counts a U.S. firm's overseas profits as U.S. output |
| **GNI** (gross national income) | GDP **plus** income residents earn abroad, **minus** income sent abroad to foreigners | The World Bank's main measure for classifying countries; very close to GNP in practice |

**Per capita** versions divide the total by population so that large and small countries can be compared:

$$\\text{GDP per capita} = \\frac{\\text{GDP}}{\\text{population}}$$

**Purchasing power parity (PPP)** adjusts for the fact that the same dollar buys more in some countries than in others, so PPP figures compare real living standards better than raw exchange-rate figures.

### How the World Bank Classifies Countries
For fiscal year 2025, using **2023 GNI per capita** (Atlas method), the World Bank set these thresholds:

| Income group | GNI per capita |
|---|---|
| Low income | \\$1,145 or less |
| Lower-middle income | \\$1,146 to \\$4,515 |
| Upper-middle income | \\$4,516 to \\$14,005 |
| High income | more than \\$14,005 |

### Limits of Economic Measures
- They **ignore the informal economy**: street vending, unregistered work and unpaid household and farm labor, much of it done by women.
- They are **averages**, so a few very rich people can raise GDP per capita while most people stay poor.
- They count anything sold, including spending to clean up pollution, and ignore environmental damage.
`
    },
    {
      id: 'hgindust4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A Japanese-owned car factory operates in Kentucky and sends its profits to its owners in Japan. Which U.S. measure includes the full value of the factory\'s output, profits included?',
            options: [
              'U.S. GDP',
              'U.S. GNP',
              'U.S. GNI per capita',
              'U.S. Gini coefficient'
            ],
            correctAnswer: 0,
            explanation: 'GDP counts everything produced inside a country\'s borders, regardless of ownership. The profits belong to Japanese residents, so they count in Japan\'s GNP and GNI rather than in the U.S. versions; the Gini coefficient measures inequality, not output.'
          },
          {
            question: 'Why do geographers say GDP per capita can misrepresent how people in a country live?',
            options: [
              'It counts only exports and leaves out all goods sold at home',
              'It is an average that can hide large gaps between rich and poor',
              'It measures literacy rates rather than income or output',
              'It is published only for core countries, not the periphery'
            ],
            correctAnswer: 1,
            explanation: 'Per capita figures divide total output by total population, so extreme wealth at the top can lift the average while most people remain poor. GDP includes goods sold at home and is estimated for nearly every country.'
          }
        ]
      }
    },
    {
      id: 'hgindust4-social',
      type: 'text' as const,
      content: `
## Social Measures and Income Distribution

| Indicator | What it shows | Range of values (rounded, recent) |
|---|---|---|
| **Total fertility rate (TFR)** | Average children per woman; falls as education, urbanization and women's employment rise | Above 6 in Niger; about 0.7 in South Korea (2023, Statistics Korea), the lowest of any country |
| **Infant mortality rate (IMR)** | Deaths before age 1 per 1,000 live births; very sensitive to clean water, nutrition and health care | About 2 in Japan; around 50 for sub-Saharan Africa as a whole (UN estimates, early 2020s) |
| **Literacy rate** | Share of adults who can read and write | Near 100% in most high-income countries; below 50% in several Sahel countries |
| **Access to health care** | Measured by doctors per 1,000 people, hospital beds or share of births attended by skilled staff | Varies more within countries (urban vs. rural) than many national figures show |
| **Sectoral structure** | Share of workers in primary, secondary and tertiary jobs (Part 3) | A large primary share signals lower development |

### Income Distribution and the Gini Coefficient
The **Gini coefficient** measures how evenly income is shared, from **0** (everyone has the same income) to **1** (one person has all of it); some sources multiply by 100.
- **South Africa** is among the most unequal countries measured, at about **0.63** (World Bank).
- Nordic countries such as Norway and Finland are among the most equal, below **0.30**.

**Why it matters:** two countries can have the same GDP per capita but very different lives for the typical person. Pairing an average (GDP per capita) with a distribution measure (Gini) gives a much fuller picture.
`
    },
    {
      id: 'hgindust4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** A country has a GDP of \\$600 billion and a population of 40 million. What is its GDP per capita, in dollars?

**2)** In that country, 300 infants died before their first birthday out of 20,000 live births in one year. What is the infant mortality rate, per 1,000 live births?

**3)** The country's GNI per capita is \\$13,000. Using the World Bank's fiscal year 2025 thresholds, it is in which income group? (Type: low, lower-middle, upper-middle or high.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15000', '15', 'upper-middle'],
        hint1: 'Divide GDP by population: 600,000,000,000 ÷ 40,000,000.',
        hint2: 'Deaths ÷ live births × 1,000.',
        hint3: 'Upper-middle runs from \\$4,516 to \\$14,005.',
        explanation: '1) \\$600 billion ÷ 40 million = \\$15,000. 2) 300 ÷ 20,000 × 1,000 = 15 per 1,000. 3) \\$13,000 falls between \\$4,516 and \\$14,005, so the country is upper-middle income.'
      }
    },
    {
      id: 'hgindust4-indexes',
      type: 'text' as const,
      content: `
## Composite Indexes: HDI and GII

The United Nations Development Programme (UNDP) publishes both indexes in its yearly **Human Development Report**.

### Human Development Index (HDI), since 1990
| Dimension | Indicator |
|---|---|
| **A long and healthy life** | Life expectancy at birth |
| **Knowledge** | Mean years of schooling (adults 25 and older) and expected years of schooling (children entering school) |
| **A decent standard of living** | GNI per capita (PPP) |

Each dimension is turned into an index from 0 to 1, and the HDI is their **geometric mean**. A geometric mean punishes imbalance: a country cannot make up for very poor health with high income. The UNDP groups countries as **very high** (0.800 and above), **high** (0.700 to 0.799), **medium** (0.550 to 0.699) and **low** (below 0.550). In the 2023/2024 report (2022 data), Switzerland ranked first at about **0.967** and Somalia last at about **0.380**.

### Gender Inequality Index (GII), since 2010
| Dimension | Indicators |
|---|---|
| **Reproductive health** | Maternal mortality ratio; adolescent birth rate |
| **Empowerment** | Share of parliamentary seats held by women; share of women and men with at least some secondary education |
| **Labor market** | Labor force participation rates of women and men |

The GII runs **the other way** from the HDI: **0 means equality** between women and men and higher values mean more inequality. In the same report, Denmark scored about **0.01** (most equal) and Yemen about **0.82** (least equal).

### Limits of Composite Indexes
- **Weighting choices:** combining unlike things (years, dollars, seats) requires judgment calls.
- **Data gaps:** some countries lack recent, reliable surveys.
- **Scale:** a national HDI hides regional gaps. India's states, for example, differ widely in life expectancy and schooling.
- **What is left out:** HDI ignores inequality, political freedom and environmental damage (the UNDP publishes separate adjusted indexes for some of these).

> 🔑 **AP Connection:** Watch the direction. A **higher HDI is better**, but a **higher GII is worse**. A frequent multiple-choice trap pairs a high GII with "more equal."
`
    },
    {
      id: 'hgindust4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which set of measures together makes up the Human Development Index?',
            options: [
              'Life expectancy, schooling and income per person',
              'Fertility rate, literacy rate and income per person',
              'Infant mortality, schooling and access to doctors',
              'Literacy, life expectancy and the Gini coefficient'
            ],
            correctAnswer: 0,
            explanation: 'The HDI combines a health dimension (life expectancy at birth), a knowledge dimension (mean and expected years of schooling) and a living-standard dimension (GNI per capita at PPP). Fertility, infant mortality and the Gini coefficient are separate indicators.'
          },
          {
            question: 'Country A has a GII of 0.05 and Country B has a GII of 0.60. What can you conclude?',
            options: [
              'Country A has much greater gender equality than Country B',
              'Country B has much greater gender equality than Country A',
              'Country A has a higher income per person than Country B',
              'Country B has more women in its workforce than Country A'
            ],
            correctAnswer: 0,
            explanation: 'On the GII, 0 means equality and higher numbers mean more inequality, so Country A is far more equal. The GII does not measure income, and a lower female labor force share would raise, not lower, a country\'s score.'
          },
          {
            question: 'Why does the UNDP combine the HDI\'s three dimensions with a geometric mean rather than a simple average?',
            options: [
              'It makes poor countries look more developed',
              'It weighs income twice as heavily as health',
              'It keeps strength in one area from hiding weakness in another',
              'It removes the need for data on schooling'
            ],
            correctAnswer: 2,
            explanation: 'A geometric mean drops sharply when any one dimension is low, so high income cannot fully offset poor health or schooling. It gives the three dimensions equal weight and still requires schooling data.'
          }
        ]
      }
    },
    {
      id: 'hgindust4-table',
      type: 'text' as const,
      content: `
## Reading a Development Table

The table shows four **hypothetical** countries.

| Country | GNI per capita (PPP) | Life expectancy | TFR | Workers in agriculture | Gini |
|---|---|---|---|---|---|
| **P** | \\$2,500 | 61 years | 5.2 | 65% | 0.38 |
| **Q** | \\$18,000 | 75 years | 1.8 | 10% | 0.58 |
| **R** | \\$19,000 | 79 years | 1.6 | 8% | 0.29 |
| **S** | \\$55,000 | 82 years | 1.5 | 2% | 0.32 |

### Working Through the Table
1. **P** has the lowest income, shortest lives, highest fertility and largest farm workforce: a low-income, mostly agricultural country.
2. **Q** and **R** have almost the same average income, but Q's Gini of 0.58 means income is far more concentrated, so the typical person in Q likely lives on much less than the typical person in R. R's longer life expectancy fits that reading.
3. **S** fits a high-income, postindustrial economy.
4. **Correlation is not proof:** low fertility and high income rise together, but each also depends on women's education, urbanization and access to contraception.

**Scale reminder:** every value is a national average. A rural province in Q might look more like P than like the national figures.
`
    },
    {
      id: 'hgindust4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Use the Table** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The country whose income is most unequally distributed is ___',
            options: ['Country Q', 'Country P', 'Country R', 'Country S']
          },
          {
            label: 'Two countries with similar GNI per capita but different well-being are best compared using ___',
            options: ['The Gini coefficient', 'Total population size', 'GDP growth rate', 'Total export value']
          },
          {
            label: 'The country most likely in Stage 2 of the demographic transition is ___',
            options: ['Country P', 'Country Q', 'Country R', 'Country S']
          }
        ],
        correctAnswers: ['Country Q', 'The Gini coefficient', 'Country P'],
        hint1: 'Find the highest Gini value.',
        hint2: 'Which measure shows how income is shared?',
        hint3: 'High fertility and a large farm workforce.',
        explanation: 'Q has the highest Gini, 0.58. The Gini coefficient shows distribution, which an average like GNI per capita hides. P\'s TFR of 5.2 and large agricultural workforce fit a high-birth-rate, early-transition country.'
      }
    }
  ]
};
