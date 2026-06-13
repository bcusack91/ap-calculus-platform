export const bioGeneRegPart1Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp1-intro',
      type: 'text' as const,
      content: `
## Gene Regulation — Overview

**Part 1 of 7**

Every cell in your body — a neuron, a hepatocyte, a B lymphocyte — carries the **same complete genome**. A liver cell and a skin cell contain identical DNA, yet they look and behave nothing alike. How? They **express different subsets of their genes**. This is the central puzzle of gene regulation: not *which genes an organism has*, but *which genes are turned on, where, when, and how strongly*.

**Differential gene expression** is the source of cell differentiation in multicellular organisms and of metabolic flexibility in single-celled ones. A muscle cell transcribes actin and myosin genes heavily and keeps insulin genes silent; a pancreatic $\\beta$-cell does the reverse. The genome is the same — the *regulatory state* differs.

> **Big Idea (AP):** Information stored in DNA is not expressed uniformly. Cells regulate gene expression in response to internal signals and the external environment, and this regulation produces the diversity of cell types and the ability to respond to change. (AP Bio EU IST-2)
      `
    },
    {
      id: 'grp1-levels',
      type: 'text' as const,
      content: `
### Levels of Control: Where Can a Cell Intervene?

The path from a gene to a functional protein is long, and the cell can throttle flow at **every step**. Each control point is an opportunity to tune *how much* of a protein gets made.

| Level of control | What is regulated | Example mechanism |
|---|---|---|
| **Transcriptional** | Whether (and how often) RNA polymerase transcribes the gene | Repressors/activators binding DNA; chromatin state |
| **Post-transcriptional** | Processing, stability, and export of the RNA | Alternative splicing; mRNA degradation; miRNA targeting |
| **Translational** | Whether ribosomes translate the mRNA, and how fast | $5'$ UTR structure; translational repressors; initiation factors |
| **Post-translational** | Activity, location, and lifetime of the finished protein | Phosphorylation; ubiquitin-tagged degradation; cleavage |

**Transcriptional control is the most common and most energy-efficient** point of regulation: if a cell never makes the mRNA, it spends nothing on processing, translating, or degrading a protein it does not need. Most of this unit focuses on transcriptional control, but keep the full menu in mind — AP loves asking *which level* a given experiment is probing.

> **Logic check:** A drug that prevents an mRNA from being translated but leaves its abundance unchanged is acting at the **translational** level, not the transcriptional level. A Northern blot (which measures mRNA) would look normal; a Western blot (which measures protein) would show a drop.
      `
    },
    {
      id: 'grp1-constitutive',
      type: 'text' as const,
      content: `
### Constitutive vs. Regulated Genes; Cis vs. Trans

**Constitutive genes** ("housekeeping genes") are expressed continuously at a roughly steady level because their products are always needed — ribosomal proteins, glycolytic enzymes, tubulin. **Regulated genes** are switched on or off, or tuned up and down, in response to signals: a digestive enzyme made only when its substrate is present, a heat-shock protein induced only by stress.

To regulate transcription, two categories of player work together:

- **Cis-regulatory elements** are **DNA sequences** — they sit *on the same molecule* as the gene they control (promoters, operators, enhancers, silencers). "Cis" = "on the same side." A cis-element only affects the gene physically linked to it.
- **Trans-acting factors** are **diffusible molecules** (almost always proteins — transcription factors, repressors, activators) that are made elsewhere, float through the cell, and bind cis-elements. "Trans" = "across." A trans-factor can act on *any* matching DNA site in the cell.

This distinction is the single most tested concept in operon genetics (Part 6). A mutation in a **cis-element** affects only the copy of the gene it is attached to; a mutation in a **trans-factor's gene** affects every target the factor would normally bind, because the broken (or hyperactive) protein diffuses everywhere.

> **The central idea:** Regulation determines **which proteins a cell makes and how much** of each. Transcription factors (trans) read the cell's signals and bind regulatory DNA (cis) to set each gene's output. Differentiation, development, and homeostasis all reduce to this read-and-respond logic.
      `
    },
    {
      id: 'grp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Levels of Control & Cis/Trans
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher exposes cells to a hormone and finds that the mRNA level of gene X is unchanged, but the amount of protein X rises sharply within minutes. At which level is the hormone most likely acting?',
            options: [
              'Transcriptional control',
              'Translational control',
              'Chromatin remodeling',
              'Enhancer activation'
            ],
            correctAnswer: 1,
            explanation: 'Protein rose while mRNA stayed constant, so more protein is being made per mRNA — that is translational control (e.g., relieving a block on ribosome initiation). The trap is "transcriptional control": transcription would change mRNA abundance, but the mRNA level was explicitly unchanged. Chromatin remodeling and enhancer activation are also transcriptional and would alter mRNA, so they are ruled out too.'
          },
          {
            question: 'A mutation inactivates the gene encoding a trans-acting repressor protein. Compared with a mutation that destroys a single cis-acting operator sequence, the trans-factor mutation is expected to:',
            options: [
              'Affect only the one gene immediately adjacent to the mutation',
              'Affect every gene in the cell that the repressor normally binds, because the defective protein diffuses throughout the cell',
              'Have no effect because trans-factors are not required for transcription',
              'Permanently alter the DNA sequence of all target genes'
            ],
            correctAnswer: 1,
            explanation: 'A trans-acting factor is a diffusible protein, so losing it removes regulation at all of its binding sites genome-wide. The trap (option A) describes a cis mutation, which is limited to the physically linked gene — exactly the contrast being tested. Option D confuses regulation with mutation: a missing repressor changes expression, not the sequence of its targets.'
          },
          {
            question: 'Why is transcriptional control described as the most energetically efficient level of gene regulation?',
            options: [
              'It is the fastest possible way to change protein levels',
              'Blocking transcription means the cell never invests resources in processing, translating, or degrading an unneeded protein',
              'It is the only level that can completely silence a gene',
              'Transcription factors require no ATP to function'
            ],
            correctAnswer: 1,
            explanation: 'If the mRNA is never made, none of the downstream costs (splicing, export, ribosomes, amino acids, later degradation) are incurred — that is the efficiency argument. Option A is a trap: transcriptional control is often slower than post-translational control (e.g., phosphorylating an existing protein acts in seconds), so "fastest" is wrong. Other levels can also silence expression, so option C overstates the case.'
          }
        ]
      }
    },
    {
      id: 'grp1-prok-vs-euk',
      type: 'text' as const,
      content: `
### Prokaryotic vs. Eukaryotic Regulation: The Big Contrast

Bacteria and eukaryotes solve the same problem — making the right proteins at the right time — but with strikingly different architectures. This table previews the rest of the unit; Parts 2-5 fill in the mechanisms.

| Feature | Prokaryotes (e.g. *E. coli*) | Eukaryotes |
|---|---|---|
| **Gene organization** | Functionally related genes clustered in **operons**, transcribed as one mRNA | Genes regulated **individually**; no operons |
| **Primary tuning** | Rapid response to nutrients/environment | Long-term programs of differentiation + fast responses |
| **Chromatin** | Minimal packaging; DNA broadly accessible | DNA wound on histones; **chromatin state gates access** |
| **Transcription + translation** | **Coupled** (no nucleus; ribosomes load onto mRNA as it is made) | **Separated** by the nuclear envelope; mRNA is processed before export |
| **RNA processing** | Little or none | Extensive: 5' cap, poly-A tail, splicing |
| **Hallmark mechanisms** | Operons; repressors/inducers; CAP-cAMP | Enhancers + combinatorial TFs; epigenetics; alternative splicing; RNAi |

The deepest structural difference: because eukaryotes wrap DNA around **histones** to form chromatin, a eukaryotic gene must first be made *physically accessible* before it can be transcribed. Prokaryotes skip that gatekeeping layer. And because prokaryotes transcribe and translate in the same compartment at the same time, they can respond to a changing meal in seconds — which is exactly what the lac operon (Part 2) does.

> **AP trap to bank now:** **Operons are a prokaryotic feature.** If an AP question describes a eukaryotic gene "in an operon," it is wrong by definition. Eukaryotic genes are switched on and off one at a time by combinations of transcription factors.
      `
    },
    {
      id: 'grp1-signal-logic',
      type: 'text' as const,
      content: `
### The Read-and-Respond Logic — A Worked Example

Gene regulation is fundamentally a **signal-response loop**: the cell detects a condition, and a regulatory protein translates that condition into a change in gene output. Trace the logic with a generic example before meeting the real systems in Parts 2-5.

**Scenario.** A bacterium encounters a new sugar in its environment. It should build the enzyme that digests that sugar — but only now, while the sugar is present. Walk the steps:

1. **Signal:** the sugar (or a derivative) appears in the cytoplasm.
2. **Sensor/transducer:** a **regulatory protein** (a trans-acting factor) changes shape when it binds the signal molecule. This allosteric change is the heart of the response — the protein's DNA-binding behavior flips.
3. **DNA target:** the altered protein binds (or releases) a **cis-regulatory sequence** near the enzyme's gene.
4. **Output:** RNA polymerase is now allowed (or blocked) at the promoter; the enzyme's gene is transcribed (or not); the right amount of enzyme is produced.
5. **Feedback:** as the sugar is consumed, the signal fades, the regulatory protein reverts, and expression returns to baseline.

Notice what this loop accomplishes: **the genome never changes**, yet the *output* of one gene tracks the environment moment-to-moment. This is the entire conceptual content of gene regulation, scaled up: many such loops, layered at the levels in the table above, let a single genome run a bacterium responding to its meal or a human cell committing to becoming a neuron.

**Why "how much," not just "on/off."** Real regulation is rarely a clean switch. A gene can be expressed at high, medium, low, or trace levels, and cells routinely *tune* output by combining a strong/weak promoter, the number of bound activators, mRNA stability, and translation rate. When you analyze data, expect **fold-changes** — "expression rose roughly $5\\times$" — rather than absolute presence/absence.

| If the cell wants to... | It can change... | At which level |
|---|---|---|
| Stop making a protein entirely | Block transcription initiation | Transcriptional |
| Make several proteins from one gene | Splice the pre-mRNA differently | Post-transcriptional |
| Get *more* protein per transcript | Stabilize the mRNA / boost translation | Post-transcriptional / translational |
| Switch a protein on in seconds | Phosphorylate the existing protein | Post-translational |

> **Frame for the whole unit:** Every mechanism ahead — operons, enhancers, methylation, miRNAs — is a variation on the same theme: **a sensor reads a condition and sets gene output accordingly.** Keep asking, for any system: *What is the signal? What protein senses it? What DNA or RNA does it act on? Does output go up or down?*
      `
    },
    {
      id: 'grp1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A neuron and a white blood cell from the same person contain identical genomes yet have completely different shapes, proteins, and functions. The best explanation is that the two cell types:',
            options: [
              'Carry different genes selected during development',
              'Express different subsets of the same genes (differential gene expression)',
              'Have mutated their DNA in different ways',
              'Differ in the number of chromosomes they contain'
            ],
            correctAnswer: 1,
            explanation: 'Differentiation arises from differential gene expression: the same genome, different genes switched on. Option A is the classic trap — cells do not gain or lose genes during normal differentiation; they regulate which ones are active. Option C confuses regulation with mutation, and option D is false (somatic cells of one organism have the same chromosome number).'
          },
          {
            question: 'Which pairing correctly matches a regulatory player to its category?',
            options: [
              'An enhancer DNA sequence — trans-acting factor',
              'A diffusible repressor protein — cis-regulatory element',
              'An operator DNA sequence — cis-regulatory element',
              'A transcription-factor protein — cis-regulatory element'
            ],
            correctAnswer: 2,
            explanation: 'An operator is a DNA sequence physically linked to its gene, so it is a cis-regulatory element. The distractors invert the definitions: enhancers and operators are DNA (cis), while repressors and transcription factors are diffusible proteins (trans). Remembering "cis = DNA sequence, trans = diffusible protein" resolves all four options.'
          }
        ]
      }
    }
  ]
};
