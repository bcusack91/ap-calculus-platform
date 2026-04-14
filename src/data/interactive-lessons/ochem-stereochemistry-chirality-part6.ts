export const oChemStereoPart6Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'ochem-stereochemistry-chirality-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Stereochemistry and Chirality
      
      **Part 6 of 7 — Synthesis with Stereochemical Control**
      
      This part focuses on planning routes to maximize stereochemical fidelity. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **optical rotation**: rotation of plane-polarized light by chiral compounds
      - **racemic mixture**: 1:1 enantiomer mixture with zero net rotation
      - **stereospecific reaction**: mechanism dictates one stereochemical relation
      - **conformational analysis**: chair/rotamer populations influence reaction trajectory
      
      ### Worked reaction example
      A representative transformation uses **chair flip in cyclohexane**.
      
      1. Identify the governing mechanism: **conformational interconversion**.
      2. Predict the dominant product pattern: **axial/equatorial swap**.
      3. Justify with a mechanistic note: reactivity follows lowest-energy conformer.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for optical rotation.',
            options: [
              '1:1 enantiomer mixture with zero net rotation',
              'rotation of plane-polarized light by chiral compounds',
              'chair/rotamer populations influence reaction trajectory',
              'mechanism dictates one stereochemical relation'
            ],
            correctAnswer: 1,
            explanation: 'optical rotation is defined as: rotation of plane-polarized light by chiral compounds.'
          },
          {
            question: 'A reaction in this lesson uses SN2 at stereocenter and proceeds by backside displacement. What product pattern should you predict first?',
            options: [
              'trans vicinal dibromide',
              'axial/equatorial swap',
              'inverted configuration product',
              'partial racemization'
            ],
            correctAnswer: 2,
            explanation: 'With SN2 at stereocenter, the benchmark outcome is inverted configuration product. Mechanistic anchor: Walden inversion observed.'
          }
        ]
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | chair flip in cyclohexane | conformational interconversion | axial/equatorial swap | reactivity follows lowest-energy conformer |
      | SN2 at stereocenter | backside displacement | inverted configuration product | Walden inversion observed |
      | SN1 at stereocenter | carbocation pathway | partial racemization | both faces can be attacked |
      | Br2 addition to alkene | anti addition via halonium | trans vicinal dibromide | stereospecific anti outcome |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-stereochemistry-chirality-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: rotation of plane-polarized light by chiral compounds

      2) Term for: 1:1 enantiomer mixture with zero net rotation

      3) Product pattern expected under chair flip in cyclohexane
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['optical rotation', 'racemic mixture', 'axial/equatorial swap'],
        hint1: 'Blank 1 is the vocabulary term paired with: rotation of plane-polarized light by chiral compounds.',
        hint2: 'Blank 2 corresponds to 1:1 enantiomer mixture with zero net rotation.',
        hint3: 'Use the worked example: chair flip in cyclohexane gives axial/equatorial swap.',
        explanation: 'Correct entries: optical rotation, racemic mixture, and axial/equatorial swap. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'stereospecific reaction',
            options: ['rotation of plane-polarized light by chiral compounds', 'mechanism dictates one stereochemical relation', '1:1 enantiomer mixture with zero net rotation', 'chair/rotamer populations influence reaction trajectory']
          },
          {
            label: 'Expected pattern from SN2 at stereocenter',
            options: ['trans vicinal dibromide', 'inverted configuration product', 'axial/equatorial swap', 'partial racemization']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Meso compounds are optically inactive despite stereocenters.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Stereoselective and stereospecific are related but not identical terms.', 'Conformational preference can dominate observed stereochemical product ratio.']
          }
        ],
        correctAnswers: ['mechanism dictates one stereochemical relation', 'inverted configuration product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-stereochemistry-chirality-p6-s6-strategy',
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
      id: 'ochem-stereochemistry-chirality-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis with stereochemical control, a step uses SN1 at stereocenter. Which major product pattern is most defensible?',
            options: [
              'inverted configuration product',
              'partial racemization',
              'trans vicinal dibromide',
              'axial/equatorial swap'
            ],
            correctAnswer: 1,
            explanation: 'SN1 at stereocenter is classically associated with partial racemization because both faces can be attacked.'
          },
          {
            question: 'A mechanism rationale cites chiral center: tetrahedral atom bonded to four different substituents. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use chiral center to justify why the pathway favors trans vicinal dibromide under Br2 addition to alkene.',
              'Use chiral center only after final answer choice selection.',
              'Treat chiral center as a naming convention unrelated to mechanism.',
              'Ignore chiral center and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies chiral center directly to mechanism and product control. In this context, Br2 addition to alkene aligns with trans vicinal dibromide.'
          }
        ]
      }
    }
  ]
};
