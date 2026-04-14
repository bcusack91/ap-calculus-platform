export const oChemAlkynesPart5Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'ochem-alkynes-synthesis-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Alkyne Synthesis and Reactions
      
      **Part 5 of 7 — Oxidative Cleavage of Alkynes**
      
      This part focuses on interpreting cleavage fragments for structure assignment. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **dissolving metal reduction**: Na/NH3 gives trans alkene from alkyne
      - **tautomerization**: enol rearranges to carbonyl form
      - **hydration**: adds water equivalent across triple bond
      - **hydroboration-oxidation**: anti-Markovnikov hydration path for terminal alkynes
      
      ### Worked reaction example
      A representative transformation uses **HgSO4, H2SO4, H2O**.
      
      1. Identify the governing mechanism: **Markovnikov hydration**.
      2. Predict the dominant product pattern: **ketone after tautomerization**.
      3. Justify with a mechanistic note: enol not isolated.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for dissolving metal reduction.',
            options: [
              'Na/NH3 gives trans alkene from alkyne',
              'enol rearranges to carbonyl form',
              'anti-Markovnikov hydration path for terminal alkynes',
              'adds water equivalent across triple bond'
            ],
            correctAnswer: 0,
            explanation: 'dissolving metal reduction is defined as: Na/NH3 gives trans alkene from alkyne.'
          },
          {
            question: 'A reaction in this lesson uses BH3 then H2O2/NaOH and proceeds by anti-Markovnikov hydration. What product pattern should you predict first?',
            options: [
              'chain-extended alkyne',
              'ketone after tautomerization',
              'aldehyde from terminal alkyne',
              'acetylide nucleophile formed'
            ],
            correctAnswer: 2,
            explanation: 'With BH3 then H2O2/NaOH, the benchmark outcome is aldehyde from terminal alkyne. Mechanistic anchor: via enol tautomerization.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | HgSO4, H2SO4, H2O | Markovnikov hydration | ketone after tautomerization | enol not isolated |
      | BH3 then H2O2/NaOH | anti-Markovnikov hydration | aldehyde from terminal alkyne | via enol tautomerization |
      | NaNH2, liquid NH3 | deprotonates terminal alkyne | acetylide nucleophile formed | requires terminal C-H |
      | acetylide + 1° alkyl bromide | SN2 C-C bond formation | chain-extended alkyne | avoid 2°/3° substrates |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: Na/NH3 gives trans alkene from alkyne

      2) Term for: enol rearranges to carbonyl form

      3) Product pattern expected under HgSO4, H2SO4, H2O
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dissolving metal reduction', 'tautomerization', 'ketone after tautomerization'],
        hint1: 'Blank 1 is the vocabulary term paired with: Na/NH3 gives trans alkene from alkyne.',
        hint2: 'Blank 2 corresponds to enol rearranges to carbonyl form.',
        hint3: 'Use the worked example: HgSO4, H2SO4, H2O gives ketone after tautomerization.',
        explanation: 'Correct entries: dissolving metal reduction, tautomerization, and ketone after tautomerization. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'hydration',
            options: ['enol rearranges to carbonyl form', 'adds water equivalent across triple bond', 'Na/NH3 gives trans alkene from alkyne', 'anti-Markovnikov hydration path for terminal alkynes']
          },
          {
            label: 'Expected pattern from BH3 then H2O2/NaOH',
            options: ['ketone after tautomerization', 'chain-extended alkyne', 'aldehyde from terminal alkyne', 'acetylide nucleophile formed']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Acetylide alkylation works best with primary halides due to SN2 constraints.', 'Hydration products are usually carbonyls after tautomerization, not stable enols.', 'Lindlar and dissolving metal reductions give opposite alkene stereochemistry.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['adds water equivalent across triple bond', 'aldehyde from terminal alkyne', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Acetylide alkylation works best with primary halides due to SN2 constraints.
      - Hydration products are usually carbonyls after tautomerization, not stable enols.
      - Lindlar and dissolving metal reductions give opposite alkene stereochemistry.
      
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
      id: 'ochem-alkynes-synthesis-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on oxidative cleavage of alkynes, a step uses NaNH2, liquid NH3. Which major product pattern is most defensible?',
            options: [
              'chain-extended alkyne',
              'ketone after tautomerization',
              'aldehyde from terminal alkyne',
              'acetylide nucleophile formed'
            ],
            correctAnswer: 3,
            explanation: 'NaNH2, liquid NH3 is classically associated with acetylide nucleophile formed because requires terminal C-H.'
          },
          {
            question: 'A mechanism rationale cites oxidative cleavage: strong oxidation splits alkyne to carboxyl products. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore oxidative cleavage and choose products only by molecular weight.',
              'Treat oxidative cleavage as a naming convention unrelated to mechanism.',
              'Use oxidative cleavage only after final answer choice selection.',
              'Use oxidative cleavage to justify why the pathway favors chain-extended alkyne under acetylide + 1° alkyl bromide.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies oxidative cleavage directly to mechanism and product control. In this context, acetylide + 1° alkyl bromide aligns with chain-extended alkyne.'
          }
        ]
      }
    }
  ]
};
