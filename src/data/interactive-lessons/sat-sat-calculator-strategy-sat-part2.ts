export const satCalcStrategyPart2Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs2-intro',
      type: 'text' as const,
      content: `# Desmos Graphing Fundamentals

**Part 2 of 7 — Essential Desmos Skills for the SAT**

### Entering Equations
- Type equations directly: \`y = 2x + 3\`
- Use \`^\` for exponents: \`y = x^2 - 4\`
- Use \`sqrt()\` for square roots: \`y = sqrt(x + 1)\`
- Fractions: type \`(2/3)x\` or use the fraction template

### Finding Key Features
| What You Need | What to Do in Desmos |
|---|---|
| x-intercepts (zeros) | Graph the equation, click where it crosses x-axis |
| y-intercept | Look at where the graph crosses y-axis |
| Vertex of parabola | Click the minimum/maximum point |
| Intersection of two graphs | Enter both equations, click the intersection dot |

### The Table Feature
Click the equation number → "Table" to see exact x/y pairs. This is powerful for:
- Verifying which point satisfies an equation
- Finding a pattern in function values
- Checking if a point is on a line

### Sliders
If you type \`y = ax + b\`, Desmos creates sliders for \`a\` and \`b\`. This helps you:
- Match a graph to given constraints
- Understand how changing a coefficient affects the graph
- Find parameter values that satisfy conditions`
    },
    {
      id: 'cs2-q1',
      type: 'quiz' as const,
      question: 'To find where two lines intersect using Desmos, you should:',
      options: [
        'Enter one equation and use the table to guess',
        'Enter both equations and click the intersection point',
        'Solve by hand — Desmos cannot find intersections',
        'Use the slider feature to match the lines'
      ],
      correctAnswer: 1,
      explanation: 'Enter both equations (e.g., y = 2x + 1 and y = -x + 7) into Desmos. Where the graphs cross, a dot appears — click it to see the exact (x, y) coordinates.'
    },
    {
      id: 'cs2-q2',
      type: 'quiz' as const,
      question: 'You need to find the vertex of y = $-2x^{2}$ + 8x - 3. The fastest Desmos method is:',
      options: [
        'Complete the square by hand',
        'Use the -b/2a formula',
        'Graph it and click the maximum point',
        'Create a table and scan values'
      ],
      correctAnswer: 2,
      explanation: 'Type y = $-2x^{2}$ + 8x - 3 into Desmos. Since a is negative, the parabola opens downward. Click the highest point to see the vertex coordinates (2, 5). This takes about 5 seconds.'
    },
    {
      id: 'cs2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Desmos Power Features

### Worked Example 1: Using the Table to Check Points

| Step | Work |
|---|---|
| **Problem** | "Which point lies on the graph of $y = 3x^2 - 5x + 2$? (A) $(1, 0)$ (B) $(2, 4)$ (C) $(3, 14)$ (D) $(0, 3)$" |
| **Desmos method** | Type the equation. Click the equation number → Table. Check $x = 1, 2, 3, 0$ in the table. |
| **Read** | $f(1) = 0$ ✓ → Answer is (A) |

### Worked Example 2: Finding Multiple x-Intercepts

| Step | Work |
|---|---|
| **Problem** | "Find all zeros of $f(x) = x^3 - 6x^2 + 11x - 6$." |
| **Desmos** | Type $y = x^3 - 6x^2 + 11x - 6$. See where graph crosses x-axis. |
| **Click each zero** | $x = 1, 2, 3$ — three zeros visible and clickable. |

### Essential Desmos Keyboard Shortcuts

| Action | How to Type It |
|---|---|
| Exponent | \`^\` (e.g., \`x^2\`) |
| Square root | \`sqrt()\` |
| Absolute value | \`abs()\` or use \`|\` key |
| Pi | \`pi\` |
| Fraction | Use \`/\` (e.g., \`(2/3)x\`) |
| Subscript (regression) | \`_\` (e.g., \`y_1\`) |
| Greater/less than or equal | \`>=\` or \`<=\` |

### Zoom and Navigation Tips

- **Scroll** to zoom in/out
- **Click and drag** to pan the viewing window
- If you can't see the intersection, **zoom out** — it might be off-screen
- Double-click the graph to auto-fit the view to the function`
    },
    {
      id: 'cs2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Desmos Skills Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'You type $y = x^2 + 4$ into Desmos and see a parabola that never crosses the x-axis. This tells you:',
            options: ['The equation has no real zeros (no real x-intercepts)', 'You typed the equation wrong', 'The graph has no y-intercept', 'The equation has infinitely many solutions'],
            correctAnswer: 0,
            explanation: '$x^2 + 4 > 0$ for all real $x$, so the parabola sits entirely above the x-axis. The discriminant is $0 - 16 = -16 < 0$ — no real roots. Desmos confirms this visually.'
          },
          {
            question: 'To find the vertex of $y = -3(x - 2)^2 + 7$ in Desmos, you should:',
            options: ['Graph it and click the highest point — it\'s at $(2, 7)$', 'Use the table feature to scan values', 'Create sliders for each coefficient', 'Graph $y = x$ on the same screen'],
            correctAnswer: 0,
            explanation: 'This is already in vertex form: $a(x - h)^2 + k$. The vertex is $(2, 7)$. You can confirm by graphing and clicking the peak. Recognizing the form is even faster than Desmos here.'
          },
          {
            question: 'You need to check if $(3, 5)$ satisfies $2x - y = 1$. What is the quickest Desmos method?',
            options: ['Type the equation and use the table — check if $y = 5$ when $x = 3$', 'Graph the line and click near $(3, 5)$', 'Mental math: $2(3) - 5 = 6 - 5 = 1$ ✓', 'Create sliders for $x$ and $y$'],
            correctAnswer: 2,
            explanation: 'This is faster by mental math: $2(3) - 5 = 1$ ✓. Use Desmos only when the computation is complex. Recognize when brain beats calculator!'
          }
        ]
      }
    },
    {
      id: 'cs2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Desmos Feature Match** — Pick the right feature for each task.',
      exercise: {
        dropdowns: [
          'Find where two curves cross → [Click intersection point|Use table|Create slider|Type inequality]',
          'Check if a specific point is on a curve → [Table feature|Slider|Intersection|Zoom in]',
          'Find the maximum of a parabola → [Click the vertex|Use table|Create inequality|Graph y = 0]',
          'See how changing "a" affects $y = ax^2$ → [Slider for a|Table|Zoom|Click intercepts]'
        ],
        correctAnswers: ['Click intersection point', 'Table feature', 'Click the vertex', 'Slider for a'],
        hint1: 'Intersection points appear as clickable dots on the graph.',
        hint2: 'The table lets you input specific x-values and see the y-output.',
        hint3: 'Sliders let you dynamically change parameters and see the graph move.',
        explanation: 'Intersections: click the dot. Points on a curve: check in the table. Max/min: click the vertex. Understanding parameters: use sliders to see the effect of changing coefficients.'
      }
    },
    {
      id: 'cs2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary: Desmos Fundamentals

| Feature | What It Does | Best For |
|---|---|---|
| Graphing | Plots any equation | Visualizing functions, finding features |
| Intersection | Click where graphs cross | Solving systems |
| Table | Shows x/y pairs | Checking specific points |
| Sliders | Adjust parameters live | Understanding coefficients |
| Zoom/Pan | Change viewing window | Finding off-screen features |

### Key Tip
Learn to type equations quickly — practice \`^\`, \`sqrt()\`, and \`abs()\` before test day. Speed matters.

*Next: Solving systems with Desmos →*`
    }
  ]
};
