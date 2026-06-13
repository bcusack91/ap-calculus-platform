export const bioGeneRegPart4Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp4-intro',
      type: 'text' as const,
      content: `
## Epigenetics

**Part 4 of 7**

How does a liver cell, when it divides, give rise to *two liver cells* rather than reverting to some generic state? Its daughters must "remember" which genes were on and off. That memory is **epigenetic**: heritable changes in gene expression that **do not alter the DNA sequence** itself.

The prefix *epi-* means "on top of." Epigenetic marks sit on top of the genome — chemical tags on DNA and on histones — and they are copied along when chromatin is replicated, so a cell's regulatory state persists through mitosis.

> **AP trap (bank it now):** **Epigenetic changes do NOT change the DNA sequence.** If a question describes a heritable expression change with "no change in nucleotide sequence," the answer is epigenetic (methylation, histone modification, chromatin remodeling) — never mutation. A mutation changes the sequence; an epigenetic mark changes how the unchanged sequence is read.
      `
    },
    {
      id: 'grp4-methylation',
      type: 'text' as const,
      content: `
### DNA Methylation — Silencing by a Chemical Tag

The most studied epigenetic mark is **DNA methylation**: the addition of a methyl ($\\text{CH}_3$) group to cytosine bases, carried out by **DNA methyltransferase** enzymes. In animals this happens mainly at **CpG sites** — a cytosine followed by a guanine.

- Clusters of CpG sites, called **CpG islands**, often sit in gene promoters.
- **Heavy methylation of a promoter's CpG island silences the gene.** The methyl tags both directly impede transcription-factor binding and recruit proteins that compact the surrounding chromatin into heterochromatin.
- Generally: **more promoter methylation ⇒ less expression**; unmethylated promoters tend to be active.

Because methylation patterns are copied after DNA replication (a "maintenance" methyltransferase re-methylates the new strand to match the old one), the silenced state is **inherited by daughter cells** through mitosis. This is the molecular basis of cellular memory — it is how differentiated cells stay differentiated.

> **Direction matters:** Methylation of a *promoter CpG island* typically **represses**. Do not over-generalize "methylation = silencing" to every context, but for AP purposes, promoter CpG-island methylation → gene OFF is the canonical relationship.
      `
    },
    {
      id: 'grp4-histones',
      type: 'text' as const,
      content: `
### Histone Modifications and Chromatin Remodeling

DNA is wrapped around histones; chemical tags on the histones' tails change how tightly the DNA is held, opening or closing access. Two of the most important, with **opposite** effects:

- **Histone acetylation** (adding acetyl groups, by **histone acetyltransferases / HATs**) loosens chromatin → **euchromatin** → **activates** transcription. Removing acetyl groups (by **histone deacetylases / HDACs**) tightens chromatin → represses.
- **Histone methylation** can **either** activate or repress depending on *which* residue is modified. Certain histone methylations (e.g., on specific lysines) recruit compacting proteins and **repress**; others mark active genes. For AP, the safe statement is: *acetylation generally activates; some methylations repress.*

**Chromatin-remodeling complexes** are ATP-driven machines that physically slide, eject, or restructure nucleosomes, exposing or hiding regulatory DNA. They work alongside the chemical marks to set chromatin state.

A "writer → effect" reference table (writers add marks; readers interpret them; erasers remove them):

| Epigenetic mark | Writer enzyme | Effect on chromatin | Effect on expression |
|---|---|---|---|
| Promoter CpG methylation | DNA methyltransferase | Compacts (recruits silencers) | **Represses** |
| Histone **acetylation** | Histone acetyltransferase (HAT) | Loosens (euchromatin) | **Activates** |
| Histone **deacetylation** | Histone deacetylase (HDAC) | Tightens (heterochromatin) | **Represses** |
| Certain histone **methylations** | Histone methyltransferase | Recruits compacting proteins | Often **represses** |

> **Key idea:** Acetylation and methylation/deacetylation push chromatin toward opposite poles. The *combination* of marks on a stretch of chromatin — sometimes called the "histone code" — is read out to determine whether the underlying genes are active or silent.
      `
    },
    {
      id: 'grp4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Marks and Their Effects
      `,
      exercise: {
        questions: [
          {
            question: 'A tumor-suppressor gene in a cancer cell is completely silent, yet its DNA sequence is perfectly normal — no mutations anywhere in or around the gene. Its promoter CpG island is heavily methylated. The best description of this gene\'s inactivation is:',
            options: [
              'A point mutation in the promoter',
              'An epigenetic change: promoter methylation silences the gene without altering the DNA sequence',
              'A deletion of the gene',
              'A change in the gene\'s codon reading frame'
            ],
            correctAnswer: 1,
            explanation: 'A heritable expression change with an intact sequence and a hypermethylated promoter is epigenetic silencing. The other three options all describe sequence changes (mutation, deletion, frameshift), which the question explicitly rules out — that is the trap, conflating epigenetic silencing with genetic mutation.'
          },
          {
            question: 'A drug inhibits histone deacetylases (HDACs). What is the most likely effect on the chromatin and expression of previously silenced genes?',
            options: [
              'Chromatin condenses further and genes are silenced more strongly',
              'Histones stay acetylated, chromatin loosens toward euchromatin, and silenced genes tend to be REACTIVATED',
              'The DNA sequence is mutated to switch genes on',
              'cAMP rises and CAP activates the genes'
            ],
            correctAnswer: 1,
            explanation: 'HDACs remove activating acetyl marks; inhibiting them leaves histones acetylated, loosening chromatin and reactivating genes. Option A inverts the logic (blocking deacetylation does not condense chromatin). Option C confuses an epigenetic effect with mutation. Option D wrongly imports the bacterial cAMP/CAP system into eukaryotic chromatin regulation.'
          },
          {
            question: 'Why are epigenetic marks described as "heritable through mitosis," and what makes this property biologically important?',
            options: [
              'They change the DNA sequence, which is copied during replication',
              'Patterns such as DNA methylation are re-established on daughter strands after replication, so a cell\'s expression state is passed to its descendants — preserving cell identity',
              'They are randomly reset every cell division',
              'They only exist in gametes, not somatic cells'
            ],
            correctAnswer: 1,
            explanation: 'Maintenance methyltransferases copy the methylation pattern onto newly synthesized DNA, so daughter cells inherit the parent\'s expression state — this is how differentiated cells stay differentiated. Option A is the central trap: epigenetic inheritance does NOT involve sequence change. Option C contradicts heritability, and option D is false because somatic cells carry and transmit epigenetic marks during normal tissue maintenance.'
          }
        ]
      }
    },
    {
      id: 'grp4-imprinting-xinact',
      type: 'text' as const,
      content: `
### Genomic Imprinting, X-Inactivation, and the Environment

Two classic phenomena show epigenetics in action — both produce stable expression differences with *no change in DNA sequence*.

**Genomic imprinting.** For a small set of genes, expression depends on the parent of origin: only the maternal *or* only the paternal copy is active, because the other was epigenetically silenced (typically by methylation) in the egg or sperm. Both alleles may be identical in sequence, yet one is "marked" off. The mark is reset and re-applied each generation in the germ line.

**X-chromosome inactivation.** In female mammals, one of the two X chromosomes in each cell is condensed into a transcriptionally silent **Barr body** early in development. This dosage-compensation mechanism is epigenetic: the inactivated X is heavily methylated and packed into heterochromatin. Crucially, the choice is **clonally inherited** — all descendants of a cell keep the same X inactive — producing patches of tissue expressing one X or the other (the basis of calico/tortoiseshell coat patterns).

**Environment–epigenome link.** Epigenetic marks can be influenced by the environment — diet, stress, and chemical exposures can alter methylation and histone modification patterns, changing gene expression without changing the genome. This provides a molecular route by which experience and environment leave lasting, sometimes heritable, marks on gene activity — a frequent context in modern AP free-response prompts.

> **Unifying point:** Imprinting, X-inactivation, and environmental effects are all the *same kind of thing*: stable, heritable changes in which genes are expressed, achieved by chromatin marks rather than by editing the DNA letters.
      `
    },
    {
      id: 'grp4-epi-vs-mutation',
      type: 'text' as const,
      content: `
### Epigenetic vs. Genetic Change — The Distinction the Exam Tests

The single most tested idea in this part is the boundary between an **epigenetic** change and a **genetic** (mutational) change. They can produce *the same loss of gene function*, so the exam forces you to tell them apart from the evidence.

| | Epigenetic change | Genetic (mutation) |
|---|---|---|
| What changes | Chromatin marks (methylation, histone mods) | The DNA **nucleotide sequence** |
| Sequence altered? | **No** | **Yes** |
| Heritable through mitosis? | Yes (marks copied to daughter cells) | Yes (sequence copied) |
| Reversible? | Often (marks can be added/removed by enzymes) | Generally not, without further mutation |
| Diagnostic clue in a problem | "no change in sequence," methylated promoter, deacetylated histones | a base substitution, insertion, deletion, frameshift |

**The decisive question:** *Did the nucleotide sequence change?* If the stem says the sequence is intact but expression is heritably altered, the answer is **epigenetic**. If a base is substituted, inserted, or deleted, it is a **mutation**. This one fork resolves the majority of "is it epigenetic or genetic?" items.

**Worked mini-example.** Two patient samples each have a silenced tumor-suppressor gene.
- *Sample 1:* sequencing finds a premature stop codon in the gene. → **Mutation** (genetic); the protein is truncated/nonfunctional because the *sequence* changed.
- *Sample 2:* sequencing finds a perfectly normal gene, but the promoter CpG island is hypermethylated and histones are deacetylated. → **Epigenetic silencing**; the sequence is fine, but the gene is locked in heterochromatin and not transcribed.

Both samples lose the protein, yet only Sample 2 is reversible *in principle* — a drug that blocks methylation or inhibits HDACs could re-open the gene (the basis of several real epigenetic therapies). A mutation cannot be "un-read" that way.

> **Bank this phrasing:** *Epigenetic changes alter gene EXPRESSION, not gene SEQUENCE; they are heritable through cell division and are often reversible.* Reproduce that sentence and the epigenetics traps in Parts 4 and 7 become easy points.
      `
    },
    {
      id: 'grp4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Epigenetic Inheritance
      `,
      exercise: {
        questions: [
          {
            question: 'In a female cat heterozygous for an X-linked coat-color gene, the fur shows distinct patches of two different colors. The best explanation is that:',
            options: [
              'The two color alleles mutated into each other in different patches',
              'In each cell early in development one X chromosome was epigenetically inactivated (Barr body), and this choice was inherited by all descendant cells, producing clonal patches',
              'The cat is a genetic mosaic with different genes in different cells',
              'The color gene is part of an operon expressed differently in each patch'
            ],
            correctAnswer: 1,
            explanation: 'X-inactivation randomly silences one X per cell early on, and the choice is clonally inherited, so the body becomes a patchwork expressing one allele or the other. Option A confuses an epigenetic switch with mutation. Option C is wrong because all cells carry the same genes (the difference is which X is active). Option D wrongly invokes a prokaryotic operon.'
          },
          {
            question: 'Genetically identical mice are fed diets differing only in methyl-donor nutrients. The two groups develop different coat colors and disease risks, with no differences in their DNA sequences. This is best explained by:',
            options: [
              'New mutations caused by the diet',
              'Diet-induced differences in DNA methylation altering gene expression — an environment-driven epigenetic effect with no sequence change',
              'Different alleles inherited from the parents',
              'Changes in chromosome number'
            ],
            correctAnswer: 1,
            explanation: 'Methyl-donor availability shifts DNA methylation, changing expression without altering the sequence — a textbook environment–epigenome link. Option A is the trap (an epigenetic effect mistaken for mutation). Options C and D are excluded because the mice are genetically identical with normal karyotypes; only the epigenetic marks differ.'
          }
        ]
      }
    }
  ]
};
