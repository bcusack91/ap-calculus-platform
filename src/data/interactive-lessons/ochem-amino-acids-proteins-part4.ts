export const oChemAminoAcidsPart4Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'ochem-amino-acids-proteins-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Amino Acids and Proteins
      
      **Part 4 of 7 — Protein Levels of Structure**
      
      This part focuses on linking noncovalent forces to folding outcomes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **primary structure**: linear amino acid sequence
      - **secondary structure**: local alpha-helix and beta-sheet motifs
      - **tertiary structure**: 3D fold from side-chain interactions
      - **disulfide bond**: covalent S-S linkage between cysteine residues
      
      ### Worked reaction example
      A representative transformation uses **oxidative cysteine coupling**.
      
      1. Identify the governing mechanism: **thiol oxidation**.
      2. Predict the dominant product pattern: **disulfide bridge**.
      3. Justify with a mechanistic note: stabilizes extracellular proteins.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for primary structure.',
            options: [
              '3D fold from side-chain interactions',
              'covalent S-S linkage between cysteine residues',
              'local alpha-helix and beta-sheet motifs',
              'linear amino acid sequence'
            ],
            correctAnswer: 3,
            explanation: 'primary structure is defined as: linear amino acid sequence.'
          },
          {
            question: 'A reaction in this lesson uses ninhydrin test and proceeds by amine detection. What product pattern should you predict first?',
            options: [
              'separation by net charge',
              'colored complex',
              'disulfide bridge',
              'peptide bond formed'
            ],
            correctAnswer: 1,
            explanation: 'With ninhydrin test, the benchmark outcome is colored complex. Mechanistic anchor: used in amino acid analysis.'
          }
        ]
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | oxidative cysteine coupling | thiol oxidation | disulfide bridge | stabilizes extracellular proteins |
      | ninhydrin test | amine detection | colored complex | used in amino acid analysis |
      | electrophoresis at chosen pH | charge-based migration | separation by net charge | relative to pI values |
      | amino acid + amino acid, coupling reagent | condensation | peptide bond formed | protecting groups often required |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amino-acids-proteins-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: linear amino acid sequence

      2) Term for: local alpha-helix and beta-sheet motifs

      3) Product pattern expected under oxidative cysteine coupling
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['primary structure', 'secondary structure', 'disulfide bridge'],
        hint1: 'Blank 1 is the vocabulary term paired with: linear amino acid sequence.',
        hint2: 'Blank 2 corresponds to local alpha-helix and beta-sheet motifs.',
        hint3: 'Use the worked example: oxidative cysteine coupling gives disulfide bridge.',
        explanation: 'Correct entries: primary structure, secondary structure, and disulfide bridge. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'tertiary structure',
            options: ['local alpha-helix and beta-sheet motifs', '3D fold from side-chain interactions', 'covalent S-S linkage between cysteine residues', 'linear amino acid sequence']
          },
          {
            label: 'Expected pattern from ninhydrin test',
            options: ['separation by net charge', 'peptide bond formed', 'colored complex', 'disulfide bridge']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Denaturation changes folding but does not normally hydrolyze peptide bonds.', 'Peptide bond rotation is restricted by partial double-bond character.', 'At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['3D fold from side-chain interactions', 'colored complex', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amino-acids-proteins-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Peptide bond rotation is restricted by partial double-bond character.
      - At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.
      - Denaturation changes folding but does not normally hydrolyze peptide bonds.
      
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
      id: 'ochem-amino-acids-proteins-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on protein levels of structure, a step uses electrophoresis at chosen pH. Which major product pattern is most defensible?',
            options: [
              'separation by net charge',
              'disulfide bridge',
              'colored complex',
              'peptide bond formed'
            ],
            correctAnswer: 0,
            explanation: 'electrophoresis at chosen pH is classically associated with separation by net charge because relative to pI values.'
          },
          {
            question: 'A mechanism rationale cites denaturation: loss of higher-order structure without peptide cleavage. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use denaturation to justify why the pathway favors peptide bond formed under amino acid + amino acid, coupling reagent.',
              'Treat denaturation as a naming convention unrelated to mechanism.',
              'Use denaturation only after final answer choice selection.',
              'Ignore denaturation and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies denaturation directly to mechanism and product control. In this context, amino acid + amino acid, coupling reagent aligns with peptide bond formed.'
          }
        ]
      }
    }
  ]
};
