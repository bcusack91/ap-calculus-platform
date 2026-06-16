import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Surface Area and Volume of Solids (Geometry).
 * Registry key: 'surface-area-volume-solids-geo' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-solids-geo',
    sections: [
      {
        id: 'savs1-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area & Volume of Solids

**Part 1 of 5 — Prisms & Cylinders**

---

### Topics in This Part

| Section |
|---------|
| Surface Area vs. Volume — the big distinction |
| Prisms: $V = Bh$ |
| Cylinders: $V = \\pi r^2 h$ |
| Surface area by "unfolding" the net |

> 🔑 **Key Concept:** **Volume** measures the *space inside* a solid (cubic units). **Surface area** measures the *skin around* it (square units). Prisms and cylinders share one idea: a base shape stretched straight up through a height $h$.`,
      },
      {
        id: 'savs1-sa-vs-vol',
        type: 'text' as const,
        content: `## Surface Area vs. Volume

These two ideas are easy to mix up, so anchor them now:

| | **Volume** | **Surface Area** |
|---|---|---|
| Measures | space *inside* | "skin" *outside* |
| Units | cubic ($\\text{cm}^3$, $\\text{in}^3$) | square ($\\text{cm}^2$, $\\text{in}^2$) |
| "Fill it with…" | water (how much fits) | wrapping paper (how much covers) |

### Prisms & Cylinders Volume: $V = Bh$

A **prism** or **cylinder** has two identical parallel bases joined by straight sides. Its volume is always:

$$V = B \\cdot h$$

where $B$ is the **area of one base** and $h$ is the **height** (the perpendicular distance between the two bases).

> 🔑 **The base $B$ is an area, not a length.** For a rectangular prism $B = \\ell w$; for a cylinder $B = \\pi r^2$. Multiply by $h$ to "stack" that base through the height.`,
      },
      {
        id: 'savs1-vol-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A solid has volume $V = Bh$. What does $B$ represent?',
              options: ['The area of one base', 'The length of the longest edge', 'The perimeter of the base', 'The total surface area'],
              correctAnswer: 0,
              explanation: 'In $V = Bh$, the letter $B$ is the **area of one base** (a 2-D region), and $h$ is the height. Multiplying an area by a length gives a volume.',
            },
            {
              question: 'Volume is measured in which kind of units?',
              options: ['Square units', 'Cubic units', 'Linear units', 'Degrees'],
              correctAnswer: 1,
              explanation: 'Volume fills 3-D space, so it uses **cubic** units like $\\text{cm}^3$. Surface area uses square units; length uses linear units.',
            },
          ],
        },
      },
      {
        id: 'savs1-prism-worked',
        type: 'text' as const,
        content: `## Worked Example — Rectangular Prism

A box measures $\\ell = 5\\text{ cm}$, $w = 4\\text{ cm}$, $h = 6\\text{ cm}$.

**Volume.** The base is a $5 \\times 4$ rectangle, so $B = 20\\text{ cm}^2$:

$$V = Bh = 20 \\cdot 6 = 120\\text{ cm}^3$$

**Surface area.** A box has 3 pairs of matching faces. Add the area of one of each pair, then double:

$$SA = 2(\\ell w + \\ell h + w h) = 2(5\\cdot 4 + 5\\cdot 6 + 4\\cdot 6)$$

$$SA = 2(20 + 30 + 24) = 2(74) = 148\\text{ cm}^2$$

> 💡 **Net trick:** "Unfold" the solid flat into a **net**. Surface area is just the total area of every face in the net — no formula memorization required if you can find each face.`,
      },
      {
        id: 'savs1-cylinder',
        type: 'text' as const,
        content: `## Cylinders

A cylinder's base is a circle, so $B = \\pi r^2$ and:

$$V = \\pi r^2 h$$

For surface area, unroll the cylinder. You get **two circles** (top and bottom) plus **one rectangle** (the curved side). The rectangle's width is the base circumference $2\\pi r$ and its height is $h$:

$$SA = \\underbrace{2\\pi r^2}_{\\text{two circles}} + \\underbrace{2\\pi r h}_{\\text{curved side}}$$

### Example: $r = 3$, $h = 10$

$$V = \\pi (3)^2(10) = 90\\pi \\approx 282.7\\text{ units}^3$$

$$SA = 2\\pi(3)^2 + 2\\pi(3)(10) = 18\\pi + 60\\pi = 78\\pi\\text{ units}^2$$

> 💡 Leave answers in terms of $\\pi$ for exactness, or multiply by $\\pi \\approx 3.14159$ for a decimal.`,
      },
      {
        id: 'savs1-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

Find each value. Leave $\\pi$ answers as a number times $\\pi$ — just enter the **coefficient** of $\\pi$ where asked.

**1)** Rectangular prism $3 \\times 4 \\times 5$: volume $= \\,?$ (cubic units)
**2)** Cylinder $r = 2$, $h = 5$: volume $= \\,? \\pi$ (enter the coefficient)
**3)** Cylinder $r = 4$, $h = 6$: surface area $= \\,? \\pi$ (enter the coefficient)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '20', '80'],
          hint1: '$V = \\ell w h = 3 \\cdot 4 \\cdot 5 = 60$.',
          hint2: '$V = \\pi r^2 h = \\pi(2^2)(5) = 20\\pi$, so the coefficient is $20$.',
          hint3: '$SA = 2\\pi r^2 + 2\\pi r h = 2\\pi(16) + 2\\pi(4)(6) = 32\\pi + 48\\pi = 80\\pi$.',
          explanation: '1) $60\\text{ units}^3$.  2) $20\\pi$.  3) $32\\pi + 48\\pi = 80\\pi$.',
        },
      },
      {
        id: 'savs1-units-text',
        type: 'text' as const,
        content: `## One Last Habit — Units

Every number you report should carry the right kind of unit. A quick way to self-check: count the dimensions you multiplied.

- Multiplied **three** lengths (like $\\ell \\cdot w \\cdot h$)? → **cubic** units → it's a **volume**.
- Multiplied **two** lengths (like $r \\cdot \\ell$)? → **square** units → it's an **area**.

> 💡 If your "volume" came out in square units, you almost certainly forgot to multiply by the height. The units are a free error-detector.`,
      },
      {
        id: 'savs1-units-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Units** 🔽

Choosing the wrong units is the #1 careless error on these problems.`,
        exercise: {
          dropdowns: [
            { label: 'The volume of a box is measured in:', options: ['$\\text{cm}^3$', '$\\text{cm}^2$', '$\\text{cm}$', 'degrees'] },
            { label: 'The surface area of a can is measured in:', options: ['$\\text{cm}^3$', '$\\text{cm}^2$', '$\\text{cm}$', 'degrees'] },
            { label: 'In $V = \\pi r^2 h$, $h$ is measured in:', options: ['$\\text{cm}^3$', '$\\text{cm}^2$', '$\\text{cm}$', 'degrees'] },
          ],
          correctAnswers: ['$\\text{cm}^3$', '$\\text{cm}^2$', '$\\text{cm}$'],
          hint1: 'Volume fills space → cubic units (exponent 3).',
          hint2: 'Surface area covers a 2-D skin → square units (exponent 2).',
          hint3: 'A height is a single length → linear units (no exponent).',
          explanation: 'Volume = cubic ($\\text{cm}^3$), surface area = square ($\\text{cm}^2$), a height = linear ($\\text{cm}$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-solids-geo',
    sections: [
      {
        id: 'savs2-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area & Volume of Solids

**Part 2 of 5 — Pyramids & Cones**

---

> 🔑 **The "one-third" family:** A pyramid or cone that shares the same base and height as a prism or cylinder holds exactly **one-third** as much. That single factor of $\\frac{1}{3}$ runs through this entire part.`,
      },
      {
        id: 'savs2-pyramid',
        type: 'text' as const,
        content: `## Pyramids: $V = \\frac{1}{3}Bh$

A **pyramid** has a polygon base and triangular faces meeting at an apex. Its volume is:

$$V = \\frac{1}{3} B h$$

where $B$ is the base area and $h$ is the **vertical height** (apex straight down to the base center).

### Example: square base, side $6$, height $10$

$$B = 6^2 = 36, \\qquad V = \\frac{1}{3}(36)(10) = 120\\text{ units}^3$$

> ⚠️ **Watch the height.** The volume formula needs the **vertical height** $h$, *not* the **slant height** $\\ell$ (the distance up a triangular face). They are different — mixing them up is the classic pyramid/cone mistake.`,
      },
      {
        id: 'savs2-cone',
        type: 'text' as const,
        content: `## Cones: $V = \\frac{1}{3}\\pi r^2 h$

A cone is a pyramid with a circular base, so $B = \\pi r^2$:

$$V = \\frac{1}{3}\\pi r^2 h$$

For surface area we need the **slant height** $\\ell$, found by the Pythagorean theorem on the right triangle formed by $r$, $h$, and $\\ell$:

$$\\ell = \\sqrt{r^2 + h^2}$$

Then the cone's surface area is the base circle plus the curved lateral surface:

$$SA = \\underbrace{\\pi r^2}_{\\text{base}} + \\underbrace{\\pi r \\ell}_{\\text{lateral}}$$

> 🔑 **$r$, $h$, $\\ell$ form a right triangle.** The radius and vertical height are the legs; the slant height is the hypotenuse: $\\ell^2 = r^2 + h^2$.`,
      },
      {
        id: 'savs2-slant-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A cone has radius $r = 6$ and vertical height $h = 8$. What is its slant height $\\ell$?',
              options: ['$10$', '$14$', '$\\sqrt{14}$', '$48$'],
              correctAnswer: 0,
              explanation: '$\\ell = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is the classic $6$-$8$-$10$ right triangle.)',
            },
            {
              question: 'Which height does the volume formula $V = \\frac{1}{3}\\pi r^2 h$ require?',
              options: ['The vertical height', 'The slant height', 'The radius', 'The circumference'],
              correctAnswer: 0,
              explanation: 'Volume uses the **vertical (perpendicular) height** $h$. The slant height $\\ell$ is only used for the *lateral surface area*, not the volume.',
            },
          ],
        },
      },
      {
        id: 'savs2-cone-worked',
        type: 'text' as const,
        content: `## Full Worked Cone — $r = 6$, $h = 8$

**Step 1 — slant height.**
$$\\ell = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$

**Step 2 — volume.**
$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (36)(8) = \\frac{288}{3}\\pi = 96\\pi\\text{ units}^3$$

**Step 3 — surface area.**
$$SA = \\pi r^2 + \\pi r \\ell = \\pi(36) + \\pi(6)(10) = 36\\pi + 60\\pi = 96\\pi\\text{ units}^2$$

> 💡 It's a coincidence that this cone's $V$ and $SA$ are both $96\\pi$ — they measure totally different things (one in cubic units, one in square). Always track your units.`,
      },
      {
        id: 'savs2-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

**1)** Square pyramid, base side $3$, height $9$: volume $= \\,?$ (cubic units)
**2)** Cone with $r = 5$, $h = 12$: slant height $\\ell = \\,?$
**3)** Cone with $r = 3$, $h = 4$: volume $= \\,? \\pi$ (enter the coefficient)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['27', '13', '12'],
          hint1: '$V = \\frac{1}{3}Bh = \\frac{1}{3}(3^2)(9) = \\frac{1}{3}(9)(9) = 27$.',
          hint2: '$\\ell = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ (a $5$-$12$-$13$ triangle).',
          hint3: '$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(4) = \\frac{36}{3}\\pi = 12\\pi$.',
          explanation: '1) $\\frac{1}{3}(9)(9) = 27$.  2) $\\sqrt{169} = 13$.  3) $\\frac{1}{3}\\pi(9)(4) = 12\\pi$.',
        },
      },
      {
        id: 'savs2-formula-recap',
        type: 'text' as const,
        content: `## Quick Recap Before You Move On

The pyramid/cone family comes down to three ideas:

| Need | Use |
|------|-----|
| Volume | $\\frac{1}{3}Bh$ (with the **vertical** height $h$) |
| Slant height | $\\ell = \\sqrt{r^2 + h^2}$ |
| Cone surface area | $\\pi r^2 + \\pi r \\ell$ |

> 🔑 The factor of $\\frac{1}{3}$ and the right triangle $r$-$h$-$\\ell$ are the two things that separate these solids from prisms and cylinders. Lock them in before the next check.`,
      },
      {
        id: 'savs2-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Formula** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Volume of any pyramid or cone:', options: ['$\\frac{1}{3}Bh$', '$Bh$', '$\\frac{1}{2}Bh$', '$2Bh$'] },
            { label: 'Slant height of a cone:', options: ['$\\sqrt{r^2 + h^2}$', '$\\sqrt{r^2 - h^2}$', '$r + h$', '$rh$'] },
            { label: 'Lateral surface area of a cone:', options: ['$\\pi r \\ell$', '$\\pi r^2$', '$2\\pi r h$', '$\\frac{1}{3}\\pi r^2 h$'] },
          ],
          correctAnswers: ['$\\frac{1}{3}Bh$', '$\\sqrt{r^2 + h^2}$', '$\\pi r \\ell$'],
          hint1: 'A pyramid/cone is one-third of the matching prism/cylinder.',
          hint2: '$r$ and $h$ are legs; $\\ell$ is the hypotenuse, so $\\ell = \\sqrt{r^2+h^2}$.',
          hint3: 'The curved (lateral) face of a cone has area $\\pi r \\ell$; adding the base $\\pi r^2$ gives the total.',
          explanation: 'Volume $= \\frac{1}{3}Bh$, slant height $\\ell = \\sqrt{r^2+h^2}$, lateral area $= \\pi r \\ell$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-solids-geo',
    sections: [
      {
        id: 'savs3-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area & Volume of Solids

**Part 3 of 5 — Spheres**

---

> 🔑 **Two formulas, one radius:** A sphere is defined entirely by its radius $r$. Memorize the pair — $V = \\frac{4}{3}\\pi r^3$ and $SA = 4\\pi r^2$ — and every sphere problem becomes plug-and-chug.`,
      },
      {
        id: 'savs3-formulas',
        type: 'text' as const,
        content: `## The Two Sphere Formulas

$$V = \\frac{4}{3}\\pi r^3 \\qquad\\qquad SA = 4\\pi r^2$$

Notice the exponents: **volume** uses $r^3$ (it's 3-D space), and **surface area** uses $r^2$ (it's a 2-D skin). That pattern holds for *every* solid.

| Quantity | Formula | Why the exponent |
|----------|---------|------------------|
| Volume | $\\frac{4}{3}\\pi r^3$ | space → cube of a length |
| Surface area | $4\\pi r^2$ | skin → square of a length |

### Example: $r = 3$

$$V = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi (27) = 36\\pi\\text{ units}^3$$

$$SA = 4\\pi (3)^2 = 4\\pi(9) = 36\\pi\\text{ units}^2$$

> ⚠️ **Order of operations:** cube (or square) the radius **before** multiplying by the other factors. $(3)^3 = 27$, not $3 \\times 3 = 9$.`,
      },
      {
        id: 'savs3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The surface area of a sphere is $SA = 4\\pi r^2$. For $r = 5$, $SA = $',
              options: ['$100\\pi$', '$20\\pi$', '$25\\pi$', '$500\\pi$'],
              correctAnswer: 0,
              explanation: '$SA = 4\\pi(5)^2 = 4\\pi(25) = 100\\pi$. Square the $5$ first, then multiply by $4\\pi$.',
            },
            {
              question: 'Which formula gives the volume of a sphere?',
              options: ['$\\frac{4}{3}\\pi r^3$', '$4\\pi r^2$', '$\\frac{1}{3}\\pi r^2 h$', '$\\pi r^2 h$'],
              correctAnswer: 0,
              explanation: 'Volume of a sphere is $\\frac{4}{3}\\pi r^3$. The $4\\pi r^2$ is its *surface area*; the others belong to cones and cylinders.',
            },
          ],
        },
      },
      {
        id: 'savs3-half',
        type: 'text' as const,
        content: `## Hemispheres — Don't Forget the Flat Circle

A **hemisphere** is half a sphere. The volume is simply half:

$$V_{\\text{hemi}} = \\frac{1}{2}\\cdot \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$$

But the **surface area** is *not* just half. Cutting a sphere exposes a **flat circular face** of area $\\pi r^2$. So:

$$SA_{\\text{hemi}} = \\underbrace{\\frac{1}{2}(4\\pi r^2)}_{\\text{curved dome}} + \\underbrace{\\pi r^2}_{\\text{flat base}} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$$

> ⚠️ **The most common hemisphere mistake** is forgetting the flat circle. Half the *curved* skin is $2\\pi r^2$; add the $\\pi r^2$ disk to get $3\\pi r^2$.`,
      },
      {
        id: 'savs3-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

Enter each answer as the **coefficient** of $\\pi$.

**1)** Sphere $r = 2$: volume $= \\,? \\pi$
**2)** Sphere $r = 4$: surface area $= \\,? \\pi$
**3)** Hemisphere $r = 3$: total surface area $= \\,? \\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['32/3', '64', '27'],
          hint1: '$V = \\frac{4}{3}\\pi(2)^3 = \\frac{4}{3}\\pi(8) = \\frac{32}{3}\\pi$. Enter $32/3$.',
          hint2: '$SA = 4\\pi(4)^2 = 4\\pi(16) = 64\\pi$.',
          hint3: '$SA_{\\text{hemi}} = 3\\pi r^2 = 3\\pi(9) = 27\\pi$ (curved $2\\pi r^2$ plus flat $\\pi r^2$).',
          explanation: '1) $\\frac{4}{3}(8) = \\frac{32}{3}$.  2) $4(16) = 64$.  3) $3(9) = 27$.',
        },
      },
      {
        id: 'savs3-exponent-text',
        type: 'text' as const,
        content: `## The Exponent Tells You Which Is Which

Look at the two sphere formulas side by side and the pattern jumps out:

$$\\underbrace{\\tfrac{4}{3}\\pi r^3}_{\\text{volume} \\,\\to\\, r^3} \\qquad \\underbrace{4\\pi r^2}_{\\text{surface} \\,\\to\\, r^2}$$

If you ever blank on which formula is which, ask: *am I filling space (cube, $r^3$) or covering a skin (square, $r^2$)?* The exponent and the units always agree.

> 💡 This same logic flags a wrong answer instantly: a surface area should never contain $r^3$, and a volume should never stop at $r^2$.`,
      },
      {
        id: 'savs3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sphere Sense** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Volume of a sphere uses the radius to the power:', options: ['$3$', '$2$', '$1$', '$\\frac{1}{2}$'] },
            { label: 'Surface area of a sphere is:', options: ['$4\\pi r^2$', '$\\frac{4}{3}\\pi r^3$', '$2\\pi r^2$', '$\\pi r^2$'] },
            { label: 'A hemisphere\'s total surface area is:', options: ['$3\\pi r^2$', '$2\\pi r^2$', '$4\\pi r^2$', '$\\pi r^2$'] },
          ],
          correctAnswers: ['$3$', '$4\\pi r^2$', '$3\\pi r^2$'],
          hint1: 'Volume is 3-D, so the radius is cubed (power $3$).',
          hint2: 'The full sphere skin is $4\\pi r^2$ (square of the radius).',
          hint3: 'Half the curved skin ($2\\pi r^2$) plus the flat cut circle ($\\pi r^2$) is $3\\pi r^2$.',
          explanation: 'Volume → $r^3$; full sphere $SA = 4\\pi r^2$; hemisphere $SA = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-solids-geo',
    sections: [
      {
        id: 'savs4-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area & Volume of Solids

**Part 4 of 5 — Composite Solids & Real-World Problems**

---

> 🔑 **Divide and conquer:** Real objects (a silo, an ice-cream cone, a capsule) are built from the basic solids you already know. **Break the shape into pieces, compute each, then add (or subtract).**`,
      },
      {
        id: 'savs4-composite',
        type: 'text' as const,
        content: `## Composite Volumes — Add the Pieces

A **silo** is a cylinder topped by a hemisphere. Find each volume and add.

### Example: cylinder $r = 3$, $h = 10$, capped by a hemisphere of $r = 3$

**Cylinder:** $V = \\pi r^2 h = \\pi(9)(10) = 90\\pi$

**Hemisphere:** $V = \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi(27) = 18\\pi$

**Total:** $90\\pi + 18\\pi = 108\\pi \\approx 339.3\\text{ units}^3$

> 💡 When pieces are **stacked or joined**, *add* their volumes. When a piece is **drilled out or removed** (a hole), *subtract* it.`,
      },
      {
        id: 'savs4-surface-warning',
        type: 'text' as const,
        content: `## Composite Surface Area — Hide the Joined Faces

Surface area of a composite is trickier than volume: where two pieces **meet, those faces are hidden** and must **not** be counted.

For the silo above, the circle where the hemisphere sits on the cylinder is *internal* — skip both that top cylinder circle **and** the hemisphere's flat face. The exposed skin is:

- Cylinder bottom circle: $\\pi r^2 = 9\\pi$
- Cylinder curved side: $2\\pi r h = 2\\pi(3)(10) = 60\\pi$
- Hemisphere dome (curved only): $2\\pi r^2 = 18\\pi$

$$SA = 9\\pi + 60\\pi + 18\\pi = 87\\pi\\text{ units}^2$$

> ⚠️ **Don't count covered faces.** The flat circle where two solids join is sealed inside — leaving it in is the most common composite-surface-area error.`,
      },
      {
        id: 'savs4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To find the volume of a cylinder with a hemisphere drilled out of the top, you should:',
              options: ['Subtract the hemisphere volume from the cylinder volume', 'Add the two volumes', 'Multiply the two volumes', 'Take the average of the two volumes'],
              correctAnswer: 0,
              explanation: 'A drilled-out (removed) piece is **subtracted**. Pieces that are joined on are added; pieces removed are taken away.',
            },
            {
              question: 'When two solids are joined, the faces where they touch should be:',
              options: ['Left out of the surface area', 'Counted twice', 'Counted once', 'Multiplied together'],
              correctAnswer: 0,
              explanation: 'Joined faces are **internal** — they are not part of the exposed outer skin, so they are left out of the surface-area total.',
            },
          ],
        },
      },
      {
        id: 'savs4-realworld',
        type: 'text' as const,
        content: `## Real-World Application — Filling a Tank

A cylindrical water tank has radius $2\\text{ m}$ and height $5\\text{ m}$. How many cubic meters of water does it hold (full)?

$$V = \\pi r^2 h = \\pi(2)^2(5) = 20\\pi \\approx 62.8\\text{ m}^3$$

Now suppose water costs a flat rate and the tank is filled to the brim. The **volume** $20\\pi\\text{ m}^3$ is what you'd multiply by the per-cubic-meter price. (For example, at \\$0.50 per $\\text{m}^3$ that's about \\$31.40.)

> 💡 **Read the question.** "How much fills it?" → **volume**. "How much paint/wrap/material covers it?" → **surface area**. The word problem tells you which one.`,
      },
      {
        id: 'savs4-keyword-dropdown',
        type: 'dropdown-select' as const,
        content: `**Volume or Surface Area?** 🔽

For each task, decide which quantity you need.`,
        exercise: {
          dropdowns: [
            { label: 'How much soup fills a can:', options: ['Volume', 'Surface area', 'Slant height', 'Perimeter'] },
            { label: 'How much label paper wraps a can:', options: ['Surface area', 'Volume', 'Radius', 'Height'] },
            { label: 'Joining a cone onto a cylinder — the touching circle is:', options: ['Hidden (not counted)', 'Counted twice', 'Added to volume twice', 'A new base'] },
          ],
          correctAnswers: ['Volume', 'Surface area', 'Hidden (not counted)'],
          hint1: '"Fills" or "holds" → the space inside → volume.',
          hint2: '"Covers," "wraps," or "paints" → the outer skin → surface area.',
          hint3: 'Where two solids meet, those faces are internal, so they are left out of surface area.',
          explanation: 'Filling → volume; covering → surface area; joined faces are interior and not counted in surface area.',
        },
      },
      {
        id: 'savs4-strategy-text',
        type: 'text' as const,
        content: `## A Reliable 3-Step Strategy

For any composite solid, work it the same way every time:

1. **Decompose** — sketch the solid and name each basic piece (cylinder, hemisphere, cone, prism…).
2. **Compute each piece** with its own formula, keeping $\\pi$ exact.
3. **Combine** — *add* joined pieces, *subtract* removed pieces; for surface area, **drop every hidden interior face**.

> 🔑 The math of each piece is the easy part — you already know it. The points are won or lost in step 3: adding vs. subtracting, and not counting covered faces.`,
      },
      {
        id: 'savs4-drill',
        type: 'input-boxes' as const,
        content: `**Composite Practice** 🧮

Enter each answer as the **coefficient** of $\\pi$.

**1)** Cylinder ($r=2$, $h=6$) topped by a hemisphere ($r=2$): total **volume** $= \\,? \\pi$
**2)** A cube of side $4$ has a cylindrical hole ($r=1$, $h=4$) drilled through it. The **remaining volume** is $64 - \\,? \\pi$ (enter the coefficient subtracted)
**3)** Cone ($r=3$, $h=4$, so $\\ell = 5$) on top of a cylinder ($r=3$, $h=6$): the joined circle that is **hidden** has area $\\,? \\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['88/3', '4', '9'],
          hint1: 'Cylinder $= \\pi(4)(6) = 24\\pi$; hemisphere $= \\frac{2}{3}\\pi(8) = \\frac{16}{3}\\pi$. Total $= 24\\pi + \\frac{16}{3}\\pi = \\frac{72}{3}\\pi + \\frac{16}{3}\\pi = \\frac{88}{3}\\pi$.',
          hint2: 'Hole volume $= \\pi r^2 h = \\pi(1)^2(4) = 4\\pi$, so the remaining volume is $64 - 4\\pi$.',
          hint3: 'The hidden circle is the shared base of radius $3$: area $= \\pi r^2 = 9\\pi$.',
          explanation: '1) $24\\pi + \\frac{16}{3}\\pi = \\frac{88}{3}\\pi$.  2) drilled hole $= 4\\pi$.  3) shared circle $= 9\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-solids-geo',
    sections: [
      {
        id: 'savs5-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area & Volume of Solids

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now find the volume and surface area of **prisms, cylinders, pyramids, cones, and spheres**, and combine them for composite real-world solids. Let's put it all together.`,
      },
      {
        id: 'savs5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Solid | Volume | Surface Area |
|-------|--------|--------------|
| Prism | $Bh$ | sum of all faces (net) |
| Cylinder | $\\pi r^2 h$ | $2\\pi r^2 + 2\\pi r h$ |
| Pyramid | $\\frac{1}{3}Bh$ | base $+ \\frac{1}{2}(\\text{perimeter})(\\text{slant})$ |
| Cone | $\\frac{1}{3}\\pi r^2 h$ | $\\pi r^2 + \\pi r \\ell$ |
| Sphere | $\\frac{4}{3}\\pi r^3$ | $4\\pi r^2$ |

> 🔑 **Three habits that prevent errors:**
> 1. **Volume → cubic units; surface area → square units.** Always.
> 2. For cones, **slant height $\\ell = \\sqrt{r^2 + h^2}$** — use $h$ for volume, $\\ell$ for surface area.
> 3. For **composites**, add joined pieces, subtract removed ones, and never count hidden (interior) faces.`,
      },
      {
        id: 'savs5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A cylinder has $r = 5$ and $h = 4$. Its volume is:',
              options: ['$100\\pi$', '$40\\pi$', '$20\\pi$', '$90\\pi$'],
              correctAnswer: 0,
              explanation: '$V = \\pi r^2 h = \\pi(5)^2(4) = \\pi(25)(4) = 100\\pi$.',
            },
            {
              question: 'A cone has $r = 8$ and slant height $\\ell = 10$. Its lateral (curved) surface area is:',
              options: ['$80\\pi$', '$64\\pi$', '$144\\pi$', '$40\\pi$'],
              correctAnswer: 0,
              explanation: 'Lateral surface area $= \\pi r \\ell = \\pi(8)(10) = 80\\pi$. (The base $\\pi r^2 = 64\\pi$ would be added for the *total*.)',
            },
          ],
        },
      },
      {
        id: 'savs5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Move** 🔽

A grain silo is a cylinder ($r=4$, $h=12$) with a cone roof ($r=4$, $h=3$). You want the **volume of grain it holds**.`,
        exercise: {
          dropdowns: [
            { label: 'Volume of the cylinder body:', options: ['$192\\pi$', '$48\\pi$', '$96\\pi$', '$144\\pi$'] },
            { label: 'Volume of the cone roof:', options: ['$16\\pi$', '$48\\pi$', '$16\\pi/3$', '$24\\pi$'] },
            { label: 'Total grain volume:', options: ['$208\\pi$', '$240\\pi$', '$192\\pi$', '$176\\pi$'] },
          ],
          correctAnswers: ['$192\\pi$', '$16\\pi$', '$208\\pi$'],
          hint1: 'Cylinder $V = \\pi r^2 h = \\pi(16)(12) = 192\\pi$.',
          hint2: 'Cone $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(16)(3) = \\frac{48}{3}\\pi = 16\\pi$.',
          hint3: 'Add the joined pieces: $192\\pi + 16\\pi = 208\\pi$.',
          explanation: 'Cylinder $192\\pi$ plus cone $16\\pi$ gives a total of $208\\pi$ cubic units.',
        },
      },
      {
        id: 'savs5-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

**1)** Triangular prism: base triangle area $B = 12$, height (length) $h = 7$. Volume $= \\,?$
**2)** Sphere $r = 6$: volume $= \\,? \\pi$ (enter the coefficient)
**3)** Cone $r = 9$, $h = 12$: slant height $\\ell = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['84', '288', '15'],
          hint1: '$V = Bh = 12 \\cdot 7 = 84$.',
          hint2: '$V = \\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216) = 288\\pi$.',
          hint3: '$\\ell = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ (a $9$-$12$-$15$ triangle).',
          explanation: '1) $12 \\cdot 7 = 84$.  2) $\\frac{4}{3}(216) = 288$.  3) $\\sqrt{225} = 15$.',
        },
      },
      {
        id: 'savs5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A rectangular prism is $2 \\times 3 \\times 4$. What is its surface area?',
              options: ['$52$', '$24$', '$26$', '$48$'],
              correctAnswer: 0,
              explanation: '$SA = 2(\\ell w + \\ell h + wh) = 2(2\\cdot 3 + 2\\cdot 4 + 3\\cdot 4) = 2(6 + 8 + 12) = 2(26) = 52$.',
            },
            {
              question: 'A cone has radius $3$ and vertical height $4$. What is its **volume**?',
              options: ['$12\\pi$', '$15\\pi$', '$36\\pi$', '$48\\pi$'],
              correctAnswer: 0,
              explanation: '$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(4) = \\frac{36}{3}\\pi = 12\\pi$. (The slant height $5$ is not used for volume.)',
            },
            {
              question: 'Which statement is correct?',
              options: ['Volume uses cubic units; surface area uses square units', 'Both use square units', 'Volume uses square units; surface area uses cubic units', 'Both use linear units'],
              correctAnswer: 0,
              explanation: 'Volume fills 3-D space → **cubic** units. Surface area covers a 2-D skin → **square** units. Keeping them straight prevents most careless errors.',
            },
          ],
        },
      },
    ],
  },
]
