export const mcatAcidBaseEqPart4Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab4-intro',
      type: 'text' as const,
      content: `# Acid-Base Chemistry & Equilibrium

**Part 4 of 5 — Acid-Base Titrations**

## Titration Fundamentals

A **titration** adds a standard solution (titrant) of known concentration to an unknown solution until the reaction is complete (equivalence point).

$$\\text{moles acid} = \\text{moles base at equivalence point}$$

$$M_a V_a = M_b V_b \\quad (\\text{for 1:1 reactions})$$

For polyprotic acids, account for the proton-to-hydroxide ratio:
$$n_a M_a V_a = n_b M_b V_b$$

## Titration Curve Shapes

### Strong Acid + Strong Base

- **Before equivalence:** pH calculated from excess strong acid
- **At equivalence:** pH = 7.00 (neutral salt, no hydrolysis)
- **After equivalence:** pH calculated from excess strong base
- **Sharp** endpoint; almost any indicator works

### Weak Acid + Strong Base

- **Initially:** pH > 0 (weak acid partially dissociates)
- **Buffer region:** pH ≈ pKₐ when halfway to equivalence ("half-equivalence point")
- **At half-equivalence:** $[\\text{HA}] = [\\text{A}^-]$ → pH = pKₐ ← **MCAT key fact**
- **At equivalence:** pH > 7 (conjugate base hydrolyzes: $\\text{A}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HA} + \\text{OH}^-$)
- **After equivalence:** pH from excess strong base

### Weak Base + Strong Acid

- **At equivalence:** pH < 7 (conjugate acid hydrolyzes)
- **At half-equivalence:** pOH = pKb, or equivalently pH = 14 − pKb = pKₐ of conjugate acid

## Key Features of Titration Curves

| Feature | Meaning |
|---------|---------|
| Endpoint (indicator changes) | Should be ≈ equivalence point |
| Equivalence point | Stoichiometrically equal moles acid and base |
| Half-equivalence point | pH = pKₐ (for weak acid titration) |
| Inflection point | Steepest part of curve; near equivalence |
| Buffer region | Shallow slope; brackets the half-equivalence point |

## Acid-Base Indicators

Indicators are weak acids (HIn) where HIn and In⁻ are different colors:

$$\\text{HIn} \\rightleftharpoons \\text{H}^+ + \\text{In}^-$$

Color changes at pH ≈ pKₐ (indicator). The indicator transitions over ~pH = pKₐ ± 1.

**Common indicators:**

| Indicator | Acid color | Base color | Transition range |
|-----------|-----------|-----------|-----------------|
| Phenolphthalein | Colorless | Pink | pH 8.2–10.0 |
| Methyl orange | Red | Yellow | pH 3.1–4.4 |
| Litmus | Red | Blue | pH 6.0–8.0 |
| Bromothymol blue | Yellow | Blue | pH 6.0–7.6 |

**Choosing the right indicator:** Pick one whose transition range includes the equivalence point pH.
- Strong acid + strong base: any indicator (equiv. point pH = 7)
- Weak acid + strong base: equivalence point pH > 7 → use phenolphthalein

## Polyprotic Titrations

Titrating $\\text{H}_2\\text{CO}_3$ or $\\text{H}_3\\text{PO}_4$ with NaOH gives **multiple equivalence points**. The number of equivalence points = number of ionizable protons.

For $\\text{H}_3\\text{PO}_4$ + NaOH:
- 1st equiv. point: $\\text{H}_3\\text{PO}_4 \\to \\text{NaH}_2\\text{PO}_4$
- 2nd equiv. point: $\\text{NaH}_2\\text{PO}_4 \\to \\text{Na}_2\\text{HPO}_4$
- 3rd equiv. point: $\\text{Na}_2\\text{HPO}_4 \\to \\text{Na}_3\\text{PO}_4$
`
    },
    {
      id: 'ab4-quiz',
      type: 'multiple-choice' as const,
      content: `**Titrations & Indicators** 🎯`,
      exercise: {
        questions: [
          {
            question: `25.0 mL of 0.400 M NaOH is required to neutralize 50.0 mL of HCl. What is the concentration of the HCl?`,
            options: [`0.100 M`, `0.200 M`, `0.400 M`, `0.800 M`],
            correctAnswer: 1,
            explanation: `$M_a V_a = M_b V_b$: $M_{\\text{HCl}} \\times 50.0 = 0.400 \\times 25.0$. $M_{\\text{HCl}} = 10.0/50.0 = \\mathbf{0.200\\text{ M}}$.`
          },
          {
            question: `In the titration of 0.100 M acetic acid (pKₐ = 4.74) with NaOH, what is the pH at the half-equivalence point?`,
            options: [`3.87`, `4.74`, `7.00`, `8.87`],
            correctAnswer: 1,
            explanation: `At the half-equivalence point, exactly half the weak acid has been converted to its conjugate base, so $[\\text{HA}] = [\\text{A}^-]$ and HH gives $\\text{pH} = \\text{p}K_a + \\log(1) = \\text{p}K_a = \\mathbf{4.74}$.`
          },
          {
            question: `What is the pH at the equivalence point when 50.0 mL of 0.100 M acetic acid is titrated with 50.0 mL of 0.100 M NaOH?`,
            options: [
              `pH = 7.00 — neutral salt`,
              `pH < 7 — conjugate acid hydrolyzes`,
              `pH > 7 — conjugate base hydrolyzes`,
              `pH = pKₐ`
            ],
            correctAnswer: 2,
            explanation: `At equivalence, all acetic acid has become sodium acetate ($\\text{CH}_3\\text{COO}^-$). Acetate is a weak base: $\\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^-$. This produces OH⁻ → pH > 7.`
          },
          {
            question: `Which indicator is most appropriate for the titration of a weak acid with NaOH (equivalence point ≈ pH 9)?`,
            options: [
              `Methyl orange (transition pH 3.1–4.4)`,
              `Bromothymol blue (transition pH 6.0–7.6)`,
              `Phenolphthalein (transition pH 8.2–10.0)`,
              `Litmus (transition pH 6.0–8.0)`
            ],
            correctAnswer: 2,
            explanation: `The indicator's transition range should contain the equivalence point pH. pH 9 falls within phenolphthalein's range (8.2–10.0). Neither methyl orange (3.1–4.4) nor bromothymol blue/litmus (6–8) covers pH 9.`
          },
          {
            question: `$\\text{H}_3\\text{PO}_4$ is titrated with excess NaOH. How many equivalence points appear on the titration curve?`,
            options: [`1`, `2`, `3`, `4`],
            correctAnswer: 2,
            explanation: `$\\text{H}_3\\text{PO}_4$ is triprotic — it has 3 ionizable protons. Titrating with NaOH gives **3 equivalence points**, one for each proton transferred.`
          },
          {
            question: `A titration curve shows a nearly horizontal plateau region between 10 mL and 20 mL of titrant added, with minimum slope at 15 mL. What is happening at 15 mL?`,
            options: [
              `Equivalence point — all acid is neutralized`,
              `Half-equivalence point — pH equals pKₐ`,
              `Excess base is present`,
              `The indicator changes color`
            ],
            correctAnswer: 1,
            explanation: `The plateau region with minimum slope change is the **buffer region**. The midpoint of this plateau (15 mL) is the **half-equivalence point**, where $[\\text{HA}] = [\\text{A}^-]$ and pH = pKₐ.`
          }
        ]
      }
    },
    {
      id: 'ab4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- At equivalence: moles acid = moles base; $M_aV_a = M_bV_b$ (for 1:1)
- Strong acid + strong base → equivalence pH = 7.00
- Weak acid + strong base → equivalence pH > 7 (conjugate base hydrolysis)
- **Half-equivalence point:** $[\\text{HA}] = [\\text{A}^-]$ → pH = pKₐ — most testable titration fact
- Indicators change color over ~pKₐ ± 1; choose so that transition includes equivalence pH
- Phenolphthalein: pH 8.2–10, good for weak acid titrations (equiv. pH > 7)
- Polyprotic acids give multiple equivalence points on the titration curve
`
    }
  ]
};
