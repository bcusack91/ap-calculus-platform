export const oChemStereoPart1Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'ochem-stereochemistry-chirality-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Stereochemistry and Chirality
      
      **Part 1 of 7 — Chiral Centers and Symmetry**
      
      This part focuses on detecting chirality and hidden symmetry in structures. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **chiral center**: tetrahedral atom bonded to four different substituents
      - **R/S configuration**: absolute stereochemical descriptor from CIP ranking
      - **enantiomers**: non-superimposable mirror-image stereoisomers
      - **diastereomers**: stereoisomers that are not mirror images
      
      ### Worked reaction example
      A representative transformation uses **SN2 at stereocenter**.
      
      1. Identify the governing mechanism: **backside displacement**.
      2. Predict the dominant product pattern: **inverted configuration product**.
      3. Justify with a mechanistic note: Walden inversion observed.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for chiral center.',
            options: [
              'absolute stereochemical descriptor from CIP ranking',
              'stereoisomers that are not mirror images',
              'tetrahedral atom bonded to four different substituents',
              'non-superimposable mirror-image stereoisomers'
            ],
            correctAnswer: 2,
            explanation: 'chiral center is defined as: tetrahedral atom bonded to four different substituents.'
          },
          {
            question: 'A reaction in this lesson uses SN1 at stereocenter and proceeds by carbocation pathway. What product pattern should you predict first?',
            options: [
              'cis vicinal diol',
              'partial racemization',
              'trans vicinal dibromide',
              'inverted configuration product'
            ],
            correctAnswer: 1,
            explanation: 'With SN1 at stereocenter, the benchmark outcome is partial racemization. Mechanistic anchor: both faces can be attacked.'
          }
        ]
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | SN2 at stereocenter | backside displacement | inverted configuration product | Walden inversion observed |
      | SN1 at stereocenter | carbocation pathway | partial racemization | both faces can be attacked |
      | Br2 addition to alkene | anti addition via halonium | trans vicinal dibromide | stereospecific anti outcome |
      | OsO4 dihydroxylation | syn addition | cis vicinal diol | concerted oxygen delivery |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: tetrahedral atom bonded to four different substituents
      2) Term for: absolute stereochemical descriptor from CIP ranking
      3) Product pattern expected under SN2 at stereocenter
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['chiral center', 'R/S configuration', 'inverted configuration product'],
        hint1: 'Blank 1 is the vocabulary term paired with: tetrahedral atom bonded to four different substituents.',
        hint2: 'Blank 2 corresponds to absolute stereochemical descriptor from CIP ranking.',
        hint3: 'Use the worked example: SN2 at stereocenter gives inverted configuration product.',
        explanation: 'Correct entries: chiral center, R/S configuration, and inverted configuration product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'enantiomers',
            options: ['non-superimposable mirror-image stereoisomers', 'stereoisomers that are not mirror images', 'absolute stereochemical descriptor from CIP ranking', 'tetrahedral atom bonded to four different substituents']
          },
          {
            label: 'Expected pattern from SN1 at stereocenter',
            options: ['partial racemization', 'trans vicinal dibromide', 'cis vicinal diol', 'inverted configuration product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Meso compounds are optically inactive despite stereocenters.', 'R/S assignment depends on CIP priority and viewing orientation simultaneously.', 'Stereoselective and stereospecific are related but not identical terms.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['non-superimposable mirror-image stereoisomers', 'partial racemization', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - R/S assignment depends on CIP priority and viewing orientation simultaneously.
      - Meso compounds are optically inactive despite stereocenters.
      - Stereoselective and stereospecific are related but not identical terms.
      
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
      id: 'ochem-stereochemistry-chirality-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on chiral centers and symmetry, a step uses Br2 addition to alkene. Which major product pattern is most defensible?',
            options: [
              'trans vicinal dibromide',
              'cis vicinal diol',
              'inverted configuration product',
              'partial racemization'
            ],
            correctAnswer: 0,
            explanation: 'Br2 addition to alkene is classically associated with trans vicinal dibromide because stereospecific anti outcome.'
          },
          {
            question: 'A mechanism rationale cites meso compound: achiral molecule containing stereocenters and internal symmetry. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use meso compound only after final answer choice selection.',
              'Ignore meso compound and choose products only by molecular weight.',
              'Treat meso compound as a naming convention unrelated to mechanism.',
              'Use meso compound to justify why the pathway favors cis vicinal diol under OsO4 dihydroxylation.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies meso compound directly to mechanism and product control. In this context, OsO4 dihydroxylation aligns with cis vicinal diol.'
          }
        ]
      }
    }
  ]
};
