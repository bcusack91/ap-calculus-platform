// Coordinate grid from -6 to 6 on both axes: origin at (160, 110), 15 px per unit.
const mkgmGrid =
  '<g class="fig-muted" stroke="currentColor" stroke-width="0.75"><path d="M70 20V200M85 20V200M100 20V200M115 20V200M130 20V200M145 20V200M175 20V200M190 20V200M205 20V200M220 20V200M235 20V200M250 20V200M70 20H250M70 35H250M70 50H250M70 65H250M70 80H250M70 95H250M70 125H250M70 140H250M70 155H250M70 170H250M70 185H250M70 200H250" fill="none"/></g>' +
  '<g stroke="currentColor" stroke-width="1.5"><line x1="62" y1="110" x2="260" y2="110"/><line x1="160" y1="12" x2="160" y2="208"/></g>' +
  '<g font-size="9" fill="currentColor" text-anchor="middle"><text x="70" y="121">−6</text><text x="100" y="121">−4</text><text x="130" y="121">−2</text><text x="190" y="121">2</text><text x="220" y="121">4</text><text x="250" y="121">6</text></g>' +
  '<g font-size="9" fill="currentColor" text-anchor="end"><text x="156" y="23">6</text><text x="156" y="53">4</text><text x="156" y="83">2</text><text x="156" y="143">−2</text><text x="156" y="173">−4</text><text x="156" y="203">−6</text></g>' +
  '<text x="266" y="114" font-size="12" fill="currentColor">x</text><text x="166" y="14" font-size="12" fill="currentColor">y</text>'

const mkgmSvgOpen = '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'

const mkgmPointsFigure = {
  svg:
    mkgmSvgOpen +
    mkgmGrid +
    '<g class="fig-accent" fill="currentColor"><circle cx="190" cy="65" r="4"/><circle cx="100" cy="95" r="4"/><circle cx="115" cy="185" r="4"/><circle cx="235" cy="140" r="4"/></g>' +
    '<g font-size="12" fill="currentColor" font-weight="bold"><text x="196" y="60">A</text><text x="90" y="90">B</text><text x="121" y="182">C</text><text x="241" y="137">D</text></g>' +
    '</svg>',
  alt: 'A coordinate grid from −6 to 6 on both axes, with grid lines every 1 unit and labels every 2 units. Point A is at (2, 3). Point B is at (−4, 1). Point C is at (−3, −5). Point D is at (5, −2).',
  caption: 'Figure 1. Four points on a coordinate grid. Each grid square is 1 unit.',
  size: 'md' as const,
}

const mkgmLineFigure = {
  svg:
    mkgmSvgOpen +
    mkgmGrid +
    '<g class="fig-accent"><line x1="122.5" y1="200" x2="212.5" y2="20" stroke="currentColor" stroke-width="2.5"/><circle cx="145" cy="155" r="4" fill="currentColor"/><circle cx="190" cy="65" r="4" fill="currentColor"/></g>' +
    '<g font-size="11" fill="currentColor"><text x="151" y="162">(−1, −3)</text><text x="197" y="70">(2, 3)</text></g>' +
    '</svg>',
  alt: 'A coordinate grid from −6 to 6 on both axes, with grid lines every 1 unit. A straight line rises from lower left to upper right and passes through the marked points (−1, −3) and (2, 3). It crosses the y-axis at (0, −1).',
  caption: 'Figure 2. A line through two marked points. Each grid square is 1 unit.',
  size: 'md' as const,
}

const mkgmDistanceFigure = {
  svg:
    mkgmSvgOpen +
    mkgmGrid +
    '<g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="175" y1="95" x2="220" y2="95"/><line x1="220" y1="95" x2="220" y2="35"/></g>' +
    '<g class="fig-accent"><line x1="175" y1="95" x2="220" y2="35" stroke="currentColor" stroke-width="2.5"/><circle cx="175" cy="95" r="4" fill="currentColor"/><circle cx="220" cy="35" r="4" fill="currentColor"/></g>' +
    '<g font-size="11" fill="currentColor"><text x="170" y="91" text-anchor="end">P(1, 1)</text><text x="226" y="34">Q(4, 5)</text></g>' +
    '</svg>',
  alt: 'A coordinate grid from −6 to 6 on both axes, with grid lines every 1 unit. Point P is at (1, 1) and point Q is at (4, 5), joined by a solid segment. Dashed lines form a right triangle under the segment: one dashed leg runs right from P to (4, 1), and the other runs up from (4, 1) to Q.',
  caption: 'Figure 3. The segment from $P$ to $Q$ with a right triangle drawn under it.',
  size: 'md' as const,
}

export const asvabMkGeometryMeasurementPart5Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm5-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 5 of 7 — The Coordinate Plane: Slope, Midpoint and Distance**

