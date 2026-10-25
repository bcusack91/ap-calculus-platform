const gspDistanceTimeFigure = {
  svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="110" y1="30" x2="110" y2="190"/><line x1="170" y1="30" x2="170" y2="190"/><line x1="230" y1="30" x2="230" y2="190"/><line x1="290" y1="30" x2="290" y2="190"/><line x1="50" y1="150" x2="290" y2="150"/><line x1="50" y1="110" x2="290" y2="110"/><line x1="50" y1="70" x2="290" y2="70"/><line x1="50" y1="30" x2="290" y2="30"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="50" y1="190" x2="300" y2="190"/><line x1="50" y1="190" x2="50" y2="20"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="50" y="205">0</text><text x="110" y="205">2</text><text x="170" y="205">4</text><text x="230" y="205">6</text><text x="290" y="205">8</text><text x="170" y="222">Time (seconds)</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="44" y="194">0</text><text x="44" y="154">20</text><text x="44" y="114">40</text><text x="44" y="74">60</text><text x="44" y="34">80</text></g><text x="12" y="110" font-size="11" fill="currentColor" text-anchor="middle" transform="rotate(-90 12 110)">Distance (meters)</text><g class="fig-accent"><polyline points="50,190 170,110 230,110 290,30" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="50" cy="190" r="3.5" fill="currentColor"/><circle cx="170" cy="110" r="3.5" fill="currentColor"/><circle cx="230" cy="110" r="3.5" fill="currentColor"/><circle cx="290" cy="30" r="3.5" fill="currentColor"/></g></svg>',
  alt: 'Distance-time graph for a runner. Time in seconds runs from 0 to 8 along the horizontal axis with gridlines every 2 seconds. Distance in meters runs from 0 to 80 on the vertical axis with gridlines every 20 meters. A straight segment rises from (0 s, 0 m) to (4 s, 40 m). A flat segment stays at 40 m from 4 s to 6 s. A steeper straight segment rises from (6 s, 40 m) to (8 s, 80 m).',
  caption: 'Figure 1. A runner\'s distance from the start line over 8 seconds.',
  size: 'md' as const,
}

export const asvabGsPhysicsPart2Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp2-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 2 of 7 — Motion, Forces and Newton's Laws**

### Describing Motion

| Term | Meaning | Formula | Unit |
|:---|:---|:---:|:---|
| **Speed** | How fast something moves | $s = \\frac{d}{t}$ | m/s, mph |
| **Velocity** | Speed **plus a direction** | | m/s north, etc. |
| **Acceleration** | How fast the velocity **changes** | $a = \\frac{\\text{change in velocity}}{t}$ | m/s² |

**The distance triangle.** Speed, distance and time are linked by $d = s \\times t$. Cover the one you want:

- distance = speed × time
- speed = distance ÷ time
- time = distance ÷ speed

**Example 1.** A convoy drives at 50 mph for 3 hours. Distance = 50 × 3 = **150 miles**.

**Example 2.** A truck covers 180 miles at 60 mph. Time = 180 ÷ 60 = **3 hours**.

**Example 3.** A car speeds up from 0 to 20 m/s in 5 seconds. Acceleration = 20 ÷ 5 = **4 m/s²**: its speed grows by 4 m/s every second.

> **Key Fact:** Acceleration means any change in velocity: speeding up, slowing down, **or changing direction**. A car going around a curve at a steady 30 mph is accelerating, because its direction changes.

### Reading a distance–time graph

