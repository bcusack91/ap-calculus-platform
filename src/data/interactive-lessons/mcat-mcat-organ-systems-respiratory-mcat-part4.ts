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
      id: 'rsp4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Passages

**Problem 1.** A passage reports a drug that selectively weakens the diaphragm by 50% in an awake subject. Predict the effects immediately after, before any compensation plateau.

- **(a)** What happens to tidal volume?
- **(b)** What happens to arterial CO2 and pH?
- **(c)** How does respiratory rate respond, and how well does that rescue ventilation?
- **(d)** Summarize TV, rate, $P_{CO_2}$ and pH together.

**(a) Tidal volume.** A weaker inspiratory pump → **tidal volume falls**.

**(b) CO2 and pH.** Alveolar ventilation $(TV - V_{dead}) \\times f$ falls disproportionately (dead space is fixed per breath) → CO2 accumulates: **respiratory acidosis** (↑$P_{CO_2}$, ↓pH).

**(c) Rate.** Rising CO2 fires central chemoreceptors → **rate increases**, partially offsetting — but rapid shallow breathing pays the dead-space tax more often, limiting the rescue.

**(d) Net pattern.** Low TV, high f, elevated CO2, depressed pH. Skill: always let the reflex respond, then ask whether the compensation is efficient given dead-space arithmetic.

**Problem 2.** A figure plots O2 CONTENT (mL/dL) versus $P_{O_2}$ for two patients: one with 50% anemia and one with 50% carboxyhemoglobin. Both curves plateau at half-normal content.

- **(a)** What does the anemia curve look like, and how is tissue unloading?
- **(b)** What does the carbon monoxide curve look like, and how is tissue unloading?
- **(c)** Which patient is worse off, and what two features should every such figure be graded on?

**(a) Anemia.** Half the Hb, but each Hb behaves normally → a half-height curve with **normal shape and P50**; unloading at the tissues is proportionally normal, and 2,3-BPG helps further.

**(b) Carbon monoxide.** Half the sites are occupied by CO AND the remaining sites are left-shifted → a half-height curve that also hugs its O2 longer (low P50); tissue unloading is doubly crippled.

**(c) Same plateau, different delivery.** CO poisoning is worse than equivalent anemia because its remaining Hb holds O2 tighter (b). Skill: the plateau height reads capacity; the curve's position (P50) reads affinity. Grade figures on both.

**Problem 3.** A passage describes a young nonsmoker with emphysema and a deficiency of alpha-1-antitrypsin, a protease inhibitor.

- **(a)** What does losing alpha-1-antitrypsin do to the alveolar walls?
- **(b)** How does that change compliance and diffusion?
- **(c)** What spirometry pattern results?

**(a) Elastase unchecked.** Alpha-1-antitrypsin normally inhibits neutrophil **elastase**; without it, elastase digests alveolar elastin unchecked (smoking accelerates this by recruiting neutrophils and oxidizing the inhibitor).

**(b) Recoil and area lost.** Elastin loss → ↓ elastic recoil → ↑ compliance; alveolar walls break down and airspaces merge → ↓ diffusion area (Fick).

**(c) Obstructive pattern.** Exhalation depends on recoil, so airflow out is slow and airways collapse: low $FEV_1/FVC$, air trapping (↑RV, ↑TLC).`
    },
    {
      id: 'rsp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Respiratory Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two days after arriving at 4,000 m, a climber's arterial pH has returned toward normal from an initially alkalotic value. The mechanism is:`,
            options: [`Ventilation has returned to sea-level rates, restoring CO2`, `The kidneys have excreted extra bicarbonate to lower pH`, `Increased 2,3-BPG has buffered the excess base in red cells`, `Erythropoietin has raised hematocrit and buffering capacity`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Hypoxia-driven hyperventilation persists (it is the adaptation, not the problem), so low CO2 remains. The kidneys correct pH on the days timescale by dumping HCO3$^-$, rebalancing the ratio of bicarbonate to CO2. 2,3-BPG affects Hb-O2 affinity, not plasma pH, and EPO's effect is on O2 content, weeks later.`
          },
          {
            question: `A patient's spirometry shows FVC of 5.0 L with FEV1 of 2.5 L; total lung capacity is elevated. This pattern indicates:`,
            options: [`Restrictive disease such as pulmonary fibrosis`, `Normal lungs with poor patient effort`, `Obstructive lung disease such as emphysema`, `Neuromuscular weakness of the diaphragm`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `$FEV_1/FVC = 2.5/5.0 = 0.5$, well below ~0.7 — airflow is slow relative to lung size, the obstructive signature. Elevated TLC (air trapping/hyperinflation) confirms it: floppy, recoil-poor airways collapse during forced exhalation. Restrictive disease and muscle weakness SHRINK volumes while keeping the ratio normal or high.`
          },
          {
            question: `During moderate steady-state exercise, a healthy subject's arterial oxygen and carbon dioxide partial pressures are measured. Compared with rest, they are:`,
            options: [`Essentially unchanged, as ventilation tracks metabolism`, `O2 decreased and CO2 increased, driving the hyperpnea`, `Both increased, due to greater alveolar gas exchange`, `O2 increased and CO2 decreased due to hyperventilation`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Exercise ventilation is largely feedforward (motor cortex and limb receptors) and scales with CO2 production, so arterial gases stay near resting values — the mean arterial chemistry never becomes abnormal enough to be the driver. Any hypoxemia or CO2 retention during moderate exercise signals pathology; true hyperventilation (CO2 falling) appears only near exhaustion.`
          }
        ]
      }
    },
    {
      id: 'rsp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Altitude timeline.** Minutes: peripheral-chemoreceptor hyperventilation and alkalosis; days: renal HCO3⁻ loss, ↑2,3-BPG; weeks: EPO.
- **Exercise keeps gases normal.** In moderate exercise, feedforward ventilation tracks metabolism, so arterial O2 and CO2 stay near rest.
- **Obstructive vs. restrictive.** Low $FEV_1/FVC$ with air trapping is obstructive; small volumes with a normal-high ratio is restrictive.
- **Read figures on two axes.** Plateau height reads O2 capacity; the curve's position (P50) reads Hb affinity.

**Common traps**

- **Altitude like exercise.** Acute altitude lowers arterial O2 and CO2; moderate exercise leaves both essentially unchanged.
- **Ventilation fixing altitude pH.** Hyperventilation persists; the kidneys move pH back toward normal over days by excreting bicarbonate.
- **Fibrosis as obstructive.** Fibrotic lungs empty fast from strong recoil, so $FEV_1/FVC$ is normal or high, not low.
- **CO equals anemia.** At equal content loss, CO also left-shifts the curve, so tissue unloading is far worse.`
    }
  ]
};
