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
- Infant dependent measures: **habituation/dishabituation** looking time, preferential looking, violation-of-expectation — all infer cognition from attention recovery

<!-- yield:low -->
- **High-amplitude sucking** applies the same habituation logic to newborns: sucking rate on a sensor-fitted pacifier drops as a stimulus grows familiar and rebounds when a new one is detected.
<!-- /yield -->

- Standard causal traps: parenting-outcome correlations (child effects, passive rGE), "critical period" claims needing deprivation evidence, and cohort-driven "decline" findings`
    },
    {
      id: 'dev4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Nature-Nurture Passage, Fully Read

**Problem 1.** A study of cognitive ability reports these correlations: MZ twins reared together 0.86; MZ twins reared apart 0.74; DZ twins reared together 0.59.

- **(a)** What does the MZ-apart correlation, compared with MZ-together, show?
- **(b)** What does the 0.12 gap between the two MZ groups estimate?
- **(c)** Does the MZ-together vs. DZ-together comparison point the same way?

**(a) Genes.** Identical twins raised in different homes stay strongly similar (0.74), close to those raised together (0.86). Similarity WITHOUT a shared home points to a genetic contribution.

**(b) Shared environment.** Separating MZ twins lowers their correlation from 0.86 to 0.74; that 0.12 gap is a modest shared-environment effect.

**(c) Yes.** Both pair types share a home, but MZ twins share about twice the segregating genes of DZ twins and correlate more (0.86 vs. 0.59) — again a genetic contribution. Caveat: MZ twins are also treated more alike.

**Problem 2.** The authors estimate heritability at ~0.5 in childhood, rising toward ~0.7 in adulthood. A commentator objects: "If IQ is 70% genetic, early-childhood enrichment programs are pointless, and the average difference between two neighborhoods' test scores must be genetic."

- **(a)** What does "70% genetic" misstate about heritability?
- **(b)** Does high heritability make enrichment programs pointless?
- **(c)** Does high heritability within each neighborhood explain the gap between them?

**(a) A population statistic.** A heritability of 0.7 means about 70% of the variance among people in that population is associated with genetic differences. It does not mean 70% of any one person's IQ is genetic.

**(b) No.** Heritability is computed over existing environments; enrichment adds one that was not in the data. Height is highly heritable, yet mean height rose across a century of better nutrition.

**(c) No.** Within-group heritability licenses no inference about between-group gaps: two neighborhoods can differ entirely for environmental reasons while heritability within each is high — identical seed, different soil. Both errors are canonical and heavily tested.

**Problem 3.** Adoptive siblings (unrelated, raised in the same home) correlate 0.28 in childhood, falling to near 0.04 by adulthood. By adolescence, adopted children's IQ correlates more with their biological than their adoptive parents.

- **(a)** Which variance component does the adoptive-sibling correlation measure, and why?
- **(b)** What does its fall to near 0.04 suggest about shared family environment?
- **(c)** What does the adoptees' resemblance to their biological parents add?

**(a) Shared environment.** Adoptive siblings share no genes, so their entire similarity (0.28 in childhood) IS shared environment.

**(b) It fades.** Shared family environment's influence on IQ wanes as people grow up and select their own environments — active gene-environment correlation (niche-picking).

**(c) Genes show through.** Adoptees resemble the parents who supplied only their genes more than the parents who raised them, so the genetic contribution shows through as the family effect fades.

**Problem 4.** The same authors estimate heritability of cognitive ability at ~0.5 in childhood, rising toward ~0.7 in adulthood — the opposite of what many students expect.

- **(a)** How can genetic differences gain influence as people age?
- **(b)** Why might adult environments add less arbitrary variance than childhood ones?
- **(c)** Is the rise evidence that genes act on their own later in life?

**(a) Niche-picking.** As individuals increasingly choose environments that match their genotypes, genetic differences are amplified by the environments they select.

**(b) Self-selected settings.** Children largely receive the environment their family provides; adults choose theirs, so adult environments vary less arbitrarily and track genotype more closely.

**(c) No.** Rising heritability is evidence of gene-environment correlation at work, not of genes "switching on" by themselves.`
    },
    {
      id: 'dev4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Twin Logic, Teratogens & Method Traps** 🎯`,
      exercise: {
        questions: [
          {
            question: `For a given disorder, concordance is 48% in monozygotic twins and 17% in dizygotic twins raised in the same homes. The most defensible conclusion is that the disorder:`,
            options: [`Is purely genetic, since MZ concordance exceeds DZ concordance`, `Has substantial genetic and substantial nongenetic influences`, `Is caused entirely by the shared parenting environment`, `Cannot be studied with twin designs when twins share homes`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Read both numbers: nearly tripled concordance with doubled genetic sharing implicates genes, but a 48% MZ rate means the co-twin of an affected individual — genetically near-identical, same home — about half the time does NOT develop the disorder, so environment and chance carry real weight. Options claiming purity in either direction ignore half the data; this both-components reading is the modal correct answer for twin items.`
          },
          {
            question: `A cross-sectional study finds 70-year-olds score far below 25-year-olds on a computerized reasoning test and concludes reasoning collapses with age. Longitudinal data on the same test show much smaller declines. The cross-sectional gap was most likely inflated by:`,
            options: [`Attrition of low scorers from the older age group over time`, `Practice effects from repeated testing in the older group`, `Cohort effects, such as generational differences in education`, `Failure of random assignment to the two age groups`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Cross-sectional designs confound age with birth cohort: today's 70-year-olds had different schooling and far less computer exposure, both depressing scores for non-aging reasons. Longitudinal tracking of the same people removes the cohort confound (while introducing attrition and practice effects, which if anything UNDERSTATE decline — attrition retains healthier participants). Random assignment to age is impossible in any design.`
          },
          {
            question: `Children adopted at birth are studied at age 18. Their scores on a personality trait correlate 0.31 with their biological mothers, whom they have never met, and 0.05 with the adoptive mothers who raised them. This pattern most strongly indicates that family resemblance on this trait is driven by:`,
            options: [`Shared genes rather than shared rearing environment`, `The adoptive family's parenting style and home climate`, `Prenatal teratogen exposure in the biological mother`, `Peer-group socialization during the children's adolescence`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Adoption severs the usual gene-environment bundle: biological parents supplied only genes (plus prenatal environment), adoptive parents only rearing. Resemblance tracking the never-met biological parent is the signature of genetic transmission. A rearing-driven trait would show the reverse pattern. Prenatal effects cannot be fully excluded but would not by themselves produce a specific trait correlation of this kind, and peers are unmeasured here.`
          },
          {
            question: `A pregnant patient asks when alcohol exposure poses the greatest risk of major structural malformations. The embryological answer is:`,
            options: [`Only after the seventh month, during rapid fetal growth`, `During the germinal period, before implantation`, `Uniformly across all of pregnancy for every organ system`, `Weeks 3 through 8, the embryonic period of organogenesis`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Teratogen impact follows developmental timing: organs are most disruptable while being BUILT, and organogenesis spans the embryonic period (weeks 3-8). The germinal period tends toward all-or-none loss rather than malformation. The essential clinical caveat: CNS development continues across all trimesters, so no stage is safe for alcohol — which is why no safe dose is recognized.`
          },
          {
            question: `Nearly every person develops ten fingers under a shared genetic developmental program, yet the heritability of finger number is close to zero. Which explanation is correct?`,
            options: [`Genes play no meaningful role in how fingers form`, `Most variation in finger number comes from accidents`, `Heritability can be estimated only for behavioral traits`, `Twin studies cannot be used to study physical traits`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Heritability measures how much of the VARIATION among people tracks genetic differences. Almost everyone carries the same finger-building program, so there is little genetic variation to track, and most of the few differences that exist come from accidents and injuries — environment. A near-zero heritability therefore does not mean genes play no role in how fingers form; it describes differences in a population, not what builds the trait. Heritability is estimated for physical traits such as height as readily as for behavioral ones, and twin studies work for physical traits too.`
          }
        ]
      }
    },
    {
      id: 'dev4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Read the design.** MZ above DZ, or adoptees like birth parents: genes; adoptive siblings: shared home; MZ below 100%: environment.
- **Heritability is variance.** It describes differences among people in one population and environment, and it can change.
- **Genes and environment.** Interaction: an allele's effect depends on exposure; correlation: passive, evocative, active.
- **Teratogens by timing.** Weeks 3-8 (organogenesis) carry peak risk; the brain stays vulnerable all pregnancy.

**Common traps**

- **Heritability for one person.** "80% heritable" never means 80% of one person's trait comes from genes; it describes population variance.
- **High heritability, no fix.** Heritability covers existing environments; a new one, like better nutrition, can still shift the mean.
- **Within-group to between-group.** High heritability inside two groups says nothing about why they differ: same seed, different soil.
- **Cohort as aging.** Cross-sectional age gaps include generational differences; longitudinal data on the same people isolate change.

<!-- yield:low -->
**Low-yield extras**

- High-amplitude sucking, the newborn version of habituation-dishabituation (sucking rate rebounds when a new stimulus is detected)
<!-- /yield -->`
    }
  ]
};
