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
- **Bradford / BCA assays:** colorimetric total-protein assays read on a spectrophotometer (Beer's law: $A = \\epsilon l c$).
- **Western blot:** SDS-PAGE → transfer → antibody detection of one specific protein.
- **ELISA:** antibody-based detection/quantification in solution (sandwich ELISA: capture + detection antibodies).
- **Edman degradation:** removes and identifies one residue at a time from the **N-terminus**; fails past ~50 residues and on blocked N-termini.
- **Mass spectrometry:** measures mass-to-charge; identifies proteins from peptide fragment masses.
- **X-ray crystallography / cryo-EM / NMR:** full 3D structure (NMR for small proteins in solution).

### Activity vs. Purity Bookkeeping

Purification tables track **total protein** (mg), **total activity** (units), and **specific activity** (units/mg). A good purification step *raises specific activity* (purer enzyme) even as total activity drops slightly (some loss). Fold purification = specific activity after / specific activity before; yield = total activity after / initial total activity.`
    },
    {
      id: 'aa4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Purification & Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `In size-exclusion chromatography, which protein elutes first?`,
            options: [`The smallest protein, because it moves through pores quickly`, `The largest protein, because it is excluded from the beads' pores and takes the direct path`, `The protein with the highest pI`, `The most hydrophobic protein`],
            correctAnswer: 1,
            explanation: `Small proteins enter the porous beads and take a longer, tortuous path; large proteins are excluded from the pores and flow around the beads, eluting first. This inversion (big first) is a favorite MCAT trap.`
          },
          {
            question: `A protein with pI 9.2 is loaded at pH 7 onto a column packed with negatively charged beads. This is an example of:`,
            options: [`Anion-exchange chromatography, and the protein binds`, `Cation-exchange chromatography, and the protein binds`, `Cation-exchange chromatography, and the protein flows through`, `Affinity chromatography`],
            correctAnswer: 1,
            explanation: `Negative beads capture CATIONS — this is cation-exchange. At pH 7, below the protein's pI of 9.2, the protein is net positive and binds. It is later eluted with a salt or pH gradient.`
          },
          {
            question: `On reducing SDS-PAGE, a purified protein shows two bands at 60 kDa and 40 kDa. On size-exclusion chromatography under native conditions it elutes as a single 200 kDa species. The most consistent structure is:`,
            options: [`A monomeric 100 kDa protein`, `A heterotetramer containing two 60 kDa and two 40 kDa subunits`, `Two unrelated contaminating proteins`, `A 200 kDa single polypeptide cleaved by SDS`],
            correctAnswer: 1,
            explanation: `SDS-PAGE reveals individual subunit sizes (60 + 40); native sizing shows the assembled complex (200 kDa). Two of each subunit: $2(60) + 2(40) = 200$ kDa — an $\\alpha_2\\beta_2$ heterotetramer. SDS does not cleave peptide bonds.`
          },
          {
            question: `Edman degradation of a peptide yields no signal, but mass spectrometry confirms plenty of intact peptide is present. A likely explanation is:`,
            options: [`The N-terminus is chemically blocked (e.g., acetylated)`, `The peptide contains no aromatic residues`, `The peptide is too small for Edman chemistry`, `The C-terminus is amidated`],
            correctAnswer: 0,
            explanation: `Edman chemistry requires a free N-terminal amine to react with phenylisothiocyanate. N-terminal modifications (acetylation, cyclization) block the first coupling step. C-terminal changes and aromatic content are irrelevant to Edman.`
          },
          {
            question: `After an affinity chromatography step, total activity fell from 10,000 to 8,000 units while total protein fell from 500 mg to 20 mg. The fold purification for this step is:`,
            options: [`1.25-fold`, `5-fold`, `20-fold`, `25-fold`],
            correctAnswer: 2,
            explanation: `Specific activity before: $10000/500 = 20$ units/mg. After: $8000/20 = 400$ units/mg. Fold purification $= 400/20 = 20$. Losing some total activity while massively increasing specific activity is the signature of a good step.`
          }
        ]
      }
    },
    {
      id: 'aa4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Size exclusion: BIG elutes first. SDS-PAGE: SMALL runs farthest. Don't mix these up.
- Ion exchange: beads bind opposite charge; protein charge set by pH vs. pI; elute with salt
- Reducing vs. nonreducing SDS-PAGE reveals disulfide-linked subunit composition
- Edman = N-terminal sequencing (needs free N-terminus, short peptides); mass spec = identification by fragment mass
- Specific activity (units/mg) is the purity metric; fold purification compares specific activities`
    },
    {
      id: 'aa4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Experimental Integration

<details>
<summary><b>Example 1: Design a two-step purification</b></summary>

**Question:** Your target protein is 25 kDa with pI 4.5. Major contaminants are 25 kDa with pI 8.0, and 150 kDa with pI 4.5. Which two techniques, in either order, purify the target?

**Solution:**
1. Target vs. contaminant 1: same size, different pI → separate by **ion exchange** (at pH 7, target is negative, contaminant 1 positive; an anion exchanger binds only the target).
2. Target vs. contaminant 2: same pI, different size → separate by **size exclusion** (150 kDa elutes first) or SDS-free sizing method.
3. Neither technique alone resolves both contaminants; the pair does.

**MCAT Strategy:** Match each contaminant to the property that differs. If two proteins share a property, that technique cannot separate them.
</details>

<details>
<summary><b>Example 2: Interpreting a Western blot experiment</b></summary>

**Question:** Cells are treated with a kinase inhibitor. Western blots of lysates are probed with (a) an antibody against total protein X and (b) an antibody specific for phospho-X. Band (a) is unchanged by treatment; band (b) disappears. Conclusion?

**Solution:**
1. Total X unchanged → the inhibitor does not affect X's expression or stability.
2. Phospho-X lost → X is no longer phosphorylated.
3. Conclusion: X is a substrate (direct or downstream) of the inhibited kinase; the inhibitor blocks X's phosphorylation, not its production.

**MCAT Strategy:** Phospho-specific antibodies report modification state; always compare against the total-protein control before concluding anything about expression.
</details>

<details>
<summary><b>Example 3: Sequencing with overlapping fragments</b></summary>

**Question:** A pentapeptide gives these data: Edman degradation releases Met first. Trypsin (cleaves after Lys/Arg) yields two fragments: Met-Ala-Lys and Gly-Phe. Chymotrypsin (cleaves after aromatic residues) yields Met-Ala-Lys-Gly-Phe uncleaved internally except a C-terminal Phe. What is the sequence?

**Solution:**
1. Edman: N-terminus is **Met**.
2. Trypsin cuts after Lys → the fragment Met-Ala-Lys must be N-terminal; Gly-Phe follows.
3. Sequence: **Met-Ala-Lys-Gly-Phe**. Chymotrypsin is consistent: the only aromatic (Phe) is already the C-terminus, so no internal cut.

**MCAT Strategy:** Anchor the N-terminus with Edman data, then order fragments so cleavage-site residues (Lys/Arg for trypsin; Phe/Trp/Tyr for chymotrypsin) sit at fragment C-termini.
</details>`
    }
  ]
};
