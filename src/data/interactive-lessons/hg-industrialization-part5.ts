export const hgIndustrializationPart5Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgindust5-intro',
      type: 'text' as const,
      content: `
# 🌍 Industrialization & Development

**Part 5 of 7 — Women and Economic Development**

---

| Section |
|---------|
| 📖 How Women's Work Changes as Economies Develop |
| Gender Gaps That Remain |
| Case Study: Bangladesh's Garment Industry |
| Microfinance: Promise and Limits |

> 🔑 **Key Concept:** The **roles of women change** as countries develop: work moves from unpaid farm and household labor toward paid factory and service jobs, and education and political rights expand. Yet **gaps in pay, opportunity and political power persist** in every country, and **microloans** have offered some women a way to start small businesses (CED Topic 7.4).
`
    },
    {
      id: 'hgindust5-roles',
      type: 'text' as const,
      content: `
## 📖 How Women's Work Changes as Economies Develop

| Type of economy | Typical work for women | What is often not counted |
|---|---|---|
| **Mostly agricultural** | Planting, weeding, harvesting, food processing, fetching water and fuel, child care | Much of this work is unpaid and missing from GDP |
| **Industrializing** | Factory jobs in textiles, garments and electronics assembly, often in export zones | Long hours, low wages and limited job security |
| **Postindustrial** | Service, professional and quaternary jobs such as teaching, health care, finance and research | Unpaid care work at home still falls mostly on women |

### A Model with Limits: The U-Shaped Curve
Economist **Claudia Goldin** (Nobel Prize, 2023) described a **U-shaped** relationship between development and women's paid work:
1. In farm economies, women's labor force participation is **high**, because farm and family work happen together.
2. As industry grows and household incomes rise, participation often **falls**: factory work moves away from the home, and social norms in many places discourage married women from taking it.
3. As girls' schooling rises and **service and white-collar jobs** spread, participation **rises again**.

**Limitations:** the U describes a broad historical tendency, not a rule. Culture, law and religion shift the curve: participation stays low in some high-income countries and is high in some low-income ones. It also measures **paid** work, so it misses the unpaid work that women do at every stage.

### Why Women's Education Matters for Development
Countries where more girls finish secondary school tend to have **lower fertility**, **lower infant mortality** and **higher household incomes**, because educated women marry later, have fewer and healthier children and earn more. This is one reason the GII (Part 4) includes secondary education.
`
    },
    {
      id: 'hgindust5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do official statistics often undercount women\'s economic contribution in mostly agricultural countries?',
            options: [
              'Women there rarely work outside the home',
              'Much of their farm and household work is unpaid',
              'Census takers count only women who live in cities',
              'Their work is recorded as part of the quinary sector'
            ],
            correctAnswer: 1,
            explanation: 'GDP and labor surveys count paid work best, so unpaid planting, food processing, water hauling and care work go largely unrecorded. Women in farm economies work long hours outside the home, and rural women are included in censuses.'
          },
          {
            question: 'According to the U-shaped model, what usually happens to women\'s paid work in the middle stage of development?',
            options: [
              'It falls as factory work moves away from the home',
              'It rises as farm work becomes fully mechanized',
              'It stays the same because norms never change',
              'It peaks because factories hire only women'
            ],
            correctAnswer: 0,
            explanation: 'In the middle of the U, paid work shifts from family farms to factories away from home, and rising household income plus social norms reduce married women\'s participation. Participation rises again later as education and service jobs expand.'
          }
        ]
      }
    },
    {
      id: 'hgindust5-gaps',
      type: 'text' as const,
      content: `
## Gender Gaps That Remain

| Gap | Recent evidence (rounded) | Source |
|---|---|---|
| **Labor force participation** | About 47% of women worldwide are in the labor force, compared with about 72% of men (2022) | International Labour Organization |
| **Pay** | In the United States, women working full time, year-round earned about 83 cents for every dollar men earned (2023) | U.S. Census Bureau |
| **Political representation** | Women held about 27% of seats in national parliaments worldwide (2025); Rwanda is the only country where they hold more than 60% | Inter-Parliamentary Union |
| **Education** | Girls now enroll in primary school at nearly the same rate as boys worldwide, but gaps remain in parts of sub-Saharan Africa and South Asia, especially at secondary level | UNESCO |

### Why the Gaps Persist
- **Occupational segregation:** women are concentrated in lower-paid fields and in part-time or informal work.
- **The care burden:** women do most unpaid child and elder care, which interrupts careers.
- **Laws and norms:** limits on property rights, inheritance, credit or travel still exist in some countries. Saudi Arabia lifted its ban on women driving in 2018, and women's labor force participation there roughly doubled over the following five years.

**Scale of analysis:** national figures hide gaps **within households** (who controls income) and **between regions** (urban women often have more paid work options than rural women). Name the scale your evidence comes from.
`
    },
    {
      id: 'hgindust5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** In a country, men's median yearly earnings are \\$50,000 and women's are \\$40,000. Women earn how many **cents** per dollar earned by men?

**2)** That same country's parliament has 250 seats, and women hold 70. What **percent** of seats do women hold?

