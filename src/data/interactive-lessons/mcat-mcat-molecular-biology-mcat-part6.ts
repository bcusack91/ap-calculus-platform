export const mcatMolBioPart6Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb6-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 6 of 7 — Biotechnology Techniques**

### PCR (Polymerase Chain Reaction)

Amplifies a specific DNA sequence exponentially from a tiny sample.

| Step | Temperature | What Happens |
|------|-------------|-------------|
| **Denaturation** | ~95°C | Double-stranded DNA separates into single strands |
| **Annealing** | ~55-65°C | Short DNA primers bind (anneal) to complementary sequences flanking the target |
| **Extension** | ~72°C | Taq polymerase synthesizes new DNA from primers |

<!-- yield:low -->
- Typical step durations: ~30 sec denaturation, ~30 sec annealing, 1-2 min extension.
<!-- /yield -->

- After $n$ cycles: $2^n$ copies from one template molecule
- After 30 cycles: ~$10^9$ copies (1 billion)!
- **Taq polymerase**: From *Thermus aquaticus* (thermophilic bacterium) — survives 95°C denaturation

**Requirements**: Template DNA + two primers + dNTPs + Taq polymerase + Mg$^{2+}$

### Gel Electrophoresis

- DNA migrates toward the **positive electrode** (anode) because DNA is negatively charged (phosphate backbone)
- **Smaller fragments travel faster** (farther from wells)
- **Agarose gels**: Separate larger DNA fragments.  **PAGE**: Separate small fragments or proteins

<!-- yield:low -->
- Agarose resolves roughly 100 bp to 50 kb. Gels are stained with ethidium bromide (DNA) or Coomassie blue (protein).
<!-- /yield -->

### Blotting Techniques — "SNoW DRoP" Mnemonic

| Technique | Molecule Detected | Probe Used |
|-----------|------------------|-----------|
| **S**outhern blot | **D**NA | Labeled complementary DNA/RNA probe |
| **N**orthern blot | **R**NA | Labeled complementary DNA probe |
| **W**estern blot | **P**rotein | Labeled antibody |

Southern = DNA, Northern = RNA, Western = Protein → **S**NoW **DR**o**P**

### Restriction Enzymes

