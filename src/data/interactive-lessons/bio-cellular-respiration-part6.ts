export const bioCellRespirationPart6Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Cellular Respiration

**Part 6 of 7**

This workshop applies concepts from Parts 1-5 to experimental scenarios and data-analysis problems commonly seen on the AP Biology exam.  Work through each scenario carefully — these question types test higher-order thinking, not just memorization.
      `
    },
    {
      id: 'cr6-scenario1',
      type: 'text' as const,
      content: `
### Scenario 1: Respirometer Experiment

A student uses a **respirometer** to measure the rate of cellular respiration in germinating vs. non-germinating pea seeds at two temperatures (10 °C and 25 °C).  The respirometer measures **O\\(_2\\) consumption** by tracking the movement of a fluid indicator in a sealed system.  KOH is included to absorb any CO\\(_2\\) produced, so the only gas change measured is O\\(_2\\) uptake.

| Condition | O\\(_2\\) consumed (mL/min) |
|-----------|--------------------------|
| Germinating seeds, 25 °C | 0.21 |
| Germinating seeds, 10 °C | 0.10 |
| Non-germinating seeds, 25 °C | 0.02 |
| Non-germinating seeds, 10 °C | 0.01 |

**Key observations:**
- Germinating seeds consume far more O\\(_2\\) than non-germinating seeds
- Higher temperature increases O\\(_2\\) consumption for both conditions
      `
    },
    {
      id: 'cr6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Scenario 1 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'Why do germinating seeds consume more O2 than non-germinating seeds?',
            options: [
              'Germinating seeds are photosynthesizing',
              'Germinating seeds have higher metabolic rates — they are actively growing, dividing, and building new structures, requiring more ATP and therefore more aerobic respiration',
              'Non-germinating seeds do not contain mitochondria',
              'Germinating seeds produce more CO2, which displaces O2'
            ],
            correctAnswer: 1,
            explanation: 'Germinating seeds are metabolically active — mobilizing stored energy, synthesizing new proteins, and undergoing cell division. This requires much more ATP, which drives increased aerobic respiration and O2 consumption.'
          },
          {
            question: 'Why does increasing temperature from 10 °C to 25 °C increase O2 consumption?',
            options: [
              'Higher temperature creates more O2 through thermal decomposition of water',
              'Higher temperature increases the kinetic energy of molecules, increasing the rate of enzyme-catalyzed metabolic reactions',
              'Higher temperature decreases enzyme affinity, causing more O2 to bind',
              'Higher temperature expands the gas, making more O2 available'
            ],
            correctAnswer: 1,
            explanation: 'Temperature affects enzyme kinetics. Within the normal range, higher temperature increases molecular kinetic energy, leading to more frequent enzyme-substrate collisions and faster reaction rates. This increases the overall rate of cellular respiration.'
          },
          {
            question: 'Why is KOH included in the respirometer?',
            options: [
              'To provide additional O2 for respiration',
              'To absorb CO2 so that the only gas change measured is O2 consumption',
              'To prevent fermentation',
              'To neutralize the acids produced by respiration'
            ],
            correctAnswer: 1,
            explanation: 'KOH absorbs CO2 produced by respiration. Without KOH, the CO2 released would partially offset the volume decrease from O2 consumption, making measurement inaccurate. With KOH absorbing CO2, any gas volume change reflects only O2 uptake.'
          }
        ]
      }
    },
    {
      id: 'cr6-scenario2',
      type: 'text' as const,
      content: `
### Scenario 2: Metabolic Poisons

A researcher treats four groups of cells with different metabolic poisons and measures their effects:

| Poison | Target | Observation |
|--------|--------|-------------|
| **Fluoroacetate** | Aconitase (step 2 of citric acid cycle) | Citrate accumulates; NADH production from cycle drops |
| **Rotenone** | Complex I of ETC | NADH accumulates; proton gradient weakens; ATP output drops sharply |
| **Oligomycin** | ATP synthase (blocks proton channel) | Proton gradient builds to maximum; ATP production stops; ETC eventually slows |
| **DNP (dinitrophenol)** | None — creates proton leak in membrane | Proton gradient collapses; ETC runs at maximum rate; energy released as heat; ATP drops |
      `
    },
    {
      id: 'cr6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Scenario 2 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'Oligomycin blocks the proton channel of ATP synthase. Why does the ETC eventually slow down when oligomycin is added?',
            options: [
              'The ETC enzymes are directly inhibited by oligomycin',
              'Without proton flow through ATP synthase, the gradient becomes so large that Complexes I, III, and IV cannot pump more protons against it',
              'Oligomycin destroys the inner mitochondrial membrane',
              'NADH is depleted'
            ],
            correctAnswer: 1,
            explanation: 'Oligomycin blocks the only significant route for protons to return to the matrix. The gradient builds up until the back-pressure (electrochemical force opposing further pumping) equals the energy available from electron transfer, at which point the complexes can no longer pump protons and the chain stalls.'
          },
          {
            question: 'DNP (an uncoupler) causes cells to consume oxygen at an accelerated rate and generate excessive heat. Why?',
            options: [
              'DNP activates Complex IV to work faster',
              'Without the proton gradient to restrain the chain, electron flow and O2 consumption increase; but since protons bypass ATP synthase, the energy is released as heat instead of being captured as ATP',
              'DNP converts ATP directly into heat',
              'DNP stimulates glycolysis and fermentation simultaneously'
            ],
            correctAnswer: 1,
            explanation: 'Normally, the proton gradient acts as back-pressure on the ETC. DNP dissipates this gradient by allowing protons to leak freely. Without back-pressure, the ETC runs unrestricted, consuming O2 rapidly. Since protons bypass ATP synthase, the free energy is released as thermal energy (heat) rather than driving ATP synthesis.'
          }
        ]
      }
    },
    {
      id: 'cr6-scenario3',
      type: 'text' as const,
      content: `
