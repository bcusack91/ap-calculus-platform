export const oChemAminesPart3Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'ochem-amines-nitrogen-compounds-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Amines and Nitrogen Compounds
      
      **Part 3 of 7 — Reductive Amination**
      
      This part focuses on building C-N bonds from carbonyl precursors. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **over-alkylation**: successive alkylation can push to quaternary ammonium
      - **reductive amination**: carbonyl + amine then reduction to C-N single bond
      - **diazonium salt**: aryl-N2+ intermediate used for substitution
      - **amide resonance**: lone pair delocalization lowers amide basicity
      
      ### Worked reaction example
      A representative transformation uses **R-COCl + R'NH2**.
      
      1. Identify the governing mechanism: **acyl substitution**.
      2. Predict the dominant product pattern: **amide**.
      3. Justify with a mechanistic note: amine acts as nucleophile and base.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for over-alkylation.',
            options: [
              'aryl-N2+ intermediate used for substitution',
              'lone pair delocalization lowers amide basicity',
              'successive alkylation can push to quaternary ammonium',
              'carbonyl + amine then reduction to C-N single bond'
            ],
            correctAnswer: 2,
            explanation: 'over-alkylation is defined as: successive alkylation can push to quaternary ammonium.'
          },
          {
            question: 'A reaction in this lesson uses ArNH2 + NaNO2/HCl (0-5 °C) and proceeds by diazotization. What product pattern should you predict first?',
            options: [
              'amide',
              'less substituted alkene',
              'aryl diazonium salt',
              'aryl bromide'
            ],
            correctAnswer: 2,
            explanation: 'With ArNH2 + NaNO2/HCl (0-5 °C), the benchmark outcome is aryl diazonium salt. Mechanistic anchor: temperature control is critical.'
          }
        ]
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | R-COCl + R'NH2 | acyl substitution | amide | amine acts as nucleophile and base |
      | ArNH2 + NaNO2/HCl (0-5 °C) | diazotization | aryl diazonium salt | temperature control is critical |
      | ArN2+ + CuBr | Sandmeyer substitution | aryl bromide | N2 is leaving group |
      | quaternary ammonium hydroxide, heat | Hofmann elimination | less substituted alkene | steric pathway control |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: successive alkylation can push to quaternary ammonium
      2) Term for: carbonyl + amine then reduction to C-N single bond
      3) Product pattern expected under R-COCl + R'NH2
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['over-alkylation', 'reductive amination', 'amide'],
        hint1: 'Blank 1 is the vocabulary term paired with: successive alkylation can push to quaternary ammonium.',
        hint2: 'Blank 2 corresponds to carbonyl + amine then reduction to C-N single bond.',
        hint3: 'Use the worked example: R-COCl + R\'NH2 gives amide.',
        explanation: 'Correct entries: over-alkylation, reductive amination, and amide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'diazonium salt',
            options: ['aryl-N2+ intermediate used for substitution', 'carbonyl + amine then reduction to C-N single bond', 'successive alkylation can push to quaternary ammonium', 'lone pair delocalization lowers amide basicity']
          },
          {
            label: 'Expected pattern from ArNH2 + NaNO2/HCl (0-5 °C)',
            options: ['amide', 'aryl diazonium salt', 'less substituted alkene', 'aryl bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Over-alkylation is common when alkyl halide is not carefully limited.', 'Amides are far less basic than amines because lone pair is resonance-delocalized.', 'Diazonium salts require cold conditions to avoid decomposition.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['aryl-N2+ intermediate used for substitution', 'aryl diazonium salt', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Diazonium salts require cold conditions to avoid decomposition.
      - Over-alkylation is common when alkyl halide is not carefully limited.
      - Amides are far less basic than amines because lone pair is resonance-delocalized.
      
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
      id: 'ochem-amines-nitrogen-compounds-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on reductive amination, a step uses ArN2+ + CuBr. Which major product pattern is most defensible?',
            options: [
              'amide',
              'aryl bromide',
              'less substituted alkene',
              'aryl diazonium salt'
            ],
            correctAnswer: 1,
            explanation: 'ArN2+ + CuBr is classically associated with aryl bromide because N2 is leaving group.'
          },
          {
            question: 'A mechanism rationale cites imine: C=N product from carbonyl + primary amine. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use imine to justify why the pathway favors less substituted alkene under quaternary ammonium hydroxide, heat.',
              'Ignore imine and choose products only by molecular weight.',
              'Use imine only after final answer choice selection.',
              'Treat imine as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies imine directly to mechanism and product control. In this context, quaternary ammonium hydroxide, heat aligns with less substituted alkene.'
          }
        ]
      }
    }
  ]
};
