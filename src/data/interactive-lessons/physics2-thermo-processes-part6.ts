export const physics2ThermoProcPart6Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Thermodynamics Problem Strategy

1. **Identify** the process type (isobaric, isochoric, isothermal, adiabatic)
2. **Apply** the First Law: $\\\\Delta U = Q - W$
3. **Calculate** work from PV diagrams (area under curve)
4. **Use** Carnot efficiency for engine problems
5. **Check** signs: expanding gas does positive work`
    },    {
      id: 'thermodynamicprocesses-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A gas expands adiabatically. $Q = ?$, $\\\\Delta U = ?$',
            options: ['$Q > 0$, $\\\\Delta U > 0$', '$Q = 0$, $\\\\Delta U < 0$', '$Q = 0$, $\\\\Delta U > 0$', '$Q < 0$, $\\\\Delta U = 0$'],
            correctAnswer: 1,
            explanation: 'Adiabatic: $Q = 0$. Expansion: $W > 0$, so $\\\\Delta U = -W < 0$.'
          },
          {
            question: 'A Carnot refrigerator uses 200 J of work to remove 600 J from cold reservoir. $Q_H = ?$',
            options: ['400 J', '600 J', '800 J', '1200 J'],
            correctAnswer: 2,
            explanation: '$Q_H = Q_C + W = 600 + 200 = 800$ J.'
          },
          {
            question: 'In a complete thermodynamic cycle, $\\\\Delta U = ?$',
            options: ['$Q_H$', '$Q_C$', '$W_{net}$', '0'],
            correctAnswer: 3,
            explanation: 'After a complete cycle, the system returns to its initial state, so $\\\\Delta U = 0$.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p6-input',
      type: 'input-boxes' as const,
      content: `
**Cycle Analysis** 🧮

A heat engine cycle: $Q_H = 5000$ J, $e = 0.30$.

**1)** Work output per cycle?

**2)** Heat rejected per cycle?

**3)** If this engine runs at 10 cycles/second, what is its power output? (in watts)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1500', '3500', '15000'],
        hint1: '$W = eQ_H$',
        hint2: '$Q_C = Q_H - W$',
        hint3: 'Power = Work × frequency',
        explanation: '1) $0.30 \\\\times 5000 = 1500$ J. 2) $5000 - 1500 = 3500$ J. 3) $1500 \\\\times 10 = 15000$ W = 15 kW.'
      }
    }
  ]
};
