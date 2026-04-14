export const oChemSNPart3Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'ochem-nucleophilic-substitution-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Nucleophilic Substitution
      
      **Part 3 of 7 — Nucleophile and Solvent Control**
      
      This part focuses on predicting rate changes with solvent polarity and nucleophile strength. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **leaving group**: group that departs with electron pair
      - **nucleophile strength**: reactivity of electron pair donor toward electrophile
      - **protic solvent**: solvent that hydrogen-bonds and can dampen nucleophiles
      - **aprotic solvent**: polar solvent that enhances anionic nucleophile reactivity
      
      ### Worked reaction example
      A representative transformation uses **2° substrate + NaI in acetone**.
      
      1. Identify the governing mechanism: **Finkelstein-type substitution**.
      2. Predict the dominant product pattern: **alkyl iodide**.
      3. Justify with a mechanistic note: driven by precipitation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for leaving group.',
            options: [
              'solvent that hydrogen-bonds and can dampen nucleophiles',
              'reactivity of electron pair donor toward electrophile',
              'polar solvent that enhances anionic nucleophile reactivity',
              'group that departs with electron pair'
            ],
            correctAnswer: 3,
            explanation: 'leaving group is defined as: group that departs with electron pair.'
          },
          {
            question: 'A reaction in this lesson uses benzyl halide + methanol and proceeds by substitution at benzylic center. What product pattern should you predict first?',
            options: [
              'alkyl iodide',
              'allylic substitution product',
              'ether product',
              'alkene side product'
            ],
            correctAnswer: 2,
            explanation: 'With benzyl halide + methanol, the benchmark outcome is ether product. Mechanistic anchor: resonance stabilizes intermediate.'
          }
        ]
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | 2° substrate + NaI in acetone | Finkelstein-type substitution | alkyl iodide | driven by precipitation |
      | benzyl halide + methanol | substitution at benzylic center | ether product | resonance stabilizes intermediate |
      | allylic halide + nucleophile | substitution with resonance stabilization | allylic substitution product | fast relative to unactivated analog |
      | strong base, heat on 2° halide | E2 competition | alkene side product | must account for elimination |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: group that departs with electron pair

      2) Term for: reactivity of electron pair donor toward electrophile

      3) Product pattern expected under 2° substrate + NaI in acetone
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['leaving group', 'nucleophile strength', 'alkyl iodide'],
        hint1: 'Blank 1 is the vocabulary term paired with: group that departs with electron pair.',
        hint2: 'Blank 2 corresponds to reactivity of electron pair donor toward electrophile.',
        hint3: 'Use the worked example: 2° substrate + NaI in acetone gives alkyl iodide.',
        explanation: 'Correct entries: leaving group, nucleophile strength, and alkyl iodide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'protic solvent',
            options: ['polar solvent that enhances anionic nucleophile reactivity', 'solvent that hydrogen-bonds and can dampen nucleophiles', 'group that departs with electron pair', 'reactivity of electron pair donor toward electrophile']
          },
          {
            label: 'Expected pattern from benzyl halide + methanol',
            options: ['ether product', 'allylic substitution product', 'alkyl iodide', 'alkene side product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Solvent effects can reverse expected nucleophile ordering.', 'Always evaluate elimination when base strength and heat are present.', 'Strong nucleophile does not guarantee SN2 on heavily hindered substrates.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['solvent that hydrogen-bonds and can dampen nucleophiles', 'ether product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Solvent effects can reverse expected nucleophile ordering.
      - Always evaluate elimination when base strength and heat are present.
      - Strong nucleophile does not guarantee SN2 on heavily hindered substrates.
      
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
      id: 'ochem-nucleophilic-substitution-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on nucleophile and solvent control, a step uses allylic halide + nucleophile. Which major product pattern is most defensible?',
            options: [
              'allylic substitution product',
              'alkene side product',
              'ether product',
              'alkyl iodide'
            ],
            correctAnswer: 0,
            explanation: 'allylic halide + nucleophile is classically associated with allylic substitution product because fast relative to unactivated analog.'
          },
          {
            question: 'A mechanism rationale cites Walden inversion: configuration inversion at SN2 stereocenter. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore Walden inversion and choose products only by molecular weight.',
              'Use Walden inversion to justify why the pathway favors alkene side product under strong base, heat on 2° halide.',
              'Treat Walden inversion as a naming convention unrelated to mechanism.',
              'Use Walden inversion only after final answer choice selection.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies Walden inversion directly to mechanism and product control. In this context, strong base, heat on 2° halide aligns with alkene side product.'
          }
        ]
      }
    }
  ]
};
