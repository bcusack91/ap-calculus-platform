export const bioEnzymesPart5Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy5-cofactors',
      type: 'text' as const,
      content: `
## Cofactors & Coenzymes

### Cofactors

**Cofactors** are non-protein molecules required for enzyme activity.

| Type | Nature | Examples |
|------|--------|----------|
| **Inorganic cofactors** | Metal ions | $Zn^{2+}$, $Fe^{2+}$, $Mg^{2+}$, $Cu^{2+}$ |
| **Coenzymes** | Organic molecules | NAD⁺, FAD, coenzyme A |
| **Prosthetic groups** | Tightly bound | Heme group in hemoglobin |

### Important Coenzymes

| Coenzyme | Derived from | Function |
|----------|-------------|----------|
| **NAD⁺** | Niacin (B3) | Electron carrier in respiration |
| **FAD** | Riboflavin (B2) | Electron carrier in Krebs cycle |
| **Coenzyme A** | Pantothenic acid (B5) | Carries acetyl groups |
| **ATP** | Adenine nucleotide | Energy currency |
      `
    },
    {
      id: 'enzy5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'NAD⁺ functions as a(n):',
            options: [
              'Enzyme',
              'Substrate',
              'Coenzyme (electron carrier)',
              'Competitive inhibitor'
            ],
            correctAnswer: 2,
            explanation: 'NAD⁺ is a coenzyme that carries electrons (as NADH) during cellular respiration. It shuttles electrons to the electron transport chain.'
          }
        ]
      }
    },
    {
      id: 'enzy5-vitamins',
      type: 'text' as const,
      content: `
## Vitamins as Coenzymes

Many **vitamins** function as coenzymes or coenzyme precursors.

- **Water-soluble vitamins** (B vitamins, vitamin C) often serve as coenzymes
- **Fat-soluble vitamins** (A, D, E, K) have other roles
- Vitamin deficiencies impair enzyme function
- Example: Scurvy (vitamin C deficiency) → impaired collagen synthesis

Without the proper cofactor, an enzyme is called an **apoenzyme** (inactive). With its cofactor, it's a **holoenzyme** (active).
      `
    },
    {
      id: 'enzy5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An apoenzyme is:',
            options: [
              'An enzyme with its cofactor attached',
              'An enzyme without its cofactor (inactive)',
              'A denatured enzyme',
              'An enzyme inhibitor'
            ],
            correctAnswer: 1,
            explanation: 'An apoenzyme is the protein portion of an enzyme without its required cofactor. It\'s inactive. With the cofactor, it becomes a holoenzyme.'
          }
        ]
      }
    },
    {
      id: 'enzy5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Metal ions that assist enzymes are called ___',
            options: ['substrates', 'cofactors', 'products', 'inhibitors']
          },
          {
            label: 'NAD⁺ is derived from vitamin ___',
            options: ['A', 'B3 (niacin)', 'C', 'D']
          },
          {
            label: 'An enzyme with its cofactor is called a ___',
            options: ['apoenzyme', 'holoenzyme', 'proenzyme', 'isoenzyme']
          }
        ],
        correctAnswers: ['cofactors', 'B3 (niacin)', 'holoenzyme'],
        hint1: 'These non-protein helpers are often metal ions.',
        hint2: 'This B vitamin is essential for cellular respiration.',
        hint3: 'Holo = whole, complete.',
        explanation: 'Metal ion helpers are cofactors. NAD⁺ comes from niacin (vitamin B3). A complete, active enzyme with its cofactor is a holoenzyme.'
      }
    }
  ]
}
