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
- **Sharp** endpoint: any common indicator works, because the near-vertical jump spans about pH 4–10

### Weak Acid + Strong Base

- **Initially:** pH is higher than for a strong acid of the same concentration (the weak acid only partially dissociates)
- **Buffer region:** HA and $\\text{A}^-$ coexist, so the Henderson–Hasselbalch equation gives the pH: $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$. pH ≈ $pK_{a}$ when halfway to equivalence ("half-equivalence point")
- **At half-equivalence:** $[\\text{HA}] = [\\text{A}^-]$ → pH = $pK_{a}$ ← **MCAT key fact**
- **At equivalence:** pH > 7 (conjugate base hydrolyzes: $\\text{A}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HA} + \\text{OH}^-$)
- **After equivalence:** pH from excess strong base

### Weak Base + Strong Acid

- **At equivalence:** pH < 7 (conjugate acid hydrolyzes)
- **At half-equivalence:** pOH = pKb, or equivalently pH = 14 − pKb = $pK_{a}$ of conjugate acid

## Key Features of Titration Curves

| Feature | Meaning |
|---------|---------|
| Endpoint (indicator changes) | Should be ≈ equivalence point |
| Equivalence point | Stoichiometrically equal moles acid and base |
| Half-equivalence point | pH = $pK_{a}$ (for weak acid titration) |
| Inflection point | Steepest point; marks the equivalence point |
| Buffer region | Shallow slope; brackets the half-equivalence point |

## Acid-Base Indicators

Indicators are weak acids (HIn) where HIn and $In^{-}$ are different colors:

$$\\text{HIn} \\rightleftharpoons \\text{H}^+ + \\text{In}^-$$

Color changes at pH ≈ $pK_{a}$ (indicator). The indicator transitions over ~pH = $pK_{a}$ ± 1.

**Common indicators:**

| Indicator | Acid color | Base color | Transition range |
|-----------|-----------|-----------|-----------------|
| Phenolphthalein | Colorless | Pink | pH 8.2–10.0 |
| Methyl orange | Red | Yellow | pH 3.1–4.4 |
| Litmus | Red | Blue | pH 4.5–8.3 |
| Bromothymol blue | Yellow | Blue | pH 6.0–7.6 |

**Choosing the right indicator:** Pick one whose transition range includes the equivalence point pH.
- Strong acid + strong base: any common indicator, because the near-vertical jump spans about pH 4–10
- Weak acid + strong base: equivalence point pH > 7 → use phenolphthalein
- Weak base + strong acid: equivalence point pH < 7 (about 5 for $NH_3$ + HCl) → an indicator changing on the acidic side, such as methyl red (4.4–6.2); methyl orange suits only a very acidic endpoint

### Worked Example — Titrating Acetic Acid with NaOH

**Problem 1.** $50.0$ mL of $0.100$ M acetic acid ($\\text{p}K_a = 4.74$) is titrated with $0.100$ M NaOH.

- **(a)** What volume of NaOH reaches the equivalence point?
- **(b)** What is the pH after $10.0$ mL of NaOH?
- **(c)** What is the pH after $25.0$ mL of NaOH?

**(a) Equivalence volume.** Moles of acid $= (0.0500\\text{ L})(0.100\\text{ M}) = 5.00$ mmol, so $V_b = 5.00\\text{ mmol}/0.100\\text{ M} = 50.0$ mL.

**(b) Buffer region.** $10.0$ mL of NaOH is $1.00$ mmol $\\text{OH}^-$, which converts $1.00$ mmol HA to $\\text{A}^-$ and leaves $4.00$ mmol HA: $\\text{pH} = 4.74 + \\log\\frac{1.00}{4.00} = 4.74 - 0.60 = 4.14$.

**(c) Half-equivalence.** $25.0$ mL is half of the $50.0$ mL from (a), leaving $2.50$ mmol each of HA and $\\text{A}^-$, so $\\text{pH} = \\text{p}K_a = 4.74$.

