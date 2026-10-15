export const hgPopulationDistributionPart1Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula1-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 1 of 7 — Population Distribution**

Earth's population is unevenly distributed. Major concentrations exist in East Asia, South Asia, and Europe. Physical factors like climate and topography shape where people live.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Population density** | The number of people per unit of area |
| **Ecumene** | The portion of Earth permanently inhabited by humans |
| **Arithmetic density** | Total population divided by total land area |
      `
    },
    {
      id: 'hgpopula1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The ecumene refers to:',
            options: [
              'The parts of Earth too harsh for permanent settlement',
              'The portion of Earth permanently inhabited by humans',
              'The share of Earth\'s land that is suitable for farming',
              'The world\'s most densely populated urban regions'
            ],
            correctAnswer: 1,
            explanation: 'The ecumene is the habitable portion of Earth where humans have made permanent settlements.'
          },
          {
            question: 'Arithmetic density is calculated by:',
            options: [
              'Dividing the total population by arable land',
              'Dividing total population by total land area',
              'Dividing the number of farmers by arable land',
              'Dividing urban population by total land area'
            ],
            correctAnswer: 1,
            explanation: 'Arithmetic density is the simplest measure: total population divided by total land area.'
          }
        ]
      }
    },
    {
      id: 'hgpopula1-content',
      type: 'text' as const,
      content: `
## 📖 Population Density: One Idea, Several Measures

**Population density** is the number of people per unit of area, usually per square kilometer or square mile. It is a family of measures, not a single number: what you divide by changes what the result reveals. The CED (Topic 2.1) expects you to calculate three of them and explain what each shows.

| Measure | Formula | Question it answers |
|---|---|---|
| **Arithmetic density** | Total population ÷ total land area | How many people per unit of land overall? |
| **Physiological density** | Total population ÷ arable land | How much pressure do people put on the land that can grow crops? |
| **Agricultural density** | Number of farmers ÷ arable land | How many farmers work each unit of farmland? |

**Arable land** is land suitable for growing crops. All three measures can be compared across countries, but only if you keep straight what goes on top and what goes on the bottom.

## The Ecumene

The **ecumene** is the portion of Earth's surface where people live permanently. The rest is the **nonecumene**: ice sheets, the highest mountains and the driest deserts. Antarctica's research stations do not make it part of the ecumene, because the staff rotate in and out and no one lives there permanently.

**Ecumene is not the same as "densely populated."** Australia's sheep and cattle stations and the grasslands of Mongolia hold very few people per km², but people live there year-round, so they are part of the ecumene. The ecumene tells you **where** people live permanently; density tells you **how many** live there.

## Worked Calculation: Japan

The figures are rounded for the early 2020s so the arithmetic is clear. Farmers means people employed in agriculture.

| Population | Total land area | Arable land | Farmers |
|---|---|---|---|
| 124 million | 365,000 km² | 41,000 km² | about 2 million |

1. **Arithmetic density** = 124,000,000 ÷ 365,000 ≈ **340 people per km²**
2. **Physiological density** = 124,000,000 ÷ 41,000 ≈ **3,020 people per km² of arable land**
3. **Agricultural density** = 2,000,000 ÷ 41,000 ≈ **49 farmers per km² of arable land**

### What the Three Numbers Say Together
- **Arithmetic (340):** Japan looks crowded, but the average spreads people evenly over the whole country. About two-thirds of Japan is forested mountain, and most people live on narrow coastal plains such as the Kanto Plain around Tokyo.
- **Physiological (about 3,020):** this is nearly 9 times the arithmetic density (3,020 ÷ 340), because only about 11 percent of Japan's land is arable. Japan imports much of its food.
- **Agricultural (about 49):** relatively few farmers work each km² of farmland, which points to mechanized farming rather than many people farming by hand.

> ⚠️ **Common error:** arithmetic density divides by **all** land. Physiological density uses **all people**, while agricultural density uses **only farmers**; both of those divide by **arable** land, not total land.

> 🔑 **AP Connection:** A large gap between physiological and arithmetic density means farmland is scarce. Part 3 uses the same three measures to compare several countries, and Part 2 explains the physical and human factors behind where the ecumene's people cluster.
      `
    },
    {
      id: 'hgpopula1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the number of people per unit of area?

2) What concept describes the portion of Earth permanently inhabited by humans?

3) Name the term for total population divided by total land area.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Population density', 'Ecumene', 'Arithmetic density'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: E',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: Population density (The number of people per unit of area), Ecumene (The portion of Earth permanently inhabited by humans), and Arithmetic density (Total population divided by total land area).'
      }
    },
    {
      id: 'hgpopula1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The number of people per unit of area is called ___',
            options: ['Population density', 'Ecumene', 'Population distribution', 'Carrying capacity']
          },
          {
            label: 'The portion of Earth permanently inhabited by humans describes ___',
            options: ['Population density', 'Ecumene', 'Arithmetic density', 'Nonecumene']
          },
          {
            label: 'Total population divided by total land area is known as ___',
            options: ['Arithmetic density', 'Physiological density', 'Agricultural density', 'Ecumene']
          }
        ],
        correctAnswers: ['Population density', 'Ecumene', 'Arithmetic density'],
        hint1: 'The general measure of people per km² or per square mile.',
        hint2: 'Where people live year-round, however thinly.',
        hint3: 'The bottom of the fraction is all land, not just arable land.',
        explanation: 'Population density is the general idea of people per unit of area; distribution describes where people are spread, and carrying capacity is the population an area can support. The ecumene is the permanently inhabited land, and the nonecumene is the rest. Dividing total population by total land area is arithmetic density; physiological density divides by arable land, and agricultural density divides only farmers by arable land.'
      }
    },
    {
      id: 'hgpopula1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'t confuse **Population density** with **Ecumene** — while related, they address different aspects of Population Distribution & Composition.
- **Arithmetic density** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about population distribution, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect population distribution to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Bangladesh has a high physiological density. This means:',
            options: [
              'It has many people relative to its total land area',
              'It has many people relative to its arable farmland',
              'It has few people for each square mile of its land',
              'It has many farmers working each unit of farmland'
            ],
            correctAnswer: 1,
            explanation: 'High physiological density means a lot of people depend on limited farmland — indicating potential food supply pressure.'
          },
          {
            question: 'Most of Australia\'s population lives along the southeastern coast because:',
            options: [
              'The interior is too humid and forested for farming',
              'The coast is wetter, milder and better for trade',
              'Federal law has required settlers to live near the coast',
              'Mining leases cover most of the interior\'s farmland'
            ],
            correctAnswer: 1,
            explanation: 'Australia\'s interior is arid, so people concentrate along the wetter, milder southeastern coast, where ports and the first colonial settlements also anchored growth.'
          }
        ]
      }
    }
  ]
}
