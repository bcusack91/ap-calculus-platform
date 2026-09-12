import type { LessonData } from './registry'

export const opticsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-optics-mcat',
  sections: [
    {
      id: 'opt2-intro',
      type: 'text' as const,
      content: `# Light & Optics

**Part 2 of 4 — Mirrors & Image Formation**

### Plane Mirrors

A flat mirror forms an image that is **virtual** (no light actually passes through it), **upright**, **the same size**, and as far BEHIND the mirror as the object is in front. The image appears left-right reversed (what the mirror actually reverses is front-back, along its own axis — the "left-right swap" is how we describe facing our reversed self); up and down are not flipped.

### Spherical Mirrors: the Cast

- **Concave** mirror (caves in toward the object): CONVERGING; focal length positive, $f = R/2 > 0$.
- **Convex** mirror (bulges out): DIVERGING; focal length negative, $f = R/2 < 0$.

### The Mirror Equation and Magnification

$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad m = -\\frac{d_i}{d_o}$

Sign conventions (mirrors):

- $d_o > 0$ for a real object in front.
- $d_i > 0$: image IN FRONT of the mirror — **real** and (single mirror) **inverted**.
- $d_i < 0$: image BEHIND the mirror — **virtual** and **upright**.
- $|m| > 1$ enlarged, $|m| < 1$ reduced; $m < 0$ inverted, $m > 0$ upright.

The pairing never breaks for a single mirror or lens: **real goes with inverted; virtual goes with upright.**

### Concave Mirror — Three Regimes

| Object position | Image |
|---|---|
| Beyond $C$ ($d_o > 2f$) | real, inverted, REDUCED, between $f$ and $C$ |
| Between $C$ and $F$ | real, inverted, ENLARGED, beyond $C$ |
| Inside $F$ ($d_o < f$) | virtual, upright, ENLARGED (makeup / shaving mirror) |

At exactly $d_o = 2f$: real, inverted, same size at $2f$. At $d_o = f$: no image (rays exit parallel — the searchlight configuration).

### Convex Mirror — One Regime

Wherever the object stands, a convex mirror gives a **virtual, upright, reduced** image behind the mirror. The shrunken image buys a wide field of view: store-security mirrors and the passenger-side mirror ("objects are closer than they appear").`
    },
    {
      id: 'opt2-worked',
      type: 'text' as const,
      content: `### Worked Example — Concave Mirror, Object Outside the Center

An object stands $30\\;\\text{cm}$ from a concave mirror of focal length $10\\;\\text{cm}$.

**Step 1 — Mirror equation.**

$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{30} = \\frac{3}{30} - \\frac{1}{30} = \\frac{2}{30}$

so $d_i = 15\\;\\text{cm}$.

**Step 2 — Classify.** $d_i > 0$: a REAL image $15\\;\\text{cm}$ in front of the mirror, projectable onto a screen.

**Step 3 — Magnification.**

$m = -\\frac{d_i}{d_o} = -\\frac{15}{30} = -0.5$

Inverted, half size — matching the "beyond $C$" row of the table ($C = 2f = 20\\;\\text{cm}$).

### Worked Example — Convex Mirror Sanity Check

The same object stands $20\\;\\text{cm}$ from a CONVEX mirror with $|f| = 20\\;\\text{cm}$ (so $f = -20\\;\\text{cm}$).

**Step 1 — Mirror equation with signs.**

$\\frac{1}{d_i} = \\frac{1}{-20} - \\frac{1}{20} = -\\frac{2}{20} = -\\frac{1}{10}$

so $d_i = -10\\;\\text{cm}$: virtual, $10\\;\\text{cm}$ BEHIND the mirror.

**Step 2 — Magnification.**

$m = -\\frac{(-10)}{20} = +0.5$

Upright, half size — the only kind of image a convex mirror can make. On the MCAT, if a convex mirror (or diverging lens) answer choice says "real" or "inverted," eliminate it without computing.`
    },
    {
      id: 'opt2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mirrors & Image Formation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An object is $60\\;\\text{cm}$ from a concave mirror with focal length $20\\;\\text{cm}$. The image is:`,
            options: [`Real, $30\\;\\text{cm}$ in front of the mirror`, `Virtual, $30\\;\\text{cm}$ behind the mirror`, `Real, $15\\;\\text{cm}$ in front of the mirror`, `Virtual, $60\\;\\text{cm}$ behind the mirror`],
            correctAnswer: 0,
            explanation: `$1/d_i = 1/20 - 1/60 = 3/60 - 1/60 = 2/60$, so $d_i = +30\\;\\text{cm}$. Positive means real and in front — and inverted, with $m = -30/60 = -0.5$.`
          },
          {
            question: `Regardless of object position, a convex mirror always produces an image that is:`,
            options: [`Real, inverted, and enlarged`, `Real, upright, and reduced`, `Virtual, inverted, and enlarged`, `Virtual, upright, and reduced`],
            correctAnswer: 3,
            explanation: `Diverging optics cannot bring rays to a real focus from a real object: image is always virtual (behind), upright, and smaller — which is what makes wide-view security mirrors work.`
          },
          {
            question: `A magnification of $m = -2$ means the image is:`,
            options: [`Virtual and reduced`, `Inverted and twice the object's size`, `Upright and twice the object's size`, `Behind the mirror`],
            correctAnswer: 1,
            explanation: `The sign carries orientation (negative = inverted), the magnitude carries size ($|m| = 2$ = doubled). For a single mirror, inverted also implies real and in front.`
          },
          {
            question: `A spherical mirror has a radius of curvature of $40\\;\\text{cm}$. Its focal length has magnitude:`,
            options: [`$40\\;\\text{cm}$`, `$80\\;\\text{cm}$`, `$20\\;\\text{cm}$`, `$10\\;\\text{cm}$`],
            correctAnswer: 2,
            explanation: `$f = R/2 = 20\\;\\text{cm}$ — positive if the mirror is concave, negative if convex. The center of curvature sits at $R = 2f$.`
          },
          {
            question: `To see an ENLARGED, UPRIGHT view of your face, you should hold a concave mirror:`,
            options: [`Closer than its focal point`, `Exactly at its center of curvature`, `Beyond its center of curvature`, `You cannot — only convex mirrors magnify`],
            correctAnswer: 0,
            explanation: `Inside the focal point, a concave mirror acts as a magnifier: virtual, upright, enlarged image behind the glass — the makeup-mirror regime. Beyond $F$ the image flips (real and inverted); convex mirrors only SHRINK.`
          }
        ]
      }
    },
    {
      id: 'opt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Plane mirror: virtual, upright, same size, equal distance behind
- $f = R/2$; concave converging ($f > 0$), convex diverging ($f < 0$)
- $1/f = 1/d_o + 1/d_i$, $m = -d_i/d_o$; $d_i > 0$ real and in front, $d_i < 0$ virtual and behind
- Real pairs with inverted; virtual pairs with upright — always, for single elements
- Concave: three regimes by object position; inside $F$ = upright magnifier
- Convex: always virtual, upright, reduced — wide field of view`
    }
  ]
};
