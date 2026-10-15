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

The most studied epigenetic mark is **DNA methylation**: enzymes add a methyl ($\\text{CH}_3$) group to some cytosine bases. The base sequence is unchanged; the cytosine simply carries an extra chemical tag.

- Methylated cytosines are often clustered in a gene's **promoter** region.
- **Heavy methylation of a promoter silences the gene.** The methyl tags block transcription factors from binding and attract proteins that pack the surrounding chromatin tightly into heterochromatin.
- Generally: **more promoter methylation ⇒ less expression**; unmethylated promoters tend to be active.

Because methylation patterns are copied onto the new DNA after replication, the silenced state is **inherited by daughter cells** through mitosis. This is the molecular basis of cellular memory: it is how differentiated cells stay differentiated.

> **Direction matters:** For AP purposes, heavy promoter methylation → gene OFF is the canonical relationship. Like the other epigenetic marks, methylation is **reversible**: enzymes can remove the tags and let the gene be expressed again.
      `
    },
    {
      id: 'grp4-histones',
      type: 'text' as const,
      content: `
### Histone Modifications

DNA is wrapped around histones; chemical tags on the histones change how tightly the DNA is held, opening or closing access to genes. Two marks with **opposite** effects are the ones to know:

- **Histone acetylation** (adding acetyl groups) loosens chromatin → **euchromatin** → **activates** transcription.
- **Removing acetyl groups** (deacetylation) tightens chromatin → **heterochromatin** → **represses** transcription.

Some histone methylations also recruit proteins that compact chromatin and repress genes. The safe statement for the exam is: *acetylation generally activates; deacetylation and DNA methylation generally repress.*

| Epigenetic change | Effect on chromatin | Effect on expression |
|---|---|---|
| Heavy methylation of a promoter's DNA | Compacts (recruits silencing proteins) | **Represses** |
| Histone **acetylation** | Loosens (euchromatin) | **Activates** |
| Histone **deacetylation** | Tightens (heterochromatin) | **Represses** |

