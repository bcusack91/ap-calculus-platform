export const bioLipidsPart1Data = {
  topicSlug: 'lipids',
  sections: [
    {
      id: 'lip1-intro',
      type: 'text' as const,
      content: `
# 🧈 Lipids: The Hydrophobic Family

**Lipids** are a diverse group of biomolecules united by one shared trait: they are **mostly hydrophobic** (water-fearing). Unlike carbohydrates and proteins, lipids are **not true polymers** — they don't form by linking identical monomers.

### Why hydrophobicity matters

Hydrophobic molecules:
- Cluster away from water (hydrophobic effect)
- Spontaneously form **bilayers** in aqueous environments → cell membranes
- Pack densely → **2× more energy per gram** than carbohydrates

### The major lipid families

| Lipid | Built from | Primary role |
|-------|-----------|--------------|
| **Triglycerides (fats/oils)** | Glycerol + 3 fatty acids | Long-term energy storage |
| **Phospholipids** | Glycerol + 2 fatty acids + phosphate group | Membrane bilayers |
| **Steroids** | 4 fused carbon rings | Hormones, cholesterol |
| **Waxes** | Long fatty acid + long alcohol | Waterproofing |
      `
    },
    {
      id: 'lip1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why are lipids classified as a "diverse" rather than "polymer" family?',
            options: [
              'They contain no carbon',
              'They do not form by repeated linking of identical monomers',
              'They lack hydrogen',
              'They are inorganic'
            ],
            correctAnswer: 1,
            explanation: 'Lipids include very different molecules (TGs, phospholipids, steroids) that don\'t share a single repeating monomer — so they\'re not true polymers.'
          }
        ]
      }
    },
    {
      id: 'lip1-fa',
      type: 'text' as const,
      content: `
## Fatty Acids: The Common Tail

A **fatty acid** is a long hydrocarbon chain (the "tail") with a carboxyl group ($-COOH$) at one end (the "head").

### Saturated vs Unsaturated

| Type | Bonds in chain | Shape | State at 25 °C |
|------|---------------|-------|---------------|
| **Saturated** | All single bonds (max H) | Straight | Solid (butter, lard) |
| **Unsaturated** | One or more C=C double bonds | Kinked | Liquid (olive oil) |

### Why this matters

Straight saturated chains pack tightly → high melting point → solid at room temp.

Kinked unsaturated chains can't pack as well → lower melting point → liquid at room temp.

This same packing logic also determines membrane fluidity (covered in part 3).
      `
    },
    {
      id: 'lip1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which type of fatty acid is solid at room temperature?',
            options: ['Saturated', 'Monounsaturated', 'Polyunsaturated', 'Trans-unsaturated only'],
            correctAnswer: 0,
            explanation: 'Saturated chains are straight and pack tightly, giving high melting points → solid at room temperature (e.g., butter).'
          }
        ]
      }
    },
    {
      id: 'lip1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Lipids are mostly ___', options: ['hydrophilic', 'hydrophobic', 'ionic', 'polar'] },
          { label: 'A triglyceride contains glycerol and ___ fatty acids', options: ['1', '2', '3', '4'] },
          { label: 'Unsaturated fatty acids contain ___ between carbons', options: ['triple bonds', 'double bonds', 'ionic bonds', 'hydrogen bonds'] }
        ],
        correctAnswers: ['hydrophobic', '3', 'double bonds'],
        hint1: 'They cluster away from water.',
        hint2: 'Tri = three.',
        hint3: 'C=C creates a kink.',
        explanation: 'Lipids are hydrophobic. A triglyceride is glycerol + 3 fatty acids. Unsaturated chains contain one or more C=C double bonds.'
      }
    }
  ]
}
