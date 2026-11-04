export const mcatRenalSubPart4Data = {
  topicSlug: 'mcat-organ-systems-renal-mcat',
  sections: [
    {
      id: 'ren4-intro',
      type: 'text' as const,
      content: `# Renal & Excretory System

**Part 4 of 4 — MCAT-Style Integration: Diuretics as Probes, Pathology & Passage Skills**

### Diuretics — Pharmacology as Applied Transport Physiology

| Class | Blocks | Segment | Consequences |
|-------|--------|---------|--------------|
| Osmotic (mannitol) | Adds unreabsorbable solute | Whole nephron | Water held in the lumen (glucose in diabetes acts the same) |
| Carbonic-anhydrase inhibitor | HCO3$^-$ reclamation | PCT | Mild; HCO3$^-$ loss → metabolic acidosis |
| **Loop diuretic** | Na$^+$-K$^+$-2Cl$^-$ cotransporter | Ascending limb | Strongest; **erases the medullary gradient**; K$^+$ wasting |
| Thiazide | NaCl cotransporter | DCT | Moderate; spares the gradient; K$^+$ wasting |
| K$^+$-sparing (aldosterone antagonists, Na$^+$-channel blockers) | Principal-cell Na$^+$ entry | Collecting duct | Weak; spares K$^+$ |

<!-- yield:low -->
- Thiazides also INCREASE Ca$^{2+}$ reabsorption in the DCT (the opposite of loop diuretics, which lose Ca$^{2+}$).
<!-- /yield -->

- **Method:** every diuretic is a question about one nephron segment — find it on the map, block its transporter, then predict the effects from the transport table.
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

- **Compute filtered load first** ($GFR \\times P_X$), then compare with excretion ($U_X \\times V$): the difference names reabsorption or secretion.
- **Clearance benchmarks:** 0 (glucose) < urea < inulin/creatinine (=GFR) < PAH (=RPF). Position any mystery molecule on this ladder.
- **Hormone questions:** osmolarity problem (ADH axis) or volume problem (RAAS/ANP axis)? Many traps swap them.
- **Knockout/inhibitor experiments:** find the segment, apply the transport table, propagate downstream (later segments see a different delivery).
- **The two-hormone diabetes discrimination:** mellitus = osmotic diuresis with glucosuria; insipidus = pure water diuresis, dilute urine, no glucose.`
    },
    {
      id: 'ren4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — MCAT-Style Passages

**Problem 1.** Substance Q is freely filtered. Plasma Q = 0.1 mg/mL, urine Q = 12 mg/mL, urine flow = 1.5 mL/min, and the simultaneous inulin clearance is 120 mL/min.

- **(a)** What is the clearance of Q?
- **(b)** Is Q net reabsorbed or net secreted?
- **(c)** What is the net tubular transport of Q, in mg/min?
- **(d)** What kind of molecule is handled this way, and what would a clearance near renal plasma flow mean?

**(a) Clearance.** $C_Q = \\dfrac{12 \\times 1.5}{0.1} = \\dfrac{18}{0.1} = 180$ mL/min.

**(b) Verdict.** With $C_Q = 180$ mL/min from (a), above GFR (the 120 mL/min inulin clearance), Q undergoes **net secretion**.

**(c) Net transport.** Filtered load $= 120 \\times 0.1 = 12$ mg/min; excreted $= 12 \\times 1.5 = 18$ mg/min; so $18 - 12 = 6$ mg/min is secreted, matching the verdict in (b).

**(d) Identity.** Q behaves like an organic acid or base handled by PCT secretory pumps (PAH-like). If $C_Q$ approached renal plasma flow (~600 mL/min), extraction would be nearly complete.

**Problem 2.** A patient's LEFT renal artery is severely narrowed. An ACE inhibitor makes the left kidney's GFR plummet, while the right kidney's GFR barely changes.

- **(a)** How does the left kidney maintain its GFR before the drug?
- **(b)** Why does the ACE inhibitor collapse GFR on the stenotic side?
- **(c)** Why is the right kidney barely affected?

**(a) The efferent crutch.** Behind the stenosis, perfusion pressure is chronically low; the left kidney holds its GFR only by Ang II-driven **efferent arteriolar constriction**, damming pressure inside the glomerulus.

**(b) The dam opens.** The ACE inhibitor removes Ang II, so the efferent arteriole relaxes and glomerular pressure and GFR collapse on the stenotic side.

**(c) The normal side.** The right kidney has normal perfusion, does not depend on the efferent crutch, and mildly benefits from lower systemic resistance. The same molecule (Ang II) is a systemic vasoconstrictor AND a local GFR defender: passages love effects that differ by vascular bed.

**Problem 3.** A passage plots filtered, reabsorbed and excreted glucose (mg/min) against plasma glucose concentration (mg/dL).

- **(a)** What happens below the threshold of ~200 mg/dL plasma?
- **(b)** What happens just above the threshold?
- **(c)** What happens once the filtered load passes $T_m$ (~375 mg/min)?
- **(d)** How can you check that the three curves are consistent?

**(a) Below threshold.** Reabsorption equals filtration, so excretion is 0.

**(b) Just above threshold.** Glucose begins to spill into the urine; full saturation comes a bit later because nephrons saturate at different loads.

**(c) Past $T_m$.** The carriers are saturated, so reabsorption is flat and excretion rises parallel to the filtered-load line.

**(d) Ledger check.** At every x-value, excretion = filtration − reabsorption: the curves must obey the master ledger.

<!-- yield:low -->
- **Splay:** the curves bend gradually between threshold and $T_m$ rather than at a sharp corner, because nephrons are heterogeneous (some saturate early) and carrier affinity is finite — glucose starts spilling slightly BEFORE the average $T_m$ is reached.
<!-- /yield -->`
    },
    {
      id: 'ren4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Renal Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient on a powerful loop diuretic becomes unable to produce concentrated urine even when severely dehydrated with maximal ADH levels. The best explanation is:`,
            options: [`The drug blocks V2 ADH receptors on the collecting duct's principal cells`, `The drug prevents aquaporin-2 insertion into the apical membrane`, `Loss of ascending-limb NaCl transport has dissipated the medullary gradient`, `The drug increases GFR so much that fluid moves too quickly to be concentrated`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `ADH only opens water channels — water then leaves the collecting duct ONLY if the surrounding medulla is hypertonic. Loop diuretics block the Na$^+$-K$^+$-2Cl$^-$ cotransporter of the ascending limb that builds that gradient, so even wide-open aquaporins have nowhere to send water; the drug does not act on V2 receptors or aquaporin trafficking. Concentrating ability = ADH x gradient; either factor at zero gives dilute urine.`
          },
          {
            question: `A dehydrated patient has very concentrated urine with almost no urinary sodium, and plasma creatinine is mildly elevated. This picture indicates:`,
            options: [`Pre-renal failure from hypoperfusion of healthy kidneys`, `Acute tubular necrosis with loss of reabsorptive function`, `Nephrogenic diabetes insipidus with ADH resistance`, `Acute glomerulonephritis with red cell casts in urine`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Concentrated, sodium-poor urine is what a WORKING kidney produces under RAAS and ADH drive — the appropriate response to low perfusion, so the kidneys are hypoperfused but intrinsically healthy. The creatinine bump reflects reduced GFR from low pressure, not nephron damage. Tubular necrosis would show dilute, sodium-wasting urine (broken transporters); DI would show dilute urine; and glomerulonephritis would add hematuria and red cell casts.`
          },
          {
            question: `A researcher gives a drug that blocks aldosterone receptors. Compared with a loop diuretic, this drug's effect on potassium is different because:`,
            options: [`It increases potassium secretion by raising distal sodium delivery`, `It blocks principal-cell sodium uptake that drives potassium secretion`, `It stimulates the sodium-potassium ATPase throughout the nephron`, `It acidifies the urine, forcing extra potassium into the tubule`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Potassium secretion in the collecting duct is coupled to sodium reabsorption through principal cells (aldosterone's target). An aldosterone antagonist shuts that exchange down, so potassium is retained — potassium-SPARING. It also reduces H$^+$ secretion, making the urine less acidic, not more. Loop diuretics do the opposite: they deliver a flood of sodium to those same principal cells, accelerating the exchange and wasting K$^+$. Same ion, opposite fates, depending on where in the nephron you act.`
          }
        ]
      }
    },
    {
      id: 'ren4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Diuretics map to segments.** Mannitol: everywhere; CA inhibitors: PCT; loops: ascending limb; thiazides: DCT; K⁺-sparing: collecting duct.
- **Loops erase the gradient.** Blocking the ascending limb's Na⁺-K⁺-2Cl⁻ gives the strongest diuresis and kills concentrating ability.
- **Pre-renal looks healthy.** Hypoperfused kidneys hoard salt and water (concentrated, Na⁺-poor urine); intrinsic damage wastes salt.
- **Filtered load first.** Compare $GFR \\times P_X$ with $U_X V$, then place the clearance on the 0 → urea → GFR → RPF ladder.

**Common traps**

- **All diuretics waste K⁺.** Loops and thiazides do, by flooding principal cells with Na⁺; aldosterone antagonists and Na⁺-channel blockers spare K⁺.
- **ADH blamed for loop dilution.** Loops leave V2 receptors and aquaporins alone; urine stays dilute because the gradient is gone.
- **Nephrotic and nephritic swapped.** Nephrotic means albuminuria and oncotic edema; nephritic means hematuria, hypertension, falling GFR.
- **Osmolarity and volume swapped.** ADH-axis problems are about osmolarity; RAAS/ANP problems are about volume.

<!-- yield:low -->
**Low-yield extras**

- Thiazides increase DCT Ca²⁺ reabsorption (loops lose Ca²⁺); the glucose titration curve's "splay" — a gradual bend before $T_m$ from nephron heterogeneity and finite carrier affinity.
<!-- /yield -->`
    }
  ]
};
