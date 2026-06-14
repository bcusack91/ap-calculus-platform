export const mcatMolBioPart7Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb7-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 7 of 7 — Viruses & Recombinant DNA**

### Virus Structure & Classification

| Feature | DNA Viruses | RNA Viruses | Retroviruses |
|---------|------------|------------|-------------|
| Genome | Usually dsDNA | ssRNA or dsRNA | ssRNA |
| Replication | Host DNA Pol | RNA-dependent RNA Pol (RdRp) | Reverse transcriptase → DNA → integrase |
| Example | Herpes, Adenovirus | Influenza, Ebola | HIV |

### Viral Life Cycles

**Lytic cycle**: the virus replicates, lyses the host cell, and releases new virions.
**Lysogenic cycle**: the viral DNA integrates into the host genome (a prophage), replicates passively with the host, and can later switch to the lytic cycle.

### Retroviruses (HIV)

$\\text{ssRNA} \\xrightarrow{\\text{reverse transcriptase}} \\text{dsDNA} \\xrightarrow{\\text{integrase}} \\text{provirus (in host DNA)}$

Reverse transcriptase lacks proofreading ($3' \\to 5'$ exonuclease) activity, giving HIV a very high mutation rate.

### Prions

- NOT viruses — they are misfolded proteins (no nucleic acid at all)
- They convert normally folded proteins into the misfolded form (a chain reaction)
- Resistant to standard sterilization (heat, UV, proteases)
- Examples: mad cow disease (BSE), Creutzfeldt-Jakob disease

### Recombinant DNA — The Cloning Toolkit

| Tool | Role |
|------|------|
| **Restriction enzymes** | Cut DNA at specific palindromic sites, often leaving "sticky ends" |
| **DNA ligase** | Joins the insert into a vector (seals the backbone) |
| **Plasmid vector** | Carries the gene of interest into a host (often has an antibiotic-resistance selectable marker) |
| **Reverse transcriptase** | Makes cDNA from mRNA → an intron-free coding sequence for bacterial expression |`
    },
    {
      id: 'mb7-worked',
      type: 'text' as const,
      content: `### Worked Example — Designing a Recombinant Insulin Plasmid

**Problem.** You want bacteria (*E. coli*) to produce human insulin. You have the human insulin **mRNA**, a plasmid with an ampicillin-resistance gene, restriction enzymes, ligase, and reverse transcriptase. Outline the cloning strategy and explain two MCAT-classic pitfalls.

**Step 1 — Make cDNA, not genomic DNA.** Use **reverse transcriptase** on the insulin mRNA to synthesize complementary DNA (cDNA). *Pitfall #1:* if you cloned the genomic gene instead, it would contain **introns**, and bacteria cannot splice (they lack the spliceosome), so they could not produce functional insulin. cDNA is already intron-free.

**Step 2 — Cut insert and vector with the SAME restriction enzyme.** Using one enzyme on both the cDNA and the plasmid generates **complementary sticky ends**, so the insert base-pairs with the opened vector. *Pitfall #2:* you must use compatible ends — mismatched ends won't anneal.

**Step 3 — Ligate.** **DNA ligase** seals the phosphodiester backbone, covalently inserting the gene into the plasmid to form recombinant DNA.

**Step 4 — Transform and select.** Introduce plasmids into *E. coli* (transformation), then plate on **ampicillin**. Only bacteria that took up the plasmid (carrying the ampicillin-resistance marker) survive — this is the **selectable marker** doing its job.

**Step 5 — Express.** A promoter on the plasmid drives transcription and translation of the insulin gene.

**Conclusion.** Reverse-transcribe mRNA → cut insert + vector with the same enzyme → ligate → transform → select with antibiotic → express. The two high-yield ideas: **use cDNA to avoid introns**, and **use a selectable marker to find successful transformants**.`
    },
    {
      id: 'mb7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Viruses & Biotech** 🎯`,
      exercise: {
        questions: [
          {
            question: `HIV is difficult to treat because:`,
            options: [`Reverse transcriptase has no proofreading → high mutation rate → drug resistance`, `HIV has a DNA genome`, `Antibiotics kill HIV-infected cells`, `HIV only infects red blood cells`],
            correctAnswer: 0,
            explanation: `Reverse transcriptase lacks $3' \\to 5'$ exonuclease (proofreading) activity, producing a very high mutation rate. This lets HIV rapidly evolve resistance to single drugs, which is why combination therapy (HAART) is used.`
          },
          {
            question: `When cloning a human gene for expression in bacteria, researchers typically insert cDNA (made from mRNA) rather than the genomic DNA sequence. The main reason is that:`,
            options: [`Bacteria lack the spliceosome, so they cannot remove introns present in genomic DNA — cDNA is already intron-free`, `Genomic DNA is too short to clone`, `cDNA replicates faster than genomic DNA`, `Bacteria destroy all double-stranded DNA`],
            correctAnswer: 0,
            explanation: `Eukaryotic genes contain introns that must be spliced out, but bacteria have no spliceosome. cDNA is reverse-transcribed from mature, already-spliced mRNA, so it contains only exons (coding sequence) and yields functional protein in bacteria.`
          },
          {
            question: `Restriction enzymes that leave "sticky ends" are especially useful in molecular cloning because the single-stranded overhangs:`,
            options: [`Are complementary, so an insert and vector cut with the same enzyme can base-pair and be ligated together`, `Prevent DNA ligase from acting`, `Permanently denature the DNA`, `Convert DNA into RNA`],
            correctAnswer: 0,
            explanation: `Sticky ends are short single-stranded overhangs. Cutting both the insert and the vector with the SAME enzyme generates complementary overhangs that base-pair by hydrogen bonding; DNA ligase then seals the backbone to create recombinant DNA.`
          },
          {
            question: `A bacteriophage integrates its DNA into the host chromosome and replicates passively along with the host genome for many generations without lysing the cell. This describes the:`,
            options: [`Lysogenic cycle (the integrated viral DNA is a prophage)`, `Lytic cycle`, `Retroviral reverse transcription step`, `Prion conversion process`],
            correctAnswer: 0,
            explanation: `In the lysogenic cycle, viral DNA integrates into the host genome as a prophage and is copied with each host division without immediately killing the cell. Environmental stress can later trigger a switch to the lytic cycle (active replication and cell lysis).`
          },
          {
            question: `Prions are unique infectious agents because they:`,
            options: [`Contain no nucleic acid — they are misfolded proteins that template the misfolding of normal proteins`, `Are a type of RNA virus`, `Replicate using reverse transcriptase`, `Are easily destroyed by routine autoclaving`],
            correctAnswer: 0,
            explanation: `Prions are proteinaceous infectious particles with NO DNA or RNA. A misfolded prion protein induces normal copies of the same protein to misfold, propagating the pathogenic conformation. They are notoriously resistant to standard sterilization, unlike conventional pathogens.`
          }
        ]
      }
    },
    {
      id: 'mb7-summary',
      type: 'text' as const,
      content: `### Molecular Biology — Complete! ✅

From DNA replication to gene regulation to virology and biotechnology, molecular biology is the most heavily tested content on the MCAT Bio/Biochem section. Master the central dogma, regulation, and biotechnology techniques.

**High-yield reminders:**
- Retroviruses: ssRNA → (reverse transcriptase) → dsDNA → (integrase) → provirus; no proofreading = rapid mutation
- Lytic = lyse now; lysogenic = integrate as a prophage and wait
- Prions are infectious misfolded proteins with no nucleic acid
- Clone with cDNA (no introns) and select transformants with an antibiotic-resistance marker`
    }
  ]
};
