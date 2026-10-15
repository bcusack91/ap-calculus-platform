export const bioBiotechPart1Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p1-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 1 of 7 — Restriction Enzymes and DNA Ligase**

---

### Topics in This Part

| Section |
|---------|
| What Biotechnology Does |
| Restriction Enzymes: Cutting at Specific Sequences |
| Counting the Fragments |
| DNA Ligase and Recombinant DNA |

> 🔑 **Key Concept:** Genetic engineering is built on two enzymes that bacteria already make. **Restriction enzymes** cut DNA at specific short sequences, and **DNA ligase** seals cut backbones back together. Cut-and-paste with these two tools is how scientists build recombinant DNA.

## What Biotechnology Does

The AP Biology framework asks you to **explain the use of genetic engineering techniques in analyzing or manipulating DNA** (learning objective IST-1.P). Four techniques are named in the essential knowledge, and each gets its own part of this lesson:

| Technique | What it does | Where it is taught |
|---|---|---|
| Gel electrophoresis | Separates molecules by size and charge | Part 2 |
| Polymerase chain reaction (PCR) | Amplifies a chosen DNA fragment | Part 3 |
| Bacterial transformation | Introduces DNA into bacterial cells | Part 4 |
| DNA sequencing | Determines the order of nucleotides | Part 5 |

