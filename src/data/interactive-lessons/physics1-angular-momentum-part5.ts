export const physics1AngularMomentumPart5Data = {
  topicSlug: 'angular-momentum',
  sections: [
    {
      id: 'am5-intro',
      type: 'text' as const,
      content: `
# ⭐ Figure Skater & Collapsing Star Examples

**Part 5 of 7 — Conservation in Action**

The conservation of angular momentum produces some of nature's most dramatic phenomena — from figure skaters spinning faster to neutron stars rotating hundreds of times per second.
      `
    },
    {
      id: 'am5-skater',
      type: 'text' as const,
      content: `
## The Figure Skater

A figure skater begins a spin with arms extended:
- $I_i = 4.0$ kg·m², $\\omega_i = 3$ rad/s
- $L = I_i\\omega_i = 12$ kg·m²/s

She pulls her arms in:
- $I_f = 1.2$ kg·m²
- $\\omega_f = L/I_f = 12/1.2 = 10$ rad/s

### Speed increase: $\\omega_f/\\omega_i = 10/3 \\approx 3.3\\times$ faster!

### Energy Analysis

- $KE_i = \\frac{1}{2}(4.0)(9) = 18$ J
- $KE_f = \\frac{1}{2}(1.2)(100) = 60$ J
- Energy increase: $60 - 18 = 42$ J

Where does the extra 42 J come from? **Internal work** by the skater's muscles pulling her arms inward against the centripetal acceleration.
      `
    },
    {
      id: 'am5-star',
      type: 'text' as const,
      content: `
## The Collapsing Star

When a massive star runs out of fuel, its core collapses from roughly the size of the Sun ($R \\sim 7 \\times 10^8$ m) to a neutron star ($R \\sim 10^4$ m).

### Before collapse
- $R_i = 7 \\times 10^8$ m, rotation period $T_i \\approx 30$ days

### After collapse
- $R_f = 10^4$ m
- $I \\propto MR^2$, so $I_f/I_i = (R_f/R_i)^2 = (10^4/7 \\times 10^8)^2 \\approx 2 \\times 10^{-10}$

By conservation: $\\omega_f = (I_i/I_f)\\omega_i$

$$\\omega_f \\approx 5 \\times 10^9 \\times \\omega_i$$

The period goes from ~30 days to **milliseconds**! This explains why pulsars (rotating neutron stars) spin incredibly fast.

### Other Examples

- **Helicopter tail rotor**: prevents the body from spinning (reaction to main rotor torque)
- **Cat righting reflex**: cats change their body shape mid-air to reorient
- **Diver's tuck**: pulling into a tuck position reduces $I$, increasing spin rate
      `
    },
    {
      id: 'am5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Real-World Angular Momentum Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A diver leaves the diving board extended, then tucks. While tucked, compared to extended:',
            options: [
              'Angular momentum increases, $\\omega$ increases',
              'Angular momentum is the same, $\\omega$ increases',
              'Angular momentum decreases, $\\omega$ increases',
              'Both angular momentum and $\\omega$ stay the same'
            ],
            correctAnswer: 1,
            explanation: 'No external torque acts on the diver (gravity acts at the center of mass and produces no torque about it). So $L$ is conserved. Tucking reduces $I$, so $\\omega$ increases.'
          },
          {
            question: 'A neutron star spins rapidly because:',
            options: [
              'It was given a push during the supernova',
              'Conservation of angular momentum during gravitational collapse',
              'Magnetic fields speed it up',
              'Nuclear reactions provide rotational energy'
            ],
            correctAnswer: 1,
            explanation: 'The star\'s angular momentum is conserved during collapse. The enormous decrease in radius (and thus $I$) causes a corresponding enormous increase in $\\omega$.'
          },
          {
            question: 'A spinning skater extends her arms. Her rotational KE:',
            options: [
              'Increases (muscles do positive work)',
              'Stays the same ($L$ is conserved)',
              'Decreases (muscles do negative work absorbing energy)',
              'Becomes zero'
            ],
            correctAnswer: 2,
            explanation: 'Extending arms increases $I$, decreasing $\\omega$. Since $KE = L^2/(2I)$, increasing $I$ decreases $KE$. The "lost" energy goes into the work done against her muscles as arms extend.'
          }
        ]
      }
    },
    {
      id: 'am5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Application Calculations** 🧮

1) A diver ($I = 14$ kg·m² extended) rotates at 2 rad/s. She tucks to $I = 3.5$ kg·m². What is her angular velocity while tucked? (in rad/s)

