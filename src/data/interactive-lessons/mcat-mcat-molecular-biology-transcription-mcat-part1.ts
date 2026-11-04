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

- **Prokaryotes**: one RNA polymerase; its **sigma factor** subunit recognizes the promoter, then releases after initiation.
<!-- yield:low -->
- Sigma reads two promoter elements, at **-10 (TATAAT, the Pribnow box)** and **-35**. Alternative sigmas re-point the polymerase at new gene sets (heat shock).
<!-- /yield -->

- **Eukaryotes**: three polymerases — **Pol I** (rRNA, in the nucleolus), **Pol II** (mRNA + many regulatory RNAs; the one all mRNA questions mean), **Pol III** (tRNA, 5S rRNA). Pol II cannot find promoters alone: **general transcription factors** bind the promoter's **TATA box** (~-25) and recruit it, and enhancer-bound activators (Part 3) tune its output.

<!-- yield:low -->
- The TATA-binding protein (TBP) is a subunit of the factor TFIID; the assembled factors plus Pol II form the preinitiation complex.
<!-- /yield -->

- Numbering convention: +1 = transcription start site; negative numbers = upstream. The promoter is upstream, on the same molecule, and is NOT transcribed into the mRNA.

<!-- yield:low -->
- **Termination**: prokaryotes use rho-independent hairpins (GC-rich stem-loop + poly-U slip) or the rho helicase; eukaryotic Pol II termination is coupled to cleavage at the poly-A signal (Part 2).
<!-- /yield -->


### Amanitin & Rifampin — Inhibitors That Double as Tools

- **Alpha-amanitin** (death cap mushroom): potent inhibitor of eukaryotic **Pol II** — mRNA synthesis dies first; hepatotoxicity follows.
- **Rifampin**: blocks initiation by **bacterial** RNA polymerase — selective toxicity, and a passage favorite for "which process stops first" kinetics.

<!-- yield:low -->
- **Actinomycin D** intercalates into DNA, blocking transcription in ALL cells — a lab tool for "freeze transcription and watch mRNA decay."
<!-- /yield -->`
    },
    {
      id: 'txn1-worked',
      type: 'text' as const,
      content: `### Worked Example — Strand Bookkeeping Under Pressure

**Problem 1.** A gene's template strand contains the sequence 3'-TACGGATCT-5' spanning the transcription start region.

- **(a)** What mRNA does RNA polymerase make from this template?
- **(b)** What is the sequence of the coding strand?

**(a) Write the mRNA.** Pair each template base with its RNA complement, building 5' to 3' as polymerase does: T pairs A, A pairs U, C pairs G, G pairs C, G pairs C, A pairs U, T pairs A, C pairs G, T pairs A. Result: **5'-AUGCCUAGA-3'**. It begins with AUG, a start codon, which is how the exam signals you oriented correctly.

**(b) Write the coding strand.** Same sequence as the mRNA from (a) with T for U: **5'-ATGCCTAGA-3'**. No pairing arithmetic is needed. Conversely, if a passage GIVES you "the gene sequence," it is giving the coding strand, and you can read codons straight off it.

**Problem 2.** In the same gene (template 3'-TACGGATCT-5', mRNA 5'-AUGCCUAGA-3'), a point mutation changes the template strand's third base (C, reading from its 3' end) to A.

- **(a)** Which mRNA base changes, and to what?
- **(b)** What happens to the first codon, and to translation?
- **(c)** If instead the CODING strand's third base (G) changed to T, how would the mRNA change?

**(a) The changed base.** The third mRNA base was G (paired to that C); now it pairs with template A, becoming U.

**(b) The start codon.** The first codon changes from AUG to AUU, so the start codon is destroyed. Translation initiation fails at this site entirely (scanning may find a downstream AUG, yielding a truncated or garbage protein). A one-base change with catastrophic effect: position matters more than count.

