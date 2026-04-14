export const oChemEASPart3Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 3 of 7 — Activating vs Deactivating Groups**
      
      This part focuses on estimating relative rates among substituted benzenes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **meta director**: electron-withdrawing substituent directing meta substitution
      - **activating group**: substituent increasing ring reactivity
      - **deactivating group**: substituent decreasing ring reactivity
      - **halogen exception**: halogens direct ortho/para but deactivate overall
      
      ### Worked reaction example
      A representative transformation uses **SO3/H2SO4**.
      
      1. Identify the governing mechanism: **sulfonation**.
      2. Predict the dominant product pattern: **aryl sulfonic acid**.
      3. Justify with a mechanistic note: reversible under steam.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for meta director.',
            options: [
              'substituent decreasing ring reactivity',
              'substituent increasing ring reactivity',
              'electron-withdrawing substituent directing meta substitution',
              'halogens direct ortho/para but deactivate overall'
            ],
            correctAnswer: 2,
            explanation: 'meta director is defined as: electron-withdrawing substituent directing meta substitution.'
          },
          {
            question: 'A reaction in this lesson uses RCl/AlCl3 and proceeds by Friedel-Crafts alkylation. What product pattern should you predict first?',
            options: [
              'regio-controlled aromatic product',
              'alkylbenzene',
              'aryl ketone',
              'aryl sulfonic acid'
            ],
            correctAnswer: 1,
            explanation: 'With RCl/AlCl3, the benchmark outcome is alkylbenzene. Mechanistic anchor: rearrangement and overreaction risk.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | SO3/H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam |
      | RCl/AlCl3 | Friedel-Crafts alkylation | alkylbenzene | rearrangement and overreaction risk |
      | RCOCl/AlCl3 | Friedel-Crafts acylation | aryl ketone | single acylation is typical |
      | desulfonation (H3O+, heat) | removal of SO3H blocker | regio-controlled aromatic product | used in sequence design |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: electron-withdrawing substituent directing meta substitution

      2) Term for: substituent increasing ring reactivity

      3) Product pattern expected under SO3/H2SO4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['meta director', 'activating group', 'aryl sulfonic acid'],
        hint1: 'Blank 1 is the vocabulary term paired with: electron-withdrawing substituent directing meta substitution.',
        hint2: 'Blank 2 corresponds to substituent increasing ring reactivity.',
        hint3: 'Use the worked example: SO3/H2SO4 gives aryl sulfonic acid.',
        explanation: 'Correct entries: meta director, activating group, and aryl sulfonic acid. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'deactivating group',
            options: ['halogens direct ortho/para but deactivate overall', 'electron-withdrawing substituent directing meta substitution', 'substituent decreasing ring reactivity', 'substituent increasing ring reactivity']
          },
          {
            label: 'Expected pattern from RCl/AlCl3',
            options: ['aryl ketone', 'alkylbenzene', 'regio-controlled aromatic product', 'aryl sulfonic acid']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Order of substitution can determine whether route is feasible.', 'Directing effects come from substituent electronics in sigma-complex resonance forms.', 'Friedel-Crafts often fails on strongly deactivated rings.']
          }
        ],
        correctAnswers: ['substituent decreasing ring reactivity', 'alkylbenzene', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Friedel-Crafts often fails on strongly deactivated rings.
      - Order of substitution can determine whether route is feasible.
      - Directing effects come from substituent electronics in sigma-complex resonance forms.
      
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
      id: 'ochem-electrophilic-aromatic-substitution-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on activating vs deactivating groups, a step uses RCOCl/AlCl3. Which major product pattern is most defensible?',
            options: [
              'aryl ketone',
              'alkylbenzene',
              'regio-controlled aromatic product',
              'aryl sulfonic acid'
            ],
            correctAnswer: 0,
            explanation: 'RCOCl/AlCl3 is classically associated with aryl ketone because single acylation is typical.'
          },
          {
            question: 'A mechanism rationale cites electrophile generation: acid/Lewis acid forms strongly reactive species. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore electrophile generation and choose products only by molecular weight.',
              'Use electrophile generation only after final answer choice selection.',
              'Use electrophile generation to justify why the pathway favors regio-controlled aromatic product under desulfonation (H3O+, heat).',
              'Treat electrophile generation as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies electrophile generation directly to mechanism and product control. In this context, desulfonation (H3O+, heat) aligns with regio-controlled aromatic product.'
          }
        ]
      }
    }
  ]
};
