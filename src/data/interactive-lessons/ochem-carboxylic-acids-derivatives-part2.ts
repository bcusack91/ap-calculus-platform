export const oChemCarboxylicAcidsPart2Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 2 of 7 — Nucleophilic Acyl Substitution**
      
      This part focuses on predicting leaving-group departure in tetrahedral intermediates. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **anhydride**: derivative containing two acyl groups linked by oxygen
      - **ester**: carboxylic derivative with alkoxy leaving group
      - **amide**: least reactive common derivative due to resonance donation
      - **tetrahedral intermediate**: addition intermediate before elimination
      
      ### Worked reaction example
      A representative transformation uses **RCO2H + ROH, H+**.
      
      1. Identify the governing mechanism: **Fischer esterification**.
      2. Predict the dominant product pattern: **equilibrium ester product**.
      3. Justify with a mechanistic note: remove water to drive conversion.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for anhydride.',
            options: [
              'derivative containing two acyl groups linked by oxygen',
              'carboxylic derivative with alkoxy leaving group',
              'addition intermediate before elimination',
              'least reactive common derivative due to resonance donation'
            ],
            correctAnswer: 0,
            explanation: 'anhydride is defined as: derivative containing two acyl groups linked by oxygen.'
          },
          {
            question: 'A reaction in this lesson uses ester + NaOH, heat and proceeds by saponification. What product pattern should you predict first?',
            options: [
              'primary amide',
              'carboxylate + alcohol',
              'equilibrium ester product',
              'carboxylic acid + ammonium'
            ],
            correctAnswer: 1,
            explanation: 'With ester + NaOH, heat, the benchmark outcome is carboxylate + alcohol. Mechanistic anchor: irreversible under basic conditions.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCO2H + ROH, H+ | Fischer esterification | equilibrium ester product | remove water to drive conversion |
      | ester + NaOH, heat | saponification | carboxylate + alcohol | irreversible under basic conditions |
      | RCOCl + NH3 | amidation | primary amide | requires base scavenging for HCl |
      | amide + H3O+, heat | acidic hydrolysis | carboxylic acid + ammonium | harsh conditions required |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: derivative containing two acyl groups linked by oxygen

      2) Term for: carboxylic derivative with alkoxy leaving group

      3) Product pattern expected under RCO2H + ROH, H+
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['anhydride', 'ester', 'equilibrium ester product'],
        hint1: 'Blank 1 is the vocabulary term paired with: derivative containing two acyl groups linked by oxygen.',
        hint2: 'Blank 2 corresponds to carboxylic derivative with alkoxy leaving group.',
        hint3: 'Use the worked example: RCO2H + ROH, H+ gives equilibrium ester product.',
        explanation: 'Correct entries: anhydride, ester, and equilibrium ester product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'amide',
            options: ['derivative containing two acyl groups linked by oxygen', 'least reactive common derivative due to resonance donation', 'addition intermediate before elimination', 'carboxylic derivative with alkoxy leaving group']
          },
          {
            label: 'Expected pattern from ester + NaOH, heat',
            options: ['equilibrium ester product', 'carboxylate + alcohol', 'primary amide', 'carboxylic acid + ammonium']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Fischer esterification is reversible; equilibrium control matters.', 'Saponification gives carboxylate until acidic workup protonates it.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Amides are difficult to hydrolyze under mild conditions.']
          }
        ],
        correctAnswers: ['least reactive common derivative due to resonance donation', 'carboxylate + alcohol', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p2-s6-strategy',
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
      id: 'ochem-carboxylic-acids-derivatives-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on nucleophilic acyl substitution, a step uses RCOCl + NH3. Which major product pattern is most defensible?',
            options: [
              'carboxylic acid + ammonium',
              'carboxylate + alcohol',
              'equilibrium ester product',
              'primary amide'
            ],
            correctAnswer: 3,
            explanation: 'RCOCl + NH3 is classically associated with primary amide because requires base scavenging for HCl.'
          },
          {
            question: 'A mechanism rationale cites nucleophilic acyl substitution: addition-elimination at acyl carbon. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore nucleophilic acyl substitution and choose products only by molecular weight.',
              'Use nucleophilic acyl substitution only after final answer choice selection.',
              'Use nucleophilic acyl substitution to justify why the pathway favors carboxylic acid + ammonium under amide + H3O+, heat.',
              'Treat nucleophilic acyl substitution as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies nucleophilic acyl substitution directly to mechanism and product control. In this context, amide + H3O+, heat aligns with carboxylic acid + ammonium.'
          }
        ]
      }
    }
  ]
};
