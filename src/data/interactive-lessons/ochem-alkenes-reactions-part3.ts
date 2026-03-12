export const oChemAlkenesPart3Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'ochem-alkenes-reactions-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Alkene Reactions
      
      **Part 3 of 7 — Stereochemical Outcomes of Addition**
      
      This part focuses on deciding between syn and anti additions on cyclic alkenes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Markovnikov addition**: electrophile adds to carbon with more hydrogens first
      - **anti-Markovnikov addition**: functional group ends on less substituted alkene carbon
      - **syn addition**: both new groups add to same alkene face
      - **anti addition**: new groups add to opposite faces
      
      ### Worked reaction example
      A representative transformation uses **Hg(OAc)2, H2O; NaBH4**.
      
      1. Identify the governing mechanism: **oxymercuration-demercuration**.
      2. Predict the dominant product pattern: **Markovnikov alcohol**.
      3. Justify with a mechanistic note: avoids rearrangement.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Markovnikov addition.',
            options: [
              'electrophile adds to carbon with more hydrogens first',
              'both new groups add to same alkene face',
              'new groups add to opposite faces',
              'functional group ends on less substituted alkene carbon'
            ],
            correctAnswer: 0,
            explanation: 'Markovnikov addition is defined as: electrophile adds to carbon with more hydrogens first.'
          },
          {
            question: 'A reaction in this lesson uses BH3·THF; H2O2, NaOH and proceeds by hydroboration-oxidation. What product pattern should you predict first?',
            options: [
              'anti-Markovnikov syn alcohol',
              'aldehydes/ketones from cleavage',
              'vicinal anti dibromide',
              'Markovnikov alcohol'
            ],
            correctAnswer: 0,
            explanation: 'With BH3·THF; H2O2, NaOH, the benchmark outcome is anti-Markovnikov syn alcohol. Mechanistic anchor: concerted hydroboration step.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkenes-reactions-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Hg(OAc)2, H2O; NaBH4 | oxymercuration-demercuration | Markovnikov alcohol | avoids rearrangement |
      | BH3·THF; H2O2, NaOH | hydroboration-oxidation | anti-Markovnikov syn alcohol | concerted hydroboration step |
      | Br2 in CCl4 | halonium-mediated addition | vicinal anti dibromide | ring opening from backside |
      | O3 then Me2S | reductive ozonolysis | aldehydes/ketones from cleavage | double bond fully fragmented |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkenes-reactions-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: electrophile adds to carbon with more hydrogens first
      2) Term for: functional group ends on less substituted alkene carbon
      3) Product pattern expected under Hg(OAc)2, H2O; NaBH4
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Markovnikov addition', 'anti-Markovnikov addition', 'Markovnikov alcohol'],
        hint1: 'Blank 1 is the vocabulary term paired with: electrophile adds to carbon with more hydrogens first.',
        hint2: 'Blank 2 corresponds to functional group ends on less substituted alkene carbon.',
        hint3: 'Use the worked example: Hg(OAc)2, H2O; NaBH4 gives Markovnikov alcohol.',
        explanation: 'Correct entries: Markovnikov addition, anti-Markovnikov addition, and Markovnikov alcohol. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'syn addition',
            options: ['both new groups add to same alkene face', 'electrophile adds to carbon with more hydrogens first', 'new groups add to opposite faces', 'functional group ends on less substituted alkene carbon']
          },
          {
            label: 'Expected pattern from BH3·THF; H2O2, NaOH',
            options: ['vicinal anti dibromide', 'aldehydes/ketones from cleavage', 'anti-Markovnikov syn alcohol', 'Markovnikov alcohol']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Syn/anti outcome depends on mechanism, not alkene substitution alone.', 'Markovnikov labels regiochemistry, not stereochemistry.', 'Ozonolysis products come from cleavage; no intact C=C remains.']
          }
        ],
        correctAnswers: ['both new groups add to same alkene face', 'anti-Markovnikov syn alcohol', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkenes-reactions-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Syn/anti outcome depends on mechanism, not alkene substitution alone.
      - Ozonolysis products come from cleavage; no intact C=C remains.
      - Markovnikov labels regiochemistry, not stereochemistry.
      
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
      id: 'ochem-alkenes-reactions-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on stereochemical outcomes of addition, a step uses Br2 in CCl4. Which major product pattern is most defensible?',
            options: [
              'aldehydes/ketones from cleavage',
              'vicinal anti dibromide',
              'Markovnikov alcohol',
              'anti-Markovnikov syn alcohol'
            ],
            correctAnswer: 1,
            explanation: 'Br2 in CCl4 is classically associated with vicinal anti dibromide because ring opening from backside.'
          },
          {
            question: 'A mechanism rationale cites osmium oxidation: OsO4 gives vicinal syn diol. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use osmium oxidation to justify why the pathway favors aldehydes/ketones from cleavage under O3 then Me2S.',
              'Treat osmium oxidation as a naming convention unrelated to mechanism.',
              'Ignore osmium oxidation and choose products only by molecular weight.',
              'Use osmium oxidation only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies osmium oxidation directly to mechanism and product control. In this context, O3 then Me2S aligns with aldehydes/ketones from cleavage.'
          }
        ]
      }
    }
  ]
};
