export const oChemAminesPart6Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'ochem-amines-nitrogen-compounds-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Amines and Nitrogen Compounds
      
      **Part 6 of 7 — Chemoselective Nitrogen Transformations**
      
      This part focuses on planning sequence while avoiding over-alkylation. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **amide resonance**: lone pair delocalization lowers amide basicity
      - **imine**: C=N product from carbonyl + primary amine
      - **Hofmann elimination**: quaternary ammonium gives less substituted alkene
      - **chemoselectivity**: reagent reacts with one functional group preferentially
      
      ### Worked reaction example
      A representative transformation uses **quaternary ammonium hydroxide, heat**.
      
      1. Identify the governing mechanism: **Hofmann elimination**.
      2. Predict the dominant product pattern: **less substituted alkene**.
      3. Justify with a mechanistic note: steric pathway control.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for amide resonance.',
            options: [
              'quaternary ammonium gives less substituted alkene',
              'lone pair delocalization lowers amide basicity',
              'reagent reacts with one functional group preferentially',
              'C=N product from carbonyl + primary amine'
            ],
            correctAnswer: 1,
            explanation: 'amide resonance is defined as: lone pair delocalization lowers amide basicity.'
          },
          {
            question: 'A reaction in this lesson uses R-X + NH3 (excess) and proceeds by alkylation pathway. What product pattern should you predict first?',
            options: [
              'primary amine major product',
              'less substituted alkene',
              'amide',
              'secondary amine'
            ],
            correctAnswer: 0,
            explanation: 'With R-X + NH3 (excess), the benchmark outcome is primary amine major product. Mechanistic anchor: excess ammonia suppresses over-alkylation.'
          }
        ]
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | quaternary ammonium hydroxide, heat | Hofmann elimination | less substituted alkene | steric pathway control |
      | R-X + NH3 (excess) | alkylation pathway | primary amine major product | excess ammonia suppresses over-alkylation |
      | R-CHO + R'NH2, then NaBH3CN | reductive amination | secondary amine | mild reducing agent keeps carbonyl control |
      | R-COCl + R'NH2 | acyl substitution | amide | amine acts as nucleophile and base |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: lone pair delocalization lowers amide basicity

      2) Term for: C=N product from carbonyl + primary amine

      3) Product pattern expected under quaternary ammonium hydroxide, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['amide resonance', 'imine', 'less substituted alkene'],
        hint1: 'Blank 1 is the vocabulary term paired with: lone pair delocalization lowers amide basicity.',
        hint2: 'Blank 2 corresponds to C=N product from carbonyl + primary amine.',
        hint3: 'Use the worked example: quaternary ammonium hydroxide, heat gives less substituted alkene.',
        explanation: 'Correct entries: amide resonance, imine, and less substituted alkene. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hofmann elimination',
            options: ['lone pair delocalization lowers amide basicity', 'quaternary ammonium gives less substituted alkene', 'reagent reacts with one functional group preferentially', 'C=N product from carbonyl + primary amine']
          },
          {
            label: 'Expected pattern from R-X + NH3 (excess)',
            options: ['amide', 'secondary amine', 'less substituted alkene', 'primary amine major product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Reductive amination is not simple direct SN2 on carbonyl carbon.', 'Diazonium salts require cold conditions to avoid decomposition.', 'Over-alkylation is common when alkyl halide is not carefully limited.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['quaternary ammonium gives less substituted alkene', 'primary amine major product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Reductive amination is not simple direct SN2 on carbonyl carbon.
      - Diazonium salts require cold conditions to avoid decomposition.
      - Over-alkylation is common when alkyl halide is not carefully limited.
      
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
      id: 'ochem-amines-nitrogen-compounds-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on chemoselective nitrogen transformations, a step uses R-CHO + R\'NH2, then NaBH3CN. Which major product pattern is most defensible?',
            options: [
              'primary amine major product',
              'amide',
              'secondary amine',
              'less substituted alkene'
            ],
            correctAnswer: 2,
            explanation: 'R-CHO + R\'NH2, then NaBH3CN is classically associated with secondary amine because mild reducing agent keeps carbonyl control.'
          },
          {
            question: 'A mechanism rationale cites amine basicity: depends on lone-pair availability and stabilization. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore amine basicity and choose products only by molecular weight.',
              'Use amine basicity to justify why the pathway favors amide under R-COCl + R\'NH2.',
              'Treat amine basicity as a naming convention unrelated to mechanism.',
              'Use amine basicity only after final answer choice selection.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies amine basicity directly to mechanism and product control. In this context, R-COCl + R\'NH2 aligns with amide.'
          }
        ]
      }
    }
  ]
};
