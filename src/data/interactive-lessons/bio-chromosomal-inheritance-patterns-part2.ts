export const bioChromosomalInheritancePatternsPart2Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr2-intro',
      type: 'text' as const,
      content: `# Sex-Linked Traits

**Sex-linked traits** are controlled by genes located on the sex chromosomes (X or Y). Because males and females have different combinations of sex chromosomes, these traits show distinctive inheritance patterns.

## Sex Determination

| System | Female | Male | Examples |
|--------|--------|------|----------|
| **XX-XY** | XX | XY | Humans, *Drosophila*, most mammals |
| **ZW-ZZ** | ZW | ZZ | Birds, butterflies, some fish |
| **XX-XO** | XX | XO | Grasshoppers |
| **Haplodiploidy** | Diploid (2n) | Haploid (n) | Bees, ants, wasps |

In the XX-XY system:
- The **X chromosome** is large, carrying ~800 genes
- The **Y chromosome** is small, carrying ~50 genes (mostly involved in male development)
- The **SRY gene** on the Y chromosome triggers male development`
    },
    {
      id: 'chr2-xlinked',
      type: 'text' as const,
      content: `## X-Linked Recessive Traits

X-linked recessive traits are the most commonly tested sex-linked pattern on the AP exam.

### Key Characteristics
- **More common in males** than females
- Males need only **one copy** of the recessive allele (hemizygous: Xᵃ Y)
- Females need **two copies** to express the trait (XᵃXᵃ)
- **Carrier females** (X^A Xᵃ) are phenotypically normal but can pass the allele to sons
- An affected male gets the allele from his **mother** (never from father)
- An affected father passes the allele to **all daughters** (who become carriers) but **no sons**

### Classic Examples

| Trait | Gene | Frequency |
|-------|------|-----------|
| **Red-green color blindness** | OPN1LW/OPN1MW on Xq28 | ~8% of males, ~0.5% of females |
| **Hemophilia A** | Factor VIII on Xq28 | ~1 in 5,000 males |
| **Duchenne muscular dystrophy** | Dystrophin on Xp21 | ~1 in 3,500 males |

### Punnett Square: Carrier Female × Normal Male

\`\`\`
           X^A        Xᵃ
  X^A    X^A X^A    X^A Xᵃ
          (normal ♀)  (carrier ♀)
  Y      X^A Y      Xᵃ Y
          (normal ♂)  (affected ♂)
\`\`\`

**Result**: 50% of sons affected, 50% of daughters are carriers`
    },
    {
      id: 'chr2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A woman who is a carrier for hemophilia (X^H X^h) marries a man with normal clotting (X^H Y). What percentage of their sons will have hemophilia?',
            options: [
              '50%',
              '25%',
              '100%',
              '0%'
            ],
            correctAnswer: 0,
            explanation: 'The carrier mother has a 50% chance of passing X^h to each son. Sons who receive X^h will be hemizygous (X^h Y) and express hemophilia. Sons who receive X^H will be normal (X^H Y).'
          },
          {
            question: 'A color-blind man (X^c Y) marries a woman with normal vision who is NOT a carrier (X^C X^C). Which statement is correct about their children?',
            options: [
              'All daughters will be carriers; no sons will be color-blind',
              'Half of all children will be color-blind',
              'All sons will be color-blind',
              'No children will carry the color-blindness allele'
            ],
            correctAnswer: 0,
            explanation: 'The father passes his X^c to all daughters (making them X^C X^c carriers) and his Y to all sons. The mother contributes X^C to all children. So daughters are all carriers, and sons are all X^C Y (normal vision).'
          }
        ]
      }
    },
    {
      id: 'chr2-xdom-ylinked',
      type: 'text' as const,
      content: `## X-Linked Dominant Traits

X-linked dominant traits are expressed in **both heterozygous females and hemizygous males**.

### Characteristics
- Affected males pass the trait to **all daughters** and **no sons**
- Affected heterozygous females pass to **50% of all children** regardless of sex
- Often **more common in females** (they have two X chromosomes, so two chances to inherit)
- May be **lethal in males** (e.g., Rett syndrome, incontinentia pigmenti)

### Examples
- **Hypophosphatemic rickets** (vitamin D-resistant rickets)
- **Rett syndrome** (usually lethal in males)

## Y-Linked (Holandric) Traits

Genes on the **Y chromosome** that have no counterpart on the X:
- Passed **exclusively from father to son**
- **All sons** of an affected father are affected
- **No daughters** ever inherit the trait
- Very few Y-linked genes affect phenotype beyond sex determination

### Examples
- **SRY** (sex-determining region Y)
- **Hairy ear rims** (hypertrichosis pinnae auris — debated)
- Some **azoospermia factors** (AZF) affecting male fertility`
    },
    {
      id: 'chr2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'X-linked recessive traits are more common in ___ because they are hemizygous',
            options: ['males', 'females', 'both sexes equally', 'heterozygotes']
          },
          {
            label: 'A carrier female for an X-linked recessive trait has the genotype ___',
            options: ['X^A X^a', 'X^a X^a', 'X^A X^A', 'X^a Y']
          },
          {
            label: 'Y-linked traits are transmitted from ___ to ___',
            options: ['father to all sons', 'mother to all sons', 'father to all daughters', 'mother to all children']
          },
          {
            label: 'An affected father with an X-linked recessive trait passes the allele to ___',
            options: ['all daughters (carriers)', 'all sons', 'no children', 'half of daughters']
          }
        ],
        correctAnswers: ['males', 'X^A X^a', 'father to all sons', 'all daughters (carriers)'],
        hint1: 'Which sex has only one X chromosome?',
        hint2: 'A carrier expresses the dominant phenotype but carries one recessive allele.',
        hint3: 'The Y chromosome goes from father to son; the X goes from father to daughter.',
        explanation: 'Males are hemizygous (one X), so one recessive allele causes expression. Carriers are heterozygous females. Y-linked traits pass father-to-son. An affected father gives X^a to all daughters (who become carriers) and Y to all sons.'
      }
    },
    {
      id: 'chr2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In X-linked dominant inheritance, an affected father will pass the trait to:',
            options: [
              'All daughters and no sons',
              'All sons and no daughters',
              'All children',
              'No children'
            ],
            correctAnswer: 0,
            explanation: 'An affected father (X^D Y) passes his X^D to ALL daughters (who will be affected since the trait is dominant) and his Y to all sons (who will be unaffected).'
          },
          {
            question: 'Which pedigree pattern is most consistent with X-linked recessive inheritance?',
            options: [
              'Trait skips generations, appears mostly in males, affected males have carrier mothers',
              'Every generation affected, males and females equally affected',
              'Only males are affected, every son of an affected male is affected',
              'All children of affected mothers are affected'
            ],
            correctAnswer: 0,
            explanation: 'X-linked recessive traits characteristically skip generations (carrier females pass to affected sons), appear predominantly in males, and affected males receive the allele from their carrier mothers.'
          }
        ]
      }
    }
  ]
};
