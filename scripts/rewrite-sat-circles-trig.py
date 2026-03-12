#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Circles & Trigonometry.
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


# ── Part 1: Circle Equations ─────────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satCirclesTrigPart1Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct1-intro',
      type: 'text' as const,
      content: `
# ⭕ Circle Equations

**Part 1 of 7 — Standard Form, Center, Radius & Completing the Square**

Circle equations appear on almost every SAT. The standard form is the key:

$$
(x - h)^2 + (y - k)^2 = r^2
$$

| Component | Meaning |
|-----------|---------|
| $(h, k)$ | Center of the circle |
| $r$ | Radius |
| $r^2$ | The number on the right side |

**Important:** The signs in $(x - h)$ and $(y - k)$ are **subtractions**, so if the equation has $(x + 3)^2$, that means $h = -3$.
      `
    },
    {
      id: 'sat-ct1-read-equation',
      type: 'text' as const,
      content: `
## Reading Center & Radius — Worked Examples

**Example 1:** Find the center and radius of $(x - 4)^2 + (y + 1)^2 = 25$.

1. Compare to $(x - h)^2 + (y - k)^2 = r^2$.
2. $h = 4$, $k = -1$ (note the $+1$ means $k = -1$).
3. $r^2 = 25$, so $r = 5$.
4. **Center:** $(4, -1)$, **Radius:** $5$.

**Example 2:** Write the equation of a circle with center $(-2, 7)$ and radius $3$.

$$(x - (-2))^2 + (y - 7)^2 = 3^2$$
$$(x + 2)^2 + (y - 7)^2 = 9$$

---

**SAT Tip:** If you see $r^2 = 36$, the radius is $6$, not $36$. The SAT loves including $r^2$ as a wrong answer for the radius.
      `
    },
    {
      id: 'sat-ct1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Reading Circle Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the radius of the circle $(x + 5)^2 + (y - 3)^2 = 49$?',
            options: ['$49$', '$7$', '$24.5$', '$\\\\sqrt{49/2}$'],
            correctAnswer: 1,
            explanation: '$r^2 = 49$, so $r = \\\\sqrt{49} = 7$. Remember: the right side is $r^2$, not $r$.'
          },
          {
            question: 'A circle has center $(0, -6)$ and passes through $(3, -2)$. What is $r^2$?',
            options: ['$5$', '$7$', '$25$', '$49$'],
            correctAnswer: 2,
            explanation: 'Use the distance formula: $r^2 = (3 - 0)^2 + (-2 - (-6))^2 = 9 + 16 = 25$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct1-completing',
      type: 'text' as const,
      content: `
## Completing the Square — Key SAT Skill

Many SAT problems give the circle in **general form** and ask you to find the center or radius. You must complete the square.

**Example:** Find the center and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.

1. Group $x$ and $y$ terms: $(x^2 - 6x) + (y^2 + 4y) = 12$.
2. Complete the square for $x$: half of $-6$ is $-3$; $(-3)^2 = 9$.
3. Complete the square for $y$: half of $4$ is $2$; $(2)^2 = 4$.
4. Add both to each side: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$.
5. Factor: $(x - 3)^2 + (y + 2)^2 = 25$.
6. **Center:** $(3, -2)$, **Radius:** $5$.

**The pattern:** For $x^2 + bx$, add $\\\\left(\\\\frac{b}{2}\\\\right)^2$ to both sides.
      `
    },
    {
      id: 'sat-ct1-input',
      type: 'input-boxes' as const,
      content: `
**Complete the square practice.** 🧮

Consider the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.

1) What is the $x$-coordinate of the center?

2) What is the $y$-coordinate of the center?

3) What is the radius?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-4', '1', '5'],
        hint1: 'Group: $(x^2 + 8x) + (y^2 - 2y) = 8$. Half of 8 is 4, so add $16$ to complete the $x$-square.',
        hint2: 'Half of $-2$ is $-1$, so add $1$ to complete the $y$-square. $(x+4)^2 + (y-1)^2 = 8 + 16 + 1 = 25$.',
        hint3: 'Center is $(-4, 1)$ and $r^2 = 25$, so $r = 5$.',
        explanation: '$(x^2+8x+16)+(y^2-2y+1)=8+16+1=25$. $(x+4)^2+(y-1)^2=25$. Center $(-4,1)$, radius $5$.'
      }
    },
    {
      id: 'sat-ct1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each equation to its center.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(x - 2)^2 + (y + 5)^2 = 16$',
            options: ['$(2, 5)$', '$(2, -5)$', '$(-2, 5)$', '$(-2, -5)$']
          },
          {
            label: '$x^2 + (y - 3)^2 = 1$',
            options: ['$(0, -3)$', '$(1, 3)$', '$(0, 3)$', '$(3, 0)$']
          },
          {
            label: '$(x + 1)^2 + (y + 1)^2 = 9$',
            options: ['$(1, 1)$', '$(-1, 1)$', '$(1, -1)$', '$(-1, -1)$']
          }
        ],
        correctAnswers: ['$(2, -5)$', '$(0, 3)$', '$(-1, -1)$'],
        hint1: '$(x-2)$ means $h=2$; $(y+5) = (y-(-5))$ means $k=-5$.',
        hint2: 'No $x$ shift means $h=0$; $(y-3)$ means $k=3$.',
        hint3: '$(x+1) = (x-(-1))$ means $h=-1$; $(y+1) = (y-(-1))$ means $k=-1$.',
        explanation: 'Remember: standard form uses subtraction. A plus sign means the coordinate is negative.'
      }
    },
    {
      id: 'sat-ct1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The equation $x^2 + y^2 - 10x + 6y + 18 = 0$ represents a circle. What is the radius?',
            options: ['$2$', '$4$', '$16$', '$\\\\sqrt{18}$'],
            correctAnswer: 1,
            explanation: 'Complete the square: $(x^2-10x+25)+(y^2+6y+9)=-18+25+9=16$. $(x-5)^2+(y+3)^2=16$, so $r=4$.'
          },
          {
            question: 'A circle in the $xy$-plane has center $(3, -4)$ and is tangent to the $x$-axis. What is the equation?',
            options: ['$(x-3)^2+(y+4)^2=9$', '$(x-3)^2+(y+4)^2=16$', '$(x+3)^2+(y-4)^2=16$', '$(x-3)^2+(y+4)^2=4$'],
            correctAnswer: 1,
            explanation: 'Tangent to the $x$-axis means the radius equals the distance from center to the $x$-axis, which is $|-4|=4$. So $r^2=16$: $(x-3)^2+(y+4)^2=16$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 2: Arc Length & Sector Area ─────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satCirclesTrigPart2Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct2-intro',
      type: 'text' as const,
      content: `
# 📐 Arc Length & Sector Area

**Part 2 of 7 — Formulas, Degree ↔ Radian Conversion**

When a central angle $\\\\theta$ (in **radians**) intercepts an arc of a circle with radius $r$:

| Quantity | Formula (radians) | Formula (degrees) |
|----------|-------------------|--------------------|
| Arc length | $s = r\\\\theta$ | $s = \\\\frac{\\\\theta}{360} \\\\cdot 2\\\\pi r$ |
| Sector area | $A = \\\\frac{1}{2}r^2\\\\theta$ | $A = \\\\frac{\\\\theta}{360} \\\\cdot \\\\pi r^2$ |

**Degree ↔ Radian Conversion:**

$$
\\\\text{radians} = \\\\text{degrees} \\\\times \\\\frac{\\\\pi}{180}
\\\\qquad
\\\\text{degrees} = \\\\text{radians} \\\\times \\\\frac{180}{\\\\pi}
$$

| Degrees | Radians |
|---------|---------|
| $30°$ | $\\\\frac{\\\\pi}{6}$ |
| $45°$ | $\\\\frac{\\\\pi}{4}$ |
| $60°$ | $\\\\frac{\\\\pi}{3}$ |
| $90°$ | $\\\\frac{\\\\pi}{2}$ |
| $180°$ | $\\\\pi$ |
| $360°$ | $2\\\\pi$ |
      `
    },
    {
      id: 'sat-ct2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Arc Length:** A circle has radius $10$ cm. Find the length of the arc intercepted by a central angle of $\\\\frac{\\\\pi}{3}$ radians.

$$s = r\\\\theta = 10 \\\\cdot \\\\frac{\\\\pi}{3} = \\\\frac{10\\\\pi}{3} \\\\approx 10.47 \\\\text{ cm}$$

**Example 2 — Sector Area:** A pizza slice has radius $8$ inches and a central angle of $45°$.

1. Convert: $45° = 45 \\\\times \\\\frac{\\\\pi}{180} = \\\\frac{\\\\pi}{4}$ radians.
2. Area: $A = \\\\frac{1}{2}(8)^2 \\\\cdot \\\\frac{\\\\pi}{4} = \\\\frac{1}{2}(64)\\\\cdot \\\\frac{\\\\pi}{4} = 8\\\\pi \\\\approx 25.13$ sq in.

**Example 3 — Degree Method:** A sector has radius $6$ and central angle $120°$.
$$A = \\\\frac{120}{360} \\\\cdot \\\\pi(6)^2 = \\\\frac{1}{3} \\\\cdot 36\\\\pi = 12\\\\pi$$

---

**SAT Tip:** Always check whether the angle is given in degrees or radians. Using the wrong formula is the #1 mistake on these problems.
      `
    },
    {
      id: 'sat-ct2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Arc Length & Sector Area** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A circle has radius $12$. What is the arc length for a central angle of $\\\\frac{\\\\pi}{6}$?',
            options: ['$2\\\\pi$', '$6\\\\pi$', '$12\\\\pi$', '$\\\\frac{\\\\pi}{72}$'],
            correctAnswer: 0,
            explanation: '$s = r\\\\theta = 12 \\\\cdot \\\\frac{\\\\pi}{6} = 2\\\\pi$.'
          },
          {
            question: 'A sector has radius $5$ and area $\\\\frac{25\\\\pi}{4}$. What is the central angle in radians?',
            options: ['$\\\\frac{\\\\pi}{4}$', '$\\\\frac{\\\\pi}{2}$', '$\\\\pi$', '$\\\\frac{\\\\pi}{5}$'],
            correctAnswer: 1,
            explanation: '$A = \\\\frac{1}{2}r^2\\\\theta \\\\Rightarrow \\\\frac{25\\\\pi}{4} = \\\\frac{1}{2}(25)\\\\theta \\\\Rightarrow \\\\theta = \\\\frac{25\\\\pi/4}{25/2} = \\\\frac{\\\\pi}{2}$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct2-conversion',
      type: 'text' as const,
      content: `
## Conversion Practice — Degrees ↔ Radians

**Example:** Convert $150°$ to radians.

$$150 \\\\times \\\\frac{\\\\pi}{180} = \\\\frac{150\\\\pi}{180} = \\\\frac{5\\\\pi}{6}$$

**Example:** Convert $\\\\frac{3\\\\pi}{4}$ radians to degrees.

$$\\\\frac{3\\\\pi}{4} \\\\times \\\\frac{180}{\\\\pi} = \\\\frac{3 \\\\times 180}{4} = 135°$$

**Shortcut:** To convert degrees → radians, divide by 180 and multiply by $\\\\pi$. To go back, divide by $\\\\pi$ and multiply by 180.
      `
    },
    {
      id: 'sat-ct2-input',
      type: 'input-boxes' as const,
      content: `
**Compute each value (give exact answers as integers or simplified fractions).** 🧮

1) Convert $270°$ to radians. Enter the **numerator** when written as $\\\\frac{?\\\\pi}{2}$.

2) A circle has radius $4$ and arc length $6\\\\pi$. What is the central angle in degrees?

3) The area of a full circle with radius $10$ is $100\\\\pi$. What fraction of the area is a sector with central angle $72°$? Enter as a fraction (e.g. 1/5).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '270', '1/5'],
        hint1: '$270 \\\\times \\\\frac{\\\\pi}{180} = \\\\frac{270\\\\pi}{180} = \\\\frac{3\\\\pi}{2}$. Numerator is 3.',
        hint2: '$s = r\\\\theta \\\\Rightarrow 6\\\\pi = 4\\\\theta \\\\Rightarrow \\\\theta = \\\\frac{3\\\\pi}{2}$ rad $= 270°$.',
        hint3: '$\\\\frac{72}{360} = \\\\frac{1}{5}$ of the circle.',
        explanation: '1) $\\\\frac{3\\\\pi}{2}$. 2) $\\\\theta = \\\\frac{6\\\\pi}{4} = \\\\frac{3\\\\pi}{2}$ rad $= 270°$. 3) $\\\\frac{72}{360} = \\\\frac{1}{5}$.'
      }
    },
    {
      id: 'sat-ct2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each degree measure to its radian equivalent.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$120°$',
            options: ['$\\\\frac{\\\\pi}{3}$', '$\\\\frac{2\\\\pi}{3}$', '$\\\\frac{3\\\\pi}{4}$', '$\\\\frac{\\\\pi}{6}$']
          },
          {
            label: '$225°$',
            options: ['$\\\\frac{3\\\\pi}{4}$', '$\\\\frac{5\\\\pi}{4}$', '$\\\\frac{7\\\\pi}{6}$', '$\\\\frac{5\\\\pi}{6}$']
          },
          {
            label: '$330°$',
            options: ['$\\\\frac{11\\\\pi}{6}$', '$\\\\frac{7\\\\pi}{4}$', '$\\\\frac{5\\\\pi}{3}$', '$\\\\frac{11\\\\pi}{12}$']
          }
        ],
        correctAnswers: ['$\\\\frac{2\\\\pi}{3}$', '$\\\\frac{5\\\\pi}{4}$', '$\\\\frac{11\\\\pi}{6}$'],
        hint1: '$120 \\\\times \\\\frac{\\\\pi}{180} = \\\\frac{2\\\\pi}{3}$.',
        hint2: '$225 \\\\times \\\\frac{\\\\pi}{180} = \\\\frac{5\\\\pi}{4}$.',
        hint3: '$330 \\\\times \\\\frac{\\\\pi}{180} = \\\\frac{11\\\\pi}{6}$.',
        explanation: 'Divide the degree by 180 and simplify the fraction, then attach $\\\\pi$.'
      }
    },
    {
      id: 'sat-ct2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A circular track has a radius of $50$ meters. A runner completes $\\\\frac{3}{8}$ of a lap. How far did the runner travel, in meters?',
            options: ['$\\\\frac{75\\\\pi}{2}$', '$\\\\frac{25\\\\pi}{4}$', '$\\\\frac{150\\\\pi}{4}$', '$\\\\frac{100\\\\pi}{3}$'],
            correctAnswer: 0,
            explanation: 'Full circumference $= 2\\\\pi(50)=100\\\\pi$. $\\\\frac{3}{8}$ of that $= \\\\frac{3}{8}\\\\cdot100\\\\pi = \\\\frac{300\\\\pi}{8} = \\\\frac{75\\\\pi}{2}$.'
          },
          {
            question: 'A sector of a circle with radius $r$ has perimeter $5r$. What is the central angle in radians?',
            options: ['$2$', '$3$', '$5$', '$\\\\pi$'],
            correctAnswer: 1,
            explanation: 'Perimeter of a sector $= 2r + r\\\\theta = r(2 + \\\\theta)$. Set equal to $5r$: $2 + \\\\theta = 5$, so $\\\\theta = 3$ radians.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 3: Right Triangle Trig ──────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satCirclesTrigPart3Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct3-intro',
      type: 'text' as const,
      content: `
# 📏 Right Triangle Trigonometry

**Part 3 of 7 — SOH-CAH-TOA, Finding Sides & Angles, Special Triangles**

For a right triangle with an acute angle $\\\\theta$:

| Ratio | Formula | Mnemonic |
|-------|---------|----------|
| $\\\\sin \\\\theta$ | $\\\\frac{\\\\text{opposite}}{\\\\text{hypotenuse}}$ | **S**OH |
| $\\\\cos \\\\theta$ | $\\\\frac{\\\\text{adjacent}}{\\\\text{hypotenuse}}$ | **C**AH |
| $\\\\tan \\\\theta$ | $\\\\frac{\\\\text{opposite}}{\\\\text{adjacent}}$ | **T**OA |

Also: $\\\\tan \\\\theta = \\\\frac{\\\\sin \\\\theta}{\\\\cos \\\\theta}$

**SAT Tip:** The SAT provides the reference formulas for special triangles on the formula sheet, but memorizing them saves precious time.
      `
    },
    {
      id: 'sat-ct3-special',
      type: 'text' as const,
      content: `
## Special Right Triangles

**45-45-90 Triangle:**

$$\\\\text{sides} = 1 : 1 : \\\\sqrt{2}$$

If a leg is $a$, the hypotenuse is $a\\\\sqrt{2}$.

$\\\\sin 45° = \\\\cos 45° = \\\\frac{\\\\sqrt{2}}{2} \\\\qquad \\\\tan 45° = 1$

**30-60-90 Triangle:**

$$\\\\text{sides} = 1 : \\\\sqrt{3} : 2$$

- Short leg (opposite $30°$) $= x$
- Long leg (opposite $60°$) $= x\\\\sqrt{3}$
- Hypotenuse $= 2x$

| Angle | $\\\\sin$ | $\\\\cos$ | $\\\\tan$ |
|-------|---------|---------|---------|
| $30°$ | $\\\\frac{1}{2}$ | $\\\\frac{\\\\sqrt{3}}{2}$ | $\\\\frac{1}{\\\\sqrt{3}}$ |
| $60°$ | $\\\\frac{\\\\sqrt{3}}{2}$ | $\\\\frac{1}{2}$ | $\\\\sqrt{3}$ |
      `
    },
    {
      id: 'sat-ct3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** In a right triangle, $\\\\sin A = \\\\frac{5}{13}$. Find $\\\\cos A$.

1. Opposite $= 5$, hypotenuse $= 13$.
2. Adjacent $= \\\\sqrt{13^2 - 5^2} = \\\\sqrt{169 - 25} = \\\\sqrt{144} = 12$.
3. $\\\\cos A = \\\\frac{12}{13}$.

**Example 2:** A ladder leans against a wall, making a $60°$ angle with the ground. If the foot of the ladder is $4$ meters from the wall, how long is the ladder?

1. The side adjacent to $60°$ is $4$ m, and we want the hypotenuse.
2. $\\\\cos 60° = \\\\frac{4}{\\\\text{hyp}} \\\\Rightarrow \\\\frac{1}{2} = \\\\frac{4}{\\\\text{hyp}} \\\\Rightarrow \\\\text{hyp} = 8$ m.

**Example 3:** A square has side length $6$. What is the length of its diagonal?

The diagonal creates a $45\\\\text{-}45\\\\text{-}90$ triangle: $d = 6\\\\sqrt{2}$.
      `
    },
    {
      id: 'sat-ct3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Right Triangle Trig** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle $ABC$ with right angle at $C$, $BC = 8$ and $AC = 15$. What is $\\\\tan A$?',
            options: ['$\\\\frac{8}{15}$', '$\\\\frac{15}{8}$', '$\\\\frac{8}{17}$', '$\\\\frac{15}{17}$'],
            correctAnswer: 0,
            explanation: 'Angle $A$ sees opposite side $BC = 8$ and adjacent side $AC = 15$. $\\\\tan A = \\\\frac{\\\\text{opp}}{\\\\text{adj}} = \\\\frac{8}{15}$.'
          },
          {
            question: 'An equilateral triangle has side length $10$. What is the height?',
            options: ['$5$', '$5\\\\sqrt{2}$', '$5\\\\sqrt{3}$', '$10\\\\sqrt{3}$'],
            correctAnswer: 2,
            explanation: 'Splitting the equilateral triangle creates a $30\\\\text{-}60\\\\text{-}90$ triangle with short leg $5$. The height (long leg) is $5\\\\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct3-input',
      type: 'input-boxes' as const,
      content: `
**Compute each value.** 🧮

1) In a right triangle, the legs are $9$ and $12$. What is the hypotenuse?

2) $\\\\sin 30° + \\\\cos 60° = ?$ (enter a decimal or fraction)

3) A $45\\\\text{-}45\\\\text{-}90$ triangle has hypotenuse $10$. What is the length of each leg? Give the exact decimal (rounded to 2 places).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '1', '7.07'],
        hint1: '$\\\\sqrt{9^2 + 12^2} = \\\\sqrt{81+144} = \\\\sqrt{225} = 15$.',
        hint2: '$\\\\sin 30° = \\\\frac{1}{2}$ and $\\\\cos 60° = \\\\frac{1}{2}$. Sum $= 1$.',
        hint3: 'Leg $= \\\\frac{10}{\\\\sqrt{2}} = \\\\frac{10\\\\sqrt{2}}{2} = 5\\\\sqrt{2} \\\\approx 7.07$.',
        explanation: '1) Classic $3\\\\text{-}4\\\\text{-}5$ triple, scaled by $3$: $9\\\\text{-}12\\\\text{-}15$. 2) Both equal $\\\\frac{1}{2}$; sum is $1$. 3) $5\\\\sqrt{2} \\\\approx 7.07$.'
      }
    },
    {
      id: 'sat-ct3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each trig expression to its value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\sin 45°$',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{\\\\sqrt{2}}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$1$']
          },
          {
            label: '$\\\\cos 30°$',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{\\\\sqrt{2}}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$0$']
          },
          {
            label: '$\\\\tan 60°$',
            options: ['$1$', '$\\\\frac{\\\\sqrt{3}}{3}$', '$\\\\sqrt{3}$', '$\\\\frac{1}{2}$']
          }
        ],
        correctAnswers: ['$\\\\frac{\\\\sqrt{2}}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$\\\\sqrt{3}$'],
        hint1: '$\\\\sin 45°$ from the $1:1:\\\\sqrt{2}$ triangle gives $\\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}$.',
        hint2: '$\\\\cos 30°$ from the $1:\\\\sqrt{3}:2$ triangle: adjacent is $\\\\sqrt{3}$, hypotenuse is $2$.',
        hint3: '$\\\\tan 60° = \\\\frac{\\\\sqrt{3}}{1} = \\\\sqrt{3}$.',
        explanation: 'These values come directly from the special right triangle side ratios.'
      }
    },
    {
      id: 'sat-ct3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In a right triangle, $\\\\cos B = \\\\frac{3}{5}$. What is $\\\\sin B$?',
            options: ['$\\\\frac{3}{5}$', '$\\\\frac{4}{5}$', '$\\\\frac{5}{4}$', '$\\\\frac{4}{3}$'],
            correctAnswer: 1,
            explanation: 'Adjacent $= 3$, hypotenuse $= 5$, opposite $= \\\\sqrt{25 - 9} = 4$. $\\\\sin B = \\\\frac{4}{5}$. This is a $3\\\\text{-}4\\\\text{-}5$ triangle.'
          },
          {
            question: 'A ramp rises $6$ feet over a horizontal distance of $6\\\\sqrt{3}$ feet. What angle does the ramp make with the ground?',
            options: ['$30°$', '$45°$', '$60°$', '$90°$'],
            correctAnswer: 0,
            explanation: '$\\\\tan \\\\theta = \\\\frac{6}{6\\\\sqrt{3}} = \\\\frac{1}{\\\\sqrt{3}}$. Since $\\\\tan 30° = \\\\frac{1}{\\\\sqrt{3}}$, the angle is $30°$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 4: Unit Circle Basics ───────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satCirclesTrigPart4Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct4-intro',
      type: 'text' as const,
      content: `
# 🔵 Unit Circle Basics

**Part 4 of 7 — Radian Measure, Coordinates at Key Angles, Reference Angles**

The **unit circle** is a circle with radius $1$ centered at the origin. Any point on the unit circle has coordinates:

$$(\\\\cos \\\\theta, \\\\sin \\\\theta)$$

This means:
- $\\\\cos \\\\theta =$ the $x$-coordinate
- $\\\\sin \\\\theta =$ the $y$-coordinate

**Key angles and their coordinates:**

| $\\\\theta$ (rad) | $\\\\theta$ (deg) | $(\\\\cos \\\\theta,\\\\; \\\\sin \\\\theta)$ |
|-------------------|-------------------|--------------------------------------|
| $0$ | $0°$ | $(1, 0)$ |
| $\\\\frac{\\\\pi}{6}$ | $30°$ | $\\\\left(\\\\frac{\\\\sqrt{3}}{2}, \\\\frac{1}{2}\\\\right)$ |
| $\\\\frac{\\\\pi}{4}$ | $45°$ | $\\\\left(\\\\frac{\\\\sqrt{2}}{2}, \\\\frac{\\\\sqrt{2}}{2}\\\\right)$ |
| $\\\\frac{\\\\pi}{3}$ | $60°$ | $\\\\left(\\\\frac{1}{2}, \\\\frac{\\\\sqrt{3}}{2}\\\\right)$ |
| $\\\\frac{\\\\pi}{2}$ | $90°$ | $(0, 1)$ |
      `
    },
    {
      id: 'sat-ct4-reference',
      type: 'text' as const,
      content: `
## Reference Angles

A **reference angle** is the acute angle formed between the terminal side and the $x$-axis.

| Quadrant | Reference angle formula | $\\\\sin$ | $\\\\cos$ |
|----------|------------------------|---------|---------|
| I ($0°$–$90°$) | $\\\\theta_{\\\\text{ref}} = \\\\theta$ | $+$ | $+$ |
| II ($90°$–$180°$) | $\\\\theta_{\\\\text{ref}} = 180° - \\\\theta$ | $+$ | $-$ |
| III ($180°$–$270°$) | $\\\\theta_{\\\\text{ref}} = \\\\theta - 180°$ | $-$ | $-$ |
| IV ($270°$–$360°$) | $\\\\theta_{\\\\text{ref}} = 360° - \\\\theta$ | $-$ | $+$ |

**Worked Example:** Find $\\\\cos 150°$.

1. $150°$ is in Quadrant II; reference angle $= 180° - 150° = 30°$.
2. $\\\\cos 30° = \\\\frac{\\\\sqrt{3}}{2}$.
3. Cosine is **negative** in QII: $\\\\cos 150° = -\\\\frac{\\\\sqrt{3}}{2}$.
      `
    },
    {
      id: 'sat-ct4-sign-pattern',
      type: 'text' as const,
      content: `
## Sign Patterns — "All Students Take Calculus"

A handy mnemonic for which trig functions are positive:

| Quadrant | Positive functions | Mnemonic |
|----------|-------------------|----------|
| I | **All** ($\\\\sin$, $\\\\cos$, $\\\\tan$) | **A**ll |
| II | $\\\\sin$ only | **S**tudents |
| III | $\\\\tan$ only | **T**ake |
| IV | $\\\\cos$ only | **C**alculus |

**Example:** $\\\\sin 210°$
1. QII​I; reference angle $= 210° - 180° = 30°$.
2. $\\\\sin 30° = \\\\frac{1}{2}$.
3. Sine is negative in QIII: $\\\\sin 210° = -\\\\frac{1}{2}$.
      `
    },
    {
      id: 'sat-ct4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Unit Circle** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What are the coordinates of the point at $\\\\frac{5\\\\pi}{6}$ on the unit circle?',
            options: ['$\\\\left(-\\\\frac{\\\\sqrt{3}}{2}, \\\\frac{1}{2}\\\\right)$', '$\\\\left(\\\\frac{\\\\sqrt{3}}{2}, -\\\\frac{1}{2}\\\\right)$', '$\\\\left(-\\\\frac{1}{2}, \\\\frac{\\\\sqrt{3}}{2}\\\\right)$', '$\\\\left(-\\\\frac{\\\\sqrt{3}}{2}, -\\\\frac{1}{2}\\\\right)$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{5\\\\pi}{6} = 150°$ is in QII. Reference angle $= 30°$. $\\\\cos 150° = -\\\\frac{\\\\sqrt{3}}{2}$ (neg in QII), $\\\\sin 150° = \\\\frac{1}{2}$ (pos in QII).'
          },
          {
            question: 'If $\\\\sin \\\\theta = -\\\\frac{\\\\sqrt{2}}{2}$ and $\\\\cos \\\\theta > 0$, in which quadrant does $\\\\theta$ lie?',
            options: ['I', 'II', 'III', 'IV'],
            correctAnswer: 3,
            explanation: 'Sine is negative and cosine is positive only in Quadrant IV. (Think: "Calculus" — $\\\\cos$ is positive in QIV.)'
          }
        ]
      }
    },
    {
      id: 'sat-ct4-input',
      type: 'input-boxes' as const,
      content: `
**Find each value. Enter as a simplified fraction or integer.** 🧮

1) $\\\\cos 0° = ?$

