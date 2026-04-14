export const oChemCarbsPart4Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'ochem-carbohydrates-biochemistry-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Carbohydrates in Organic Chemistry
      
      **Part 4 of 7 — Oxidation and Reduction of Sugars**
      
      This part focuses on tracking selective oxidation at aldehyde positions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **beta anomer**: anomeric substituent cis to CH2OH in D-sugars
      - **mutarotation**: equilibration between anomers via open-chain form
      - **hemiacetal**: functional group from alcohol addition to aldehyde
      - **acetal**: double-alkoxy carbon stable to base
      
      ### Worked reaction example
      A representative transformation uses **Br2/H2O**.
      
      1. Identify the governing mechanism: **mild oxidation**.
      2. Predict the dominant product pattern: **aldonic acid**.
      3. Justify with a mechanistic note: selective for aldehyde oxidation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for beta anomer.',
            options: [
              'equilibration between anomers via open-chain form',
              'anomeric substituent cis to CH2OH in D-sugars',
              'double-alkoxy carbon stable to base',
              'functional group from alcohol addition to aldehyde'
            ],
            correctAnswer: 1,
            explanation: 'beta anomer is defined as: anomeric substituent cis to CH2OH in D-sugars.'
          },
          {
            question: 'A reaction in this lesson uses periodate cleavage and proceeds by vicinal diol cleavage. What product pattern should you predict first?',
            options: [
              'disaccharide linkage',
              'glycoside/acetal at anomeric carbon',
              'aldonic acid',
              'fragmented carbonyl products'
            ],
            correctAnswer: 3,
            explanation: 'With periodate cleavage, the benchmark outcome is fragmented carbonyl products. Mechanistic anchor: diagnostic for diol arrangement.'
          }
        ]
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2/H2O | mild oxidation | aldonic acid | selective for aldehyde oxidation |
      | periodate cleavage | vicinal diol cleavage | fragmented carbonyl products | diagnostic for diol arrangement |
      | glycosyl donor + acceptor OH | glycosidic coupling | disaccharide linkage | stereochemistry controlled by protecting groups |
      | ROH, acid catalyst | acetal formation | glycoside/acetal at anomeric carbon | locks anomeric configuration |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: anomeric substituent cis to CH2OH in D-sugars

      2) Term for: equilibration between anomers via open-chain form

      3) Product pattern expected under Br2/H2O
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['beta anomer', 'mutarotation', 'aldonic acid'],
        hint1: 'Blank 1 is the vocabulary term paired with: anomeric substituent cis to CH2OH in D-sugars.',
        hint2: 'Blank 2 corresponds to equilibration between anomers via open-chain form.',
        hint3: 'Use the worked example: Br2/H2O gives aldonic acid.',
        explanation: 'Correct entries: beta anomer, mutarotation, and aldonic acid. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'hemiacetal',
            options: ['functional group from alcohol addition to aldehyde', 'double-alkoxy carbon stable to base', 'anomeric substituent cis to CH2OH in D-sugars', 'equilibration between anomers via open-chain form']
          },
          {
            label: 'Expected pattern from periodate cleavage',
            options: ['disaccharide linkage', 'glycoside/acetal at anomeric carbon', 'fragmented carbonyl products', 'aldonic acid']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Acetals are stable in base but hydrolyze in acid.', 'Haworth orientation must be tied back to D/L assignment carefully.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Anomers differ only at the anomeric center, not every stereocenter.']
          }
        ],
        correctAnswers: ['functional group from alcohol addition to aldehyde', 'fragmented carbonyl products', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carbohydrates-biochemistry-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Haworth orientation must be tied back to D/L assignment carefully.
      - Anomers differ only at the anomeric center, not every stereocenter.
      - Acetals are stable in base but hydrolyze in acid.
      
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
      id: 'ochem-carbohydrates-biochemistry-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on oxidation and reduction of sugars, a step uses glycosyl donor + acceptor OH. Which major product pattern is most defensible?',
            options: [
              'glycoside/acetal at anomeric carbon',
              'aldonic acid',
              'disaccharide linkage',
              'fragmented carbonyl products'
            ],
            correctAnswer: 2,
            explanation: 'glycosyl donor + acceptor OH is classically associated with disaccharide linkage because stereochemistry controlled by protecting groups.'
          },
          {
            question: 'A mechanism rationale cites glycosidic bond: acetal linkage connecting sugar units. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat glycosidic bond as a naming convention unrelated to mechanism.',
              'Use glycosidic bond to justify why the pathway favors glycoside/acetal at anomeric carbon under ROH, acid catalyst.',
              'Use glycosidic bond only after final answer choice selection.',
              'Ignore glycosidic bond and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies glycosidic bond directly to mechanism and product control. In this context, ROH, acid catalyst aligns with glycoside/acetal at anomeric carbon.'
          }
        ]
      }
    }
  ]
};
