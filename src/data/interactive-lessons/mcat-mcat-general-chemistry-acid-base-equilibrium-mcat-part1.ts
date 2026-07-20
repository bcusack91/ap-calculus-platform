export const mcatAcidBaseEqPart1Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab1-intro',
      type: 'text' as const,
      content: `# Acid-Base Chemistry & Equilibrium

**Part 1 of 5 — pH, pOH, $K_w$, and Strong vs. Weak Acids/Bases**

## The pH Scale

$$\\text{pH} = -\\log[\\text{H}^+]$$
$$\\text{pOH} = -\\log[\\text{OH}^-]$$
$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25°\\text{C})$$

**Ion product of water:**
$$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\quad (\\text{at } 25°\\text{C})$$

| pH | Solution | $[\\text{H}^+]$ |
|----|---------|----------------|
| < 7 | Acidic | > $10^{-7}$ M |
| = 7 | Neutral | $10^{-7}$ M |
| > 7 | Basic | < $10^{-7}$ M |

**Estimation trick:** Each 1 pH unit = 10-fold change in $[\\text{H}^+]$.

## Strong Acids and Bases — 100% Dissociation

For strong acids/bases, $[\\text{H}^+]$ or $[\\text{OH}^-]$ = initial concentration.

**Strong acids (memorize these 7):**
- HCl, HBr, HI
- $\\text{HNO}_3$, $\\text{H}_2\\text{SO}_4$ (first proton), $\\text{HClO}_4$, $\\text{HClO}_3$

**Strong bases:**
- Group 1 hydroxides: NaOH, KOH, LiOH
- Heavy Group 2 hydroxides: $\\text{Ca(OH)}_2$, $\\text{Ba(OH)}_2$, $\\text{Sr(OH)}_2$

**Example — Strong acid:** $[\\text{HCl}] = 0.010\\text{ M}$

$$[\\text{H}^+] = 0.010\\text{ M} = 10^{-2}\\text{ M} \\Rightarrow \\text{pH} = 2$$

**Example — Strong base:** $[\\text{NaOH}] = 0.0010\\text{ M}$

$$[\\text{OH}^-] = 0.0010\\text{ M} = 10^{-3}\\text{ M} \\Rightarrow \\text{pOH} = 3 \\Rightarrow \\text{pH} = 11$$

## Weak Acids and Bases — Partial Dissociation

Weak acids partially dissociate:
$$\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$$
$$K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$$

Weak bases partially accept protons:
$$\\text{B} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{BH}^+ + \\text{OH}^-$$
$$K_b = \\frac{[\\text{BH}^+][\\text{OH}^-]}{[\\text{B}]}$$

**Conjugate acid-base relationship:**
$$K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$$
$$\\text{p}K_a + \\text{p}K_b = 14$$

**Stronger acid → weaker conjugate base.** If $K_a$ is large, the acid is strong; its conjugate base is weak.

## Approximation for Weak Acid pH

For a weak acid with initial concentration $C$ and $K_a$:

$$[\\text{H}^+] \\approx \\sqrt{K_a \\times C}$$

(Valid when $[\\text{H}^+]/C < 5\\%$ — the "5% rule")

**Example:** $0.100$ M acetic acid ($K_a = 1.8 \\times 10^{-5}$):

$$[\\text{H}^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.100} = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3}\\text{ M}$$

$$\\text{pH} = -\\log(1.34 \\times 10^{-3}) = 3 - \\log(1.34) \\approx 2.87$$
`
    },
    {
      id: 'ab1-quiz',
      type: 'multiple-choice' as const,
      content: `**pH, Strong/Weak Acids — MCAT Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: `What is the pH of 0.00100 M $HNO_{3}$?`,
            options: [`2`, `3`, `11`, `12`],
            correctAnswer: 1,
            explanation: `$HNO_{3}$ is a strong acid: $[\\text{H}^+] = 0.00100\\text{ M} = 10^{-3}\\text{ M}$. pH $= -\\log(10^{-3}) = \\mathbf{3}$.`
          },
          {
            question: `The pH of a solution is 11. What is $[\\text{H}^+]$?`,
            options: [`$10^{-3}$ M`, `$10^{-11}$ M`, `$10^{11}$ M`, `$11$ M`],
            correctAnswer: 1,
            explanation: `$[\\text{H}^+] = 10^{-\\text{pH}} = 10^{-11}\\text{ M}$.`
          },
          {
            question: `A weak acid HA has $K_a = 4.0 \\times 10^{-5}$ at 25°C. What is $K_b$ for the conjugate base $\\text{A}^-$?`,
            options: [
              `$4.0 \\times 10^{-5}$`,
              `$2.5 \\times 10^{-10}$`,
              `$4.0 \\times 10^{-9}$`,
              `$2.5 \\times 10^{-9}$`
            ],
            correctAnswer: 1,
            explanation: `$K_b = K_w/K_a = (1.0 \\times 10^{-14})/(4.0 \\times 10^{-5}) = \\mathbf{2.5 \\times 10^{-10}}$.`
          },
          {
            question: `Estimate the pH of 0.100 M HF ($K_a = 7.2 \\times 10^{-4}$) using the approximation $[\\text{H}^+] \\approx \\sqrt{K_a C}$.`,
            options: [`1.57`, `2.07`, `3.14`, `4.07`],
            correctAnswer: 1,
            explanation: `$[\\text{H}^+] = \\sqrt{7.2 \\times 10^{-4} \\times 0.100} = \\sqrt{7.2 \\times 10^{-5}} = 8.49 \\times 10^{-3}$. pH $= -\\log(8.49 \\times 10^{-3}) = 3 - \\log 8.49 \\approx 3 - 0.93 = \\mathbf{2.07}$.`
          },
          {
            question: `Which of the following is NOT a strong acid?`,
            options: [`HCl`, `HBr`, `$\\text{H}_3\\text{PO}_4$`, `$\\text{HClO}_4$`],
            correctAnswer: 2,
            explanation: `$\\text{H}_3\\text{PO}_4$ (phosphoric acid) is a **weak** polyprotic acid. HCl, HBr, and $\\text{HClO}_4$ are all strong acids.`
          },
          {
            question: `A solution has $[\\text{OH}^-] = 5.0 \\times 10^{-4}$ M at 25°C. What is the pH?`,
            options: [`3.3`, `4.0`, `10.0`, `10.7`],
            correctAnswer: 3,
            explanation: `pOH $= -\\log(5.0 \\times 10^{-4}) = 4 - \\log 5.0 \\approx 4 - 0.70 = 3.30$. pH $= 14 - 3.30 = \\mathbf{10.70}$.`
          }
        ]
      }
    },
    {
      id: 'ab1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- $\\text{pH} = -\\log[\\text{H}^+]$; $\\text{pH} + \\text{pOH} = 14$ at 25°C
- $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$
- Strong acids/bases dissociate **100%** — $[\\text{H}^+]$ equals initial concentration
- Memorize 7 strong acids: HCl, HBr, HI, $\\text{HNO}_3$, $\\text{H}_2\\text{SO}_4$, $\\text{HClO}_4$, $\\text{HClO}_3$
- Weak acid approximation: $[\\text{H}^+] \\approx \\sqrt{K_a C}$
- Conjugate pairs: $K_a \\times K_b = K_w$; stronger acid → weaker conjugate base
`
    }
  ]
};
