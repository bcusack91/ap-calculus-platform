export const physics2MagneticFieldsPart3Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf3-intro',
      type: 'text' as const,
      content: `
# 🌀 Charged Particles in Magnetic Fields

**Part 3 of 7 — Circular Motion, Mass Spectrometers, and Velocity Selectors**

When a charged particle moves perpendicular to a uniform magnetic field, the magnetic force acts as a centripetal force, causing the particle to travel in a **circle**. This simple fact underlies some of the most powerful instruments in physics and chemistry.
      `
    },
    {
      id: 'mf3-circular-motion',
      type: 'text' as const,
      content: `
## Circular Motion in a Magnetic Field

A charge $q$ moving with speed $v$ perpendicular to a uniform field $\\vec{B}$ experiences:

$$F = qvB$$

This force is always perpendicular to $\\vec{v}$, so it acts as a **centripetal force**:

$$qvB = \\frac{mv^2}{r}$$

Solving for the **radius of circular motion**:

$$\\boxed{r = \\frac{mv}{qB}}$$

### Key Observations

- **Faster particles → larger radius** (linear in $v$)
- **Heavier particles → larger radius** (linear in $m$)
- **Stronger field → smaller radius** (inverse in $B$)
- **More charge → smaller radius** (inverse in $q$)

The speed $v$ does **not change** — the magnetic force does no work! The particle moves in a perfect circle at constant speed.
      `
    },
    {
      id: 'mf3-period-frequency',
      type: 'text' as const,
      content: `
## Cyclotron Period and Frequency

The **period** (time for one full circle) is:

$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$

The **cyclotron frequency** is:

$$\\boxed{f = \\frac{qB}{2\\pi m}}$$

And the angular frequency:

$$\\omega = \\frac{qB}{m}$$

### Remarkable Result

The period and frequency are **independent of speed and radius**! A faster particle travels a bigger circle, but it completes the circle in the same time as a slower particle. This is the principle behind the **cyclotron** particle accelerator.

### What if $\\vec{v}$ has a component along $\\vec{B}$?

- The component $v_\\parallel$ (parallel to $\\vec{B}$) is **unaffected** — no force
- The component $v_\\perp$ (perpendicular to $\\vec{B}$) produces circular motion
- The result is a **helix** (spiral) along the field direction
      `
    },
    {
      id: 'mf3-mass-spectrometer',
      type: 'text' as const,
      content: `
## Mass Spectrometer

A mass spectrometer separates ions by mass using a magnetic field.

### How It Works

1. **Ionize** atoms or molecules → they become charged
2. **Accelerate** through a potential difference $V$: kinetic energy $= qV$, so $v = \\sqrt{2qV/m}$
3. **Enter a magnetic field** region → travel in semicircles
4. **Detect** where they land on a detector plate

### The Separation

The radius of the semicircle is:

$$r = \\frac{mv}{qB}$$

Substituting $v = \\sqrt{2qV/m}$:

$$r = \\frac{m\\sqrt{2qV/m}}{qB} = \\frac{\\sqrt{2mV/q}}{B}$$

$$\\boxed{r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}}$$

Different masses land at different positions (different $r$), allowing isotope identification and molecular analysis.
      `
    },
    {
      id: 'mf3-velocity-selector',
      type: 'text' as const,
      content: `
## Velocity Selector

A velocity selector uses **crossed electric and magnetic fields** to select particles with a specific speed.

### Setup

- $\\vec{E}$ and $\\vec{B}$ are perpendicular to each other and to the particle's velocity $\\vec{v}$
- Electric force: $F_E = qE$ (in one direction)
- Magnetic force: $F_B = qvB$ (in the opposite direction)

### Condition for Straight-Line Motion

For the particle to pass through undeflected:

$$qE = qvB$$

$$\\boxed{v = \\frac{E}{B}}$$

### Key Features

- Only particles with speed $v = E/B$ pass through — all others are deflected
- The selected speed is **independent of charge and mass**
- This is used as the first stage in many mass spectrometers to ensure all entering particles have the same speed
      `
    },
    {
      id: 'mf3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Circular Motion Calculation Drill** 🔢

A proton ($m = 1.67 \\times 10^{-27}$ kg, $q = 1.6 \\times 10^{-19}$ C) moves at $4.0 \\times 10^6$ m/s perpendicular to a 0.20 T magnetic field.

1) Radius of the circular path (in m, to 3 significant figures)
2) Cyclotron period (in s, use scientific notation like 3.3e-7)
3) Cyclotron frequency (in Hz, use scientific notation like 3.0e6)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.21', '3.3e-7', '3.0e6', '0.210', '0.00000', '3000000.0000', '3000000.00'],
        hint1: '$r = mv/(qB) = (1.67 \\times 10^{-27})(4.0 \\times 10^6)/((1.6 \\times 10^{-19})(0.20))$.',
        hint2: '$T = 2\\pi m/(qB)$. Note: the period is independent of speed!',
        hint3: '$f = 1/T = qB/(2\\pi m)$.',
        explanation: '$r = (1.67 \\times 10^{-27})(4 \\times 10^6)/((1.6 \\times 10^{-19})(0.2)) = 6.68 \\times 10^{-21}/(3.2 \\times 10^{-20}) = 0.209$ m ≈ 0.21 m. $T = 2\\pi(1.67 \\times 10^{-27})/((1.6 \\times 10^{-19})(0.2)) = 1.049 \\times 10^{-26}/(3.2 \\times 10^{-20}) = 3.28 \\times 10^{-7}$ s ≈ $3.3 \\times 10^{-7}$ s. $f = 1/T ≈ 3.0 \\times 10^6$ Hz.'
      }
    },
    {
      id: 'mf3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Particles in Magnetic Fields** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A proton and a deuteron (twice the proton mass, same charge) enter the same magnetic field with the same speed. The ratio of their radii $r_d/r_p$ is:',
            options: [
              '1/2',
              '1',
              '2',
              '4'
            ],
            correctAnswer: 2,
            explanation: '$r = mv/(qB)$. Same $v$, $q$, and $B$. The deuteron has $2m$, so $r_d/r_p = 2m/(m) = 2$.'
          },
          {
            question: 'In a velocity selector, the selected speed depends on:',
            options: [
              'The charge of the particle',
              'The mass of the particle',
              'The ratio E/B',
              'The radius of curvature'
            ],
            correctAnswer: 2,
            explanation: 'The condition for straight-line passage is $v = E/B$, which depends only on the field strengths, not on charge or mass.'
          },
          {
            question: 'If a charged particle\'s speed is doubled in the same magnetic field, the cyclotron period:',
            options: [
              'Doubles',
              'Halves',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 3,
            explanation: '$T = 2\\pi m/(qB)$ — the period is independent of speed! A faster particle traces a larger circle but completes it in the same time.'
          }
        ]
      }
    }
  ]
}
