export const bioCarbohydratesPart1Data = {
  topicSlug: 'carbohydrates',
  sections: [
    {
      id: 'carb1-intro',
      type: 'text' as const,
      content: `
# 🍞 Carbohydrates: The Cell's Quick Energy Source

**Carbohydrates** are organic molecules built from carbon, hydrogen, and oxygen — usually in the ratio $(CH_2O)_n$. They are the most abundant biomolecules on Earth and serve as both **immediate energy** and **structural support**.

### Where you'll meet carbohydrates

| Where | Example |
|-------|---------|
| Blood | Glucose powers nearly every cell |
| Plants | Starch (storage) and cellulose (cell walls) |
| Animals | Glycogen (liver/muscle storage) |
| Cell surface | Glycoproteins for cell recognition |

### Big idea

Glucose is the universal cellular fuel — it enters glycolysis and ultimately drives ATP production in respiration.
      `
    },
    {
      id: 'carb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which empirical formula best represents most carbohydrates?',
            options: ['$C_n H_{2n+2}$', '$(CH_2O)_n$', '$C_n H_n O_n N$', '$(CHO_2)_n$'],
            correctAnswer: 1,
            explanation: 'Carbohydrates have a 1:2:1 ratio of C:H:O, which is captured by the formula $(CH_2O)_n$ — literally "carbon" plus "water".'
          }
        ]
      }
    },
    {
      id: 'carb1-monomer',
      type: 'text' as const,
      content: `
## Monomers: Monosaccharides

The simplest carbohydrates are **monosaccharides** ("single sugars"). They are classified by carbon count:

- **Triose** (3C) — glyceraldehyde
- **Pentose** (5C) — ribose, deoxyribose
- **Hexose** (6C) — glucose, fructose, galactose

### Building Up

| Term | Number of monomers |
|------|-------------------|
| Monosaccharide | 1 |
| Disaccharide | 2 |
| Oligosaccharide | 3–10 |
| Polysaccharide | many |

### Bond Formation

Two monosaccharides join through a **glycosidic linkage** formed by **dehydration synthesis** (loss of $H_2O$).
      `
    },
    {
      id: 'carb1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two glucose molecules join to form maltose. What else is produced?',
            options: ['ATP', 'A water molecule', 'A hydrogen ion', 'Carbon dioxide'],
            correctAnswer: 1,
            explanation: 'A glycosidic bond forms by dehydration synthesis, removing one water molecule per bond formed.'
          }
        ]
      }
    },
    {
      id: 'carb1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A 6-carbon sugar is called a ___', options: ['triose', 'pentose', 'hexose', 'heptose'] },
          { label: 'Two monosaccharides are joined by a ___ bond', options: ['peptide', 'phosphodiester', 'glycosidic', 'ester'] },
          { label: 'Hydrolysis ___ water to break bonds', options: ['removes', 'adds', 'ignores', 'oxidizes'] }
        ],
        correctAnswers: ['hexose', 'glycosidic', 'adds'],
        hint1: 'Hex = 6.',
        hint2: 'Glyco = sugar.',
        hint3: 'Hydro = water, lysis = breaking.',
        explanation: 'Glucose is a hexose (6C). Glycosidic bonds join sugars. Hydrolysis adds water to cleave bonds.'
      }
    }
  ]
}
