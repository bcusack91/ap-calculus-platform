export const mcatRespSubPart3Data = {
  topicSlug: 'mcat-organ-systems-respiratory-mcat',
  sections: [
    {
      id: 'rsp3-intro',
      type: 'text' as const,
      content: `# Respiratory System

**Part 3 of 4 — Control of Breathing, Acid–Base & Ventilation–Perfusion Matching**

### The Respiratory Control Center

- Rhythm is generated in the **medulla oblongata**; pontine centers fine-tune the pattern. Breathing is automatic but can be voluntarily overridden (cortex) — up to the point where chemoreceptor drive wins (you cannot hold your breath to death).
- Motor output travels via the **phrenic nerve** to the diaphragm.

<!-- yield:low -->
- The medullary rhythm generators are the dorsal and ventral respiratory groups; the phrenic nerve arises from spinal roots C3–C5.
<!-- /yield -->

### Chemoreceptors — CO2 Is the Boss

| Receptor | Location | Senses | Notes |
|----------|----------|--------|-------|
| **Central** | Medulla | H$^+$ in brain CSF, generated from CO2 that crosses the blood–brain barrier | **Cannot sense O2**; provides the dominant minute-to-minute drive |
| **Peripheral** | Carotid bodies, aortic bodies | Low arterial $P_{O_2}$ (significant only below ~60 mmHg), plus ↑CO2 and ↑H$^+$ | The ONLY sensors of hypoxemia; also respond to arterial pH directly |

<!-- yield:low -->
- The carotid bodies signal via the glossopharyngeal nerve (CN IX), the aortic bodies via the vagus (CN X).
<!-- /yield -->

- Blood H$^+$ crosses the blood–brain barrier poorly, but CO2 crosses freely and is hydrated to H$^+$ in the CSF — so central chemoreceptors read arterial CO2 with an H$^+$ electrode.
- Normal drive: a rise in arterial $P_{CO_2}$ of just a few mmHg sharply increases ventilation. Hypoxic drive matters at altitude and in chronic CO2 retainers.

### Ventilation Sets Blood pH — The Respiratory Handle

Because $CO_2 + H_2O \\rightleftharpoons H^+ + HCO_3^-$, ventilation directly controls acid:

| Change | Effect on $P_{CO_2}$ | Effect on pH | Name |
|--------|----------------------|--------------|------|
| Hypoventilation | ↑ | ↓ (acid) | Respiratory acidosis |
| Hyperventilation | ↓ | ↑ (alkaline) | Respiratory alkalosis |

- The system also **compensates** metabolic disorders: metabolic acidosis (e.g., diabetic ketoacidosis, diarrhea) → chemoreceptors drive deep, rapid **Kussmaul breathing** → CO2 falls → pH partially corrected. Metabolic alkalosis → mild hypoventilation.
- Compensation moves pH **toward** normal but never overshoots; full correction of metabolic problems belongs to the kidneys (days).

### Ventilation–Perfusion (V/Q) Matching

Gas exchange needs air AND blood at the same alveolus. $V/Q$ = alveolar ventilation / capillary perfusion (ideal ≈ 0.8 overall).

- **Upright lung:** gravity sends more blood AND more ventilation to the base, but perfusion increases faster → **V/Q is high at the apex, low at the base**.

<!-- yield:low -->
- Typical upright values: V/Q about 3 at the apex and about 0.6 at the base.
<!-- /yield -->

- **Shunt** (V/Q → 0): perfused but not ventilated (mucus plug, pneumonia fluid). Blood passes unoxygenated; giving 100% O2 helps little because the gas never reaches those alveoli.
- **Dead space** (V/Q → ∞): ventilated but not perfused (pulmonary embolism). Air moves but no blood collects it.

### Hypoxic Pulmonary Vasoconstriction — The Opposite Rule

- Systemic arterioles **dilate** in hypoxia (feed the starving tissue).
- Pulmonary arterioles **constrict** where alveolar O2 is low — diverting blood AWAY from poorly ventilated alveoli toward well-ventilated ones. This is self-correction of V/Q mismatch.
- Cost: global alveolar hypoxia (altitude, COPD) constricts the whole pulmonary tree → pulmonary hypertension → right-ventricular strain.

<!-- yield:low -->
- Right-heart failure caused by lung disease is called cor pulmonale.
<!-- /yield -->`
    },
    {
      id: 'rsp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Control & Matching

**Problem 1.** A diabetic patient presents with pH 7.25, low bicarbonate, $P_{CO_2}$ = 28 mmHg (normal 40) and deep, rapid breathing.

- **(a)** Is the patient acidemic or alkalemic, and what is the primary disorder?
- **(b)** What role does the low CO2 play?
- **(c)** Is the pH fully corrected, and what would finish the job?

**(a) Primary disorder.** pH 7.25 = acidemia. Low HCO3$^-$ points to a **metabolic acidosis** (ketoacids consume bicarbonate buffer).

**(b) Respiratory compensation.** If low CO2 were the PRIMARY problem, pH would be HIGH (respiratory alkalosis). It isn't — so the low CO2 is **respiratory compensation**: chemoreceptors sense H$^+$ and drive Kussmaul hyperventilation.

**(c) Partial only.** pH approaches but does not reach 7.4; definitive correction requires treating the ketoacidosis (and renal acid excretion). Rule of thumb: the abnormality that EXPLAINS the pH direction is primary; the other value moving the "wrong way" is compensation.

**Problem 2.** A lobe filled with pneumonia exudate is perfused but unventilated. Supplemental 100% O2 barely raises the patient's arterial O2 content.

- **(a)** What happens to blood passing through the shunted lobe?
- **(b)** What does extra O2 do for blood leaving the healthy alveoli?
- **(c)** Why does the mixed arterial blood stay low in O2?

**(a) Shunted blood.** It never contacts alveolar gas, so its O2 content stays fixed at venous levels regardless of inspired O2.

**(b) Already on the plateau.** Blood from HEALTHY alveoli is already ~98% saturated; extra O2 adds only a little dissolved gas (Henry's law), not bound O2.

**(c) Mixing.** Near-saturated blood mixed with fixed venous shunt blood yields a low arterial content that O2 therapy cannot fix — the hallmark distinguishing shunt from other causes of hypoxemia.

**Problem 3.** In an experiment, a subject breathes air containing 5% CO2 for two minutes.

- **(a)** Which chemoreceptors respond?
- **(b)** What happens to ventilation?
- **(c)** What happens to arterial pH?
- **(d)** How would breathing 10% O2 (hypoxia, normal CO2) differ?

**(a) Mostly central.** Inspired CO2 raises alveolar and arterial $P_{CO_2}$ → CO2 crosses into the CSF → central chemoreceptors carry most of the response; the faster peripheral bodies add to it.

**(b) Ventilation.** It rises steeply (CO2 is the most potent respiratory stimulus) but cannot fully clear CO2 that keeps arriving in inspired air.

**(c) Arterial pH.** It falls slightly (respiratory acidosis) until the exposure ends.

**(d) The hypoxia contrast.** Low O2 stimulates ONLY peripheral chemoreceptors, and only once $P_{O_2}$ nears ~60 mmHg; the resulting hyperventilation then LOWERS CO2, partially braking its own drive.`
    },
    {
      id: 'rsp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Control & V/Q** 🎯`,
      exercise: {
        questions: [
          {
            question: `An anxious student hyperventilates for several minutes and begins to feel lightheaded with tingling fingers. Their arterial blood shows:`,
            options: [`Low CO2 and elevated pH (acute respiratory alkalosis)`, `High CO2 and low pH (respiratory acidosis)`, `Low O2 and low pH (hypoxemic acidosis)`, `Normal gases — the symptoms are purely psychological`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Ventilation exceeding metabolic CO2 production blows off CO2; by $CO_2 + H_2O \\rightleftharpoons H^+ + HCO_3^-$, losing CO2 pulls the equilibrium left and H$^+$ falls — respiratory alkalosis, and an ACUTE one: minutes are far too short for renal compensation, so bicarbonate is still near normal. Alkalosis increases calcium binding to albumin, producing the classic tingling; cerebral vasoconstriction from low CO2 causes the lightheadedness. O2 was never the problem — the plateau of the Hb curve keeps saturation near-maximal.`
          },
          {
            question: `A patient's central chemoreceptors are the dominant regulators of resting ventilation. These receptors directly detect:`,
            options: [`Falling arterial oxygen partial pressure`, `Hydrogen ions in CSF, produced from diffused CO2`, `Arterial hydrogen ions crossing into the medulla`, `Stretch of the carotid sinus and aortic arch walls`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Central chemoreceptors sense CSF pH. Charged H$^+$ crosses the blood-brain barrier poorly, but neutral CO2 diffuses freely and is hydrated (carbonic anhydrase) to carbonic acid in the CSF — so CSF H$^+$ is effectively a CO2 readout. They are blind to O2 (falling arterial oxygen is sensed by the peripheral carotid/aortic bodies), and stretch of the carotid sinus and aortic arch is sensed by BAROreceptors, blood-pressure sensors.`
          },
          {
            question: `A pulmonary embolus completely blocks blood flow to a lung region that remains ventilated. That region now represents:`,
            options: [`A shunt, with V/Q approaching zero`, `Normal V/Q matching maintained by bronchial circulation`, `Alveolar dead space, with V/Q approaching infinity`, `A region of increased gas exchange due to unopposed ventilation`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Ventilation without perfusion is wasted air — dead space (V/Q → ∞ as Q → 0). No blood arrives to collect the O2, so exchange in that region ceases. A shunt is the mirror image (perfusion without ventilation, V/Q → 0), the trap answer here. Local bronchoconstriction and hypocapnia partially redirect air away, mirroring hypoxic vasoconstriction on the blood side.`
          }
        ]
      }
    },
    {
      id: 'rsp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **CO2 drives breathing.** The medulla sets the rhythm; central chemoreceptors read CO2 as CSF H⁺ and dominate resting drive.
- **Only peripheral bodies sense O2.** Carotid and aortic bodies are the only hypoxemia sensors, responding strongly only below ~60 mmHg.
- **Ventilation sets pH.** Hypoventilation causes respiratory acidosis, hyperventilation alkalosis; breathing compensates metabolic ones.
- **V/Q matching.** Ideal ≈ 0.8; upright, the apex is high and the base low; shunt is V/Q → 0, dead space V/Q → ∞.

**Common traps**

- **100% O2 fixing a shunt.** Shunted blood never meets alveolar gas, so extra O2 barely helps; low-V/Q units do respond.
- **Overshooting compensation.** Compensation moves pH toward normal but never past it; the primary disorder sets pH direction.
- **Shunt vs. dead space.** An embolus (air, no blood) is dead space; pneumonia or a mucus plug (blood, no air) is a shunt.
- **Pulmonary vessels dilating.** Pulmonary arterioles CONSTRICT in hypoxia, opposite to systemic ones; global hypoxia raises pulmonary pressure.

<!-- yield:low -->
**Low-yield extras**

- The dorsal and ventral respiratory groups (medullary rhythm generators); phrenic nerve roots C3–C5.
- Carotid bodies signal on CN IX, aortic bodies on CN X.
- Typical upright V/Q values: ~3 at the apex and ~0.6 at the base.
- Cor pulmonale is the term for lung-driven right-heart failure.
<!-- /yield -->`
    }
  ]
};
