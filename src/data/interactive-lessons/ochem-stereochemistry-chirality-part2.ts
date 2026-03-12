export const oChemStereoPart2Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'ochem-stereochemistry-chirality-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Stereochemistry and Chirality
      
      **Part 2 of 7 — R/S Assignment**
      
      This part focuses on assigning absolute configuration quickly under exam timing. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **R/S configuration**: absolute stereochemical descriptor from CIP ranking
      - **enantiomers**: non-superimposable mirror-image stereoisomers
      - **diastereomers**: stereoisomers that are not mirror images
      - **meso compound**: achiral molecule containing stereocenters and internal symmetry
      
      ### Worked reaction example
      A representative transformation uses **SN1 at stereocenter**.
      
      1. Identify the governing mechanism: **carbocation pathway**.
      2. Predict the dominant product pattern: **partial racemization**.
      3. Justify with a mechanistic note: both faces can be attacked.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for R/S configuration.',
            options: [
              'absolute stereochemical descriptor from CIP ranking',
              'stereoisomers that are not mirror images',
              'achiral molecule containing stereocenters and internal symmetry',
              'non-superimposable mirror-image stereoisomers'
            ],
            correctAnswer: 0,
            explanation: 'R/S configuration is defined as: absolute stereochemical descriptor from CIP ranking.'
          },
          {
            question: 'A reaction in this lesson uses Br2 addition to alkene and proceeds by anti addition via halonium. What product pattern should you predict first?',
            options: [
              'cis vicinal diol',
              'anti diol after opening',
              'partial racemization',
              'trans vicinal dibromide'
            ],
            correctAnswer: 3,
            explanation: 'With Br2 addition to alkene, the benchmark outcome is trans vicinal dibromide. Mechanistic anchor: stereospecific anti outcome.'
          }
        ]
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | SN1 at stereocenter | carbocation pathway | partial racemization | both faces can be attacked |
      | Br2 addition to alkene | anti addition via halonium | trans vicinal dibromide | stereospecific anti outcome |
      | OsO4 dihydroxylation | syn addition | cis vicinal diol | concerted oxygen delivery |
      | epoxidation then acid opening | stereochemical relay | anti diol after opening | regioselective protonated epoxide attack |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: absolute stereochemical descriptor from CIP ranking
      2) Term for: non-superimposable mirror-image stereoisomers
      3) Product pattern expected under SN1 at stereocenter
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['R/S configuration', 'enantiomers', 'partial racemization'],
        hint1: 'Blank 1 is the vocabulary term paired with: absolute stereochemical descriptor from CIP ranking.',
        hint2: 'Blank 2 corresponds to non-superimposable mirror-image stereoisomers.',
        hint3: 'Use the worked example: SN1 at stereocenter gives partial racemization.',
        explanation: 'Correct entries: R/S configuration, enantiomers, and partial racemization. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'diastereomers',
            options: ['stereoisomers that are not mirror images', 'non-superimposable mirror-image stereoisomers', 'absolute stereochemical descriptor from CIP ranking', 'achiral molecule containing stereocenters and internal symmetry']
          },
          {
            label: 'Expected pattern from Br2 addition to alkene',
            options: ['anti diol after opening', 'partial racemization', 'trans vicinal dibromide', 'cis vicinal diol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Conformational preference can dominate observed stereochemical product ratio.', 'Stereoselective and stereospecific are related but not identical terms.', 'Meso compounds are optically inactive despite stereocenters.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['stereoisomers that are not mirror images', 'trans vicinal dibromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Meso compounds are optically inactive despite stereocenters.
      - Stereoselective and stereospecific are related but not identical terms.
      - Conformational preference can dominate observed stereochemical product ratio.
      
      ### High-yield exam sequence
      1. **Read reagents before substrate details** to classify mechanism class quickly.
      2. **Mark the reactive site** (electrophilic carbon, acidic alpha-carbon, benzylic/allylic position, or aromatic position).
      3. **Commit to one major-product logic path** before checking answer choices.
      4. **Audit stereochemistry and regiochemistry last** so you do not lose points on orientation errors.
      
      ### Timing technique
      If two options differ only by orientation or placement, spend 10 seconds restating the governing rule out loud (Markovnikov, anti addition, kinetic control, etc.) before selecting.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on r/s assignment, a step uses OsO4 dihydroxylation. Which major product pattern is most defensible?',
            options: [
              'partial racemization',
              'trans vicinal dibromide',
              'anti diol after opening',
              'cis vicinal diol'
            ],
            correctAnswer: 3,
            explanation: 'OsO4 dihydroxylation is classically associated with cis vicinal diol because concerted oxygen delivery.'
          },
          {
            question: 'A mechanism rationale cites optical rotation: rotation of plane-polarized light by chiral compounds. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use optical rotation to justify why the pathway favors anti diol after opening under epoxidation then acid opening.',
              'Treat optical rotation as a naming convention unrelated to mechanism.',
              'Use optical rotation only after final answer choice selection.',
              'Ignore optical rotation and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies optical rotation directly to mechanism and product control. In this context, epoxidation then acid opening aligns with anti diol after opening.'
          }
        ]
      }
    }
  ]
};
