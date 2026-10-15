export const bioTranscriptionPart2Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran2-intro-p2',
      type: 'text' as const,
      content: `
## Transcription

**Part 2 of 7 — Transcription**

**Transcription** is the synthesis of an RNA molecule complementary to one strand of a gene. The enzyme that does it is **RNA polymerase**. Three rules from the CED drive almost every transcription question:

1. RNA polymerase uses **one** DNA strand, the **template strand**, to direct which base is added next.
2. RNA is built in the **5′ → 3′** direction, so the template is read **3′ → 5′**.
3. Which strand serves as the template **depends on the gene**: different genes on the same chromosome can use opposite strands.

### Naming the two strands

| Strand | Other names | Relationship to the mRNA |
|--------|-------------|--------------------------|
| **Template strand** | Noncoding, antisense, minus (−) strand | **Complementary** to the mRNA |
| **Coding strand** | Nontemplate, sense, plus (+) strand | **Same sequence** as the mRNA, with T where the mRNA has U |

> 🔑 **Key Concept:** Because the mRNA is complementary to the template, and the coding strand is also complementary to the template, the mRNA and the coding strand match each other (except U for T).
      `
    },
    {
      id: 'tran2-mechanism',
      type: 'text' as const,
      content: `
### How RNA polymerase works

RNA polymerase is a single machine that does several jobs at once:

- **Opens the double helix** over a short stretch, exposing the template bases. (Unlike DNA replication, it needs no separate helicase.)
- **Needs no primer:** it can start a new chain from scratch.
- **Adds ribonucleotides** (A, U, G, C) that pair with the template: A on the template pairs with **U** in RNA, T pairs with A, G with C and C with G.
- **Links each new nucleotide to the 3′ end** of the growing chain, which is why RNA grows 5′ → 3′.
- **Lets the DNA rewind** behind it, releasing the RNA as a single strand.

### Three stages

| Stage | What happens |
|-------|--------------|
| **Initiation** | RNA polymerase binds the **promoter**, a DNA sequence just upstream of the gene. In eukaryotes, proteins called **transcription factors** must bind the promoter first (many promoters include a "TATA box") and then recruit the polymerase. The promoter's orientation sets which strand is the template. |
| **Elongation** | The polymerase moves along the template 3′ → 5′, adding nucleotides at a rate of roughly tens of nucleotides per second. |
| **Termination** | In bacteria, the polymerase transcribes a **terminator** sequence and releases the RNA. In eukaryotes, the pre-mRNA is cut free after the polymerase passes a signal sequence near the gene's end. |

Several RNA polymerases can transcribe the same gene one after another, so one gene can produce many mRNA copies quickly. This is the first point at which gene expression is amplified.
      `
    },
    {
      id: 'tran2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In which direction does RNA polymerase read the DNA template, and in which direction does it build the RNA?',
            options: [
              'It reads the template 5′ → 3′ and builds the RNA 5′ → 3′',
              'It reads the template 3′ → 5′ and builds the RNA 5′ → 3′',
              'It reads the template 3′ → 5′ and builds the RNA 3′ → 5′',
              'It reads the template 5′ → 3′ and builds the RNA 3′ → 5′'
            ],
            correctAnswer: 1,
            explanation: 'New nucleotides are added only to the 3′ end, so RNA grows 5′ → 3′. The template is antiparallel to the new RNA, so it is read 3′ → 5′.'
          },
          {
            question: 'A mutation destroys the promoter sequence of a gene but leaves the coding region intact. What is the most likely effect?',
            options: [
              'The gene is transcribed but the mRNA cannot leave the nucleus',
              'RNA polymerase cannot bind there, so the gene is not transcribed',
              'The mRNA is made from both strands instead of from just one',
              'Transcription starts normally but never stops at the end'
            ],
            correctAnswer: 1,
            explanation: 'The promoter is where RNA polymerase (with transcription factors in eukaryotes) binds to begin. Without it, transcription of that gene does not start.'
          }
        ]
      }
    },
    {
      id: 'tran2-worked',
      type: 'text' as const,
      content: `
### Worked example: writing the mRNA

**Problem.** Part of a gene's template strand reads:

\`3′ – T A C G G A T T C – 5′\`

Write the mRNA and the coding strand, with ends labeled.

**Step 1. Pair each template base.** T → A, A → U, C → G, G → C.

| Template (3′→5′) | T | A | C | G | G | A | T | T | C |
|------------------|---|---|---|---|---|---|---|---|---|
| mRNA (5′→3′) | A | U | G | C | C | U | A | A | G |

**Step 2. Label the ends.** The mRNA is antiparallel to the template, so it starts with its **5′** end opposite the template's 3′ end:

\`mRNA: 5′ – A U G C C U A A G – 3′\`

**Step 3. Write the coding strand.** It has the mRNA's sequence with T for U:

\`Coding: 5′ – A T G C C T A A G – 3′\`

**Check:** the coding strand and mRNA read the same in the same direction, and both are complementary to the template. The mRNA begins with AUG, the start codon you will meet in Part 4.

> 💡 **Misconception alert:** Students often write the mRNA as the coding strand's complement. That gives the **template** sequence (with U), which is wrong. Always pair the mRNA against the **template**.
      `
    },
    {
      id: 'tran2-drill',
      type: 'input-boxes' as const,
      content: `
**Write the Sequences** 🧮

A different gene's **template** strand reads \`3′ – T A C C T T G A C – 5′\`.

**1)** Write the mRNA, 5′ → 3′, as one string of letters (no spaces).
**2)** Write the coding strand, 5′ → 3′, as one string of letters.
**3)** How many uracils does the mRNA contain?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['AUGGAACUG', 'ATGGAACTG', '2'],
        hint1: 'Pair each template base: T→A, A→U, C→G, G→C.',
        hint2: 'The coding strand is the mRNA with T written in place of U.',
        hint3: 'Count the U\'s in AUGGAACUG.',
        explanation: 'Template TACCTTGAC pairs to mRNA AUGGAACUG; the coding strand is ATGGAACTG; the mRNA has two U\'s.'
      }
    },
    {
      id: 'tran2-strand-choice',
      type: 'text' as const,
      content: `
### Which strand is the template?

Along one chromosome, gene 1 may be transcribed using the "top" strand as template and gene 2, a few thousand bases away, using the "bottom" strand. The promoter's orientation decides: RNA polymerase binds facing one way and can only move in the direction that lets it read its template 3′ → 5′.

### Transcription versus DNA replication

| Feature | DNA replication | Transcription |
|---------|-----------------|---------------|
| Template | Both strands | One strand of one gene |
| Product | Two complete DNA molecules | One RNA copy of a gene |
| Enzyme | DNA polymerase (plus helicase, topoisomerase and ligase) | RNA polymerase alone opens and copies |
| Primer needed | Yes | No |
| Base opposite template A | T | U |
| How often | Once per cell cycle | Many times, whenever the gene is expressed |

> 📝 **AP Connection:** Free-response questions often give a short DNA sequence and ask for the mRNA or the amino acids. Points are lost for missing 5′/3′ labels and for using T in RNA. Label both ends every time.
      `
    },
    {
      id: 'tran2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'The coding strand of a gene reads 5′–ATGTTC–3′. What is the mRNA made from this gene?',
            options: [
              '5′–UACAAG–3′',
              '5′–AUGUUC–3′',
              '5′–CUUGUA–3′',
              '5′–GAACAU–3′'
            ],
            correctAnswer: 1,
            explanation: 'The mRNA has the same sequence as the coding strand, with U in place of T: 5′–AUGUUC–3′. The complement would be the template strand.'
          },
          {
            question: 'Two neighboring genes on a chromosome are found to use opposite DNA strands as templates. How is this possible?',
            options: [
              'Each gene\'s promoter orientation sets the strand its polymerase reads',
              'One gene is read by DNA polymerase and the other by RNA polymerase',
              'The two genes are copied at different stages of the cell cycle',
              'One strand is always used in the nucleus and the other in the cytoplasm'
            ],
            correctAnswer: 0,
            explanation: 'Template choice is gene-specific. The promoter positions RNA polymerase facing one direction, and the polymerase can read only the strand that runs 3′ → 5′ in that direction.'
          },
          {
            question: 'Which feature is true of transcription but not of DNA replication?',
            options: [
              'New nucleotides are added to the 3′ end of the chain',
              'The enzyme needs no primer to start a chain',
              'Base pairing with a template sets the new sequence',
              'The template and new strand are antiparallel'
            ],
            correctAnswer: 1,
            explanation: 'RNA polymerase can begin a chain on its own, but DNA polymerase needs a primer. Both processes build 5′ → 3′, use base pairing and produce antiparallel strands.'
          }
        ]
      }
    }
  ]
}
