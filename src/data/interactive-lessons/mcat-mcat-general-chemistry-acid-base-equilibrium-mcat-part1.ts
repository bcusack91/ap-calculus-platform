export const mcatAcidBaseEqPart1Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab1-intro',
      type: 'text' as const,
      content: `# Acid-Base Chemistry & Equilibrium

**Part 1 of 5 — pH, pOH, $K_w$, and Strong vs. Weak Acids/Bases**

## Acid-Base Definitions

- **Brønsted–Lowry:** an acid DONATES $\\text{H}^+$ and a base ACCEPTS $\\text{H}^+$. This is the definition every pH calculation uses.
- **Lewis:** an acid ACCEPTS an electron pair and a base DONATES one, so species with no proton to give, such as $\\text{BF}_3$ or a metal ion like $\\text{Fe}^{3+}$, can still be acids.
- **Conjugate pairs** differ by one $\\text{H}^+$: in $\\text{HA} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{A}^- + \\text{H}_3\\text{O}^+$, HA/$\\text{A}^-$ and $\\text{H}_3\\text{O}^+$/$\\text{H}_2\\text{O}$ are conjugate acid/base pairs.

## The pH Scale

$$\\text{pH} = -\\log[\\text{H}^+]$$
$$\\text{pOH} = -\\log[\\text{OH}^-]$$
$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25^\\circ\\text{C})$$

**Ion product of water:**
$$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\quad (\\text{at } 25^\\circ\\text{C})$$

$K_w$ rises with temperature, because water's autoionization is endothermic. At body temperature ($37^\\circ\\text{C}$) neutral water has pH ≈ 6.8: still neutral, because $[\\text{H}^+] = [\\text{OH}^-]$.

| pH | Solution | $[\\text{H}^+]$ |
|----|---------|----------------|
| < 7 | Acidic | > $10^{-7}$ M |
| = 7 | Neutral | $10^{-7}$ M |
| > 7 | Basic | < $10^{-7}$ M |

**Estimation trick:** Each 1 pH unit = 10-fold change in $[\\text{H}^+]$.

## Strong Acids and Bases — 100% Dissociation

For strong acids, $[\\text{H}^+]$ = initial concentration $C$. For strong bases, $[\\text{OH}^-] = C$ for a Group 1 hydroxide but $2C$ for a Group 2 hydroxide, which releases two $\\text{OH}^-$ per formula unit.

**Strong acids (memorize these 6):**
- HCl, HBr, HI
- $\\text{HNO}_3$, $\\text{H}_2\\text{SO}_4$ (first proton), $\\text{HClO}_4$
- $\\text{HClO}_3$ is often added as a seventh.

**Strong bases:**
- Group 1 hydroxides: NaOH, KOH, LiOH, giving $[\\text{OH}^-] = C$
- Heavy Group 2 hydroxides: $\\text{Ca(OH)}_2$, $\\text{Ba(OH)}_2$, $\\text{Sr(OH)}_2$, giving $[\\text{OH}^-] = 2C$

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

## Salts: Acidic, Basic or Neutral

A dissolved salt's ions can react with water. The conjugate of a STRONG acid or base is too weak to matter; the conjugate of a WEAK one sets the pH.

- $\\text{NH}_4\\text{Cl}$ → **acidic**: $\\text{NH}_4^+$ (conjugate acid of weak $\\text{NH}_3$) donates $\\text{H}^+$; $\\text{Cl}^-$ is inert.
- NaCl → **neutral**: both ions come from a strong acid and a strong base.
- NaCN → **basic**: $\\text{CN}^-$ (conjugate base of weak HCN) takes $\\text{H}^+$ from water, making $\\text{OH}^-$.

## Approximation for Weak Acid pH

For a weak acid with initial concentration $C$ and $K_a$:

$$[\\text{H}^+] \\approx \\sqrt{K_a \\times C}$$

(Valid when $[\\text{H}^+]/C < 5\\%$ — the "5% rule")

### Worked Example — Weak Acid and Conjugate Base pH

**Problem 1.** A solution is $0.100$ M acetic acid ($K_a = 1.8 \\times 10^{-5}$).

- **(a)** What is $[\\text{H}^+]$ by the square-root shortcut?
- **(b)** What is the pH?
- **(c)** Does the 5% rule allow the shortcut here?

**(a) Hydrogen ion.** $[\\text{H}^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.100} = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3}\\text{ M}$, since $\\sqrt{1.8} \\approx 1.34$ and $\\sqrt{10^{-6}} = 10^{-3}$.

**(b) pH.** With $[\\text{H}^+] = 1.34 \\times 10^{-3}$ M from (a):

$$\\text{pH} = -\\log(1.34 \\times 10^{-3}) = 3 - \\log(1.34) \\approx 2.87$$

Check: the pH lies between 2 and 3, closer to 3.

**(c) The 5% check.** $(1.34 \\times 10^{-3})/0.100 = 1.3\\%$, well under 5%, so the shortcut is safe.

**Problem 2.** Sodium acetate supplies $0.10$ M acetate, the conjugate base of acetic acid ($K_a = 1.8 \\times 10^{-5}$).

- **(a)** What is $K_b$ for acetate?
- **(b)** What is $[\\text{OH}^-]$ by the square-root shortcut?
- **(c)** What are the pOH and the pH?

**(a) Conjugate constant.** $K_b = K_w/K_a = (1.0 \\times 10^{-14})/(1.8 \\times 10^{-5}) \\approx 5.6 \\times 10^{-10}$.

**(b) Hydroxide.** $[\\text{OH}^-] \\approx \\sqrt{5.6 \\times 10^{-10} \\times 0.10} = \\sqrt{5.6 \\times 10^{-11}} \\approx 7.5 \\times 10^{-6}$ M. Writing $5.6 \\times 10^{-11}$ as $56 \\times 10^{-12}$ makes the root easy: $\\sqrt{56} \\approx 7.5$.

**(c) pOH, then pH.** $\\text{pOH} = 6 - \\log 7.5 \\approx 6 - 0.87 = 5.13$, so $\\text{pH} = 14 - 5.13 = 8.87$. The conjugate base of a weak acid makes the solution basic.
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
            yield: 'ULTRA_HIGH',
            explanation: `$HNO_{3}$ is a strong acid: $[\\text{H}^+] = 0.00100\\text{ M} = 10^{-3}\\text{ M}$. pH $= -\\log(10^{-3}) = \\mathbf{3}$.`
          },
          {
            question: `The pH of a solution is 11. What is $[\\text{H}^+]$?`,
            options: [`$10^{-3}$ M`, `$10^{-11}$ M`, `$10^{11}$ M`, `$11$ M`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$[\\text{H}^+] = 10^{-\\text{pH}} = 10^{-11}\\text{ M}$.`
          },
          {
            question: `A weak acid HA has $K_a = 4.0 \\times 10^{-5}$ at 25°C. What is $K_b$ for the conjugate base $\\text{A}^-$?`,
            options: [
              `$4.0 \\times 10^{-5}$`,
              `$2.5 \\times 10^{-10}$`,
              `$4.0 \\times 10^{-19}$`,
              `$2.5 \\times 10^{-9}$`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$K_b = K_w/K_a = (1.0 \\times 10^{-14})/(4.0 \\times 10^{-5}) = \\mathbf{2.5 \\times 10^{-10}}$. Multiplying $K_a$ by $K_w$ instead of dividing gives $4.0 \\times 10^{-19}$, repeating $K_a$ itself confuses the acid with its conjugate base, and $2.5 \\times 10^{-9}$ is an exponent slip in the division.`
          },
          {
            question: `Estimate the pH of 0.100 M HF ($K_a = 7.2 \\times 10^{-4}$) using the approximation $[\\text{H}^+] \\approx \\sqrt{K_a C}$.`,
            options: [`1.57`, `2.07`, `3.14`, `4.07`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$[\\text{H}^+] = \\sqrt{7.2 \\times 10^{-4} \\times 0.100} = \\sqrt{7.2 \\times 10^{-5}} = 8.49 \\times 10^{-3}$. pH $= -\\log(8.49 \\times 10^{-3}) = 3 - \\log 8.49 \\approx 3 - 0.93 = \\mathbf{2.07}$. The shortcut is only rough here (8.5%, over 5%; exact pH ≈ 2.09). The value 3.14 is the $\\text{p}K_a$ itself, 1.57 is half the $\\text{p}K_a$, and 4.07 is roughly what skipping the square root gives ($-\\log(7.2 \\times 10^{-5}) \\approx 4.1$).`
          },
          {
            question: `Which of the following is NOT a strong acid?`,
            options: [`HCl`, `$\\text{H}_2\\text{SO}_4$`, `$\\text{H}_3\\text{PO}_4$`, `$\\text{HClO}_4$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\text{H}_3\\text{PO}_4$ (phosphoric acid) is a **weak** polyprotic acid. HCl and $\\text{HClO}_4$ are strong acids, and $\\text{H}_2\\text{SO}_4$ is strong for its first proton.`
          },
          {
            question: `A solution has $[\\text{OH}^-] = 5.0 \\times 10^{-4}$ M at 25°C. What is the pH?`,
            options: [`3.3`, `4.0`, `10.0`, `10.7`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `pOH $= -\\log(5.0 \\times 10^{-4}) = 4 - \\log 5.0 \\approx 4 - 0.70 = 3.30$. pH $= 14 - 3.30 = \\mathbf{10.70}$.`
          }
        ]
      }
    },
    {
      id: 'ab1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **pH is a log scale.** $\\text{pH} = -\\log[\\text{H}^+]$, so each pH unit is a tenfold change in $[\\text{H}^+]$.
- **Water links pH and pOH.** $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$, so $\\text{pH} + \\text{pOH} = 14$ at 25°C.
- **Strong means 100% dissociated.** Strong acids give $[\\text{H}^+] = C$; strong hydroxides give $[\\text{OH}^-] = C$, or $2C$ for Group 2.
- **Weak acids: square-root shortcut.** $[\\text{H}^+] \\approx \\sqrt{K_a C}$, and $K_a \\times K_b = K_w$ for a conjugate pair.

**Common traps**

- **Reading pOH as pH.** For a base, $-\\log[\\text{OH}^-]$ is the pOH: 0.0010 M NaOH has pOH 3 but pH 11.
- **Calling phosphoric acid strong.** $\\text{H}_3\\text{PO}_4$ is weak, like HF; learn the short list of strong acids and treat others as weak.
- **Strong acid, strong conjugate.** It is the reverse: the larger $K_a$, the WEAKER the conjugate base.
- **Skipping the 5% check.** $\\sqrt{K_a C}$ assumes little dissociation; confirm $[\\text{H}^+]/C$ stays under 5%.
`
    }
  ]
};
