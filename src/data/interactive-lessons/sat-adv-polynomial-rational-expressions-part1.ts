export const lessonData = {
  topicSlug: 'sat-polynomial-rational-expressions-advanced',
  sections: [
    {
      id: 'prex1-patterns',
      type: 'text' as const,
      content: `# Polynomial & Rational Expressions: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

Every hard rational item begins with the same instruction, whether or not it is written down: **factor everything first.** Almost nothing at this level survives factoring intact.

### Archetype 1: Holes vs. Vertical Asymptotes

A rational function is undefined wherever the denominator is zero — but *why* it is undefined depends on whether the factor cancels.

- The factor **cancels** $\\rightarrow$ **hole** (removable discontinuity).
- The factor **survives** in the denominator $\\rightarrow$ **vertical asymptote**.

**Worked example.** $f(x) = \\frac{x^{2} - 7x + 12}{x^{2} - 9} = \\frac{(x-3)(x-4)}{(x-3)(x+3)}$. The $(x-3)$ cancels, so there is a hole at $x = 3$, and $x = -3$ is a vertical asymptote. The simplified rule is $\\frac{x-4}{x+3}$, so the hole's height is $\\frac{3-4}{3+3} = -\\frac{1}{6}$ and the hole sits at $\\left(3, -\\frac{1}{6}\\right)$.

**The 700-800 twist:** the question never asks "where is the hole." It asks for the **sum of the coordinates** of the hole, or the sum of the hole's $x$-value and the asymptote's $x$-value. That phrasing exists so that the $x$-coordinate alone, the $y$-coordinate alone, and the asymptote alone can all be answer choices.

Two related features are also planted as choices: the **horizontal asymptote** (ratio of leading coefficients when the degrees match) and, when the cancellation leaves a polynomial, the **$y$-intercept of the resulting line**. In $\\frac{2x^{2}-5x-3}{x-3} = \\frac{(2x+1)(x-3)}{x-3} = 2x + 1$, the graph is a line with a hole at $(3, 7)$: the $y$-intercept is $1$, but $7$ and $3$ are both sitting in the options.

### Archetype 2: Extraneous Solutions

Clearing denominators can manufacture roots that the original equation forbids. **Write the excluded values before you solve**, not after.

**Worked example.** $\\frac{2x}{x-3} = 1 + \\frac{6}{x-3}$. Note $x \\ne 3$. Multiply by $x-3$: $2x = (x-3) + 6$, so $x = 3$ — the one value the domain bans. Every candidate is eliminated, so the answer is **no solution**.

This archetype has exactly three planted outcomes: keeping the extraneous root, keeping *both* a valid root and an extraneous one, and over-discarding (declaring "no solution" when a perfectly legal root like $x = 0$ survives). Notice that $x = 0$ is almost never excluded — a denominator of $x - 1$ or $x + 2$ is fine at zero — yet students discard it by reflex.`
    },
    {
      id: 'prex1-context',
      type: 'text' as const,
      content: `### Archetype 3: Context Models Built on a Rational Expression

Three families cover nearly all of them, and each has a signature "answer one step past the algebra" ask.

**Average cost / average time.** $A(x) = \\frac{F + vx}{x}$, where $F$ is fixed and $v$ is per-unit. Setting $A(x) = k$ and clearing gives a *linear* equation — no quadratic needed. The ask is usually **how many ADDITIONAL units**, so you solve twice and subtract. Both production levels and their sum are choices.

**Work and rate.** Rates add: $\\frac{1}{x} + \\frac{1}{x+3} = \\frac{1}{2}$. Clearing gives a quadratic; reject the negative root as a time. The ask is then for the **other** worker: if you solved for $x$, the question wants $x + 3$. The negative root and the given combined time are both planted.

**Round trips and average speed.** $\\frac{d}{r} + \\frac{d}{r+k} = T$. Once you have both leg speeds, average speed is **total distance over total time** — never the mean of the two speeds. For $10$ and $15$ mph over equal distances the average is $12$, not $12.5$, and $12.5$ is the item's whole reason for existing.

**Mixture and concentration.** $C(x) = \\frac{a + x}{b + x}$ — pure substance added to both numerator and denominator. Solve for $x$, then check whether the ask is $x$ (the amount added), $a + x$ (the final amount of solute), or $b + x$ (the final total volume). All three are choices.

### Archetype 4: Algebraic Manipulation Under Time Pressure

- **Combining into one fraction.** $\\frac{2}{x+1} + \\frac{3}{x-1} = \\frac{2(x-1) + 3(x+1)}{x^{2}-1} = \\frac{5x+1}{x^{2}-1}$, then the ask is $a + b$. Pairing each numerator with the wrong factor gives $\\frac{5x-1}{x^{2}-1}$ and a beautifully wrong $a + b$.
- **Complex fractions.** $\\frac{\\frac{1}{x} - \\frac{1}{3}}{x-3}$: combine the top into $\\frac{3-x}{3x}$, then use $3 - x = -(x-3)$ to cancel, leaving $-\\frac{1}{3x}$. **That sign flip is the entire item.**
- **Negative exponents.** Rewrite $x^{-1} + y^{-1}$ as $\\frac{x+y}{xy}$ and $x^{-2} - y^{-2}$ as $\\frac{(y-x)(y+x)}{x^{2}y^{2}}$ before doing anything else.
- **Factor theorem.** "$\\frac{x^{2}+kx-15}{x-3}$ has no remainder" means the numerator is $0$ at $x = 3$. Solve for $k$, then answer whatever is actually asked about the resulting quotient — $k$ itself is a choice.`
    },
    {
      id: 'prex1-q1',
      type: 'quiz' as const,
      question: 'The graph of $f(x) = \\frac{x^{2} + 2x - 35}{x^{2} - 25}$ has exactly one hole (removable discontinuity). What is the sum of the coordinates of that hole?',
      options: [
        '$-5$',
        '$\\frac{6}{5}$',
        '$5$',
        '$\\frac{31}{5}$'
      ],
      correctAnswer: 3,
      explanation: 'Factor both parts: $\\frac{(x+7)(x-5)}{(x-5)(x+5)}$. The common factor $x - 5$ cancels, so there is a hole at $x = 5$ and the simplified rule is $\\frac{x+7}{x+5}$. The hole\'s height is $\\frac{5+7}{5+5} = \\frac{12}{10} = \\frac{6}{5}$, so the hole is at $\\left(5, \\frac{6}{5}\\right)$ and the sum is $5 + \\frac{6}{5} = \\frac{31}{5}$. The traps: $\\frac{6}{5}$ is the $y$-coordinate alone, the natural end of the computation. $5$ is the $x$-coordinate alone. $-5$ is the VERTICAL ASYMPTOTE — the excluded value whose factor did not cancel, which is a different feature of the same graph.'
    },
    {
      id: 'prex1-q2',
      type: 'quiz' as const,
      question: 'Solve $\\frac{3x}{x-4} = 2 + \\frac{12}{x-4}$.',
      options: [
        '$x = 4$',
        '$x = -4$',
        'There is no solution.',
        '$x = \\frac{14}{3}$'
      ],
      correctAnswer: 2,
      explanation: 'The domain requires $x \\ne 4$. Multiplying every term by $x - 4$ gives $3x = 2(x - 4) + 12$, so $3x = 2x + 4$ and $x = 4$. That single candidate is exactly the excluded value, so it is extraneous and must be discarded; no candidates remain, and the equation has NO solution. The traps: $x = 4$ is the extraneous root itself, kept by anyone who never wrote down the domain restriction. $x = -4$ is a sign slip on that same root. $x = \\frac{14}{3}$ comes from multiplying only the fraction on the right by $x - 4$ and leaving the $2$ untouched, giving $3x = 2 + 12$.'
    },
    {
      id: 'prex1-q3',
      type: 'quiz' as const,
      question: 'A pottery studio has fixed monthly costs of $\\$7{,}200$ plus $\\$15$ per class in materials, so the average cost per class for $x$ classes is $A(x) = \\frac{7{,}200 + 15x}{x}$. This month the studio ran enough classes for the average cost to be exactly $\\$45$ per class. How many ADDITIONAL classes must it run for the average cost to fall to $\\$33$ per class?',
      options: [
        '$160$',
        '$240$',
        '$400$',
        '$640$'
      ],
      correctAnswer: 0,
      explanation: 'Current level: $\\frac{7200 + 15x}{x} = 45$ gives $7200 + 15x = 45x$, so $30x = 7200$ and $x = 240$ classes. Target level: $\\frac{7200 + 15x}{x} = 33$ gives $7200 + 15x = 33x$, so $18x = 7200$ and $x = 400$ classes. The increase is $400 - 240 = 160$ additional classes. The traps: $400$ is the new production level — the natural end of the second computation, and the answer to a question that was not asked. $240$ is the current level. $640$ adds the two levels instead of subtracting them.'
    }
  ]
};
