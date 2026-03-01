export const oChemCarbsPart5Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'ochem-carbohydrates-biochemistry-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Carbohydrates in Organic Chemistry
      
      **Part 5 of 7 — Glycosidic Bond Formation**
      
      This part focuses on building disaccharides with stereochemical control. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **mutarotation**: equilibration between anomers via open-chain form
      - **hemiacetal**: functional group from alcohol addition to aldehyde
      - **acetal**: double-alkoxy carbon stable to base
      - **glycosidic bond**: acetal linkage connecting sugar units
      
      ### Worked reaction example
      A representative transformation uses **periodate cleavage**.
      
      1. Identify the governing mechanism: **vicinal diol cleavage**.
      2. Predict the dominant product pattern: **fragmented carbonyl products**.
      3. Justify with a mechanistic note: diagnostic for diol arrangement.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for mutarotation.',
            options: [
              'double-alkoxy carbon stable to base',
              'equilibration between anomers via open-chain form',
              'functional group from alcohol addition to aldehyde',
              'acetal linkage connecting sugar units'
            ],
            correctAnswer: 1,
            explanation: 'mutarotation is defined as: equilibration between anomers via open-chain form.'
          },
          {
            question: 'A reaction in this lesson uses glycosyl donor + acceptor OH and proceeds by glycosidic coupling. What product pattern should you predict first?',
            options: [
              'disaccharide linkage',
              'returns hemiacetal + alcohol',
              'fragmented carbonyl products',
              'glycoside/acetal at anomeric carbon'
            ],
            correctAnswer: 0,
            explanation: 'With glycosyl donor + acceptor OH, the benchmark outcome is disaccharide linkage. Mechanistic anchor: stereochemistry controlled by protecting groups.'
          }
        ]
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | periodate cleavage | vicinal diol cleavage | fragmented carbonyl products | diagnostic for diol arrangement |
      | glycosyl donor + acceptor OH | glycosidic coupling | disaccharide linkage | stereochemistry controlled by protecting groups |
      | ROH, acid catalyst | acetal formation | glycoside/acetal at anomeric carbon | locks anomeric configuration |
      | H2O, acid | acetal hydrolysis | returns hemiacetal + alcohol | reversible under acidic conditions |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: equilibration between anomers via open-chain form
      2) Term for: functional group from alcohol addition to aldehyde
      3) Product pattern expected under periodate cleavage
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mutarotation', 'hemiacetal', 'fragmented carbonyl products'],
        hint1: 'Blank 1 is the vocabulary term paired with: equilibration between anomers via open-chain form.',
        hint2: 'Blank 2 corresponds to functional group from alcohol addition to aldehyde.',
        hint3: 'Use the worked example: periodate cleavage gives fragmented carbonyl products.',
        explanation: 'Correct entries: mutarotation, hemiacetal, and fragmented carbonyl products. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'acetal',
            options: ['acetal linkage connecting sugar units', 'functional group from alcohol addition to aldehyde', 'equilibration between anomers via open-chain form', 'double-alkoxy carbon stable to base']
          },
          {
            label: 'Expected pattern from glycosyl donor + acceptor OH',
            options: ['glycoside/acetal at anomeric carbon', 'fragmented carbonyl products', 'disaccharide linkage', 'returns hemiacetal + alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Acetals are stable in base but hydrolyze in acid.', 'A nonreducing sugar lacks a free anomeric hemiacetal.', 'Anomers differ only at the anomeric center, not every stereocenter.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['double-alkoxy carbon stable to base', 'disaccharide linkage', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Anomers differ only at the anomeric center, not every stereocenter.
      - Acetals are stable in base but hydrolyze in acid.
      - A nonreducing sugar lacks a free anomeric hemiacetal.
      
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
      id: 'ochem-carbohydrates-biochemistry-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on glycosidic bond formation, a step uses ROH, acid catalyst. Which major product pattern is most defensible?',
            options: [
              'disaccharide linkage',
              'returns hemiacetal + alcohol',
              'fragmented carbonyl products',
              'glycoside/acetal at anomeric carbon'
            ],
            correctAnswer: 3,
            explanation: 'ROH, acid catalyst is classically associated with glycoside/acetal at anomeric carbon because locks anomeric configuration.'
          },
          {
            question: 'A mechanism rationale cites reducing sugar: sugar that can open to an oxidizable carbonyl form. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use reducing sugar to justify why the pathway favors returns hemiacetal + alcohol under H2O, acid.',
              'Use reducing sugar only after final answer choice selection.',
              'Ignore reducing sugar and choose products only by molecular weight.',
              'Treat reducing sugar as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies reducing sugar directly to mechanism and product control. In this context, H2O, acid aligns with returns hemiacetal + alcohol.'
          }
        ]
      }
    }
  ]
};
