export const oChemAminoAcidsPart1Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 1 of 7 — Amino Acid Structure and Ionization**
      
      This part focuses on predicting charge state at physiological and nonphysiological pH. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **zwitterion**: species containing both positive and negative charges
      - **isoelectric point (pI)**: pH where net charge is zero
      - **peptide bond**: amide linkage between amino acid residues
      - **primary structure**: linear amino acid sequence
      
      ### Worked reaction example
      A representative transformation uses **amino acid + amino acid, coupling reagent**.
      
      1. Identify the governing mechanism: **condensation**.
      2. Predict the dominant product pattern: **peptide bond formed**.
      3. Justify with a mechanistic note: protecting groups often required.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for zwitterion.',
            options: [
              'amide linkage between amino acid residues',
              'species containing both positive and negative charges',
              'linear amino acid sequence',
              'pH where net charge is zero'
            ],
            correctAnswer: 1,
            explanation: 'zwitterion is defined as: species containing both positive and negative charges.'
          },
          {
            question: 'A reaction in this lesson uses acidic hydrolysis and proceeds by amide cleavage. What product pattern should you predict first?',
            options: [
              'free amino acids from peptide',
              'peptide bond formed',
              'disulfide bridge',
              'carboxylate products'
            ],
            correctAnswer: 0,
            explanation: 'With acidic hydrolysis, the benchmark outcome is free amino acids from peptide. Mechanistic anchor: breaks peptide backbone.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p1-s3-deep-dive',
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
      id: 'ochem-amino-acids-proteins-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: species containing both positive and negative charges
      2) Term for: pH where net charge is zero
      3) Product pattern expected under amino acid + amino acid, coupling reagent
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['zwitterion', 'isoelectric point (pI)', 'peptide bond formed'],
        hint1: 'Blank 1 is the vocabulary term paired with: species containing both positive and negative charges.',
        hint2: 'Blank 2 corresponds to pH where net charge is zero.',
        hint3: 'Use the worked example: amino acid + amino acid, coupling reagent gives peptide bond formed.',
        explanation: 'Correct entries: zwitterion, isoelectric point (pI), and peptide bond formed. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'peptide bond',
            options: ['pH where net charge is zero', 'species containing both positive and negative charges', 'amide linkage between amino acid residues', 'linear amino acid sequence']
          },
          {
            label: 'Expected pattern from acidic hydrolysis',
            options: ['free amino acids from peptide', 'carboxylate products', 'disulfide bridge', 'peptide bond formed']
          },
          {
            label: 'Best exam strategy statement',
            options: ['At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.', 'Denaturation changes folding but does not normally hydrolyze peptide bonds.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Side-chain pKa values shift in proteins due to local environment.']
          }
        ],
        correctAnswers: ['amide linkage between amino acid residues', 'free amino acids from peptide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p1-s6-strategy',
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
      id: 'ochem-amino-acids-proteins-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on amino acid structure and ionization, a step uses base-promoted hydrolysis. Which major product pattern is most defensible?',
            options: [
              'carboxylate products',
              'peptide bond formed',
              'free amino acids from peptide',
              'disulfide bridge'
            ],
            correctAnswer: 0,
            explanation: 'base-promoted hydrolysis is classically associated with carboxylate products because irreversible in strong base.'
          },
          {
            question: 'A mechanism rationale cites secondary structure: local alpha-helix and beta-sheet motifs. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use secondary structure only after final answer choice selection.',
              'Ignore secondary structure and choose products only by molecular weight.',
              'Treat secondary structure as a naming convention unrelated to mechanism.',
              'Use secondary structure to justify why the pathway favors disulfide bridge under oxidative cysteine coupling.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies secondary structure directly to mechanism and product control. In this context, oxidative cysteine coupling aligns with disulfide bridge.'
          }
        ]
      }
    }
  ]
};
