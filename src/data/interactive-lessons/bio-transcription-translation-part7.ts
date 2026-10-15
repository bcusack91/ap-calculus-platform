export const bioTranscriptionPart7Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran7-intro-p7',
      type: 'text' as const,
      content: `
## Transcription & Translation: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

This part ties the whole pathway together, from a gene in the nucleus to a working protein at its destination.

### The pathway on one page

| Step | Where (eukaryote) | Key molecules | What can go wrong |
|------|-------------------|---------------|-------------------|
| Transcription | Nucleus | RNA polymerase, promoter, template strand | Promoter mutation → little or no mRNA |
| RNA processing | Nucleus | 5′ cap, poly-A tail, spliceosome | Splice-site mutation → exon skipped or intron kept |
| Export | Nuclear pore | Mature mRNA | Unprocessed RNA is held back |
| Translation | Cytosol / rough ER | Ribosome, tRNA, codons, start and stop codons | Coding mutation → silent, missense, nonsense or frameshift |
| Folding and modification | Cytosol, ER, Golgi | Chaperones, glycosylation, cleavage | Misfolding → protein degraded |
| Delivery | ER → Golgi → vesicles, or free ribosome → cytosol | Signal sequence | Wrong or missing signal → wrong location |

### Prokaryote versus eukaryote, one more time

| Feature | Prokaryote | Eukaryote |
|---------|------------|-----------|
| Nucleus | None | Yes |
| Introns, cap and tail | Rarely / no | Yes |
| Coupled transcription and translation | Yes | No |
| Genetic code | Same | Same |
      `
    },
    {
      id: 'tran7-traps',
      type: 'text' as const,
      content: `
### The seven traps that cost the most points

1. **Pairing mRNA with the coding strand.** mRNA is complementary to the **template** and matches the coding strand.
2. **Using T in RNA.** RNA has U.
3. **Dropping the 5′/3′ labels.** mRNA is built 5′ → 3′; the template is read 3′ → 5′.
4. **Starting at the first base.** Translation starts at the first **AUG**, not at the first nucleotide.
5. **Counting the stop codon as an amino acid.** Stop codons add nothing.
6. **Thinking introns are removed from DNA.** They are removed from the pre-mRNA; the gene keeps them.
7. **Assuming every mutation changes the protein.** Silent mutations and most intron mutations do not.

### Quick reference: mutation outcomes

| Mutation | Frame shifted? | Typical effect on protein |
|----------|----------------|---------------------------|
| Silent substitution | No | None |
| Missense substitution | No | One amino acid changed |
| Nonsense substitution | No | Truncated protein |
| Insertion or deletion of 1–2 bases | Yes | Scrambled sequence, usually an early stop |
| Insertion or deletion of 3 bases | No | One amino acid added or removed |
      `
    },
    {
      id: 'tran7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review, Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A gene\'s coding strand is 5′–ATG GCA TGG TAA–3′. What polypeptide is produced? (GCA = Ala, UGG = Trp.)',
            options: [
              'Met – Ala – Trp',
              'Met – Ala – Trp – Stop – Met',
              'Tyr – Arg – Thr',
              'Met – Ala'
            ],
            correctAnswer: 0,
            explanation: 'The mRNA matches the coding strand with U for T: AUG GCA UGG UAA. That gives Met–Ala–Trp, and UAA stops translation without adding an amino acid.'
          },
          {
            question: 'Which observation would best show that a eukaryotic gene contains introns?',
            options: [
              'The gene\'s mRNA contains uracil wherever the DNA contains thymine',
              'The mature mRNA is much shorter than the gene\'s transcribed region',
              'The gene\'s mRNA is exported from the nucleus through nuclear pores',
              'The gene\'s mRNA carries a poly-A tail at its 3′ end after processing'
            ],
            correctAnswer: 1,
            explanation: 'If sequences are transcribed but missing from the mature message, they were spliced out, which is the signature of introns. The other observations are true of most eukaryotic mRNAs regardless of introns.'
          },
          {
            question: 'Which statement correctly contrasts the roles of tRNA and rRNA?',
            options: [
              'tRNA forms the ribosome core, while rRNA brings amino acids to codons',
              'tRNA carries amino acids to codons, while rRNA catalyzes peptide bonds',
              'tRNA holds the gene\'s message, while rRNA reads it in the nucleus',
              'tRNA joins exons together, while rRNA adds the 5′ cap to mRNA'
            ],
            correctAnswer: 1,
            explanation: 'tRNA is the adapter that matches amino acids to codons; rRNA forms the ribosome\'s core and catalyzes peptide bond formation.'
          }
        ]
      }
    },
    {
      id: 'tran7-frq',
      type: 'text' as const,
      content: `
### FRQ practice: tying the steps together

**Prompt (AP style).** A researcher compares two alleles of a gene. Allele 1 produces a normal-length protein. Allele 2 has a single base substitution, and cells with allele 2 produce normal amounts of mRNA but a protein that is less than half the normal length. (a) **Identify** the type of mutation most likely present in allele 2. (b) **Explain** why mRNA levels are unaffected. (c) **Propose** a measurement that would test your answer to (a).

**Model response.**

(a) A nonsense mutation: the substitution converted a codon into a stop codon about midway through the coding sequence.

(b) The substitution lies in the coding region, not the promoter, so RNA polymerase still binds and transcribes the gene at the normal rate; the change only matters once the ribosome reads the mRNA.

(c) Sequence the mRNA (or the gene) of allele 2 and compare it with allele 1: a stop codon (UAA, UAG or UGA) at the position where translation ends would confirm a nonsense mutation.

> 📝 **Scoring notes:** (b) earns the point only by linking the mutation's **location** to the step it affects. Saying "the mutation does not affect transcription" without a reason is not enough.
      `
    },
    {
      id: 'tran7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review, Set 2** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers find that a protein normally secreted by a cell now accumulates in the cytosol. Which mutation would most likely cause this?',
            options: [
              'A silent substitution in the middle of the coding sequence',
              'Loss of the ER signal sequence at the chain\'s start',
              'A substitution in the poly-A tail of the gene\'s mature mRNA',
              'A mutation in an intron far from the gene\'s splice sites'
            ],
            correctAnswer: 1,
            explanation: 'Without the ER signal sequence, the ribosome never docks on the rough ER, so the protein finishes on a free ribosome and stays in the cytosol.'
          },
          {
            question: 'Why do scientists consider the shared genetic code strong evidence for common ancestry?',
            options: [
              'The code is the only possible chemical arrangement that could ever work',
              'Separate origins would be unlikely to arrive at the same codon assignments',
              'Every organism uses identical proteins built from identical genes',
              'Organisms can exchange ribosomes freely across all species'
            ],
            correctAnswer: 1,
            explanation: 'Many alternative codon assignments are chemically possible, so the near-identical code in bacteria, archaea and eukaryotes is best explained by inheritance from a common ancestor.'
          },
          {
            question: 'A eukaryotic cell is treated with a drug that blocks only RNA splicing. Which molecule would build up in the nucleus?',
            options: [
              'Polypeptides still attached to ribosomes',
              'Pre-mRNA that still contains its introns',
              'Free tRNAs with no amino acids attached',
              'DNA strands with their introns removed'
            ],
            correctAnswer: 1,
            explanation: 'If splicing is blocked, pre-mRNAs cannot become mature mRNAs, so unspliced transcripts build up in the nucleus. Translation and DNA are not directly involved.'
          }
        ]
      }
    },
    {
      id: 'tran7-checklist',
      type: 'text' as const,
      content: `
### Last-mile checklist

- I can write an mRNA from either DNA strand, with 5′ and 3′ ends labeled.
- I can translate an mRNA with a codon chart, starting at AUG and stopping at a stop codon.
- I can name the three mRNA processing steps and what each one does.
- I can count splice variants and calculate exon and intron lengths.
- I can describe initiation, elongation and termination, including the A, P and E sites.
- I can classify a mutation as silent, missense, nonsense or frameshift and predict its effect.
- I can interpret an experiment that blocks transcription or translation.
- I can explain why the universal code supports common ancestry, and name the retrovirus exception to the usual flow.

> 🎯 **Final takeaway:** Sequence determines sequence, and sequence determines shape. Locate any change on the DNA → RNA → protein path and predict forward from there.
      `
    },
    {
      id: 'tran7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Match: Which Step Is Affected?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A mutation in the promoter',
            options: ['Transcription', 'RNA processing', 'Translation', 'Protein targeting']
          },
          {
            label: 'A mutation at an intron–exon boundary',
            options: ['Transcription', 'RNA processing', 'Translation', 'Protein targeting']
          },
          {
            label: 'An antibiotic that binds bacterial ribosomes',
            options: ['Transcription', 'RNA processing', 'Translation', 'Protein targeting']
          },
          {
            label: 'Deletion of the signal sequence of a secreted protein',
            options: ['Transcription', 'RNA processing', 'Translation', 'Protein targeting']
          }
        ],
        correctAnswers: ['Transcription', 'RNA processing', 'Translation', 'Protein targeting'],
        hint1: 'RNA polymerase binds the promoter.',
        hint2: 'The spliceosome recognizes intron boundaries.',
        hint3: 'Signal sequences direct where a finished protein goes.',
        explanation: 'Promoters control transcription, intron–exon boundaries guide splicing, ribosome-binding antibiotics block translation, and signal sequences direct protein targeting.'
      }
    }
  ]
}
