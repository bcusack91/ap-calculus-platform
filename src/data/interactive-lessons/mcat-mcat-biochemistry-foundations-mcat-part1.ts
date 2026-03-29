export const mcatBiochemPart1Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc1-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 1 of 7 — Amino Acids & Protein Structure**

### The 20 Amino Acids — Classify by Side Chain

| Category | Amino Acids | Key Feature |
|----------|-------------|-------------|
| Nonpolar/Hydrophobic | G, A, V, L, I, P, F, W, M | Interior of proteins |
| Polar uncharged | S, T, C, Y, N, Q | H-bonding |
| Positively charged (pH 7) | K, R, H | Basic side chains |
| Negatively charged (pH 7) | D, E | Acidic side chains |

### Protein Structure Levels

| Level | Held together by | Description |
|-------|-----------------|-------------|
| Primary (1°) | Peptide bonds (covalent) | Amino acid sequence |
| Secondary (2°) | H-bonds (backbone N-H to C=O) | $\\alpha$-helix, $\\beta$-sheet |
| Tertiary (3°) | Hydrophobic, ionic, disulfide, H-bonds | 3D shape of one polypeptide |
| Quaternary (4°) | Same as tertiary | Multiple subunit assembly |

### Disulfide Bonds

Cysteine + Cysteine → Cystine (C-S-S-C), covalent bond stabilizing tertiary structure.

### Isoelectric Point (pI) Logic

- At pH < pI, amino acids/proteins tend to carry net positive charge.
- At pH > pI, they tend to carry net negative charge.

This is heavily tested in electrophoresis and separation contexts.`
    },
    {
      id: 'bc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Amino Acids & Protein Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `Proline is unique among amino acids because it:`,
            options: [`Has a cyclic side chain bonded to the backbone nitrogen, creating rigidity`, `Is the only nonpolar amino acid`, `Has the smallest side chain`, `Can form disulfide bonds`],
            correctAnswer: 0,
            explanation: `Proline is an imino acid — its side chain cyclizes back to the backbone N, creating a rigid kink. This is why proline is a "helix breaker" in $\\alpha$-helices.`
          },
          {
            question: `$\\alpha$-helices are stabilized primarily by:`,
            options: [`Hydrogen bonds between backbone C=O and N-H groups 4 residues apart`, `Disulfide bonds`, `Hydrophobic interactions`, `Ionic bonds between side chains`],
            correctAnswer: 0,
            explanation: `$\\alpha$-helices are stabilized by H-bonds between the C=O of residue $i$ and the N-H of residue $i+4$. These are backbone (not side chain) interactions, making them secondary structure.`
          },
          {
            question: `At pH well above its isoelectric point, a protein will usually have net:`,
            options: [`Positive charge`, `Negative charge`, `Zero charge always`, `No ionizable groups`],
            correctAnswer: 1,
            explanation: `At pH above pI, more groups are deprotonated, producing a net negative charge.`
          },
          {
            question: `Which amino acid side chain can form a disulfide bond under oxidizing conditions?`,
            options: [`Serine`, `Methionine`, `Cysteine`, `Tyrosine`],
            correctAnswer: 2,
            explanation: `Cysteine thiol groups can oxidize to form a disulfide linkage (cystine).`
          }
        ]
      }
    },
    {
      id: 'bc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know amino acid categories cold (nonpolar, polar, positive, negative)
- Proline = helix breaker (rigid ring); Glycine = most flexible (no side chain)
- Primary: sequence. Secondary: $\\alpha$-helix/$\\beta$-sheet. Tertiary: 3D fold. Quaternary: subunits.
- Disulfide bonds (Cys-Cys) = only COVALENT bond in tertiary structure`
    },
    {
      id: 'bc1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Amino Acids & Protein Structure

<details>
<summary><b>Example 1: Classify amino acid by charge at different pH values</b></summary>

**Question:** Aspartic acid (Asp, D) has a side chain with a carboxylic acid (pKa ≈ 3.9). Is aspartic acid positively, negatively, or neutrally charged at pH 7?

**Solution:**
1. At pH 7 > pKa (3.9), the carboxylic acid is deprotonated: −COO⁻
2. The $\\alpha$-carboxylic acid (backbone, pKa ≈ 2) is also deprotonated: −COO⁻
3. The $\\alpha$-amino group (pKa ≈ 9.6) is protonated: −NH₃⁺
4. Net charge: (−1 from side chain) + (−1 from backbone) + (+1 from backbone NH₃) = **−1 (negatively charged)**

**MCAT Strategy:** At physiological pH (~7), acidic amino acids (D, E) are negative; basic amino acids (K, R, H) are positive because their pKa values are far from 7.
</details>

<details>
<summary><b>Example 2: Determine protein behavior in electrophoresis</b></summary>

**Question:** A protein has an isoelectric point (pI) of 5.5. At pH 7, will it migrate toward the positive or negative electrode during electrophoresis?

**Solution:**
1. At pH 7 > pI (5.5), the protein is **above its isoelectric point**
2. Above pI, the protein carries a net negative charge (more deprotonation than protonation)
3. Negative proteins migrate toward the **positive electrode (anode)**

**MCAT Strategy:** pH > pI → negative charge → migrates to (+) electrode. This is a one-liner on the MCAT.
</details>

<details>
<summary><b>Example 3: Calculate effective charge on a peptide</b></summary>

**Question:** A tripeptide is Asp-Phe-Lys. At pH 7:
- Asp side chain (pKa 3.9): −COO⁻
- Phe side chain: nonpolar (no charge)
- Lys side chain (pKa 10.5): −NH₃⁺
- N-terminus (pKa ~9): −NH₃⁺
- C-terminus (pKa ~3): −COO⁻

What is the net charge?

**Solution:**
1. Asp side chain: pH > pKa, so −COO⁻ → **−1**
2. Phe side chain: nonpolar → **0**
3. Lys side chain: pH < pKa, so −NH₃⁺ → **+1**
4. N-terminus: pH < pKa, so −NH₃⁺ → **+1**
5. C-terminus: pH > pKa, so −COO⁻ → **−1**
6. **Net charge = −1 + 0 + 1 + 1 − 1 = 0**

**MCAT Strategy:** For charges near physiological pH, check each ionizable group against its pKa. If pH >> pKa, deprotonate; if pH << pKa, protonate.
</details>`
    }
  ]
};
