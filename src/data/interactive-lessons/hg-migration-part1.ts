export const hgMigrationPart1Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmig1-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration

**Part 1 of 7 — Push/Pull Factors and Migration Patterns**

---

## Types of Migration

| Type | Definition | Example |
|------|-----------|---------|
| **Immigration** | Moving INTO a country | Mexican family moving to the US |
| **Emigration** | Moving OUT of a country | Syrian refugees leaving Syria |
| **Internal migration** | Moving within a country | Rural-to-urban migration in China |
| **International migration** | Crossing national borders | Polish workers moving to the UK |
| **Voluntary migration** | By choice, for opportunity | Economic migration for jobs |
| **Forced/involuntary migration** | No choice; fleeing danger | Refugees from war or persecution |

---

## Ravenstein Laws of Migration (1885)

Ernst Ravenstein identified patterns that still apply today:

1. Most migrants move a **short distance**
2. Long-distance migrants tend to go to **major cities**
3. Each migration stream produces a **counter-stream**
4. **Urban residents** are less likely to migrate than rural
5. **Females** predominate in short-distance migration
6. Migration increases with **economic development** and **technology**

---

## Push and Pull Factors

| Push Factors (leave) | Pull Factors (attract) |
|---------------------|----------------------|
| War / conflict | Peace / stability |
| Religious / ethnic persecution | Religious / ethnic tolerance |
| Unemployment / poverty | Job opportunities |
| Environmental disaster | Better environment |
| Lack of services (education, healthcare) | Access to services |
| Political oppression | Political freedom |
      `
    },
    {
      id: 'hgmig1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to Ravenstein, most migrants travel:',
            options: [
              'Long distances to find the best opportunities',
              'Short distances, often to nearby cities',
              'Exclusively between countries',
              'In family groups of 10 or more'
            ],
            correctAnswer: 1,
            explanation: 'Ravenstein first law: most migration is short-distance. People tend to move to the nearest place that offers better opportunities.'
          },
          {
            question: 'A family fleeing civil war in Syria and resettling in Germany is an example of:',
            options: [
              'Voluntary internal migration',
              'Forced international migration',
              'Chain migration',
              'Cyclic movement'
            ],
            correctAnswer: 1,
            explanation: 'They are fleeing danger (forced, not voluntary) and crossing international borders (international, not internal). This makes them refugees.'
          },
          {
            question: 'Which of the following is a PULL factor?',
            options: [
              'Drought destroying farmland',
              'Job opportunities in a growing city',
              'Political persecution by government',
              'Civil war and violence'
            ],
            correctAnswer: 1,
            explanation: 'Pull factors ATTRACT migrants to a destination. Job opportunities pull people toward a new location, while drought, persecution, and war are all push factors.'
          }
        ]
      }
    },
    {
      id: 'hgmig1-content',
      type: 'text' as const,
      content: `
## Intervening Obstacles and Opportunities

**Intervening obstacles** are barriers that make migration harder:
- Physical: oceans, mountains, deserts
- Political: borders, visa requirements, walls
- Economic: cost of moving, language barriers
- Cultural: discrimination, unfamiliarity

**Intervening opportunities** occur when migrants find acceptable conditions before reaching their intended destination — they settle "along the way."

## Key Migration Concepts

| Term | Definition |
|------|-----------|
| **Chain migration** | Migrants follow relatives/friends who migrated first |
| **Step migration** | Moving in stages (village → town → city → abroad) |
| **Guest workers** | Temporary labor migrants (e.g., Turkish workers in Germany) |
| **Remittances** | Money sent home by migrants; major income source for developing countries |
| **Brain drain** | Loss of educated/skilled people from developing countries |
| **Diaspora** | Scattered population sharing a common origin (Jewish, Armenian, African diasporas) |
      `
    },
    {
      id: 'hgmig1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Factors that drive people away from a location are called _______ factors.

2) Money sent home by migrants working abroad is called _______.

3) The loss of educated professionals from a developing country is called brain _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['push', 'remittances', 'drain'],
        hint1: 'Pushes people to leave.',
        hint2: 'A major source of income for countries like Mexico and the Philippines.',
        hint3: 'Skilled workers leave their home country.',
        explanation: 'Push factors drive people away. Remittances = money sent home by migrants. Brain drain = loss of educated workers to other countries.'
      }
    },
    {
      id: 'hgmig1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Migration** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A farmer moves from a village to a nearby town, then later to the capital city. This is ___',
            options: ['Step migration', 'Chain migration', 'Forced migration', 'Cyclic movement']
          },
          {
            label: 'An immigrant helps their cousin get a visa and job in their new country. This is ___',
            options: ['Chain migration', 'Step migration', 'Forced migration', 'Guest worker program']
          },
          {
            label: 'The Atlantic Ocean preventing easy movement from Africa to South America is an ___',
            options: ['Intervening obstacle', 'Intervening opportunity', 'Pull factor', 'Push factor']
          }
        ],
        correctAnswers: ['Step migration', 'Chain migration', 'Intervening obstacle'],
        hint1: 'Moving in stages toward a destination.',
        hint2: 'Following family/friends who already migrated.',
        hint3: 'A physical barrier to migration.',
        explanation: 'Step migration = moving in stages. Chain migration = following family connections. Physical barriers (oceans, mountains) are intervening obstacles.'
      }
    },
    {
      id: 'hgmig1-strategy',
      type: 'text' as const,
      content: `
## Major Global Migration Patterns

### Historical
- **Transatlantic slave trade** (1500s–1800s): Largest forced migration in history
- **European colonization** (1500s–1900s): Mass emigration to Americas, Australia, Africa
- **Great Migration** (1910s–1970s): African Americans from rural South to northern cities

### Contemporary
- **South to North**: Mexico to US, North Africa to Europe, South Asia to Gulf States
- **Rural to Urban**: Largest ongoing migration worldwide; drives urbanization
- **Refugee flows**: Syria, Afghanistan, South Sudan, Myanmar → neighboring countries and Europe

> ⚠️ **AP Exam Tip:** Questions about migration almost always require you to identify push/pull factors AND classify the migration type. Be prepared to analyze a scenario and apply multiple concepts together.
      `
    },
    {
      id: 'hgmig1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'India loses many doctors and engineers to the United States and United Kingdom. This phenomenon best illustrates:',
            options: [
              'Chain migration from India',
              'Brain drain from a developing country',
              'Intervening opportunities in neighboring countries',
              'Forced migration due to political persecution'
            ],
            correctAnswer: 1,
            explanation: 'Brain drain = the emigration of highly educated and skilled professionals from developing countries to developed ones, reducing the home country human capital.'
          },
          {
            question: 'A refugee camp in Jordan houses 80,000 Syrian families who fled civil war. Which pair of push-pull factors best explains this?',
            options: [
              'Push: economic opportunity; Pull: cultural similarity',
              'Push: armed conflict; Pull: proximity and relative safety',
              'Push: natural disaster; Pull: higher wages',
              'Push: overpopulation; Pull: available farmland'
            ],
            correctAnswer: 1,
            explanation: 'Syrian refugees were pushed by civil war (forced migration) and pulled to Jordan by geographic proximity and relative stability — consistent with Ravenstein law of short-distance migration.'
          }
        ]
      }
    }
  ]
};
