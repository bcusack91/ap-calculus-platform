export const physics2HeatPart3Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Calorimetry

**Part 3 of 7 — Tracking Heat Exchange**

When a hot object is placed in contact with a cold object inside an insulated container, energy flows as heat until both reach the same final temperature. **Calorimetry** is the science of measuring these heat exchanges — and conservation of energy makes the math elegant.
      `
    },
    {
      id: 'ht3-principle',
      type: 'text' as const,
      content: `
## The Calorimetry Principle

In an **isolated system** (no heat escapes to the environment):

$$Q_{\\text{lost}} + Q_{\\text{gained}} = 0$$

Or equivalently:

$$|Q_{\\text{lost by hot}}| = |Q_{\\text{gained by cold}}|$$

### Setting Up Calorimetry Problems

1. **Identify** all objects exchanging heat
2. **Write** $Q = mc\\Delta T$ for each object
3. **Apply** conservation: $\\sum Q_i = 0$ (all Q's add to zero)
4. **Solve** for the unknown

### Sign Convention Reminder
- Object cooling: $\\Delta T < 0$ → $Q < 0$ (releases heat)
- Object warming: $\\Delta T > 0$ → $Q > 0$ (absorbs heat)

### Worked Example

A 0.50 kg iron ball ($c = 450$ J/(kg·°C)) at 300°C is dropped into 2.0 kg of water ($c = 4{,}186$ J/(kg·°C)) at 20°C. Find the final temperature $T_f$.

$$Q_{\\text{iron}} + Q_{\\text{water}} = 0$$
$$m_{\\text{Fe}} c_{\\text{Fe}} (T_f - 300) + m_w c_w (T_f - 20) = 0$$
$$(0.50)(450)(T_f - 300) + (2.0)(4{,}186)(T_f - 20) = 0$$
$$225(T_f - 300) + 8{,}372(T_f - 20) = 0$$
$$225 T_f - 67{,}500 + 8{,}372 T_f - 167{,}440 = 0$$
$$8{,}597 T_f = 234{,}940$$
$$T_f = 27.3°\\text{C}$$

Notice: the final temperature is much closer to the water's initial temperature because water has both more mass AND a much higher specific heat.
      `
    },
    {
      id: 'ht3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Calorimetry Concept Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'In a calorimetry experiment, a hot metal is placed into cold water. The final equilibrium temperature will be:',
            options: [
              'Exactly halfway between the two initial temperatures',
              'Closer to the initial temperature of the substance with the larger $mc$ product',
              'Always closer to the metal\'s initial temperature',
              'Equal to the average of the specific heats'
            ],
            correctAnswer: 1,
            explanation: 'The object with the larger thermal mass ($mc$) dominates the final temperature. Water usually has a much larger $mc$ product, so $T_f$ is typically much closer to the water\'s initial temperature.'
          },
          {
            question: 'A student places 100 g of metal at 90°C into 100 g of water at 20°C in an insulated cup. The final temperature is 23°C. What can you conclude?',
            options: [
              'The metal has a higher specific heat than water',
              'The metal has a much lower specific heat than water',
              'The calorimeter is not well insulated',
              'The experiment is flawed — $T_f$ should be 55°C'
            ],
            correctAnswer: 1,
            explanation: '$T_f = 23$°C is very close to water\'s initial 20°C and far from the metal\'s 90°C. This means water barely changed temperature while the metal changed a lot — the metal has a much lower specific heat than water.'
          }
        ]
      }
    },
    {
      id: 'ht3-unknown-c',
      type: 'text' as const,
      content: `
## Finding Unknown Specific Heat

Calorimetry is commonly used to **measure** the specific heat of an unknown substance.

### Method
1. Heat a known mass of the unknown substance to a known temperature
2. Drop it into a known mass of water at a known temperature
3. Measure the final equilibrium temperature
4. Solve $Q_{\\text{lost}} + Q_{\\text{gained}} = 0$ for $c_{\\text{unknown}}$

### Formula
$$m_{\\text{unk}} c_{\\text{unk}} (T_f - T_{\\text{unk,i}}) + m_w c_w (T_f - T_{w,i}) = 0$$

Solving for $c_{\\text{unk}}$:

$$c_{\\text{unk}} = \\frac{-m_w c_w (T_f - T_{w,i})}{m_{\\text{unk}} (T_f - T_{\\text{unk,i}})}$$

### Example

A 0.200 kg metal sample at 150°C is placed in 0.400 kg of water at 22°C. The final temperature is 25°C.

$$c_{\\text{metal}} = \\frac{-(0.400)(4{,}186)(25 - 22)}{(0.200)(25 - 150)}$$

$$c_{\\text{metal}} = \\frac{-(0.400)(4{,}186)(3)}{(0.200)(-125)}$$

$$c_{\\text{metal}} = \\frac{-5{,}023.2}{-25} = 201 \\text{ J/(kg}\\cdot\\text{°C)}$$

This is close to the specific heat of tin (210 J/(kg·°C)), so the metal is likely tin.
      `
    },
    {
      id: 'ht3-multi-step-drill',
      type: 'input-boxes' as const,
      content: `
**Calorimetry Problem Drill** 🔢

A 0.40 kg block of copper ($c = 390$ J/(kg·°C)) at 250°C is placed in 1.5 kg of water ($c = 4{,}186$ J/(kg·°C)) at 18°C in an insulated calorimeter.

1) What is the thermal mass ($mc$) of the copper in J/°C?

