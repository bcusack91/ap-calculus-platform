import type { LessonData } from './registry'

export const opticsMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-optics-mcat',
  sections: [
    {
      id: 'opt4-strategy',
      type: 'text' as const,
      content: `# Light & Optics

**Part 4 of 4 — MCAT Integration: Wave Optics & Passage Strategy**

Geometric optics treats light as rays; wave optics is what happens when light meets structures comparable to its wavelength. The MCAT tests both — and the judgment of which model applies.

### Diffraction — Light Bends Around Edges

Passing through a slit, light spreads. The spreading is dramatic when the slit width is comparable to $\\lambda$ and negligible when the opening is huge by comparison — why sound (meter wavelengths) bends around doorways but light (half a micron) seems to travel in straight lines. Diffraction sets the resolution limit of microscopes: you cannot resolve detail much smaller than the wavelength used. Electron microscopes win by using far shorter effective wavelengths.

### Interference — Waves Add

Two coherent waves meeting:

- Path difference $= m\\lambda$ ($m = 0, 1, 2, \\ldots$): crest meets crest — **constructive**, bright.
- Path difference $= (m + \\frac{1}{2})\\lambda$: crest meets trough — **destructive**, dark.

**Young's double slit** (slit separation $d$, angle $\\theta$ to a bright fringe):

$d\\sin\\theta = m\\lambda \\quad (\\text{bright fringes})$

Longer wavelength or narrower slit spacing → wider fringe spread. The pattern is the proof that light is a wave; thin-film soap-bubble colors are the same interference with path difference set by film thickness.

### Polarization — the Transverse Fingerprint

Only TRANSVERSE waves can be polarized (their oscillation has a sideways direction to filter). Polarizers pass one plane of oscillation; two polarizers crossed at $90^\\circ$ pass nothing. Sound — longitudinal — can never be polarized. Optically active molecules (chiral sugars, amino acids) rotate the plane of polarized light: the bridge to your biochemistry deck.

### Passage Strategy — the Optics Playbook

1. **Choose the model first.** Image locations and magnification: ray model, lens/mirror equation. Fringes, resolution limits, iridescence: wave model.
2. **Signs before algebra.** Diverging elements (convex mirror, concave lens): $f < 0$ and the image MUST be virtual, upright, reduced — eliminate contradicting choices without computing.
3. **Real = inverted = opposite side (lens) / same side (mirror).** Virtual = upright. Any answer choice pairing "real" with "upright" for a single element is wrong.
4. **Multi-lens systems** (microscope, telescope, corrective lens + eye): march left to right — the image of lens 1 is the OBJECT of lens 2. Total magnification multiplies: $m = m_1 m_2$.
5. **Estimate with clean fractions.** Optics arithmetic is reciprocals of small integers; get common denominators, never decimals.`
    },
    {
      id: 'opt4-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Double-Slit Experiment (Passage Style)

Monochromatic light through slits $d = 2\\;\\mu\\text{m}$ apart puts the first bright fringe ($m = 1$) at $\\sin\\theta = 0.25$. What is the wavelength — and what happens with red vs. blue light?

**Step 1 — Solve the fringe condition.**

$\\lambda = \\frac{d\\sin\\theta}{m} = (2 \\times 10^{-6})(0.25) = 5 \\times 10^{-7}\\;\\text{m} = 500\\;\\text{nm}$

Green — comfortably visible, a built-in sanity check.

**Step 2 — Predict the color trend.** $\\sin\\theta = m\\lambda/d$: red (longer $\\lambda$) pushes fringes FARTHER apart; blue pulls them tighter. White light gives a central white fringe with rainbow-edged side fringes, red outermost.

**Step 3 — Knob check.** Halving $d$ doubles $\\sin\\theta$ — narrower slit spacing spreads the pattern. Filling the apparatus with water ($\\lambda$ shrinks by $n$) compresses it.

### Worked Example — Two Lenses in Series

Light from an object $30\\;\\text{cm}$ left of lens 1 ($f_1 = +10\\;\\text{cm}$); lens 2 ($f_2 = +5\\;\\text{cm}$) stands $20\\;\\text{cm}$ right of lens 1.

**Step 1 — Lens 1.** $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30}$, so $d_i = +15\\;\\text{cm}$: real image $15\\;\\text{cm}$ right of lens 1, $m_1 = -\\frac{15}{30} = -\\frac{1}{2}$.

**Step 2 — Feed lens 2.** That image sits $20 - 15 = 5\\;\\text{cm}$ LEFT of lens 2: a real object at $d_o = 5\\;\\text{cm} = f_2$.

**Step 3 — Lens 2.** Object at the focal point → rays emerge PARALLEL; the final image is at infinity, ideal for a relaxed eye — this is how eyepieces are positioned in microscopes and telescopes.`
    },
    {
      id: 'opt4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Wave Optics** 🎯`,
      exercise: {
        questions: [
          {
            question: `The fact that light can be polarized demonstrates that light waves are:`,
            options: [`Longitudinal`, `Transverse`, `Faster than sound`, `Composed of photons`],
            correctAnswer: 1,
            explanation: `Polarization filters a sideways oscillation direction — something only transverse waves possess. Longitudinal waves like sound have no plane to select and cannot be polarized.`
          },
          {
            question: `In a double-slit experiment, switching to light of LONGER wavelength causes the bright fringes to:`,
            options: [`Move closer together`, `Stay fixed`, `Spread farther apart`, `Vanish entirely`],
            correctAnswer: 2,
            explanation: `$\\sin\\theta = m\\lambda/d$: bigger $\\lambda$, bigger angles. Red light spreads more than blue — the same reason red sits on the outside of each side fringe with white light.`
          },
          {
            question: `Two coherent waves interfere constructively when their path difference equals:`,
            options: [`A whole number of wavelengths`, `An odd number of half-wavelengths`, `A quarter wavelength`, `Any difference, provided the amplitudes match`],
            correctAnswer: 0,
            explanation: `Path difference $m\\lambda$ delivers crest-on-crest. Odd half-wavelength offsets ($\\lambda/2$, $3\\lambda/2$, ...) put crest on trough — destructive, the dark fringes.`
          },
          {
            question: `Slits separated by $1\\;\\mu\\text{m}$ produce a first-order ($m = 1$) bright fringe at $30^\\circ$. The wavelength is:`,
            options: [`$250\\;\\text{nm}$`, `$1000\\;\\text{nm}$`, `$2000\\;\\text{nm}$`, `$500\\;\\text{nm}$`],
            correctAnswer: 3,
            explanation: `$\\lambda = d\\sin\\theta/m = (10^{-6})(0.5)/1 = 5 \\times 10^{-7}\\;\\text{m} = 500\\;\\text{nm}$ — visible green, a plausibility check the MCAT rewards.`
          },
          {
            question: `Sound waves cannot be polarized because they:`,
            options: [`Travel too slowly`, `Are longitudinal waves`, `Have wavelengths that are too long`, `Require a denser medium than light`],
            correctAnswer: 1,
            explanation: `Sound oscillates ALONG its travel direction; with no transverse component, there is no oscillation plane for a polarizer to select. Speed, wavelength, and medium are irrelevant to polarizability.`
          }
        ]
      }
    },
    {
      id: 'opt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Ray model for images; wave model for fringes, resolution, and iridescence — choose before computing
- Diffraction matters when openings are of order $\\lambda$; it caps microscope resolution near the wavelength
- Interference: path difference $m\\lambda$ bright, $(m + \\frac{1}{2})\\lambda$ dark; double slit $d\\sin\\theta = m\\lambda$
- Longer $\\lambda$ or smaller $d$ = wider fringe pattern
- Polarization = transverse-only; crossed polarizers block all; chiral molecules rotate the plane
- Multi-lens systems: image of one is the object of the next; magnifications multiply; object at focus → image at infinity`
    }
  ]
};
