export const physics2ElectricFieldsPart1Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'efp1-intro',
      type: 'text' as const,
      content: `
**Part 1: Electric Field Fundamentals** ⚡

In this lesson you'll master:
- Point-charge electric field
- Field direction rules
- Superposition intuition
- Parallel-plate field relationship

Core equation:
$$E = k\frac{|q|}{r^2}$$

Direction:
- Away from positive source charge
- Toward negative source charge
      `,
    },
    {
      id: 'efp1-direction-rules',
      type: 'dropdown-select' as const,
      content: `
**Direction Rules Check**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Field due to a + charge points',
            options: ['toward the charge', 'away from the charge', 'clockwise', 'randomly']
          },
          {
            label: 'Field due to a - charge points',
            options: ['away from the charge', 'toward the charge', 'upward only', 'zero always']
          },
          {
            label: 'At a point, net electric field is found by',
            options: ['adding magnitudes only', 'vector addition of each contribution', 'subtracting all distances', 'multiplying all charges']
          }
        ],
        correctAnswers: ['away from the charge', 'toward the charge', 'vector addition of each contribution'],
        explanation: 'Electric field is a vector. Direction is set by source charge sign.'
      }
    },
    {
      id: 'efp1-scaling-drill',
      type: 'input-boxes' as const,
      content: `
**Field Scaling Drill** 🎯

Enter the multiplier of electric field in each case:

1) Distance changes from $r$ to $2r$
2) Source charge doubles (distance fixed)
3) Source charge triples and distance triples

Use forms like \`1/4\`, \`2\`, \`1/3\`.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/4', '2', '1/3'],
        hint1: 'Use $E \propto q/r^2$.',
        hint2: 'For #3: ×3 from charge and ÷9 from distance.',
        explanation: 'Excellent. You are using proportional reasoning correctly.'
      }
    },
    {
      id: 'efp1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Electric Field Concept Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A +4 μC source charge is replaced by +8 μC at the same location. What happens to E at a fixed point?',
            options: ['E halves', 'E doubles', 'E stays the same', 'E quadruples'],
            correctAnswer: 1,
            explanation: 'Field is directly proportional to source charge.'
          },
          {
            question: 'A point moves from distance r to 3r from a source charge. E changes by:',
            options: ['1/3', '1/9', '3', '9'],
            correctAnswer: 1,
            explanation: 'Inverse-square dependence gives E_new = E_old/9.'
          },
          {
            question: 'Between large parallel plates, the field is best modeled as:',
            options: ['radial', 'uniform', 'circular', 'zero'],
            correctAnswer: 1,
            explanation: 'Ideal parallel plates produce approximately uniform field lines.'
          },
          {
            question: 'If two field vectors at a point are +40 N/C and -15 N/C along x, net field is:',
            options: ['+55 N/C', '+25 N/C', '-25 N/C', '-55 N/C'],
            correctAnswer: 1,
            explanation: 'Add signed components: +40 + (-15) = +25 N/C.'
          }
        ]
      }
    },
    {
      id: 'efp1-wrap',
      type: 'text' as const,
      content: `
**Part 1 Complete** ✅

You now have reliable field instincts for AP Physics 2 problems.

Next: potential energy and electric potential (voltage).
      `,
    },
  ],
}

export const physics2ElectricFieldsPart2Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'efp2-intro',
      type: 'text' as const,
      content: `
**Part 2: Electric Potential and Voltage** 🔋

Potential is a **scalar** (not a vector), which makes many calculations faster.

For point charge:
$$V = k\frac{q}{r}$$

For potential energy:
$$U = qV$$

For uniform fields:
$$\Delta V = -Ed$$
      `,
    },
    {
      id: 'efp2-scalar-check',
      type: 'dropdown-select' as const,
      content: `
**Potential vs Field Check**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electric potential is a',
            options: ['vector', 'scalar', 'tensor', 'unitless number']
          },
          {
            label: 'Net potential from many point charges is found by',
            options: ['vector components', 'algebraic scalar sum', 'cross product', 'always zeroing negatives']
          },
          {
            label: 'Electric field points from',
            options: ['low V to high V', 'high V to low V', 'equal potential only', 'random points']
          }
        ],
        correctAnswers: ['scalar', 'algebraic scalar sum', 'high V to low V'],
        explanation: 'Potential is scalar and field points downhill in potential.'
      }
    },
    {
      id: 'efp2-computation',
      type: 'input-boxes' as const,
      content: `
**Voltage + Energy Drill**

At a point, electric potential is +120 V.
A test charge of +0.50 C is placed there.

Enter in order:
1) Electric potential energy $U$ in joules
2) If the charge moves to a point at +20 V, $\Delta V = V_f - V_i$
3) Using $\Delta U = q\Delta V$, the change in potential energy

Provide numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '-100', '-50'],
        hint1: 'Use U = qV first.',
        hint2: 'Then compute ΔV = 20 - 120, and multiply by q = 0.5.',
        explanation: 'Perfect: U_i = 60 J, ΔV = -100 V, and ΔU = -50 J.'
      }
    },
    {
      id: 'efp2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Potential Mastery Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'If ΔV = -30 V for a +2 C charge, ΔU equals:',
            options: ['-60 J', '-15 J', '+60 J', '+15 J'],
            correctAnswer: 0,
            explanation: 'ΔU = qΔV = (2)(-30) = -60 J.'
          },
          {
            question: 'Which statement is true?',
            options: [
              'Potential is always positive',
              'Potential energy depends on both source and test charge',
              'Field is scalar and potential is vector',
              'Potential lines are parallel to field lines'
            ],
            correctAnswer: 1,
            explanation: 'U = qV, so potential energy depends on the placed charge and the location potential.'
          },
          {
            question: 'Along an equipotential surface, work done by electric force is:',
            options: ['maximum', 'minimum nonzero', 'zero', 'undefined'],
            correctAnswer: 2,
            explanation: 'No potential change along an equipotential, so no electric work.'
          },
          {
            question: 'For a uniform field of 500 N/C over 0.20 m in field direction, ΔV is:',
            options: ['+100 V', '-100 V', '+2500 V', '-2500 V'],
            correctAnswer: 1,
            explanation: 'ΔV = -Ed = -(500)(0.20) = -100 V.'
          }
        ]
      }
    },
    {
      id: 'efp2-wrap',
      type: 'text' as const,
      content: `
**Part 2 Complete** 🎉

You can now solve core AP Physics 2 voltage and potential energy tasks with confidence.

You are ready for capacitor and circuit energy extensions.
      `,
    },
  ],
}
