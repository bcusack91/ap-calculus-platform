export const mcatPsychDevPart4Data = {
  topicSlug: 'mcat-psychology-behavior-development-mcat',
  sections: [
    {
      id: 'dev4-intro',
      type: 'text' as const,
      content: `# Development — Deep Dive

**Part 4 of 4 — MCAT Integration: Nature-Nurture Designs & Reading Developmental Studies**

### The Genetically Informative Designs (what each one isolates)

| Design | Logic | Key comparison |
|--------|-------|----------------|
| **Twin study** | MZ twins share ~100% of segregating genes, DZ ~50%, both share a home | MZ concordance much greater than DZ → genetic contribution |
| **Adoption study** | Genes come from biological parents, rearing from adoptive parents | Adoptee resembles biological parents → genes; resembles adoptive parents → shared environment |
| **MZ twins reared apart** | Shared genes, different homes | Similarity despite different environments → genes |

- **Concordance**: probability both members of a pair show the trait
- Caveats the MCAT loves: MZ twins are also treated more alike (the equal-environments assumption); adoptive homes are range-restricted (screened, above-average); prenatal environment is shared in both twin types

### Heritability — the Most Misread Statistic on the Exam

- Heritability = proportion of trait **variance within a population** attributable to genetic variance — a POPULATION statistic, never a statement about one person ("80% heritable" does not mean 80% of your IQ is genetic)
- It is environment-dependent: equalize environments and heritability RISES (remaining differences are mostly genetic); impoverish some environments and it falls
- Within-group heritability says NOTHING about between-group differences (the plant-in-two-soils analogy)
- **Gene-environment interaction**: a genotype's effect depends on the environment (a risk allele mattering only under stress exposure). **Gene-environment correlation**: genotypes and environments arrive together — passive (parents supply both), evocative (the child's traits elicit responses), active (niche-picking)

### Prenatal Development & Teratogens

- Germinal (0-2 wk: zygote → implantation) → **embryonic** (3-8 wk: **organogenesis — peak teratogen vulnerability**) → fetal (9 wk+: growth, brain maturation continues throughout)
- **Teratogens**: alcohol (**fetal alcohol syndrome** — leading preventable intellectual disability; no established safe dose), tobacco (growth restriction), certain drugs, infections (rubella), radiation. Damage depends on TIMING (which system is forming), dose, and genotype — the same exposure harms different structures in different weeks
- The brain remains vulnerable across all trimesters (long organogenesis window)

### Reading Developmental Methods (the recurring question set)

- **Cross-sectional** design: different ages tested once — fast, but **confounds age with cohort** (a 70-year-old and a 20-year-old differ in generation, schooling, tech exposure — not just age)
- **Longitudinal**: same people over time — isolates true change, but suffers **attrition** (selective dropout biases late waves toward the healthy/motivated), **practice effects**, cost
- **Sequential** designs mix both to separate age, cohort, and time-of-measurement
- Infant dependent measures: **habituation/dishabituation** looking time, preferential looking, violation-of-expectation, high-amplitude sucking — all infer cognition from attention recovery
- Standard causal traps: parenting-outcome correlations (child effects, passive rGE), "critical period" claims needing deprivation evidence, and cohort-driven "decline" findings`
    },
    {
      id: 'dev4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Nature-Nurture Passage, Fully Read

**Passage.** A study of cognitive ability reports: MZ-together correlation 0.86; MZ-apart 0.74; DZ-together 0.59; adoptive siblings (unrelated, same home) 0.28 in childhood, falling to near 0.04 by adulthood; adopted children's IQ correlates more with biological than adoptive parents by adolescence. The authors estimate heritability at ~0.5 in childhood, rising toward ~0.7 in adulthood. A commentator objects: "If IQ is 70% genetic, early-childhood enrichment programs are pointless, and the average difference between two neighborhoods' test scores must be genetic."

**Step 1 — extract the design logic.** MZ-apart (0.74) approaching MZ-together (0.86) shows strong similarity WITHOUT a shared home → genetic contribution plus a modest shared-environment effect (the 0.12 gap). Adoptive-sibling correlations fading to ~0 by adulthood is the classic finding that shared family environment's influence on IQ wanes as people select their own environments (active gene-environment correlation — niche-picking).

**Step 2 — explain heritability RISING with age.** Counterintuitive but standard: as individuals increasingly choose environments matching their genotypes, genetic differences amplify; and adult environments (self-selected) vary less arbitrarily than childhood ones. Rising heritability is evidence of gene-environment correlation at work, not of genes "switching on" alone.

**Step 3 — dismantle the commentator, claim by claim.** (a) Population heritability does not bound what a NEW environment can do — heritability is computed over existing environments; enrichment adds one that wasn't in the data (height is highly heritable, yet mean height rose across a century of better nutrition). (b) Within-group heritability licenses no inference about between-group gaps: two neighborhoods can differ entirely for environmental reasons while heritability within each is high — identical seed, different soil. Both errors are named, canonical, and heavily tested.

**Step 4 — the design-extension item.** "Which additional group would best isolate shared-environment effects?" Unrelated adoptive siblings already do — their entire similarity (0.28 in childhood) IS shared environment, since they share no genes. Recognizing which correlation carries which variance component is the skill the passage is built to test.`
    },
    {
      id: 'dev4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Twin Logic, Teratogens & Method Traps** 🎯`,
      exercise: {
        questions: [
          {
            question: `For a given disorder, concordance is 48% in monozygotic twins and 17% in dizygotic twins raised in the same homes. The most defensible conclusion is that the disorder:`,
            options: [`Is purely genetic`, `Has a substantial genetic component AND substantial nongenetic influences — the MZ-DZ gap shows genes matter, while MZ concordance far below 100% shows they are not sufficient`, `Is caused entirely by parenting`, `Cannot be studied with twin designs`],
            correctAnswer: 1,
            explanation: `Read both numbers: tripled concordance with doubled genetic sharing implicates genes, but a 48% MZ rate means the co-twin of an affected individual — genetically near-identical, same home — usually does NOT develop the disorder, so environment and chance carry real weight. Options claiming purity in either direction ignore half the data; this both-components reading is the modal correct answer for twin items.`
          },
          {
            question: `A cross-sectional study finds 70-year-olds score far below 25-year-olds on a computerized reasoning test and concludes reasoning collapses with age. Longitudinal data on the same test show much smaller declines. The cross-sectional gap was most likely inflated by:`,
            options: [`Attrition of low scorers`, `Practice effects in the older group`, `Cohort effects — the age groups differ in generation-linked factors like education and technology familiarity, which the one-time design cannot separate from aging itself`, `Random assignment failure`],
            correctAnswer: 2,
            explanation: `Cross-sectional designs confound age with birth cohort: today's 70-year-olds had different schooling and far less computer exposure, both depressing scores for non-aging reasons. Longitudinal tracking of the same people removes the cohort confound (while introducing attrition and practice effects, which if anything UNDERSTATE decline — attrition retains healthier participants). Random assignment to age is impossible in any design.`
          },
          {
            question: `Children adopted at birth are studied at age 18. Their scores on a personality trait correlate 0.31 with their biological mothers, whom they have never met, and 0.05 with the adoptive mothers who raised them. This pattern most strongly indicates that family resemblance on this trait is driven by:`,
            options: [`Shared genes rather than shared rearing environment — the adoption design separates the two, and resemblance follows the genetic link`, `The adoptive family's parenting style`, `Prenatal teratogen exposure`, `The children's peer groups`],
            correctAnswer: 0,
            explanation: `Adoption severs the usual gene-environment bundle: biological parents supplied only genes (plus prenatal environment), adoptive parents only rearing. Resemblance tracking the never-met biological parent is the signature of genetic transmission. A rearing-driven trait would show the reverse pattern. Prenatal effects cannot be fully excluded but would not by themselves produce a specific trait correlation of this kind, and peers are unmeasured here.`
          },
          {
            question: `A pregnant patient asks when alcohol exposure poses the greatest risk of major structural malformations. The embryological answer is:`,
            options: [`Only after the seventh month`, `During the germinal period, before implantation`, `Risk is uniform across all of pregnancy for all organ systems`, `Weeks 3 through 8 — the embryonic period, when organogenesis makes forming structures maximally teratogen-sensitive (while the brain remains vulnerable throughout)`],
            correctAnswer: 3,
            explanation: `Teratogen impact follows developmental timing: organs are most disruptable while being BUILT, and organogenesis spans the embryonic period (weeks 3-8). The germinal period tends toward all-or-none loss rather than malformation. The essential clinical caveat: CNS development continues across all trimesters, so no stage is safe for alcohol — which is why no safe dose is recognized.`
          },
          {
            question: `A trait's heritability within a well-nourished population is estimated at 0.80. Which conclusion is actually licensed by this number?`,
            options: [`80% of the trait in each individual is caused by genes`, `In THIS population and range of environments, about 80% of the trait's variance between people is associated with genetic differences — implying nothing about individuals, new environments, or group differences`, `Environmental interventions cannot change the trait`, `Differences between this population and a malnourished one must be mostly genetic`],
            correctAnswer: 1,
            explanation: `Heritability partitions VARIANCE ACROSS PEOPLE in a specific population-environment context. It cannot be applied to an individual, it can change when environments change, and novel interventions can shift the whole distribution regardless (high heritability of height coexists with large secular gains from nutrition). And within-group heritability never licenses between-group inferences — the two-soils trap in option four is the exam's most reliable wrong answer.`
          }
        ]
      }
    },
    {
      id: 'dev4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Design logic: MZ-DZ concordance gap = genes; adoptee-biological resemblance = genes; adoptive-sibling similarity = shared environment; MZ concordance under 100% = environment and chance are real
- Heritability is a population variance statistic: not individual, not fixed, not intervention-proof, and never a bridge from within-group to between-group differences
- Gene-environment: interaction (allele effect depends on exposure) vs correlation (passive, evocative, active/niche-picking — the reason heritability rises with age)
- Teratogens strike by timing: embryonic weeks 3-8 = organogenesis peak; brain vulnerable all pregnancy; FAS = leading preventable intellectual disability
- Methods: cross-sectional confounds age with cohort; longitudinal fights attrition and practice effects; sequential separates them; infant cognition is read from looking-time recovery`
    }
  ]
};
