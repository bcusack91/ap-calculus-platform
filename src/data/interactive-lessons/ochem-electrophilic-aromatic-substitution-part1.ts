export const oChemEASPart1Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 1 of 7 — EAS Mechanism Core**
      
      This part focuses on balancing aromatic stabilization with substitution reactivity. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **sigma complex**: arenium ion intermediate after electrophile attack
      - **ortho/para director**: substituent that donates electron density to o/p positions
      - **meta director**: electron-withdrawing substituent directing meta substitution
      - **activating group**: substituent increasing ring reactivity
      
      ### Worked reaction example
      A representative transformation uses **HNO3/H2SO4**.
      
      1. Identify the governing mechanism: **nitration**.
      2. Predict the dominant product pattern: **nitro-substituted aromatic**.
      3. Justify with a mechanistic note: forms NO2+ electrophile.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for sigma complex.',
            options: [
              'substituent increasing ring reactivity',
              'arenium ion intermediate after electrophile attack',
              'substituent that donates electron density to o/p positions',
              'electron-withdrawing substituent directing meta substitution'
            ],
            correctAnswer: 1,
            explanation: 'sigma complex is defined as: arenium ion intermediate after electrophile attack.'
          },
          {
            question: 'A reaction in this lesson uses Br2/FeBr3 and proceeds by halogenation. What product pattern should you predict first?',
            options: [
              'nitro-substituted aromatic',
              'alkylbenzene',
              'aryl sulfonic acid',
              'aryl bromide'
            ],
            correctAnswer: 3,
            explanation: 'With Br2/FeBr3, the benchmark outcome is aryl bromide. Mechanistic anchor: sigma complex then deprotonation.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HNO3/H2SO4 | nitration | nitro-substituted aromatic | forms NO2+ electrophile |
      | Br2/FeBr3 | halogenation | aryl bromide | sigma complex then deprotonation |
      | SO3/H2SO4 | sulfonation | aryl sulfonic acid | reversible under steam |
      | RCl/AlCl3 | Friedel-Crafts alkylation | alkylbenzene | rearrangement and overreaction risk |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: arenium ion intermediate after electrophile attack
      2) Term for: substituent that donates electron density to o/p positions
      3) Product pattern expected under HNO3/H2SO4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sigma complex', 'ortho/para director', 'nitro-substituted aromatic'],
        hint1: 'Blank 1 is the vocabulary term paired with: arenium ion intermediate after electrophile attack.',
        hint2: 'Blank 2 corresponds to substituent that donates electron density to o/p positions.',
        hint3: 'Use the worked example: HNO3/H2SO4 gives nitro-substituted aromatic.',
        explanation: 'Correct entries: sigma complex, ortho/para director, and nitro-substituted aromatic. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'meta director',
            options: ['substituent that donates electron density to o/p positions', 'substituent increasing ring reactivity', 'arenium ion intermediate after electrophile attack', 'electron-withdrawing substituent directing meta substitution']
          },
          {
            label: 'Expected pattern from Br2/FeBr3',
            options: ['nitro-substituted aromatic', 'alkylbenzene', 'aryl bromide', 'aryl sulfonic acid']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Directing effects come from substituent electronics in sigma-complex resonance forms.', 'Friedel-Crafts often fails on strongly deactivated rings.', 'Halogens are deactivating despite ortho/para direction.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['electron-withdrawing substituent directing meta substitution', 'aryl bromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Directing effects come from substituent electronics in sigma-complex resonance forms.
      - Halogens are deactivating despite ortho/para direction.
      - Friedel-Crafts often fails on strongly deactivated rings.
      
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
      id: 'ochem-electrophilic-aromatic-substitution-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on eas mechanism core, a step uses SO3/H2SO4. Which major product pattern is most defensible?',
            options: [
              'alkylbenzene',
              'aryl bromide',
              'aryl sulfonic acid',
              'nitro-substituted aromatic'
            ],
            correctAnswer: 2,
            explanation: 'SO3/H2SO4 is classically associated with aryl sulfonic acid because reversible under steam.'
          },
          {
            question: 'A mechanism rationale cites deactivating group: substituent decreasing ring reactivity. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use deactivating group to justify why the pathway favors alkylbenzene under RCl/AlCl3.',
              'Ignore deactivating group and choose products only by molecular weight.',
              'Use deactivating group only after final answer choice selection.',
              'Treat deactivating group as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies deactivating group directly to mechanism and product control. In this context, RCl/AlCl3 aligns with alkylbenzene.'
          }
        ]
      }
    }
  ]
};
