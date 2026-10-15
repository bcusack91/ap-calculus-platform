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
- The **X chromosome** is large and carries many genes unrelated to sex
- The **Y chromosome** is small and carries few genes, mostly involved in male development
- Because the Y lacks most X-linked genes, a male has only **one copy** of nearly every X-linked gene`
    },
    {
      id: 'chr2-xlinked',
      type: 'text' as const,
      content: `## X-Linked Recessive Traits

X-linked recessive traits are the most commonly tested sex-linked pattern on the AP exam.

### Key Characteristics
- **More common in males** than females
- Males need only **one copy** of the recessive allele (hemizygous: $X^{a}$ Y)
- Females need **two copies** to express the trait $(X^{a}X^{a})$
- **Carrier females** $(X^{A} X^{a})$ are phenotypically normal but can pass the allele to sons
- An affected male gets the allele from his **mother** (never from father)
- An affected father passes the allele to **all daughters** (who become carriers) but **no sons**

### Why Males Are Affected More Often

Red-green color blindness and hemophilia are familiar X-linked recessive traits. In a population, a male shows the trait whenever his single X carries the allele, but a female shows it only when **both** of her X chromosomes carry it. So if 1 in 12 X chromosomes carries a color-blindness allele, about 1 in 12 males is color-blind, while far fewer females are.

### Punnett Square: Carrier Female × Normal Male

| | Mother's $X^{A}$ | Mother's $X^{a}$ |
|---|---|---|
| **Father's $X^{A}$** | $X^{A}X^{A}$ (normal daughter) | $X^{A}X^{a}$ (carrier daughter) |
| **Father's Y** | $X^{A}Y$ (normal son) | $X^{a}Y$ (affected son) |

**Result**: 50% of sons affected, 50% of daughters are carriers`
    },
    {
      id: 'chr2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A woman who is a carrier for hemophilia $(X^{H} X^{h})$ marries a man with normal clotting $(X^{H} Y)$. What percentage of their sons will have hemophilia?',
            options: [
              '50%',
              '25%',
              '100%',
              '0%'
            ],
            correctAnswer: 0,
            explanation: 'The carrier mother has a 50% chance of passing $X^{h}$ to each son. Sons who receive $X^{h}$ will be hemizygous $(X^{h} Y)$ and express hemophilia. Sons who receive $X^{H}$ will be normal $(X^{H} Y)$.'
          },
          {
            question: 'A color-blind man $(X^{c} Y)$ marries a woman with normal vision who is NOT a carrier $(X^{C} X^{C})$. Which statement is correct about their children?',
            options: [
              'All daughters will be carriers; no sons will be color-blind',
              'Half of the daughters will be carriers; half of the sons will be color-blind',
              'All sons will be color-blind, since they inherit their father\'s allele',
              'No children will carry the allele, since the mother has two normal copies'
            ],
            correctAnswer: 0,
            explanation: 'The father passes his $X^{c}$ to all daughters (making them $X^{C}$ $X^{c}$ carriers) and his Y to all sons. The mother contributes $X^{C}$ to all children. So daughters are all carriers, and sons are all $X^{C}$ Y (normal vision) — sons never receive their father\'s X.'
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
- Never passed from father to son, because a son receives his father's Y, not his X

## Y-Linked Traits

Genes on the **Y chromosome** that have no counterpart on the X:
- Passed **exclusively from father to son**
- **All sons** of an affected father are affected
- **No daughters** ever inherit the trait
- Very few Y-linked genes affect phenotype beyond male development, so Y-linked traits are rare in pedigrees`
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
            options: ['$X^{A}$ $X^{a}$', '$X^{a}$ $X^{a}$', '$X^{A}$ $X^{A}$', '$X^{a}$ Y']
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
        correctAnswers: ['males', '$X^{A}$ $X^{a}$', 'father to all sons', 'all daughters (carriers)'],
        hint1: 'Which sex has only one X chromosome?',
        hint2: 'A carrier expresses the dominant phenotype but carries one recessive allele.',
        hint3: 'The Y chromosome goes from father to son; the X goes from father to daughter.',
        explanation: 'Males are hemizygous (one X), so one recessive allele causes expression. Carriers are heterozygous females. Y-linked traits pass father-to-son. An affected father gives $X^{a}$ to all daughters (who become carriers) and Y to all sons.'
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
            explanation: 'An affected father $(X^{D} Y)$ passes his $X^{D}$ to ALL daughters (who will be affected since the trait is dominant) and his Y to all sons (who will be unaffected).'
          },
          {
            question: 'Which pedigree pattern is most consistent with X-linked recessive inheritance?',
            options: [
              'Trait skips generations, males far outnumber females, affected males have carrier mothers',
              'Trait in every generation, sexes equally affected, affected children have an affected parent',
              'Only males are affected, every son of an affected male is affected, and females never show it',
              'Skips generations, both sexes equally affected, affected children have two carrier parents'
            ],
            correctAnswer: 0,
            explanation: 'X-linked recessive traits characteristically skip generations (carrier females pass to affected sons), appear predominantly in males, and affected males receive the allele from their carrier mothers. Every-generation transmission with equal sexes fits autosomal dominant, strict father-to-son transmission fits Y-linkage, and skipping with equal sexes fits autosomal recessive.'
          }
        ]
      }
    }
  ]
};
