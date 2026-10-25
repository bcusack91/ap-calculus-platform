export const asvabMcForcesMotionPart3Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf3-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 3 of 7 — Friction and Motion**

### Friction always fights sliding

**Friction** is the force between two surfaces that resists them sliding past each other.

- It acts **along the surface** (parallel to it).
- It points **opposite** to the sliding, or opposite to the way the object **would** slide if friction were not there.

| Situation | Friction on the object points |
|:---|:---|
| A crate pushed to the right across a floor | left |
| A skier sliding **down** a slope | **up** the slope, along the surface |
| A box resting on a ramp without sliding | **up** the ramp (it is what keeps the box from sliding down) |
| A car braking while moving forward | backward (on the tires, from the road) |

### What changes the amount of friction

- **Rougher** surfaces give more friction; smoother or **lubricated** surfaces (oil, grease) give less.
- Pressing the surfaces together **harder** (a heavier load) gives more friction.
- **Contact area** matters very little: a brick slides about as easily on its side as on its end.
- **Static** friction (before sliding starts) is larger than **kinetic** friction (while sliding). That is why a heavy crate is hardest to **get moving**.
- **Rolling** friction is far smaller than sliding friction. That is why we use wheels, rollers and **ball bearings**.

Friction is not always the enemy: tire tread, brake pads and boot soles all depend on it. Spreading **sand on ice increases** friction so tires and boots can grip.

**Worked example.** Why does oil in an engine reduce wear? It puts a thin film between metal parts, so they slide on the oil instead of grinding on each other. Less friction means less heat and less wear.`
    },
    {
      id: 'mcf3-skier',
      type: 'multiple-choice' as const,
      content: '**The skier.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="20" y1="40" x2="300" y2="170" stroke="currentColor" stroke-width="2"/><line x1="20" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1" class="fig-muted"/><polygon points="130,91.1 170,109.6 182.6,82.4 142.6,63.9" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="196" y1="88" x2="240" y2="108.4" stroke="currentColor" stroke-width="3"/><polygon points="251,113.5 237.4,114.2 242.6,102.7" fill="currentColor"/><text x="252" y="96" font-size="12" fill="currentColor">sliding</text></g><text x="128" y="56" font-size="12" fill="currentColor" text-anchor="middle">skier</text></svg>',
        alt: 'A slope that runs down from upper left to lower right. A block representing a skier sits on the slope, and an arrow parallel to the slope shows it sliding down and to the right.',
        caption: 'Figure 1. A skier sliding down a slope.'
      },
      exercise: {
        questions: [
          {
            question: 'A skier slides down a snowy slope that falls from left to right. In which direction does the friction force from the snow act on the skier?',
            options: ['Up the slope, parallel to its surface', 'Down the slope, parallel to its surface', 'Straight down, toward the ground', 'Straight out, perpendicular to the slope'],
            correctAnswer: 0,
            explanation: 'Friction acts along the surface, opposite the sliding. The skier slides down the slope, so friction points up the slope. Straight down is the skier\'s weight, and the push perpendicular to the slope is the snow\'s support (normal) force.'
          }
        ]
      }
    },
    {
      id: 'mcf3-friction-check',
      type: 'multiple-choice' as const,
      content: '**Friction checks.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two soldiers push a heavy footlocker across a floor. When does it take the most force?',
            options: ['To get the footlocker moving from rest', 'To keep it sliding at a steady speed', 'It takes the same force at every moment', 'To slow it down once it is sliding'],
            correctAnswer: 0,
            explanation: 'Static friction, which must be overcome to start sliding, is larger than the kinetic friction that acts while it slides. Once it is moving, a smaller push keeps it going.'
          },
          {
            question: 'Which change would reduce the friction on a heavy machine being moved across a shop floor the most?',
            options: ['Setting it on rollers', 'Turning it onto its widest side', 'Stacking tools on top of it', 'Pushing it from a lower point'],
            correctAnswer: 0,
            explanation: 'Rolling friction is much smaller than sliding friction, so rollers make the biggest difference. Contact area barely changes friction, extra weight increases it, and where you push does not change it.'
          },
          {
            question: 'Why do road crews spread sand on an icy bridge?',
            options: ['Sand increases friction so tires can grip', 'Sand lowers the friction so cars slide safely', 'Sand makes the ice melt at a lower temperature', 'Sand adds weight to keep the bridge steady'],
            correctAnswer: 0,
            explanation: 'Sand roughens the surface, raising friction between tires and road. (Salt is what lowers the melting point of ice.)'
          }
        ]
      }
    },
    {
      id: 'mcf3-motion',
      type: 'text' as const,
      content: `## Speed, acceleration, momentum and inertia

