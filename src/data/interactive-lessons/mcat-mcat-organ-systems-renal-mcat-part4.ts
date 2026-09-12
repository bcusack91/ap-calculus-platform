export const mcatRenalSubPart4Data = {
  topicSlug: 'mcat-organ-systems-renal-mcat',
  sections: [
    {
      id: 'ren4-intro',
      type: 'text' as const,
      content: `# Renal & Excretory System

**Part 4 of 4 — MCAT-Style Integration: Diuretics as Probes, Pathology & Passage Skills**

### Diuretics — Pharmacology as Applied Transport Physiology

Every diuretic is a question about one nephron segment. Predict its effects from the transport map:

| Drug class | Blocks | Segment | Predictable consequences |
|-----------|--------|---------|--------------------------|
| Osmotic (mannitol) | Nothing — adds unreabsorbable solute | Whole nephron | Water held in lumen everywhere (glucose in diabetes acts identically) |
| Carbonic-anhydrase inhibitor | HCO3$^-$ reclamation | PCT | Mild diuresis + bicarbonate loss → metabolic acidosis |
| **Loop diuretic** | Na$^+$-K$^+$-2Cl$^-$ cotransporter | Ascending limb | Most powerful; **destroys the medullary gradient** (kills concentrating ability); K$^+$ wasting |
| Thiazide | NaCl cotransporter | DCT | Moderate; spares the gradient; ↑Ca$^{2+}$ reabsorption |
| K$^+$-sparing (aldosterone antagonists / Na-channel blockers) | Principal-cell Na$^+$ entry | Collecting duct | Weak alone; prevents the K$^+$ loss the others cause |

- **Downstream logic:** any drug that dumps extra Na$^+$ into the collecting duct increases Na$^+$/K$^+$ exchange there → hypokalemia (loops, thiazides). Blocking that exchange spares K$^+$.
- **Gradient logic:** only agents acting on the ascending limb erase the countercurrent multiplier itself.

### Localizing Kidney Trouble — Pre-renal, Renal, Post-renal

| Category | Problem | Clues |
|----------|---------|-------|
| **Pre-renal** | Not enough blood arriving (hemorrhage, heart failure, dehydration) | Kidney itself healthy: urine concentrated, low urine Na$^+$ (RAAS working hard); reverses with volume |
| **Intrinsic renal** | Nephron damage (glomerulonephritis, tubular necrosis, toxins) | Kidney can't do its jobs: dilute or protein/cell-laden urine, high urine Na$^+$ |
| **Post-renal** | Outflow blocked (stones, prostate) | Back-pressure lowers GFR; often unilateral pain, imaging finding |

The pre-renal signature is the highest-yield: a **healthy kidney responding correctly to hypoperfusion** looks like maximal salt-and-water hoarding.

### Two Syndromes as Starling/Barrier Problems

- **Nephrotic syndrome:** damaged filtration barrier → massive albuminuria → low plasma oncotic pressure → systemic **edema** (the Starling logic from the cardiovascular lesson) + compensatory RAAS activity worsening it.
- **Glomerulonephritis (nephritic):** inflamed glomeruli → hematuria, hypertension, falling GFR — barrier is leaky to cells, filters poorly overall.

### Passage-Skill Checklist

- **Always compute filtered load first** ($GFR \\times P_X$), then compare with excretion ($U_X \\times V$) — the difference names reabsorption or secretion.
- **Clearance benchmarks:** 0 (glucose) < urea < inulin/creatinine (=GFR) < PAH (=RPF). Position any mystery molecule on this ladder.
- **Hormone questions:** classify as osmolarity problem (ADH axis) vs. volume problem (RAAS/ANP axis); many traps swap them.
- **Knockout/inhibitor experiments:** find the segment, apply the transport table, propagate downstream (delivery to later segments changes THEIR behavior).
- **The two-hormone diabetes discrimination:** mellitus = osmotic diuresis with glucosuria; insipidus = pure water diuresis, dilute urine, no glucose.`
    },
    {
      id: 'ren4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Renal Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient on a powerful loop diuretic becomes unable to produce concentrated urine even when severely dehydrated with maximal ADH levels. The best explanation is:`,
            options: [`ADH receptors in the collecting duct are blocked by the drug`, `The drug has destroyed the aquaporin gene response`, `Inhibiting the ascending limb's NaCl transport has dissipated the medullary osmotic gradient that ADH-dependent concentration requires`, `The drug increases GFR so much that fluid moves too quickly to be concentrated`],
            correctAnswer: 2,
            explanation: `ADH only opens water channels — water then leaves the collecting duct ONLY if the surrounding medulla is hypertonic. Loop diuretics block the Na$^+$-K$^+$-2Cl$^-$ cotransporter that builds that gradient, so even wide-open aquaporins have nowhere to send water. Concentrating ability = ADH x gradient; either factor at zero gives dilute urine.`
          },
          {
            question: `A dehydrated patient has very concentrated urine with almost no urinary sodium, and plasma creatinine is mildly elevated. This picture indicates:`,
            options: [`Pre-renal azotemia — hypoperfused but intrinsically healthy kidneys conserving salt and water`, `Acute tubular necrosis with loss of reabsorptive function`, `Nephrogenic diabetes insipidus`, `Post-renal obstruction by a ureteral stone`],
            correctAnswer: 0,
            explanation: `Concentrated, sodium-poor urine is what a WORKING kidney produces under RAAS and ADH drive — the appropriate response to low perfusion. The creatinine bump reflects reduced GFR from low pressure, not nephron damage. Tubular necrosis would show dilute, sodium-wasting urine (broken transporters); DI would show dilute urine; obstruction shows neither signature.`
          },
          {
            question: `A researcher gives a drug that blocks aldosterone receptors. Compared with a loop diuretic, this drug's effect on potassium is different because:`,
            options: [`It increases potassium secretion by raising distal sodium delivery`, `It blocks the principal cells' sodium reabsorption that normally drives potassium secretion, so potassium is retained`, `It stimulates the sodium-potassium ATPase throughout the nephron`, `It acidifies the urine, forcing potassium excretion`],
            correctAnswer: 1,
            explanation: `Potassium secretion in the collecting duct is coupled to sodium reabsorption through principal cells (aldosterone's target). An aldosterone antagonist shuts that exchange down — potassium-SPARING. Loop diuretics do the opposite: they deliver a flood of sodium to those same principal cells, accelerating the exchange and wasting K$^+$. Same ion, opposite fates, depending on where in the nephron you act.`
          }
        ]
      }
    },
    {
      id: 'ren4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — MCAT-Style Passages

<details>
<summary><b>Example 1: Full clearance workup of a mystery molecule</b></summary>

**Question:** Substance Q: plasma 0.1 mg/mL, urine 12 mg/mL, urine flow 1.5 mL/min, simultaneous inulin clearance 120 mL/min. Freely filtered. Characterize Q's renal handling.

**Solution:**
1. $C_Q = \\frac{12 \\times 1.5}{0.1} = \\frac{18}{0.1} = 180$ mL/min.
2. $C_Q (180) > GFR (120)$ → **net secretion**.
3. Quantify: filtered load $= 120 \\times 0.1 = 12$ mg/min; excreted $= 12 \\times 1.5 = 18$ mg/min; secreted $= 18 - 12 = 6$ mg/min. ✓
4. Q behaves like an organic acid/base handled by PCT secretory pumps (PAH-like). If $C_Q$ approached renal plasma flow (~600 mL/min), extraction would be nearly complete.
</details>

<details>
<summary><b>Example 2: The glucose titration curve</b></summary>

**Question:** A passage plots filtered, reabsorbed, and excreted glucose versus plasma concentration. Explain the "threshold," the "$T_m$ plateau," and the rounded "splay" between them.

**Solution:**
1. Below threshold (~200 mg/dL plasma): reabsorption = filtration; excretion = 0.
2. Above $T_m$ (~375 mg/min): carriers saturated; reabsorption is flat, so excretion rises in parallel with filtration (slope = GFR).
3. **Splay:** the rounded transition exists because nephrons are heterogeneous (some saturate early) and carrier affinity is finite — glucose starts spilling slightly BEFORE the average $T_m$ is reached. ✓

**Graph skill:** on such plots, excretion = filtration − reabsorption at every x-value; check the curves obey the master ledger.
</details>

<details>
<summary><b>Example 3: ACE-inhibitor experiment with renal-artery stenosis</b></summary>

**Question:** In a patient whose LEFT renal artery is severely narrowed, an ACE inhibitor causes the left kidney's GFR to plummet while the right kidney's GFR barely changes. Explain.

**Solution:**
1. Behind the stenosis, perfusion pressure is chronically low; the left kidney maintains its GFR only by Ang II-driven **efferent arteriolar constriction** (damming pressure inside the glomerulus).
2. The ACE inhibitor removes Ang II → the efferent dam opens → glomerular pressure and GFR collapse on the stenotic side.
3. The right kidney has normal perfusion, doesn't depend on the efferent crutch, and mildly benefits from lower systemic resistance. ✓

**Integration:** the same molecule (Ang II) is a systemic vasoconstrictor AND a local GFR-defender — passage questions love effects that differ by vascular bed.
</details>`
    },
    {
      id: 'ren4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Diuretics map one-to-one onto segments: mannitol (osmotic, everywhere), CA inhibitors (PCT, acidosis), loops (ascending limb — strongest, erase the gradient), thiazides (DCT, spare Ca²⁺), K⁺-sparing (collecting duct).
- Extra Na⁺ delivered to principal cells = K⁺ wasted; block the exchange = K⁺ spared.
- Pre-renal failure looks like a healthy kidney hoarding salt and water (concentrated, Na⁺-poor urine); intrinsic damage wastes salt and leaks protein/cells; post-renal = obstruction.
- Nephrotic = barrier leak → albuminuria → oncotic edema; nephritic = inflammation → hematuria, hypertension, falling GFR.
- Passage method: filtered load first; place clearances on the 0 → urea → GFR → RPF ladder; classify hormone problems as osmolarity (ADH) vs. volume (RAAS); propagate any blocked transporter downstream.`
    }
  ]
};
