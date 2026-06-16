import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Trigonometric Ratios (Geometry).
 * Registry key / DB Topic.slug: 'trigonometric-ratios-geo'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'trigonometric-ratios-geo',
    sections: [
      {
        id: 'trg1-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Ratios

**Part 1 of 5 — Labeling a Right Triangle**

---

### Topics in This Part

| Section |
|---------|
| Opposite, Adjacent, and Hypotenuse |
| Why Labels Depend on the Angle |
| Practice Identifying Sides |

> 🔑 **Key Concept:** Trigonometry connects the **angles** of a right triangle to the **ratios of its sides**. Before we can write any ratio, we must label the sides correctly — and the labels change depending on which acute angle we're looking at.`,
      },
      {
        id: 'trg1-sides',
        type: 'text' as const,
        content: `## Naming the Three Sides

Every right triangle has one $90^\\circ$ angle. Pick one of the **acute** angles (call it $\\theta$). Relative to $\\theta$, the three sides get names:

- **Hypotenuse** — the longest side, always **across from the right angle**. It never changes.
- **Opposite** — the side that does **not** touch $\\theta$; it sits directly across from it.
- **Adjacent** — the side (other than the hypotenuse) that **does** touch $\\theta$.

| Side | How to find it |
|------|----------------|
| Hypotenuse | Across from the $90^\\circ$ angle |
| Opposite | Across from the angle $\\theta$ |
| Adjacent | Next to $\\theta$, but **not** the hypotenuse |

> 💡 **Memory hook:** The hypotenuse is the "ramp" of the triangle — the longest, slanted side. The other two legs split into *opposite* and *adjacent* based on where $\\theta$ is.`,
      },
      {
        id: 'trg1-id-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a right triangle, which side is *always* the hypotenuse?',
              options: [
                'The side across from the right angle',
                'The shortest side',
                'The side across from angle $\\theta$',
                'Any side that touches $\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'The hypotenuse is always opposite the $90^\\circ$ angle, and it is always the longest side of a right triangle. It does not depend on which acute angle you choose.',
            },
            {
              question: 'The side directly across from angle $\\theta$ (and not the hypotenuse) is called the:',
              options: ['Opposite side', 'Adjacent side', 'Hypotenuse', 'Base'],
              correctAnswer: 0,
              explanation: 'The "opposite" side is the leg facing $\\theta$ — it does not touch $\\theta$ at all. The adjacent side is the leg that *does* touch $\\theta$.',
            },
          ],
        },
      },
      {
        id: 'trg1-relabel',
        type: 'text' as const,
        content: `## The Labels Switch with the Angle

This is the idea students miss most: **opposite** and **adjacent** are *not* fixed sides — they depend on which acute angle you choose.

Consider a right triangle with the right angle at $C$, and legs $a$ and $b$ with hypotenuse $c$.

| If your angle is... | Opposite | Adjacent |
|---------------------|----------|----------|
| Angle $A$ | side $a$ | side $b$ |
| Angle $B$ | side $b$ | side $a$ |

The hypotenuse $c$ stays the hypotenuse for **both** angles. Only the two legs swap roles.

> ⚠️ **Watch out:** A leg that is "opposite" for one angle is "adjacent" for the other. Always re-check the labels when the angle changes.`,
      },
      {
        id: 'trg1-id-drill',
        type: 'dropdown-select' as const,
        content: `**Label the Sides** 🔽

A right triangle has its right angle at $C$. The legs are $\\overline{BC} = 6$ and $\\overline{AC} = 8$, with hypotenuse $\\overline{AB} = 10$.`,
        exercise: {
          dropdowns: [
            { label: 'For angle $A$, the **opposite** side is:', options: ['$\\overline{BC} = 6$', '$\\overline{AC} = 8$', '$\\overline{AB} = 10$'] },
            { label: 'For angle $A$, the **adjacent** side is:', options: ['$\\overline{AC} = 8$', '$\\overline{BC} = 6$', '$\\overline{AB} = 10$'] },
            { label: 'The **hypotenuse** is:', options: ['$\\overline{AB} = 10$', '$\\overline{BC} = 6$', '$\\overline{AC} = 8$'] },
          ],
          correctAnswers: ['$\\overline{BC} = 6$', '$\\overline{AC} = 8$', '$\\overline{AB} = 10$'],
          hint1: 'The hypotenuse is across from the right angle at $C$, so it is $\\overline{AB} = 10$.',
          hint2: 'Opposite angle $A$ means the side that does not touch $A$. Vertex $A$ touches $\\overline{AC}$ and $\\overline{AB}$, so the opposite side is $\\overline{BC} = 6$.',
          hint3: 'Adjacent to $A$ (but not the hypotenuse) is the leg touching $A$, which is $\\overline{AC} = 8$.',
          explanation: 'Across from the right angle: $\\overline{AB}=10$ is the hypotenuse. Across from $A$: $\\overline{BC}=6$ (opposite). Touching $A$ as a leg: $\\overline{AC}=8$ (adjacent).',
        },
      },
      {
        id: 'trg1-switch-note',
        type: 'text' as const,
        content: `## One More Look at the Same Triangle

Using the same triangle (right angle at $C$, with $\\overline{BC}=6$, $\\overline{AC}=8$, $\\overline{AB}=10$), let's now describe the sides from the **other** acute angle, $B$.

Vertex $B$ touches legs $\\overline{BC}$ and the hypotenuse $\\overline{AB}$. So relative to angle $B$:

- the **opposite** side is $\\overline{AC} = 8$ (it does not touch $B$),
- the **adjacent** side is $\\overline{BC} = 6$ (the leg touching $B$).

> 🔑 Compare with the drill above: for angle $A$ the opposite was $6$, but for angle $B$ the opposite is $8$. **Same triangle, different labels.**`,
      },
      {
        id: 'trg1-switch-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Same triangle: right angle at $C$, $\\overline{BC}=6$, $\\overline{AC}=8$, $\\overline{AB}=10$. For angle $B$, which side is **adjacent**?',
              options: ['$\\overline{BC} = 6$', '$\\overline{AC} = 8$', '$\\overline{AB} = 10$', 'There is no adjacent side'],
              correctAnswer: 0,
              explanation: 'The adjacent side is the leg that touches angle $B$ (but is not the hypotenuse). Vertex $B$ touches leg $\\overline{BC}=6$, so that is the adjacent side. The leg $\\overline{AC}=8$ is opposite $B$.',
            },
          ],
        },
      },
      {
        id: 'trg1-wrap',
        type: 'text' as const,
        content: `## You're Ready for Ratios

You can now look at any right triangle, pick an acute angle, and name all three sides relative to it. That skill is the foundation for everything that follows.

In **Part 2** we turn these labels into the three core ratios — **sine, cosine, and tangent** — and learn the famous mnemonic that locks them in.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'trigonometric-ratios-geo',
    sections: [
      {
        id: 'trg2-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Ratios

**Part 2 of 5 — Sine, Cosine & Tangent (SOH-CAH-TOA)**

---

> 🔑 **The Idea:** Each trig ratio is just a fraction of two side lengths. Once the sides are labeled, the ratio is fixed by the **angle** — not by the size of the triangle.`,
      },
      {
        id: 'trg2-sohcahtoa',
        type: 'text' as const,
        content: `## The Three Ratios

For an acute angle $\\theta$ in a right triangle:

$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$$

The mnemonic **SOH-CAH-TOA** stores all three:

| Mnemonic | Meaning |
|----------|---------|
| **SOH** | $\\textbf{S}$ine $=$ $\\textbf{O}$pposite over $\\textbf{H}$ypotenuse |
| **CAH** | $\\textbf{C}$osine $=$ $\\textbf{A}$djacent over $\\textbf{H}$ypotenuse |
| **TOA** | $\\textbf{T}$angent $=$ $\\textbf{O}$pposite over $\\textbf{A}$djacent |

> 💡 **Tip:** $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$, since $\\dfrac{\\text{opp}/\\text{hyp}}{\\text{adj}/\\text{hyp}} = \\dfrac{\\text{opp}}{\\text{adj}}$. The hypotenuses cancel.`,
      },
      {
        id: 'trg2-worked',
        type: 'text' as const,
        content: `## Worked Example: the 3-4-5 Triangle

A right triangle has legs $3$ and $4$ and hypotenuse $5$. Let $\\theta$ be the angle **opposite the side of length $3$**. Then relative to $\\theta$:

- opposite $= 3$, adjacent $= 4$, hypotenuse $= 5$.

$$\\sin\\theta = \\frac{3}{5} = 0.6 \\qquad \\cos\\theta = \\frac{4}{5} = 0.8 \\qquad \\tan\\theta = \\frac{3}{4} = 0.75$$

> ✅ **Check with the Pythagorean identity:** $\\sin^2\\theta + \\cos^2\\theta = 0.6^2 + 0.8^2 = 0.36 + 0.64 = 1$ ✓`,
      },
      {
        id: 'trg2-which-ratio',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which ratio uses the **adjacent** side and the **hypotenuse**?',
              options: ['Cosine', 'Sine', 'Tangent', 'None of these'],
              correctAnswer: 0,
              explanation: 'CAH: Cosine $=$ Adjacent / Hypotenuse. Sine uses opposite/hypotenuse, and tangent uses opposite/adjacent.',
            },
            {
              question: 'In a right triangle, opposite $= 5$, adjacent $= 12$, hypotenuse $= 13$. What is $\\tan\\theta$?',
              options: ['$\\frac{5}{12}$', '$\\frac{5}{13}$', '$\\frac{12}{13}$', '$\\frac{12}{5}$'],
              correctAnswer: 0,
              explanation: 'TOA: $\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{5}{12}$.',
            },
          ],
        },
      },
      {
        id: 'trg2-setup-note',
        type: 'text' as const,
        content: `## Now Build All Three Yourself

When you write the three ratios for a triangle, keep the **hypotenuse on the bottom** for sine and cosine, and remember tangent never uses the hypotenuse at all.

The next drill uses the **5-12-13** right triangle — another set of whole-number side lengths that satisfies $5^2 + 12^2 = 25 + 144 = 169 = 13^2$.`,
      },
      {
        id: 'trg2-ratio-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Ratios** 🧮

A right triangle has opposite $= 5$, adjacent $= 12$, and hypotenuse $= 13$ (relative to angle $\\theta$). Enter each ratio as a fraction like \`5/13\`.

**1)** $\\sin\\theta = \\,?$
**2)** $\\cos\\theta = \\,?$
**3)** $\\tan\\theta = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/13', '12/13', '5/12'],
          hint1: 'SOH: $\\sin\\theta = \\text{opp}/\\text{hyp} = 5/13$.',
          hint2: 'CAH: $\\cos\\theta = \\text{adj}/\\text{hyp} = 12/13$.',
          hint3: 'TOA: $\\tan\\theta = \\text{opp}/\\text{adj} = 5/12$.',
          explanation: '$\\sin\\theta = \\frac{5}{13}$, $\\cos\\theta = \\frac{12}{13}$, $\\tan\\theta = \\frac{5}{12}$. (This is the famous 5-12-13 right triangle.)',
        },
      },
      {
        id: 'trg2-cofunction',
        type: 'text' as const,
        content: `## A Neat Pattern: Cofunctions

Look again at the 3-4-5 triangle. For the angle opposite $3$ we found $\\sin\\theta = \\frac{3}{5}$. For the **other** acute angle, the opposite and adjacent sides swap, so its cosine is also $\\frac{3}{5}$.

That's the **cofunction relationship**: in a right triangle the two acute angles add to $90^\\circ$, and

$$\\sin\\theta = \\cos(90^\\circ - \\theta)$$

> 💡 This is *why* it's called "co"-sine — the **co**mplement's sine. We'll use it again when we work with special angles in Part 4.`,
      },
      {
        id: 'trg2-match-check',
        type: 'dropdown-select' as const,
        content: `**Match the Ratio** 🔽

For the 3-4-5 triangle, let $\\theta$ be the angle **opposite the side of length $3$** (so opposite $=3$, adjacent $=4$, hypotenuse $=5$).`,
        exercise: {
          dropdowns: [
            { label: '$\\sin\\theta = $', options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$'] },
            { label: '$\\cos\\theta = $', options: ['$\\frac{4}{5}$', '$\\frac{3}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{4}$'] },
            { label: '$\\tan\\theta = $', options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$'] },
          ],
          correctAnswers: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{3}{4}$'],
          hint1: 'SOH: $\\sin\\theta = \\text{opp}/\\text{hyp} = 3/5$.',
          hint2: 'CAH: $\\cos\\theta = \\text{adj}/\\text{hyp} = 4/5$.',
          hint3: 'TOA: $\\tan\\theta = \\text{opp}/\\text{adj} = 3/4$.',
          explanation: '$\\sin\\theta = \\frac{3}{5}$, $\\cos\\theta = \\frac{4}{5}$, $\\tan\\theta = \\frac{3}{4}$. Sine and cosine sit over the hypotenuse $5$; tangent is the two legs.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'trigonometric-ratios-geo',
    sections: [
      {
        id: 'trg3-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Ratios

**Part 3 of 5 — Solving for Missing Sides**

---

> 🔑 **Why it matters:** If you know one acute angle and one side of a right triangle, a single trig ratio lets you find any other side. This is how surveyors, builders, and navigators measure distances they can't reach.`,
      },
      {
        id: 'trg3-strategy',
        type: 'text' as const,
        content: `## A Reliable Strategy

To find a missing side:

1. **Label** the sides relative to the known angle (opposite / adjacent / hypotenuse).
2. **Pick the ratio** that uses the side you *have* and the side you *want*.
3. **Set up** the equation and solve for the unknown.

### Worked Example: Find $x$

A right triangle has a $30^\\circ$ angle. The hypotenuse is $20$, and $x$ is the side **opposite** the $30^\\circ$ angle.

We have the hypotenuse, we want the opposite — that's **sine** (SOH):

$$\\sin 30^\\circ = \\frac{x}{20}$$

Since $\\sin 30^\\circ = \\dfrac{1}{2}$:

$$x = 20 \\cdot \\sin 30^\\circ = 20 \\cdot \\tfrac{1}{2} = 10$$

> ✅ **Sanity check:** The side opposite the smallest angle should be the shortest. $10 < 20$ ✓`,
      },
      {
        id: 'trg3-pick-ratio',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Ratio** 🔽

In a right triangle you know angle $\\theta$ and one side, and you want another side. Choose the ratio that connects them.`,
        exercise: {
          dropdowns: [
            { label: 'Have hypotenuse, want **opposite**:', options: ['sine', 'cosine', 'tangent'] },
            { label: 'Have hypotenuse, want **adjacent**:', options: ['cosine', 'sine', 'tangent'] },
            { label: 'Have adjacent, want **opposite**:', options: ['tangent', 'sine', 'cosine'] },
          ],
          correctAnswers: ['sine', 'cosine', 'tangent'],
          hint1: 'SOH ties opposite to hypotenuse → sine.',
          hint2: 'CAH ties adjacent to hypotenuse → cosine.',
          hint3: 'TOA ties opposite to adjacent → tangent.',
          explanation: 'Match the two sides involved to the mnemonic: opposite+hypotenuse → sine, adjacent+hypotenuse → cosine, opposite+adjacent → tangent.',
        },
      },
      {
        id: 'trg3-worked2',
        type: 'text' as const,
        content: `## When the Unknown Is in the Denominator

Sometimes the side you want is the **hypotenuse** (the bottom of the fraction).

### Worked Example: Find the hypotenuse $h$

A right triangle has a $40^\\circ$ angle. The side **adjacent** to it is $12$, and $h$ is the hypotenuse.

Have adjacent, want hypotenuse → **cosine** (CAH):

$$\\cos 40^\\circ = \\frac{12}{h}$$

Multiply both sides by $h$, then divide by $\\cos 40^\\circ$:

$$h = \\frac{12}{\\cos 40^\\circ} \\approx \\frac{12}{0.766} \\approx 15.7$$

> ⚠️ **Common mistake:** When the unknown is in the **denominator**, you must *divide* the known side by the trig value — not multiply. Multiplying gives the wrong answer.`,
      },
      {
        id: 'trg3-side-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Side** 🧮

Use the given exact trig values. Enter a number (round decimals to **one** decimal place).

**1)** $\\sin 30^\\circ = \\dfrac{x}{16}$, and $\\sin 30^\\circ = 0.5$.  Find $x$.
**2)** $\\cos 60^\\circ = \\dfrac{y}{18}$, and $\\cos 60^\\circ = 0.5$.  Find $y$.
**3)** $\\tan 45^\\circ = \\dfrac{z}{7}$, and $\\tan 45^\\circ = 1$.  Find $z$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '9', '7'],
          hint1: '$x = 16 \\cdot \\sin 30^\\circ = 16 \\cdot 0.5 = 8$.',
          hint2: '$y = 18 \\cdot \\cos 60^\\circ = 18 \\cdot 0.5 = 9$.',
          hint3: '$z = 7 \\cdot \\tan 45^\\circ = 7 \\cdot 1 = 7$.',
          explanation: '1) $x = 16(0.5) = 8$.  2) $y = 18(0.5) = 9$.  3) $z = 7(1) = 7$. Each time, multiply the known side by the trig value because the unknown was in the numerator.',
        },
      },
      {
        id: 'trg3-setup-note',
        type: 'text' as const,
        content: `## Setting Up the Equation Correctly

The hardest part is usually *choosing the ratio and writing the equation* — the algebra afterward is easy. Always ask two questions:

1. **Which side do I have?** (opposite, adjacent, or hypotenuse)
2. **Which side do I want?**

Then pick the single ratio that contains *both* of those sides. The last check makes you do exactly that.`,
      },
      {
        id: 'trg3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You know a $25^\\circ$ angle, its adjacent side $= 9$, and you want the **opposite** side. Which equation is correct?',
              options: [
                '$\\tan 25^\\circ = \\dfrac{\\text{opposite}}{9}$',
                '$\\sin 25^\\circ = \\dfrac{\\text{opposite}}{9}$',
                '$\\cos 25^\\circ = \\dfrac{9}{\\text{opposite}}$',
                '$\\tan 25^\\circ = \\dfrac{9}{\\text{opposite}}$',
              ],
              correctAnswer: 0,
              explanation: 'Opposite and adjacent → tangent (TOA). $\\tan 25^\\circ = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{\\text{opposite}}{9}$, so opposite $= 9\\tan 25^\\circ$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'trigonometric-ratios-geo',
    sections: [
      {
        id: 'trg4-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Ratios

**Part 4 of 5 — Finding Angles & Special Triangles**

---

> 🔑 **Big Idea:** If a trig ratio turns an *angle* into a *number*, then the **inverse** trig functions ($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$) turn a *ratio* back into an *angle*.`,
      },
      {
        id: 'trg4-inverse',
        type: 'text' as const,
        content: `## Inverse Trig: From Ratio to Angle

If $\\sin\\theta = 0.5$, what is $\\theta$? Undo the sine with **inverse sine**:

$$\\theta = \\sin^{-1}(0.5) = 30^\\circ$$

Each ratio has its own inverse:

| Known ratio | Find the angle with |
|-------------|---------------------|
| $\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}$ | $\\theta = \\sin^{-1}\\!\\left(\\dfrac{\\text{opp}}{\\text{hyp}}\\right)$ |
| $\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}$ | $\\theta = \\cos^{-1}\\!\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$ |
| $\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}$ | $\\theta = \\tan^{-1}\\!\\left(\\dfrac{\\text{opp}}{\\text{adj}}\\right)$ |

### Worked Example

A right triangle has opposite $= 3$ and adjacent $= 4$. Find $\\theta$.

$$\\tan\\theta = \\frac{3}{4} = 0.75 \\;\\Rightarrow\\; \\theta = \\tan^{-1}(0.75) \\approx 36.9^\\circ$$

> ⚠️ $\\sin^{-1}$ is **not** $\\dfrac{1}{\\sin}$. The "$-1$" means *inverse function*, not a reciprocal exponent.`,
      },
      {
        id: 'trg4-special',
        type: 'text' as const,
        content: `## The Special Right Triangles

Two triangles appear so often that their exact ratios are worth memorizing.

**The $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle** has sides in ratio $1 : \\sqrt{3} : 2$ (short leg : long leg : hypotenuse).

**The $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle** has sides in ratio $1 : 1 : \\sqrt{2}$ (leg : leg : hypotenuse).

| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |
|----------|--------------|--------------|--------------|
| $30^\\circ$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$ |
| $45^\\circ$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $1$ |
| $60^\\circ$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{1}{2}$ | $\\sqrt{3}$ |

> 💡 Notice the cofunction symmetry from Part 2: $\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$, and $\\sin 60^\\circ = \\cos 30^\\circ = \\frac{\\sqrt 3}{2}$.`,
      },
      {
        id: 'trg4-special-drill',
        type: 'dropdown-select' as const,
        content: `**Special Angle Values** 🔽

Recall the exact values from the table above.`,
        exercise: {
          dropdowns: [
            { label: '$\\sin 30^\\circ = $', options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$'] },
            { label: '$\\cos 45^\\circ = $', options: ['$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\sqrt{2}$'] },
            { label: '$\\tan 60^\\circ = $', options: ['$\\sqrt{3}$', '$1$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{1}{2}$'] },
          ],
          correctAnswers: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\sqrt{3}$'],
          hint1: 'In a $30$-$60$-$90$ triangle, the side opposite $30^\\circ$ is the short leg ($1$) over the hypotenuse ($2$).',
          hint2: 'A $45$-$45$-$90$ triangle has legs $1$ and hypotenuse $\\sqrt{2}$, so $\\cos 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.',
          hint3: 'For $60^\\circ$: opposite $= \\sqrt{3}$, adjacent $= 1$, so $\\tan 60^\\circ = \\sqrt{3}$.',
          explanation: '$\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\tan 60^\\circ = \\sqrt{3}$ — all read straight from the special-triangle ratios.',
        },
      },
      {
        id: 'trg4-reverse-note',
        type: 'text' as const,
        content: `## Reading the Table Backwards

The drill above gave you an angle and asked for a ratio. The special angles also work the **other way**: given a familiar ratio, you can name the angle without a calculator.

For example, if $\\tan\\theta = 1$, scan the table for a tangent of $1$ — that's $45^\\circ$. The next drill is all reverse lookups like this.`,
      },
      {
        id: 'trg4-angle-drill',
        type: 'input-boxes' as const,
        content: `**Find the Angle** 🧮

Use the special-angle table to read off $\\theta$ (in degrees). Enter just the number.

**1)** $\\cos\\theta = \\dfrac{1}{2} \\;\\Rightarrow\\; \\theta = \\,?^\\circ$
**2)** $\\tan\\theta = 1 \\;\\Rightarrow\\; \\theta = \\,?^\\circ$
**3)** $\\sin\\theta = \\dfrac{\\sqrt{3}}{2} \\;\\Rightarrow\\; \\theta = \\,?^\\circ$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '45', '60'],
          hint1: '$\\cos 60^\\circ = \\frac{1}{2}$, so $\\theta = \\cos^{-1}(\\frac{1}{2}) = 60^\\circ$.',
          hint2: '$\\tan 45^\\circ = 1$, so $\\theta = 45^\\circ$.',
          hint3: '$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, so $\\theta = 60^\\circ$.',
          explanation: '1) $\\cos^{-1}(\\tfrac12)=60^\\circ$.  2) $\\tan^{-1}(1)=45^\\circ$.  3) $\\sin^{-1}(\\tfrac{\\sqrt3}{2})=60^\\circ$. (Note $\\cos 60^\\circ$ and $\\sin 30^\\circ$ both equal $\\frac12$ — read the function carefully.)',
        },
      },
      {
        id: 'trg4-inverse-recap',
        type: 'text' as const,
        content: `## When the Ratio Isn't a "Nice" Number

Special angles are the exceptions — most ratios don't land on $30^\\circ$, $45^\\circ$, or $60^\\circ$. For those, you use a calculator's $\\sin^{-1}$, $\\cos^{-1}$, or $\\tan^{-1}$ button.

The setup is identical: build the ratio from the sides you know, then apply the matching **inverse**. The final check tests whether you can pick the right inverse.`,
      },
      {
        id: 'trg4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has opposite $= 8$ and hypotenuse $= 10$ for angle $\\theta$. Which expression gives $\\theta$?',
              options: ['$\\sin^{-1}(0.8)$', '$\\cos^{-1}(0.8)$', '$\\tan^{-1}(0.8)$', '$\\sin^{-1}(1.25)$'],
              correctAnswer: 0,
              explanation: 'Opposite over hypotenuse is sine: $\\sin\\theta = \\frac{8}{10} = 0.8$, so $\\theta = \\sin^{-1}(0.8) \\approx 53.1^\\circ$.',
            },
            {
              question: 'What does the "$-1$" in $\\tan^{-1}$ mean?',
              options: [
                'The inverse function — it returns an angle',
                'The reciprocal $\\frac{1}{\\tan}$',
                'A negative angle',
                'Tangent raised to the power $-1$',
              ],
              correctAnswer: 0,
              explanation: '$\\tan^{-1}$ is the inverse (arctangent) function: it takes a ratio and returns the angle. It is *not* the reciprocal $\\frac{1}{\\tan\\theta}$, which would be cotangent.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'trigonometric-ratios-geo',
    sections: [
      {
        id: 'trg5-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Ratios

**Part 5 of 5 — Applications & Mastery Check**

---

You can now (1) label a right triangle, (2) write the three ratios, (3) solve for missing sides, and (4) use inverses and special triangles to find angles. Let's apply it to the real world and lock it in.`,
      },
      {
        id: 'trg5-applications',
        type: 'text' as const,
        content: `## Angle of Elevation & Depression

A key application is measuring heights and distances you can't reach directly.

- **Angle of elevation:** the angle *up* from the horizontal to an object (e.g., looking up at a treetop).
- **Angle of depression:** the angle *down* from the horizontal to an object (e.g., looking down from a cliff).

### Worked Example: Height of a Tree

You stand $50$ ft from the base of a tree. The angle of elevation to the top is $32^\\circ$. How tall is the tree?

The height is **opposite** the angle, and $50$ ft is **adjacent** → tangent:

$$\\tan 32^\\circ = \\frac{h}{50} \\;\\Rightarrow\\; h = 50\\tan 32^\\circ \\approx 50(0.625) \\approx 31.2 \\text{ ft}$$

> 💡 The angle of elevation from the ground and the angle of depression from the top are **equal** — they're alternate interior angles between two parallel horizontal lines.`,
      },
      {
        id: 'trg5-app-drill',
        type: 'input-boxes' as const,
        content: `**Application Practice** 🧮

A $20$-ft ladder leans against a wall, making a $60^\\circ$ angle with the **ground**.

Use exact special-angle values: $\\sin 60^\\circ = \\dfrac{\\sqrt 3}{2}\\approx 0.866$, $\\cos 60^\\circ = 0.5$.

**1)** How high up the wall does the ladder reach? (height $=$ opposite the $60^\\circ$ angle; round to **one** decimal place)
**2)** How far is the base of the ladder from the wall? (distance $=$ adjacent; exact whole number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['17.3', '10'],
          hint1: 'Height is opposite the angle, ladder is the hypotenuse → sine: $\\text{height} = 20\\sin 60^\\circ = 20(0.866)$.',
          hint2: 'Distance from wall is adjacent → cosine: $\\text{distance} = 20\\cos 60^\\circ = 20(0.5)$.',
          hint3: '$20 \\times 0.866 = 17.32 \\approx 17.3$, and $20 \\times 0.5 = 10$.',
          explanation: '1) height $= 20\\sin 60^\\circ = 20(0.866) \\approx 17.3$ ft.  2) distance $= 20\\cos 60^\\circ = 20(0.5) = 10$ ft.',
        },
      },
      {
        id: 'trg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Name a side | Opposite faces $\\theta$; adjacent touches $\\theta$; hypotenuse faces the right angle |
| Find a ratio | SOH-CAH-TOA |
| Find a side (in numerator) | side $=$ (known side) $\\times$ (trig value) |
| Find a side (in denominator) | side $=$ (known side) $\\div$ (trig value) |
| Find an angle | $\\theta = \\sin^{-1}, \\cos^{-1},$ or $\\tan^{-1}$ of the ratio |
| Special angles | $30$-$60$-$90$ is $1{:}\\sqrt3{:}2$; $45$-$45$-$90$ is $1{:}1{:}\\sqrt2$ |

> ⚠️ Remember the two classic traps: don't *multiply* when the unknown is a denominator, and $\\sin^{-1}$ is an inverse function, **not** a reciprocal.`,
      },
      {
        id: 'trg5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has a $45^\\circ$ angle and a hypotenuse of $\\sqrt{2}$. The length of each leg is:',
              options: ['$1$', '$\\sqrt{2}$', '$2$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'In a $45$-$45$-$90$ triangle the legs are equal and hypotenuse $=$ leg $\\times \\sqrt2$. So leg $= \\frac{\\sqrt2}{\\sqrt2} = 1$. (Check: $\\cos 45^\\circ = \\frac{\\text{leg}}{\\sqrt2} = \\frac{\\sqrt2}{2}$ gives leg $=1$.)',
            },
            {
              question: 'From a window $60$ ft up, the angle of depression to a car is $30^\\circ$. How far is the car from the base of the building? (Use $\\tan 30^\\circ \\approx 0.577$.)',
              options: ['$\\approx 104$ ft', '$\\approx 35$ ft', '$\\approx 60$ ft', '$\\approx 120$ ft'],
              correctAnswer: 0,
              explanation: 'The $60$ ft height is opposite the $30^\\circ$ angle and the distance $d$ is adjacent, so $\\tan 30^\\circ = \\frac{60}{d}$. Then $d = \\frac{60}{0.577} \\approx 104$ ft.',
            },
          ],
        },
      },
      {
        id: 'trg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For angle $\\theta$, opposite $= 7$, adjacent $= 24$, hypotenuse $= 25$. What is $\\cos\\theta$?',
              options: ['$\\frac{24}{25}$', '$\\frac{7}{25}$', '$\\frac{7}{24}$', '$\\frac{24}{7}$'],
              correctAnswer: 0,
              explanation: 'CAH: $\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{24}{25}$.',
            },
            {
              question: 'You know a $50^\\circ$ angle and the side **adjacent** to it is $10$. To find the **hypotenuse** $h$, set up:',
              options: [
                '$\\cos 50^\\circ = \\dfrac{10}{h}$',
                '$\\sin 50^\\circ = \\dfrac{10}{h}$',
                '$\\tan 50^\\circ = \\dfrac{h}{10}$',
                '$\\cos 50^\\circ = \\dfrac{h}{10}$',
              ],
              correctAnswer: 0,
              explanation: 'Adjacent and hypotenuse → cosine (CAH). $\\cos 50^\\circ = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{10}{h}$, so $h = \\dfrac{10}{\\cos 50^\\circ}$.',
            },
            {
              question: 'If $\\tan\\theta = \\frac{\\sqrt{3}}{3}$, then $\\theta = $',
              options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
              correctAnswer: 0,
              explanation: '$\\tan 30^\\circ = \\dfrac{1}{\\sqrt3} = \\dfrac{\\sqrt3}{3}$, so $\\theta = 30^\\circ$.',
            },
          ],
        },
      },
    ],
  },
]
