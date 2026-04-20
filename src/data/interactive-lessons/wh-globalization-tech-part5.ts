export const whGlobalizationTechPart5Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whglobalizationtech5-intro',
      type: 'text' as const,
      content: `
# GT Globalization & Technology

**Part 5 of 7 - Change Over Time**

---

| Focus for This Part |
|---|
| Backlash and anti-globalization movements |
| Integration of global markets and finance |
| Role of international institutions |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
    },
    {
      id: 'whglobalizationtech5-mcq',
      type: 'multiple-choice' as const,
      content: `**Concept Check**`,
      exercise: {
        questions: [
          {
            question: 'Which trend is most associated with late-20th-century economic globalization?',
            options: [
              'Expansion of multinational supply chains and trade liberalization',
              'Permanent closure of global capital markets',
              'End of transnational migration and remittances',
              'Return to isolated subsistence economies',
            ],
            correctAnswer: 0,
            explanation: 'Trade integration, foreign direct investment, and transnational production networks accelerated in this era.'
          }
        ]
      }
    },
    {
      id: 'whglobalizationtech5-analysis',
      type: 'text' as const,
      content: `
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to backlash and anti-globalization movements.
- Compare two regions or states affected by integration of global markets and finance.
- Evaluate continuity and change involving role of international institutions.
`
    },
    {
      id: 'whglobalizationtech5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evidence Match**`,
      exercise: {
        dropdowns: [
          {
            label: 'The institution created to regulate global trade rules in 1995 is the',
            options: [
              'World Trade Organization',
              'League of Nations',
              'Cominform',
              'OPEC',
            ]
          }
        ],
        correctAnswers: [
          'World Trade Organization',
        ],
        hint1: 'Think dispute settlement and multilateral trade agreements.',
        explanation: 'The WTO institutionalized trade governance after the GATT era.'
      }
    },
    {
      id: 'whglobalizationtech5-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application**`,
      exercise: {
        questions: [
          {
            question: 'How did digital technology change globalization most directly?',
            options: [
              'It reduced communication costs and enabled real-time transnational coordination',
              'It ended all cultural exchange between regions',
              'It prevented service-sector outsourcing',
              'It eliminated misinformation and political polarization',
            ],
            correctAnswer: 0,
            explanation: 'Networks, platforms, and rapid data exchange transformed business, activism, media, and migration networks.'
          },
          {
            question: 'Which evidence supports a nuanced argument about globalization?',
            options: [
              'Globalization expanded growth opportunities while also producing inequality and backlash',
              'Globalization benefited every group equally across all regions',
              'Globalization ended local culture and state power entirely',
              'Globalization had no relationship to technological change',
            ],
            correctAnswer: 0,
            explanation: 'Strong AP arguments balance benefits with uneven distributional effects and political responses.'
          }
        ]
      }
    }
  ]
}
