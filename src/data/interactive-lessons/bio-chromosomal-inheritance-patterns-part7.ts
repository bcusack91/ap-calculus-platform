export const bioChromosomalInheritancePatternsPart7Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr7-intro',
      type: 'text' as const,
      content: `# AP Exam Practice — Chromosomal Inheritance Problems

This section contains multi-step genetics problems similar to those on the AP Biology exam. Work through each problem carefully, applying concepts from the entire unit.

## Problem-Solving Strategy

1. **Identify the inheritance pattern** (autosomal vs. sex-linked, dominant vs. recessive, linked vs. unlinked)
2. **Assign genotypes** to all known individuals
3. **Set up appropriate crosses** (Punnett squares, branch diagrams)
4. **Calculate expected ratios** and compare to observed data
5. **Check your work** — do the ratios make biological sense?`
    },
    {
      id: 'chr7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice Problem Set 1: Sex-Linked Crosses** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Hemophilia is X-linked recessive. A carrier woman $(X^{H} X^{h})$ marries a hemophiliac man $(X^{h} Y)$. What fraction of ALL their children will have hemophilia?',
            options: [
              '1/4',
              '1/2',
              '3/4',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'Cross: $X^{H}$ $X^{h}$ × $X^{h}$ Y. The mother passes $X^{H}$ or $X^{h}$ with equal probability; the father passes $X^{h}$ to every daughter and Y to every son. The four equally likely children are $X^{H}$ $X^{h}$ (carrier daughter), $X^{h}$ $X^{h}$ (hemophiliac daughter), $X^{H}$ Y (unaffected son) and $X^{h}$ Y (hemophiliac son). Two of the four have hemophilia, so the fraction of ALL children affected is 1/2. The 1/4 trap is the answer for a carrier mother and a NORMAL father, where only $X^{h}$ Y sons are affected.'
          },
          {
            question: 'Color blindness is X-linked recessive. A color-blind woman $(X^{c} X^{c})$ marries a man with normal vision $(X^{C} Y)$. What is the expected phenotype of their sons?',
            options: [
              'Every son will be color-blind',
              'Half of sons will be color-blind',
              'No sons will be color-blind',
              'It depends on the father\'s genotype'
            ],
            correctAnswer: 0,
            explanation: 'The mother is $X^{c}$ $X^{c}$, so she can only pass $X^{c}$ to her children. Sons receive $X^{c}$ from mom and Y from dad → all sons are $X^{c}$ Y (color-blind). Daughters receive $X^{c}$ from mom and $X^{C}$ from dad → all daughters are $X^{C}$ $X^{c}$ (carriers with normal vision).'
          }
        ]
      }
    },
    {
      id: 'chr7-mapping',
      type: 'text' as const,
      content: `## Gene Mapping Practice

### Problem: Two-Point Test Cross

A test cross involving two linked genes produces the following offspring:

| Phenotype | Number |
|-----------|--------|
| A B | 354 |
| a b | 346 |
| A b | 52 |
| a B | 48 |

**Step 1**: Identify parental and recombinant classes
- **Parental**: AB (354) and ab (346) → total = 700
- **Recombinant**: Ab (52) and aB (48) → total = 100

**Step 2**: Calculate recombination frequency

$$RF = \\frac{100}{800} \\times 100\\% = 12.5\\%$$

**Step 3**: Map distance = **12.5 cM**

The genes are **12.5 centimorgans apart** on the same chromosome.`
    },
    {
      id: 'chr7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice Problem Set 2: Gene Mapping** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a test cross, 820 offspring are parental types and 180 are recombinant types out of 1000 total. The map distance between the two genes is:',
            options: [
              '18 cM',
              '82 cM',
              '1.8 cM',
              '8.2 cM'
            ],
            correctAnswer: 0,
            explanation: 'RF = recombinants / total = 180/1000 = 18%. Since 1% RF = 1 cM, the map distance is 18 cM. Remember: the maximum RF for linked genes is 50% (which would indicate genes are very far apart or on different chromosomes).'
          },
          {
            question: 'Three linked genes have the following map distances: A–B = 8 cM, B–C = 12 cM, A–C = 20 cM. What is the gene order?',
            options: [
              'A — B — C',
              'B — A — C',
              'A — C — B',
              'C — A — B'
            ],
            correctAnswer: 0,
            explanation: 'If A–B = 8, B–C = 12, and A–C = 20, then A–B + B–C = 8 + 12 = 20 = A–C. This confirms the order is A — B — C, with B between A and C. The distances are additive because B is in the middle.'
          }
        ]
      }
    },
    {
      id: 'chr7-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Practice Problem 3: Chromosome Number and Structure** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A human karyotype with 47 chromosomes, including three copies of one autosome, shows ___',
            options: ['a trisomy', 'a monosomy', 'triploidy', 'a translocation']
          },
          {
            label: 'A human karyotype with 45 chromosomes, including only one copy of one autosome, shows ___',
            options: ['a trisomy', 'a monosomy', 'tetraploidy', 'a duplication']
          },
          {
            label: 'A karyotype with 46 chromosomes in which part of one chromosome is attached to a non-homologous chromosome shows ___',
            options: ['a translocation', 'a trisomy', 'a deletion', 'polyploidy']
          },
          {
            label: 'The error in which homologs fail to separate during meiosis I is called ___',
            options: ['nondisjunction', 'crossing over', 'an inversion', 'independent assortment']
          }
        ],
        correctAnswers: ['a trisomy', 'a monosomy', 'a translocation', 'nondisjunction'],
        hint1: 'Count copies: three copies of one chromosome is 2n + 1; one copy is 2n − 1.',
        hint2: 'A normal chromosome number with a segment in the wrong place is a structural change.',
        hint3: 'Failure of chromosomes or chromatids to separate gives gametes with the wrong number.',
        explanation: 'Three copies of one chromosome (47) is a trisomy, and one copy (45) is a monosomy. A segment moved to a non-homologous chromosome is a translocation, which can leave the count at 46. Homologs failing to separate is nondisjunction, the usual cause of trisomy and monosomy.'
      }
    },
    {
      id: 'chr7-quiz3',
      type: 'multiple-choice' as const,
      content: `**Practice Problem Set 3: Multi-Step Problems** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Genes for wing shape (V = normal, v = vestigial) and body color (B = gray, b = black) are linked and 17 cM apart in Drosophila. A fly heterozygous for both traits (VvBb, with V and B on one chromosome) is test crossed. In 1000 offspring, approximately how many vestigial-winged, gray-bodied (vvBb) flies would you expect?',
            options: [
              '85',
              '415',
              '250',
              '170'
            ],
            correctAnswer: 0,
            explanation: 'Map distance = 17 cM = 17% recombination frequency. Recombinant classes (vB and Vb) each appear at 17/2 = 8.5% frequency. So vB (vestigial, gray = vvBb) ≈ 8.5% × 1000 = 85 offspring. Parental classes (VB and vb) each appear at (100-17)/2 = 41.5% frequency.'
          },
          {
            question: 'A woman who is heterozygous for both hemophilia (X-linked recessive) and color blindness (X-linked recessive) has these alleles in CIS configuration (both recessive alleles on the same X). She has 4 sons: one is hemophiliac only, one is color blind only, one has both conditions, and one is normal. Which sons are the recombinant types?',
            options: [
              'The color-blind-only and hemophiliac-only sons',
              'The hemophiliac, color-blind son and the normal son',
              'The normal son and the son who is color-blind only',
              'None of them, since all four are parental types'
            ],
            correctAnswer: 0,
            explanation: 'CIS configuration means both recessive alleles (h and c) are on the same X chromosome: $X^{hc}$. The other X has both dominant alleles: $X^{HC}$. Parental gametes: $X^{hc}$ (both affected) and $X^{HC}$ (normal). Recombinant gametes: $X^{Hc}$ (color-blind only) and $X^{hC}$ (hemophiliac only). So the hemophiliac-only and color-blind-only sons received recombinant X chromosomes, while the son with both conditions and the normal son are parental types.'
          }
        ]
      }
    }
  ]
};
