export const oChemEASPart5Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'ochem-electrophilic-aromatic-substitution-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Electrophilic Aromatic Substitution
      
      **Part 5 of 7 — Friedel-Crafts Strategies**
      
      This part focuses on avoiding rearrangement and polyalkylation issues. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **deactivating group**: substituent decreasing ring reactivity
      - **halogen exception**: halogens direct ortho/para but deactivate overall
      - **electrophile generation**: acid/Lewis acid forms strongly reactive species
      - **polyalkylation**: multiple alkyl substitutions after activation
      
      ### Worked reaction example
      A representative transformation uses **RCOCl/AlCl3**.
      
      1. Identify the governing mechanism: **Friedel-Crafts acylation**.
      2. Predict the dominant product pattern: **aryl ketone**.
      3. Justify with a mechanistic note: single acylation is typical.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for deactivating group.',
            options: [
              'substituent decreasing ring reactivity',
              'acid/Lewis acid forms strongly reactive species',
              'halogens direct ortho/para but deactivate overall',
              'multiple alkyl substitutions after activation'
            ],
            correctAnswer: 0,
            explanation: 'deactivating group is defined as: substituent decreasing ring reactivity.'
          },
          {
            question: 'A reaction in this lesson uses desulfonation (H3O+, heat) and proceeds by removal of SO3H blocker. What product pattern should you predict first?',
            options: [
              'aryl ketone',
              'aryl bromide',
              'regio-controlled aromatic product',
              'nitro-substituted aromatic'
            ],
            correctAnswer: 2,
            explanation: 'With desulfonation (H3O+, heat), the benchmark outcome is regio-controlled aromatic product. Mechanistic anchor: used in sequence design.'
          }
        ]
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCOCl/AlCl3 | Friedel-Crafts acylation | aryl ketone | single acylation is typical |
      | desulfonation (H3O+, heat) | removal of SO3H blocker | regio-controlled aromatic product | used in sequence design |
      | HNO3/H2SO4 | nitration | nitro-substituted aromatic | forms NO2+ electrophile |
      | Br2/FeBr3 | halogenation | aryl bromide | sigma complex then deprotonation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: substituent decreasing ring reactivity
      2) Term for: halogens direct ortho/para but deactivate overall
      3) Product pattern expected under RCOCl/AlCl3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['deactivating group', 'halogen exception', 'aryl ketone'],
        hint1: 'Blank 1 is the vocabulary term paired with: substituent decreasing ring reactivity.',
        hint2: 'Blank 2 corresponds to halogens direct ortho/para but deactivate overall.',
        hint3: 'Use the worked example: RCOCl/AlCl3 gives aryl ketone.',
        explanation: 'Correct entries: deactivating group, halogen exception, and aryl ketone. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'electrophile generation',
            options: ['acid/Lewis acid forms strongly reactive species', 'multiple alkyl substitutions after activation', 'halogens direct ortho/para but deactivate overall', 'substituent decreasing ring reactivity']
          },
          {
            label: 'Expected pattern from desulfonation (H3O+, heat)',
            options: ['aryl bromide', 'nitro-substituted aromatic', 'regio-controlled aromatic product', 'aryl ketone']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Directing effects come from substituent electronics in sigma-complex resonance forms.', 'Friedel-Crafts often fails on strongly deactivated rings.', 'Halogens are deactivating despite ortho/para direction.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['acid/Lewis acid forms strongly reactive species', 'regio-controlled aromatic product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-electrophilic-aromatic-substitution-p5-s6-strategy',
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
      id: 'ochem-electrophilic-aromatic-substitution-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on friedel-crafts strategies, a step uses HNO3/H2SO4. Which major product pattern is most defensible?',
            options: [
              'regio-controlled aromatic product',
              'nitro-substituted aromatic',
              'aryl ketone',
              'aryl bromide'
            ],
            correctAnswer: 1,
            explanation: 'HNO3/H2SO4 is classically associated with nitro-substituted aromatic because forms NO2+ electrophile.'
          },
          {
            question: 'A mechanism rationale cites blocking group strategy: temporary substituent controls orientation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use blocking group strategy only after final answer choice selection.',
              'Use blocking group strategy to justify why the pathway favors aryl bromide under Br2/FeBr3.',
              'Treat blocking group strategy as a naming convention unrelated to mechanism.',
              'Ignore blocking group strategy and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies blocking group strategy directly to mechanism and product control. In this context, Br2/FeBr3 aligns with aryl bromide.'
          }
        ]
      }
    }
  ]
};
