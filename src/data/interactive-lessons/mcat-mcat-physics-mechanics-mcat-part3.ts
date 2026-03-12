export const mcatPhysMechPart3Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 3 of 7 — Work, Energy & Power**

### Work-Energy Theorem

$$W_{net} = \\Delta KE = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$$

$$W = Fd\\cos\\theta$$

### Conservation of Energy

$$KE_i + PE_i = KE_f + PE_f \\quad (\\text{if no non-conservative forces})$$

- Kinetic energy: $KE = \\frac{1}{2}mv^2$
- Gravitational PE: $PE = mgh$
- Spring PE: $PE = \\frac{1}{2}kx^2$

### Power

$$P = \\frac{W}{t} = Fv$$

Units: Watts (W) = J/s

### Conservative vs Nonconservative Forces

- Conservative (gravity, springs): path-independent work; mechanical energy conserved.
- Nonconservative (friction, drag): convert mechanical energy to thermal/internal energy.

When friction is present, include nonconservative work in the energy equation.`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Work & Energy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 2 kg ball is dropped from 5 m. Its speed just before hitting the ground is ($g = 10\\;\\text{m/s}^2$):`,
            options: [`10 m/s`, `5 m/s`, `100 m/s`, `7.07 m/s`],
            correctAnswer: 0,
            explanation: `Conservation of energy: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10$ m/s. Mass cancels!`
          },
          {
            question: `A force of 100 N pushes a box 5 m at a 60° angle to the displacement. The work done is:`,
            options: [`250 J`, `500 J`, `433 J`, `0 J`],
            correctAnswer: 0,
            explanation: `$W = Fd\\cos\\theta = 100(5)\\cos 60° = 500(0.5) = 250$ J.`
          },
          {
            question: `If kinetic friction does -40 J of work on a block, the block's mechanical energy changes by:`,
            options: [`-40 J`, `+40 J`, `0 J`, `Depends only on mass`],
            correctAnswer: 0,
            explanation: `Negative nonconservative work removes mechanical energy from the system.`
          },
          {
            question: `Power can be written as $P=Fv$ when:`,
            options: [`Force is parallel to velocity`, `Force is perpendicular to velocity`, `Velocity is zero`, `Motion is circular only`],
            correctAnswer: 0,
            explanation: `Instantaneous power is dot product $P=\\vec{F}\\cdot\\vec{v}=Fv\\cos\\theta$. The scalar form $Fv$ assumes parallel vectors.`
          }
        ]
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $W = Fd\\cos\\theta$: only the component of force parallel to displacement does work
- Conservation of energy: $KE + PE = \\text{constant}$ (no friction/air resistance)
- $v = \\sqrt{2gh}$ for an object dropped from height $h$ — memorize this shortcut
- Power = Work/time = Force $\\times$ velocity
- Friction does negative work and reduces mechanical energy.`
    }
  ]
};
