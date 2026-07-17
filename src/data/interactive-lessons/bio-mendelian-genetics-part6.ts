export const bioMendelianPart6Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7**

Real AP free-response questions rarely test one idea in isolation. They braid together **crosses**, **probability rules**, and **pedigree reasoning** into multi-part problems where each answer feeds the next. This workshop walks through three fully worked, multi-step problems that integrate the whole unit, then finishes with a checkpoint testing the methods.

### The integrated problem-solving checklist

Before diving in, internalize this workflow — it converts a scary paragraph into a sequence of small, familiar moves:

1. **Define every allele symbol** and note which is dominant.
2. **Extract genotypes** from the phenotypes and family information given (work *backwards* from affected individuals, who pin down recessive genotypes).
3. **Choose your tool per step:** a Punnett square for one or two genes; the **product rule** for "AND across genes"; the **complement** for "at least one"; the **binomial** for "exactly k of n offspring."
4. **Condition when told an outcome** (e.g., "given the child is unaffected," remove impossible genotypes and renormalize).
5. **Chain the steps:** multiply independent stage-probabilities together to get the final answer.

> **Mindset:** never reach for a 16- or 64-box Punnett square under time pressure. Decompose into per-gene monohybrid crosses and multiply. The grid is for *learning*; the probability rules are for *solving*.
      `
    },
    {
      id: 'mgp6-problem1',
      type: 'text' as const,
      content: `
### Worked Problem 1: Cross + Probability Chain

**Setup.** In dogs, black coat (*B*) is dominant to brown (*b*), and a solid coat (*S*) is dominant to spotted (*s*); the two genes assort independently. A **BbSs** dog is crossed with a **Bbss** dog.

**(a) What fraction of puppies are brown and spotted (bbss)?**

Solve each gene separately, then multiply (product rule).
- Coat color *Bb* $\\times$ *Bb*: $P(bb) = \\frac{1}{4}$
- Coat pattern *Ss* $\\times$ *ss*: $P(ss) = \\frac{1}{2}$

$P(bbss) = \\frac{1}{4}\\times\\frac{1}{2} = \\frac{1}{8}$

**(b) What fraction are black and solid (B_ S_ )?**
- $P(B\\_) = \\frac{3}{4}$ (from *Bb* $\\times$ *Bb*)
- $P(S\\_) = \\frac{1}{2}$ (from *Ss* $\\times$ *ss*: half *Ss* solid, half *ss* spotted)

$P(B\\_ S\\_) = \\frac{3}{4}\\times\\frac{1}{2} = \\frac{3}{8}$

**(c) If this pair has 4 puppies, what is the probability that exactly 1 is brown and spotted?**

This is a binomial with $p = P(bbss) = \\frac{1}{8}$ (from part a), $q = \\frac{7}{8}$, $n = 4$, $k = 1$:

$P = \\binom{4}{1}\\left(\\frac{1}{8}\\right)^{1}\\left(\\frac{7}{8}\\right)^{3} = 4\\times\\frac{1}{8}\\times\\frac{343}{512} = \\frac{1372}{4096} \\approx 0.335$

**Notice the chain:** part (a)'s single-puppy probability ($\\frac{1}{8}$) became the *p* plugged into part (c)'s binomial. Multi-part problems are designed so earlier answers feed later ones.
      `
    },
    {
      id: 'mgp6-problem2',
      type: 'text' as const,
      content: `
### Worked Problem 2: Pedigree + Conditional Probability

**Setup.** Cystic fibrosis (CF) is autosomal recessive (*f* = recessive allele; affected = *ff*). A couple, Maria and Sam, are both **unaffected**. Maria's brother has CF. Sam was tested and is a known carrier (*Ff*).

**(a) What is the probability that Maria is a carrier (Ff)?**

Maria's brother is *ff*, so both of Maria's parents must be carriers (*Ff* $\\times$ *Ff*). Maria herself is **unaffected**, so condition on the non-*ff* outcomes of that cross:

$P(\\text{Maria is } Ff \\mid \\text{unaffected}) = \\frac{\\tfrac{1}{2}}{\\tfrac{1}{4}+\\tfrac{1}{2}} = \\frac{2}{3}$

**(b) What is the probability that Maria and Sam's first child has CF?**

For the child to be *ff*, three things must all happen (product rule):
1. Maria is a carrier: $P = \\frac{2}{3}$ (from part a).
2. Sam (known *Ff*) passes *f*: $P = \\frac{1}{2}$ — this is certain to be possible since he IS a carrier.
3. Maria (if she is *Ff*) passes *f*: $P = \\frac{1}{2}$.

