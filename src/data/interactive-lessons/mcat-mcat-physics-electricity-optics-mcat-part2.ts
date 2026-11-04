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

A flat mirror forms an image that is **virtual** (no light actually passes through it), **upright**, **the same size**, and as far BEHIND the mirror as the object is in front. The image appears left-right reversed; up and down are not flipped.

<!-- yield:low -->
Strictly, a plane mirror reverses front-to-back, along its own axis; the "left-right swap" is how we describe facing our reversed self.
<!-- /yield -->

### Spherical Mirrors: the Cast

- **Concave** mirror (caves in toward the object): CONVERGING; focal length positive, $f = R/2 > 0$.
- **Convex** mirror (bulges out): DIVERGING; focal length negative, $f = R/2 < 0$.
- **Principal ray 1** (any two of the three locate an image): parallel to the axis, it reflects through $F$ (from a convex mirror, as if it came from $F$ behind the glass).
- **Principal ray 2:** through $F$, it reflects parallel to the axis.
- **Principal ray 3:** through $C$, it strikes the mirror head-on and reflects back on itself.

### The Mirror Equation and Magnification

$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad m = -\\frac{d_i}{d_o}$

Sign conventions (mirrors): $d_o > 0$ for a real object in front.

- $d_i > 0$: image IN FRONT of the mirror — **real** and (single mirror) **inverted**.
- $d_i < 0$: image BEHIND the mirror — **virtual** and **upright**.
- $|m| > 1$ enlarged, $|m| < 1$ reduced; $m < 0$ inverted, $m > 0$ upright. The pairing never breaks for a single mirror: **real goes with inverted; virtual goes with upright.**

### Concave Mirror — Three Regimes

| Object position | Image |
|---|---|
| Beyond $C$ ($d_o > 2f$) | real, inverted, REDUCED, between $f$ and $C$ |
| Between $C$ and $F$ ($f < d_o < 2f$) | real, inverted, ENLARGED, beyond $C$ |
| Inside $F$ ($d_o < f$) | virtual, upright, ENLARGED (makeup / shaving mirror) |

At exactly $d_o = 2f$: real, inverted, same size at $2f$. At $d_o = f$: no image at all — where does principal ray 2 go?

### Convex Mirror — One Regime

