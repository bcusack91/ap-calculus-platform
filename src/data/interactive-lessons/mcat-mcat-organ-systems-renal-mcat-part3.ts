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

- Hypothalamic osmoreceptors trigger posterior-pituitary **ADH (vasopressin)** release when osmolarity rises (or volume falls severely).
- ADH → **V2 receptors** on collecting-duct principal cells → cAMP → **aquaporin-2** inserted into the apical membrane.
- With ADH: water exits into the salty medulla → scant, concentrated urine (up to ~1200 mOsm/L, the gradient's ceiling).
- Without ADH: the duct stays water-tight and the dilute fluid from the ascending limb is excreted as copious dilute urine.
- **Diabetes insipidus:** central (no ADH) vs. **nephrogenic** (kidney unresponsive); exogenous ADH corrects only central DI. Both give dilute, glucose-free polyuria, unlike diabetes mellitus.

### RAAS — Defending Volume and Pressure

$$\\text{Angiotensinogen} \\xrightarrow{\\text{renin}} \\text{Ang I} \\xrightarrow{\\text{ACE (lungs)}} \\text{Ang II}$$

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
      id: 'ren3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Volume, Osmolarity & pH

**Problem 1.** A patient loses 15% of blood volume.

- **(a)** Which signals make the juxtaglomerular (JG) cells release renin?
- **(b)** What does angiotensin II then do?
- **(c)** Which two downstream hormones reclaim salt and water, and what does each reclaim?
- **(d)** What urine does the kidney produce?

**(a) Renin triggers.** Renal perfusion falls, sympathetic nerves fire and distal NaCl delivery drops, so **JG cells release renin**: all three triggers act at once.

**(b) Angiotensin II.** Renin → Ang I → (ACE, lungs) → **Ang II**, which drives systemic vasoconstriction, efferent-arteriolar constriction (GFR defended), thirst, and aldosterone and ADH release.

**(c) Two hormones.** Aldosterone reclaims Na$^+$, and water follows; ADH (also driven by baroreceptor input) reclaims pure water and concentrates the urine.

**(d) The urine.** **Scant, concentrated and low in sodium**: the kidney's signature of volume defense.

**Problem 2.** A patient with severe COPD chronically retains CO2 ($P_{CO_2}$ = 60 mmHg) yet has a near-normal pH.

- **(a)** What disturbance does the CO2 retention cause, and why can't the lungs fix it?
- **(b)** What do the kidneys do over the following days?
- **(c)** How does that restore pH, and what pattern do the lab values show?

**(a) The disturbance.** Chronic high CO2 means high H$^+$: a respiratory acidosis that the lungs, being the problem, cannot fix.

**(b) Renal response.** Over days the kidneys ramp up H$^+$ secretion, trapping it as NH4$^+$ and titratable acid, and **generate new HCO3$^-$**, raising plasma bicarbonate well above normal.

**(c) Compensation.** The elevated HCO3$^-$ offsets the elevated CO2, returning the ratio (and pH) toward normal: compensated respiratory acidosis. Both "abnormal" values moving in the SAME direction is the signature of chronic compensation, not two diseases.

**Problem 3.** Seawater is ~1100 mOsm/L, mostly NaCl. Maximal human urine osmolarity is ~1200 mOsm/L.

- **(a)** What sets the ceiling on urine concentration?
- **(b)** How much of that ceiling is available for salt?
- **(c)** How much urine does excreting the salt in 1 L of seawater take?
- **(d)** Why does drinking seawater dehydrate a person?

**(a) The ceiling.** Urine can be concentrated only as high as the deepest medullary interstitium, ~1200 mOsm/L: a hard limit set by the countercurrent gradient, not by how much ADH is present.

**(b) Room for salt.** Urea and other wastes must still be excreted and fill a large share of that 1200 (urea supplies up to about half of the deep-medullary osmolarity), so only ~600–700 mOsm/L of urine can be NaCl.

**(c) Urine needed.** Clearing the ~1100 mOsm of salt in 1 L of seawater takes $1100/700 \\approx 1.6$ to $1100/600 \\approx 1.8$ L of urine.

**(d) Net balance.** With 1.6–1.8 L of urine from (c) needed per litre drunk, each drink costs more water than it delivers, so the deficit is drawn from body water.`
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
            yield: 'HIGH',
            explanation: `Failure to concentrate despite dehydration shows the ADH SYSTEM is broken (dehydration should maximize ADH). Response to exogenous ADH localizes the lesion upstream: the kidney works, the hormone was missing — CENTRAL DI. Nephrogenic DI would ignore the injection; mellitus produces glucose-laden (osmotic) urine; primary polydipsia concentrates urine normally once water is withheld.`
          },
          {
            question: `Aldosterone increases sodium reabsorption in the collecting duct. Which additional finding is a direct consequence of aldosterone excess?`,
            options: [`High plasma potassium (hyperkalemia)`, `Large increases in plasma osmolarity`, `Decreased circulating blood volume and pressure`, `Low plasma potassium (hypokalemia)`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Principal cells reabsorb Na$^+$ in exchange for secreting K$^+$ (the basolateral Na$^+$/K$^+$-ATPase and luminal electronegativity couple them), so aldosterone excess wastes potassium — hypokalemia, not hyperkalemia (plus mild alkalosis from H$^+$ secretion). Osmolarity barely changes because water follows the reabsorbed salt; volume EXPANDS and blood pressure rises, rather than falling.`
          },
          {
            question: `The vasa recta preserve the medullary osmotic gradient because they:`,
            options: [`Actively pump NaCl back into the medullary interstitium using ATP`, `Are impermeable to water and solutes, so nothing is exchanged`, `Form passive countercurrent hairpins that exchange solute and water`, `Carry blood only through the cortex, bypassing the medulla entirely`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The vasa recta are freely permeable capillaries arranged in countercurrent hairpins: descending blood gains solute and loses water, ascending blood reverses both, so blood exits only slightly hypertonic and the gradient is supplied with O2 without being washed out. The MULTIPLIER (active NaCl transport) is the ascending limb's job; the vasa recta are purely passive EXCHANGERS.`
          }
        ]
      }
    },
    {
      id: 'ren3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Countercurrent multiplier.** A salt-only ascending and water-only descending limb build a 300→1200 mOsm/L medulla.
- **ADH defends osmolarity.** Via V2 receptors it inserts aquaporin-2 in the collecting duct, reclaiming pure water.
- **RAAS defends volume.** Renin (low pressure, low distal NaCl, β1) → Ang II → aldosterone: Na⁺ and water in, K⁺ and H⁺ out.
- **Kidneys fix pH slowly.** Over days they reclaim filtered HCO3⁻ and make new HCO3⁻ via NH4⁺ and titratable acid.

**Common traps**

- **Vasa recta as multipliers.** The vasa recta are passive exchangers; active NaCl transport is the ascending limb's job.
- **Central and nephrogenic DI swapped.** If injected ADH concentrates the urine, the DI is central; nephrogenic DI ignores it.
- **Aldosterone raising potassium.** Aldosterone excess wastes K⁺ (hypokalemia) and expands volume with little osmolarity change.
- **Compensation read as two diseases.** High CO2 with high HCO3⁻ in chronic lung disease is renal compensation, not a second disorder.`
    }
  ]
};
