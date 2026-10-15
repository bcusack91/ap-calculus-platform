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

The AP Biology framework asks you to **explain the use of genetic engineering techniques in analyzing or manipulating DNA** (learning objective 6.8.A). Four techniques are named in the essential knowledge, and each gets its own part of this lesson:

| Technique | What it does | Where it is taught |
|---|---|---|
| Gel electrophoresis | Separates molecules by size and charge | Part 2 |
| Polymerase chain reaction (PCR) | Amplifies a chosen DNA fragment | Part 3 |
| Bacterial transformation | Introduces DNA into bacterial cells | Part 4 |
| DNA sequencing | Determines the order of nucleotides | Part 5 |

Before any of these can be used to build or analyze a specific gene, scientists need a way to cut DNA in predictable places and join pieces from different sources. That is the job of this part's two enzymes. As with every technique in this topic, the AP exam tests what the technique does and how to interpret its results, not the step-by-step laboratory details.`
    },
    {
      id: 'bio-biotechnology-p1-s2-restriction',
      type: 'text' as const,
      content: `## Restriction Enzymes: Cutting at Specific Sequences

### Where they come from
Restriction enzymes evolved in bacteria as a **defense against bacteriophages**. When a phage injects its DNA, the bacterium's restriction enzymes cut the foreign DNA into pieces, "restricting" the infection. The bacterium marks its own DNA chemically so that its own chromosome is not cut.

### Recognition sites
Each restriction enzyme cuts only at one specific short **recognition sequence**. Because the enzyme recognizes a base sequence, not a source, it cuts DNA from **any** organism wherever that sequence appears. Two DNA samples that differ in sequence can therefore be cut into different numbers or sizes of fragments, which is the basis of comparing DNA samples on a gel (Part 2).

### Sticky ends
Many restriction enzymes cut the two strands at slightly offset positions. This leaves each fragment with a short **single-stranded overhang**, called a **sticky end**.

| Feature of a sticky end | Why it matters |
|---|---|
| Its bases are unpaired | They can base-pair with a complementary overhang |
| Every end made by the same enzyme has a complementary overhang | Any two fragments cut by that enzyme can pair, whatever organism they came from |
| Pairing is held only by hydrogen bonds | The pieces separate easily until **ligase** seals the backbone |

Some enzymes instead cut both strands at the same point, leaving **blunt ends** with no overhang; these can still be joined, but less efficiently.

(The names of particular restriction enzymes and the details of their recognition sites are beyond the scope of the AP exam.)`
    },
    {
      id: 'bio-biotechnology-p1-s3-mcq-enzymes',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Restriction Enzymes** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why does a given restriction enzyme cut DNA from a human, a plant and a bacterium at the same sequence?',
            options: [
              'It cuts only at genes that code for proteins in every organism',
              'It recognizes one specific order of bases, wherever that order appears',
              'It cuts every DNA molecule at the same distance from its end',
              'It recognizes the methyl groups that all organisms add to DNA'
            ],
            correctAnswer: 1,
            explanation: 'A restriction enzyme binds and cuts one particular short base sequence, and DNA from every organism is built from the same four bases, so the site is cut wherever it occurs. The enzyme does not look for protein-coding genes or measure from the ends, and chemical marking actually protects a bacterium\'s own sites from being cut.'
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
            question: 'DNA samples from two people are cut with the same restriction enzyme. The sample from person 2 gives one fewer fragment than the sample from person 1. What best explains this?',
            options: [
              'Person 2\'s DNA was cut by a different restriction enzyme',
              'A sequence difference removed one cut site in person 2',
              'Person 2 has fewer chromosomes than person 1 does',
              'The enzyme cut person 2\'s DNA at random positions'
            ],
            correctAnswer: 1,
            explanation: 'The enzyme cuts only where its recognition sequence occurs, so a difference in DNA sequence that destroys one site leaves one fewer cut and one fewer fragment. The same enzyme was used on both samples, both people have the same chromosome number, and restriction enzymes do not cut at random.'
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
            question: 'A 6,000-bp linear DNA molecule is cut at positions 1,500 and 4,000. What is the size, in bp, of the largest fragment?',
            answer: '2500',
            acceptableAnswers: ['2,500'],
            explanation: 'The fragments are 1,500 bp (0 to 1,500), 2,500 bp (1,500 to 4,000) and 2,000 bp (4,000 to 6,000), which add to 6,000. The largest is 2,500 bp.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p1-s6-ligase',
      type: 'text' as const,
      content: `## DNA Ligase and Recombinant DNA

### What ligase does
When two sticky ends pair, only **hydrogen bonds** between bases hold them together, and these break easily. **DNA ligase** forms a covalent bond between neighboring nucleotides, sealing the **sugar-phosphate backbone** on each strand.

You have met ligase before: during DNA replication it joins **Okazaki fragments** on the lagging strand. Biotechnology borrows the same activity.

### Building recombinant DNA
**Recombinant DNA** is DNA that combines sequences from different sources, for example a human gene inside a bacterial plasmid. Copying a gene this way so that it can be propagated in cells is called **gene cloning**.

| Step | What happens | Why |
|---|---|---|
| 1 | Cut the plasmid and the gene with the **same** restriction enzyme | Both now carry complementary sticky ends |
| 2 | Mix the pieces | Overhangs base-pair; the gene can slip into the opened plasmid |
| 3 | Add DNA ligase | Backbones are sealed into one continuous molecule |
| 4 | Introduce the plasmid into bacteria (Part 4) | Bacteria copy the recombinant plasmid as they divide |

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
