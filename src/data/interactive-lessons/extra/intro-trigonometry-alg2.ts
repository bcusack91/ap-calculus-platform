import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Trigonometry (Algebra 2).
 * Registry key: 'intro-trigonometry-alg2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'intro-trigonometry-alg2',
    sections: [
      {
        id: 'trig1-intro',
        type: 'text' as const,
        content: `# 📐 Introduction to Trigonometry

**Part 1 of 5 — Right Triangles & the Three Ratios**

---

### Topics in This Part

| Section |
|---------|
| Labeling Sides of a Right Triangle |
| The Three Trig Ratios (SOH-CAH-TOA) |
| Writing Ratios From a Triangle |

> 🔑 **Key Concept:** *Trigonometry* studies the relationships between the **angles** and **side lengths** of triangles. In a right triangle, three special ratios — **sine**, **cosine**, and **tangent** — connect one acute angle to two of its sides.`,
      },
      {
        id: 'trig1-sides',
        type: 'text' as const,
        content: `## Labeling the Sides

Every right triangle has a $90^\\circ$ angle. We name the three sides **relative to one chosen acute angle**, usually called $\\theta$ (theta):

- **Hypotenuse** — the longest side, always **opposite the right angle**. Its position never changes.
- **Opposite** — the side **across from** $\\theta$.
- **Adjacent** — the side **next to** $\\theta$ that is *not* the hypotenuse.

$$\\underbrace{\\text{hypotenuse}}_{\\text{opposite the }90^\\circ} \\qquad \\underbrace{\\text{opposite}}_{\\text{across from }\\theta} \\qquad \\underbrace{\\text{adjacent}}_{\\text{next to }\\theta}$$

> ⚠️ **Watch out:** "Opposite" and "adjacent" depend on *which* acute angle you pick. The hypotenuse, however, is **always** the side facing the right angle — it never switches.`,
      },
      {
        id: 'trig1-label-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a right triangle, the hypotenuse is always:',
              options: [
                'The side opposite the right angle',
                'The shortest side',
                'The side opposite the angle $\\theta$',
                'The side adjacent to $\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'The hypotenuse is always the side directly across from the $90^\\circ$ angle, and it is always the longest side. Its label never changes when you switch acute angles.',
            },
            {
              question: 'A right triangle has legs of length $6$ and $8$ and a hypotenuse. For the angle $\\theta$ touching the side of length $6$ (but not the hypotenuse), which side is "opposite"?',
              options: ['$8$', '$6$', '$10$', 'The hypotenuse'],
              correctAnswer: 0,
              explanation: 'The side of length $6$ is *next to* $\\theta$, so it is the adjacent leg. The side across from $\\theta$ is the other leg, $8$ — that is the opposite side.',
            },
          ],
        },
      },
      {
        id: 'trig1-ratios',
        type: 'text' as const,
        content: `## The Three Ratios: SOH-CAH-TOA

For an acute angle $\\theta$ in a right triangle:

$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$$

The classic memory phrase is **SOH-CAH-TOA**:

| Letters | Ratio | Meaning |
|---------|-------|---------|
| **SOH** | $\\sin = \\dfrac{O}{H}$ | **S**ine = **O**pposite over **H**ypotenuse |
| **CAH** | $\\cos = \\dfrac{A}{H}$ | **C**osine = **A**djacent over **H**ypotenuse |
| **TOA** | $\\tan = \\dfrac{O}{A}$ | **T**angent = **O**pposite over **A**djacent |

> 💡 **Tip:** $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$, since $\\dfrac{O/H}{A/H} = \\dfrac{O}{A}$. The hypotenuses cancel.`,
      },
      {
        id: 'trig1-write-ratios',
        type: 'text' as const,
        content: `## Writing Ratios From a Triangle

### Worked Example: the 3–4–5 triangle

A right triangle has legs $3$ and $4$ and hypotenuse $5$. Let $\\theta$ be the angle whose **opposite** side is $3$ and whose **adjacent** side is $4$. Then:

$$\\sin\\theta = \\frac{3}{5} \\qquad \\cos\\theta = \\frac{4}{5} \\qquad \\tan\\theta = \\frac{3}{4}$$

If instead we pick the **other** acute angle (opposite $= 4$, adjacent $= 3$):

$$\\sin = \\frac{4}{5} \\qquad \\cos = \\frac{3}{5} \\qquad \\tan = \\frac{4}{3}$$

> 🔑 **Key Idea:** Opposite and adjacent **swap** when you switch acute angles, which is exactly why $\\sin$ and $\\cos$ trade places. The hypotenuse $5$ stays put.`,
      },
      {
        id: 'trig1-ratio-drill',
        type: 'input-boxes' as const,
        content: `**Write the Ratios** 🧮

A right triangle has the angle $\\theta$ with **opposite** $= 5$, **adjacent** $= 12$, and **hypotenuse** $= 13$ (a 5–12–13 triangle). Enter each ratio as a fraction like \`5/13\`.

**1)** $\\sin\\theta = \\,?$
**2)** $\\cos\\theta = \\,?$
**3)** $\\tan\\theta = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/13', '12/13', '5/12'],
          hint1: '$\\sin = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{5}{13}$.',
          hint2: '$\\cos = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{12}{13}$.',
          hint3: '$\\tan = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{5}{12}$.',
          explanation: 'Using SOH-CAH-TOA with opposite $=5$, adjacent $=12$, hypotenuse $=13$: $\\sin\\theta=\\frac{5}{13}$, $\\cos\\theta=\\frac{12}{13}$, $\\tan\\theta=\\frac{5}{12}$.',
        },
      },
      {
        id: 'trig1-which-ratio',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Ratio** 🔽

For each piece of information, choose which trig ratio connects them.`,
        exercise: {
          dropdowns: [
            { label: 'You know the opposite side and the hypotenuse:', options: ['$\\sin$', '$\\cos$', '$\\tan$'] },
            { label: 'You know the adjacent side and the hypotenuse:', options: ['$\\sin$', '$\\cos$', '$\\tan$'] },
            { label: 'You know the opposite and adjacent sides:', options: ['$\\sin$', '$\\cos$', '$\\tan$'] },
          ],
          correctAnswers: ['$\\sin$', '$\\cos$', '$\\tan$'],
          hint1: 'SOH: **S**ine uses **O**pposite over **H**ypotenuse.',
          hint2: 'CAH: **C**osine uses **A**djacent over **H**ypotenuse.',
          hint3: 'TOA: **T**angent uses **O**pposite over **A**djacent.',
          explanation: 'Opposite + hypotenuse → $\\sin$. Adjacent + hypotenuse → $\\cos$. Opposite + adjacent → $\\tan$. That is SOH-CAH-TOA.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'intro-trigonometry-alg2',
    sections: [
      {
        id: 'trig2-intro',
        type: 'text' as const,
        content: `# 📐 Introduction to Trigonometry

**Part 2 of 5 — Finding a Missing Side**

---

> 🔑 **The Idea:** If you know **one acute angle** and **one side**, you can use $\\sin$, $\\cos$, or $\\tan$ to find any *other* side. Pick the ratio that uses the side you have and the side you want.`,
      },
      {
        id: 'trig2-steps',
        type: 'text' as const,
        content: `## The Strategy

To find a missing side:

1. **Label** the sides (opposite, adjacent, hypotenuse) relative to the known angle.
2. **Choose** the ratio that contains the known side *and* the unknown side.
3. **Set up** the equation and solve for the unknown.

### Worked Example: side opposite a $30^\\circ$ angle

A right triangle has a $30^\\circ$ angle and a hypotenuse of $10$. Find the side **opposite** the $30^\\circ$ angle.

We know the **hypotenuse** and want the **opposite** side → use $\\sin$ (SOH):

$$\\sin 30^\\circ = \\frac{\\text{opposite}}{10} \\;\\Rightarrow\\; \\text{opposite} = 10\\sin 30^\\circ = 10 \\cdot \\tfrac{1}{2} = 5$$

> ✅ **Check:** $\\sin 30^\\circ = 0.5$, and $10 \\cdot 0.5 = 5$. ✓`,
      },
      {
        id: 'trig2-worked2',
        type: 'text' as const,
        content: `### Worked Example: unknown in the denominator

A right triangle has a $40^\\circ$ angle. The side **adjacent** to it is $8$. Find the **hypotenuse** $h$.

Adjacent + hypotenuse → use $\\cos$ (CAH):

$$\\cos 40^\\circ = \\frac{8}{h}$$

When the unknown is in the **denominator**, multiply both sides by $h$, then divide:

$$h = \\frac{8}{\\cos 40^\\circ} \\approx \\frac{8}{0.766} \\approx 10.4$$

> 💡 **Rule of thumb:** If the unknown side is on **top** of the fraction, you **multiply**. If it is on the **bottom**, you **divide** the known value by the trig value.`,
      },
      {
        id: 'trig2-setup-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You know a $25^\\circ$ angle and the side **opposite** it, and you want the **adjacent** side. Which ratio should you use?',
              options: ['$\\tan$', '$\\sin$', '$\\cos$', 'the Pythagorean theorem'],
              correctAnswer: 0,
              explanation: 'Opposite and adjacent are connected by tangent (TOA: $\\tan = $ opposite/adjacent). Sine and cosine both require the hypotenuse, which you do not have.',
            },
            {
              question: 'To find the side opposite a $50^\\circ$ angle when the hypotenuse is $20$, the correct setup is:',
              options: [
                '$\\text{opposite} = 20\\sin 50^\\circ$',
                '$\\text{opposite} = 20\\cos 50^\\circ$',
                '$\\text{opposite} = \\dfrac{20}{\\sin 50^\\circ}$',
                '$\\text{opposite} = 20\\tan 50^\\circ$',
              ],
              correctAnswer: 0,
              explanation: '$\\sin 50^\\circ = \\dfrac{\\text{opposite}}{20}$, so multiply both sides by $20$: opposite $= 20\\sin 50^\\circ$. The unknown is on top, so we multiply.',
            },
          ],
        },
      },
      {
        id: 'trig2-side-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Side** 🧮

Use a calculator (degree mode) and **round to the nearest tenth**.

**1)** Find the side opposite a $30^\\circ$ angle when the hypotenuse is $14$: $\\;14\\sin 30^\\circ = \\,?$
**2)** Find the side adjacent to a $60^\\circ$ angle when the hypotenuse is $14$: $\\;14\\cos 60^\\circ = \\,?$
**3)** Find the side opposite a $45^\\circ$ angle when the adjacent side is $9$: $\\;9\\tan 45^\\circ = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '7', '9'],
          hint1: '$\\sin 30^\\circ = 0.5$, so $14 \\cdot 0.5 = 7$.',
          hint2: '$\\cos 60^\\circ = 0.5$, so $14 \\cdot 0.5 = 7$.',
          hint3: '$\\tan 45^\\circ = 1$, so $9 \\cdot 1 = 9$.',
          explanation: '1) $14\\sin 30^\\circ = 14(0.5) = 7$.  2) $14\\cos 60^\\circ = 14(0.5) = 7$.  3) $9\\tan 45^\\circ = 9(1) = 9$.',
        },
      },
      {
        id: 'trig2-multiply-divide',
        type: 'dropdown-select' as const,
        content: `**Multiply or Divide?** 🔽

For each setup, decide how to isolate the unknown side $x$.`,
        exercise: {
          dropdowns: [
            { label: '$\\sin 35^\\circ = \\dfrac{x}{12}$, so $x = $', options: ['$12\\sin 35^\\circ$', '$\\dfrac{12}{\\sin 35^\\circ}$', '$\\dfrac{\\sin 35^\\circ}{12}$'] },
            { label: '$\\cos 35^\\circ = \\dfrac{12}{x}$, so $x = $', options: ['$\\dfrac{12}{\\cos 35^\\circ}$', '$12\\cos 35^\\circ$', '$12 - \\cos 35^\\circ$'] },
            { label: '$\\tan 35^\\circ = \\dfrac{x}{12}$, so $x = $', options: ['$12\\tan 35^\\circ$', '$\\dfrac{12}{\\tan 35^\\circ}$', '$\\dfrac{\\tan 35^\\circ}{12}$'] },
          ],
          correctAnswers: ['$12\\sin 35^\\circ$', '$\\dfrac{12}{\\cos 35^\\circ}$', '$12\\tan 35^\\circ$'],
          hint1: 'When $x$ is on top of the fraction, multiply both sides by the denominator.',
          hint2: 'When $x$ is in the denominator, swap: $x = \\dfrac{\\text{known}}{\\text{trig value}}$.',
          hint3: '$\\dfrac{x}{12}$ means multiply by $12$; $\\dfrac{12}{x}$ means divide $12$ by the trig value.',
          explanation: 'Unknown on top → multiply: $x = 12\\sin 35^\\circ$ and $x = 12\\tan 35^\\circ$. Unknown on bottom → divide: $x = \\frac{12}{\\cos 35^\\circ}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'intro-trigonometry-alg2',
    sections: [
      {
        id: 'trig3-intro',
        type: 'text' as const,
        content: `# 📐 Introduction to Trigonometry

**Part 3 of 5 — Finding a Missing Angle**

---

> 🔑 **Why it works:** If you know **two sides**, you can find the **angle**. The inverse trig functions $\\sin^{-1}$, $\\cos^{-1}$, and $\\tan^{-1}$ undo sine, cosine, and tangent — they take a *ratio* and return the *angle*.`,
      },
      {
        id: 'trig3-inverse',
        type: 'text' as const,
        content: `## Inverse Trig Functions

A normal trig function takes an **angle** and returns a **ratio**:
$$\\sin 30^\\circ = 0.5$$

An **inverse** trig function reverses this — it takes a **ratio** and returns an **angle**:
$$\\sin^{-1}(0.5) = 30^\\circ$$

| If you have... | Use this inverse |
|----------------|------------------|
| opposite & hypotenuse | $\\theta = \\sin^{-1}\\!\\left(\\dfrac{\\text{opp}}{\\text{hyp}}\\right)$ |
| adjacent & hypotenuse | $\\theta = \\cos^{-1}\\!\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$ |
| opposite & adjacent | $\\theta = \\tan^{-1}\\!\\left(\\dfrac{\\text{opp}}{\\text{adj}}\\right)$ |

> ⚠️ **Notation alert:** $\\sin^{-1}\\theta$ means the **inverse** sine (also written $\\arcsin$). It does **not** mean $\\dfrac{1}{\\sin\\theta}$. On most calculators it is the **2nd → sin** key.`,
      },
      {
        id: 'trig3-worked',
        type: 'text' as const,
        content: `## Worked Example

A right triangle has a side of length $3$ **opposite** angle $\\theta$ and a hypotenuse of $5$. Find $\\theta$.

We have **opposite** and **hypotenuse** → use $\\sin^{-1}$:

$$\\sin\\theta = \\frac{3}{5} = 0.6 \\;\\Rightarrow\\; \\theta = \\sin^{-1}(0.6) \\approx 36.9^\\circ$$

### Second Example: using tangent

Legs $4$ (opposite) and $4$ (adjacent), so:

$$\\tan\\theta = \\frac{4}{4} = 1 \\;\\Rightarrow\\; \\theta = \\tan^{-1}(1) = 45^\\circ$$

> ✅ **Check:** Equal legs make an isosceles right triangle, whose acute angles are both $45^\\circ$. ✓`,
      },
      {
        id: 'trig3-inverse-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You know the side **adjacent** to $\\theta$ and the **hypotenuse**. Which inverse function finds $\\theta$?',
              options: ['$\\cos^{-1}$', '$\\sin^{-1}$', '$\\tan^{-1}$', 'You cannot find it from two sides.'],
              correctAnswer: 0,
              explanation: 'Adjacent over hypotenuse is the cosine ratio, so the angle is $\\theta = \\cos^{-1}\\!\\left(\\frac{\\text{adj}}{\\text{hyp}}\\right)$.',
            },
            {
              question: 'What does $\\tan^{-1}(1)$ equal?',
              options: ['$45^\\circ$', '$1^\\circ$', '$90^\\circ$', '$60^\\circ$'],
              correctAnswer: 0,
              explanation: 'Since $\\tan 45^\\circ = 1$, the inverse gives $\\tan^{-1}(1) = 45^\\circ$. The inverse tangent returns the angle whose tangent is $1$.',
            },
          ],
        },
      },
      {
        id: 'trig3-angle-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Setup** 🔽

For each pair of known sides, pick the correct inverse-function setup for $\\theta$.`,
        exercise: {
          dropdowns: [
            { label: 'opposite $= 7$, hypotenuse $= 10$:', options: ['$\\sin^{-1}\\!\\left(\\frac{7}{10}\\right)$', '$\\cos^{-1}\\!\\left(\\frac{7}{10}\\right)$', '$\\tan^{-1}\\!\\left(\\frac{7}{10}\\right)$'] },
            { label: 'adjacent $= 8$, hypotenuse $= 10$:', options: ['$\\cos^{-1}\\!\\left(\\frac{8}{10}\\right)$', '$\\sin^{-1}\\!\\left(\\frac{8}{10}\\right)$', '$\\tan^{-1}\\!\\left(\\frac{8}{10}\\right)$'] },
            { label: 'opposite $= 6$, adjacent $= 8$:', options: ['$\\tan^{-1}\\!\\left(\\frac{6}{8}\\right)$', '$\\sin^{-1}\\!\\left(\\frac{6}{8}\\right)$', '$\\cos^{-1}\\!\\left(\\frac{6}{8}\\right)$'] },
          ],
          correctAnswers: ['$\\sin^{-1}\\!\\left(\\frac{7}{10}\\right)$', '$\\cos^{-1}\\!\\left(\\frac{8}{10}\\right)$', '$\\tan^{-1}\\!\\left(\\frac{6}{8}\\right)$'],
          hint1: 'Opposite & hypotenuse is the sine ratio → use $\\sin^{-1}$.',
          hint2: 'Adjacent & hypotenuse is the cosine ratio → use $\\cos^{-1}$.',
          hint3: 'Opposite & adjacent (no hypotenuse) is the tangent ratio → use $\\tan^{-1}$.',
          explanation: 'Match the two known sides to SOH-CAH-TOA, then apply the matching inverse: $\\sin^{-1}$, $\\cos^{-1}$, or $\\tan^{-1}$.',
        },
      },
      {
        id: 'trig3-angle-drill',
        type: 'input-boxes' as const,
        content: `**Find the Angle** 🧮

Use a calculator in **degree mode** and round to the nearest **whole degree**. (Enter just the number, e.g. \`37\`.)

**1)** $\\theta = \\sin^{-1}(0.5) = \\,?$ degrees
**2)** $\\theta = \\cos^{-1}(0.5) = \\,?$ degrees
**3)** $\\theta = \\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right) = \\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '60', '37'],
          hint1: '$\\sin 30^\\circ = 0.5$, so $\\sin^{-1}(0.5) = 30^\\circ$.',
          hint2: '$\\cos 60^\\circ = 0.5$, so $\\cos^{-1}(0.5) = 60^\\circ$.',
          hint3: '$\\tan^{-1}(0.75) \\approx 36.87^\\circ$, which rounds to $37^\\circ$.',
          explanation: '1) $\\sin^{-1}(0.5) = 30^\\circ$.  2) $\\cos^{-1}(0.5) = 60^\\circ$.  3) $\\tan^{-1}(0.75) \\approx 36.9^\\circ \\approx 37^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'intro-trigonometry-alg2',
    sections: [
      {
        id: 'trig4-intro',
        type: 'text' as const,
        content: `# 📐 Introduction to Trigonometry

**Part 4 of 5 — Special Right Triangles & Exact Values**

---

> 🔑 **Big Payoff:** Two special triangles — the **$45^\\circ$–$45^\\circ$–$90^\\circ$** and the **$30^\\circ$–$60^\\circ$–$90^\\circ$** — have trig values you can find *exactly*, no calculator needed.`,
      },
      {
        id: 'trig4-454590',
        type: 'text' as const,
        content: `## The $45^\\circ$–$45^\\circ$–$90^\\circ$ Triangle

This is an isosceles right triangle: both legs are equal, and the hypotenuse is $\\sqrt{2}$ times a leg.

$$\\text{legs } 1, 1 \\qquad \\text{hypotenuse } \\sqrt{2}$$

So for $\\theta = 45^\\circ$:

$$\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\qquad \\cos 45^\\circ = \\frac{\\sqrt{2}}{2} \\qquad \\tan 45^\\circ = \\frac{1}{1} = 1$$

> 💡 **Rationalizing:** $\\dfrac{1}{\\sqrt{2}}$ is usually written $\\dfrac{\\sqrt{2}}{2}$ by multiplying top and bottom by $\\sqrt{2}$. As a decimal, $\\dfrac{\\sqrt{2}}{2} \\approx 0.707$.`,
      },
      {
        id: 'trig4-306090',
        type: 'text' as const,
        content: `## The $30^\\circ$–$60^\\circ$–$90^\\circ$ Triangle

The sides are in the ratio $1 : \\sqrt{3} : 2$, where:
- the side **opposite $30^\\circ$** is the shortest, $1$,
- the side **opposite $60^\\circ$** is $\\sqrt{3}$,
- the **hypotenuse** is $2$.

| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |
|----------|--------------|--------------|--------------|
| $30^\\circ$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$ |
| $45^\\circ$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $1$ |
| $60^\\circ$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{1}{2}$ | $\\sqrt{3}$ |

> 🔑 **Notice the symmetry:** $\\sin 30^\\circ = \\cos 60^\\circ$ and $\\cos 30^\\circ = \\sin 60^\\circ$. The sine of an angle equals the cosine of its **complement** ($30^\\circ + 60^\\circ = 90^\\circ$).`,
      },
      {
        id: 'trig4-exact-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the exact value of $\\cos 30^\\circ$?',
              options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: 'In the $30$–$60$–$90$ triangle, the side adjacent to $30^\\circ$ is $\\sqrt{3}$ and the hypotenuse is $2$, so $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.',
            },
            {
              question: 'Which statement is TRUE?',
              options: [
                '$\\tan 45^\\circ = 1$',
                '$\\sin 45^\\circ = 1$',
                '$\\cos 45^\\circ = \\dfrac{1}{2}$',
                '$\\tan 30^\\circ = \\sqrt{3}$',
              ],
              correctAnswer: 0,
              explanation: 'In a $45$–$45$–$90$ triangle the legs are equal, so $\\tan 45^\\circ = \\frac{\\text{opp}}{\\text{adj}} = \\frac{1}{1} = 1$. ($\\tan 60^\\circ = \\sqrt{3}$, and $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2} \\approx 0.707$.)',
            },
          ],
        },
      },
      {
        id: 'trig4-exact-dropdown',
        type: 'dropdown-select' as const,
        content: `**Recall the Exact Values** 🔽

Fill in each exact value from memory.`,
        exercise: {
          dropdowns: [
            { label: '$\\sin 30^\\circ =$', options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$'] },
            { label: '$\\sin 60^\\circ =$', options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$1$'] },
            { label: '$\\tan 60^\\circ =$', options: ['$\\sqrt{3}$', '$1$', '$\\dfrac{\\sqrt{3}}{3}$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\sqrt{3}$'],
          hint1: 'The side opposite $30^\\circ$ is the short side $1$, over hypotenuse $2$.',
          hint2: 'The side opposite $60^\\circ$ is $\\sqrt{3}$, over hypotenuse $2$.',
          hint3: 'For $\\tan 60^\\circ$, opposite $= \\sqrt{3}$ over adjacent $= 1$.',
          explanation: '$\\sin 30^\\circ = \\frac{1}{2}$, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, and $\\tan 60^\\circ = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$.',
        },
      },
      {
        id: 'trig4-exact-drill',
        type: 'input-boxes' as const,
        content: `**Exact-Value Practice** 🧮

A $30^\\circ$–$60^\\circ$–$90^\\circ$ triangle has a **hypotenuse of $8$**. Use the side ratios to find each side. (The shortest side is opposite $30^\\circ$.)

**1)** Side opposite $30^\\circ$ (the short leg) $= \\,?$
**2)** Hypotenuse divided by short leg $= \\,?$  *(the constant ratio)*
**3)** $\\tan 45^\\circ = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '1'],
          hint1: 'The short leg is half the hypotenuse: $8 \\div 2 = 4$.',
          hint2: 'In a $30$–$60$–$90$ triangle the hypotenuse is always $2\\times$ the short leg, so the ratio is $2$.',
          hint3: '$\\tan 45^\\circ = \\frac{1}{1} = 1$.',
          explanation: '1) Short leg $= \\frac{8}{2} = 4$ (opposite $30^\\circ$).  2) Hypotenuse $\\div$ short leg $= \\frac{8}{4} = 2$.  3) $\\tan 45^\\circ = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'intro-trigonometry-alg2',
    sections: [
      {
        id: 'trig5-intro',
        type: 'text' as const,
        content: `# 📐 Introduction to Trigonometry

**Part 5 of 5 — Applications & Mastery Check**

---

You can now (1) write the three ratios, (2) find a missing side, (3) find a missing angle, and (4) recall exact values. Let's apply them to real problems and finish with an exit quiz.`,
      },
      {
        id: 'trig5-elevation',
        type: 'text' as const,
        content: `## Angles of Elevation & Depression

- The **angle of elevation** is measured **upward** from the horizontal to a line of sight (looking *up* at a treetop).
- The **angle of depression** is measured **downward** from the horizontal (looking *down* from a cliff at a boat).

### Worked Example: height of a tree

You stand $50$ ft from the base of a tree. The angle of elevation to the top is $35^\\circ$. How tall is the tree?

The height is **opposite** the $35^\\circ$ angle, and $50$ ft is **adjacent** → use $\\tan$ (TOA):

$$\\tan 35^\\circ = \\frac{\\text{height}}{50} \\;\\Rightarrow\\; \\text{height} = 50\\tan 35^\\circ \\approx 50(0.700) \\approx 35.0 \\text{ ft}$$

> 💡 **Setup tip:** Draw a right triangle. The horizontal distance is the adjacent leg, the height is the opposite leg, and the angle sits at your eye.`,
      },
      {
        id: 'trig5-app-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A ramp rises $3$ ft over a horizontal run of $12$ ft. What is the angle of elevation of the ramp?',
              options: [
                '$\\tan^{-1}\\!\\left(\\frac{3}{12}\\right) \\approx 14^\\circ$',
                '$\\sin^{-1}\\!\\left(\\frac{3}{12}\\right) \\approx 14.5^\\circ$',
                '$\\tan^{-1}\\!\\left(\\frac{12}{3}\\right) \\approx 76^\\circ$',
                '$\\cos^{-1}\\!\\left(\\frac{3}{12}\\right) \\approx 75.5^\\circ$',
              ],
              correctAnswer: 0,
              explanation: 'The rise ($3$) is opposite the angle and the run ($12$) is adjacent, so use tangent: $\\theta = \\tan^{-1}\\!\\left(\\frac{3}{12}\\right) = \\tan^{-1}(0.25) \\approx 14^\\circ$.',
            },
            {
              question: 'From the top of a $100$ ft lighthouse, the angle of depression to a boat is $20^\\circ$. Which equation finds the horizontal distance $d$ to the boat?',
              options: [
                '$\\tan 20^\\circ = \\dfrac{100}{d}$',
                '$\\tan 20^\\circ = \\dfrac{d}{100}$',
                '$\\sin 20^\\circ = \\dfrac{100}{d}$',
                '$\\cos 20^\\circ = \\dfrac{100}{d}$',
              ],
              correctAnswer: 0,
              explanation: 'The $100$ ft height is opposite the $20^\\circ$ angle (alternate interior angle at the boat) and $d$ is adjacent, so $\\tan 20^\\circ = \\frac{100}{d}$, giving $d = \\frac{100}{\\tan 20^\\circ} \\approx 275$ ft.',
            },
          ],
        },
      },
      {
        id: 'trig5-app-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

Round to the nearest tenth. Use degree mode.

**1)** A $20$ ft ladder leans against a wall at a $60^\\circ$ angle of elevation. How high up the wall does it reach? $\\;20\\sin 60^\\circ = \\,?$  *(use $\\sin 60^\\circ \\approx 0.866$)*
**2)** A kite string is $100$ ft long at a $30^\\circ$ angle of elevation. How high is the kite? $\\;100\\sin 30^\\circ = \\,?$
**3)** A guy-wire meets the ground $9$ ft from a pole and reaches $12$ ft up. What angle does it make with the ground? $\\;\\tan^{-1}\\!\\left(\\frac{12}{9}\\right) = \\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['17.3', '50', '53.1'],
          hint1: '$20\\sin 60^\\circ = 20(0.866) = 17.32 \\approx 17.3$ ft.',
          hint2: '$\\sin 30^\\circ = 0.5$, so $100(0.5) = 50$ ft.',
          hint3: '$\\tan^{-1}(12/9) = \\tan^{-1}(1.333) \\approx 53.13^\\circ \\approx 53.1^\\circ$.',
          explanation: '1) $20\\sin 60^\\circ \\approx 17.3$ ft up the wall.  2) $100\\sin 30^\\circ = 50$ ft high.  3) $\\tan^{-1}(12/9) \\approx 53.1^\\circ$.',
        },
      },
      {
        id: 'trig5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Write a ratio | SOH-CAH-TOA |
| Find a side | side $=$ (known side) $\\times$ trig value, or $\\div$ if unknown is on the bottom |
| Find an angle | $\\theta = \\sin^{-1}, \\cos^{-1}, \\text{ or } \\tan^{-1}$ of the ratio |
| Exact values | memorize the $30$–$60$–$90$ and $45$–$45$–$90$ table |

> ⚠️ **Before the quiz:** Make sure your calculator is in **degree mode**, not radians, and remember that $\\sin^{-1}$ means inverse sine — *not* $\\frac{1}{\\sin}$.`,
      },
      {
        id: 'trig5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In a right triangle, the side opposite $\\theta$ is $8$ and the hypotenuse is $17$. What is $\\sin\\theta$?',
              options: ['$\\dfrac{8}{17}$', '$\\dfrac{17}{8}$', '$\\dfrac{8}{15}$', '$\\dfrac{15}{17}$'],
              correctAnswer: 0,
              explanation: '$\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{8}{17}$ by SOH. (The adjacent side would be $15$, giving the 8–15–17 triple.)',
            },
            {
              question: 'Which calculation finds the angle $\\theta$ when the adjacent side is $5$ and the hypotenuse is $13$?',
              options: ['$\\cos^{-1}\\!\\left(\\frac{5}{13}\\right)$', '$\\sin^{-1}\\!\\left(\\frac{5}{13}\\right)$', '$\\tan^{-1}\\!\\left(\\frac{5}{13}\\right)$', '$\\cos\\left(\\frac{5}{13}\\right)$'],
              correctAnswer: 0,
              explanation: 'Adjacent and hypotenuse correspond to cosine, so reverse it with the inverse: $\\theta = \\cos^{-1}\\!\\left(\\frac{5}{13}\\right)$.',
            },
            {
              question: 'What is the exact value of $\\tan 30^\\circ$?',
              options: ['$\\dfrac{\\sqrt{3}}{3}$', '$\\dfrac{1}{2}$', '$\\sqrt{3}$', '$\\dfrac{\\sqrt{3}}{2}$'],
              correctAnswer: 0,
              explanation: 'In a $30$–$60$–$90$ triangle, opposite $30^\\circ$ is $1$ and adjacent is $\\sqrt{3}$, so $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.',
            },
          ],
        },
      },
    ],
  },
]
