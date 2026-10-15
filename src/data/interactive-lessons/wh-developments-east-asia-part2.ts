export const whDevelopmentsEastAsiaPart2Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea2-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 2 of 7 - Key Processes**

This part explains how systems actually worked: governance, social hierarchy, and cultural transmission.

| Process | Why it matters |
|---|---|
| Exam bureaucracy | State capacity and elite recruitment |
| Tributary diplomacy | Regional hierarchy and legitimacy |
| Selective adoption | Borrowing without political uniformity |
      `
    },
    {
      id: 'whdea2-content',
      type: 'text' as const,
      content: `
## Process Breakdown: How the System Actually Worked

Use this 3-step lens when writing AP responses: identify the mechanism, show its effect, then prove it with an example.

> **Bureaucratic Governance in China**

- **Mechanism:** Civil service examinations selected officials through Confucian learning.

- **Why it mattered:** The state built a trained administrative class that supported long-term political stability.

- **High-value evidence:** Scholar-officials and exam culture under Song governance.

> **Tributary Order and Legitimacy**

- **Mechanism:** Regional rulers engaged with Chinese courts through ritualized hierarchy and tribute exchanges.

- **Why it mattered:** Diplomacy became a prestige system, not just military competition.

- **High-value evidence:** Tributary missions that reinforced status while preserving local autonomy.

> **Selective Institutional Borrowing**

- **Mechanism:** States adopted useful Chinese institutions without copying China wholesale.

- **Why it mattered:** East Asia showed cultural convergence with political diversity.

| State | Adopted Elements | Preserved Local Structure |
|---|---|---|
| Korea | Administration and Confucian learning | Distinct court politics |
| Japan | Writing, Buddhism, elite culture | Shogunal and feudal governance |
| Vietnam | Confucian political models | Local ruling traditions |

> **AP Comparison Anchor**

- **AP move:** Name one process and one specific example, then explain the cause-and-effect link in one sentence.
      `
    },
    {
      id: 'whdea2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Process Check**
      `,
      exercise: {
        questions: [
          {
            question: 'What was the primary function of civil service examinations in imperial China?',
            options: [
              'To confirm sons of nobles in offices their families already held',
              'To recruit bureaucrats based on mastery of Confucian texts',
              'To select military commanders based on archery and horsemanship',
              'To let local villagers elect their own magistrates'
            ],
            correctAnswer: 1,
            explanation: 'Exam systems supported centralized administration by selecting literate officials tested on Confucian classics and literary competence, rather than by birth, military skill, or election.'
          },
          {
            question: 'Which statement best describes tributary diplomacy in East Asia?',
            options: [
              'A system of direct rule in which Beijing appointed governors for each state',
              'A symbolic hierarchy and exchange network that coexisted with local autonomy',
              'A defensive military alliance in which states shared troops against invaders',
              'A trade treaty system that set fixed tariffs among equal sovereign states'
            ],
            correctAnswer: 1,
            explanation: 'Tributary relations conveyed status and ritual order, but outcomes differed by state and period.'
          }
        ]
      }
    },
    {
      id: 'whdea2-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'What phrase best describes diplomacy structured around Chinese ritual hierarchy and exchange?',
            options: ['Tributary system', 'Treaty-port system', 'Dynastic cycle', 'Feudal vassalage'],
            correctAnswer: 0,
            explanation: 'The tributary system organized symbolic hierarchy and diplomatic exchange around Chinese court prestige. The treaty-port system was imposed on China by Western powers in the 1800s, and the dynastic cycle describes the rise and fall of ruling houses, not diplomacy.'
          },
          {
            question: 'What phrase best describes adopting outside models while preserving local institutions?',
            options: ['Selective adaptation', 'Total assimilation', 'Political isolation', 'Imperial homogenization'],
            correctAnswer: 0,
            explanation: 'Selective adaptation captures borrowing with local institutional continuity.'
          },
          {
            question: 'What institution selected many Chinese officials through Confucian testing?',
            options: ['Civil service examinations', 'Hereditary peerage council', 'Guild elections', 'Samurai assemblies'],
            correctAnswer: 0,
            explanation: 'The exam system was central to bureaucratic recruitment in imperial China.'
          }
        ]
      }
    },
    {
      id: 'whdea2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Choose the strongest mechanism label, then pair it with one concrete historical example.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Recruiting officials through Confucian exams is best labeled: ___',
            options: ['bureaucratic governance', 'feudal vassalage', 'hereditary aristocratic rule', 'military patronage']
          },
          {
            label: 'Ritualized regional hierarchy centered on Chinese prestige is: ___',
            options: ['tributary diplomacy', 'balance-of-power diplomacy', 'direct annexation', 'feudal vassalage']
          },
          {
            label: 'Borrowing institutions while preserving local structures is: ___',
            options: ['selective adaptation', 'total assimilation', 'economic autarky', 'imperial homogenization']
          }
        ],
        correctAnswers: ['bureaucratic governance', 'tributary diplomacy', 'selective adaptation'],
        hint1: 'Think scholar-official recruitment and state capacity.',
        hint2: 'Think status hierarchy and tribute missions.',
        hint3: 'Think borrowing without institutional duplication.',
        explanation: 'High-scoring AP writing labels the process and immediately links it to specific evidence.'
      }
    },
    {
      id: 'whdea2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Causation**
      `,
      exercise: {
        questions: [
          {
            question: 'A prompt asks why East Asian states showed both similarity and difference. The best explanation is:',
            options: [
              'Each state developed in isolation, so any shared features arose by coincidence alone',
              'Chinese models spread, but local elites adapted them to fit domestic conditions',
              'Mongol conquest imposed one administrative system on China, Korea, and Japan alike',
              'Geography alone determined institutions, so similar terrain produced similar states'
            ],
            correctAnswer: 1,
            explanation: 'This explains both convergence (Chinese influence) and divergence (local adaptation), which is strong AP reasoning. The Mongols never conquered Japan, so they could not have imposed one system on the whole region.'
          },
          {
            question: 'Which evidence most directly supports an argument about selective adaptation?',
            options: [
              'Japan maintained shogunal military rule despite Chinese cultural influence',
              'Song China issued paper money to support growing commerce in its cities',
              'Mongol armies conquered much of Eurasia in the thirteenth century',
              'Silk Road routes carried goods between China and the Mediterranean'
            ],
            correctAnswer: 0,
            explanation: 'Japan keeping shogunal military rule while absorbing Chinese culture explicitly shows borrowing without institutional duplication. The other facts are true but show no adaptation of an outside model.'
          }
        ]
      }
    }
  ]
}