> **Key idea:** The CED describes epigenetic changes as **reversible modifications of DNA or histones** that affect gene expression. Enzymes add the tags and other enzymes remove them, so the same gene can be switched between active and silent states without any change in its sequence. (The names of the individual enzymes are not tested.)
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
            question: 'A tumor-suppressor gene in a cancer cell is completely silent, yet its DNA sequence is perfectly normal — no mutations anywhere in or around the gene. Its promoter DNA is heavily methylated. The best description of this gene\'s inactivation is:',
            options: [
              'A point mutation in the promoter that blocks polymerase binding',
              'An epigenetic change that switches the gene off without mutating it',
              'A deletion that removes the gene from one of the chromosomes',
              'A frameshift that changes the gene\'s codon reading frame'
            ],
            correctAnswer: 1,
            explanation: 'A heritable expression change with an intact sequence and a heavily methylated promoter is epigenetic silencing. The other three options all describe sequence changes (mutation, deletion, frameshift), which the question explicitly rules out — that is the trap, conflating epigenetic silencing with genetic mutation.'
          },
          {
            question: 'A drug blocks the enzymes that remove acetyl groups from histones. What is the most likely effect on the chromatin and expression of previously silenced genes?',
            options: [
              'Chromatin condenses further and the genes are silenced more strongly',
              'The marks stay on, so chromatin loosens and the genes reactivate',
              'The DNA sequence is mutated, so the silenced genes switch back on',
              'cAMP rises, so CAP binds and turns on the previously silenced genes'
            ],
            correctAnswer: 1,
            explanation: 'Removing acetyl groups tightens chromatin; blocking that removal leaves histones acetylated, loosening chromatin and reactivating genes. The "chromatin condenses further" option inverts the logic. The mutation option confuses an epigenetic effect with mutation. The cAMP/CAP option wrongly imports the bacterial cAMP/CAP system into eukaryotic chromatin regulation.'
          },
          {
            question: 'Why are epigenetic marks described as "heritable through mitosis," and what makes this property biologically important?',
            options: [
              'They change the DNA sequence, which is then copied during replication',
              'Methylation patterns are copied after replication, preserving cell identity',
              'They are randomly reset at every cell division, so each cell starts fresh',
              'They only exist in gametes, so somatic cells never inherit them'
            ],
            correctAnswer: 1,
            explanation: 'After replication, enzymes copy the methylation pattern onto the newly made DNA strand, so daughter cells inherit the parent\'s expression state — this is how differentiated cells stay differentiated. The "change the DNA sequence" option is the central trap: epigenetic inheritance does NOT involve sequence change. The "randomly reset" option contradicts heritability, and the "only in gametes" option is false because somatic cells carry and transmit epigenetic marks during normal tissue maintenance.'
          }
        ]
      }
    },
    {
      id: 'grp4-imprinting-xinact',
      type: 'text' as const,
      content: `
### Epigenetics and the Environment

Epigenetic marks respond to the environment. Diet, stress, temperature and chemical exposures can change DNA methylation and histone modifications, altering which genes are expressed without changing the genome. This links epigenetics to **phenotypic plasticity** (Topic 5.5): one genotype, different phenotypes.

**Honeybee castes.** Queens and workers develop from genetically identical female larvae. Larvae fed royal jelly become queens; the others become workers. The diets produce different DNA methylation patterns, which switch on different sets of genes and lead to very different bodies and behavior.

**Identical twins.** Twins start life with the same genome and very similar epigenetic marks. As they age, especially if they live in different environments, their methylation patterns drift apart, and so does the expression of some of their genes. This helps explain why identical twins can differ in traits and disease risk.

**Reversibility.** Because the marks can be added and removed, an epigenetic change is often reversible in a way a mutation is not. Drugs that remove methylation or block deacetylation can reactivate silenced genes, the basis of some cancer treatments.

> **Unifying point:** Environmental effects on the epigenome are stable changes in which genes are expressed, achieved by chemical marks rather than by editing the DNA letters. (Other epigenetic phenomena you may see in textbooks, such as genomic imprinting and X-chromosome inactivation, are beyond the scope of the AP exam.)
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
- *Sample 2:* sequencing finds a perfectly normal gene, but the promoter DNA is heavily methylated and the histones are deacetylated. → **Epigenetic silencing**; the sequence is fine, but the gene is locked in heterochromatin and not transcribed.

Both samples lose the protein, yet only Sample 2 is reversible *in principle* — a drug that removes methylation or blocks histone deacetylation could re-open the gene (the basis of several real epigenetic therapies). A mutation cannot be "un-read" that way.

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
            question: 'Identical twins have the same DNA sequence. By age 50, one twin who smoked for decades has different DNA methylation patterns in lung cells from the other, and different expression of several genes. The best explanation is that:',
            options: [
              'Smoking caused mutations that rewrote the methylated genes\' sequences',
              'Environmental exposure altered epigenetic marks and so gene activity',
              'The twins inherited different alleles of the genes from their parents',
              'Lung cells of the smoking twin lost whole chromosomes during division'
            ],
            correctAnswer: 1,
            explanation: 'The twins share a genome, so a difference in methylation and expression that arises over time is best explained by an environmental effect on epigenetic marks. The mutation option confuses an epigenetic change with a change in sequence, identical twins inherit the same alleles, and nothing in the data points to lost chromosomes.'
          },
          {
            question: 'Genetically identical mice are fed diets differing only in methyl-donor nutrients. The two groups develop different coat colors and disease risks, with no differences in their DNA sequences. This is best explained by:',
            options: [
              'New DNA mutations caused by the diet\'s methyl-donor chemicals',
              'Diet-driven methylation changes that alter gene expression',
              'Different alleles that each group inherited from its parents',
              'Diet-induced changes in the number of chromosomes per cell'
            ],
            correctAnswer: 1,
            explanation: 'Methyl-donor availability shifts DNA methylation, changing expression without altering the sequence — a textbook environment–epigenome link. The diet-caused-mutation option is the trap (an epigenetic effect mistaken for mutation). The different-alleles and chromosome-number options are excluded because the mice are genetically identical with normal karyotypes; only the epigenetic marks differ.'
          }
        ]
      }
    }
  ]
};
