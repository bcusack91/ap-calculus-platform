export const oChemStereoPart5Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'ochem-stereochemistry-chirality-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Stereochemistry and Chirality
      
      **Part 5 of 7 — Stereoselective Mechanisms**
      
      This part focuses on predicting stereochemical outcomes from mechanism type. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **meso compound**: achiral molecule containing stereocenters and internal symmetry
      - **optical rotation**: rotation of plane-polarized light by chiral compounds
      - **racemic mixture**: 1:1 enantiomer mixture with zero net rotation
      - **stereospecific reaction**: mechanism dictates one stereochemical relation
      
      ### Worked reaction example
      A representative transformation uses **epoxidation then acid opening**.
      
      1. Identify the governing mechanism: **stereochemical relay**.
      2. Predict the dominant product pattern: **anti diol after opening**.
      3. Justify with a mechanistic note: regioselective protonated epoxide attack.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for meso compound.',
            options: [
              'mechanism dictates one stereochemical relation',
              'achiral molecule containing stereocenters and internal symmetry',
              'rotation of plane-polarized light by chiral compounds',
              '1:1 enantiomer mixture with zero net rotation'
            ],
            correctAnswer: 1,
            explanation: 'meso compound is defined as: achiral molecule containing stereocenters and internal symmetry.'
          },
          {
            question: 'A reaction in this lesson uses chair flip in cyclohexane and proceeds by conformational interconversion. What product pattern should you predict first?',
            options: [
              'anti diol after opening',
              'axial/equatorial swap',
              'inverted configuration product',
              'partial racemization'
            ],
            correctAnswer: 1,
            explanation: 'With chair flip in cyclohexane, the benchmark outcome is axial/equatorial swap. Mechanistic anchor: reactivity follows lowest-energy conformer.'
          }
        ]
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | epoxidation then acid opening | stereochemical relay | anti diol after opening | regioselective protonated epoxide attack |
      | chair flip in cyclohexane | conformational interconversion | axial/equatorial swap | reactivity follows lowest-energy conformer |
      | SN2 at stereocenter | backside displacement | inverted configuration product | Walden inversion observed |
      | SN1 at stereocenter | carbocation pathway | partial racemization | both faces can be attacked |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: achiral molecule containing stereocenters and internal symmetry

      2) Term for: rotation of plane-polarized light by chiral compounds

      3) Product pattern expected under epoxidation then acid opening
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['meso compound', 'optical rotation', 'anti diol after opening'],
        hint1: 'Blank 1 is the vocabulary term paired with: achiral molecule containing stereocenters and internal symmetry.',
        hint2: 'Blank 2 corresponds to rotation of plane-polarized light by chiral compounds.',
        hint3: 'Use the worked example: epoxidation then acid opening gives anti diol after opening.',
        explanation: 'Correct entries: meso compound, optical rotation, and anti diol after opening. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'racemic mixture',
            options: ['rotation of plane-polarized light by chiral compounds', 'mechanism dictates one stereochemical relation', 'achiral molecule containing stereocenters and internal symmetry', '1:1 enantiomer mixture with zero net rotation']
          },
          {
            label: 'Expected pattern from chair flip in cyclohexane',
            options: ['inverted configuration product', 'partial racemization', 'anti diol after opening', 'axial/equatorial swap']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Stereoselective and stereospecific are related but not identical terms.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'R/S assignment depends on CIP priority and viewing orientation simultaneously.', 'Meso compounds are optically inactive despite stereocenters.']
          }
        ],
        correctAnswers: ['1:1 enantiomer mixture with zero net rotation', 'axial/equatorial swap', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p5-s6-strategy',
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
      id: 'ochem-stereochemistry-chirality-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on stereoselective mechanisms, a step uses SN2 at stereocenter. Which major product pattern is most defensible?',
            options: [
              'partial racemization',
              'anti diol after opening',
              'inverted configuration product',
              'axial/equatorial swap'
            ],
            correctAnswer: 2,
            explanation: 'SN2 at stereocenter is classically associated with inverted configuration product because Walden inversion observed.'
          },
          {
            question: 'A mechanism rationale cites conformational analysis: chair/rotamer populations influence reaction trajectory. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use conformational analysis only after final answer choice selection.',
              'Treat conformational analysis as a naming convention unrelated to mechanism.',
              'Ignore conformational analysis and choose products only by molecular weight.',
              'Use conformational analysis to justify why the pathway favors partial racemization under SN1 at stereocenter.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies conformational analysis directly to mechanism and product control. In this context, SN1 at stereocenter aligns with partial racemization.'
          }
        ]
      }
    }
  ]
};
