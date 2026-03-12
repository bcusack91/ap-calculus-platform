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
              'Wax'
            ],
            correctAnswer: 1,
            explanation: 'Phospholipids have glycerol + 2 fatty acids + phosphate group. Triglycerides have glycerol + 3 fatty acids.'
          },
          {
            question: 'Which macromolecule would be most affected by a change in pH?',
            options: [
              'Starch',
              'DNA',
              'A protein enzyme',
              'Triglyceride'
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
              'They contain different elements',
              'They have different glycosidic linkages',
              'Cellulose has more branches',
              'Starch contains fructose'
            ],
            correctAnswer: 1,
            explanation: 'Starch uses α-glycosidic linkages (digestible), cellulose uses β-glycosidic linkages (indigestible by humans). Same monomer, different bonds.'
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
            label: 'Trans fats are created by ___ unsaturated fats',
            options: ['heating', 'hydrogenating', 'oxidizing', 'dehydrating']
          }
        ],
        correctAnswers: ['protein', 'deoxyribose', 'hydrogenating'],
        hint1: 'Enzymes catalyze reactions and have specific 3D shapes.',
        hint2: 'DNA = deoxyribonucleic acid.',
        hint3: 'Adding hydrogen atoms to double bonds.',
        explanation: 'Enzymes are proteins. DNA contains deoxyribose sugar. Trans fats are made by hydrogenating (adding hydrogen to) unsaturated fats.'
      }
    }
  ]
}