### Scenario 3: ATP Accounting Challenge

Complete the ATP accounting table for the aerobic oxidation of one glucose molecule:

| Stage | ATP by SLP | NADH | FADH\\(_2\\) | ATP from e\\(^-\\) carriers* |
|-------|-----------|------|------------|---------------------------|
| Glycolysis | 2 | 2 | 0 | 2 × 2.5 = 5** |
| Pyruvate oxidation | 0 | 2 | 0 | 2 × 2.5 = 5 |
| Citric acid cycle | 2 | 6 | 2 | (6 × 2.5) + (2 × 1.5) = 18 |
| **Total** | **4** | **10** | **2** | **28** |

*Using 2.5 ATP per NADH and 1.5 ATP per FADH\\(_2\\)

**The cytoplasmic NADH from glycolysis may yield only 1.5 ATP each if transported via the glycerol-3-phosphate shuttle (instead of 2.5 via the malate-aspartate shuttle), reducing the total to 30 ATP.

**Grand total: 30-32 ATP per glucose** (4 by SLP + 26-28 by oxidative phosphorylation)

> **AP Exam Note:** The AP exam uses the approximate value of 30-32 ATP per glucose.  Older textbooks cite 36-38, but this figure has been revised downward based on more accurate measurements of the H+/ATP ratio and shuttle system costs.
      `
    },
    {
      id: 'cr6-quiz3',
      type: 'multiple-choice' as const,
      content: `
### ATP Accounting Questions
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the total ATP yield from glucose oxidation described as an approximation (30-32) rather than an exact number?',
            options: [
              'Because some ATP is immediately used by the cell',
              'Because the number of protons needed per ATP and the shuttle used for cytoplasmic NADH both introduce variability',
              'Because cells always perform fermentation simultaneously',
              'Because some glucose molecules are only partially oxidized'
            ],
            correctAnswer: 1,
            explanation: 'Two factors create variability: (1) the H+/ATP ratio may not be exactly 4:1, and (2) cytoplasmic NADH from glycolysis must be transported into mitochondria via shuttle systems — the malate-aspartate shuttle preserves 2.5 ATP/NADH while the glycerol-3-phosphate shuttle yields only 1.5 ATP/NADH.'
          },
          {
            question: 'Approximately what percentage of the ATP from aerobic respiration comes from oxidative phosphorylation?',
            options: [
              'About 10%',
              'About 50%',
              'About 75%',
              'About 85-90%'
            ],
            correctAnswer: 3,
            explanation: 'Oxidative phosphorylation produces about 26-28 ATP out of 30-32 total, which is approximately 85-90%. Only 4 ATP are produced by substrate-level phosphorylation (2 in glycolysis, 2 in the citric acid cycle).'
          }
        ]
      }
    },
    {
      id: 'cr6-input',
      type: 'input-boxes' as const,
      content: `
### Apply Your Knowledge
      `,
      exercise: {
        questions: [
          {
            question: 'How many total NADH molecules are produced from one glucose (all stages combined)?',
            answer: '10',
            acceptableAnswers: ['10', 'ten', 'Ten'],
            placeholder: 'e.g. 6'
          },
          {
            question: 'The poison that uncouples the ETC from ATP synthesis by creating proton leaks (abbreviation):',
            answer: 'DNP',
            acceptableAnswers: ['DNP', 'dnp', 'dinitrophenol', 'Dinitrophenol', '2,4-dinitrophenol'],
            placeholder: 'e.g. KCN'
          }
        ]
      }
    },
    {
      id: 'cr6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Workshop Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A student compares ATP production in muscle cells under aerobic and anaerobic conditions. Which statement is correct?',
            options: [
              'Anaerobic conditions produce the same amount of ATP as aerobic conditions, just more slowly',
              'Aerobic conditions produce approximately 15 times more ATP per glucose than anaerobic conditions',
              'Anaerobic conditions produce more ATP because fermentation is more efficient',
              'Both conditions produce exactly 36 ATP per glucose'
            ],
            correctAnswer: 1,
            explanation: 'Aerobic respiration produces ~30-32 ATP per glucose, while anaerobic glycolysis + fermentation produces only 2 ATP per glucose (net from glycolysis). That is approximately a 15:1 ratio, demonstrating the dramatic efficiency advantage of aerobic respiration.'
          }
        ]
      }
    }
  ]
};