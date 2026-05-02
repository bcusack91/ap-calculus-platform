export const physics1FluidsDensityPressurePart4Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp4-intro',
      type: 'text' as const,
      content: `
# 📊 Absolute vs Gauge Pressure

**Part 4 of 7 — Fluids: Density & Pressure**

A tire reads "32 psi" but the absolute pressure inside is closer to 47 psi. The difference is whether you include atmospheric pressure. AP problems mix these freely — knowing which to use is critical.

**In this lesson you will learn:**
- The definitions of gauge and absolute pressure
- $P_{abs} = P_{atm} + P_{gauge}$
- When AP gives you each
- Common pitfalls (negative gauge ≠ vacuum)
      `
    },
    {
      id: 'fdp4-definitions',
      type: 'text' as const,
      content: `
## The Two Pressures

### Absolute Pressure
Total pressure measured from a perfect vacuum (zero).

$$P_{abs} = P_{atm} + \\rho g h$$

Open container at depth $h$: includes the weight of fluid AND the atmospheric column above.

### Gauge Pressure
Pressure relative to the surrounding atmosphere.

$$P_{gauge} = P_{abs} - P_{atm}$$

A tire gauge reads zero when tire pressure equals atmospheric pressure (a flat tire).

### Quick Comparison Table

| Scenario | Gauge | Absolute |
|----------|-------|----------|
| Open atmosphere | 0 | $P_{atm}$ ≈ 101 kPa |
| Tire at "32 psi" | 220 kPa | 321 kPa |
| 10 m below water | 98 kPa | 199 kPa |
| Perfect vacuum | $-101$ kPa | 0 |

### When to Use Which

- **Pressure differences** → either works (the $P_{atm}$ cancels)
- **Force on a submerged surface** with one side exposed to atmosphere → use **gauge** (atm cancels)
- **Force on a fully submerged closed object** → atmospheric forces cancel anyway → either works
- **Closed container with no atmosphere on the other side** → use **absolute**
      `
    },
    {
      id: 'fdp4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gauge vs Absolute** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Gauge pressure equals zero when:',
            options: [
              'There is no air at all',
              'Pressure equals atmospheric pressure',
              'Pressure is half of atmospheric',
              'Pressure is exactly one bar above atmospheric'
            ],
            correctAnswer: 1,
            explanation: 'Gauge pressure is the difference from atmospheric. When $P_{abs} = P_{atm}$, gauge = 0.'
          },
          {
            question: 'A tire reads "30 psi gauge." Its absolute pressure is approximately:',
            options: [
              '30 psi (same)',
              '15 psi (half)',
              '45 psi (gauge + 1 atm)',
              '60 psi (double)'
            ],
            correctAnswer: 2,
            explanation: '$P_{abs} = P_{atm} + P_{gauge}$. With $P_{atm}$ ≈ 14.7 psi, $P_{abs} \\approx 30 + 15 = 45$ psi.'
          },
          {
            question: 'If a problem asks for the NET force atmospheric pressure exerts on an open beaker\'s sides, the answer is:',
            options: [
              'Very large (atmospheric weight)',
              'Half of atmospheric',
              'Zero (atmospheric force on outside cancels on inside)',
              'Equal to the fluid weight'
            ],
            correctAnswer: 2,
            explanation: 'Atmospheric pressure pushes equally on both sides of any open container wall — net = 0. Use gauge in such problems.'
          }
        ]
      }
    },
    {
      id: 'fdp4-calculations',
      type: 'input-boxes' as const,
      content: `
**Gauge ↔ Absolute** 🧮 (use $P_{atm} = 1.0\\times10^{5}$ Pa, $g = 10$, $\\rho_{water} = 1000$)

1) An open pool is 5 m deep. Absolute pressure at the bottom (Pa)?

2) Same pool — what is the GAUGE pressure at the bottom (Pa)?

3) A vacuum chamber is at $1.0\\times10^{4}$ Pa absolute. Its gauge pressure (Pa) is — give the signed answer.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['150000', '50000', '-90000'],
        hint1: '$P_{abs} = P_{atm} + \\rho g h$.',
        hint2: 'Just $\\rho g h$ — atmospheric NOT included.',
        hint3: '$P_{gauge} = P_{abs} - P_{atm}$. Sign matters.',
        explanation: '1) $P_{abs} = 10^{5} + 1000(10)(5) = 1.5\\times10^{5}$ Pa. 2) $P_{gauge} = 1000(10)(5) = 50{,}000$ Pa. 3) $P_{gauge} = 10^{4} - 10^{5} = -90{,}000$ Pa (below atmospheric).'
      }
    },
    {
      id: 'fdp4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choosing Wisely** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A diver 30 m below sea surface — the absolute pressure (g = 10, ρ ≈ 1000, $P_{atm} = 10^{5}$) is:',
            options: ['1 atm', '~3 atm', '~4 atm', '~5 atm'],
            correctIndex: 2,
            explanation: '$P_{abs} = 10^{5} + 1000(10)(30) = 4\\times10^{5}$ Pa = 4 atm.'
          },
          {
            label: 'For a fully submerged closed scuba tank, atmospheric pressure on the outside:',
            options: ['Adds to fluid pressure significantly', 'Is replaced by water pressure entirely', 'Acts the same on all sides — cancels in net force', 'Does not exist underwater'],
            correctIndex: 2,
            explanation: 'Pressure differences (not absolute) determine net force. The atmospheric component is uniform → cancels.'
          },
          {
            label: 'A "negative gauge pressure" means:',
            options: ['Negative force', 'Pressure below atmospheric', 'Vacuum (zero absolute)', 'A measurement error'],
            correctIndex: 1,
            explanation: 'Gauge can be negative when $P_{abs} < P_{atm}$ (e.g., suction cup, drinking straw).'
          },
          {
            label: 'Which is greater for a diver at any depth in an open ocean?',
            options: ['Gauge pressure', 'Absolute pressure', 'They are equal', 'Depends on temperature'],
            correctIndex: 1,
            explanation: '$P_{abs} = P_{atm} + P_{gauge}$. As long as the surface is exposed to air, absolute > gauge by ~1 atm.'
          }
        ]
      }
    },
    {
      id: 'fdp4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gauge vs Absolute** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A submarine at 500 m depth in seawater (ρ = 1030, g = 10, $P_{atm} = 10^{5}$). Absolute pressure on the hull is approximately:',
            options: [
              '~5 atm',
              '~50 atm',
              '~500 atm',
              '~5000 atm'
            ],
            correctAnswer: 1,
            explanation: '$P = 10^{5} + 1030(10)(500) = 5.25\\times10^{6}$ Pa ≈ 52 atm.'
          },
          {
            question: 'A drinking straw — when you sip, your mouth creates:',
            options: [
              'Positive gauge pressure inside the straw',
              'Negative gauge pressure inside the straw, allowing atmospheric pressure to push liquid up',
              'Suction force unrelated to pressure',
              'Zero pressure (a vacuum)'
            ],
            correctAnswer: 1,
            explanation: 'Reducing $P$ above the liquid in the straw creates negative gauge pressure. Atmospheric pressure on the cup pushes liquid up to equalize.'
          }
        ]
      }
    }
  ]
}