$P(\\text{child has CF}) = \\underbrace{\\frac{2}{3}}_{\\text{Maria is } Ff}\\times\\underbrace{\\frac{1}{2}}_{\\text{Maria gives } f}\\times\\underbrace{\\frac{1}{2}}_{\\text{Sam gives } f} = \\frac{2}{12} = \\frac{1}{6}$

**The subtlety:** if you had wrongly assumed Maria was *definitely* a carrier, you would have gotten $\\frac{1}{2}\\times\\frac{1}{2} = \\frac{1}{4}$. The correct answer $\\frac{1}{6}$ properly weights by the $\\frac{2}{3}$ chance that Maria carries the allele at all. Carrier *uncertainty* must be multiplied into the chain.
      `
    },
    {
      id: 'mgp6-problem3',
      type: 'text' as const,
      content: `
### Worked Problem 3: Two Traits + "At Least One" Across Children

**Setup.** Two parents are each heterozygous for two independent recessive disorders, genotype **AaBb × AaBb** (disorder 1 = *aa*, disorder 2 = *bb*). They plan to have **2 children**.

**(a) What is the probability that a single child is affected by at least one of the two disorders?**

Use the complement on a single child. "No disorder" means dominant for both genes (*A_ B_ *):
$P(\\text{healthy}) = P(A\\_)\\times P(B\\_) = \\frac{3}{4}\\times\\frac{3}{4} = \\frac{9}{16}$
$P(\\text{at least one disorder}) = 1 - \\frac{9}{16} = \\frac{7}{16}$

**(b) What is the probability that BOTH children are completely healthy (neither disorder)?**

Each child independently has $P(\\text{healthy}) = \\frac{9}{16}$. The two children are independent events, so multiply (product rule across children):

$P(\\text{both healthy}) = \\frac{9}{16}\\times\\frac{9}{16} = \\frac{81}{256}$

**(c) What is the probability that at least one of the two children has at least one disorder?**

Complement of part (b):
$P(\\text{at least one child affected}) = 1 - \\frac{81}{256} = \\frac{175}{256}\\approx 0.68$

**Two layers of complement here:** within a child ("at least one disorder" → $1 - P(\\text{healthy})$) and across children ("at least one child affected" → $1 - P(\\text{all healthy})$). Keeping the layers straight — *which* "at least one" you are computing — is the entire skill. Always name the event in words before you compute.
      `
    },
    {
      id: 'mgp6-problem4',
      type: 'text' as const,
      content: `
### Worked Problem 4: Multiple Alleles + Binomial (ABO Blood Type)

**Setup.** Human ABO blood type uses **three alleles**: *$I^{A}$* and *$I^{B}$* are codominant to each other, and both are dominant to the recessive *i*. So genotype *$I^{A}$ $I^{A}$* or *$I^{A}$ i* → type A; *$I^{B}$ $I^{B}$* or *$I^{B}$ i* → type B; *$I^{A}$ $I^{B}$* → type AB; *ii* → type O. A man of genotype *$I^{A}$ i* has children with a woman of genotype *$I^{B}$ i*.

**(a) What blood-type ratio is expected among their children?**

Treat it as a monohybrid cross with the four allele combinations. Gametes: man gives $\\frac{1}{2}I^A,\\ \\frac{1}{2}i$; woman gives $\\frac{1}{2}I^B,\\ \\frac{1}{2}i$.

|        | **$I^{A}$** (½) | **i** (½) |
|--------|-------------|-----------|
| **$I^{B}$** (½) | $I^{A}$ $I^{B}$ (AB) | $I^{B}$ i (B) |
| **i** (½) | $I^{A}$ i (A) | i i (O) |

The four equally likely children are **AB : B : A : O = 1 : 1 : 1 : 1** — each blood type with probability $\\frac{1}{4}$. (This 1:1:1:1 result is a hallmark of crossing two double-heterozygote-like parents who share no alleles.)

**(b) What is the probability that a given child has type O blood?**

Type O requires genotype *ii* — the child must inherit *i* from each parent: $\\frac{1}{2}\\times\\frac{1}{2} = \\frac{1}{4}$. Consistent with the single O cell in the square.

**(c) If the couple has 3 children, what is the probability that exactly 1 has type O blood?**

Binomial with $p = P(\\text{type O}) = \\frac{1}{4}$, $q = \\frac{3}{4}$, $n = 3$, $k = 1$:

$P = \\binom{3}{1}\\left(\\frac{1}{4}\\right)^{1}\\left(\\frac{3}{4}\\right)^{2} = 3\\times\\frac{1}{4}\\times\\frac{9}{16} = \\frac{27}{64}\\approx 0.42$

