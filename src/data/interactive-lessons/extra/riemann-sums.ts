import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Riemann Sums and Area Approximation (AP Calculus AB).
 * Registry key / DB Topic.slug: 'riemann-sums'.
 * 7 parts, gold-standard structure: the area problem → left/right rectangles →
 * Δx and the general Riemann sum → midpoint & trapezoidal rules → over/under
 * estimates & error → reading rates from tables/graphs → limit definition,
 * sigma notation, mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every sum, Δx, and sample-point value was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs1-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 1 of 7 — The Area Problem**

---

### Topics in This Part

| Section |
|---------|
| Why area under a curve matters |
| Approximating with rectangles |
| Left endpoints (LRAM) |

> 🔑 **Key Concept:** A **definite integral** $\\int_a^b f(x)\\,dx$ is the *exact* area between a curve and the $x$-axis. Before we can find it exactly (Part 7), we **approximate** it by chopping the region into rectangles. That approximation is a **Riemann sum**.`,
      },
      {
        id: 'rs1-why',
        type: 'text' as const,
        content: `## Why Approximate an Area?

You can find the area of a rectangle ($\\text{base} \\times \\text{height}$) or a triangle easily. But what is the area under the curve $y = x^2$ from $x=0$ to $x=4$? The top is *curved* — no simple formula applies.

The idea behind a **Riemann sum** is beautifully simple:

> 🔑 **The Big Idea:** Cover the curved region with a row of thin **rectangles**. Each rectangle's area is easy. Add them up, and you get a close estimate of the true area. Thinner rectangles → better estimate.

This is one of the two pillars of calculus. Area under a curve also means:

| Curve $y = f(x)$ | Area underneath represents |
|------------------|----------------------------|
| velocity vs. time | total **distance** traveled |
| flow rate vs. time | total **volume** of fluid |
| population growth rate | total **change** in population |

So this is not just about geometry — area is *accumulated change*.`,
      },
      {
        id: 'rs1-setup',
        type: 'text' as const,
        content: `## Setting Up Rectangles

To approximate the area under $f(x)$ on the interval $[a, b]$ with $n$ rectangles of equal width:

1. **Width** of each rectangle: $\\Delta x = \\dfrac{b - a}{n}$
2. **Heights** come from the function $f$ — but *where* do we measure the height? At the **left** edge, the **right** edge, or the **middle** of each strip.

### Example: $f(x) = x^2$ on $[0, 4]$ with $n = 4$

The width is $\\Delta x = \\dfrac{4 - 0}{4} = 1$, so the strips are $[0,1],\\,[1,2],\\,[2,3],\\,[3,4]$.

If we measure the height at the **left endpoint** of each strip, the sample points are $x = 0, 1, 2, 3$:

$$\\text{Heights: } f(0)=0,\\; f(1)=1,\\; f(2)=4,\\; f(3)=9$$

> 💡 This is called **LRAM** — the **L**eft **R**ectangle **A**pproximation **M**ethod.`,
      },
      {
        id: 'rs1-deltax-drill',
        type: 'input-boxes' as const,
        content: `**Find $\\Delta x$** 🧮

Each rectangle has width $\\Delta x = \\dfrac{b-a}{n}$. Compute it for each setup. *(Decimals are fine.)*

