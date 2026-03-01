export const oChemRadicalsPart2Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 2 of 7 — Initiation, Propagation, Termination**
      
      This part focuses on identifying where radicals are generated and consumed. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **radical chain**: self-propagating sequence of radical steps
      - **initiation**: step that first generates radicals
      - **propagation**: steps that consume and regenerate radicals
      - **termination**: radical-radical combination removing chain carriers
      
      ### Worked reaction example
      A representative transformation uses **Cl2, hν**.
      
      1. Identify the governing mechanism: **radical chlorination**.
      2. Predict the dominant product pattern: **mixture of chlorinated products**.
      3. Justify with a mechanistic note: less selective than bromination.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for radical chain.',
            options: [
              'step that first generates radicals',
              'steps that consume and regenerate radicals',
              'radical-radical combination removing chain carriers',
              'self-propagating sequence of radical steps'
            ],
            correctAnswer: 3,
            explanation: 'radical chain is defined as: self-propagating sequence of radical steps.'
          },
          {
            question: 'A reaction in this lesson uses NBS, hν and proceeds by allylic bromination. What product pattern should you predict first?',
            options: [
              'mixture of chlorinated products',
              'allylic bromide',
              'chain starts under heat',
              'anti-Markovnikov bromoalkane'
            ],
            correctAnswer: 1,
            explanation: 'With NBS, hν, the benchmark outcome is allylic bromide. Mechanistic anchor: maintains alkene position overall.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Cl2, hν | radical chlorination | mixture of chlorinated products | less selective than bromination |
      | NBS, hν | allylic bromination | allylic bromide | maintains alkene position overall |
      | HBr, ROOR | radical addition to alkene | anti-Markovnikov bromoalkane | chain process with Br· |
      | AIBN initiator | radical generation | chain starts under heat | common azo initiator |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-radical-reactions-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: self-propagating sequence of radical steps
      2) Term for: step that first generates radicals
      3) Product pattern expected under Cl2, hν
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['radical chain', 'initiation', 'mixture of chlorinated products'],
        hint1: 'Blank 1 is the vocabulary term paired with: self-propagating sequence of radical steps.',
        hint2: 'Blank 2 corresponds to step that first generates radicals.',
        hint3: 'Use the worked example: Cl2, hν gives mixture of chlorinated products.',
        explanation: 'Correct entries: radical chain, initiation, and mixture of chlorinated products. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'propagation',
            options: ['steps that consume and regenerate radicals', 'radical-radical combination removing chain carriers', 'self-propagating sequence of radical steps', 'step that first generates radicals']
          },
          {
            label: 'Expected pattern from NBS, hν',
            options: ['allylic bromide', 'anti-Markovnikov bromoalkane', 'mixture of chlorinated products', 'chain starts under heat']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Radical inhibitors can suppress chain length and conversion.', 'Bromination is slower but more selective than chlorination.', 'Peroxide effect is classically reliable for HBr, not broadly all HX.']
          }
        ],
        correctAnswers: ['steps that consume and regenerate radicals', 'allylic bromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p2-s6-strategy',
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
      id: 'ochem-radical-reactions-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on initiation, propagation, termination, a step uses HBr, ROOR. Which major product pattern is most defensible?',
            options: [
              'mixture of chlorinated products',
              'allylic bromide',
              'chain starts under heat',
              'anti-Markovnikov bromoalkane'
            ],
            correctAnswer: 3,
            explanation: 'HBr, ROOR is classically associated with anti-Markovnikov bromoalkane because chain process with Br·.'
          },
          {
            question: 'A mechanism rationale cites radical stability: tertiary and resonance-stabilized radicals are favored. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use radical stability to justify why the pathway favors chain starts under heat under AIBN initiator.',
              'Treat radical stability as a naming convention unrelated to mechanism.',
              'Ignore radical stability and choose products only by molecular weight.',
              'Use radical stability only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies radical stability directly to mechanism and product control. In this context, AIBN initiator aligns with chain starts under heat.'
          }
        ]
      }
    }
  ]
};
