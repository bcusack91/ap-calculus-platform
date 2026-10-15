export const bioBiotechPart2Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p2-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 2 of 7 — Gel Electrophoresis**

---

### Topics in This Part

| Section |
|---------|
| How a Gel Separates Molecules |
| Reading a Gel: Ladders, Sizes and Brightness |
| Worked Examples: Restriction Maps and Genotypes |

> 🔑 **Key Concept:** **Electrophoresis separates molecules according to size and charge** (EK IST-1.P.1). DNA is negatively charged along its whole length, so in a gel it moves toward the positive electrode, and **smaller fragments travel farther** than larger ones.

## How a Gel Separates Molecules

### The setup
1. A slab of **agarose gel** is cast with small **wells** at one end. The gel is a mesh of polymer strands with tiny pores.
2. The gel sits in a buffer that conducts electricity. The wells are placed at the **negative electrode** (cathode).
3. DNA samples, mixed with a dense loading dye, are pipetted into the wells.
4. Current is applied. DNA migrates through the gel toward the **positive electrode** (anode).
5. After the run, the gel is stained with a dye that binds DNA, and the bands are viewed under light that makes the dye glow.

### Why DNA moves, and why size decides how far
- **Charge:** each nucleotide carries a negatively charged **phosphate group** in the backbone. DNA is therefore negative, and it is pulled toward the positive pole. ("Run to red": the positive electrode is usually red.)
- **Size:** because every nucleotide adds about the same negative charge, all DNA fragments have about the same **charge-to-mass ratio**. Charge alone would move them all at the same speed. The gel's mesh is what separates them: small fragments slip through the pores easily, and large fragments are slowed.

| Fragment | Movement through the gel | Final position |
|---|---|---|
| Small (e.g., 300 bp) | Passes through pores easily | Far from the well |
| Large (e.g., 8,000 bp) | Repeatedly blocked by the mesh | Close to the well |

