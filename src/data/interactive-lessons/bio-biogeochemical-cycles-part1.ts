export const bioBiogeochemicalCyclesPart1Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc1-intro',
      type: 'text' as const,
      content: `# The Water Cycle (Hydrological Cycle)

**Part 1 of 7 — Biogeochemical Cycles**

Water is the most abundant molecule on Earth's surface and is essential to all living organisms. The **water cycle** (hydrological cycle) describes the continuous movement of water through the biosphere, atmosphere, lithosphere, and hydrosphere.

### Key Processes

- **Evaporation** — Liquid water absorbs heat energy and transitions to water vapor, entering the atmosphere from oceans, lakes, rivers, and soil surfaces.
- **Transpiration** — Plants absorb water through roots and release water vapor through stomata in leaves. This biological process accounts for ~10% of atmospheric moisture.
- **Evapotranspiration** — The combined water loss from evaporation and transpiration from a landscape.
- **Condensation** — Water vapor cools and forms droplets around particulate matter (condensation nuclei), creating clouds and fog.
- **Precipitation** — Water returns to Earth's surface as rain, snow, sleet, or hail when cloud droplets become too heavy.

### Water Reservoirs

| Reservoir | % of Earth's Water | Residence Time |
|---|---|---|
| Oceans | 97.2% | ~3,000 years |
| Ice caps/glaciers | 2.1% | ~10,000 years |
| Groundwater | 0.6% | Days to thousands of years |
| Freshwater lakes/rivers | 0.01% | Days to years |
| Atmosphere | 0.001% | ~9 days |
`
    },
    {
      id: 'bgc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Evaporation & Transpiration** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which process describes water vapor released from plant leaves through stomata?',
            options: [
              'Evaporation',
              'Transpiration',
              'Condensation',
              'Precipitation'
            ],
            correctAnswer: 1,
            explanation: 'Transpiration is the biological process by which plants release water vapor through stomata in their leaves. Evaporation is the physical transition of liquid water to vapor from non-living surfaces.'
          },
          {
            question: 'A researcher measures that 10% of atmospheric moisture in a forested region comes from vegetation. This water most likely entered the atmosphere via:',
            options: [
              'Runoff into streams that then evaporated',
              'Sublimation from frozen soil',
              'Transpiration from plant leaves',
              'Condensation on leaf surfaces'
            ],
            correctAnswer: 2,
            explanation: 'Transpiration from plants is a major source of atmospheric moisture, especially in forested regions. Globally, transpiration accounts for roughly 10% of atmospheric moisture, but in densely vegetated areas it can be even higher.'
          }
        ]
      }
    },
    {
      id: 'bgc1-groundwater',
      type: 'text' as const,
      content: `## Groundwater, Runoff, and Surface Flow

When precipitation reaches Earth's surface, water follows several paths:

### Infiltration & Groundwater
- Water **infiltrates** (seeps) into soil and porous rock, recharging underground aquifers.
- The upper boundary of saturated ground is the **water table**.
- Groundwater can remain underground for days to thousands of years (long residence time).
- Springs and wells tap into groundwater reservoirs.

### Surface Runoff
- Water that does not infiltrate flows across the surface as **runoff**, collecting in streams, rivers, and eventually oceans.
- Runoff increases when soil is saturated, frozen, or covered by impervious surfaces (pavement, rooftops).
- Runoff carries dissolved nutrients, sediment, and pollutants into waterways.

### Biological Connections
- All organisms require water for metabolic reactions (hydrolysis, condensation reactions).
- Water is a reactant in **photosynthesis**: $6CO_{2}$ + $6H_{2}O$ → $C_{6}H_{12}O_{6}$ + $6O_{2}$
- Water is a product of **aerobic cellular respiration**.
- Aquatic ecosystems depend on the continuous cycling of water to maintain dissolved oxygen, nutrient transport, and temperature regulation.
`
    },
    {
      id: 'bgc1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Groundwater & Runoff** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which factor would most likely INCREASE surface runoff in a watershed?',
            options: [
              'Planting deep-rooted vegetation on hillsides',
              'Replacing forest with an asphalt parking lot',
              'Increasing soil porosity through tillage',
              'Lowering the water table by reducing precipitation'
            ],
            correctAnswer: 1,
            explanation: 'Impervious surfaces like asphalt prevent water infiltration, dramatically increasing surface runoff. Vegetation and porous soil both promote infiltration and reduce runoff.'
          },
          {
            question: 'Groundwater has a long residence time compared to atmospheric water. What is the primary reason?',
            options: [
              'Groundwater is chemically bonded to minerals and cannot move',
              'Water moves slowly through porous rock and soil underground',
              'Groundwater is frozen and cannot flow',
              'The water table prevents upward movement of water'
            ],
            correctAnswer: 1,
            explanation: 'Groundwater moves very slowly through pores and fractures in rock and sediment, resulting in residence times ranging from days to thousands of years, compared to about 9 days for atmospheric water.'
          }
        ]
      }
    },
    {
      id: 'bgc1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Water Cycle Processes** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The process by which liquid water becomes water vapor at the surface of oceans and lakes is called ___.',
            options: ['condensation', 'evaporation', 'transpiration', 'precipitation']
          },
          {
            label: 'Plants release water vapor into the atmosphere through pores called stomata in a process known as ___.',
            options: ['infiltration', 'sublimation', 'transpiration', 'runoff']
          },
          {
            label: 'Water that seeps into soil and collects in underground aquifers is called ___.',
            options: ['runoff', 'precipitation', 'groundwater', 'condensation']
          },
          {
            label: 'The largest reservoir of water on Earth is the ___.',
            options: ['atmosphere', 'glaciers', 'groundwater', 'oceans']
          }
        ],
        correctAnswers: ['evaporation', 'transpiration', 'groundwater', 'oceans'],
        hint1: 'Think about phase changes and where water is stored.',
        hint2: 'Evaporation is abiotic; transpiration is biotic.',
        hint3: 'Over 97% of Earth\'s water is in one reservoir.',
        explanation: 'Evaporation converts liquid water to vapor at surfaces. Transpiration is the biological release of water vapor by plants through stomata. Groundwater is water stored in underground aquifers after infiltration. Oceans hold 97.2% of Earth\'s water, making them the largest reservoir.'
      }
    },
    {
      id: 'bgc1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary — The Water Cycle

### Key Takeaways
1. **Evaporation** and **transpiration** move water from Earth's surface into the atmosphere.
2. **Condensation** forms clouds; **precipitation** returns water to the surface.
3. Water on the surface either **infiltrates** into groundwater or flows as **runoff**.
4. Oceans are the largest water reservoir (97.2%); the atmosphere holds the least (0.001%).
5. Water's biological roles include serving as a reactant in photosynthesis, a solvent for biochemical reactions, and a medium for nutrient transport.

### AP Exam Connection
- The water cycle connects to **ecosystem dynamics** (Unit 8) — water availability limits primary productivity.
- Understand how **human activities** (deforestation, urbanization) alter the water cycle by increasing runoff and reducing transpiration.
- Be prepared to interpret water cycle diagrams showing fluxes between reservoirs.

**Next up:** Part 2 — The Carbon Cycle
`
    }
  ]
};
