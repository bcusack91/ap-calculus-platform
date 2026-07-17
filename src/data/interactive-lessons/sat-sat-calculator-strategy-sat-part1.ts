export const satCalcStrategyPart1Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs1-intro',
      type: 'text' as const,
      content: `# Calculator Strategy: When to Use It

**Part 1 of 7 — Knowing When the Calculator Helps (and Hurts)**

The Digital SAT provides a built-in **Desmos graphing calculator** for the entire Math section. But using it on every problem wastes time.

### The 30-Second Rule

If a problem takes longer than **30 seconds** by hand, use the calculator. Otherwise, mental math is faster.

### Problems Where Calculator HELPS
- Systems of equations (graph both, find intersection)
- Quadratics that don't factor cleanly
- Problems with ugly arithmetic (large numbers, decimals)
- Checking your algebraic work
- Finding zeros of complex functions

### Problems Where Mental Math is FASTER
- Simple arithmetic (2/3 × 15 = 10)
- Factoring clean quadratics ($x^2 - 5x + 6$)
- Single-variable equations ($3x + 7 = 22$)
- Percent problems (20% of 80 = 16)
- Unit conversions with clean numbers

### Desmos Tip: Intersection
Type both equations, then click the intersection point to get exact coordinates — no algebra needed.`
    },
    {
      id: 'cs1-q1',
      type: 'quiz' as const,
      question: 'Which problem would benefit MOST from using the Desmos calculator?',
      options: [
        'What is 3/4 of 120?',
        'Factor $x^{2}$ - 9',
        'Find where y = $2x^{2}$ - 3x + 1 and y = x + 2 intersect',
        'Solve 5x = 35'
      ],
      correctAnswer: 2,
      explanation: 'The system with a quadratic and linear equation has non-integer solutions — graphing both in Desmos and clicking the intersection is much faster than solving algebraically.'
    },
    {
      id: 'cs1-q2',
      type: 'quiz' as const,
      question: 'A student uses the calculator for every problem. What is the likely consequence?',
      options: [
        'They will get more answers correct',
        'They will run out of time on harder problems',
        'They will avoid all careless errors',
        'The calculator will not work for some problems'
      ],
      correctAnswer: 1,
      explanation: 'Using the calculator for simple problems like 3x = 15 wastes 20-30 seconds each. Over 22 Math questions, that adds up to minutes lost on harder problems that actually need more time.'
    },
    {
      id: 'cs1-text2',
      type: 'text' as const,
      content: `## Deep Dive: The Decision Framework

### Worked Example 1: When Mental Math Wins

| Step | Work |
|---|---|
| **Problem** | "If $3x - 7 = 14$, what is the value of $6x - 14$?" |
| **Trap** | Students open Desmos, type the equation, solve for $x$, then compute $6x - 14$. |
| **Faster** | Notice $6x - 14 = 2(3x - 7) = 2(14) = 28$. Done in 5 seconds. |

### Worked Example 2: When Desmos Wins

| Step | Work |
|---|---|
| **Problem** | "At what value of $x$ do $y = 0.4x^2 - 1.7x + 3.1$ and $y = 0.8x + 1.2$ intersect in the first quadrant?" |
| **By hand** | $0.4x^2 - 2.5x + 1.9 = 0$ → quadratic formula with ugly numbers. |
| **Desmos** | Type both equations → click intersection → read answer. ~15 seconds. |

### Calculator Decision Quick Guide

| Clue in the Problem | Best Approach |
|---|---|
| Clean integers, simple operations | Mental math |
| Variables in answer choices | Pick numbers (sometimes Desmos) |
| "Which value of $x$..." with number choices | Backsolve (plug in choices) |
| System of equations | Desmos (graph both) |
| Quadratic with non-integer roots | Desmos (graph and click zeros) |
| Graph/table interpretation | Desmos table feature |
| "How many solutions..." | Desmos (count intersections) |

### Time Budget Rule of Thumb

On the Math section you have ~95 seconds per question. Budget roughly:
- **Easy questions:** 30-45 seconds (no calculator needed)
- **Medium questions:** 60-90 seconds (calculator optional)
- **Hard questions:** 90-120 seconds (calculator likely helps)

This leaves a few minutes for review.`
    },
    {
      id: 'cs1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Calculator Decision Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The equation $x^2 + 3x - 7 = 0$ has solutions that are irrational numbers. The fastest SAT approach is:',
            options: ['Graph $y = x^2 + 3x - 7$ in Desmos and click the x-intercepts', 'Use the quadratic formula by hand', 'Factor it', 'Guess and check'],
            correctAnswer: 0,
            explanation: 'Since the roots are irrational (discriminant $= 9 + 28 = 37$, not a perfect square), factoring won\'t work. Desmos gives you the x-intercepts in seconds without the quadratic formula.'
          },
          {
            question: 'If $\\frac{3}{4} \\times 120 = ?$, the fastest approach is:',
            options: ['Mental math: $120 \\div 4 = 30$, then $30 \\times 3 = 90$', 'Type it into Desmos', 'Set up a proportion and cross-multiply', 'Convert to decimal and multiply'],
            correctAnswer: 0,
            explanation: 'This is clean mental math — break it into $120/4 = 30$, then $30 \\times 3 = 90$. Using the calculator here wastes 15+ seconds.'
          },
          {
            question: 'You need to find where $y = |2x - 5| + 3$ equals $y = 10$. What is fastest?',
            options: ['Graph both in Desmos and click intersections', 'Solve $|2x - 5| = 7$ by hand (two cases)', 'Both are about equally fast', 'Use a table of values'],
            correctAnswer: 2,
            explanation: 'By hand: $|2x - 5| = 7$ gives $2x - 5 = 7$ or $2x - 5 = -7$, so $x = 6$ or $x = -1$. In Desmos, graph and click. Both take ~15 seconds — choose whichever feels more comfortable.'
          }
        ]
      }
    },
    {
      id: 'cs1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Calculator or Mental Math?** — Choose the best approach.',
      exercise: {
        dropdowns: [
          'Solve $5x = 35$ → [Mental math|Desmos|Backsolve|Pick numbers]',
          'Find the intersection of $y = x^2 - 4$ and $y = 2x + 1$ → [Desmos|Mental math|Pick numbers|Estimate]',
          'What is 25% of 360? → [Mental math|Desmos|Backsolve|Set up proportion]',
          'How many solutions does $x^2 + 4x + 5 = 0$ have? → [Desmos (or discriminant)|Mental math|Backsolve|Guess]'
        ],
        correctAnswers: ['Mental math', 'Desmos', 'Mental math', 'Desmos (or discriminant)'],
        hint1: '$5x = 35$ → $x = 7$. This takes 2 seconds mentally.',
        hint2: 'A quadratic-linear system requires algebra or graphing — Desmos is faster.',
        hint3: '25% of 360 = 360/4 = 90. Quick mental division.',
        explanation: 'Simple equations and clean percent problems → mental math. Systems, quadratics with ugly numbers, or "how many solutions" → Desmos. The key is recognizing which tool saves time.'
      }
    },
    {
      id: 'cs1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary: When to Use the Calculator

| Situation | Best Approach | Why |
|---|---|---|
| Simple arithmetic | Mental math | Faster than typing |
| Clean equations ($3x + 7 = 22$) | Mental math | Under 15 seconds by hand |
| Systems of equations | Desmos | Graph both, click intersection |
| Quadratics (non-factorable) | Desmos | Avoid quadratic formula |
| "How many solutions?" | Desmos | Count intersections visually |
| Ugly decimals/fractions | Calculator | Avoid arithmetic errors |

### Key Rule
**30-second rule:** If you can't solve it by hand in 30 seconds, switch to Desmos. If you CAN solve it in 30 seconds, don't waste time opening the calculator.

*Next: Desmos graphing fundamentals →*`
    }
  ]
};
