export const oChemAromaticPart6Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 6 of 7 — Synthesis Planning with Aromatics**
      
      This part focuses on choosing aromatic transformations in multistep routes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **resonance contributor**: valid Lewis structure sharing electron delocalization
      - **benzylic position**: carbon adjacent to aromatic ring
      - **activation**: substituent increases EAS rate
      - **deactivation**: substituent decreases EAS rate
      
      ### Worked reaction example
      A representative transformation uses **KMnO4, heat**.
      
      1. Identify the governing mechanism: **benzylic oxidation**.
      2. Predict the dominant product pattern: **benzoic acid derivative**.
      3. Justify with a mechanistic note: requires benzylic C-H.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for resonance contributor.',
            options: [
              'valid Lewis structure sharing electron delocalization',
              'substituent increases EAS rate',
              'substituent decreases EAS rate',
              'carbon adjacent to aromatic ring'
            ],
            correctAnswer: 0,
            explanation: 'resonance contributor is defined as: valid Lewis structure sharing electron delocalization.'
          },
          {
            question: 'A reaction in this lesson uses Br2, FeBr3 and proceeds by electrophilic aromatic substitution. What product pattern should you predict first?',
            options: [
              'nitrobenzene derivative',
              'benzoic acid derivative',
              'aryl sulfonic acid',
              'aryl bromide'
            ],
            correctAnswer: 3,
            explanation: 'With Br2, FeBr3, the benchmark outcome is aryl bromide. Mechanistic anchor: aromaticity restored after deprotonation.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | KMnO4, heat | benzylic oxidation | benzoic acid derivative | requires benzylic C-H |
      | Br2, FeBr3 | electrophilic aromatic substitution | aryl bromide | aromaticity restored after deprotonation |
      | HNO3, H2SO4 | nitration | nitrobenzene derivative | forms nitronium electrophile |
      | SO3, H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam/acid |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: valid Lewis structure sharing electron delocalization

      2) Term for: carbon adjacent to aromatic ring

      3) Product pattern expected under KMnO4, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['resonance contributor', 'benzylic position', 'benzoic acid derivative'],
        hint1: 'Blank 1 is the vocabulary term paired with: valid Lewis structure sharing electron delocalization.',
        hint2: 'Blank 2 corresponds to carbon adjacent to aromatic ring.',
        hint3: 'Use the worked example: KMnO4, heat gives benzoic acid derivative.',
        explanation: 'Correct entries: resonance contributor, benzylic position, and benzoic acid derivative. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'activation',
            options: ['substituent increases EAS rate', 'carbon adjacent to aromatic ring', 'substituent decreases EAS rate', 'valid Lewis structure sharing electron delocalization']
          },
          {
            label: 'Expected pattern from Br2, FeBr3',
            options: ['aryl sulfonic acid', 'benzoic acid derivative', 'aryl bromide', 'nitrobenzene derivative']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Not every resonance drawing represents equivalent contributor weight.', 'Benzylic oxidation needs at least one benzylic hydrogen.', 'Friedel-Crafts alkylation can over-alkylate activated rings.']
          }
        ],
        correctAnswers: ['substituent increases EAS rate', 'aryl bromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Friedel-Crafts alkylation can over-alkylate activated rings.
      - Not every resonance drawing represents equivalent contributor weight.
      - Benzylic oxidation needs at least one benzylic hydrogen.
      
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
      id: 'ochem-aromatic-compounds-benzene-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis planning with aromatics, a step uses HNO3, H2SO4. Which major product pattern is most defensible?',
            options: [
              'benzoic acid derivative',
              'aryl bromide',
              'aryl sulfonic acid',
              'nitrobenzene derivative'
            ],
            correctAnswer: 3,
            explanation: 'HNO3, H2SO4 is classically associated with nitrobenzene derivative because forms nitronium electrophile.'
          },
          {
            question: 'A mechanism rationale cites aromaticity: cyclic, planar, fully conjugated system with 4n+2 pi electrons. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore aromaticity and choose products only by molecular weight.',
              'Treat aromaticity as a naming convention unrelated to mechanism.',
              'Use aromaticity only after final answer choice selection.',
              'Use aromaticity to justify why the pathway favors aryl sulfonic acid under SO3, H2SO4.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies aromaticity directly to mechanism and product control. In this context, SO3, H2SO4 aligns with aryl sulfonic acid.'
          }
        ]
      }
    }
  ]
};
