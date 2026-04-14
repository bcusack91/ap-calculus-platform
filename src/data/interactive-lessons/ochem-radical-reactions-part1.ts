export const oChemRadicalsPart1Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 1 of 7 — Radical Mechanism Foundations**
      
      This part focuses on tracking chain reactions under thermal or photochemical conditions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **homolysis**: bond cleavage giving one electron to each fragment
      - **radical chain**: self-propagating sequence of radical steps
      - **initiation**: step that first generates radicals
      - **propagation**: steps that consume and regenerate radicals
      
      ### Worked reaction example
      A representative transformation uses **Br2, hν**.
      
      1. Identify the governing mechanism: **radical halogenation**.
      2. Predict the dominant product pattern: **alkyl bromide at most substituted site**.
      3. Justify with a mechanistic note: Br· is selective.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for homolysis.',
            options: [
              'self-propagating sequence of radical steps',
              'bond cleavage giving one electron to each fragment',
              'step that first generates radicals',
              'steps that consume and regenerate radicals'
            ],
            correctAnswer: 1,
            explanation: 'homolysis is defined as: bond cleavage giving one electron to each fragment.'
          },
          {
            question: 'A reaction in this lesson uses Cl2, hν and proceeds by radical chlorination. What product pattern should you predict first?',
            options: [
              'alkyl bromide at most substituted site',
              'mixture of chlorinated products',
              'allylic bromide',
              'anti-Markovnikov bromoalkane'
            ],
            correctAnswer: 1,
            explanation: 'With Cl2, hν, the benchmark outcome is mixture of chlorinated products. Mechanistic anchor: less selective than bromination.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p1-s3-deep-dive',
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
      id: 'ochem-radical-reactions-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: bond cleavage giving one electron to each fragment

      2) Term for: self-propagating sequence of radical steps

      3) Product pattern expected under Br2, hν
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['homolysis', 'radical chain', 'alkyl bromide at most substituted site'],
        hint1: 'Blank 1 is the vocabulary term paired with: bond cleavage giving one electron to each fragment.',
        hint2: 'Blank 2 corresponds to self-propagating sequence of radical steps.',
        hint3: 'Use the worked example: Br2, hν gives alkyl bromide at most substituted site.',
        explanation: 'Correct entries: homolysis, radical chain, and alkyl bromide at most substituted site. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'initiation',
            options: ['bond cleavage giving one electron to each fragment', 'steps that consume and regenerate radicals', 'self-propagating sequence of radical steps', 'step that first generates radicals']
          },
          {
            label: 'Expected pattern from Cl2, hν',
            options: ['allylic bromide', 'mixture of chlorinated products', 'anti-Markovnikov bromoalkane', 'alkyl bromide at most substituted site']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Peroxide effect is classically reliable for HBr, not broadly all HX.', 'Bromination is slower but more selective than chlorination.', 'Initiation is usually short; propagation controls product distribution.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['step that first generates radicals', 'mixture of chlorinated products', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Initiation is usually short; propagation controls product distribution.
      - Bromination is slower but more selective than chlorination.
      - Peroxide effect is classically reliable for HBr, not broadly all HX.
      
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
      id: 'ochem-radical-reactions-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on radical mechanism foundations, a step uses NBS, hν. Which major product pattern is most defensible?',
            options: [
              'allylic bromide',
              'alkyl bromide at most substituted site',
              'anti-Markovnikov bromoalkane',
              'mixture of chlorinated products'
            ],
            correctAnswer: 0,
            explanation: 'NBS, hν is classically associated with allylic bromide because maintains alkene position overall.'
          },
          {
            question: 'A mechanism rationale cites termination: radical-radical combination removing chain carriers. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat termination as a naming convention unrelated to mechanism.',
              'Ignore termination and choose products only by molecular weight.',
              'Use termination to justify why the pathway favors anti-Markovnikov bromoalkane under HBr, ROOR.',
              'Use termination only after final answer choice selection.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies termination directly to mechanism and product control. In this context, HBr, ROOR aligns with anti-Markovnikov bromoalkane.'
          }
        ]
      }
    }
  ]
};
