export const oChemCarboxylicAcidsPart5Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 5 of 7 — Acyl Transfer in Synthesis**
      
      This part focuses on mapping acyl substitutions across synthetic sequences. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **tetrahedral intermediate**: addition intermediate before elimination
      - **nucleophilic acyl substitution**: addition-elimination at acyl carbon
      - **Fischer esterification**: acid-catalyzed carboxylic acid + alcohol condensation
      - **saponification**: base-promoted irreversible ester hydrolysis
      
      ### Worked reaction example
      A representative transformation uses **amide + H3O+, heat**.
      
      1. Identify the governing mechanism: **acidic hydrolysis**.
      2. Predict the dominant product pattern: **carboxylic acid + ammonium**.
      3. Justify with a mechanistic note: harsh conditions required.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for tetrahedral intermediate.',
            options: [
              'addition-elimination at acyl carbon',
              'base-promoted irreversible ester hydrolysis',
              'addition intermediate before elimination',
              'acid-catalyzed carboxylic acid + alcohol condensation'
            ],
            correctAnswer: 2,
            explanation: 'tetrahedral intermediate is defined as: addition intermediate before elimination.'
          },
          {
            question: 'A reaction in this lesson uses LiAlH4 reduction and proceeds by strong hydride delivery. What product pattern should you predict first?',
            options: [
              'alcohols/amines from derivatives',
              'equilibrium ester product',
              'ester',
              'carboxylic acid + ammonium'
            ],
            correctAnswer: 0,
            explanation: 'With LiAlH4 reduction, the benchmark outcome is alcohols/amines from derivatives. Mechanistic anchor: workup controls isolated form.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | amide + H3O+, heat | acidic hydrolysis | carboxylic acid + ammonium | harsh conditions required |
      | LiAlH4 reduction | strong hydride delivery | alcohols/amines from derivatives | workup controls isolated form |
      | RCOCl + ROH, pyridine | acyl substitution | ester | fast due to good chloride leaving group |
      | RCO2H + ROH, H+ | Fischer esterification | equilibrium ester product | remove water to drive conversion |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: addition intermediate before elimination

      2) Term for: addition-elimination at acyl carbon

      3) Product pattern expected under amide + H3O+, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['tetrahedral intermediate', 'nucleophilic acyl substitution', 'carboxylic acid + ammonium'],
        hint1: 'Blank 1 is the vocabulary term paired with: addition intermediate before elimination.',
        hint2: 'Blank 2 corresponds to addition-elimination at acyl carbon.',
        hint3: 'Use the worked example: amide + H3O+, heat gives carboxylic acid + ammonium.',
        explanation: 'Correct entries: tetrahedral intermediate, nucleophilic acyl substitution, and carboxylic acid + ammonium. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fischer esterification',
            options: ['addition-elimination at acyl carbon', 'acid-catalyzed carboxylic acid + alcohol condensation', 'addition intermediate before elimination', 'base-promoted irreversible ester hydrolysis']
          },
          {
            label: 'Expected pattern from LiAlH4 reduction',
            options: ['ester', 'equilibrium ester product', 'carboxylic acid + ammonium', 'alcohols/amines from derivatives']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Amides are difficult to hydrolyze under mild conditions.', 'Derivative reactivity tracks leaving-group quality and resonance donation.', 'Fischer esterification is reversible; equilibrium control matters.']
          }
        ],
        correctAnswers: ['acid-catalyzed carboxylic acid + alcohol condensation', 'alcohols/amines from derivatives', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Derivative reactivity tracks leaving-group quality and resonance donation.
      - Amides are difficult to hydrolyze under mild conditions.
      - Fischer esterification is reversible; equilibrium control matters.
      
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
      id: 'ochem-carboxylic-acids-derivatives-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on acyl transfer in synthesis, a step uses RCOCl + ROH, pyridine. Which major product pattern is most defensible?',
            options: [
              'alcohols/amines from derivatives',
              'carboxylic acid + ammonium',
              'ester',
              'equilibrium ester product'
            ],
            correctAnswer: 2,
            explanation: 'RCOCl + ROH, pyridine is classically associated with ester because fast due to good chloride leaving group.'
          },
          {
            question: 'A mechanism rationale cites leaving-group ability: stability of departing group controls rate. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use leaving-group ability to justify why the pathway favors equilibrium ester product under RCO2H + ROH, H+.',
              'Use leaving-group ability only after final answer choice selection.',
              'Ignore leaving-group ability and choose products only by molecular weight.',
              'Treat leaving-group ability as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies leaving-group ability directly to mechanism and product control. In this context, RCO2H + ROH, H+ aligns with equilibrium ester product.'
          }
        ]
      }
    }
  ]
};
