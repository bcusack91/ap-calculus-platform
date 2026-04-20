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
              'To elect local governors by popular vote',
              'To recruit bureaucrats through Confucian learning and literary competence',
              'To train military officers only',
              'To assign hereditary noble titles'
            ],
            correctAnswer: 1,
            explanation: 'Exam systems supported centralized administration by selecting literate officials tied to Confucian norms.'
          },
          {
            question: 'Which statement best describes tributary diplomacy in East Asia?',
            options: [
              'A uniform empire directly ruled from Beijing',
              'A symbolic hierarchy and exchange network that coexisted with local autonomy',
              'A military alliance against Mongols only',
              'A complete replacement of local political institutions'
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
            options: ['Tributary system', 'Constitutional federalism', 'Atlantic charter order', 'Mercenary confederation'],
            correctAnswer: 0,
            explanation: 'The tributary system organized symbolic hierarchy and diplomatic exchange around Chinese court prestige.'
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
            options: ['bureaucratic governance', 'feudal vassalage', 'charter colonization', 'market liberalization']
          },
          {
            label: 'Ritualized regional hierarchy centered on Chinese prestige is: ___',
            options: ['tributary diplomacy', 'parliamentary federalism', 'absolute isolation', 'direct annexation']
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
              'They shared no cultural interaction at all',
              'Chinese models influenced the region, but local elites adapted institutions to domestic conditions',
              'Mongol conquest made all East Asian systems identical',
              'Geography alone fully determined all institutions'
            ],
            correctAnswer: 1,
            explanation: 'This explains both convergence (influence) and divergence (local adaptation), which is strong AP reasoning.'
          },
          {
            question: 'Which evidence most directly supports an argument about selective adaptation?',
            options: [
              'Japan maintained shogunal military rule despite Chinese cultural influence',
              'Song China used paper money',
              'Mongols conquered parts of Eurasia',
              'Silk Roads connected many regions'
            ],
            correctAnswer: 0,
            explanation: 'This option explicitly shows borrowing without institutional duplication.'
          }
        ]
      }
    }
  ]
}
