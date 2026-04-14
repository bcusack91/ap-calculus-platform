export const oChemEnolatePart7Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'ochem-enolate-chemistry-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Enolate Chemistry
      
      **Part 7 of 7 — Comprehensive Enolate Synthesis Review**
      
      This part focuses on integrating aldol, Claisen, and Michael in exam synthesis. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Claisen condensation**: ester enolate acylation yielding beta-keto ester
      - **Michael addition**: 1,4-conjugate addition to alpha,beta-unsaturated carbonyl
      - **Robinson annulation**: Michael addition followed by intramolecular aldol
      - **alpha hydrogen**: proton adjacent to carbonyl and relatively acidic
      
      ### Worked reaction example
      A representative transformation uses **LDA, THF, -78 °C**.
      
      1. Identify the governing mechanism: **kinetic enolate generation**.
      2. Predict the dominant product pattern: **less substituted enolate**.
      3. Justify with a mechanistic note: irreversible deprotonation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Claisen condensation.',
            options: [
              'Michael addition followed by intramolecular aldol',
              'proton adjacent to carbonyl and relatively acidic',
              '1,4-conjugate addition to alpha,beta-unsaturated carbonyl',
              'ester enolate acylation yielding beta-keto ester'
            ],
            correctAnswer: 3,
            explanation: 'Claisen condensation is defined as: ester enolate acylation yielding beta-keto ester.'
          },
          {
            question: 'A reaction in this lesson uses NaOEt/EtOH and proceeds by equilibrating base. What product pattern should you predict first?',
            options: [
              'beta-hydroxy carbonyl',
              'less substituted enolate',
              'thermodynamic enolate',
              'alpha,beta-unsaturated carbonyl'
            ],
            correctAnswer: 2,
            explanation: 'With NaOEt/EtOH, the benchmark outcome is thermodynamic enolate. Mechanistic anchor: reversible proton exchange.'
          }
        ]
      }
    },
    {
      id: 'ochem-enolate-chemistry-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | LDA, THF, -78 °C | kinetic enolate generation | less substituted enolate | irreversible deprotonation |
      | NaOEt/EtOH | equilibrating base | thermodynamic enolate | reversible proton exchange |
      | enolate + aldehyde | aldol addition | beta-hydroxy carbonyl | new C-C bond formed |
      | aldol product, heat | dehydration | alpha,beta-unsaturated carbonyl | conjugation drives elimination |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: ester enolate acylation yielding beta-keto ester

      2) Term for: 1,4-conjugate addition to alpha,beta-unsaturated carbonyl

      3) Product pattern expected under LDA, THF, -78 °C
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Claisen condensation', 'Michael addition', 'less substituted enolate'],
        hint1: 'Blank 1 is the vocabulary term paired with: ester enolate acylation yielding beta-keto ester.',
        hint2: 'Blank 2 corresponds to 1,4-conjugate addition to alpha,beta-unsaturated carbonyl.',
        hint3: 'Use the worked example: LDA, THF, -78 °C gives less substituted enolate.',
        explanation: 'Correct entries: Claisen condensation, Michael addition, and less substituted enolate. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Robinson annulation',
            options: ['ester enolate acylation yielding beta-keto ester', 'proton adjacent to carbonyl and relatively acidic', '1,4-conjugate addition to alpha,beta-unsaturated carbonyl', 'Michael addition followed by intramolecular aldol']
          },
          {
            label: 'Expected pattern from NaOEt/EtOH',
            options: ['beta-hydroxy carbonyl', 'thermodynamic enolate', 'alpha,beta-unsaturated carbonyl', 'less substituted enolate']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Conjugate (1,4) and direct (1,2) addition give different bond placements.', 'Not every base gives kinetic enolate control; conditions matter.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.']
          }
        ],
        correctAnswers: ['Michael addition followed by intramolecular aldol', 'thermodynamic enolate', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.
      - Conjugate (1,4) and direct (1,2) addition give different bond placements.
      - Not every base gives kinetic enolate control; conditions matter.
      
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
      id: 'ochem-enolate-chemistry-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on comprehensive enolate synthesis review, a step uses enolate + aldehyde. Which major product pattern is most defensible?',
            options: [
              'beta-hydroxy carbonyl',
              'thermodynamic enolate',
              'alpha,beta-unsaturated carbonyl',
              'less substituted enolate'
            ],
            correctAnswer: 0,
            explanation: 'enolate + aldehyde is classically associated with beta-hydroxy carbonyl because new C-C bond formed.'
          },
          {
            question: 'A mechanism rationale cites enolate: resonance-stabilized anion of carbonyl compound. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use enolate to justify why the pathway favors alpha,beta-unsaturated carbonyl under aldol product, heat.',
              'Ignore enolate and choose products only by molecular weight.',
              'Treat enolate as a naming convention unrelated to mechanism.',
              'Use enolate only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies enolate directly to mechanism and product control. In this context, aldol product, heat aligns with alpha,beta-unsaturated carbonyl.'
          }
        ]
      }
    }
  ]
};
