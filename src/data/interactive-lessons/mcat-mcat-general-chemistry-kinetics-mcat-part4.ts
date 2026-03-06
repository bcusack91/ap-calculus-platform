export const mcatKineticsPart4Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin4-intro',
      type: 'text' as const,
      content: `# Chemical Kinetics

**Part 4 of 5 — Reaction Mechanisms, Rate-Determining Step & Catalysis**

## Elementary Steps & Molecularity

A **reaction mechanism** is a proposed sequence of elementary steps that sum to give the overall balanced equation.

| Molecularity | Number of reactant molecules | Example |
|-------------|------------------------------|---------|
| Unimolecular | 1 | $\\text{A} \\to \\text{products}$ |
| Bimolecular | 2 | $\\text{A} + \\text{B} \\to$ products |
| Termolecular | 3 | $\\text{A} + \\text{B} + \\text{C} \\to$ products |

**Key distinction:** For elementary steps only, the rate law can be written directly from the stoichiometry.

## Rate-Determining Step (RDS)

The **slowest elementary step** controls the overall rate. The rate law for the overall reaction reflects the stoichiometry of the RDS.

**Mechanism example:**

*Step 1 (slow, RDS):* $\\text{NO}_2 + \\text{NO}_2 \\to \\text{NO}_3 + \\text{NO}$

*Step 2 (fast):* $\\text{NO}_3 + \\text{CO} \\to \\text{NO}_2 + \\text{CO}_2$

From the RDS (Step 1, bimolecular):
$$\\text{rate} = k[\\text{NO}_2]^2$$

This matches the experimentally observed rate law — the mechanism is consistent.

## Checking a Proposed Mechanism

1. Steps must sum to give the **overall balanced equation** (intermediates cancel)
2. The rate law from the RDS must match the **experimentally determined rate law**
3. A catalyst that appears in one step must be regenerated in a later step

## Intermediates vs. Catalysts in Mechanisms

- **Intermediate:** Produced in one step, consumed in a later step; does **not** appear in the overall equation
- **Catalyst:** Consumed in one step, regenerated in a later step; does **not** appear in the overall equation but speeds up the reaction

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
- $K_m$ = substrate concentration at which rate = $V_{\\text{max}}/2$
- Lower $K_m$ → higher affinity for substrate
- At very high $[\\text{S}]$: rate = $V_{\\text{max}}$ (zero-order in substrate); all active sites saturated

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
            explanation: `RDS is Step 2: rate = $k_2[\\text{B}][\\text{C}]$. But B is an intermediate — it must be expressed in terms of initial reactants. From Step 1 equilibrium: $K_1 = [\\text{B}]/[\\text{A}]$ → $[\\text{B}] = K_1[\\text{A}]$. So rate = $k_2 K_1[\\text{A}][\\text{C}] = k_{\\text{obs}}[\\text{A}][\\text{C}]$. Rate = $\\mathbf{k[\\text{A}][\\text{C}]}$.`
          },
          {
            question: `In enzyme kinetics, a competitive inhibitor is added. How does this affect Vmax and Km?`,
            options: [
              `Vmax decreases; Km increases`,
              `Vmax unchanged; Km increases`,
              `Vmax decreases; Km unchanged`,
              `Vmax unchanged; Km decreases`
            ],
            correctAnswer: 1,
            explanation: `Competitive inhibitors compete with substrate for the active site. With excess substrate they can be overcome — so $V_{\\text{max}}$ is **unchanged**. However, more substrate is needed to reach $V_{\\text{max}}/2$, meaning $K_m$ **increases** (apparent affinity decreases).`
          },
          {
            question: `Which of the following is an intermediate in the mechanism below?
Step 1: A + B → C + D
Step 2: C + E → F + A`,
            options: [`A`, `B`, `C`, `D`],
            correctAnswer: 2,
            explanation: `An intermediate is **produced** in one step and **consumed** in another. C is produced in Step 1 and consumed in Step 2. Note that A is a catalyst (consumed in Step 1, regenerated in Step 2). D is a product.`
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
            explanation: `The catalyst (solid Pt) and reactants (gases) are in different phases — solid and gas. This defines **heterogeneous catalysis**.`
          },
          {
            question: `A proposed two-step mechanism gives the rate law rate = $k[\\text{X}]^2$, but the experimental rate law is rate = $k[\\text{X}]$. What can you conclude?`,
            options: [
              `The mechanism is confirmed`,
              `The mechanism is inconsistent with the experimental data`,
              `The rate law should be determined from the overall balanced equation`,
              `The mechanism is valid because steps can be adjusted`
            ],
            correctAnswer: 1,
            explanation: `A valid mechanism must predict a rate law that **matches** the experimental rate law. Predicted rate = $k[\\text{X}]^2$, but observed = $k[\\text{X}]$. These are different — the proposed mechanism is **inconsistent** with experimental data and must be rejected.`
          }
        ]
      }
    },
    {
      id: 'kin4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- Rate law of overall reaction = rate law of the slowest elementary step (RDS)
- Intermediates: produced then consumed (cancel in overall equation)
- Catalysts: consumed then regenerated (cancel in overall equation)
- Homogeneous catalysis: same phase; Heterogeneous: different phases (e.g., solid metal + gas)
- Enzyme kinetics: Michaelis-Menten; $V_{\\text{max}}$ at saturation; $K_m$ = affinity measure
- Competitive inhibitor: $K_m$ ↑, $V_{\\text{max}}$ unchanged; Noncompetitive: $V_{\\text{max}}$ ↓, $K_m$ unchanged
- A mechanism is valid only if its predicted rate law matches the observed experimental rate law
`
    }
  ]
};
