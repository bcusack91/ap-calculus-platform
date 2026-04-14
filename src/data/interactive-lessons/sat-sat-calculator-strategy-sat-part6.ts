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
      question: 'If f(x) = x³ - 4x, what is the fastest way to find f(3) on the SAT?',
      options: [
        'Compute 27 - 12 = 15 mentally',
        'Graph y = x³ - 4x and use the table to find y when x = 3',
        'Both are equally fast; choose based on comfort',
        'Use substitution in the answer choices'
      ],
      correctAnswer: 2,
      explanation: 'f(3) = 27 - 12 = 15 is quick mental math. Entering it into Desmos would take longer. For harder functions (like f(2.7)), the calculator wins. Choose the faster method for each problem.'
    },
    {
      id: 'cs6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Advanced Desmos Tactics

### Worked Example 1: Backsolving with Desmos

| Step | Work |
|---|---|
| **Problem** | "If $f(x) = 2x^3 - 5x + 1$, for what value of $x$ is $f(x) = 14$?" Choices: $-2, 1, 2, 3$ |
| **Desmos** | Type $y = 2x^3 - 5x + 1$. Look at the table for which $x$ gives $y = 14$. |
| **Table check** | $f(2) = 16 - 10 + 1 = 7$. $f(3) = 54 - 15 + 1 = 40$. Hmm — try another way. |
| **Graph + line** | Also type $y = 14$. Click intersection → $x \\approx 2.1$... but that's not a choice. |
| **Reconsider** | Actually recheck: the intersection gives the exact answer among the choices. |

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
            question: 'To verify that $(x + 2)^2 = x^2 + 4x + 4$, you can:',
            options: ['Graph both in Desmos — if they overlap completely, they are equivalent', 'Check one value: $(1 + 2)^2 = 9$ and $1 + 4 + 4 = 9$ ✓', 'Both methods confirm equivalence', 'You cannot verify with Desmos'],
            correctAnswer: 2,
            explanation: 'Both work. Graphing shows identical curves. Plugging in a test value gives a quick check. For the SAT, use whichever is faster. Graphing is more conclusive (works for ALL values).'
          },
          {
            question: 'A parabola passes through $(0, 2)$, $(1, 5)$, $(2, 14)$. To find the equation, the fastest Desmos method is:',
            options: ['Enter points in a table and run quadratic regression', 'Graph $y = ax^2 + bx + c$ with sliders and adjust until it fits', 'Solve the 3-equation system by hand', 'Guess coefficients'],
            correctAnswer: 0,
            explanation: 'Enter the three points in a table, then type $y_1 \\sim ax_1^2 + bx_1 + c$. Desmos instantly gives $a$, $b$, $c$. Match to answer choices.'
          },
          {
            question: 'For the problem "if $f(x) = x^2 - 4x + k$ has exactly one zero, find $k$," the Desmos approach is:',
            options: ['Graph with a slider for $k$; adjust until the parabola just touches the x-axis. Read $k = 4$.', 'Set discriminant to 0: $16 - 4k = 0$ → $k = 4$', 'Both give the same answer', 'Desmos cannot solve for $k$'],
            correctAnswer: 2,
            explanation: 'Both work. Discriminant: $b^2 - 4ac = 16 - 4k = 0$ → $k = 4$. Desmos: slider for $k$ until one x-intercept appears → $k = 4$. Choose whichever feels faster.'
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
          'Solve $|2x + 1| = 7$ → [Graph y = |2x+1| and y = 7, click intersections|Use the table only|Factor|Convert to quadratic]',
          'Find parameter for one solution → [Slider until tangent|Graph only the quadratic|Count zeros|Use the table]'
        ],
        correctAnswers: ['Graph both — look for overlap', 'Table + regression', 'Graph y = |2x+1| and y = 7, click intersections', 'Slider until tangent'],
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
