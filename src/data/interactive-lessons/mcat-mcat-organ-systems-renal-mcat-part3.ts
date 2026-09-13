export const mcatRenalSubPart3Data = {
  topicSlug: 'mcat-organ-systems-renal-mcat',
  sections: [
    {
      id: 'ren3-intro',
      type: 'text' as const,
      content: `# Renal & Excretory System

**Part 3 of 4 — Concentrating Urine, RAAS/ADH & Acid–Base**

### The Countercurrent Multiplier — Building a Salty Medulla

The medullary interstitium runs from ~300 mOsm/L at the cortex to **~1200 mOsm/L** at the papilla. The loop of Henle builds this gradient by combining its two asymmetric limbs with opposing flow:

1. Ascending limb pumps NaCl into the interstitium (water can't follow) → local interstitium gets saltier, tubular fluid gets more dilute.
2. Salty interstitium pulls water out of the **descending** limb → descending fluid concentrates as it descends.
3. That pre-concentrated fluid now enters the ascending limb, letting the same pump raise the interstitium further — each cycle **multiplies** a small single-step gradient into a large top-to-bottom one.
4. **Urea recycling** deepens it: ADH makes the inner-medullary collecting duct permeable to urea, which diffuses out and contributes up to ~half of the deep-medullary osmolarity.

The **vasa recta** are countercurrent **exchangers** (passive, hairpin capillaries): descending blood picks up salt and loses water; ascending blood does the reverse — supplying the medulla without washing out the gradient.

### ADH — Deciding How Much Water Comes Home

- Hypothalamic osmoreceptors sense plasma osmolarity; posterior pituitary releases **ADH (vasopressin)** when osmolarity rises (or volume falls severely).
- ADH → **V2 receptors** on collecting-duct principal cells → cAMP → **aquaporin-2** channels inserted into the apical membrane.
- With ADH: water exits into the salty medulla → small volume of concentrated urine (up to ~1200 mOsm/L, matching the gradient's ceiling).
- Without ADH: the duct stays water-tight; the dilute fluid leaving the ascending limb is excreted — large volumes of dilute urine.
- **Diabetes insipidus:** central (no ADH made) vs. **nephrogenic** (kidney doesn't respond). Distinguish with exogenous ADH: central corrects, nephrogenic doesn't. Both produce dilute polyuria WITHOUT glucose — unlike diabetes mellitus.

### RAAS — Defending Volume and Pressure

$$\\text{Renin} \\to \\text{Angiotensinogen} \\Rightarrow \\text{Ang I} \\xrightarrow{ACE \\text{ (lungs)}} \\text{Ang II}$$

- **Renin** is released by juxtaglomerular cells when: (1) renal perfusion pressure falls, (2) the macula densa senses low NaCl delivery, (3) sympathetic nerves fire (beta-1).
- Renin cleaves liver-made angiotensinogen to Ang I; **ACE** (pulmonary endothelium) converts Ang I to **angiotensin II**, which:
  - Constricts arterioles systemically (↑TPR) and the **efferent** arteriole preferentially (defends GFR)
  - Stimulates **aldosterone** (adrenal cortex) and **ADH**; triggers thirst
- **Aldosterone** (steroid) → principal cells transcribe more Na$^+$ channels and Na$^+$/K$^+$-ATPase → Na$^+$ reabsorbed (water follows), **K$^+$ and H$^+$ excreted**. Volume ↑ without osmolarity change (salt AND water).
- **Key contrast:** ADH defends **osmolarity** (pure water); aldosterone defends **volume** (salt + water). Hemorrhage recruits both.
- **ANP** (stretched atria) is the counterweight: dilates the afferent arteriole (↑GFR), inhibits renin and Na$^+$ reabsorption → salt and water OUT.

### Renal Acid–Base — The Slow, Complete Corrector

The lungs adjust CO2 in minutes; the kidneys adjust HCO3$^-$ over days but can fully normalize pH:

- **Reclaim** essentially all filtered HCO3$^-$ (PCT, via secreted H$^+$ + carbonic anhydrase).
- **Generate new** HCO3$^-$ while exporting acid: secreted H$^+$ is trapped in urine as titratable acid (phosphate) and **ammonium (NH4$^+$)** — the adaptable, high-capacity route in chronic acidosis.
- In alkalosis: intercalated cells flip roles, secreting HCO3$^-$ instead.
- Compensation pairings: metabolic disorders → respiratory compensation (fast); respiratory disorders → renal compensation (slow but powerful).`
    },
    {
      id: 'ren3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concentration & Hormones** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient produces 10 L/day of very dilute urine. Water deprivation does not concentrate the urine, but injected ADH analog does. The diagnosis is:`,
            options: [`Nephrogenic diabetes insipidus — kidney unresponsive to ADH`, `Central diabetes insipidus — inadequate pituitary ADH release`, `Diabetes mellitus — osmotic diuresis from heavy glucosuria`, `Primary polydipsia — compulsive water drinking, intact ADH`],
            correctAnswer: 1,
            explanation: `Failure to concentrate despite dehydration shows the ADH SYSTEM is broken (dehydration should maximize ADH). Response to exogenous ADH localizes the lesion upstream: the kidney works, the hormone was missing — CENTRAL DI. Nephrogenic DI would ignore the injection; mellitus produces glucose-laden (osmotic) urine; primary polydipsia concentrates urine normally once water is withheld.`
          },
          {
            question: `Aldosterone increases sodium reabsorption in the collecting duct. Which additional finding is a direct consequence of aldosterone excess?`,
            options: [`High plasma potassium (hyperkalemia)`, `Large increases in plasma osmolarity`, `Decreased circulating blood volume`, `Low plasma potassium (hypokalemia)`],
            correctAnswer: 3,
            explanation: `Principal cells reabsorb Na$^+$ in exchange for secreting K$^+$ (the basolateral Na$^+$/K$^+$-ATPase and luminal electronegativity couple them), so aldosterone excess wastes potassium — hypokalemia, not hyperkalemia (plus mild alkalosis from H$^+$ secretion). Osmolarity barely changes because water follows the reabsorbed salt; volume EXPANDS, raising blood pressure.`
          },
          {
            question: `The vasa recta preserve the medullary osmotic gradient because they:`,
            options: [`Actively pump NaCl back into the medullary interstitium using ATP`, `Are impermeable to water and solutes, so nothing is exchanged`, `Form passive countercurrent hairpins that exchange solute and water`, `Carry blood only through the cortex, bypassing the medulla entirely`],
            correctAnswer: 2,
            explanation: `The vasa recta are freely permeable capillaries arranged in countercurrent hairpins: descending blood gains solute and loses water, ascending blood reverses both, so blood exits only slightly hypertonic and the gradient is supplied with O2 without being washed out. The MULTIPLIER (active NaCl transport) is the ascending limb's job; the vasa recta are purely passive EXCHANGERS.`
          }
        ]
      }
    },
    {
      id: 'ren3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Volume, Osmolarity & pH

<details>
<summary><b>Example 1: Hemorrhage — the full RAAS cascade</b></summary>

**Question:** After losing 15% of blood volume, trace the renal hormonal response and its effect on urine.

**Solution:**
1. Renal perfusion falls + sympathetic activation + low distal NaCl → **JG cells release renin** (all three triggers at once).
2. Renin → Ang I → (ACE, lungs) → **Ang II**: systemic vasoconstriction, efferent-arteriolar constriction (GFR defended), thirst, aldosterone, ADH.
3. Aldosterone reclaims Na$^+$ (+ water); ADH (also from baroreceptor input) reclaims pure water and concentrates urine.
4. Urine output: **scant and concentrated, low in sodium** — the kidney's signature of volume defense. ✓
</details>

<details>
<summary><b>Example 2: Seawater vs. fresh water — an osmolarity ceiling problem</b></summary>

**Question:** Why does drinking seawater (~2000 mOsm/L) dehydrate a human, given maximal urine osmolarity of ~1200 mOsm/L?

**Solution:**
1. The kidney can concentrate urine only as high as the deepest medullary interstitium — ~1200 mOsm/L.
2. Excreting the salt in 1 L of 2000 mOsm seawater requires MORE than 1 L of maximally concentrated urine (2000/1200 ≈ 1.7 L of urine per liter drunk).
3. Net water balance is negative — each drink costs more water than it delivers, drawing on body water. ✓

**Concept tested:** urine concentration has a hard ceiling set by the countercurrent gradient, not by ADH enthusiasm.
</details>

<details>
<summary><b>Example 3: Chronic respiratory acidosis — renal compensation</b></summary>

**Question:** A patient with severe COPD chronically retains CO2 ($P_{CO_2}$ = 60 mmHg) yet has near-normal pH. What did the kidneys do?

**Solution:**
1. Chronic high CO2 → high H$^+$ (respiratory acidosis) that the lungs, being the problem, cannot fix.
2. Over days, the kidneys ramp up H$^+$ secretion — trapping it as NH4$^+$ and titratable acid — and **generate new HCO3$^-$**, raising plasma bicarbonate well above normal.
3. The elevated HCO3$^-$ offsets the elevated CO2, returning the ratio (and pH) toward normal: compensated respiratory acidosis — high CO2 AND high bicarbonate together. ✓

**Data-reading skill:** both "abnormal" values moving in the SAME direction is the signature of chronic compensation, not two diseases.
</details>`
    },
    {
      id: 'ren3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Countercurrent multiplication (salt-only ascending limb + water-only descending limb + opposing flow) builds the 300→1200 mOsm medullary gradient; urea recycling deepens it; vasa recta exchange passively without washout.
- ADH (posterior pituitary, V2 → aquaporin-2) reclaims pure water → concentrated urine; defends OSMOLARITY. Central vs. nephrogenic DI split by response to exogenous ADH.
- RAAS: renin (low pressure, low distal NaCl, sympathetic) → Ang II (vasoconstriction, efferent constriction, thirst) → aldosterone (Na⁺ in, K⁺/H⁺ out); defends VOLUME. ANP opposes it.
- Kidneys correct pH slowly but completely: reclaim filtered HCO3⁻, mint new HCO3⁻ via NH4⁺ and titratable acid; chronic respiratory disorders show matching bicarbonate shifts.`
    }
  ]
};
