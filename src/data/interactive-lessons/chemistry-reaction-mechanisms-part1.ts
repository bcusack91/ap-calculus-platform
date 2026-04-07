export const chemReactionMechanismsPart1Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm1-intro',
      type: 'text' as const,
      content: `
# ⚙️ Elementary Steps

**Part 1 of 7 — Breaking Reactions into Steps**

Most chemical reactions do not occur in a single step. Instead, they proceed through a series of simpler reactions called **elementary steps**. The collection of elementary steps that makes up an overall reaction is called the **reaction mechanism**.
      `
    },
    {
      id: 'rm1-elementary-steps',
      type: 'text' as const,
      content: `
## What Is an Elementary Step?

An **elementary step** (or elementary reaction) is a single molecular event — one collision or one molecular rearrangement. It describes exactly what happens at the molecular level.

### Key Property

For an elementary step, the **rate law can be written directly from the stoichiometry** of that step. This is NOT true for overall reactions.

### Example

Overall: $2\\text{NO}_2 + \\text{F}_2 \\rightarrow 2\\text{NO}_2\\text{F}$

Proposed mechanism:
- Step 1: $\\text{NO}_2 + \\text{F}_2 \\rightarrow \\text{NO}_2\\text{F} + \\text{F}$ (slow)
- Step 2: $\\text{NO}_2 + \\text{F} \\rightarrow \\text{NO}_2\\text{F}$ (fast)

Each step is an elementary reaction with its own rate law determined by its molecularity.
      `
    },
    {
      id: 'rm1-molecularity',
      type: 'text' as const,
      content: `
## Molecularity

**Molecularity** is the number of reactant particles (molecules, atoms, or ions) involved in an elementary step.

| Molecularity | Name | Example | Rate Law |
|-------------|------|---------|----------|
| 1 | Unimolecular | $\\text{A} \\rightarrow \\text{products}$ | $\\text{rate} = k[\\text{A}]$ |
| 2 | Bimolecular | $\\text{A} + \\text{B} \\rightarrow \\text{products}$ | $\\text{rate} = k[\\text{A}][\\text{B}]$ |
| 2 | Bimolecular | $2\\text{A} \\rightarrow \\text{products}$ | $\\text{rate} = k[\\text{A}]^2$ |
| 3 | Termolecular | $\\text{A} + \\text{B} + \\text{C} \\rightarrow \\text{products}$ | $\\text{rate} = k[\\text{A}][\\text{B}][\\text{C}]$ |

### Important

- **Termolecular** steps are extremely rare because three-body collisions are very unlikely
- Molecularity is always a **positive integer** (1, 2, or 3)
- Molecularity applies **only** to elementary steps, **never** to overall reactions
- **Molecularity ≠ Order** for overall reactions, but they ARE equal for elementary steps
      `
    },
    {
      id: 'rm1-molecularity-quiz',
      type: 'multiple-choice' as const,
      content: `
**Molecularity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The elementary step NO₂ + CO → NO + CO₂ is:',
            options: [
              'Unimolecular',
              'Bimolecular',
              'Termolecular',
              'Cannot determine without data'
            ],
            correctAnswer: 1,
            explanation: 'Two reactant molecules (NO₂ and CO) collide, so this is bimolecular. For this elementary step, rate = k[NO₂][CO].'
          },
          {
            question: 'For the elementary step O₃ → O₂ + O, the rate law is:',
            options: [
              'rate = k[O₂][O]',
              'rate = k[O₃]',
              'rate = k[O₃]²',
              'Cannot write from stoichiometry'
            ],
            correctAnswer: 1,
            explanation: 'This is a unimolecular decomposition (one reactant molecule). For an elementary step, the rate law comes directly from stoichiometry: rate = k[O₃].'
          },
          {
            question: 'Why are termolecular elementary steps so rare?',
            options: [
              'They violate conservation of mass',
              'Three molecules rarely collide simultaneously with correct energy and orientation',
              'They always have zero activation energy',
              'They are too fast to observe'
            ],
            correctAnswer: 1,
            explanation: 'A three-body collision is statistically very unlikely. For three molecules to collide simultaneously with both sufficient energy AND correct orientation is extremely improbable.'
          }
        ]
      }
    },
    {
      id: 'rm1-mechanism-rules',
      type: 'text' as const,
      content: `
## Rules for Valid Mechanisms

A proposed mechanism must satisfy two essential criteria:

### Rule 1: Steps Must Sum to the Overall Reaction

When all elementary steps are added together, intermediates cancel, and the result must equal the overall balanced equation.

### Rule 2: Rate Law Must Be Consistent

The rate law predicted by the mechanism must match the experimentally observed rate law.

### Example Verification

Overall: $2\\text{NO}_2 + \\text{F}_2 \\rightarrow 2\\text{NO}_2\\text{F}$

Step 1: $\\text{NO}_2 + \\text{F}_2 \\rightarrow \\text{NO}_2\\text{F} + \\text{F}$
Step 2: $\\text{NO}_2 + \\text{F} \\rightarrow \\text{NO}_2\\text{F}$

**Sum:** $2\\text{NO}_2 + \\text{F}_2 + \\text{F} \\rightarrow 2\\text{NO}_2\\text{F} + \\text{F}$

F cancels: $2\\text{NO}_2 + \\text{F}_2 \\rightarrow 2\\text{NO}_2\\text{F}$ ✓
      `
    },
    {
      id: 'rm1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Elementary Step Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For an elementary step, the exponents in the rate law equal the',
            options: ['overall order', 'stoichiometric coefficients', 'number of products', 'activation energy']
          },
          {
            label: 'A reaction mechanism is a',
            options: ['single step process', 'series of elementary steps', 'type of equilibrium', 'rate law']
          },
          {
            label: 'Molecularity can ONLY be assigned to',
            options: ['overall reactions', 'elementary steps', 'catalysts', 'products']
          },
          {
            label: 'If 2A → products is an elementary step, the rate law is',
            options: ['rate = k[A]', 'rate = k[A]²', 'rate = 2k[A]', 'rate = k[A]^(1/2)']
          }
        ],
        correctAnswers: ['stoichiometric coefficients', 'series of elementary steps', 'elementary steps', 'rate = k[A]²'],
        hint1: 'For elementary steps (and only elementary steps), rate law exponents = coefficients.',
        hint2: 'A mechanism is the sequence of elementary steps that make up the overall reaction.',
        hint3: 'Molecularity describes a single molecular event — an elementary step.',
        explanation: 'For elementary steps: exponents = stoichiometric coefficients. A mechanism is a series of elementary steps. Molecularity applies only to elementary steps. 2A → products (elementary): rate = k[A]².'
      }
    },
    {
      id: 'rm1-practice-problem',
      type: 'input-boxes' as const,
      content: `
**Practice: Analyzing Elementary Steps** 🧮

Consider the mechanism:
- Step 1: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{IO}^-$ (slow)
- Step 2: $\\text{H}_2\\text{O}_2 + \\text{IO}^- \\rightarrow \\text{H}_2\\text{O} + \\text{O}_2 + \\text{I}^-$ (fast)

**1)** What is the molecularity of Step 1? (enter a number)

