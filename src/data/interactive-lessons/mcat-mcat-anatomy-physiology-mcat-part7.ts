export const mcatAnatPhysPart7Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap7-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 7 of 7 — Homeostasis & Integration**

### Feedback Control

Homeostasis = maintaining a stable internal set point despite external change, via a **receptor → control center → effector** loop.

| Loop | Action | Examples |
|------|--------|----------|
| **Negative feedback** (most common) | Response **opposes** the stimulus, restoring set point | Glucose ↑ → insulin → glucose ↓; thermoregulation; baroreceptor BP control |
| **Positive feedback** (amplifying, self-limiting) | Response **amplifies** the stimulus to a discrete endpoint | Oxytocin in labor, LH surge before ovulation, clotting cascade, action-potential upstroke |

### Glucose Homeostasis (Integrated Example)

| Hormone | Source | Effect |
|---------|--------|--------|
| **Insulin** | β cells (pancreas) | ↓ blood glucose (uptake, glycogenesis, lipogenesis) |
| **Glucagon** | α cells (pancreas) | ↑ blood glucose (glycogenolysis, gluconeogenesis) |
| **Cortisol / epinephrine** | Adrenal | ↑ glucose (stress/counter-regulatory) |

### Thermoregulation

- **Hypothalamus** is the thermostat. Too hot → vasodilation + sweating; too cold → vasoconstriction + shivering + nonshivering thermogenesis (brown fat).

### Acid–Base Balance

$$\\text{pH} = -\\log[\\text{H}^+] \\qquad \\text{Henderson–Hasselbalch: } \\text{pH} = 6.1 + \\log\\frac{[\\text{HCO}_3^-]}{0.03 \\cdot P_{CO_2}}$$

| Disorder | Primary change | pH | Cause |
|----------|----------------|----|----|
| Respiratory acidosis | ↑ PCO₂ | Low | Hypoventilation (COPD, opioids) |
| Respiratory alkalosis | ↓ PCO₂ | High | Hyperventilation (anxiety, altitude) |
| Metabolic acidosis | ↓ HCO₃⁻ | Low | Ketoacidosis, lactic acid, diarrhea (HCO₃⁻ loss) |
| Metabolic alkalosis | ↑ HCO₃⁻ | High | Vomiting (H⁺ loss), antacids |

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$

### Compensation (Don't Confuse with Correction)

- **Respiratory** problems → **renal** compensation (kidneys retain/excrete HCO₃⁻): slow, hours–days.
- **Metabolic** problems → **respiratory** compensation (change ventilation to adjust PCO₂): fast, minutes–hours.
- Compensation moves pH TOWARD normal but never **overshoots**; the body never fully overcorrects.

### Renal Integration

- Kidneys regulate **volume/BP** (renin–angiotensin–aldosterone), **osmolarity** (ADH), **acid–base** (H⁺/HCO₃⁻ handling), and **RBC mass** (EPO) — the master integrator with the lungs and heart.

### Endocrine vs. Nervous Signaling (Two Coordinating Systems)

| Feature | Nervous | Endocrine |
|---------|---------|-----------|
| Messenger | Neurotransmitter | Hormone (blood) |
| Speed | Fast (ms) | Slow (s–days) |
| Duration | Brief | Prolonged |
| Specificity | Wired (synapse) | Receptor-based (target tissues) |

