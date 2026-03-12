export const oChemAromaticPart3Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 3 of 7 — Substituent Effects on Ring Reactivity**
      
      This part focuses on predicting ring activation and deactivation trends. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **nonaromatic**: fails planarity or conjugation requirement
      - **Huckel rule**: 4n+2 pi electron count predicts aromatic stabilization
      - **ring current**: magnetic anisotropy signature of aromatic systems
      - **resonance contributor**: valid Lewis structure sharing electron delocalization
      
      ### Worked reaction example
      A representative transformation uses **SO3, H2SO4**.
      
      1. Identify the governing mechanism: **sulfonation**.
      2. Predict the dominant product pattern: **aryl sulfonic acid**.
      3. Justify with a mechanistic note: reversible under steam/acid.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for nonaromatic.',
            options: [
              'fails planarity or conjugation requirement',
              'valid Lewis structure sharing electron delocalization',
              '4n+2 pi electron count predicts aromatic stabilization',
              'magnetic anisotropy signature of aromatic systems'
            ],
            correctAnswer: 0,
            explanation: 'nonaromatic is defined as: fails planarity or conjugation requirement.'
          },
          {
            question: 'A reaction in this lesson uses RCl, AlCl3 and proceeds by Friedel-Crafts alkylation. What product pattern should you predict first?',
            options: [
              'alkylbenzene',
              'aryl ketone',
              'benzoic acid derivative',
              'aryl sulfonic acid'
            ],
            correctAnswer: 0,
            explanation: 'With RCl, AlCl3, the benchmark outcome is alkylbenzene. Mechanistic anchor: carbocation rearrangement possible.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | SO3, H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam/acid |
      | RCl, AlCl3 | Friedel-Crafts alkylation | alkylbenzene | carbocation rearrangement possible |
      | RCOCl, AlCl3 | Friedel-Crafts acylation | aryl ketone | no acylium rearrangement |
      | KMnO4, heat | benzylic oxidation | benzoic acid derivative | requires benzylic C-H |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: fails planarity or conjugation requirement
      2) Term for: 4n+2 pi electron count predicts aromatic stabilization
      3) Product pattern expected under SO3, H2SO4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nonaromatic', 'Huckel rule', 'aryl sulfonic acid'],
        hint1: 'Blank 1 is the vocabulary term paired with: fails planarity or conjugation requirement.',
        hint2: 'Blank 2 corresponds to 4n+2 pi electron count predicts aromatic stabilization.',
        hint3: 'Use the worked example: SO3, H2SO4 gives aryl sulfonic acid.',
        explanation: 'Correct entries: nonaromatic, Huckel rule, and aryl sulfonic acid. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ring current',
            options: ['fails planarity or conjugation requirement', 'valid Lewis structure sharing electron delocalization', '4n+2 pi electron count predicts aromatic stabilization', 'magnetic anisotropy signature of aromatic systems']
          },
          {
            label: 'Expected pattern from RCl, AlCl3',
            options: ['benzoic acid derivative', 'aryl ketone', 'aryl sulfonic acid', 'alkylbenzene']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Benzylic oxidation needs at least one benzylic hydrogen.', 'Not every resonance drawing represents equivalent contributor weight.', 'Aromatic classification depends on electron count and geometry simultaneously.']
          }
        ],
        correctAnswers: ['magnetic anisotropy signature of aromatic systems', 'alkylbenzene', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Not every resonance drawing represents equivalent contributor weight.
      - Benzylic oxidation needs at least one benzylic hydrogen.
      - Aromatic classification depends on electron count and geometry simultaneously.
      
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
      id: 'ochem-aromatic-compounds-benzene-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on substituent effects on ring reactivity, a step uses RCOCl, AlCl3. Which major product pattern is most defensible?',
            options: [
              'aryl sulfonic acid',
              'alkylbenzene',
              'aryl ketone',
              'benzoic acid derivative'
            ],
            correctAnswer: 2,
            explanation: 'RCOCl, AlCl3 is classically associated with aryl ketone because no acylium rearrangement.'
          },
          {
            question: 'A mechanism rationale cites benzylic position: carbon adjacent to aromatic ring. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use benzylic position to justify why the pathway favors benzoic acid derivative under KMnO4, heat.',
              'Treat benzylic position as a naming convention unrelated to mechanism.',
              'Use benzylic position only after final answer choice selection.',
              'Ignore benzylic position and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies benzylic position directly to mechanism and product control. In this context, KMnO4, heat aligns with benzoic acid derivative.'
          }
        ]
      }
    }
  ]
};
