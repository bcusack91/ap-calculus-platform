import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Degrees and Radians (AP Precalculus).
 * Registry key / DB Topic.slug: 'degrees-and-radians'.
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr1-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 1 of 7 — Two Ways to Measure an Angle**

---

### Topics in This Part

| Section |
|---------|
| What an Angle Measure Really Counts |
| The Degree System |
| The Radian System |
| Why Radians Exist |

> 🔑 **Key Concept:** A degree and a radian both answer the same question — *"how much have we rotated?"* — but they use different rulers. Degrees split a full turn into $360$ equal pieces; radians measure rotation by the **arc length** swept out on a circle of radius $1$.`,
      },
      {
        id: 'dr1-what',
        type: 'text' as const,
        content: `## What an Angle Measure Counts

Picture a ray pinned at the center of a circle, sweeping counterclockwise. The **angle** records how far it has turned — not how long the ray is, not how big the circle is, just the amount of rotation.

Because rotation has no built-in unit, humans invented two:

| System | A full turn equals | One unit is… |
|--------|--------------------|--------------|
| **Degrees** | $360^\\circ$ | $\\frac{1}{360}$ of a full turn |
| **Radians** | $2\\pi$ rad | the angle whose arc length equals the radius |

Both are valid. A right angle is $90^\\circ$ **and** $\\dfrac{\\pi}{2}$ radians — same rotation, two labels.

> 💡 **Think of it like distance:** $1$ mile and $1.609$ km describe the same gap. Degrees and radians describe the same angle.`,
      },
      {
        id: 'dr1-degrees',
        type: 'text' as const,
        content: `## The Degree System

The degree is the older, more familiar unit. A full circle is divided into $360$ degrees, written $360^\\circ$.

Why $360$? The number is convenient — it's divisible by $2, 3, 4, 5, 6, 8, 9, 10, 12, \\ldots$ — so many common angles come out whole:

| Rotation | Degrees |
|----------|---------|
| Full turn | $360^\\circ$ |
| Half turn (straight line) | $180^\\circ$ |
| Quarter turn (right angle) | $90^\\circ$ |
| One-sixth turn | $60^\\circ$ |
| One-eighth turn | $45^\\circ$ |