The **hypothalamus–pituitary axis** links the two, translating neural input into hormonal output.`
    },
    {
      id: 'ap7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Homeostasis & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Arterial blood gas from an uncontrolled type 1 diabetic shows pH 7.25, low HCO₃⁻, and a PCO₂ of 22 mmHg (low; normal ~40). The deep, rapid breathing observed (Kussmaul respirations) is best interpreted as:`,
            options: [`Respiratory compensation for a primary metabolic acidosis — hyperventilation blows off CO₂ to raise pH toward normal`, `A primary respiratory alkalosis causing the low HCO₃⁻`, `Respiratory compensation for a primary metabolic alkalosis`, `An uncompensated respiratory acidosis from CO₂ retention`],
            correctAnswer: 0,
            explanation: `The primary problem is metabolic acidosis (ketoacids consume HCO₃⁻ → low HCO₃⁻, low pH). The LOW PCO₂ shows the lungs are hyperventilating to blow off CO₂, shifting $\\text{CO}_2+\\text{H}_2\\text{O}\\rightleftharpoons\\text{H}^++\\text{HCO}_3^-$ leftward and reducing H⁺ — respiratory COMPENSATION. Option B mislabels a compensatory low PCO₂ as the primary disorder (but then pH would be HIGH, not 7.25). Option D is contradicted by the LOW (not high) PCO₂.`
          },
          {
            question: `A surge of luteinizing hormone (LH) triggers ovulation. Just before ovulation, rising estrogen from the dominant follicle stimulates even MORE LH release. This relationship is an example of:`,
            options: [`Positive feedback — the output (LH/estrogen) amplifies its own stimulus until a discrete event (ovulation) occurs`, `Negative feedback — estrogen always inhibits LH release`, `Feedforward regulation independent of hormone levels`, `Tonic inhibition by the hypothalamus`],
            correctAnswer: 0,
            explanation: `Late in the follicular phase, high estrogen SWITCHES from inhibiting to STIMULATING gonadotropin release, so estrogen and LH amplify each other → the LH surge → ovulation. This self-amplifying loop driving toward a discrete endpoint is the hallmark of POSITIVE feedback (like oxytocin in labor or clotting). Option B describes estrogen's behavior at LOWER concentrations earlier in the cycle, not the pre-ovulatory surge — a classic trap.`
          },
          {
            question: `A patient with a chronic, slowly developing respiratory acidosis from COPD has a near-normal pH despite a persistently elevated PCO₂. The mechanism keeping the pH near normal is primarily:`,
            options: [`Renal compensation — the kidneys retain and generate HCO₃⁻ over days to buffer the retained CO₂`, `Pulmonary compensation — the lungs increase ventilation to lower HCO₃⁻`, `Immediate bicarbonate buffering that fully corrects the pH within minutes`, `Hepatic compensation — the liver synthesizes albumin to bind H⁺`],
            correctAnswer: 0,
            explanation: `A RESPIRATORY disorder is compensated by the KIDNEYS, which retain/regenerate HCO₃⁻ to offset the chronically high PCO₂ — a slow process (days), consistent with "chronic." That elevated HCO₃⁻ buffers the extra H⁺, pulling pH back toward normal. Option B is backwards (the lungs ARE the source of the problem and cannot fix retained CO₂ here). Option C overstates buffering (it blunts but cannot fully correct). Option D is not a recognized acid–base compensation route.`
          }
        ]
      }
    },
    {
      id: 'ap7-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Homeostasis & Integration

<details>
<summary><b>Example 1: Diagnose an acid–base disorder from an ABG</b></summary>

**Question:** A patient vomiting for 2 days has pH 7.52, HCO₃⁻ 34 mEq/L (high), PCO₂ 47 mmHg (slightly high). Identify the primary disorder and the compensation.

**Solution:**
1. pH 7.52 → **alkalosis** (above 7.45).
2. HCO₃⁻ is HIGH and moves pH the same direction as the disturbance → primary **metabolic alkalosis** (vomiting loses gastric H⁺). ✓
3. PCO₂ is slightly HIGH — the lungs **hypoventilate** to retain CO₂ and pull pH back down → **respiratory compensation**. ✓
4. Compensation is partial (pH still alkalotic), as expected — the body never overshoots.

**MCAT note:** Match the primary disorder to whichever value (HCO₃⁻ or PCO₂) explains the pH direction; the other value reveals compensation.
</details>

<details>
<summary><b>Example 2: Trace glucose homeostasis after a meal</b></summary>

**Question:** A person eats a high-carb meal. Walk through the negative-feedback loop that restores normal blood glucose, then state what happens 5 hours later while fasting.

**Solution:**
1. Glucose ↑ → pancreatic **β cells** sense it → release **insulin**.
2. Insulin → tissues take up glucose (GLUT4 in muscle/fat), liver stores **glycogen** → glucose ↓ back to set point → insulin secretion falls. Classic **negative feedback**. ✓
3. Fasting hours later: glucose ↓ → pancreatic **α cells** release **glucagon** → hepatic **glycogenolysis** + **gluconeogenesis** → glucose ↑ to set point. ✓

**Connection:** Insulin and glucagon are antagonistic effectors of ONE negative-feedback system maintaining a glucose set point — a model integration question.
</details>

<details>
<summary><b>Example 3: Predict positive vs. negative feedback</b></summary>

**Question:** Classify each as positive or negative feedback and justify: (a) baroreceptors detect a BP drop and the heart rate rises; (b) cervical stretch during labor triggers oxytocin, causing stronger contractions.

**Solution:**
1. **(a) Negative feedback:** the response (↑ HR → ↑ BP) OPPOSES the stimulus (low BP), restoring the set point. ✓
2. **(b) Positive feedback:** contractions push the baby against the cervix → more stretch → more oxytocin → STRONGER contractions — the response AMPLIFIES the stimulus until birth ends the loop. ✓

**Key idea:** Negative feedback stabilizes around a set point (the body's default); positive feedback drives a process rapidly to completion and is self-limiting.
</details>`
    },
    {
      id: 'ap7-summary',
      type: 'text' as const,
      content: `### Anatomy & Physiology — Complete! ✅

- Negative feedback opposes the stimulus (set-point control); positive feedback amplifies to a discrete endpoint (oxytocin, LH surge, clotting).
- Respiratory disorders → renal compensation (slow); metabolic disorders → respiratory compensation (fast). Compensation never overshoots.
- Match HCO₃⁻ vs. PCO₂ to the pH direction to find the primary acid–base disorder.
- Insulin/glucagon, hypothalamic thermoregulation, and the kidney's RAAS/ADH/EPO roles show how systems integrate.
- Think in systems and connections, not isolated facts.`
    }
  ]
};
