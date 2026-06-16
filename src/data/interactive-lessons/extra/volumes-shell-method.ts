import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Volumes of Revolution: Shell Method (AP Calculus AB).
 * Registry key / DB Topic.slug: 'volumes-shell-method'.
 * 7 parts, gold-standard structure: why shells (the peeling-an-onion idea) →
 * the single-shell formula 2πrh·dx → revolving about the y-axis → regions between
 * two curves (height = top − bottom) → revolving about a shifted vertical axis
 * (radius adjusts) → horizontal shells / dy and choosing dx vs dy → applications,
 * mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every definite-integral value was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell1-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 1 of 7 — Why Shells? The Big Idea**

---

### Topics in This Part

| Section |
|---------|
| The problem: rotating about the *wrong* axis |
| Peeling an onion: nested cylindrical shells |
| The volume of one thin shell |

> 🔑 **Key Concept:** The shell method slices a solid into thin, nested **cylindrical shells** (like the rings of an onion) instead of flat disks. It is the natural tool when a region is rotated about an axis that is *parallel* to the strips you'd naturally draw.`,
      },
      {
        id: 'shell1-problem',
        type: 'text' as const,
        content: `## The Problem It Solves

When you revolve a region around an axis, you can slice the resulting solid two ways:

| Method | Slice shape | Slices are… |
|--------|-------------|-------------|
| Disk / Washer | flat circular disk | **perpendicular** to the axis |
| **Shell** | thin cylindrical tube | **parallel** to the axis |

Suppose you rotate the region under $y = f(x)$ about the **$y$-axis**. The disk method would require slicing horizontally and solving for $x$ in terms of $y$ — often ugly or impossible.

The shell method lets you keep your **vertical strips** (your $dx$ slices) exactly as they are. Each vertical strip, when spun around the $y$-axis, sweeps out a thin hollow **cylinder**.

> 💡 **Rule of thumb:** If your strips are *vertical* ($dx$) and you rotate about a *vertical* axis, reach for **shells**. Disks would force you to flip everything to $dy$.`,
      },
      {
        id: 'shell1-onion',
        type: 'text' as const,
        content: `## Peeling an Onion

Picture the solid as an onion made of infinitely many nested shells. To find the total volume, we **add up the volume of every shell** from the innermost to the outermost.

A single shell is a thin-walled cylindrical tube with:
- **radius** $r$ — the distance from the axis of rotation out to the strip,
- **height** $h$ — how tall the strip is,
- **thickness** $dx$ (or $dy$) — how thin the wall is.

If you slit one shell down its side and unroll it flat, you get a thin rectangular slab:

$$\\text{length} = \\underbrace{2\\pi r}_{\\text{circumference}}, \\qquad \\text{height} = h, \\qquad \\text{thickness} = dx$$

$$\\boxed{\\,dV = 2\\pi r \\, h \\, dx\\,}$$

> 🔑 **The whole method in one line:** unroll a shell into a slab of dimensions $(2\\pi r) \\times h \\times dx$. Its volume is $2\\pi r h\\,dx$, and integrating sums all the shells.`,
      },
      {
        id: 'shell1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the shell method, each slice of the solid is shaped like a…',
              options: ['flat circular disk', 'thin cylindrical tube (shell)', 'solid cone', 'flat washer with a hole'],
              correctAnswer: 1,
              explanation: 'The shell method uses thin cylindrical tubes (shells) taken parallel to the axis of rotation. Flat disks and washers belong to the disk/washer method.',
            },
            {
              question: 'You have vertical strips ($dx$) and you rotate the region about the $y$-axis (a vertical line). Which method keeps your strips as-is?',
              options: ['Disk method', 'Washer method', 'Shell method', 'None — you must switch to $dy$'],
              correctAnswer: 2,
              explanation: 'Vertical strips rotated about a vertical axis sweep out cylindrical shells, so the shell method works directly in $dx$. Disks/washers would force a switch to $dy$.',
            },
          ],
        },
      },
      {
        id: 'shell1-unroll',
        type: 'text' as const,
        content: `## Why $2\\pi r$? Unrolling the Shell

The circumference of a circle of radius $r$ is $2\\pi r$. When you unroll the cylindrical shell, that circumference becomes the **length** of the flattened slab.

So the flattened shell is a rectangular box:

$$dV = (\\text{length}) \\times (\\text{height}) \\times (\\text{thickness}) = 2\\pi r \\cdot h \\cdot dx$$

Compare this to the disk method's $dV = \\pi r^2\\,dx$. The shell uses **one power of $r$** (from the circumference), not two — a useful sanity check.

> ⚠️ **Common mix-up:** Disks square the radius ($\\pi r^2$). Shells do **not** — they use $2\\pi r$ (circumference) times height. If you ever see $2\\pi r^2$ in a shell setup, something is wrong.`,
      },
      {
        id: 'shell1-id-pieces',
        type: 'dropdown-select' as const,
        content: `**Identify the Pieces** 🔽

A thin cylindrical shell has the labeled parts below. Match each role.`,
        exercise: {
          dropdowns: [
            { label: 'Distance from the axis to the shell:', options: ['radius $r$', 'height $h$', 'thickness $dx$', 'circumference'] },
            { label: 'How tall the shell is:', options: ['height $h$', 'radius $r$', 'thickness $dx$', 'area'] },
            { label: 'The factor that comes from unrolling the circle:', options: ['$2\\pi r$', '$\\pi r^2$', '$r^2$', '$\\frac{1}{2}r$'] },
          ],
          correctAnswers: ['radius $r$', 'height $h$', '$2\\pi r$'],
          hint1: 'The radius measures outward from the axis of rotation.',
          hint2: 'The height is the length of the vertical strip — its $y$-extent.',
          hint3: 'Unrolling the shell turns the circumference $2\\pi r$ into the slab\'s length.',
          explanation: 'A shell is built from radius $r$ (distance to axis), height $h$ (strip length), and thickness $dx$. Unrolling gives a slab $2\\pi r \\times h \\times dx$, so $dV = 2\\pi r h\\,dx$.',
        },
      },
      {
        id: 'shell1-shell-volume',
        type: 'input-boxes' as const,
        content: `**One Shell's Volume** 🧮

Use $dV = 2\\pi r\\,h\\,dx$ for a single thin shell with radius $r = 3$, height $h = 5$, and thickness $dx = 0.1$.

**1)** Unrolled, the shell's length is its circumference $2\\pi r$. With $r = 3$ this is $\\,?\\,\\pi$ — enter the coefficient of $\\pi$ (an integer).
**2)** The shell's volume is $dV = 2\\pi r h\\,dx$. Enter $dV$ as the coefficient of $\\pi$ (a decimal or fraction).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '3'],
          hint1: 'Circumference $= 2\\pi r = 2\\pi(3) = 6\\pi$, so the coefficient is $6$.',
          hint2: '$dV = 2\\pi r h\\,dx = 2\\pi(3)(5)(0.1)$. Multiply the numbers outside $\\pi$: $2\\cdot 3\\cdot 5\\cdot 0.1$.',
          hint3: '$2\\cdot 3\\cdot 5\\cdot 0.1 = 3$, so $dV = 3\\pi$ and the coefficient is $3$.',
          explanation: '1) Circumference $= 2\\pi(3) = 6\\pi$, coefficient $6$.  2) $dV = 2\\pi(3)(5)(0.1) = 3\\pi$, coefficient $3$. This is exactly the $2\\pi r h\\,dx$ slab volume.',
        },
      },
      {
        id: 'shell1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

You now have the single most important fact of this whole topic:

$$dV = 2\\pi \\,(\\text{radius})\\,(\\text{height})\\,(\\text{thickness})$$

Everything else is just **deciding what the radius and height are** for a given region and axis. In Part 2 we turn this differential into a definite integral and run our first complete example.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell2-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 2 of 7 — The Shell Formula & First Example**

---

> 🔑 **The Formula:** Summing every shell from $x=a$ to $x=b$ turns $dV = 2\\pi r h\\,dx$ into the definite integral
> $$V = \\int_a^b 2\\pi\\,(\\text{radius})\\,(\\text{height})\\,dx.$$`,
      },
      {
        id: 'shell2-formula',
        type: 'text' as const,
        content: `## The Master Formula

For a region with **vertical strips** revolved about the **$y$-axis**:

$$V = \\int_a^b 2\\pi\\, x \\, h(x)\\, dx$$

where for each strip at position $x$:
- **radius** $= x$ (distance from the strip to the $y$-axis),
- **height** $= h(x)$ (the top of the region minus the bottom),
- **limits** $a$ and $b$ are the $x$-values that bound the region.

### Setup Checklist
1. Sketch the region and draw a typical **vertical strip**.
2. Read off the **radius** (here, just $x$).
3. Read off the **height** (top curve $-$ bottom curve).
4. Read off the **limits** of integration in $x$.
5. Integrate $2\\pi \\cdot r \\cdot h$.

> 💡 The constant $2\\pi$ can always be pulled outside the integral, leaving $V = 2\\pi\\int_a^b x\\,h(x)\\,dx$. Pull it out *early* to keep arithmetic clean.`,
      },
      {
        id: 'shell2-worked',
        type: 'text' as const,
        content: `## Worked Example: A Triangle Revolved

Revolve the region bounded by $y = x$, $y = 0$, and $x = 2$ about the **$y$-axis**.

This region is the right triangle with vertices $(0,0)$, $(2,0)$, and $(2,2)$.

**Strip at position $x$:**
- radius $= x$
- height $=$ top $-$ bottom $= x - 0 = x$
- limits: $x$ runs from $0$ to $2$

$$V = \\int_0^2 2\\pi \\, x \\,(x)\\, dx = 2\\pi \\int_0^2 x^2 \\, dx$$

$$= 2\\pi \\left[\\frac{x^3}{3}\\right]_0^2 = 2\\pi \\cdot \\frac{8}{3} = \\frac{16\\pi}{3}$$

> 💡 Pull $2\\pi$ out, integrate $x^2$, plug in the limits — three clean steps.`,
      },
      {
        id: 'shell2-conenote',
        type: 'text' as const,
        content: `## A Geometry Sanity Check

We can confirm $\\frac{16\\pi}{3}$ with pure geometry. Revolving the triangle $(0,0),(2,0),(2,2)$ about the $y$-axis sweeps a **cylinder with a cone removed**:

- The outer wall is the line $x = 2$, giving a **cylinder** of radius $2$ and height $2$.
- The slanted edge $y = x$ carves out a **cone** of radius $2$ and height $2$ from that cylinder.

$$V = V_{\\text{cylinder}} - V_{\\text{cone}} = \\pi (2)^2(2) - \\frac{1}{3}\\pi (2)^2(2) = 8\\pi - \\frac{8\\pi}{3} = \\frac{16\\pi}{3}$$

> ✅ **Exact match.** $\\frac{16\\pi}{3}$ from shells equals $\\frac{16\\pi}{3}$ from geometry. When a sanity check is available, use it — but be sure both objects are the *same solid*.`,
      },
      {
        id: 'shell2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For vertical strips revolved about the $y$-axis, the shell radius is:',
              options: ['$x$', '$y$', '$2x$', '$x^2$'],
              correctAnswer: 0,
              explanation: 'The radius is the horizontal distance from the strip at position $x$ to the $y$-axis, which is just $x$.',
            },
            {
              question: 'Which integral gives the volume when the region under $y=x^2$ from $x=0$ to $x=3$ is revolved about the $y$-axis?',
              options: ['$\\int_0^3 2\\pi x \\cdot x^2\\,dx$', '$\\int_0^3 \\pi (x^2)^2\\,dx$', '$\\int_0^3 2\\pi x^2\\,dx$', '$\\int_0^3 2\\pi (x^2)\\cdot x^2\\,dx$'],
              correctAnswer: 0,
              explanation: 'Shell: radius $=x$, height $=x^2-0=x^2$. So $dV = 2\\pi x\\cdot x^2\\,dx$ and $V=\\int_0^3 2\\pi x\\cdot x^2\\,dx$. The $\\pi(x^2)^2$ choice has the disk-method $\\pi r^2$ shape (wrong here); the $2\\pi x^2$ choice drops a factor of $x$.',
            },
          ],
        },
      },
      {
        id: 'shell2-drill',
        type: 'input-boxes' as const,
        content: `**Set Up and Evaluate** 🧮

Revolve the region under $y = x$ from $x=0$ to $x=3$, above $y=0$, about the $y$-axis.

**1)** The radius of a strip at position $x$ is $\\,?$ *(in terms of $x$ — enter the coefficient if it's just $x$, type \`x\`)* — actually enter the **height** of the strip in terms of $x$: $\\,?$
**2)** Evaluate $V = 2\\pi\\displaystyle\\int_0^3 x \\cdot x \\, dx$. Enter $V$ as a multiple of $\\pi$ — type the coefficient of $\\pi$ (e.g. \`18\`).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['x', '18'],
          hint1: 'The height is top minus bottom $= x - 0 = x$. Type \`x\`.',
          hint2: '$2\\pi\\int_0^3 x^2\\,dx = 2\\pi\\left[\\frac{x^3}{3}\\right]_0^3 = 2\\pi\\cdot\\frac{27}{3}$.',
          hint3: '$2\\pi\\cdot 9 = 18\\pi$, so the coefficient of $\\pi$ is $18$.',
          explanation: 'Height $=x$. $V = 2\\pi\\int_0^3 x^2\\,dx = 2\\pi\\cdot\\frac{27}{3} = 2\\pi\\cdot 9 = 18\\pi$. Coefficient $=18$.',
        },
      },
      {
        id: 'shell2-build',
        type: 'dropdown-select' as const,
        content: `**Build the Integral** 🔽

Set up the shell integral for the region under $y = 2x$ on $[0,3]$, above $y=0$, revolved about the $y$-axis.`,
        exercise: {
          dropdowns: [
            { label: 'Radius of a strip at position $x$:', options: ['$x$', '$2x$', '$2\\pi x$', '$3 - x$'] },
            { label: 'Height of the strip:', options: ['$2x$', '$x$', '$x^2$', '$2x - 3$'] },
            { label: 'Integrand $2\\pi r h$:', options: ['$4\\pi x^2$', '$2\\pi x^2$', '$2\\pi x$', '$4\\pi x$'] },
            { label: 'Limits of integration:', options: ['$0$ to $3$', '$0$ to $2$', '$0$ to $6$', '$-3$ to $3$'] },
          ],
          correctAnswers: ['$x$', '$2x$', '$4\\pi x^2$', '$0$ to $3$'],
          hint1: 'About the $y$-axis with vertical strips, the radius is always $x$.',
          hint2: 'Height $=$ top $-$ bottom $= 2x - 0 = 2x$.',
          hint3: '$2\\pi\\cdot x\\cdot 2x = 4\\pi x^2$; $x$ runs from $0$ to $3$.',
          explanation: 'Radius $x$, height $2x$, integrand $2\\pi x(2x) = 4\\pi x^2$, limits $0$ to $3$. (For reference, $V = 4\\pi\\int_0^3 x^2\\,dx = 4\\pi\\cdot 9 = 36\\pi$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell3-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 3 of 7 — Revolving About the $y$-Axis**

---

> 🔑 **Focus:** When the height is a single curve down to the $x$-axis, the height is just $f(x)$ and the radius is $x$. We'll drill the full pipeline until the setup is automatic.`,
      },
      {
        id: 'shell3-pipeline',
        type: 'text' as const,
        content: `## The $y$-Axis Pipeline

For a region between $y = f(x)$ and the $x$-axis on $[a,b]$, revolved about the $y$-axis:

$$V = \\int_a^b 2\\pi\\, x\\, f(x)\\, dx$$

### Worked Example: $y = x^2$ on $[0, 2]$

- radius $= x$
- height $= f(x) = x^2$
- limits: $0$ to $2$

$$V = \\int_0^2 2\\pi\\, x \\cdot x^2\\, dx = 2\\pi \\int_0^2 x^3\\, dx = 2\\pi\\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi \\cdot \\frac{16}{4} = 8\\pi$$

> 💡 Notice how clean shells are here. The disk method would need $x = \\sqrt{y}$ and an integral in $y$ — more work for the same answer.`,
      },
      {
        id: 'shell3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $y = \\sqrt{x}$ on $[0, 4]$

Revolve about the $y$-axis.

- radius $= x$
- height $= \\sqrt{x} = x^{1/2}$
- limits: $0$ to $4$

$$V = \\int_0^4 2\\pi\\, x \\cdot x^{1/2}\\, dx = 2\\pi \\int_0^4 x^{3/2}\\, dx$$

$$= 2\\pi \\left[\\frac{x^{5/2}}{5/2}\\right]_0^4 = 2\\pi \\cdot \\frac{2}{5}\\,(4)^{5/2}$$

Since $4^{5/2} = (\\sqrt{4})^5 = 2^5 = 32$:

$$V = 2\\pi \\cdot \\frac{2}{5}\\cdot 32 = \\frac{128\\pi}{5}$$

> ⚠️ Combine $x \\cdot x^{1/2} = x^{3/2}$ **before** integrating. Trying to integrate $x$ and $\\sqrt{x}$ separately is a classic error — there is no product rule for integrals.`,
      },
      {
        id: 'shell3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Integral** 🔽

Set up the shell integral for $y = x^3$ on $[0,1]$ revolved about the $y$-axis.`,
        exercise: {
          dropdowns: [
            { label: 'Radius of a strip:', options: ['$x$', '$x^3$', '$2\\pi x$', '$\\sqrt{x}$'] },
            { label: 'Height of a strip:', options: ['$x^3$', '$x$', '$3x^2$', '$x^3 - x$'] },
            { label: 'Integrand $2\\pi r h$ simplifies to:', options: ['$2\\pi x^4$', '$2\\pi x^3$', '$2\\pi x^6$', '$2\\pi x^2$'] },
            { label: 'Limits of integration:', options: ['$0$ to $1$', '$0$ to $3$', '$-1$ to $1$', '$1$ to $3$'] },
          ],
          correctAnswers: ['$x$', '$x^3$', '$2\\pi x^4$', '$0$ to $1$'],
          hint1: 'About the $y$-axis with vertical strips, radius is always $x$.',
          hint2: 'Height is top minus bottom $= x^3 - 0 = x^3$.',
          hint3: '$2\\pi\\cdot x\\cdot x^3 = 2\\pi x^4$; $x$ runs from $0$ to $1$ as given.',
          explanation: 'Radius $x$, height $x^3$, integrand $2\\pi x\\cdot x^3 = 2\\pi x^4$, limits $0$ to $1$. (For reference, $V = 2\\pi\\int_0^1 x^4\\,dx = 2\\pi/5$.)',
        },
      },
      {
        id: 'shell3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $V = 2\\pi\\int_0^2 x\\cdot x^2\\,dx$ (region under $y=x^2$, about $y$-axis).',
              options: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$\\frac{32\\pi}{5}$'],
              correctAnswer: 0,
              explanation: '$2\\pi\\int_0^2 x^3\\,dx = 2\\pi[\\frac{x^4}{4}]_0^2 = 2\\pi\\cdot 4 = 8\\pi$.',
            },
            {
              question: 'Why is the shell method usually easier than disks for revolving $y=f(x)$ about the $y$-axis?',
              options: ['It avoids solving the curve for $x$ in terms of $y$', 'It squares the radius for accuracy', 'It needs no limits of integration', 'It only works for lines'],
              correctAnswer: 0,
              explanation: 'Shells keep vertical strips, so you integrate in $x$ using $f(x)$ directly — no need to invert the function to $x = g(y)$ as disks would require.',
            },
          ],
        },
      },
      {
        id: 'shell3-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Volumes** 🧮

Each region (under the given curve, above $y=0$) is revolved about the $y$-axis. Enter $V$ as the **coefficient of $\\pi$** (a fraction like \`16/3\` or an integer).

**1)** $y = x$ on $[0,4]$: coefficient $= \\,?$
**2)** $y = x^2$ on $[0,1]$: coefficient $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['128/3', '1/2'],
          hint1: '$2\\pi\\int_0^4 x\\cdot x\\,dx = 2\\pi\\int_0^4 x^2\\,dx = 2\\pi\\cdot\\frac{64}{3}$, so the coefficient is $\\frac{128}{3}$.',
          hint2: '$2\\pi\\int_0^1 x\\cdot x^2\\,dx = 2\\pi\\int_0^1 x^3\\,dx = 2\\pi\\cdot\\frac14 = \\frac{\\pi}{2}$.',
          hint3: 'For (2), the coefficient of $\\pi$ is $\\frac12$. Enter \`1/2\`.',
          explanation: '1) $2\\pi\\cdot\\frac{64}{3} = \\frac{128\\pi}{3}$, coefficient $\\frac{128}{3}$.  2) $2\\pi\\cdot\\frac14 = \\frac{\\pi}{2}$, coefficient $\\frac12$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell4-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 4 of 7 — Regions Between Two Curves**

---

> 🔑 **Key Upgrade:** When the region sits between two curves, the shell **height** becomes $\\text{top} - \\text{bottom} = f(x) - g(x)$. The radius is unchanged.`,
      },
      {
        id: 'shell4-height',
        type: 'text' as const,
        content: `## Height = Top − Bottom

For a region between $y = f(x)$ (top) and $y = g(x)$ (bottom) on $[a,b]$, revolved about the $y$-axis:

$$V = \\int_a^b 2\\pi\\, x\\,\\big[f(x) - g(x)\\big]\\, dx$$

The bracket $f(x) - g(x)$ is the **length of the vertical strip** — exactly the height of the shell it generates.

### Finding the Limits
The curves usually intersect, and those intersection $x$-values are your limits. Set $f(x) = g(x)$ and solve.

> 💡 The radius ($x$) and the height ($f-g$) are independent. Get the height right first, then multiply by $x$.`,
      },
      {
        id: 'shell4-worked',
        type: 'text' as const,
        content: `## Worked Example: Between $y=x$ and $y=x^2$

Revolve the region between $y = x$ (top) and $y = x^2$ (bottom) about the $y$-axis.

**Step 1 — Limits:** Set $x = x^2 \\Rightarrow x^2 - x = 0 \\Rightarrow x(x-1)=0$, so $x = 0$ and $x = 1$.

**Step 2 — Which is on top?** At $x = \\tfrac12$: $y=x$ gives $0.5$, $y=x^2$ gives $0.25$. So $y=x$ is the top.

**Step 3 — Setup:**
$$V = \\int_0^1 2\\pi\\, x\\,\\big(x - x^2\\big)\\, dx = 2\\pi\\int_0^1 \\big(x^2 - x^3\\big)\\, dx$$

**Step 4 — Evaluate:**
$$= 2\\pi\\left[\\frac{x^3}{3} - \\frac{x^4}{4}\\right]_0^1 = 2\\pi\\left(\\frac{1}{3} - \\frac{1}{4}\\right) = 2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$$

> ⚠️ Distribute $x$ across the **whole** bracket: $x(x - x^2) = x^2 - x^3$. Forgetting to multiply the second term is the #1 error here.`,
      },
      {
        id: 'shell4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Between-Curves Shell** 🔽

Region between $y = 2x$ (top) and $y = x^2$ (bottom), revolved about the $y$-axis.`,
        exercise: {
          dropdowns: [
            { label: 'Intersection limits ($2x = x^2$):', options: ['$0$ to $2$', '$0$ to $1$', '$-2$ to $2$', '$1$ to $2$'] },
            { label: 'Height (top − bottom):', options: ['$2x - x^2$', '$x^2 - 2x$', '$2x + x^2$', '$x^2$'] },
            { label: 'Integrand $2\\pi x(\\text{height})$:', options: ['$2\\pi(2x^2 - x^3)$', '$2\\pi(2x - x^2)$', '$2\\pi(2x^3 - x^4)$', '$2\\pi x^2$'] },
          ],
          correctAnswers: ['$0$ to $2$', '$2x - x^2$', '$2\\pi(2x^2 - x^3)$'],
          hint1: '$2x = x^2 \\Rightarrow x^2 - 2x = 0 \\Rightarrow x(x-2)=0$, so $x=0,2$.',
          hint2: 'At $x=1$, $2x=2 > x^2=1$, so $2x$ is on top; height $=2x - x^2$.',
          hint3: '$x(2x - x^2) = 2x^2 - x^3$, so integrand $= 2\\pi(2x^2 - x^3)$.',
          explanation: 'Limits $0$ to $2$; height $2x - x^2$; integrand $2\\pi x(2x-x^2) = 2\\pi(2x^2 - x^3)$. (For reference $V = 2\\pi[\\frac{2}{3}x^3 - \\frac14 x^4]_0^2 = 2\\pi(\\frac{16}{3} - 4) = \\frac{8\\pi}{3}$.)',
        },
      },
      {
        id: 'shell4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For a region between $y=f(x)$ (top) and $y=g(x)$ (bottom) revolved about the $y$-axis, the shell height is:',
              options: ['$f(x) - g(x)$', '$f(x)\\cdot g(x)$', '$x$', '$f(x) + g(x)$'],
              correctAnswer: 0,
              explanation: 'The height of the shell is the vertical strip length, top minus bottom: $f(x) - g(x)$.',
            },
            {
              question: 'Evaluate $V = 2\\pi\\int_0^1 (x^2 - x^3)\\,dx$ (the $y=x$ over $y=x^2$ example).',
              options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{12}$', '$\\frac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$2\\pi(\\frac13 - \\frac14) = 2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$.',
            },
          ],
        },
      },
      {
        id: 'shell4-drill',
        type: 'input-boxes' as const,
        content: `**Volume Between Curves** 🧮

Region between $y = x$ (top) and $y = x^3$ (bottom) on $[0,1]$, revolved about the $y$-axis.

**1)** The height (top − bottom) is $x - x^?$. Enter the missing exponent: $\\,?$
**2)** Evaluate $V = 2\\pi\\displaystyle\\int_0^1 (x^2 - x^4)\\,dx$ as the coefficient of $\\pi$ (a fraction): $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '4/15'],
          hint1: 'Height $= x - x^3$, so the missing exponent is $3$.',
          hint2: '$2\\pi\\int_0^1(x^2 - x^4)\\,dx = 2\\pi[\\frac{x^3}{3} - \\frac{x^5}{5}]_0^1 = 2\\pi(\\frac13 - \\frac15)$.',
          hint3: '$\\frac13 - \\frac15 = \\frac{5-3}{15} = \\frac{2}{15}$, so $V = 2\\pi\\cdot\\frac{2}{15} = \\frac{4\\pi}{15}$. Coefficient $\\frac{4}{15}$.',
          explanation: '1) Exponent $3$ (height $x - x^3$). Radius $\\times$ height $= x(x - x^3) = x^2 - x^4$.  2) $2\\pi(\\frac13 - \\frac15) = 2\\pi\\cdot\\frac{2}{15} = \\frac{4\\pi}{15}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell5-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 5 of 7 — Revolving About a Shifted Vertical Axis**

