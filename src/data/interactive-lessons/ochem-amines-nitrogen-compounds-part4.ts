export const oChemAminesPart4Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'ochem-amines-nitrogen-compounds-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Amines and Nitrogen Compounds
      
      **Part 4 of 7 — Diazonium and Aromatic Nitrogen Chemistry**
      
      This part focuses on predicting aromatic substitution using diazonium intermediates. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **reductive amination**: carbonyl + amine then reduction to C-N single bond
      - **diazonium salt**: aryl-N2+ intermediate used for substitution
      - **amide resonance**: lone pair delocalization lowers amide basicity
      - **imine**: C=N product from carbonyl + primary amine
      
      ### Worked reaction example
      A representative transformation uses **ArNH2 + NaNO2/HCl (0-5 °C)**.
      
      1. Identify the governing mechanism: **diazotization**.
      2. Predict the dominant product pattern: **aryl diazonium salt**.
      3. Justify with a mechanistic note: temperature control is critical.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for reductive amination.',
            options: [
              'lone pair delocalization lowers amide basicity',
              'aryl-N2+ intermediate used for substitution',
              'C=N product from carbonyl + primary amine',
              'carbonyl + amine then reduction to C-N single bond'
            ],
            correctAnswer: 3,
            explanation: 'reductive amination is defined as: carbonyl + amine then reduction to C-N single bond.'
          },
          {
            question: 'A reaction in this lesson uses ArN2+ + CuBr and proceeds by Sandmeyer substitution. What product pattern should you predict first?',
            options: [
              'less substituted alkene',
              'aryl bromide',
              'primary amine major product',
              'aryl diazonium salt'
            ],
            correctAnswer: 1,
            explanation: 'With ArN2+ + CuBr, the benchmark outcome is aryl bromide. Mechanistic anchor: N2 is leaving group.'
          }
        ]
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | ArNH2 + NaNO2/HCl (0-5 °C) | diazotization | aryl diazonium salt | temperature control is critical |
      | ArN2+ + CuBr | Sandmeyer substitution | aryl bromide | N2 is leaving group |
      | quaternary ammonium hydroxide, heat | Hofmann elimination | less substituted alkene | steric pathway control |
      | R-X + NH3 (excess) | alkylation pathway | primary amine major product | excess ammonia suppresses over-alkylation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: carbonyl + amine then reduction to C-N single bond
      2) Term for: aryl-N2+ intermediate used for substitution
      3) Product pattern expected under ArNH2 + NaNO2/HCl (0-5 °C)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reductive amination', 'diazonium salt', 'aryl diazonium salt'],
        hint1: 'Blank 1 is the vocabulary term paired with: carbonyl + amine then reduction to C-N single bond.',
        hint2: 'Blank 2 corresponds to aryl-N2+ intermediate used for substitution.',
        hint3: 'Use the worked example: ArNH2 + NaNO2/HCl (0-5 °C) gives aryl diazonium salt.',
        explanation: 'Correct entries: reductive amination, diazonium salt, and aryl diazonium salt. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'amide resonance',
            options: ['lone pair delocalization lowers amide basicity', 'C=N product from carbonyl + primary amine', 'aryl-N2+ intermediate used for substitution', 'carbonyl + amine then reduction to C-N single bond']
          },
          {
            label: 'Expected pattern from ArN2+ + CuBr',
            options: ['less substituted alkene', 'aryl bromide', 'aryl diazonium salt', 'primary amine major product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Over-alkylation is common when alkyl halide is not carefully limited.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Amides are far less basic than amines because lone pair is resonance-delocalized.', 'Reductive amination is not simple direct SN2 on carbonyl carbon.']
          }
        ],
        correctAnswers: ['lone pair delocalization lowers amide basicity', 'aryl bromide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Over-alkylation is common when alkyl halide is not carefully limited.
      - Amides are far less basic than amines because lone pair is resonance-delocalized.
      - Reductive amination is not simple direct SN2 on carbonyl carbon.
      
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
      id: 'ochem-amines-nitrogen-compounds-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on diazonium and aromatic nitrogen chemistry, a step uses quaternary ammonium hydroxide, heat. Which major product pattern is most defensible?',
            options: [
              'aryl bromide',
              'aryl diazonium salt',
              'primary amine major product',
              'less substituted alkene'
            ],
            correctAnswer: 3,
            explanation: 'quaternary ammonium hydroxide, heat is classically associated with less substituted alkene because steric pathway control.'
          },
          {
            question: 'A mechanism rationale cites Hofmann elimination: quaternary ammonium gives less substituted alkene. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat Hofmann elimination as a naming convention unrelated to mechanism.',
              'Use Hofmann elimination to justify why the pathway favors primary amine major product under R-X + NH3 (excess).',
              'Use Hofmann elimination only after final answer choice selection.',
              'Ignore Hofmann elimination and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies Hofmann elimination directly to mechanism and product control. In this context, R-X + NH3 (excess) aligns with primary amine major product.'
          }
        ]
      }
    }
  ]
};
