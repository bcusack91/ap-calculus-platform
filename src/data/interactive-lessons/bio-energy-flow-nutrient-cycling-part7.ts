export const bioEnergyFlowPart7Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis Review

**Part 7 of 7 — Synthesis Review**

This topic comes down to one contrast, applied over and over: **energy flows, matter cycles.** The table below is the master map. If you can explain every row, you can handle almost any question on CED 8.2 and the nutrient cycles.

### Energy versus matter

| Feature | Energy | Matter (C, N, P, water) |
|---|---|---|
| Path through the ecosystem | One way: sun or inorganic chemicals → producers → consumers → heat | Cycles between organisms, air, water, soil and rock |
| How it enters living things | Photosynthesis and chemosynthesis | Fixation of $\\text{CO}_2$, uptake of $\\text{NO}_3^-$, $\\text{NH}_4^+$ and $\\text{PO}_4^{3-}$, uptake of water |
| How it leaves living things | Heat from cellular respiration | Respiration and decomposition ($\\text{CO}_2$), denitrification ($\\text{N}_2$), excretion and decay |
| Role of decomposers | Use the energy in dead matter for themselves | Return nutrients to soil, water and air |
| Can it be reused? | No: heat cannot power life processes | Yes: the same atoms are used repeatedly |
| Typical calculation | NPP = GPP − R; trophic efficiency; energy after $n$ levels | Percent change in $\\text{CO}_2$; net carbon storage |
| Typical diagram | Energy pyramid (never inverted) | Cycle diagram of reservoirs and fluxes |
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s2-connections',
      type: 'text' as const,
      content: `
### Threads That Tie the Parts Together

**1. Cellular respiration is everywhere.** It is the heat-producing cost in an organism's energy budget (Part 2), the reason only about 10% of energy passes up a food chain (Part 3), a major flux returning $\\text{CO}_2$ to the air (Part 4), and the oxygen-consuming step that turns an algal bloom into a dead zone (Part 5).

**2. Chemoautotrophs show up twice.** Vent bacteria that oxidize sulfide (Part 1) and nitrifying soil bacteria that oxidize ammonium (Part 5) use the same strategy: energy from inorganic chemicals, carbon from $\\text{CO}_2$.

**3. Thermoregulation affects food chains.** Endotherms spend much of their assimilated energy on body heat, so they turn a smaller fraction of it into new tissue than ectotherms do (Part 2). A food chain with endothermic consumers passes less energy to the next level (Part 3).

**4. Nutrients cap energy.** If nitrogen or phosphorus is limiting, NPP is limited (Parts 1 and 5), and NPP sets how many consumers and trophic levels the ecosystem can support (Part 3). Adding the limiting nutrient raises NPP, which is the first link in eutrophication.

**5. Decomposers serve both stories.** As heterotrophs they use the last of the energy in dead matter, releasing it as heat. As recyclers they carry out ammonification and return $\\text{CO}_2$ and phosphate, closing the matter cycles.

**6. Humans shift matter between reservoirs.** Fossil fuel combustion moves carbon from a slow reservoir to the atmosphere (Part 4); fertilizer manufacture and runoff move nitrogen and phosphorus into waterways (Part 5). The ecosystem effects of these shifts are covered in Ecology and Ecosystems.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s3-mcq-threads',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Connecting the Parts
      `,
      exercise: {
        questions: [
          {
            question: 'Decomposers play which role in an ecosystem?',
            options: [
              'They create new energy from dead matter and return it to the producers',
              'They gain energy from dead matter and return its nutrients to the soil',
              'They recycle the energy in dead matter so producers can use it again',
              'They fix nitrogen gas from the air into the bodies of dead organisms'
            ],
            correctAnswer: 1,
            explanation: 'Decomposers are heterotrophs that respire the energy in dead material and, in breaking it down, release nutrients such as ammonium, phosphate and carbon dioxide for producers. Energy cannot be created or recycled to producers, and nitrogen fixation is carried out by specific bacteria rather than by decomposition.'
          },
          {
            question: 'A population of insect-eating lizards and a population of insect-eating shrews each assimilate the same amount of energy from their prey in a year. Which outcome is expected, and why?',
            options: [
              'More new shrew tissue, because endotherms turn energy into tissue faster',
              'More new lizard tissue, because ectotherms spend less absorbed energy on body heat',
              'Equal tissue in lizards and shrews, because each transfer is about 10%',
              'More new shrew tissue, because warm bodies build new cells more quickly'
            ],
            correctAnswer: 1,
            explanation: 'Shrews are endotherms that spend a large share of their assimilated energy generating body heat, so lizards convert more of the same energy into growth and reproduction. Ten percent is only an average, and differences in thermoregulation are one reason real efficiencies vary.'
          },
          {
            question: 'Which process releases heat in an organism\'s energy budget, returns CO2 to the atmosphere in the carbon cycle, and uses up oxygen in a dead zone?',
            options: [
              'Photosynthesis by producers',
              'Nitrogen fixation by microbes',
              'Cellular respiration',
              'Transpiration from plant leaves'
            ],
            correctAnswer: 2,
            explanation: 'Cellular respiration releases energy partly as heat, produces carbon dioxide, and consumes oxygen, which is why decomposers respiring dead algae create hypoxic water. Photosynthesis removes carbon dioxide and releases oxygen, the opposite of what the stem describes.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s4-misconceptions',
      type: 'text' as const,
      content: `
### Misconceptions to Retire

| Misconception | Correction |
|---|---|
| Energy is recycled in ecosystems | Energy flows one way and leaves as heat; only matter is recycled |
| Plants photosynthesize instead of respiring | Plants respire all the time; NPP is what remains after their respiration |
| Exactly 10% of energy passes to each level | 10% is an approximate average; efficiencies commonly range from about 5% to 20% |
| Lost energy is destroyed | It is converted to heat or left in uneaten and undigested matter |
| Ectotherms are always cold | "Ectotherm" describes the heat source, not the temperature |
| A large animal has a high metabolic rate per gram | Mass-specific metabolic rate falls as body size increases |
| Every ecological pyramid is upright | Energy pyramids are; biomass and numbers pyramids can be inverted |
| Nitrogen fixation produces nitrate | Fixation makes ammonia; nitrification makes nitrate |
| Phosphorus cycles through the air | Phosphorus has no significant gaseous phase |
| Living algae use up the oxygen in a dead zone | Decomposers respiring dead algae use up the oxygen |
| All ecosystems run on sunlight | Chemosynthetic communities run on chemical energy, and chemosynthesis can occur without oxygen |
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
### Practice — Complete the Master Map

Choose the correct ending for each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Energy leaves ecosystems mainly as',
            options: ['nitrate', 'heat', 'carbon dioxide', 'ATP']
          },
          {
            label: 'Carbon returns to the atmosphere through',
            options: ['photosynthesis', 'nitrogen fixation', 'transpiration', 'cellular respiration']
          },
          {
            label: 'Nitrogen returns to the atmosphere through',
            options: ['denitrification', 'nitrification', 'ammonification', 'assimilation']
          },
          {
            label: 'The cycle with no significant atmospheric reservoir is the',
            options: ['carbon cycle', 'water cycle', 'phosphorus cycle', 'nitrogen cycle']
          },
          {
            label: 'Net primary production equals',
            options: ['GPP plus producer respiration', 'GPP times trophic efficiency', 'consumer production minus heat', 'GPP minus producer respiration']
          }
        ],
        correctAnswers: ['heat', 'cellular respiration', 'denitrification', 'phosphorus cycle', 'GPP minus producer respiration'],
        hint1: 'Energy cannot be reused once it is in the form that organisms give off when they respire.',
        hint2: 'Fixation and nitrification keep nitrogen in the soil; only one step releases nitrogen gas.',
        hint3: 'NPP is what producers keep after paying their own respiration cost.',
        explanation: 'Energy leaves as heat; respiration returns carbon dioxide; denitrification returns nitrogen gas; phosphorus has no significant atmospheric reservoir; and NPP equals GPP minus the producers\' own respiration.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s6-frq',
      type: 'text' as const,
      content: `
### FRQ-Style Synthesis: Nitrogen on a Grassland

**Prompt.** Ecologists add nitrogen fertilizer to plots of a grassland where nitrogen limits plant growth. Some of the fertilizer washes into a nearby pond.

**(a) Predict the effect on NPP in the plots and justify.**
NPP increases. Nitrogen is the limiting nutrient, and plants need it to make amino acids, proteins and nucleic acids for new tissue.

**(b) Predict the effect on herbivores and predators.**
Both can increase over time. More NPP means more energy at the base of the food web, and each higher level receives a fraction of it (a bottom-up effect).

**(c) Calculate.** Plot NPP rises from 3,000 to 4,500 kJ/m²/yr. With 10% efficiency per transfer, energy reaching secondary consumers rises from $3{,}000 \\times 0.01 = 30$ to $4{,}500 \\times 0.01 = 45$ kJ/m²/yr, a 50% increase.

**(d) Explain the effect on fish in the pond.**
Runoff nitrogen fuels an algal bloom. When the algae die, decomposers break them down by aerobic respiration, consuming dissolved oxygen. The resulting hypoxia can kill fish.

**(e) Identify a process that could return some of the added nitrogen to the atmosphere.**
Denitrification by bacteria in low-oxygen soils or pond sediments converts nitrate to $\\text{N}_2$.

> **Scoring habits:** name the process, state the direction of change, and connect it to energy or matter explicitly. "More nitrogen means more growth" earns less than "nitrogen is limiting, so adding it raises NPP and the energy available to consumers."
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s7-mcq-mixed',
      type: 'multiple-choice' as const,
      content: `
### Final Checkpoint — Mixed Review
      `,
      exercise: {
        questions: [
          {
            question: 'Nitrogen fertilizer added to a nitrogen-limited grassland increases NPP. Which further change is most likely, assuming nothing else limits the community?',
            options: [
              'Fewer herbivores, as fertilized plants hold less usable energy',
              'Larger herbivore and predator populations supported by the extra energy',
              'No change above the producers, as consumers do not take up fertilizer',
              'A higher percentage of energy passed upward at every single level of the web'
            ],
            correctAnswer: 1,
            explanation: 'Higher NPP adds energy at the base of the food web, and that energy supports larger populations at higher levels. Trophic efficiency depends on how consumers use energy, not on how much is available, so more NPP does not raise the percentage transferred.'
          },
          {
            question: 'Why does phosphorus often limit producers in lakes more than carbon does?',
            options: [
              'Its atoms are destroyed when algae use them to make ATP',
              'Its supply comes from slow rock weathering, not from the air',
              'Its gas form escapes from lakes faster than the algae can absorb it',
              'Its uptake requires nitrogen-fixing bacteria in the water'
            ],
            correctAnswer: 1,
            explanation: 'Phosphate enters lakes mainly from the slow weathering of rock and from runoff, while carbon dioxide is replenished continuously from the atmosphere. Atoms are not destroyed, phosphorus has no significant gas form, and phosphate uptake does not depend on nitrogen fixers.'
          },
          {
            question: 'Which change would most directly decrease the energy available to the top predators in an ocean food web?',
            options: [
              'An increase in decomposition rates on the sea floor',
              'A drop in phytoplankton production at the base of the web',
              'More nitrate carried up into the sunlit surface waters by upwelling',
              'Higher trophic efficiency among the predators\' prey species'
            ],
            correctAnswer: 1,
            explanation: 'Phytoplankton NPP is the energy supply for the entire food web, so less production at the base leaves less energy for every level above it. More nitrate at the surface and higher efficiency would both increase the energy reaching top predators.'
          }
        ]
      }
    }
  ]
};
