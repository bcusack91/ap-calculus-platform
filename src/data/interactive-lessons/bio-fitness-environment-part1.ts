export const bioFitnessPart1Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p1-s1-intro',
      type: 'text' as const,
      content: `
## Fitness and Environment: Fitness Depends on the Environment

**Part 1 of 7 — Fitness Depends on the Environment**

In everyday speech, "fit" means strong, fast or healthy. In biology, **fitness** means something narrower and far more useful: how successfully an individual passes its genes to the next generation **compared with other individuals in the same population**.

### Two ways to measure fitness

| Measure | What it counts | Example |
|---|---|---|
| **Absolute fitness** | The number of offspring an individual (or genotype) leaves that survive to reproduce | A mouse that raises 4 pups to breeding age has an absolute fitness of 4 |
| **Relative fitness** ($w$) | Reproductive success divided by the reproductive success of the most successful type | If the best genotype averages 4 breeding offspring and another averages 3, the second has $w = \\frac{3}{4} = 0.75$ |

Relative fitness is what drives natural selection. Allele frequencies change only when some types out-reproduce others, so what matters is not how many offspring an individual has in absolute terms but how that number **compares** with everyone else's.

### What fitness is NOT
- **Not strength or size.** A huge, dominant stag that sires few surviving fawns has lower fitness than a smaller male that sires many.
- **Not lifespan.** Living long matters only if the extra years produce extra offspring. An annual plant that sets thousands of seeds and dies can out-reproduce a long-lived neighbor.
- **Not survival alone.** An individual that survives but never reproduces has a fitness of zero.
- **Not a fixed property of a trait.** A trait has a fitness value only *in a particular environment*. This idea runs through all seven parts of this lesson.

> **Core idea:** Fitness = survival **and** reproduction, measured relative to others, in a specific environment.
      `
    },
    {
      id: 'bio-fitness-environment-p1-s2-pocket-mice',
      type: 'text' as const,
      content: `
### One trait, two environments: rock pocket mice

Rock pocket mice (*Chaetodipus intermedius*) live in the deserts of the southwestern United States. Most populations live on pale, sandy rock, but some live on dark basalt left by ancient lava flows. Their main predators, such as owls, hawks and foxes, hunt largely by sight.

| Habitat | Coat that blends in | Coat that stands out | Phenotype with higher fitness |
|---|---|---|---|
| Light sand and granite | Sandy-colored | Dark | Light coat |
| Dark lava rock | Dark | Sandy-colored | Dark coat |

In mice from the Pinacate lava flow in Arizona, the dark coat is caused by mutations in the **Mc1r** gene. Mc1r codes for a receptor on pigment cells that controls how much dark pigment (eumelanin) goes into each hair. The dark allele is dominant, so a mouse with one or two copies is dark.

### The logic of selection in this example
1. The **mutation** that produces dark fur arose at random. It did not appear *because* the mice lived on lava.
2. The **environment** (rock color plus predators that hunt by sight) determines which coat color survives.
3. On lava, dark mice survive and reproduce more, so the dark allele increases in frequency. On sand, the very same allele is selected *against*.

The dark allele is not "good" or "bad" on its own. Its fitness depends entirely on where the mouse lives. Biologists say the **environment is the selective agent**: it acts on the **phenotype** (coat color), and the result shows up as a change in the **gene pool** (Mc1r allele frequencies).
      `
    },
    {
      id: 'bio-fitness-environment-p1-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Checkpoint: What fitness measures**
      `,
      exercise: {
        questions: [
          {
            question: 'Two male elk live in the same valley. Male A is large and wins most fights, lives 12 years and fathers 3 calves that survive to breed. Male B is smaller, lives 7 years and fathers 6 calves that survive to breed. Which male has the higher biological fitness?',
            options: [
              'Male B, since it left more offspring that bred',
              'Male A, since its strength lets it win more contests',
              'Male A, since its longer life gives it more breeding years',
              'They are equal, since fitness weighs body size against lifespan'
            ],
            correctAnswer: 0,
            explanation: 'Fitness counts offspring that survive to reproduce, so Male B (6 breeding calves) outscores Male A (3). Winning fights and living longer raise fitness only when they lead to more surviving offspring, which did not happen here.'
          },
          {
            question: 'Light and dark rock pocket mice are released in equal numbers into two outdoor pens. One pen has a dark lava floor and the other has pale sand. Owls hunt in both pens. Which prediction is best supported?',
            options: [
              'Each coat color survives better on the background it matches',
              'Dark mice survive better in both, since dark fur is the newer trait',
              'Both colors survive equally, since owls catch mice at random',
              'Light mice in the lava pen grow darker fur over the season'
            ],
            correctAnswer: 0,
            explanation: 'Owls hunt by sight, so a coat that matches the background lowers the chance of being caught; dark mice should do better on lava and light mice on sand. Adult mice do not change their genotype or coat color to match the rock.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p1-s4-peppered-moth',
      type: 'text' as const,
      content: `
### A reversible case: the peppered moth

The peppered moth (*Biston betularia*) rests on tree trunks and branches during the day, where birds hunt it by sight. It comes in a speckled light form (*typica*) and a nearly black form (*carbonaria*).

| Period in industrial England | Bark conditions | Form favored by bird predation | Trend in dark-form frequency |
|---|---|---|---|
| Before heavy coal burning | Pale bark covered in light lichens | Light (*typica*) | Dark form rare |
| Late 1800s, industrial regions | Soot killed lichens and blackened bark | Dark (*carbonaria*) | Rose to the large majority near Manchester by the 1890s |
| After the Clean Air Act of 1956 | Soot declined and lichens recovered | Light (*typica*) | Fell steeply; dark form rare again in most areas by the early 2000s |

A parallel rise and fall happened in the American peppered moth near Detroit, where the dark form declined after U.S. clean-air laws. The same cause (bark color plus bird predation) produced the same effect in two places, which strengthens the conclusion.

### What the moth case teaches
- **Selection can reverse.** The dark allele went up and then back down as the environment changed. Fitness is not a permanent property of an allele.
- **Selection needs existing variation.** Pollution did not create dark moths. The dark allele was already present at low frequency; soot changed which form birds found more easily.
- **Selection acts on individuals, but populations evolve.** No single moth changed color. The proportion of dark moths changed because dark and light moths left different numbers of offspring.
      `
    },
    {
      id: 'bio-fitness-environment-p1-s5-worked-fitness',
      type: 'text' as const,
      content: `
### Worked example: calculating relative fitness

**Formula:**

$$w = \\frac{\\text{average breeding offspring of a genotype}}{\\text{average breeding offspring of the most successful genotype}}$$

The best genotype always has $w = 1$. Every other genotype has a value between 0 and 1.

A field team tracks rock pocket mice on a lava flow and on nearby sand. They record the average number of offspring per adult that survive to breed. (Hypothetical data.)

| Genotype | Coat | Offspring on lava | Offspring on sand |
|---|---|---|---|
| DD | Dark | 4.0 | 1.5 |
| Dd | Dark | 4.0 | 1.5 |
| dd | Light | 1.0 | 3.0 |

**Step 1: find the best genotype in each habitat.** On lava, DD and Dd tie at 4.0. On sand, dd is best at 3.0.

**Step 2: divide each value by the best value in the same habitat.**

| Genotype | $w$ on lava | $w$ on sand |
|---|---|---|
| DD | $\\frac{4.0}{4.0} = 1.0$ | $\\frac{1.5}{3.0} = 0.5$ |
| Dd | $\\frac{4.0}{4.0} = 1.0$ | $\\frac{1.5}{3.0} = 0.5$ |
| dd | $\\frac{1.0}{4.0} = 0.25$ | $\\frac{3.0}{3.0} = 1.0$ |

**Step 3: interpret.** On lava, light mice leave only one-quarter as many breeding offspring as dark mice, so the d allele should decline there. On sand, dark mice leave half as many as light mice, so the D allele should decline there. The genotypes are identical in both columns; only the environment changed.

> **Selection coefficient:** some problems report $s = 1 - w$, the fraction by which a genotype falls short of the best. Light mice on lava have $s = 1 - 0.25 = 0.75$.
      `
    },
    {
      id: 'bio-fitness-environment-p1-s6-input',
      type: 'input-boxes' as const,
      content: `
**Practice: relative fitness of peppered moths**

In a sooty woodland, light (*typica*) moths average **2.4** breeding offspring per adult and dark (*carbonaria*) moths average **3.0**. Twenty years after a clean-air law, light moths average **3.2** and dark moths average **2.0**. Give exact decimals.

1) Relative fitness of the light form in the sooty woodland

