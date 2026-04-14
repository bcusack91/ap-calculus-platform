export const oChemAminesPart2Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'ochem-amines-nitrogen-compounds-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Amines and Nitrogen Compounds
      
      **Part 2 of 7 — Synthesis of Amines**
      
      This part focuses on choosing synthesis route to primary vs tertiary amines. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **nucleophilic amine**: nitrogen lone pair attacks electrophilic centers
      - **over-alkylation**: successive alkylation can push to quaternary ammonium
      - **reductive amination**: carbonyl + amine then reduction to C-N single bond
      - **diazonium salt**: aryl-N2+ intermediate used for substitution
      
      ### Worked reaction example
      A representative transformation uses **R-CHO + R'NH2, then NaBH3CN**.
      
      1. Identify the governing mechanism: **reductive amination**.
      2. Predict the dominant product pattern: **secondary amine**.
      3. Justify with a mechanistic note: mild reducing agent keeps carbonyl control.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for nucleophilic amine.',
            options: [
              'aryl-N2+ intermediate used for substitution',
              'carbonyl + amine then reduction to C-N single bond',
              'nitrogen lone pair attacks electrophilic centers',
              'successive alkylation can push to quaternary ammonium'
            ],
            correctAnswer: 2,
            explanation: 'nucleophilic amine is defined as: nitrogen lone pair attacks electrophilic centers.'
          },
          {
            question: 'A reaction in this lesson uses R-COCl + R\'NH2 and proceeds by acyl substitution. What product pattern should you predict first?',
            options: [
              'aryl bromide',
              'amide',
              'secondary amine',
              'aryl diazonium salt'
            ],
            correctAnswer: 1,
            explanation: 'With R-COCl + R\'NH2, the benchmark outcome is amide. Mechanistic anchor: amine acts as nucleophile and base.'
          }
        ]
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | R-CHO + R'NH2, then NaBH3CN | reductive amination | secondary amine | mild reducing agent keeps carbonyl control |
      | R-COCl + R'NH2 | acyl substitution | amide | amine acts as nucleophile and base |
      | ArNH2 + NaNO2/HCl (0-5 °C) | diazotization | aryl diazonium salt | temperature control is critical |
      | ArN2+ + CuBr | Sandmeyer substitution | aryl bromide | N2 is leaving group |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: nitrogen lone pair attacks electrophilic centers

      2) Term for: successive alkylation can push to quaternary ammonium

      3) Product pattern expected under R-CHO + R'NH2, then NaBH3CN
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nucleophilic amine', 'over-alkylation', 'secondary amine'],
        hint1: 'Blank 1 is the vocabulary term paired with: nitrogen lone pair attacks electrophilic centers.',
        hint2: 'Blank 2 corresponds to successive alkylation can push to quaternary ammonium.',
        hint3: 'Use the worked example: R-CHO + R\'NH2, then NaBH3CN gives secondary amine.',
        explanation: 'Correct entries: nucleophilic amine, over-alkylation, and secondary amine. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'reductive amination',
            options: ['aryl-N2+ intermediate used for substitution', 'nitrogen lone pair attacks electrophilic centers', 'successive alkylation can push to quaternary ammonium', 'carbonyl + amine then reduction to C-N single bond']
          },
          {
            label: 'Expected pattern from R-COCl + R\'NH2',
            options: ['aryl diazonium salt', 'secondary amine', 'amide', 'aryl bromide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Over-alkylation is common when alkyl halide is not carefully limited.', 'Diazonium salts require cold conditions to avoid decomposition.', 'Reductive amination is not simple direct SN2 on carbonyl carbon.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['carbonyl + amine then reduction to C-N single bond', 'amide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-amines-nitrogen-compounds-p2-s6-strategy',
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
      id: 'ochem-amines-nitrogen-compounds-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on synthesis of amines, a step uses ArNH2 + NaNO2/HCl (0-5 °C). Which major product pattern is most defensible?',
            options: [
              'aryl diazonium salt',
              'secondary amine',
              'aryl bromide',
              'amide'
            ],
            correctAnswer: 0,
            explanation: 'ArNH2 + NaNO2/HCl (0-5 °C) is classically associated with aryl diazonium salt because temperature control is critical.'
          },
          {
            question: 'A mechanism rationale cites amide resonance: lone pair delocalization lowers amide basicity. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat amide resonance as a naming convention unrelated to mechanism.',
              'Use amide resonance to justify why the pathway favors aryl bromide under ArN2+ + CuBr.',
              'Use amide resonance only after final answer choice selection.',
              'Ignore amide resonance and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies amide resonance directly to mechanism and product control. In this context, ArN2+ + CuBr aligns with aryl bromide.'
          }
        ]
      }
    }
  ]
};
