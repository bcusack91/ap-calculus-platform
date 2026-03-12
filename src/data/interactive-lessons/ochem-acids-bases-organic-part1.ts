export const oChemAcidsBasesPart1Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'ochem-acids-bases-organic-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Organic Acids and Bases
      
      **Part 1 of 7 — Brønsted-Lowry Language**
      
      This part focuses on ranking proton transfer steps in carbonyl chemistry. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Brønsted acid**: proton donor in a reaction step
      - **Brønsted base**: proton acceptor in a reaction step
      - **conjugate base**: species formed after an acid loses H+
      - **pKa**: log-scale measure of acid strength; lower means stronger acid
      
      ### Worked reaction example
      A representative transformation uses **NaH, THF**.
      
      1. Identify the governing mechanism: **strong, non-nucleophilic deprotonation**.
      2. Predict the dominant product pattern: **forms carbanion/enolate precursor**.
      3. Justify with a mechanistic note: driven by H2 gas evolution.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Brønsted acid.',
            options: [
              'proton acceptor in a reaction step',
              'log-scale measure of acid strength; lower means stronger acid',
              'proton donor in a reaction step',
              'species formed after an acid loses H+'
            ],
            correctAnswer: 2,
            explanation: 'Brønsted acid is defined as: proton donor in a reaction step.'
          },
          {
            question: 'A reaction in this lesson uses LDA, -78 °C and proceeds by kinetic enolate conditions. What product pattern should you predict first?',
            options: [
              'protonates anionic intermediates',
              'less substituted enolate dominates',
              'forms carbanion/enolate precursor',
              'thermodynamic enolate mixture'
            ],
            correctAnswer: 1,
            explanation: 'With LDA, -78 °C, the benchmark outcome is less substituted enolate dominates. Mechanistic anchor: bulky base + low temperature.'
          }
        ]
      }
    },
    {
      id: 'ochem-acids-bases-organic-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NaH, THF | strong, non-nucleophilic deprotonation | forms carbanion/enolate precursor | driven by H2 gas evolution |
      | LDA, -78 °C | kinetic enolate conditions | less substituted enolate dominates | bulky base + low temperature |
      | NaOEt/EtOH | equilibrating basic medium | thermodynamic enolate mixture | reversible proton transfer |
      | H3O+ workup | acidic quench | protonates anionic intermediates | restores neutral functional groups |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-acids-bases-organic-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: proton donor in a reaction step
      2) Term for: proton acceptor in a reaction step
      3) Product pattern expected under NaH, THF
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Brønsted acid', 'Brønsted base', 'forms carbanion/enolate precursor'],
        hint1: 'Blank 1 is the vocabulary term paired with: proton donor in a reaction step.',
        hint2: 'Blank 2 corresponds to proton acceptor in a reaction step.',
        hint3: 'Use the worked example: NaH, THF gives forms carbanion/enolate precursor.',
        explanation: 'Correct entries: Brønsted acid, Brønsted base, and forms carbanion/enolate precursor. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'conjugate base',
            options: ['proton donor in a reaction step', 'log-scale measure of acid strength; lower means stronger acid', 'proton acceptor in a reaction step', 'species formed after an acid loses H+']
          },
          {
            label: 'Expected pattern from LDA, -78 °C',
            options: ['protonates anionic intermediates', 'thermodynamic enolate mixture', 'forms carbanion/enolate precursor', 'less substituted enolate dominates']
          },
          {
            label: 'Best exam strategy statement',
            options: ['A stronger base is not always the better nucleophile in protic solvent.', 'pKa comparisons require matching acid forms, not isolated anions.', 'Resonance and induction can outweigh hybridization in close pKa calls.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['species formed after an acid loses H+', 'less substituted enolate dominates', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-acids-bases-organic-p1-s6-strategy',
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
      id: 'ochem-acids-bases-organic-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on brønsted-lowry language, a step uses NaOEt/EtOH. Which major product pattern is most defensible?',
            options: [
              'protonates anionic intermediates',
              'forms carbanion/enolate precursor',
              'thermodynamic enolate mixture',
              'less substituted enolate dominates'
            ],
            correctAnswer: 2,
            explanation: 'NaOEt/EtOH is classically associated with thermodynamic enolate mixture because reversible proton transfer.'
          },
          {
            question: 'A mechanism rationale cites equilibrium control: proton transfer favors side with weaker acid/base pair. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use equilibrium control to justify why the pathway favors protonates anionic intermediates under H3O+ workup.',
              'Use equilibrium control only after final answer choice selection.',
              'Ignore equilibrium control and choose products only by molecular weight.',
              'Treat equilibrium control as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies equilibrium control directly to mechanism and product control. In this context, H3O+ workup aligns with protonates anionic intermediates.'
          }
        ]
      }
    }
  ]
};
