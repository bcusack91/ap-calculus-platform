export const oChemStereoPart4Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'ochem-stereochemistry-chirality-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Stereochemistry and Chirality
      
      **Part 4 of 7 — Conformations and Stereochemical Outcome**
      
      This part focuses on linking conformer populations to reactivity. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **diastereomers**: stereoisomers that are not mirror images
      - **meso compound**: achiral molecule containing stereocenters and internal symmetry
      - **optical rotation**: rotation of plane-polarized light by chiral compounds
      - **racemic mixture**: 1:1 enantiomer mixture with zero net rotation
      
      ### Worked reaction example
      A representative transformation uses **OsO4 dihydroxylation**.
      
      1. Identify the governing mechanism: **syn addition**.
      2. Predict the dominant product pattern: **cis vicinal diol**.
      3. Justify with a mechanistic note: concerted oxygen delivery.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for diastereomers.',
            options: [
              'achiral molecule containing stereocenters and internal symmetry',
              'stereoisomers that are not mirror images',
              '1:1 enantiomer mixture with zero net rotation',
              'rotation of plane-polarized light by chiral compounds'
            ],
            correctAnswer: 1,
            explanation: 'diastereomers is defined as: stereoisomers that are not mirror images.'
          },
          {
            question: 'A reaction in this lesson uses epoxidation then acid opening and proceeds by stereochemical relay. What product pattern should you predict first?',
            options: [
              'cis vicinal diol',
              'anti diol after opening',
              'axial/equatorial swap',
              'inverted configuration product'
            ],
            correctAnswer: 1,
            explanation: 'With epoxidation then acid opening, the benchmark outcome is anti diol after opening. Mechanistic anchor: regioselective protonated epoxide attack.'
          }
        ]
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | OsO4 dihydroxylation | syn addition | cis vicinal diol | concerted oxygen delivery |
      | epoxidation then acid opening | stereochemical relay | anti diol after opening | regioselective protonated epoxide attack |
      | chair flip in cyclohexane | conformational interconversion | axial/equatorial swap | reactivity follows lowest-energy conformer |
      | SN2 at stereocenter | backside displacement | inverted configuration product | Walden inversion observed |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: stereoisomers that are not mirror images
      2) Term for: achiral molecule containing stereocenters and internal symmetry
      3) Product pattern expected under OsO4 dihydroxylation
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['diastereomers', 'meso compound', 'cis vicinal diol'],
        hint1: 'Blank 1 is the vocabulary term paired with: stereoisomers that are not mirror images.',
        hint2: 'Blank 2 corresponds to achiral molecule containing stereocenters and internal symmetry.',
        hint3: 'Use the worked example: OsO4 dihydroxylation gives cis vicinal diol.',
        explanation: 'Correct entries: diastereomers, meso compound, and cis vicinal diol. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'optical rotation',
            options: ['achiral molecule containing stereocenters and internal symmetry', 'rotation of plane-polarized light by chiral compounds', 'stereoisomers that are not mirror images', '1:1 enantiomer mixture with zero net rotation']
          },
          {
            label: 'Expected pattern from epoxidation then acid opening',
            options: ['anti diol after opening', 'cis vicinal diol', 'axial/equatorial swap', 'inverted configuration product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['R/S assignment depends on CIP priority and viewing orientation simultaneously.', 'Conformational preference can dominate observed stereochemical product ratio.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Meso compounds are optically inactive despite stereocenters.']
          }
        ],
        correctAnswers: ['rotation of plane-polarized light by chiral compounds', 'anti diol after opening', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Conformational preference can dominate observed stereochemical product ratio.
      - R/S assignment depends on CIP priority and viewing orientation simultaneously.
      - Meso compounds are optically inactive despite stereocenters.
      
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
      id: 'ochem-stereochemistry-chirality-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on conformations and stereochemical outcome, a step uses chair flip in cyclohexane. Which major product pattern is most defensible?',
            options: [
              'anti diol after opening',
              'inverted configuration product',
              'cis vicinal diol',
              'axial/equatorial swap'
            ],
            correctAnswer: 3,
            explanation: 'chair flip in cyclohexane is classically associated with axial/equatorial swap because reactivity follows lowest-energy conformer.'
          },
          {
            question: 'A mechanism rationale cites stereospecific reaction: mechanism dictates one stereochemical relation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use stereospecific reaction only after final answer choice selection.',
              'Ignore stereospecific reaction and choose products only by molecular weight.',
              'Use stereospecific reaction to justify why the pathway favors inverted configuration product under SN2 at stereocenter.',
              'Treat stereospecific reaction as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies stereospecific reaction directly to mechanism and product control. In this context, SN2 at stereocenter aligns with inverted configuration product.'
          }
        ]
      }
    }
  ]
};
