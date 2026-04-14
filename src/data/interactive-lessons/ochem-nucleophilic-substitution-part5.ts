export const oChemSNPart5Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'ochem-nucleophilic-substitution-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Nucleophilic Substitution
      
      **Part 5 of 7 — Competition with Elimination**
      
      This part focuses on balancing substitution versus elimination under exam constraints. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **protic solvent**: solvent that hydrogen-bonds and can dampen nucleophiles
      - **aprotic solvent**: polar solvent that enhances anionic nucleophile reactivity
      - **Walden inversion**: configuration inversion at SN2 stereocenter
      - **racemization**: partial mixture from planar carbocation attack
      
      ### Worked reaction example
      A representative transformation uses **allylic halide + nucleophile**.
      
      1. Identify the governing mechanism: **substitution with resonance stabilization**.
      2. Predict the dominant product pattern: **allylic substitution product**.
      3. Justify with a mechanistic note: fast relative to unactivated analog.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for protic solvent.',
            options: [
              'polar solvent that enhances anionic nucleophile reactivity',
              'partial mixture from planar carbocation attack',
              'solvent that hydrogen-bonds and can dampen nucleophiles',
              'configuration inversion at SN2 stereocenter'
            ],
            correctAnswer: 2,
            explanation: 'protic solvent is defined as: solvent that hydrogen-bonds and can dampen nucleophiles.'
          },
          {
            question: 'A reaction in this lesson uses strong base, heat on 2° halide and proceeds by E2 competition. What product pattern should you predict first?',
            options: [
              'tertiary alcohol substitution',
              'allylic substitution product',
              'alkene side product',
              'nitrile substitution product'
            ],
            correctAnswer: 2,
            explanation: 'With strong base, heat on 2° halide, the benchmark outcome is alkene side product. Mechanistic anchor: must account for elimination.'
          }
        ]
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | allylic halide + nucleophile | substitution with resonance stabilization | allylic substitution product | fast relative to unactivated analog |
      | strong base, heat on 2° halide | E2 competition | alkene side product | must account for elimination |
      | 1° alkyl bromide + NaCN in DMSO | SN2 | nitrile substitution product | strong nucleophile + aprotic solvent |
      | 3° alkyl chloride in H2O | SN1 solvolysis | tertiary alcohol substitution | carbocation intermediate |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-nucleophilic-substitution-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: solvent that hydrogen-bonds and can dampen nucleophiles

      2) Term for: polar solvent that enhances anionic nucleophile reactivity

      3) Product pattern expected under allylic halide + nucleophile
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['protic solvent', 'aprotic solvent', 'allylic substitution product'],
        hint1: 'Blank 1 is the vocabulary term paired with: solvent that hydrogen-bonds and can dampen nucleophiles.',
        hint2: 'Blank 2 corresponds to polar solvent that enhances anionic nucleophile reactivity.',
        hint3: 'Use the worked example: allylic halide + nucleophile gives allylic substitution product.',
        explanation: 'Correct entries: protic solvent, aprotic solvent, and allylic substitution product. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Walden inversion',
            options: ['polar solvent that enhances anionic nucleophile reactivity', 'solvent that hydrogen-bonds and can dampen nucleophiles', 'partial mixture from planar carbocation attack', 'configuration inversion at SN2 stereocenter']
          },
          {
            label: 'Expected pattern from strong base, heat on 2° halide',
            options: ['tertiary alcohol substitution', 'nitrile substitution product', 'allylic substitution product', 'alkene side product']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Solvent effects can reverse expected nucleophile ordering.', 'Strong nucleophile does not guarantee SN2 on heavily hindered substrates.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'SN1 stereochemistry often trends toward racemization, not full inversion.']
          }
        ],
        correctAnswers: ['configuration inversion at SN2 stereocenter', 'alkene side product', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-nucleophilic-substitution-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Strong nucleophile does not guarantee SN2 on heavily hindered substrates.
      - SN1 stereochemistry often trends toward racemization, not full inversion.
      - Solvent effects can reverse expected nucleophile ordering.
      
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
      id: 'ochem-nucleophilic-substitution-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on competition with elimination, a step uses 1° alkyl bromide + NaCN in DMSO. Which major product pattern is most defensible?',
            options: [
              'allylic substitution product',
              'alkene side product',
              'tertiary alcohol substitution',
              'nitrile substitution product'
            ],
            correctAnswer: 3,
            explanation: '1° alkyl bromide + NaCN in DMSO is classically associated with nitrile substitution product because strong nucleophile + aprotic solvent.'
          },
          {
            question: 'A mechanism rationale cites substrate sterics: crowding around electrophilic carbon controls pathway. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use substrate sterics to justify why the pathway favors tertiary alcohol substitution under 3° alkyl chloride in H2O.',
              'Use substrate sterics only after final answer choice selection.',
              'Treat substrate sterics as a naming convention unrelated to mechanism.',
              'Ignore substrate sterics and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies substrate sterics directly to mechanism and product control. In this context, 3° alkyl chloride in H2O aligns with tertiary alcohol substitution.'
          }
        ]
      }
    }
  ]
};
