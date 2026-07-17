export const satPolynomialsPart7Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf7-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 7 of 7 — Review & Advanced SAT Problems**

### Factoring Decision Tree

1. **GCF?** Always check first
2. **Two terms?** → Difference of squares ($a^2 - b^2$) or sum/difference of cubes
3. **Three terms?** → Trinomial factoring or completing the square
4. **Four terms?** → Factor by grouping

### Factor by Grouping

$x^3 + 3x^2 + 2x + 6$:
- Group: $(x^3 + 3x^2) + (2x + 6)$
- Factor each group: $x^2(x + 3) + 2(x + 3)$
- Factor the common binomial: $(x^2 + 2)(x + 3)$

### Special SAT Pattern: Disguised Quadratics

$x^4 - 5x^2 + 4$: let $u = x^2$:

$u^2 - 5u + 4 = (u - 1)(u - 4) = (x^2 - 1)(x^2 - 4) = (x+1)(x-1)(x+2)(x-2)$

This technique works whenever you see $ax^{2n} + bx^n + c$.

---

### Worked Example 1 — Multi-layer Factoring

**Factor completely: $3x^3 - 12x$.**

| Step | Work |
|------|------|
| GCF first | $3x(x^2 - 4)$ |
| Diff. of squares | $3x(x + 2)(x - 2)$ |

Always start with GCF — it reveals hidden patterns.

### Worked Example 2 — Algebraic Identity on the SAT

**If $a - b = 7$ and $a^2 - b^2 = 35$, find $a + b$.**

| Step | Work |
|------|------|
| Recognize identity | $a^2 - b^2 = (a+b)(a-b)$ |
| Substitute | $35 = (a+b)(7)$ |
| Solve | $a + b = 5$ |`
    },
    {
      id: 'pf7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Advanced Factoring** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor completely: $x^4 - 16$',
            options: ['$(x^2 + 4)(x + 2)(x - 2)$', '$(x^2 + 4)(x^2 - 4)$', '$(x + 2)^2(x - 2)^2$', '$(x^2 - 4)^2$'],
            correctAnswer: 0,
            explanation: '$x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x+2)(x-2)$. Note: $x^2 + 4$ cannot be factored further over the reals.'
          },
          {
            question: 'If $x^2 + y^2 = 25$ and $xy = 12$, what is $(x + y)^2$?',
            options: ['$49$', '$37$', '$25$', '$61$'],
            correctAnswer: 0,
            explanation: '$(x+y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 25 + 24 = 49$. Classic algebraic identity application.'
          },
          {
            question: 'Factor by grouping: $x^3 - 2x^2 + 5x - 10$',
            options: ['$(x^2 + 5)(x - 2)$', '$(x^2 - 5)(x + 2)$', '$(x^2 + 2)(x - 5)$', '$(x^2 - 2)(x + 5)$'],
            correctAnswer: 0,
            explanation: 'Group: $(x^3 - 2x^2) + (5x - 10) = x^2(x - 2) + 5(x - 2) = (x^2 + 5)(x - 2)$.'
          }
        ]
      }
    },
    {
      id: 'pf7-text2',
      type: 'text' as const,
      content: `### Putting It All Together — SAT Strategy

On the SAT, factoring isn't always labeled "factor this." It often appears disguised:

| SAT Question Type | Factoring Skill Needed |
|-------------------|----------------------|
| "Simplify the expression" | Factor and cancel |
| "How many solutions?" | Factor, count zeros |
| "What is the value of...?" | Factor to reveal identity |
| "Which is equivalent?" | Factor and match |
| "Find the zeros" | Factor and solve |

### Worked Example 3 — SAT-Style Identity Problem

**If $9x^2 - 6x + 1 = 0$, what is the value of $3x - 1$?**

| Step | Work |
|------|------|
| Recognize | $9x^2 - 6x + 1 = (3x - 1)^2$ |
| Set equal to 0 | $(3x - 1)^2 = 0$ |
| Solve | $3x - 1 = 0$ |

Answer: $3x - 1 = 0$. No need to find $x$ at all!

### Worked Example 4 — Disguised Difference of Squares

**Compute $1003^2 - 997^2$ without a calculator.**

| Step | Work |
|------|------|
| Identity | $a^2 - b^2 = (a+b)(a-b)$ |
| Apply | $(1003 + 997)(1003 - 997) = (2000)(6)$ |
| Answer | $12{,}000$ |

### SAT Factoring Patterns Cheat Sheet

