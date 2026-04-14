export const oChemAcidsBasesPart5Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'ochem-acids-bases-organic-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Organic Acids and Bases
      
      **Part 5 of 7 — Acid-Base in Multistep Mechanisms**
      
      This part focuses on tracking proton shuttles in substitution-elimination pathways. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **equilibrium control**: proton transfer favors side with weaker acid/base pair
      - **resonance stabilization**: delocalization that lowers basicity of a conjugate base
      - **inductive effect**: electron withdrawal through sigma bonds alters acidity
      - **steric hindrance**: bulk can reduce basic-site accessibility
      
      ### Worked reaction example
      A representative transformation uses **NaHCO3 wash**.
      
      1. Identify the governing mechanism: **weak base extraction**.
      2. Predict the dominant product pattern: **deprotonates carboxylic acids selectively**.
      3. Justify with a mechanistic note: used in acid/base separations.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for equilibrium control.',
            options: [
              'electron withdrawal through sigma bonds alters acidity',
              'bulk can reduce basic-site accessibility',
              'delocalization that lowers basicity of a conjugate base',
              'proton transfer favors side with weaker acid/base pair'
            ],
            correctAnswer: 3,
            explanation: 'equilibrium control is defined as: proton transfer favors side with weaker acid/base pair.'
          },
          {
            question: 'A reaction in this lesson uses CF3-substituted acid comparison and proceeds by strong inductive withdrawal. What product pattern should you predict first?',
            options: [
              'forms carbanion/enolate precursor',
              'less substituted enolate dominates',
              'lower pKa than alkyl analog',
              'deprotonates carboxylic acids selectively'
            ],
            correctAnswer: 2,
            explanation: 'With CF3-substituted acid comparison, the benchmark outcome is lower pKa than alkyl analog. Mechanistic anchor: conjugate base stabilized by -I effect.'
          }
        ]
      }
    },
    {
      id: 'ochem-acids-bases-organic-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NaHCO3 wash | weak base extraction | deprotonates carboxylic acids selectively | used in acid/base separations |
      | CF3-substituted acid comparison | strong inductive withdrawal | lower pKa than alkyl analog | conjugate base stabilized by -I effect |
      | NaH, THF | strong, non-nucleophilic deprotonation | forms carbanion/enolate precursor | driven by H2 gas evolution |
      | LDA, -78 °C | kinetic enolate conditions | less substituted enolate dominates | bulky base + low temperature |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: proton transfer favors side with weaker acid/base pair

      2) Term for: delocalization that lowers basicity of a conjugate base

      3) Product pattern expected under NaHCO3 wash
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['equilibrium control', 'resonance stabilization', 'deprotonates carboxylic acids selectively'],
        hint1: 'Blank 1 is the vocabulary term paired with: proton transfer favors side with weaker acid/base pair.',
        hint2: 'Blank 2 corresponds to delocalization that lowers basicity of a conjugate base.',
        hint3: 'Use the worked example: NaHCO3 wash gives deprotonates carboxylic acids selectively.',
        explanation: 'Correct entries: equilibrium control, resonance stabilization, and deprotonates carboxylic acids selectively. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'inductive effect',
            options: ['bulk can reduce basic-site accessibility', 'proton transfer favors side with weaker acid/base pair', 'electron withdrawal through sigma bonds alters acidity', 'delocalization that lowers basicity of a conjugate base']
          },
          {
            label: 'Expected pattern from CF3-substituted acid comparison',
            options: ['lower pKa than alkyl analog', 'deprotonates carboxylic acids selectively', 'forms carbanion/enolate precursor', 'less substituted enolate dominates']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Resonance and induction can outweigh hybridization in close pKa calls.', 'pKa comparisons require matching acid forms, not isolated anions.', 'A stronger base is not always the better nucleophile in protic solvent.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['electron withdrawal through sigma bonds alters acidity', 'lower pKa than alkyl analog', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - A stronger base is not always the better nucleophile in protic solvent.
      - pKa comparisons require matching acid forms, not isolated anions.
      - Resonance and induction can outweigh hybridization in close pKa calls.
      
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
      id: 'ochem-acids-bases-organic-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on acid-base in multistep mechanisms, a step uses NaH, THF. Which major product pattern is most defensible?',
            options: [
              'forms carbanion/enolate precursor',
              'deprotonates carboxylic acids selectively',
              'lower pKa than alkyl analog',
              'less substituted enolate dominates'
            ],
            correctAnswer: 0,
            explanation: 'NaH, THF is classically associated with forms carbanion/enolate precursor because driven by H2 gas evolution.'
          },
          {
            question: 'A mechanism rationale cites kinetic deprotonation: fast removal at less hindered site under low temperature. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use kinetic deprotonation only after final answer choice selection.',
              'Ignore kinetic deprotonation and choose products only by molecular weight.',
              'Treat kinetic deprotonation as a naming convention unrelated to mechanism.',
              'Use kinetic deprotonation to justify why the pathway favors less substituted enolate dominates under LDA, -78 °C.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies kinetic deprotonation directly to mechanism and product control. In this context, LDA, -78 °C aligns with less substituted enolate dominates.'
          }
        ]
      }
    }
  ]
};
