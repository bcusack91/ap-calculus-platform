export const oChemAlkenesPart4Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'ochem-alkenes-reactions-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Alkene Reactions
      
      **Part 4 of 7 — Oxidation and Cleavage Patterns**
      
      This part focuses on matching oxidation level to exam product options. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **anti-Markovnikov addition**: functional group ends on less substituted alkene carbon
      - **syn addition**: both new groups add to same alkene face
      - **anti addition**: new groups add to opposite faces
      - **osmium oxidation**: OsO4 gives vicinal syn diol
      
      ### Worked reaction example
      A representative transformation uses **BH3·THF; H2O2, NaOH**.
      
      1. Identify the governing mechanism: **hydroboration-oxidation**.
      2. Predict the dominant product pattern: **anti-Markovnikov syn alcohol**.
      3. Justify with a mechanistic note: concerted hydroboration step.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for anti-Markovnikov addition.',
            options: [
              'functional group ends on less substituted alkene carbon',
              'OsO4 gives vicinal syn diol',
              'new groups add to opposite faces',
              'both new groups add to same alkene face'
            ],
            correctAnswer: 0,
            explanation: 'anti-Markovnikov addition is defined as: functional group ends on less substituted alkene carbon.'
          },
          {
            question: 'A reaction in this lesson uses Br2 in CCl4 and proceeds by halonium-mediated addition. What product pattern should you predict first?',
            options: [
              'Markovnikov bromoalkane',
              'vicinal anti dibromide',
              'aldehydes/ketones from cleavage',
              'anti-Markovnikov syn alcohol'
            ],
            correctAnswer: 1,
            explanation: 'With Br2 in CCl4, the benchmark outcome is vicinal anti dibromide. Mechanistic anchor: ring opening from backside.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkenes-reactions-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | BH3·THF; H2O2, NaOH | hydroboration-oxidation | anti-Markovnikov syn alcohol | concerted hydroboration step |
      | Br2 in CCl4 | halonium-mediated addition | vicinal anti dibromide | ring opening from backside |
      | O3 then Me2S | reductive ozonolysis | aldehydes/ketones from cleavage | double bond fully fragmented |
      | HBr (no peroxides) | electrophilic addition via carbocation | Markovnikov bromoalkane | rearrangement possible |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: functional group ends on less substituted alkene carbon

      2) Term for: both new groups add to same alkene face

      3) Product pattern expected under BH3·THF; H2O2, NaOH
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['anti-Markovnikov addition', 'syn addition', 'anti-Markovnikov syn alcohol'],
        hint1: 'Blank 1 is the vocabulary term paired with: functional group ends on less substituted alkene carbon.',
        hint2: 'Blank 2 corresponds to both new groups add to same alkene face.',
        hint3: 'Use the worked example: BH3·THF; H2O2, NaOH gives anti-Markovnikov syn alcohol.',
        explanation: 'Correct entries: anti-Markovnikov addition, syn addition, and anti-Markovnikov syn alcohol. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'anti addition',
            options: ['functional group ends on less substituted alkene carbon', 'both new groups add to same alkene face', 'new groups add to opposite faces', 'OsO4 gives vicinal syn diol']
          },
          {
            label: 'Expected pattern from Br2 in CCl4',
            options: ['anti-Markovnikov syn alcohol', 'vicinal anti dibromide', 'Markovnikov bromoalkane', 'aldehydes/ketones from cleavage']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Ozonolysis products come from cleavage; no intact C=C remains.', 'Markovnikov labels regiochemistry, not stereochemistry.', 'Peroxides alter HBr behavior but not HCl/HI in standard coursework.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['new groups add to opposite faces', 'vicinal anti dibromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Ozonolysis products come from cleavage; no intact C=C remains.
      - Markovnikov labels regiochemistry, not stereochemistry.
      - Peroxides alter HBr behavior but not HCl/HI in standard coursework.
      
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
      id: 'ochem-alkenes-reactions-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on oxidation and cleavage patterns, a step uses O3 then Me2S. Which major product pattern is most defensible?',
            options: [
              'aldehydes/ketones from cleavage',
              'Markovnikov bromoalkane',
              'vicinal anti dibromide',
              'anti-Markovnikov syn alcohol'
            ],
            correctAnswer: 0,
            explanation: 'O3 then Me2S is classically associated with aldehydes/ketones from cleavage because double bond fully fragmented.'
          },
          {
            question: 'A mechanism rationale cites ozonolysis: O3 cleaves C=C into carbonyl fragments. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use ozonolysis only after final answer choice selection.',
              'Use ozonolysis to justify why the pathway favors Markovnikov bromoalkane under HBr (no peroxides).',
              'Treat ozonolysis as a naming convention unrelated to mechanism.',
              'Ignore ozonolysis and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies ozonolysis directly to mechanism and product control. In this context, HBr (no peroxides) aligns with Markovnikov bromoalkane.'
          }
        ]
      }
    }
  ]
};
