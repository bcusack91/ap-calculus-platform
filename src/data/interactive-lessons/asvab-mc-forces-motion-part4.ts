export const asvabMcForcesMotionPart4Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf4-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 4 of 7 — Work, Energy and Power**

### Work

In physics, **work** is done only when a force **moves** something **in the direction of the force**:

$$\\text{Work} = \\text{Force} \\times \\text{distance}$$

With force in pounds and distance in feet, work is in **foot-pounds (ft·lb)**.

- Push a cart with $50$ lb for $20$ ft: $W = 50 \\times 20 = 1{,}000$ ft·lb.
- Lift a $60$-lb ammo can $4$ ft onto a truck bed: the force needed is its weight, so $W = 60 \\times 4 = 240$ ft·lb.
- **No movement, no work.** Holding a heavy box perfectly still, or pushing on a wall that does not move, does **zero** work, even though you get tired.
- Carrying a box across a level floor at a steady height does no work **against gravity**: the lifting force is up, but the motion is sideways.

### Energy

**Energy** is the ability to do work, and it is measured in the same units.

| Kind | What it depends on | Example |
|:---|:---|:---|
| **Potential energy** (stored by height) | weight × height | a raised hammer, water behind a dam |
| **Kinetic energy** (energy of motion) | mass and **speed squared** | a moving truck: double the speed, **four times** the kinetic energy |

**Conservation of energy:** energy is not created or destroyed; it changes form. A swinging pendulum or a roller coaster trades potential energy (high up) for kinetic energy (low down, fast) and back. **Friction** turns some of it into heat, which is why a real swing slowly stops.`
    },
    {
      id: 'mcf4-work-input',
      type: 'input-boxes' as const,
      content: `**Work.** ✍️

**1)** A mechanic pushes a $250$-lb engine stand across the floor with a steady $40$-lb force for $15$ feet. How much work does the push do, in foot-pounds? (number only)

**2)** A $150$-lb crate is lifted $5$ feet straight up. How much work is done, in foot-pounds? (number only)

