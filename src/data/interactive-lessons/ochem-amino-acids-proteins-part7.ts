export const oChemAminoAcidsPart7Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 7 of 7 — Comprehensive Amino Acid Review**
      
      This part focuses on integrating acid-base and stereochemistry in biopolymer prompts. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **disulfide bond**: covalent S-S linkage between cysteine residues
      - **denaturation**: loss of higher-order structure without peptide cleavage
      - **buffer region**: pH range where conjugate acid/base pair resists change
      - **zwitterion**: species containing both positive and negative charges
      
      ### Worked reaction example
      A representative transformation uses **amino acid + amino acid, coupling reagent**.
      
      1. Identify the governing mechanism: **condensation**.
      2. Predict the dominant product pattern: **peptide bond formed**.
      3. Justify with a mechanistic note: protecting groups often required.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for disulfide bond.',
            options: [
              'pH range where conjugate acid/base pair resists change',
              'covalent S-S linkage between cysteine residues',
              'species containing both positive and negative charges',
              'loss of higher-order structure without peptide cleavage'
            ],
            correctAnswer: 1,
            explanation: 'disulfide bond is defined as: covalent S-S linkage between cysteine residues.'
          },
          {
            question: 'A reaction in this lesson uses acidic hydrolysis and proceeds by amide cleavage. What product pattern should you predict first?',
            options: [
              'free amino acids from peptide',
              'carboxylate products',
              'disulfide bridge',
              'peptide bond formed'
            ],
            correctAnswer: 0,
            explanation: 'With acidic hydrolysis, the benchmark outcome is free amino acids from peptide. Mechanistic anchor: breaks peptide backbone.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | amino acid + amino acid, coupling reagent | condensation | peptide bond formed | protecting groups often required |
      | acidic hydrolysis | amide cleavage | free amino acids from peptide | breaks peptide backbone |
      | base-promoted hydrolysis | amide cleavage under basic conditions | carboxylate products | irreversible in strong base |
      | oxidative cysteine coupling | thiol oxidation | disulfide bridge | stabilizes extracellular proteins |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: covalent S-S linkage between cysteine residues

      2) Term for: loss of higher-order structure without peptide cleavage

      3) Product pattern expected under amino acid + amino acid, coupling reagent
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['disulfide bond', 'denaturation', 'peptide bond formed'],
        hint1: 'Blank 1 is the vocabulary term paired with: covalent S-S linkage between cysteine residues.',
        hint2: 'Blank 2 corresponds to loss of higher-order structure without peptide cleavage.',
        hint3: 'Use the worked example: amino acid + amino acid, coupling reagent gives peptide bond formed.',
        explanation: 'Correct entries: disulfide bond, denaturation, and peptide bond formed. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'buffer region',
            options: ['covalent S-S linkage between cysteine residues', 'loss of higher-order structure without peptide cleavage', 'pH range where conjugate acid/base pair resists change', 'species containing both positive and negative charges']
          },
          {
            label: 'Expected pattern from acidic hydrolysis',
            options: ['peptide bond formed', 'carboxylate products', 'free amino acids from peptide', 'disulfide bridge']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Peptide bond rotation is restricted by partial double-bond character.', 'At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.', 'Side-chain pKa values shift in proteins due to local environment.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['pH range where conjugate acid/base pair resists change', 'free amino acids from peptide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Side-chain pKa values shift in proteins due to local environment.
      - Peptide bond rotation is restricted by partial double-bond character.
      - At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.
      
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
      id: 'ochem-amino-acids-proteins-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on comprehensive amino acid review, a step uses base-promoted hydrolysis. Which major product pattern is most defensible?',
            options: [
              'disulfide bridge',
              'carboxylate products',
              'free amino acids from peptide',
              'peptide bond formed'
            ],
            correctAnswer: 1,
            explanation: 'base-promoted hydrolysis is classically associated with carboxylate products because irreversible in strong base.'
          },
          {
            question: 'A mechanism rationale cites isoelectric point (pI): pH where net charge is zero. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use isoelectric point (pI) to justify why the pathway favors disulfide bridge under oxidative cysteine coupling.',
              'Ignore isoelectric point (pI) and choose products only by molecular weight.',
              'Use isoelectric point (pI) only after final answer choice selection.',
              'Treat isoelectric point (pI) as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies isoelectric point (pI) directly to mechanism and product control. In this context, oxidative cysteine coupling aligns with disulfide bridge.'
          }
        ]
      }
    }
  ]
};
