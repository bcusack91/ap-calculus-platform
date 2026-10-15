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

- **Storage polysaccharides** (starch, glycogen) are coiled and often branched → many chain ends where glucose can be released quickly when energy is needed.
- **Structural polysaccharides** (cellulose, chitin) are straight, unbranched chains that bundle into rigid fibers → great for support, hard to digest.

Starch and cellulose are both made of glucose; the monomers are simply connected in a different arrangement. Because enzymes are specific to the shape of their substrate, that difference is why we can digest starch but not cellulose. (The exact bond geometry is not tested on the AP exam.)
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
              'Cellulose contains nitrogen atoms that human enzymes cannot break apart',
              'Human enzymes fit starch\'s linkages but not the arrangement in cellulose',
              'Cellulose is a lipid, not a true carbohydrate, so human amylase ignores it',
              'Starch has much shorter chains than cellulose, so humans absorb it whole'
            ],
            correctAnswer: 1,
            explanation: 'Enzymes are specific to the shape of their substrate. Human digestive enzymes fit the way glucose units are linked in starch, but cellulose links the same glucose units in a different arrangement that those enzymes cannot bind. Grazing animals digest cellulose only with help from gut microbes.'
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
              'Amino acid sequence of the hemoglobin inside red blood cells',
              'Lipid composition of the membrane bilayer',
              'Carbohydrate residues attached to membrane glycoproteins',
              'Number and size of mitochondria in each cell'
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
          { label: 'Compared with cellulose, glycogen is much more ___', options: ['branched', 'fibrous', 'rigid', 'linear'] }
        ],
        correctAnswers: ['glycogen', 'chitin', 'branched'],
        hint1: 'Liver and muscle reservoir.',
        hint2: 'Modified glucose with nitrogen.',
        hint3: 'Storage polymers branch; structural polymers form straight fibers.',
        explanation: 'Glycogen is the animal storage polysaccharide. Chitin (modified glucose) builds insect exoskeletons. Glycogen is highly branched for fast glucose release, while cellulose forms straight, unbranched fibers that give plant cell walls their strength.'
      }
    }
  ]
}
