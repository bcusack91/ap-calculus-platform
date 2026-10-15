export const whDevelopmentsEastAsiaPart3Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea3-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 3 of 7 - Patterns and Examples**

AP World rewards pattern detection backed by specific evidence. This part builds that skill.
      `
    },
    {
      id: 'whdea3-content',
      type: 'text' as const,
      content: `
## Recurring Regional Patterns

> **State-Supported Ideology**

- **Pattern:** Elite governance drew legitimacy from Confucian moral and social hierarchy.
- Song and later dynasties used Neo-Confucian thought to reinforce social hierarchy and political order.
- Korea's elite culture also reflected Confucian learning traditions.

> **Urban and Commercial Vitality**

- **Pattern:** Growth in cities and exchange networks increased regional economic integration.
- Chinese cities expanded with markets, artisans, and long-distance merchants.
- East Asia linked to broader Afro-Eurasian exchange through both overland and maritime networks.

> **Gender Hierarchy and Social Norms**

- **Pattern:** Elite social ethics reinforced patriarchal family structures.
- Neo-Confucian ethics strengthened patriarchal family order.
- Elite practices (including foot binding in parts of China) reflected status and control over women's roles.

> **Cultural Diffusion Without Political Merger**

- **Pattern:** Shared ideas spread across the region without creating one unified political system.
- Shared writing traditions and religious ideas spread across East Asia.
- Governance remained diverse: centralized China, feudal Japan, and mixed models in Korea and Vietnam.

> **AP Comparison Anchor**

- **AP move:** Identify one recurring pattern, attach one specific example, then explain one institutional difference.
      `
    },
    {
      id: 'whdea3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Pattern Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which example best illustrates cultural diffusion without full political unification?',
            options: [
              'Japan adopted selected Chinese cultural forms but kept its feudal military rule',
              'The Mongols united China and Korea under the Yuan and imposed one administration',
              'Korea rejected Chinese writing and Confucian ideas to protect its own cultural traditions',
              'The Japanese and Korean courts merged into a single kingdom under one ruling dynasty'
            ],
            correctAnswer: 0,
            explanation: 'Japan adopting selected Chinese cultural forms while preserving feudal military rule is a direct example of borrowing ideas while keeping distinct institutions. Korea in fact embraced Chinese writing and Confucianism, and Japan and Korea never merged.'
          },
          {
            question: 'What is the strongest evidence for commercialization in Song China?',
            options: [
              'A decline in internal trade as households grew their own food',
              'Rapid urban growth alongside wide use of paper currency',
              'A return to barter after copper coins vanished from circulation',
              'A ban on merchants traveling between provinces without permits'
            ],
            correctAnswer: 1,
            explanation: 'Urban expansion and monetary innovation are classic markers of Song commercial growth.'
          }
        ]
      }
    },
    {
      id: 'whdea3-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which ideology most reinforced social hierarchy in Song elite culture?',
            options: ['Neo-Confucianism', 'Legalism', 'Pure Land Buddhism', 'Daoism'],
            correctAnswer: 0,
            explanation: 'Neo-Confucian thought, which revived Confucian ethics in the Song, underpinned hierarchy, order, and moral cultivation in elite governance. Legalism was associated with the much earlier Qin, and Pure Land Buddhism and Daoism stressed salvation or harmony rather than social rank.'
          },
          {
            question: 'Which is the strongest indicator of Song commercialization?',
            options: ['Paper money circulation', 'Return to barter exchange', 'Ban on merchant travel', 'Collapse of long-distance trade'],
            correctAnswer: 0,
            explanation: 'Paper money and expanding market exchange are core evidence of Song commercial growth.'
          },
          {
            question: 'What broad process best describes the spread of ideas across societies?',
            options: ['Cultural diffusion', 'Economic autarky', 'Dynastic isolation', 'Feudal inheritance'],
            correctAnswer: 0,
            explanation: 'Cultural diffusion explains transmission of ideas and practices across regional boundaries.'
          }
        ]
      }
    },
    {
      id: 'whdea3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Pick the strongest pattern label, then connect it to one named historical example.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Expansion of urban markets and merchant activity is strongest evidence of: ___',
            options: ['commercialization', 'deurbanization', 'manorialism', 'agrarian self-sufficiency']
          },
          {
            label: 'Spread of Confucian ideas beyond China is strongest evidence of: ___',
            options: ['cultural diffusion', 'military conquest', 'economic integration', 'forced conversion']
          },
          {
            label: 'Samurai-based rule in Japan is strongest evidence of: ___',
            options: ['political divergence within a shared region', 'Chinese-style bureaucratic centralization in Japan', 'Mongol-imposed regional unification', 'isolation from mainland culture']
          }
        ],
        correctAnswers: ['commercialization', 'cultural diffusion', 'political divergence within a shared region'],
        hint1: 'Think cities, merchants, and monetary innovation.',
        hint2: 'Think ideas crossing borders without conquest.',
        hint3: 'Think institutional contrast inside one region.',
        explanation: 'Top AP responses label the pattern and show exactly how the evidence proves it.'
      }
    },
    {
      id: 'whdea3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Comparison**
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis best fits the evidence from East Asia c. 1200-1450?',
            options: [
              'Each East Asian state developed in isolation, with little cultural borrowing',
              'The region showed both cultural integration and institutional diversity',
              'Chinese models produced uniform political institutions across the whole region',
              'Commercial life declined as tributary diplomacy replaced private trade networks'
            ],
            correctAnswer: 1,
            explanation: 'This claim captures both sides of the historical pattern, making it a strong AP thesis move.'
          },
          {
            question: 'A prompt asks for one continuity in East Asia across this era. Which is best?',
            options: [
              'Persistent influence of Confucian social hierarchy in elite governance',
              'Continuous rule by a single dynasty in China across the whole era',
              'Steady decline of Buddhism as a force in Korean and Japanese life',
              'Persistent isolation of Japan from trade with the Asian mainland'
            ],
            correctAnswer: 0,
            explanation: 'Confucian hierarchy remained a durable framework in key East Asian political cultures. China moved from Song to Yuan to Ming rule, Buddhism flourished in Kamakura Japan, and Japan kept trading with the mainland.'
          }
        ]
      }
    }
  ]
}
