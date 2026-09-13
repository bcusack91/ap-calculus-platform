export const mcatCarbMetabPart2Data = {
  topicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  sections: [
    {
      id: 'cm2-intro',
      type: 'text' as const,
      content: `# Carbohydrate Metabolism

**Part 2 of 4 — Gluconeogenesis & Reciprocal Regulation**

### Why a Separate Pathway?

Gluconeogenesis builds glucose from noncarbohydrate precursors during fasting — mainly in the **liver** (kidney cortex helps in prolonged fasts). It is NOT glycolysis run backward: the three irreversible glycolytic steps are bypassed by **four dedicated enzymes**.

| Glycolytic step bypassed | Gluconeogenic enzyme(s) | Location / cofactor notes |
|--------------------------|-------------------------|---------------------------|
| Pyruvate kinase | 1. **Pyruvate carboxylase** (pyruvate → OAA) 2. **PEPCK** (OAA → PEP) | PC: mitochondrial, biotin + ATP, REQUIRES acetyl-CoA as activator; PEPCK: uses GTP, releases CO$_2$ |
| PFK-1 | **Fructose-1,6-bisphosphatase** | Cytosolic; the RATE-LIMITING step; inhibited by AMP and F2,6-BP |
| Hexokinase/glucokinase | **Glucose-6-phosphatase** | In the ER lumen of liver/kidney; muscle LACKS it (muscle glycogen cannot export glucose) |

Because OAA cannot cross the inner mitochondrial membrane, it leaves as **malate** (or aspartate) and is reconverted in the cytosol.

### The Substrates

- **Lactate** (Cori cycle: RBC/muscle lactate → liver glucose → back out)
- **Alanine** (glucose-alanine cycle from muscle protein)
- **Glycerol** (from triglyceride breakdown; enters as DHAP; needs liver glycerol kinase)
- **Propionyl-CoA** from odd-chain fatty acids (via B12-dependent methylmalonyl-CoA mutase → succinyl-CoA)

**NEVER acetyl-CoA:** PDH is irreversible, and the TCA cycle loses two carbons as CO$_2$ per acetyl group — even-chain fatty acids cannot yield net glucose.

### The Price Tag

2 pyruvate → 1 glucose costs **4 ATP + 2 GTP + 2 NADH** (6 high-energy phosphates). Compare: glycolysis earned only 2 ATP. Running both simultaneously would be a **futile cycle** burning 4 ATP per round — hence reciprocal regulation.

### Reciprocal Regulation: One Signal, Opposite Effects

| Signal | Glycolysis (liver) | Gluconeogenesis |
|--------|--------------------|-----------------|
| Insulin (fed) → F2,6-BP UP | PFK-1 activated | F1,6-BPase inhibited |
| Glucagon (fasting) → PKA, F2,6-BP DOWN | PFK-1 loses activator; pyruvate kinase phosphorylated OFF | F1,6-BPase disinhibited; PEPCK transcription UP |
| Acetyl-CoA high (fat oxidation) | PDH inhibited | Pyruvate carboxylase ACTIVATED |
| AMP high (energy poor) | PFK-1 activated | F1,6-BPase inhibited |

The acetyl-CoA logic is elegant: when the fasting liver burns fat, abundant acetyl-CoA simultaneously says "stop oxidizing pyruvate" (PDH off) and "start carboxylating it toward glucose" (PC on).

### Ethanol Footnote

Ethanol oxidation floods the liver with NADH, pushing pyruvate → lactate and OAA → malate — starving gluconeogenesis of substrates. This is why heavy drinking while fasting causes **hypoglycemia**.`
    },
    {
      id: 'cm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gluconeogenesis** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which enzyme is found in liver but NOT in skeletal muscle, explaining why muscle glycogen cannot raise blood glucose directly?`,
            options: [`Glycogen phosphorylase`, `Glucose-6-phosphatase`, `Phosphoglucomutase`, `Hexokinase`],
            correctAnswer: 1,
            explanation: `Muscle degrades glycogen to G6P but, lacking glucose-6-phosphatase, cannot dephosphorylate it for export; the G6P is consumed by muscle glycolysis. Liver (and kidney) G6Pase releases free glucose into blood.`
          },
          {
            question: `Even-numbered fatty acids cannot support NET glucose synthesis because:`,
            options: [`Fatty acids cannot enter mitochondria during fasting`, `Each turn loses two CO$_2$, so OAA shows no net gain`, `Fatty acid oxidation consumes more ATP than it yields`, `Acetyl-CoA allosterically inhibits pyruvate carboxylase`],
            correctAnswer: 1,
            explanation: `Acetyl-CoA enters the TCA cycle by condensing with OAA, but one full turn releases 2 CO$_2$ — no NET gain of intermediates, so no net carbon flows to glucose. (The CO$_2$ carbons lost in a given turn are not literally the acetyl carbons just added; the point is net accounting: two carbons in, two out, OAA only regenerated.) (Odd-chain fats are the exception via propionyl-CoA → succinyl-CoA.) Acetyl-CoA actually ACTIVATES pyruvate carboxylase.`
          },
          {
            question: `The Cori cycle describes:`,
            options: [`Glucose oxidation to CO$_2$ in exercising muscle`, `Lactate recycled into glucose by the liver for the periphery`, `Muscle alanine carried to the liver and converted to glucose`, `Adipose glycerol converted to glucose via hepatic DHAP`],
            correctAnswer: 1,
            explanation: `Anaerobic tissues (muscle, RBCs) export lactate; the liver spends 6 ATP-equivalents to remake glucose and ships it back. The energy cost is transferred to the liver — the cycle shifts the metabolic burden, it does not create energy. The alanine route is the separate glucose-alanine cycle, and glycerol from adipose is a one-way gluconeogenic substrate, not a cycle.`
          },
          {
            question: `A high level of acetyl-CoA in a fasting hepatocyte simultaneously:`,
            options: [`Activates PDH and inhibits pyruvate carboxylase`, `Inhibits PDH and activates pyruvate carboxylase`, `Activates both PDH and pyruvate carboxylase`, `Inhibits both PDH and pyruvate carboxylase`],
            correctAnswer: 1,
            explanation: `Acetyl-CoA (from fatty acid oxidation) signals that the liver has fuel: it inhibits PDH (sparing pyruvate from oxidation) and allosterically activates pyruvate carboxylase (committing pyruvate to gluconeogenesis) — a coordinated fork-in-the-road switch.`
          },
          {
            question: `A fasting patient presents with hypoglycemia after an alcohol binge. The most direct mechanism is that ethanol metabolism:`,
            options: [`Raises the NADH/NAD$^+$ ratio, depleting pyruvate and OAA`, `Raises the NADH/NAD$^+$ ratio, sparing pyruvate and OAA`, `Lowers the NADH/NAD$^+$ ratio, sparing pyruvate and OAA`, `Lowers the NADH/NAD$^+$ ratio, depleting pyruvate and OAA`],
            correctAnswer: 0,
            explanation: `Alcohol dehydrogenase and aldehyde dehydrogenase both reduce NAD$^+$ to NADH, raising (not lowering) the cytosolic NADH/NAD$^+$ ratio, and that high NADH depletes rather than spares the gluconeogenic substrates. High NADH pushes the LDH and malate dehydrogenase equilibria away from pyruvate and OAA (toward lactate and malate) — the two key gluconeogenic entry points — so a fasting liver (glycogen already depleted) cannot make glucose.`
          }
        ]
      }
    },
    {
      id: 'cm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Four bypass enzymes: pyruvate carboxylase (biotin, mito, needs acetyl-CoA), PEPCK (GTP), F1,6-BPase (rate-limiting), G6Pase (liver/kidney ER only)
- Substrates: lactate (Cori), alanine, glycerol, odd-chain propionyl-CoA — NEVER net glucose from acetyl-CoA/even-chain fat
- Cost: 6 high-energy bonds per glucose (vs. 2 earned by glycolysis) — futile cycling is prevented by reciprocal regulation
- F2,6-BP is the fed/fasting toggle: activates PFK-1, inhibits F1,6-BPase; glucagon destroys it, insulin raises it
- Ethanol → high NADH → substrate steal → fasting hypoglycemia`
    },
    {
      id: 'cm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Gluconeogenic Reasoning

<details>
<summary><b>Example 1: Energy bookkeeping for the Cori cycle</b></summary>

**Question:** Muscle exports 2 lactate made anaerobically (2 ATP gained in muscle). The liver reconverts them to 1 glucose. What is the whole-body ATP balance for one full loop, and why is the cycle still worthwhile?

**Solution:**
1. Muscle: +2 ATP (anaerobic glycolysis).
2. Liver: −6 ATP-equivalents (4 ATP + 2 GTP) for gluconeogenesis from 2 lactate.
3. Net: −4 ATP per loop for the body. Worthwhile because it moves the energy cost from an O$_2$-starved, working muscle (or an RBC that can never oxidize) to the well-oxygenated liver, and it recycles carbon instead of losing it as lactate in urine.

**MCAT Strategy:** The Cori cycle is an energy TRANSFER, not an energy source — expect a question asking where the "missing" 4 ATP went (liver fat oxidation pays the bill).
</details>

<details>
<summary><b>Example 2: Which precursors yield net glucose?</b></summary>

**Question:** A fasting patient's liver receives: (a) glycerol from adipose lipolysis, (b) palmitate (C16), (c) alanine from muscle, (d) propionate from gut bacteria. Which contribute NET carbon to new glucose?

**Solution:**
1. (a) Glycerol → glycerol-3-P → DHAP: YES, direct gluconeogenic entry.
2. (b) Palmitate → 8 acetyl-CoA: NO net glucose (carbons lost as CO$_2$); it only provides ATP and the acetyl-CoA activation signal.
3. (c) Alanine → pyruvate (transamination): YES.
4. (d) Propionate → propionyl-CoA → methylmalonyl-CoA → succinyl-CoA (B12): YES — the odd-carbon exception.

**MCAT Strategy:** Sort every precursor into "becomes pyruvate/OAA/TCA intermediate/DHAP" (glucogenic) vs. "becomes acetyl-CoA only" (not).
</details>

<details>
<summary><b>Example 3: Interpret a futile-cycle experiment</b></summary>

**Question:** Hepatocytes engineered to express a PFK-1 variant insensitive to ATP and citrate inhibition are incubated in fasting conditions with glucagon. Compared with normal cells, what happens to ATP consumption and heat production?

**Solution:**
1. Glucagon activates gluconeogenesis (F1,6-BPase working), but the mutant PFK-1 cannot be turned down and keeps rephosphorylating F6P → F1,6-BP.
2. The two opposing reactions cycle: each round hydrolyzes ATP (PFK-1) and P$_i$ is released (F1,6-BPase) with **no net flux** — a futile (substrate) cycle.
3. ATP consumption and heat output rise; net glucose production falls.

**MCAT Strategy:** Whenever paired opposing enzymes are BOTH active, count the ATP burned per cycle and expect "heat" as the answer to where the energy goes (some organisms use this deliberately for thermogenesis).
</details>`
    }
  ]
};
