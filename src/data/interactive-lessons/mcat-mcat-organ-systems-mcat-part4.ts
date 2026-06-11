export const mcatOrganSysPart4Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os4-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 4 of 7 — Renal System (Kidneys)**

### Nephron Structure

$$\\text{Glomerulus} \\to \\text{PCT} \\to \\text{Loop of Henle} \\to \\text{DCT} \\to \\text{Collecting Duct}$$

### Key Functions by Segment

| Segment | Function | Key Details |
|---------|----------|-------------|
| Glomerulus | Filtration | Blood pressure drives filtrate into Bowman's capsule |
| PCT | Reabsorption (65-70%) | Glucose, amino acids, Na$^+$, H$_2$O (obligatory) |
| Descending loop | Water reabsorption | Permeable to H$_2$O, NOT solutes |
| Ascending loop | Salt reabsorption | Permeable to Na$^+$/Cl$^-$, NOT water (creates medullary gradient) |
| DCT/Collecting duct | Fine-tuning | Hormonal regulation (ADH, aldosterone) |

### Hormonal Regulation

| Hormone | Source | Effect |
|---------|--------|--------|
| **ADH** (vasopressin) | Posterior pituitary | Inserts aquaporins → H$_2$O reabsorption in collecting duct |
| **Aldosterone** | Adrenal cortex | Na$^+$ reabsorption (+ K$^+$ secretion) in DCT |
| **ANP** | Heart (atria) | Na$^+$ excretion, opposes RAAS |

### GFR

$$\\text{GFR} \\approx 180\\;\\text{L/day}$$

But urine output is only ~1.5 L/day → 99% of filtrate is reabsorbed!

### Net Filtration Pressure (Starling Forces at the Glomerulus)

Filtration at the glomerulus is governed by the balance of hydrostatic and oncotic pressures:

$$P_{net} = (P_{GC} - P_{BS}) - (\\pi_{GC} - \\pi_{BS})$$

- $P_{GC}$ = glomerular capillary hydrostatic pressure (pushes fluid OUT, ~55 mmHg)
- $P_{BS}$ = Bowman's space hydrostatic pressure (pushes IN, ~15 mmHg)
- $\\pi_{GC}$ = glomerular oncotic pressure (pulls IN, ~30 mmHg)
- $\\pi_{BS}$ ≈ 0 (essentially protein-free filtrate)

GFR is regulated by adjusting afferent vs. efferent arteriole tone — this is the single most testable renal concept.

### Renal Clearance & the Filtration Equation

$$C_x = \\frac{U_x \\cdot V}{P_x}$$

where $U_x$ = urine concentration of substance x, $V$ = urine flow rate, $P_x$ = plasma concentration.

- **Inulin** is freely filtered, not reabsorbed or secreted → its clearance EQUALS GFR.
- **PAH** (para-aminohippurate) is filtered AND maximally secreted → its clearance estimates renal plasma flow (RPF).
- If $C_x >$ GFR → net secretion. If $C_x <$ GFR → net reabsorption.

### Countercurrent Multiplier (How Concentrated Urine Is Made)

