export const mcatAcidBaseEqPart2Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab2-intro',
      type: 'text' as const,
      content: `# Acids, Bases & Buffers

**Part 2 of 3 — $K_a$, $K_b$, Henderson-Hasselbalch & Percent Dissociation**

## The Acid Dissociation Constant $K_a$

A larger $K_a$ means a stronger acid (more dissociation at equilibrium).

$$\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$$

$$K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$$

$$\\text{p}K_a = -\\log K_a \\quad \\Rightarrow \\quad \\text{lower } \\text{p}K_a = \\text{stronger acid}$$

**Typical $\\text{p}K_a$ values to know:**

| Acid | $K_a$ | $\\text{p}K_a$ | Strength |
|------|-------|--------------|---------|
| HF | $7.2 \\times 10^{-4}$ | 3.14 | Weak |
| Acetic acid ($\\text{CH}_3\\text{COOH}$) | $1.8 \\times 10^{-5}$ | 4.74 | Weak |
| $\\text{NH}_4^+$ | $5.6 \\times 10^{-10}$ | 9.25 | Very weak |
| $\\text{HCO}_3^-$ | $4.7 \\times 10^{-11}$ | 10.3 | Very weak |

## Percent Dissociation

$$\\% \\text{ dissociation} = \\frac{[\\text{H}^+]_{\\text{eq}}}{[\\text{HA}]_0} \\times 100\\%$$

**Key pattern:** As concentration *decreases*, percent dissociation *increases*. Diluting a weak acid solution makes it dissociate to a greater percent (though $[\\text{H}^+]$ decreases).

### Worked Example — Percent Dissociation on Dilution

**Problem 1.** A $0.100$ M acetic acid solution ($K_a = 1.8 \\times 10^{-5}$) has $[\\text{H}^+] = 1.34 \\times 10^{-3}$ M. It is then diluted 100-fold, to $0.00100$ M.

- **(a)** What is the percent dissociation before dilution?
- **(b)** What are $[\\text{H}^+]$ and the pH after dilution, by the square-root shortcut?
- **(c)** What is the percent dissociation now, and is the shortcut still safe?

**(a) Before.** $(1.34 \\times 10^{-3}/0.100) \\times 100\\% = 1.3\\%$.

**(b) After.** $[\\text{H}^+] \\approx \\sqrt{1.8 \\times 10^{-5} \\times 1.0 \\times 10^{-3}} = \\sqrt{1.8 \\times 10^{-8}} = 1.34 \\times 10^{-4}$ M, so pH ≈ 3.87. A 100-fold dilution lowered $[\\text{H}^+]$ only 10-fold (the square root), so the pH rose by just 1.

**(c) Percent now.** $(1.34 \\times 10^{-4}/1.00 \\times 10^{-3}) \\times 100\\% \\approx 13\\%$, ten times the fraction before. That is over 5%, so the shortcut is now only rough; solving exactly gives about 12.5%.

## Henderson-Hasselbalch Equation

For a buffer (mixture of weak acid and its conjugate base):

$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$$

**Maximum buffering capacity** occurs when $[\\text{A}^-] = [\\text{HA}]$, so $\\text{pH} = \\text{p}K_a$.

**Practical range of a buffer:** $\\text{p}K_a \\pm 1$ pH unit.

### Worked Example — Henderson-Hasselbalch Buffer pH

**Problem 2.** A buffer contains 0.100 M acetic acid and 0.200 M sodium acetate. $\\text{p}K_a = 4.74$.

- **(a)** Which species is HA, which is $\\text{A}^-$, and what is the ratio $[\\text{A}^-]/[\\text{HA}]$?
- **(b)** What is the pH of the buffer?
- **(c)** Is the pH above or below the $\\text{p}K_a$, and does that make sense?

**(a) The ratio.** Acetic acid is HA and acetate (from sodium acetate) is $\\text{A}^-$, so $[\\text{A}^-]/[\\text{HA}] = 0.200/0.100 = 2$.

**(b) pH.** With the ratio of 2 from (a):

$$\\text{pH} = 4.74 + \\log\\frac{0.200}{0.100} = 4.74 + \\log 2 = 4.74 + 0.30 = \\mathbf{5.04}$$

**(c) Sense check.** Above: since $[\\text{A}^-] > [\\text{HA}]$, pH > $\\text{p}K_a$ — makes sense.

## Polyprotic Acids

Polyprotic acids lose protons in steps, and each step has a smaller $K_a$. For a pH calculation only $K_{a1}$ matters in practice; the later dissociations are negligible.

$$K_{a1} \\gg K_{a2} \\gg K_{a3}$$

**Carbonic acid (physiologically relevant):**

$$\\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^- \\quad K_{a1} = 4.3 \\times 10^{-7}$$
$$\\text{HCO}_3^- \\rightleftharpoons \\text{H}^+ + \\text{CO}_3^{2-} \\quad K_{a2} = 4.7 \\times 10^{-11}$$

## Amphiprotic Species

An **amphiprotic** species can act as either an acid or a base:
- $\\text{H}_2\\text{O}$ (gives $\\text{H}^+$ to become $\\text{OH}^-$, takes $\\text{H}^+$ to become $\\text{H}_3\\text{O}^+$)
- $\\text{HCO}_3^-$ (acid: loses $H^{+}$ → $\\text{CO}_3^{2-}$; base: gains $H^{+}$ → $\\text{H}_2\\text{CO}_3$)
- $\\text{HPO}_4^{2-}$, $\\text{H}_2\\text{PO}_4^-$, amino acids
`
    },
    {
      id: 'ab2-quiz',
      type: 'multiple-choice' as const,
      content: `**$K_a$, Henderson-Hasselbalch & Percent Dissociation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which acid is strongest?`,
            options: [
              `Acid A: $\\text{p}K_a = 3.2$`,
              `Acid B: $\\text{p}K_a = 10.5$`,
              `Acid C: $K_a = 2.0 \\times 10^{-8}$`,
              `Acid D: $K_a = 4.5 \\times 10^{-6}$`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Lower $\\text{p}K_a$ = stronger acid. Acid A ($\\text{p}K_a = 3.2$) is strongest. For comparison, Acid D's $\\text{p}K_a = -\\log(4.5 \\times 10^{-6}) \\approx 5.3$ and Acid C's is about 7.7, both weaker than Acid A; Acid B, at 10.5, is the weakest of all.`
          },
          {
            question: `A buffer contains 0.050 M formic acid (HCOOH) and 0.200 M formate $(HCOO^{-})$. $\\text{p}K_a = 3.74$. What is the pH?`,
            options: [`3.14`, `3.74`, `4.34`, `4.74`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}]) = 3.74 + \\log(0.200/0.050) = 3.74 + \\log 4 = 3.74 + 0.60 = \\mathbf{4.34}$. The value 3.14 flips the ratio (acid over base), 3.74 ignores the ratio altogether, and 4.74 is acetic acid's $\\text{p}K_a$, not formic acid's.`
          },
          {
            question: `To prepare a buffer at pH 7.40 using the $\\text{H}_2\\text{CO}_3$/$\\text{HCO}_3^-$ system ($\\text{p}K_{a1} = 6.37$), what ratio of $[\\text{HCO}_3^-]/[\\text{H}_2\\text{CO}_3]$ is required?`,
            options: [`10.7`, `1.07`, `0.093`, `7.40`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$7.40 = 6.37 + \\log([\\text{HCO}_3^-]/[\\text{H}_2\\text{CO}_3])$. $\\log(\\text{ratio}) = 1.03$. Ratio $= 10^{1.03} \\approx \\mathbf{10.7}$. The value 0.093 is the inverted ratio, 1.07 slips the decimal, and 7.40 is just the pH. (Blood's own ratio is about 20:1, because physiology uses an effective $\\text{p}K_a$ of 6.1 that counts all dissolved $\\text{CO}_2$.)`
          },
          {
            question: `As a weak acid solution is diluted, which of the following is TRUE?`,
            options: [
              `Both $[\\text{H}^+]$ and percent dissociation increase`,
              `$[\\text{H}^+]$ increases while percent dissociation decreases`,
              `$[\\text{H}^+]$ decreases while percent dissociation increases`,
              `Both $[\\text{H}^+]$ and percent dissociation decrease`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Dilution causes $[\\text{H}^+]$ to decrease (fewer protons per volume), but the **percent dissociation increases** because equilibrium shifts right (dilution favours the side with more dissolved particles). At very high dilution, % dissociation approaches 100%.`
          },
          {
            question: `$\\text{HCO}_3^-$ is amphiprotic. It acts as a base in which reaction?`,
            options: [
              `$\\text{HCO}_3^- \\to \\text{H}^+ + \\text{CO}_3^{2-}$`,
              `$\\text{HCO}_3^- + \\text{H}^+ \\to \\text{H}_2\\text{CO}_3$`,
              `$\\text{HCO}_3^- + \\text{OH}^- \\to \\text{CO}_3^{2-} + \\text{H}_2\\text{O}$`,
              `$\\text{H}_2\\text{CO}_3 \\to \\text{H}^+ + \\text{HCO}_3^-$`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `A base **accepts** a proton. When $\\text{HCO}_3^-$ accepts $\\text{H}^+$ to form $\\text{H}_2\\text{CO}_3$, it is acting as a base. When it splits into $\\text{H}^+$ and $\\text{CO}_3^{2-}$, it donates $\\text{H}^+$ (acting as an acid), and reacting with $\\text{OH}^-$ to give carbonate is the same acid role. The reaction starting from $\\text{H}_2\\text{CO}_3$ does not involve bicarbonate as a reactant at all; it is carbonic acid acting as an acid.`
          }
        ]
      }
    },
    {
      id: 'ab2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Ka measures strength.** A larger $K_a$ means a lower $\\text{p}K_a = -\\log K_a$ and a stronger acid.
- **Henderson-Hasselbalch.** $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$; equal amounts give pH = $\\text{p}K_a$.
- **Buffer range pKa ± 1.** Buffering peaks at pH = $\\text{p}K_a$ and works from a 1:10 to a 10:1 ratio.
- **Dilution raises % dissociation.** Diluting a weak acid lowers $[\\text{H}^+]$ but raises the fraction that dissociates.

**Common traps**

- **Higher pKa, stronger acid.** Backwards: the LOWER the $\\text{p}K_a$, the STRONGER the acid.
- **Flipping the HH ratio.** It is base over acid: more $\\text{A}^-$ than HA puts the pH ABOVE the $\\text{p}K_a$.
- **Every proton counts equally.** Each later $K_a$ of a polyprotic acid is far smaller; $K_{a1}$ alone sets the pH.
- **Bicarbonate only as an acid.** $\\text{HCO}_3^-$ is amphiprotic: it can donate $\\text{H}^+$ or accept one to form $\\text{H}_2\\text{CO}_3$.
`
    }
  ]
};
