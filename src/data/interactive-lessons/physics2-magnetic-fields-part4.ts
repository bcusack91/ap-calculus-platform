export const physics2MagneticFieldsPart4Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf4-intro',
      type: 'text' as const,
      content: `
# 🔌 Force on Current-Carrying Wires

**Part 4 of 7 — From Single Charges to Wires**

A current is simply a flow of charges. Since each moving charge experiences a magnetic force, a current-carrying wire in a magnetic field experiences a net force. This is the principle behind electric motors, loudspeakers, and galvanometers.
      `
    },
    {
      id: 'mf4-force-law',
      type: 'text' as const,
      content: `
## Force on a Straight Current-Carrying Wire

For a straight wire of length $L$ carrying current $I$ in a uniform magnetic field $\\vec{B}$:

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

where $\\vec{L}$ points in the direction of conventional current flow.

The magnitude is:

$$\\boxed{|\\vec{F}| = BIL\\sin\\theta}$$

where $\\theta$ is the angle between the wire (current direction) and $\\vec{B}$.

### Special Cases

- **Wire perpendicular to $\\vec{B}$** ($\\theta = 90°$): $F = BIL$ (maximum force)
- **Wire parallel to $\\vec{B}$** ($\\theta = 0°$): $F = 0$ (no force)

### Derivation from Charge Force

Current $I = nqv_dA$ where $n$ = charge density, $v_d$ = drift velocity, $A$ = cross-section area.

Total force on charges in length $L$:

$$F = (nAL)(qv_dB) = (nqv_dA)(LB) = BIL$$

The macroscopic wire force follows directly from the microscopic charge force.
      `
    },
    {
      id: 'mf4-direction',
      type: 'text' as const,
      content: `
## Direction of Force on a Wire

Use the **same right-hand rule** as for individual charges:

1. **Point fingers** along $\\vec{I}$ (conventional current direction)
2. **Curl** toward $\\vec{B}$
3. **Thumb** points in the direction of $\\vec{F}$

### Example

A wire carries current to the right ($+x$) in a magnetic field pointing into the page ($-z$):

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

$$\\hat{x} \\times (-\\hat{z}) = -(\\hat{x} \\times \\hat{z}) = -(-\\hat{y}) = +\\hat{y}$$

The force is **upward** ($+y$).

This is exactly how a **loudspeaker** works: alternating current in a coil within a magnetic field pushes the speaker cone back and forth, producing sound waves.
      `
    },
    {
      id: 'mf4-wire-direction-drill',
      type: 'dropdown-select' as const,
      content: `
**Wire Force Direction Drill** 🎯

Find the force direction on a current-carrying wire.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Current right, B into page: Force is',
            options: ['up', 'down', 'into page', 'out of page', 'zero']
          },
          {
            label: 'Current up, B to the right: Force is',
            options: ['up', 'down', 'into page', 'out of page', 'zero']
          },
          {
            label: 'Current into page, B up: Force is',
            options: ['left', 'right', 'up', 'down', 'zero']
          },
          {
            label: 'Current right, B to the right: Force is',
            options: ['up', 'down', 'left', 'right', 'zero']
          }
        ],
        correctAnswers: ['up', 'into page', 'right', 'zero'],
        hint1: '$\\hat{x} \\times (-\\hat{z}) = +\\hat{y}$ → up.',
        hint2: '$\\hat{y} \\times \\hat{x} = -\\hat{z}$ → into page. Point fingers up, curl toward right, thumb points into page.',
        hint3: 'Parallel current and field → cross product is zero.',
        explanation: 'Right × Into page = Up. Up × Right = Into page. Into page × Up = Right. Parallel → zero. Use the right-hand rule: point fingers along I, curl toward B.'
      }
    },
    {
      id: 'mf4-parallel-wires',
      type: 'text' as const,
      content: `
## Forces Between Parallel Wires

Two parallel wires carrying currents exert magnetic forces on each other.

### Same Direction Currents → Attract

Wire 1 creates a field at Wire 2. By the right-hand rule, this field causes a force on Wire 2 **toward** Wire 1. By Newton's third law, Wire 1 is also pulled toward Wire 2.

**Parallel currents attract.**

### Opposite Direction Currents → Repel

If the currents flow in opposite directions, the force pushes the wires **apart**.

**Antiparallel currents repel.**

### Force Per Unit Length

The magnetic field from Wire 1 at distance $d$:

$$B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$$

Force on a length $L$ of Wire 2:

$$F = B_1 I_2 L = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d}$$

**Force per unit length:**

$$\\boxed{\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}}$$

### Definition of the Ampere

This force is so fundamental that the **ampere** was historically defined as: the current that, flowing in two parallel wires 1 m apart, produces a force of $2 \\times 10^{-7}$ N per meter of length.
      `
    },
    {
      id: 'mf4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Wire Force Calculation Drill** 🔢

Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.

1) A 0.50 m wire carrying 8.0 A is perpendicular to a 0.30 T field. What is the force on the wire (in N)?

2) Two parallel wires carry 10 A each in the same direction, separated by 5.0 cm. What is the force per unit length between them (in N/m, use scientific notation like 4.0e-4)?

3) Do the wires in (2) attract or repel? (Type "attract" or "repel")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.2', '4.0e-4', 'attract', '1.20', '0.00040'],
        hint1: '$F = BIL\\sin 90° = (0.30)(8.0)(0.50)$.',
        hint2: '$F/L = \\mu_0 I_1 I_2/(2\\pi d) = (4\\pi \\times 10^{-7})(10)(10)/(2\\pi \\times 0.05)$.',
        hint3: 'Same-direction parallel currents attract each other.',
        explanation: '(1) $F = (0.30)(8.0)(0.50) = 1.2$ N. (2) $F/L = (4\\pi \\times 10^{-7})(100)/(2\\pi \\times 0.05) = (4 \\times 10^{-5})/(0.1) = 4.0 \\times 10^{-4}$ N/m. (3) Same-direction currents attract.'
      }
    },
    {
      id: 'mf4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Forces on Wires** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A wire carrying current to the left lies in a uniform magnetic field pointing out of the page. The magnetic force on the wire is:',
            options: [
              'Up',
              'Down',
              'Into the page',
              'Zero'
            ],
            correctAnswer: 0,
            explanation: 'Current left ($-\\hat{x}$), B out of page ($+\\hat{z}$). $(-\\hat{x}) \\times \\hat{z} = -(\\hat{x} \\times \\hat{z}) = -(-\\hat{y}) = +\\hat{y}$ (up). The force on the wire is upward.'
          },
          {
            question: 'Two long parallel wires carry currents in opposite directions. The wires:',
            options: [
              'Attract each other',
              'Repel each other',
              'Exert no force on each other',
              'Twist around each other'
            ],
            correctAnswer: 1,
            explanation: 'Antiparallel currents repel. The magnetic field from one wire pushes the other wire away.'
          },
          {
            question: 'If the current in a wire is tripled and the magnetic field is doubled, the force on the wire becomes:',
            options: [
              '5 times larger',
              '6 times larger',
              '8 times larger',
              '9 times larger'
            ],
            correctAnswer: 1,
            explanation: '$F = BIL\\sin\\theta$. Tripling $I$ and doubling $B$: $F_{new} = (2B)(3I)L\\sin\\theta = 6BIL\\sin\\theta = 6F$.'
          }
        ]
      }
    }
  ]
}
