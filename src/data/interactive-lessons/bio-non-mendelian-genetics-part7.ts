export const bioNonMendelianPart7Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-7-intro-p1',
      type: 'text' as const,
      content: `
## Non-Mendelian Genetics: Synthesis & AP Review

**Part 7 of 7 — Non-Mendelian Genetics: Synthesis & AP Review**

Every pattern in this topic keeps Mendel's core mechanism, the segregation of alleles during meiosis, but changes one of his simplifying assumptions: one gene per trait, two alleles, complete dominance, nuclear genes, or a phenotype set by genotype alone. This review puts the patterns side by side so you can identify them quickly from data.

### Pattern-Identification Table

| Pattern | What changes from Mendel | Signature in data | Classic example | Part |
|---|---|---|---|---|
| Incomplete dominance | Heterozygote is intermediate | 1 : 2 : 1 phenotypes; blended-looking middle class | Pink snapdragons | 1 |
| Codominance | Heterozygote shows both phenotypes | 1 : 2 : 1 phenotypes; both traits visible at once | Roan cattle; AB blood | 1 |
| Multiple alleles | Three or more alleles in the population | Several discrete classes; dominance series | ABO blood; rabbit coat | 2 |
| Polygenic | Many genes add to one trait | 2n + 1 classes; continuous bell curve | Height; skin color | 2 |
| Epistasis | One gene masks another | Modified ratio out of 16 (9 : 3 : 4, 9 : 7, 12 : 3 : 1) | Labrador coat; sweet pea | 3 |
| Pleiotropy | One gene affects many traits | Several unrelated symptoms track together | Sickle-cell; Marfan | 3 |
| X-linked | Gene on the X chromosome | Reciprocal crosses differ; results split by sex | Hemophilia; white-eyed flies | 4 |
| Non-nuclear | Gene in mitochondria or chloroplasts | Offspring match the mother; no Mendelian ratio | Mitochondrial disorders; variegated four-o'clocks | 4 |
| Environmental effects | Environment shapes expression | Same genotype, different phenotypes | Hydrangea; Siamese cat; turtle sex | 5 |

### A Decision Guide for Unknown Data

1. **Does the result depend on which parent had the trait?** If offspring match the mother, think organelle DNA. If the result splits by the sex of the offspring, think X-linkage.
2. **Do genetically identical individuals differ?** Then the environment is acting.
3. **How many phenotype classes are there?** Three classes from one cross point to incomplete dominance or codominance; examine the heterozygote to decide which.
4. **Do the counts fit sixteenths?** A ratio out of 16 means two independently assorting genes; merged classes mean epistasis.
5. **Is the variation continuous?** Many genes plus environment.
6. **Confirm with chi-square**, using df = categories − 1.
      `
    },
    {
      id: 'non-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Mixed Review — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'In one plant species, two heterozygotes produce 1 red : 2 pink : 1 white. In a second species, two heterozygotes produce 1 red : 2 red-and-white-spotted : 1 white. Which patterns do the two species show, in order?',
            options: [
              'Codominance, then incomplete dominance',
              'Incomplete dominance, then codominance',
              'Codominance in both of the species',
              'Epistasis, then incomplete dominance'
            ],
            correctAnswer: 1,
            explanation: 'A uniform pink heterozygote is intermediate, which is incomplete dominance, while red and white spots in one flower show both alleles fully expressed, which is codominance. Both give 1 : 2 : 1, so the heterozygote\'s appearance is what separates them, and a one-gene 1 : 2 : 1 ratio rules out epistasis.'
          },
          {
            question: 'A trait shows a bell-shaped distribution in a large population, and identical twins raised in different homes differ slightly in it. Which explanation fits best?',
            options: [
              'Many small-effect genes and the environment',
              'A single gene with several codominant alleles',
              'A mitochondrial gene sorted randomly among cells',
              'An X-linked gene expressed differently in each sex'
            ],
            correctAnswer: 0,
            explanation: 'Continuous, bell-shaped variation comes from many genes with small additive effects, and differences between genetically identical twins show the environment is also acting. One gene with several alleles gives a few discrete classes, and neither organelle inheritance nor X-linkage predicts a bell curve.'
          },
          {
            question: 'In a family pedigree, every child of an affected woman is affected, with severity that varies among the children, and no affected man has any affected children. Which mode of inheritance is most likely?',
            options: [
              'X-linked dominant inheritance',
              'Autosomal dominant inheritance',
              'Mitochondrial inheritance',
              'X-linked recessive inheritance'
            ],
            correctAnswer: 2,
            explanation: 'Mitochondria pass to every child through the egg but never through sperm, and random sorting of mutant mitochondria causes variable severity. An X-linked dominant father would pass the trait to all his daughters, and autosomal dominant traits pass from affected men as often as from affected women.'
          }
        ]
      }
    },
    {
      id: 'non-7-traps',
      type: 'text' as const,
      content: `
### The Traps AP Questions Set

| Trap | Why it is wrong | What to say instead |
|---|---|---|
| "A 1 : 2 : 1 ratio means incomplete dominance." | Codominance gives the same ratio. | Decide from the heterozygote: intermediate or both traits. |
| "Pink flowers have a pink allele." | Alleles do not blend; red and white return in the F2. | The pink plant is a red/white heterozygote. |
| "ABO is polygenic." | ABO is one gene with three alleles. | Multiple alleles = one gene; polygenic = many genes. |
| "Epistasis is a kind of dominance." | Dominance is between alleles of one gene. | Epistasis is one gene masking a different gene. |
| "A color-blind son got the allele from his father." | Fathers give sons a Y. | X-linked alleles in sons come from the mother. |
| "Mitochondrial traits are X-linked because they pass from mothers." | mtDNA is not on any chromosome of the nucleus. | Mitochondria are inherited through the egg's cytoplasm. |
| "Cold temperature mutated the rabbit's fur genes." | The DNA is unchanged; the enzyme's activity changed. | The environment changes gene expression or protein function. |
| "χ² below the critical value proves the hypothesis." | The test can only fail to reject. | The data are consistent with the hypothesis. |
| "df = 15 for a ratio out of 16." | df counts categories, not ratio parts. | df = phenotype categories − 1. |

### How This Topic Connects to the Rest of the Course

- **Evolution (Unit 7):** heterozygote advantage keeps the sickle-cell allele common where malaria is present; polygenic traits supply the continuous variation that directional and stabilizing selection act on; plasticity can itself be favored by selection.
- **Enzymes (Unit 3):** temperature-sensitive tyrosinase is a concrete case of enzyme structure depending on temperature.
- **Gene expression (Unit 6):** environmental effects work by changing which genes are expressed and how their products function.
- **Cell structure (Unit 2):** mitochondria and chloroplasts carry their own DNA, a clue to their endosymbiotic origin.
      `
    },
    {
      id: 'non-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Practice — Name the Pattern From the Observation
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The heterozygote\'s flowers are a uniform intermediate shade',
            options: ['Incomplete dominance', 'Codominance', 'Epistasis', 'Pleiotropy', 'Non-nuclear inheritance', 'Phenotypic plasticity']
          },
          {
            label: 'One mutant gene causes long limbs, eye problems and a weak aorta',
            options: ['Incomplete dominance', 'Codominance', 'Epistasis', 'Pleiotropy', 'Non-nuclear inheritance', 'Phenotypic plasticity']
          },
          {
            label: 'Seedlings always match the leaf color of the branch that bore the seed',
            options: ['Incomplete dominance', 'Codominance', 'Epistasis', 'Pleiotropy', 'Non-nuclear inheritance', 'Phenotypic plasticity']
          },
          {
            label: 'Cuttings of one plant grow different leaf shapes in water and in air',
            options: ['Incomplete dominance', 'Codominance', 'Epistasis', 'Pleiotropy', 'Non-nuclear inheritance', 'Phenotypic plasticity']
          },
          {
            label: 'A dihybrid F2 shows 9 purple : 7 white',
            options: ['Incomplete dominance', 'Codominance', 'Epistasis', 'Pleiotropy', 'Non-nuclear inheritance', 'Phenotypic plasticity']
          }
        ],
        correctAnswers: ['Incomplete dominance', 'Pleiotropy', 'Non-nuclear inheritance', 'Phenotypic plasticity', 'Epistasis'],
        hint1: 'Ask whether the observation involves one gene, two genes, organelles or the environment.',
        hint2: 'A trait that follows the seed-bearing (egg) parent points to chloroplast DNA.',
        hint3: 'Genetically identical cuttings that differ point to the environment, and a ratio out of 16 with merged classes points to two interacting genes.',
        explanation: 'An intermediate heterozygote is incomplete dominance; one gene with several effects is pleiotropy; matching the seed-bearing branch is non-nuclear (chloroplast) inheritance; identical cuttings that differ by surroundings show phenotypic plasticity; and a 9 : 7 dihybrid ratio is epistasis.'
      }
    },
    {
      id: 'non-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Mixed Review — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'A man with type AB blood and normal color vision has a son with a woman who has type O blood and is a carrier for red-green color blindness. What is the probability that the son has type A blood and is color-blind?',
            options: [
              '1/8',
              '1/4',
              '1/2',
              '1/16'
            ],
            correctAnswer: 1,
            explanation: 'The son is $I^{A}i$ or $I^{B}i$ with equal chance, so P(type A) = 1/2, and he receives his only X from his carrier mother, so P(color-blind) = 1/2. The events are independent, giving 1/2 × 1/2 = 1/4; the sex of the child is already given, so no extra factor of 1/2 is needed.'
          },
          {
            question: 'Which statement about the patterns covered in this topic is accurate?',
            options: [
              'In incomplete dominance, alleles fuse in the heterozygote and cannot be recovered later',
              'In codominance, one of the two alleles is silenced at random in each heterozygous cell',
              'In incomplete dominance and codominance, the two alleles still segregate normally into gametes',
              'In epistasis, the masked gene is deleted from the genome of the offspring that show it'
            ],
            correctAnswer: 2,
            explanation: 'Both patterns change only how genotype maps to phenotype; the alleles remain intact and separate into gametes, which is why the homozygous phenotypes reappear in the F2. Alleles do not fuse, codominant heterozygotes express both alleles in their cells, and a masked gene is still present in the genome.'
          },
          {
            question: 'Two black Labrador retrievers have several litters that include black, chocolate and yellow puppies. What are the genotypes of the two parents?',
            options: [
              'BBEe × BbEe',
              'BbEE × BbEe',
              'BbEe × BBEE',
              'BbEe × BbEe'
            ],
            correctAnswer: 3,
            explanation: 'Chocolate puppies (bb) require each parent to carry b, and yellow puppies (ee) require each parent to carry e, so both black parents must be BbEe. Any parent that is BB or EE could not produce both chocolate and yellow offspring.'
          }
        ]
      }
    },
    {
      id: 'non-7-wrapup',
      type: 'text' as const,
      content: `
### Final Checklist

Before the exam, make sure you can:

- Explain why incomplete dominance and codominance give 1 : 2 : 1 and tell them apart from the heterozygote.
- Solve ABO and dominance-series crosses, and count genotypes for $n$ alleles as $\\frac{n(n+1)}{2}$.
- Count polygenic classes as $2n + 1$ and explain why polygenic traits form a bell curve.
- Recognize 9 : 3 : 4, 9 : 7 and 12 : 3 : 1 as two interacting genes, and contrast epistasis with pleiotropy.
- Predict X-linked crosses from the sex of the parent carrying the allele, and use reciprocal crosses as evidence.
- Explain maternal, non-Mendelian inheritance of mitochondrial and chloroplast traits.
- Give examples of one genotype producing different phenotypes in different environments, and design an experiment that holds genotype constant.
- Run a chi-square test with the correct degrees of freedom and state the conclusion correctly.
      `
    }
  ]
}
