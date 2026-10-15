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
              '1 AaBb : 1 aabb',
              '1 AaBb : 1 Aabb : 1 aaBb : 1 aabb',
              '1 Aabb : 1 aaBb',
              '3 AaBb : 1 aabb'
            ],
            correctAnswer: 0,
            explanation: 'With complete linkage and no crossing over, the heterozygous parent produces only parental gametes (AB and ab). Crossed with ab, this gives AaBb and aabb in a 1:1 ratio — only parental phenotype classes. Aabb and aaBb are recombinant classes, which require crossing over, and the 1:1:1:1 ratio is what unlinked genes give.'
          },
          {
            question: 'How can you distinguish linked genes from unlinked genes in a test cross?',
            options: [
              'Linked genes produce an unequal ratio with more parental types than recombinant types',
              'Linked genes give a 1:1:1:1 ratio, the same as genes on different chromosomes',
              'Unlinked genes give an unequal ratio with more parental types than recombinants',
              'Linked genes give only recombinant types, since crossing over always separates them'
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
- The more often two genes recombine, the farther apart they are on the chromosome
- Calculating map distance from recombination data is called **gene (genetic) mapping**

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
            label: 'In a test cross of two linked genes, the two most frequent offspring classes are the ___ types',
            options: ['parental', 'recombinant', 'double-mutant', 'wild']
          }
        ],
        correctAnswers: ['centimorgan', '50%', '4', 'parental'],
        hint1: 'The unit of genetic map distance is the map unit, also called a centimorgan.',
        hint2: 'Only 2 of 4 chromatids recombine in a single crossover event.',
        hint3: 'RF = recombinants / total × 100% → 40/1000 × 100% = ?',
        explanation: '1% RF = 1 centimorgan (cM), or 1 map unit. Maximum RF is 50% because only 2 of 4 chromatids cross over. RF = 40/1000 = 4%. Crossing over separates linked alleles only some of the time, so the parental combinations stay the most common classes.'
      }
    },
    {
      id: 'chr3-threept',
      type: 'text' as const,
      content: `## Building a Map from Two-Point Distances

Each two-point test cross gives one distance. Because map distances between nearby genes are roughly **additive**, distances measured in pairs can place three genes in order on a chromosome.

### Worked Example: Ordering Three Genes

Three separate two-point test crosses give these recombination frequencies:

| Gene pair | Recombination frequency | Map distance |
|-----------|------------------------|--------------|
| A and B | 12% | 12 cM |
| B and C | 7% | 7 cM |
| A and C | 19% | 19 cM |

**Step 1 — Find the outer genes.** The largest distance (A–C, 19 cM) must span the two genes at the ends.

**Step 2 — Place the middle gene.** That leaves B in the middle.

**Step 3 — Check additivity.** A–B + B–C = 12 + 7 = 19 cM = A–C. ✓

**Map:** A ——12—— B ——7—— C

> 💡 Genes very far apart recombine about 50% of the time, just like genes on different chromosomes, so a long distance is measured most accurately by adding up shorter intervals between genes in the middle.

### Testing for Linkage with Chi-Square

Linkage is identified by **quantitative analysis**: if two genes assort independently, a dihybrid test cross predicts four classes in a **1:1:1:1** ratio. Using the counts from the Recombination Frequency example (412, 388, 97, 103; total 1,000), the expected count is 250 per class:

$$\\chi^2 = \\frac{162^2}{250} + \\frac{138^2}{250} + \\frac{153^2}{250} + \\frac{147^2}{250} \\approx 361$$

With 4 classes, df = 4 − 1 = 3, and the critical value at p = 0.05 is 7.81. Because 361 is far above 7.81, we **reject** the hypothesis of independent assortment: the excess of parental types means the genes are linked.

(Three-point crosses and interference calculations are beyond the scope of the AP exam.)`
    },
    {
      id: 'chr3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two-point test crosses give these map distances: M–N = 4 cM, N–P = 10 cM, and M–P = 14 cM. What is the order of the three genes on the chromosome?',
            options: [
              'N — M — P',
              'M — N — P',
              'M — P — N',
              'N — P — M'
            ],
            correctAnswer: 1,
            explanation: 'The largest distance, M–P (14 cM), must span the two outer genes, so N lies between them. The check works: M–N + N–P = 4 + 10 = 14 cM. Any order that puts M or P in the middle would require a distance larger than 14 cM between the ends.'
          },
          {
            question: 'A dihybrid fly is test crossed, and the four offspring classes are compared with a 1:1:1:1 ratio. The chi-square value is 52.0 (df = 3; critical value 7.81). What do the results suggest about the two genes?',
            options: [
              'They are likely linked, as the counts depart from 1:1:1:1 by more than chance',
              'They assort independently, as a large χ² means a close fit to 1:1:1:1',
              'They lie on different chromosomes, as some recombinant offspring appeared',
              'They cannot be tested, as chi-square applies only to monohybrid crosses'
            ],
            correctAnswer: 0,
            explanation: 'A χ² of 52.0 is far above 7.81, so the deviation from the 1:1:1:1 ratio expected for independent assortment is too large to be chance, which suggests the genes are linked. A large χ² signals a poor fit, not a close one. Recombinant offspring appear for linked genes too, whenever a crossover falls between them, and chi-square works for any number of classes.'
          }
        ]
      }
    }
  ]
};
