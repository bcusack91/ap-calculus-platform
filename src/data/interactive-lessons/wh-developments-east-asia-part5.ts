export const whDevelopmentsEastAsiaPart5Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea5-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 5 of 7 - Change Over Time**

This part tracks continuity and change from late Song through Yuan and into early Ming contexts.
      `
    },
    {
      id: 'whdea5-content',
      type: 'text' as const,
      content: `
## Continuity and Change Framework

> **Continuities**

- **Pattern:** Core ideological and economic structures remained resilient across dynastic shifts.
- Confucian traditions remained deeply influential in elite governance.
- China remained a major population and economic center in East Asia.
- Regional interaction through trade and diplomacy persisted.

> **Changes**

- **Pattern:** Political transitions and conquest altered institutions and social ordering.
- Political control shifted from Song to foreign-led Yuan, then back to Han-led Ming.
- Mongol conquest altered social hierarchy and administrative practice.
- New technologies and growing markets transformed economic scale.

> **AP Comparison Anchor**

- **AP move:** In LEQ/SAQ answers, pair one continuity with one specific change, then explain a cause for the change.
      `
    },
    {
      id: 'whdea5-quiz',
      type: 'multiple-choice' as const,
      content: `
**Continuity/Change Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which development is best categorized as a change in East Asia during this period?',
            options: [
              'Ongoing influence of Confucian social ideals',
              'Transition from Song rule to Yuan rule in China',
              'Continued role of trade networks',
              'Persistent use of scholar-official governance traditions'
            ],
            correctAnswer: 1,
            explanation: 'Dynastic transition due to conquest is a major political change over time.'
          },
          {
            question: 'Which is the strongest example of continuity?',
            options: [
              'Mongol military conquest',
              'Disappearance of Chinese cultural influence',
              'Persistent centrality of Confucian political culture in elite governance',
              'Permanent fragmentation of all East Asian states'
            ],
            correctAnswer: 2,
            explanation: 'Confucian political culture persisted across dynastic change, making it a core continuity.'
          }
        ]
      }
    },
    {
      id: 'whdea5-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which dynasty represented foreign-led rule in China during this period?',
            options: ['Yuan', 'Han', 'Tang', 'Song'],
            correctAnswer: 0,
            explanation: 'The Yuan dynasty was established by Mongol conquerors and represents major political change.'
          },
          {
            question: 'Which is the strongest ideological continuity in East Asian elite governance?',
            options: ['Confucian political ethics', 'Industrial liberalism', 'Mass electoral democracy', 'Roman canon law'],
            correctAnswer: 0,
            explanation: 'Confucian social-political frameworks remained influential across dynastic transitions.'
          },
          {
            question: 'Which is the strongest economic continuity across this period?',
            options: ['Regional trade networks', 'Complete autarky', 'Permanent urban collapse', 'End of long-distance exchange'],
            correctAnswer: 0,
            explanation: 'Overland and maritime exchange persisted despite political transitions.'
          }
        ]
      }
    },
    {
      id: 'whdea5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Label each statement, then justify your choice with one concrete piece of evidence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dynastic transition due to conquest is best labeled: ___',
            options: ['change', 'continuity', 'non-factor', 'myth']
          },
          {
            label: 'Long-term influence of Confucian political ethics is best labeled: ___',
            options: ['continuity', 'change', 'rupture', 'decline to zero']
          },
          {
            label: 'Ongoing regional trade and exchange is best labeled: ___',
            options: ['continuity', 'isolation', 'sudden invention', 'total break']
          }
        ],
        correctAnswers: ['change', 'continuity', 'continuity'],
        hint1: 'Think Song -> Yuan transition.',
        hint2: 'Think ideology across multiple dynasties.',
        hint3: 'Think maritime and overland links across eras.',
        explanation: 'Strong CCOT responses label the category and prove it with specific, accurate evidence.'
      }
    },
    {
      id: 'whdea5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style CCOT**
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis best answers a CCOT prompt on East Asia c. 1200-1450?',
            options: [
              'East Asia experienced total collapse of prior institutions',
              'Despite major political transitions, enduring Confucian norms and exchange networks provided continuity',
              'No meaningful changes occurred in any East Asian state',
              'Cultural exchange ended once Mongol rule began'
            ],
            correctAnswer: 1,
            explanation: 'This thesis balances clear change with continuity, a key AP writing goal.'
          },
          {
            question: 'A student needs a cause for political change in China during this era. Which is best?',
            options: [
              'Mongol military conquest and imperial expansion',
              'Adoption of Christianity by all dynasties',
              'Industrial factory production',
              'European colonial partition'
            ],
            correctAnswer: 0,
            explanation: 'Mongol conquest is the direct and historically accurate cause for the Song-to-Yuan shift.'
          }
        ]
      }
    }
  ]
}
