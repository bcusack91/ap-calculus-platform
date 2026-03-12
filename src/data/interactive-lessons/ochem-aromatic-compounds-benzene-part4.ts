export const oChemAromaticPart4Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 4 of 7 — Polycyclic Aromatic Systems**
      
      This part focuses on comparing fused-ring stabilization patterns. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Huckel rule**: 4n+2 pi electron count predicts aromatic stabilization
      - **ring current**: magnetic anisotropy signature of aromatic systems
      - **resonance contributor**: valid Lewis structure sharing electron delocalization
      - **benzylic position**: carbon adjacent to aromatic ring
      
      ### Worked reaction example
      A representative transformation uses **RCl, AlCl3**.
      
      1. Identify the governing mechanism: **Friedel-Crafts alkylation**.
      2. Predict the dominant product pattern: **alkylbenzene**.
      3. Justify with a mechanistic note: carbocation rearrangement possible.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Huckel rule.',
            options: [
              'carbon adjacent to aromatic ring',
              '4n+2 pi electron count predicts aromatic stabilization',
              'magnetic anisotropy signature of aromatic systems',
              'valid Lewis structure sharing electron delocalization'
            ],
            correctAnswer: 1,
            explanation: 'Huckel rule is defined as: 4n+2 pi electron count predicts aromatic stabilization.'
          },
          {
            question: 'A reaction in this lesson uses RCOCl, AlCl3 and proceeds by Friedel-Crafts acylation. What product pattern should you predict first?',
            options: [
              'alkylbenzene',
              'aryl bromide',
              'aryl ketone',
              'benzoic acid derivative'
            ],
            correctAnswer: 2,
            explanation: 'With RCOCl, AlCl3, the benchmark outcome is aryl ketone. Mechanistic anchor: no acylium rearrangement.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCl, AlCl3 | Friedel-Crafts alkylation | alkylbenzene | carbocation rearrangement possible |
      | RCOCl, AlCl3 | Friedel-Crafts acylation | aryl ketone | no acylium rearrangement |
      | KMnO4, heat | benzylic oxidation | benzoic acid derivative | requires benzylic C-H |
      | Br2, FeBr3 | electrophilic aromatic substitution | aryl bromide | aromaticity restored after deprotonation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: 4n+2 pi electron count predicts aromatic stabilization
      2) Term for: magnetic anisotropy signature of aromatic systems
      3) Product pattern expected under RCl, AlCl3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Huckel rule', 'ring current', 'alkylbenzene'],
        hint1: 'Blank 1 is the vocabulary term paired with: 4n+2 pi electron count predicts aromatic stabilization.',
        hint2: 'Blank 2 corresponds to magnetic anisotropy signature of aromatic systems.',
        hint3: 'Use the worked example: RCl, AlCl3 gives alkylbenzene.',
        explanation: 'Correct entries: Huckel rule, ring current, and alkylbenzene. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'resonance contributor',
            options: ['carbon adjacent to aromatic ring', 'magnetic anisotropy signature of aromatic systems', '4n+2 pi electron count predicts aromatic stabilization', 'valid Lewis structure sharing electron delocalization']
          },
          {
            label: 'Expected pattern from RCOCl, AlCl3',
            options: ['aryl bromide', 'alkylbenzene', 'benzoic acid derivative', 'aryl ketone']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Benzylic oxidation needs at least one benzylic hydrogen.', 'Aromatic classification depends on electron count and geometry simultaneously.', 'Friedel-Crafts alkylation can over-alkylate activated rings.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['valid Lewis structure sharing electron delocalization', 'aryl ketone', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Benzylic oxidation needs at least one benzylic hydrogen.
      - Aromatic classification depends on electron count and geometry simultaneously.
      - Friedel-Crafts alkylation can over-alkylate activated rings.
      
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
      id: 'ochem-aromatic-compounds-benzene-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on polycyclic aromatic systems, a step uses KMnO4, heat. Which major product pattern is most defensible?',
            options: [
              'alkylbenzene',
              'aryl ketone',
              'benzoic acid derivative',
              'aryl bromide'
            ],
            correctAnswer: 2,
            explanation: 'KMnO4, heat is classically associated with benzoic acid derivative because requires benzylic C-H.'
          },
          {
            question: 'A mechanism rationale cites activation: substituent increases EAS rate. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore activation and choose products only by molecular weight.',
              'Use activation only after final answer choice selection.',
              'Treat activation as a naming convention unrelated to mechanism.',
              'Use activation to justify why the pathway favors aryl bromide under Br2, FeBr3.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies activation directly to mechanism and product control. In this context, Br2, FeBr3 aligns with aryl bromide.'
          }
        ]
      }
    }
  ]
};
