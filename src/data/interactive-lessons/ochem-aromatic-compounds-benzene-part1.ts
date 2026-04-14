export const oChemAromaticPart1Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 1 of 7 — Aromaticity Criteria**
      
      This part focuses on classifying cyclic conjugated systems by aromatic behavior. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **aromaticity**: cyclic, planar, fully conjugated system with 4n+2 pi electrons
      - **antiaromaticity**: cyclic planar conjugated system with 4n pi electrons
      - **nonaromatic**: fails planarity or conjugation requirement
      - **Huckel rule**: 4n+2 pi electron count predicts aromatic stabilization
      
      ### Worked reaction example
      A representative transformation uses **Br2, FeBr3**.
      
      1. Identify the governing mechanism: **electrophilic aromatic substitution**.
      2. Predict the dominant product pattern: **aryl bromide**.
      3. Justify with a mechanistic note: aromaticity restored after deprotonation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for aromaticity.',
            options: [
              'cyclic, planar, fully conjugated system with 4n+2 pi electrons',
              '4n+2 pi electron count predicts aromatic stabilization',
              'fails planarity or conjugation requirement',
              'cyclic planar conjugated system with 4n pi electrons'
            ],
            correctAnswer: 0,
            explanation: 'aromaticity is defined as: cyclic, planar, fully conjugated system with 4n+2 pi electrons.'
          },
          {
            question: 'A reaction in this lesson uses HNO3, H2SO4 and proceeds by nitration. What product pattern should you predict first?',
            options: [
              'nitrobenzene derivative',
              'alkylbenzene',
              'aryl bromide',
              'aryl sulfonic acid'
            ],
            correctAnswer: 0,
            explanation: 'With HNO3, H2SO4, the benchmark outcome is nitrobenzene derivative. Mechanistic anchor: forms nitronium electrophile.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2, FeBr3 | electrophilic aromatic substitution | aryl bromide | aromaticity restored after deprotonation |
      | HNO3, H2SO4 | nitration | nitrobenzene derivative | forms nitronium electrophile |
      | SO3, H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam/acid |
      | RCl, AlCl3 | Friedel-Crafts alkylation | alkylbenzene | carbocation rearrangement possible |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: cyclic, planar, fully conjugated system with 4n+2 pi electrons

      2) Term for: cyclic planar conjugated system with 4n pi electrons

      3) Product pattern expected under Br2, FeBr3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aromaticity', 'antiaromaticity', 'aryl bromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: cyclic, planar, fully conjugated system with 4n+2 pi electrons.',
        hint2: 'Blank 2 corresponds to cyclic planar conjugated system with 4n pi electrons.',
        hint3: 'Use the worked example: Br2, FeBr3 gives aryl bromide.',
        explanation: 'Correct entries: aromaticity, antiaromaticity, and aryl bromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nonaromatic',
            options: ['fails planarity or conjugation requirement', '4n+2 pi electron count predicts aromatic stabilization', 'cyclic planar conjugated system with 4n pi electrons', 'cyclic, planar, fully conjugated system with 4n+2 pi electrons']
          },
          {
            label: 'Expected pattern from HNO3, H2SO4',
            options: ['alkylbenzene', 'nitrobenzene derivative', 'aryl bromide', 'aryl sulfonic acid']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Not every resonance drawing represents equivalent contributor weight.', 'Aromatic classification depends on electron count and geometry simultaneously.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Friedel-Crafts alkylation can over-alkylate activated rings.']
          }
        ],
        correctAnswers: ['fails planarity or conjugation requirement', 'nitrobenzene derivative', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Aromatic classification depends on electron count and geometry simultaneously.
      - Friedel-Crafts alkylation can over-alkylate activated rings.
      - Not every resonance drawing represents equivalent contributor weight.
      
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
      id: 'ochem-aromatic-compounds-benzene-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on aromaticity criteria, a step uses SO3, H2SO4. Which major product pattern is most defensible?',
            options: [
              'aryl bromide',
              'nitrobenzene derivative',
              'aryl sulfonic acid',
              'alkylbenzene'
            ],
            correctAnswer: 2,
            explanation: 'SO3, H2SO4 is classically associated with aryl sulfonic acid because reversible under steam/acid.'
          },
          {
            question: 'A mechanism rationale cites ring current: magnetic anisotropy signature of aromatic systems. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat ring current as a naming convention unrelated to mechanism.',
              'Ignore ring current and choose products only by molecular weight.',
              'Use ring current only after final answer choice selection.',
              'Use ring current to justify why the pathway favors alkylbenzene under RCl, AlCl3.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies ring current directly to mechanism and product control. In this context, RCl, AlCl3 aligns with alkylbenzene.'
          }
        ]
      }
    }
  ]
};
