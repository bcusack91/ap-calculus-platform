export const oChemAlkynesPart7Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'ochem-alkynes-synthesis-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Alkyne Synthesis and Reactions
      
      **Part 7 of 7 — Mixed Reagent Synthesis Review**
      
      This part focuses on integrating alkyne logic with alkene and carbonyl chemistry. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **hydration**: adds water equivalent across triple bond
      - **hydroboration-oxidation**: anti-Markovnikov hydration path for terminal alkynes
      - **oxidative cleavage**: strong oxidation splits alkyne to carboxyl products
      - **terminal alkyne**: alkyne bearing acidic proton on sp carbon
      
      ### Worked reaction example
      A representative transformation uses **NaNH2, liquid NH3**.
      
      1. Identify the governing mechanism: **deprotonates terminal alkyne**.
      2. Predict the dominant product pattern: **acetylide nucleophile formed**.
      3. Justify with a mechanistic note: requires terminal C-H.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for hydration.',
            options: [
              'adds water equivalent across triple bond',
              'alkyne bearing acidic proton on sp carbon',
              'anti-Markovnikov hydration path for terminal alkynes',
              'strong oxidation splits alkyne to carboxyl products'
            ],
            correctAnswer: 0,
            explanation: 'hydration is defined as: adds water equivalent across triple bond.'
          },
          {
            question: 'A reaction in this lesson uses acetylide + 1° alkyl bromide and proceeds by SN2 C-C bond formation. What product pattern should you predict first?',
            options: [
              'cis alkene',
              'chain-extended alkyne',
              'acetylide nucleophile formed',
              'trans alkene'
            ],
            correctAnswer: 1,
            explanation: 'With acetylide + 1° alkyl bromide, the benchmark outcome is chain-extended alkyne. Mechanistic anchor: avoid 2°/3° substrates.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | NaNH2, liquid NH3 | deprotonates terminal alkyne | acetylide nucleophile formed | requires terminal C-H |
      | acetylide + 1° alkyl bromide | SN2 C-C bond formation | chain-extended alkyne | avoid 2°/3° substrates |
      | H2, Lindlar | partial syn hydrogenation | cis alkene | stops before alkane |
      | Na, NH3(l) | dissolving metal reduction | trans alkene | anti addition pattern |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: adds water equivalent across triple bond
      2) Term for: anti-Markovnikov hydration path for terminal alkynes
      3) Product pattern expected under NaNH2, liquid NH3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['hydration', 'hydroboration-oxidation', 'acetylide nucleophile formed'],
        hint1: 'Blank 1 is the vocabulary term paired with: adds water equivalent across triple bond.',
        hint2: 'Blank 2 corresponds to anti-Markovnikov hydration path for terminal alkynes.',
        hint3: 'Use the worked example: NaNH2, liquid NH3 gives acetylide nucleophile formed.',
        explanation: 'Correct entries: hydration, hydroboration-oxidation, and acetylide nucleophile formed. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'oxidative cleavage',
            options: ['alkyne bearing acidic proton on sp carbon', 'adds water equivalent across triple bond', 'anti-Markovnikov hydration path for terminal alkynes', 'strong oxidation splits alkyne to carboxyl products']
          },
          {
            label: 'Expected pattern from acetylide + 1° alkyl bromide',
            options: ['cis alkene', 'trans alkene', 'chain-extended alkyne', 'acetylide nucleophile formed']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Lindlar and dissolving metal reductions give opposite alkene stereochemistry.', 'Acetylide alkylation works best with primary halides due to SN2 constraints.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.']
          }
        ],
        correctAnswers: ['strong oxidation splits alkyne to carboxyl products', 'chain-extended alkyne', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Lindlar and dissolving metal reductions give opposite alkene stereochemistry.
      - Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.
      - Acetylide alkylation works best with primary halides due to SN2 constraints.
      
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
      id: 'ochem-alkynes-synthesis-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on mixed reagent synthesis review, a step uses H2, Lindlar. Which major product pattern is most defensible?',
            options: [
              'trans alkene',
              'acetylide nucleophile formed',
              'cis alkene',
              'chain-extended alkyne'
            ],
            correctAnswer: 2,
            explanation: 'H2, Lindlar is classically associated with cis alkene because stops before alkane.'
          },
          {
            question: 'A mechanism rationale cites acetylide anion: strong nucleophile/base formed by deprotonation. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use acetylide anion to justify why the pathway favors trans alkene under Na, NH3(l).',
              'Treat acetylide anion as a naming convention unrelated to mechanism.',
              'Use acetylide anion only after final answer choice selection.',
              'Ignore acetylide anion and choose products only by molecular weight.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies acetylide anion directly to mechanism and product control. In this context, Na, NH3(l) aligns with trans alkene.'
          }
        ]
      }
    }
  ]
};
