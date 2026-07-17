export const bioBiogeochemicalCyclesPart3Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc3-intro',
      type: 'text' as const,
      content: `# The Nitrogen Cycle ⚡

Nitrogen (N) is essential for life — it's a key component of **amino acids**, **nucleic acids** (DNA/RNA), and **ATP**. Although $N_{2}$ makes up 78% of the atmosphere, most organisms **cannot use $N_{2}$ directly** because the triple bond (N≡N) is extremely strong (945 kJ/mol).

## Overview of Nitrogen Transformations

| Process | Conversion | Organisms/Mechanism |
|---------|-----------|---------------------|
| **$N_{2}$ fixation** | $N_{2}$ → $NH_{3}/NH_{4}^{+}$ | Nitrogen-fixing bacteria, lightning, industrial |
| **Nitrification** | $NH_{4}^{+}$ → $NO_{2}^{-}$ → $NO_{3}^{-}$ | Nitrifying bacteria (*Nitrosomonas*, *Nitrobacter*) |
| **Assimilation** | $NO_{3}^{-}/NH_{4}^{+}$ → organic N | Plants and microorganisms |
| **Ammonification** | Organic N → $NH_{4}^{+}$ | Decomposers (bacteria, fungi) |
| **Denitrification** | $NO_{3}^{-}$ → $N_{2}O$ → $N_{2}$ | Denitrifying bacteria (anaerobic) |
| **Anammox** | $NH_{4}^{+}$ + $NO_{2}^{-}$ → $N_{2}$ | Anammox bacteria (anaerobic) |

> 🔬 **AP Key Point:** Nitrogen must be "fixed" (converted from $N_{2}$ to a biologically usable form like $NH_{3}$ or $NO_{3}^{-}$) before organisms can incorporate it into biological molecules.`
    },
    {
      id: 'bgc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Nitrogen Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why can\'t most organisms use atmospheric $N_{2}$ directly?',
            options: [
              '$N_{2}$ is toxic to most organisms',
              '$N_{2}$ is too heavy to be absorbed',
              'The triple bond in $N_{2}$ is extremely strong and difficult to break',
              '$N_{2}$ must first be converted to $CO_{2}$'
            ],
            correctAnswer: 2,
            explanation: 'The N≡N triple bond has a bond energy of 945 kJ/mol, making it one of the strongest bonds in nature. Only specialized nitrogen-fixing organisms (with the enzyme nitrogenase) and extreme conditions (lightning, industrial processes at high temperature/pressure) can break this bond.'
          },
          {
            question: 'Which two forms of nitrogen can plants typically absorb from the soil?',
            options: [
              '$N_{2}$ and $NO_{3}^{-}$',
              '$NH_{4}^{+}$ and $NO_{3}^{-}$',
              '$NO_{2}^{-}$ and $N_{2}O$',
              '$NH_{3}$ and $N_{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Plants can absorb ammonium $(NH_{4}^{+})$ and nitrate $(NO_{3}^{-})$ from the soil through their roots. Most plants prefer nitrate, which is more mobile in soil solution. These are the "biologically available" forms of nitrogen.'
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

**Critical requirement:** Nitrogenase is **irreversibly inactivated by $O_{2}$**. Organisms protect it via:
- **Leghemoglobin** — binds $O_{2}$ in legume root nodules (gives nodules a pink color)
- **Heterocysts** — specialized $O_{2}$-free cells in cyanobacteria like *Anabaena*
- **High respiration rates** — consume $O_{2}$ quickly in the local environment

### Lightning Fixation
- Lightning provides enough energy to oxidize $N_{2}$ → NO → $NO_{2}$ → $NO_{3}^{-}$
- Contributes ~5–8% of natural nitrogen fixation

### Industrial Fixation (Haber-Bosch Process)
$$N_2 + 3H_2 \\xrightarrow{\\text{high T, P, catalyst}} 2NH_3$$
- Requires ~450°C, 200 atm pressure, iron catalyst
- Produces ~150 million tons of $NH_{3}/year$ for fertilizer
- Humans now fix MORE nitrogen than all natural processes combined`
    },
    {
      id: 'bgc3-content3',
      type: 'text' as const,
      content: `## Nitrification, Ammonification, and Denitrification 🔄

### Nitrification (Two-step oxidation)

| Step | Reaction | Bacterium |
|------|----------|-----------|
| Step 1 | $NH_{4}^{+}$ → $NO_{2}^{-}$ | *Nitrosomonas* |
| Step 2 | $NO_{2}^{-}$ → $NO_{3}^{-}$ | *Nitrobacter* |

- Both steps are **aerobic** $(require O_{2})$
- Both are **chemoautotrophs** — they use the energy from these oxidation reactions to fix $CO_{2}$
- Nitrification is important because it converts $NH_{4}^{+}$ to $NO_{3}^{-}$, the form most plants prefer

### Ammonification (Mineralization)

- Decomposers break down organic nitrogen (proteins, nucleic acids) in dead organisms and waste
- Releases **$NH_{4}^{+}$** (ammonium) back to the soil
- This "recycled" nitrogen can be re-assimilated by plants or further processed by nitrifiers

### Denitrification (Closing the Cycle)

$$NO_3^- \\rightarrow NO_2^- \\rightarrow NO \\rightarrow N_2O \\rightarrow N_2$$

- Performed by **denitrifying bacteria** (e.g., *Pseudomonas*) under **anaerobic conditions**
- Returns fixed nitrogen to the atmosphere as $N_{2}$ gas
- Occurs in waterlogged soils, sediments, and anoxic zones
- **$N_{2}O$** (nitrous oxide) released as an intermediate is a potent greenhouse gas (~300× $CO_{2}$)

> ⚠️ **AP Connection:** Denitrification is the only major biological process that REMOVES bioavailable nitrogen from ecosystems, returning it to $N_{2}$.`
    },
    {
      id: 'bgc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Nitrogen Transformations** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which process converts organic nitrogen from dead organisms back to $NH_{4}^{+}$?',
            options: ['Nitrification', 'Denitrification', 'Ammonification', 'Nitrogen fixation'],
            correctAnswer: 2,
            explanation: 'Ammonification (also called mineralization) is performed by decomposers that break down proteins and nucleic acids in dead organic matter, releasing $NH_{4}^{+}$ back to the soil for reuse by plants or conversion by nitrifying bacteria.'
          },
          {
            question: 'The Haber-Bosch process is significant because:',
            options: [
              'It was the first discovery of nitrogen gas',
              'It converts $NO_{3}^{-}$ to $N_{2}$, removing excess nitrogen',
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
            label: 'The two-step process of converting $NH_{4}^{+}$ → $NO_{2}^{-}$ → $NO_{3}^{-}$ is called ___',
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
        hint3: 'Nitrification = making nitrate $(NO_{3}^{-})$. It\'s a two-step aerobic oxidation.',
        explanation: 'Nitrogenase is the enzyme for $N_{2}$ fixation, found in bacteria like Rhizobium (in legume root nodules). Nitrification is the aerobic two-step oxidation of $NH_{4}^{+}$ to $NO_{3}^{-}$ by Nitrosomonas and Nitrobacter. Denitrification is the reverse — it reduces $NO_{3}^{-}$ back to $N_{2}$ under anaerobic conditions.'
      }
    }
  ]
};
