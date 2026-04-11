export const precalcSystemsPart4Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📊 Systems of Inequalities

**Part 4 of 7**

### Linear Inequalities in Two Variables

$$2x + y \\leq 6$$

The solution is a **half-plane** — all points on one side of the boundary line.

### Graphing Steps

1. **Graph the boundary** ($=$): solid if $\\leq/\\geq$, dashed if $</>$
2. **Test a point** (use $(0,0)$ if not on the line)
3. **Shade** the side that satisfies the inequality

### Example: $2x + y \\leq 6$

- Boundary: $y = -2x + 6$ (solid line)
- Test $(0,0)$: $0 + 0 = 0 \\leq 6$ ✓ → shade the origin side

### Systems of Inequalities

The solution is the **intersection** of all shaded regions — the overlap.

$$\\begin{cases} x + y \\leq 5 \\\\ x \\geq 0 \\\\ y \\geq 0 \\end{cases}$$

This gives a **triangular region** in the first quadrant.
      `
    },
    {
      id: 'p4-feasible',
      type: 'text' as const,
      content: `
## 🎯 Feasible Regions & Corner Points

### Bounded vs Unbounded

- **Bounded**: region is enclosed (polygon) — happens when enough constraints
- **Unbounded**: region extends to infinity

### Finding Corner Points

Corner points (vertices) are found by solving pairs of boundary equations simultaneously.

**Example**: $\\begin{cases} x+y \\leq 5 \\\\ 2x+y \\leq 8 \\\\ x \\geq 0, y \\geq 0 \\end{cases}$

Corner points:
- $(0,0)$: intersection of $x=0, y=0$
- $(4,0)$: intersection of $2x+y=8, y=0$
- $(3,2)$: intersection of $x+y=5, 2x+y=8$
- $(0,5)$: intersection of $x+y=5, x=0$

### Why Corner Points Matter

**Fundamental Theorem of Linear Programming**: The max/min of a linear function on a feasible region occurs at a **corner point**.
      `
    },
    {
      id: 'p4-lp',
      type: 'text' as const,
      content: `
## 💰 Linear Programming

### Optimize $P = 3x + 2y$ subject to:

$$\\begin{cases} x+y \\leq 5 \\\\ 2x+y \\leq 8 \\\\ x \\geq 0, y \\geq 0 \\end{cases}$$

**Evaluate $P$ at each corner point:**

| Corner | $P = 3x+2y$ |
|:-------|:------------|
| $(0,0)$ | $0$ |
| $(4,0)$ | $12$ |
| $(3,2)$ | $13$ ← **Maximum** |
| $(0,5)$ | $10$ |

**Maximum profit**: $P = 13$ at $(3, 2)$.

### Real-World Applications

- Manufacturing: maximize profit given resource constraints
- Nutrition: minimize cost while meeting dietary needs
- Scheduling: optimize efficiency under time limits
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Inequalities Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The boundary for $y > 2x+1$ is:',
            options: ['Dashed line', 'Solid line', 'No boundary', 'Dotted line'],
            correctAnswer: 0,
            explanation: 'Strict inequality ($>$, not $\\geq$) → dashed line (boundary not included).'
          },
          {
            question: 'Where does max/min of a linear objective function occur?',
            options: ['Center of region', 'At a corner point', 'On any edge', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Fundamental theorem: optimal value occurs at a vertex of the feasible region.'
          },
          {
            question: 'The feasible region for $x \\geq 0, y \\geq 0, x+y \\leq 4$ has how many corners?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 1,
            explanation: 'Corners: $(0,0), (4,0), (0,4)$ — a triangle has 3 vertices.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Linear Programming** 🧮

Maximize $P = 5x+4y$ with corners $(0,0), (3,0), (2,3), (0,4)$.

**1)** $P$ at $(2,3)$ = ?

**2)** $P$ at $(0,4)$ = ?

**3)** Maximum value of $P$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['22', '16', '22'],
        hint1: '$P = 5(2)+4(3) = 10+12$.',
        hint2: '$P = 5(0)+4(4) = 16$.',
        hint3: 'Compare all: $0, 15, 22, 16$.',
        explanation: '$(2,3)$: $22$. $(0,4)$: $16$. $(3,0)$: $15$. Max = $22$ at $(2,3)$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Inequality Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y \\leq 3$ shades:',
            options: ['Above $y=3$', 'Below $y=3$ (including)', 'Left of $y=3$', 'Right of $y=3$'],
            correctAnswer: 1
          },
          {
            label: 'A feasible region with finite area is called:',
            options: ['Bounded', 'Unbounded', 'Infeasible', 'Optimal'],
            correctAnswer: 0
          },
          {
            label: 'If no region satisfies all constraints:',
            options: ['Max is 0', 'System is infeasible', 'Use unbounded region', 'Ignore one constraint'],
            correctAnswer: 1
          },
          {
            label: 'The overlap of two half-planes is:',
            options: ['Always empty', 'A polygon', 'A region (possibly unbounded)', 'A line'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Below $y=3$ (including)', 'Bounded', 'System is infeasible', 'A region (possibly unbounded)'],
        hint1: '$y \\leq 3$ means $y$ values at or below 3.',
        hint2: 'Bounded = enclosed.',
        hint3: 'No overlap = no feasible solution.',
        explanation: '$y\\leq 3$: below (solid). Finite area: bounded. No overlap: infeasible. Two half-planes: region.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Minimize $C = 2x+3y$ at corners $(1,2), (4,1), (3,5)$:',
            options: ['$C=8$ at $(1,2)$', '$C=11$ at $(4,1)$', '$C=7$ at $(1,2)$', '$C=21$ at $(3,5)$'],
            correctAnswer: 0,
            explanation: '$(1,2)$: $2+6=8$. $(4,1)$: $8+3=11$. $(3,5)$: $6+15=21$. Min = $8$.'
          },
          {
            question: 'A strict inequality $y > 2x$ uses:',
            options: ['Solid line, shade above', 'Dashed line, shade above', 'Solid line, shade below', 'Dashed line, shade below'],
            correctAnswer: 1,
            explanation: 'Strict ($>$): dashed. $y > 2x$: shade above the line.'
          }
        ]
      }
    }
  ]
};
