export const satCalcStrategyPart7Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs7-intro',
      type: 'text' as const,
      content: `# Calculator Strategy Review & Timed Practice

**Part 7 of 7 — Putting It All Together**

### Decision Flowchart
1. **Read the problem** — What is it asking?
2. **Can I solve this in < 30 seconds by hand?** → Do it mentally
3. **Does it involve a system, graph, or ugly numbers?** → Use Desmos
4. **Am I stuck after 1 minute?** → Try graphing the scenario or backsolving with answer choices

### Speed Benchmarks
| Task | Target Time |
|---|---|
| Simple equation (3x + 5 = 20) | 10-15 seconds, no calculator |
| System of equations (graph method) | 20-30 seconds with Desmos |
| Quadratic zeros | 15-20 seconds if factorable, 20-30 seconds with Desmos |
| Regression from data | 30-45 seconds with Desmos |
| Graph analysis (vertex, intercepts) | 15-25 seconds with Desmos |

### Common Calculator Mistakes
- **Parentheses errors**: \`2/3x\` ≠ \`(2/3)x\` in Desmos
- **Not zooming**: The intersection might be off-screen — zoom out!
- **Over-reliance**: Don't use Desmos for 2 + 3
- **Forgetting to verify**: Calculator gives numbers, but does the answer make sense in context?`
    },
    {
      id: 'cs7-q1',
      type: 'quiz' as const,
      question: 'A problem asks for which values of $k$ the system $y = 3x + k$ and $y = 3x - 5$ has no solution. Comparing slopes and intercepts, with no graphing, gives which answer?',
      options: [
        'Only the value $k = -5$',
        'Every value of $k$ except $-5$',
        'Only the value $k = 3$',
        'No value of $k$ works'
      ],
      correctAnswer: 1,
      explanation: 'Both lines have slope 3 (parallel). They only overlap when k = -5 (same line). For ANY other value of k, the lines are parallel with no intersection. This is conceptual — no calculator needed. The answer is "any value except $-5$"; $k = -5$ gives infinitely many solutions, not none.'
    },
    {
      id: 'cs7-q2',
      type: 'quiz' as const,
      question: 'Which of these SAT Math problems would take the LONGEST to solve without a calculator?',
      options: [
        'Find $15\\%$ of $200$',
        'Find where $y = x^2 - 3x + 1$ meets $y = 2x - 3$',
        'Solve $7x - 49 = 0$',
        'Find the slope of the line through $(0, 3)$ and $(4, 11)$'
      ],
      correctAnswer: 1,
      explanation: 'Finding the intersection of a quadratic and a line requires setting $x^2 - 3x + 1 = 2x - 3$, solving $x^2 - 5x + 4 = 0$ to get $x = 1$ or $x = 4$, and then finding the points $(1, -1)$ and $(4, 5)$. The other three are one-step problems. With Desmos, graph both and click — done in 10 seconds.'
    },
    {
      id: 'cs7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Timed Strategy Under Pressure

### Worked Example 1: Full Problem — Choose Your Method

| Step | Work |
|---|---|
| **Problem** | "The equation $2x^2 - 5x + c = 0$ has exactly one real solution. What is $c$?" |
| **Mental check** | One solution → discriminant $= 0$ |
| **Method 1 (Algebra)** | $b^2 - 4ac = 0$: $25 - 8c = 0$ → $c = 25/8 = 3.125$ |
| **Method 2 (Desmos)** | Type $y = 2x^2 - 5x + c$, add slider for $c$, adjust until the parabola just touches the x-axis. Read $c \\approx 3.125$. |
| **Verdict** | Algebra is faster here (~20 sec vs ~30 sec for Desmos). |

### Worked Example 2: When Desmos Wins Big

| Step | Work |
|---|---|
| **Problem** | "How many solutions does $2^x = x + 3$ have?" |
| **By hand?** | No algebra step isolates $x$ — you would be stuck guessing and checking. |
| **Desmos** | Graph $y = 2^x$ and $y = x + 3$, count intersections: **2 intersections** (near $x \\approx -2.86$ and $x \\approx 2.44$). Done in 15 seconds. |

### The 60-Second Rule

| Time Spent | Action |
|---|---|
| 0-15 sec | Read, identify type, choose method |
| 15-45 sec | Execute chosen method |
| 45-60 sec | If stuck, switch methods (mental → Desmos or vice versa) |
| 60+ sec | Flag the problem, move on, come back later |

### Calculator vs. No-Calculator Decision Matrix

| Situation | Best Approach |
|---|---|
| Simple arithmetic / single-step | Mental math |
| Factorable quadratic, basic slope | Hand/mental |
| Ugly coefficients, decimals | Desmos |
| System of equations | Desmos (graph both, find intersection) |
| "How many solutions?" | Desmos (count intersections visually) |
| Data/regression | Desmos tables + regression |
| Exponential vs. linear equations | Desmos (count or click intersections) |
| Backsolving from answer choices | Desmos or plug-in by hand |`
    },
    {
      id: 'cs7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Calculator Strategy Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'You have 45 seconds left and one unanswered problem: "Find all $x$ where $x^3 - 4x^2 + x + 6 = 0$." Best approach?',
            options: ['Graph it in Desmos and read off the x-intercepts', 'Factor it by grouping the first two terms', 'Apply the quadratic formula to it', 'Divide by $x$ and solve the resulting quadratic'],
            correctAnswer: 0,
            explanation: 'With 45 seconds and a cubic equation, graphing in Desmos is fastest: the zeros $x = -1$, $2$, and $3$ appear as x-intercepts. Grouping fails here ($x^2(x - 4) + (x + 6)$ has no common factor), the quadratic formula applies only to quadratics, and dividing by $x$ is invalid because of the constant term $6$.'
          },
          {
            question: 'Which parenthesization is correct in Desmos for $\\frac{2}{3}x + 5$?',
            options: ['$(2/3)x + 5$', '$2/3x + 5$', '$2/(3x + 5)$', '$2/(3x) + 5$'],
            correctAnswer: 0,
            explanation: 'In Desmos, typing $2/3x$ puts the $x$ in the denominator, giving $\\frac{2}{3x}$ — the same as $2/(3x)$. You need $(2/3)x$, or the fraction template with the cursor moved out of the denominator, to get $\\frac{2}{3}x + 5$.'
          },
          {
            question: 'Which value of $k$ makes the system $y = 2x + 3$ and $y = kx + 3$ have infinitely many solutions? (Recognize it; no calculator needed.)',
            options: ['$2$', '$3$', '$-2$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'Infinitely many solutions = same line. Both have $y$-intercept $3$, so they\'re the same line when slopes match: $k = 2$. This takes 5 seconds of recognition — no calculator needed.'
          }
        ]
      }
    },
    {
      id: 'cs7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the Fastest Method** — For each problem type, select the optimal approach.',
      exercise: {
        dropdowns: [
          'Solve $5x + 3 = 18$ → [Mental math|Desmos graph|Desmos table|Regression]',
          'Find intersection of $y = x^2 + 1$ and $y = 3x - 1$ → [Desmos graph|Mental math|Factor by hand|Guess and check]',
          'Fit a line to 8 data points → [Desmos regression|Plot by hand|Calculate slope between each pair|Mental estimation]',
          '"For what value of $a$ does $ax^2 + 4x + 1 = 0$ have no real solutions?" → [Discriminant by hand|Desmos slider|Graph every option|Substitution]'
        ],
        correctAnswers: ['Mental math', 'Desmos graph', 'Desmos regression', 'Discriminant by hand'],
        hint1: 'Simple linear equations are fastest by hand: $5x = 15$, $x = 3$.',
        hint2: 'Quadratic-linear intersections involve messy algebra — Desmos shows them instantly.',
        hint3: 'Regression with 8 points by hand would take forever. Desmos does it in seconds.',
        explanation: 'Simple equations → mental. Intersections of curves → Desmos graph. Regression → always Desmos. Discriminant problems are one formula: $b^2 - 4ac$ compared to 0 — faster by hand than setting up a slider.'
      }
    },
    {
      id: 'cs7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Calculator Strategy

| Part | Topic | Key Takeaway |
|---|---|---|
| 1 | When to Use the Calculator | Mental math for clean problems, Desmos for messy ones |
| 2 | Desmos Fundamentals | Graph equations, click zeros and vertices, tables, sliders |
| 3 | Systems in Desmos | Graph both lines/curves, click or count intersections |
| 4 | Inequalities & Restrictions | Shaded overlaps, dashed vs. solid, domain braces |
| 5 | Regression & Data | Enter data in a table, use regression to fit models |
| 6 | Advanced Techniques | Backsolving, equivalence checks, sliders for parameters |
| 7 | Review & Timed Practice | Decision framework, speed benchmarks, common mistakes |

### The Golden Rules

1. **If it takes < 30 seconds by hand → skip the calculator**
2. **If it involves graphing, systems, or ugly numbers → use Desmos**
3. **If you're stuck after 60 seconds → switch methods or skip**
4. **Always verify** — does the answer make sense?
5. **Parentheses matter** — $(2/3)x \\neq 2/3x$ in Desmos

### Speed Targets
- Mental math problems: 10-15 seconds
- Desmos graph problems: 20-30 seconds
- Regression/data problems: 30-45 seconds
- Total section: ~95 seconds per problem average

🎉 *Calculator Strategy complete! Use these techniques to save time on every SAT Math section.*`
    }
  ]
};
