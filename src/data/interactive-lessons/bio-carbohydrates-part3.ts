export const bioCarbohydratesPart3Data = {
  topicSlug: 'carbohydrates',
  sections: [
    {
      id: 'carb3-functions',
      type: 'text' as const,
      content: `
## Why Cells Need Carbohydrates

Carbohydrates serve **four** core biological roles:

| Function | Example | Where |
|----------|---------|-------|
| **Quick energy** | Glucose | Cytoplasm → glycolysis |
| **Energy storage** | Starch (plants), glycogen (animals) | Plastids, liver, muscle |
| **Structural support** | Cellulose, chitin, peptidoglycan | Cell walls, exoskeletons |
| **Cell recognition** | Glycoproteins, glycolipids | Plasma membrane outer surface |

### Storage vs Structural

- **Storage polysaccharides** use **α-glycosidic linkages** that coil → easy to mobilize when energy is needed.
- **Structural polysaccharides** use **β-glycosidic linkages** that form rigid straight fibers → great for support, hard to digest.

This single linkage difference (α vs β) is why we can digest starch but not cellulose.
      `
    },
    {
      id: 'carb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why can humans digest starch but not cellulose, even though both are glucose polymers?',
            options: [
              'Cellulose contains nitrogen atoms our enzymes cannot break',
              'Humans lack enzymes that hydrolyze β-1,4 glycosidic linkages',
              'Cellulose is a lipid, not a true carbohydrate',
              'Starch contains shorter chains than cellulose'
            ],
            correctAnswer: 1,
            explanation: 'Amylase digests α-1,4 linkages found in starch. Cellulose uses β-1,4 linkages, which require cellulase — an enzyme humans (and most animals) do not produce.'
          }
        ]
      }
    },
    {
      id: 'carb3-signaling',
      type: 'text' as const,
      content: `
## Cell-Surface Sugars: Identity Cards

Short carbohydrate chains attached to membrane lipids and proteins (**glycolipids** and **glycoproteins**) point outward from the cell surface like name tags.

### Roles of cell-surface carbohydrates

- **Cell–cell recognition** during embryonic development
- **Blood type determination** (ABO blood groups differ only in their terminal sugar)
- **Pathogen attachment** — many viruses and bacteria latch on to specific sugar patterns
- **Immune system targeting** — antibodies often recognize sugar epitopes

### Key term

The total carbohydrate coating of a cell is called the **glycocalyx**.
      `
    },
    {
      id: 'carb3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The ABO blood type system is based on differences in:',
            options: [
              'Protein sequence on red blood cells',
              'Lipid composition of the membrane',
              'Carbohydrate residues attached to membrane glycoproteins',
              'Number of mitochondria per cell'
            ],
            correctAnswer: 2,
            explanation: 'ABO blood groups differ in the terminal carbohydrate (a sugar epitope) attached to membrane glycoproteins on red blood cells.'
          }
        ]
      }
    },
    {
      id: 'carb3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Animals store excess glucose as ___', options: ['starch', 'cellulose', 'glycogen', 'chitin'] },
          { label: 'Insects build their exoskeletons largely from ___', options: ['cellulose', 'chitin', 'starch', 'glycogen'] },
          { label: 'Cellulose chains link via ___-glycosidic bonds', options: ['α-1,4', 'β-1,4', 'α-1,6', 'β-1,2'] }
        ],
        correctAnswers: ['glycogen', 'chitin', 'β-1,4'],
        hint1: 'Liver and muscle reservoir.',
        hint2: 'Modified glucose with nitrogen.',
        hint3: 'Beta linkages = straight, rigid fibers.',
        explanation: 'Glycogen is the animal storage polysaccharide. Chitin (modified glucose) builds insect exoskeletons. Cellulose uses β-1,4 linkages, giving plant cell walls their tensile strength.'
      }
    }
  ]
}
