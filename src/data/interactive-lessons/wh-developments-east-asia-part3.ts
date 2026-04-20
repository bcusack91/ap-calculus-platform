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
              'Japan adopted selected Chinese cultural forms while preserving feudal military rule',
              'China abolished all social hierarchy',
              'Korea adopted no external influences',
              'All East Asian kingdoms merged into one empire'
            ],
            correctAnswer: 0,
            explanation: 'This is a direct example of borrowing ideas while preserving distinct institutions.'
          },
          {
            question: 'What is the strongest evidence for commercialization in Song China?',
            options: [
              'Sharp decline in all internal trade',
              'Growth of cities, market exchange, and paper currency use',
              'Complete return to subsistence economy',
              'Ban on merchant activity in all regions'
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
            options: ['Neo-Confucianism', 'Classical liberalism', 'Calvinism', 'Romantic nationalism'],
            correctAnswer: 0,
            explanation: 'Neo-Confucian thought underpinned hierarchy, order, and moral cultivation in elite governance.'
          },
          {
            question: 'Which is the strongest indicator of Song commercialization?',
            options: ['Paper money circulation', 'Total urban decline', 'Ban on merchants', 'Collapse of long-distance trade'],
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
            options: ['commercialization', 'deurbanization', 'isolationism', 'serf emancipation']
          },
          {
            label: 'Spread of Confucian ideas beyond China is strongest evidence of: ___',
            options: ['cultural diffusion', 'demographic collapse', 'industrialization', 'legal secularization']
          },
          {
            label: 'Samurai-based rule in Japan is strongest evidence of: ___',
            options: ['political divergence within a shared region', 'full regional unification', 'bureaucratic sameness', 'identical state structure']
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
              'The region experienced complete cultural and political isolation',
              'The region showed both cultural integration and institutional diversity',
              'All states abandoned hierarchy and centralized authority',
              'Commercial life disappeared as tribute diplomacy expanded'
            ],
            correctAnswer: 1,
            explanation: 'This claim captures both sides of the historical pattern, making it a strong AP thesis move.'
          },
          {
            question: 'A prompt asks for one continuity in East Asia across this era. Which is best?',
            options: [
              'Persistent influence of Confucian social hierarchy in elite governance',
              'Continuous constitutional democracy across all states',
              'Permanent Mongol rule in all East Asian territories',
              'Complete absence of long-distance exchange'
            ],
            correctAnswer: 0,
            explanation: 'Confucian hierarchy remained a durable framework in key East Asian political cultures.'
          }
        ]
      }
    }
  ]
}
