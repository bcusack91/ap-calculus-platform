export const physics2ThermoProcPart7Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p7-intro',
      type: 'text' as const,
      content: `# 🎯 Synthesis & AP Review

**Part 7 of 7 — Everything Thermodynamics**

---

### Master Equation Table

| Equation | Name / Use |
|----------|-----------|
| $PV = nRT$ | Ideal gas law |
| $\\Delta U = Q - W$ | First law of thermodynamics |
| $W = \\int P\\,dV$ | General work formula |
| $W = P\\Delta V$ | Isobaric work |
| $W = nRT\\ln(V_f/V_i)$ | Isothermal work |
| $\\Delta U = nC_v\\Delta T$ | Internal energy change (**any** process) |
| $Q = nC_v\\Delta T$ | Heat at constant volume |
| $Q = nC_p\\Delta T$ | Heat at constant pressure |
| $C_p = C_v + R$ | Mayer's relation |
| $PV^\\gamma = \\text{const}$ | Adiabatic constraint |
| $TV^{\\gamma-1} = \\text{const}$ | Adiabatic $T$-$V$ relation |
| $e = W/Q_H = 1 - Q_C/Q_H$ | Engine efficiency |
| $e_{Carnot} = 1 - T_C/T_H$ | Maximum efficiency |
| $\\Delta S = Q_{rev}/T$ | Entropy change |
| $KE_{avg} = \\frac{3}{2}k_BT$ | Molecular KE |
| $v_{rms} = \\sqrt{3RT/M}$ | Root-mean-square speed |
| $U = \\frac{f}{2}nRT$ | Internal energy ($f$ = degrees of freedom) |

---

### Process Summary — The Big Table

| Property | Isobaric | Isochoric | Isothermal | Adiabatic |
|----------|----------|-----------|-----------|-----------|
| **Constant** | $P$ | $V$ | $T$ | $Q = 0$ |
| **$W$** | $P\\Delta V$ | $0$ | $nRT\\ln(V_f/V_i)$ | $-\\Delta U$ |
| **$Q$** | $nC_p\\Delta T$ | $nC_v\\Delta T$ | $W$ | $0$ |
| **$\\Delta U$** | $Q - W$ | $Q$ | $0$ | $-W$ |
| **PV curve** | Horizontal line | Vertical line | Hyperbola ($PV = \\text{const}$) | Steep hyperbola ($PV^\\gamma = \\text{const}$) |
| **$\\Delta T$** | Tracks $V$: $V \\uparrow \\Rightarrow T \\uparrow$ | Tracks $P$: $P \\uparrow \\Rightarrow T \\uparrow$ | $0$ | Expansion → cools; Compression → heats |`
    },
    {
      id: 'thermodynamicprocesses-p7-connections',
      type: 'text' as const,
      content: `### Common AP Mistakes — Don't Fall for These!

| Mistake | Correction |
|---------|-----------|
| Using °C in gas law or Carnot | Always convert to Kelvin |
| Saying $\\Delta U = 0$ for adiabatic | $\\Delta U = 0$ is for **isothermal**. Adiabatic: $Q = 0$ |
| Saying $Q = 0$ for isothermal | $Q = 0$ is for **adiabatic**. Isothermal: $\\Delta U = 0$, so $Q = W$ |
| Using $C_p$ when volume is constant | Constant $V$: use $C_v$. Constant $P$: use $C_p$ |
| Thinking $\\Delta U = nC_v\\Delta T$ only works at constant $V$ | It works for ANY process of an ideal gas |
| Forgetting the sign of $W$ | $W > 0$ = gas expands (does work). $W < 0$ = gas compressed (work done on gas) |
| Saying real engine efficiency can equal Carnot | Real engines ALWAYS have $e < e_{Carnot}$ |
| Thinking system entropy can't decrease | System entropy CAN decrease; **universe** entropy never decreases |

---

### Cross-Topic Connections

| Thermodynamics Concept | Connects To |
|----------------------|-------------|
| $PV = nRT$ | Fluid mechanics (atmospheric pressure gradients) |
| $KE = \\frac{3}{2}k_BT$ | Thermal equilibrium, temperature definition |
| Carnot efficiency | Second law sets fundamental limits on technology |
| Entropy | Information theory, statistical mechanics, arrow of time |
| Adiabatic processes | Sound wave propagation ($v = \\sqrt{\\gamma RT/M}$) |
| Phase changes | Latent heat, PV diagrams with phase boundaries |

---

### Gas Type Quick Reference

| Gas Type | $f$ | $C_v$ | $C_p$ | $\\gamma$ | Example |
|----------|-----|--------|--------|----------|---------|
| Monatomic | 3 | $\\frac{3}{2}R$ | $\\frac{5}{2}R$ | $1.67$ | He, Ne, Ar |
| Diatomic | 5 | $\\frac{5}{2}R$ | $\\frac{7}{2}R$ | $1.40$ | N₂, O₂, H₂ |
| Polyatomic | 6 | $3R$ | $4R$ | $1.33$ | CO₂, H₂O |

---

### Signs At a Glance

| Scenario | $Q$ | $W$ | $\\Delta U$ |
|----------|-----|-----|-----------|
| Gas expands, absorbs heat | $+$ | $+$ | Depends on magnitudes |
| Gas compressed adiabatically | $0$ | $-$ | $+$ (heats up) |
| Gas cooled at constant volume | $-$ | $0$ | $-$ |
| Isothermal expansion | $+$ | $+$ | $0$ |
| Free expansion (into vacuum) | $0$ | $0$ | $0$ |`
    },
    {
      id: 'thermodynamicprocesses-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An ideal gas undergoes a process where its pressure doubles while volume is halved. What happens to the temperature?',
            options: ['Temperature stays the same', 'Temperature doubles', 'Temperature quadruples', 'Temperature halves'],
            correctAnswer: 0,
            explanation: '$PV = nRT$. If $P \\to 2P$ and $V \\to V/2$, then $PV$ is unchanged, so $T$ is unchanged. The gas follows neither a simple isobaric nor isochoric path.'
          },
          {
            question: 'Rank the work done BY the gas from most to least for the same expansion ($V_i$ to $V_f$): isobaric, isothermal, adiabatic.',
            options: ['Isobaric > Isothermal > Adiabatic', 'Adiabatic > Isothermal > Isobaric', 'All equal — same $\\Delta V$', 'Isothermal > Isobaric > Adiabatic'],
            correctAnswer: 0,
            explanation: 'Isobaric maintains the highest pressure throughout. Isothermal pressure drops as $1/V$. Adiabatic pressure drops faster ($1/V^\\gamma$, $\\gamma > 1$). More pressure × same $\\Delta V$ = more work.'
          },
          {
            question: 'A refrigerator removes 300 J from the cold space using 100 J of work. The COP and heat expelled to the warm side are:',
            options: ['COP = 3, $Q_H$ = 400 J', 'COP = 3, $Q_H$ = 300 J', 'COP = 0.33, $Q_H$ = 400 J', 'COP = 4, $Q_H$ = 400 J'],
            correctAnswer: 0,
            explanation: '$COP = Q_C/W = 300/100 = 3$. $Q_H = Q_C + W = 300 + 100 = 400$ J. The warm reservoir receives MORE heat than was removed from the cold side.'
          },
          {
            question: 'Which process results in the greatest temperature change for the same amount of heat added to 1 mol of monatomic ideal gas?',
            options: ['Constant volume', 'Constant pressure', 'The temperature change is the same', 'It depends on the initial temperature'],
            correctAnswer: 0,
            explanation: 'At constant $V$: $\\Delta T = Q/(nC_v)$. At constant $P$: $\\Delta T = Q/(nC_p)$. Since $C_p > C_v$, the same $Q$ produces a larger $\\Delta T$ at constant volume.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** A Carnot engine operates between 800 K and 200 K. What is its efficiency? (as percent, no % sign)

**2)** 1 mol of monatomic gas at 300 K expands isothermally to triple its volume. What is $W$? (in J, round to nearest whole number)

**3)** If 2 mol of diatomic gas is heated at constant pressure from 300 K to 500 K, what is $\\Delta U$? (in J, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['75', '2741', '8314'],
        hint1: '$e = 1 - T_C/T_H = 1 - 200/800$',
        hint2: '$W = nRT\\ln(V_f/V_i) = 1 \\times 8.314 \\times 300 \\times \\ln(3)$',
        hint3: '$\\Delta U = nC_v\\Delta T = 2 \\times \\frac{5}{2}(8.314) \\times 200$ (use $C_v$ even though constant $P$!)',
        explanation: '1) $e = 1 - 200/800 = 0.75 = 75\\%$. 2) $W = 8.314 \\times 300 \\times 1.0986 = 2741$ J. 3) $\\Delta U = nC_v\\Delta T = 2 \\times 2.5 \\times 8.314 \\times 200 = 8314$ J. Remember: $\\Delta U = nC_v\\Delta T$ for ANY process!'
      }
    }
  ]
};