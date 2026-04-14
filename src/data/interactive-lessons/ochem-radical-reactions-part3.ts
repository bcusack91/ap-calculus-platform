export const oChemRadicalsPart3Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'ochem-radical-reactions-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Radical Reactions
      
      **Part 3 of 7 — Halogenation Selectivity**
      
      This part focuses on predicting regioselectivity from radical stability. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **initiation**: step that first generates radicals
      - **propagation**: steps that consume and regenerate radicals
      - **termination**: radical-radical combination removing chain carriers
      - **radical stability**: tertiary and resonance-stabilized radicals are favored
      
      ### Worked reaction example
      A representative transformation uses **NBS, hν**.
      
      1. Identify the governing mechanism: **allylic bromination**.
      2. Predict the dominant product pattern: **allylic bromide**.
      3. Justify with a mechanistic note: maintains alkene position overall.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-radical-reactions-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for initiation.',
            options: [
              'step that first generates radicals',
              'tertiary and resonance-stabilized radicals are favored',
              'steps that consume and regenerate radicals',
              'radical-radical combination removing chain carriers'
            ],
            correctAnswer: 0,
            explanation: 'initiation is defined as: step that first generates radicals.'
          },
          {
            question: 'A reaction in this lesson uses HBr, ROOR and proceeds by radical addition to alkene. What product pattern should you predict first?',
            options: [
              'anti-Markovnikov bromoalkane',
              'chain starts under heat',
              'allylic bromide',
              'anti-Markovnikov thioether'
            ],
            correctAnswer: 0,
            explanation: 'With HBr, ROOR, the benchmark outcome is anti-Markovnikov bromoalkane. Mechanistic anchor: chain process with Br·.'
          }
        ]
      }
    },
    {
      id: 'ochem-radical-reactions-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NBS, hν | allylic bromination | allylic bromide | maintains alkene position overall |
      | HBr, ROOR | radical addition to alkene | anti-Markovnikov bromoalkane | chain process with Br· |
      | AIBN initiator | radical generation | chain starts under heat | common azo initiator |
      | thiol-ene conditions | radical addition | anti-Markovnikov thioether | useful click-like transformation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-radical-reactions-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: step that first generates radicals

      2) Term for: steps that consume and regenerate radicals

      3) Product pattern expected under NBS, hν
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['initiation', 'propagation', 'allylic bromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: step that first generates radicals.',
        hint2: 'Blank 2 corresponds to steps that consume and regenerate radicals.',
        hint3: 'Use the worked example: NBS, hν gives allylic bromide.',
        explanation: 'Correct entries: initiation, propagation, and allylic bromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-radical-reactions-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'termination',
            options: ['tertiary and resonance-stabilized radicals are favored', 'radical-radical combination removing chain carriers', 'steps that consume and regenerate radicals', 'step that first generates radicals']
          },
          {
            label: 'Expected pattern from HBr, ROOR',
            options: ['anti-Markovnikov bromoalkane', 'anti-Markovnikov thioether', 'chain starts under heat', 'allylic bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Peroxide effect is classically reliable for HBr, not broadly all HX.', 'Radical inhibitors can suppress chain length and conversion.', 'Initiation is usually short; propagation controls product distribution.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['radical-radical combination removing chain carriers', 'anti-Markovnikov bromoalkane', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-radical-reactions-p3-s6-strategy',
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
      id: 'ochem-radical-reactions-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on halogenation selectivity, a step uses AIBN initiator. Which major product pattern is most defensible?',
            options: [
              'anti-Markovnikov thioether',
              'anti-Markovnikov bromoalkane',
              'chain starts under heat',
              'allylic bromide'
            ],
            correctAnswer: 2,
            explanation: 'AIBN initiator is classically associated with chain starts under heat because common azo initiator.'
          },
          {
            question: 'A mechanism rationale cites allylic radical: radical adjacent to C=C with resonance support. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use allylic radical only after final answer choice selection.',
              'Treat allylic radical as a naming convention unrelated to mechanism.',
              'Use allylic radical to justify why the pathway favors anti-Markovnikov thioether under thiol-ene conditions.',
              'Ignore allylic radical and choose products only by molecular weight.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies allylic radical directly to mechanism and product control. In this context, thiol-ene conditions aligns with anti-Markovnikov thioether.'
          }
        ]
      }
    }
  ]
};
