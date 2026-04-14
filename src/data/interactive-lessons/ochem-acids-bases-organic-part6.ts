export const oChemAcidsBasesPart6Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'ochem-acids-bases-organic-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Organic Acids and Bases
      
      **Part 6 of 7 — Synthesis Decision Workshop**
      
      This part focuses on planning acid-base order in a two-step synthesis. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **resonance stabilization**: delocalization that lowers basicity of a conjugate base
      - **inductive effect**: electron withdrawal through sigma bonds alters acidity
      - **steric hindrance**: bulk can reduce basic-site accessibility
      - **kinetic deprotonation**: fast removal at less hindered site under low temperature
      
      ### Worked reaction example
      A representative transformation uses **CF3-substituted acid comparison**.
      
      1. Identify the governing mechanism: **strong inductive withdrawal**.
      2. Predict the dominant product pattern: **lower pKa than alkyl analog**.
      3. Justify with a mechanistic note: conjugate base stabilized by -I effect.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for resonance stabilization.',
            options: [
              'bulk can reduce basic-site accessibility',
              'fast removal at less hindered site under low temperature',
              'electron withdrawal through sigma bonds alters acidity',
              'delocalization that lowers basicity of a conjugate base'
            ],
            correctAnswer: 3,
            explanation: 'resonance stabilization is defined as: delocalization that lowers basicity of a conjugate base.'
          },
          {
            question: 'A reaction in this lesson uses NaH, THF and proceeds by strong, non-nucleophilic deprotonation. What product pattern should you predict first?',
            options: [
              'lower pKa than alkyl analog',
              'thermodynamic enolate mixture',
              'forms carbanion/enolate precursor',
              'less substituted enolate dominates'
            ],
            correctAnswer: 2,
            explanation: 'With NaH, THF, the benchmark outcome is forms carbanion/enolate precursor. Mechanistic anchor: driven by H2 gas evolution.'
          }
        ]
      }
    },
    {
      id: 'ochem-acids-bases-organic-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | CF3-substituted acid comparison | strong inductive withdrawal | lower pKa than alkyl analog | conjugate base stabilized by -I effect |
      | NaH, THF | strong, non-nucleophilic deprotonation | forms carbanion/enolate precursor | driven by H2 gas evolution |
      | LDA, -78 °C | kinetic enolate conditions | less substituted enolate dominates | bulky base + low temperature |
      | NaOEt/EtOH | equilibrating basic medium | thermodynamic enolate mixture | reversible proton transfer |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: delocalization that lowers basicity of a conjugate base

      2) Term for: electron withdrawal through sigma bonds alters acidity

      3) Product pattern expected under CF3-substituted acid comparison
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['resonance stabilization', 'inductive effect', 'lower pKa than alkyl analog'],
        hint1: 'Blank 1 is the vocabulary term paired with: delocalization that lowers basicity of a conjugate base.',
        hint2: 'Blank 2 corresponds to electron withdrawal through sigma bonds alters acidity.',
        hint3: 'Use the worked example: CF3-substituted acid comparison gives lower pKa than alkyl analog.',
        explanation: 'Correct entries: resonance stabilization, inductive effect, and lower pKa than alkyl analog. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'steric hindrance',
            options: ['electron withdrawal through sigma bonds alters acidity', 'bulk can reduce basic-site accessibility', 'fast removal at less hindered site under low temperature', 'delocalization that lowers basicity of a conjugate base']
          },
          {
            label: 'Expected pattern from NaH, THF',
            options: ['thermodynamic enolate mixture', 'lower pKa than alkyl analog', 'less substituted enolate dominates', 'forms carbanion/enolate precursor']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Resonance and induction can outweigh hybridization in close pKa calls.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'An acid quench changes protonation state but usually not carbon skeleton connectivity.', 'pKa comparisons require matching acid forms, not isolated anions.']
          }
        ],
        correctAnswers: ['bulk can reduce basic-site accessibility', 'forms carbanion/enolate precursor', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - pKa comparisons require matching acid forms, not isolated anions.
      - Resonance and induction can outweigh hybridization in close pKa calls.
      - An acid quench changes protonation state but usually not carbon skeleton connectivity.
      
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
      id: 'ochem-acids-bases-organic-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis decision workshop, a step uses LDA, -78 °C. Which major product pattern is most defensible?',
            options: [
              'less substituted enolate dominates',
              'thermodynamic enolate mixture',
              'forms carbanion/enolate precursor',
              'lower pKa than alkyl analog'
            ],
            correctAnswer: 0,
            explanation: 'LDA, -78 °C is classically associated with less substituted enolate dominates because bulky base + low temperature.'
          },
          {
            question: 'A mechanism rationale cites Brønsted acid: proton donor in a reaction step. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore Brønsted acid and choose products only by molecular weight.',
              'Treat Brønsted acid as a naming convention unrelated to mechanism.',
              'Use Brønsted acid only after final answer choice selection.',
              'Use Brønsted acid to justify why the pathway favors thermodynamic enolate mixture under NaOEt/EtOH.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies Brønsted acid directly to mechanism and product control. In this context, NaOEt/EtOH aligns with thermodynamic enolate mixture.'
          }
        ]
      }
    }
  ]
};
