export const mcatLipidMetabPart1Data = {
  topicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  sections: [
    {
      id: 'lm1-intro',
      type: 'text' as const,
      content: `# Lipid Metabolism

**Part 1 of 4 — Lipid Structures, Digestion & Lipoprotein Transport**

### The Cast of Lipids

| Lipid | Structure | Role |
|-------|-----------|------|
| Fatty acids | Hydrocarbon chain + carboxyl; saturated (no C=C) or unsaturated (cis double bonds kink the chain) | Fuel, building blocks |
| Triacylglycerols (TG) | Glycerol + 3 fatty acids (esters) | Energy storage: ~9 kcal/g, stored ANHYDROUS (vs. ~4 kcal/g hydrated glycogen) |
| Phospholipids | Glycerol + 2 FA + phosphate + head group | Amphipathic membrane builders |
| Cholesterol | Rigid steroid ring + hydroxyl | Membrane fluidity buffer; precursor of steroids, bile acids, vitamin D |
| Sphingolipids | Sphingosine backbone | Membranes, myelin, cell recognition |

**Unsaturation lowers melting point** (kinks pack poorly) and increases membrane fluidity; cholesterol moderates fluidity in both directions.

### Digestion & Absorption

1. **Bile salts** (amphipathic cholesterol derivatives, released from gallbladder on CCK signal) emulsify dietary fat into micelles.
2. **Pancreatic lipase** hydrolyzes TG to 2-monoacylglycerol + 2 free fatty acids.
3. Enterocytes absorb these, **re-esterify** them to TG, and package them with **apoB-48** into **chylomicrons**.
4. Chylomicrons enter **lymph** (lacteals) — bypassing the liver's first pass — then blood. Short/medium-chain fatty acids skip this and go straight to the portal vein.

### Lipoprotein Logic (Density Rises as Fat Is Unloaded)

| Particle | Cargo | Key apoproteins | Job |
|----------|-------|-----------------|-----|
| Chylomicron | Dietary TG | **B-48**, C-II, E | Deliver dietary TG to tissues |
| VLDL | Liver-made TG | **B-100**, C-II, E | Deliver endogenous TG |
| IDL → LDL | Cholesterol-rich remnant | B-100 | LDL delivers cholesterol TO tissues ("bad") |
| HDL | Cholesterol scavenger | **A-I** | REVERSE cholesterol transport to liver ("good"); donates C-II/E to others |

- **Lipoprotein lipase (LPL)** on capillary endothelium (muscle, adipose) hydrolyzes TG in chylomicrons/VLDL; it REQUIRES **apoC-II** as activator; insulin upregulates adipose LPL.
- **LDL receptor** endocytosis (recognizing apoB-100) internalizes LDL; receptor deficiency = familial hypercholesterolemia (early atherosclerosis).
- **LCAT** (activated by apoA-I) esterifies cholesterol on HDL, packing it into the core for the trip back.

### Mobilizing Stored Fat

Fasting/epinephrine → PKA phosphorylates and activates **hormone-sensitive lipase** (and perilipins) in adipocytes → TG hydrolyzed → **free fatty acids travel on serum albumin**; glycerol goes to the liver (gluconeogenesis). Insulin does the opposite (inhibits HSL).`
    },
    {
      id: 'lm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Lipid Transport & Digestion** 🎯`,
      exercise: {
        questions: [
          {
            question: `Gram for gram, triacylglycerols store far more energy than glycogen mainly because fat is:`,
            options: [`More oxidized and stored with water`, `More reduced and stored without water`, `Less reduced but more compact`, `More reduced but hydrated like glycogen`],
            correctAnswer: 1,
            explanation: `Fatty acid carbons are highly reduced (more electrons to harvest → ~9 kcal/g vs ~4) and TG droplets are anhydrous, while glycogen binds roughly 2 g of water per gram. Both factors compound to make fat ~6-fold denser as an energy store.`
          },
          {
            question: `A patient with a nonfunctional apoC-II has severe hypertriglyceridemia after meals. The defective step is:`,
            options: [`Chylomicron assembly in enterocytes`, `Activation of capillary lipoprotein lipase`, `LDL receptor recognition of apoB-100`, `Pancreatic lipase hydrolysis of dietary TG`],
            correctAnswer: 1,
            explanation: `LPL on capillary walls requires apoC-II as an obligatory cofactor. Without it, TG-rich particles cannot unload their cargo and accumulate in plasma — biochemically identical in consequence to LPL deficiency itself (type I hyperlipoproteinemia).`
          },
          {
            question: `Dietary triglycerides reach systemic tissues BEFORE passing through the liver because chylomicrons:`,
            options: [`Are secreted into capillaries that drain to the portal vein`, `Enter lacteals and reach blood via the thoracic duct`, `Are absorbed through the gastric mucosa`, `Are synthesized in hepatocytes and secreted into plasma`],
            correctAnswer: 1,
            explanation: `Chylomicrons are too large for intestinal capillaries; they enter lacteals and bypass first-pass hepatic metabolism. Contrast with short- and medium-chain fatty acids, which are water-soluble enough to use the portal vein directly.`
          },
          {
            question: `Familial hypercholesterolemia results from LDL-receptor mutations. In heterozygotes, plasma LDL is roughly doubled because:`,
            options: [`The liver secretes twice as much VLDL`, `Receptor-mediated LDL clearance is halved`, `HDL cannot remove tissue cholesterol`, `Lipoprotein lipase is overactive`],
            correctAnswer: 1,
            explanation: `LDL levels reflect a balance of production and receptor-mediated uptake (apoB-100 recognition, clathrin-coated endocytosis). Half the receptors means slower clearance, higher steady-state LDL, and cholesterol deposition in arteries and tendons (xanthomas).`
          },
          {
            question: `During a fast, adipocyte lipolysis accelerates because:`,
            options: [`Insulin-stimulated dephosphorylation activates hormone-sensitive lipase`, `Low insulin and rising cAMP let PKA activate hormone-sensitive lipase`, `Lipoprotein lipase hydrolyzes the adipocyte's stored triglyceride`, `Albumin enters the adipocyte to extract fatty acids`],
            correctAnswer: 1,
            explanation: `HSL is a PKA target: catecholamines (plus falling insulin, which normally activates the phosphatase side) leave HSL phosphorylated and active. Released FFAs ride albumin to muscle and liver; glycerol goes to hepatic gluconeogenesis. Insulin-driven dephosphorylation INACTIVATES HSL (the fed-state brake), and LPL works on lipoprotein TG in capillaries, not stored TG.`
          }
        ]
      }
    },
    {
      id: 'lm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Fat = reduced + anhydrous = ~9 kcal/g; cis double bonds kink chains, lowering melting point and raising membrane fluidity
- Digestion: bile salts emulsify → pancreatic lipase → 2-MAG + FFA → re-esterified → chylomicrons (apoB-48) → LYMPH
- Density ladder: chylomicron → VLDL (B-100) → IDL → LDL (cholesterol out) vs. HDL (A-I, cholesterol back; LCAT esterifies)
- LPL needs apoC-II; LDL receptor reads apoB-100 (familial hypercholesterolemia when absent)
- Fasting: PKA → hormone-sensitive lipase ON → FFA on albumin + glycerol to liver; insulin reverses`
    },
    {
      id: 'lm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Transport Problems

<details>
<summary><b>Example 1: Track a dietary fatty acid to muscle ATP</b></summary>

**Question:** Outline the path of a long-chain fatty acid from a meal's triglyceride to ATP in cardiac muscle, naming each carrier and enzyme checkpoint.

**Solution:**
1. Bile-salt micelle → pancreatic lipase frees the FA → enterocyte re-esterifies to TG → chylomicron (apoB-48) → lymph → blood.
2. Cardiac capillary LPL (activated by apoC-II acquired from HDL) hydrolyzes the TG; the FA enters the cardiomyocyte.
3. Activation to fatty acyl-CoA, carnitine shuttle into mitochondria, beta-oxidation → acetyl-CoA → TCA → ETC → ATP.
4. Note the FA never traveled "free" in plasma from the gut — it moved inside a lipoprotein; only adipose-mobilized FAs ride albumin.

**MCAT Strategy:** Distinguish the two FFA transport modes: lipoprotein TG (fed state, LPL unloads) vs. albumin-bound FFA (fasting, HSL releases).
</details>

<details>
<summary><b>Example 2: Predict membrane fluidity changes</b></summary>

**Question:** A bacterium shifted from 37 to 20 degrees C remodels its membrane lipids. Predict the direction of change in fatty acid saturation and chain length, and explain.

**Solution:**
1. Cold rigidifies membranes; the cell must INCREASE fluidity to compensate (homeoviscous adaptation).
2. It incorporates MORE unsaturated (cis-kinked) fatty acids and SHORTER chains — both pack less tightly, lowering the transition temperature.
3. The reverse occurs on warming. In animal membranes, cholesterol buffers fluidity: it rigidifies fluid membranes and fluidizes rigid ones.

**MCAT Strategy:** Fluidity levers: unsaturation UP = fluid; chain length UP = rigid; cholesterol = buffer in both directions.
</details>

<details>
<summary><b>Example 3: Interpret a lipoprotein electrophoresis/assay panel</b></summary>

**Question:** A fasting patient's plasma is creamy. Ultracentrifugation shows a thick floating layer; the particles contain apoB-48. A heparin-releasable plasma enzyme assay shows normal lipase protein but no activity, which is restored by adding normal HDL. What is deficient?

**Solution:**
1. apoB-48 + floating layer after an overnight fast = persistent CHYLOMICRONS (they should clear within hours).
2. LPL protein is present but inactive in the patient's plasma — yet normal HDL restores activity. HDL's relevant donation is **apoC-II**.
3. Conclusion: apoC-II deficiency; chylomicrons (and VLDL) cannot be unloaded. Adding purified apoC-II would be the confirming experiment.

**MCAT Strategy:** "Restored by adding X" experiments identify the missing cofactor, not the enzyme; map each apoprotein to its function (B-48 assembly, C-II LPL activation, E remnant uptake, B-100 LDL receptor, A-I LCAT).
</details>`
    }
  ]
};
