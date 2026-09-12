export const mcatMechFluidsWavesPart3Data = {
  topicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  sections: [
    {
      id: 'flw3-intro',
      type: 'text' as const,
      content: `# Fluids & Waves

**Part 3 of 4 — Waves & Sound: Standing Waves, Decibels & Doppler**

### The Wave Equation and Who Controls What

$v = f\\lambda$

The **medium** sets the speed (string tension and mass density; air temperature for sound). The **source** sets the frequency. Wavelength is the negotiated result. So when a wave crosses into a new medium, **frequency stays fixed** while speed and wavelength change together — the single most-tested wave fact.

Sound is **longitudinal** (compressions along the travel direction, ~$343\\;\\text{m/s}$ in air, faster in liquids and solids); light and waves on strings are **transverse**.

### Superposition and Standing Waves

Overlapping waves add. In phase: constructive (bigger). Out of phase: destructive (cancellation). Two identical waves traveling opposite directions build a **standing wave** with fixed **nodes** (no motion) and **antinodes** (maximum motion).

| System | Harmonics | Frequencies |
|---|---|---|
| String fixed both ends; pipe open both ends | ALL: $n = 1, 2, 3, ...$ | $f_n = \\frac{nv}{2L}$ |
| Pipe closed at ONE end | ODD only: $n = 1, 3, 5, ...$ | $f_n = \\frac{nv}{4L}$ |

The closed pipe hides two traps: its fundamental is an octave LOWER than an open pipe of the same length ($4L$ vs $2L$ wavelength), and even harmonics simply do not exist for it.

### Intensity vs. Sound Level (Do Not Conflate)

Intensity $I$ (in $\\text{W/m}^2$) is physical power per area, falling off as $1/r^2$ from a point source. Sound LEVEL $\\beta$ is the logarithmic decibel scale:

$\\beta = 10\\log\\frac{I}{I_0}, \\qquad I_0 = 10^{-12}\\;\\text{W/m}^2$

Every $+10\\;\\text{dB}$ means intensity $\\times 10$. So $+20\\;\\text{dB}$ is $\\times 100$, $+30\\;\\text{dB}$ is $\\times 1000$; doubling intensity adds only about $3\\;\\text{dB}$.

### Doppler: Relative Approach Raises Pitch

$f_{obs} = f_{src}\\,\\frac{v \\pm v_{obs}}{v \\mp v_{src}}$

Sign ritual: choose each sign so that **approach raises** $f_{obs}$ **and recession lowers it** — top sign for approach in both numerator and denominator. A moving SOURCE physically compresses the wavelength ahead of it; a moving OBSERVER meets wavefronts more often but leaves $\\lambda$ untouched.`
    },
    {
      id: 'flw3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Closed Organ Pipe

A pipe $0.85\\;\\text{m}$ long is closed at one end ($v_{sound} = 340\\;\\text{m/s}$).

**Step 1 — Fundamental.** A closed pipe fits a quarter wavelength: $\\lambda_1 = 4L = 3.4\\;\\text{m}$.

$f_1 = \\frac{v}{4L} = \\frac{340}{3.4} = 100\\;\\text{Hz}$

**Step 2 — Next harmonic.** Closed pipes skip even harmonics, so the next is the THIRD: $f_3 = 3f_1 = 300\\;\\text{Hz}$. (An open pipe of the same length would give $f_1 = 200\\;\\text{Hz}$ with the full series $200, 400, 600, ...$)

### Worked Example — Decibel Arithmetic Without a Calculator

A monitor alarm measures $40\\;\\text{dB}$ at a nurse's station and $70\\;\\text{dB}$ beside the patient.

$\\Delta\\beta = 30\\;\\text{dB} \\Rightarrow \\frac{I_2}{I_1} = 10^{30/10} = 10^3 = 1000$

Thirty decibels is three factors of ten. Never treat dB differences as ratios ($70/40$) — the scale is logarithmic.

### Worked Example — Doppler Direction Check

An ambulance siren at $600\\;\\text{Hz}$ approaches a stationary pedestrian at $34\\;\\text{m/s}$ ($v = 340\\;\\text{m/s}$):

$f_{obs} = 600\\,\\frac{340}{340 - 34} = 600\\,\\frac{340}{306} \\approx 667\\;\\text{Hz}$

Approach, so the answer must exceed $600$ — the minus sign in the denominator is chosen to make that happen. After it passes, the denominator flips to $374$ and the pitch drops to about $545\\;\\text{Hz}$: the classic drive-by pitch fall.`
    },
    {
      id: 'flw3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Waves & Sound** 🎯`,
      exercise: {
        questions: [
          {
            question: `A sound's level increases by $20\\;\\text{dB}$. Its intensity has increased by a factor of:`,
            options: [`$100$`, `$20$`, `$2$`, `$10$`],
            correctAnswer: 0,
            explanation: `Each $10\\;\\text{dB}$ is a factor of $10$ in intensity, so $20\\;\\text{dB}$ is $10 \\times 10 = 100$. Reading dB changes as linear multipliers is the classic error.`
          },
          {
            question: `A pipe closed at one end can sustain which harmonics of its fundamental frequency?`,
            options: [`All integer harmonics`, `Even harmonics only`, `Odd harmonics only`, `Only the fundamental`],
            correctAnswer: 2,
            explanation: `The closed end must be a node and the open end an antinode, which only quarter-wavelength-odd-multiples satisfy: $f, 3f, 5f, ...$ Open-open (and string) systems support the full series.`
          },
          {
            question: `An ambulance drives toward a stationary observer with its siren on. Compared with the emitted frequency, the observer hears:`,
            options: [`A lower frequency, because the waves stretch out`, `A higher frequency, because wavefronts ahead of the source are compressed`, `The same frequency, but louder`, `A higher frequency, because the sound travels faster`],
            correctAnswer: 1,
            explanation: `The moving source chases its own wavefronts, shortening the wavelength ahead; with $v$ fixed by the air, $f = v/\\lambda$ rises. The speed of sound itself does not change — that distractor is the tested misconception.`
          },
          {
            question: `A water wave travels at $20\\;\\text{m/s}$ with a wavelength of $4\\;\\text{m}$. Its frequency is:`,
            options: [`$80\\;\\text{Hz}$`, `$0.2\\;\\text{Hz}$`, `$24\\;\\text{Hz}$`, `$5\\;\\text{Hz}$`],
            correctAnswer: 3,
            explanation: `$f = v/\\lambda = 20/4 = 5\\;\\text{Hz}$. Multiplying gives $80$; inverting the ratio gives $0.2$ — both are planted.`
          },
          {
            question: `When a sound wave passes from air into water, the quantity that remains unchanged is its:`,
            options: [`Wavelength`, `Frequency`, `Speed`, `Both speed and wavelength`],
            correctAnswer: 1,
            explanation: `Frequency is set by the source and cannot change at a boundary (wavefronts would pile up). Sound speeds up in water, so $\\lambda = v/f$ stretches proportionally.`
          }
        ]
      }
    },
    {
      id: 'flw3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $v = f\\lambda$: medium sets speed, source sets frequency; crossing media changes $v$ and $\\lambda$, never $f$
- Standing waves: strings and open pipes give all harmonics ($nv/2L$); closed pipes give odd only ($nv/4L$)
- A closed pipe's fundamental is an octave below an equal-length open pipe's
- Decibels are logarithmic: $+10\\;\\text{dB} = \\times 10$ intensity; doubling intensity adds about $3\\;\\text{dB}$
- Intensity falls as $1/r^2$ from a point source
- Doppler: approach raises pitch, recession lowers it; pick the formula's signs to enforce that`
    }
  ]
};
