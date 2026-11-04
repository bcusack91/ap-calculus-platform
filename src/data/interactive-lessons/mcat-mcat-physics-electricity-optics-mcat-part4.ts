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

**Single slit** (width $a$): the DARK fringes sit at $a\\sin\\theta = m\\lambda$ ($m = 1, 2, \\ldots$), so a narrower slit gives a wider central maximum. Note the contrast: the double-slit formula below marks BRIGHT fringes.

### Interference — Waves Add

Light obeys the same superposition rules that the *Waves & Interference* lesson applied to sound. Two coherent waves meeting:

- Path difference $= m\\lambda$ ($m = 0, 1, 2, \\ldots$): crest meets crest — **constructive**, bright.
- Path difference $= (m + \\frac{1}{2})\\lambda$: crest meets trough — **destructive**, dark.

**Young's double slit** (slit separation $d$, angle $\\theta$ to a bright fringe):

$d\\sin\\theta = m\\lambda \\quad (\\text{bright fringes})$

Longer wavelength or narrower slit spacing → wider fringe spread. The pattern is the proof that light is a wave; thin-film soap-bubble colors are the same interference with path difference set by film thickness.

<!-- yield:low -->
Extras: reflection off a higher-$n$ layer adds a half-wavelength phase flip, which decides which film thicknesses look bright; a diffraction grating (many slits) obeys the same $d\\sin\\theta = m\\lambda$ with much sharper fringes; X-ray diffraction from DNA fibres revealed its helical structure.
<!-- /yield -->

### Polarization — the Transverse Fingerprint

