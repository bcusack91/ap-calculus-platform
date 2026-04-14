export const oChemCarbsPart3Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'ochem-carbohydrates-biochemistry-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Carbohydrates in Organic Chemistry
      
      **Part 3 of 7 — Reactivity of Hemiacetals and Acetals**
      
      This part focuses on predicting mutarotation and acetal stability. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **alpha anomer**: anomeric substituent trans to CH2OH in D-sugars
      - **beta anomer**: anomeric substituent cis to CH2OH in D-sugars
      - **mutarotation**: equilibration between anomers via open-chain form
      - **hemiacetal**: functional group from alcohol addition to aldehyde
      
      ### Worked reaction example
      A representative transformation uses **NaBH4**.
      
      1. Identify the governing mechanism: **carbonyl reduction**.
      2. Predict the dominant product pattern: **alditol formation**.
      3. Justify with a mechanistic note: reduces open-chain carbonyl.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for alpha anomer.',
            options: [
              'equilibration between anomers via open-chain form',
              'anomeric substituent cis to CH2OH in D-sugars',
              'anomeric substituent trans to CH2OH in D-sugars',
              'functional group from alcohol addition to aldehyde'
            ],
            correctAnswer: 2,
            explanation: 'alpha anomer is defined as: anomeric substituent trans to CH2OH in D-sugars.'
          },
          {
            question: 'A reaction in this lesson uses Br2/H2O and proceeds by mild oxidation. What product pattern should you predict first?',
            options: [
              'disaccharide linkage',
              'alditol formation',
              'fragmented carbonyl products',
              'aldonic acid'
            ],
            correctAnswer: 3,
            explanation: 'With Br2/H2O, the benchmark outcome is aldonic acid. Mechanistic anchor: selective for aldehyde oxidation.'
          }
        ]
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NaBH4 | carbonyl reduction | alditol formation | reduces open-chain carbonyl |
      | Br2/H2O | mild oxidation | aldonic acid | selective for aldehyde oxidation |
      | periodate cleavage | vicinal diol cleavage | fragmented carbonyl products | diagnostic for diol arrangement |
      | glycosyl donor + acceptor OH | glycosidic coupling | disaccharide linkage | stereochemistry controlled by protecting groups |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: anomeric substituent trans to CH2OH in D-sugars

      2) Term for: anomeric substituent cis to CH2OH in D-sugars

      3) Product pattern expected under NaBH4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['alpha anomer', 'beta anomer', 'alditol formation'],
        hint1: 'Blank 1 is the vocabulary term paired with: anomeric substituent trans to CH2OH in D-sugars.',
        hint2: 'Blank 2 corresponds to anomeric substituent cis to CH2OH in D-sugars.',
        hint3: 'Use the worked example: NaBH4 gives alditol formation.',
        explanation: 'Correct entries: alpha anomer, beta anomer, and alditol formation. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'mutarotation',
            options: ['equilibration between anomers via open-chain form', 'functional group from alcohol addition to aldehyde', 'anomeric substituent cis to CH2OH in D-sugars', 'anomeric substituent trans to CH2OH in D-sugars']
          },
          {
            label: 'Expected pattern from Br2/H2O',
            options: ['alditol formation', 'disaccharide linkage', 'aldonic acid', 'fragmented carbonyl products']
          },
          {
            label: 'Best exam strategy statement',
            options: ['A nonreducing sugar lacks a free anomeric hemiacetal.', 'Haworth orientation must be tied back to D/L assignment carefully.', 'Anomers differ only at the anomeric center, not every stereocenter.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['equilibration between anomers via open-chain form', 'aldonic acid', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - A nonreducing sugar lacks a free anomeric hemiacetal.
      - Haworth orientation must be tied back to D/L assignment carefully.
      - Anomers differ only at the anomeric center, not every stereocenter.
      
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
      id: 'ochem-carbohydrates-biochemistry-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on reactivity of hemiacetals and acetals, a step uses periodate cleavage. Which major product pattern is most defensible?',
            options: [
              'aldonic acid',
              'disaccharide linkage',
              'alditol formation',
              'fragmented carbonyl products'
            ],
            correctAnswer: 3,
            explanation: 'periodate cleavage is classically associated with fragmented carbonyl products because diagnostic for diol arrangement.'
          },
          {
            question: 'A mechanism rationale cites acetal: double-alkoxy carbon stable to base. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use acetal to justify why the pathway favors disaccharide linkage under glycosyl donor + acceptor OH.',
              'Use acetal only after final answer choice selection.',
              'Ignore acetal and choose products only by molecular weight.',
              'Treat acetal as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies acetal directly to mechanism and product control. In this context, glycosyl donor + acceptor OH aligns with disaccharide linkage.'
          }
        ]
      }
    }
  ]
};
