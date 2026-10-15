export const bioFitnessPart2Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p2-s1-intro',
      type: 'text' as const,
      content: `
## Fitness and Environment: How Environment Shapes Phenotype

**Part 2 of 7 — How Environment Shapes Phenotype**

Part 1 showed the environment **selecting among** phenotypes. This part shows the environment **producing** phenotypes. A genotype is not a blueprint that builds the same organism everywhere; it is a set of instructions whose output depends on conditions during development and life.

$$\\text{Phenotype} = \\text{Genotype} + \\text{Environment} + \\text{their interaction}$$

### Key vocabulary

| Term | Meaning | Quick example |
|---|---|---|
| **Phenotypic plasticity** | The ability of one genotype to produce different phenotypes in different environments | Genetically identical plants grow tall and thin in shade, short and bushy in sun |
| **Norm of reaction** (reaction norm) | The full range of phenotypes one genotype produces across a range of environments, usually drawn as a line on a graph | A plot of plant height against light level for a single clone |
| **Environmental cue** | A signal from the surroundings that triggers a change in development or gene expression | Day length, temperature, soil chemistry, predator odors |
| **Inducible trait** | A trait that appears only when a specific cue is present | Defensive spines that grow only when predators are detected |

### How a cue becomes a phenotype
Environmental cues work by changing **gene expression** or **protein activity**. A cue may switch transcription of certain genes on or off, change how fast an enzyme works, or alter how much of a nutrient or ion a cell takes in. The DNA sequence does not change. This is why a plastic change in phenotype is **not** passed to offspring by itself.
      `
    },
    {
      id: 'bio-fitness-environment-p2-s2-examples',
      type: 'text' as const,
      content: `
### Plasticity across the living world

| Organism | Environmental cue | Phenotype produced | Mechanism |
|---|---|---|---|
| **Hydrangea** | Soil pH | Blue sepals in acidic soil; pink sepals in neutral or alkaline soil | Acidic soil makes aluminum ions soluble; roots absorb them, and aluminum binds the sepal pigment and turns it blue |
| **Himalayan rabbit, Siamese cat** | Body-surface temperature | Dark fur on the cooler ears, nose, paws and tail; pale fur on the warmer body | A temperature-sensitive form of the enzyme **tyrosinase** makes pigment only where the skin is cool |
| **Red-eared slider turtle** | Egg incubation temperature | Eggs near 26 °C hatch mostly male; eggs near 31 °C hatch mostly female | **Temperature-dependent sex determination**: incubation temperature during a sensitive window of development sets the sex |
| **American alligator** | Nest temperature | Nests near 30 °C produce females; nests near 33 °C produce mostly males | Temperature-dependent sex determination, with a different pattern from turtles |
| **Water flea (*Daphnia*)** | Chemicals released by predators | Tall head helmets, longer tail spines or small "neckteeth" | Predator chemical cues induce defensive structures that make the flea harder to catch and swallow |
| **Arctic fox, snowshoe hare** | Day length (photoperiod) | White winter coat; brown or gray summer coat | Shortening days in autumn trigger a molt to white fur; lengthening days in spring trigger a molt back |

Notice the range of cues: chemistry (soil pH, predator odors), temperature and light. Notice also that each response tends to **raise fitness** in the environment that produced the cue. A white coat appears just before snow, and a helmet appears only when predators are around.
      `
    },
    {
      id: 'bio-fitness-environment-p2-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Checkpoint: reading plasticity**
      `,
      exercise: {
        questions: [
          {
            question: 'A Himalayan rabbit has a white body with black ears, nose, paws and tail. A patch of white fur on its back is shaved, and an ice pack is kept on the patch while the fur regrows. What happens, and why?',
            options: [
              'It grows in black, as cold lets the pigment enzyme work there',
              'It grows back white, as the genotype for back fur is unchanged',
              'It grows in black, as cold causes mutations in the pigment gene',
              'It grows back white, as pigment genes exist only in extremity cells'
            ],
            correctAnswer: 0,
            explanation: 'The rabbit carries a temperature-sensitive tyrosinase that makes pigment only in cool skin, so a chilled patch grows black fur. The genotype is unchanged; cold alters enzyme activity, not DNA, and every cell carries the same pigment genes.'
          },
          {
            question: 'Eggs from one red-eared slider clutch are split between incubators at 26 °C and 31 °C. Nearly all hatchlings from 26 °C are male and nearly all from 31 °C are female. What does this result show?',
            options: [
              'Sex in this species is set by conditions during development',
              'The warmer incubator killed most of the male embryos early on',
              'Eggs placed in each incubator had different sex chromosomes',
              'Females carry two copies of an allele for heat tolerance'
            ],
            correctAnswer: 0,
            explanation: 'Eggs from the same clutch were divided at random, so the sex difference is caused by incubation temperature, which is temperature-dependent sex determination. Nearly all eggs hatched in both groups, so differential death of males cannot explain the pattern.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p2-s4-mechanisms',
      type: 'text' as const,
      content: `
### Two mechanisms in detail

#### Worked case 1: the Himalayan rabbit shaving experiment
Himalayan rabbits carry a mutant allele of the gene for **tyrosinase**, the enzyme that starts the pathway making the dark pigment melanin. The mutant enzyme folds correctly and works at cool temperatures but loses function at normal core body temperature.

| Step | Observation | Interpretation |
|---|---|---|
| 1 | Body fur is white; ears, nose, paws and tail are black | Extremities lose heat fastest, so the skin there is cooler |
| 2 | Fur on the back is shaved and an ice pack is held on the skin while it regrows | The experimenter lowers skin temperature in one region |
| 3 | The new fur on the patch is black | Cold skin lets the enzyme work, so pigment is made |
| 4 | When that black fur is later shed and regrows without ice, it is white again | The genotype never changed; the phenotype tracks temperature |

Siamese cats show the same "pointed" pattern for the same reason, and their points often darken in colder climates.

#### Worked case 2: hydrangea sepal color
The showy "petals" of a hydrangea are actually **sepals**. Their color depends on a pigment that turns blue when it binds **aluminum ions**.
- In **acidic soil** (low pH), aluminum compounds dissolve, roots absorb aluminum and the sepals turn **blue**.
- In **neutral or alkaline soil**, aluminum stays locked in insoluble compounds, little reaches the plant and the sepals stay **pink**.

Gardeners exploit this: adding aluminum sulfate or acidifying the soil turns a pink bush blue, and adding lime (which raises pH) turns it pink. Cuttings of one bush, which are genetically identical, can bloom in different colors in different gardens.
      `
    },
    {
      id: 'bio-fitness-environment-p2-s5-human-examples',
      type: 'text' as const,
      content: `
### Plasticity in humans

#### Phenylketonuria (PKU)
PKU is an autosomal recessive disorder. People with two mutant alleles cannot make a working **phenylalanine hydroxylase**, the enzyme that converts the amino acid phenylalanine to tyrosine. On a normal diet, phenylalanine builds up and damages the developing brain, causing intellectual disability.

Newborns are screened for PKU. A child who starts a **low-phenylalanine diet** in infancy develops normally. The genotype is exactly the same as in an untreated child; the environment (diet) changes the phenotype. PKU is a powerful reminder that "genetic" does not mean "unchangeable."

#### Height and nutrition
Adult height is strongly heritable, yet average heights in many countries rose substantially during the twentieth century, far too fast for allele frequencies to account for it. Better childhood nutrition and less childhood disease let more people reach the upper part of their genetic range. Heritability tells you how much of the variation **within a population in one environment** is due to genes; it does not mean the environment has no effect.

| Case | Genotype | Environmental factor | Phenotypic outcome |
|---|---|---|---|
| Untreated PKU | Two mutant alleles | Normal diet | Phenylalanine builds up; brain damage |
| Treated PKU | Two mutant alleles | Low-phenylalanine diet | Normal development |
| Twentieth-century height | Little change in gene pool | Improved nutrition and health | Taller average adults |
      `
    },
    {
      id: 'bio-fitness-environment-p2-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each phenotype to the environmental cue that produces it**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hydrangea sepals turn blue',
            options: ['soil pH', 'day length', 'predator chemicals', 'incubation temperature']
          },
          {
            label: 'Snowshoe hare molts into a white coat',
            options: ['incubation temperature', 'soil pH', 'day length', 'predator chemicals']
          },
          {
            label: 'Daphnia grows a tall helmet and long tail spine',
            options: ['day length', 'predator chemicals', 'incubation temperature', 'soil pH']
          },
          {
            label: 'Alligator hatchling develops as female',
            options: ['predator chemicals', 'incubation temperature', 'soil pH', 'day length']
          }
        ],
        correctAnswers: ['soil pH', 'day length', 'predator chemicals', 'incubation temperature'],
        hint1: 'Hydrangea color depends on whether aluminum dissolves in the soil, which depends on acidity.',
        hint2: 'Seasonal coat change must anticipate snow, so it is triggered by the most reliable seasonal signal, not by snow itself.',
        hint3: 'Daphnia respond to substances in the water; alligator and turtle eggs respond to the warmth of the nest.',
        explanation: 'Soil pH controls aluminum uptake and hydrangea color; shortening day length triggers the hare molt; predator chemical cues induce Daphnia defenses; and nest temperature sets alligator sex.'
      }
    },
    {
      id: 'bio-fitness-environment-p2-s7-plasticity-evolves',
      type: 'text' as const,
      content: `
### Plasticity itself can evolve

Different genotypes in a population often have **different reaction norms**. One clone of a plant may lengthen its stems strongly in shade, while another barely responds. Because the *ability to respond* differs among genotypes and is inherited, natural selection can act on it.

- In a habitat where shade comes and goes, genotypes that respond well to shade may leave more offspring, so alleles for a strong response increase.
- In a stable habitat, a fixed phenotype may be favored instead, especially if maintaining the machinery for plasticity is costly.
- Induced defenses are a good example of a cost: *Daphnia* that build helmets often reproduce less, so building them only when predators are present saves resources.

### Plasticity is NOT inheritance of acquired traits
An older idea, often linked to Lamarck, held that traits an organism acquires during life (a stretched neck, a strong muscle) are passed to its offspring. Plasticity does not work this way:

| Claim | Correct? | Why |
|---|---|---|
| A Himalayan rabbit whose shaved back regrew black fur under an ice pack will pass a black back to its young | No | Cold changed enzyme activity in that skin, not the DNA in the rabbit's eggs or sperm; its young have the usual pale body with dark points |
| A population can evolve a *stronger* plastic response over generations | Yes | Genotypes that differ in their reaction norms are selected, so allele frequencies change |

> **AP Connection:** When a free-response question asks whether a change is "evolution," check whether **allele frequencies in the population** changed across generations. A phenotype that changed within one individual's lifetime, with no change in DNA, is plasticity, not evolution.
      `
    },
    {
      id: 'bio-fitness-environment-p2-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Exit check: environment and phenotype**
      `,
      exercise: {
        questions: [
          {
            question: 'Genetically identical Daphnia clones are raised in two tanks. One tank holds water in which predatory fish recently lived; the other holds clean water. Only the Daphnia in the first tank grow tall helmets and long tail spines. Which conclusion is best supported?',
            options: [
              'The helmet is an inducible trait triggered by a cue from the fish',
              'The helmet came from mutations caused by the used fish water',
              'The helmet allele was favored by selection in the first tank',
              'The two tanks must have held Daphnia of two different genotypes'
            ],
            correctAnswer: 0,
            explanation: 'The clones are genetically identical, so the difference must come from the environment; a chemical cue left by the fish induced the helmets. Selection could not explain it, because no fish were present to eat the unprotected individuals and the clones share one genotype.'
          },
          {
            question: 'A newborn is diagnosed with phenylketonuria (PKU), a recessive disorder in which the enzyme that converts phenylalanine to tyrosine does not work. After a low-phenylalanine diet started in infancy, the child develops normally. Which statement is accurate?',
            options: [
              'The diet changes phenotype, not genotype',
              'The diet repairs the mutant allele in the liver cells',
              'The child\'s offspring cannot inherit the PKU allele',
              'The diet turns the recessive alleles into dominant ones'
            ],
            correctAnswer: 0,
            explanation: 'Diet changes the phenotype by keeping phenylalanine low, while both mutant alleles remain in every cell. Because the DNA is unchanged, the child can still pass a PKU allele to future offspring.'
          },
          {
            question: 'Two genotypes of a wildflower are grown in sun and in shade. Genotype 1 grows long stems in shade and short stems in sun; Genotype 2 grows short stems in both. If shading trees spread across the habitat and long stems in shade raise seed output, what will most likely happen over many generations?',
            options: [
              'Alleles of genotype 1 rise, so the shade response becomes more common',
              'Plants of genotype 2 learn over time to lengthen their stems in the shade',
              'Long stems grown in shade are passed directly to the seeds',
              'Nothing changes, as a plastic response cannot be selected'
            ],
            correctAnswer: 0,
            explanation: 'The two genotypes differ in their reaction norms, and genotype 1 leaves more seeds in shade, so its alleles increase and the population evolves a stronger shade response. Plants do not learn new reaction norms, and a stem grown in one lifetime is not inherited directly.'
          }
        ]
      }
    }
  ]
};
