export const oChemAminesPart7Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'ochem-amines-nitrogen-compounds-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Amines and Nitrogen Compounds
      
      **Part 7 of 7 — Integrated Nitrogen Mechanism Review**
      
      This part focuses on combining nitrogen chemistry in synthesis maps. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **imine**: C=N product from carbonyl + primary amine
      - **Hofmann elimination**: quaternary ammonium gives less substituted alkene
      - **chemoselectivity**: reagent reacts with one functional group preferentially
      - **amine basicity**: depends on lone-pair availability and stabilization
      
      ### Worked reaction example
      A representative transformation uses **R-X + NH3 (excess)**.
      
      1. Identify the governing mechanism: **alkylation pathway**.
      2. Predict the dominant product pattern: **primary amine major product**.
      3. Justify with a mechanistic note: excess ammonia suppresses over-alkylation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for imine.',
            options: [
              'quaternary ammonium gives less substituted alkene',
              'depends on lone-pair availability and stabilization',
              'reagent reacts with one functional group preferentially',
              'C=N product from carbonyl + primary amine'
            ],
            correctAnswer: 3,
            explanation: 'imine is defined as: C=N product from carbonyl + primary amine.'
          },
          {
            question: 'A reaction in this lesson uses R-CHO + R\'NH2, then NaBH3CN and proceeds by reductive amination. What product pattern should you predict first?',
            options: [
              'amide',
              'aryl diazonium salt',
              'primary amine major product',
              'secondary amine'
            ],
            correctAnswer: 3,
            explanation: 'With R-CHO + R\'NH2, then NaBH3CN, the benchmark outcome is secondary amine. Mechanistic anchor: mild reducing agent keeps carbonyl control.'
          }
        ]
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | R-X + NH3 (excess) | alkylation pathway | primary amine major product | excess ammonia suppresses over-alkylation |
      | R-CHO + R'NH2, then NaBH3CN | reductive amination | secondary amine | mild reducing agent keeps carbonyl control |
      | R-COCl + R'NH2 | acyl substitution | amide | amine acts as nucleophile and base |
      | ArNH2 + NaNO2/HCl (0-5 °C) | diazotization | aryl diazonium salt | temperature control is critical |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: C=N product from carbonyl + primary amine
      2) Term for: quaternary ammonium gives less substituted alkene
      3) Product pattern expected under R-X + NH3 (excess)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['imine', 'Hofmann elimination', 'primary amine major product'],
        hint1: 'Blank 1 is the vocabulary term paired with: C=N product from carbonyl + primary amine.',
        hint2: 'Blank 2 corresponds to quaternary ammonium gives less substituted alkene.',
        hint3: 'Use the worked example: R-X + NH3 (excess) gives primary amine major product.',
        explanation: 'Correct entries: imine, Hofmann elimination, and primary amine major product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'chemoselectivity',
            options: ['reagent reacts with one functional group preferentially', 'quaternary ammonium gives less substituted alkene', 'depends on lone-pair availability and stabilization', 'C=N product from carbonyl + primary amine']
          },
          {
            label: 'Expected pattern from R-CHO + R\'NH2, then NaBH3CN',
            options: ['amide', 'aryl diazonium salt', 'secondary amine', 'primary amine major product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Over-alkylation is common when alkyl halide is not carefully limited.', 'Amides are far less basic than amines because lone pair is resonance-delocalized.', 'Diazonium salts require cold conditions to avoid decomposition.']
          }
        ],
        correctAnswers: ['reagent reacts with one functional group preferentially', 'secondary amine', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p7-s6-strategy',
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
      id: 'ochem-amines-nitrogen-compounds-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on integrated nitrogen mechanism review, a step uses R-COCl + R\'NH2. Which major product pattern is most defensible?',
            options: [
              'amide',
              'primary amine major product',
              'aryl diazonium salt',
              'secondary amine'
            ],
            correctAnswer: 0,
            explanation: 'R-COCl + R\'NH2 is classically associated with amide because amine acts as nucleophile and base.'
          },
          {
            question: 'A mechanism rationale cites nucleophilic amine: nitrogen lone pair attacks electrophilic centers. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use nucleophilic amine to justify why the pathway favors aryl diazonium salt under ArNH2 + NaNO2/HCl (0-5 °C).',
              'Ignore nucleophilic amine and choose products only by molecular weight.',
              'Use nucleophilic amine only after final answer choice selection.',
              'Treat nucleophilic amine as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies nucleophilic amine directly to mechanism and product control. In this context, ArNH2 + NaNO2/HCl (0-5 °C) aligns with aryl diazonium salt.'
          }
        ]
      }
    }
  ]
};
