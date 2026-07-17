export const mcatAnatPhysPart6Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap6-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 6 of 7 — Blood & Lymphatic System**

### Blood Components

| Component | % of Blood | Key facts |
|-----------|-----------|-----------|
| Plasma | ~55% | Water, proteins (albumin, fibrinogen, antibodies), electrolytes, hormones |
| RBCs (erythrocytes) | ~45% | $O_{2}$ transport via **hemoglobin**; biconcave, **anucleate**, no mitochondria (glycolysis only) |
| WBCs (leukocytes) | <1% | Immune defense (neutrophils, lymphocytes, monocytes, eosinophils, basophils) |
| Platelets (thrombocytes) | <1% | Cell fragments from megakaryocytes; clotting |

- **Serum** = plasma with clotting factors (esp. fibrinogen) removed.

### Hemoglobin & the $O_{2}$–Dissociation Curve

Hemoglobin (4 subunits, 4 heme groups) binds $O_{2}$ **cooperatively** → sigmoidal curve.

| Shift | Cause (mnemonic: "exercising muscle") | Effect on $O_{2}$ affinity |
|-------|----------------------------------------|------------------------|
| **Right** | ↑ $CO_{2}$, ↑ $H^{+}$ (↓ pH), ↑ temperature, ↑ 2,3-BPG | **Lower** affinity → unloads $O_{2}$ to tissues |
| **Left** | ↓ $CO_{2}$, ↓ $H^{+}$ (↑ pH), ↓ temp, ↓ 2,3-BPG, **fetal Hb (HbF)** | **Higher** affinity → loads $O_{2}$ |

- **Bohr effect:** ↑ $CO_{2}/H^{+}$ in metabolizing tissue → rightward shift → $O_{2}$ delivered where needed.
- **Fetal hemoglobin (HbF)** binds 2,3-BPG poorly → left-shifted → pulls $O_{2}$ from maternal blood across the placenta.

### $CO_{2}$ Transport (3 forms)

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{carbonic anhydrase}} \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$

- ~70% as **bicarbonate** (in RBCs, then "chloride shift"), ~23% bound to Hb (carbaminohemoglobin), ~7% dissolved.

### Hemostasis (Clotting)

1. **Vascular spasm**: injured vessel constricts.
2. **Platelet plug**: platelets adhere to exposed collagen (via von Willebrand factor), activate, and aggregate.
3. **Coagulation cascade**: intrinsic + extrinsic pathways converge → **prothrombin → thrombin → fibrinogen → fibrin** → stable mesh. (Thrombin also activates factor XIII to cross-link fibrin.)

- **Vitamin K** is required to synthesize factors II, VII, IX, X (target of warfarin).

### Hematocrit

$$\\text{Hematocrit} = \\frac{\\text{Volume of packed RBCs}}{\\text{Total blood volume}} \\times 100$$

Normal ~45%. ↑ in dehydration or polycythemia (more EPO at altitude); ↓ in anemia or overhydration.

### ABO & Rh Blood Groups

| Type | Antigen on RBC | Antibody in plasma | Can receive |
|------|----------------|--------------------|-------------|
| A | A | anti-B | A, O |
| B | B | anti-A | B, O |
| AB | A & B | none | **Universal recipient** |
| O | none | anti-A & anti-B | O only (**universal donor**) |

- **Rh:** $Rh^{-}$ mother + $Rh^{+}$ fetus → maternal anti-Rh after sensitization → **erythroblastosis fetalis** in a later $Rh^{+}$ pregnancy (prevented by RhoGAM).

### Lymphatic System

