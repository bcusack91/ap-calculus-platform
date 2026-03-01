export const oChemAminoAcidsPart6Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 6 of 7 — Biochemical Mechanism Applications**
      
      This part focuses on analyzing mutation effects on structure and function. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **tertiary structure**: 3D fold from side-chain interactions
      - **disulfide bond**: covalent S-S linkage between cysteine residues
      - **denaturation**: loss of higher-order structure without peptide cleavage
      - **buffer region**: pH range where conjugate acid/base pair resists change
      
      ### Worked reaction example
      A representative transformation uses **electrophoresis at chosen pH**.
      
      1. Identify the governing mechanism: **charge-based migration**.
      2. Predict the dominant product pattern: **separation by net charge**.
      3. Justify with a mechanistic note: relative to pI values.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for tertiary structure.',
            options: [
              'pH range where conjugate acid/base pair resists change',
              'loss of higher-order structure without peptide cleavage',
              '3D fold from side-chain interactions',
              'covalent S-S linkage between cysteine residues'
            ],
            correctAnswer: 2,
            explanation: 'tertiary structure is defined as: 3D fold from side-chain interactions.'
          },
          {
            question: 'A reaction in this lesson uses amino acid + amino acid, coupling reagent and proceeds by condensation. What product pattern should you predict first?',
            options: [
              'free amino acids from peptide',
              'separation by net charge',
              'carboxylate products',
              'peptide bond formed'
            ],
            correctAnswer: 3,
            explanation: 'With amino acid + amino acid, coupling reagent, the benchmark outcome is peptide bond formed. Mechanistic anchor: protecting groups often required.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | electrophoresis at chosen pH | charge-based migration | separation by net charge | relative to pI values |
      | amino acid + amino acid, coupling reagent | condensation | peptide bond formed | protecting groups often required |
      | acidic hydrolysis | amide cleavage | free amino acids from peptide | breaks peptide backbone |
      | base-promoted hydrolysis | amide cleavage under basic conditions | carboxylate products | irreversible in strong base |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: 3D fold from side-chain interactions
      2) Term for: covalent S-S linkage between cysteine residues
      3) Product pattern expected under electrophoresis at chosen pH
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['tertiary structure', 'disulfide bond', 'separation by net charge'],
        hint1: 'Blank 1 is the vocabulary term paired with: 3D fold from side-chain interactions.',
        hint2: 'Blank 2 corresponds to covalent S-S linkage between cysteine residues.',
        hint3: 'Use the worked example: electrophoresis at chosen pH gives separation by net charge.',
        explanation: 'Correct entries: tertiary structure, disulfide bond, and separation by net charge. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'denaturation',
            options: ['3D fold from side-chain interactions', 'pH range where conjugate acid/base pair resists change', 'loss of higher-order structure without peptide cleavage', 'covalent S-S linkage between cysteine residues']
          },
          {
            label: 'Expected pattern from amino acid + amino acid, coupling reagent',
            options: ['carboxylate products', 'free amino acids from peptide', 'peptide bond formed', 'separation by net charge']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Denaturation changes folding but does not normally hydrolyze peptide bonds.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Side-chain pKa values shift in proteins due to local environment.', 'Peptide bond rotation is restricted by partial double-bond character.']
          }
        ],
        correctAnswers: ['loss of higher-order structure without peptide cleavage', 'peptide bond formed', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Denaturation changes folding but does not normally hydrolyze peptide bonds.
      - Side-chain pKa values shift in proteins due to local environment.
      - Peptide bond rotation is restricted by partial double-bond character.
      
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
      id: 'ochem-amino-acids-proteins-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on biochemical mechanism applications, a step uses acidic hydrolysis. Which major product pattern is most defensible?',
            options: [
              'carboxylate products',
              'peptide bond formed',
              'free amino acids from peptide',
              'separation by net charge'
            ],
            correctAnswer: 2,
            explanation: 'acidic hydrolysis is classically associated with free amino acids from peptide because breaks peptide backbone.'
          },
          {
            question: 'A mechanism rationale cites zwitterion: species containing both positive and negative charges. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore zwitterion and choose products only by molecular weight.',
              'Use zwitterion to justify why the pathway favors carboxylate products under base-promoted hydrolysis.',
              'Treat zwitterion as a naming convention unrelated to mechanism.',
              'Use zwitterion only after final answer choice selection.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies zwitterion directly to mechanism and product control. In this context, base-promoted hydrolysis aligns with carboxylate products.'
          }
        ]
      }
    }
  ]
};
