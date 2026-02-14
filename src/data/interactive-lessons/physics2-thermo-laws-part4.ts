export const physics2ThermoLawsPart4Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl4-intro',
      type: 'text' as const,
      content: `
# 🏭 Heat Engines & Efficiency

**Part 4 of 7 — Turning Heat into Work**

A heat engine absorbs heat from a hot reservoir, converts some of it to useful work, and dumps the rest into a cold reservoir. No engine can convert ALL heat to work — this is one of the most profound results in physics.
      `
    },
    {
      id: 'tl4-heat-engine',
      type: 'text' as const,
      content: `
## How a Heat Engine Works

Every heat engine operates between two thermal reservoirs:

1. **Hot reservoir** (temperature $T_H$): supplies heat $Q_H$ to the engine
2. **Cold reservoir** (temperature $T_C$): receives waste heat $Q_C$ from the engine
3. **Net work output**: $W_{\\text{net}} = Q_H - Q_C$

### Energy Conservation (First Law for a Cycle)

Since $\\Delta U = 0$ for a complete cycle:

$$Q_H = W_{\\text{net}} + Q_C$$

### Efficiency

The **thermal efficiency** measures what fraction of input heat becomes useful work:

$$e = \\frac{W_{\\text{net}}}{Q_H} = \\frac{Q_H - Q_C}{Q_H} = 1 - \\frac{Q_C}{Q_H}$$

Efficiency is always between 0 and 1 (or 0% and 100%).

Since $Q_C > 0$ (you must dump some waste heat), efficiency is **always less than 100%**.
      `
    },
    {
      id: 'tl4-carnot',
      type: 'text' as const,
      content: `
## The Carnot Engine

The **Carnot engine** is a theoretical engine that achieves the **maximum possible efficiency** between two given temperatures. It consists of two isothermal and two adiabatic processes.

### Carnot Efficiency

$$e_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}$$

where temperatures **must be in Kelvin**.

### Key Facts About Carnot Efficiency

- No real engine can exceed Carnot efficiency
- $e_{\\text{Carnot}}$ increases when $T_H$ increases or $T_C$ decreases
- $e_{\\text{Carnot}} = 1$ (100%) only if $T_C = 0$ K — impossible to reach!
- Real engines have friction, turbulence, and other irreversibilities, so $e_{\\text{real}} < e_{\\text{Carnot}}$

### Why 100% Efficiency is Impossible

The Second Law (coming in Part 5) forbids converting heat entirely into work in a cyclic process. There must always be waste heat $Q_C > 0$. This is a fundamental limit of nature, not an engineering limitation.
      `
    },
    {
      id: 'tl4-efficiency-quiz',
      type: 'multiple-choice' as const,
      content: `
**Efficiency Concepts** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A heat engine absorbs 800 J from the hot reservoir and exhausts 500 J to the cold reservoir. Its efficiency is:',
            options: [
              '62.5%',
              '37.5%',
              '160%',
              '50%'
            ],
            correctAnswer: 1,
            explanation: '$e = 1 - Q_C/Q_H = 1 - 500/800 = 1 - 0.625 = 0.375 = 37.5\\%$. Or: $W = Q_H - Q_C = 300$ J, $e = W/Q_H = 300/800 = 37.5\\%$.'
          },
          {
            question: 'Which change would most increase the Carnot efficiency of an engine?',
            options: [
              'Increase $T_C$ from 300 K to 400 K',
              'Decrease $T_H$ from 600 K to 500 K',
              'Increase $T_H$ from 600 K to 800 K',
              'Increase both $T_H$ and $T_C$ by 100 K'
            ],
            correctAnswer: 2,
            explanation: 'Carnot efficiency $= 1 - T_C/T_H$. To maximize this, increase $T_H$ or decrease $T_C$. Raising $T_H$ from 600 to 800 K (with $T_C = 300$ K) gives $e = 1 - 300/800 = 62.5\\%$ vs. the original $1 - 300/600 = 50\\%$.'
          }
        ]
      }
    },
    {
      id: 'tl4-carnot-quiz',
      type: 'multiple-choice' as const,
      content: `
**Carnot Limit** ⚠️
      `,
      exercise: {
        questions: [
          {
            question: 'An inventor claims their engine operates between 400 K and 300 K with an efficiency of 30%. Is this possible?',
            options: [
              'Yes — 30% is achievable',
              'No — it exceeds the Carnot limit of 25%',
              'No — the Carnot limit is 20%',
              'Yes — any efficiency under 100% is possible'
            ],
            correctAnswer: 1,
            explanation: '$e_{\\text{Carnot}} = 1 - T_C/T_H = 1 - 300/400 = 0.25 = 25\\%$. The claimed 30% exceeds this maximum. No real engine can beat the Carnot efficiency, so the claim is impossible.'
          },
          {
            question: 'To achieve 100% Carnot efficiency, you would need:',
            options: [
              '$T_H = \\infty$ or $T_C = 0$ K',
              '$T_H = T_C$',
              '$T_H = 2T_C$',
              'A perfectly frictionless engine'
            ],
            correctAnswer: 0,
            explanation: '$e = 1 - T_C/T_H = 1$ requires $T_C/T_H = 0$, meaning $T_C = 0$ K or $T_H = \\infty$. Neither is achievable, so 100% efficiency is impossible.'
          }
        ]
      }
    },
    {
      id: 'tl4-efficiency-drill',
      type: 'input-boxes' as const,
      content: `
**Efficiency Calculation Drill** 🔧

1) A heat engine absorbs $Q_H = 2000$ J and does $W = 600$ J of work. What is the efficiency (in %)?

2) What is the Carnot efficiency of an engine operating between $T_H = 500$ K and $T_C = 200$ K (in %)?

3) A Carnot engine operates between 800 K and 200 K. If it absorbs 1000 J per cycle, how much work does it produce (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '60', '750'],
        hint1: '$e = W/Q_H = 600/2000 = 0.30 = 30\\%$.',
        hint2: '$e_{\\text{Carnot}} = 1 - T_C/T_H = 1 - 200/500 = 0.60 = 60\\%$.',
        hint3: '$e = 1 - 200/800 = 0.75$. $W = e \\times Q_H = 0.75 \\times 1000 = 750$ J.',
        explanation: 'Efficiency $= W/Q_H$ for any engine. For Carnot, $e = 1 - T_C/T_H$ (temperatures in Kelvin). Work output $= e \\times Q_H$.'
      }
    }
  ]
}
