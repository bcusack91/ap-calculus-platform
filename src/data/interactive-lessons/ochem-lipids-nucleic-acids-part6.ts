export const oChemLipidsPart6Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'ochem-lipids-nucleic-acids-p6-s1-intro',
      type: 'text' as const,
      content: `
      # Lipids and Nucleic Acids
      
      **Part 6 of 7 — Biochemical Mechanism Integration**
      
      This part focuses on mapping reactivity to biochemical processing steps. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.
      
      ### Mechanism vocabulary for this part
      - **phosphodiester bond**: linkage joining nucleotides in nucleic acids
      - **hydrogen bonding**: noncovalent pairing interactions between nucleobases
      - **amphiphile**: molecule with both hydrophilic and hydrophobic regions
      - **hydrolytic stability**: resistance of linkage to cleavage in given conditions
      
      ### Worked reaction example
      A representative transformation uses **amide coupling in lipid-modified molecules**.
      
      1. Identify the governing mechanism: **acyl transfer**.
      2. Predict the dominant product pattern: **amide-linked lipid conjugate**.
      3. Justify with a mechanistic note: seen in signaling molecules.
      
      Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Mechanism checkpoint (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the best definition for phosphodiester bond.',
            options: [
              'noncovalent pairing interactions between nucleobases',
              'resistance of linkage to cleavage in given conditions',
              'linkage joining nucleotides in nucleic acids',
              'molecule with both hydrophilic and hydrophobic regions'
            ],
            correctAnswer: 2,
            explanation: 'phosphodiester bond is defined as: linkage joining nucleotides in nucleic acids.'
          },
          {
            question: 'A reaction in this lesson uses triacylglycerol + NaOH, heat and proceeds by ester hydrolysis. What product pattern should you predict first?',
            options: [
              'amide-linked lipid conjugate',
              'more saturated chain',
              'glycerol + fatty acid salts',
              're-formed ester'
            ],
            correctAnswer: 2,
            explanation: 'With triacylglycerol + NaOH, heat, the benchmark outcome is glycerol + fatty acid salts. Mechanistic anchor: soap formation.'
          }
        ]
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ## Deep-Dive: Reaction Pattern Table
      
      Use this table as a rapid decision grid.
      
      | Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
      |---|---|---|---|
      | amide coupling in lipid-modified molecules | acyl transfer | amide-linked lipid conjugate | seen in signaling molecules |
      | triacylglycerol + NaOH, heat | ester hydrolysis | glycerol + fatty acid salts | soap formation |
      | acid-catalyzed esterification | fatty acid coupling | re-formed ester | equilibrium-driven process |
      | H2, Pd/C on unsaturated lipid | hydrogenation | more saturated chain | raises melting behavior |
      
      ### Fast interpretation protocol
      1. Map reagent set to mechanism family.
      2. Apply regio- or stereochemical rule attached to that family.
      3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
      `
    },
    {
      id: 'ochem-lipids-nucleic-acids-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — enter exact chemistry terms**
      
      1) Term for: linkage joining nucleotides in nucleic acids

      2) Term for: noncovalent pairing interactions between nucleobases

      3) Product pattern expected under amide coupling in lipid-modified molecules
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['phosphodiester bond', 'hydrogen bonding', 'amide-linked lipid conjugate'],
        hint1: 'Blank 1 is the vocabulary term paired with: linkage joining nucleotides in nucleic acids.',
        hint2: 'Blank 2 corresponds to noncovalent pairing interactions between nucleobases.',
        hint3: 'Use the worked example: amide coupling in lipid-modified molecules gives amide-linked lipid conjugate.',
        explanation: 'Correct entries: phosphodiester bond, hydrogen bonding, and amide-linked lipid conjugate. These anchor mechanism ID, vocabulary precision, and product prediction.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'amphiphile',
            options: ['resistance of linkage to cleavage in given conditions', 'molecule with both hydrophilic and hydrophobic regions', 'noncovalent pairing interactions between nucleobases', 'linkage joining nucleotides in nucleic acids']
          },
          {
            label: 'Expected pattern from triacylglycerol + NaOH, heat',
            options: ['glycerol + fatty acid salts', 'amide-linked lipid conjugate', 're-formed ester', 'more saturated chain']
          },
          {
            label: 'Best exam strategy statement',
            options: ['Membrane behavior depends on both headgroup and tail composition.', 'Saponification under base gives carboxylate salts until acidified.', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.', 'Phosphodiester bonds are covalent; base pairing is noncovalent.']
          }
        ],
        correctAnswers: ['molecule with both hydrophilic and hydrophobic regions', 'glycerol + fatty acid salts', 'Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.'],
        hint1: 'First align each prompt with mechanism language before reading all options.',
        hint2: 'For reagent prompts, eliminate outcomes that violate known regio/stereo rules.',
        hint3: 'For strategy prompts, pick the statement that links mechanism evidence to product prediction.',
        explanation: 'Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.'
      }
    },
    {
      id: 'ochem-lipids-nucleic-acids-p6-s6-strategy',
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
      id: 'ochem-lipids-nucleic-acids-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Applied synthesis/mechanism check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a synthesis sequence centered on biochemical mechanism integration, a step uses acid-catalyzed esterification. Which major product pattern is most defensible?',
            options: [
              're-formed ester',
              'amide-linked lipid conjugate',
              'more saturated chain',
              'glycerol + fatty acid salts'
            ],
            correctAnswer: 0,
            explanation: 'acid-catalyzed esterification is classically associated with re-formed ester because equilibrium-driven process.'
          },
          {
            question: 'A mechanism rationale cites triacylglycerol: glycerol triester storing chemical energy. Which interpretation applies this idea correctly in product prediction?',
            options: [
              'Use triacylglycerol only after final answer choice selection.',
              'Ignore triacylglycerol and choose products only by molecular weight.',
              'Treat triacylglycerol as a naming convention unrelated to mechanism.',
              'Use triacylglycerol to justify why the pathway favors more saturated chain under H2, Pd/C on unsaturated lipid.'
            ],
            correctAnswer: 3,
            explanation: 'The correct approach applies triacylglycerol directly to mechanism and product control. In this context, H2, Pd/C on unsaturated lipid aligns with more saturated chain.'
          }
        ]
      }
    }
  ]
};
