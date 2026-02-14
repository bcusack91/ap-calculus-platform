export const physics1FrictionPart2Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr2-intro',
      type: 'text' as const,
      content: `
# 📐 Friction Equations

**Part 2 of 7 — Friction**

Now that we understand the two types of friction, let\'s master the mathematical relationships. These equations are used in nearly every dynamics problem on the AP exam.

$$f_s \\leq \\mu_s N \\qquad f_k = \\mu_k N$$
      `
    },
    {
      id: 'fr2-static-equation',
      type: 'text' as const,
      content: `
## The Static Friction Inequality

$$f_s \\leq \\mu_s N$$

### What This Means

- $f_s$ = actual static friction force (what it is right now)
- $\\mu_s$ = coefficient of static friction (dimensionless, depends on surfaces)
- $N$ = normal force (perpendicular contact force)
- $\\mu_s N$ = **maximum** static friction force

### The Inequality Is Important!

The $\\leq$ sign means static friction can be *anywhere from zero up to* $\\mu_s N$:

$$0 \\leq f_s \\leq \\mu_s N$$

| Applied Force $F$ | Static Friction $f_s$ | Motion? |
|---|---|---|
| $F < \\mu_s N$ | $f_s = F$ (matches) | No |
| $F = \\mu_s N$ | $f_s = \\mu_s N$ (at max) | On the verge |
| $F > \\mu_s N$ | Static friction fails | Object begins sliding |

### When to Use $f_s = \\mu_s N$

Only when the problem says:
- "On the verge of sliding"
- "About to move"
- "Maximum static friction"
- "What is the largest force before the object moves?"
      `
    },
    {
      id: 'fr2-kinetic-equation',
      type: 'text' as const,
      content: `
## The Kinetic Friction Equation

$$f_k = \\mu_k N$$

### What This Means

- $f_k$ = kinetic friction force (constant while sliding)
- $\\mu_k$ = coefficient of kinetic friction
- $N$ = normal force

### Key Properties

1. **$f_k$ is constant** — it doesn\'t depend on speed (AP model)
2. **$f_k$ is always less than $f_{s,\\max}$** — since $\\mu_k < \\mu_s$
3. **$N$ is NOT always $mg$** — it depends on other vertical forces

### Normal Force Affects Friction

Since $f = \\mu N$, anything that changes the normal force changes friction:

| Situation | Normal Force | Friction |
|-----------|-------------|---------|
| Flat surface, no extra forces | $N = mg$ | $f = \\mu mg$ |
| Pushing down at angle $\\theta$ | $N = mg + F\\sin\\theta$ | Friction increases |
| Pulling up at angle $\\theta$ | $N = mg - F\\sin\\theta$ | Friction decreases |
| On an incline at $\\theta$ | $N = mg\\cos\\theta$ | Friction decreases |
      `
    },
    {
      id: 'fr2-using-friction',
      type: 'text' as const,
      content: `
## Using Friction in $F = ma$ Problems

### Horizontal Surface — Constant Velocity

If an object slides at **constant velocity** ($a = 0$):

$$F_{\\text{applied}} - f_k = 0$$
$$F_{\\text{applied}} = \\mu_k N = \\mu_k mg$$

### Horizontal Surface — Accelerating

If an object slides with acceleration $a$:

$$F_{\\text{applied}} - f_k = ma$$
$$F_{\\text{applied}} - \\mu_k mg = ma$$
$$a = \\frac{F_{\\text{applied}} - \\mu_k mg}{m}$$

### Example

A 10 kg box is pushed with 60 N on a surface where $\\mu_k = 0.30$. ($g = 10$ m/s²)

$$f_k = \\mu_k mg = 0.30 \\times 10 \\times 10 = 30 \\text{ N}$$
$$a = \\frac{60 - 30}{10} = \\frac{30}{10} = 3 \\text{ m/s}^2$$
      `
    },
    {
      id: 'fr2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Friction Equation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg block sits on a surface with $\\mu_s = 0.4$. You push horizontally with 15 N. What is the friction force? ($g = 10$ m/s²)',
            options: [
              '15 N',
              '20 N',
              '5 N',
              '0 N'
            ],
            correctAnswer: 0,
            explanation: '$f_{s,\\max} = \\mu_s mg = 0.4 \\times 50 = 20$ N. Since 15 N < 20 N, the block doesn\'t move and $f_s = 15$ N (matches applied force).'
          },
          {
            question: 'A sliding 8 kg block has $\\mu_k = 0.25$ on a horizontal surface. What force is needed to keep it moving at constant velocity? ($g = 10$ m/s²)',
            options: [
              '2 N',
              '10 N',
              '20 N',
              '80 N'
            ],
            correctAnswer: 2,
            explanation: 'Constant velocity means $F = f_k = \\mu_k mg = 0.25 \\times 80 = 20$ N.'
          },
          {
            question: 'Pulling a box upward at an angle reduces friction because:',
            options: [
              'The coefficient of friction decreases',
              'The mass of the box decreases',
              'The normal force decreases',
              'Gravity becomes weaker'
            ],
            correctAnswer: 2,
            explanation: 'Pulling up reduces the normal force ($N = mg - F\\sin\\theta$). Since $f = \\mu N$, less normal force means less friction.'
          }
        ]
      }
    },
    {
      id: 'fr2-calculations',
      type: 'input-boxes' as const,
      content: `
**Friction Equation Practice** 🧮

Use $g = 10$ m/s² for all problems.

1) A 15 kg block on a surface ($\\mu_k = 0.20$) is pushed with 50 N horizontally. What is the acceleration (in m/s²)?

2) A 10 kg block slides on a surface ($\\mu_k = 0.50$). What horizontal force is needed for the block to slide at constant velocity (in N)?

3) A 25 kg box sits on a surface with $\\mu_s = 0.60$. What is the maximum horizontal push before it starts moving (in N)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.33', '50', '150', '1.330'],
        hint1: '$a = (F - \\mu_k mg)/m = (50 - 0.20 \\times 150)/15$.',
        hint2: 'Constant velocity: $F = f_k = \\mu_k mg = 0.50 \\times 100$.',
        hint3: '$F_{\\max} = \\mu_s mg = 0.60 \\times 250$.',
        explanation: '1) $f_k = 0.20 \\times 150 = 30$ N. $a = (50-30)/15 = 20/15 = 1.33$ m/s². 2) $F = 0.50 \\times 100 = 50$ N. 3) $f_{s,\\max} = 0.60 \\times 250 = 150$ N.'
      }
    },
    {
      id: 'fr2-dropdown-equations',
      type: 'dropdown-select' as const,
      content: `
**Equation Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When an object is on the verge of moving, the correct friction equation is:',
            options: ['$f_k = \\mu_k N$', '$f_s = \\mu_s N$', '$f_s < \\mu_s N$', '$f = 0$'],
            correctIndex: 1,
            explanation: 'On the verge of moving means static friction is at its maximum: $f_s = \\mu_s N$.'
          },
          {
            label: 'When an object slides at constant velocity, the net force is:',
            options: ['$F - f_k = ma$', '$F = f_k$ (net force = 0)', '$F > f_k$', '$f_k > F$'],
            correctIndex: 1,
            explanation: 'Constant velocity means $a = 0$, so $F_{\\text{net}} = 0$ and the applied force equals kinetic friction.'
          },
          {
            label: 'Doubling the normal force on a surface:',
            options: ['Doubles the coefficient of friction', 'Doubles the friction force', 'Halves the friction force', 'Has no effect on friction'],
            correctIndex: 1,
            explanation: '$f = \\mu N$. Since $\\mu$ is constant for given surfaces, doubling $N$ doubles $f$.'
          }
        ]
      }
    },
    {
      id: 'fr2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Friction Equations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 kg block is pushed across a surface with 30 N. It accelerates at 2.5 m/s². What is $\\mu_k$? ($g = 10$ m/s²)',
            options: [
              '0.25',
              '0.50',
              '0.75',
              '1.00'
            ],
            correctAnswer: 1,
            explanation: '$F - f_k = ma \\Rightarrow 30 - f_k = 4(2.5) = 10 \\Rightarrow f_k = 20$ N. $\\mu_k = f_k/N = 20/(4 \\times 10) = 20/40 = 0.50$.'
          },
          {
            question: 'A block is on a horizontal surface. You double both the mass of the block and the applied horizontal force. The acceleration:',
            options: [
              'Doubles',
              'Stays the same',
              'Halves',
              'Cannot be determined without knowing $\\mu$'
            ],
            correctAnswer: 1,
            explanation: '$a = (F - \\mu mg)/m$. Doubling both $F$ and $m$: $a\' = (2F - \\mu(2m)g)/(2m) = 2(F - \\mu mg)/(2m) = (F - \\mu mg)/m = a$. Same acceleration!'
          }
        ]
      }
    }
  ]
}