**3)** Using the ILO's 2022 world figures (about 72% of men and 47% of women in the labor force), what is the gap in **percentage points**?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '28', '25'],
        hint1: 'Divide women\'s earnings by men\'s, then multiply by 100.',
        hint2: 'Seats held by women ÷ total seats × 100.',
        hint3: 'Subtract the smaller rate from the larger one.',
        explanation: '1) \\$40,000 ÷ \\$50,000 = 0.80, or 80 cents. 2) 70 ÷ 250 = 0.28, or 28%, close to the world average. 3) 72 − 47 = 25 percentage points.'
      }
    },
    {
      id: 'hgindust5-bangladesh',
      type: 'text' as const,
      content: `
## Case Study: Bangladesh's Garment Industry

Bangladesh shows both sides of women's work in an industrializing economy.

| Dimension | Evidence |
|---|---|
| **Scale** | Bangladesh is one of the world's largest clothing exporters, and ready-made garments make up most of its export earnings |
| **Who works** | About 4 million garment workers, a majority of them women, many of them young migrants from rural villages |
| **Gains** | Wages of their own, delayed marriage, more schooling for younger sisters and more say in household decisions, according to several field studies |
| **Costs** | Low wages, long hours and unsafe buildings; the **Rana Plaza** factory collapse near Dhaka in 2013 killed more than 1,100 workers |
| **Response** | The Accord on Fire and Building Safety (2013) brought international brands, unions and inspectors together to inspect factories |

### Reading the Case at Different Scales
- **Global:** brands in core countries source from Bangladesh because labor costs are low, a pattern the globalization topic explains as the new international division of labor.
- **National:** garments drove Bangladesh's industrial growth and helped it move from low income to lower-middle income in the World Bank's classification (2015).
- **Household and individual:** a factory wage can raise a young woman's bargaining power at home even when working conditions are poor.

> 🔑 **AP Connection:** FRQs often ask for a **positive and a negative** effect of industrialization on women. Bangladesh lets you give both with specific evidence: new independent income and later marriage on one side; low pay and unsafe factories on the other.
`
    },
    {
      id: 'hgindust5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which piece of evidence shows a benefit of garment factory jobs for women in Bangladesh at the household scale?',
            options: [
              'Bangladesh became a lower-middle-income country',
              'Brands in core countries cut their labor costs',
              'Workers gained more say in family decisions',
              'Factory owners signed an international accord'
            ],
            correctAnswer: 2,
            explanation: 'More influence over household decisions is a change inside the family, which is the household scale. The country\'s income classification is a national-scale change, and brands\' savings are a global-scale effect.'
          },
          {
            question: 'Which factor most directly explains why a gender pay gap persists even where laws require equal pay for equal work?',
            options: [
              'Women are clustered in lower-paid occupations and part-time work',
              'Women in high-income countries have stopped finishing school',
              'Most countries now bar women from working in services',
              'Pay gaps exist only in countries without any industry'
            ],
            correctAnswer: 0,
            explanation: 'Equal-pay laws cover identical jobs, but occupational segregation and part-time or interrupted careers still lower women\'s average earnings. Women\'s schooling has risen in high-income countries, and pay gaps appear in industrial and postindustrial economies alike.'
          }
        ]
      }
    },
    {
      id: 'hgindust5-micro',
      type: 'text' as const,
      content: `
## Microfinance: Promise and Limits

**Microfinance** provides very small loans (**microloans**), savings accounts and insurance to people who cannot get credit from ordinary banks, usually because they have no collateral.

| Feature | Details |
|---|---|
| **Origin** | Economist **Muhammad Yunus** began lending small sums to poor villagers in Bangladesh in 1976; the **Grameen Bank** became a formal bank in 1983 |
| **How it works** | Borrowers form small groups that meet regularly; peer support and pressure replace collateral |
| **Who borrows** | Mostly women: the great majority of Grameen's borrowers are women |
| **Recognition** | Yunus and the Grameen Bank shared the Nobel Peace Prize in 2006 |

### The Debate
- **Supporters:** loans let women start small businesses such as tailoring, poultry or shops, earn income they control and gain status in the household and village.
- **Critics:** interest rates are often high; some borrowers take new loans to repay old ones and fall deeper into debt, as in a 2010 crisis in the Indian state of Andhra Pradesh; and careful randomized studies in several countries found **modest** average effects on household income.
- **Balanced view:** microfinance helps some borrowers but is not, by itself, a cure for poverty. It works best alongside savings programs, education and access to markets.

**Misconception:** microloans are not development aid grants. They must be repaid with interest, which is why critics watch over-indebtedness closely.
`
    },
    {
      id: 'hgindust5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Idea** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A village group of women takes small loans to buy sewing machines and repays weekly. This is ___',
            options: ['Microfinance', 'Foreign aid', 'Remittances', 'Fair trade']
          },
          {
            label: 'Women\'s share of paid work falls during industrialization and rises again with service jobs. This describes ___',
            options: ['The U-shaped curve', 'The rank-size rule', 'The Gini curve', 'Rostow\'s takeoff']
          },
          {
            label: 'A borrower takes a second loan to repay the first and falls deeper into debt. This is a criticism called ___',
            options: ['Over-indebtedness', 'Deindustrialization', 'Agglomeration', 'Commodity dependence']
          }
        ],
        correctAnswers: ['Microfinance', 'The U-shaped curve', 'Over-indebtedness'],
        hint1: 'Small loans without collateral.',
        hint2: 'Down, then back up.',
        hint3: 'Owing more than one can repay.',
        explanation: 'Small group loans repaid weekly are microfinance. A fall and rise in women\'s paid work with development is the U-shaped curve. Borrowing to repay earlier loans is over-indebtedness, the main criticism of microfinance.'
      }
    }
  ]
};