Before any of these can be used to build or analyze a specific gene, scientists need a way to cut DNA in predictable places and join pieces from different sources. That is the job of this part's two enzymes.`
    },
    {
      id: 'bio-biotechnology-p1-s2-restriction',
      type: 'text' as const,
      content: `## Restriction Enzymes: Cutting at Specific Sequences

### Where they come from
Restriction enzymes (restriction endonucleases) evolved in bacteria as a **defense against bacteriophages**. When a phage injects its DNA, the bacterium's restriction enzymes cut the foreign DNA into pieces, "restricting" the infection.

A bacterium protects its own chromosome by **methylating** (adding methyl groups to) bases inside its own recognition sites. The enzyme does not cut methylated sites, so only unmarked foreign DNA is destroyed.

### Recognition sites
Each restriction enzyme cuts only at one specific **recognition sequence**, usually **4–8 base pairs** long. Most sites are **palindromic**: read 5′→3′, the top strand and the bottom strand have the same sequence.

| Top strand (5′→3′) | Bottom strand (3′→5′) | Read bottom strand 5′→3′ |
|---|---|---|
| G A A T T C | C T T A A G | G A A T T C |

Because both strands read the same, one enzyme binds the site symmetrically and cuts **both strands**.

### Sticky ends and blunt ends

| Cut type | What the enzyme does | Result | Why it matters |
|---|---|---|---|
| **Staggered cut** | Cuts the two strands at offset positions | **Sticky ends**: short single-stranded overhangs | Overhangs can base-pair with any end made by the same enzyme |
| **Straight cut** | Cuts both strands at the same position | **Blunt ends**: no overhang | Any two blunt ends can be joined, but joining is less efficient |

For the site above, the enzyme cuts between G and A on each strand, leaving each fragment with a 4-nucleotide overhang, **5′-AATT-3′**. Any two fragments cut by this enzyme have complementary overhangs, whatever organism the DNA came from.

### How often does a site appear?
In DNA with a random sequence, each position has 4 possible bases, so a specific sequence of length $n$ appears on average once every $4^n$ base pairs.

| Site length | Expected spacing | Consequence |
|---|---|---|
| 4 bp | $4^4 = 256$ bp | Many small fragments ("frequent cutter") |
| 6 bp | $4^6 = 4{,}096$ bp | Fragments of a few thousand bp |
| 8 bp | $4^8 = 65{,}536$ bp | Few, large fragments ("rare cutter") |

Real genomes are not random, so actual spacing varies, but the trend holds: **longer recognition sites cut less often.**`
    },
    {
      id: 'bio-biotechnology-p1-s3-mcq-enzymes',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Restriction Enzymes** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A bacterium makes a restriction enzyme whose recognition site appears many times in its own chromosome. Why is its chromosome not destroyed?',
            options: [
              'Its own DNA carries methyl groups at those same sequences',
              'Its chromosome is circular, so the enzyme finds no free ends',
              'The enzyme is made only after a phage has injected its DNA',
              'Its chromosome is wrapped in histones that block the enzyme'
            ],
            correctAnswer: 0,
            explanation: 'Bacteria methylate bases within their own recognition sites, and the enzyme does not cut methylated sites. Bacteria do not package DNA with histones, restriction enzymes cut within a molecule so circularity gives no protection, and the enzymes are present before infection.'
          },
          {
            question: 'Why are sticky ends more useful than blunt ends when inserting a gene into a plasmid?',
            options: [
              'Overhangs seal themselves, so no ligase is needed',
              'Matching overhangs base-pair and hold the pieces together',
              'Overhangs let any two DNA ends join regardless of sequence',
              'Overhangs supply the promoter that will express the gene'
            ],
            correctAnswer: 1,
            explanation: 'Complementary single-stranded overhangs hydrogen-bond to each other, holding the insert and vector in place so ligase can join them. The pairing is temporary, so ligase is still required, and joining "regardless of sequence" describes blunt ends.'
          },
          {
            question: 'Enzyme X recognizes a 4-bp site and enzyme Y recognizes an 8-bp site. Each digests the same 100,000-bp DNA molecule. Which prediction is best supported?',
            options: [
              'Enzyme Y will produce many more fragments than X',
              'Both enzymes will produce about the same number of fragments',
              'Enzyme X will produce many more, smaller fragments than Y',
              'Enzyme X will cut only where Y also cuts the molecule'
            ],
            correctAnswer: 2,
            explanation: 'A 4-bp site is expected about once every 256 bp, while an 8-bp site is expected about once every 65,536 bp, so the shorter site gives far more, smaller fragments. The two sites are different sequences, so their positions are unrelated.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p1-s4-counting',
      type: 'text' as const,
      content: `## Counting the Fragments

The number of fragments depends on how many sites are cut and on whether the DNA is **linear** or **circular**.

| DNA shape | Cuts at $n$ sites | Fragments produced |
|---|---|---|
| Linear (a chromosome piece, a PCR product) | Each cut adds one piece | $n + 1$ |
| Circular (a plasmid) | The first cut only opens the circle | $n$ |

### Worked Example 1: linear DNA
A 10,000-bp linear molecule has sites for one enzyme at positions 2,000 and 7,500.

- Fragment 1: from the start to 2,000 → **2,000 bp**
- Fragment 2: from 2,000 to 7,500 → **5,500 bp**
- Fragment 3: from 7,500 to the end → **2,500 bp**

Two sites, three fragments. Check: $2{,}000 + 5{,}500 + 2{,}500 = 10{,}000$ bp. ✓

### Worked Example 2: a circular plasmid
A 5,000-bp plasmid has sites at positions 1,000 and 3,500.

- From 1,000 to 3,500 → **2,500 bp**
- From 3,500 around the circle back to 1,000 → $(5{,}000 - 3{,}500) + 1{,}000 =$ **2,500 bp**

Two sites, two fragments. Because both fragments are the same size, they will appear as **one band** on a gel (Part 2). A single band does not always mean a single cut.

### Worked Example 3: a double digest
The same 5,000-bp plasmid is cut with two enzymes at once. Enzyme A cuts at 1,000 and enzyme B cuts at 4,000.

- From 1,000 to 4,000 → **3,000 bp**
- From 4,000 around to 1,000 → $1{,}000 + 1{,}000 =$ **2,000 bp**

Comparing single digests with a double digest is how scientists build a **restriction map**, a diagram of where the sites lie.

> 🔑 **AP Connection:** Fragment-counting questions are really sum-and-difference problems. Always check that your fragment sizes add up to the total length.`
    },
    {
      id: 'bio-biotechnology-p1-s5-input',
      type: 'input-boxes' as const,
      content: `**Count the Fragments** 🧮

Enter a number for each.`,
      exercise: {
        questions: [
          {
            question: 'A linear DNA molecule has 4 recognition sites for an enzyme. How many fragments does a complete digest produce?',
            answer: '5',
            explanation: 'Linear DNA: n + 1 = 4 + 1 = 5 fragments.'
          },
          {
            question: 'A circular plasmid has 3 recognition sites for an enzyme. How many fragments does a complete digest produce?',
            answer: '3',
            explanation: 'Circular DNA: the first cut only opens the circle, so n sites give n = 3 fragments.'
          },
          {
            question: 'In random DNA sequence, about how many base pairs apart (on average) is a specific 4-bp recognition site?',
            answer: '256',
            explanation: '4 possible bases at each of 4 positions: 4^4 = 256 bp.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p1-s6-ligase',
      type: 'text' as const,
      content: `## DNA Ligase and Recombinant DNA

### What ligase does
When two sticky ends pair, only **hydrogen bonds** between bases hold them together, and these break easily. **DNA ligase** forms a **phosphodiester bond** between the 3′ end of one nucleotide and the 5′ phosphate of the next, sealing the **sugar-phosphate backbone** on each strand.

You have met ligase before: during DNA replication it joins **Okazaki fragments** on the lagging strand. Biotechnology borrows the same activity.

### Building recombinant DNA
**Recombinant DNA** is DNA that combines sequences from different sources, for example a human gene inside a bacterial plasmid.

| Step | What happens | Why |
|---|---|---|
| 1 | Cut the plasmid and the gene with the **same** restriction enzyme | Both now carry complementary sticky ends |
| 2 | Mix the pieces | Overhangs base-pair; the gene can slip into the opened plasmid |
| 3 | Add DNA ligase | Backbones are sealed into one continuous molecule |
| 4 | Introduce the plasmid into bacteria (Part 4) | Bacteria copy the recombinant plasmid as they divide |

### Two practical problems
- **Orientation:** with a single enzyme, both ends of the insert are identical, so the gene can enter the plasmid in either direction, and only one direction places it correctly after the promoter. Cutting with **two different enzymes** gives the insert two different ends, so it can enter only one way.
- **Self-closing:** a plasmid cut with one enzyme can simply re-ligate its own ends without an insert. Screening steps (Part 4) separate plasmids with an insert from empty ones.

### Why this works across species
DNA from every organism has the same chemical structure: the same four bases, the same sugar-phosphate backbone and the same base-pairing rules. A sticky end from a human gene pairs with a sticky end from a bacterial plasmid as easily as with one from another human gene. This shared chemistry is itself evidence of the common ancestry of life.

> 🔑 **AP Connection:** If an FRQ asks why a gene from one species can be expressed in another, cite the shared structure of DNA and the nearly universal genetic code.`
    },
    {
      id: 'bio-biotechnology-p1-s7-mcq-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student cuts a plasmid and a human gene with the same restriction enzyme and mixes them, but forgets to add DNA ligase. Which outcome is most likely?',
            options: [
              'Overhangs pair briefly, but the strands separate again',
              'The gene is inserted and copied normally by the bacteria',
              'The gene joins the plasmid by blunt ends instead',
              'The restriction enzyme reseals the backbone on its own'
            ],
            correctAnswer: 0,
            explanation: 'Without ligase, only weak hydrogen bonds between overhangs hold the pieces together, and no phosphodiester bonds form in the backbone. Restriction enzymes cut backbones; they do not seal them.'
          },
          {
            question: 'A 12,000-bp linear DNA molecule is digested with one enzyme and yields fragments of 3,000, 4,000 and 5,000 bp. How many recognition sites did the enzyme cut?',
            options: [
              'One site',
              'Two sites',
              'Three sites',
              'Four sites'
            ],
            correctAnswer: 1,
            explanation: 'Linear DNA gives n + 1 fragments, so three fragments mean two cut sites. The sizes add to 12,000 bp, confirming a complete digest.'
          },
          {
            question: 'A gene from a jellyfish is ligated into a bacterial plasmid and produces a functional jellyfish protein in the bacteria. Which feature of life best explains this result?',
            options: [
              'Bacteria and jellyfish share the same set of plasmids',
              'Jellyfish proteins fold correctly in any environment',
              'The genetic code is shared by nearly all organisms',
              'Restriction enzymes add the bacterial promoter for the gene'
            ],
            correctAnswer: 2,
            explanation: 'Because nearly all organisms read codons the same way, a bacterial ribosome builds the same amino-acid sequence that a jellyfish cell would. The promoter comes from the plasmid design, not from the restriction enzyme.'
          }
        ]
      }
    }
  ]
};
