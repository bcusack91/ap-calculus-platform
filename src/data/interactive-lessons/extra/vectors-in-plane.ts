import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Vectors in the Plane (AP Precalculus).
 * Registry key / DB Topic.slug: 'vectors-in-plane'.
 * 7 parts, gold-standard structure: geometric idea of a vector & magnitude →
 * component form from points → scalar multiples, unit vectors & resultants →
 * the full vector operations toolkit (linear combinations) → direction angle &
 * converting between component form and magnitude/direction → applications
 * (velocity, force, bearings) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every magnitude, component, unit vector, and direction angle was verified
 * numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip1-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 1 of 7 — What Is a Vector?**

---

### Topics in This Part

| Section |
|---------|
| Scalars vs. Vectors |
| Geometric Vectors & Notation |
| Equal Vectors |
| Magnitude (Length) of a Vector |

> 🔑 **Key Concept:** A **vector** carries two pieces of information at once — a *magnitude* (how much) and a *direction* (which way). That single idea models velocity, force, and displacement, which is why vectors show up everywhere in physics and AP Precalculus Unit 4.`,
      },
      {
        id: 'vip1-scalar-vs-vector',
        type: 'text' as const,
        content: `## Scalars vs. Vectors

A **scalar** is just a number with units — it has size but no direction.

A **vector** has both **magnitude** and **direction**.

| Quantity | Type | Why |
|----------|------|-----|
| A temperature of $72^\\circ$ | scalar | only a size |
| A speed of $60$ mph | scalar | size, no direction |
| A *velocity* of $60$ mph **due north** | vector | size **and** direction |
| A mass of $5$ kg | scalar | only a size |
| A *force* of $5$ N pushing **right** | vector | size **and** direction |

> 💡 **Speed vs. velocity** is the classic distinction. "$60$ mph" is a scalar (speed); "$60$ mph heading east" is a vector (velocity). The direction is what makes it a vector.`,
      },
      {
        id: 'vip1-scalar-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a **vector** quantity?',
              options: [
                'A displacement of $5$ km to the northeast',
                'A temperature of $30^\\circ$C',
                'A distance of $5$ km',
                'A time of $3$ seconds',
              ],
              correctAnswer: 0,
              explanation: 'Displacement "to the northeast" specifies both a size ($5$ km) and a direction (northeast), so it is a vector. Temperature, distance, and time are scalars — they have no direction.',
            },
            {
              question: 'A car travels at "$45$ mph." What kind of quantity is this on its own?',
              options: ['A scalar (speed)', 'A vector (velocity)', 'A scalar (velocity)', 'A vector (displacement)'],
              correctAnswer: 0,
              explanation: '"$45$ mph" gives a magnitude but no direction, so it is the **scalar** quantity speed. Adding a direction (e.g., "$45$ mph north") would make it the vector quantity velocity.',
            },
          ],
        },
      },
      {
        id: 'vip1-notation',
        type: 'text' as const,
        content: `## Drawing & Naming Vectors

Geometrically, a vector is a **directed line segment** — an arrow. It has:

- a **tail** (initial point), where the arrow starts, and
- a **head** (terminal point), where the arrowhead is.

The **length** of the arrow shows the magnitude; the way it points shows the direction.

### Notation

| Way to write it | Meaning |
|-----------------|---------|
| $\\vec{v}$ or $\\mathbf{v}$ | a vector named $v$ |
| $\\vec{PQ}$ | the vector **from** point $P$ **to** point $Q$ |
| $\\lVert \\vec{v} \\rVert$ or $\\lvert \\vec{v} \\rvert$ | the **magnitude** (length) of $\\vec{v}$ |

> ⚠️ **Order matters.** $\\vec{PQ}$ starts at $P$ and ends at $Q$. The vector $\\vec{QP}$ points the *opposite* way — same length, reversed direction.`,
      },
      {
        id: 'vip1-equal-vectors',
        type: 'text' as const,
        content: `## Equal Vectors

Two vectors are **equal** when they have the **same magnitude** *and* the **same direction** — no matter where they are drawn on the page.

A vector has no fixed location. You can slide it anywhere (this is called a **translation**), and as long as you don't rotate it or stretch it, it stays the *same vector*.

$$\\vec{u} = \\vec{v} \\iff \\lVert\\vec{u}\\rVert = \\lVert\\vec{v}\\rVert \\;\\text{ and they point the same way}$$

> 🔑 **Position doesn't matter.** Two arrows of equal length pointing in the same direction are equal vectors even if they sit in different parts of the plane. This freedom is what lets us "move" a vector's tail to the origin in Part 2.`,
      },
      {
        id: 'vip1-equal-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two arrows have the same length and point in the same direction but are drawn in different places. Are they equal vectors?',
              options: [
                'Yes — equal magnitude and equal direction is all that is required',
                'No — they must start at the same point',
                'No — they must lie on the same line',
                'Only if they both start at the origin',
              ],
              correctAnswer: 0,
              explanation: 'Vectors have no fixed position. Same magnitude + same direction = equal vectors, regardless of where they are drawn.',
            },
            {
              question: 'How does $\\vec{QP}$ compare to $\\vec{PQ}$?',
              options: [
                'Same length, opposite direction',
                'Same length, same direction (they are equal)',
                'Twice the length, same direction',
                'Half the length, opposite direction',
              ],
              correctAnswer: 0,
              explanation: '$\\vec{PQ}$ goes from $P$ to $Q$; $\\vec{QP}$ goes from $Q$ back to $P$. The arrow is reversed, so it has the same length but the opposite direction. In fact $\\vec{QP} = -\\vec{PQ}$.',
            },
          ],
        },
      },
      {
        id: 'vip1-magnitude',
        type: 'text' as const,
        content: `## Magnitude (Length)

The **magnitude** of a vector is the length of its arrow. If you know how far the vector goes horizontally and vertically, the magnitude is just the **distance formula** — the Pythagorean theorem in disguise.

If a vector moves $a$ units horizontally and $b$ units vertically, then

$$\\lVert\\vec{v}\\rVert = \\sqrt{a^2 + b^2}$$

### Example

A vector that goes $3$ right and $4$ up:

$$\\lVert\\vec{v}\\rVert = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

> 💡 The numbers $3, 4, 5$ form a **Pythagorean triple** — a right triangle whose legs and hypotenuse are all whole numbers. Memorizing $3\\text{-}4\\text{-}5$, $5\\text{-}12\\text{-}13$, and $8\\text{-}15\\text{-}17$ makes magnitudes fast to compute.`,
      },
      {
        id: 'vip1-magnitude-drill',
        type: 'input-boxes' as const,
        content: `**Find the Magnitude** 🧮

