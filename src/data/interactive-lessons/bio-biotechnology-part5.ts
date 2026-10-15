export const bioBiotechPart5Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p5-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 5 of 7 — Sequencing, DNA Fingerprinting and Using Sequence Data**

---

### Topics in This Part

| Section |
|---------|
| DNA Sequencing |
| DNA Fingerprinting with Short Tandem Repeats |
| Using Sequence Data: Identifying Organisms and Building Trees |
| Misconceptions Across the Topic |

> 🔑 **Key Concept:** **DNA sequencing technology determines the order of nucleotides in a DNA molecule** (EK 6.8.A.1). Sequencing, together with PCR and electrophoresis, lets scientists identify individuals and organisms, diagnose mutations and compare species.

## DNA Sequencing

### What sequencing tells you
Gel electrophoresis reports fragment **sizes**. Sequencing goes further: it reports the **exact order of bases**, so it can detect a difference of a single nucleotide anywhere in a gene, even one that changes no fragment size.

Most sequencing methods work by having DNA polymerase copy a template, using the same base-pairing rules as replication, and detecting which base is added at each position. The output is the sequence of the **new strand**, written 5′ → 3′. (The chemistry of particular sequencing methods is beyond the scope of the AP exam.)

### Worked Example: from a read to the template
A sequencer reports a new strand as **5′-ACCGTA-3′**. What is the template strand?

**Step 1 — Complement each base.** A→T, C→G, C→G, G→C, T→A, A→T, giving T G G C A T.

**Step 2 — Apply antiparallel orientation.** The template runs opposite to the new strand: **3′-TGGCAT-5′**.

**Step 3 — Rewrite 5′ → 3′** (the usual convention): read it backward, **5′-TACGGT-3′**.

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
            question: 'Which question can DNA sequencing answer that gel electrophoresis of the same DNA cannot?',
            options: [
              'Whether a DNA sample contains any fragments at all',
              'Whether two samples differ by one base at one position',
              'Whether a fragment is larger or smaller than 1,000 bp',
              'Whether DNA carries a negative charge in solution'
            ],
            correctAnswer: 1,
            explanation: 'Sequencing reads every nucleotide, so it detects a single-base difference even when fragment sizes are identical. A gel can already show whether fragments are present and how large they are, and DNA\'s negative charge is what makes electrophoresis work in the first place.'
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
      content: `## Using Sequence Data: Identifying Organisms and Building Trees

The CED's illustrative examples include using **amplified DNA fragments to identify organisms and perform phylogenetic analysis**. Both rely on the same workflow: amplify a chosen gene by PCR, sequence it, and compare the sequence with others.

### Identifying an organism
Scientists amplify and sequence a short, standard stretch of a gene that every species in a group has but that differs slightly between species. Matching the sequence against a database of known species identifies the source:
- **Food testing:** checking whether fish sold under one name is really that species
- **Medicine:** identifying the bacterium or virus causing an infection
- **Ecology:** detecting which species live in a pond from DNA left in the water

### Building a phylogenetic tree
Mutations accumulate in a gene over time, so species that share a more recent common ancestor have had less time to diverge and usually differ at **fewer** positions.

**Worked Example.** A 40-base stretch of the same gene is compared among four species. The table gives the number of positions that differ.

| | Species A | Species B | Species C | Species D |
|---|---|---|---|---|
| **A** | — | 3 | 12 | 13 |
| **B** | 3 | — | 11 | 12 |
| **C** | 12 | 11 | — | 4 |
| **D** | 13 | 12 | 4 | — |

**Step 1.** Find the smallest numbers: A–B differ at 3 positions and C–D at 4.

**Step 2.** Group the closest pairs: A with B, and C with D.

**Step 3.** All comparisons between the two groups are much larger (11–13), so the two pairs share a more distant common ancestor.

**Conclusion:** the tree joins A and B, joins C and D, and then joins those two pairs at a deeper branch point (Topic 7.9).

### Genetically modified organisms
An organism whose DNA has been changed by genetic engineering is a **genetically modified organism (GMO)**; one carrying a gene from another species is **transgenic**. Planting a crop that makes an insecticidal protein everywhere selects strongly for insects that survive it, so resistance can spread by **natural selection**.

(Gene-editing tools such as CRISPR are often in the news, but how they work is beyond the scope of the AP exam.)

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
            question: 'A 30-base stretch of a shared gene differs at 2 positions between species P and Q, at 9 positions between P and R, and at 9 positions between Q and R. Which conclusion is best supported?',
            options: [
              'R is the common ancestor from which both P and Q evolved',
              'P and Q share a more recent common ancestor with each other',
              'P and R are the most closely related of the three species',
              'The three species are equally related, as all share the gene'
            ],
            correctAnswer: 1,
            explanation: 'Fewer sequence differences mean less time since two lineages split, so P and Q, with only 2 differences, share a more recent common ancestor with each other than either does with R. Living species are not ancestors of one another, P and R differ at 9 positions, and sharing a gene does not make the species equally related.'
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
            question: 'Fish sold as "red snapper" is tested by amplifying and sequencing a standard gene. The sequence matches a database entry for tilapia, not red snapper. What does this result show?',
            options: [
              'The fish is red snapper with a rare mutation in that gene',
              'The fish is mislabeled and actually came from a different species',
              'Sequencing cannot identify species, only individual people',
              'The fish became tilapia after it was caught and stored'
            ],
            correctAnswer: 1,
            explanation: 'The sequence of a standard gene identifies the species it came from, and this one matches tilapia, so the product is mislabeled. A single rare mutation would not turn a red snapper sequence into a tilapia sequence, sequencing identifies species as well as individuals, and an organism\'s DNA does not change after death.'
          }
        ]
      }
    }
  ]
};
