export const mcatSpectroscopyAssaysPart2Data = {
  topicSlug: 'mcat-lab-methods-spectroscopy-assays-mcat',
  sections: [
    {
      id: 'lm4-intro',
      type: 'text' as const,
      content: `# Lab Methods: Centrifugation, Spectroscopy & Assays

**Part 2 of 3 — Spectroscopy & Beer's Law**

Spectroscopy measures how molecules absorb/emit electromagnetic radiation. Different energies probe different transitions.

### What Each Method Probes

| Method | Energy / region | Probes | Tells you |
|--------|------------------|--------|-----------|
| **UV-Vis** | UV/visible | Electronic transitions (π→π*, conjugation) | Concentration, conjugation |
| **IR** | Infrared | Bond vibrations | Functional groups (C=O ~1700, O–H broad) |
| **NMR** | Radio waves | Nuclear spin ($ {}^{1}H$, $ {}^{13}C$) | Connectivity, H environments |
| **Mass spec** | (ionization, not absorption) | Mass/charge | Molecular weight, fragments |

### Beer–Lambert Law

$$A = \\varepsilon \\, l \\, c$$

- $A$ = absorbance (unitless, log scale)
- $\\varepsilon$ = molar absorptivity $(\\text{M}^{-1}\\text{cm}^{-1})$ — an intrinsic property at a given wavelength
- $l$ = path length (cm)
- $c$ = concentration (M)

**Linearity:** absorbance is DIRECTLY proportional to concentration (and to path length) — the basis of quantitative assays. The relationship breaks down at high absorbance (A > ~1) due to stray light and deviations.

### Absorbance vs. Transmittance

$$A = -\\log_{10}(T) = -\\log_{10}\\!\\left(\\frac{I}{I_0}\\right)$$

- $T = 1$ (100% transmitted) → $A = 0$.
- $T = 0.1$ (10%) → $A = 1$. $T = 0.01$ → $A = 2$.

### Biochemistry Hooks

- **$A_{260}$**: nucleic acids (aromatic bases). **$A_{280}$**: proteins (Trp, Tyr).
- $A_{260}/A_{280}$ ratio ≈ 1.8 → pure DNA; ≈ 2.0 → pure RNA; lower → protein contamination.`
    },
    {
      id: 'lm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Spectroscopy & Beer's Law** 🎯`,
      exercise: {
        questions: [
          {
            question: `A solution has absorbance 0.40 in a 1 cm cuvette. If you dilute it 2-fold (same cuvette), the new absorbance is approximately:`,
            options: [`0.20`, `0.40`, `0.80`, `0.10`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `By Beer's law $A = \\varepsilon l c$, absorbance is directly proportional to concentration. Halving $c$ halves $A$: 0.40 → 0.20. This linear proportionality is exactly what makes UV-Vis a quantitative concentration assay. Keeping 0.40 ignores the dilution, 0.80 multiplies by 2 instead of dividing, and 0.10 divides twice, as if absorbance fell with the square of concentration.`
          },
          {
            question: `Which spectroscopic method would BEST confirm the presence of a carbonyl (C=O) group?`,
            options: [`IR spectroscopy (strong band near 1700 cm⁻¹)`, `UV-Vis spectroscopy (electronic transitions)`, `Mass spectrometry alone (molecular ion peak)`, `Size-exclusion chromatography (elution volume)`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `IR detects bond vibrations; the C=O stretch gives a strong, characteristic band near 1700 $\\text{cm}^{-1}$. UV-Vis reports electronic transitions/conjugation, not specific functional groups, chromatography separates rather than identifies bonds, and a molecular ion peak gives mass, not which functional groups are present.`
          },
          {
            question: `A purified nucleic-acid sample gives an $A_{260}/A_{280}$ ratio of 1.5. This most likely indicates:`,
            options: [`Protein contamination of the sample`, `A pure, double-stranded DNA sample`, `RNA contamination of a DNA sample`, `A highly concentrated DNA sample`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Pure DNA gives $A_{260}/A_{280}$ ≈ 1.8 and pure RNA ≈ 2.0. Proteins absorb strongly at 280 nm (Trp/Tyr), so contamination raises $A_{280}$ and DROPS the ratio. A value of 1.5 signals significant protein contamination. RNA would push the ratio up toward 2.0, and concentration changes both absorbances together, leaving the ratio unchanged.`
          }
        ]
      }
    },
    {
      id: 'lm4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Spectroscopy

**Problem 1.** A dye has $\\varepsilon = 5000$ $\\text{M}^{-1}\\text{cm}^{-1}$ at 500 nm. In a 1 cm cuvette its absorbance is 0.75.

- **(a)** What is the dye's concentration?
- **(b)** Can this reading be trusted, and what would you do if A had been above 1?

**(a) Concentration.** $c = \\dfrac{A}{\\varepsilon l} = \\dfrac{0.75}{5000 \\times 1} = 1.5 \\times 10^{-4} \\text{ M}$

**(b) Linear range.** Yes: $A = 0.75$ lies in the linear range (≈ 0.1–1.0), and the stated path length is 1 cm (always check it). At $A > 1$, dilute the sample and remeasure.

**Problem 2.** Standards give A = 0.10, 0.20 and 0.30 at c = 2, 4 and 6 µM (path 1 cm). An unknown reads A = 0.25.

- **(a)** What is the slope of the standard curve?
- **(b)** What is $\\varepsilon$, in $\\text{M}^{-1}\\text{cm}^{-1}$?
- **(c)** What is the unknown's concentration?
- **(d)** Why use a standard curve rather than a tabulated $\\varepsilon$?

**(a) Slope.** The data are linear: A/c = 0.10/2 = 0.05 per µM, and that slope equals $\\varepsilon l$.

**(b) Molar absorptivity.** With slope $= 0.05$ from (a) and $l = 1$ cm, $\\varepsilon = 0.05$ µ$\\text{M}^{-1}\\text{cm}^{-1}$ = $5\\times 10^{4}$ $\\text{M}^{-1}\\text{cm}^{-1}$.

**(c) Unknown.** $c = A/\\text{slope} = 0.25/0.05 = 5$ µM.

**(d) Why a standard curve.** It captures $\\varepsilon l$ empirically for your exact instrument and conditions, so concentration is read directly off the line.

**Problem 3.** A sample transmits 10% of the incident light. Use $A = -\\log_{10}(T)$.

- **(a)** What is its absorbance?
- **(b)** What would the absorbance be at 1% transmittance?
- **(c)** What does each extra unit of absorbance mean for the transmitted light?

**(a) 10% transmitted.** $T = 0.10 \\Rightarrow A = -\\log_{10}(0.10) = 1.0$

**(b) 1% transmitted.** $T = 0.01 \\Rightarrow A = -\\log_{10}(0.01) = 2.0$

**(c) A log scale.** Absorbance is logarithmic: each unit of A means a 10× drop in transmitted light, so $A = 2$ lets only 1% through.`
    },
    {
      id: 'lm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Beer–Lambert law.** $A = \\varepsilon l c$: absorbance is linear in concentration and path length, up to about $A = 1$.
- **Absorbance is logarithmic.** $A = -\\log_{10} T$: 10% transmitted gives $A = 1$, and 1% gives $A = 2$.
- **Match spectrum to question.** UV-Vis: conjugation and concentration; IR: functional groups; NMR: H and C environments; MS: mass.
- **$A_{260}/A_{280}$ purity.** Nucleic acids absorb at 260 nm, proteins at 280 nm; pure DNA ≈ 1.8, pure RNA ≈ 2.0.

**Common traps**

- **Reading A as linear in T.** Each unit of absorbance is a tenfold drop in transmitted light, not a fixed step.
- **Trusting A above 1.** Beyond about $A = 1$ the line bends; dilute the sample and remeasure.
- **Low ratio means RNA.** A ratio below 1.8 signals protein contamination; RNA would push it up toward 2.0.
- **UV-Vis for a carbonyl.** UV-Vis reports conjugation; the C=O stretch near 1700 $\\text{cm}^{-1}$ is read on IR.`
    }
  ]
};
