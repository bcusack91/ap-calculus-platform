export const mcatEnergyMechanismsPart2Data = {
  topicSlug: 'mcat-general-chemistry-energy-mechanisms-mcat',
  sections: [
    {
      id: 'kin4-intro',
      type: 'text' as const,
      content: `# Kinetics: Energy, Catalysis & Mechanisms

**Part 2 of 3 — Reaction Mechanisms, Rate-Determining Step & Catalysis**

## Elementary Steps & Molecularity

A **reaction mechanism** is a proposed sequence of elementary steps that sum to give the overall balanced equation.

| Molecularity | Number of reactant molecules | Example |
|-------------|------------------------------|---------|
| Unimolecular | 1 | $\\text{A} \\to \\text{products}$ |
| Bimolecular | 2 | $\\text{A} + \\text{B} \\to$ products |
| Termolecular | 3 | $\\text{A} + \\text{B} + \\text{C} \\to$ products |

**Key distinction:** A rate law has the form rate $= k[\\text{A}]^m[\\text{B}]^n$. For an elementary step only, each exponent equals that reactant's coefficient in the step: $\\text{A} + \\text{B} \\to$ products gives rate $= k[\\text{A}][\\text{B}]$, and $2\\text{A} \\to$ products gives rate $= k[\\text{A}]^2$. For an overall reaction, the exponents must be measured.

Termolecular steps are rare, because three particles seldom collide at the same instant with the right energy and orientation.

## Rate-Determining Step (RDS)

The **slowest elementary step** controls the overall rate. The rate law for the overall reaction reflects the stoichiometry of the RDS, once any intermediate in it is rewritten in terms of reactants (worked example below).

## Checking a Proposed Mechanism

1. Steps must sum to give the **overall balanced equation** (intermediates cancel)
2. The rate law from the RDS must match the **experimentally determined rate law**
3. A catalyst that appears in one step must be regenerated in a later step

## Intermediates vs. Catalysts in Mechanisms

- **Intermediate:** Produced in one step, consumed in a later step; does **not** appear in the overall equation
- **Catalyst:** Consumed in one step, regenerated in a later step; does **not** appear in the overall equation but speeds up the reaction

## Where Kinetics Meets Equilibrium

- At equilibrium the forward and reverse rates are EQUAL: both reactions keep running, but the concentrations stop changing.
- For an elementary step $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$: $k_f[\\text{A}][\\text{B}] = k_r[\\text{C}]$, so $K = \\dfrac{[\\text{C}]}{[\\text{A}][\\text{B}]} = \\dfrac{k_f}{k_r}$.
- A catalyst raises $k_f$ and $k_r$ by the same factor, so $K$ is unchanged; equilibrium is simply reached sooner.
- Temperature changes $k_f$ and $k_r$ by DIFFERENT factors, because the two directions have different barriers, so $K$ itself moves with temperature. ($Q$ vs $K$ and Le Châtelier: *Titrations, Equilibrium & Solubility*, Part 2.)

## Worked Example — Testing a Mechanism

**Problem 1.** Proposed mechanism: Step 1 (slow) $\\text{NO}_2 + \\text{NO}_2 \\to \\text{NO}_3 + \\text{NO}$; Step 2 (fast) $\\text{NO}_3 + \\text{CO} \\to \\text{NO}_2 + \\text{CO}_2$. Experiment gives rate $= k[\\text{NO}_2]^2$.

- **(a)** What overall equation do the steps add up to?
- **(b)** Which species is an intermediate, and is there a catalyst?
- **(c)** What rate law does the mechanism predict?
- **(d)** Is the mechanism consistent with experiment?

**(a) Overall equation.** Add the steps and cancel what appears on both sides (NO₃ and one NO₂): $\\text{NO}_2 + \\text{CO} \\to \\text{NO} + \\text{CO}_2$.

**(b) Intermediate.** NO₃ is made in Step 1 and used up in Step 2, so it is an intermediate. There is no catalyst: NO₂ is regenerated in Step 2 but consumed overall, since two enter Step 1.

**(c) Predicted rate law.** Step 1 is the RDS and elementary, bimolecular in NO₂, so rate $= k[\\text{NO}_2]^2$. CO reacts only after the bottleneck, so it does not appear.

**(d) Consistency.** Yes: the steps sum to the overall equation from (a), and the predicted rate law from (c), $k[\\text{NO}_2]^2$, matches experiment. Consistent means supported, not proven.

**Problem 2.** Proposed mechanism: Step 1 (fast, reversible; $k_1$ forward, $k_{-1}$ reverse) $\\text{NO} + \\text{Br}_2 \\rightleftharpoons \\text{NOBr}_2$; Step 2 (slow, $k_2$) $\\text{NOBr}_2 + \\text{NO} \\to 2\\text{NOBr}$.

- **(a)** What is the overall reaction, and which species is the intermediate?
- **(b)** What rate law does the slow step give?
- **(c)** How can the intermediate's concentration be written in terms of reactants?
- **(d)** What is the rate law, and what is the observed $k$?
- **(e)** What is the overall order?

**(a) Overall and intermediate.** Adding the steps cancels NOBr₂: $2\\text{NO} + \\text{Br}_2 \\to 2\\text{NOBr}$. NOBr₂ is made in Step 1 and used in Step 2, so it is the intermediate.

**(b) Slow-step rate law.** Step 2 is the RDS: rate $= k_2[\\text{NOBr}_2][\\text{NO}]$. It still contains the intermediate, which cannot appear in an experimental rate law.

**(c) Fast pre-equilibrium.** Step 1 stays at equilibrium, so its forward and reverse rates are equal: $k_1[\\text{NO}][\\text{Br}_2] = k_{-1}[\\text{NOBr}_2]$. So $[\\text{NOBr}_2] = K_1[\\text{NO}][\\text{Br}_2]$, with $K_1 = k_1/k_{-1}$.

**(d) Rate law.** Substituting (c) into (b): rate $= k_2K_1[\\text{NO}]^2[\\text{Br}_2] = k[\\text{NO}]^2[\\text{Br}_2]$. The observed rate constant is the product $k = k_2K_1 = k_2k_1/k_{-1}$.

**(e) Overall order.** Second order in NO plus first in Br₂ (sum of exponents): **third order** overall. It happens to match the overall coefficients, but the reaction is not one termolecular step.

## Types of Catalysis

### Homogeneous Catalysis

Catalyst and reactants are in the **same phase** (e.g., acid catalysis in solution).

**Example:** Acid-catalyzed ester hydrolysis — $\\text{H}^+$ speeds up the reaction and is regenerated.

### Heterogeneous Catalysis

Catalyst and reactants are in **different phases**.

**Example:** Platinum catalyst in catalytic converters (solid Pt surface, gaseous reactants). Mechanism: reactant **adsorption** onto metal surface → reaction → product **desorption**.

### Enzymatic Catalysis (Biological)

Enzymes are protein catalysts:
- **Active site** binds substrate (lock-and-key or induced-fit model)
- **Michaelis-Menten kinetics:** $v = V_{\\text{max}}[\\text{S}]/(K_m + [\\text{S}])$
- $K_m$ = substrate concentration at which rate = $V_{\\text{max}}/2$; a lower $K_m$ means higher affinity for the substrate
- At very high $[\\text{S}]$: rate = $V_{\\text{max}}$, zero order in substrate (the rate is independent of $[\\text{S}]$) because all active sites are saturated

## Effect of Inhibitors on Enzyme Kinetics

| Inhibitor type | Effect on $V_{\\text{max}}$ | Effect on $K_m$ |
|---------------|--------------------------|----------------|
| Competitive | Unchanged | Increases (less apparent affinity) |
| Noncompetitive | Decreases | Unchanged |
| Uncompetitive | Decreases | Decreases |
`
    },
    {
      id: 'kin4-quiz',
      type: 'multiple-choice' as const,
      content: `**Mechanisms, RDS & Catalysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proposed mechanism has Step 1 (fast): $\\text{A} \\rightleftharpoons \\text{B}$ and Step 2 (slow): $\\text{B} + \\text{C} \\to \\text{D}$. What is the expected overall rate law?`,
            options: [
              `rate = $k[\\text{A}]$`,
              `rate = $k[\\text{A}][\\text{C}]$`,
              `rate = $k[\\text{B}][\\text{C}]$`,
              `rate = $k[\\text{C}]$`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `RDS is Step 2: rate = $k_2[\\text{B}][\\text{C}]$. But B is an intermediate — it must be expressed in terms of initial reactants. From Step 1 equilibrium: $K_1 = [\\text{B}]/[\\text{A}] = k_1/k_{-1}$ → $[\\text{B}] = K_1[\\text{A}]$. So rate = $k_2 K_1[\\text{A}][\\text{C}] = k_{\\text{obs}}[\\text{A}][\\text{C}]$. Rate = $\\mathbf{k[\\text{A}][\\text{C}]}$. Keeping $[\\text{B}]$ leaves an intermediate in the rate law; $k[\\text{A}]$ drops C, which enters the slow step; $k[\\text{C}]$ drops the A that sets $[\\text{B}]$.`
          },
          {
            question: `In enzyme kinetics, a competitive inhibitor is added. How does this affect $V_{\\text{max}}$ and $K_m$?`,
            options: [
              `$V_{\\text{max}}$ decreases; $K_m$ increases`,
              `$V_{\\text{max}}$ unchanged; $K_m$ increases`,
              `$V_{\\text{max}}$ decreases; $K_m$ unchanged`,
              `$V_{\\text{max}}$ unchanged; $K_m$ decreases`
            ],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Competitive inhibitors compete with substrate for the active site. With excess substrate they can be overcome — so $V_{\\text{max}}$ is **unchanged**. However, more substrate is needed to reach $V_{\\text{max}}/2$, meaning $K_m$ **increases** (apparent affinity decreases). A lower $V_{\\text{max}}$ with $K_m$ unchanged is noncompetitive inhibition; a lower $K_m$ would mean the inhibitor helps substrate bind, which a competitor cannot do.`
          },
          {
            question: `Which of the following is an intermediate in the mechanism below?
Step 1: A + B → C + D
Step 2: C + E → F + A`,
            options: [`A`, `B`, `C`, `D`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `An intermediate is **produced** in one step and **consumed** in another. C is produced in Step 1 and consumed in Step 2. Note that A is a catalyst (consumed in Step 1, regenerated in Step 2). B is a reactant that is only consumed, and D is a product that is only formed; both appear in the overall equation, $\\text{B} + \\text{E} \\to \\text{D} + \\text{F}$.`
          },
          {
            question: `Platinum metal catalyzes the reaction $\\text{H}_2 + \\text{Cl}_2 \\to 2\\text{HCl}$. The reactant gases adsorb onto the solid Pt surface, react, and the product desorbs. This is an example of:`,
            options: [
              `Homogeneous catalysis`,
              `Enzymatic catalysis`,
              `Heterogeneous catalysis`,
              `Acid-base catalysis`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The catalyst (solid Pt) and reactants (gases) are in different phases — solid and gas. This defines **heterogeneous catalysis**. Homogeneous catalysis needs catalyst and reactants in one phase, enzymatic catalysis needs a protein catalyst, and acid-base catalysis works by proton transfer, typically in solution; none fits a bare metal surface.`
          },
          {
            question: `A proposed two-step mechanism gives the rate law rate = $k[\\text{X}]^2$, but the experimental rate law is rate = $k[\\text{X}]$. What can you conclude?`,
            options: [
              `The mechanism is confirmed`,
              `The mechanism is inconsistent with the experimental data`,
              `The rate law must come from the balanced equation`,
              `The mechanism is valid because steps can be adjusted`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A valid mechanism must predict a rate law that **matches** the experimental rate law. Predicted rate = $k[\\text{X}]^2$, but observed = $k[\\text{X}]$. These are different — the proposed mechanism is **inconsistent** with experimental data and must be rejected. A mismatch can never confirm a mechanism; rate laws come from experiment, not the balanced equation; and a mechanism is judged as proposed, not rescued by adjusting it after the fact (a revised mechanism is a new proposal to test).`
          }
        ]
      }
    },
    {
      id: 'kin4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **The RDS sets the rate law.** Write it from the slowest elementary step; species that react after it never appear.
- **Intermediate vs. catalyst.** An intermediate is made then used up; a catalyst is used then remade; neither is in the overall equation.
- **Testing a mechanism.** Its steps must sum to the overall equation and predict the observed rate law, or it is rejected.
- **Inhibitor signatures.** Competitive raises $K_m$ with $V_{\\text{max}}$ unchanged; noncompetitive lowers $V_{\\text{max}}$ with $K_m$ unchanged.

**Common traps**

- **An intermediate in the rate law.** Replace it using the fast pre-equilibrium, e.g. $[\\text{B}] = K_1[\\text{A}]$, so only reactants remain.
- **Swapping intermediate and catalyst.** Check the order: made-then-used is an intermediate; used-then-remade is a catalyst.
- **Misjudging the phase.** Catalyst in the reactants' phase is homogeneous; a solid Pt surface with gases is heterogeneous.
- **A saturated enzyme as first order.** At very high [S] the enzyme runs at $V_{\\text{max}}$, zero order in substrate.
`
    }
  ]
};
