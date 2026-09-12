export const mcatRespSubPart4Data = {
  topicSlug: 'mcat-organ-systems-respiratory-mcat',
  sections: [
    {
      id: 'rsp4-intro',
      type: 'text' as const,
      content: `# Respiratory System

**Part 4 of 4 — MCAT-Style Integration: Altitude, Exercise, Pathology & Passage Skills**

### High Altitude — A Complete Integration Story

At altitude, total pressure falls, so inspired $P_{O_2}$ falls (same 21% of a smaller number). The response unfolds on three timescales:

1. **Minutes:** low arterial $P_{O_2}$ (< ~60 mmHg) fires **peripheral chemoreceptors** → hyperventilation → CO2 blown off → **respiratory alkalosis** (which initially brakes the hypoxic drive).
2. **Days:** kidneys excrete HCO3$^-$ to normalize pH (renal compensation), unleashing fuller hyperventilation; **2,3-BPG rises**, right-shifting the Hb curve to aid tissue unloading.
3. **Weeks:** hypoxia-driven **EPO** from the kidney raises hematocrit (more O2 content per liter); chronic pulmonary vasoconstriction can produce pulmonary hypertension.

### Exercise vs. Altitude — A Classic Discrimination

| Variable | Vigorous exercise (sea level) | Acute altitude |
|----------|-------------------------------|----------------|
| Ventilation | ↑↑ | ↑ |
| Arterial $P_{O_2}$ | **~unchanged** | ↓ |
| Arterial $P_{CO_2}$ | **~unchanged** (falls only at exhaustion) | ↓ |
| Primary stimulus | Feedforward (motor cortex, joint receptors) + venous chemistry | Peripheral chemoreceptors (hypoxemia) |

Exercise hyperpnea is NOT driven by abnormal arterial gases — ventilation rises in lockstep with metabolism, keeping arterial values constant. A passage showing normal blood gases during heavy exercise is testing exactly this.

### Obstructive vs. Restrictive Disease — Read the Spirometry

$$\\text{Key ratio:} \\quad FEV_1 / FVC$$

($FEV_1$ = volume expelled in the first second of a forced exhale; $FVC$ = total forced vital capacity.)

| Pattern | $FEV_1/FVC$ | Volumes | Examples | Mechanism |
|---------|-------------|---------|----------|-----------|
| **Obstructive** | **↓** (< ~0.7) | TLC and RV often ↑ (air trapping) | Asthma, chronic bronchitis, emphysema | Airflow resistance ↑ or recoil lost — air gets OUT slowly |
| **Restrictive** | Normal or ↑ | TLC, FVC ↓ | Pulmonary fibrosis, neuromuscular weakness, obesity | Stiff lungs or weak pump — air can't get IN |

- **Emphysema logic:** destruction of alveolar walls (often elastase excess — smoking, or alpha-1-antitrypsin deficiency) → loss of elastic recoil → ↑ compliance, floppy airways collapse on exhalation, ↓ surface area for diffusion.
- **Fibrosis logic:** scarred interstitium → ↓ compliance (stiff), thickened membrane → ↓ diffusion; small but fast-emptying lungs (recoil is strong), hence the normal-to-high ratio.

### Passage-Skill Checklist

- **Identify the axis first:** saturation vs. content vs. partial pressure; curves shifted vs. curves depressed (anemia lowers content, not saturation).
- **Timescale sorting:** chemoreflexes (seconds) → renal pH compensation (days) → EPO/hematocrit (weeks).
- **Perturbation propagation:** any change routes through $\\dot{V}_A = (TV - V_{dead}) \\times f$, Fick diffusion, Hb affinity, and V/Q — name the step that broke.
- **Opposite-rules table:** pulmonary vessels constrict in hypoxia (systemic dilate); CO2 mostly travels as HCO3$^-$ (O2 mostly on Hb); central chemoreceptors ignore O2.`
    },
    {
      id: 'rsp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Respiratory Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two days after arriving at 4,000 m, a climber's arterial pH has returned toward normal from an initially alkalotic value. The mechanism is:`,
            options: [`Ventilation has returned to sea-level rates, restoring CO2`, `Renal excretion of bicarbonate has compensated for the respiratory alkalosis`, `Increased 2,3-BPG has buffered the excess base in red cells`, `Erythropoietin has raised hematocrit, increasing blood buffering capacity`],
            correctAnswer: 1,
            explanation: `Hypoxia-driven hyperventilation persists (it is the adaptation, not the problem), so low CO2 remains. The kidneys correct pH on the days timescale by dumping HCO3$^-$, rebalancing the ratio of bicarbonate to CO2. 2,3-BPG affects Hb-O2 affinity, not plasma pH, and EPO's effect is on O2 content, weeks later.`
          },
          {
            question: `A patient's spirometry shows FVC of 5.0 L with FEV1 of 2.5 L; total lung capacity is elevated. This pattern indicates:`,
            options: [`Restrictive disease such as pulmonary fibrosis`, `Normal lungs with poor patient effort`, `Obstructive disease such as emphysema, with air trapping`, `Neuromuscular weakness of the diaphragm`],
            correctAnswer: 2,
            explanation: `$FEV_1/FVC = 2.5/5.0 = 0.5$, well below ~0.7 — airflow is slow relative to lung size, the obstructive signature. Elevated TLC (air trapping/hyperinflation) confirms it: floppy, recoil-poor airways collapse during forced exhalation. Restrictive disease and muscle weakness SHRINK volumes while keeping the ratio normal or high.`
          },
          {
            question: `During moderate steady-state exercise, a healthy subject's arterial oxygen and carbon dioxide partial pressures are measured. Compared with rest, they are:`,
            options: [`Essentially unchanged, because ventilation rises in proportion to metabolic rate`, `O2 markedly decreased and CO2 increased, which is what drives the hyperpnea`, `Both increased due to greater gas exchange`, `O2 increased and CO2 decreased due to hyperventilation`],
            correctAnswer: 0,
            explanation: `Exercise ventilation is largely feedforward (motor cortex and limb receptors) and scales with CO2 production, so arterial gases stay near resting values — the mean arterial chemistry never becomes abnormal enough to be the driver. Marked hypoxemia during exercise signals pathology; true hyperventilation (CO2 falling) appears only near exhaustion.`
          }
        ]
      }
    },
    {
      id: 'rsp4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Passages

<details>
<summary><b>Example 1: Alpha-1-antitrypsin deficiency, mechanistically</b></summary>

**Question:** A passage describes a young nonsmoker with emphysema and a deficiency of alpha-1-antitrypsin, a protease inhibitor. Connect the molecular defect to the spirometry pattern.

**Solution:**
1. Alpha-1-antitrypsin normally inhibits neutrophil **elastase**; without it, elastase digests alveolar elastin unchecked (smoking accelerates this by recruiting neutrophils and oxidizing the inhibitor).
2. Elastin loss → ↓ elastic recoil → ↑ compliance; alveolar walls coalesce → ↓ diffusion area (Fick).
3. Exhalation depends on recoil, so airflow out is slow and airways collapse: **obstructive** pattern — low $FEV_1/FVC$, air trapping (↑RV, ↑TLC). ✓
</details>

<details>
<summary><b>Example 2: Interpret a two-curve figure (anemia vs. CO)</b></summary>

**Question:** A figure plots O2 CONTENT (mL/dL) versus $P_{O_2}$ for: (a) 50% anemia, and (b) 50% carboxyhemoglobin. Both plateau at half-normal content. How do the curves — and the patients — differ?

**Solution:**
1. Anemia: half the Hb, but each Hb behaves normally → half-height curve with **normal shape and P50**; unloading at tissues is proportionally normal, and 2,3-BPG helps further.
2. CO: half the sites occupied by CO AND the remaining sites left-shifted → half-height curve that also hugs its O2 longer (low P50); tissue unloading is doubly crippled.
3. Same content at the plateau, very different delivery — CO poisoning is worse than equivalent anemia. ✓

**Skill:** the plateau height reads capacity; the curve's position (P50) reads affinity. Grade figures on both.
</details>

<details>
<summary><b>Example 3: Predict four variables at once</b></summary>

**Question:** A passage reports a drug that selectively paralyzes the diaphragm by 50% in an awake subject. Predict tidal volume, respiratory rate, arterial CO2, and pH immediately after, before any compensation plateau.

**Solution:**
1. Weaker inspiratory pump → **tidal volume falls**.
2. Alveolar ventilation $(TV - V_{dead}) \\times f$ falls disproportionately (dead space is fixed per breath) → CO2 accumulates: **respiratory acidosis** (↑$P_{CO_2}$, ↓pH).
3. Rising CO2 fires central chemoreceptors → **rate increases**, partially offsetting — but rapid shallow breathing pays the dead-space tax more often, limiting the rescue.
4. Net: low TV, high f, elevated CO2, depressed pH. ✓

**Skill:** always let the reflex respond, then ask whether the compensation is efficient given dead-space arithmetic.
</details>`
    },
    {
      id: 'rsp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Altitude timeline: peripheral chemoreceptor hyperventilation + respiratory alkalosis (minutes) → renal HCO3⁻ dumping + ↑2,3-BPG (days) → EPO/hematocrit (weeks).
- Exercise keeps arterial gases constant (feedforward ventilation); altitude does not — a favorite discrimination.
- $FEV_1/FVC$ low = obstructive (asthma, bronchitis, emphysema; air trapping raises RV/TLC); normal-high ratio with small volumes = restrictive (fibrosis, weakness).
- Emphysema = recoil/area loss (elastase vs. alpha-1-antitrypsin); fibrosis = stiffness + thick membrane.
- Figure skills: plateau height = capacity, P50 = affinity; sort responses by timescale; propagate any perturbation through ventilation → diffusion → transport → V/Q.`
    }
  ]
};
