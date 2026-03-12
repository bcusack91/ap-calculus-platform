export const physics1GravitationalPotentialEnergyPart2Data = {
  topicSlug: 'gravitational-potential-energy',
  sections: [
    {
      id: 'gp2-intro',
      type: 'text' as const,
      content: `
# 🔄 Conservative Forces & Path Independence

**Part 2 of 7 — Gravitational Potential Energy**

Why can we define "potential energy" for gravity but not for friction? The answer lies in a special property of gravity: it\'s a **conservative force**. The work it does depends only on the starting and ending positions, not on the path taken.
      `
    },
    {
      id: 'gp2-conservative-def',
      type: 'text' as const,
      content: `
## What Is a Conservative Force?

A force is **conservative** if the work it does on an object depends **only on the initial and final positions**, not on the path taken between them.

### Equivalent Definitions

A force is conservative if:
1. The work done is **path-independent**
2. The work done around any **closed path** (round trip) is **zero**
3. A **potential energy function** can be defined for it

### Examples

| Conservative Forces | Non-Conservative Forces |
|--------------------|------------------------|
| Gravity | Friction |
| Spring force (elastic) | Air resistance |
| Electric force | Applied forces (push/pull) |
| | Tension (in general) |
      `
    },
    {
      id: 'gp2-gravity-path',
      type: 'text' as const,
      content: `
## Gravity: Path Independence

### Key Demonstration

Consider moving a ball from point A (height $h_1$) to point B (height $h_2$):

**Path 1: Straight up**
$$W_g = -mg(h_2 - h_1)$$

**Path 2: Diagonal ramp**
$$W_g = -mg(h_2 - h_1) \\text{ (same!)}$$

**Path 3: Crazy winding path**
$$W_g = -mg(h_2 - h_1) \\text{ (still the same!)}$$

No matter how the object gets from $h_1$ to $h_2$, gravity does the same work. Only the **vertical displacement** matters.

### Round Trip

If an object starts and ends at the same height:
$$W_g = -mg(h_f - h_i) = -mg(0) = 0$$

The work done by gravity over any closed path is zero. ✓
      `
    },
    {
      id: 'gp2-friction-not-conservative',
      type: 'text' as const,
      content: `
## Friction: NOT Conservative

### Why Friction Is Different

Friction always opposes motion, so:
- A longer path → more distance → **more negative work** by friction
- A shorter path → less distance → **less negative work** by friction

The work done by friction **depends on the path length**, not just the endpoints.

### Round Trip with Friction

Push a box 5 m to the right and then 5 m back ($f_k = 10$ N):
$$W_f = -10(5) + (-10)(5) = -100 \\text{ J} \\neq 0$$

Friction does **net negative work** on a round trip → energy is lost to heat → friction is non-conservative.

### Consequence

Because friction is non-conservative, **we cannot define a "friction potential energy."** The energy lost to friction is converted to thermal energy and cannot be fully recovered.
      `
    },
    {
      id: 'gp2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conservative Force Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward and returns to the same height. The work done by gravity over the entire trip is:',
            options: [
              'Positive — gravity accelerated the ball on the way down',
              'Negative — gravity slowed the ball on the way up',
              'Zero — start and end at the same height',
              'Cannot be determined without knowing the mass'
            ],
            correctAnswer: 2,
            explanation: 'Gravity is conservative. For a round trip ($h_f = h_i$), $W_g = -mg(h_f - h_i) = 0$. The positive work during descent exactly cancels the negative work during ascent.'
          },
          {
            question: 'Which property defines a conservative force?',
            options: [
              'It always does positive work',
              'Its work is path-independent',
              'It never changes the speed of an object',
              'It acts at a distance'
            ],
            correctAnswer: 1,
            explanation: 'A conservative force\'s work depends only on initial and final positions, not the path. This is the defining property.'
          },
          {
            question: 'Why can we define gravitational PE but not "friction PE"?',
            options: [
              'Friction is too small to matter',
              'Friction depends on the normal force',
              'Friction is non-conservative — its work depends on the path',
              'Friction doesn\'t store energy'
            ],
            correctAnswer: 2,
            explanation: 'Potential energy can only be defined for conservative forces. Friction is non-conservative because its work depends on the path length, not just the endpoints.'
          }
        ]
      }
    },
    {
      id: 'gp2-calculations',
      type: 'input-boxes' as const,
      content: `
**Conservative Force Calculations** 🧮

Use $g = 10$ m/s².

1) A 3 kg ball is carried from the ground to a height of 5 m via a winding staircase. What is the work done by gravity (in J)?

2) The same ball is then dropped back to the ground. What is the total work done by gravity for the entire round trip (in J)?

3) A 4 kg box is pushed 10 m across a rough floor ($\\mu_k = 0.2$) and then pushed 10 m back. What is the total work done by friction (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-150', '0', '-160'],
        hint1: '$W_g = -mg\\Delta h = -3(10)(5)$. Path doesn\'t matter for gravity!',
        hint2: 'Round trip: $h_f = h_i$, so $W_g = -mg(0) = 0$. Conservative force!',
        hint3: '$f_k = \\mu_k mg = 0.2(4)(10) = 8$ N. Each leg: $W_f = -8(10) = -80$ J. Total: $-80 + (-80)$.',
        explanation: '1) $W_g = -3(10)(5) = -150$ J (negative because ball goes up). 2) $W_g = 0$ J (round trip, conservative force). 3) $W_f = -160$ J. Friction does negative work on BOTH legs — it\'s non-conservative!'
      }
    },
    {
      id: 'gp2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Forces** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The gravitational force is:',
            options: ['Conservative', 'Non-conservative'],
            correctIndex: 0,
            explanation: 'Gravity\'s work depends only on height change, not path. It\'s the classic conservative force.'
          },
          {
            label: 'Kinetic friction is:',
            options: ['Conservative', 'Non-conservative'],
            correctIndex: 1,
            explanation: 'Friction always opposes motion, so longer paths mean more negative work. It\'s path-dependent.'
          },
          {
            label: 'The spring (elastic) force is:',
            options: ['Conservative', 'Non-conservative'],
            correctIndex: 0,
            explanation: 'The spring force is conservative. We can define elastic PE: $PE_s = \\frac{1}{2}kx^2$.'
          },
          {
            label: 'Air resistance (drag) is:',
            options: ['Conservative', 'Non-conservative'],
            correctIndex: 1,
            explanation: 'Like friction, air resistance always opposes motion. Its work depends on the path, so it\'s non-conservative.'
          }
        ]
      }
    },
    {
      id: 'gp2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Conservative Forces** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A hiker climbs a mountain by two different trails. Trail A is 5 km long and Trail B is 8 km long. Both reach the same summit. Compared to Trail A, the work done by gravity on Trail B is:',
            options: [
              'Greater in magnitude (longer path)',
              'Less in magnitude (more gradual)',
              'The same (same height change)',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'Gravity is conservative. Only the vertical height change matters, not the path length. Both trails have the same $\\Delta h$, so gravity does the same work on both.'
          },
          {
            question: 'A block slides around a closed loop on a rough surface and returns to its starting point. Which is true?',
            options: [
              'Both gravity and friction do zero net work',
              'Gravity does zero net work; friction does negative net work',
              'Friction does zero net work; gravity does negative net work',
              'Both do negative net work'
            ],
            correctAnswer: 1,
            explanation: 'Gravity is conservative → zero work on a round trip. Friction is non-conservative → negative work on every segment, so net work is negative. Energy is lost to heat.'
          }
        ]
      }
    }
  ]
}
