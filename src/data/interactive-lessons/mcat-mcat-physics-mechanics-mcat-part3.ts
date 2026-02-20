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

Units: Watts (W) = J/s`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Work & Energy** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball is dropped from 5 m. Its speed just before hitting the ground is ($g = 10\\;\\text{m/s}^2$):',
            options: ['10 m/s', '5 m/s', '100 m/s', '7.07 m/s'],
            correctAnswer: 0,
            explanation: 'Conservation of energy: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10$ m/s. Mass cancels!'
          },
          {
            question: 'A force of 100 N pushes a box 5 m at a 60° angle to the displacement. The work done is:',
            options: ['250 J', '500 J', '433 J', '0 J'],
            correctAnswer: 0,
            explanation: '$W = Fd\\cos\\theta = 100(5)\\cos 60° = 500(0.5) = 250$ J.'
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
- Power = Work/time = Force $\\times$ velocity`
    }
  ]
};
