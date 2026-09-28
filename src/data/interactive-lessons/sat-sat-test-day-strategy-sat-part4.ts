export const satTestDayStrategyPart4Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds4-intro',
      type: 'text' as const,
      content: `# Math Section Strategy

**Part 4 of 7 — Maximizing Your Math Score**

### The 4 Math Question Types
1. **Algebra** (~35%): Linear equations, systems, inequalities, functions
2. **Advanced Math** (~35%): Quadratics, polynomials, exponentials, rational functions
3. **Problem Solving & Data** (~15%): Ratios, percents, probability, statistics
4. **Geometry & Trig** (~15%): Area, volume, angles, right triangles, trig

### Problem-Solving Approaches (in order of preference)
1. **Direct solve** — set up equation and solve
2. **Backsolve** — plug in answer choices to see which works
3. **Pick numbers** — substitute simple values for variables
4. **Desmos** — graph it and find the answer visually

### When to Backsolve
Best for: "Which value of x satisfies..." or when answer choices are simple numbers.
1. Answer choices are usually listed in increasing order, so start with a middle choice
2. If the result is too big or too small, you know which direction to go
3. Often faster than algebraic manipulation

### When to Pick Numbers
Best for: Problems with variables in the answer choices.
1. Choose simple numbers (x = 2, y = 3 — avoid 0 and 1)
2. Calculate the answer with your numbers
3. Plug the same numbers into each answer choice
4. Only ONE choice will match

### Grid-In (Student-Produced Response)
- ~25% of Math questions are grid-in (type your answer)
- **Negative answers are allowed**: type the minus sign
- Fractions and decimals both accepted
- If you get a range, give any value in the range`
    },
    {
      id: 'tds4-q1',
      type: 'quiz' as const,
      question: 'For a problem that says "If 2x + 3 = ax + 6 has no solution, what is a?" — what approach is fastest?',
      options: [
        'Backsolve by testing each answer choice',
        'Match the coefficients of x, so a = 2',
        'Graph both sides in Desmos and compare',
        'Pick a value for x and solve for a'
      ],
      correctAnswer: 1,
      explanation: 'For a linear equation to have no solution, the coefficients of x must be equal (parallel lines) but the constants must differ. So a = 2 (matching the coefficient of x on the left). This takes 5 seconds — no calculation needed.'
    },
    {
      id: 'tds4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Choosing the Right Math Approach

### Worked Example 1: Backsolving

| Step | Work |
|---|---|
| **Problem** | "If $2x^2 - 3x = 5$, which value of $x$ is a solution?" Choices: $-2$, $-1$, $2$, $3$ |
| **Try a middle choice ($x = 2$)** | $2(4) - 3(2) = 8 - 6 = 2$. We need 5, so $x = 2$ fails ❌ |
| **Try $x = 3$** | $2(9) - 3(3) = 18 - 9 = 9$. Too big, and larger $x$ only grows it ❌ |
| **Try $x = -1$** | $2(1) - 3(-1) = 2 + 3 = 5$ ✅ |
| **Answer** | $x = -1$ (quick check on $x = -2$: $2(4) + 6 = 14$, not 5) |

**Lesson:** Backsolving turns a quadratic into plain arithmetic: plug in each choice and stop at the one that makes both sides equal. (Factoring confirms it: $2x^2 - 3x - 5 = (2x - 5)(x + 1)$, so $x = -1$ or $x = \\frac{5}{2}$, and only $-1$ is a choice.)

### Worked Example 2: Pick Numbers

| Step | Work |
|---|---|
| **Problem** | "If $f(x) = 2x + 1$, what is $f(3x)$?" Choices: A) $6x + 1$ B) $6x + 3$ C) $2x + 3$ D) $3(2x+1)$ |
| **Pick $x = 2$** | $f(3 \\cdot 2) = f(6) = 2(6) + 1 = 13$ |
| **Test A** | $6(2) + 1 = 13$ ✅ |
| **Test B** | $6(2) + 3 = 15$ ❌ |
| **Answer** | A) $6x + 1$ |

### Approach Decision Matrix

| Clue in Problem | Best Approach |
|---|---|
| "Which value of x…" + simple choices | Backsolve |
| Variables in answer choices | Pick numbers |
| "Graph shows…" or intersection | Desmos |
| Standard equation | Direct solve |
| Geometry with given values | Plug into formula |
| Word problem with rate/time | Set up equation → solve |`
    },
    {
      id: 'tds4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Math Strategy Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'The best approach for "Which of the following is equivalent to $\\frac{x^2 - 4}{x + 2}$?" is:',
            options: ['Backsolve', 'Pick numbers', 'Factor directly', 'Graph in Desmos'],
            correctAnswer: 2,
            explanation: '$x^2 - 4 = (x+2)(x-2)$: so $\\frac{(x+2)(x-2)}{x+2} = x-2$. Direct factoring is fastest here because the numerator is a classic difference of squares. Picking numbers would also work (variables are in the choices), but it takes longer than spotting the factoring, and there are no numeric choices to backsolve.'
          },
          {
            question: 'Grid-in questions can have:',
            options: ['Only positive whole numbers', 'Negative numbers, fractions, and decimals', 'Units, labels, or words with the number', 'Mixed numbers such as 3 1/2'],
            correctAnswer: 1,
            explanation: 'Digital SAT grid-ins accept negative numbers (type the minus sign), fractions (like 3/4), and decimals (like 0.75). You never type units or words, and mixed numbers are not accepted: enter 3 1/2 as 7/2 or 3.5.'
          },
          {
            question: 'Approximately what percentage of Math questions are Algebra and Advanced Math combined?',
            options: ['~30%', '~50%', '~70%', '~90%'],
            correctAnswer: 2,
            explanation: 'Algebra ≈ 35% + Advanced Math ≈ 35% = ~70% of all Math questions. These two categories dominate — focus your study time accordingly.'
          }
        ]
      }
    },
    {
      id: 'tds4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Math Approach Check** — Select the correct strategy.',
      exercise: {
        dropdowns: [
          '"Which value of x satisfies…" with choices 2, 5, 7, 10 → [Backsolve|Pick numbers|Desmos|Direct solve]',
          'Variables in ALL answer choices → [Pick numbers|Backsolve|Desmos|Direct solve]',
          '"At what point do the graphs intersect?" → [Desmos|Pick numbers|Backsolve|Estimate from a sketch]',
          'Grid-in: negative answers are [allowed|not allowed|allowed only as fractions|required]'
        ],
        correctAnswers: ['Backsolve', 'Pick numbers', 'Desmos', 'allowed'],
        hint1: 'Simple number choices → plug them in to check.',
        hint2: 'Variables in choices → assign a value to the variable.',
        hint3: 'Graph intersection points are instant on Desmos.',
        explanation: 'Backsolve when choices are numbers. Pick numbers when choices have variables. Desmos for graph intersections. Grid-ins accept negative answers: just type the minus sign.'
      }
    },
    {
      id: 'tds4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Strategy | When to Use |
|---|---|
| Direct solve | Standard equations, plug-and-chug |
| Backsolve | "Which value…" + numerical choices |
| Pick numbers | Variables in answer choices |
| Desmos | Graphs, intersections, systems |
| Math distribution | ~35% Algebra, ~35% Adv Math, ~15% PSD, ~15% Geo/Trig |
| Grid-in | ~25% of Math Qs, negatives and fractions OK |

*Next: Strategic Elimination & Guessing →*`
    }
  ]
};
