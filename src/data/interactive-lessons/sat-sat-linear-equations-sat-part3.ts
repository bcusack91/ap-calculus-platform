export const satLinearEquationsPart3Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le3-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 3 of 7 — Linear Inequalities**

The SAT tests inequalities in both algebraic and graphical form.

### Solving Linear Inequalities

Same rules as equations EXCEPT: **flip the inequality sign when multiplying or dividing by a negative**.

**Example:**
$$-3x + 6 > 12$$
$$-3x > 6$$
$$x < -2 \\quad \\text{(flip!)}$$

### Compound Inequalities

$$-1 < 2x + 3 \\leq 9$$

Subtract 3 from all parts: $-4 < 2x \\leq 6$

Divide by 2: $-2 < x \\leq 3$

---

### Worked Example 1

**Solve $5 - 2x \\geq 13$ and graph the solution.**

| Step | Work |
|------|------|
| Subtract 5 | $-2x \\geq 8$ |
| Divide by $-2$ (FLIP!) | $x \\leq -4$ |
| Graph | Solid dot at $-4$, shade left |

### Worked Example 2

**Solve the compound inequality $-7 < 3x + 2 \\leq 14$.**

| Step | Work |
|------|------|
| Subtract 2 from all parts | $-9 < 3x \\leq 12$ |
| Divide all by 3 | $-3 < x \\leq 4$ |
| Meaning | $x$ is between $-3$ (exclusive) and $4$ (inclusive) |

### Graphing Inequalities

- $y > mx + b$: shade **above** the line, **dashed** boundary
- $y \\leq mx + b$: shade **below** the line, **solid** boundary
- The solution to a system of inequalities is the **overlap** region

### SAT Pattern ⚠️

The SAT loves: "Which point is in the solution set of $y > 2x - 1$ and $y < -x + 5$?" Plug each answer choice into BOTH inequalities and check.`
    },
    {
      id: 'le3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inequalities — Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $-2x + 5 > 11$, which represents all solutions?',
            options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
            correctAnswer: 0,
            explanation: '$-2x > 6$ → $x < -3$ (flip the sign when dividing by $-2$). This is the most common SAT inequality trap.'
          },
          {
            question: 'Which point is in the solution set of $y > x + 1$ and $y < -x + 5$?',
            options: ['$(1, 3)$', '$(0, 0)$', '$(3, 1)$', '$(4, 4)$'],
            correctAnswer: 0,
            explanation: 'Check $(1, 3)$: Is $3 > 1 + 1 = 2$? Yes. Is $3 < -1 + 5 = 4$? Yes. Both satisfied. The other points fail at least one inequality.'
          },
          {
            question: 'If $-5 \\leq 3x + 1 < 10$, what is the range of $x$?',
            options: ['$-2 \\leq x < 3$', '$-2 < x \\leq 3$', '$-1 \\leq x < 3$', '$-2 \\leq x < 4$'],
            correctAnswer: 0,
            explanation: 'Subtract 1: $-6 \\leq 3x < 9$. Divide by 3: $-2 \\leq x < 3$. The inequality types (≤ vs <) are preserved when dividing by a positive number.'
          }
        ]
      }
    },
    {
      id: 'le3-text2',
      type: 'text' as const,
      content: `### Systems of Inequalities on the SAT

When two inequalities define a region, the SAT typically asks:
- "Which point is in the solution region?"
- "Which inequality represents the shaded region?"

### Worked Example 3

**A student needs at least 60 hours of study across two subjects. They spend $x$ hours on math and $y$ hours on science, with at most 40 hours on math. Write the system.**

| Constraint | Inequality |
|-----------|-----------|
| Total at least 60 | $x + y \\geq 60$ |
| Math at most 40 | $x \\leq 40$ |
| Both non-negative | $x \\geq 0,\\; y \\geq 0$ |

### Worked Example 4

**From a graph: a dashed line through $(0, 4)$ with slope $-2$, shaded below. Write the inequality.**

