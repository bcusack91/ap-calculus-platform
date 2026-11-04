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
- Above it, glucose begins to **spill into urine** (glucosuria); full carrier saturation ($T_m \\approx 375$ mg/min, reached near ~300 mg/dL plasma) comes a bit later because nephrons saturate at different loads. This is why untreated diabetes mellitus produces sweet, copious urine — unreabsorbed glucose is an **osmotic diuretic**, dragging water out with it (polyuria → thirst).

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
      id: 'ren2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Clearance Calculations

**Problem 1.** During an inulin infusion, urine inulin = 30 mg/mL, urine flow = 2 mL/min and plasma inulin = 0.5 mg/mL.

- **(a)** What is the inulin clearance?
- **(b)** Why does that clearance equal GFR?
- **(c)** What units does a clearance carry?

**(a) Clearance.** $C_{inulin} = \\dfrac{U \\times V}{P} = \\dfrac{30 \\times 2}{0.5} = \\dfrac{60}{0.5} = 120$ mL/min.

**(b) Why it is GFR.** Inulin is filtered but neither reabsorbed nor secreted, so everything excreted (60 mg/min) arrived by filtration: 120 mL of plasma is filtered per minute. GFR = 120 mL/min (normal).

**(c) Units check.** mg/mL × mL/min ÷ mg/mL → mL/min. Clearance is a VOLUME of plasma per time, not an amount of substance.

**Problem 2.** A healthy donor gives one kidney, halving nephron number; muscle creatinine production is unchanged. Weeks later, plasma creatinine has risen only ~30–40%, not 100%.

- **(a)** Why does plasma creatinine rise at all?
- **(b)** Why is the rise smaller than the predicted doubling?
- **(c)** What does this say about plasma creatinine as a marker of GFR?

**(a) Why it rises.** At steady state excretion must equal production, and excretion ≈ $GFR \\times P_{cr}$. If GFR halves, $P_{cr}$ must roughly double to restore excretion.

**(b) Why less than double.** The remaining nephrons **hyperfiltrate** (afferent dilation, glomerular hypertrophy), recovering GFR to ~70–75% of the original, so $P_{cr}$ settles at about 1.3–1.4 times baseline, well below double.

**(c) The lesson.** Plasma creatinine reflects GFR at steady state, inversely, and the kidney has functional reserve that blunts the arithmetic.

**Problem 3.** Drug Z is freely filtered and not protein-bound. Plasma Z = 0.3 mg/mL, GFR = 120 mL/min, and urinary excretion of Z is 24 mg/min.

- **(a)** What is the filtered load of Z?
- **(b)** Is Z reabsorbed or secreted, and how much per minute?
- **(c)** Does the clearance of Z give the same verdict?

**(a) Filtered load.** $GFR \\times P = 120 \\times 0.3 = 36$ mg/min. Compute the filtered load FIRST in any renal passage.

**(b) Net reabsorption.** With 36 mg/min filtered from (a) but only 24 mg/min excreted, Z undergoes **net reabsorption** of $36 - 24 = 12$ mg/min.

**(c) Clearance check.** $C_Z = 24/0.3 = 80$ mL/min, below GFR (120 mL/min): net reabsorption again. Filtration–excretion mismatches are the whole game.`
    },
    {
      id: 'ren2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transport & Clearance** 🎯`,
      exercise: {
        questions: [
          {
            question: `A substance is freely filtered at the glomerulus. Its measured clearance is 250 mL/min, while inulin clearance in the same patient is 125 mL/min. The substance must undergo:`,
            options: [`Net reabsorption from the tubular fluid`, `Net secretion by the tubular epithelium`, `Filtration through a leakier glomerulus`, `Equal secretion and reabsorption`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Inulin clearance defines GFR — the plasma volume cleared by filtration alone. A clearance ABOVE GFR means the kidney removed more of the substance than filtration could deliver; the only route is net tubular secretion (like PAH). Net reabsorption produces clearance BELOW GFR, and secretion balanced by equal reabsorption would leave clearance equal to GFR. A freely filtered substance already enters the filtrate at its plasma concentration, so a leakier glomerulus cannot push its clearance past GFR.`
          },
          {
            question: `The osmolarity of tubular fluid leaving the ascending limb of the loop of Henle, compared with the fluid that entered the descending limb, is:`,
            options: [`Higher, because the descending limb actively secretes NaCl`, `The same, because the loop only rearranges solutes`, `Lower, because the ascending limb removes salt but not water`, `Lower, because the ascending limb reabsorbs large volumes of water`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `The ascending limb is the "diluting segment": its Na$^+$-K$^+$-2Cl$^-$ cotransporters extract salt while its water-tight epithelium traps the water in the tubule, so fluid exits HYPO-osmotic (~100–150 mOsm/L) relative to plasma. The descending limb concentrates fluid by losing water, not by gaining salt; the ascending limb then strips out salt while reabsorbing no water, so the fluid leaves more dilute than it entered the loop. The removed salt is what makes the medulla salty — dilution of filtrate and concentration of the interstitium are the same event.`
          },
          {
            question: `A patient with untreated diabetes mellitus has a plasma glucose of 400 mg/dL and produces large volumes of glucose-containing urine. The polyuria occurs because:`,
            options: [`High glucose desensitizes ADH receptors in the collecting duct`, `Glucose directly inhibits the sodium pump in the proximal tubule`, `Insulin deficiency prevents water reabsorption in the loop of Henle`, `Glucose above the transport maximum stays in the tubule, holding water`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `At 400 mg/dL the filtered load far exceeds the SGLT carriers' $T_m$ (~375 mg/min); the unreabsorbed glucose remains in the lumen as an osmotically active solute, opposing water reabsorption along the nephron — an osmotic diuresis. The mechanism is saturation physics, not ADH-receptor damage, sodium-pump inhibition, or a direct insulin effect on the loop; mannitol diuretics exploit the identical principle deliberately.`
          }
        ]
      }
    },
    {
      id: 'ren2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **PCT does the bulk work.** It reclaims ~2/3 of Na⁺ and water and all glucose and amino acids, and secretes H⁺, drugs and PAH.
- **Loop asymmetry.** The descending limb loses only water; the water-tight ascending limb pumps out salt and dilutes the filtrate.
- **Carriers saturate.** Past the ~200 mg/dL threshold glucose spills ($T_m$ ≈ 375 mg/min) and acts as an osmotic diuretic.
- **Clearance benchmarks.** $C_X = U_X V / P_X$: inulin = GFR, creatinine ≈ GFR, PAH ≈ renal plasma flow, glucose = 0.

**Common traps**

- **Clearance as an amount.** Clearance is a volume of plasma cleared per minute (mL/min), not the mg of substance excreted.
- **Above GFR means reabsorption.** Reversed: clearance above GFR means net secretion; below GFR means net reabsorption.
- **Creatinine moving with GFR.** They move inversely: at steady state, halving GFR doubles plasma creatinine.
- **Diabetic polyuria blamed on ADH.** Unreabsorbed glucose holds water in the tubule; ADH and its receptors still work.`
    }
  ]
};
