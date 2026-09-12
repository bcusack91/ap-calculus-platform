export const mcatRenalSubPart2Data = {
  topicSlug: 'mcat-organ-systems-renal-mcat',
  sections: [
    {
      id: 'ren2-intro',
      type: 'text' as const,
      content: `# Renal & Excretory System

**Part 2 of 4 — Tubular Transport & Renal Clearance**

### Segment-by-Segment Transport Map

| Segment | Water permeable? | Key transport | Hormone control |
|---------|------------------|---------------|-----------------|
| **PCT** | Yes (follows solute) | ~65–70% of Na$^+$ and water; **100% of glucose and amino acids** (Na$^+$-cotransport); HCO3$^-$ reclamation; secretes H$^+$, organic acids/bases (drugs, PAH) | None (bulk workhorse) |
| **Descending limb** | Yes — water ONLY | Water exits into salty medulla → filtrate concentrates | None |
| **Ascending limb** | **No** | Na$^+$-K$^+$-2Cl$^-$ cotransporter pumps salt out → filtrate dilutes ("diluting segment") | None |
| **DCT** | Low | NaCl reabsorption; Ca$^{2+}$ reabsorption | PTH (↑Ca$^{2+}$ reabsorption) |
| **Collecting duct** | Only with ADH | Principal cells: Na$^+$ in / K$^+$ out (aldosterone); aquaporins (ADH). Intercalated cells: H$^+$/HCO3$^-$ | Aldosterone, ADH |

- The engine behind nearly all reabsorption is the basolateral **Na$^+$/K$^+$-ATPase**: it keeps intracellular Na$^+$ low, so apical Na$^+$ entry is downhill and can drag glucose/amino acids (secondary active transport, **SGLT**) — water follows osmotically.
- The descending/ascending asymmetry (water-only vs. salt-only) is the anatomical trick behind the countercurrent multiplier (Part 3).

### Transport Maximum ($T_m$) — Carriers Saturate

Carrier-mediated reabsorption has a ceiling. For glucose:

- Below the **threshold** (plasma ~200 mg/dL), every filtered molecule is reclaimed — urine glucose is zero.
- Above it, carriers saturate ($T_m \\approx 375$ mg/min) and the excess **spills into urine** (glucosuria). This is why untreated diabetes mellitus produces sweet, copious urine — unreabsorbed glucose is an **osmotic diuretic**, dragging water out with it (polyuria → thirst).

### Clearance — The Kidney's Report Card

**Clearance** of substance X = the virtual volume of plasma completely scrubbed of X per minute:

$$C_X = \\frac{U_X \\times V}{P_X}$$

($U_X$ = urine concentration, $V$ = urine flow rate, $P_X$ = plasma concentration.)

| Substance | Handling | Clearance means |
|-----------|----------|-----------------|
| **Inulin** | Filtered only — no reabsorption, no secretion | $C_{inulin} = GFR$ (gold standard) |
| **Creatinine** | Filtered, slightly secreted | ≈ GFR (clinical stand-in; slight overestimate) |
| **PAH** | Filtered AND avidly secreted — virtually all removed in one pass | $C_{PAH} \\approx$ **renal plasma flow** |
| Glucose (normal) | Filtered, fully reabsorbed | $C = 0$ |
| Urea | Filtered, ~half reabsorbed | $0 < C < GFR$ |

**The comparison rule:** for any freely filtered substance,
- $C_X < C_{inulin}$ → net **reabsorption**
- $C_X > C_{inulin}$ → net **secretion**
- $C_X = C_{inulin}$ → neither (or exactly balanced)

### Why Creatinine Tracks GFR Inversely

Creatinine is produced by muscle at a constant rate and (approximately) only leaves via filtration. At steady state, production = excretion = $GFR \\times P_{cr}$, so **halving GFR doubles plasma creatinine**. A rising plasma creatinine is the standard clinical flag of falling GFR.`
    },
    {
      id: 'ren2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transport & Clearance** 🎯`,
      exercise: {
        questions: [
          {
            question: `A substance is freely filtered at the glomerulus. Its measured clearance is 250 mL/min, while inulin clearance in the same patient is 125 mL/min. The substance must undergo:`,
            options: [`Net reabsorption in the tubules`, `Net secretion into the tubules`, `Complete reabsorption followed by back-leak`, `Binding to plasma proteins that increases its filtration`],
            correctAnswer: 1,
            explanation: `Inulin clearance defines GFR — the plasma volume cleared by filtration alone. A clearance ABOVE GFR means the kidney removed more of the substance than filtration could deliver; the only route is tubular secretion (like PAH). Reabsorption produces clearance BELOW GFR, and protein binding would REDUCE filtration.`
          },
          {
            question: `The osmolarity of tubular fluid leaving the ascending limb of the loop of Henle, compared with the fluid that entered the descending limb, is:`,
            options: [`Higher, because salt was added in the medulla`, `The same, because the loop only rearranges solutes`, `Lower, because the ascending limb pumps out NaCl while remaining impermeable to water`, `Lower, because the ascending limb reabsorbs large volumes of water`],
            correctAnswer: 2,
            explanation: `The ascending limb is the "diluting segment": its Na$^+$-K$^+$-2Cl$^-$ cotransporters extract salt while its water-tight epithelium traps the water in the tubule, so fluid exits HYPO-osmotic (~100–150 mOsm/L) relative to plasma. The removed salt is what makes the medulla salty — dilution of filtrate and concentration of the interstitium are the same event.`
          },
          {
            question: `A patient with untreated diabetes mellitus has a plasma glucose of 400 mg/dL and produces large volumes of glucose-containing urine. The polyuria occurs because:`,
            options: [`High glucose damages ADH receptors in the collecting duct`, `Glucose directly inhibits the sodium-potassium ATPase in the proximal tubule`, `Insulin deficiency prevents water reabsorption in the loop of Henle`, `Filtered glucose exceeds the transport maximum, and the unreabsorbed glucose holds water in the tubule osmotically`],
            correctAnswer: 3,
            explanation: `At 400 mg/dL the filtered load far exceeds the SGLT carriers' $T_m$ (~375 mg/min); glucose remains in the lumen as an osmotically active solute, opposing water reabsorption along the nephron — an osmotic diuresis. The mechanism is saturation physics, not receptor damage; mannitol diuretics exploit the identical principle deliberately.`
          }
        ]
      }
    },
    {
      id: 'ren2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Clearance Calculations

<details>
<summary><b>Example 1: Compute GFR from inulin data</b></summary>

**Question:** During an inulin infusion: urine inulin = 30 mg/mL, urine flow = 2 mL/min, plasma inulin = 0.5 mg/mL. Find GFR.

**Solution:**
1. $C_{inulin} = \\frac{U \\times V}{P} = \\frac{30 \\times 2}{0.5} = \\frac{60}{0.5} = 120$ mL/min. ✓
2. Because inulin is filtered but neither reabsorbed nor secreted, everything excreted (60 mg/min) must have arrived by filtration — so 120 mL of plasma-worth of inulin is filtered per minute: GFR = 120 mL/min (normal).

**Units check:** mg/mL × mL/min ÷ mg/mL → mL/min. Clearance is a VOLUME per time, not an amount.
</details>

<details>
<summary><b>Example 2: Reabsorbed or secreted? Run the ledger</b></summary>

**Question:** For drug Z (freely filtered, not protein-bound): plasma = 0.2 mg/mL, GFR = 125 mL/min, urinary excretion measured at 15 mg/min. Is Z reabsorbed or secreted, and how much?

**Solution:**
1. Filtered load = $GFR \\times P = 125 \\times 0.2 = 25$ mg/min.
2. Excretion (15) < filtration (25) → **net reabsorption** of $25 - 15 = 10$ mg/min. ✓
3. Equivalent check: $C_Z = 15/0.2 = 75$ mL/min < GFR — same verdict from the clearance side.

**Skill:** filtration−excretion mismatches are the whole game; compute the filtered load FIRST in any renal passage.
</details>

<details>
<summary><b>Example 3: Steady-state creatinine after kidney donation</b></summary>

**Question:** A healthy donor gives one kidney, halving nephron number. Weeks later, plasma creatinine has risen only ~30–40%, not 100%. Explain both the rise and why it is smaller than predicted.

**Solution:**
1. Creatinine production (muscle) is unchanged; at steady state excretion must equal production, and excretion ≈ $GFR \\times P_{cr}$. If GFR halves, $P_{cr}$ must roughly double to restore excretion.
2. But the remaining kidney's nephrons **hyperfiltrate** (afferent dilation, glomerular hypertrophy), recovering GFR to ~70% of original — so $P_{cr}$ settles well below the doubled value. ✓
3. Lesson: plasma creatinine reflects GFR at steady state, and the kidney has functional reserve that blunts the arithmetic.
</details>`
    },
    {
      id: 'ren2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- PCT does the bulk work: ~2/3 of Na⁺/water, all glucose and amino acids (Na⁺-driven SGLT, powered by basolateral Na⁺/K⁺-ATPase), plus secretion of H⁺ and organic acids/bases.
- Loop asymmetry: descending = water only (concentrates); ascending = salt only, water-tight (dilutes filtrate, salts the medulla).
- Carriers saturate: past threshold, glucose spills ($T_m$ ≈ 375 mg/min) and acts as an osmotic diuretic — the physiology of diabetic polyuria.
- $C_X = U_X V / P_X$. Inulin clearance = GFR; creatinine ≈ GFR; PAH clearance ≈ renal plasma flow.
- $C_X$ below GFR → net reabsorption; above → net secretion. Plasma creatinine rises as GFR falls (steady-state inverse).`
    }
  ]
};