The thick ascending limb actively pumps Na⁺/K⁺/2Cl⁻ out (impermeable to water), making the medullary interstitium hyperosmotic (up to ~1200 mOsm). The descending limb (water-permeable, solute-impermeable) loses water passively into that gradient. The vasa recta preserve the gradient via countercurrent EXCHANGE. ADH then lets water exit the collecting duct down this gradient → concentrated urine.`
    },
    {
      id: 'os4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Renal System** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient with diabetes insipidus (ADH deficiency) would present with:`,
            options: [`Large volumes of dilute urine (can't reabsorb water in collecting duct)`, `Small volumes of concentrated urine`, `High blood glucose`, `Edema`],
            correctAnswer: 0,
            explanation: `Without ADH, aquaporins aren't inserted in the collecting duct → water can't be reabsorbed → large volumes of very dilute urine (polyuria) + excessive thirst (polydipsia). Not to be confused with diabetes mellitus!`
          },
          {
            question: `Constriction of the EFFERENT arteriole (e.g., by angiotensin II at moderate levels) will, in the short term:`,
            options: [`Increase glomerular capillary pressure and increase GFR`, `Decrease glomerular capillary pressure and decrease GFR`, `Have no effect on GFR`, `Decrease both renal blood flow and GFR proportionally`],
            correctAnswer: 0,
            explanation: `The efferent arteriole is downstream of the glomerulus. Constricting it dams blood in the glomerular capillary, raising $P_{GC}$ → higher net filtration pressure → higher GFR (even though total renal blood flow falls). This is why ACE inhibitors can drop GFR in renal artery stenosis: they remove angiotensin II's efferent constriction.`
          },
          {
            question: `Inulin clearance is 120 mL/min. A drug X has a clearance of 480 mL/min. What can you conclude about drug X?`,
            options: [`It is filtered and net secreted by the tubule`, `It is filtered and net reabsorbed`, `It is neither filtered nor secreted`, `It binds plasma proteins and cannot be filtered`],
            correctAnswer: 0,
            explanation: `Inulin clearance = GFR = 120 mL/min. Because $C_X$ (480) far exceeds GFR, the kidney must be adding X to the tubular fluid beyond filtration → net secretion. Clearance above GFR always implies secretion; below GFR implies reabsorption.`
          }
        ]
      }
    },
    {
      id: 'os4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Renal Physiology

<details>
<summary><b>Example 1: Compute net glomerular filtration pressure</b></summary>

**Question:** Given $P_{GC} = 55$ mmHg, $P_{BS} = 15$ mmHg, $\\pi_{GC} = 28$ mmHg, $\\pi_{BS} = 0$. What is the net filtration pressure, and which direction does fluid move?

**Solution:**
$$P_{net} = (P_{GC} - P_{BS}) - (\\pi_{GC} - \\pi_{BS}) = (55 - 15) - (28 - 0) = 40 - 28 = +12 \\text{ mmHg}$$

Positive → net filtration OUT of the capillary into Bowman's space. ✓

**MCAT twist:** If a patient develops hypoalbuminemia (low plasma protein, e.g., nephrotic syndrome or liver failure), $\\pi_{GC}$ falls. With $\\pi_{GC} = 18$: $P_{net} = 40 - 18 = +22$ mmHg → GFR rises. Conversely, a ureteral stone raises $P_{BS}$ and lowers GFR.
</details>

<details>
<summary><b>Example 2: Calculate renal clearance and classify handling</b></summary>

**Question:** A substance has plasma concentration $P_x = 2$ mg/mL, urine concentration $U_x = 60$ mg/mL, and urine flow rate $V = 1$ mL/min. GFR (by inulin) = 120 mL/min. Is this substance secreted, reabsorbed, or neither?

**Solution:**
$$C_x = \\frac{U_x \\cdot V}{P_x} = \\frac{60 \\times 1}{2} = 30 \\text{ mL/min}$$

Clearance (30) < GFR (120) → the tubule reabsorbs most of the filtered substance. ✓

**Interpretation:** Filtered load = GFR × $P_x$ = 120 × 2 = 240 mg/min. Excreted = $U_x$ × V = 60 mg/min. Reabsorbed = 240 − 60 = 180 mg/min (75% reabsorbed). This is the kind of multi-step data problem the Bio/Biochem section loves.
</details>

<details>
<summary><b>Example 3: Predict the effect of a loop diuretic</b></summary>

**Question:** Furosemide blocks the Na⁺/K⁺/2Cl⁻ cotransporter in the thick ascending limb. Predict its effect on (a) the medullary osmotic gradient and (b) urine volume.

**Solution:**
1. The thick ascending limb normally pumps NaCl into the interstitium to build the medullary gradient.
2. Blocking the cotransporter → less NaCl deposited → the medullary gradient COLLAPSES.
3. Without a steep gradient, the collecting duct cannot extract water even when ADH is present.
4. Result: large volume of dilute urine (powerful diuresis), plus K⁺ wasting (K⁺ no longer recycled). ✓

**High-yield connection:** This is why loop diuretics are the strongest class — they attack the gradient itself, not just one segment's transport.
</details>`
    },
    {
      id: 'os4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Nephron: Glomerulus → PCT → Loop of Henle → DCT → Collecting duct
- Descending loop: water out. Ascending loop: salt out (countercurrent multiplier).
- ADH: water reabsorption. Aldosterone: Na$^+$ reabsorption + K$^+$ secretion.
- 180 L/day filtered but only ~1.5 L urine (99% reabsorbed!)`
    }
  ]
};