> 💡 Degrees are great for everyday talk ("turn $90$ degrees"), but they are *arbitrary* — there's no deep reason a circle has $360$ pieces rather than $400$. Radians fix that.`,
      },
      {
        id: 'dr1-check-basic',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many degrees are in one full revolution?',
              options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', '$720^\\circ$'],
              correctAnswer: 2,
              explanation: 'A full turn all the way around a circle is $360^\\circ$ by definition. Half a turn is $180^\\circ$ and a quarter turn is $90^\\circ$.',
            },
            {
              question: 'What fraction of a full turn is $45^\\circ$?',
              options: ['$\\frac{1}{12}$', '$\\frac{1}{16}$', '$\\frac{1}{8}$', '$\\frac{1}{45}$'],
              correctAnswer: 2,
              explanation: '$\\dfrac{45}{360} = \\dfrac{1}{8}$. A $45^\\circ$ angle is exactly one-eighth of a complete revolution.',
            },
          ],
        },
      },
      {
        id: 'dr1-radians',
        type: 'text' as const,
        content: `## The Radian System

A **radian** is defined by the circle itself, not by a chosen number. Take a circle of radius $r$ and walk along its edge a distance of exactly $r$. The angle you swept out is **one radian**.

$$1 \\text{ radian} = \\text{the angle whose arc length equals the radius}$$

How many radians fit in a full circle? The full circumference is $2\\pi r$, and each radian "uses up" an arc of length $r$, so a full turn is

$$\\frac{2\\pi r}{r} = 2\\pi \\text{ radians} \\approx 6.283 \\text{ radians.}$$

That gives the master link between the two systems:

$$\\boxed{\\,2\\pi \\text{ rad} = 360^\\circ \\quad\\Longleftrightarrow\\quad \\pi \\text{ rad} = 180^\\circ\\,}$$

> 🔑 **Memorize this:** $\\pi$ radians $= 180^\\circ$. Every conversion in this lesson comes from that single equation.`,
      },
      {
        id: 'dr1-check-radians',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many radians are in one full revolution?',
              options: ['$\\pi$', '$2\\pi$', '$360$', '$180$'],
              correctAnswer: 1,
              explanation: 'The circumference $2\\pi r$ divided by the radius $r$ gives $2\\pi$ radians for a full turn. So $2\\pi$ rad $= 360^\\circ$.',
            },
            {
              question: 'One radian is the angle for which the arc length equals…',
              options: ['the diameter', 'the radius', 'the full circumference', '$\\pi$ times the radius'],
              correctAnswer: 1,
              explanation: 'By definition, $1$ radian sweeps out an arc whose length is exactly one radius. That is what makes the radian "circle-native."',
            },
          ],
        },
      },
      {
        id: 'dr1-why',
        type: 'text' as const,
        content: `## Why Radians Exist

If degrees already work, why bother? Because radians are the *natural* unit for circles, and they make later mathematics far cleaner:

- **Arc length** is just $s = r\\theta$ — no messy constants — *only* when $\\theta$ is in radians.
- **Periodic functions** like $\\sin x$ and $\\cos x$ take radians as inputs, which is why the period of $\\sin x$ is $2\\pi$.
- The **unit circle**, which you'll use all through trigonometry, is built on radians: there, arc length and angle are the same number.

> ⚠️ **Heads up:** From here on, when an angle is written with *no degree symbol* — like $\\frac{\\pi}{3}$ or $2$ — it is in **radians**. A bare number means radians; only the little $^\\circ$ means degrees.

Next up: converting fluently between the two.`,
      },
      {
        id: 'dr1-check-fill',
        type: 'input-boxes' as const,
        content: `**Fill In the Basics** 🧮

Enter just the number (no symbols).

**1)** A full turn is how many degrees? $\\,?$
**2)** A full turn is how many radians, written as a multiple of $\\pi$ (form like \`2pi\`)? $\\,?$
**3)** A straight line (half turn) is how many degrees? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['360', '2pi', '180'],
          hint1: 'All the way around a circle is $360^\\circ$.',
          hint2: 'The circumference $2\\pi r$ divided by $r$ gives $2\\pi$ radians.',
          hint3: 'Half of $360^\\circ$ is $180^\\circ$ — a straight line.',
          explanation: '1) $360^\\circ$ in a full turn.  2) $2\\pi$ radians in a full turn.  3) $180^\\circ$ in a half turn (straight line).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr2-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 2 of 7 — Converting Between Units**

---

> 🔑 **The Master Equation:** $\\pi \\text{ rad} = 180^\\circ$. To convert, multiply by a fraction equal to $1$ — either $\\dfrac{\\pi}{180^\\circ}$ or $\\dfrac{180^\\circ}{\\pi}$ — choosing the one that **cancels the unit you have**.`,
      },
      {
        id: 'dr2-deg-to-rad',
        type: 'text' as const,
        content: `## Degrees → Radians

To go *from* degrees *to* radians, multiply by $\\dfrac{\\pi}{180^\\circ}$ (degrees on the bottom cancel the degrees you start with):

$$\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\frac{\\pi}{180^\\circ}$$

### Worked Example: convert $60^\\circ$

$$60^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$$

### Worked Example: convert $270^\\circ$

$$270^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{270\\pi}{180} = \\frac{3\\pi}{2}$$

> 💡 **Shortcut:** divide the degree measure by $180$, reduce the fraction, and slap a $\\pi$ on top. $60/180 = 1/3 \\Rightarrow \\frac{\\pi}{3}$.`,
      },
      {
        id: 'dr2-rad-to-deg',
        type: 'text' as const,
        content: `## Radians → Degrees

Going the other way, multiply by $\\dfrac{180^\\circ}{\\pi}$ (this time $\\pi$ cancels):

$$\\theta_{\\text{deg}} = \\theta_{\\text{rad}} \\cdot \\frac{180^\\circ}{\\pi}$$

### Worked Example: convert $\\dfrac{\\pi}{4}$

$$\\frac{\\pi}{4} \\cdot \\frac{180^\\circ}{\\pi} = \\frac{180^\\circ}{4} = 45^\\circ$$

### Worked Example: convert $\\dfrac{5\\pi}{6}$

$$\\frac{5\\pi}{6} \\cdot \\frac{180^\\circ}{\\pi} = \\frac{5 \\cdot 180^\\circ}{6} = \\frac{900^\\circ}{6} = 150^\\circ$$

> 💡 The $\\pi$'s cancel, leaving plain numbers. Whenever you see $\\pi$ vanish, you know you're heading toward degrees.`,
      },
      {
        id: 'dr2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $90^\\circ$ to radians.',
              options: ['$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$2\\pi$', '$\\pi$'],
              correctAnswer: 0,
              explanation: '$90^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{90\\pi}{180} = \\dfrac{\\pi}{2}$. A right angle is $\\frac{\\pi}{2}$ radians.',
            },
            {
              question: 'Convert $\\dfrac{2\\pi}{3}$ to degrees.',
              options: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$30^\\circ$'],
              correctAnswer: 2,
              explanation: '$\\dfrac{2\\pi}{3} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{2 \\cdot 180^\\circ}{3} = \\dfrac{360^\\circ}{3} = 120^\\circ$.',
            },
            {
              question: 'To convert a radian measure into degrees, you multiply by:',
              options: ['$\\frac{\\pi}{180^\\circ}$', '$\\frac{180^\\circ}{\\pi}$', '$\\frac{\\pi}{360^\\circ}$', '$\\frac{2\\pi}{180^\\circ}$'],
              correctAnswer: 1,
              explanation: 'Multiply radians by $\\dfrac{180^\\circ}{\\pi}$ so that $\\pi$ cancels and degrees remain. The other factor, $\\dfrac{\\pi}{180^\\circ}$, goes the opposite direction.',
            },
          ],
        },
      },
      {
        id: 'dr2-drill-deg-to-rad',
        type: 'input-boxes' as const,
        content: `**Degrees → Radians** 🧮

Convert each to radians. Write your answer as a fraction times $\\pi$ using the form like \`5pi/6\` (a number, then \`pi\`, then \`/\`, then a number). If it reduces to a whole multiple of $\\pi$, just write it (e.g. \`2pi\`).

**1)** $30^\\circ = \\,?$
**2)** $135^\\circ = \\,?$
**3)** $360^\\circ = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['pi/6', '3pi/4', '2pi'],
          hint1: '$30 \\cdot \\frac{\\pi}{180} = \\frac{30\\pi}{180}$. Reduce $\\frac{30}{180} = \\frac{1}{6}$.',
          hint2: '$135/180 = \\frac{3}{4}$, so $135^\\circ = \\frac{3\\pi}{4}$.',
          hint3: '$360/180 = 2$, so $360^\\circ = 2\\pi$ (a full turn).',
          explanation: '1) $\\frac{30}{180}=\\frac{1}{6}\\Rightarrow \\frac{\\pi}{6}$.  2) $\\frac{135}{180}=\\frac{3}{4}\\Rightarrow \\frac{3\\pi}{4}$.  3) $\\frac{360}{180}=2\\Rightarrow 2\\pi$.',
        },
      },
      {
        id: 'dr2-drill-rad-to-deg',
        type: 'input-boxes' as const,
        content: `**Radians → Degrees** 🧮

Convert each to degrees. Enter just the number (no degree symbol).

**1)** $\\dfrac{\\pi}{6} = \\,?$
**2)** $\\dfrac{3\\pi}{2} = \\,?$
**3)** $\\pi = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '270', '180'],
          hint1: '$\\frac{\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{180}{6}$.',
          hint2: '$\\frac{3\\pi}{2} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{2} = \\frac{540}{2}$.',
          hint3: '$\\pi \\cdot \\frac{180}{\\pi} = 180$. Half a turn is $180^\\circ$.',
          explanation: '1) $\\frac{180}{6} = 30^\\circ$.  2) $\\frac{540}{2} = 270^\\circ$.  3) $180^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr3-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 3 of 7 — The Special Angles**

