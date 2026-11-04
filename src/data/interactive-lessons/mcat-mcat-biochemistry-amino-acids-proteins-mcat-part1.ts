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
| Basic | Lys (K), Arg (R), His (H) | Side-chain amine/guanidinium/imidazole; K and R are positive at pH 7, His (pKa ≈ 6) is mostly neutral |

**Tyrosine caution:** its phenol -OH makes it polar-ish, but the MCAT usually groups it with the aromatics; it is a common phosphorylation site (along with Ser and Thr).

### The Special Cases the MCAT Loves

- **Glycine (G):** side chain = H. Smallest, most flexible, achiral; fits tight turns; every third residue of collagen is Gly.
- **Proline (P):** side chain cyclizes back onto the backbone nitrogen (a secondary amine, an imino acid). Rigid; introduces kinks; **helix breaker**.
- **Cysteine (C):** thiol ($-SH$) side chain; two cysteines oxidize to a covalent **disulfide bond** (cystine).
- **Histidine (H):** imidazole side chain with pKa about 6 — the one side chain that titrates near physiological pH, so it is the classic active-site acid-base catalyst.
- **Methionine (M):** thioether sulfur (no disulfides!); as N-formylmethionine (bacteria) or Met (eukaryotes) it initiates translation.

### Hydrophobicity Predicts Location