**1)** $[0, 6]$ with $n = 3$,$\\quad \\Delta x = \\,?$
**2)** $[2, 10]$ with $n = 4$,$\\quad \\Delta x = \\,?$
**3)** $[1, 4]$ with $n = 6$,$\\quad \\Delta x = \\,?$  *(decimal ok)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '0.5'],
          hint1: '$\\Delta x = \\frac{6-0}{3} = \\frac{6}{3} = 2$.',
          hint2: '$\\Delta x = \\frac{10-2}{4} = \\frac{8}{4} = 2$.',
          hint3: '$\\Delta x = \\frac{4-1}{6} = \\frac{3}{6} = 0.5$.',
          explanation: '1) $\\frac{6}{3}=2$.  2) $\\frac{8}{4}=2$.  3) $\\frac{3}{6}=0.5$. Always $\\frac{b-a}{n}$ — width of the whole interval split into $n$ equal pieces.',
        },
      },
      {
        id: 'rs1-lram-drill',
        type: 'input-boxes' as const,
        content: `**Left Rectangle Sum (LRAM)** 🧮

Approximate the area under $f(x) = x^2$ on $[0, 4]$ with $n = 4$ using **left endpoints**.

Each rectangle's area is $f(x_i)\\cdot \\Delta x$ with $\\Delta x = 1$. Add the four areas.

$$\\text{LRAM} = \\big[f(0)+f(1)+f(2)+f(3)\\big]\\cdot 1 = \\,?$$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['14'],
          hint1: 'Left sample points are $x = 0, 1, 2, 3$ (skip the right edge $x=4$).',
          hint2: 'Heights: $f(0)=0,\\ f(1)=1,\\ f(2)=4,\\ f(3)=9$.',
          hint3: 'Sum the heights: $0+1+4+9 = 14$, then multiply by $\\Delta x = 1$.',
          explanation: '$\\text{LRAM} = (0+1+4+9)(1) = 14$. The true area is $\\int_0^4 x^2\\,dx = \\frac{64}{3} \\approx 21.33$, so LRAM is an *underestimate* here — we will see why in Part 4.',
        },
      },
      {
        id: 'rs1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Riemann sum approximates the area under a curve by adding up the areas of:',
              options: ['rectangles', 'circles', 'the curve itself', 'tangent lines'],
              correctAnswer: 0,
              explanation: 'We slice the region into thin rectangles, compute each area as height × width, and sum them. More rectangles gives a better approximation.',
            },
            {
              question: 'For $f$ on $[a,b]$ split into $n$ equal rectangles, the width of each rectangle is:',
              options: ['$\\frac{b-a}{n}$', '$\\frac{n}{b-a}$', '$b - a$', '$\\frac{a+b}{2}$'],
              correctAnswer: 0,
              explanation: 'The total width $b-a$ is divided into $n$ equal pieces, so each has width $\\Delta x = \\frac{b-a}{n}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs2-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 2 of 7 — Left vs. Right Rectangles**

---

> 🔑 **The Idea:** The same region gives a *different* estimate depending on whether we measure each rectangle's height at its **left** edge (LRAM) or its **right** edge (RRAM). Comparing the two reveals how rough our estimate is.`,
      },
      {
        id: 'rs2-rram',
        type: 'text' as const,
        content: `## Right Rectangle Sum (RRAM)

**RRAM** uses the **right endpoint** of each strip for the height. For $f(x) = x^2$ on $[0,4]$ with $n = 4$ and $\\Delta x = 1$, the right sample points are $x = 1, 2, 3, 4$:

$$\\text{RRAM} = \\big[f(1)+f(2)+f(3)+f(4)\\big]\\cdot 1$$
$$= (1 + 4 + 9 + 16)(1) = 30$$

Compare the two estimates side by side:

| Method | Sample points | Sum of heights | Estimate |
|--------|---------------|----------------|----------|
| **LRAM** | $0,1,2,3$ | $0+1+4+9$ | $14$ |
| **RRAM** | $1,2,3,4$ | $1+4+9+16$ | $30$ |

The true area is $\\frac{64}{3} \\approx 21.33$ — it sits **between** them.

> 💡 **Shortcut:** LRAM and RRAM share three of four heights. To go from LRAM to RRAM, just drop the leftmost height $f(a)$ and add the rightmost $f(b)$. Here: $14 - f(0) + f(4) = 14 - 0 + 16 = 30$. ✓`,
      },
      {
        id: 'rs2-rram-drill',
        type: 'input-boxes' as const,
        content: `**Right Rectangle Sum** 🧮

Approximate the area under $f(x) = x^2 + 1$ on $[0, 3]$ with $n = 3$ using **right endpoints**.

Here $\\Delta x = 1$ and the right sample points are $x = 1, 2, 3$.

$$\\text{RRAM} = \\big[f(1)+f(2)+f(3)\\big]\\cdot 1 = \\,?$$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['17'],
          hint1: 'Right endpoints skip $x=0$ and use $x = 1, 2, 3$.',
          hint2: '$f(x)=x^2+1$, so $f(1)=2,\\ f(2)=5,\\ f(3)=10$.',
          hint3: 'Sum the heights: $2 + 5 + 10 = 17$, then multiply by $\\Delta x = 1$.',
          explanation: '$f(1)=1+1=2$, $f(2)=4+1=5$, $f(3)=9+1=10$. $\\text{RRAM} = (2+5+10)(1) = 17$.',
        },
      },
      {
        id: 'rs2-lr-drill',
        type: 'input-boxes' as const,
        content: `**Both Sums** 🧮

For $f(x) = 2x$ on $[0, 4]$ with $n = 4$ ($\\Delta x = 1$), find each sum.

**1)** $\\text{LRAM}$ using $x = 0,1,2,3$,$\\quad = \\,?$
**2)** $\\text{RRAM}$ using $x = 1,2,3,4$,$\\quad = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '20'],
          hint1: '$f(x)=2x$: heights at $0,1,2,3$ are $0,2,4,6$. Sum $= 12$.',
          hint2: 'Heights at $1,2,3,4$ are $2,4,6,8$. Sum $= 20$.',
          hint3: 'Each rectangle is height × $\\Delta x$, and $\\Delta x = 1$, so the estimate equals the sum of heights.',
          explanation: '1) $(0+2+4+6)(1)=12$.  2) $(2+4+6+8)(1)=20$. The exact area under $y=2x$ on $[0,4]$ is a triangle: $\\frac{1}{2}(4)(8)=16$, right between $12$ and $20$.',
        },
      },
      {
        id: 'rs2-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'LRAM and RRAM for the same function on the same interval use the same $\\Delta x$. What differs?',
              options: [
                'the sample points (left edges vs. right edges)',
                'the width of the rectangles',
                'the number of rectangles',
                'nothing — they are always equal',
              ],
              correctAnswer: 0,
              explanation: 'Both use $\\Delta x = \\frac{b-a}{n}$. Only the *height location* differs: LRAM reads $f$ at the left edge of each strip, RRAM at the right edge.',
            },
            {
              question: 'To convert a left sum to a right sum (equal width), you can:',
              options: [
                'subtract $f(a)$ and add $f(b)$',
                'multiply by $2$',
                'subtract $f(b)$ and add $f(a)$',
                'divide by $n$',
              ],
              correctAnswer: 0,
              explanation: 'LRAM uses $f(a),\\dots,f(x_{n-1})$; RRAM uses $f(x_1),\\dots,f(b)$. They share the middle terms, so $\\text{RRAM} = \\text{LRAM} - f(a) + f(b)$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs3-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 3 of 7 — The Midpoint & Trapezoidal Rules**

---

> 🔑 **The Idea:** Left and right rectangles tend to *overshoot* or *undershoot*. Two smarter methods — measuring the height at the **midpoint**, or replacing each rectangle's top with a slanted **trapezoid** — usually land much closer to the true area for the same number of strips.`,
      },
      {
        id: 'rs3-midpoint',
        type: 'text' as const,
        content: `## The Midpoint Rule (MRAM)

Instead of the left or right edge, use the height at the **middle** of each strip. For $f(x) = x^2$ on $[0,4]$ with $n = 4$, the midpoints of $[0,1],[1,2],[2,3],[3,4]$ are:

$$x = 0.5,\\ 1.5,\\ 2.5,\\ 3.5$$

$$\\text{MRAM} = \\big[f(0.5)+f(1.5)+f(2.5)+f(3.5)\\big]\\cdot 1$$
$$= (0.25 + 2.25 + 6.25 + 12.25)(1) = 21$$

The true area is $\\frac{64}{3} \\approx 21.33$. With just 4 strips, MRAM ($21$) crushes LRAM ($14$) and RRAM ($30$).

> 💡 **Finding a midpoint:** the midpoint of $[x_{i-1}, x_i]$ is the average $\\dfrac{x_{i-1} + x_i}{2}$.`,
      },
      {
        id: 'rs3-mid-drill',
        type: 'input-boxes' as const,
        content: `**Midpoint Sum** 🧮

Approximate the area under $f(x) = x^2$ on $[0, 2]$ with $n = 2$ using the **midpoint rule**.

The strips are $[0,1]$ and $[1,2]$, so $\\Delta x = 1$ and the midpoints are $x = 0.5$ and $x = 1.5$.

$$\\text{MRAM} = \\big[f(0.5) + f(1.5)\\big]\\cdot 1 = \\,?$$  *(decimal ok)*`,
        exercise: {
          boxes: 1,
          correctAnswers: ['2.5'],
          hint1: 'Midpoints are $0.5$ and $1.5$ — the centers of $[0,1]$ and $[1,2]$.',
          hint2: '$f(0.5) = 0.25$ and $f(1.5) = 2.25$.',
          hint3: '$(0.25 + 2.25)(1) = 2.5$.',
          explanation: '$\\text{MRAM} = (0.25 + 2.25)(1) = 2.5$. The exact area $\\int_0^2 x^2\\,dx = \\frac{8}{3} \\approx 2.67$ — already very close with only 2 strips.',
        },
      },
      {
        id: 'rs3-trap',
        type: 'text' as const,
        content: `## The Trapezoidal Rule

Instead of a flat top, connect the curve's value at the left and right edges with a straight line — each strip becomes a **trapezoid**. The area of one trapezoid is $\\dfrac{\\Delta x}{2}\\big(f(x_{i-1}) + f(x_i)\\big)$.

Adding all strips, the interior heights each get counted **twice** (once as a right edge, once as the next left edge):

$$\\text{Trapezoid} = \\frac{\\Delta x}{2}\\Big[f(x_0) + 2f(x_1) + 2f(x_2) + \\dots + 2f(x_{n-1}) + f(x_n)\\Big]$$

> 🔑 **The "1-2-2-…-2-1" pattern:** the **endpoints** get weight $1$; every **interior** point gets weight $2$.

There is an even faster way to see it:

$$\\text{Trapezoid} = \\frac{\\text{LRAM} + \\text{RRAM}}{2}$$

For $f(x)=x^2$ on $[0,4]$, $n=4$: $\\dfrac{14 + 30}{2} = 22$, just above the true $21.33$.`,
      },
      {
        id: 'rs3-trap-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Trapezoidal Sum** 🔽

You are approximating the area under some $f$ on $[a,b]$ with $n=4$ equal strips. Fill in the trapezoidal rule.`,
        exercise: {
          dropdowns: [
            { label: 'The factor in front is:', options: ['$\\frac{\\Delta x}{2}$', '$\\Delta x$', '$\\frac{\\Delta x}{n}$', '$2\\Delta x$'] },
            { label: 'Weight on the *endpoint* $f(x_0)$:', options: ['$1$', '$2$', '$\\frac{1}{2}$', '$4$'] },
            { label: 'Weight on an *interior* point $f(x_2)$:', options: ['$2$', '$1$', '$0$', '$\\frac{1}{2}$'] },
            { label: 'Trapezoid equals the average of:', options: ['LRAM and RRAM', 'MRAM and RRAM', 'LRAM and MRAM', 'two RRAMs'] },
          ],
          correctAnswers: ['$\\frac{\\Delta x}{2}$', '$1$', '$2$', 'LRAM and RRAM'],
          hint1: 'Each trapezoid contributes $\\frac{\\Delta x}{2}(\\text{left height} + \\text{right height})$.',
          hint2: 'Endpoints appear in only one trapezoid (weight $1$); interior points are shared by two (weight $2$).',
          hint3: 'Averaging the left and right rectangle sums gives exactly the trapezoidal sum.',
          explanation: 'The trapezoidal rule is $\\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + \\dots + 2f(x_{n-1}) + f(x_n)]$, which is identical to $\\frac{\\text{LRAM}+\\text{RRAM}}{2}$.',
        },
      },
      {
        id: 'rs3-trap-drill',
        type: 'input-boxes' as const,
        content: `**Trapezoidal Estimate** 🧮

You computed $\\text{LRAM} = 12$ and $\\text{RRAM} = 20$ for $f(x)=2x$ on $[0,4]$ (Part 2).

**1)** Use $\\frac{\\text{LRAM}+\\text{RRAM}}{2}$ to find the trapezoidal estimate,$\\quad = \\,?$
**2)** The exact area is the triangle area $\\frac{1}{2}(4)(8)$. What is it?$\\quad = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['16', '16'],
          hint1: '$\\frac{12 + 20}{2} = \\frac{32}{2} = 16$.',
          hint2: 'The region under $y=2x$ on $[0,4]$ is a right triangle with base $4$ and height $f(4)=8$.',
          hint3: 'Triangle area $= \\frac{1}{2}(4)(8) = 16$.',
          explanation: '1) $\\frac{12+20}{2}=16$.  2) $\\frac{1}{2}(4)(8)=16$. For a *straight* line, the trapezoidal rule is **exact** — the trapezoids match the region perfectly.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs4-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 4 of 7 — Over- and Under-Estimates**

