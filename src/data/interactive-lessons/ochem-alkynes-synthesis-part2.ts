export const oChemAlkynesPart2Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'ochem-alkynes-synthesis-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Alkyne Synthesis and Reactions
      
      **Part 2 of 7 — Acetylide Formation and Alkylation**
      
      This part focuses on forming carbon-carbon bonds with acetylide nucleophiles. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **acetylide anion**: strong nucleophile/base formed by deprotonation
      - **SN2 alkylation**: acetylide attacks primary alkyl halide
      - **Lindlar catalyst**: poisoned catalyst giving cis alkene from alkyne
      - **dissolving metal reduction**: Na/NH3 gives trans alkene from alkyne
      
      ### Worked reaction example
      A representative transformation uses **acetylide + 1° alkyl bromide**.
      
      1. Identify the governing mechanism: **SN2 C-C bond formation**.
      2. Predict the dominant product pattern: **chain-extended alkyne**.
      3. Justify with a mechanistic note: avoid 2°/3° substrates.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for acetylide anion.',
            options: [
              'Na/NH3 gives trans alkene from alkyne',
              'acetylide attacks primary alkyl halide',
              'poisoned catalyst giving cis alkene from alkyne',
              'strong nucleophile/base formed by deprotonation'
            ],
            correctAnswer: 3,
            explanation: 'acetylide anion is defined as: strong nucleophile/base formed by deprotonation.'
          },
          {
            question: 'A reaction in this lesson uses H2, Lindlar and proceeds by partial syn hydrogenation. What product pattern should you predict first?',
            options: [
              'chain-extended alkyne',
              'trans alkene',
              'cis alkene',
              'ketone after tautomerization'
            ],
            correctAnswer: 2,
            explanation: 'With H2, Lindlar, the benchmark outcome is cis alkene. Mechanistic anchor: stops before alkane.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | acetylide + 1° alkyl bromide | SN2 C-C bond formation | chain-extended alkyne | avoid 2°/3° substrates |
      | H2, Lindlar | partial syn hydrogenation | cis alkene | stops before alkane |
      | Na, NH3(l) | dissolving metal reduction | trans alkene | anti addition pattern |
      | HgSO4, H2SO4, H2O | Markovnikov hydration | ketone after tautomerization | enol not isolated |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: strong nucleophile/base formed by deprotonation
      2) Term for: acetylide attacks primary alkyl halide
      3) Product pattern expected under acetylide + 1° alkyl bromide
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['acetylide anion', 'SN2 alkylation', 'chain-extended alkyne'],
        hint1: 'Blank 1 is the vocabulary term paired with: strong nucleophile/base formed by deprotonation.',
        hint2: 'Blank 2 corresponds to acetylide attacks primary alkyl halide.',
        hint3: 'Use the worked example: acetylide + 1° alkyl bromide gives chain-extended alkyne.',
        explanation: 'Correct entries: acetylide anion, SN2 alkylation, and chain-extended alkyne. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lindlar catalyst',
            options: ['Na/NH3 gives trans alkene from alkyne', 'strong nucleophile/base formed by deprotonation', 'acetylide attacks primary alkyl halide', 'poisoned catalyst giving cis alkene from alkyne']
          },
          {
            label: 'Expected pattern from H2, Lindlar',
            options: ['cis alkene', 'trans alkene', 'chain-extended alkyne', 'ketone after tautomerization']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Hydration products are usually carbonyls after tautomerization, not stable enols.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.', 'Lindlar and dissolving metal reductions give opposite alkene stereochemistry.']
          }
        ],
        correctAnswers: ['poisoned catalyst giving cis alkene from alkyne', 'cis alkene', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Hydration products are usually carbonyls after tautomerization, not stable enols.
      - Lindlar and dissolving metal reductions give opposite alkene stereochemistry.
      - Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.
      
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
      id: 'ochem-alkynes-synthesis-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on acetylide formation and alkylation, a step uses Na, NH3(l). Which major product pattern is most defensible?',
            options: [
              'chain-extended alkyne',
              'cis alkene',
              'trans alkene',
              'ketone after tautomerization'
            ],
            correctAnswer: 2,
            explanation: 'Na, NH3(l) is classically associated with trans alkene because anti addition pattern.'
          },
          {
            question: 'A mechanism rationale cites tautomerization: enol rearranges to carbonyl form. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use tautomerization to justify why the pathway favors ketone after tautomerization under HgSO4, H2SO4, H2O.',
              'Treat tautomerization as a naming convention unrelated to mechanism.',
              'Ignore tautomerization and choose products only by molecular weight.',
              'Use tautomerization only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies tautomerization directly to mechanism and product control. In this context, HgSO4, H2SO4, H2O aligns with ketone after tautomerization.'
          }
        ]
      }
    }
  ]
};
