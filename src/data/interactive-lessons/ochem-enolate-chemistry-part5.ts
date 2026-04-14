export const oChemEnolatePart5Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'ochem-enolate-chemistry-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Enolate Chemistry
      
      **Part 5 of 7 — Michael and Robinson Sequences**
      
      This part focuses on constructing complex carbon skeletons with conjugate addition. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **aldol addition**: enolate adds to carbonyl giving beta-hydroxy product
      - **aldol condensation**: dehydration of aldol product to enone
      - **Claisen condensation**: ester enolate acylation yielding beta-keto ester
      - **Michael addition**: 1,4-conjugate addition to alpha,beta-unsaturated carbonyl
      
      ### Worked reaction example
      A representative transformation uses **ester + alkoxide base**.
      
      1. Identify the governing mechanism: **Claisen condensation**.
      2. Predict the dominant product pattern: **beta-keto ester**.
      3. Justify with a mechanistic note: requires matching alkoxide.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for aldol addition.',
            options: [
              'ester enolate acylation yielding beta-keto ester',
              'enolate adds to carbonyl giving beta-hydroxy product',
              'dehydration of aldol product to enone',
              '1,4-conjugate addition to alpha,beta-unsaturated carbonyl'
            ],
            correctAnswer: 1,
            explanation: 'aldol addition is defined as: enolate adds to carbonyl giving beta-hydroxy product.'
          },
          {
            question: 'A reaction in this lesson uses enolate + enone and proceeds by Michael addition. What product pattern should you predict first?',
            options: [
              '1,4-adduct',
              'thermodynamic enolate',
              'less substituted enolate',
              'beta-keto ester'
            ],
            correctAnswer: 0,
            explanation: 'With enolate + enone, the benchmark outcome is 1,4-adduct. Mechanistic anchor: soft nucleophile pathway.'
          }
        ]
      }
    },
    {
      id: 'ochem-enolate-chemistry-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | ester + alkoxide base | Claisen condensation | beta-keto ester | requires matching alkoxide |
      | enolate + enone | Michael addition | 1,4-adduct | soft nucleophile pathway |
      | LDA, THF, -78 °C | kinetic enolate generation | less substituted enolate | irreversible deprotonation |
      | NaOEt/EtOH | equilibrating base | thermodynamic enolate | reversible proton exchange |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: enolate adds to carbonyl giving beta-hydroxy product

      2) Term for: dehydration of aldol product to enone

      3) Product pattern expected under ester + alkoxide base
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aldol addition', 'aldol condensation', 'beta-keto ester'],
        hint1: 'Blank 1 is the vocabulary term paired with: enolate adds to carbonyl giving beta-hydroxy product.',
        hint2: 'Blank 2 corresponds to dehydration of aldol product to enone.',
        hint3: 'Use the worked example: ester + alkoxide base gives beta-keto ester.',
        explanation: 'Correct entries: aldol addition, aldol condensation, and beta-keto ester. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Claisen condensation',
            options: ['ester enolate acylation yielding beta-keto ester', '1,4-conjugate addition to alpha,beta-unsaturated carbonyl', 'dehydration of aldol product to enone', 'enolate adds to carbonyl giving beta-hydroxy product']
          },
          {
            label: 'Expected pattern from enolate + enone',
            options: ['1,4-adduct', 'less substituted enolate', 'thermodynamic enolate', 'beta-keto ester']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Not every base gives kinetic enolate control; conditions matter.', 'Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Aldol addition and condensation are distinct steps.']
          }
        ],
        correctAnswers: ['ester enolate acylation yielding beta-keto ester', '1,4-adduct', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Not every base gives kinetic enolate control; conditions matter.
      - Aldol addition and condensation are distinct steps.
      - Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.
      
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
      id: 'ochem-enolate-chemistry-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on michael and robinson sequences, a step uses LDA, THF, -78 °C. Which major product pattern is most defensible?',
            options: [
              'thermodynamic enolate',
              'beta-keto ester',
              '1,4-adduct',
              'less substituted enolate'
            ],
            correctAnswer: 3,
            explanation: 'LDA, THF, -78 °C is classically associated with less substituted enolate because irreversible deprotonation.'
          },
          {
            question: 'A mechanism rationale cites Robinson annulation: Michael addition followed by intramolecular aldol. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat Robinson annulation as a naming convention unrelated to mechanism.',
              'Use Robinson annulation only after final answer choice selection.',
              'Use Robinson annulation to justify why the pathway favors thermodynamic enolate under NaOEt/EtOH.',
              'Ignore Robinson annulation and choose products only by molecular weight.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies Robinson annulation directly to mechanism and product control. In this context, NaOEt/EtOH aligns with thermodynamic enolate.'
          }
        ]
      }
    }
  ]
};
