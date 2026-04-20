export const whWorldWarsPart7Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whworldwars7-intro',
      type: 'text' as const,
      content: `
# WW World Wars & Totalitarianism

**Part 7 of 7 - AP Review**

---

| Focus for This Part |
|---|
| Interwar instability and global depression |
| Rise of fascism and authoritarian states |
| World War II theaters and total war |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
    },
    {
      id: 'whworldwars7-mcq',
      type: 'multiple-choice' as const,
      content: `**Concept Check**`,
      exercise: {
        questions: [
          {
            question: 'Which factor most directly contributed to the outbreak of World War I in 1914?',
            options: [
              'Alliance commitments transformed a regional crisis into a continental war',
              'The United Nations imposed sanctions that escalated tensions',
              'Decolonization movements in Africa disrupted European diplomacy',
              'The Cold War arms race triggered preventive mobilization',
            ],
            correctAnswer: 0,
            explanation: 'The alliance system meant that Austria-Hungary\'s conflict with Serbia drew in Russia, Germany, France, and Britain, escalating a local crisis into a general European war.'
          }
        ]
      }
    },
    {
      id: 'whworldwars7-analysis',
      type: 'text' as const,
      content: `
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to interwar instability and global depression.
- Compare two regions or states affected by rise of fascism and authoritarian states.
- Evaluate continuity and change involving world war ii theaters and total war.
`
    },
    {
      id: 'whworldwars7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evidence Match**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1919 peace settlement that imposed reparations on Germany was the',
            options: [
              'Treaty of Versailles',
              'Congress of Vienna',
              'Treaty of Brest-Litovsk',
              'Potsdam Agreement',
            ]
          }
        ],
        correctAnswers: [
          'Treaty of Versailles',
        ],
        hint1: 'Think post-WWI settlement and war-guilt clause.',
        explanation: 'The Treaty of Versailles redrew borders, assigned war guilt, and imposed reparations, shaping interwar politics.'
      }
    },
    {
      id: 'whworldwars7-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application**`,
      exercise: {
        questions: [
          {
            question: 'Why do AP historians describe WWII as a total war?',
            options: [
              'Governments mobilized economies, civilians, propaganda, and industry at unprecedented scale',
              'It was fought only in Europe and involved only military targets',
              'It lacked ideological goals and was purely diplomatic',
              'Colonial territories were unaffected by the conflict',
            ],
            correctAnswer: 0,
            explanation: 'Total war involved whole societies: rationing, strategic bombing, women in wartime production, colonial troop mobilization, and state-directed economies.'
          },
          {
            question: 'Which post-1945 development was most directly shaped by the atrocities of WWII?',
            options: [
              'Creation of international human-rights frameworks and war-crimes tribunals',
              'Restoration of absolute monarchies across Europe',
              'A return to isolationist empires and mercantilism',
              'End of ideological conflict between capitalism and communism',
            ],
            correctAnswer: 0,
            explanation: 'Nuremberg, the UN Charter, and later human-rights law emerged from attempts to prevent and punish atrocities and aggressive war.'
          }
        ]
      }
    }
  ]
}