---

> 🔑 **The Only Change:** When you rotate about a vertical line $x = c$ instead of the $y$-axis, **only the radius changes**. The height and limits stay the same.`,
      },
      {
        id: 'shell5-radius',
        type: 'text' as const,
        content: `## Adjusting the Radius

The radius is always the **distance from the strip to the axis of rotation**. For a strip at position $x$:

| Axis of rotation | Radius |
|------------------|--------|
| $y$-axis ($x=0$) | $x$ |
| line $x = c$ on the **right** of the region | $c - x$ |
| line $x = c$ on the **left** of the region | $x - c$ |

The radius must be a **positive distance** over the region, so subtract in the order that keeps it positive.

> 💡 **Quick test:** Plug in a sample $x$ inside the region. If your radius formula comes out positive, the order is right. If it's negative, swap the subtraction.`,
      },
      {
        id: 'shell5-worked1',
        type: 'text' as const,
        content: `## Worked Example: About $x = 2$

Revolve the region under $y = x^2$ on $[0,1]$, above $y=0$, about the line $x = 2$.

The axis $x=2$ is to the **right** of the region (which lives between $x=0$ and $x=1$), so:

$$\\text{radius} = 2 - x, \\qquad \\text{height} = x^2$$

$$V = \\int_0^1 2\\pi\\,(2 - x)\\,(x^2)\\, dx = 2\\pi\\int_0^1 \\big(2x^2 - x^3\\big)\\, dx$$

$$= 2\\pi\\left[\\frac{2x^3}{3} - \\frac{x^4}{4}\\right]_0^1 = 2\\pi\\left(\\frac{2}{3} - \\frac{1}{4}\\right) = 2\\pi\\cdot\\frac{5}{12} = \\frac{5\\pi}{6}$$

> ✅ **Check the radius sign:** at $x=0.5$ (inside the region), $2 - 0.5 = 1.5 > 0$. Good — the radius stays positive.`,
      },
      {
        id: 'shell5-worked2',
        type: 'text' as const,
        content: `## Worked Example: About $x = -1$

Same region (under $y=x^2$ on $[0,1]$), now revolved about the line $x = -1$.

The axis $x=-1$ is to the **left** of the region, so:

$$\\text{radius} = x - (-1) = x + 1, \\qquad \\text{height} = x^2$$

$$V = \\int_0^1 2\\pi\\,(x + 1)\\,(x^2)\\, dx = 2\\pi\\int_0^1 \\big(x^3 + x^2\\big)\\, dx$$

$$= 2\\pi\\left[\\frac{x^4}{4} + \\frac{x^3}{3}\\right]_0^1 = 2\\pi\\left(\\frac{1}{4} + \\frac{1}{3}\\right) = 2\\pi\\cdot\\frac{7}{12} = \\frac{7\\pi}{6}$$

> ⚠️ For an axis on the **left**, the radius is $x - c$ where $c$ is negative, giving $x + \\lvert c \\rvert$. Double-subtracting the negative sign is a frequent slip.`,
      },
      {
        id: 'shell5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Radius** 🔽

The region lives between $x = 1$ and $x = 3$. Choose the correct shell radius for each axis.`,
        exercise: {
          dropdowns: [
            { label: 'Rotated about $x = 0$ (the $y$-axis):', options: ['$x$', '$x - 0$ then negate', '$-x$', '$x + 1$'] },
            { label: 'Rotated about $x = 5$ (right of region):', options: ['$5 - x$', '$x - 5$', '$x + 5$', '$5x$'] },
            { label: 'Rotated about $x = -2$ (left of region):', options: ['$x + 2$', '$x - 2$', '$2 - x$', '$-2 - x$'] },
          ],
          correctAnswers: ['$x$', '$5 - x$', '$x + 2$'],
          hint1: 'About the $y$-axis, radius is the distance to $x=0$, which is $x$.',
          hint2: 'For an axis to the right at $x=5$, radius $= 5 - x$ (positive since $x \\le 3 < 5$).',
          hint3: 'For an axis to the left at $x=-2$, radius $= x - (-2) = x + 2$ (positive since $x \\ge 1$).',
          explanation: 'Radius is the positive distance from the strip to the axis: $x$ (about $x=0$), $5 - x$ (axis on the right), $x + 2$ (axis on the left). The height is untouched by the shift.',
        },
      },
      {
        id: 'shell5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you rotate about $x = 4$ (to the right of a region in $[0,1]$) instead of the $y$-axis, what changes in the shell integral?',
              options: ['Only the radius: from $x$ to $4 - x$', 'Only the height', 'The limits flip to $4$ and $5$', 'Nothing changes'],
              correctAnswer: 0,
              explanation: 'Shifting the vertical axis changes only the radius (distance to the axis), from $x$ to $4 - x$. Height and limits are unchanged.',
            },
            {
              question: 'Evaluate $V = 2\\pi\\int_0^1 (2 - x)x^2\\,dx$ (the about-$x=2$ example).',
              options: ['$\\frac{5\\pi}{6}$', '$\\frac{7\\pi}{6}$', '$\\frac{\\pi}{6}$', '$\\frac{5\\pi}{12}$'],
              correctAnswer: 0,
              explanation: '$2\\pi\\int_0^1(2x^2 - x^3)\\,dx = 2\\pi(\\frac23 - \\frac14) = 2\\pi\\cdot\\frac{5}{12} = \\frac{5\\pi}{6}$.',
            },
          ],
        },
      },
      {
        id: 'shell5-drill',
        type: 'input-boxes' as const,
        content: `**Shifted-Axis Volumes** 🧮

Region under $y = x$ on $[0,2]$, above $y=0$.

**1)** Revolved about $x = 3$: the radius is $3 - x$. Evaluate $V = 2\\pi\\displaystyle\\int_0^2 (3 - x)x\\,dx$ as the coefficient of $\\pi$ (a fraction): $\\,?$
**2)** Revolved about $x = -1$: the radius is $x + 1$. Evaluate $V = 2\\pi\\displaystyle\\int_0^2 (x + 1)x\\,dx$ as the coefficient of $\\pi$ (a fraction): $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20/3', '28/3'],
          hint1: '(1) $(3-x)x = 3x - x^2$, so integrate $2\\pi\\int_0^2(3x - x^2)\\,dx = 2\\pi[\\frac{3x^2}{2} - \\frac{x^3}{3}]_0^2$.',
          hint2: '$\\frac{3(2)^2}{2} = 6$ and $\\frac{2^3}{3} = \\frac83$, so $6 - \\frac83 = \\frac{10}{3}$; then $V = 2\\pi\\cdot\\frac{10}{3} = \\frac{20\\pi}{3}$, coefficient $\\frac{20}{3}$.',
          hint3: '(2) $(x+1)x = x^2 + x$; $2\\pi\\int_0^2(x^2 + x)\\,dx = 2\\pi[\\frac{x^3}{3} + \\frac{x^2}{2}]_0^2 = 2\\pi(\\frac83 + 2) = 2\\pi\\cdot\\frac{14}{3} = \\frac{28\\pi}{3}$.',
          explanation: '(1) $2\\pi\\int_0^2(3x - x^2)\\,dx = 2\\pi(6 - \\frac83) = 2\\pi\\cdot\\frac{10}{3} = \\frac{20\\pi}{3}$, coefficient $\\frac{20}{3}$.  (2) $2\\pi\\int_0^2(x^2 + x)\\,dx = 2\\pi(\\frac83 + 2) = 2\\pi\\cdot\\frac{14}{3} = \\frac{28\\pi}{3}$, coefficient $\\frac{28}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell6-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 6 of 7 — Horizontal Shells ($dy$) & Choosing $dx$ vs $dy$**

