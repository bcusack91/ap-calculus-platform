export const mcatEnzKineticsPart4Data = {
  topicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  sections: [
    {
      id: 'ek4-intro',
      type: 'text' as const,
      content: `# Enzymes & Kinetics

**Part 4 of 4 — Regulation, Allostery & MCAT Integration**

### Allosteric Enzymes Break Michaelis-Menten

Allosteric enzymes are typically multi-subunit proteins whose velocity curve is **sigmoidal**, not hyperbolic. Substrate binding at one site raises the affinity of the others (**positive cooperativity**), switching the enzyme between a low-affinity **T state** and high-affinity **R state**.

- **Homotropic** effector: the substrate itself (cooperativity).
- **Heterotropic** effectors: other molecules binding regulatory sites. Activators shift toward R; inhibitors shift toward T.
- Because the curve is sigmoidal, we speak of $K_{0.5}$ rather than $K_m$; small changes in substrate near $K_{0.5}$ produce large rate changes — allosteric enzymes are metabolic **switches**, not dimmers.

**Hemoglobin logic transfers directly:** the oxygen saturation curve is sigmoidal for the same reason, and 2,3-BPG, H$^+$, and CO$_2$ act as heterotropic T-state stabilizers (right shift).

### Covalent Modification & Zymogens

| Mechanism | Example | Key point |
|-----------|---------|-----------|
| Phosphorylation (kinases) / dephosphorylation (phosphatases) | Glycogen phosphorylase ON when phosphorylated; glycogen synthase OFF when phosphorylated | Fast, reversible, amplifiable via cascades |
| Zymogen (proenzyme) cleavage | Trypsinogen to trypsin; chymotrypsinogen; pepsinogen; caspases; clotting factors | IRREVERSIBLE activation; protects the producing cell |
| Control proteins | Calmodulin (Ca$^{2+}$ sensor) activating CaM kinases | Couples signals to enzyme activity |

### Feedback Inhibition

In a pathway $A \\rightarrow B \\rightarrow C \\rightarrow D$, the end product D typically allosterically inhibits the **first committed step** ($A \\rightarrow B$). This prevents wasted flux and intermediate buildup. Classic example: ATP and citrate inhibit phosphofructokinase-1, while AMP activates it — glycolysis throttles to energy demand.

### Environmental Effects on Rate

- **Temperature:** rate rises (~doubles per 10 degrees C) until heat denatures the enzyme; activity then collapses. Human enzymes peak near 37 degrees C.
- **pH:** each enzyme has an optimum reflecting the protonation states its mechanism needs — pepsin ~2 (stomach), trypsin ~8 (intestine), alkaline phosphatase ~9. Off-optimum pH first alters charge states, then denatures.

### Reading Kinetics Experiments (Passage Skills)

1. Identify what was varied (substrate? inhibitor? enzyme? mutation?) and what was measured ($v_0$? product at fixed time?).
2. Compare $K_m$-like and $V_{max}$-like behavior before assigning inhibitor type or mutation location.
3. Sigmoidal curve, Hill coefficient > 1, or "cooperative" language = allosteric, multi-subunit thinking.
4. Watch for assays run at a single substrate concentration — changes there can reflect either affinity or turnover; you cannot tell without a full curve.`
    },
    {
      id: 'ek4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Regulation & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `An enzyme shows a sigmoidal plot of $v_0$ versus $[S]$. This most strongly suggests that the enzyme:`,
            options: [`Obeys simple Michaelis-Menten kinetics`, `Has multiple subunits with cooperative substrate binding`, `Is covalently inhibited`, `Has an unusually low $K_m$`],
            correctAnswer: 1,
            explanation: `Sigmoidal kinetics indicate cooperativity: substrate binding to one subunit increases the others' affinity (T to R shift). Michaelis-Menten enzymes give hyperbolic curves regardless of their $K_m$.`
          },
          {
            question: `Pancreatic proteases are synthesized as zymogens primarily to:`,
            options: [`Increase their catalytic efficiency after secretion`, `Prevent them from digesting the pancreas itself before reaching the intestine`, `Allow allosteric regulation by ATP`, `Enable reversible switching between active and inactive forms`],
            correctAnswer: 1,
            explanation: `Zymogens are inactive precursors activated by proteolytic cleavage only at their site of action (e.g., trypsinogen activated by intestinal enteropeptidase). This protects the producing tissue — premature activation causes pancreatitis. Cleavage is irreversible, not a reversible switch.`
          },
          {
            question: `In a biosynthetic pathway, the end product inhibits the first committed enzyme. Kinetic analysis shows the inhibitor binds a site distinct from the active site and shifts the enzyme toward its T state. This regulation is best described as:`,
            options: [`Competitive inhibition`, `Heterotropic allosteric inhibition`, `Covalent modification`, `Homotropic activation`],
            correctAnswer: 1,
            explanation: `A molecule other than the substrate (heterotropic effector) binding a regulatory site and stabilizing the low-affinity T state is allosteric feedback inhibition. It is not competitive (different site) and involves no covalent change.`
          },
          {
            question: `Glycogen phosphorylase is activated when a kinase phosphorylates it; glycogen synthase is inactivated by phosphorylation. A hormone that triggers this kinase cascade would cause the cell to:`,
            options: [`Store glucose as glycogen`, `Break down glycogen and stop synthesizing it`, `Do both simultaneously at higher rates`, `Degrade both enzymes`],
            correctAnswer: 1,
            explanation: `One phosphorylation signal flips the two opposing enzymes in opposite directions — reciprocal regulation. Phosphorylase ON plus synthase OFF means net glycogenolysis (the glucagon/epinephrine response), avoiding a futile cycle.`
          },
          {
            question: `A student measures an intestinal enzyme's activity at pH 2 and finds almost none, though the enzyme is highly active at pH 8. The most likely explanation is that at pH 2:`,
            options: [`The substrate is insoluble`, `Catalytic residues are in the wrong protonation state and the protein may begin to denature`, `The enzyme's $V_{max}$ increases`, `Water becomes limiting`],
            correctAnswer: 1,
            explanation: `Each enzyme's mechanism requires specific ionization states (e.g., a deprotonated active-site base). Far from the pH optimum, those states are lost and extreme pH disrupts ionic interactions maintaining the fold. An intestinal enzyme like trypsin is optimized for ~pH 8, not stomach acid.`
          }
        ]
      }
    },
    {
      id: 'ek4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Sigmoidal velocity curve = cooperativity = multi-subunit allosteric enzyme (T/R states, $K_{0.5}$); same logic as hemoglobin
- Heterotropic effectors bind regulatory sites: activators favor R, inhibitors favor T (feedback inhibition hits the first committed step)
- Phosphorylation = fast reversible switch (phosphorylase ON / synthase OFF is the reciprocal pattern); zymogen cleavage = irreversible activation
- Temperature and pH optima: activity falls off-optimum by ionization changes, then denaturation
- Passage skill: never assign inhibitor type or mutation effect from a single-substrate-concentration data point`
    },
    {
      id: 'ek4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — MCAT-Style Integration

<details>
<summary><b>Example 1: Interpret an allosteric effector experiment</b></summary>

**Question:** ATCase (aspartate transcarbamoylase) catalyzes the committed step of pyrimidine synthesis. Adding CTP shifts its sigmoidal curve right (higher $K_{0.5}$); adding ATP shifts it left. Explain the metabolic logic.

**Solution:**
1. CTP is the pathway's END PRODUCT: high CTP means pyrimidines are plentiful, so CTP feedback-inhibits (stabilizes T state, right shift).
2. ATP is a purine: high ATP signals abundant energy and a need to balance purine/pyrimidine pools, so ATP activates (stabilizes R state, left shift).
3. Both act heterotropically at regulatory subunits — neither touches the catalytic site.

**MCAT Strategy:** Right shift = inhibition (more substrate needed); left shift = activation. Then ask "why would the cell want this?" — the answer is nearly always feedback economy or pathway balancing.
</details>

<details>
<summary><b>Example 2: A cascade amplification calculation</b></summary>

**Question:** One hormone-bound receptor activates 10 molecules of kinase A; each kinase A activates 10 of kinase B; each kinase B activates 10 phosphorylase molecules, each producing 100 product molecules per second. How many product molecules per second result from ONE receptor?

**Solution:**
1. Kinase A: $10$; kinase B: $10 \\times 10 = 100$; phosphorylase: $100 \\times 10 = 1000$ active enzymes.
2. Product: $1000 \\times 100 = 10^{5}$ molecules per second.
3. This multiplicative amplification is why signaling uses kinase cascades rather than direct enzyme activation.

**MCAT Strategy:** Cascade math is pure multiplication of the per-step factors; the exam wants you to recognize amplification as the PURPOSE of multi-step cascades.
</details>

<details>
<summary><b>Example 3: Dissect a two-variable kinetics passage</b></summary>

**Question:** A passage reports that mutant enzyme M has normal $k_{cat}$ but 10-fold higher $K_m$ than wild type, and that drug D lowers wild-type $V_{max}$ by half without changing $K_m$. A patient homozygous for M is treated with D. Predict the combined kinetic parameters relative to untreated wild type.

**Solution:**
1. Mutation M: $K_m$ 10-fold up (weaker substrate binding), $V_{max}$ normal.
2. Drug D is noncompetitive ($V_{max}$ halved, $K_m$ untouched) and acts at an allosteric site, independent of the substrate pocket.
3. Combined: $K_m$ ~10-fold above wild type (from M) AND $V_{max}$ ~half (from D). The effects stack because they act on different parts of the enzyme.

**MCAT Strategy:** Treat independent perturbations as independent: binding-site changes move $K_m$, allosteric/noncompetitive effects move $V_{max}$, and they combine without interference unless the passage says the sites interact.
</details>`
    }
  ]
};
