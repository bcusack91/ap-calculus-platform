export const physics2EmInductionPart6Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei6-intro',
      type: 'text' as const,
      content: `
# 📉 Changing Fields and Magnetic Braking

**Part 6 of 7 — Changing Fields: Graphs, Nearby Currents, and Magnetic Braking**

In Part 5 the loop moved and the field stayed put. Now we hold the loop still and let the **field** change — because a magnet's strength changes, because the field reverses, or because the current that makes the field changes. We finish with magnetic braking, where Lenz's law slows a falling magnet.
      `
    },
    {
      id: 'ei6-b-graphs',
      type: 'text' as const,
      content: `
## Reading a Field-versus-Time Graph

For a stationary loop of area $A$ with the field perpendicular to it, $\\Phi = BA$, so

$$|\\varepsilon| = A\\,\\frac{|\\Delta B|}{\\Delta t} = A \\times |\\text{slope of the } B\\text{–}t \\text{ graph}|$$

- **Flat segment** → zero EMF, however large $B$ is
- **Steeper segment** → larger EMF
- **Slope changes sign** → EMF and current reverse direction

### The Sign of the Flux

Flux has a sign: it is positive when $\\vec{B}$ points along the chosen area vector and **negative** when it points the opposite way. When a field **reverses**, the flux passes through zero and changes sign.

### Worked Example

A loop of area $0.050 \\text{ m}^2$ lies in the page. Take into-page field as positive.

| Interval | What $B$ does | EMF magnitude | Current |
|----------|---------------|------------------|---------|
| 0–2 s | 0 → 0.30 T (into page) | $(0.050)(0.30/2) = 7.5 \\times 10^{-3}$ V | Counterclockwise |
| 2–4 s | steady at 0.30 T | 0 | None |
| 4–5 s | 0.30 T into → 0.30 T out of page | $(0.050)(0.60/1) = 0.030$ V | Clockwise |

**0–2 s:** into-page flux increases, so the induced field points out of the page → counterclockwise.

**4–5 s:** the into-page flux decreases, then out-of-page flux increases. **Both** changes call for an induced field into the page, so the current is clockwise the **whole** interval — including the instant when $B = 0$. Zero flux does not mean zero EMF; what matters is how fast the flux is changing. Note that the change in $B$ is $0.60$ T, not $0.30$ T.
      `
    },
    {
      id: 'ei6-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**Changing-Field Graph Check** 📈
      `,
      exercise: {
        questions: [
          {
            question: 'The field through a stationary loop rises steadily from 0 to 0.2 T over 4 s, holds at 0.2 T for 2 s, then falls steadily to 0 over 1 s. When is the induced EMF largest?',
            options: [
              'During the first 4 s',
              'During the middle 2 s',
              'During the last 1 s',
              'Equally during all three intervals'
            ],
            correctAnswer: 2,
            explanation: 'EMF follows the steepness of the $B$–$t$ graph: 0.05 T/s while rising, zero while steady, and 0.2 T/s while falling. The holding interval has the largest field but no change, so it has no EMF.'
          },
          {
            question: 'The field through a loop decreases steadily, passes through zero, and then grows in the opposite direction at the same steady rate. At the instant the field is zero, the induced EMF is:',
            options: [
              'Zero, because there is no flux at that instant',
              'The same as just before and just after',
              'At its maximum, larger than at other times',
              'Reversed compared with just before'
            ],
            correctAnswer: 1,
            explanation: 'The flux changes at one steady rate throughout, so the EMF is constant and does not reverse; it depends on the rate of change of flux, not on the flux itself. Zero flux at one instant tells you nothing about the EMF.'
          },
          {
            question: 'A long straight wire in the page carries current up the page, and a conducting loop lies to its right in the page. The current in the wire increases. Which describes the induced current in the loop and the force on the loop?',
            options: [
              'Counterclockwise; pushed away from the wire',
              'Clockwise; pulled toward the wire',
              'Counterclockwise; pulled toward the wire',
              'Clockwise; pushed away from the wire'
            ],
            correctAnswer: 0,
            explanation: 'The wire\'s field points into the page at the loop and grows, so the induced current makes an out-of-page field: counterclockwise. The loop\'s near side then carries current opposite the wire\'s current and is repelled more strongly than the far side is attracted, so the loop is pushed away, opposing the increase in flux.'
          }
        ]
      }
    },
    {
      id: 'ei6-nearby-wire',
      type: 'text' as const,
      content: `
## Induction from a Nearby Current

A long straight wire makes a field $B = \\dfrac{\\mu_0 I}{2\\pi r}$ that circles the wire and weakens with distance. A loop beside the wire can have its flux changed in several ways.

**Setup:** the wire carries current $I$ up the page; a rectangular loop lies to the right of it, in the page. There, the wire's field points **into the page**, strongest at the loop's near side.

| What happens | Into-page flux | Induced current | Force on the loop |
|--------------|----------------|-----------------|-------------------|
| $I$ increases | Increases | Counterclockwise | Pushed away from the wire |
| $I$ decreases | Decreases | Clockwise | Pulled toward the wire |
| Loop moves away (steady $I$) | Decreases (weaker field) | Clockwise | Pulled toward the wire |
| Loop moves toward the wire | Increases | Counterclockwise | Pushed away from the wire |
| Loop slides parallel to the wire | Unchanged | None | None |

### Why the Forces Point That Way

The two long sides of the loop carry opposite currents. The **near** side sits in the stronger field, so it wins:

- Near side's current **antiparallel** to the wire's → repelled → loop pushed away
- Near side's current **parallel** to the wire's → attracted → loop pulled in

Every row obeys Lenz's law: the force always opposes the change in flux — pushing the loop away when its flux grows and pulling it back when its flux shrinks.
      `
    },
    {
      id: 'ei6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Changing-Field Calculation Drill** 📐

A stationary loop of area 0.020 $m^{2}$ and resistance 0.40 Ω sits in a perpendicular field that increases steadily from 0.10 T to 0.30 T in 0.50 s.

1) Change in flux through the loop (in Wb)

2) Magnitude of the induced EMF (in V)

3) Induced current (in A)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0040', '0.0080', '0.020'],
        hint1: '$\\Delta\\Phi = A\\,\\Delta B = (0.020)(0.30 - 0.10)$.',
        hint2: '$|\\varepsilon| = |\\Delta\\Phi|/\\Delta t$ with $\\Delta t = 0.50$ s.',
        hint3: '$I = \\varepsilon/R$.',
        explanation: '$\\Delta\\Phi = (0.020)(0.20) = 0.0040$ Wb. $|\\varepsilon| = 0.0040/0.50 = 0.0080$ V. $I = 0.0080/0.40 = 0.020$ A.'
      }
    },
    {
      id: 'ei6-braking',
      type: 'text' as const,
      content: `
## Magnetic Braking

Lenz's law means induced currents always **oppose the relative motion** that causes them. That turns moving magnets and moving conductors into brakes.

### A Magnet Falling Through a Ring

Drop a bar magnet, north pole down, through a horizontal copper ring.

- **Approaching the ring:** downward flux through the ring increases → the induced current makes an upward field → the ring's top face acts as a north pole → it **repels** the magnet (force **up** on the magnet)
- **Leaving the ring below:** downward flux decreases → the induced current makes a downward field → the ring's bottom face acts as a north pole and attracts the magnet's south end above it → force **up** on the magnet again

Both times the force on the magnet is upward, so it falls with acceleration **less than $g$** near the ring.

### A Magnet Falling Down a Copper Pipe

A pipe is a stack of rings. Currents circulate around the pipe both above and below the magnet, and the braking force grows with the magnet's speed. The magnet speeds up until the braking force equals its weight, then falls at a steady **terminal speed**. Copper is not attracted to a magnet at all — the force comes entirely from induced currents.

### Where the Energy Goes

At terminal speed the magnet's kinetic energy is constant, so the gravitational potential energy it loses becomes **thermal energy** in the pipe, carried there by the induced currents ($P = I^2R$).
      `
    },
    {
      id: 'ei6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Changing Fields and Braking** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A strong magnet is dropped down a long vertical copper pipe. While it is in the pipe, how does it fall?',
            options: [
              'With an acceleration less than g',
              'With an acceleration equal to g',
              'With an acceleration greater than g',
              'At g, since copper is not attracted to magnets'
            ],
            correctAnswer: 0,
            explanation: 'The moving magnet changes the flux through the pipe, and the induced currents exert an upward force that opposes its motion, so its acceleration is less than g. Copper is not attracted to a magnet at rest, but induced currents still act on a moving one.'
          },
          {
            question: 'Once the magnet reaches terminal speed in the pipe, the gravitational potential energy it loses is converted mainly into:',
            options: [
              'Kinetic energy of the falling magnet',
              'Thermal energy in the walls of the pipe',
              'Energy stored in the copper\'s magnetization',
              'Electric potential energy of the magnet'
            ],
            correctAnswer: 1,
            explanation: 'At terminal speed the kinetic energy is constant, so the lost potential energy goes into the induced currents and is dissipated as thermal energy in the copper. Copper does not become magnetized, so no energy is stored that way.'
          }
        ]
      }
    }
  ]
}
