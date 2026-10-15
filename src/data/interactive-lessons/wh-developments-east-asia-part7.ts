export const whDevelopmentsEastAsiaPart7Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea7-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 7 of 7 - AP Review**

Final review: high-yield terms, likely prompts, and exam strategy.
      `
    },
    {
      id: 'whdea7-content',
      type: 'text' as const,
      content: `
## High-Yield AP Review

> **Terms You Should Use Precisely**

- Neo-Confucianism
- Civil service examinations
- Tributary system
- Song, Yuan, early Ming transitions
- Feudal Japan (shogun, daimyo, samurai)
- Selective adaptation

> **Common AP Prompt Types**

1) Comparison: China vs Japan governance
2) Causation: impact of Mongol conquest in East Asia
3) CCOT: continuity of Confucian influence amid dynastic shifts
4) Contextualization: East Asia inside wider Afro-Eurasian exchange

> **AP Comparison Anchor**

- **Strategy move:** Lead with a clear claim.
- **Evidence move:** Use one precise example.
- **Reasoning move:** Explain why the example proves the claim.
      `
    },
    {
      id: 'whdea7-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mastery Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis is strongest for a comparison prompt on East Asia c. 1200-1450?',
            options: [
              'China and Japan shared Confucian bureaucracies, since Japan copied the Song exam system along with its writing',
              'Chinese influence shaped both, but China stayed bureaucratically centralized while Japan became military-feudal',
              'Japan and China diverged because Japan rejected all Chinese culture, including Buddhism and written characters',
              'Both developed decentralized warrior rule, as Song emperors relied on regional lords much as Japan relied on the shogun'
            ],
            correctAnswer: 1,
            explanation: 'This thesis presents both similarity and difference with specific institutional language.'
          },
          {
            question: 'Which evidence best supports a causation argument about political change in China?',
            options: [
              'Mongol conquest helped produce the Song-to-Yuan transition',
              'A Japanese invasion of the mainland toppled the Song in 1279',
              'Peasant rebels led by the Red Turbans founded the Yuan dynasty',
              'Court factions invited a Jurchen prince to found the Yuan dynasty'
            ],
            correctAnswer: 0,
            explanation: 'Mongol expansion is the direct causal mechanism for the Song-to-Yuan shift. The Red Turban rebels helped topple the Yuan and found the Ming, the Jurchen Jin state was itself conquered by the Mongols, and Japan never invaded Song China.'
          }
        ]
      }
    },
    {
      id: 'whdea7-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which ideology remained central to elite governance traditions in East Asia?',
            options: ['Neo-Confucianism', 'Legalism', 'Daoism', 'Zen Buddhism'],
            correctAnswer: 0,
            explanation: 'Neo-Confucian political ethics shaped elite governance norms across much of the region.'
          },
          {
            question: 'Which Chinese institution selected many bureaucratic officials?',
            options: ['Civil service examinations', 'Hereditary noble appointment', 'Merchant guild nomination', 'Buddhist temple ordination'],
            correctAnswer: 0,
            explanation: 'The exam system was a core institution in imperial Chinese bureaucratic recruitment.'
          },
          {
            question: 'Which term best describes Chinese-centered regional diplomatic hierarchy?',
            options: ['Tributary system', 'Dynastic cycle', 'Treaty ports', 'Feudal levy'],
            correctAnswer: 0,
            explanation: 'The tributary system organized ritual hierarchy and prestige diplomacy around Chinese courts.'
          }
        ]
      }
    },
    {
      id: 'whdea7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Identify the prompt type first, then select evidence that directly matches that task.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A question asking "how and why institutions changed" is mainly testing: ___',
            options: ['causation', 'comparison', 'contextualization', 'periodization']
          },
          {
            label: 'A question asking "similarities and differences" is mainly testing: ___',
            options: ['comparison', 'causation', 'periodization', 'sourcing']
          },
          {
            label: 'A question asking what stayed the same while other things shifted is mainly testing: ___',
            options: ['continuity and change over time', 'comparison across regions', 'causation of events', 'contextualization of sources']
          }
        ],
        correctAnswers: ['causation', 'comparison', 'continuity and change over time'],
        hint1: 'Look for a "why/how" mechanism question.',
        hint2: 'Look for explicit similarity/difference framing.',
        hint3: 'Look for what persists versus what shifts.',
        explanation: 'Prompt-type recognition is a scoring advantage because it lets you choose the right evidence and reasoning structure immediately.'
      }
    },
    {
      id: 'whdea7-applied',
      type: 'multiple-choice' as const,
      content: `
**Final AP Application**
      `,
      exercise: {
        questions: [
          {
            question: 'Which short claim is best for an SAQ asking one continuity in East Asia c. 1200-1450?',
            options: [
              'Confucian political ethics stayed influential in elite governance across dynastic shifts',
              'Mongol rule ended Confucian influence, which never recovered in elite governance',
              'Buddhist monasteries governed China directly after the fall of the Song dynasty',
              'Trade and diplomacy ceased across the region once Mongol armies closed land and sea routes'
            ],
            correctAnswer: 0,
            explanation: 'It is precise, accurate, and directly responsive to continuity.'
          },
          {
            question: 'Which sentence best shows strong AP reasoning after citing Japanese feudal institutions?',
            options: [
              'This matters because it shows regional divergence in state structure despite shared Chinese influence',
              'This matters because it shows Japan copied every Chinese institution, including the civil service examination system',
              'This matters because it shows Japan had no contact with the mainland, so its feudalism emerged in complete isolation',
              'This matters because it shows that all East Asian governments were the same, with emperors ruling through warrior lords'
            ],
            correctAnswer: 0,
            explanation: 'The sentence explicitly links evidence to a broader comparative argument.'
          }
        ]
      }
    }
  ]
}
