export const mcatKineticsPart2Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin2-intro',
      type: 'text' as const,
      content: `# Chemical Kinetics

**Part 2 of 5 — Integrated Rate Laws & Half-Life**

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

**Half-life:** $t_{1/2} = \\frac{1}{k[\\text{A}]_0}$ (depends on initial concentration; increases over time)

## Summary Table

| Order | Integrated law | Linear plot | Half-life |
|-------|---------------|-------------|-----------|
| 0 | $[\\text{A}] = [\\text{A}]_0 - kt$ | $[\\text{A}]$ vs $t$ | $[\\text{A}]_0/2k$ |
| 1 | $\\ln[\\text{A}] = \\ln[\\text{A}]_0 - kt$ | $\\ln[\\text{A}]$ vs $t$ | $0.693/k$ |
| 2 | $1/[\\text{A}] = 1/[\\text{A}]_0 + kt$ | $1/[\\text{A}]$ vs $t$ | $1/(k[\\text{A}]_0)$ |

## Half-Life Applications (MCAT)

For first-order processes:

$$\\frac{[\\text{A}]_t}{[\\text{A}]_0} = \\left(\\frac{1}{2}\\right)^n \\quad \\text{where } n = \\frac{t}{t_{1/2}}$$

**Example:** $k = 0.0693\\text{ min}^{-1}$ (1st order). What fraction remains after 30 min?

$t_{1/2} = 0.693/0.0693 = 10\\text{ min}$. After 30 min = 3 half-lives.

$$\\text{fraction remaining} = (1/2)^3 = 1/8 = 12.5\\%$$

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
            explanation: `$t_{1/2} = 0.693/k = 0.693/0.231 = \\mathbf{3.0\\text{ hr}}$.`
          },
          {
            question: `A first-order reaction has $t_{1/2} = 20$ min. What fraction of the original reactant remains after 60 minutes?`,
            options: [`1/2`, `1/4`, `1/8`, `1/16`],
            correctAnswer: 2,
            explanation: `60 min / 20 min = 3 half-lives. Fraction remaining = $(1/2)^3 = \\mathbf{1/8}$.`
          },
          {
            question: `A plot of $1/[\\text{A}]$ vs time yields a straight line with a positive slope. What is the reaction order and what does the slope represent?`,
            options: [
              `0th order; slope = $-k$`,
              `1st order; slope = $-k$`,
              `2nd order; slope = $+k$`,
              `2nd order; slope = $-k$`
            ],
            correctAnswer: 2,
            explanation: `A linear $1/[\\text{A}]$ vs $t$ plot indicates **2nd order** kinetics. The slope of the 2nd-order integrated law is $+k$ (positive).`
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
            explanation: `2nd-order half-life $= 1/(k[\\text{A}]_0)$. If $[\\text{A}]_0$ doubles, $t_{1/2}$ is **halved** — inverse relationship. Contrast with 1st order where half-life is constant.`
          },
          {
            question: `A radioactive isotope has a half-life of 5 days. A patient receives an injection of 800 mg. How much remains after 20 days?`,
            options: [`400 mg`, `200 mg`, `100 mg`, `50 mg`],
            correctAnswer: 3,
            explanation: `Radioactive decay is first-order. $n = 20/5 = 4$ half-lives. Amount remaining $= 800 \\times (1/2)^4 = 800/16 = \\mathbf{50\\text{ mg}}$.`
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
            explanation: `For first-order reactions, $t_{1/2} = 0.693/k$, which depends only on $k$, not on $[\\text{A}]_0$. The **half-life is constant** — this is the defining feature of 1st-order kinetics.`
          }
        ]
      }
    },
    {
      id: 'kin2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **0th order:** $[\\text{A}]$ vs $t$ linear; $t_{1/2} = [\\text{A}]_0/2k$ (concentration-dependent)
- **1st order:** $\\ln[\\text{A}]$ vs $t$ linear; $t_{1/2} = 0.693/k$ (constant)
- **2nd order:** $1/[\\text{A}]$ vs $t$ linear; $t_{1/2} = 1/k[\\text{A}]_0$ (inversely proportional to concentration)
- 1st-order fraction remaining: $(1/2)^n$ where $n$ = number of half-lives elapsed
- Radioactive decay, drug elimination = 1st-order processes
- Linear graph identity: the order of the reaction is identified by which plot gives a straight line
`
    }
  ]
};
