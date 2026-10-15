export const bioNonMendelianPart4Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-4-intro-p1',
      type: 'text' as const,
      content: `
## Sex-Linked Traits

**Part 4 of 7 — Sex-Linked Traits**

Mendel's crosses gave the same result no matter which parent carried an allele. Two kinds of genes break that symmetry: genes on the **sex chromosomes** and genes in **mitochondria and chloroplasts**. For both, the sex of the parent carrying the allele changes the prediction.

(How XX/XY and other sex-determination systems work is covered in Chromosomal Inheritance Patterns. Here the goal is to **predict and recognize** sex-linked and non-nuclear patterns.)

### Why X-linked genes behave differently

In humans and fruit flies, females are XX and males are XY. The Y chromosome carries few genes, so for nearly every X-linked gene:

- A female has **two** copies and can be homozygous or heterozygous.
- A male has **one** copy. He is **hemizygous**, so whatever allele is on his single X is expressed, even if it is recessive.
- A son always gets his X from his **mother** (his father gives the Y).
- A daughter gets one X from **each** parent, so she always receives her father's only X.

**Notation.** Write the allele as a superscript on the X: $X^{H}$ (normal clotting) and $X^{h}$ (hemophilia A). A male is $X^{H}Y$ or $X^{h}Y$.

### Predicting From the Sex of the Parent

| Cross | Daughters | Sons |
|---|---|---|
| X-linked recessive: affected father $X^{a}Y$ × normal mother $X^{A}X^{A}$ | All carriers ($X^{A}X^{a}$), none affected | None affected, none carry it |
| X-linked recessive: affected mother $X^{a}X^{a}$ × normal father $X^{A}Y$ | All carriers | **All affected** |
| X-linked recessive: carrier mother $X^{A}X^{a}$ × normal father | Half carriers, none affected | **Half affected** |
| X-linked dominant: affected father $X^{A}Y$ × unaffected mother | **All affected** | None affected |
| Autosomal (either kind) | Same result whichever parent carries the allele | Same |

Red-green color blindness, hemophilia A and Duchenne muscular dystrophy are X-linked recessive. Hypophosphatemic (vitamin D-resistant) rickets is a rare X-linked dominant disorder.
      `
    },
    {
      id: 'non-4-reciprocal',
      type: 'text' as const,
      content: `
### Worked Example 1: Reciprocal Crosses Reveal X-Linkage

A **reciprocal cross** repeats a cross with the sexes of the two phenotypes switched. For an autosomal gene, both directions give the same offspring. For an X-linked gene, they do not.

**Problem.** In *Drosophila*, red eyes ($X^{W}$) are dominant to white eyes ($X^{w}$). Predict the F1 of both directions using true-breeding flies.

**Cross A — red-eyed female × white-eyed male:** $X^{W}X^{W}$ × $X^{w}Y$

|  | $X^{w}$ | $Y$ |
|---|---|---|
| $X^{W}$ | $X^{W}X^{w}$ red female | $X^{W}Y$ red male |

All F1 flies have red eyes.

**Cross B — white-eyed female × red-eyed male:** $X^{w}X^{w}$ × $X^{W}Y$

|  | $X^{W}$ | $Y$ |
|---|---|---|
| $X^{w}$ | $X^{W}X^{w}$ red female | $X^{w}Y$ white male |

All daughters are red-eyed and **all sons are white-eyed**.

**Interpretation.** The two directions disagree, and in Cross B the sons resemble their mother while the daughters resemble their father. This **criss-cross pattern** happens because sons receive their only X from the mother. Different reciprocal results, with the difference split by sex of offspring, point to X-linkage.
      `
    },
    {
      id: 'non-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predicting Sex-Linked Crosses
      `,
      exercise: {
        questions: [
          {
            question: 'A man with an X-linked recessive disorder has children with a woman who is homozygous for the normal allele. Which prediction about their children is correct?',
            options: [
              'Half of the sons will be affected, and half of the daughters carriers',
              'All daughters will be carriers, and none of the sons will be affected',
              'All sons will be affected, and all daughters will be carriers',
              'No children will carry the allele, since it skips a generation'
            ],
            correctAnswer: 1,
            explanation: 'Every daughter receives the father\'s only X, which carries the allele, while every son receives his father\'s Y and his mother\'s normal X. Affected sons would need the allele from their mother, and the allele is passed on even though it is not expressed.'
          },
          {
            question: 'True-breeding fruit flies are crossed in both directions. Wild-type females × mutant males give all wild-type offspring. Mutant females × wild-type males give wild-type daughters and mutant sons. Which explanation fits the data?',
            options: [
              'A recessive mutant allele on an autosome',
              'A recessive mutant allele on the X chromosome',
              'A mutation in mitochondrial DNA from the egg',
              'A dominant mutant allele on an autosome'
            ],
            correctAnswer: 1,
            explanation: 'Sons get their only X from the mother, so mutant mothers give mutant sons, while daughters also get the father\'s wild-type X and are wild type. An autosomal allele would give the same result in both directions, and a mitochondrial mutation would make all offspring of mutant mothers mutant, daughters included.'
          }
        ]
      }
    },
    {
      id: 'non-4-boxes',
      type: 'input-boxes' as const,
      content: `
### Practice — Hemophilia Probabilities

A woman with normal blood clotting had a father with hemophilia A (X-linked recessive). She and a man with normal clotting plan to have children. Give each answer as a decimal.

**1)** Probability that a son of theirs has hemophilia
**2)** Probability that a daughter of theirs has hemophilia
**3)** Probability that their first child is a son with hemophilia
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '0', '0.25'],
        hint1: 'Her father gave her his only X, which carried the allele, so she is $X^{H}X^{h}$.',
        hint2: 'Daughters receive the father\'s $X^{H}$, so none can be $X^{h}X^{h}$.',
        hint3: 'For question 3, multiply P(son) by P(son is affected): 0.5 × 0.5.',
        explanation: 'She is a carrier, so each son has a 0.5 chance of receiving $X^{h}$. Daughters always receive their father\'s $X^{H}$, giving 0. For a first child, P(son) = 0.5 and P(affected | son) = 0.5, so P(affected son) = 0.25.'
      }
    },
    {
      id: 'non-4-pedigrees',
      type: 'text' as const,
      content: `
### Pedigree Signatures

Pedigree-reading basics are in Mendelian Genetics. These are the clues that point to, or rule out, a sex-linked or non-nuclear pattern:

| Pattern | Typical signature | Clue that rules it out |
|---|---|---|
| X-linked recessive | Mostly males affected; affected males usually have unaffected parents; passes from an affected man through his carrier daughters to her sons | Father-to-son transmission; an affected daughter whose father is unaffected |
| X-linked dominant | Affected father has **all** daughters affected and no sons affected; more females than males affected | An affected father with an unaffected daughter |
| Y-linked | Only males; passes from father to **every** son | Any affected female |
| Mitochondrial | Passed by affected mothers to sons and daughters; **never** passed on by affected fathers; severity often varies | An affected father with an affected child (when the mother is unaffected) |

> **AP Connection:** When a free-response question asks you to justify a mode of inheritance from a pedigree, cite a specific individual: "Individual II-3, an affected male, has an affected son, so the trait is not X-linked, because a son receives his father's Y chromosome."

### Non-Nuclear Inheritance: Mitochondria and Chloroplasts

Mitochondria and chloroplasts contain their own small, circular DNA. Two facts make organelle-encoded traits non-Mendelian:

1. **Organelles are randomly assorted.** When a cell divides or makes gametes, its many mitochondria (and, in plants, chloroplasts) are split between the daughter cells at random. There is no pairing of homologs and no 50/50 segregation, so no Mendelian ratio is expected.
2. **In animals, mitochondrial DNA comes from the egg.** The egg supplies the cytoplasm and the mitochondria of the zygote; sperm mitochondria are not passed on. Mitochondrial traits are therefore **maternally inherited**.

A cell can hold a mixture of normal and mutant mitochondrial DNA. Because the mixture is divided at random, siblings can inherit different proportions of mutant mitochondria, which is why the severity of a mitochondrial disorder, such as Leber hereditary optic neuropathy, can vary within one family.

**Chloroplasts in plants.** In 1909, Carl Correns studied four-o'clock plants with green, white and variegated (green and white) branches. Seeds from flowers on a **white** branch gave white seedlings, which died once their seed reserves ran out, and seeds from a **green** branch gave green seedlings, **whatever branch the pollen came from**. Seeds from variegated branches gave green, white and variegated seedlings in unpredictable proportions. The trait followed the egg's cytoplasm, and the variable results came from random sorting of chloroplasts.
      `
    },
    {
      id: 'non-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Non-Nuclear Inheritance
      `,
      exercise: {
        questions: [
          {
            question: 'A woman has a disorder caused by a mutation in her mitochondrial DNA, and her husband does not. Which prediction about their children is best supported?',
            options: [
              'Only sons will inherit it, since sons get their X from her',
              'About half of the children will inherit it, as for an autosomal allele',
              'None will inherit it, since a zygote gets its mitochondria from the sperm',
              'Every child gets her mitochondria, but severity can vary among them'
            ],
            correctAnswer: 3,
            explanation: 'Mitochondria pass to all children through the egg, and random sorting of normal and mutant mitochondria lets severity differ among siblings. Mitochondrial DNA is not on the X chromosome, does not segregate 50/50 like a nuclear allele, and is not supplied by sperm.'
          },
          {
            question: 'Seeds are collected from a flower on an all-white branch of a variegated four-o\'clock plant. The flower was pollinated with pollen from an all-green branch. What will the seedlings be like?',
            options: [
              'White, matching the branch that provided the egg',
              'Green, matching the branch that provided the pollen',
              'Variegated, mixing plastids from both of the parents',
              'Three green to one white, by Mendelian segregation'
            ],
            correctAnswer: 0,
            explanation: 'Chloroplasts are inherited through the egg\'s cytoplasm in four-o\'clocks, so seeds from a white branch give white seedlings regardless of the pollen. The pollen contributes no chloroplasts, and organelle traits do not segregate in Mendelian ratios.'
          }
        ]
      }
    },
    {
      id: 'non-4-summary',
      type: 'text' as const,
      content: `
### Part 4 Summary

| Question to ask | X-linked | Mitochondrial or chloroplast | Autosomal |
|---|---|---|---|
| Do reciprocal crosses differ? | Yes, split by sex of offspring | Yes, offspring match the mother | No |
| Can an affected father pass it on? | To daughters only | No | To sons and daughters |
| Can an affected mother pass it on? | Yes, to sons and daughters | Yes, to all children | Yes |
| Mendelian ratios? | Yes, once sex is tracked | No, organelles assort randomly | Yes |

**Next:** Part 5 shows that even a fixed genotype does not fix the phenotype, because the environment shapes how genes are expressed.
      `
    }
  ]
}
