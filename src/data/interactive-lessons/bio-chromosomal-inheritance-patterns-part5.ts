export const bioChromosomalInheritancePatternsPart5Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr5-intro',
      type: 'text' as const,
      content: `# Structural Chromosomal Changes

Structural chromosomal abnormalities involve **rearrangements** of chromosome segments rather than changes in chromosome number. They can arise from chromosome breakage, from errors in DNA repair, or from mistakes in crossing over. The CED states that **alterations in chromosome structure lead to genetic disorders**.

## Four Major Types

| Type | What happens | Diagram |
|------|-------------|---------|
| **Deletion** | A segment is lost | ABCDEFG → ABEFG (CD deleted) |
| **Duplication** | A segment is copied | ABCDEFG → ABCBCDEFG (BC duplicated) |
| **Inversion** | A segment is reversed | ABCDEFG → ABEDCFG (CDE inverted) |
| **Translocation** | A segment moves to a non-homologous chromosome | ABCDEFG + MNOPQR → ABCPQR + MNODEFG |

> 💡 These changes affect **gene dosage** (how many copies of a gene are present), **gene regulation** (which regulatory sequences sit next to a gene), and can **disrupt genes** at the points where the chromosome broke.`
    },
    {
      id: 'chr5-deldup',
      type: 'text' as const,
      content: `## Deletions

A **deletion** occurs when a chromosomal segment is lost.

### Effects
- Every gene in the deleted segment is left with only **one copy**, on the other homolog, so its product is made at about half the normal amount.
- Because many genes are lost at once, deletions are **usually harmful**, and large deletions are often **lethal**.

## Duplications

A **duplication** occurs when a chromosomal segment is copied, resulting in extra genetic material.

### Effects
- Generally **less harmful** than deletions (extra genes vs. missing genes), but extra copies can still upset **gene dosage**.
- Duplications are an important source of **new genes** in evolution. While one copy keeps the original function, the other copy is free to accumulate mutations, and some of those changes give the copy a new function.
- The **globin gene family**, which includes the genes for the different chains of hemoglobin, evolved through repeated duplications followed by divergence of the copies.

## How a Mistake in Crossing Over Makes Both

Crossing over normally exchanges **matching** segments, so no genes are gained or lost. If two homologs pair slightly **out of register**, a crossover between them is **unequal**:

| Chromatid | Before (misaligned) | After unequal crossing over |
|-----------|---------------------|-----------------------------|
| From homolog 1 | A B C D E | A B C **C** D E (duplication of C) |
| From homolog 2 | A B C D E | A B D E (deletion of C) |

One crossover event produces a duplication on one chromatid and the matching deletion on the other. Gametes that receive these chromatids pass the structural change to the next generation.`
    },
    {
      id: 'chr5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A chromosome with the gene order ABCDEFGH is found to have the order ABCFEDGH. Which structural change has occurred?',
            options: [
              'A deletion of segment DEF',
              'A duplication of segment DEF',
              'An inversion of segment DEF',
              'A translocation of segment DEF'
            ],
            correctAnswer: 2,
            explanation: 'All of the genes are still present, but the segment DEF now reads FED, so it was reversed: an inversion. A deletion would remove D, E and F, a duplication would add a second copy, and a translocation would move the segment to a non-homologous chromosome.'
          },
          {
            question: 'Gene duplications are evolutionarily important because:',
            options: [
              'Extra gene copies can diverge and acquire new functions over time',
              'They always cause harmful dosage effects that selection removes',
              'They reduce genetic variation by making genomes more uniform',
              'They prevent crossing over and keep favorable alleles together'
            ],
            correctAnswer: 0,
            explanation: 'Gene duplication creates redundant copies. One copy can maintain the original function while the other is free to accumulate mutations and potentially take on a new function, a major source of evolutionary novelty, as in the globin gene family.'
          }
        ]
      }
    },
    {
      id: 'chr5-invtrans',
      type: 'text' as const,
      content: `## Inversions

An **inversion** occurs when a chromosome segment breaks at two points, flips 180°, and reinserts.

### Effects
- All genes are still present, so the organism is often **phenotypically normal**.
- An inversion causes a problem when a **break point falls inside a gene**, cutting it in two, or when it separates a gene from the regulatory sequences that control its transcription.

## Translocations

A **translocation** is the transfer of a chromosomal segment to a non-homologous chromosome.

### Effects
- If no genes are lost or broken, the carrier is usually healthy, but some of the gametes the carrier makes receive a chromosome with a **missing or extra segment**. Offspring from those gametes have unbalanced gene dosage.
- A translocation can **break a gene** at the junction, or move a gene next to **different regulatory sequences**. A gene that promotes cell division, placed under the control of a strongly active regulatory region, may be expressed far more than normal, and that overexpression can contribute to **cancer**.

### Worked Reasoning: Predicting the Effect of a Rearrangement

| Question to ask | If the answer is yes… |
|-----------------|-----------------------|
| Were genes lost or gained? | Gene dosage changes: deletions are usually more harmful than duplications |
| Did a break point fall inside a gene? | That gene's product is likely nonfunctional |
| Was a gene moved next to new regulatory sequences? | That gene may be expressed at the wrong time, place or amount |
| Is the rearrangement in a germ cell? | It can be passed to offspring; in a body cell it affects only that cell's descendants |`
    },
    {
      id: 'chr5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Name the Change** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'ABCDEFG becomes ABEFG',
            options: ['deletion', 'duplication', 'inversion', 'translocation']
          },
          {
            label: 'ABCDEFG becomes ABCDCDEFG',
            options: ['deletion', 'duplication', 'inversion', 'translocation']
          },
          {
            label: 'ABCDEFG becomes AFEDCBG',
            options: ['deletion', 'duplication', 'inversion', 'translocation']
          },
          {
            label: 'Segment EFG of one chromosome is now attached to a non-homologous chromosome',
            options: ['deletion', 'duplication', 'inversion', 'translocation']
          }
        ],
        correctAnswers: ['deletion', 'duplication', 'inversion', 'translocation'],
        hint1: 'Compare the genes present before and after: is anything missing or repeated?',
        hint2: 'If every gene is present once but a stretch reads backward, the segment was flipped.',
        hint3: 'Movement to a different, non-homologous chromosome has its own name.',
        explanation: 'Losing CD is a deletion; repeating CD is a duplication; BCDEF reading backward is an inversion; and moving EFG to a non-homologous chromosome is a translocation.'
      }
    },
    {
      id: 'chr5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why is an inversion often less harmful to the organism than a deletion of a segment of the same length?',
            options: [
              'An inversion is always repaired by the cell, but a deletion never is',
              'An inversion keeps all of its genes, but a deletion loses some of them',
              'An inversion occurs only in noncoding regions of a chromosome',
              'An inversion doubles the dosage of the genes in the flipped segment'
            ],
            correctAnswer: 1,
            explanation: 'In an inversion every gene is still present, so dosage is unchanged unless a break point disrupts a gene. A deletion removes genes, halving the dosage of everything in the segment. Inversions are not always repaired, they can occur anywhere, and they do not change the number of gene copies.'
          },
          {
            question: 'Two homologs pair slightly out of register, and an unequal crossover gives one chromatid two copies of gene X. What is expected for the other chromatid involved in that crossover?',
            options: [
              'It also carries two copies of gene X',
              'It carries an inverted copy of gene X',
              'It is missing gene X entirely',
              'It is unchanged by the crossover'
            ],
            correctAnswer: 2,
            explanation: 'An unequal crossover exchanges segments of different lengths, so the segment one chromatid gains is the segment the other loses: a duplication on one chromatid and the matching deletion on the other. Both chromatids took part in the exchange, so neither is unchanged, and no segment is flipped.'
          }
        ]
      }
    }
  ]
};
