export const hgEthnicityIdentityPart6Data = {
  topicSlug: 'hg-ethnicity-identity',
  sections: [
    {
      id: 'hgethnic6-intro',
      type: 'text' as const,
      content: `
# 🌍 Ethnicity, Race & Identity

**Part 6 of 7 — AP Exam Practice: Segregation Data and Ethnic Landscapes**

---

| Section |
|---------|
| 📖 Stimulus 1: Segregation in Four Metro Areas |
| Stimulus 2: A Suburban Street, Described in Text |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Questions on this topic hand you a data table, a map or a landscape scene and ask you to **identify, describe, explain** and name a **limitation**. Read the stimulus first, name the concept it shows, then link it to a process with *because* or *so*.
`
    },
    {
      id: 'hgethnic6-stimulus1',
      type: 'text' as const,
      content: `
## 📖 Stimulus 1: Segregation in Four Metro Areas

The table shows four **hypothetical** US metropolitan areas. The middle columns give the **percent of Black residents who live in majority-Black census tracts**, a simple measure of residential segregation.

| Metro area | % in majority-Black tracts, 1980 | % in majority-Black tracts, 2020 | Black share of population, 2020 |
|---|---|---|---|
| **Ardon** | 85 | 76 | 22% |
| **Eastvale** | 72 | 58 | 14% |
| **Sunmesa** | 55 | 38 | 6% |
| **Lakeview** | 64 | 61 | 30% |

### Reading the Table Before the Questions
- **Direction:** the measure fell in all four metros, so segregation declined everywhere.
- **Amount:** the declines were 9 percentage points (Ardon), 14 (Eastvale), 17 (Sunmesa) and only 3 (Lakeview).
- **Level in 2020:** Ardon and Lakeview remain **high** (above 60 percent); Eastvale and Sunmesa are lower.
- **Pattern to test:** the metros with larger Black shares changed least. The table cannot say why; that needs other data, such as lending records or the age of housing.

> 🔑 **AP Connection:** Describe a trend with **direction and size** ("fell by 17 points, from 55 to 38"), and never claim a cause the data do not show.
`
    },
    {
      id: 'hgethnic6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which metro area was the most segregated in 2020?',
            options: [
              'Ardon',
              'Sunmesa',
              'Lakeview',
              'Eastvale'
            ],
            correctAnswer: 0,
            explanation: 'Ardon\'s 76 percent is the highest in 2020: about three in four Black residents live in majority-Black tracts. Lakeview, at 61 percent, is also high but lower.'
          },
          {
            question: 'Which statement best describes the change shown in Stimulus 1?',
            options: [
              'Segregation fell in each metro, but by very different amounts',
              'Segregation rose in each metro area between 1980 and 2020',
              'Segregation fell most in the metro with the largest Black share',
              'Segregation fell below 30 percent in every metro by 2020'
            ],
            correctAnswer: 0,
            explanation: 'Every value fell, by between 3 and 17 percentage points. Lakeview, with the largest Black share, fell least, and no metro dropped below 30 percent.'
          },
          {
            question: 'Which additional data would best help explain why Lakeview\'s figure barely changed?',
            options: [
              'Mortgage lending and home prices by tract over time',
              'The total land area of the metropolitan region',
              'The share of residents who speak a second language',
              'Population growth for the whole nation since 1980'
            ],
            correctAnswer: 0,
            explanation: 'Tract-level lending and prices can show whether credit and housing costs kept groups apart, a cause of persistent segregation. Total land area, language and national growth say little about why neighborhoods stayed divided.'
          }
        ]
      }
    },
    {
      id: 'hgethnic6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Stimulus 1.

**1)** By how many percentage points did Sunmesa's figure fall from 1980 to 2020?

**2)** In Ardon in 2020, what percent of Black residents lived in majority-Black tracts?

