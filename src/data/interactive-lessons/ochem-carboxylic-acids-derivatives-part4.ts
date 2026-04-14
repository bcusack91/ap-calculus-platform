export const oChemCarboxylicAcidsPart4Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'ochem-carboxylic-acids-derivatives-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Carboxylic Acids and Derivatives
      
      **Part 4 of 7 — Amide Formation and Cleavage**
      
      This part focuses on forming amides from activated carboxylic acids. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **amide**: least reactive common derivative due to resonance donation
      - **tetrahedral intermediate**: addition intermediate before elimination
      - **nucleophilic acyl substitution**: addition-elimination at acyl carbon
      - **Fischer esterification**: acid-catalyzed carboxylic acid + alcohol condensation
      
      ### Worked reaction example
      A representative transformation uses **RCOCl + NH3**.
      
      1. Identify the governing mechanism: **amidation**.
      2. Predict the dominant product pattern: **primary amide**.
      3. Justify with a mechanistic note: requires base scavenging for HCl.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for amide.',
            options: [
              'acid-catalyzed carboxylic acid + alcohol condensation',
              'addition intermediate before elimination',
              'addition-elimination at acyl carbon',
              'least reactive common derivative due to resonance donation'
            ],
            correctAnswer: 3,
            explanation: 'amide is defined as: least reactive common derivative due to resonance donation.'
          },
          {
            question: 'A reaction in this lesson uses amide + H3O+, heat and proceeds by acidic hydrolysis. What product pattern should you predict first?',
            options: [
              'primary amide',
              'alcohols/amines from derivatives',
              'ester',
              'carboxylic acid + ammonium'
            ],
            correctAnswer: 3,
            explanation: 'With amide + H3O+, heat, the benchmark outcome is carboxylic acid + ammonium. Mechanistic anchor: harsh conditions required.'
          }
        ]
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCOCl + NH3 | amidation | primary amide | requires base scavenging for HCl |
      | amide + H3O+, heat | acidic hydrolysis | carboxylic acid + ammonium | harsh conditions required |
      | LiAlH4 reduction | strong hydride delivery | alcohols/amines from derivatives | workup controls isolated form |
      | RCOCl + ROH, pyridine | acyl substitution | ester | fast due to good chloride leaving group |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: least reactive common derivative due to resonance donation

      2) Term for: addition intermediate before elimination

      3) Product pattern expected under RCOCl + NH3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['amide', 'tetrahedral intermediate', 'primary amide'],
        hint1: 'Blank 1 is the vocabulary term paired with: least reactive common derivative due to resonance donation.',
        hint2: 'Blank 2 corresponds to addition intermediate before elimination.',
        hint3: 'Use the worked example: RCOCl + NH3 gives primary amide.',
        explanation: 'Correct entries: amide, tetrahedral intermediate, and primary amide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nucleophilic acyl substitution',
            options: ['least reactive common derivative due to resonance donation', 'addition-elimination at acyl carbon', 'addition intermediate before elimination', 'acid-catalyzed carboxylic acid + alcohol condensation']
          },
          {
            label: 'Expected pattern from amide + H3O+, heat',
            options: ['ester', 'carboxylic acid + ammonium', 'alcohols/amines from derivatives', 'primary amide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Saponification gives carboxylate until acidic workup protonates it.', 'Derivative reactivity tracks leaving-group quality and resonance donation.', 'Amides are difficult to hydrolyze under mild conditions.']
          }
        ],
        correctAnswers: ['addition-elimination at acyl carbon', 'carboxylic acid + ammonium', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-carboxylic-acids-derivatives-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Saponification gives carboxylate until acidic workup protonates it.
      - Derivative reactivity tracks leaving-group quality and resonance donation.
      - Amides are difficult to hydrolyze under mild conditions.
      
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
      id: 'ochem-carboxylic-acids-derivatives-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on amide formation and cleavage, a step uses LiAlH4 reduction. Which major product pattern is most defensible?',
            options: [
              'primary amide',
              'alcohols/amines from derivatives',
              'carboxylic acid + ammonium',
              'ester'
            ],
            correctAnswer: 1,
            explanation: 'LiAlH4 reduction is classically associated with alcohols/amines from derivatives because workup controls isolated form.'
          },
          {
            question: 'A mechanism rationale cites saponification: base-promoted irreversible ester hydrolysis. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use saponification to justify why the pathway favors ester under RCOCl + ROH, pyridine.',
              'Ignore saponification and choose products only by molecular weight.',
              'Treat saponification as a naming convention unrelated to mechanism.',
              'Use saponification only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies saponification directly to mechanism and product control. In this context, RCOCl + ROH, pyridine aligns with ester.'
          }
        ]
      }
    }
  ]
};
