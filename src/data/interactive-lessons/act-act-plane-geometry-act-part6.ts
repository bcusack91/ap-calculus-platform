export const actPlaneGeomPart6Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg6-intro',
      type: 'text' as const,
      content: `
# 🔍 Similar Triangles & 3-D Solids

**Part 6 of 7 — Proportional Figures, Volume, and Surface Area**

## Similar Triangles

Two triangles are **similar** when they have the same shape: all corresponding angles are equal and all corresponding sides are in the same ratio $k$ (the **scale factor**).

**AA similarity:** If two angles of one triangle equal two angles of another, the triangles are similar. (The third angles must then match, since each triangle totals 180°.) You never need to check the sides to prove similarity on the ACT; you need two matching angles.

**Where similar triangles hide:**

| Setup | Why the angles match |
|-------|----------------------|
| A segment inside a triangle **parallel to one side** | shared vertex angle + corresponding angles from the parallel lines |
| **Shadows** (a person and a tree at the same time of day) | both make a right angle with the ground; the sun's angle is the same |
| An "hourglass": two segments crossing, with the end segments parallel | vertical angles + alternate interior angles |
| The altitude to the hypotenuse of a right triangle | each smaller triangle shares an acute angle with the big one |

**Setting up the proportion.** Match sides by the angles they are opposite, then write

$$\\frac{\\text{small side}}{\\text{matching big side}} = \\frac{\\text{other small side}}{\\text{its matching big side}}$$

**Nested-triangle trap:** In triangle ABC with DE parallel to BC (D on AB, E on AC), the small triangle is ADE and the big one is ABC. Compare AD to the **whole side AB**, not to the leftover piece DB. With AD = 4, DB = 6, and DE = 5: AB = 10, so $\\frac{4}{10} = \\frac{5}{BC}$ and BC = 12.5.

**Congruent triangles** are similar with $k = 1$ (same shape and same size). The ACT sometimes uses the congruence shortcuts SSS, SAS, ASA, and AAS to justify that two lengths or angles are equal.

## Scale Factor Rules

If two similar figures have length ratio $k$:

| Measure | Ratio |
|---------|-------|
| Any length (side, perimeter, height) | $k$ |
| Area (including surface area) | $k^2$ |
| Volume | $k^3$ |

Similar triangles with sides in ratio $2 : 5$ have areas in ratio $4 : 25$. Similar solids with lengths in ratio $2 : 3$ have volumes in ratio $8 : 27$.

## Volume and Surface Area

**Volume** is the space inside (cubic units). **Surface area** is the total area of all the outside faces (square units).

| Solid | Volume | Surface area |
|-------|--------|--------------|
| Rectangular prism (box) | $V = lwh$ | $2(lw + lh + wh)$ |
| Cube | $V = s^3$ | $6s^2$ |
| Any right prism | $V = Bh$ ($B$ = area of the base) | 2 bases + rectangular sides |
| Cylinder | $V = \\pi r^2 h$ | $2\\pi r^2 + 2\\pi r h$ |
| Cone | $V = \\frac{1}{3}\\pi r^2 h$ | usually given if needed |
| Pyramid | $V = \\frac{1}{3}Bh$ | sum of faces |
| Sphere | $V = \\frac{4}{3}\\pi r^3$ | $4\\pi r^2$ |

**What to memorize:** box, cube, prism, and cylinder formulas. The ACT has no formula sheet, but when a question needs the cone, pyramid, or sphere formula, it typically states the formula in the question. Your job is to plug in correctly: use the **radius** (not the diameter), **square** or **cube** it before multiplying, and keep the $\\frac{1}{3}$ or $\\frac{4}{3}$.

**Prism idea:** Every prism and cylinder is "base area × height." A cylinder is a prism with a circular base, so $V = (\\pi r^2) h$.

**Displacement:** When an object is fully submerged in a tank, the volume of the object equals the volume of the water rise (base of the tank × rise in height).

**Cubic units:** 1 cu ft = $12^3$ = 1,728 cu in.
      `
    },
    {
      id: 'act-pg6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A shadow problem</b></summary>

A 6-foot person casts a 4-foot shadow at the same time a tree casts a 30-foot shadow. How tall is the tree?

1. Person and tree each make a right angle with the ground, and the sun's angle is the same, so the triangles are similar (AA).
2. $\\frac{\\text{height}}{\\text{shadow}}$: $\\frac{6}{4} = \\frac{h}{30}$.
3. $h = 45$ feet.
</details>

<details>
<summary><b>Example 2: Cylinder volume and surface area</b></summary>

A cylinder has radius 3 and height 10. Find its volume and total surface area.

1. Volume $= \\pi(3^2)(10) = 90\\pi$.
2. Two circular ends: $2\\pi(9) = 18\\pi$. Curved side (unrolls to a rectangle with width $2\\pi r$ and height $h$): $2\\pi(3)(10) = 60\\pi$.
3. Surface area $= 78\\pi$.
</details>
      `
    },
    {
      id: 'act-pg6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Similar Triangles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In triangle ABC, point D is on AB and point E is on AC so that DE is parallel to BC. If AD = 3, AB = 9, and BC = 15, what is the length of DE?',
            options: ['5', '7.5', '10', '45'],
            correctAnswer: 0,
            explanation: `Triangle ADE is similar to triangle ABC with scale factor $\\frac{AD}{AB} = \\frac{3}{9} = \\frac{1}{3}$, so DE $= \\frac{1}{3}(15) = 5$. Comparing AD to the piece DB (3 to 6) gives 7.5, and comparing DB to AB gives 10; both use the wrong pair of segments. Multiplying 15 by 3 instead of dividing gives 45, longer than BC itself.`
          },
          {
            question: 'At the same time of day, a 5-foot student casts an 8-foot shadow and a flagpole casts a 24-foot shadow. How tall is the flagpole?',
            options: ['15 feet', '21 feet', '38.4 feet', '120 feet'],
            correctAnswer: 0,
            explanation: `The triangles are similar, so $\\frac{5}{8} = \\frac{h}{24}$ and $h = 15$ feet. Flipping one ratio ($\\frac{8}{5} = \\frac{h}{24}$) gives 38.4. The value 21 subtracts the difference $8 - 5 = 3$ from 24, which treats the relationship as additive instead of proportional, and 120 multiplies 24 by 5 without dividing by 8.`
          },
          {
            question: 'Two similar triangles have corresponding sides in the ratio $2 : 5$. The area of the smaller triangle is 12. What is the area of the larger triangle?',
            options: ['30', '48', '75', '187.5'],
            correctAnswer: 2,
            explanation: `Areas scale by the square of the length ratio: $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$, so the larger area is $12 \\times \\frac{25}{4} = 75$. Multiplying by $\\frac{5}{2}$ treats area like length and gives 30. Multiplying by 4 squares only the 2 and gives 48. Cubing the ratio gives 187.5, the rule for volumes.`
          },
          {
            question: 'Which of the following conditions guarantees that two triangles are similar?',
            options: [
              'Both triangles have a side of length 6.',
              'One angle of each triangle measures 50°.',
              'Two angles of one equal two angles of the other.',
              'Both triangles have the same perimeter.'
            ],
            correctAnswer: 2,
            explanation: `Two pairs of equal angles force the third pair to be equal too (all three sum to 180°), so the triangles have the same shape: AA similarity. One shared angle is not enough, since the other angles can differ. A single equal side or an equal perimeter says nothing about the angles, so the shapes can still be different.`
          }
        ]
      }
    },
    {
      id: 'act-pg6-input1',
      type: 'input-boxes' as const,
      content: `
**Volume and Surface Area** 🧮

1) A box measures 4 by 5 by 6. Type its volume.

