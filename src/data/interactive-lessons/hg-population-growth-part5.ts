export const hgPopulationGrowthPart5Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula5-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 5 of 7 — Policies, Women and Aging**

---

| Section |
|---------|
| 📖 Population Policies |
| Women and Demographic Change |
| Aging Populations |
| Common Misconceptions |

> 🔑 **Key Concept:** Governments try to change population through **pro-natalist** policies (encouraging births), **anti-natalist** policies (discouraging births) and **immigration** policies. Their results depend heavily on the social and economic roles of **women**, and the countries that most want more births are usually the ones facing **aging** populations.
`
    },
    {
      id: 'hgpopula5-policies',
      type: 'text' as const,
      content: `
## 📖 Population Policies

| Policy type | Goal | Typical tools |
|---|---|---|
| **Pro-natalist** | Raise fertility | Cash allowances, tax breaks, paid parental leave, subsidized child care, housing help |
| **Anti-natalist** | Lower fertility | Family-planning programs, contraception access, birth limits, penalties, incentives for sterilization |
| **Immigration** | Shape who enters and how many | Points systems, work visas, quotas, guest-worker programs, border restrictions |

### Pro-Natalist Cases

| Country | Policies | Result |
|---|---|---|
| **France** | Family allowances since the 1930s, tax cuts that grow with family size, subsidized child care, parental leave | TFR stayed between about 1.8 and 2.0 for most of 2000–2020, higher than most of Europe, then fell to about **1.6** in 2024 (INSEE) |
| **Hungary** | Since the 2010s: loans forgiven after a third child, housing grants, a lifetime income-tax exemption for mothers of four or more | TFR rose from about **1.2** (2011) to about **1.6** (2021), then slipped back to about **1.4** (2024) |
| **South Korea** | About 280 trillion won (more than \\$200 billion) spent on low-birth-rate measures from 2006 to 2021 | TFR fell anyway, from about **1.1** in 2006 to **0.72** in 2023, then edged up to about 0.75 in 2024 |

**Pattern:** pro-natalist money tends to have **small or temporary** effects. Many couples have fewer children than they say they want because of housing costs, education costs, long working hours and an unequal share of child care at home, and cash payments do not remove those barriers.

### Anti-Natalist Cases

**China**
- **1980:** the one-child policy limits most urban couples to one child, enforced through fines and workplace penalties and, in many places, forced abortions and sterilizations. Rural families whose first child was a girl and many ethnic minorities were often allowed a second child.
- Fertility had **already fallen** from about 6 in the late 1960s to under 3 by 1979, under the 1970s "later, longer, fewer" campaign, so the policy was not the only cause of China's decline.
- **Consequences:** a sex ratio at birth well above the natural level of about 105 boys per 100 girls (it exceeded 115 in the 2000s) because of son preference and sex-selective abortion; rapid aging; "4-2-1" families in which one child supports two parents and four grandparents.
- **2016:** two-child policy. **2021:** three-child policy, soon followed by the removal of birth limits and penalties.
- **2022:** China's population declined for the first time since 1961, with a TFR of about 1.0 by the early 2020s.

**India**
- During the **Emergency (1975–77)**, the government ran a mass sterilization drive with quotas; millions of people, mostly poor men, were sterilized, many under coercion.
- Public backlash contributed to the government's defeat in the 1977 election, and family planning shifted toward **voluntary** methods and maternal and child health.
- India's TFR reached about **2.0** in its 2019–21 national survey, largely through education, urbanization and voluntary contraception.

### Immigration Policies

| Country | Policy | Purpose |
|---|---|---|
| **Canada** | Points-based system (since 1967) scoring education, language ability and work experience | Selects skilled workers; immigration is the main source of Canada's population growth |
| **Japan** | Historically very restrictive; created the Specified Skilled Worker visa in **2019** | Fill labor shortages in sectors such as nursing care and construction |
| **Gulf states** (e.g., Qatar, UAE) | Temporary guest-worker programs | Large male labor force for construction, with limited paths to citizenship |

