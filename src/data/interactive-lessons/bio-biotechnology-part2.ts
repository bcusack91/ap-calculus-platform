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
| Worked Examples: Predicting a Gel and Reading Genotypes |

> 🔑 **Key Concept:** **Gel electrophoresis separates DNA fragments by size and charge** (EK 6.8.A.1). DNA is negatively charged along its whole length, so in a gel it moves toward the positive electrode, and **smaller fragments travel farther** than larger ones.

## How a Gel Separates Molecules

### The setup
1. A slab of gel, a mesh of polymer strands with tiny pores, has small **wells** at one end.
2. The wells are placed at the **negative electrode**.
3. DNA samples are loaded into the wells, and an electric current is applied. DNA migrates through the gel toward the **positive electrode**.
4. The DNA is then stained so that each group of same-size fragments shows up as a **band**.

### Why DNA moves, and why size decides how far
- **Charge:** each nucleotide carries a negatively charged **phosphate group** in the backbone. DNA is therefore negative, and it is pulled toward the positive pole. ("Run to red": the positive electrode is usually red.)
- **Size:** because every nucleotide adds about the same negative charge, all DNA fragments have about the same **charge-to-mass ratio**. Charge alone would move them all at the same speed. The gel's mesh is what separates them: small fragments slip through the pores easily, and large fragments are slowed.

| Fragment | Movement through the gel | Final position |
|---|---|---|
| Small (e.g., 300 bp) | Passes through pores easily | Far from the well |
| Large (e.g., 8,000 bp) | Repeatedly blocked by the mesh | Close to the well |

### Size and charge, together
The CED says gel electrophoresis separates DNA fragments **by size and charge**. The two do different jobs: the negative **charge** of DNA sets the **direction** of movement (toward the positive electrode), and fragment **size** sets **how far** each fragment travels. That is why every DNA band ends up on the same side of the wells, spread out from largest (nearest the wells) to smallest (farthest).`
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

### What band brightness means
Brightness reflects **how much DNA** is in a band, not how far it moved.

- More copies of a fragment give a brighter band.
- Two different fragments of the **same size** run together as **one** band, which is brighter than it would be alone.
- With equal numbers of copies, a longer fragment binds more stain and looks brighter than a short one.`
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
      content: `## Worked Examples: Predicting a Gel and Reading Genotypes

### Worked Example 1: predicting a gel
In Part 1, a 10,000-bp linear molecule cut at two sites gave fragments of **2,000**, **5,500** and **2,500 bp**. Predict the lane.

**Step 1 — Order by size.** Largest to smallest: 5,500, then 2,500, then 2,000 bp.

**Step 2 — Translate size into position.** The largest fragment moves least, so the order from the wells outward is **5,500 → 2,500 → 2,000**.

**Step 3 — Place each band against the ladder.**

| Fragment (bp) | Falls between ladder bands | Approximate distance from well |
|---|---|---|
| 5,500 | 10,000 (8 mm) and 5,000 (15 mm), close to 5,000 | About 14 mm |
| 2,500 | 3,000 (21 mm) and 2,000 (26 mm) | About 23–24 mm |
| 2,000 | Level with the 2,000 ladder band | 26 mm |

**Step 4 — Check.** Three fragments give three bands, because no two are the same size. The uncut 10,000-bp molecule would instead give one band, level with the 10,000-bp ladder band.

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
            question: 'In Worked Example 1, what is the size in bp of the fragment whose band lies closest to the wells?',
            answer: '5500',
            acceptableAnswers: ['5,500'],
            explanation: 'The largest fragment is slowed most by the gel, so the 5,500-bp fragment stays closest to the wells.'
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
            question: 'Another lane contains fragments of 500, 2,000 and 6,000 bp. Listing the bands from closest to the wells to farthest from the wells, which order is correct?',
            options: [
              '500; 2,000; 6,000',
              '6,000; 2,000; 500',
              '2,000; 500; 6,000',
              '6,000; 500; 2,000'
            ],
            correctAnswer: 1,
            explanation: 'Larger fragments are slowed more by the gel mesh, so the 6,000-bp fragment stays closest to the wells and the 500-bp fragment travels farthest. Listing 500 first reverses the rule, and the other two orders do not follow size at all.'
          },
          {
            question: 'An unknown band in a sample lane lies between the 3,000-bp and 2,000-bp bands of the ladder. Which estimate of its size is most reasonable?',
            options: [
              '1,500 bp',
              '2,500 bp',
              '3,500 bp',
              '5,000 bp'
            ],
            correctAnswer: 1,
            explanation: 'A band between the 3,000-bp and 2,000-bp ladder bands must be smaller than 3,000 bp and larger than 2,000 bp, so about 2,500 bp. A 1,500-bp fragment would run past the 2,000-bp band, and fragments of 3,500 or 5,000 bp would stay nearer the wells than the 3,000-bp band.'
          }
        ]
      }
    }
  ]
};
