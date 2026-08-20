export const lessonData = {
  topicSlug: 'sat-systems-linear-equations-advanced',
  sections: [
    {
      id: 'advsys2-traps',
      type: 'text' as const,
      content: `# Traps & Speed: Systems of Linear Equations

**Part 2 of 3 — Distractor Autopsy and the Desmos Bypass**

### How the Four Wrong Answers Are Manufactured

On a hard systems item, the option set is almost always: **the correct value**, plus three of these:

- **The count, priced as dollars** (or vice versa): "$\\$25$" when $25$ was the *number* of banners. Units are the trap — a naked number for a revenue question should make you suspicious.
- **The other entity's value**: the poster revenue when banners were asked; Plan A's total when Plan B's was asked; YOUR company's break-even cost when the competitor's was asked. The computation is right; the subject is wrong.
- **The natural stopping point**: $n = 300$ units on a break-even problem whose real ask is a cost at that $n$. Whatever number your algebra produces last is exactly what the test predicts you'll bubble.
- **The sign-slip on the scale factor**: for no-solution/infinite-solution items, the same magnitude with the opposite sign is always there.

### Speed Techniques

- **Desmos intersection:** paste both equations exactly as written — no rearranging needed — and click the intersection point. For word problems, this turns a 90-second substitution into 20 seconds.
- **Slider for parameters:** for "$ax + 12y = 5$ has no solution," graph with a slider on $a$ and drag until the lines run parallel. Or skip graphing: ratio, multiply, done.
- **Combination-first reflex:** before isolating anything, ask "does adding or subtracting the equations produce the asked-for combination?" The SAT writes $x + y$ and $x - y$ asks precisely so that elimination answers them in one move.
- **Answer-check discipline:** the moment you get a number, restate the question's final phrase ("...revenue from BANNERS") and confirm your number is that thing.`
    },
    {
      id: 'advsys2-q1',
      type: 'quiz' as const,
      question: `A chemist mixes a 10% acid solution with a 30% acid solution to produce 400 mL of a 24% acid solution. How many more milliliters of the 30% solution than of the 10% solution does the chemist use?`,
      options: ['$120$', '$160$', '$280$', '$400$'],
      correctAnswer: 1,
      explanation: 'Let $x$ be mL of the $10\\%$ and $y$ the $30\\%$: $x + y = 400$ and $0.10x + 0.30y = 0.24(400) = 96$. Substituting $x = 400 - y$: $40 + 0.20y = 96$, so $y = 280$ and $x = 120$. The ask is the DIFFERENCE: $280 - 120 = 160$. The traps: $120$ and $280$ are the individual volumes — the natural stopping points. $400$ is the total, given in the problem. Underline "how many more" before solving; it changes the final move.'
    },
    {
      id: 'advsys2-q2',
      type: 'quiz' as const,
      question: `A company's cost to make n units is C = 2,000 + 15n dollars, and its revenue is R = 25n dollars. A competitor's cost for n units is C = 3,500 + 10n dollars. At the production level where the company breaks even, what is the competitor's cost?`,
      options: ['$\\$200$', '$\\$3{,}500$', '$\\$5{,}000$', '$\\$5{,}500$'],
      correctAnswer: 3,
      explanation: `Company break-even: $2000 + 15n = 25n$, so $10n = 2000$ and $n = 200$ units. The competitor's cost at $n = 200$: $3500 + 10(200) = 5{,}500$ dollars. The traps: $\\$5{,}000$ is the COMPANY's own cost and revenue at break-even — right computation, wrong entity, and the algebra's natural stopping point. $\\$200$ is the unit count wearing a dollar sign. $\\$3{,}500$ is the competitor's fixed cost, read straight off the problem. One extra substitution separates 700 from 800 here.`
    },
    {
      id: 'advsys2-q3',
      type: 'quiz' as const,
      question: 'In the system $4x - 10y = 7$ and $-6x + ky = 2$, $k$ is a constant. If the system has no solution, what is the value of $k$?',
      options: ['$-15$', '$-1.5$', '$15$', '$60$'],
      correctAnswer: 2,
      explanation: 'Scale factor from the $x$-coefficients: $-6 \\div 4 = -\\frac{3}{2}$. Apply to the $y$-coefficient: $k = -10 \\times (-\\frac{3}{2}) = 15$ — negative times negative is positive. Constants: $7 \\times (-\\frac{3}{2}) = -10.5 \\ne 2$, confirming parallel distinct lines. $-15$ is the sign-slip answer, the single most-picked wrong option on this structure. $-1.5$ is the scale factor itself, an intermediate. $60$ multiplies $-10$ by $-6$, pairing the wrong numbers. Track the sign of the factor like it is the entire question — because it is.'
    }
  ]
};