> 🔑 **AP Connection:** For "explain the effect of a population policy," name the policy type, the mechanism and an outcome. China's one-child policy is anti-natalist; it lowered births, but it also produced an unbalanced sex ratio and accelerated aging, which is why China reversed it.
`
    },
    {
      id: 'hgpopula5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which of the following is an example of a pro-natalist policy?",
            options: [
              "Tax breaks for families with a third child",
              "Free sterilization offered to parents of two",
              "Fines charged to couples who have a second child",
              "Points awarded to immigrants with job skills"
            ],
            correctAnswer: 0,
            explanation: "Pro-natalist policies make having children easier or more rewarding, as a tax break for a third child does. Sterilization incentives and fines are anti-natalist, and a points system is an immigration policy."
          },
          {
            question: "China's TFR fell from about 6 in the late 1960s to under 3 by 1979. What does this suggest about the one-child policy introduced in 1980?",
            options: [
              "Much of China's fertility decline happened before it began",
              "It was the only cause of the fall in China's fertility rate",
              "It raised fertility at first, before birth rates finally fell",
              "It ended China's rapid aging by keeping families small"
            ],
            correctAnswer: 0,
            explanation: "A large share of the decline came under the earlier \"later, longer, fewer\" campaign and social change, so the one-child policy cannot be the only cause. Keeping families small speeds aging rather than ending it."
          },
          {
            question: "South Korea spent more than \\$200 billion on low-birth-rate measures from 2006 to 2021, yet its TFR fell to 0.72 by 2023. Which conclusion is best supported?",
            options: [
              "Incentives did not outweigh the high costs of raising children",
              "The money went mainly to aging programs instead of families",
              "Immigration lowered the birth rate faster than spending raised it",
              "A one-child limit remained in force throughout this period"
            ],
            correctAnswer: 0,
            explanation: "Housing, education costs and long working hours kept desired family size low despite the spending, a pattern seen in many pro-natalist programs. South Korea never had a one-child law, and immigration is too small to explain the decline."
          }
        ]
      }
    },
    {
      id: 'hgpopula5-women',
      type: 'text' as const,
      content: `
## Women and Demographic Change

Changes in the **social, economic and political roles of women** shape fertility, mortality and migration. This is CED topic 2.8, and it is often the strongest explanation for falling fertility.

### How Women's Roles Lower Fertility

| Change | Mechanism |
|---|---|
| **More years of schooling** | Delays marriage and the first birth; improves knowledge of contraception and child health |
| **Paid work outside the home** | Raises the **opportunity cost** of each additional child; gives women income of their own |
| **Access to contraception** | Lets women have the number of children they want, when they want |
| **Legal and political rights** | Greater say over marriage age, property and household decisions |
| **Lower child mortality** | Educated mothers' children are more likely to survive, so fewer "insurance births" are needed |

### Case: Bangladesh

Bangladesh's TFR fell from close to **7** around 1970 to about **2** by the early 2020s (World Bank), even though it remained a low-income country for most of that period. Contributing factors included stipends that kept girls in secondary school, a large female workforce in the garment industry, and community health workers who brought contraception to rural homes.

### Case: Kerala, India

Kerala has long had very high female literacy. Its TFR was about **1.8** in India's 2019–21 national survey, below replacement, while Bihar, with much lower female literacy, was about **3.0**. Same country, same national policies, different outcomes: a reminder that scale matters.

### Women and Migration and Mortality

- **Migration:** more women now migrate independently for work, such as Filipino nurses and domestic workers in the Middle East, a trend sometimes called the feminization of migration.
- **Mortality:** education and prenatal care reduce **maternal mortality** and infant mortality.

> 🔑 **AP Connection:** The CED asks you to explain how changing roles of women affect population. A complete answer links a **role** (education, employment, rights) to a **demographic outcome** (lower TFR, later first birth, lower IMR) through a **mechanism**.
`
    },
    {
      id: 'hgpopula5-aging',
      type: 'text' as const,
      content: `
## Aging Populations

### Worked Example: Dependency Ratios for Japan and Niger

Part 1 defined the **dependency ratio** as people under 15 and over 64 per 100 people aged 15–64. Rounded age shares:

| Country | Under 15 | 15–64 | 65+ |
|---|---|---|---|
| Japan (2024) | about 11% | about 60% | about 29% |
| Niger (about 2023) | about 49% | about 48% | about 3% |

**Japan**
1. Total dependency ratio = (11 + 29) ÷ 60 × 100 ≈ **67**
2. Old-age dependency ratio = 29 ÷ 60 × 100 ≈ **48**

**Niger**
1. Total dependency ratio = (49 + 3) ÷ 48 × 100 ≈ **108**
2. Youth dependency ratio = 49 ÷ 48 × 100 ≈ **102**

Niger's total dependency is **higher** than Japan's, but for the opposite reason. Niger needs schools, vaccines and future jobs; Japan needs pensions, hospitals and elder care.

### Consequences of an Aging Population