---

> 🔑 **Why this matters:** A handful of angles appear constantly in trigonometry and in every periodic model. Knowing their degree *and* radian forms by heart — without converting each time — is the single biggest time-saver in the whole subject.`,
      },
      {
        id: 'dr3-table',
        type: 'text' as const,
        content: `## The Angles Worth Memorizing

These are the "first quadrant" benchmarks plus the axis angles. Learn the row that goes with each fraction of $\\pi$:

| Degrees | Radians | Fraction of a turn |
|---------|---------|--------------------|
| $0^\\circ$ | $0$ | $0$ |
| $30^\\circ$ | $\\dfrac{\\pi}{6}$ | $\\frac{1}{12}$ |
| $45^\\circ$ | $\\dfrac{\\pi}{4}$ | $\\frac{1}{8}$ |
| $60^\\circ$ | $\\dfrac{\\pi}{3}$ | $\\frac{1}{6}$ |
| $90^\\circ$ | $\\dfrac{\\pi}{2}$ | $\\frac{1}{4}$ |
| $180^\\circ$ | $\\pi$ | $\\frac{1}{2}$ |
| $270^\\circ$ | $\\dfrac{3\\pi}{2}$ | $\\frac{3}{4}$ |
| $360^\\circ$ | $2\\pi$ | $1$ |

> 💡 **Pattern:** the denominators $6, 4, 3$ go with $30^\\circ, 45^\\circ, 60^\\circ$ — *bigger angle, smaller denominator*. $\\frac{\\pi}{6}$ is small, $\\frac{\\pi}{3}$ is twice as big.`,
      },
      {
        id: 'dr3-multiples',
        type: 'text' as const,
        content: `## Building the Rest from Multiples

Every other "nice" angle is a multiple of $30^\\circ$ ($\\frac{\\pi}{6}$) or $45^\\circ$ ($\\frac{\\pi}{4}$). Just count:

$$\\frac{\\pi}{6},\\ \\frac{2\\pi}{6}=\\frac{\\pi}{3},\\ \\frac{3\\pi}{6}=\\frac{\\pi}{2},\\ \\frac{4\\pi}{6}=\\frac{2\\pi}{3},\\ \\frac{5\\pi}{6},\\ \\frac{6\\pi}{6}=\\pi$$

In degrees that's $30, 60, 90, 120, 150, 180$ — steps of $30^\\circ$.

Likewise the multiples of $45^\\circ$ are $\\frac{\\pi}{4}, \\frac{2\\pi}{4}=\\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi, \\frac{5\\pi}{4}, \\ldots$ — degrees $45, 90, 135, 180, 225, \\ldots$

