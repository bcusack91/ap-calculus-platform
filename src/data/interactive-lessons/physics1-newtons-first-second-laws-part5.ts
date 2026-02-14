export const physics1NewtonsFirstSecondLawsPart5Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Weight and Normal Force

**Part 5 of 7 — Newton\'s First and Second Laws**

Weight and normal force are the two most common forces in mechanics. Understanding their relationship — when they\'re equal, when they\'re not — is essential for solving nearly every dynamics problem.
      `
    },
    {
      id: 'nf5-weight',
      type: 'text' as const,
      content: `
## Weight: The Gravitational Force

**Weight** is the gravitational force exerted by the Earth on an object:

$$W = mg$$

| Property | Detail |
|----------|--------|
| Direction | Always straight **down** (toward Earth\'s center) |
| Magnitude | $mg$ where $g = 9.8$ m/s² |
| Type | Non-contact force (acts even without touching) |
| Depends on | Mass of object and local $g$ |

### Weight on Different Planets

Since $g$ varies by location:

| Location | $g$ (m/s²) | Weight of 80 kg person |
|----------|-----------|----------------------|
| Earth | 9.8 | 784 N |
| Moon | 1.6 | 128 N |
| Mars | 3.7 | 296 N |
| Jupiter | 24.8 | 1984 N |

> **Mass stays the same everywhere — weight changes with $g$.**
      `
    },
    {
      id: 'nf5-normal-force',
      type: 'text' as const,
      content: `
## Normal Force

The **normal force** ($\\vec{N}$ or $\\vec{F}_N$) is the contact force a surface exerts on an object, **perpendicular to the surface**.

### Key Properties

- Direction: **Perpendicular** to the contact surface, **away** from the surface
- It\'s a **contact force** — only exists when objects touch
- It\'s a **response force** — adjusts its magnitude to prevent objects from passing through each other
- It does **NOT** always equal $mg$!

### When Does $N = mg$?

Only on a **horizontal surface** with **no other vertical forces** and **no vertical acceleration**:

$$\\sum F_y = N - mg = 0 \\quad \\Rightarrow \\quad N = mg$$

### When Does $N \\neq mg$?

| Situation | Normal Force |
|-----------|-------------|
| Inclined surface | $N = mg\\cos\\theta$ |
| Elevator accelerating up | $N = m(g + a) > mg$ |
| Elevator accelerating down | $N = m(g - a) < mg$ |
| Extra downward push $F$ | $N = mg + F > mg$ |
| Upward pull $F$ | $N = mg - F < mg$ |
| Object on ceiling (pushed up) | $N$ points downward |
      `
    },
    {
      id: 'nf5-apparent-weight',
      type: 'text' as const,
      content: `
## Apparent Weight

What a scale reads is the **normal force**, not the true weight. We call this the **apparent weight**.

$$W_{\\text{apparent}} = N$$

### Why It Changes

In an accelerating elevator (taking up as positive):

$$N - mg = ma$$
$$N = m(g + a)$$

- Accelerating **up** ($a > 0$): $N > mg$ → feel **heavier**
- Accelerating **down** ($a < 0$): $N < mg$ → feel **lighter**
- **Free fall** ($a = -g$): $N = 0$ → **weightlessness**!

### Weightlessness

Astronauts in orbit are NOT outside Earth\'s gravity — they\'re in **free fall** around the Earth. Since the ISS and everything inside it falls together, the normal force between the astronaut and the floor is zero.

$$N = m(g - g) = 0$$

This is why they float — not because there\'s no gravity, but because there\'s no **normal force**.
      `
    },
    {
      id: 'nf5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Weight and Normal Force Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 10 kg block sits on a table. You press down on the block with a force of 30 N. What is the normal force?',
            options: [
              '68 N',
              '98 N',
              '128 N',
              '30 N'
            ],
            correctAnswer: 2,
            explanation: '$\\sum F_y = N - mg - 30 = 0$. So $N = mg + 30 = 10(9.8) + 30 = 98 + 30 = 128$ N. The normal force must support both the weight and the downward push.'
          },
          {
            question: 'Why do astronauts on the ISS appear weightless?',
            options: [
              'There is no gravity in space',
              'They are too far from Earth for gravity to act',
              'They are in free fall, so the normal force is zero',
              'The ISS shields them from gravity'
            ],
            correctAnswer: 2,
            explanation: 'The ISS orbits at ~400 km where $g \\approx 8.7$ m/s² — gravity is very much present! But the station and astronauts are in free fall together, so there\'s no contact force between them. $N = 0$ means they feel weightless.'
          },
          {
            question: 'The normal force is always:',
            options: [
              'Equal to the object\'s weight',
              'Perpendicular to the contact surface',
              'Pointing upward',
              'Greater than friction'
            ],
            correctAnswer: 1,
            explanation: 'By definition, the normal force is perpendicular to the contact surface. It doesn\'t always point up (think of an object on a wall or ceiling), and it doesn\'t always equal $mg$.'
          }
        ]
      }
    },
    {
      id: 'nf5-calculations',
      type: 'input-boxes' as const,
      content: `
**Weight and Normal Force Calculations** 🧮

1) What is the weight of a 25 kg object on Earth (in N)? Use $g = 9.8$ m/s².

