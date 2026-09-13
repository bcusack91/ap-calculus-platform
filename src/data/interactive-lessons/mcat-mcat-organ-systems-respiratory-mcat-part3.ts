export const mcatRespSubPart3Data = {
  topicSlug: 'mcat-organ-systems-respiratory-mcat',
  sections: [
    {
      id: 'rsp3-intro',
      type: 'text' as const,
      content: `# Respiratory System

**Part 3 of 4 — Control of Breathing, Acid–Base & Ventilation–Perfusion Matching**

### The Respiratory Control Center

- Rhythm is generated in the **medulla oblongata** (dorsal and ventral respiratory groups); pontine centers fine-tune the pattern. Breathing is automatic but can be voluntarily overridden (cortex) — up to the point where chemoreceptor drive wins (you cannot hold your breath to death).
- Motor output travels via the **phrenic nerve** (C3–C5) to the diaphragm.

### Chemoreceptors — CO2 Is the Boss

| Receptor | Location | Senses | Notes |
|----------|----------|--------|-------|
| **Central** | Medulla | H$^+$ in brain CSF, generated from CO2 that crosses the blood–brain barrier | **Cannot sense O2**; provides the dominant minute-to-minute drive |
| **Peripheral** | Carotid bodies (CN IX), aortic bodies (CN X) | Low arterial $P_{O_2}$ (significant only below ~60 mmHg), plus ↑CO2 and ↑H$^+$ | The ONLY sensors of hypoxemia; also respond to arterial pH directly |

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

- **Upright lung:** gravity sends more blood AND more ventilation to the base, but perfusion increases faster → **V/Q is high at the apex (~3), low at the base (~0.6)**.
- **Shunt** (V/Q → 0): perfused but not ventilated (mucus plug, pneumonia fluid). Blood passes unoxygenated; giving 100% O2 helps little because the gas never reaches those alveoli.
- **Dead space** (V/Q → ∞): ventilated but not perfused (pulmonary embolism). Air moves but no blood collects it.

### Hypoxic Pulmonary Vasoconstriction — The Opposite Rule

- Systemic arterioles **dilate** in hypoxia (feed the starving tissue).
- Pulmonary arterioles **constrict** where alveolar O2 is low — diverting blood AWAY from poorly ventilated alveoli toward well-ventilated ones. This is self-correction of V/Q mismatch.
- Cost: global alveolar hypoxia (altitude, COPD) constricts the whole pulmonary tree → pulmonary hypertension → right-ventricular strain (cor pulmonale).`
    },
    {
      id: 'rsp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Control & V/Q** 🎯`,
      exercise: {
        questions: [
          {
            question: `An anxious student hyperventilates for several minutes and begins to feel lightheaded with tingling fingers. Their arterial blood shows:`,
            options: [`Low CO2 and elevated pH (respiratory alkalosis)`, `High CO2 and low pH (respiratory acidosis)`, `Low O2 and low pH (hypoxemic acidosis)`, `Normal gases — the symptoms are purely psychological`],
            correctAnswer: 0,
            explanation: `Ventilation exceeding metabolic CO2 production blows off CO2; by $CO_2 + H_2O \\rightleftharpoons H^+ + HCO_3^-$, losing CO2 pulls the equilibrium left and H$^+$ falls — respiratory alkalosis. Alkalosis increases calcium binding to albumin, producing the classic tingling; cerebral vasoconstriction from low CO2 causes the lightheadedness. O2 was never the problem — the plateau of the Hb curve keeps saturation near-maximal.`
          },
          {
            question: `A patient's central chemoreceptors are the dominant regulators of resting ventilation. These receptors directly detect:`,
            options: [`Falling arterial oxygen partial pressure`, `Hydrogen ions in CSF, produced from diffused CO2`, `Arterial hydrogen ions crossing into the medulla`, `Stretch of the carotid sinus and aortic arch walls`],
            correctAnswer: 1,
            explanation: `Central chemoreceptors sense CSF pH. Charged H$^+$ crosses the blood-brain barrier poorly, but neutral CO2 diffuses freely and is hydrated (carbonic anhydrase) to carbonic acid in the CSF — so CSF H$^+$ is effectively a CO2 readout. They are blind to O2 (falling arterial oxygen is sensed by the peripheral carotid/aortic bodies), and stretch of the carotid sinus and aortic arch is sensed by BAROreceptors, blood-pressure sensors.`
          },
          {
            question: `A pulmonary embolus completely blocks blood flow to a lung region that remains ventilated. That region now represents:`,
            options: [`A shunt, with V/Q approaching zero`, `Normal V/Q matching maintained by bronchial circulation`, `Alveolar dead space, with V/Q approaching infinity`, `A region of increased gas exchange due to unopposed ventilation`],
            correctAnswer: 2,
            explanation: `Ventilation without perfusion is wasted air — dead space (V/Q → ∞ as Q → 0). No blood arrives to collect the O2, so exchange in that region ceases. A shunt is the mirror image (perfusion without ventilation, V/Q → 0), the trap answer here. Local bronchoconstriction and hypocapnia partially redirect air away, mirroring hypoxic vasoconstriction on the blood side.`
          }
        ]
      }
    },
    {
      id: 'rsp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Control & Matching

<details>
<summary><b>Example 1: Diagnose the acid-base disorder from data</b></summary>

**Question:** A diabetic patient presents with pH 7.25, low bicarbonate, $P_{CO_2}$ = 28 mmHg (normal 40), and deep rapid breathing. Identify the primary disorder and the role of the low CO2.

**Solution:**
1. pH 7.25 = acidemia. Low HCO3$^-$ points to a **metabolic acidosis** (ketoacids consume bicarbonate buffer).
2. If low CO2 were the PRIMARY problem, pH would be HIGH (respiratory alkalosis). It isn't — so the low CO2 is **respiratory compensation**: chemoreceptors sense H$^+$ and drive Kussmaul hyperventilation.
3. Compensation is partial — pH approaches but does not reach 7.4; definitive correction requires treating the ketoacidosis (and renal acid excretion). ✓

**Rule of thumb:** find the abnormality that EXPLAINS the pH direction; the other value moving the "wrong way" for its own disorder is compensation.
</details>

<details>
<summary><b>Example 2: Why 100% oxygen fails in a shunt</b></summary>

**Question:** A lobe filled with pneumonia exudate is perfused but unventilated. Supplemental 100% O2 barely raises the patient's arterial O2 content. Why?

**Solution:**
1. Shunted blood never contacts alveolar gas — its O2 content is fixed at venous levels regardless of inspired O2.
2. Blood from HEALTHY alveoli is already on the flat plateau (~98% saturated); extra O2 adds only a little dissolved gas (Henry's law), not bound O2.
3. Mixing near-saturated blood with fixed venous shunt blood yields low arterial content that O2 therapy cannot fix — the hallmark distinguishing shunt from other causes of hypoxemia. ✓
</details>

<details>
<summary><b>Example 3: Predict the response to breathing 5% CO2</b></summary>

**Question:** In an experiment, a subject breathes air containing 5% CO2 for two minutes. Predict ventilation, arterial pH, and which chemoreceptors respond.

**Solution:**
1. Inspired CO2 raises alveolar and arterial $P_{CO_2}$ → CO2 crosses into CSF → central chemoreceptors fire; peripheral bodies add to the response.
2. Ventilation rises steeply (CO2 is the most potent respiratory stimulus) — but cannot fully clear CO2 that keeps arriving in inspired air.
3. Arterial pH falls slightly (respiratory acidosis) until the exposure ends. ✓

**Contrast:** breathing 10% O2 (hypoxia, normal CO2) stimulates ONLY peripheral chemoreceptors, and only once $P_{O_2}$ nears ~60 mmHg — the resulting hyperventilation then LOWERS CO2, partially braking its own drive.
</details>`
    },
    {
      id: 'rsp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Medulla generates rhythm (phrenic nerve → diaphragm); CO2 (read as CSF H⁺ by central chemoreceptors) is the dominant drive; only peripheral carotid/aortic bodies sense low O2 (< ~60 mmHg).
- Hypoventilation → respiratory acidosis; hyperventilation → respiratory alkalosis; ventilation compensates metabolic disorders (Kussmaul in DKA) but never overshoots.
- V/Q ≈ 0.8 ideally; apex high V/Q, base low V/Q upright. Shunt = perfused/unventilated (O2-refractory hypoxemia); dead space = ventilated/unperfused (embolism).
- Pulmonary vessels CONSTRICT in hypoxia (opposite of systemic) to self-correct V/Q; global hypoxia → pulmonary hypertension → right-heart strain.`
    }
  ]
};
