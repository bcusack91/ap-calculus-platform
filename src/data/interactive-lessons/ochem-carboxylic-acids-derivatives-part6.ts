export const oChemCarboxylicAcidsPart6Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 6 of 7 — Multistep Derivative Interconversion**
      
      This part focuses on choosing chemoselective conversions between derivatives. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **nucleophilic acyl substitution**: addition-elimination at acyl carbon
      - **Fischer esterification**: acid-catalyzed carboxylic acid + alcohol condensation
      - **saponification**: base-promoted irreversible ester hydrolysis
      - **leaving-group ability**: stability of departing group controls rate
      
      ### Worked reaction example
      A representative transformation uses **LiAlH4 reduction**.
      
      1. Identify the governing mechanism: **strong hydride delivery**.
      2. Predict the dominant product pattern: **alcohols/amines from derivatives**.
      3. Justify with a mechanistic note: workup controls isolated form.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for nucleophilic acyl substitution.',
            options: [
              'stability of departing group controls rate',
              'acid-catalyzed carboxylic acid + alcohol condensation',
              'addition-elimination at acyl carbon',
              'base-promoted irreversible ester hydrolysis'
            ],
            correctAnswer: 2,
            explanation: 'nucleophilic acyl substitution is defined as: addition-elimination at acyl carbon.'
          },
          {
            question: 'A reaction in this lesson uses RCOCl + ROH, pyridine and proceeds by acyl substitution. What product pattern should you predict first?',
            options: [
              'ester',
              'equilibrium ester product',
              'alcohols/amines from derivatives',
              'carboxylate + alcohol'
            ],
            correctAnswer: 0,
            explanation: 'With RCOCl + ROH, pyridine, the benchmark outcome is ester. Mechanistic anchor: fast due to good chloride leaving group.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | LiAlH4 reduction | strong hydride delivery | alcohols/amines from derivatives | workup controls isolated form |
      | RCOCl + ROH, pyridine | acyl substitution | ester | fast due to good chloride leaving group |
      | RCO2H + ROH, H+ | Fischer esterification | equilibrium ester product | remove water to drive conversion |
      | ester + NaOH, heat | saponification | carboxylate + alcohol | irreversible under basic conditions |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: addition-elimination at acyl carbon

      2) Term for: acid-catalyzed carboxylic acid + alcohol condensation

      3) Product pattern expected under LiAlH4 reduction
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nucleophilic acyl substitution', 'Fischer esterification', 'alcohols/amines from derivatives'],
        hint1: 'Blank 1 is the vocabulary term paired with: addition-elimination at acyl carbon.',
        hint2: 'Blank 2 corresponds to acid-catalyzed carboxylic acid + alcohol condensation.',
        hint3: 'Use the worked example: LiAlH4 reduction gives alcohols/amines from derivatives.',
        explanation: 'Correct entries: nucleophilic acyl substitution, Fischer esterification, and alcohols/amines from derivatives. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'saponification',
            options: ['stability of departing group controls rate', 'base-promoted irreversible ester hydrolysis', 'acid-catalyzed carboxylic acid + alcohol condensation', 'addition-elimination at acyl carbon']
          },
          {
            label: 'Expected pattern from RCOCl + ROH, pyridine',
            options: ['carboxylate + alcohol', 'ester', 'equilibrium ester product', 'alcohols/amines from derivatives']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Saponification gives carboxylate until acidic workup protonates it.', 'Amides are difficult to hydrolyze under mild conditions.', 'Fischer esterification is reversible; equilibrium control matters.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['base-promoted irreversible ester hydrolysis', 'ester', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Amides are difficult to hydrolyze under mild conditions.
      - Fischer esterification is reversible; equilibrium control matters.
      - Saponification gives carboxylate until acidic workup protonates it.
      
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
      id: 'ochem-carboxylic-acids-derivatives-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on multistep derivative interconversion, a step uses RCO2H + ROH, H+. Which major product pattern is most defensible?',
            options: [
              'equilibrium ester product',
              'alcohols/amines from derivatives',
              'carboxylate + alcohol',
              'ester'
            ],
            correctAnswer: 0,
            explanation: 'RCO2H + ROH, H+ is classically associated with equilibrium ester product because remove water to drive conversion.'
          },
          {
            question: 'A mechanism rationale cites acyl chloride: most reactive common carboxylic acid derivative. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat acyl chloride as a naming convention unrelated to mechanism.',
              'Use acyl chloride only after final answer choice selection.',
              'Use acyl chloride to justify why the pathway favors carboxylate + alcohol under ester + NaOH, heat.',
              'Ignore acyl chloride and choose products only by molecular weight.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies acyl chloride directly to mechanism and product control. In this context, ester + NaOH, heat aligns with carboxylate + alcohol.'
          }
        ]
      }
    }
  ]
};
