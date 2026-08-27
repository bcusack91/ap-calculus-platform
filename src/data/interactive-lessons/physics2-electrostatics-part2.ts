export const physics2ElectrostaticsPart2Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec2-intro',
      type: 'text' as const,
      content: `
# 📐 Coulomb's Law — The Equation

**Part 2 of 7**

Now that you know what charge is, let's quantify the force between charges. Coulomb's Law is the **foundation equation** of electrostatics — every other concept builds on it.
      `
    },
    {
      id: 'ec2-coulombs-law',
      type: 'text' as const,
      content: `
## Coulomb's Law

$$F_E = k\\frac{|q_1 q_2|}{r^2}$$

Where:
- $F_E$ = electrostatic force (N)
- $k = 8.99 \\times 10^9$ $N\\cdot m^{2}/C^{2}$ (Coulomb's constant)
- $q_1, q_2$ = the two charges (C)
- $r$ = distance between charge centers (m)

### What This Equation Tells You

1. **Force is proportional to each charge** — double one charge, double the force
2. **Force follows an inverse-square law** — double the distance, force drops to 1/4
3. **The equation gives magnitude only** — direction comes from the charge signs

### Direction Rules

| $q_1$ | $q_2$ | Force |
|--------|--------|-------|
| + | + | Repulsive (push apart) |
| − | − | Repulsive (push apart) |
| + | − | Attractive (pull together) |
| − | + | Attractive (pull together) |

### Comparison with Gravity

$$F_g = G\\frac{m_1 m_2}{r^2}$$

Same mathematical form! But key differences:
- Gravity is **always attractive**; electric force can be attractive **or** repulsive
- Electric force is vastly stronger ($\\sim 10^{36}$ times for an electron-proton pair)
      `
    },
    {
      id: 'ec2-scaling',
      type: 'text' as const,
      content: `
## Proportional Reasoning — The AP Shortcut

Most AP Physics 2 Coulomb's Law questions don't ask you to plug in numbers. They ask: **"What happens to the force if..."**

### The Key Relationships

$$F \\propto q_1 \\qquad F \\propto q_2 \\qquad F \\propto \\frac{1}{r^2}$$

### Quick Scaling Examples

| Change | Effect on Force |
|--------|----------------|
| Double $q_1$ | $F \\times 2$ |
| Triple $r$ | $F \\times \\frac{1}{9}$ |
| Double both charges | $F \\times 4$ |
| Double $q_1$, double $r$ | $F \\times \\frac{1}{2}$ |
| Triple $q_1$, halve $r$ | $F \\times 12$ |

**The trick**: multiply all the individual factors together.
      `
    },
    {
      id: 'ec2-proportionality-drill',
      type: 'dropdown-select' as const,
      content: `
**Proportional Reasoning Check** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If distance doubles, force becomes',
            options: ['4× bigger', '2× bigger', 'half', 'one-fourth']
          },
          {
            label: 'If both charges double, force becomes',
            options: ['one-fourth', 'half', '2× bigger', '4× bigger']
          },
          {
            label: 'If one charge triples (other fixed), force becomes',
            options: ['one-third', 'unchanged', '3× bigger', '9× bigger']
          }
        ],
        correctAnswers: ['one-fourth', '4× bigger', '3× bigger'],
        hint1: 'Force is inversely proportional to distance squared.',
        hint2: 'Force is directly proportional to each charge.',
        hint3: 'Only the changed quantity matters — everything else stays fixed.',
        explanation: 'Coulomb force scales directly with each charge and inversely with distance squared.'
      }
    },
    {
      id: 'ec2-scaling-input',
      type: 'input-boxes' as const,
      content: `
**Scaling Drill** ⚡

Enter the **multiplier** for force in each case:

1) Distance is doubled (charges unchanged)

2) Distance is halved (charges unchanged)

3) One charge is doubled AND distance is doubled

Use fractions like \`1/4\` or whole numbers like \`4\`.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/4', '4', '1/2'],
        hint1: 'Inverse-square: doubling distance → $1/(2^{2})$ = 1/4.',
        hint2: 'Halving distance → $1/(1/2)^{2}$ = 4.',
        hint3: 'Charge ×2 gives ×2. Distance ×2 gives ×1/4. Net: 2 × 1/4 = 1/2.',
        explanation: 'Combine direct and inverse-square factors by multiplying them together.'
      }
    },
    {
      id: 'ec2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Coulomb's Law Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Two charges are both positive. What is the force between them?',
            options: [
              'Attractive (toward each other)',
              'Repulsive (away from each other)',
              'Zero — positive charges don\'t interact',
              'Depends only on distance'
            ],
            correctAnswer: 1,
            explanation: 'Like charges repel. Both positive → each pushes the other away.'
          },
          {
            question: 'If distance changes from r to 3r, force magnitude changes by what factor?',
            options: ['1/9', '1/3', '3', '9'],
            correctAnswer: 0,
            explanation: 'Inverse-square law: F ∝ $1/r^{2}$. Distance tripled → F_new = F_old / 9.'
          },
          {
            question: 'What does Coulomb\'s Law equation directly give you?',
            options: [
              'Only direction of the force',
              'Only magnitude of the force',
              'Both magnitude and direction',
              'The electric potential energy'
            ],
            correctAnswer: 1,
            explanation: 'The absolute value signs mean the equation gives magnitude only. Direction is determined separately by charge signs.'
          },
          {
            question: 'How does the electric force between an electron and proton compare to their gravitational force?',
            options: [
              'They are about equal',
              'Gravity is much stronger',
              'Electric force is about $10^{36}$ times stronger',
              'They can\'t be compared'
            ],
            correctAnswer: 2,
            explanation: 'The electric force between fundamental particles is vastly stronger than gravity — by about $10^{36}$. This is why electrostatics dominates at atomic scales.'
          }
        ]
      }
    },
    {
      id: 'ec2-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — Common Coulomb's Law traps.
      `,
      exercise: {
        questions: [
          {
            question: 'A student calculates a negative value for Coulomb force magnitude. What went wrong?',
            options: [
              'Nothing — negative means attractive',
              'They forgot the absolute value signs around the charges',
              'The charges were too small',
              'They used the wrong units'
            ],
            correctAnswer: 1,
            explanation: 'The formula uses |$q_{1}q_{2}$|, giving a positive magnitude. Direction (attractive vs repulsive) is determined separately from the formula.'
          },
          {
            question: 'A student says: "I doubled the distance, so force is halved." What\'s the error?',
            options: [
              'Nothing — that\'s correct',
              'Force follows inverse-square, not inverse — it becomes one-fourth',
              'Force doesn\'t depend on distance',
              'You can\'t change the distance'
            ],
            correctAnswer: 1,
            explanation: 'Common mistake! Force goes as $1/r^{2}$, not 1/r. Doubling distance → force × $(1/2^{2})$ = force/4.'
          }
        ]
      }
    }
  ]
}
