#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Circles & Trig.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-circles-trig-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-circles-trig-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Circle Basics ───────────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satCirclesTrigPart1Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct1-intro',
      type: 'text' as const,
      content: `
# ⭕ Circle Basics

**Part 1 of 7 — Circumference, Area, Arc Length & Sector Area**

Circles appear in **many** SAT math questions. Memorise these four core formulas and you'll handle most of them:

| Quantity | Formula |
|----------|---------|
| Circumference | $C = 2\\\\pi r$ |
| Area | $A = \\\\pi r^2$ |
| Arc length | $s = \\\\frac{\\\\theta}{360°}\\\\cdot 2\\\\pi r$ |
| Sector area | $A_{\\\\text{sector}} = \\\\frac{\\\\theta}{360°}\\\\cdot \\\\pi r^2$ |

Here $r$ is the radius and $\\\\theta$ is the central angle in degrees.

**Key relationships:**
- The **diameter** $d = 2r$.
- $C = \\\\pi d$ is equivalent to $C = 2\\\\pi r$.
- Arc length is simply a *fraction* of the full circumference.
- Sector area is the same fraction of the full area.
      `
    },
    {
      id: 'sat-ct1-circarea',
      type: 'text' as const,
      content: `
## Circumference & Area — Worked Examples

**Example 1 — Circumference:** A circle has a radius of 7 cm. Find its circumference.

$$C = 2\\\\pi r = 2\\\\pi(7) = 14\\\\pi \\\\approx 43.98 \\\\text{ cm}$$

**Example 2 — Area:** A circle has a diameter of 10 in. Find its area.

$$r = \\\\frac{d}{2} = 5 \\\\implies A = \\\\pi(5)^2 = 25\\\\pi \\\\approx 78.54 \\\\text{ in}^2$$

**Example 3 — From circumference to radius:** A circle has circumference $20\\\\pi$. What is its area?

$$C = 2\\\\pi r \\\\implies 20\\\\pi = 2\\\\pi r \\\\implies r = 10$$

$$A = \\\\pi(10)^2 = 100\\\\pi$$

**SAT Tip:** Many SAT answers stay in terms of $\\\\pi$ — don't convert to a decimal unless the answer choices are decimals.
      `
    },
    {
      id: 'sat-ct1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Circumference & Area** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A circle has a radius of 6. What is its area?',
            options: ['$6\\\\pi$', '$12\\\\pi$', '$36\\\\pi$', '$144\\\\pi$'],
            correctAnswer: 2,
            explanation: '$A = \\\\pi r^2 = \\\\pi(6)^2 = 36\\\\pi$.'
          },
          {
            question: 'The circumference of a circle is $18\\\\pi$. What is the diameter?',
            options: ['$9$', '$18$', '$36$', '$9\\\\pi$'],
            correctAnswer: 1,
            explanation: '$C = \\\\pi d \\\\implies 18\\\\pi = \\\\pi d \\\\implies d = 18$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct1-arcsec',
      type: 'text' as const,
      content: `
## Arc Length & Sector Area

An **arc** is a portion of the circumference. A **sector** is the "pie-slice" region bounded by two radii and an arc.

Both use the same fraction: $\\\\frac{\\\\theta}{360°}$.

**Example 4 — Arc Length:** A circle has $r = 12$ and a central angle of $60°$. Find the arc length.

$$s = \\\\frac{60}{360}\\\\cdot 2\\\\pi(12) = \\\\frac{1}{6}\\\\cdot 24\\\\pi = 4\\\\pi$$

**Example 5 — Sector Area:** Same circle, same angle. Find the sector area.

$$A_{\\\\text{sector}} = \\\\frac{60}{360}\\\\cdot \\\\pi(12)^2 = \\\\frac{1}{6}\\\\cdot 144\\\\pi = 24\\\\pi$$

---

**Radian version (reference):**

When the angle is in **radians**:

$$s = r\\\\theta \\\\qquad A_{\\\\text{sector}} = \\\\frac{1}{2}r^2\\\\theta$$

You'll see radians more in Parts 5–6, but knowing both forms is valuable.
      `
    },
    {
      id: 'sat-ct1-input1',
      type: 'input-boxes' as const,
      content: `
**Arc & Sector Practice** 🧮

All answers should be in terms of $\\\\pi$ (just write the coefficient).

1) A circle has $r = 9$ and a central angle of $120°$. What is the arc length? (answer: coefficient of $\\\\pi$)
2) Same circle and angle — what is the sector area? (coefficient of $\\\\pi$)
3) A circle has $r = 5$ and a $72°$ central angle. What is the arc length? (coefficient of $\\\\pi$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '27', '2'],
        hint1: '$s = \\\\frac{120}{360}\\\\cdot 2\\\\pi(9) = \\\\frac{1}{3}\\\\cdot 18\\\\pi$.',
        hint2: '$A = \\\\frac{120}{360}\\\\cdot \\\\pi(9)^2 = \\\\frac{1}{3}\\\\cdot 81\\\\pi$.',
        hint3: '$s = \\\\frac{72}{360}\\\\cdot 2\\\\pi(5) = \\\\frac{1}{5}\\\\cdot 10\\\\pi$.',
        explanation: '$6\\\\pi$, $27\\\\pi$, and $2\\\\pi$ respectively. Each uses the fraction $\\\\theta / 360$ applied to the full circumference or area.'
      }
    },
    {
      id: 'sat-ct1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Formula Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the distance around a full circle you use …',
            options: ['$A = \\\\pi r^2$', '$C = 2\\\\pi r$', '$s = r\\\\theta$', '$A = \\\\frac{1}{2}bh$']
          },
          {
            label: 'To find the area of a sector with a degree angle you multiply the full area by …',
            options: ['$\\\\theta / 180$', '$\\\\theta / 360$', '$2\\\\theta / 360$', '$\\\\theta / 2\\\\pi$']
          },
          {
            label: 'If the radius doubles, the area is multiplied by …',
            options: ['2', '4', '$\\\\pi$', '8']
          }
        ],
        correctAnswers: ['$C = 2\\\\pi r$', '$\\\\theta / 360$', '4'],
        hint1: 'Distance around = circumference.',
        hint2: 'Sector area = fraction × full area, where the fraction is the central angle over a full revolution.',
        hint3: '$A = \\\\pi(2r)^2 = 4\\\\pi r^2$.',
        explanation: 'Circumference is $C = 2\\\\pi r$. The sector fraction for degree measure is $\\\\theta/360$. Doubling the radius quadruples the area because area depends on $r^2$.'
      }
    },
    {
      id: 'sat-ct1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A circular garden has a circumference of $30\\\\pi$ feet. A gardener wants to plant flowers in a sector with a central angle of $90°$. What is the area of that sector?',
            options: ['$\\\\frac{225\\\\pi}{4}$', '$56.25\\\\pi$', '$\\\\frac{225\\\\pi}{2}$', '$225\\\\pi$'],
            correctAnswer: 1,
            explanation: '$C = 2\\\\pi r = 30\\\\pi \\\\Rightarrow r = 15$. Full area $= \\\\pi(15)^2 = 225\\\\pi$. Sector $= \\\\frac{90}{360}\\\\cdot 225\\\\pi = \\\\frac{225\\\\pi}{4} = 56.25\\\\pi$. Choices A and B are equivalent.'
          },
          {
            question: 'A pizza has a diameter of 16 inches. One slice corresponds to a central angle of $45°$. What is the area of one slice?',
            options: ['$4\\\\pi$', '$8\\\\pi$', '$16\\\\pi$', '$32\\\\pi$'],
            correctAnswer: 1,
            explanation: '$r = 8$, full area $= 64\\\\pi$. Sector $= \\\\frac{45}{360}\\\\cdot 64\\\\pi = \\\\frac{1}{8}\\\\cdot 64\\\\pi = 8\\\\pi$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Circle Equations ────────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satCirclesTrigPart2Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct2-intro',
      type: 'text' as const,
      content: `
# 📐 Circle Equations

**Part 2 of 7 — Standard Form, Identifying Center & Radius, Completing the Square**

The **standard form** of a circle's equation is:

$$(x - h)^2 + (y - k)^2 = r^2$$

- **Center:** $(h, k)$
- **Radius:** $r$

**Example 1:** $(x - 3)^2 + (y + 2)^2 = 25$

- Center $= (3, -2)$ (note the sign flip on $y + 2$, so $k = -2$)
- Radius $= \\\\sqrt{25} = 5$

**Example 2:** $x^2 + y^2 = 49$

- Center $= (0, 0)$
- Radius $= \\\\sqrt{49} = 7$

This circle is centred at the origin.
      `
    },
    {
      id: 'sat-ct2-completing',
      type: 'text' as const,
      content: `
## Completing the Square

The SAT often gives a circle in **general form**:

$$x^2 + y^2 + Dx + Ey + F = 0$$

To convert to standard form, **complete the square** for both $x$ and $y$.

**Example 3:** Rewrite $x^2 + y^2 - 6x + 4y - 12 = 0$ in standard form.

**Step 1:** Group $x$- and $y$-terms:

$$(x^2 - 6x) + (y^2 + 4y) = 12$$

**Step 2:** Complete the square for each group. Take half the linear coefficient and square it.

$$x: \\\\left(\\\\frac{-6}{2}\\\\right)^2 = 9 \\\\qquad y: \\\\left(\\\\frac{4}{2}\\\\right)^2 = 4$$

**Step 3:** Add those values to **both** sides:

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

$$(x - 3)^2 + (y + 2)^2 = 25$$

Center $= (3, -2)$, radius $= 5$. ✓
      `
    },
    {
      id: 'sat-ct2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Identifying Center & Radius** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the center of the circle $(x + 4)^2 + (y - 1)^2 = 16$?',
            options: ['$(4, -1)$', '$(-4, 1)$', '$(-4, -1)$', '$(4, 1)$'],
            correctAnswer: 1,
            explanation: '$(x + 4) = (x - (-4))$, so $h = -4$. $(y - 1)$ gives $k = 1$. Center $= (-4,\\\\; 1)$.'
          },
          {
            question: 'What is the radius of $(x - 5)^2 + (y + 3)^2 = 81$?',
            options: ['$81$', '$9$', '$\\\\sqrt{81}$', '$9$ (choices B and C are the same)'],
            correctAnswer: 1,
            explanation: '$r^2 = 81 \\\\Rightarrow r = 9$. Both B and C evaluate to 9.'
          }
        ]
      }
    },
    {
      id: 'sat-ct2-worked',
      type: 'text' as const,
      content: `
## More Completing-the-Square Practice

**Example 4:** $x^2 + y^2 + 10x - 2y + 17 = 0$

$$(x^2 + 10x) + (y^2 - 2y) = -17$$

$$x: \\\\left(\\\\frac{10}{2}\\\\right)^2 = 25 \\\\qquad y: \\\\left(\\\\frac{-2}{2}\\\\right)^2 = 1$$

$$(x^2 + 10x + 25) + (y^2 - 2y + 1) = -17 + 25 + 1$$

$$(x + 5)^2 + (y - 1)^2 = 9$$

Center $= (-5,\\\\; 1)$, radius $= 3$.

---

**SAT Tip:** If the SAT gives you a circle equation and asks for the radius, look for the right-hand side — that's $r^2$, not $r$. Many students forget to take the square root!
      `
    },
    {
      id: 'sat-ct2-input1',
      type: 'input-boxes' as const,
      content: `
**Completing the Square** 🧮

Rewrite $x^2 + y^2 - 8x + 6y = 0$ in standard form and find:

1) The $x$-coordinate of the center
2) The $y$-coordinate of the center
3) The radius
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '-3', '5'],
        hint1: 'Group: $(x^2 - 8x) + (y^2 + 6y) = 0$. Half of $-8$ is $-4$; square it to get $16$.',
        hint2: 'Half of $6$ is $3$; square it to get $9$. Add $16 + 9$ to the right side.',
        hint3: '$(x - 4)^2 + (y + 3)^2 = 25$. $r = \\\\sqrt{25}$.',
        explanation: '$(x - 4)^2 + (y + 3)^2 = 25$. Center $= (4, -3)$, radius $= 5$.'
      }
    },
    {
      id: 'sat-ct2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Circle Equation Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $(x - h)^2 + (y - k)^2 = r^2$, the value $r^2$ represents the …',
            options: ['radius', 'diameter', 'square of the radius', 'area']
          },
          {
            label: 'To convert from general form to standard form you use …',
            options: ['the quadratic formula', 'completing the square', 'factoring', 'long division']
          },
          {
            label: 'A circle with equation $x^2 + y^2 = 1$ has its center at …',
            options: ['$(1, 1)$', '$(0, 1)$', '$(0, 0)$', '$(1, 0)$']
          }
        ],
        correctAnswers: ['square of the radius', 'completing the square', '$(0, 0)$'],
        hint1: 'The right side is $r^2$, not $r$.',
        hint2: 'You add $(\\\\text{half the coefficient})^2$ to both sides.',
        hint3: 'No numbers are subtracted from $x$ or $y$.',
        explanation: 'The right side equals $r^2$. Completing the square rewrites general form into standard form. $x^2 + y^2 = 1$ means $(x-0)^2 + (y-0)^2 = 1$ — center $(0,0)$.'
      }
    },
    {
      id: 'sat-ct2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The equation $x^2 + y^2 + 12x - 4y + 15 = 0$ represents a circle. What is the radius of this circle?',
            options: ['$\\\\sqrt{15}$', '$\\\\sqrt{24}$', '$5$', '$\\\\sqrt{34}$'],
            correctAnswer: 2,
            explanation: '$(x^2+12x+36)+(y^2-4y+4)=-15+36+4$. $(x+6)^2+(y-2)^2=25$. $r=\\\\sqrt{25}=5$.'
          },
          {
            question: 'A circle has center $(2, -5)$ and passes through the point $(6, -2)$. What is the equation of the circle?',
            options: ['$(x-2)^2+(y+5)^2=25$', '$(x-2)^2+(y+5)^2=5$', '$(x+2)^2+(y-5)^2=25$', '$(x-2)^2+(y+5)^2=7$'],
            correctAnswer: 0,
            explanation: '$r = \\\\sqrt{(6-2)^2+(-2-(-5))^2} = \\\\sqrt{16+9} = \\\\sqrt{25} = 5$. Equation: $(x-2)^2+(y+5)^2=25$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Central & Inscribed Angles ──────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satCirclesTrigPart3Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct3-intro',
      type: 'text' as const,
      content: `
# 🎯 Central & Inscribed Angles

**Part 3 of 7 — Central Angles, Inscribed Angles, Tangent Lines**

**Central angle:** vertex is at the centre of the circle.
- A central angle **equals** its intercepted arc.

**Inscribed angle:** vertex is **on** the circle.
- An inscribed angle is **half** its intercepted arc.

$$\\\\text{Central angle} = \\\\text{arc} \\\\qquad \\\\text{Inscribed angle} = \\\\frac{1}{2} \\\\times \\\\text{arc}$$

**Example 1:** A central angle measures $80°$. Its intercepted arc is also $80°$.

**Example 2:** An inscribed angle intercepts the same $80°$ arc. The inscribed angle is $\\\\frac{80}{2} = 40°$.
      `
    },
    {
      id: 'sat-ct3-theorems',
      type: 'text' as const,
      content: `
## Important Circle Theorems

**1. Inscribed Angle Theorem:**
All inscribed angles subtending the same arc are equal.

**2. Semicircle Theorem:**
An inscribed angle that subtends a semicircle (diameter) is always $90°$.

$$\\\\text{If the arc} = 180° \\\\implies \\\\text{inscribed angle} = 90°$$

This means any triangle inscribed in a circle with one side as the diameter is a **right triangle**.

**3. Tangent-Radius Perpendicularity:**
A tangent to a circle is always **perpendicular** to the radius drawn to the point of tangency.

$$\\\\text{tangent} \\\\perp \\\\text{radius at point of tangency}$$

**4. Two Tangents from an External Point:**
Tangent segments from the same external point are equal in length.
      `
    },
    {
      id: 'sat-ct3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Central & Inscribed Angles** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A central angle is $110°$. What is the measure of an inscribed angle that intercepts the same arc?',
            options: ['$110°$', '$220°$', '$55°$', '$45°$'],
            correctAnswer: 2,
            explanation: 'The intercepted arc equals the central angle ($110°$). The inscribed angle is half: $110°/2 = 55°$.'
          },
          {
            question: 'An inscribed angle subtends a diameter. What is its measure?',
            options: ['$180°$', '$90°$', '$45°$', 'It depends on the circle\\'s size'],
            correctAnswer: 1,
            explanation: 'A diameter subtends an arc of $180°$. The inscribed angle is $180°/2 = 90°$ — always.'
          }
        ]
      }
    },
    {
      id: 'sat-ct3-tangent',
      type: 'text' as const,
      content: `
## Tangent Line Problems

**Example 3:** A tangent from external point $P$ touches circle $O$ at point $T$. $OT = 5$ and $OP = 13$. Find $PT$.

Since tangent $\\\\perp$ radius:

$$PT^2 + OT^2 = OP^2 \\\\quad (\\\\text{Pythagorean theorem})$$

$$PT^2 + 25 = 169 \\\\implies PT^2 = 144 \\\\implies PT = 12$$

**Example 4:** Two tangent segments from point $P$ touch the circle at $A$ and $B$. If $PA = 8$, then $PB = 8$ also — tangent segments from the same external point are equal.

---

**SAT Tip:** When you see a tangent touching a circle, immediately draw the radius to the tangent point and mark a right angle. This creates a right triangle you can solve with the Pythagorean theorem.
      `
    },
    {
      id: 'sat-ct3-input1',
      type: 'input-boxes' as const,
      content: `
**Angle & Tangent Calculations** 🧮

1) A central angle is $140°$. What is the inscribed angle intercepting the same arc?
2) An inscribed angle is $35°$. What is its intercepted arc?
3) A tangent from point $P$ meets circle $O$ at $T$. If $OT = 8$ and $OP = 17$, what is $PT$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '70', '15'],
        hint1: 'Inscribed angle $= \\\\frac{1}{2} \\\\times$ central angle.',
        hint2: 'Arc $= 2 \\\\times$ inscribed angle.',
        hint3: '$PT^2 + 8^2 = 17^2 \\\\implies PT^2 = 289 - 64 = 225$.',
        explanation: '$140/2 = 70°$. $35 \\\\times 2 = 70°$. $\\\\sqrt{225} = 15$.'
      }
    },
    {
      id: 'sat-ct3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Theorem Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A tangent line and a radius at the point of tangency form an angle of …',
            options: ['$45°$', '$60°$', '$90°$', '$180°$']
          },
          {
            label: 'An inscribed angle that subtends a diameter measures …',
            options: ['$45°$', '$90°$', '$120°$', '$180°$']
          },
          {
            label: 'If two inscribed angles intercept the same arc, they are …',
            options: ['supplementary', 'complementary', 'equal', 'perpendicular']
          }
        ],
        correctAnswers: ['$90°$', '$90°$', 'equal'],
        hint1: 'Tangent ⊥ radius.',
        hint2: 'A diameter creates a $180°$ arc; the inscribed angle is half that.',
        hint3: 'Inscribed angles subtending the same arc are congruent.',
        explanation: 'Tangent-radius is $90°$. Semicircle inscribed angle is $90°$. Same-arc inscribed angles are equal by the inscribed angle theorem.'
      }
    },
    {
      id: 'sat-ct3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In circle $O$, central angle $AOB = 130°$. Point $C$ is on the major arc $AB$. What is inscribed angle $ACB$?',
            options: ['$65°$', '$115°$', '$130°$', '$230°$'],
            correctAnswer: 1,
            explanation: 'Point $C$ is on the major arc, so it sees the minor arc $AB = 130°$. Wait — inscribed angle $ACB$ intercepts the *minor* arc only if $C$ is on the *major* arc. $\\\\angle ACB = \\\\frac{130}{2} = 65°$... But $C$ is on the major arc, so it intercepts minor arc $= 130°$, giving $65°$. Actually, if $C$ is on major arc, inscribed angle $ = \\\\frac{\\\\text{minor arc}}{2}$. However, the major arc = $360 - 130 = 230$. The inscribed angle from $C$ on the major arc intercepts arc $AB = 130°$, so $\\\\angle ACB = 65°$. Checking: from the other side, $\\\\frac{230}{2} = 115°$. The inscribed angle intercepts the arc on the *opposite* side. Since $C$ is on the major arc, the arc on the opposite side (the minor arc through which the angle "looks") is $130°$, giving $65°$. Answer: $65°$.'
          },
          {
            question: 'A tangent and a secant are drawn from external point $P$. The tangent touches the circle at $T$ and the secant intersects at $A$ and $B$. If $PT = 6$ and $PA = 4$, what is $PB$?',
            options: ['$8$', '$9$', '$10$', '$12$'],
            correctAnswer: 1,
            explanation: 'By the tangent-secant theorem: $PT^2 = PA \\\\cdot PB$. $36 = 4 \\\\cdot PB \\\\implies PB = 9$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Intro to Trig Ratios ────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satCirclesTrigPart4Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct4-intro',
      type: 'text' as const,
      content: `
# 📐 Intro to Trig Ratios

**Part 4 of 7 — SOH CAH TOA, Right Triangle Trig, Finding Missing Sides**

Trigonometric ratios relate the angles of a right triangle to the lengths of its sides.

For an acute angle $\\\\theta$ in a right triangle:

| Ratio | Definition | Mnemonic |
|-------|-----------|----------|
| $\\\\sin\\\\theta$ | $\\\\dfrac{\\\\text{opposite}}{\\\\text{hypotenuse}}$ | **S**OH |
| $\\\\cos\\\\theta$ | $\\\\dfrac{\\\\text{adjacent}}{\\\\text{hypotenuse}}$ | **C**AH |
| $\\\\tan\\\\theta$ | $\\\\dfrac{\\\\text{opposite}}{\\\\text{adjacent}}$ | **T**OA |

**Key point:** "Opposite" and "adjacent" are relative to the angle you're looking at. The hypotenuse is always the longest side, across from the right angle.
      `
    },
    {
      id: 'sat-ct4-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** In right triangle $ABC$ with $C = 90°$, $AB = 13$, $BC = 5$, $AC = 12$. Find $\\\\sin A$, $\\\\cos A$, $\\\\tan A$.

- Opposite to $A$ is $BC = 5$
- Adjacent to $A$ is $AC = 12$
- Hypotenuse is $AB = 13$

$$\\\\sin A = \\\\frac{5}{13}, \\\\quad \\\\cos A = \\\\frac{12}{13}, \\\\quad \\\\tan A = \\\\frac{5}{12}$$

**Example 2:** Finding a missing side. A ladder leans against a wall at $60°$ to the ground. The ladder is $10$ m long. How high up the wall does it reach?

The height is **opposite** the $60°$ angle; the ladder is the **hypotenuse**.

$$\\\\sin 60° = \\\\frac{h}{10} \\\\implies h = 10\\\\sin 60° = 10 \\\\cdot \\\\frac{\\\\sqrt{3}}{2} = 5\\\\sqrt{3} \\\\approx 8.66 \\\\text{ m}$$

**Example 3:** Find angle $\\\\theta$ if the opposite side is $7$ and the hypotenuse is $14$.

$$\\\\sin\\\\theta = \\\\frac{7}{14} = 0.5 \\\\implies \\\\theta = 30°$$
      `
    },
    {
      id: 'sat-ct4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Trig Ratios** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In a right triangle, the side opposite angle $\\\\theta$ is 8 and the hypotenuse is 10. What is $\\\\cos\\\\theta$?',
            options: ['$\\\\frac{4}{5}$', '$\\\\frac{3}{5}$', '$\\\\frac{8}{10}$', '$\\\\frac{6}{10}$'],
            correctAnswer: 1,
            explanation: 'Adjacent $= \\\\sqrt{10^2 - 8^2} = \\\\sqrt{36} = 6$. $\\\\cos\\\\theta = \\\\frac{6}{10} = \\\\frac{3}{5}$. Note that choice C is $\\\\sin\\\\theta$, not $\\\\cos\\\\theta$.'
          },
          {
            question: 'If $\\\\tan\\\\theta = \\\\frac{3}{4}$ and the adjacent side is 12, what is the opposite side?',
            options: ['$9$', '$16$', '$\\\\frac{3}{4}$', '$15$'],
            correctAnswer: 0,
            explanation: '$\\\\tan\\\\theta = \\\\frac{\\\\text{opp}}{\\\\text{adj}} = \\\\frac{3}{4}$. If adj $= 12$: opp $= 12 \\\\cdot \\\\frac{3}{4} = 9$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct4-3-4-5',
      type: 'text' as const,
      content: `
## Common Right Triangle Families

Memorise these Pythagorean triples — they save time on the SAT:

| Triple | Multiples |
|--------|-----------|
| $3, 4, 5$ | $6, 8, 10$; $9, 12, 15$; $12, 16, 20$ |
| $5, 12, 13$ | $10, 24, 26$ |
| $8, 15, 17$ | $16, 30, 34$ |
| $7, 24, 25$ | — |

Also know the two **special right triangles**:

**45-45-90:** sides in ratio $1 : 1 : \\\\sqrt{2}$

**30-60-90:** sides in ratio $1 : \\\\sqrt{3} : 2$

These appear constantly on the SAT and are given on the reference sheet. But knowing them by heart saves time.
      `
    },
    {
      id: 'sat-ct4-input1',
      type: 'input-boxes' as const,
      content: `
**Finding Missing Sides** 🧮

1) Right triangle: hypotenuse $= 25$, one leg $= 7$. What is the other leg?
2) $\\\\sin\\\\theta = 0.6$ and the hypotenuse is 20. What is the opposite side?
3) $\\\\tan 45° = 1$. If the opposite side is 9, what is the adjacent side?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '12', '9'],
        hint1: '$\\\\sqrt{25^2 - 7^2} = \\\\sqrt{625 - 49}$.',
        hint2: '$\\\\text{opp} = \\\\sin\\\\theta \\\\times \\\\text{hyp} = 0.6 \\\\times 20$.',
        hint3: '$\\\\tan 45° = \\\\frac{\\\\text{opp}}{\\\\text{adj}} = 1 \\\\implies \\\\text{adj} = \\\\text{opp}$.',
        explanation: '$\\\\sqrt{576} = 24$. $0.6 \\\\times 20 = 12$. $\\\\tan 45° = 1$ means opposite $=$ adjacent $= 9$.'
      }
    },
    {
      id: 'sat-ct4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Trig Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\sin\\\\theta$ is defined as …',
            options: ['adjacent / hypotenuse', 'opposite / hypotenuse', 'opposite / adjacent', 'hypotenuse / opposite']
          },
          {
            label: 'In a 30-60-90 triangle, the side opposite $30°$ compared to the hypotenuse has ratio …',
            options: ['$1 : \\\\sqrt{2}$', '$1 : 2$', '$\\\\sqrt{3} : 2$', '$1 : \\\\sqrt{3}$']
          },
          {
            label: '$\\\\tan\\\\theta$ can also be written as …',
            options: ['$\\\\cos\\\\theta / \\\\sin\\\\theta$', '$\\\\sin\\\\theta / \\\\cos\\\\theta$', '$1 / \\\\sin\\\\theta$', '$1 / \\\\cos\\\\theta$']
          }
        ],
        correctAnswers: ['opposite / hypotenuse', '$1 : 2$', '$\\\\sin\\\\theta / \\\\cos\\\\theta$'],
        hint1: 'SOH — Sine = Opposite / Hypotenuse.',
        hint2: 'In a 30-60-90, the shortest side is half the hypotenuse.',
        hint3: '$\\\\tan\\\\theta = \\\\frac{\\\\text{opp}}{\\\\text{hyp}} \\\\div \\\\frac{\\\\text{adj}}{\\\\text{hyp}}$.',
        explanation: '$\\\\sin\\\\theta = \\\\text{opp}/\\\\text{hyp}$. The 30° side is $1$ and hyp is $2$, ratio $1:2$. $\\\\tan\\\\theta = \\\\sin\\\\theta / \\\\cos\\\\theta$.'
      }
    },
    {
      id: 'sat-ct4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A ramp rises 3 feet over a horizontal distance of 4 feet. What is the angle of elevation of the ramp, to the nearest degree?',
            options: ['$37°$', '$53°$', '$30°$', '$45°$'],
            correctAnswer: 0,
            explanation: '$\\\\tan\\\\theta = \\\\frac{3}{4} = 0.75$. $\\\\theta = \\\\arctan(0.75) \\\\approx 36.87° \\\\approx 37°$.'
          },
          {
            question: 'In right triangle $PQR$, angle $R = 90°$, $PQ = 10$, and $\\\\sin P = 0.8$. What is the length of $QR$?',
            options: ['$6$', '$8$', '$4$', '$5$'],
            correctAnswer: 1,
            explanation: '$\\\\sin P = \\\\frac{QR}{PQ} \\\\implies QR = PQ \\\\cdot \\\\sin P = 10 \\\\times 0.8 = 8$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Unit Circle Basics ──────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satCirclesTrigPart5Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct5-intro',
      type: 'text' as const,
      content: `
# 🔄 Unit Circle Basics

**Part 5 of 7 — Special Angles, Radian/Degree Conversion, Coordinates on the Unit Circle**

The **unit circle** is a circle of radius $1$ centred at the origin.

Any point on the unit circle can be written as:

$$(\\\\cos\\\\theta,\\\\; \\\\sin\\\\theta)$$

This connects trig ratios to coordinates, and extends trig beyond right triangles to **any** angle.

**Radian/Degree conversion:**

$$180° = \\\\pi \\\\text{ radians}$$

To convert degrees → radians: multiply by $\\\\dfrac{\\\\pi}{180}$

To convert radians → degrees: multiply by $\\\\dfrac{180}{\\\\pi}$

**Examples:**
- $90° = 90 \\\\cdot \\\\frac{\\\\pi}{180} = \\\\frac{\\\\pi}{2}$
- $\\\\frac{\\\\pi}{3} = \\\\frac{\\\\pi}{3} \\\\cdot \\\\frac{180}{\\\\pi} = 60°$
      `
    },
    {
      id: 'sat-ct5-special',
      type: 'text' as const,
      content: `
## Special Angle Values

These come from the **30-60-90** and **45-45-90** triangles inscribed in the unit circle.

| Degrees | Radians | $\\\\sin$ | $\\\\cos$ | $\\\\tan$ |
|---------|---------|---------|---------|---------|
| $0°$ | $0$ | $0$ | $1$ | $0$ |
| $30°$ | $\\\\frac{\\\\pi}{6}$ | $\\\\frac{1}{2}$ | $\\\\frac{\\\\sqrt{3}}{2}$ | $\\\\frac{1}{\\\\sqrt{3}}$ |
| $45°$ | $\\\\frac{\\\\pi}{4}$ | $\\\\frac{\\\\sqrt{2}}{2}$ | $\\\\frac{\\\\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\\\\frac{\\\\pi}{3}$ | $\\\\frac{\\\\sqrt{3}}{2}$ | $\\\\frac{1}{2}$ | $\\\\sqrt{3}$ |
| $90°$ | $\\\\frac{\\\\pi}{2}$ | $1$ | $0$ | undefined |

**Pattern:** Notice that $\\\\sin 30° = \\\\cos 60°$ and $\\\\sin 60° = \\\\cos 30°$. This is the **complementary angle** relationship:

$$\\\\sin\\\\theta = \\\\cos(90° - \\\\theta)$$
      `
    },
    {
      id: 'sat-ct5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Radian–Degree Conversion** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Convert $150°$ to radians.',
            options: ['$\\\\frac{\\\\pi}{6}$', '$\\\\frac{5\\\\pi}{6}$', '$\\\\frac{5\\\\pi}{12}$', '$\\\\frac{3\\\\pi}{4}$'],
            correctAnswer: 1,
            explanation: '$150° \\\\times \\\\frac{\\\\pi}{180°} = \\\\frac{150\\\\pi}{180} = \\\\frac{5\\\\pi}{6}$.'
          },
          {
            question: 'Convert $\\\\frac{3\\\\pi}{4}$ radians to degrees.',
            options: ['$120°$', '$135°$', '$150°$', '$270°$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{3\\\\pi}{4} \\\\times \\\\frac{180°}{\\\\pi} = \\\\frac{3 \\\\times 180}{4} = \\\\frac{540}{4} = 135°$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct5-quadrants',
      type: 'text' as const,
      content: `
## Signs in Each Quadrant

The sign of each trig function depends on the quadrant:

| Quadrant | $\\\\sin$ | $\\\\cos$ | $\\\\tan$ | Mnemonic |
|----------|---------|---------|---------|----------|
| I ($0°$–$90°$) | $+$ | $+$ | $+$ | **A**ll |
| II ($90°$–$180°$) | $+$ | $-$ | $-$ | **S**tudents |
| III ($180°$–$270°$) | $-$ | $-$ | $+$ | **T**ake |
| IV ($270°$–$360°$) | $-$ | $+$ | $-$ | **C**alculus |

"**A**ll **S**tudents **T**ake **C**alculus" tells you which function is positive in each quadrant.

**Example:** $\\\\sin 210°$. The reference angle is $210° - 180° = 30°$. Quadrant III: sine is negative.

$$\\\\sin 210° = -\\\\sin 30° = -\\\\frac{1}{2}$$
      `
    },
    {
      id: 'sat-ct5-input1',
      type: 'input-boxes' as const,
      content: `
**Unit Circle Values** 🧮

Give exact decimal or fraction answers.

1) $\\\\cos 60°$ = ?
2) Convert $270°$ to radians. Write your answer as a fraction of $\\\\pi$ (e.g., type "3/2" for $\\\\frac{3\\\\pi}{2}$).
3) $\\\\sin 150°$ = ? (as a decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '3/2', '0.5'],
        hint1: 'From the special-angle table: $\\\\cos 60° = \\\\frac{1}{2}$.',
        hint2: '$270° \\\\times \\\\frac{\\\\pi}{180°} = \\\\frac{270\\\\pi}{180} = \\\\frac{3\\\\pi}{2}$.',
        hint3: 'Reference angle $= 180° - 150° = 30°$. QII: sin is positive. $\\\\sin 30° = 0.5$.',
        explanation: '$\\\\cos 60° = 0.5$. $270° = \\\\frac{3\\\\pi}{2}$ rad. $\\\\sin 150° = \\\\sin 30° = 0.5$.'
      }
    },
    {
      id: 'sat-ct5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quadrant Signs** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In Quadrant III, $\\\\cos\\\\theta$ is …',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: '$\\\\sin\\\\theta = \\\\cos(90° - \\\\theta)$ is called the …',
            options: ['Pythagorean identity', 'complementary angle identity', 'double angle formula', 'reciprocal identity']
          },
          {
            label: 'On the unit circle, the coordinates of the point at angle $\\\\theta$ are …',
            options: ['$(\\\\sin\\\\theta, \\\\cos\\\\theta)$', '$(\\\\cos\\\\theta, \\\\sin\\\\theta)$', '$(\\\\tan\\\\theta, 1)$', '$(r\\\\cos\\\\theta, r\\\\sin\\\\theta)$']
          }
        ],
        correctAnswers: ['negative', 'complementary angle identity', '$(\\\\cos\\\\theta, \\\\sin\\\\theta)$'],
        hint1: 'A-S-T-C: only tangent is positive in QIII.',
        hint2: 'Complementary angles add to $90°$.',
        hint3: 'The $x$-coordinate is $\\\\cos\\\\theta$ and the $y$-coordinate is $\\\\sin\\\\theta$.',
        explanation: 'Cosine is negative in QIII. The co-function identity links complementary angles. On the unit circle, $x = \\\\cos\\\\theta$, $y = \\\\sin\\\\theta$.'
      }
    },
    {
      id: 'sat-ct5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\sin x = \\\\frac{\\\\sqrt{3}}{2}$ and $0° < x < 90°$, what is $\\\\cos(90° - x)$?',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$\\\\frac{\\\\sqrt{2}}{2}$', '$1$'],
            correctAnswer: 1,
            explanation: 'By the complementary identity: $\\\\cos(90° - x) = \\\\sin x = \\\\frac{\\\\sqrt{3}}{2}$.'
          },
          {
            question: 'A circle has radius 1 and centre at the origin. A point on the circle in the third quadrant has $x$-coordinate $-\\\\frac{\\\\sqrt{2}}{2}$. What is the $y$-coordinate?',
            options: ['$\\\\frac{\\\\sqrt{2}}{2}$', '$-\\\\frac{\\\\sqrt{2}}{2}$', '$-\\\\frac{1}{2}$', '$\\\\frac{1}{2}$'],
            correctAnswer: 1,
            explanation: '$x^2 + y^2 = 1 \\\\Rightarrow \\\\frac{1}{2} + y^2 = 1 \\\\Rightarrow y^2 = \\\\frac{1}{2}$. In QIII, $y < 0$, so $y = -\\\\frac{\\\\sqrt{2}}{2}$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Trig on the SAT ─────────────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satCirclesTrigPart6Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct6-intro',
      type: 'text' as const,
      content: `
# 🎯 Trig on the SAT

**Part 6 of 7 — Solving for Angles, Pythagorean Identity, Complementary Angles**

The SAT tests trig in very specific ways. Master these three patterns and you'll handle nearly every trig question:

**Pattern 1: Pythagorean Identity**

$$\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1$$

This is the single most important trig identity on the SAT. It lets you find one trig value from the other:

$$\\\\sin^2\\\\theta = 1 - \\\\cos^2\\\\theta \\\\qquad \\\\cos^2\\\\theta = 1 - \\\\sin^2\\\\theta$$

**Example 1:** If $\\\\cos\\\\theta = \\\\frac{3}{5}$ and $\\\\theta$ is in Quadrant I, find $\\\\sin\\\\theta$.

$$\\\\sin^2\\\\theta = 1 - \\\\left(\\\\frac{3}{5}\\\\right)^2 = 1 - \\\\frac{9}{25} = \\\\frac{16}{25}$$

$$\\\\sin\\\\theta = \\\\frac{4}{5} \\\\quad (\\\\text{positive in QI})$$
      `
    },
    {
      id: 'sat-ct6-comp',
      type: 'text' as const,
      content: `
## Pattern 2: Complementary Angles

$$\\\\sin\\\\theta = \\\\cos(90° - \\\\theta) \\\\qquad \\\\cos\\\\theta = \\\\sin(90° - \\\\theta)$$

**SAT Classic:** If $\\\\sin(3x)° = \\\\cos(2x)°$, find $x$.

$$3x + 2x = 90 \\\\implies 5x = 90 \\\\implies x = 18$$

Check: $\\\\sin 54° = \\\\cos 36°$ ✓

---

## Pattern 3: Solving Trig Equations

**Example 2:** Solve $2\\\\sin\\\\theta - 1 = 0$ for $0° \\\\le \\\\theta \\\\le 360°$.

$$\\\\sin\\\\theta = \\\\frac{1}{2}$$

From the unit circle: $\\\\theta = 30°$ or $\\\\theta = 150°$ (sine is positive in QI and QII).

**Example 3:** $\\\\cos^2\\\\theta = \\\\frac{3}{4}$ for $0° \\\\le \\\\theta < 360°$.

$$\\\\cos\\\\theta = \\\\pm\\\\frac{\\\\sqrt{3}}{2}$$

$\\\\theta = 30°,\\\\; 150°,\\\\; 210°,\\\\; 330°$ — four solutions.
      `
    },
    {
      id: 'sat-ct6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Identity & Equation Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\sin\\\\theta = \\\\frac{5}{13}$ and $\\\\theta$ is in Quadrant I, what is $\\\\cos\\\\theta$?',
            options: ['$\\\\frac{8}{13}$', '$\\\\frac{12}{13}$', '$\\\\frac{5}{12}$', '$\\\\frac{1}{13}$'],
            correctAnswer: 1,
            explanation: '$\\\\cos^2\\\\theta = 1 - \\\\frac{25}{169} = \\\\frac{144}{169}$. $\\\\cos\\\\theta = \\\\frac{12}{13}$ (positive in QI).'
          },
          {
            question: '$\\\\sin(5x)° = \\\\cos(x + 6)°$. What is $x$?',
            options: ['$12$', '$14$', '$16$', '$18$'],
            correctAnswer: 1,
            explanation: '$5x + (x + 6) = 90 \\\\implies 6x + 6 = 90 \\\\implies 6x = 84 \\\\implies x = 14$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct6-advanced',
      type: 'text' as const,
      content: `
## Dividing the Pythagorean Identity

Dividing $\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1$ by $\\\\cos^2\\\\theta$:

$$\\\\tan^2\\\\theta + 1 = \\\\sec^2\\\\theta$$

Dividing by $\\\\sin^2\\\\theta$:

$$1 + \\\\cot^2\\\\theta = \\\\csc^2\\\\theta$$

The SAT rarely tests these directly, but knowing them can simplify expressions.

---

**Trig Expression Simplification (SAT-style):**

Simplify $\\\\frac{\\\\sin^2\\\\theta}{1 - \\\\cos\\\\theta}$.

Factor the numerator using $\\\\sin^2\\\\theta = 1 - \\\\cos^2\\\\theta = (1 - \\\\cos\\\\theta)(1 + \\\\cos\\\\theta)$:

$$\\\\frac{(1 - \\\\cos\\\\theta)(1 + \\\\cos\\\\theta)}{1 - \\\\cos\\\\theta} = 1 + \\\\cos\\\\theta$$

**SAT Tip:** When you see $\\\\sin^2$ or $\\\\cos^2$ in the answer choices, think about the Pythagorean identity. It's nearly always the key.
      `
    },
    {
      id: 'sat-ct6-input1',
      type: 'input-boxes' as const,
      content: `
**Solving Trig Problems** 🧮

1) $\\\\cos\\\\theta = \\\\frac{4}{5}$ (QI). What is $\\\\sin\\\\theta$? (as a fraction, e.g., 3/5)
2) $\\\\sin(4x)° = \\\\cos(x + 5)°$. Find $x$.
3) How many solutions does $\\\\sin\\\\theta = \\\\frac{\\\\sqrt{2}}{2}$ have for $0° \\\\le \\\\theta < 360°$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3/5', '17', '2'],
        hint1: '$\\\\sin^2\\\\theta = 1 - 16/25 = 9/25$.',
        hint2: '$4x + (x + 5) = 90$.',
        hint3: '$\\\\sin\\\\theta = \\\\frac{\\\\sqrt{2}}{2}$ at $45°$ and $135°$.',
        explanation: '$\\\\sin\\\\theta = 3/5$. $5x + 5 = 90 \\\\implies x = 17$. Sine equals $\\\\frac{\\\\sqrt{2}}{2}$ in QI ($45°$) and QII ($135°$) — 2 solutions.'
      }
    },
    {
      id: 'sat-ct6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Trig Identity Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\sin^2 x + \\\\cos^2 x$ always equals …',
            options: ['$0$', '$1$', '$2$', 'It depends on $x$']
          },
          {
            label: 'If $\\\\sin A = \\\\cos B$, then $A + B$ must be …',
            options: ['$180°$', '$90°$', '$360°$', '$45°$']
          },
          {
            label: '$\\\\frac{\\\\sin\\\\theta}{\\\\cos\\\\theta}$ is equivalent to …',
            options: ['$\\\\sec\\\\theta$', '$\\\\csc\\\\theta$', '$\\\\tan\\\\theta$', '$\\\\cot\\\\theta$']
          }
        ],
        correctAnswers: ['$1$', '$90°$', '$\\\\tan\\\\theta$'],
        hint1: 'The Pythagorean identity.',
        hint2: 'Complementary angles.',
        hint3: 'This is the definition of tangent in terms of sine and cosine.',
        explanation: '$\\\\sin^2 x + \\\\cos^2 x = 1$ always. $\\\\sin A = \\\\cos B$ means $A + B = 90°$ (complementary). $\\\\sin/\\\\cos = \\\\tan$.'
      }
    },
    {
      id: 'sat-ct6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\sin x = a$ where $0 < x < \\\\frac{\\\\pi}{2}$, what is $\\\\cos(\\\\frac{\\\\pi}{2} - x)$ in terms of $a$?',
            options: ['$\\\\sqrt{1 - a^2}$', '$a$', '$-a$', '$1 - a$'],
            correctAnswer: 1,
            explanation: '$\\\\cos(\\\\frac{\\\\pi}{2} - x) = \\\\sin x = a$ by the complementary identity.'
          },
          {
            question: 'Which expression is equivalent to $(\\\\sin x + \\\\cos x)^2$?',
            options: ['$1$', '$\\\\sin^2 x + \\\\cos^2 x$', '$1 + 2\\\\sin x \\\\cos x$', '$1 + \\\\sin 2x$'],
            correctAnswer: 2,
            explanation: '$(\\\\sin x + \\\\cos x)^2 = \\\\sin^2 x + 2\\\\sin x\\\\cos x + \\\\cos^2 x = 1 + 2\\\\sin x\\\\cos x$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ─────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satCirclesTrigPart7Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct7-intro',
      type: 'text' as const,
      content: `
# 🏁 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet, Mixed Circle + Trig SAT Problems**

Here is every formula you need for SAT circles and trig in one place:

## Circle Formulas

| Formula | Equation |
|---------|----------|
| Circumference | $C = 2\\\\pi r = \\\\pi d$ |
| Area | $A = \\\\pi r^2$ |
| Arc length (degrees) | $s = \\\\frac{\\\\theta}{360}\\\\cdot 2\\\\pi r$ |
| Sector area (degrees) | $A = \\\\frac{\\\\theta}{360}\\\\cdot \\\\pi r^2$ |
| Arc length (radians) | $s = r\\\\theta$ |
| Sector area (radians) | $A = \\\\frac{1}{2}r^2\\\\theta$ |
| Standard equation | $(x-h)^2 + (y-k)^2 = r^2$ |

## Trig Formulas

| Formula | Equation |
|---------|----------|
| SOH CAH TOA | $\\\\sin = \\\\text{O/H}$, $\\\\cos = \\\\text{A/H}$, $\\\\tan = \\\\text{O/A}$ |
| Pythagorean identity | $\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1$ |
| Complementary angles | $\\\\sin\\\\theta = \\\\cos(90° - \\\\theta)$ |
| Radians ↔ Degrees | $\\\\theta_{\\\\text{rad}} = \\\\theta_{\\\\text{deg}} \\\\cdot \\\\frac{\\\\pi}{180}$ |
      `
    },
    {
      id: 'sat-ct7-strat',
      type: 'text' as const,
      content: `
## SAT Strategy Recap

**Circle Questions:**
1. Always identify whether you need circumference, area, arc, or sector.
2. Check if the angle is in degrees or radians — use the matching formula.
3. For equation questions, watch for completing the square.
4. Remember: tangent ⊥ radius. Draw it!

**Trig Questions:**
1. Label sides as opposite, adjacent, hypotenuse relative to the angle.
2. Pick the trig ratio that uses the two sides you know (or need).
3. Check for complementary-angle traps: $\\\\sin x° = \\\\cos(90 - x)°$.
4. If you see $\\\\sin^2$ or $\\\\cos^2$, think Pythagorean identity.

**Time-Saving Tips:**
- Know your Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.
- Know special triangles: $30$-$60$-$90$ ($1 : \\\\sqrt{3} : 2$) and $45$-$45$-$90$ ($1 : 1 : \\\\sqrt{2}$).
- Leave answers in terms of $\\\\pi$ unless the choices are decimals.
      `
    },
    {
      id: 'sat-ct7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Circles** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A circle has area $49\\\\pi$. What is the circumference?',
            options: ['$7\\\\pi$', '$14\\\\pi$', '$49\\\\pi$', '$98\\\\pi$'],
            correctAnswer: 1,
            explanation: '$A = \\\\pi r^2 = 49\\\\pi \\\\Rightarrow r = 7$. $C = 2\\\\pi(7) = 14\\\\pi$.'
          },
          {
            question: 'The equation of a circle is $x^2 + y^2 - 2x + 8y + 8 = 0$. What is the radius?',
            options: ['$3$', '$\\\\sqrt{8}$', '$5$', '$\\\\sqrt{9}$'],
            correctAnswer: 0,
            explanation: '$(x^2 - 2x + 1) + (y^2 + 8y + 16) = -8 + 1 + 16 = 9$. $(x-1)^2 + (y+4)^2 = 9$. $r = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Trig** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In a right triangle, one leg is 9 and the hypotenuse is 15. What is $\\\\tan$ of the angle opposite the leg of length 9?',
            options: ['$\\\\frac{9}{15}$', '$\\\\frac{9}{12}$', '$\\\\frac{12}{15}$', '$\\\\frac{15}{9}$'],
            correctAnswer: 1,
            explanation: 'Other leg $= \\\\sqrt{15^2 - 9^2} = \\\\sqrt{144} = 12$. $\\\\tan = \\\\frac{\\\\text{opp}}{\\\\text{adj}} = \\\\frac{9}{12} = \\\\frac{3}{4}$.'
          },
          {
            question: 'If $\\\\cos(2x + 10)° = \\\\sin(3x - 15)°$, what is $x$?',
            options: ['$17$', '$19$', '$21$', '$23$'],
            correctAnswer: 1,
            explanation: '$\\\\cos A = \\\\sin B \\\\implies A + B = 90$. $(2x+10) + (3x-15) = 90 \\\\implies 5x - 5 = 90 \\\\implies x = 19$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

1) A circle has $r = 10$. A sector has a central angle of $\\\\frac{\\\\pi}{5}$ radians. What is the arc length?
2) $\\\\sin\\\\theta = \\\\frac{7}{25}$ (QI). What is $\\\\cos\\\\theta$? (as a fraction, e.g., 24/25)
3) A sector has area $12\\\\pi$ and radius $6$. What is the central angle in degrees?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '24/25', '120'],
        hint1: 'Radian arc length: $s = r\\\\theta = 10 \\\\cdot \\\\frac{\\\\pi}{5}$. Give the coefficient of $\\\\pi$.',
        hint2: '$\\\\cos^2\\\\theta = 1 - 49/625 = 576/625$.',
        hint3: '$12\\\\pi = \\\\frac{\\\\theta}{360} \\\\cdot \\\\pi(6)^2 = \\\\frac{\\\\theta}{360} \\\\cdot 36\\\\pi$.',
        explanation: '$s = 2\\\\pi$ (coefficient $= 2$). $\\\\cos\\\\theta = 24/25$. $\\\\frac{\\\\theta}{360} \\\\cdot 36 = 12 \\\\implies \\\\theta = 120°$.'
      }
    },
    {
      id: 'sat-ct7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Doubling the radius of a circle multiplies the circumference by …',
            options: ['2', '4', '$\\\\pi$', '$2\\\\pi$']
          },
          {
            label: 'An inscribed angle is always ______ the central angle subtending the same arc.',
            options: ['equal to', 'half', 'double', 'unrelated to']
          },
          {
            label: 'The identity $\\\\sin^2 x + \\\\cos^2 x = 1$ is valid for …',
            options: ['only acute angles', 'only angles in QI and QII', 'all real numbers $x$', 'only special angles']
          }
        ],
        correctAnswers: ['2', 'half', 'all real numbers $x$'],
        hint1: '$C = 2\\\\pi(2r) = 2 \\\\cdot 2\\\\pi r$.',
        hint2: 'Inscribed angle theorem.',
        hint3: 'This identity comes from the unit circle definition and holds universally.',
        explanation: 'Circumference scales linearly with $r$, so doubling $r$ doubles $C$. Inscribed angle = half of central. The Pythagorean identity holds for all $x$.'
      }
    },
    {
      id: 'sat-ct7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel with radius 2 feet rolls along the ground. How far does the center travel when the wheel makes 5 complete revolutions?',
            options: ['$10\\\\pi$ feet', '$20\\\\pi$ feet', '$4\\\\pi$ feet', '$5\\\\pi$ feet'],
            correctAnswer: 1,
            explanation: 'One revolution = one circumference = $2\\\\pi(2) = 4\\\\pi$ feet. Five revolutions: $5 \\\\times 4\\\\pi = 20\\\\pi$ feet.'
          },
          {
            question: 'In the $xy$-plane, a circle has equation $(x+3)^2 + (y-4)^2 = 100$. A point on the circle is at distance $d$ from the origin. What is the maximum value of $d$?',
            options: ['$10$', '$15$', '$5 + \\\\sqrt{5}$', '$\\\\sqrt{125}$'],
            correctAnswer: 1,
            explanation: 'Center $= (-3, 4)$, radius $= 10$. Distance from center to origin $= \\\\sqrt{9+16} = 5$. Maximum distance from origin to a point on the circle $= 5 + 10 = 15$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Circles & Trig lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