**Problem 2.** The same titration reaches equivalence: all $5.00$ mmol of acetic acid ($K_a = 1.8 \\times 10^{-5}$) is now acetate, in $100.0$ mL of solution.

- **(a)** What is $[\\text{A}^-]$ at the equivalence point?
- **(b)** What is $[\\text{OH}^-]$ there?
- **(c)** What is the pH at the equivalence point?
- **(d)** Phenolphthalein (8.2–10.0) or methyl orange (3.1–4.4): which indicator suits this endpoint?

**(a) Acetate concentration.** $5.00\\text{ mmol}/100.0\\text{ mL} = 0.0500$ M: the volume doubled, so the concentration halved.

**(b) Hydroxide.** Acetate is a weak base, so use the weak-base shortcut $[\\text{OH}^-] \\approx \\sqrt{K_b C}$, with $K_b = K_w/K_a \\approx 5.6 \\times 10^{-10}$ and $C = 0.0500$ M from (a): $[\\text{OH}^-] \\approx \\sqrt{2.8 \\times 10^{-11}} = \\sqrt{28 \\times 10^{-12}} \\approx 5.3 \\times 10^{-6}$ M.

**(c) pOH, then pH.** With $[\\text{OH}^-] \\approx 5.3 \\times 10^{-6}$ M from (b): $\\text{pOH} = 6 - \\log 5.3 \\approx 6 - 0.72 = 5.28$, so $\\text{pH} = 14 - \\text{pOH} \\approx 8.72$.

**(d) Indicator.** pH 8.72 lies inside phenolphthalein's 8.2–10.0 range; methyl orange (3.1–4.4) would change colour long before equivalence.

## Polyprotic Titrations

Titrating $\\text{H}_2\\text{CO}_3$ or $\\text{H}_3\\text{PO}_4$ with NaOH gives **multiple equivalence points**. The number of equivalence points = number of ionizable protons.

For $\\text{H}_3\\text{PO}_4$ + NaOH:
- 1st equiv. point: $\\text{H}_3\\text{PO}_4 \\to \\text{NaH}_2\\text{PO}_4$
- 2nd equiv. point: $\\text{NaH}_2\\text{PO}_4 \\to \\text{Na}_2\\text{HPO}_4$
- 3rd equiv. point: $\\text{Na}_2\\text{HPO}_4 \\to \\text{Na}_3\\text{PO}_4$

Each stage has its own buffer region. Halfway to the first equivalence point, pH = $\\text{p}K_{a1}$; halfway between the first and second, pH = $\\text{p}K_{a2}$. At the first equivalence point the solution is the amphiprotic $\\text{H}_2\\text{PO}_4^-$, and its pH sits midway between the two: $\\text{pH} \\approx (\\text{p}K_{a1} + \\text{p}K_{a2})/2$.