Wherever the object stands, a convex mirror ALWAYS forms a **virtual, upright, reduced** image behind the mirror, never a magnified one — hence the passenger-side mirror's warning that "objects are closer than they appear".`
    },
    {
      id: 'opt2-worked',
      type: 'text' as const,
      content: `### Worked Example — Concave Mirror, Object Outside the Center

**Problem.** An object stands $30\\;\\text{cm}$ from a concave mirror of focal length $10\\;\\text{cm}$.

- **(a)** Where does the image form?
- **(b)** Is the image real or virtual?
- **(c)** What is the magnification, and does it match the concave-mirror table?

**(a) Mirror equation.** $\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{30} = \\frac{3}{30} - \\frac{1}{30} = \\frac{2}{30}$, so $d_i = 15\\;\\text{cm}$.

**(b) Classify.** With $d_i = +15\\;\\text{cm}$ from (a), $d_i > 0$: a REAL image $15\\;\\text{cm}$ in front of the mirror, projectable onto a screen.

**(c) Magnification.** $m = -\\frac{d_i}{d_o} = -\\frac{15}{30} = -0.5$: inverted and half size, matching the "beyond $C$" row of the table ($C = 2f = 20\\;\\text{cm}$).

### Worked Example — Convex Mirror Sanity Check

**Problem.** An object stands $20\\;\\text{cm}$ from a CONVEX mirror with $|f| = 20\\;\\text{cm}$ (so $f = -20\\;\\text{cm}$).

- **(a)** Where does the image form, and is it real or virtual?
- **(b)** What is the magnification?
- **(c)** Which image descriptions could you rule out before computing?

**(a) Mirror equation with signs.** $\\frac{1}{d_i} = \\frac{1}{-20} - \\frac{1}{20} = -\\frac{2}{20} = -\\frac{1}{10}$, so $d_i = -10\\;\\text{cm}$: virtual, $10\\;\\text{cm}$ BEHIND the mirror.

**(b) Magnification.** With $d_i = -10\\;\\text{cm}$ from (a): $m = -\\frac{(-10)}{20} = +0.5$, upright and half size.

**(c) The shortcut.** A convex (diverging) mirror always forms a virtual, upright, reduced image, never a real or magnified one. On the MCAT, if a convex-mirror answer choice says "real" or "inverted," eliminate it without computing.`
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
            yield: 'HIGH',
            explanation: `$1/d_i = 1/20 - 1/60 = 3/60 - 1/60 = 2/60$, so $d_i = +30\\;\\text{cm}$. Positive means real and in front — and inverted, with $m = -30/60 = -0.5$. The $15\\;\\text{cm}$ choice adds the reciprocals ($1/20 + 1/60 = 4/60$) instead of subtracting; the virtual choices get the sign of $d_i$ wrong.`
          },
          {
            question: `Regardless of object position, a convex mirror always produces an image that is:`,
            options: [`Real, inverted, and enlarged`, `Real, upright, and reduced`, `Virtual, inverted, and enlarged`, `Virtual, upright, and reduced`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A diverging mirror cannot bring rays to a real focus from a real object: image is always virtual (behind), upright, and smaller — which is what makes wide-view security mirrors work.`
          },
          {
            question: `A magnification of $m = -2$ means the image is:`,
            options: [`Upright and half the object's size`, `Inverted and twice the object's size`, `Upright and twice the object's size`, `Inverted and half the object's size`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The sign carries orientation (negative = inverted), the magnitude carries size ($|m| = 2$ = doubled). Reading the minus sign as "upright" or the 2 as "half" flips one of those. For a single mirror, inverted also implies real and in front.`
          },
          {
            question: `A spherical mirror has a radius of curvature of $40\\;\\text{cm}$. Its focal length has magnitude:`,
            options: [`$40\\;\\text{cm}$`, `$80\\;\\text{cm}$`, `$20\\;\\text{cm}$`, `$10\\;\\text{cm}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$f = R/2 = 20\\;\\text{cm}$ — positive if the mirror is concave, negative if convex. The center of curvature sits at $R = 2f$. $40\\;\\text{cm}$ confuses $f$ with $R$, $80\\;\\text{cm}$ doubles $R$ instead of halving it, and $10\\;\\text{cm}$ halves it twice.`
          },
          {
            question: `To see an ENLARGED, UPRIGHT view of your face, you should hold a concave mirror:`,
            options: [`Closer than its focal point`, `Exactly at its center of curvature`, `Beyond its center of curvature`, `You cannot — only convex mirrors magnify`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Inside the focal point, a concave mirror acts as a magnifier: virtual, upright, enlarged image behind the glass — the makeup-mirror regime. Beyond $F$ the image flips (real and inverted): at $C$ it is real, inverted and the same size, and beyond $C$ real, inverted and reduced. Convex mirrors only SHRINK.`
          }
        ]
      }
    },
    {
      id: 'opt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Plane mirror image.** Virtual, upright, same size, and as far behind the mirror as the object is in front.
- **Focal length and sign.** $f = R/2$: a concave mirror converges ($f > 0$), a convex mirror diverges ($f < 0$).
- **Mirror equation.** $1/f = 1/d_o + 1/d_i$, $m = -d_i/d_o$; $d_i > 0$ is real and in front, $d_i < 0$ virtual and behind.
- **Regimes by object position.** Concave: three regimes, an upright magnifier inside $F$; convex: always virtual, upright, reduced.

**Common traps**

- **Real and upright together.** For a single mirror, real always pairs with inverted and virtual with upright.
- **Convex mirrors magnifying.** A convex mirror only shrinks; an enlarged upright image needs a concave mirror inside $F$.
- **Dropping the minus on $f$.** A convex mirror's $f$ is negative; losing the sign can turn its virtual image into a "real" one.
- **Reading $m$ as size alone.** The sign of $m$ gives orientation ($m < 0$ is inverted); only $|m|$ gives the size.

<!-- yield:low -->
- Low-yield extras: why a plane mirror's "left-right" reversal is really a front-to-back reversal.
<!-- /yield -->`
    }
  ]
};
