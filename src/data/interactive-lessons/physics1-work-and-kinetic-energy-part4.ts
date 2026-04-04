export const physics1WorkAndKineticEnergyPart4Data = {
  topicSlug: 'work-and-kinetic-energy',
  sections: [
    {
      id: 'wk4-intro',
      type: 'text' as const,
      content: `
# 🔧 Work by Multiple Forces

**Part 4 of 7 — Work and Kinetic Energy**

Real-world problems rarely involve a single force. Objects are typically acted on by gravity, normal forces, applied forces, and friction simultaneously. In this lesson, we\'ll practice computing the work done by each force and finding the net work.
      `
    },
    {
      id: 'wk4-strategy',
      type: 'text' as const,
      content: `
## Strategy for Multiple Forces

### Step-by-Step

1. **Draw a free-body diagram** — identify every force
2. **Find the displacement** — direction and magnitude
3. **Calculate work for each force**: $W = Fd\\cos\\theta$
4. **Sum all works** to get $W_{\\text{net}}$
5. **Apply the Work-Energy Theorem**: $W_{\\text{net}} = \\Delta KE$

### Forces That Often Do Zero Work

| Force | Why Zero Work? |
|-------|---------------|
| Normal force (flat surface) | Perpendicular to motion |
| Gravity (horizontal motion) | Perpendicular to motion |
| Centripetal force | Always perpendicular to velocity |
| Tension in a pendulum | Perpendicular to the arc of motion |
      `
    },
    {
      id: 'wk4-horizontal-surface',
      type: 'text' as const,
      content: `
## Example: Box on a Horizontal Surface

A 10 kg box is pulled 8 m across a floor by a 60 N force at $30°$ above horizontal. The coefficient of kinetic friction is $\\mu_k = 0.3$. ($g = 10$ m/s²)

### Step 1: Identify Forces
- Applied force $F = 60$ N at $30°$
- Weight $W = mg = 100$ N (down)
- Normal force $N$ (up)
- Kinetic friction $f_k$ (backward)

### Step 2: Find Normal Force
Vertical equilibrium: $N + F\\sin(30°) = mg$
$$N = 100 - 60(0.5) = 100 - 30 = 70 \\text{ N}$$

### Step 3: Find Friction
$$f_k = \\mu_k N = 0.3 \\times 70 = 21 \\text{ N}$$

### Step 4: Calculate Each Work
- $W_{\\text{applied}} = 60 \\times 8 \\times \\cos(30°) = 480 \\times 0.866 \\approx 416$ J
- $W_{\\text{friction}} = 21 \\times 8 \\times \\cos(180°) = -168$ J
- $W_{\\text{gravity}} = 100 \\times 8 \\times \\cos(90°) = 0$ J
- $W_{\\text{normal}} = 70 \\times 8 \\times \\cos(90°) = 0$ J

### Step 5: Net Work
$$W_{\\text{net}} = 416 - 168 + 0 + 0 = 248 \\text{ J}$$
      `
    },
    {
      id: 'wk4-incline',
      type: 'text' as const,
      content: `
## Work on an Incline

When an object moves along an incline at angle $\\phi$:

- **Gravity component along incline**: $mg\\sin\\phi$ (down the incline)
- **Normal force**: Perpendicular to incline (does zero work)

### Moving Up the Incline (distance $d$)
- $W_{\\text{gravity}} = -mgd\\sin\\phi$ (opposes motion)
- Height gained: $h = d\\sin\\phi$
- So $W_{\\text{gravity}} = -mgh$ ✓

### Moving Down the Incline (distance $d$)
- $W_{\\text{gravity}} = +mgd\\sin\\phi$ (aids motion)
- Height lost: $h = d\\sin\\phi$
- So $W_{\\text{gravity}} = +mgh$ ✓
      `
    },
    {
      id: 'wk4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multiple Forces — Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A box is pulled across a rough floor. Which forces do nonzero work on the box?',
            options: [
              'Applied force and friction only',
              'Applied force, friction, and gravity',
              'Applied force, friction, gravity, and normal force',
              'Only the applied force'
            ],
            correctAnswer: 0,
            explanation: 'On a horizontal floor, gravity and the normal force are both perpendicular to the displacement, so they do zero work. Only the applied force (component along motion) and friction (opposing motion) do nonzero work.'
          },
          {
            question: 'A block slides down a frictionless incline. Which forces do work on the block?',
            options: [
              'Gravity only',
              'Normal force only',
              'Both gravity and normal force',
              'Neither — the block slides freely'
            ],
            correctAnswer: 0,
            explanation: 'The normal force is perpendicular to the displacement (along the incline), so it does zero work. Gravity has a component along the incline ($mg\\sin\\theta$), so it does positive work.'
          },
          {
            question: 'Pulling a box at an angle above horizontal (compared to pulling horizontally) results in:',
            options: [
              'More friction because the normal force increases',
              'Less friction because the normal force decreases',
              'The same friction regardless of angle',
              'Zero friction'
            ],
            correctAnswer: 1,
            explanation: 'Pulling upward reduces the normal force ($N = mg - F\\sin\\theta$), which reduces the kinetic friction force $f_k = \\mu_k N$. This is why pulling at an angle can be advantageous.'
          }
        ]
      }
    },
    {
      id: 'wk4-calculations',
      type: 'input-boxes' as const,
      content: `
**Multi-Force Work Problems** 🧮

Use $g = 10$ m/s².

1) A 5 kg box is pushed 4 m across a floor by a horizontal force of 30 N. Kinetic friction is 10 N. What is the net work done (in J)?

2) A 2 kg block slides 5 m down a frictionless incline at $30°$ to the horizontal. What is the work done by gravity (in J)?

3) In problem 2, starting from rest, what is the block\'s speed at the bottom (in m/s, to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '50', '7.1'],
        hint1: '$W_{\\text{net}} = W_{\\text{push}} + W_{\\text{friction}} = 30(4) + (-10)(4)$.',
        hint2: '$W_{\\text{gravity}} = mgd\\sin\\theta = 2(10)(5)\\sin(30°) = 100 \\times 0.5$.',
        hint3: '$W_{\\text{net}} = \\Delta KE \\Rightarrow 50 = \\frac{1}{2}(2)v^2 \\Rightarrow v = \\sqrt{50}$.',
        explanation: '1) $W_{\\text{net}} = 120 - 40 = 80$ J. 2) $W_g = 2(10)(5)(0.5) = 50$ J. 3) $v = \\sqrt{2(50)/2} = \\sqrt{50} \\approx 7.07 \\approx 7.1$ m/s.'
      }
    },
    {
      id: 'wk4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Work Sign Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A block slides UP a rough incline. Work by gravity is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 1,
            explanation: 'Gravity has a component down the incline, but motion is up the incline ($\\theta = 180°$ between gravity component and displacement), so work is negative.'
          },
          {
            label: 'A block slides UP a rough incline. Work by friction is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 1,
            explanation: 'Friction opposes sliding, pointing down the incline while motion is up. So friction does negative work.'
          },
          {
            label: 'A block slides DOWN a rough incline. Work by gravity is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'Gravity component is down the incline and motion is also down, so gravity does positive work.'
          },
          {
            label: 'A block slides DOWN a rough incline. Work by friction is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 1,
            explanation: 'Friction always opposes sliding. Block moves down, friction points up the incline. Work is negative.'
          }
        ]
      }
    },
    {
      id: 'wk4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Work by Multiple Forces** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 kg block is pushed 3 m up a frictionless $30°$ incline by a force of 40 N parallel to the incline. The net work done is ($g = 10$ m/s²):',
            options: [
              '60 J',
              '80 J',
              '120 J',
              '180 J'
            ],
            correctAnswer: 0,
            explanation: '$W_{\\text{push}} = 40 \\times 3 = 120$ J. $W_{\\text{gravity}} = -mgd\\sin(30°) = -4(10)(3)(0.5) = -60$ J. $W_{\\text{normal}} = 0$. $W_{\\text{net}} = 120 - 60 = 60$ J.'
          },
          {
            question: 'An 8 kg block starts from rest and is pulled 5 m across a surface by a net force of 16 N. Its final speed is:',
            options: [
              '2 m/s',
              '$\\sqrt{10}$ m/s',
              '$\\sqrt{20}$ m/s',
              '4 m/s'
            ],
            correctAnswer: 2,
            explanation: '$W_{\\text{net}} = 16 \\times 5 = 80$ J. From $W = \\frac{1}{2}mv^2$: $80 = \\frac{1}{2}(8)v^2 \\Rightarrow v^2 = 20 \\Rightarrow v = \\sqrt{20}$ m/s $\\approx 4.47$ m/s.'
          }
        ]
      }
    }
  ]
}
