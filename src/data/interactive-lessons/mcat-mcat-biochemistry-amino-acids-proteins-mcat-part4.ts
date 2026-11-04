export const mcatAminoAcidsPart4Data = {
  topicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  sections: [
    {
      id: 'aa4-intro',
      type: 'text' as const,
      content: `# Amino Acids & Proteins

**Part 4 of 4 — Protein Purification, Analysis & MCAT Integration**

The MCAT tests proteins mostly through **experimental passages**. You must know what each technique separates by, and how to read its output.

### Separation Techniques

| Technique | Separates by | Details the MCAT tests |
|-----------|--------------|------------------------|
| Size-exclusion (gel filtration) chromatography | Size | LARGE proteins elute FIRST (small ones wander into bead pores) |
| Ion-exchange chromatography | Charge | Anion exchanger (positive beads) binds negative proteins; elute with salt gradient |
| Affinity chromatography | Specific binding | Ligand/antibody/Ni-column (His-tag); elute with free ligand or imidazole |
| SDS-PAGE | Size only | SDS coats proteins with uniform negative charge; SMALL proteins migrate FARTHEST |
| Native PAGE | Size + charge + shape | No SDS; complexes stay intact |
| Isoelectric focusing | pI | Protein stops migrating where gel pH = its pI |
| 2D gel | pI, then size | IEF first dimension, SDS-PAGE second |
| Salting out | Solubility | High ammonium sulfate precipitates proteins differentially |
| Dialysis | Size (membrane cutoff) | Removes small solutes (salt) from a protein solution |

**SDS-PAGE with vs. without $\\beta$-mercaptoethanol:** reducing conditions split disulfide-linked subunits. A protein running at 150 kDa nonreduced but 50 kDa reduced is a disulfide-linked trimer (or has interchain disulfides).

### Quantification & Identification

- **UV 280 nm:** Trp/Tyr absorbance; fast, nondestructive.
- **Bradford assay:** colorimetric total-protein assay read on a spectrophotometer (Beer's law: $A = \\epsilon l c$).
- **Western blot:** SDS-PAGE → transfer → antibody detection of one specific protein.
- **ELISA:** antibody-based detection/quantification of a specific protein in a sample, done in plate wells with no gel step.

<!-- yield:low -->
- The **BCA assay** is a second colorimetric total-protein assay, read the same way as the Bradford. A **sandwich ELISA** uses two antibodies: a capture antibody fixed to the plate and a labelled detection antibody.
<!-- /yield -->

- **Edman degradation:** removes and identifies one residue at a time from the **N-terminus**; fails past ~50 residues and on blocked N-termini.
- **Mass spectrometry:** measures mass-to-charge; identifies proteins from peptide fragment masses.
- **X-ray crystallography / cryo-EM / NMR:** full 3D structure (NMR for small proteins in solution).

### Activity vs. Purity Bookkeeping

Purification tables track **total protein** (mg), **total activity** (units), and **specific activity** (units/mg). A good purification step *raises specific activity* (purer enzyme) even as total activity drops slightly (some loss). Fold purification = specific activity after / specific activity before; yield = total activity after / initial total activity.`
    },
    {
      id: 'aa4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Experimental Integration

**Problem 1.** The target protein is 25 kDa with pI 4.5. The major contaminants are 25 kDa with pI 8.0 (contaminant 1) and 150 kDa with pI 4.5 (contaminant 2).

- **(a)** Which technique separates the target from contaminant 1?
- **(b)** Which technique separates the target from contaminant 2?
- **(c)** Why are both techniques needed?

**(a) Ion exchange.** Same size, different pI: at pH 7 the target is negative and contaminant 1 positive, so an anion exchanger binds only the target.

**(b) Size exclusion.** Same pI, different size: on a size-exclusion column the 150 kDa contaminant elutes first.

**(c) Both, in either order.** If two proteins share a property, a technique based on it cannot separate them, so neither technique alone removes both contaminants; the pair does. Match each contaminant to the property that differs.

**Problem 2.** Cells are treated with a kinase inhibitor. Western blots of the lysates are probed with an antibody against total protein X and one specific for phospho-X. The total-X band is unchanged; the phospho-X band disappears.

- **(a)** What does the unchanged total-X band show?
- **(b)** What does the lost phospho-X band show?
- **(c)** What do you conclude about X and the kinase?

**(a) Total X.** The inhibitor does not affect X's expression or stability. Always check this total-protein control before concluding anything about expression.

**(b) Phospho-X.** X is no longer phosphorylated; phospho-specific antibodies report modification state.

**(c) Conclusion.** X is a substrate (direct or downstream) of the inhibited kinase; the inhibitor blocks X's phosphorylation, not its production.

**Problem 3.** A pentapeptide is sequenced. Edman degradation releases Met first. Trypsin (cleaves after Lys/Arg) yields Met-Ala-Lys and Gly-Phe. Chymotrypsin (cleaves after aromatic residues) makes no internal cut.

- **(a)** What does the Edman result fix in the sequence?
- **(b)** In what order do the two trypsin fragments go?
- **(c)** What is the sequence, and does the chymotrypsin result fit?

**(a) Edman anchor.** Edman removes residues one at a time from the N-terminus, so Met is residue 1: any fragment that begins with Met must come first.

**(b) Trypsin fragments.** Trypsin cuts after Lys, so Met-Ala-Lys (starting at the Met from (a)) is N-terminal and Gly-Phe follows. Order fragments so cleavage-site residues (Lys/Arg for trypsin; Phe/Trp/Tyr for chymotrypsin) sit at fragment C-termini.

**(c) The sequence.** **Met-Ala-Lys-Gly-Phe.** Chymotrypsin is consistent: the only aromatic (Phe) is already the C-terminus, so there is no internal cut.`
    },
    {
      id: 'aa4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Purification & Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `In size-exclusion chromatography, which protein elutes first?`,
            options: [`The smallest, because it enters the pores fastest`, `The largest, because it is excluded from the bead pores`, `The one with the highest pI, as it binds beads least`, `The most hydrophobic, since it avoids polar beads`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Small proteins enter the porous beads and take a longer, tortuous path; large proteins are excluded from the pores and flow around the beads, eluting first. This inversion (big first) is a favorite MCAT trap. Size-exclusion beads separate by size alone, so charge (pI) and hydrophobicity do not set the elution order.`
          },
          {
            question: `A protein with pI 9.2 is loaded at pH 7 onto a column packed with negatively charged beads. This is an example of:`,
            options: [`Anion-exchange chromatography, and the protein binds`, `Cation-exchange chromatography, and the protein binds`, `Cation-exchange chromatography, and the protein flows through`, `Affinity chromatography`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Negative beads capture CATIONS — this is cation-exchange. At pH 7, below the protein's pI of 9.2, the protein is net positive and binds. It is later eluted with a salt or pH gradient.`
          },
          {
            question: `On reducing SDS-PAGE, a purified protein shows two bands at 60 kDa and 40 kDa. On size-exclusion chromatography under native conditions it elutes as a single 200 kDa species. The most consistent structure is:`,
            options: [`A monomeric 100 kDa protein`, `A heterotetramer of two 60 kDa and two 40 kDa subunits`, `Two unrelated proteins that copurified by chance`, `A 200 kDa single polypeptide cleaved by SDS`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `SDS-PAGE reveals individual subunit sizes (60 + 40); native sizing shows the assembled complex (200 kDa). Two of each subunit: $2(60) + 2(40) = 200$ kDa — an $\\alpha_2\\beta_2$ heterotetramer. SDS does not cleave peptide bonds, and two unrelated proteins would not travel together as one 200 kDa species under native conditions.`
          },
          {
            question: `Edman degradation of a peptide yields no signal, but mass spectrometry confirms plenty of intact peptide is present. A likely explanation is:`,
            options: [`The N-terminus is chemically blocked`, `The peptide contains no aromatic residues`, `The peptide is too small for Edman chemistry`, `The C-terminal carboxyl group is amidated`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Edman chemistry requires a free N-terminal amine to react with phenylisothiocyanate. N-terminal modifications (acetylation, cyclization) block the first coupling step. C-terminal changes and aromatic content are irrelevant to Edman.`
          },
          {
            question: `After an affinity chromatography step, total activity fell from 10,000 to 8,000 units while total protein fell from 500 mg to 20 mg. The fold purification for this step is:`,
            options: [`1.25-fold`, `5-fold`, `20-fold`, `25-fold`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Specific activity before: $10000/500 = 20$ units/mg. After: $8000/20 = 400$ units/mg. Fold purification $= 400/20 = 20$. Losing some total activity while massively increasing specific activity is the signature of a good step.`
          }
        ]
      }
    },
    {
      id: 'aa4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Size versus SDS-PAGE.** Size exclusion elutes BIG proteins first; on SDS-PAGE, SMALL proteins run farthest.
- **Ion exchange.** Beads bind the opposite charge, which pH versus pI sets; bound proteins elute with a salt gradient.
- **Reducing SDS-PAGE.** Reduced versus nonreduced gels reveal disulfide-linked subunits; native sizing weighs the whole complex.
- **Specific activity is purity.** Units/mg tracks purity; fold purification compares specific activities before and after.

**Common traps**

- **Big proteins eluting last.** In size exclusion, small proteins wander into the bead pores; large ones are excluded and elute first.
- **Anion exchangers binding cations.** An anion exchanger has positive beads and binds negative proteins; cation exchangers bind positive ones.
- **Edman from either end.** Edman removes residues only from a free N-terminus; a blocked N-terminus gives no signal.
- **Total activity as purity.** Total activity falls a little in a good step; a rise in specific activity is what shows purification.

<!-- yield:low -->
**Low-yield extras**

- The BCA assay is a second colorimetric total-protein assay; a sandwich ELISA pairs a plate-bound capture antibody with a labelled detection antibody.
<!-- /yield -->`
    }
  ]
};