2) Relative fitness of the dark form after the clean-air law

3) Selection coefficient $s$ against the dark form after the clean-air law
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.8', '0.625', '0.375'],
        hint1: 'In the sooty woodland the dark form is the most successful, so divide the light value by 3.0.',
        hint2: 'After the law the light form is the most successful, so divide the dark value (2.0) by 3.2.',
        hint3: 'The selection coefficient is s = 1 − w, using the w you found for the dark form after the law.',
        explanation: 'Sooty woodland: w(light) = 2.4 / 3.0 = 0.8. After the law: w(dark) = 2.0 / 3.2 = 0.625, so s = 1 − 0.625 = 0.375. The fitness ranking of the two forms flipped when the environment changed.'
      }
    },
    {
      id: 'bio-fitness-environment-p1-s7-ap-connection',
      type: 'text' as const,
      content: `
### AP Connection

AP Biology questions on this idea usually give you a phenotype, two environments and some survival or reproduction data. A full answer does the following for each task verb:

| Task verb | What a full answer includes |
|---|---|
| **Identify** the selective agent | The specific environmental factor that kills or limits reproduction (for example, visual predators hunting on a mismatched background), not just "the environment" |
| **Explain** a change in allele frequency | Variation existed → one phenotype survived and reproduced more in that environment → its alleles were passed on more often → allele frequency changed over generations |
| **Predict** what happens if the environment changes | The fitness ranking can flip, so a formerly favored allele can decline |
| **Calculate** relative fitness | Divide by the best genotype's value, so the best type has $w = 1$ |

### Common errors to avoid
- Writing that the mice "turned dark to survive." Individuals do not change their genotype; the population's allele frequencies change across generations.
- Treating fitness as a property of the allele alone. Always name the environment.
- Dividing by the *average* offspring number of the whole population instead of the *best* genotype's number when computing relative fitness.
- Equating survival with fitness. A survivor that never breeds contributes nothing to the next generation.
      `
    },
    {
      id: 'bio-fitness-environment-p1-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Exit check: fitness in changing environments**
      `,
      exercise: {
        questions: [
          {
            question: 'After the Clean Air Act of 1956, the dark form of the peppered moth declined across much of England. Which statement best explains the decline?',
            options: [
              'Birds found dark moths more easily on clean bark, so fewer dark moths bred',
              'Dark moths stopped making melanin once soot levels in the air dropped',
              'Cleaner air caused mutations that turned dark alleles into light ones',
              'Light moths were stronger and took food from dark moths on clean trees'
            ],
            correctAnswer: 0,
            explanation: 'As lichens returned and bark lightened, dark moths became more visible to birds, so they survived and reproduced less and the dark allele declined. Moths do not switch color as adults, and clean air does not direct mutations.'
          },
          {
            question: 'In a population, genotype AA averages 5 offspring that survive to breed, Aa averages 4 and aa averages 2. What is the relative fitness of Aa?',
            options: [
              '0.8',
              '0.4',
              '1.25',
              '0.36'
            ],
            correctAnswer: 0,
            explanation: 'Relative fitness divides by the most successful genotype: 4 / 5 = 0.8. Dividing 5 by 4 inverts the ratio, and dividing by the total of all three genotypes (11) is not how relative fitness is defined.'
          },
          {
            question: 'Which observation would most strongly show that the fitness of dark fur depends on the environment?',
            options: [
              'Dark mice out-reproduce light mice on lava but not on nearby sand',
              'Dark mice out-reproduce light mice on lava in every year sampled',
              'Dark mice raise larger litters than light mice when both live on lava',
              'Dark and light mice raise equal litters when kept in the laboratory'
            ],
            correctAnswer: 0,
            explanation: 'Showing that the same phenotype wins in one habitat and loses in another is direct evidence that its fitness depends on the environment. Results from a single habitat, or from a lab with no predators, cannot show that dependence.'
          }
        ]
      }
    }
  ]
};
