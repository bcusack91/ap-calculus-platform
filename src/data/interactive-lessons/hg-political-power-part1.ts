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

## Political Power and Territoriality

Political power is expressed geographically as **control over people, land and resources**. **Territoriality** is the connection of people, their culture and their economic systems to the land.

| Concept | Meaning | Example |
|---------|---------|---------|
| **Neocolonialism** | A powerful state or company controls a weaker state's economy or politics without formal rule | Foreign firms controlling a former colony's mines and export earnings |
| **Shatterbelt** | A region caught between outside powers and split by internal divisions, so conflict is common | Eastern Europe during the Cold War; the Middle East |
| **Choke point** | A narrow passage on a key route whose control gives power over trade or military movement | Strait of Hormuz, Strait of Malacca, Suez and Panama Canals |
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
            question: 'About one-fifth of the world\'s oil passes through the narrow Strait of Hormuz. The strait is best described as a:',
            options: [
              'Shatterbelt',
              'Relict boundary',
              'Choke point',
              'Stateless nation'
            ],
            correctAnswer: 2,
            explanation: 'A choke point is a narrow passage on a vital route; whoever controls it gains power over trade and military movement. A shatterbelt is a whole region torn by outside rivalry and internal division, a relict boundary no longer functions, and a stateless nation is a people without a state.'
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
            label: 'Foreign corporations controlling a former colony\'s mines and export earnings, without formal colonial rule, is ___',
            options: ['Neocolonialism', 'Devolution', 'Supranationalism', 'Irredentism']
          },
          {
            label: 'A region squeezed between rival outside powers and split by internal ethnic divisions is a ___',
            options: ['Shatterbelt', 'Choke point', 'Nation-state', 'Federal state']
          },
          {
            label: 'Concentrating opposition voters into one district so they win by huge margins but lose everywhere else is called ___',
            options: ['Packing', 'Cracking', 'Stacking', 'Devolution']
          }
        ],
        correctAnswers: ['Neocolonialism', 'Shatterbelt', 'Packing'],
        hint1: 'Control without formal rule.',
        hint2: 'Caught between outside powers and divided inside.',
        hint3: 'Pack them all into one place.',
        explanation: 'Neocolonialism = economic or political control of a weaker state without formal rule. Shatterbelt = a region pressured by outside powers and split internally. Packing = concentrating opposition voters in few districts.'
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
- **Territoriality**: explain how neocolonialism, shatterbelts and choke points express control over people, land and resources
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
              'Devolution and the rise of federalism',
              'National sovereignty and supranationalism',
              'Unitary rule and federal systems of governance',
              'Gerrymandering and reapportionment'
            ],
            correctAnswer: 1,
            explanation: 'Brexit reflects the tension between maintaining national sovereignty (controlling own laws, borders, trade) and the benefits of supranational cooperation (EU free trade, free movement).'
          },
          {
            question: 'A country made up of islands spread across 1,000 miles of ocean faces a strong movement for self-rule on its most distant island. Which devolutionary factor does this best illustrate?',
            options: [
              'Irredentism by a neighboring state',
              'Division of groups by physical geography',
              'Supranational limits on sovereignty',
              'Ethnic cleansing by the central state'
            ],
            correctAnswer: 1,
            explanation: 'Physical geography such as open water or mountains can divide groups and weaken ties to the capital, a devolutionary factor the CED names (SPS-4.A.1). Irredentism is a claim by another state, supranationalism involves organizations like the EU, and nothing in the scenario involves ethnic cleansing.'
          }
        ]
      }
    }
  ]
};
