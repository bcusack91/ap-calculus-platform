export const physics2TemperaturePart7Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part connects the whole topic — temperature scales, thermal equilibrium, pressure from collisions, the ideal gas law, gas graphs, and kinetic theory — into one review with AP-style problems.

## Concept Map

$$\\text{Temperature} \\xrightarrow{\\text{measures}} KE_{\\text{avg}} = \\frac{3}{2}k_BT = \\frac{1}{2}mv_{\\text{rms}}^2$$

$$\\text{Molecular collisions} \\xrightarrow{\\text{produce}} P = \\frac{F_\\perp}{A}$$

$$\\text{Ideal gas model} \\xrightarrow{\\text{gives}} PV = nRT = Nk_BT$$

$$\\text{Thermal equilibrium} \\xrightarrow{\\text{enables}} \\text{temperature measurement (thermometers)}$$

$$P \\text{ vs. } T \\text{ at constant } V \\xrightarrow{\\text{extrapolates to}} P = 0 \\text{ at } 0 \\text{ K} \\approx -273°\\text{C}$$
      `
    },
    {
      id: 'te7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid ⚠️

### 1. Using °C in Gas and Kinetic Theory Equations
$PV = nRT$, $KE_{\\text{avg}} = \\frac{3}{2}k_BT$ and $v_{\\text{rms}} = \\sqrt{3k_BT/m}$ all require $T$ in **kelvins**. A ratio of Celsius temperatures (like $327/27$) is meaningless.

### 2. Forgetting to Convert Volume and Pressure
Liters and kilopascals cancel in a ratio such as $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$, but $PV = nRT$ with $R = 8.31$ J/(mol·K) needs $\\text{m}^3$ and Pa.

### 3. Confusing Temperature and Heat
- **Temperature** describes the average kinetic energy of the particles in a system.
- **Heat** (heating or cooling) is energy transferred because of a temperature difference. A system does not "contain" heat.

### 4. Saying Heavier Atoms Have More Kinetic Energy
At the same temperature, all ideal gas atoms have the same average kinetic energy. Heavier atoms simply move more slowly.

### 5. Doubling Speed When Temperature Doubles
$KE_{\\text{avg}} \\propto T$, but $v_{\\text{rms}} \\propto \\sqrt{T}$. Doubling $T$ multiplies the rms speed by $\\sqrt{2}$.

### 6. Treating Pressure as a Wall-Only Effect
Pressure exists throughout the gas, because atoms collide with each other and with anything placed inside the gas.

### 7. Assuming All Molecules Move at the Same Speed
The Maxwell–Boltzmann distribution shows a **range** of speeds. The rms speed is a statistical measure, not the speed of every molecule.
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
            question: 'A rigid container of ideal gas is heated from 300 K to 450 K. By what factor does the pressure change?',
            options: [
              '1.5',
              '2.25',
              '1.22',
              '0.67'
            ],
            correctAnswer: 0,
            explanation: 'At constant volume $P \\propto T$, so the pressure is multiplied by $450/300 = 1.5$. The factor 1.22 is the change in rms speed ($\\sqrt{1.5}$), and 2.25 wrongly squares the temperature ratio.'
          },
          {
            question: 'Two identical containers hold equal volumes of gas at the same temperature. Container A holds helium and container B holds oxygen. Which statement is correct?',
            options: [
              'Helium atoms have the greater average kinetic energy',
              'Oxygen molecules have the greater average kinetic energy',
              'Equal average energy, but helium atoms move faster',
              'Their rms speeds are equal, since their temperature is equal'
            ],
            correctAnswer: 2,
            explanation: '$KE_{\\text{avg}} = \\frac{3}{2}k_BT$ depends only on temperature, so both gases have the same average kinetic energy. Helium is lighter, so it must move faster: $v_{\\text{He}}/v_{\\text{O}_2} = \\sqrt{32/4} \\approx 2.8$.'
          },
          {
            question: 'In a sealed piston, a gas is compressed to half its volume while its absolute temperature doubles. The pressure becomes:',
            options: [
              'Four times the original',
              'Twice the original',
              'The same as the original',
              'Half the original'
            ],
            correctAnswer: 0,
            explanation: 'From $P = nRT/V$, doubling $T$ doubles $P$ and halving $V$ doubles it again, for a factor of four. Treating the two changes as canceling ignores that both raise the pressure.'
          }
        ]
      }
    },
    {
      id: 'te7-mixed-drill',
      type: 'input-boxes' as const,
      content: `
**Mixed Review Drill** 🔢

Use $R = 8.31$ J/(mol·K) and $k_B = 1.38 \\times 10^{-23}$ J/K.

1) Find the average kinetic energy of a helium atom at $600$ K, in units of $10^{-21}$ J (3 significant figures).

2) A $4.0$ L tank holds $0.20$ mol of gas at $27°\\text{C}$. Find the pressure in kPa (3 significant figures).