---

> 🔑 **Symmetry:** Everything flips. Rotate about a *horizontal* axis with *horizontal* strips ($dy$): radius $= y$, height $=$ right curve $-$ left curve, integrate in $y$.`,
      },
      {
        id: 'shell6-dy',
        type: 'text' as const,
        content: `## Horizontal Shells

To revolve a region about the **$x$-axis** using shells, slice with **horizontal strips** of thickness $dy$. Each strip sweeps a horizontal shell:

$$V = \\int_c^d 2\\pi\\, y \\,\\big[\\,x_{\\text{right}}(y) - x_{\\text{left}}(y)\\,\\big]\\, dy$$

- **radius** $= y$ (distance from the strip up to the $x$-axis),
- **height** $=$ rightmost curve $-$ leftmost curve, as functions of $y$,
- **limits** $c$ to $d$ are $y$-values.

### Worked Example: $x = y^2$, $y \\in [0,1]$, about the $x$-axis

The region runs from the curve $x = y^2$ back to the $y$-axis ($x=0$), so the strip width is $y^2 - 0 = y^2$.

$$V = \\int_0^1 2\\pi\\, y\\,(y^2)\\, dy = 2\\pi\\int_0^1 y^3\\, dy = 2\\pi\\cdot\\frac{1}{4} = \\frac{\\pi}{2}$$

