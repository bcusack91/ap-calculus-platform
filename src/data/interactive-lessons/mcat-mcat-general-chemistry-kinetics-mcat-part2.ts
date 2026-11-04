export const mcatKineticsPart2Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin2-intro',
      type: 'text' as const,
      content: `# Kinetics: Rate Laws & Half-Lives

**Part 2 of 3 — Integrated Rate Laws & Half-Life**

## Integrated Rate Laws

Integrated rate laws give **concentration as a function of time** — essential for predicting how much reactant remains after a given time.

### Zero-Order Integrated Rate Law

$$[\\text{A}]_t = [\\text{A}]_0 - kt$$

**Graph:** $[\\text{A}]$ vs $t$ is a **straight line** with slope $= -k$.

**Half-life:** $t_{1/2} = \\frac{[\\text{A}]_0}{2k}$ (depends on initial concentration)

### First-Order Integrated Rate Law

$$[\\text{A}]_t = [\\text{A}]_0 e^{-kt}$$

Equivalently: $\\ln[\\text{A}]_t = \\ln[\\text{A}]_0 - kt$

**Graph:** $\\ln[\\text{A}]$ vs $t$ is a **straight line** with slope $= -k$.

**Half-life:** 

$$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$$

Half-life is **constant** — independent of $[\\text{A}]_0$. This is the hallmark of 1st-order kinetics.

**Applications:** Radioactive decay, drug elimination from the body.

### Second-Order Integrated Rate Law

$$\\frac{1}{[\\text{A}]_t} = \\frac{1}{[\\text{A}]_0} + kt$$

**Graph:** $1/[\\text{A}]$ vs $t$ is a **straight line** with slope $= +k$.

**Half-life:** $t_{1/2} = \\frac{1}{k[\\text{A}]_0}$ (depends on initial concentration; each successive half-life is twice the one before)

## Summary Table

| Order | Integrated law | Linear plot | Half-life |
|-------|---------------|-------------|-----------|
| 0 | $[\\text{A}] = [\\text{A}]_0 - kt$ | $[\\text{A}]$ vs $t$ | $[\\text{A}]_0/(2k)$ |
| 1 | $\\ln[\\text{A}] = \\ln[\\text{A}]_0 - kt$ | $\\ln[\\text{A}]$ vs $t$ | $0.693/k$ |
| 2 | $1/[\\text{A}] = 1/[\\text{A}]_0 + kt$ | $1/[\\text{A}]$ vs $t$ | $1/(k[\\text{A}]_0)$ |

## Half-Life Applications (MCAT)

For first-order processes:

$$\\frac{[\\text{A}]_t}{[\\text{A}]_0} = \\left(\\frac{1}{2}\\right)^n \\quad \\text{where } n = \\frac{t}{t_{1/2}}$$

## Worked Example — Counting Half-Lives

**Problem 1.** A first-order reaction has $k = 0.0693\\text{ min}^{-1}$.

- **(a)** What is its half-life?
- **(b)** How many half-lives pass in 30 min?
- **(c)** What fraction of the reactant remains after 30 min?
- **(d)** What fraction has reacted by then?

**(a) Half-life.** $t_{1/2} = 0.693/k = 0.693/0.0693 = 10\\text{ min}$, the same at any concentration.

**(b) Half-lives elapsed.** With $t_{1/2} = 10$ min from (a): $n = 30/10 = 3$ half-lives.

**(c) Fraction remaining.** Each half-life halves what is left, so after the 3 half-lives from (b):

$$\\text{fraction remaining} = (1/2)^3 = 1/8 = 12.5\\%$$

**(d) Fraction reacted.** $1 - 1/8 = 7/8 = 87.5\\%$ has reacted. Read which of the two the question asks for.

**Problem 2.** A reaction of A has $t_{1/2} = 10$ min when $[\\text{A}]_0 = 0.40$ M, but $t_{1/2} = 20$ min when $[\\text{A}]_0 = 0.20$ M.

- **(a)** Which reaction order fits these half-lives?
- **(b)** What is $k$?
- **(c)** What would the half-life be with $[\\text{A}]_0 = 0.80$ M?

**(a) Order.** Halving $[\\text{A}]_0$ doubled $t_{1/2}$, so $t_{1/2} \\propto 1/[\\text{A}]_0$: **second order**. First order would keep $t_{1/2}$ fixed; zero order would halve it.

**(b) Rate constant.** From $t_{1/2} = 1/(k[\\text{A}]_0)$: $k = 1/((10\\text{ min})(0.40\\text{ M})) = 0.25\\text{ M}^{-1}\\text{min}^{-1}$. The other run agrees: $(20)(0.20) = 4$ as well.

**(c) New half-life.** With $k = 0.25\\text{ M}^{-1}\\text{min}^{-1}$ from (b): $t_{1/2} = 1/((0.25)(0.80)) = 5$ min. Doubling $[\\text{A}]_0$ halves the half-life.

## Identifying Reaction Order from Graphs

| If this plot is linear... | Order |
|--------------------------|-------|
| $[\\text{A}]$ vs $t$ | 0th |
| $\\ln[\\text{A}]$ vs $t$ | 1st |
| $1/[\\text{A}]$ vs $t$ | 2nd |
`
    },
    {
      id: 'kin2-quiz',
      type: 'multiple-choice' as const,
      content: `**Integrated Rate Laws & Half-Life** 🎯`,
      exercise: {
        questions: [
          {
            question: `A drug follows first-order elimination with $k = 0.231\\text{ hr}^{-1}$. What is the half-life?`,
            options: [`0.5 hr`, `1.0 hr`, `2.0 hr`, `3.0 hr`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$t_{1/2} = 0.693/k = 0.693/0.231 = \\mathbf{3.0\\text{ hr}}$. Each shorter half-life would need a larger $k$: 2.0 hr needs $k \\approx 0.35\\text{ hr}^{-1}$, 1.0 hr needs $0.693\\text{ hr}^{-1}$ and 0.5 hr needs $1.39\\text{ hr}^{-1}$.`
          },
          {
            question: `A first-order reaction has $t_{1/2} = 20$ min. What fraction of the original reactant remains after 60 minutes?`,
            options: [`1/2`, `1/4`, `1/8`, `1/16`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `60 min / 20 min = 3 half-lives. Fraction remaining = $(1/2)^3 = \\mathbf{1/8}$.`
          },
          {
            question: `A plot of $1/[\\text{A}]$ vs time is linear. What is the reaction order, and what is the slope of the line?`,
            options: [
              `1st order; slope = $+k$`,
              `1st order; slope = $-k$`,
              `2nd order; slope = $+k$`,
              `2nd order; slope = $-k$`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A linear $1/[\\text{A}]$ vs $t$ plot indicates **2nd order** kinetics: $1/[\\text{A}]_t = 1/[\\text{A}]_0 + kt$, so the slope is $+k$. As A is used up, $1/[\\text{A}]$ grows, so the line must rise; a slope of $-k$ belongs to the falling $[\\text{A}]$ and $\\ln[\\text{A}]$ plots. First order is the $\\ln[\\text{A}]$ plot, not $1/[\\text{A}]$.`
          },
          {
            question: `For a **second-order** reaction, if the initial concentration $[\\text{A}]_0$ is doubled, how does the half-life change?`,
            options: [
              `Half-life doubles`,
              `Half-life halves`,
              `Half-life is unchanged`,
              `Half-life quadruples`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `2nd-order half-life $= 1/(k[\\text{A}]_0)$. If $[\\text{A}]_0$ doubles, $t_{1/2}$ is **halved** — inverse relationship. Contrast with 1st order where half-life is constant. A half-life that doubles with $[\\text{A}]_0$ is the zero-order pattern, $[\\text{A}]_0/(2k)$; quadrupling fits no simple order.`
          },
          {
            question: `A radioactive isotope has a half-life of 5 days. A patient receives an injection of 800 mg. How much remains after 20 days?`,
            options: [`400 mg`, `200 mg`, `100 mg`, `50 mg`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Radioactive decay is first-order. $n = 20/5 = 4$ half-lives. Amount remaining $= 800 \\times (1/2)^4 = 800/16 = \\mathbf{50\\text{ mg}}$. 400, 200 and 100 mg are what remain after one, two and three half-lives (5, 10 and 15 days).`
          },
          {
            question: `Which statement is TRUE about first-order reactions?`,
            options: [
              `The half-life decreases as concentration decreases`,
              `The half-life increases as concentration decreases`,
              `The half-life is independent of initial concentration`,
              `The rate constant $k$ changes with concentration`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `For first-order reactions, $t_{1/2} = 0.693/k$, which depends only on $k$, not on $[\\text{A}]_0$. The **half-life is constant** — this is the defining feature of 1st-order kinetics. A half-life that changes as the concentration falls belongs to zero order (shrinks) or second order (grows), and $k$ never depends on concentration in any order.`
          }
        ]
      }
    },
    {
      id: 'kin2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **The straight plot names the order.** $[\\text{A}]$, $\\ln[\\text{A}]$ or $1/[\\text{A}]$ vs $t$ linear means zero, first or second order.
- **First-order half-life is constant.** $t_{1/2} = 0.693/k$ at any $[\\text{A}]_0$; radioactive decay and drug elimination work this way.
- **Count half-lives.** After $n = t/t_{1/2}$ half-lives, a first-order reactant is down to $(1/2)^n$ of its start.
- **Other half-lives track [A]₀.** Zero order: $[\\text{A}]_0/(2k)$, grows with $[\\text{A}]_0$; second order: $1/(k[\\text{A}]_0)$, shrinks with it.

**Common traps**

- **The sign of the slope.** Only the second-order $1/[\\text{A}]$ line rises, with slope $+k$; the other two fall with slope $-k$.
- **Subtracting instead of halving.** Two half-lives leave 1/4, not zero: each one halves what is left, not the original amount.
- **One half-life for every order.** Only first order keeps a fixed clock; zero- and second-order half-lives depend on $[\\text{A}]_0$.
- **Remaining vs. reacted.** After 3 half-lives 1/8 remains, so 7/8 has reacted; check which one the question asks for.
`
    }
  ]
};