2) $\\\\sin 270° = ?$

3) What is the reference angle for $315°$ (in degrees)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-1', '45'],
        hint1: 'The point at $0°$ on the unit circle is $(1, 0)$. $\\\\cos 0° = x$-coordinate $= 1$.',
        hint2: 'The point at $270°$ is $(0, -1)$. $\\\\sin 270° = y$-coordinate $= -1$.',
        hint3: '$315°$ is in QIV. Reference angle $= 360° - 315° = 45°$.',
        explanation: '1) $(1,0)$ → $\\\\cos = 1$. 2) $(0,-1)$ → $\\\\sin = -1$. 3) $360 - 315 = 45°$.'
      }
    },
    {
      id: 'sat-ct4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each angle to its sine value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\sin 120°$',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{1}{2}$']
          },
          {
            label: '$\\\\sin 240°$',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{1}{2}$']
          },
          {
            label: '$\\\\sin 330°$',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{1}{2}$']
          }
        ],
        correctAnswers: ['$\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{\\\\sqrt{3}}{2}$', '$-\\\\frac{1}{2}$'],
        hint1: '$120°$ is in QII, ref angle $60°$. Sin is positive in QII: $\\\\sin 120° = \\\\frac{\\\\sqrt{3}}{2}$.',
        hint2: '$240°$ is in QIII, ref angle $60°$. Sin is negative in QIII: $\\\\sin 240° = -\\\\frac{\\\\sqrt{3}}{2}$.',
        hint3: '$330°$ is in QIV, ref angle $30°$. Sin is negative in QIV: $\\\\sin 330° = -\\\\frac{1}{2}$.',
        explanation: 'Use reference angles and sign rules (ASTC) to evaluate each.'
      }
    },
    {
      id: 'sat-ct4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If the terminal side of angle $\\\\theta$ in standard position passes through the point $\\\\left(-\\\\frac{1}{2}, \\\\frac{\\\\sqrt{3}}{2}\\\\right)$, what is $\\\\theta$?',
            options: ['$60°$', '$120°$', '$150°$', '$240°$'],
            correctAnswer: 1,
            explanation: 'The point $(-\\\\frac{1}{2}, \\\\frac{\\\\sqrt{3}}{2})$ lies on the unit circle in QII. $\\\\cos\\\\theta=-\\\\frac{1}{2}$ and $\\\\sin\\\\theta=\\\\frac{\\\\sqrt{3}}{2}$. Reference angle is $60°$, so $\\\\theta = 180° - 60° = 120°$.'
          },
          {
            question: 'What is the exact value of $\\\\cos\\\\frac{7\\\\pi}{4}$?',
            options: ['$-\\\\frac{\\\\sqrt{2}}{2}$', '$\\\\frac{\\\\sqrt{2}}{2}$', '$-\\\\frac{1}{2}$', '$\\\\frac{1}{2}$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{7\\\\pi}{4} = 315°$ is in QIV. Reference angle $= 45°$. Cosine is positive in QIV: $\\\\cos 315° = \\\\frac{\\\\sqrt{2}}{2}$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 5: Trig on the SAT ─────────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satCirclesTrigPart5Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct5-intro',
      type: 'text' as const,
      content: `
# 🎯 Trig on the SAT

**Part 5 of 7 — Complementary Angles, Pythagorean Identity & SAT Favorites**

Two high-frequency SAT trig concepts:

**1. Complementary Angle Relationship:**

If $A + B = 90°$, then:

$$\\\\sin A = \\\\cos B \\\\qquad \\\\text{and} \\\\qquad \\\\cos A = \\\\sin B$$

This comes from the fact that in a right triangle, the two acute angles add to $90°$, and one angle's opposite side is the other angle's adjacent side.

**2. Pythagorean Identity:**

$$\\\\sin^2 \\\\theta + \\\\cos^2 \\\\theta = 1$$

This is always true — for every angle. Two useful rearrangements:

$$\\\\sin^2 \\\\theta = 1 - \\\\cos^2 \\\\theta \\\\qquad \\\\cos^2 \\\\theta = 1 - \\\\sin^2 \\\\theta$$
      `
    },
    {
      id: 'sat-ct5-complementary',
      type: 'text' as const,
      content: `
## Complementary Angles — Worked Examples

**Example 1:** If $\\\\sin 32° = 0.53$, what is $\\\\cos 58°$?

Since $32° + 58° = 90°$, they are complementary.

$$\\\\cos 58° = \\\\sin 32° = 0.53$$

**Example 2:** In right triangle $PQR$ with a right angle at $Q$, $\\\\sin P = \\\\frac{4}{5}$. What is $\\\\cos R$?

Angles $P$ and $R$ are complementary ($P + R = 90°$), so: $\\\\cos R = \\\\sin P = \\\\frac{4}{5}$.

---

**SAT Tip:** If a question says "$\\\\sin x° = \\\\cos y°$," immediately conclude $x + y = 90$ (assuming $0 < x, y < 90$).
      `
    },
    {
      id: 'sat-ct5-pythagorean',
      type: 'text' as const,
      content: `
## Pythagorean Identity — Worked Examples

**Example 1:** If $\\\\cos \\\\theta = \\\\frac{3}{5}$ and $\\\\theta$ is in Quadrant I, find $\\\\sin \\\\theta$.

$$\\\\sin^2 \\\\theta = 1 - \\\\cos^2 \\\\theta = 1 - \\\\frac{9}{25} = \\\\frac{16}{25}$$
$$\\\\sin \\\\theta = \\\\frac{4}{5} \\\\quad (\\\\text{positive in QI})$$

**Example 2:** Simplify $\\\\frac{\\\\sin^2 x + \\\\cos^2 x}{\\\\cos x}$.

$$= \\\\frac{1}{\\\\cos x} = \\\\sec x$$

**Example 3:** If $\\\\sin \\\\theta = 0.6$, what is $\\\\sin^2 \\\\theta + \\\\cos^2 \\\\theta$?

$$= 1 \\\\quad \\\\text{(always, by identity)}$$

The SAT might try to distract you — don't compute; just recognize the identity.
      `
    },
    {
      id: 'sat-ct5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — SAT Trig Concepts** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\sin(3x + 10)° = \\\\cos(2x - 5)°$, what is $x$?',
            options: ['$15$', '$17$', '$19$', '$25$'],
            correctAnswer: 1,
            explanation: 'Since $\\\\sin A = \\\\cos B$ when $A + B = 90$: $(3x+10) + (2x-5) = 90 \\\\Rightarrow 5x + 5 = 90 \\\\Rightarrow 5x = 85 \\\\Rightarrow x = 17$.'
          },
          {
            question: 'If $\\\\sin \\\\theta = \\\\frac{5}{13}$ and $\\\\theta$ is acute, what is $\\\\cos \\\\theta$?',
            options: ['$\\\\frac{8}{13}$', '$\\\\frac{12}{13}$', '$\\\\frac{5}{12}$', '$\\\\frac{1}{13}$'],
            correctAnswer: 1,
            explanation: '$\\\\cos^2 \\\\theta = 1 - \\\\frac{25}{169} = \\\\frac{144}{169}$. $\\\\cos \\\\theta = \\\\frac{12}{13}$ (positive since $\\\\theta$ is acute). This is a $5\\\\text{-}12\\\\text{-}13$ right triangle.'
          }
        ]
      }
    },
    {
      id: 'sat-ct5-input',
      type: 'input-boxes' as const,
      content: `
**Compute each value.** 🧮

1) If $\\\\sin(2x)° = \\\\cos(x + 15)°$ and both angles are acute, what is $x$?

2) If $\\\\cos \\\\theta = 0.8$, what is $\\\\sin^2 \\\\theta$? (Enter as a decimal.)

3) $\\\\sin^2 40° + \\\\cos^2 40° = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '0.36', '1'],
        hint1: 'Complementary: $2x + (x + 15) = 90 \\\\Rightarrow 3x + 15 = 90 \\\\Rightarrow x = 25$.',
        hint2: '$\\\\sin^2 \\\\theta = 1 - \\\\cos^2 \\\\theta = 1 - 0.64 = 0.36$.',
        hint3: 'The Pythagorean identity says this always equals $1$.',
        explanation: '1) $3x = 75$, $x = 25$. 2) $1 - 0.8^2 = 0.36$. 3) Always $1$.'
      }
    },
    {
      id: 'sat-ct5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its equivalent.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\cos 75°$',
            options: ['$\\\\sin 15°$', '$\\\\sin 75°$', '$\\\\cos 15°$', '$\\\\tan 75°$']
          },
          {
            label: '$1 - \\\\sin^2 \\\\theta$',
            options: ['$\\\\sin^2 \\\\theta$', '$\\\\cos^2 \\\\theta$', '$\\\\tan^2 \\\\theta$', '$1$']
          },
          {
            label: '$\\\\sin 0°$',
            options: ['$0$', '$1$', '$-1$', '$\\\\frac{1}{2}$']
          }
        ],
        correctAnswers: ['$\\\\sin 15°$', '$\\\\cos^2 \\\\theta$', '$0$'],
        hint1: 'Complementary: $\\\\cos 75° = \\\\sin(90° - 75°) = \\\\sin 15°$.',
        hint2: 'Rearrange the Pythagorean identity: $\\\\cos^2 \\\\theta = 1 - \\\\sin^2 \\\\theta$.',
        hint3: 'At $0°$, the point on the unit circle is $(1, 0)$. $\\\\sin = y = 0$.',
        explanation: 'These are the three most common trig identities tested on the SAT.'
      }
    },
    {
      id: 'sat-ct5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle $DEF$, angle $F = 90°$ and $\\\\sin D = \\\\frac{7}{25}$. What is $\\\\cos E$?',
            options: ['$\\\\frac{7}{25}$', '$\\\\frac{24}{25}$', '$\\\\frac{7}{24}$', '$\\\\frac{18}{25}$'],
            correctAnswer: 0,
            explanation: 'Since $D + E = 90°$ in a right triangle, $\\\\cos E = \\\\sin D = \\\\frac{7}{25}$.'
          },
          {
            question: 'If $\\\\cos x = k$, which expression equals $\\\\sin^2 x$?',
            options: ['$k^2$', '$1 - k$', '$1 - k^2$', '$\\\\sqrt{1 - k^2}$'],
            correctAnswer: 2,
            explanation: 'By the Pythagorean identity: $\\\\sin^2 x = 1 - \\\\cos^2 x = 1 - k^2$. Note: $\\\\sqrt{1-k^2}$ would be $|\\\\sin x|$, not $\\\\sin^2 x$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 6: Circle Theorems & Tangent Lines ──────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satCirclesTrigPart6Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct6-intro',
      type: 'text' as const,
      content: `
# 🔶 Circle Theorems & Tangent Lines

**Part 6 of 7 — Inscribed Angles, Central Angles, Tangent-Radius Perpendicularity**

Key circle theorems tested on the SAT:

| Theorem | Statement |
|---------|-----------|
| Central angle | Central angle $=$ intercepted arc |
| Inscribed angle | Inscribed angle $= \\\\frac{1}{2}$ intercepted arc |
| Tangent-radius | A tangent line is $\\\\perp$ to the radius at the point of tangency |
| Two tangents | Tangent segments from an external point are **equal** in length |

**Central Angle vs. Inscribed Angle:**

If a central angle and an inscribed angle intercept the **same** arc, the central angle is **twice** the inscribed angle.

$$\\\\text{Central angle} = 2 \\\\times \\\\text{Inscribed angle}$$
      `
    },
    {
      id: 'sat-ct6-inscribed',
      type: 'text' as const,
      content: `
## Inscribed Angles — Worked Examples

**Example 1:** A central angle measures $80°$. An inscribed angle intercepts the same arc. What is the inscribed angle?

$$\\\\text{Inscribed} = \\\\frac{80°}{2} = 40°$$

**Example 2:** An inscribed angle in a semicircle?

Any angle inscribed in a semicircle intercepts a $180°$ arc.

$$\\\\text{Inscribed angle} = \\\\frac{180°}{2} = 90°$$

This is **Thales' theorem**: an angle inscribed in a semicircle is always a right angle.

**Example 3:** Two inscribed angles intercept the same arc. What can you say?

They are **equal** — inscribed angles that intercept the same arc are congruent.

---

**SAT Tip:** If you see a triangle inscribed in a circle with one side as a diameter, immediately mark a $90°$ angle.
      `
    },
    {
      id: 'sat-ct6-tangent',
      type: 'text' as const,
      content: `
## Tangent Lines — Key Properties

A **tangent** touches the circle at exactly one point and is perpendicular to the radius at that point.

**Worked Example:** Point $P$ is outside a circle with center $O$ and radius $5$. A tangent from $P$ touches the circle at $T$, and $OP = 13$. Find $PT$.

1. $OT \\\\perp PT$ (tangent-radius), so triangle $OTP$ is a right triangle.
2. $OT = 5$ (radius), $OP = 13$ (given).
3. By the Pythagorean theorem: $PT = \\\\sqrt{13^2 - 5^2} = \\\\sqrt{169 - 25} = \\\\sqrt{144} = 12$.

**Two tangents from one point:** If two tangent segments are drawn from the same external point, they have **equal length**.

So if $PA$ and $PB$ are tangent to a circle at $A$ and $B$, then $PA = PB$.
      `
    },
    {
      id: 'sat-ct6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Circle Theorems** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'An inscribed angle intercepts an arc of $140°$. What is the measure of the inscribed angle?',
            options: ['$70°$', '$140°$', '$280°$', '$35°$'],
            correctAnswer: 0,
            explanation: 'Inscribed angle $= \\\\frac{1}{2}$ of intercepted arc $= \\\\frac{140°}{2} = 70°$.'
          },
          {
            question: 'A tangent segment from an external point to a circle has length $8$. The radius is $6$. What is the distance from the external point to the center?',
            options: ['$14$', '$2$', '$10$', '$\\\\sqrt{100}$'],
            correctAnswer: 2,
            explanation: 'Right triangle with legs $8$ (tangent) and $6$ (radius): $d = \\\\sqrt{8^2 + 6^2} = \\\\sqrt{64+36} = \\\\sqrt{100} = 10$. Note that options C and D are the same value.'
          }
        ]
      }
    },
    {
      id: 'sat-ct6-input',
      type: 'input-boxes' as const,
      content: `
**Solve each problem.** 🧮

1) A central angle measures $110°$. What is the minor arc it intercepts (in degrees)?

