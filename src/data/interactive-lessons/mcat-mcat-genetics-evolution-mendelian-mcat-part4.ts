export const mcatMendelianPart4Data = {
  topicSlug: 'mcat-genetics-evolution-mendelian-mcat',
  sections: [
    {
      id: 'men4-intro',
      type: 'text' as const,
      content: `# Mendelian Genetics — Deep Dive

**Part 4 of 4 — MCAT Integration: When Ratios Go Wrong**

### The MCAT's Favorite Genetics Passage

A typical passage gives you a cross, an expected Mendelian ratio, and data that DON'T fit. Your job is to name the modifier. Memorize this diagnostic table:

| Observed deviation | Likely explanation |
|--------------------|--------------------|
| $2:1$ instead of $3:1$ in a monohybrid cross | **Recessive lethal**: homozygous dominant (or homozygous mutant) class dies (e.g., mouse yellow-coat $A^Y$) |
| $9:3:4$ instead of $9:3:3:1$ | **Recessive epistasis**: aa at one locus masks the other gene |
| $9:7$ | **Duplicate recessive (complementary genes)**: recessive homozygosity at either locus blocks the pathway |
| Three phenotypes ($1:2:1$) from a monohybrid cross | **Incomplete dominance** (blended intermediate) or **codominance** (both expressed) |
| Fewer affected individuals than predicted | **Incomplete penetrance** — genotype present, phenotype not always expressed |
| Same genotype, variable severity | **Variable expressivity** |
| Trait ratio differs between sons and daughters | **X-linkage** |

### Incomplete Dominance vs. Codominance

- **Incomplete dominance**: heterozygote is intermediate (red $\\times$ white snapdragons → pink). $RR : Rr : rr$ = red : pink : white $= 1:2:1$
- **Codominance**: heterozygote expresses BOTH alleles fully (ABO blood type $I^AI^B$ = AB; sickle trait shows both HbA and HbS)
- ABO is doubly instructive: $I^A$ and $I^B$ are codominant with each other, and both are dominant to $i$ — a **multiple allele** system with 6 genotypes and 4 phenotypes

### Testing Fit: The Chi-Square Idea

The MCAT will not make you look up critical values, but you must reason with the statistic:

$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$

- $O$ = observed count, $E$ = expected count under the Mendelian hypothesis
- Degrees of freedom = (number of phenotype classes) $- 1$
- Large $\\chi^2$ (p below 0.05) → reject the hypothesized ratio; small $\\chi^2$ → data are consistent with it
- Rejecting $9:3:3:1$ does NOT tell you the correct model — it invites a follow-up hypothesis (linkage? epistasis? lethality?)

### Passage-Reading Tactics

1. **Count the classes first.** Three phenotypes from a "simple dominant" cross means the model in the passage stem is wrong.
2. **Convert counts to fractions** and compare with the canonical ratios above.
3. **Check totals.** A missing quarter of the offspring is a lethality clue.
4. **Sex-split the data.** Any male/female difference points to the X chromosome.`
    },
    {
      id: 'men4-worked',
      type: 'text' as const,
      content: `### Worked Example — Diagnosing a Modified Ratio

**Passage-style problem.** Researchers cross two true-breeding white-flowered plant lines (Line 1 $\\times$ Line 2). All F1 are purple. Selfing the F1 yields an F2 of 178 purple : 142 white — approximately $9:7$.

**Step 1 — Two white parents give purple F1: what does that mean?** Each line must be blocked at a *different* step of the pigment pathway (Line 1 = $ccPP$, Line 2 = $CCpp$). The F1 ($CcPp$) has one functional allele of each gene, restoring the pathway. This is **complementation** — the classic evidence for TWO genes.

**Step 2 — Explain $9:7$.** In the F2 of $CcPp \\times CcPp$:
- $C\\_P\\_$ (functional at both steps) $= \\tfrac{9}{16}$ → purple
- $C\\_pp$, $ccP\\_$, and $ccpp$ $= \\tfrac{3+3+1}{16} = \\tfrac{7}{16}$ → white (pathway broken at either step)

So the $9:3:3:1$ collapses to $9:7$: **duplicate recessive epistasis** in a two-step biosynthetic pathway.

**Step 3 — Predict a test cross.** $CcPp \\times ccpp$ → $\\tfrac{1}{4} CcPp$ purple : $\\tfrac{3}{4}$ white ($1:3$). Making a confirmable prediction from your model is exactly what an MCAT experimental follow-up question asks for.

**Distinguish from recessive epistasis ($9:3:4$):** there, one gene's recessive genotype masks the second gene (e.g., albino masking coat color), leaving three phenotype classes, not two.`
    },
    {
      id: 'men4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration — Modified Ratios** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cross of two yellow-coated mice yields 62 yellow and 31 non-yellow pups ($2:1$). Repeated crosses never produce a true-breeding yellow line. The best explanation is:`,
            options: [`Yellow is recessive`, `Yellow allele is dominant for coat color but homozygous lethal`, `Incomplete penetrance of the yellow allele`, `The yellow allele is X-linked`],
            correctAnswer: 1,
            explanation: `Expected $3:1$ becomes $2:1$ when the homozygous $A^YA^Y$ class dies in utero: survivors are $2\\ A^Ya$ (yellow) $: 1\\ aa$ (non-yellow). The absence of true-breeding yellows confirms that all yellow mice are heterozygotes. This is the classic recessive-lethal/dominant-visible allele.`
          },
          {
            question: `In snapdragons, a red $\\times$ white cross gives all pink F1, and pink $\\times$ pink gives 1 red : 2 pink : 1 white. If instead each heterozygote had displayed BOTH red and white patches, the allele relationship would be called:`,
            options: [`Complete dominance`, `Epistasis`, `Codominance`, `Incomplete dominance`],
            correctAnswer: 2,
            explanation: `Intermediate blending (pink) = incomplete dominance; simultaneous full expression of both alleles (patches, or AB blood type expressing both A and B antigens) = codominance. Both produce a $1:2:1$ phenotype ratio, so the heterozygote's APPEARANCE, not the ratio, distinguishes them.`
          },
          {
            question: `A man with type AB blood and a woman with type O blood have children. Which blood types are possible among their children?`,
            options: [`Only A or B`, `Only AB`, `A, B, AB, or O`, `Only O`],
            correctAnswer: 0,
            explanation: `Dad is $I^AI^B$, mom is $ii$. Each child gets $I^A$ or $I^B$ from dad and $i$ from mom: $I^Ai$ (type A) or $I^Bi$ (type B). AB is impossible (mom cannot give $I^A$ or $I^B$) and O is impossible (dad cannot give $i$).`
          },
          {
            question: `A dihybrid F2 shows 9 agouti : 3 black : 4 albino mice. The albino class combines what would have been the "3" and "1" categories. This pattern indicates:`,
            options: [`Recessive epistasis — cc blocks pigment production regardless of the agouti/black genotype`, `Independent assortment with a recessive lethal`, `Codominance between the agouti and albino alleles`, `X-linked inheritance of coat color`],
            correctAnswer: 0,
            explanation: `$9:3:4$ is the signature of recessive epistasis: homozygous $cc$ (no pigment at all) masks whatever the second locus (agouti vs. black) specifies, merging the $ccB\\_$ (3) and $ccbb$ (1) classes into one albino class of 4. The pigment-production gene is epistatic to the pigment-pattern gene.`
          },
          {
            question: `A researcher hypothesizes a $9:3:3:1$ ratio for 320 F2 offspring (expected 180:60:60:20) but observes 152:88:62:18, giving a large chi-square value with p below 0.01. The most appropriate conclusion is:`,
            options: [`The data confirm independent assortment`, `The expected ratio should be recalculated with more degrees of freedom`, `Reject the 9:3:3:1 hypothesis and test an alternative such as linkage between the two genes`, `The sample size is too small to conclude anything`],
            correctAnswer: 2,
            explanation: `A significant chi-square means the observed data are unlikely under the hypothesized ratio — reject $9:3:3:1$. The statistic does not identify the true model; the sensible next step is a specific alternative hypothesis (here, an excess of two classes suggests linkage) tested with a new cross. With n = 320, sample size is ample; df is fixed at $4 - 1 = 3$ by the number of classes.`
          }
        ]
      }
    },
    {
      id: 'men4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Ratio diagnostics: $2:1$ = homozygous lethal; $9:3:4$ = recessive epistasis; $9:7$ = duplicate recessive/complementation; $1:2:1$ phenotypes = incomplete dominance or codominance
- Two mutant parents + wild-type offspring = complementation → the mutations are in DIFFERENT genes
- ABO: codominant $I^A$/$I^B$, both dominant to $i$ — multiple alleles, 4 phenotypes
- Penetrance = whether the phenotype appears at all; expressivity = how strongly it appears
- $\\chi^2 = \\sum (O-E)^2/E$ with df = classes $- 1$: a significant value rejects the ratio but does not name the correct model — design the next cross`
    }
  ]
};
