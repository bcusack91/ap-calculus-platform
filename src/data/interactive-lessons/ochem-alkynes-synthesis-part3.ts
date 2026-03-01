export const oChemAlkynesPart3Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'ochem-alkynes-synthesis-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Alkyne Synthesis and Reactions
      
      **Part 3 of 7 — Partial Hydrogenation Control**
      
      This part focuses on stopping reduction at alkene rather than alkane. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **SN2 alkylation**: acetylide attacks primary alkyl halide
      - **Lindlar catalyst**: poisoned catalyst giving cis alkene from alkyne
      - **dissolving metal reduction**: Na/NH3 gives trans alkene from alkyne
      - **tautomerization**: enol rearranges to carbonyl form
      
      ### Worked reaction example
      A representative transformation uses **H2, Lindlar**.
      
      1. Identify the governing mechanism: **partial syn hydrogenation**.
      2. Predict the dominant product pattern: **cis alkene**.
      3. Justify with a mechanistic note: stops before alkane.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for SN2 alkylation.',
            options: [
              'Na/NH3 gives trans alkene from alkyne',
              'poisoned catalyst giving cis alkene from alkyne',
              'enol rearranges to carbonyl form',
              'acetylide attacks primary alkyl halide'
            ],
            correctAnswer: 3,
            explanation: 'SN2 alkylation is defined as: acetylide attacks primary alkyl halide.'
          },
          {
            question: 'A reaction in this lesson uses Na, NH3(l) and proceeds by dissolving metal reduction. What product pattern should you predict first?',
            options: [
              'trans alkene',
              'ketone after tautomerization',
              'cis alkene',
              'aldehyde from terminal alkyne'
            ],
            correctAnswer: 0,
            explanation: 'With Na, NH3(l), the benchmark outcome is trans alkene. Mechanistic anchor: anti addition pattern.'
          }
        ]
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | H2, Lindlar | partial syn hydrogenation | cis alkene | stops before alkane |
      | Na, NH3(l) | dissolving metal reduction | trans alkene | anti addition pattern |
      | HgSO4, H2SO4, H2O | Markovnikov hydration | ketone after tautomerization | enol not isolated |
      | BH3 then H2O2/NaOH | anti-Markovnikov hydration | aldehyde from terminal alkyne | via enol tautomerization |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-alkynes-synthesis-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: acetylide attacks primary alkyl halide
      2) Term for: poisoned catalyst giving cis alkene from alkyne
      3) Product pattern expected under H2, Lindlar
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['SN2 alkylation', 'Lindlar catalyst', 'cis alkene'],
        hint1: 'Blank 1 is the vocabulary term paired with: acetylide attacks primary alkyl halide.',
        hint2: 'Blank 2 corresponds to poisoned catalyst giving cis alkene from alkyne.',
        hint3: 'Use the worked example: H2, Lindlar gives cis alkene.',
        explanation: 'Correct entries: SN2 alkylation, Lindlar catalyst, and cis alkene. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dissolving metal reduction',
            options: ['poisoned catalyst giving cis alkene from alkyne', 'acetylide attacks primary alkyl halide', 'enol rearranges to carbonyl form', 'Na/NH3 gives trans alkene from alkyne']
          },
          {
            label: 'Expected pattern from Na, NH3(l)',
            options: ['trans alkene', 'ketone after tautomerization', 'aldehyde from terminal alkyne', 'cis alkene']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Lindlar and dissolving metal reductions give opposite alkene stereochemistry.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Acetylide alkylation works best with primary halides due to SN2 constraints.', 'Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.']
          }
        ],
        correctAnswers: ['Na/NH3 gives trans alkene from alkyne', 'trans alkene', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-alkynes-synthesis-p3-s6-strategy',
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
      id: 'ochem-alkynes-synthesis-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on partial hydrogenation control, a step uses HgSO4, H2SO4, H2O. Which major product pattern is most defensible?',
            options: [
              'aldehyde from terminal alkyne',
              'ketone after tautomerization',
              'cis alkene',
              'trans alkene'
            ],
            correctAnswer: 1,
            explanation: 'HgSO4, H2SO4, H2O is classically associated with ketone after tautomerization because enol not isolated.'
          },
          {
            question: 'A mechanism rationale cites hydration: adds water equivalent across triple bond. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat hydration as a naming convention unrelated to mechanism.',
              'Ignore hydration and choose products only by molecular weight.',
              'Use hydration to justify why the pathway favors aldehyde from terminal alkyne under BH3 then H2O2/NaOH.',
              'Use hydration only after final answer choice selection.'
            ],
            correctAnswer: 2,
            explanation: 'The correct approach applies hydration directly to mechanism and product control. In this context, BH3 then H2O2/NaOH aligns with aldehyde from terminal alkyne.'
          }
        ]
      }
    }
  ]
};
