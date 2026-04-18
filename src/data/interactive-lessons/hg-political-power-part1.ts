export const hgPoliticalPowerPart1Data = {
  topicSlug: 'hg-political-power',
  sections: [
    {
      id: 'hgpp1-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Power & Territoriality

**Part 1 of 7 — How Power Is Organized Spatially**

---

## Forms of Government

| Concept | Definition | Example |
|---------|-----------|---------|
| **Unitary state** | Power concentrated in central government | France, Japan, China |
| **Federal state** | Power shared between central and regional governments | US, Germany, Nigeria |
| **Devolution** | Transfer of power from central to regional government | UK giving power to Scotland, Wales |
| **Supranationalism** | Countries cooperating beyond national borders | EU, NATO, United Nations |
| **Gerrymandering** | Manipulating voting district boundaries | Packing, cracking, stacking |

> 🔑 **AP Key Point:** The AP exam frequently tests the spectrum from **unitary** to **federal** governance and the concept of **devolution** — know real-world examples of each.

---

## Shapes of States

| Shape | Description | Advantage/Disadvantage | Example |
|-------|-----------|----------------------|---------|
| **Compact** | Roughly circular | Easy to govern, short distances | Poland, Zimbabwe |
| **Elongated** | Long and narrow | Difficult communication coast to coast | Chile, Vietnam |
| **Prorupted** | Compact with an extension | Access to resources or strategic area | Thailand, Myanmar |
| **Fragmented** | Multiple non-contiguous pieces | Difficult to unite culturally | Indonesia, Philippines |
| **Perforated** | Surrounds another state | Complex border relations | South Africa (contains Lesotho) |
| **Landlocked** | No coastline | Limited trade access, dependent on neighbors | Bolivia, Nepal, Mongolia |
      `
    },
    {
      id: 'hgpp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The United Kingdom transferring legislative power to Scotland and Wales is an example of:',
            options: [
              'Supranationalism',
              'Devolution',
              'Imperialism',
              'Gerrymandering'
            ],
            correctAnswer: 1,
            explanation: 'Devolution = transferring power from a central government to regional authorities. The UK created the Scottish Parliament and Welsh Assembly, giving these regions more self-governance.'
          },
          {
            question: 'Indonesia, consisting of over 17,000 islands, is best classified as a:',
            options: [
              'Compact state',
              'Elongated state',
              'Fragmented state',
              'Perforated state'
            ],
            correctAnswer: 2,
            explanation: 'Indonesia territory is spread across thousands of non-contiguous islands — making governance, communication, and national unity challenging. This is a fragmented state.'
          }
        ]
      }
    },
    {
      id: 'hgpp1-content',
      type: 'text' as const,
      content: `
## Electoral Geography

### Gerrymandering Techniques

| Technique | How It Works | Effect |
|-----------|-------------|--------|
| **Packing** | Concentrate opposition voters into few districts | Opposition wins those districts by huge margins but loses everywhere else |
| **Cracking** | Spread opposition voters across many districts | Opposition never reaches majority in any district |
| **Stacking** | Combine opposition areas with dominant group areas | Dilutes opposition voting power |

### Reapportionment and Redistricting
- **Reapportionment**: Reallocating House seats based on census population changes
- **Redistricting**: Redrawing district boundaries after reapportionment
- Both happen every **10 years** after the US Census

## Supranational Organizations

| Organization | Purpose | Members |
|-------------|---------|---------|
| **European Union (EU)** | Economic/political integration | 27 European countries |
| **NATO** | Military alliance | 32 countries (North America + Europe) |
| **United Nations** | International peace and cooperation | 193 countries |
| **African Union** | Continental cooperation | 55 African states |
| **ASEAN** | Southeast Asian cooperation | 10 countries |
      `
    },
    {
      id: 'hgpp1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A state where power is shared between central and regional governments is a _______ state.

2) A state where power is concentrated in the central government is a _______ state.

3) The transfer of central government power to regional authorities is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['federal', 'unitary', 'devolution'],
        hint1: 'The United States is the classic example.',
        hint2: 'France and Japan are examples.',
        hint3: 'Scotland and Catalonia sought this.',
        explanation: 'Federal = shared power (US, Germany). Unitary = centralized power (France, Japan). Devolution = transferring power downward to regions.'
      }
    },
    {
      id: 'hgpp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chile, stretching 2,600 miles along the Pacific coast, is a ___ state',
            options: ['Elongated', 'Compact', 'Fragmented', 'Prorupted']
          },
          {
            label: 'South Africa completely surrounding the country of Lesotho makes South Africa a ___ state',
            options: ['Perforated', 'Compact', 'Fragmented', 'Elongated']
          },
          {
            label: 'Concentrating opposition voters into one district so they win by huge margins but lose everywhere else is called ___',
            options: ['Packing', 'Cracking', 'Stacking', 'Devolution']
          }
        ],
        correctAnswers: ['Elongated', 'Perforated', 'Packing'],
        hint1: 'Very long and narrow.',
        hint2: 'Contains another country inside it.',
        hint3: 'Pack them all into one place.',
        explanation: 'Chile = elongated (long and narrow). South Africa = perforated (surrounds Lesotho). Packing = concentrating opposition voters in few districts.'
      }
    },
    {
      id: 'hgpp1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Political Power

- **Unitary vs. federal** — know at least 3 examples of each
- **Devolution reasons**: ethnic/linguistic differences, economic inequality, physical geography (islands, mountains)
- **Gerrymandering**: be able to identify packing vs cracking from a map diagram
- **Supranationalism**: EU is the most tested — know its benefits (trade, travel) and challenges (loss of sovereignty, Brexit)
- **State shapes**: be ready to identify from a map and explain how shape affects governance
      `
    },
    {
      id: 'hgpp1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Brexit — the UK leaving the European Union — represents a tension between:',
            options: [
              'Devolution and federalism',
              'National sovereignty and supranationalism',
              'Unitary and federal governance',
              'Gerrymandering and reapportionment'
            ],
            correctAnswer: 1,
            explanation: 'Brexit reflects the tension between maintaining national sovereignty (controlling own laws, borders, trade) and the benefits of supranational cooperation (EU free trade, free movement).'
          },
          {
            question: 'A country composed of several islands spread across 1,000 miles of ocean would most likely face challenges related to its ___ shape.',
            options: [
              'Compact',
              'Elongated',
              'Fragmented',
              'Prorupted'
            ],
            correctAnswer: 2,
            explanation: 'Fragmented states (like Indonesia or the Philippines) face challenges in transportation, communication, national unity, and governance because their territory is not connected.'
          }
        ]
      }
    }
  ]
};
