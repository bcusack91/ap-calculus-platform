export const physics1WorkAndKineticEnergyPart2Data = {
  topicSlug: 'work-and-kinetic-energy',
  sections: [
    {
      id: 'wk2-intro',
      type: 'text' as const,
      content: `
# ⚡ The Work-Energy Theorem

**Part 2 of 7 — Work and Kinetic Energy**

The Work-Energy Theorem is one of the most powerful principles in mechanics. It directly connects the **net work** done on an object to its **change in kinetic energy**. This theorem often lets you bypass complex force analysis and jump straight to the answer.
      `
    },
    {
      id: 'wk2-theorem',
      type: 'text' as const,
      content: `
## Statement of the Work-Energy Theorem

$$W_{\\text{net}} = \\Delta KE = KE_f - KE_i = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$

In words: **The net work done on an object equals the change in its kinetic energy.**

### Key Points

- $W_{\\text{net}}$ is the **total** work done by **all** forces acting on the object
- If $W_{\\text{net}} > 0$: the object **speeds up** (gains KE)
- If $W_{\\text{net}} < 0$: the object **slows down** (loses KE)
- If $W_{\\text{net}} = 0$: speed is **unchanged** (constant KE)

### Where It Comes From

Starting from Newton\'s 2nd Law: $F_{\\text{net}} = ma$

Multiply both sides by displacement $d$:

$$F_{\\text{net}} \\cdot d = ma \\cdot d$$

Using kinematics ($v_f^2 = v_i^2 + 2ad \\Rightarrow ad = \\frac{v_f^2 - v_i^2}{2}$):

$$W_{\\text{net}} = m \\cdot \\frac{v_f^2 - v_i^2}{2} = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$
      `
    },
    {
      id: 'wk2-net-work',
      type: 'text' as const,
      content: `
## Calculating Net Work

There are two equivalent approaches:

### Method 1: Sum of Individual Works

Calculate the work done by each force, then add them:

$$W_{\\text{net}} = W_1 + W_2 + W_3 + \\cdots$$

### Method 2: Net Force Method

Find the net force first, then calculate work:

$$W_{\\text{net}} = F_{\\text{net}} \\cdot d \\cdot \\cos\\theta$$

### Example

A 5 kg box is pulled with 40 N at $0°$ across a surface with 10 N friction for 6 m.

**Method 1:**
- $W_{\\text{pull}} = 40 \\times 6 = 240$ J
- $W_{\\text{friction}} = -10 \\times 6 = -60$ J
- $W_{\\text{gravity}} = 0$ J (perpendicular)
- $W_{\\text{normal}} = 0$ J (perpendicular)
- $W_{\\text{net}} = 240 - 60 + 0 + 0 = 180$ J

**Method 2:**
- $F_{\\text{net}} = 40 - 10 = 30$ N (horizontal)
- $W_{\\text{net}} = 30 \\times 6 = 180$ J ✓
      `
    },
    {
      id: 'wk2-applications',
      type: 'text' as const,
      content: `
## Applying the Work-Energy Theorem

### Finding Final Speed

If a 5 kg box starts from rest and $W_{\\text{net}} = 180$ J:

$$180 = \\frac{1}{2}(5)v_f^2 - 0$$
$$v_f = \\sqrt{\\frac{2 \\times 180}{5}} = \\sqrt{72} \\approx 8.5 \\text{ m/s}$$

### Finding Stopping Distance

A 2 kg ball moving at 10 m/s is stopped by friction ($f_k = 8$ N):

$$W_{\\text{net}} = \\Delta KE$$
$$-8d = 0 - \\frac{1}{2}(2)(10)^2$$
$$-8d = -100$$
$$d = 12.5 \\text{ m}$$

The Work-Energy Theorem is especially powerful when you don\'t need to find acceleration or time.
      `
    },
    {
      id: 'wk2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Work-Energy Theorem Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A car accelerates from 10 m/s to 20 m/s. The net work done on the car is:',
            options: [
              'Equal to the car\'s final kinetic energy',
              'Equal to the change in kinetic energy',
              'Equal to the force times the distance',
              'Zero because the car has constant mass'
            ],
            correctAnswer: 1,
            explanation: 'The Work-Energy Theorem states $W_{\\text{net}} = \\Delta KE = KE_f - KE_i$. It\'s the CHANGE, not the final value.'
          },
          {
            question: 'A moving object has zero net work done on it. This means:',
            options: [
              'The object is stationary',
              'No forces act on the object',
              'The object\'s speed is unchanged',
              'The object\'s velocity is unchanged'
            ],
            correctAnswer: 2,
            explanation: '$W_{\\text{net}} = 0 \\Rightarrow \\Delta KE = 0 \\Rightarrow$ speed doesn\'t change. The direction could change (e.g., uniform circular motion), so velocity could change.'
          },
          {
            question: 'A ball is thrown upward and returns to the same height. The net work done by gravity over the entire trip is:',
            options: [
              'Positive',
              'Negative',
              'Zero',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'The ball returns to the same height with the same speed (in the absence of air resistance). Since $v_f = v_i$, $\\Delta KE = 0$, so $W_{\\text{net}} = 0$.'
          }
        ]
      }
    },
    {
      id: 'wk2-calculations',
      type: 'input-boxes' as const,
      content: `
**Work-Energy Theorem Calculations** 🧮

1) A 4 kg object starts from rest and has 200 J of net work done on it. What is its final speed (in m/s)?

2) A 3 kg ball moving at 8 m/s is brought to rest by a net force over 6 m. What is the magnitude of the net force (in N)?

3) A 1500 kg car accelerates from 10 m/s to 30 m/s. What is the net work done on the car (in kJ)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '16', '600'],
        hint1: '$W_{\\text{net}} = \\frac{1}{2}mv_f^2 - 0 \\Rightarrow v_f = \\sqrt{2W/m} = \\sqrt{2(200)/4}$.',
        hint2: '$W_{\\text{net}} = \\Delta KE \\Rightarrow -Fd = 0 - \\frac{1}{2}mv^2 \\Rightarrow F = mv^2/(2d)$.',
        hint3: '$W_{\\text{net}} = \\frac{1}{2}(1500)(30^2) - \\frac{1}{2}(1500)(10^2) = 675{,}000 - 75{,}000 = 600{,}000$ J $= 600$ kJ.',
        explanation: '1) $v_f = \\sqrt{2(200)/4} = \\sqrt{100} = 10$ m/s. 2) $F = \\frac{\\frac{1}{2}(3)(64)}{6} = 96/6 = 16$ N. 3) $\\Delta KE = \\frac{1}{2}(1500)(900-100) = 600{,}000$ J $= 600$ kJ.'
      }
    },
    {
      id: 'wk2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Work-Energy Theorem Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An object speeds up. The net work done on it is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'Speeding up means $v_f > v_i$, so $\\Delta KE > 0$, so $W_{\\text{net}} > 0$.'
          },
          {
            label: 'A car brakes to a stop. The net work done on it is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 1,
            explanation: '$v_f = 0 < v_i$, so $\\Delta KE < 0$, so $W_{\\text{net}} < 0$. Friction removes kinetic energy.'
          },
          {
            label: 'A satellite orbits Earth in a perfect circle. The net work done by gravity per orbit is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 2,
            explanation: 'In circular orbit, speed is constant, so $\\Delta KE = 0$, so $W_{\\text{net}} = 0$. Gravity is perpendicular to velocity.'
          },
          {
            label: 'If you double the speed of a car, the work needed to stop it:',
            options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
            correctIndex: 2,
            explanation: '$W = \\Delta KE = \\frac{1}{2}mv^2$. Doubling $v$ quadruples $v^2$, so the work (and stopping distance) quadruples.'
          }
        ]
      }
    },
    {
      id: 'wk2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Work-Energy Theorem** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.5 kg ball is thrown at 20 m/s and is caught, bringing it to rest. The work done by the catcher\'s hands is:',
            options: [
              '+100 J',
              '-100 J',
              '+200 J',
              '-200 J'
            ],
            correctAnswer: 1,
            explanation: '$W = \\Delta KE = 0 - \\frac{1}{2}(0.5)(20)^2 = -\\frac{1}{2}(0.5)(400) = -100$ J. Negative because the catcher\'s force opposes the ball\'s motion.'
          },
          {
            question: 'Car A has twice the mass of Car B but both have the same kinetic energy. If the same braking force is applied to both, the stopping distance of Car A compared to Car B is:',
            options: [
              'Half as far',
              'The same',
              'Twice as far',
              'Four times as far'
            ],
            correctAnswer: 1,
            explanation: '$W = Fd = \\Delta KE$. Since both have the same $KE$ and the same braking force $F$, the stopping distance $d = KE/F$ is the same for both.'
          }
        ]
      }
    }
  ]
}
