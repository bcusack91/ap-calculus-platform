export const physics2FluidDynamicsPart3Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd3-intro',
      type: 'text' as const,
      content: `
# 🔄 Mass Flow Rate & Conservation

**Part 3 of 7 — Tracking Fluid Mass**

Volume flow rate is great for incompressible fluids, but the deeper principle is **mass conservation**. Let's explore both forms and when to use which.
      `
    },
    {
      id: 'fd3-mass-flow',
      type: 'text' as const,
      content: `
## Mass Flow Rate

The **mass flow rate** $\\dot{m}$ measures mass passing a point per second:

$$\\dot{m} = \\rho A v$$

Units: kg/s

### Connection to Volume Flow Rate

$$\\dot{m} = \\rho Q = \\rho A v$$

For incompressible fluids ($\\rho$ = constant):

$$\\dot{m}_1 = \\dot{m}_2 \\implies \\rho A_1 v_1 = \\rho A_2 v_2 \\implies A_1 v_1 = A_2 v_2$$

The continuity equation is really **mass conservation** simplified for incompressible flow.

### For Compressible Fluids (FYI)

$$\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$$

This form is needed for gases at high speeds. AP Physics 2 focuses on the incompressible version.
      `
    },
    {
      id: 'fd3-pipes-quiz',
      type: 'multiple-choice' as const,
      content: `
**Flow Conservation Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Water enters a pipe system at 5 L/s. The pipe branches into three outlets. If two outlets each carry 1.5 L/s, the third carries:',
            options: [
              '1.5 L/s',
              '2.0 L/s',
              '3.0 L/s',
              '5.0 L/s'
            ],
            correctAnswer: 1,
            explanation: 'Conservation of mass: $Q_{\\text{in}} = Q_{\\text{out1}} + Q_{\\text{out2}} + Q_{\\text{out3}}$. $5 = 1.5 + 1.5 + Q_3$. $Q_3 = 2.0$ L/s.'
          },
          {
            question: 'Two pipes merge into one. Pipe A (area 10 $cm^{2}$, speed 3 m/s) and Pipe B (area 5 $cm^{2}$, speed 4 m/s) merge into Pipe C $(area 20 cm^{2})$. Speed in C is:',
            options: [
              '2.5 m/s',
              '3.5 m/s',
              '7.0 m/s',
              '1.5 m/s'
            ],
            correctAnswer: 0,
            explanation: '$Q_A + Q_B = Q_C$. $(10)(3) + (5)(4) = (20)(v_C)$. $30 + 20 = 20 v_C$. $v_C = 50/20 = 2.5$ m/s.'
          }
        ]
      }
    },
    {
      id: 'fd3-special-cases',
      type: 'text' as const,
      content: `
## Special Flow Configurations

### Pipe with a Leak

If fluid leaks out of a pipe, the flow rate downstream is reduced:

$$Q_{\\text{downstream}} = Q_{\\text{upstream}} - Q_{\\text{leak}}$$

### Pipe with an Inlet

If extra fluid is added:

$$Q_{\\text{downstream}} = Q_{\\text{upstream}} + Q_{\\text{inlet}}$$

### Multiple Branches (General Rule)

At any junction:

$$\\sum Q_{\\text{in}} = \\sum Q_{\\text{out}}$$

This is the fluid equivalent of Kirchhoff's Current Law in circuits!

### Syringe

A syringe demonstrates continuity beautifully:
- Barrel area $A_1$ (large), plunger speed $v_1$ (slow)
- Needle area $A_2$ (tiny), fluid speed $v_2$ (fast!)
- $v_2 = (A_1/A_2) v_1$

If the barrel radius is 1 cm and the needle radius is 0.2 mm:

$$v_2 = \\frac{\\pi(0.01)^2}{\\pi(0.0002)^2} v_1 = \\frac{10^{-4}}{4 \\times 10^{-8}} v_1 = 2500 v_1$$

The fluid exits 2,500× faster than the plunger moves!
      `
    },
    {
      id: 'fd3-syringe-drill',
      type: 'input-boxes' as const,
      content: `
**Syringe Problem**

A syringe barrel has diameter 2.0 cm. The needle has diameter 1.0 mm. The plunger is pushed at 1.0 cm/s.

1) Area of the barrel $(in cm^{2})$

2) Area ratio $A_{\\text{barrel}}/A_{\\text{needle}}$

3) Speed of fluid exiting the needle (in m/s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.14', '400', '4'],
        hint1: '$A = \\pi r^2 = \\pi(1.0)^2$ (radius = 1.0 cm).',
        hint2: 'Needle radius = 0.5 mm = 0.05 cm. $A_{\\text{needle}} = \\pi(0.05)^2 = 7.85 \\times 10^{-3}$ $cm^{2}$. Ratio = $3.14/0.00785$.',
        hint3: '$v_{\\text{needle}} = (A_{\\text{barrel}}/A_{\\text{needle}}) \\times v_{\\text{plunger}} = 400 \\times 0.01$ m/s.',
        explanation: '$A_{\\text{barrel}} = \\pi(1)^2 = 3.14$ $cm^{2}$. $A_{\\text{needle}} = \\pi(0.05)^2 = 0.00785$ $cm^{2}$. Ratio = 400. $v = 400 \\times 0.01 = 4.0$ m/s.'
      }
    },
    {
      id: 'fd3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'At a pipe junction, 3 pipes merge into 1. The three pipes carry 2, 3, and 5 L/s respectively. The single outlet pipe has area 10 $cm^{2}$. The exit speed is:',
            options: [
              '1.0 m/s',
              '10 m/s',
              '100 m/s',
              '0.1 m/s'
            ],
            correctAnswer: 1,
            explanation: '$Q = 2 + 3 + 5 = 10$ L/s = $10 \\times 10^{-3}$ $m^{3}/s$ = $0.01$ $m^{3}/s$. $v = Q/A = 0.01/(10 \\times 10^{-4}) = 0.01/0.001 = 10$ m/s.'
          },
          {
            question: 'The continuity equation is fundamentally a statement of:',
            options: [
              'Conservation of energy',
              'Conservation of mass',
              'Conservation of momentum',
              'Newton\'s second law'
            ],
            correctAnswer: 1,
            explanation: 'The continuity equation says "mass in = mass out." No fluid is created or destroyed in the pipe. For incompressible flow, conserving mass is equivalent to conserving volume ($A_1 v_1 = A_2 v_2$).'
          }
        ]
      }
    }
  ]
}