**2)** What is the molecularity of Step 2? (enter a number)

**3)** How many intermediates are there? (enter a number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '1'],
        hint1: 'Step 1 has two reactants (H₂O₂ + I⁻) → bimolecular = 2.',
        hint2: 'Step 2 has two reactants (H₂O₂ + IO⁻) → bimolecular = 2.',
        hint3: 'IO⁻ is produced in Step 1 and consumed in Step 2. I⁻ is a catalyst (regenerated). The intermediate is IO⁻.',
        explanation: '1) Step 1: H₂O₂ + I⁻ → 2 reactant particles → bimolecular (2). 2) Step 2: H₂O₂ + IO⁻ → 2 reactant particles → bimolecular (2). 3) IO⁻ is the only intermediate (produced then consumed). I⁻ is a catalyst (present initially and regenerated).'
      }
    },
    {
      id: 'rm1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Elementary Steps** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why can\'t we write the rate law directly from the overall balanced equation?',
            options: [
              'The overall equation doesn\'t conserve mass',
              'The overall equation may not represent a single molecular event',
              'Rate laws always have integer exponents',
              'The overall equation is always wrong'
            ],
            correctAnswer: 1,
            explanation: 'Only elementary steps represent single molecular events. The overall reaction is usually the sum of multiple steps, so its stoichiometry doesn\'t directly give the rate law. The rate law must be determined experimentally.'
          },
          {
            question: 'The overall reaction A + 2B → C + D has an experimentally determined rate law: rate = k[A][B]. This tells us the reaction:',
            options: [
              'Occurs in one bimolecular step',
              'Cannot occur in one step since the rate law doesn\'t match stoichiometry',
              'Must involve a catalyst',
              'Has no activation energy'
            ],
            correctAnswer: 1,
            explanation: 'If it were a single elementary step, the rate law would be rate = k[A][B]² (from stoichiometry). Since the experimental rate law is rate = k[A][B], the reaction must have a multi-step mechanism.'
          }
        ]
      }
    }
  ]
}