> ⚠️ **Always reduce.** $\\frac{2\\pi}{6}$ should be written $\\frac{\\pi}{3}$, and $\\frac{3\\pi}{6}$ is $\\frac{\\pi}{2}$. Un-reduced fractions still convert correctly but look unfinished.`,
      },
      {
        id: 'dr3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Pairs** 🔽

Pick the radian measure that equals each degree measure.`,
        exercise: {
          dropdowns: [
            { label: '$60^\\circ =$', options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'] },
            { label: '$45^\\circ =$', options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'] },
            { label: '$120^\\circ =$', options: ['$\\frac{2\\pi}{3}$', '$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{6}$', '$\\frac{\\pi}{3}$'] },
            { label: '$225^\\circ =$', options: ['$\\frac{4\\pi}{3}$', '$\\frac{5\\pi}{4}$', '$\\frac{7\\pi}{6}$', '$\\frac{3\\pi}{4}$'] },
          ],
          correctAnswers: ['$\\frac{\\pi}{3}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{4}$'],
          hint1: '$60/180 = 1/3$ and $45/180 = 1/4$.',
          hint2: '$120/180 = 2/3$, so $120^\\circ = \\frac{2\\pi}{3}$.',
          hint3: '$225/180 = 5/4$, so $225^\\circ = \\frac{5\\pi}{4}$.',
          explanation: '$60^\\circ=\\frac{\\pi}{3}$, $45^\\circ=\\frac{\\pi}{4}$, $120^\\circ=\\frac{2\\pi}{3}$, $225^\\circ=\\frac{5\\pi}{4}$. Each comes from $\\frac{\\text{deg}}{180}\\pi$ reduced.',
        },
      },
      {
        id: 'dr3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which radian measure equals $90^\\circ$?',
              options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
              correctAnswer: 3,
              explanation: '$90/180 = 1/2$, so $90^\\circ = \\dfrac{\\pi}{2}$. It is the quarter-turn benchmark.',
            },
            {
              question: 'Among the special angles, which has the largest denominator under $\\pi$?',
              options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
              correctAnswer: 0,
              explanation: '$30^\\circ = \\dfrac{\\pi}{6}$ has denominator $6$, the largest of these. Bigger angle, smaller denominator: $45^\\circ=\\frac{\\pi}{4}$, $60^\\circ=\\frac{\\pi}{3}$, $90^\\circ=\\frac{\\pi}{2}$.',
            },
          ],
        },
      },
      {
        id: 'dr3-drill',
        type: 'input-boxes' as const,
        content: `**Recall the Special Angles** 🧮

Fill in the matching measure.

**1)** $\\dfrac{\\pi}{3}$ in degrees $= \\,?$
**2)** $150^\\circ$ in radians (form like \`5pi/6\`) $= \\,?$
**3)** $\\dfrac{7\\pi}{6}$ in degrees $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '5pi/6', '210'],
          hint1: '$\\frac{\\pi}{3}\\cdot\\frac{180}{\\pi} = 60^\\circ$.',
          hint2: '$150/180 = 5/6$, so $150^\\circ = \\frac{5\\pi}{6}$.',
          hint3: '$\\frac{7\\pi}{6}\\cdot\\frac{180}{\\pi} = \\frac{7\\cdot180}{6} = \\frac{1260}{6} = 210^\\circ$.',
          explanation: '1) $60^\\circ$.  2) $\\frac{5\\pi}{6}$.  3) $\\frac{1260}{6} = 210^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr4-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 4 of 7 — Coterminal Angles & Standard Position**

---

> 🔑 **Big idea:** Many different angle *measures* point the terminal ray to the same place. Adding or subtracting a full turn — $360^\\circ$ or $2\\pi$ — lands you back where you started. Those are **coterminal** angles.`,
      },
      {
        id: 'dr4-standard',
        type: 'text' as const,
        content: `## Standard Position

An angle is in **standard position** when:

- its **vertex** sits at the origin, and
- its **initial side** lies along the positive $x$-axis.

The **terminal side** is where the ray ends up after rotating.

- **Counterclockwise** rotation → **positive** angle.
- **Clockwise** rotation → **negative** angle.

So $+90^\\circ$ points straight up, while $-90^\\circ$ (or $-\\frac{\\pi}{2}$) points straight down.

> 💡 A negative angle isn't "smaller than nothing" — it just means you turned the *other* direction.`,
      },
      {
        id: 'dr4-coterminal',
        type: 'text' as const,
        content: `## Coterminal Angles

Two angles are **coterminal** if their terminal sides land in the exact same spot. You get a coterminal angle by adding or subtracting whole turns:

$$\\theta \\pm 360^\\circ \\qquad\\text{or}\\qquad \\theta \\pm 2\\pi$$

### Worked Example (degrees)

Find a positive angle coterminal with $-50^\\circ$:
$$-50^\\circ + 360^\\circ = 310^\\circ$$

### Worked Example (radians)

Find a positive angle coterminal with $-\\dfrac{\\pi}{3}$:
$$-\\frac{\\pi}{3} + 2\\pi = -\\frac{\\pi}{3} + \\frac{6\\pi}{3} = \\frac{5\\pi}{3}$$

### Worked Example (subtracting)

$420^\\circ$ is more than a full turn; subtract one:
$$420^\\circ - 360^\\circ = 60^\\circ$$

> ⚠️ When you add $2\\pi$ to a fraction, first rewrite $2\\pi$ with the **same denominator**: $2\\pi = \\frac{6\\pi}{3}$ when working with thirds.`,
      },
      {
        id: 'dr4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which angle is coterminal with $30^\\circ$?',
              options: ['$330^\\circ$', '$390^\\circ$', '$60^\\circ$', '$210^\\circ$'],
              correctAnswer: 1,
              explanation: '$30^\\circ + 360^\\circ = 390^\\circ$, which shares the same terminal side. The others differ by something other than a full turn.',
            },
            {
              question: 'A $-90^\\circ$ angle in standard position points:',
              options: ['straight up', 'straight down', 'left', 'right'],
              correctAnswer: 1,
              explanation: 'Negative means clockwise. Rotating $90^\\circ$ clockwise from the positive $x$-axis points the terminal side straight down (toward the negative $y$-axis).',
            },
            {
              question: 'Which angle is coterminal with $\\dfrac{\\pi}{4}$?',
              options: ['$\\frac{9\\pi}{4}$', '$\\frac{5\\pi}{4}$', '$\\frac{3\\pi}{4}$', '$\\frac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{\\pi}{4} + 2\\pi = \\dfrac{\\pi}{4} + \\dfrac{8\\pi}{4} = \\dfrac{9\\pi}{4}$. Adding a full turn keeps the terminal side fixed.',
            },
          ],
        },
      },
      {
        id: 'dr4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find a Coterminal Partner** 🔽

Choose the *smallest positive* angle coterminal with each given angle.`,
        exercise: {
          dropdowns: [
            { label: '$-30^\\circ \\to$', options: ['$330^\\circ$', '$30^\\circ$', '$390^\\circ$', '$-330^\\circ$'] },
            { label: '$405^\\circ \\to$', options: ['$45^\\circ$', '$135^\\circ$', '$315^\\circ$', '$765^\\circ$'] },
            { label: '$-\\frac{2\\pi}{3} \\to$', options: ['$\\frac{4\\pi}{3}$', '$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{3}$'] },
          ],
          correctAnswers: ['$330^\\circ$', '$45^\\circ$', '$\\frac{4\\pi}{3}$'],
          hint1: '$-30^\\circ + 360^\\circ = 330^\\circ$.',
          hint2: '$405^\\circ - 360^\\circ = 45^\\circ$ (one full turn is too much).',
          hint3: '$-\\frac{2\\pi}{3} + 2\\pi = -\\frac{2\\pi}{3} + \\frac{6\\pi}{3} = \\frac{4\\pi}{3}$.',
          explanation: '$-30^\\circ \\to 330^\\circ$; $405^\\circ \\to 45^\\circ$; $-\\frac{2\\pi}{3} \\to \\frac{4\\pi}{3}$. Add or subtract one full turn until you land in $[0^\\circ, 360^\\circ)$ or $[0, 2\\pi)$.',
        },
      },
      {
        id: 'dr4-drill',
        type: 'input-boxes' as const,
        content: `**Coterminal Practice** 🧮

Give the **smallest positive** coterminal angle.

**1)** $-100^\\circ$ → (degrees) $\\,?$
**2)** $480^\\circ$ → (degrees) $\\,?$
**3)** $-\\dfrac{\\pi}{6}$ → (radians, form like \`11pi/6\`) $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['260', '120', '11pi/6'],
          hint1: '$-100^\\circ + 360^\\circ = 260^\\circ$.',
          hint2: '$480^\\circ - 360^\\circ = 120^\\circ$.',
          hint3: '$-\\frac{\\pi}{6} + 2\\pi = -\\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{11\\pi}{6}$.',
          explanation: '1) $260^\\circ$.  2) $120^\\circ$.  3) $\\frac{11\\pi}{6}$. Each adds or subtracts exactly one full revolution.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr5-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 5 of 7 — Arc Length and the Meaning of a Radian**

---

> 🔑 **The payoff of radians:** the arc length swept by an angle is simply $s = r\\theta$ — but *only* when $\\theta$ is measured in **radians**. This is the formula that makes radians worth learning.`,
      },
      {
        id: 'dr5-arclength',
        type: 'text' as const,
        content: `## Arc Length

On a circle of radius $r$, a central angle $\\theta$ (in radians) sweeps an arc of length

$$\\boxed{\\,s = r\\theta\\,}$$

This works because $\\theta$ in radians literally counts "how many radius-lengths of arc," so the arc is $r$ times that count.

### Worked Example

A circle has radius $r = 5$ cm. Find the arc length cut off by a central angle of $\\theta = \\dfrac{\\pi}{3}$.

$$s = r\\theta = 5 \\cdot \\frac{\\pi}{3} = \\frac{5\\pi}{3} \\approx 5.24 \\text{ cm}$$

> ⚠️ **Convert first!** If the angle is given in degrees, change it to radians **before** using $s=r\\theta$. Using degrees here gives a wrong answer.`,
      },
      {
        id: 'dr5-arc-degrees',
        type: 'text' as const,
        content: `## When the Angle Is in Degrees

Suppose $r = 12$ in and $\\theta = 90^\\circ$. First convert:

$$90^\\circ = \\frac{\\pi}{2} \\text{ rad}$$

Then apply the formula:

$$s = r\\theta = 12 \\cdot \\frac{\\pi}{2} = 6\\pi \\approx 18.85 \\text{ in}$$

> 💡 **Sanity check:** $90^\\circ$ is a quarter turn, so the arc should be a quarter of the circumference. Quarter of $2\\pi(12) = 24\\pi$ is $6\\pi$. ✓ Same answer.`,
      },
      {
        id: 'dr5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle of radius $4$ has a central angle of $\\dfrac{\\pi}{2}$. What is the arc length?',
              options: ['$2\\pi$', '$4\\pi$', '$8\\pi$', '$\\frac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$s = r\\theta = 4 \\cdot \\dfrac{\\pi}{2} = 2\\pi$. A quarter turn on radius $4$ gives an arc of $2\\pi$.',
            },
            {
              question: 'Before using $s = r\\theta$, the angle $\\theta$ must be in:',
              options: ['decimal degrees', 'radians', 'either unit', 'revolutions'],
              correctAnswer: 1,
              explanation: 'The formula $s = r\\theta$ holds only for $\\theta$ in radians. Degrees must be converted first, or the formula gives a meaningless number.',
            },
          ],
        },
      },
      {
        id: 'dr5-ratio',
        type: 'text' as const,
        content: `## A Radian Is a Ratio

Solve $s = r\\theta$ for $\\theta$ and you get the **definition** of radian measure:

$$\\boxed{\\,\\theta = \\frac{s}{r}\\,} \\qquad \\text{(arc length divided by radius)}$$

- **One radian** is the angle whose arc is exactly one radius long.
- On the **unit circle** ($r = 1$), the arc length and the radian measure are the same number.
- A full turn has arc $2\\pi r$, so it measures $\\dfrac{2\\pi r}{r} = 2\\pi$ radians, on **any** circle.

### Worked Example 1: Find the angle

An arc of length $10$ cm sits on a circle of radius $4$ cm.

$$\\theta = \\frac{s}{r} = \\frac{10}{4} = 2.5 \\text{ radians} \\approx 143.2^\\circ$$

### Worked Example 2: Find the radius

An arc of length $6\\pi$ subtends a central angle of $\\dfrac{2\\pi}{3}$.

$$r = \\frac{s}{\\theta} = \\frac{6\\pi}{2\\pi/3} = 6\\pi\\cdot\\frac{3}{2\\pi} = 9$$

> 💡 Because a radian is length divided by length, it has **no units**. That is why a bare number like $2.5$ can be an angle.`,
      },
      {
        id: 'dr5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Result** 🔽

Use $s = r\\theta$ and $\\theta = \\frac{s}{r}$ with $\\theta$ in radians.`,
        exercise: {
          dropdowns: [
            { label: '$r = 2,\\ \\theta = \\frac{\\pi}{2}$. Arc length $s =$', options: ['$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$4\\pi$'], correctAnswer: 0 },
            { label: '$r = 6,\\ \\theta = \\frac{\\pi}{3}$. Arc length $s =$', options: ['$2\\pi$', '$3\\pi$', '$6\\pi$', '$\\frac{\\pi}{3}$'], correctAnswer: 0 },
            { label: '$r = 5,\\ s = 10$. Angle $\\theta =$', options: ['$2$', '$\\frac{1}{2}$', '$50$', '$2\\pi$'], correctAnswer: 0 },
          ],
          correctAnswers: ['$\\pi$', '$2\\pi$', '$2$'],
          hint1: '$s = 2\\cdot\\frac{\\pi}{2} = \\pi$.',
          hint2: '$s = 6\\cdot\\frac{\\pi}{3} = \\frac{6\\pi}{3} = 2\\pi$.',
          hint3: '$\\theta = \\frac{s}{r} = \\frac{10}{5}$ radians.',
          explanation: '$s = 2\\cdot\\frac{\\pi}{2} = \\pi$;  $s = 6\\cdot\\frac{\\pi}{3} = 2\\pi$;  $\\theta = \\frac{10}{5} = 2$ radians (about $114.6^\\circ$).',
        },
      },
      {
        id: 'dr5-drill',
        type: 'input-boxes' as const,
        content: `**Arc & Angle Drill** 🧮

Use $s = r\\theta$ and $\\theta = \\frac{s}{r}$ with $\\theta$ in radians. Give exact answers as a multiple of $\\pi$ (form like \`6pi\` or \`9pi/2\`).

**1)** $r = 3$, $\\theta = \\dfrac{2\\pi}{3}$. Arc length $s = \\,?$
**2)** $r = 10$, $\\theta = \\dfrac{\\pi}{5}$. Arc length $s = \\,?$
**3)** $s = 6\\pi$, $r = 9$. Angle $\\theta = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2pi', '2pi', '2pi/3'],
          hint1: '$s = 3 \\cdot \\frac{2\\pi}{3} = \\frac{6\\pi}{3} = 2\\pi$.',
          hint2: '$s = 10 \\cdot \\frac{\\pi}{5} = \\frac{10\\pi}{5} = 2\\pi$.',
          hint3: '$\\theta = \\frac{s}{r} = \\frac{6\\pi}{9}$, then reduce the fraction.',
          explanation: '1) $3\\cdot\\frac{2\\pi}{3} = 2\\pi$.  2) $10\\cdot\\frac{\\pi}{5} = 2\\pi$.  3) $\\frac{6\\pi}{9} = \\frac{2\\pi}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr6-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 6 of 7 — Points on a Circle of Radius r**

---

> 🔑 **Big idea:** An angle $\\theta$ in standard position and a circle of radius $r$ centered at the origin pin down exactly one point $P$: where the terminal ray crosses the circle. Its coordinates are
> $$P = (r\\cos\\theta,\\; r\\sin\\theta)$$
> With $\\theta$ in radians, the arc from $(r, 0)$ to $P$ also has a simple length: $s = r\\theta$.`,
      },
      {
        id: 'dr6-coords',
        type: 'text' as const,
        content: `## From Angle to Coordinates

On the **unit circle** ($r = 1$), the terminal ray of $\\theta$ meets the circle at $(\\cos\\theta, \\sin\\theta)$. A circle of radius $r$ is the unit circle scaled by $r$, so every coordinate scales by $r$:

$$x = r\\cos\\theta \\qquad y = r\\sin\\theta$$

### Worked Example

Find the point where the terminal ray of $\\theta = \\dfrac{2\\pi}{3}$ meets the circle of radius $6$ centered at the origin.

$$x = 6\\cos\\frac{2\\pi}{3} = 6\\left(-\\frac12\\right) = -3 \\qquad y = 6\\sin\\frac{2\\pi}{3} = 6\\cdot\\frac{\\sqrt3}{2} = 3\\sqrt3$$

So $P = (-3, 3\\sqrt3)$, in Quadrant II as expected for $\\frac{2\\pi}{3}$ (that is, $120^\\circ$). The counterclockwise arc from $(6, 0)$ to $P$ has length $s = 6\\cdot\\frac{2\\pi}{3} = 4\\pi$.

> ✅ **Check:** $(-3)^2 + (3\\sqrt3)^2 = 9 + 27 = 36 = 6^2$, so $P$ really is on the circle.`,
      },
      {
        id: 'dr6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Where does the terminal ray of $\\theta = \\dfrac{7\\pi}{6}$ meet the circle of radius $4$ centered at the origin?',
              options: ['$(-2\\sqrt3, -2)$', '$(-2, 2\\sqrt3)$', '$(2\\sqrt3, -2)$', '$(-2\\sqrt3, 2)$'],
              correctAnswer: 0,
              explanation: '$x = 4\\cos\\frac{7\\pi}{6} = 4\\left(-\\frac{\\sqrt3}{2}\\right) = -2\\sqrt3$ and $y = 4\\sin\\frac{7\\pi}{6} = 4\\left(-\\frac12\\right) = -2$. Both are negative, matching Quadrant III.',
            },
            {
              question: 'A point on the circle of radius $10$ centered at the origin is at angle $\\theta = -\\dfrac{\\pi}{2}$. What are its coordinates?',
              options: ['$(0, 10)$', '$(-10, 0)$', '$(0, -10)$', '$(10, 0)$'],
              correctAnswer: 2,
              explanation: 'A negative angle turns clockwise, so $-\\frac{\\pi}{2}$ points straight down: $(10\\cos(-\\frac{\\pi}{2}), 10\\sin(-\\frac{\\pi}{2})) = (0, -10)$.',
            },
          ],
        },
      },
      {
        id: 'dr6-reverse',
        type: 'text' as const,
        content: `## From Distance Traveled to Position

Radians also run the other way. If you travel a distance $s$ along a circle of radius $r$, starting at $(r, 0)$, the angle you have turned through is

$$\\theta = \\frac{s}{r} \\quad\\text{radians}$$

Counterclockwise travel gives a positive angle; clockwise travel gives a negative one. Then $P = (r\\cos\\theta, r\\sin\\theta)$ gives your position.

### Worked Example 1

Start at $(6, 0)$ and walk $3\\pi$ units counterclockwise around the circle of radius $6$.

$$\\theta = \\frac{3\\pi}{6} = \\frac{\\pi}{2} \\;\\Rightarrow\\; P = \\left(6\\cos\\frac{\\pi}{2}, 6\\sin\\frac{\\pi}{2}\\right) = (0, 6)$$

### Worked Example 2

Start at $(3, 0)$ and walk $\\frac{5\\pi}{2}$ units **clockwise** around the circle of radius $3$.

$$\\theta = -\\frac{5\\pi/2}{3} = -\\frac{5\\pi}{6} \\;\\Rightarrow\\; P = \\left(3\\cos\\left(-\\frac{5\\pi}{6}\\right), 3\\sin\\left(-\\frac{5\\pi}{6}\\right)\\right) = \\left(-\\frac{3\\sqrt3}{2}, -\\frac32\\right)$$

> 💡 A radian is not tied to $\\pi$. An angle of $2$ radians is about $114.6^\\circ$, so its terminal ray lies in Quadrant II. Comparing a radian value with $\\frac{\\pi}{2} \\approx 1.57$, $\\pi \\approx 3.14$, and $\\frac{3\\pi}{2} \\approx 4.71$ tells you the quadrant.`,
      },
      {
        id: 'dr6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Locate the Point** 🔽

Use $P = (r\\cos\\theta, r\\sin\\theta)$ and $\\theta = \\dfrac{s}{r}$.`,
        exercise: {
          dropdowns: [
            { label: 'Circle of radius $8$, $\\theta = \\frac{\\pi}{4}$: the $x$-coordinate of $P$ is', options: ['$4\\sqrt2$', '$4$', '$8\\sqrt2$', '$2\\sqrt2$'] },
            { label: 'Walk $2\\pi$ units counterclockwise on a circle of radius $4$ from $(4, 0)$: you turn through', options: ['$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$2\\pi$', '$8\\pi$'] },
            { label: 'The terminal ray of $\\theta = 5$ radians lies in', options: ['Quadrant IV', 'Quadrant III', 'Quadrant II', 'Quadrant I'] },
          ],
          correctAnswers: ['$4\\sqrt2$', '$\\frac{\\pi}{2}$', 'Quadrant IV'],
          hint1: '$x = 8\\cos\\frac{\\pi}{4} = 8\\cdot\\frac{\\sqrt2}{2}$.',
          hint2: '$\\theta = \\frac{s}{r} = \\frac{2\\pi}{4}$.',
          hint3: '$\\frac{3\\pi}{2} \\approx 4.71 < 5 < 2\\pi \\approx 6.28$.',
          explanation: '$x = 8\\cdot\\frac{\\sqrt2}{2} = 4\\sqrt2$; $\\theta = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$; and $5$ radians (about $286.5^\\circ$) lies between $\\frac{3\\pi}{2}$ and $2\\pi$, in Quadrant IV.',
        },
      },
      {
        id: 'dr6-drill',
        type: 'input-boxes' as const,
        content: `**Coordinates Drill** 🧮

The terminal ray of $\\theta = \\dfrac{5\\pi}{3}$ meets the circle of radius $10$ centered at the origin at $P$.

**1)** The $x$-coordinate of $P$ $= \\,?$
**2)** The $y$-coordinate of $P$ $= \\,?$ (form like \`-4sqrt3\`)
**3)** The counterclockwise arc length from $(10, 0)$ to $P$ $= \\,?$ (form like \`20pi/3\`)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-5sqrt3', '50pi/3'],
          hint1: '$\\cos\\frac{5\\pi}{3} = \\frac12$, so $x = 10\\cdot\\frac12$.',
          hint2: '$\\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt3}{2}$ (Quadrant IV), so $y = 10\\cdot\\left(-\\frac{\\sqrt3}{2}\\right)$.',
          hint3: '$s = r\\theta = 10\\cdot\\frac{5\\pi}{3}$.',
          explanation: '1) $x = 5$.  2) $y = -5\\sqrt3$.  3) $s = \\frac{50\\pi}{3}$. Check: $5^2 + (5\\sqrt3)^2 = 25 + 75 = 100 = 10^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'degrees-and-radians',
    sections: [
      {
        id: 'dr7-intro',
        type: 'text' as const,
        content: `# 📐 Degrees and Radians

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) explain both unit systems, (2) convert fluently, (3) recall the special angles, (4) find coterminal angles, (5) use arc length and the radian as a ratio, and (6) locate points on a circle of radius $r$. Let's lock it in.`,
      },
      {
        id: 'dr7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Degrees → radians | multiply by $\\dfrac{\\pi}{180^\\circ}$ |
| Radians → degrees | multiply by $\\dfrac{180^\\circ}{\\pi}$ |
| Master link | $\\pi$ rad $= 180^\\circ$ |
| Coterminal angle | add/subtract $360^\\circ$ or $2\\pi$ |
| Arc length | $s = r\\theta$ (radians) |
| Angle from arc | $\\theta = \\dfrac{s}{r}$ (radians) |
| Point on a circle of radius $r$ | $(r\\cos\\theta, r\\sin\\theta)$ |
| Revolutions → radians | multiply by $2\\pi$ |

> ⚠️ **The #1 trap:** using degrees in $s = r\\theta$ or $\\theta = \\frac{s}{r}$. Both demand **radians** every time.`,
      },
      {
        id: 'dr7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $315^\\circ$ to radians.',
              options: ['$\\frac{7\\pi}{4}$', '$\\frac{5\\pi}{4}$', '$\\frac{3\\pi}{4}$', '$\\frac{7\\pi}{6}$'],
              correctAnswer: 0,
              explanation: '$315/180 = 7/4$, so $315^\\circ = \\dfrac{7\\pi}{4}$.',
            },
            {
              question: 'A circle of radius $9$ has a central angle of $\\dfrac{\\pi}{3}$. The arc length is:',
              options: ['$3\\pi$', '$9\\pi$', '$\\frac{\\pi}{3}$', '$27\\pi$'],
              correctAnswer: 0,
              explanation: '$s = r\\theta = 9\\cdot\\dfrac{\\pi}{3} = \\dfrac{9\\pi}{3} = 3\\pi$.',
            },
          ],
        },
      },
      {
        id: 'dr7-dropdown',
        type: 'dropdown-select' as const,
        content: `**Final Setup Check** 🔽

A point starts at $(5, 0)$ and travels $\\frac{5\\pi}{3}$ units counterclockwise around the circle of radius $5$ centered at the origin.`,
        exercise: {
          dropdowns: [
            { label: 'The angle it turns through is $\\theta =$', options: ['$\\frac{\\pi}{3}$', '$\\frac{5\\pi}{3}$', '$\\frac{\\pi}{15}$', '$\\frac{25\\pi}{3}$'], correctAnswer: 0 },
            { label: 'Its position is $P =$', options: ['$\\left(\\frac52, \\frac{5\\sqrt3}{2}\\right)$', '$\\left(\\frac{5\\sqrt3}{2}, \\frac52\\right)$', '$\\left(\\frac52, -\\frac{5\\sqrt3}{2}\\right)$', '$\\left(5, \\frac{\\pi}{3}\\right)$'], correctAnswer: 0 },
          ],
          correctAnswers: ['$\\frac{\\pi}{3}$', '$\\left(\\frac52, \\frac{5\\sqrt3}{2}\\right)$'],
          hint1: '$\\theta = \\frac{s}{r} = \\frac{5\\pi/3}{5}$.',
          hint2: '$P = (5\\cos\\theta, 5\\sin\\theta)$ with $\\theta = \\frac{\\pi}{3}$.',
          hint3: '$\\cos\\frac{\\pi}{3} = \\frac12$ and $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt3}{2}$.',
          explanation: '$\\theta = \\frac{5\\pi/3}{5} = \\frac{\\pi}{3}$, so $P = \\left(5\\cdot\\frac12, 5\\cdot\\frac{\\sqrt3}{2}\\right) = \\left(\\frac52, \\frac{5\\sqrt3}{2}\\right)$.',
        },
      },
      {
        id: 'dr7-drill',
        type: 'input-boxes' as const,
        content: `**Last Drill Before the Quiz** 🧮

**1)** Convert $240^\\circ$ to radians (form like \`4pi/3\`) $= \\,?$
**2)** Smallest positive angle coterminal with $-\\dfrac{\\pi}{4}$ (form like \`7pi/4\`) $= \\,?$
**3)** An arc of length $3\\pi$ on a circle of radius $4$. Angle $\\theta = \\dfrac{s}{r} = \\,?$ (form like \`5pi/6\`)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4pi/3', '7pi/4', '3pi/4'],
          hint1: '$240/180 = 4/3$, so $240^\\circ = \\frac{4\\pi}{3}$.',
          hint2: '$-\\frac{\\pi}{4} + 2\\pi = -\\frac{\\pi}{4} + \\frac{8\\pi}{4} = \\frac{7\\pi}{4}$.',
          hint3: '$\\theta = \\frac{3\\pi}{4}$: divide the arc length by the radius.',
          explanation: '1) $\\frac{4\\pi}{3}$.  2) $\\frac{7\\pi}{4}$.  3) $\\frac{3\\pi}{4}$.',
        },
      },
      {
        id: 'dr7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement is true?',
              options: [
                '$\\pi$ radians $= 180^\\circ$',
                '$\\pi$ radians $= 360^\\circ$',
                '$1$ radian $= 1^\\circ$',
                '$2\\pi$ radians $= 180^\\circ$',
              ],
              correctAnswer: 0,
              explanation: 'The master link is $\\pi$ rad $= 180^\\circ$ (equivalently $2\\pi$ rad $= 360^\\circ$). Every conversion follows from it.',
            },
            {
              question: 'Convert $\\dfrac{5\\pi}{6}$ to degrees.',
              options: ['$150^\\circ$', '$120^\\circ$', '$210^\\circ$', '$300^\\circ$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{5\\pi}{6}\\cdot\\dfrac{180^\\circ}{\\pi} = \\dfrac{5\\cdot180^\\circ}{6} = \\dfrac{900^\\circ}{6} = 150^\\circ$.',
            },
            {
              question: 'Where does the terminal ray of $\\theta = \\dfrac{\\pi}{3}$ meet the circle of radius $6$ centered at the origin?',
              options: ['$(3, 3\\sqrt3)$', '$(3\\sqrt3, 3)$', '$(6, 3\\sqrt3)$', '$(3, 6)$'],
              correctAnswer: 0,
              explanation: '$(6\\cos\\frac{\\pi}{3}, 6\\sin\\frac{\\pi}{3}) = \\left(6\\cdot\\frac12, 6\\cdot\\frac{\\sqrt3}{2}\\right) = (3, 3\\sqrt3)$.',
            },
          ],
        },
      },
    ],
  },
]
