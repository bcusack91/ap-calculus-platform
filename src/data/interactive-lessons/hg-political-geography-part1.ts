export const hgPoliticalGeographyPart1Data = {
  topicSlug: 'hg-political-geography',
  sections: [
    {
      id: 'hgpg1-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Geography & Boundaries

**Part 1 of 7 — States, Nations, and Borders**

---

## Key Political Concepts

| Term | Definition | Example |
|------|-----------|---------|
| **State** | Defined territory with sovereignty | France, Japan, Brazil |
| **Nation** | Cultural group sharing identity | Kurds, Basques, Tibetans |
| **Nation-state** | State = one nation | Iceland, Japan (approximately) |
| **Multinational state** | Multiple nations within one state | Russia, Nigeria, India |
| **Stateless nation** | Nation without its own state | Kurds, Palestinians, Roma |
| **Sovereignty** | Supreme authority within a territory | Control over laws, borders, military |

> 🔑 **AP Key Point:** The AP exam frequently asks you to distinguish between states, nations, and nation-states. A STATE is a political entity; a NATION is a cultural group.

---

## Types of Boundaries

| Type | Based On | Example |
|------|---------|---------|
| **Physical/natural** | Landforms or water | Rio Grande (US-Mexico), Himalayas (India-China) |
| **Cultural/ethnographic** | Language, religion, ethnicity | India-Pakistan (religion-based, 1947) |
| **Geometric** | Straight lines (latitude/longitude) | US-Canada at 49 degrees N, most African borders |
| **Antecedent** | Drawn BEFORE significant settlement | US-Canada border |
| **Subsequent** | Drawn AFTER cultural patterns develop | India-Pakistan border (1947) |
| **Superimposed** | Forced by outside authority | Most colonial African borders |
| **Relic** | No longer functions but still visible | Berlin Wall, Great Wall of China |
      `
    },
    {
      id: 'hgpg1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Most borders in Africa are geometric because:',
            options: [
              'African leaders preferred straight-line borders',
              'European colonial powers drew borders with little regard for ethnic boundaries',
              'The terrain in Africa is flat and featureless',
              'International law requires geometric borders for new states'
            ],
            correctAnswer: 1,
            explanation: 'European colonial powers at the Berlin Conference (1884-85) drew straight-line boundaries across Africa that ignored existing ethnic, linguistic, and cultural boundaries — these are superimposed geometric borders.'
          },
          {
            question: 'The former border between East and West Berlin is best classified as a:',
            options: [
              'Antecedent boundary',
              'Superimposed boundary that became a relic boundary',
              'Natural boundary',
              'Geometric boundary'
            ],
            correctAnswer: 1,
            explanation: 'The Berlin Wall was superimposed (imposed by Cold War powers) and is now a relic boundary (no longer functions as a border but physical traces and cultural impacts remain).'
          }
        ]
      }
    },
    {
      id: 'hgpg1-content',
      type: 'text' as const,
      content: `
## Boundary Disputes

| Type | Description | Example |
|------|-----------|---------|
| **Definitional** | Disagreement over the legal language of a treaty | Maritime boundary disputes over exclusive economic zones |
| **Locational** | Agreement on definition but disagreement on where the line falls | India-China border in the Himalayas |
| **Operational** | Disagreement over how the boundary functions | US-Mexico: border enforcement policies |
| **Allocational** | Disagreement over resource use at the boundary | Water rights along the Colorado River |

### Frontier vs. Boundary

- **Boundary**: Precise legal line separating states (modern concept)
- **Frontier**: A zone of transition rather than a sharp line (historical concept; few remain today)
- Antarctica and parts of the ocean floor are among the last true frontiers

### United Nations Convention on the Law of the Sea (UNCLOS)

| Zone | Distance from Coast | Rights |
|------|---------------------|--------|
| **Territorial sea** | 0–12 nautical miles | Full sovereignty |
| **Contiguous zone** | 12–24 nautical miles | Limited enforcement |
| **Exclusive Economic Zone (EEZ)** | 0–200 nautical miles | Resource extraction rights |
      `
    },
    {
      id: 'hgpg1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The supreme authority of a state to govern within its territory is called _______.

2) Boundaries drawn by outside powers without regard for local populations are called _______ boundaries.

3) Boundaries drawn before significant human settlement of an area are called _______ boundaries.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sovereignty', 'superimposed', 'antecedent'],
        hint1: 'The defining feature of an independent state.',
        hint2: 'Often created by colonial powers.',
        hint3: 'Drawn before the cultural landscape developed.',
        explanation: 'Sovereignty = supreme governing authority. Superimposed = forced by outsiders (colonial borders). Antecedent = drawn before significant settlement.'
      }
    },
    {
      id: 'hgpg1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Boundary** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The 49th parallel dividing the US and Canada is a ___ boundary',
            options: ['Geometric', 'Physical/natural', 'Cultural/ethnographic', 'Superimposed']
          },
          {
            label: 'The Rio Grande separating the US and Mexico is a ___ boundary',
            options: ['Physical/natural', 'Geometric', 'Cultural', 'Relic']
          },
          {
            label: 'India and China disagreeing on the exact position of their border in the Himalayas is a ___ dispute',
            options: ['Locational', 'Definitional', 'Operational', 'Allocational']
          }
        ],
        correctAnswers: ['Geometric', 'Physical/natural', 'Locational'],
        hint1: 'A straight line based on latitude.',
        hint2: 'A river forms the border.',
        hint3: 'They know the definition but disagree on where exactly the line falls.',
        explanation: '49th parallel = geometric (straight line). Rio Grande = physical (river). India-China = locational (disagreement on where the line is in mountainous terrain).'
      }
    },
    {
      id: 'hgpg1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Political Geography

- **State vs nation vs nation-state** — the most commonly confused terms on the exam
- Know the Berlin Conference (1884-85) and its impact on African borders
- Boundary disputes: know all 4 types and be able to identify real-world examples
- UNCLOS zones (12 nm territorial, 200 nm EEZ) are increasingly tested
- The South China Sea dispute involves overlapping EEZ claims and artificial island building
      `
    },
    {
      id: 'hgpg1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two countries share a river border. Country A wants to build a dam, but Country B argues this will reduce their water supply. This is best classified as:',
            options: [
              'A definitional boundary dispute',
              'An allocational boundary dispute',
              'A locational boundary dispute',
              'A superimposed boundary issue'
            ],
            correctAnswer: 1,
            explanation: 'Allocational disputes involve disagreements over how resources at or near the boundary are distributed. Water rights disputes between countries sharing rivers are a classic example.'
          },
          {
            question: 'China building artificial islands in the South China Sea to extend its territorial claims is primarily aimed at expanding its:',
            options: [
              'Contiguous zone for immigration enforcement',
              'Exclusive Economic Zone for resource extraction',
              'Cultural influence in Southeast Asia',
              'Antecedent boundary claims'
            ],
            correctAnswer: 1,
            explanation: 'By building artificial islands, China aims to extend its EEZ claims to access valuable fishing grounds, oil/gas deposits, and shipping lanes — an allocational boundary dispute at massive scale.'
          }
        ]
      }
    }
  ]
};