### What about proteins?
Proteins can also be separated by electrophoresis, usually in a finer polyacrylamide gel. Unlike DNA, proteins differ in **charge** as well as size, because their R groups can be acidic, basic or neutral. That is why the essential knowledge says electrophoresis separates molecules by **size and charge**, not by size alone. For DNA, size is the variable that matters.`
    },
    {
      id: 'bio-biotechnology-p2-s2-mcq-mechanism',
      type: 'multiple-choice' as const,
      content: `**Concept Check — How a Gel Works** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student loads DNA samples into wells placed at the positive electrode by mistake and turns on the current. What will happen to the DNA?',
            options: [
              'It moves out of the wells into the buffer instead of the gel',
              'It separates normally, with small fragments farthest away',
              'It stays in the wells because its charge is neutralized',
              'It separates in reverse, with large fragments farthest away'
            ],
            correctAnswer: 0,
            explanation: 'Negatively charged DNA moves toward the positive electrode, which is right next to the wells, so it leaves the wells away from the gel and is lost. The direction of migration is set by charge, not by where the wells are.'
          },
          {
            question: 'Two DNA fragments, one of 400 bp and one of 4,000 bp, are run side by side. Why does the 400-bp fragment travel farther?',
            options: [
              'It carries a larger negative charge per nucleotide',
              'It passes through the pores of the gel matrix more easily',
              'It is attracted more strongly to the negative electrode',
              'It contains more phosphate groups than the larger fragment'
            ],
            correctAnswer: 1,
            explanation: 'DNA fragments have nearly the same charge per nucleotide, so the gel mesh separates them by size: the smaller fragment is slowed less by the pores. The larger fragment actually has more phosphate groups, and DNA moves toward the positive electrode.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p2-s3-reading',
      type: 'text' as const,
      content: `## Reading a Gel: Ladders, Sizes and Brightness

### The DNA ladder
A **ladder** (size marker) is a mixture of DNA fragments of known sizes, run in its own lane. Unknown bands are sized by comparing their positions with the ladder bands.

| Ladder band (bp) | Distance from well (mm) |
|---|---|
| 10,000 | 8 |
| 5,000 | 15 |
| 3,000 | 21 |
| 2,000 | 26 |
| 1,000 | 34 |
| 500 | 42 |

### Worked Example: estimating a size
An unknown band has moved **23 mm**.

1. Find the two ladder bands it falls between: 21 mm (3,000 bp) and 26 mm (2,000 bp).
2. It is a little closer to the 3,000-bp band, so its size is a little above the midpoint of 2,000 and 3,000.
3. **Estimate: about 2,600 bp.**

### Not a straight line
Migration distance is roughly proportional to the **logarithm** of fragment size, not to size itself. In the ladder above, halving the size from 10,000 to 5,000 bp adds 7 mm, and halving again from 2,000 to 1,000 bp adds 8 mm: similar steps for each halving. That is why scientists plot the ladder on a semi-log graph (size on a log axis, distance on a linear axis) to read unknowns accurately.

### What band brightness means
Brightness reflects **how much DNA** is in a band, not how far it moved.

- More copies of a fragment give a brighter band.
- Two different fragments of the **same size** run together as **one** band, which is brighter than it would be alone.
- With equal numbers of copies, a longer fragment binds more stain and looks brighter than a short one.

### Uncut plasmids are a special case
An uncut plasmid is a closed circle, usually tightly twisted (**supercoiled**). Supercoiled DNA is compact and often runs **faster** than a linear piece of the same length, and a nicked, relaxed circle runs slower. Uncut plasmid lanes can therefore show more than one band even though only one kind of molecule is present. Always size plasmids from a **linearized** (cut once) sample.`
    },
    {
      id: 'bio-biotechnology-p2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Complete the Gel Rules** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'DNA migrates toward the _____ electrode.',
            options: ['positive', 'negative', 'nearest', 'grounded']
          },
          {
            label: 'DNA is negatively charged because of its _____ groups.',
            options: ['phosphate', 'amino', 'hydroxyl', 'methyl']
          },
          {
            label: 'The band closest to the well contains the _____ fragments.',
            options: ['largest', 'smallest', 'most charged', 'least charged']
          },
          {
            label: 'A brighter band usually means more _____ in that band.',
            options: ['DNA', 'charge', 'voltage', 'agarose']
          }
        ],
        correctAnswers: ['positive', 'phosphate', 'largest', 'DNA'],
        hint1: 'Opposite charges attract.',
        hint2: 'Think of the sugar-phosphate backbone.',
        hint3: 'The gel mesh slows big molecules most.',
        explanation: 'Phosphate groups make DNA negative, so it moves toward the positive electrode. Large fragments are slowed by the gel and stay near the well, and brightness reflects the amount of DNA in a band.'
      }
    },
    {
      id: 'bio-biotechnology-p2-s5-worked',
      type: 'text' as const,
      content: `## Worked Examples: Restriction Maps and Genotypes

### Worked Example 1: building a restriction map
An 8,000-bp linear DNA molecule is cut in three reactions.

| Reaction | Bands (bp) |
|---|---|
| Enzyme A alone | 5,000 and 3,000 |
| Enzyme B alone | 6,000 and 2,000 |
| Enzymes A + B together | 3,000 (bright) and 2,000 |

**Step 1.** Each single digest gives 2 fragments, so each enzyme cuts once (linear DNA: $n + 1$ fragments).

**Step 2.** Place A. Its site is 3,000 bp from one end. Call that end position 0, so A cuts at 3,000.

**Step 3.** Place B. B's site is 2,000 bp from one end, so B cuts at either 2,000 or 6,000.

| If B cuts at… | A + B fragments would be | Matches the gel? |
|---|---|---|
| 2,000 | 2,000; 1,000; 5,000 | No: there is no 1,000 or 5,000 band |
| 6,000 | 3,000; 3,000; 2,000 | Yes: two 3,000-bp pieces make one bright band |

**Conclusion:** A cuts at 3,000 and B at 6,000. The double digest settled what the single digests could not, and the **bright** 3,000-bp band is the clue that two same-size fragments ran together.

### Worked Example 2: a genotype from a gel (simplified)
The mutation that causes sickle-cell disease changes one base pair in the β-globin gene, and that change destroys a restriction site. Researchers amplify the region and cut it.

| Allele | Restriction site present? | Fragments (simplified sizes) |
|---|---|---|
| Normal allele | Yes | 1,100 bp + 200 bp |
| Sickle-cell allele | No | 1,300 bp (uncut) |

| Person's genotype | Bands seen |
|---|---|
| Two normal alleles | 1,100 and 200 |
| Two sickle-cell alleles | 1,300 only |
| Heterozygous carrier | 1,300, 1,100 and 200 |

Differences in fragment lengths between individuals, caused by differences in their DNA sequence, are called **restriction fragment length polymorphisms (RFLPs)**. The same logic underlies the DNA fingerprinting in Part 5.

> 🔑 **AP Connection:** In a gel question, always justify with **both** facts: DNA is negative (so it moves toward the positive pole) and the gel slows larger fragments more (so smaller fragments move farther). Many FRQ rubrics award a point for each.`
    },
    {
      id: 'bio-biotechnology-p2-s6-input',
      type: 'input-boxes' as const,
      content: `**Read the Gel** 🧮

Use the ladder table (10,000 bp at 8 mm, 5,000 at 15, 3,000 at 21, 2,000 at 26, 1,000 at 34, 500 at 42) and the worked examples.`,
      exercise: {
        questions: [
          {
            question: 'A band lies exactly level with the ladder band at 34 mm. What is its size in bp?',
            answer: '1000',
            acceptableAnswers: ['1,000'],
            explanation: 'The 34-mm ladder band is 1,000 bp, so a band level with it is about 1,000 bp.'
          },
          {
            question: 'A person heterozygous for the sickle-cell allele is tested as in Worked Example 2. How many bands appear in their lane?',
            answer: '3',
            acceptableAnswers: ['three'],
            explanation: 'The uncut sickle-cell allele gives 1,300 bp, and the cut normal allele gives 1,100 and 200 bp: three bands.'
          },
          {
            question: 'In Worked Example 1, how many base pairs separate the sites for enzymes A and B?',
            answer: '3000',
            acceptableAnswers: ['3,000'],
            explanation: 'A cuts at 3,000 and B at 6,000, so the sites are 3,000 bp apart, which is the middle fragment of the double digest.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p2-s7-mcq-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯

A forensic scientist digests a DNA sample with a restriction enzyme and runs it next to a ladder. One lane shows a single, unusually bright band at 4,000 bp.`,
      exercise: {
        questions: [
          {
            question: 'Which explanation for the unusually bright band is most consistent with how gels work?',
            options: [
              'The 4,000-bp fragment carries a much greater charge per base pair',
              'Two or more different fragments of about 4,000 bp ran together',
              'The fragment is large, so the stain glows more as it slows down',
              'The fragment moved faster and gathered extra stain along the way'
            ],
            correctAnswer: 1,
            explanation: 'Brightness reflects the amount of DNA in a band, and same-size fragments co-migrate into one band. Charge per base pair is nearly constant in DNA, and migration speed does not change how much stain a band holds.'
          },
          {
            question: 'Which change would most improve the separation of two fragments of 4,000 bp and 4,200 bp that ran as one band?',
            options: [
              'Run the gel for longer so the small gap between the bands can widen',
              'Reverse the electrodes halfway so the fragments run back again',
              'Load more DNA so each band becomes brighter and easier to see',
              'Add a second ladder lane on the other side of the sample lanes'
            ],
            correctAnswer: 0,
            explanation: 'Fragments of slightly different sizes move at slightly different speeds, so a longer run lets the gap between them grow. Loading more DNA or adding a ladder does not change their relative positions.'
          },
          {
            question: 'A protein and a DNA fragment of similar mass are run in separate gels. Why can the protein end up far from where the DNA did?',
            options: [
              'Proteins have no charge, so they do not move in the gel',
              'Proteins always carry a stronger negative charge than DNA',
              'Proteins vary in net charge according to their R groups',
              'Proteins are too large to enter any kind of gel matrix'
            ],
            correctAnswer: 2,
            explanation: 'Electrophoresis separates by size and charge; DNA has a uniform negative charge per nucleotide, but a protein\'s net charge depends on its acidic and basic R groups. Proteins do carry charge and do enter gels, often finer polyacrylamide gels.'
          }
        ]
      }
    }
  ]
};
