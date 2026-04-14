export const oChemRadicalsPart7Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 7 of 7 — Comprehensive Radical Review**
      
      This part focuses on solving mechanism and selectivity mixed sets. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **allylic radical**: radical adjacent to C=C with resonance support
      - **NBS bromination**: allylic/benzylic bromination under radical conditions
      - **peroxide effect**: HBr adds anti-Markovnikov via radical pathway
      - **homolysis**: bond cleavage giving one electron to each fragment
      
      ### Worked reaction example
      A representative transformation uses **Br2, hν**.
      
      1. Identify the governing mechanism: **radical halogenation**.
      2. Predict the dominant product pattern: **alkyl bromide at most substituted site**.
      3. Justify with a mechanistic note: Br· is selective.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for allylic radical.',
            options: [
              'radical adjacent to C=C with resonance support',
              'allylic/benzylic bromination under radical conditions',
              'HBr adds anti-Markovnikov via radical pathway',
              'bond cleavage giving one electron to each fragment'
            ],
            correctAnswer: 0,
            explanation: 'allylic radical is defined as: radical adjacent to C=C with resonance support.'
          },
          {
            question: 'A reaction in this lesson uses Cl2, hν and proceeds by radical chlorination. What product pattern should you predict first?',
            options: [
              'anti-Markovnikov bromoalkane',
              'mixture of chlorinated products',
              'alkyl bromide at most substituted site',
              'allylic bromide'
            ],
            correctAnswer: 1,
            explanation: 'With Cl2, hν, the benchmark outcome is mixture of chlorinated products. Mechanistic anchor: less selective than bromination.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Br2, hν | radical halogenation | alkyl bromide at most substituted site | Br· is selective |
      | Cl2, hν | radical chlorination | mixture of chlorinated products | less selective than bromination |
      | NBS, hν | allylic bromination | allylic bromide | maintains alkene position overall |
      | HBr, ROOR | radical addition to alkene | anti-Markovnikov bromoalkane | chain process with Br· |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-radical-reactions-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: radical adjacent to C=C with resonance support

      2) Term for: allylic/benzylic bromination under radical conditions

      3) Product pattern expected under Br2, hν
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['allylic radical', 'NBS bromination', 'alkyl bromide at most substituted site'],
        hint1: 'Blank 1 is the vocabulary term paired with: radical adjacent to C=C with resonance support.',
        hint2: 'Blank 2 corresponds to allylic/benzylic bromination under radical conditions.',
        hint3: 'Use the worked example: Br2, hν gives alkyl bromide at most substituted site.',
        explanation: 'Correct entries: allylic radical, NBS bromination, and alkyl bromide at most substituted site. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'peroxide effect',
            options: ['radical adjacent to C=C with resonance support', 'allylic/benzylic bromination under radical conditions', 'bond cleavage giving one electron to each fragment', 'HBr adds anti-Markovnikov via radical pathway']
          },
          {
            label: 'Expected pattern from Cl2, hν',
            options: ['anti-Markovnikov bromoalkane', 'mixture of chlorinated products', 'alkyl bromide at most substituted site', 'allylic bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Radical inhibitors can suppress chain length and conversion.', 'Peroxide effect is classically reliable for HBr, not broadly all HX.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Initiation is usually short; propagation controls product distribution.']
          }
        ],
        correctAnswers: ['HBr adds anti-Markovnikov via radical pathway', 'mixture of chlorinated products', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Peroxide effect is classically reliable for HBr, not broadly all HX.
      - Radical inhibitors can suppress chain length and conversion.
      - Initiation is usually short; propagation controls product distribution.
      
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
      id: 'ochem-radical-reactions-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on comprehensive radical review, a step uses NBS, hν. Which major product pattern is most defensible?',
            options: [
              'anti-Markovnikov bromoalkane',
              'allylic bromide',
              'mixture of chlorinated products',
              'alkyl bromide at most substituted site'
            ],
            correctAnswer: 1,
            explanation: 'NBS, hν is classically associated with allylic bromide because maintains alkene position overall.'
          },
          {
            question: 'A mechanism rationale cites radical chain: self-propagating sequence of radical steps. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use radical chain only after final answer choice selection.',
              'Use radical chain to justify why the pathway favors anti-Markovnikov bromoalkane under HBr, ROOR.',
              'Treat radical chain as a naming convention unrelated to mechanism.',
              'Ignore radical chain and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies radical chain directly to mechanism and product control. In this context, HBr, ROOR aligns with anti-Markovnikov bromoalkane.'
          }
        ]
      }
    }
  ]
};
