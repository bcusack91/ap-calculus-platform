import type { LessonData } from './registry'

export const opticsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-optics-mcat',
  sections: [
    {
      id: 'opt1-intro',
      type: 'text' as const,
      content: `# Light & Optics

**Part 1 of 4 — Light, Reflection & Refraction**

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

(air $\\approx 1.00$, water $1.33$, glass $\\approx 1.5$, diamond $2.4$). Crossing a boundary, the FREQUENCY never changes — it is set by the source. The wavelength shrinks instead: $\\lambda_{medium} = \\lambda_{vacuum}/n$.

### Snell's Law

$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$

- Into a DENSER medium ($n_2 > n_1$): the ray bends TOWARD the normal (slows down, straightens up).
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

A ray in air strikes a glass block ($n = 1.5$) at $30^\\circ$ from the normal. Find the refraction angle.

**Step 1 — Snell.**

$(1.00)\\sin 30^\\circ = (1.5)\\sin\\theta_2$

**Step 2 — Solve.**

$\\sin\\theta_2 = \\frac{0.5}{1.5} = 0.33 \\quad\\Rightarrow\\quad \\theta_2 \\approx 19^\\circ$

Bent toward the normal ($19^\\circ < 30^\\circ$), as entering a denser medium demands. Exiting the far parallel face, the ray bends back to $30^\\circ$ — displaced sideways but parallel to its original path.

### Worked Example — The Critical Angle of an Optical Fiber

Light travels inside glass ($n = 1.5$) toward a boundary with air. At what angles is it trapped?

**Step 1 — Critical angle.**

$\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1.00}{1.5} = 0.67 \\quad\\Rightarrow\\quad \\theta_c \\approx 42^\\circ$

**Step 2 — Interpret.** Any ray meeting the wall at MORE than $42^\\circ$ from the normal (a glancing hit) reflects totally, losing nothing; a fiber's gentle curves keep every bounce beyond critical, so the beam ricochets down kilometers of glass — or around the bends of an endoscope.

**Step 3 — Discrimination check.** Could light going from air INTO glass totally reflect? Never: entering a denser medium bends rays toward the normal, so the refracted ray always exists. TIR is strictly a dense-to-rare phenomenon.`
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
            explanation: `$v = c/n = (3 \\times 10^8)/1.5 = 2 \\times 10^8\\;\\text{m/s}$. Nothing exceeds $c$, which rules out $4.5 \\times 10^8$ instantly.`
          },
          {
            question: `When light passes from air into water, the quantity that does NOT change is its:`,
            options: [`Wavelength`, `Frequency`, `Speed`, `Direction (for oblique incidence)`],
            correctAnswer: 1,
            explanation: `Frequency is fixed by the oscillating source. Speed drops by the factor $n$, wavelength shrinks with it ($\\lambda = \\lambda_0/n$), and an oblique ray bends.`
          },
          {
            question: `A light ray entering a medium with a HIGHER index of refraction bends:`,
            options: [`Toward the normal`, `Away from the normal`, `Along the surface`, `Not at all, regardless of angle`],
            correctAnswer: 0,
            explanation: `Denser medium, slower light, ray closer to the normal — Snell's law with $n_2 > n_1$ forces $\\sin\\theta_2 < \\sin\\theta_1$. (No bending happens only for head-on, $\\theta_1 = 0$, incidence.)`
          },
          {
            question: `Total internal reflection can occur only when light travels:`,
            options: [`Between any two media at a large enough angle`, `From a lower-$n$ medium toward a higher-$n$ medium`, `From a higher-$n$ medium toward a lower-$n$ medium, beyond the critical angle`, `Perpendicular to the boundary between two media`],
            correctAnswer: 2,
            explanation: `Both conditions are required: dense-to-rare travel (so the refracted ray bends AWAY from the normal) and incidence beyond $\\theta_c$. Rare-to-dense always produces a refracted ray.`
          },
          {
            question: `The critical angle for light traveling from water ($n = 1.33$) into air is closest to:`,
            options: [`$41^\\circ$`, `$49^\\circ$`, `$90^\\circ$`, `$30^\\circ$`],
            correctAnswer: 1,
            explanation: `$\\sin\\theta_c = 1/1.33 = 0.75$, and $\\sin 49^\\circ \\approx 0.75$. (About $41^\\circ$ is the GLASS-to-air critical angle, where $\\sin\\theta_c = 1/1.5 = 0.67$.)`
          }
        ]
      }
    },
    {
      id: 'opt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Light: transverse EM wave; $c = f\\lambda$; energy up with frequency (radio lowest, gamma highest)
- Reflection: $\\theta_i = \\theta_r$, angles always from the normal
- $n = c/v$; crossing media, frequency fixed, wavelength and speed scale down by $n$
- Snell: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; denser = toward normal
- TIR: dense to rare only, beyond $\\sin\\theta_c = n_2/n_1$ — fiber optics, endoscopes
- Dispersion: $n$ grows toward violet, so prisms bend violet most`
    }
  ]
};