2) What is the thermal mass ($mc$) of the water in J/°C?

3) What is the final equilibrium temperature? Round to one decimal place (°C).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['156', '6279', '23.6'],
        hint1: '$mc_{\\text{Cu}} = (0.40)(390)$.',
        hint2: '$mc_w = (1.5)(4{,}186)$.',
        hint3: 'Set $156(T_f - 250) + 6{,}279(T_f - 18) = 0$ and solve for $T_f$.',
        explanation: '1) $mc_{\\text{Cu}} = (0.40)(390) = 156$ J/°C. 2) $mc_w = (1.5)(4{,}186) = 6{,}279$ J/°C. 3) $156 T_f - 39{,}000 + 6{,}279 T_f - 113{,}022 = 0 \\Rightarrow 6{,}435 T_f = 152{,}022 \\Rightarrow T_f = 23.6$°C.'
      }
    },
    {
      id: 'ht3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Calorimetry Mastery**
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.100 kg metal sample at 200°C is dropped into 0.300 kg of water at 20°C. The final temperature is 22°C. What is the specific heat of the metal?',
            options: [
              '141 J/(kg·°C)',
              '235 J/(kg·°C)',
              '390 J/(kg·°C)',
              '450 J/(kg·°C)'
            ],
            correctAnswer: 0,
            explanation: '$c = \\frac{-m_w c_w (T_f - T_{w,i})}{m(T_f - T_i)} = \\frac{-(0.300)(4{,}186)(2)}{(0.100)(-178)} = \\frac{-2{,}511.6}{-17.8} = 141$ J/(kg·°C). This is close to lead ($c = 128$).'
          },
          {
            question: 'In an ideal calorimetry experiment, if no heat is lost to the surroundings, which quantity is conserved?',
            options: [
              'Temperature',
              'Specific heat',
              'Total thermal energy of the system',
              'Mass times temperature'
            ],
            correctAnswer: 2,
            explanation: 'Conservation of energy: the total thermal energy is conserved. Heat lost by the hot object equals heat gained by the cold object. Temperature and specific heat are properties, not conserved quantities.'
          },
          {
            question: 'Two identical blocks of the same material at different temperatures are brought into thermal contact. The final temperature is:',
            options: [
              'The average of the two initial temperatures',
              'Closer to the higher initial temperature',
              'Closer to the lower initial temperature',
              'Depends on the specific heat'
            ],
            correctAnswer: 0,
            explanation: 'With identical masses and specific heats: $mc(T_f - T_1) + mc(T_f - T_2) = 0 \\Rightarrow 2T_f = T_1 + T_2 \\Rightarrow T_f = (T_1 + T_2)/2$. The final temperature is exactly the average.'
          }
        ]
      }
    }
  ]
}
