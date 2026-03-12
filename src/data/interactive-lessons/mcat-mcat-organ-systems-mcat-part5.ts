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

### Feedback Loops

**Negative feedback** (most hormones): Product inhibits further production
- Example: T3/T4 inhibits TSH release from pituitary

**Positive feedback** (rare):
- Oxytocin during labor (contractions → more oxytocin → stronger contractions)
- LH surge during ovulation`
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
            explanation: `Normally, high T3/T4 should suppress TSH (negative feedback). If both are high, the pituitary is producing TSH autonomously (ignoring feedback) — most likely a pituitary adenoma.`
          }
        ]
      }
    },
    {
      id: 'os5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Hypothalamus → Anterior pituitary → Target gland (3-level axis)
- Negative feedback is the default; positive feedback is rare
- Insulin: lowers glucose (fed state). Glucagon: raises glucose (fasting).
- PTH raises Ca$^{2+}$; Calcitonin lowers Ca$^{2+}$ (opposite effects)`
    }
  ]
};
