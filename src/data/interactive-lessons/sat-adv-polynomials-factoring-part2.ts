export const lessonData = {
  topicSlug: 'sat-polynomials-factoring-advanced',
  sections: [
    {
      id: 'pa2-traps',
      type: 'text' as const,
      content: `# Polynomials & Factoring: Traps & Speed

**Part 2 of 3 — Distractor Autopsy and Faster Routes**

### The Four Standard Distractors

1. **The parameter itself.** The value of $k$ or $a$ found in step one is always a choice. It is never the answer — it is the toll you paid to start.
2. **The sign-read of factors.** $(2x + 5)$ has zero $-\\frac{5}{2}$, not $\\frac{5}{2}$. Zeros listed with flipped signs form a full distractor set.
3. **The wrong Vieta relation.** Sum asked, product planted; product asked, sum planted. For cubics: sum $= -\\frac{b}{a}$, sum of pairwise products $= \\frac{c}{a}$, product $= -\\frac{d}{a}$.
4. **The unit conversion.** "$x$ hundred units" means every zero and difference must be scaled by $100$ at the end. The unconverted number is always planted.

### Speed Techniques

- **$P(1)$ is the sum of the coefficients.** "Remainder when divided by $x - 1$," "sum of coefficients of the quotient" — both collapse to evaluations at $1$. For a clean division $P(x) = D(x)Q(x)$: $Q(1) = \\frac{P(1)}{D(1)}$.
- **Remainder theorem over long division.** Remainder of $P(x) \\div (x - c)$ is $P(c)$. Long division is for finding QUOTIENTS only — and even then, synthetic division is faster.
- **Vieta before dividing.** Asked for a sum or product of remaining zeros? Total (from Vieta) minus the known zero. Division is only needed when you must know the zeros individually.
- **Desmos exploit:** graph the polynomial and read the zeros directly; for a parameter, add a slider and tune until the graph passes through the required zero. Exact fractions still deserve an algebra check.`
    },
    {
      id: 'pa2-q1',
      type: 'quiz' as const,
      question: 'When $4x^{3} - 5x^{2} + kx - 6$ is divided by $x - 1$, the remainder is $3$. What is the value of $k$?',
      options: [
        '$-7$',
        '$3$',
        '$7$',
        '$10$'
      ],
      correctAnswer: 3,
      explanation: 'Remainder theorem — no division: $P(1) = 4 - 5 + k - 6 = k - 7$, and $P(1) = 3$ gives $k = 10$. Anyone long-dividing here spent two minutes on a 15-second item. $7$ comes from setting $P(1) = 0$ (forgetting the stated remainder), $3$ is the remainder itself echoed back, and $-7$ is the sign slip on $k - 7$.'
    },
    {
      id: 'pa2-q2',
      type: 'quiz' as const,
      question: 'A student lists the zeros of $f(x) = x(2x + 5)(x - 4)$ as $0$, $\\frac{5}{2}$, and $-4$. What is the error?',
      options: [
        'The signs are flipped: the correct zeros are $0$, $-\\frac{5}{2}$, and $4$',
        'The zero $0$ should not be included',
        'The zero of $2x + 5$ is $-5$, since the $2$ divides the constant only',
        'Nothing — the list is correct'
      ],
      correctAnswer: 0,
      explanation: 'Each factor is set to ZERO: $2x + 5 = 0$ gives $x = -\\frac{5}{2}$, and $x - 4 = 0$ gives $x = 4$. Reading zeros with the sign of the constant as-written (the "$+5$ means $+\\frac{5}{2}$" reflex) is the single most common factored-form error, and the fully sign-flipped list is a standard planted choice. $0$ IS a zero — the lone factor $x$ contributes it.'
    },
    {
      id: 'pa2-q3',
      type: 'quiz' as const,
      question: 'A model gives a company\'s net cost as $C(x) = x(x - 2)(x - 9)$ thousand dollars, where $x$ is measured in HUNDREDS of lamps. Besides $x = 0$, cost is zero at two production levels. What is the positive difference between those levels, in LAMPS?',
      options: [
        '$7$',
        '$700$',
        '$900$',
        '$1100$'
      ],
      correctAnswer: 1,
      explanation: 'The nonzero cost-zeros are $x = 2$ and $x = 9$ — that is $2$ hundred and $9$ hundred lamps, a difference of $7$ hundred $= 700$ lamps. The trap ladder: $7$ is the difference left unconverted (the planted "natural" answer), $900$ is the larger level in lamps (a value, not a difference), and $1100$ is the SUM of the levels in lamps. Hard-tier items hide the real difficulty in the units sentence, not the factoring.'
    }
  ]
};
