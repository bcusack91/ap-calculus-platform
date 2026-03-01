export const oChemConjugatedPart6Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 6 of 7 — Synthesis with Conjugated Intermediates**
      
      This part focuses on building cyclic targets from diene chemistry. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **thermodynamic product**: more stable product favored at equilibrium
      - **Diels-Alder reaction**: [4+2] cycloaddition of diene and dienophile
      - **s-cis conformation**: required diene geometry for Diels-Alder
      - **endo preference**: secondary orbital interactions favor endo transition state
      
      ### Worked reaction example
      A representative transformation uses **Pd-catalyzed coupling of allylic substrates**.
      
      1. Identify the governing mechanism: **allylic substitution**.
      2. Predict the dominant product pattern: **rearranged conjugated product**.
      3. Justify with a mechanistic note: regioselective catalyst control.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for thermodynamic product.',
            options: [
              '[4+2] cycloaddition of diene and dienophile',
              'secondary orbital interactions favor endo transition state',
              'required diene geometry for Diels-Alder',
              'more stable product favored at equilibrium'
            ],
            correctAnswer: 3,
            explanation: 'thermodynamic product is defined as: more stable product favored at equilibrium.'
          },
          {
            question: 'A reaction in this lesson uses HBr, low temperature and proceeds by electrophilic addition to conjugated diene. What product pattern should you predict first?',
            options: [
              '1,4-product favored',
              'allylic bromide',
              'rearranged conjugated product',
              '1,2-product favored'
            ],
            correctAnswer: 3,
            explanation: 'With HBr, low temperature, the benchmark outcome is 1,2-product favored. Mechanistic anchor: kinetic control.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Pd-catalyzed coupling of allylic substrates | allylic substitution | rearranged conjugated product | regioselective catalyst control |
      | HBr, low temperature | electrophilic addition to conjugated diene | 1,2-product favored | kinetic control |
      | HBr, higher temperature | reversible addition | 1,4-product favored | thermodynamic control |
      | Br2 allylic conditions | allylic bromination | allylic bromide | resonance-stabilized radical |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: more stable product favored at equilibrium
      2) Term for: [4+2] cycloaddition of diene and dienophile
      3) Product pattern expected under Pd-catalyzed coupling of allylic substrates
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['thermodynamic product', 'Diels-Alder reaction', 'rearranged conjugated product'],
        hint1: 'Blank 1 is the vocabulary term paired with: more stable product favored at equilibrium.',
        hint2: 'Blank 2 corresponds to [4+2] cycloaddition of diene and dienophile.',
        hint3: 'Use the worked example: Pd-catalyzed coupling of allylic substrates gives rearranged conjugated product.',
        explanation: 'Correct entries: thermodynamic product, Diels-Alder reaction, and rearranged conjugated product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 's-cis conformation',
            options: ['required diene geometry for Diels-Alder', '[4+2] cycloaddition of diene and dienophile', 'secondary orbital interactions favor endo transition state', 'more stable product favored at equilibrium']
          },
          {
            label: 'Expected pattern from HBr, low temperature',
            options: ['rearranged conjugated product', '1,4-product favored', '1,2-product favored', 'allylic bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Diels-Alder requires diene in s-cis conformation.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Conjugation lowers energy but does not make systems inert.', 'Temperature can switch dominant product by kinetic vs thermodynamic control.']
          }
        ],
        correctAnswers: ['required diene geometry for Diels-Alder', '1,2-product favored', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Temperature can switch dominant product by kinetic vs thermodynamic control.
      - Diels-Alder requires diene in s-cis conformation.
      - Conjugation lowers energy but does not make systems inert.
      
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
      id: 'ochem-conjugated-systems-dienes-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis with conjugated intermediates, a step uses HBr, higher temperature. Which major product pattern is most defensible?',
            options: [
              '1,4-product favored',
              'rearranged conjugated product',
              'allylic bromide',
              '1,2-product favored'
            ],
            correctAnswer: 0,
            explanation: 'HBr, higher temperature is classically associated with 1,4-product favored because thermodynamic control.'
          },
          {
            question: 'A mechanism rationale cites conjugation: alternating pi and sigma bonds allowing delocalization. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use conjugation only after final answer choice selection.',
              'Use conjugation to justify why the pathway favors allylic bromide under Br2 allylic conditions.',
              'Ignore conjugation and choose products only by molecular weight.',
              'Treat conjugation as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies conjugation directly to mechanism and product control. In this context, Br2 allylic conditions aligns with allylic bromide.'
          }
        ]
      }
    }
  ]
};
