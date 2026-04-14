export const oChemConjugatedPart1Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 1 of 7 — Conjugation Basics**
      
      This part focuses on tracking electron delocalization across adjacent p orbitals. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **conjugation**: alternating pi and sigma bonds allowing delocalization
      - **allylic intermediate**: cation/radical adjacent to double bond
      - **1,2-addition**: electrophile and nucleophile add across adjacent carbons
      - **1,4-addition**: net addition across conjugated system termini
      
      ### Worked reaction example
      A representative transformation uses **HBr, low temperature**.
      
      1. Identify the governing mechanism: **electrophilic addition to conjugated diene**.
      2. Predict the dominant product pattern: **1,2-product favored**.
      3. Justify with a mechanistic note: kinetic control.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for conjugation.',
            options: [
              'alternating pi and sigma bonds allowing delocalization',
              'cation/radical adjacent to double bond',
              'electrophile and nucleophile add across adjacent carbons',
              'net addition across conjugated system termini'
            ],
            correctAnswer: 0,
            explanation: 'conjugation is defined as: alternating pi and sigma bonds allowing delocalization.'
          },
          {
            question: 'A reaction in this lesson uses HBr, higher temperature and proceeds by reversible addition. What product pattern should you predict first?',
            options: [
              'allylic bromide',
              'cyclohexene adduct',
              '1,2-product favored',
              '1,4-product favored'
            ],
            correctAnswer: 3,
            explanation: 'With HBr, higher temperature, the benchmark outcome is 1,4-product favored. Mechanistic anchor: thermodynamic control.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HBr, low temperature | electrophilic addition to conjugated diene | 1,2-product favored | kinetic control |
      | HBr, higher temperature | reversible addition | 1,4-product favored | thermodynamic control |
      | Br2 allylic conditions | allylic bromination | allylic bromide | resonance-stabilized radical |
      | diene + maleic anhydride, heat | Diels-Alder cycloaddition | cyclohexene adduct | concerted pericyclic process |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: alternating pi and sigma bonds allowing delocalization

      2) Term for: cation/radical adjacent to double bond

      3) Product pattern expected under HBr, low temperature
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['conjugation', 'allylic intermediate', '1,2-product favored'],
        hint1: 'Blank 1 is the vocabulary term paired with: alternating pi and sigma bonds allowing delocalization.',
        hint2: 'Blank 2 corresponds to cation/radical adjacent to double bond.',
        hint3: 'Use the worked example: HBr, low temperature gives 1,2-product favored.',
        explanation: 'Correct entries: conjugation, allylic intermediate, and 1,2-product favored. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: '1,2-addition',
            options: ['alternating pi and sigma bonds allowing delocalization', 'cation/radical adjacent to double bond', 'net addition across conjugated system termini', 'electrophile and nucleophile add across adjacent carbons']
          },
          {
            label: 'Expected pattern from HBr, higher temperature',
            options: ['1,2-product favored', 'cyclohexene adduct', '1,4-product favored', 'allylic bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['1,2 and 1,4 products can both form from the same allylic intermediate.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Temperature can switch dominant product by kinetic vs thermodynamic control.', 'Diels-Alder requires diene in s-cis conformation.']
          }
        ],
        correctAnswers: ['electrophile and nucleophile add across adjacent carbons', '1,4-product favored', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - 1,2 and 1,4 products can both form from the same allylic intermediate.
      - Temperature can switch dominant product by kinetic vs thermodynamic control.
      - Diels-Alder requires diene in s-cis conformation.
      
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
      id: 'ochem-conjugated-systems-dienes-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on conjugation basics, a step uses Br2 allylic conditions. Which major product pattern is most defensible?',
            options: [
              'allylic bromide',
              '1,4-product favored',
              '1,2-product favored',
              'cyclohexene adduct'
            ],
            correctAnswer: 0,
            explanation: 'Br2 allylic conditions is classically associated with allylic bromide because resonance-stabilized radical.'
          },
          {
            question: 'A mechanism rationale cites kinetic product: forms faster via lower activation barrier. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat kinetic product as a naming convention unrelated to mechanism.',
              'Use kinetic product only after final answer choice selection.',
              'Use kinetic product to justify why the pathway favors cyclohexene adduct under diene + maleic anhydride, heat.',
              'Ignore kinetic product and choose products only by molecular weight.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies kinetic product directly to mechanism and product control. In this context, diene + maleic anhydride, heat aligns with cyclohexene adduct.'
          }
        ]
      }
    }
  ]
};
