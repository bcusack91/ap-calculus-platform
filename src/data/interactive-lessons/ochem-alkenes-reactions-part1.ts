export const oChemAlkenesPart1Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'ochem-alkenes-reactions-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Alkene Reactions
      
      **Part 1 of 7 — Electrophilic Addition Foundations**
      
      This part focuses on predicting products from protonation-initiated alkene additions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **pi bond nucleophile**: alkene electrons attack electrophiles in first step
      - **carbocation intermediate**: planar cation that enables rearrangement risk
      - **Markovnikov addition**: electrophile adds to carbon with more hydrogens first
      - **anti-Markovnikov addition**: functional group ends on less substituted alkene carbon
      
      ### Worked reaction example
      A representative transformation uses **HBr (no peroxides)**.
      
      1. Identify the governing mechanism: **electrophilic addition via carbocation**.
      2. Predict the dominant product pattern: **Markovnikov bromoalkane**.
      3. Justify with a mechanistic note: rearrangement possible.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for pi bond nucleophile.',
            options: [
              'planar cation that enables rearrangement risk',
              'alkene electrons attack electrophiles in first step',
              'functional group ends on less substituted alkene carbon',
              'electrophile adds to carbon with more hydrogens first'
            ],
            correctAnswer: 1,
            explanation: 'pi bond nucleophile is defined as: alkene electrons attack electrophiles in first step.'
          },
          {
            question: 'A reaction in this lesson uses HBr, ROOR and proceeds by radical chain addition. What product pattern should you predict first?',
            options: [
              'anti-Markovnikov bromoalkane',
              'anti-Markovnikov syn alcohol',
              'Markovnikov alcohol',
              'Markovnikov bromoalkane'
            ],
            correctAnswer: 0,
            explanation: 'With HBr, ROOR, the benchmark outcome is anti-Markovnikov bromoalkane. Mechanistic anchor: no carbocation rearrangement.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkenes-reactions-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HBr (no peroxides) | electrophilic addition via carbocation | Markovnikov bromoalkane | rearrangement possible |
      | HBr, ROOR | radical chain addition | anti-Markovnikov bromoalkane | no carbocation rearrangement |
      | Hg(OAc)2, H2O; NaBH4 | oxymercuration-demercuration | Markovnikov alcohol | avoids rearrangement |
      | BH3·THF; H2O2, NaOH | hydroboration-oxidation | anti-Markovnikov syn alcohol | concerted hydroboration step |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: alkene electrons attack electrophiles in first step
      2) Term for: planar cation that enables rearrangement risk
      3) Product pattern expected under HBr (no peroxides)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['pi bond nucleophile', 'carbocation intermediate', 'Markovnikov bromoalkane'],
        hint1: 'Blank 1 is the vocabulary term paired with: alkene electrons attack electrophiles in first step.',
        hint2: 'Blank 2 corresponds to planar cation that enables rearrangement risk.',
        hint3: 'Use the worked example: HBr (no peroxides) gives Markovnikov bromoalkane.',
        explanation: 'Correct entries: pi bond nucleophile, carbocation intermediate, and Markovnikov bromoalkane. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Markovnikov addition',
            options: ['electrophile adds to carbon with more hydrogens first', 'functional group ends on less substituted alkene carbon', 'alkene electrons attack electrophiles in first step', 'planar cation that enables rearrangement risk']
          },
          {
            label: 'Expected pattern from HBr, ROOR',
            options: ['anti-Markovnikov bromoalkane', 'Markovnikov alcohol', 'Markovnikov bromoalkane', 'anti-Markovnikov syn alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Syn/anti outcome depends on mechanism, not alkene substitution alone.', 'Peroxides alter HBr behavior but not HCl/HI in standard coursework.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Markovnikov labels regiochemistry, not stereochemistry.']
          }
        ],
        correctAnswers: ['electrophile adds to carbon with more hydrogens first', 'anti-Markovnikov bromoalkane', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p1-s6-strategy',
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
      id: 'ochem-alkenes-reactions-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on electrophilic addition foundations, a step uses Hg(OAc)2, H2O; NaBH4. Which major product pattern is most defensible?',
            options: [
              'anti-Markovnikov bromoalkane',
              'Markovnikov alcohol',
              'Markovnikov bromoalkane',
              'anti-Markovnikov syn alcohol'
            ],
            correctAnswer: 1,
            explanation: 'Hg(OAc)2, H2O; NaBH4 is classically associated with Markovnikov alcohol because avoids rearrangement.'
          },
          {
            question: 'A mechanism rationale cites syn addition: both new groups add to same alkene face. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore syn addition and choose products only by molecular weight.',
              'Treat syn addition as a naming convention unrelated to mechanism.',
              'Use syn addition to justify why the pathway favors anti-Markovnikov syn alcohol under BH3·THF; H2O2, NaOH.',
              'Use syn addition only after final answer choice selection.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies syn addition directly to mechanism and product control. In this context, BH3·THF; H2O2, NaOH aligns with anti-Markovnikov syn alcohol.'
          }
        ]
      }
    }
  ]
};
