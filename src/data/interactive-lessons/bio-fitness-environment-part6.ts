export const bioFitnessPart6Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p6-s1-three-routes',
      type: 'text' as const,
      content: `
## Fitness and Environment: Nuance, Misconceptions and FRQ Practice

**Part 6 of 7 — Nuance, Misconceptions and FRQ Practice**

By now you have seen organisms match their environment in several different ways. AP questions often hinge on telling them apart, so this part starts by putting them side by side.

### Three ways to fit an environment

| | **Developmental plasticity** | **Acclimatization** | **Genetic adaptation** |
|---|---|---|---|
| What changes | The phenotype an individual develops | The physiology of an adult, reversibly | Allele frequencies in a population |
| Timescale | During development; often permanent for that individual | Days to weeks | Many generations |
| DNA sequence changed? | No | No | Yes (in the gene pool) |
| Passed to offspring through DNA? | No | No | Yes |
| Example | Turtle sex set by nest temperature | A lowland climber makes more red blood cells after weeks at high altitude, then returns to normal at home | Tibetan highlanders commonly carry an *EPAS1* variant linked to lower, healthier hemoglobin levels at high altitude |

**Telling them apart in a question**
- If **one individual** changes and the change **reverses** when conditions return to normal, it is acclimatization.
- If genetically identical individuals develop **different** phenotypes in different environments, it is plasticity.
- If a difference **persists across generations in a common environment** and allele frequencies changed, it is genetic adaptation.

These routes interact. The *capacity* to acclimatize or to respond plastically is itself encoded in genes, so it can evolve, as Part 2 showed.
      `
    },
    {
      id: 'bio-fitness-environment-p6-s2-misconceptions',
      type: 'text' as const,
      content: `
### Misconceptions that cost points

| Misconception | Correct idea | Evidence or example |
|---|---|---|
| "Individuals evolve to fit their environment." | **Populations** evolve. An individual's genotype is fixed for life; its phenotype can change only through plasticity or acclimatization. | Peppered moths did not change color; the proportion of dark moths changed. |
| "Organisms get the mutations they need." | Mutations arise **at random with respect to need**. The environment then selects among existing variants. | In replica-plating experiments (Joshua and Esther Lederberg, 1952), bacterial colonies resistant to a phage or antibiotic were already present on the original plate before the bacteria were ever exposed. |
| "Traits acquired during life are inherited." | Plastic changes alter gene expression or physiology, not the DNA passed to offspring. | A rabbit's cold-induced black fur patch is not inherited. |
| "Fitness means strength or survival." | Fitness is **reproductive success** relative to others. | A long-lived elk with few surviving calves has low fitness. |
| "Adaptations are perfect." | Selection works only on existing variation and faces **trade-offs**: a trait that helps one function may hurt another. | Guppy coloration, below. |
| "If a trait is plastic, genes are not involved." | A reaction norm is a property of a genotype, and genotypes differ in their reaction norms. | Yarrow clones respond differently to elevation. |

> **Wording tip:** avoid "the organism adapted *in order to* survive" or "the species *needed* to change." Write instead: "individuals with trait X survived and reproduced more, so the allele for X increased in frequency."
      `
    },
    {
      id: 'bio-fitness-environment-p6-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Checkpoint: which kind of change?**
      `,
      exercise: {
        questions: [
          {
            question: 'A lowland climber spends four weeks at 4,000 m, and her red blood cell count rises. After she returns home, the count falls back over several weeks. This change is best described as',
            options: [
              'acclimatization',
              'genetic adaptation',
              'natural selection',
              'a new mutation'
            ],
            correctAnswer: 0,
            explanation: 'A reversible physiological adjustment within one individual is acclimatization. Genetic adaptation and natural selection act on populations over generations, and no change in DNA occurred.'
          },
          {
            question: 'Researchers grew bacteria on a plate with no antibiotic, then pressed the colonies onto antibiotic plates in the same positions. Resistant colonies appeared on the antibiotic plates, and cells taken from the matching spots on the first plate were also resistant, though they had never met the drug. What does this support?',
            options: [
              'Resistance mutations arise at random, and the drug selects them',
              'The antibiotic triggers the mutations that the cells need to survive',
              'Cells that survive the drug pass on a tolerance they acquired',
              'Exposure to the drug gradually makes each cell more resistant'
            ],
            correctAnswer: 0,
            explanation: 'The resistant cells existed before exposure, so the mutations were not caused by the drug; the antibiotic only revealed and favored them. The other options all assume the environment creates the variation it then favors.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p6-s4-guppies',
      type: 'text' as const,
      content: `
### Trade-offs in action: Endler's guppies

Guppies (*Poecilia reticulata*) in the mountain streams of Trinidad live in pools separated by waterfalls. John Endler compared populations above and below the falls.

| Site | Main predator | Male coloration |
|---|---|---|
| Downstream, below the falls | Pike cichlid (*Crenicichla*), which eats adult guppies | Drab: fewer and smaller colored spots |
| Upstream, above the falls | A small killifish that mostly eats young guppies | Bright: more and larger colored spots |

**The trade-off:** females prefer to mate with brightly colored males, so color raises reproductive success. But bright colors also make males easier for predators to spot. Where dangerous predators are common, the survival cost outweighs the mating benefit; where they are absent, the mating benefit wins.

**The experiments**
- In large greenhouse ponds, Endler set up populations with a dangerous predator, a weak predator or no predator. Within several generations, males in the ponds with the dangerous predator had fewer spots, while males in the other ponds had more.
- In the field, he moved guppies from a high-predation site to a stream site with only the weak predator. About two years later, males at the new site had more and larger colored spots.

**Why this is evolution, not plasticity:** male color patterns are heritable, and the change built up across generations as the offspring of brighter males made up more of the population. Fitness depended on the predator environment, and the population's allele frequencies shifted in response.
      `
    },
    {
      id: 'bio-fitness-environment-p6-s5-frq',
      type: 'text' as const,
      content: `
### FRQ-style worked response

**Prompt (AP style, hypothetical data):** Researchers test whether chemical cues from predatory fish induce defensive helmets in *Daphnia*. They place individuals from a single clone into 20 beakers. Ten beakers receive water in which fish have lived ("fish water"), and ten receive the same water that never contained fish. After two weeks, they measure helmet height as a percent of body length.

| Treatment | Mean helmet height (% of body length) | 95% confidence interval |
|---|---|---|
| Fish water | 32 | ±3 |
| Fish-free water | 18 | ±2 |

**(a) Identify the independent variable and the control group.**
> The independent variable is whether the water contained fish cues. The control group is the ten beakers of fish-free water.

**(b) State the null hypothesis.**
> Fish cues in the water have no effect on helmet height in *Daphnia*.

**(c) Justify the use of a single clone.**
> All individuals share the same genotype, so any difference in helmet height between treatments must be caused by the environment rather than by genetic differences.

**(d) Describe the results and whether they support rejecting the null hypothesis.**
> Mean helmet height was 32% of body length in fish water and 18% in fish-free water. The 95% confidence intervals (29 to 35 and 16 to 20) do not overlap, so the difference is likely significant and the null hypothesis can be rejected.

**(e) Predict the fitness of helmeted *Daphnia* in a pond without fish, and explain.**
> Helmeted individuals would likely leave fewer offspring than unhelmeted ones, because building a helmet uses resources that could go into reproduction, and without predators the helmet gives no survival benefit to offset that cost.

### AP Connection: what earned each point
| Part | Point-earning move |
|---|---|
| (a) | Names a specific variable and a specific group, not "the water" |
| (b) | States "no effect" in terms of the variables measured |
| (c) | Links "same genotype" to ruling out genetic causes |
| (d) | Quotes the numbers **and** uses the confidence intervals to judge significance |
| (e) | States a direction (fewer offspring) **and** gives a cost–benefit reason |
      `
    },
    {
      id: 'bio-fitness-environment-p6-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Design a study:** Researchers collect turtle eggs from five clutches and split each clutch between incubators at 26 °C and 31 °C, then record the sex of every hatchling. Choose the best entry for each part of the design.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Independent variable',
            options: ['incubation temperature', 'hatchling sex ratio', 'clutch of origin', 'egg mass at laying']
          },
          {
            label: 'Dependent variable',
            options: ['clutch of origin', 'incubation temperature', 'hatchling sex ratio', 'egg mass at laying']
          },
          {
            label: 'Reason to split every clutch across both temperatures',
            options: ['raises the hatching success', 'makes the eggs hatch at once', 'doubles the total sample size', 'controls for genetic differences']
          },
          {
            label: 'Null hypothesis',
            options: ['warm eggs hatch as more females', 'temperature has no effect on sex', 'cool eggs hatch as more females', 'sex is set by sex chromosomes']
          }
        ],
        correctAnswers: ['incubation temperature', 'hatchling sex ratio', 'controls for genetic differences', 'temperature has no effect on sex'],
        hint1: 'The independent variable is what the researchers set; the dependent variable is what they record.',
        hint2: 'Eggs from one clutch share parents; putting half of each clutch in each incubator spreads genetic differences evenly.',
        hint3: 'A null hypothesis predicts no effect of the independent variable, rather than a particular direction.',
        explanation: 'Temperature is set by the researchers and sex ratio is measured. Splitting each clutch means both treatments contain the same mix of parental genotypes, and the null hypothesis states that temperature has no effect on sex.'
      }
    },
    {
      id: 'bio-fitness-environment-p6-s7-predict-justify',
      type: 'text' as const,
      content: `
### Predict and justify: weak versus strong answers

**Prompt:** Pike cichlids are introduced into an upstream pool where male guppies are brightly colored. Predict how male coloration in the pool will change over many generations, and justify your prediction.

| Weak answer | Why it loses the point |
|---|---|
| "The males will become drab so they can hide from the predator." | Implies individuals change on purpose; gives no mechanism |
| "The guppies will adapt to the cichlids." | No direction, no trait, no reasoning |
| "Coloration will decrease because of natural selection." | Correct direction, but the justification only names a process without explaining it |

**Strong answer:**
> Male coloration will become duller over generations. Bright males are easier for cichlids to see, so they will be eaten more often and leave fewer offspring than drab males, even though females prefer bright males. Because color pattern is heritable, alleles for duller coloration will increase in frequency in the population.

**Anatomy of the strong answer**
1. **Direction** of change (duller) and **timescale** (over generations).
2. **Selective agent** and how it acts on phenotype (cichlids see bright males).
3. **Fitness consequence** (fewer offspring), acknowledging the trade-off (female preference).
4. **Heritability** and the population-level result (allele frequencies shift).

A justification that names only "natural selection" or "survival of the fittest" rarely earns credit on its own; the reasoning has to show **which** individuals reproduce more and **why**.
      `
    },
    {
      id: 'bio-fitness-environment-p6-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Exit check: trade-offs and evolution**
      `,
      exercise: {
        questions: [
          {
            question: 'Endler moved guppies from a pool with pike cichlids to a stream site with only a weak predator. About two years later, males there had more and larger colored spots. Which explanation is best supported?',
            options: [
              'Females favored colorful males, and weak predation no longer removed them',
              'Males grew extra spots once they sensed that predators were scarce',
              'The weaker predator caused mutations that added spots to males',
              'Bright color became neutral, so spot number changed by drift alone'
            ],
            correctAnswer: 0,
            explanation: 'Mate choice by females favors bright males, and without a dangerous predator the survival cost of color is small, so alleles for bright color increased. Predators do not cause mutations, and a consistent shift matching predation is not what drift predicts.'
          },
          {
            question: 'Why do male guppies in pools with pike cichlids stay relatively drab, even though females there prefer colorful males?',
            options: [
              'Bright males there get eaten before they mate much',
              'Females in those pools favor drab males over bright ones',
              'Pike cichlids cause pigment genes to mutate in the males',
              'Drab coloring is learned by watching older males in the pool'
            ],
            correctAnswer: 0,
            explanation: 'Bright males are more visible to the cichlids, so they die before leaving many offspring; the survival cost outweighs the mating advantage. Female preference for bright males is present in both kinds of pool.'
          },
          {
            question: 'Which statement about evolution is accurate?',
            options: [
              'Populations evolve as allele frequencies change over generations',
              'Individuals evolve when they change to fit their environment',
              'A trait evolves once an individual uses it often enough',
              'Organisms evolve the traits they need in a new habitat'
            ],
            correctAnswer: 0,
            explanation: 'Evolution is a change in allele frequencies in a population across generations. Individuals can change their phenotype through plasticity, but their genotype does not change, and need does not produce traits.'
          }
        ]
      }
    }
  ]
};
