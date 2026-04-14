export const oChemRadicalsPart4Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 4 of 7 — Allylic and Benzylic Radical Chemistry**
      
      This part focuses on using resonance-stabilized radical intermediates. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **propagation**: steps that consume and regenerate radicals
      - **termination**: radical-radical combination removing chain carriers
      - **radical stability**: tertiary and resonance-stabilized radicals are favored
      - **allylic radical**: radical adjacent to C=C with resonance support
      
      ### Worked reaction example
      A representative transformation uses **HBr, ROOR**.
      
      1. Identify the governing mechanism: **radical addition to alkene**.
      2. Predict the dominant product pattern: **anti-Markovnikov bromoalkane**.
      3. Justify with a mechanistic note: chain process with Br·.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for propagation.',
            options: [
              'radical adjacent to C=C with resonance support',
              'radical-radical combination removing chain carriers',
              'steps that consume and regenerate radicals',
              'tertiary and resonance-stabilized radicals are favored'
            ],
            correctAnswer: 2,
            explanation: 'propagation is defined as: steps that consume and regenerate radicals.'
          },
          {
            question: 'A reaction in this lesson uses AIBN initiator and proceeds by radical generation. What product pattern should you predict first?',
            options: [
              'anti-Markovnikov bromoalkane',
              'anti-Markovnikov thioether',
              'chain starts under heat',
              'alkyl bromide at most substituted site'
            ],
            correctAnswer: 2,
            explanation: 'With AIBN initiator, the benchmark outcome is chain starts under heat. Mechanistic anchor: common azo initiator.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HBr, ROOR | radical addition to alkene | anti-Markovnikov bromoalkane | chain process with Br· |
      | AIBN initiator | radical generation | chain starts under heat | common azo initiator |
      | thiol-ene conditions | radical addition | anti-Markovnikov thioether | useful click-like transformation |
      | Br2, hν | radical halogenation | alkyl bromide at most substituted site | Br· is selective |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-radical-reactions-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: steps that consume and regenerate radicals

      2) Term for: radical-radical combination removing chain carriers

      3) Product pattern expected under HBr, ROOR
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['propagation', 'termination', 'anti-Markovnikov bromoalkane'],
        hint1: 'Blank 1 is the vocabulary term paired with: steps that consume and regenerate radicals.',
        hint2: 'Blank 2 corresponds to radical-radical combination removing chain carriers.',
        hint3: 'Use the worked example: HBr, ROOR gives anti-Markovnikov bromoalkane.',
        explanation: 'Correct entries: propagation, termination, and anti-Markovnikov bromoalkane. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'radical stability',
            options: ['tertiary and resonance-stabilized radicals are favored', 'radical-radical combination removing chain carriers', 'radical adjacent to C=C with resonance support', 'steps that consume and regenerate radicals']
          },
          {
            label: 'Expected pattern from AIBN initiator',
            options: ['alkyl bromide at most substituted site', 'anti-Markovnikov bromoalkane', 'chain starts under heat', 'anti-Markovnikov thioether']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Initiation is usually short; propagation controls product distribution.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Bromination is slower but more selective than chlorination.', 'Radical inhibitors can suppress chain length and conversion.']
          }
        ],
        correctAnswers: ['tertiary and resonance-stabilized radicals are favored', 'chain starts under heat', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Radical inhibitors can suppress chain length and conversion.
      - Initiation is usually short; propagation controls product distribution.
      - Bromination is slower but more selective than chlorination.
      
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
      id: 'ochem-radical-reactions-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on allylic and benzylic radical chemistry, a step uses thiol-ene conditions. Which major product pattern is most defensible?',
            options: [
              'chain starts under heat',
              'anti-Markovnikov thioether',
              'anti-Markovnikov bromoalkane',
              'alkyl bromide at most substituted site'
            ],
            correctAnswer: 1,
            explanation: 'thiol-ene conditions is classically associated with anti-Markovnikov thioether because useful click-like transformation.'
          },
          {
            question: 'A mechanism rationale cites NBS bromination: allylic/benzylic bromination under radical conditions. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use NBS bromination only after final answer choice selection.',
              'Ignore NBS bromination and choose products only by molecular weight.',
              'Treat NBS bromination as a naming convention unrelated to mechanism.',
              'Use NBS bromination to justify why the pathway favors alkyl bromide at most substituted site under Br2, hν.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies NBS bromination directly to mechanism and product control. In this context, Br2, hν aligns with alkyl bromide at most substituted site.'
          }
        ]
      }
    }
  ]
};