| Area | Effect | Real example |
|---|---|---|
| **Pensions** | Fewer workers pay in for each retiree | France raised its minimum retirement age from 62 to 64 in 2023, despite mass protests |
| **Health and elder care** | Rising demand for hospitals, nursing homes and caregivers | Japan's 65+ share reached about **29.3%** in 2024, the highest of any country with at least 100,000 people |
| **Labor force** | Worker shortages, especially in care and construction | Japan's 2019 Specified Skilled Worker visa; investment in robots for elder care |
| **Housing and rural areas** | Depopulated villages, closed schools, vacant homes | Japan's 2023 housing survey counted about 9 million vacant homes |
| **Gender** | Women outlive men, so the oldest age groups are mostly female | In Japan, about 32% of women but 26% of men were 65+ in 2024 |
| **Politics** | Older voters gain influence over spending priorities | Debates over pension levels versus child-care funding |

Italy faces the same pressures: about **24.6%** of its people were 65 or older in 2024, and its TFR is about **1.2**.

### Responses Countries Use

- **Raise the retirement age** or adjust pension formulas
- **Encourage more women and older adults** to stay in paid work
- **Admit more immigrants**, especially working-age adults
- **Automate** tasks with robots and technology
- **Pro-natalist policies**, which help only in the long run, since a baby born today will not work for about 20 years
`
    },
    {
      id: 'hgpopula5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A country's population is **18%** under 15, **62%** aged 15–64 and **20%** aged 65 and over.

**1)** What is its total dependency ratio? Round to the nearest whole number.

**2)** What is its old-age dependency ratio? Round to the nearest whole number.

**3)** How many working-age people are there for each person aged 65 and over? Round to one decimal place.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['61', '32', '3.1'],
        hint1: 'Add the under-15 and 65+ shares, divide by the 15–64 share, then multiply by 100.',
        hint2: 'Use only the 65+ share in the numerator.',
        hint3: 'Divide the 15–64 share by the 65+ share.',
        explanation: '1) (18 + 20) ÷ 62 × 100 ≈ 61. 2) 20 ÷ 62 × 100 ≈ 32. 3) 62 ÷ 20 = 3.1 working-age people for each older person, a ratio that shrinks as the country ages.'
      }
    },
    {
      id: 'hgpopula5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correction |
|---|---|
| "Paying families to have children reliably raises fertility." | Effects are usually small or temporary; South Korea's TFR kept falling despite heavy spending. |
| "China's one-child policy alone caused its fertility decline." | China's TFR had already fallen from about 6 to under 3 before 1980. |
| "A high dependency ratio means a country is aging." | Niger's dependency ratio is higher than Japan's because of children, not elders. |
| "Immigration can permanently stop a population from aging." | Immigrants also grow old; offsetting aging would require very large, sustained inflows. |
| "Women's education lowers fertility only through contraception." | It also delays marriage, raises the opportunity cost of children and improves child survival. |
| "Anti-natalist policies are only about birth limits." | Most anti-natalist policy today means voluntary family planning and contraception access. |

> 🔑 **AP Connection:** FRQs often pair a policy with an aging outcome. For example: "Explain one way China's one-child policy contributes to its current labor shortage." Link the policy to fewer births, then to fewer people entering the workforce 20 or more years later.
`
    },
    {
      id: 'hgpopula5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Bangladesh's TFR fell from close to 7 around 1970 to about 2 by the early 2020s while incomes stayed relatively low. Which factor best explains much of this decline?",
            options: [
              "Expanded schooling, paid work and contraception access for women",
              "A strict one-child law enforced with fines and penalties",
              "A sharp rise in infant mortality that discouraged births",
              "Large-scale emigration of young women to the Persian Gulf"
            ],
            correctAnswer: 0,
            explanation: "Girls' schooling, garment-industry jobs and door-to-door family-planning workers lowered desired family size and gave women the means to achieve it. Bangladesh never had a one-child law, and infant mortality fell rather than rose."
          },
          {
            question: "Niger's total dependency ratio is higher than Japan's. What best explains this?",
            options: [
              "Nearly half of Niger's people are children",
              "Older adults make up a large share in Niger",
              "Working-age migrants have left Japan in large numbers",
              "Few people in Japan live past the age of 65"
            ],
            correctAnswer: 0,
            explanation: "About half of Niger's population is under 15, which pushes its youth dependency ratio above 100. Only about 3% of Niger's people are 65 or older, while Japan's elderly share is among the highest in the world."
          },
          {
            question: "Which response to an aging population addresses a labor shortage most directly?",
            options: [
              "Issuing work visas for caregivers and builders",
              "Building more nursing homes in rural towns",
              "Cutting the number of school places for children",
              "Lowering the pension age so workers retire early"
            ],
            correctAnswer: 0,
            explanation: "Work visas add working-age people to sectors short of labor, as Japan's 2019 visa does. Nursing homes add demand for workers rather than supply, and an earlier pension age removes workers from the labor force."
          }
        ]
      }
    }
  ]
}
