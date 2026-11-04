export const mcatAcidBaseEqPart3Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab3-intro',
      type: 'text' as const,
      content: `# Acids, Bases & Buffers

**Part 3 of 3 — Buffers: Mechanism, Capacity & Physiological Relevance**

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

### Worked Example — Adding Strong Acid to a Buffer

**Problem 1.** One litre of buffer holds $0.10$ mol acetic acid and $0.10$ mol sodium acetate ($\\text{p}K_a = 4.74$). Then $0.020$ mol HCl is added.

- **(a)** What is the pH before the HCl is added?
- **(b)** How many moles of HA and $\\text{A}^-$ are present after the HCl reacts?
- **(c)** What is the new pH?
- **(d)** What would the same HCl do to one litre of pure water?

**(a) Starting pH.** HA and $\\text{A}^-$ are present in equal amounts, so $\\text{pH} = \\text{p}K_a = 4.74$.

**(b) Neutralization.** The added $\\text{H}^+$ reacts completely with acetate, $\\text{H}^+ + \\text{A}^- \\to \\text{HA}$: $\\text{A}^-$ falls to $0.08$ mol and HA rises to $0.12$ mol.

**(c) New pH.** With $0.08$ mol $\\text{A}^-$ and $0.12$ mol HA from (b), the volume cancels in the ratio:

$$\\text{pH} = 4.74 + \\log\\frac{0.08}{0.12} = 4.74 + (\\log 2 - \\log 3) = 4.74 - 0.18 = 4.56$$

**(d) Without the buffer.** In water $[\\text{H}^+] = 0.020$ M, so $\\text{pH} = 2 - \\log 2 = 1.70$: a drop of more than 5 units from pH 7, against 0.18 units for the buffer.

**Problem 2.** The same $0.020$ mol HCl is added instead to one litre of a weaker buffer: $0.010$ mol acetic acid and $0.010$ mol sodium acetate ($\\text{p}K_a = 4.74$).

- **(a)** How much $\\text{A}^-$ is there to absorb the added $\\text{H}^+$?
- **(b)** What is left in solution after the reaction?
- **(c)** What is the pH, and what does this show about buffer capacity?

**(a) Not enough base.** Only $0.010$ mol $\\text{A}^-$ is present, half the $0.020$ mol $\\text{H}^+$ added.

**(b) Leftovers.** All $0.010$ mol $\\text{A}^-$ becomes HA (now $0.020$ mol in total), and $0.010$ mol $\\text{H}^+$ remains unneutralized.

**(c) Capacity exceeded.** The excess strong acid sets the pH: $[\\text{H}^+] = 0.010$ M, so pH ≈ 2. The ratio was the same 1:1 as in Problem 1, but ten times less buffer ran out; capacity depends on amount.

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

Counting all dissolved $\\text{CO}_2$, the effective $\\text{p}K_a$ is 6.1, so pH 7.40 needs a 20:1 ratio of $\\text{HCO}_3^-$ to $\\text{CO}_2$. That is far outside $\\text{p}K_a \\pm 1$, yet the buffer still works because the lungs keep removing $\\text{CO}_2$ (an open system).

**Breathing and blood pH:** Changing breathing rate alters $\\text{CO}_2$ levels:
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
              `Both [HA] and [$A^{-}$] decrease`,
              `Both [HA] and [$A^{-}$] increase`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\text{OH}^- + \\text{HA} \\to \\text{A}^- + \\text{H}_2\\text{O}$. Adding NaOH converts weak acid to conjugate base: $[\\text{HA}]$ **decreases** and $[\\text{A}^-]$ **increases**, by the same amount. The new ratio = 0.21/0.19, and pH = 4.74 + log(0.21/0.19) ≈ 4.78 — barely changed. The buffer does not make the base vanish; it turns one component into the other.`
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
            yield: 'HIGH',
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
            yield: 'HIGH',
            explanation: `Elevated pH (alkalosis) with low $\\text{PCO}_2$ and normal $[\\text{HCO}_3^-]$ indicates the cause is respiratory: decreased $\\text{CO}_2$ (excess breathing) → **respiratory alkalosis**. If it were metabolic, $[\\text{HCO}_3^-]$ would be elevated.`
          },
          {
            question: `What is buffer capacity MOST dependent on?`,
            options: [
              `The $pK_{a}$ of the weak acid, whatever its concentration`,
              `The absolute concentrations of the weak acid and conjugate base`,
              `The temperature, which sets the acid's $K_a$`,
              `The volume of the solution`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Buffer capacity depends on how many moles of acid and base are available to react. Higher **absolute concentrations** of HA and $A^{-}$ = more capacity. $pK_{a}$ governs the pH at which the buffer is optimal, but capacity (moles that can be absorbed) comes from concentration. Temperature shifts $K_a$ slightly but not how much acid or base is on hand, and a larger volume of the same buffer holds more total moles but resists pH change no better per litre; the concentrations set that.`
          },
          {
            question: `A buffer is prepared with 0.10 M acetic acid and 0.10 M sodium acetate ($\\text{p}K_a = 4.74$). Enough NaOH is added to convert exactly all the acetic acid. The solution now contains only acetate (about 0.20 M). What happens to the buffering?`,
            options: [
              `Buffering is maximized because pure acetate has high $K_b$`,
              `Buffering is lost: no HA is left to absorb more $OH^{-}$`,
              `Buffering continues, now centred one unit above the $\\text{p}K_a$`,
              `The pH falls back to $\\text{p}K_a$ as acetate re-forms acetic acid`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Buffers require both a weak acid and conjugate base. If all HA is consumed, there is no weak acid to absorb additional $OH^{-}$. Any more base added will cause a sharp pH increase — the buffer is **exhausted**. Acetate alone is a weak base with a small $K_b$, not a buffer, so no buffering is centred anywhere; and it does not turn back into acetic acid because no acid is present to protonate it.`
          }
        ]
      }
    },
    {
      id: 'ab3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Each half neutralizes one.** $\\text{A}^-$ consumes added $\\text{H}^+$ and HA consumes added $\\text{OH}^-$, so pH barely moves.
- **Pick pKa near the target.** Choose the pair whose $\\text{p}K_a$ is closest to the target pH; it works within ±1.
- **Capacity comes from amount.** Higher concentrations of HA and $\\text{A}^-$ absorb more acid or base before the pH swings.
- **Blood: lungs and kidneys.** Bicarbonate holds blood at pH 7.35–7.45; lungs set $\\text{CO}_2$, kidneys set $\\text{HCO}_3^-$.

**Common traps**

- **Capacity from pKa.** The $\\text{p}K_a$ sets WHERE a buffer works; how much it absorbs depends on concentration.
- **A buffer fixes the pH.** The pH still shifts a little, and once one component is used up, buffering stops.
- **Hyperventilation as acidosis.** Fast breathing blows off $\\text{CO}_2$ and RAISES pH: respiratory alkalosis.
- **Mixing up the two causes.** A primary $\\text{CO}_2$ change is respiratory; a primary $\\text{HCO}_3^-$ change is metabolic.

## Acids, Bases & Buffers — Complete Topic Summary

**Part 1:** pH, pOH, Kw, strong vs weak acids/bases, pH calculation methods.

**Part 2:** Ka, Kb, pKa, Henderson-Hasselbalch equation, percent dissociation, polyprotic acids, amphiprotic species.

**Part 3:** Buffer mechanism (HA consumes $OH^{-}$; $A^{-}$ consumes $H^{+}$), buffer capacity, buffer range (pKa ± 1), bicarbonate buffer in blood, acid-base disturbances.

**Next up:** the *Titrations, Equilibrium & Solubility* lesson — titration curves, equivalence and half-equivalence points, indicators, equilibrium constants, Le Chatelier's principle and $K_{sp}$.
`
    }
  ]
};
