export const bioNonMendelianPart6Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-6-intro-p1',
      type: 'text' as const,
      content: `
## Non-Mendelian Genetics: Problem-Solving Workshop

**Part 6 of 7 — Non-Mendelian Genetics: Problem-Solving Workshop**

The CED frames this topic around one skill: **recognize when observed phenotypic ratios differ from Mendelian predictions, test the difference statistically, and explain it with a mechanism**. This workshop practices that full sequence on the patterns from Parts 1–5.

### The five-step workflow

1. **Count the phenotype classes and the total.** Three classes cannot fit 3 : 1; four classes in sixteenths suggest two genes.
2. **Look for clues before calculating.** Do the sexes differ? Do reciprocal crosses differ? Is the heterozygote distinct?
3. **State a hypothesis and its expected ratio**, then convert it to expected counts using the observed total.
4. **Run a chi-square test.**
5. **Conclude in words**, and if you reject a hypothesis, propose a better one.

### Chi-square quick reference

The step-by-step chi-square tutorial is in Mendelian Genetics. The essentials:

$$\\chi^2 = \\sum \\frac{(o - e)^2}{e}$$

- **Null hypothesis:** the observed counts fit the proposed ratio, and any differences are due to chance.
- **Degrees of freedom:** df = number of phenotype categories − 1.
- **Decision at p = 0.05:** if $\\chi^2$ is **greater** than the critical value, reject the null hypothesis. If it is **less**, fail to reject it.

| df | 1 | 2 | 3 |
|---|---|---|---|
| Critical value (p = 0.05) | 3.84 | 5.99 | 7.81 |

"Fail to reject" is not "prove." A small $\\chi^2$ means the data are consistent with the hypothesis, not that the hypothesis is certainly true.
      `
    },
    {
      id: 'non-6-worked1',
      type: 'text' as const,
      content: `
### Worked Problem 1: Is It 3 : 1 or 9 : 7?

**Data.** Two true-breeding white-flowered strains are crossed. All F1 plants are purple. The F1 are self-pollinated, giving **178 purple** and **142 white** F2 plants (total 320).

**Step 1 — Clue.** Two white parents giving purple offspring suggests the parents are blocked at different genes (Part 3). Still, a student might first try a single gene, 3 : 1.

**Step 2 — Test 3 : 1.** Expected: 320 × 3/4 = 240 purple and 320 × 1/4 = 80 white.

| Class | o | e | (o − e)² / e |
|---|---|---|---|
| Purple | 178 | 240 | 3,844 / 240 = 16.02 |
| White | 142 | 80 | 3,844 / 80 = 48.05 |

$\\chi^2$ = 64.07 with df = 1. Since 64.07 > 3.84, **reject** 3 : 1.

**Step 3 — Test 9 : 7.** Expected: 320 × 9/16 = 180 purple and 320 × 7/16 = 140 white.

| Class | o | e | (o − e)² / e |
|---|---|---|---|
| Purple | 178 | 180 | 4 / 180 = 0.022 |
| White | 142 | 140 | 4 / 140 = 0.029 |

$\\chi^2$ = 0.051 with df = 1. Since 0.051 is less than 3.84, **fail to reject** 9 : 7.

**Step 4 — Conclude.** The data are consistent with two genes acting in sequence in one pigment pathway (duplicate recessive epistasis): a plant must have a dominant allele at both genes to make purple pigment.
      `
    },
    {
      id: 'non-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Running the Test
      `,
      exercise: {
        questions: [
          {
            question: 'A cross is predicted to give black, chocolate and yellow puppies in a 9 : 3 : 4 ratio. How many degrees of freedom should the chi-square test use?',
            options: [
              '3',
              '2',
              '15',
              '1'
            ],
            correctAnswer: 1,
            explanation: 'There are three phenotype categories, so df = 3 − 1 = 2. The numbers in the ratio itself, which sum to 16, do not set the degrees of freedom; only the count of categories does.'
          },
          {
            question: 'A student tests a 1 : 2 : 1 hypothesis for red, pink and white flowers and calculates χ² = 4.6. At p = 0.05, which conclusion is correct?',
            options: [
              'Reject the hypothesis, as 4.6 is greater than 3.84',
              'Fail to reject the hypothesis, as 4.6 is less than 5.99',
              'Reject the hypothesis, as 4.6 is less than 5.99',
              'Fail to reject the hypothesis, as 4.6 is greater than 3.84'
            ],
            correctAnswer: 1,
            explanation: 'Three categories give df = 2, so the critical value is 5.99, and 4.6 falls below it; the deviation is small enough to be due to chance. Comparing with 3.84 uses the df = 1 value by mistake.'
          }
        ]
      }
    },
    {
      id: 'non-6-worked2',
      type: 'text' as const,
      content: `
### Worked Problem 2: Confirming Incomplete Dominance

**Data.** Pink × pink snapdragons give **52 red, 95 pink, 53 white** (total 200).

**Step 1 — Clue.** Three phenotype classes with the heterozygote distinct, so 3 : 1 is impossible. Hypothesis: one gene with incomplete dominance, 1 : 2 : 1.

**Step 2 — Expected.** 50 red, 100 pink, 50 white.

**Step 3 — Chi-square.**

| Class | o | e | (o − e)² / e |
|---|---|---|---|
| Red | 52 | 50 | 4 / 50 = 0.08 |
| Pink | 95 | 100 | 25 / 100 = 0.25 |
| White | 53 | 50 | 9 / 50 = 0.18 |

$\\chi^2$ = 0.51 with df = 2. Since 0.51 is less than 5.99, **fail to reject** the 1 : 2 : 1 hypothesis.

**Step 4 — What if it had been rejected?** A large $\\chi^2$ is a prompt to look for a different mechanism: a second gene (a ratio out of 16), linkage between genes (Chromosomal Inheritance Patterns), sex linkage, or an environmental effect on the phenotype.
      `
    },
    {
      id: 'non-6-boxes',
      type: 'input-boxes' as const,
      content: `
### Practice — Test a 9 : 3 : 4 Ratio

Two Labradors heterozygous at both the B and E genes have, over many litters, **85 black, 33 chocolate and 42 yellow** puppies (total 160). Test the 9 : 3 : 4 hypothesis.

**1)** Expected number of black puppies
**2)** Degrees of freedom
**3)** χ² value, rounded to two decimal places
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['90', '2', '0.68'],
        hint1: 'One sixteenth of 160 is 10, so the expected counts are 90, 30 and 40.',
        hint2: 'There are three phenotype categories.',
        hint3: 'Add 25/90 + 9/30 + 4/40.',
        explanation: 'Expected counts are 90 black, 30 chocolate and 40 yellow. With df = 2, χ² = 0.278 + 0.300 + 0.100 = 0.68, well below 5.99, so the data are consistent with recessive epistasis.'
      }
    },
    {
      id: 'non-6-worked3',
      type: 'text' as const,
      content: `
### Worked Problem 3: A Free-Response Style Data Set

**Data.** A new recessive-looking body color, "pale," appears in a fruit fly stock. Researchers perform reciprocal crosses with true-breeding flies.

| Cross | Parents | F1 females | F1 males |
|---|---|---|---|
| 1 | Pale females × wild-type males | 102 wild type | 98 pale |
| 2 | Wild-type females × pale males | 105 wild type | 97 wild type |

The F1 flies of Cross 2 are then mated with each other. Their offspring are 200 wild-type females, 104 wild-type males and 96 pale males.

**(a) Identify the dominant phenotype.** Wild type. In Cross 2, all F1 flies are wild type even though every one received a pale allele from a parent.

**(b) Propose and justify a mode of inheritance.** X-linked recessive. The reciprocal crosses give different results, and in Cross 1 every son matches his pale mother while every daughter is wild type. Sons receive their only X chromosome from their mother, so all sons of pale mothers are pale, while daughters also receive a wild-type X from their father.

**(c) Predict the result of mating the Cross 1 F1 flies with each other.** The F1 are $X^{+}X^{p}$ females and $X^{p}Y$ males. Daughters are $\\frac{1}{2}$ wild type and $\\frac{1}{2}$ pale; sons are $\\frac{1}{2}$ wild type and $\\frac{1}{2}$ pale, giving equal numbers in all four sex and color classes.

**(d) Test the F2 males from Cross 2 against a 1 : 1 ratio.** Expected 100 : 100. $\\chi^2$ = 16/100 + 16/100 = 0.32 with df = 1. Since 0.32 is less than 3.84, fail to reject. The data support X-linked recessive inheritance.

> **AP Connection:** Free-response scoring rewards a claim, specific evidence from the data ("all 98 F1 males in Cross 1 were pale") and reasoning that names the mechanism ("males are hemizygous and receive their X from their mother"). A correct mode of inheritance with no cited data usually earns only part of the credit.
      `
    },
    {
      id: 'non-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Choosing the Pattern From Data
      `,
      exercise: {
        questions: [
          {
            question: 'A true-breeding white-fruited squash is crossed with a true-breeding green-fruited squash. The F1 are white, and the F2 contains 241 white, 59 yellow and 20 green plants. Which hypothesis should be tested first?',
            options: [
              'Recessive epistasis with a 9 : 3 : 4 ratio',
              'Incomplete dominance with a 1 : 2 : 1 ratio',
              'Dominant epistasis with a 12 : 3 : 1 ratio',
              'Duplicate recessive epistasis with a 9 : 7 ratio'
            ],
            correctAnswer: 2,
            explanation: 'The total is 320, so one sixteenth is 20, and the counts convert to about 12 : 3 : 1, the dominant epistasis ratio. A 9 : 7 ratio needs only two classes, and the counts are far from both 9 : 3 : 4 and 1 : 2 : 1.'
          },
          {
            question: 'A chi-square test of a 3 : 1 hypothesis gives χ² = 64.1 with one degree of freedom. Which conclusion is most appropriate?',
            options: [
              'The data fit 3 : 1 well, as a large χ² shows a close match',
              'The data prove that two genes interact to give a 9 : 7 ratio',
              'The data vary too much for any conclusion to be drawn from them',
              'The data differ from 3 : 1 by more than chance, so a new model is needed'
            ],
            correctAnswer: 3,
            explanation: 'A value of 64.1 is far above the critical value of 3.84, so the deviation is too large to be due to chance and the 3 : 1 hypothesis is rejected. A large χ² signals a poor fit, rejecting one model does not prove a specific alternative, and the test exists precisely to draw conclusions from variable data.'
          },
          {
            question: 'An AP free-response question asks for the strongest evidence that a fruit fly trait is X-linked. Which observation should be cited?',
            options: [
              'Reciprocal crosses give results that differ by sex of offspring',
              'Crosses in both directions give identical results',
              'Affected flies appear in every generation of the stock',
              'The F2 fits a 3 : 1 ratio when both sexes are combined'
            ],
            correctAnswer: 0,
            explanation: 'X-linked genes give different results depending on which parent carries the allele, and the difference appears between sons and daughters. Identical reciprocal results indicate an autosomal gene, appearing in every generation suggests dominance rather than location, and a pooled 3 : 1 ratio hides the sex difference that reveals X-linkage.'
          }
        ]
      }
    }
  ]
}
