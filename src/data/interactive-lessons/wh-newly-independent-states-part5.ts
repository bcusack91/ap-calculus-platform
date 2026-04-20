export const whNewlyIndependentStatesPart5Data = {
  topicSlug: 'wh-newly-independent-states',
  sections: [
    {
      id: 'whnewlyindependentstates5-intro',
      type: 'text' as const,
      content: `
# NI Newly Independent States

**Part 5 of 7 - Change Over Time**

---

| Focus for This Part |
|---|
| Postcolonial identity and state capacity |
| Nation-building after formal empire |
| Borders, ethnicity, and political legitimacy |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
    },
    {
      id: 'whnewlyindependentstates5-mcq',
      type: 'multiple-choice' as const,
      content: `**Concept Check**`,
      exercise: {
        questions: [
          {
            question: 'A common challenge for newly independent states in Africa and Asia was',
            options: [
              'Managing colonial borders that grouped diverse communities into single states',
              'Immediate access to stable industrial capital and high literacy',
              'Absence of external economic pressure from former imperial powers',
              'Complete political consensus over constitutional design',
            ],
            correctAnswer: 0,
            explanation: 'Colonial boundaries often ignored linguistic and cultural realities, intensifying governance and legitimacy problems.'
          }
        ]
      }
    },
    {
      id: 'whnewlyindependentstates5-analysis',
      type: 'text' as const,
      content: `
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to postcolonial identity and state capacity.
- Compare two regions or states affected by nation-building after formal empire.
- Evaluate continuity and change involving borders, ethnicity, and political legitimacy.
`
    },
    {
      id: 'whnewlyindependentstates5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evidence Match**`,
      exercise: {
        dropdowns: [
          {
            label: 'The strategy of replacing imported manufactured goods with domestic production is called',
            options: [
              'Import substitution industrialization',
              'Mercantilist bullionism',
              'Collective security',
              'Open-door imperialism',
            ]
          }
        ],
        correctAnswers: [
          'Import substitution industrialization',
        ],
        hint1: 'ISI is a classic postcolonial development model.',
        explanation: 'ISI aimed to reduce dependence on foreign industry through tariffs and local manufacturing.'
      }
    },
    {
      id: 'whnewlyindependentstates5-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application**`,
      exercise: {
        questions: [
          {
            question: 'Why did some newly independent governments become authoritarian?',
            options: [
              'Leaders often prioritized order and centralized control amid instability, conflict, and weak institutions',
              'International law required one-party systems after decolonization',
              'All voters rejected constitutional politics on ideological grounds',
              'Military influence vanished completely in postcolonial states',
            ],
            correctAnswer: 0,
            explanation: 'Security crises, patronage politics, and fragile institutions made democratic consolidation difficult in many contexts.'
          },
          {
            question: 'Which claim best supports a comparative essay on postcolonial development?',
            options: [
              'Different resource bases, institutions, and Cold War alignments produced divergent outcomes',
              'All newly independent states followed one identical development path',
              'Political ideology had no effect on economic strategy',
              'Postcolonial outcomes were determined only by climate',
            ],
            correctAnswer: 0,
            explanation: 'Comparative analysis should connect structural constraints with policy choices and international context.'
          }
        ]
      }
    }
  ]
}
