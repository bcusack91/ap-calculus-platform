export const hgMigrationPart6Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmigrat6-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration Patterns & Processes

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Migration Appears on the Exam |
| Stimulus Set 1: Venezuelan Emigration |
| A Full FRQ With Model Answers |
| Stimulus Set 2: Data Tables and Pyramids |

> 🔑 **Key Concept:** AP Human Geography tests migration through **stimuli**: flow maps, data tables, population pyramids and short passages. Every answer follows the same pattern: **name the concept**, **tie it to the specific evidence**, and **explain the connection** at the right **scale**.
`
    },
    {
      id: 'hgmigrat6-format',
      type: 'text' as const,
      content: `
## 📖 How Migration Appears on the Exam

### Multiple Choice
Most migration multiple-choice questions give a stimulus and ask you to **classify** (forced or voluntary, refugee or IDP, push or pull), **apply a model** (Ravenstein, distance decay, intervening obstacles), **calculate** (net migration rate, total growth) or **identify an effect**.

### Free Response
Each free-response question has seven parts, usually labeled A to G, and each part uses a task verb.

| Task verb | What graders want | Typical length |
|---|---|---|
| **Identify** | A specific name, place or term | One phrase or sentence |
| **Describe** | The characteristics of something, with detail | One or two sentences |
| **Explain** | **How or why**: a cause-and-effect link | Two or three sentences with "because" or "which leads to" |
| **Compare** | A similarity or difference between two things, stated explicitly | Two sentences naming both things |

### Four Habits That Earn Points
1. **Use the stimulus.** Quote a place, number or pattern from it.
2. **Use the course term.** "Intervening obstacle," not "a hard part of the trip."
3. **Name the scale or place.** "In the sending country" or "in Colombia."
4. **Answer only what is asked.** An "identify" needs no essay, and an "explain" needs more than a word.

> 🔑 **AP Connection:** A common lost point is **describing instead of explaining**. "Many Venezuelans moved to Colombia" describes. "Many Venezuelans moved to Colombia **because** it shares a long land border and a language with Venezuela, **which lowered** the cost of moving" explains.
`
    },
    {
      id: 'hgmigrat6-stimulus1',
      type: 'text' as const,
      content: `
## Stimulus Set 1: Venezuelan Emigration

**Stimulus (a flow map described in text):** *Venezuelan emigration, about 2015–2024.* Arrows leave Venezuela in many directions. The **thickest** arrow crosses the land border west into **Colombia**. The next thickest runs south through Colombia and Ecuador to **Peru**. Medium arrows reach **Brazil, Chile and Ecuador**, and thinner arrows reach the **United States** and **Spain**. A note gives the total: about **7.7 million** Venezuelans living abroad by 2024, most of them in Latin America and the Caribbean.

**Background:** Venezuela's economy collapsed in the mid-2010s, with hyperinflation, shortages of food and medicine, and political repression. In 2021 **Colombia** created a **Temporary Protection Statute** giving Venezuelans in the country a ten-year legal status, which allowed them to work legally and use public services.
`
    },
    {
      id: 'hgmigrat6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Set 1 Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The thickest arrow on the map runs from Venezuela to Colombia. Which concept best explains this pattern?',
            options: [
              'Distance decay, because Colombia is the closest major destination',
              'Brain drain, because Colombia mainly recruits skilled professionals',
              'Transhumance, because migrants move seasonally across the border',
              'Counter-stream, because Colombians once migrated to Venezuela'
            ],
            correctAnswer: 0,
            explanation: 'Migration declines with distance, and Colombia shares a long land border and a language with Venezuela, so it received the largest flow. The flow is not limited to skilled workers, is not seasonal herding, and a counter-stream would flow back toward the original origin rather than explain the size of this one.'
          },
          {
            question: 'Venezuelans heading to the United States by land must cross the Darién Gap, a roadless rainforest between Colombia and Panama. The Darién Gap is best described as',
            options: [
              'a pull factor',
              'a push factor',
              'an intervening obstacle',
              'an intervening opportunity'
            ],
            correctAnswer: 2,
            explanation: 'The Darién Gap is a physical barrier between origin and destination that raises the danger and cost of moving, which makes it an intervening obstacle. It neither attracts migrants nor drives them from Venezuela, and it offers no reason to stop and settle.'
          },
          {
            question: 'Colombia\'s 2021 Temporary Protection Statute is best classified as which kind of effect of Venezuelan migration?',
            options: [
              'A political effect at the destination',
              'A demographic effect at the origin',
              'A cultural effect at the destination',
              'An economic effect at the origin'
            ],
            correctAnswer: 0,
            explanation: 'A new legal status created by Colombia\'s government is a policy response, a political effect, and it applies in the destination country. It changes neither Venezuela\'s population structure nor its economy directly, and it is not a change in customs or the cultural landscape.'
          },
          {
            question: 'Why is it contested whether most Venezuelan emigrants should be counted as refugees?',
            options: [
              'Most of them crossed land borders rather than seas',
              'Their reasons mix poverty and repression',
              'Most of them moved only within Venezuela itself',
              'They left mainly to join relatives in Spain'
            ],
            correctAnswer: 1,
            explanation: 'The 1951 Convention centers on persecution, and many Venezuelans left because of economic collapse combined with repression, so their status sits between forced and voluntary. Crossing a land border does not affect refugee status, they did leave the country, and the map shows Spain as a minor destination.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat6-frq',
      type: 'text' as const,
      content: `
