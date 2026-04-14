export const bioChromosomalInheritancePatternsPart3Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr3-intro',
      type: 'text' as const,
      content: `# Linked Genes & Recombination

When genes are on the **same chromosome**, they tend to be inherited together — this is **genetic linkage**. However, crossing over during meiosis can shuffle linked alleles, producing **recombinant offspring**.

## Parental vs. Recombinant Types

Consider two linked genes (A and B) on the same chromosome:

| Type | Description | Frequency |
|------|-------------|-----------|
| **Parental (non-recombinant)** | Allele combinations match the parent chromosomes | Higher (majority) |
| **Recombinant** | New allele combinations from crossing over | Lower (minority) |

### Example
If a parent has alleles **AB** on one chromosome and **ab** on the homolog:
- **Parental gametes**: AB, ab
- **Recombinant gametes**: Ab, aB (from crossing over)

> 💡 **Key rule**: If two genes are linked, the recombinant classes will always be **less frequent** than the parental classes. If they're unlinked, all four classes appear in roughly equal proportions (~25% each).`
    },
    {
      id: 'chr3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a test cross, a fly heterozygous for two linked genes (AaBb, with A and B on the same chromosome) is crossed with aabb. If the genes are completely linked (no crossing over), the offspring ratio will be:',
            options: [
              '1 AaBb : 1 aabb (parental types only)',
              '1 AaBb : 1 Aabb : 1 aaBb : 1 aabb',
              'All AaBb',
              '3 dominant : 1 recessive'
            ],
            correctAnswer: 0,
            explanation: 'With complete linkage and no crossing over, the heterozygous parent produces only parental gametes (AB and ab). Crossed with ab, this gives AaBb and aabb in a 1:1 ratio — only parental phenotype classes.'
          },
          {
            question: 'How can you distinguish linked genes from unlinked genes in a test cross?',
            options: [
              'Linked genes produce an unequal ratio with more parental types than recombinant types',
              'Linked genes always produce a 9:3:3:1 ratio',
              'Unlinked genes produce more parental types',
              'There is no way to distinguish them experimentally'
            ],
            correctAnswer: 0,
            explanation: 'Unlinked genes produce a 1:1:1:1 test cross ratio. Linked genes produce an excess of parental types and a deficit of recombinant types. The further apart linked genes are, the closer the ratio approaches 1:1:1:1.'
          }
        ]
      }
    },
    {
      id: 'chr3-recfreq',
      type: 'text' as const,
      content: `## Recombination Frequency & Map Distance

**Recombination frequency (RF)** measures how often crossing over separates two linked genes.

### Calculating RF

$$RF = \\frac{\\text{Number of recombinant offspring}}{\\text{Total offspring}} \\times 100\\%$$

### Map Distance

- **1% recombination frequency = 1 centimorgan (cM) = 1 map unit (m.u.)**
- Named after Thomas Hunt Morgan
- **Alfred Sturtevant** (Morgan's student) created the first genetic map in 1913 using *Drosophila*

### Important Limits

| RF Value | Interpretation |
|----------|---------------|
| **0%** | Genes are completely linked (very close together or no crossing over) |
| **< 50%** | Genes are linked on the same chromosome |
| **50%** | Genes are on different chromosomes OR very far apart on the same chromosome |
| **> 50%** | Not possible — maximum RF is 50% |

> ⚠️ RF **never exceeds 50%** because at most 50% of the meiotic products from a single crossover are recombinant (only 2 of 4 chromatids participate in any single crossover event).

### Example Calculation

A test cross produces:
- 412 parental type 1
- 388 parental type 2
- 97 recombinant type 1
- 103 recombinant type 2

$$RF = \\frac{97 + 103}{412 + 388 + 97 + 103} \\times 100\\% = \\frac{200}{1000} \\times 100\\% = 20\\%$$

**Map distance = 20 cM** (the genes are 20 map units apart)`
    },
    {
      id: 'chr3-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: '1% recombination frequency equals 1 ___',
            options: ['centimorgan', 'kilobase', 'chromosome', 'allele']
          },
          {
            label: 'The maximum recombination frequency between two genes is ___',
            options: ['50%', '100%', '25%', '75%']
          },
          {
            label: 'If 40 out of 1000 test cross offspring are recombinant, the map distance is ___ cM',
            options: ['4', '40', '0.4', '400']
          },
          {
            label: 'The first genetic map was constructed by ___',
            options: ['Alfred Sturtevant', 'Gregor Mendel', 'Thomas Morgan', 'Walter Sutton']
          }
        ],
        correctAnswers: ['centimorgan', '50%', '4', 'Alfred Sturtevant'],
        hint1: 'The unit of genetic map distance is named after Morgan.',
        hint2: 'Only 2 of 4 chromatids recombine in a single crossover event.',
        hint3: 'RF = recombinants / total × 100% → 40/1000 × 100% = ?',
        explanation: '1% RF = 1 centimorgan (cM). Maximum RF is 50% because only 2 of 4 chromatids cross over. RF = 40/1000 = 4%. Sturtevant created the first genetic map in 1913 as Morgan\'s undergraduate student.'
      }
    },
    {
      id: 'chr3-threept',
      type: 'text' as const,
      content: `## Three-Point Test Cross & Gene Mapping

A **three-point test cross** allows you to determine the order of three linked genes and the distances between them simultaneously.

### Steps for a Three-Point Cross

1. **Identify the parental classes** — the two most frequent phenotype classes
2. **Identify the double crossover (DCO) classes** — the two least frequent classes
3. **Determine gene order** — compare DCO classes to parental classes; the allele that "switches" in the DCO reveals the **middle gene**
4. **Calculate map distances**:
   - Distance A–B = (single CO between A and B + DCO) / total × 100%
   - Distance B–C = (single CO between B and C + DCO) / total × 100%

### Interference & Coefficient of Coincidence

$$\\text{Coefficient of Coincidence (c.o.c.)} = \\frac{\\text{Observed DCO}}{\\text{Expected DCO}}$$

$$\\text{Expected DCO} = (\\text{distance 1}) \\times (\\text{distance 2}) \\times \\text{total offspring}$$

$$\\text{Interference (I)} = 1 - \\text{c.o.c.}$$

- **I = 0**: No interference (crossovers occur independently)
- **I > 0**: **Positive interference** (one crossover inhibits nearby crossovers) — most common
- **I < 0**: **Negative interference** (one crossover stimulates nearby crossovers) — rare`
    },
    {
      id: 'chr3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a three-point test cross, the double crossover classes are used to determine:',
            options: [
              'The gene in the middle position',
              'Which genes are on different chromosomes',
              'The total map length',
              'Whether the genes are autosomal or sex-linked'
            ],
            correctAnswer: 0,
            explanation: 'The double crossover (DCO) classes are the rarest. Comparing them to the parental classes reveals which allele has "switched" — that allele belongs to the middle gene in the linear order.'
          },
          {
            question: 'If the coefficient of coincidence is 0.6, the interference is:',
            options: [
              '0.4 (positive interference)',
              '0.6',
              '1.4',
              '0 (no interference)'
            ],
            correctAnswer: 0,
            explanation: 'Interference = 1 − c.o.c. = 1 − 0.6 = 0.4. Positive interference means that one crossover partially inhibits a second crossover nearby, so fewer DCOs are observed than expected.'
          }
        ]
      }
    }
  ]
};
