export const bioPhotosynthesisPart7Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps7-intro',
      type: 'text' as const,
      content: `
## AP Review — Photosynthesis

**Part 7 of 7**

This final section presents comprehensive AP-exam-style questions integrating concepts from all parts of the photosynthesis unit.
      `
    },
    {
      id: 'ps7-summary',
      type: 'text' as const,
      content: `
### Master Summary

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

**Light Reactions (thylakoid membrane):**
- Inputs: H$_2$O, light, NADP$^+$, ADP + P$_i$
- Outputs: O$_2$, ATP, NADPH
- Key components: PSII, an electron transport chain, PSI, ATP synthase

**Calvin Cycle (stroma):**
- Inputs: CO$_2$, ATP, NADPH
- Outputs: a 3-carbon sugar used to build glucose and other molecules; ADP + P$_i$ and NADP$^+$ return to the light reactions
- Logic: fix CO$_2$, reduce it to sugar with ATP and NADPH, regenerate the CO$_2$ acceptor

**Connections to respiration:**
- Products of photosynthesis (glucose, O$_2$) are the reactants of respiration
- Products of respiration (CO$_2$, H$_2$O) are the reactants of photosynthesis
- Both use chemiosmosis (proton gradients + ATP synthase)
- Both involve electron transport chains
      `
    },
    {
      id: 'ps7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'A plant is placed in a sealed chamber with CO2 labeled with 18-O. After several hours of photosynthesis, where will the 18-O label appear?',
            options: [
              'In the O2 released',
              'In the ATP made by chemiosmosis',
              'In the glucose molecules produced',
              'In both the glucose and the O2 released'
            ],
            correctAnswer: 2,
            explanation: 'The oxygen atoms in CO2 are fixed along with its carbon in the Calvin cycle and end up in glucose (and other organic molecules). The O2 released by photosynthesis comes from water splitting, not from CO2.'
          },
          {
            question: 'During photosynthesis, chemiosmosis in chloroplasts differs from chemiosmosis in mitochondria in that:',
            options: [
              'Chloroplasts pump H+ into the stroma; mitochondria pump H+ into the matrix',
              'Chloroplasts pump H+ into the thylakoid lumen; mitochondria into the intermembrane space',
              'Chloroplasts use FADH2 as electron donor; mitochondria use NADPH instead',
              'Chloroplasts pump H+ using the Calvin cycle; mitochondria use an ETC'
            ],
            correctAnswer: 1,
            explanation: 'Both organelles use proton gradients and ATP synthase, but the topology differs. In chloroplasts: H+ accumulates in the thylakoid lumen; ATP synthase releases ATP into the stroma. In mitochondria: H+ accumulates in the intermembrane space; ATP synthase releases ATP into the matrix.'
          },
          {
            question: 'Which statement correctly compares how organisms use the products of photosynthesis?',
            options: [
              'Plants use glucose only for structure; animals use it only for energy',
              'Plants respire their own glucose, and heterotrophs can consume it too',
              'Only animals perform cellular respiration on glucose from plants',
              'Plants skip cellular respiration because chloroplasts make their ATP'
            ],
            correctAnswer: 1,
            explanation: 'Plants are both autotrophs AND heterotrophs in the sense that they produce glucose (photosynthesis) and consume it (cellular respiration). Plants respire 24/7 to generate ATP for their own cellular work. They also use glucose for building cellulose, starch, amino acids, and lipids.'
          }
        ]
      }
    },
    {
      id: 'ps7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'A leaf is illuminated with green light only. What effect would this have on the rate of photosynthesis compared to white light?',
            options: [
              'No effect, since all visible wavelengths drive photosynthesis equally',
              'It would drop sharply, since chlorophyll absorbs little green light',
              'It would rise, since green light carries the most energy per photon',
              'It would drop to zero, since no leaf pigment absorbs green light'
            ],
            correctAnswer: 1,
            explanation: 'Chlorophyll a and b absorb primarily in the blue-violet and red regions of the spectrum and reflect green light. Under green-only illumination, very little light energy is absorbed by the photosystems, dramatically reducing the rate of the light reactions and, consequently, the Calvin cycle.'
          },
          {
            question: 'Engineers are attempting to design artificial photosynthesis systems. Which of the following biological components would be MOST critical to replicate?',
            options: [
              'A rigid cell wall to hold the reaction chamber\'s shape',
              'A light-driven catalyst that splits water, as PSII does',
              'A large vacuole that stores sugar for later use',
              'Stomata-like pores that regulate gas exchange with the air'
            ],
            correctAnswer: 1,
            explanation: 'Splitting water with light energy, as PSII does, supplies the electrons and protons for everything downstream in photosynthesis. It is one of the hardest reactions in biology to reproduce, so a light-driven water-splitting catalyst is the central challenge of artificial photosynthesis. A cell wall, vacuole, or pores would not capture energy.'
          },
          {
            question: 'If you provide a plant with heavy-oxygen water (H218O) and normal CO2, where does the labeled oxygen end up?',
            options: [
              'In the glucose made by the Calvin cycle',
              'In O2 gas released during photosynthesis',
              'In CO2 released later by respiration',
              'In both the glucose and the released O2'
            ],
            correctAnswer: 1,
            explanation: 'Water is split at PSII, and the oxygen atoms from water become the O2 gas released as a byproduct. This was demonstrated by the Ruben-Kamen experiment (1941) using 18O-labeled water, providing definitive evidence that photosynthetic O2 comes from water, not CO2.'
          }
        ]
      }
    },
    {
      id: 'ps7-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Comprehensive Matching
      `,
      exercise: {
        questions: [
          {
            question: 'The light reactions take place in the:',
            options: ['Stroma', 'Thylakoid membrane', 'Cytoplasm', 'Mitochondrial matrix'],
            correctAnswer: 'Thylakoid membrane'
          },
          {
            question: 'The Calvin cycle takes place in the:',
            options: ['Stroma', 'Thylakoid membrane', 'Thylakoid lumen', 'Inner membrane'],
            correctAnswer: 'Stroma'
          },
          {
            question: 'The enzyme that makes ATP in both chloroplasts and mitochondria:',
            options: ['ATP synthase', 'DNA polymerase', 'Helicase', 'Ligase'],
            correctAnswer: 'ATP synthase'
          },
          {
            question: 'The gas released as a byproduct of the light reactions:',
            options: ['CO2', 'N2', 'O2', 'H2'],
            correctAnswer: 'O2'
          },
          {
            question: 'The energy carriers the Calvin cycle receives from the light reactions:',
            options: ['ATP and NADPH', 'ATP and NADH', 'Glucose and O2', 'CO2 and H2O'],
            correctAnswer: 'ATP and NADPH'
          }
        ]
      }
    },
    {
      id: 'ps7-input',
      type: 'input-boxes' as const,
      content: `
### Final Key Facts
      `,
      exercise: {
        questions: [
          {
            question: 'Number of CO2 molecules that must be fixed to produce one glucose:',
            answer: '6',
            acceptableAnswers: ['6', 'six', 'Six'],
            placeholder: 'e.g. 3'
          },
          {
            question: 'The pores in the leaf surface through which CO2 enters:',
            answer: 'stomata',
            acceptableAnswers: ['stomata', 'Stomata', 'stoma', 'stomates'],
            placeholder: 'e.g. grana'
          },
          {
            question: 'The source of all O2 released during photosynthesis:',
            answer: 'water',
            acceptableAnswers: ['water', 'Water', 'H2O', 'h2o'],
            placeholder: 'e.g. CO2'
          }
        ]
      }
    },
    {
      id: 'ps7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'A student claims: "Plants only photosynthesize during the day and only respire at night." Is this correct?',
            options: [
              'Yes — the two processes alternate with the daily light cycle',
              'No — plants respire day and night but photosynthesize only in light',
              'No — plants photosynthesize at night using stored light energy',
              'Yes — respiration stops whenever the leaf is releasing O2'
            ],
            correctAnswer: 1,
            explanation: 'Cellular respiration occurs continuously in all living plant cells because ATP is always needed. Photosynthesis occurs only when light is available. During the day, both processes run simultaneously. At night, only respiration occurs. During the day, photosynthesis typically exceeds respiration, so the plant is a net producer of O2 and consumer of CO2.'
          },
          {
            question: 'Evolution of oxygenic photosynthesis (using water as the electron donor) fundamentally changed Earth because:',
            options: [
              'It removed nearly all CO2 from the atmosphere within a few years',
              'It released O2, enabling aerobic respiration and an ozone layer',
              'It drove nearly all of the anaerobic organisms on Earth to extinction',
              'It cooled the planet\'s core and halted all volcanic activity on Earth'
            ],
            correctAnswer: 1,
            explanation: 'The evolution of oxygenic photosynthesis by cyanobacteria (~2.7 billion years ago) gradually oxygenated the atmosphere (the Great Oxidation Event, ~2.4 BYA). This O2 enabled the evolution of aerobic respiration (much more efficient ATP production) and created the ozone layer (protecting life from UV radiation).'
          }
        ]
      }
    }
  ]
};