3) The rms speed of a gas is $400$ m/s at $200$ K. Find its rms speed at $800$ K, in m/s.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12.4', '125', '800'],
        hint1: '$KE_{\\text{avg}} = \\frac{3}{2}k_BT = \\frac{3}{2}(1.38 \\times 10^{-23})(600)$.',
        hint2: 'Convert: $V = 4.0 \\times 10^{-3} \\text{ m}^3$, $T = 300$ K. Then $P = nRT/V$.',
        hint3: '$v_{\\text{rms}} \\propto \\sqrt{T}$. The temperature is multiplied by 4.',
        explanation: '1) $\\frac{3}{2}(1.38 \\times 10^{-23})(600) = 1.24 \\times 10^{-20}$ J $= 12.4 \\times 10^{-21}$ J. 2) $P = (0.20)(8.31)(300)/(4.0 \\times 10^{-3}) = 1.25 \\times 10^5$ Pa $= 125$ kPa. 3) Four times the temperature gives $\\sqrt{4} = 2$ times the speed: $800$ m/s.'
      }
    },
    {
      id: 'te7-frq-preview',
      type: 'text' as const,
      content: `
## AP-Style Free Response Preview 📝

Here is the kind of multi-part question you might see on the AP Physics 2 exam:

---

**A sealed cylinder with a movable, frictionless piston contains $0.050$ mol of a monatomic ideal gas at $300$ K and $1.0 \\times 10^5$ Pa.**

**(a)** Calculate the volume of the gas.

> $V = \\frac{nRT}{P} = \\frac{(0.050)(8.31)(300)}{1.0 \\times 10^5} = 1.2 \\times 10^{-3} \\text{ m}^3$

**(b)** The gas is heated slowly at constant pressure until its volume doubles. Determine the new temperature.

> At constant $P$, $V \\propto T$, so $T$ doubles: $600$ K.

**(c)** Explain, in terms of the motion of the gas atoms, how the gas can keep the same pressure even though its temperature has doubled.

> The atoms now move faster, so each collision with the walls delivers more momentum. But the volume has doubled, so the atoms are spread out and strike each square meter of wall less often. The decrease in collision rate exactly offsets the larger momentum per collision, so the average force per area is unchanged.

**(d)** Sketch how a graph of the gas's volume vs. absolute temperature would look for this process.

> A straight line that, if extended, would pass through the origin, because $V = \\left(\\frac{nR}{P}\\right)T$ with $P$ constant.
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
            question: 'A gas is at 300 K. Its atoms have an average kinetic energy of $6.21 \\times 10^{-21}$ J. If the temperature is raised to 600 K, the new average kinetic energy and rms speed are:',
            options: [
              'KE doubles to $12.4 \\times 10^{-21}$ J; speed doubles',
              'KE doubles to $12.4 \\times 10^{-21}$ J; speed rises by $\\sqrt{2}$',
              'KE rises by $\\sqrt{2}$ to $8.78 \\times 10^{-21}$ J; speed doubles',
              'KE rises by $\\sqrt{2}$ to $8.78 \\times 10^{-21}$ J; speed rises by $\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$KE_{\\text{avg}} \\propto T$, so doubling $T$ doubles the kinetic energy to $12.4 \\times 10^{-21}$ J. Because $v_{\\text{rms}} \\propto \\sqrt{T}$, the speed increases by only $\\sqrt{2} \\approx 1.41$.'
          },
          {
            question: 'Why do real gases behave most like ideal gases at low density and high temperature?',
            options: [
              'The atoms are far apart and fast, so attractions and atomic volume matter little',
              'The atoms collide with the walls less often, so the pressure becomes negligible',
              'The atoms move more slowly, so their collisions become perfectly elastic',
              'The atoms become lighter at high temperature, so they act like point particles'
            ],
            correctAnswer: 0,
            explanation: 'The ideal gas model ignores attractions between atoms and the volume of the atoms. Both are negligible when the atoms are far apart (low density) and moving fast (high temperature). Atom mass does not change with temperature.'
          },
          {
            question: 'A student measures a constant-volume gas bulb at several Celsius temperatures. Which graph should she make to find absolute zero, and what should she read from it?',
            options: [
              'Pressure vs. temperature; the temperature where the line reaches zero pressure',
              'Pressure vs. temperature; the pressure where the line crosses zero degrees',
              'Volume vs. temperature; the temperature at which the line reaches zero volume',
              'Pressure vs. volume; the volume where the curve reaches zero pressure'
            ],
            correctAnswer: 0,
            explanation: 'At constant volume, pressure is linear in temperature, and extrapolating that line to zero pressure gives absolute zero. The pressure at 0°C is just one data point, and the volume of a sealed bulb does not change.'
          }
        ]
      }
    }
  ]
}
