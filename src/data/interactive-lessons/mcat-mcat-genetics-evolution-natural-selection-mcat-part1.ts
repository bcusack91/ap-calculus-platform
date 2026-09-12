export const mcatNatSelPart1Data = {
  topicSlug: 'mcat-genetics-evolution-natural-selection-mcat',
  sections: [
    {
      id: 'ns1-intro',
      type: 'text' as const,
      content: `# Natural Selection — Deep Dive

**Part 1 of 4 — Darwinian Fundamentals: Variation, Fitness & Adaptation**

### The Logic of Natural Selection

Natural selection is not a hypothesis about any particular trait — it is a deductive consequence of three conditions. If a population has:

1. **Variation** — individuals differ in a trait
2. **Heritability** — some of that variation is transmitted to offspring
3. **Differential reproductive success** — trait variants differ in how many surviving offspring they leave

then the trait distribution MUST shift across generations. Remove any one condition and selection produces no evolutionary change: a trait that varies but is not heritable (e.g., scars) cannot evolve, and a heritable trait with no fitness consequence changes only by drift.

### Fitness = Reproductive Success

**Fitness is measured in offspring, not in strength, longevity, or dominance.** A short-lived organism that leaves eight fertile offspring is fitter than a vigorous one that leaves two. Survival matters only as a MEANS to reproduction — a component of fitness alongside mating success and fertility. "Survival of the fittest" is best read as "reproduction of the best reproducers."

### Selection Acts on Phenotypes; Populations Evolve

Selection screens **individual phenotypes** — a predator catches the slow rabbit, whatever its genotype. But the evolutionary response is a change in **allele frequencies in the population**. Two consequences the MCAT tests:

- **Individuals do not evolve.** An organism's genotype is fixed at fertilization; it can acclimate physiologically, but acclimation is not evolution.
- Environmentally caused phenotypes (a bodybuilder's muscles, a sun tan) are invisible to evolution because they are not transmitted.

### Adaptation and Exaptation

An **adaptation** is a heritable trait that increased in frequency BECAUSE it improved fitness in that environment. An **exaptation** is a trait that evolved serving one function and was later co-opted for another: feathers likely spread for insulation and display before any bird flew; middle-ear bones derive from reptilian jaw bones. Exaptations matter because they answer "what good is half a wing?" — the intermediate stages were useful for something else.

### Misconceptions to Kill on Sight

| Misconception | Correction |
|---------------|------------|
| "Organisms evolve traits because they need them" | Selection has no foresight; it can only sort variation that already exists |
| "Use and disuse change heritable traits" (Lamarck) | Acquired characteristics are not inherited; the giraffe's neck evolved because longer-necked VARIANTS reproduced more |
| "Evolution produces perfection" | Selection is constrained by available variation, history, and trade-offs; it yields "better than the alternatives present," not optimal design |
| "Selection favors survival of the species" | Selection acts through individual (or gene-level) reproductive success, not species benefit |

### Where Variation Comes From

- **Mutation** — the only ultimate source of NEW alleles
- **Recombination** (crossing over in prophase I), **independent assortment** (metaphase I), and **random fertilization** — generate new COMBINATIONS of existing alleles each generation; this is why sex accelerates adaptation

### Trade-Offs

Fitness components compete for the same energy budget: bright coloration attracts mates AND predators; large clutch sizes reduce per-offspring care; sickle-cell heterozygote protection comes packaged with disease risk in homozygotes. Passages often present a trait as "paradoxically" harmful — the resolution is almost always a trade-off in another fitness component or life stage.`
    },
    {
      id: 'ns1-worked',
      type: 'text' as const,
      content: `### Worked Example — Guppy Coloration as a Fitness Trade-Off

**Passage-style problem.** In Trinidadian streams, male guppies vary heritably in the brightness of their orange spots. Field surveys show: in pools ABOVE waterfalls (no large predators), males are brightly colored; in pools BELOW waterfalls (with predatory pike cichlids), males are drab. A researcher transplants 200 guppies from a high-predation pool to a previously guppy-free, predator-free pool. Within about 15 generations, average male brightness increases significantly.

**Question 1 — Why does brightness increase after the transplant?** Brightness is under opposing selection from two fitness components: females preferentially mate with brighter males (mating success), while predators preferentially eat them (survival). Removing predators removes the survival cost, so net selection becomes directional FOR brightness. The response across generations confirms the trait is heritable.

**Question 2 — Did individual transplanted males become brighter?** No. Individuals do not evolve; the DISTRIBUTION shifted because bright males left disproportionately many offspring each generation. Any single fish's genotype was fixed at fertilization.

**Question 3 — Did the guppies brighten "because they no longer needed camouflage"?** No — that phrasing implies foresight. Bright variants already existed (standing heritable variation); the new environment merely changed which variants reproduced most. If no bright alleles had been present, no amount of "need" would have produced them; the population would have waited on mutation.

**Question 4 — What result would falsify the heritability requirement?** If offspring brightness showed no resemblance to father brightness (e.g., brightness tracked diet alone), the generation-to-generation increase could not be evolutionary; brightness would be an acquired, environmentally induced phenotype, invisible to selection.`
    },
    {
      id: 'ns1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Darwinian Fundamentals** 🎯`,
      exercise: {
        questions: [
          {
            question: `In evolutionary biology, the fitness of an organism is best defined as its:`,
            options: [`Physical strength and ability to dominate rivals`, `Lifespan relative to other members of the population`, `Ability to survive extreme environmental conditions`, `Relative contribution of offspring to the next generation`],
            correctAnswer: 3,
            explanation: `Fitness is reproductive success relative to others in the population. Strength, longevity, and survival matter only insofar as they increase the number of surviving offspring — an organism that survives a century but never reproduces has a fitness of zero for that generation.`
          },
          {
            question: `Which statement describes giraffe neck evolution in correct Darwinian (rather than Lamarckian) terms?`,
            options: [`Ancestral giraffes stretched their necks reaching for high leaves, and the lengthened necks were passed to offspring`, `Ancestral populations contained heritable variation in neck length, and longer-necked individuals left more offspring`, `Giraffes developed long necks because they needed to reach higher food`, `Every giraffe gradually grew a longer neck over its own lifetime as the species evolved`],
            correctAnswer: 1,
            explanation: `Darwinian change requires pre-existing heritable variation plus differential reproduction. The first and fourth options describe inheritance of acquired characteristics (Lamarck), and the third invokes need-driven change — selection has no foresight and cannot create variation on demand.`
          },
          {
            question: `Natural selection acts directly on ______, while evolutionary change is measured in ______.`,
            options: [`phenotypes of individuals; allele frequencies of populations`, `genotypes of individuals; phenotypes of individuals`, `allele frequencies of populations; phenotypes of individuals`, `mutations; individual organisms`],
            correctAnswer: 0,
            explanation: `Predators, climates, and mates interact with an organism's PHENOTYPE; genotypes are screened only indirectly, through the phenotypes they help produce. The response — evolution — is a shift in allele frequencies across generations in the population. Individuals cannot evolve because their genotypes are fixed at fertilization.`
          },
          {
            question: `Feathers appear in the fossil record on non-flying dinosaurs, where they likely functioned in insulation and display, and were only later used in flight. Feathers used for flight are therefore an example of:`,
            options: [`Convergent evolution`, `An acquired characteristic`, `Exaptation — a trait co-opted for a new function`, `Directed mutation in response to the need to fly`],
            correctAnswer: 2,
            explanation: `A trait that evolved under selection for one role and was later recruited for a different role is an exaptation. This dissolves the "what good is half a wing?" objection: intermediate feathered forms were already useful for insulation and display. Convergence involves separate lineages independently evolving similar traits, and mutations are never directed by need.`
          },
          {
            question: `Which process is the ultimate source of entirely NEW alleles in a population?`,
            options: [`Crossing over during prophase I`, `Mutation`, `Independent assortment of chromosomes`, `Random fertilization`],
            correctAnswer: 1,
            explanation: `Only mutation writes new sequence variants. Crossing over, independent assortment, and random fertilization are enormously important generators of new COMBINATIONS, but they can only shuffle alleles that mutation already created.`
          }
        ]
      }
    },
    {
      id: 'ns1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Selection follows necessarily from heritable variation plus differential reproductive success; remove either ingredient and the trait cannot evolve
- Fitness = relative reproductive success; survival and vigor are only means to that end
- Selection screens phenotypes; evolution is a change in population allele frequencies — individuals never evolve, and acquired traits are not inherited
- Adaptation = trait spread because it raised fitness; exaptation = trait co-opted for a new role (feathers, middle-ear bones)
- No foresight, no need-driven change, no perfection: selection can only sort existing variation under trade-off constraints
- Mutation is the sole source of new alleles; recombination, independent assortment, and random fertilization multiply combinations`
    }
  ]
};