**The integration:** this problem chained a *multiple-allele monohybrid cross* (part a) → a *single-genotype probability* (part b) → a *binomial across siblings* (part c). Notice that codominance changed the phenotype *labels* (AB is its own class) but did **not** change the underlying segregation arithmetic — the gametes still split 50/50, exactly as in Mendel's peas.
      `
    },
    {
      id: 'mgp6-pitfalls',
      type: 'text' as const,
      content: `
### Pitfalls That Wreck Multi-Step Problems

Integrated problems fail not because any single step is hard, but because a small early slip propagates. Here are the recurring failure points, each with the fix.

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Wrong per-gene fraction** | Using $\\frac{3}{4}$ when the cross is *Aa* × *aa* (which gives $\\frac{1}{2}$) | Re-derive each gene's split from the actual parents, not from memory |
| **Genotype vs. phenotype mismatch** | Multiplying $\\frac{3}{4}$ (phenotype) when a *specific genotype* was asked | Match the fraction to what's requested: $\\frac{1}{4},\\frac{1}{2},\\frac{1}{4}$ for genotypes; $\\frac{3}{4},\\frac{1}{4}$ for phenotypes |
| **Forgetting carrier uncertainty** | Treating a "possible carrier" as a definite carrier | Multiply in the $\\frac{2}{3}$ (or other) probability that the parent carries the allele |
| **Add/multiply confusion** | Adding probabilities of independent "AND" events | "AND" → multiply; "OR" (mutually exclusive) → add |
| **Binomial without the coefficient** | Writing $p^k q^{n-k}$ and forgetting $\\binom{n}{k}$ | Always include the count of birth orders |
| **"At least one" by direct sum** | Summing overlapping cases and overcounting | Use $1 - P(\\text{none})$ |

**A two-line self-check before you commit an answer.** First: *is every probability between 0 and 1, and does a complete set of outcomes sum to 1?* Second: *did I answer the exact event asked* (specific genotype vs. phenotype, "exactly k" vs. "at least one," carrier vs. affected)? These two checks catch the large majority of multi-step errors.

> **Habit to build:** write the event in plain English first ("at least one of three children is *aa*"), then translate it into the operation ("$1 - (\\frac{3}{4})^3$"). The translation step is where points are won or lost — never jump straight to numbers.
      `
    },
    {
      id: 'mgp6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Integrated Problem Solving
      `,
      exercise: {
        questions: [
          {
            question: 'In tomatoes, tall (D) is dominant to dwarf (d) and round fruit (P) is dominant to pear-shaped (p); the genes are independent. A DdPp plant is crossed with a ddpp plant. What fraction of offspring are tall and pear-shaped (D_ pp)?',
            options: [
              '$\\frac{9}{16}$',
              '$\\frac{1}{4}$',
              '$\\frac{3}{16}$',
              '$\\frac{1}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Solve each gene as a test cross: Dd × dd gives P(tall, D_) = 1/2; Pp × pp gives P(pear, pp) = 1/2. By the product rule, P(D_ pp) = 1/2 × 1/2 = 1/4. The trap 3/16 (option C) comes from mistakenly using 3/4 for the tall probability — but that 3/4 is the value for a Dd × Dd cross, not the Dd × dd cross given here, where each gene splits 1:1.'
          },
          {
            question: 'A woman\'s brother has an autosomal recessive disease (aa); the woman is unaffected, and her parents were both carriers. She marries a man who is a known carrier (Aa). What is the probability their first child is affected?',
            options: [
              '$\\frac{1}{4}$',
              '$\\frac{1}{6}$',
              '$\\frac{1}{3}$',
              '$\\frac{1}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'The woman is an unaffected child of two carriers, so P(she is Aa) = 2/3 (conditioning out the aa case). For an affected child: P = P(woman is Aa) × P(she transmits a) × P(husband transmits a) = 2/3 × 1/2 × 1/2 = 1/6. The trap answer 1/4 (option A) wrongly assumes the woman is definitely a carrier; it omits the 2/3 factor that accounts for her uncertain carrier status.'
          },
          {
            question: 'Two parents are AaBb × AaBb for two independent recessive disorders. They have 2 children. What is the probability that BOTH children are free of both disorders?',
            options: [
              '$\\frac{9}{16}$',
              '$\\frac{81}{256}$',
              '$\\frac{7}{16}$',
              '$\\frac{18}{16}$'
            ],
            correctAnswer: 1,
            explanation: 'One child is disorder-free (A_ B_) with probability 3/4 × 3/4 = 9/16. Because the two children are independent, multiply: P(both free) = 9/16 × 9/16 = 81/256. Option A (9/16) is the probability for just ONE child — it forgets to apply the product rule across the two children. Option D is impossible, since a probability can never exceed 1.'
          }
        ]
      }
    }
  ]
};
