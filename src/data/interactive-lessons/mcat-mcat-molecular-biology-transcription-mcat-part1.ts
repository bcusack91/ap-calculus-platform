export const mcatTranscriptionPart1Data = {
  topicSlug: 'mcat-molecular-biology-transcription-mcat',
  sections: [
    {
      id: 'txn1-intro',
      type: 'text' as const,
      content: `# Transcription for the MCAT

**Part 1 of 4 — From Gene to RNA: Polymerases, Promoters & Strands**

### The Two Strands Problem (Most-Missed Vocabulary on the Exam)

For any gene, only ONE strand is copied:

- **Template (antisense) strand**: the strand RNA polymerase actually reads, 3' to 5'.
- **Coding (sense) strand**: the OTHER strand — identical in sequence to the mRNA (with T in place of U). Genes are written out as their coding strand.

So: mRNA = coding strand with U substituted; mRNA = reverse complement of the template strand. Different genes on one chromosome can use different strands as template — "the" template strand is defined per gene, not per chromosome.

### RNA Polymerase vs DNA Polymerase

| Property | RNA polymerase | DNA polymerase |
|----------|----------------|----------------|
| Synthesis direction | 5' to 3' | 5' to 3' |
| Template reading | 3' to 5' | 3' to 5' |
| Primer needed? | **NO** — initiates de novo | YES |
| Proofreading | Minimal | 3' to 5' exonuclease |
| Product | Single-stranded RNA; DNA re-anneals behind it | Duplex DNA |

No primer requirement is why primase (an RNA polymerase) can start replication — and low proofreading is tolerable because a flawed transcript is disposable while a mutation is forever.

### Finding the Start: Promoters

- **Prokaryotes**: one RNA polymerase; the **sigma factor** subunit reads promoter elements at **-10 (TATAAT, Pribnow box)** and **-35**. Sigma releases after initiation. Alternative sigmas re-point the polymerase at new gene sets (heat shock).
- **Eukaryotes**: three polymerases — **Pol I** (rRNA, in the nucleolus), **Pol II** (mRNA + many regulatory RNAs; the one all mRNA questions mean), **Pol III** (tRNA, 5S rRNA). Pol II cannot find promoters alone: **general transcription factors** (TFIID's TBP subunit binding the **TATA box** ~-25) assemble a preinitiation complex, and enhancer-bound activators (Part 3) tune its output.
- Numbering convention: +1 = transcription start site; negative numbers = upstream. The promoter is upstream, on the same molecule, and is NOT transcribed into the mRNA.
- **Termination**: prokaryotes use rho-independent hairpins (GC-rich stem-loop + poly-U slip) or the rho helicase; eukaryotic Pol II termination is coupled to cleavage at the poly-A signal (Part 2).

### Amanitin & Rifampin — Inhibitors That Double as Tools

- **Alpha-amanitin** (death cap mushroom): potent inhibitor of eukaryotic **Pol II** — mRNA synthesis dies first; hepatotoxicity follows.
- **Rifampin**: blocks initiation by **bacterial** RNA polymerase — selective toxicity, and a passage favorite for "which process stops first" kinetics.
- **Actinomycin D** intercalates into DNA, blocking transcription in ALL cells — a lab tool for "freeze transcription and watch mRNA decay."`
    },
    {
      id: 'txn1-worked',
      type: 'text' as const,
      content: `### Worked Example — Strand Bookkeeping Under Pressure

**Passage-style problem.** A gene's template strand contains the sequence 3'-TACGGATCT-5' spanning the transcription start region.

**Question 1 — Write the mRNA.** Pair each template base with its RNA complement, building 5' to 3' as polymerase does: T pairs A, A pairs U, C pairs G, G pairs C, G pairs C, A pairs U, T pairs A, C pairs G, T pairs A. Result: **5'-AUGCCUAGA-3'**. Note it begins with AUG — a start codon, which is how the exam signals you oriented correctly.

**Question 2 — Write the coding strand.** Same sequence as the mRNA with T for U: 5'-ATGCCTAGA-3'. No pairing arithmetic needed — this shortcut (coding strand = mRNA with T) saves time and errors. Conversely, if a passage GIVES you "the gene sequence," it is giving the coding strand, and you can read codons straight off it.

**Question 3 — A point mutation changes the template strand's third base (C, reading from its 3' end) to A. What happens to the mRNA?** The third mRNA base was G (paired to that C); now it pairs with template A, becoming U. The mRNA's first codon changes from AUG to AUU — the start codon is destroyed. Translation initiation fails at this site entirely (scanning may find a downstream AUG, yielding a truncated or garbage protein). A one-base change with catastrophic effect — position matters more than count.

**Question 4 — The trap to anticipate.** If the question had said the CODING strand's C changed to A, the mRNA would change identically at that position (coding strand mirrors mRNA) — no complementation step. Misapplying the complement to the coding strand is the single most common error on strand questions. Always annotate the given strand as template or coding BEFORE touching the bases.`
    },
    {
      id: 'txn1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Polymerases, Promoters & Strands** 🎯`,
      exercise: {
        questions: [
          {
            question: `A gene's coding strand reads 5'-CATGTC-3'. The mRNA transcribed from this gene reads:`,
            options: [`5'-GACAUG-3'`, `5'-GUACAG-3'`, `5'-CAUGUC-3'`, `5'-CATGTC-3'`],
            correctAnswer: 2,
            explanation: `The coding (sense) strand matches the mRNA exactly, with the single substitution of U for T — no complementing, no reversing: 5'-CAUGUC-3'. Students who reflexively take the complement produce wrong answers built from the template-strand procedure. Fix the vocabulary first: template = what polymerase reads (3' to 5'); coding = what the mRNA looks like. Option D is disqualified by containing T, a DNA-only base.`
          },
          {
            question: `Unlike DNA polymerase, RNA polymerase requires no primer. The property that makes this acceptable for the cell is that:`,
            options: [`RNA polymerase transcribes only short genes`, `Transcripts are temporary, so their errors are not heritable`, `RNA polymerase synthesizes in the 3' to 5' direction instead`, `The sigma factor performs proofreading for the polymerase`],
            correctAnswer: 1,
            explanation: `The primer requirement of DNA polymerase is intimately tied to fidelity — extension from a base-paired 3'-OH allows proofreading of every addition. RNA polymerase trades that accuracy for the ability to start fresh, which is fine: a bad transcript is degraded and replaced, and each gene yields many transcripts. This cost-benefit logic also explains why primase leaves RNA (not DNA) primers — they are marked as temporary for later removal. All polymerases synthesize 5' to 3', and sigma finds promoters; it does not proofread.`
          },
          {
            question: `In eukaryotes, tRNA genes and protein-coding genes are transcribed by different enzymes. A toxin that selectively inactivates RNA polymerase II would directly halt synthesis of:`,
            options: [`Both mRNA and tRNA equally`, `Large rRNAs in the nucleolus`, `tRNA and 5S rRNA only`, `mRNA but not rRNA or tRNA`],
            correctAnswer: 3,
            explanation: `Division of labor: Pol I makes the large rRNAs in the nucleolus, Pol II makes all mRNA (plus most regulatory RNAs), Pol III makes tRNA and 5S rRNA. Alpha-amanitin is the real toxin with this profile — mRNA production collapses while the other polymerases, far less sensitive, continue. A passage showing new protein synthesis decaying as existing mRNAs are degraded, with ribosome assembly initially intact, is describing exactly this selectivity.`
          },
          {
            question: `A bacterial mutation changes the -10 promoter element of a single gene so that sigma factor binds it poorly. The expected result is:`,
            options: [`Reduced transcription of that gene only, with normal protein`, `A mutant protein with altered amino acid sequence`, `Reduced transcription of all genes in the genome`, `Normal transcript levels but failed translation`],
            correctAnswer: 0,
            explanation: `Promoter mutations are regulatory, cis-acting, and quantitative: the -10 box is a binding site upstream of the start site, not part of the mRNA or protein, so the product (when made) is normal — there is simply less of it, only from THIS gene. Contrast a sigma-factor mutation (trans-acting protein): that would depress many genes at once. Cis = the DNA element serves its own neighbor; trans = a diffusible product acts genome-wide. This distinction returns with force in the operon part.`
          },
          {
            question: `A patient presents with liver failure after eating wild mushrooms containing alpha-amanitin. At the cellular level, the earliest molecular deficit in hepatocytes is:`,
            options: [`Failure of DNA replication at licensed replication origins`, `Loss of new mRNA synthesis by RNA polymerase II`, `Immediate cessation of all translation`, `Depletion of tRNA pools from Pol III loss`],
            correctAnswer: 1,
            explanation: `Amanitin's target is Pol II, so mRNA production stops first; translation continues transiently on pre-existing transcripts and then declines at rates set by each mRNA's half-life — short-lived regulatory mRNAs disappear before stable ones. Replication, tRNA synthesis (Pol III), and ribosomes are not direct targets. The temporal cascade (transcription now, translation later) is the same order-of-shutdown reasoning used to identify unknown inhibitors in experiment passages.`
          }
        ]
      }
    },
    {
      id: 'txn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Template strand: read 3' to 5' by polymerase; coding strand: equals mRNA with T for U — label the given strand before any base arithmetic, and remember templates are per gene, not per chromosome
- RNA polymerase: 5' to 3' synthesis, no primer (starts de novo), minimal proofreading — acceptable because transcripts are disposable
- Prokaryotes: one polymerase + sigma factor at -10/-35; alternative sigmas redirect whole programs; termination by hairpin or rho
- Eukaryotes: Pol I = rRNA (nucleolus), Pol II = mRNA (TATA box, TBP/TFIID, preinitiation complex), Pol III = tRNA and 5S
- Promoters are upstream, untranscribed, cis-acting: mutations change amount, not protein sequence, and affect only the adjacent gene
- Inhibitor toolkit: alpha-amanitin (euk Pol II), rifampin (bacterial RNA pol — selective toxicity), actinomycin D (intercalates, all transcription)
- After a transcription block, each protein decays on its mRNA's half-life — expect kinetics questions built on that lag`
    }
  ]
};
