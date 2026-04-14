export const oChemAromaticPart2Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 2 of 7 — Resonance and Aromatic Stabilization**
      
      This part focuses on drawing resonance contributors without violating octets. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **antiaromaticity**: cyclic planar conjugated system with 4n pi electrons
      - **nonaromatic**: fails planarity or conjugation requirement
      - **Huckel rule**: 4n+2 pi electron count predicts aromatic stabilization
      - **ring current**: magnetic anisotropy signature of aromatic systems
      
      ### Worked reaction example
      A representative transformation uses **HNO3, H2SO4**.
      
      1. Identify the governing mechanism: **nitration**.
      2. Predict the dominant product pattern: **nitrobenzene derivative**.
      3. Justify with a mechanistic note: forms nitronium electrophile.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for antiaromaticity.',
            options: [
              '4n+2 pi electron count predicts aromatic stabilization',
              'magnetic anisotropy signature of aromatic systems',
              'fails planarity or conjugation requirement',
              'cyclic planar conjugated system with 4n pi electrons'
            ],
            correctAnswer: 3,
            explanation: 'antiaromaticity is defined as: cyclic planar conjugated system with 4n pi electrons.'
          },
          {
            question: 'A reaction in this lesson uses SO3, H2SO4 and proceeds by sulfonation. What product pattern should you predict first?',
            options: [
              'aryl ketone',
              'aryl sulfonic acid',
              'alkylbenzene',
              'nitrobenzene derivative'
            ],
            correctAnswer: 1,
            explanation: 'With SO3, H2SO4, the benchmark outcome is aryl sulfonic acid. Mechanistic anchor: reversible under steam/acid.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HNO3, H2SO4 | nitration | nitrobenzene derivative | forms nitronium electrophile |
      | SO3, H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam/acid |
      | RCl, AlCl3 | Friedel-Crafts alkylation | alkylbenzene | carbocation rearrangement possible |
      | RCOCl, AlCl3 | Friedel-Crafts acylation | aryl ketone | no acylium rearrangement |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: cyclic planar conjugated system with 4n pi electrons

      2) Term for: fails planarity or conjugation requirement

      3) Product pattern expected under HNO3, H2SO4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['antiaromaticity', 'nonaromatic', 'nitrobenzene derivative'],
        hint1: 'Blank 1 is the vocabulary term paired with: cyclic planar conjugated system with 4n pi electrons.',
        hint2: 'Blank 2 corresponds to fails planarity or conjugation requirement.',
        hint3: 'Use the worked example: HNO3, H2SO4 gives nitrobenzene derivative.',
        explanation: 'Correct entries: antiaromaticity, nonaromatic, and nitrobenzene derivative. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Huckel rule',
            options: ['magnetic anisotropy signature of aromatic systems', '4n+2 pi electron count predicts aromatic stabilization', 'fails planarity or conjugation requirement', 'cyclic planar conjugated system with 4n pi electrons']
          },
          {
            label: 'Expected pattern from SO3, H2SO4',
            options: ['aryl sulfonic acid', 'alkylbenzene', 'nitrobenzene derivative', 'aryl ketone']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Benzylic oxidation needs at least one benzylic hydrogen.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Friedel-Crafts alkylation can over-alkylate activated rings.', 'Not every resonance drawing represents equivalent contributor weight.']
          }
        ],
        correctAnswers: ['4n+2 pi electron count predicts aromatic stabilization', 'aryl sulfonic acid', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p2-s6-strategy',
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
      id: 'ochem-aromatic-compounds-benzene-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on resonance and aromatic stabilization, a step uses RCl, AlCl3. Which major product pattern is most defensible?',
            options: [
              'alkylbenzene',
              'aryl ketone',
              'nitrobenzene derivative',
              'aryl sulfonic acid'
            ],
            correctAnswer: 0,
            explanation: 'RCl, AlCl3 is classically associated with alkylbenzene because carbocation rearrangement possible.'
          },
          {
            question: 'A mechanism rationale cites resonance contributor: valid Lewis structure sharing electron delocalization. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore resonance contributor and choose products only by molecular weight.',
              'Use resonance contributor only after final answer choice selection.',
              'Use resonance contributor to justify why the pathway favors aryl ketone under RCOCl, AlCl3.',
              'Treat resonance contributor as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies resonance contributor directly to mechanism and product control. In this context, RCOCl, AlCl3 aligns with aryl ketone.'
          }
        ]
      }
    }
  ]
};
