export const oChemAlkenesPart6Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'ochem-alkenes-reactions-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Alkene Reactions
      
      **Part 6 of 7 — Synthesis Sequencing with Alkenes**
      
      This part focuses on building two-step synthesis from an alkene intermediate. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **anti addition**: new groups add to opposite faces
      - **osmium oxidation**: OsO4 gives vicinal syn diol
      - **ozonolysis**: O3 cleaves C=C into carbonyl fragments
      - **rearrangement**: hydride or alkyl shift to more stable carbocation
      
      ### Worked reaction example
      A representative transformation uses **O3 then Me2S**.
      
      1. Identify the governing mechanism: **reductive ozonolysis**.
      2. Predict the dominant product pattern: **aldehydes/ketones from cleavage**.
      3. Justify with a mechanistic note: double bond fully fragmented.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for anti addition.',
            options: [
              'hydride or alkyl shift to more stable carbocation',
              'O3 cleaves C=C into carbonyl fragments',
              'OsO4 gives vicinal syn diol',
              'new groups add to opposite faces'
            ],
            correctAnswer: 3,
            explanation: 'anti addition is defined as: new groups add to opposite faces.'
          },
          {
            question: 'A reaction in this lesson uses HBr (no peroxides) and proceeds by electrophilic addition via carbocation. What product pattern should you predict first?',
            options: [
              'anti-Markovnikov bromoalkane',
              'Markovnikov alcohol',
              'Markovnikov bromoalkane',
              'aldehydes/ketones from cleavage'
            ],
            correctAnswer: 2,
            explanation: 'With HBr (no peroxides), the benchmark outcome is Markovnikov bromoalkane. Mechanistic anchor: rearrangement possible.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkenes-reactions-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | O3 then Me2S | reductive ozonolysis | aldehydes/ketones from cleavage | double bond fully fragmented |
      | HBr (no peroxides) | electrophilic addition via carbocation | Markovnikov bromoalkane | rearrangement possible |
      | HBr, ROOR | radical chain addition | anti-Markovnikov bromoalkane | no carbocation rearrangement |
      | Hg(OAc)2, H2O; NaBH4 | oxymercuration-demercuration | Markovnikov alcohol | avoids rearrangement |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: new groups add to opposite faces

      2) Term for: OsO4 gives vicinal syn diol

      3) Product pattern expected under O3 then Me2S
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['anti addition', 'osmium oxidation', 'aldehydes/ketones from cleavage'],
        hint1: 'Blank 1 is the vocabulary term paired with: new groups add to opposite faces.',
        hint2: 'Blank 2 corresponds to OsO4 gives vicinal syn diol.',
        hint3: 'Use the worked example: O3 then Me2S gives aldehydes/ketones from cleavage.',
        explanation: 'Correct entries: anti addition, osmium oxidation, and aldehydes/ketones from cleavage. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ozonolysis',
            options: ['new groups add to opposite faces', 'OsO4 gives vicinal syn diol', 'O3 cleaves C=C into carbonyl fragments', 'hydride or alkyl shift to more stable carbocation']
          },
          {
            label: 'Expected pattern from HBr (no peroxides)',
            options: ['aldehydes/ketones from cleavage', 'anti-Markovnikov bromoalkane', 'Markovnikov bromoalkane', 'Markovnikov alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Peroxides alter HBr behavior but not HCl/HI in standard coursework.', 'Syn/anti outcome depends on mechanism, not alkene substitution alone.', 'Ozonolysis products come from cleavage; no intact C=C remains.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['O3 cleaves C=C into carbonyl fragments', 'Markovnikov bromoalkane', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Peroxides alter HBr behavior but not HCl/HI in standard coursework.
      - Syn/anti outcome depends on mechanism, not alkene substitution alone.
      - Ozonolysis products come from cleavage; no intact C=C remains.
      
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
      id: 'ochem-alkenes-reactions-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis sequencing with alkenes, a step uses HBr, ROOR. Which major product pattern is most defensible?',
            options: [
              'anti-Markovnikov bromoalkane',
              'Markovnikov alcohol',
              'aldehydes/ketones from cleavage',
              'Markovnikov bromoalkane'
            ],
            correctAnswer: 0,
            explanation: 'HBr, ROOR is classically associated with anti-Markovnikov bromoalkane because no carbocation rearrangement.'
          },
          {
            question: 'A mechanism rationale cites pi bond nucleophile: alkene electrons attack electrophiles in first step. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use pi bond nucleophile to justify why the pathway favors Markovnikov alcohol under Hg(OAc)2, H2O; NaBH4.',
              'Ignore pi bond nucleophile and choose products only by molecular weight.',
              'Treat pi bond nucleophile as a naming convention unrelated to mechanism.',
              'Use pi bond nucleophile only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies pi bond nucleophile directly to mechanism and product control. In this context, Hg(OAc)2, H2O; NaBH4 aligns with Markovnikov alcohol.'
          }
        ]
      }
    }
  ]
};
