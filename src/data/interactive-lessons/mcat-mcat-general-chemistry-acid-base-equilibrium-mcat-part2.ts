export const mcatAcidBaseEqPart2Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab2-intro',
      type: 'text' as const,
      content: `# Acid-Base Chemistry & Equilibrium

**Part 2 of 5 — $K_a$, $K_b$, Henderson-Hasselbalch & Percent Dissociation**

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

## Henderson-Hasselbalch Equation

For a buffer (mixture of weak acid and its conjugate base):

$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$$

**Maximum buffering capacity** occurs when $[\\text{A}^-] = [\\text{HA}]$, so $\\text{pH} = \\text{p}K_a$.

**Practical range of a buffer:** $\\text{p}K_a \\pm 1$ pH unit.

### Worked Example

A buffer contains 0.100 M acetic acid and 0.200 M sodium acetate. $\\text{p}K_a = 4.74$.

$$\\text{pH} = 4.74 + \\log\\frac{0.200}{0.100} = 4.74 + \\log 2 = 4.74 + 0.30 = \\mathbf{5.04}$$

Since $[\\text{A}^-] > [\\text{HA}]$, pH > $\\text{p}K_a$ — makes sense.

## Polyprotic Acids

Polyprotic acids lose protons in steps; each step has a smaller $K_a$:

$$K_{a1} \\gg K_{a2} \\gg K_{a3}$$

**Carbonic acid (physiologically relevant):**

$$\\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^- \\quad K_{a1} = 4.3 \\times 10^{-7}$$
$$\\text{HCO}_3^- \\rightleftharpoons \\text{H}^+ + \\text{CO}_3^{2-} \\quad K_{a2} = 4.7 \\times 10^{-11}$$

For pH calculation, only $K_{a1}$ matters in practice (subsequent dissociations are negligible).

## Amphiprotic Species

An **amphiprotic** species can act as either an acid or a base:
- $\\text{H}_2\\text{O}$ (acid/base of water)
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
              `Acid B: $\\text{p}K_a = 5.7$`,
              `Acid C: $K_a = 2.0 \\times 10^{-8}$`,
              `Acid D: $K_a = 4.5 \\times 10^{-6}$`
            ],
            correctAnswer: 0,
            explanation: `Lower $\\text{p}K_a$ = stronger acid. Acid A ($\\text{p}K_a = 3.2$) is strongest. For comparison, Acid D's $\\text{p}K_a = -\\log(4.5 \\times 10^{-6}) \\approx 5.3$, weaker than Acid A.`
          },
          {
            question: `A buffer contains 0.050 M formic acid (HCOOH) and 0.200 M formate $(HCOO^{-})$. $\\text{p}K_a = 3.74$. What is the pH?`,
            options: [`3.14`, `3.74`, `4.34`, `4.74`],
            correctAnswer: 2,
            explanation: `$\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}]) = 3.74 + \\log(0.200/0.050) = 3.74 + \\log 4 = 3.74 + 0.60 = \\mathbf{4.34}$.`
          },
          {
            question: `To prepare a buffer at pH 7.40 using the $\\text{H}_2\\text{CO}_3$/$\\text{HCO}_3^-$ system ($\\text{p}K_{a1} = 6.37$), what ratio of $[\\text{HCO}_3^-]/[\\text{H}_2\\text{CO}_3]$ is required?`,
            options: [`10.7`, `1.07`, `0.093`, `7.40`],
            correctAnswer: 0,
            explanation: `$7.40 = 6.37 + \\log([\\text{HCO}_3^-]/[\\text{H}_2\\text{CO}_3])$. $\\log(\\text{ratio}) = 1.03$. Ratio $= 10^{1.03} \\approx \\mathbf{10.7}$. This is the physiological bicarbonate buffer ratio in blood.`
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
            explanation: `Dilution causes $[\\text{H}^+]$ to decrease (fewer protons per volume), but the **percent dissociation increases** because equilibrium shifts right. At very high dilution, % dissociation approaches 100%.`
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
            explanation: `A base **accepts** a proton. In option B, $\\text{HCO}_3^-$ accepts $\\text{H}^+$ to form $\\text{H}_2\\text{CO}_3$ — it is acting as a base. In option A, it donates $\\text{H}^+$ (acting as an acid).`
          }
        ]
      }
    },
    {
      id: 'ab2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- $K_a$ quantifies weak acid strength; $\\text{p}K_a = -\\log K_a$; lower $\\text{p}K_a$ = stronger acid
- **Henderson-Hasselbalch:** $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$
- Maximum buffering capacity at $\\text{pH} = \\text{p}K_a$ (equal acid and base concentrations)
- Diluting a weak acid: $[\\text{H}^+]$ decreases, but percent dissociation increases
- Polyprotic acids: each successive $K_a$ is much smaller; only $K_{a1}$ governs pH
- Amphiprotic species can donate or accept protons (e.g., $\\text{HCO}_3^-$, amino acids)
`
    }
  ]
};