## A Full FRQ With Model Answers

Use Stimulus Set 1 (the Venezuelan flow map and background).

| Part | Prompt | Model answer |
|---|---|---|
| **A** | **Identify** the country that received the largest flow of Venezuelan migrants. | Colombia. |
| **B** | **Describe** one push factor that caused Venezuelans to emigrate, and name its category. | Hyperinflation destroyed the value of wages and savings, so families could not afford food. This is an **economic** push factor. |
| **C** | **Explain** how the map supports Ravenstein's generalization that most migrants move a short distance. | The thickest arrows go to neighboring Colombia and to other South American countries, while flows to the US and Spain are thin. Migrants chose nearby destinations **because** moving there cost less and required no sea or air crossing. |
| **D** | **Explain** one intervening obstacle for Venezuelans trying to reach the United States. | The Darién Gap is a roadless rainforest between Colombia and Panama. Crossing it on foot is dangerous and costly, **which reduces** the number of Venezuelans who reach the US border and helps explain why the US arrow is thin. |
| **E** | **Explain** why some Venezuelan emigrants may not meet the legal definition of a refugee. | The 1951 Refugee Convention protects people with a well-founded fear of **persecution**. A Venezuelan who left mainly because of food shortages and unemployment faces economic hardship, which the Convention does not cover. |
| **F** | **Explain** one economic effect of Venezuelan migration on Colombia. | Hundreds of thousands of working-age Venezuelans entered Colombia's labor market, **which increased** the labor supply in sectors such as street vending, farming and construction. The Temporary Protection Statute let more of them work legally, adding taxpayers to the formal economy. |
| **G** | **Explain** one limitation of using this flow map to understand the effects of emigration on Venezuela. | Arrow width shows only the **number** of migrants, not their **age, sex or skills**. The map cannot show whether Venezuela lost mostly young adults or skilled professionals, which is what determines brain drain and future population aging. |

### Scoring Notes
- Part **A** earns credit for the country name alone.
- Parts **C, D and F** need a **because** or **which leads to** link; a bare fact ("there is a jungle") earns nothing.
- Part **E** needs the **legal definition** (persecution) and the **mismatch** with economic motives.
- Part **G** needs a **specific missing variable** and why it matters.

