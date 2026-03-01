export const oChemAlkynesPart6Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'ochem-alkynes-synthesis-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Alkyne Synthesis and Reactions
      
      **Part 6 of 7 — Route Design from Alkynes**
      
      This part focuses on planning shortest route to substituted carbonyl compounds. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **tautomerization**: enol rearranges to carbonyl form
      - **hydration**: adds water equivalent across triple bond
      - **hydroboration-oxidation**: anti-Markovnikov hydration path for terminal alkynes
      - **oxidative cleavage**: strong oxidation splits alkyne to carboxyl products
      
      ### Worked reaction example
      A representative transformation uses **BH3 then H2O2/NaOH**.
      
      1. Identify the governing mechanism: **anti-Markovnikov hydration**.
      2. Predict the dominant product pattern: **aldehyde from terminal alkyne**.
      3. Justify with a mechanistic note: via enol tautomerization.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for tautomerization.',
            options: [
              'anti-Markovnikov hydration path for terminal alkynes',
              'strong oxidation splits alkyne to carboxyl products',
              'adds water equivalent across triple bond',
              'enol rearranges to carbonyl form'
            ],
            correctAnswer: 3,
            explanation: 'tautomerization is defined as: enol rearranges to carbonyl form.'
          },
          {
            question: 'A reaction in this lesson uses NaNH2, liquid NH3 and proceeds by deprotonates terminal alkyne. What product pattern should you predict first?',
            options: [
              'acetylide nucleophile formed',
              'aldehyde from terminal alkyne',
              'cis alkene',
              'chain-extended alkyne'
            ],
            correctAnswer: 0,
            explanation: 'With NaNH2, liquid NH3, the benchmark outcome is acetylide nucleophile formed. Mechanistic anchor: requires terminal C-H.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | BH3 then H2O2/NaOH | anti-Markovnikov hydration | aldehyde from terminal alkyne | via enol tautomerization |
      | NaNH2, liquid NH3 | deprotonates terminal alkyne | acetylide nucleophile formed | requires terminal C-H |
      | acetylide + 1° alkyl bromide | SN2 C-C bond formation | chain-extended alkyne | avoid 2°/3° substrates |
      | H2, Lindlar | partial syn hydrogenation | cis alkene | stops before alkane |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: enol rearranges to carbonyl form
      2) Term for: adds water equivalent across triple bond
      3) Product pattern expected under BH3 then H2O2/NaOH
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['tautomerization', 'hydration', 'aldehyde from terminal alkyne'],
        hint1: 'Blank 1 is the vocabulary term paired with: enol rearranges to carbonyl form.',
        hint2: 'Blank 2 corresponds to adds water equivalent across triple bond.',
        hint3: 'Use the worked example: BH3 then H2O2/NaOH gives aldehyde from terminal alkyne.',
        explanation: 'Correct entries: tautomerization, hydration, and aldehyde from terminal alkyne. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'hydroboration-oxidation',
            options: ['enol rearranges to carbonyl form', 'strong oxidation splits alkyne to carboxyl products', 'anti-Markovnikov hydration path for terminal alkynes', 'adds water equivalent across triple bond']
          },
          {
            label: 'Expected pattern from NaNH2, liquid NH3',
            options: ['aldehyde from terminal alkyne', 'acetylide nucleophile formed', 'cis alkene', 'chain-extended alkyne']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Hydration products are usually carbonyls after tautomerization, not stable enols.', 'Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Lindlar and dissolving metal reductions give opposite alkene stereochemistry.']
          }
        ],
        correctAnswers: ['anti-Markovnikov hydration path for terminal alkynes', 'acetylide nucleophile formed', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p6-s6-strategy',
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
      id: 'ochem-alkynes-synthesis-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on route design from alkynes, a step uses acetylide + 1° alkyl bromide. Which major product pattern is most defensible?',
            options: [
              'cis alkene',
              'acetylide nucleophile formed',
              'aldehyde from terminal alkyne',
              'chain-extended alkyne'
            ],
            correctAnswer: 3,
            explanation: 'acetylide + 1° alkyl bromide is classically associated with chain-extended alkyne because avoid 2°/3° substrates.'
          },
          {
            question: 'A mechanism rationale cites terminal alkyne: alkyne bearing acidic proton on sp carbon. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat terminal alkyne as a naming convention unrelated to mechanism.',
              'Ignore terminal alkyne and choose products only by molecular weight.',
              'Use terminal alkyne only after final answer choice selection.',
              'Use terminal alkyne to justify why the pathway favors cis alkene under H2, Lindlar.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies terminal alkyne directly to mechanism and product control. In this context, H2, Lindlar aligns with cis alkene.'
          }
        ]
      }
    }
  ]
};
