export const oChemSNPart1Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'ochem-nucleophilic-substitution-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Nucleophilic Substitution
      
      **Part 1 of 7 — SN1 and SN2 Foundations**
      
      This part focuses on choosing between concerted and stepwise substitution pathways. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **SN2**: one-step backside attack with inversion
      - **SN1**: two-step substitution through carbocation intermediate
      - **leaving group**: group that departs with electron pair
      - **nucleophile strength**: reactivity of electron pair donor toward electrophile
      
      ### Worked reaction example
      A representative transformation uses **1° alkyl bromide + NaCN in DMSO**.
      
      1. Identify the governing mechanism: **SN2**.
      2. Predict the dominant product pattern: **nitrile substitution product**.
      3. Justify with a mechanistic note: strong nucleophile + aprotic solvent.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for SN2.',
            options: [
              'group that departs with electron pair',
              'reactivity of electron pair donor toward electrophile',
              'two-step substitution through carbocation intermediate',
              'one-step backside attack with inversion'
            ],
            correctAnswer: 3,
            explanation: 'SN2 is defined as: one-step backside attack with inversion.'
          },
          {
            question: 'A reaction in this lesson uses 3° alkyl chloride in H2O and proceeds by SN1 solvolysis. What product pattern should you predict first?',
            options: [
              'tertiary alcohol substitution',
              'alkyl iodide',
              'ether product',
              'nitrile substitution product'
            ],
            correctAnswer: 0,
            explanation: 'With 3° alkyl chloride in H2O, the benchmark outcome is tertiary alcohol substitution. Mechanistic anchor: carbocation intermediate.'
          }
        ]
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | 1° alkyl bromide + NaCN in DMSO | SN2 | nitrile substitution product | strong nucleophile + aprotic solvent |
      | 3° alkyl chloride in H2O | SN1 solvolysis | tertiary alcohol substitution | carbocation intermediate |
      | 2° substrate + NaI in acetone | Finkelstein-type substitution | alkyl iodide | driven by precipitation |
      | benzyl halide + methanol | substitution at benzylic center | ether product | resonance stabilizes intermediate |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: one-step backside attack with inversion

      2) Term for: two-step substitution through carbocation intermediate

      3) Product pattern expected under 1° alkyl bromide + NaCN in DMSO
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['SN2', 'SN1', 'nitrile substitution product'],
        hint1: 'Blank 1 is the vocabulary term paired with: one-step backside attack with inversion.',
        hint2: 'Blank 2 corresponds to two-step substitution through carbocation intermediate.',
        hint3: 'Use the worked example: 1° alkyl bromide + NaCN in DMSO gives nitrile substitution product.',
        explanation: 'Correct entries: SN2, SN1, and nitrile substitution product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'leaving group',
            options: ['reactivity of electron pair donor toward electrophile', 'one-step backside attack with inversion', 'two-step substitution through carbocation intermediate', 'group that departs with electron pair']
          },
          {
            label: 'Expected pattern from 3° alkyl chloride in H2O',
            options: ['alkyl iodide', 'tertiary alcohol substitution', 'ether product', 'nitrile substitution product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Solvent effects can reverse expected nucleophile ordering.', 'Strong nucleophile does not guarantee SN2 on heavily hindered substrates.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'SN1 stereochemistry often trends toward racemization, not full inversion.']
          }
        ],
        correctAnswers: ['group that departs with electron pair', 'tertiary alcohol substitution', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Strong nucleophile does not guarantee SN2 on heavily hindered substrates.
      - SN1 stereochemistry often trends toward racemization, not full inversion.
      - Solvent effects can reverse expected nucleophile ordering.
      
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
      id: 'ochem-nucleophilic-substitution-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on sn1 and sn2 foundations, a step uses 2° substrate + NaI in acetone. Which major product pattern is most defensible?',
            options: [
              'tertiary alcohol substitution',
              'alkyl iodide',
              'ether product',
              'nitrile substitution product'
            ],
            correctAnswer: 1,
            explanation: '2° substrate + NaI in acetone is classically associated with alkyl iodide because driven by precipitation.'
          },
          {
            question: 'A mechanism rationale cites protic solvent: solvent that hydrogen-bonds and can dampen nucleophiles. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore protic solvent and choose products only by molecular weight.',
              'Use protic solvent to justify why the pathway favors ether product under benzyl halide + methanol.',
              'Treat protic solvent as a naming convention unrelated to mechanism.',
              'Use protic solvent only after final answer choice selection.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies protic solvent directly to mechanism and product control. In this context, benzyl halide + methanol aligns with ether product.'
          }
        ]
      }
    }
  ]
};
