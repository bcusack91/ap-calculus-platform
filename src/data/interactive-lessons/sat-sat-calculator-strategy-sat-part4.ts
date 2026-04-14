export const satCalcStrategyPart4Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs4-intro',
      type: 'text' as const,
      content: `# Inequalities & Restrictions in Desmos

**Part 4 of 7 — Shading, Domains, and Constraints**

### Graphing Inequalities
Desmos shades the solution region automatically:
- \`y > 2x + 1\` → shades above the line
- \`y ≤ -x + 3\` → shades below and on the line
- Use \`<\`, \`>\`, \`<=\`, \`>=\` on your keyboard

### Systems of Inequalities
Enter multiple inequalities. The **overlapping shaded region** is the solution set. Desmos uses different colors for each, making the overlap visible.

### Domain Restrictions
Limit a function to certain x-values using braces:
- \`y = x^2 {0 < x < 5}\` → only shows parabola between x = 0 and x = 5
- \`y = 2x + 1 {x >= 0}\` → only shows the positive part

### Finding Integer Solutions
When the SAT asks "how many integer values of x satisfy both inequalities":
1. Graph both inequalities
2. Find the overlap region
3. Count the integer x-values within that region
4. The Desmos table feature helps verify specific integer points

### Absolute Value Inequalities
- \`|x - 3| < 5\` means the distance from 3 is less than 5
- Graph \`y = |x - 3|\` and \`y = 5\`, and identify where the V-shape is **below** the horizontal line`
    },
    {
      id: 'cs4-q1',
      type: 'quiz' as const,
      question: 'To find the solution region of y ≥ x + 1 AND y < -2x + 8 in Desmos, you should:',
      options: [
        'Solve the system algebraically first',
        'Enter both inequalities and look for the overlapping shaded area',
        'Graph only the boundary lines',
        'Use the table to test random points'
      ],
      correctAnswer: 1,
      explanation: 'Enter both inequalities in Desmos. Each will shade a region. The area where both shadings overlap is the solution set. You can then identify boundary points or count integer solutions.'
    },
    {
      id: 'cs4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Inequalities and Constraints

### Worked Example 1: Counting Integer Solutions

| Step | Work |
|---|---|
| **Problem** | "How many integer values of $x$ satisfy both $x > -3$ and $2x + 1 \\leq 9$?" |
| **Desmos** | Graph $x > -3$ (shades right of $-3$) and $2x + 1 \\leq 9$ (i.e., $x \\leq 4$). |
| **Overlap** | $-3 < x \\leq 4$. Integers: $-2, -1, 0, 1, 2, 3, 4$ → **7 integers**. |

### Worked Example 2: Systems of Inequalities in Context

| Step | Work |
|---|---|
| **Problem** | "A bakery makes cakes ($c$) and pies ($p$). Each cake needs 2 hours, each pie needs 1 hour. They have 10 hours. Each cake needs 3 lbs flour, each pie 2 lbs. They have 18 lbs. Both $c, p \\geq 0$." |
| **Constraints** | $2c + p \\leq 10$, $3c + 2p \\leq 18$, $c \\geq 0$, $p \\geq 0$ |
| **Desmos** | Enter all four inequalities. The overlap is the feasible region. |
| **Vertices** | The corners of the overlap region give possible optimal solutions. |

### Key Desmos Inequality Tricks

| Feature | How |
|---|---|
| Shaded above/below | \`y > ...\` shades above; \`y < ...\` shades below |
| Dashed vs solid boundary | \`>\` / \`<\` = dashed (not included); \`>=\` / \`<=\` = solid (included) |
| Vertical region | \`x > 3\` shades right of $x = 3$ |
| Combined | Enter each inequality on its own line — overlap is visible |

### Domain Restriction Syntax

Use curly braces to limit where a function appears:
- \`y = x^2 \\{x > 0\\}\` — only the right half of the parabola
- \`y = 2x + 1 \\{-3 < x < 5\\}\` — only shows between $x = -3$ and $x = 5$
- Useful for piecewise functions the SAT might show`
    },
    {
      id: 'cs4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Inequality Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'In Desmos, the inequality $y > 2x + 1$ shows:',
            options: ['Shading above a dashed line', 'Shading below a dashed line', 'Shading above a solid line', 'Shading below a solid line'],
            correctAnswer: 0,
            explanation: '$y >$ means above. Strict inequality ($>$ not $\\geq$) means the boundary line is dashed (points on the line are not included).'
          },
          {
            question: 'How many integer values of $x$ satisfy $|x - 3| < 5$?',
            options: ['$9$ integers: $-1, 0, 1, 2, 3, 4, 5, 6, 7$', '$10$ integers', '$8$ integers', '$5$ integers'],
            correctAnswer: 0,
            explanation: '$|x - 3| < 5$ means $-5 < x - 3 < 5$, so $-2 < x < 8$. Integers: $-1, 0, 1, 2, 3, 4, 5, 6, 7$ = 9 values. Graph $y = |x-3|$ and $y = 5$ in Desmos to see the region.'
          },
          {
            question: 'To show only the portion of $y = x^2$ where $x \\geq 0$ in Desmos, you type:',
            options: ['$y = x^2 \\{x \\geq 0\\}$', '$y = x^2$ and $x \\geq 0$ on separate lines', '$y = \\sqrt{x}$', '$y = |x|^2$'],
            correctAnswer: 0,
            explanation: 'Curly braces restrict the domain: $y = x^2 \\{x \\geq 0\\}$ shows only the right half of the parabola. This is essential for piecewise functions.'
          }
        ]
      }
    },
    {
      id: 'cs4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Inequality Desmos Skills** — Choose the correct result.',
      exercise: {
        dropdowns: [
          '$y \\leq x + 3$ shades _____ the line → [below|above|left of|right of]',
          '$x > 2$ shades _____ of the vertical line → [right|left|above|below]',
          'Strict inequality ($<, >$) boundary is → [dashed|solid|dotted|invisible]',
          'Integers in $-3 \\leq x < 4$: count = [7|6|8|5]'
        ],
        correctAnswers: ['below', 'right', 'dashed', '7'],
        hint1: '$y \\leq$ means $y$ is less than or equal — below the line.',
        hint2: '$x > 2$ means $x$ is to the right of 2 on the number line.',
        hint3: 'Strict means the boundary is NOT included — shown as dashed.',
        explanation: '$y \\leq$ = below (solid line). $x > 2$ = right (dashed vertical). Strict = dashed. Integers from $-3$ to $3$: $-3, -2, -1, 0, 1, 2, 3$ = 7 (include $-3$, exclude $4$).'
      }
    },
    {
      id: 'cs4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary: Inequalities in Desmos

| Task | How |
|---|---|
| Graph inequality | Type with $>, <, \\geq, \\leq$ |
| System of inequalities | Enter each on its own line; find overlap |
| Restrict domain | Use curly braces: $\\{\\text{condition}\\}$ |
| Count integer solutions | Find the overlap region, list integers |
| Dashed vs solid | Strict ($>, <$) = dashed; inclusive ($\\geq, \\leq$) = solid |

### SAT Tip
"How many integer values satisfy..." is a common question. Graph the inequality system in Desmos, identify the overlap region, and count.

*Next: Regression and data analysis in Desmos →*`
    }
  ]
};
