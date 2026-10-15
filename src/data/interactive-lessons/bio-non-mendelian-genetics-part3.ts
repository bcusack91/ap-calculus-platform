export const bioNonMendelianPart3Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-3-intro-p1',
      type: 'text' as const,
      content: `
## Epistasis

**Part 3 of 7 — Epistasis**

Dominance is an interaction between two **alleles of the same gene**. **Epistasis** is an interaction between **different genes**: the genotype at one gene masks or changes the effect of the genotype at another gene.

Epistasis usually happens because genes act in sequence in one biochemical pathway. If an early step is blocked, it does not matter what the later genes encode, because their substrate never arrives.

### The starting point: 9 : 3 : 3 : 1

A dihybrid cross between two individuals heterozygous at two unlinked genes ($AaBb$ × $AaBb$) produces 16 equally likely gamete combinations, which fall into four genotype groups:

| Genotype group | Fraction | Meaning |
|---|---|---|
| $A\\_B\\_$ | $\\frac{9}{16}$ | at least one dominant allele at both genes |
| $A\\_bb$ | $\\frac{3}{16}$ | dominant at the first gene only |
| $aaB\\_$ | $\\frac{3}{16}$ | dominant at the second gene only |
| $aabb$ | $\\frac{1}{16}$ | recessive at both genes |

The underscore means "either allele." With no interaction, each group has its own phenotype and the ratio is 9 : 3 : 3 : 1. **Epistasis merges groups into one phenotype**, so the ratio changes, but the total is still 16. A modified ratio that adds up to 16 is the fingerprint of **two genes assorting independently**.
      `
    },
    {
      id: 'non-3-labs',
      type: 'text' as const,
      content: `
### Recessive Epistasis: Labrador Retriever Coat (9 : 3 : 4)

Two genes control Labrador coat color:

- **B gene, pigment type.** $B$ makes black pigment and $b$ makes brown (chocolate) pigment. $B$ is dominant.
- **E gene, pigment deposition.** $E$ allows dark pigment to be deposited in the hair. An $ee$ dog cannot deposit dark pigment in its hair, so its coat is **yellow** whatever its B alleles are.

Because the $ee$ genotype hides the B gene, E is **epistatic** to B, and since it takes two recessive alleles to do the hiding, this is **recessive epistasis**. (A yellow Lab's B genotype still shows in its nose and lip color: black for $B\\_$, brown for $bb$.)

### Worked Example 1: BbEe × BbEe

**Step 1 — Write the four groups.** $B\\_E\\_$, $bbE\\_$, $B\\_ee$, $bbee$ in the proportions 9, 3, 3, 1.

**Step 2 — Assign phenotypes.**

| Group | Fraction | Coat |
|---|---|---|
| $B\\_E\\_$ | 9/16 | Black |
| $bbE\\_$ | 3/16 | Chocolate |
| $B\\_ee$ | 3/16 | Yellow |
| $bbee$ | 1/16 | Yellow |

**Step 3 — Merge.** The two yellow groups combine: 3 + 1 = 4. The ratio is **9 black : 3 chocolate : 4 yellow**.

**Step 4 — Test cross check.** $BbEe$ × $bbee$ gives $BbEe$, $Bbee$, $bbEe$ and $bbee$ in equal numbers, which is **1 black : 1 chocolate : 2 yellow**.
      `
    },
    {
      id: 'non-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Labrador Coat Color
      `,
      exercise: {
        questions: [
          {
            question: 'In Labradors, B (black) is dominant to b (chocolate), and dogs with genotype ee are yellow. What is the coat color of a dog with genotype BBee?',
            options: [
              'Black, because B is dominant and is present in two copies',
              'Chocolate, because ee converts the black pigment to brown',
              'Yellow, because ee prevents dark pigment from being deposited in each hair',
              'Roan, because black and yellow hairs are both expressed in the coat'
            ],
            correctAnswer: 2,
            explanation: 'The ee genotype blocks deposition of dark pigment in the hair, so the dog is yellow regardless of its two B alleles. Two B alleles cannot be expressed in the coat once ee masks them, the E gene does not change black pigment into brown, and the coat is not a codominant mixture.'
          },
          {
            question: 'A black Labrador with genotype BbEe is crossed with a yellow Labrador with genotype bbee. What phenotypic ratio is expected among the puppies?',
            options: [
              '1 black : 1 chocolate : 1 yellow',
              '9 black : 3 chocolate : 4 yellow',
              '2 black : 1 chocolate : 1 yellow',
              '1 black : 1 chocolate : 2 yellow'
            ],
            correctAnswer: 3,
            explanation: 'The black parent makes BE, Be, bE and be gametes equally, and the yellow parent gives only be, so puppies are BbEe (black), bbEe (chocolate), Bbee (yellow) and bbee (yellow), giving 1 : 1 : 2. The 9 : 3 : 4 ratio comes from crossing two BbEe dogs, not from a test cross.'
          }
        ]
      }
    },
    {
      id: 'non-3-other-ratios',
      type: 'text' as const,
      content: `
### Duplicate Recessive Epistasis: Sweet Pea Flowers (9 : 7)

Bateson and Punnett crossed two **white-flowered** sweet pea strains and got an **all-purple F1**. The F2 was about **9 purple : 7 white**. The explanation is a two-step pathway:

colorless precursor → (enzyme from gene C) → colorless intermediate → (enzyme from gene P) → **purple pigment**

A plant needs at least one functional allele of **both** genes ($C\\_P\\_$) to be purple. A plant that is $cc$, $pp$ or both is blocked at some step and is white, so $C\\_pp$ (3) + $ccP\\_$ (3) + $ccpp$ (1) = **7 white**. The two white parents ($CCpp$ and $ccPP$) were blocked at different steps, so their F1 ($CcPp$) had both working enzymes. This is also called **complementary gene action**.

### Dominant Epistasis: Summer Squash Fruit Color (12 : 3 : 1)

In summer squash, a dominant allele $W$ blocks pigment production, so any $W\\_$ fruit is **white**. In $ww$ plants, the Y gene shows: $Y\\_$ is **yellow** and $yy$ is **green**.

$W\\_Y\\_$ (9) + $W\\_yy$ (3) = **12 white**, $wwY\\_$ = **3 yellow**, $wwyy$ = **1 green**.

| Ratio | Name | Which groups merge | Example |
|---|---|---|---|
| 9 : 3 : 3 : 1 | No interaction | none | Pea seed shape and color |
| 9 : 3 : 4 | Recessive epistasis | $aaB\\_$ + $aabb$ | Labrador coat |
| 9 : 7 | Duplicate recessive | $A\\_bb$ + $aaB\\_$ + $aabb$ | Sweet pea flowers |
| 12 : 3 : 1 | Dominant epistasis | $A\\_B\\_$ + $A\\_bb$ | Summer squash |

### Worked Example 2: Reading a Modified Ratio From Counts

**Problem.** Two squash plants heterozygous at both genes are crossed, giving 152 white, 37 yellow and 11 green fruits. Identify the pattern.

**Step 1 — Total.** 152 + 37 + 11 = 200.

**Step 2 — Convert to sixteenths.** One sixteenth of 200 is 12.5. Dividing each count by 12.5 gives 12.2 : 3.0 : 0.9.

**Step 3 — Match.** That is close to **12 : 3 : 1**, so one gene shows dominant epistasis over the other. (Part 6 shows how to test "close" with chi-square.)
      `
    },
    {
      id: 'non-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Practice — Match the F2 Ratio to the Interaction

Each ratio comes from an F2 of two genes, starting from parents heterozygous at both.
      `,
      exercise: {
        dropdowns: [
          {
            label: '9 : 3 : 4',
            options: ['No interaction between the genes', 'Recessive epistasis', 'Duplicate recessive epistasis', 'Dominant epistasis']
          },
          {
            label: '9 : 7',
            options: ['No interaction between the genes', 'Recessive epistasis', 'Duplicate recessive epistasis', 'Dominant epistasis']
          },
          {
            label: '12 : 3 : 1',
            options: ['No interaction between the genes', 'Recessive epistasis', 'Duplicate recessive epistasis', 'Dominant epistasis']
          },
          {
            label: '9 : 3 : 3 : 1',
            options: ['No interaction between the genes', 'Recessive epistasis', 'Duplicate recessive epistasis', 'Dominant epistasis']
          }
        ],
        correctAnswers: ['Recessive epistasis', 'Duplicate recessive epistasis', 'Dominant epistasis', 'No interaction between the genes'],
        hint1: 'Ask which of the four 9 : 3 : 3 : 1 groups have merged into one phenotype.',
        hint2: 'If the 3 and the 1 merge into 4, a recessive genotype at one gene is hiding the other gene.',
        hint3: 'If the 9 and one 3 merge into 12, a single dominant allele is doing the hiding.',
        explanation: '9 : 3 : 4 is recessive epistasis (Labrador), 9 : 7 is duplicate recessive epistasis (sweet pea), 12 : 3 : 1 is dominant epistasis (squash), and 9 : 3 : 3 : 1 means the two genes act independently on the phenotype.'
      }
    },
    {
      id: 'non-3-pleiotropy',
      type: 'text' as const,
      content: `
### Epistasis vs. Pleiotropy vs. Polygenic Inheritance

These three terms are easy to mix up because all of them break the "one gene, one trait" picture.

| Term | Genes involved | Traits affected | Example |
|---|---|---|---|
| **Epistasis** | Two or more genes **interacting**, one masking another | One trait | Labrador coat color |
| **Polygenic inheritance** | Many genes **adding** small effects | One trait | Human height |
| **Pleiotropy** | **One** gene | **Many** traits | Sickle-cell; Marfan syndrome |

**Pleiotropy** means one gene affects several apparently unrelated traits, usually because its product is used in many tissues. In **Marfan syndrome**, a mutation in the gene for fibrillin, a connective-tissue protein, causes long limbs, a dislocated eye lens and a weakened aorta. The **sickle-cell** allele changes one amino acid in beta-globin, yet it affects red blood cell shape, causes anemia and pain from blocked capillaries, can damage organs and gives some resistance to malaria.

> **AP Connection:** The CED does not require you to memorize the names of each epistatic ratio. It does expect you to explain why a trait influenced by several genes, or by a pathway with several steps, does not follow simple Mendelian ratios, and to recognize a modified ratio out of 16 as evidence of two interacting, independently assorting genes. On free-response questions, describe the mechanism: "the product of gene E is required for pigment from gene B to be deposited."
      `
    },
    {
      id: 'non-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Gene Interactions
      `,
      exercise: {
        questions: [
          {
            question: 'Two true-breeding white-flowered sweet pea strains are crossed. The F1 plants all have purple flowers, and the F2 shows about 9 purple : 7 white. Which explanation best fits these results?',
            options: [
              'One gene shows incomplete dominance, giving two shades of flower color',
              'Two genes each supply a required enzyme in a single pigment pathway',
              'Purple is dominant at one gene, and the white F2 plants lacked sunlight',
              'Two alleles of one gene combine in the F1 to restore a missing pigment'
            ],
            correctAnswer: 1,
            explanation: 'The two white strains are blocked at different steps of one pathway, so the F1 has both working enzymes and is purple, and any F2 plant homozygous recessive at either gene is white, giving 9 : 7. A single gene cannot give a ratio out of 16, and an environmental effect would not produce this ratio.'
          },
          {
            question: 'A mutation in the gene for fibrillin causes long limbs, a dislocated eye lens and a weakened aorta in the same person. Which term describes this situation?',
            options: [
              'Epistasis',
              'Polygenic inheritance',
              'Pleiotropy',
              'Codominance'
            ],
            correctAnswer: 2,
            explanation: 'One gene affecting several different traits is pleiotropy. Epistasis is one gene masking another, polygenic inheritance is many genes adding to one trait, and codominance is two alleles both expressed in a heterozygote.'
          },
          {
            question: 'Which statement correctly distinguishes epistasis from dominance?',
            options: [
              'Epistasis involves alleles of one gene, and dominance involves alleles of different genes',
              'Epistasis changes which alleles enter gametes, and dominance changes only the phenotype',
              'Epistasis involves alleles of different genes, and dominance involves alleles of a single gene',
              'Epistasis involves blending two phenotypes, and dominance hides one phenotype fully'
            ],
            correctAnswer: 2,
            explanation: 'Dominance compares the two alleles of a single gene, while epistasis is one gene altering the effect of a different gene. Neither process changes which alleles reach gametes, and epistasis masks rather than blends.'
          }
        ]
      }
    }
  ]
}