> 💡 Horizontal shells are the mirror image of vertical ones: swap the roles of $x$ and $y$ everywhere.`,
      },
      {
        id: 'shell6-choosing',
        type: 'text' as const,
        content: `## Choosing $dx$ vs $dy$ — The Decision Rule

The cleanest choice makes the shells **parallel to the axis of rotation**, so strips stay parallel to the axis and you avoid inverting functions.

| Axis of rotation | Use strips… | Shell method variable |
|------------------|-------------|------------------------|
| Vertical ($y$-axis or $x=c$) | vertical | $dx$, radius involves $x$ |
| Horizontal ($x$-axis or $y=c$) | horizontal | $dy$, radius involves $y$ |

### The full picture (shells vs disks)

| | Strips ∥ axis | Strips ⟂ axis |
|---|---|---|
| **Best method** | **Shell** | **Disk / Washer** |
| Integration variable | matches strip | matches strip |

> ⚠️ Mismatched setups still work mathematically, but force you to solve curves for the *other* variable. Pick the method whose strips are **parallel** to the axis to save algebra.`,
      },
      {
        id: 'shell6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose Your Variable** 🔽

For each scenario, pick the shell-method variable that keeps strips parallel to the axis.`,
        exercise: {
          dropdowns: [
            { label: 'Region under $y=f(x)$, rotated about the $y$-axis:', options: ['$dx$ (vertical strips)', '$dy$ (horizontal strips)'] },
            { label: 'Region beside $x=g(y)$, rotated about the $x$-axis:', options: ['$dy$ (horizontal strips)', '$dx$ (vertical strips)'] },
            { label: 'Rotated about the line $y = -3$ (horizontal axis):', options: ['$dy$ (horizontal strips)', '$dx$ (vertical strips)'] },
          ],
          correctAnswers: ['$dx$ (vertical strips)', '$dy$ (horizontal strips)', '$dy$ (horizontal strips)'],
          hint1: 'A vertical axis pairs with vertical strips ($dx$) for shells.',
          hint2: 'A horizontal axis pairs with horizontal strips ($dy$) for shells.',
          hint3: '$y=-3$ is horizontal, so use horizontal strips and integrate in $y$.',
          explanation: 'Shells should be parallel to the axis: vertical axis → $dx$; horizontal axis → $dy$. This keeps the radius simple and avoids inverting the curves.',
        },
      },
      {
        id: 'shell6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For horizontal shells revolving about the $x$-axis, the radius of a strip at height $y$ is:',
              options: ['$y$', '$x$', '$2\\pi y$', '$y^2$'],
              correctAnswer: 0,
              explanation: 'The radius is the distance from the horizontal strip (at height $y$) to the $x$-axis, which is $y$.',
            },
            {
              question: 'Evaluate $V = 2\\pi\\int_0^1 y\\cdot y^2\\,dy$ (the $x=y^2$, about $x$-axis example).',
              options: ['$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$2\\pi$'],
              correctAnswer: 0,
              explanation: '$2\\pi\\int_0^1 y^3\\,dy = 2\\pi\\cdot\\frac14 = \\frac{\\pi}{2}$.',
            },
          ],
        },
      },
      {
        id: 'shell6-drill',
        type: 'input-boxes' as const,
        content: `**Horizontal Shells** 🧮

Region between $x = y$ (right) and $x = y^2$ (left) on $y\\in[0,1]$, revolved about the **$x$-axis**.

**1)** The strip width (right − left) is $y - y^?$. Enter the missing exponent: $\\,?$
**2)** Evaluate $V = 2\\pi\\displaystyle\\int_0^1 y\\,(y - y^2)\\,dy$ as the coefficient of $\\pi$ (a fraction): $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '1/6'],
          hint1: 'Width $= y - y^2$, so the missing exponent is $2$.',
          hint2: '$y(y - y^2) = y^2 - y^3$; $2\\pi\\int_0^1(y^2 - y^3)\\,dy = 2\\pi[\\frac{y^3}{3} - \\frac{y^4}{4}]_0^1$.',
          hint3: '$2\\pi(\\frac13 - \\frac14) = 2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$, coefficient $\\frac16$.',
          explanation: '1) Exponent $2$ (width $y - y^2$). 2) $2\\pi\\int_0^1(y^2 - y^3)\\,dy = 2\\pi(\\frac13 - \\frac14) = 2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$, coefficient $\\frac16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'volumes-shell-method',
    sections: [
      {
        id: 'shell7-intro',
        type: 'text' as const,
        content: `# 🧅 Volumes of Revolution: The Shell Method

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) build a shell from $2\\pi r h\\,dx$, (2) revolve about the $y$-axis, (3) handle regions between two curves, (4) shift to any vertical or horizontal axis, and (5) choose $dx$ vs $dy$. Let's consolidate.`,
      },
      {
        id: 'shell7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Radius $r$ | Height $h$ | Variable |
|-----------|-----------|-----------|----------|
| About $y$-axis | $x$ | $f(x) - g(x)$ | $dx$ |
| About $x = c$ (right of region) | $c - x$ | $f(x) - g(x)$ | $dx$ |
| About $x = c$ (left of region) | $x - c$ | $f(x) - g(x)$ | $dx$ |
| About $x$-axis | $y$ | $x_R(y) - x_L(y)$ | $dy$ |
| About $y = c$ (above region) | $c - y$ | $x_R(y) - x_L(y)$ | $dy$ |
| About $y = c$ (below region) | $y - c$ | $x_R(y) - x_L(y)$ | $dy$ |

$$\\boxed{\\,V = \\int 2\\pi\\,(\\text{radius})\\,(\\text{height})\\,(\\text{thickness})\\,}$$

> ⚠️ **Three habits that prevent most errors:** (1) keep the radius positive over the region, (2) multiply $r$ through the *entire* height bracket, (3) match the strip direction to the axis.`,
      },
      {
        id: 'shell7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region under $y = \\sqrt{x}$ on $[0,4]$ is revolved about the $y$-axis. Which integral is correct?',
              options: ['$\\int_0^4 2\\pi x\\sqrt{x}\\,dx$', '$\\int_0^4 \\pi x\\,dx$', '$\\int_0^4 2\\pi\\sqrt{x}\\,dx$', '$\\int_0^2 2\\pi x\\sqrt{x}\\,dx$'],
              correctAnswer: 0,
              explanation: 'Radius $=x$, height $=\\sqrt{x}$, limits $0$ to $4$: $V = \\int_0^4 2\\pi x\\sqrt{x}\\,dx$. (This evaluates to $\\frac{128\\pi}{5}$.)',
            },
            {
              question: 'A region in $[1,2]$ is revolved about the line $x = 5$. The correct shell radius is:',
              options: ['$5 - x$', '$x - 5$', '$x + 5$', '$5x$'],
              correctAnswer: 0,
              explanation: 'The axis $x=5$ is to the right of the region ($x\\le 2$), so radius $= 5 - x$, which stays positive.',
            },
          ],
        },
      },
      {
        id: 'shell7-setup-drill',
        type: 'input-boxes' as const,
        content: `**One Full Problem** 🧮

Region between $y = 4 - x^2$ (top) and the $x$-axis, on $[0,2]$, revolved about the $y$-axis.

**1)** Radius $\\times$ height $= x(4 - x^2) = 4x - x^?$. Enter the missing exponent: $\\,?$
**2)** Evaluate $V = 2\\pi\\displaystyle\\int_0^2 (4x - x^3)\\,dx$ as the coefficient of $\\pi$ (an integer): $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '8'],
          hint1: '$x(4 - x^2) = 4x - x^3$, so the missing exponent is $3$.',
          hint2: '$2\\pi\\int_0^2(4x - x^3)\\,dx = 2\\pi[2x^2 - \\frac{x^4}{4}]_0^2 = 2\\pi(8 - 4)$.',
          hint3: '$2\\pi\\cdot 4 = 8\\pi$, so the coefficient is $8$.',
          explanation: '1) Exponent $3$ (integrand $4x - x^3$). 2) $2\\pi[2x^2 - \\frac{x^4}{4}]_0^2 = 2\\pi(8 - 4) = 8\\pi$, coefficient $8$.',
        },
      },
      {
        id: 'shell7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The differential volume of a single cylindrical shell is:',
              options: ['$dV = 2\\pi r h\\,dx$', '$dV = \\pi r^2\\,dx$', '$dV = 2\\pi r^2 h\\,dx$', '$dV = \\pi r h\\,dx$'],
              correctAnswer: 0,
              explanation: 'Unrolling a shell gives a slab of length $2\\pi r$, height $h$, thickness $dx$: $dV = 2\\pi r h\\,dx$. The $\\pi r^2$ form is the disk method.',
            },
            {
              question: 'A region is bounded by $y = x$ and $y = x^2$ and revolved about the $y$-axis. The volume is:',
              options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$'],
              correctAnswer: 0,
              explanation: 'Height $x - x^2$, radius $x$: $V = 2\\pi\\int_0^1(x^2 - x^3)\\,dx = 2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$.',
            },
            {
              question: 'To revolve a region about the horizontal line $y = -2$ using shells, you should integrate with respect to:',
              options: ['$y$, with radius $y + 2$', '$x$, with radius $x + 2$', '$y$, with radius $2 - y$', '$x$, with radius $x$'],
              correctAnswer: 0,
              explanation: 'A horizontal axis calls for horizontal strips ($dy$). The axis $y=-2$ is below a region with $y\\ge 0$, so the radius is the distance up from $y=-2$: $y - (-2) = y + 2$.',
            },
          ],
        },
      },
    ],
  },
]
