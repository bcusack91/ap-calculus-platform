export const oChemAminoAcidsPart2Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 2 of 7 — pI and Buffering Logic**
      
      This part focuses on solving isoelectric-point and titration curve questions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **isoelectric point (pI)**: pH where net charge is zero
      - **peptide bond**: amide linkage between amino acid residues
      - **primary structure**: linear amino acid sequence
      - **secondary structure**: local alpha-helix and beta-sheet motifs
      
      ### Worked reaction example
      A representative transformation uses **acidic hydrolysis**.
      
      1. Identify the governing mechanism: **amide cleavage**.
      2. Predict the dominant product pattern: **free amino acids from peptide**.
      3. Justify with a mechanistic note: breaks peptide backbone.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for isoelectric point (pI).',
            options: [
              'amide linkage between amino acid residues',
              'pH where net charge is zero',
              'linear amino acid sequence',
              'local alpha-helix and beta-sheet motifs'
            ],
            correctAnswer: 1,
            explanation: 'isoelectric point (pI) is defined as: pH where net charge is zero.'
          },
          {
            question: 'A reaction in this lesson uses base-promoted hydrolysis and proceeds by amide cleavage under basic conditions. What product pattern should you predict first?',
            options: [
              'disulfide bridge',
              'colored complex',
              'free amino acids from peptide',
              'carboxylate products'
            ],
            correctAnswer: 3,
            explanation: 'With base-promoted hydrolysis, the benchmark outcome is carboxylate products. Mechanistic anchor: irreversible in strong base.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | acidic hydrolysis | amide cleavage | free amino acids from peptide | breaks peptide backbone |
      | base-promoted hydrolysis | amide cleavage under basic conditions | carboxylate products | irreversible in strong base |
      | oxidative cysteine coupling | thiol oxidation | disulfide bridge | stabilizes extracellular proteins |
      | ninhydrin test | amine detection | colored complex | used in amino acid analysis |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: pH where net charge is zero
      2) Term for: amide linkage between amino acid residues
      3) Product pattern expected under acidic hydrolysis
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['isoelectric point (pI)', 'peptide bond', 'free amino acids from peptide'],
        hint1: 'Blank 1 is the vocabulary term paired with: pH where net charge is zero.',
        hint2: 'Blank 2 corresponds to amide linkage between amino acid residues.',
        hint3: 'Use the worked example: acidic hydrolysis gives free amino acids from peptide.',
        explanation: 'Correct entries: isoelectric point (pI), peptide bond, and free amino acids from peptide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'primary structure',
            options: ['pH where net charge is zero', 'linear amino acid sequence', 'amide linkage between amino acid residues', 'local alpha-helix and beta-sheet motifs']
          },
          {
            label: 'Expected pattern from base-promoted hydrolysis',
            options: ['disulfide bridge', 'colored complex', 'carboxylate products', 'free amino acids from peptide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Side-chain pKa values shift in proteins due to local environment.', 'Peptide bond rotation is restricted by partial double-bond character.', 'Denaturation changes folding but does not normally hydrolyze peptide bonds.']
          }
        ],
        correctAnswers: ['linear amino acid sequence', 'carboxylate products', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p2-s6-strategy',
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
      id: 'ochem-amino-acids-proteins-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on pi and buffering logic, a step uses oxidative cysteine coupling. Which major product pattern is most defensible?',
            options: [
              'colored complex',
              'free amino acids from peptide',
              'carboxylate products',
              'disulfide bridge'
            ],
            correctAnswer: 3,
            explanation: 'oxidative cysteine coupling is classically associated with disulfide bridge because stabilizes extracellular proteins.'
          },
          {
            question: 'A mechanism rationale cites tertiary structure: 3D fold from side-chain interactions. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat tertiary structure as a naming convention unrelated to mechanism.',
              'Use tertiary structure only after final answer choice selection.',
              'Ignore tertiary structure and choose products only by molecular weight.',
              'Use tertiary structure to justify why the pathway favors colored complex under ninhydrin test.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies tertiary structure directly to mechanism and product control. In this context, ninhydrin test aligns with colored complex.'
          }
        ]
      }
    }
  ]
};
