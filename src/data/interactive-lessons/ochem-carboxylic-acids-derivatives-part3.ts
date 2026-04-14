export const oChemCarboxylicAcidsPart3Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 3 of 7 — Esterification and Hydrolysis**
      
      This part focuses on controlling equilibrium in Fischer esterification. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **ester**: carboxylic derivative with alkoxy leaving group
      - **amide**: least reactive common derivative due to resonance donation
      - **tetrahedral intermediate**: addition intermediate before elimination
      - **nucleophilic acyl substitution**: addition-elimination at acyl carbon
      
      ### Worked reaction example
      A representative transformation uses **ester + NaOH, heat**.
      
      1. Identify the governing mechanism: **saponification**.
      2. Predict the dominant product pattern: **carboxylate + alcohol**.
      3. Justify with a mechanistic note: irreversible under basic conditions.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for ester.',
            options: [
              'addition intermediate before elimination',
              'least reactive common derivative due to resonance donation',
              'carboxylic derivative with alkoxy leaving group',
              'addition-elimination at acyl carbon'
            ],
            correctAnswer: 2,
            explanation: 'ester is defined as: carboxylic derivative with alkoxy leaving group.'
          },
          {
            question: 'A reaction in this lesson uses RCOCl + NH3 and proceeds by amidation. What product pattern should you predict first?',
            options: [
              'carboxylic acid + ammonium',
              'carboxylate + alcohol',
              'primary amide',
              'alcohols/amines from derivatives'
            ],
            correctAnswer: 2,
            explanation: 'With RCOCl + NH3, the benchmark outcome is primary amide. Mechanistic anchor: requires base scavenging for HCl.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | ester + NaOH, heat | saponification | carboxylate + alcohol | irreversible under basic conditions |
      | RCOCl + NH3 | amidation | primary amide | requires base scavenging for HCl |
      | amide + H3O+, heat | acidic hydrolysis | carboxylic acid + ammonium | harsh conditions required |
      | LiAlH4 reduction | strong hydride delivery | alcohols/amines from derivatives | workup controls isolated form |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: carboxylic derivative with alkoxy leaving group

      2) Term for: least reactive common derivative due to resonance donation

      3) Product pattern expected under ester + NaOH, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ester', 'amide', 'carboxylate + alcohol'],
        hint1: 'Blank 1 is the vocabulary term paired with: carboxylic derivative with alkoxy leaving group.',
        hint2: 'Blank 2 corresponds to least reactive common derivative due to resonance donation.',
        hint3: 'Use the worked example: ester + NaOH, heat gives carboxylate + alcohol.',
        explanation: 'Correct entries: ester, amide, and carboxylate + alcohol. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'tetrahedral intermediate',
            options: ['carboxylic derivative with alkoxy leaving group', 'addition-elimination at acyl carbon', 'addition intermediate before elimination', 'least reactive common derivative due to resonance donation']
          },
          {
            label: 'Expected pattern from RCOCl + NH3',
            options: ['carboxylic acid + ammonium', 'alcohols/amines from derivatives', 'carboxylate + alcohol', 'primary amide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Derivative reactivity tracks leaving-group quality and resonance donation.', 'Fischer esterification is reversible; equilibrium control matters.', 'Saponification gives carboxylate until acidic workup protonates it.']
          }
        ],
        correctAnswers: ['addition intermediate before elimination', 'primary amide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p3-s6-strategy',
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
      id: 'ochem-carboxylic-acids-derivatives-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on esterification and hydrolysis, a step uses amide + H3O+, heat. Which major product pattern is most defensible?',
            options: [
              'carboxylate + alcohol',
              'alcohols/amines from derivatives',
              'carboxylic acid + ammonium',
              'primary amide'
            ],
            correctAnswer: 2,
            explanation: 'amide + H3O+, heat is classically associated with carboxylic acid + ammonium because harsh conditions required.'
          },
          {
            question: 'A mechanism rationale cites Fischer esterification: acid-catalyzed carboxylic acid + alcohol condensation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use Fischer esterification only after final answer choice selection.',
              'Use Fischer esterification to justify why the pathway favors alcohols/amines from derivatives under LiAlH4 reduction.',
              'Treat Fischer esterification as a naming convention unrelated to mechanism.',
              'Ignore Fischer esterification and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies Fischer esterification directly to mechanism and product control. In this context, LiAlH4 reduction aligns with alcohols/amines from derivatives.'
          }
        ]
      }
    }
  ]
};
