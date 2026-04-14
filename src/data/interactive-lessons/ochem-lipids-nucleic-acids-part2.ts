export const oChemLipidsPart2Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p2-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 2 of 7 — Fatty Acid Reactivity**
      
      This part focuses on predicting reactions at ester and unsaturation sites. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **phospholipid**: amphiphilic lipid with phosphate-containing headgroup
      - **saponification**: base hydrolysis of fatty acid esters to soaps
      - **unsaturation**: C=C bonds in fatty chains affecting packing
      - **nucleotide**: base + sugar + phosphate monomer
      
      ### Worked reaction example
      A representative transformation uses **acid-catalyzed esterification**.
      
      1. Identify the governing mechanism: **fatty acid coupling**.
      2. Predict the dominant product pattern: **re-formed ester**.
      3. Justify with a mechanistic note: equilibrium-driven process.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for phospholipid.',
            options: [
              'amphiphilic lipid with phosphate-containing headgroup',
              'base hydrolysis of fatty acid esters to soaps',
              'base + sugar + phosphate monomer',
              'C=C bonds in fatty chains affecting packing'
            ],
            correctAnswer: 0,
            explanation: 'phospholipid is defined as: amphiphilic lipid with phosphate-containing headgroup.'
          },
          {
            question: 'A reaction in this lesson uses H2, Pd/C on unsaturated lipid and proceeds by hydrogenation. What product pattern should you predict first?',
            options: [
              'shorter oligonucleotide fragments',
              'nucleotide',
              'more saturated chain',
              're-formed ester'
            ],
            correctAnswer: 2,
            explanation: 'With H2, Pd/C on unsaturated lipid, the benchmark outcome is more saturated chain. Mechanistic anchor: raises melting behavior.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | acid-catalyzed esterification | fatty acid coupling | re-formed ester | equilibrium-driven process |
      | H2, Pd/C on unsaturated lipid | hydrogenation | more saturated chain | raises melting behavior |
      | phosphodiester cleavage (nuclease conditions) | backbone hydrolysis | shorter oligonucleotide fragments | mechanism depends on catalyst |
      | phosphorylation of nucleoside | phosphate transfer | nucleotide | requires activated phosphate donor |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: amphiphilic lipid with phosphate-containing headgroup

      2) Term for: base hydrolysis of fatty acid esters to soaps

      3) Product pattern expected under acid-catalyzed esterification
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['phospholipid', 'saponification', 're-formed ester'],
        hint1: 'Blank 1 is the vocabulary term paired with: amphiphilic lipid with phosphate-containing headgroup.',
        hint2: 'Blank 2 corresponds to base hydrolysis of fatty acid esters to soaps.',
        hint3: 'Use the worked example: acid-catalyzed esterification gives re-formed ester.',
        explanation: 'Correct entries: phospholipid, saponification, and re-formed ester. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'unsaturation',
            options: ['base + sugar + phosphate monomer', 'base hydrolysis of fatty acid esters to soaps', 'C=C bonds in fatty chains affecting packing', 'amphiphilic lipid with phosphate-containing headgroup']
          },
          {
            label: 'Expected pattern from H2, Pd/C on unsaturated lipid',
            options: ['more saturated chain', 'shorter oligonucleotide fragments', 're-formed ester', 'nucleotide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Saponification under base gives carboxylate salts until acidified.', 'Membrane behavior depends on both headgroup and tail composition.', 'Phosphodiester bonds are covalent; base pairing is noncovalent.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['C=C bonds in fatty chains affecting packing', 'more saturated chain', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Phosphodiester bonds are covalent; base pairing is noncovalent.
      - Saponification under base gives carboxylate salts until acidified.
      - Membrane behavior depends on both headgroup and tail composition.
      
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
      id: 'ochem-lipids-nucleic-acids-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on fatty acid reactivity, a step uses phosphodiester cleavage (nuclease conditions). Which major product pattern is most defensible?',
            options: [
              'more saturated chain',
              're-formed ester',
              'shorter oligonucleotide fragments',
              'nucleotide'
            ],
            correctAnswer: 2,
            explanation: 'phosphodiester cleavage (nuclease conditions) is classically associated with shorter oligonucleotide fragments because mechanism depends on catalyst.'
          },
          {
            question: 'A mechanism rationale cites phosphodiester bond: linkage joining nucleotides in nucleic acids. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Ignore phosphodiester bond and choose products only by molecular weight.',
              'Use phosphodiester bond to justify why the pathway favors nucleotide under phosphorylation of nucleoside.',
              'Use phosphodiester bond only after final answer choice selection.',
              'Treat phosphodiester bond as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies phosphodiester bond directly to mechanism and product control. In this context, phosphorylation of nucleoside aligns with nucleotide.'
          }
        ]
      }
    }
  ]
};
