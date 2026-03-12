export const physics2TemperaturePart6Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te6-intro',
      type: 'text' as const,
      content: `
# 🔬 Kinetic Theory Connection

**Part 6 of 7 — Temperature at the Molecular Level**

We started Part 1 by saying temperature measures average kinetic energy. Now let's make that precise with the **kinetic theory of gases**, which connects macroscopic temperature to microscopic molecular motion.
      `
    },
    {
      id: 'te6-kinetic-energy',
      type: 'text' as const,
      content: `
## Average Kinetic Energy

For an ideal gas, the average translational kinetic energy per molecule is:

$$\\boxed{KE_{\\text{avg}} = \\frac{3}{2} k_B T}$$

where:
- $k_B = 1.38 \\times 10^{-23}$ J/K (Boltzmann's constant)
- $T$ = absolute temperature in **Kelvin**

### Key Implications

1. **$KE_{\\text{avg}}$ depends ONLY on temperature** — not on the type of gas, not on the mass of the molecule, not on pressure or volume.

2. At the same temperature, a helium atom and a nitrogen molecule have the **same average kinetic energy**.

3. At absolute zero ($T = 0$ K), the classical kinetic energy is zero — all molecular translational motion ceases.

### For One Mole of Gas

The total translational kinetic energy of one mole ($N_A$ molecules) is:

$$KE_{\\text{total}} = N_A \\cdot \\frac{3}{2}k_BT = \\frac{3}{2}RT$$

where $R = N_A k_B = 8.314$ J/(mol·K) is the universal gas constant.
      `
    },
    {
      id: 'te6-rms-speed',
      type: 'text' as const,
      content: `
## Root-Mean-Square (RMS) Speed

Since $KE_{\\text{avg}} = \\frac{1}{2}m v_{\\text{rms}}^2 = \\frac{3}{2}k_BT$, we can solve for the **rms speed**:

$$\\boxed{v_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} = \\sqrt{\\frac{3RT}{M}}}$$

where:
- $m$ = mass of one molecule (kg)
- $M$ = molar mass (kg/mol)
- $R = 8.314$ J/(mol·K)

### Example: Nitrogen at Room Temperature

$M_{N_2} = 28 \\times 10^{-3}$ kg/mol, $T = 300$ K:

$$v_{\\text{rms}} = \\sqrt{\\frac{3(8.314)(300)}{28 \\times 10^{-3}}} = \\sqrt{\\frac{7{,}483}{0.028}} = \\sqrt{267{,}250} \\approx 517 \\text{ m/s}$$

That's over 1,100 mph! Gas molecules move incredibly fast.

### Comparing Different Gases at Same Temperature

Since $KE_{\\text{avg}}$ is the same for all gases at a given $T$:

$$\\frac{1}{2}m_1 v_1^2 = \\frac{1}{2}m_2 v_2^2$$

$$\\frac{v_1}{v_2} = \\sqrt{\\frac{m_2}{m_1}} = \\sqrt{\\frac{M_2}{M_1}}$$

**Lighter molecules move faster.** Helium ($M = 4$) moves $\\sqrt{28/4} = \\sqrt{7} \\approx 2.65$ times faster than nitrogen ($M = 28$) at the same temperature.

## Maxwell-Boltzmann Distribution

Not all molecules in a gas move at the same speed. The **Maxwell-Boltzmann distribution** describes the spread:

- Most molecules cluster near a **most probable speed** $v_p = \\sqrt{\\frac{2k_BT}{m}}$
- The **average speed** $\\bar{v} = \\sqrt{\\frac{8k_BT}{\\pi m}}$ is slightly higher
- The **rms speed** $v_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}}$ is highest of the three

$$v_p < \\bar{v} < v_{\\text{rms}}$$

At higher temperatures, the distribution **flattens and shifts right** — more molecules move faster, and the spread of speeds increases.
      `
    },
    {
      id: 'te6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Kinetic Theory Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'At the same temperature, which gas has the highest rms speed?',
            options: [
              'Oxygen (M = 32 g/mol)',
              'Nitrogen (M = 28 g/mol)',
              'Helium (M = 4 g/mol)',
              'Carbon dioxide (M = 44 g/mol)'
            ],
            correctAnswer: 2,
            explanation: '$v_{\\text{rms}} = \\sqrt{3RT/M}$. At the same $T$, the gas with the smallest molar mass has the highest rms speed. Helium ($M = 4$ g/mol) is the lightest, so it moves fastest.'
          },
          {
            question: 'If you double the Kelvin temperature of a gas, the rms speed of its molecules:',
            options: [
              'Doubles',
              'Increases by a factor of √2 ≈ 1.41',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 1,
            explanation: '$v_{\\text{rms}} = \\sqrt{3RT/M}$. Since $v_{\\text{rms}} \\propto \\sqrt{T}$, doubling $T$ increases $v_{\\text{rms}}$ by a factor of $\\sqrt{2} \\approx 1.41$. Note: $KE_{\\text{avg}}$ doubles, but speed only increases by $\\sqrt{2}$ because $KE \\propto v^2$.'
          },
          {
            question: 'The three characteristic speeds of a Maxwell-Boltzmann distribution, from smallest to largest, are:',
            options: [
              '$v_{\\text{rms}} < \\bar{v} < v_p$',
              '$v_p < v_{\\text{rms}} < \\bar{v}$',
              '$v_p < \\bar{v} < v_{\\text{rms}}$',
              '$\\bar{v} < v_p < v_{\\text{rms}}$'
            ],
            correctAnswer: 2,
            explanation: 'The ordering is always $v_p < \\bar{v} < v_{\\text{rms}}$. The most probable speed $v_p$ is at the peak of the distribution. The average and rms speeds are progressively higher because the distribution has a long tail to the right.'
          }
        ]
      }
    },
    {
      id: 'te6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Kinetic Theory Drill** 🔬

Use $k_B = 1.38 \\times 10^{-23}$ J/K and $R = 8.314$ J/(mol·K).

1) Find the average translational KE (in units of $10^{-21}$ J) of a gas molecule at $T = 400$ K. Round to 3 significant figures.

