export const mcatAcidBaseEqPart3Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab3-intro',
      type: 'text' as const,
      content: `# Acid-Base Chemistry & Equilibrium

**Part 3 of 5 — Buffers: Mechanism, Capacity & Physiological Relevance**

## What Is a Buffer?

A **buffer** is a solution that resists changes in pH when small amounts of strong acid or strong base are added. It consists of:
- A **weak acid** (HA) and its **conjugate base** ($\\text{A}^-$), OR
- A **weak base** (B) and its **conjugate acid** ($\\text{BH}^+$)

## How Buffers Work

When you add strong acid $(H^{+})$ to a buffer:
$$\\text{H}^+ + \\text{A}^- \\to \\text{HA}$$

The added $H^{+}$ is consumed by the conjugate base — pH barely changes.

When you add strong base $(OH^{-})$ to a buffer:
$$\\text{OH}^- + \\text{HA} \\to \\text{A}^- + \\text{H}_2\\text{O}$$

The added $OH^{-}$ is consumed by the weak acid — pH barely changes.

## Buffer Capacity

**Buffer capacity** is the amount of acid or base the buffer can absorb before pH changes significantly.

Buffer capacity is **highest** when:
1. Concentrations of weak acid and conjugate base are large (more moles to react with added $H^{+}/OH^{-}$)
2. The ratio $[\\text{A}^-]/[\\text{HA}]$ is close to 1 (i.e., pH ≈ $pK_{a}$)

A buffer becomes **ineffective** when:
- The ratio $[\\text{A}^-]/[\\text{HA}]$ exceeds 10:1 or drops below 1:10
- This corresponds to the **buffer range: $pK_{a}$ ± 1**

## Choosing a Buffer for a Target pH

**Rule:** Select a weak acid/base pair where $\\text{p}K_a \\approx$ target pH.

| Target pH | Buffer system |
|-----------|--------------|
| ~3.7 | Formic acid / formate ($\\text{p}K_a = 3.74$) |
| ~4.7 | Acetic acid / acetate ($\\text{p}K_a = 4.74$) |
| ~6.4 | $\\text{H}_2\\text{CO}_3$/$\\text{HCO}_3^-$ ($\\text{p}K_{a1} = 6.37$) |
| ~7.4 | $\\text{H}_2\\text{PO}_4^-$/$\\text{HPO}_4^{2-}$ ($\\text{p}K_{a2} = 7.21$) |
| ~9.25 | $\\text{NH}_4^+$/$\\text{NH}_3$ ($\\text{p}K_a = 9.25$) |

## The Bicarbonate Buffer System (Blood)

The most important buffer in human physiology:

$$\\text{CO}_2(\\text{aq}) + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$

Normal blood values: $\\text{pH} = 7.40$; $[\\text{HCO}_3^-] = 24\\text{ mM}$; $P_{\\text{CO}_2} = 40\\text{ mmHg}$

**Respiratory compensation:** Changing breathing rate alters $\\text{CO}_2$ levels:
- Hyperventilation → ↓$\\text{CO}_2$ → ↑pH (alkalosis)
- Hypoventilation → ↑$\\text{CO}_2$ → ↓pH (acidosis)

**Metabolic disturbances:** Change $[\\text{HCO}_3^-]$ directly.

| Condition | pH | $\\text{CO}_2$/$\\text{HCO}_3^-$ | Compensation |
|-----------|----|-----------------------------|-------------|
| Respiratory acidosis | ↓ | ↑$\\text{CO}_2$ | Kidney retains $\\text{HCO}_3^-$ |
| Respiratory alkalosis | ↑ | ↓$\\text{CO}_2$ | Kidney excretes $\\text{HCO}_3^-$ |
| Metabolic acidosis | ↓ | ↓$\\text{HCO}_3^-$ | Hyperventilation |
| Metabolic alkalosis | ↑ | ↑$\\text{HCO}_3^-$ | Hypoventilation |
`
    },
    {
      id: 'ab3-quiz',
      type: 'multiple-choice' as const,
      content: `**Buffers & Physiological Chemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `A buffer contains 0.20 mol acetic acid and 0.20 mol sodium acetate ($pK_{a}$ = 4.74). When 0.010 mol NaOH is added, which component changes and in which direction?`,
            options: [
              `[HA] decreases, [$A^{-}$] increases`,
              `[HA] increases, [$A^{-}$] decreases`,
              `Both decrease`,
              `Neither changes — the buffer neutralizes it completely`
            ],
            correctAnswer: 0,
            explanation: `$\\text{OH}^- + \\text{HA} \\to \\text{A}^- + \\text{H}_2\\text{O}$. Adding NaOH converts weak acid to conjugate base: $[\\text{HA}]$ **decreases** and $[\\text{A}^-]$ **increases**. The new ratio = 0.19/0.21, and pH = 4.74 + log(0.21/0.19) ≈ 4.78 — barely changed.`
          },
          {
            question: `Which buffer is best suited to maintain pH = 9.0?`,
            options: [
              `Acetic acid / acetate ($\\text{p}K_a = 4.74$)`,
              `Formic acid / formate ($\\text{p}K_a = 3.74$)`,
              `Ammonium / ammonia ($\\text{p}K_a = 9.25$)`,
              `Carbonic acid / bicarbonate ($\\text{p}K_{a1} = 6.37$)`
            ],
            correctAnswer: 2,
            explanation: `Choose a buffer with $\\text{p}K_a$ close to target pH. $\\text{p}K_a = 9.25$ (ammonium/ammonia) is closest to pH 9.0. The buffer is effective in the range 9.25 ± 1 = 8.25–10.25.`
          },
          {
            question: `A patient's arterial blood gas shows pH = 7.52, low $\\text{PCO}_2$, and normal $[\\text{HCO}_3^-]$. What is the most likely diagnosis?`,
            options: [
              `Metabolic acidosis`,
              `Metabolic alkalosis`,
              `Respiratory acidosis`,
              `Respiratory alkalosis`
            ],
            correctAnswer: 3,
            explanation: `Elevated pH (alkalosis) with low $\\text{PCO}_2$ and normal $[\\text{HCO}_3^-]$ indicates the cause is respiratory: decreased $\\text{CO}_2$ (excess breathing) → **respiratory alkalosis**. If it were metabolic, $[\\text{HCO}_3^-]$ would be elevated.`
          },
          {
            question: `What is buffer capacity MOST dependent on?`,
            options: [
              `The $pK_{a}$ of the weak acid alone`,
              `The absolute concentrations of the weak acid and conjugate base`,
              `The temperature of the solution`,
              `The volume of the solution`
            ],
            correctAnswer: 1,
            explanation: `Buffer capacity depends on how many moles of acid and base are available to react. Higher **absolute concentrations** of HA and $A^{-}$ = more capacity. $pK_{a}$ governs the pH at which the buffer is optimal, but capacity (moles that can be absorbed) comes from concentration.`
          },
          {
            question: `A buffer is prepared with 0.10 M acetic acid and 0.10 M sodium acetate ($\\text{p}K_a = 4.74$). After adding excess NaOH, all the acetic acid is consumed. The solution now contains only 0.10 M acetate. What happens to the buffering?`,
            options: [
              `Buffering is maximized because pure acetate has high $K_b$`,
              `Buffering is lost because there is no weak acid left to neutralize additional $OH^{-}$`,
              `Buffering continues at a higher pH`,
              `The pH drops sharply because acetate is basic`
            ],
            correctAnswer: 1,
            explanation: `Buffers require both a weak acid and conjugate base. If all HA is consumed, there is no weak acid to absorb additional $OH^{-}$. Any more base added will cause a sharp pH increase — the buffer is **exhausted**.`
          }
        ]
      }
    },
    {
      id: 'ab3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- Buffers resist pH change by consuming added $H^{+}$ $(via A^{-})$ or $OH^{-}$ (via HA)
- HH equation: $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$
- Best buffering: $\\text{pH} \\approx \\text{p}K_a$; effective range: $\\text{p}K_a \\pm 1$
- Buffer capacity increases with higher concentrations of buffer components
- Bicarbonate buffer controls blood pH 7.35-7.45; lungs control $\\text{CO}_2$, kidneys control $\\text{HCO}_3^-$
- Respiratory acidosis/alkalosis: problem with breathing; metabolic: problem with $[\\text{HCO}_3^-]$
`
    }
  ]
};
