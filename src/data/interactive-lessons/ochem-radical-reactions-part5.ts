export const oChemRadicalsPart5Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 5 of 7 — Radical Additions to Alkenes**
      
      This part focuses on applying peroxide-initiated additions to alkenes. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **termination**: radical-radical combination removing chain carriers
      - **radical stability**: tertiary and resonance-stabilized radicals are favored
      - **allylic radical**: radical adjacent to C=C with resonance support
      - **NBS bromination**: allylic/benzylic bromination under radical conditions
      
      ### Worked reaction example
      A representative transformation uses **AIBN initiator**.
      
      1. Identify the governing mechanism: **radical generation**.
      2. Predict the dominant product pattern: **chain starts under heat**.
      3. Justify with a mechanistic note: common azo initiator.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for termination.',
            options: [
              'radical-radical combination removing chain carriers',
              'tertiary and resonance-stabilized radicals are favored',
              'radical adjacent to C=C with resonance support',
              'allylic/benzylic bromination under radical conditions'
            ],
            correctAnswer: 0,
            explanation: 'termination is defined as: radical-radical combination removing chain carriers.'
          },
          {
            question: 'A reaction in this lesson uses thiol-ene conditions and proceeds by radical addition. What product pattern should you predict first?',
            options: [
              'chain starts under heat',
              'anti-Markovnikov thioether',
              'mixture of chlorinated products',
              'alkyl bromide at most substituted site'
            ],
            correctAnswer: 1,
            explanation: 'With thiol-ene conditions, the benchmark outcome is anti-Markovnikov thioether. Mechanistic anchor: useful click-like transformation.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | AIBN initiator | radical generation | chain starts under heat | common azo initiator |
      | thiol-ene conditions | radical addition | anti-Markovnikov thioether | useful click-like transformation |
      | Br2, hν | radical halogenation | alkyl bromide at most substituted site | Br· is selective |
      | Cl2, hν | radical chlorination | mixture of chlorinated products | less selective than bromination |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-radical-reactions-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: radical-radical combination removing chain carriers
      2) Term for: tertiary and resonance-stabilized radicals are favored
      3) Product pattern expected under AIBN initiator
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['termination', 'radical stability', 'chain starts under heat'],
        hint1: 'Blank 1 is the vocabulary term paired with: radical-radical combination removing chain carriers.',
        hint2: 'Blank 2 corresponds to tertiary and resonance-stabilized radicals are favored.',
        hint3: 'Use the worked example: AIBN initiator gives chain starts under heat.',
        explanation: 'Correct entries: termination, radical stability, and chain starts under heat. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'allylic radical',
            options: ['radical adjacent to C=C with resonance support', 'tertiary and resonance-stabilized radicals are favored', 'allylic/benzylic bromination under radical conditions', 'radical-radical combination removing chain carriers']
          },
          {
            label: 'Expected pattern from thiol-ene conditions',
            options: ['chain starts under heat', 'anti-Markovnikov thioether', 'alkyl bromide at most substituted site', 'mixture of chlorinated products']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Bromination is slower but more selective than chlorination.', 'Initiation is usually short; propagation controls product distribution.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Peroxide effect is classically reliable for HBr, not broadly all HX.']
          }
        ],
        correctAnswers: ['radical adjacent to C=C with resonance support', 'anti-Markovnikov thioether', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p5-s6-strategy',
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
      id: 'ochem-radical-reactions-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on radical additions to alkenes, a step uses Br2, hν. Which major product pattern is most defensible?',
            options: [
              'mixture of chlorinated products',
              'chain starts under heat',
              'alkyl bromide at most substituted site',
              'anti-Markovnikov thioether'
            ],
            correctAnswer: 2,
            explanation: 'Br2, hν is classically associated with alkyl bromide at most substituted site because Br· is selective.'
          },
          {
            question: 'A mechanism rationale cites peroxide effect: HBr adds anti-Markovnikov via radical pathway. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat peroxide effect as a naming convention unrelated to mechanism.',
              'Use peroxide effect to justify why the pathway favors mixture of chlorinated products under Cl2, hν.',
              'Use peroxide effect only after final answer choice selection.',
              'Ignore peroxide effect and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies peroxide effect directly to mechanism and product control. In this context, Cl2, hν aligns with mixture of chlorinated products.'
          }
        ]
      }
    }
  ]
};
