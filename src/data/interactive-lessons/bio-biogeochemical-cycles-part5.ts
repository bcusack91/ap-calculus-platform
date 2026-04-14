export const bioBiogeochemicalCyclesPart5Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc5-intro',
      type: 'text' as const,
      content: `# Human Impacts on Biogeochemical Cycles 🏭

Human activities have dramatically altered every major biogeochemical cycle. Since the Industrial Revolution (~1750), we have increased CO₂ by 50%, doubled reactive nitrogen inputs, and tripled phosphorus mobilization. These changes have consequences that cascade through interconnected Earth systems.

## Summary of Human Impacts

| Cycle | Major Human Perturbation | Consequence |
|-------|------------------------|-------------|
| **Carbon** | Fossil fuel burning, deforestation | Climate change, ocean acidification |
| **Nitrogen** | Fertilizer production (Haber-Bosch), fossil fuel combustion | Eutrophication, dead zones, N₂O emissions |
| **Phosphorus** | Mining phosphate rock, fertilizer runoff | Eutrophication, freshwater dead zones |
| **Water** | Dam construction, irrigation, deforestation | Altered river flow, groundwater depletion |

> ⚠️ **AP Key Point:** Humans have become a dominant force in biogeochemical cycling, rivaling or exceeding natural processes in magnitude for C, N, and P.`
    },
    {
      id: 'bgc5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Human Impacts Overview** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Since the Industrial Revolution, atmospheric CO₂ has increased from ~280 ppm to over 420 ppm. The primary cause is:',
            options: [
              'Increased volcanic activity',
              'Burning fossil fuels and deforestation',
              'Decreased ocean absorption',
              'Increased animal respiration from livestock'
            ],
            correctAnswer: 1,
            explanation: 'The ~50% increase in atmospheric CO₂ is primarily due to burning fossil fuels (~75% of the increase) and deforestation/land use change (~25%). These activities release carbon that was stored for millions of years (fossil fuels) or decades to centuries (forests) back into the atmosphere over a very short time.'
          },
          {
            question: 'The Haber-Bosch process has allowed humans to:',
            options: [
              'Remove excess nitrogen from the atmosphere',
              'Fix more nitrogen industrially than all natural processes combined',
              'Eliminate the need for the nitrogen cycle',
              'Convert nitrogen directly into protein'
            ],
            correctAnswer: 1,
            explanation: 'Industrial nitrogen fixation via the Haber-Bosch process now produces ~150 million tons of reactive nitrogen per year, exceeding total natural biological fixation (~140 million tons/year). This has enabled food production for billions but has created massive nitrogen pollution.'
          }
        ]
      }
    },
    {
      id: 'bgc5-content2',
      type: 'text' as const,
      content: `## Deforestation and Carbon Release 🌳

### How Deforestation Disrupts the Carbon Cycle

1. **Direct carbon release** — Trees store carbon in biomass; clearing and burning releases CO₂
   - Tropical deforestation releases ~1.5 GtC/year
2. **Lost carbon sink** — Fewer trees = less photosynthetic CO₂ removal
3. **Soil carbon release** — Disturbed soils release stored organic carbon
4. **Reduced transpiration** — Less moisture recycling → less rainfall → potential desertification

### Deforestation Rates

| Region | Forest Loss (2001–2020) | Primary Driver |
|--------|------------------------|----------------|
| Brazil (Amazon) | ~27 million hectares | Cattle ranching, soy farming |
| Indonesia | ~10 million hectares | Palm oil plantations |
| Central Africa | ~6 million hectares | Subsistence agriculture |
| Southeast Asia | ~5 million hectares | Logging, agriculture |

## Burning Fossil Fuels: The Carbon Dam Break ⛽

Fossil fuels represent **millions of years** of photosynthetically captured carbon. Burning them releases this stored carbon in decades:

- Current emissions: **~36 billion tons CO₂/year** (9.5 GtC/year)
- Coal: ~40% of CO₂ emissions from fuel combustion
- Oil: ~34%
- Natural gas: ~20%
- Cement production: ~4%

> 🌡️ **Result:** Global average temperature has risen ~1.1°C above pre-industrial levels.`
    },
    {
      id: 'bgc5-content3',
      type: 'text' as const,
      content: `## Fertilizer Runoff and Eutrophication 🌊

### The Eutrophication Process

When excess nitrogen (NO₃⁻) and phosphorus (PO₄³⁻) from agricultural runoff enter waterways:

**Stage 1: Nutrient Input**
- Fertilizer applied to crops → rain washes excess N and P into streams/rivers
- Sewage discharge and animal waste add additional nutrients

**Stage 2: Algal Bloom**
- Excess nutrients fuel explosive algae/cyanobacteria growth
- Surface becomes covered in dense green/blue-green algal mats

**Stage 3: Light Deprivation**
- Dense algae block sunlight from reaching submerged aquatic plants
- Submerged vegetation dies → loss of habitat and oxygen production

**Stage 4: Oxygen Depletion (Hypoxia)**
- Massive algal die-off provides organic matter for decomposers
- Aerobic decomposition consumes dissolved oxygen
- **Dissolved oxygen drops below 2 mg/L** → hypoxic "dead zone"

**Stage 5: Ecosystem Collapse**
- Fish, crustaceans, and invertebrates die or flee
- Only anaerobic bacteria survive → produce toxic H₂S (rotten egg smell)

### Notorious Dead Zones

| Location | Size | Primary Cause |
|----------|------|---------------|
| Gulf of Mexico | ~16,000 km² | Mississippi River agricultural runoff |
| Baltic Sea | ~60,000 km² | Agricultural and industrial runoff |
| Chesapeake Bay | Variable | Agricultural and urban runoff |
| Lake Erie | Seasonal | Phosphorus from agriculture |

## Ocean Acidification 🐚

$$CO_2 + H_2O \\rightarrow H_2CO_3 \\rightarrow HCO_3^- + H^+$$

- Ocean pH has dropped from **8.2 → 8.1** since pre-industrial times
- A 0.1 pH drop = **30% increase** in hydrogen ion concentration (logarithmic scale!)
- **Coral**, **mollusks**, and **foraminifera** struggle to build CaCO₃ shells/skeletons
- Projected: pH may drop to **7.8 by 2100** (150% increase in H⁺)`
    },
    {
      id: 'bgc5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Environmental Impacts** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During eutrophication, dissolved oxygen drops primarily because:',
            options: [
              'Algae consume all the oxygen during photosynthesis',
              'Aerobic decomposers consume oxygen while breaking down dead algae',
              'Fertilizers chemically react with oxygen in the water',
              'Fish populations increase and use more oxygen'
            ],
            correctAnswer: 1,
            explanation: 'When the algal bloom dies, the massive amount of dead organic matter is decomposed by aerobic bacteria. These decomposers consume the dissolved oxygen in the water, creating hypoxic conditions (< 2 mg/L O₂). This is called biological oxygen demand (BOD).'
          },
          {
            question: 'Ocean pH has dropped by 0.1 units since pre-industrial times. This represents:',
            options: [
              'A 0.1% increase in H⁺ concentration',
              'A 1% increase in H⁺ concentration',
              'A 10% increase in H⁺ concentration',
              'A ~30% increase in H⁺ concentration'
            ],
            correctAnswer: 3,
            explanation: 'pH is a logarithmic scale: pH = -log[H⁺]. A decrease of 0.1 pH units means H⁺ concentration increased by a factor of 10^0.1 ≈ 1.26, or about a 26–30% increase. This seemingly small pH change has significant impacts on calcifying organisms.'
          }
        ]
      }
    },
    {
      id: 'bgc5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Human Impacts** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The primary driver of tropical deforestation in the Amazon is ___',
            options: ['logging for timber', 'cattle ranching and soy farming', 'urban development', 'mining']
          },
          {
            label: 'Eutrophication ultimately leads to low dissolved oxygen, creating ___',
            options: ['acid rain', 'dead zones', 'ozone holes', 'thermal inversions']
          },
          {
            label: 'Ocean acidification threatens organisms that build ___ shells or skeletons',
            options: ['silica (SiO₂)', 'calcium carbonate (CaCO₃)', 'calcium phosphate', 'iron oxide']
          },
          {
            label: 'The Gulf of Mexico dead zone is primarily caused by ___ from the Mississippi River watershed',
            options: ['industrial chemicals', 'oil spills', 'agricultural fertilizer runoff', 'thermal pollution']
          }
        ],
        correctAnswers: ['cattle ranching and soy farming', 'dead zones', 'calcium carbonate (CaCO₃)', 'agricultural fertilizer runoff'],
        hint1: 'Brazil\'s Amazon deforestation is driven by agriculture — especially beef and soy exports.',
        hint2: 'When dissolved oxygen drops below 2 mg/L, most aquatic organisms cannot survive.',
        hint3: 'CO₂ dissolving in ocean water makes it harder for organisms to precipitate CaCO₃.',
        explanation: 'Amazon deforestation is primarily driven by cattle ranching (~80%) and soy farming. Eutrophication creates hypoxic dead zones where most aquatic life cannot survive. Ocean acidification dissolves calcium carbonate (CaCO₃) structures like coral reefs and mollusk shells. The Gulf of Mexico dead zone (~16,000 km²) is one of the largest in the world, fed by agricultural runoff from the vast Mississippi watershed.'
      }
    }
  ]
};
