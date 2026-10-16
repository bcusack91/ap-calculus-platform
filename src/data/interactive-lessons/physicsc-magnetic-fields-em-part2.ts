export const physCEMMagFieldsPart2Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p2-intro',
      type: 'text' as const,
      content: `# 🔌 Force on Current-Carrying Wires

**Part 2 of 7 — Wires in Magnetic Fields**

---

### Force on a Wire

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

Magnitude: $F = BIL\\sin\\theta$

where $L$ is the length of wire in the field and $\\vec{L}$ points along the conventional current.

---

### Force Between Parallel Wires

Wire 1 makes a field $B_1 = \\mu_0 I_1/(2\\pi d)$ at wire 2, so the force per unit length on wire 2 is

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

> 🔑 Currents in the same direction attract; currents in opposite directions repel.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-motor',
      type: 'text' as const,
      content: `### Force on a Bent Wire, and a Loop Near a Long Wire

For a wire of arbitrary shape, sum the force on each element: $\\vec{F} = I\\int d\\vec{l}\\times\\vec{B}$. In a **uniform** field, $\\vec{B}$ factors out and the integral reduces to the straight-line displacement between endpoints:

$\\vec{F} = I\\,\\vec{L}_{\\text{net}}\\times\\vec{B},$

where $\\vec{L}_{\\text{net}}$ points from start to finish. A semicircle of radius $R$ therefore feels the same force as a straight wire of length $2R$ joining its ends.

**Closed loop in a uniform field ⇒ zero net force.** For any closed loop $\\oint d\\vec{l} = 0$, so the net force vanishes.

**Closed loop in a NONuniform field ⇒ net force.** Put a rectangular loop beside a long straight wire, in the same plane. The field $B = \\mu_0 I_1/(2\\pi r)$ is stronger at the near side than at the far side. The two sides perpendicular to the wire feel equal and opposite forces that cancel, but the two sides parallel to the wire do not:

$F_{\\text{net}} = \\frac{\\mu_0 I_1 I_2 L}{2\\pi}\\left(\\frac{1}{a} - \\frac{1}{a + w}\\right)$

where $L$ is the length of the parallel sides, $a$ the distance to the near side, and $w$ the loop's width. The near side wins, so the loop is pulled **toward** the wire when its near-side current is parallel to $I_1$.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-worked',
      type: 'text' as const,
      content: `### Worked Example — Net Force on a Loop Beside a Long Wire

A long straight wire carries $I_1 = 20\\text{ A}$. A rectangular loop in the same plane carries $I_2 = 5.0\\text{ A}$; its sides parallel to the wire have length $L = 0.30\\text{ m}$, the near side is $a = 0.050\\text{ m}$ from the wire, and the far side is $0.15\\text{ m}$ from it. The near-side current runs parallel to $I_1$. Find the net force on the loop.

**Step 1 — Near side.** $F_{\\text{near}} = \\frac{\\mu_0 I_1 I_2 L}{2\\pi a} = \\frac{(2\\times10^{-7})(20)(5.0)(0.30)}{0.050} = \\frac{6.0\\times10^{-6}}{0.050} = 1.2\\times10^{-4}\\text{ N}$, toward the wire (parallel currents attract).

**Step 2 — Far side.** $F_{\\text{far}} = \\frac{6.0\\times10^{-6}}{0.15} = 4.0\\times10^{-5}\\text{ N}$, away from the wire (its current is antiparallel to $I_1$).

**Step 3 — The perpendicular sides.** Each element of the top side has a partner on the bottom side at the same distance carrying current the opposite way, so their forces cancel.

**Step 4 — Net force.** $F_{\\text{net}} = 1.2\\times10^{-4} - 4.0\\times10^{-5} = 8.0\\times10^{-5}\\text{ N}$, toward the wire.

**Takeaway.** "Closed loop ⇒ zero force" holds only in a **uniform** field. In a field that varies with position, add the force on each side separately.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 m wire carrying 3 A is perpendicular to a 0.5 T field. $F =$',
            options: ['$1$ N', '$3$ N', '$1.5$ N', '$6$ N'],
            correctAnswer: 1,
            explanation: '$F = BIL\\sin(90^\\circ) = 0.5(3)(2)(1) = 3$ N.'
          },
          {
            question: 'The net magnetic force on a closed current loop in a uniform field is:',
            options: ['Always zero', 'Equal to $BIL$', 'Equal to $4BIL$', 'Maximum when $\\theta = 0$'],
            correctAnswer: 0,
            explanation: 'Since $\\oint d\\vec{l} = 0$, $\\vec{F} = I(\\oint d\\vec{l})\\times\\vec{B} = 0$: the forces on opposite sides cancel. This holds only when the field is uniform.'
          },
          {
            question: 'A rectangular loop lies beside a long straight wire, in the same plane. The loop’s near side carries current parallel to the wire’s current. The net magnetic force on the loop points:',
            options: ['Toward the wire', 'Away from it', 'Nowhere (zero)', 'Along the wire'],
            correctAnswer: 0,
            explanation: 'The near side (parallel current) is attracted and the far side (antiparallel) is repelled, but the field is stronger at the near side, so attraction wins. The zero-force rule applies only in a uniform field.'
          },
          {
            question: 'Two long parallel wires $0.20$ m apart each carry $10$ A. The force per meter of length between them is:',
            options: ['$1.0\\times10^{-4}$ N/m', '$2.0\\times10^{-4}$ N/m', '$5.0\\times10^{-5}$ N/m', '$6.3\\times10^{-4}$ N/m'],
            correctAnswer: 0,
            explanation: '$F/L = \\mu_0 I_1 I_2/(2\\pi d) = (2\\times10^{-7})(10)(10)/0.20 = 1.0\\times10^{-4}$ N/m. Leaving out the $2\\pi$ gives $6.3\\times10^{-4}$ N/m.'
          },
          {
            question: 'A wire makes a 30° angle with a 0.40 T field and carries 5.0 A over a length of 0.50 m. The force on it is:',
            options: ['$0.50$ N', '$1.0$ N', '$0.87$ N', '$2.0$ N'],
            correctAnswer: 0,
            explanation: '$F = BIL\\sin\\theta = (0.40)(5.0)(0.50)\\sin30^\\circ = (1.0)(0.50) = 0.50$ N.'
          },
          {
            question: 'A horizontal wire of mass $0.020$ kg and length $0.50$ m lies perpendicular to a horizontal $0.40$ T field. What current makes the magnetic force hold it up against gravity ($g = 9.8$ m/s²)?',
            options: ['$0.98$ A', '$0.49$ A', '$2.0$ A', '$0.098$ A'],
            correctAnswer: 0,
            explanation: 'Set $BIL = mg$: $I = mg/(BL) = (0.020)(9.8)/((0.40)(0.50)) = 0.196/0.20 = 0.98$ A, with the current directed so that $I\\vec{L}\\times\\vec{B}$ points up.'
          }
        ]
      }
    }
  ]
};