- Returns excess interstitial (filtered) fluid to blood; without it → **edema**.
- Absorbs dietary fats as **chylomicrons** via intestinal **lacteals**.
- **Lymph nodes**: filter lymph; house B and T cells. **Spleen**: filters blood, removes senescent RBCs. **Thymus**: T-cell maturation.`
    },
    {
      id: 'ap6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Blood & Lymph** 🎯`,
      exercise: {
        questions: [
          {
            question: `A physiologist measures the oxygen-hemoglobin dissociation curve of blood sampled from an actively contracting skeletal muscle and compares it to resting arterial blood. Relative to rest, the curve from exercising muscle is shifted, and this shift is adaptive because:`,
            options: [`Shifted right — higher $CO_{2}$, $H^{+}$, and temperature lower Hb affinity, promoting $O_{2}$ unloading to the active tissue`, `Shifted left — lower pH raises Hb affinity, helping Hb hold onto $O_{2}$`, `Shifted right — higher pH lowers Hb affinity, promoting $O_{2}$ loading in the lungs`, `Unchanged — Hb affinity is fixed and independent of local conditions`],
            correctAnswer: 0,
            explanation: `Active muscle produces $CO_{2}$, $H^{+}$ (lactic acid), and heat, all of which lower hemoglobin's $O_{2}$ affinity — a RIGHTWARD shift (Bohr effect). This makes Hb release more $O_{2}$ precisely where metabolic demand is highest. Option B has the right direction confused (low pH shifts RIGHT, not left, and lowers affinity). Option C says higher pH, but exercising tissue is more acidic. Option D ignores the well-established modulation by local chemistry.`
          },
          {
            question: `Compared with adult hemoglobin (HbA), fetal hemoglobin (HbF) binds 2,3-bisphosphoglycerate (2,3-BPG) much more weakly. The functional consequence at the placenta is that HbF:`,
            options: [`Has a higher $O_{2}$ affinity (left-shifted curve), allowing it to pull $O_{2}$ from maternal HbA`, `Has a lower $O_{2}$ affinity, allowing the fetus to dump $O_{2}$ into maternal blood`, `Has the same $O_{2}$ affinity as HbA, so transfer depends only on the pressure gradient`, `Cannot bind $O_{2}$ until after birth when 2,3-BPG levels fall`],
            correctAnswer: 0,
            explanation: `2,3-BPG binds in the central cavity of hemoglobin and STABILIZES the low-affinity (T) state. Because HbF binds 2,3-BPG poorly, it is locked toward the high-affinity (R) state → LEFT-shifted curve → higher $O_{2}$ affinity than maternal HbA. This affinity gradient lets the fetus extract $O_{2}$ across the placenta. Option B reverses the direction of transfer; option D is false (HbF carries $O_{2}$ throughout fetal life).`
          },
          {
            question: `A trauma patient with unknown blood type needs an emergency transfusion before cross-matching can be completed. Which donor red-cell type is safest to give, and why?`,
            options: [`Type O — its RBCs carry neither A nor B antigen, so recipient anti-A/anti-B antibodies cannot agglutinate them`, `Type AB — it has no plasma antibodies, so it cannot react with the recipient`, `Type A — it is the most common type and least likely to react`, `The patient's own type, which can be inferred from their symptoms`],
            correctAnswer: 0,
            explanation: `For packed RED CELLS, the donor's ANTIGENS matter (the relevant antibodies live in the RECIPIENT's plasma). Type O cells display neither A nor B antigen, so they cannot be agglutinated by the recipient's anti-A or anti-B antibodies → O is the universal RBC donor. Option B confuses the universal RECIPIENT rule (AB plasma has no antibodies, relevant for receiving) with donating cells. Blood type cannot be guessed from symptoms (D).`
          }
        ]
      }
    },
    {
      id: 'ap6-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Blood & Lymphatic System

<details>
<summary><b>Example 1: Predict hematocrit changes</b></summary>

**Question:** A mountaineer spends 3 weeks at 4,000 m altitude. (a) What happens to hematocrit and why? (b) Separately, a different patient is acutely dehydrated — how does THEIR hematocrit change, and is the mechanism the same?

**Solution:**
1. **Altitude:** low ambient $PO_{2}$ → kidney releases **erythropoietin (EPO)** → bone marrow makes MORE RBCs → **absolute** rise in RBC mass → hematocrit ↑ (true/absolute polycythemia). ✓
2. **Dehydration:** plasma volume FALLS while RBC number is unchanged. Hematocrit = RBC vol / total blood vol, so the ratio rises → hematocrit ↑ — but this is **relative** polycythemia (no new RBCs). ✓
3. Same direction (↑), different mechanism: one adds cells, the other removes plasma.

**MCAT note:** Always distinguish absolute (cell mass changes) from relative (plasma volume changes) effects on concentration ratios.
</details>

<details>
<summary><b>Example 2: Reason through a warfarin question</b></summary>

**Question:** A patient on warfarin (a vitamin K antagonist) has prolonged clotting time. Which step of hemostasis is impaired, and would a platelet count be abnormal?

**Solution:**
1. Vitamin K is required to synthesize functional clotting factors **II, VII, IX, X**. Warfarin blocks vitamin K recycling → these factors are deficient. ✓
2. The impaired step is the **coagulation cascade** (fibrin formation), NOT vascular spasm or the platelet plug.
3. **Platelet count is normal** — warfarin affects the cascade, not platelet number. (Aspirin, by contrast, impairs platelet aggregation.) ✓

**Connection:** Distinguish primary hemostasis (platelets, vessel) from secondary hemostasis (coagulation cascade → fibrin). Different drugs hit different stages.
</details>

<details>
<summary><b>Example 3: Track $CO_{2}$ in the blood</b></summary>

**Question:** In a systemic capillary, $CO_{2}$ produced by tissue enters an RBC. Trace the chemistry and name the ion movement that follows.

**Solution:**
1. $CO_{2}$ diffuses into the RBC; **carbonic anhydrase** catalyzes $\\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{CO}_3$. ✓
2. $\\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$. The $H^{+}$ binds hemoglobin (buffering; also drives the Bohr right-shift).
3. $\\text{HCO}_3^-$ exits the RBC in exchange for $Cl^{-}$ entering — the **chloride shift** — so most $CO_{2}$ travels as plasma bicarbonate. ✓
4. In the lungs the whole process reverses, releasing $CO_{2}$ for exhalation.

**Key idea:** ~70% of $CO_{2}$ is carried as bicarbonate; carbonic anhydrase + the chloride shift make this possible.
</details>`
    },
    {
      id: 'ap6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Blood: ~55% plasma + ~45% RBCs (hematocrit) + <1% WBCs/platelets.
- Bohr effect: ↑$CO_{2}/H^{+}/temp/2$,3-BPG → RIGHT shift → $O_{2}$ unloading. HbF is left-shifted.
- $CO_{2}$ travels mostly as bicarbonate (carbonic anhydrase + chloride shift).
- Clotting: vascular spasm → platelet plug → fibrin (cascade; vitamin K for II, VII, IX, X).
- Type O = universal RBC donor; type AB = universal recipient.
- Lymphatics return interstitial fluid, absorb fats (lacteals), and filter pathogens.`
    }
  ]
};
