export const mcatOrganSysPart5Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os5-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 5 of 7 — Endocrine System**

### Major Endocrine Glands & Hormones

| Gland | Hormone(s) | Function |
|-------|-----------|----------|
| **Hypothalamus** | Releasing/inhibiting hormones | Controls anterior pituitary |
| **Anterior pituitary** | GH, TSH, ACTH, FSH, LH, Prolactin | Master gland |
| **Posterior pituitary** | ADH, Oxytocin | Stores/releases hypothalamic hormones |
| **Thyroid** | T3/T4, Calcitonin | Metabolism, lowers Ca$^{2+}$ |
| **Parathyroid** | PTH | Raises Ca$^{2+}$ (bone resorption) |
| **Adrenal cortex** | Cortisol, aldosterone, androgens | Stress, Na$^+$/K$^+$, sex |
| **Adrenal medulla** | Epinephrine, norepinephrine | Fight-or-flight |
| **Pancreas** | Insulin ($\\beta$), Glucagon ($\\alpha$) | Blood glucose regulation |

### Hormone Classes & Signaling (Mechanism)

| Class | Examples | Solubility | Receptor location | Speed/Duration |
|---|---|---|---|---|
| **Peptide** | Insulin, glucagon, ADH, GH | Hydrophilic | Cell-surface (→ $cAMP/IP_{3}$ second messengers) | Fast, short |
| **Steroid** | Cortisol, aldosterone, sex hormones | Lipophilic | Intracellular/nuclear (→ alter gene transcription) | Slow, long |
| **Amino-acid-derived** | T3/T4 (lipophilic), epinephrine (hydrophilic) | Mixed | T3/T4 nuclear; catecholamines surface | Varies |

**Key principle:** lipophilic hormones travel bound to carrier proteins, cross membranes, and change transcription (slow but lasting). Hydrophilic hormones can't cross membranes, so they use surface receptors and **second messengers** (fast but transient).

### The HPA Axis (Three-Level Cascade + Feedback Loop)

$$\\text{Hypothalamus (CRH)} \\to \\text{Ant. pituitary (ACTH)} \\to \\text{Adrenal cortex (cortisol)}$$

Cortisol exerts **negative feedback** on BOTH the hypothalamus (↓CRH) and pituitary (↓ACTH). The thyroid axis (TRH → TSH → T3/T4) works identically. This feedback logic lets you localize disease:

| Pattern | Interpretation |
|---|---|
| ↓ target hormone + ↑ tropic hormone | **Primary** (gland) failure — feedback intact, pituitary screaming |
| ↓ target hormone + ↓ tropic hormone | **Secondary** (pituitary) failure |
| ↑ target hormone + ↑ tropic hormone | Autonomous **tropic** (pituitary) tumor ignoring feedback |
| ↑ target hormone + ↓ tropic hormone | Autonomous **gland** tumor (feedback intact, suppressing pituitary) |

### Blood Glucose Regulation (Antagonistic Feedback)

- **Insulin** (β cells, fed state): ↑ glucose uptake (GLUT4 in muscle/fat), glycogenesis, lipogenesis → **lowers** blood glucose.
- **Glucagon** (α cells, fasting): glycogenolysis + gluconeogenesis → **raises** blood glucose.
- High glucose → insulin; low glucose → glucagon. This push–pull keeps glucose near ~90 mg/dL.

### Calcium Regulation (Antagonistic Feedback)

- **PTH**: ↑ bone resorption, ↑ renal $Ca^{2+}$ reabsorption, ↑ activation of vitamin D (→ ↑ gut $Ca^{2+}$ absorption) → **raises** $Ca^{2+}$.
- **Calcitonin**: inhibits osteoclasts → **lowers** $Ca^{2+}$ (minor in humans).
- Low serum $Ca^{2+}$ → PTH release → restores $Ca^{2+}$ (classic negative-feedback loop).

### Feedback Loops Summary

