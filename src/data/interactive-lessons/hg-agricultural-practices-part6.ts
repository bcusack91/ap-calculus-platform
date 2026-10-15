export const hgAgriculturalPracticesPart6Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu6-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 6 of 7 — Food Challenges and Women in Agriculture: Stimulus Practice**

---

| Section |
|---------|
| 📖 Debates in Contemporary Agriculture |
| Stimulus 1: Hunger by World Region |
| Stimulus 2: Women in Agriculture |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Today's food debates are about **how** food is produced (biotechnology, aquaculture, organic methods), **who chooses** what is eaten (local food, diet shifts) and **who can get it** (food insecurity, food deserts). Women's roles in producing and selling food differ across places and have changed over time (CED Topics 5.11 and 5.12).
`
    },
    {
      id: 'hgagricu6-debates',
      type: 'text' as const,
      content: `
## 📖 Debates in Contemporary Agriculture

### Innovations and Their Costs
The CED says innovations such as **biotechnology, GMOs and aquaculture** come with debates over sustainability, soil and water use, **reduced biodiversity** and heavy fertilizer and pesticide use.

| Innovation | What it is | Supporters point to | Critics point to |
|---|---|---|---|
| **GMOs (biotechnology)** | Crops with genes altered in a lab, such as insect-resistant Bt corn or herbicide-tolerant soybeans | Higher yields, less insecticide; more than 90 percent of U.S. corn, soybean and cotton acres are genetically engineered (USDA ERS) | Patented seed held by a few firms; herbicide-resistant weeds; less crop diversity |
| **Aquaculture** | Farming fish, shrimp and seaweed | In 2022 it produced more aquatic animals than wild capture for the first time (FAO, 2024) | Mangroves cleared for shrimp ponds in Southeast Asia; waste and disease spreading to wild fish |

### Food Choice Movements
| Movement | Meaning | Example |
|---|---|---|
| **Organic farming** | No synthetic pesticides, synthetic fertilizers or GMOs | Certified organic land is still under 1 percent of U.S. farmland |
| **Value-added specialty crops** | Products that earn more because of how or where they are made | Fair trade coffee, heirloom tomatoes, wine labeled by region |
| **Local food and CSA** | Buying from nearby farms; in **community-supported agriculture**, members pay before the season for weekly shares | Farmers markets and CSA boxes in U.S. cities |
| **Urban farming** | Growing food inside cities | Community farms on vacant lots in Detroit |

### Dietary Shifts
As incomes rise, diets shift from grains and beans toward **meat, dairy, oils and sugar**. Global meat production has more than quadrupled since the early 1960s (FAO). Because each kilogram of beef takes several kilograms of feed grain, rising meat demand in countries such as China and Brazil drives soybean and corn expansion far away.

### Where Food Is Processed
The CED also names debates over **where farms and processing plants are located**. Since the 1960s, U.S. meatpacking moved from big-city stockyards to small towns near feedlots on the Great Plains, such as Garden City, Kansas. The plants brought jobs and immigrant workers, along with strains on housing, schools and water.
`
    },
    {
      id: 'hgagricu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Movement** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Members pay a nearby farm before the season and receive a weekly box of its harvest. This is ___',
            options: ['Community-supported agriculture', 'Fair trade certification', 'Vertical integration', 'Organic certification']
          },
          {
            label: 'Corn engineered to produce its own insecticide is an example of ___',
            options: ['Biotechnology', 'Aquaculture', 'Organic farming', 'Crop rotation']
          },
          {
            label: 'A vineyard sells wine under a regional name for a higher price than bulk grapes. This is ___',
            options: ['A value-added specialty crop', 'A subsistence crop', 'An extensive practice', 'A food-dependent export']
          }
        ],
        correctAnswers: ['Community-supported agriculture', 'Biotechnology', 'A value-added specialty crop'],
        hint1: 'Shares of the harvest are paid for in advance.',
        hint2: 'Its genes were altered in a lab.',
        hint3: 'Processing and place add to the price.',
        explanation: 'Paying a farm up front for shares of its harvest is community-supported agriculture. Bt corn is a product of biotechnology, a GMO. Wine labeled by region earns more than raw grapes, which makes it a value-added specialty crop.'
      }
    },
    {
      id: 'hgagricu6-stimulus1',
      type: 'text' as const,
      content: `
## Stimulus 1: Hunger by World Region

**Undernourishment in 2022, by region (rounded; FAO, *The State of Food Security and Nutrition in the World 2023*)**

| Region | Share of population undernourished | Number undernourished |
|---|---|---|
| Africa | about 20% | about 282 million |
| Asia | about 8.5% | about 402 million |
| Latin America and the Caribbean | about 6.5% | about 43 million |
| World | about 9% | about 735 million |

### Reading the Table Before the Questions
1. **Rate versus count.** Africa has the highest **rate**, but Asia has the most **people** affected, because Asia's population is far larger.
2. **Production is not the issue.** The world produces enough calories for everyone; hunger reflects **poverty, conflict, climate shocks and weak infrastructure** that limit access.
3. **Scale.** These are regional averages. National and local data show hunger concentrated in places such as conflict zones and drought-hit rural areas.

