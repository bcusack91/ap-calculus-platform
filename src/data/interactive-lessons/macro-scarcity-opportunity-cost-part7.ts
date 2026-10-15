export const macroScarcityOpportunityCostPart7Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {
      id: 'macrosca7-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Opportunity Cost

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture: From Scarcity to Growth |
| Calculation Toolkit |
| Graph Decision Guide |
| Mixed Review |

> 🔑 **Key Concept:** Every idea in this topic follows from one fact: resources are scarce. Scarcity forces choices, choices carry opportunity costs, the PPC maps those costs, and the PPC's position shows what an economy can produce now and in the future.
`
    },
    {
      id: 'macrosca7-bigpicture',
      type: 'text' as const,
      content: `
## 📖 The Big Picture: From Scarcity to Growth

| Step | Idea | Where it was taught |
|---|---|---|
| 1 | **Scarcity**: limited resources, unlimited wants; it never disappears, unlike a shortage | Parts 1–2 |
| 2 | **Choice and opportunity cost**: the value of the single next-best alternative, counting explicit and implicit costs | Parts 1–2 |
| 3 | **Economic systems** ration scarce resources by prices (market), by plan (command) or by a blend (mixed) | Part 2 |
| 4 | **The PPC** shows maximum output combinations; its slope is the opportunity cost | Parts 1, 3 |
| 5 | **Shape**: bowed out = increasing cost (specialized resources); straight = constant cost | Part 3 |
| 6 | **Efficiency**: on the curve = productively efficient; one point = allocatively efficient; inside = idle resources; outside = unattainable | Part 3 |
| 7 | **Shifts and pivots**: only resources and technology move the curve; one-good technology pivots it | Part 4 |
| 8 | **Macro links**: on the curve = full employment (natural rate); inside = recession; outward shift = economic growth (LRAS right) | Part 5 |

## Calculation Toolkit

| You are asked for | Do this | Example |
|---|---|---|
| Opportunity cost of a choice | Value of the next-best option, plus any explicit costs that only this choice requires | Next-best job \\$4,000 + commuting \\$600 = \\$4,600 |
| Per-unit OC between two PPC points | (Amount of other good given up) ÷ (units gained) | 80 tons ÷ 10 computers = 8 tons each |
| Total OC between two PPC points | Amount of other good given up | 330 − 250 = 80 tons |
| OC on a straight-line PPC | Max of other good ÷ max of this good | 6 shirts ÷ 3 hats = 2 shirts per hat |
| OC of the other good | The reciprocal | 1 ÷ 2 = 0.5 hats per shirt |

## Graph Decision Guide

| The question says... | Your graph shows... |
|---|---|
| "Unemployment rises" or "a recession begins" | A point **inside** the original PPC; the curve does not move |
| "More workers," "new resources," "better technology for both goods" | The PPC shifts **outward** |
| "War," "natural disaster destroys capital" | The PPC shifts **inward** |
| "Technology improves for only one good" | The PPC **pivots**: only that good's intercept moves out |
| "Society decides it wants more of one good" | A movement **along** the PPC |
| "The country invests heavily in capital goods" | A point toward the capital-goods axis now; a larger outward shift later |

> 🔑 **AP Connection:** On the exam, the PPC also stands for the whole economy's potential output. When you study AD-AS, remember the match: on the PPC ↔ at full-employment output on LRAS; outward PPC shift ↔ LRAS shifts right.
`
    },
    {
      id: 'macrosca7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review: Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Leon can work overtime for \\$150, go to a game he values at \\$120, or help a friend move, which he values at \\$90. He can do only one, and he chooses overtime. What is his opportunity cost?',
            options: [
              "\\$210, the game plus the move",
              "\\$120, the value of the game",
              "\\$90, the value of helping a friend",
              "\\$150, the overtime pay he earns"
            ],
            correctAnswer: 1,
            explanation: 'Opportunity cost is the value of the single next-best alternative, which is the game at \\$120. Adding both forgone options double-counts, and the overtime pay is the benefit of the choice he made.'
          },
          {
            question: 'Which of the following best explains why a country\'s PPC is bowed outward from the origin?',
            options: [
              "Its citizens prefer one of the two goods over the other good.",
              "Its prices for both goods rise as total output increases.",
              "Its resources are not equally productive in making both goods.",
              "Its technology improves as it moves along the curve."
            ],
            correctAnswer: 2,
            explanation: 'Specialized resources mean that producing more of one good requires shifting resources that are less and less suited to it, so the opportunity cost rises. Preferences and prices do not shape the curve, and technology is held constant along it.'
          },
          {
            question: 'A country\'s PPC shifts inward. Which event could have caused this shift?',
            options: [
              "A recession that leaves many workers unemployed",
              "A shift in demand from food toward housing",
              "A decline in the general price level",
              "A war that destroys much of its capital stock"
            ],
            correctAnswer: 3,
            explanation: 'Destroying capital reduces the economy\'s productive resources, so the whole curve moves in. A recession moves the economy inside an unchanged curve, a change in demand moves it along the curve, and the price level does not affect capacity.'
          }
        ]
      }
    },
    {
      id: 'macrosca7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Review: Calculations** ✍️

A country with a straight-line PPC can produce either **120 bikes** or **40 scooters** (or any combination on the line between them). Enter numbers only.

1) What is the opportunity cost of one scooter, in bikes?

2) If the country produces 10 scooters, what is the maximum number of bikes it can produce?

3) The country currently produces 20 scooters and 50 bikes. How many more bikes could it produce without giving up any scooters?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '90', '10'],
        hint1: 'Divide the maximum bikes by the maximum scooters.',
        hint2: 'Each scooter costs 3 bikes, so 10 scooters cost 30 bikes.',
        hint3: 'Find the maximum bikes at 20 scooters, then compare with 50.',
        explanation: 'One scooter costs 120 ÷ 40 = 3 bikes. Ten scooters cost 30 bikes, leaving 120 − 30 = 90 bikes. At 20 scooters the maximum is 120 − 60 = 60 bikes, so producing 50 bikes leaves the country 10 bikes inside its PPC.'
      }
    },
    {
      id: 'macrosca7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review: Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which choice by a country today is most likely to raise its productive capacity in 20 years, at the cost of lower consumption now?',
            options: [
              "Increasing its investment in capital goods",
              "Increasing its production of consumer goods",
              "Increasing its imports of consumer goods",
              "Increasing wages paid to government workers"
            ],
            correctAnswer: 0,
            explanation: 'Capital goods add to the stock of machines and factories, which shifts the PPC outward over time, but producing them means producing fewer consumer goods today. The other choices raise current consumption or spending without adding to future capacity.'
          },
          {
            question: 'An economy that is productively efficient and at full employment must be',
            options: [
              "on its PPC, with an unemployment rate of zero",
              "on its PPC, with unemployment at the natural rate",
              "inside its PPC, with no cyclical unemployment",
              "outside its PPC, with all resources fully used"
            ],
            correctAnswer: 1,
            explanation: 'Productive efficiency places the economy on its PPC, and full employment means unemployment equals the natural rate, which still includes frictional and structural unemployment. Zero unemployment is not the full-employment benchmark.'
          },
          {
            question: 'With good X on the horizontal axis, what happens to the slope of a bowed-out PPC as the economy produces more X?',
            options: [
              "It becomes flatter; each unit of X costs more.",
              "It stays constant; each unit costs the same.",
              "It becomes steeper; each unit of X costs more.",
              "It becomes steeper; each unit of X costs less."
            ],
            correctAnswer: 2,
            explanation: 'The absolute value of the slope is the opportunity cost of X. On a bowed-out curve the slope grows steeper as X increases, showing that each extra unit of X requires giving up more of the other good.'
          }
        ]
      }
    }
  ]
}
