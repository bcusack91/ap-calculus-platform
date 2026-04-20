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
              'Decline in urban market activity',
              'Widespread use of paper money and growth in commercial centers',
              'Total prohibition of foreign trade',
              'Replacement of the exam system with hereditary office'
            ],
            correctAnswer: 1,
            explanation: 'Paper money, commercialization, and urban growth are classic evidence of Song economic dynamism.'
          },
          {
            question: 'Which statement best compares Song China and feudal Japan?',
            options: [
              'Both relied on identical centralized bureaucratic institutions',
              'Song China was centralized and exam-based, while Japan remained decentralized and military-feudal',
              'Japan was more centralized than Song China',
              'Neither society had social hierarchy'
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
            options: ['Heavy cavalry expansion', 'Champa rice', 'Atlantic plantation systems', 'Steam mechanization'],
            correctAnswer: 1,
            explanation: 'Champa rice matured quickly and supported increased agricultural output in Song China.'
          },
          {
            question: 'Which institution selected many Chinese officials through Confucian learning?',
            options: ['Manorial court councils', 'Civil service examinations', 'Guild elections', 'Hereditary noble assemblies'],
            correctAnswer: 1,
            explanation: 'The exam system was central to scholar-official recruitment in imperial China.'
          },
          {
            question: 'In feudal Japan, who held most real military-political power?',
            options: ['The shogun', 'The pope', 'The civil service minister', 'The Mongol khan in Beijing'],
            correctAnswer: 0,
            explanation: 'The shogun, not the emperor, held dominant military authority in feudal Japan.'
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
            options: ['Neo-Confucianism', 'Mercantilism', 'Calvinism', 'Legal equality doctrine']
          },
          {
            label: 'Foreign-led dynasty that ruled China after the Song: ___',
            options: ['Yuan', 'Tang', 'Qing', 'Han']
          },
          {
            label: 'Decentralized military-landholding order in medieval Japan: ___',
            options: ['feudalism', 'direct democracy', 'bureaucratic meritocracy', 'industrial capitalism']
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
              'Song China and Japan both used maritime trade',
              'Korea and Japan used Chinese writing systems',
              'Japan developed feudal military rule while China maintained centralized bureaucracy',
              'East Asia had shared Buddhist traditions'
            ],
            correctAnswer: 2,
            explanation: 'The strongest refutation contrasts political structure, not just cultural overlap.'
          },
          {
            question: 'Which claim is most defensible for an SAQ on East Asia c. 1200-1450?',
            options: [
              'Chinese influence erased all regional differences',
              'East Asian states shared cultural borrowing but preserved distinct political institutions',
              'Japan and Korea had no interaction with China',
              'Mongol rule had no effect on Chinese governance or trade'
            ],
            correctAnswer: 1,
            explanation: 'This statement is nuanced and aligns with AP expectations for comparison and regional complexity.'
          }
        ]
      }
    }
  ]
}
