export const bioTranscriptionPart1Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran1-intro-p1',
      type: 'text' as const,
      content: `
## Central Dogma

**Part 1 of 7 — Central Dogma**

Your DNA holds instructions, but DNA itself does not build anything. Proteins do the work of the cell: enzymes, channels, receptors, structural fibers and signals. The **central dogma** describes how information stored in DNA becomes a working protein:

$$\\text{DNA} \\xrightarrow{\\text{transcription}} \\text{RNA} \\xrightarrow{\\text{translation}} \\text{protein}$$

| Step | Input | Output | Machinery |
|------|-------|--------|-----------|
| **Transcription** | A gene's DNA sequence | A complementary RNA molecule | RNA polymerase |
| **Translation** | The mRNA's base sequence | A polypeptide's amino acid sequence | Ribosomes and tRNA |

The key idea is **sequence → sequence**: the order of nucleotides in DNA determines the order of bases in mRNA, which determines the order of amino acids in the protein. Amino acid order determines how the protein folds, and its shape determines its function.

> 🔑 **Key Concept:** A **gene** is a stretch of DNA whose sequence is transcribed into a functional RNA. For most genes, that RNA is an mRNA that is then translated into a polypeptide.
      `
    },
    {
      id: 'tran1-rna-types',
      type: 'text' as const,
      content: `
### Three kinds of RNA, three jobs

The CED stresses that an RNA's **base sequence and its structure** together determine its function.

| RNA | Structure | Job in gene expression |
|-----|-----------|------------------------|
| **mRNA** (messenger) | Single linear strand | Carries the gene's coded message from DNA to the ribosome |
| **tRNA** (transfer) | Folds into a cloverleaf/L shape; has an **anticodon** loop and an amino acid attachment site | Brings the correct amino acid to the ribosome by pairing its anticodon with an mRNA codon |
| **rRNA** (ribosomal) | Folds into complex shapes and combines with proteins to form ribosomes | Forms the ribosome's core and catalyzes peptide bond formation |

### RNA versus DNA, in brief

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose |
| Bases | A, T, G, C | A, **U**, G, C (uracil replaces thymine) |
| Strands | Usually double | Usually single, but can fold on itself |
| Lifespan in the cell | Long-term storage | Often short-lived, made as needed |

Because RNA is single-stranded, it can fold into specific three-dimensional shapes, which is why tRNA and rRNA can do jobs that DNA cannot.
      `
    },
    {
      id: 'tran1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence shows the usual flow of genetic information in a cell?',
            options: [
              'Protein → RNA → DNA',
              'DNA → RNA → protein',
              'RNA → protein → DNA',
              'DNA → protein → RNA'
            ],
            correctAnswer: 1,
            explanation: 'Genetic information is transcribed from DNA into RNA, and the mRNA is then translated into a protein.'
          },
          {
            question: 'A molecule pairs three of its bases with an mRNA codon and carries an amino acid. Which molecule is it?',
            options: [
              'Ribosomal RNA',
              'Transfer RNA',
              'Messenger RNA',
              'RNA polymerase'
            ],
            correctAnswer: 1,
            explanation: 'Transfer RNA has an anticodon that base-pairs with a codon and an attachment site for its amino acid. rRNA forms the ribosome, and RNA polymerase is the enzyme of transcription.'
          }
        ]
      }
    },
    {
      id: 'tran1-where',
      type: 'text' as const,
      content: `
### Where it happens: prokaryotes versus eukaryotes

| Feature | Prokaryote (e.g., *E. coli*) | Eukaryote (e.g., human cell) |
|---------|------------------------------|------------------------------|
| Location of transcription | Cytoplasm (no nucleus) | Nucleus |
| RNA processing | Little or none | Cap, tail and splicing before export |
| Location of translation | Cytoplasm | Cytoplasm (free ribosomes or rough ER) |
| Timing | Translation can begin **while the mRNA is still being transcribed** | Transcription and translation are separated in space and time |

Because eukaryotes separate the two steps with the nuclear envelope, they gain extra control points: the RNA can be processed, checked and exported only when it is ready. Prokaryotes gain speed instead.

### Exceptions to the usual flow

- **Retroviruses** such as HIV carry an RNA genome. Their enzyme **reverse transcriptase** copies RNA into DNA, which is then inserted into the host's chromosome and transcribed by the host. Information flows RNA → DNA, the reverse of transcription.
- Many other RNA viruses copy RNA directly into more RNA.

> 📝 **AP Connection:** The CED names retroviruses as an exception to the usual flow of information. Expect questions asking what reverse transcriptase does and why drugs that block it slow HIV.
      `
    },
    {
      id: 'tran1-universal',
      type: 'text' as const,
      content: `
### One code for (nearly) all life

mRNA is read in groups of three bases called **codons**. There are $4^3 = 64$ possible codons:

- **61** codons specify the 20 amino acids, so most amino acids have **more than one** codon (the code is redundant).
- **3** codons are **stop** signals. (A codon chart identifies them; you do not need to memorize which ones they are.)
- **AUG** codes for methionine and also serves as the usual **start** codon. AUG is the one codon the AP exam expects you to know without a chart.

Nearly every organism, from bacteria to plants to people, uses the same codon assignments. A human gene placed in a bacterium can be translated into the correct human protein, which is how bacteria are engineered to make human insulin.

**Why it matters:** a shared genetic code is strong evidence that all living organisms descend from a **common ancestor**. The few known variations (for example, in mitochondria) are small changes to that shared code.

> 💡 **Misconception alert:** "Redundant" does not mean "ambiguous." Several codons can mean the same amino acid, but each codon means only **one** amino acid (or stop).
      `
    },
    {
      id: 'tran1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A drug that blocks reverse transcriptase slows the spread of HIV in a patient. Which step does the drug most directly prevent?',
            options: [
              'Translation of viral proteins on the host cell ribosomes',
              'Copying of the viral RNA genome into a matching DNA molecule',
              'Transcription of host genes into mRNA in the nucleus',
              'Replication of host chromosomes before cell division'
            ],
            correctAnswer: 1,
            explanation: 'Reverse transcriptase makes DNA from the retrovirus RNA genome. Blocking it prevents viral DNA from forming and inserting into the host genome.'
          },
          {
            question: 'Bacteria given a human gene (with introns already removed) can produce the correct human protein. What feature of life best explains this?',
            options: [
              'Bacteria and humans share the same set of regulatory proteins',
              'Bacterial ribosomes can edit human genes into a bacterial form',
              'Their ribosomes read codons using nearly the same code',
              'Human proteins fold without needing any amino acid sequence'
            ],
            correctAnswer: 2,
            explanation: 'The genetic code is nearly universal, so bacterial ribosomes and tRNAs read a human coding sequence the same way human cells do, which also supports common ancestry.'
          },
          {
            question: 'Which feature allows bacteria to begin translating an mRNA before its transcription is finished?',
            options: [
              'Bacterial genes have no start or stop codons in their mRNA',
              'Bacteria have no nuclear envelope separating DNA from ribosomes',
              'Bacterial mRNA is spliced faster than eukaryotic mRNA is spliced',
              'Bacterial ribosomes attach to the DNA template instead of the mRNA'
            ],
            correctAnswer: 1,
            explanation: 'With no nucleus, ribosomes in a bacterium reach the growing mRNA while RNA polymerase is still making it, so the two processes can overlap.'
          }
        ]
      }
    },
    {
      id: 'tran1-roadmap',
      type: 'text' as const,
      content: `
### Roadmap for this topic

| Part | Focus |
|------|-------|
| 1 | Central dogma, RNA types and the universal code (this part) |
| 2 | Transcription: strands, direction and RNA polymerase |
| 3 | RNA processing: cap, tail, splicing and alternative splicing |
| 4 | Translation: codons, tRNA and the ribosome |
| 5 | After translation: folding, modification and targeting |
| 6 | Workshop: sequence problems and mutations |
| 7 | Synthesis and AP review |

> 🎯 **Takeaway:** DNA sequence → mRNA sequence → amino acid sequence → protein shape → function. Every later part fills in one arrow of that chain.
      `
    },
    {
      id: 'tran1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Molecule to Its Role** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carries a gene\'s coded message to the ribosome',
            options: ['mRNA', 'tRNA', 'rRNA', 'Reverse transcriptase']
          },
          {
            label: 'Forms the ribosome and catalyzes peptide bonds',
            options: ['mRNA', 'tRNA', 'rRNA', 'Reverse transcriptase']
          },
          {
            label: 'Makes DNA using an RNA template',
            options: ['mRNA', 'tRNA', 'rRNA', 'Reverse transcriptase']
          }
        ],
        correctAnswers: ['mRNA', 'rRNA', 'Reverse transcriptase'],
        hint1: 'The "messenger" carries the message.',
        hint2: 'Ribosomes are built around ribosomal RNA.',
        hint3: 'Retroviruses reverse the usual DNA → RNA direction.',
        explanation: 'mRNA carries the message, rRNA forms the ribosome and catalyzes peptide bonds, and reverse transcriptase copies RNA into DNA in retroviruses.'
      }
    }
  ]
}
