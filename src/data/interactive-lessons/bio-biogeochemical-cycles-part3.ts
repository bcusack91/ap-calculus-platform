export const bioBiogeochemicalCyclesPart3Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc3-intro',
      type: 'text' as const,
      content: `# The Nitrogen Cycle ⚡

Nitrogen (N) is essential for life — it's a key component of **amino acids**, **nucleic acids** (DNA/RNA), and **ATP**. Although N₂ makes up 78% of the atmosphere, most organisms **cannot use N₂ directly** because the triple bond (N≡N) is extremely strong (945 kJ/mol).

## Overview of Nitrogen Transformations

| Process | Conversion | Organisms/Mechanism |
|---------|-----------|---------------------|
| **N₂ fixation** | N₂ → NH₃/NH₄⁺ | Nitrogen-fixing bacteria, lightning, industrial |
| **Nitrification** | NH₄⁺ → NO₂⁻ → NO₃⁻ | Nitrifying bacteria (*Nitrosomonas*, *Nitrobacter*) |
| **Assimilation** | NO₃⁻/NH₄⁺ → organic N | Plants and microorganisms |
| **Ammonification** | Organic N → NH₄⁺ | Decomposers (bacteria, fungi) |
| **Denitrification** | NO₃⁻ → N₂O → N₂ | Denitrifying bacteria (anaerobic) |
| **Anammox** | NH₄⁺ + NO₂⁻ → N₂ | Anammox bacteria (anaerobic) |

> 🔬 **AP Key Point:** Nitrogen must be "fixed" (converted from N₂ to a biologically usable form like NH₃ or NO₃⁻) before organisms can incorporate it into biological molecules.`
    },
    {
      id: 'bgc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Nitrogen Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why can\'t most organisms use atmospheric N₂ directly?',
            options: [
              'N₂ is toxic to most organisms',
              'N₂ is too heavy to be absorbed',
              'The triple bond in N₂ is extremely strong and difficult to break',
              'N₂ must first be converted to CO₂'
            ],
            correctAnswer: 2,
            explanation: 'The N≡N triple bond has a bond energy of 945 kJ/mol, making it one of the strongest bonds in nature. Only specialized nitrogen-fixing organisms (with the enzyme nitrogenase) and extreme conditions (lightning, industrial processes at high temperature/pressure) can break this bond.'
          },
          {
            question: 'Which two forms of nitrogen can plants typically absorb from the soil?',
            options: [
              'N₂ and NO₃⁻',
              'NH₄⁺ and NO₃⁻',
              'NO₂⁻ and N₂O',
              'NH₃ and N₂'
            ],
            correctAnswer: 1,
            explanation: 'Plants can absorb ammonium (NH₄⁺) and nitrate (NO₃⁻) from the soil through their roots. Most plants prefer nitrate, which is more mobile in soil solution. These are the "biologically available" forms of nitrogen.'
          }
        ]
      }
    },
    {
      id: 'bgc3-content2',
      type: 'text' as const,
      content: `## Nitrogen Fixation: Breaking the Triple Bond 🔧

### Biological Nitrogen Fixation

The enzyme **nitrogenase** catalyzes the reaction:

$$N_2 + 8H^+ + 8e^- + 16ATP \\rightarrow 2NH_3 + H_2 + 16ADP + 16P_i$$

**Key nitrogen-fixing organisms:**

| Organism | Habitat | Association |
|----------|---------|-------------|
| *Rhizobium* | Root nodules of legumes | Mutualistic symbiosis |
| *Azotobacter* | Soil (free-living) | Free-living |
| *Anabaena* | Aquatic (cyanobacterium) | Free-living or symbiotic |
| *Frankia* | Root nodules of alder, bayberry | Mutualistic symbiosis |

**Critical requirement:** Nitrogenase is **irreversibly inactivated by O₂**. Organisms protect it via:
- **Leghemoglobin** — binds O₂ in legume root nodules (gives nodules a pink color)
- **Heterocysts** — specialized O₂-free cells in cyanobacteria like *Anabaena*
- **High respiration rates** — consume O₂ quickly in the local environment

### Lightning Fixation
- Lightning provides enough energy to oxidize N₂ → NO → NO₂ → NO₃⁻
- Contributes ~5–8% of natural nitrogen fixation

### Industrial Fixation (Haber-Bosch Process)
$$N_2 + 3H_2 \\xrightarrow{\\text{high T, P, catalyst}} 2NH_3$$
- Requires ~450°C, 200 atm pressure, iron catalyst
- Produces ~150 million tons of NH₃/year for fertilizer
- Humans now fix MORE nitrogen than all natural processes combined`
    },
    {
      id: 'bgc3-content3',
      type: 'text' as const,
      content: `## Nitrification, Ammonification, and Denitrification 🔄

### Nitrification (Two-step oxidation)

| Step | Reaction | Bacterium |
|------|----------|-----------|
| Step 1 | NH₄⁺ → NO₂⁻ | *Nitrosomonas* |
| Step 2 | NO₂⁻ → NO₃⁻ | *Nitrobacter* |

- Both steps are **aerobic** (require O₂)
- Both are **chemoautotrophs** — they use the energy from these oxidation reactions to fix CO₂
- Nitrification is important because it converts NH₄⁺ to NO₃⁻, the form most plants prefer

### Ammonification (Mineralization)

- Decomposers break down organic nitrogen (proteins, nucleic acids) in dead organisms and waste
- Releases **NH₄⁺** (ammonium) back to the soil
- This "recycled" nitrogen can be re-assimilated by plants or further processed by nitrifiers

### Denitrification (Closing the Cycle)

$$NO_3^- \\rightarrow NO_2^- \\rightarrow NO \\rightarrow N_2O \\rightarrow N_2$$

- Performed by **denitrifying bacteria** (e.g., *Pseudomonas*) under **anaerobic conditions**
- Returns fixed nitrogen to the atmosphere as N₂ gas
- Occurs in waterlogged soils, sediments, and anoxic zones
- **N₂O** (nitrous oxide) released as an intermediate is a potent greenhouse gas (~300× CO₂)

> ⚠️ **AP Connection:** Denitrification is the only major biological process that REMOVES bioavailable nitrogen from ecosystems, returning it to N₂.`
    },
    {
      id: 'bgc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Nitrogen Transformations** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which process converts organic nitrogen from dead organisms back to NH₄⁺?',
            options: ['Nitrification', 'Denitrification', 'Ammonification', 'Nitrogen fixation'],
            correctAnswer: 2,
            explanation: 'Ammonification (also called mineralization) is performed by decomposers that break down proteins and nucleic acids in dead organic matter, releasing NH₄⁺ back to the soil for reuse by plants or conversion by nitrifying bacteria.'
          },
          {
            question: 'The Haber-Bosch process is significant because:',
            options: [
              'It was the first discovery of nitrogen gas',
              'It converts NO₃⁻ to N₂, removing excess nitrogen',
              'Industrial nitrogen fixation now exceeds all natural biological fixation combined',
              'It eliminates the need for nitrogen-fixing bacteria in agriculture'
            ],
            correctAnswer: 2,
            explanation: 'The Haber-Bosch process (developed ~1913) produces ~150 million tons of ammonia per year for fertilizer. Humans now fix more reactive nitrogen than all natural processes combined, which has dramatically increased food production but also caused significant environmental problems (eutrophication, dead zones).'
          }
        ]
      }
    },
    {
      id: 'bgc3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Nitrogen Cycle** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The enzyme that catalyzes biological nitrogen fixation is ___',
            options: ['nitrogenase', 'RuBisCO', 'ATP synthase', 'helicase']
          },
          {
            label: '*Rhizobium* bacteria fix nitrogen in the root nodules of ___ plants',
            options: ['grasses', 'legumes', 'conifers', 'mosses']
          },
          {
            label: 'The two-step process of converting NH₄⁺ → NO₂⁻ → NO₃⁻ is called ___',
            options: ['ammonification', 'denitrification', 'nitrification', 'assimilation']
          },
          {
            label: 'Denitrification occurs under ___ conditions',
            options: ['aerobic', 'anaerobic', 'acidic', 'alkaline']
          }
        ],
        correctAnswers: ['nitrogenase', 'legumes', 'nitrification', 'anaerobic'],
        hint1: 'The enzyme name matches the process: nitrogen fixation → nitrogenase.',
        hint2: 'Beans, peas, clover, and soybeans are all legumes with root nodules.',
        hint3: 'Nitrification = making nitrate (NO₃⁻). It\'s a two-step aerobic oxidation.',
        explanation: 'Nitrogenase is the enzyme for N₂ fixation, found in bacteria like Rhizobium (in legume root nodules). Nitrification is the aerobic two-step oxidation of NH₄⁺ to NO₃⁻ by Nitrosomonas and Nitrobacter. Denitrification is the reverse — it reduces NO₃⁻ back to N₂ under anaerobic conditions.'
      }
    }
  ]
};
