export const oChemAromaticPart7Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 7 of 7 — High-Yield Aromatic Review**
      
      This part focuses on integrating aromatic logic with EAS and substitution questions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **benzylic position**: carbon adjacent to aromatic ring
      - **activation**: substituent increases EAS rate
      - **deactivation**: substituent decreases EAS rate
      - **aromaticity**: cyclic, planar, fully conjugated system with 4n+2 pi electrons
      
      ### Worked reaction example
      A representative transformation uses **Br2, FeBr3**.
      
      1. Identify the governing mechanism: **electrophilic aromatic substitution**.
      2. Predict the dominant product pattern: **aryl bromide**.
      3. Justify with a mechanistic note: aromaticity restored after deprotonation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for benzylic position.',
            options: [
              'cyclic, planar, fully conjugated system with 4n+2 pi electrons',
              'carbon adjacent to aromatic ring',
              'substituent decreases EAS rate',
              'substituent increases EAS rate'
            ],
            correctAnswer: 1,
            explanation: 'benzylic position is defined as: carbon adjacent to aromatic ring.'
          },
          {
            question: 'A reaction in this lesson uses HNO3, H2SO4 and proceeds by nitration. What product pattern should you predict first?',
            options: [
              'aryl sulfonic acid',
              'nitrobenzene derivative',
              'aryl bromide',
              'alkylbenzene'
            ],
            correctAnswer: 1,
            explanation: 'With HNO3, H2SO4, the benchmark outcome is nitrobenzene derivative. Mechanistic anchor: forms nitronium electrophile.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p7-s3-deep-dive',
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
      id: 'ochem-aromatic-compounds-benzene-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: carbon adjacent to aromatic ring
      2) Term for: substituent increases EAS rate
      3) Product pattern expected under Br2, FeBr3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['benzylic position', 'activation', 'aryl bromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: carbon adjacent to aromatic ring.',
        hint2: 'Blank 2 corresponds to substituent increases EAS rate.',
        hint3: 'Use the worked example: Br2, FeBr3 gives aryl bromide.',
        explanation: 'Correct entries: benzylic position, activation, and aryl bromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'deactivation',
            options: ['cyclic, planar, fully conjugated system with 4n+2 pi electrons', 'carbon adjacent to aromatic ring', 'substituent increases EAS rate', 'substituent decreases EAS rate']
          },
          {
            label: 'Expected pattern from HNO3, H2SO4',
            options: ['aryl bromide', 'aryl sulfonic acid', 'alkylbenzene', 'nitrobenzene derivative']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Benzylic oxidation needs at least one benzylic hydrogen.', 'Not every resonance drawing represents equivalent contributor weight.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Aromatic classification depends on electron count and geometry simultaneously.']
          }
        ],
        correctAnswers: ['substituent decreases EAS rate', 'nitrobenzene derivative', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p7-s6-strategy',
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
      id: 'ochem-aromatic-compounds-benzene-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on high-yield aromatic review, a step uses SO3, H2SO4. Which major product pattern is most defensible?',
            options: [
              'aryl sulfonic acid',
              'aryl bromide',
              'alkylbenzene',
              'nitrobenzene derivative'
            ],
            correctAnswer: 0,
            explanation: 'SO3, H2SO4 is classically associated with aryl sulfonic acid because reversible under steam/acid.'
          },
          {
            question: 'A mechanism rationale cites antiaromaticity: cyclic planar conjugated system with 4n pi electrons. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use antiaromaticity only after final answer choice selection.',
              'Treat antiaromaticity as a naming convention unrelated to mechanism.',
              'Ignore antiaromaticity and choose products only by molecular weight.',
              'Use antiaromaticity to justify why the pathway favors alkylbenzene under RCl, AlCl3.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies antiaromaticity directly to mechanism and product control. In this context, RCl, AlCl3 aligns with alkylbenzene.'
          }
        ]
      }
    }
  ]
};
