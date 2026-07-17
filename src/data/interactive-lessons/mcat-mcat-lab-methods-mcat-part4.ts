export const mcatLabMethodsPart4Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm4-intro',
      type: 'text' as const,
      content: `# Laboratory Methods & Separations

**Part 4 of 5 — Spectroscopy & Beer's Law (ULTRA HIGH YIELD)**

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
- $\\varepsilon$ = molar absorptivity $(M^{-1}cm^{-1})$ — an intrinsic property at a given wavelength
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
            explanation: `By Beer's law $A = \\varepsilon l c$, absorbance is directly proportional to concentration. Halving $c$ halves $A$: 0.40 → 0.20. This linear proportionality is exactly what makes UV-Vis a quantitative concentration assay.`
          },
          {
            question: `Which spectroscopic method would BEST confirm the presence of a carbonyl (C=O) group?`,
            options: [`IR spectroscopy (strong absorption near 1700 $cm^{-1}$)`, `UV-Vis spectroscopy`, `Size-exclusion chromatography`, `Mass spectrometry alone`],
            correctAnswer: 0,
            explanation: `IR detects bond vibrations; the C=O stretch gives a strong, characteristic band near 1700 $cm^{-1}$. UV-Vis reports electronic transitions/conjugation, not specific functional groups, and chromatography separates rather than identifies bonds.`
          },
          {
            question: `A purified nucleic-acid sample gives an $A_{260}/A_{280}$ ratio of 1.5. This most likely indicates:`,
            options: [`Protein contamination of the sample`, `Pure double-stranded DNA`, `Pure RNA`, `An empty cuvette`],
            correctAnswer: 0,
            explanation: `Pure DNA gives $A_{260}/A_{280}$ ≈ 1.8 and pure RNA ≈ 2.0. Proteins absorb strongly at 280 nm (Trp/Tyr), so contamination raises $A_{280}$ and DROPS the ratio. A value of 1.5 signals significant protein contamination.`
          }
        ]
      }
    },
    {
      id: 'lm4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Spectroscopy

<details>
<summary><b>Example 1: Solve for concentration with Beer's law</b></summary>

**Question:** A dye has $\\varepsilon = 5000$ $M^{-1}cm^{-1}$ at 500 nm. In a 1 cm cuvette its absorbance is 0.75. Find the concentration.

**Solution:**
$$c = \\frac{A}{\\varepsilon l} = \\frac{0.75}{5000 \\times 1} = 1.5 \\times 10^{-4} \\text{ M} \\checkmark$$

**MCAT note:** Always check path length (often 1 cm but not always) and that A is in the linear range (≈ 0.1–1.0). At A > 1, dilute and remeasure.
</details>

<details>
<summary><b>Example 2: Convert transmittance to absorbance</b></summary>

**Question:** A sample transmits 10% of incident light. What is its absorbance? What about 1% transmittance?

**Solution:**
$$A = -\\log_{10}(T)$$
- $T = 0.10 \\Rightarrow A = -\\log_{10}(0.10) = 1.0$ ✓
- $T = 0.01 \\Rightarrow A = -\\log_{10}(0.01) = 2.0$ ✓

**Key idea:** Absorbance is logarithmic — each unit of A means a 10× drop in transmitted light. A = 2 lets only 1% through.
</details>

<details>
<summary><b>Example 3: Build a standard curve and read an unknown</b></summary>

**Question:** Standards give A = 0.10, 0.20, 0.30 at c = 2, 4, 6 µM (path 1 cm). An unknown reads A = 0.25. Find its concentration and $\\varepsilon$.

**Solution:**
1. The data are linear: A/c = 0.10/2 = 0.05 per µM → slope = $\\varepsilon l$. With $l = 1$ cm, $\\varepsilon = 0.05$ µ$M^{-1}cm^{-1}$ = $5\\times 10^{4}$ $M^{-1}cm^{-1}$. ✓
2. Unknown: $c = A/\\text{slope} = 0.25/0.05 = 5$ µM. ✓

**Why a standard curve:** It empirically captures $\\varepsilon l$ for your exact instrument and conditions, so you read concentration directly off the line.
</details>`
    },
    {
      id: 'lm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Beer–Lambert: $A = \\varepsilon l c$. Absorbance ∝ concentration (linear, valid ~A 0.1–1).
- $A = -\\log_{10}(T)$: T = 10% → A = 1; T = 1% → A = 2 (logarithmic).
- UV-Vis = electronic/conjugation & quantitation; IR = functional groups (C=O ~1700 $cm^{-1}$); NMR = H/C environments; MS = molecular weight.
- $A_{260}$ = nucleic acids, $A_{280}$ = protein; $A_{260}/A_{280}$ ≈ 1.8 (DNA), 2.0 (RNA); low = protein contamination.`
    }
  ]
};
