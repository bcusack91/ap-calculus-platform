export const satCalcStrategyPart6Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs6-intro',
      type: 'text' as const,
      content: `# Advanced Calculator Techniques

**Part 6 of 7 — Power Moves for the SAT**

### Technique 1: Plugging In Answer Choices
When stuck, enter each answer choice into Desmos and see which one satisfies the conditions. This is **backsolving** with technology.

### Technique 2: Function Notation
- Define \`f(x) = x² - 3x + 2\`
- Then evaluate: \`f(5)\` → Desmos gives 12
- Find: \`f(a) = 0\` → Desmos gives a = 1, 2

### Technique 3: Transformations
Graph \`f(x) = x²\`, then compare:
- \`f(x) + 3\` → shifts up 3
- \`f(x - 2)\` → shifts right 2
- \`-f(x)\` → reflects over x-axis
- \`f(2x)\` → horizontal compression

### Technique 4: Using Points to Find Equations
If a parabola passes through (0, 5), (1, 2), and (3, 8):
1. Type \`y = ax² + bx + c\`
2. Add restrictions: \`(0, 5)\`, \`(1, 2)\`, \`(3, 8)\` as points
3. Adjust sliders until the curve passes through all three

### Technique 5: Absolute Value Equations
Graph \`y = |2x - 6|\` and \`y = 10\`. Click intersections to find that x = -2 and x = 8.`
    },
    {
      id: 'cs6-q1',
      type: 'quiz' as const,
      question: 'If $f(x) = x^3 - 4x$, which approach finds $f(3)$ in the fewest steps?',
      options: [
        'Substitute $x = 3$ and simplify by hand',
        'Graph $y = x^3 - 4x$ and trace to $x = 3$',
        'Build a Desmos table and read the row for $x = 3$',
        'Solve $x^3 - 4x = 0$ and use the zeros'
      ],
      correctAnswer: 0,
      explanation: '$f(3) = 27 - 12 = 15$ takes two mental steps. Graphing or building a table means typing the function first, so it takes longer here; for an ugly input like $f(2.7)$, the calculator wins. The zeros of $f$ tell you where $f(x) = 0$, not the value of $f(3)$.'
    },
    {
      id: 'cs6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Advanced Desmos Tactics

### Worked Example 1: Backsolving with Desmos

| Step | Work |
|---|---|
| **Problem** | "If $f(x) = 2x^3 - 5x + 1$, for what value of $x$ is $f(x) = 7$?" Choices: $-2, 1, 2, 3$ |
| **Desmos** | Type $y = 2x^3 - 5x + 1$. Look at the table for which choice gives $y = 7$. |
| **Table check** | $f(-2) = -5$, $f(1) = -2$, $f(2) = 16 - 10 + 1 = 7$ ✓, $f(3) = 40$. |
| **Graph + line** | Or also type $y = 7$ and click the intersection → $x = 2$, the only crossing. |
| **Answer** | $x = 2$ — both Desmos routes land on the same choice. |

### Worked Example 2: Transformation Matching

| Step | Work |
|---|---|
| **Problem** | "Which equation shifts $f(x) = x^2$ right 3 and up 4?" |
| **Desmos** | Graph $y = x^2$. Then graph $y = (x - 3)^2 + 4$. Verify the vertex moved to $(3, 4)$. |
| **Instant visual confirmation** | The transformed graph matches the description ✓ |

### Power Technique: Regression for "Find the Equation"

When the SAT gives you a parabola through specific points and asks for the equation:
1. Enter the points as a Desmos table
2. Run quadratic regression: $y_1 \\sim ax_1^2 + bx_1 + c$
3. Desmos gives you $a$, $b$, $c$ — match to answer choices

### Power Technique: Testing Equivalence

"Which expression is equivalent to $(x + 3)(x - 2) + 5$?"
1. Type $y = (x + 3)(x - 2) + 5$
2. Type each answer choice as a separate equation
3. The one that produces the same graph is the answer (look for identical/overlapping curves)

### Power Technique: Absolute Value Equations

"Solve $|3x - 6| = 12$"
1. Graph $y = |3x - 6|$ and $y = 12$
2. Two intersections appear at $x = -2$ and $x = 6$
3. Click each to confirm`
    },
    {
      id: 'cs6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Techniques Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'You graph $y = (x + 2)^2$ and $y = x^2 + 4x + 4$ in Desmos. Which observation confirms that the two expressions are equivalent?',
            options: ['The two graphs overlap at every point', 'The two graphs cross at exactly one point', 'The two graphs share the same y-intercept', 'The two graphs are both upward parabolas'],
            correctAnswer: 0,
            explanation: 'Equivalent expressions give the same output for EVERY $x$, so their graphs coincide completely. Crossing at one point, sharing a y-intercept, or having the same shape only shows agreement at some values — for example, $(x + 2)^2$ and $x^2 + 4$ share the y-intercept $4$ but are not equivalent.'
          },
          {
            question: 'A parabola passes through $(0, 2)$, $(1, 5)$, $(2, 14)$. To find the equation, the fastest Desmos method is:',
            options: ['Enter the points in a table and run quadratic regression', 'Graph $y = ax^2 + bx + c$ and drag sliders until it fits', 'Write and solve a system of three equations by hand', 'Enter the points in a table and run linear regression'],
            correctAnswer: 0,
            explanation: 'Enter the three points in a table, then type $y_1 \\sim ax_1^2 + bx_1 + c$. Desmos instantly gives $a = 3$, $b = 0$, $c = 2$, so $y = 3x^2 + 2$. Sliders and the hand-solved system also work but take longer, and a linear regression cannot fit a parabola.'
          },
          {
            question: 'The function $f(x) = x^2 - 4x + k$ has exactly one zero. You graph it with a slider for $k$ and stop when the parabola just touches the x-axis. What value should the slider show?',
            options: ['$4$', '$-4$', '$16$', '$2$'],
            correctAnswer: 0,
            explanation: 'Exactly one zero means the vertex sits on the x-axis. The discriminant confirms the slider: $b^2 - 4ac = 16 - 4k = 0$ → $k = 4$. $16$ is $b^2$ alone, and $2$ is the x-coordinate of the vertex, not $k$.'
          }
        ]
      }
    },
    {
      id: 'cs6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Advanced Technique Match** — Choose the best Desmos approach.',
      exercise: {
        dropdowns: [
          'Check if expressions are equivalent → [Graph both — look for overlap|Use a slider|Run regression|Count zeros]',
          'Find equation through 3 points → [Table + regression|Slider on each coefficient|Guess and check|Factor]',
          'Solve $|2x + 1| = 7$ → [Graph both sides, click intersections|Use the table only|Factor|Convert to quadratic]',
          'Find parameter for one solution → [Slider until tangent|Graph only the quadratic|Count zeros|Use the table]'
        ],
        correctAnswers: ['Graph both — look for overlap', 'Table + regression', 'Graph both sides, click intersections', 'Slider until tangent'],
        hint1: 'Equivalent expressions produce identical graphs.',
        hint2: 'Three points → table input → regression gives the equation.',
        hint3: 'Absolute value creates a V-shape. A horizontal line crosses it at 0, 1, or 2 points.',
        explanation: 'Overlap = equivalent. Table + regression = equation from points. Absolute value + horizontal line = click intersections. Slider = find the tangent parameter.'
      }
    },
    {
      id: 'cs6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary: Advanced Techniques

| Technique | When to Use | How in Desmos |
|---|---|---|
| Backsolve | Answer choices are numbers | Table or plugging in |
| Equivalence check | "Which expression equals..." | Graph both, check overlap |
| Regression from points | Given points, find equation | Table → $y_1 \\sim ...$ |
| Transformations | Shift/stretch/reflect | Graph original and transformed |
| Absolute value | $|ax + b| = c$ | Graph V-shape + horizontal line |
| Parameter finding | "Find $k$ such that..." | Slider for $k$ |

*Next: Calculator strategy review and final tips →*`
    }
  ]
};
