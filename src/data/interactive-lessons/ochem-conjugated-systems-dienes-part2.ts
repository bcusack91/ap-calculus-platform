export const oChemConjugatedPart2Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 2 of 7 — Resonance and Allylic Stabilization**
      
      This part focuses on predicting allylic cation and radical stability. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **allylic intermediate**: cation/radical adjacent to double bond
      - **1,2-addition**: electrophile and nucleophile add across adjacent carbons
      - **1,4-addition**: net addition across conjugated system termini
      - **kinetic product**: forms faster via lower activation barrier
      
      ### Worked reaction example
      A representative transformation uses **HBr, higher temperature**.
      
      1. Identify the governing mechanism: **reversible addition**.
      2. Predict the dominant product pattern: **1,4-product favored**.
      3. Justify with a mechanistic note: thermodynamic control.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for allylic intermediate.',
            options: [
              'forms faster via lower activation barrier',
              'cation/radical adjacent to double bond',
              'net addition across conjugated system termini',
              'electrophile and nucleophile add across adjacent carbons'
            ],
            correctAnswer: 1,
            explanation: 'allylic intermediate is defined as: cation/radical adjacent to double bond.'
          },
          {
            question: 'A reaction in this lesson uses Br2 allylic conditions and proceeds by allylic bromination. What product pattern should you predict first?',
            options: [
              'allylic bromide',
              'conjugated isomer distribution',
              'cyclohexene adduct',
              '1,4-product favored'
            ],
            correctAnswer: 0,
            explanation: 'With Br2 allylic conditions, the benchmark outcome is allylic bromide. Mechanistic anchor: resonance-stabilized radical.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HBr, higher temperature | reversible addition | 1,4-product favored | thermodynamic control |
      | Br2 allylic conditions | allylic bromination | allylic bromide | resonance-stabilized radical |
      | diene + maleic anhydride, heat | Diels-Alder cycloaddition | cyclohexene adduct | concerted pericyclic process |
      | UV isomerization | double-bond geometry change | conjugated isomer distribution | photochemical pathway |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: cation/radical adjacent to double bond
      2) Term for: electrophile and nucleophile add across adjacent carbons
      3) Product pattern expected under HBr, higher temperature
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['allylic intermediate', '1,2-addition', '1,4-product favored'],
        hint1: 'Blank 1 is the vocabulary term paired with: cation/radical adjacent to double bond.',
        hint2: 'Blank 2 corresponds to electrophile and nucleophile add across adjacent carbons.',
        hint3: 'Use the worked example: HBr, higher temperature gives 1,4-product favored.',
        explanation: 'Correct entries: allylic intermediate, 1,2-addition, and 1,4-product favored. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: '1,4-addition',
            options: ['cation/radical adjacent to double bond', 'net addition across conjugated system termini', 'electrophile and nucleophile add across adjacent carbons', 'forms faster via lower activation barrier']
          },
          {
            label: 'Expected pattern from Br2 allylic conditions',
            options: ['1,4-product favored', 'allylic bromide', 'cyclohexene adduct', 'conjugated isomer distribution']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Temperature can switch dominant product by kinetic vs thermodynamic control.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Conjugation lowers energy but does not make systems inert.', 'Diels-Alder requires diene in s-cis conformation.']
          }
        ],
        correctAnswers: ['net addition across conjugated system termini', 'allylic bromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Temperature can switch dominant product by kinetic vs thermodynamic control.
      - Diels-Alder requires diene in s-cis conformation.
      - Conjugation lowers energy but does not make systems inert.
      
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
      id: 'ochem-conjugated-systems-dienes-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on resonance and allylic stabilization, a step uses diene + maleic anhydride, heat. Which major product pattern is most defensible?',
            options: [
              'conjugated isomer distribution',
              '1,4-product favored',
              'allylic bromide',
              'cyclohexene adduct'
            ],
            correctAnswer: 3,
            explanation: 'diene + maleic anhydride, heat is classically associated with cyclohexene adduct because concerted pericyclic process.'
          },
          {
            question: 'A mechanism rationale cites thermodynamic product: more stable product favored at equilibrium. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use thermodynamic product to justify why the pathway favors conjugated isomer distribution under UV isomerization.',
              'Use thermodynamic product only after final answer choice selection.',
              'Treat thermodynamic product as a naming convention unrelated to mechanism.',
              'Ignore thermodynamic product and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies thermodynamic product directly to mechanism and product control. In this context, UV isomerization aligns with conjugated isomer distribution.'
          }
        ]
      }
    }
  ]
};
