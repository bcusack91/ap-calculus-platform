export const oChemLipidsPart7Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p7-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 7 of 7 — Comprehensive Lipid/Nucleic Acid Review**
      
      This part focuses on integrating structural and mechanistic exam prompts. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **hydrogen bonding**: noncovalent pairing interactions between nucleobases
      - **amphiphile**: molecule with both hydrophilic and hydrophobic regions
      - **hydrolytic stability**: resistance of linkage to cleavage in given conditions
      - **triacylglycerol**: glycerol triester storing chemical energy
      
      ### Worked reaction example
      A representative transformation uses **triacylglycerol + NaOH, heat**.
      
      1. Identify the governing mechanism: **ester hydrolysis**.
      2. Predict the dominant product pattern: **glycerol + fatty acid salts**.
      3. Justify with a mechanistic note: soap formation.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for hydrogen bonding.',
            options: [
              'molecule with both hydrophilic and hydrophobic regions',
              'resistance of linkage to cleavage in given conditions',
              'noncovalent pairing interactions between nucleobases',
              'glycerol triester storing chemical energy'
            ],
            correctAnswer: 2,
            explanation: 'hydrogen bonding is defined as: noncovalent pairing interactions between nucleobases.'
          },
          {
            question: 'A reaction in this lesson uses acid-catalyzed esterification and proceeds by fatty acid coupling. What product pattern should you predict first?',
            options: [
              'glycerol + fatty acid salts',
              're-formed ester',
              'more saturated chain',
              'shorter oligonucleotide fragments'
            ],
            correctAnswer: 1,
            explanation: 'With acid-catalyzed esterification, the benchmark outcome is re-formed ester. Mechanistic anchor: equilibrium-driven process.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p7-s3-deep-dive',
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
      id: 'ochem-lipids-nucleic-acids-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: noncovalent pairing interactions between nucleobases

      2) Term for: molecule with both hydrophilic and hydrophobic regions

      3) Product pattern expected under triacylglycerol + NaOH, heat
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['hydrogen bonding', 'amphiphile', 'glycerol + fatty acid salts'],
        hint1: 'Blank 1 is the vocabulary term paired with: noncovalent pairing interactions between nucleobases.',
        hint2: 'Blank 2 corresponds to molecule with both hydrophilic and hydrophobic regions.',
        hint3: 'Use the worked example: triacylglycerol + NaOH, heat gives glycerol + fatty acid salts.',
        explanation: 'Correct entries: hydrogen bonding, amphiphile, and glycerol + fatty acid salts. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'hydrolytic stability',
            options: ['resistance of linkage to cleavage in given conditions', 'noncovalent pairing interactions between nucleobases', 'molecule with both hydrophilic and hydrophobic regions', 'glycerol triester storing chemical energy']
          },
          {
            label: 'Expected pattern from acid-catalyzed esterification',
            options: ['shorter oligonucleotide fragments', 'glycerol + fatty acid salts', 're-formed ester', 'more saturated chain']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Saponification under base gives carboxylate salts until acidified.', 'Membrane behavior depends on both headgroup and tail composition.', 'Hydrogenation changes unsaturation but not carbon chain length.']
          }
        ],
        correctAnswers: ['resistance of linkage to cleavage in given conditions', 're-formed ester', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Saponification under base gives carboxylate salts until acidified.
      - Membrane behavior depends on both headgroup and tail composition.
      - Hydrogenation changes unsaturation but not carbon chain length.
      
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
      id: 'ochem-lipids-nucleic-acids-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on comprehensive lipid/nucleic acid review, a step uses H2, Pd/C on unsaturated lipid. Which major product pattern is most defensible?',
            options: [
              'shorter oligonucleotide fragments',
              'glycerol + fatty acid salts',
              'more saturated chain',
              're-formed ester'
            ],
            correctAnswer: 2,
            explanation: 'H2, Pd/C on unsaturated lipid is classically associated with more saturated chain because raises melting behavior.'
          },
          {
            question: 'A mechanism rationale cites phospholipid: amphiphilic lipid with phosphate-containing headgroup. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat phospholipid as a naming convention unrelated to mechanism.',
              'Ignore phospholipid and choose products only by molecular weight.',
              'Use phospholipid only after final answer choice selection.',
              'Use phospholipid to justify why the pathway favors shorter oligonucleotide fragments under phosphodiester cleavage (nuclease conditions).'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies phospholipid directly to mechanism and product control. In this context, phosphodiester cleavage (nuclease conditions) aligns with shorter oligonucleotide fragments.'
          }
        ]
      }
    }
  ]
};
