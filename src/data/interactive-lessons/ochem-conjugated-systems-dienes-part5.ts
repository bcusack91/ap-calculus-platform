export const oChemConjugatedPart5Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 5 of 7 — Diels-Alder Fundamentals**
      
      This part focuses on assigning regio- and stereochemistry in cycloadditions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **kinetic product**: forms faster via lower activation barrier
      - **thermodynamic product**: more stable product favored at equilibrium
      - **Diels-Alder reaction**: [4+2] cycloaddition of diene and dienophile
      - **s-cis conformation**: required diene geometry for Diels-Alder
      
      ### Worked reaction example
      A representative transformation uses **UV isomerization**.
      
      1. Identify the governing mechanism: **double-bond geometry change**.
      2. Predict the dominant product pattern: **conjugated isomer distribution**.
      3. Justify with a mechanistic note: photochemical pathway.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for kinetic product.',
            options: [
              'forms faster via lower activation barrier',
              'more stable product favored at equilibrium',
              'required diene geometry for Diels-Alder',
              '[4+2] cycloaddition of diene and dienophile'
            ],
            correctAnswer: 0,
            explanation: 'kinetic product is defined as: forms faster via lower activation barrier.'
          },
          {
            question: 'A reaction in this lesson uses Pd-catalyzed coupling of allylic substrates and proceeds by allylic substitution. What product pattern should you predict first?',
            options: [
              '1,2-product favored',
              '1,4-product favored',
              'conjugated isomer distribution',
              'rearranged conjugated product'
            ],
            correctAnswer: 3,
            explanation: 'With Pd-catalyzed coupling of allylic substrates, the benchmark outcome is rearranged conjugated product. Mechanistic anchor: regioselective catalyst control.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | UV isomerization | double-bond geometry change | conjugated isomer distribution | photochemical pathway |
      | Pd-catalyzed coupling of allylic substrates | allylic substitution | rearranged conjugated product | regioselective catalyst control |
      | HBr, low temperature | electrophilic addition to conjugated diene | 1,2-product favored | kinetic control |
      | HBr, higher temperature | reversible addition | 1,4-product favored | thermodynamic control |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: forms faster via lower activation barrier
      2) Term for: more stable product favored at equilibrium
      3) Product pattern expected under UV isomerization
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['kinetic product', 'thermodynamic product', 'conjugated isomer distribution'],
        hint1: 'Blank 1 is the vocabulary term paired with: forms faster via lower activation barrier.',
        hint2: 'Blank 2 corresponds to more stable product favored at equilibrium.',
        hint3: 'Use the worked example: UV isomerization gives conjugated isomer distribution.',
        explanation: 'Correct entries: kinetic product, thermodynamic product, and conjugated isomer distribution. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diels-Alder reaction',
            options: ['[4+2] cycloaddition of diene and dienophile', 'forms faster via lower activation barrier', 'required diene geometry for Diels-Alder', 'more stable product favored at equilibrium']
          },
          {
            label: 'Expected pattern from Pd-catalyzed coupling of allylic substrates',
            options: ['rearranged conjugated product', '1,4-product favored', '1,2-product favored', 'conjugated isomer distribution']
          },
          {
            label: 'Best exam strategy statement',
            options: ['1,2 and 1,4 products can both form from the same allylic intermediate.', 'Diels-Alder requires diene in s-cis conformation.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Temperature can switch dominant product by kinetic vs thermodynamic control.']
          }
        ],
        correctAnswers: ['[4+2] cycloaddition of diene and dienophile', 'rearranged conjugated product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p5-s6-strategy',
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
      id: 'ochem-conjugated-systems-dienes-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on diels-alder fundamentals, a step uses HBr, low temperature. Which major product pattern is most defensible?',
            options: [
              'conjugated isomer distribution',
              '1,2-product favored',
              '1,4-product favored',
              'rearranged conjugated product'
            ],
            correctAnswer: 1,
            explanation: 'HBr, low temperature is classically associated with 1,2-product favored because kinetic control.'
          },
          {
            question: 'A mechanism rationale cites endo preference: secondary orbital interactions favor endo transition state. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore endo preference and choose products only by molecular weight.',
              'Use endo preference to justify why the pathway favors 1,4-product favored under HBr, higher temperature.',
              'Use endo preference only after final answer choice selection.',
              'Treat endo preference as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies endo preference directly to mechanism and product control. In this context, HBr, higher temperature aligns with 1,4-product favored.'
          }
        ]
      }
    }
  ]
};