Use $\\lVert\\vec{v}\\rVert = \\sqrt{a^2 + b^2}$ for a vector that moves $a$ right and $b$ up.

**1)** $6$ right, $8$ up:  $\\lVert\\vec{v}\\rVert = \\,?$
**2)** $5$ right, $12$ up:  $\\lVert\\vec{v}\\rVert = \\,?$
**3)** $9$ right, $12$ up:  $\\lVert\\vec{v}\\rVert = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '13', '15'],
          hint1: '$\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          hint2: '$\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ — a $5\\text{-}12\\text{-}13$ triple.',
          hint3: '$\\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$. (It is a scaled $3\\text{-}4\\text{-}5$ triple.)',
          explanation: '1) $\\sqrt{100}=10$.  2) $\\sqrt{169}=13$.  3) $\\sqrt{225}=15$. Each is the hypotenuse of a right triangle with the given legs.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip2-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 2 of 7 — Component Form**

---

> 🔑 **The Big Move:** Because a vector can slide anywhere, we slide its tail to the **origin**. Then the vector is described completely by where its head lands: its **components**.`,
      },
      {
        id: 'vip2-components',
        type: 'text' as const,
        content: `## Component Form

A vector in **component form** is written with angle brackets:

$$\\vec{v} = \\langle a,\\, b \\rangle$$

- $a$ is the **horizontal component** (how far right, if positive),
- $b$ is the **vertical component** (how far up, if positive).

This is the "standard position" of a vector: tail at the origin $(0,0)$, head at the point $(a, b)$.

> ⚠️ **Brackets, not parentheses.** We write $\\langle a, b\\rangle$ for a vector and $(a, b)$ for a point. They look similar but mean different things — a point is a *location*, a vector is a *displacement*. AP graders care about this distinction.

### Example

