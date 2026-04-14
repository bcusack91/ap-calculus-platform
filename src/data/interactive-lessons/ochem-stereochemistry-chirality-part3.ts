export const oChemStereoPart3Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'ochem-stereochemistry-chirality-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Stereochemistry and Chirality
      
      **Part 3 of 7 — Enantiomers vs Diastereomers**
      
      This part focuses on classifying stereoisomer relationships in product sets. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **enantiomers**: non-superimposable mirror-image stereoisomers
      - **diastereomers**: stereoisomers that are not mirror images
      - **meso compound**: achiral molecule containing stereocenters and internal symmetry
      - **optical rotation**: rotation of plane-polarized light by chiral compounds
      
      ### Worked reaction example
      A representative transformation uses **Br2 addition to alkene**.
      
      1. Identify the governing mechanism: **anti addition via halonium**.
      2. Predict the dominant product pattern: **trans vicinal dibromide**.
      3. Justify with a mechanistic note: stereospecific anti outcome.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for enantiomers.',
            options: [
              'stereoisomers that are not mirror images',
              'rotation of plane-polarized light by chiral compounds',
              'achiral molecule containing stereocenters and internal symmetry',
              'non-superimposable mirror-image stereoisomers'
            ],
            correctAnswer: 3,
            explanation: 'enantiomers is defined as: non-superimposable mirror-image stereoisomers.'
          },
          {
            question: 'A reaction in this lesson uses OsO4 dihydroxylation and proceeds by syn addition. What product pattern should you predict first?',
            options: [
              'axial/equatorial swap',
              'cis vicinal diol',
              'trans vicinal dibromide',
              'anti diol after opening'
            ],
            correctAnswer: 1,
            explanation: 'With OsO4 dihydroxylation, the benchmark outcome is cis vicinal diol. Mechanistic anchor: concerted oxygen delivery.'
          }
        ]
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2 addition to alkene | anti addition via halonium | trans vicinal dibromide | stereospecific anti outcome |
      | OsO4 dihydroxylation | syn addition | cis vicinal diol | concerted oxygen delivery |
      | epoxidation then acid opening | stereochemical relay | anti diol after opening | regioselective protonated epoxide attack |
      | chair flip in cyclohexane | conformational interconversion | axial/equatorial swap | reactivity follows lowest-energy conformer |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: non-superimposable mirror-image stereoisomers

      2) Term for: stereoisomers that are not mirror images

      3) Product pattern expected under Br2 addition to alkene
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['enantiomers', 'diastereomers', 'trans vicinal dibromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: non-superimposable mirror-image stereoisomers.',
        hint2: 'Blank 2 corresponds to stereoisomers that are not mirror images.',
        hint3: 'Use the worked example: Br2 addition to alkene gives trans vicinal dibromide.',
        explanation: 'Correct entries: enantiomers, diastereomers, and trans vicinal dibromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'meso compound',
            options: ['stereoisomers that are not mirror images', 'rotation of plane-polarized light by chiral compounds', 'non-superimposable mirror-image stereoisomers', 'achiral molecule containing stereocenters and internal symmetry']
          },
          {
            label: 'Expected pattern from OsO4 dihydroxylation',
            options: ['cis vicinal diol', 'axial/equatorial swap', 'trans vicinal dibromide', 'anti diol after opening']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Conformational preference can dominate observed stereochemical product ratio.', 'Stereoselective and stereospecific are related but not identical terms.', 'R/S assignment depends on CIP priority and viewing orientation simultaneously.']
          }
        ],
        correctAnswers: ['achiral molecule containing stereocenters and internal symmetry', 'cis vicinal diol', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Stereoselective and stereospecific are related but not identical terms.
      - Conformational preference can dominate observed stereochemical product ratio.
      - R/S assignment depends on CIP priority and viewing orientation simultaneously.
      
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
      id: 'ochem-stereochemistry-chirality-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on enantiomers vs diastereomers, a step uses epoxidation then acid opening. Which major product pattern is most defensible?',
            options: [
              'trans vicinal dibromide',
              'axial/equatorial swap',
              'cis vicinal diol',
              'anti diol after opening'
            ],
            correctAnswer: 3,
            explanation: 'epoxidation then acid opening is classically associated with anti diol after opening because regioselective protonated epoxide attack.'
          },
          {
            question: 'A mechanism rationale cites racemic mixture: 1:1 enantiomer mixture with zero net rotation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use racemic mixture only after final answer choice selection.',
              'Ignore racemic mixture and choose products only by molecular weight.',
              'Use racemic mixture to justify why the pathway favors axial/equatorial swap under chair flip in cyclohexane.',
              'Treat racemic mixture as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies racemic mixture directly to mechanism and product control. In this context, chair flip in cyclohexane aligns with axial/equatorial swap.'
          }
        ]
      }
    }
  ]
};
