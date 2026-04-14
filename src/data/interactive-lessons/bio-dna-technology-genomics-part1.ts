export const bioDnaTechnologyGenomicsPart1Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna1-intro',
      type: 'text' as const,
      content: `
## Restriction Enzymes & Gel Electrophoresis

**Part 1 of 7 — DNA Technology & Genomics**

In this lesson, you will learn how molecular biologists cut DNA at specific sequences and separate the resulting fragments by size.

### Restriction Enzymes

**Restriction endonucleases** are bacterial enzymes that recognize and cut specific DNA sequences called **recognition sites** (typically 4–8 bp palindromic sequences).

| Enzyme | Recognition Site | Cut Pattern |
|--------|-----------------|-------------|
| EcoRI | 5′-GAATTC-3′ | Sticky ends (5′ overhang) |
| HindIII | 5′-AAGCTT-3′ | Sticky ends (5′ overhang) |
| SmaI | 5′-CCCGGG-3′ | Blunt ends |
| BamHI | 5′-GGATCC-3′ | Sticky ends (5′ overhang) |

#### Sticky Ends vs. Blunt Ends

- **Sticky ends**: Staggered cuts leave single-stranded overhangs that can base-pair with complementary overhangs → useful for ligation into vectors.
- **Blunt ends**: Straight cuts produce no overhangs → can be joined to any other blunt end, but ligation is less efficient.

### Key Concept: Palindromic Sequences

Recognition sites read the same on both strands in the 5′→3′ direction:

$$5'\\text{-G A A T T C-}3'$$
$$3'\\text{-C T T A A G-}5'$$

This symmetry ensures the enzyme binds and cuts both strands.
      `
    },
    {
      id: 'dna1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Restriction Enzymes** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What type of DNA sequence do restriction enzymes typically recognize?',
            options: [
              'Palindromic sequences that read the same on both strands in the 5′→3′ direction',
              'Random sequences throughout the genome',
              'Sequences found only at the telomeres of chromosomes',
              'Repetitive sequences in non-coding regions only'
            ],
            correctAnswer: 0,
            explanation: 'Restriction enzymes recognize palindromic sequences — sequences that read identically on both strands when read 5′→3′. This symmetry allows the enzyme to bind both strands and make its cuts.'
          },
          {
            question: 'An enzyme that produces "sticky ends" creates fragments with which feature?',
            options: [
              'Single-stranded overhangs that can base-pair with complementary overhangs',
              'Phosphorylated 3′ ends that resist degradation',
              'Methylated cytosines at every CpG site',
              'Blunt double-stranded termini with no overhangs'
            ],
            correctAnswer: 0,
            explanation: 'Sticky ends are single-stranded overhangs produced by staggered cuts. These overhangs can hydrogen-bond with complementary sequences, making ligation into vectors much more efficient than blunt-end ligation.'
          }
        ]
      }
    },
    {
      id: 'dna1-gel-text',
      type: 'text' as const,
      content: `
### Gel Electrophoresis

Gel electrophoresis separates DNA fragments by **size** using an electric field.

#### How It Works

1. **Load samples** into wells at the negative (cathode) end of an agarose gel.
2. **Apply electric current** — DNA is negatively charged (phosphate backbone), so fragments migrate toward the positive (anode) end.
3. **Smaller fragments travel farther** through the gel matrix; larger fragments are impeded.
4. **Stain** the gel (e.g., ethidium bromide or SYBR Safe) and visualize under UV light.

#### Reading a Gel

- **DNA ladder** (molecular weight marker) in one lane provides known fragment sizes.
- Bands closer to the wells = **larger** fragments.
- Bands farther from the wells = **smaller** fragments.
- Band **intensity** correlates with the amount of DNA present.

#### Restriction Fragment Length Polymorphism (RFLP)

Different individuals may have different numbers of restriction sites in homologous DNA regions, producing **different fragment patterns** on a gel. This is the basis of **RFLP analysis**, used in:

- Forensic DNA fingerprinting
- Paternity testing
- Diagnosing genetic diseases (e.g., sickle cell anemia)
      `
    },
    {
      id: 'dna1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Gel Electrophoresis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During gel electrophoresis, DNA fragments migrate toward the positive electrode because:',
            options: [
              'DNA carries a net negative charge due to its phosphate groups',
              'DNA carries a positive charge from its nitrogenous bases',
              'The gel matrix pushes fragments toward the anode',
              'Ethidium bromide creates a positive charge on DNA'
            ],
            correctAnswer: 0,
            explanation: 'The phosphate groups in the DNA backbone are negatively charged at physiological pH. In an electric field, these negatively charged molecules migrate toward the positive electrode (anode).'
          },
          {
            question: 'On a gel, a band that has migrated the farthest from the well represents:',
            options: [
              'The smallest DNA fragment',
              'The largest DNA fragment',
              'The fragment with the most GC content',
              'The fragment with the highest concentration'
            ],
            correctAnswer: 0,
            explanation: 'Smaller fragments navigate through the pores of the agarose matrix more easily and therefore travel farther from the well. Larger fragments are impeded by the matrix and remain closer to the well.'
          }
        ]
      }
    },
    {
      id: 'dna1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Restriction Enzymes & Gel Electrophoresis** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Restriction enzymes cut DNA at specific _____ sequences.',
            options: ['palindromic', 'repetitive', 'random', 'promoter']
          },
          {
            label: 'Staggered cuts produce _____ ends that facilitate ligation.',
            options: ['sticky', 'blunt', 'phosphorylated', 'methylated']
          },
          {
            label: 'In gel electrophoresis, _____ fragments migrate the farthest.',
            options: ['smaller', 'larger', 'circular', 'methylated']
          },
          {
            label: 'DNA migrates toward the _____ electrode because of its negative charge.',
            options: ['positive', 'negative', 'neutral', 'grounded']
          }
        ],
        correctAnswers: ['palindromic', 'sticky', 'smaller', 'positive'],
        hint1: 'Think about the symmetry of recognition sites and the charge on DNA.',
        hint2: 'Sticky ends have overhangs; smaller fragments move through the gel pores more easily.',
        hint3: 'DNA is negatively charged due to phosphate groups, so it moves toward the positive pole.',
        explanation: 'Restriction enzymes recognize palindromic sequences. Staggered cuts produce sticky ends with overhangs. In electrophoresis, smaller fragments travel farther, and DNA migrates toward the positive (anode) electrode.'
      }
    },
    {
      id: 'dna1-summary',
      type: 'text' as const,
      content: `
### Part 1 Summary

| Concept | Key Detail |
|---------|-----------|
| Restriction enzymes | Cut at palindromic recognition sites (4–8 bp) |
| Sticky ends | Staggered cuts → single-stranded overhangs |
| Blunt ends | Straight cuts → no overhangs |
| Gel electrophoresis | Separates DNA by size; smaller = farther |
| RFLP | Variation in restriction sites → different banding patterns |

**Up next → Part 2: PCR — Polymerase Chain Reaction**
      `
    }
  ]
};
