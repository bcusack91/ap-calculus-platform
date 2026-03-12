export const oChemConjugatedPart3Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 3 of 7 — 1,2 vs 1,4 Addition**
      
      This part focuses on discriminating 1,2 and 1,4 electrophilic additions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **1,2-addition**: electrophile and nucleophile add across adjacent carbons
      - **1,4-addition**: net addition across conjugated system termini
      - **kinetic product**: forms faster via lower activation barrier
      - **thermodynamic product**: more stable product favored at equilibrium
      
      ### Worked reaction example
      A representative transformation uses **Br2 allylic conditions**.
      
      1. Identify the governing mechanism: **allylic bromination**.
      2. Predict the dominant product pattern: **allylic bromide**.
      3. Justify with a mechanistic note: resonance-stabilized radical.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for 1,2-addition.',
            options: [
              'forms faster via lower activation barrier',
              'more stable product favored at equilibrium',
              'net addition across conjugated system termini',
              'electrophile and nucleophile add across adjacent carbons'
            ],
            correctAnswer: 3,
            explanation: '1,2-addition is defined as: electrophile and nucleophile add across adjacent carbons.'
          },
          {
            question: 'A reaction in this lesson uses diene + maleic anhydride, heat and proceeds by Diels-Alder cycloaddition. What product pattern should you predict first?',
            options: [
              'allylic bromide',
              'rearranged conjugated product',
              'conjugated isomer distribution',
              'cyclohexene adduct'
            ],
            correctAnswer: 3,
            explanation: 'With diene + maleic anhydride, heat, the benchmark outcome is cyclohexene adduct. Mechanistic anchor: concerted pericyclic process.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2 allylic conditions | allylic bromination | allylic bromide | resonance-stabilized radical |
      | diene + maleic anhydride, heat | Diels-Alder cycloaddition | cyclohexene adduct | concerted pericyclic process |
      | UV isomerization | double-bond geometry change | conjugated isomer distribution | photochemical pathway |
      | Pd-catalyzed coupling of allylic substrates | allylic substitution | rearranged conjugated product | regioselective catalyst control |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: electrophile and nucleophile add across adjacent carbons
      2) Term for: net addition across conjugated system termini
      3) Product pattern expected under Br2 allylic conditions
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1,2-addition', '1,4-addition', 'allylic bromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: electrophile and nucleophile add across adjacent carbons.',
        hint2: 'Blank 2 corresponds to net addition across conjugated system termini.',
        hint3: 'Use the worked example: Br2 allylic conditions gives allylic bromide.',
        explanation: 'Correct entries: 1,2-addition, 1,4-addition, and allylic bromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'kinetic product',
            options: ['electrophile and nucleophile add across adjacent carbons', 'forms faster via lower activation barrier', 'more stable product favored at equilibrium', 'net addition across conjugated system termini']
          },
          {
            label: 'Expected pattern from diene + maleic anhydride, heat',
            options: ['rearranged conjugated product', 'allylic bromide', 'cyclohexene adduct', 'conjugated isomer distribution']
          },
          {
            label: 'Best exam strategy statement',
            options: ['1,2 and 1,4 products can both form from the same allylic intermediate.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Diels-Alder requires diene in s-cis conformation.', 'Conjugation lowers energy but does not make systems inert.']
          }
        ],
        correctAnswers: ['forms faster via lower activation barrier', 'cyclohexene adduct', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Diels-Alder requires diene in s-cis conformation.
      - Conjugation lowers energy but does not make systems inert.
      - 1,2 and 1,4 products can both form from the same allylic intermediate.
      
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
      id: 'ochem-conjugated-systems-dienes-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on 1,2 vs 1,4 addition, a step uses UV isomerization. Which major product pattern is most defensible?',
            options: [
              'rearranged conjugated product',
              'conjugated isomer distribution',
              'allylic bromide',
              'cyclohexene adduct'
            ],
            correctAnswer: 1,
            explanation: 'UV isomerization is classically associated with conjugated isomer distribution because photochemical pathway.'
          },
          {
            question: 'A mechanism rationale cites Diels-Alder reaction: [4+2] cycloaddition of diene and dienophile. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat Diels-Alder reaction as a naming convention unrelated to mechanism.',
              'Use Diels-Alder reaction to justify why the pathway favors rearranged conjugated product under Pd-catalyzed coupling of allylic substrates.',
              'Use Diels-Alder reaction only after final answer choice selection.',
              'Ignore Diels-Alder reaction and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies Diels-Alder reaction directly to mechanism and product control. In this context, Pd-catalyzed coupling of allylic substrates aligns with rearranged conjugated product.'
          }
        ]
      }
    }
  ]
};
