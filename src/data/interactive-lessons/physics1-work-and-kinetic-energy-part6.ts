export const physics1WorkAndKineticEnergyPart6Data = {
  topicSlug: 'work-and-kinetic-energy',
  sections: [
    {
      id: 'wk6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Work and Kinetic Energy**

This lesson is a hands-on workshop where we\'ll work through challenging work and energy problems step by step. These problems combine multiple concepts: work by various forces, the Work-Energy Theorem, and power.
      `
    },
    {
      id: 'wk6-strategy-review',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy Review

### When to Use Work-Energy vs. Newton\'s Laws

| Use Work-Energy When... | Use Newton\'s Laws When... |
|------------------------|--------------------------|
| You need final speed from forces and distance | You need acceleration |
| You want to avoid finding acceleration | You need time information |
| Forces act over a displacement | Forces act over a time interval |
| Problem involves multiple forces at different angles | Free-body diagrams suffice |

### Master Formula

$$W_{\\text{net}} = \\Delta KE$$

$$\\sum F_i d_i \\cos\\theta_i = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$

### Common Pitfalls
- Forgetting that $\\cos(180°) = -1$ for opposing forces
- Using the wrong angle (the angle is between **force** and **displacement**)
- Confusing force magnitude with weight
- Not including ALL forces when computing net work
      `
    },
    {
      id: 'wk6-problem1',
      type: 'text' as const,
      content: `
## Worked Example 1: Pulling at an Angle

A 12 kg box, initially at rest, is pulled 6 m across a rough horizontal floor by a rope at $37°$ above horizontal with tension $T = 100$ N. The coefficient of kinetic friction is $\\mu_k = 0.25$ ($g = 10$ m/s²).

**Step 1:** Normal force
$$N = mg - T\\sin(37°) = 120 - 100(0.6) = 120 - 60 = 60 \\text{ N}$$

**Step 2:** Friction
$$f_k = \\mu_k N = 0.25 \\times 60 = 15 \\text{ N}$$

**Step 3:** Work by each force
- $W_T = 100(6)\\cos(37°) = 600(0.8) = 480$ J
- $W_f = -15(6) = -90$ J
- $W_g = 0$ J, $W_N = 0$ J

**Step 4:** Final speed
$$W_{\\text{net}} = 480 - 90 = 390 \\text{ J}$$
$$390 = \\frac{1}{2}(12)v_f^2 \\Rightarrow v_f = \\sqrt{\\frac{780}{12}} = \\sqrt{65} \\approx 8.1 \\text{ m/s}$$
      `
    },
    {
      id: 'wk6-problem-quiz',
      type: 'multiple-choice' as const,
      content: `
**Workshop Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg block starts at rest and slides 4 m down a frictionless $30°$ incline. Its speed at the bottom is ($g = 10$ m/s²):',
            options: [
              '$\\sqrt{20}$ m/s ≈ 4.5 m/s',
              '$\\sqrt{40}$ m/s ≈ 6.3 m/s',
              '$\\sqrt{80}$ m/s ≈ 8.9 m/s',
              '$\\sqrt{200}$ m/s ≈ 14.1 m/s'
            ],
            correctAnswer: 1,
            explanation: '$W_g = mgd\\sin(30°) = 5(10)(4)(0.5) = 100$ J. $100 = \\frac{1}{2}(5)v^2 \\Rightarrow v^2 = 40 \\Rightarrow v = \\sqrt{40} \\approx 6.3$ m/s.'
          },
          {
            question: 'A 1200 kg car brakes from 30 m/s to 10 m/s over 50 m. The average braking force magnitude is:',
            options: [
              '4800 N',
              '6400 N',
              '9600 N',
              '12800 N'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta KE = \\frac{1}{2}(1200)(100) - \\frac{1}{2}(1200)(900) = 60{,}000 - 540{,}000 = -480{,}000$ J. $W = -Fd \\Rightarrow -F(50) = -480{,}000 \\Rightarrow F = 9600$ N.'
          },
          {
            question: 'A 2 kg ball is thrown straight up at 15 m/s. Using work-energy, the maximum height is ($g = 10$ m/s²):',
            options: [
              '5.625 m',
              '7.5 m',
              '11.25 m',
              '22.5 m'
            ],
            correctAnswer: 2,
            explanation: '$W_g = -mgh = \\Delta KE = 0 - \\frac{1}{2}(2)(15)^2 = -225$ J. $mgh = 225 \\Rightarrow h = 225/(2 \\times 10) = 11.25$ m.'
          }
        ]
      }
    },
    {
      id: 'wk6-calculations',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

Use $g = 10$ m/s². Use $\\cos(37°) = 0.8$, $\\sin(37°) = 0.6$.

1) A 3 kg object moving at 4 m/s has a 15 N net force applied in the direction of motion for 2 m. What is the final speed (in m/s, to 1 decimal place)?

2) A 50 kg skier starts from rest and descends a slope, dropping 20 m vertically. At the bottom, their speed is 15 m/s. How much energy was lost to friction (in J)?

3) A 1500 kg car engine produces 45 kW. What is the maximum speed the car can travel against a 1500 N drag force (in m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.0', '4375', '30'],
        hint1: '$W_{\\text{net}} = 15 \\times 2 = 30$ J. $30 = \\frac{1}{2}(3)v_f^2 - \\frac{1}{2}(3)(16) \\Rightarrow v_f^2 = (30+24)/1.5$.',
        hint2: '$mgh = KE_f + E_{\\text{lost}}$. $50(10)(20) = \\frac{1}{2}(50)(225) + E_{\\text{lost}}$.',
        hint3: 'At maximum speed: $P = Fv \\Rightarrow v = P/F = 45{,}000/1500$.',
        explanation: '1) $v_f^2 = 16 + 2(30)/3 = 16 + 20 = 36 \\Rightarrow v_f = 6.0$ m/s. 2) $E_{\\text{lost}} = 10{,}000 - 5{,}625 = 4{,}375$ J. 3) $v = 45{,}000/1500 = 30$ m/s.'
      }
    },
    {
      id: 'wk6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Problem Strategy Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Finding the speed of a ball after falling 10 m (no air resistance). Best approach:',
            options: ['Newton\'s 2nd Law + kinematics', 'Work-Energy Theorem', 'Both work equally well', 'Neither'],
            correctIndex: 2,
            explanation: 'Both methods work well. Kinematics: $v^2 = 2gh$. Work-Energy: $mgh = \\frac{1}{2}mv^2$. They give the same answer.'
          },
          {
            label: 'Finding the acceleration of a block on a rough incline. Best approach:',
            options: ['Work-Energy Theorem', 'Newton\'s 2nd Law', 'Power equation', 'Conservation of energy'],
            correctIndex: 1,
            explanation: 'Newton\'s 2nd Law directly gives acceleration: $ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta$.'
          },
          {
            label: 'Finding the speed of a car given engine power and drag force at constant velocity:',
            options: ['Work-Energy Theorem', 'Newton\'s 2nd Law', '$P = Fv$', 'Kinematics'],
            correctIndex: 2,
            explanation: 'At constant velocity, $P = Fv$ where $F$ = drag force (since engine force = drag force). So $v = P/F$.'
          },
          {
            label: 'Finding stopping distance from initial speed and friction coefficient:',
            options: ['Work-Energy Theorem', 'Impulse-Momentum', 'Kinematics only', 'Power equation'],
            correctIndex: 0,
            explanation: '$W_f = \\Delta KE \\Rightarrow -\\mu_k mg d = -\\frac{1}{2}mv^2 \\Rightarrow d = v^2/(2\\mu_k g)$. Clean and direct.'
          }
        ]
      }
    },
    {
      id: 'wk6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 1000 kg car traveling at 20 m/s brakes with a friction force of 5000 N. The stopping distance is:',
            options: [
              '20 m',
              '30 m',
              '40 m',
              '50 m'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta KE = -\\frac{1}{2}(1000)(400) = -200{,}000$ J. $W_f = -5000d = -200{,}000 \\Rightarrow d = 40$ m.'
          },
          {
            question: 'An engine with 30 kW power pulls a 2000 kg car up a $5°$ incline at constant speed. Neglecting friction, the car\'s speed is approximately ($g = 10$ m/s², $\\sin 5° \\approx 0.087$):',
            options: [
              '8.6 m/s',
              '15 m/s',
              '17.2 m/s',
              '30 m/s'
            ],
            correctAnswer: 2,
            explanation: 'At constant speed, engine force = gravity component = $mg\\sin(5°) = 2000(10)(0.087) = 1740$ N. $P = Fv \\Rightarrow v = 30{,}000/1740 \\approx 17.2$ m/s.'
          }
        ]
      }
    }
  ]
}
