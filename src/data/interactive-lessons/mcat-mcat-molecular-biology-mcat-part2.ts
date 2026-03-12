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
- Does NOT have proofreading ability → higher error rate than DNA replication (acceptable because mRNA is temporary)
- The mRNA sequence matches the **coding strand** (non-template), except U replaces T

### Prokaryotic vs. Eukaryotic Transcription

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| RNA Polymerase | One type (does it all) | Three: Pol I (rRNA), Pol II (mRNA), Pol III (tRNA, 5S rRNA) |
| Promoter | $-10$ (Pribnow box: TATAAT) and $-35$ region | TATA box (~$-25$), plus enhancer elements |
| Initiation | Sigma factor recognizes promoter | General transcription factors + Mediator complex |
| Termination | Rho-dependent or rho-independent (hairpin) | Polyadenylation signal (AAUAAA) then cleavage |
| Processing | None needed — mRNA used directly | 5' cap + 3' poly-A tail + splicing required |
| Location | Cytoplasm | Nucleus (processed mRNA exported) |
| Coupled with translation? | YES (ribosome attaches while still transcribing) | NO (must be processed and exported first) |

### Eukaryotic mRNA Processing — Three Essential Steps

**1. 5' Cap (7-methylguanosine)**
- Added co-transcriptionally (while transcription is ongoing)
- Functions: protects from 5' exonucleases, recognized by ribosome for translation initiation, aids nuclear export

**2. 3' Poly-A Tail (~200 adenines)**
- Added by poly-A polymerase after cleavage at AAUAAA signal
- Functions: protects from 3' exonucleases, facilitates nuclear export, aids translation

**3. Splicing (by the spliceosome)**
- Removes introns, joins exons
- Spliceosome = snRNPs (small nuclear ribonucleoproteins) + snRNAs
- Intron removal: precise cut at conserved GU (5' end of intron) and AG (3' end) sequences
- Creates a lariat intermediate

### Alternative Splicing — One Gene, Multiple Proteins

- Different combinations of exons → different mRNAs → different proteins from ONE gene
- Explains how ~20,000 human genes can produce >100,000 proteins
- Example: Drosophila DSCAM gene can produce >38,000 different mRNAs!`
    },
    {
      id: 'mb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transcription** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mutation in the spliceosome would most directly cause:`,
            options: [`Introns retained in mRNA leading to abnormal or nonfunctional protein`, `Failure of 5' capping`, `DNA replication errors at the replication fork`, `Ribosome malfunction during translation`],
            correctAnswer: 0,
            explanation: `The spliceosome removes introns from pre-mRNA. If defective, introns stay in the mature mRNA, often introducing premature stop codons or frameshifts → nonfunctional protein. Splicing defects cause diseases like spinal muscular atrophy and some forms of retinitis pigmentosa.`
          },
          {
            question: `RNA polymerase II does NOT require a primer, unlike DNA polymerase III, because:`,
            options: [`RNA Pol II can initiate synthesis de novo by forming the first phosphodiester bond without a free 3'-OH`, `RNA Pol II uses a DNA primer instead`, `The TATA box serves as a primer`, `Transcription factors provide the 3'-OH`],
            correctAnswer: 0,
            explanation: `RNA polymerases have the unique ability to join two free NTPs without an existing 3'-OH group. DNA polymerases cannot do this — they require a pre-existing primer with a free 3'-OH. This fundamental difference is why primase (an RNA polymerase) is needed to start DNA replication.`
          },
          {
            question: `In prokaryotes, transcription and translation are coupled. This means:`,
            options: [`Ribosomes begin translating the mRNA while RNA polymerase is still transcribing it`, `Transcription occurs in the nucleus and translation in the cytoplasm simultaneously`, `The same enzyme performs both transcription and translation`, `mRNA must be fully processed before translation can begin`],
            correctAnswer: 0,
            explanation: `Prokaryotes lack a nucleus, so mRNA is immediately accessible to ribosomes. Ribosomes bind the 5' end of mRNA and begin translation while the 3' end is still being transcribed. This is impossible in eukaryotes because the nuclear envelope separates the two processes, and mRNA must be processed first.`
          }
        ]
      }
    },
    {
      id: 'mb2-deep',
      type: 'text' as const,
      content: `### Transcription Factors and Enhancers

- **General transcription factors** (TFIIA, TFIIB, TFIID, etc.): Required for ALL Pol II genes. TFIID contains TBP (TATA-binding protein) that recognizes the TATA box.
- **Specific transcription factors** (activators/repressors): Bind enhancers or silencers to modulate transcription rate
- **Enhancers**: Can be thousands of base pairs upstream or downstream of the gene — work through DNA looping
- **Mediator complex**: Bridge between transcription factors and RNA Pol II

### Inhibitors of Transcription — MCAT Drug Connections

| Inhibitor | Target | Clinical Use |
|-----------|--------|-------------|
| Rifampin | Bacterial RNA polymerase | Tuberculosis treatment |
| Alpha-amanitin | Eukaryotic RNA Pol II | Mushroom poisoning (Amanita) |
| Actinomycin D | Intercalates DNA, blocks RNA Pol | Cancer chemotherapy |

**Key**: Rifampin targets bacterial RNA Pol (one type) but NOT eukaryotic RNA Pol → selective antibiotic. Alpha-amanitin is toxic to humans because it inhibits our RNA Pol II.

### The mRNA Lifecycle

$$\\text{Transcription} \\to \\text{Processing (cap, tail, splice)} \\to \\text{Export through nuclear pore} \\to \\text{Translation} \\to \\text{Degradation}$$

- mRNA stability varies: some last minutes (growth factor mRNAs), others last days (globin mRNA)
- AU-rich elements (AREs) in 3' UTR mark mRNA for rapid degradation
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
            options: [`Inhibits bacterial RNA polymerase without affecting eukaryotic RNA polymerases`, `Blocks DNA replication in both bacteria and human cells`, `Prevents mRNA splicing in bacteria`, `Inhibits bacterial ribosome function`],
            correctAnswer: 0,
            explanation: `Rifampin specifically binds the beta subunit of bacterial RNA polymerase, blocking transcription. Eukaryotic RNA polymerases are structurally different and not affected → selective toxicity. This is the basis of rifampin's use in TB treatment (often combined with isoniazid, ethambutol, and pyrazinamide).`
          },
          {
            question: `Alternative splicing allows:`,
            options: [`One gene to produce multiple different proteins by including different combinations of exons`, `Multiple genes to produce one protein`, `Introns to be translated into protein`, `The same mRNA to be translated by different ribosomes`],
            correctAnswer: 0,
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
- Drugs: rifampin (bacterial RNA Pol), alpha-amanitin (eukaryotic RNA Pol II), actinomycin D (intercalation)
- mRNA stability regulated by 3' UTR elements, poly-A tail length, and miRNAs`
    }
  ]
};
