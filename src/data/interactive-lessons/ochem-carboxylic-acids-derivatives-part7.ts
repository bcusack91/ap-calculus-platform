export const oChemCarboxylicAcidsPart7Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 7 of 7 — Exam-Level Carbonyl Strategy Review**
      
      This part focuses on solving mechanism-heavy carbonyl exam sets. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Fischer esterification**: acid-catalyzed carboxylic acid + alcohol condensation
      - **saponification**: base-promoted irreversible ester hydrolysis
      - **leaving-group ability**: stability of departing group controls rate
      - **acyl chloride**: most reactive common carboxylic acid derivative
      
      ### Worked reaction example
      A representative transformation uses **RCOCl + ROH, pyridine**.
      
      1. Identify the governing mechanism: **acyl substitution**.
      2. Predict the dominant product pattern: **ester**.
      3. Justify with a mechanistic note: fast due to good chloride leaving group.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Fischer esterification.',
            options: [
              'acid-catalyzed carboxylic acid + alcohol condensation',
              'most reactive common carboxylic acid derivative',
              'stability of departing group controls rate',
              'base-promoted irreversible ester hydrolysis'
            ],
            correctAnswer: 0,
            explanation: 'Fischer esterification is defined as: acid-catalyzed carboxylic acid + alcohol condensation.'
          },
          {
            question: 'A reaction in this lesson uses RCO2H + ROH, H+ and proceeds by Fischer esterification. What product pattern should you predict first?',
            options: [
              'equilibrium ester product',
              'carboxylate + alcohol',
              'primary amide',
              'ester'
            ],
            correctAnswer: 0,
            explanation: 'With RCO2H + ROH, H+, the benchmark outcome is equilibrium ester product. Mechanistic anchor: remove water to drive conversion.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCOCl + ROH, pyridine | acyl substitution | ester | fast due to good chloride leaving group |
      | RCO2H + ROH, H+ | Fischer esterification | equilibrium ester product | remove water to drive conversion |
      | ester + NaOH, heat | saponification | carboxylate + alcohol | irreversible under basic conditions |
      | RCOCl + NH3 | amidation | primary amide | requires base scavenging for HCl |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: acid-catalyzed carboxylic acid + alcohol condensation
      2) Term for: base-promoted irreversible ester hydrolysis
      3) Product pattern expected under RCOCl + ROH, pyridine
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Fischer esterification', 'saponification', 'ester'],
        hint1: 'Blank 1 is the vocabulary term paired with: acid-catalyzed carboxylic acid + alcohol condensation.',
        hint2: 'Blank 2 corresponds to base-promoted irreversible ester hydrolysis.',
        hint3: 'Use the worked example: RCOCl + ROH, pyridine gives ester.',
        explanation: 'Correct entries: Fischer esterification, saponification, and ester. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'leaving-group ability',
            options: ['base-promoted irreversible ester hydrolysis', 'stability of departing group controls rate', 'acid-catalyzed carboxylic acid + alcohol condensation', 'most reactive common carboxylic acid derivative']
          },
          {
            label: 'Expected pattern from RCO2H + ROH, H+',
            options: ['equilibrium ester product', 'ester', 'carboxylate + alcohol', 'primary amide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Saponification gives carboxylate until acidic workup protonates it.', 'Fischer esterification is reversible; equilibrium control matters.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Derivative reactivity tracks leaving-group quality and resonance donation.']
          }
        ],
        correctAnswers: ['stability of departing group controls rate', 'equilibrium ester product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Fischer esterification is reversible; equilibrium control matters.
      - Saponification gives carboxylate until acidic workup protonates it.
      - Derivative reactivity tracks leaving-group quality and resonance donation.
      
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
      id: 'ochem-carboxylic-acids-derivatives-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on exam-level carbonyl strategy review, a step uses ester + NaOH, heat. Which major product pattern is most defensible?',
            options: [
              'carboxylate + alcohol',
              'ester',
              'equilibrium ester product',
              'primary amide'
            ],
            correctAnswer: 0,
            explanation: 'ester + NaOH, heat is classically associated with carboxylate + alcohol because irreversible under basic conditions.'
          },
          {
            question: 'A mechanism rationale cites anhydride: derivative containing two acyl groups linked by oxygen. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat anhydride as a naming convention unrelated to mechanism.',
              'Use anhydride to justify why the pathway favors primary amide under RCOCl + NH3.',
              'Ignore anhydride and choose products only by molecular weight.',
              'Use anhydride only after final answer choice selection.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies anhydride directly to mechanism and product control. In this context, RCOCl + NH3 aligns with primary amide.'
          }
        ]
      }
    }
  ]
};