| Idea | Meaning | Formula |
|:---|:---|:---|
| **Speed** | distance covered per unit of time | $\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$ |
| **Acceleration** | how fast the speed changes | $\\text{acceleration} = \\dfrac{\\text{change in speed}}{\\text{time}}$ |
| **Momentum** | how hard a moving object is to stop | $\\text{momentum} = \\text{mass} \\times \\text{velocity}$ |
| **Inertia** | an object's resistance to a change in motion | more mass = more inertia |

**Worked example.** A convoy covers $120$ miles in $3$ hours. Its average speed is $120 \\div 3 = 40$ miles per hour.

**Worked example.** A jeep goes from $0$ to $30$ miles per hour in $6$ seconds. Its acceleration is $30 \\div 6 = 5$ miles per hour **each second**.

**Momentum example.** A loaded dump truck and a pickup are both going $30$ mph. The dump truck has far more mass, so it has more momentum and needs much more braking force (or distance) to stop.

### Moving in a circle

An object moving in a circle is constantly being pulled toward the center (by a string, the road's friction, a track). If that pull disappears, inertia takes over and the object moves off in a **straight line** in the direction it was moving at that instant, **tangent** to the circle. It does **not** keep curving, and it does **not** fly straight outward from the center.`
    },
    {
      id: 'mcf3-sling',
      type: 'multiple-choice' as const,
      content: '**Let go of the string.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="110" cy="110" r="60" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="110" cy="110" r="3" fill="currentColor"/><line x1="110" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="1" class="fig-muted"/><g class="fig-accent"><circle cx="170" cy="110" r="7" fill="currentColor"/></g><path d="M90 54 A60 60 0 0 0 60 72" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="56,78 66,73 58,67" fill="currentColor"/><g stroke="currentColor" stroke-width="2" fill="none"><line x1="170" y1="104" x2="170" y2="24"/><path d="M166 102 Q168 46 128 32"/><line x1="178" y1="110" x2="290" y2="110"/><path d="M176 106 Q240 90 290 40"/></g><g font-size="13" font-weight="bold" fill="currentColor"><text x="176" y="24">1</text><text x="116" y="32">2</text><text x="294" y="114">3</text><text x="292" y="38">4</text></g><text x="104" y="132" font-size="11" fill="currentColor" text-anchor="middle">center</text></svg>',
        alt: 'Top view of a ball whirled counterclockwise on a string in a circle around a center point. The ball is at the rightmost point of the circle, where it is moving straight up the page. Four possible paths start there: path 1 goes straight up the page; path 2 curves back to the left, continuing to bend like the circle; path 3 goes straight to the right, directly away from the center; path 4 curves up and to the right.',
        caption: 'Figure 2. A ball on a string, released at the rightmost point of its circle.'
      },
      exercise: {
        questions: [
          {
            question: 'A ball whirls counterclockwise on a string; at the rightmost point of its circle it is moving straight up the page, and the string breaks. Path 1 goes straight up the page, path 2 keeps curving like the circle, path 3 goes straight away from the center, and path 4 curves up and to the right. Which path does the ball follow (seen from above, ignoring gravity)?',
            options: ['Path 1', 'Path 2', 'Path 3', 'Path 4'],
            correctAnswer: 0,
            explanation: 'With the string gone, nothing pulls the ball toward the center, so by inertia it keeps moving in a straight line in the direction it was already going: straight up the page, tangent to the circle. It does not keep curving (path 2) or fly straight outward (path 3).'
          }
        ]
      }
    },
    {
      id: 'mcf3-motion-input',
      type: 'input-boxes' as const,
      content: `**Speed and acceleration.** ✍️

**1)** A supply truck drives $150$ miles in $3$ hours. Its average speed, in miles per hour (number only):

**2)** A motorcycle speeds up from $10$ mph to $40$ mph in $6$ seconds. Its acceleration, in miles per hour per second (number only):

**3)** At an average of $45$ mph, how many hours does a $180$-mile trip take? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '5', '4'],
        hint1: 'Speed = distance ÷ time.',
        hint2: 'Change in speed is 40 − 10.',
        hint3: 'Time = distance ÷ speed.',
        explanation: '(1) $150 \\div 3 = 50$ mph. (2) $(40 - 10) \\div 6 = 5$ mph per second. (3) $180 \\div 45 = 4$ hours.'
      }
    },
    {
      id: 'mcf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Friction acts **along the surface**, **opposite** the sliding (or the would-be sliding)
- Skier sliding down: friction points **up** the slope; a box at rest on a ramp: friction points **up** the ramp
- More friction: rougher surfaces, heavier loads. Less: lubrication, **rolling** instead of sliding. Area barely matters
- **Static** friction > **kinetic** friction: starting is hardest
- Speed = distance ÷ time; acceleration = change in speed ÷ time; momentum = mass × velocity
- Release an object moving in a circle and it goes **straight**, tangent to the circle

> **Up Next:** Part 4 — work, energy and power.`
    }
  ]
};
