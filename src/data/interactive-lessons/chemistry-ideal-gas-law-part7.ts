export const chemIdealGasLawPart7Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl7-intro',
      type: 'text' as const,
      content: `# 🏆 Synthesis & AP Review

**Part 7 of 7 — Ideal vs. Real Gases & AP Exam Preparation**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'gl7-ideal-vs-real',
      type: 'text' as const,
      content: `
## 📌 Ideal vs. Real Gases

> ⚠️ **Warning:** The ideal gas law is an approximation! Real gases deviate from ideal behavior, especially at high pressures and low temperatures.

The ideal gas law works well under many conditions, but **real gases** deviate from ideal behavior when:

| Factor | Ideal Assumption | Reality |
|--------|-----------------|---------|
| **Molecular volume** | Negligible | Molecules have finite size |
| **Intermolecular forces** | None | Attractive forces exist (London, dipole-dipole, H-bonds) |


---

### When Do Gases Deviate Most?

- **High pressure** → molecules are close together → volume of molecules matters, attractions are significant
- **Low temperature** → molecules move slowly → attractions have more effect
- **Near the boiling point** → gas is close to condensing → strong intermolecular forces


---

### When Is Ideal Behavior Best?

> 🔑 **Key Concept:** Gases behave most ideally at high temperature and low pressure — conditions where molecules are far apart and moving fast.

- **Low pressure** → molecules far apart → negligible volume and attractions
- **High temperature** → fast-moving molecules → overcome attractions easily
- **Noble gases and small nonpolar molecules** → weakest intermolecular forces
      `
    },
    {
      id: 'gl7-van-der-waals',
      type: 'text' as const,
      content: `
## 📌 Explaining Deviations at the Particle Level

The AP exam asks you to explain **why** a real gas departs from $PV = nRT$ and in **which direction**. Two effects matter.


---

### Effect 1: Attractions Lower the Pressure

When particles attract each other, a particle about to strike the wall is pulled back slightly by its neighbors. Collisions with the wall are softer and a little less frequent, so:

$$P_{\\text{real}} < P_{\\text{ideal}}$$

This effect is largest at **low temperature** (slow particles are affected more by attractions) and for gases with **strong IMFs** (polar molecules, hydrogen bonding, or large, polarizable molecules).


---

### Effect 2: Particle Volume Raises the Volume

The ideal gas law treats particles as points. Real particles take up space, so the space actually available for motion is smaller than the container. At **very high pressure**, where particles are crowded together, this means:

$$V_{\\text{real}} > V_{\\text{ideal}}$$

for the same $n$, $P$, and $T$. The gas cannot be squeezed as small as an ideal gas would be.


---

### Comparing Gases

| Gas | IMFs | Particle Size | Expected Deviation |
|-----|------|---------------|-------------------|
| He | Very weak dispersion | Very small | Smallest |
| $N_{2}$ | Weak dispersion | Small | Small |
| $CO_{2}$ | Stronger dispersion (more electrons) | Larger | Larger |
| $H_{2}O$ vapor, $NH_{3}$ | Hydrogen bonding | Small | Large, especially near condensation |

> 💡 **Tip:** On a free-response question, name the specific assumption that fails ("the particles attract one another" or "the particles' own volume is not negligible") and connect it to the direction of the deviation.
      `
    },
    {
      id: 'gl7-real-gas-quiz',
      type: 'multiple-choice' as const,
      content: `
