export const oChemAcidsBasesPart2Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'ochem-acids-bases-organic-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Organic Acids and Bases
      
      **Part 2 of 7 — pKa and Equilibrium Direction**
      
      This part focuses on predicting whether deprotonation is complete or reversible. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Brønsted base**: proton acceptor in a reaction step
      - **conjugate base**: species formed after an acid loses H+
      - **pKa**: log-scale measure of acid strength; lower means stronger acid
      - **equilibrium control**: proton transfer favors side with weaker acid/base pair
      
      ### Worked reaction example
      A representative transformation uses **LDA, -78 °C**.
      
      1. Identify the governing mechanism: **kinetic enolate conditions**.
      2. Predict the dominant product pattern: **less substituted enolate dominates**.
      3. Justify with a mechanistic note: bulky base + low temperature.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Brønsted base.',
            options: [
              'proton acceptor in a reaction step',
              'species formed after an acid loses H+',
              'proton transfer favors side with weaker acid/base pair',
              'log-scale measure of acid strength; lower means stronger acid'
            ],
            correctAnswer: 0,
            explanation: 'Brønsted base is defined as: proton acceptor in a reaction step.'
          },
          {
            question: 'A reaction in this lesson uses NaOEt/EtOH and proceeds by equilibrating basic medium. What product pattern should you predict first?',
            options: [
              'deprotonates carboxylic acids selectively',
              'less substituted enolate dominates',
              'protonates anionic intermediates',
              'thermodynamic enolate mixture'
            ],
            correctAnswer: 3,
            explanation: 'With NaOEt/EtOH, the benchmark outcome is thermodynamic enolate mixture. Mechanistic anchor: reversible proton transfer.'
          }
        ]
      }
    },
    {
      id: 'ochem-acids-bases-organic-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | LDA, -78 °C | kinetic enolate conditions | less substituted enolate dominates | bulky base + low temperature |
      | NaOEt/EtOH | equilibrating basic medium | thermodynamic enolate mixture | reversible proton transfer |
      | H3O+ workup | acidic quench | protonates anionic intermediates | restores neutral functional groups |
      | NaHCO3 wash | weak base extraction | deprotonates carboxylic acids selectively | used in acid/base separations |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: proton acceptor in a reaction step
      2) Term for: species formed after an acid loses H+
      3) Product pattern expected under LDA, -78 °C
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Brønsted base', 'conjugate base', 'less substituted enolate dominates'],
        hint1: 'Blank 1 is the vocabulary term paired with: proton acceptor in a reaction step.',
        hint2: 'Blank 2 corresponds to species formed after an acid loses H+.',
        hint3: 'Use the worked example: LDA, -78 °C gives less substituted enolate dominates.',
        explanation: 'Correct entries: Brønsted base, conjugate base, and less substituted enolate dominates. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'pKa',
            options: ['proton acceptor in a reaction step', 'proton transfer favors side with weaker acid/base pair', 'log-scale measure of acid strength; lower means stronger acid', 'species formed after an acid loses H+']
          },
          {
            label: 'Expected pattern from NaOEt/EtOH',
            options: ['less substituted enolate dominates', 'deprotonates carboxylic acids selectively', 'thermodynamic enolate mixture', 'protonates anionic intermediates']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Resonance and induction can outweigh hybridization in close pKa calls.', 'pKa comparisons require matching acid forms, not isolated anions.', 'An acid quench changes protonation state but usually not carbon skeleton connectivity.']
          }
        ],
        correctAnswers: ['log-scale measure of acid strength; lower means stronger acid', 'thermodynamic enolate mixture', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - pKa comparisons require matching acid forms, not isolated anions.
      - Resonance and induction can outweigh hybridization in close pKa calls.
      - An acid quench changes protonation state but usually not carbon skeleton connectivity.
      
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
      id: 'ochem-acids-bases-organic-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on pka and equilibrium direction, a step uses H3O+ workup. Which major product pattern is most defensible?',
            options: [
              'less substituted enolate dominates',
              'thermodynamic enolate mixture',
              'protonates anionic intermediates',
              'deprotonates carboxylic acids selectively'
            ],
            correctAnswer: 2,
            explanation: 'H3O+ workup is classically associated with protonates anionic intermediates because restores neutral functional groups.'
          },
          {
            question: 'A mechanism rationale cites resonance stabilization: delocalization that lowers basicity of a conjugate base. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use resonance stabilization only after final answer choice selection.',
              'Treat resonance stabilization as a naming convention unrelated to mechanism.',
              'Use resonance stabilization to justify why the pathway favors deprotonates carboxylic acids selectively under NaHCO3 wash.',
              'Ignore resonance stabilization and choose products only by molecular weight.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies resonance stabilization directly to mechanism and product control. In this context, NaHCO3 wash aligns with deprotonates carboxylic acids selectively.'
          }
        ]
      }
    }
  ]
};
