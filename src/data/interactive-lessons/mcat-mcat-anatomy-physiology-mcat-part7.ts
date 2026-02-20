export const mcatAnatPhysPart7Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap7-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 7 of 7 — Homeostasis & Integration**

### Homeostasis

Maintenance of a stable internal environment despite external changes.

**Negative feedback** (most common):
- Response opposes the stimulus
- Example: Blood glucose rises → insulin secreted → glucose drops → insulin stops

**Positive feedback** (amplifying):
- Response AMPLIFIES the stimulus
- Examples: Oxytocin during labor, LH surge, blood clotting cascade

### Acid-Base Balance

$$\\text{pH} = -\\log[\\text{H}^+]$$

| Condition | pH | Cause |
|-----------|----|----|
| Respiratory acidosis | Low | Hypoventilation (CO$_2$ retention) |
| Respiratory alkalosis | High | Hyperventilation (CO$_2$ loss) |
| Metabolic acidosis | Low | Excess acid (diabetic ketoacidosis) or bicarbonate loss |
| Metabolic alkalosis | High | Excess bicarbonate or acid loss (vomiting) |

### Compensation

- Respiratory problems → kidneys compensate (slow, days)
- Metabolic problems → lungs compensate (fast, minutes to hours)

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$`
    },
    {
      id: 'ap7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Homeostasis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient with uncontrolled diabetes develops ketoacidosis (metabolic acidosis). The body compensates by:`,
            options: [`Hyperventilation — blowing off CO$_2$ to raise blood pH (respiratory compensation)`, `Hypoventilation`, `Increasing ketone production`, `Raising insulin levels`],
            correctAnswer: 0,
            explanation: `Metabolic acidosis → lungs compensate by hyperventilating (Kussmaul breathing). Blowing off CO$_2$ shifts the equilibrium left, reducing H$^+$ and raising pH. This is fast but incomplete — treating the underlying cause is essential.`
          }
        ]
      }
    },
    {
      id: 'ap7-summary',
      type: 'text' as const,
      content: `### Anatomy & Physiology — Complete! ✅

Integration is key for the MCAT. Every organ system connects to others — the kidneys regulate blood pressure, the nervous system controls heart rate, hormones link everything. Think in systems and connections, not isolated facts.`
    }
  ]
};