On a graph of distance against time, the **steepness (slope) is the speed**. A steeper line means faster, and a **flat line means the object is stopped**.`
    },
    {
      id: 'gsp2-graph',
      type: 'multiple-choice' as const,
      figure: gspDistanceTimeFigure,
      content: '**Read the graph.** 📈 Figure 1 shows a runner during a timed drill.',
      exercise: {
        questions: [
          {
            question: 'What is the runner\'s speed during the first 4 seconds?',
            options: ['10 m/s', '40 m/s', '4 m/s', '160 m/s'],
            correctAnswer: 0,
            explanation: 'The runner covers 40 m in 4 s, so speed = 40 ÷ 4 = 10 m/s. The 40 is the distance, not the speed; 160 comes from multiplying.'
          },
          {
            question: 'What is the runner doing between 4 and 6 seconds?',
            options: ['Standing still', 'Running at a steady speed', 'Speeding up', 'Running back toward the start'],
            correctAnswer: 0,
            explanation: 'The line is flat: the distance stays at 40 m while time passes, so the runner is not moving. Running back toward the start would make the line slope downward.'
          },
          {
            question: 'During which interval is the runner moving fastest?',
            options: ['From 6 s to 8 s', 'From 0 s to 4 s', 'From 4 s to 6 s', 'The speed never changes'],
            correctAnswer: 0,
            explanation: 'From 6 s to 8 s the runner covers 40 m in 2 s, which is 20 m/s, and that segment is the steepest. From 0 s to 4 s the speed is only 10 m/s, and from 4 s to 6 s it is zero.'
          }
        ]
      }
    },
    {
      id: 'gsp2-gravity',
      type: 'text' as const,
      content: `## Gravity, Free Fall, Mass and Weight

Near Earth's surface, gravity makes a falling object speed up by about **9.8 m/s² (about 32 ft/s²)**. This number is called $g$.

**Free fall rule:** without air resistance, **all objects fall at the same rate**, no matter how heavy. A hammer and a feather dropped on the Moon (no air) land together. On Earth the feather falls slower only because air pushes back on it.

| | **Mass** | **Weight** |
|:---|:---|:---|
| What it is | The amount of matter in an object | The force of gravity pulling on it |
| Unit | kilogram (kg) | newton (N) or pound (lb) |
| On the Moon | **The same** | About 1/6 as much |
| Formula | — | $W = mg$ |

**Example.** A 10 kg pack weighs about $10 \\times 9.8 = 98$ N on Earth. Taken to the Moon, it still has a mass of 10 kg, but it weighs only about one-sixth as much.

> **Key Fact:** Mass never changes with location. Weight depends on how strong gravity is where you are.`
    },
    {
      id: 'gsp2-newton',
      type: 'text' as const,
      content: `## Newton's Three Laws

| Law | Plain-English version | Everyday example |
|:---|:---|:---|
| **1st: Inertia** | An object keeps doing what it is doing (resting, or moving straight at a steady speed) unless a net force acts on it | Passengers lurch forward when a bus brakes suddenly |
| **2nd: F = ma** | A net force makes a mass accelerate; more force means more acceleration, more mass means less | Pushing an empty cart is easier than pushing a full one |
| **3rd: Action–reaction** | Every force has an equal and opposite force on the **other** object | A rifle kicks back when it fires; a rocket's exhaust pushes down, the rocket goes up |

**Mnemonic:** **I**nertia, **F**orce = **ma**, **A**ction–reaction: "**I F**ound **A**nswers."

**Using F = ma.** A net force of 30 N on a 6 kg box: $a = \\frac{F}{m} = \\frac{30}{6} = 5$ m/s².

### Friction

**Friction** is a force that opposes sliding. It acts in the direction **opposite** to the motion (or the attempted motion), and it turns motion energy into heat (rub your hands together). Rough surfaces give more friction; lubricants such as oil reduce it.

### Momentum

**Momentum** is mass in motion: $p = mv$. A slow truck can have more momentum than a fast bicycle because its mass is so much larger. In a collision with no outside forces, the total momentum before equals the total momentum after.

**Example.** A 2,000 kg truck at 5 m/s has momentum $2{,}000 \\times 5 = 10{,}000$ kg·m/s. A 100 kg cyclist at 10 m/s has only $1{,}000$ kg·m/s.