2) Find the rms speed (in m/s) of oxygen molecules ($M = 32 \\times 10^{-3}$ kg/mol) at $T = 300$ K. Round to the nearest whole number.

3) At what temperature (in K) would hydrogen molecules ($M = 2 \\times 10^{-3}$ kg/mol) have an rms speed of 2{,}500 m/s? Round to the nearest whole number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.28', '484', '501', '8.280'],
        hint1: '$KE_{\\text{avg}} = \\frac{3}{2}k_BT = \\frac{3}{2}(1.38 \\times 10^{-23})(400)$.',
        hint2: '$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3(8.314)(300)}{0.032}}$.',
        hint3: '$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. Solve for $T$: $T = \\frac{Mv_{\\text{rms}}^2}{3R}$.',
        explanation: '1) $KE = \\frac{3}{2}(1.38 \\times 10^{-23})(400) = 8.28 \\times 10^{-21}$ J. 2) $v_{\\text{rms}} = \\sqrt{\\frac{3(8.314)(300)}{0.032}} = \\sqrt{\\frac{7{,}483}{0.032}} = \\sqrt{233{,}844} \\approx 484$ m/s. 3) $T = \\frac{(2 \\times 10^{-3})(2{,}500)^2}{3(8.314)} = \\frac{12{,}500}{24.942} \\approx 501$ K.'
      }
    },
    {
      id: 'te6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A container holds a mixture of helium (M = 4) and argon (M = 40) at thermal equilibrium. Which statement is true?',
            options: [
              'Helium atoms have greater average KE than argon atoms',
              'Argon atoms move faster than helium atoms',
              'Both gases have the same average KE per molecule, but helium atoms move faster',
              'Both gases have the same rms speed'
            ],
            correctAnswer: 2,
            explanation: 'At thermal equilibrium, both gases are at the same temperature, so $KE_{\\text{avg}} = \\frac{3}{2}k_BT$ is the same for both. Since $\\frac{1}{2}mv^2$ is the same but helium has less mass, helium atoms must move faster: $v_{\\text{He}}/v_{\\text{Ar}} = \\sqrt{40/4} = \\sqrt{10} \\approx 3.16$.'
          },
          {
            question: 'As an ideal gas is heated, the Maxwell-Boltzmann speed distribution:',
            options: [
              'Gets taller and narrower',
              'Gets shorter and broader, shifting to higher speeds',
              'Shifts left to lower speeds',
              'Does not change shape'
            ],
            correctAnswer: 1,
            explanation: 'Higher temperature means higher average speed. The distribution shifts to the right (higher speeds) and flattens out (broader range of speeds). The peak decreases in height because the total area under the curve (total number of molecules) stays constant.'
          }
        ]
      }
    }
  ]
}
