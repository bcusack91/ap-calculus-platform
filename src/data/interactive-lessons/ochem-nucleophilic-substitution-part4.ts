export const oChemSNPart4Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'ochem-nucleophilic-substitution-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Nucleophilic Substitution
      
      **Part 4 of 7 — Stereochemical Consequences**
      
      This part focuses on tracking inversion, retention, and racemization patterns. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **nucleophile strength**: reactivity of electron pair donor toward electrophile
      - **protic solvent**: solvent that hydrogen-bonds and can dampen nucleophiles
      - **aprotic solvent**: polar solvent that enhances anionic nucleophile reactivity
      - **Walden inversion**: configuration inversion at SN2 stereocenter
      
      ### Worked reaction example
      A representative transformation uses **benzyl halide + methanol**.
      
      1. Identify the governing mechanism: **substitution at benzylic center**.
      2. Predict the dominant product pattern: **ether product**.
      3. Justify with a mechanistic note: resonance stabilizes intermediate.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for nucleophile strength.',
            options: [
              'reactivity of electron pair donor toward electrophile',
              'polar solvent that enhances anionic nucleophile reactivity',
              'configuration inversion at SN2 stereocenter',
              'solvent that hydrogen-bonds and can dampen nucleophiles'
            ],
            correctAnswer: 0,
            explanation: 'nucleophile strength is defined as: reactivity of electron pair donor toward electrophile.'
          },
          {
            question: 'A reaction in this lesson uses allylic halide + nucleophile and proceeds by substitution with resonance stabilization. What product pattern should you predict first?',
            options: [
              'allylic substitution product',
              'ether product',
              'alkene side product',
              'nitrile substitution product'
            ],
            correctAnswer: 0,
            explanation: 'With allylic halide + nucleophile, the benchmark outcome is allylic substitution product. Mechanistic anchor: fast relative to unactivated analog.'
          }
        ]
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | benzyl halide + methanol | substitution at benzylic center | ether product | resonance stabilizes intermediate |
      | allylic halide + nucleophile | substitution with resonance stabilization | allylic substitution product | fast relative to unactivated analog |
      | strong base, heat on 2° halide | E2 competition | alkene side product | must account for elimination |
      | 1° alkyl bromide + NaCN in DMSO | SN2 | nitrile substitution product | strong nucleophile + aprotic solvent |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: reactivity of electron pair donor toward electrophile
      2) Term for: solvent that hydrogen-bonds and can dampen nucleophiles
      3) Product pattern expected under benzyl halide + methanol
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nucleophile strength', 'protic solvent', 'ether product'],
        hint1: 'Blank 1 is the vocabulary term paired with: reactivity of electron pair donor toward electrophile.',
        hint2: 'Blank 2 corresponds to solvent that hydrogen-bonds and can dampen nucleophiles.',
        hint3: 'Use the worked example: benzyl halide + methanol gives ether product.',
        explanation: 'Correct entries: nucleophile strength, protic solvent, and ether product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'aprotic solvent',
            options: ['configuration inversion at SN2 stereocenter', 'polar solvent that enhances anionic nucleophile reactivity', 'solvent that hydrogen-bonds and can dampen nucleophiles', 'reactivity of electron pair donor toward electrophile']
          },
          {
            label: 'Expected pattern from allylic halide + nucleophile',
            options: ['ether product', 'allylic substitution product', 'nitrile substitution product', 'alkene side product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Strong nucleophile does not guarantee SN2 on heavily hindered substrates.', 'SN1 stereochemistry often trends toward racemization, not full inversion.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Always evaluate elimination when base strength and heat are present.']
          }
        ],
        correctAnswers: ['polar solvent that enhances anionic nucleophile reactivity', 'allylic substitution product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Always evaluate elimination when base strength and heat are present.
      - Strong nucleophile does not guarantee SN2 on heavily hindered substrates.
      - SN1 stereochemistry often trends toward racemization, not full inversion.
      
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
      id: 'ochem-nucleophilic-substitution-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on stereochemical consequences, a step uses strong base, heat on 2° halide. Which major product pattern is most defensible?',
            options: [
              'alkene side product',
              'ether product',
              'allylic substitution product',
              'nitrile substitution product'
            ],
            correctAnswer: 0,
            explanation: 'strong base, heat on 2° halide is classically associated with alkene side product because must account for elimination.'
          },
          {
            question: 'A mechanism rationale cites racemization: partial mixture from planar carbocation attack. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use racemization to justify why the pathway favors nitrile substitution product under 1° alkyl bromide + NaCN in DMSO.',
              'Ignore racemization and choose products only by molecular weight.',
              'Treat racemization as a naming convention unrelated to mechanism.',
              'Use racemization only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies racemization directly to mechanism and product control. In this context, 1° alkyl bromide + NaCN in DMSO aligns with nitrile substitution product.'
          }
        ]
      }
    }
  ]
};
