export const bioBiotechPart5Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p5-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 5 of 7 — Sequencing, DNA Fingerprinting and Gene Editing**

---

### Topics in This Part

| Section |
|---------|
| DNA Sequencing by Chain Termination |
| DNA Fingerprinting with Short Tandem Repeats |
| Gene Editing, Gene Therapy and Ethics |
| Misconceptions Across the Topic |

> 🔑 **Key Concept:** **DNA sequencing determines the order of nucleotides in a DNA molecule** (EK IST-1.P.4). Sequencing, together with PCR and electrophoresis, lets scientists identify individuals, diagnose mutations, compare species and design precise genetic changes.

## DNA Sequencing by Chain Termination

The classic method copies a template with DNA polymerase but deliberately stops the copies at every possible position.

### The ingredients
- Many copies of the **template** strand (often made by PCR)
- A **primer** and **DNA polymerase**
- Normal nucleotides (dNTPs)
- A small amount of **chain-terminating nucleotides**: modified nucleotides that **lack the 3′-OH group**. Each of the four kinds (A, T, C, G) carries a different colored fluorescent tag.

### Why the chains stop
Polymerase joins each new nucleotide to the **3′-OH** of the last one. When it happens to add a terminating nucleotide, there is no 3′-OH to build on, so that strand ends. Because terminators are rare compared with normal nucleotides, they are added at random positions in different copies. The reaction ends up with strands that stop at **every** position, each tagged with the color of its last base.

### Reading the result
The fragments are separated by size with single-nucleotide precision (by electrophoresis in a thin capillary). A detector reads the color of each fragment from **shortest to longest**, which is the order of the new strand from its **5′ end to its 3′ end**.

### Worked Example
| Fragment length (nucleotides after the primer) | Color of last base |
|---|---|
| 1 | A |
| 2 | C |
| 3 | C |
| 4 | G |
| 5 | T |
| 6 | A |

- New strand: **5′-ACCGTA-3′**
- Template strand (complementary and antiparallel): **3′-TGGCAT-5′**, which written 5′→3′ is **5′-TACGGT-3′**

