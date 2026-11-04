export const mcatEnergyMechanismsPart3Data = {
  topicSlug: 'mcat-general-chemistry-energy-mechanisms-mcat',
  sections: [
    {
      id: 'kin5-intro',
      type: 'text' as const,
      content: `# Kinetics: Energy, Catalysis & Mechanisms

**Part 3 of 3 — Mixed MCAT Review**

## High-Yield Checklist

- **Arrhenius:** $k = Ae^{-E_a/RT}$; higher $T$ or lower $E_a$ → larger $k$
- **Catalyst:** lowers $E_a$; increases $k$; does not change $\\Delta H$ or $K_{eq}$
- **RDS:** slowest step; determines overall rate law
- **Intermediates** cancel from overall equation; **catalysts** regenerate
- **Enzyme kinetics:** $V_{\\text{max}}$, $K_m$, competitive vs noncompetitive inhibition
`
    },
    {
      id: 'kin5-quiz',
      type: 'multiple-choice' as const,
      content: `**Mixed Kinetics — MCAT-Style Questions** 🎯`,
      exercise: {
        questions: [
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
      content: `## Key Takeaways — Part 3

- **Barriers set the speed.** $k = Ae^{-E_a/RT}$; a catalyst lowers $E_a$ without moving $\\Delta H$ or $K$.
- **The slow step rules.** The RDS sets the rate law; intermediates cancel and catalysts are regenerated.
- **Read the Arrhenius plot.** $\\ln k$ vs $1/T$ is a line of slope $-E_a/R$: steeper means a larger $E_a$; parallel lines differ only in $A$.
- **Michaelis-Menten.** $v = V_{\\text{max}}[\\text{S}]/(K_m + [\\text{S}])$: at $[\\text{S}] = K_m$ the rate is $V_{\\text{max}}/2$; far above $K_m$ it is zero order in substrate.

**Common traps**

- **Catalysts changing $K$.** A catalyst speeds both directions equally; $\\Delta H$ and $K$ stay the same.
- **Misreading $K_m$.** $K_m$ is the [S] that gives $V_{\\text{max}}/2$; a lower $K_m$ means higher affinity.
- **Kinetic product as the stable one.** The kinetic product has the lower barrier; the thermodynamic product has the lower energy. They need not be the same species.
- **Third order means a three-body step.** A rate law like $k[\\text{NO}]^2[\\text{Br}_2]$ usually comes from a fast pre-equilibrium plus a slow bimolecular step, not one termolecular collision.

## Energy, Catalysis & Mechanisms — Complete Topic Summary

**Part 1:** Activation energy, Arrhenius equation, collision theory, temperature effect on $k$, transition state vs. intermediate.

**Part 2:** Elementary steps, rate-determining step, substituting intermediates into rate law, catalysis types (homo/hetero/enzymatic), Michaelis-Menten kinetics, inhibitor types.

**Part 3:** Integrated MCAT practice.

**Next up:** the *Acids, Bases & Buffers* lesson — pH and pOH, strong and weak acids, $K_a$ and $K_b$, the Henderson-Hasselbalch equation and physiological buffers.
`
    }
  ]
};