**3)** Ardon has 2,000,000 residents. Using the table, about how many Black residents live there?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '76', '440000'],
        hint1: 'Subtract the 2020 value from the 1980 value.',
        hint2: 'Read it directly from the 2020 column.',
        hint3: 'Black residents are 22 percent of the total: 0.22 × 2,000,000.',
        explanation: '1) 55 − 38 = 17 percentage points. 2) The 2020 column shows 76 percent. 3) 0.22 × 2,000,000 = 440,000 Black residents.'
      }
    },
    {
      id: 'hgethnic6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: A Suburban Street, Described in Text

**A commercial street in a suburb about 15 miles from a large West Coast city, 2024:**

- A two-story shopping plaza with a large parking lot. Most store signs are in **Chinese characters with smaller English text** below.
- Inside the plaza: a branch of a **Taiwan-based bank**, a travel agency advertising flights to Taipei and Shanghai, a tutoring center and a supermarket selling Asian produce.
- Across the street: a **Mexican bakery**, a Vietnamese noodle shop and a chain pharmacy with English-only signs.
- Behind the street: blocks of **detached single-family homes** with two-car garages; a **Buddhist temple** occupies a former office building.

### Reading It
1. **Setting:** suburban, car-oriented, middle-class housing.
2. **Group:** a large Chinese and Taiwanese presence, shown by signs, services and worship.
3. **Mix:** other groups share the street, so the group is concentrated but not alone.
4. **Global links:** an overseas bank and travel agency tie the area to East Asia.
5. **Inference:** the scene fits an **ethnoburb**, like those of the San Gabriel Valley.
`
    },
    {
      id: 'hgethnic6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'The landscape in Stimulus 2 is best classified as part of:',
            options: [
              'A ghetto',
              'An ethnoburb',
              'An inner-city enclave',
              'A symbolic heritage district'
            ],
            correctAnswer: 1,
            explanation: 'Suburban, middle-class housing, a strong but mixed Chinese and Taiwanese presence and overseas business ties define an ethnoburb. Nothing suggests forced residence, an inner-city location or a landscape kept only for tourists.'
          },
          {
            question: 'Which element of Stimulus 2 is the strongest evidence of ties to the global economy?',
            options: [
              'A branch of a bank based in Taiwan',
              'Bilingual signs across the shopping plaza',
              'A Mexican bakery across the street',
              'Detached homes with two-car garages'
            ],
            correctAnswer: 0,
            explanation: 'An overseas bank branch moves capital between the suburb and East Asia, a direct economic link. Bilingual signs show the language of customers, the bakery shows ethnic mixing, and the homes show suburban form.'
          },
          {
            question: 'Which is a limitation of using a single street scene, like Stimulus 2, to describe a city\'s ethnic makeup?',
            options: [
              'One block may not represent the wider area',
              'It cannot show which languages businesses use',
              'It can show only residents who hold citizenship',
              'It shows only buildings older than fifty years'
            ],
            correctAnswer: 0,
            explanation: 'A commercial strip may draw customers from a wide area and differ from the residential blocks around it, so one scene is a small sample. The scene does show business languages, and it says nothing about citizenship or building age limits.'
          }
        ]
      }
    },
    {
      id: 'hgethnic6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Using Stimulus 1, identify the metro area whose segregation measure fell the most between 1980 and 2020.**
> *Model:* Sunmesa, which fell by 17 points, from 55 to 38.

**B. Describe the overall pattern of residential segregation shown in Stimulus 1.**
> *Model:* Segregation fell in all four metros between 1980 and 2020, but unevenly; Ardon and Lakeview remained highly segregated, with values above 60 percent, while Eastvale (58 percent) and Sunmesa (38 percent) fell below that.

**C. Explain one historical practice that contributed to the high segregation in metros such as Ardon.**
> *Model:* Redlining in the 1930s graded Black neighborhoods as "hazardous," so lenders and the Federal Housing Administration avoided mortgages there; Black families could not easily buy homes in other areas, and white families moved to newly built suburbs, which concentrated each group in separate tracts.

**D. Explain one limitation of using this measure to compare the four metro areas.**
> *Model:* The measure depends on each metro's overall Black share: majority-Black tracts are far more likely where Black residents are 30 percent of the population, as in Lakeview, than where they are 6 percent, as in Sunmesa, so part of the difference reflects population size rather than segregation alone.

**E. Using Stimulus 2, identify the type of ethnic neighborhood shown and give two pieces of evidence.**
> *Model:* An ethnoburb: it is suburban, with detached homes and car-oriented plazas, and it shows global economic ties, such as the branch of a Taiwan-based bank.

**F. Explain how the neighborhood in Stimulus 2 challenges the idea that groups disperse as they assimilate.**
> *Model:* That idea predicts that groups disperse as their income rises, but this neighborhood shows middle-class and affluent Chinese and Taiwanese residents choosing to cluster in a suburb, so success has not led to dispersal.

**G. Explain the difference between ethnic cleansing and genocide, using one specific example.**
> *Model:* Ethnic cleansing uses force to remove a group from a territory, while genocide is carried out with intent to destroy the group; in Rwanda in 1994, about 800,000 people, mostly Tutsi, were killed in about 100 days with the aim of destroying the Tutsi, which makes it genocide.

### Why These Answers Score
- Each **identify** answer is short and specific; each **explain** answer links cause and effect with *so* or *because*.
- Each uses **evidence from the stimulus** (55 to 38; a Taiwan-based bank) or a **dated case** (Rwanda, 1994).
- None stops at a definition.
`
    }
  ]
}
