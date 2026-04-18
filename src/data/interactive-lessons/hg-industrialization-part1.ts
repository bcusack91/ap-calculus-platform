export const hgIndustrializationPart1Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgind1-intro',
      type: 'text' as const,
      content: `
# 🌍 Industrialization & Development

**Part 1 of 7 — Economic Sectors and Growth Models**

---

## Economic Sectors

| Sector | Activity | Example | Dominant In |
|--------|----------|---------|------------|
| **Primary** | Extract raw materials | Farming, mining, fishing | Periphery countries |
| **Secondary** | Manufacturing | Factories, construction | Semi-periphery (industrializing) |
| **Tertiary** | Services | Retail, education, healthcare | Core countries |
| **Quaternary** | Information/knowledge | Research, IT, finance | Core countries |
| **Quinary** | Decision-making | Government leaders, CEOs | Core countries |

> 🔑 **AP Key Point:** As countries develop, their workforce shifts from primary → secondary → tertiary sectors. This is a key indicator of **economic development** on the AP exam.

---

## Development Models

| Model | Creator | Idea |
|-------|---------|------|
| **Rostow Stages of Growth** | W.W. Rostow | 5 stages from traditional to high consumption (linear) |
| **Dependency Theory** | A.G. Frank | Periphery stays poor because core exploits it |
| **World Systems Theory** | Wallerstein | Core-semi-periphery-periphery hierarchy |

### Rostow 5 Stages

1. **Traditional** — subsistence agriculture, limited technology
2. **Preconditions for takeoff** — infrastructure investment, commercial agriculture begins
3. **Takeoff** — rapid industrialization, urbanization accelerates
4. **Drive to maturity** — diversified economy, technology spreads widely
5. **Age of mass consumption** — high income, service-based economy

> ⚠️ **AP Critique:** Rostow assumes ALL countries follow the same path. Dependency theorists argue this ignores how colonial exploitation created structural barriers to development.
      `
    },
    {
      id: 'hgind1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country where most workers are in agriculture and mining is primarily in the:',
            options: [
              'Primary sector',
              'Secondary sector',
              'Tertiary sector',
              'Quaternary sector'
            ],
            correctAnswer: 0,
            explanation: 'The primary sector involves extracting raw materials (farming, mining, forestry, fishing). Countries with most workers in this sector are typically less economically developed.'
          },
          {
            question: 'Dependency theorists would argue that developing countries remain poor because:',
            options: [
              'They lack natural resources needed for industrialization',
              'Structural exploitation by wealthy core countries prevents development',
              'Their populations are growing too fast',
              'They chose not to adopt Western economic models'
            ],
            correctAnswer: 1,
            explanation: 'Dependency theory argues that the global economic system is structured to benefit core countries at the expense of the periphery — through unequal trade, debt, and historical colonialism.'
          }
        ]
      }
    },
    {
      id: 'hgind1-content',
      type: 'text' as const,
      content: `
## Industrial Location Theory

### Weber Least Cost Theory (1909)

Alfred Weber argued that industries locate where **costs are minimized**:

| Factor | Description | Example |
|--------|-----------|---------|
| **Transportation costs** | Most important; minimize transport of heavy materials | Steel mills near iron ore + coal |
| **Labor costs** | Cheap labor can offset higher transport costs | Textile factories in Bangladesh |
| **Agglomeration** | Benefits of clustering with related industries | Silicon Valley tech cluster |
| **Deglomeration** | Moving away when clustering causes high rents/congestion | Factories leaving expensive city centers |

### Bulk-Reducing vs. Bulk-Gaining

| Type | Description | Example |
|------|-----------|---------|
| **Bulk-reducing** | Product weighs LESS than raw materials; locate near raw materials | Copper smelting near mines |
| **Bulk-gaining** | Product weighs MORE than components; locate near market | Soft drink bottling (add water near consumers) |

## The Industrial Revolution

| Wave | When | Key Industries | Where |
|------|------|---------------|-------|
| **First** | 1760s–1840s | Textiles, steam, iron | Britain (Manchester, Birmingham) |
| **Second** | 1870s–1914 | Steel, chemicals, electricity | US, Germany, Japan |
| **Third** | 1960s–present | Digital, automation, biotech | Global, but led by core countries |
      `
    },
    {
      id: 'hgind1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The economic sector focused on services (retail, education, healthcare) is the _______ sector.

2) Rostow Stages of Growth model proposes that all countries follow _______ stages of economic development.

