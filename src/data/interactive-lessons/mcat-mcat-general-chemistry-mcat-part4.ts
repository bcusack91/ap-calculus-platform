export const mcatGenChemPart4Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc4-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 4 of 7 — Acids, Bases, pH & Buffers (ULTRA HIGH YIELD)**

Acid-base chemistry appears in nearly every MCAT section — chemistry passages, biochemistry passages, and physiology contexts (blood pH, enzyme activity, kidney function). This is one of the most tested areas on the exam.
`
    },
    {
      id: 'gc4-theories',
      type: 'text' as const,
      content: `## Acid-Base Theories

| Theory | Acid Definition | Base Definition | Scope |
|--------|----------------|----------------|-------|
| Arrhenius | Produces $\\text{H}^+$ in water | Produces $\\text{OH}^-$ in water | Aqueous only |
| Brønsted-Lowry | Donates $\\text{H}^+$ (proton donor) | Accepts $\\text{H}^+$ (proton acceptor) | Any solvent |
| Lewis | Accepts electron pair | Donates electron pair | Broadest definition |

**Conjugate pairs:** When a Brønsted acid donates $H^{+}$, it forms its conjugate base:

$$\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$$

- Stronger acid → weaker conjugate base
- Weaker acid → stronger conjugate base

**Lewis acids/bases (MCAT favorites):**
- $\\text{BF}_3$, $\\text{AlCl}_3$, metal cations, $\\text{H}^+$ are Lewis acids (accept $e^{-}$ pair)
- $\\text{NH}_3$, $\\text{OH}^-$, $\\text{Cl}^-$, water are Lewis bases (donate $e^{-}$ pair)

### Strong vs. Weak

**6 Strong Acids** (memorize — complete dissociation): HCl, HBr, HI, $\\text{HNO}_3$, $\\text{HClO}_4$, $\\text{H}_2\\text{SO}_4$ (first proton)

**Strong Bases** (complete dissociation): LiOH, NaOH, KOH, $\\text{Ba(OH)}_2$, $\\text{Ca(OH)}_2$

Everything else is weak (partial dissociation, governed by $K_a$ or $K_b$).
`
    },
    {
      id: 'gc4-ph-calculations',
      type: 'text' as const,
      content: `## pH Calculations

### Fundamental Relationships

$$\\text{pH} = -\\log[\\text{H}^+] \\qquad \\text{pOH} = -\\log[\\text{OH}^-]$$

$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at 25°C})$$

$$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\quad (\\text{at 25°C})$$

$$K_a \\times K_b = K_w \\quad (\\text{for conjugate pair})$$

### Strong Acid/Base pH (Direct)

For 0.010 M HCl (strong acid): $[\\text{H}^+] = 0.010$ M → $\\text{pH} = 2.0$

For 0.010 M NaOH (strong base): $[\\text{OH}^-] = 0.010$ M → $\\text{pOH} = 2.0$ → $\\text{pH} = 12.0$

### Weak Acid pH (Approximate Formula)

For weak acid HA with $K_a$ at concentration $C$ (valid when $C \\gg K_a$):

$$[\\text{H}^+] \\approx \\sqrt{K_a \\cdot C}$$

$$\\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C)$$

**Example:** 0.10 M acetic acid ($K_a = 1.8 \\times 10^{-5}$):
$$[\\text{H}^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.10} = \\sqrt{1.8 \\times 10^{-6}} \\approx 1.34 \\times 10^{-3} \\text{ M}$$
$$\\text{pH} \\approx 2.87$$

### Henderson-Hasselbalch Equation (Buffer pH)

$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$$

