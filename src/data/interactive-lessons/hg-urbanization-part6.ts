export const hgUrbanizationPart6Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurbani6-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 6 of 7 — Urban Data and AP Exam Practice**

---

| Section |
|---------|
| 📖 Where Urban Data Come From |
| Definitions Change the Numbers |
| Stimulus: Six Census Tracts in River City |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Geographers study cities with **quantitative data** (counts and measurements, such as census tables) and **qualitative data** (people's words and observations, such as interviews and field notes). Each kind answers different questions, and both depend on **how and at what scale** the data were collected (CED Topic 6.9).
`
    },
    {
      id: 'hgurbani6-sources',
      type: 'text' as const,
      content: `
## 📖 Where Urban Data Come From

| Source | Type | What it gives you | Main weakness |
|---|---|---|---|
| **Decennial census** (U.S., every 10 years; most recent 2020) | Quantitative | A count of every resident, with age, sex, race, Hispanic origin and housing tenure | Only once a decade; asks few questions |
| **American Community Survey** (U.S. Census Bureau, every year) | Quantitative | A large sample survey with income, commuting, education, language and housing costs | Small areas need several years of pooled data, so estimates carry margins of error |
| **Interviews, oral histories, focus groups** | Qualitative | Why people moved, how they feel about change, what a place means to them | Small samples; hard to generalize |
| **Field observation and photographs** | Qualitative | Land use, building condition, signs and street life seen firsthand | Reflects what one observer saw on particular days |

### Census Geography: Choosing the Scale
| Unit | Typical size |
|---|---|
| **Census block** | The smallest unit, often one city block |
| **Block group** | A cluster of blocks within a tract |
| **Census tract** | Usually 1,200 to 8,000 people, with an optimum of about 4,000; drawn to stay stable so neighborhoods can be compared over time |
| **Metropolitan statistical area (MSA)** | An urban core of at least 50,000 people plus surrounding counties tied to it by commuting |

The same city can look segregated at the tract scale and integrated at the county scale, so always name the scale of the data.

## Definitions Change the Numbers

- **Within one country:** for the 2020 Census, the U.S. Census Bureau counted an area as urban if it had at least **2,000 housing units or 5,000 people**. Under that definition, about **80%** of Americans lived in urban areas, while the UN's 2018 estimate for the United States was about **82%**.
- **Between countries:** some Nordic countries count settlements of only about **200** people as urban, while Japan counts mainly its cities (*shi*), which generally need about **50,000** people to gain that status. Comparing percent urban across countries therefore compares different definitions.
- **Boundaries matter too:** city limits, metro areas and satellite-image definitions each give a different "largest city," as the UN's 2025 revision showed.

> 🔑 **AP Connection:** When a question asks for a **limitation** of urban data, strong answers name a specific problem: sampling error in surveys, outdated decennial counts, differing definitions of urban, or a scale that hides variation.
`
    },
    {
      id: 'hgurbani6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A planner needs yearly estimates of travel time to work for neighborhoods in a U.S. city. Which source fits best?',
            options: [
              'The American Community Survey',
              'The decennial census count',
              'A set of resident interviews',
              'A collection of street photos'
            ],
            correctAnswer: 0,
            explanation: 'The American Community Survey collects commuting data every year from a large sample. The decennial census asks only basic questions once a decade, and interviews and photographs cannot produce neighborhood-wide estimates.'
          },
          {
            question: 'Which research method produces qualitative data about a neighborhood?',
            options: [
              'Calculating changes in median rent between two census years',
              'Mapping population density for each block group in a county',
              'Recording long-time residents describing how their street changed',
              'Counting how many housing units in a tract are renter-occupied'
            ],
            correctAnswer: 2,
            explanation: 'Recorded personal accounts capture meanings and experiences in people\'s own words, which is qualitative data. Rents, densities and counts of units are all numerical, or quantitative.'
          }
        ]
      }
    },
    {
      id: 'hgurbani6-stimulus',
      type: 'text' as const,
      content: `
## Stimulus: Six Census Tracts in River City

The table describes six tracts in **River City**, a **hypothetical** U.S. metro area. A river and a parkway run north from downtown; rail yards run south.

| Tract | Location | People per sq mi | Median household income | Renter-occupied homes | Median year homes built |
|---|---|---|---|---|---|
| **1** | Downtown (CBD), 0 to 1 mile | 6,000 | \\$48,000 | 85% | 1940 |
| **2** | North, 3 miles, along the river parkway | 9,000 | \\$142,000 | 40% | 1925 |
| **3** | North, 8 miles, along the river parkway | 3,000 | \\$165,000 | 15% | 1975 |
| **4** | South, 3 miles, beside the rail yards | 11,000 | \\$36,000 | 70% | 1920 |
| **5** | South, 8 miles | 4,500 | \\$71,000 | 35% | 1965 |
| **6** | West, 14 miles, at an interstate interchange | 2,000 | \\$96,000 | 30% | 1998 |

Tract 6 also contains about 6 million square feet of office space and a regional mall.

### Reading the Table Before the Questions
1. **North:** high incomes at both 3 and 8 miles along the parkway form a wealthy **wedge** that starts near downtown, which fits Hoyt's **sector model**.
2. **South:** income rises from \\$36,000 to \\$71,000 as distance grows, a ring-like pattern that fits **Burgess**; low-income housing beside the rail yards also fits Hoyt.
3. **West:** a recent, low-density node with large office and retail space is an **edge city**, which fits the **galactic city** model.
4. **Downtown:** residential density is lower than in tracts 2 and 4 because offices outbid housing for central land, as **bid-rent theory** predicts.

**Limitation:** six tracts are a small sample, and medians hide variation inside each tract.
`
    },
    {
      id: 'hgurbani6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the River City table. Enter numbers only.

**1)** Tract 3 covers 4 square miles. About how many people live there?

**2)** Tract 5 has 18,000 residents. How many square miles does it cover?

**3)** What percent of the homes in Tract 1 are owner-occupied?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12000', '4', '15'],
        hint1: 'Population = density × area.',
        hint2: 'Area = population ÷ density.',
        hint3: 'Owner-occupied and renter-occupied homes add up to 100%.',
        explanation: '1) 3,000 × 4 = 12,000 people. 2) 18,000 ÷ 4,500 = 4 square miles. 3) 100% − 85% renters = 15% owner-occupied.'
      }
    },
    {
      id: 'hgurbani6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Identify the urban model best supported by Tracts 2 and 3.**
> *Model:* Hoyt's sector model.

**B. Explain how the data in the table support your answer to A.**
> *Model:* Median incomes are very high both 3 miles and 8 miles north along the river parkway (\\$142,000 and \\$165,000), so wealth extends outward from downtown as a wedge along an attractive corridor rather than forming a ring.

**C. Describe Tract 6 using a term from urban geography, and explain one process that produced it.**
> *Model:* Tract 6 is an edge city. Interstate highways made a suburban interchange accessible to workers and shoppers from across the metro, so offices and retail decentralized there, as the galactic city model predicts.

**D. Explain why Tract 1 has lower residential density than Tract 4.**
> *Model:* According to bid-rent theory, offices and shops pay the most for the accessible land downtown, so much of the CBD's land is used for commerce rather than housing, which lowers the number of residents per square mile.

**E. Explain one limitation of using these census data to understand how residents experience neighborhood change.**
> *Model:* Median income and rent figures show what changed but not why or how residents feel about it; interviews with long-time residents would add qualitative evidence about displacement, belonging or new services.

### Why These Answers Score
- Each **explain** links evidence to a concept with *so* or *because*.
- Each cites **specific numbers** from the stimulus.
- Each names the **model or theory** by its course name.
`
    },
    {
      id: 'hgurbani6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use the River City table.
      `,
      exercise: {
        questions: [
          {
            question: 'Which evidence from the table best supports the Burgess concentric zone model?',
            options: [
              'Income rises from Tract 4 to Tract 5 as distance from downtown grows',
              'Income stays high at both 3 and 8 miles along the river parkway',
              'Tract 6 has more office space than most suburban tracts nearby',
              'Tract 1 has the highest share of renters of any tract listed'
            ],
            correctAnswer: 0,
            explanation: 'Burgess predicts that income rises with distance from the CBD, and the southern tracts show that change. High income at two distances in one direction is a sector pattern, and office space at an interchange is an edge city.'
          },
          {
            question: 'Tract 6 is best described as which of the following?',
            options: [
              'An exurb',
              'A zone in transition',
              'An edge city',
              'A disamenity sector'
            ],
            correctAnswer: 2,
            explanation: 'A suburban node built after the 1970s at an interstate interchange, with millions of square feet of offices and a regional mall, is an edge city. A zone in transition sits next to the CBD, and a disamenity sector is a very poor area in Latin American cities.'
          },
          {
            question: 'A geographer wants to know why long-time renters are leaving Tract 2. Which additional data would help most?',
            options: [
              'A count of residents in each tract from the next census',
              'Interviews with tenants who have recently moved away',
              'A map of median home ages for every block in the metro',
              'The distance from each tract to the nearest interstate'
            ],
            correctAnswer: 1,
            explanation: 'The question asks why people are leaving, and interviews capture reasons in the residents\' own words. New counts, building ages and distances describe the tracts but cannot reveal motives.'
          }
        ]
      }
    }
  ]
}
