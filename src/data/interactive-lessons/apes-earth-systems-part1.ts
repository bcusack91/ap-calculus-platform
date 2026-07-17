export const apesEarthSystemsPart1Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeses1-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 1 of 7 — The Geosphere, Hydrosphere, Atmosphere, and Biosphere**

---

## Earth's Four Spheres

| Sphere | What It Includes | Key Interactions |
|--------|-----------------|-----------------|
| **Geosphere** | Rocks, minerals, soil, tectonic plates | Provides nutrients through weathering; volcanic activity affects atmosphere |
| **Hydrosphere** | Oceans, rivers, lakes, groundwater, ice | Water cycle connects all spheres; ocean currents regulate climate |
| **Atmosphere** | Gases surrounding Earth ($N_{2}$ 78%, $O_{2}$ 21%, trace gases) | Greenhouse effect; weather; filters UV radiation |
| **Biosphere** | All living organisms | Photosynthesis, decomposition, nutrient cycling |

> 🔑 **AP Key Point:** Environmental science studies the **interactions** between these spheres. Most AP questions ask how a change in one sphere affects others.

---

## Plate Tectonics

| Boundary Type | Motion | Features | Hazards |
|--------------|--------|----------|---------|
| **Divergent** | Plates move apart | Mid-ocean ridges, rift valleys | Mild earthquakes, volcanic activity |
| **Convergent** | Plates move together | Mountains, trenches, subduction zones | Strong earthquakes, volcanoes, tsunamis |
| **Transform** | Plates slide past each other | Fault lines | Earthquakes (San Andreas Fault) |

### Rock Cycle

Igneous → (weathering/erosion) → Sedimentary → (heat/pressure) → Metamorphic → (melting) → Igneous

Soil formation depends on: **parent material, climate, organisms, topography, time** (ClORPT)
      `
    },
    {
      id: 'apeses1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At a convergent plate boundary where an oceanic plate meets a continental plate, the oceanic plate subducts because:',
            options: [
              'Oceanic plates are less dense than continental plates',
              'Oceanic plates are denser than continental plates',
              'Continental plates are thinner than oceanic plates',
              'Oceanic plates are pushed by mid-ocean ridges'
            ],
            correctAnswer: 1,
            explanation: 'Oceanic crust is denser (basalt) than continental crust (granite), so it subducts (sinks) beneath the continental plate at convergent boundaries, creating trenches and volcanic arcs.'
          },
          {
            question: 'Which set of factors determines soil formation?',
            options: [
              'Temperature and precipitation only',
              'Parent material, climate, organisms, topography, and time',
              'Rock type and mineral content only',
              'Latitude and altitude only'
            ],
            correctAnswer: 1,
            explanation: 'Soil formation (pedogenesis) depends on all five ClORPT factors: Climate, Organisms, Relief (topography), Parent material, and Time.'
          }
        ]
      }
    },
    {
      id: 'apeses1-content',
      type: 'text' as const,
      content: `
## Soil Composition & Horizons

| Horizon | Name | Description |
|---------|------|-----------|
| **O** | Organic | Decomposing leaves and organisms (humus) |
| **A** | Topsoil | Mineral soil + organic matter; most fertile; root zone |
| **B** | Subsoil | Accumulation of leached minerals (clay, iron, aluminum) |
| **C** | Parent material | Weathered bedrock fragments |
| **R** | Bedrock | Unweathered solid rock |

### Soil Properties

| Property | Description | Why It Matters |
|----------|-----------|---------------|
| **Texture** | Proportion of sand, silt, clay | Affects drainage and nutrient-holding capacity |
| **Permeability** | How fast water moves through soil | Sandy = fast drainage; clay = slow, waterlogged |
| **Porosity** | Total pore space in soil | Higher porosity = more water/air storage |
| **pH** | Acidity or alkalinity (ideal: 6.0–7.0 for most crops) | Affects nutrient availability |
| **CEC** | Cation Exchange Capacity | Higher CEC = better nutrient retention |
      `
    },
    {
      id: 'apeses1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The most fertile soil horizon where most plant roots grow is the _______ horizon (also called topsoil).

2) The five factors of soil formation are abbreviated as _______ (Climate, Organisms, Relief, Parent material, Time).

3) At divergent plate boundaries, plates move _______ from each other.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['A', 'ClORPT', 'apart'],
        hint1: 'The first mineral soil layer below the O horizon.',
        hint2: 'An acronym for the five soil-forming factors.',
        hint3: 'The opposite of convergent.',
        explanation: 'A horizon = topsoil (most fertile). ClORPT = soil formation factors. Divergent = plates moving apart (creating mid-ocean ridges).'
      }
    },
    {
      id: 'apeses1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The San Andreas Fault in California is a ___ plate boundary',
            options: ['Transform', 'Divergent', 'Convergent', 'Subduction']
          },
          {
            label: 'Sandy soil has ___ permeability and ___ nutrient retention',
            options: ['High permeability and low nutrient retention', 'Low permeability and high nutrient retention', 'High permeability and high nutrient retention', 'Low permeability and low nutrient retention']
          },
          {
            label: 'A volcanic eruption releasing ash into the atmosphere is an interaction between ___',
            options: ['Geosphere and atmosphere', 'Hydrosphere and biosphere', 'Atmosphere and biosphere', 'Hydrosphere and geosphere']
          }
        ],
        correctAnswers: ['Transform', 'High permeability and low nutrient retention', 'Geosphere and atmosphere'],
        hint1: 'Plates sliding past each other.',
        hint2: 'Sand particles are large with big pores.',
        hint3: 'Rocks releasing material into the air.',
        explanation: 'San Andreas = transform (sliding). Sandy soil = drains fast but loses nutrients. Volcanic ash = geosphere-atmosphere interaction.'
      }
    },
    {
      id: 'apeses1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Earth Systems

- Questions often present a **scenario** and ask you to identify which spheres interact
- Know soil horizons O-A-B-C-R and their characteristics
- Plate tectonics: associate boundary types with specific hazards and landforms
- Soil texture triangle: sand (large, drains fast) → silt (medium) → clay (small, holds water)
- **Loam** (mix of sand, silt, clay) is ideal for agriculture
      `
    },
    {
      id: 'apeses1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer notices poor crop growth in soil with very high clay content. The MOST likely cause is:',
            options: [
              'Too much drainage causing drought stress',
              'Waterlogging due to low permeability of clay',
              'Insufficient mineral content in clay soils',
              'Clay soil is too acidic for any crop growth'
            ],
            correctAnswer: 1,
            explanation: 'Clay particles are very small with tiny pore spaces, resulting in low permeability. Water drains slowly, causing waterlogging that suffocates plant roots and inhibits growth.'
          },
          {
            question: 'The 2010 eruption of Eyjafjallajokull in Iceland melted glaciers (causing floods), released ash (disrupting air travel), and destroyed vegetation. This event demonstrates:',
            options: [
              'An interaction limited to the geosphere',
              'Interactions among all four Earth spheres',
              'Only hydrosphere-atmosphere interactions',
              'That volcanic events have no lasting impact'
            ],
            correctAnswer: 1,
            explanation: 'Geosphere (eruption), hydrosphere (glacier melting/floods), atmosphere (ash cloud), and biosphere (vegetation destruction) — all four spheres were affected by this single event.'
          }
        ]
      }
    }
  ]
};