Only TRANSVERSE waves can be polarized (their oscillation has a sideways direction to filter). Polarizers pass one plane of oscillation. Unpolarized light keeps half its intensity, $I_0/2$, through one polarizer; polarized light meeting a polarizer at angle $\\theta$ passes $I = I_0\\cos^2\\theta$ (Malus's law), so two polarizers crossed at $90^\\circ$ pass nothing. (In circular polarization the field direction rotates as the wave travels, still transverse.) Sound — longitudinal — can never be polarized. Optically active molecules (chiral sugars, amino acids) rotate the plane of polarized light: the bridge to the *Stereochemistry* lesson.

### Passage Strategy — the Optics Playbook

1. **Choose the model first.** Image locations and magnification: ray model, lens/mirror equation. Fringes, resolution limits, iridescence: wave model.
2. **Multi-lens systems** (microscope, telescope, corrective lens + eye): march left to right — the image of lens 1 is the OBJECT of lens 2. Total magnification multiplies: $m = m_1 m_2$.
3. **Estimate with clean fractions.** Optics arithmetic is reciprocals of small integers; get common denominators, never decimals.`
    },
    {
      id: 'opt4-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Double-Slit Experiment (Passage Style)

**Problem.** Monochromatic light through slits $d = 2\\;\\mu\\text{m}$ apart puts the first bright fringe ($m = 1$) at $\\sin\\theta = 0.25$.

- **(a)** What is the wavelength?
- **(b)** How would the pattern change for red light, for blue light, and for white light?
- **(c)** What happens to the pattern if $d$ is halved, or if the apparatus is filled with water?

**(a) Solve the fringe condition.** $\\lambda = \\frac{d\\sin\\theta}{m} = (2 \\times 10^{-6})(0.25) = 5 \\times 10^{-7}\\;\\text{m} = 500\\;\\text{nm}$. Green, comfortably visible: a built-in sanity check.

**(b) Predict the color trend.** $\\sin\\theta = m\\lambda/d$: red (longer $\\lambda$) pushes fringes FARTHER apart; blue pulls them tighter. White light gives a central white fringe with rainbow-edged side fringes, red outermost.

**(c) Knob check.** Halving $d$ doubles $\\sin\\theta$, so narrower slit spacing spreads the pattern. Filling the apparatus with water shrinks $\\lambda$ by the factor $n$, which compresses it.

### Worked Example — Two Lenses in Series

**Problem.** An object sits $30\\;\\text{cm}$ left of lens 1 ($f_1 = +10\\;\\text{cm}$); lens 2 ($f_2 = +5\\;\\text{cm}$) stands $20\\;\\text{cm}$ right of lens 1.

- **(a)** Where does lens 1 form its image, and with what magnification?
- **(b)** Where does that image sit relative to lens 2?
- **(c)** Where is the final image?

**(a) Lens 1.** $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30}$, so $d_i = +15\\;\\text{cm}$: a real image $15\\;\\text{cm}$ right of lens 1, with $m_1 = -\\frac{15}{30} = -\\frac{1}{2}$.

**(b) Feed lens 2.** With that image $15\\;\\text{cm}$ right of lens 1 from (a), it sits $20 - 15 = 5\\;\\text{cm}$ LEFT of lens 2: a real object at $d_o = 5\\;\\text{cm} = f_2$.

**(c) Lens 2.** An object at the focal point sends rays out PARALLEL, so the final image is at infinity, ideal for a relaxed eye (how eyepieces are set). With the final image at infinity, $m_1 m_2$ has no finite value; eyepieces are rated by angular magnification instead.`
    },
    {
      id: 'opt4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Wave Optics** 🎯`,
      exercise: {
        questions: [
          {
            question: `The fact that light can be polarized demonstrates that light waves are:`,
            options: [`Longitudinal`, `Transverse`, `Faster than sound`, `Unable to interfere with one another`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Polarization filters a sideways oscillation direction — something only transverse waves possess. Longitudinal waves like sound have no plane to select and cannot be polarized. Light's speed has nothing to do with polarization, and light interferes readily (the double slit).`
          },
          {
            question: `In a double-slit experiment, switching to light of LONGER wavelength causes the bright fringes to:`,
            options: [`Crowd together`, `Stay fixed`, `Spread farther apart`, `Vanish entirely`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\sin\\theta = m\\lambda/d$: bigger $\\lambda$, bigger angles. Red light spreads more than blue — the same reason red sits on the outside of each side fringe with white light.`
          },
          {
            question: `Two coherent waves interfere constructively when their path difference equals:`,
            options: [`A whole number of wavelengths`, `An odd number of half-wavelengths`, `A quarter wavelength`, `Any difference, provided the amplitudes match`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Path difference $m\\lambda$ delivers crest-on-crest. Odd half-wavelength offsets ($\\lambda/2$, $3\\lambda/2$, ...) put crest on trough — destructive, the dark fringes. A quarter-wavelength offset gives only partial reinforcement, and matched amplitudes decide how complete a cancellation is, not whether the waves reinforce.`
          },
          {
            question: `Slits separated by $1.2\\;\\mu\\text{m}$ produce a first-order ($m = 1$) bright fringe at $30^\\circ$. The wavelength is:`,
            options: [`$300\\;\\text{nm}$`, `$1200\\;\\text{nm}$`, `$2400\\;\\text{nm}$`, `$600\\;\\text{nm}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$\\lambda = d\\sin\\theta/m = (1.2 \\times 10^{-6})(0.5)/1 = 6 \\times 10^{-7}\\;\\text{m} = 600\\;\\text{nm}$ — visible orange, a plausibility check the MCAT rewards. $1200\\;\\text{nm}$ drops the sine, $2400\\;\\text{nm}$ divides by it instead of multiplying, and $300\\;\\text{nm}$ treats the fringe as second order.`
          },
          {
            question: `Electron microscopes resolve far finer detail than light microscopes chiefly because, compared with photons of visible light, their electrons have:`,
            options: [`A higher speed`, `A shorter wavelength`, `A greater charge`, `A larger mass`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Diffraction blurs detail much smaller than the wavelength used, and the effective wavelength of fast electrons is thousands of times shorter than visible light's. The electrons are actually slower than light, and their charge and mass, though real differences, do not set the resolution limit.`
          }
        ]
      }
    },
    {
      id: 'opt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Pick the model first.** Rays for image location and size; waves for fringes, diffraction limits and iridescence.
- **Interference conditions.** Path difference $m\\lambda$ is bright and $(m + \\frac{1}{2})\\lambda$ dark; double slit: $d\\sin\\theta = m\\lambda$.
- **Diffraction and resolution.** Spreading matters when an opening is near $\\lambda$, capping microscope resolution near the wavelength.
- **Polarization is transverse-only.** Light can be polarized, sound cannot; chiral molecules rotate plane-polarized light.

**Common traps**

- **Longer waves, tighter fringes.** $\\sin\\theta = m\\lambda/d$, so a longer wavelength or a smaller slit spacing spreads the fringes.
- **Adding magnifications.** The image of one lens is the next lens's object, and the magnifications multiply: $m = m_1 m_2$.
- **Polarizing sound.** Sound is longitudinal, so it has no sideways oscillation for a polarizer to select.
- **An image at the focal point.** An object AT the focal point forms no finite image: the rays leave parallel, imaging at infinity.

<!-- yield:low -->
- Low-yield extras: the thin-film phase flip, diffraction gratings, X-ray diffraction.
<!-- /yield -->`
    }
  ]
};
