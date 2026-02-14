export const chemReactionTypesPart1Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Synthesis & Decomposition Reactions

**Part 1 of 7 — Building Up and Breaking Down**

Chemistry is fundamentally about rearranging atoms. The simplest patterns involve either **combining** simple substances into a complex product or **breaking** a complex substance into simpler pieces. These two reaction types — synthesis and decomposition — are mirror images of each other.
      `
    },
    {
      id: 'rt1-synthesis',
      type: 'text' as const,
      content: `
## Synthesis (Combination) Reactions

A synthesis reaction occurs when two or more reactants combine to form a **single product**.

### General Form

$$A + B \\rightarrow AB$$

### Classic Examples

| Reactants | Product | Balanced Equation |
|-----------|---------|-------------------|
| Metal + Nonmetal | Ionic compound | $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$ |
| Metal oxide + Water | Metal hydroxide | $\\text{CaO} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2$ |
| Nonmetal oxide + Water | Acid | $\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4$ |
| Two elements | Compound | $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ |

### Key Pattern

Look for **multiple reactants** forming **one product**. The number of reactants is always greater than the number of products (which is 1).

### Real-World Example

Rust formation is a synthesis reaction:
$$4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$$
      `
    },
    {
      id: 'rt1-decomposition',
      type: 'text' as const,
      content: `
## Decomposition Reactions

A decomposition reaction occurs when a **single reactant** breaks down into two or more simpler products.

### General Form

$$AB \\rightarrow A + B$$

### Classic Examples

| Reactant | Products | Balanced Equation |
|----------|----------|-------------------|
| Metal carbonate | Metal oxide + CO₂ | $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$ |
| Metal hydroxide | Metal oxide + H₂O | $\\text{Ca(OH)}_2 \\rightarrow \\text{CaO} + \\text{H}_2\\text{O}$ |
| Metal chlorate | Metal chloride + O₂ | $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$ |
| Water (electrolysis) | H₂ + O₂ | $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$ |

### Key Pattern

Look for **one reactant** producing **multiple products**. Decomposition often requires energy input (heat, electricity, or light).

### Common Triggers

- **Heating** (symbol: $\\Delta$ above arrow) — thermal decomposition
- **Electrolysis** — using electrical energy
- **Photodecomposition** — light-driven breakdown (e.g., AgBr in photography)
      `
    },
    {
      id: 'rt1-comparison',
      type: 'text' as const,
      content: `
## Synthesis vs. Decomposition — A Comparison

| Feature | Synthesis | Decomposition |
|---------|-----------|---------------|
| Direction | Simpler → Complex | Complex → Simpler |
| Reactants | Two or more | One |
| Products | One | Two or more |
| Energy | Often releases energy | Often requires energy |
| General form | $A + B \\rightarrow AB$ | $AB \\rightarrow A + B$ |

### Memory Trick

- **Synthesis** = "put together" (syn- means together)
- **Decomposition** = "break apart" (de- means undo, compose means put together)

These reactions are essentially **reverses** of each other. If a synthesis reaction forms a compound, the decomposition of that compound yields the original elements or simpler compounds.
      `
    },
    {
      id: 'rt1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Synthesis & Decomposition Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation represents a synthesis reaction?',
            options: [
              '$2\\\\text{KClO}_3 \\\\rightarrow 2\\\\text{KCl} + 3\\\\text{O}_2$',
              '$2\\\\text{Mg} + \\\\text{O}_2 \\\\rightarrow 2\\\\text{MgO}$',
              '$\\\\text{Zn} + \\\\text{CuSO}_4 \\\\rightarrow \\\\text{ZnSO}_4 + \\\\text{Cu}$',
              '$\\\\text{CH}_4 + 2\\\\text{O}_2 \\\\rightarrow \\\\text{CO}_2 + 2\\\\text{H}_2\\\\text{O}$'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$ is a synthesis reaction: two elements combine to form one compound. The first option is decomposition, the third is single replacement, and the fourth is combustion.'
          },
          {
            question: 'When calcium carbonate is heated, it decomposes. Which products form?',
            options: [
              'Ca + CO₃',
              'CaO + CO₂',
              'Ca(OH)₂ + CO₂',
              'CaO + C + O₂'
            ],
            correctAnswer: 1,
            explanation: '$\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2$. Metal carbonates decompose into the metal oxide and carbon dioxide. This is a classic thermal decomposition reaction.'
          },
          {
            question: 'The electrolysis of water is an example of:',
            options: [
              'Synthesis',
              'Decomposition',
              'Single replacement',
              'Combustion'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{H}_2\\text{O} \\xrightarrow{\\text{electricity}} 2\\text{H}_2 + \\text{O}_2$. One reactant (water) breaks into two simpler products (hydrogen and oxygen gases). This is decomposition.'
          },
          {
            question: 'What characterizes a synthesis reaction?',
            options: [
              'One reactant breaks into multiple products',
              'Two compounds exchange partners',
              'Multiple reactants combine into a single product',
              'A compound reacts with oxygen'
            ],
            correctAnswer: 2,
            explanation: 'Synthesis (combination) reactions have the general form $A + B \\rightarrow AB$. Multiple reactants join to form a single, more complex product.'
          }
        ]
      }
    },
    {
      id: 'rt1-identify-drill',
      type: 'input-boxes' as const,
      content: `
