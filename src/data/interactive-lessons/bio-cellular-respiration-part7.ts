export const bioCellRespirationPart7Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr7-intro',
      type: 'text' as const,
      content: `
## AP Review — Cellular Respiration

**Part 7 of 7**

This final section presents AP-exam-style questions that integrate concepts from across all stages of cellular respiration.  These questions emphasize experimental design, data interpretation, and conceptual connections — the skills most tested on the AP Biology exam.
      `
    },
    {
      id: 'cr7-review1',
      type: 'text' as const,
      content: `
### Comprehensive Summary

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + \\sim30\\text{ADP} + \\sim30\\text{P}_i \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\sim30\\text{ATP}$$

**Critical connections to remember:**

1. **Energy flows through carriers:** Glucose $\\rightarrow$ NADH/FADH$_2$ $\\rightarrow$ proton gradient $\\rightarrow$ ATP
2. **Carbon tracking:** 6C glucose $\\rightarrow$ 2 × 3C pyruvate $\\rightarrow$ 2 × 2C acetyl-CoA + 2 CO$_2$ $\\rightarrow$ 4 CO$_2$ (from cycle) = 6 CO$_2$ total
3. **Oxygen role:** O$_2$ is ONLY used at Complex IV as the final electron acceptor — it does not participate in any earlier step
4. **Water production:** H$_2$O is formed at Complex IV when O$_2$ accepts electrons and combines with H$^+$
5. **Coupling:** The ETC does not make ATP directly — it builds the proton gradient that ATP synthase uses
      `
    },
    {
      id: 'cr7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher uses radioactively labeled oxygen (18-O) in the glucose molecules fed to cells. In which product will the 18-O label appear?',
            options: [
              'H2O only',
              'CO2 only',
              'Both CO2 and H2O',
              'Neither — the oxygen in glucose is not released as O2'
            ],
            correctAnswer: 2,
            explanation: 'The oxygen atoms from glucose (C6H12O6) end up in both CO2 (during decarboxylation reactions) and H2O (during various dehydration and hydrolysis reactions). If the 18-O were in the O2 breathed in, it would appear primarily in H2O (formed at Complex IV).'
          },
          {
            question: 'Brown adipose tissue in hibernating mammals contains high concentrations of a protein called thermogenin (UCP1). This protein creates a proton channel in the inner mitochondrial membrane that bypasses ATP synthase. What is the physiological purpose of thermogenin?',
            options: [
              'To increase ATP production during hibernation',
              'To generate heat by dissipating the proton gradient without producing ATP (non-shivering thermogenesis)',
              'To store excess protons for later use',
              'To block the electron transport chain during sleep'
            ],
            correctAnswer: 1,
            explanation: 'Thermogenin (UCP1) uncouples electron transport from ATP synthesis — similar to DNP. Protons flow through thermogenin instead of ATP synthase, and the energy of the gradient is released as heat. This "non-shivering thermogenesis" helps hibernating animals maintain body temperature.'
          },
          {
            question: 'In a cell with fully functioning mitochondria, which of the following would directly cause an increase in the rate of glycolysis?',
            options: [
              'An increase in ATP concentration',
              'An increase in citrate concentration',
              'An increase in AMP concentration',
              'An increase in NADH concentration'
            ],
            correctAnswer: 2,
            explanation: 'AMP allosterically activates phosphofructokinase (PFK), the primary regulatory enzyme of glycolysis. High AMP signals that the cell is low on energy and needs to increase glucose catabolism. ATP, citrate, and NADH all inhibit glycolysis at various points.'
          }
        ]
      }
    },
    {
      id: 'cr7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'The antibiotic antimycin A blocks electron flow between Complex III and cytochrome c. Which of the following would you observe in cells treated with antimycin A?',
            options: [
              'Increased ATP production from chemiosmosis',
              'Accumulation of reduced ubiquinone (QH2) and decreased O2 consumption',
              'Increased NADH oxidation at Complex I',
              'Accelerated citric acid cycle activity'
            ],
            correctAnswer: 1,
            explanation: 'Blocking electron flow at Complex III causes electrons to back up. Reduced ubiquinone (QH2) accumulates because it cannot donate electrons to Complex III. No electrons reach Complex IV, so O2 consumption drops. NADH accumulates (cannot be oxidized), slowing the citric acid cycle.'
          },
          {
            question: 'Skeletal muscle cells can function under both aerobic and anaerobic conditions. During a sprint, lactate levels in the blood rise. Once the sprint ends and oxygen becomes available again, what happens to the accumulated lactate?',
            options: [
              'It is excreted as waste and cannot be reused',
              'It is converted back to pyruvate (primarily in the liver) and either oxidized via aerobic respiration or used to synthesize glucose (gluconeogenesis)',
              'It is directly converted to ATP in the muscle cells',
              'It is converted to ethanol and exhaled'
            ],
            correctAnswer: 1,
            explanation: 'Lactate is transported to the liver via the blood (the Cori cycle). There, lactate dehydrogenase converts lactate back to pyruvate. The pyruvate can be oxidized aerobically or used in gluconeogenesis to regenerate glucose, which can return to the muscles.'
          },
          {
            question: 'A mutation in the gene encoding cytochrome c oxidase (Complex IV) reduces its activity by 50%. How would this affect the cell?',
            options: [
              'Glycolysis would become twice as efficient to compensate',
              'The proton gradient would be partially reduced, leading to decreased ATP production and potential increase in anaerobic metabolism',
              'The citric acid cycle would speed up to compensate',
              'FADH2 production would increase to bypass Complex IV'
            ],
            correctAnswer: 1,
            explanation: 'Reduced Complex IV activity means fewer electrons can be passed to O2, slowing the entire ETC. Less proton pumping leads to a weaker gradient and less ATP from chemiosmosis. The cell may upregulate glycolysis and fermentation to partially compensate for the ATP deficit.'
          }
        ]
      }
    },
    {
      id: 'cr7-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Comprehensive Matching
      `,
      exercise: {
        questions: [
          {
            question: 'Glycolysis takes place in the:',
            options: ['Cytoplasm', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Intermembrane space'],
            correctAnswer: 'Cytoplasm'
          },
          {
            question: 'The molecule that directly provides energy for most cellular work:',
            options: ['Glucose', 'NADH', 'ATP', 'Oxygen'],
            correctAnswer: 'ATP'
          },
          {
            question: 'The process that regenerates NAD+ under anaerobic conditions:',
            options: ['Citric acid cycle', 'Oxidative phosphorylation', 'Fermentation', 'Pyruvate oxidation'],
            correctAnswer: 'Fermentation'
          },
          {
            question: 'The coenzyme that carries high-energy electrons from the citric acid cycle to the ETC:',
            options: ['ATP', 'ADP', 'NADH', 'Glucose'],
            correctAnswer: 'NADH'
          },
          {
            question: 'The organelle where the majority of ATP is produced:',
            options: ['Ribosome', 'Nucleus', 'Mitochondrion', 'Chloroplast'],
            correctAnswer: 'Mitochondrion'
          }
        ]
      }
    },
    {
      id: 'cr7-input',
      type: 'input-boxes' as const,
      content: `
### Final Review — Key Numbers
      `,
      exercise: {
        questions: [
          {
            question: 'Total CO2 molecules released per glucose during all stages of aerobic respiration:',
            answer: '6',
            acceptableAnswers: ['6', 'six', 'Six'],
            placeholder: 'e.g. 4'
          },
          {
            question: 'Net ATP produced per glucose from glycolysis alone:',
            answer: '2',
            acceptableAnswers: ['2', 'two', 'Two'],
            placeholder: 'e.g. 4'
          },
          {
            question: 'The approximate total ATP yield per glucose from complete aerobic respiration (modern estimate):',
            answer: '30-32',
            acceptableAnswers: ['30-32', '30', '32', '30 to 32', 'about 30', 'about 32'],
            placeholder: 'e.g. 10'
          }
        ]
      }
    },
    {
      id: 'cr7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why organisms that perform aerobic respiration have a significant evolutionary advantage over obligate anaerobes in oxygen-rich environments?',
            options: [
              'Aerobic organisms can absorb more nutrients',
              'Aerobic respiration extracts approximately 15 times more ATP per glucose, allowing more energy for growth, reproduction, and competition',
              'Obligate anaerobes cannot perform glycolysis',
              'Aerobic organisms do not need glucose'
            ],
            correctAnswer: 1,
            explanation: 'Aerobic respiration produces ~30-32 ATP per glucose vs. 2 ATP from glycolysis/fermentation — roughly 15 times more. This enormous energy advantage allows aerobic organisms to support larger body sizes, more complex tissues, and higher metabolic rates.'
          },
          {
            question: 'A cell is producing ATP, consuming O2, and releasing CO2. Suddenly, the O2 supply is cut off. Place the following events in the correct order: (1) ETC stops, (2) NADH accumulates, (3) Citric acid cycle slows, (4) Fermentation begins',
            options: [
              '4, 3, 2, 1',
              '1, 2, 3, 4',
              '3, 1, 2, 4',
              '2, 1, 4, 3'
            ],
            correctAnswer: 1,
            explanation: 'Without O2, Complex IV cannot pass electrons to the final acceptor, so the ETC stops first (1). NADH cannot be reoxidized, so it accumulates (2). Without NAD+, the dehydrogenase reactions of the citric acid cycle cannot proceed, so the cycle slows (3). The cell switches to fermentation to regenerate NAD+ and sustain glycolysis (4).'
          }
        ]
      }
    }
  ]
};