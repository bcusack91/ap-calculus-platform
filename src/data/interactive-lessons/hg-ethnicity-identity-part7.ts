export const hgEthnicityIdentityPart7Data = {
  topicSlug: 'hg-ethnicity-identity',
  sections: [
    {
      id: 'hgethnic7-intro',
      type: 'text' as const,
      content: `
# 🌍 Ethnicity, Race & Identity

**Part 7 of 7 — Synthesis Review: From Identity to Landscape to Conflict**

---

| Section |
|---------|
| 📖 How the Parts Fit Together |
| Two Cases Through Every Lens |
| Models and Measures with Their Limits |
| Mixed Review |

> 🔑 **Key Concept:** This topic follows one chain. People hold **identities** (ethnicity, race, nationality, gender, indigeneity); those identities mark the **landscape** and sort people into **neighborhoods**; sorting can be voluntary or forced, and geographers **measure** it; where ethnic territory and state borders clash, identity can drive **nationalism and conflict**. Every link depends on **scale**.
`
    },
    {
      id: 'hgethnic7-chain',
      type: 'text' as const,
      content: `
## 📖 How the Parts Fit Together

| Part | Big question | Core ideas |
|---|---|---|
| 1 | What are the key terms? | Ethnicity, race, nationality, nation-state; centripetal and centrifugal forces |
| 2 | How is identity defined and counted? | Layered, situational identity; census categories over time; gender and the workforce; indigenous lands |
| 3 | How does ethnicity mark places? | Enclave, ethnoburb, ghetto; Chinatown, Little Havana, Dearborn, San Gabriel Valley; placemaking |
| 4 | How is segregation measured and built? | Census scales; index of dissimilarity; redlining, covenants, blockbusting, steering |
| 5 | When does ethnicity become conflict? | Ethnonationalism, stateless nations, irredentism; ethnic cleansing versus genocide; Bosnia, Rwanda, Rohingya |
| 6 | How is it tested? | Reading tables and landscapes; explain with evidence |

## Two Cases Through Every Lens

| Lens | Chinese Americans in California | Bosnia and Herzegovina |
|---|---|---|
| **Identity** | Counted as "Asian" by the census, a category that hides Chinese, Taiwanese and other origins | Bosniaks, Serbs and Croats speak closely related, mutually intelligible languages but differ by religious heritage |
| **Landscape** | Chinatown's gate, temples and bilingual signs; ethnoburb plazas | Mosques, Orthodox and Catholic churches; renamed streets after the war |
| **Clustering** | Exclusion and choice in Chinatown; affluent, voluntary clustering in the San Gabriel Valley | Mixed towns before 1992; forced separation by 1995 |
| **Process** | Chain migration, exclusion (1882 Act), then ethnoburb formation | Ethnonationalism, ethnic cleansing and genocide at Srebrenica |
| **Measure or map** | Tract-level census data; Asian–white dissimilarity is generally lower than Black–white | Census of 1991 versus postwar maps; two entities under the Dayton Agreement |
| **Scale** | Small share of the state, a majority in some suburbs | A local war with regional refugee flows and a global tribunal |

> 🔑 **AP Connection:** A strong answer moves across lenses: "Bosnia's mixed towns (**identity, local scale**) were split by ethnonationalist forces (**process**) through ethnic cleansing (**conflict**), and the Dayton Agreement froze the result into two entities (**map**)."
`
    },
    {
      id: 'hgethnic7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly pairs an ethnic neighborhood with the main process that formed it?',
            options: [
              'Little Havana: Cuban exiles arriving after the 1959 revolution',
              'San Gabriel Valley: legal confinement of Chinese families',
              'Dearborn: affluent investors relocating from Taiwan',
              'Little Italy today: steady new arrivals from Italy'
            ],
            correctAnswer: 0,
            explanation: 'Little Havana grew from Cuban exile migration after the revolution. The San Gabriel Valley is a voluntary ethnoburb, Dearborn grew from Arab labor migration, and Little Italy now has few Italian residents.'
          },
          {
            question: 'A minority group is 4 percent of a state\'s population but more than 70 percent of several census tracts in one city. What does this best illustrate?',
            options: [
              'Patterns change with the scale of analysis',
              'The group is spread evenly across the state',
              'The census undercounts the group statewide',
              'The group has assimilated into the majority'
            ],
            correctAnswer: 0,
            explanation: 'The same group is a small minority at the state scale and a large majority at the tract scale, so the pattern you see depends on scale. The numbers show concentration, not even spread or assimilation, and nothing suggests an undercount.'
          },
          {
            question: 'After 1994, Rwanda\'s government removed ethnic labels from identity cards and promoted a single Rwandan identity. This is best described as:',
            options: [
              'A centrifugal policy that encourages separatism',
              'A centripetal policy to build national unity',
              'An irredentist claim to neighboring territory',
              'A form of segregation by place of residence'
            ],
            correctAnswer: 1,
            explanation: 'Replacing group labels with a shared national identity is meant to unify the state, a centripetal policy. It does not encourage separatism, claim land abroad or separate people by neighborhood.'
          }
        ]
      }
    },
    {
      id: 'hgethnic7-limits',
      type: 'text' as const,
      content: `
## Models and Measures with Their Limits

| Tool | What it shows | Main limitation |
|---|---|---|
| Census race and ethnicity categories | Group sizes and change over time | Categories are political choices; they change and hide diversity within groups |
| Labor force participation rate | Women's role in paid work | Leaves out unpaid care and family farm work |
| Spatial assimilation model | Groups disperse as income rises | Ethnoburbs show voluntary clustering; discrimination blocks moves |
| Place stratification | Groups stay segregated despite income | Can underplay choice and change over time |
| Invasion and succession | One group replaces another | Ecological metaphor hides policy and real estate practices |
| Index of dissimilarity | Evenness of two groups across tracts | Two groups only; ignores arrangement; depends on unit size |
| Choropleth map | Rates by area | Large, thinly settled areas dominate; class breaks shape the story |

### Five Distinctions to Know Cold
1. **Race vs. ethnicity:** a social classification by appearance vs. shared culture.
2. **Nation vs. state:** a people vs. a sovereign territory; most nations have no state of their own.
3. **Enclave vs. ethnoburb vs. ghetto:** inner-city and mostly voluntary; suburban, multiethnic and voluntary; forced.
4. **Ethnic cleansing vs. genocide:** intent to remove vs. intent to destroy.
5. **Redlining vs. blockbusting vs. steering:** lenders denying credit to areas; agents exploiting fear to flip blocks; agents limiting where buyers look.
`
    },
    {
      id: 'hgethnic7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pick the Right Tool** 🔍

Choose the best tool or concept for each task.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Measure how unevenly two groups are spread across a city\'s tracts: ___',
            options: ['index of dissimilarity', 'dot density map', 'labor force participation rate', 'spatial assimilation model']
          },
          {
            label: 'Show exactly where members of each group live and where sharp edges between groups fall: ___',
            options: ['index of dissimilarity', 'dot density map', 'labor force participation rate', 'spatial assimilation model']
          },
          {
            label: 'Predict what happens to an enclave as its residents gain income and education: ___',
            options: ['index of dissimilarity', 'dot density map', 'labor force participation rate', 'spatial assimilation model']
          },
          {
            label: 'Compare how much women take part in paid work in two regions: ___',
            options: ['index of dissimilarity', 'dot density map', 'labor force participation rate', 'spatial assimilation model']
          }
        ],
        correctAnswers: ['index of dissimilarity', 'dot density map', 'spatial assimilation model', 'labor force participation rate'],
        hint1: 'A single number from 0 to 100.',
        hint2: 'One dot per person, colored by group.',
        hint3: 'A model that expects dispersal with success.',
        explanation: 'The index of dissimilarity measures evenness. A dot density map shows where people live. The spatial assimilation model predicts dispersal as income rises. The labor force participation rate measures paid work.'
      }
    },
    {
      id: 'hgethnic7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which situation best supports the place stratification model rather than the spatial assimilation model?',
            options: [
              'Second-generation Italian Americans moving to the suburbs',
              'High-income Black families remaining highly segregated',
              'New Yemeni arrivals renting near relatives in Dearborn',
              'Cuban Americans leaving Little Havana as incomes rose'
            ],
            correctAnswer: 1,
            explanation: 'Place stratification holds that discrimination keeps some groups segregated whatever their income, which fits high-income Black families who remain segregated. The Italian and Cuban moves fit spatial assimilation, and newcomers near relatives are the enclave stage both models expect.'
          },
          {
            question: 'Why do geographers describe race as a social construct?',
            options: [
              'Categories differ across societies and eras',
              'Racial groups differ mainly in their language',
              'Genetic tests sort people into a few clear races',
              'Every society counts people in the same few groups'
            ],
            correctAnswer: 0,
            explanation: 'Racial categories change from Brazil to the United States and from one US census to the next, which shows they are built by societies. Language marks ethnicity, genetic variation does not form clear racial groups, and societies use different categories.'
          },
          {
            question: 'In three years, a minority\'s share of a region fell from 40 percent to under 5 percent as armed groups burned villages and residents fled across a border. Which term best fits?',
            options: [
              'Succession',
              'Irredentism',
              'Balkanization',
              'Ethnic cleansing'
            ],
            correctAnswer: 3,
            explanation: 'Using force and terror to drive a group out and make the region homogeneous is ethnic cleansing. Succession is gradual replacement, irredentism is a claim on a neighbor\'s land, and balkanization is a state breaking apart.'
          }
        ]
      }
    }
  ]
}
