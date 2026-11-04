export const mcatTitrationsEqPart1Data = {
  topicSlug: 'mcat-general-chemistry-titrations-equilibrium-mcat',
  sections: [
    {
      id: 'ab4-intro',
      type: 'text' as const,
      content: `# Titrations, Equilibrium & Solubility

**Part 1 of 2 — Acid-Base Titrations**

**Where this fits.** The *Acids, Bases & Buffers* lesson covered pH, $K_a$ and $K_b$, the Henderson–Hasselbalch equation and how buffers resist pH change. This lesson puts those tools to work on titration curves, then widens to equilibrium in general: $K_c$ and $K_p$, Le Chatelier's principle and solubility ($K_{sp}$).

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
- **Buffer region:** HA and $\\text{A}^-$ coexist, so the Henderson–Hasselbalch equation gives the pH: $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$
- **At half-equivalence:** $[\\text{HA}] = [\\text{A}^-]$ → pH = $pK_{a}$ ← **MCAT key fact**
- **At equivalence:** pH > 7 (conjugate base hydrolyzes: $\\text{A}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HA} + \\text{OH}^-$)
- **After equivalence:** pH from excess strong base

### Weak Base + Strong Acid

The weak-acid curve turned upside down: it starts high and FALLS, pH = $\\text{p}K_a$ of the conjugate acid $\\text{BH}^+$ at half-equivalence, and pH < 7 at equivalence (worked through after the first practice set).

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
| Methyl red | Red | Yellow | pH 4.4–6.2 |
| Litmus | Red | Blue | pH 4.5–8.3 |
| Bromothymol blue | Yellow | Blue | pH 6.0–7.6 |

**Choosing the right indicator:** Pick one whose transition range includes the equivalence point pH.
- Strong acid + strong base: any common indicator, because the near-vertical jump spans about pH 4–10
- Weak acid + strong base: equivalence point pH > 7 → use phenolphthalein
- Weak base + strong acid: equivalence point pH < 7 (about 5 for $NH_3$ + HCl) → an indicator changing on the acidic side, such as methyl red (4.4–6.2); methyl orange suits only a very acidic endpoint
`
    },
    {
      id: 'ab4-worked',
      type: 'text' as const,
      content: `### Worked Example — Titrating Acetic Acid with NaOH

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

**(b) Hydroxide.** Acetate is a weak base, so use the weak-base shortcut $[\\text{OH}^-] \\approx \\sqrt{K_b C}$ (valid because so little of the base reacts that $C$ barely changes), with $K_b = K_w/K_a \\approx 5.6 \\times 10^{-10}$ and $C = 0.0500$ M from (a): $[\\text{OH}^-] \\approx \\sqrt{2.8 \\times 10^{-11}} = \\sqrt{28 \\times 10^{-12}} \\approx 5.3 \\times 10^{-6}$ M.

**(c) pOH, then pH.** With $[\\text{OH}^-] \\approx 5.3 \\times 10^{-6}$ M from (b): $\\text{pOH} = 6 - \\log 5.3 \\approx 6 - 0.72 = 5.28$, so $\\text{pH} = 14 - \\text{pOH} \\approx 8.72$.

**(d) Indicator.** pH 8.72 lies inside phenolphthalein's 8.2–10.0 range; methyl orange (3.1–4.4) would change colour long before equivalence.
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
      id: 'ab4-mirror',
      type: 'text' as const,
      content: `## The Weak-Base Mirror: Titrating a Weak Base with Strong Acid

Titrating ammonia or an amine with HCl flips the weak-acid curve upside down; the same tools apply with the roles swapped:

| Stage | Weak acid + NaOH | Weak base + HCl |
|---|---|---|
| Start | pH from $\\sqrt{K_a C}$ | pOH from $\\sqrt{K_b C}$: the pH starts HIGH |
| Buffer region | HA and $\\text{A}^-$ | B and $\\text{BH}^+$, so $\\text{pH} = \\text{p}K_a(\\text{BH}^+) + \\log([\\text{B}]/[\\text{BH}^+])$ |
| Half-equivalence | pH = $\\text{p}K_a$ | pOH = $\\text{p}K_b$, so pH = $14 - \\text{p}K_b$, the $\\text{p}K_a$ of $\\text{BH}^+$ |
| Equivalence | all $\\text{A}^-$: pH > 7 | all $\\text{BH}^+$, a weak acid with $K_a = K_w/K_b$: pH < 7 |

Two things the exam checks:

- **The pH falls**, so the jump runs DOWNWARD through an acidic equivalence point (about pH 5 for ammonia); the indicator must change colour there: methyl red (4.4–6.2), not phenolphthalein.
- **The half-equivalence pH is a $\\text{p}K_a$, not a $\\text{p}K_b$.** Reading pH 10.64 at the midpoint of a methylamine titration gives $\\text{p}K_a(\\text{CH}_3\\text{NH}_3^+) = 10.64$; the base's own $\\text{p}K_b = 14 - 10.64 = 3.36$.

## Polyprotic Titrations

Titrating $\\text{H}_2\\text{CO}_3$ or $\\text{H}_3\\text{PO}_4$ with NaOH gives **multiple equivalence points**. The number of equivalence points = number of ionizable protons.

For $\\text{H}_3\\text{PO}_4$ + NaOH:
- 1st equiv. point: $\\text{H}_3\\text{PO}_4 \\to \\text{NaH}_2\\text{PO}_4$
- 2nd equiv. point: $\\text{NaH}_2\\text{PO}_4 \\to \\text{Na}_2\\text{HPO}_4$
- 3rd equiv. point: $\\text{Na}_2\\text{HPO}_4 \\to \\text{Na}_3\\text{PO}_4$

Each stage has its own buffer region, with its own $\\text{p}K_a$ at the half-step; the table below reads a two-proton curve landmark by landmark.

<!-- yield:low -->
- In practice the third equivalence point of $\\text{H}_3\\text{PO}_4$ is barely visible in water: $\\text{p}K_{a3} \\approx 12.3$ is so close to the pH of the NaOH titrant that the curve shows almost no jump there.
<!-- /yield -->

### Reading a Polyprotic Curve

A diprotic acid $\\text{H}_2\\text{A}$ titrated with NaOH shows two jumps, the second at exactly TWICE the volume of the first, because each proton needs the same moles of base. Between the jumps the curve is a staircase of buffer regions, read off without calculation:

| Volume of base | What is in the flask | pH |
|---|---|---|
| none | $\\text{H}_2\\text{A}$ | from $\\sqrt{K_{a1} C}$ |
| halfway to the 1st jump | $\\text{H}_2\\text{A}$ and $\\text{HA}^-$, 1:1 | $\\text{p}K_{a1}$ |
| 1st equivalence | $\\text{HA}^-$ (amphiprotic) | $(\\text{p}K_{a1} + \\text{p}K_{a2})/2$ |
| halfway between the jumps | $\\text{HA}^-$ and $\\text{A}^{2-}$, 1:1 | $\\text{p}K_{a2}$ |
| 2nd equivalence | $\\text{A}^{2-}$ | > 7, since $\\text{A}^{2-}$ hydrolyzes |

The two jumps are distinct only when the $\\text{p}K_a$ values differ by about 3 or more; closer than that, the first jump is faint. Read backwards, the volume of the first jump gives the moles of acid and the pH at each half-step gives one $\\text{p}K_a$.`
    },
    {
      id: 'ab4-worked2',
      type: 'text' as const,
      content: `### Worked Example — Ammonia with HCl and a Diprotic Curve

**Problem 1.** $30.0$ mL of $0.100$ M ammonia ($K_b = 1.8 \\times 10^{-5}$, $\\text{p}K_b = 4.74$) is titrated with $0.100$ M HCl. Methyl red changes colour over pH 4.4–6.2 and phenolphthalein over 8.2–10.0.

- **(a)** What volume of HCl reaches the equivalence point?
- **(b)** What is the pH at the half-equivalence point?
- **(c)** What is the pH at the equivalence point?
- **(d)** Which of the two indicators suits this titration?

**(a) Equivalence volume.** Moles of base $= (0.0300\\text{ L})(0.100\\text{ M}) = 3.00$ mmol, which needs $3.00$ mmol of $\\text{H}^+$: $V_a = 3.00\\text{ mmol}/0.100\\text{ M} = 30.0$ mL.

**(b) Half-equivalence.** At $15.0$ mL, half the $\\text{NH}_3$ has become $\\text{NH}_4^+$, so $[\\text{NH}_3] = [\\text{NH}_4^+]$ and $\\text{pOH} = \\text{p}K_b = 4.74$: $\\text{pH} = 14.00 - 4.74 = 9.26$, the $\\text{p}K_a$ of $\\text{NH}_4^+$.

**(c) Equivalence.** All $3.00$ mmol is now $\\text{NH}_4^+$ in $60.0$ mL, so $C = 0.0500$ M. It is a weak acid with $K_a = K_w/K_b = (1.0 \\times 10^{-14})/(1.8 \\times 10^{-5}) \\approx 5.6 \\times 10^{-10}$: $[\\text{H}^+] \\approx \\sqrt{(5.6 \\times 10^{-10})(0.0500)} \\approx 5.3 \\times 10^{-6}$ M, so $\\text{pH} \\approx 5.28$, below 7.

**(d) Indicator.** The equivalence pH 5.28 from (c) lies inside methyl red's 4.4–6.2; phenolphthalein loses its colour as the pH passes 8.2, a full unit below the 9.26 of (b), when roughly a tenth of the ammonia is still untitrated: its endpoint comes too early.

**Problem 2.** $20.0$ mL of $0.100$ M diprotic acid $\\text{H}_2\\text{A}$ ($\\text{p}K_{a1} = 4.0$, $\\text{p}K_{a2} = 9.0$) is titrated with $0.100$ M NaOH and the pH is recorded as a curve.

- **(a)** At what volumes do the two equivalence points fall?
- **(b)** What is the pH after $10.0$ mL of NaOH?
- **(c)** What is the pH at the first equivalence point, and which species is present there?
- **(d)** Halfway between the two equivalence points, which two species are present in equal amounts, and what is the pH?

**(a) Two jumps.** The acid is $2.00$ mmol, so each proton takes $2.00$ mmol of $\\text{OH}^-$, or $20.0$ mL: the jumps come at $20.0$ mL and $40.0$ mL, the second at exactly twice the first.

**(b) First buffer region.** $10.0$ mL is halfway to the first equivalence point from (a): $1.00$ mmol of $\\text{H}_2\\text{A}$ has become $\\text{HA}^-$ and $1.00$ mmol remains, so $\\text{pH} = \\text{p}K_{a1} = 4.0$.

**(c) The amphiprotic midpoint.** At the first jump every molecule is the amphiprotic $\\text{HA}^-$, so the pH sits midway between the two constants: $(4.0 + 9.0)/2 = 6.5$, neither $\\text{p}K_a$ alone.

**(d) Second buffer region.** At $30.0$ mL, halfway between the jumps from (a), half of the $\\text{HA}^-$ has become $\\text{A}^{2-}$: $[\\text{HA}^-] = [\\text{A}^{2-}]$ and $\\text{pH} = \\text{p}K_{a2} = 9.0$.`
    },
    {
      id: 'ab4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Weak-Base and Polyprotic Curves** 🎯`,
      exercise: {
        questions: [
          {
            question: `A weak base B has $\\text{p}K_b = 4.20$ and is titrated with HCl. What is the pH at the half-equivalence point?`,
            options: [`9.80`, `4.20`, `7.00`, `2.10`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `At half-equivalence $[\\text{B}] = [\\text{BH}^+]$, so pOH = $\\text{p}K_b$ = 4.20 and pH = 14.00 − 4.20 = 9.80, which is the $\\text{p}K_a$ of $\\text{BH}^+$. Reporting 4.20 gives the pOH instead of the pH, 7.00 is where only a strong acid–strong base equivalence lands, and 2.10 halves the $\\text{p}K_b$ for no reason.`
          },
          {
            question: `Aniline ($K_b \\approx 4 \\times 10^{-10}$) and ammonia ($K_b \\approx 2 \\times 10^{-5}$), both 0.10 M, are titrated with HCl. Compared with ammonia's, the pH at aniline's equivalence point is:`,
            options: [
              `Lower, since the weaker base leaves the stronger conjugate acid`,
              `Higher, since the weaker base leaves the weaker conjugate acid`,
              `The same, 7.00, since both bases are fully neutralized`,
              `The same, since the equivalence pH depends only on concentration`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `At equivalence each flask holds only the conjugate acid $\\text{BH}^+$, with $K_a = K_w/K_b$: the weaker the base, the larger the $K_a$ of its conjugate acid and the lower the pH. Anilinium ($K_a \\approx 2.5 \\times 10^{-5}$) gives a pH near 3 at this concentration, ammonium ($K_a \\approx 5.6 \\times 10^{-10}$) about 5.3. Neither lands at 7, since both conjugate acids donate protons to water, and concentration matters only once $K_a$ is fixed.`
          },
          {
            question: `On a diprotic acid's titration curve the first equivalence point comes at 16.0 mL of NaOH. Which two species are present in equal amounts after 24.0 mL?`,
            options: [
              `$\\text{HA}^-$ and $\\text{A}^{2-}$`,
              `$\\text{H}_2\\text{A}$ and $\\text{HA}^-$`,
              `$\\text{H}_2\\text{A}$ and $\\text{A}^{2-}$`,
              `$\\text{A}^{2-}$ and $\\text{OH}^-$`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The second equivalence point falls at 32.0 mL, twice the first, so 24.0 mL is halfway between the jumps: half of the $\\text{HA}^-$ formed at the first jump has become $\\text{A}^{2-}$, and pH = $\\text{p}K_{a2}$. The $\\text{H}_2\\text{A}$/$\\text{HA}^-$ pair is the FIRST buffer region, at 8.0 mL; $\\text{H}_2\\text{A}$ and $\\text{A}^{2-}$ never coexist in quantity, and excess $\\text{OH}^-$ appears only past 32.0 mL.`
          },
          {
            question: `Carbonic acid ($\\text{p}K_{a1} = 6.4$, $\\text{p}K_{a2} = 10.3$) is titrated with NaOH. What is the approximate pH at the first equivalence point?`,
            options: [`8.4`, `6.4`, `10.3`, `3.9`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `At the first equivalence point the flask holds amphiprotic $\\text{HCO}_3^-$, whose pH is the average of the two constants: (6.4 + 10.3)/2 ≈ 8.4. The values 6.4 and 10.3 are the pH at the two half-equivalence points, not at the first jump, and 3.9 is the difference between the constants, which has no meaning on the curve.`
          }
        ]
      }
    },
    {
      id: 'ab4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **Equivalence: moles match.** $n_aM_aV_a = n_bM_bV_b$; a diprotic acid's second equivalence volume is exactly twice its first.
- **Half-equivalence: pH = pKa.** Halfway, $[\\text{HA}] = [\\text{A}^-]$ so pH = $\\text{p}K_a$; for a weak base, pH = $\\text{p}K_a$ of $\\text{BH}^+$ = 14 − $\\text{p}K_b$.
- **Equivalence pH follows the salt.** Strong + strong gives 7.00; a weak acid gives > 7 ($\\text{A}^-$ hydrolyzes); a weak base gives < 7 ($\\text{BH}^+$).
- **Indicator brackets equivalence.** Pick one whose range (its $\\text{p}K_a \\pm 1$) contains the equivalence pH: phenolphthalein above 7, methyl red below.

**Common traps**

- **Equivalence is always neutral.** Only strong + strong lands at 7; acetate's hydrolysis puts a weak acid's above 7, ammonium's below.
- **Flat region as equivalence.** The flat buffer region centres on half-equivalence; equivalence is the steepest point.
- **Reading a pKb as the pH.** The midpoint of a weak-base curve shows pH = 14 − $\\text{p}K_b$, the $\\text{p}K_a$ of $\\text{BH}^+$, not $\\text{p}K_b$ itself.
- **pKa2 at the first jump.** The first equivalence point of a diprotic acid sits at the AVERAGE of the two $\\text{p}K_a$ values; $\\text{p}K_{a2}$ is read halfway to the second.
`
    }
  ]
};
