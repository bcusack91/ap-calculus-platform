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
| **Atmosphere** ($CO_{2}$, $CH_{4}$) | ~850 GtC | ~5 years |
| **Oceans** (dissolved $CO_{2}$, bicarbonate) | ~38,000 GtC | ~400 years |
| **Fossil fuels** (coal, oil, gas) | ~4,000 GtC | Millions of years |
| **Soil organic matter** | ~1,500 GtC | decades–centuries |
| **Living biomass** | ~550 GtC | years–decades |
| **Sedimentary rock** (limestone) | ~60,000,000 GtC | Millions of years |

> 🔬 **AP Key Point:** Sedimentary rocks $(especially limestone/CaCO_{3})$ store the vast majority of Earth's carbon, but this carbon cycles very slowly through geological processes.`
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
            explanation: 'Sedimentary rocks, particularly limestone $(CaCO_{3})$, store approximately 60 million GtC — far more than all other reservoirs combined. However, this carbon cycles extremely slowly over geological time scales (millions of years).'
          },
          {
            question: 'The atmospheric residence time of $CO_{2}$ is approximately 5 years. This means:',
            options: [
              '$CO_{2}$ emissions disappear from the atmosphere in 5 years',
              'An individual $CO_{2}$ molecule is replaced by exchange with other reservoirs every ~5 years on average',
              'The atmosphere can only hold 5 years worth of emissions',
              '$CO_{2}$ causes warming for only 5 years'
            ],
            correctAnswer: 1,
            explanation: 'Residence time means the average time an individual $CO_{2}$ molecule spends in the atmosphere before being exchanged with another reservoir. However, because emissions add NET new carbon, the overall increase in atmospheric $CO_{2}$ persists for much longer (centuries).'
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

- Converts atmospheric $CO_{2}$ → organic carbon (glucose)
- Performed by **autotrophs**: plants, algae, cyanobacteria
- Occurs in **chloroplasts** (Calvin cycle fixes $CO_{2}$ using RuBisCO)
- Removes ~120 GtC/year from the atmosphere

### Cellular Respiration (Carbon Release)

$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$$

- Converts organic carbon → $CO_{2}$ (released to atmosphere)
- Performed by **all living organisms** (autotrophs AND heterotrophs)
- Releases ~120 GtC/year to the atmosphere

### Decomposition

- **Decomposers** (bacteria, fungi) break down dead organic matter
- Releases $CO_{2}$ (aerobic) or $CH_{4}$ (anaerobic decomposition)
- Returns carbon locked in biomass back to the atmosphere/soil

> ⚖️ **Balance:** Before industrialization, photosynthesis and respiration/decomposition were roughly balanced, keeping atmospheric $CO_{2}$ at ~280 ppm for thousands of years.`
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
            explanation: 'ALL living organisms perform cellular respiration, including plants. Plants photosynthesize AND respire. During the day, photosynthesis typically exceeds respiration (net $CO_{2}$ uptake), but at night, plants only respire (net $CO_{2}$ release).'
          },
          {
            question: 'Anaerobic decomposition of organic matter primarily releases:',
            options: ['$CO_{2}$ only', '$O_{2}$', '$CH_{4}$ (methane)', '$N_{2}O$ (nitrous oxide)'],
            correctAnswer: 2,
            explanation: 'When decomposers (methanogenic archaea) break down organic matter in oxygen-poor environments (wetlands, landfills, rice paddies, ruminant stomachs), they release methane $(CH_{4})$. Methane is a greenhouse gas ~80× more potent than $CO_{2}$ over a 20-year period.'
          }
        ]
      }
    },
    {
      id: 'bgc2-content3',
      type: 'text' as const,
      content: `## Ocean Carbon Absorption and Fossil Fuels ⛽

### The Ocean Carbon Sink

The ocean absorbs $CO_{2}$ through two main mechanisms:

1. **Physical pump** — $CO_{2}$ dissolves at the ocean surface (cold water absorbs more $CO_{2}$)
   - $CO_{2}$ + $H_{2}O$ → $H_{2}CO_{3}$ (carbonic acid) → $HCO_{3}^{-}$ + $H^{+}$
   - This produces **bicarbonate ions**, lowering ocean pH (**ocean acidification**)

2. **Biological pump** — Marine phytoplankton fix $CO_{2}$ via photosynthesis
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
- **Net atmospheric increase: ~5 GtC/year** → $CO_{2}$ now exceeds 420 ppm`
    },
    {
      id: 'bgc2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Carbon Cycle** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The process that converts atmospheric $CO_{2}$ into organic carbon is ___',
            options: ['cellular respiration', 'photosynthesis', 'decomposition', 'combustion']
          },
          {
            label: 'Before industrialization, atmospheric $CO_{2}$ was approximately ___',
            options: ['180 ppm', '280 ppm', '350 ppm', '420 ppm']
          },
          {
            label: 'When $CO_{2}$ dissolves in ocean water, it forms ___ which lowers ocean pH',
            options: ['carbonic acid', 'sulfuric acid', 'hydrochloric acid', 'acetic acid']
          },
          {
            label: 'The largest rapidly-cycling carbon reservoir is ___',
            options: ['the atmosphere', 'the oceans', 'fossil fuels', 'living biomass']
          }
        ],
        correctAnswers: ['photosynthesis', '280 ppm', 'carbonic acid', 'the oceans'],
        hint1: 'Photosynthesis literally means "light synthesis" — building molecules using light energy.',
        hint2: 'Pre-industrial $CO_{2}$ was stable for thousands of years before rising sharply after ~1750.',
        hint3: '$CO_{2}$ + $H_{2}O$ → $H_{2}CO_{3}$ — this reaction is the basis of ocean acidification.',
        explanation: 'Photosynthesis fixes atmospheric $CO_{2}$ into organic molecules. Pre-industrial $CO_{2}$ was ~280 ppm (now >420 ppm). Dissolved $CO_{2}$ forms carbonic acid $(H_{2}CO_{3})$, which dissociates to release $H^{+}$ ions, lowering ocean pH. The oceans hold ~38,000 GtC, making them the largest rapidly-cycling carbon reservoir.'
      }
    }
  ]
};
