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
2. **Acetyl-CoA carboxylase (ACC)** — biotin, uses CO$_2$ and ATP — makes **malonyl-CoA**. This is the rate-limiting step: activated by citrate and insulin (dephosphorylation), inhibited by phosphorylation (by AMPK, and in the glucagon/epinephrine-signaled fasting state) and by palmitoyl-CoA (product feedback).
3. **Fatty acid synthase (FAS)** repeats condensation-reduction-dehydration-reduction, consuming **NADPH** (from the pentose phosphate pathway and malic enzyme), releasing one CO$_2$ per malonyl-CoA added, until **palmitate (16:0)** is released. Stoichiometry: 8 acetyl-CoA, 7 ATP, 14 NADPH.

Elongation (ER/mitochondria) and desaturation (ER; humans cannot desaturate beyond C9 — hence **essential** linoleic and alpha-linolenic acids) customize the product. Recall the shuttle payoff from Part 2: malonyl-CoA inhibits CPT-I, so synthesis automatically switches off oxidation.

### Cholesterol Synthesis in One Breath

Cytosolic acetyl-CoA → acetoacetyl-CoA → HMG-CoA → **(HMG-CoA reductase + 2 NADPH)** → **mevalonate** → ... → squalene → cholesterol.

**HMG-CoA reductase** (smooth ER) is the rate-limiting enzyme: inhibited competitively by **statins**, repressed transcriptionally by cholesterol itself, phosphorylated OFF by AMPK, activated by insulin.

Cholesterol's fates: membranes, **bile acids** (the major disposal route), steroid hormones, vitamin D.

When LDL delivers cholesterol to a cell, the cell downregulates both HMG-CoA reductase AND LDL-receptor synthesis — it neither makes nor imports what it already has. Statin therapy runs this loop in reverse: less internal synthesis → more LDL receptors → lower plasma LDL.

The cholesterol sensor is the ER transcription factor **SREBP**: when ER cholesterol falls, SREBP is released to the nucleus and turns on both the HMG-CoA reductase and LDL-receptor genes.

### The Master Integration Table

