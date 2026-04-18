export const hgEthnicityIdentityPart1Data = {
  topicSlug: 'hg-ethnicity-identity',
  sections: [
    {
      id: 'hgei1-intro',
      type: 'text' as const,
      content: `
# 🌍 Ethnicity, Race & Identity

**Part 1 of 7 — How Identity Shapes Geography**

---

## Key Definitions

| Term | Definition | Key Point |
|------|-----------|-----------|
| **Ethnicity** | Shared cultural heritage (language, religion, customs) | Learned and cultural, not biological |
| **Race** | Classification based on physical characteristics | Socially constructed, varies by society |
| **Nationality** | Legal belonging to a nation-state | Citizenship and political identity |
| **Nation** | Group sharing culture and identity | May or may not have a state (Kurds, Palestinians) |
| **Nation-state** | A state whose territory matches a single nation | Ideal: Japan, Iceland; rare in practice |

> 🔑 **AP Key Point:** The AP exam tests the distinction between **race** (physical appearance, socially constructed) and **ethnicity** (cultural identity, learned). Know that these are geographic because they create spatial patterns.

---

## Ethnic Conflict & Spatial Patterns

| Concept | Definition | Example |
|---------|-----------|---------|
| **Segregation** | Spatial separation of ethnic groups | Apartheid South Africa, US housing patterns |
| **Ethnic enclave** | Concentration of one ethnicity in a neighborhood | Chinatowns, Little Italys |
| **Ethnic cleansing** | Forced removal of an ethnic group | Bosnia (1990s), Rwanda (1994) |
| **Gerrymandering** | Drawing political boundaries to dilute ethnic voting power | Historically used against Black voters in US |
| **Centripetal force** | Something that unifies a state | Shared language, national anthem |
| **Centrifugal force** | Something that divides a state | Ethnic tension, separatist movements |
      `
    },
    {
      id: 'hgei1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Kurds are considered a "nation without a state" because they:',
            options: [
              'Have no shared cultural identity',
              'Share cultural identity but lack an independent sovereign state',
              'All live within the borders of one country',
              'Have voluntarily given up claims to territory'
            ],
            correctAnswer: 1,
            explanation: 'The Kurds share a common language, culture, and identity (they ARE a nation) but are divided across Turkey, Iraq, Iran, and Syria — they lack their own nation-state.'
          },
          {
            question: 'Ethnic enclaves like Chinatown in San Francisco primarily result from:',
            options: [
              'Government-mandated residential zones',
              'Chain migration and desire to maintain cultural connections',
              'Random settlement patterns',
              'Environmental factors like climate preferences'
            ],
            correctAnswer: 1,
            explanation: 'Ethnic enclaves form through chain migration (following family/friends) and the desire to maintain cultural practices, language, food, and social support networks.'
          }
        ]
      }
    },
    {
      id: 'hgei1-content',
      type: 'text' as const,
      content: `
## Race as a Social Construct

Race categories vary across cultures and time periods:
- In the US, racial categories have changed dramatically across census history
- Brazil has dozens of recognized racial categories vs the US system of 5-6
- **Race is NOT biologically determined** — genetic variation within racial groups is greater than between them

### How Ethnicity Creates Geographic Patterns

1. **Residential patterns** — ethnic neighborhoods, segregation, redlining
2. **Voting districts** — gerrymandering to concentrate or dilute minority votes
3. **Conflict zones** — ethnic boundaries that do not align with political borders
4. **Migration patterns** — chain migration creates ethnic clusters
5. **Cultural landscapes** — religious buildings, signage, food, architecture reflect ethnic presence

### Centripetal vs. Centrifugal Forces

| Force Type | Effect | Examples |
|-----------|--------|----------|
| **Centripetal** | Unifies | Shared language, religion, external threats, national symbols |
| **Centrifugal** | Divides | Ethnic conflict, linguistic differences, economic inequality, separatism |
      `
    },
    {
      id: 'hgei1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Forces that unify a country (shared language, patriotism) are called _______ forces.

2) Forces that divide a country (ethnic tension, separatism) are called _______ forces.

3) A country where the territory of the state matches the territory of a single nation is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['centripetal', 'centrifugal', 'nation-state'],
        hint1: 'Pulls toward the center.',
        hint2: 'Pushes away from the center.',
        hint3: 'One nation, one state.',
        explanation: 'Centripetal = unifying forces. Centrifugal = dividing forces. Nation-state = political boundaries match cultural/national boundaries.'
      }
    },
    {
      id: 'hgei1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A national anthem played before sports events to promote unity is a ___ force',
            options: ['Centripetal', 'Centrifugal', 'Neither']
          },
          {
            label: 'Quebec separatism in Canada is a ___ force',
            options: ['Centrifugal', 'Centripetal', 'Neither']
          },
          {
            label: 'Drawing voting districts to minimize the political power of a minority group is called ___',
            options: ['Gerrymandering', 'Devolution', 'Balkanization', 'Irredentism']
          }
        ],
        correctAnswers: ['Centripetal', 'Centrifugal', 'Gerrymandering'],
        hint1: 'Promotes national pride and unity.',
        hint2: 'A movement to separate from the country.',
        hint3: 'Manipulating district boundaries.',
        explanation: 'National anthem = centripetal (unifying). Separatism = centrifugal (dividing). Gerrymandering = manipulating district lines for political advantage.'
      }
    },
    {
      id: 'hgei1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Ethnicity & Identity

- Distinguish **ethnicity** (cultural) from **race** (physical characteristics, socially constructed)
- Know examples of **stateless nations**: Kurds, Palestinians, Basques, Tibetans, Roma
- **Balkanization** = breaking a state into smaller ethnic territories (named after the Balkans)
- **Irredentism** = wanting to annex territory in another state because your ethnic group lives there
- On FRQs, always give **specific real-world examples** — not generic descriptions
      `
    },
    {
      id: 'hgei1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Russia annexing Crimea in 2014, partly justified by the presence of ethnic Russians there, is an example of:',
            options: [
              'Devolution',
              'Irredentism',
              'Balkanization',
              'Supranationalism'
            ],
            correctAnswer: 1,
            explanation: 'Irredentism = a state claiming territory in another state because of ethnic ties. Russia claimed Crimea partly because ethnic Russians were a majority there.'
          },
          {
            question: 'Yugoslavia breaking apart into Bosnia, Croatia, Serbia, Slovenia, and other states based on ethnic lines is an example of:',
            options: [
              'Supranationalism',
              'Devolution',
              'Balkanization',
              'Gerrymandering'
            ],
            correctAnswer: 2,
            explanation: 'Balkanization = the fragmentation of a state into smaller states along ethnic lines. The term literally comes from the breakup of states in the Balkan region of Europe.'
          }
        ]
      }
    }
  ]
};
