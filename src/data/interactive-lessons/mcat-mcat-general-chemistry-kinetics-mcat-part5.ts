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
- ✅ **Units of $k$:** 0th order = M/s; 1st order = $\\text{s}^{-1}$; 2nd order = $\\text{M}^{-1}\\text{s}^{-1}$
- ✅ **Integrated rate laws:** 0th ($[A]$ vs $t$), 1st ($\\ln[A]$ vs $t$), 2nd ($1/[A]$ vs $t$)
- ✅ **First-order half-life:** $t_{1/2} = 0.693/k$ (constant)
- ✅ **Arrhenius:** $k = Ae^{-E_a/RT}$; higher $T$ or lower $E_a$ → larger $k$
- ✅ **Catalyst:** lowers $E_a$; increases $k$; does not change $\\Delta H$ or $K_{eq}$
- ✅ **RDS:** slowest step; determines overall rate law
- ✅ **Intermediates** cancel from overall equation; **catalysts** regenerate
- ✅ **Enzyme kinetics:** $V_{\\text{max}}$, $K_m$, competitive vs noncompetitive inhibition

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
          },
          {
            question: `An enzyme reaction's $K_m = 2.0 \\times 10^{-3}$ M. The substrate concentration is exactly $K_m$. What fraction of $V_{\\text{max}}$ is the reaction velocity?`,
            options: [`25%`, `50%`, `75%`, `100%`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Michaelis-Menten: $v = V_{\\text{max}}[\\text{S}]/(K_m + [\\text{S}])$. When $[\\text{S}] = K_m$: $v = V_{\\text{max}} \\cdot K_m / (K_m + K_m) = V_{\\text{max}}/2 = \\mathbf{50\\%}$ of $V_{\\text{max}}$. This is literally the definition of $K_m$. 75% would need $[\\text{S}] = 3K_m$ and 25% would need $[\\text{S}] = K_m/3$; 100% is only approached at saturating $[\\text{S}]$. The numerical value of $K_m$ does not change the answer.`
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
            yield: 'HIGH',
            explanation: `Increasing $E_a$ would **decrease** the rate (fewer molecules have enough energy to react). All other options increase rate: higher $T$ increases $k$; catalyst lowers $E_a$; higher concentration increases rate for concentration-dependent rate laws, and a first-order rate rises in direct proportion to the reactant concentration.`
          },
          {
            question: `A mechanism is proposed: Step 1 (fast): $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$; Step 2 (slow): $\\text{N}_2\\text{O}_2 + \\text{H}_2 \\to \\text{N}_2\\text{O} + \\text{H}_2\\text{O}$. What is the predicted rate law?`,
            options: [
              `rate = $k[\\text{NO}]^2[\\text{H}_2]$`,
              `rate = $k[\\text{N}_2\\text{O}_2][\\text{H}_2]$`,
              `rate = $k[\\text{NO}]^2[\\text{H}_2]^2$`,
              `rate = $k_2[\\text{NO}]^2[\\text{H}_2]/K_1$`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `RDS is Step 2: rate = $k_2[\\text{N}_2\\text{O}_2][\\text{H}_2]$. $\\text{N}_2\\text{O}_2$ is an intermediate; from Step 1 equilibrium $K_1 = [\\text{N}_2\\text{O}_2]/[\\text{NO}]^2$, so $[\\text{N}_2\\text{O}_2] = K_1[\\text{NO}]^2$. Substituting: rate = $k_2 K_1[\\text{NO}]^2[\\text{H}_2] = \\mathbf{k[\\text{NO}]^2[\\text{H}_2]}$. Leaving $[\\text{N}_2\\text{O}_2]$ in the rate law keeps an intermediate; squaring $[\\text{H}_2]$ ignores that only one $\\text{H}_2$ enters the slow step; dividing by $K_1$ inverts the equilibrium expression.`
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
            yield: 'ULTRA_HIGH',
            explanation: `Noncompetitive inhibitors bind at an **allosteric site** (not the active site), reducing enzyme efficiency regardless of substrate concentration. They **lower $V_{\\text{max}}$** but do not affect substrate binding, so $K_m$ is **unchanged**. $K_m$ up with $V_{\\text{max}}$ unchanged is the competitive pattern; changing both (lower $V_{\\text{max}}$, higher $K_m$) describes mixed inhibition; and no inhibitor raises $V_{\\text{max}}$.`
          },
          {
            question: `Two reactions have the same temperature but different activation energies: Reaction 1: $E_a = 30$ kJ/mol; Reaction 2: $E_a = 60$ kJ/mol. Which reaction is faster, and by approximately what factor? ($RT \\approx 2.5$ kJ/mol at 300 K)`,
            options: [
              `Reaction 1, faster by a factor of about $e^{12}$`,
              `Reaction 2, faster by a factor of about $e^{12}$`,
              `Reaction 1, faster by a factor of about 2`,
              `Reaction 2, faster by a factor of about 2`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$k \\propto e^{-E_a/RT}$ (same frequency factor assumed). $k_1/k_2 = e^{-(E_{a1}-E_{a2})/RT} = e^{-(-30)/2.5} = e^{+12}$. Reaction 1 (lower $E_a$) is $\\approx e^{12} \\approx 160{,}000$ times faster. A factor of 2 treats the rate as proportional to $1/E_a$ rather than exponential in it, and Reaction 2's higher barrier makes it the slower one.`
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

## Key Takeaways — Part 5

- **Orders come from data.** Read them from initial-rate ratios, from which plot is linear, or from the units of $k$.
- **Count first-order half-lives.** $t_{1/2} = 0.693/k$ is constant, so $(1/2)^n$ remains after $n$ half-lives.
- **Barriers set the speed.** $k = Ae^{-E_a/RT}$; a catalyst lowers $E_a$ without moving $\\Delta H$ or $K$.
- **The slow step rules.** The RDS sets the rate law; intermediates cancel and catalysts are regenerated.

**Common traps**

- **Rate laws from stoichiometry.** Coefficients give orders only for an elementary step; otherwise use experimental data.
- **Catalysts changing $K$.** A catalyst speeds both directions equally; $\\Delta H$ and $K$ stay the same.
- **Misreading $K_m$.** $K_m$ is the [S] that gives $V_{\\text{max}}/2$; a lower $K_m$ means higher affinity.
- **Misreading the linear plot.** $\\ln[\\text{A}]$ linear is first order and $1/[\\text{A}]$ linear is second; an $[\\text{A}]$ line is zero order.
`
    }
  ]
};