**Negative feedback** (default): product inhibits its own production (T3/T4 ⊣ TSH; cortisol ⊣ ACTH).
**Positive feedback** (rare): oxytocin in labor (contractions → more oxytocin → stronger contractions); the LH surge that triggers ovulation.`
    },
    {
      id: 'os5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Endocrine** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient has high T3/T4 levels AND high TSH. The most likely cause is:`,
            options: [`A TSH-secreting pituitary tumor (secondary hyperthyroidism)`, `A primary thyroid problem`, `Normal feedback functioning`, `Iodine deficiency`],
            correctAnswer: 0,
            explanation: `Normally, high T3/T4 suppresses TSH (negative feedback). If both are high, the pituitary is autonomously producing TSH and ignoring feedback — a TSH-secreting adenoma. A primary thyroid problem causing high T3/T4 would SUPPRESS TSH (option 2 wrong). Iodine deficiency lowers T3/T4 and raises TSH (option 4 reversed).`
          },
          {
            question: `A researcher gives a patient dexamethasone (a synthetic cortisol analog). In a healthy person, plasma ACTH should:`,
            options: [`Fall, because exogenous glucocorticoid mimics cortisol's negative feedback on the pituitary and hypothalamus`, `Rise, because the body senses extra steroid and compensates`, `Stay unchanged, because dexamethasone does not bind cortisol receptors`, `Fall, but only because dexamethasone destroys ACTH directly`],
            correctAnswer: 0,
            explanation: `Dexamethasone acts at the glucocorticoid receptor and triggers negative feedback on the HPA axis → ↓CRH and ↓ACTH (this is the basis of the dexamethasone suppression test). Option 2 reverses the feedback; option 3 is false (it is a potent agonist); option 4 invents a destruction mechanism — feedback suppression, not degradation, lowers ACTH.`
          },
          {
            question: `Why does a peptide hormone like insulin act within seconds while a steroid like aldosterone takes hours, despite both being potent regulators?`,
            options: [`Insulin uses surface receptors and pre-existing second-messenger pathways, while aldosterone must enter the nucleus and drive new protein synthesis`, `Insulin is lipophilic and crosses membranes faster than aldosterone`, `Aldosterone circulates unbound and is cleared before it can act`, `Insulin alters gene transcription while aldosterone uses cAMP`],
            correctAnswer: 0,
            explanation: `Hydrophilic peptide hormones bind surface receptors and activate existing enzymes/channels via second messengers — fast and transient. Lipophilic steroids cross the membrane, bind nuclear receptors, and change TRANSCRIPTION, which requires time to synthesize new protein — slow and durable. Option 2 swaps the solubilities; option 3 is false (steroids are carrier-bound, extending half-life); option 4 reverses the two mechanisms.`
          }
        ]
      }
    },
    {
      id: 'os5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Endocrine Physiology

<details>
<summary><b>Example 1: Localize a thyroid disorder from lab values</b></summary>

**Question:** A patient is fatigued and cold-intolerant. Labs: low T3/T4, **high** TSH. Where is the lesion?

**Solution:**
1. Low T3/T4 → hypothyroid symptoms.
2. With negative feedback intact, low T3/T4 should DISinhibit TSH → TSH rises. The pituitary is responding correctly. ✓
3. High TSH + low T3/T4 ⇒ the thyroid gland itself cannot respond → **primary hypothyroidism** (e.g., Hashimoto's or iodine deficiency).

**MCAT note:** "Tropic hormone HIGH, target hormone LOW" almost always means the END gland failed (primary). Reverse both ⇒ pituitary failure (secondary).
</details>

<details>
<summary><b>Example 2: Predict the hormonal response to fasting</b></summary>

**Question:** A subject fasts 16 hours. Predict the changes in insulin and glucagon and the metabolic consequence.

**Solution:**
1. Falling blood glucose → β cells secrete **less insulin**, α cells secrete **more glucagon**. ✓
2. High glucagon/insulin ratio → hepatic **glycogenolysis** then **gluconeogenesis**, plus adipose lipolysis → ketone production.
3. Result: blood glucose is defended near normal while the body shifts to fat/ketone fuel.

**Interpretation:** Insulin and glucagon are antagonists; the MCAT cares about the RATIO, not absolute levels. A high insulin/glucagon ratio = storage; low = mobilization.
</details>

<details>
<summary><b>Example 3: Reason through a calcium feedback loop</b></summary>

**Question:** A patient's parathyroid glands are accidentally removed during thyroid surgery. Predict the change in serum $Ca^{2+}$ and the symptom.

**Solution:**
1. No PTH → loss of bone resorption, less renal $Ca^{2+}$ reabsorption, less vitamin-D activation → **serum $Ca^{2+}$ falls** (hypocalcemia). ✓
2. Low $Ca^{2+}$ increases neuromuscular excitability → **tetany** (muscle cramps/spasms, e.g., Chvostek/Trousseau signs).

**High-yield connection:** PTH is the dominant minute-to-minute $Ca^{2+}$ regulator. Without it, calcitonin cannot compensate (calcitonin only lowers $Ca^{2+}$), so hypocalcemia results. Hyperparathyroidism does the opposite: bone pain, kidney stones, "stones, bones, groans."
</details>`
    },
    {
      id: 'os5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Hypothalamus → Anterior pituitary → Target gland (3-level axis with negative feedback)
- Use tropic vs. target hormone pattern to localize disease (primary vs. secondary)
- Peptide hormones: surface receptors + second messengers (fast). Steroids: nuclear receptors + transcription (slow).
- Insulin lowers glucose (fed); glucagon raises it (fasting) — judge by the RATIO.
- PTH raises Ca$^{2+}$; Calcitonin lowers Ca$^{2+}$ (opposite effects)`
    }
  ]
};
