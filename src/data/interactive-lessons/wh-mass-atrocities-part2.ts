export const whMassAtrocitiesPart2Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whmassatrocities2-intro',
      type: 'text' as const,
      content: `
# MA Mass Atrocities & Resistance

**Part 2 of 7 - Key Processes**

---

| Focus for This Part |
|---|
| Targeting by ethnicity, religion, and political identity |
| Resistance, rescue, and survival strategies |
| International responses and failures of intervention |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
    },
    {
      id: 'whmassatrocities2-mcq',
      type: 'multiple-choice' as const,
      content: `**Concept Check**`,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why historians classify the Holocaust as genocide?',
            options: [
              'It involved systematic state-directed attempts to eliminate targeted populations',
              'It was a short-term battlefield conflict with limited civilian impact',
              'It only affected one city and had no ideological dimension',
              'It was primarily an economic depression rather than organized violence',
            ],
            correctAnswer: 0,
            explanation: 'Genocide involves intent to destroy protected groups, and Nazi policy combined ideology, bureaucracy, and industrialized killing.'
          }
        ]
      }
    },
    {
      id: 'whmassatrocities2-analysis',
      type: 'text' as const,
      content: `
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to targeting by ethnicity, religion, and political identity.
- Compare two regions or states affected by resistance, rescue, and survival strategies.
- Evaluate continuity and change involving international responses and failures of intervention.
`
    },
    {
      id: 'whmassatrocities2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evidence Match**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1948 UN agreement that legally defined genocide is the',
            options: [
              'Genocide Convention',
              'Treaty of Tordesillas',
              'Kellogg-Briand Pact',
              'Yalta Accord',
            ]
          }
        ],
        correctAnswers: [
          'Genocide Convention',
        ],
        hint1: 'Adopted by the UN after WWII; focuses on prevention and punishment.',
        explanation: 'The Genocide Convention created an international legal definition and obligations for states.'
      }
    },
    {
      id: 'whmassatrocities2-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application**`,
      exercise: {
        questions: [
          {
            question: 'What makes mass atrocities difficult for the international community to stop in real time?',
            options: [
              'Sovereignty concerns, delayed information, and geopolitical rivalries often inhibit intervention',
              'International law prohibits all humanitarian action',
              'Atrocities are always spontaneous and impossible to document',
              'Regional organizations automatically intervene before violence escalates',
            ],
            correctAnswer: 0,
            explanation: 'Even when warning signs exist, intervention is constrained by political costs, legal debates, and competing strategic priorities.'
          },
          {
            question: 'Which evidence best supports a continuity-and-change argument about mass atrocities since 1900?',
            options: [
              'Continuity in scapegoating and propaganda; change in legal accountability mechanisms after 1945',
              'Atrocities ended globally after the creation of the UN',
              'All atrocities were identical because ideology never changed',
              'Modern communications eliminated violence against civilians',
            ],
            correctAnswer: 0,
            explanation: 'Patterns of exclusion and dehumanization persist, while legal institutions and norms changed significantly over time.'
          }
        ]
      }
    }
  ]
}
