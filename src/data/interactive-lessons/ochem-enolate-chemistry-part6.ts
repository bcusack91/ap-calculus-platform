export const oChemEnolatePart6Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'ochem-enolate-chemistry-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Enolate Chemistry
      
      **Part 6 of 7 — Retrosynthesis with Enolate Logic**
      
      This part focuses on breaking targets into enolate and electrophile synthons. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **aldol condensation**: dehydration of aldol product to enone
      - **Claisen condensation**: ester enolate acylation yielding beta-keto ester
      - **Michael addition**: 1,4-conjugate addition to alpha,beta-unsaturated carbonyl
      - **Robinson annulation**: Michael addition followed by intramolecular aldol
      
      ### Worked reaction example
      A representative transformation uses **enolate + enone**.
      
      1. Identify the governing mechanism: **Michael addition**.
      2. Predict the dominant product pattern: **1,4-adduct**.
      3. Justify with a mechanistic note: soft nucleophile pathway.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for aldol condensation.',
            options: [
              'Michael addition followed by intramolecular aldol',
              'ester enolate acylation yielding beta-keto ester',
              '1,4-conjugate addition to alpha,beta-unsaturated carbonyl',
              'dehydration of aldol product to enone'
            ],
            correctAnswer: 3,
            explanation: 'aldol condensation is defined as: dehydration of aldol product to enone.'
          },
          {
            question: 'A reaction in this lesson uses LDA, THF, -78 °C and proceeds by kinetic enolate generation. What product pattern should you predict first?',
            options: [
              'thermodynamic enolate',
              'less substituted enolate',
              '1,4-adduct',
              'beta-hydroxy carbonyl'
            ],
            correctAnswer: 1,
            explanation: 'With LDA, THF, -78 °C, the benchmark outcome is less substituted enolate. Mechanistic anchor: irreversible deprotonation.'
          }
        ]
      }
    },
    {
      id: 'ochem-enolate-chemistry-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | enolate + enone | Michael addition | 1,4-adduct | soft nucleophile pathway |
      | LDA, THF, -78 °C | kinetic enolate generation | less substituted enolate | irreversible deprotonation |
      | NaOEt/EtOH | equilibrating base | thermodynamic enolate | reversible proton exchange |
      | enolate + aldehyde | aldol addition | beta-hydroxy carbonyl | new C-C bond formed |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-enolate-chemistry-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: dehydration of aldol product to enone
      2) Term for: ester enolate acylation yielding beta-keto ester
      3) Product pattern expected under enolate + enone
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aldol condensation', 'Claisen condensation', '1,4-adduct'],
        hint1: 'Blank 1 is the vocabulary term paired with: dehydration of aldol product to enone.',
        hint2: 'Blank 2 corresponds to ester enolate acylation yielding beta-keto ester.',
        hint3: 'Use the worked example: enolate + enone gives 1,4-adduct.',
        explanation: 'Correct entries: aldol condensation, Claisen condensation, and 1,4-adduct. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Michael addition',
            options: ['1,4-conjugate addition to alpha,beta-unsaturated carbonyl', 'Michael addition followed by intramolecular aldol', 'dehydration of aldol product to enone', 'ester enolate acylation yielding beta-keto ester']
          },
          {
            label: 'Expected pattern from LDA, THF, -78 °C',
            options: ['beta-hydroxy carbonyl', '1,4-adduct', 'less substituted enolate', 'thermodynamic enolate']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.', 'Aldol addition and condensation are distinct steps.', 'Conjugate (1,4) and direct (1,2) addition give different bond placements.']
          }
        ],
        correctAnswers: ['1,4-conjugate addition to alpha,beta-unsaturated carbonyl', 'less substituted enolate', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-enolate-chemistry-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Aldol addition and condensation are distinct steps.
      - Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.
      - Conjugate (1,4) and direct (1,2) addition give different bond placements.
      
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
      id: 'ochem-enolate-chemistry-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on retrosynthesis with enolate logic, a step uses NaOEt/EtOH. Which major product pattern is most defensible?',
            options: [
              '1,4-adduct',
              'thermodynamic enolate',
              'beta-hydroxy carbonyl',
              'less substituted enolate'
            ],
            correctAnswer: 1,
            explanation: 'NaOEt/EtOH is classically associated with thermodynamic enolate because reversible proton exchange.'
          },
          {
            question: 'A mechanism rationale cites alpha hydrogen: proton adjacent to carbonyl and relatively acidic. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore alpha hydrogen and choose products only by molecular weight.',
              'Use alpha hydrogen to justify why the pathway favors beta-hydroxy carbonyl under enolate + aldehyde.',
              'Use alpha hydrogen only after final answer choice selection.',
              'Treat alpha hydrogen as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies alpha hydrogen directly to mechanism and product control. In this context, enolate + aldehyde aligns with beta-hydroxy carbonyl.'
          }
        ]
      }
    }
  ]
};
