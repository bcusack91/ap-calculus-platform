export const physics2BernoulliPart2Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be2-intro',
      type: 'text' as const,
      content: `
# 🌀 The Venturi Effect

**Part 2 of 7 — Fast Flow, Low Pressure**

The most important consequence of Bernoulli's equation: **where fluid speeds up, pressure drops**. This counterintuitive result explains everything from atomizers to carburetors.
      `
    },
    {
      id: 'be2-venturi',
      type: 'text' as const,
      content: `
## The Venturi Tube

A **Venturi tube** is a pipe with a constriction (narrow section). Let's analyze it:

### Setup
- Wide section: area $A_1$, speed $v_1$, pressure $P_1$
- Narrow section: area $A_2 < A_1$, speed $v_2$, pressure $P_2$
- Horizontal pipe: same height ($h_1 = h_2$)

### Continuity gives:
$$v_2 = \\frac{A_1}{A_2} v_1 > v_1$$

### Bernoulli gives:
$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$

$$P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2)$$

Since $v_2 > v_1$: **$P_2 < P_1$**

### The Pressure Drop

$$\\Delta P = P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$$

This pressure difference can be measured with a U-tube manometer connected between the wide and narrow sections — this is a **Venturi meter**, used to measure flow speed!
      `
    },
    {
      id: 'be2-venturi-quiz',
      type: 'multiple-choice' as const,
      content: `
**Venturi Effect Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'In a Venturi tube, the narrow section has:',
            options: [
              'Higher pressure and higher speed',
              'Lower pressure and lower speed',
              'Higher pressure and lower speed',
              'Lower pressure and higher speed'
            ],
            correctAnswer: 3,
            explanation: 'Continuity: narrower → faster. Bernoulli: faster → lower pressure. The narrow section has high speed and low pressure.'
          },
          {
            question: 'A pipe narrows from area 20 cm² to 5 cm². If the speed in the wide section is 2 m/s and the pressure is 150 kPa, the pressure in the narrow section is: ($\\rho = 1000$ kg/m³)',
            options: [
              '150 kPa',
              '138 kPa',
              '162 kPa',
              '120 kPa'
            ],
            correctAnswer: 3,
            explanation: '$v_2 = (20/5)(2) = 8$ m/s. $\Delta P = \frac{1}{2}(1000)(8^2 - 2^2) = \frac{1}{2}(1000)(60) = 30{,}000$ Pa. $P_2 = 150{,}000 - 30{,}000 = 120{,}000$ Pa = 120 kPa.'
          }
        ]
      }
    },
    {
      id: 'be2-applications',
      type: 'text' as const,
      content: `
## Applications of the Venturi Effect

### Perfume Atomizer / Spray Bottle

Blowing air across the top of a tube creates low pressure above the tube. Higher atmospheric pressure at the liquid surface pushes fluid **up** the tube, where it gets caught in the airstream and atomized into a fine mist.

### Carburetor (Older Cars)

Air flows through a Venturi tube in the carburetor. The low-pressure region draws gasoline from a reservoir and mixes it with the air — no pump needed!

### Prairie Dog Burrows

Prairie dogs build mounds at different heights around their burrow entrances. Wind over the tall mound creates lower pressure (Venturi effect), while the flat entrance has higher pressure → natural ventilation!

### Shower Curtain Mystery

Hot shower water heats the air → air rises → creates faster airflow inside the shower. By Bernoulli, faster flow → lower pressure inside → the curtain gets pushed inward by higher-pressure air outside.

### Venturi Meter

By measuring the pressure drop between wide and narrow sections, you can calculate the flow speed — this is how many industrial flow meters work!
      `
    },
    {
      id: 'be2-venturi-drill',
      type: 'input-boxes' as const,
      content: `
**Venturi Tube Drill** ($\\rho_w = 1000$ kg/m³)

A horizontal Venturi tube has wide diameter 8.0 cm and narrow diameter 4.0 cm. The pressure difference between the two sections is 9000 Pa.

1) Area ratio $A_1/A_2$
2) Express $v_1$ in terms of the pressure difference (solve for $v_1$, in m/s)
3) Flow rate through the tube (in L/s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '1.1', '5.5', '1.10', '5.50'],
        hint1: '$A_1/A_2 = (d_1/d_2)^2 = (8/4)^2$.',
        hint2: '$v_2 = 4v_1$. $\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2) = \\frac{1}{2}\\rho(16v_1^2 - v_1^2) = \\frac{15}{2}\\rho v_1^2$. Solve: $v_1 = \\sqrt{2\\Delta P/(15\\rho)}$.',
        hint3: '$Q = A_1 v_1 = \\pi(0.04)^2(1.1)$. Convert to L/s.',
        explanation: 'Ratio = 4. $v_1 = \\sqrt{2(9000)/(15 \\times 1000)} = \\sqrt{1.2} = 1.095 ≈ 1.1$ m/s. $Q = \\pi(0.04)^2(1.1) = 5.53 \\times 10^{-3}$ m³/s ≈ 5.5 L/s.'
      }
    },
    {
      id: 'be2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Two pieces of paper are held parallel, about 5 cm apart. You blow air between them. The papers will:',
            options: [
              'Move apart (the air pushes them)',
              'Move toward each other (low pressure between them)',
              'Not move',
              'Flap randomly'
            ],
            correctAnswer: 1,
            explanation: 'Fast-moving air between the papers creates LOW pressure (Bernoulli). The still air on the outside has atmospheric pressure (higher). The pressure difference pushes the papers inward. Try it yourself!'
          },
          {
            question: 'A Venturi meter shows a pressure difference of 0 between the wide and narrow sections. This means:',
            options: [
              'The fluid is not flowing',
              'The pipe has equal diameters at both points',
              'The fluid is compressible',
              'Either A or B'
            ],
            correctAnswer: 3,
            explanation: '$\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$. $\\Delta P = 0$ means $v_1 = v_2$, which happens if the flow is zero OR if the areas are equal. Either explanation works.'
          }
        ]
      }
    }
  ]
}
