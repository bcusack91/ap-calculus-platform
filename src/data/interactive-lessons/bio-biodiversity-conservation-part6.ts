export const bioBiodiversityConservationPart6Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco6-intro',
      type: 'text' as const,
      content: `# Ecosystem Services & Sustainability

**Part 6 of 7 — Biodiversity & Conservation**

Biodiversity is not just an abstract concept — it directly supports the goods and services that human societies depend on. The **Millennium Ecosystem Assessment** (2005) categorized these benefits into four types of **ecosystem services**:

### The Four Categories

| Category | Definition | Examples |
|---|---|---|
| **Provisioning** | Products obtained from ecosystems | Food, fresh water, timber, fiber, medicines |
| **Regulating** | Benefits from regulation of ecosystem processes | Climate regulation, flood control, water purification, pollination, disease regulation |
| **Supporting** | Services necessary for production of all other services | Nutrient cycling, soil formation, primary production, water cycling |
| **Cultural** | Nonmaterial benefits from ecosystems | Recreation, ecotourism, aesthetic value, spiritual significance, education |

### Why This Matters
- The global value of ecosystem services has been estimated at **$125–145 trillion per year** — far exceeding global GDP.
- Many ecosystem services have **no market price** (clean air, pollination, flood control), so they are often undervalued in economic decisions.
- Loss of biodiversity degrades ecosystem services, sometimes abruptly when **ecological thresholds** are crossed.
`
    },
    {
      id: 'bco6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Ecosystem Services** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Bees pollinating agricultural crops provide a service worth billions of dollars annually. This is classified as a:',
            options: [
              'Provisioning service',
              'Regulating service',
              'Supporting service',
              'Cultural service'
            ],
            correctAnswer: 1,
            explanation: 'Pollination is a regulating service — it is a natural process that regulates the production of fruits and seeds. Without pollinators, many crops would fail. Provisioning services are the actual products (the crops themselves); regulating services are the processes that control production.'
          },
          {
            question: 'Nutrient cycling and soil formation are classified as supporting services because:',
            options: [
              'They have the highest economic value',
              'They are the easiest to replace with technology',
              'They are necessary for the production of all other ecosystem services',
              'They only benefit non-human organisms'
            ],
            correctAnswer: 2,
            explanation: 'Supporting services are the foundation upon which all other ecosystem services depend. Without nutrient cycling, soil formation, and primary production, there would be no food (provisioning), no climate regulation (regulating), and no landscapes for recreation (cultural).'
          }
        ]
      }
    },
    {
      id: 'bco6-services-detail',
      type: 'text' as const,
      content: `## Ecosystem Services in Detail

### Provisioning Services
- **Food**: Agriculture, fisheries, aquaculture, and wild-harvested foods all depend on biodiversity.
  - Crop wild relatives provide genetic material for breeding disease-resistant varieties.
  - ~75% of global food crops depend on animal pollinators.
- **Fresh water**: Forests and wetlands filter and store water, recharging aquifers.
- **Medicines**: ~50% of modern pharmaceuticals are derived from natural compounds.
  - Aspirin (willow bark), taxol (Pacific yew), artemisinin (sweet wormwood).
  - Unknown species may hold undiscovered medicinal compounds.

### Regulating Services
- **Climate regulation**: Forests sequester carbon (~2.6 Gt C/year); oceans absorb ~25% of anthropogenic CO₂.
- **Flood control**: Wetlands absorb floodwaters, reducing downstream damage. Mangroves and coral reefs buffer coastal storms.
- **Water purification**: Riparian zones and wetlands filter sediments, nutrients, and pollutants from water.
- **Pollination**: Wild and managed pollinators are essential for ~35% of global crop production.
- **Biological pest control**: Natural predators and parasitoids regulate pest populations (e.g., lady beetles eating aphids).

### Cultural Services
- **Ecotourism**: Generates revenue that incentivizes conservation ($600+ billion/year globally).
- **Aesthetic and spiritual values**: Natural landscapes inspire art, religion, and mental well-being.
- **Education and scientific discovery**: Ecosystems are living laboratories for research and learning.

### The Value Problem
- Ecosystem services are often **public goods** — non-excludable and non-rivalrous.
- Markets fail to account for their value → **externalities**.
- **Payment for Ecosystem Services (PES)**: Programs that pay landowners to maintain natural habitats (e.g., Costa Rica pays farmers to preserve forests for carbon sequestration and watershed protection).
`
    },
    {
      id: 'bco6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Ecosystem Services** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Food, timber, and fresh water obtained from ecosystems are classified as ___ services.',
            options: ['regulating', 'provisioning', 'supporting', 'cultural']
          },
          {
            label: 'Wetlands that absorb floodwaters and reduce downstream damage provide a ___ service.',
            options: ['provisioning', 'cultural', 'regulating', 'supporting']
          },
          {
            label: 'Nutrient cycling and soil formation are ___ services because they underpin all other services.',
            options: ['provisioning', 'regulating', 'cultural', 'supporting']
          },
          {
            label: 'Ecotourism and aesthetic appreciation of nature are examples of ___ services.',
            options: ['supporting', 'provisioning', 'cultural', 'regulating']
          }
        ],
        correctAnswers: ['provisioning', 'regulating', 'supporting', 'cultural'],
        hint1: 'Provisioning = products; Regulating = process control.',
        hint2: 'Flood control regulates a natural process (water flow).',
        hint3: 'Supporting services are the foundation; cultural services are non-material benefits.',
        explanation: 'Provisioning services are tangible products (food, water, timber). Regulating services control natural processes (flood control, pollination, climate regulation). Supporting services (nutrient cycling, soil formation) are the foundation for all others. Cultural services provide non-material benefits like recreation and spiritual value.'
      }
    },
    {
      id: 'bco6-sustainability',
      type: 'text' as const,
      content: `## Ecological Footprint & Sustainable Development

### Ecological Footprint
- The **ecological footprint** measures human demand on Earth's ecosystems.
- Expressed as the area of biologically productive land and water needed to produce the resources consumed and absorb the wastes generated.
- Measured in **global hectares (gha)** per person.
- **Earth Overshoot Day**: The date each year when humanity has used more resources than Earth can regenerate in that year (~late July in recent years).

| Country | Ecological Footprint (gha/person) |
|---|---|
| USA | ~8.1 |
| China | ~3.7 |
| India | ~1.2 |
| Global average | ~2.8 |
| Earth's biocapacity | ~1.6 per person |

**We currently use ~1.75 Earths' worth of resources per year.**

### Sustainable Development
The UN defines sustainable development as "development that meets the needs of the present without compromising the ability of future generations to meet their own needs."

Key principles:
- **Renewable resource use**: Harvest rates ≤ regeneration rates.
- **Non-renewable resource use**: Develop substitutes before depletion.
- **Waste management**: Emission rates ≤ ecosystem absorption capacity.
- **Biodiversity protection**: Maintain ecosystem functions and evolutionary potential.

### Applied Examples
- **Sustainable forestry**: Selective logging, reforestation, certified timber (FSC).
- **Sustainable fisheries**: Catch limits based on maximum sustainable yield (MSY), seasonal closures, bycatch reduction.
- **Sustainable agriculture**: Crop rotation, integrated pest management, reduced tillage, cover crops.
- **Biosphere reserves** (UNESCO): Core protected zone → buffer zone → transition zone for sustainable use.
`
    },
    {
      id: 'bco6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sustainability & Footprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Earth Overshoot Day falling in late July means that:',
            options: [
              'Half of all species go extinct each year by July',
              'Humanity uses an entire year\'s worth of Earth\'s renewable resources by late July',
              'Global temperatures peak in late July',
              'Most deforestation occurs in the first half of the year'
            ],
            correctAnswer: 1,
            explanation: 'Earth Overshoot Day marks when humanity\'s demand for ecological resources exceeds what Earth can regenerate in that year. When it falls in late July, it means we use about 1.75 years\' worth of resources each year — living beyond Earth\'s ecological budget for the remaining months.'
          },
          {
            question: 'A fishing regulation that sets catch limits based on the maximum rate at which a fish population can be harvested without declining over time is based on the concept of:',
            options: [
              'Effective population size',
              'Maximum sustainable yield',
              'Minimum viable population',
              'Ecological footprint'
            ],
            correctAnswer: 1,
            explanation: 'Maximum sustainable yield (MSY) is the largest catch that can be taken indefinitely from a population without causing it to decline. Harvest rates are set at the point where population growth rate is highest (typically at about half the carrying capacity).'
          }
        ]
      }
    },
    {
      id: 'bco6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary — Ecosystem Services & Sustainability

### Key Takeaways
1. Ecosystem services fall into four categories: **provisioning** (products), **regulating** (process control), **supporting** (foundational), and **cultural** (non-material).
2. Many services lack market prices → undervalued → **Payment for Ecosystem Services** programs aim to fix this.
3. **Ecological footprint** measures human resource demand; we currently use ~1.75 Earths.
4. **Sustainable development** balances present needs with future generations' needs.
5. Sustainable practices include certified forestry, MSY-based fishing, and integrated pest management.

### AP Exam Connection
- Be ready to classify specific examples into the four service categories.
- Understand the concept of ecological footprint and what it means that humanity overshoots Earth's biocapacity.
- Questions may present a scenario where an ecosystem service is disrupted (e.g., pollinator decline) and ask about downstream consequences.
- Know how biodiversity loss can lead to loss of ecosystem services and why this matters for human well-being.

**Next up:** Part 7 — AP Exam Problems
`
    }
  ]
};