---

> 🔑 **The Idea:** Whether a rectangle sum is **too big** or **too small** depends on two things: is the function **increasing or decreasing**, and did we use **left or right** endpoints? The same logic, applied to *concavity*, tells you about midpoint and trapezoidal sums.`,
      },
      {
        id: 'rs4-monotone',
        type: 'text' as const,
        content: `## Left/Right Sums on Monotonic Functions

Picture a strip. If $f$ is **increasing**, the function is *highest at the right edge*, so:

- **LRAM** measures at the (lower) left edge → each rectangle sits **below** the curve → **underestimate**.
- **RRAM** measures at the (higher) right edge → each rectangle pokes **above** the curve → **overestimate**.

If $f$ is **decreasing**, everything flips. Here is the full table:

| | $f$ increasing $\\nearrow$ | $f$ decreasing $\\searrow$ |
|---|---|---|
| **LRAM** | under ↓ | over ↑ |
| **RRAM** | over ↑ | under ↓ |

> 💡 **Memory hook:** On an increasing function, "Left is Low, Right is high." The rectangle method that uses the *lower* edge underestimates.

This explains Part 1: $f(x)=x^2$ is increasing on $[0,4]$, so LRAM ($14$) underestimated and RRAM ($30$) overestimated the true $21.33$.`,
      },
      {
        id: 'rs4-monotone-dropdown',
        type: 'dropdown-select' as const,
        content: `**Over or Under?** 🔽

