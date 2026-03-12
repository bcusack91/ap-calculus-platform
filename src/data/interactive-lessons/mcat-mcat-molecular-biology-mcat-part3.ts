export const mcatMolBioPart3Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb3-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 3 of 7 — Translation (Protein Synthesis)**

### The Genetic Code — Properties

- **64 codons** = 4 bases in groups of 3 ($4^3 = 64$)
- 61 sense codons (amino acids) + 3 stop codons (UAA, UAG, UGA)
- **Start codon**: AUG = methionine (also signals ribosome binding in eukaryotes; fMet in prokaryotes)
- **Degenerate** (redundant): Multiple codons per amino acid (especially at 3rd "wobble" position)
- **NOT ambiguous**: Each codon specifies exactly ONE amino acid
- **Universal** (nearly): Same code in almost all organisms (minor exceptions in mitochondria)

### Wobble Position — Why Degeneracy Matters

The 3rd base of a codon has "relaxed" base-pairing rules:
- One tRNA can recognize multiple codons that differ only at position 3
- This is why most synonymous mutations (silent) occur at position 3
- Wobble pairing: G-U is allowed at position 3 (not normally allowed elsewhere)

### Ribosome Structure and Sites

| Subunit | Prokaryotic | Eukaryotic | Function |
|---------|------------|-----------|----------|
| Small | 30S | 40S | mRNA binding, codon-anticodon matching |
| Large | 50S | 60S | Peptidyl transferase (catalyzes peptide bond) |
| Complete | 70S | 80S | Full translating ribosome |

**Ribosome sites** (on large subunit):

| Site | Name | Function |
|------|------|----------|
| **A** (Aminoacyl) | Entry site | New charged tRNA enters; codon-anticodon checking |
| **P** (Peptidyl) | Peptide site | Growing polypeptide chain held here (initiator tRNA starts here) |
| **E** (Exit) | Exit site | Deacylated (empty) tRNA exits |

### Translation Steps — Initiation, Elongation, Termination

**Initiation** (rate-limiting step):
- Prokaryotes: 30S binds Shine-Dalgarno sequence on mRNA → finds AUG → fMet-tRNA in P site → 50S joins
- Eukaryotes: 40S + initiator Met-tRNA binds 5' cap → scans for first AUG (Kozak sequence context) → 60S joins

**Elongation** (cyclical):
1. Charged tRNA enters A site (requires EF-Tu + GTP in prokaryotes)
2. Peptidyl transferase forms peptide bond (23S rRNA = ribozyme!)
3. Translocation: ribosome moves one codon toward 3' end (requires EF-G + GTP)
4. tRNA shifts P → E; A site open for next tRNA

