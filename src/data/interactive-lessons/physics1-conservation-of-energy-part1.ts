export const physics1ConservationOfEnergyPart1Data = {
  topicSlug: 'conservation-of-energy',
  sections: [
    {
      id: 'ce1-intro',
      type: 'text' as const,
      content: `
# ⚡ Conservation of Energy — No Friction

**Part 1 of 7 — Conservation of Energy**

The Law of Conservation of Energy is one of the most powerful tools in physics. When only **conservative forces** (gravity, springs) act on a system, total mechanical energy is conserved.

**In this lesson you will learn:**
- The conservation of energy principle
- The equation $KE_i + PE_i = KE_f + PE_f$
- How to apply it to frictionless systems
      `
    },
    {
      id: 'ce1-principle',
      type: 'text' as const,
      content: `
## The Conservation Principle

### Total Mechanical Energy

$$E_{\\text{mech}} = KE + PE$$

$$E_{\\text{mech}} = \\frac{1}{2}mv^2 + mgh + \\frac{1}{2}kx^2$$

When **no non-conservative forces** (friction, air resistance, applied push/pull) do work:

$$E_{\\text{mech},i} = E_{\\text{mech},f}$$

$$KE_i + PE_i = KE_f + PE_f$$

### What "Conserved" Means

- Energy is **not created or destroyed**
- Energy **transforms** between types (KE ↔ PE)
- The **total** stays the same throughout the motion

### Key Conditions

| Condition | Conserved? |
|-----------|------------|
| Only gravity acts | ✅ Yes |
| Only spring force acts | ✅ Yes |
| Gravity + spring | ✅ Yes |
| Any friction present | ❌ No |
| Applied push/pull | ❌ No |
| Air resistance | ❌ No |
      `
    },
    {
      id: 'ce1-conceptual-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward. At the top of its path (ignoring air resistance), the ball\'s KE has been converted to:',
            options: [
              'Thermal energy',
              'Gravitational PE',
              'Elastic PE',
              'It disappears'
            ],
            correctAnswer: 1,
            explanation: 'Without air resistance, the ball\'s KE transforms entirely into gravitational PE at the peak ($v = 0$, maximum $h$).'
          },
          {
            question: 'A pendulum swings from its highest point to the lowest point. Which is true?',
            options: [
              'KE increases and PE increases',
              'KE decreases and PE decreases',
              'KE increases and PE decreases',
              'KE stays the same'
            ],
            correctAnswer: 2,
            explanation: 'As the pendulum descends, height decreases → PE decreases. Speed increases → KE increases. The PE is converting to KE.'
          },
          {
            question: 'A block slides down a frictionless ramp from height $h$. The speed at the bottom depends on:',
            options: [
              'The angle of the ramp',
              'The mass of the block',
              'The height $h$ only',
              'Both the angle and the mass'
            ],
            correctAnswer: 2,
            explanation: '$mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh}$. Mass cancels! And the path (angle) doesn\'t matter — only the height.'
          }
        ]
      }
    },
    {
      id: 'ce1-basic-examples',
      type: 'text' as const,
      content: `
## Worked Example: Free Fall

A 2 kg ball is dropped from 5 m. Find its speed just before hitting the ground ($g = 10$ $m/s^{2}$).

**Define**: $i$ = top, $f$ = bottom. Set $h = 0$ at bottom.

$$KE_i + PE_i = KE_f + PE_f$$

$$0 + mgh = \\frac{1}{2}mv^2 + 0$$

$$mgh = \\frac{1}{2}mv^2$$

$$v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10 \\text{ m/s}$$

Notice: **mass canceled!** The speed is independent of mass.
      `
    },
    {
      id: 'ce1-calculations',
      type: 'input-boxes' as const,
      content: `
**Practice Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A 3 kg ball is dropped from 20 m. What is its speed just before hitting the ground (in m/s)?

2) A ball is thrown upward at 15 m/s. What maximum height does it reach (in m)?

3) A roller coaster car starts from rest at 45 m. What is its speed at a height of 20 m (in m/s)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '11.25', '22.4'],
        hint1: '$v = \\sqrt{2gh} = \\sqrt{2(10)(20)}$.',
        hint2: '$\\frac{1}{2}mv^2 = mgh \\Rightarrow h = v^2/(2g)$.',
        hint3: '$mg(45) = \\frac{1}{2}mv^2 + mg(20) \\Rightarrow v = \\sqrt{2g(45-20)}$.',
        explanation: '1) $v = \\sqrt{400} = 20$ m/s. 2) $h = 225/20 = 11.25$ m. 3) $v = \\sqrt{2(10)(25)} = \\sqrt{500} \\approx 22.4$ m/s.'
      }
    },
    {
      id: 'ce1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Energy Transformations** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball dropped from height $h$: at the halfway point, KE equals:',
            options: ['0', 'Half the total energy', 'All the total energy', 'Cannot determine'],
            correctIndex: 1,
            explanation: 'At half the height, half the PE has converted to KE. So KE = $\\frac{1}{2}mgh/2 = $ half the total energy.'
          },
          {
            label: 'Two identical balls are released from the same height — one dropped, one on a frictionless slide. At the bottom:',
            options: ['The dropped ball is faster', 'The sliding ball is faster', 'Both have the same speed', 'Depends on the slide angle'],
            correctIndex: 2,
            explanation: 'Conservation of energy depends only on height change, not the path. Both arrive at the same speed: $v = \\sqrt{2gh}$.'
          },
          {
            label: 'A 1 kg ball and a 5 kg ball are dropped from the same height. Which hits the ground faster?',
            options: ['The heavier ball', 'The lighter ball', 'Same speed', 'Depends on height'],
            correctIndex: 2,
            explanation: '$v = \\sqrt{2gh}$ — mass cancels out! Both arrive at the same speed (ignoring air resistance).'
          }
        ]
      }
    },
    {
      id: 'ce1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched at 20 m/s from ground level on a frictionless track. It reaches a maximum height of ($g = 10$ $m/s^{2}$):',
            options: [
              '10 m',
              '20 m',
              '30 m',
              '40 m'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}mv^2 = mgh \\Rightarrow h = v^2/(2g) = 400/20 = 20$ m.'
          },
          {
            question: 'A 2 kg ball at rest slides down a frictionless ramp from 10 m. Its KE at the bottom is:',
            options: [
              '100 J',
              '200 J',
              '400 J',
              '20 J'
            ],
            correctAnswer: 1,
            explanation: '$KE = mgh = 2(10)(10) = 200$ J. All gravitational PE converts to KE.'
          }
        ]
      }
    }
  ]
}
