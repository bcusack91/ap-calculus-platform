export const physics1ElasticPotentialEnergyPart6Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Elastic Potential Energy**

This workshop brings together Hooke\'s Law, elastic PE, work by springs, and spring-mass energy concepts. These multi-step problems mirror AP exam difficulty.
      `
    },
    {
      id: 'ep6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving with Springs

### Energy Conservation with Springs

$$KE_i + PE_{g,i} + PE_{s,i} = KE_f + PE_{g,f} + PE_{s,f} + E_{\\text{thermal}}$$

$$\\frac{1}{2}mv_i^2 + mgh_i + \\frac{1}{2}kx_i^2 = \\frac{1}{2}mv_f^2 + mgh_f + \\frac{1}{2}kx_f^2 + |W_f|$$

### Common Problem Types

1. **Spring launcher**: Spring PE → KE ($\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$)
2. **Object compressing spring**: KE → Spring PE ($\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2$)
3. **Vertical spring drop**: Gravitational PE → Spring PE ($mgh = \\frac{1}{2}kx^2$)
4. **Spring on incline**: Mix of all three energy forms
      `
    },
    {
      id: 'ep6-worked-example',
      type: 'text' as const,
      content: `
## Worked Example: Spring Launcher on a Ramp

A spring ($k = 500$ N/m) compressed by 0.2 m launches a 0.5 kg ball up a frictionless $30°$ ramp. How far up the ramp does the ball travel?

**Energy equation** (reference: spring position):

$$\\frac{1}{2}kx^2 = mgh = mgd\\sin(30°)$$

$$\\frac{1}{2}(500)(0.04) = 0.5(10)(d)(0.5)$$

$$10 = 2.5d$$

$$d = 4 \\text{ m up the ramp}$$

**Height gained**: $h = 4\\sin(30°) = 2$ m

**Check**: $PE_{s,i} = 10$ J. $PE_{g,f} = 0.5(10)(2) = 10$ J. ✓
      `
    },
    {
      id: 'ep6-workshop-quiz',
      type: 'multiple-choice' as const,
      content: `
**Workshop Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg block slides at 3 m/s into a spring ($k = 200$ N/m) on a frictionless surface. The maximum compression of the spring is:',
            options: [
              '0.1 m',
              '0.15 m',
              '0.2 m',
              '0.3 m'
            ],
            correctAnswer: 3,
            explanation: '$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2$. $\\frac{1}{2}(2)(9) = \\frac{1}{2}(200)x^2$. $9 = 100x^2$. $x^2 = 0.09$. $x = 0.3$ m.'
          },
          {
            question: 'A spring ($k = 800$ N/m) compressed by 0.1 m launches a 0.4 kg ball vertically. The ball rises to a maximum height of ($g = 10$ m/s²):',
            options: [
              '0.5 m',
              '1.0 m',
              '2.0 m',
              '4.0 m'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}kx^2 = mgh$. $\\frac{1}{2}(800)(0.01) = 0.4(10)h$. $4 = 4h$. $h = 1.0$ m.'
          },
          {
            question: 'A 1 kg block is dropped from 2 m above a vertical spring ($k = 1000$ N/m). The maximum compression of the spring is closest to:',
            options: [
              '0.1 m',
              '0.15 m',
              '0.2 m',
              '0.25 m'
            ],
            correctAnswer: 2,
            explanation: '$mg(h + x) = \\frac{1}{2}kx^2$. $10(2 + x) = 500x^2$. $500x^2 - 10x - 20 = 0$. $x = [10 + \\sqrt{100 + 40000}]/1000 = [10 + \\sqrt{40100}]/1000 \\approx [10 + 200.2]/1000 \\approx 0.21$ m. Closest to 0.2 m.'
          }
        ]
      }
    },
    {
      id: 'ep6-calculations',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

Use $g = 10$ m/s².

1) A spring ($k = 480$ N/m) compressed by 0.05 m launches a 0.3 kg ball on a frictionless horizontal surface. What is the ball\'s speed (in m/s)?

2) A 4 kg block moving at 5 m/s on a frictionless surface hits a spring ($k = 2500$ N/m). What is the maximum compression (in m)?

3) A spring ($k = 500$ N/m, compressed 0.2 m) launches a 1 kg block across a rough surface ($\\mu_k = 0.25$). How far does the block slide before stopping (in m)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0.2', '4', '0.20'],
        hint1: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. $v = x\\sqrt{k/m}$.',
        hint2: '$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2$. $x = v\\sqrt{m/k}$.',
        hint3: '$\\frac{1}{2}kx^2 = \\mu_k mg d$. Solve for $d$.',
        explanation: '1) $PE_s = \\frac{1}{2}(1200)(0.0025) = 1.5$ J. $1.5 = \\frac{1}{2}(0.3)v^2 \\Rightarrow v^2 = 10 \\Rightarrow v \\approx 3.16$ m/s. (Rounding: accept $\\approx 3.2$.) Actually, adjusting the problem: with $k = 480$ N/m: $PE_s = \\frac{1}{2}(480)(0.0025) = 0.6$ J. $0.6 = \\frac{1}{2}(0.3)v^2 \\Rightarrow v^2 = 4 \\Rightarrow v = 2$ m/s. 2) $x = 5\\sqrt{4/2500} = 5(0.04) = 0.2$ m. 3) $d = 500(0.04)/(2 \\times 0.25 \\times 1 \\times 10) = 20/5 = 4$ m.'
      }
    },
    {
      id: 'ep6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Problem Type Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball launched by a spring on a horizontal surface: the energy conversion is:',
            options: ['KE → PE_s', 'PE_s → KE', 'PE_g → KE', 'KE → PE_g'],
            correctIndex: 1,
            explanation: 'The spring releases its stored energy, converting $PE_s$ to $KE$ of the ball.'
          },
          {
            label: 'A ball sliding into and compressing a spring: the energy conversion is:',
            options: ['PE_s → KE', 'KE → PE_s', 'KE → PE_g', 'PE_g → PE_s'],
            correctIndex: 1,
            explanation: 'The ball\'s KE is stored as spring PE as the spring compresses.'
          },
          {
            label: 'A ball dropped onto a vertical spring: the energy conversion is:',
            options: ['PE_g → KE only', 'PE_g → PE_s', 'PE_s → PE_g', 'KE → PE_g'],
            correctIndex: 1,
            explanation: 'At maximum compression, all gravitational PE has converted to spring PE (KE = 0 at that instant).'
          },
          {
            label: 'A spring launches a ball against friction. Some energy becomes:',
            options: ['PE_g', 'More PE_s', 'Thermal energy', 'Sound only'],
            correctIndex: 2,
            explanation: 'Friction converts mechanical energy to thermal energy: $PE_s \\to KE \\to E_{\\text{thermal}}$.'
          }
        ]
      }
    },
    {
      id: 'ep6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Spring Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.5 kg block is launched by a spring ($k = 200$ N/m, compressed 0.2 m) up a frictionless $30°$ incline. How far along the incline does it travel ($g = 10$ m/s²)?',
            options: [
              '0.8 m',
              '1.6 m',
              '2.4 m',
              '3.2 m'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}kx^2 = mgd\\sin(30°)$. $\\frac{1}{2}(200)(0.04) = 0.5(10)(d)(0.5)$. $4 = 2.5d$. $d = 1.6$ m.'
          },
          {
            question: 'Two springs: Spring A ($k = 100$ N/m, compressed 0.2 m) and Spring B ($k = 400$ N/m, compressed 0.1 m) each launch identical 0.5 kg balls. Which ball goes faster?',
            options: [
              'Ball A (more compression)',
              'Ball B (stiffer spring)',
              'Same speed (equal PE stored)',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$PE_A = \\frac{1}{2}(100)(0.04) = 2$ J. $PE_B = \\frac{1}{2}(400)(0.01) = 2$ J. Equal PE → equal KE → same speed!'
          }
        ]
      }
    }
  ]
}
