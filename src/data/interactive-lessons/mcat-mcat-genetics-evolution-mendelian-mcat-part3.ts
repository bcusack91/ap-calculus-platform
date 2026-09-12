export const mcatMendelianPart3Data = {
  topicSlug: 'mcat-genetics-evolution-mendelian-mcat',
  sections: [
    {
      id: 'men3-intro',
      type: 'text' as const,
      content: `# Mendelian Genetics — Deep Dive

**Part 3 of 4 — Pedigrees & Human Inheritance Patterns**

### The Five Patterns and Their Fingerprints

| Pattern | Fingerprint | Classic examples |
|---------|-------------|------------------|
| Autosomal dominant | Every generation; affected child has an affected parent; both sexes equally | Huntington disease, Marfan syndrome, familial hypercholesterolemia |
| Autosomal recessive | Skips generations; unaffected carrier parents; consanguinity raises risk | Cystic fibrosis, PKU, sickle cell disease, Tay-Sachs |
| X-linked recessive | Mostly males; NO father-to-son transmission; carrier mothers | Hemophilia A/B, Duchenne MD, color blindness, G6PD deficiency |
| X-linked dominant | Affected father → ALL daughters, NO sons; affected in every generation | Rare (e.g., X-linked hypophosphatemic rickets) |
| Mitochondrial | Affected mother → ALL children; affected father → NONE | LHON, MELAS |

### The Decision Procedure

1. **Male-to-male transmission present?** → rules out ALL X-linked patterns (fathers give sons a Y).
2. **Trait skips generations?** → likely recessive. Appears in every generation with an affected parent → likely dominant.
3. **Sex bias?** Strong male excess → X-linked recessive. Affected father with all daughters affected and no sons → X-linked dominant.
4. **All children of affected mothers affected, none of affected fathers?** → mitochondrial.

### Obligate Carriers

Some genotypes can be deduced with certainty:

- Parents of a child with an autosomal recessive disease: both **must** be carriers (Aa) if unaffected
- Daughters of a man affected by an X-linked recessive condition: **all** are carriers (he gives each daughter his only X)
- Phenotypically normal sons of that man: carry **no** disease allele from him (they got his Y)

### Conditional Probability — the "2/3 Problem"

The unaffected sibling of a person with an autosomal recessive disease is NOT $\\tfrac{1}{2}$ carrier. Among the surviving phenotype classes of $Aa \\times Aa$ ($1\\ AA : 2\\ Aa : 1\\ aa$), being unaffected removes the $aa$ class:

$P(\\text{carrier} \\mid \\text{unaffected}) = \\frac{2}{3}$

This conditioning step is one of the most frequently tested genetics moves on the MCAT.

### Recurrence Risk Arithmetic

Chain the probabilities of each required event with the product rule:
(parent 1 is a carrier) $\\times$ (parent 2 is a carrier) $\\times$ (two carriers have an affected child, $\\tfrac{1}{4}$).`
    },
    {
      id: 'men3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Full Recurrence-Risk Calculation

**Problem.** Cystic fibrosis (CF) is autosomal recessive. A healthy woman has a brother with CF; her parents are healthy. She marries a healthy man from the general population, where the carrier frequency is $\\tfrac{1}{25}$. What is the probability their first child has CF?

**Step 1 — The woman's carrier probability.** Her parents must both be $Aa$ (they are healthy with an $aa$ son). She is healthy, so among the unaffected outcomes of $Aa \\times Aa$:
$P(\\text{she is } Aa) = \\frac{2}{3}$

**Step 2 — The husband's carrier probability.** No family history, so use the population figure:
$P(\\text{he is } Aa) = \\frac{1}{25}$

**Step 3 — Probability that two carriers have an affected child.**
$P(aa \\mid \\text{both } Aa) = \\frac{1}{4}$

**Step 4 — Multiply.**
$P(\\text{child has CF}) = \\frac{2}{3} \\times \\frac{1}{25} \\times \\frac{1}{4} = \\frac{2}{300} = \\frac{1}{150}$

**Trap check.** Using $\\tfrac{1}{2}$ instead of $\\tfrac{2}{3}$ for the sister is the single most common error — it ignores the information that she is unaffected. Every probability in the chain must be conditioned on everything the problem tells you.`
    },
    {
      id: 'men3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Pedigrees & Risk** 🎯`,
      exercise: {
        questions: [
          {
            question: `A healthy couple has a child with an autosomal recessive disorder. Their next child is phenotypically healthy. What is the probability this healthy child is a carrier?`,
            options: [`1/2`, `2/3`, `1/4`, `1/3`],
            correctAnswer: 1,
            explanation: `Both parents are obligate carriers. Offspring ratio: $1\\ AA : 2\\ Aa : 1\\ aa$. Given the child is healthy, the $aa$ class is excluded, leaving $1\\ AA : 2\\ Aa$ — so $P(Aa) = 2/3$. The unconditioned answer 1/2 ignores the child's known phenotype.`
          },
          {
            question: `A man with hemophilia A (X-linked recessive) and a woman who is homozygous normal have children. Which statement is correct?`,
            options: [`All daughters are carriers and all sons are unaffected non-carriers`, `Half the sons will have hemophilia`, `All daughters will have hemophilia`, `Sons have a 25% risk of hemophilia`],
            correctAnswer: 0,
            explanation: `The father gives his single mutant X to every daughter (all obligate carriers) and his Y to every son. Since the mother contributes only normal X chromosomes, no child is affected and sons carry no disease allele. Affected sons would require a carrier or affected mother.`
          },
          {
            question: `In a pedigree, an affected woman has four children (two sons, two daughters) — ALL affected. Her affected brother's three children are ALL unaffected. The most consistent inheritance pattern is:`,
            options: [`Autosomal dominant with reduced penetrance`, `X-linked dominant`, `Mitochondrial inheritance`, `Autosomal recessive`],
            correctAnswer: 2,
            explanation: `Mitochondria pass exclusively through the egg: an affected mother transmits to ALL children, an affected father to NONE. That exact asymmetry is shown here. X-linked dominant fails because an affected father would pass the trait to all his daughters.`
          },
          {
            question: `Huntington disease is autosomal dominant with onset typically after age 40. A 25-year-old whose parent has Huntington disease asks for his risk of eventually developing it (assume the affected parent is heterozygous). The risk is:`,
            options: [`1/4`, `2/3`, `Nearly 0 because he is currently symptom-free`, `1/2`],
            correctAnswer: 3,
            explanation: `$Hh \\times hh$ → half the children inherit the dominant allele, and dominant means one copy suffices: risk $= 1/2$. Being symptom-free at 25 provides almost no information because onset is late — this distinguishes late-onset dominant conditions from the 2/3 conditioning logic used for recessive traits.`
          },
          {
            question: `Which observation would definitively EXCLUDE autosomal recessive inheritance for a trait in a pedigree?`,
            options: [`An affected child born to two affected parents`, `An affected child whose parents are both unaffected`, `Two affected parents producing an unaffected child`, `The trait appearing more often in males in one family`],
            correctAnswer: 2,
            explanation: `If the trait is autosomal recessive, affected parents are both $aa$ and can transmit only $a$ — every child must be $aa$ (affected). An unaffected child therefore excludes the model. Unaffected-parents-with-affected-child is the SIGNATURE of recessive inheritance, and modest sex bias can occur by chance.`
          }
        ]
      }
    },
    {
      id: 'men3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Decision order: check male-to-male transmission (kills X-linkage) → generation skipping (recessive vs. dominant) → sex bias → maternal-line-only (mitochondrial)
- Obligate carriers: unaffected parents of an AR child; every daughter of an XR-affected father
- The unaffected sibling of an AR patient is a carrier with probability $2/3$, not $1/2$ — condition on the known phenotype
- Recurrence risk = product of each required event: (carrier?) $\\times$ (carrier?) $\\times$ $1/4$
- Two affected AR parents cannot have an unaffected child; late-onset dominant disease keeps risk at $1/2$ despite a healthy young adult phenotype`
    }
  ]
};
