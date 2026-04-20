export const whColdWarDecolonizationPart4Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcoldwardecolonization4-intro',
      type: 'text' as const,
      content: `
# CW Cold War & Decolonization

**Part 4 of 7 - Connections & Interactions**

---

| Focus for This Part |
|---|
| Non-Aligned Movement and postcolonial diplomacy |
| Cold War legacies after 1991 |
| Ideological rivalry between the U.S. and USSR |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
    },
    {
      id: 'whcoldwardecolonization4-mcq',
      type: 'multiple-choice' as const,
      content: `**Concept Check**`,
      exercise: {
        questions: [
          {
            question: 'Why did many newly independent states avoid formal alignment with either superpower?',
            options: [
              'Leaders sought autonomy and resisted becoming arenas for proxy conflict',
              'The Cold War had no influence outside Europe',
              'Both superpowers banned diplomatic relations with decolonizing regions',
              'Non-alignment required adopting communist one-party rule',
            ],
            correctAnswer: 0,
            explanation: 'Many postcolonial leaders pursued sovereignty, aid diversification, and strategic flexibility rather than bloc dependence.'
          }
        ]
      }
    },
    {
      id: 'whcoldwardecolonization4-analysis',
      type: 'text' as const,
      content: `
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to non-aligned movement and postcolonial diplomacy.
- Compare two regions or states affected by cold war legacies after 1991.
- Evaluate continuity and change involving ideological rivalry between the u.s. and ussr.
`
    },
    {
      id: 'whcoldwardecolonization4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evidence Match**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1955 conference often associated with Afro-Asian solidarity was held at',
            options: [
              'Bandung',
              'Geneva',
              'Tehran',
              'Helsinki',
            ]
          }
        ],
        correctAnswers: [
          'Bandung',
        ],
        hint1: 'Think Indonesia and foundations of the Non-Aligned Movement.',
        explanation: 'Bandung symbolized collective postcolonial diplomacy and anti-imperial cooperation.'
      }
    },
    {
      id: 'whcoldwardecolonization4-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application**`,
      exercise: {
        questions: [
          {
            question: 'Which development best illustrates how decolonization and the Cold War intersected?',
            options: [
              'Superpowers supplied aid and weapons to influence postcolonial civil conflicts',
              'Former colonies were excluded from all international organizations',
              'Decolonization ended before superpower rivalry intensified',
              'Proxy wars occurred only in Eastern Europe',
            ],
            correctAnswer: 0,
            explanation: 'From Angola to Afghanistan and Vietnam, local conflicts were frequently shaped by Cold War intervention.'
          },
          {
            question: 'What is the most defensible AP claim about Cold War outcomes in the Global South?',
            options: [
              'Local agency remained significant even as superpower pressure constrained choices',
              'All states had complete freedom from external influence',
              'Every decolonizing movement had identical ideology and strategy',
              'Cold War rivalry had no economic consequences for postcolonial states',
            ],
            correctAnswer: 0,
            explanation: 'Postcolonial states negotiated aid, ideology, and domestic priorities; outcomes cannot be explained by superpower action alone.'
          }
        ]
      }
    }
  ]
}
