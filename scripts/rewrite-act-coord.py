#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT Coordinate Geometry.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-coordinate-geometry-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-coordinate-geometry-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Coordinate Plane Basics ─────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actCoordGeomPart1Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg1-intro',
      type: 'text' as const,
      content: `
# 📍 Coordinate Plane Basics

**Part 1 of 7 — Plotting, Quadrants, Distance & Midpoint**

The coordinate plane is a two-dimensional surface formed by the intersection of a horizontal number line (the **x-axis**) and a vertical number line (the **y-axis**). Every point is described by an ordered pair $(x, y)$.

| Quadrant | Signs | Example |
|----------|-------|---------|
| I   | $(+, +)$ | $(3, 5)$ |
| II  | $(-, +)$ | $(-4, 2)$ |
| III | $(-, -)$ | $(-1, -6)$ |
| IV  | $(+, -)$ | $(7, -3)$ |

**Key facts:**
- Points on the **x-axis** have $y = 0$.
- Points on the **y-axis** have $x = 0$.
- The **origin** is $(0, 0)$.
      `
    },
    {
      id: 'act-cg1-distance',
      type: 'text' as const,
      content: `
## The Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$d = \\\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This comes directly from the **Pythagorean theorem** applied to the horizontal and vertical legs.

**Example 1:** Find the distance between $(1, 2)$ and $(4, 6)$.

$$d = \\\\sqrt{(4-1)^2 + (6-2)^2} = \\\\sqrt{9 + 16} = \\\\sqrt{25} = 5$$

**Example 2:** Find the distance between $(-3, 1)$ and $(5, -5)$.

$$d = \\\\sqrt{(5-(-3))^2 + (-5-1)^2} = \\\\sqrt{64 + 36} = \\\\sqrt{100} = 10$$

**ACT Tip:** When answer choices are integers, check whether the sum under the radical is a perfect square — it usually is on the ACT.
      `
    },
    {
      id: 'act-cg1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Distance Formula Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the distance between $(0, 0)$ and $(6, 8)$?',
            options: ['$8$', '$10$', '$14$', '$\\\\sqrt{48}$'],
            correctAnswer: 1,
            explanation: '$d = \\\\sqrt{36 + 64} = \\\\sqrt{100} = 10$.'
          },
          {
            question: 'Find the distance between $(2, -1)$ and $(-1, 3)$.',
            options: ['$7$', '$\\\\sqrt{7}$', '$5$', '$25$'],
            correctAnswer: 2,
            explanation: '$d = \\\\sqrt{(-3)^2 + 4^2} = \\\\sqrt{9 + 16} = \\\\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'act-cg1-midpoint',
      type: 'text' as const,
      content: `
## The Midpoint Formula

The midpoint of the segment joining $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$M = \\\\left(\\\\frac{x_1 + x_2}{2},\\\\; \\\\frac{y_1 + y_2}{2}\\\\right)$$

Simply **average** the $x$-coordinates and **average** the $y$-coordinates.

**Example 3:** Find the midpoint of $(2, 8)$ and $(6, 4)$.

$$M = \\\\left(\\\\frac{2+6}{2},\\\\; \\\\frac{8+4}{2}\\\\right) = (4, 6)$$

**Example 4:** The midpoint of $(x, 3)$ and $(7, 11)$ is $(5, 7)$. Find $x$.

$$\\\\frac{x + 7}{2} = 5 \\\\implies x + 7 = 10 \\\\implies x = 3$$

**ACT Tip:** The ACT sometimes asks you to find an endpoint given the midpoint and the other endpoint. Use the midpoint formula in reverse: $x_1 = 2M_x - x_2$.
      `
    },
    {
      id: 'act-cg1-input1',
      type: 'input-boxes' as const,
      content: `
**Distance & Midpoint Calculations** 🧮

1) Distance between $(3, 0)$ and $(0, 4)$?
2) Midpoint of $(1, 5)$ and $(9, 1)$: what is the x-coordinate?
3) Midpoint of $(-2, 6)$ and $(4, -2)$: what is the y-coordinate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '5', '2'],
        hint1: '$d = \\\\sqrt{9 + 16}$.',
        hint2: '$\\\\frac{1 + 9}{2}$.',
        hint3: '$\\\\frac{6 + (-2)}{2}$.',
        explanation: '1) $\\\\sqrt{9+16} = 5$. 2) $\\\\frac{10}{2} = 5$. 3) $\\\\frac{4}{2} = 2$.'
      }
    },
    {
      id: 'act-cg1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quadrant & Formula ID** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The point $(-5, 3)$ is in Quadrant …',
            options: ['I', 'II', 'III', 'IV']
          },
          {
            label: 'The distance formula is derived from …',
            options: ['The slope formula', 'The Pythagorean theorem', 'The quadratic formula', 'The midpoint formula']
          },
          {
            label: 'The midpoint formula returns …',
            options: ['A distance', 'A slope', 'A point', 'An equation']
          }
        ],
        correctAnswers: ['II', 'The Pythagorean theorem', 'A point'],
        hint1: 'Negative $x$, positive $y$.',
        hint2: 'Think of the horizontal and vertical legs of a right triangle.',
        hint3: 'The midpoint is a location, not a number.',
        explanation: '$(-5,3)$ has negative $x$ and positive $y$ → Quadrant II. The distance formula comes from the Pythagorean theorem. The midpoint is a point (an ordered pair).'
      }
    },
    {
      id: 'act-cg1-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Point $A$ is at $(1, 2)$ and point $B$ is at $(7, 10)$. What is the midpoint of $\\\\overline{AB}$?',
            options: ['$(3, 5)$', '$(4, 6)$', '$(8, 12)$', '$(6, 8)$'],
            correctAnswer: 1,
            explanation: '$M = \\\\left(\\\\frac{1+7}{2}, \\\\frac{2+10}{2}\\\\right) = (4, 6)$.'
          },
          {
            question: 'The endpoints of a diameter of a circle are $(2, -3)$ and $(8, 5)$. What is the length of the radius?',
            options: ['$5$', '$10$', '$\\\\sqrt{10}$', '$2\\\\sqrt{10}$'],
            correctAnswer: 0,
            explanation: 'Diameter $= \\\\sqrt{(8-2)^2 + (5-(-3))^2} = \\\\sqrt{36+64} = 10$. Radius $= 10/2 = 5$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Slope & Linear Equations ────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actCoordGeomPart2Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg2-intro',
      type: 'text' as const,
      content: `
# 📈 Slope & Linear Equations

**Part 2 of 7 — Slope Formula, Slope-Intercept, Point-Slope, Parallel & Perpendicular**

The **slope** of a line through $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$m = \\\\frac{y_2 - y_1}{x_2 - x_1} = \\\\frac{\\\\text{rise}}{\\\\text{run}}$$

| Slope Type | Value | Visual |
|------------|-------|--------|
| Positive | $m > 0$ | Rising left → right |
| Negative | $m < 0$ | Falling left → right |
| Zero | $m = 0$ | Horizontal line |
| Undefined | $\\\\frac{a}{0}$ | Vertical line |

**Linear equation forms:**
- **Slope-intercept:** $y = mx + b$ (slope $m$, y-intercept $b$)
- **Point-slope:** $y - y_1 = m(x - x_1)$
- **Standard form:** $Ax + By = C$
      `
    },
    {
      id: 'act-cg2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Slope:** Find the slope through $(2, 3)$ and $(6, 11)$.

$$m = \\\\frac{11 - 3}{6 - 2} = \\\\frac{8}{4} = 2$$

**Example 2 — Slope-intercept:** A line has slope $3$ and y-intercept $-5$. Write its equation.

$$y = 3x - 5$$

**Example 3 — Point-slope:** Write the equation of the line through $(4, 1)$ with slope $-2$.

$$y - 1 = -2(x - 4) \\\\implies y = -2x + 9$$

**Parallel & Perpendicular:**
- **Parallel lines** have the **same slope**: $m_1 = m_2$.
- **Perpendicular lines** have **negative reciprocal slopes**: $m_1 \\\\cdot m_2 = -1$.

**Example 4:** A line has slope $\\\\frac{3}{4}$. A perpendicular line has slope $-\\\\frac{4}{3}$.

**ACT Tip:** If two answer choices have the same slope, neither can be perpendicular to a given line — eliminate both quickly.
      `
    },
    {
      id: 'act-cg2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Slope & Equations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the slope of the line through $(1, -2)$ and $(4, 7)$?',
            options: ['$-3$', '$3$', '$\\\\frac{1}{3}$', '$9$'],
            correctAnswer: 1,
            explanation: '$m = \\\\frac{7 - (-2)}{4 - 1} = \\\\frac{9}{3} = 3$.'
          },
          {
            question: 'Which equation is parallel to $y = 2x + 5$?',
            options: ['$y = -2x + 1$', '$y = \\\\frac{1}{2}x + 3$', '$y = 2x - 7$', '$y = -\\\\frac{1}{2}x + 5$'],
            correctAnswer: 2,
            explanation: 'Parallel lines share the same slope. $y = 2x - 7$ has slope $2$, matching the given line.'
          }
        ]
      }
    },
    {
      id: 'act-cg2-input1',
      type: 'input-boxes' as const,
      content: `
**Slope Calculations** 🧮

1) Slope through $(0, 4)$ and $(2, 10)$?
2) y-intercept of $y = -3x + 7$? (just the number)
3) If a line has slope $5$, its perpendicular has slope $-1/k$. What is $k$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '7', '5'],
        hint1: '$m = \\\\frac{10-4}{2-0}$.',
        hint2: 'In $y = mx + b$, the y-intercept is $b$.',
        hint3: 'Perpendicular slope is the negative reciprocal: $-\\\\frac{1}{5}$.',
        explanation: '1) $m = 6/2 = 3$. 2) $b = 7$. 3) The perpendicular slope is $-1/5$, so $k = 5$.'
      }
    },
    {
      id: 'act-cg2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Line Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A vertical line has … slope.',
            options: ['Zero', 'Undefined', 'Positive', 'Negative']
          },
          {
            label: 'Parallel lines have …',
            options: ['Negative reciprocal slopes', 'The same slope', 'Opposite slopes', 'Slopes that multiply to −1']
          },
          {
            label: 'In $y = mx + b$, the letter $b$ represents the …',
            options: ['slope', 'y-intercept', 'x-intercept', 'distance']
          }
        ],
        correctAnswers: ['Undefined', 'The same slope', 'y-intercept'],
        hint1: 'Vertical lines have $\\\\Delta x = 0$ in the denominator.',
        hint2: 'Same direction means same steepness.',
        hint3: 'Set $x = 0$ in $y = mx + b$.',
        explanation: 'Vertical lines have undefined slope (division by zero). Parallel lines share slopes. In slope-intercept form, $b$ is the y-intercept.'
      }
    },
    {
      id: 'act-cg2-perpworked',
      type: 'text' as const,
      content: `
## Perpendicular Lines — Full Example

**Problem:** Find the equation of the line perpendicular to $y = \\\\frac{2}{3}x + 4$ that passes through $(6, 1)$.

**Step 1:** The given slope is $\\\\frac{2}{3}$. The perpendicular slope is $m = -\\\\frac{3}{2}$.

**Step 2:** Use point-slope form with $(6, 1)$:

$$y - 1 = -\\\\frac{3}{2}(x - 6)$$

$$y - 1 = -\\\\frac{3}{2}x + 9$$

$$y = -\\\\frac{3}{2}x + 10$$

**ACT Tip:** Convert to slope-intercept form ($y = mx + b$) to match answer choices quickly.
      `
    },
    {
      id: 'act-cg2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line through $(3, k)$ and $(7, 12)$ has slope $2$. What is $k$?',
            options: ['$2$', '$4$', '$8$', '$6$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{12 - k}{7 - 3} = 2 \\\\implies 12 - k = 8 \\\\implies k = 4$.'
          },
          {
            question: 'Which line is perpendicular to $y = -\\\\frac{1}{4}x + 2$?',
            options: ['$y = -4x + 1$', '$y = \\\\frac{1}{4}x + 3$', '$y = 4x - 5$', '$y = -\\\\frac{1}{4}x + 7$'],
            correctAnswer: 2,
            explanation: 'Perpendicular slope $= -\\\\frac{1}{-1/4} = 4$. The line $y = 4x - 5$ has slope $4$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Graphing Lines & Inequalities ───────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actCoordGeomPart3Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg3-intro',
      type: 'text' as const,
      content: `
# 📊 Graphing Lines & Inequalities

**Part 3 of 7 — Intercepts, Graphing Methods, Shading Regions**

There are three standard ways to graph a line:

| Method | What You Need |
|--------|---------------|
| Slope-intercept | Slope $m$ and y-intercept $b$ |
| Intercept method | x-intercept and y-intercept |
| Table of values | Pick $x$-values, compute $y$ |

**Finding intercepts:**
- **x-intercept:** Set $y = 0$ and solve for $x$.
- **y-intercept:** Set $x = 0$ and solve for $y$.

**Example 1:** $3x + 2y = 12$

- x-intercept: $3x = 12 \\\\implies x = 4$ → point $(4, 0)$
- y-intercept: $2y = 12 \\\\implies y = 6$ → point $(0, 6)$
      `
    },
    {
      id: 'act-cg3-graphing',
      type: 'text' as const,
      content: `
## Graphing with Slope-Intercept Form

Given $y = mx + b$:

1. Plot the y-intercept $(0, b)$.
2. From that point, use the slope $m = \\\\frac{\\\\text{rise}}{\\\\text{run}}$ to find the next point.
3. Draw the line through both points.

**Example 2:** Graph $y = -\\\\frac{2}{3}x + 4$.

- Start at $(0, 4)$.
- Slope $= -\\\\frac{2}{3}$: go down 2, right 3 → $(3, 2)$.
- Draw a line through $(0, 4)$ and $(3, 2)$.

**Inequalities change two things:**
- $<$ or $>$: **dashed** line (boundary NOT included).
- $\\\\le$ or $\\\\ge$: **solid** line (boundary included).
- Shade **above** the line for $y > mx + b$ or $y \\\\ge mx + b$.
- Shade **below** the line for $y < mx + b$ or $y \\\\le mx + b$.

**ACT Tip:** To check which side to shade, test the point $(0, 0)$. If it satisfies the inequality, shade the side containing the origin.
      `
    },
    {
      id: 'act-cg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Intercepts & Graphing** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the x-intercept of $5x - 2y = 20$?',
            options: ['$(0, -10)$', '$(4, 0)$', '$(20, 0)$', '$(0, 4)$'],
            correctAnswer: 1,
            explanation: 'Set $y = 0$: $5x = 20 \\\\implies x = 4$. The x-intercept is $(4, 0)$.'
          },
          {
            question: 'For $y > 3x - 1$, the boundary line is …',
            options: ['Solid and shade below', 'Dashed and shade above', 'Solid and shade above', 'Dashed and shade below'],
            correctAnswer: 1,
            explanation: 'Strict inequality ($>$) means dashed line, and $y >$ means shade above.'
          }
        ]
      }
    },
    {
      id: 'act-cg3-input1',
      type: 'input-boxes' as const,
      content: `
**Finding Intercepts** 🧮

For each equation, find the requested intercept value.

1) y-intercept of $4x + y = 9$? (just the y-value)
2) x-intercept of $2x - 6y = 18$? (just the x-value)
3) y-intercept of $y = 5x - 15$? (just the y-value)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '9', '-15'],
        hint1: 'Set $x = 0$: $y = 9$.',
        hint2: 'Set $y = 0$: $2x = 18$.',
        hint3: 'Set $x = 0$: $y = -15$.',
        explanation: '1) $y = 9$. 2) $x = 9$. 3) $y = -15$. For each, substitute $0$ for the other variable.'
      }
    },
    {
      id: 'act-cg3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Inequality Graphing** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $y \\\\le 2x + 3$, the boundary line is …',
            options: ['Dashed', 'Solid', 'Dotted', 'No line']
          },
          {
            label: 'For $y \\\\le 2x + 3$, you shade …',
            options: ['Above the line', 'Below the line', 'Left of the line', 'Right of the line']
          },
          {
            label: 'To test which side to shade, a convenient point to test is …',
            options: ['$(1, 1)$', '$(0, 0)$', 'The y-intercept', 'Any point on the line']
          }
        ],
        correctAnswers: ['Solid', 'Below the line', '$(0, 0)$'],
        hint1: '$\\\\le$ includes equality, so the boundary is part of the solution.',
        hint2: '$y \\\\le$ means $y$ values are less than or equal to the line.',
        hint3: 'The origin is easy to substitute.',
        explanation: '$\\\\le$ gives a solid line. Shade below because $y$ is less than or equal to the expression. Test $(0, 0)$ for a quick check.'
      }
    },
    {
      id: 'act-cg3-systems',
      type: 'text' as const,
      content: `
## Systems of Inequalities

When two inequalities are graphed together, the **solution region** is where the shading **overlaps**.

**Example 3:** Graph the system:

$$y \\\\ge x - 1$$
$$y < -2x + 5$$

- First inequality: solid line through $(0, -1)$ with slope $1$; shade above.
- Second inequality: dashed line through $(0, 5)$ with slope $-2$; shade below.
- The solution is the region that satisfies **both** — the overlap area.

**ACT Tip:** On the ACT, they often ask which point is in the solution region. Plug each answer choice into **both** inequalities — the correct answer satisfies both.

| Test point | $y \\\\ge x - 1$? | $y < -2x + 5$? | In solution? |
|-----------|------------------|-----------------|-------------|
| $(0, 0)$ | $0 \\\\ge -1$ ✓ | $0 < 5$ ✓ | **Yes** |
| $(3, 0)$ | $0 \\\\ge 2$ ✗ | — | No |
      `
    },
    {
      id: 'act-cg3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line $2x + 3y = 12$ passes through which of the following points?',
            options: ['$(3, 2)$', '$(6, 2)$', '$(0, 6)$', '$(2, 3)$'],
            correctAnswer: 0,
            explanation: 'Test $(3, 2)$: $2(3) + 3(2) = 6 + 6 = 12$ ✓.'
          },
          {
            question: 'Which point is in the solution region of $y > x + 1$ AND $y < 5$?',
            options: ['$(0, 0)$', '$(0, 3)$', '$(3, 3)$', '$(0, 6)$'],
            correctAnswer: 1,
            explanation: 'Test $(0, 3)$: $3 > 0 + 1 = 1$ ✓ and $3 < 5$ ✓. Both inequalities satisfied.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Circles on the Coordinate Plane ────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actCoordGeomPart4Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg4-intro',
      type: 'text' as const,
      content: `
# ⭕ Circles on the Coordinate Plane

**Part 4 of 7 — Standard Form, Center & Radius, Completing the Square**

The **standard form** equation of a circle is:

$$(x - h)^2 + (y - k)^2 = r^2$$

- **Center:** $(h, k)$
- **Radius:** $r$

| Equation | Center | Radius |
|----------|--------|--------|
| $(x - 3)^2 + (y + 1)^2 = 16$ | $(3, -1)$ | $4$ |
| $x^2 + y^2 = 25$ | $(0, 0)$ | $5$ |
| $(x + 2)^2 + (y - 5)^2 = 9$ | $(-2, 5)$ | $3$ |

**Key insight:** Watch the signs! $(y + 1)$ means $k = -1$, and $(x + 2)$ means $h = -2$.
      `
    },
    {
      id: 'act-cg4-completing',
      type: 'text' as const,
      content: `
## Completing the Square for Circles

The ACT may give a circle in **general form**:

$$x^2 + y^2 + Dx + Ey + F = 0$$

Convert it by completing the square for both variables.

**Example 1:** Rewrite $x^2 + y^2 - 8x + 6y - 11 = 0$.

**Step 1:** Group terms: $(x^2 - 8x) + (y^2 + 6y) = 11$

**Step 2:** Complete each square:
- $x$: $\\\\left(\\\\frac{-8}{2}\\\\right)^2 = 16$
- $y$: $\\\\left(\\\\frac{6}{2}\\\\right)^2 = 9$

**Step 3:** Add to both sides:

$$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 11 + 16 + 9$$

$$(x - 4)^2 + (y + 3)^2 = 36$$

Center $= (4, -3)$, radius $= 6$. ✓

**ACT Tip:** On the ACT, you usually just need the center or radius — focus on completing the square correctly rather than graphing.
      `
    },
    {
      id: 'act-cg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Circle Equations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the center of $(x + 5)^2 + (y - 2)^2 = 49$?',
            options: ['$(5, -2)$', '$(-5, 2)$', '$(-5, -2)$', '$(5, 2)$'],
            correctAnswer: 1,
            explanation: '$(x + 5) = (x - (-5))$ so $h = -5$. $(y - 2)$ gives $k = 2$. Center $= (-5, 2)$.'
          },
          {
            question: 'What is the radius of $x^2 + y^2 = 81$?',
            options: ['$81$', '$\\\\sqrt{81}$', '$9$', 'Both B and C'],
            correctAnswer: 3,
            explanation: '$r^2 = 81 \\\\implies r = \\\\sqrt{81} = 9$. B and C are the same value.'
          }
        ]
      }
    },
    {
      id: 'act-cg4-input1',
      type: 'input-boxes' as const,
      content: `
**Circle Calculations** 🧮

Given $x^2 + y^2 - 4x + 10y + 20 = 0$, complete the square.

1) What is the x-coordinate of the center?
2) What is the y-coordinate of the center?
3) What is the radius?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-5', '3'],
        hint1: '$x^2 - 4x$: half of $-4$ is $-2$, squared is $4$. The center x-value is $2$.',
        hint2: '$y^2 + 10y$: half of $10$ is $5$, squared is $25$. That gives $(y + 5)^2$, so $k = -5$.',
        hint3: '$(x-2)^2 + (y+5)^2 = -20 + 4 + 25 = 9$. So $r = 3$.',
        explanation: '$(x-2)^2 + (y+5)^2 = 9$. Center $(2, -5)$, radius $= \\\\sqrt{9} = 3$.'
      }
    },
    {
      id: 'act-cg4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Circle Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $(x - h)^2 + (y - k)^2 = r^2$, the value $r^2$ represents the …',
            options: ['Radius', 'Diameter', 'Square of the radius', 'Circumference']
          },
          {
            label: 'When completing the square for $x^2 + 6x$, you add …',
            options: ['$3$', '$6$', '$9$', '$36$']
          },
          {
            label: 'A circle with center $(0, 0)$ and radius $7$ has equation …',
            options: ['$x^2 + y^2 = 7$', '$x^2 + y^2 = 14$', '$x^2 + y^2 = 49$', '$(x-7)^2 + (y-7)^2 = 0$']
          }
        ],
        correctAnswers: ['Square of the radius', '$9$', '$x^2 + y^2 = 49$'],
        hint1: 'The right side of the standard form is $r$ squared, not $r$ itself.',
        hint2: 'Half of $6$ is $3$, then square it.',
        hint3: '$r^2 = 49$.',
        explanation: 'The right side is $r^2$. Completing the square: $(6/2)^2 = 9$. At the origin with $r = 7$: $x^2 + y^2 = 49$.'
      }
    },
    {
      id: 'act-cg4-tangent',
      type: 'text' as const,
      content: `
## Tangent Lines & Point-on-Circle Problems

**Does a point lie on a circle?** Substitute it into the equation and check.

**Example 2:** Does $(3, 4)$ lie on $x^2 + y^2 = 25$?

$$3^2 + 4^2 = 9 + 16 = 25 \\\\; ✓$$

Yes, $(3, 4)$ is on the circle.

**Example 3:** Does $(1, 5)$ lie on $(x - 2)^2 + (y + 1)^2 = 36$?

$$(1 - 2)^2 + (5 + 1)^2 = 1 + 36 = 37 \\\\neq 36$$

No — $37 > 36$ means $(1,5)$ is **outside** the circle.

| Comparison | Location |
|-----------|----------|
| $= r^2$ | On the circle |
| $< r^2$ | Inside the circle |
| $> r^2$ | Outside the circle |

**ACT Tip:** This substitution test is fast and appears frequently on the ACT. No need for completing the square if the equation is already in standard form.
      `
    },
    {
      id: 'act-cg4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'After completing the square, $x^2 + y^2 + 2x - 14y + 25 = 0$ becomes $(x + 1)^2 + (y - 7)^2 = r^2$. What is $r$?',
            options: ['$3$', '$5$', '$25$', '$\\\\sqrt{25}$'],
            correctAnswer: 1,
            explanation: '$r^2 = -25 + 1 + 49 = 25$. So $r = 5$. Choices B and D are equivalent.'
          },
          {
            question: 'Which point lies INSIDE the circle $x^2 + y^2 = 100$?',
            options: ['$(6, 8)$', '$(10, 0)$', '$(7, 7)$', '$(5, 5)$'],
            correctAnswer: 3,
            explanation: 'Test $(5,5)$: $25 + 25 = 50 < 100$. Inside. $(6,8)$: $36+64=100$ (on). $(10,0)$: $100$ (on). $(7,7)$: $98 < 100$ also works, but $(5,5)$ is clearly inside.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Conic Sections Overview ─────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actCoordGeomPart5Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg5-intro',
      type: 'text' as const,
      content: `
# 🔵 Conic Sections Overview

**Part 5 of 7 — Parabola Vertex Form, Ellipses & Hyperbolas for the ACT**

A **conic section** is a curve obtained by slicing a cone with a plane. The four types are:

| Conic | Standard Form | Shape |
|-------|--------------|-------|
| Circle | $(x-h)^2 + (y-k)^2 = r^2$ | Round |
| Parabola | $y = a(x-h)^2 + k$ | U-shaped |
| Ellipse | $\\\\frac{(x-h)^2}{a^2} + \\\\frac{(y-k)^2}{b^2} = 1$ | Oval |
| Hyperbola | $\\\\frac{(x-h)^2}{a^2} - \\\\frac{(y-k)^2}{b^2} = 1$ | Two branches |

On the ACT, **parabolas** appear most often. Ellipses and hyperbolas are rare but worth recognizing.
      `
    },
    {
      id: 'act-cg5-parabola',
      type: 'text' as const,
      content: `
## Parabolas in Vertex Form

The vertex form of a parabola is:

$$y = a(x - h)^2 + k$$

- **Vertex:** $(h, k)$ — the highest or lowest point.
- If $a > 0$: opens **upward** (vertex is a minimum).
- If $a < 0$: opens **downward** (vertex is a maximum).
- $|a|$ controls the **width**: larger $|a|$ = narrower parabola.

**Example 1:** $y = 2(x - 3)^2 + 1$

- Vertex: $(3, 1)$
- Opens up (since $a = 2 > 0$)
- Narrower than $y = x^2$ (since $|a| = 2 > 1$)

**Example 2:** $y = -(x + 4)^2 + 9$

- Vertex: $(-4, 9)$
- Opens down (since $a = -1 < 0$)
- Maximum value is $y = 9$

**Axis of symmetry:** $x = h$ (vertical line through the vertex).

**ACT Tip:** The vertex tells you the max/min value immediately — no calculus needed!
      `
    },
    {
      id: 'act-cg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Parabola Properties** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the vertex of $y = 3(x + 2)^2 - 5$?',
            options: ['$(2, -5)$', '$(-2, -5)$', '$(3, -5)$', '$(-2, 5)$'],
            correctAnswer: 1,
            explanation: '$(x + 2) = (x - (-2))$, so $h = -2$. $k = -5$. Vertex $= (-2, -5)$.'
          },
          {
            question: 'The parabola $y = -4(x - 1)^2 + 7$ opens in which direction?',
            options: ['Upward', 'Downward', 'Left', 'Right'],
            correctAnswer: 1,
            explanation: '$a = -4 < 0$, so the parabola opens downward.'
          }
        ]
      }
    },
    {
      id: 'act-cg5-ellipse',
      type: 'text' as const,
      content: `
## Ellipses & Hyperbolas (ACT Basics)

**Ellipse:** $\\\\frac{(x-h)^2}{a^2} + \\\\frac{(y-k)^2}{b^2} = 1$

- Center: $(h, k)$
- The **larger denominator** determines the major axis direction.
- If $a^2 > b^2$: horizontal major axis (wider).
- If $b^2 > a^2$: vertical major axis (taller).

**Example 3:** $\\\\frac{x^2}{25} + \\\\frac{y^2}{9} = 1$

- Center: $(0, 0)$, $a = 5$, $b = 3$.
- Horizontal major axis, stretches $5$ units left/right and $3$ units up/down.

**Hyperbola:** $\\\\frac{(x-h)^2}{a^2} - \\\\frac{(y-k)^2}{b^2} = 1$

- Note the **minus sign** — this distinguishes it from an ellipse.
- Opens **left and right** when the $x$-term is positive.
- Opens **up and down** when the $y$-term is positive.

**ACT Tip:** On the ACT, you mainly need to **identify** the conic type and find the center/vertex. Deep analysis is rare.
      `
    },
    {
      id: 'act-cg5-input1',
      type: 'input-boxes' as const,
      content: `
**Conic Section Identification** 🧮

1) Vertex x-coordinate of $y = -(x - 6)^2 + 2$?
2) Vertex y-coordinate of $y = -(x - 6)^2 + 2$?
3) For $\\\\frac{x^2}{16} + \\\\frac{y^2}{4} = 1$, what is the value of $a$ (the larger semi-axis)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '2', '4'],
        hint1: 'In $y = a(x - h)^2 + k$, $h = 6$.',
        hint2: '$k = 2$.',
        hint3: '$a^2 = 16 \\\\implies a = 4$.',
        explanation: '1) $h = 6$. 2) $k = 2$. 3) $a = \\\\sqrt{16} = 4$, the semi-major axis length.'
      }
    },
    {
      id: 'act-cg5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Conic Type Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 + y^2 = 36$ is a …',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola']
          },
          {
            label: '$\\\\frac{x^2}{9} - \\\\frac{y^2}{4} = 1$ is a …',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola']
          },
          {
            label: '$y = 5(x-1)^2 + 3$ is a …',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola']
          }
        ],
        correctAnswers: ['Circle', 'Hyperbola', 'Parabola'],
        hint1: 'Both variables squared with equal coefficients and a plus sign.',
        hint2: 'A minus sign between the squared terms.',
        hint3: 'Only one variable is squared.',
        explanation: 'Equal squared terms with + → circle. Minus between squared terms → hyperbola. One squared variable → parabola.'
      }
    },
    {
      id: 'act-cg5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A parabola has vertex $(2, -3)$ and passes through $(4, 5)$. What is the value of $a$ in $y = a(x-2)^2 - 3$?',
            options: ['$1$', '$2$', '$4$', '$-2$'],
            correctAnswer: 1,
            explanation: 'Plug in $(4, 5)$: $5 = a(4-2)^2 - 3 = 4a - 3$. So $4a = 8$, $a = 2$.'
          },
          {
            question: 'The maximum value of $y = -(x + 1)^2 + 10$ is:',
            options: ['$-1$', '$1$', '$10$', '$-10$'],
            correctAnswer: 2,
            explanation: 'Since $a < 0$, the parabola opens down and the vertex gives the maximum. The vertex is $(-1, 10)$, so the max value is $y = 10$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Transformations ────────────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actCoordGeomPart6Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg6-intro',
      type: 'text' as const,
      content: `
# 🔄 Transformations on the Coordinate Plane

**Part 6 of 7 — Translations, Reflections, Rotations & Dilations**

A **transformation** changes a figure's position, size, or orientation. The four main types:

| Transformation | What Changes | Preserves Shape & Size? |
|---------------|-------------|------------------------|
| Translation | Position | Yes (rigid) |
| Reflection | Orientation | Yes (rigid) |
| Rotation | Orientation & position | Yes (rigid) |
| Dilation | Size | No (similar, not congruent) |

**Rigid motions** (translation, reflection, rotation) preserve distances and angles.
      `
    },
    {
      id: 'act-cg6-translations',
      type: 'text' as const,
      content: `
## Translations (Slides)

A translation shifts every point by the same amount.

$$(x, y) \\\\to (x + a,\\\\; y + b)$$

- $a > 0$: shift right. $a < 0$: shift left.
- $b > 0$: shift up. $b < 0$: shift down.

**Example 1:** Translate $(3, -2)$ by $\\\\langle -4, 5 \\\\rangle$.

$$(3 + (-4),\\\\; -2 + 5) = (-1, 3)$$

## Reflections (Flips)

| Reflect over | Rule |
|-------------|------|
| x-axis | $(x, y) \\\\to (x, -y)$ |
| y-axis | $(x, y) \\\\to (-x, y)$ |
| Line $y = x$ | $(x, y) \\\\to (y, x)$ |
| Origin | $(x, y) \\\\to (-x, -y)$ |

**Example 2:** Reflect $(4, -7)$ over the x-axis → $(4, 7)$.

**Example 3:** Reflect $(-3, 5)$ over the y-axis → $(3, 5)$.

**ACT Tip:** Reflection over the x-axis flips the $y$-sign. Reflection over the y-axis flips the $x$-sign. Just remember which coordinate changes.
      `
    },
    {
      id: 'act-cg6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Translations & Reflections** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Point $(5, -3)$ is translated by $\\\\langle -2, 4 \\\\rangle$. What are the new coordinates?',
            options: ['$(7, -7)$', '$(3, 1)$', '$(3, -7)$', '$(7, 1)$'],
            correctAnswer: 1,
            explanation: '$(5-2, -3+4) = (3, 1)$.'
          },
          {
            question: 'What is the reflection of $(-2, 6)$ over the x-axis?',
            options: ['$(2, 6)$', '$(-2, -6)$', '$(2, -6)$', '$(6, -2)$'],
            correctAnswer: 1,
            explanation: 'Reflecting over the x-axis: $(x, y) \\\\to (x, -y)$. So $(-2, 6) \\\\to (-2, -6)$.'
          }
        ]
      }
    },
    {
      id: 'act-cg6-rotations',
      type: 'text' as const,
      content: `
## Rotations about the Origin

| Rotation | Rule |
|----------|------|
| $90°$ counterclockwise | $(x, y) \\\\to (-y, x)$ |
| $180°$ | $(x, y) \\\\to (-x, -y)$ |
| $270°$ counterclockwise (= $90°$ clockwise) | $(x, y) \\\\to (y, -x)$ |

**Example 4:** Rotate $(3, 5)$ by $90°$ counterclockwise → $(-5, 3)$.

**Example 5:** Rotate $(-2, 4)$ by $180°$ → $(2, -4)$.

## Dilations (Resizing)

A dilation with center at the origin and scale factor $k$:

$$(x, y) \\\\to (kx, ky)$$

- $k > 1$: enlargement.
- $0 < k < 1$: reduction.
- $k = 1$: no change.

**Example 6:** Dilate $(4, -6)$ by scale factor $\\\\frac{1}{2}$ → $(2, -3)$.

**ACT Tip:** After a dilation by factor $k$, distances are multiplied by $|k|$ and areas are multiplied by $k^2$.
      `
    },
    {
      id: 'act-cg6-input1',
      type: 'input-boxes' as const,
      content: `
**Transformation Calculations** 🧮

1) Rotate $(4, 2)$ by $90°$ counterclockwise. What is the new x-coordinate?
2) Reflect $(7, -3)$ over the line $y = x$. What is the new x-coordinate?
3) Dilate $(6, 9)$ by scale factor $\\\\frac{1}{3}$. What is the new y-coordinate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '-3', '3'],
        hint1: '$(x,y) \\\\to (-y, x)$: the new x is $-y = -2$.',
        hint2: '$(x,y) \\\\to (y, x)$: the new x is $y = -3$.',
        hint3: 'Multiply: $9 \\\\cdot \\\\frac{1}{3} = 3$.',
        explanation: '1) $(-2, 4)$, new x = $-2$. 2) $(-3, 7)$, new x = $-3$. 3) $(2, 3)$, new y = $3$.'
      }
    },
    {
      id: 'act-cg6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Transformation Types** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Which transformation changes the size of a figure?',
            options: ['Translation', 'Reflection', 'Rotation', 'Dilation']
          },
          {
            label: 'Reflecting over the y-axis changes the sign of …',
            options: ['The x-coordinate', 'The y-coordinate', 'Both coordinates', 'Neither coordinate']
          },
          {
            label: 'A 180° rotation about the origin is equivalent to reflecting over …',
            options: ['The x-axis', 'The y-axis', 'The origin (both axes)', 'The line y = x']
          }
        ],
        correctAnswers: ['Dilation', 'The x-coordinate', 'The origin (both axes)'],
        hint1: 'Only one of these changes the size.',
        hint2: 'Over the y-axis: $(x,y) \\\\to (-x, y)$.',
        hint3: '$180°$: $(x,y) \\\\to (-x, -y)$ — both signs flip.',
        explanation: 'Dilation changes size. y-axis reflection flips the x-sign. $180°$ rotation flips both signs, equivalent to reflecting through the origin.'
      }
    },
    {
      id: 'act-cg6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Triangle $ABC$ has vertices $A(1,2)$, $B(4,6)$, $C(7,2)$. After a translation of $\\\\langle -3, 1 \\\\rangle$, what are the coordinates of $B\\'$?',
            options: ['$(1, 7)$', '$(7, 5)$', '$(1, 5)$', '$(7, 7)$'],
            correctAnswer: 0,
            explanation: '$B\\' = (4-3, 6+1) = (1, 7)$.'
          },
          {
            question: 'A figure is dilated by a factor of $3$ from the origin. If the original area was $5$ square units, what is the new area?',
            options: ['$15$', '$25$', '$45$', '$9$'],
            correctAnswer: 2,
            explanation: 'Area scales by $k^2 = 3^2 = 9$. New area $= 5 \\\\times 9 = 45$.'
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
export const actCoordGeomPart7Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet & Mixed ACT Coordinate Geometry Problems**

Here is your complete **cheat sheet** of coordinate geometry formulas for the ACT:

| Formula | Expression |
|---------|-----------|
| Distance | $d = \\\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
| Midpoint | $M = \\\\left(\\\\frac{x_1+x_2}{2}, \\\\frac{y_1+y_2}{2}\\\\right)$ |
| Slope | $m = \\\\frac{y_2-y_1}{x_2-x_1}$ |
| Slope-intercept | $y = mx + b$ |
| Point-slope | $y - y_1 = m(x - x_1)$ |
| Circle | $(x-h)^2 + (y-k)^2 = r^2$ |
| Parabola vertex | $y = a(x-h)^2 + k$ |
| Parallel slopes | $m_1 = m_2$ |
| Perpendicular slopes | $m_1 \\\\cdot m_2 = -1$ |

**Strategy for ACT Coordinate Geometry:**
1. Identify what formula you need.
2. Label known values clearly.
3. Plug in and simplify.
4. Watch for sign errors (they are the #1 mistake!).
      `
    },
    {
      id: 'act-cg7-review',
      type: 'text' as const,
      content: `
## Quick Review — Key Concepts

**Quadrants:** Signs of $(x, y)$ — I: $(+,+)$, II: $(-,+)$, III: $(-,-)$, IV: $(+,-)$.

**Slope ideas:**
- Horizontal line: $m = 0$, equation $y = c$.
- Vertical line: $m$ undefined, equation $x = c$.
- Parallel $\\\\implies$ same slope.
- Perpendicular $\\\\implies$ negative reciprocal slopes.

**Circles:** Complete the square to go from general to standard form. Center and radius come directly from $(x-h)^2 + (y-k)^2 = r^2$.

**Transformations summary:**

| Type | Rule |
|------|------|
| Translate by $\\\\langle a, b \\\\rangle$ | $(x+a, y+b)$ |
| Reflect over x-axis | $(x, -y)$ |
| Reflect over y-axis | $(-x, y)$ |
| Rotate $90°$ CCW | $(-y, x)$ |
| Rotate $180°$ | $(-x, -y)$ |
| Dilate by $k$ | $(kx, ky)$ |

**ACT Tip:** You have about 60 seconds per question. Don't derive formulas — memorize them!
      `
    },
    {
      id: 'act-cg7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the distance between $(-1, 4)$ and $(5, -4)$?',
            options: ['$6$', '$8$', '$10$', '$14$'],
            correctAnswer: 2,
            explanation: '$d = \\\\sqrt{(5-(-1))^2 + (-4-4)^2} = \\\\sqrt{36 + 64} = \\\\sqrt{100} = 10$.'
          },
          {
            question: 'A line passes through $(0, -2)$ and $(3, 4)$. What is the equation of this line?',
            options: ['$y = 2x - 2$', '$y = -2x - 2$', '$y = 2x + 2$', '$y = \\\\frac{1}{2}x - 2$'],
            correctAnswer: 0,
            explanation: '$m = \\\\frac{4-(-2)}{3-0} = \\\\frac{6}{3} = 2$. y-intercept is $-2$. So $y = 2x - 2$.'
          }
        ]
      }
    },
    {
      id: 'act-cg7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

1) Slope of the line through $(2, 5)$ and $(8, 17)$?
2) The midpoint of $(0, 0)$ and $(10, 6)$: what is the x-coordinate?
3) A circle has equation $(x-1)^2 + (y+3)^2 = 64$. What is the radius?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '8'],
        hint1: '$m = \\\\frac{17-5}{8-2} = \\\\frac{12}{6}$.',
        hint2: '$\\\\frac{0+10}{2} = 5$.',
        hint3: '$r = \\\\sqrt{64} = 8$.',
        explanation: '1) $m = 2$. 2) Midpoint x = $5$. 3) $r = 8$. Each uses a core formula directly.'
      }
    },
    {
      id: 'act-cg7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Formula Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find how far apart two points are, use the …',
            options: ['Slope formula', 'Distance formula', 'Midpoint formula', 'Quadratic formula']
          },
          {
            label: 'To find the halfway point between two locations, use the …',
            options: ['Slope formula', 'Distance formula', 'Midpoint formula', 'Point-slope form']
          },
          {
            label: '$y - y_1 = m(x - x_1)$ is called …',
            options: ['Slope-intercept form', 'Standard form', 'Point-slope form', 'Vertex form']
          }
        ],
        correctAnswers: ['Distance formula', 'Midpoint formula', 'Point-slope form'],
        hint1: 'Distance = how far apart.',
        hint2: 'Halfway = midpoint.',
        hint3: 'It uses a specific point $(x_1, y_1)$ and the slope $m$.',
        explanation: 'Distance formula for separation. Midpoint formula for the halfway point. Point-slope form uses a point and slope.'
      }
    },
    {
      id: 'act-cg7-mixed',
      type: 'text' as const,
      content: `
## Mixed ACT-Style Practice

Try these without a calculator — ACT coordinate geometry usually involves clean numbers.

| # | Problem | Answer |
|---|---------|--------|
| 1 | Midpoint of $(-4, 8)$ and $(6, -2)$? | $(1, 3)$ |
| 2 | Slope of line perpendicular to $y = \\\\frac{5}{2}x + 1$? | $-\\\\frac{2}{5}$ |
| 3 | Distance from origin to $(5, 12)$? | $13$ |
| 4 | Center of $x^2 + y^2 - 6x + 2y = 0$ after completing the square? | $(3, -1)$ |
| 5 | Reflect $(4, -9)$ over the y-axis? | $(-4, -9)$ |

**ACT Tip:** On test day, write down the formulas you've memorized before starting. This saves time and reduces errors under pressure.
      `
    },
    {
      id: 'act-cg7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions — Final Set** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The endpoints of a line segment are $(-3, 2)$ and $(5, 6)$. The segment is translated $4$ units to the right and $3$ units down. What is the midpoint of the translated segment?',
            options: ['$(1, 4)$', '$(5, 1)$', '$(5, 4)$', '$(1, 1)$'],
            correctAnswer: 1,
            explanation: 'Original midpoint: $(\\\\frac{-3+5}{2}, \\\\frac{2+6}{2}) = (1, 4)$. Translate: $(1+4, 4-3) = (5, 1)$. (Translation preserves midpoint relationships.)'
          },
          {
            question: 'A circle passes through $(3, 4)$ and has its center at the origin. What is the equation of the circle?',
            options: ['$x^2 + y^2 = 7$', '$x^2 + y^2 = 25$', '$x^2 + y^2 = 12$', '$(x-3)^2 + (y-4)^2 = 25$'],
            correctAnswer: 1,
            explanation: '$r^2 = 3^2 + 4^2 = 9 + 16 = 25$. Center at origin: $x^2 + y^2 = 25$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT Coordinate Geometry lessons …")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done ✓")
