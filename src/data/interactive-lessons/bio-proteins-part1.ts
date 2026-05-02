export const bioProteinsPart1Data = {
  topicSlug: 'proteins',
  sections: [
    {
      id: 'prot1-intro',
      type: 'text' as const,
      content: `
# 🧬 Proteins: The Cell's Workhorses

**Proteins** carry out most active jobs in cells: catalyzing reactions, transporting cargo, signaling between cells, fighting pathogens, and providing structure. There are roughly **20,000 distinct proteins** in a human cell, all built from just **20 amino acid monomers**.

### Where you'll meet proteins

| Type | Example | Job |
|------|---------|-----|
| **Enzymes** | Amylase, DNA polymerase | Catalyze reactions |
| **Transport** | Hemoglobin | Carry $O_2$ in blood |
| **Structural** | Collagen, keratin | Bone, hair, nails |
| **Defense** | Antibodies | Recognize pathogens |
| **Hormones** | Insulin | Regulate blood glucose |
| **Motor** | Myosin, kinesin | Generate movement |

### Element composition

Proteins always contain C, H, O, **N** (nitrogen makes proteins distinctive), and often S (sulfur, in cysteine and methionine).
      `
    },
    {
      id: 'prot1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which element distinguishes proteins from carbohydrates and most lipids?',
            options: ['Phosphorus', 'Nitrogen', 'Sulfur only', 'Carbon'],
            correctAnswer: 1,
            explanation: 'All amino acids contain a nitrogen-bearing amino group ($-NH_2$), so nitrogen is a hallmark element of proteins.'
          }
        ]
      }
    },
    {
      id: 'prot1-aa',
      type: 'text' as const,
      content: `
## Amino Acid Anatomy

Every amino acid has the same backbone:

- **Amino group** ($-NH_2$)
- **Central α-carbon** with an H
- **Carboxyl group** ($-COOH$)
- **R group** (side chain) — **this is what makes each amino acid unique**

### R-group classes (high yield!)

| R-group type | Property | Examples |
|-------------|----------|----------|
| **Nonpolar / hydrophobic** | Cluster in protein interior | Valine, leucine, alanine |
| **Polar / uncharged** | Form hydrogen bonds | Serine, threonine |
| **Acidic (negative)** | Carboxyl R group | Aspartate, glutamate |
| **Basic (positive)** | Amino R group | Lysine, arginine |
| **Special** | Sulfur (S–S bonds) | Cysteine |

### The peptide bond

Two amino acids join when the carboxyl of one and the amino of the next undergo dehydration synthesis. This **peptide bond** ($-CO-NH-$) chains amino acids into **polypeptides**.
      `
    },
    {
      id: 'prot1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which feature distinguishes one amino acid from another?',
            options: [
              'The amino group',
              'The carboxyl group',
              'The R (side) group',
              'The α-carbon'
            ],
            correctAnswer: 2,
            explanation: 'All 20 amino acids share the same backbone (amino, α-C, carboxyl). The R group (side chain) is unique to each and determines its chemical behavior.'
          }
        ]
      }
    },
    {
      id: 'prot1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'There are ___ standard amino acids', options: ['10', '15', '20', '64'] },
          { label: 'Amino acids link via ___ bonds', options: ['glycosidic', 'peptide', 'phosphodiester', 'ester'] },
          { label: 'A peptide bond is formed by ___', options: ['hydrolysis', 'dehydration synthesis', 'oxidation', 'phosphorylation'] }
        ],
        correctAnswers: ['20', 'peptide', 'dehydration synthesis'],
        hint1: 'Same number as a normal alphabet alphabet block.',
        hint2: '"Polypeptide" gives it away.',
        hint3: 'Water is removed.',
        explanation: 'There are 20 standard amino acids. They join via peptide bonds formed by dehydration synthesis (one water released per bond).'
      }
    }
  ]
}
