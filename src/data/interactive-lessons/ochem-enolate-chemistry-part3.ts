export const oChemEnolatePart3Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'ochem-enolate-chemistry-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Enolate Chemistry
      
      **Part 3 of 7 — Aldol Addition and Condensation**
      
      This part focuses on predicting beta-hydroxy and enone products. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **kinetic enolate**: less substituted enolate formed fastest
      - **thermodynamic enolate**: more substituted enolate formed at equilibrium
      - **aldol addition**: enolate adds to carbonyl giving beta-hydroxy product
      - **aldol condensation**: dehydration of aldol product to enone
      
      ### Worked reaction example
      A representative transformation uses **enolate + aldehyde**.
      
      1. Identify the governing mechanism: **aldol addition**.
      2. Predict the dominant product pattern: **beta-hydroxy carbonyl**.
      3. Justify with a mechanistic note: new C-C bond formed.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for kinetic enolate.',
            options: [
              'dehydration of aldol product to enone',
              'more substituted enolate formed at equilibrium',
              'enolate adds to carbonyl giving beta-hydroxy product',
              'less substituted enolate formed fastest'
            ],
            correctAnswer: 3,
            explanation: 'kinetic enolate is defined as: less substituted enolate formed fastest.'
          },
          {
            question: 'A reaction in this lesson uses aldol product, heat and proceeds by dehydration. What product pattern should you predict first?',
            options: [
              'alpha,beta-unsaturated carbonyl',
              'beta-keto ester',
              'beta-hydroxy carbonyl',
              '1,4-adduct'
            ],
            correctAnswer: 0,
            explanation: 'With aldol product, heat, the benchmark outcome is alpha,beta-unsaturated carbonyl. Mechanistic anchor: conjugation drives elimination.'
          }
        ]
      }
    },
    {
      id: 'ochem-enolate-chemistry-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | enolate + aldehyde | aldol addition | beta-hydroxy carbonyl | new C-C bond formed |
      | aldol product, heat | dehydration | alpha,beta-unsaturated carbonyl | conjugation drives elimination |
      | ester + alkoxide base | Claisen condensation | beta-keto ester | requires matching alkoxide |
      | enolate + enone | Michael addition | 1,4-adduct | soft nucleophile pathway |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: less substituted enolate formed fastest
      2) Term for: more substituted enolate formed at equilibrium
      3) Product pattern expected under enolate + aldehyde
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['kinetic enolate', 'thermodynamic enolate', 'beta-hydroxy carbonyl'],
        hint1: 'Blank 1 is the vocabulary term paired with: less substituted enolate formed fastest.',
        hint2: 'Blank 2 corresponds to more substituted enolate formed at equilibrium.',
        hint3: 'Use the worked example: enolate + aldehyde gives beta-hydroxy carbonyl.',
        explanation: 'Correct entries: kinetic enolate, thermodynamic enolate, and beta-hydroxy carbonyl. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'aldol addition',
            options: ['enolate adds to carbonyl giving beta-hydroxy product', 'dehydration of aldol product to enone', 'more substituted enolate formed at equilibrium', 'less substituted enolate formed fastest']
          },
          {
            label: 'Expected pattern from aldol product, heat',
            options: ['1,4-adduct', 'beta-keto ester', 'beta-hydroxy carbonyl', 'alpha,beta-unsaturated carbonyl']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Not every base gives kinetic enolate control; conditions matter.', 'Conjugate (1,4) and direct (1,2) addition give different bond placements.']
          }
        ],
        correctAnswers: ['enolate adds to carbonyl giving beta-hydroxy product', 'alpha,beta-unsaturated carbonyl', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.
      - Conjugate (1,4) and direct (1,2) addition give different bond placements.
      - Not every base gives kinetic enolate control; conditions matter.
      
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
      id: 'ochem-enolate-chemistry-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on aldol addition and condensation, a step uses ester + alkoxide base. Which major product pattern is most defensible?',
            options: [
              'beta-keto ester',
              'alpha,beta-unsaturated carbonyl',
              '1,4-adduct',
              'beta-hydroxy carbonyl'
            ],
            correctAnswer: 0,
            explanation: 'ester + alkoxide base is classically associated with beta-keto ester because requires matching alkoxide.'
          },
          {
            question: 'A mechanism rationale cites Claisen condensation: ester enolate acylation yielding beta-keto ester. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use Claisen condensation to justify why the pathway favors 1,4-adduct under enolate + enone.',
              'Treat Claisen condensation as a naming convention unrelated to mechanism.',
              'Ignore Claisen condensation and choose products only by molecular weight.',
              'Use Claisen condensation only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies Claisen condensation directly to mechanism and product control. In this context, enolate + enone aligns with 1,4-adduct.'
          }
        ]
      }
    }
  ]
};
