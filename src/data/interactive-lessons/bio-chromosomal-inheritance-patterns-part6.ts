export const bioChromosomalInheritancePatternsPart6Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr6-intro',
      type: 'text' as const,
      content: `# Non-Nuclear (Extranuclear) Inheritance

Not every gene sits on a chromosome in the nucleus. **Mitochondria** and **chloroplasts** carry their own small, circular DNA, and traits determined by that DNA show a pattern of inheritance that does not follow Mendel's rules. The CED calls this **non-nuclear inheritance**.

## Why Organelle Genes Break Mendel's Rules

| Nuclear genes | Mitochondrial and chloroplast genes |
|---------------|--------------------------------------|
| Two copies in a diploid cell, one on each homolog | Many copies per cell, one or more in each of many organelles |
| Homologs pair and separate evenly in meiosis | No pairing: organelles are **randomly assorted** into daughter cells and gametes |
| Each parent contributes one allele | Organelles usually come from **one parent**, the one that supplies the egg's cytoplasm |
| Predictable ratios (3:1, 1:1, 9:3:3:1) | **No Mendelian ratios** |

> 💡 Organelle DNA is circular and resembles a bacterial chromosome, one line of evidence that mitochondria and chloroplasts descend from free-living prokaryotes (endosymbiosis).

(Other parent-of-origin effects you may see in textbooks, such as genomic imprinting and maternal-effect genes, are beyond the scope of the AP exam.)`
    },
    {
      id: 'chr6-imprintex',
      type: 'text' as const,
      content: `## Random Assortment of Organelles

A single cell can hold hundreds of mitochondria. When the cell divides, its mitochondria are split between the two daughter cells **at random**; nothing sorts them evenly, the way the spindle sorts chromosomes.

This matters when a cell contains a **mixture** of normal and mutant mitochondrial DNA:

| Generation of cell division | Typical result |
|-----------------------------|----------------|
| Starting cell | About half normal, half mutant mitochondria |
| After a few divisions | Daughter cells differ: some have mostly normal mitochondria, others mostly mutant |
| After many divisions | Some cell lines are nearly all normal, others nearly all mutant |

### Consequences

- **Variable severity.** Siblings who inherit mitochondria from the same mother can receive very different proportions of mutant mitochondria, so a mitochondrial disorder can be mild in one child and severe in another.
- **Tissue differences.** Mutant mitochondria cause the most harm in tissues with high energy demand, such as muscle and nerve, because mitochondria carry out most of the cell's ATP production by cellular respiration.
- **No fixed ratio.** Because the split is random, offspring do not fall into predictable Mendelian classes.`
    },
    {
      id: 'chr6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A mother carries a mixture of normal and mutant mitochondria. Her three children all inherit the mutation, but one has severe muscle weakness and the other two have mild symptoms. What best explains the difference?',
            options: [
              'Each child received its own random share of the mutant mitochondria',
              'The father passed a second copy of the mutant mitochondria to one child',
              'The mutation is recessive, so only a homozygous child shows full symptoms',
              'One child inherited the mutation on an X chromosome instead of in mitochondria'
            ],
            correctAnswer: 0,
            explanation: 'Mitochondria are assorted randomly into eggs and later into body cells, so siblings can carry very different fractions of mutant mitochondria, which changes severity. Fathers do not pass on mitochondria, and mitochondrial genes are neither homozygous nor heterozygous in the Mendelian sense, nor are they carried on the X chromosome.'
          },
          {
            question: 'Why do traits determined by mitochondrial DNA fail to show Mendelian ratios such as 3:1?',
            options: [
              'Mitochondrial genes are never transcribed, so they cannot affect phenotype',
              'Organelles are assorted randomly rather than segregated in homologous pairs',
              'Mitochondrial DNA mutates every generation, so no allele is passed on intact',
              'Mitochondria are inherited from both parents equally and blend in the zygote'
            ],
            correctAnswer: 1,
            explanation: 'Mendelian ratios come from homologous chromosomes pairing and separating evenly in meiosis. Mitochondria have no homologs to pair with and are distributed at random, so no fixed ratio results. Mitochondrial genes are expressed, mitochondrial DNA is passed on largely intact, and mitochondria usually come only from the egg.'
          }
        ]
      }
    },
    {
      id: 'chr6-extranuclear',
      type: 'text' as const,
      content: `## Maternal Inheritance in Animals and Plants

### Animals

The egg contributes nearly all of the zygote's cytoplasm, including its mitochondria. Sperm mitochondria are not passed on. Mitochondrial traits are therefore **maternally inherited**:

- An **affected mother** can pass the trait to **all** of her children, sons and daughters alike.
- An **affected father** passes it to **none** of his children.

### Plants

In plants, mitochondria and chloroplasts are transmitted in the **ovule** (which contains the egg) and not in the pollen. Traits determined by chloroplast or mitochondrial DNA are therefore also **maternally inherited**: offspring resemble the plant that produced the seed.

### Worked Example: Reciprocal Crosses with a Variegated Plant

Some four-o'clock plants have **green** branches, **white** branches (whose chloroplasts cannot make chlorophyll) and **variegated** branches with both. Flowers on different branches are crossed, and the seedlings are scored.

| Flower that produced the seed (egg) | Flower that supplied pollen | Seedlings |
|-------------------------------------|-----------------------------|-----------|
| Green branch | White branch | All green |
| White branch | Green branch | All white (they die once seed reserves run out) |
| Variegated branch | Green branch | Green, white and variegated, in unpredictable proportions |

**Step 1 — Compare the reciprocal crosses.** Green × white and white × green give opposite results, so the sex of the parent matters.

**Step 2 — Identify which parent decides.** In every row, the seedlings match the **seed (egg) parent**, whatever the pollen carried.

**Step 3 — Explain the variegated row.** A variegated branch's eggs receive random mixtures of normal and defective chloroplasts, so the seedlings vary with no fixed ratio.

**Conclusion.** Leaf color here is determined by chloroplast DNA, inherited through the egg's cytoplasm.

| Feature | Nuclear (autosomal) gene | Mitochondrial or chloroplast gene |
|---------|--------------------------|-----------------------------------|
| Do reciprocal crosses differ? | No | Yes: offspring match the mother |
| Can an affected father pass it on? | Yes | No |
| Mendelian ratios? | Yes | No |`
    },
    {
      id: 'chr6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In animals, mitochondrial DNA is usually inherited from the ___',
            options: ['mother', 'father', 'both parents equally', 'random parent']
          },
          {
            label: 'When a cell with mixed normal and mutant mitochondria divides, its mitochondria are split between the daughter cells ___',
            options: ['randomly', 'evenly', 'by dominance', 'by size']
          },
          {
            label: 'In plants, chloroplasts pass to the next generation through the ___',
            options: ['ovule', 'pollen', 'roots', 'flower petals']
          },
          {
            label: 'A man with a mitochondrial disorder passes it to ___ of his children',
            options: ['none', 'all', 'half', 'only the sons']
          }
        ],
        correctAnswers: ['mother', 'randomly', 'ovule', 'none'],
        hint1: 'Sperm contribute almost no cytoplasm to the zygote.',
        hint2: 'Organelles have no spindle mechanism to divide them evenly.',
        hint3: 'The seed parent supplies the egg and its cytoplasm.',
        explanation: 'Mitochondria come from the egg, so they are maternally inherited and a father passes none of his on. Organelles are distributed randomly at cell division. In plants, chloroplasts are transmitted in the ovule, not in the pollen.'
      }
    },
    {
      id: 'chr6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A woman with a mitochondrial disease has children with an unaffected man. Which of their children could be affected?',
            options: [
              'Sons and daughters alike may be affected',
              'Only her daughters can be affected',
              'Only her sons can be affected',
              '25% of her children will be affected'
            ],
            correctAnswer: 0,
            explanation: 'Mitochondria are inherited from the mother only. All children, sons and daughters, receive their mitochondria from her, so any of them may be affected. Severity can still vary because mitochondria are distributed randomly.'
          },
          {
            question: 'Pollen from a flower on an all-white branch of a variegated plant is used to pollinate a flower on an all-green branch. What will the seedlings most likely be like?',
            options: [
              'White, matching the branch that supplied the pollen',
              'Green, matching the branch that supplied the egg',
              'Variegated, mixing plastids from both of the parents',
              'Three green to one white, by Mendelian segregation'
            ],
            correctAnswer: 1,
            explanation: 'Chloroplasts are transmitted in the ovule, not the pollen, so the seedlings inherit the green branch\'s normal chloroplasts and are green. Pollen contributes no chloroplasts, so the seedlings cannot be white or variegated, and organelle traits do not segregate in Mendelian ratios.'
          }
        ]
      }
    }
  ]
};