**(c) The trap to anticipate.** The mRNA would change identically at that position, G to U, because the coding strand mirrors the mRNA: no complementation step. Misapplying the complement to the coding strand is the most common error on strand questions, so label the given strand as template or coding BEFORE touching the bases.`
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
            yield: 'ULTRA_HIGH',
            explanation: `The coding (sense) strand matches the mRNA exactly, with the single substitution of U for T — no complementing, no reversing: 5'-CAUGUC-3'. Students who reflexively take the complement produce wrong answers built from the template-strand procedure. Fix the vocabulary first: template = what polymerase reads (3' to 5'); coding = what the mRNA looks like. 5'-CATGTC-3' is disqualified by containing T, a DNA-only base.`
          },
          {
            question: `Unlike DNA polymerase, RNA polymerase requires no primer. The property that makes this acceptable for the cell is that:`,
            options: [`RNA polymerase transcribes only short genes`, `Transcripts are temporary, so their errors are not heritable`, `RNA polymerase synthesizes in the 3' to 5' direction instead`, `The sigma factor performs proofreading for the polymerase`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The primer requirement of DNA polymerase is intimately tied to fidelity — extension from a base-paired 3'-OH allows proofreading of every addition. RNA polymerase trades that accuracy for the ability to start fresh, which is fine: a bad transcript is degraded and replaced, and each gene yields many transcripts. This cost-benefit logic also explains why primase leaves RNA (not DNA) primers — they are marked as temporary for later removal. All polymerases synthesize 5' to 3', and sigma finds promoters; it does not proofread.`
          },
          {
            question: `In eukaryotes, tRNA genes and protein-coding genes are transcribed by different enzymes. A toxin that selectively inactivates RNA polymerase II would directly halt synthesis of:`,
            options: [`Both mRNA and tRNA equally`, `Large rRNAs in the nucleolus`, `Small tRNAs and the 5S rRNA`, `mRNA but not rRNA or tRNA`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Division of labor: Pol I makes the large rRNAs in the nucleolus, Pol II makes all mRNA (plus most regulatory RNAs), Pol III makes tRNA and 5S rRNA. Alpha-amanitin is the real toxin with this profile — mRNA production collapses while the other polymerases, far less sensitive, continue. A passage showing new protein synthesis decaying as existing mRNAs are degraded, with ribosome assembly initially intact, is describing exactly this selectivity.`
          },
          {
            question: `A bacterial mutation changes the -10 promoter element of a single gene so that sigma factor binds it poorly. The expected result is:`,
            options: [`Reduced transcription of that gene only, with normal protein`, `A mutant protein with altered amino acid sequence`, `Reduced transcription of all genes in the genome`, `Normal transcript levels but failed translation`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Promoter mutations are regulatory, cis-acting, and quantitative: the -10 box is a binding site upstream of the start site, not part of the mRNA or protein, so the product (when made) is normal — there is simply less of it, only from THIS gene. Contrast a sigma-factor mutation (trans-acting protein): that would depress many genes at once. Cis = the DNA element serves its own neighbor; trans = a diffusible product acts genome-wide. This distinction returns with force in the operon part.`
          },
          {
            question: `A patient presents with liver failure after eating wild mushrooms containing alpha-amanitin. At the cellular level, the earliest molecular deficit in hepatocytes is:`,
            options: [`Failure of DNA replication at licensed replication origins`, `Loss of new mRNA synthesis by RNA polymerase II`, `Immediate cessation of all translation`, `Depletion of tRNA pools from Pol III loss`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Amanitin's target is Pol II, so mRNA production stops first; translation continues transiently on pre-existing transcripts and then declines at rates set by each mRNA's half-life — short-lived regulatory mRNAs disappear before stable ones. Replication, tRNA synthesis (Pol III), and ribosomes are not direct targets. The temporal cascade (transcription now, translation later) is the same order-of-shutdown reasoning used to identify unknown inhibitors in experiment passages.`
          }
        ]
      }
    },
    {
      id: 'txn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Label the strand first.** Polymerase reads the template 3' to 5'; the mRNA matches the coding strand with U for T.
- **RNA polymerase starts de novo.** It builds 5' to 3' with no primer and little proofreading; transcripts are disposable.
- **Promoters place the polymerase.** Sigma (bacteria) or general transcription factors at the TATA box bind upstream of +1.
- **Three polymerases, two inhibitors.** Pol I rRNA, Pol II mRNA, Pol III tRNA; amanitin blocks Pol II, rifampin bacterial RNA pol.

**Common traps**

- **Complementing the coding strand.** The coding strand already matches the mRNA: swap T for U, never pair its bases.
- **One template per chromosome.** The template is defined per gene; neighboring genes can read opposite strands.
- **Promoter mutations alter the protein.** A promoter is untranscribed and cis-acting: it changes only how much of its gene is made.
- **Proteins vanish at once.** New synthesis continues until the mRNA decays; the protein then falls at its own half-life.

<!-- yield:low -->
**Low-yield extras**

- Sigma reads the -10 (TATAAT) and -35 elements, and alternative sigmas redirect whole gene programs; termination is by hairpin or rho in bacteria, and by poly-A cleavage for Pol II; TBP (in TFIID) binds the TATA box and the factors assemble a preinitiation complex; actinomycin D intercalates and blocks all transcription
<!-- /yield -->`
    }
  ]
};