### Points and Quadrants

The **coordinate plane** is a grid made by two number lines: the horizontal **x-axis** and the vertical **y-axis**. They cross at the **origin**, $(0, 0)$.

Every point is an **ordered pair** $(x, y)$: first move left or right ($x$), then up or down ($y$). The point $(-4, 1)$ is 4 left and 1 up.

The axes split the plane into four **quadrants**, numbered counterclockwise starting at the upper right:

| Quadrant | Sign of $x$ | Sign of $y$ | Example |
|:---:|:---:|:---:|:---:|
| I (upper right) | $+$ | $+$ | $(3, 2)$ |
| II (upper left) | $-$ | $+$ | $(-3, 2)$ |
| III (lower left) | $-$ | $-$ | $(-3, -2)$ |
| IV (lower right) | $+$ | $-$ | $(3, -2)$ |

A point on an axis, such as $(0, 5)$ or $(-2, 0)$, is not in any quadrant.`
    },
    {
      id: 'mkgm5-mc-points',
      type: 'multiple-choice' as const,
      figure: mkgmPointsFigure,
      content: '**Reading points.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'Which point lies in Quadrant III?',
            options: ['Point A', 'Point B', 'Point C', 'Point D'],
            correctAnswer: 2,
            explanation: 'Quadrant III is the lower left, where both coordinates are negative. Point C is at $(-3, -5)$. A $(2, 3)$ is in Quadrant I, B $(-4, 1)$ in Quadrant II and D $(5, -2)$ in Quadrant IV.'
          },
          {
            question: 'What are the coordinates of point D?',
            options: ['$(-2, 5)$', '$(5, -2)$', '$(-5, 2)$', '$(2, -5)$'],
            correctAnswer: 1,
            explanation: 'D is 5 units right of the origin and 2 units down: $(5, -2)$. The $x$-coordinate always comes first, so $(-2, 5)$ has the numbers in the wrong order.'
          }
        ]
      }
    },
    {
      id: 'mkgm5-slope',
      type: 'text' as const,
      content: `## Slope: How Steep a Line Is

**Slope** $m$ is rise over run: how much $y$ changes for each step in $x$.

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

| Line | Slope |
|:---|:---|
| Rises left to right | positive |
| Falls left to right | negative |
| Horizontal ($y = 3$) | $0$ |
| Vertical ($x = 3$) | undefined (you would divide by zero) |

**Example 1.** Through $(1, 2)$ and $(5, 10)$: $m = \\frac{10 - 2}{5 - 1} = \\frac{8}{4} = 2$.

**Example 2.** Through $(-2, 7)$ and $(3, -3)$: $m = \\frac{-3 - 7}{3 - (-2)} = \\frac{-10}{5} = -2$. Subtract in the **same order** on top and bottom.

### Slope-intercept form: $y = mx + b$

In $y = mx + b$, the number in front of $x$ is the **slope** and $b$ is the **y-intercept**, where the line crosses the y-axis at $(0, b)$.

**Example 3.** $y = -2x + 3$ has slope $-2$ and crosses the y-axis at $(0, 3)$.

**Example 4.** Rewrite $6x + 2y = 8$: subtract $6x$ to get $2y = -6x + 8$, then divide by 2: $y = -3x + 4$. Slope $-3$, y-intercept $4$.