2) A 50 kg person stands on a scale in an elevator accelerating upward at 2 m/s². What does the scale read (in N)?

3) A 40 kg child stands on a scale in an elevator in free fall. What does the scale read (in N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['245', '590', '0'],
        hint1: '$W = mg = 25 \\times 9.8$.',
        hint2: '$N = m(g + a) = 50(9.8 + 2)$.',
        hint3: 'In free fall, $a = -g$, so $N = m(g - g) = 0$.',
        explanation: '1) $W = 25 \\times 9.8 = 245$ N. 2) $N = 50(9.8 + 2) = 50 \\times 11.8 = 590$ N. 3) In free fall, the scale reads 0 N — the child experiences weightlessness.'
      }
    },
    {
      id: 'nf5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Normal Force Scenarios** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An object rests on a 30° incline. The normal force equals:',
            options: ['$mg$', '$mg\\\\sin 30°$', '$mg\\\\cos 30°$', '$mg\\\\tan 30°$'],
            correctIndex: 2,
            explanation: 'On an incline, the normal force equals the component of weight perpendicular to the surface: $N = mg\\cos\\theta$.'
          },
          {
            label: 'A person pulls up on a box resting on a table with a force less than the box\'s weight. The normal force is:',
            options: ['Zero', 'Less than mg', 'Equal to mg', 'Greater than mg'],
            correctIndex: 1,
            explanation: 'The upward pull partially supports the weight, reducing what the table must supply: $N = mg - F_{\\text{pull}} < mg$.'
          },
          {
            label: 'A box sits on the floor with nothing else touching it. The normal force:',
            options: ['Is less than mg', 'Equals mg', 'Is greater than mg', 'Is zero'],
            correctIndex: 1,
            explanation: 'With no other vertical forces and no vertical acceleration: $N = mg$.'
          },
          {
            label: 'When an elevator decelerates while moving upward, the apparent weight is:',
            options: ['Greater than mg', 'Equal to mg', 'Less than mg', 'Zero'],
            correctIndex: 2,
            explanation: 'Decelerating while moving up means the acceleration is downward. $N = m(g - |a|) < mg$. You feel lighter.'
          }
        ]
      }
    },
    {
      id: 'nf5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Weight and Normal Force** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 70 kg person stands on a scale. Someone pushes down on the person\'s shoulders with 100 N. The scale reads:',
            options: [
              '586 N',
              '686 N',
              '786 N',
              '100 N'
            ],
            correctAnswer: 2,
            explanation: '$N = mg + F_{\\text{push}} = 70(9.8) + 100 = 686 + 100 = 786$ N. The scale must support both the weight and the extra push.'
          },
          {
            question: 'An elevator cable breaks, and the elevator falls freely. A ball is released inside. Relative to the elevator, the ball:',
            options: [
              'Falls to the floor quickly',
              'Floats motionless',
              'Flies to the ceiling',
              'Moves sideways'
            ],
            correctAnswer: 1,
            explanation: 'Both the elevator and ball are in free fall with the same acceleration $g$. Relative to the elevator, the ball appears to float — this is the equivalence principle in action.'
          }
        ]
      }
    }
  ]
}
