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
      id: 'be1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Free-Energy Reasoning

**Problem 1.** An isomerization has $K_{eq} = 0.1$ at 37 degrees C. Use $RT \\approx 2.6$ kJ/mol at 310 K and $\\ln 10 \\approx 2.3$.

- **(a)** Is $\\Delta G^{\\circ\\prime}$ positive or negative?
- **(b)** Roughly how large is $\\Delta G^{\\circ\\prime}$?
- **(c)** Can a step with a value like this still run forward in a cell?

**(a) Sign.** $K_{eq} < 1$ means reactants are favored: $\\Delta G^{\\circ\\prime} > 0$.

**(b) Magnitude.** $\\Delta G^{\\circ\\prime} = -RT\\ln K_{eq} = -2.6 \\times \\ln(0.1) = -2.6 \\times (-2.3) \\approx +6$ kJ/mol. Each factor of 10 in $K_{eq}$ is roughly 6 kJ/mol (1.4 kcal/mol) at body temperature — a fast mental conversion the exam rewards.

**(c) In the cell.** Yes. Modest positive values like this are routinely overcome in vivo by concentration effects (e.g., glycolysis' triose phosphate isomerase step, about +7.5 kJ/mol).

**Problem 2.** A step A → B has $\\Delta G^{\\circ\\prime} = +7.5$ kJ/mol, but downstream enzymes keep $[\\text{B}]/[\\text{A}]$ at $0.01$ in the cell. Use $RT \\approx 2.6$ kJ/mol and $\\ln 0.01 \\approx -4.6$.

- **(a)** What is the concentration term $RT\\ln Q$?
- **(b)** What is the actual $\\Delta G$, and does the step run forward?
- **(c)** Above roughly what $[\\text{B}]/[\\text{A}]$ ratio would the step stop running forward?

**(a) Concentration term.** $RT\\ln Q = 2.6 \\times (-4.6) \\approx -12$ kJ/mol.

**(b) Actual free energy.** With $-12$ kJ/mol from (a): $\\Delta G = +7.5 + (-12) \\approx -4.5$ kJ/mol, so the step runs forward despite its positive $\\Delta G^{\\circ\\prime}$.

**(c) The turning point.** $\\Delta G = 0$ when $Q = K_{eq}$. At about 6 kJ/mol per factor of 10 (Problem 1), $+7.5$ kJ/mol is about 1.25 factors of 10, so $K_{eq} \\approx 10^{-1.25} \\approx 0.06$. Above that ratio $\\Delta G > 0$ and the step runs in reverse.

**Problem 3.** Hexokinase couples glucose + P$_i$ → glucose-6-phosphate ($\\Delta G^{\\circ\\prime} = +13.8$ kJ/mol) to ATP hydrolysis ($\\Delta G^{\\circ\\prime} = -30.5$ kJ/mol).

- **(a)** What is the net $\\Delta G^{\\circ\\prime}$ of the coupled reaction?
- **(b)** Do the two reactions actually happen separately in the cell?
- **(c)** Adding $\\Delta G^{\\circ\\prime}$ values is just arithmetic — what makes the sum describe the cell?

**(a) Net free energy.** Add the two equations and cancel the shared species: $+13.8 + (-30.5) = -16.7$ kJ/mol — spontaneous.

**(b) One active site.** No. Hexokinase transfers the $\\gamma$-phosphate of ATP DIRECTLY to glucose in one active site; the "two reactions" never occur separately.

**(c) A shared intermediate.** Free energies of added equations always add (G is a state function). The sum is real only because hexokinase links the two steps in one active site through the shared phosphoryl group, as in (b). Coupled reactions are added equations: cancel shared species, add the $\\Delta G^{\\circ\\prime}$ values.

**Problem 4.** Glucose combustion has $\\Delta G^{\\circ\\prime} \\approx -2870$ kJ/mol, yet a bowl of sugar is stable in air for years. A student concludes the reaction must be endergonic at room temperature.

- **(a)** Is the student right that the reaction is endergonic?
- **(b)** Then why does the sugar not burn on its own?
- **(c)** How do cells oxidize glucose without releasing one burst of heat?

**(a) Thermodynamics.** No. $\\Delta G$ addresses THERMODYNAMICS (direction and extent), not KINETICS (rate), and glucose oxidation is highly exergonic. The student conflated "doesn't happen quickly" with "not spontaneous."

**(b) Kinetics.** The reaction has an enormous activation barrier — glucose is kinetically stable. "Spontaneous" means thermodynamically downhill, timescale unspecified.

**(c) Enzymes and small steps.** Cells lower the barrier with enzymes and release the energy in many small controlled steps, capturing portions as ATP and reduced carriers. Any answer choice inferring rate from $\\Delta G$ (or an equilibrium shift from an enzyme) is wrong.`
    },
    {
      id: 'be1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Free Energy & ATP** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta G^{\\circ\\prime} = +5$ kJ/mol yet proceeds forward continuously in cells. The best explanation is that:`,
            options: [`An enzyme changes the reaction's equilibrium constant`, `The cell keeps the product-to-reactant ratio low`, `Heat absorbed from the surroundings offsets the positive $\\Delta G^{\\circ\\prime}$`, `$\\Delta G^{\\circ\\prime}$ was measured incorrectly`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `$\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln Q$. If downstream enzymes constantly consume the product, $Q$ stays small, $RT\\ln Q$ is strongly negative, and actual $\\Delta G < 0$. Enzymes never alter $K_{eq}$, and absorbed heat cannot offset a positive $\\Delta G^{\\circ\\prime}$, which already accounts for enthalpy ($\\Delta H$).`
          },
          {
            question: `Which compound can phosphorylate ADP to ATP directly in a substrate-level phosphorylation?`,
            options: [`Glucose-6-phosphate`, `Phosphoenolpyruvate`, `AMP`, `Glycerol-3-phosphate`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Only compounds with MORE negative phosphoryl-transfer free energy than ATP can donate a phosphate to ADP. PEP (~−62 kJ/mol) qualifies — pyruvate kinase uses it in glycolysis. Glucose-6-phosphate (~−14) sits below ATP on the ladder and cannot.`
          },
          {
            question: `For a reaction at equilibrium inside a test tube, $\\Delta G$ equals:`,
            options: [`$\\Delta G^{\\circ\\prime}$`, `Zero`, `$-RT\\ln K_{eq}$`, `$+RT\\ln Q$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `At equilibrium there is no net driving force in either direction: $\\Delta G = 0$ (and $Q = K_{eq}$). $\\Delta G^{\\circ\\prime}$ is generally nonzero — $-RT\\ln K_{eq}$ is the formula for $\\Delta G^{\\circ\\prime}$ (standard conditions), not for the actual $\\Delta G$ at equilibrium, which is zero.`
          },
          {
            question: `ATP hydrolysis is strongly exergonic for all of the following reasons EXCEPT:`,
            options: [`Relief of electrostatic repulsion between phosphate groups`, `Resonance stabilization of the released inorganic phosphate`, `Better solvation of the products than of ATP`, `Energy released as the phosphoanhydride bond breaks`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Breaking any bond always REQUIRES energy; the net energy release comes from forming more stable, better-solvated, resonance-stabilized products with less charge repulsion. The idea that energy is "stored in the bond" and released when it breaks is the classic misconception the MCAT tests.`
          },
          {
            question: `During the first seconds of a sprint, muscle ATP levels barely drop even though ATP consumption spikes. The molecule most responsible is:`,
            options: [`Creatine phosphate via creatine kinase`, `Glucose-6-phosphate via hexokinase`, `NADH via the electron transport chain`, `cAMP via protein kinase A`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Creatine phosphate's transfer potential (~−43 kJ/mol) exceeds ATP's, so creatine kinase rapidly transfers its phosphate to ADP, buffering ATP for the first several seconds until glycolysis and oxidative phosphorylation ramp up.`
          }
        ]
      }
    },
    {
      id: 'be1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **$\\Delta G$ sets direction.** $\\Delta G < 0$ runs forward; enzymes change only the rate, never $K_{eq}$ or $\\Delta G$.
- **K and Q set the sign.** $\\Delta G^{\\circ\\prime} = -RT\\ln K_{eq}$; $\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln Q$, so a low $Q$ can flip it.
- **ATP sits mid-ladder.** About −30.5 kJ/mol (≈ −50 in vivo); PEP and 1,3-BPG can make ATP, and ATP phosphorylates glucose.
- **Coupled steps add.** Through a shared phosphorylated intermediate the steps run as one: +14 + (−30.5) ≈ −16 kJ/mol.

**Common traps**

- **Energy "in the bond."** Breaking a bond costs energy; ATP's payout comes from charge relief, resonance and solvation.
- **Spontaneous means fast.** $\\Delta G$ says nothing about rate: sugar sits in air for years despite −2870 kJ/mol.
- **$\\Delta G^{\\circ\\prime}$ is the cell's $\\Delta G$.** $\\Delta G^{\\circ\\prime}$ assumes 1 M everything, pH 7; real concentrations ($Q$) set the actual $\\Delta G$.
- **Coupling by heat.** Heat from ATP hydrolysis drives nothing; coupling needs a shared chemical intermediate.`
    }
  ]
};