### High-throughput sequencing
Newer methods sequence millions of short fragments **in parallel**, then use computers to assemble overlapping reads into a full sequence. Whole genomes can now be sequenced quickly and cheaply, which supports:
- comparing genomes across species to reconstruct evolutionary relationships
- finding mutations linked to disease, including in cancer cells
- tracking how a pathogen's genome changes during an outbreak`
    },
    {
      id: 'bio-biotechnology-p5-s2-mcq-sequencing',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sequencing** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In chain-termination sequencing, why does adding a modified nucleotide stop the growing strand?',
            options: [
              'It cannot base-pair with any nucleotide on the template',
              'It has no 3′-OH group for the next nucleotide to bond to',
              'It causes the primer to separate from the template strand',
              'It changes the template so polymerase can no longer read it'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase forms each phosphodiester bond with the 3′-OH of the previous nucleotide, and the modified nucleotide lacks it, so no further nucleotide can be added. It still base-pairs normally, which is why it is incorporated at all.'
          },
          {
            question: 'A sequencing read gives the new strand as 5′-GATTC-3′. What is the template strand, written 5′→3′?',
            options: [
              '5′-GAATC-3′',
              '5′-CTAAG-3′',
              '5′-GATTC-3′',
              '5′-CTTAG-3′'
            ],
            correctAnswer: 0,
            explanation: 'The complement of 5′-GATTC-3′ is 3′-CTAAG-5′, and reversing it to read 5′→3′ gives 5′-GAATC-3′. Writing 5′-CTAAG-3′ forgets that the strands are antiparallel.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p5-s3-fingerprinting',
      type: 'text' as const,
      content: `## DNA Fingerprinting with Short Tandem Repeats

More than 99% of the DNA sequence is identical between any two people, so fingerprinting focuses on the places where people differ most.

### Short tandem repeats (STRs)
An **STR** is a short sequence, often 4 nucleotides long, repeated many times in a row at one location (locus), for example GATA GATA GATA … The **number of repeats** at a locus varies from person to person.

- Each person has **two alleles** at each STR locus, one inherited from each parent.
- PCR primers that flank the repeat amplify it, and the product's length reveals how many repeats each allele has.
- Products are separated by size with electrophoresis.

One locus alone is shared by many people. Testing many independent loci at once (about 20 in standard U.S. forensic panels) makes a chance match between unrelated people extremely unlikely.

### Worked Example: a paternity case
Numbers are repeat counts for each allele.

| Locus | Child | Mother | Man A | Man B |
|---|---|---|---|---|
| 1 | 12, 15 | 12, 14 | 15, 17 | 13, 16 |
| 2 | 9, 11 | 9, 10 | 8, 11 | 11, 12 |
| 3 | 7, 8 | 8, 8 | 7, 10 | 6, 9 |

**Step 1.** At each locus, find the allele the child got from the mother. The other allele must be paternal.
- Locus 1: mother has 12, so the paternal allele is **15**.
- Locus 2: mother has 9, so the paternal allele is **11**.
- Locus 3: mother has only 8, so the paternal allele is **7**.

**Step 2.** Check each man for all three paternal alleles.
- Man A: 15 ✓, 11 ✓, 7 ✓ → **cannot be excluded**
- Man B: 15 ✗ → **excluded** (one mismatch is enough, barring a new mutation)

Note the asymmetry: a mismatch **excludes**, but a match only fails to exclude. Confidence in a match comes from testing many loci.

### Forensic use
A profile from a crime-scene sample is compared with profiles from suspects. Because PCR amplifies tiny amounts, a few cells can be enough. The same logic of matching fragment lengths was used earlier with RFLPs (Part 2), which needed much more DNA.`
    },
    {
      id: 'bio-biotechnology-p5-s4-input',
      type: 'input-boxes' as const,
      content: `**Fingerprint Reasoning** 🧮

A child has alleles 10 and 13 at an STR locus. The mother has 10 and 16.`,
      exercise: {
        questions: [
          {
            question: 'How many repeats does the paternal allele at this locus have?',
            answer: '13',
            explanation: 'The child\'s 10 can come from the mother, so the 13 must have come from the father.'
          },
          {
            question: 'A man has alleles 11 and 14 at this locus. Can he be excluded as the father? Answer yes or no.',
            answer: 'yes',
            explanation: 'He has no 13 allele, so he could not have passed the paternal allele to the child.'
          },
          {
            question: 'How many alleles does each person carry at a single STR locus on an autosome?',
            answer: '2',
            acceptableAnswers: ['two'],
            explanation: 'Autosomes come in homologous pairs, one from each parent, so each person has two alleles (which may be the same length).'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p5-s5-editing',
      type: 'text' as const,
      content: `## Gene Editing, Gene Therapy and Ethics

### CRISPR: a targeted cut
Like restriction enzymes, CRISPR began as a **bacterial defense against viruses**. Bacteria store short pieces of viral DNA and use RNA copies of them to guide a DNA-cutting enzyme to matching viral DNA. Scientists adapted this system for gene editing.

| Component | What it does |
|---|---|
| **Guide RNA** (about 20 nucleotides of targeting sequence) | Base-pairs with the matching DNA sequence, choosing the target |
| **DNA-cutting enzyme** (Cas9 is the most widely used) | Cuts both DNA strands at the site the guide RNA selects |
| **The cell's own repair systems** | Rejoin the cut ends |

What happens next depends on repair:
- **Error-prone rejoining** often adds or deletes a few nucleotides, which can cause a frameshift and **knock out** the gene.
- If scientists supply a **DNA template** with the desired sequence, the cell can copy it into the cut site, **correcting or changing** the gene.

Compared with restriction enzymes, which cut wherever their fixed recognition site occurs, CRISPR can be **reprogrammed** to cut almost any sequence by changing the guide RNA. Its specificity comes from **complementary base pairing**, and guides that partly match other sites can cause **off-target** cuts.

### Gene therapy
Gene therapy treats a genetic disorder by adding a working copy of a gene, or by editing the faulty one, in a patient's cells. Modified viruses that cannot replicate are often used as vectors to deliver the gene.

| Target cells | Heritable? | Main concern |
|---|---|---|
| **Somatic** cells (e.g., blood stem cells) | No; affects only the patient | Safety, cost, access |
| **Germline** cells or embryos | Yes; passes to descendants | Unknown long-term effects on future generations, consent |

### Ethical and ecological questions

| Issue | Example concern |
|---|---|
| Genetic privacy | Who may see or use a person's genome data? |
| GMO ecology | Transgenes may spread to wild relatives; pests may evolve resistance to engineered toxins |
| Equity | Expensive therapies may be available only to some |
| Germline editing | Changes are inherited by people who could not consent |

The resistance concern is natural selection at work: a crop that makes an insecticidal protein everywhere selects strongly for any insects that survive it.

## Misconceptions Across the Topic
- **"Restriction enzymes were invented in labs."** They are natural bacterial defenses.
- **"Larger fragments travel farther."** Smaller fragments travel farther.
- **"PCR copies the whole genome."** It copies only the region between the primers.
- **"Transformation makes all the cells take up the plasmid."** Usually only a tiny fraction do; selection finds them.
- **"Having a gene means expressing it."** Inserted genes need a promoter the host can use, and some are switched on only by an inducer.
- **"A matching DNA profile proves identity."** A match fails to exclude; its strength depends on how many loci match.`
    },
    {
      id: 'bio-biotechnology-p5-s6-mcq-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A researcher wants to disrupt one specific gene in a mouse cell line. What makes CRISPR suited to this when a restriction enzyme is not?',
            options: [
              'The guide RNA can be designed to pair with that one gene',
              'The DNA-cutting enzyme recognizes only damaged DNA',
              'CRISPR cuts only one strand, so the cell is not harmed',
              'CRISPR adds new nucleotides without any template needed'
            ],
            correctAnswer: 0,
            explanation: 'Targeting comes from complementary base pairing between the guide RNA and the chosen DNA sequence, so changing the guide retargets the cut. A restriction enzyme cuts wherever its fixed site occurs, which may be thousands of places in a genome.'
          },
          {
            question: 'A crime-scene sample and Suspect 1 share the same alleles at 3 STR loci, but differ at 2 others. What is the best conclusion?',
            options: [
              'Suspect 1 is the source, since most loci match',
              'Suspect 1 is excluded as the source of this DNA',
              'More loci must be tested before any conclusion',
              'The 3 matching loci prove Suspect 1 was present'
            ],
            correctAnswer: 1,
            explanation: 'A single true mismatch excludes a person as the source, and two loci differ here. Matches at some loci are common among unrelated people, so they cannot outweigh a mismatch.'
          },
          {
            question: 'Why is editing a human embryo more ethically contested than editing a patient\'s blood stem cells?',
            options: [
              'Precision is lower when editing an embryo than an adult',
              'Embryo edits can be inherited by future generations',
              'Stem cells lack the gene that the edit is meant to change',
              'Repair enzymes undo edits made in blood stem cells'
            ],
            correctAnswer: 1,
            explanation: 'Edits in an embryo reach the germline, so they can be inherited by future generations who cannot consent. Somatic edits in blood stem cells affect only the patient.'
          }
        ]
      }
    }
  ]
};