<!-- yield:low -->
- In practice the third equivalence point of $\\text{H}_3\\text{PO}_4$ is barely visible in water: $\\text{p}K_{a3} \\approx 12.3$ is so close to the pH of the NaOH titrant that the curve shows almost no jump there.
<!-- /yield -->
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
            yield: 'HIGH',
            explanation: `$M_a V_a = M_b V_b$: $M_{\\text{HCl}} \\times 50.0 = 0.400 \\times 25.0$. $M_{\\text{HCl}} = 10.0/50.0 = \\mathbf{0.200\\text{ M}}$.`
          },
          {
            question: `In the titration of 0.100 M acetic acid ($pK_{a}$ = 4.74) with NaOH, what is the pH at the half-equivalence point?`,
            options: [`3.87`, `4.74`, `7.00`, `8.87`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `At the half-equivalence point, exactly half the weak acid has been converted to its conjugate base, so $[\\text{HA}] = [\\text{A}^-]$ and HH gives $\\text{pH} = \\text{p}K_a + \\log(1) = \\text{p}K_a = \\mathbf{4.74}$.`
          },
          {
            question: `What is the pH at the equivalence point when 50.0 mL of 0.100 M acetic acid is titrated with 50.0 mL of 0.100 M NaOH?`,
            options: [
              `pH = 7.00 — neutral salt`,
              `pH < 7 — the sodium ion hydrolyzes`,
              `pH > 7 — the acetate ion hydrolyzes`,
              `pH = $pK_{a}$`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At equivalence, all acetic acid has become sodium acetate ($\\text{CH}_3\\text{COO}^-$). Acetate is a weak base: $\\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^-$. This produces $OH^{-}$ → pH > 7. pH = 7.00 holds only for a strong acid + strong base, pH < 7 would need an acidic ion, but $\\text{Na}^+$ (from a strong base) does not hydrolyze, and pH = $pK_{a}$ is the half-equivalence point, not the equivalence point.`
          },
          {
            question: `Which indicator is most appropriate for the titration of a weak acid with NaOH (equivalence point ≈ pH 9)?`,
            options: [
              `Methyl orange (transition pH 3.1–4.4)`,
              `Bromothymol blue (transition pH 6.0–7.6)`,
              `Phenolphthalein (transition pH 8.2–10.0)`,
              `Litmus (transition pH 4.5–8.3)`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The indicator's transition range should contain the equivalence point pH. pH 9 falls within phenolphthalein's range (8.2–10.0). None of methyl orange (3.1–4.4), bromothymol blue (6.0–7.6) or litmus (4.5–8.3) covers pH 9.`
          },
          {
            question: `$\\text{H}_3\\text{PO}_4$ is titrated with excess NaOH. How many equivalence points does its titration curve have in principle?`,
            options: [`1`, `2`, `3`, `4`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `$\\text{H}_3\\text{PO}_4$ is triprotic — it has 3 ionizable protons. Titrating with NaOH gives **3 equivalence points**, one for each proton transferred.`
          },
          {
            question: `A titration curve shows a nearly horizontal plateau region between 10 mL and 20 mL of titrant added, with minimum slope at 15 mL. What is happening at 15 mL?`,
            options: [
              `Equivalence point — moles of base equal moles of acid`,
              `Half-equivalence point — pH equals $pK_{a}$`,
              `Excess base is present — leftover $OH^{-}$ sets the pH`,
              `Endpoint — the indicator changes color at this volume`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The plateau region with minimum slope change is the **buffer region**. The midpoint of this plateau (15 mL) is the **half-equivalence point**, where $[\\text{HA}] = [\\text{A}^-]$ and pH = $pK_{a}$. The equivalence point and any endpoint sit on the steep jump, not the flat stretch, and excess base comes only after the jump.`
          }
        ]
      }
    },
    {
      id: 'ab4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- **Equivalence: moles match.** At equivalence, moles of acid = moles of base; $M_aV_a = M_bV_b$ for a 1:1 reaction.
- **Half-equivalence: pH = pKa.** Halfway, $[\\text{HA}] = [\\text{A}^-]$, so pH = $\\text{p}K_a$: the most tested titration fact.
- **Equivalence pH follows the salt.** Strong + strong gives 7.00; a weak acid gives > 7; a weak base gives < 7.
- **Indicator brackets equivalence.** Pick one whose range (about its $\\text{p}K_a \\pm 1$) contains the equivalence pH.

**Common traps**

- **Equivalence is always neutral.** Only strong + strong lands at 7; acetate's hydrolysis puts a weak acid's above 7.
- **Flat region as equivalence.** The flat buffer region centres on half-equivalence; equivalence is the steepest point.
- **Methyl orange for a weak acid.** Its 3.1–4.4 range misses a basic equivalence point; phenolphthalein fits.
- **One equivalence point per acid.** A polyprotic acid has one equivalence point for each ionizable proton.
`
    }
  ]
};
