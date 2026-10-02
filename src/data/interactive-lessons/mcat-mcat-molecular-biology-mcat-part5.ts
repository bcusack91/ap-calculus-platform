export const mcatMolBioPart5Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb5-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 5 of 7 — Mutations & DNA Repair**

### Types of Point Mutations

| Mutation Type | What Happens | Effect on Protein | Example |
|--------------|-------------|------------------|---------|
| **Silent** | New codon, SAME amino acid | None | GCU → GCC (both = Ala) |
| **Missense** | New codon, DIFFERENT amino acid | Variable (conservative vs. non-conservative) | Sickle cell: Glu → Val (GAG → GUG) |
| **Nonsense** | Codon → STOP codon | Truncated protein (usually nonfunctional) | Any → UAA, UAG, or UGA |

**Conservative vs. non-conservative missense**: Replacing an amino acid with a chemically similar one (conservative, e.g., Leu → Ile) is less damaging than replacing with a dissimilar one (non-conservative, e.g., Glu → Val in sickle cell disease).

### Frameshift Mutations

- **Insertion or deletion** of nucleotides NOT in multiples of 3 → shifts entire reading frame
- Every downstream codon is altered → usually nonfunctional protein
- Almost always more damaging than point mutations
- Insertions/deletions in **multiples of 3** → add/remove amino acids WITHOUT shifting the frame

### Transitions vs. Transversions

| Type | Change | Frequency |
|------|--------|-----------|
| **Transition** | Purine ↔ purine (A↔G) or pyrimidine ↔ pyrimidine (C↔T) | More common |
| **Transversion** | Purine ↔ pyrimidine (A↔C, A↔T, G↔C, G↔T) | Less common |

### DNA Repair Mechanisms — Complete Overview

| Mechanism | What It Fixes | How It Works | Disease If Defective |
|-----------|-------------|-------------|---------------------|
| **Proofreading** | Replication errors | DNA Pol III 3' → 5' exonuclease removes mismatched bases | — |
| **Mismatch repair (MMR)** | Post-replication mismatches | Mismatch detected on the new strand → excise and resynthesize | Lynch syndrome (hereditary colon cancer) |
| **Base excision repair (BER)** | Small base damage (deamination, oxidation) | Glycosylase removes damaged base → backbone cut → Pol fills → Ligase seals | — |
| **Nucleotide excision repair (NER)** | Bulky lesions (thymine dimers, adducts) | Excise a short stretch around damage → Pol fills → Ligase seals | Xeroderma pigmentosum (XP) |
| **Homologous recombination** | Double-strand breaks (high fidelity) | Uses sister chromatid as template for repair | BRCA1/2 mutations → cancer |
| **Non-homologous end joining (NHEJ)** | Double-strand breaks (error-prone) | Directly ligates broken ends (may lose nucleotides) | — |