**Identify the Reaction Type** 🧮

For each reaction, type **synthesis** or **decomposition**.

1) $2\\text{Al} + 3\\text{Br}_2 \\rightarrow 2\\text{AlBr}_3$

2) $2\\text{HgO} \\xrightarrow{\\Delta} 2\\text{Hg} + \\text{O}_2$

3) $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['synthesis', 'decomposition', 'synthesis'],
        hint1: 'Two elements combine to form one compound.',
        hint2: 'One compound heated to form two simpler substances.',
        hint3: 'Two elements combine to form ammonia — a single product.',
        explanation: '1) Two elements (Al + Br₂) → one compound (AlBr₃) = synthesis. 2) One compound (HgO) heated → two products (Hg + O₂) = decomposition. 3) Two elements (N₂ + H₂) → one compound (NH₃) = synthesis (the Haber process).'
      }
    },
    {
      id: 'rt1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Synthesis & Decomposition** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a synthesis reaction, the number of products is always',
            options: ['one', 'two', 'three', 'variable']
          },
          {
            label: 'Decomposition reactions typically require',
            options: ['a catalyst only', 'energy input', 'a second reactant', 'no energy']
          },
          {
            label: 'The reaction SO₃ + H₂O → H₂SO₄ is an example of',
            options: ['decomposition', 'synthesis', 'combustion', 'double replacement']
          },
          {
            label: 'The symbol Δ above the arrow in a chemical equation indicates',
            options: ['a catalyst', 'heat is applied', 'light is needed', 'pressure is increased']
          }
        ],
        correctAnswers: ['one', 'energy input', 'synthesis', 'heat is applied'],
        hint1: 'Synthesis: $A + B \\rightarrow AB$ — how many products?',
        hint2: 'Breaking bonds requires energy.',
        hint3: 'Two reactants forming one product.',
        explanation: 'Synthesis always produces exactly one product. Decomposition typically needs energy (heat, light, or electricity) to break bonds. SO₃ + H₂O → H₂SO₄ is synthesis (two reactants → one product). The Δ symbol means heat is applied.'
      }
    },
    {
      id: 'rt1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Synthesis & Decomposition** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a decomposition reaction?',
            options: [
              '$\\\\text{Fe} + \\\\text{S} \\\\rightarrow \\\\text{FeS}$',
              '$2\\\\text{H}_2\\\\text{O}_2 \\\\rightarrow 2\\\\text{H}_2\\\\text{O} + \\\\text{O}_2$',
              '$\\\\text{AgNO}_3 + \\\\text{NaCl} \\\\rightarrow \\\\text{AgCl} + \\\\text{NaNO}_3$',
              '$\\\\text{C}_3\\\\text{H}_8 + 5\\\\text{O}_2 \\\\rightarrow 3\\\\text{CO}_2 + 4\\\\text{H}_2\\\\text{O}$'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$. Hydrogen peroxide (one reactant) breaks down into water and oxygen (two products). This is decomposition.'
          },
          {
            question: 'Predict the product of the synthesis reaction: $\\text{Li} + \\text{F}_2 \\rightarrow ?$',
            options: [
              'Li₂F',
              'LiF',
              'LiF₂',
              'Li₂F₂'
            ],
            correctAnswer: 1,
            explanation: 'Li (charge +1) combines with F (charge −1) to form the ionic compound LiF. The balanced equation is $2\\text{Li} + \\text{F}_2 \\rightarrow 2\\text{LiF}$.'
          }
        ]
      }
    }
  ]
}