**Parallel lines** have the **same slope**. (Perpendicular lines have slopes that are negative reciprocals, such as $2$ and $-\\frac{1}{2}$.)`
    },
    {
      id: 'mkgm5-mc-line',
      type: 'multiple-choice' as const,
      figure: mkgmLineFigure,
      content: '**Slope from a graph.** 🎯 Use Figure 2.',
      exercise: {
        questions: [
          {
            question: 'What is the slope of the line?',
            options: ['$\\frac{1}{2}$', '$-2$', '$3$', '$2$'],
            correctAnswer: 3,
            explanation: 'From $(-1, -3)$ to $(2, 3)$ the line rises $3 - (-3) = 6$ while it runs $2 - (-1) = 3$, so $m = \\frac{6}{3} = 2$. $\\frac{1}{2}$ is run over rise (upside down), and the line rises, so the slope is not negative.'
          },
          {
            question: 'Which equation describes the line?',
            options: ['$y = 2x + 1$', '$y = -2x - 1$', '$y = 2x - 1$', '$y = \\frac{1}{2}x - 1$'],
            correctAnswer: 2,
            explanation: 'The slope is $2$ and the line crosses the y-axis at $(0, -1)$, so $y = 2x - 1$. Check: $x = 2$ gives $y = 3$. The equation $y = 2x + 1$ has the right slope but crosses the y-axis at $+1$.'
          }
        ]
      }
    },
    {
      id: 'mkgm5-dropdown-slope',
      type: 'dropdown-select' as const,
      content: '**Slope practice.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The slope of the line through $(-2, 5)$ and $(4, 5)$ is:',
            options: ['$5$', 'undefined', '$0$', '$1$'],
            correctAnswer: 2
          },
          {
            label: 'The slope of $y = -3x + 5$ is:',
            options: ['$-3$', '$5$', '$3$', '$-\\frac{1}{3}$'],
            correctAnswer: 0
          },
          {
            label: 'The y-intercept of $4x + 2y = 10$ is:',
            options: ['$10$', '$-2$', '$4$', '$5$'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['$0$', '$-3$', '$5$'],
        hint1: 'Both points have $y = 5$: the rise is zero.',
        hint2: 'In $y = mx + b$, the slope is the number in front of $x$.',
        hint3: 'Solve for $y$: $2y = -4x + 10$.',
        explanation: '$\\frac{5 - 5}{4 - (-2)} = \\frac{0}{6} = 0$: a horizontal line (a vertical line would be undefined). In $y = -3x + 5$ the slope is $-3$ and $5$ is the intercept. $4x + 2y = 10$ becomes $y = -2x + 5$, so the y-intercept is $5$; $-2$ is the slope.'
      }
    },
    {
      id: 'mkgm5-mid-dist',
      type: 'text' as const,
      content: `## Midpoint and Distance

### Midpoint: average the coordinates

$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Example.** The midpoint of $(-2, 4)$ and $(6, 0)$ is $\\left(\\frac{-2 + 6}{2}, \\frac{4 + 0}{2}\\right) = (2, 2)$.

### Distance: the Pythagorean theorem on a grid

Draw a right triangle under the segment. The legs are the change in $x$ and the change in $y$; the segment is the hypotenuse:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Example.** From $(-1, 1)$ to $(5, 9)$: the legs are $5 - (-1) = 6$ and $9 - 1 = 8$, so $d = \\sqrt{36 + 64} = \\sqrt{100} = 10$.

Look for the familiar right-triangle side sets **3-4-5**, **6-8-10**, **5-12-13** and **8-15-17**: they let you skip the square root.`
    },
    {
      id: 'mkgm5-input-distance',
      type: 'input-boxes' as const,
      figure: mkgmDistanceFigure,
      content: `**Distance from P to Q.** ✍️ Use Figure 3. Enter numbers only.

**1)** The length of the horizontal dashed leg:

**2)** The length of the vertical dashed leg:

**3)** The distance from $P$ to $Q$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '4', '5'],
        hint1: 'Horizontal leg: $4 - 1$.',
        hint2: 'Vertical leg: $5 - 1$.',
        hint3: '$\\sqrt{3^2 + 4^2}$.',
        explanation: '(1) $4 - 1 = 3$. (2) $5 - 1 = 4$. (3) $PQ = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$, a 3-4-5 right triangle.'
      }
    },
    {
      id: 'mkgm5-mc-mixed',
      type: 'multiple-choice' as const,
      content: '**Midpoint and parallel lines.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the midpoint of the segment from $(3, -2)$ to $(9, 6)$?',
            options: ['$(6, 2)$', '$(3, 4)$', '$(12, 4)$', '$(6, 4)$'],
            correctAnswer: 0,
            explanation: '$\\left(\\frac{3 + 9}{2}, \\frac{-2 + 6}{2}\\right) = (6, 2)$. $(12, 4)$ adds without dividing by 2, and $(3, 4)$ takes half the differences instead of averaging.'
          },
          {
            question: 'A line is parallel to $y = 4x - 7$. What is its slope?',
            options: ['$-4$', '$-\\frac{1}{4}$', '$4$', '$-7$'],
            correctAnswer: 2,
            explanation: 'Parallel lines have the same slope, and $y = 4x - 7$ has slope $4$. $-\\frac{1}{4}$ would be a perpendicular slope, and $-7$ is the y-intercept.'
          }
        ]
      }
    },
    {
      id: 'mkgm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $(x, y)$: across first, then up or down; quadrants I to IV go counterclockwise from the upper right
- **Slope** $= \\frac{y_2 - y_1}{x_2 - x_1}$, rise over run, subtracting in the same order
- Horizontal line: slope $0$; vertical line: slope undefined
- $y = mx + b$: $m$ is the slope, $b$ is the y-intercept; solve for $y$ first when the equation is in another form
- Parallel lines share a slope
- **Midpoint** = average of the coordinates; **distance** = Pythagorean theorem on the grid

> **Up Next:** Part 6 — test strategy and the traps that catch people on measurement questions.`
    }
  ]
};
