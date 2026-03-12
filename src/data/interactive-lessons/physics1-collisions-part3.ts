export const physics1CollisionsPart3Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co3-intro',
      type: 'text' as const,
      content: `
# 🔄 Inelastic Collisions — Between the Extremes

**Part 3 of 7 — Collisions**

Most real-world collisions are neither perfectly elastic nor perfectly inelastic — they\'re somewhere in between. In a general **inelastic collision**, momentum is conserved but kinetic energy is NOT conserved. The objects separate after collision but with less total KE than before.
      `
    },
    {
      id: 'co3-spectrum',
      type: 'text' as const,
      content: `
## The Collision Spectrum

| Collision Type | Momentum | KE | Objects After | KE Lost |
|---------------|----------|-----|---------------|---------|
| **Perfectly elastic** | Conserved | Conserved | Separate | 0% |
| **Inelastic** | Conserved | Partially lost | Separate | Some % |
| **Perfectly inelastic** | Conserved | Maximum loss | Stick together | Maximum % |

### The Key Insight

**Momentum is ALWAYS conserved** (if no net external force), regardless of collision type. The distinction between collision types is about **kinetic energy**.

### Coefficient of Restitution

The **coefficient of restitution** ($e$) quantifies how "bouncy" a collision is:

$$e = \\frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|} = \\frac{\\text{relative speed after}}{\\text{relative speed before}}$$

| Value of $e$ | Collision Type |
|--------------|---------------|
| $e = 1$ | Perfectly elastic |
| $0 < e < 1$ | Inelastic |
| $e = 0$ | Perfectly inelastic |
      `
    },
    {
      id: 'co3-energy-analysis',
      type: 'text' as const,
      content: `
## Where Does the Lost Energy Go?

In inelastic collisions, the "lost" kinetic energy is converted to other forms:

| Energy Destination | Example |
|-------------------|---------|
| **Thermal energy (heat)** | Metal deformation, friction |
| **Sound energy** | The "crack" or "boom" of impact |
| **Deformation energy** | Dents, crumples, permanent shape change |
| **Internal energy** | Molecular vibrations |

### Total Energy Conservation

$$KE_i = KE_f + \\Delta E_{\\text{thermal}} + E_{\\text{sound}} + E_{\\text{deformation}} + \\cdots$$

**Total energy is always conserved** — it\'s only the kinetic energy portion that decreases.

### Determining Collision Type from Data

Given initial and final velocities for both objects, calculate:
1. $KE_i = \\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2$
2. $KE_f = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$
3. If $KE_f = KE_i$ → elastic. If $KE_f < KE_i$ → inelastic.
      `
    },
    {
      id: 'co3-example',
      type: 'text' as const,
      content: `
## Example: Is This Collision Elastic?

A 3 kg ball at +8 m/s hits a 1 kg ball at rest. After: Ball 1 moves at +2 m/s, Ball 2 at +18 m/s.

**Check momentum:**
- Before: $(3)(8) + (1)(0) = 24$ kg·m/s
- After: $(3)(2) + (1)(18) = 6 + 18 = 24$ kg·m/s ✅

**Check KE:**
- Before: $\\frac{1}{2}(3)(64) + 0 = 96$ J
- After: $\\frac{1}{2}(3)(4) + \\frac{1}{2}(1)(324) = 6 + 162 = 168$ J ❌

Wait — $KE_f > KE_i$? That violates conservation of energy! This collision is **impossible**. The problem data must be wrong.

### Lesson

Always verify that:
1. Momentum is conserved ✅
2. $KE_f \\leq KE_i$ ✅
3. Both must be true for physically possible results
      `
    },
    {
      id: 'co3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Inelastic Collisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an inelastic collision, which is conserved?',
            options: [
              'Kinetic energy only',
              'Momentum only',
              'Both momentum and kinetic energy',
              'Neither momentum nor kinetic energy'
            ],
            correctAnswer: 1,
            explanation: 'In an inelastic collision, momentum is conserved but kinetic energy is NOT. Some KE is converted to heat, sound, and deformation.'
          },
          {
            question: 'The coefficient of restitution $e$ for a ball that bounces to 75% of its drop height is closest to:',
            options: [
              '0.75',
              '0.87',
              '0.50',
              '0.25'
            ],
            correctAnswer: 1,
            explanation: 'The speed ratio is $\\sqrt{h_f/h_i} = \\sqrt{0.75} \\approx 0.866$. Since $e$ = relative speed after / relative speed before, $e \\approx 0.87$.'
          },
          {
            question: 'A collision is found where $KE_f > KE_i$. This collision is:',
            options: [
              'Superelastic (possible with internal energy release)',
              'Impossible under any circumstances',
              'Perfectly elastic',
              'Perfectly inelastic'
            ],
            correctAnswer: 0,
            explanation: 'A collision where $KE_f > KE_i$ is called **superelastic**. It is possible if internal stored energy (chemical, nuclear) is released during the collision. However, these are not standard in AP Physics 1.'
          }
        ]
      }
    },
    {
      id: 'co3-calculations',
      type: 'input-boxes' as const,
      content: `
**Collision Analysis** 🧮

A 4 kg ball at +5 m/s hits a 2 kg ball at rest. After collision, the 4 kg ball moves at +3 m/s.

1) What is the velocity of the 2 kg ball after collision? (in m/s)

2) What is the total $KE$ before the collision? (in J)

3) What is the total $KE$ after the collision? (in J)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '50', '34'],
        hint1: '$(4)(5) + (2)(0) = (4)(3) + (2)(v_2)$. $20 = 12 + 2v_2$.',
        hint2: '$KE_i = \\frac{1}{2}(4)(25) + 0$',
        hint3: '$KE_f = \\frac{1}{2}(4)(9) + \\frac{1}{2}(2)(16)$',
        explanation: '1) $v_2 = (20-12)/2 = 4$ m/s. 2) $KE_i = 50 + 0 = 50$ J. 3) $KE_f = 18 + 16 = 34$ J. Since $KE_f < KE_i$, this is an inelastic collision with 16 J lost.'
      }
    },
    {
      id: 'co3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Collision Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When KE is lost but the objects separate, the collision is:',
            options: ['elastic', 'inelastic', 'perfectly inelastic', 'impossible'],
            correctIndex: 1,
            explanation: 'When $KE_f < KE_i$ but the objects separate (don\'t stick together), the collision is inelastic — between elastic and perfectly inelastic.'
          },
          {
            label: 'The "missing" kinetic energy in an inelastic collision is:',
            options: ['created from nothing', 'converted from KE to thermal/sound/deformation', 'transferred to another dimension', 'stored as momentum'],
            correctIndex: 1,
            explanation: 'The "lost" kinetic energy is converted to thermal energy, sound, and permanent deformation. Total energy is always conserved.'
          },
          {
            label: 'The coefficient of restitution for a general inelastic collision is:',
            options: ['0', 'between 0 and 1', '1', 'greater than 1'],
            correctIndex: 1,
            explanation: 'A general inelastic collision has $0 < e < 1$. The value $e = 0$ is perfectly inelastic, and $e = 1$ is perfectly elastic.'
          }
        ]
      }
    },
    {
      id: 'co3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Inelastic Collisions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg ball at 6 m/s collides with a 5 kg ball at rest. After collision, the first ball moves at 2 m/s. What percentage of KE is lost?',
            options: [
              '0% (elastic)',
              '22.2%',
              '44.4%',
              '72.2%'
            ],
            correctAnswer: 2,
            explanation: 'Momentum: $(5)(6) = (5)(2) + (5)(v_2)$. $v_2 = 4$ m/s. $KE_i = \\frac{1}{2}(5)(36) = 90$ J. $KE_f = \\frac{1}{2}(5)(4) + \\frac{1}{2}(5)(16) = 10 + 40 = 50$ J. Lost = $90 - 50 = 40$ J. Fraction = $40/90 = 44.4\\%$.'
          },
          {
            question: 'Rank the collision types by kinetic energy lost (most to least): elastic (E), inelastic (I), perfectly inelastic (PI).',
            options: [
              'E > I > PI',
              'PI > I > E',
              'I > PI > E',
              'They all lose the same KE'
            ],
            correctAnswer: 1,
            explanation: 'Perfectly inelastic collisions lose the most KE (objects stick together). Inelastic collisions lose some KE. Elastic collisions lose NO KE. So PI > I > E in terms of energy lost.'
          }
        ]
      }
    }
  ]
}
