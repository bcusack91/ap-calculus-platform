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
| **Mismatch repair (MMR)** | Post-replication mismatches | MutS detects mismatch → MutL recruits → excise and resynthesize | HNPCC (Lynch syndrome) |
| **Base excision repair (BER)** | Small base damage (deamination, oxidation) | Glycosylase removes damaged base → AP endonuclease cuts → Pol fills → Ligase seals | — |
| **Nucleotide excision repair (NER)** | Bulky lesions (thymine dimers, adducts) | Excise ~24-32 nt stretch around damage → Pol fills → Ligase seals | Xeroderma pigmentosum (XP) |
| **Homologous recombination** | Double-strand breaks (high fidelity) | Uses sister chromatid as template for repair | BRCA1/2 mutations → cancer |
| **Non-homologous end joining (NHEJ)** | Double-strand breaks (error-prone) | Directly ligates broken ends (may lose nucleotides) | Severe combined immunodeficiency |`
    },
    {
      id: 'mb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mutations & Repair** 🎯`,
      exercise: {
        questions: [
          {
            question: `A single nucleotide deletion in the second codon of an mRNA would:`,
            options: [`Cause a frameshift — every codon downstream is altered, likely producing a nonfunctional protein`, `Change only the second amino acid`, `Have no effect due to genetic code degeneracy`, `Only affect amino acids near the deletion`],
            correctAnswer: 0,
            explanation: `A single deletion (not a multiple of 3) shifts the reading frame by one nucleotide. Every triplet codon downstream is now read differently → every amino acid from that point on is wrong → almost certainly nonfunctional protein, often with a premature stop codon.`
          },
          {
            question: `In sickle cell disease, the mutation is GAG → GUG in the beta-globin gene. This is classified as a:`,
            options: [`Non-conservative missense mutation — Glu (charged, hydrophilic) is replaced by Val (nonpolar, hydrophobic)`, `Conservative missense mutation`, `Nonsense mutation creating a premature stop codon`, `Silent mutation with no functional consequences`],
            correctAnswer: 0,
            explanation: `Glu (glutamic acid) is negatively charged and hydrophilic. Val (valine) is nonpolar and hydrophobic. This dramatic chemical change causes hemoglobin S to polymerize under low O$_2$ conditions → sickle-shaped RBCs. This is the classic example of how a single amino acid change can cause devastating disease.`
          },
          {
            question: `A patient with xeroderma pigmentosum (XP) has extreme UV sensitivity because they lack:`,
            options: [`Nucleotide excision repair (NER) — the pathway that fixes UV-induced thymine dimers`, `Mismatch repair ability`, `Proofreading by DNA polymerase`, `Base excision repair capacity`],
            correctAnswer: 0,
            explanation: `UV light causes cyclobutane thymine dimers (covalent links between adjacent thymines). NER normally excises a ~24-32 nucleotide patch around the dimer and resynthesizes the segment. Without NER, thymine dimers accumulate → replication errors → skin cancer at very young ages. XP patients must avoid all UV exposure.`
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

### Nonsense-Mediated Decay (NMD)

- Quality control mechanism that degrades mRNAs with **premature stop codons**
- Prevents translation of truncated, potentially harmful proteins
- If a stop codon appears >50 nt upstream of the last exon-exon junction → mRNA degraded
- Clinically important: some genetic diseases are caused by NMD destroying mRNA before any protein is made

### p53 — The Guardian of the Genome

p53 is the central hub connecting DNA damage to cell fate:
1. DNA damage detected → ATM/ATR kinases activate → phosphorylate p53 → stabilize it (normally degraded by MDM2)
2. p53 activates **p21** (CDK inhibitor) → cell cycle arrest at G$_1$/S
3. If damage is repairable → DNA repair occurs → cell cycle resumes
4. If damage is irreparable → p53 activates **Bax** → apoptosis
5. p53 also upregulates DNA repair genes

**p53 is mutated or inactivated in >50% of all human cancers** — the single most commonly altered gene in cancer.`
    },
    {
      id: 'mb5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Mutations** 🎯`,
      exercise: {
        questions: [
          {
            question: `The Ames test detects mutagens by measuring:`,
            options: [`Reversion of his-minus bacteria to his-plus (ability to grow without histidine)`, `DNA damage visible on gel electrophoresis`, `Cell death rate in treated bacteria`, `Antibiotic resistance development`],
            correctAnswer: 0,
            explanation: `The Ames test uses Salmonella his$^-$ mutants that cannot grow without histidine. A mutagen causes reversion mutations (his$^-$ → his$^+$) → bacteria can now synthesize histidine → colony growth on histidine-free plates. More colonies = stronger mutagen. Results correlate strongly with carcinogenicity because most carcinogens are mutagens.`
          },
          {
            question: `Homologous recombination repair of double-strand breaks is more accurate than NHEJ because:`,
            options: [`It uses the sister chromatid as a template, providing an error-free copy for repair`, `It is faster than NHEJ`, `It does not require any enzymatic activity`, `It only occurs during G$_1$ phase`],
            correctAnswer: 0,
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
- Repair hierarchy: proofreading → mismatch repair (Lynch syndrome) → BER (small damage) → NER (bulky lesions, XP)
- Double-strand break repair: HR (accurate, needs sister chromatid, BRCA1/2) vs. NHEJ (error-prone, any phase)
- Ames test: his$^-$ Salmonella reversion on mutagen exposure = carcinogen screen
- p53: DNA damage → cell cycle arrest (p21) or apoptosis (Bax); mutated in >50% of cancers`
    }
  ]
};