**Ideal vs. Real Gas Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which gas would be expected to deviate MOST from ideal behavior at moderate conditions?',
            options: [
              'He',
              '$H_{2}$',
              '$NH_{3}$',
              'Ne'
            ],
            correctAnswer: 2,
            explanation: '$NH_{3}$ is a polar molecule that can form hydrogen bonds, giving it strong intermolecular forces. Noble gases (He, Ne) and $H_{2}$ have very weak London forces, so they behave more ideally.'
          },
          {
            question: 'At low temperature, the measured pressure of $NH_{3}$ gas is lower than the ideal gas law predicts. Which factor best explains this?',
            options: [
              'The finite volume of the $NH_{3}$ molecules',
              'Attractions between $NH_{3}$ molecules',
              'Energy lost in non-elastic wall collisions',
              'The spread of molecular speeds in the gas'
            ],
            correctAnswer: 1,
            explanation: 'Hydrogen bonding between $NH_{3}$ molecules pulls particles back as they approach the wall, so wall collisions are softer and less frequent and the measured pressure falls below the ideal value. Particle volume would push the deviation the other way, and collisions in a gas are treated as elastic.'
          },
          {
            question: 'At very high pressures, the measured volume of a real gas is typically:',
            options: [
              'Less than predicted by ideal gas law',
              'Greater than predicted by ideal gas law',
              'Equal to ideal gas prediction',
              'Close to zero, because the gas compresses completely'
            ],
            correctAnswer: 1,
            explanation: 'At very high pressures, the finite volume of the molecules themselves becomes significant. This means the real gas cannot be compressed as much as an ideal gas would, so the actual volume is greater than predicted.'
          }
        ]
      }
    },
    {
      id: 'gl7-ap-inputs',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculation Practice** 🧮

**1)** 0.500 mol of an ideal gas at 1.00 atm and 273 K occupies what volume? (in L, to 3 significant figures)

**2)** For 1.00 mol of gas in a 0.500 L container at 500 K, what pressure does the ideal gas law predict? (in atm, to 3 significant figures)

**3)** A gas has a density of 1.25 g/L at 273 K and 1.00 atm. What is its molar mass? (in g/mol, to 3 significant figures)
      `,
      exercise: {
        inputs: [
          {
            label: 'Volume (L)',
            correctAnswer: '11.2',
            explanation: '$V = nRT/P = (0.500)(0.0821)(273)/(1.00) = 11.2$ L. This is exactly half the molar volume at STP, as expected for 0.5 mol.'
          },
          {
            label: 'Ideal pressure (atm)',
            correctAnswer: '82.1',
            explanation: '$P_{\\text{ideal}} = nRT/V = (1.00)(0.0821)(500)/(0.500) = 82.1$ atm. A real gas this compressed would deviate noticeably from this value.'
          },
          {
            label: 'Molar mass (g/mol)',
            correctAnswer: '28.0',
            explanation: '$M = dRT/P = (1.25)(0.0821)(273)/1.00 = 28.0$ g/mol, consistent with $N_{2}$ or CO.'
          }
        ]
      }
    },
    {
      id: 'gl7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Real Gas Behavior Trends** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl7-dd1',
            label: 'At higher temperature, gas behavior becomes ___',
            options: ['more ideal', 'less ideal', 'unchanged'],
            correctIndex: 0,
            explanation: 'Higher temperature means molecules move faster, overcoming intermolecular attractions. Behavior approaches ideal.'
          },
          {
            id: 'gl7-dd2',
            label: 'At higher pressure, gas behavior becomes ___',
            options: ['more ideal', 'less ideal', 'unchanged'],
            correctIndex: 1,
            explanation: 'Higher pressure forces molecules closer together, making molecular volume and intermolecular forces more significant. Behavior deviates from ideal.'
          },
          {
            id: 'gl7-dd3',
            label: 'Attractions between gas particles make the measured pressure ___ the ideal prediction',
            options: ['lower than', 'higher than', 'equal to'],
            correctIndex: 0,
            explanation: 'Attractions pull particles back as they approach the wall, so collisions are softer and less frequent. The measured pressure is lower than the ideal value.'
          },
          {
            id: 'gl7-dd4',
            label: 'At very high pressure, the volume of the particles themselves makes the measured volume ___ the ideal prediction',
            options: ['larger than', 'smaller than', 'equal to'],
            correctIndex: 0,
            explanation: 'Real particles occupy space, so a crowded gas cannot be compressed as far as an ideal gas. The measured volume is larger than the ideal value.'
          }
        ]
      }
    },
    {
      id: 'gl7-ap-frq',
      type: 'multiple-choice' as const,
      content: `
