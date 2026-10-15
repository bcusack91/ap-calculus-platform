export const bioTranscriptionPart3Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran3-intro-p3',
      type: 'text' as const,
      content: `
## RNA Processing

**Part 3 of 7 — RNA Processing**

In a eukaryotic cell, the RNA that comes off RNA polymerase is not ready to be translated. This first product is the **pre-mRNA** (primary transcript). Before it leaves the nucleus, enzymes modify it in three ways, which the CED lists explicitly:

| Modification | Where on the RNA | What it does |
|--------------|------------------|--------------|
| **5′ cap** (a modified guanine nucleotide, added from GTP) | 5′ end | Protects the mRNA from degradation; helps the ribosome attach; aids export |
| **Poly-A tail** (a chain of roughly 50–250 adenine nucleotides) | 3′ end | Protects the mRNA from degradation; aids export and translation |
| **Splicing** | Throughout | Removes **introns** and joins **exons** together |

The result is the **mature mRNA**, which is exported through a nuclear pore to the cytoplasm.

> 🔑 **Key Concept:** **Ex**ons are **ex**pressed: they remain in the mature mRNA. **In**trons are **in**tervening sequences: they are cut out and broken down in the nucleus.
      `
    },
    {
      id: 'tran3-cap-tail',
      type: 'text' as const,
      content: `
### The cap and tail: protection and a passport

Enzymes in the cytoplasm called nucleases attack RNA from its ends. The cap and the tail act like protective end-pieces:

- Experiments that inject mRNA into cells show that mRNA **without** a poly-A tail is degraded much faster than the same mRNA **with** one.
- An mRNA without a 5′ cap is poorly translated, because the small ribosomal subunit normally recognizes the cap when it binds.

Because cap and tail both affect how long an mRNA survives and how often it is translated, they also influence **how much protein** a gene produces.

### Splicing: cutting out introns

Most eukaryotic genes are split: coding exons are separated by noncoding introns, which are often much longer than the exons.

- Introns begin and end with short signal sequences that mark the cut sites.
- A complex called the **spliceosome**, made of small RNAs and proteins, recognizes those signals, cuts the pre-mRNA at both ends of an intron and joins the neighboring exons.
- In the spliceosome, **RNA** helps catalyze the reaction. RNA molecules that act as catalysts are called **ribozymes**, another example of RNA's structure determining its function.

> 💡 **Misconception alert:** Introns are removed from the **RNA**, not from the DNA. The gene in the chromosome still contains every intron.
      `
    },
    {
      id: 'tran3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers inject two versions of the same mRNA into frog eggs: one with a poly-A tail and one without. Which result is expected?',
            options: [
              'The tailless mRNA is broken down sooner and makes less protein',
              'The tailless mRNA makes a longer protein with extra amino acids',
              'The tailless mRNA is translated faster with nothing in the way',
              'Both versions last equally long since the tail is not translated'
            ],
            correctAnswer: 0,
            explanation: 'The poly-A tail protects mRNA from degradation, so the tailless version is destroyed faster and yields less protein. The tail is not translated, so it does not change the protein\'s length.'
          },
          {
            question: 'A gene in a chromosome is 8,000 base pairs long, but the mature mRNA made from it is only 2,000 nucleotides plus its cap and tail. What best explains the difference?',
            options: [
              'Only one of the two DNA strands is transcribed into RNA',
              'Introns were cut out of the RNA and the exons were joined',
              'The ribosome removed part of the mRNA as it translated it',
              'Part of the gene was deleted from the DNA after transcription'
            ],
            correctAnswer: 1,
            explanation: 'Introns make up most of many eukaryotic genes. They are transcribed but then spliced out of the pre-mRNA, so the mature mRNA is much shorter than the gene. The DNA itself is unchanged.'
          }
        ]
      }
    },
    {
      id: 'tran3-alt-splice',
      type: 'text' as const,
      content: `
### Alternative splicing: one gene, several proteins

Exons are not always joined the same way. In **alternative splicing**, different combinations of exons are kept in the mature mRNA, so **one gene can produce several different polypeptides**.

*Example:* the calcitonin gene. In thyroid cells, its pre-mRNA is spliced to make the hormone calcitonin. In certain neurons, the same pre-mRNA is spliced differently to make a different signaling peptide (CGRP).

This helps explain how humans make far more kinds of proteins than they have protein-coding genes (roughly 20,000).

### Worked example: counting splice variants

**Problem.** A gene has five exons (E1–E5). E1 and E5 are always kept. E2 and E4 can each be kept or skipped independently. E3 is always kept. How many different mature mRNAs can be made? Give the exon order of the shortest one.

**Step 1. Identify the choices.** Only E2 and E4 are optional, and each has 2 options (in or out).

**Step 2. Multiply.** $2 \\times 2 = 4$ different mRNAs.

**Step 3. List them** to check:

| mRNA | Exons kept |
|------|------------|
| 1 | E1 – E2 – E3 – E4 – E5 |
| 2 | E1 – E3 – E4 – E5 |
| 3 | E1 – E2 – E3 – E5 |
| 4 | E1 – E3 – E5 |

**Answer.** 4 mRNAs; the shortest is E1–E3–E5.

Note that exon **order** is preserved: splicing removes pieces but does not shuffle the exons into a new order.
      `
    },
    {
      id: 'tran3-length',
      type: 'input-boxes' as const,
      content: `
**Processing Arithmetic** 🧮

A pre-mRNA is 6,400 nucleotides long (not counting the cap and tail). It has four exons of 300, 450, 250 and 200 nucleotides; the rest is introns.

**1)** How many nucleotides of the pre-mRNA are intron sequence?
**2)** How many nucleotides are in the spliced mRNA (exons only)?
**3)** If exons 2 and 3 can each be independently included or skipped, while exons 1 and 4 are always kept, how many different mature mRNAs are possible?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5200', '1200', '4'],
        hint1: 'Add the exons: 300 + 450 + 250 + 200.',
        hint2: 'Intron length = 6,400 − total exon length.',
        hint3: 'Two independent in-or-out choices give 2 × 2 combinations.',
        explanation: '1) Exons total 1,200, so introns are 6,400 − 1,200 = 5,200 nucleotides. 2) The spliced mRNA is 1,200 nucleotides. 3) Two optional exons give 2 × 2 = 4 mRNAs.'
      }
    },
    {
      id: 'tran3-prok',
      type: 'text' as const,
      content: `
### Prokaryotes skip this step

Bacterial genes rarely have introns, and bacterial mRNA has no 5′ cap or poly-A tail of the eukaryotic kind. That difference has a practical consequence:

- A bacterium given a human gene **with** its introns cannot splice them out, so it produces a faulty protein.
- Biotechnologists therefore start from the human **mature mRNA** and use reverse transcriptase to make an intron-free DNA copy (cDNA), which bacteria can express correctly.

### Evidence that introns exist

When a mature mRNA is allowed to base-pair with its single-stranded gene and viewed with an electron microscope, the DNA shows **loops** that have no partner in the mRNA. Each loop is an intron, a stretch of the gene with no matching sequence in the processed message.

> 📝 **AP Connection:** Expect to explain why a mutation in a **splice site** can change a protein drastically: the spliceosome may skip an exon or keep an intron, changing a large block of the amino acid sequence or creating an early stop codon. You will practice this in Part 6.
      `
    },
    {
      id: 'tran3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Muscle cells and liver cells both express gene Q, but the two tissues make proteins of different lengths from it. Which process most likely accounts for this?',
            options: [
              'The two tissues read opposite DNA strands of gene Q as templates',
              'Each tissue joins its own selection of gene Q exons into the mRNA',
              'Liver cells remove the poly-A tail before translating gene Q mRNA',
              'Muscle cells delete part of gene Q from their chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'Alternative splicing joins different exon combinations in different cell types, producing different polypeptides from one gene. The template strand of a gene is fixed, and somatic cells keep the same DNA.'
          },
          {
            question: 'A human gene, complete with its introns, is inserted into bacteria. The bacteria make a protein, but it does not function. What is the most likely reason?',
            options: [
              'Bacteria use a different genetic code from human cells',
              'Bacteria cannot splice the RNA transcript',
              'Bacteria lack ribosomes that can read a human mRNA',
              'Bacteria transcribe genes from the wrong DNA strand'
            ],
            correctAnswer: 1,
            explanation: 'Bacteria lack the spliceosome machinery, so intron sequences remain in the mRNA and are translated as if they were coding sequence. The genetic code itself is shared.'
          },
          {
            question: 'Which statement about introns is accurate?',
            options: [
              'They are transcribed into the pre-mRNA and then removed',
              'They are skipped by RNA polymerase during transcription',
              'They are translated into short peptides that are discarded',
              'They are cut out of the chromosome before transcription'
            ],
            correctAnswer: 0,
            explanation: 'Introns are copied into the pre-mRNA along with exons, then removed by the spliceosome. They are neither skipped by the polymerase nor deleted from the DNA.'
          }
        ]
      }
    },
    {
      id: 'tran3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Modification to Its Role** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Added to the 5′ end; helps the ribosome attach',
            options: ['5′ cap', 'Poly-A tail', 'Intron removal', 'Alternative splicing']
          },
          {
            label: 'A string of adenine nucleotides that slows degradation',
            options: ['5′ cap', 'Poly-A tail', 'Intron removal', 'Alternative splicing']
          },
          {
            label: 'Lets one gene give rise to more than one polypeptide',
            options: ['5′ cap', 'Poly-A tail', 'Intron removal', 'Alternative splicing']
          }
        ],
        correctAnswers: ['5′ cap', 'Poly-A tail', 'Alternative splicing'],
        hint1: 'The cap is at the 5′ end; the tail is at the 3′ end.',
        hint2: 'Adenine nucleotides make up the tail.',
        hint3: 'Different exon combinations give different proteins.',
        explanation: 'The 5′ cap aids ribosome binding, the poly-A tail protects the mRNA, and alternative splicing produces several polypeptides from one gene.'
      }
    }
  ]
}
