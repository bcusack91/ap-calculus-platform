export const bioPhotosynthesisPart6Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Photosynthesis

**Part 6 of 7**

This workshop applies photosynthesis concepts to experimental scenarios and data interpretation problems commonly tested on the AP Biology exam.
      `
    },
    {
      id: 'ps6-scenario1',
      type: 'text' as const,
      content: `
### Scenario 1: Hill Reaction Experiment

In 1937, Robert Hill demonstrated that isolated chloroplasts could produce O$_2$ in the presence of an artificial electron acceptor (like DCPIP, a dye that changes from blue to colorless when reduced), even without CO$_2$.

**Experimental setup:**
- Tube A: Chloroplasts + DCPIP + light → DCPIP decolorizes; O$_2$ produced
- Tube B: Chloroplasts + DCPIP + dark → No color change; no O$_2$
- Tube C: Boiled chloroplasts + DCPIP + light → No color change; no O$_2$
- Tube D: Chloroplasts + no DCPIP + light → Minimal O$_2$ (DCPIP is needed as electron acceptor)

This experiment demonstrated that:
1. The light reactions can occur independently of the Calvin cycle
2. O$_2$ comes from water splitting, not from CO$_2$
3. Light and functional proteins are both required
      `
    },
    {
      id: 'ps6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Scenario 1 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'In the Hill reaction experiment, why does Tube C (boiled chloroplasts) not produce O2 or decolorize DCPIP?',
            options: [
              'Boiling removes dissolved CO2, which the light reactions need',
              'Boiling denatures the photosystem proteins and light-reaction enzymes',
              'Boiling destroys all the chlorophyll, so no light is absorbed',
              'Boiling alters DCPIP so it can no longer accept electrons'
            ],
            correctAnswer: 1,
            explanation: 'Boiling denatures proteins, including the photosystem complexes, the electron transport chain proteins, and the proteins that split water at photosystem II. Without functional proteins, the light reactions cannot proceed, even though chlorophyll pigments may still be present.'
          },
          {
            question: 'The Hill reaction showed that O2 production does not require CO2. What does this tell us about the source of O2 in photosynthesis?',
            options: [
              'O2 comes from CO2 stored earlier in the leaf',
              'O2 comes from splitting water, not from CO2',
              'O2 comes from decarboxylation in the Calvin cycle',
              'O2 comes from the DCPIP dye as it is reduced'
            ],
            correctAnswer: 1,
            explanation: 'Since O2 is produced without CO2, the oxygen cannot come from CO2. Instead, it comes from the photolysis (splitting) of water at PSII. This was later confirmed by isotope tracing experiments using 18-O labeled water.'
          }
        ]
      }
    },
    {
      id: 'ps6-scenario2',
      type: 'text' as const,
      content: `
### Scenario 2: Tracing Carbon with a Radioactive Label

In a classic experiment, researchers gave illuminated algae a short pulse of CO$_2$ containing radioactive carbon ($^{14}\\text{C}$), then killed samples at different times and identified which compounds were radioactive:

| Time after the $^{14}\\text{CO}_2$ pulse | Where the label was found |
|------------------------|---------------------------|
| 5 seconds | Almost entirely in one 3-carbon compound |
| 30 seconds | In several sugar phosphates, including the CO$_2$ acceptor molecule |
| 5 minutes | In glucose, amino acids, and lipids |

The experiment did not require knowing the names of the compounds to draw its main conclusions: carbon from CO$_2$ is fixed first into a small organic molecule, then built into sugars, and finally into the cell's other macromolecules.
      `
    },
    {
      id: 'ps6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Scenario 2 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'Why did the label appear in a single 3-carbon compound after only 5 seconds?',
            options: [
              'It is the most abundant molecule in the chloroplast',
              'It is the first stable product formed when CO2 is fixed',
              'It absorbs radioactive carbon directly from the atmosphere',
              'It is made from the label by the light reactions'
            ],
            correctAnswer: 1,
            explanation: 'The compound that is labeled first, after the shortest exposure, must be the first stable product of carbon fixation. Compounds labeled later are made from it. Abundance alone would not explain the timing, and the light reactions do not fix carbon.'
          },
          {
            question: 'The light is switched off while 14CO2 is still supplied. What happens to the amount of the CO2 acceptor molecule in the stroma?',
            options: [
              'It rises, because CO2 can no longer be fixed without light',
              'It falls, because it is consumed but cannot be remade without ATP',
              'It stays constant, because the Calvin cycle does not need light',
              'It rises, because ATP is no longer being made'
            ],
            correctAnswer: 1,
            explanation: 'Fixing CO2 uses up the acceptor, and regenerating it requires ATP from the light reactions. In the dark, fixation can continue briefly while regeneration stops, so the acceptor is consumed and not replaced, and its level falls.'
          }
        ]
      }
    },
    {
      id: 'ps6-scenario3',
      type: 'text' as const,
      content: `