**3)** A soldier holds a $30$-lb pack perfectly still above her head for $10$ seconds. How much work does she do on the pack during that time, in foot-pounds? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['600', '750', '0'],
        hint1: 'Use the push force, not the weight, for a push along the floor.',
        hint2: 'Lifting force = weight; distance = height.',
        hint3: 'Did the pack move?',
        explanation: '(1) $40 \\times 15 = 600$ ft·lb. The $250$-lb weight is a distractor: the push is what moves it. (2) $150 \\times 5 = 750$ ft·lb. (3) $0$ ft·lb: no movement means no work.'
      }
    },
    {
      id: 'mcf4-pendulum',
      type: 'multiple-choice' as const,
      content: '**The pendulum.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="120" y1="20" x2="200" y2="20" stroke="currentColor" stroke-width="3"/><path d="M70 127.2 A140 140 0 0 0 250 127.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" class="fig-muted"/><line x1="160" y1="20" x2="70" y2="127.2" stroke="currentColor" stroke-width="1.5"/><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="160" y1="20" x2="112.1" y2="151.6"/><line x1="160" y1="20" x2="160" y2="160"/><line x1="160" y1="20" x2="207.9" y2="151.6"/><line x1="160" y1="20" x2="250" y2="127.2"/></g><g class="fig-accent"><circle cx="70" cy="127.2" r="9" fill="currentColor"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><circle cx="112.1" cy="151.6" r="8"/><circle cx="160" cy="160" r="8"/><circle cx="207.9" cy="151.6" r="8"/><circle cx="250" cy="127.2" r="8"/></g><g font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="52" y="132">A</text><text x="100" y="176">B</text><text x="160" y="186">C</text><text x="220" y="176">D</text><text x="268" y="132">E</text></g></svg>',
        alt: 'A pendulum hanging from a pivot. The bob is released from rest at point A, high on the left. Its path is an arc through point B, the lowest point C directly below the pivot, point D, and point E, high on the right at the same height as A.',
        caption: 'Figure 1. A pendulum released from rest at A swings through B, C and D to E.'
      },
      exercise: {
        questions: [
          {
            question: 'A pendulum bob is released from rest at A (high on the left) and swings through B, C (the lowest point), D and E (high on the right, level with A). Ignoring friction, where is the bob moving fastest?',
            options: ['At C', 'At A', 'At B', 'At E'],
            correctAnswer: 0,
            explanation: 'Going down, the bob trades potential energy for kinetic energy. C is the lowest point, so all the potential energy it lost has become kinetic energy there: maximum speed. At A and E it is momentarily stopped.'
          },
          {
            question: 'Using the same pendulum, at which points is its potential energy greatest and its speed zero?',
            options: ['At A and E', 'At B and D', 'At C only', 'At every point'],
            correctAnswer: 0,
            explanation: 'The highest points of the swing, A and E, have the most potential energy. There the bob stops for an instant before swinging back, so its kinetic energy (and speed) is zero.'
          }
        ]
      }
    },
    {
      id: 'mcf4-coaster',
      type: 'multiple-choice' as const,
      content: '**The roller coaster.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><path d="M20 40 C50 40 60 170 90 170 C120 170 130 80 160 80 C190 80 200 140 230 140 C260 140 270 100 300 100" fill="none" stroke="currentColor" stroke-width="2.5"/><g class="fig-accent"><rect x="12" y="26" width="18" height="12" fill="currentColor"/></g><g fill="currentColor"><circle cx="20" cy="40" r="3.5"/><circle cx="90" cy="170" r="3.5"/><circle cx="160" cy="80" r="3.5"/><circle cx="230" cy="140" r="3.5"/><circle cx="300" cy="100" r="3.5"/></g><g font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="40" y="34">P</text><text x="90" y="192">Q</text><text x="160" y="70">R</text><text x="230" y="162">S</text><text x="300" y="90">T</text></g></svg>',
        alt: 'A roller coaster track. A car starts at rest at point P, the highest point, on the far left. The track drops to Q, the lowest point, rises to a hill at R (lower than P), drops to S (higher than Q), and rises to T on the right (lower than R).',
        caption: 'Figure 2. A coaster car starts from rest at P.'
      },
      exercise: {
        questions: [
          {
            question: 'A coaster car starts from rest at P, the highest point. The track drops to Q (the lowest point), rises to R, falls to S (higher than Q) and rises to T. Ignoring friction, at which point is the car moving fastest?',
            options: ['At Q', 'At S', 'At R', 'At T'],
            correctAnswer: 0,
            explanation: 'Speed depends on how far the car has dropped below its starting height. Q is the lowest point, so the most potential energy has turned into kinetic energy there. S is low too, but not as low as Q.'
          }
        ]
      }
    },
    {
      id: 'mcf4-power',
      type: 'text' as const,
      content: `## Power and efficiency

**Power** is how fast work is done:

$$\\text{Power} = \\frac{\\text{Work}}{\\text{time}}$$

With work in foot-pounds and time in seconds, power is in **ft·lb per second**. Engines and motors are rated in **horsepower**:

$$1 \\text{ horsepower} = 550 \\text{ ft·lb per second}$$

**Worked example.** A winch lifts a $1{,}100$-lb load $10$ feet in $20$ seconds. Work $= 1{,}100 \\times 10 = 11{,}000$ ft·lb. Power $= 11{,}000 \\div 20 = 550$ ft·lb/s $= 1$ horsepower.

Two soldiers each carry identical crates up the same stairs. The one who gets to the top **faster** did the **same work** but used **more power**.

### Efficiency

No real machine puts out as much work as you put in; some is always lost to friction as heat.

$$\\text{Efficiency} = \\frac{\\text{work out}}{\\text{work in}} \\times 100\\%$$

A machine that takes in $800$ ft·lb and delivers $600$ ft·lb is $\\frac{600}{800} = 75\\%$ efficient. An efficiency **over 100%** is impossible: that answer choice is always wrong.`
    },
    {
      id: 'mcf4-power-check',
      type: 'multiple-choice' as const,
      content: '**Power, energy and efficiency.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A motor lifts a $220$-lb load $5$ feet in $2$ seconds. What horsepower does this take? ($1$ hp $= 550$ ft·lb/s)',
            options: ['1 hp', '2 hp', '1/2 hp', '5 hp'],
            correctAnswer: 0,
            explanation: 'Work $= 220 \\times 5 = 1{,}100$ ft·lb. Power $= 1{,}100 \\div 2 = 550$ ft·lb/s, which is exactly $1$ hp.'
          },
          {
            question: 'A truck\'s speed doubles from $20$ mph to $40$ mph. What happens to its kinetic energy?',
            options: ['It becomes four times as large', 'It doubles', 'It stays the same', 'It is cut in half'],
            correctAnswer: 0,
            explanation: 'Kinetic energy depends on speed squared: $2^2 = 4$, so doubling the speed gives four times the kinetic energy. That is why stopping distance grows so fast with speed.'
          },
          {
            question: 'A pump takes in $1{,}000$ ft·lb of work and lifts water with $800$ ft·lb of useful work. What is its efficiency?',
            options: ['80%', '20%', '125%', '8%'],
            correctAnswer: 0,
            explanation: '$\\frac{800}{1{,}000} = 0.8 = 80\\%$. The other $20\\%$ is lost to friction as heat. Anything above $100\\%$ is impossible.'
          }
        ]
      }
    },
    {
      id: 'mcf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Work = force × distance** (in the direction of the force), in foot-pounds; no movement = **no work**
- Lifting work = **weight × height**
- **Potential energy** grows with height; **kinetic energy** grows with speed **squared**
- Energy changes form but is conserved: fastest at the **lowest** point, stopped at the **highest** points of a swing
- **Power = work ÷ time**; **1 hp = 550 ft·lb/s**
- **Efficiency** = work out ÷ work in; never over $100\\%$

> **Up Next:** Part 5 — pressure and the properties of materials.`
    }
  ]
};