> **Key Fact:** Inertia depends only on **mass**. The more mass, the harder it is to start, stop or turn the object.`
    },
    {
      id: 'gsp2-mc',
      type: 'multiple-choice' as const,
      content: '**Forces and motion.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A soldier jumps off a small boat onto a dock, and the boat drifts backward away from the dock. Which law explains the boat\'s motion?',
            options: ['Newton\'s third law', 'Newton\'s first law', 'Newton\'s second law', 'The law of gravity'],
            correctAnswer: 0,
            explanation: 'The soldier pushes the boat backward and the boat pushes the soldier forward: an equal and opposite pair of forces. That is the third law (action–reaction).'
          },
          {
            question: 'A bowling ball and a tennis ball are dropped from the same height at the same moment. Ignoring air resistance, which lands first?',
            options: ['They land at the same time', 'The bowling ball lands first', 'The tennis ball lands first', 'It depends on their sizes'],
            correctAnswer: 0,
            explanation: 'Without air resistance, every object falls with the same acceleration, about 9.8 m/s², so they hit the ground together. Heavier objects do not fall faster.'
          },
          {
            question: 'An astronaut has a mass of 70 kg on Earth. What is the astronaut\'s mass on the Moon?',
            options: ['70 kg', 'About 12 kg', 'About 420 kg', '0 kg'],
            correctAnswer: 0,
            explanation: 'Mass is the amount of matter and does not change with location. The astronaut\'s weight on the Moon drops to about one-sixth, but the mass stays 70 kg.'
          }
        ]
      }
    },
    {
      id: 'gsp2-input',
      type: 'input-boxes' as const,
      content: `**Work the numbers.** ✍️ No calculator.

**1)** A helicopter flies 240 km in 2 hours. What is its average speed, in km/h?

**2)** A cart's speed increases from 0 to 12 m/s in 4 seconds. What is its acceleration, in m/s²?

**3)** A net force of 40 N acts on an 8 kg crate. What is its acceleration, in m/s²?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '3', '5'],
        hint1: 'Speed = distance ÷ time.',
        hint2: 'Acceleration = change in speed ÷ time.',
        hint3: 'Rearrange F = ma as a = F ÷ m.',
        explanation: '(1) 240 ÷ 2 = 120 km/h. (2) (12 − 0) ÷ 4 = 3 m/s². (3) 40 ÷ 8 = 5 m/s².'
      }
    },
    {
      id: 'gsp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the idea.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A rider without a seat belt keeps moving forward when a car stops suddenly. This shows:',
            options: ['inertia', 'friction', 'momentum loss', 'gravity'],
            correctAnswer: 0
          },
          {
            label: 'The force that slows a hockey puck sliding across ice is:',
            options: ['friction', 'inertia', 'gravity', 'momentum'],
            correctAnswer: 0
          },
          {
            label: 'Mass multiplied by velocity is called:',
            options: ['momentum', 'acceleration', 'weight', 'force'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['inertia', 'friction', 'momentum'],
        hint1: 'The body keeps doing what it was doing.',
        hint2: 'This force opposes sliding.',
        hint3: 'p = mv.',
        explanation: 'The rider\'s body keeps moving because of inertia (Newton\'s first law). Friction between the puck and the ice opposes its sliding. Mass times velocity is momentum; mass times acceleration would be force.'
      }
    },
    {
      id: 'gsp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Speed = distance ÷ time; velocity is speed with a direction; acceleration is change in velocity ÷ time (m/s²)
- On a distance–time graph, slope = speed and a flat line = stopped
- Gravity: $g \\approx 9.8$ m/s² (about 32 ft/s²); without air, everything falls at the same rate
- Mass (kg) stays the same everywhere; weight = $mg$ changes with gravity (Moon about 1/6)
- Newton: **1st** inertia, **2nd** $F = ma$, **3rd** equal and opposite forces
- Friction opposes motion; momentum $p = mv$

> **Up Next:** Part 3 — work, energy, power, and how heat moves.`
    }
  ]
};
