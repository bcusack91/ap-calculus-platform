export const mcatAminoAcidsPart2Data = {
  topicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  sections: [
    {
      id: 'aa2-intro',
      type: 'text' as const,
      content: `# Amino Acids & Proteins

**Part 2 of 4 — Acid-Base Chemistry, pKa & Isoelectric Point**

### Henderson-Hasselbalch: The One Equation You Must Own

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

- When $pH = pK_a$: 50/50 mix of protonated and deprotonated forms (maximum buffering).
- When $pH > pK_a$ (by ~2 units): the group is essentially **deprotonated**.
- When $pH < pK_a$ (by ~2 units): the group is essentially **protonated**.

### Benchmark pKa Values (approximate — learn the pattern, not decimals)

| Group | pKa | State at pH 7 |
|-------|-----|---------------|
| Backbone $\\alpha$-COOH | ~2 | $-COO^{-}$ |
| Asp / Glu side chains | ~4 | $-COO^{-}$ (negative) |
| His imidazole | ~6 | Mostly neutral (deprotonated) |
| Cys thiol | ~8 | Mostly $-SH$ (neutral) |
| Backbone $\\alpha$-NH$_3^+$ | ~9-10 | $-NH_{3}^{+}$ |
| Tyr phenol | ~10 | Neutral $-OH$ |
| Lys side chain | ~10.5 | $-NH_{3}^{+}$ (positive) |
| Arg guanidinium | ~12.5 | Positive |

### Isoelectric Point (pI)

The pI is the pH at which the molecule's **net charge is zero**. For a simple amino acid:

$$pI = \\frac{pK_{a1} + pK_{a2}}{2}$$

...where the two pKa values are those **flanking the neutral (zwitterionic) species**:

- **Neutral side chain** (e.g., Gly, Ala): average the two backbone pKa values. $pI = (2.3 + 9.6)/2 \\approx 6$.
- **Acidic** (Asp, Glu): average the **two lowest** pKa values (the two carboxyls). pI ~3.
- **Basic** (Lys, Arg, His): average the **two highest** pKa values (the two amines). pI ~10 (Lys), ~11 (Arg), ~7.6 (His).

### Titration Curves

A titration curve for an amino acid shows one **buffering plateau per ionizable group** (flat region centered at each pKa) and steep rises between them. The pI sits on a steep region for neutral amino acids — halfway between the two pKa values — NOT at a plateau. Amino acids with ionizable side chains show **three** plateaus.

### Why This Matters Experimentally

- **Electrophoresis / isoelectric focusing:** at pH > pI a protein is net negative (migrates to the anode); at pH < pI it is net positive; at pH = pI it does not migrate and is least soluble (proteins often precipitate at their pI).
- **Ion-exchange chromatography:** choose the column based on the protein's charge at the working pH (next-level detail in Part 4).`
    },
    {
      id: 'aa2-quiz1',
      type: 'multiple-choice' as const,
      content: `**pKa, Buffers & pI** 🎯`,
      exercise: {
        questions: [
          {
            question: `A glutamate side chain has pKa 4.3. At pH 6.3, the ratio of deprotonated to protonated forms is approximately:`,
            options: [`1:100`, `1:1`, `10:1`, `100:1`],
            correctAnswer: 3,
            explanation: `Henderson-Hasselbalch: $pH - pK_a = \\log([A^-]/[HA]) = 6.3 - 4.3 = 2$, so the ratio is $10^{2} = 100:1$ in favor of the deprotonated carboxylate.`
          },
          {
            question: `Glycine has pKa values of 2.3 ($\\alpha$-COOH) and 9.6 ($\\alpha$-NH$_3^+$). Its isoelectric point is approximately:`,
            options: [`2.3`, `5.95`, `9.6`, `11.9`],
            correctAnswer: 1,
            explanation: `For an amino acid with a non-ionizable side chain, $pI = (pK_{a1} + pK_{a2})/2 = (2.3 + 9.6)/2 = 5.95$. At this pH the zwitterion dominates and net charge is zero.`
          },
          {
            question: `Aspartate has pKa values of 2.1 ($\\alpha$-COOH), 3.9 (side chain COOH), and 9.8 ($\\alpha$-NH$_3^+$). Its pI is calculated as:`,
            options: [`(2.1 + 3.9)/2 = 3.0`, `(3.9 + 9.8)/2 = 6.85`, `(2.1 + 9.8)/2 = 5.95`, `(2.1 + 3.9 + 9.8)/3 = 5.3`],
            correctAnswer: 0,
            explanation: `For acidic amino acids, average the two LOWEST pKa values — the ones flanking the species with zero net charge. Averaging all three or the wrong pair is the classic trap.`
          },
          {
            question: `A protein with pI = 8.5 is placed in a buffer at pH 6.0 and subjected to electrophoresis. It will:`,
            options: [`Migrate toward the cathode (negative electrode) because it is net positive`, `Migrate toward the anode because it is net negative`, `Not migrate, because pH is below pI`, `Precipitate immediately, because it is at its pI`],
            correctAnswer: 0,
            explanation: `At pH (6.0) below pI (8.5), the protein is more protonated than at its neutral point, giving a net POSITIVE charge; positive species migrate toward the negative electrode (cathode). It is not at its pI, so it does migrate.`
          },
          {
            question: `Which pair functions as the best physiological buffer AT pH 7.4 inside a protein?`,
            options: [`Aspartate side chains (pKa ~3.9)`, `Histidine side chains (pKa ~6.0)`, `Arginine side chains (pKa ~12.5)`, `Backbone carboxyl groups (pKa ~2)`],
            correctAnswer: 1,
            explanation: `Buffering is strongest within about one pH unit of the pKa. Histidine's imidazole (pKa ~6) is the only listed group near 7.4 — this is why hemoglobin's histidines buffer blood pH. The others are fully ionized (or fully protonated) at physiological pH.`
          }
        ]
      }
    },
    {
      id: 'aa2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Henderson-Hasselbalch: each unit of pH above pKa multiplies the deprotonated:protonated ratio by 10
- pI = average of the two pKa values flanking the neutral species: two lowest for acidic AAs, two highest for basic AAs
- pH > pI: net negative, runs to anode; pH < pI: net positive, runs to cathode; pH = pI: no migration, minimum solubility
- His (pKa ~6) is the physiological buffer residue; Asp/Glu are always negative and Lys/Arg always positive at pH 7
- Titration curves: one plateau per ionizable group; buffering only near pKa`
    },
    {
      id: 'aa2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Charge Calculations

<details>
<summary><b>Example 1: Net charge of a peptide at pH 7</b></summary>

**Question:** Find the net charge of the tetrapeptide Glu-His-Lys-Ala at pH 7.4. (pKa values: Glu side chain 4.3; His side chain 6.0; Lys side chain 10.5; N-terminus 9.0; C-terminus 3.1)

**Solution:**
1. N-terminus (pKa 9.0): pH < pKa, protonated → **+1**
2. C-terminus (pKa 3.1): pH > pKa, deprotonated → **−1**
3. Glu side chain (4.3): pH > pKa → **−1**
4. His side chain (6.0): pH > pKa, mostly deprotonated → **0** (approximately)
5. Lys side chain (10.5): pH < pKa → **+1**
6. Ala: nonpolar → **0**

**Net charge ≈ +1 − 1 − 1 + 0 + 1 = 0**

**MCAT Strategy:** Only termini and ionizable side chains count. Internal residues in a peptide contribute no backbone charges — their carboxyls and amines are tied up in peptide bonds.
</details>

<details>
<summary><b>Example 2: Choosing a pH to separate two proteins</b></summary>

**Question:** Protein A has pI 5.0; protein B has pI 9.0. At what pH would electrophoresis send them in opposite directions?

**Solution:**
1. Pick a pH **between** the two pI values, e.g., pH 7.
2. Protein A: pH 7 > pI 5.0 → net negative → migrates to anode.
3. Protein B: pH 7 < pI 9.0 → net positive → migrates to cathode.

**MCAT Strategy:** "Between the pIs" is the universal answer for opposite-direction separation. At a pH equal to one protein's pI, that protein simply stays put.
</details>

<details>
<summary><b>Example 3: Reading a titration curve</b></summary>

**Question:** A titration curve of an unknown amino acid shows buffering plateaus at pH 2.2, 6.8, and 9.1. Which amino acid is it likely to be, and what is its pI?

**Solution:**
1. Three plateaus = three ionizable groups = an amino acid with an ionizable side chain.
2. The middle plateau near 6.8 points to an imidazole — histidine is the only standard amino acid with a side-chain pKa in that range. The unknown is **histidine** (tabulated pKa values ~1.8, 6.0, 9.2; measured values vary with conditions).
3. His is basic, so pI = average of the two HIGHEST pKa values: $(6.8 + 9.1)/2 \\approx 7.95$.

**MCAT Strategy:** A mid-range plateau (pKa 5-8.5) narrows the identity fast: ~6 is His, ~8 is Cys. Then apply the flanking-pKa rule for pI.
</details>`
    }
  ]
};
