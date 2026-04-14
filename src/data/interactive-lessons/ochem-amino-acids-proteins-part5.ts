export const oChemAminoAcidsPart5Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 5 of 7 — Side-Chain Reactivity**
      
      This part focuses on using side-chain chemistry in catalytic mechanisms. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **secondary structure**: local alpha-helix and beta-sheet motifs
      - **tertiary structure**: 3D fold from side-chain interactions
      - **disulfide bond**: covalent S-S linkage between cysteine residues
      - **denaturation**: loss of higher-order structure without peptide cleavage
      
      ### Worked reaction example
      A representative transformation uses **ninhydrin test**.
      
      1. Identify the governing mechanism: **amine detection**.
      2. Predict the dominant product pattern: **colored complex**.
      3. Justify with a mechanistic note: used in amino acid analysis.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for secondary structure.',
            options: [
              'loss of higher-order structure without peptide cleavage',
              'covalent S-S linkage between cysteine residues',
              'local alpha-helix and beta-sheet motifs',
              '3D fold from side-chain interactions'
            ],
            correctAnswer: 2,
            explanation: 'secondary structure is defined as: local alpha-helix and beta-sheet motifs.'
          },
          {
            question: 'A reaction in this lesson uses electrophoresis at chosen pH and proceeds by charge-based migration. What product pattern should you predict first?',
            options: [
              'colored complex',
              'free amino acids from peptide',
              'peptide bond formed',
              'separation by net charge'
            ],
            correctAnswer: 3,
            explanation: 'With electrophoresis at chosen pH, the benchmark outcome is separation by net charge. Mechanistic anchor: relative to pI values.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | ninhydrin test | amine detection | colored complex | used in amino acid analysis |
      | electrophoresis at chosen pH | charge-based migration | separation by net charge | relative to pI values |
      | amino acid + amino acid, coupling reagent | condensation | peptide bond formed | protecting groups often required |
      | acidic hydrolysis | amide cleavage | free amino acids from peptide | breaks peptide backbone |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: local alpha-helix and beta-sheet motifs

      2) Term for: 3D fold from side-chain interactions

      3) Product pattern expected under ninhydrin test
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['secondary structure', 'tertiary structure', 'colored complex'],
        hint1: 'Blank 1 is the vocabulary term paired with: local alpha-helix and beta-sheet motifs.',
        hint2: 'Blank 2 corresponds to 3D fold from side-chain interactions.',
        hint3: 'Use the worked example: ninhydrin test gives colored complex.',
        explanation: 'Correct entries: secondary structure, tertiary structure, and colored complex. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'disulfide bond',
            options: ['local alpha-helix and beta-sheet motifs', '3D fold from side-chain interactions', 'covalent S-S linkage between cysteine residues', 'loss of higher-order structure without peptide cleavage']
          },
          {
            label: 'Expected pattern from electrophoresis at chosen pH',
            options: ['colored complex', 'free amino acids from peptide', 'separation by net charge', 'peptide bond formed']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Side-chain pKa values shift in proteins due to local environment.', 'Denaturation changes folding but does not normally hydrolyze peptide bonds.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.']
          }
        ],
        correctAnswers: ['covalent S-S linkage between cysteine residues', 'separation by net charge', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.
      - Denaturation changes folding but does not normally hydrolyze peptide bonds.
      - Side-chain pKa values shift in proteins due to local environment.
      
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
      id: 'ochem-amino-acids-proteins-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on side-chain reactivity, a step uses amino acid + amino acid, coupling reagent. Which major product pattern is most defensible?',
            options: [
              'free amino acids from peptide',
              'separation by net charge',
              'peptide bond formed',
              'colored complex'
            ],
            correctAnswer: 2,
            explanation: 'amino acid + amino acid, coupling reagent is classically associated with peptide bond formed because protecting groups often required.'
          },
          {
            question: 'A mechanism rationale cites buffer region: pH range where conjugate acid/base pair resists change. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat buffer region as a naming convention unrelated to mechanism.',
              'Use buffer region to justify why the pathway favors free amino acids from peptide under acidic hydrolysis.',
              'Ignore buffer region and choose products only by molecular weight.',
              'Use buffer region only after final answer choice selection.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies buffer region directly to mechanism and product control. In this context, acidic hydrolysis aligns with free amino acids from peptide.'
          }
        ]
      }
    }
  ]
};
