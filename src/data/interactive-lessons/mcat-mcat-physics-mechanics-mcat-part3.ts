export const mcatPhysMechPart3Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 3 of 7 — Work, Energy & Power**

### Work-Energy Theorem

$W_{net} = \\Delta KE = \\tfrac{1}{2}mv^2 - \\tfrac{1}{2}mv_0^2$

$W = Fd\\cos\\theta$ (only the force component along the displacement does work)

### Conservation of Energy

$KE_i + PE_i = KE_f + PE_f$ (when no non-conservative forces act)

- Kinetic energy: $KE = \\tfrac{1}{2}mv^2$
- Gravitational PE: $PE = mgh$
- Spring PE: $PE = \\tfrac{1}{2}kx^2$

### Power

$P = \\frac{W}{t} = Fv$ — measured in watts (W), where $1\\;\\text{W} = 1\\;\\text{J/s}$

### Conservative vs. Non-conservative Forces

- Conservative (gravity, springs): path-independent work; mechanical energy is conserved
- Non-conservative (friction, drag): convert mechanical energy into thermal/internal energy

When friction is present, include the non-conservative work in the energy balance.`
    },
    {
      id: 'pm3-worked',
      type: 'text' as const,
      content: `### Worked Example — Speed at the Bottom of a Ramp

A $2\\;\\text{kg}$ cart starts from rest at the top of a frictionless ramp $1.8\\;\\text{m}$ tall. Using $g = 10\\;\\text{m/s}^2$, find its speed at the bottom.

**Step 1 — Set up conservation of energy.** All gravitational PE converts to kinetic energy:

$mgh = \\tfrac{1}{2}mv^2$

**Step 2 — Cancel the mass and solve for $v$.**

$v = \\sqrt{2gh} = \\sqrt{2(10)(1.8)} = \\sqrt{36}$

**Step 3 — Evaluate.**

$v = 6\\;\\text{m/s}$

The mass dropped out, which is why $v = \\sqrt{2gh}$ is worth memorizing. If friction did, say, $10\\;\\text{J}$ of negative work, you would instead write $mgh - 10 = \\tfrac{1}{2}mv^2$ and solve for a smaller speed.`
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
            explanation: `Conservation of energy: $mgh = \\tfrac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10$ m/s. The mass cancels.`
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
            explanation: `Negative non-conservative work removes 40 J of mechanical energy from the system (converted to heat).`
          },
          {
            question: `Power can be written as $P = Fv$ when:`,
            options: [`Force is parallel to velocity`, `Force is perpendicular to velocity`, `Velocity is zero`, `Motion is circular only`],
            correctAnswer: 0,
            explanation: `Instantaneous power is the dot product $P = \\vec{F}\\cdot\\vec{v} = Fv\\cos\\theta$. The simple scalar form $Fv$ assumes the vectors are parallel.`
          },
          {
            question: `A motor lifts a $50\\;\\text{kg}$ load $4\\;\\text{m}$ in $10\\;\\text{s}$ at constant speed ($g = 10\\;\\text{m/s}^2$). Its power output is:`,
            options: [`200 W`, `2000 W`, `500 W`, `20 W`],
            correctAnswer: 0,
            explanation: `Work $= mgh = (50)(10)(4) = 2000\\;\\text{J}$. Power $= W/t = 2000/10 = 200\\;\\text{W}$.`
          },
          {
            question: `Doubling the speed of a moving object changes its kinetic energy by a factor of:`,
            options: [`4`, `2`, `8`, `$\\sqrt{2}$`],
            correctAnswer: 0,
            explanation: `$KE = \\tfrac{1}{2}mv^2 \\propto v^2$. Doubling $v$ multiplies KE by $2^2 = 4$.`
          }
        ]
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $W = Fd\\cos\\theta$: only the force component parallel to displacement does work
- Conservation of energy: $KE + PE = \\text{constant}$ when no friction or drag acts
- $v = \\sqrt{2gh}$ for an object dropped (or sliding) from height $h$ — memorize this shortcut
- Power = work / time = force $\\times$ velocity
- $KE \\propto v^2$: doubling speed quadruples kinetic energy
- Friction does negative work and reduces mechanical energy`
    }
  ]
};
