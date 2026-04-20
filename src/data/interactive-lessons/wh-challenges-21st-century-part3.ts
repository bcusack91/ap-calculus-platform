export const whChallenges21stCenturyPart3Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whchallenges21stcentury3-intro',
      type: 'text' as const,
      content: `
# C21 Challenges of the 21st Century

**Part 3 of 7 - Patterns & Examples**

---

| Focus for This Part |
|---|
| Pandemics and global health governance |
| Migration, inequality, and human rights |
| International cooperation and institutional limits |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
    },
    {
      id: 'whchallenges21stcentury3-mcq',
      type: 'multiple-choice' as const,
      content: `**Concept Check**`,
      exercise: {
        questions: [
          {
            question: 'Why are climate and pandemic issues often described as transnational challenges?',
            options: [
              'They cross borders and require coordinated international responses',
              'They can be solved by one state acting fully alone',
              'They affect only high-income countries',
              'They are unrelated to global governance institutions',
            ],
            correctAnswer: 0,
            explanation: 'Shared vulnerabilities and cross-border effects make cooperation essential even when interests diverge.'
          }
        ]
      }
    },
    {
      id: 'whchallenges21stcentury3-analysis',
      type: 'text' as const,
      content: `
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to pandemics and global health governance.
- Compare two regions or states affected by migration, inequality, and human rights.
- Evaluate continuity and change involving international cooperation and institutional limits.
`
    },
    {
      id: 'whchallenges21stcentury3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evidence Match**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 2015 international accord focused on limiting global warming is the',
            options: [
              'Paris Agreement',
              'Camp David Accords',
              'Bretton Woods Agreement',
              'Treaty of Utrecht',
            ]
          }
        ],
        correctAnswers: [
          'Paris Agreement',
        ],
        hint1: 'COP21 and nationally determined contributions.',
        explanation: 'The Paris Agreement established a framework for emissions targets and periodic review.'
      }
    },
    {
      id: 'whchallenges21stcentury3-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application**`,
      exercise: {
        questions: [
          {
            question: 'What is a key AP takeaway about global terrorism after 2001?',
            options: [
              'Security responses reshaped domestic law, foreign policy, and civil-liberties debates',
              'Terrorism disappeared as a political concern by 2010',
              'Only one region experienced terrorism-related conflict',
              'International institutions unanimously agreed on all interventions',
            ],
            correctAnswer: 0,
            explanation: 'Counterterror policy produced long-term geopolitical and constitutional debates across many states.'
          },
          {
            question: 'Which thesis is strongest for an essay on 21st-century global challenges?',
            options: [
              'Interdependence increases both cooperation incentives and conflict over burden-sharing',
              'Global institutions now eliminate all major crises before they begin',
              'Contemporary challenges are purely domestic and not historically connected',
              'Technology has removed political disagreement from global governance',
            ],
            correctAnswer: 0,
            explanation: 'This claim captures the central tension of modern globalization: shared problems with contested responsibilities.'
          }
        ]
      }
    }
  ]
}
