export const oChemCarbsPart6Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'ochem-carbohydrates-biochemistry-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Carbohydrates in Organic Chemistry
      
      **Part 6 of 7 — Problem-Solving with Sugar Mechanisms**
      
      This part focuses on linking carbohydrate reactions to biochemical pathways. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **hemiacetal**: functional group from alcohol addition to aldehyde
      - **acetal**: double-alkoxy carbon stable to base
      - **glycosidic bond**: acetal linkage connecting sugar units
      - **reducing sugar**: sugar that can open to an oxidizable carbonyl form
      
      ### Worked reaction example
      A representative transformation uses **glycosyl donor + acceptor OH**.
      
      1. Identify the governing mechanism: **glycosidic coupling**.
      2. Predict the dominant product pattern: **disaccharide linkage**.
      3. Justify with a mechanistic note: stereochemistry controlled by protecting groups.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for hemiacetal.',
            options: [
              'functional group from alcohol addition to aldehyde',
              'acetal linkage connecting sugar units',
              'double-alkoxy carbon stable to base',
              'sugar that can open to an oxidizable carbonyl form'
            ],
            correctAnswer: 0,
            explanation: 'hemiacetal is defined as: functional group from alcohol addition to aldehyde.'
          },
          {
            question: 'A reaction in this lesson uses ROH, acid catalyst and proceeds by acetal formation. What product pattern should you predict first?',
            options: [
              'glycoside/acetal at anomeric carbon',
              'alditol formation',
              'returns hemiacetal + alcohol',
              'disaccharide linkage'
            ],
            correctAnswer: 0,
            explanation: 'With ROH, acid catalyst, the benchmark outcome is glycoside/acetal at anomeric carbon. Mechanistic anchor: locks anomeric configuration.'
          }
        ]
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | glycosyl donor + acceptor OH | glycosidic coupling | disaccharide linkage | stereochemistry controlled by protecting groups |
      | ROH, acid catalyst | acetal formation | glycoside/acetal at anomeric carbon | locks anomeric configuration |
      | H2O, acid | acetal hydrolysis | returns hemiacetal + alcohol | reversible under acidic conditions |
      | NaBH4 | carbonyl reduction | alditol formation | reduces open-chain carbonyl |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: functional group from alcohol addition to aldehyde

      2) Term for: double-alkoxy carbon stable to base

      3) Product pattern expected under glycosyl donor + acceptor OH
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['hemiacetal', 'acetal', 'disaccharide linkage'],
        hint1: 'Blank 1 is the vocabulary term paired with: functional group from alcohol addition to aldehyde.',
        hint2: 'Blank 2 corresponds to double-alkoxy carbon stable to base.',
        hint3: 'Use the worked example: glycosyl donor + acceptor OH gives disaccharide linkage.',
        explanation: 'Correct entries: hemiacetal, acetal, and disaccharide linkage. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'glycosidic bond',
            options: ['acetal linkage connecting sugar units', 'double-alkoxy carbon stable to base', 'sugar that can open to an oxidizable carbonyl form', 'functional group from alcohol addition to aldehyde']
          },
          {
            label: 'Expected pattern from ROH, acid catalyst',
            options: ['glycoside/acetal at anomeric carbon', 'alditol formation', 'disaccharide linkage', 'returns hemiacetal + alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Acetals are stable in base but hydrolyze in acid.', 'A nonreducing sugar lacks a free anomeric hemiacetal.', 'Haworth orientation must be tied back to D/L assignment carefully.']
          }
        ],
        correctAnswers: ['acetal linkage connecting sugar units', 'glycoside/acetal at anomeric carbon', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p6-s6-strategy',
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
      id: 'ochem-carbohydrates-biochemistry-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on problem-solving with sugar mechanisms, a step uses H2O, acid. Which major product pattern is most defensible?',
            options: [
              'returns hemiacetal + alcohol',
              'glycoside/acetal at anomeric carbon',
              'disaccharide linkage',
              'alditol formation'
            ],
            correctAnswer: 0,
            explanation: 'H2O, acid is classically associated with returns hemiacetal + alcohol because reversible under acidic conditions.'
          },
          {
            question: 'A mechanism rationale cites monosaccharide: single carbohydrate unit with multiple hydroxyls. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use monosaccharide to justify why the pathway favors alditol formation under NaBH4.',
              'Ignore monosaccharide and choose products only by molecular weight.',
              'Use monosaccharide only after final answer choice selection.',
              'Treat monosaccharide as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies monosaccharide directly to mechanism and product control. In this context, NaBH4 aligns with alditol formation.'
          }
        ]
      }
    }
  ]
};
