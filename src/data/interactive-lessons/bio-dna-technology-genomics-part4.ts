export const bioDnaTechnologyGenomicsPart4Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna4-intro',
      type: 'text' as const,
      content: `
## DNA Sequencing & Bioinformatics

**Part 4 of 7 — DNA Technology & Genomics**

DNA sequencing determines the exact order of nucleotides in a DNA molecule. Combined with computational tools, sequencing data drives modern genomics.

### Sanger Sequencing (Chain-Termination Method)

Developed by Frederick Sanger in 1977, this method was the gold standard for decades and was used to complete the Human Genome Project.

#### Components
- **Template DNA** (single-stranded)
- **Primer** complementary to a known flanking sequence
- **DNA polymerase**
- **Normal dNTPs** (dATP, dTTP, dGTP, dCTP)
- **Dideoxynucleotides (ddNTPs)** — each labeled with a different fluorescent dye

#### How ddNTPs Work

Dideoxynucleotides lack a **3′-OH group**:

- Normal dNTP: has 3′-OH → chain can continue
- ddNTP: has 3′-H → **chain terminates** (no 3′-OH available for the next phosphodiester bond)

Because ddNTPs are present at low concentration alongside normal dNTPs, chain termination occurs **randomly** at every position, generating fragments of every possible length.

#### Reading the Sequence

1. Fragments are separated by **capillary electrophoresis** (by size, single-nucleotide resolution).
2. A **laser** excites the fluorescent label on each fragment as it passes a detector.
3. The color of fluorescence identifies the terminal base (A, T, G, or C).
4. A computer generates a **chromatogram** — peaks of four colors representing the sequence.
      `
    },
    {
      id: 'dna4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sanger Sequencing** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why do dideoxynucleotides (ddNTPs) cause chain termination during Sanger sequencing?',
            options: [
              'They lack a 3′-OH group, preventing formation of the next phosphodiester bond',
              'They are too large to fit into the active site of DNA polymerase',
              'They bind irreversibly to the template strand, blocking further synthesis',
              'They cause DNA polymerase to dissociate from the template'
            ],
            correctAnswer: 0,
            explanation: 'The 3′-OH group is essential for forming the phosphodiester bond with the next incoming nucleotide. Without it (ddNTPs have 3′-H instead), the growing chain cannot be extended, and synthesis terminates at that position.'
          },
          {
            question: 'In modern Sanger sequencing, how is the identity of each terminal nucleotide determined?',
            options: [
              'Each ddNTP is labeled with a different fluorescent dye, detected by a laser as fragments pass through a capillary',
              'Radioactive labels on each ddNTP are detected by autoradiography',
              'The mass of each fragment is measured by mass spectrometry',
              'Ethidium bromide staining reveals different colors for each base'
            ],
            correctAnswer: 0,
            explanation: 'Modern Sanger sequencing uses four different fluorescent dyes (one per ddNTP). As fragments migrate through capillary electrophoresis, a laser excites the dye on each fragment, and the emitted color identifies the terminal base.'
          }
        ]
      }
    },
    {
      id: 'dna4-ngs-text',
      type: 'text' as const,
      content: `
### Next-Generation Sequencing (NGS)

NGS technologies sequence **millions of fragments simultaneously** (massively parallel sequencing), dramatically reducing cost and time.

#### Key Differences from Sanger

| Feature | Sanger | NGS |
|---------|--------|-----|
| Throughput | One fragment at a time | Millions in parallel |
| Read length | ~700–1,000 bp | 75–300 bp (short-read); 10–100 kb (long-read) |
| Cost per genome | ~$1,000,000 (HGP era) | ~$200–1,000 today |
| Speed | Weeks to months | Hours to days |

#### Common NGS Platforms
- **Illumina** — short-read sequencing by synthesis; dominant platform
- **Oxford Nanopore** — long-read; DNA passes through a protein pore; real-time detection
- **PacBio** — long-read; single-molecule real-time (SMRT) sequencing

### Bioinformatics Tools

#### BLAST (Basic Local Alignment Search Tool)
- Compares a query DNA or protein sequence against a **database** of known sequences.
- Returns **homologous sequences** ranked by similarity score and E-value.
- E-value: the number of alignments expected by chance. Lower E-value = more significant match.

#### Genome Databases
- **GenBank** (NCBI) — public repository of all known DNA sequences
- **UCSC Genome Browser** — visualize genes, regulatory elements, and variation across genomes
- **Ensembl** — comprehensive genome annotation for vertebrates and other eukaryotes
      `
    },
    {
      id: 'dna4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — NGS & Bioinformatics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the primary advantage of next-generation sequencing over Sanger sequencing?',
            options: [
              'NGS can sequence millions of DNA fragments simultaneously, greatly increasing throughput',
              'NGS produces longer individual reads than Sanger sequencing',
              'NGS does not require any computational analysis',
              'NGS uses radioactive labels instead of fluorescent dyes'
            ],
            correctAnswer: 0,
            explanation: 'The defining feature of NGS is massively parallel sequencing — millions of fragments are sequenced at the same time. This increases throughput and dramatically reduces the cost and time to sequence a genome.'
          },
          {
            question: 'A BLAST search returns a hit with an E-value of $1 \\times 10^{-50}$. What does this indicate?',
            options: [
              'The match is highly significant — extremely unlikely to have occurred by chance',
              'The match is not significant and likely occurred by random chance',
              'The query sequence has exactly 50 mutations compared to the database match',
              'The database sequence is 50% identical to the query'
            ],
            correctAnswer: 0,
            explanation: 'The E-value represents the expected number of alignments with that score occurring by chance. An E-value of $10^{-50}$ is extremely small, meaning the match is almost certainly due to true homology rather than random similarity.'
          }
        ]
      }
    },
    {
      id: 'dna4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Sequencing & Bioinformatics** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Dideoxynucleotides lack a _____ group, which causes chain termination.',
            options: ["3′-OH", "5′-phosphate", "nitrogenous base", "sugar ring"]
          },
          {
            label: 'NGS sequences millions of fragments _____, dramatically increasing throughput.',
            options: ['simultaneously', 'sequentially', 'manually', 'radioactively']
          },
          {
            label: 'BLAST compares a query sequence against a _____ to find homologous sequences.',
            options: ['database', 'gel', 'primer library', 'restriction map']
          },
          {
            label: 'A lower BLAST E-value indicates a _____ significant match.',
            options: ['more', 'less', 'randomly', 'equally']
          }
        ],
        correctAnswers: ["3′-OH", 'simultaneously', 'database', 'more'],
        hint1: 'Think about which chemical group is needed to form the next phosphodiester bond.',
        hint2: 'The "massively parallel" nature of NGS means many fragments at once.',
        hint3: 'E-value = expected number of chance hits. Smaller number = less likely to be random.',
        explanation: 'ddNTPs lack the 3′-OH needed for chain extension. NGS sequences millions of fragments simultaneously (in parallel). BLAST searches sequence databases for homologs. Lower E-values indicate more statistically significant matches.'
      }
    },
    {
      id: 'dna4-summary',
      type: 'text' as const,
      content: `
### Part 4 Summary

| Concept | Key Detail |
|---------|-----------|
| Sanger sequencing | ddNTPs cause chain termination; fragments separated by size |
| ddNTPs | Lack 3′-OH → no phosphodiester bond → termination |
| NGS | Massively parallel; millions of reads simultaneously |
| BLAST | Compares sequences to databases; E-value measures significance |
| Genome databases | GenBank, UCSC, Ensembl — public sequence repositories |

**Up next → Part 5: CRISPR & Gene Editing**
      `
    }
  ]
};