Classify each estimate as an **overestimate** or **underestimate**.`,
        exercise: {
          dropdowns: [
            { label: 'LRAM, $f$ increasing on $[a,b]$:', options: ['underestimate', 'overestimate'] },
            { label: 'RRAM, $f$ increasing on $[a,b]$:', options: ['overestimate', 'underestimate'] },
            { label: 'LRAM, $f$ decreasing on $[a,b]$:', options: ['overestimate', 'underestimate'] },
            { label: 'RRAM, $f$ decreasing on $[a,b]$:', options: ['underestimate', 'overestimate'] },
          ],
          correctAnswers: ['underestimate', 'overestimate', 'overestimate', 'underestimate'],
          hint1: 'On an increasing function the right edge is taller than the left.',
          hint2: 'The method using the *taller* edge overestimates; the *shorter* edge underestimates.',
          hint3: 'Increasing: LRAM under, RRAM over. Decreasing: the reverse.',
          explanation: 'Increasing → LRAM under, RRAM over. Decreasing → LRAM over, RRAM under. The rectangle that sits *below* the curve underestimates.',
        },
      },
      {
        id: 'rs4-concavity',
        type: 'text' as const,
        content: `## Concavity: Midpoint vs. Trapezoid

For **concave up** $\\smile$ functions (like $x^2$), the curve bows *below* its chords:

