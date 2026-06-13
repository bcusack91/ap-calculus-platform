export const bioMendelianPart5Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp5-intro',
      type: 'text' as const,
      content: `
## Pedigree Analysis

**Part 5 of 7**

You cannot perform controlled crosses on humans, so geneticists trace traits through real families using a **pedigree** — a standardized family-tree diagram. The detective work of pedigree analysis is to read the pattern of affected and unaffected individuals across generations and deduce the **mode of inheritance**: is the trait autosomal or sex-linked? Dominant or recessive?

### Reading the symbols

| Symbol | Meaning |
|--------|---------|
| Square | Male |
| Circle | Female |
| Filled (shaded) | Affected (shows the trait) |
| Unfilled (open) | Unaffected |
| Horizontal line between two symbols | Mating pair |
| Vertical line down to a sibship | Offspring |
| Half-filled / dot inside | Known carrier (heterozygote) |

Generations are labeled with Roman numerals (I, II, III) from top to bottom; individuals within a generation are numbered left to right (I-1, I-2, II-1, ...).

> **The core logic:** every individual's phenotype constrains their possible genotypes, and every parent-offspring link constrains what alleles were passed on. Pedigree analysis is just the rules of Mendel and probability applied *backwards* — from observed phenotypes to inferred genotypes.
      `
    },
    {
      id: 'mgp5-modes',
      type: 'text' as const,
      content: `
### The Three Common Modes of Inheritance

Most AP pedigree questions ask you to distinguish among these three patterns. Learn the **diagnostic tells** for each.

**1. Autosomal Recessive** (e.g., cystic fibrosis, albinism)
- The trait can **skip generations** — two unaffected parents can have an affected child (both parents are carriers, *Aa* $\\times$ *Aa*).
- Affected individuals are *aa*; unaffected children of two carriers may be *AA* or *Aa*.
- Males and females are affected in roughly **equal numbers**.
- *Tell:* affected child from two unaffected parents → recessive. If those parents are *Aa* × *Aa*, watch for the trait reappearing after skipping a generation.

**2. Autosomal Dominant** (e.g., Huntington's disease, polydactyly)
- The trait appears in **every generation** — it does *not* skip (an affected child has at least one affected parent).
- Affected individuals carry at least one dominant allele (*Aa* or *AA*); unaffected individuals are *aa*.
- Males and females affected in roughly **equal numbers**.
- *Tell:* trait in every generation, no skipping, both sexes affected → dominant.

**3. X-Linked Recessive** (e.g., hemophilia, red-green color blindness)
- **Far more males** are affected than females (males are hemizygous: a single recessive allele on their one X is enough; written $X^a Y$).
- A trait can pass from an affected grandfather, through an unaffected **carrier daughter** ($X^A X^a$), to an affected grandson — the classic "skips to the maternal grandson" pattern.
- An affected female ($X^a X^a$) must have an affected father AND a carrier-or-affected mother.
- *Tell:* strong male bias, inheritance through unaffected mothers → X-linked recessive.

### A quick decision tree

| Question | If YES | If NO |
|----------|--------|-------|
| Do two unaffected parents have an affected child? | **Recessive** | Likely **dominant** (check no-skip) |
| Is the trait heavily biased toward males, passing through carrier mothers? | **X-linked recessive** | **Autosomal** |
| Does the trait appear in every generation with no skips? | Consistent with **dominant** | Consistent with **recessive** |
      `
    },
    {
      id: 'mgp5-worked-pedigree',
      type: 'text' as const,
      content: `
### Worked Example: Deducing the Mode of Inheritance

Consider this small pedigree. Generation I is the grandparents; Generation II are their children (and spouses); Generation III are the grandchildren.

| Individual | Sex | Affected? | Parents |
|------------|-----|-----------|---------|
| I-1 | Male | No | — |
| I-2 | Female | No | — |
| II-1 | Female | **Yes** | I-1 × I-2 |
| II-2 | Male | No | (married into family) |
| III-1 | Male | No | II-1 × II-2 |
| III-2 | Female | **Yes** | II-1 × II-2 |

**Step 1 — Recessive or dominant?** Individuals I-1 and I-2 are both **unaffected**, yet their daughter II-1 is **affected**. Two unaffected parents producing an affected child is the signature of a **recessive** trait (the parents must each be carriers). A dominant trait could not skip from unaffected parents to an affected child.

**Step 2 — Autosomal or X-linked?** Affected individual II-1 is **female**. If the trait were *X-linked recessive*, she would be $X^a X^a$ and would need an **affected father** — but her father I-1 is unaffected. That contradiction rules out X-linked recessive. So the trait is **autosomal recessive**.

**Step 3 — Assign genotypes (let the allele be *a*).**
- II-1 is affected → **aa**.
- I-1 and I-2 are unaffected but produced an *aa* daughter, so each contributed an *a* → both are **Aa** (carriers).

**Step 4 — A carrier-probability question.** III-1 is an **unaffected** son of II-1 (*aa*) and II-2. The affected daughter III-2 (*aa*) proves II-2 carries *a*, and since II-2 is unaffected he is **Aa**. So the cross producing III-1 is **aa × Aa**.

The *aa* × *Aa* cross gives offspring $\\frac{1}{2}$ *Aa* and $\\frac{1}{2}$ *aa*. But we are told III-1 is **unaffected**, so he cannot be *aa* — he must be *Aa*.

$P(\\text{III-1 is a carrier} \\mid \\text{unaffected}) = 1$

Every unaffected child of an *aa* parent is an obligate carrier (*Aa*), because the *aa* parent can only donate *a*. This conditional reasoning — restricting to the unaffected outcomes before computing the probability — is exactly the kind of step AP graders reward.
      `
    },
    {
      id: 'mgp5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Identifying the Pattern
      `,
      exercise: {
        questions: [
          {
            question: 'In a pedigree, a trait appears in every generation. Every affected child has at least one affected parent, and males and females are affected about equally. An affected father and unaffected mother have several children, roughly half affected and half not. Which mode of inheritance is most consistent?',
            options: [
              'Autosomal recessive',
              'Autosomal dominant',
              'X-linked recessive',
              'X-linked dominant'
            ],
            correctAnswer: 1,
            explanation: 'Appearing in every generation with no skipping, affected children always having an affected parent, and equal sex ratios are the hallmarks of autosomal dominant inheritance (the affected father is likely Aa, giving the ~1:1 split with an aa mother). Autosomal recessive (option A) is ruled out because the trait does not skip generations. X-linked recessive (option C) is ruled out by the equal sex ratio — it would show a strong male bias.'
          },
          {
            question: 'A pedigree shows a trait that affects 7 males and only 1 female across three generations. The single affected female has an affected father. Several unaffected mothers each have affected sons. What is the most likely mode of inheritance?',
            options: [
              'Autosomal dominant',
              'Autosomal recessive',
              'X-linked recessive',
              'Y-linked'
            ],
            correctAnswer: 2,
            explanation: 'The strong male bias plus transmission through unaffected (carrier) mothers to affected sons is the classic signature of X-linked recessive inheritance. The one affected female fits too: she is X^a X^a, which requires an affected father (confirmed) and a carrier/affected mother. Y-linked (option D) is wrong because a female is affected — Y-linked traits pass strictly father-to-son and never appear in females.'
          }
        ]
      }
    },
    {
      id: 'mgp5-carriers-chisq',
      type: 'text' as const,
      content: `
### Carriers, Conditional Probability, and a Note on Chi-Square

**Carrier reasoning is conditional reasoning.** A frequent AP twist: "An unaffected sibling of an affected (*aa*) child — what is the probability they are a carrier?" The parents must both be *Aa* (they produced an *aa* child). The *Aa* $\\times$ *Aa* cross gives offspring $\\frac{1}{4}$ *AA*, $\\frac{1}{2}$ *Aa*, $\\frac{1}{4}$ *aa*. But the sibling is **unaffected**, so we discard the *aa* outcome and renormalize over the surviving genotypes:

$P(Aa \\mid \\text{unaffected}) = \\frac{P(Aa)}{P(AA) + P(Aa)} = \\frac{\\tfrac{1}{2}}{\\tfrac{1}{4}+\\tfrac{1}{2}} = \\frac{\\tfrac{2}{4}}{\\tfrac{3}{4}} = \\frac{2}{3}$

The answer is $\\frac{2}{3}$, **not** $\\frac{1}{2}$ — because knowing the sibling is unaffected removes the *aa* possibility and re-weights the rest. Forgetting to condition (and answering $\\frac{1}{2}$) is a classic trap.

**Chi-square ($\\chi^2$) — testing whether data fit a Mendelian prediction.** When real offspring counts don't exactly match an expected ratio, a chi-square goodness-of-fit test asks whether the deviation is small enough to be chance:

$\\chi^2 = \\sum \\frac{(O-E)^2}{E}$

where *O* is the observed count and *E* the expected count for each class. A large $\\chi^2$ means the data deviate more than chance comfortably allows (the genetic model may be wrong); a small $\\chi^2$ means the data are consistent with the predicted ratio. (Part 7 walks through an actual chi-square computation — here just recognize the formula and its purpose.)
      `
    },
    {
      id: 'mgp5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carrier and Conditional Probability
      `,
      exercise: {
        questions: [
          {
            question: 'Two parents are both carriers for an autosomal recessive disorder (Aa × Aa). Their newborn daughter is phenotypically normal (unaffected). What is the probability that she is a carrier (Aa)?',
            options: [
              '$\\frac{1}{2}$',
              '$\\frac{2}{3}$',
              '$\\frac{1}{4}$',
              '$\\frac{3}{4}$'
            ],
            correctAnswer: 1,
            explanation: 'The Aa × Aa cross gives 1/4 AA : 1/2 Aa : 1/4 aa. Because the daughter is known to be unaffected, the aa outcome is eliminated, and we condition on the remaining genotypes: P(Aa | unaffected) = (1/2) / (1/4 + 1/2) = 2/3. The trap answer 1/2 (option A) is the UNconditional probability of Aa among all offspring; it forgets to remove the impossible aa case once we know she is unaffected.'
          },
          {
            question: 'A father is affected by an X-linked recessive disorder (X^a Y) and the mother is a non-carrier (X^A X^A). What is true of their children?',
            options: [
              'All sons will be affected',
              'All daughters will be affected',
              'Half the sons and half the daughters will be affected',
              'No children will be affected, but all daughters will be carriers'
            ],
            correctAnswer: 3,
            explanation: 'The father passes X^a to every daughter (making them all X^A X^a carriers) and his Y to every son. The mother contributes only X^A. So daughters are X^A X^a (unaffected carriers) and sons are X^A Y (unaffected) — no child is affected. Option A is the common trap: sons get their single X from the MOTHER (who is X^A X^A here), not from the affected father, so they cannot inherit his X^a allele.'
          }
        ]
      }
    },
    {
      id: 'mgp5-rarer-patterns',
      type: 'text' as const,
      content: `
### Two Rarer Patterns and a Key Inheritance Rule

Beyond the big three, AP pedigrees occasionally feature two less common modes. Knowing their tells lets you eliminate wrong answers quickly.

**X-Linked Dominant** (e.g., some forms of vitamin-D-resistant rickets)
- The trait appears in **every generation** (like autosomal dominant), but the transmission is **sex-biased in a telltale way**.
- An **affected father passes the trait to ALL of his daughters and NONE of his sons** — because he gives his X (carrying the dominant allele) to every daughter and his Y to every son.
- An affected heterozygous mother passes it to about half of each sex.
- *Tell:* affected father → all daughters affected, no sons affected. This father-to-all-daughters pattern is the unmistakable signature.

**Y-Linked (holandric)** (e.g., genes on the Y not shared with X)
- **Only males** are ever affected, and an **affected father transmits to ALL of his sons** and no daughters.
- *Tell:* strict father-to-son transmission, zero females affected, ever.

**The unifying rule for sex-linked traits:** a father gives his single X to **every daughter** and his Y to **every son**. A mother gives one of her two X's to **each child regardless of sex**. Internalizing this one sentence lets you predict any X-linked or Y-linked cross without memorizing separate cases.

| Mode | Both sexes affected? | Skips generations? | Diagnostic tell |
|------|----------------------|--------------------|-----------------|
| Autosomal recessive | Yes (≈ equal) | Yes | Affected child of two unaffected parents |
| Autosomal dominant | Yes (≈ equal) | No | Every generation; affected child always has affected parent |
| X-linked recessive | Male-biased | Often | Carrier mothers → affected sons |
| X-linked dominant | Female-biased | No | Affected father → all daughters affected, no sons |
| Y-linked | Males only | No | Father → all sons, never daughters |

> **Strategy:** when a pedigree question gives answer choices spanning several modes, look first at an **affected father's children**. The split of his sons vs. daughters instantly separates autosomal, X-linked, and Y-linked patterns.
      `
    },
    {
      id: 'mgp5-quiz3',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Distinguishing Sex-Linked Patterns
      `,
      exercise: {
        questions: [
          {
            question: 'In a pedigree, an affected man has 3 affected daughters and 2 unaffected sons; the trait appears in every generation. His unaffected wife had an affected father. Which mode of inheritance is most consistent?',
            options: [
              'X-linked recessive',
              'X-linked dominant',
              'Autosomal recessive',
              'Y-linked'
            ],
            correctAnswer: 1,
            explanation: 'An affected father passing the trait to ALL his daughters but NONE of his sons, with the trait in every generation, is the hallmark of X-linked dominant inheritance: he gives his trait-carrying X to every daughter and his Y to every son. X-linked recessive (option A) is ruled out because the trait does not skip and affected fathers do not typically produce all-affected daughters. Y-linked (option D) is impossible here because daughters are affected — Y-linked traits never appear in females.'
          },
          {
            question: 'A trait is observed only in males across four generations, and every affected man\'s sons are ALL affected while his daughters are never affected. What is the inheritance pattern, and what is the key reasoning?',
            options: [
              'X-linked recessive, because only males are affected',
              'Y-linked, because the trait passes strictly father-to-son and never appears in females',
              'Autosomal dominant, because it appears in every generation',
              'X-linked dominant, because all sons are affected'
            ],
            correctAnswer: 1,
            explanation: 'Strict father-to-son transmission with zero affected females is the unique signature of Y-linked (holandric) inheritance — the Y chromosome is passed from father to every son and never to a daughter. Option A (X-linked recessive) is wrong because X-linked recessive traits CAN appear in females (X^a X^a) and are inherited through carrier mothers, not strictly father-to-son. The all-sons-affected, no-daughters pattern specifically rules in the Y chromosome.'
          }
        ]
      }
    }
  ]
};
