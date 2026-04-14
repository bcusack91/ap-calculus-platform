export const bioBiogeochemicalCyclesPart2Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc2-intro',
      type: 'text' as const,
      content: `# The Carbon Cycle 🌍

Carbon is the **backbone of all organic molecules** — proteins, nucleic acids, carbohydrates, and lipids all require carbon. The carbon cycle describes the movement of carbon between the atmosphere, biosphere, hydrosphere, and lithosphere.

## Carbon Reservoirs

| Reservoir | Carbon Stored (gigatons C) | Residence Time |
|-----------|---------------------------|----------------|
| **Atmosphere** (CO₂, CH₄) | ~850 GtC | ~5 years |
| **Oceans** (dissolved CO₂, bicarbonate) | ~38,000 GtC | ~400 years |
| **Fossil fuels** (coal, oil, gas) | ~4,000 GtC | Millions of years |
| **Soil organic matter** | ~1,500 GtC | decades–centuries |
| **Living biomass** | ~550 GtC | years–decades |
| **Sedimentary rock** (limestone) | ~60,000,000 GtC | Millions of years |

> 🔬 **AP Key Point:** Sedimentary rocks (especially limestone/CaCO₃) store the vast majority of Earth's carbon, but this carbon cycles very slowly through geological processes.`
    },
    {
      id: 'bgc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Carbon Reservoirs** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which reservoir stores the MOST carbon on Earth?',
            options: ['The atmosphere', 'The oceans', 'Fossil fuels', 'Sedimentary rock (limestone)'],
            correctAnswer: 3,
            explanation: 'Sedimentary rocks, particularly limestone (CaCO₃), store approximately 60 million GtC — far more than all other reservoirs combined. However, this carbon cycles extremely slowly over geological time scales (millions of years).'
          },
          {
            question: 'The atmospheric residence time of CO₂ is approximately 5 years. This means:',
            options: [
              'CO₂ emissions disappear from the atmosphere in 5 years',
              'An individual CO₂ molecule is replaced by exchange with other reservoirs every ~5 years on average',
              'The atmosphere can only hold 5 years worth of emissions',
              'CO₂ causes warming for only 5 years'
            ],
            correctAnswer: 1,
            explanation: 'Residence time means the average time an individual CO₂ molecule spends in the atmosphere before being exchanged with another reservoir. However, because emissions add NET new carbon, the overall increase in atmospheric CO₂ persists for much longer (centuries).'
          }
        ]
      }
    },
    {
      id: 'bgc2-content2',
      type: 'text' as const,
      content: `## Photosynthesis and Respiration: The Biological Carbon Engine 🌱

### Photosynthesis (Carbon Fixation)

$$6CO_2 + 6H_2O \\xrightarrow{\\text{light energy}} C_6H_{12}O_6 + 6O_2$$

- Converts atmospheric CO₂ → organic carbon (glucose)
- Performed by **autotrophs**: plants, algae, cyanobacteria
- Occurs in **chloroplasts** (Calvin cycle fixes CO₂ using RuBisCO)
- Removes ~120 GtC/year from the atmosphere

### Cellular Respiration (Carbon Release)

$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$$

- Converts organic carbon → CO₂ (released to atmosphere)
- Performed by **all living organisms** (autotrophs AND heterotrophs)
- Releases ~120 GtC/year to the atmosphere

### Decomposition

- **Decomposers** (bacteria, fungi) break down dead organic matter
- Releases CO₂ (aerobic) or CH₄ (anaerobic decomposition)
- Returns carbon locked in biomass back to the atmosphere/soil

> ⚖️ **Balance:** Before industrialization, photosynthesis and respiration/decomposition were roughly balanced, keeping atmospheric CO₂ at ~280 ppm for thousands of years.`
    },
    {
      id: 'bgc2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Biological Carbon Processes** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which organisms perform cellular respiration?',
            options: [
              'Only animals and fungi',
              'Only heterotrophs',
              'All living organisms, including plants',
              'Only organisms without chloroplasts'
            ],
            correctAnswer: 2,
            explanation: 'ALL living organisms perform cellular respiration, including plants. Plants photosynthesize AND respire. During the day, photosynthesis typically exceeds respiration (net CO₂ uptake), but at night, plants only respire (net CO₂ release).'
          },
          {
            question: 'Anaerobic decomposition of organic matter primarily releases:',
            options: ['CO₂ only', 'O₂', 'CH₄ (methane)', 'N₂O (nitrous oxide)'],
            correctAnswer: 2,
            explanation: 'When decomposers (methanogenic archaea) break down organic matter in oxygen-poor environments (wetlands, landfills, rice paddies, ruminant stomachs), they release methane (CH₄). Methane is a greenhouse gas ~80× more potent than CO₂ over a 20-year period.'
          }
        ]
      }
    },
    {
      id: 'bgc2-content3',
      type: 'text' as const,
      content: `## Ocean Carbon Absorption and Fossil Fuels ⛽

### The Ocean Carbon Sink

The ocean absorbs CO₂ through two main mechanisms:

1. **Physical pump** — CO₂ dissolves at the ocean surface (cold water absorbs more CO₂)
   - CO₂ + H₂O → H₂CO₃ (carbonic acid) → HCO₃⁻ + H⁺
   - This produces **bicarbonate ions**, lowering ocean pH (**ocean acidification**)

2. **Biological pump** — Marine phytoplankton fix CO₂ via photosynthesis
   - Dead organisms sink, carrying carbon to the deep ocean ("marine snow")
   - Some carbon is buried in deep-sea sediments for millions of years

### Fossil Fuel Formation

| Fossil Fuel | Origin | Formation Time |
|-------------|--------|---------------|
| **Coal** | Ancient swamp plants (Carboniferous period) | ~300 million years |
| **Oil** | Marine plankton buried in ocean sediments | ~100–300 million years |
| **Natural gas** | Thermal decomposition of buried organic matter | ~100–300 million years |

### The Carbon Imbalance

- Fossil fuel burning releases ~9.5 GtC/year
- Deforestation releases ~1.5 GtC/year
- Total human emissions: **~11 GtC/year**
- Oceans absorb ~2.5 GtC/year; land absorbs ~3 GtC/year
- **Net atmospheric increase: ~5 GtC/year** → CO₂ now exceeds 420 ppm`
    },
    {
      id: 'bgc2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Carbon Cycle** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The process that converts atmospheric CO₂ into organic carbon is ___',
            options: ['cellular respiration', 'photosynthesis', 'decomposition', 'combustion']
          },
          {
            label: 'Before industrialization, atmospheric CO₂ was approximately ___',
            options: ['180 ppm', '280 ppm', '350 ppm', '420 ppm']
          },
          {
            label: 'When CO₂ dissolves in ocean water, it forms ___ which lowers ocean pH',
            options: ['carbonic acid', 'sulfuric acid', 'hydrochloric acid', 'acetic acid']
          },
          {
            label: 'The largest rapidly-cycling carbon reservoir is ___',
            options: ['the atmosphere', 'the oceans', 'fossil fuels', 'living biomass']
          }
        ],
        correctAnswers: ['photosynthesis', '280 ppm', 'carbonic acid', 'the oceans'],
        hint1: 'Photosynthesis literally means "light synthesis" — building molecules using light energy.',
        hint2: 'Pre-industrial CO₂ was stable for thousands of years before rising sharply after ~1750.',
        hint3: 'CO₂ + H₂O → H₂CO₃ — this reaction is the basis of ocean acidification.',
        explanation: 'Photosynthesis fixes atmospheric CO₂ into organic molecules. Pre-industrial CO₂ was ~280 ppm (now >420 ppm). Dissolved CO₂ forms carbonic acid (H₂CO₃), which dissociates to release H⁺ ions, lowering ocean pH. The oceans hold ~38,000 GtC, making them the largest rapidly-cycling carbon reservoir.'
      }
    }
  ]
};