**Termination**:
- Stop codon (UAA, UAG, UGA) enters A site
- Release factor binds (mimics tRNA shape) → peptide released → ribosome dissociates`
    },
    {
      id: 'mb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Translation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An antibiotic that specifically binds the 50S ribosomal subunit would selectively inhibit:`,
            options: [`Bacterial translation — bacteria have 70S ribosomes (50S + 30S)`, `Human cell translation — humans have 80S ribosomes (60S + 40S)`, `Both bacterial and human translation equally`, `DNA replication in bacteria`],
            correctAnswer: 0,
            explanation: `Bacterial ribosomes (70S = 50S + 30S) are structurally different from eukaryotic ribosomes (80S = 60S + 40S). Antibiotics targeting 50S (chloramphenicol, erythromycin, clindamycin, linezolid) affect only bacteria. Note: mitochondria also have 70S ribosomes, explaining some antibiotic side effects.`
          },
          {
            question: `The peptidyl transferase that catalyzes peptide bond formation is remarkable because:`,
            options: [`It is made of rRNA, not protein — making the ribosome a ribozyme`, `It requires ATP for each peptide bond`, `It can only work at the A site`, `It is a protein enzyme encoded by a viral gene`],
            correctAnswer: 0,
            explanation: `The peptidyl transferase activity resides in the 23S rRNA (in bacteria) or 28S rRNA (in eukaryotes) of the large subunit. The ribosome is therefore a ribozyme — an RNA enzyme. This supports the "RNA World" hypothesis that RNA catalysts preceded protein enzymes.`
          },
          {
            question: `A point mutation changes the anticodon of a tRNA from 3'-UAC-5' to 3'-UAU-5'. This tRNA will now:`,
            options: [`Deliver its amino acid in response to a different mRNA codon, potentially causing a missense-like error`, `Be unable to bind any codon`, `Function normally because of wobble`, `Deliver a different amino acid`],
            correctAnswer: 0,
            explanation: `The tRNA still carries the same amino acid (aminoacyl-tRNA synthetase recognizes the tRNA body, not just the anticodon). But the altered anticodon now recognizes a different mRNA codon → wrong amino acid at that position. This would cause a missense-like error at every instance of the new codon. Note: the amino acid loaded on the tRNA does NOT change.`
          }
        ]
      }
    },
    {
      id: 'mb3-deep',
      type: 'text' as const,
      content: `### Post-Translational Modifications

After translation, proteins must be properly modified and folded:

| Modification | Function | Location |
|-------------|----------|----------|
| Signal peptide cleavage | Removes targeting sequence | ER lumen |
| Glycosylation (N-linked) | Protein folding, stability | ER (begins) |
| Glycosylation (O-linked) | Cell signaling, mucus | Golgi |
| Phosphorylation | Activation/inactivation of enzymes | Cytoplasm (by kinases) |
| Ubiquitination | Tags protein for proteasome degradation | Cytoplasm |
| Disulfide bond formation | Protein stability (extracellular proteins) | ER lumen (oxidizing environment) |
| Proteolytic cleavage | Activates zymogens/prohormones | Various (e.g., insulin from proinsulin) |

### Antibiotics Targeting Translation — MCAT Must-Know

| Drug | Target | Subunit | Mnemonic |
|------|--------|---------|----------|
| Tetracycline | Blocks A site (tRNA entry) | 30S | "T for thirty" |
| Aminoglycosides (gentamicin) | Cause misreading of mRNA | 30S | Misread at thirty |
| Chloramphenicol | Blocks peptidyl transferase | 50S | "Fifty" |
| Erythromycin (macrolides) | Blocks translocation | 50S | "Fifty" |
| Clindamycin | Blocks translocation | 50S | "Fifty" |
| Linezolid | Blocks initiation complex formation | 50S | "Fifty" |

### Aminoacyl-tRNA Synthetase — The Second Genetic Code

- **20 aminoacyl-tRNA synthetases** (one per amino acid)
- Charges tRNA: amino acid + tRNA + ATP → aminoacyl-tRNA + AMP + PPi
- **Recognition**: enzyme recognizes BOTH the amino acid AND specific features of the tRNA (acceptor stem, anticodon loop)
- Proofreading (editing site): hydrolyzes incorrectly attached amino acids
- This is called the "second genetic code" because accuracy of translation depends on correct charging`
    },
    {
      id: 'mb3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Translation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Diphtheria toxin ADP-ribosylates EF-2 (eukaryotic elongation factor 2). This would:`,
            options: [`Block translocation of the ribosome along mRNA, halting protein synthesis in human cells`, `Prevent tRNA charging`, `Block mRNA splicing`, `Inhibit DNA replication`],
            correctAnswer: 0,
            explanation: `EF-2 (eukaryotic equivalent of prokaryotic EF-G) is essential for ribosome translocation along mRNA during elongation. ADP-ribosylation by diphtheria toxin inactivates EF-2 → translation stops → cell death. A single molecule of toxin can kill a cell because it catalytically modifies many EF-2 molecules.`
          },
          {
            question: `A researcher adds puromycin to a cell-free translation system. Puromycin structurally resembles aminoacyl-tRNA and enters the A site. The result is:`,
            options: [`Premature chain termination — puromycin bonds to the peptide but cannot form the next peptide bond`, `Enhanced translation speed`, `Misreading of the genetic code`, `Blocking of initiation complex formation`],
            correctAnswer: 0,
            explanation: `Puromycin mimics the aminoacyl end of tRNA. It enters the A site and forms a peptide bond with the growing chain. However, the resulting peptidyl-puromycin cannot undergo translocation or further elongation → premature release of a truncated polypeptide. Puromycin affects both prokaryotic and eukaryotic ribosomes.`
          }
        ]
      }
    },
    {
      id: 'mb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Genetic code: 64 codons, degenerate but NOT ambiguous, nearly universal. Start = AUG, Stop = UAA/UAG/UGA
- Wobble at 3rd position explains degeneracy and why silent mutations cluster there
- Ribosome sites: A (entry), P (peptide), E (exit). Peptidyl transferase = ribozyme (rRNA catalysis)
- Prokaryotic initiation: Shine-Dalgarno. Eukaryotic: 5' cap scanning for AUG in Kozak context
- Aminoacyl-tRNA synthetases = "second genetic code" — charge tRNAs with correct amino acids
- Antibiotics: 30S targets (tetracycline, aminoglycosides) vs. 50S targets (chloramphenicol, erythromycin, clindamycin)
- Toxins: diphtheria (EF-2 ADP-ribosylation), puromycin (premature termination)`
    }
  ]
};
