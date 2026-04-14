export const oChemEnolatePart2Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'ochem-enolate-chemistry-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Enolate Chemistry
      
      **Part 2 of 7 — Kinetic vs Thermodynamic Enolates**
      
      This part focuses on controlling enolate geometry by base and temperature. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **enolate**: resonance-stabilized anion of carbonyl compound
      - **kinetic enolate**: less substituted enolate formed fastest
      - **thermodynamic enolate**: more substituted enolate formed at equilibrium
      - **aldol addition**: enolate adds to carbonyl giving beta-hydroxy product
      
      ### Worked reaction example
      A representative transformation uses **NaOEt/EtOH**.
      
      1. Identify the governing mechanism: **equilibrating base**.
      2. Predict the dominant product pattern: **thermodynamic enolate**.
      3. Justify with a mechanistic note: reversible proton exchange.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for enolate.',
            options: [
              'less substituted enolate formed fastest',
              'enolate adds to carbonyl giving beta-hydroxy product',
              'resonance-stabilized anion of carbonyl compound',
              'more substituted enolate formed at equilibrium'
            ],
            correctAnswer: 2,
            explanation: 'enolate is defined as: resonance-stabilized anion of carbonyl compound.'
          },
          {
            question: 'A reaction in this lesson uses enolate + aldehyde and proceeds by aldol addition. What product pattern should you predict first?',
            options: [
              'thermodynamic enolate',
              'beta-hydroxy carbonyl',
              'beta-keto ester',
              'alpha,beta-unsaturated carbonyl'
            ],
            correctAnswer: 1,
            explanation: 'With enolate + aldehyde, the benchmark outcome is beta-hydroxy carbonyl. Mechanistic anchor: new C-C bond formed.'
          }
        ]
      }
    },
    {
      id: 'ochem-enolate-chemistry-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NaOEt/EtOH | equilibrating base | thermodynamic enolate | reversible proton exchange |
      | enolate + aldehyde | aldol addition | beta-hydroxy carbonyl | new C-C bond formed |
      | aldol product, heat | dehydration | alpha,beta-unsaturated carbonyl | conjugation drives elimination |
      | ester + alkoxide base | Claisen condensation | beta-keto ester | requires matching alkoxide |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: resonance-stabilized anion of carbonyl compound

      2) Term for: less substituted enolate formed fastest

      3) Product pattern expected under NaOEt/EtOH
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['enolate', 'kinetic enolate', 'thermodynamic enolate'],
        hint1: 'Blank 1 is the vocabulary term paired with: resonance-stabilized anion of carbonyl compound.',
        hint2: 'Blank 2 corresponds to less substituted enolate formed fastest.',
        hint3: 'Use the worked example: NaOEt/EtOH gives thermodynamic enolate.',
        explanation: 'Correct entries: enolate, kinetic enolate, and thermodynamic enolate. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'thermodynamic enolate',
            options: ['less substituted enolate formed fastest', 'resonance-stabilized anion of carbonyl compound', 'enolate adds to carbonyl giving beta-hydroxy product', 'more substituted enolate formed at equilibrium']
          },
          {
            label: 'Expected pattern from enolate + aldehyde',
            options: ['thermodynamic enolate', 'alpha,beta-unsaturated carbonyl', 'beta-keto ester', 'beta-hydroxy carbonyl']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.', 'Conjugate (1,4) and direct (1,2) addition give different bond placements.', 'Aldol addition and condensation are distinct steps.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['more substituted enolate formed at equilibrium', 'beta-hydroxy carbonyl', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Aldol addition and condensation are distinct steps.
      - Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.
      - Conjugate (1,4) and direct (1,2) addition give different bond placements.
      
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
      id: 'ochem-enolate-chemistry-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on kinetic vs thermodynamic enolates, a step uses aldol product, heat. Which major product pattern is most defensible?',
            options: [
              'beta-hydroxy carbonyl',
              'alpha,beta-unsaturated carbonyl',
              'beta-keto ester',
              'thermodynamic enolate'
            ],
            correctAnswer: 1,
            explanation: 'aldol product, heat is classically associated with alpha,beta-unsaturated carbonyl because conjugation drives elimination.'
          },
          {
            question: 'A mechanism rationale cites aldol condensation: dehydration of aldol product to enone. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use aldol condensation to justify why the pathway favors beta-keto ester under ester + alkoxide base.',
              'Use aldol condensation only after final answer choice selection.',
              'Ignore aldol condensation and choose products only by molecular weight.',
              'Treat aldol condensation as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies aldol condensation directly to mechanism and product control. In this context, ester + alkoxide base aligns with beta-keto ester.'
          }
        ]
      }
    }
  ]
};
