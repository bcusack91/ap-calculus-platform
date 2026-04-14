export const oChemLipidsPart4Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p4-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 4 of 7 — Nucleotide Structure and Bonding**
      
      This part focuses on tracking phosphodiester bond chemistry in nucleotides. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **unsaturation**: C=C bonds in fatty chains affecting packing
      - **nucleotide**: base + sugar + phosphate monomer
      - **phosphodiester bond**: linkage joining nucleotides in nucleic acids
      - **hydrogen bonding**: noncovalent pairing interactions between nucleobases
      
      ### Worked reaction example
      A representative transformation uses **phosphodiester cleavage (nuclease conditions)**.
      
      1. Identify the governing mechanism: **backbone hydrolysis**.
      2. Predict the dominant product pattern: **shorter oligonucleotide fragments**.
      3. Justify with a mechanistic note: mechanism depends on catalyst.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for unsaturation.',
            options: [
              'C=C bonds in fatty chains affecting packing',
              'noncovalent pairing interactions between nucleobases',
              'base + sugar + phosphate monomer',
              'linkage joining nucleotides in nucleic acids'
            ],
            correctAnswer: 0,
            explanation: 'unsaturation is defined as: C=C bonds in fatty chains affecting packing.'
          },
          {
            question: 'A reaction in this lesson uses phosphorylation of nucleoside and proceeds by phosphate transfer. What product pattern should you predict first?',
            options: [
              'shorter oligonucleotide fragments',
              'nucleotide',
              'amide-linked lipid conjugate',
              'glycerol + fatty acid salts'
            ],
            correctAnswer: 1,
            explanation: 'With phosphorylation of nucleoside, the benchmark outcome is nucleotide. Mechanistic anchor: requires activated phosphate donor.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | phosphodiester cleavage (nuclease conditions) | backbone hydrolysis | shorter oligonucleotide fragments | mechanism depends on catalyst |
      | phosphorylation of nucleoside | phosphate transfer | nucleotide | requires activated phosphate donor |
      | amide coupling in lipid-modified molecules | acyl transfer | amide-linked lipid conjugate | seen in signaling molecules |
      | triacylglycerol + NaOH, heat | ester hydrolysis | glycerol + fatty acid salts | soap formation |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: C=C bonds in fatty chains affecting packing

      2) Term for: base + sugar + phosphate monomer

      3) Product pattern expected under phosphodiester cleavage (nuclease conditions)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['unsaturation', 'nucleotide', 'shorter oligonucleotide fragments'],
        hint1: 'Blank 1 is the vocabulary term paired with: C=C bonds in fatty chains affecting packing.',
        hint2: 'Blank 2 corresponds to base + sugar + phosphate monomer.',
        hint3: 'Use the worked example: phosphodiester cleavage (nuclease conditions) gives shorter oligonucleotide fragments.',
        explanation: 'Correct entries: unsaturation, nucleotide, and shorter oligonucleotide fragments. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'phosphodiester bond',
            options: ['noncovalent pairing interactions between nucleobases', 'C=C bonds in fatty chains affecting packing', 'base + sugar + phosphate monomer', 'linkage joining nucleotides in nucleic acids']
          },
          {
            label: 'Expected pattern from phosphorylation of nucleoside',
            options: ['amide-linked lipid conjugate', 'glycerol + fatty acid salts', 'shorter oligonucleotide fragments', 'nucleotide']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Phosphodiester bonds are covalent; base pairing is noncovalent.', 'Hydrogenation changes unsaturation but not carbon chain length.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Membrane behavior depends on both headgroup and tail composition.']
          }
        ],
        correctAnswers: ['linkage joining nucleotides in nucleic acids', 'nucleotide', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Strategy: Prediction Traps and Exam Techniques
      
      ### Common traps in this part
      - Membrane behavior depends on both headgroup and tail composition.
      - Hydrogenation changes unsaturation but not carbon chain length.
      - Phosphodiester bonds are covalent; base pairing is noncovalent.
      
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
      id: 'ochem-lipids-nucleic-acids-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on nucleotide structure and bonding, a step uses amide coupling in lipid-modified molecules. Which major product pattern is most defensible?',
            options: [
              'nucleotide',
              'shorter oligonucleotide fragments',
              'amide-linked lipid conjugate',
              'glycerol + fatty acid salts'
            ],
            correctAnswer: 2,
            explanation: 'amide coupling in lipid-modified molecules is classically associated with amide-linked lipid conjugate because seen in signaling molecules.'
          },
          {
            question: 'A mechanism rationale cites amphiphile: molecule with both hydrophilic and hydrophobic regions. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use amphiphile only after final answer choice selection.',
              'Use amphiphile to justify why the pathway favors glycerol + fatty acid salts under triacylglycerol + NaOH, heat.',
              'Ignore amphiphile and choose products only by molecular weight.',
              'Treat amphiphile as a naming convention unrelated to mechanism.'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach applies amphiphile directly to mechanism and product control. In this context, triacylglycerol + NaOH, heat aligns with glycerol + fatty acid salts.'
          }
        ]
      }
    }
  ]
};