| Step | Work |
|------|------|
| Equation of line | $y = -2x + 4$ |
| Dashed = strict | Use $<$ or $>$ (not $\\leq$ or $\\geq$) |
| Shaded below | $y < -2x + 4$ |

> **SAT Tip:** Solid line = $\\leq$ or $\\geq$. Dashed line = $<$ or $>$. Always check the line type before selecting!`
    },
    {
      id: 'le3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Inequality Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bakery makes cakes ($c$) and pies ($p$). Each cake needs 3 cups of flour, each pie needs 2 cups. They have at most 24 cups. Which inequality models this?',
            options: ['$3c + 2p \\leq 24$', '$3c + 2p \\geq 24$', '$3c + 2p = 24$', '$2c + 3p \\leq 24$'],
            correctAnswer: 0,
            explanation: '"At most 24" means $\\leq 24$. 3 cups per cake and 2 cups per pie gives $3c + 2p \\leq 24$.'
          },
          {
            question: 'The graph shows a solid line $y = \\frac{1}{2}x + 3$ with shading above. Which inequality matches?',
            options: ['$y \\geq \\frac{1}{2}x + 3$', '$y > \\frac{1}{2}x + 3$', '$y \\leq \\frac{1}{2}x + 3$', '$y < \\frac{1}{2}x + 3$'],
            correctAnswer: 0,
            explanation: 'Solid line = includes boundary ($\\leq$ or $\\geq$). Shaded above = $y \\geq$. So $y \\geq \\frac{1}{2}x + 3$.'
          },
          {
            question: 'If $|x - 2| > 5$, which graph represents the solution?',
            options: ['$x < -3$ or $x > 7$', '$-3 < x < 7$', '$x < -7$ or $x > 3$', '$x < -5$ or $x > 5$'],
            correctAnswer: 0,
            explanation: '$|x - 2| > 5$ splits to $x - 2 > 5$ or $x - 2 < -5$, giving $x > 7$ or $x < -3$. The "greater than" case gives two separate regions.'
          }
        ]
      }
    },
    {
      id: 'le3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Inequality Symbols** 🔍\n\nMatch each phrase to the correct inequality symbol.',
      exercise: {
        dropdowns: [
          { label: '"at most 50"', options: ['$\\leq 50$', '$\\geq 50$', '$< 50$', '$> 50$'] },
          { label: '"more than 10"', options: ['$\\leq 10$', '$\\geq 10$', '$< 10$', '$> 10$'] },
          { label: '"no fewer than 25"', options: ['$\\leq 25$', '$\\geq 25$', '$< 25$', '$> 25$'] },
          { label: '"less than 100"', options: ['$\\leq 100$', '$\\geq 100$', '$< 100$', '$> 100$'] }
        ],
        correctAnswers: ['$\\leq 50$', '$> 10$', '$\\geq 25$', '$< 100$'],
        hint1: '"At most" means the maximum allowed — includes equality.',
        hint2: '"More than" is strictly greater — does NOT include equality.',
        hint3: '"No fewer than" means at least — includes equality.',
        explanation: '"At most 50" = $\\leq 50$. "More than 10" = $> 10$. "No fewer than 25" = $\\geq 25$. "Less than 100" = $< 100$.'
      }
    },
    {
      id: 'le3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Rule | Detail |
|------|--------|
| Flip when negative | Multiply/divide by a negative → reverse the inequality |
| Compound | Operate on all three parts simultaneously |
| Graphing: line type | Dashed = strict ($<$, $>$), Solid = inclusive ($\\leq$, $\\geq$) |
| Graphing: shading | Above = $>$ or $\\geq$, Below = $<$ or $\\leq$ |
| System overlap | Solution is where both shaded regions intersect |

- To check a point: plug into BOTH inequalities — both must be true
- "At most" = $\\leq$, "at least" = $\\geq$, "more than" = $>$, "fewer than" = $<$
- Compound inequalities preserve $\\leq$ vs $<$ when dividing by a positive`
    }
  ]
};
