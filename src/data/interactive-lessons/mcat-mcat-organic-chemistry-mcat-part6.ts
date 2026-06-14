export const mcatOrgChemPart6Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc6-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 6 of 7 — Spectroscopy (NMR, IR, Mass Spec)**

### IR Spectroscopy — Key Absorptions

| Bond | Wavenumber (cm$^{-1}$) | Shape |
|------|----------------------|-------|
| O-H (alcohol) | 3200-3600 | Broad |
| O-H (carboxylic acid) | 2500-3300 | Very broad |
| N-H | 3300-3500 | Medium |
| C=O | 1700-1750 | Strong, sharp |
| C-O | 1000-1300 | — |

### $^1$H NMR — Quick Guide

- **Chemical shift** ($\\delta$): TMS = 0 ppm (reference)
- Alkyl: 0.5-2.0 ppm
- Next to C=O: 2.0-2.5 ppm
- Next to O or N: 3.0-4.0 ppm
- Aromatic: 6.5-8.0 ppm
- Aldehyde H: 9.0-10.0 ppm
- Carboxylic acid H: 10-12 ppm

### Splitting (n+1 rule)

A proton with $n$ equivalent neighboring protons splits into $n + 1$ peaks.

- Triplet: 2 neighbors
- Quartet: 3 neighbors

### Integration and Signal Counting

