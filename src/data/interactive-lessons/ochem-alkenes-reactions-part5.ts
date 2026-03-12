export const oChemAlkenesPart5Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'ochem-alkenes-reactions-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Alkene Reactions
      
      **Part 5 of 7 — Hydroboration and Oxymercuration Contrast**
      
      This part focuses on contrasting carbocation pathways with concerted additions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **syn addition**: both new groups add to same alkene face
      - **anti addition**: new groups add to opposite faces
      - **osmium oxidation**: OsO4 gives vicinal syn diol
      - **ozonolysis**: O3 cleaves C=C into carbonyl fragments
      
      ### Worked reaction example
      A representative transformation uses **Br2 in CCl4**.
      
      1. Identify the governing mechanism: **halonium-mediated addition**.
      2. Predict the dominant product pattern: **vicinal anti dibromide**.
      3. Justify with a mechanistic note: ring opening from backside.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for syn addition.',
            options: [
              'O3 cleaves C=C into carbonyl fragments',
              'OsO4 gives vicinal syn diol',
              'new groups add to opposite faces',
              'both new groups add to same alkene face'
            ],
            correctAnswer: 3,
            explanation: 'syn addition is defined as: both new groups add to same alkene face.'
          },
          {
            question: 'A reaction in this lesson uses O3 then Me2S and proceeds by reductive ozonolysis. What product pattern should you predict first?',
            options: [
              'vicinal anti dibromide',
              'aldehydes/ketones from cleavage',
              'Markovnikov bromoalkane',
              'anti-Markovnikov bromoalkane'
            ],
            correctAnswer: 1,
            explanation: 'With O3 then Me2S, the benchmark outcome is aldehydes/ketones from cleavage. Mechanistic anchor: double bond fully fragmented.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkenes-reactions-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2 in CCl4 | halonium-mediated addition | vicinal anti dibromide | ring opening from backside |
      | O3 then Me2S | reductive ozonolysis | aldehydes/ketones from cleavage | double bond fully fragmented |
      | HBr (no peroxides) | electrophilic addition via carbocation | Markovnikov bromoalkane | rearrangement possible |
      | HBr, ROOR | radical chain addition | anti-Markovnikov bromoalkane | no carbocation rearrangement |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: both new groups add to same alkene face
      2) Term for: new groups add to opposite faces
      3) Product pattern expected under Br2 in CCl4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['syn addition', 'anti addition', 'vicinal anti dibromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: both new groups add to same alkene face.',
        hint2: 'Blank 2 corresponds to new groups add to opposite faces.',
        hint3: 'Use the worked example: Br2 in CCl4 gives vicinal anti dibromide.',
        explanation: 'Correct entries: syn addition, anti addition, and vicinal anti dibromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'osmium oxidation',
            options: ['both new groups add to same alkene face', 'new groups add to opposite faces', 'OsO4 gives vicinal syn diol', 'O3 cleaves C=C into carbonyl fragments']
          },
          {
            label: 'Expected pattern from O3 then Me2S',
            options: ['anti-Markovnikov bromoalkane', 'vicinal anti dibromide', 'Markovnikov bromoalkane', 'aldehydes/ketones from cleavage']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Peroxides alter HBr behavior but not HCl/HI in standard coursework.', 'Syn/anti outcome depends on mechanism, not alkene substitution alone.', 'Markovnikov labels regiochemistry, not stereochemistry.']
          }
        ],
        correctAnswers: ['OsO4 gives vicinal syn diol', 'aldehydes/ketones from cleavage', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Markovnikov labels regiochemistry, not stereochemistry.
      - Peroxides alter HBr behavior but not HCl/HI in standard coursework.
      - Syn/anti outcome depends on mechanism, not alkene substitution alone.
      
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
      id: 'ochem-alkenes-reactions-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on hydroboration and oxymercuration contrast, a step uses HBr (no peroxides). Which major product pattern is most defensible?',
            options: [
              'anti-Markovnikov bromoalkane',
              'vicinal anti dibromide',
              'Markovnikov bromoalkane',
              'aldehydes/ketones from cleavage'
            ],
            correctAnswer: 2,
            explanation: 'HBr (no peroxides) is classically associated with Markovnikov bromoalkane because rearrangement possible.'
          },
          {
            question: 'A mechanism rationale cites rearrangement: hydride or alkyl shift to more stable carbocation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore rearrangement and choose products only by molecular weight.',
              'Treat rearrangement as a naming convention unrelated to mechanism.',
              'Use rearrangement only after final answer choice selection.',
              'Use rearrangement to justify why the pathway favors anti-Markovnikov bromoalkane under HBr, ROOR.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies rearrangement directly to mechanism and product control. In this context, HBr, ROOR aligns with anti-Markovnikov bromoalkane.'
          }
        ]
      }
    }
  ]
};
