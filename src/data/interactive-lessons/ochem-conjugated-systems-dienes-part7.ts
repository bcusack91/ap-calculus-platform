export const oChemConjugatedPart7Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'ochem-conjugated-systems-dienes-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Conjugated Systems and Dienes
      
      **Part 7 of 7 — Integrated Diene Review**
      
      This part focuses on integrating conjugation with aromatic and radical topics. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Diels-Alder reaction**: [4+2] cycloaddition of diene and dienophile
      - **s-cis conformation**: required diene geometry for Diels-Alder
      - **endo preference**: secondary orbital interactions favor endo transition state
      - **conjugation**: alternating pi and sigma bonds allowing delocalization
      
      ### Worked reaction example
      A representative transformation uses **HBr, low temperature**.
      
      1. Identify the governing mechanism: **electrophilic addition to conjugated diene**.
      2. Predict the dominant product pattern: **1,2-product favored**.
      3. Justify with a mechanistic note: kinetic control.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Diels-Alder reaction.',
            options: [
              'alternating pi and sigma bonds allowing delocalization',
              'required diene geometry for Diels-Alder',
              'secondary orbital interactions favor endo transition state',
              '[4+2] cycloaddition of diene and dienophile'
            ],
            correctAnswer: 3,
            explanation: 'Diels-Alder reaction is defined as: [4+2] cycloaddition of diene and dienophile.'
          },
          {
            question: 'A reaction in this lesson uses HBr, higher temperature and proceeds by reversible addition. What product pattern should you predict first?',
            options: [
              'cyclohexene adduct',
              '1,2-product favored',
              'allylic bromide',
              '1,4-product favored'
            ],
            correctAnswer: 3,
            explanation: 'With HBr, higher temperature, the benchmark outcome is 1,4-product favored. Mechanistic anchor: thermodynamic control.'
          }
        ]
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HBr, low temperature | electrophilic addition to conjugated diene | 1,2-product favored | kinetic control |
      | HBr, higher temperature | reversible addition | 1,4-product favored | thermodynamic control |
      | Br2 allylic conditions | allylic bromination | allylic bromide | resonance-stabilized radical |
      | diene + maleic anhydride, heat | Diels-Alder cycloaddition | cyclohexene adduct | concerted pericyclic process |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-conjugated-systems-dienes-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: [4+2] cycloaddition of diene and dienophile

      2) Term for: required diene geometry for Diels-Alder

      3) Product pattern expected under HBr, low temperature
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Diels-Alder reaction', 's-cis conformation', '1,2-product favored'],
        hint1: 'Blank 1 is the vocabulary term paired with: [4+2] cycloaddition of diene and dienophile.',
        hint2: 'Blank 2 corresponds to required diene geometry for Diels-Alder.',
        hint3: 'Use the worked example: HBr, low temperature gives 1,2-product favored.',
        explanation: 'Correct entries: Diels-Alder reaction, s-cis conformation, and 1,2-product favored. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'endo preference',
            options: ['required diene geometry for Diels-Alder', '[4+2] cycloaddition of diene and dienophile', 'alternating pi and sigma bonds allowing delocalization', 'secondary orbital interactions favor endo transition state']
          },
          {
            label: 'Expected pattern from HBr, higher temperature',
            options: ['1,2-product favored', 'allylic bromide', 'cyclohexene adduct', '1,4-product favored']
          },
          {
            label: 'Best exam strategy statement',
            options: ['1,2 and 1,4 products can both form from the same allylic intermediate.', 'Diels-Alder requires diene in s-cis conformation.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Conjugation lowers energy but does not make systems inert.']
          }
        ],
        correctAnswers: ['secondary orbital interactions favor endo transition state', '1,4-product favored', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-conjugated-systems-dienes-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Diels-Alder requires diene in s-cis conformation.
      - Conjugation lowers energy but does not make systems inert.
      - 1,2 and 1,4 products can both form from the same allylic intermediate.
      
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
      id: 'ochem-conjugated-systems-dienes-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on integrated diene review, a step uses Br2 allylic conditions. Which major product pattern is most defensible?',
            options: [
              'allylic bromide',
              '1,2-product favored',
              'cyclohexene adduct',
              '1,4-product favored'
            ],
            correctAnswer: 0,
            explanation: 'Br2 allylic conditions is classically associated with allylic bromide because resonance-stabilized radical.'
          },
          {
            question: 'A mechanism rationale cites allylic intermediate: cation/radical adjacent to double bond. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use allylic intermediate to justify why the pathway favors cyclohexene adduct under diene + maleic anhydride, heat.',
              'Treat allylic intermediate as a naming convention unrelated to mechanism.',
              'Use allylic intermediate only after final answer choice selection.',
              'Ignore allylic intermediate and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies allylic intermediate directly to mechanism and product control. In this context, diene + maleic anhydride, heat aligns with cyclohexene adduct.'
          }
        ]
      }
    }
  ]
};
