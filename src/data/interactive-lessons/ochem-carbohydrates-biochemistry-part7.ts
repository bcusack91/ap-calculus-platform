export const oChemCarbsPart7Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'ochem-carbohydrates-biochemistry-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Carbohydrates in Organic Chemistry
      
      **Part 7 of 7 — Comprehensive Carbohydrate Review**
      
      This part focuses on integrating stereochemistry and mechanism in exam questions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **acetal**: double-alkoxy carbon stable to base
      - **glycosidic bond**: acetal linkage connecting sugar units
      - **reducing sugar**: sugar that can open to an oxidizable carbonyl form
      - **monosaccharide**: single carbohydrate unit with multiple hydroxyls
      
      ### Worked reaction example
      A representative transformation uses **ROH, acid catalyst**.
      
      1. Identify the governing mechanism: **acetal formation**.
      2. Predict the dominant product pattern: **glycoside/acetal at anomeric carbon**.
      3. Justify with a mechanistic note: locks anomeric configuration.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for acetal.',
            options: [
              'single carbohydrate unit with multiple hydroxyls',
              'double-alkoxy carbon stable to base',
              'sugar that can open to an oxidizable carbonyl form',
              'acetal linkage connecting sugar units'
            ],
            correctAnswer: 1,
            explanation: 'acetal is defined as: double-alkoxy carbon stable to base.'
          },
          {
            question: 'A reaction in this lesson uses H2O, acid and proceeds by acetal hydrolysis. What product pattern should you predict first?',
            options: [
              'glycoside/acetal at anomeric carbon',
              'alditol formation',
              'returns hemiacetal + alcohol',
              'aldonic acid'
            ],
            correctAnswer: 2,
            explanation: 'With H2O, acid, the benchmark outcome is returns hemiacetal + alcohol. Mechanistic anchor: reversible under acidic conditions.'
          }
        ]
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | ROH, acid catalyst | acetal formation | glycoside/acetal at anomeric carbon | locks anomeric configuration |
      | H2O, acid | acetal hydrolysis | returns hemiacetal + alcohol | reversible under acidic conditions |
      | NaBH4 | carbonyl reduction | alditol formation | reduces open-chain carbonyl |
      | Br2/H2O | mild oxidation | aldonic acid | selective for aldehyde oxidation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: double-alkoxy carbon stable to base
      2) Term for: acetal linkage connecting sugar units
      3) Product pattern expected under ROH, acid catalyst
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['acetal', 'glycosidic bond', 'glycoside/acetal at anomeric carbon'],
        hint1: 'Blank 1 is the vocabulary term paired with: double-alkoxy carbon stable to base.',
        hint2: 'Blank 2 corresponds to acetal linkage connecting sugar units.',
        hint3: 'Use the worked example: ROH, acid catalyst gives glycoside/acetal at anomeric carbon.',
        explanation: 'Correct entries: acetal, glycosidic bond, and glycoside/acetal at anomeric carbon. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'reducing sugar',
            options: ['acetal linkage connecting sugar units', 'double-alkoxy carbon stable to base', 'single carbohydrate unit with multiple hydroxyls', 'sugar that can open to an oxidizable carbonyl form']
          },
          {
            label: 'Expected pattern from H2O, acid',
            options: ['glycoside/acetal at anomeric carbon', 'alditol formation', 'aldonic acid', 'returns hemiacetal + alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Haworth orientation must be tied back to D/L assignment carefully.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Anomers differ only at the anomeric center, not every stereocenter.', 'A nonreducing sugar lacks a free anomeric hemiacetal.']
          }
        ],
        correctAnswers: ['sugar that can open to an oxidizable carbonyl form', 'returns hemiacetal + alcohol', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p7-s6-strategy',
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
      id: 'ochem-carbohydrates-biochemistry-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on comprehensive carbohydrate review, a step uses NaBH4. Which major product pattern is most defensible?',
            options: [
              'returns hemiacetal + alcohol',
              'glycoside/acetal at anomeric carbon',
              'aldonic acid',
              'alditol formation'
            ],
            correctAnswer: 3,
            explanation: 'NaBH4 is classically associated with alditol formation because reduces open-chain carbonyl.'
          },
          {
            question: 'A mechanism rationale cites anomeric carbon: former carbonyl carbon in cyclic sugar. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use anomeric carbon only after final answer choice selection.',
              'Ignore anomeric carbon and choose products only by molecular weight.',
              'Use anomeric carbon to justify why the pathway favors aldonic acid under Br2/H2O.',
              'Treat anomeric carbon as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies anomeric carbon directly to mechanism and product control. In this context, Br2/H2O aligns with aldonic acid.'
          }
        ]
      }
    }
  ]
};
