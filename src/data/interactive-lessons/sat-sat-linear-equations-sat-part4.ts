export const satLinearEquationsPart4Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le4-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 4 of 7 — Parallel and Perpendicular Lines**

These concepts appear frequently in SAT geometry-meets-algebra questions.

### Parallel Lines

- Same slope, different y-intercepts
- $y = 3x + 2$ is parallel to $y = 3x - 5$

### Perpendicular Lines

- Slopes are **negative reciprocals**: $m_1 \\cdot m_2 = -1$
- $y = 2x + 1$ is perpendicular to $y = -\\frac{1}{2}x + 4$

### Finding the Equation of a Line

Given a point $(x_1, y_1)$ and slope $m$:

$$y - y_1 = m(x - x_1) \\quad \\text{(point-slope form)}$$

---

### Worked Example 1

**Find the line parallel to $y = -4x + 9$ through the point $(2, 1)$.**

| Step | Work |
|------|------|
| Same slope | $m = -4$ |
| Point-slope | $y - 1 = -4(x - 2)$ |
| Simplify | $y = -4x + 9$ |

Wait — same equation! This means $(2, 1)$ is actually ON the original line. Check: $1 = -4(2) + 9 = 1$ ✓

### Worked Example 2

**Find the line perpendicular to $y = 3x + 1$ passing through $(6, 2)$.**

| Step | Work |
|------|------|
| Original slope | $m = 3$ |
| Perpendicular slope | $m_{\\perp} = -1/3$ |
| Point-slope | $y - 2 = -\\frac{1}{3}(x - 6)$ |
| Simplify | $y = -\\frac{1}{3}x + 4$ |

### Midpoint and Distance

- **Midpoint**: $\\left(\\frac{x_1 + x_2}{2},\\, \\frac{y_1 + y_2}{2}\\right)$
- **Distance**: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$`
    },
    {
      id: 'le4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parallel & Perpendicular — Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which line is perpendicular to $y = -4x + 3$?',
            options: ['$y = \\frac{1}{4}x - 1$', '$y = -4x + 7$', '$y = 4x - 1$', '$y = -\\frac{1}{4}x + 2$'],
            correctAnswer: 0,
            explanation: 'The negative reciprocal of $-4$ is $1/4$. So the perpendicular line has slope $1/4$.'
          },
          {
            question: 'What is the midpoint of $(2, 5)$ and $(8, -1)$?',
            options: ['$(5, 2)$', '$(6, 4)$', '$(3, 3)$', '$(10, 4)$'],
            correctAnswer: 0,
            explanation: 'Midpoint $= ((2+8)/2,\\, (5+(-1))/2) = (5, 2)$.'
          },
          {
            question: 'Line $\\ell$ passes through $(0, 4)$ and is parallel to $2x + y = 7$. What is the equation of $\\ell$?',
            options: ['$y = -2x + 4$', '$y = 2x + 4$', '$y = -2x + 7$', '$y = \\frac{1}{2}x + 4$'],
            correctAnswer: 0,
            explanation: 'First, find the slope of $2x + y = 7$: $y = -2x + 7$, slope $= -2$. Parallel means same slope. Through $(0, 4)$: $y = -2x + 4$.'
          }
        ]
      }
    },
    {
      id: 'le4-text2',
      type: 'text' as const,
      content: `### Perpendicular Bisectors

A **perpendicular bisector** of a segment passes through its midpoint at a right angle. This combines midpoint, perpendicular slope, and point-slope concepts.

### Worked Example 3

**Find the perpendicular bisector of the segment from $A(1, 3)$ to $B(5, 7)$.**

| Step | Work |
|------|------|
| Midpoint | $M = ((1+5)/2,\\, (3+7)/2) = (3, 5)$ |
| Slope of $\\overline{AB}$ | $m = (7-3)/(5-1) = 1$ |
| Perpendicular slope | $m_{\\perp} = -1$ |
| Equation | $y - 5 = -1(x - 3)$ → $y = -x + 8$ |

### Worked Example 4

**The line $3x - 6y = 12$ is parallel to $kx + 4y = 8$. Find $k$.**

