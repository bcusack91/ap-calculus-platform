export const physics1FrictionPart6Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Friction**

This workshop brings together all friction concepts: static vs. kinetic, FBDs with friction, angled forces, and experimental methods. Work through these problems systematically using the FBD → equations → solve approach.
      `
    },
    {
      id: 'fr6-strategy',
      type: 'text' as const,
      content: `
## Friction Problem Strategy

### Step 1: Determine the Type of Friction
- Is the object sliding? → Kinetic ($f_k = \\mu_k N$)
- Is the object stationary? → Static ($f_s \\leq \\mu_s N$)
- "On the verge"? → Static at maximum ($f_s = \\mu_s N$)

### Step 2: Find the Normal Force First!
The normal force is NOT always $mg$. Set up the y-direction equation:
$$N = mg \\pm F_y \\quad \\text{or} \\quad N = mg\\cos\\theta \\text{ (on incline)}$$

### Step 3: Calculate Friction
$$f = \\mu N$$

### Step 4: Apply $F = ma$ in the Direction of Motion
$$\\sum F_{\\text{along motion}} = ma$$

### Worked Example

A 10 kg block is pulled at 30° above horizontal with 60 N across a rough surface ($\\mu_k = 0.20$, $g = 10$ m/s²).

**Normal force:** $N = mg - F\\sin 30° = 100 - 30 = 70$ N

**Friction:** $f_k = 0.20 \\times 70 = 14$ N

**Horizontal:** $F\\cos 30° - f_k = ma$
$$52 - 14 = 10a \\Rightarrow a = 3.8 \\text{ m/s}^2$$
      `
    },
    {
      id: 'fr6-worked-example2',
      type: 'text' as const,
      content: `
## Worked Example 2: Will It Slide?

A 5 kg block sits on a horizontal surface ($\\mu_s = 0.50$, $\\mu_k = 0.30$). You push horizontally with 20 N.

**Check:** $f_{s,\\max} = \\mu_s mg = 0.50 \\times 50 = 25$ N

Since $20 < 25$: The block does **NOT** move. $f_s = 20$ N.

Now push with 30 N:

Since $30 > 25$: The block **starts moving**!

Once moving: $f_k = \\mu_k mg = 0.30 \\times 50 = 15$ N

$$a = \\frac{30 - 15}{5} = \\frac{15}{5} = 3 \\text{ m/s}^2$$

## Worked Example 3: Constant Velocity Pulling

What force is needed to pull a 20 kg box at constant velocity at 25° above horizontal? ($\\mu_k = 0.35$, $g = 10$ m/s²)