<!-- yield:low -->
- **Repair details**: in MMR, MutS detects the mismatch and MutL recruits the excision machinery; Lynch syndrome is also called HNPCC, and its tumors show microsatellite instability. In BER, AP endonuclease cuts the backbone at the base-less site. NER excises a ~24-32 nt stretch. NHEJ defects can cause severe combined immunodeficiency (SCID), because antibody and T-cell receptor gene rearrangement relies on NHEJ.
<!-- /yield -->`
    },
    {
      id: 'mb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mutations & Repair** 🎯`,
      exercise: {
        questions: [
          {
            question: `A single nucleotide deletion in the second codon of an mRNA would:`,
            options: [`Shift the reading frame, altering every codon downstream`, `Alter only the codons within a few bases of the deletion`, `Have no effect, because the genetic code is degenerate`, `Remove one amino acid, leaving the rest of the protein intact`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `A single deletion (not a multiple of 3) shifts the reading frame by one nucleotide. Every triplet codon downstream is now read differently → every amino acid from that point on is wrong → almost certainly nonfunctional protein, often with a premature stop codon.`
          },
          {
            question: `In sickle cell disease, the mutation is GAG → GUG in a beta-globin mRNA codon. This is classified as a:`,
            options: [`Non-conservative missense: charged Glu is replaced by nonpolar Val`, `Conservative missense: one nonpolar residue swapped for another`, `Nonsense mutation that creates a premature stop codon`, `Silent mutation, since both codons encode similar residues`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Glu (glutamic acid) is negatively charged and hydrophilic. Val (valine) is nonpolar and hydrophobic. This dramatic chemical change causes hemoglobin S to polymerize under low O$_2$ conditions → sickle-shaped RBCs. This is the classic example of how a single amino acid change can cause devastating disease.`
          },
          {
            question: `A patient with xeroderma pigmentosum (XP) has extreme UV sensitivity because they lack:`,
            options: [`Nucleotide excision repair, which removes thymine dimers`, `Mismatch repair, which fixes errors missed by proofreading`, `Base excision repair, which removes single oxidized or deaminated bases`, `Proofreading by the 3' to 5' exonuclease of DNA polymerase`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `UV light causes cyclobutane thymine dimers (covalent links between adjacent thymines). NER normally excises a short patch around the dimer and resynthesizes the segment. Without NER, thymine dimers accumulate → replication errors → skin cancer at very young ages. XP patients must avoid all UV exposure.`
          }
        ]
      }
    },
    {
      id: 'mb5-deep',
      type: 'text' as const,
      content: `### Mutagens — Agents That Cause Mutations

| Mutagen | Mechanism | Type of Damage |
|---------|-----------|---------------|
| UV light | Thymine dimers (cyclobutane pyrimidine dimers) | Bulky lesion → NER |
| Ionizing radiation (X-rays) | Double-strand breaks | HR or NHEJ repair |
| Alkylating agents | Add alkyl groups to bases → mispairing | BER |
| Deamination (spontaneous) | C → U (cytosine to uracil) | BER (uracil-DNA glycosylase) |
| Base analogs (5-bromouracil) | Incorporated during replication → mispair | Transition mutations |
| Intercalating agents (ethidium bromide) | Insert between bases → frameshift during replication | Insertions/deletions |

### Ames Test — Detecting Mutagens

- Uses Salmonella bacteria that cannot synthesize histidine (his$^-$ mutant)
- Expose to suspected mutagen → plate on histidine-free media
- If colonies grow → reversion mutations occurred → substance is a mutagen (likely carcinogen)
- More colonies = more mutagenic

<!-- yield:low -->
### Nonsense-Mediated Decay (NMD)

- Quality control mechanism that degrades mRNAs with **premature stop codons**
- Prevents translation of truncated, potentially harmful proteins
- If a stop codon appears >50 nt upstream of the last exon-exon junction → mRNA degraded
- Clinically important: some genetic diseases are caused by NMD destroying mRNA before any protein is made
<!-- /yield -->

### p53 — The Guardian of the Genome

p53 is the central hub connecting DNA damage to cell fate:
1. DNA damage detected → damage-sensing kinases phosphorylate p53 → stabilize it (normally it is constantly degraded by its ubiquitin ligase, **MDM2**)
2. p53 switches on **p21**, a CDK inhibitor → cell cycle arrest at G$_1$/S
3. If damage is repairable → DNA repair occurs → cell cycle resumes
4. If damage is irreparable → p53 activates **pro-apoptotic genes** such as **Bax** → apoptosis
5. p53 also upregulates DNA repair genes

<!-- yield:low -->
- The named damage-sensing kinases: ATM and ATR.
<!-- /yield -->

**p53 is mutated or inactivated in roughly half of all human cancers** — the single most commonly altered gene in cancer.`
    },
    {
      id: 'mb5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Mutations** 🎯`,
      exercise: {
        questions: [
          {
            question: `The Ames test detects mutagens by measuring:`,
            options: [`Reversion of his-minus bacteria to growth without histidine`, `Breakage of bacterial DNA seen as smears on an agarose gel`, `The death rate of bacteria exposed to the test compound`, `Emergence of antibiotic resistance in treated bacterial colonies`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The Ames test uses Salmonella his$^-$ mutants that cannot grow without histidine. A mutagen causes reversion mutations (his$^-$ → his$^+$) → bacteria can now synthesize histidine → colony growth on histidine-free plates. More colonies = stronger mutagen. Results correlate strongly with carcinogenicity because most carcinogens are mutagens.`
          },
          {
            question: `Homologous recombination repair of double-strand breaks is more accurate than NHEJ because:`,
            options: [`It copies the intact sister chromatid as a repair template`, `It directly ligates the two broken ends without trimming them`, `It works mainly in G$_1$, before replication can add errors`, `It uses reverse transcriptase to rebuild the missing sequence`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Homologous recombination (HR) uses the intact sister chromatid as a template to faithfully repair the break → high fidelity. NHEJ directly ligates the broken ends without a template → nucleotides may be lost or added → error-prone. HR is only available in S/G$_2$ phase (when a sister chromatid exists). BRCA1/BRCA2 are essential for HR — their loss forces reliance on error-prone NHEJ → genomic instability → cancer.`
          }
        ]
      }
    },
    {
      id: 'mb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Point mutations: silent (no change) < conservative missense < non-conservative missense < nonsense (truncation)
- Frameshifts (insertions/deletions not in multiples of 3): most devastating, alter all downstream codons
- Transitions (purine↔purine, pyrimidine↔pyrimidine) more common than transversions
- Repair hierarchy: proofreading → mismatch repair (Lynch syndrome when defective) → BER (small damage) → NER (bulky lesions, XP)
- Double-strand break repair: HR (accurate, needs sister chromatid, BRCA1/2) vs. NHEJ (error-prone, any phase)
- Ames test: his$^-$ Salmonella reversion on mutagen exposure = carcinogen screen
- p53: DNA damage → cell cycle arrest (via the CDK inhibitor p21) or apoptosis; mutated in >50% of cancers

<!-- yield:low -->
- Low-yield extras: MutS/MutL in mismatch repair; HNPCC as Lynch syndrome's other name, and microsatellite instability; AP endonuclease in BER; NER's ~24-32 nt excision patch; NHEJ defects and SCID; nonsense-mediated decay destroys mRNAs whose stop codon sits >50 nt upstream of the last exon junction; the p53 pathway's damage-sensing kinases, ATM/ATR
<!-- /yield -->`
    }
  ]
};
