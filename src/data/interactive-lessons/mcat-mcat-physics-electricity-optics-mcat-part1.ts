import type { LessonData } from './registry'

export const opticsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-optics-mcat',
  sections: [
    {
      id: 'opt1-intro',
      type: 'text' as const,
      content: `# Light & Optics

**Part 1 of 4 — Light, Reflection & Refraction**

**Where this fits.** The *Waves & Interference* lesson built the wave toolkit (wavelength, frequency, superposition and interference), and *Sound, Doppler & Ultrasound* applied it to sound, a longitudinal wave that needs a medium. This lesson turns to light, a transverse wave that needs none: Part 1 covers reflection and refraction, Part 2 mirrors, Part 3 lenses and the eye, and Part 4 the wave behaviour of light.

### Light Is an Electromagnetic Wave

Light is oscillating electric and magnetic fields, perpendicular to each other and to the travel direction — a TRANSVERSE wave needing no medium. In vacuum every EM wave moves at

$c = 3 \\times 10^8\\;\\text{m/s}, \\quad c = f\\lambda$

Visible light spans roughly $400\\;\\text{nm}$ (violet) to $700\\;\\text{nm}$ (red). Energy scales with frequency ($E = hf$): the spectrum runs radio → microwave → infrared → visible → ultraviolet → X-ray → gamma, in order of increasing frequency and energy.

### Reflection

Angle of incidence equals angle of reflection, both measured from the NORMAL (the perpendicular to the surface), never from the surface itself:

$\\theta_i = \\theta_r$

### Index of Refraction

Light slows down inside matter:

$n = \\frac{c}{v} \\geq 1$

(air $\\approx 1.00$, water $1.33$, glass $\\approx 1.5$, diamond $2.4$). Crossing a boundary, the FREQUENCY never changes — it is set by the source. The wavelength shrinks instead: $\\lambda_{\\text{medium}} = \\lambda_{\\text{vacuum}}/n$.

### Snell's Law

$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$

- Into an optically denser (higher-$n$) medium ($n_2 > n_1$): the ray bends TOWARD the normal (slows down, straightens up).
- Into a less dense medium: bends AWAY from the normal.
- Hitting the boundary head-on ($\\theta_1 = 0$): no bending at all, just a speed change.

### Total Internal Reflection

Going from HIGH $n$ to LOW $n$, the refracted ray bends away from the normal — and at the **critical angle** it skims along the surface ($\\theta_2 = 90^\\circ$):

$\\sin\\theta_c = \\frac{n_2}{n_1}$

Beyond $\\theta_c$, no light escapes: it is ALL reflected back inside. Requirements: dense-to-rare travel AND incidence beyond critical. This traps light inside optical fibers — the physics of endoscopes and laparoscopic surgery.

### Dispersion

$n$ varies slightly with wavelength (higher for violet than red in glass), so a prism fans white light into a spectrum — violet bent most, red least. Same physics paints the rainbow.`
    },
    {
      id: 'opt1-worked',
      type: 'text' as const,
      content: `### Worked Example — Snell's Law into Glass

**Problem.** A ray in air strikes a glass block ($n = 1.5$) at $30^\\circ$ from the normal. The block's far face is parallel to its near face.

- **(a)** What is the refraction angle inside the glass?
- **(b)** Does the ray bend toward or away from the normal, and why?
- **(c)** At what angle does the ray leave the far face, and how does its exit path compare with its original path?

**(a) Snell's law.** $(1.00)\\sin 30^\\circ = (1.5)\\sin\\theta_2$, so $\\sin\\theta_2 = \\frac{0.5}{1.5} = 0.33$ and $\\theta_2 \\approx 19^\\circ$.

**(b) Direction.** With $\\theta_2 \\approx 19^\\circ$ from (a), smaller than $30^\\circ$, the ray bends toward the normal, as entering a denser (higher-$n$) medium demands.

**(c) Exit.** Parallel faces share the same normal direction, so the ray meets the far face at $19^\\circ$ again, and Snell's law run in reverse bends it back to $30^\\circ$: displaced sideways but parallel to its original path.

### Worked Example — The Critical Angle of an Optical Fiber

**Problem.** Light travels inside glass ($n = 1.5$) toward a boundary with air ($n = 1.00$).

- **(a)** What is the critical angle?
- **(b)** Which rays are trapped inside the glass, and how does that let a fiber carry light around bends?
- **(c)** Could light going from air INTO glass ever be totally reflected?

**(a) Critical angle.** $\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1.00}{1.5} = 0.67$, so $\\theta_c \\approx 42^\\circ$.

**(b) Trapped rays.** With $\\theta_c \\approx 42^\\circ$ from (a), any ray meeting the wall at MORE than $42^\\circ$ from the normal (a glancing hit) reflects totally, losing nothing. A fiber's gentle curves keep every bounce beyond critical, so the beam ricochets down kilometers of glass or around the bends of an endoscope.

**(c) Discrimination check.** Never: entering a denser medium bends rays toward the normal, so the refracted ray always exists. TIR is strictly a dense-to-rare phenomenon.`
    },
    {
      id: 'opt1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Light, Reflection & Refraction** 🎯`,
      exercise: {
        questions: [
          {
            question: `The speed of light in a glass with index of refraction $1.5$ is:`,
            options: [`$3 \\times 10^8\\;\\text{m/s}$`, `$4.5 \\times 10^8\\;\\text{m/s}$`, `$1.5 \\times 10^8\\;\\text{m/s}$`, `$2 \\times 10^8\\;\\text{m/s}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$v = c/n = (3 \\times 10^8)/1.5 = 2 \\times 10^8\\;\\text{m/s}$. Nothing exceeds $c$, which rules out $4.5 \\times 10^8$ instantly. $3 \\times 10^8$ ignores the slowdown entirely, and $1.5 \\times 10^8$ halves $c$ instead of dividing it by $1.5$.`
          },
          {
            question: `When light passes from air into water, the quantity that does NOT change is its:`,
            options: [`Wavelength`, `Frequency`, `Speed`, `Direction (for oblique incidence)`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Frequency is fixed by the oscillating source. Speed drops by the factor $n$, wavelength shrinks with it ($\\lambda = \\lambda_0/n$), and an oblique ray bends.`
          },
          {
            question: `A light ray entering a medium with a HIGHER index of refraction bends:`,
            options: [`Toward the normal`, `Away from the normal`, `Parallel to the surface`, `Not at all, regardless of angle`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Denser medium, slower light, ray closer to the normal — Snell's law with $n_2 > n_1$ forces $\\sin\\theta_2 < \\sin\\theta_1$. (No bending happens only for head-on, $\\theta_1 = 0$, incidence.)`
          },
          {
            question: `Total internal reflection can occur only when light travels:`,
            options: [`Between any two media at a large enough angle`, `From lower $n$ to higher $n$, at a glancing angle`, `From higher $n$ to lower $n$, past $\\theta_c$`, `From higher $n$ to lower $n$, at any angle of incidence`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Both conditions are required: dense-to-rare travel (so the refracted ray bends AWAY from the normal) and incidence beyond $\\theta_c$. Dense-to-rare travel at any angle is not enough, since below $\\theta_c$ a refracted ray still escapes; rare-to-dense travel always produces a refracted ray, whatever the angle.`
          },
          {
            question: `The critical angle for light traveling from water ($n = 1.33$) into air is closest to:`,
            options: [`$42^\\circ$`, `$49^\\circ$`, `$90^\\circ$`, `$30^\\circ$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\sin\\theta_c = 1/1.33 = 0.75$, and $\\sin 49^\\circ \\approx 0.75$. (About $42^\\circ$ is the GLASS-to-air critical angle, where $\\sin\\theta_c = 1/1.5 = 0.67$.)`
          }
        ]
      }
    },
    {
      id: 'opt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Light is a transverse EM wave.** It needs no medium, moves at $c = f\\lambda = 3 \\times 10^8\\;\\text{m/s}$, and its energy rises with frequency.
- **Reflection.** $\\theta_i = \\theta_r$, with both angles measured from the normal.
- **Refraction and Snell's law.** $n = c/v$ and $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; into higher $n$, the ray bends toward the normal.
- **Total internal reflection.** Dense to rare only, beyond $\\sin\\theta_c = n_2/n_1$; it traps light in fibers and endoscopes.

**Common traps**

- **Measuring from the surface.** Incidence, reflection and refraction angles are all measured from the normal, never the surface.
- **Frequency changing at a boundary.** The source fixes the frequency; speed and wavelength both fall by the factor $n$.
- **TIR from air into glass.** Light entering a denser medium always refracts; total internal reflection needs dense-to-rare travel.
- **Red bending most.** Glass has a higher $n$ for violet, so a prism bends violet most and red least.`
    }
  ]
};