In a water-soluble globular protein, nonpolar residues (V, L, I, F, M) cluster in the **interior**; charged/polar residues face the **aqueous exterior**. In a transmembrane segment, the pattern inverts: hydrophobic residues face the lipid bilayer. Passage questions often give you a mutation (e.g., Ile to Asp in a membrane-spanning helix) and ask you to predict destabilization.`
    },
    {
      id: 'aa1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Amino Acid Identification

**Problem 1.** A valine buried in the interior of a soluble cytosolic enzyme is mutated. Three mutants are made: Val to Ile, Val to Lys, and Val to Asp.

- **(a)** What kind of environment does the valine occupy?
- **(b)** What happens when Lys or Asp is placed there?
- **(c)** Which substitution is LEAST likely to disrupt folding?

**(a) The environment.** The interior of a soluble protein is its hydrophobic core, and Val is small and nonpolar, so its replacement must tolerate a nonpolar setting.

**(b) Charged replacements.** Lys (+) and Asp (−) are charged; burying a charge in the nonpolar core carries a large energetic penalty and can misfold the protein.

**(c) Least disruptive.** Val to Ile. Ile is also nonpolar and nearly the same size, a **conservative** substitution (similar chemistry: nonpolar for nonpolar, charge for like charge). The exam tests matching side-chain chemistry to environment, not memorized structures.

**Problem 2.** A protein is inactivated by a reagent that alkylates free thiol groups. Mutating one residue to serine abolishes sensitivity to the reagent but preserves most activity.

- **(a)** Which residue carries a free thiol?
- **(b)** Why does the serine mutant no longer react?
- **(c)** What does the retained activity say about the thiol's role?
- **(d)** Could the target residue have been methionine?

**(a) Free thiol.** A free thiol ($-SH$) means **cysteine**.

**(b) The serine swap.** Serine is cysteine's oxygen analog ($-OH$ in place of $-SH$): similar size, no thiol, so the alkylating agent no longer reacts. Cys-to-Ser swaps are the classic test of whether a specific thiol matters.

**(c) Retained activity.** Most activity survives the swap, so the thiol was not strictly catalytic; it was the modification target.

**(d) Not methionine.** Met also contains sulfur, but as a thioether: it does not react like a free thiol and cannot form disulfides.

**Problem 3.** Collagen's triple helix requires glycine at every third position (Gly-X-Y, with X often Pro). A mutation replaces one such glycine with arginine.

- **(a)** Where does every third residue sit in the triple helix?
- **(b)** Why can only glycine occupy that position?
- **(c)** Why is the Gly-to-Arg mutation so destabilizing?

**(a) The crowded axis.** In the tightly wound triple helix, every third residue packs at the crowded central axis where the three chains meet.

**(b) Only glycine fits.** Glycine's side chain is a single H, the only one small enough for that position.

**(c) Arginine cannot fit.** Arginine's long, bulky, charged side chain disrupts the helix (the basis of diseases such as osteogenesis imperfecta). When a Gly mutation is uniquely damaging, think steric constraint: there is literally no room for a side chain.`
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
            yield: 'HIGH',
            explanation: `Glycine's side chain is a hydrogen atom, so its $\\alpha$-carbon bears two identical H substituents and is not a stereocenter. All other proteinogenic amino acids are chiral (L-configuration).`
          },
          {
            question: `A transmembrane $\\alpha$-helix of a receptor is mutated so that a leucine is replaced by glutamate. The most likely consequence is:`,
            options: [`Improved anchoring in the bilayer due to stronger interactions`, `No change, because both side chains are similar in size`, `Destabilization from a charge buried among lipid tails`, `Formation of a new disulfide bond with a neighboring helix`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Leucine is nonpolar and compatible with the hydrophobic bilayer core; glutamate carries a negative charge at pH 7. Burying a charge in the lipid environment is energetically very unfavorable and destabilizes the helix within the membrane, because the charged residue now faces the hydrophobic lipid tails. Similar size does not make the residues interchangeable when their polarity differs, and disulfides require cysteine, not glutamate.`
          },
          {
            question: `Which residue's side chain has a pKa closest to physiological pH, allowing it to act as both proton donor and acceptor in enzyme active sites?`,
            options: [`Lysine`, `Aspartate`, `Histidine`, `Arginine`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Histidine's imidazole pKa is about 6, so near pH 7 meaningful amounts of both protonated and deprotonated forms coexist — ideal for general acid-base catalysis. Lys (~10.5) and Arg (~12.5) stay protonated; Asp (~3.9) stays deprotonated.`
          },
          {
            question: `Proline destabilizes $\\alpha$-helices primarily because it:`,
            options: [`Is too hydrophilic for the helix interior`, `Has a rigid ring and lacks a backbone N-H to donate`, `Forms disulfide crosslinks that distort the helix`, `Is too large to fit within the helix`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Proline's side chain bonds back to its backbone nitrogen, creating a rigid ring that restricts rotation, and the nitrogen (a secondary amine within the ring) has no N-H hydrogen to donate to the helix's i to i+4 hydrogen-bonding pattern.`
          },
          {
            question: `A researcher monitors protein concentration by absorbance at 280 nm. This assay depends mainly on which residues?`,
            options: [`Tryptophan and tyrosine`, `Aspartate and glutamate`, `Serine and threonine`, `Glycine and alanine`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Aromatic side chains absorb UV light near 280 nm; tryptophan (strongest) and tyrosine dominate the signal, with a minor contribution from phenylalanine. Aliphatic and charged residues do not absorb appreciably at 280 nm.`
          }
        ]
      }
    },
    {
      id: 'aa1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Backbone and chirality.** Zwitterion at pH 7. All chiral residues are L; all L residues are (S) except Cys (R); Gly is achiral.
- **Five side-chain classes.** Nonpolar (G A V L I P M), aromatic (F W Y; Trp/Tyr absorb at 280 nm), polar (S T C N Q), acidic (D E), basic (K R H).
- **Special residues.** Gly is flexible, Pro breaks helices, Cys forms disulfides, His (pKa ~6) is a common active-site acid-base catalyst.
- **Hydrophobicity sets location.** Nonpolar residues fill a soluble protein's core but face the lipid in a transmembrane segment.

**Common traps**

- **Calling every L residue (S).** Cysteine is L but (R), because its sulfur raises the side chain's priority; glycine is achiral.
- **Treating His as charged.** With pKa ~6, His is mostly neutral at pH 7; only Lys and Arg are reliably positive.
- **Methionine disulfides.** Met's sulfur is a thioether; only cysteine's free thiol can form a disulfide bond.
- **Size-only substitutions.** Similar size is not enough: a charged residue buried in a nonpolar core or bilayer destabilizes the fold.`
    }
  ]
};
