export const bioGeneRegPart3Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp3-intro',
      type: 'text' as const,
      content: `
## Eukaryotic Regulation

**Part 3 of 7**

Eukaryotes face a regulatory challenge bacteria never do: building and maintaining hundreds of distinct cell types from one genome, over an organism's whole lifetime. Their solution is **richer and more layered** than the prokaryotic operon. Two architectural facts shape everything:

1. **Eukaryotic genes are regulated individually, not in operons.** Each gene has its own promoter and its own set of regulatory sequences. Genes in the same pathway are usually scattered across chromosomes and switched on by *shared transcription factors*, not by being strung together on one mRNA.
2. **DNA is packaged into chromatin.** Before a gene can even be read, its DNA must be made physically accessible. Chromatin state is the first gate.

> **AP trap (carry it forward):** **Operons are prokaryotic.** A eukaryotic question that mentions "the operon for muscle genes" is wrong on its face. Eukaryotic coordination comes from common transcription factors acting on individually promoted genes.
      `
    },
    {
      id: 'grp3-chromatin',
      type: 'text' as const,
      content: `
### Chromatin Structure — The First Gate

Eukaryotic DNA is wound around **histone** proteins to form **nucleosomes**, which fold into higher-order chromatin. How tightly the DNA is packed determines whether transcription machinery can reach it:

| State | Packing | Transcription factor / polymerase access | Gene activity |
|---|---|---|---|
| **Euchromatin** | Loose, open | Accessible | Genes can be **expressed** |
| **Heterochromatin** | Tightly condensed | Blocked | Genes are **silenced** |

A gene buried in heterochromatin is effectively off no matter what activators are floating in the nucleus — the proteins cannot physically dock. Converting between states (via the chromatin-remodeling and histone-modifying enzymes detailed in Part 4) is therefore a master switch. This packaging layer **has no equivalent in the lac operon**, where the DNA is broadly open and regulation happens entirely at the operator/promoter.

> **Mechanistic link:** Because access is gated by chromatin, a eukaryotic gene must be (1) made accessible *and* (2) bound by the right activators to be transcribed. Two conditions, not one — which is why eukaryotic control is described as multilayered.
      `
    },
    {
      id: 'grp3-enhancers',
      type: 'text' as const,
      content: `
### Enhancers, Silencers, and Combinatorial Control

Once chromatin is open, transcription of a eukaryotic gene depends on proteins binding regulatory DNA — but those sequences can sit far from the gene.

- **Enhancers** are DNA elements (cis) that **increase** transcription, often located thousands of base pairs upstream, downstream, or even within introns. **Activator** proteins (trans) bind enhancers; the DNA loops so the bound activators contact the promoter machinery.
- **Silencers** are DNA elements (cis) that **decrease** transcription when bound by **repressor** proteins (trans).
- **General (basal) transcription factors** assemble at the promoter (around the TATA box) and position **RNA polymerase II**; they are required for any transcription but give only a low basal rate.
- The **Mediator complex** is the physical bridge: it relays signals from distant enhancer-bound activators to the general transcription factors and polymerase at the promoter.

**Combinatorial control** is the key eukaryotic principle: a typical gene is governed not by one switch but by a **combination** of many transcription factors binding many elements. A gene turns on only when the *right set* of activators is present together. This is powerful because a few hundred transcription factors, used in different combinations, can specify thousands of distinct gene-expression patterns — enough to define every cell type from one genome.

Cell-type specificity emerges from this: a liver cell and a neuron differ because each contains a **different combination** of active transcription factors, which switch on different enhancers, which turn on different gene sets.

> **Contrast with operons:** Bacteria coordinate genes by *physical linkage* (one operon, one mRNA). Eukaryotes coordinate genes by *shared trans-factors* — the same activator binds enhancers near many separate genes, switching them on together without ever bundling them into one transcript.
      `
    },
    {
      id: 'grp3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Chromatin & Combinatorial Control
      `,
      exercise: {
        questions: [
          {
            question: 'A muscle-specific gene is bound by all of its required activator proteins, yet it is not transcribed in a particular cell. Sequencing shows no mutations in the gene or its enhancers. What is the most likely explanation?',
            options: [
              'The gene is part of an operon that is switched off',
              'The gene is located in tightly packed heterochromatin, so the transcription machinery cannot physically access it',
              'The activators are cis-regulatory elements that cannot diffuse',
              'The gene lacks a promoter'
            ],
            correctAnswer: 1,
            explanation: 'In eukaryotes, chromatin state is the first gate: even with activators present, a gene in heterochromatin is inaccessible and stays off. Option A is a classic trap — eukaryotic genes are NOT in operons. Option C misdefines activators (they are trans-acting diffusible proteins, not cis elements). Option D is excluded because the gene is described as having intact enhancers and being normally transcribable elsewhere.'
          },
          {
            question: 'How can a relatively small number of transcription factors generate thousands of distinct cell-type-specific gene-expression patterns in a human body?',
            options: [
              'Each cell type contains a different set of genes',
              'Through combinatorial control: different COMBINATIONS of the shared transcription factors activate different sets of enhancers and genes',
              'Each transcription factor controls exactly one gene',
              'By bundling related genes into operons unique to each cell type'
            ],
            correctAnswer: 1,
            explanation: 'Combinatorial control is the answer: a modest toolkit of factors, used in different combinations, specifies an enormous number of expression states. Option A is the differentiation trap — all body cells share the same genes. Option C contradicts combinatorial logic (one factor typically regulates many genes). Option D wrongly invokes operons, which are prokaryotic.'
          },
          {
            question: 'An enhancer for a gene is located 20,000 base pairs upstream of that gene\'s promoter. How does an activator bound at this distant enhancer stimulate transcription at the promoter?',
            options: [
              'The activator slides along the DNA until it reaches the promoter',
              'The DNA loops so that enhancer-bound activators contact the promoter machinery, with the Mediator complex bridging them',
              'The enhancer is transcribed into an mRNA that activates the gene',
              'Distant enhancers cannot affect transcription and must be ignored'
            ],
            correctAnswer: 1,
            explanation: 'DNA looping brings the distant enhancer-bound activators into physical contact with the promoter; Mediator relays the signal to RNA polymerase II and the general transcription factors. Option A misdescribes the mechanism (activators do not slide thousands of bp). Option C invents enhancer transcription as the mechanism, and option D contradicts the defining property of enhancers — they act at a distance.'
          }
        ]
      }
    },
    {
      id: 'grp3-post-transcriptional',
      type: 'text' as const,
      content: `
### Beyond Transcription — Splicing, Stability, and Localization

Transcription is only the first control point. Eukaryotes regulate the RNA itself, multiplying the output of a single gene.

**Alternative splicing.** A single pre-mRNA can be spliced in different ways, including or excluding particular exons, to produce **multiple distinct proteins from one gene**. This is a major reason humans make far more proteins than they have genes; it is also cell-type-specific, so a gene can yield one protein isoform in the brain and another in muscle.

**mRNA stability.** How long an mRNA survives before being degraded sets how many protein copies can be made from it. Sequences in the **$3'$ UTR** (and miRNA targeting — Part 5) control the rate of degradation. A long-lived mRNA yields far more protein than a short-lived one, even at equal transcription rates.

**mRNA localization.** Cells can transport specific mRNAs to particular regions and translate them only there, concentrating a protein exactly where it is needed (e.g., at one end of a developing embryo). This produces spatial control that transcription alone cannot.

A control-level map for eukaryotic regulation:

| Control level | Representative mechanism | Example outcome |
|---|---|---|
| **Chromatin** | Euchromatin vs. heterochromatin | Whole regions silenced in a cell type |
| **Transcriptional** | Enhancers + combinatorial activators; Mediator | Cell-type-specific gene sets switched on |
| **RNA processing** | **Alternative splicing** | Multiple protein isoforms from one gene |
| **mRNA stability** | $3'$ UTR signals; miRNA degradation | More vs. less protein per transcript |
| **mRNA localization** | Targeted transport of transcripts | Protein concentrated in one cell region |
| **Translational** | $5'$ UTR structure; initiation control | Fast on/off without changing mRNA level |
| **Post-translational** | Phosphorylation; ubiquitin → proteasome | Activity/lifetime of finished protein tuned |

> **Big picture:** Where bacteria mostly regulate at transcription, eukaryotes deploy a **stack** of control points — chromatin, transcription, splicing, stability, localization, translation, and protein modification. Each adds a tuning knob, and together they let one genome run an entire multicellular organism.
      `
    },
    {
      id: 'grp3-worked-combinatorial',
      type: 'text' as const,
      content: `
### Worked Reasoning — How a Gene Reads a Combination of Factors

Combinatorial control is abstract until you trace it through a concrete gene. Consider a hypothetical "liver enzyme" gene whose enhancer has binding sites for **three** transcription factors — call them **A**, **B**, and **R**. A and B are **activators**; R is a **repressor**. The promoter is in open euchromatin in every cell type, so chromatin is *not* the limiting factor here — the deciding variable is *which factors are present*.

The gene fires strongly **only** when **both activators are present and the repressor is absent**. Predict the output across cell types, each defined by the factors it happens to express:

| Cell type | A present? | B present? | R present? | Gene output |
|---|---|---|---|---|
| Hepatocyte (liver) | Yes | Yes | No | **HIGH** (both activators, no repressor) |
| Kidney cell | Yes | No | No | **Low** (missing activator B) |
| Neuron | No | No | Yes | **OFF** (no activators; repressor bound) |
| Intestinal cell | Yes | Yes | **Yes** | **Low/OFF** (repressor overrides activators) |

**Read the logic:**

- The gene is not controlled by any single switch. It integrates **three inputs**, and only the hepatocyte's particular combination ($A$ + $B$, no $R$) yields full expression.
- A few transcription factors, in different combinations, thus generate **distinct outputs in different cells** — the molecular basis of how one genome builds many cell types.
- This mirrors the lac operon's two-switch logic (Part 2), but eukaryotes scale it up to *many* factors per gene, and the factors are shared across *many* individually promoted genes.

**Connecting to differentiation.** A cell's identity *is* its set of active transcription factors. A "master regulator" factor that switches on a battery of muscle genes can, when introduced into a fibroblast, push it toward a muscle-like state — direct evidence that the combination of factors, not a change in the genome, specifies cell type.

> **Reasoning habit:** For a eukaryotic gene, do not ask "is the switch on?" Ask "**which combination** of activators and repressors is present, and does the chromatin allow access?" Output is the *integration* of all those inputs — high, low, or off.
      `
    },
    {
      id: 'grp3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Eukaryotic Layers
      `,
      exercise: {
        questions: [
          {
            question: 'The gene for tropomyosin produces different protein versions in skeletal muscle, smooth muscle, and brain tissue, all from the same DNA sequence. Which mechanism best explains this?',
            options: [
              'Each tissue has a different copy of the tropomyosin gene',
              'Alternative splicing includes or excludes different exons in different cell types, yielding distinct protein isoforms from one gene',
              'The gene is part of a different operon in each tissue',
              'Point mutations rewrite the gene in each tissue'
            ],
            correctAnswer: 1,
            explanation: 'Alternative splicing of one pre-mRNA explains how a single gene yields tissue-specific protein isoforms. Option A is the differentiation trap (all tissues carry the same gene). Option C invokes operons, which are prokaryotic. Option D confuses regulated splicing with mutation — the DNA sequence is unchanged across tissues.'
          },
          {
            question: 'Two genes are transcribed at exactly the same rate in a cell, yet gene A produces far more protein than gene B. No difference is found in their promoters or splicing. The best explanation is a difference in:',
            options: [
              'The number of operators upstream of each gene',
              'mRNA stability — gene A\'s transcript is degraded more slowly, so it is translated many more times before being broken down',
              'The number of chromosomes carrying each gene',
              'cAMP levels in the cell'
            ],
            correctAnswer: 1,
            explanation: 'Equal transcription but unequal protein output points to post-transcriptional control of mRNA stability: a longer-lived transcript is translated more often. Option A invokes operators/operons (prokaryotic) inappropriately. Option C is irrelevant to per-mRNA output. Option D imports the bacterial cAMP/CAP system, which does not govern eukaryotic mRNA half-life.'
          }
        ]
      }
    }
  ]
};