At constant velocity ($a = 0$):
$$F\\cos 25° = \\mu_k(mg - F\\sin 25°)$$
$$F(0.906) = 0.35(200 - 0.423F)$$
$$0.906F = 70 - 0.148F$$
$$1.054F = 70$$
$$F = 66.4 \\text{ N}$$
      `
    },
    {
      id: 'fr6-workshop-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 10 kg block on a rough surface ($\\mu_s = 0.60$, $\\mu_k = 0.40$) is pushed with 50 N horizontally. The block ($g = 10$ m/s²):',
            options: [
              'Doesn\'t move; friction = 50 N',
              'Doesn\'t move; friction = 60 N',
              'Accelerates at 1 m/s²',
              'Accelerates at 5 m/s²'
            ],
            correctAnswer: 0,
            explanation: '$f_{s,\\max} = 0.60 \\times 100 = 60$ N. Since $50 < 60$, the block stays still and $f_s = 50$ N (matching the push).'
          },
          {
            question: 'A block slides on a surface with $\\mu_k = 0.25$. What is the deceleration? ($g = 10$ m/s²)',
            options: [
              '0.25 m/s²',
              '2.5 m/s²',
              '25 m/s²',
              '40 m/s²'
            ],
            correctAnswer: 1,
            explanation: 'On a horizontal surface with no applied force: $a = \\mu_k g = 0.25 \\times 10 = 2.5$ m/s² (deceleration).'
          },
          {
            question: 'A block is pushed at 45° below horizontal with 80 N on a surface ($\\mu_k = 0.20$). The normal force on the 10 kg block is ($g = 10$ m/s², $\\sin 45° \\approx 0.707$):',
            options: [
              '43.4 N',
              '100 N',
              '156.6 N',
              '180 N'
            ],
            correctAnswer: 2,
            explanation: '$N = mg + F\\sin 45° = 100 + 80(0.707) = 100 + 56.6 = 156.6$ N.'
          }
        ]
      }
    },
    {
      id: 'fr6-workshop-calc',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

1) A 8 kg block is pushed with 60 N horizontally across a rough floor ($\\mu_k = 0.25$, $g = 10$ m/s²). What is the acceleration (in m/s²)?

2) A block slides to a stop in 4 seconds from an initial speed of 12 m/s on a horizontal surface. What is $\\mu_k$? ($g = 10$ m/s²)

3) What angle must a ramp be tilted to for a block to be on the verge of sliding if $\\mu_s = 0.577$? (in degrees, given $\\tan^{-1}(0.577) = 30°$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '0.3', '30'],
        hint1: '$f_k = 0.25 \\times 80 = 20$ N. $a = (60 - 20)/8$.',
        hint2: '$a = \\Delta v/\\Delta t = 12/4 = 3$ m/s². $\\mu_k = a/g = 3/10$.',
        hint3: '$\\mu_s = \\tan\\theta_c$, so $\\theta_c = \\tan^{-1}(\\mu_s)$.',
        explanation: '1) $a = (60 - 20)/8 = 40/8 = 5$ m/s². 2) $a = 3$ m/s². $\\mu_k = 3/10 = 0.3$. 3) $\\theta_c = \\tan^{-1}(0.577) = 30°$.'
      }
    },
    {
      id: 'fr6-dropdown-checks',
      type: 'dropdown-select' as const,
      content: `
**Quick Reasoning Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pushing a box harder against the floor (downward angle) will _____ the friction.',
            options: ['Decrease', 'Not change', 'Increase', 'Eliminate'],
            correctIndex: 2,
            explanation: 'Pushing at a downward angle increases $N$, which increases friction since $f = \\mu N$.'
          },
          {
            label: 'A block slides across a surface and stops. The work done by friction is:',
            options: ['Positive', 'Zero', 'Negative', 'Depends on direction'],
            correctIndex: 2,
            explanation: 'Friction opposes motion, so the force and displacement are in opposite directions. Work = $Fd\\cos 180° < 0$. Negative work = kinetic energy removed.'
          },
          {
            label: 'Two identical blocks are stacked. The friction on the bottom block from the surface is _____ the friction for a single block.',
            options: ['Half', 'The same as', 'Double', 'Four times'],
            correctIndex: 2,
            explanation: 'Stacking doubles the normal force on the surface: $N = 2mg$. Friction doubles: $f = \\mu(2mg) = 2\\mu mg$.'
          }
        ]
      }
    },
    {
      id: 'fr6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Friction Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 12 kg block is pushed horizontally with 90 N across a rough surface ($\\mu_k = 0.40$, $g = 10$ m/s²). What is the acceleration?',
            options: [
              '2.5 m/s²',
              '3.5 m/s²',
              '4.5 m/s²',
              '5.5 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$N = mg = 120$ N. $f_k = 0.40 \\times 120 = 48$ N. $a = (90 - 48)/12 = 42/12 = 3.5$ m/s².'
          },
          {
            question: 'A 4 kg block on a horizontal surface ($\\mu_k = 0.50$) is given an initial push of 8 m/s. How far does it slide before stopping? ($g = 10$ m/s²)',
            options: [
              '3.2 m',
              '6.4 m',
              '8.0 m',
              '12.8 m'
            ],
            correctAnswer: 1,
            explanation: '$a = \\mu_k g = 0.50 \\times 10 = 5$ m/s². $v^2 = v_0^2 + 2a\\Delta x$. $0 = 64 - 10\\Delta x$. $\\Delta x = 64/10 = 6.4$ m.'
          }
        ]
      }
    }
  ]
}
