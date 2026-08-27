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
              'Boiling removes CO2 from the solution',
              'Boiling denatures the photosystem proteins and enzymes required for the light reactions',
              'Boiling destroys the chlorophyll pigments completely (they photobleach)',
              'Boiling prevents DCPIP from accepting electrons'
            ],
            correctAnswer: 1,
            explanation: 'Boiling denatures proteins, including the photosystem complexes, electron transport chain components, and the oxygen-evolving complex. Without functional proteins, the light reactions cannot proceed, even though chlorophyll pigments may still be present.'
          },
          {
            question: 'The Hill reaction showed that O2 production does not require CO2. What does this tell us about the source of O2 in photosynthesis?',
            options: [
              'O2 comes from the breakdown of CO2',
              'O2 comes from the splitting of water molecules, which does not require CO2',
              'O2 comes from decarboxylation reactions',
              'O2 is released from the DCPIP dye'
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
### Scenario 2: The Lollipop Experiment (Calvin and Benson)

Melvin Calvin and Andrew Benson used the "lollipop" apparatus and $^{14}\\text{C}$-labeled CO$_2$ to trace the path of carbon through photosynthesis:

1. Algae (*Chlorella*) were grown in a thin, flat flask illuminated continuously
2. $^{14}\\text{CO}_2$ was injected into the culture
3. At various time intervals (5 seconds, 30 seconds, 5 minutes), samples were killed in hot methanol
4. Radioactive compounds were separated by **two-dimensional paper chromatography** and identified by autoradiography

**Results:**
- After **5 seconds:** Nearly all $^{14}\\text{C}$ was in **3-PGA** (confirming it as the first stable product)
- After **30 seconds:** $^{14}\\text{C}$ appeared in G3P, RuBP, and several sugar phosphates
- After **5 minutes:** $^{14}\\text{C}$ was found in glucose, amino acids, and lipids

This experiment mapped out the complete Calvin cycle and earned Calvin the 1961 Nobel Prize.
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
            question: 'In the Calvin-Benson experiment, why was 3-PGA the first molecule to become radioactively labeled?',
            options: [
              'Because 3-PGA is the most abundant molecule in the chloroplast',
              'Because 3-PGA is the first stable product of CO2 fixation by RuBisCO',
              'Because 3-PGA directly absorbs 14C from the atmosphere',
              'Because RuBisCO converts 3-PGA into RuBP'
            ],
            correctAnswer: 1,
            explanation: 'When 14CO2 enters the Calvin cycle, RuBisCO attaches the 14C to RuBP (5C), forming an unstable 6C intermediate that immediately splits into two 3-PGA molecules. Since this is the first stable product, 3-PGA is the first to contain the radioactive label.'
          },
          {
            question: 'If the light is suddenly turned OFF while 14CO2 is being supplied, what would happen to the levels of 3-PGA and RuBP?',
            options: [
              'Both would increase',
              '3-PGA would increase (cannot be reduced without NADPH); RuBP would decrease (consumed but not regenerated)',
              'Both would decrease',
              '3-PGA would decrease; RuBP would increase'
            ],
            correctAnswer: 1,
            explanation: 'Without light, the light reactions stop producing ATP and NADPH. 3-PGA cannot be reduced to G3P (needs NADPH and ATP), so it accumulates. RuBP cannot be regenerated (needs ATP), so it is consumed but not replaced, and its level drops.'
          }
        ]
      }
    },
    {
      id: 'ps6-scenario3',
      type: 'text' as const,
      content: `
### Scenario 3: Comparing C3 and C4 Productivity

Researchers measure net photosynthesis rates in a C3 grass and a C4 grass under varying temperatures:

| Temperature (°C) | C3 Net Photosynthesis ($\\mu$mol CO$_2$/m$^2$/s) | C4 Net Photosynthesis ($\\mu$mol CO$_2$/m$^2$/s) |
|------|------|------|
| 10 | 12 | 5 |
| 20 | 22 | 18 |
| 30 | 18 | 30 |
| 35 | 10 | 35 |
| 40 | 3 | 28 |
| 45 | 0 | 8 |
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
            question: 'At 30 °C, C3 net photosynthesis drops from its peak, but C4 continues to increase. What explains this difference?',
            options: [
              'C4 plants have more chloroplasts',
              'C3 plants experience increasing photorespiration at higher temperatures, while C4 plants concentrate CO2 around RuBisCO, avoiding this problem',
              'C4 plants use a completely different form of RuBisCO',
              'C3 plants cannot absorb light at high temperatures'
            ],
            correctAnswer: 1,
            explanation: 'At higher temperatures, RuBisCO in C3 plants increasingly fixes O2 instead of CO2 (photorespiration), reducing net carbon gain. C4 plants pump CO2 into bundle-sheath cells via PEP carboxylase, maintaining high CO2 around RuBisCO and virtually eliminating photorespiration.'
          },
          {
            question: 'At 10 °C, the C3 grass outperforms the C4 grass. Why?',
            options: [
              'C3 plants have antifreeze proteins',
              'At low temperatures, photorespiration is minimal (C4 advantage disappears), and the extra ATP cost of the C4 pathway is wasteful',
              'C4 plants cannot perform photosynthesis below 15 °C',
              'The Calvin cycle only works in C3 plants at low temperatures'
            ],
            correctAnswer: 1,
            explanation: 'At cool temperatures, the ratio of CO2:O2 fixation by RuBisCO favors CO2, so photorespiration is low in C3 plants. The C4 carbon-concentrating mechanism (which costs 2 extra ATP per CO2) becomes an unnecessary expense, putting C4 plants at a net energy disadvantage.'
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
            question: 'If light is turned off, 3-PGA levels will (increase/decrease):',
            answer: 'increase',
            acceptableAnswers: ['increase', 'Increase', 'go up', 'rise'],
            placeholder: 'e.g. stay the same'
          },
          {
            question: 'If CO2 is suddenly removed, RuBP levels will (increase/decrease):',
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
            question: 'A researcher adds DCMU (a herbicide that blocks electron flow from PSII to plastoquinone) to illuminated chloroplasts. What will happen?',
            options: [
              'O2 production continues but NADPH production stops',
              'Both O2 production and NADPH production stop; the proton gradient collapses; no ATP or NADPH for the Calvin cycle',
              'The Calvin cycle speeds up to compensate',
              'Cyclic electron flow around PSI stops'
            ],
            correctAnswer: 1,
            explanation: 'DCMU blocks electron flow from PSII. Without electron flow, water splitting stops (no O2), no electrons reach PSI or NADP+ (no NADPH), and proton pumping by cytochrome b6f stops (reduced ATP). The Calvin cycle loses both ATP and NADPH and shuts down.'
          }
        ]
      }
    }
  ]
};