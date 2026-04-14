export const oChemEnolatePart4Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'ochem-enolate-chemistry-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Enolate Chemistry
      
      **Part 4 of 7 — Claisen and Dieckmann Reactions**
      
      This part focuses on forming beta-keto esters through acyl substitution. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **thermodynamic enolate**: more substituted enolate formed at equilibrium
      - **aldol addition**: enolate adds to carbonyl giving beta-hydroxy product
      - **aldol condensation**: dehydration of aldol product to enone
      - **Claisen condensation**: ester enolate acylation yielding beta-keto ester
      
      ### Worked reaction example
      A representative transformation uses **aldol product, heat**.
      
      1. Identify the governing mechanism: **dehydration**.
      2. Predict the dominant product pattern: **alpha,beta-unsaturated carbonyl**.
      3. Justify with a mechanistic note: conjugation drives elimination.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for thermodynamic enolate.',
            options: [
              'enolate adds to carbonyl giving beta-hydroxy product',
              'dehydration of aldol product to enone',
              'ester enolate acylation yielding beta-keto ester',
              'more substituted enolate formed at equilibrium'
            ],
            correctAnswer: 3,
            explanation: 'thermodynamic enolate is defined as: more substituted enolate formed at equilibrium.'
          },
          {
            question: 'A reaction in this lesson uses ester + alkoxide base and proceeds by Claisen condensation. What product pattern should you predict first?',
            options: [
              'less substituted enolate',
              '1,4-adduct',
              'beta-keto ester',
              'alpha,beta-unsaturated carbonyl'
            ],
            correctAnswer: 2,
            explanation: 'With ester + alkoxide base, the benchmark outcome is beta-keto ester. Mechanistic anchor: requires matching alkoxide.'
          }
        ]
      }
    },
    {
      id: 'ochem-enolate-chemistry-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | aldol product, heat | dehydration | alpha,beta-unsaturated carbonyl | conjugation drives elimination |
      | ester + alkoxide base | Claisen condensation | beta-keto ester | requires matching alkoxide |
      | enolate + enone | Michael addition | 1,4-adduct | soft nucleophile pathway |
      | LDA, THF, -78 °C | kinetic enolate generation | less substituted enolate | irreversible deprotonation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: more substituted enolate formed at equilibrium

      2) Term for: enolate adds to carbonyl giving beta-hydroxy product

      3) Product pattern expected under aldol product, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['thermodynamic enolate', 'aldol addition', 'alpha,beta-unsaturated carbonyl'],
        hint1: 'Blank 1 is the vocabulary term paired with: more substituted enolate formed at equilibrium.',
        hint2: 'Blank 2 corresponds to enolate adds to carbonyl giving beta-hydroxy product.',
        hint3: 'Use the worked example: aldol product, heat gives alpha,beta-unsaturated carbonyl.',
        explanation: 'Correct entries: thermodynamic enolate, aldol addition, and alpha,beta-unsaturated carbonyl. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'aldol condensation',
            options: ['enolate adds to carbonyl giving beta-hydroxy product', 'ester enolate acylation yielding beta-keto ester', 'dehydration of aldol product to enone', 'more substituted enolate formed at equilibrium']
          },
          {
            label: 'Expected pattern from ester + alkoxide base',
            options: ['1,4-adduct', 'beta-keto ester', 'alpha,beta-unsaturated carbonyl', 'less substituted enolate']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Conjugate (1,4) and direct (1,2) addition give different bond placements.', 'Not every base gives kinetic enolate control; conditions matter.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Aldol addition and condensation are distinct steps.']
          }
        ],
        correctAnswers: ['dehydration of aldol product to enone', 'beta-keto ester', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Conjugate (1,4) and direct (1,2) addition give different bond placements.
      - Not every base gives kinetic enolate control; conditions matter.
      - Aldol addition and condensation are distinct steps.
      
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
      id: 'ochem-enolate-chemistry-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on claisen and dieckmann reactions, a step uses enolate + enone. Which major product pattern is most defensible?',
            options: [
              'less substituted enolate',
              '1,4-adduct',
              'beta-keto ester',
              'alpha,beta-unsaturated carbonyl'
            ],
            correctAnswer: 1,
            explanation: 'enolate + enone is classically associated with 1,4-adduct because soft nucleophile pathway.'
          },
          {
            question: 'A mechanism rationale cites Michael addition: 1,4-conjugate addition to alpha,beta-unsaturated carbonyl. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use Michael addition only after final answer choice selection.',
              'Use Michael addition to justify why the pathway favors less substituted enolate under LDA, THF, -78 °C.',
              'Treat Michael addition as a naming convention unrelated to mechanism.',
              'Ignore Michael addition and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies Michael addition directly to mechanism and product control. In this context, LDA, THF, -78 °C aligns with less substituted enolate.'
          }
        ]
      }
    }
  ]
};
