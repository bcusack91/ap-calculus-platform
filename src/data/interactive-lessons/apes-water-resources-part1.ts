export const apesWaterResourcesPart1Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswr1-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 1 of 7 — Freshwater Supply, Use, and Pollution**

---

## Global Water Distribution

| Water Source | Percentage of Total | Availability |
|-------------|-------------------|-------------|
| **Oceans (saltwater)** | 97.5% | Not directly usable |
| **Ice caps/glaciers** | 1.7% | Locked up; melting due to climate change |
| **Groundwater** | 0.76% | Major freshwater source; aquifers |
| **Surface water (lakes, rivers)** | 0.01% | Most accessible; heavily used |
| **Atmosphere/soil moisture** | 0.04% | Part of water cycle |

> 🔑 **Only ~0.77% of all water on Earth is accessible fresh water** (groundwater + surface water). This makes freshwater conservation critical.

---

## Water Use by Sector

| Sector | Global Water Use | Examples |
|--------|-----------------|---------|
| **Agriculture** | ~70% | Irrigation of crops, livestock |
| **Industry** | ~20% | Manufacturing, cooling, mining |
| **Domestic** | ~10% | Drinking, sanitation, cooking |

## Key Groundwater Terms

| Term | Definition |
|------|-----------|
| **Aquifer** | Underground layer of permeable rock holding water |
| **Water table** | Top surface of the saturated zone |
| **Recharge zone** | Area where water infiltrates to replenish aquifer |
| **Cone of depression** | Lowering of water table around a pumping well |
| **Ogallala Aquifer** | Largest aquifer in US (Great Plains); being depleted faster than recharged |
      `
    },
    {
      id: 'apeswr1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sector uses the MOST fresh water globally?',
            options: [
              'Domestic (household use)',
              'Industrial (factories and power)',
              'Agriculture (irrigation and livestock)',
              'Transportation'
            ],
            correctAnswer: 2,
            explanation: 'Agriculture uses approximately 70% of all freshwater globally, primarily for irrigation. This is why water-efficient irrigation techniques are crucial for sustainability.'
          },
          {
            question: 'The Ogallala Aquifer is a concern because:',
            options: [
              'It contains saltwater, not freshwater',
              'It is being depleted faster than it can recharge',
              'It causes flooding in the Great Plains',
              'It is too deep to access with modern technology'
            ],
            correctAnswer: 1,
            explanation: 'The Ogallala Aquifer (beneath the US Great Plains) is being pumped for irrigation much faster than rainfall can recharge it. At current rates, significant portions could be depleted within decades.'
          }
        ]
      }
    },
    {
      id: 'apeswr1-content',
      type: 'text' as const,
      content: `
## Water Pollution

| Type | Source Category | Examples |
|------|---------------|---------|
| **Point source** | Single, identifiable location | Factory discharge pipe, sewage treatment outfall |
| **Non-point source** | Diffuse, widespread | Agricultural runoff, urban stormwater, atmospheric deposition |

### Major Water Pollutants

| Pollutant | Source | Impact |
|-----------|--------|--------|
| **Nutrients (N, P)** | Fertilizer, sewage | Eutrophication, algal blooms, dead zones |
| **Pathogens** | Sewage, animal waste | Cholera, typhoid, dysentery |
| **Sediment** | Erosion, construction | Reduces water clarity; smothers habitats |
| **Thermal pollution** | Power plant cooling water | Reduces dissolved oxygen; harms aquatic life |
| **Heavy metals** | Mining, industry | Mercury, lead — bioaccumulate in food chains |
| **Endocrine disruptors** | Pesticides, plastics, pharmaceuticals | Interfere with hormone systems in wildlife |

## Water Treatment

| Method | Purpose | Level |
|--------|---------|-------|
| **Primary treatment** | Physical removal (screens, settling) | Removes solids |
| **Secondary treatment** | Biological breakdown by bacteria | Removes organic matter |
| **Tertiary treatment** | Chemical/advanced treatment | Removes nutrients, chemicals, pathogens |
      `
    },
    {
      id: 'apeswr1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Pollution from a single identifiable location (like a factory pipe) is called _______ source pollution.

2) Agriculture uses approximately _______% of global freshwater.

3) An underground layer of permeable rock that holds water is called an _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['point', '70', 'aquifer'],
        hint1: 'You can point to exactly where it comes from.',
        hint2: 'The largest water-using sector by far.',
        hint3: 'Underground water storage in rock.',
        explanation: 'Point source = identifiable location. Agriculture = 70% of global freshwater. Aquifer = underground water-bearing rock layer.'
      }
    },
    {
      id: 'apeswr1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Pollution** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fertilizer washing off farm fields during a rainstorm and entering a river is ___ pollution',
            options: ['Non-point source', 'Point source', 'Thermal', 'Sediment']
          },
          {
            label: 'A power plant discharging hot water into a lake, reducing dissolved oxygen, is ___',
            options: ['Thermal pollution', 'Eutrophication', 'Acidification', 'Sedimentation']
          },
          {
            label: 'The treatment stage that uses bacteria to break down organic waste is ___',
            options: ['Secondary treatment', 'Primary treatment', 'Tertiary treatment', 'Disinfection']
          }
        ],
        correctAnswers: ['Non-point source', 'Thermal pollution', 'Secondary treatment'],
        hint1: 'Runoff from many fields — no single pipe.',
        hint2: 'Heat reduces water oxygen capacity.',
        hint3: 'Biological processing stage.',
        explanation: 'Farm runoff = non-point source (diffuse). Hot water discharge = thermal pollution. Bacteria breakdown = secondary treatment.'
      }
    },
    {
      id: 'apeswr1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Water Resources

- **Point vs non-point source** pollution is tested almost every year — know examples of each
- Know the three levels of water treatment and what each removes
- **Groundwater depletion** (especially Ogallala Aquifer) is a common FRQ topic
- Understand cone of depression and how over-pumping affects water tables
- Water scarcity affects 2+ billion people — know the connection to agriculture, population growth, and climate change
      `
    },
    {
      id: 'apeswr1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city downstream from agricultural land notices algal blooms in their water supply every spring. The MOST likely cause is:',
            options: [
              'Thermal pollution from a local power plant',
              'Non-point source runoff of nitrogen and phosphorus fertilizers from upstream farms',
              'Point source pollution from a nearby factory',
              'Natural seasonal algae growth unrelated to human activity'
            ],
            correctAnswer: 1,
            explanation: 'Seasonal fertilizer application on farms leads to nutrient runoff (N and P) during spring rains. This non-point source pollution causes eutrophication and algal blooms downstream.'
          },
          {
            question: 'Which water conservation practice would MOST reduce agricultural water consumption?',
            options: [
              'Switching from flood irrigation to drip irrigation',
              'Building more dams to store water',
              'Increasing the number of wells pumping groundwater',
              'Using more fertilizer to grow crops faster'
            ],
            correctAnswer: 0,
            explanation: 'Drip irrigation delivers water directly to plant roots, using 30-50% less water than flood irrigation. This is the most effective agricultural water conservation strategy.'
          }
        ]
      }
    }
  ]
};
