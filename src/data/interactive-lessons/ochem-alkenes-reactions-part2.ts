export const oChemAlkenesPart2Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'ochem-alkenes-reactions-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Alkene Reactions
      
      **Part 2 of 7 — Regioselectivity: Markovnikov vs Anti-Markovnikov**
      
      This part focuses on choosing reagent sets to control where new bonds form. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **carbocation intermediate**: planar cation that enables rearrangement risk
      - **Markovnikov addition**: electrophile adds to carbon with more hydrogens first
      - **anti-Markovnikov addition**: functional group ends on less substituted alkene carbon
      - **syn addition**: both new groups add to same alkene face
      
      ### Worked reaction example
      A representative transformation uses **HBr, ROOR**.
      
      1. Identify the governing mechanism: **radical chain addition**.
      2. Predict the dominant product pattern: **anti-Markovnikov bromoalkane**.
      3. Justify with a mechanistic note: no carbocation rearrangement.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for carbocation intermediate.',
            options: [
              'functional group ends on less substituted alkene carbon',
              'electrophile adds to carbon with more hydrogens first',
              'both new groups add to same alkene face',
              'planar cation that enables rearrangement risk'
            ],
            correctAnswer: 3,
            explanation: 'carbocation intermediate is defined as: planar cation that enables rearrangement risk.'
          },
          {
            question: 'A reaction in this lesson uses Hg(OAc)2, H2O; NaBH4 and proceeds by oxymercuration-demercuration. What product pattern should you predict first?',
            options: [
              'Markovnikov alcohol',
              'anti-Markovnikov syn alcohol',
              'vicinal anti dibromide',
              'anti-Markovnikov bromoalkane'
            ],
            correctAnswer: 0,
            explanation: 'With Hg(OAc)2, H2O; NaBH4, the benchmark outcome is Markovnikov alcohol. Mechanistic anchor: avoids rearrangement.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkenes-reactions-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HBr, ROOR | radical chain addition | anti-Markovnikov bromoalkane | no carbocation rearrangement |
      | Hg(OAc)2, H2O; NaBH4 | oxymercuration-demercuration | Markovnikov alcohol | avoids rearrangement |
      | BH3·THF; H2O2, NaOH | hydroboration-oxidation | anti-Markovnikov syn alcohol | concerted hydroboration step |
      | Br2 in CCl4 | halonium-mediated addition | vicinal anti dibromide | ring opening from backside |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: planar cation that enables rearrangement risk
      2) Term for: electrophile adds to carbon with more hydrogens first
      3) Product pattern expected under HBr, ROOR
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['carbocation intermediate', 'Markovnikov addition', 'anti-Markovnikov bromoalkane'],
        hint1: 'Blank 1 is the vocabulary term paired with: planar cation that enables rearrangement risk.',
        hint2: 'Blank 2 corresponds to electrophile adds to carbon with more hydrogens first.',
        hint3: 'Use the worked example: HBr, ROOR gives anti-Markovnikov bromoalkane.',
        explanation: 'Correct entries: carbocation intermediate, Markovnikov addition, and anti-Markovnikov bromoalkane. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'anti-Markovnikov addition',
            options: ['both new groups add to same alkene face', 'electrophile adds to carbon with more hydrogens first', 'planar cation that enables rearrangement risk', 'functional group ends on less substituted alkene carbon']
          },
          {
            label: 'Expected pattern from Hg(OAc)2, H2O; NaBH4',
            options: ['Markovnikov alcohol', 'anti-Markovnikov syn alcohol', 'anti-Markovnikov bromoalkane', 'vicinal anti dibromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Syn/anti outcome depends on mechanism, not alkene substitution alone.', 'Peroxides alter HBr behavior but not HCl/HI in standard coursework.', 'Ozonolysis products come from cleavage; no intact C=C remains.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['functional group ends on less substituted alkene carbon', 'Markovnikov alcohol', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p2-s6-strategy',
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
      id: 'ochem-alkenes-reactions-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on regioselectivity: markovnikov vs anti-markovnikov, a step uses BH3·THF; H2O2, NaOH. Which major product pattern is most defensible?',
            options: [
              'Markovnikov alcohol',
              'anti-Markovnikov syn alcohol',
              'anti-Markovnikov bromoalkane',
              'vicinal anti dibromide'
            ],
            correctAnswer: 1,
            explanation: 'BH3·THF; H2O2, NaOH is classically associated with anti-Markovnikov syn alcohol because concerted hydroboration step.'
          },
          {
            question: 'A mechanism rationale cites anti addition: new groups add to opposite faces. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat anti addition as a naming convention unrelated to mechanism.',
              'Ignore anti addition and choose products only by molecular weight.',
              'Use anti addition to justify why the pathway favors vicinal anti dibromide under Br2 in CCl4.',
              'Use anti addition only after final answer choice selection.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies anti addition directly to mechanism and product control. In this context, Br2 in CCl4 aligns with vicinal anti dibromide.'
          }
        ]
      }
    }
  ]
};
