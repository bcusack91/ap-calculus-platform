import type { LessonData } from './registry'

export const opticsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-optics-mcat',
  sections: [
    {
      id: 'opt3-intro',
      type: 'text' as const,
      content: `# Light & Optics

**Part 3 of 4 — Thin Lenses, Diopters & the Eye**

Mirrors form images by reflection; refraction forms them too, and the same two equations and the same real-inverted, virtual-upright pairing carry over.

### Lens Types

- **Converging** (convex, thicker in the middle): $f > 0$. Brings parallel rays to a real focus.
- **Diverging** (concave, thinner in the middle): $f < 0$. Spreads parallel rays as if from a virtual focus.

Note the vocabulary flip from Part 2: here the CONVEX element is the converging one. Ray diagrams use three principal rays, as in Part 2, except that the third passes straight through the middle of the lens: parallel → through the far $F$; through the near $F$ → parallel; through the middle → undeviated.

### Thin-Lens Equation

Same machinery as in Part 2:

$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad m = -\\frac{d_i}{d_o}$

Sign convention for lenses: a REAL image ($d_i > 0$) forms on the **far side** of the lens from the object (light passes through), and is inverted. A virtual image ($d_i < 0$) appears on the object's own side, upright. The object-position regimes follow Part 2's three-regime table exactly:

- $d_o > 2f$: real, inverted, reduced (the camera).
- $2f > d_o > f$: real, inverted, enlarged (the projector).
- $d_o < f$: virtual, upright, ENLARGED — the magnifying glass, used to view small print magnified.
- Diverging lens: virtual, upright, reduced (diminished) wherever the object sits.

### Lens Power — Diopters

$P = \\frac{1}{f\\;(\\text{in meters})}$

in **diopters** (D). Strong lens = short focal length = high power. For thin lenses in CONTACT, powers simply add:

$P_{\\text{total}} = P_1 + P_2 + \\cdots$

This additivity is why prescriptions are written in diopters. Real lenses fall short of the ideal: in **spherical aberration** edge rays focus closer than central rays, and in **chromatic aberration** dispersion focuses violet closer than red; both blur the image.

### The Eye as a Lens System

Cornea plus crystalline lens (about $+60$ D combined, cornea doing most of it) form a REAL, INVERTED image on the retina; the brain re-inverts. **Accommodation**: ciliary muscles contract, slackening the zonular fibers so the lens rounds up and adds power for near objects.

- **Myopia** (nearsighted): eye too long or optics too strong — distant objects focus IN FRONT of the retina. Fix: DIVERGING lens (negative power) to back the focus up.
- **Hyperopia** (farsighted): eye too short — near objects focus BEHIND the retina. Fix: CONVERGING lens (positive power).
- **Presbyopia**: the aging lens stiffens and accommodation fades — reading glasses (converging), even for the emmetrope.

Memory anchor: the SIGN of the prescription names the problem — negative diopters = myopia, positive = hyperopia/presbyopia.`
    },
    {
      id: 'opt3-worked',
      type: 'text' as const,
      content: `### Worked Example — Projector Geometry

**Problem.** An object sits $15\\;\\text{cm}$ from a converging lens of focal length $10\\;\\text{cm}$.

- **(a)** Where does the image form, and can it be projected onto a screen?
- **(b)** What is the magnification, and why are projector slides loaded upside down?
- **(c)** What image forms if the object slides in to $d_o = 5\\;\\text{cm}$?

**(a) Locate the image.** $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3}{30} - \\frac{2}{30} = \\frac{1}{30}$, so $d_i = +30\\;\\text{cm}$: real, on the far side, projectable.

**(b) Magnification.** With $d_i = 30\\;\\text{cm}$ from (a): $m = -\\frac{30}{15} = -2$. Inverted and doubled, the projector regime ($f < d_o < 2f$), which is why slides are loaded upside down.

**(c) Slide the object inside $f$.** At $d_o = 5\\;\\text{cm}$: $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{5} = -\\frac{1}{10}$, so $d_i = -10\\;\\text{cm}$ and $m = +2$: virtual, upright, doubled. The same lens is now a magnifying glass.

### Worked Example — Writing a Prescription

**Problem.** A myopic patient's far point is $50\\;\\text{cm}$: anything beyond that blurs. A contact lens must fix distance vision.

- **(a)** What must the lens do to light from a distant object?
- **(b)** What power does that require?
- **(c)** Is the lens converging or diverging, and does its sign fit myopia?

**(a) The job.** The lens must take an object at infinity and image it at the patient's far point, $50\\;\\text{cm}$ on the same side (virtual): $d_o = \\infty$, $d_i = -0.5\\;\\text{m}$.

**(b) Thin lens.** With the distances from (a): $P = \\frac{1}{f} = \\frac{1}{\\infty} + \\frac{1}{-0.5} = -2\\;\\text{D}$

**(c) Read it.** $P = -2\\;\\text{D}$ ($f = -0.5\\;\\text{m}$): a diverging lens, negative power, exactly the sign myopia demands. A $+2$ D answer choice is the trap for the farsighted case.`
    },
    {
      id: 'opt3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Thin Lenses, Diopters & the Eye** 🎯`,
      exercise: {
        questions: [
          {
            question: `A converging lens has a focal length of $25\\;\\text{cm}$. Its power is:`,
            options: [`$+25\\;\\text{D}$`, `$+0.04\\;\\text{D}$`, `$+4\\;\\text{D}$`, `$+0.25\\;\\text{D}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Convert to meters first: $P = 1/f = 1/0.25 = +4\\;\\text{D}$. Forgetting the unit conversion gives $0.04$, quoting the focal length in meters without taking the reciprocal gives $0.25$, and $25$ is the focal length in centimeters. The sign is positive because the lens converges.`
          },
          {
            question: `Nearsightedness (myopia) is corrected with:`,
            options: [`A diverging lens of negative power`, `A converging lens of positive power`, `A plane mirror`, `A lens of zero power but high index`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The myopic eye focuses distant light in FRONT of the retina; a diverging (minus) lens weakens the system so the focus lands on the retina. Converging lenses correct hyperopia and presbyopia. A lens of zero power cannot move the focus, whatever its index, and a plane mirror redirects light away from the eye rather than refocusing it.`
          },
          {
            question: `An object placed at exactly TWICE the focal length of a converging lens forms an image that is:`,
            options: [`Virtual, upright, and enlarged, on the object's side`, `Real, inverted, and the same size, at $2f$ on the other side`, `Real, upright, and reduced, between $f$ and $2f$`, `At infinity, since the rays leave the lens parallel`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$1/d_i = 1/f - 1/2f = 1/2f$ gives $d_i = 2f$ and $m = -1$: same size, flipped, symmetric about the lens. (At $d_o = f$ the rays exit parallel — image at infinity.)`
          },
          {
            question: `Used as a magnifying glass, a converging lens must hold the object:`,
            options: [`Beyond $2f$`, `Between $f$ and $2f$`, `At exactly $2f$`, `Inside $f$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Inside the focal length the lens cannot form a real image; instead it yields a virtual, UPRIGHT, enlarged one on the object's side — the only upright option a single converging lens offers.`
          },
          {
            question: `Two thin lenses in contact have powers $+3\\;\\text{D}$ and $-1\\;\\text{D}$. The focal length of the combination is:`,
            options: [`$2\\;\\text{m}$`, `$0.33\\;\\text{m}$`, `$0.5\\;\\text{m}$`, `$0.25\\;\\text{m}$`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Powers add for lenses in contact: $P = 3 - 1 = +2\\;\\text{D}$, so $f = 1/P = 0.5\\;\\text{m}$. $2\\;\\text{m}$ reads the power as the focal length, $0.33\\;\\text{m}$ ignores the diverging lens, and $0.25\\;\\text{m}$ adds the magnitudes ($3 + 1 = 4\\;\\text{D}$). Working in focal lengths directly would require reciprocals — diopters exist to avoid that.`
          }
        ]
      }
    },
    {
      id: 'opt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Lens types.** A convex lens converges ($f > 0$); a concave lens diverges ($f < 0$) and always gives virtual, upright, reduced images.
- **Camera, projector, magnifier.** Beyond $2f$: real, reduced; between $f$ and $2f$: real, enlarged; inside $f$: virtual, upright.
- **Power in diopters.** $P = 1/f$ with $f$ in meters; the powers of thin lenses in contact simply add.
- **The eye and its fixes.** The eye (about $+60$ D) accommodates for near objects; myopia takes minus lenses, hyperopia plus.

**Common traps**

- **Mirror vocabulary on lenses.** The concave MIRROR converges but so does the convex LENS; check which element is named.
- **Real image on the object's side.** A lens forms its real image ($d_i > 0$) on the far side, where the light actually goes.
- **Diopters from centimeters.** Convert $f$ to meters first: $f = 25\\;\\text{cm}$ gives $+4\\;\\text{D}$, not $+0.04\\;\\text{D}$.
- **Plus lenses for myopia.** A nearsighted eye focuses in front of the retina, so it needs negative (diverging) power.`
    }
  ]
};
