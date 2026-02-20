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
- Quartet: 3 neighbors`
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
- Mass spec: molecular ion peak (M$^+$) gives molecular weight`
    }
  ]
};
