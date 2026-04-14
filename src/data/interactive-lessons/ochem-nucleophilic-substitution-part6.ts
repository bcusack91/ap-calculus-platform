export const oChemSNPart6Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'ochem-nucleophilic-substitution-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Nucleophilic Substitution
      
      **Part 6 of 7 — Synthesis Decision Trees**
      
      This part focuses on mapping reagent choices to target products. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **aprotic solvent**: polar solvent that enhances anionic nucleophile reactivity
      - **Walden inversion**: configuration inversion at SN2 stereocenter
      - **racemization**: partial mixture from planar carbocation attack
      - **substrate sterics**: crowding around electrophilic carbon controls pathway
      
      ### Worked reaction example
      A representative transformation uses **strong base, heat on 2° halide**.
      
      1. Identify the governing mechanism: **E2 competition**.
      2. Predict the dominant product pattern: **alkene side product**.
      3. Justify with a mechanistic note: must account for elimination.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for aprotic solvent.',
            options: [
              'partial mixture from planar carbocation attack',
              'polar solvent that enhances anionic nucleophile reactivity',
              'configuration inversion at SN2 stereocenter',
              'crowding around electrophilic carbon controls pathway'
            ],
            correctAnswer: 1,
            explanation: 'aprotic solvent is defined as: polar solvent that enhances anionic nucleophile reactivity.'
          },
          {
            question: 'A reaction in this lesson uses 1° alkyl bromide + NaCN in DMSO and proceeds by SN2. What product pattern should you predict first?',
            options: [
              'alkyl iodide',
              'tertiary alcohol substitution',
              'nitrile substitution product',
              'alkene side product'
            ],
            correctAnswer: 2,
            explanation: 'With 1° alkyl bromide + NaCN in DMSO, the benchmark outcome is nitrile substitution product. Mechanistic anchor: strong nucleophile + aprotic solvent.'
          }
        ]
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | strong base, heat on 2° halide | E2 competition | alkene side product | must account for elimination |
      | 1° alkyl bromide + NaCN in DMSO | SN2 | nitrile substitution product | strong nucleophile + aprotic solvent |
      | 3° alkyl chloride in H2O | SN1 solvolysis | tertiary alcohol substitution | carbocation intermediate |
      | 2° substrate + NaI in acetone | Finkelstein-type substitution | alkyl iodide | driven by precipitation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: polar solvent that enhances anionic nucleophile reactivity

      2) Term for: configuration inversion at SN2 stereocenter

      3) Product pattern expected under strong base, heat on 2° halide
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aprotic solvent', 'Walden inversion', 'alkene side product'],
        hint1: 'Blank 1 is the vocabulary term paired with: polar solvent that enhances anionic nucleophile reactivity.',
        hint2: 'Blank 2 corresponds to configuration inversion at SN2 stereocenter.',
        hint3: 'Use the worked example: strong base, heat on 2° halide gives alkene side product.',
        explanation: 'Correct entries: aprotic solvent, Walden inversion, and alkene side product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'racemization',
            options: ['crowding around electrophilic carbon controls pathway', 'polar solvent that enhances anionic nucleophile reactivity', 'partial mixture from planar carbocation attack', 'configuration inversion at SN2 stereocenter']
          },
          {
            label: 'Expected pattern from 1° alkyl bromide + NaCN in DMSO',
            options: ['tertiary alcohol substitution', 'alkene side product', 'alkyl iodide', 'nitrile substitution product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Solvent effects can reverse expected nucleophile ordering.', 'SN1 stereochemistry often trends toward racemization, not full inversion.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Always evaluate elimination when base strength and heat are present.']
          }
        ],
        correctAnswers: ['partial mixture from planar carbocation attack', 'nitrile substitution product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p6-s6-strategy',
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
      id: 'ochem-nucleophilic-substitution-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis decision trees, a step uses 3° alkyl chloride in H2O. Which major product pattern is most defensible?',
            options: [
              'alkene side product',
              'nitrile substitution product',
              'tertiary alcohol substitution',
              'alkyl iodide'
            ],
            correctAnswer: 2,
            explanation: '3° alkyl chloride in H2O is classically associated with tertiary alcohol substitution because carbocation intermediate.'
          },
          {
            question: 'A mechanism rationale cites SN2: one-step backside attack with inversion. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use SN2 to justify why the pathway favors alkyl iodide under 2° substrate + NaI in acetone.',
              'Ignore SN2 and choose products only by molecular weight.',
              'Use SN2 only after final answer choice selection.',
              'Treat SN2 as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies SN2 directly to mechanism and product control. In this context, 2° substrate + NaI in acetone aligns with alkyl iodide.'
          }
        ]
      }
    }
  ]
};
