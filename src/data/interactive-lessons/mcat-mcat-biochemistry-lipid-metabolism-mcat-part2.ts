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
- Subtract 2 ATP equivalents for activation: $80 + 17.5 + 10.5 - 2 = 106$ ATP

### Special Chains

- **Odd-chain fatty acids:** the final thiolysis leaves **propionyl-CoA** (3 C) → carboxylated (biotin) to methylmalonyl-CoA → **methylmalonyl-CoA mutase (vitamin B$_{12}$)** → succinyl-CoA, which enters the TCA cycle. This is the ONLY fatty acid fragment that can feed net gluconeogenesis.
- **Unsaturated fatty acids:** existing cis double bonds require an **isomerase** (and, for polyunsaturates, a reductase) and skip the FADH$_2$-generating step at that position — slightly LESS ATP than a saturated chain of equal length.
- **Very-long chains (> 20 C):** shortened first in **peroxisomes**, where the initial oxidation hands electrons to O$_2$, making H$_2$O$_2$ (no ATP from that first step).`
    },
    {
      id: 'lm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Oxidation Arithmetic

**Problem 1.** Capric acid (C10:0) is completely oxidized. Count 2.5 ATP per NADH and 1.5 ATP per FADH$_2$.

- **(a)** How many beta-oxidation cycles does it run, and how many acetyl-CoA does it release?
- **(b)** How much ATP do the acetyl-CoA, NADH and FADH$_2$ each contribute?
- **(c)** What is the net ATP yield?

**(a) Cycles and acetyl-CoA.** Cycles = 10/2 − 1 = **4**; acetyl-CoA = 10/2 = **5**.

**(b) Each product's share.** With 4 cycles and 5 acetyl-CoA from (a): 5 acetyl-CoA × 10 = 50; 4 NADH × 2.5 = 10; 4 FADH$_2$ × 1.5 = 6.

**(c) Net yield.** The subtotal from (b) is 66; subtract 2 for activation → **64 ATP**. Every saturated even chain: cycles = n/2 − 1, acetyl-CoA = n/2. Wrong answers are built from forgetting the −2 activation cost.

**Problem 2.** An infant has seizures after long gaps between feedings. Labs during an episode: low glucose, LOW ketones, normal carnitine.

- **(a)** What does hypoketotic hypoglycemia during fasting say about fat burning?
- **(b)** Where is the lesion, given the normal carnitine?
- **(c)** Why does glucose fall so far?

**(a) Fat burning is broken.** Normal fasting produces ABUNDANT ketones, so fasting + hypoketotic hypoglycemia means the fat-burning pathway is broken.

**(b) The lesion.** Normal carnitine points past the shuttle: an acyl-CoA dehydrogenase defect (classically MCAD).

**(c) Why glucose crashes.** Muscle and other tissues, unable to burn fat, keep consuming glucose, and hepatic gluconeogenesis stalls without beta-oxidation-derived acetyl-CoA to activate pyruvate carboxylase and supply ATP. Ketogenesis and gluconeogenesis BOTH lean on beta-oxidation in fasting.

<!-- yield:low -->
- Problem 2 aside: a supporting lab clue in MCAD deficiency is elevated urinary dicarboxylic acids, because the backed-up fatty acids are diverted to backup omega-oxidation in the ER.
<!-- /yield -->

**Problem 3.** Oleate (18:1, cis-9) and stearate (18:0) are both fully oxidized.

- **(a)** How many cycles and acetyl-CoA does each produce?
- **(b)** Which step does oleate's existing double bond skip, and what does it lose?
- **(c)** Which yields more ATP, and by roughly how much?

**(a) Same skeleton.** Both are 18 C: 8 cycles, 9 acetyl-CoA.

**(b) The skipped step.** The acyl-CoA dehydrogenase step is SKIPPED for that round (an isomerase repositions the bond instead), so oleate makes one fewer FADH$_2$.

**(c) The difference.** With one fewer FADH$_2$ from (b), stearate wins by ~1.5 ATP (stearate ≈ 120, oleate ≈ 118.5). Existing unsaturation = electrons already removed = less energy left to harvest.`
    },
    {
      id: 'lm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Beta-Oxidation & Energetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Counting 2.5 ATP per NADH and 1.5 ATP per FADH$_2$, how many total ATP equivalents are produced by the complete oxidation of one palmitate (16:0) molecule, net of activation?`,
            options: [`96`, `108`, `106`, `104`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Using the stated P/O convention (2.5 ATP per NADH, 1.5 per FADH$_2$, 10 per acetyl-CoA): seven cycles give 8 acetyl-CoA (times 10 = 80), 7 NADH (times 2.5 = 17.5), and 7 FADH$_2$ (times 1.5 = 10.5) for 108; activation to palmitoyl-CoA consumed ATP to AMP + 2 P$_i$ = 2 ATP equivalents, so the net is 106. Forgetting activation gives 108, and charging activation as 4 ATP equivalents gives 104.`
          },
          {
            question: `Malonyl-CoA inhibits carnitine palmitoyltransferase I. The physiological logic of this regulation is to:`,
            options: [`Stop newly made fatty acids from being oxidized`, `Divert fatty acids toward ketogenesis during fasting`, `Block glucose entry into glycolysis when fat is abundant`, `Stimulate the carnitine shuttle when insulin is high`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Malonyl-CoA marks active fatty acid synthesis (fed state). By shutting the mitochondrial import gate (CPT-I), it guarantees that synthesis and beta-oxidation never run simultaneously. Insulin raises malonyl-CoA, which INHIBITS, not stimulates, the shuttle.`
          },
          {
            question: `A child with medium-chain acyl-CoA dehydrogenase (MCAD) deficiency becomes hypoglycemic when fasting, with abnormally LOW ketones. Ketones are low because:`,
            options: [`The liver overproduces malonyl-CoA during fasting`, `Gluconeogenesis consumes all available acetyl-CoA`, `The carnitine shuttle cannot import long-chain acyl groups`, `Beta-oxidation stalls, starving ketogenesis of acetyl-CoA`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Ketone bodies are built from acetyl-CoA produced by hepatic beta-oxidation. If the dehydrogenase step fails at medium chain lengths, acetyl-CoA production collapses — hence hypoKETOTIC hypoglycemia (glucose is drained because tissues cannot switch to fat fuel). Acetyl-CoA cannot feed gluconeogenesis.`
          },
          {
            question: `Complete oxidation of the odd-chain fatty acid C17:0 differs from C16:0 in that it yields:`,
            options: [`One extra FADH$_2$ per cycle`, `A terminal propionyl-CoA that becomes succinyl-CoA`, `A terminal malonyl-CoA that becomes acetyl-CoA`, `A terminal pyruvate that enters gluconeogenesis`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Odd chains end in a 3-carbon propionyl-CoA rather than a final acetyl-CoA. Propionyl-CoA carboxylase (biotin) and methylmalonyl-CoA mutase (vitamin B12) convert it to succinyl-CoA — a TCA intermediate that CAN supply net gluconeogenesis, unlike acetyl-CoA.`
          },
          {
            question: `Which cofactor pattern is generated by ONE round of beta-oxidation, before the acetyl-CoA is counted?`,
            options: [`2 NADH only`, `1 NADH + 1 GTP`, `1 FADH$_2$ + 1 NADH`, `2 FADH$_2$ + 1 NADPH`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The first oxidation (acyl-CoA dehydrogenase) reduces FAD; the second (3-hydroxyacyl-CoA dehydrogenase) reduces NAD$^+$. Hydration and thiolysis are redox-neutral. GTP appears only in the TCA cycle, and NADPH belongs to synthesis, not oxidation.`
          }
        ]
      }
    },
    {
      id: 'lm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Activation costs 2 ATP.** ATP → AMP + PP$_i$ costs 2 ATP equivalents, paid once per fatty acid whatever its length.
- **Malonyl-CoA guards the gate.** The carnitine shuttle (CPT-I, translocase, CPT-II) imports long chains; malonyl-CoA blocks CPT-I.
- **One cycle, three products.** Each round makes 1 FADH$_2$, 1 NADH and 1 acetyl-CoA and shortens the chain by 2 carbons.
- **Palmitate nets 106 ATP.** 7 cycles and 8 acetyl-CoA give $80 + 17.5 + 10.5 - 2 = 106$ ATP.

**Common traps**

- **Forgetting activation.** Leaving out the 2-ATP activation cost gives 108 for palmitate instead of 106.
- **Counting n/2 cycles.** An n-carbon chain runs n/2 − 1 cycles but releases n/2 acetyl-CoA (palmitate: 7 and 8).
- **Calling fat glucogenic.** Acetyl-CoA makes no net glucose; only an odd chain's propionyl-CoA → succinyl-CoA can.
- **Unsaturated equals saturated.** An existing cis double bond skips (or costs) a redox step, so the chain yields slightly less ATP.

<!-- yield:low -->
- Low-yield extras: in acyl-CoA dehydrogenase defects such as MCAD, backed-up fatty acids spill into omega-oxidation, so urinary dicarboxylic acids rise
<!-- /yield -->`
    }
  ]
};