3) _______ theory argues that poor countries remain poor because of exploitation by wealthy nations.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['tertiary', '5', 'Dependency'],
        hint1: 'The dominant sector in core countries.',
        hint2: 'From traditional society to age of mass consumption.',
        hint3: 'The opposite of Rostow optimistic view.',
        explanation: 'Tertiary = service sector. Rostow = 5 stages of growth. Dependency theory = structural exploitation keeps periphery poor.'
      }
    },
    {
      id: 'hgind1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Apply Weber Theory** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A copper smelter (heavy ore produces light metal) should locate near ___',
            options: ['Raw materials (copper mine)', 'The consumer market', 'The cheapest labor', 'The government capital']
          },
          {
            label: 'A soft drink bottling plant (adds heavy water to light syrup) should locate near ___',
            options: ['The consumer market', 'The water source', 'The sugar plantation', 'The cheapest labor']
          },
          {
            label: 'Many tech companies clustering in Silicon Valley is an example of ___',
            options: ['Agglomeration', 'Deglomeration', 'Bulk-reducing industry', 'Dependency']
          }
        ],
        correctAnswers: ['Raw materials (copper mine)', 'The consumer market', 'Agglomeration'],
        hint1: 'Bulk-reducing: raw materials are heavier than the product.',
        hint2: 'Bulk-gaining: the product is heavier than the inputs.',
        hint3: 'Benefits of clustering with related businesses.',
        explanation: 'Copper smelting = bulk-reducing (locate near mine). Bottling = bulk-gaining (locate near market). Silicon Valley = agglomeration (clustering benefits).'
      }
    },
    {
      id: 'hgind1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Industrialization

- **Weber least cost theory** is heavily tested — know transport, labor, and agglomeration factors
- **Bulk-reducing vs bulk-gaining** — practice classifying industries
- **Rostow vs Dependency Theory** — be ready to compare and critique both
- The shift from primary → tertiary sectors is called **sectoral transformation** or economic restructuring
- Know how the Industrial Revolution affected urbanization, population (DTM), and social structure
- **Fordism** (assembly line, mass production) vs **post-Fordism** (flexible, global supply chains) is increasingly tested
      `
    },
    {
      id: 'hgind1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A developing country has 60% of workers in agriculture, 20% in manufacturing, and 20% in services. According to Rostow, this country is MOST likely in:',
            options: [
              'Stage 1 (Traditional society)',
              'Stage 3 (Takeoff)',
              'Stage 4 (Drive to maturity)',
              'Stage 5 (Age of mass consumption)'
            ],
            correctAnswer: 0,
            explanation: 'A country with 60% of workers in agriculture (primary sector) is characteristic of Rostow Stage 1 — a traditional society with limited industrialization and subsistence agriculture.'
          },
          {
            question: 'A factory moves from Detroit to rural Mississippi to reduce costs, while other factories move from the US to Vietnam. These both illustrate:',
            options: [
              'Agglomeration economies attracting industry',
              'Deglomeration and the search for lower labor costs',
              'Bulk-reducing industry location decisions',
              'Rostow Stage 5 development'
            ],
            correctAnswer: 1,
            explanation: 'Both moves represent deglomeration (leaving expensive clusters) and seeking cheaper labor — one at national scale (Detroit to Mississippi), one at global scale (US to Vietnam).'
          }
        ]
      }
    }
  ]
};
