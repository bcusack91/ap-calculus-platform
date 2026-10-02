export const mcatMolBioPart2Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb2-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 2 of 7 — Transcription**

### The Central Dogma

$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{RNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$

### RNA Polymerase — The Key Enzyme

- Reads template strand $3' \\to 5'$, synthesizes mRNA $5' \\to 3'$
- Does NOT need a primer (unlike DNA polymerase)
- Minimal proofreading (no $3' \\to 5'$ exonuclease like DNA polymerase's) → higher error rate than DNA replication (acceptable because mRNA is temporary)
- The mRNA sequence matches the **coding strand** (non-template), except U replaces T

### Prokaryotic vs. Eukaryotic Transcription

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| RNA Polymerase | One type (does it all) | Three: Pol I (rRNA), Pol II (mRNA), Pol III (tRNA, 5S rRNA) |
| Promoter | Upstream elements read by sigma factor | TATA box (~$-25$), plus enhancer elements |
| Initiation | Sigma factor recognizes promoter | General transcription factors + Mediator complex |
| Processing | None needed — mRNA used directly | 5' cap + 3' poly-A tail + splicing required |
| Location | Cytoplasm | Nucleus (processed mRNA exported) |
| Coupled with translation? | YES (ribosome attaches while still transcribing) | NO (must be processed and exported first) |

<!-- yield:low -->
- **Promoter details**: the bacterial promoter has two elements, at $-10$ (TATAAT, the Pribnow box) and $-35$.
- **Termination**: prokaryotes use rho-dependent termination or rho-independent hairpins; eukaryotic Pol II termination follows the polyadenylation signal (AAUAAA) and cleavage.
<!-- /yield -->

### Eukaryotic mRNA Processing — Three Essential Steps

**1. 5' Cap (7-methylguanosine)**
- A 7-methylguanosine joined 5'-to-5' by a triphosphate bridge, added co-transcriptionally (while transcription is ongoing)
- Functions: protects from 5' exonucleases, recognized by ribosome for translation initiation, aids nuclear export

**2. 3' Poly-A Tail (~200 adenines)**
- Added by poly-A polymerase, without a template, after the transcript is cleaved
- Functions: protects from 3' exonucleases, facilitates nuclear export, aids translation

<!-- yield:low -->
- Cleavage is signalled by the sequence AAUAAA upstream of the cut.
<!-- /yield -->

**3. Splicing (by the spliceosome)**
- Removes introns, joins exons
- Spliceosome = snRNPs (small nuclear ribonucleoproteins, each an snRNA bound to proteins) plus additional proteins
- Intron removal: precise cut at conserved GU (5' end of intron) and AG (3' end) sequences
- Creates a lariat intermediate

### Alternative Splicing — One Gene, Multiple Proteins

- Different combinations of exons → different mRNAs → different proteins from ONE gene
- Explains how ~20,000 human genes can produce >100,000 proteins

<!-- yield:low -->
- Example: the Drosophila DSCAM gene can produce >38,000 different mRNAs.
<!-- /yield -->`
    },
    {
      id: 'mb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transcription** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mutation in the spliceosome would most directly cause:`,
            options: [`Retention of introns in mRNA, yielding abnormal protein`, `Failure to add the 5' cap, leaving mRNA open to degradation`, `Failure to add the poly-A tail at the 3' end of the transcript`, `Mispairing of codons and anticodons at the ribosome A site`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The spliceosome removes introns from pre-mRNA. If defective, introns stay in the mature mRNA, often introducing premature stop codons or frameshifts → nonfunctional protein. Splicing defects cause diseases like spinal muscular atrophy and some forms of retinitis pigmentosa.`
          },
          {
            question: `RNA polymerase II does NOT require a primer, unlike DNA polymerase III, because:`,
            options: [`It can form the first phosphodiester bond with no primer 3'-OH`, `It uses a short DNA primer made by primase instead`, `The TATA box supplies the free 3'-OH needed to begin`, `General transcription factors supply the starting 3'-OH`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `RNA polymerases have the unique ability to join two free NTPs to start a chain: the first NTP itself supplies the 3'-OH, so no pre-existing strand is needed. DNA polymerases cannot do this — they require a pre-existing primer with a free 3'-OH. This fundamental difference is why primase (an RNA polymerase) is needed to start DNA replication.`
          },
          {
            question: `In prokaryotes, transcription and translation are coupled. This means:`,
            options: [`Ribosomes begin translating mRNA while RNA polymerase still transcribes it`, `Transcription occurs in the nucleus and translation in the cytoplasm simultaneously`, `A single enzyme complex carries out both transcription and translation`, `mRNA must be fully capped and spliced before translation can begin`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Prokaryotes lack a nucleus, so mRNA is immediately accessible to ribosomes. Ribosomes bind the 5' end of mRNA and begin translation while the 3' end is still being transcribed. This is impossible in eukaryotes because the nuclear envelope separates the two processes, and mRNA must be processed first.`
          }
        ]
      }
    },
    {
      id: 'mb2-deep',
      type: 'text' as const,
      content: `### Transcription Factors and Enhancers

- **General transcription factors**: Required for ALL Pol II genes; they bind the TATA box and recruit Pol II to the promoter.

<!-- yield:low -->
- The general factors are named TFIIA, TFIIB, TFIID and so on; TFIID contains TBP (TATA-binding protein), the subunit that recognizes the TATA box.
<!-- /yield -->

- **Specific transcription factors** (activators/repressors): Bind enhancers or silencers to modulate transcription rate
- **Enhancers**: Can be thousands of base pairs upstream or downstream of the gene — work through DNA looping
- **Mediator complex**: Bridge between transcription factors and RNA Pol II

### Inhibitors of Transcription — MCAT Drug Connections

| Inhibitor | Target | Clinical Use |
|-----------|--------|-------------|
| Rifampin | Bacterial RNA polymerase | Tuberculosis treatment |
| Alpha-amanitin | Eukaryotic RNA Pol II | Mushroom poisoning (Amanita) |

**Key**: Rifampin targets bacterial RNA Pol (one type) but NOT eukaryotic RNA Pol → selective antibiotic. Alpha-amanitin is toxic to humans because it inhibits our RNA Pol II.

<!-- yield:low -->
- **Actinomycin D** intercalates into DNA and blocks RNA polymerase in ALL cells; it is used in cancer chemotherapy and as a lab tool to freeze transcription.
<!-- /yield -->

### The mRNA Lifecycle

$$\\text{Transcription} \\to \\text{Processing (cap, tail, splice)} \\to \\text{Export through nuclear pore} \\to \\text{Translation} \\to \\text{Degradation}$$

- mRNA stability varies: some last minutes (growth factor mRNAs), others last days (globin mRNA)
- Sequences in the 3' UTR can mark an mRNA for rapid degradation

<!-- yield:low -->
- The best-known such sequences are AU-rich elements (AREs).
<!-- /yield -->

- microRNAs (miRNAs) can target specific mRNAs for degradation or translational repression`
    },
    {
      id: 'mb2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Transcription** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rifampin is an effective antibiotic for tuberculosis because it:`,
            options: [`Blocks bacterial RNA polymerase but not the eukaryotic enzymes`, `Blocks DNA gyrase, halting DNA replication in bacterial cells`, `Binds the 30S ribosomal subunit and blocks aminoacyl-tRNA entry`, `Inhibits RNA polymerase equally in bacteria and in human cells`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Rifampin specifically binds bacterial RNA polymerase, blocking transcription. Eukaryotic RNA polymerases are structurally different and not affected → selective toxicity. This is the basis of rifampin's use in TB treatment, where it is given as part of a multi-drug regimen.`
          },
          {
            question: `Alternative splicing allows:`,
            options: [`One gene to yield several proteins from different exon sets`, `Several different genes to be joined into a single mRNA`, `One mRNA to be read in several different reading frames`, `One mRNA to be translated by several ribosomes at once`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `By selectively including or excluding certain exons during splicing, one pre-mRNA can generate multiple mature mRNAs → multiple protein isoforms. This is tissue-specific (e.g., the calcitonin gene produces calcitonin in thyroid cells but CGRP in neurons through alternative splicing).`
          }
        ]
      }
    },
    {
      id: 'mb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- RNA Pol II transcribes mRNA in eukaryotes; reads template $3' \\to 5'$, synthesizes $5' \\to 3'$; no primer needed
- Eukaryotic mRNA processing: 5' cap (protection + ribosome recognition) + poly-A tail (stability) + splicing (intron removal)
- Splicing by spliceosome at GU---AG junctions; introns form lariat intermediate
- Alternative splicing: one gene → multiple proteins (explains protein diversity)
- Prokaryotes: no mRNA processing, transcription-translation coupled (no nuclear envelope)
- Drugs: rifampin (bacterial RNA Pol — selective toxicity), alpha-amanitin (eukaryotic RNA Pol II)
- mRNA stability regulated by 3' UTR elements, poly-A tail length, and miRNAs

<!-- yield:low -->
- Low-yield extras: the bacterial promoter's $-10$ (TATAAT, Pribnow box) and $-35$ elements; termination by rho or hairpins in bacteria and by the AAUAAA polyadenylation signal plus cleavage for Pol II; the general factors' names (TFIIA, TFIIB, TFIID) and TBP within TFIID; the DSCAM example; actinomycin D intercalates and blocks transcription in all cells; AU-rich elements (AREs) as the 3' UTR decay signal
<!-- /yield -->`
    }
  ]
};
