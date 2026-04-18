const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Earth Systems ───
write('apes-earth-systems-part1.ts', `export const apesEarthSystemsPart1Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeses1-intro',
      type: 'text' as const,
      content: \`
# 🌎 Earth Systems & Resources

**Part 1 of 7 — The Geosphere, Hydrosphere, Atmosphere, and Biosphere**

---

## Earth's Four Spheres

| Sphere | What It Includes | Key Interactions |
|--------|-----------------|-----------------|
| **Geosphere** | Rocks, minerals, soil, tectonic plates | Provides nutrients through weathering; volcanic activity affects atmosphere |
| **Hydrosphere** | Oceans, rivers, lakes, groundwater, ice | Water cycle connects all spheres; ocean currents regulate climate |
| **Atmosphere** | Gases surrounding Earth (N₂ 78%, O₂ 21%, trace gases) | Greenhouse effect; weather; filters UV radiation |
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
      \`
    },
    {
      id: 'apeses1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'apeses1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The most fertile soil horizon where most plant roots grow is the _______ horizon (also called topsoil).

2) The five factors of soil formation are abbreviated as _______ (Climate, Organisms, Relief, Parent material, Time).

3) At divergent plate boundaries, plates move _______ from each other.
      \`,
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
      content: \`
**Match the Concept** 🔍
      \`,
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
      content: \`
## AP Exam Strategy: Earth Systems

- Questions often present a **scenario** and ask you to identify which spheres interact
- Know soil horizons O-A-B-C-R and their characteristics
- Plate tectonics: associate boundary types with specific hazards and landforms
- Soil texture triangle: sand (large, drains fast) → silt (medium) → clay (small, holds water)
- **Loam** (mix of sand, silt, clay) is ideal for agriculture
      \`
    },
    {
      id: 'apeses1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
`);

