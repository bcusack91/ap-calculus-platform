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
- $I_i = 4.0$ $kg\\cdot m^{2}$, $\\omega_i = 3$ rad/s
- $L = I_i\\omega_i = 12$ $kg\\cdot m^{2}/s$

She pulls her arms in:
- $I_f = 1.2$ $kg\\cdot m^{2}$
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
              'Angular momentum increases, and $\\omega$ increases with it',
              'Angular momentum is the same, $\\omega$ increases',
              'Angular momentum decreases, while $\\omega$ increases',
              'Both angular momentum and $\\omega$ stay exactly the same'
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
              'Increases, as her muscles do positive work on her arms',
              'Stays the same, because her angular momentum is conserved',
              'Decreases, as her muscles do negative work',
              'Is converted into additional angular momentum'
            ],
            correctAnswer: 2,
            explanation: 'Extending her arms increases $I$, so $\\omega$ decreases. Since $KE = L^2/(2I)$ with $L$ fixed, the larger $I$ means a smaller $KE$: her muscles do negative work as her arms move outward. Angular momentum is conserved, but kinetic energy is not.'
          }
        ]
      }
    },
    {
      id: 'am5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Application Calculations** 🧮

1) A diver ($I = 14$ $kg\\cdot m^{2}$ extended) rotates at 2 rad/s. She tucks to $I = 3.5$ $kg\\cdot m^{2}$. What is her angular velocity while tucked? (in rad/s)

2) What is the ratio of her tucked KE to her extended KE?

3) A merry-go-round ($I = 800$ $kg\\cdot m^{2}$ without the child, $\\omega = 2$ rad/s) carries a 40 kg child at $r = 2$ m from the center. The child steps off tangentially, leaving with the same 4 m/s speed (relative to the ground) she had while riding. What is the merry-go-round's new $\\omega$? (in rad/s, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '4', '2.00'],
        hint1: '$I_i\\omega_i = I_f\\omega_f$: $(14)(2) = (3.5)\\omega_f$',
        hint2: '$KE_f/KE_i = I_i/I_f$',
        hint3: 'Child\'s $I = mr^2 = 40(2)^2 = 160$ $kg\\cdot m^{2}$, so $L_{\\text{total}} = (800 + 160)(2) = 1920$ $kg\\cdot m^{2}/s$. The child leaves with $L_{\\text{child}} = mvr = 40(4)(2) = 320$. Set $1920 = 320 + 800\\omega_f$.',
        explanation: '1) $\\omega_f = 28/3.5 = 8$ rad/s. 2) $KE_f/KE_i = I_i/I_f = 14/3.5 = 4$. 3) $L_{\\text{total}} = (800 + 160)(2) = 1920$ $kg\\cdot m^{2}/s$. The child leaves with $L = mvr = 40(4)(2) = 320$ $kg\\cdot m^{2}/s$, exactly her share $I_{\\text{child}}\\omega = 160(2)$. Then $800\\omega_f = 1920 - 320 = 1600$, so $\\omega_f = 2.00$ rad/s: the merry-go-round keeps the same angular velocity, because the child carried away only her own angular momentum and exerted no tangential push on it.'
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
            options: ['her angular momentum increases', 'rotational inertia decreases', 'her muscles exert a torque that spins her up', 'gravity pulls her arms toward her body'],
            correctIndex: 1,
            explanation: 'When a skater pulls arms in, $I$ decreases. With $L$ conserved, $\\omega$ must increase.'
          },
          {
            label: 'While a diver is in the air, what is the source of their angular momentum?',
            options: ['the diver\'s muscles, which keep supplying it', 'gravity, which exerts a torque about the center of mass', 'air resistance pushing on the limbs', 'none, because it is conserved'],
            correctIndex: 3,
            explanation: 'Angular momentum is conserved while the diver is in the air (gravity acts at the CM, producing no torque about it).'
          },
          {
            label: 'When rotational inertia decreases with L conserved, kinetic energy:',
            options: ['doubles', 'quadruples', 'increases by a factor of $I_i/I_f$', 'stays the same'],
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
            question: 'A pottery wheel ($I = 5$ $kg\\cdot m^{2}$, $\\omega = 10$ rad/s) has a lump of clay ($I = 1$ $kg\\cdot m^{2}$) dropped on it. The final angular velocity is:',
            options: [
              '10 rad/s',
              '12.5 rad/s',
              '8.3 rad/s',
              '9.1 rad/s'
            ],
            correctAnswer: 2,
            explanation: '$L_i = (5)(10) = 50$ $kg\\cdot m^{2}/s$. $L_f = (5 + 1)\\omega_f$, so $\\omega_f = 50/6 = 8.33$ rad/s. Subtracting the clay\'s inertia gives $50/4 = 12.5$ rad/s, and assuming kinetic energy is conserved gives $10\\sqrt{5/6} \\approx 9.1$ rad/s.'
          },
          {
            question: 'A student on a freely rotating stool pulls two dumbbells in from arm\'s length. Her rotational kinetic energy:',
            options: [
              'Increases, because her arms do work on the weights',
              'Stays constant, because her angular momentum is conserved',
              'Decreases, because her rotational inertia gets smaller',
              'Stays constant, because no external torque acts on her'
            ],
            correctAnswer: 0,
            explanation: 'Angular momentum $L = I\\omega$ stays constant, so $K = L^2/(2I)$ grows as $I$ shrinks. The extra kinetic energy comes from the work her arms do pulling the dumbbells inward; conserved angular momentum does not mean conserved kinetic energy.'
          }
        ]
      }
    }
  ]
}
