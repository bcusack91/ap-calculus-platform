export const mcatOrgChemPart5Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc5-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 5 of 7 — Aromatic Chemistry & Lab Techniques**

### Aromaticity Rules (Huckel)

Must have: planar ring, conjugated $\\pi$ system, $4n + 2$ $\\pi$ electrons ($n = 0, 1, 2...$)

- Benzene: 6 $\\pi$ electrons ($n = 1$) ✓
- Cyclopentadienyl anion: 6 $\\pi$ electrons ✓
- Cyclooctatetraene: 8 $\\pi$ electrons → anti-aromatic (if planar)

### Electrophilic Aromatic Substitution (EAS)

| Substituent type | Effect on ring | Directs to |
|-----------------|----------------|-----------|
| $-OH$, $-NH_2$, $-OR$ | Activating | ortho/para |
| $-CH_3$, alkyl | Activating (weak) | ortho/para |
| $-NO_2$, $-CF_3$ | Deactivating | meta |
| Halogens ($-Cl$, $-Br$) | Deactivating BUT | ortho/para |

### Lab Techniques on the MCAT

- **Distillation**: Separates by boiling point
- **Extraction**: Separates by solubility (aqueous vs. organic layer)
- **Chromatography**: Separates by polarity (TLC, column)
- **Recrystallization**: Purifies by differential solubility at different temps`
    },
    {
      id: 'oc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Aromatics & Lab** 🎯',
      exercise: {
        questions: [
          {
            question: 'Nitration of toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$) primarily gives:',
            options: ['ortho- and para-nitrotoluene ($-CH_3$ is ortho/para director)', 'meta-nitrotoluene', 'Only para-nitrotoluene', 'No reaction — toluene is deactivated'],
            correctAnswer: 0,
            explanation: 'Methyl ($-CH_3$) is an electron-donating group (activating, ortho/para director). You get a mixture of ortho and para products.'
          }
        ]
      }
    },
    {
      id: 'oc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Aromaticity: planar + conjugated + $4n+2$ $\\pi$ electrons
- Activators → ortho/para; Deactivators → meta (except halogens: deactivating but ortho/para)
- Know lab separation techniques — the MCAT loves "which technique would you use to..." questions`
    }
  ]
};
