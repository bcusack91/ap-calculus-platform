export const oChemAcidsBasesPart4Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'ochem-acids-bases-organic-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Organic Acids and Bases
      
      **Part 4 of 7 — Base Strength and Solvent Effects**
      
      This part focuses on choosing between LDA, NaH, and alkoxide bases. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **pKa**: log-scale measure of acid strength; lower means stronger acid
      - **equilibrium control**: proton transfer favors side with weaker acid/base pair
      - **resonance stabilization**: delocalization that lowers basicity of a conjugate base
      - **inductive effect**: electron withdrawal through sigma bonds alters acidity
      
      ### Worked reaction example
      A representative transformation uses **H3O+ workup**.
      
      1. Identify the governing mechanism: **acidic quench**.
      2. Predict the dominant product pattern: **protonates anionic intermediates**.
      3. Justify with a mechanistic note: restores neutral functional groups.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for pKa.',
            options: [
              'log-scale measure of acid strength; lower means stronger acid',
              'electron withdrawal through sigma bonds alters acidity',
              'proton transfer favors side with weaker acid/base pair',
              'delocalization that lowers basicity of a conjugate base'
            ],
            correctAnswer: 0,
            explanation: 'pKa is defined as: log-scale measure of acid strength; lower means stronger acid.'
          },
          {
            question: 'A reaction in this lesson uses NaHCO3 wash and proceeds by weak base extraction. What product pattern should you predict first?',
            options: [
              'forms carbanion/enolate precursor',
              'protonates anionic intermediates',
              'lower pKa than alkyl analog',
              'deprotonates carboxylic acids selectively'
            ],
            correctAnswer: 3,
            explanation: 'With NaHCO3 wash, the benchmark outcome is deprotonates carboxylic acids selectively. Mechanistic anchor: used in acid/base separations.'
          }
        ]
      }
    },
    {
      id: 'ochem-acids-bases-organic-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | H3O+ workup | acidic quench | protonates anionic intermediates | restores neutral functional groups |
      | NaHCO3 wash | weak base extraction | deprotonates carboxylic acids selectively | used in acid/base separations |
      | CF3-substituted acid comparison | strong inductive withdrawal | lower pKa than alkyl analog | conjugate base stabilized by -I effect |
      | NaH, THF | strong, non-nucleophilic deprotonation | forms carbanion/enolate precursor | driven by H2 gas evolution |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: log-scale measure of acid strength; lower means stronger acid

      2) Term for: proton transfer favors side with weaker acid/base pair

      3) Product pattern expected under H3O+ workup
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['pKa', 'equilibrium control', 'protonates anionic intermediates'],
        hint1: 'Blank 1 is the vocabulary term paired with: log-scale measure of acid strength; lower means stronger acid.',
        hint2: 'Blank 2 corresponds to proton transfer favors side with weaker acid/base pair.',
        hint3: 'Use the worked example: H3O+ workup gives protonates anionic intermediates.',
        explanation: 'Correct entries: pKa, equilibrium control, and protonates anionic intermediates. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'resonance stabilization',
            options: ['log-scale measure of acid strength; lower means stronger acid', 'proton transfer favors side with weaker acid/base pair', 'electron withdrawal through sigma bonds alters acidity', 'delocalization that lowers basicity of a conjugate base']
          },
          {
            label: 'Expected pattern from NaHCO3 wash',
            options: ['forms carbanion/enolate precursor', 'protonates anionic intermediates', 'lower pKa than alkyl analog', 'deprotonates carboxylic acids selectively']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'pKa comparisons require matching acid forms, not isolated anions.', 'An acid quench changes protonation state but usually not carbon skeleton connectivity.', 'A stronger base is not always the better nucleophile in protic solvent.']
          }
        ],
        correctAnswers: ['delocalization that lowers basicity of a conjugate base', 'deprotonates carboxylic acids selectively', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - An acid quench changes protonation state but usually not carbon skeleton connectivity.
      - A stronger base is not always the better nucleophile in protic solvent.
      - pKa comparisons require matching acid forms, not isolated anions.
      
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
      id: 'ochem-acids-bases-organic-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on base strength and solvent effects, a step uses CF3-substituted acid comparison. Which major product pattern is most defensible?',
            options: [
              'lower pKa than alkyl analog',
              'deprotonates carboxylic acids selectively',
              'forms carbanion/enolate precursor',
              'protonates anionic intermediates'
            ],
            correctAnswer: 0,
            explanation: 'CF3-substituted acid comparison is classically associated with lower pKa than alkyl analog because conjugate base stabilized by -I effect.'
          },
          {
            question: 'A mechanism rationale cites steric hindrance: bulk can reduce basic-site accessibility. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat steric hindrance as a naming convention unrelated to mechanism.',
              'Use steric hindrance to justify why the pathway favors forms carbanion/enolate precursor under NaH, THF.',
              'Use steric hindrance only after final answer choice selection.',
              'Ignore steric hindrance and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies steric hindrance directly to mechanism and product control. In this context, NaH, THF aligns with forms carbanion/enolate precursor.'
          }
        ]
      }
    }
  ]
};
