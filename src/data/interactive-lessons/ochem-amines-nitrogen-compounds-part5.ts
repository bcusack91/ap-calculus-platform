export const oChemAminesPart5Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'ochem-amines-nitrogen-compounds-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Amines and Nitrogen Compounds
      
      **Part 5 of 7 — Amide and Imine Interconversions**
      
      This part focuses on tracking protonation states of amines, imines, and amides. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **diazonium salt**: aryl-N2+ intermediate used for substitution
      - **amide resonance**: lone pair delocalization lowers amide basicity
      - **imine**: C=N product from carbonyl + primary amine
      - **Hofmann elimination**: quaternary ammonium gives less substituted alkene
      
      ### Worked reaction example
      A representative transformation uses **ArN2+ + CuBr**.
      
      1. Identify the governing mechanism: **Sandmeyer substitution**.
      2. Predict the dominant product pattern: **aryl bromide**.
      3. Justify with a mechanistic note: N2 is leaving group.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for diazonium salt.',
            options: [
              'C=N product from carbonyl + primary amine',
              'quaternary ammonium gives less substituted alkene',
              'aryl-N2+ intermediate used for substitution',
              'lone pair delocalization lowers amide basicity'
            ],
            correctAnswer: 2,
            explanation: 'diazonium salt is defined as: aryl-N2+ intermediate used for substitution.'
          },
          {
            question: 'A reaction in this lesson uses quaternary ammonium hydroxide, heat and proceeds by Hofmann elimination. What product pattern should you predict first?',
            options: [
              'less substituted alkene',
              'primary amine major product',
              'secondary amine',
              'aryl bromide'
            ],
            correctAnswer: 0,
            explanation: 'With quaternary ammonium hydroxide, heat, the benchmark outcome is less substituted alkene. Mechanistic anchor: steric pathway control.'
          }
        ]
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | ArN2+ + CuBr | Sandmeyer substitution | aryl bromide | N2 is leaving group |
      | quaternary ammonium hydroxide, heat | Hofmann elimination | less substituted alkene | steric pathway control |
      | R-X + NH3 (excess) | alkylation pathway | primary amine major product | excess ammonia suppresses over-alkylation |
      | R-CHO + R'NH2, then NaBH3CN | reductive amination | secondary amine | mild reducing agent keeps carbonyl control |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: aryl-N2+ intermediate used for substitution

      2) Term for: lone pair delocalization lowers amide basicity

      3) Product pattern expected under ArN2+ + CuBr
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['diazonium salt', 'amide resonance', 'aryl bromide'],
        hint1: 'Blank 1 is the vocabulary term paired with: aryl-N2+ intermediate used for substitution.',
        hint2: 'Blank 2 corresponds to lone pair delocalization lowers amide basicity.',
        hint3: 'Use the worked example: ArN2+ + CuBr gives aryl bromide.',
        explanation: 'Correct entries: diazonium salt, amide resonance, and aryl bromide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'imine',
            options: ['lone pair delocalization lowers amide basicity', 'quaternary ammonium gives less substituted alkene', 'C=N product from carbonyl + primary amine', 'aryl-N2+ intermediate used for substitution']
          },
          {
            label: 'Expected pattern from quaternary ammonium hydroxide, heat',
            options: ['aryl bromide', 'primary amine major product', 'less substituted alkene', 'secondary amine']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Amides are far less basic than amines because lone pair is resonance-delocalized.', 'Reductive amination is not simple direct SN2 on carbonyl carbon.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Diazonium salts require cold conditions to avoid decomposition.']
          }
        ],
        correctAnswers: ['C=N product from carbonyl + primary amine', 'less substituted alkene', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Amides are far less basic than amines because lone pair is resonance-delocalized.
      - Reductive amination is not simple direct SN2 on carbonyl carbon.
      - Diazonium salts require cold conditions to avoid decomposition.
      
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
      id: 'ochem-amines-nitrogen-compounds-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on amide and imine interconversions, a step uses R-X + NH3 (excess). Which major product pattern is most defensible?',
            options: [
              'less substituted alkene',
              'secondary amine',
              'aryl bromide',
              'primary amine major product'
            ],
            correctAnswer: 3,
            explanation: 'R-X + NH3 (excess) is classically associated with primary amine major product because excess ammonia suppresses over-alkylation.'
          },
          {
            question: 'A mechanism rationale cites chemoselectivity: reagent reacts with one functional group preferentially. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use chemoselectivity to justify why the pathway favors secondary amine under R-CHO + R\'NH2, then NaBH3CN.',
              'Treat chemoselectivity as a naming convention unrelated to mechanism.',
              'Use chemoselectivity only after final answer choice selection.',
              'Ignore chemoselectivity and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies chemoselectivity directly to mechanism and product control. In this context, R-CHO + R\'NH2, then NaBH3CN aligns with secondary amine.'
          }
        ]
      }
    }
  ]
};
