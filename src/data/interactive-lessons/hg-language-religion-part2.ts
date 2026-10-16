export const hgLanguageReligionPart2Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglangua2-intro',
      type: 'text' as const,
      content: `
# 🌍 Language & Religion

**Part 2 of 7 — Language Families, Hearths and Diffusion**

---

| Section |
|---------|
| 📖 The Language Tree, Level by Level |
| The Indo-European Hearth and Its Spread |
| Bantu and Austronesian: Two Great Expansions |
| Later Spreads: Empire and Colonialism |

> 🔑 **Key Concept:** Languages that share an ancestor form a **family**, and each family has a **hearth** from which it diffused. Where a family is spoken today records ancient migrations of farmers, herders and seafarers, and much more recent colonial empires (CED Topic 3.7).
`
    },
    {
      id: 'hglangua2-tree',
      type: 'text' as const,
      content: `
## 📖 The Language Tree, Level by Level

Part 1 listed the major families. Here is how the levels nest, using English and Hindi.

| Level | Meaning | English | Hindi |
|---|---|---|---|
| **Family** | Languages descended from one ancient ancestor | Indo-European | Indo-European |
| **Branch** | A major division of a family, split several thousand years ago | Germanic | Indo-Iranian |
| **Group** | Languages within a branch that are closely related | West Germanic (with German and Dutch) | Indo-Aryan (with Bengali and Punjabi) |
| **Language** | A system of communication with its own vocabulary and grammar | English | Hindi |
| **Dialect** | A regional or social variety of one language | Scottish English, Southern American English | Regional varieties across northern India |

### Main Branches of Indo-European

| Branch | Major languages | Core region |
|---|---|---|
| **Germanic** | English, German, Dutch, Swedish | Northern and western Europe |
| **Romance** (from Latin) | Spanish, Portuguese, French, Italian, Romanian | Southern Europe, spread by the Roman Empire |
| **Balto-Slavic** | Russian, Polish, Ukrainian, Czech | Eastern Europe |
| **Indo-Iranian** | Hindi, Bengali, Persian (Farsi), Punjabi | South and Southwest Asia |

**Shared ancestry shows in vocabulary.** The word for "three" is *drei* in German, *tres* in Spanish, *tri* in Russian and *tri* in Sanskrit, an ancient Indo-Iranian language. Linguists use regular sound patterns like this to reconstruct a common ancestor called **Proto-Indo-European**.

**Language isolates** have no known relatives. **Basque**, spoken in the western Pyrenees of Spain and France, is the best-known example; it is likely older than the Indo-European languages around it.
`
    },
    {
      id: 'hglangua2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Spanish and Italian belong to the same branch, while English belongs to a different branch of the same family. Which branch includes Spanish and Italian?',
            options: [
              'Romance',
              'Germanic',
              'Balto-Slavic',
              'Indo-Iranian'
            ],
            correctAnswer: 0,
            explanation: 'Spanish and Italian descend from Latin and belong to the Romance branch of Indo-European. English is Germanic, and Hindi and Persian are Indo-Iranian.'
          },
          {
            question: 'Basque is classified as a language isolate. What does this mean?',
            options: [
              'It has no known relationship to any other language',
              'It is spoken by too few people to count as a language',
              'It is a dialect of Spanish and French spoken in one region',
              'It is a branch of the Indo-European family in Iberia'
            ],
            correctAnswer: 0,
            explanation: 'An isolate is a language with no demonstrated relatives in any family. Basque is a full language with its own grammar, not a dialect, and it is not Indo-European.'
          }
        ]
      }
    },
    {
      id: 'hglangua2-hearths',
      type: 'text' as const,
      content: `
## The Indo-European Hearth and Its Spread

Nearly half of the world's people speak an Indo-European language as their first language, from Iceland to Bangladesh. Linguists agree that the family began in a **single hearth in western Eurasia** several thousand years ago, before any written records, and spread through **relocation diffusion**, as migrating peoples carried it, and **expansion diffusion**, as neighboring groups adopted it. Its exact hearth and timing are still debated by specialists; the competing hypotheses are not tested on the AP exam. What you need is the idea of a **hearth**, the **diffusion processes** that produced today's map, and the **evidence** of shared vocabulary shown above.

### Reading Diffusion in Maps and Toponyms
The CED notes that language diffusion can be shown on **maps**, in **charts** and in **toponyms** (place names).

| Toponyms | What they record |
|---|---|
| **Los Angeles, San Antonio, Santa Fe** in the U.S. Southwest | Spanish colonization and missions, before the region became part of the United States |
| English towns ending in **-chester** or **-caster** (Manchester, Lancaster) | Latin *castra*, "camp": Roman military settlement in Britain |
| **Brooklyn** and **Harlem** in New York City | Dutch colonists, who named them after Breukelen and Haarlem in the Netherlands |

A toponym can outlast the language of the people who coined it, so place names are a record of **relocation diffusion** and of **sequent occupance**.

## Bantu and Austronesian: Two Great Expansions

**Bantu expansion (Niger-Congo family):**
- **Hearth:** near today's border of Nigeria and Cameroon.
- **Spread:** beginning about 3,000 to 5,000 years ago, Bantu-speaking farmers moved south and east over many centuries, carrying farming and later iron working.
- **Result:** Bantu languages such as Swahili, Zulu, Kinyarwanda and Shona dominate most of Africa south of the equator. The Niger-Congo family has more than 1,500 languages, more than any other family.

**Austronesian expansion:**
- **Hearth:** Taiwan, about 5,000 years ago.
- **Spread:** by outrigger canoe, through the Philippines and Indonesia, west to **Madagascar** and east across the Pacific to Hawaii, Easter Island and New Zealand, reached only about 750 years ago.
- **Result:** Malay, Indonesian, Tagalog, Malagasy, Hawaiian and Māori are related. Before 1500 CE no other family stretched across so much of the globe.

**Map described in text:** Malagasy, spoken off Africa's east coast, belongs to the same family as Hawaiian, more than 15,000 km away, yet not to the family of nearby Swahili. Only a seafaring relocation diffusion explains that pattern.
`
    },
    {
      id: 'hglangua2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Spanish place names such as San Antonio and Santa Fe are common across the U.S. Southwest, even where most residents now speak English. What do these toponyms best show?',
            options: [
              'Relocation diffusion of Spanish through colonization',
              'Stimulus diffusion of Spanish grammar into English',
              'Contagious diffusion of English from Mexico',
              'A language isolate surviving in one region'
            ],
            correctAnswer: 0,
            explanation: 'Spanish colonists and missionaries carried their language into the region and named its settlements, which is relocation diffusion recorded in toponyms. The names do not show English spreading or an isolate, and stimulus diffusion would change the underlying idea of a trait rather than leave place names behind.'
          },
          {
            question: 'Malagasy, spoken in Madagascar, is related to Indonesian rather than to nearby African languages. Which process best explains this?',
            options: [
              'Austronesian seafarers settled the island',
              'Bantu farmers carried it from West Africa',
              'Arab traders introduced it from the Gulf',
              'It formed as a pidgin among sailors'
            ],
            correctAnswer: 0,
            explanation: 'Austronesian speakers sailed west across the Indian Ocean and settled Madagascar, a case of relocation diffusion. Bantu and Arabic belong to other families, and Malagasy is a full Austronesian language, not a pidgin.'
          },
          {
            question: 'Indo-European languages are spoken as first languages from Iceland to Bangladesh. Which statement best explains this distribution?',
            options: [
              'Diffusion from one Eurasian hearth by migration and later empires',
              'Separate invention of similar languages in many regions at once',
              'Recent spread through the internet and global media alone',
              'Descent from Latin, the ancestor of every Indo-European branch'
            ],
            correctAnswer: 0,
            explanation: 'Indo-European spread from a single hearth in western Eurasia through migration and later through empires and colonialism (CED 3.7). Shared vocabulary rules out separate invention, the spread took thousands of years rather than decades, and Latin is the ancestor only of the Romance branch.'
          }
        ]
      }
    },
    {
      id: 'hglangua2-later',
      type: 'text' as const,
      content: `
## Later Spreads: Empire and Colonialism

| Period | Process | Linguistic result |
|---|---|---|
| Roman Empire, about 200 BCE to 400s CE | Latin spread through conquest and administration | Latin evolved into the Romance languages in former Roman provinces |
| 400s to 500s CE | Angles, Saxons and Jutes migrated to Britain | Old English, a Germanic language, replaced most Celtic speech in what became England |
| 1066 | Norman conquest of England | Thousands of French words entered English, such as *government*, *court* and *beef* |
| 1500s to 1900s | European colonialism (Part 4 of the culture-diffusion lesson) | Spanish, Portuguese, English and French became majority or official languages on other continents |

**Scale point:** at the **global** scale, Indo-European now dominates the Americas because of colonial relocation, but at the **local** scale many Indigenous families survive: Quechua (Andes), Guarani (Paraguay, where it is co-official with Spanish), and the Mayan languages of Guatemala and southern Mexico.

> 🔑 **AP Connection:** For a language-diffusion question, name the **family**, the **hearth** and the **process**: farming expansion, migration and conquest, seafaring, or colonialism. Then add the **type** of diffusion.
`
    },
    {
      id: 'hglangua2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Place It on the Tree** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Russian and Polish belong to the ___ branch of Indo-European',
            options: ['Balto-Slavic', 'Germanic', 'Romance', 'Indo-Iranian']
          },
          {
            label: 'Swahili and Zulu both spread through the ___',
            options: ['Bantu expansion', 'Austronesian expansion', 'Roman Empire', 'Norman conquest']
          },
          {
            label: 'Southern American English is best classified as a ___',
            options: ['Dialect', 'Language group', 'Language branch', 'Language isolate']
          }
        ],
        correctAnswers: ['Balto-Slavic', 'Bantu expansion', 'Dialect'],
        hint1: 'The branch of eastern Europe.',
        hint2: 'Farmers moving south and east from West-Central Africa.',
        hint3: 'A regional variety of one language.',
        explanation: 'Russian and Polish are Balto-Slavic. Swahili and Zulu are Bantu languages of the Niger-Congo family. A regional variety of English is a dialect.'
      }
    }
  ]
}