2) What is the ratio of her tucked KE to her extended KE?

3) A merry-go-round ($I = 800$ kg·m², $\\omega = 2$ rad/s) has a 40 kg child ($r = 2$ m from center) jump off tangentially. What is the new $\\omega$? (in rad/s, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '4', '2.44'],
        hint1: '$I_i\\omega_i = I_f\\omega_f$: $(14)(2) = (3.5)\\omega_f$',
        hint2: '$KE_f/KE_i = I_i/I_f$',
        hint3: 'Child\'s $I = mr^2 = 40(4) = 160$ kg·m². Before: $L = (800 + 160)(2) = 1920$. After (child gone): $L_{\\text{MGR}} = 800\\omega_f$. But wait — angular momentum includes the child\'s $L$ after jumping. If child jumps off tangentially at the current tangential velocity $v = r\\omega = 2(2) = 4$ m/s, the child keeps $L_{\\text{child}} = mvr = 40(4)(2) = 320$. So $1920 - 320 = 800\\omega_f$.',
        explanation: '1) $\\omega_f = 28/3.5 = 8$ rad/s. 2) $KE_f/KE_i = I_i/I_f = 14/3.5 = 4$. 3) $L_{\\text{total}} = (800 + 160)(2) = 1920$ kg·m²/s. Child leaves with $L = mvr = 40(4)(2) = 320$. Remaining: $800\\omega_f = 1920 - 320 = 1600$. $\\omega_f = 1600/800 = 2.0$ rad/s. Hmm, but if the child jumps off tangentially at the current velocity, the child\'s angular momentum is: $L = mvr = 40 \\times r\\omega \\times r = 40(2)(2)(2) = 320$. $\\omega_f = (1920 - 320)/800 = 2.0$. Actually let me reconsider: $L_{child} = I_{child}\\omega = 160(2) = 320$. $L_{MGR} = 1920 - 320 = 1600$. $\\omega_f = 1600/800 = 2.0$. The merry-go-round keeps the same angular velocity since the child departed with exactly its share of angular momentum.'
      }
    },
    {
      id: 'am5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Real-World Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A figure skater spins faster when pulling arms in because:',
            options: ['angular momentum increases', 'rotational inertia decreases', 'torque from muscles', 'gravity pulls arms in'],
            correctIndex: 1,
            explanation: 'When a skater pulls arms in, $I$ decreases. With $L$ conserved, $\\omega$ must increase.'
          },
          {
            label: 'While a diver is in the air, what is the source of their angular momentum?',
            options: ['the diver\'s muscles', 'gravity', 'air resistance', 'no source — it is conserved'],
            correctIndex: 3,
            explanation: 'Angular momentum is conserved while the diver is in the air (gravity acts at the CM, producing no torque about it).'
          },
          {
            label: 'When rotational inertia decreases with L conserved, kinetic energy:',
            options: ['doubles', 'quadruples', 'increases by a factor of I_i/I_f', 'stays the same'],
            correctIndex: 2,
            explanation: 'When $I$ changes and $L$ is conserved: $KE_f/KE_i = I_i/I_f$. KE increases by the factor $I_i/I_f$ when $I$ decreases.'
          }
        ]
      }
    },
    {
      id: 'am5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Conservation Examples** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A pottery wheel ($I = 5$ kg·m², $\\omega = 10$ rad/s) has a lump of clay ($I = 1$ kg·m²) dropped on it. The final angular velocity is:',
            options: [
              '6 rad/s',
              '8 rad/s',
              '8.3 rad/s',
              '10 rad/s'
            ],
            correctAnswer: 2,
            explanation: '$L_i = (5)(10) = 50$ kg·m²/s. $L_f = (5 + 1)\\omega_f$. $\\omega_f = 50/6 = 8.33$ rad/s.'
          },
          {
            question: 'A gyroscope maintains its orientation in space because:',
            options: [
              'It has zero angular momentum',
              'Its large angular momentum resists changes in direction',
              'Gravity cannot act on spinning objects',
              'Its mass is too large to move'
            ],
            correctAnswer: 1,
            explanation: 'A spinning gyroscope has large $L$. Changing the direction of $L$ requires a large torque. This resistance to direction change is the basis of gyroscopic stability.'
          }
        ]
      }
    }
  ]
}
