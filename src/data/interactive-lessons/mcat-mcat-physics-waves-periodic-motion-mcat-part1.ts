import type { LessonData } from './registry'

export const periodicMotionMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-waves-periodic-motion-mcat',
  sections: [
    {
      id: 'ws1-intro',
      type: 'text' as const,
      content: `# Periodic Motion & Waves


**Where this fits.** The previous lesson, *Fluids in Motion*, covered continuity, Bernoulli, viscosity and blood flow. This lesson lays the foundation for waves and sound: periodic motion, simple harmonic motion, the basic properties of waves and $v = f\\lambda$. The next lesson, *Interference & Standing Waves*, shows what happens when waves overlap.

### Describing Anything That Repeats

A heartbeat, a swinging pendulum, a vibrating vocal fold and a tuning fork all repeat the same motion over and over. Four quantities describe any such **periodic motion**:

- **Period** $T$: the time for one complete cycle, in seconds.
- **Frequency** $f$: the number of cycles per second, in hertz ($1\\;\\text{Hz} = 1$ cycle per second). Period and frequency are reciprocals: $f = 1/T$. Formulas often use the **angular frequency** $\\omega = 2\\pi f$ (in rad/s); passages may write the motion as $x = A\\cos\\omega t$.
- **Amplitude** $A$: the MAXIMUM displacement from the equilibrium (rest) position. It is measured from the centre line to a peak, not peak to peak; the peak-to-peak distance is $2A$.
- **Phase**: where in its cycle an oscillator is at a given instant. One full cycle is $360^\\circ$, or $2\\pi$ radians. Two oscillators are **in phase** when they reach their peaks together, and **$180^\\circ$ out of phase** when one is at its peak while the other is at its trough. A quarter-cycle offset is $90^\\circ$.

Example: a resting heart at 72 beats per minute has $f = 72/60 = 1.2\\;\\text{Hz}$ and $T = 1/1.2 \\approx 0.83\\;\\text{s}$. Always convert "per minute" to "per second" before using $f = 1/T$.

Phase is the idea that makes the *Interference & Standing Waves* lesson work: two waves that meet in phase reinforce each other, and two that meet $180^\\circ$ out of phase cancel.

### Simple Harmonic Motion

**Simple harmonic motion (SHM)** happens whenever the restoring force is proportional to the displacement and points back toward equilibrium. For a spring this is **Hooke's law**, $F = -kx$, where $x$ is the displacement and $k$ is the spring constant (stiffness, in N/m). The position then traces a smooth sine curve in time.

The two systems the MCAT uses:

$$T_{\\text{spring}} = 2\\pi\\sqrt{\\frac{m}{k}} \\qquad T_{\\text{pendulum}} = 2\\pi\\sqrt{\\frac{L}{g}}$$

Here $m$ is the oscillating mass, $L$ the pendulum's length (pivot to the centre of the bob) and $g$ the gravitational acceleration. The pendulum formula holds for small swings (roughly under $15^\\circ$).

| Change | Mass on a spring | Simple pendulum |
|---|---|---|
| Quadruple the mass | $T$ doubles | no change |
| Double the amplitude (small swings) | no change | no change |
| Quadruple the length | — | $T$ doubles |
| Use a spring four times stiffer | $T$ halves | — |
| Take it to the Moon (smaller $g$) | no change | $T$ increases |

Two traps hide in that table. **Amplitude never changes the period** of SHM: a wider swing covers more distance but moves faster. And the **pendulum's mass cancels out**, because a heavier bob feels a proportionally larger pull of gravity.

**Energy sloshes back and forth.** At the turning points (maximum displacement) the object is momentarily at rest: all the energy is potential, and the restoring force and acceleration are at their largest. Passing through equilibrium, the force is zero, so acceleration is zero, and all the energy is kinetic, so speed is greatest. (The spring's stored-energy formula belongs to the *Work, Energy, and Power* lesson.)`
    },
    {
      id: 'ws1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Periodic Motion** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient's resting heart rate is 75 beats per minute. What is the period of one cardiac cycle?`,
            options: [`$1.25\\;\\text{s}$`, `$0.8\\;\\text{s}$`, `$0.013\\;\\text{s}$`, `$4.5 \\times 10^{3}\\;\\text{s}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `First the frequency in hertz: $f = 75/60\\;\\text{s} = 1.25\\;\\text{Hz}$. The period is its reciprocal, $T = 1/1.25 = 0.8\\;\\text{s}$. The value $1.25\\;\\text{s}$ is the frequency mislabelled as a period, $0.013\\;\\text{s}$ is $1/75$ with the minute never converted to seconds, and $4.5 \\times 10^{3}\\;\\text{s}$ multiplies 75 by 60 instead of dividing.`
          },
          {
            question: `A simple pendulum swinging through small angles has a period of $2.0\\;\\text{s}$. Its bob is replaced with one four times as massive, and its string is made nine times as long. What is the new period?`,
            options: [`$6.0\\;\\text{s}$`, `$18.0\\;\\text{s}$`, `$12.0\\;\\text{s}$`, `$3.0\\;\\text{s}$`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$T = 2\\pi\\sqrt{L/g}$ contains no mass, so only the length matters: $\\sqrt{9} = 3$, and the period triples to $6.0\\;\\text{s}$. $18.0\\;\\text{s}$ forgets the square root and scales the period with the length directly. $12.0\\;\\text{s}$ wrongly adds a spring-style $\\sqrt{m}$ factor of 2 for the heavier bob, and $3.0\\;\\text{s}$ divides by that factor instead, as if a heavier bob swung faster.`
          },
          {
            question: `A block oscillates on a frictionless horizontal spring. At the instant it passes through the equilibrium position, its speed and acceleration are:`,
            options: [`Speed zero; acceleration maximum`, `Speed maximum; acceleration maximum`, `Speed maximum; acceleration zero`, `Speed zero; acceleration zero`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `At equilibrium $x = 0$, so the restoring force $-kx$ and hence the acceleration are zero, while all the energy is kinetic, so speed is greatest. Zero speed with maximum acceleration describes the turning points instead. "Both maximum" and "both zero" miss that speed and acceleration peak at different places, a quarter-cycle apart.`
          },
          {
            question: `Two identical pendulums swing side by side. Whenever one reaches its far-left turning point, the other is at its far-right turning point. What is their phase difference?`,
            options: [`$90^\\circ$ ($\\pi/2$ rad)`, `$360^\\circ$ ($2\\pi$ rad)`, `$0^\\circ$ ($0$ rad)`, `$180^\\circ$ ($\\pi$ rad)`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Opposite extremes at the same moment means the two are half a cycle apart: $180^\\circ$. A $360^\\circ$ offset is a whole cycle, which is identical to $0^\\circ$; both would put the pendulums at the same extreme together. A $90^\\circ$ offset would have one at a turning point while the other passes through the middle.`
          }
        ]
      }
    },
    {
      id: 'ws1-waves',
      type: 'text' as const,
      content: `### From Oscillation to Wave

A **wave** is a disturbance that travels through a medium, carrying ENERGY from place to place without carrying the medium along. Each bit of rope or air simply oscillates about its own resting position, often in SHM, while the pattern moves on. A cork on a pond bobs up and down as ripples pass; it does not ride away with them.

Vocabulary for a wave:

- **Wavelength** $\\lambda$: the distance over which the pattern repeats, such as crest to crest, or one compression to the next.
- **Amplitude** $A$: the maximum displacement of the medium from rest, as for any oscillator.
- **Period and frequency**: the time for one full wavelength to pass a fixed point, and the number passing per second. A wave's frequency is the frequency of each oscillating particle.

### Transverse vs. Longitudinal

| | Transverse | Longitudinal |
|---|---|---|
| Medium moves | perpendicular to the travel direction | parallel to the travel direction |
| Pattern | crests and troughs | **compressions** (crowded, high pressure) and **rarefactions** (spread out, low pressure) |
| Examples | waves on a string; light (needs no medium) | sound in air, water and tissue |

Sound in a gas or liquid is purely longitudinal, because a fluid has no restoring force against sideways (shear) displacement: nudge a bit of air sideways and nothing pulls it back. A fluid pushes back only when it is squeezed or stretched along the travel direction.

Solids resist shear, so they can carry both transverse and longitudinal waves.

<!-- yield:low -->
- Earthquakes show this: the fast longitudinal P-waves pass through Earth's liquid outer core, while the slower transverse S-waves cannot.
<!-- /yield -->

### The Wave Equation and Who Controls What

In one period, a wave advances exactly one wavelength, so:

$$v = f\\lambda$$

Three quantities, but each is controlled by something different. This is the single most-tested wave idea.

- **The medium sets the speed.** On a string, $v = \\sqrt{F_T/\\mu}$, where $F_T$ is the tension and $\\mu$ is the linear mass density (mass per length, in kg/m). A tighter string carries waves faster; a heavier string carries them slower. For sound, the speed depends on the medium's stiffness against compression (its **bulk modulus** $B$, the pressure needed to squeeze it by a given fraction of its volume) and its density: $v = \\sqrt{B/\\rho}$.
- **The source sets the frequency.** A tuning fork, a vocal fold or an ultrasound crystal vibrates at its own rate, and the wave inherits that rate.
- **Wavelength is the result**: $\\lambda = v/f$.

**Sound is fastest in solids, then liquids, then gases.** Solids are denser, which on its own would slow sound, but they are enormously stiffer, and stiffness wins. Typical values: air about $343\\;\\text{m/s}$ at room temperature (often rounded to $340$), water about $1500\\;\\text{m/s}$, soft tissue about $1540\\;\\text{m/s}$, bone roughly $3000$ to $4000\\;\\text{m/s}$, steel about $5000\\;\\text{m/s}$ or more. In a gas, warmer means faster.

**Frequency never changes at a boundary.** When a wave crosses into a new medium, every crest that arrives at the boundary launches exactly one crest on the far side, so crests leave at the rate they arrive. Speed changes, so wavelength changes in proportion: sound passing from air into water speeds up about $4.4$ times, and its wavelength stretches $4.4$ times.

**Changing the source in the same medium changes only the wavelength.** Double a speaker's frequency and the sound still travels at $343\\;\\text{m/s}$; its wavelength halves. Thinking "higher pitch travels faster" is the classic error.

Finally, the energy a wave carries grows with the **square of its amplitude**: triple the amplitude and the wave carries nine times the power.

<!-- yield:low -->
- Exact figure: the speed of sound in air rises by about $0.6\\;\\text{m/s}$ for each degree Celsius of warming.
<!-- /yield -->`
    },
    {
      id: 'ws1-worked',
      type: 'text' as const,
      content: `### Worked Example — Who Controls What, Step by Step

**Problem 1 — One tone, three media.** A $500\\;\\text{Hz}$ tone travels through air ($340\\;\\text{m/s}$), then water ($1500\\;\\text{m/s}$), then bone (take $4000\\;\\text{m/s}$).

- **(a)** What is the tone's frequency in each medium?
- **(b)** What is its wavelength in each medium?
- **(c)** From air to bone, which quantities change and which stays fixed?

**(a) Frequency.** The source sets it, and boundaries cannot change it: $500\\;\\text{Hz}$ in all three media.

**(b) Wavelengths.** With $f = 500\\;\\text{Hz}$ from (a), $\\lambda = v/f$ in each:

| Medium | $v$ (m/s) | $\\lambda = v/f$ |
|---|---|---|
| air | $340$ | $340/500 = 0.68\\;\\text{m}$ |
| water | $1500$ | $1500/500 = 3.0\\;\\text{m}$ |
| bone | $4000$ | $4000/500 = 8.0\\;\\text{m}$ |

**(c) Sanity check.** Speed and wavelength rise together (from $0.68$ to $8.0\\;\\text{m}$) while frequency holds still at $500\\;\\text{Hz}$. If your answer shows frequency changing at a boundary, start again.

**Problem 2 — A string under tension.** A string with $\\mu = 0.010\\;\\text{kg/m}$ is held at tension $F_T = 100\\;\\text{N}$ and shaken by a vibrator at $250\\;\\text{Hz}$.

- **(a)** How fast do waves travel along the string?
- **(b)** What is their wavelength?
- **(c)** If the tension is quadrupled to $400\\;\\text{N}$, what are the new speed and wavelength?

**(a) Speed from the medium.** $v = \\sqrt{F_T/\\mu} = \\sqrt{100/0.010} = \\sqrt{10^4} = 100\\;\\text{m/s}$

**(b) Wavelength.** With $v = 100\\;\\text{m/s}$ from (a): $\\lambda = v/f = 100/250 = 0.40\\;\\text{m}$

**(c) Quadruple the tension.** The speed scales as $\\sqrt{F_T}$, so it doubles to $200\\;\\text{m/s}$. The vibrator still sets $250\\;\\text{Hz}$, so the wavelength doubles to $0.80\\;\\text{m}$. Notice the square root: four times the tension gives only twice the speed.

**Problem 3 — A pendulum clock.** A pendulum is $1.0\\;\\text{m}$ long ($g = 10\\;\\text{m/s}^2$).

- **(a)** What is its period?
- **(b)** What is the period with a bob twice as heavy, or with a slightly wider (still small) swing?
- **(c)** What is the period if the length is increased to $4.0\\;\\text{m}$?

**(a) Period.** $T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{0.10} \\approx 2\\pi(0.32) \\approx 2.0\\;\\text{s}$, one second for each swing across.

**(b) Mass and amplitude.** Neither appears in $T = 2\\pi\\sqrt{L/g}$, so both leave the period at $2.0\\;\\text{s}$.

**(c) Four times the length.** $T \\propto \\sqrt{L}$ and $\\sqrt{4} = 2$, so the $2.0\\;\\text{s}$ from (a) doubles to $4.0\\;\\text{s}$.`
    },
    {
      id: 'ws1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Waves, Media & the Wave Equation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Sound travels roughly fifteen times faster in steel than in air, even though steel is thousands of times denser. Which statement best explains this?`,
            options: [`Steel resists compression far more, which outweighs its density`, `Steel is denser, and greater density by itself makes sound travel faster`, `Steel raises the frequency of the sound, so the product $f\\lambda$ grows`, `Steel's atoms are heavier, so each passes the push along more quickly`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Sound speed depends on stiffness divided by density ($v = \\sqrt{B/\\rho}$). Steel's stiffness is vastly greater than air's, so the ratio is far larger. Greater density alone would SLOW sound, and heavier particles respond more sluggishly, not more quickly. Frequency is set by the source and is unchanged by the medium.`
          },
          {
            question: `A $2.0\\;\\text{MHz}$ ultrasound pulse travels from soft tissue, where sound moves at $1540\\;\\text{m/s}$, into bone, where it moves at about $3080\\;\\text{m/s}$. In the bone, what are the pulse's frequency and wavelength?`,
            options: [`$4.0\\;\\text{MHz}$ and $0.77\\;\\text{mm}$`, `$2.0\\;\\text{MHz}$ and $0.39\\;\\text{mm}$`, `$1.0\\;\\text{MHz}$ and $3.1\\;\\text{mm}$`, `$2.0\\;\\text{MHz}$ and $1.5\\;\\text{mm}$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Frequency is fixed by the source and cannot change at a boundary, so it stays $2.0\\;\\text{MHz}$. The speed doubles, so the wavelength doubles from $1540/(2.0 \\times 10^6) = 0.77\\;\\text{mm}$ to about $1.5\\;\\text{mm}$. Doubling the frequency with the wavelength fixed, or halving the frequency, both wrongly let the boundary change $f$; $0.39\\;\\text{mm}$ halves the wavelength instead of doubling it.`
          },
          {
            question: `A violin string is tightened until its tension is four times the original. Its length and linear mass density are unchanged. What happens to the speed of waves on the string?`,
            options: [`It doubles`, `It quadruples`, `It is halved`, `It stays the same`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$v = \\sqrt{F_T/\\mu}$, so four times the tension gives $\\sqrt{4} = 2$ times the speed. Quadrupling forgets the square root, and halving puts tension in the denominator. "Stays the same" treats speed as fixed by the string's material alone, but tension is part of what the medium is doing.`
          }
        ]
      }
    },
    {
      id: 'ws1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Periods in SHM.** $f = 1/T$; $T = 2\\pi\\sqrt{m/k}$ for a spring, $2\\pi\\sqrt{L/g}$ for a pendulum; amplitude never changes $T$.
- **Energy sloshes back and forth.** Turning points: speed zero, acceleration maximum; equilibrium: speed maximum, acceleration zero.
- **Who controls what.** In $v = f\\lambda$ the medium sets $v$, the source sets $f$, and $\\lambda$ follows.
- **Sound in different media.** Sound in fluids is longitudinal, fastest in solids (stiffness beats density); air is about $343\\;\\text{m/s}$.

**Common traps**

- **Leaving it per minute.** Convert to hertz first: 72 beats per minute is $1.2\\;\\text{Hz}$, so $T \\approx 0.83\\;\\text{s}$.
- **Heavier bob, wider swing.** Neither changes a pendulum's period; only the length and $g$ do.
- **Frequency changing at a boundary.** A new medium changes $v$ and $\\lambda$ together; $f$ stays what the source set.
- **Forgetting the square root.** $v = \\sqrt{F_T/\\mu}$, so four times the tension only doubles the wave speed.

<!-- yield:low -->
- Low-yield extras: P-waves vs S-waves in earthquakes; the exact temperature coefficient of the speed of sound in air.
<!-- /yield -->

**Next up:** the *Interference & Standing Waves* lesson, which covers superposition, path difference, beats, standing waves and resonance.`
    }
  ]
}
