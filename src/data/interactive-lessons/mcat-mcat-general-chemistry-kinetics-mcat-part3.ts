export const mcatKineticsPart3Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin5-intro',
      type: 'text' as const,
      content: `# Kinetics: Rate Laws & Half-Lives

**Part 3 of 3 — Mixed MCAT Review**

## High-Yield Checklist

- ✅ **Rate law:** experimentally determined; rate = $k[\\text{A}]^m[\\text{B}]^n$
- ✅ **Units of $k$:** 0th order = M/s; 1st order = $\\text{s}^{-1}$; 2nd order = $\\text{M}^{-1}\\text{s}^{-1}$
- ✅ **Integrated rate laws:** 0th ($[A]$ vs $t$), 1st ($\\ln[A]$ vs $t$), 2nd ($1/[A]$ vs $t$)
- ✅ **First-order half-life:** $t_{1/2} = 0.693/k$ (constant)

## Worked Example — From Rate Data to Half-Life

**Problem.** Initial-rate runs on the decomposition of A show that doubling [A] doubles the rate. At $[\\text{A}] = 0.50$ M the rate is $0.010$ M/s.

- **(a)** What is the order in A?
- **(b)** What is $k$, with its units?
- **(c)** What is the half-life?
- **(d)** About how long until 1/8 of the A remains?

**(a) Order.** $2 = 2^m$ gives $m = 1$: first order, rate $= k[\\text{A}]$.

**(b) Rate constant.** $k = \\text{rate}/[\\text{A}] = 0.010/0.50 = 0.020\\text{ s}^{-1}$. The units $\\text{s}^{-1}$ confirm first order.

**(c) Half-life.** First order, so the half-life is constant: $t_{1/2} = 0.693/k = 0.693/0.020 \\approx 35$ s (34.7 s).

**(d) Time to 1/8.** $1/8 = (1/2)^3$, so three half-lives: $3 \\times 34.7 \\approx 104$ s, a little under 2 minutes.
`
    },
    {
      id: 'kin5-quiz',
      type: 'multiple-choice' as const,
      content: `**Mixed Kinetics — MCAT-Style Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: `The rate law for a reaction is rate = $k[\\text{A}]^2[\\text{B}]$. The initial concentrations are $[\\text{A}] = 0.4$ M and $[\\text{B}] = 0.2$ M; rate = $1.6 \\times 10^{-3}$ M/s. What is $k$?`,
            options: [
              `$5.0 \\times 10^{-2}\\;\\text{M}^{-2}\\text{s}^{-1}$`,
              `$1.0 \\times 10^{-1}\\;\\text{M}^{-2}\\text{s}^{-1}$`,
              `$2.0 \\times 10^{-2}\\;\\text{M}^{-2}\\text{s}^{-1}$`,
              `$5.0 \\times 10^{-3}\\;\\text{M}^{-2}\\text{s}^{-1}$`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$k = \\text{rate}/([\\text{A}]^2[\\text{B}]) = (1.6 \\times 10^{-3})/((0.4)^2(0.2)) = (1.6 \\times 10^{-3})/(0.032) = \\mathbf{5.0 \\times 10^{-2}}\\text{ M}^{-2}\\text{s}^{-1}$. Dividing by $[\\text{A}][\\text{B}]^2 = 0.016$ (squaring the wrong reactant) gives $1.0 \\times 10^{-1}$; dividing by $[\\text{A}][\\text{B}] = 0.08$ (forgetting the square) gives $2.0 \\times 10^{-2}$; and slipping a decimal to 0.32 gives $5.0 \\times 10^{-3}$.`
          },
          {
            question: `Carbon-14 has a half-life of 5730 years. A sample originally has 400 μg. Approximately how much remains after 11,460 years?`,
            options: [`200 μg`, `133 μg`, `100 μg`, `50 μg`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$11{,}460 / 5{,}730 = 2$ half-lives. Amount remaining $= 400 \\times (1/2)^2 = 400/4 = \\mathbf{100\\text{ μg}}$. 200 μg is what remains after only one half-life and 50 μg after three; 133 μg divides by 3, as if two half-lives removed thirds rather than halving twice.`
          },
          {
            question: `A plot of $\\ln[\\text{A}]$ vs time for a reaction yields a straight line with slope = $-0.050\\text{ s}^{-1}$. What is the half-life?`,
            options: [`0.035 s`, `13.9 s`, `20.0 s`, `27.7 s`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Linear $\\ln[\\text{A}]$ vs $t$ plot → 1st-order reaction. Slope $= -k = -0.050\\text{ s}^{-1}$, so $k = 0.050\\text{ s}^{-1}$. $t_{1/2} = 0.693/0.050 = \\mathbf{13.9\\text{ s}}$. Multiplying instead, $0.693 \\times 0.050$, gives 0.035 s; $1/k = 20.0$ s drops the $\\ln 2$; and 27.7 s is two half-lives.`
          }
        ]
      }
    },
    {
      id: 'kin5-summary',
      type: 'text' as const,
      content: `## Rate Laws & Half-Lives — Complete Topic Summary

**Part 1:** Rate laws, extracting order from experimental data, units of $k$, zero-order reactions.

**Part 2:** Integrated rate laws (0th, 1st, 2nd), graphical identification, half-life formulas, first-order $(1/2)^n$ calculations.

**Part 3:** Integrated MCAT practice.

## Key Takeaways — Part 3

- **Orders come from data.** Read them from initial-rate ratios, from which plot is linear, or from the units of $k$.
- **Count first-order half-lives.** $t_{1/2} = 0.693/k$ is constant, so $(1/2)^n$ remains after $n$ half-lives.

**Common traps**

- **Rate laws from stoichiometry.** Coefficients give orders only for an elementary step; otherwise use experimental data.
- **Misreading the linear plot.** $\\ln[\\text{A}]$ linear is first order and $1/[\\text{A}]$ linear is second; an $[\\text{A}]$ line is zero order.

**Next up:** the *Kinetics: Energy, Catalysis & Mechanisms* lesson — activation energy, the Arrhenius equation, collision theory, reaction mechanisms and the rate-determining step, and catalysis, including enzyme kinetics.
`
    }
  ]
};