### Scenario 3: Net Photosynthesis and Light Intensity

A student measures the **net** rate of O$_2$ production by a leaf at different light intensities. Net rate = O$_2$ released by photosynthesis − O$_2$ used by respiration.

| Light intensity (relative units) | Net O$_2$ production ($\\mu$mol/h) |
|------|------|
| 0 | -5 |
| 50 | 0 |
| 100 | 6 |
| 200 | 14 |
| 400 | 20 |
| 800 | 21 |
      `
    },
    {
      id: 'ps6-quiz3',
      type: 'multiple-choice' as const,
      content: `
### Scenario 3 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the net O2 production negative at a light intensity of 0?',
            options: [
              'Photosynthesis runs in reverse in the dark and consumes O2',
              'Cellular respiration keeps using O2, and no photosynthesis offsets it',
              'Stored O2 is pumped back into the chloroplasts at night',
              'The equipment cannot read O2 unless some light is present'
            ],
            correctAnswer: 1,
            explanation: 'In the dark, photosynthesis stops but cellular respiration continues, so the leaf consumes O2. The net rate is therefore negative: here, 5 umol/h of O2 is used by respiration.'
          },
          {
            question: 'Between 400 and 800 light units the net rate barely changes. Which conclusion is best supported?',
            options: [
              'A factor other than light now limits the rate',
              'Respiration stops completely at high light',
              'The chlorophyll has been destroyed by the light',
              'The leaf is now at its compensation point'
            ],
            correctAnswer: 0,
            explanation: 'When doubling the light hardly raises the rate, light is no longer limiting; another factor such as CO2 supply or temperature (enzyme activity) is. The compensation point is where net O2 production is zero, which in this data set is about 50 units.'
          },
          {
            question: 'Using the data, what is the gross rate of O2 production by photosynthesis at a light intensity of 200, assuming respiration stays at 5 umol/h?',
            options: [
              '9 umol/h',
              '14 umol/h',
              '19 umol/h',
              '70 umol/h'
            ],
            correctAnswer: 2,
            explanation: 'Gross photosynthesis = net O2 production + O2 used by respiration = 14 + 5 = 19 umol/h. Using the net value alone (14) ignores the O2 consumed by respiration.'
          }
        ]
      }
    },
    {
      id: 'ps6-input',
      type: 'input-boxes' as const,
      content: `
### Apply Your Knowledge
      `,
      exercise: {
        questions: [
          {
            question: 'In Scenario 3, the light intensity at which net O2 production is zero (the compensation point):',
            answer: '50',
            acceptableAnswers: ['50', 'fifty', '50 units'],
            placeholder: 'e.g. 100'
          },
          {
            question: 'If CO2 is suddenly removed while the light stays on, the level of the CO2 acceptor molecule will (increase/decrease):',
            answer: 'increase',
            acceptableAnswers: ['increase', 'Increase', 'go up', 'rise', 'accumulate'],
            placeholder: 'e.g. decrease'
          }
        ]
      }
    },
    {
      id: 'ps6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Workshop
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher adds DCMU, a herbicide that blocks electrons from leaving PSII, to illuminated chloroplasts. What will happen?',
            options: [
              'O2 production continues but NADPH production stops',
              'O2 evolution and NADPH production both stop',
              'The Calvin cycle speeds up to use stored NADPH',
              'ATP synthase reverses direction and pumps H+ out'
            ],
            correctAnswer: 1,
            explanation: 'If electrons cannot leave PSII, PSII cannot accept new electrons from water, so water splitting and O2 release stop. No electrons reach PSI or NADP+, so no NADPH is made, and the electron transport chain stops moving H+, so ATP production falls. The Calvin cycle then loses both ATP and NADPH.'
          }
        ]
      }
    }
  ]
};