- At **half-equivalence point**: $[\\text{A}^-] = [\\text{HA}]$ → $\\text{pH} = \\text{p}K_a$ (most tested point!)
- Buffers resist pH change best when $\\text{pH} \\approx \\text{p}K_a \\pm 1$
`
    },
    {
      id: 'gc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**pH Calculations & Acid-Base Theory** 🎯`,
      exercise: {
        questions: [
          {
            question: `A weak acid has $K_a = 1.0 \\times 10^{-5}$. What is the approximate pH of a 0.10 M solution?`,
            options: [
              `3.0`,
              `5.0`,
              `2.0`,
              `4.0`
            ],
            correctAnswer: 0,
            explanation: `$[\\text{H}^+] = \\sqrt{K_a \\cdot C} = \\sqrt{10^{-5} \\times 0.1} = \\sqrt{10^{-6}} = 10^{-3}$ M → pH = 3.0. This shortcut (valid when $C \\gg K_a$) is extremely high-yield.`
          },
          {
            question: `An acetic acid buffer ($\\text{p}K_a = 4.76$) contains 0.20 M $\\text{CH}_3\\text{COOH}$ and 0.60 M $\\text{CH}_3\\text{COO}^-$. The pH is:`,
            options: [
              `5.24`,
              `4.76`,
              `4.28`,
              `5.76`
            ],
            correctAnswer: 0,
            explanation: `pH = $4.76 + \\log(0.60/0.20) = 4.76 + \\log 3 \\approx 4.76 + 0.48 = 5.24$. The ratio > 1 means more conjugate base → pH > p$K_a$.`
          },
          {
            question: `What is $K_b$ for the acetate ion ($\\text{CH}_3\\text{COO}^-$) if $K_a$ for acetic acid = $1.8 \\times 10^{-5}$?`,
            options: [
              `$5.6 \\times 10^{-10}$`,
              `$1.8 \\times 10^{-5}$`,
              `$1.8 \\times 10^{-9}$`,
              `$5.6 \\times 10^{-14}$`
            ],
            correctAnswer: 0,
            explanation: `$K_a \\times K_b = K_w$ → $K_b = 1.0 \\times 10^{-14} / 1.8 \\times 10^{-5} = 5.6 \\times 10^{-10}$. The weak conjugate base of a moderately strong weak acid.`
          },
          {
            question: `A solution has pOH = 3.40 at 25°C. Its pH is:`,
            options: [
              `10.60`,
              `3.40`,
              `7.00`,
              `4.0`
            ],
            correctAnswer: 0,
            explanation: `pH + pOH = 14 (at 25°C). pH = 14 - 3.40 = 10.60. This is a basic solution.`
          },
          {
            question: `$\\text{BF}_3$ acts as a Lewis acid in the reaction $\\text{BF}_3 + \\text{NH}_3 \\to \\text{F}_3\\text{B-NH}_3$. Why?`,
            options: [
              `It donates a proton to $\\text{NH}_3$`,
              `It accepts the lone pair from $\\text{NH}_3$ into its empty p orbital`,
              `It produces $\\text{OH}^-$ in water`,
              `It donates electrons to form the bond`
            ],
            correctAnswer: 1,
            explanation: `Lewis acids accept electron pairs. $\\text{BF}_3$ has an incomplete octet — its empty p orbital accepts the lone pair from $\\text{NH}_3$ (a Lewis base). No proton transfer occurs.`
          }
        ]
      }
    },
    {
      id: 'gc4-titrations',
      type: 'text' as const,
      content: `## Titration Curves & Buffer Behavior

### Strong Acid + Strong Base

- Initial pH determined by strong acid concentration.
- At equivalence point: pH = 7.0 (salt of strong acid/strong base is neutral).
- Sharp pH jump at equivalence point.

### Weak Acid + Strong Base (Most Common MCAT Type)

Key points on the curve:

| Point | pH Relationship | Significance |
|-------|----------------|--------------|
| Initial | pH calculated from $K_a$, $[\\text{HA}]$ | Higher than strong acid of same concentration |
| Half-equivalence | pH = p$K_a$ | Equal amounts HA and $A^{-}$ — maximum buffer capacity |
| Equivalence | pH > 7 | $A^{-}$ hydrolyzes water: $\\text{A}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HA} + \\text{OH}^-$ |
| Past equivalence | pH determined by excess base | |

### Buffer Capacity

A buffer resists pH change by:
- **Adding acid $(H^{+})$:** consumed by conjugate base → $\\text{A}^- + \\text{H}^+ \\to \\text{HA}$
- **Adding base $(OH^{-})$:** consumed by weak acid → $\\text{HA} + \\text{OH}^- \\to \\text{A}^- + \\text{H}_2\\text{O}$

**Maximum capacity** is at pH = p$K_a$ (equal concentrations of HA and $A^{-}$).

### Physiological Buffer: Bicarbonate

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{HCO}_3^- + \\text{H}^+$$

Normal blood pH = 7.40. $\\text{p}K_a$ of $\\text{H}_2\\text{CO}_3$ ≈ 6.1.

Henderson-Hasselbalch: $7.40 = 6.1 + \\log([\\text{HCO}_3^-]/[\\text{H}_2\\text{CO}_3])$

Ratio ≈ 20:1 ($HCO_{3}^{-}$ : $H_{2}CO_{3}$), maintained by lungs and kidneys.
`
    },
    {
      id: 'gc4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Titrations & Buffers** 🎯`,
      exercise: {
        questions: [
          {
            question: `During titration of a weak acid with a strong base, the pH at the equivalence point is:`,
            options: [
              `Greater than 7 (conjugate base hydrolyzes water)`,
              `Equal to 7 (neutral solution)`,
              `Less than 7 (acid is in excess)`,
              `Equal to p$K_a$`
            ],
            correctAnswer: 0,
            explanation: `At the equivalence point, all acid has been converted to its conjugate base $\\text{A}^-$. This base undergoes hydrolysis: $\\text{A}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HA} + \\text{OH}^-$, producing a basic solution.`
          },
          {
            question: `A buffer contains acetic acid ($\\text{p}K_a = 4.76$) and sodium acetate. To shift the pH from 4.76 to 5.76, the ratio $[\\text{A}^-]/[\\text{HA}]$ must be:`,
            options: [
              `10:1`,
              `1:10`,
              `1:1`,
              `100:1`
            ],
            correctAnswer: 0,
            explanation: `pH = p$K_a + \\log([A^-]/[HA])$. $5.76 = 4.76 + \\log(\\text{ratio})$ → $\\log(\\text{ratio}) = 1.0$ → ratio = 10. [$A^{-}$] must be 10× [HA].`
          },
          {
            question: `In the bicarbonate buffer system of blood, hyperventilation (exhaling excess $CO_{2}$) would:`,
            options: [
              `Lower blood pH (respiratory acidosis)`,
              `Raise blood pH (respiratory alkalosis)`,
              `Have no effect on blood pH`,
              `Increase [$HCO_{3}^{-}$] to compensate`
            ],
            correctAnswer: 1,
            explanation: `Exhaling $CO_{2}$ shifts equilibrium left ($\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$), removing $H^{+}$ and raising pH (respiratory alkalosis).`
          },
          {
            question: `Which indicator should be used for a weak acid/strong base titration with an equivalence point at pH 9.0?`,
            options: [
              `Methyl orange (range pH 3.1–4.4)`,
              `Phenolphthalein (range pH 8.2–10.0)`,
              `Bromothymol blue (range pH 6.0–7.6)`,
              `Universal indicator`
            ],
            correctAnswer: 1,
            explanation: `An indicator should change color near the equivalence point pH. Phenolphthalein changes color in the pH 8.2–10.0 range, which brackets the equivalence point at pH 9.0.`
          }
        ]
      }
    },
    {
      id: 'gc4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- **6 strong acids** and **4–5 strong bases**: complete dissociation, pH calculated directly.
- **Weak acid:** $[\\text{H}^+] \\approx \\sqrt{K_a C}$ — valid when $C \\gg K_a$.
- **Henderson-Hasselbalch:** pH = p$K_a + \\log([A^-]/[HA])$ — memorize and practice.
- **Half-equivalence point:** pH = p$K_a$ — most frequent MCAT titration question.
- **Equivalence point:** weak acid + strong base → pH > 7 (conjugate base hydrolysis).
- **Buffer capacity** is maximum at pH = p$K_a$.
- **Blood buffer:** bicarbonate system, pH 7.40, controlled by lungs $(CO_{2})$ and kidneys $(HCO_{3}^{-})$.
`
    }
  ]
};