- Integration gives relative proton counts for each signal.
- Number of unique proton environments gives number of distinct $^1$H NMR signals.
- Symmetry can reduce the number of observed signals.`
    },
    {
      id: 'oc6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Spectroscopy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A compound shows a strong, sharp IR absorption at 1715 cm$^{-1}$ and a broad absorption at 2500-3300 cm$^{-1}$. It is most likely a:`,
            options: [`Carboxylic acid`, `Ketone`, `Alcohol`, `Amine`],
            correctAnswer: 0,
            explanation: `1715 cm$^{-1}$ = C=O stretch. Broad 2500-3300 cm$^{-1}$ = O-H of carboxylic acid (characteristically very broad due to H-bonding). Together, these are diagnostic for -COOH.`
          },
          {
            question: `In $^1$H NMR of $\\text{CH}_3\\text{CH}_2\\text{OH}$, the $\\text{CH}_2$ peak appears as a:`,
            options: [`Quartet (3 neighbors from $\\text{CH}_3$)`, `Triplet`, `Singlet`, `Doublet`],
            correctAnswer: 0,
            explanation: `The $\\text{CH}_2$ has 3 neighboring H atoms on the $\\text{CH}_3$. By the n+1 rule: $3 + 1 = 4$ peaks = quartet. (The OH neighbor is often ignored due to rapid exchange).`
          },
          {
            question: `A molecular ion peak at m/z 78 in mass spectrometry most directly indicates:`,
            options: [`Boiling point`, `Molecular weight`, `Number of hydrogens`, `Functional-group identity`],
            correctAnswer: 1,
            explanation: `The molecular ion peak (M+) gives the approximate molecular mass of the compound.`
          },
          {
            question: `A proton signal split into a triplet has how many equivalent neighboring protons?`,
            options: [`1`, `2`, `3`, `4`],
            correctAnswer: 1,
            explanation: `Triplet means n+1 = 3, so n = 2 equivalent neighboring protons.`
          },
          {
            question: `In $^1$H NMR, the integration (relative area) of a signal is proportional to:`,
            options: [`The number of equivalent protons giving rise to that signal`, `The number of neighboring protons`, `The chemical shift in ppm`, `The molecular weight of the compound`],
            correctAnswer: 0,
            explanation: `Integration measures the relative number of protons in each environment (e.g., a 3:2 ratio suggests CH$_3$ vs CH$_2$). Splitting (the n+1 rule) reports neighbors, and chemical shift reports the electronic environment — three independent pieces of information.`
          },
          {
            question: `Distinguishing a ketone from a carboxylic acid by IR is easiest using which region, since both show a C=O stretch near 1700-1750 cm$^{-1}$?`,
            options: [`The broad O-H stretch (2500-3300 cm$^{-1}$) present only in the carboxylic acid`, `The C=O stretch position alone`, `The fingerprint region below 600 cm$^{-1}$`, `The absence of any absorption`],
            correctAnswer: 0,
            explanation: `Both functional groups have a strong carbonyl band, so the carbonyl alone cannot separate them. The carboxylic acid additionally shows a very broad O-H stretch from ~2500-3300 cm$^{-1}$ (hydrogen-bonded dimer); a ketone has no such band, so its presence or absence is the deciding clue.`
          }
        ]
      }
    },
    {
      id: 'oc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- IR: Broad O-H (3200-3600 for alcohol, 2500-3300 for acid) and sharp C=O (~1715)
- NMR: Chemical shift tells you environment, splitting tells you neighbors
- n+1 rule: number of peaks = neighbors + 1
- Mass spec: molecular ion peak (M$^+$) gives molecular weight
- Use all clues together: IR functional groups + NMR environment + mass constraints.`
    },
    {
      id: 'oc6-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Spectroscopy (NMR, IR, Mass Spec)

  <details>
  <summary><b>Example 1: Identify a carboxylic acid from IR</b></summary>

  **Question:** A spectrum shows a strong peak near 1715 cm$^{-1}$ and a very broad band from 2500 to 3300 cm$^{-1}$. Which functional group is most likely present?

  **Solution:**
  1. A strong 1715 cm$^{-1}$ signal suggests C=O.
  2. A very broad 2500 to 3300 cm$^{-1}$ signal is characteristic of acidic O-H.
  3. Together, these strongly indicate a **carboxylic acid**.

  **MCAT tip:** Carbonyl plus very broad low O-H region is the classic COOH fingerprint.
  </details>

  <details>
  <summary><b>Example 2: Solve a simple proton NMR pattern</b></summary>

  **Question:** A molecule gives two signals: quartet integrating to 2H at 3.6 ppm, and triplet integrating to 3H at 1.2 ppm. What fragment is present?

  **Solution:**
  1. Quartet (2H) means that proton set sees 3 neighboring equivalent H.
  2. Triplet (3H) means that proton set sees 2 neighboring equivalent H.
  3. Combined pattern is the classic **ethyl group** CH$_3$-CH$_2$.
  4. The 3.6 ppm shift for CH$_2$ suggests it is next to oxygen.

  Likely fragment: **CH$_3$CH$_2$O-**.

  **MCAT tip:** Triplet/quartet with 3H/2H integration is a fast ethyl identifier.
  </details>

  <details>
  <summary><b>Example 3: Use formula and NMR to identify tert-butanol</b></summary>

  **Question:** Formula C$_4$H$_{10}$O. NMR shows a 9H singlet near 1.2 ppm and a broad 1H signal that disappears with D$_2$O. Identify the compound.

  **Solution:**
  1. 9H singlet indicates three equivalent methyl groups attached to one carbon.
  2. D$_2$O-exchangeable 1H indicates an O-H proton.
  3. Structure that matches is (CH$_3$)$_3$C-OH.

  Compound: **tert-butanol (2-methyl-2-propanol)**.

  **MCAT tip:** D$_2$O disappearance confirms exchangeable protons like O-H or N-H.
  </details>

  <details>
  <summary><b>Example 4: Interpret a key mass-spec fragment</b></summary>

  **Question:** A spectrum has M$^+$ at m/z 92 and a strong fragment at m/z 91. What structural motif is likely present?

  **Solution:**
  1. m/z 91 is the tropylium/benzyl cation signal.
  2. This peak strongly suggests a **benzyl-containing structure**.
  3. A common case is toluene-like or alkylbenzene compounds that form the stable C$_7$H$_7^+$ ion.

  **MCAT tip:** m/z 91 is one of the highest-yield aromatic fragmentation clues.
  </details>`
    }
  ]
};
