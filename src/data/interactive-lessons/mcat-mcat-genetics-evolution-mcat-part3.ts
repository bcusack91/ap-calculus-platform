export const mcatGeneticsPart3Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge3-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 3 of 7 — Sex-Linked Inheritance & Pedigrees**

### X-Linked Inheritance

- Males (XY) have only ONE X chromosome → they are **hemizygous** for X-linked genes
- X-linked recessive diseases affect males more often (no second X to mask the allele)
- Carrier females ($X^AX^a$) pass the recessive allele to ~50% of their sons
- A father transmits his single X to **all** daughters and his Y to **all** sons → **no male-to-male X-linked transmission**

### Common X-Linked Recessive Diseases

- Color blindness
- Hemophilia A and B
- Duchenne muscular dystrophy
- G6PD deficiency

### Pedigree Analysis

Key patterns to recognize:

**Autosomal Dominant**: Affected individuals in every generation; males and females affected roughly equally; two unaffected parents do not produce affected children.

**Autosomal Recessive**: Can skip generations; often appears in consanguineous (related) matings; carrier $\\times$ carrier gives a 25% affected risk.

**X-Linked Recessive**: Mostly males affected; a carrier mother → ~50% of sons affected; NO male-to-male transmission.

**X-Linked Dominant**: Affected fathers pass the trait to ALL daughters and NO sons; more females affected overall.

### MCAT Pedigree Strategy

1. Look for male-to-male transmission → if present, the trait is **NOT** X-linked.
2. Does the trait skip generations? → if yes, it is likely **recessive**.
3. Count affected males vs. females → a strong male excess suggests **X-linked recessive**.
4. Two unaffected parents with an affected child → the trait is **recessive** (and the parents are carriers).`
    },
    {
      id: 'ge3-worked',
      type: 'text' as const,
      content: `### Worked Example — Carrier Risk for Hemophilia

**Problem.** Hemophilia A is X-linked recessive ($X^h$). A phenotypically normal woman's brother and father both have hemophilia, but she herself does not. She marries an unaffected man ($X^HY$). What is the probability that her **first son** has hemophilia?

**Step 1 — Determine the woman's carrier status.** Her father is affected ($X^hY$). A father gives his only X to every daughter, so she **must** have received $X^h$ from him. Since she is unaffected, her other X carries the normal allele. Therefore she is an **obligate carrier**: genotype $X^HX^h$, with probability **1** (not 1/2 — the affected father guarantees it).

**Step 2 — Set up the cross.** $X^HX^h$ (mother) $\\times$ $X^HY$ (father).

| | $X^H$ (from mom) | $X^h$ (from mom) |
|---|---|---|
| **$X^H$ (dad)** | $X^HX^H$ daughter | $X^HX^h$ carrier daughter |
| **Y (dad)** | $X^HY$ normal son | $X^hY$ affected son |

**Step 3 — Read off the sons.** Among sons (the two cells in the Y row), half are $X^HY$ (normal) and half are $X^hY$ (affected). So $P(\\text{son is affected}) = \\tfrac{1}{2}$.

**Conclusion.** Because the affected father makes the woman an obligate carrier, each son has a $\\tfrac{1}{2}$ chance of hemophilia. (If the question had asked the chance that her first *child* is an affected boy, you would multiply: $\\tfrac{1}{2}\\ \\text{male} \\times \\tfrac{1}{2}\\ \\text{affected} = \\tfrac{1}{4}$.)`
    },
    {
      id: 'ge3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Pedigrees** 🎯`,
      exercise: {
        questions: [
          {
            question: `A trait appears in a grandfather and his grandson through his daughter (who is unaffected). This is most consistent with:`,
            options: [`X-linked recessive — the daughter is a carrier`, `Autosomal dominant`, `Autosomal recessive`, `Mitochondrial inheritance`],
            correctAnswer: 0,
            explanation: `Grandfather ($X^aY$) → Daughter ($X^AX^a$, carrier) → Grandson ($X^aY$, affected). The trait skips the daughter because she has a normal X to compensate. This classic "skip a generation through a carrier daughter" pattern = X-linked recessive.`
          },
          {
            question: `In a pedigree, an affected father has only affected daughters and only unaffected sons; every daughter is affected. This pattern is characteristic of:`,
            options: [`X-linked dominant`, `X-linked recessive`, `Autosomal recessive`, `Y-linked (holandric)`],
            correctAnswer: 0,
            explanation: `In X-linked dominant inheritance, an affected father (one mutant X) passes that X to ALL daughters (so all are affected) and his Y to all sons (so none are affected). "All daughters affected, no sons" from an affected father is the signature of X-linked dominant.`
          },
          {
            question: `Which single observation, if present in a pedigree, immediately RULES OUT X-linked recessive inheritance?`,
            options: [`An affected father with an affected son (male-to-male transmission)`, `An affected mother with an affected son`, `A trait that skips a generation`, `More affected males than females`],
            correctAnswer: 0,
            explanation: `Fathers give their X only to daughters; sons get the Y. So an affected father cannot transmit an X-linked allele to a son. Observing father-to-son transmission of the trait rules out ALL X-linked patterns and points toward autosomal (or Y-linked) inheritance.`
          },
          {
            question: `Two unaffected parents have a daughter with an autosomal recessive disease. What are the parents' genotypes, and what is the recurrence risk for their next child?`,
            options: [`Both parents are carriers (Aa); recurrence risk = 1/4`, `Both parents are aa; recurrence risk = 1`, `One parent is AA, one is aa; recurrence risk = 0`, `Both parents are Aa; recurrence risk = 1/2`],
            correctAnswer: 0,
            explanation: `An affected (aa) child must inherit one recessive allele from each parent, and since both parents are unaffected they must each be heterozygous carriers (Aa). $Aa \\times Aa$ gives a 1/4 chance of an affected (aa) child for each pregnancy.`
          },
          {
            question: `Why are X-linked recessive conditions such as color blindness far more common in males than in females?`,
            options: [`Males are hemizygous — a single recessive allele on their one X is sufficient to produce the phenotype`, `The Y chromosome carries a duplicate disease allele`, `Females cannot inherit X-linked alleles`, `The conditions are actually autosomal in males only`],
            correctAnswer: 0,
            explanation: `A male has only one X, so any recessive allele on it is expressed (he is hemizygous). A female needs the recessive allele on BOTH X chromosomes to be affected, which is far less likely. Hence the strong male predominance of X-linked recessive disorders.`
          }
        ]
      }
    },
    {
      id: 'ge3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- X-linked recessive: mainly males affected, NO male-to-male transmission, carrier females; affected father makes daughters obligate carriers
- X-linked dominant: affected father → all daughters affected, no sons
- Autosomal recessive: can skip generations, 25% risk from two carrier parents
- Autosomal dominant: every generation, ~50% chance if one parent is affected
- Pedigree strategy: check for male-to-male transmission, generation skipping, and sex ratios`
    }
  ]
};
