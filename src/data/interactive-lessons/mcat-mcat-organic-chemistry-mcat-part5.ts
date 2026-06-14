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
- **Recrystallization**: Purifies by differential solubility at different temps

### EAS Logic Shortcuts

- Activating groups stabilize the sigma complex and speed substitution.
- Deactivating groups destabilize it and slow substitution.
- Halogens are the classic exception: deactivating by induction but ortho/para directing by resonance.`
    },
    {
      id: 'oc5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Aromatics & Lab** 🎯`,
      exercise: {
        questions: [
          {
            question: `Nitration of toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$) primarily gives:`,
            options: [`ortho- and para-nitrotoluene ($-CH_3$ is ortho/para director)`, `meta-nitrotoluene`, `Only para-nitrotoluene`, `No reaction — toluene is deactivated`],
            correctAnswer: 0,
            explanation: `Methyl ($-CH_3$) is an electron-donating group (activating, ortho/para director). You get a mixture of ortho and para products.`
          },
          {
            question: `A ring bearing a nitro group ($-NO_2$) will direct incoming electrophiles primarily to:`,
            options: [`Ortho`, `Para`, `Meta`, `No substitution positions`],
            correctAnswer: 2,
            explanation: `Strongly deactivating electron-withdrawing groups like nitro are meta directors in electrophilic aromatic substitution.`
          },
          {
            question: `For TLC on silica gel, the compound that travels the farthest generally is:`,
            options: [`Most polar`, `Least polar`, `Highest molecular weight`, `Most aromatic`],
            correctAnswer: 1,
            explanation: `Silica is polar, so less polar compounds interact less with the stationary phase and move farther with the mobile phase.`
          },
          {
            question: `Benzene satisfies Hückel's rule for aromaticity because it is planar, fully conjugated, and contains:`,
            options: [`6 $\\pi$ electrons, fitting $4n+2$ with $n=1$`, `8 $\\pi$ electrons`, `4 $\\pi$ electrons`, `12 $\\sigma$ electrons`],
            correctAnswer: 0,
            explanation: `Aromaticity requires a planar, cyclic, fully conjugated ring with $4n+2$ $\\pi$ electrons. Benzene has 6 $\\pi$ electrons ($n=1$). Cyclooctatetraene (8 $\\pi$ electrons) would be antiaromatic if planar, so it puckers to become nonaromatic.`
          },
          {
            question: `You need to separate two organic liquids whose boiling points differ by about 40 °C and which do not react. The best technique is:`,
            options: [`Distillation (separation by boiling point)`, `Acid-base extraction`, `Recrystallization`, `Thin-layer chromatography`],
            correctAnswer: 0,
            explanation: `Distillation separates miscible liquids by differences in boiling point; a ~40 °C gap is easily resolved by simple distillation. Extraction exploits solubility/acid-base differences, and recrystallization purifies solids — neither is ideal for separating two liquids.`
          },
          {
            question: `An amino (–NH$_2$) group on benzene is an ortho/para-directing activator. This is because the nitrogen lone pair:`,
            options: [`Donates electron density into the ring, stabilizing the ortho/para sigma complex`, `Withdraws electron density, deactivating the ring`, `Has no electronic effect`, `Makes the ring antiaromatic`],
            correctAnswer: 0,
            explanation: `Lone-pair donors (–NH$_2$, –OH, –OR) push electron density into the ring through resonance, which best stabilizes the cationic intermediate when the electrophile adds ortho or para. This both activates the ring and directs ortho/para. Strong electron-withdrawing groups (–NO$_2$) do the opposite: deactivate and direct meta.`
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
- Know lab separation techniques — the MCAT loves "which technique would you use to..." questions
- Treat substitution patterns as resonance/inductive effects, not memorization alone.`
    },
    {
      id: 'oc5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Aromatic Chemistry & Lab Techniques

<details>
<summary><b>Example 1: Predict EAS products with a halogen substituent</b></summary>

**Question:** Chlorobenzene is nitrated with HNO$_3$/H$_2$SO$_4$. Which major products form?

**Solution:**
1. Chlorine is deactivating by induction but ortho/para directing by resonance.
2. Nitration therefore occurs mainly at ortho and para positions.
3. Sterics favor para over ortho.

Major products: **o-nitrochlorobenzene and p-nitrochlorobenzene** (para usually higher).

**MCAT tip:** Halogens are the classic exception: deactivating yet ortho/para directing.
</details>

<details>
<summary><b>Example 2: Choose a practical separation method</b></summary>

**Question:** A mixture contains benzoic acid, anisole, and toluene. Best method to isolate benzoic acid?

**Solution:**
1. Benzoic acid is acidic and can be converted to water-soluble benzoate.
2. Add NaHCO$_3$ or NaOH to extract benzoic acid into the aqueous layer.
3. Separate layers, then acidify aqueous phase to precipitate benzoic acid.

Best method: **acid-base extraction**.

**MCAT tip:** If one component is acidic or basic, extraction is often superior to distillation/TLC for bulk separation.
</details>

<details>
<summary><b>Example 3: Determine aromaticity correctly</b></summary>

**Question:** Is cycloheptatriene aromatic?

**Solution:**
1. Aromaticity needs planarity, full conjugation, and $4n+2$ pi electrons.
2. Neutral cycloheptatriene contains an sp$^3$ carbon, so conjugation is interrupted.
3. Therefore it is **nonaromatic**.

Related high-yield contrast: the tropylium cation (C$_7$H$_7^+$) is aromatic with 6 pi electrons.

**MCAT tip:** Huckel count alone is not enough; check continuous p-orbital overlap.
</details>`
    }
  ]
};