- Cut DNA at specific **palindromic sequences** (read same on both strands 5' → 3')
- Example: EcoRI recognizes GAATTC and cuts between G and A on each strand, leaving sticky overhangs
- **Sticky ends**: Overhang (easier to ligate) vs. **Blunt ends**: Straight cut
- Used in molecular cloning, RFLP analysis, and DNA fingerprinting`
    },
    {
      id: 'mb6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Biotechnology** 🎯`,
      exercise: {
        questions: [
          {
            question: `After 20 cycles of PCR starting from one template molecule, approximately how many copies are produced?`,
            options: [`About one million ($2^{20} \\approx 10^6$)`, `About 400 ($20^2$, squaring the cycle count)`, `About 40 (two new copies per cycle)`, `About one billion ($2^{30} \\approx 10^9$)`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `PCR doubles the target DNA each cycle: $2^{20} = 1{,}048{,}576 \\approx 10^6$ copies. This exponential amplification from even a single molecule is why PCR is used in forensics, paternity testing, viral detection, and ancient DNA analysis.`
          },
          {
            question: `A researcher wants to detect a specific mRNA in tissue samples. The appropriate technique is:`,
            options: [`Northern blot, which probes size-separated RNA`, `Southern blot, which probes size-separated DNA`, `Western blot, which probes proteins with antibodies`, `Standard PCR with Taq polymerase directly on the RNA`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Northern blot: extract total RNA → separate by gel electrophoresis → transfer to membrane → hybridize with labeled probe complementary to the target mRNA. Southern = DNA, Northern = RNA, Western = Protein (SNoW DRoP). Note: RT-PCR could also detect mRNA by first converting to cDNA.`
          },
          {
            question: `Taq polymerase is used in PCR instead of human DNA polymerase because:`,
            options: [`It is heat-stable and survives the 95°C denaturation step`, `It proofreads more accurately than human DNA polymerase`, `It works best at room temperature, simplifying the reaction`, `It can start new strands without needing any primers`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Taq polymerase is from *Thermus aquaticus*, a thermophilic bacterium from hot springs. It remains stable through repeated 95°C denaturation steps. Human DNA polymerase would be denatured and destroyed at this temperature. Note: Taq LACKS proofreading (no 3'→5' exonuclease) → higher error rate. For high-fidelity PCR, a proofreading thermostable polymerase is used instead.`
          }
        ]
      }
    },
    {
      id: 'mb6-deep',
      type: 'text' as const,
      content: `### Molecular Cloning

1. **Cut** target DNA and vector (plasmid) with the same restriction enzyme → compatible sticky ends
2. **Ligate**: DNA ligase joins insert into the vector
3. **Transform**: Introduce recombinant plasmid into bacteria (heat shock or electroporation)
4. **Select**: Use antibiotic resistance gene on plasmid → only transformed bacteria survive
5. **Screen**: Blue-white screening (an insert disrupts the plasmid's lacZ, so insert-carrying colonies stay white while empty-vector colonies turn blue), colony PCR, or sequencing

### CRISPR-Cas9 — Precise Gene Editing

- **CRISPR**: Clustered Regularly Interspaced Short Palindromic Repeats (bacterial immune defense)
- **Guide RNA (sgRNA)**: 20-nt sequence complementary to target DNA
- **Cas9**: Nuclease that creates a double-strand break at the target site
- **Repair outcomes**: NHEJ → gene knockout (insertions/deletions disrupt gene) or HDR → precise gene insertion (if template provided)
- Applications: disease gene correction, engineering immune cells for cancer immunotherapy, agricultural biotechnology

### Other Key Techniques

| Technique | Purpose | Key Feature |
|-----------|---------|-------------|
| **RT-PCR** | Detect/quantify mRNA | Reverse transcriptase converts mRNA → cDNA → then PCR |
| **qPCR (real-time PCR)** | Quantify DNA in real time | Fluorescent dyes measure amplification each cycle |
| **DNA sequencing (Sanger)** | Determine nucleotide sequence | Dideoxy chain terminators (ddNTPs) → fragments of every length |
| **Next-gen sequencing** | Sequence entire genomes | Massively parallel short-read sequencing |
| **Microarray (DNA chip)** | Gene expression profiling | Thousands of probes on chip → hybridize with labeled cDNA |
| **FISH** | Locate genes on chromosomes | Fluorescent probe binds specific chromosome region |
| **Flow cytometry (FACS)** | Sort cells by markers | Fluorescent antibodies + laser detection |`
    },
    {
      id: 'mb6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Techniques** 🎯`,
      exercise: {
        questions: [
          {
            question: `Sanger DNA sequencing uses dideoxynucleotides (ddNTPs) because they:`,
            options: [`Lack a 3'-OH, so each incorporation terminates the chain`, `Pair with any of the four bases, allowing universal reading`, `Are more stable than dNTPs at high sequencing temperatures`, `Cause polymerase to stall until a dNTP displaces them`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `ddNTPs lack the 3'-OH needed for the next phosphodiester bond → chain termination wherever a ddNTP is incorporated. By using all four ddNTPs (each labeled with a different fluorescent dye), you get fragments terminating at every position → gel electrophoresis separates by size → read the sequence from the gel pattern.`
          },
          {
            question: `A researcher wants to knock out a gene using CRISPR-Cas9. After Cas9 creates a double-strand break, the cell repairs it by NHEJ. This results in:`,
            options: [`Small indels that often shift the frame and inactivate the gene`, `Precise correction of the mutation using the sister chromatid`, `Seamless rejoining that restores the original sequence every time`, `Insertion of a donor gene copied into the cut site`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `NHEJ is error-prone: it directly ligates broken ends, often inserting or deleting small numbers of nucleotides. If these indels are not multiples of 3, they cause a frameshift → premature stop codon → gene knockout. For precise editing (gene correction or insertion), homology-directed repair (HDR) with a donor template is used instead.`
          }
        ]
      }
    },
    {
      id: 'mb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- PCR: Denature (95°C) → Anneal (~55-65°C) → Extend (72°C). $2^n$ copies after $n$ cycles. Taq polymerase is heat-stable but lacks proofreading.
- Gel electrophoresis: DNA runs to positive electrode; smaller fragments migrate farther
- Blots: Southern (DNA), Northern (RNA), Western (Protein) — "SNoW DRoP"
- Restriction enzymes cut palindromic sequences (EcoRI: GAATTC); sticky ends are easier to ligate than blunt ends
- Molecular cloning: cut → ligate → transform → select → screen (blue-white: insert disrupts lacZ → white colonies)
- CRISPR-Cas9: guide RNA + Cas9 nuclease → DSB → NHEJ (knockout) or HDR (precise edit)
- RT-PCR detects mRNA (via cDNA); Sanger sequencing uses ddNTP chain terminators
- Know when to use each technique for MCAT experimental design passages

<!-- yield:low -->
- Low-yield extras: PCR step durations (~30 sec, ~30 sec, 1-2 min); agarose's ~100 bp-50 kb range and the ethidium bromide / Coomassie stains
<!-- /yield -->`
    }
  ]
};
