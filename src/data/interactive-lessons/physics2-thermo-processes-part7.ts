export const physics2ThermoProcPart7Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p7-intro',
      type: 'text' as const,
      content: `# 📝 Synthesis & AP Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Equations

| Concept | Equation |
|---------|----------|
| First Law | $\\\\Delta U = Q - W$ |
| Isobaric Work | $W = P\\\\Delta V$ |
| Isothermal Work | $W = nRT\\\\ln(V_f/V_i)$ |
| Carnot Efficiency | $e = 1 - T_C/T_H$ |
| Entropy | $\\\\Delta S = Q_{rev}/T$ |
| KE per molecule | $\\\\overline{KE} = \\\\frac{3}{2}k_BT$ |

### AP Exam Tips
- Always identify the process type first
- PV diagram area = work (positive if clockwise for engines)
- For Carnot: temperatures MUST be in Kelvin
- $\\\\Delta U = 0$ for complete cycles and isothermal processes`
    },    {
      id: 'thermodynamicprocesses-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which process has the steepest curve on a PV diagram?',
            options: ['Isothermal', 'Adiabatic', 'Isobaric', 'They are the same'],
            correctAnswer: 1,
            explanation: 'Adiabatic curves are steeper because $PV^\\\\gamma$ falls faster than $PV$ (isothermal).'
          },
          {
            question: 'An ideal gas at constant pressure absorbs 1000 J. It does 400 J of work. $\\\\Delta U = ?$',
            options: ['1400 J', '600 J', '400 J', '1000 J'],
            correctAnswer: 1,
            explanation: '$\\\\Delta U = Q - W = 1000 - 400 = 600$ J.'
          },
          {
            question: 'The entropy of a system can decrease if:',
            options: ['The system is isolated', 'Heat flows out of the system', 'The universe’s entropy decreases', 'It never decreases'],
            correctAnswer: 1,
            explanation: 'System entropy can decrease (e.g., cooling), but surroundings entropy must increase more.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

2 moles of monatomic ideal gas at 300 K.

**1)** Internal energy? (in joules, $R = 8.314$)

**2)** After isochoric heating to 600 K, $\\\\Delta U = ?$ (in joules)

**3)** Heat added during this isochoric process? (in joules)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7483', '7483', '7483'],
        hint1: '$U = \\\\frac{3}{2}nRT$',
        hint2: '$\\\\Delta U = \\\\frac{3}{2}nR\\\\Delta T$',
        hint3: 'Isochoric: $W = 0$, so $Q = \\\\Delta U$',
        explanation: '1) $\\\\frac{3}{2}(2)(8.314)(300) = 7482.6 \\\\approx 7483$ J. 2) $\\\\frac{3}{2}(2)(8.314)(300) = 7483$ J. 3) Isochoric: $W = 0$, $Q = \\\\Delta U = 7483$ J.'
      }
    }
  ]
};
