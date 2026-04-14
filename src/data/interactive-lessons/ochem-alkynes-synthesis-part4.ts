export const oChemAlkynesPart4Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'ochem-alkynes-synthesis-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Alkyne Synthesis and Reactions
      
      **Part 4 of 7 — Hydration Pathways**
      
      This part focuses on predicting ketone vs aldehyde outcomes after hydration. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **Lindlar catalyst**: poisoned catalyst giving cis alkene from alkyne
      - **dissolving metal reduction**: Na/NH3 gives trans alkene from alkyne
      - **tautomerization**: enol rearranges to carbonyl form
      - **hydration**: adds water equivalent across triple bond
      
      ### Worked reaction example
      A representative transformation uses **Na, NH3(l)**.
      
      1. Identify the governing mechanism: **dissolving metal reduction**.
      2. Predict the dominant product pattern: **trans alkene**.
      3. Justify with a mechanistic note: anti addition pattern.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for Lindlar catalyst.',
            options: [
              'poisoned catalyst giving cis alkene from alkyne',
              'enol rearranges to carbonyl form',
              'Na/NH3 gives trans alkene from alkyne',
              'adds water equivalent across triple bond'
            ],
            correctAnswer: 0,
            explanation: 'Lindlar catalyst is defined as: poisoned catalyst giving cis alkene from alkyne.'
          },
          {
            question: 'A reaction in this lesson uses HgSO4, H2SO4, H2O and proceeds by Markovnikov hydration. What product pattern should you predict first?',
            options: [
              'ketone after tautomerization',
              'acetylide nucleophile formed',
              'aldehyde from terminal alkyne',
              'trans alkene'
            ],
            correctAnswer: 0,
            explanation: 'With HgSO4, H2SO4, H2O, the benchmark outcome is ketone after tautomerization. Mechanistic anchor: enol not isolated.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | Na, NH3(l) | dissolving metal reduction | trans alkene | anti addition pattern |
      | HgSO4, H2SO4, H2O | Markovnikov hydration | ketone after tautomerization | enol not isolated |
      | BH3 then H2O2/NaOH | anti-Markovnikov hydration | aldehyde from terminal alkyne | via enol tautomerization |
      | NaNH2, liquid NH3 | deprotonates terminal alkyne | acetylide nucleophile formed | requires terminal C-H |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: poisoned catalyst giving cis alkene from alkyne

      2) Term for: Na/NH3 gives trans alkene from alkyne

      3) Product pattern expected under Na, NH3(l)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Lindlar catalyst', 'dissolving metal reduction', 'trans alkene'],
        hint1: 'Blank 1 is the vocabulary term paired with: poisoned catalyst giving cis alkene from alkyne.',
        hint2: 'Blank 2 corresponds to Na/NH3 gives trans alkene from alkyne.',
        hint3: 'Use the worked example: Na, NH3(l) gives trans alkene.',
        explanation: 'Correct entries: Lindlar catalyst, dissolving metal reduction, and trans alkene. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'tautomerization',
            options: ['adds water equivalent across triple bond', 'enol rearranges to carbonyl form', 'Na/NH3 gives trans alkene from alkyne', 'poisoned catalyst giving cis alkene from alkyne']
          },
          {
            label: 'Expected pattern from HgSO4, H2SO4, H2O',
            options: ['ketone after tautomerization', 'trans alkene', 'aldehyde from terminal alkyne', 'acetylide nucleophile formed']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Acetylide alkylation works best with primary halides due to SN2 constraints.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Hydration products are usually carbonyls after tautomerization, not stable enols.', 'Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.']
          }
        ],
        correctAnswers: ['enol rearranges to carbonyl form', 'ketone after tautomerization', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.
      - Acetylide alkylation works best with primary halides due to SN2 constraints.
      - Hydration products are usually carbonyls after tautomerization, not stable enols.
      
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
      id: 'ochem-alkynes-synthesis-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on hydration pathways, a step uses BH3 then H2O2/NaOH. Which major product pattern is most defensible?',
            options: [
              'aldehyde from terminal alkyne',
              'acetylide nucleophile formed',
              'ketone after tautomerization',
              'trans alkene'
            ],
            correctAnswer: 0,
            explanation: 'BH3 then H2O2/NaOH is classically associated with aldehyde from terminal alkyne because via enol tautomerization.'
          },
          {
            question: 'A mechanism rationale cites hydroboration-oxidation: anti-Markovnikov hydration path for terminal alkynes. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use hydroboration-oxidation only after final answer choice selection.',
              'Ignore hydroboration-oxidation and choose products only by molecular weight.',
              'Use hydroboration-oxidation to justify why the pathway favors acetylide nucleophile formed under NaNH2, liquid NH3.',
              'Treat hydroboration-oxidation as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies hydroboration-oxidation directly to mechanism and product control. In this context, NaNH2, liquid NH3 aligns with acetylide nucleophile formed.'
          }
        ]
      }
    }
  ]
};
