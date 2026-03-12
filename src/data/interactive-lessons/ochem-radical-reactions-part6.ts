export const oChemRadicalsPart6Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 6 of 7 — Synthesis with Radical Steps**
      
      This part focuses on combining ionic and radical steps in synthesis planning. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **radical stability**: tertiary and resonance-stabilized radicals are favored
      - **allylic radical**: radical adjacent to C=C with resonance support
      - **NBS bromination**: allylic/benzylic bromination under radical conditions
      - **peroxide effect**: HBr adds anti-Markovnikov via radical pathway
      
      ### Worked reaction example
      A representative transformation uses **thiol-ene conditions**.
      
      1. Identify the governing mechanism: **radical addition**.
      2. Predict the dominant product pattern: **anti-Markovnikov thioether**.
      3. Justify with a mechanistic note: useful click-like transformation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for radical stability.',
            options: [
              'tertiary and resonance-stabilized radicals are favored',
              'allylic/benzylic bromination under radical conditions',
              'radical adjacent to C=C with resonance support',
              'HBr adds anti-Markovnikov via radical pathway'
            ],
            correctAnswer: 0,
            explanation: 'radical stability is defined as: tertiary and resonance-stabilized radicals are favored.'
          },
          {
            question: 'A reaction in this lesson uses Br2, hν and proceeds by radical halogenation. What product pattern should you predict first?',
            options: [
              'allylic bromide',
              'alkyl bromide at most substituted site',
              'anti-Markovnikov thioether',
              'mixture of chlorinated products'
            ],
            correctAnswer: 1,
            explanation: 'With Br2, hν, the benchmark outcome is alkyl bromide at most substituted site. Mechanistic anchor: Br· is selective.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | thiol-ene conditions | radical addition | anti-Markovnikov thioether | useful click-like transformation |
      | Br2, hν | radical halogenation | alkyl bromide at most substituted site | Br· is selective |
      | Cl2, hν | radical chlorination | mixture of chlorinated products | less selective than bromination |
      | NBS, hν | allylic bromination | allylic bromide | maintains alkene position overall |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-radical-reactions-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: tertiary and resonance-stabilized radicals are favored
      2) Term for: radical adjacent to C=C with resonance support
      3) Product pattern expected under thiol-ene conditions
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['radical stability', 'allylic radical', 'anti-Markovnikov thioether'],
        hint1: 'Blank 1 is the vocabulary term paired with: tertiary and resonance-stabilized radicals are favored.',
        hint2: 'Blank 2 corresponds to radical adjacent to C=C with resonance support.',
        hint3: 'Use the worked example: thiol-ene conditions gives anti-Markovnikov thioether.',
        explanation: 'Correct entries: radical stability, allylic radical, and anti-Markovnikov thioether. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NBS bromination',
            options: ['radical adjacent to C=C with resonance support', 'tertiary and resonance-stabilized radicals are favored', 'HBr adds anti-Markovnikov via radical pathway', 'allylic/benzylic bromination under radical conditions']
          },
          {
            label: 'Expected pattern from Br2, hν',
            options: ['mixture of chlorinated products', 'alkyl bromide at most substituted site', 'anti-Markovnikov thioether', 'allylic bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Bromination is slower but more selective than chlorination.', 'Peroxide effect is classically reliable for HBr, not broadly all HX.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Radical inhibitors can suppress chain length and conversion.']
          }
        ],
        correctAnswers: ['allylic/benzylic bromination under radical conditions', 'alkyl bromide at most substituted site', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Bromination is slower but more selective than chlorination.
      - Peroxide effect is classically reliable for HBr, not broadly all HX.
      - Radical inhibitors can suppress chain length and conversion.
      
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
      id: 'ochem-radical-reactions-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis with radical steps, a step uses Cl2, hν. Which major product pattern is most defensible?',
            options: [
              'alkyl bromide at most substituted site',
              'anti-Markovnikov thioether',
              'allylic bromide',
              'mixture of chlorinated products'
            ],
            correctAnswer: 3,
            explanation: 'Cl2, hν is classically associated with mixture of chlorinated products because less selective than bromination.'
          },
          {
            question: 'A mechanism rationale cites homolysis: bond cleavage giving one electron to each fragment. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use homolysis to justify why the pathway favors allylic bromide under NBS, hν.',
              'Ignore homolysis and choose products only by molecular weight.',
              'Treat homolysis as a naming convention unrelated to mechanism.',
              'Use homolysis only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies homolysis directly to mechanism and product control. In this context, NBS, hν aligns with allylic bromide.'
          }
        ]
      }
    }
  ]
};
