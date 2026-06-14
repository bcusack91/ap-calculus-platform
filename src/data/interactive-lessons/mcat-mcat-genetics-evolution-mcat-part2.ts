export const mcatGeneticsPart2Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge2-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 2 of 7 — Non-Mendelian Inheritance**

### Extensions to Mendel

| Pattern | Description | Example |
|---------|-------------|---------|
| **Incomplete dominance** | Heterozygote = intermediate phenotype | Red $\\times$ White → Pink flowers |
| **Codominance** | Both alleles fully expressed | Blood type AB (both A and B antigens) |
| **Multiple alleles** | >2 alleles exist in the population | ABO blood type ($I^A$, $I^B$, i) |
| **Pleiotropy** | One gene → multiple phenotypic effects | Sickle cell anemia |
| **Epistasis** | One gene masks another gene's expression | Coat color in Labradors |
| **Polygenic** | Multiple genes → one trait | Height, skin color |

### ABO Blood Type (MCAT FAVORITE)

| Genotype | Blood Type | Antigens | Antibodies |
|----------|-----------|----------|-----------|
| $I^AI^A$ or $I^Ai$ | A | A antigen | Anti-B |
| $I^BI^B$ or $I^Bi$ | B | B antigen | Anti-A |
| $I^AI^B$ | AB | Both A and B | Neither |
| ii | O | Neither | Anti-A and Anti-B |

- $I^A$ and $I^B$ are **codominant** to each other
- Both are **dominant** over i
- Type O = universal donor (no surface antigens to attack)
- Type AB = universal recipient (no antibodies in plasma)

### Mitochondrial (Cytoplasmic) Inheritance

- mtDNA is inherited **maternally** (sperm mitochondria are excluded/degraded after fertilization)
- An affected mother passes the trait to **all** of her children; affected fathers pass it to none
- Examples: Leber hereditary optic neuropathy (LHON), MELAS, mitochondrial myopathies`
    },
    {
      id: 'ge2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Blood-Type Paternity Question

**Problem.** A newborn has blood type **O**. The mother has blood type **A**. The hospital is trying to determine which of two men could be the father. Man 1 has type **AB**; man 2 has type **B**. Which man(men) could be the biological father?

**Step 1 — Infer the genotypes from the phenotypes.** The baby is type O, so its genotype must be **ii** — it received one **i** allele from each parent. Therefore *every* candidate parent must carry an **i** allele.

**Step 2 — Check the mother.** She is type A, but since the baby is ii, the mother must be $I^Ai$ (heterozygous). She contributed the **i** to the baby. Consistent.

**Step 3 — Test each man for an i allele.**
- **Man 1 (type AB):** genotype is $I^AI^B$. He has **no i allele**, so he cannot contribute the second **i** needed for an ii child. **Excluded.**
- **Man 2 (type B):** he could be $I^BI^B$ or $I^Bi$. Only $I^Bi$ can father a type O child, and that is genetically possible. **Cannot be excluded.**

**Conclusion.** Man 2 is the only possible biological father. This is the core logic of ABO paternity/exclusion problems on the MCAT: a type O child requires an **i** allele from *both* parents, so any parent lacking an i (i.e., type AB) is ruled out.`
    },
    {
      id: 'ge2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Non-Mendelian** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mother with blood type A (genotype $I^Ai$) and a father with blood type B (genotype $I^Bi$) can have children with which blood types?`,
            options: [`A, B, AB, or O — all four are possible`, `Only A or B`, `Only AB`, `Only A, B, or AB`],
            correctAnswer: 0,
            explanation: `Cross $I^Ai \\times I^Bi$: offspring can be $I^AI^B$ (AB), $I^Ai$ (A), $I^Bi$ (B), or ii (O). All four blood types are possible — a classic MCAT genetics question.`
          },
          {
            question: `A red-flowered snapdragon ($C^RC^R$) is crossed with a white one ($C^WC^W$), producing all pink ($C^RC^W$) F1 plants. If two pink F1 plants are crossed, what phenotype ratio is expected in the F2?`,
            options: [`1 red : 2 pink : 1 white`, `3 red : 1 white`, `All pink`, `9 red : 3 pink : 4 white`],
            correctAnswer: 0,
            explanation: `This is incomplete dominance, so the genotype ratio (1:2:1) equals the phenotype ratio: $1\\ C^RC^R$ (red) : $2\\ C^RC^W$ (pink) : $1\\ C^WC^W$ (white). The heterozygote has its own distinct, intermediate phenotype.`
          },
          {
            question: `What is the key difference between incomplete dominance and codominance?`,
            options: [`In incomplete dominance the heterozygote shows a blended intermediate; in codominance BOTH alleles are fully and separately expressed`, `Incomplete dominance involves multiple alleles; codominance does not`, `Codominance always produces a 3:1 ratio`, `They are two names for the same phenomenon`],
            correctAnswer: 0,
            explanation: `Incomplete dominance = a new intermediate phenotype (red + white → pink). Codominance = both phenotypes appear simultaneously and distinctly (type AB blood shows BOTH A and B antigens; roan cattle show both red and white hairs).`
          },
          {
            question: `A person with type O blood receives a transfusion of type A blood. What is the immediate immunological problem?`,
            options: [`The recipient's anti-A antibodies attack the donor A antigens, causing agglutination`, `The donor's anti-B antibodies attack the recipient's cells`, `The recipient lacks antibodies, so nothing happens`, `The A antigen converts the recipient's cells to type A`],
            correctAnswer: 0,
            explanation: `Type O plasma contains BOTH anti-A and anti-B antibodies. Transfused type A red cells carry A antigen, so the recipient's anti-A antibodies bind and agglutinate them → a dangerous transfusion reaction. This is why type O individuals can only receive type O blood (they are universal DONORS, not universal recipients).`
          },
          {
            question: `In Labrador retrievers, the B gene controls pigment (B = black, b = brown) but a second gene E controls whether ANY pigment is deposited (ee = yellow regardless of B genotype). A yellow lab that is "ee" appears yellow even if it carries BB. This is an example of:`,
            options: [`Epistasis — the E gene masks the expression of the B gene`, `Incomplete dominance`, `Pleiotropy`, `Codominance`],
            correctAnswer: 0,
            explanation: `Epistasis occurs when one gene (E) masks or modifies the phenotypic effect of another gene (B) at a different locus. An ee genotype blocks pigment deposition entirely, so the dog is yellow no matter what alleles are present at the B locus. Contrast with pleiotropy, where ONE gene affects MANY traits.`
          }
        ]
      }
    },
    {
      id: 'ge2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Incomplete dominance: blended intermediate (1:2:1 phenotype = genotype). Codominance: both alleles fully expressed (AB blood).
- ABO: $I^A$ and $I^B$ codominant, both dominant over i; type O child needs an i from BOTH parents
- Pleiotropy = one gene, many effects. Epistasis = one gene masks another (different loci).
- Polygenic traits show continuous variation (bell curve)
- Mitochondrial DNA is inherited maternally → affected mother passes to all children`
    }
  ]
};
