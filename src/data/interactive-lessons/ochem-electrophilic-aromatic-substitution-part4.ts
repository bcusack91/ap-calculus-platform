export const oChemEASPart4Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 4 of 7 — Nitration, Sulfonation, Halogenation**
      
      This part focuses on choosing reagent conditions for single substitution. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **activating group**: substituent increasing ring reactivity
      - **deactivating group**: substituent decreasing ring reactivity
      - **halogen exception**: halogens direct ortho/para but deactivate overall
      - **electrophile generation**: acid/Lewis acid forms strongly reactive species
      
      ### Worked reaction example
      A representative transformation uses **RCl/AlCl3**.
      
      1. Identify the governing mechanism: **Friedel-Crafts alkylation**.
      2. Predict the dominant product pattern: **alkylbenzene**.
      3. Justify with a mechanistic note: rearrangement and overreaction risk.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for activating group.',
            options: [
              'acid/Lewis acid forms strongly reactive species',
              'substituent decreasing ring reactivity',
              'halogens direct ortho/para but deactivate overall',
              'substituent increasing ring reactivity'
            ],
            correctAnswer: 3,
            explanation: 'activating group is defined as: substituent increasing ring reactivity.'
          },
          {
            question: 'A reaction in this lesson uses RCOCl/AlCl3 and proceeds by Friedel-Crafts acylation. What product pattern should you predict first?',
            options: [
              'nitro-substituted aromatic',
              'aryl ketone',
              'alkylbenzene',
              'regio-controlled aromatic product'
            ],
            correctAnswer: 1,
            explanation: 'With RCOCl/AlCl3, the benchmark outcome is aryl ketone. Mechanistic anchor: single acylation is typical.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCl/AlCl3 | Friedel-Crafts alkylation | alkylbenzene | rearrangement and overreaction risk |
      | RCOCl/AlCl3 | Friedel-Crafts acylation | aryl ketone | single acylation is typical |
      | desulfonation (H3O+, heat) | removal of SO3H blocker | regio-controlled aromatic product | used in sequence design |
      | HNO3/H2SO4 | nitration | nitro-substituted aromatic | forms NO2+ electrophile |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: substituent increasing ring reactivity

      2) Term for: substituent decreasing ring reactivity

      3) Product pattern expected under RCl/AlCl3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['activating group', 'deactivating group', 'alkylbenzene'],
        hint1: 'Blank 1 is the vocabulary term paired with: substituent increasing ring reactivity.',
        hint2: 'Blank 2 corresponds to substituent decreasing ring reactivity.',
        hint3: 'Use the worked example: RCl/AlCl3 gives alkylbenzene.',
        explanation: 'Correct entries: activating group, deactivating group, and alkylbenzene. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'halogen exception',
            options: ['substituent decreasing ring reactivity', 'halogens direct ortho/para but deactivate overall', 'substituent increasing ring reactivity', 'acid/Lewis acid forms strongly reactive species']
          },
          {
            label: 'Expected pattern from RCOCl/AlCl3',
            options: ['alkylbenzene', 'aryl ketone', 'nitro-substituted aromatic', 'regio-controlled aromatic product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Halogens are deactivating despite ortho/para direction.', 'Order of substitution can determine whether route is feasible.', 'Directing effects come from substituent electronics in sigma-complex resonance forms.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['halogens direct ortho/para but deactivate overall', 'aryl ketone', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Order of substitution can determine whether route is feasible.
      - Directing effects come from substituent electronics in sigma-complex resonance forms.
      - Halogens are deactivating despite ortho/para direction.
      
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
      id: 'ochem-electrophilic-aromatic-substitution-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on nitration, sulfonation, halogenation, a step uses desulfonation (H3O+, heat). Which major product pattern is most defensible?',
            options: [
              'nitro-substituted aromatic',
              'regio-controlled aromatic product',
              'aryl ketone',
              'alkylbenzene'
            ],
            correctAnswer: 1,
            explanation: 'desulfonation (H3O+, heat) is classically associated with regio-controlled aromatic product because used in sequence design.'
          },
          {
            question: 'A mechanism rationale cites polyalkylation: multiple alkyl substitutions after activation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat polyalkylation as a naming convention unrelated to mechanism.',
              'Ignore polyalkylation and choose products only by molecular weight.',
              'Use polyalkylation to justify why the pathway favors nitro-substituted aromatic under HNO3/H2SO4.',
              'Use polyalkylation only after final answer choice selection.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies polyalkylation directly to mechanism and product control. In this context, HNO3/H2SO4 aligns with nitro-substituted aromatic.'
          }
        ]
      }
    }
  ]
};
