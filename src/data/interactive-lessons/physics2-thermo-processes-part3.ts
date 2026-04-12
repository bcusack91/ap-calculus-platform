export const physics2ThermoProcPart3Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p3-intro',
      type: 'text' as const,
      content: `# ⚙️ Heat Engines & Efficiency

**Part 3 of 7 — Engines and Refrigerators**

---

### Heat Engine

A heat engine converts thermal energy to mechanical work by operating in a cycle.

$$W_{net} = Q_H - Q_C$$

### Efficiency

$$e = \\\\frac{W_{net}}{Q_H} = 1 - \\\\frac{Q_C}{Q_H}$$

### Carnot Efficiency (Maximum Possible)

$$e_{Carnot} = 1 - \\\\frac{T_C}{T_H}$$

> ⚠️ Temperatures MUST be in Kelvin!

---

### Refrigerators & Heat Pumps

A refrigerator runs the engine cycle in reverse, using work to move heat from cold to hot.

**Coefficient of Performance:**
$$COP = \\\\frac{Q_C}{W} = \\\\frac{Q_C}{Q_H - Q_C}$$`
    },    {
      id: 'thermodynamicprocesses-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A heat engine takes in 1000 J from the hot reservoir and exhausts 600 J. Its efficiency is:',
            options: ['60%', '40%', '166%', '37.5%'],
            correctAnswer: 1,
            explanation: '$e = 1 - Q_C/Q_H = 1 - 600/1000 = 0.40 = 40\\\\%$.'
          },
          {
            question: 'The maximum efficiency of an engine operating between 600 K and 300 K is:',
            options: ['100%', '50%', '25%', '75%'],
            correctAnswer: 1,
            explanation: '$e_{Carnot} = 1 - 300/600 = 0.50 = 50\\\\%$.'
          },
          {
            question: 'Why can no real engine achieve Carnot efficiency?',
            options: ['It requires reversible processes with no friction or dissipation', 'Carnot was wrong', 'Only applies to steam engines', 'Temperature must be in Celsius'],
            correctAnswer: 0,
            explanation: 'Carnot efficiency requires perfectly reversible processes — impossible in practice.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p3-input',
      type: 'input-boxes' as const,
      content: `
**Engine Calculations** 🧮

A Carnot engine operates between $T_H = 500$ K and $T_C = 300$ K, absorbing $Q_H = 2000$ J per cycle.

**1)** Carnot efficiency? (as a decimal)

**2)** Work done per cycle? (in joules)

**3)** Heat rejected per cycle? (in joules)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.40', '800', '1200'],
        hint1: '$e = 1 - T_C/T_H$',
        hint2: '$W = eQ_H$',
        hint3: '$Q_C = Q_H - W$',
        explanation: '1) $1 - 300/500 = 0.40$. 2) $0.40 \\\\times 2000 = 800$ J. 3) $2000 - 800 = 1200$ J.'
      }
    }
  ]
};