### Food Insecurity Close to Home: Food Deserts
A **food desert** is an area where residents have poor access to affordable, healthy food. The USDA's measure flags low-income census tracts where many residents live more than **1 mile** from a supermarket in cities, or more than **10 miles** in rural areas. Food deserts are a **local-scale** form of food insecurity found even in wealthy countries, and they often follow lines of income and race.
`
    },
    {
      id: 'hgagricu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which conclusion is best supported by the data in Stimulus 1?',
            options: [
              'Africa has the highest rate, but Asia has more hungry people',
              'Africa has the highest rate and also the most hungry people',
              'Africa has a lower rate than Latin America and the Caribbean',
              'Asia has the highest rate and also the most hungry people'
            ],
            correctAnswer: 0,
            explanation: 'About 20 percent of Africans were undernourished, the highest rate, but Asia\'s much larger population meant about 402 million hungry people, the largest count. Rates and counts can point to different regions.'
          },
          {
            question: 'The world grows enough calories to feed everyone, yet about 735 million people faced hunger in 2022. Which explanation do geographers most often give?',
            options: [
              'Many people lack the income or access to buy food',
              'Most hungry people live in the largest world cities',
              'Food aid has replaced local farming in poor regions',
              'Organic farming has lowered yields in poor regions'
            ],
            correctAnswer: 0,
            explanation: 'Hunger is mainly a problem of access, driven by poverty, conflict and climate shocks, not of total supply. Most hungry people actually live in rural areas, and organic methods cover too little land to explain it.'
          },
          {
            question: 'A low-income city neighborhood has fast-food outlets and corner stores, but the nearest supermarket is three miles away and many residents do not own cars. This area is best described as:',
            options: [
              'A food desert',
              'A brownfield',
              'An exurb',
              'A food-dependent region'
            ],
            correctAnswer: 0,
            explanation: 'Low income plus a supermarket more than a mile away in a city meets the USDA idea of a food desert. Food dependence describes national reliance on imports, and an exurb is a distant, often wealthy, commuter area.'
          }
        ]
      }
    },
    {
      id: 'hgagricu6-women',
      type: 'text' as const,
      content: `
## Stimulus 2: Women in Agriculture

**Data (rounded):**
- In developing countries, women made up about **43 percent** of the agricultural labor force, from about **20 percent in Latin America** to **nearly half in East Asia and sub-Saharan Africa** (FAO, 2011).
- On farms of the same size, plots managed by women produced about **24 percent less** than those managed by men, largely because of unequal access to land, credit, fertilizer and extension services (FAO, 2023).
- In the United States, about **36 percent** of farm producers were women in 2022 (USDA Census of Agriculture). The share rose sharply after the 2017 census began counting **up to four producers per farm** instead of one principal operator.

### How Women's Roles Differ and Change
- **By place:** women grow much of the household food in sub-Saharan Africa and run many of West Africa's food markets; in Latin America, more farm work is done by men, while women are often counted as unpaid family labor.
- **Over time:** economist Ester Boserup argued in 1970 that colonial and commercial farming often shifted land, training and machinery to men. More recently, export industries such as Kenya's cut-flower farms have hired many women as wage workers.
- **In the data:** unpaid work on family plots is often **undercounted**, so official figures can understate women's role.

## FRQ Practice with Model Answers

**A. Using Stimulus 1, explain why the number of undernourished people in Asia is higher than in Africa.**
> *Model:* Although Africa's rate (about 20 percent) is higher than Asia's (about 8.5 percent), Asia's population is several times larger, so a smaller rate applied to many more people gives a larger count, about 402 million.

**B. Explain one limitation of using regional data to study food insecurity.**
> *Model:* Regional averages hide differences within and between countries, so a conflict zone or drought-hit district with very high hunger is blended with well-fed areas, and planners cannot see where help is most needed.

**C. Using Stimulus 2, explain how a change in data collection affected the reported role of women in U.S. agriculture.**
> *Model:* Before 2017 the census recorded one principal operator per farm, usually a man, so women who co-ran farms were missed; counting up to four producers revealed many more women, raising their measured share to about 36 percent.

**D. Explain one reason women's farm productivity is lower on plots of the same size.**
> *Model:* Women often have less secure land rights and less access to credit, so they cannot buy as much fertilizer or improved seed, which lowers yields even when the land and effort are similar.
`
    },
    {
      id: 'hgagricu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'Between the 2012 and 2017 Censuses of Agriculture, the reported number of U.S. women farmers jumped, partly because the census began counting up to four producers per farm. What does this show?',
            options: [
              'A change in how data are collected altered the trend',
              'Women bought most of the farms sold during those years',
              'Mechanization pushed many men out of farming entirely',
              'Farm subsidies were limited to farms run by women'
            ],
            correctAnswer: 0,
            explanation: 'Counting more producers per farm made women who already co-ran farms visible, so part of the jump reflects measurement rather than a real change. Nothing in the data shows mass farm purchases or subsidies limited by gender.'
          },
          {
            question: 'Women make up nearly half of the agricultural labor force in sub-Saharan Africa but about a fifth in Latin America. Which statement best explains this kind of difference?',
            options: [
              'The role of women in farming varies with culture and economy',
              'Women work on farms only where machinery is scarce',
              'Climate alone determines who works in farm fields',
              'Latin American farm jobs are filled by migrants'
            ],
            correctAnswer: 0,
            explanation: 'Gender roles in farming depend on cultural norms, land rights and the kind of farm economy, which is why the CED says they differ across places. Women do farm in mechanized countries, and climate does not assign farm work by gender.'
          }
        ]
      }
    }
  ]
}
