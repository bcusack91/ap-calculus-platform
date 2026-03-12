export const oChemLipidsPart3Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p3-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 3 of 7 — Phospholipids and Membrane Chemistry**
      
      This part focuses on connecting amphiphilicity to membrane behavior. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **saponification**: base hydrolysis of fatty acid esters to soaps
      - **unsaturation**: C=C bonds in fatty chains affecting packing
      - **nucleotide**: base + sugar + phosphate monomer
      - **phosphodiester bond**: linkage joining nucleotides in nucleic acids
      
      ### Worked reaction example
      A representative transformation uses **H2, Pd/C on unsaturated lipid**.
      
      1. Identify the governing mechanism: **hydrogenation**.
      2. Predict the dominant product pattern: **more saturated chain**.
      3. Justify with a mechanistic note: raises melting behavior.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for saponification.',
            options: [
              'C=C bonds in fatty chains affecting packing',
              'base hydrolysis of fatty acid esters to soaps',
              'linkage joining nucleotides in nucleic acids',
              'base + sugar + phosphate monomer'
            ],
            correctAnswer: 1,
            explanation: 'saponification is defined as: base hydrolysis of fatty acid esters to soaps.'
          },
          {
            question: 'A reaction in this lesson uses phosphodiester cleavage (nuclease conditions) and proceeds by backbone hydrolysis. What product pattern should you predict first?',
            options: [
              'amide-linked lipid conjugate',
              'nucleotide',
              'more saturated chain',
              'shorter oligonucleotide fragments'
            ],
            correctAnswer: 3,
            explanation: 'With phosphodiester cleavage (nuclease conditions), the benchmark outcome is shorter oligonucleotide fragments. Mechanistic anchor: mechanism depends on catalyst.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | H2, Pd/C on unsaturated lipid | hydrogenation | more saturated chain | raises melting behavior |
      | phosphodiester cleavage (nuclease conditions) | backbone hydrolysis | shorter oligonucleotide fragments | mechanism depends on catalyst |
      | phosphorylation of nucleoside | phosphate transfer | nucleotide | requires activated phosphate donor |
      | amide coupling in lipid-modified molecules | acyl transfer | amide-linked lipid conjugate | seen in signaling molecules |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: base hydrolysis of fatty acid esters to soaps
      2) Term for: C=C bonds in fatty chains affecting packing
      3) Product pattern expected under H2, Pd/C on unsaturated lipid
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['saponification', 'unsaturation', 'more saturated chain'],
        hint1: 'Blank 1 is the vocabulary term paired with: base hydrolysis of fatty acid esters to soaps.',
        hint2: 'Blank 2 corresponds to C=C bonds in fatty chains affecting packing.',
        hint3: 'Use the worked example: H2, Pd/C on unsaturated lipid gives more saturated chain.',
        explanation: 'Correct entries: saponification, unsaturation, and more saturated chain. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nucleotide',
            options: ['C=C bonds in fatty chains affecting packing', 'base + sugar + phosphate monomer', 'linkage joining nucleotides in nucleic acids', 'base hydrolysis of fatty acid esters to soaps']
          },
          {
            label: 'Expected pattern from phosphodiester cleavage (nuclease conditions)',
            options: ['amide-linked lipid conjugate', 'more saturated chain', 'nucleotide', 'shorter oligonucleotide fragments']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Saponification under base gives carboxylate salts until acidified.', 'Hydrogenation changes unsaturation but not carbon chain length.', 'Membrane behavior depends on both headgroup and tail composition.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.']
          }
        ],
        correctAnswers: ['base + sugar + phosphate monomer', 'shorter oligonucleotide fragments', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p3-s6-strategy',
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
      id: 'ochem-lipids-nucleic-acids-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on phospholipids and membrane chemistry, a step uses phosphorylation of nucleoside. Which major product pattern is most defensible?',
            options: [
              'shorter oligonucleotide fragments',
              'more saturated chain',
              'nucleotide',
              'amide-linked lipid conjugate'
            ],
            correctAnswer: 2,
            explanation: 'phosphorylation of nucleoside is classically associated with nucleotide because requires activated phosphate donor.'
          },
          {
            question: 'A mechanism rationale cites hydrogen bonding: noncovalent pairing interactions between nucleobases. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use hydrogen bonding to justify why the pathway favors amide-linked lipid conjugate under amide coupling in lipid-modified molecules.',
              'Treat hydrogen bonding as a naming convention unrelated to mechanism.',
              'Ignore hydrogen bonding and choose products only by molecular weight.',
              'Use hydrogen bonding only after final answer choice selection.'
            ],
            correctAnswer: 0,
            explanation: 'The correct approach applies hydrogen bonding directly to mechanism and product control. In this context, amide coupling in lipid-modified molecules aligns with amide-linked lipid conjugate.'
          }
        ]
      }
    }
  ]
};
