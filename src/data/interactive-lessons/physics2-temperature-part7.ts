export const physics2TemperaturePart7Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part connects all the concepts from the topic — temperature scales, thermal equilibrium, linear and volume expansion, and kinetic theory — into a unified review with AP-style problems.

## Concept Map

$$\\text{Temperature} \\xrightarrow{\\text{measures}} KE_{\\text{avg}} = \\frac{3}{2}k_BT$$

$$\\text{Temperature change} \\xrightarrow{\\text{causes}} \\begin{cases} \\Delta L = \\alpha L_0 \\Delta T & \\text{(linear)} \\\\ \\Delta A = 2\\alpha A_0 \\Delta T & \\text{(area)} \\\\ \\Delta V = \\beta V_0 \\Delta T & \\text{(volume, } \\beta \\approx 3\\alpha\\text{)} \\end{cases}$$

$$\\text{Zeroth Law} \\xrightarrow{\\text{enables}} \\text{Temperature measurement (thermometers)}$$

$$v_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} = \\sqrt{\\frac{3RT}{M}}$$
      `
    },
    {
      id: 'te7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid ⚠️

### 1. Using °C in Kinetic Theory Equations
$KE_{\\text{avg}} = \\frac{3}{2}k_BT$ and $v_{\\text{rms}} = \\sqrt{3RT/M}$ require $T$ in **Kelvin**. Using Celsius gives a completely wrong answer.

### 2. Confusing Temperature and Heat
- **Temperature** = average KE per molecule (intensive property)
- **Heat** = energy transferred due to temperature difference (not a property of a system)

### 3. Thinking Holes Shrink When Heated
A hole in a heated plate expands as if it were filled with the same material. The hole gets **larger**, not smaller.

### 4. Forgetting That $\\beta \\approx 3\\alpha$
If given $\\alpha$ and asked about volume expansion, you need $\\beta = 3\\alpha$. Many students use $\\alpha$ directly for volume problems.

### 5. Ignoring Container Expansion
When a liquid heats up in a container, the **apparent** expansion is $(\\beta_{\\text{liquid}} - \\beta_{\\text{container}})V_0 \\Delta T$, not $\\beta_{\\text{liquid}} V_0 \\Delta T$.

### 6. Assuming All Molecules Move at the Same Speed
The Maxwell-Boltzmann distribution shows a **range** of speeds. The rms speed is a statistical measure, not the speed of every molecule.

### 7. Confusing $v_p$, $\\bar{v}$, and $v_{\\text{rms}}$
Always: $v_p < \\bar{v} < v_{\\text{rms}}$. The rms speed is the one that appears in $KE = \\frac{1}{2}mv_{\\text{rms}}^2$.
      `
    },
    {
      id: 'te7-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Concept Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A copper plate has a circular hole of diameter 5.00 cm at 20°C. When heated to 220°C, the diameter of the hole (α_Cu = 17 × 10⁻⁶ /°C):',
            options: [
              'Decreases because the surrounding copper expands inward',
              'Stays exactly the same',
              'Increases to about 5.017 cm',
              'Increases to about 5.034 cm'
            ],
            correctAnswer: 2,
            explanation: 'The hole expands like a solid disk of the same material. $\\Delta d = \\alpha d_0 \\Delta T = (17 \\times 10^{-6})(5.00)(200) = 0.017$ cm. New diameter = $5.00 + 0.017 = 5.017$ cm.'
          },
          {
            question: 'Two identical containers hold equal volumes of gas at the same temperature. Container A holds helium and container B holds oxygen. Which statement is correct?',
            options: [
              'Helium molecules have greater average KE',
              'Oxygen molecules have greater average KE',
              'Both have the same average KE per molecule, and helium moves faster',
              'Both have the same rms speed'
            ],
            correctAnswer: 2,
            explanation: '$KE_{\\text{avg}} = \\frac{3}{2}k_BT$ depends only on temperature, so both gases have the same average KE. Since helium is lighter ($M = 4$ vs $M = 32$), it must move faster to have the same KE: $v_{\\text{He}}/v_{\\text{O}_2} = \\sqrt{32/4} = 2\\sqrt{2} \\approx 2.83$.'
          },
          {
            question: 'A mercury thermometer is placed in warm water. As the thermometer first enters the water, the mercury level briefly dips before rising. This is because:',
            options: [
              'Mercury contracts when first heated',
              'The glass bulb expands before the mercury inside heats up, so the mercury level drops momentarily',
              'Water pressure pushes the mercury down',
              'This does not actually happen'
            ],
            correctAnswer: 1,
            explanation: 'The glass bulb is in direct contact with the warm water and heats first. The bulb expands, increasing its internal volume, so the mercury level drops briefly. Once heat conducts through to the mercury, the mercury expands much more than the glass ($\\beta_{\\text{Hg}} \\gg \\beta_{\\text{glass}}$) and the level rises.'
          }
        ]
      }
    },
    {
      id: 'te7-mixed-drill',
      type: 'input-boxes' as const,
      content: `
**Mixed Review Drill** 🎯

1) Convert 350 K to °F. Round to the nearest whole number.

2) An iron rod ($\\alpha = 12 \\times 10^{-6}$ /°C) is 1.500 m at 20°C. A brass rod ($\\alpha = 19 \\times 10^{-6}$ /°C) is 1.500 m at 20°C. Both are heated to 120°C. Find the difference in their lengths $|L_{\\text{brass}} - L_{\\text{iron}}|$ in mm.

3) Find the rms speed (in m/s) of helium atoms ($M = 4.0 \\times 10^{-3}$ kg/mol) at 200 K. Use $R = 8.314$ J/(mol·K). Round to the nearest whole number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['171', '1.05', '1117'],
        hint1: 'First convert K to °C: $T_C = 350 - 273 = 77$°C. Then $T_F = \\frac{9}{5}(77) + 32$.',
        hint2: '$\\Delta L_{\\text{diff}} = (\\alpha_{\\text{brass}} - \\alpha_{\\text{iron}}) L_0 \\Delta T = (19 - 12) \\times 10^{-6} \\times 1.500 \\times 100$.',
        hint3: '$v_{\\text{rms}} = \\sqrt{3RT/M} = \\sqrt{3(8.314)(200)/(4.0 \\times 10^{-3})}$.',
        explanation: '1) $T_C = 350 - 273 = 77$°C. $T_F = \\frac{9}{5}(77) + 32 = 138.6 + 32 = 170.6 \\approx 171$°F. 2) $\\Delta L_{\\text{diff}} = (7 \\times 10^{-6})(1.500)(100) = 1.05 \\times 10^{-3}$ m $= 1.05$ mm. 3) $v_{\\text{rms}} = \\sqrt{\\frac{3(8.314)(200)}{0.004}} = \\sqrt{\\frac{4{,}988}{0.004}} = \\sqrt{1{,}247{,}100} \\approx 1{,}117$ m/s.'
      }
    },
    {
      id: 'te7-frq-preview',
      type: 'text' as const,
      content: `
## AP-Style Free Response Preview 📝

Here is the type of multi-part question you might see on the AP Physics 2 exam:

---

**A steel railroad rail is 25.0 m long at 20.0°C. The coefficient of linear expansion for steel is $\\alpha = 12.0 \\times 10^{-6}$ /°C.**

**(a)** Calculate the change in length of the rail when the temperature increases to 50.0°C.

> $\\Delta L = \\alpha L_0 \\Delta T = (12.0 \\times 10^{-6})(25.0)(30.0) = 9.00 \\times 10^{-3}$ m $= 9.00$ mm

**(b)** If no expansion gap is provided, describe what happens to the rail and explain using physics principles.

> Without a gap, the rail cannot expand freely. The constraint produces a compressive thermal stress. If the stress exceeds the yield strength of steel, the rail buckles — it bends laterally out of alignment. This is an application of $\\sigma = Y \\alpha \\Delta T$, where $Y$ is Young's modulus.

**(c)** A train wheel is a steel ring with inner diameter 0.8500 m at 20.0°C. The axle has diameter 0.8510 m. To what minimum temperature must the wheel be heated to slip onto the axle?

> $d(1 + \\alpha \\Delta T) = 0.8510$
> $0.8500(1 + 12.0 \\times 10^{-6} \\cdot \\Delta T) = 0.8510$
> $\\Delta T = \\frac{0.8510/0.8500 - 1}{12.0 \\times 10^{-6}} = \\frac{0.001176}{12.0 \\times 10^{-6}} = 98.0$°C
> $T = 20.0 + 98.0 = 118.0$°C

**(d)** Once the wheel cools back to 20°C on the axle, explain the microscopic reason it grips the axle tightly.

> As the wheel cools, its atoms lose kinetic energy and vibrate with smaller amplitudes. The average interatomic spacing decreases, causing the ring to contract. Since it cannot contract past the axle diameter, internal stresses develop that create a strong compressive fit (interference fit).
      `
    },
    {
      id: 'te7-final-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Comprehensive Quiz** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'The temperature −40 is the same value on which two scales?',
            options: [
              'Celsius and Kelvin',
              'Fahrenheit and Kelvin',
              'Celsius and Fahrenheit',
              'No two scales share a common temperature'
            ],
            correctAnswer: 2,
            explanation: '$T_F = \\frac{9}{5}T_C + 32$. Setting $T_F = T_C$: $T = \\frac{9}{5}T + 32 \\Rightarrow -\\frac{4}{5}T = 32 \\Rightarrow T = -40$. So $-40$°C $= -40$°F.'
          },
          {
            question: 'A gas is at 300 K. Its molecules have average KE of $6.21 \\times 10^{-21}$ J. If the temperature is raised to 600 K, the new average KE and new rms speed are:',
            options: [
              'KE doubles to 12.42 × 10⁻²¹ J; speed doubles',
              'KE doubles to 12.42 × 10⁻²¹ J; speed increases by factor √2',
              'KE increases by √2; speed doubles',
              'Both KE and speed increase by √2'
            ],
            correctAnswer: 1,
            explanation: '$KE \\propto T$, so doubling $T$ doubles KE to $12.42 \\times 10^{-21}$ J. But $v_{\\text{rms}} \\propto \\sqrt{T}$, so doubling $T$ increases speed by only $\\sqrt{2} \\approx 1.41$.'
          },
          {
            question: 'An engineer needs a material for a precision measuring device that must maintain its dimensions across a wide temperature range. The best choice is:',
            options: [
              'Aluminum (α = 23 × 10⁻⁶ /°C)',
              'Brass (α = 19 × 10⁻⁶ /°C)',
              'Steel (α = 12 × 10⁻⁶ /°C)',
              'Invar (α = 0.9 × 10⁻⁶ /°C)'
            ],
            correctAnswer: 3,
            explanation: 'Invar has the smallest coefficient of linear expansion ($\\alpha = 0.9 \\times 10^{-6}$ /°C), meaning it changes dimensions the least with temperature. Invar was specifically engineered for precision instruments, clock pendulums, and scientific equipment.'
          },
          {
            question: 'An aluminum ring (α = 23 × 10⁻⁶ /°C) is heated and placed around a glass rod (α = 9 × 10⁻⁶ /°C). As the system cools back to room temperature:',
            options: [
              'The ring loosens because aluminum contracts more than glass',
              'The ring tightens because aluminum contracts more than glass, gripping the rod',
              'Nothing happens — both contract equally',
              'The glass rod cracks because it contracts less'
            ],
            correctAnswer: 1,
            explanation: 'Aluminum has a larger $\\alpha$ than glass. As both cool, the aluminum ring contracts more than the glass rod. The ring shrinks around the rod, creating a tight grip — this is the principle behind shrink fitting.'
          }
        ]
      }
    }
  ]
}
