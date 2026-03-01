export const oChemEASPart6Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 6 of 7 — Multistep Orientation Planning**
      
      This part focuses on planning order of substituent installation. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **halogen exception**: halogens direct ortho/para but deactivate overall
      - **electrophile generation**: acid/Lewis acid forms strongly reactive species
      - **polyalkylation**: multiple alkyl substitutions after activation
      - **blocking group strategy**: temporary substituent controls orientation
      
      ### Worked reaction example
      A representative transformation uses **desulfonation (H3O+, heat)**.
      
      1. Identify the governing mechanism: **removal of SO3H blocker**.
      2. Predict the dominant product pattern: **regio-controlled aromatic product**.
      3. Justify with a mechanistic note: used in sequence design.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for halogen exception.',
            options: [
              'temporary substituent controls orientation',
              'acid/Lewis acid forms strongly reactive species',
              'multiple alkyl substitutions after activation',
              'halogens direct ortho/para but deactivate overall'
            ],
            correctAnswer: 3,
            explanation: 'halogen exception is defined as: halogens direct ortho/para but deactivate overall.'
          },
          {
            question: 'A reaction in this lesson uses HNO3/H2SO4 and proceeds by nitration. What product pattern should you predict first?',
            options: [
              'regio-controlled aromatic product',
              'aryl bromide',
              'aryl sulfonic acid',
              'nitro-substituted aromatic'
            ],
            correctAnswer: 3,
            explanation: 'With HNO3/H2SO4, the benchmark outcome is nitro-substituted aromatic. Mechanistic anchor: forms NO2+ electrophile.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | desulfonation (H3O+, heat) | removal of SO3H blocker | regio-controlled aromatic product | used in sequence design |
      | HNO3/H2SO4 | nitration | nitro-substituted aromatic | forms NO2+ electrophile |
      | Br2/FeBr3 | halogenation | aryl bromide | sigma complex then deprotonation |
      | SO3/H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: halogens direct ortho/para but deactivate overall
      2) Term for: acid/Lewis acid forms strongly reactive species
      3) Product pattern expected under desulfonation (H3O+, heat)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['halogen exception', 'electrophile generation', 'regio-controlled aromatic product'],
        hint1: 'Blank 1 is the vocabulary term paired with: halogens direct ortho/para but deactivate overall.',
        hint2: 'Blank 2 corresponds to acid/Lewis acid forms strongly reactive species.',
        hint3: 'Use the worked example: desulfonation (H3O+, heat) gives regio-controlled aromatic product.',
        explanation: 'Correct entries: halogen exception, electrophile generation, and regio-controlled aromatic product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'polyalkylation',
            options: ['halogens direct ortho/para but deactivate overall', 'temporary substituent controls orientation', 'multiple alkyl substitutions after activation', 'acid/Lewis acid forms strongly reactive species']
          },
          {
            label: 'Expected pattern from HNO3/H2SO4',
            options: ['aryl sulfonic acid', 'aryl bromide', 'regio-controlled aromatic product', 'nitro-substituted aromatic']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Order of substitution can determine whether route is feasible.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Friedel-Crafts often fails on strongly deactivated rings.', 'Halogens are deactivating despite ortho/para direction.']
          }
        ],
        correctAnswers: ['multiple alkyl substitutions after activation', 'nitro-substituted aromatic', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p6-s6-strategy',
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
      id: 'ochem-electrophilic-aromatic-substitution-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on multistep orientation planning, a step uses Br2/FeBr3. Which major product pattern is most defensible?',
            options: [
              'regio-controlled aromatic product',
              'nitro-substituted aromatic',
              'aryl sulfonic acid',
              'aryl bromide'
            ],
            correctAnswer: 3,
            explanation: 'Br2/FeBr3 is classically associated with aryl bromide because sigma complex then deprotonation.'
          },
          {
            question: 'A mechanism rationale cites sigma complex: arenium ion intermediate after electrophile attack. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use sigma complex only after final answer choice selection.',
              'Ignore sigma complex and choose products only by molecular weight.',
              'Treat sigma complex as a naming convention unrelated to mechanism.',
              'Use sigma complex to justify why the pathway favors aryl sulfonic acid under SO3/H2SO4.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies sigma complex directly to mechanism and product control. In this context, SO3/H2SO4 aligns with aryl sulfonic acid.'
          }
        ]
      }
    }
  ]
};
