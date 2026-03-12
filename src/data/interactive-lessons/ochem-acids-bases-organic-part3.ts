export const oChemAcidsBasesPart3Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'ochem-acids-bases-organic-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Organic Acids and Bases
      
      **Part 3 of 7 — Resonance and Inductive Effects**
      
      This part focuses on comparing conjugate base stabilization in substituted acids. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **conjugate base**: species formed after an acid loses H+
      - **pKa**: log-scale measure of acid strength; lower means stronger acid
      - **equilibrium control**: proton transfer favors side with weaker acid/base pair
      - **resonance stabilization**: delocalization that lowers basicity of a conjugate base
      
      ### Worked reaction example
      A representative transformation uses **NaOEt/EtOH**.
      
      1. Identify the governing mechanism: **equilibrating basic medium**.
      2. Predict the dominant product pattern: **thermodynamic enolate mixture**.
      3. Justify with a mechanistic note: reversible proton transfer.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for conjugate base.',
            options: [
              'log-scale measure of acid strength; lower means stronger acid',
              'delocalization that lowers basicity of a conjugate base',
              'proton transfer favors side with weaker acid/base pair',
              'species formed after an acid loses H+'
            ],
            correctAnswer: 3,
            explanation: 'conjugate base is defined as: species formed after an acid loses H+.'
          },
          {
            question: 'A reaction in this lesson uses H3O+ workup and proceeds by acidic quench. What product pattern should you predict first?',
            options: [
              'thermodynamic enolate mixture',
              'deprotonates carboxylic acids selectively',
              'protonates anionic intermediates',
              'lower pKa than alkyl analog'
            ],
            correctAnswer: 2,
            explanation: 'With H3O+ workup, the benchmark outcome is protonates anionic intermediates. Mechanistic anchor: restores neutral functional groups.'
          }
        ]
      }
    },
    {
      id: 'ochem-acids-bases-organic-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NaOEt/EtOH | equilibrating basic medium | thermodynamic enolate mixture | reversible proton transfer |
      | H3O+ workup | acidic quench | protonates anionic intermediates | restores neutral functional groups |
      | NaHCO3 wash | weak base extraction | deprotonates carboxylic acids selectively | used in acid/base separations |
      | CF3-substituted acid comparison | strong inductive withdrawal | lower pKa than alkyl analog | conjugate base stabilized by -I effect |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: species formed after an acid loses H+
      2) Term for: log-scale measure of acid strength; lower means stronger acid
      3) Product pattern expected under NaOEt/EtOH
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['conjugate base', 'pKa', 'thermodynamic enolate mixture'],
        hint1: 'Blank 1 is the vocabulary term paired with: species formed after an acid loses H+.',
        hint2: 'Blank 2 corresponds to log-scale measure of acid strength; lower means stronger acid.',
        hint3: 'Use the worked example: NaOEt/EtOH gives thermodynamic enolate mixture.',
        explanation: 'Correct entries: conjugate base, pKa, and thermodynamic enolate mixture. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'equilibrium control',
            options: ['proton transfer favors side with weaker acid/base pair', 'log-scale measure of acid strength; lower means stronger acid', 'species formed after an acid loses H+', 'delocalization that lowers basicity of a conjugate base']
          },
          {
            label: 'Expected pattern from H3O+ workup',
            options: ['deprotonates carboxylic acids selectively', 'lower pKa than alkyl analog', 'protonates anionic intermediates', 'thermodynamic enolate mixture']
          },
          {
            label: 'Best exam strategy statement',
            options: ['An acid quench changes protonation state but usually not carbon skeleton connectivity.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Resonance and induction can outweigh hybridization in close pKa calls.', 'A stronger base is not always the better nucleophile in protic solvent.']
          }
        ],
        correctAnswers: ['proton transfer favors side with weaker acid/base pair', 'protonates anionic intermediates', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Resonance and induction can outweigh hybridization in close pKa calls.
      - An acid quench changes protonation state but usually not carbon skeleton connectivity.
      - A stronger base is not always the better nucleophile in protic solvent.
      
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
      id: 'ochem-acids-bases-organic-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on resonance and inductive effects, a step uses NaHCO3 wash. Which major product pattern is most defensible?',
            options: [
              'thermodynamic enolate mixture',
              'protonates anionic intermediates',
              'lower pKa than alkyl analog',
              'deprotonates carboxylic acids selectively'
            ],
            correctAnswer: 3,
            explanation: 'NaHCO3 wash is classically associated with deprotonates carboxylic acids selectively because used in acid/base separations.'
          },
          {
            question: 'A mechanism rationale cites inductive effect: electron withdrawal through sigma bonds alters acidity. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use inductive effect only after final answer choice selection.',
              'Treat inductive effect as a naming convention unrelated to mechanism.',
              'Ignore inductive effect and choose products only by molecular weight.',
              'Use inductive effect to justify why the pathway favors lower pKa than alkyl analog under CF3-substituted acid comparison.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies inductive effect directly to mechanism and product control. In this context, CF3-substituted acid comparison aligns with lower pKa than alkyl analog.'
          }
        ]
      }
    }
  ]
};
