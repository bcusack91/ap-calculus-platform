export const oChemCarbsPart2Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'ochem-carbohydrates-biochemistry-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Carbohydrates in Organic Chemistry
      
      **Part 2 of 7 — Cyclization and Anomers**
      
      This part focuses on assigning alpha/beta anomers after ring closure. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **anomeric carbon**: former carbonyl carbon in cyclic sugar
      - **alpha anomer**: anomeric substituent trans to CH2OH in D-sugars
      - **beta anomer**: anomeric substituent cis to CH2OH in D-sugars
      - **mutarotation**: equilibration between anomers via open-chain form
      
      ### Worked reaction example
      A representative transformation uses **H2O, acid**.
      
      1. Identify the governing mechanism: **acetal hydrolysis**.
      2. Predict the dominant product pattern: **returns hemiacetal + alcohol**.
      3. Justify with a mechanistic note: reversible under acidic conditions.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for anomeric carbon.',
            options: [
              'equilibration between anomers via open-chain form',
              'anomeric substituent trans to CH2OH in D-sugars',
              'former carbonyl carbon in cyclic sugar',
              'anomeric substituent cis to CH2OH in D-sugars'
            ],
            correctAnswer: 2,
            explanation: 'anomeric carbon is defined as: former carbonyl carbon in cyclic sugar.'
          },
          {
            question: 'A reaction in this lesson uses NaBH4 and proceeds by carbonyl reduction. What product pattern should you predict first?',
            options: [
              'alditol formation',
              'returns hemiacetal + alcohol',
              'aldonic acid',
              'fragmented carbonyl products'
            ],
            correctAnswer: 0,
            explanation: 'With NaBH4, the benchmark outcome is alditol formation. Mechanistic anchor: reduces open-chain carbonyl.'
          }
        ]
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | H2O, acid | acetal hydrolysis | returns hemiacetal + alcohol | reversible under acidic conditions |
      | NaBH4 | carbonyl reduction | alditol formation | reduces open-chain carbonyl |
      | Br2/H2O | mild oxidation | aldonic acid | selective for aldehyde oxidation |
      | periodate cleavage | vicinal diol cleavage | fragmented carbonyl products | diagnostic for diol arrangement |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: former carbonyl carbon in cyclic sugar
      2) Term for: anomeric substituent trans to CH2OH in D-sugars
      3) Product pattern expected under H2O, acid
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['anomeric carbon', 'alpha anomer', 'returns hemiacetal + alcohol'],
        hint1: 'Blank 1 is the vocabulary term paired with: former carbonyl carbon in cyclic sugar.',
        hint2: 'Blank 2 corresponds to anomeric substituent trans to CH2OH in D-sugars.',
        hint3: 'Use the worked example: H2O, acid gives returns hemiacetal + alcohol.',
        explanation: 'Correct entries: anomeric carbon, alpha anomer, and returns hemiacetal + alcohol. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'beta anomer',
            options: ['anomeric substituent cis to CH2OH in D-sugars', 'anomeric substituent trans to CH2OH in D-sugars', 'equilibration between anomers via open-chain form', 'former carbonyl carbon in cyclic sugar']
          },
          {
            label: 'Expected pattern from NaBH4',
            options: ['alditol formation', 'fragmented carbonyl products', 'aldonic acid', 'returns hemiacetal + alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['A nonreducing sugar lacks a free anomeric hemiacetal.', 'Haworth orientation must be tied back to D/L assignment carefully.', 'Acetals are stable in base but hydrolyze in acid.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['anomeric substituent cis to CH2OH in D-sugars', 'alditol formation', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Acetals are stable in base but hydrolyze in acid.
      - A nonreducing sugar lacks a free anomeric hemiacetal.
      - Haworth orientation must be tied back to D/L assignment carefully.
      
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
      id: 'ochem-carbohydrates-biochemistry-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on cyclization and anomers, a step uses Br2/H2O. Which major product pattern is most defensible?',
            options: [
              'aldonic acid',
              'returns hemiacetal + alcohol',
              'fragmented carbonyl products',
              'alditol formation'
            ],
            correctAnswer: 0,
            explanation: 'Br2/H2O is classically associated with aldonic acid because selective for aldehyde oxidation.'
          },
          {
            question: 'A mechanism rationale cites hemiacetal: functional group from alcohol addition to aldehyde. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use hemiacetal to justify why the pathway favors fragmented carbonyl products under periodate cleavage.',
              'Use hemiacetal only after final answer choice selection.',
              'Treat hemiacetal as a naming convention unrelated to mechanism.',
              'Ignore hemiacetal and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies hemiacetal directly to mechanism and product control. In this context, periodate cleavage aligns with fragmented carbonyl products.'
          }
        ]
      }
    }
  ]
};
