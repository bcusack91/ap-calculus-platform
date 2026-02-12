export const physics2ElectrostaticsPart1Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
**Part 1: Electric Charge Foundations** ⚡

Welcome to AP Physics 2 Electrostatics.

In this part, you'll master:
- Electric charge and conservation of charge
- Conductors vs insulators
- Coulomb's law structure
- How force changes with distance and charge

By the end, you'll be able to predict electrostatic force changes in seconds.
      `,
    },
    {
      id: 'p1-coulomb-law',
      type: 'text' as const,
      content: `
**Coulomb's Law (Core Equation)**

$$F = k\frac{|q_1 q_2|}{r^2}$$

Where:
- $F$ = electric force magnitude
- $k = 8.99 \times 10^9\ \mathrm{N\cdot m^2/C^2}$
- $q_1, q_2$ = charges
- $r$ = separation distance

**Direction rule:**
- Like charges repel
- Opposite charges attract

The equation gives magnitude. Direction comes from the sign relationship.
      `,
    },
    {
      id: 'p1-proportionality-check',
      type: 'dropdown-select' as const,
      content: `
**Quick Pattern Check** 🎯

Pick the best completion for each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If distance doubles, force becomes',
            options: ['4 times bigger', '2 times bigger', 'half', 'one-fourth']
          },
          {
            label: 'If both charges double, force becomes',
            options: ['one-fourth', 'half', '2 times bigger', '4 times bigger']
          },
          {
            label: 'If one charge triples (other fixed), force becomes',
            options: ['one-third', 'unchanged', '3 times bigger', '9 times bigger']
          }
        ],
        correctAnswers: ['one-fourth', '4 times bigger', '3 times bigger'],
        explanation: 'Coulomb force is directly proportional to each charge and inversely proportional to the square of distance.'
      }
    },
    {
      id: 'p1-fast-scaling',
      type: 'input-boxes' as const,
      content: `
**Fast Scaling Drill** ⚡

Enter only the **multiplier** for force in each case, in order:

1) Distance is doubled (charges unchanged)
2) Distance is halved (charges unchanged)
3) One charge is doubled and distance is doubled

Use: \`1/4\`, \`4\`, \`1/2\`, etc.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/4', '4', '1/2'],
        hint1: 'Use inverse-square with distance first.',
        hint2: 'For #3: charge gives ×2, distance doubled gives ÷4, net is ×(2/4).',
        explanation: 'Great. You are combining direct and inverse-square scaling correctly.'
      }
    },
    {
      id: 'p1-direction-concept',
      type: 'multiple-choice' as const,
      content: `
**Direction and Force Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Two charges are both positive. What is the force direction between them?',
            options: [
              'Attractive (toward each other)',
              'Repulsive (away from each other)',
              'No force',
              'Depends only on distance'
            ],
            correctAnswer: 1,
            explanation: 'Like charges repel, so each charge pushes the other away.'
          },
          {
            question: 'If distance changes from r to 3r, the force magnitude changes by what factor?',
            options: ['1/9', '1/3', '3', '9'],
            correctAnswer: 0,
            explanation: 'Inverse-square law: F ∝ 1/r². So F_new = F_old/9.'
          },
          {
            question: 'What happens to force if one charge is doubled and the other is unchanged?',
            options: ['Force doubles', 'Force halves', 'Force quadruples', 'Force unchanged'],
            correctAnswer: 0,
            explanation: 'F is directly proportional to each charge. Doubling one charge doubles F.'
          },
          {
            question: 'What does Coulomb\'s law equation directly give?',
            options: [
              'Only direction',
              'Only magnitude',
              'Magnitude and direction automatically',
              'Potential energy'
            ],
            correctAnswer: 1,
            explanation: 'The formula gives force magnitude. Direction is determined by charge signs and geometry.'
          }
        ]
      }
    },
    {
      id: 'p1-wrap',
      type: 'text' as const,
      content: `
**Part 1 Complete** ✅

You now have the electrostatics core:
- Charge interaction rules
- Coulomb scaling intuition
- Direction logic

Next, you'll move to electric fields and potential.
      `,
    },
  ],
}

export const physics2ElectrostaticsPart2Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
**Part 2: Electric Fields & Superposition** 🧲

Now we shift from force on one charge pair to the **field model**.

Key idea:
$$\vec{E}=\frac{\vec{F}}{q_{\text{test}}}$$

And for point charges:
$$E = k\frac{|q|}{r^2}$$

Fields add by vectors (superposition).
      `,
    },
    {
      id: 'p2-concept-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Field Rules Quick Check**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electric field direction is defined as the force direction on a',
            options: ['negative test charge', 'positive test charge', 'neutral particle', 'moving electron']
          },
          {
            label: 'Field lines around a positive point charge point',
            options: ['inward', 'outward', 'clockwise', 'counterclockwise']
          },
          {
            label: 'At the midpoint between equal +q and -q charges, net field is typically',
            options: ['zero', 'nonzero', 'undefined', 'independent of distance']
          }
        ],
        correctAnswers: ['positive test charge', 'outward', 'nonzero'],
        explanation: 'Field uses positive test-charge convention. Dipole midpoint has reinforcing directions for field (not cancellation).'
      }
    },
    {
      id: 'p2-input-drill',
      type: 'input-boxes' as const,
      content: `
**Vector Superposition Drill**

Suppose at a point on the x-axis, one source contributes $+30\ \mathrm{N/C}$ and another contributes $-10\ \mathrm{N/C}$.

Enter in order:
1) Net field in N/C
2) Net direction sign (+ or -)
3) If a +2 C test charge is placed there, force magnitude (N)

Format exactly: number, sign, number
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '+', '40'],
        hint1: 'Add field contributions algebraically with sign.',
        hint2: 'Then use F = qE with q = 2 C.',
        explanation: 'Correct: E_net = +20 N/C and |F| = q|E| = 40 N.'
      }
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Electric Field & Potential Concept Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement is true about electric potential (V) and electric field (E)?',
            options: [
              'Potential is a vector and field is a scalar',
              'Both are vectors',
              'Potential is scalar, field is vector',
              'Both are scalars'
            ],
            correctAnswer: 2,
            explanation: 'Electric potential is scalar (adds algebraically), while electric field is vector (adds by components).'
          },
          {
            question: 'If all source charges are doubled, the electric field magnitude at a fixed point becomes',
            options: ['half', 'same', 'double', 'quadruple'],
            correctAnswer: 2,
            explanation: 'E for point charges is directly proportional to source charge.'
          },
          {
            question: 'For a positive test charge, the electric force direction is',
            options: ['always opposite E', 'always along E', 'perpendicular to E', 'random'],
            correctAnswer: 1,
            explanation: 'By definition, E points in the direction of force on a positive test charge.'
          },
          {
            question: 'When can net electric field be zero at a point?',
            options: [
              'Only if there is one source charge',
              'Only for opposite charges',
              'When vector contributions cancel',
              'Never, unless all charges are zero'
            ],
            correctAnswer: 2,
            explanation: 'Net field is zero where the vector sum of all contributions is zero.'
          }
        ]
      }
    },
    {
      id: 'p2-wrap',
      type: 'text' as const,
      content: `
**Part 2 Complete** 🎉

You now have a field-based toolkit for AP Physics 2 electrostatics:
- Direction conventions
- Superposition
- Field/force conversion
- Potential vs field distinctions

Next step can be capacitor energy and circuit bridge topics.
      `,
    },
  ],
}
