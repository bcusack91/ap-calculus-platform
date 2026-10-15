export const bioMacromoleculesPart6Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol6-workshop',
      type: 'text' as const,
      content: `
## Macromolecule Problem-Solving

### Common AP Question Types

1. **Identify the macromolecule** given a structure or function
2. **Compare/contrast** two macromolecules
3. **Predict effects** of changes (mutations, denaturation, pH)
4. **Apply Chargaff's rules** to DNA composition
5. **Connect structure to function**

### Strategy
- Look for key functional groups and elements
- Remember: structure determines function
- Dehydration synthesis builds; hydrolysis breaks down
      `
    },
    {
      id: 'biol6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A molecule contains glycerol, two fatty acids, and a phosphate group. It is a:',
            options: [
              'Triglyceride',
              'Phospholipid',
              'Steroid',
              'Phosphoprotein'
            ],
            correctAnswer: 1,
            explanation: 'Phospholipids have glycerol + 2 fatty acids + phosphate group. Triglycerides have glycerol + 3 fatty acids.'
          },
          {
            question: 'Which macromolecule would be most affected by a change in pH?',
            options: [
              'A starch granule',
              'A DNA double helix',
              'A protein enzyme',
              'A triglyceride'
            ],
            correctAnswer: 2,
            explanation: 'Proteins (especially enzymes) are highly sensitive to pH changes because pH affects the charges on R groups, disrupting ionic bonds and hydrogen bonds that maintain 3D structure.'
          }
        ]
      }
    },
    {
      id: 'biol6-scenarios',
      type: 'text' as const,
      content: `
## Practice Problems

### Problem 1
A protein normally functions at pH 7. A mutation replaces a nonpolar R group in the protein's interior with a charged R group. Predict the effect.

**Answer:** The charged R group would be hydrophilic and disrupt the hydrophobic core, likely causing misfolding and loss of function.

### Problem 2
An unknown sample contains C, H, O, N, and S. Which macromolecule is it most likely?

**Answer:** Protein — sulfur (in cysteine and methionine) is characteristic of proteins.
      `
    },
    {
      id: 'biol6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Cellulose and starch are both made of glucose but have different properties because:',
            options: [
              'They contain different elements in their rings',
              'Their monomers are linked in different arrangements',
              'Cellulose has more branches than starch does',
              'Starch contains fructose'
            ],
            correctAnswer: 1,
            explanation: 'Both are glucose polymers, but the glucose units are connected differently. Starch chains coil (and some branch), so they are easy to hydrolyze for energy; cellulose forms straight, unbranched chains that bundle into rigid fibers. Same monomer, different arrangement, different function.'
          }
        ]
      }
    },
    {
      id: 'biol6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enzymes are a type of ___',
            options: ['carbohydrate', 'lipid', 'protein', 'nucleic acid']
          },
          {
            label: 'The sugar in DNA is ___',
            options: ['ribose', 'deoxyribose', 'glucose', 'fructose']
          },
          {
            label: 'The more double bonds in its fatty acid tails, the more ___ a fat is at room temperature',
            options: ['solid', 'liquid', 'charged', 'polar']
          }
        ],
        correctAnswers: ['protein', 'deoxyribose', 'liquid'],
        hint1: 'Enzymes catalyze reactions and have specific 3D shapes.',
        hint2: 'DNA = deoxyribonucleic acid.',
        hint3: 'Double bonds put kinks in the tails, so they cannot pack tightly.',
        explanation: 'Enzymes are proteins. DNA contains deoxyribose sugar. The more unsaturated a fat is, the more kinked its tails and the more liquid it is at room temperature.'
      }
    }
  ]
}