2) An inscribed angle measures $55°$. What is the intercepted arc (in degrees)?

3) Triangle $ABC$ is inscribed in a circle with $BC$ as a diameter. What is angle $A$ (in degrees)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['110', '110', '90'],
        hint1: 'A central angle equals its intercepted arc.',
        hint2: 'Intercepted arc $= 2 \\\\times$ inscribed angle $= 2 \\\\times 55° = 110°$.',
        hint3: 'By Thales\\' theorem, an angle inscribed in a semicircle is $90°$.',
        explanation: '1) Central angle $=$ arc $= 110°$. 2) Arc $= 2(55°) = 110°$. 3) Thales: $90°$.'
      }
    },
    {
      id: 'sat-ct6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each scenario to the correct conclusion.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Angle inscribed in a semicircle',
            options: ['$45°$', '$90°$', '$180°$', 'Cannot determine']
          },
          {
            label: 'Tangent meets radius at point of tangency',
            options: ['Parallel', 'Perpendicular ($90°$)', 'Supplementary', 'Equal']
          },
          {
            label: 'Central angle of $50°$ → inscribed angle on same arc',
            options: ['$25°$', '$50°$', '$100°$', '$75°$']
          }
        ],
        correctAnswers: ['$90°$', 'Perpendicular ($90°$)', '$25°$'],
        hint1: 'Thales\\' theorem: inscribed in a semicircle means the intercepted arc is $180°$.',
        hint2: 'A tangent is always perpendicular to the radius at the point of tangency.',
        hint3: 'Inscribed angle $= \\\\frac{1}{2} \\\\times$ central angle $= \\\\frac{50}{2} = 25°$.',
        explanation: 'These three theorems appear on nearly every SAT that includes circle geometry.'
      }
    },
    {
      id: 'sat-ct6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In the figure, $PA$ and $PB$ are tangent to circle $O$, with $PA = 9$ and $OA = 12$. What is $OP$?',
            options: ['$15$', '$\\\\sqrt{63}$', '$21$', '$3\\\\sqrt{7}$'],
            correctAnswer: 0,
            explanation: '$OA \\\\perp PA$ (tangent-radius). In right triangle $OAP$: $OP = \\\\sqrt{OA^2 + PA^2} = \\\\sqrt{144 + 81} = \\\\sqrt{225} = 15$.'
          },
          {
            question: 'Points $A$, $B$, $C$ lie on a circle. If arc $AB = 100°$ and arc $BC = 130°$, what is the inscribed angle $\\\\angle ACB$?',
            options: ['$50°$', '$65°$', '$100°$', '$130°$'],
            correctAnswer: 0,
            explanation: 'Inscribed angle $\\\\angle ACB$ intercepts arc $AB = 100°$. Inscribed angle $= \\\\frac{100°}{2} = 50°$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 7: Review & Mixed Practice ──────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satCirclesTrigPart7Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct7-cheat-sheet',
      type: 'text' as const,
      content: `
# 🏁 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet, Mixed Problems & Exam Strategies**

## Formula Cheat Sheet

| Topic | Formula |
|-------|---------|
| Circle equation | $(x-h)^2 + (y-k)^2 = r^2$ |
| Arc length | $s = r\\\\theta$ |
| Sector area | $A = \\\\frac{1}{2}r^2\\\\theta$ |
| $\\\\sin$ | $\\\\frac{\\\\text{opposite}}{\\\\text{hypotenuse}}$ |
| $\\\\cos$ | $\\\\frac{\\\\text{adjacent}}{\\\\text{hypotenuse}}$ |
| $\\\\tan$ | $\\\\frac{\\\\text{opposite}}{\\\\text{adjacent}}$ |
| Pythagorean identity | $\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1$ |
| Complementary angles | $\\\\sin A = \\\\cos(90° - A)$ |
| Inscribed angle | $= \\\\frac{1}{2}$ intercepted arc |
| Tangent-radius | Perpendicular ($90°$) |

**Special triangles:**

| $45\\\\text{-}45\\\\text{-}90$ | $1 : 1 : \\\\sqrt{2}$ |
|---|---|
| $30\\\\text{-}60\\\\text{-}90$ | $1 : \\\\sqrt{3} : 2$ |
      `
    },
    {
      id: 'sat-ct7-strategies',
      type: 'text' as const,
      content: `
## SAT Exam Strategies for Circles & Trig

**1. Read the question twice.** Common traps:
- Asking for $r^2$ vs. $r$
- Giving degrees when you need radians (or vice-versa)
- Asking for an angle when you solve for a side

**2. Draw and label.** Sketch the circle or triangle directly on the test — label known sides, angles, and what you're solving for.

**3. Look for right triangles.** Tangent-radius? That's a right angle. Diameter as a chord? Thales gives you $90°$.

**4. Use process of elimination.** Trig ratios are between $-1$ and $1$ (for $\\\\sin$ and $\\\\cos$). If an answer is $> 1$, it can't be a sine or cosine value.

**5. Pythagorean triples save time:** $3\\\\text{-}4\\\\text{-}5$, $5\\\\text{-}12\\\\text{-}13$, $8\\\\text{-}15\\\\text{-}17$, $7\\\\text{-}24\\\\text{-}25$ and their multiples.
      `
    },
    {
      id: 'sat-ct7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Circle $C$ has equation $x^2 + y^2 - 4x + 10y + 20 = 0$. What is the radius?',
            options: ['$3$', '$9$', '$\\\\sqrt{20}$', '$5$'],
            correctAnswer: 0,
            explanation: 'Complete the square: $(x^2-4x+4)+(y^2+10y+25)=-20+4+25=9$. $(x-2)^2+(y+5)^2=9$. $r = 3$.'
          },
          {
            question: 'A sector of a circle with radius $9$ has area $\\\\frac{27\\\\pi}{2}$. What is the central angle in degrees?',
            options: ['$30°$', '$60°$', '$120°$', '$90°$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{1}{2}(81)\\\\theta = \\\\frac{27\\\\pi}{2} \\\\Rightarrow \\\\theta = \\\\frac{27\\\\pi}{81} = \\\\frac{\\\\pi}{3}$ radians $= 60°$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice Set 2** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle $XYZ$, $XZ = 10$, $YZ = 6$, and angle $Z = 90°$. What is $\\\\sin X$?',
            options: ['$\\\\frac{3}{5}$', '$\\\\frac{4}{5}$', '$\\\\frac{3}{4}$', '$\\\\frac{5}{3}$'],
            correctAnswer: 0,
            explanation: '$XZ = 10$ (hyp), $YZ = 6$ (opposite to $X$). $\\\\sin X = \\\\frac{6}{10} = \\\\frac{3}{5}$.'
          },
          {
            question: 'If $\\\\sin(5x)° = \\\\cos(x + 18)°$ and both angles are acute, what is $x$?',
            options: ['$10$', '$12$', '$15$', '$18$'],
            correctAnswer: 1,
            explanation: 'Complementary: $5x + (x+18) = 90$. $6x + 18 = 90$. $6x = 72$. $x = 12$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct7-input',
      type: 'input-boxes' as const,
      content: `
**Final mixed problems — enter your answers.** 🧮

1) What is the area of a circle with equation $(x+1)^2 + (y-3)^2 = 49$? Enter in terms of $\\\\pi$ — give just the coefficient (e.g., if the answer is $25\\\\pi$, enter 49).

2) A tangent to a circle of radius $7$ is drawn from a point $25$ units from the center. How long is the tangent segment?

3) $\\\\cos^2 72° + \\\\sin^2 72°  = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['49', '24', '1'],
        hint1: '$r^2 = 49$, so area $= \\\\pi r^2 = 49\\\\pi$. Coefficient is $49$.',
        hint2: 'Right triangle with hypotenuse $25$ and leg $7$: tangent $= \\\\sqrt{625-49} = \\\\sqrt{576} = 24$. This is a $7\\\\text{-}24\\\\text{-}25$ triple!',
        hint3: 'Pythagorean identity: always $1$.',
        explanation: '1) $49\\\\pi$. 2) $\\\\sqrt{25^2 - 7^2} = 24$. 3) $1$ by the Pythagorean identity.'
      }
    },
    {
      id: 'sat-ct7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick-fire review — choose the correct value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\sin 90°$',
            options: ['$0$', '$\\\\frac{1}{2}$', '$1$', 'undefined']
          },
          {
            label: 'Inscribed angle for arc $= 160°$',
            options: ['$40°$', '$80°$', '$160°$', '$320°$']
          },
          {
            label: '$\\\\tan 45°$',
            options: ['$0$', '$\\\\frac{\\\\sqrt{2}}{2}$', '$1$', '$\\\\sqrt{2}$']
          }
        ],
        correctAnswers: ['$1$', '$80°$', '$1$'],
        hint1: 'Unit circle: the point at $90°$ is $(0, 1)$. $\\\\sin = y = 1$.',
        hint2: 'Inscribed angle $= \\\\frac{1}{2}$ arc $= \\\\frac{160}{2} = 80°$.',
        hint3: '$\\\\tan 45° = \\\\frac{\\\\sin 45°}{\\\\cos 45°} = 1$ since both are $\\\\frac{\\\\sqrt{2}}{2}$.',
        explanation: 'These are core facts that should be instant recall on test day.'
      }
    },
    {
      id: 'sat-ct7-summary',
      type: 'text' as const,
      content: `
## 📋 What You've Mastered

Across all 7 parts you've covered:

- ✅ Circle equations — standard form, completing the square, center & radius
- ✅ Arc length & sector area with degree and radian formulas
- ✅ Right triangle trig — SOH-CAH-TOA and special triangles
- ✅ The unit circle — coordinates, reference angles, sign patterns
- ✅ SAT trig favorites — complementary angles and Pythagorean identity
- ✅ Circle theorems — inscribed angles, central angles, tangent-radius
- ✅ Mixed practice and exam strategies

**Next steps:**
- Time yourself: aim for each circle/trig problem in under 90 seconds.
- On test day, sketch diagrams — even rough drawings reveal right triangles and relationships.
- If stuck, try plugging in the answer choices. For trig questions, use special values ($30°$, $45°$, $60°$) to test.

Good luck on the SAT! 🚀
      `
    }
  ]
}
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Circles & Trigonometry lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done ✓")
