export const apesBiogeochemicalCyclesPart1Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbc1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'apesbc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'apesbc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Unlike carbon and nitrogen, the _______ cycle has NO gaseous/atmospheric phase.

2) When excess nutrients cause algal blooms and oxygen depletion in water, this is called _______.

3) The bacteria that convert atmospheric N₂ to ammonia are called nitrogen-_______ bacteria.
      `,
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
      content: `
**Match the Process** 🔍
      `,
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
      content: `
## AP Exam Strategy: Biogeochemical Cycles

- Know the **reservoirs** and **fluxes** for each cycle (where is it stored? how does it move?)
- Phosphorus = NO gas phase (only cycles through rock, soil, water, organisms)
- **Eutrophication** is one of the most tested concepts — know the full process from fertilizer → dead zone
- Human disruptions: fossil fuels (carbon), fertilizer (nitrogen + phosphorus), deforestation (all cycles)
- The nitrogen cycle has the most bacterial steps — know the names and what each one does
      `
    },
    {
      id: 'apesbc1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
