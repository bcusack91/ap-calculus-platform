export const oChemAminoAcidsPart3Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 3 of 7 — Peptide Bond Formation**
      
      This part focuses on tracking condensation and hydrolysis of peptide bonds. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **peptide bond**: amide linkage between amino acid residues
      - **primary structure**: linear amino acid sequence
      - **secondary structure**: local alpha-helix and beta-sheet motifs
      - **tertiary structure**: 3D fold from side-chain interactions
      
      ### Worked reaction example
      A representative transformation uses **base-promoted hydrolysis**.
      
      1. Identify the governing mechanism: **amide cleavage under basic conditions**.
      2. Predict the dominant product pattern: **carboxylate products**.
      3. Justify with a mechanistic note: irreversible in strong base.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for peptide bond.',
            options: [
              'linear amino acid sequence',
              'local alpha-helix and beta-sheet motifs',
              'amide linkage between amino acid residues',
              '3D fold from side-chain interactions'
            ],
            correctAnswer: 2,
            explanation: 'peptide bond is defined as: amide linkage between amino acid residues.'
          },
          {
            question: 'A reaction in this lesson uses oxidative cysteine coupling and proceeds by thiol oxidation. What product pattern should you predict first?',
            options: [
              'separation by net charge',
              'disulfide bridge',
              'carboxylate products',
              'colored complex'
            ],
            correctAnswer: 1,
            explanation: 'With oxidative cysteine coupling, the benchmark outcome is disulfide bridge. Mechanistic anchor: stabilizes extracellular proteins.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | base-promoted hydrolysis | amide cleavage under basic conditions | carboxylate products | irreversible in strong base |
      | oxidative cysteine coupling | thiol oxidation | disulfide bridge | stabilizes extracellular proteins |
      | ninhydrin test | amine detection | colored complex | used in amino acid analysis |
      | electrophoresis at chosen pH | charge-based migration | separation by net charge | relative to pI values |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: amide linkage between amino acid residues
      2) Term for: linear amino acid sequence
      3) Product pattern expected under base-promoted hydrolysis
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['peptide bond', 'primary structure', 'carboxylate products'],
        hint1: 'Blank 1 is the vocabulary term paired with: amide linkage between amino acid residues.',
        hint2: 'Blank 2 corresponds to linear amino acid sequence.',
        hint3: 'Use the worked example: base-promoted hydrolysis gives carboxylate products.',
        explanation: 'Correct entries: peptide bond, primary structure, and carboxylate products. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'secondary structure',
            options: ['local alpha-helix and beta-sheet motifs', 'amide linkage between amino acid residues', '3D fold from side-chain interactions', 'linear amino acid sequence']
          },
          {
            label: 'Expected pattern from oxidative cysteine coupling',
            options: ['disulfide bridge', 'separation by net charge', 'carboxylate products', 'colored complex']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Peptide bond rotation is restricted by partial double-bond character.', 'Side-chain pKa values shift in proteins due to local environment.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.']
          }
        ],
        correctAnswers: ['local alpha-helix and beta-sheet motifs', 'disulfide bridge', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p3-s6-strategy',
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
      id: 'ochem-amino-acids-proteins-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on peptide bond formation, a step uses ninhydrin test. Which major product pattern is most defensible?',
            options: [
              'disulfide bridge',
              'separation by net charge',
              'colored complex',
              'carboxylate products'
            ],
            correctAnswer: 2,
            explanation: 'ninhydrin test is classically associated with colored complex because used in amino acid analysis.'
          },
          {
            question: 'A mechanism rationale cites disulfide bond: covalent S-S linkage between cysteine residues. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use disulfide bond to justify why the pathway favors separation by net charge under electrophoresis at chosen pH.',
              'Use disulfide bond only after final answer choice selection.',
              'Treat disulfide bond as a naming convention unrelated to mechanism.',
              'Ignore disulfide bond and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies disulfide bond directly to mechanism and product control. In this context, electrophoresis at chosen pH aligns with separation by net charge.'
          }
        ]
      }
    }
  ]
};
