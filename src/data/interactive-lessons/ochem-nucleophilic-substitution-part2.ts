export const oChemSNPart2Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'ochem-nucleophilic-substitution-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Nucleophilic Substitution
      
      **Part 2 of 7 — Substrate Structure Effects**
      
      This part focuses on analyzing primary, secondary, tertiary substrate outcomes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **SN1**: two-step substitution through carbocation intermediate
      - **leaving group**: group that departs with electron pair
      - **nucleophile strength**: reactivity of electron pair donor toward electrophile
      - **protic solvent**: solvent that hydrogen-bonds and can dampen nucleophiles
      
      ### Worked reaction example
      A representative transformation uses **3° alkyl chloride in H2O**.
      
      1. Identify the governing mechanism: **SN1 solvolysis**.
      2. Predict the dominant product pattern: **tertiary alcohol substitution**.
      3. Justify with a mechanistic note: carbocation intermediate.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for SN1.',
            options: [
              'group that departs with electron pair',
              'two-step substitution through carbocation intermediate',
              'solvent that hydrogen-bonds and can dampen nucleophiles',
              'reactivity of electron pair donor toward electrophile'
            ],
            correctAnswer: 1,
            explanation: 'SN1 is defined as: two-step substitution through carbocation intermediate.'
          },
          {
            question: 'A reaction in this lesson uses 2° substrate + NaI in acetone and proceeds by Finkelstein-type substitution. What product pattern should you predict first?',
            options: [
              'allylic substitution product',
              'ether product',
              'alkyl iodide',
              'tertiary alcohol substitution'
            ],
            correctAnswer: 2,
            explanation: 'With 2° substrate + NaI in acetone, the benchmark outcome is alkyl iodide. Mechanistic anchor: driven by precipitation.'
          }
        ]
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | 3° alkyl chloride in H2O | SN1 solvolysis | tertiary alcohol substitution | carbocation intermediate |
      | 2° substrate + NaI in acetone | Finkelstein-type substitution | alkyl iodide | driven by precipitation |
      | benzyl halide + methanol | substitution at benzylic center | ether product | resonance stabilizes intermediate |
      | allylic halide + nucleophile | substitution with resonance stabilization | allylic substitution product | fast relative to unactivated analog |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: two-step substitution through carbocation intermediate
      2) Term for: group that departs with electron pair
      3) Product pattern expected under 3° alkyl chloride in H2O
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['SN1', 'leaving group', 'tertiary alcohol substitution'],
        hint1: 'Blank 1 is the vocabulary term paired with: two-step substitution through carbocation intermediate.',
        hint2: 'Blank 2 corresponds to group that departs with electron pair.',
        hint3: 'Use the worked example: 3° alkyl chloride in H2O gives tertiary alcohol substitution.',
        explanation: 'Correct entries: SN1, leaving group, and tertiary alcohol substitution. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nucleophile strength',
            options: ['group that departs with electron pair', 'reactivity of electron pair donor toward electrophile', 'solvent that hydrogen-bonds and can dampen nucleophiles', 'two-step substitution through carbocation intermediate']
          },
          {
            label: 'Expected pattern from 2° substrate + NaI in acetone',
            options: ['tertiary alcohol substitution', 'alkyl iodide', 'ether product', 'allylic substitution product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Always evaluate elimination when base strength and heat are present.', 'Solvent effects can reverse expected nucleophile ordering.', 'SN1 stereochemistry often trends toward racemization, not full inversion.']
          }
        ],
        correctAnswers: ['reactivity of electron pair donor toward electrophile', 'alkyl iodide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - SN1 stereochemistry often trends toward racemization, not full inversion.
      - Solvent effects can reverse expected nucleophile ordering.
      - Always evaluate elimination when base strength and heat are present.
      
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
      id: 'ochem-nucleophilic-substitution-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on substrate structure effects, a step uses benzyl halide + methanol. Which major product pattern is most defensible?',
            options: [
              'allylic substitution product',
              'alkyl iodide',
              'ether product',
              'tertiary alcohol substitution'
            ],
            correctAnswer: 2,
            explanation: 'benzyl halide + methanol is classically associated with ether product because resonance stabilizes intermediate.'
          },
          {
            question: 'A mechanism rationale cites aprotic solvent: polar solvent that enhances anionic nucleophile reactivity. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use aprotic solvent only after final answer choice selection.',
              'Use aprotic solvent to justify why the pathway favors allylic substitution product under allylic halide + nucleophile.',
              'Treat aprotic solvent as a naming convention unrelated to mechanism.',
              'Ignore aprotic solvent and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies aprotic solvent directly to mechanism and product control. In this context, allylic halide + nucleophile aligns with allylic substitution product.'
          }
        ]
      }
    }
  ]
};