**AP Free-Response Style Questions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student collects 250 mL of $O_{2}$ over water at 22°C and 748 mmHg (vapor pressure of water at 22°C = 19.8 mmHg). Using the ideal gas law, the moles of dry $O_{2}$ collected is closest to:',
            options: [
              '0.133 mol',
              '0.0099 mol',
              '0.0102 mol',
              '7.51 mol'
            ],
            correctAnswer: 1,
            explanation: '$P_{O_2} = 748 - 19.8 = 728.2$ mmHg $= 728.2/760 = 0.9582$ atm. $V = 0.250$ L, $T = 295.15$ K. $n = PV/(RT) = (0.9582)(0.250)/((0.0821)(295.15)) = 0.2396/24.23 = 0.00989 \\approx 0.0099$ mol. Skipping the vapor-pressure correction gives 0.0102 mol, using 22 instead of 295 K gives 0.133 mol, and leaving P in mmHg gives 7.51 mol.'
          },
          {
            question: 'Consider the reaction: $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$. If 4.0 L of $H_{2}$ reacts with excess $O_{2}$ at constant T and P, the volume of $H_{2}O$ produced is:',
            options: [
              '2.0 L',
              '4.0 L',
              '6.0 L',
              '8.0 L'
            ],
            correctAnswer: 1,
            explanation: `At constant T and P, volumes of gases are in the same ratio as moles (Avogadro's Law). 2 mol $H_{2}$ → 2 mol $H_{2}O$. So 4.0 L $H_{2}$ → 4.0 L $H_{2}O$ (same mole ratio, 2:2 = 1:1).`
          },
          {
            question: 'Which of the following gases would deviate MOST from ideal behavior?',
            options: [
              'He at 500 K and 0.5 atm',
              '$H_{2}$ at 400 K and 1 atm',
              '$NH_{3}$ at 200 K and 50 atm',
              'Ne at 300 K and 2 atm'
            ],
            correctAnswer: 2,
            explanation: '$NH_{3}$ has strong hydrogen bonding (large intermolecular forces), and at low T and high P, molecules are close together and slow-moving. This maximizes deviation from ideal behavior.'
          },
          {
            question: 'Which gas would show the LARGEST deviation from ideal behavior at 1 atm and 300 K?',
            options: [
              'He',
              '$N_{2}$',
              '$CH_{4}$',
              '$SO_{2}$'
            ],
            correctAnswer: 3,
            explanation: '$SO_{2}$ is a polar molecule with many electrons, so it has the strongest intermolecular attractions of the four and the largest particle size. He, $N_{2}$, and $CH_{4}$ are nonpolar with weaker dispersion forces.'
          },
          {
            question: 'A 5.00 L flask contains 0.200 mol of gas at 300 K. The gas is heated to 600 K in the sealed flask. The final pressure is:',
            options: [
              'Half of the initial pressure',
              'Equal to the initial pressure',
              'Twice the initial pressure',
              'Four times the initial pressure'
            ],
            correctAnswer: 2,
            explanation: 'At constant V and n: $P \\propto T$. Doubling T from 300 K to 600 K doubles the pressure.'
          },
          {
            question: 'Which condition makes gases behave most ideally?',
            options: [
              'Low temperature, high pressure',
              'High temperature, low pressure',
              'Low temperature, low pressure',
              'High temperature, high pressure'
            ],
            correctAnswer: 1,
            explanation: 'High T means fast molecules that overcome intermolecular forces; low P means molecules are far apart so volume and forces are negligible. Both conditions favor ideal behavior.'
          },
          {
            question: 'At very high pressures, the measured volume of a real gas is ________ the ideal gas prediction.',
            options: [
              'Greater than',
              'Less than',
              'Equal to',
              'Sometimes greater, sometimes less'
            ],
            correctAnswer: 0,
            explanation: 'At very high pressures, the finite volume of the gas molecules themselves becomes significant. Because the particles take up space that the ideal gas law ignores, the actual volume exceeds the ideal prediction.'
          },
          {
            question: 'On the AP Chemistry exam, a student is given P in kPa, V in L, T in K, and is asked to find n. Which value of R should they use?',
            options: [
              '0.0821 L·atm/(mol·K)',
              '8.314 L·kPa/(mol·K)',
              '62.36 L·torr/(mol·K)',
              'Convert kPa to atm first, then use 0.0821'
            ],
            correctAnswer: 1,
            explanation: 'When P is in kPa and V is in L, use $R = 8.314$ L·kPa/(mol·K) directly — no unit conversion needed.'
          }
        ]
      }
    }
  ]
}
