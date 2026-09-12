export const mcatLipidMetabPart2Data = {
  topicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  sections: [
    {
      id: 'lm2-intro',
      type: 'text' as const,
      content: `# Lipid Metabolism

**Part 2 of 4 — The Carnitine Shuttle & Beta-Oxidation ATP Arithmetic**

### Step 0: Activation (Pay the Toll at the Door)

In the cytosol, **fatty acyl-CoA synthetase** attaches CoA to the fatty acid:

$$FA + CoA + ATP \\rightarrow fatty\\ acyl\\text{-}CoA + AMP + PP_i$$

ATP goes to **AMP** and the pyrophosphate is immediately hydrolyzed — so activation costs **2 ATP equivalents**, paid once per fatty acid no matter how long the chain.

### The Carnitine Shuttle (the Regulated Gate)

Long-chain acyl-CoA cannot cross the inner mitochondrial membrane. The shuttle:

1. **CPT-I** (outer membrane) swaps CoA for carnitine → acyl-carnitine
2. A **translocase** carries acyl-carnitine into the matrix
3. **CPT-II** (inner membrane) regenerates acyl-CoA inside

**CPT-I is inhibited by malonyl-CoA** — the first committed intermediate of fatty acid SYNTHESIS. This one interaction prevents a futile cycle: a fed cell building fat cannot simultaneously burn it. Carnitine deficiency (or CPT deficiency) presents as muscle weakness and hypoketotic hypoglycemia during fasting.

### One Beta-Oxidation Cycle = Oxidize, Hydrate, Oxidize, Cleave

Each round shortens the acyl-CoA by 2 carbons and yields **1 FADH$_2$, 1 NADH, 1 acetyl-CoA**:

| Step | Enzyme | Product |
|------|--------|---------|
| Oxidation | Acyl-CoA dehydrogenase | trans-enoyl-CoA + **FADH$_2$** |
| Hydration | Enoyl-CoA hydratase | 3-hydroxyacyl-CoA |
| Oxidation | 3-hydroxyacyl-CoA dehydrogenase | 3-ketoacyl-CoA + **NADH** |
| Thiolysis | Thiolase | acetyl-CoA + acyl-CoA (2 C shorter) |

Memory hook: the chemistry mirrors the TCA sequence succinate → fumarate → malate → oxaloacetate (FAD oxidation, hydration, NAD$^+$ oxidation).

### The Exam-Day Arithmetic: Palmitate (16 C)

A C$_{16}$ chain needs **7 cycles** (n/2 − 1) producing **8 acetyl-CoA, 7 FADH$_2$, 7 NADH**:

- 8 acetyl-CoA × 10 (each spins the TCA cycle: 3 NADH, 1 FADH$_2$, 1 GTP) = **80**
- 7 NADH × 2.5 = **17.5**
- 7 FADH$_2$ × 1.5 = **10.5**
- Subtract 2 ATP equivalents for activation

$$80 + 17.5 + 10.5 - 2 = 106\\ ATP$$

### Special Chains

- **Odd-chain fatty acids:** the final thiolysis leaves **propionyl-CoA** (3 C) → carboxylated (biotin) to methylmalonyl-CoA → **methylmalonyl-CoA mutase (vitamin B$_{12}$)** → succinyl-CoA, which enters the TCA cycle. This is the ONLY fatty acid fragment that can feed net gluconeogenesis.
- **Unsaturated fatty acids:** existing cis double bonds require an **isomerase** (and, for polyunsaturates, a reductase) and skip the FADH$_2$-generating step at that position — slightly LESS ATP than a saturated chain of equal length.
- **Very-long chains (> 20 C):** shortened first in **peroxisomes**, where the initial oxidation hands electrons to O$_2$, making H$_2$O$_2$ (no ATP from that first step).`
    },
    {
      id: 'lm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Beta-Oxidation & Energetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `How many total ATP equivalents are produced by the complete oxidation of one palmitate (16:0) molecule, net of activation?`,
            options: [`96`, `108`, `106`, `129`],
            correctAnswer: 2,
            explanation: `Seven cycles give 8 acetyl-CoA (times 10 = 80), 7 NADH (times 2.5 = 17.5), and 7 FADH$_2$ (times 1.5 = 10.5) for 108; activation to palmitoyl-CoA consumed ATP to AMP + 2 P$_i$ = 2 ATP equivalents, so the net is 106.`
          },
          {
            question: `Malonyl-CoA inhibits carnitine palmitoyltransferase I. The physiological logic of this regulation is to:`,
            options: [`Prevent newly synthesized fatty acids from being immediately re-oxidized in a futile cycle`, `Accelerate ketone body export during fasting`, `Block glucose entry into glycolysis when fat is abundant`, `Stimulate the carnitine shuttle when insulin is high`],
            correctAnswer: 0,
            explanation: `Malonyl-CoA marks active fatty acid synthesis (fed state). By shutting the mitochondrial import gate (CPT-I), it guarantees that synthesis and beta-oxidation never run simultaneously. Insulin raises malonyl-CoA, which INHIBITS, not stimulates, the shuttle.`
          },
          {
            question: `A child with medium-chain acyl-CoA dehydrogenase (MCAD) deficiency becomes hypoglycemic when fasting, with abnormally LOW ketones. Ketones are low because:`,
            options: [`The liver overproduces malonyl-CoA during fasting`, `Gluconeogenesis consumes all available acetyl-CoA`, `Carnitine cannot enter the mitochondria`, `Beta-oxidation stalls, so the liver cannot generate the acetyl-CoA needed for ketogenesis`],
            correctAnswer: 3,
            explanation: `Ketone bodies are built from acetyl-CoA produced by hepatic beta-oxidation. If the dehydrogenase step fails at medium chain lengths, acetyl-CoA production collapses — hence hypoKETOTIC hypoglycemia (glucose is drained because tissues cannot switch to fat fuel). Acetyl-CoA cannot feed gluconeogenesis.`
          },
          {
            question: `Complete oxidation of the odd-chain fatty acid C17:0 differs from C16:0 in that it yields:`,
            options: [`One extra FADH$_2$ per cycle`, `A terminal propionyl-CoA that is converted (via B12-dependent mutase) to succinyl-CoA`, `No acetyl-CoA at all`, `Two molecules of CO2 per cycle`],
            correctAnswer: 1,
            explanation: `Odd chains end in a 3-carbon propionyl-CoA rather than a final acetyl-CoA. Propionyl-CoA carboxylase (biotin) and methylmalonyl-CoA mutase (vitamin B12) convert it to succinyl-CoA — a TCA intermediate that CAN supply net gluconeogenesis, unlike acetyl-CoA.`
          },
          {
            question: `Which cofactor pattern is generated by ONE round of beta-oxidation, before the acetyl-CoA is counted?`,
            options: [`2 NADH only`, `1 NADH + 1 GTP`, `1 FADH$_2$ + 1 NADH`, `2 FADH$_2$ + 1 NADPH`],
            correctAnswer: 2,
            explanation: `The first oxidation (acyl-CoA dehydrogenase) reduces FAD; the second (3-hydroxyacyl-CoA dehydrogenase) reduces NAD$^+$. Hydration and thiolysis are redox-neutral. GTP appears only in the TCA cycle, and NADPH belongs to synthesis, not oxidation.`
          }
        ]
      }
    },
    {
      id: 'lm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Activation costs 2 ATP equivalents (ATP → AMP + PP$_i$), once per fatty acid
- Carnitine shuttle (CPT-I → translocase → CPT-II) imports long chains; **malonyl-CoA inhibits CPT-I** (no futile cycle)
- Each cycle: FADH$_2$ + NADH + acetyl-CoA; chain shrinks by 2 C
- Palmitate: 7 cycles → 8 acetyl-CoA, 7 FADH$_2$, 7 NADH → 80 + 10.5 + 17.5 − 2 = **106 ATP**
- Odd chains → propionyl-CoA → (biotin, then B12) → succinyl-CoA → the one glucogenic fat fragment
- Unsaturated chains: isomerase/reductase needed, slightly less ATP; very-long chains start in peroxisomes`
    },
    {
      id: 'lm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Oxidation Arithmetic

<details>
<summary><b>Example 1: ATP yield for a 10-carbon fatty acid</b></summary>

**Question:** Calculate the net ATP from complete oxidation of capric acid (C10:0), using 2.5/NADH and 1.5/FADH$_2$.

**Solution:**
1. Cycles = 10/2 − 1 = **4**; acetyl-CoA = 10/2 = **5**.
2. 5 acetyl-CoA × 10 = 50; 4 NADH × 2.5 = 10; 4 FADH$_2$ × 1.5 = 6.
3. Subtotal 66; subtract 2 for activation → **64 ATP**.

**MCAT Strategy:** Two formulas cover every saturated even chain: cycles = n/2 − 1, acetyl-CoA = n/2. Never forget the −2 activation cost — wrong answers on the exam are built from exactly that omission.
</details>

<details>
<summary><b>Example 2: Diagnose the fasting-intolerant patient</b></summary>

**Question:** An infant has seizures after long gaps between feedings. Labs during an episode: low glucose, LOW ketones, elevated urinary dicarboxylic acids, normal carnitine. Where is the lesion, and why does glucose fall so far?

**Solution:**
1. Fasting + hypoketotic hypoglycemia = the fat-burning pathway is broken (normal fasting produces ABUNDANT ketones).
2. Normal carnitine points past the shuttle: an acyl-CoA dehydrogenase defect (classically MCAD). Dicarboxylic acids come from backup omega-oxidation.
3. Glucose crashes because muscle and liver, unable to burn fat, keep consuming glucose, and gluconeogenesis stalls without beta-oxidation-derived acetyl-CoA to activate pyruvate carboxylase and supply ATP.

**MCAT Strategy:** Tie the observations to dependencies: ketogenesis and gluconeogenesis BOTH lean on beta-oxidation during fasting.
</details>

<details>
<summary><b>Example 3: Compare oleate to stearate</b></summary>

**Question:** Oleate (18:1, cis-9) and stearate (18:0) are both fully oxidized. Which yields more ATP, and by roughly how much?

**Solution:**
1. Both are 18 C: 8 cycles, 9 acetyl-CoA.
2. Oleate's pre-existing double bond means the acyl-CoA dehydrogenase step is SKIPPED for that round (an isomerase repositions the bond instead) — one fewer FADH$_2$.
3. Stearate wins by ~1.5 ATP (stearate ≈ 120, oleate ≈ 118.5).

**MCAT Strategy:** Existing unsaturation = electrons already removed = less energy left to harvest. Directionally, unsaturated chains always yield slightly less than the saturated chain of equal length.
</details>`
    }
  ]
};
