export const mcatKineticsPart5Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin5-intro',
      type: 'text' as const,
      content: `# Chemical Kinetics

**Part 5 of 5 — Mixed MCAT Review**

## High-Yield Checklist

- ✅ **Rate law:** experimentally determined; rate = $k[\\text{A}]^m[\\text{B}]^n$
- ✅ **Units of $k$:** 0th order = M/s; 1st order = s⁻¹; 2nd order = M⁻¹s⁻¹
- ✅ **Integrated rate laws:** 0th ($[A]$ vs $t$), 1st ($\\ln[A]$ vs $t$), 2nd ($1/[A]$ vs $t$)
- ✅ **First-order half-life:** $t_{1/2} = 0.693/k$ (constant)
- ✅ **Arrhenius:** $k = Ae^{-E_a/RT}$; higher $T$ or lower $E_a$ → larger $k$
- ✅ **Catalyst:** lowers $E_a$; increases $k$; does not change $\\Delta H$ or $K_{eq}$
- ✅ **RDS:** slowest step; determines overall rate law
- ✅ **Intermediates** cancel from overall equation; **catalysts** regenerate
- ✅ **Enzyme kinetics:** $V_{\\text{max}}$, $K_m$, competitive vs noncompetitive inhibition
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
              `$5.0 \\times 10^{-2}$ M⁻²s⁻¹`,
              `$1.25 \\times 10^{-1}$ M⁻²s⁻¹`,
              `$2.0 \\times 10^{-2}$ M⁻²s⁻¹`,
              `$5.0 \\times 10^{-3}$ M⁻²s⁻¹`
            ],
            correctAnswer: 0,
            explanation: `$k = \\text{rate}/([\\text{A}]^2[\\text{B}]) = (1.6 \\times 10^{-3})/((0.4)^2(0.2)) = (1.6 \\times 10^{-3})/(0.032) = \\mathbf{5.0 \\times 10^{-2}}\\text{ M}^{-2}\\text{s}^{-1}$.`
          },
          {
            question: `Carbon-14 has a half-life of 5730 years. A sample originally has 400 μg. Approximately how much remains after 11,460 years?`,
            options: [`200 μg`, `133 μg`, `100 μg`, `50 μg`],
            correctAnswer: 2,
            explanation: `$11{,}460 / 5{,}730 = 2$ half-lives. Amount remaining $= 400 \\times (1/2)^2 = 400/4 = \\mathbf{100\\text{ μg}}$.`
          },
          {
            question: `A plot of $\\ln[\\text{A}]$ vs time for a reaction yields a straight line with slope = $-0.050\\text{ s}^{-1}$. What is the half-life?`,
            options: [`0.14 s`, `13.9 s`, `100 s`, `200 s`],
            correctAnswer: 1,
            explanation: `Linear $\\ln[\\text{A}]$ vs $t$ plot → 1st-order reaction. Slope $= -k = -0.050\\text{ s}^{-1}$, so $k = 0.050\\text{ s}^{-1}$. $t_{1/2} = 0.693/0.050 = \\mathbf{13.9\\text{ s}}$.`
          },
          {
            question: `An enzyme reaction's $K_m = 2.0 \\times 10^{-3}$ M. The substrate concentration is exactly $K_m$. What fraction of $V_{\\text{max}}$ is the reaction velocity?`,
            options: [`25%`, `50%`, `75%`, `100%`],
            correctAnswer: 1,
            explanation: `Michaelis-Menten: $v = V_{\\text{max}}[\\text{S}]/(K_m + [\\text{S}])$. When $[\\text{S}] = K_m$: $v = V_{\\text{max}} \\cdot K_m / (K_m + K_m) = V_{\\text{max}}/2 = \\mathbf{50\\%}$ of $V_{\\text{max}}$. This is literally the definition of $K_m$.`
          },
          {
            question: `Which factor does NOT increase the rate of a chemical reaction?`,
            options: [
              `Increasing temperature`,
              `Adding a catalyst`,
              `Increasing reactant concentration (for 1st-order reaction)`,
              `Increasing the activation energy`
            ],
            correctAnswer: 3,
            explanation: `Increasing $E_a$ would **decrease** the rate (fewer molecules have enough energy to react). All other options increase rate: higher $T$ increases $k$; catalyst lowers $E_a$; higher concentration increases rate for concentration-dependent rate laws.`
          },
          {
            question: `A mechanism is proposed: Step 1 (fast): $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$; Step 2 (slow): $\\text{N}_2\\text{O}_2 + \\text{H}_2 \\to \\text{N}_2\\text{O} + \\text{H}_2\\text{O}$. What is the predicted rate law?`,
            options: [
              `rate = $k[\\text{NO}]^2[\\text{H}_2]$`,
              `rate = $k[\\text{N}_2\\text{O}_2][\\text{H}_2]$`,
              `rate = $k[\\text{NO}][\\text{H}_2]$`,
              `rate = $k[\\text{N}_2\\text{O}]$`
            ],
            correctAnswer: 0,
            explanation: `RDS is Step 2: rate = $k_2[\\text{N}_2\\text{O}_2][\\text{H}_2]$. $\\text{N}_2\\text{O}_2$ is an intermediate; from Step 1 equilibrium $K_1 = [\\text{N}_2\\text{O}_2]/[\\text{NO}]^2$, so $[\\text{N}_2\\text{O}_2] = K_1[\\text{NO}]^2$. Substituting: rate = $k_2 K_1[\\text{NO}]^2[\\text{H}_2] = \\mathbf{k[\\text{NO}]^2[\\text{H}_2]}$.`
          },
          {
            question: `Adding a noncompetitive inhibitor to an enzyme reaction causes which change on a Michaelis-Menten plot?`,
            options: [
              `$V_{\\text{max}}$ unchanged, $K_m$ increased`,
              `$V_{\\text{max}}$ decreased, $K_m$ unchanged`,
              `$V_{\\text{max}}$ decreased, $K_m$ increased`,
              `$V_{\\text{max}}$ increased, $K_m$ decreased`
            ],
            correctAnswer: 1,
            explanation: `Noncompetitive inhibitors bind at an **allosteric site** (not the active site), reducing enzyme efficiency regardless of substrate concentration. They **lower $V_{\\text{max}}$** but do not affect substrate binding, so $K_m$ is **unchanged**.`
          },
          {
            question: `Two reactions have the same temperature but different activation energies: Reaction 1: $E_a = 30$ kJ/mol; Reaction 2: $E_a = 60$ kJ/mol. Which reaction is faster, and by approximately what factor? ($RT \\approx 2.5$ kJ/mol at 300 K)`,
            options: [
              `Reaction 1 is about $e^{12}$ times faster than Reaction 2`,
              `Reaction 2 is about $e^{12}$ times faster than Reaction 1`,
              `Reaction 1 is about 2 times faster than Reaction 2`,
              `Both reactions proceed at the same rate`
            ],
            correctAnswer: 0,
            explanation: `$k \\propto e^{-E_a/RT}$. $k_1/k_2 = e^{-(E_{a1}-E_{a2})/RT} = e^{-(-30)/2.5} = e^{+12}$. Reaction 1 (lower $E_a$) is $\\approx e^{12} \\approx 160{,}000$ times faster.`
          }
        ]
      }
    },
    {
      id: 'kin5-summary',
      type: 'text' as const,
      content: `## Kinetics — Complete Topic Summary

**Part 1:** Rate laws, extracting order from experimental data, units of $k$, zero-order reactions.

**Part 2:** Integrated rate laws (0th, 1st, 2nd), graphical identification, half-life formulas, first-order $(1/2)^n$ calculations.

**Part 3:** Activation energy, Arrhenius equation, collision theory, temperature effect on $k$, transition state vs. intermediate.

**Part 4:** Elementary steps, rate-determining step, substituting intermediates into rate law, catalysis types (homo/hetero/enzymatic), Michaelis-Menten kinetics, inhibitor types.

**Part 5:** Integrated MCAT practice.

### Most Common MCAT Pitfalls
1. Using stoichiometry to write rate laws instead of experimental data
2. Confusing intermediates with catalysts in mechanisms
3. Thinking catalysts change $\\Delta H$ or the equilibrium constant (they don't)
4. Forgetting Km is the concentration at half-Vmax (not an affinity in M directly)
5. Misidentifying reaction order from graphs
`
    }
  ]
};
