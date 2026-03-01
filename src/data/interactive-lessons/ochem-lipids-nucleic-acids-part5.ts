export const oChemLipidsPart5Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p5-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 5 of 7 — Hydrolysis and Polymerization Patterns**
      
      This part focuses on contrasting hydrolysis stability under acid/base conditions. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **nucleotide**: base + sugar + phosphate monomer
      - **phosphodiester bond**: linkage joining nucleotides in nucleic acids
      - **hydrogen bonding**: noncovalent pairing interactions between nucleobases
      - **amphiphile**: molecule with both hydrophilic and hydrophobic regions
      
      ### Worked reaction example
      A representative transformation uses **phosphorylation of nucleoside**.
      
      1. Identify the governing mechanism: **phosphate transfer**.
      2. Predict the dominant product pattern: **nucleotide**.
      3. Justify with a mechanistic note: requires activated phosphate donor.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for nucleotide.',
            options: [
              'molecule with both hydrophilic and hydrophobic regions',
              'base + sugar + phosphate monomer',
              'noncovalent pairing interactions between nucleobases',
              'linkage joining nucleotides in nucleic acids'
            ],
            correctAnswer: 1,
            explanation: 'nucleotide is defined as: base + sugar + phosphate monomer.'
          },
          {
            question: 'A reaction in this lesson uses amide coupling in lipid-modified molecules and proceeds by acyl transfer. What product pattern should you predict first?',
            options: [
              're-formed ester',
              'amide-linked lipid conjugate',
              'glycerol + fatty acid salts',
              'nucleotide'
            ],
            correctAnswer: 1,
            explanation: 'With amide coupling in lipid-modified molecules, the benchmark outcome is amide-linked lipid conjugate. Mechanistic anchor: seen in signaling molecules.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | phosphorylation of nucleoside | phosphate transfer | nucleotide | requires activated phosphate donor |
      | amide coupling in lipid-modified molecules | acyl transfer | amide-linked lipid conjugate | seen in signaling molecules |
      | triacylglycerol + NaOH, heat | ester hydrolysis | glycerol + fatty acid salts | soap formation |
      | acid-catalyzed esterification | fatty acid coupling | re-formed ester | equilibrium-driven process |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: base + sugar + phosphate monomer
      2) Term for: linkage joining nucleotides in nucleic acids
      3) Product pattern expected under phosphorylation of nucleoside
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nucleotide', 'phosphodiester bond', 'nucleotide'],
        hint1: 'Blank 1 is the vocabulary term paired with: base + sugar + phosphate monomer.',
        hint2: 'Blank 2 corresponds to linkage joining nucleotides in nucleic acids.',
        hint3: 'Use the worked example: phosphorylation of nucleoside gives nucleotide.',
        explanation: 'Correct entries: nucleotide, phosphodiester bond, and nucleotide. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'hydrogen bonding',
            options: ['base + sugar + phosphate monomer', 'linkage joining nucleotides in nucleic acids', 'molecule with both hydrophilic and hydrophobic regions', 'noncovalent pairing interactions between nucleobases']
          },
          {
            label: 'Expected pattern from amide coupling in lipid-modified molecules',
            options: ['re-formed ester', 'glycerol + fatty acid salts', 'amide-linked lipid conjugate', 'nucleotide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Hydrogenation changes unsaturation but not carbon chain length.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Phosphodiester bonds are covalent; base pairing is noncovalent.', 'Saponification under base gives carboxylate salts until acidified.']
          }
        ],
        correctAnswers: ['noncovalent pairing interactions between nucleobases', 'amide-linked lipid conjugate', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p5-s6-strategy',
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
      id: 'ochem-lipids-nucleic-acids-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on hydrolysis and polymerization patterns, a step uses triacylglycerol + NaOH, heat. Which major product pattern is most defensible?',
            options: [
              'glycerol + fatty acid salts',
              'nucleotide',
              'amide-linked lipid conjugate',
              're-formed ester'
            ],
            correctAnswer: 0,
            explanation: 'triacylglycerol + NaOH, heat is classically associated with glycerol + fatty acid salts because soap formation.'
          },
          {
            question: 'A mechanism rationale cites hydrolytic stability: resistance of linkage to cleavage in given conditions. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Treat hydrolytic stability as a naming convention unrelated to mechanism.',
              'Use hydrolytic stability to justify why the pathway favors re-formed ester under acid-catalyzed esterification.',
              'Use hydrolytic stability only after final answer choice selection.',
              'Ignore hydrolytic stability and choose products only by molecular weight.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies hydrolytic stability directly to mechanism and product control. In this context, acid-catalyzed esterification aligns with re-formed ester.'
          }
        ]
      }
    }
  ]
};
