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

Fasting/epinephrine → PKA phosphorylates and activates **hormone-sensitive lipase** in adipocytes → TG hydrolyzed → **free fatty acids travel on serum albumin**; glycerol goes to the liver (gluconeogenesis). Insulin does the opposite (inhibits HSL).

<!-- yield:low -->
PKA also phosphorylates **perilipins**, the proteins coating the fat droplet, which gives HSL access to the stored TG.
<!-- /yield -->`
    },
    {
      id: 'lm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Transport Problems

**Problem 1.** A long-chain fatty acid starts in a meal's triglyceride and ends as ATP in a cardiac muscle cell.

- **(a)** How does the fatty acid get from the gut lumen into the blood?
- **(b)** How does it get out of its lipoprotein and into the cardiomyocyte?
- **(c)** What happens to it inside the cardiomyocyte?
- **(d)** Did it ever travel "free" in plasma on the way from the gut?

**(a) Gut to blood.** Bile-salt micelle → pancreatic lipase frees the FA → the enterocyte re-esterifies it to TG → chylomicron (apoB-48) → lymph → blood.

**(b) Unloading.** Cardiac capillary LPL (activated by apoC-II acquired from HDL) hydrolyzes the TG; the FA enters the cardiomyocyte.

**(c) Burning it.** Activation to fatty acyl-CoA, the carnitine shuttle into mitochondria, then beta-oxidation → acetyl-CoA → TCA → ETC → ATP.

**(d) Never free.** No: from the gut it moved inside a lipoprotein; only adipose-mobilized FAs ride albumin. Distinguish the two modes: lipoprotein TG (fed state, LPL unloads) vs. albumin-bound FFA (fasting, HSL releases).

**Problem 2.** A fasting patient's plasma is creamy, with a thick floating layer of apoB-48 particles on ultracentrifugation. Post-heparin plasma LPL protein is normal but inactive; adding normal HDL restores its activity.

- **(a)** Which lipoprotein is persisting?
- **(b)** What does HDL donate, so what is deficient?
- **(c)** Which other TG-rich particle should also accumulate, and what experiment confirms the diagnosis?
- **(d)** What does a "restored by adding X" experiment identify?

**(a) The particle.** apoB-48 + a floating layer after an overnight fast = persistent CHYLOMICRONS (they should clear within hours).

**(b) The diagnosis.** LPL protein is present but inactive, yet normal HDL restores activity. HDL's relevant donation is **apoC-II**, so the patient has apoC-II deficiency.

**(c) VLDL and the confirmation.** VLDL also depends on apoC-II-activated LPL to unload its TG, so it should accumulate too. Adding purified apoC-II would be the confirming experiment.

**(d) The general rule.** It identifies the missing cofactor, not the enzyme. Map each apoprotein to its job: B-48 assembly, C-II LPL activation, E remnant uptake, B-100 LDL receptor, A-I LCAT.

**Problem 3.** A bacterium shifted from 37 to 20 degrees C remodels its membrane lipids.

- **(a)** Does the cold membrane need to become more or less fluid?
- **(b)** How do its fatty acid saturation and chain length change?
- **(c)** What happens on warming, and what buffers fluidity in animal membranes?

**(a) Direction.** Cold rigidifies membranes, so the cell must INCREASE fluidity to compensate (homeoviscous adaptation).

**(b) The lipid changes.** It incorporates MORE unsaturated (cis-kinked) fatty acids and SHORTER chains; both pack less tightly, lowering the transition temperature.

**(c) Warming and cholesterol.** The reverse occurs on warming. In animal membranes, cholesterol buffers fluidity: it rigidifies fluid membranes and fluidizes rigid ones. Levers: unsaturation UP = fluid; chain length UP = rigid; cholesterol = buffer both ways.`
    },
    {
      id: 'lm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Lipid Transport & Digestion** 🎯`,
      exercise: {
        questions: [
          {
            question: `Gram for gram, triacylglycerols store far more energy than glycogen mainly because fat is:`,
            options: [`More oxidized and stored with water`, `More reduced and anhydrous`, `Less reduced but more compact`, `More reduced but hydrated like glycogen`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Fatty acid carbons are highly reduced (more electrons to harvest → ~9 kcal/g vs ~4) and TG droplets are anhydrous, while glycogen binds roughly 2 g of water per gram. Both factors compound to make fat ~6-fold denser as an energy store.`
          },
          {
            question: `A patient with a nonfunctional apoC-II has severe hypertriglyceridemia after meals. The defective step is:`,
            options: [`Chylomicron assembly in enterocytes`, `Activation of capillary lipoprotein lipase`, `LDL receptor recognition of apoB-100`, `Pancreatic lipase hydrolysis of dietary TG`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `LPL on capillary walls requires apoC-II as an obligatory cofactor. Without it, TG-rich particles cannot unload their cargo and accumulate in plasma — biochemically identical in consequence to LPL deficiency itself (type I hyperlipoproteinemia).`
          },
          {
            question: `Dietary triglycerides reach systemic tissues BEFORE passing through the liver because chylomicrons:`,
            options: [`Are secreted into capillaries that drain to the portal vein`, `Enter lacteals and reach blood via the thoracic duct`, `Are absorbed through the gastric mucosa`, `Are synthesized in hepatocytes and secreted into plasma`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Chylomicrons are too large for intestinal capillaries; they enter lacteals and bypass first-pass hepatic metabolism. Contrast with short- and medium-chain fatty acids, which are water-soluble enough to use the portal vein directly.`
          },
          {
            question: `Familial hypercholesterolemia results from LDL-receptor mutations. In heterozygotes, plasma LDL is roughly doubled because:`,
            options: [`The liver secretes twice as much VLDL`, `Receptor-mediated LDL clearance is halved`, `HDL cannot remove tissue cholesterol`, `Lipoprotein lipase is overactive`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `LDL levels reflect a balance of production and receptor-mediated uptake (apoB-100 recognition, clathrin-coated endocytosis). Half the receptors means slower clearance, higher steady-state LDL, and cholesterol deposition in arteries and tendons (xanthomas).`
          },
          {
            question: `During a fast, adipocyte lipolysis accelerates because:`,
            options: [`Insulin-stimulated dephosphorylation activates hormone-sensitive lipase`, `Low insulin and rising cAMP let PKA activate hormone-sensitive lipase`, `Lipoprotein lipase hydrolyzes the adipocyte's stored triglyceride`, `Albumin enters the adipocyte to extract fatty acids`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `HSL is a PKA target: catecholamines (plus falling insulin, which removes the phosphatase brake) leave HSL phosphorylated and active. Released FFAs ride albumin to muscle and liver; glycerol goes to hepatic gluconeogenesis. Insulin-driven dephosphorylation INACTIVATES HSL (the fed-state brake), and LPL works on lipoprotein TG in capillaries, not stored TG.`
          }
        ]
      }
    },
    {
      id: 'lm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Fat stores dense energy.** Triacylglycerol is reduced and anhydrous: about 9 kcal/g versus about 4 for hydrated glycogen.
- **Dietary fat rides lymph.** Bile salts emulsify, lipase digests, and enterocytes pack TG into apoB-48 chylomicrons for lymph.
- **The density ladder.** Chylomicrons/VLDL unload TG; LDL (apoB-100 → LDL receptor; FH when absent) delivers cholesterol; HDL returns it.
- **Fasting mobilizes stored fat.** PKA turns on hormone-sensitive lipase; FFAs ride albumin, glycerol goes to liver; insulin switches HSL off.

**Common traps**

- **LPL working without apoC-II.** LPL is inactive without apoC-II, so TG-rich particles pile up even when LPL protein is normal.
- **Chylomicrons in the portal vein.** Chylomicrons enter lacteals and bypass the liver; only short/medium-chain FAs use the portal vein.
- **Mixing up the two lipases.** LPL unloads lipoprotein TG in capillaries; HSL releases the adipocyte's stored TG in fasting.
- **Kinks make membranes rigid.** Cis double bonds pack poorly, lowering melting point and RAISING fluidity; cholesterol buffers both ways.

<!-- yield:low -->
- Low-yield extras: PKA also phosphorylates perilipins, the droplet-coating proteins, to give HSL access to stored TG
<!-- /yield -->`
    }
  ]
};