| Step | Work |
|------|------|
| Slope of first | $-6y = -3x + 12$ → $y = \\frac{1}{2}x - 2$ → $m_1 = 1/2$ |
| Slope of second | $4y = -kx + 8$ → $y = -\\frac{k}{4}x + 2$ → $m_2 = -k/4$ |
| Set equal | $1/2 = -k/4$ → $k = -2$ |

> **SAT Tip:** When comparing slopes from standard form, convert BOTH to slope-intercept. Don't try to compare standard form coefficients directly.`
    },
    {
      id: 'le4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Parallel & Perpendicular — Harder Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'The distance between $(0, 0)$ and $(a, a)$ is $10$. What is $a$ if $a > 0$?',
            options: ['$5\\sqrt{2}$', '$5$', '$10$', '$\\sqrt{10}$'],
            correctAnswer: 0,
            explanation: '$d = \\sqrt{a^2 + a^2} = \\sqrt{2a^2} = a\\sqrt{2} = 10$. So $a = 10/\\sqrt{2} = 5\\sqrt{2}$.'
          },
          {
            question: 'If line $p$ has equation $y = \\frac{2}{3}x + 1$ and line $q$ is perpendicular to $p$, what is the slope of $q$?',
            options: ['$-\\frac{3}{2}$', '$\\frac{3}{2}$', '$-\\frac{2}{3}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'The negative reciprocal of $2/3$ is $-3/2$. Check: $(2/3)(-3/2) = -1$ ✓.'
          },
          {
            question: 'Triangle $ABC$ has vertices $A(0,0)$, $B(6,0)$, $C(3,4)$. What is the perimeter?',
            options: ['$16$', '$6 + 2\\sqrt{5} + 5$', '$6 + 10$', '$6 + 5 + 5$'],
            correctAnswer: 3,
            explanation: '$AB = 6$. $BC = \\sqrt{9 + 16} = 5$. $AC = \\sqrt{9+16} = 5$. Perimeter $= 6 + 5 + 5 = 16$.'
          }
        ]
      }
    },
    {
      id: 'le4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify Line Relationships** 🔍\n\nFor each pair of lines, determine their relationship.',
      exercise: {
        dropdowns: [
          { label: '$y = 5x + 1$ and $y = 5x - 3$', options: ['Parallel', 'Perpendicular', 'Neither'] },
          { label: '$y = 2x$ and $y = -\\frac{1}{2}x + 4$', options: ['Parallel', 'Perpendicular', 'Neither'] },
          { label: '$y = 3x + 2$ and $y = -3x + 2$', options: ['Parallel', 'Perpendicular', 'Neither'] },
          { label: '$x + 2y = 6$ and $2x + 4y = 10$', options: ['Parallel', 'Perpendicular', 'Neither'] }
        ],
        correctAnswers: ['Parallel', 'Perpendicular', 'Neither', 'Parallel'],
        hint1: 'Parallel = same slope. Perpendicular = slopes multiply to $-1$.',
        hint2: 'For the third pair: $3 \\times (-3) = -9 \\neq -1$, so not perpendicular.',
        hint3: 'Convert the last pair to slope-intercept form to compare slopes.',
        explanation: 'Same slopes ($m = 5$) → parallel. $2 \\times (-1/2) = -1$ → perpendicular. $3 \\times (-3) = -9$, not $-1$, different slopes → neither. Both have slope $-1/2$ → parallel.'
      }
    },
    {
      id: 'le4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Relationship | Slope Condition | Example |
|-------------|----------------|---------|
| Parallel | $m_1 = m_2$ | $y = 3x + 1$ ∥ $y = 3x - 5$ |
| Perpendicular | $m_1 \\cdot m_2 = -1$ | $y = 2x$ ⊥ $y = -\\frac{1}{2}x$ |
| Neither | Slopes differ but product $\\neq -1$ | $y = 2x$ and $y = 3x$ |

- **Point-slope form** is your friend: $y - y_1 = m(x - x_1)$
- Always convert standard form to slope-intercept before comparing slopes
- Midpoint $= \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$
- Distance $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$`
    }
  ]
};