> 🔑 **AP Connection:** Notice that every model answer uses a **term from the course** and a **detail from the stimulus**. Practice writing each part in two or three sentences; long essays do not earn extra points.
`
    },
    {
      id: 'hgmigrat6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** A country of 4,000,000 people receives 10,000 immigrants and loses 30,000 emigrants in a year. What is its net migration rate per 1,000? (Include the sign.)

**2)** The same country has a crude birth rate of 15 and a crude death rate of 7 per 1,000. Using your answer to question 1, what is its total growth rate per 1,000?

**3)** A country receives \\$2 billion in remittances and has a GDP of \\$8 billion. What percent of GDP do remittances equal? Enter a number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5', '3', '25'],
        hint1: 'Net migration = 10,000 − 30,000 = −20,000. Divide by 4,000,000 and multiply by 1,000.',
        hint2: 'Natural increase is 15 − 7 = 8. Add your net migration rate.',
        hint3: 'Divide remittances by GDP and multiply by 100.',
        explanation: '1) −20,000 ÷ 4,000,000 × 1,000 = −5 per 1,000. 2) 8 + (−5) = +3 per 1,000, so the country grows despite net out-migration. 3) 2 ÷ 8 × 100 = 25%.'
      }
    },
    {
      id: 'hgmigrat6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus Set 2: Data Tables and Pyramids

**Table: Selected rates per 1,000 people, hypothetical countries, one year**

| Country | Crude birth rate | Crude death rate | Net migration rate |
|---|---|---|---|
| **P** | 9 | 12 | +6 |
| **Q** | 32 | 8 | −4 |
| **R** | 11 | 10 | −7 |
| **S** | 14 | 9 | +1 |

**Population pyramid (described in text): Country T.** The base is narrow, showing few young children. The bars for ages 20 to 39 are **noticeably shorter** than the bars just above and below them, on both the male and female sides. The bars for ages 60 and older are wide.

**Passage (adapted from news coverage of rural Mexico):** *In many villages of Zacatecas, most working-age men have left for jobs in the United States. Their wives run the farms, grandparents care for the children, and new two-story houses built with money sent from abroad stand half-empty for most of the year.*
`
    },
    {
      id: 'hgmigrat6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Set 2 Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the table, which country\'s population is shrinking?',
            options: [
              'Country P',
              'Country Q',
              'Country R',
              'Country S'
            ],
            correctAnswer: 2,
            explanation: 'Country R\'s natural increase is 11 − 10 = +1 and its net migration is −7, so total growth is −6 per 1,000. Country P grows by 3, Q by 20 and S by 6 per 1,000.'
          },
          {
            question: 'Country P has more deaths than births but still grows. What does this most likely indicate?',
            options: [
              'Immigration outweighs its natural decrease',
              'Its death rate is falling faster than its birth rate',
              'It is in an early stage of the demographic transition',
              'Its emigrants are sending large remittances home'
            ],
            correctAnswer: 0,
            explanation: 'Natural increase is 9 − 12 = −3, and net migration of +6 brings total growth to +3 per 1,000, so immigration offsets natural decrease. Remittances do not add people, and early transition stages have high birth rates, not low ones.'
          },
          {
            question: 'Country T\'s pyramid has short bars from ages 20 to 39 on both sides. Which process best explains this feature?',
            options: [
              'Emigration of young adult workers',
              'Arrival of foreign male workers',
              'A recent rise in the birth rate',
              'Falling death rates among elderly'
            ],
            correctAnswer: 0,
            explanation: 'A gap in the young-adult bars on both sides, with a small base and a wide top, fits a sending country losing working-age people. Arriving workers would widen those bars, and a rising birth rate would widen the base.'
          },
          {
            question: 'Which effect of emigration does the Zacatecas passage most clearly describe?',
            options: [
              'Ethnic enclaves forming in rural Mexican villages',
              'A sex imbalance and remittance-funded housing at the origin',
              'Brain gain as skilled professionals return to Zacatecas',
              'Political conflict over border rules in the destination'
            ],
            correctAnswer: 1,
            explanation: 'The passage shows villages missing working-age men and new houses paid for by money from abroad, which are demographic and economic effects at the origin. Nothing describes enclaves, returning professionals or border politics.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Task Verb** 🔍

Choose the task verb that each model answer satisfies.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Colombia." ___',
            options: ['identify', 'describe', 'explain', 'compare']
          },
          {
            label: '"Remittances raise household incomes in Zacatecas, which lets families build houses and pay school fees, but households become dependent on US wages." ___',
            options: ['identify', 'describe', 'explain', 'compare']
          },
          {
            label: '"Both Qatar and Bulgaria have unusual pyramids, but Qatar gains young working-age men while Bulgaria loses young adults of both sexes." ___',
            options: ['identify', 'describe', 'explain', 'compare']
          }
        ],
        correctAnswers: ['identify', 'explain', 'compare'],
        hint1: 'A single name with no reasoning answers the simplest verb.',
        hint2: 'Look for a cause-and-effect link such as "which lets."',
        hint3: 'Two places set side by side with "both" and "but."',
        explanation: 'A bare name identifies. A cause-and-effect chain explains. Naming two places and stating how they are alike and different compares.'
      }
    }
  ]
}