| State | Insulin/glucagon | Adipose | Liver lipid traffic |
|-------|------------------|---------|---------------------|
| Fed | High/low | LPL up, HSL off, TG stored | ACC + FAS on → TG → VLDL out |
| Fasting | Low/high | HSL on → FFA + glycerol out | Beta-oxidation + ketogenesis on; malonyl-CoA low → CPT-I open |`
    },
    {
      id: 'lm4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Problems

**Problem 1.** During a large carbohydrate meal, a glucose carbon in the liver ends up in an adipocyte's stored triacylglycerol.

- **(a)** How does the glucose carbon become mitochondrial acetyl-CoA?
- **(b)** How does that acetyl-CoA become palmitate?
- **(c)** How does the palmitate leave the liver?
- **(d)** How does the fatty acid get into the adipocyte for storage?

**(a) Glucose to acetyl-CoA.** Glycolysis (liver): glucose → pyruvate; pyruvate dehydrogenase (mitochondrion) → acetyl-CoA.

**(b) Building palmitate.** Citrate shuttle → cytosolic acetyl-CoA → ACC → malonyl-CoA → FAS builds palmitate (NADPH from the pentose phosphate pathway).

**(c) Export.** Palmitate is esterified to glycerol-3-phosphate → TG, packaged with apoB-100 into VLDL.

**(d) Storage.** Adipose capillary LPL (insulin-stimulated, apoC-II-activated) hydrolyzes the VLDL TG; the fatty acid enters the adipocyte and is re-esterified. Passages love asking which step a drug or deficiency would break.

**Problem 2.** A drug inhibits ATP-citrate lyase in hepatocytes.

- **(a)** What happens to cytosolic acetyl-CoA?
- **(b)** What happens to fatty acid synthesis?
- **(c)** What happens to cholesterol synthesis and plasma LDL?

**(a) Acetyl-CoA supply.** Cytosolic acetyl-CoA falls, because mitochondrial acetyl-CoA reaches the cytosol only as citrate cleaved by this enzyme.

**(b) Fatty acid synthesis.** With less cytosolic acetyl-CoA from (a), ACC makes less malonyl-CoA, so fatty acid synthesis drops.

**(c) Cholesterol and LDL.** The same cytosolic acetyl-CoA from (a) is the substrate for cholesterol synthesis, which falls; this triggers SREBP-driven LDL-receptor upregulation, so plasma LDL falls (statin logic, one step further upstream). Any block upstream of cytosolic acetyl-CoA hits both pathways.

<!-- yield:low -->
- Problem 2 aside: a real drug works this way. Bempedoic acid inhibits ATP-citrate lyase and lowers plasma LDL.
<!-- /yield -->

**Problem 3.** Compare the direction of lipid traffic in adipose tissue at 1 hour and at 18 hours after a mixed meal.

- **(a)** Which way does lipid move at 1 hour, and which enzymes control it?
- **(b)** Which way does it move at 18 hours, and where do the products go?
- **(c)** How does the same tissue reverse direction so quickly?

**(a) 1 hour: storage.** Fed, insulin high: adipose **LPL** (insulin-induced) unloads chylomicron/VLDL TG into the adipocyte, and **HSL is dephosphorylated and off**. Net flux IN.

**(b) 18 hours: mobilization.** Fasted, glucagon/catecholamines up: **HSL is phosphorylated and on**. FFA leave on albumin, glycerol goes to the liver, and low hepatic malonyl-CoA lets CPT-I admit the FFA for beta-oxidation and ketogenesis. Net flux OUT.

**(c) A phosphorylation switch.** HSL's phosphorylation state flips within minutes, with no new HSL synthesized. Insulin = dephosphorylation = storage; glucagon/epinephrine = PKA phosphorylation = mobilization.`
    },
    {
      id: 'lm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Synthesis, Cholesterol & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Acetyl-CoA generated in the mitochondrion reaches the cytosolic fatty-acid-synthesis machinery as:`,
            options: [`Free acetate diffusing through the membrane`, `Citrate, cleaved by ATP-citrate lyase`, `Intact acetyl-CoA carried out by the carnitine shuttle`, `Malonyl-CoA made in the matrix by acetyl-CoA carboxylase`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The inner membrane is impermeable to acetyl-CoA, so it condenses with oxaloacetate to citrate, exits on the tricarboxylate carrier, and ATP-citrate lyase regenerates acetyl-CoA + OAA in the cytosol. The carnitine system runs the OPPOSITE direction, importing long acyl groups for oxidation.`
          },
          {
            question: `A statin lowers plasma LDL primarily because reduced hepatic cholesterol synthesis leads to:`,
            options: [`Direct inhibition of intestinal cholesterol absorption`, `Increased HDL secretion by the liver`, `Inhibition of lipoprotein lipase`, `Upregulation of hepatic LDL receptor expression`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Statins competitively inhibit HMG-CoA reductase. The cholesterol-starved hepatocyte activates SREBP, transcribing more LDL receptors, so the liver pulls more LDL out of plasma. The drug's effect on the bloodstream is thus indirect — via receptor upregulation, not absorption or LPL.`
          },
          {
            question: `Which pair correctly matches a fatty-acid-synthesis feature against its beta-oxidation counterpart?`,
            options: [`Synthesis: mitochondrial matrix / Oxidation: cytosol`, `Synthesis: NADH consumed / Oxidation: NADPH and FADH2 produced`, `Synthesis: NADPH consumed / Oxidation: NADH and FADH2 produced`, `Synthesis: acyl carrier is CoA / Oxidation: acyl carrier is ACP`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Synthesis is cytosolic and reductive (NADPH from the pentose phosphate pathway and malic enzyme); oxidation is mitochondrial and oxidative (FADH$_2$ + NADH captured for the ETC). The other pairings swap the compartments, the reducing cofactors (NADPH belongs to synthesis, not oxidation), or the acyl carriers (ACP for synthesis, CoA for oxidation).`
          },
          {
            question: `AMPK is activated when cellular energy falls. Its coordinated effect on lipid metabolism is to:`,
            options: [`Phosphorylate and inhibit both ACC and HMG-CoA reductase`, `Phosphorylate and activate both ACC and HMG-CoA reductase`, `Dephosphorylate and inhibit both ACC and HMG-CoA reductase`, `Dephosphorylate and activate both ACC and HMG-CoA reductase`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `AMPK is the low-energy alarm: it switches OFF anabolic, ATP-consuming pathways. It is a kinase, not a phosphatase, and for both enzymes phosphorylation means inhibition (insulin's dephosphorylation turns them back on). Phosphorylating ACC (dropping malonyl-CoA, which also opens CPT-I for beta-oxidation) and HMG-CoA reductase kills both fatty acid and cholesterol synthesis at their rate-limiting steps.`
          },
          {
            question: `Linoleic acid (18:2, omega-6) is essential in the human diet because human desaturases:`,
            options: [`Cannot act on chains longer than 14 carbons`, `Require vitamin B12 as a cofactor`, `Function only in mitochondria, not the ER`, `Cannot introduce double bonds beyond carbon 9`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Human ER desaturases install double bonds only at or before C9 (counting from the carboxyl end). Linoleate (double bonds at 9 and 12) and alpha-linolenate (9, 12, 15) therefore cannot be built and must be eaten — they are precursors of arachidonic acid and eicosanoids.`
          }
        ]
      }
    },
    {
      id: 'lm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Synthesis is not oxidation reversed.** Synthesis: cytosol, NADPH, ACP, malonyl-CoA added; oxidation: matrix, FAD/NAD$^+$, CoA.
- **ACC is rate-limiting.** The citrate shuttle exports acetyl-CoA; ACC (biotin) makes malonyl-CoA, switched on by insulin and citrate.
- **HMG-CoA reductase gates cholesterol.** Statins inhibit it; SREBP senses low cholesterol and adds LDL receptors, lowering LDL.
- **Fed builds, fasting burns.** Fed: ACC and FAS on, VLDL out; fasting: HSL on, beta-oxidation and ketones, CPT-I open.

**Common traps**

- **Statins blocking absorption.** Statins act indirectly: less hepatic synthesis upregulates LDL receptors, which clear plasma LDL.
- **AMPK as an activator.** AMPK phosphorylates ACC and HMG-CoA reductase, and phosphorylation switches both enzymes OFF.
- **Acetyl-CoA on the carnitine shuttle.** Acetyl-CoA leaves the matrix only as citrate; the carnitine shuttle imports acyl groups.
- **Making your own linoleate.** Humans cannot desaturate beyond C9, so linoleic and alpha-linolenic acids must be eaten.

<!-- yield:low -->
- Low-yield extras: bempedoic acid inhibits ATP-citrate lyase and lowers LDL by statin-like logic
<!-- /yield -->`
    }
  ]
};
