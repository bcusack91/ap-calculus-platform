import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Square Roots and Perfect Squares (Pre-Algebra).
 * Registry key: 'square-roots-perfect-squares' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'square-roots-perfect-squares',
    sections: [
      {
        id: 'srps1-intro',
        type: 'text' as const,
        content: `# 🟩 Square Roots and Perfect Squares

**Part 1 of 5 — Perfect Squares**

---

### Topics in This Part

| Section |
|---------|
| What Is a Perfect Square? |
| Squaring a Number |
| Recognizing Perfect Squares |

> 🔑 **Key Concept:** A **perfect square** is what you get when you multiply a whole number by itself. Before we can find a *square root*, we need to know our perfect squares cold — that's Part 1.`,
      },
      {
        id: 'srps1-what',
        type: 'text' as const,
        content: `## What Is a Perfect Square?

To **square** a number means to multiply it by itself. We write it with a small raised $2$, called an **exponent**:

$$5^2 = 5 \\times 5 = 25$$

A number is a **perfect square** if it equals some whole number squared. So $25$ is a perfect square because $25 = 5^2$.

### The First Twelve Perfect Squares

| Number | Squared | Perfect Square |
|--------|---------|----------------|
| $1$ | $1 \\times 1$ | $1$ |
| $2$ | $2 \\times 2$ | $4$ |
| $3$ | $3 \\times 3$ | $9$ |
| $4$ | $4 \\times 4$ | $16$ |
| $5$ | $5 \\times 5$ | $25$ |
| $6$ | $6 \\times 6$ | $36$ |
| $7$ | $7 \\times 7$ | $49$ |
| $8$ | $8 \\times 8$ | $64$ |
| $9$ | $9 \\times 9$ | $81$ |
| $10$ | $10 \\times 10$ | $100$ |
| $11$ | $11 \\times 11$ | $121$ |
| $12$ | $12 \\times 12$ | $144$ |

> 💡 **Why "square"?** A square with sides of length $5$ has an **area** of $5 \\times 5 = 25$ square units. Squaring literally measures the area of a square!`,
      },
      {
        id: 'srps1-square-drill',
        type: 'input-boxes' as const,
        content: `**Square These Numbers** 🧮

Multiply each number by itself.

**1)** $6^2 = \\,?$
**2)** $9^2 = \\,?$
**3)** $12^2 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '81', '144'],
          hint1: '$6^2 = 6 \\times 6$.',
          hint2: '$9^2 = 9 \\times 9$.',
          hint3: '$12^2 = 12 \\times 12$. This one shows up a lot — memorize it.',
          explanation: '1) $6 \\times 6 = 36$.  2) $9 \\times 9 = 81$.  3) $12 \\times 12 = 144$.',
        },
      },
      {
        id: 'srps1-recognize-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these numbers is a perfect square?',
              options: ['$30$', '$49$', '$50$', '$60$'],
              correctAnswer: 1,
              explanation: '$49 = 7 \\times 7 = 7^2$, so it is a perfect square. $30$, $50$, and $60$ are not any whole number times itself.',
            },
            {
              question: 'Why is $64$ a perfect square?',
              options: ['Because $64 = 8 \\times 8$', 'Because $64$ is even', 'Because $64 = 6 \\times 4$', 'Because $64 = 32 + 32$'],
              correctAnswer: 0,
              explanation: '$64 = 8^2 = 8 \\times 8$. A perfect square is a whole number multiplied by *itself* — not just any product.',
            },
          ],
        },
      },
      {
        id: 'srps1-not-perfect',
        type: 'text' as const,
        content: `## Spotting Non-Perfect-Squares

Not every number is a perfect square. The perfect squares are spread out: $1, 4, 9, 16, 25, 36, \\dots$ Numbers *between* them — like $5$, $20$, or $30$ — are **not** perfect squares.

| Perfect square? | Reason |
|-----------------|--------|
| $36$ → ✅ yes | $36 = 6^2$ |
| $40$ → ❌ no | falls between $36 = 6^2$ and $49 = 7^2$ |
| $81$ → ✅ yes | $81 = 9^2$ |
| $90$ → ❌ no | falls between $81 = 9^2$ and $100 = 10^2$ |

> ⚠️ **Watch out:** A number can *look* like a square but not be one. $48$ ends in $8$ and is even, but it sits between $36$ and $49$ — not a perfect square. Always ask: *"Is there a whole number that, times itself, gives this?"*

You now know the perfect squares up through $144$. In Part 2 we run this idea **backward** to find square roots.`,
      },
      {
        id: 'srps1-sort-dropdown',
        type: 'dropdown-select' as const,
        content: `**Perfect Square or Not?** 🔽

Decide whether each number is a perfect square.`,
        exercise: {
          dropdowns: [
            { label: '$16$ is...', options: ['a perfect square', 'not a perfect square'] },
            { label: '$20$ is...', options: ['a perfect square', 'not a perfect square'] },
            { label: '$100$ is...', options: ['a perfect square', 'not a perfect square'] },
            { label: '$72$ is...', options: ['a perfect square', 'not a perfect square'] },
          ],
          correctAnswers: ['a perfect square', 'not a perfect square', 'a perfect square', 'not a perfect square'],
          hint1: '$16 = 4^2$ and $100 = 10^2$.',
          hint2: '$20$ sits between $16 = 4^2$ and $25 = 5^2$.',
          hint3: '$72$ sits between $64 = 8^2$ and $81 = 9^2$, so no whole number squared equals it.',
          explanation: '$16 = 4^2$ ✓ and $100 = 10^2$ ✓ are perfect squares. $20$ and $72$ land between consecutive perfect squares, so they are not.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'square-roots-perfect-squares',
    sections: [
      {
        id: 'srps2-intro',
        type: 'text' as const,
        content: `# 🟩 Square Roots and Perfect Squares

**Part 2 of 5 — Finding Square Roots**

---

> 🔑 **The Idea:** A **square root** undoes squaring. Squaring asks *"what is $5$ times itself?"* ($25$). A square root asks the reverse: *"what number, times itself, gives $25$?"* ($5$).`,
      },
      {
        id: 'srps2-radical',
        type: 'text' as const,
        content: `## The Radical Symbol

The square root is written with a **radical sign** $\\sqrt{\\phantom{x}}$:

$$\\sqrt{25} = 5 \\quad\\text{because}\\quad 5^2 = 25$$

The number under the radical is called the **radicand**. Reading $\\sqrt{25}$ aloud: *"the square root of twenty-five."*

### Squaring and Square-Rooting Are Inverses

$$5 \\xrightarrow{\\;\\text{square}\\;} 25 \\xrightarrow{\\;\\sqrt{\\phantom{x}}\\;} 5$$

They cancel each other out, just like $+$ and $-$, or $\\times$ and $\\div$.

| Square root | Equals | Because |
|-------------|--------|---------|
| $\\sqrt{9}$ | $3$ | $3^2 = 9$ |
| $\\sqrt{36}$ | $6$ | $6^2 = 36$ |
| $\\sqrt{81}$ | $9$ | $9^2 = 81$ |
| $\\sqrt{144}$ | $12$ | $12^2 = 144$ |

> 💡 **Shortcut:** To find $\\sqrt{n}$ for a perfect square, just ask *"which number in my times-table squared gives $n$?"* The perfect squares from Part 1 are your lookup table.`,
      },
      {
        id: 'srps2-root-drill',
        type: 'input-boxes' as const,
        content: `**Find the Square Root** 🧮

Each radicand is a perfect square, so the answer is a whole number.

**1)** $\\sqrt{16} = \\,?$
**2)** $\\sqrt{49} = \\,?$
**3)** $\\sqrt{121} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '11'],
          hint1: 'Which number times itself is $16$?',
          hint2: '$7 \\times 7 = 49$.',
          hint3: '$11 \\times 11 = 121$.',
          explanation: '1) $\\sqrt{16} = 4$ since $4^2 = 16$.  2) $\\sqrt{49} = 7$ since $7^2 = 49$.  3) $\\sqrt{121} = 11$ since $11^2 = 121$.',
        },
      },
      {
        id: 'srps2-inverse-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The square root of a number is the operation that...',
              options: ['adds the number to itself', 'undoes squaring', 'doubles the number', 'divides the number by 2'],
              correctAnswer: 1,
              explanation: 'A square root is the inverse of squaring. Since $7^2 = 49$, we have $\\sqrt{49} = 7$.',
            },
            {
              question: '$\\sqrt{100}$ equals:',
              options: ['$50$', '$10$', '$20$', '$1000$'],
              correctAnswer: 1,
              explanation: '$10 \\times 10 = 100$, so $\\sqrt{100} = 10$. (Dividing by $2$ would give $50$, but that is not the square root.)',
            },
          ],
        },
      },
      {
        id: 'srps2-zero-one',
        type: 'text' as const,
        content: `## Two Special Square Roots

Two roots are worth memorizing because they trip people up:

$$\\sqrt{1} = 1 \\quad\\text{because}\\quad 1^2 = 1 \\times 1 = 1$$

$$\\sqrt{0} = 0 \\quad\\text{because}\\quad 0^2 = 0 \\times 0 = 0$$

> ⚠️ **Common slip:** $\\sqrt{1}$ is $1$, **not** $0$. And the square root of a number is usually *smaller* than the number itself (for example $\\sqrt{36} = 6$), but for $1$ they're equal, and there's no square root smaller than $0$ in pre-algebra.

> 🔑 **You can't square-root a negative** (in pre-algebra). Since any number times itself is positive or zero, no real number squares to a negative. So $\\sqrt{-9}$ has no answer here.`,
      },
      {
        id: 'srps2-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Root** 🔽

Choose the value of each square root.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{64} =$', options: ['$6$', '$7$', '$8$', '$9$'] },
            { label: '$\\sqrt{1} =$', options: ['$0$', '$1$', '$2$', '$10$'] },
            { label: '$\\sqrt{144} =$', options: ['$11$', '$12$', '$13$', '$14$'] },
          ],
          correctAnswers: ['$8$', '$1$', '$12$'],
          hint1: '$8 \\times 8 = 64$.',
          hint2: '$1 \\times 1 = 1$, so $\\sqrt{1} = 1$.',
          hint3: '$12 \\times 12 = 144$.',
          explanation: '$\\sqrt{64} = 8$, $\\sqrt{1} = 1$, and $\\sqrt{144} = 12$. Each answer, squared, returns the radicand.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'square-roots-perfect-squares',
    sections: [
      {
        id: 'srps3-intro',
        type: 'text' as const,
        content: `# 🟩 Square Roots and Perfect Squares

**Part 3 of 5 — Estimating Non-Perfect Roots**

---

> 🔑 **The Idea:** Most numbers aren't perfect squares, so their roots aren't whole numbers. We can still **estimate** $\\sqrt{n}$ by trapping it between the two nearest perfect squares.`,
      },
      {
        id: 'srps3-between',
        type: 'text' as const,
        content: `## Trapping a Root Between Two Whole Numbers

$\\sqrt{30}$ isn't a whole number, but we can pin it down. Find the perfect squares just **below** and **above** $30$:

$$25 < 30 < 36 \\quad\\Longrightarrow\\quad \\sqrt{25} < \\sqrt{30} < \\sqrt{36} \\quad\\Longrightarrow\\quad 5 < \\sqrt{30} < 6$$

So $\\sqrt{30}$ is between $5$ and $6$. Because $30$ is closer to $36$ than to $25$, $\\sqrt{30}$ is a bit closer to $6$ — about $5.5$.

### The Estimating Recipe

1. Find the largest perfect square **less than** the radicand.
2. Find the smallest perfect square **greater than** the radicand.
3. The root lands between their two roots.

> 💡 **Worked Example:** Estimate $\\sqrt{50}$. The nearest perfect squares are $49 = 7^2$ and $64 = 8^2$, so $7 < \\sqrt{50} < 8$. Since $50$ is *just barely* above $49$, $\\sqrt{50} \\approx 7.1$.`,
      },
      {
        id: 'srps3-estimate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Between which two whole numbers does $\\sqrt{40}$ fall?',
              options: ['$5$ and $6$', '$6$ and $7$', '$4$ and $5$', '$7$ and $8$'],
              correctAnswer: 1,
              explanation: '$36 = 6^2$ and $49 = 7^2$, and $36 < 40 < 49$, so $6 < \\sqrt{40} < 7$.',
            },
            {
              question: 'Which whole number is $\\sqrt{83}$ closest to?',
              options: ['$8$', '$9$', '$10$', '$83$'],
              correctAnswer: 1,
              explanation: '$81 = 9^2$ and $83$ is only $2$ more than $81$, so $\\sqrt{83} \\approx 9.1$ — closest to $9$.',
            },
          ],
        },
      },
      {
        id: 'srps3-between-drill',
        type: 'input-boxes' as const,
        content: `**Trap the Root** 🧮

For each, enter the whole number **just below** the square root.

**1)** $\\sqrt{20}$ is between $\\,?$ and the next whole number.
**2)** $\\sqrt{55}$ is between $\\,?$ and the next whole number.
**3)** $\\sqrt{99}$ is between $\\,?$ and the next whole number.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '9'],
          hint1: '$16 = 4^2$ is the largest perfect square below $20$.',
          hint2: '$49 = 7^2$ is the largest perfect square below $55$ (next is $64 = 8^2$).',
          hint3: '$81 = 9^2$ is the largest perfect square below $99$ (next is $100 = 10^2$).',
          explanation: '1) $16 < 20 < 25$, so $4 < \\sqrt{20} < 5$ → $4$.  2) $49 < 55 < 64$, so $7 < \\sqrt{55} < 8$ → $7$.  3) $81 < 99 < 100$, so $9 < \\sqrt{99} < 10$ → $9$.',
        },
      },
      {
        id: 'srps3-rational-irrational',
        type: 'text' as const,
        content: `## Roots That Never Stop

When the radicand is a perfect square, the root is a tidy whole number. When it isn't, the root is a decimal that **goes on forever without repeating** — we call that **irrational**.

$$\\sqrt{2} = 1.41421356\\ldots \\quad(\\text{never ends, never repeats})$$

For now you don't need the exact value — a good **estimate** or leaving it as $\\sqrt{2}$ is enough.

| Radicand | Perfect square? | Root |
|----------|-----------------|------|
| $9$ | ✅ yes | $3$ (whole number) |
| $2$ | ❌ no | $\\approx 1.41$ (irrational) |
| $16$ | ✅ yes | $4$ (whole number) |
| $10$ | ❌ no | $\\approx 3.16$ (irrational) |

> ⚠️ Don't write $\\sqrt{2} = 1.41$ with an equals sign — it's only *approximately* $1.41$. Use $\\approx$ ("approximately equal").`,
      },
      {
        id: 'srps3-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Whole or Irrational?** 🔽

Will each square root be a whole number, or an irrational decimal?`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{25}$ is a...', options: ['whole number', 'irrational decimal'] },
            { label: '$\\sqrt{7}$ is a...', options: ['whole number', 'irrational decimal'] },
            { label: '$\\sqrt{169}$ is a...', options: ['whole number', 'irrational decimal'] },
            { label: '$\\sqrt{45}$ is a...', options: ['whole number', 'irrational decimal'] },
          ],
          correctAnswers: ['whole number', 'irrational decimal', 'whole number', 'irrational decimal'],
          hint1: '$25 = 5^2$ and $169 = 13^2$ are perfect squares.',
          hint2: '$7$ falls between $4$ and $9$, so $\\sqrt{7}$ is not whole.',
          hint3: '$45$ falls between $36 = 6^2$ and $49 = 7^2$, so $\\sqrt{45}$ is irrational.',
          explanation: '$\\sqrt{25} = 5$ and $\\sqrt{169} = 13$ are whole (perfect squares). $\\sqrt{7}$ and $\\sqrt{45}$ are irrational because $7$ and $45$ are not perfect squares.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'square-roots-perfect-squares',
    sections: [
      {
        id: 'srps4-intro',
        type: 'text' as const,
        content: `# 🟩 Square Roots and Perfect Squares

**Part 4 of 5 — Using Square Roots**

---

> 🔑 **Big Payoff:** Square roots aren't just abstract — they answer real questions. *"If a square garden has area $64$ $ft^{2}$, how long is each side?"* The answer is $\\sqrt{64} = 8$ ft.`,
      },
      {
        id: 'srps4-area',
        type: 'text' as const,
        content: `## Side Length from Area

The area of a square is $A = s^2$, where $s$ is the side length. To go **backward** from area to side, take the square root:

$$s = \\sqrt{A}$$

### Worked Example: A Square Patio

A square patio covers $81$ square feet. How long is each side?

$$s = \\sqrt{81} = 9 \\text{ feet}$$

> ✅ **Check:** $9 \\times 9 = 81$ square feet. ✓

| Area of square | Side length |
|----------------|-------------|
| $25$ $ft^{2}$ | $\\sqrt{25} = 5$ ft |
| $100$ $ft^{2}$ | $\\sqrt{100} = 10$ ft |
| $144$ $ft^{2}$ | $\\sqrt{144} = 12$ ft |`,
      },
      {
        id: 'srps4-area-drill',
        type: 'input-boxes' as const,
        content: `**Find the Side Length** 🧮

Each square has the given area. Find the side length (a whole number of feet).

**1)** Area $= 36$ $ft^{2}$. Side $= \\,?$ ft
**2)** Area $= 49$ $ft^{2}$. Side $= \\,?$ ft
**3)** Area $= 121$ $ft^{2}$. Side $= \\,?$ ft`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '7', '11'],
          hint1: 'Side $= \\sqrt{36}$.',
          hint2: 'Side $= \\sqrt{49}$.',
          hint3: 'Side $= \\sqrt{121}$.',
          explanation: '1) $\\sqrt{36} = 6$ ft.  2) $\\sqrt{49} = 7$ ft.  3) $\\sqrt{121} = 11$ ft. Each side, squared, returns the area.',
        },
      },
      {
        id: 'srps4-pythagorean',
        type: 'text' as const,
        content: `## Square Roots in the Pythagorean Theorem

For a right triangle with legs $a$ and $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2 \\quad\\Longrightarrow\\quad c = \\sqrt{a^2 + b^2}$$

The final step always needs a **square root** to undo the squaring.

### Worked Example: The 3-4-5 Triangle

Legs $a = 3$ and $b = 4$:

$$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

> 💡 The $3$-$4$-$5$ right triangle is the most famous one in math — its sides are all whole numbers because $25$ is a perfect square. Builders use it to make perfect right angles!`,
      },
      {
        id: 'srps4-pyth-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has legs $6$ and $8$. What is the hypotenuse?',
              options: ['$\\sqrt{14} \\approx 3.7$', '$10$', '$14$', '$48$'],
              correctAnswer: 1,
              explanation: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
            },
            {
              question: 'A square has area $9$ $m^{2}$. What is its perimeter? (Hint: find the side first.)',
              options: ['$3$ m', '$9$ m', '$12$ m', '$36$ m'],
              correctAnswer: 2,
              explanation: 'Side $= \\sqrt{9} = 3$ m. A square has $4$ equal sides, so perimeter $= 4 \\times 3 = 12$ m.',
            },
          ],
        },
      },
      {
        id: 'srps4-apply-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Solution** 🔽

A right triangle has legs $9$ and $12$. Work toward the hypotenuse.`,
        exercise: {
          dropdowns: [
            { label: 'Square the first leg, $9^2 =$', options: ['$18$', '$81$', '$3$', '$90$'] },
            { label: 'Square the second leg, $12^2 =$', options: ['$24$', '$144$', '$48$', '$120$'] },
            { label: 'Add them: $81 + 144 =$', options: ['$225$', '$215$', '$125$', '$324$'] },
            { label: 'Hypotenuse $= \\sqrt{225} =$', options: ['$15$', '$25$', '$45$', '$112.5$'] },
          ],
          correctAnswers: ['$81$', '$144$', '$225$', '$15$'],
          hint1: '$9^2 = 9 \\times 9 = 81$ and $12^2 = 12 \\times 12 = 144$.',
          hint2: '$81 + 144 = 225$.',
          hint3: '$15 \\times 15 = 225$, so $\\sqrt{225} = 15$.',
          explanation: '$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$. This is a scaled-up $3$-$4$-$5$ triangle (times $3$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'square-roots-perfect-squares',
    sections: [
      {
        id: 'srps5-intro',
        type: 'text' as const,
        content: `# 🟩 Square Roots and Perfect Squares

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize perfect squares, (2) find square roots, (3) estimate roots of non-perfect squares, and (4) use roots in area and Pythagorean problems. Let's put it all together.`,
      },
      {
        id: 'srps5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Square a number | $n^2 = n \\times n$ |
| Is $n$ a perfect square? | look for a whole number whose square is $n$ |
| Find $\\sqrt{n}$ (perfect square) | ask "what number times itself is $n$?" |
| Estimate $\\sqrt{n}$ (not perfect) | trap it between the two nearest perfect-square roots |
| Side of a square | $s = \\sqrt{A}$ |
| Hypotenuse | $c = \\sqrt{a^2 + b^2}$ |

> ⚠️ Remember: $\\sqrt{0} = 0$ and $\\sqrt{1} = 1$, you can't take a real square root of a negative, and roots of non-perfect-squares are *irrational* (use $\\approx$, not $=$).`,
      },
      {
        id: 'srps5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $11^2$?',
              options: ['$22$', '$111$', '$121$', '$1111$'],
              correctAnswer: 2,
              explanation: '$11^2 = 11 \\times 11 = 121$.',
            },
            {
              question: 'Which value is closest to $\\sqrt{70}$?',
              options: ['$7$', '$8.4$', '$9$', '$35$'],
              correctAnswer: 1,
              explanation: '$64 = 8^2$ and $81 = 9^2$, so $8 < \\sqrt{70} < 9$. Since $70$ is near the middle, $\\sqrt{70} \\approx 8.4$.',
            },
          ],
        },
      },
      {
        id: 'srps5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $\\sqrt{169} = \\,?$
**2)** A square has area $100$ $m^{2}$. Its side length is $\\,?$ m.
**3)** Right triangle legs $5$ and $12$: hypotenuse $= \\sqrt{25 + 144} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '10', '13'],
          hint1: '$13 \\times 13 = 169$.',
          hint2: 'Side $= \\sqrt{100}$.',
          hint3: '$5^2 + 12^2 = 25 + 144 = 169$, and $\\sqrt{169} = 13$.',
          explanation: '1) $\\sqrt{169} = 13$.  2) $\\sqrt{100} = 10$ m.  3) $\\sqrt{169} = 13$ — the famous $5$-$12$-$13$ right triangle.',
        },
      },
      {
        id: 'srps5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which number is NOT a perfect square?',
              options: ['$36$', '$50$', '$81$', '$100$'],
              correctAnswer: 1,
              explanation: '$36 = 6^2$, $81 = 9^2$, and $100 = 10^2$ are all perfect squares. $50$ falls between $49 = 7^2$ and $64 = 8^2$, so it is not.',
            },
            {
              question: '$\\sqrt{144}$ equals:',
              options: ['$11$', '$12$', '$13$', '$72$'],
              correctAnswer: 1,
              explanation: '$12 \\times 12 = 144$, so $\\sqrt{144} = 12$.',
            },
            {
              question: 'A right triangle has legs $8$ and $15$. The hypotenuse is $\\sqrt{8^2 + 15^2} = \\sqrt{289}$, which equals:',
              options: ['$17$', '$23$', '$169$', '$\\sqrt{289}$ (cannot simplify)'],
              correctAnswer: 0,
              explanation: '$8^2 + 15^2 = 64 + 225 = 289$, and $17 \\times 17 = 289$, so $\\sqrt{289} = 17$. The $8$-$15$-$17$ triangle has whole-number sides.',
            },
          ],
        },
      },
    ],
  },
]
