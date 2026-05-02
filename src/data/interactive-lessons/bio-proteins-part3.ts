export const bioProteinsPart3Data = {
  topicSlug: 'proteins',
  sections: [
    {
      id: 'prot3-functions',
      type: 'text' as const,
      content: `
## Functions Driven by Shape

Protein **function** depends on **3D shape**, which depends on **amino acid sequence**. Even one wrong amino acid can change the shape and break function — as in **sickle cell anemia**, where a single Glu→Val swap in hemoglobin's β-chain causes red blood cells to deform.

### Major functional categories

| Category | Example | What the shape enables |
|----------|---------|------------------------|
| **Enzyme** | DNA polymerase | Active site complementary to substrate |
| **Transport** | Hemoglobin | Heme pocket binds $O_2$ reversibly |
| **Receptor** | Insulin receptor | Extracellular ligand-binding domain |
| **Antibody** | IgG | Y-shaped tip recognizes specific antigen |
| **Motor** | Myosin | ATPase head walks along actin |
| **Structural** | Collagen | Triple helix gives tensile strength |

### Denaturation: shape lost = function lost

Conditions that disrupt the bonds holding a protein in shape will **denature** it:

- **High temperature** (cooking egg whites)
- **Extreme pH** (stomach acid denaturing food proteins)
- **High salt** or **organic solvents**

Denatured proteins typically cannot refold spontaneously — function is lost permanently.
      `
    },
    {
      id: 'prot3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A single amino acid substitution in hemoglobin causes sickle cell disease. This best illustrates which principle?',
            options: [
              'Carbohydrates determine cell shape',
              'Primary structure determines higher-order structure and function',
              'Lipids are essential for blood transport',
              'Quaternary structure can occur with one polypeptide'
            ],
            correctAnswer: 1,
            explanation: 'Sickle cell disease shows that primary structure (amino acid sequence) ultimately determines folding, shape, and therefore function.'
          }
        ]
      }
    },
    {
      id: 'prot3-enzymes',
      type: 'text' as const,
      content: `
## Enzymes: Function Through Active Sites

Enzymes are proteins that **lower activation energy** so reactions can proceed at body temperature.

### Why enzymes are specific

The **active site** is a precisely shaped pocket complementary to the **substrate**. This **induced fit** model explains why most enzymes catalyze just one reaction.

### What can disrupt enzyme function?

| Cause | Effect |
|-------|--------|
| Temperature too high | Denatures protein → no active site |
| pH outside optimum | Disrupts ionic / H-bond network |
| Competitive inhibitor | Blocks active site |
| Allosteric inhibitor | Binds elsewhere → reshapes active site |

This is the same principle covered in detail in the **Enzymes & Metabolism** topic.
      `
    },
    {
      id: 'prot3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An allosteric inhibitor reduces enzyme activity by:',
            options: [
              'Cooking the substrate',
              'Binding the active site directly',
              'Binding a different site and reshaping the active site',
              'Adding water across the substrate'
            ],
            correctAnswer: 2,
            explanation: 'Allosteric regulators bind a non-active site and induce a conformational change that alters the active site\'s ability to bind substrate.'
          }
        ]
      }
    },
    {
      id: 'prot3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Loss of a protein\'s 3D shape is called ___', options: ['hydrolysis', 'denaturation', 'glycosylation', 'phosphorylation'] },
          { label: 'Enzymes work by ___ activation energy', options: ['raising', 'lowering', 'eliminating', 'doubling'] },
          { label: 'Hemoglobin\'s primary job is to transport ___', options: ['glucose', 'oxygen', 'hormones', 'ATP'] }
        ],
        correctAnswers: ['denaturation', 'lowering', 'oxygen'],
        hint1: 'Cooked egg white.',
        hint2: 'Catalysts reduce the energy barrier.',
        hint3: 'Carried by red blood cells.',
        explanation: 'Denaturation = loss of 3D shape (and therefore function). Enzymes lower activation energy without changing equilibrium. Hemoglobin shuttles $O_2$ from lungs to tissues.'
      }
    }
  ]
}