// ─── 2. Ecosystem Structure ───
write('apes-ecosystem-structure-part1.ts', `export const apesEcosystemStructurePart1Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesec1-intro',
      type: 'text' as const,
      content: \`
# 🌿 Ecosystem Structure

**Part 1 of 7 — Energy Flow and Trophic Levels**

---

## Ecosystem Organization

| Level | Definition | Example |
|-------|-----------|---------|
| **Species** | Group of organisms that can interbreed | Gray wolf (Canis lupus) |
| **Population** | All individuals of one species in an area | All gray wolves in Yellowstone |
| **Community** | All populations of different species in an area | Wolves, elk, grasses, bacteria in Yellowstone |
| **Ecosystem** | Community + abiotic (non-living) factors | Yellowstone: organisms + water, soil, climate |
| **Biome** | Large region with similar climate and organisms | Temperate grassland, tropical rainforest |
| **Biosphere** | All ecosystems on Earth | The entire living planet |

---

## Energy Flow: Trophic Levels

| Trophic Level | Role | Example | Energy Available |
|--------------|------|---------|-----------------|
| **Producers (1st)** | Convert sunlight to chemical energy | Grasses, algae, phytoplankton | 100% of captured energy |
| **Primary consumers (2nd)** | Herbivores eating producers | Deer, rabbits, zooplankton | ~10% |
| **Secondary consumers (3rd)** | Carnivores eating herbivores | Foxes, frogs, small fish | ~1% |
| **Tertiary consumers (4th)** | Top predators | Eagles, sharks, wolves | ~0.1% |
| **Decomposers** | Break down dead organic matter | Bacteria, fungi, detritivores | Process all levels |

> 🔑 **10% Rule:** Only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through cellular respiration.
      \`
    },
    {
      id: 'apesec1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'If producers in an ecosystem capture 10,000 kcal of energy, approximately how much energy is available to secondary consumers?',
            options: [
              '10,000 kcal',
              '1,000 kcal',
              '100 kcal',
              '10 kcal'
            ],
            correctAnswer: 2,
            explanation: 'Using the 10% rule: Producers (10,000) → Primary consumers (1,000) → Secondary consumers (100 kcal). Each level retains only ~10% of the energy from the level below.'
          },
          {
            question: 'Which level of ecological organization includes both biotic and abiotic components?',
            options: [
              'Population',
              'Community',
              'Ecosystem',
              'Species'
            ],
            correctAnswer: 2,
            explanation: 'An ecosystem includes both biotic (living organisms = the community) and abiotic (non-living: water, soil, temperature, sunlight) components interacting together.'
          }
        ]
      }
    },
    {
      id: 'apesec1-content',
      type: 'text' as const,
      content: \`
## Productivity

| Measure | Definition | Formula |
|---------|-----------|---------|
| **Gross Primary Productivity (GPP)** | Total energy captured by producers through photosynthesis | Total photosynthesis output |
| **Net Primary Productivity (NPP)** | Energy available to consumers after plant respiration | NPP = GPP - Respiration |

### NPP by Biome

| Biome | Relative NPP | Why? |
|-------|-------------|------|
| **Tropical rainforest** | Highest | Warm, wet, year-round growing season |
| **Estuaries/wetlands** | Very high | Nutrient-rich, mixing of fresh and saltwater |
| **Temperate forest** | Moderate | Seasonal changes limit growing season |
| **Open ocean** | Low per area (but huge total due to size) | Nutrient-poor surface waters |
| **Desert/tundra** | Lowest | Water or temperature limits growth |

## Food Webs vs. Food Chains

- **Food chain**: Simple, linear pathway (grass → rabbit → fox → eagle)
- **Food web**: Complex, interconnected network of food chains
- Food webs are more realistic and show ecosystem resilience — if one species declines, predators have alternative prey
      \`
    },
    {
      id: 'apesec1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The percentage of energy transferred between trophic levels is approximately _______%.

2) NPP equals GPP minus _______.

3) The biome with the highest net primary productivity is the tropical _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', 'respiration', 'rainforest'],
        hint1: 'The "ten percent rule."',
        hint2: 'Plants use energy for their own life processes.',
        hint3: 'Warm, wet, and year-round growing season.',
        explanation: '10% rule = ~10% energy transfer. NPP = GPP - Respiration. Tropical rainforests have the highest NPP due to ideal growing conditions.'
      }
    },
    {
      id: 'apesec1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Organism** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Phytoplankton converting sunlight to chemical energy in the ocean are ___',
            options: ['Producers (autotrophs)', 'Primary consumers', 'Decomposers', 'Secondary consumers']
          },
          {
            label: 'Fungi breaking down a fallen log and recycling nutrients are ___',
            options: ['Decomposers', 'Producers', 'Primary consumers', 'Tertiary consumers']
          },
          {
            label: 'A hawk eating a snake that ate a mouse that ate seeds represents a ___',
            options: ['Tertiary consumer (4th trophic level)', 'Secondary consumer', 'Primary consumer', 'Producer']
          }
        ],
        correctAnswers: ['Producers (autotrophs)', 'Decomposers', 'Tertiary consumer (4th trophic level)'],
        hint1: 'They make their own food from sunlight.',
        hint2: 'They break down dead matter.',
        hint3: 'Count the levels: seeds → mouse → snake → hawk.',
        explanation: 'Phytoplankton = producers. Fungi on logs = decomposers. Hawk (4th level) = tertiary consumer.'
      }
    },
    {
      id: 'apesec1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Ecosystem Structure

- **10% rule calculations** are commonly tested — practice converting energy between levels
- Know the difference between GPP and NPP — NPP is what matters for consumers
- **Biomass pyramids** can be inverted in aquatic systems (small but rapidly reproducing phytoplankton support larger zooplankton biomass)
- **Keystone species** have disproportionate impact relative to their abundance (sea otters, wolves)
- Know that energy flows ONE WAY (sun → producers → consumers → heat) but nutrients CYCLE
      \`
    },
    {
      id: 'apesec1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An ecosystem has producers with a GPP of 5,000 kcal/m²/yr and plant respiration of 3,000 kcal/m²/yr. The NPP is:',
            options: [
              '8,000 kcal/m²/yr',
              '5,000 kcal/m²/yr',
              '2,000 kcal/m²/yr',
              '500 kcal/m²/yr'
            ],
            correctAnswer: 2,
            explanation: 'NPP = GPP - Respiration = 5,000 - 3,000 = 2,000 kcal/m²/yr. This is the energy actually available to herbivores and the rest of the food web.'
          },
          {
            question: 'Why does eating lower on the food chain (e.g., grain instead of beef) require less land and energy?',
            options: [
              'Grain has more calories per gram than beef',
              'The 10% rule means feeding grain to cattle wastes ~90% of the energy at each transfer',
              'Cattle do not eat grain, only grass',
              'Lower trophic levels have fewer species'
            ],
            correctAnswer: 1,
            explanation: 'Due to the 10% rule, ~90% of energy is lost at each trophic level. Eating grain directly (1st trophic transfer) is far more efficient than feeding grain to cattle and then eating beef (2 transfers).'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Biomes & Succession ───
write('apes-biomes-succession-part1.ts', `export const apesBiomesSuccessionPart1Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbs1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Biomes & Ecological Succession

**Part 1 of 7 — Terrestrial and Aquatic Biomes**

---

## Terrestrial Biomes

| Biome | Climate | Key Features | Biodiversity |
|-------|---------|-------------|-------------|
| **Tropical rainforest** | Hot, wet year-round | Tallest canopy, most diverse biome | Highest |
| **Tropical savanna** | Hot, distinct wet/dry seasons | Grassland with scattered trees, fire-adapted | High |
| **Desert** | Hot or cold, <25 cm rain/yr | Sparse vegetation, extreme temperature swings | Low |
| **Temperate grassland** | Moderate temps, 25-75 cm rain | Deep fertile soil (great for agriculture) | Moderate |
| **Temperate forest** | Moderate, distinct seasons | Deciduous trees, autumn leaf drop | Moderate-High |
| **Boreal forest (taiga)** | Cold, long winters | Coniferous trees (spruce, pine, fir) | Low-Moderate |
| **Tundra** | Very cold, permafrost | No trees; mosses, lichens, low shrubs | Low |

> 🔑 **Biome distribution** is primarily determined by **temperature** and **precipitation** — this is why biomes form latitudinal bands.
      \`
    },
    {
      id: 'apesbs1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which biome has the deepest, most fertile soil and has been largely converted to agriculture?',
            options: [
              'Tropical rainforest',
              'Temperate grassland',
              'Boreal forest',
              'Tundra'
            ],
            correctAnswer: 1,
            explanation: 'Temperate grasslands (prairies) have deep, nutrient-rich soil formed by centuries of grass growth and decomposition. Most have been converted to farmland (US Great Plains, Ukraine).'
          },
          {
            question: 'The tundra biome is characterized by:',
            options: [
              'Dense deciduous forest and moderate rainfall',
              'Permafrost, no trees, and extremely cold temperatures',
              'Hot temperatures and sparse rainfall',
              'Coniferous trees and long cold winters'
            ],
            correctAnswer: 1,
            explanation: 'Tundra has permanently frozen subsoil (permafrost), no trees (too cold and windy), extreme cold, and short growing seasons. Found in Arctic regions and high mountain tops.'
          }
        ]
      }
    },
    {
      id: 'apesbs1-content',
      type: 'text' as const,
      content: \`
## Ecological Succession

| Type | Starting Point | Process | Example |
|------|---------------|---------|---------|
| **Primary succession** | Bare rock/new surface (no soil) | Pioneer species → soil development → complex community | Lava flow, retreating glacier |
| **Secondary succession** | Disturbed area (soil remains) | Faster recovery since soil exists | After fire, abandoned farm, hurricane |

### Succession Stages (Primary)

1. **Pioneer species** arrive: lichens, mosses break down rock
2. **Soil develops** from weathered rock + dead organisms
3. **Grasses and herbs** colonize the new thin soil
4. **Shrubs and small trees** outcompete grasses for light
5. **Climax community** established: mature forest or stable ecosystem

### Key Terms

| Term | Definition |
|------|-----------|
| **Pioneer species** | First to colonize; tolerant of harsh conditions (lichens, mosses) |
| **Climax community** | Stable, mature endpoint of succession |
| **Disturbance** | Event that disrupts the ecosystem (fire, flood, logging) |
| **Resilience** | Ability to recover after disturbance |
| **Resistance** | Ability to withstand disturbance without changing |
      \`
    },
    {
      id: 'apesbs1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Succession that begins on bare rock with no soil is called _______ succession.

2) The first organisms to colonize a disturbed or new area are called _______ species.

3) The stable, mature endpoint of succession is called the _______ community.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['primary', 'pioneer', 'climax'],
        hint1: 'Starts from scratch — no soil at all.',
        hint2: 'Lichens and mosses are classic examples.',
        hint3: 'The final, stable stage.',
        explanation: 'Primary succession = starts on bare rock. Pioneer species = first colonizers. Climax community = stable endpoint of succession.'
      }
    },
    {
      id: 'apesbs1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Scenario** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'An abandoned parking lot gradually being overtaken by weeds, then shrubs, then trees is ___',
            options: ['Secondary succession', 'Primary succession', 'A climax community', 'Ecological resistance']
          },
          {
            label: 'Lichens growing on newly exposed rock after a glacier retreats is ___',
            options: ['Primary succession', 'Secondary succession', 'A disturbance event', 'Ecological resilience']
          },
          {
            label: 'A biome with coniferous trees, cold winters, and acidic soils is the ___',
            options: ['Boreal forest (taiga)', 'Temperate grassland', 'Tropical savanna', 'Tundra']
          }
        ],
        correctAnswers: ['Secondary succession', 'Primary succession', 'Boreal forest (taiga)'],
        hint1: 'Soil already exists under the pavement.',
        hint2: 'Starting from bare rock — no prior soil.',
        hint3: 'Think Canada and Russia — spruce and pine.',
        explanation: 'Parking lot = secondary (soil present). Bare rock after glacier = primary. Coniferous + cold = taiga/boreal forest.'
      }
    },
    {
      id: 'apesbs1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Biomes & Succession

- Know how to read a **climate diagram** (climograph) showing temperature and precipitation to identify biomes
- Primary vs secondary succession: the KEY difference is whether **soil is present**
- Fire is NOT always bad — many ecosystems (grasslands, chaparral, pine forests) are **fire-adapted** and NEED periodic burning
- **Invasive species** can disrupt succession by outcompeting native species
- Permafrost thawing due to climate change releases methane — a positive feedback loop
      \`
    },
    {
      id: 'apesbs1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'After a forest fire destroys the vegetation but leaves the soil intact, regrowth follows secondary succession. Which will likely appear FIRST?',
            options: [
              'Mature oak and maple trees',
              'Fast-growing grasses and wildflowers',
              'Lichens growing on rock surfaces',
              'Dense shrub thickets'
            ],
            correctAnswer: 1,
            explanation: 'In secondary succession (soil present), fast-growing herbaceous plants (grasses, wildflowers) colonize first, followed by shrubs, then pioneer trees, then mature forest.'
          },
          {
            question: 'Climate change is causing permafrost in the tundra to thaw, releasing methane. This is a concern because:',
            options: [
              'Methane cools the atmosphere and could cause an ice age',
              'Methane is a potent greenhouse gas creating a positive feedback loop of more warming',
              'Thawing permafrost increases tundra biodiversity',
              'Methane has no effect on climate'
            ],
            correctAnswer: 1,
            explanation: 'Methane is a potent greenhouse gas. Warming thaws permafrost → releases methane → more warming → more thawing. This is a positive feedback loop that accelerates climate change.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Biogeochemical Cycles ───
write('apes-biogeochemical-cycles-part1.ts', `export const apesBiogeochemicalCyclesPart1Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbc1-intro',
      type: 'text' as const,
      content: \`
# 🔄 Biogeochemical Cycles

**Part 1 of 7 — Carbon, Nitrogen, Phosphorus, and Water Cycles**

---

## The Carbon Cycle

| Process | Direction | Description |
|---------|-----------|-----------|
| **Photosynthesis** | Atmosphere → Biosphere | Plants absorb CO₂ and convert to organic carbon |
| **Cellular respiration** | Biosphere → Atmosphere | Organisms release CO₂ by burning glucose |
| **Combustion** | Lithosphere → Atmosphere | Burning fossil fuels releases stored carbon |
| **Decomposition** | Biosphere → Soil/Atmosphere | Dead organisms broken down, releasing CO₂ |
| **Ocean absorption** | Atmosphere → Hydrosphere | Oceans absorb ~25% of atmospheric CO₂ |
| **Fossilization** | Biosphere → Lithosphere | Dead organisms become fossil fuels over millions of years |

> 🔑 **Human Impact:** Burning fossil fuels releases carbon that was stored underground for millions of years, increasing atmospheric CO₂ from ~280 ppm (pre-industrial) to ~420 ppm today.

---

## The Nitrogen Cycle

| Process | What Happens | Organisms Involved |
|---------|-------------|-------------------|
| **Nitrogen fixation** | N₂ → NH₃ (ammonia) | Rhizobium bacteria in legume roots; lightning |
| **Nitrification** | NH₃ → NO₂⁻ → NO₃⁻ (nitrate) | Nitrifying bacteria |
| **Assimilation** | Plants absorb NO₃⁻ from soil | Plants, then consumers eat plants |
| **Ammonification** | Dead organisms → NH₃ | Decomposer bacteria |
| **Denitrification** | NO₃⁻ → N₂ (back to atmosphere) | Denitrifying bacteria |
      \`
    },
    {
      id: 'apesbc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which process converts atmospheric nitrogen (N₂) into a form usable by plants?',
            options: [
              'Denitrification',
              'Nitrogen fixation',
              'Nitrification',
              'Ammonification'
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen fixation converts atmospheric N₂ into ammonia (NH₃), which can then be converted to nitrate (NO₃⁻) by nitrifying bacteria and absorbed by plants.'
          },
          {
            question: 'Burning fossil fuels affects the carbon cycle by:',
            options: [
              'Removing carbon from the atmosphere',
              'Releasing stored carbon from the lithosphere into the atmosphere',
              'Converting CO₂ into oxygen',
              'Increasing carbon fixation by plants'
            ],
            correctAnswer: 1,
            explanation: 'Fossil fuels are carbon stored in the lithosphere over millions of years. Combustion releases this ancient carbon as CO₂ into the atmosphere, increasing the greenhouse effect.'
          }
        ]
      }
    },
    {
      id: 'apesbc1-content',
      type: 'text' as const,
      content: \`
## The Phosphorus Cycle

| Feature | Detail |
|---------|--------|
| **Reservoir** | Rocks and sediments (NO atmospheric phase) |
| **Release** | Weathering of phosphate-containing rocks |
| **Uptake** | Plants absorb phosphate (PO₄³⁻) from soil |
| **Transfer** | Passed through food chain; returned via decomposition |
| **Long-term storage** | Ocean sediments → new rocks (takes millions of years) |

> ⚠️ **Key difference:** Phosphorus does NOT have a gaseous phase — it only cycles through rock, soil, water, and organisms. This makes it the slowest biogeochemical cycle.

### Human Disruptions to Nutrient Cycles

| Cycle | Human Disruption | Environmental Effect |
|-------|-----------------|---------------------|
| **Carbon** | Fossil fuel combustion, deforestation | Increased atmospheric CO₂, climate change |
| **Nitrogen** | Fertilizer use, fossil fuel burning | Eutrophication, dead zones, acid rain |
| **Phosphorus** | Mining phosphate rock, fertilizer runoff | Eutrophication, algal blooms |
| **Water** | Irrigation, dam building, deforestation | Altered water tables, reduced streamflow |

### Eutrophication Process
1. Excess nitrogen and phosphorus enter water (fertilizer runoff)
2. Algal bloom — rapid algae growth
3. Algae die and decompose
4. Decomposition consumes dissolved oxygen
5. **Hypoxic zone** (dead zone) — aquatic life suffocates
      \`
    },
    {
      id: 'apesbc1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Unlike carbon and nitrogen, the _______ cycle has NO gaseous/atmospheric phase.

2) When excess nutrients cause algal blooms and oxygen depletion in water, this is called _______.

3) The bacteria that convert atmospheric N₂ to ammonia are called nitrogen-_______ bacteria.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['phosphorus', 'eutrophication', 'fixing'],
        hint1: 'It cycles through rocks, soil, and water only.',
        hint2: 'Nutrient enrichment of water bodies.',
        hint3: 'They "fix" nitrogen from the air.',
        explanation: 'Phosphorus has no gas phase. Eutrophication = nutrient enrichment → algal bloom → oxygen depletion. Nitrogen-fixing bacteria convert N₂ to NH₃.'
      }
    },
    {
      id: 'apesbc1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Process** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Plants absorbing CO₂ and converting it to glucose is ___',
            options: ['Photosynthesis', 'Cellular respiration', 'Decomposition', 'Combustion']
          },
          {
            label: 'Bacteria converting NO₃⁻ back to atmospheric N₂ is ___',
            options: ['Denitrification', 'Nitrogen fixation', 'Nitrification', 'Ammonification']
          },
          {
            label: 'Excessive fertilizer runoff causing algal blooms and fish kills demonstrates ___',
            options: ['Eutrophication from nitrogen and phosphorus pollution', 'Normal carbon cycling', 'Primary ecological succession', 'Bioaccumulation of heavy metals']
          }
        ],
        correctAnswers: ['Photosynthesis', 'Denitrification', 'Eutrophication from nitrogen and phosphorus pollution'],
        hint1: 'CO₂ + H₂O + sunlight → glucose + O₂.',
        hint2: 'The reverse of nitrogen fixation.',
        hint3: 'Nutrient pollution in water.',
        explanation: 'Photosynthesis = CO₂ → glucose. Denitrification = NO₃⁻ → N₂. Fertilizer runoff → eutrophication → dead zones.'
      }
    },
    {
      id: 'apesbc1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Biogeochemical Cycles

- Know the **reservoirs** and **fluxes** for each cycle (where is it stored? how does it move?)
- Phosphorus = NO gas phase (only cycles through rock, soil, water, organisms)
- **Eutrophication** is one of the most tested concepts — know the full process from fertilizer → dead zone
- Human disruptions: fossil fuels (carbon), fertilizer (nitrogen + phosphorus), deforestation (all cycles)
- The nitrogen cycle has the most bacterial steps — know the names and what each one does
      \`
    },
    {
      id: 'apesbc1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A farmer plants a cover crop of clover (a legume) between growing seasons. This practice helps because:',
            options: [
              'Clover absorbs phosphorus from the atmosphere',
              'Rhizobium bacteria in clover roots fix atmospheric nitrogen into the soil',
              'Clover releases nitrogen gas back to the atmosphere',
              'Clover prevents all water from entering the soil'
            ],
            correctAnswer: 1,
            explanation: 'Legumes like clover have symbiotic Rhizobium bacteria in their root nodules that fix atmospheric N₂ into ammonia (NH₃), naturally fertilizing the soil without synthetic fertilizer.'
          },
          {
            question: 'A large dead zone forms in the Gulf of Mexico each summer. The MOST likely cause is:',
            options: [
              'Oil spills from offshore drilling',
              'Agricultural fertilizer runoff from the Mississippi River watershed causing eutrophication',
              'Overfishing removing too many organisms',
              'Natural volcanic activity on the ocean floor'
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen and phosphorus fertilizer runoff flows down the Mississippi River into the Gulf, causing massive algal blooms. When algae decompose, they consume dissolved oxygen, creating a hypoxic dead zone.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Population Ecology ───
write('apes-population-ecology-part1.ts', `export const apesPopulationEcologyPart1Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespe1-intro',
      type: 'text' as const,
      content: \`
# 🐾 Population Ecology

**Part 1 of 7 — Growth Models and Carrying Capacity**

---

## Population Growth Models

| Model | Shape | Equation | Description |
|-------|-------|----------|-----------|
| **Exponential (J-curve)** | J-shaped | dN/dt = rN | Unlimited resources; population grows without limit |
| **Logistic (S-curve)** | S-shaped | dN/dt = rN(K-N)/K | Growth slows as population approaches carrying capacity (K) |

### Key Variables

| Symbol | Meaning |
|--------|---------|
| **N** | Population size |
| **r** | Intrinsic rate of natural increase (birth rate - death rate) |
| **K** | Carrying capacity (maximum population an environment can sustain) |
| **dN/dt** | Rate of population change over time |

> 🔑 **AP Key Point:** Maximum growth rate in logistic growth occurs at **N = K/2** (half the carrying capacity). This is when (K-N)/K = 0.5, so the growth rate is rN/2.

---

## Reproductive Strategies

| Strategy | Characteristics | Examples |
|----------|---------------|---------|
| **r-selected** | Many offspring, little parental care, small body, short lifespan | Insects, bacteria, mice, weeds |
| **K-selected** | Few offspring, high parental care, large body, long lifespan | Elephants, whales, humans, eagles |
      \`
    },
    {
      id: 'apespe1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In logistic growth, population growth rate is HIGHEST when:',
            options: [
              'The population is near zero',
              'The population is at carrying capacity (K)',
              'The population is at K/2 (half of carrying capacity)',
              'Resources are completely depleted'
            ],
            correctAnswer: 2,
            explanation: 'At N = K/2, the logistic equation produces maximum growth rate. Below K/2, population is too small for maximum growth. Above K/2, resources become limiting and growth slows.'
          },
          {
            question: 'An r-selected species would most likely:',
            options: [
              'Produce few offspring with extensive parental care',
              'Have a long lifespan and large body size',
              'Produce many offspring with little parental care',
              'Be found mainly in stable, predictable environments'
            ],
            correctAnswer: 2,
            explanation: 'r-selected species maximize reproductive rate (r): many offspring, little care, rapid maturity. They thrive in unstable environments where they can quickly fill available resources.'
          }
        ]
      }
    },
    {
      id: 'apespe1-content',
      type: 'text' as const,
      content: \`
## Density-Dependent vs. Density-Independent Factors

| Type | Definition | Examples |
|------|-----------|---------|
| **Density-dependent** | Impact increases as population density increases | Competition, predation, disease, parasitism |
| **Density-independent** | Impact is the same regardless of population size | Natural disasters, weather, fire, drought |

## Species Interactions

| Interaction | Species A | Species B | Example |
|------------|----------|----------|---------|
| **Mutualism** | Benefits (+) | Benefits (+) | Bee and flower; clownfish and anemone |
| **Commensalism** | Benefits (+) | Unaffected (0) | Barnacles on whales; birds nesting in trees |
| **Parasitism** | Benefits (+) | Harmed (−) | Tapeworm in host; tick on deer |
| **Predation** | Benefits (+) | Harmed (−) | Wolf eating rabbit |
| **Competition** | Harmed (−) | Harmed (−) | Two species competing for same food |

### Competitive Exclusion Principle
Two species competing for the **exact same niche** cannot coexist indefinitely — one will outcompete the other. Species coexist through **niche partitioning** (dividing resources).
      \`
    },
    {
      id: 'apespe1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The maximum population size an environment can sustain indefinitely is called the _______ capacity (K).

2) In logistic growth, the maximum growth rate occurs at N = K/_______.

3) Factors whose impact increases with population density (like disease and competition) are called _______-dependent factors.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['carrying', '2', 'density'],
        hint1: 'The upper limit on population size.',
        hint2: 'Half of K.',
        hint3: 'They depend on how dense the population is.',
        explanation: 'Carrying capacity (K) = maximum sustainable population. Maximum growth at K/2. Density-dependent factors intensify with crowding.'
      }
    },
    {
      id: 'apespe1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Interaction** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A clownfish living in a sea anemone — both benefit. This is ___',
            options: ['Mutualism (+/+)', 'Commensalism (+/0)', 'Parasitism (+/−)', 'Competition (−/−)']
          },
          {
            label: 'A drought killing organisms regardless of population density is a ___ factor',
            options: ['Density-independent', 'Density-dependent', 'K-selected', 'r-selected']
          },
          {
            label: 'Elephants (few offspring, long lifespan, extensive parental care) are ___',
            options: ['K-selected', 'r-selected', 'Pioneer species', 'Keystone species']
          }
        ],
        correctAnswers: ['Mutualism (+/+)', 'Density-independent', 'K-selected'],
        hint1: 'Both species benefit.',
        hint2: 'Weather does not care about population density.',
        hint3: 'Few offspring, lots of investment.',
        explanation: 'Clownfish/anemone = mutualism. Drought = density-independent. Elephants = K-selected (few offspring, high care).'
      }
    },
    {
      id: 'apespe1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Population Ecology

- Be able to sketch and label J-curve (exponential) vs S-curve (logistic)
- **Maximum growth at K/2** is one of the most tested concepts on the AP exam
- Know how to calculate growth rate: if K=1000 and N=500, growth is at its maximum
- r-selected vs K-selected: know examples and which strategy is favored in different environments
- **Invasive species** are often r-selected: they reproduce rapidly in new environments without predators
- Species interactions: know the +/+, +/0, +/−, −/− notation system
      \`
    },
    {
      id: 'apespe1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A population of deer has a carrying capacity of 800. At what population size would you expect the fastest population growth?',
            options: [
              '100 deer',
              '400 deer',
              '600 deer',
              '800 deer'
            ],
            correctAnswer: 1,
            explanation: 'Maximum growth occurs at K/2 = 800/2 = 400. At this point, resources are still ample enough to support high birth rates, but the population is large enough for significant total reproduction.'
          },
          {
            question: 'An invasive species introduced to an island with no predators initially shows J-shaped exponential growth. What will MOST likely happen next?',
            options: [
              'Growth will continue exponentially forever',
              'The population will crash after overshooting carrying capacity due to resource depletion',
              'The population will immediately stabilize at carrying capacity',
              'The population will decline due to natural predators evolving'
            ],
            correctAnswer: 1,
            explanation: 'Without predators, the population overshoots K, depletes resources, and then crashes. This boom-and-bust pattern is common for invasive species and can cause permanent ecosystem damage.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with APES batch 1 (5 files)');