| Pattern | Formula | Example |
|---------|---------|---------|
| Difference of squares | $a^2 - b^2 = (a+b)(a-b)$ | $x^2 - 9 = (x+3)(x-3)$ |
| Perfect square trinomial | $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$ | $x^2 + 6x + 9 = (x+3)^2$ |
| Sum of cubes | $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ | $x^3 + 8 = (x+2)(x^2-2x+4)$ |
| Difference of cubes | $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ | $x^3 - 27 = (x-3)(x^2+3x+9)$ |`
    },
    {
      id: 'pf7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT-Level Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $x + \\frac{1}{x} = 5$, what is $x^2 + \\frac{1}{x^2}$?',
            options: ['$23$', '$25$', '$10$', '$24$'],
            correctAnswer: 0,
            explanation: 'Square both sides: $(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} = 25$. So $x^2 + \\frac{1}{x^2} = 25 - 2 = 23$.'
          },
          {
            question: 'Factor completely: $2x^4 - 32$',
            options: ['$2(x^2 + 4)(x+2)(x-2)$', '$2(x^4 - 16)$', '$(2x^2 + 8)(x+2)(x-2)$', '$2(x^2 + 4)(x^2 - 4)$'],
            correctAnswer: 0,
            explanation: 'GCF: $2(x^4 - 16) = 2(x^2+4)(x^2-4) = 2(x^2+4)(x+2)(x-2)$. Three-layer factoring: GCF → diff. of squares twice.'
          },
          {
            question: 'Which expression equals $\\frac{x^3 + 8}{x + 2}$?',
            options: ['$x^2 - 2x + 4$', '$x^2 + 2x + 4$', '$x^2 - 4$', '$(x+2)^2$'],
            correctAnswer: 0,
            explanation: '$x^3 + 8 = x^3 + 2^3 = (x+2)(x^2 - 2x + 4)$. Dividing by $(x+2)$ gives $x^2 - 2x + 4$.'
          }
        ]
      }
    },
    {
      id: 'pf7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name That Factoring Pattern** 🔍\n\nIdentify which factoring technique applies to each expression.',
      exercise: {
        dropdowns: [
          { label: '$4x^2 - 25$', options: ['Difference of squares', 'Perfect square trinomial', 'Factor by grouping', 'Sum of cubes'] },
          { label: '$x^3 + 2x^2 - 3x - 6$', options: ['Factor by grouping', 'Difference of squares', 'Trinomial factoring', 'GCF only'] },
          { label: '$x^6 - 7x^3 + 12$', options: ['Disguised quadratic (u = $x^{3}$)', 'Difference of cubes', 'Factor by grouping', 'GCF first'] },
          { label: '$16x^2 + 24x + 9$', options: ['Perfect square trinomial', 'Difference of squares', 'AC method', 'Not factorable'] }
        ],
        correctAnswers: ['Difference of squares', 'Factor by grouping', 'Disguised quadratic (u = $x^{3}$)', 'Perfect square trinomial'],
        hint1: '$4x^2 - 25 = (2x)^2 - 5^2$ — what pattern is that?',
        hint2: 'Four terms with no common factor → try grouping in pairs.',
        hint3: '$x^6 = (x^3)^2$ — so it\'s a quadratic in $x^3$. And $16x^2 + 24x + 9$: check if $\\sqrt{16x^2} = 4x$ and $\\sqrt{9} = 3$...',
        explanation: '$4x^2 - 25 = (2x+5)(2x-5)$ (diff. of squares). $x^3+2x^2-3x-6 = x^2(x+2)-3(x+2) = (x^2-3)(x+2)$ (grouping). $x^6-7x^3+12$: let $u=x^3$, then $(u-3)(u-4) = (x^3-3)(x^3-4)$ (disguised quad). $16x^2+24x+9 = (4x+3)^2$ (perfect square).'
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

| Technique | When to Use | Key Move |
|-----------|------------|----------|
| GCF | Always first | Factor out common factor |
| Diff. of squares | $a^2 - b^2$ | $(a+b)(a-b)$ |
| Perfect square | $a^2 \\pm 2ab + b^2$ | $(a \\pm b)^2$ |
| Trinomial | $ax^2 + bx + c$ | Find factors of $ac$ that add to $b$ |
| Grouping | 4 terms | Pair, factor, extract binomial |
| Disguised quad. | Even powers like $x^4, x^6$ | Let $u = x^n$ |
| Identities | "Find $a+b$" or "Find $x^2 + 1/x^2$" | Expand or factor known identity |

### Full Topic Summary — Polynomials & Factoring

| Part | Core Skill |
|------|------------|
| 1 | Polynomial basics, adding/multiplying, special products |
| 2 | Factoring techniques: GCF, diff. of squares, trinomials |
| 3 | Polynomial division: long division, synthetic, remainder theorem |
| 4 | Zeros, multiplicity, end behavior, building from roots |
| 5 | Rational expressions: simplify, add, multiply, restrictions |
| 6 | Graphs, transformations, matching equation to graph |
| 7 | Review: decision tree, identities, SAT strategy |`
    }
  ]
};
