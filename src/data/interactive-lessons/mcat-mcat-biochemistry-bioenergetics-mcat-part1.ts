export const mcatBioenergeticsPart1Data = {
  topicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  sections: [
    {
      id: 'be1-intro',
      type: 'text' as const,
      content: `# Bioenergetics

**Part 1 of 4 — Free Energy, ATP & Energy Coupling**

### Gibbs Free Energy Decides Direction

$$\\Delta G = \\Delta H - T\\Delta S$$

- $\\Delta G < 0$: **exergonic**, spontaneous as written (says nothing about speed).
- $\\Delta G > 0$: **endergonic**, nonspontaneous; needs coupling to proceed.
- $\\Delta G = 0$: equilibrium — for a cell, equilibrium is death; metabolism runs on maintained disequilibrium.

### Standard vs. Actual Free Energy

$$\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln Q$$

$$\\Delta G^{\\circ\\prime} = -RT\\ln K_{eq}$$

$\\Delta G^{\\circ\\prime}$ is measured at biochemical standard state (1 M everything, pH 7). Real cellular concentrations set $Q$, and $Q$ can flip the sign: several glycolytic reactions with positive $\\Delta G^{\\circ\\prime}$ run forward in vivo because products are constantly removed (low $Q$). Conversely, a reaction with hugely negative $\\Delta G^{\\circ\\prime}$ is effectively **irreversible** in the cell — these are the regulated control points.

| $K_{eq}$ | $\\Delta G^{\\circ\\prime}$ | Meaning |
|----------|---------------------------|---------|
| $> 1$ | Negative | Products favored at equilibrium |
| $= 1$ | Zero | Neither favored |
| $< 1$ | Positive | Reactants favored |

### Why ATP Is the Energy Currency

ATP hydrolysis to ADP + P$_i$ has $\\Delta G^{\\circ\\prime} \\approx -30.5$ kJ/mol (about −7.3 kcal/mol); in the cell, with concentrations far from standard, the actual value is closer to −50 kJ/mol. The payout comes from:

- **Charge repulsion relief:** four closely spaced negative charges separate.
- **Resonance stabilization** of the released phosphate.
- **Solvation:** products are hydrated better than ATP.

### The Phosphoryl-Transfer Ladder

| Compound | $\\Delta G^{\\circ\\prime}$ of P$_i$ transfer (kJ/mol) |
|----------|------------------------------------------------------|
| Phosphoenolpyruvate (PEP) | ~−62 |
| 1,3-bisphosphoglycerate | ~−49 |
| Creatine phosphate | ~−43 |
| **ATP (to ADP)** | **~−30.5** |
| Glucose-6-phosphate | ~−14 |

ATP sits mid-ladder on purpose: high-energy donors above it (PEP, 1,3-BPG) can phosphorylate ADP (**substrate-level phosphorylation**), and ATP in turn can phosphorylate acceptors below it (glucose, fructose-6-P). Creatine phosphate is muscle's rapid ATP buffer.

### Energy Coupling

An endergonic step is driven by pairing it with an exergonic one sharing a common intermediate — free energies **add**:

Glutamate + NH$_3$ → glutamine has $\\Delta G^{\\circ\\prime} = +14$ kJ/mol. Coupled to ATP hydrolysis (−30.5): net $\\approx -16$ kJ/mol, spontaneous. The mechanism is a phosphorylated intermediate (glutamyl-phosphate), not "heat from ATP."`
    },
    {
      id: 'be1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Free Energy & ATP** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta G^{\\circ\\prime} = +5$ kJ/mol yet proceeds forward continuously in cells. The best explanation is that:`,
            options: [`An enzyme changes the reaction's equilibrium constant`, `The cell keeps the product-to-reactant ratio low`, `The reaction absorbs heat from the surroundings`, `$\\Delta G^{\\circ\\prime}$ was measured incorrectly`],
            correctAnswer: 1,
            explanation: `$\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln Q$. If downstream enzymes constantly consume the product, $Q$ stays small, $RT\\ln Q$ is strongly negative, and actual $\\Delta G < 0$. Enzymes never alter $K_{eq}$.`
          },
          {
            question: `Which compound can phosphorylate ADP to ATP directly in a substrate-level phosphorylation?`,
            options: [`Glucose-6-phosphate`, `Phosphoenolpyruvate`, `AMP`, `Glycerol-3-phosphate`],
            correctAnswer: 1,
            explanation: `Only compounds with MORE negative phosphoryl-transfer free energy than ATP can donate a phosphate to ADP. PEP (~−62 kJ/mol) qualifies — pyruvate kinase uses it in glycolysis. Glucose-6-phosphate (~−14) sits below ATP on the ladder and cannot.`
          },
          {
            question: `For a reaction at equilibrium inside a test tube, $\\Delta G$ equals:`,
            options: [`$\\Delta G^{\\circ\\prime}$`, `Zero`, `$-RT\\ln K_{eq}$`, `$+RT\\ln Q$`],
            correctAnswer: 1,
            explanation: `At equilibrium there is no net driving force in either direction: $\\Delta G = 0$ (and $Q = K_{eq}$). $\\Delta G^{\\circ\\prime}$ is generally nonzero — $-RT\\ln K_{eq}$ is the formula for $\\Delta G^{\\circ\\prime}$ (standard conditions), not for the actual $\\Delta G$ at equilibrium, which is zero.`
          },
          {
            question: `ATP hydrolysis is strongly exergonic for all of the following reasons EXCEPT:`,
            options: [`Relief of electrostatic repulsion between phosphate groups`, `Resonance stabilization of the released inorganic phosphate`, `Better solvation of the products than of ATP`, `Energy released as the phosphoanhydride bond breaks`],
            correctAnswer: 3,
            explanation: `Breaking any bond always REQUIRES energy; the net energy release comes from forming more stable, better-solvated, resonance-stabilized products with less charge repulsion. The idea that energy is "stored in the bond" and released when it breaks is the classic misconception the MCAT tests.`
          },
          {
            question: `During the first seconds of a sprint, muscle ATP levels barely drop even though ATP consumption spikes. The molecule most responsible is:`,
            options: [`Creatine phosphate via creatine kinase`, `Glucose-6-phosphate via hexokinase`, `NADH via the electron transport chain`, `cAMP via protein kinase A`],
            correctAnswer: 0,
            explanation: `Creatine phosphate's transfer potential (~−43 kJ/mol) exceeds ATP's, so creatine kinase rapidly transfers its phosphate to ADP, buffering ATP for the first several seconds until glycolysis and oxidative phosphorylation ramp up.`
          }
        ]
      }
    },
    {
      id: 'be1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $\\Delta G$ decides direction; enzymes change rate only. $\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln Q$; concentrations can flip the sign
- $\\Delta G^{\\circ\\prime} = -RT\\ln K_{eq}$: negative means $K_{eq} > 1$
- ATP hydrolysis ~−30.5 kJ/mol standard, ~−50 kJ/mol in vivo; energy from charge relief, resonance, solvation — NOT from "breaking a bond"
- Transfer ladder: PEP > 1,3-BPG > creatine-P > ATP > G6P; higher can phosphorylate lower
- Coupling = shared chemical intermediate; free energies of coupled steps add`
    },
    {
      id: 'be1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Free-Energy Reasoning

<details>
<summary><b>Example 1: Couple two reactions and compute the net $\\Delta G^{\\circ\\prime}$</b></summary>

**Question:** Glucose + P$_i$ → glucose-6-phosphate has $\\Delta G^{\\circ\\prime} = +13.8$ kJ/mol. What is the net standard free energy when hexokinase couples this to ATP hydrolysis ($\\Delta G^{\\circ\\prime} = -30.5$ kJ/mol), and why does the coupled reaction actually work mechanistically?

**Solution:**
1. Sum the two: $+13.8 + (-30.5) = -16.7$ kJ/mol — spontaneous.
2. Mechanistically, hexokinase transfers the $\\gamma$-phosphate of ATP DIRECTLY to glucose in one active site; the "two reactions" never occur separately.
3. The common intermediate (the transferred phosphoryl group) is what makes the free energies additive.

**MCAT Strategy:** Coupled reactions are just added equations — cancel species appearing on both sides, add the $\\Delta G^{\\circ\\prime}$ values.
</details>

<details>
<summary><b>Example 2: From $K_{eq}$ to $\\Delta G^{\\circ\\prime}$ sign and magnitude</b></summary>

**Question:** For an isomerization, $K_{eq} = 0.1$ at 37 degrees C. Is $\\Delta G^{\\circ\\prime}$ positive or negative, and roughly how large? ($RT \\approx 2.6$ kJ/mol at 310 K; $\\ln 10 \\approx 2.3$)

**Solution:**
1. $K_{eq} < 1$ means reactants favored: $\\Delta G^{\\circ\\prime} > 0$.
2. $\\Delta G^{\\circ\\prime} = -RT\\ln K_{eq} = -2.6 \\times \\ln(0.1) = -2.6 \\times (-2.3) \\approx +6$ kJ/mol.
3. Modest positive values like this are routinely overcome in vivo by concentration effects (e.g., glycolysis' aldolase step).

**MCAT Strategy:** Each factor of 10 in $K_{eq}$ corresponds to roughly 6 kJ/mol (1.4 kcal/mol) at body temperature — a fast mental conversion the exam rewards.
</details>

<details>
<summary><b>Example 3: Spontaneity vs. speed</b></summary>

**Question:** The combustion of glucose has $\\Delta G^{\\circ\\prime} \\approx -2870$ kJ/mol, yet a bowl of sugar is stable in air for years. A student concludes the reaction must be endergonic at room temperature. What is wrong with this reasoning, and what do cells do about it?

**Solution:**
1. $\\Delta G$ addresses THERMODYNAMICS (direction and extent), not KINETICS (rate). Glucose oxidation is highly exergonic but has an enormous activation barrier — it is kinetically stable.
2. Cells lower the barrier with enzymes and, crucially, release the energy in many small controlled steps, capturing portions as ATP and reduced carriers rather than as one burst of heat.
3. The student conflated "doesn't happen quickly" with "not spontaneous."

**MCAT Strategy:** "Spontaneous" = thermodynamically downhill, timescale unspecified. Any answer choice inferring rate from $\\Delta G$ (or equilibrium shift from an enzyme) is wrong.
</details>`
    }
  ]
};
