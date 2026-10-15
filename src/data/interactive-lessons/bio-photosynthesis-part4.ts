export const bioPhotosynthesisPart4Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps4-intro',
      type: 'text' as const,
      content: `
## Photosynthesis, Respiration, and the Carbon Cycle

**Part 4 of 7**

The AP exam often asks you to compare photosynthesis with cellular respiration, to explain how the two work together in an ecosystem, and to predict what happens when one of them is disrupted.  This part puts the two processes side by side and follows carbon as it moves between organisms and the atmosphere.

> Many textbooks also cover C4 and CAM photosynthesis; those pathways are not part of the AP Biology framework.
      `
    },
    {
      id: 'ps4-compare',
      type: 'text' as const,
      content: `
### Side by Side

| Feature | Photosynthesis | Cellular respiration |
|---------|----------------|----------------------|
| Organelle (eukaryotes) | Chloroplast | Mitochondrion (glycolysis in the cytosol) |
| Energy source | Light | Chemical energy in organic molecules |
| Carbon | CO$_2$ is **fixed** into sugar | Sugar carbon is **released** as CO$_2$ |
| Electron source | Water | Glucose (via NADH and FADH$_2$) |
| Final electron acceptor | NADP$^+$ → NADPH | O$_2$ → H$_2$O |
| Where H$^+$ accumulates | Inside the thylakoid | Intermembrane space |
| How ATP is made | ATP synthase (photophosphorylation) | ATP synthase (oxidative phosphorylation) plus substrate-level |
| Who does it | Plants, algae, cyanobacteria and other photosynthetic prokaryotes | Nearly all organisms, **including plants** |

**What they share:** both use an electron transport chain built into a membrane, both build an H$^+$ gradient, and both use ATP synthase and chemiosmosis to make ATP.  This shared machinery is part of the evidence that these processes trace back to common ancestors.

**Common misconceptions the exam targets:**
- "Plants photosynthesize instead of respiring."  Plant cells respire all the time; photosynthesis happens only in light.
- "Photosynthesis creates oxygen from nothing" or "the O$_2$ comes from CO$_2$."  The O$_2$ comes from splitting **water**.
- "Only plants photosynthesize."  Algae and many prokaryotes do too.
      `
    },
    {
      id: 'ps4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Comparing the Processes
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature is shared by photosynthesis and cellular respiration?',
            options: [
              'Both use light as their direct source of energy',
              'Both make ATP with ATP synthase powered by an H+ gradient',
              'Both release O2 as a byproduct',
              'Both fix CO2 into sugar'
            ],
            correctAnswer: 1,
            explanation: 'Both processes use an electron transport chain to build an H+ gradient across a membrane, and both use ATP synthase (chemiosmosis) to make ATP. Only photosynthesis uses light, releases O2, and fixes CO2.'
          },
          {
            question: 'A leaf disc experiment is run in the dark. The discs slowly take in O2 and release CO2. What explains this?',
            options: [
              'Photosynthesis is running backward in the dark',
              'The leaf cells are carrying out cellular respiration',
              'The Calvin cycle releases CO2 when there is no light',
              'Chlorophyll absorbs O2 when no light is available'
            ],
            correctAnswer: 1,
            explanation: 'Plant cells respire continuously, using O2 and releasing CO2. In the dark, photosynthesis stops, so respiration is the only gas exchange process and the net exchange is O2 in, CO2 out.'
          },
          {
            question: 'In photosynthesis the electrons ultimately reduce NADP+. In aerobic respiration, what do the electrons ultimately reduce?',
            options: [
              'Carbon dioxide, forming glucose',
              'Oxygen, forming water',
              'NAD+, forming NADH',
              'Water, forming oxygen'
            ],
            correctAnswer: 1,
            explanation: 'In aerobic respiration, O2 is the terminal electron acceptor at the end of the electron transport chain, and it is reduced to water. NAD+ is reduced earlier, when it picks up electrons from fuel molecules, but it passes them on to the chain.'
          }
        ]
      }
    },
    {
      id: 'ps4-carbon',
      type: 'text' as const,
      content: `
### Following Carbon Through an Ecosystem

At the highest level, the **carbon cycle** can be simplified into four processes:

| Process | Carbon moves... | Who/what |
|---------|-----------------|----------|
| **Photosynthesis** | From atmospheric CO$_2$ into organic molecules | Producers |
| **Cellular respiration** | From organic molecules back to CO$_2$ | Nearly all organisms |
| **Decomposition** | From dead organic matter back to CO$_2$ | Bacteria and fungi (decomposers) |
| **Combustion** | From organic matter and fossil fuels to CO$_2$ | Fire, burning fuels |

Energy behaves differently from carbon.  **Energy flows** through an ecosystem in one direction: light → chemical energy in producers → consumers, with heat lost at every step.  **Matter cycles**: the same carbon atoms move back and forth between the atmosphere and living things.

**Disruptions ripple outward:**
- Less light or fewer producers → less carbon fixed and less energy available to every trophic level above them.
- More combustion than photosynthesis can absorb → atmospheric CO$_2$ rises.
- Loss of decomposers → carbon stays locked in dead matter and nutrients stop returning to the soil.
      `
    },
    {
      id: 'ps4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Carbon Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'Which process moves carbon from the atmosphere into living organisms?',
            options: [
              'Cellular respiration',
              'Photosynthesis',
              'Combustion',
              'Decomposition'
            ],
            correctAnswer: 1,
            explanation: 'Photosynthesis fixes atmospheric CO2 into organic molecules. Respiration, decomposition, and combustion all return carbon to the atmosphere as CO2.'
          },
          {
            question: 'Why is energy said to flow through an ecosystem while carbon cycles?',
            options: [
              'Carbon is lost as heat at each step, while energy is reused',
              'Energy enters as light and leaves as heat, but carbon atoms are reused',
              'Both are recycled completely by decomposers',
              'Energy is stored in CO2 and released by photosynthesis'
            ],
            correctAnswer: 1,
            explanation: 'Energy enters ecosystems as light, is stored in chemical bonds, and is lost as heat at each transfer, so it must be continuously resupplied. Carbon atoms are not lost; they move between the atmosphere and organisms through photosynthesis, respiration, decomposition, and combustion.'
          }
        ]
      }
    },
    {
      id: 'ps4-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Process
      `,
      exercise: {
        questions: [
          {
            question: 'Uses light energy and fixes CO2 into sugar:',
            options: ['Photosynthesis', 'Cellular respiration', 'Decomposition', 'Combustion'],
            correctAnswer: 'Photosynthesis'
          },
          {
            question: 'Runs in plant cells both day and night:',
            options: ['Photosynthesis', 'Cellular respiration', 'The light reactions', 'The Calvin cycle'],
            correctAnswer: 'Cellular respiration'
          },
          {
            question: 'Returns carbon from dead organisms to the atmosphere:',
            options: ['Photosynthesis', 'Carbon fixation', 'Decomposition', 'Photophosphorylation'],
            correctAnswer: 'Decomposition'
          },
          {
            question: 'Uses O2 as the terminal electron acceptor:',
            options: ['Aerobic respiration', 'Photosynthesis', 'Fermentation', 'The Calvin cycle'],
            correctAnswer: 'Aerobic respiration'
          }
        ]
      }
    },
    {
      id: 'ps4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Putting It Together
      `,
      exercise: {
        questions: [
          {
            question: 'A sealed, lit terrarium contains plants and snails. The plants are removed and the terrarium stays sealed. What happens to the gases over the next days?',
            options: [
              'O2 rises and CO2 falls, because the snails photosynthesize',
              'O2 falls and CO2 rises, because only respiration continues',
              'Both stay constant, because the terrarium is sealed',
              'Both rise, because the snails produce O2 and CO2'
            ],
            correctAnswer: 1,
            explanation: 'Without plants, nothing in the terrarium fixes CO2 or releases O2. The snails (and any microbes) keep respiring, consuming O2 and releasing CO2, so O2 falls and CO2 rises.'
          },
          {
            question: 'Large areas of forest are cleared and burned. Which combined effect on the carbon cycle is most likely?',
            options: [
              'Less CO2 is fixed by photosynthesis and more is released by combustion',
              'More CO2 is fixed, because burning adds nutrients to the soil',
              'Decomposition stops, so atmospheric CO2 falls',
              'Carbon stops cycling because the trees are gone'
            ],
            correctAnswer: 0,
            explanation: 'Removing forest removes producers that fix CO2, and burning releases the carbon stored in their tissues as CO2. Both changes raise atmospheric CO2. Decomposers and other organisms keep cycling carbon.'
          }
        ]
      }
    }
  ]
};