2) A cube has edges of length 3. Type its total surface area.

3) A cylinder has radius 2 and height 5. Its volume is $k\\pi$. Type $k$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '54', '20'],
        hint1: '$V = lwh$.',
        hint2: 'A cube has 6 square faces.',
        hint3: '$V = \\pi r^2 h$; square the radius first.',
        explanation: '1) $4 \\times 5 \\times 6 = 120$. 2) $6 \\times 3^2 = 54$. 3) $\\pi(2^2)(5) = 20\\pi$.'
      }
    },
    {
      id: 'act-pg6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Similar triangles: sides 4, 6, 8 and the shortest side of the larger is 10. Its longest side? | $k = 2.5$, so 20 |
| 2 | A box is 2 by 3 by 4. Surface area? | $2(6 + 8 + 12) = 52$ |
| 3 | A cube has volume 64. Surface area? | edge 4, $6 \\times 16 = 96$ |
| 4 | Two similar boxes have heights 3 and 6. Volume ratio? | $1 : 8$ |

**ACT Tip:** Before computing a volume, check the units in the question and the answer choices. If dimensions are in feet and the answer is in cubic inches, convert each length to inches first.
      `
    },
    {
      id: 'act-pg6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$. What is the volume of a cone with radius 3 and height 8?',
            options: ['$8\\pi$', '$24\\pi$', '$72\\pi$', '$96\\pi$'],
            correctAnswer: 1,
            explanation: `$V = \\frac{1}{3}\\pi(3^2)(8) = \\frac{1}{3}(72\\pi) = 24\\pi$. Leaving out the $\\frac{1}{3}$ gives $72\\pi$, the volume of the matching cylinder. Using $r$ instead of $r^2$ gives $8\\pi$. Using the diameter 6 as the radius gives $\\frac{1}{3}\\pi(36)(8) = 96\\pi$.`
          },
          {
            question: 'A sphere has a surface area of $36\\pi$ square units. Given $S = 4\\pi r^2$ and $V = \\frac{4}{3}\\pi r^3$, what is the volume of the sphere?',
            options: ['$972\\pi$', '$36\\pi$', '$108\\pi$', '$288\\pi$'],
            correctAnswer: 1,
            explanation: `From $4\\pi r^2 = 36\\pi$, $r^2 = 9$ and $r = 3$, so $V = \\frac{4}{3}\\pi(27) = 36\\pi$. Treating 9 as the radius instead of $r^2$ gives $\\frac{4}{3}\\pi(729) = 972\\pi$. Using 4 in place of $\\frac{4}{3}$ gives $108\\pi$. Mistaking 6 for the radius (from $r^2 = 36$) gives $288\\pi$.`
          },
          {
            question: 'Two cylinders are similar, and the ratio of their radii is $2 : 3$. The smaller cylinder has a volume of 16 cubic inches. What is the volume of the larger cylinder, in cubic inches?',
            options: ['24', '36', '54', '128'],
            correctAnswer: 2,
            explanation: `For similar solids, volumes scale by the cube of the length ratio: $\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$, so the larger volume is $16 \\times \\frac{27}{8} = 54$. Multiplying by $\\frac{3}{2}$ gives 24 (the length rule), and by $\\frac{9}{4}$ gives 36 (the area rule). Multiplying by $2^3 = 8$ alone gives 128, which cubes the wrong number.`
          },
          {
            question: 'A rectangular tank is 50 centimeters long and 40 centimeters wide and holds water 30 centimeters deep. When a rock is fully submerged, the water rises to 32 centimeters. What is the volume of the rock, in cubic centimeters?',
            options: ['180', '4,000', '60,000', '64,000'],
            correctAnswer: 1,
            explanation: `The rock's volume equals the volume of the water rise: $50 \\times 40 \\times 2 = 4{,}000$ cubic centimeters. The value 60,000 is the original water, and 64,000 is the water plus the rock together. Adding the length and width and multiplying by 2 gives 180, which does not compute a volume.`
          }
        ]
      }
    },
    {
      id: 'act-pg6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Similar triangles:** equal angles, proportional sides. Two equal angles (**AA**) are enough.
- Look for similarity in parallel segments inside a triangle, shadows, hourglass figures, and altitudes to a hypotenuse.
- In nested triangles, compare the small side to the **whole** big side, not the leftover piece.
- Scale factor $k$: lengths × $k$, areas × $k^2$, volumes × $k^3$.
- Memorize box $lwh$, cube $s^3$, prism $Bh$, and cylinder $\\pi r^2 h$; cone, pyramid, and sphere formulas are usually given, so plug in carefully.
- Surface area = sum of all face areas; a cylinder's side unrolls into a $2\\pi r$-by-$h$ rectangle.
- A submerged object's volume = tank base area × water rise.
      `
    }
  ]
}
