export const bioTranscriptionPart4Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran4-intro-p4',
      type: 'text' as const,
      content: `
## Translation

**Part 4 of 7 — Translation**

**Translation** converts the base sequence of an mRNA into the amino acid sequence of a polypeptide. It happens on **ribosomes** in the cytoplasm, and it needs three kinds of RNA working together.

| Component | Role |
|-----------|------|
| **mRNA** | Supplies the codons, read 5′ → 3′ in non-overlapping triplets |
| **tRNA** | Adapter: an **anticodon** at one end pairs with a codon; each distinct tRNA carries its own specific amino acid at the other end |
| **Ribosome** (rRNA + proteins) | Holds mRNA and tRNAs in position; its rRNA catalyzes peptide bonds |

The ribosome has a small and a large subunit, and three tRNA-binding sites:

- **A site:** accepts the incoming tRNA carrying the next amino acid.
- **P site:** holds the tRNA attached to the growing polypeptide.
- **E site:** the exit, where the empty tRNA leaves.
      `
    },
    {
      id: 'tran4-stages',
      type: 'text' as const,
      content: `
### Three stages of translation

**1. Initiation**

- The small ribosomal subunit binds the mRNA (in eukaryotes, at the 5′ cap) and moves along it to the **start codon, AUG**. The CED describes this as rRNA in the ribosome interacting with the mRNA at the start codon.
- An initiator tRNA carrying **methionine** pairs with AUG.
- The large subunit joins, completing the ribosome with the initiator tRNA in the P site.

**2. Elongation** (repeats once for each amino acid)

1. **Codon recognition:** a tRNA whose anticodon matches the codon in the A site binds there.
2. **Peptide bond formation:** the rRNA catalyzes a bond that transfers the growing polypeptide from the tRNA in the P site onto the amino acid in the A site.
3. **Translocation:** the ribosome moves one codon toward the mRNA's 3′ end. The empty tRNA shifts to the E site and leaves, and the A site is open for the next codon.

**3. Termination**

- A **stop codon** enters the A site. No tRNA matches it, so no amino acid is added.
- The finished polypeptide is released, and the ribosome comes apart.

(The names and details of the other proteins and factors that assist each stage of translation are beyond the scope of the AP exam.)

The polypeptide grows from its amino end to its carboxyl end, matching the mRNA read 5′ → 3′. Several ribosomes can translate one mRNA at the same time, forming a **polyribosome**, so one mRNA can yield many protein copies quickly.
      `
    },
    {
      id: 'tran4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What determines which amino acid a tRNA adds to a growing polypeptide?',
            options: [
              'The order in which tRNAs happen to diffuse into the ribosome',
              'Pairing between its anticodon and the codon in the A site',
              'The amino acid already sitting at the end of the growing chain',
              'The base sequence of the rRNA in the large ribosomal subunit'
            ],
            correctAnswer: 1,
            explanation: 'Only a tRNA whose anticodon pairs with the codon in the A site stays bound, so the mRNA codon dictates which amino acid comes next.'
          },
          {
            question: 'A ribosome reaches a codon that a codon chart lists as a stop codon. What happens next?',
            options: [
              'A tRNA carrying a final amino acid enters the A site',
              'No tRNA pairs with it, and the polypeptide is freed',
              'The ribosome skips the codon and keeps on translating',
              'The ribosome returns to AUG to start a second copy'
            ],
            correctAnswer: 1,
            explanation: 'A stop codon has no matching tRNA, so no amino acid is added; translation ends and the completed polypeptide is released. The ribosome does not skip the codon, and a new round of translation begins at a start codon, not by the same ribosome backing up.'
          }
        ]
      }
    },
    {
      id: 'tran4-codon-table',
      type: 'text' as const,
      content: `
### Reading the genetic code

On the AP exam you are given a codon chart when you need one; you are not expected to memorize it. Here are the codons used in this topic's examples:

| Codon(s) | Amino acid | Codon(s) | Amino acid |
|----------|------------|----------|------------|
| AUG | Met (start) | UGG | Trp |
| UUU, UUC | Phe | GAA, GAG | Glu |
| CCU, CCC, CCA, CCG | Pro | GUU, GUC, GUA, GUG | Val |
| AAA, AAG | Lys | GGU, GGC, GGA, GGG | Gly |
| UAU, UAC | Tyr | UGU, UGC | Cys |
| UAA, UAG, UGA | Stop | GCU, GCC, GCA, GCG | Ala |

### Worked example: translating an mRNA

**Problem.** Translate: \`5′ – G C A U G C C U A A G U G G G A A U A A G C – 3′\`

**Step 1. Find the start codon.** Scan from the 5′ end for the first AUG. It begins at the 4th base: G C **A U G** ...

**Step 2. Divide into codons from AUG.** AUG | CCU | AAG | UGG | GAA | UAA | GC

**Step 3. Translate each codon until a stop.**

| Codon | AUG | CCU | AAG | UGG | GAA | UAA |
|-------|-----|-----|-----|-----|-----|-----|
| Amino acid | Met | Pro | Lys | Trp | Glu | Stop |

**Answer.** Met – Pro – Lys – Trp – Glu (5 amino acids). The bases before AUG and after UAA are not translated.

**Anticodons.** The anticodon is complementary and antiparallel to the codon. For the codon 5′–AUG–3′, the anticodon is 3′–UAC–5′, which is also written 5′–CAU–3′. Always check which direction a problem uses.
      `
    },
    {
      id: 'tran4-drill',
      type: 'input-boxes' as const,
      content: `
**Translation Practice** 🧮

Use the codon table above.

mRNA: \`5′ – A U G U U U G G C U A C U G A – 3′\`

**1)** How many amino acids are in the polypeptide?
**2)** What is the third amino acid? (Give the three-letter abbreviation.)
**3)** A different mRNA has 450 nucleotides from the first base of AUG through the last base of the stop codon. How many amino acids does its polypeptide contain?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', 'Gly', '149'],
        hint1: 'Split into codons: AUG | UUU | GGC | UAC | UGA.',
        hint2: 'UGA is a stop codon and adds no amino acid.',
        hint3: '450 ÷ 3 = 150 codons, and the last one is a stop codon.',
        explanation: '1) Met–Phe–Gly–Tyr, then UGA stops: 4 amino acids. 2) GGC codes for Gly. 3) 150 codons minus the stop codon gives 149 amino acids.'
      }
    },
    {
      id: 'tran4-prok',
      type: 'text' as const,
      content: `
### Coupling in prokaryotes

In bacteria, ribosomes attach to an mRNA while RNA polymerase is still making it. Electron micrographs show a DNA strand with RNA strands growing from it, each RNA studded with ribosomes. This **coupled** transcription and translation lets bacteria respond to change within minutes.

### Translation is a target for antibiotics

Bacterial ribosomes differ in structure from the ribosomes in a eukaryote's cytoplasm. Several antibiotics bind bacterial ribosomes and block translation, while leaving the host's cytoplasmic ribosomes largely unaffected.

> 📝 **AP Connection:** Because nearly all organisms share the same genetic code and the same basic translation steps, these processes are evidence of **common ancestry**. The structural differences in ribosomes are what make selective antibiotics possible.
      `
    },
    {
      id: 'tran4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An mRNA codon reads 5′–GAA–3′. Which tRNA anticodon pairs with it?',
            options: [
              '3′–CUU–5′',
              '3′–GAA–5′',
              '3′–CTT–5′',
              '3′–AAG–5′'
            ],
            correctAnswer: 0,
            explanation: 'The anticodon is complementary and antiparallel: G pairs with C and A pairs with U, giving 3′–CUU–5′. RNA contains U, not T.'
          },
          {
            question: 'A drug stops the ribosome from moving along the mRNA after a peptide bond forms. What will happen to translation?',
            options: [
              'Elongation stalls with a short chain still attached to the tRNA in the A site',
              'The ribosome will keep adding amino acids but in a random order',
              'Initiation will fail because the small subunit cannot bind the cap',
              'Termination will occur early because a stop codon enters the A site'
            ],
            correctAnswer: 0,
            explanation: 'Translocation moves the next codon into the A site. Without it, no new tRNA can enter, so elongation stalls with the chain on the tRNA in the A site.'
          },
          {
            question: 'Why can one mRNA molecule in a cell produce many copies of its protein within a short time?',
            options: [
              'Several ribosomes can translate the same mRNA at once',
              'Each ribosome copies the mRNA before it begins translating it',
              'The polypeptide serves as a template for further polypeptides',
              'Each codon can be read by two tRNAs at the same time'
            ],
            correctAnswer: 0,
            explanation: 'A polyribosome forms as ribosomes start one after another along the same mRNA, each making its own copy of the polypeptide.'
          }
        ]
      }
    },
    {
      id: 'tran4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Order the Events of Elongation** 🔍

Choose the step number for each event in one elongation cycle.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A tRNA with a matching anticodon binds in the A site',
            options: ['Step 1', 'Step 2', 'Step 3']
          },
          {
            label: 'The polypeptide is transferred onto the amino acid in the A site',
            options: ['Step 1', 'Step 2', 'Step 3']
          },
          {
            label: 'The ribosome moves one codon and the empty tRNA exits',
            options: ['Step 1', 'Step 2', 'Step 3']
          }
        ],
        correctAnswers: ['Step 1', 'Step 2', 'Step 3'],
        hint1: 'A tRNA must arrive before a bond can form.',
        hint2: 'The bond forms while both tRNAs are in the ribosome.',
        hint3: 'Movement clears the A site for the next codon.',
        explanation: 'Each cycle is codon recognition, then peptide bond formation, then translocation, which empties the A site for the next tRNA.'
      }
    }
  ]
}
