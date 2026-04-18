export const apesRenewableEnergyPart1Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesre1-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 1 of 7 — Solar, Wind, Hydro, and Other Renewables**

---

## Renewable Energy Sources

| Source | How It Works | Share of Global Electricity |
|--------|------------|----------------------------|
| **Solar PV** | Photovoltaic cells convert sunlight directly to electricity | ~4% (fastest growing) |
| **Wind** | Turbines convert kinetic energy of wind to electricity | ~7% |
| **Hydroelectric** | Falling water spins turbines in dams | ~16% (largest renewable source) |
| **Biomass** | Burning organic material (wood, crops, waste) | ~2% |
| **Geothermal** | Heat from Earth interior drives steam turbines | ~0.3% |
| **Hydrogen fuel cells** | H₂ + O₂ → electricity + H₂O | Emerging technology |

---

## Solar Energy

| Type | Description | Application |
|------|-----------|------------|
| **Photovoltaic (PV)** | Semiconductor cells convert sunlight to electricity | Rooftop panels, solar farms |
| **Concentrated Solar Power (CSP)** | Mirrors focus sunlight to heat fluid and drive turbines | Large desert installations |
| **Passive solar** | Building design that maximizes natural heating/lighting | South-facing windows, thermal mass |

> 🔑 **Solar is now the cheapest source of new electricity** in most of the world, with costs declining ~90% since 2010.
      `
    },
    {
      id: 'apesre1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which renewable energy source currently generates the MOST electricity globally?',
            options: [
              'Solar PV',
              'Wind',
              'Hydroelectric',
              'Geothermal'
            ],
            correctAnswer: 2,
            explanation: 'Hydroelectric power generates ~16% of global electricity, making it the largest renewable source. However, solar and wind are growing much faster and will likely surpass hydro in coming decades.'
          },
          {
            question: 'A key advantage of renewable energy sources over fossil fuels is:',
            options: [
              'They all work 24 hours a day regardless of conditions',
              'They produce little to no greenhouse gas emissions during operation',
              'They require no land whatsoever',
              'They have unlimited energy storage built in'
            ],
            correctAnswer: 1,
            explanation: 'Renewables produce little to no CO₂ during operation (some lifecycle emissions from manufacturing). However, intermittency (solar depends on sun, wind on wind) remains a challenge.'
          }
        ]
      }
    },
    {
      id: 'apesre1-content',
      type: 'text' as const,
      content: `
## Wind Energy

| Pros | Cons |
|------|------|
| No emissions during operation | Intermittent (depends on wind) |
| Low operating costs | Bird and bat mortality |
| Small land footprint (base only) | Visual and noise concerns |
| Can coexist with farming | Not suitable everywhere |

## Hydroelectric Energy

| Pros | Cons |
|------|------|
| No emissions during operation | Dams block fish migration (salmon) |
| Reliable, controllable output | Flooding displaces communities and ecosystems |
| Water storage for irrigation/flood control | Sediment trapped behind dam (downstream erosion) |
| Long lifespan (50+ years) | Methane from decomposing submerged vegetation |

## Other Renewables

| Source | Pros | Cons |
|--------|------|------|
| **Geothermal** | Reliable 24/7; very low emissions | Location-limited (volcanic/tectonic areas) |
| **Biomass** | Carbon-neutral if sustainably harvested; uses waste | Air pollution when burned; land use competition |
| **Tidal/Wave** | Predictable; enormous energy potential | Technology immature; marine ecosystem impacts |

## Key Challenge: Intermittency and Storage
- Solar and wind are intermittent — they only generate when the sun shines or wind blows
- Solutions: battery storage, pumped hydro storage, grid interconnection, demand response
- Cost of lithium-ion batteries has dropped ~90% since 2010
      `
    },
    {
      id: 'apesre1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The renewable energy source that is the fastest growing globally is _______ photovoltaic.

2) A major environmental concern with hydroelectric dams is blocking _______ migration (especially salmon).

3) The main challenge with solar and wind energy is _______ — they only generate when conditions are right.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['solar', 'fish', 'intermittency'],
        hint1: 'PV panels on rooftops and in large farms.',
        hint2: 'Dams block river pathways for aquatic species.',
        hint3: 'The sun does not always shine; wind does not always blow.',
        explanation: 'Solar PV = fastest growing. Dams block fish migration. Intermittency = solar/wind only work when conditions are right.'
      }
    },
    {
      id: 'apesre1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Source** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Using heat from deep within the Earth to generate electricity is ___',
            options: ['Geothermal energy', 'Solar energy', 'Biomass energy', 'Tidal energy']
          },
          {
            label: 'A concern specific to wind turbines is ___',
            options: ['Bird and bat mortality', 'Acid mine drainage', 'Radioactive waste', 'Oil spills']
          },
          {
            label: 'Building south-facing windows and using thermal mass for natural heating is ___',
            options: ['Passive solar design', 'Active solar (PV)', 'Concentrated solar power', 'Geothermal heating']
          }
        ],
        correctAnswers: ['Geothermal energy', 'Bird and bat mortality', 'Passive solar design'],
        hint1: 'Heat from Earth (geo = earth, thermal = heat).',
        hint2: 'Flying animals colliding with spinning blades.',
        hint3: 'No panels or technology — just building design.',
        explanation: 'Geothermal = Earth heat. Wind turbines = bird/bat kills. Passive solar = using building design for natural heating.'
      }
    },
    {
      id: 'apesre1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Renewable Energy

- Know the pros and cons of EACH renewable source — AP FRQs require discussing trade-offs
- **Hydroelectric** is the largest current renewable but has significant ecosystem impacts
- Solar and wind are intermittent — know the storage solutions (batteries, pumped hydro)
- Understand that "renewable" does not mean "zero impact" — all sources have trade-offs
- **Geothermal** is only feasible in geologically active areas (Iceland, western US)
- Hydrogen fuel cells produce only water as a byproduct — but hydrogen must be produced first
      `
    },
    {
      id: 'apesre1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A community wants to build a dam for hydroelectric power. Which environmental impact should they MOST consider?',
            options: [
              'Increased air pollution from burning water',
              'Disruption of river ecosystems, fish migration, and sediment transport',
              'Radioactive waste from turbine operation',
              'Depletion of water from the water cycle'
            ],
            correctAnswer: 1,
            explanation: 'Dams fundamentally alter river ecosystems: they block fish migration (salmon), trap sediment (causing downstream erosion), flood habitats, and change downstream water temperature and flow.'
          },
          {
            question: 'The biggest barrier to achieving 100% renewable electricity from solar and wind is:',
            options: [
              'Solar and wind produce too much greenhouse gas',
              'Intermittency — requiring energy storage or backup for when sun and wind are unavailable',
              'They are too expensive compared to coal',
              'There is not enough sunlight or wind on Earth'
            ],
            correctAnswer: 1,
            explanation: 'Solar and wind are intermittent — they only generate power when conditions allow. Grid-scale battery storage, pumped hydro, and geographic diversity are key solutions to this challenge.'
          }
        ]
      }
    }
  ]
};
