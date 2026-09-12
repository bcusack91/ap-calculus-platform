import type { LessonData } from './registry'

export const opticsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-optics-mcat',
  sections: [
    {
      id: 'opt3-intro',
      type: 'text' as const,
      content: `# Light & Optics

**Part 3 of 4 — Thin Lenses, Diopters & the Eye**

### Lens Types

- **Converging** (convex, thicker in the middle): $f > 0$. Brings parallel rays to a real focus.
- **Diverging** (concave, thinner in the middle): $f < 0$. Spreads parallel rays as if from a virtual focus.

Note the vocabulary flip from mirrors: the CONVEX lens is the converging one.

### Thin-Lens Equation

Same machinery as mirrors:

$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad m = -\\frac{d_i}{d_o}$

Sign convention for lenses: a REAL image ($d_i > 0$) forms on the **far side** of the lens from the object (light passes through), and is inverted. A virtual image ($d_i < 0$) appears on the object's own side, upright. The object-position regimes mirror the concave-mirror table exactly:

- $d_o > 2f$: real, inverted, reduced (the camera).
- $2f > d_o > f$: real, inverted, enlarged (the projector).
- $d_o < f$: virtual, upright, ENLARGED — the magnifying glass.
- Diverging lens: ALWAYS virtual, upright, reduced (like the convex mirror).

### Lens Power — Diopters

$P = \\frac{1}{f\\;(\\text{in meters})}$

in **diopters** (D). Strong lens = short focal length = high power. For thin lenses in CONTACT, powers simply add:

$P_{total} = P_1 + P_2 + \\cdots$

This additivity is why prescriptions are written in diopters.

### The Eye as a Lens System

Cornea plus crystalline lens (about $+60$ D combined, cornea doing most of it) form a REAL, INVERTED image on the retina; the brain re-inverts. **Accommodation**: ciliary muscles round the lens to add power for near objects.

- **Myopia** (nearsighted): eye too long or optics too strong — distant objects focus IN FRONT of the retina. Fix: DIVERGING lens (negative power) to back the focus up.
- **Hyperopia** (farsighted): eye too short — near objects focus BEHIND the retina. Fix: CONVERGING lens (positive power).
- **Presbyopia**: the aging lens stiffens and accommodation fades — reading glasses (converging), even for the emmetrope.

Memory anchor: the SIGN of the prescription names the problem — negative diopters = myopia, positive = hyperopia/presbyopia.`
    },
    {
      id: 'opt3-worked',
      type: 'text' as const,
      content: `### Worked Example — Projector Geometry

An object sits $15\\;\\text{cm}$ from a converging lens of focal length $10\\;\\text{cm}$.

**Step 1 — Locate the image.**

$\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3}{30} - \\frac{2}{30} = \\frac{1}{30}$

so $d_i = +30\\;\\text{cm}$: real, on the far side, projectable.

**Step 2 — Magnification.**

$m = -\\frac{30}{15} = -2$

Inverted and doubled — the projector regime ($f < d_o < 2f$), which is why slides are loaded upside down.

**Step 3 — Slide the object inside $f$.** At $d_o = 5\\;\\text{cm}$: $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{5} = -\\frac{1}{10}$, so $d_i = -10\\;\\text{cm}$ and $m = +2$ — virtual, upright, doubled: the same lens is now a magnifying glass.

### Worked Example — Writing a Prescription

A myopic patient's far point is $50\\;\\text{cm}$: anything beyond that blurs. What contact lens fixes distance vision?

**Step 1 — The job.** The lens must take an object at infinity and image it at the patient's far point, $50\\;\\text{cm}$ on the same side (virtual): $d_o = \\infty$, $d_i = -0.5\\;\\text{m}$.

**Step 2 — Thin lens.**

$\\frac{1}{f} = \\frac{1}{\\infty} + \\frac{1}{-0.5} = -2\\;\\text{D}$

**Step 3 — Read it.** $P = -2\\;\\text{D}$ ($f = -0.5\\;\\text{m}$): a diverging lens, negative power — exactly the sign myopia demands. A $+2$ D answer choice is the trap for the farsighted case.`
    },
    {
      id: 'opt3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Thin Lenses, Diopters & the Eye** 🎯`,
      exercise: {
        questions: [
          {
            question: `A converging lens has a focal length of $25\\;\\text{cm}$. Its power is:`,
            options: [`$+25\\;\\text{D}$`, `$+0.04\\;\\text{D}$`, `$+4\\;\\text{D}$`, `$-4\\;\\text{D}$`],
            correctAnswer: 2,
            explanation: `Convert to meters first: $P = 1/f = 1/0.25 = +4\\;\\text{D}$. Forgetting the unit conversion gives $0.04$; the sign is positive because the lens converges.`
          },
          {
            question: `Nearsightedness (myopia) is corrected with:`,
            options: [`A diverging lens of negative power`, `A converging lens of positive power`, `A plane mirror`, `A lens of zero power but high index`],
            correctAnswer: 0,
            explanation: `The myopic eye focuses distant light in FRONT of the retina; a diverging (minus) lens weakens the system so the focus lands on the retina. Converging lenses correct hyperopia and presbyopia.`
          },
          {
            question: `An object placed at exactly TWICE the focal length of a converging lens forms an image that is:`,
            options: [`Virtual, upright, and enlarged`, `Real, inverted, and the same size, at $2f$ on the other side`, `Real, upright, and reduced, at $f$`, `At infinity`],
            correctAnswer: 1,
            explanation: `$1/d_i = 1/f - 1/2f = 1/2f$ gives $d_i = 2f$ and $m = -1$: same size, flipped, symmetric about the lens. (At $d_o = f$ the rays exit parallel — image at infinity.)`
          },
          {
            question: `Used as a magnifying glass, a converging lens must hold the object:`,
            options: [`Beyond $2f$`, `Between $f$ and $2f$`, `At exactly $2f$`, `Closer to the lens than $f$`],
            correctAnswer: 3,
            explanation: `Inside the focal length the lens cannot form a real image; instead it yields a virtual, UPRIGHT, enlarged one on the object's side — the only upright option a single converging lens offers.`
          },
          {
            question: `Two thin lenses in contact have powers $+3\\;\\text{D}$ and $-1\\;\\text{D}$. The focal length of the combination is:`,
            options: [`$2\\;\\text{m}$`, `$0.33\\;\\text{m}$`, `$0.5\\;\\text{m}$`, `$4\\;\\text{m}$`],
            correctAnswer: 2,
            explanation: `Powers add for lenses in contact: $P = 3 - 1 = +2\\;\\text{D}$, so $f = 1/P = 0.5\\;\\text{m}$. Working in focal lengths directly would require reciprocals — diopters exist to avoid that.`
          }
        ]
      }
    },
    {
      id: 'opt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Convex lens converges ($f > 0$), concave diverges ($f < 0$) — vocabulary flipped from mirrors
- Same equations: $1/f = 1/d_o + 1/d_i$, $m = -d_i/d_o$; real images on the FAR side for lenses
- Regimes: beyond $2f$ camera, $f$ to $2f$ projector, inside $f$ magnifier; diverging = always virtual upright reduced
- $P = 1/f$ (meters) in diopters; contact lenses stack by adding powers
- Eye about $+60$ D; accommodation adds near power
- Myopia → minus (diverging) lenses; hyperopia/presbyopia → plus (converging)`
    }
  ]
};
