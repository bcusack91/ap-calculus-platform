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
- **Start codon**: AUG = methionine (eukaryotic ribosomes scan from the 5' cap to the first AUG; prokaryotes start with fMet)
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

**Ribosome sites** (formed between the two subunits):

| Site | Name | Function |
|------|------|----------|
| **A** (Aminoacyl) | Entry site | New charged tRNA enters; codon-anticodon checking |
| **P** (Peptidyl) | Peptide site | Growing polypeptide chain held here (initiator tRNA starts here) |
| **E** (Exit) | Exit site | Deacylated (empty) tRNA exits |

### Translation Steps — Initiation, Elongation, Termination

**Initiation** (rate-limiting step):
- Prokaryotes: 30S binds Shine-Dalgarno sequence on mRNA → finds AUG → fMet-tRNA in P site → 50S joins
- Eukaryotes: 40S + initiator Met-tRNA binds 5' cap → scans for first AUG → 60S joins

<!-- yield:low -->
- The sequence surrounding a eukaryotic start AUG that favors its use is the Kozak sequence.
<!-- /yield -->

**Elongation** (cyclical):
1. Charged tRNA enters A site (delivered by an elongation factor, powered by GTP)
2. Peptidyl transferase forms peptide bond (catalyzed by large-subunit rRNA = ribozyme!)
3. Translocation: ribosome moves one codon toward 3' end (a second elongation factor, powered by GTP)
4. tRNA shifts P → E; A site open for next tRNA

<!-- yield:low -->
- Factor and rRNA names: EF-Tu delivers charged tRNAs in prokaryotes (EF-1 in eukaryotes); EF-G drives translocation (EF-2 in eukaryotes); the catalytic rRNA is 23S in bacteria and 28S in eukaryotes.
<!-- /yield -->

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
            options: [`Bacterial translation, since bacteria have 70S ribosomes`, `Human translation, since human ribosomes contain a 60S subunit`, `Bacterial and human translation to the same extent`, `Bacterial transcription by the RNA polymerase core enzyme`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Bacterial ribosomes (70S = 50S + 30S) are structurally different from eukaryotic ribosomes (80S = 60S + 40S). Antibiotics targeting 50S (chloramphenicol, macrolides such as erythromycin) affect only bacteria. Note: mitochondria also have 70S ribosomes, explaining some antibiotic side effects.`
          },
          {
            question: `The peptidyl transferase that catalyzes peptide bond formation is remarkable because:`,
            options: [`It is rRNA, not protein, so the ribosome is a ribozyme`, `It is a protein enzyme encoded in the mitochondrial genome`, `It hydrolyzes GTP to power each new peptide bond`, `It is a small-subunit protein that also decodes the mRNA`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The peptidyl transferase activity resides in the large-subunit rRNA. The ribosome is therefore a ribozyme — an RNA enzyme. This supports the "RNA World" hypothesis that RNA catalysts preceded protein enzymes.`
          },
          {
            question: `A point mutation changes the anticodon of a tRNA from 3'-UAC-5' to 3'-UGC-5'. Assuming it is still charged with its usual amino acid, this tRNA will now:`,
            options: [`Deliver its usual amino acid in response to a different codon`, `Carry a new amino acid that matches its altered anticodon`, `Be unable to pair with any mRNA codon at the A site`, `Cause a frameshift by pairing with only two codon bases`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `As the stem specifies, the tRNA still carries its original amino acid. But the altered anticodon now recognizes a different mRNA codon → wrong amino acid at that position. This would cause a missense-like error at every instance of the new codon. Note: the amino acid loaded on the tRNA does NOT change.`
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

### Antibiotics Targeting Translation

- Many antibiotics exploit the ribosome difference: drugs that bind the bacterial **30S** or **50S** subunit stop bacterial translation while sparing human 80S ribosomes (selective toxicity)
- Each drug jams one step: tRNA entry at the A site, accurate codon reading, peptide bond formation, translocation, or initiation
- Mitochondria have bacteria-like ribosomes, which explains some side effects

| Drug | Target | Subunit |
|------|--------|---------|
| Tetracyclines | Block the A site (tRNA entry) | 30S |
| Aminoglycosides (gentamicin) | Cause misreading of mRNA | 30S |
| Chloramphenicol | Blocks peptidyl transferase | 50S |
| Macrolides (erythromycin) | Block translocation | 50S |

<!-- yield:low -->
- Two more 50S drugs: **clindamycin** blocks translocation; **linezolid** blocks initiation complex formation.
<!-- /yield -->

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
            question: `Diphtheria toxin inactivates a eukaryotic elongation factor. In treated cells, ribosomes stall with the growing peptide attached to the tRNA in the A site and a deacylated tRNA in the P site. Which step is blocked?`,
            options: [`Translocation of the ribosome by one codon`, `Aminoacyl-tRNA delivery into the open A site`, `Peptide-bond formation by large-subunit rRNA`, `Stop-codon recognition by a eukaryotic release factor`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Read the stalled state. The peptide already sits on the A-site tRNA, so the incoming tRNA was delivered AND the peptide bond was formed — those steps worked. The next step would shift the ribosome one codon: the peptidyl-tRNA moves from A to P and the empty tRNA from P to E, reopening the A site. That translocation step, driven by a GTP-using elongation factor, is what the toxin blocks, so translation halts and the cell dies. Release factors act only at stop codons, which a ribosome stalled mid-elongation never reaches. One toxin molecule can kill a cell because it modifies many factor molecules catalytically.`
          },
          {
            question: `A researcher adds puromycin to a cell-free translation system. Puromycin structurally resembles aminoacyl-tRNA and enters the A site. The result is:`,
            options: [`Premature chain termination, releasing a truncated peptide`, `Readthrough of stop codons, producing lengthened proteins`, `Misreading of codons, inserting wrong amino acids into the chain`, `Blocking of initiation so no peptide bonds form at all`],
            correctAnswer: 0,
            yield: 'MEDIUM',
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
- Prokaryotic initiation: Shine-Dalgarno. Eukaryotic: 5' cap scanning for the first AUG
- Elongation factors use GTP for tRNA delivery and for translocation
- Aminoacyl-tRNA synthetases = "second genetic code" — charge tRNAs with correct amino acids
- Antibiotics: drugs binding the bacterial 30S or 50S subunit spare human 80S ribosomes (selective toxicity) — 30S: tetracyclines (A site), aminoglycosides (misreading); 50S: chloramphenicol (peptidyl transferase), macrolides (translocation)
- Toxins: diphtheria (inactivates the translocation factor), puromycin (premature termination)

<!-- yield:low -->
- Low-yield extras: the Kozak sequence around the eukaryotic start AUG; elongation-factor names (EF-Tu/EF-1 deliver tRNA, EF-G/EF-2 translocate) and the catalytic rRNA (23S bacterial, 28S eukaryotic); clindamycin (50S, translocation) and linezolid (50S, initiation)
<!-- /yield -->`
    }
  ]
};
