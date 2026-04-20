export const whDevelopmentsEastAsiaPart4Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea4-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 4 of 7 - Connections and Interactions**

This part focuses on how politics, culture, and trade interacted across East Asia and beyond.
      `
    },
    {
      id: 'whdea4-content',
      type: 'text' as const,
      content: `
## Interconnected Systems

> **Trade and State Power**

- **Pattern:** Commercial growth and governance capacity often reinforced each other.
- Commercial wealth strengthened state revenue and urban institutions in Song China.
- Maritime and overland links tied East Asia to wider Afro-Eurasian exchange.

> **Mongol Integration Effects**

- **Pattern:** Imperial-scale networks increased mobility and regional connectivity.
- Yuan rule connected China to a larger Mongol imperial network.
- Mobility of merchants and envoys increased cross-regional contact.

> **Culture and Legitimacy**

- **Pattern:** Ideological traditions and ritual diplomacy reinforced political order.
- Confucian traditions helped rulers justify hierarchy and social order.
- Tributary rituals connected diplomacy, prestige, and political identity.

> **AP Comparison Anchor**

- **Strong synthesis claim:** Political systems differed, but interaction remained constant through diplomacy, migration, commerce, and intellectual exchange.
      `
    },
    {
      id: 'whdea4-quiz',
      type: 'multiple-choice' as const,
      content: `
**Connection Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which relationship best demonstrates interaction between economy and governance in Song China?',
            options: [
              'Commercial growth contributed to stronger state fiscal and administrative capacity',
              'Market expansion automatically ended social hierarchy',
              'Urbanization made all state institutions unnecessary',
              'Trade required abolition of Confucian education'
            ],
            correctAnswer: 0,
            explanation: 'AP causation often links economic growth to broader state capacity and political stability.'
          },
          {
            question: 'How did Mongol rule most directly affect East Asian connectivity?',
            options: [
              'It ended all Eurasian trade routes',
              'It increased transregional movement and exchange under imperial networks',
              'It prevented diplomatic missions from traveling',
              'It isolated China from all foreign merchants'
            ],
            correctAnswer: 1,
            explanation: 'Mongol political integration facilitated wider movement of people, goods, and information.'
          }
        ]
      }
    },
    {
      id: 'whdea4-input',
      type: 'multiple-choice' as const,
      content: `
**Rapid Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which outcome best explains how expanded trade could strengthen a premodern state?',
            options: [
              'Higher tax revenue to fund administration and public works',
              'Automatic abolition of social hierarchy',
              'Immediate disappearance of local elites',
              'Complete end of diplomatic ritual systems'
            ],
            correctAnswer: 0,
            explanation: 'Trade growth often increased taxable activity, which could strengthen governance and infrastructure.'
          },
          {
            question: 'Which dynasty is most directly associated with Mongol rule in China?',
            options: ['Tang', 'Yuan', 'Han', 'Qing'],
            correctAnswer: 1,
            explanation: 'The Yuan dynasty (1271-1368) was established by the Mongols in China.'
          },
          {
            question: 'Which diplomatic framework is most tied to Chinese regional prestige in this era?',
            options: ['Tributary system', 'Balance of power congresses', 'Atlantic charter diplomacy', 'Industrial unionism'],
            correctAnswer: 0,
            explanation: 'The tributary system structured ritual hierarchy and diplomatic exchange around Chinese court prestige.'
          }
        ]
      }
    },
    {
      id: 'whdea4-dropdown',
      type: 'dropdown-select' as const,
      content: `
    **Match the Idea: Evidence to Claim**

Pick the strongest causal link in each row, then justify your choice in one AP-style sentence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Expanded market activity most directly links to this state-level outcome: ___',
            options: ['state fiscal growth', 'immediate egalitarianism', 'end of diplomacy', 'collapse of cities']
          },
          {
            label: 'Yuan-era transregional links most directly reflect this historical process: ___',
            options: ['imperial network integration', 'full autarky', 'constitutional monarchy', 'charter company rule']
          },
          {
            label: 'Ritualized political hierarchy in regional diplomacy is best identified as: ___',
            options: ['tributary order', 'social contract liberalism', 'manorialism', 'industrial unionism']
          }
        ],
        correctAnswers: ['state fiscal growth', 'imperial network integration', 'tributary order'],
        hint1: 'Follow the money from market activity to government capacity.',
        hint2: 'Think connected routes, mobility, and imperial coherence.',
        hint3: 'Think prestige hierarchy centered on tribute ritual.',
        explanation: 'Top AP responses do not just define terms. They connect signal -> mechanism -> historical consequence.'
      }
    },
    {
      id: 'whdea4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Synthesis**
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best synthesizes developments in East Asia c. 1200-1450?',
            options: [
              'The region was politically diverse but economically and culturally connected',
              'The region was politically identical and economically isolated',
              'No long-distance interactions affected East Asia',
              'Confucian traditions vanished under Mongol influence'
            ],
            correctAnswer: 0,
            explanation: 'This captures the central AP synthesis point: diversity of institutions with strong interconnection.'
          },
          {
            question: 'A student claims diplomacy had no economic implications. Which evidence best challenges that claim?',
            options: [
              'Tributary relationships often overlapped with exchange networks and commercial contact',
              'Diplomacy and trade can never occur together',
              'All tribute missions were purely military campaigns',
              'East Asian states did not conduct maritime exchange'
            ],
            correctAnswer: 0,
            explanation: 'In this period, symbolic diplomacy and material exchange frequently intersected.'
          }
        ]
      }
    }
  ]
}
