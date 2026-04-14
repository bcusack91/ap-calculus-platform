export const oChemCarboxylicAcidsPart1Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 1 of 7 — Acid Derivative Reactivity Ladder**
      
      This part focuses on ranking acyl chlorides, anhydrides, esters, and amides by reactivity. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **acyl chloride**: most reactive common carboxylic acid derivative
      - **anhydride**: derivative containing two acyl groups linked by oxygen
      - **ester**: carboxylic derivative with alkoxy leaving group
      - **amide**: least reactive common derivative due to resonance donation
      
      ### Worked reaction example
      A representative transformation uses **RCOCl + ROH, pyridine**.
      
      1. Identify the governing mechanism: **acyl substitution**.
      2. Predict the dominant product pattern: **ester**.
      3. Justify with a mechanistic note: fast due to good chloride leaving group.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for acyl chloride.',
            options: [
              'carboxylic derivative with alkoxy leaving group',
              'most reactive common carboxylic acid derivative',
              'least reactive common derivative due to resonance donation',
              'derivative containing two acyl groups linked by oxygen'
            ],
            correctAnswer: 1,
            explanation: 'acyl chloride is defined as: most reactive common carboxylic acid derivative.'
          },
          {
            question: 'A reaction in this lesson uses RCO2H + ROH, H+ and proceeds by Fischer esterification. What product pattern should you predict first?',
            options: [
              'equilibrium ester product',
              'ester',
              'carboxylate + alcohol',
              'primary amide'
            ],
            correctAnswer: 0,
            explanation: 'With RCO2H + ROH, H+, the benchmark outcome is equilibrium ester product. Mechanistic anchor: remove water to drive conversion.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p1-s3-deep-dive',
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
      id: 'ochem-carboxylic-acids-derivatives-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: most reactive common carboxylic acid derivative

      2) Term for: derivative containing two acyl groups linked by oxygen

      3) Product pattern expected under RCOCl + ROH, pyridine
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['acyl chloride', 'anhydride', 'ester'],
        hint1: 'Blank 1 is the vocabulary term paired with: most reactive common carboxylic acid derivative.',
        hint2: 'Blank 2 corresponds to derivative containing two acyl groups linked by oxygen.',
        hint3: 'Use the worked example: RCOCl + ROH, pyridine gives ester.',
        explanation: 'Correct entries: acyl chloride, anhydride, and ester. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ester',
            options: ['derivative containing two acyl groups linked by oxygen', 'carboxylic derivative with alkoxy leaving group', 'least reactive common derivative due to resonance donation', 'most reactive common carboxylic acid derivative']
          },
          {
            label: 'Expected pattern from RCO2H + ROH, H+',
            options: ['ester', 'primary amide', 'carboxylate + alcohol', 'equilibrium ester product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Amides are difficult to hydrolyze under mild conditions.', 'Derivative reactivity tracks leaving-group quality and resonance donation.', 'Fischer esterification is reversible; equilibrium control matters.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['carboxylic derivative with alkoxy leaving group', 'equilibrium ester product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p1-s6-strategy',
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
      id: 'ochem-carboxylic-acids-derivatives-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on acid derivative reactivity ladder, a step uses ester + NaOH, heat. Which major product pattern is most defensible?',
            options: [
              'equilibrium ester product',
              'carboxylate + alcohol',
              'ester',
              'primary amide'
            ],
            correctAnswer: 1,
            explanation: 'ester + NaOH, heat is classically associated with carboxylate + alcohol because irreversible under basic conditions.'
          },
          {
            question: 'A mechanism rationale cites tetrahedral intermediate: addition intermediate before elimination. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use tetrahedral intermediate to justify why the pathway favors primary amide under RCOCl + NH3.',
              'Use tetrahedral intermediate only after final answer choice selection.',
              'Treat tetrahedral intermediate as a naming convention unrelated to mechanism.',
              'Ignore tetrahedral intermediate and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies tetrahedral intermediate directly to mechanism and product control. In this context, RCOCl + NH3 aligns with primary amide.'
          }
        ]
      }
    }
  ]
};
