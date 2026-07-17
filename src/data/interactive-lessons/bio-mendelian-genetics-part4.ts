export const bioMendelianPart4Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp4-intro',
      type: 'text' as const,
      content: `
## Probability in Genetics

**Part 4 of 7**

Punnett squares are wonderful teaching tools but terrible calculators once you have more than two genes — a trihybrid cross would need a 64-cell grid, and a question about "at least one recessive child out of four" can't be read off a square at all. The fix is to treat inheritance as what it really is: a problem in **probability**. Two simple rules handle almost everything on the AP exam.

### The two fundamental rules

**Product Rule (AND):** The probability that two or more **independent** events *both* occur is the **product** of their individual probabilities.

$P(A \\text{ and } B) = P(A)\\times P(B)$

Use it when an outcome requires this AND that — e.g., "an offspring is *aa* **and** *bb*."

**Sum Rule (OR):** The probability that *either* of two **mutually exclusive** events occurs is the **sum** of their individual probabilities.

$P(A \\text{ or } B) = P(A) + P(B)$

Use it when an outcome can be reached this way OR that way — e.g., "a heterozygous offspring, which can be formed as (mom's *A*, dad's *a*) **or** (mom's *a*, dad's *A*)."

| Cue word in the question | Rule | Operation |
|--------------------------|------|-----------|
| "...AND..." / "all of..." / "both" | Product rule | multiply |
| "...OR..." / "either" / "any of these" | Sum rule | add |

> **Why these replace big squares:** because genes assort independently, the outcome for each gene is an independent event — so the product rule lets you solve each gene as a tiny monohybrid cross and multiply. This is exactly the forked-line logic of Part 3, now stated as a general principle.
      `
    },
    {
      id: 'mgp4-worked-product',
      type: 'text' as const,
      content: `
### Worked Example 1: A Trihybrid Cross by Product Rule

**Problem.** Cross **AaBbCc × AaBbCc** (three independently assorting genes). What is the probability that an offspring is **aabbcc** — homozygous recessive for all three genes?

**The square way is hopeless** — each parent makes $2^3 = 8$ gamete types, so the grid is $8 \\times 8 = 64$ cells. Use the product rule instead.

**Step 1 — Solve each gene as a monohybrid cross.** For *Aa* $\\times$ *Aa*, the probability of the homozygous recessive *aa* is $\\frac{1}{4}$. The same holds for each gene:
- $P(aa) = \\frac{1}{4}$
- $P(bb) = \\frac{1}{4}$
- $P(cc) = \\frac{1}{4}$

**Step 2 — Multiply (the offspring must be aa AND bb AND cc).**

$P(aabbcc) = \\frac{1}{4}\\times\\frac{1}{4}\\times\\frac{1}{4} = \\frac{1}{64}$

So 1 in 64 offspring is triple-recessive — the single corner cell you would have found after drawing all 64 boxes.

**A phenotype variation.** What fraction shows *all three dominant* phenotypes (*A_ B_ C_*)? Each gene gives $P(\\text{dominant}) = \\frac{3}{4}$, so:

$P(A\\_ B\\_ C\\_) = \\frac{3}{4}\\times\\frac{3}{4}\\times\\frac{3}{4} = \\frac{27}{64}$

(This is the "27" in the trihybrid 27:9:9:9:3:3:3:1 ratio — note that $\\frac{27}{64}$ and $\\frac{1}{64}$ are the two extreme classes.)
      `
    },
    {
      id: 'mgp4-worked-atleast',
      type: 'text' as const,
      content: `
### Worked Example 2: "At Least One" via the Complement

**Problem.** From the cross **AaBbCc × AaBbCc**, what is the probability that an offspring shows **at least one recessive phenotype** (i.e., is recessive for *one or more* of the three traits)?

Computing "at least one" directly would mean adding up many overlapping cases (recessive for A only, B only, A and B, all three, ...) — messy and error-prone. The clean trick is the **complement rule**:

$P(\\text{at least one recessive}) = 1 - P(\\text{no recessives})$

**Step 1 — Find the complement (no recessive traits = dominant for ALL three).** From Example 1:
$P(\\text{all three dominant}) = \\frac{3}{4}\\times\\frac{3}{4}\\times\\frac{3}{4} = \\frac{27}{64}$

**Step 2 — Subtract from 1.**
$P(\\text{at least one recessive}) = 1 - \\frac{27}{64} = \\frac{37}{64}$

So about 58% of offspring will display at least one recessive trait.

> **General principle:** Whenever a question says **"at least one,"** compute $1 - P(\\text{none})$. The "none" case is usually a single clean product, whereas the direct sum is a tangle of overlapping events. This complement strategy appears constantly on AP genetics and is worth making automatic.
      `
    },
    {
      id: 'mgp4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Product, Sum, and Complement
      `,
      exercise: {
        questions: [
          {
            question: 'In a cross AaBb × AaBb (two independent genes), what is the probability of an offspring with genotype AAbb?',
            options: [
              '$\\frac{1}{4}$',
              '$\\frac{1}{16}$',
              '$\\frac{3}{16}$',
              '$\\frac{1}{8}$'
            ],
            correctAnswer: 1,
            explanation: 'AAbb requires AA (probability 1/4 from Aa × Aa) AND bb (probability 1/4 from Bb × Bb). These are independent, so multiply: 1/4 × 1/4 = 1/16. The trap 3/16 (option C) would be P(A_ bb) — the dominant PHENOTYPE for A combined with bb. Here the question demands the specific homozygous AA genotype (probability 1/4), not the 3/4 dominant phenotype.'
          },
          {
            question: 'A couple are both carriers for cystic fibrosis (Cc × Cc, where cc is affected). They plan to have 3 children. What is the probability that AT LEAST ONE child is affected (cc)?',
            options: [
              '$\\frac{1}{4}$',
              '$\\frac{3}{4}$',
              '$1 - \\left(\\frac{3}{4}\\right)^3 = \\frac{37}{64}$',
              '$3 \\times \\frac{1}{4} = \\frac{3}{4}$'
            ],
            correctAnswer: 2,
            explanation: 'Use the complement: P(at least one affected) = 1 − P(no affected children). Each child has P(unaffected) = 3/4, and the three children are independent, so P(none affected) = $(3/4)^{3}$ = 27/64. Thus the answer is 1 − 27/64 = 37/64. Option D (3 × 1/4) is invalid: you cannot simply multiply or add a per-child probability by the number of children — that ignores the cases of two or three affected and can even exceed 1 in other setups.'
          }
        ]
      }
    },
    {
      id: 'mgp4-binomial',
      type: 'text' as const,
      content: `
### The Binomial: "Exactly k of n" Offspring

The product rule answers "all children affected." The complement answers "at least one." But what about **"exactly 2 of 3 children are affected"** — a specific count, in any birth order? For that, you need the **binomial formula**.

If each independent offspring has probability *p* of being affected and *q = 1 − p* of being unaffected, the probability of **exactly k affected out of n** children is:

$P = \\binom{n}{k}\\, p^{k}\\, q^{\\,n-k}$

where the binomial coefficient $\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$ counts how many different birth orders give *k* affected children.

**Why the coefficient is needed:** "2 affected, 1 unaffected" can happen as (affected, affected, unaffected), (affected, unaffected, affected), or (unaffected, affected, affected) — **3** orderings. Each single ordering has probability $p^2 q$; multiplying by 3 accounts for all the ways it can occur. Forgetting $\\binom{n}{k}$ (just writing $p^k q^{n-k}$) is the most common binomial mistake.
      `
    },
    {
      id: 'mgp4-worked-binomial',
      type: 'text' as const,
      content: `
### Worked Example 3: Exactly 2 of 3 Children Affected

**Problem.** Two carriers for an autosomal recessive disease (*Cc* $\\times$ *Cc*) have 3 children. What is the probability that **exactly 2** of the 3 are affected (*cc*)?

**Step 1 — Per-child probabilities.** From *Cc* $\\times$ *Cc*:
- $p = P(\\text{affected, } cc) = \\frac{1}{4}$
- $q = P(\\text{unaffected}) = \\frac{3}{4}$

**Step 2 — Identify n and k.** $n = 3$ children, $k = 2$ affected.

**Step 3 — Compute the coefficient.**
$\\binom{3}{2} = \\frac{3!}{2!\\,1!} = 3$

**Step 4 — Plug into the binomial.**
$P = \\binom{3}{2}\\left(\\frac{1}{4}\\right)^{2}\\left(\\frac{3}{4}\\right)^{1} = 3 \\times \\frac{1}{16}\\times\\frac{3}{4} = 3\\times\\frac{3}{64} = \\frac{9}{64}$

So $P(\\text{exactly 2 of 3 affected}) = \\frac{9}{64} \\approx 0.14$.

> **Sanity check on the coefficient:** if you had written only $p^2 q = \\frac{3}{64}$, you would be computing the probability of *one specific* order (say, first two affected, third not). The factor $\\binom{3}{2} = 3$ correctly scales that up to cover all three possible orders. Always ask: "in how many orders can this happen?"
      `
    },
    {
      id: 'mgp4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Binomial Problems
      `,
      exercise: {
        questions: [
          {
            question: 'Two parents heterozygous for albinism (Aa × Aa; aa = albino) have 4 children. What is the probability that exactly 1 of the 4 children is albino?',
            options: [
              '$\\left(\\frac{1}{4}\\right)^1 = \\frac{1}{4}$',
              '$\\binom{4}{1}\\left(\\frac{1}{4}\\right)^1\\left(\\frac{3}{4}\\right)^3 = \\frac{108}{256} = \\frac{27}{64}$',
              '$\\binom{4}{1}\\left(\\frac{1}{4}\\right)^1\\left(\\frac{3}{4}\\right)^1 = \\frac{3}{4}$',
              '$\\left(\\frac{3}{4}\\right)^4 = \\frac{81}{256}$'
            ],
            correctAnswer: 1,
            explanation: 'This is binomial with p = 1/4 (albino), q = 3/4, n = 4, k = 1: P = C(4,1)$(1/4)^{1}(3/4)^{3}$ = 4 × (1/4) × (27/64) = 108/256 = 27/64. Option A forgets both the C(4,1) coefficient AND the $(3/4)^{3}$ term for the three unaffected children. Option D, $(3/4)^{4}$, is the probability that NONE of the four children is albino — a different question.'
          },
          {
            question: 'A geneticist computes the probability of "exactly 2 affected out of 3 children" and gets the same numeric answer whether she uses the binomial formula or lists every birth order by hand and adds them. Why must these two methods always agree?',
            options: [
              'They only agree by coincidence for n = 3',
              'The binomial coefficient C(n,k) is exactly the number of distinct birth orders, and each order has the same probability $p^{k}$ $q^{n-k}$, so the formula is a compact sum over those orders',
              'The sum rule does not apply to offspring',
              'Listing orders double-counts, so it should give twice the binomial answer'
            ],
            correctAnswer: 1,
            explanation: 'Each specific birth order with k affected and (n−k) unaffected has identical probability $p^{k}$ $q^{n-k}$ (product rule). The number of such orders is exactly C(n,k). Adding the equal probabilities of all those mutually exclusive orders (sum rule) gives C(n,k) × $p^{k}$ $q^{n-k}$ — which IS the binomial formula. So the two approaches are the same computation, just written differently. Option D is wrong: enumerating distinct orders does not double-count, since each order is a unique, mutually exclusive sequence.'
          }
        ]
      }
    },
    {
      id: 'mgp4-sum-within',
      type: 'text' as const,
      content: `
### Using the Sum Rule Within a Single Gene

The product rule handles "AND across genes." The **sum rule** shines when a single outcome can be reached through several **mutually exclusive** genotypes — you compute each genotype's probability and add.

**Worked example — "dominant phenotype" as a sum.** In a *Aa* $\\times$ *Aa* cross, the dominant phenotype arises from *either* *AA* *or* *Aa*. These are mutually exclusive (an offspring can't be both), so add:

$P(\\text{dominant}) = P(AA) + P(Aa) = \\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$

That is where the familiar $\\frac{3}{4}$ comes from — it is a *sum* of two genotype probabilities, not a single Punnett cell.

**Worked example — combining sum and product.** From *AaBb* $\\times$ *AaBb*, what is the probability of an offspring that is *either* homozygous *AA* *or* homozygous *aa* at the first gene (i.e., **not** heterozygous), regardless of the B gene?

- At gene A, "homozygous" = *AA* OR *aa* (mutually exclusive): $P = P(AA) + P(aa) = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.
- The B gene is unrestricted, so it contributes a factor of $1$.

$P(\\text{homozygous at A}) = \\frac{1}{2}\\times 1 = \\frac{1}{2}$

**Choosing the right rule — a quick test.** Ask: *can this outcome happen in more than one mutually exclusive way?* If yes, **add** those ways (sum rule). *Does the outcome require several independent conditions to all hold?* If yes, **multiply** them (product rule). Many AP problems need both: add the genotype options within each gene, then multiply across genes.

> **The classic mistake:** adding when you should multiply (or vice versa). "Recessive for trait 1 AND trait 2" must be multiplied ($\\frac{1}{4}\\times\\frac{1}{4}$); "genotype AA OR aa" must be added ($\\frac{1}{4}+\\frac{1}{4}$). Always translate the question's "and"/"or" into the matching operation before computing.
      `
    },
    {
      id: 'mgp4-quiz3',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Sum vs. Product
      `,
      exercise: {
        questions: [
          {
            question: 'In a cross Aa × Aa, what is the probability that an offspring is HOMOZYGOUS (either AA or aa), and which probability rule applies?',
            options: [
              'Sum rule: P(AA) + P(aa) = $\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$',
              'Product rule: P(AA) × P(aa) = $\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$',
              'Sum rule: P(AA) + P(Aa) = $\\frac{1}{4} + \\frac{1}{2} = \\frac{3}{4}$',
              'Product rule: P(AA) × P(Aa) = $\\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}$'
            ],
            correctAnswer: 0,
            explanation: 'Being homozygous means AA OR aa — two mutually exclusive outcomes — so the SUM rule applies: 1/4 + 1/4 = 1/2. The product-rule option misapplies the rule: an offspring cannot be AA AND aa simultaneously, so multiplying those probabilities is meaningless. The product rule is for independent events that co-occur, not for alternative outcomes of the same gene.'
          },
          {
            question: 'From the cross AaBb × AaBb, what is the probability of an offspring that is recessive for trait A (aa) OR recessive for trait B (bb)? (Hint: these events overlap, since an offspring could be both aabb.)',
            options: [
              '$\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$',
              '$\\frac{1}{4} + \\frac{1}{4} - \\frac{1}{16} = \\frac{7}{16}$',
              '$\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$',
              '$1 - \\frac{9}{16} = \\frac{7}{16}$'
            ],
            correctAnswer: 1,
            explanation: 'Because "aa" and "bb" can occur together (aabb), they are NOT mutually exclusive, so a naive sum double-counts the overlap. Use inclusion-exclusion: P(aa or bb) = P(aa) + P(bb) − P(aa and bb) = 1/4 + 1/4 − 1/16 = 7/16. (Option D reaches the same 7/16 via the complement of "dominant for both," 1 − 9/16, confirming the answer — but option A is the trap that forgets to subtract the overlap.)'
          }
        ]
      }
    }
  ]
};
