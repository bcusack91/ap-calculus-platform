export const mcatGenChemPart6Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc6-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 6 of 7 — Chemical Kinetics**

### Rate Law

$$\\text{Rate} = k[A]^m[B]^n$$

- $m$ and $n$ are determined experimentally (NOT from coefficients)
- Overall order = $m + n$

### Determining Order from Data

If doubling $[A]$ while holding $[B]$ constant:
- Rate doubles → first order in A
- Rate quadruples → second order in A
- Rate unchanged → zero order in A

### Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

$$\\ln k = \\ln A - \\frac{E_a}{RT}$$

- Higher $T$ → faster reaction (more molecules exceed $E_a$)
- Catalyst lowers $E_a$ but does NOT change $\\Delta G$ or $\\Delta H$

### Rate-Determining Step

The slowest step determines the overall rate law.`
    },
    {
      id: 'gc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Kinetics** 🎯',
      exercise: {
        questions: [
          {
            question: 'In an experiment, tripling $[A]$ triples the rate, and doubling $[B]$ quadruples the rate. The rate law is:',
            options: ['Rate $= k[A][B]^2$', 'Rate $= k[A]^2[B]$', 'Rate $= k[A][B]$', 'Rate $= k[A]^3[B]^2$'],
            correctAnswer: 0,
            explanation: 'Tripling [A] triples rate: first order in A ($3^1 = 3$). Doubling [B] quadruples rate: second order in B ($2^2 = 4$). Rate = $k[A][B]^2$.'
          },
          {
            question: 'A catalyst:',
            options: ['Lowers $E_a$ and speeds up both forward and reverse reactions equally', 'Increases $\\Delta G$ of the reaction', 'Shifts the equilibrium toward products', 'Only affects the forward reaction rate'],
            correctAnswer: 0,
            explanation: 'A catalyst lowers $E_a$ for both forward and reverse reactions equally. It does NOT change equilibrium ($K$, $\\Delta G$) — it only helps reach equilibrium faster.'
          }
        ]
      }
    },
    {
      id: 'gc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Rate law exponents are EXPERIMENTAL, not from balanced equation
- Method of initial rates: change one reactant, observe rate change
- Catalysts lower $E_a$ but don't change $K$, $\\Delta G$, or $\\Delta H$
- Rate-determining step = slowest elementary step`
    }
  ]
};