- **Trapezoidal** rule connects edges with a chord *above* the curve → **overestimate**.
- **Midpoint** rule's tangent-like rectangle dips *below* → **underestimate**.

For **concave down** $\\frown$, both flip.

| Concave up $\\smile$ | Concave down $\\frown$ |
|---|---|
| Trapezoid: **over** ↑ | Trapezoid: **under** ↓ |
| Midpoint: **under** ↓ | Midpoint: **over** ↑ |

> ✅ **Check with $x^2$ on $[0,4]$** (concave up, true $\\approx 21.33$): Trapezoid $= 22$ (over ✓), Midpoint $= 21$ (under ✓).

> ⚠️ **Watch out:** the over/under rules for *left/right* sums depend on **increasing/decreasing**. The rules for *midpoint/trapezoid* depend on **concavity**. Don't mix them up.`,
      },
      {
        id: 'rs4-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$f(x) = \\sqrt{x}$ is increasing on $[1, 9]$. A right-endpoint (RRAM) approximation of $\\int_1^9 \\sqrt{x}\\,dx$ will be:',
              options: ['an overestimate', 'an underestimate', 'exactly correct', 'impossible to tell'],
              correctAnswer: 0,
              explanation: 'On an increasing function the right edge is the tallest point of each strip, so every rectangle pokes above the curve → RRAM overestimates.',
            },
            {
              question: 'For a function that is concave **down** on $[a,b]$, the trapezoidal rule gives:',
              options: ['an underestimate', 'an overestimate', 'the exact value', 'the same as RRAM'],
              correctAnswer: 0,
              explanation: 'Concave down means the curve bows above its chords. The trapezoid tops (chords) sit below the curve, so the trapezoidal sum underestimates.',
            },
            {
              question: 'A function is **decreasing** on $[a,b]$. Which rectangle sum underestimates the area?',
              options: ['RRAM (right endpoints)', 'LRAM (left endpoints)', 'both', 'neither'],
              correctAnswer: 0,
              explanation: 'When $f$ decreases, the right edge is the *lowest* point of each strip, so right rectangles sit below the curve → RRAM underestimates.',
            },
          ],
        },
      },
      {
        id: 'rs4-gap-drill',
        type: 'input-boxes' as const,
        content: `**How Far Off?** 🧮

For $f(x)=x^2$ on $[0,4]$ ($n=4$): LRAM $=14$, RRAM $=30$, true area $=\\dfrac{64}{3}\\approx 21.33$.

**1)** By how much does RRAM *overestimate*? $\\;30 - 21.33 = \\,?$  *(round to 2 decimals)*
**2)** By how much does LRAM *underestimate*? $\\;21.33 - 14 = \\,?$  *(round to 2 decimals)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8.67', '7.33'],
          hint1: 'Use $\\frac{64}{3} = 21.33$.',
          hint2: 'RRAM error: $30 - 21.33 = 8.67$.',
          hint3: 'LRAM error: $21.33 - 14 = 7.33$.',
          explanation: '1) $30 - 21.33 = 8.67$ (over).  2) $21.33 - 14 = 7.33$ (under). For monotonic $f$, the true area is trapped between LRAM and RRAM, and the gap between them ($30-14=16$) bounds the error.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs5-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 5 of 7 — Data Tables & Unequal Widths**

---

> 🔑 **The Idea:** On the AP exam, Riemann sums almost always show up with **data in a table** — a velocity recorded every few seconds, a flow rate measured at uneven times. The rectangle widths may **not be equal**, so you handle each strip individually.`,
      },
      {
        id: 'rs5-table',
        type: 'text' as const,
        content: `## Riemann Sums From a Table

A car's velocity $v(t)$ (in ft/s) is recorded at the times below. The area under $v$ is the total **distance** traveled, $\\int_0^{8} v(t)\\,dt$.

| $t$ (s) | $0$ | $2$ | $5$ | $8$ |
|---------|-----|-----|-----|-----|
| $v(t)$ (ft/s) | $0$ | $30$ | $50$ | $44$ |

Notice the time steps are **unequal**: $[0,2]$ has width $2$, $[2,5]$ has width $3$, $[5,8]$ has width $3$.

### Left Riemann Sum (3 subintervals)

Use the value at the **left** end of each interval as the height, and multiply by that interval's own width:

$$\\underbrace{v(0)\\cdot 2}_{[0,2]} + \\underbrace{v(2)\\cdot 3}_{[2,5]} + \\underbrace{v(5)\\cdot 3}_{[5,8]}$$
$$= 0\\cdot 2 + 30\\cdot 3 + 50\\cdot 3 = 0 + 90 + 150 = 240 \\text{ ft}$$

> ⚠️ **Do not** use a single $\\Delta x$ when the widths differ. Multiply each height by *its own* interval width.`,
      },
      {
        id: 'rs5-left-drill',
        type: 'input-boxes' as const,
        content: `**Right Sum From the Table** 🧮

Using the same table, the **right** Riemann sum uses the value at the **right** end of each interval:

$$v(2)\\cdot 2 + v(5)\\cdot 3 + v(8)\\cdot 3 = \\,?$$

| $t$ | $0$ | $2$ | $5$ | $8$ |
|-----|-----|-----|-----|-----|
| $v(t)$ | $0$ | $30$ | $50$ | $44$ |`,
        exercise: {
          boxes: 1,
          correctAnswers: ['342'],
          hint1: 'Right endpoints of $[0,2],[2,5],[5,8]$ are $t = 2, 5, 8$, with heights $30, 50, 44$.',
          hint2: 'Widths are $2, 3, 3$. Compute $30\\cdot 2 + 50\\cdot 3 + 44\\cdot 3$.',
          hint3: '$60 + 150 + 132 = 342$.',
          explanation: 'Right sum $= 30(2) + 50(3) + 44(3) = 60 + 150 + 132 = 342$ ft. (The left sum was $240$ ft.)',
        },
      },
      {
        id: 'rs5-trap-table',
        type: 'text' as const,
        content: `## Trapezoidal Estimate From a Table

With unequal widths, the trapezoidal rule treats each strip as its own trapezoid:

$$\\text{Trap} = \\frac{\\Delta t_1}{2}\\big(v_0 + v_1\\big) + \\frac{\\Delta t_2}{2}\\big(v_1 + v_2\\big) + \\dots$$

For our table:

$$\\frac{2}{2}(0 + 30) + \\frac{3}{2}(30 + 50) + \\frac{3}{2}(50 + 44)$$
$$= 1(30) + 1.5(80) + 1.5(94) = 30 + 120 + 141 = 291 \\text{ ft}$$

> 💡 **Sanity check:** the trapezoidal estimate ($291$) lands between the left sum ($240$) and right sum ($342$) — exactly their average: $\\frac{240 + 342}{2} = 291$. ✓`,
      },
      {
        id: 'rs5-trap-drill',
        type: 'input-boxes' as const,
        content: `**Trapezoidal From a Table** 🧮

A pump's flow rate $R(t)$ (gal/min) is measured:

| $t$ (min) | $0$ | $4$ | $10$ |
|-----------|-----|-----|------|
| $R(t)$ | $5$ | $11$ | $7$ |

Estimate the total gallons $\\int_0^{10} R\\,dt$ with the **trapezoidal rule** (2 trapezoids).

$$\\frac{4}{2}(5 + 11) + \\frac{6}{2}(11 + 7) = \\,?$$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['86'],
          hint1: 'Widths are $\\Delta t_1 = 4$ (from $0$ to $4$) and $\\Delta t_2 = 6$ (from $4$ to $10$).',
          hint2: 'First trapezoid: $\\frac{4}{2}(5+11) = 2(16) = 32$.',
          hint3: 'Second trapezoid: $\\frac{6}{2}(11+7) = 3(18) = 54$. Add: $32 + 54 = 86$.',
          explanation: '$\\frac{4}{2}(16) + \\frac{6}{2}(18) = 32 + 54 = 86$ gallons. Each trapezoid uses its own width and averages its two endpoint heights.',
        },
      },
      {
        id: 'rs5-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When a data table has **unequal** time steps, a Riemann sum requires you to:',
              options: [
                'multiply each height by that interval’s own width',
                'use a single $\\Delta x$ for all terms',
                'average the time steps first',
                'ignore the widest interval',
              ],
              correctAnswer: 0,
              explanation: 'There is no common $\\Delta x$. Each rectangle (or trapezoid) uses the width of *its* subinterval, then you sum them.',
            },
            {
              question: 'If $v(t)$ is velocity, the area under the $v$–$t$ curve (a Riemann sum estimates) represents:',
              options: ['distance traveled', 'acceleration', 'average velocity', 'the slope of $v$'],
              correctAnswer: 0,
              explanation: 'Accumulating velocity × time over the interval gives total displacement/distance: $\\int v\\,dt$. Area under a rate is the accumulated amount.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs6-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 6 of 7 — Sigma Notation & the Limit Definition**

---

> 🔑 **The Idea:** A Riemann sum is just "add up $n$ rectangle areas." **Sigma notation** writes that compactly, and letting $n \\to \\infty$ turns the *approximation* into the *exact* definite integral.`,
      },
      {
        id: 'rs6-sigma',
        type: 'text' as const,
        content: `## Sigma Notation

The general Riemann sum adds $n$ rectangles, each $f(x_i^*)\\,\\Delta x$:

$$\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x = f(x_1^*)\\Delta x + f(x_2^*)\\Delta x + \\dots + f(x_n^*)\\Delta x$$

Here $x_i^*$ is the **sample point** in the $i$-th strip — left, right, or midpoint, your choice.

With equal widths, the right endpoints are $x_i = a + i\\,\\Delta x$ where $\\Delta x = \\dfrac{b-a}{n}$.

### Example: $f(x)=x^2$ on $[0,4]$, right endpoints

$\\Delta x = \\dfrac{4}{n}$ and $x_i = 0 + i\\cdot\\dfrac{4}{n} = \\dfrac{4i}{n}$, so:

$$\\sum_{i=1}^{n} \\left(\\frac{4i}{n}\\right)^2 \\cdot \\frac{4}{n} = \\sum_{i=1}^{n} \\frac{64\\,i^2}{n^3}$$

> 💡 The index $i$ runs $1, 2, \\dots, n$. Pull constants out front: $\\dfrac{64}{n^3}\\sum_{i=1}^n i^2$.`,
      },
      {
        id: 'rs6-sigma-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Sum** 🧮

Compute the value of each finite sum.

**1)** $\\displaystyle\\sum_{i=1}^{4} i = 1+2+3+4 = \\,?$
**2)** $\\displaystyle\\sum_{i=1}^{3} i^2 = 1+4+9 = \\,?$
**3)** $\\displaystyle\\sum_{i=1}^{3} (2i+1) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '14', '15'],
          hint1: '$1+2+3+4 = 10$.',
          hint2: '$1^2 + 2^2 + 3^2 = 1+4+9 = 14$.',
          hint3: 'Plug $i=1,2,3$ into $2i+1$: $3 + 5 + 7 = 15$.',
          explanation: '1) $10$.  2) $14$.  3) $(2\\cdot1+1)+(2\\cdot2+1)+(2\\cdot3+1) = 3+5+7 = 15$. Sigma notation is just a compact way to write a sum.',
        },
      },
      {
        id: 'rs6-limit',
        type: 'text' as const,
        content: `## The Limit Definition of the Definite Integral

As $n \\to \\infty$, the rectangles get infinitely thin and the Riemann sum converges to the **exact** area:

$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$$

### Finishing $\\int_0^4 x^2\\,dx$

Using $\\displaystyle\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}$:

$$\\frac{64}{n^3}\\cdot\\frac{n(n+1)(2n+1)}{6} = \\frac{64}{6}\\cdot\\frac{(n+1)(2n+1)}{n^2}$$

As $n \\to \\infty$, $\\dfrac{(n+1)(2n+1)}{n^2} \\to 2$, so the integral is $\\dfrac{64}{6}\\cdot 2 = \\dfrac{64}{3} \\approx 21.33$.

> 🔑 **The payoff:** every rectangle estimate from Parts 1–3 was creeping toward $\\frac{64}{3}$. The limit makes the approximation *exact* — that is the definition of the definite integral.

> 💡 You will later learn the **Fundamental Theorem of Calculus**, which evaluates $\\int_0^4 x^2\\,dx = \\frac{x^3}{3}\\Big|_0^4 = \\frac{64}{3}$ in one line — but it works *because* of this limit of Riemann sums.`,
      },
      {
        id: 'rs6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate to an Integral** 🔽

Match each Riemann-sum idea to its meaning.`,
        exercise: {
          dropdowns: [
            { label: 'In $\\sum f(x_i^*)\\,\\Delta x$, the quantity $\\Delta x$ is the:', options: ['rectangle width', 'rectangle height', 'number of strips', 'sample point'] },
            { label: 'In $\\sum f(x_i^*)\\,\\Delta x$, the quantity $f(x_i^*)$ is the:', options: ['rectangle height', 'rectangle width', 'interval length', 'limit'] },
            { label: 'Taking $\\lim_{n\\to\\infty}$ of a Riemann sum gives the:', options: ['definite integral', 'derivative', 'average rate', 'slope'] },
          ],
          correctAnswers: ['rectangle width', 'rectangle height', 'definite integral'],
          hint1: '$\\Delta x = \\frac{b-a}{n}$ is a horizontal length — the base of each rectangle.',
          hint2: '$f$ evaluated at the sample point gives the vertical size — the height.',
          hint3: 'Infinitely many infinitely-thin rectangles sum to the exact area: the definite integral.',
          explanation: 'Area of each rectangle $=$ height $f(x_i^*)$ × width $\\Delta x$. Summing and letting $n\\to\\infty$ yields $\\int_a^b f(x)\\,dx$.',
        },
      },
      {
        id: 'rs6-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the sum $\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$, what happens to $\\Delta x$ as $n \\to \\infty$?',
              options: [
                'it approaches $0$ (rectangles get infinitely thin)',
                'it approaches $\\infty$',
                'it stays equal to $b - a$',
                'it approaches $1$',
              ],
              correctAnswer: 0,
              explanation: '$\\Delta x = \\frac{b-a}{n}$. As $n\\to\\infty$ the denominator grows without bound, so $\\Delta x \\to 0$: infinitely many infinitely-thin rectangles.',
            },
            {
              question: 'For right endpoints on $[2, 10]$ with $n$ strips, the sample point $x_i$ equals:',
              options: ['$2 + i\\,\\Delta x$', '$i\\,\\Delta x$', '$10 - i\\,\\Delta x$', '$2 - i\\,\\Delta x$'],
              correctAnswer: 0,
              explanation: 'Right endpoints start at the left bound $a=2$ and step over by $i$ widths: $x_i = a + i\\,\\Delta x = 2 + i\\,\\Delta x$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'riemann-sums',
    sections: [
      {
        id: 'rs7-intro',
        type: 'text' as const,
        content: `# 📐 Riemann Sums & Area Approximation

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) build left, right, midpoint, and trapezoidal sums, (2) handle data tables with unequal widths, (3) decide over- vs. under-estimates, and (4) connect a Riemann sum to the definite integral. Let's put it together.`,
      },
      {
        id: 'rs7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Method | Height read at… | Formula idea |
|--------|-----------------|--------------|
| **LRAM** | left edge | $\\sum f(x_{i-1})\\,\\Delta x$ |
| **RRAM** | right edge | $\\sum f(x_i)\\,\\Delta x$ |
| **MRAM** | midpoint | $\\sum f\\!\\left(\\tfrac{x_{i-1}+x_i}{2}\\right)\\Delta x$ |
| **Trapezoid** | both edges | $\\frac{\\Delta x}{2}[f_0 + 2f_1 + \\dots + 2f_{n-1} + f_n]$ |

**Over/under cheat sheet**

| | increasing | decreasing | concave up | concave down |
|---|---|---|---|---|
| LRAM | under | over | — | — |
| RRAM | over | under | — | — |
| Trapezoid | — | — | over | under |
| Midpoint | — | — | under | over |

> ⚠️ Left/right depends on **increasing vs. decreasing**; midpoint/trapezoid depends on **concavity**. With unequal widths, multiply each height by *its own* width.`,
      },
      {
        id: 'rs7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

For $f(x) = 10 - x^2$ on $[0, 3]$ with $n = 3$ ($\\Delta x = 1$):

**1)** LRAM using $x = 0, 1, 2$:$\\quad f(0)+f(1)+f(2)$ all $\\times 1 = \\,?$
**2)** RRAM using $x = 1, 2, 3$:$\\quad f(1)+f(2)+f(3)$ all $\\times 1 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['25', '16'],
          hint1: '$f(0)=10,\\ f(1)=9,\\ f(2)=6,\\ f(3)=1$.',
          hint2: 'LRAM uses $f(0)+f(1)+f(2) = 10+9+6 = 25$.',
          hint3: 'RRAM uses $f(1)+f(2)+f(3) = 9+6+1 = 16$.',
          explanation: '1) $(10+9+6)(1)=25$.  2) $(9+6+1)(1)=16$. Since $f$ is *decreasing* on $[0,3]$, LRAM ($25$) overestimates and RRAM ($16$) underestimates — consistent with the cheat sheet.',
        },
      },
      {
        id: 'rs7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The trapezoidal estimate always equals:',
              options: [
                'the average of the left and right Riemann sums',
                'the midpoint sum',
                'the exact integral',
                'twice the left sum',
              ],
              correctAnswer: 0,
              explanation: 'With equal widths, $\\text{Trap} = \\frac{\\text{LRAM} + \\text{RRAM}}{2}$, because averaging the two endpoint heights of each strip is exactly the trapezoid area.',
            },
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty}\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$ equals which of the following?',
              options: ['$\\int_a^b f(x)\\,dx$', "$f'(x)$", '$f(b) - f(a)$', 'the slope of $f$'],
              correctAnswer: 0,
              explanation: 'The limit of a Riemann sum as $n\\to\\infty$ *is* the definition of the definite integral $\\int_a^b f(x)\\,dx$.',
            },
          ],
        },
      },
      {
        id: 'rs7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $f(x)=x^2$ on $[0,4]$ with $n=4$, the left Riemann sum is:',
              options: ['$14$', '$30$', '$21$', '$22$'],
              correctAnswer: 0,
              explanation: 'Left endpoints $0,1,2,3$ give heights $0,1,4,9$. With $\\Delta x = 1$: $(0+1+4+9)(1)=14$.',
            },
            {
              question: 'A velocity table has values at $t=0,3,7$ of $v=4,10,2$. The **left** Riemann sum for distance over $[0,7]$ is:',
              options: ['$52$', '$54$', '$42$', '$30$'],
              correctAnswer: 0,
              explanation: 'Widths: $[0,3]$ is $3$, $[3,7]$ is $4$. Left heights $v(0)=4,\\ v(3)=10$: $4(3) + 10(4) = 12 + 40 = 52$.',
            },
            {
              question: '$f$ is increasing and concave up on $[a,b]$. Which estimate is guaranteed to be an **underestimate**?',
              options: [
                'the left Riemann sum (LRAM)',
                'the right Riemann sum (RRAM)',
                'the trapezoidal sum',
                'none of these',
              ],
              correctAnswer: 0,
              explanation: 'Increasing → LRAM underestimates. (RRAM overestimates; concave up → trapezoid overestimates.) So LRAM is the guaranteed underestimate.',
            },
          ],
        },
      },
    ],
  },
]
