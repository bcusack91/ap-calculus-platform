export const oChemAromaticPart5Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'ochem-aromatic-compounds-benzene-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Aromatic Compounds and Benzene
      
      **Part 5 of 7 — Aromatic vs Antiaromatic Cases**
      
      This part focuses on testing Huckel counts under charged conditions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **ring current**: magnetic anisotropy signature of aromatic systems
      - **resonance contributor**: valid Lewis structure sharing electron delocalization
      - **benzylic position**: carbon adjacent to aromatic ring
      - **activation**: substituent increases EAS rate
      
      ### Worked reaction example
      A representative transformation uses **RCOCl, AlCl3**.
      
      1. Identify the governing mechanism: **Friedel-Crafts acylation**.
      2. Predict the dominant product pattern: **aryl ketone**.
      3. Justify with a mechanistic note: no acylium rearrangement.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for ring current.',
            options: [
              'valid Lewis structure sharing electron delocalization',
              'substituent increases EAS rate',
              'carbon adjacent to aromatic ring',
              'magnetic anisotropy signature of aromatic systems'
            ],
            correctAnswer: 3,
            explanation: 'ring current is defined as: magnetic anisotropy signature of aromatic systems.'
          },
          {
            question: 'A reaction in this lesson uses KMnO4, heat and proceeds by benzylic oxidation. What product pattern should you predict first?',
            options: [
              'nitrobenzene derivative',
              'benzoic acid derivative',
              'aryl ketone',
              'aryl bromide'
            ],
            correctAnswer: 1,
            explanation: 'With KMnO4, heat, the benchmark outcome is benzoic acid derivative. Mechanistic anchor: requires benzylic C-H.'
          }
        ]
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | RCOCl, AlCl3 | Friedel-Crafts acylation | aryl ketone | no acylium rearrangement |
      | KMnO4, heat | benzylic oxidation | benzoic acid derivative | requires benzylic C-H |
      | Br2, FeBr3 | electrophilic aromatic substitution | aryl bromide | aromaticity restored after deprotonation |
      | HNO3, H2SO4 | nitration | nitrobenzene derivative | forms nitronium electrophile |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: magnetic anisotropy signature of aromatic systems

      2) Term for: valid Lewis structure sharing electron delocalization

      3) Product pattern expected under RCOCl, AlCl3
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ring current', 'resonance contributor', 'aryl ketone'],
        hint1: 'Blank 1 is the vocabulary term paired with: magnetic anisotropy signature of aromatic systems.',
        hint2: 'Blank 2 corresponds to valid Lewis structure sharing electron delocalization.',
        hint3: 'Use the worked example: RCOCl, AlCl3 gives aryl ketone.',
        explanation: 'Correct entries: ring current, resonance contributor, and aryl ketone. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'benzylic position',
            options: ['carbon adjacent to aromatic ring', 'valid Lewis structure sharing electron delocalization', 'substituent increases EAS rate', 'magnetic anisotropy signature of aromatic systems']
          },
          {
            label: 'Expected pattern from KMnO4, heat',
            options: ['aryl ketone', 'aryl bromide', 'nitrobenzene derivative', 'benzoic acid derivative']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Friedel-Crafts alkylation can over-alkylate activated rings.', 'Aromatic classification depends on electron count and geometry simultaneously.', 'Not every resonance drawing represents equivalent contributor weight.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['carbon adjacent to aromatic ring', 'benzoic acid derivative', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-aromatic-compounds-benzene-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Aromatic classification depends on electron count and geometry simultaneously.
      - Friedel-Crafts alkylation can over-alkylate activated rings.
      - Not every resonance drawing represents equivalent contributor weight.
      
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
      id: 'ochem-aromatic-compounds-benzene-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on aromatic vs antiaromatic cases, a step uses Br2, FeBr3. Which major product pattern is most defensible?',
            options: [
              'nitrobenzene derivative',
              'benzoic acid derivative',
              'aryl ketone',
              'aryl bromide'
            ],
            correctAnswer: 3,
            explanation: 'Br2, FeBr3 is classically associated with aryl bromide because aromaticity restored after deprotonation.'
          },
          {
            question: 'A mechanism rationale cites deactivation: substituent decreases EAS rate. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use deactivation to justify why the pathway favors nitrobenzene derivative under HNO3, H2SO4.',
              'Ignore deactivation and choose products only by molecular weight.',
              'Use deactivation only after final answer choice selection.',
              'Treat deactivation as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies deactivation directly to mechanism and product control. In this context, HNO3, H2SO4 aligns with nitrobenzene derivative.'
          }
        ]
      }
    }
  ]
};
