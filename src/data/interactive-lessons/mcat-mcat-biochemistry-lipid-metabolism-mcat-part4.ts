export const mcatLipidMetabPart4Data = {
  topicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  sections: [
    {
      id: 'lm4-intro',
      type: 'text' as const,
      content: `# Lipid Metabolism

**Part 4 of 4 — Fatty Acid Synthesis, Cholesterol & MCAT Integration**

### Synthesis Is Not Oxidation Run Backward

| Feature | Beta-oxidation | Fatty acid synthesis |
|---------|----------------|----------------------|
| Location | Mitochondrial matrix | Cytosol |
| Redox carrier | FAD, NAD$^+$ (reduced) | **NADPH** (oxidized) |
| Acyl carrier | CoA | **ACP** (on fatty acid synthase) |
| 2-carbon unit | Acetyl-CoA released | **Malonyl-CoA** added |
| Hormonal state | Glucagon (fasting) | Insulin (fed) |

### The Fed-State Assembly Line

1. **Citrate shuttle:** mitochondrial acetyl-CoA cannot cross the membrane, so it condenses with OAA to citrate, exits, and is re-cleaved by cytosolic **ATP-citrate lyase**. (High citrate ALSO allosterically signals abundance — it activates the next enzyme and inhibits PFK-1.)
2. **Acetyl-CoA carboxylase (ACC)** — biotin, uses CO$_2$ and ATP — makes **malonyl-CoA**. This is the rate-limiting step: activated by citrate and insulin (dephosphorylation), inhibited by glucagon/epinephrine (phosphorylation, via AMPK) and by palmitoyl-CoA (product feedback).
3. **Fatty acid synthase (FAS)** repeats condensation-reduction-dehydration-reduction, consuming **NADPH** (from the pentose phosphate pathway and malic enzyme), releasing one CO$_2$ per malonyl-CoA added, until **palmitate (16:0)** is released. Stoichiometry: 8 acetyl-CoA, 7 ATP, 14 NADPH.

Elongation (ER/mitochondria) and desaturation (ER; humans cannot desaturate beyond C9 — hence **essential** linoleic and alpha-linolenic acids) customize the product. Recall the shuttle payoff from Part 2: malonyl-CoA inhibits CPT-I, so synthesis automatically switches off oxidation.

### Cholesterol Synthesis in One Breath

Cytosolic acetyl-CoA → acetoacetyl-CoA → HMG-CoA → **(HMG-CoA reductase + 2 NADPH)** → **mevalonate** → ... → squalene → cholesterol.

**HMG-CoA reductase** (smooth ER) is the rate-limiting enzyme: inhibited competitively by **statins**, repressed transcriptionally by cholesterol itself (SREBP sensing), phosphorylated OFF by AMPK, activated by insulin. Cholesterol's fates: membranes, **bile acids** (the major disposal route), steroid hormones, vitamin D. When LDL delivers cholesterol to a cell, the cell downregulates both HMG-CoA reductase AND LDL-receptor synthesis — the feedback loop statin therapy exploits (less internal synthesis → more LDL receptors → lower plasma LDL).

### The Master Integration Table

| State | Insulin/glucagon | Adipose | Liver lipid traffic |
|-------|------------------|---------|---------------------|
| Fed | High/low | LPL up, HSL off, TG stored | ACC + FAS on → TG → VLDL out |
| Fasting | Low/high | HSL on → FFA + glycerol out | Beta-oxidation + ketogenesis on; malonyl-CoA low → CPT-I open |`
    },
    {
      id: 'lm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Synthesis, Cholesterol & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Acetyl-CoA generated in the mitochondrion reaches the cytosolic fatty-acid-synthesis machinery as:`,
            options: [`Free acetate diffusing through the membrane`, `Citrate, cleaved in the cytosol by ATP-citrate lyase`, `Intact acetyl-CoA carried out by the carnitine shuttle`, `Malonyl-CoA made in the matrix by acetyl-CoA carboxylase`],
            correctAnswer: 1,
            explanation: `The inner membrane is impermeable to acetyl-CoA, so it condenses with oxaloacetate to citrate, exits on the tricarboxylate carrier, and ATP-citrate lyase regenerates acetyl-CoA + OAA in the cytosol. The carnitine system runs the OPPOSITE direction, importing long acyl groups for oxidation.`
          },
          {
            question: `A statin lowers plasma LDL primarily because reduced hepatic cholesterol synthesis leads to:`,
            options: [`Direct inhibition of intestinal cholesterol absorption`, `Increased HDL secretion by the liver`, `Inhibition of lipoprotein lipase`, `Upregulation of hepatic LDL receptor expression`],
            correctAnswer: 3,
            explanation: `Statins competitively inhibit HMG-CoA reductase. The cholesterol-starved hepatocyte activates SREBP, transcribing more LDL receptors, so the liver pulls more LDL out of plasma. The drug's effect on the bloodstream is thus indirect — via receptor upregulation, not absorption or LPL.`
          },
          {
            question: `Which pair correctly matches a fatty-acid-synthesis feature against its beta-oxidation counterpart?`,
            options: [`Synthesis: mitochondrial matrix / Oxidation: cytosol`, `Synthesis: NADH consumed / Oxidation: NADPH and FADH2 produced`, `Synthesis: NADPH consumed / Oxidation: NADH and FADH2 produced`, `Synthesis: acyl carrier is CoA / Oxidation: acyl carrier is ACP`],
            correctAnswer: 2,
            explanation: `Synthesis is cytosolic and reductive (NADPH from the pentose phosphate pathway and malic enzyme); oxidation is mitochondrial and oxidative (FADH$_2$ + NADH captured for the ETC). The other pairings swap the compartments, the reducing cofactors (NADPH belongs to synthesis, not oxidation), or the acyl carriers (ACP for synthesis, CoA for oxidation).`
          },
          {
            question: `AMPK is activated when cellular energy falls. Its coordinated effect on lipid metabolism is to:`,
            options: [`Phosphorylate and inhibit both ACC and HMG-CoA reductase`, `Phosphorylate and activate both ACC and HMG-CoA reductase`, `Dephosphorylate and inhibit both ACC and HMG-CoA reductase`, `Dephosphorylate and activate ACC and HMG-CoA reductase`],
            correctAnswer: 0,
            explanation: `AMPK is the low-energy alarm: it switches OFF anabolic, ATP-consuming pathways. It is a kinase, not a phosphatase, and for both enzymes phosphorylation means inhibition (insulin's dephosphorylation turns them back on). Phosphorylating ACC (dropping malonyl-CoA, which also opens CPT-I for beta-oxidation) and HMG-CoA reductase kills both fatty acid and cholesterol synthesis at their rate-limiting steps.`
          },
          {
            question: `Linoleic acid (18:2, omega-6) is essential in the human diet because human desaturases:`,
            options: [`Cannot act on chains longer than 14 carbons`, `Require vitamin B12 as a cofactor`, `Function only in mitochondria, not the ER`, `Cannot introduce double bonds beyond carbon 9`],
            correctAnswer: 3,
            explanation: `Human ER desaturases install double bonds only at or before C9 (counting from the carboxyl end). Linoleate (double bonds at 9 and 12) and alpha-linolenate (9, 12, 15) therefore cannot be built and must be eaten — they are precursors of arachidonic acid and eicosanoids.`
          }
        ]
      }
    },
    {
      id: 'lm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Synthesis vs oxidation: cytosol vs matrix, NADPH vs FAD/NAD$^+$, ACP vs CoA, malonyl-CoA in vs acetyl-CoA out
- Citrate shuttle exports acetyl-CoA; **ACC (biotin, rate-limiting)** makes malonyl-CoA — insulin/citrate ON, glucagon/AMPK/palmitoyl-CoA OFF
- Palmitate stoichiometry: 8 acetyl-CoA + 7 ATP + 14 NADPH; humans cannot desaturate past C9 → linoleate/linolenate essential
- Cholesterol: **HMG-CoA reductase** rate-limiting; statins inhibit it → SREBP → more LDL receptors → lower plasma LDL
- AMPK phosphorylates ACC and HMG-CoA reductase OFF; malonyl-CoA's fall reopens CPT-I
- Fed = store and build (VLDL out); fasting = HSL, beta-oxidation, ketones`
    },
    {
      id: 'lm4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Problems

<details>
<summary><b>Example 1: Trace a carbon from glucose to stored fat</b></summary>

**Question:** A carbon atom enters an adipocyte-bound pathway as glucose during a large carbohydrate meal. Trace it into stored triacylglycerol.

**Solution:**
1. Glycolysis (liver): glucose → pyruvate; pyruvate dehydrogenase (mitochondrion) → acetyl-CoA.
2. Citrate shuttle → cytosolic acetyl-CoA → ACC → malonyl-CoA → FAS builds palmitate (NADPH from the pentose phosphate pathway).
3. Palmitate esterified to glycerol-3-phosphate → TG, packaged with apoB-100 into VLDL.
4. Adipose capillary LPL (insulin-stimulated, apoC-II-activated) hydrolyzes VLDL TG; the fatty acid enters the adipocyte and is re-esterified for storage.

**MCAT Strategy:** This one question chains five sub-topics; practice writing the arrow diagram from memory — passages love asking which step a given drug or deficiency would break.
</details>

<details>
<summary><b>Example 2: Predict the effect of an ATP-citrate lyase inhibitor</b></summary>

**Question:** A drug inhibits ATP-citrate lyase in hepatocytes. Predict effects on (a) fatty acid synthesis, (b) cytosolic acetyl-CoA, (c) plasma LDL.

**Solution:**
1. (a) Cytosolic acetyl-CoA supply falls → less malonyl-CoA → fatty acid synthesis drops.
2. (b) Cytosolic acetyl-CoA falls — and with it, substrate for cholesterol synthesis too.
3. (c) Reduced cholesterol synthesis triggers SREBP-driven LDL-receptor upregulation → plasma LDL falls (this is the real drug bempedoic acid's statin-like logic).

**MCAT Strategy:** Both fatty acids AND cholesterol begin from cytosolic acetyl-CoA; any block upstream of it hits both pathways at once.
</details>

<details>
<summary><b>Example 3: The 24-hour lipid ledger</b></summary>

**Question:** Compare the dominant direction of lipid traffic in adipose tissue at 1 hour and at 18 hours after a mixed meal, naming the controlling enzymes.

**Solution:**
1. 1 hour (fed, insulin high): adipose **LPL** (insulin-induced) unloads chylomicron/VLDL TG into the adipocyte; **HSL is dephosphorylated and off**; net flux IN.
2. 18 hours (fasted, glucagon/catecholamines up): **HSL phosphorylated and on**, perilipins remodeled; FFA leave on albumin, glycerol to the liver; hepatic malonyl-CoA is low, so CPT-I admits the FFA the liver receives for beta-oxidation and ketogenesis; net flux OUT.
3. The SAME tissue reverses direction purely through phosphorylation state — no new enzymes are synthesized on this timescale.

**MCAT Strategy:** Insulin = dephosphorylation = storage; glucagon/epinephrine = phosphorylation via PKA = mobilization. That single rule answers most fed/fasted regulation questions.
</details>`
    }
  ]
};