$\\vec{v} = \\langle 3, -2 \\rangle$ means: starting from the tail, move **$3$ right** and **$2$ down**. Its head, placed in standard position, sits at the point $(3, -2)$.`,
      },
      {
        id: 'vip2-component-check',
        type: 'dropdown-select' as const,
        content: `**Read the Components** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'In $\\langle -4, 7 \\rangle$, the horizontal component is:', options: ['$-4$', '$7$', '$4$', '$-7$'] },
            { label: '$\\langle 0, 5 \\rangle$ describes a vector that points:', options: ['straight up', 'straight down', 'straight right', 'straight left'] },
            { label: 'The vector from the origin to the point $(2, -6)$ is:', options: ['$\\langle 2, -6 \\rangle$', '$\\langle -6, 2 \\rangle$', '$(2, -6)$', '$\\langle -2, 6 \\rangle$'] },
          ],
          correctAnswers: ['$-4$', 'straight up', '$\\langle 2, -6 \\rangle$'],
          hint1: 'The first number in $\\langle a, b\\rangle$ is always the horizontal component.',
          hint2: 'A $0$ horizontal component means no left/right movement; a positive vertical component means it points up.',
          hint3: 'In standard position the components match the head\'s coordinates — but written with angle brackets as a vector.',
          explanation: 'The horizontal component of $\\langle -4,7\\rangle$ is $-4$. $\\langle 0,5\\rangle$ has no horizontal move and goes $5$ up, so it points straight up. The origin-to-$(2,-6)$ vector is $\\langle 2,-6\\rangle$.',
        },
      },
      {
        id: 'vip2-from-points',
        type: 'text' as const,
        content: `## Finding Components From Two Points

To find the components of $\\vec{PQ}$ (from $P$ to $Q$), subtract the **tail from the head** — that is, **terminal minus initial**:

$$\\vec{PQ} = \\langle\\, x_Q - x_P,\\;\\; y_Q - y_P \\,\\rangle$$

### Worked Example: $P(1, 2)$ and $Q(4, 7)$

$$\\vec{PQ} = \\langle 4 - 1,\\; 7 - 2 \\rangle = \\langle 3,\\, 5 \\rangle$$

So going from $P$ to $Q$ means moving $3$ right and $5$ up. ✓

> ⚠️ **Head minus tail, every time.** A common mistake is subtracting in the wrong order. $\\vec{PQ}$ uses $Q$ (the head) **minus** $P$ (the tail). Reversing it gives $\\vec{QP}$, the opposite vector.`,
      },
      {
        id: 'vip2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $A(-3, 5)$ and $B(2, -1)$

$$\\vec{AB} = \\langle 2 - (-3),\\; -1 - 5 \\rangle = \\langle 5,\\, -6 \\rangle$$

And its magnitude:

$$\\lVert\\vec{AB}\\rVert = \\sqrt{5^2 + (-6)^2} = \\sqrt{25 + 36} = \\sqrt{61}$$

Since $\\sqrt{61}$ is not a perfect square, we leave it exact (or approximate: $\\sqrt{61} \\approx 7.81$).

> 💡 **Watch the signs.** Subtracting a negative coordinate flips it to addition: $2 - (-3) = 2 + 3 = 5$. Careful sign work is where most component errors hide.`,
      },
      {
        id: 'vip2-from-points-drill',
        type: 'input-boxes' as const,
        content: `**Components From Points** 🧮

Find $\\vec{PQ} = \\langle x_Q - x_P,\\; y_Q - y_P\\rangle$. Enter the horizontal component, then the vertical component.

**1)** $P(2, 1),\\; Q(7, 4)$:  $\\vec{PQ} = \\langle\\,?,\\; ?\\,\\rangle$
**2)** $P(-1, 3),\\; Q(4, -2)$:  $\\vec{PQ} = \\langle\\,?,\\; ?\\,\\rangle$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['5', '3', '5', '-5'],
          hint1: 'For #1: $x$: $7 - 2 = 5$; $y$: $4 - 1 = 3$.',
          hint2: 'For #2: $x$: $4 - (-1) = 4 + 1 = 5$.',
          hint3: 'For #2: $y$: $-2 - 3 = -5$. Subtract the tail from the head every time.',
          explanation: '1) $\\langle 7-2,\\,4-1\\rangle = \\langle 5,3\\rangle$.  2) $\\langle 4-(-1),\\,-2-3\\rangle = \\langle 5,-5\\rangle$.',
        },
      },
      {
        id: 'vip2-mag-from-points',
        type: 'multiple-choice' as const,
        content: `**Putting It Together** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The magnitude of $\\vec{PQ}$ for $P(1, 2)$ and $Q(4, 6)$ is:',
              options: ['$5$', '$\\sqrt{7}$', '$7$', '$\\sqrt{13}$'],
              correctAnswer: 0,
              explanation: '$\\vec{PQ} = \\langle 4-1,\\,6-2\\rangle = \\langle 3,4\\rangle$, so $\\lVert\\vec{PQ}\\rVert = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$.',
            },
            {
              question: 'If $\\vec{AB} = \\langle 5, -6\\rangle$, then $\\vec{BA} = $',
              options: ['$\\langle -5, 6\\rangle$', '$\\langle 5, -6\\rangle$', '$\\langle 6, -5\\rangle$', '$\\langle -6, 5\\rangle$'],
              correctAnswer: 0,
              explanation: '$\\vec{BA}$ is the reverse of $\\vec{AB}$, so every component flips sign: $\\langle -5, 6\\rangle$. Same length, opposite direction.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip3-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 3 of 7 — Adding, Subtracting & Scaling Vectors**

---

> 🔑 **The Rule:** To add, subtract, or scale vectors, just work **component by component**. The geometry (tip-to-tail arrows) and the algebra (matching components) always agree.`,
      },
      {
        id: 'vip3-add-sub',
        type: 'text' as const,
        content: `## Adding & Subtracting

Add or subtract vectors by combining matching components:

$$\\langle a_1, b_1\\rangle + \\langle a_2, b_2\\rangle = \\langle a_1 + a_2,\\; b_1 + b_2\\rangle$$
$$\\langle a_1, b_1\\rangle - \\langle a_2, b_2\\rangle = \\langle a_1 - a_2,\\; b_1 - b_2\\rangle$$

### Examples

$$\\langle 3, 5\\rangle + \\langle 4, -2\\rangle = \\langle 3+4,\\; 5+(-2)\\rangle = \\langle 7,\\, 3\\rangle$$
$$\\langle 3, 5\\rangle - \\langle 4, -2\\rangle = \\langle 3-4,\\; 5-(-2)\\rangle = \\langle -1,\\, 7\\rangle$$

> 💡 **Tip-to-tail.** Geometrically, $\\vec{u} + \\vec{v}$ means: draw $\\vec{u}$, then start $\\vec{v}$ at the head of $\\vec{u}$. The sum (called the **resultant**) runs from the original tail to the final head. The component rule is the shortcut for that picture.`,
      },
      {
        id: 'vip3-scalar-mult',
        type: 'text' as const,
        content: `## Scalar Multiplication

Multiplying a vector by a **scalar** $k$ multiplies **each component** by $k$:

$$k\\langle a, b\\rangle = \\langle ka,\\; kb\\rangle$$

This **scales the length** by $|k|$. The direction:
- stays the **same** if $k > 0$,
- **reverses** if $k < 0$ (the arrow flips around).

### Examples

$$3\\langle 2, -1\\rangle = \\langle 6,\\, -3\\rangle \\quad\\text{(3× longer, same direction)}$$
$$-2\\langle 2, -1\\rangle = \\langle -4,\\, 2\\rangle \\quad\\text{(2× longer, reversed direction)}$$

> 🔑 **Magnitude scales by $|k|$:** $\\;\\lVert k\\vec{v}\\rVert = |k|\\,\\lVert\\vec{v}\\rVert$. So $3\\vec{v}$ is three times as long, and $-2\\vec{v}$ is twice as long but points the opposite way.`,
      },
      {
        id: 'vip3-ops-drill',
        type: 'input-boxes' as const,
        content: `**Combine the Vectors** 🧮

Let $\\vec{u} = \\langle 4, -1\\rangle$ and $\\vec{v} = \\langle -2, 3\\rangle$. Enter each result as $\\langle\\,?,\\;?\\,\\rangle$ (horizontal, then vertical).

**1)** $\\vec{u} + \\vec{v} = \\langle\\,?,\\;?\\,\\rangle$
**2)** $\\vec{u} - \\vec{v} = \\langle\\,?,\\;?\\,\\rangle$
**3)** $3\\vec{u} = \\langle\\,?,\\;?\\,\\rangle$`,
        exercise: {
          boxes: 6,
          correctAnswers: ['2', '2', '6', '-4', '12', '-3'],
          hint1: 'Add components: $\\langle 4+(-2),\\,-1+3\\rangle = \\langle 2, 2\\rangle$.',
          hint2: 'Subtract components: $\\langle 4-(-2),\\,-1-3\\rangle = \\langle 6, -4\\rangle$.',
          hint3: 'Scale each component by $3$: $\\langle 3\\cdot 4,\\,3\\cdot(-1)\\rangle = \\langle 12, -3\\rangle$.',
          explanation: '1) $\\langle 2,2\\rangle$.  2) $\\langle 6,-4\\rangle$.  3) $\\langle 12,-3\\rangle$. Work component by component each time.',
        },
      },
      {
        id: 'vip3-scalar-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How does $-3\\vec{v}$ compare to $\\vec{v}$?',
              options: [
                '$3$ times as long, opposite direction',
                '$3$ times as long, same direction',
                '$\\frac{1}{3}$ as long, opposite direction',
                'Same length, opposite direction',
              ],
              correctAnswer: 0,
              explanation: 'The magnitude scales by $|-3| = 3$, so it is $3$ times as long. The negative sign reverses the direction.',
            },
            {
              question: 'If $\\lVert\\vec{v}\\rVert = 10$, what is $\\lVert -\\tfrac{1}{2}\\vec{v}\\rVert$?',
              options: ['$5$', '$-5$', '$10$', '$20$'],
              correctAnswer: 0,
              explanation: '$\\lVert k\\vec{v}\\rVert = |k|\\,\\lVert\\vec{v}\\rVert = \\left|-\\tfrac{1}{2}\\right|\\cdot 10 = \\tfrac{1}{2}\\cdot 10 = 5$. Magnitude is never negative.',
            },
          ],
        },
      },
      {
        id: 'vip3-zero-neg',
        type: 'text' as const,
        content: `## The Zero Vector & Opposite Vectors

- The **zero vector** $\\vec{0} = \\langle 0, 0\\rangle$ has magnitude $0$ and no direction. It is the additive identity: $\\vec{v} + \\vec{0} = \\vec{v}$.
- The **opposite** of $\\vec{v}$ is $-\\vec{v} = (-1)\\vec{v}$ — same length, reversed direction. Adding a vector to its opposite gives zero:

$$\\vec{v} + (-\\vec{v}) = \\vec{0}$$

In fact, **subtraction is just adding the opposite**: $\\;\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v})$.

> 💡 This is exactly like numbers: $7 - 3 = 7 + (-3)$. Vectors follow the same rules — they just do it in two components at once.`,
      },
      {
        id: 'vip3-zero-neg-check',
        type: 'dropdown-select' as const,
        content: `**Zero & Opposite Vectors** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The opposite of $\\langle -3, 5\\rangle$ is:', options: ['$\\langle 3, -5\\rangle$', '$\\langle -3, 5\\rangle$', '$\\langle 3, 5\\rangle$', '$\\langle 5, -3\\rangle$'] },
            { label: '$\\vec{v} + (-\\vec{v}) = $', options: ['$\\langle 0, 0\\rangle$', '$2\\vec{v}$', '$\\vec{v}$', '$\\langle 1, 1\\rangle$'] },
            { label: '$\\langle 6, 1\\rangle - \\langle 6, 1\\rangle = $', options: ['$\\vec{0}$', '$\\langle 12, 2\\rangle$', '$\\langle 6, 1\\rangle$', '$\\langle 0, 1\\rangle$'] },
          ],
          correctAnswers: ['$\\langle 3, -5\\rangle$', '$\\langle 0, 0\\rangle$', '$\\vec{0}$'],
          hint1: 'The opposite negates every component: $-\\langle -3, 5\\rangle = \\langle 3, -5\\rangle$.',
          hint2: 'A vector plus its opposite cancels to the zero vector.',
          hint3: 'Subtracting a vector from itself gives $\\langle 0, 0\\rangle$, the zero vector $\\vec{0}$.',
          explanation: 'Opposite of $\\langle -3,5\\rangle$ is $\\langle 3,-5\\rangle$; $\\vec{v}+(-\\vec{v}) = \\langle 0,0\\rangle$; and any vector minus itself is $\\vec{0}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip4-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 4 of 7 — Unit Vectors & the $\\hat{\\imath},\\,\\hat{\\jmath}$ Form**

---

> 🔑 **A unit vector** has length exactly $1$. It captures pure *direction* with no "size baggage," and it lets us write every vector as a clean combination of horizontal and vertical pieces.`,
      },
      {
        id: 'vip4-unit-vectors',
        type: 'text' as const,
        content: `## Finding a Unit Vector

A **unit vector** in the direction of $\\vec{v}$ is found by dividing $\\vec{v}$ by its own magnitude:

$$\\hat{u} = \\frac{\\vec{v}}{\\lVert\\vec{v}\\rVert} = \\left\\langle \\frac{a}{\\lVert\\vec{v}\\rVert},\\; \\frac{b}{\\lVert\\vec{v}\\rVert} \\right\\rangle$$

This is called **normalizing** the vector. The result always has magnitude $1$.

### Worked Example: $\\vec{v} = \\langle 3, 4\\rangle$

First the magnitude: $\\lVert\\vec{v}\\rVert = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.

$$\\hat{u} = \\left\\langle \\frac{3}{5},\\; \\frac{4}{5} \\right\\rangle$$

> ✅ **Check the length:** $\\sqrt{\\left(\\tfrac{3}{5}\\right)^2 + \\left(\\tfrac{4}{5}\\right)^2} = \\sqrt{\\tfrac{9}{25} + \\tfrac{16}{25}} = \\sqrt{\\tfrac{25}{25}} = \\sqrt{1} = 1$ ✓`,
      },
      {
        id: 'vip4-unit-drill',
        type: 'input-boxes' as const,
        content: `**Normalize It** 🧮

Find the unit vector in the direction of each vector. Enter each component as a fraction (e.g. \`5/13\` or \`-12/13\`).

**1)** $\\vec{v} = \\langle 6, 8\\rangle$  *(first $\\lVert\\vec{v}\\rVert$, then divide)*:  $\\hat{u} = \\langle\\,?,\\;?\\,\\rangle$
**2)** $\\vec{v} = \\langle -5, 12\\rangle$:  $\\hat{u} = \\langle\\,?,\\;?\\,\\rangle$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['3/5', '4/5', '-5/13', '12/13'],
          hint1: 'For #1: $\\lVert\\vec{v}\\rVert = \\sqrt{36+64} = \\sqrt{100} = 10$.',
          hint2: 'For #1: $\\left\\langle \\tfrac{6}{10}, \\tfrac{8}{10}\\right\\rangle = \\left\\langle \\tfrac{3}{5}, \\tfrac{4}{5}\\right\\rangle$ after reducing.',
          hint3: 'For #2: $\\lVert\\vec{v}\\rVert = \\sqrt{25+144} = \\sqrt{169} = 13$, so $\\hat{u} = \\left\\langle \\tfrac{-5}{13}, \\tfrac{12}{13}\\right\\rangle$.',
          explanation: '1) $\\lVert\\vec{v}\\rVert = 10$, so $\\hat{u} = \\langle 6/10, 8/10\\rangle = \\langle 3/5, 4/5\\rangle$.  2) $\\lVert\\vec{v}\\rVert = 13$, so $\\hat{u} = \\langle -5/13, 12/13\\rangle$.',
        },
      },
      {
        id: 'vip4-ij-form',
        type: 'text' as const,
        content: `## The $\\hat{\\imath},\\,\\hat{\\jmath}$ (Standard Unit Vector) Form

Two special unit vectors point along the axes:

$$\\hat{\\imath} = \\langle 1, 0\\rangle \\quad\\text{(one unit right)}, \\qquad \\hat{\\jmath} = \\langle 0, 1\\rangle \\quad\\text{(one unit up)}$$

Every vector is a combination of these:

$$\\langle a, b\\rangle = a\\,\\hat{\\imath} + b\\,\\hat{\\jmath}$$

### Examples

| Component form | $\\hat{\\imath},\\,\\hat{\\jmath}$ form |
|----------------|------------------|
| $\\langle 3, 5\\rangle$ | $3\\hat{\\imath} + 5\\hat{\\jmath}$ |
| $\\langle -2, 7\\rangle$ | $-2\\hat{\\imath} + 7\\hat{\\jmath}$ |
| $\\langle 4, 0\\rangle$ | $4\\hat{\\imath}$ |

> 💡 The two forms are **completely interchangeable**. $\\langle a, b\\rangle$ and $a\\hat{\\imath} + b\\hat{\\jmath}$ are the same vector written two ways. AP problems use both, so get comfortable switching.`,
      },
      {
        id: 'vip4-ij-check',
        type: 'dropdown-select' as const,
        content: `**Switch Between Forms** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\langle -6, 2\\rangle$ in $\\hat{\\imath},\\hat{\\jmath}$ form:', options: ['$-6\\hat{\\imath} + 2\\hat{\\jmath}$', '$6\\hat{\\imath} - 2\\hat{\\jmath}$', '$-6\\hat{\\imath} - 2\\hat{\\jmath}$', '$2\\hat{\\imath} - 6\\hat{\\jmath}$'] },
            { label: '$7\\hat{\\imath} - 3\\hat{\\jmath}$ in component form:', options: ['$\\langle 7, -3\\rangle$', '$\\langle -3, 7\\rangle$', '$\\langle 7, 3\\rangle$', '$\\langle -7, 3\\rangle$'] },
            { label: 'Every unit vector has magnitude:', options: ['$1$', '$0$', 'equal to its components', 'undefined'] },
          ],
          correctAnswers: ['$-6\\hat{\\imath} + 2\\hat{\\jmath}$', '$\\langle 7, -3\\rangle$', '$1$'],
          hint1: '$\\langle a, b\\rangle = a\\hat{\\imath} + b\\hat{\\jmath}$ — the first component multiplies $\\hat{\\imath}$, the second multiplies $\\hat{\\jmath}$.',
          hint2: 'The coefficient of $\\hat{\\imath}$ becomes the first component; the coefficient of $\\hat{\\jmath}$ becomes the second.',
          hint3: 'A unit vector is *defined* to have length $1$.',
          explanation: '$\\langle -6,2\\rangle = -6\\hat{\\imath}+2\\hat{\\jmath}$; $7\\hat{\\imath}-3\\hat{\\jmath} = \\langle 7,-3\\rangle$; every unit vector has magnitude $1$.',
        },
      },
      {
        id: 'vip4-scaled-unit',
        type: 'text' as const,
        content: `## Building a Vector of a Given Length

A unit vector is a "direction tool." To get a vector of length $L$ pointing the same way as $\\vec{v}$, scale its unit vector by $L$:

$$L\\,\\hat{u} = L\\cdot\\frac{\\vec{v}}{\\lVert\\vec{v}\\rVert}$$

### Example

Find a vector of length $15$ in the direction of $\\langle 3, 4\\rangle$.

The unit vector is $\\left\\langle \\tfrac{3}{5}, \\tfrac{4}{5}\\right\\rangle$, so multiply by $15$:

$$15\\left\\langle \\tfrac{3}{5}, \\tfrac{4}{5}\\right\\rangle = \\left\\langle \\tfrac{45}{5}, \\tfrac{60}{5}\\right\\rangle = \\langle 9, 12\\rangle$$

> ✅ **Check:** $\\lVert\\langle 9, 12\\rangle\\rVert = \\sqrt{81 + 144} = \\sqrt{225} = 15$ ✓ — exactly the length we wanted, same direction.`,
      },
      {
        id: 'vip4-scaled-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A vector of length $10$ in the direction of $\\langle 3, 4\\rangle$ is:',
              options: ['$\\langle 6, 8\\rangle$', '$\\langle 30, 40\\rangle$', '$\\langle 3, 4\\rangle$', '$\\langle 5, 5\\rangle$'],
              correctAnswer: 0,
              explanation: 'The unit vector is $\\langle 3/5, 4/5\\rangle$. Scale by $10$: $10\\langle 3/5, 4/5\\rangle = \\langle 6, 8\\rangle$, and $\\sqrt{36+64} = 10$. ✓',
            },
            {
              question: 'What is the magnitude of the unit vector $\\langle 3/5,\\, 4/5\\rangle$?',
              options: ['$1$', '$5$', '$7/5$', '$25$'],
              correctAnswer: 0,
              explanation: 'By definition a unit vector has length $1$: $\\sqrt{(3/5)^2 + (4/5)^2} = \\sqrt{9/25 + 16/25} = \\sqrt{1} = 1$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip5-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 5 of 7 — Direction Angle & Magnitude–Direction Form**

---

> 🔑 **Two languages, one vector.** A vector can be described by its **components** $\\langle a, b\\rangle$ *or* by its **magnitude and direction angle** $(r, \\theta)$. This part is about translating fluently between them.`,
      },
      {
        id: 'vip5-comp-to-mag',
        type: 'text' as const,
        content: `## From Components to Magnitude & Direction

Given $\\vec{v} = \\langle a, b\\rangle$, the **direction angle** $\\theta$ is measured counterclockwise from the **positive $x$-axis**.

$$\\lVert\\vec{v}\\rVert = \\sqrt{a^2 + b^2}, \\qquad \\tan\\theta = \\frac{b}{a}$$

> ⚠️ **The calculator's $\\arctan$ only returns angles in $(-90^\\circ, 90^\\circ)$.** You must check which **quadrant** the vector is in and adjust. If $a < 0$, add $180^\\circ$ to the arctangent result.

### Worked Example: $\\vec{v} = \\langle 1, \\sqrt{3}\\rangle$

$$\\lVert\\vec{v}\\rVert = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$
$$\\tan\\theta = \\frac{\\sqrt{3}}{1} = \\sqrt{3} \\;\\Rightarrow\\; \\theta = 60^\\circ \\quad(\\text{Quadrant I, no adjustment})$$

So $\\vec{v}$ has magnitude $2$ at a direction angle of $60^\\circ$.`,
      },
      {
        id: 'vip5-quadrant',
        type: 'text' as const,
        content: `## The Quadrant Adjustment

Because $\\arctan(b/a)$ can't tell which way the vector actually points, use this guide:

| Quadrant of $\\langle a, b\\rangle$ | Sign of $a$, $b$ | Adjustment to $\\arctan\\!\\left(\\tfrac{b}{a}\\right)$ |
|---|---|---|
| I | $+,\\ +$ | none (answer is $0^\\circ$–$90^\\circ$) |
| II | $-,\\ +$ | **add $180^\\circ$** |
| III | $-,\\ -$ | **add $180^\\circ$** |
| IV | $+,\\ -$ | add $360^\\circ$ (or leave negative) |

### Worked Example: $\\vec{v} = \\langle -3, 3\\rangle$ (Quadrant II)

$$\\arctan\\!\\left(\\frac{3}{-3}\\right) = \\arctan(-1) = -45^\\circ$$

Since $a = -3 < 0$, add $180^\\circ$: $\\;\\theta = -45^\\circ + 180^\\circ = 135^\\circ$.

> ✅ **Sanity check:** $\\langle -3, 3\\rangle$ points up and to the left — that *should* be in Quadrant II, between $90^\\circ$ and $180^\\circ$. $135^\\circ$ fits. ✓`,
      },
      {
        id: 'vip5-direction-drill',
        type: 'input-boxes' as const,
        content: `**Find the Direction Angle** 🧮

Find $\\theta$ (in degrees, $0^\\circ \\le \\theta < 360^\\circ$) for each vector. These all land on familiar reference angles.

**1)** $\\langle 0, 5\\rangle$ (straight up):  $\\theta = \\,?$
**2)** $\\langle -2, 0\\rangle$ (straight left):  $\\theta = \\,?$
**3)** $\\langle -4, 4\\rangle$ (Quadrant II):  $\\theta = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['90', '180', '135'],
          hint1: 'A vector pointing straight up along the positive $y$-axis is at $90^\\circ$.',
          hint2: 'A vector pointing straight left along the negative $x$-axis is at $180^\\circ$.',
          hint3: '$\\langle -4,4\\rangle$: $\\arctan(4/-4) = -45^\\circ$; $a<0$ so add $180^\\circ \\Rightarrow 135^\\circ$.',
          explanation: '1) Straight up $= 90^\\circ$.  2) Straight left $= 180^\\circ$.  3) $-45^\\circ + 180^\\circ = 135^\\circ$.',
        },
      },
      {
        id: 'vip5-mag-to-comp',
        type: 'text' as const,
        content: `## From Magnitude & Direction to Components

Going the other way, if a vector has magnitude $r$ and direction angle $\\theta$, its components come from right-triangle trigonometry:

$$\\vec{v} = \\langle\\, r\\cos\\theta,\\; r\\sin\\theta \\,\\rangle$$

This is the workhorse formula for word problems — you are *given* a speed/force and a heading, and you need components.

### Worked Example: magnitude $10$, direction $30^\\circ$

$$a = 10\\cos 30^\\circ = 10\\cdot\\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66$$
$$b = 10\\sin 30^\\circ = 10\\cdot\\frac{1}{2} = 5$$

So $\\vec{v} = \\langle 5\\sqrt{3},\\, 5\\rangle \\approx \\langle 8.66,\\, 5\\rangle$.

> 💡 **Memory aid:** $\\cos$ goes with the **horizontal** (cosine ↔ $x$), $\\sin$ with the **vertical** (sine ↔ $y$). Mixing them up is the #1 error in vector word problems.`,
      },
      {
        id: 'vip5-mag-to-comp-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A vector has magnitude $8$ and direction angle $60^\\circ$. Its components are:',
              options: ['$\\langle 4,\\, 4\\sqrt{3}\\rangle$', '$\\langle 4\\sqrt{3},\\, 4\\rangle$', '$\\langle 8,\\, 8\\rangle$', '$\\langle 4\\sqrt{3},\\, 4\\sqrt{3}\\rangle$'],
              correctAnswer: 0,
              explanation: '$a = 8\\cos 60^\\circ = 8\\cdot\\tfrac{1}{2} = 4$; $b = 8\\sin 60^\\circ = 8\\cdot\\tfrac{\\sqrt{3}}{2} = 4\\sqrt{3}$. So $\\langle 4, 4\\sqrt{3}\\rangle$.',
            },
            {
              question: 'For $\\langle a, b\\rangle$ in Quadrant III, how do you fix $\\arctan(b/a)$?',
              options: ['Add $180^\\circ$', 'Subtract $180^\\circ$', 'Add $90^\\circ$', 'No adjustment needed'],
              correctAnswer: 0,
              explanation: 'In Quadrant III, $a < 0$, so the calculator\'s arctangent is off by $180^\\circ$. Add $180^\\circ$ to land in the correct range ($180^\\circ$–$270^\\circ$).',
            },
          ],
        },
      },
      {
        id: 'vip5-mag-to-comp-drill',
        type: 'input-boxes' as const,
        content: `**Components From Magnitude & Direction** 🧮

Use $\\vec{v} = \\langle r\\cos\\theta,\\; r\\sin\\theta\\rangle$. Enter exact decimals where the angle is "nice."

**1)** $r = 4,\\;\\theta = 0^\\circ$:  $\\langle\\,?,\\;?\\,\\rangle$
**2)** $r = 8,\\;\\theta = 180^\\circ$:  $\\langle\\,?,\\;?\\,\\rangle$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['4', '0', '-8', '0'],
          hint1: 'For #1: $\\cos 0^\\circ = 1$ and $\\sin 0^\\circ = 0$, so $\\langle 4\\cdot 1,\\,4\\cdot 0\\rangle = \\langle 4, 0\\rangle$.',
          hint2: 'For #2: $\\cos 180^\\circ = -1$, so the horizontal component is $8\\cdot(-1) = -8$.',
          hint3: 'For #2: $\\sin 180^\\circ = 0$, so the vertical component is $0$, giving $\\langle -8, 0\\rangle$ (straight left).',
          explanation: '1) $\\langle 4\\cos 0^\\circ, 4\\sin 0^\\circ\\rangle = \\langle 4, 0\\rangle$.  2) $\\langle 8\\cos 180^\\circ, 8\\sin 180^\\circ\\rangle = \\langle -8, 0\\rangle$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip6-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 6 of 7 — Applications: Velocity, Force & Bearings**

---

> 🔑 **Why we built all this.** Real motion and forces add as vectors, not as plain numbers. A plane in a crosswind, two ropes pulling a crate — you find the **resultant** by adding components, then convert back to magnitude and direction.`,
      },
      {
        id: 'vip6-resultant',
        type: 'text' as const,
        content: `## The Resultant

When several vectors act at once, the single vector that has the same total effect is the **resultant** — just the vector sum.

### Worked Example: A Plane in Wind

An airplane heads **east** at $200$ mph (vector $\\langle 200, 0\\rangle$). A wind blows it **north** at $40$ mph (vector $\\langle 0, 40\\rangle$). Find the true ground velocity.

**Add the components:**

$$\\vec{r} = \\langle 200, 0\\rangle + \\langle 0, 40\\rangle = \\langle 200,\\, 40\\rangle$$

**Magnitude (ground speed):**

$$\\lVert\\vec{r}\\rVert = \\sqrt{200^2 + 40^2} = \\sqrt{40000 + 1600} = \\sqrt{41600} \\approx 203.96 \\text{ mph}$$

**Direction (north of east):**

$$\\theta = \\arctan\\!\\left(\\frac{40}{200}\\right) = \\arctan(0.2) \\approx 11.3^\\circ \\text{ north of east}$$

> 💡 The plane's ground speed ($\\approx 204$ mph) is *more* than its airspeed, and it drifts about $11.3^\\circ$ off course — exactly why pilots correct for wind.`,
      },
      {
        id: 'vip6-resultant-drill',
        type: 'input-boxes' as const,
        content: `**Find the Resultant** 🧮

A boat motors **east** at $9$ mph; a current pushes it **south** at $12$ mph.

**1)** Resultant components $\\langle\\,?,\\;?\\,\\rangle$  *(east is $+x$, north is $+y$)*
**2)** Resultant speed (magnitude) $= \\,?$ mph`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '-12', '15'],
          hint1: 'East $9$ is $\\langle 9, 0\\rangle$; south $12$ is $\\langle 0, -12\\rangle$ (south is the negative $y$-direction).',
          hint2: 'Add: $\\langle 9, 0\\rangle + \\langle 0, -12\\rangle = \\langle 9, -12\\rangle$.',
          hint3: '$\\sqrt{9^2 + (-12)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ — a scaled $3\\text{-}4\\text{-}5$ triple.',
          explanation: 'Resultant $\\langle 9, -12\\rangle$; speed $\\sqrt{81+144} = \\sqrt{225} = 15$ mph.',
        },
      },
      {
        id: 'vip6-force',
        type: 'text' as const,
        content: `## Forces & Components of a Single Vector

Often you are *given* a vector by its magnitude and direction and must break it into components first.

### Worked Example: Pulling a Wagon

You pull a wagon with a force of $50$ N at an angle of $30^\\circ$ above the horizontal. How much force acts **horizontally** vs. **vertically**?

$$F_x = 50\\cos 30^\\circ = 50\\cdot\\frac{\\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.3 \\text{ N (horizontal)}$$
$$F_y = 50\\sin 30^\\circ = 50\\cdot\\frac{1}{2} = 25 \\text{ N (vertical)}$$

> 💡 Most of your $50$ N pull ($\\approx 43.3$ N) moves the wagon forward; only $25$ N lifts it. Resolving a force into components tells you which part of your effort actually does the job.`,
      },
      {
        id: 'vip6-bearings',
        type: 'text' as const,
        content: `## A Note on Bearings

Navigation often uses **bearings** — angles measured **clockwise from due north**, not counterclockwise from east.

| Compass direction | Bearing | Standard direction angle $\\theta$ |
|---|---|---|
| North | $000^\\circ$ | $90^\\circ$ |
| East | $090^\\circ$ | $0^\\circ$ |
| South | $180^\\circ$ | $270^\\circ$ |
| West | $270^\\circ$ | $180^\\circ$ |

> ⚠️ **Don't mix conventions.** A bearing of $90^\\circ$ means **east**, but a *standard* direction angle of $90^\\circ$ means **north**. Read each problem carefully and convert before plugging into $\\langle r\\cos\\theta, r\\sin\\theta\\rangle$.`,
      },
      {
        id: 'vip6-direction-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Components** 🔽

A car drives at $60$ mph in various directions. Choose the correct component setup (east $= +x$, north $= +y$).`,
        exercise: {
          dropdowns: [
            { label: 'Heading due north:', options: ['$\\langle 0, 60\\rangle$', '$\\langle 60, 0\\rangle$', '$\\langle 0, -60\\rangle$', '$\\langle 60, 60\\rangle$'] },
            { label: 'Heading due west:', options: ['$\\langle -60, 0\\rangle$', '$\\langle 60, 0\\rangle$', '$\\langle 0, -60\\rangle$', '$\\langle 0, 60\\rangle$'] },
            { label: 'Heading $30^\\circ$ north of east:', options: ['$\\langle 60\\cos 30^\\circ,\\, 60\\sin 30^\\circ\\rangle$', '$\\langle 60\\sin 30^\\circ,\\, 60\\cos 30^\\circ\\rangle$', '$\\langle 30, 60\\rangle$', '$\\langle 60, 30\\rangle$'] },
          ],
          correctAnswers: ['$\\langle 0, 60\\rangle$', '$\\langle -60, 0\\rangle$', '$\\langle 60\\cos 30^\\circ,\\, 60\\sin 30^\\circ\\rangle$'],
          hint1: 'Due north means no east/west motion and $60$ northward: $\\langle 0, 60\\rangle$.',
          hint2: 'Due west is the negative $x$-direction: $\\langle -60, 0\\rangle$.',
          hint3: '$30^\\circ$ north of east is a standard direction angle of $30^\\circ$: $\\langle 60\\cos 30^\\circ, 60\\sin 30^\\circ\\rangle$ (cosine ↔ horizontal).',
          explanation: 'North $= \\langle 0,60\\rangle$; west $= \\langle -60,0\\rangle$; $30^\\circ$ north of east $= \\langle 60\\cos 30^\\circ, 60\\sin 30^\\circ\\rangle$.',
        },
      },
      {
        id: 'vip6-app-check',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A swimmer heads north at $3$ mph; a current pushes east at $4$ mph. What is the swimmer\'s resultant speed?',
              options: ['$5$ mph', '$7$ mph', '$\\sqrt{7}$ mph', '$1$ mph'],
              correctAnswer: 0,
              explanation: 'Resultant $= \\langle 4, 3\\rangle$ (east, north). Speed $= \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ mph — a $3\\text{-}4\\text{-}5$ triangle.',
            },
            {
              question: 'A $100$ N force points at $60^\\circ$ above the horizontal. Its horizontal component is:',
              options: ['$50$ N', '$50\\sqrt{3}$ N', '$100$ N', '$\\frac{100}{\\sqrt{3}}$ N'],
              correctAnswer: 0,
              explanation: 'Horizontal component $= 100\\cos 60^\\circ = 100\\cdot\\tfrac{1}{2} = 50$ N. (The vertical component would be $100\\sin 60^\\circ = 50\\sqrt{3}$ N.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'vectors-in-plane',
    sections: [
      {
        id: 'vip7-intro',
        type: 'text' as const,
        content: `# ➡️ Vectors in the Plane

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) tell scalars from vectors, (2) find components and magnitude, (3) add, subtract & scale, (4) normalize and use $\\hat{\\imath},\\hat{\\jmath}$ form, (5) convert between components and magnitude–direction, and (6) solve velocity/force problems. Let's put it all together.`,
      },
      {
        id: 'vip7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key formula |
|------|-------------|
| Components from points $P\\to Q$ | $\\langle x_Q - x_P,\\; y_Q - y_P\\rangle$ |
| Magnitude | $\\lVert\\vec{v}\\rVert = \\sqrt{a^2 + b^2}$ |
| Add / subtract | $\\langle a_1\\pm a_2,\\; b_1 \\pm b_2\\rangle$ |
| Scalar multiple | $k\\langle a, b\\rangle = \\langle ka, kb\\rangle$, length $\\times |k|$ |
| Unit vector | $\\hat{u} = \\dfrac{\\vec{v}}{\\lVert\\vec{v}\\rVert}$ |
| Components from $r,\\theta$ | $\\langle r\\cos\\theta,\\; r\\sin\\theta\\rangle$ |
| Direction angle | $\\theta = \\arctan\\!\\left(\\tfrac{b}{a}\\right)$, adjust for quadrant |

> ⚠️ **Top traps:** subtract head $-$ tail (not tail $-$ head); add $180^\\circ$ when $a<0$; magnitude is never negative; $\\cos$ ↔ horizontal, $\\sin$ ↔ vertical.`,
      },
      {
        id: 'vip7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Let $\\vec{u} = \\langle 3, -4\\rangle$ and $\\vec{v} = \\langle -1, 2\\rangle$.`,
        exercise: {
          dropdowns: [
            { label: '$\\vec{u} + \\vec{v} = $', options: ['$\\langle 2, -2\\rangle$', '$\\langle 4, -6\\rangle$', '$\\langle 2, 2\\rangle$', '$\\langle -2, 2\\rangle$'] },
            { label: '$\\lVert\\vec{u}\\rVert = $', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'] },
            { label: 'Unit vector of $\\vec{u}$:', options: ['$\\langle 3/5, -4/5\\rangle$', '$\\langle 3, -4\\rangle$', '$\\langle 4/5, -3/5\\rangle$', '$\\langle -3/5, 4/5\\rangle$'] },
            { label: '$2\\vec{u} - \\vec{v} = $', options: ['$\\langle 7, -10\\rangle$', '$\\langle 5, -6\\rangle$', '$\\langle 7, -6\\rangle$', '$\\langle 5, -10\\rangle$'] },
          ],
          correctAnswers: ['$\\langle 2, -2\\rangle$', '$5$', '$\\langle 3/5, -4/5\\rangle$', '$\\langle 7, -10\\rangle$'],
          hint1: 'Add components: $\\langle 3+(-1),\\,-4+2\\rangle = \\langle 2,-2\\rangle$.',
          hint2: '$\\lVert\\vec{u}\\rVert = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$, so $\\hat{u} = \\langle 3/5, -4/5\\rangle$.',
          hint3: '$2\\vec{u} = \\langle 6,-8\\rangle$; then $\\langle 6,-8\\rangle - \\langle -1,2\\rangle = \\langle 6+1,\\,-8-2\\rangle = \\langle 7,-10\\rangle$.',
          explanation: '$\\vec{u}+\\vec{v} = \\langle 2,-2\\rangle$; $\\lVert\\vec{u}\\rVert = 5$; $\\hat{u} = \\langle 3/5,-4/5\\rangle$; $2\\vec{u}-\\vec{v} = \\langle 7,-10\\rangle$.',
        },
      },
      {
        id: 'vip7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Magnitude of $\\vec{PQ}$ for $P(-2, 1),\\; Q(1, 5)$:  $\\lVert\\vec{PQ}\\rVert = \\,?$
**2)** Components of a vector with magnitude $6$ at direction angle $90^\\circ$:  $\\langle\\,?,\\;?\\,\\rangle$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '0', '6'],
          hint1: 'For #1: $\\vec{PQ} = \\langle 1-(-2),\\,5-1\\rangle = \\langle 3, 4\\rangle$, so $\\lVert\\vec{PQ}\\rVert = \\sqrt{9+16} = 5$.',
          hint2: 'For #2: $a = 6\\cos 90^\\circ = 6\\cdot 0 = 0$.',
          hint3: 'For #2: $b = 6\\sin 90^\\circ = 6\\cdot 1 = 6$, so the vector is $\\langle 0, 6\\rangle$ (straight up).',
          explanation: '1) $\\langle 3,4\\rangle$ has magnitude $5$.  2) At $90^\\circ$: $\\langle 6\\cos 90^\\circ, 6\\sin 90^\\circ\\rangle = \\langle 0, 6\\rangle$.',
        },
      },
      {
        id: 'vip7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which quantity is a **scalar**?',
              options: [
                'The speed of a car, $55$ mph',
                'A force of $20$ N pushing east',
                'A velocity of $30$ m/s downward',
                'A displacement of $4$ m to the right',
              ],
              correctAnswer: 0,
              explanation: 'Speed ($55$ mph) has magnitude but no direction, so it is a scalar. The other three each specify a direction, making them vectors.',
            },
            {
              question: 'If $\\vec{AB} = \\langle -8, 6\\rangle$, what is $\\lVert\\vec{AB}\\rVert$?',
              options: ['$10$', '$14$', '$\\sqrt{14}$', '$-10$'],
              correctAnswer: 0,
              explanation: '$\\lVert\\vec{AB}\\rVert = \\sqrt{(-8)^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$. Magnitude is always positive.',
            },
            {
              question: 'A vector has magnitude $12$ and direction angle $30^\\circ$. Its components are:',
              options: ['$\\langle 6\\sqrt{3},\\, 6\\rangle$', '$\\langle 6,\\, 6\\sqrt{3}\\rangle$', '$\\langle 6,\\, 6\\rangle$', '$\\langle 12,\\, 6\\rangle$'],
              correctAnswer: 0,
              explanation: '$a = 12\\cos 30^\\circ = 12\\cdot\\tfrac{\\sqrt{3}}{2} = 6\\sqrt{3}$; $b = 12\\sin 30^\\circ = 12\\cdot\\tfrac{1}{2} = 6$. So $\\langle 6\\sqrt{3}, 6\\rangle$.',
            },
          ],
        },
      },
    ],
  },
]
