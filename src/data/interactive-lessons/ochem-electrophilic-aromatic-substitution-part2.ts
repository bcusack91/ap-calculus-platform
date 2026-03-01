export const oChemEASPart2Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 2 of 7 — Directing Effects**
      
      This part focuses on predicting ortho/para versus meta outcomes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **ortho/para director**: substituent that donates electron density to o/p positions
      - **meta director**: electron-withdrawing substituent directing meta substitution
      - **activating group**: substituent increasing ring reactivity
      - **deactivating group**: substituent decreasing ring reactivity
      
      ### Worked reaction example
      A representative transformation uses **Br2/FeBr3**.
      
      1. Identify the governing mechanism: **halogenation**.
      2. Predict the dominant product pattern: **aryl bromide**.
      3. Justify with a mechanistic note: sigma complex then deprotonation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for ortho/para director.',
            options: [
              'substituent decreasing ring reactivity',
              'substituent increasing ring reactivity',
              'substituent that donates electron density to o/p positions',
              'electron-withdrawing substituent directing meta substitution'
            ],
            correctAnswer: 2,
            explanation: 'ortho/para director is defined as: substituent that donates electron density to o/p positions.'
          },
          {
            question: 'A reaction in this lesson uses SO3/H2SO4 and proceeds by sulfonation. What product pattern should you predict first?',
            options: [
              'alkylbenzene',
              'aryl ketone',
              'aryl bromide',
              'aryl sulfonic acid'
            ],
            correctAnswer: 3,
            explanation: 'With SO3/H2SO4, the benchmark outcome is aryl sulfonic acid. Mechanistic anchor: reversible under steam.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2/FeBr3 | halogenation | aryl bromide | sigma complex then deprotonation |
      | SO3/H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam |
      | RCl/AlCl3 | Friedel-Crafts alkylation | alkylbenzene | rearrangement and overreaction risk |
      | RCOCl/AlCl3 | Friedel-Crafts acylation | aryl ketone | single acylation is typical |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: substituent that donates electron density to o/p positions
      2) Term for: electron-withdrawing substituent directing meta substitution
      3) Product pattern expected under Br2/FeBr3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ortho/para director', 'meta director', 'aryl bromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: substituent that donates electron density to o/p positions.',
        hint2: 'Blank 2 corresponds to electron-withdrawing substituent directing meta substitution.',
        hint3: 'Use the worked example: Br2/FeBr3 gives aryl bromide.',
        explanation: 'Correct entries: ortho/para director, meta director, and aryl bromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'activating group',
            options: ['substituent increasing ring reactivity', 'substituent decreasing ring reactivity', 'substituent that donates electron density to o/p positions', 'electron-withdrawing substituent directing meta substitution']
          },
          {
            label: 'Expected pattern from SO3/H2SO4',
            options: ['aryl bromide', 'alkylbenzene', 'aryl sulfonic acid', 'aryl ketone']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Halogens are deactivating despite ortho/para direction.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Order of substitution can determine whether route is feasible.', 'Friedel-Crafts often fails on strongly deactivated rings.']
          }
        ],
        correctAnswers: ['substituent increasing ring reactivity', 'aryl sulfonic acid', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Halogens are deactivating despite ortho/para direction.
      - Friedel-Crafts often fails on strongly deactivated rings.
      - Order of substitution can determine whether route is feasible.
      
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
      id: 'ochem-electrophilic-aromatic-substitution-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on directing effects, a step uses RCl/AlCl3. Which major product pattern is most defensible?',
            options: [
              'aryl sulfonic acid',
              'alkylbenzene',
              'aryl bromide',
              'aryl ketone'
            ],
            correctAnswer: 1,
            explanation: 'RCl/AlCl3 is classically associated with alkylbenzene because rearrangement and overreaction risk.'
          },
          {
            question: 'A mechanism rationale cites halogen exception: halogens direct ortho/para but deactivate overall. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat halogen exception as a naming convention unrelated to mechanism.',
              'Ignore halogen exception and choose products only by molecular weight.',
              'Use halogen exception to justify why the pathway favors aryl ketone under RCOCl/AlCl3.',
              'Use halogen exception only after final answer choice selection.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies halogen exception directly to mechanism and product control. In this context, RCOCl/AlCl3 aligns with aryl ketone.'
          }
        ]
      }
    }
  ]
};
