export const mcatAminoAcidsPart1Data = {
  topicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  sections: [
    {
      id: 'aa1-intro',
      type: 'text' as const,
      content: `# Amino Acids & Proteins

**Part 1 of 4 — The 20 Amino Acids: Structure & Classification**

### Anatomy of an Amino Acid

Every proteinogenic amino acid shares the same backbone: a central $\\alpha$-carbon bonded to an amino group ($-NH_{2}$), a carboxyl group ($-COOH$), a hydrogen, and a variable **side chain (R group)**. At physiological pH, the backbone exists as a **zwitterion**: $-NH_{3}^{+}$ and $-COO^{-}$ simultaneously, giving a net backbone charge of zero.

All 20 standard amino acids are **L-stereoisomers** with **(S) absolute configuration** — except **cysteine**, which is (R) (the sulfur raises the side chain's priority), and **glycine**, which is achiral (two hydrogens on the $\\alpha$-carbon).

### Classification by Side Chain — Know This Cold

| Category | Amino Acids (3-letter / 1-letter) | Key Feature |
|----------|-----------------------------------|-------------|
| Nonpolar, aliphatic | Gly (G), Ala (A), Val (V), Leu (L), Ile (I), Pro (P), Met (M) | Hydrophobic; buried in protein interior |
| Aromatic | Phe (F), Trp (W), Tyr (Y) | Absorb UV at 280 nm (Trp, Tyr especially) |
| Polar, uncharged | Ser (S), Thr (T), Cys (C), Asn (N), Gln (Q) | H-bond donors/acceptors |
| Acidic (negative at pH 7) | Asp (D), Glu (E) | Side-chain carboxylate, pKa ~4 |
| Basic (positive at pH 7) | Lys (K), Arg (R), His (H) | Side-chain amine/guanidinium/imidazole |

**Tyrosine caution:** its phenol -OH makes it polar-ish, but the MCAT usually groups it with the aromatics; it is a common phosphorylation site (along with Ser and Thr).

### The Special Cases the MCAT Loves

- **Glycine (G):** side chain = H. Smallest, most flexible, achiral. Fits in tight turns; every third residue of collagen is Gly.
- **Proline (P):** side chain cyclizes back onto the backbone nitrogen (a secondary amine — technically an imino acid). Rigid; introduces kinks; **helix breaker**.
- **Cysteine (C):** thiol ($-SH$) side chain; two cysteines oxidize to form a covalent **disulfide bond** (cystine).
- **Histidine (H):** imidazole side chain with pKa about 6 — the only side chain that titrates near physiological pH, making it a superb acid-base catalyst in active sites (e.g., serine proteases, carbonic anhydrase).
- **Methionine (M):** thioether sulfur (no disulfides!); as N-formylmethionine (bacteria) or Met (eukaryotes) it initiates translation.

### Hydrophobicity Predicts Location

In a water-soluble globular protein, nonpolar residues (V, L, I, F, M) cluster in the **interior**; charged/polar residues face the **aqueous exterior**. In a transmembrane segment, the pattern inverts: hydrophobic residues face the lipid bilayer. Passage questions often give you a mutation (e.g., Ile to Asp in a membrane-spanning helix) and ask you to predict destabilization.`
    },
    {
      id: 'aa1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Amino Acid Structure & Classification** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which amino acid is achiral?`,
            options: [`Alanine`, `Glycine`, `Serine`, `Proline`],
            correctAnswer: 1,
            explanation: `Glycine's side chain is a hydrogen atom, so its $\\alpha$-carbon bears two identical H substituents and is not a stereocenter. All other proteinogenic amino acids are chiral (L-configuration).`
          },
          {
            question: `A transmembrane $\\alpha$-helix of a receptor is mutated so that a leucine is replaced by glutamate. The most likely consequence is:`,
            options: [`Improved anchoring in the bilayer due to stronger interactions`, `No change, since both residues are similar in size`, `Destabilization of the helix within the membrane because a charged residue now faces the hydrophobic lipid tails`, `Formation of a new disulfide bond`],
            correctAnswer: 2,
            explanation: `Leucine is nonpolar and compatible with the hydrophobic bilayer core; glutamate carries a negative charge at pH 7. Burying a charge in the lipid environment is energetically very unfavorable and destabilizes the transmembrane segment. Disulfides require cysteine.`
          },
          {
            question: `Which residue's side chain has a pKa closest to physiological pH, allowing it to act as both proton donor and acceptor in enzyme active sites?`,
            options: [`Lysine`, `Aspartate`, `Histidine`, `Arginine`],
            correctAnswer: 2,
            explanation: `Histidine's imidazole pKa is about 6, so near pH 7 meaningful amounts of both protonated and deprotonated forms coexist — ideal for general acid-base catalysis. Lys (~10.5) and Arg (~12.5) stay protonated; Asp (~3.9) stays deprotonated.`
          },
          {
            question: `Proline destabilizes $\\alpha$-helices primarily because it:`,
            options: [`Is too hydrophilic for the helix interior`, `Has a rigid cyclic structure and its backbone nitrogen lacks the H needed for helix hydrogen bonding`, `Forms disulfide crosslinks that distort the helix`, `Is too large to fit within the helix`],
            correctAnswer: 1,
            explanation: `Proline's side chain bonds back to its backbone nitrogen, creating a rigid ring that restricts rotation, and the nitrogen (a secondary amine within the ring) has no N-H hydrogen to donate to the helix's i to i+4 hydrogen-bonding pattern.`
          },
          {
            question: `A researcher monitors protein concentration by absorbance at 280 nm. This assay depends mainly on which residues?`,
            options: [`Tryptophan and tyrosine`, `Aspartate and glutamate`, `Serine and threonine`, `Glycine and alanine`],
            correctAnswer: 0,
            explanation: `Aromatic side chains absorb UV light near 280 nm; tryptophan (strongest) and tyrosine dominate the signal, with a minor contribution from phenylalanine. Aliphatic and charged residues do not absorb appreciably at 280 nm.`
          }
        ]
      }
    },
    {
      id: 'aa1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Backbone = zwitterion at pH 7; all are L (S-configuration) except Cys (R) and achiral Gly
- Classify instantly: nonpolar (G, A, V, L, I, P, M), aromatic (F, W, Y), polar (S, T, C, N, Q), acidic (D, E), basic (K, R, H)
- Special residues: Gly = flexible, Pro = rigid helix breaker, Cys = disulfides, His = pKa ~6 catalyst, Met = start codon
- Hydrophobic in = soluble protein core; hydrophobic out = transmembrane segment
- Trp/Tyr absorb at 280 nm (protein quantification)`
    },
    {
      id: 'aa1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Amino Acid Identification

<details>
<summary><b>Example 1: Predict the effect of a conservative vs. nonconservative mutation</b></summary>

**Question:** A cytosolic enzyme's hydrophobic core contains a valine. Which substitution is LEAST likely to disrupt folding: Val to Ile, Val to Lys, or Val to Asp?

**Solution:**
1. Val is small and nonpolar, buried in the hydrophobic core.
2. Ile is also nonpolar and nearly the same size — a **conservative** substitution. Minimal disruption.
3. Lys (+) and Asp (−) are charged; burying a charge in the nonpolar core carries a large energetic penalty and can misfold the protein.

**Answer:** Val to Ile.

**MCAT Strategy:** "Conservative" = similar chemistry (nonpolar for nonpolar, charge for like charge). The exam tests whether you match side-chain chemistry to environment, not memorized structures.
</details>

<details>
<summary><b>Example 2: Identify a residue from functional clues</b></summary>

**Question:** A protein is inactivated by a reagent that alkylates free thiol groups. Site-directed mutagenesis of one residue to serine abolishes sensitivity to the reagent but preserves most activity. What was the original residue?

**Solution:**
1. Free thiol ($-SH$) means **cysteine**.
2. Serine is cysteine's oxygen analog ($-OH$ in place of $-SH$): similar size, no thiol, so the alkylating agent no longer reacts.
3. Retained activity indicates the thiol was not strictly catalytic but was the modification target.

**MCAT Strategy:** Cys-to-Ser swaps are the classic experiment for testing whether a specific thiol matters. Met also contains sulfur but as a thioether — it does not react like a free thiol and cannot form disulfides.
</details>

<details>
<summary><b>Example 3: Collagen's Gly-X-Y logic</b></summary>

**Question:** Collagen's triple helix requires glycine at every third position (Gly-X-Y, with X often Pro). A mutation replaces one such glycine with arginine. Why is this so destabilizing?

**Solution:**
1. In the tightly wound triple helix, every third residue packs at the crowded central axis where the three chains meet.
2. Only glycine — side chain = H — is small enough to occupy that position.
3. Arginine's long, bulky, charged side chain cannot fit, disrupting the helix (the basis of diseases such as osteogenesis imperfecta).

**MCAT Strategy:** When a question says a mutation of Gly is uniquely damaging, think steric constraint: Gly marks positions where there is literally no room for a side chain.
</details>`
    }
  ]
};
