export const oChemLipidsPart1Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p1-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 1 of 7 — Lipid Functional Group Fundamentals**
      
      This part focuses on classifying lipid classes by backbone and linkage type. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **triacylglycerol**: glycerol triester storing chemical energy
      - **phospholipid**: amphiphilic lipid with phosphate-containing headgroup
      - **saponification**: base hydrolysis of fatty acid esters to soaps
      - **unsaturation**: C=C bonds in fatty chains affecting packing
      
      ### Worked reaction example
      A representative transformation uses **triacylglycerol + NaOH, heat**.
      
      1. Identify the governing mechanism: **ester hydrolysis**.
      2. Predict the dominant product pattern: **glycerol + fatty acid salts**.
      3. Justify with a mechanistic note: soap formation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for triacylglycerol.',
            options: [
              'base hydrolysis of fatty acid esters to soaps',
              'C=C bonds in fatty chains affecting packing',
              'glycerol triester storing chemical energy',
              'amphiphilic lipid with phosphate-containing headgroup'
            ],
            correctAnswer: 2,
            explanation: 'triacylglycerol is defined as: glycerol triester storing chemical energy.'
          },
          {
            question: 'A reaction in this lesson uses acid-catalyzed esterification and proceeds by fatty acid coupling. What product pattern should you predict first?',
            options: [
              'glycerol + fatty acid salts',
              're-formed ester',
              'shorter oligonucleotide fragments',
              'more saturated chain'
            ],
            correctAnswer: 1,
            explanation: 'With acid-catalyzed esterification, the benchmark outcome is re-formed ester. Mechanistic anchor: equilibrium-driven process.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | triacylglycerol + NaOH, heat | ester hydrolysis | glycerol + fatty acid salts | soap formation |
      | acid-catalyzed esterification | fatty acid coupling | re-formed ester | equilibrium-driven process |
      | H2, Pd/C on unsaturated lipid | hydrogenation | more saturated chain | raises melting behavior |
      | phosphodiester cleavage (nuclease conditions) | backbone hydrolysis | shorter oligonucleotide fragments | mechanism depends on catalyst |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: glycerol triester storing chemical energy
      2) Term for: amphiphilic lipid with phosphate-containing headgroup
      3) Product pattern expected under triacylglycerol + NaOH, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['triacylglycerol', 'phospholipid', 'glycerol + fatty acid salts'],
        hint1: 'Blank 1 is the vocabulary term paired with: glycerol triester storing chemical energy.',
        hint2: 'Blank 2 corresponds to amphiphilic lipid with phosphate-containing headgroup.',
        hint3: 'Use the worked example: triacylglycerol + NaOH, heat gives glycerol + fatty acid salts.',
        explanation: 'Correct entries: triacylglycerol, phospholipid, and glycerol + fatty acid salts. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'saponification',
            options: ['amphiphilic lipid with phosphate-containing headgroup', 'glycerol triester storing chemical energy', 'C=C bonds in fatty chains affecting packing', 'base hydrolysis of fatty acid esters to soaps']
          },
          {
            label: 'Expected pattern from acid-catalyzed esterification',
            options: ['glycerol + fatty acid salts', 'shorter oligonucleotide fragments', 'more saturated chain', 're-formed ester']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Saponification under base gives carboxylate salts until acidified.', 'Phosphodiester bonds are covalent; base pairing is noncovalent.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Hydrogenation changes unsaturation but not carbon chain length.']
          }
        ],
        correctAnswers: ['base hydrolysis of fatty acid esters to soaps', 're-formed ester', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Hydrogenation changes unsaturation but not carbon chain length.
      - Phosphodiester bonds are covalent; base pairing is noncovalent.
      - Saponification under base gives carboxylate salts until acidified.
      
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
      id: 'ochem-lipids-nucleic-acids-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on lipid functional group fundamentals, a step uses H2, Pd/C on unsaturated lipid. Which major product pattern is most defensible?',
            options: [
              're-formed ester',
              'more saturated chain',
              'shorter oligonucleotide fragments',
              'glycerol + fatty acid salts'
            ],
            correctAnswer: 1,
            explanation: 'H2, Pd/C on unsaturated lipid is classically associated with more saturated chain because raises melting behavior.'
          },
          {
            question: 'A mechanism rationale cites nucleotide: base + sugar + phosphate monomer. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use nucleotide to justify why the pathway favors shorter oligonucleotide fragments under phosphodiester cleavage (nuclease conditions).',
              'Ignore nucleotide and choose products only by molecular weight.',
              'Treat nucleotide as a naming convention unrelated to mechanism.',
              'Use nucleotide only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies nucleotide directly to mechanism and product control. In this context, phosphodiester cleavage (nuclease conditions) aligns with shorter oligonucleotide fragments.'
          }
        ]
      }
    }
  ]
};
