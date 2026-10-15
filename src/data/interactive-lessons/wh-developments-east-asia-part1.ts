export const whDevelopmentsEastAsiaPart1Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea1-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 1 of 7 - Core Concepts**

---

| Section |
|---|
| Song economic growth |
| Neo-Confucian social order |
| Japan and Korea in the Sinosphere |
| AP comparison themes |

> Key idea: East Asia in this period combined strong Chinese influence with major regional variation. The AP exam expects both shared patterns and local differences.
      `
    },
    {
      id: 'whdea1-content',
      type: 'text' as const,
      content: `
## The Core Picture: Fast AP Framework

Use this structure when writing: identify a regional pattern, prove it with evidence, then show a key difference.

> **Song China: Capacity Through Growth**

- **Pattern:** Economic expansion supported stronger governance.

- Commercial expansion: market towns, paper money, long-distance trade
- Agricultural growth: Champa rice supported population increase
- Political continuity: civil service exam system and scholar-official bureaucracy
- Intellectual shift: Neo-Confucianism emphasized hierarchy, order, and moral cultivation

> **Yuan Transition: Rule Change Without Total Breakdown**

- **Pattern:** Conquest changed leadership, but major exchange networks remained active.

- Mongol conquest created a foreign-led dynasty in China
- Trade along Silk Roads and maritime routes remained active
- Social hierarchy under Mongol rule elevated non-Han groups in administration

> **Japan and Korea: Shared Influence, Different Institutions**

| State | Chinese Influence | Political Structure |
|---|---|---|
| Japan | Cultural borrowing (writing, Buddhism) | Decentralized feudal military rule (shogun, daimyo, samurai) |
| Korea (Goryeo) | Administrative and elite cultural adoption | Monarchy with distinct local political identity |

> **AP Comparison Anchor**

- **Strong thesis model:** East Asian states participated in a shared cultural sphere shaped by Chinese influence, yet maintained distinct political institutions.
      `
    },
    {
      id: 'whdea1-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which development best supports a claim that Song China experienced major economic expansion?',
            options: [
              'A ban on maritime trade that pushed merchants back into farming',
              'Widespread use of paper money and growth in commercial centers',
              'A return from cash taxes to tax payments in grain and labor service',
              'The spread of self-sufficient manors producing mainly for local use'
            ],
            correctAnswer: 1,
            explanation: 'Paper money, commercialization, and urban growth are classic evidence of Song economic dynamism. A maritime-trade ban, a return to in-kind taxes, and self-sufficient manors would all point to contraction, not expansion.'
          },
          {
            question: 'Which statement best compares Song China and feudal Japan?',
            options: [
              'Both China and Japan relied on scholar-officials chosen by exams to staff a central bureaucracy',
              'Song China was centralized and exam-based, but Japan stayed decentralized under warriors',
              'Japan was more centralized, with an emperor ruling through a salaried bureaucracy',
              'Both rested on hereditary warrior elites, and neither state used exams to choose officials'
            ],
            correctAnswer: 1,
            explanation: 'This is a high-value AP contrast: centralized bureaucracy in China versus feudal military decentralization in Japan.'
          }
        ]
      }
    },
    {
      id: 'whdea1-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which innovation most directly helped support Song-era population growth?',
            options: ['New World maize', 'Champa rice', 'Steam-powered pumps', 'Potatoes'],
            correctAnswer: 1,
            explanation: 'Champa rice, a fast-ripening strain from Southeast Asia, allowed two harvests a year and supported increased agricultural output in Song China. Maize and potatoes reached China only after the Columbian Exchange, and steam power came centuries later.'
          },
          {
            question: 'Which institution selected many Chinese officials through Confucian learning?',
            options: ['Manorial court councils', 'Civil service examinations', 'Guild elections', 'Hereditary noble assemblies'],
            correctAnswer: 1,
            explanation: 'The exam system was central to scholar-official recruitment in imperial China.'
          },
          {
            question: 'In feudal Japan, who held most real military-political power?',
            options: ['The shogun', 'The emperor', 'The court nobles', 'The Buddhist monasteries'],
            correctAnswer: 0,
            explanation: 'The shogun, not the emperor, held dominant military authority in feudal Japan; the emperor and court nobles kept ceremonial prestige but little real power.'
          }
        ]
      }
    },
    {
      id: 'whdea1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Choose the best term, then state one piece of supporting evidence out loud.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dominant ideological framework of Song elite governance: ___',
            options: ['Neo-Confucianism', 'Legalism', 'Theravada Buddhism', 'Daoism']
          },
          {
            label: 'Foreign-led dynasty that ruled China after the Song: ___',
            options: ['Yuan', 'Tang', 'Qing', 'Han']
          },
          {
            label: 'Decentralized military-landholding order in medieval Japan: ___',
            options: ['feudalism', 'meritocracy', 'absolutism', 'theocracy']
          }
        ],
        correctAnswers: ['Neo-Confucianism', 'Yuan', 'feudalism'],
        hint1: 'Think Zhu Xi and social hierarchy.',
        hint2: 'Mongol-established ruling house in China.',
        hint3: 'Think shogun, daimyo, and samurai.',
        explanation: 'High-scoring AP responses move from term recognition to evidence-backed claims about institutions and change.'
      }
    },
    {
      id: 'whdea1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application**
      `,
      exercise: {
        questions: [
          {
            question: 'A student argues that East Asia was politically uniform because of Chinese influence. Which evidence best refutes this?',
            options: [
              'Song China and Japan both took part in maritime trade across the East China Sea',
              'Korea and Japan both adapted Chinese characters for their own writing systems',
              'Japan developed feudal military rule, but China kept a centralized bureaucracy',
              'Buddhism spread from China to both Korea and Japan and shaped elite culture in each'
            ],
            correctAnswer: 2,
            explanation: 'The strongest refutation contrasts political structure — Japanese feudal military rule versus Chinese centralized bureaucracy. Shared trade, writing, and Buddhism are cultural overlap, which supports the uniformity claim rather than refuting it.'
          },
          {
            question: 'Which claim is most defensible for an SAQ on East Asia c. 1200-1450?',
            options: [
              'Chinese influence erased regional differences, giving the states identical institutions',
              'East Asian states borrowed culturally but kept distinct political institutions',
              'Japan and Korea remained cut off from China, developing with little outside contact',
              'Mongol rule left Chinese governance and trade much as they had been under the Song'
            ],
            correctAnswer: 1,
            explanation: 'This statement is nuanced and aligns with AP expectations for comparison and regional complexity: cultural borrowing (writing, Confucianism, Buddhism) alongside distinct political institutions such as Japan\'s shogunate.'
          }
        ]
      }
    }
  ]
}
