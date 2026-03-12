export const oChemConjugatedPart4Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 4 of 7 — Kinetic vs Thermodynamic Control**
      
      This part focuses on using temperature to shift product distribution. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **1,4-addition**: net addition across conjugated system termini
      - **kinetic product**: forms faster via lower activation barrier
      - **thermodynamic product**: more stable product favored at equilibrium
      - **Diels-Alder reaction**: [4+2] cycloaddition of diene and dienophile
      
      ### Worked reaction example
      A representative transformation uses **diene + maleic anhydride, heat**.
      
      1. Identify the governing mechanism: **Diels-Alder cycloaddition**.
      2. Predict the dominant product pattern: **cyclohexene adduct**.
      3. Justify with a mechanistic note: concerted pericyclic process.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for 1,4-addition.',
            options: [
              'forms faster via lower activation barrier',
              'net addition across conjugated system termini',
              '[4+2] cycloaddition of diene and dienophile',
              'more stable product favored at equilibrium'
            ],
            correctAnswer: 1,
            explanation: '1,4-addition is defined as: net addition across conjugated system termini.'
          },
          {
            question: 'A reaction in this lesson uses UV isomerization and proceeds by double-bond geometry change. What product pattern should you predict first?',
            options: [
              'cyclohexene adduct',
              'rearranged conjugated product',
              '1,2-product favored',
              'conjugated isomer distribution'
            ],
            correctAnswer: 3,
            explanation: 'With UV isomerization, the benchmark outcome is conjugated isomer distribution. Mechanistic anchor: photochemical pathway.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | diene + maleic anhydride, heat | Diels-Alder cycloaddition | cyclohexene adduct | concerted pericyclic process |
      | UV isomerization | double-bond geometry change | conjugated isomer distribution | photochemical pathway |
      | Pd-catalyzed coupling of allylic substrates | allylic substitution | rearranged conjugated product | regioselective catalyst control |
      | HBr, low temperature | electrophilic addition to conjugated diene | 1,2-product favored | kinetic control |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: net addition across conjugated system termini
      2) Term for: forms faster via lower activation barrier
      3) Product pattern expected under diene + maleic anhydride, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1,4-addition', 'kinetic product', 'cyclohexene adduct'],
        hint1: 'Blank 1 is the vocabulary term paired with: net addition across conjugated system termini.',
        hint2: 'Blank 2 corresponds to forms faster via lower activation barrier.',
        hint3: 'Use the worked example: diene + maleic anhydride, heat gives cyclohexene adduct.',
        explanation: 'Correct entries: 1,4-addition, kinetic product, and cyclohexene adduct. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'thermodynamic product',
            options: ['more stable product favored at equilibrium', 'forms faster via lower activation barrier', 'net addition across conjugated system termini', '[4+2] cycloaddition of diene and dienophile']
          },
          {
            label: 'Expected pattern from UV isomerization',
            options: ['conjugated isomer distribution', 'cyclohexene adduct', '1,2-product favored', 'rearranged conjugated product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Temperature can switch dominant product by kinetic vs thermodynamic control.', 'Conjugation lowers energy but does not make systems inert.', '1,2 and 1,4 products can both form from the same allylic intermediate.']
          }
        ],
        correctAnswers: ['more stable product favored at equilibrium', 'conjugated isomer distribution', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Conjugation lowers energy but does not make systems inert.
      - 1,2 and 1,4 products can both form from the same allylic intermediate.
      - Temperature can switch dominant product by kinetic vs thermodynamic control.
      
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
      id: 'ochem-conjugated-systems-dienes-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on kinetic vs thermodynamic control, a step uses Pd-catalyzed coupling of allylic substrates. Which major product pattern is most defensible?',
            options: [
              '1,2-product favored',
              'conjugated isomer distribution',
              'rearranged conjugated product',
              'cyclohexene adduct'
            ],
            correctAnswer: 2,
            explanation: 'Pd-catalyzed coupling of allylic substrates is classically associated with rearranged conjugated product because regioselective catalyst control.'
          },
          {
            question: 'A mechanism rationale cites s-cis conformation: required diene geometry for Diels-Alder. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore s-cis conformation and choose products only by molecular weight.',
              'Treat s-cis conformation as a naming convention unrelated to mechanism.',
              'Use s-cis conformation only after final answer choice selection.',
              'Use s-cis conformation to justify why the pathway favors 1,2-product favored under HBr, low temperature.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies s-cis conformation directly to mechanism and product control. In this context, HBr, low temperature aligns with 1,2-product favored.'
          }
        ]
      }
    }
  ]
};
