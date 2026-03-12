export const oChemEASPart7Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 7 of 7 — Comprehensive EAS Review**
      
      This part focuses on solving mixed directing-effect problem sets. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **electrophile generation**: acid/Lewis acid forms strongly reactive species
      - **polyalkylation**: multiple alkyl substitutions after activation
      - **blocking group strategy**: temporary substituent controls orientation
      - **sigma complex**: arenium ion intermediate after electrophile attack
      
      ### Worked reaction example
      A representative transformation uses **HNO3/H2SO4**.
      
      1. Identify the governing mechanism: **nitration**.
      2. Predict the dominant product pattern: **nitro-substituted aromatic**.
      3. Justify with a mechanistic note: forms NO2+ electrophile.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for electrophile generation.',
            options: [
              'arenium ion intermediate after electrophile attack',
              'temporary substituent controls orientation',
              'acid/Lewis acid forms strongly reactive species',
              'multiple alkyl substitutions after activation'
            ],
            correctAnswer: 2,
            explanation: 'electrophile generation is defined as: acid/Lewis acid forms strongly reactive species.'
          },
          {
            question: 'A reaction in this lesson uses Br2/FeBr3 and proceeds by halogenation. What product pattern should you predict first?',
            options: [
              'nitro-substituted aromatic',
              'aryl sulfonic acid',
              'aryl bromide',
              'alkylbenzene'
            ],
            correctAnswer: 2,
            explanation: 'With Br2/FeBr3, the benchmark outcome is aryl bromide. Mechanistic anchor: sigma complex then deprotonation.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p7-s3-deep-dive',
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
      id: 'ochem-electrophilic-aromatic-substitution-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: acid/Lewis acid forms strongly reactive species
      2) Term for: multiple alkyl substitutions after activation
      3) Product pattern expected under HNO3/H2SO4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['electrophile generation', 'polyalkylation', 'nitro-substituted aromatic'],
        hint1: 'Blank 1 is the vocabulary term paired with: acid/Lewis acid forms strongly reactive species.',
        hint2: 'Blank 2 corresponds to multiple alkyl substitutions after activation.',
        hint3: 'Use the worked example: HNO3/H2SO4 gives nitro-substituted aromatic.',
        explanation: 'Correct entries: electrophile generation, polyalkylation, and nitro-substituted aromatic. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'blocking group strategy',
            options: ['arenium ion intermediate after electrophile attack', 'multiple alkyl substitutions after activation', 'temporary substituent controls orientation', 'acid/Lewis acid forms strongly reactive species']
          },
          {
            label: 'Expected pattern from Br2/FeBr3',
            options: ['aryl bromide', 'alkylbenzene', 'aryl sulfonic acid', 'nitro-substituted aromatic']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Directing effects come from substituent electronics in sigma-complex resonance forms.', 'Friedel-Crafts often fails on strongly deactivated rings.', 'Order of substitution can determine whether route is feasible.']
          }
        ],
        correctAnswers: ['temporary substituent controls orientation', 'aryl bromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p7-s6-strategy',
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
      id: 'ochem-electrophilic-aromatic-substitution-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on comprehensive eas review, a step uses SO3/H2SO4. Which major product pattern is most defensible?',
            options: [
              'nitro-substituted aromatic',
              'alkylbenzene',
              'aryl sulfonic acid',
              'aryl bromide'
            ],
            correctAnswer: 2,
            explanation: 'SO3/H2SO4 is classically associated with aryl sulfonic acid because reversible under steam.'
          },
          {
            question: 'A mechanism rationale cites ortho/para director: substituent that donates electron density to o/p positions. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat ortho/para director as a naming convention unrelated to mechanism.',
              'Use ortho/para director only after final answer choice selection.',
              'Ignore ortho/para director and choose products only by molecular weight.',
              'Use ortho/para director to justify why the pathway favors alkylbenzene under RCl/AlCl3.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies ortho/para director directly to mechanism and product control. In this context, RCl/AlCl3 aligns with alkylbenzene.'
          }
        ]
      }
    }
  ]
};
