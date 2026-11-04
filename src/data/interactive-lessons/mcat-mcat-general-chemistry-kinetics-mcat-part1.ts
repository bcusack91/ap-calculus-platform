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

Except in a zero-order reaction, the rate FALLS as the reactants are used up. That is why rate laws are measured with **initial rates**, taken at $t = 0$ while every starting concentration is still known.

## Rate Law

The **rate law** relates reaction rate to reactant concentrations:

$$\\text{rate} = k[\\text{A}]^m[\\text{B}]^n$$

- $k$ = rate constant (depends on temperature or a catalyst, not concentration)
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

The worked example below reads both orders and $k$ from this table.

## Units of $k$ by Reaction Order

| Order | Rate law | Units of $k$ |
|-------|---------|-------------|
| 0th | rate = $k$ | M/s |
| 1st | rate = $k$[A] | $\\text{s}^{-1}$ |
| 2nd | rate = $k[\\text{A}]^2$ or $k$[A][B] | $\\text{M}^{-1}\\text{s}^{-1}$ |

**MCAT tip:** The units of $k$ tell you the reaction order!

## Worked Example — Method of Initial Rates

**Problem 1.** Three initial-rate runs: Exp 1 has $[\\text{A}] = [\\text{B}] = 0.10$ M and rate $2.0 \\times 10^{-4}$ M/s. Exp 2 doubles [A] to 0.20 M (rate $4.0 \\times 10^{-4}$); Exp 3 triples [B] to 0.30 M (rate $6.0 \\times 10^{-4}$).

- **(a)** What is the order in A?
- **(b)** What is the order in B?
- **(c)** What is the rate law, and what is the overall order?
- **(d)** What is $k$, with its units?

**(a) Order in A.** Exp 1 → 2 holds [B] at 0.10 M and doubles [A]; the rate also doubles. $2 = 2^m$, so $m = 1$: **1st order in A**.

**(b) Order in B.** Exp 1 → 3 holds [A] at 0.10 M and triples [B]; the rate triples. $3 = 3^n$, so $n = 1$: **1st order in B**.

**(c) Rate law.** With $m = 1$ from (a) and $n = 1$ from (b): rate $= k[\\text{A}][\\text{B}]$, 2nd order overall ($m + n = 2$).

**(d) Rate constant.** Any run gives the same $k$; with Exp 1:

$$k = \\frac{\\text{rate}}{[\\text{A}][\\text{B}]} = \\frac{2.0 \\times 10^{-4}}{(0.10)(0.10)} = 2.0 \\times 10^{-2}\\text{ M}^{-1}\\text{s}^{-1}$$

Check: (M/s) ÷ M² gives $\\text{M}^{-1}\\text{s}^{-1}$, the second-order units of $k$.

**Problem 2.** Same reaction, $k = 2.0 \\times 10^{-2}\\text{ M}^{-1}\\text{s}^{-1}$ (Exp 1: 0.10 M each, $2.0 \\times 10^{-4}$ M/s). A new run starts with $[\\text{A}] = 0.30$ M and $[\\text{B}] = 0.20$ M.

- **(a)** What is the initial rate?
- **(b)** By what factor does it exceed Exp 1's rate, and does the ratio method agree?

**(a) Initial rate.** rate $= k[\\text{A}][\\text{B}] = (2.0 \\times 10^{-2})(0.30)(0.20) = 1.2 \\times 10^{-3}$ M/s.

**(b) Ratio check.** Against Exp 1, [A] is ×3 and [B] is ×2; both are first order, so the rate is ×(3 × 2) = ×6. $6 \\times 2.0 \\times 10^{-4} = 1.2 \\times 10^{-3}$ M/s, matching (a).

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
              `1st order overall; rate is unchanged`,
              `2nd order overall; rate is unchanged`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Overall order = 1+1 = 2. rate = $k$[A][B]. Tripling [A] × 3; halving [B] × 1/2. Net change: $3 \\times 0.5 = \\mathbf{1.5}$. Rate increases by 1.5×. A 3× rise ignores the halving of [B]; "unchanged" would need the two changes to cancel, which ×3 and ×½ do not; and two first-order reactants make the reaction 2nd order overall, not 1st.`
          },
          {
            question: `With [B] held constant, doubling [A] (Exp 1 → 2) quadruples the rate. What is the order of the reaction with respect to A?`,
            options: [`0th order`, `1st order`, `2nd order`, `3rd order`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$\\text{rate}_2/\\text{rate}_1 = ([\\text{A}]_2/[\\text{A}]_1)^m$. $4 = 2^m$. $m = \\mathbf{2}$ (second order). If it were 1st order, rate would only double.`
          },
          {
            question: `The units of a rate constant $k$ are $\\text{M}^{-1}\\text{s}^{-1}$. What is the overall reaction order?`,
            options: [`0`, `1`, `2`, `3`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\text{M}^{-1}\\text{s}^{-1}$ are the units of $k$ for a **2nd-order** reaction. 1st order: $\\text{s}^{-1}$; 0th order: M/s. In general, $k$ for overall order $n$ has units $\\text{M}^{1-n}\\text{s}^{-1}$, so 3rd order would be $\\text{M}^{-2}\\text{s}^{-1}$.`
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
            yield: 'HIGH',
            explanation: `Zero-order: rate = $k$; the rate is **independent of substrate concentration**. All enzyme active sites are saturated, so adding more substrate has no effect on rate. Doubling would be first order and quadrupling second order; the rate could only halve if the order were negative.`
          },
          {
            question: `For the reaction $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$, the rate law determined experimentally is $\\text{rate} = k[\\text{NO}]^2[\\text{O}_2]$. Why can't this rate law be predicted from the balanced equation?`,
            options: [
              `The equation is not balanced, so its coefficients are unreliable`,
              `The overall reaction may not be a single elementary step`,
              `Coefficients predict orders only for reactions run in solution`,
              `Orders depend on $\\Delta H$, which a balanced equation does not show`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Only an elementary step's rate law follows from its coefficients. An overall equation usually summarizes a multistep **mechanism**, and its rate law reflects the rate-determining step, so it must be measured. Here the rate law happens to match the stoichiometry, but that is not guaranteed. The equation is balanced (4 O on each side), phase does not make coefficients predictive, and orders have nothing to do with $\\Delta H$.`
          }
        ]
      }
    },
    {
      id: 'kin1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **Rate is one positive number.** Divide each $\\Delta[\\;]/\\Delta t$ by its coefficient; reactant terms carry a minus sign.
- **Orders come from data.** Compare runs where one concentration changes: $\\text{rate}_2/\\text{rate}_1 = ([\\text{X}]_2/[\\text{X}]_1)^m$.
- **Units of $k$ reveal order.** M/s is zero order, $\\text{s}^{-1}$ first order, $\\text{M}^{-1}\\text{s}^{-1}$ second order.
- **Zero order means saturation.** Rate $= k$ at any concentration, as for an enzyme with every active site occupied.

**Common traps**

- **Orders from coefficients.** Only an elementary step's coefficients give its orders; an overall equation needs experimental data.
- **Changing two things at once.** Compare runs where only one concentration changes, or divide out the order you already know.
- **Ignoring the coefficient.** In $2\\text{A} \\to$ products, [A] falls twice as fast as the reaction rate itself.
- **$k$ tracking concentration.** $k$ changes with temperature or a catalyst, never with concentration; the rate changes instead.
`
    }
  ]
};
