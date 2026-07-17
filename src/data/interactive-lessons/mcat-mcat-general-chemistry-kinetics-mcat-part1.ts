export const mcatKineticsPart1Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin1-intro',
      type: 'text' as const,
      content: `# Chemical Kinetics

**Part 1 of 5 — Rate Laws & Reaction Order**

## Reaction Rate

The reaction rate measures how quickly reactants are consumed or products are formed.

For $a\\text{A} + b\\text{B} \\to c\\text{C}$:

$$\\text{rate} = -\\frac{1}{a}\\frac{\\Delta[\\text{A}]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[\\text{B}]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[\\text{C}]}{\\Delta t}$$

Rate is always expressed as a **positive** number; the minus sign accounts for consumption of reactants.

## Rate Law

The **rate law** relates reaction rate to reactant concentrations:

$$\\text{rate} = k[\\text{A}]^m[\\text{B}]^n$$

- $k$ = rate constant (depends on temperature, not concentration)
- $m$ = order with respect to A
- $n$ = order with respect to B
- Overall reaction order = $m + n$

**Rate laws must be determined experimentally** — you cannot read them from a balanced equation (unless it is an elementary step).

## Determining Order from Experimental Data

Compare experiments where all concentrations except one are held constant:

$$\\frac{\\text{rate}_2}{\\text{rate}_1} = \\left(\\frac{[\\text{A}]_2}{[\\text{A}]_1}\\right)^m$$

**Example:**

| Exp. | [A] (M) | [B] (M) | Rate (M/s) |
|------|---------|---------|-----------|
| 1 | 0.10 | 0.10 | $2.0 \\times 10^{-4}$ |
| 2 | 0.20 | 0.10 | $4.0 \\times 10^{-4}$ |
| 3 | 0.10 | 0.30 | $6.0 \\times 10^{-4}$ |

From Exp 1 vs 2: doubling [A] doubles rate → **1st order in A** ($m = 1$)

From Exp 1 vs 3: tripling [B] triples rate → **1st order in B** ($n = 1$)

Overall: 2nd order; rate $= k[\\text{A}][\\text{B}]$

$$k = \\frac{\\text{rate}}{[\\text{A}][\\text{B}]} = \\frac{2.0 \\times 10^{-4}}{(0.10)(0.10)} = 2.0 \\times 10^{-2}\\text{ M}^{-1}\\text{s}^{-1}$$

## Units of $k$ by Reaction Order

| Order | Rate law | Units of $k$ |
|-------|---------|-------------|
| 0th | rate = $k$ | M/s |
| 1st | rate = $k$[A] | 1/s $(s^{-1})$ |
| 2nd | rate = $k$[A]$ {}^{2}$ or $k$[A][B] | $M^{-1}s^{-1}$ |

**MCAT tip:** The units of $k$ tell you the reaction order!

## Zero-Order Reactions

Rate is **constant**, independent of concentration:
$$\\text{rate} = k$$

Example: enzyme-catalyzed reactions at substrate saturation; zero-order because the active sites are all occupied.
`
    },
    {
      id: 'kin1-quiz',
      type: 'multiple-choice' as const,
      content: `**Rate Laws & Reaction Order** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction is found to be 1st order in each of two reactants A and B. What is the overall order, and how does rate change if [A] is tripled and [B] is halved?`,
            options: [
              `2nd order overall; rate increases 1.5×`,
              `2nd order overall; rate increases 3×`,
              `1st order overall; rate stays the same`,
              `2nd order overall; rate stays the same`
            ],
            correctAnswer: 0,
            explanation: `Overall order = 1+1 = 2. rate = $k$[A][B]. Tripling [A] × 3; halving [B] × 1/2. Net change: $3 \\times 0.5 = \\mathbf{1.5}$. Rate increases by 1.5×.`
          },
          {
            question: `The following data are collected: [A] doubles from Exp 1 to Exp 2 and the rate quadruples. What is the order of the reaction with respect to A?`,
            options: [`0th order`, `1st order`, `2nd order`, `3rd order`],
            correctAnswer: 2,
            explanation: `$\\text{rate}_2/\\text{rate}_1 = ([\\text{A}]_2/[\\text{A}]_1)^m$. $4 = 2^m$. $m = \\mathbf{2}$ (second order). If it were 1st order, rate would only double.`
          },
          {
            question: `The units of a rate constant $k$ are $\\text{M}^{-1}\\text{s}^{-1}$. What is the overall reaction order?`,
            options: [`0`, `1`, `2`, `3`],
            correctAnswer: 2,
            explanation: `$\\text{M}^{-1}\\text{s}^{-1}$ are the units of $k$ for a **2nd-order** reaction. 1st order: $\\text{s}^{-1}$; 0th order: M/s.`
          },
          {
            question: `An enzyme-catalyzed reaction follows zero-order kinetics in its substrate. The substrate concentration is doubled. What happens to the reaction rate?`,
            options: [
              `Rate doubles`,
              `Rate quadruples`,
              `Rate is unchanged`,
              `Rate halves`
            ],
            correctAnswer: 2,
            explanation: `Zero-order: rate = $k$; the rate is **independent of substrate concentration**. All enzyme active sites are saturated, so adding more substrate has no effect on rate.`
          },
          {
            question: `For the reaction $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$, the rate law determined experimentally is $\\text{rate} = k[\\text{NO}]^2[\\text{O}_2]$. Why can't this rate law be predicted from the balanced equation?`,
            options: [
              `The equation is not balanced correctly`,
              `Rate laws only apply to elementary steps, and the mechanism may differ from the stoichiometry`,
              `The rate law should be rate = $k[\\text{NO}]^2[\\text{O}_2]^2$`,
              `Rate laws can always be read from the balanced equation`
            ],
            correctAnswer: 1,
            explanation: `Rate laws reflect the rate-determining elementary step of the **mechanism**, not the overall balanced equation. Coincidentally this rate law matches the stoichiometry, but that is not guaranteed.`
          }
        ]
      }
    },
    {
      id: 'kin1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- Rate laws must be determined experimentally from rate/concentration data
- To find order: compare runs where only one concentration changes; use ratio $\\text{rate}_2/\\text{rate}_1 = ([\\text{X}]_2/[\\text{X}]_1)^m$
- Units of $k$: 0th order = M/s; 1st order = $s^{-1}$; 2nd order = $M^{-1}s^{-1}$
- Zero-order reactions: rate is constant; seen in enzyme kinetics at Vmax
- Rate laws are determined experimentally — **not** from balanced equations (unless elementary step)
`
    }
  ]
};
