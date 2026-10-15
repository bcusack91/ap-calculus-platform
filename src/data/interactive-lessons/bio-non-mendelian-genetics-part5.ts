export const bioNonMendelianPart5Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-5-intro-p1',
      type: 'text' as const,
      content: `
## Environmental Effects on Phenotype

**Part 5 of 7 — Environmental Effects on Phenotype**

Parts 1–4 asked how genotypes map to phenotypes. This part adds the second input: **the environment**. A genotype is not a fixed blueprint. It is a set of instructions whose expression depends on temperature, chemistry, light, diet and other conditions.

### Key terms

- **Phenotypic plasticity:** the ability of one genotype to produce different phenotypes in different environments.
- **Norm of reaction:** the full range of phenotypes a single genotype produces across a range of environments, often drawn as a line on a graph of phenotype against an environmental variable.
- **Genotype × environment interaction:** different genotypes respond differently to the same environmental change.

The rule to remember: **phenotype = genotype + environment + their interaction**. Two individuals with the same genotype can look different, and two individuals with different genotypes can look the same.

> **AP Connection:** CED topic 5.5 asks you to explain how the same genotype can result in multiple phenotypes under different environmental conditions. Expect a short scenario or a data table, and expect to name the environmental factor and the mechanism: an enzyme, a hormone or a change in gene expression.
      `
    },
    {
      id: 'non-5-examples',
      type: 'text' as const,
      content: `
### Classic Examples of Phenotypic Plasticity

| Organism | Environmental factor | Phenotypes from one genotype |
|---|---|---|
| Hydrangea | Soil pH | Blue flowers in acidic soil; pink flowers in neutral or alkaline soil |
| Himalayan rabbit, Siamese cat | Body-surface temperature | Dark fur on cool ears, nose, paws and tail; pale fur on the warm body |
| Arctic fox, snowshoe hare | Day length (season) | White winter coat; brown or gray summer coat |
| Many turtles | Egg incubation temperature | Warmer eggs develop mostly as females; cooler eggs mostly as males |
| Humans with PKU | Diet | Normal development on a low-phenylalanine diet; intellectual disability without it |
| Humans | Nutrition and health | Taller average height with better childhood nutrition |
| Humans | UV exposure | More melanin production (tanning) after sun exposure |

**How each one works:**

- **Hydrangea.** Acidic soil keeps aluminum ions soluble. Roots take up the aluminum, which combines with the flower's anthocyanin pigment and turns it blue. In neutral or alkaline soil, aluminum stays locked in the soil and the same pigment looks pink.
- **Siamese cats and Himalayan rabbits.** Their coat-color allele codes for a **temperature-sensitive tyrosinase**, the enzyme that starts melanin synthesis. It works only below core body temperature, so pigment forms only in the cooler extremities. Siamese kittens are born nearly all pale, because the uterus is uniformly warm.
- **Seasonal coats.** Shortening days in autumn trigger hormonal changes that cause a molt into white fur, which camouflages the animal against snow.
- **Temperature-dependent sex determination.** In many turtles and in crocodilians, the temperature during a sensitive window of embryonic development, not sex chromosomes, determines sex.
- **PKU.** People homozygous for a nonfunctional phenylalanine hydroxylase allele cannot break down phenylalanine. On a normal diet it builds up and damages the developing brain; a low-phenylalanine diet started in infancy prevents the damage. The genotype is unchanged; the phenotype depends on diet.
- **Height.** Average adult height rose in many countries during the 1900s, far too fast for allele frequencies to change. Better nutrition let more people reach their genetic potential.
      `
    },
    {
      id: 'non-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Same Genotype, Different Phenotype
      `,
      exercise: {
        questions: [
          {
            question: 'Two genetically identical hydrangea cuttings are planted, one in acidic soil and one in alkaline soil. One produces blue flowers and the other produces pink flowers. Which conclusion is best supported?',
            options: [
              'The two cuttings carry different alleles for flower color',
              'Soil chemistry changes how the same genotype is expressed',
              'The acidic soil caused a mutation in the pigment genes',
              'Flower color is controlled by codominant pigment alleles'
            ],
            correctAnswer: 1,
            explanation: 'The cuttings are genetically identical, so the color difference comes from the environment: aluminum available in acidic soil turns the pigment blue. Different or codominant alleles cannot explain clones that differ, and soil pH does not mutate pigment genes.'
          },
          {
            question: 'A Siamese cat has dark fur on its ears, paws and tail and pale fur over most of its body. What best explains this pattern?',
            options: [
              'Its extremities carry a different allele than its other cells',
              'Its trunk cells have lost the pigment gene that its paws retain',
              'Its pigment enzyme works only at cooler temperatures',
              'Its dark points come from codominance of two coat alleles'
            ],
            correctAnswer: 2,
            explanation: 'The cat\'s tyrosinase is temperature sensitive and works only in the cooler extremities, so melanin forms there. Every body cell has the same genotype, and codominance would not produce a pattern that follows skin temperature.'
          }
        ]
      }
    },
    {
      id: 'non-5-worked',
      type: 'text' as const,
      content: `
### Worked Example: The Himalayan Rabbit Ice-Pack Experiment

**Setup.** A Himalayan rabbit ($c^{h}c^{h}$) has a white body with dark ears, nose, feet and tail. A patch of white fur is shaved from its back, and an ice pack is kept on the patch while the fur grows back.

**Observation.** The fur that regrows under the ice pack is **dark**. Later, if that dark patch is shaved and the fur regrows at normal body temperature, it comes back **white**.

**Step 1 — Rule out a genetic change.** The rabbit's genotype did not change during the experiment. The same skin cells produced white fur, then dark fur, then white fur again, so a mutation cannot explain it.

**Step 2 — Identify the variable.** The only thing changed was the temperature of the skin where the hair was growing.

**Step 3 — Name the mechanism.** The $c^{h}$ allele codes for a tyrosinase that folds into its active shape only at lower temperatures. At core body temperature the enzyme is inactive and no melanin is made. Cooling the skin lets the enzyme work, so melanin is deposited in the growing hair.

**Conclusion.** One genotype gives two coat phenotypes, and temperature decides which one appears in each patch of skin. This connects to Unit 3: enzyme shape and activity depend on temperature.

### Reading Norm-of-Reaction Data

In classic transplant experiments, botanists grew cuttings (clones) of the same plants at several elevations. The hypothetical data below are modeled on that design. Each genotype is a single cloned plant, so differences **within a row** are environmental and differences **within a column** are genetic.

| Genotype | Height at 100 m (cm) | Height at 1,400 m (cm) | Height at 3,000 m (cm) |
|---|---|---|---|
| G1 | 60 | 40 | 20 |
| G2 | 45 | 42 | 38 |
| G3 | 30 | 35 | 25 |

What the table shows:

1. **Every genotype is plastic.** Each row changes with elevation.
2. **Plasticity differs between genotypes.** G1 changes by 40 cm across the range, but G2 changes by only 7 cm.
3. **The norms of reaction cross.** G1 is tallest at low elevation, but G2 is tallest at high elevation. No genotype is "best" everywhere, which is a genotype × environment interaction.
      `
    },
    {
      id: 'non-5-boxes',
      type: 'input-boxes' as const,
      content: `
### Practice — Read the Clone Table

Use the table of G1, G2 and G3 heights above.

**1)** By how many cm does the height of G1 change from 100 m to 3,000 m?
**2)** By how many cm does the height of G2 change across the same range?
**3)** What is the height, in cm, of the tallest genotype at 3,000 m?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '7', '38'],
        hint1: 'Read along the G1 row: 60 cm at low elevation, 20 cm at high elevation.',
        hint2: 'Read along the G2 row: 45 cm and 38 cm.',
        hint3: 'Compare the three values in the 3,000 m column: 20, 38 and 25.',
        explanation: 'G1 drops from 60 to 20 cm (40 cm), G2 from 45 to 38 cm (7 cm), and at 3,000 m the tallest plant is G2 at 38 cm. G1 is far more plastic, yet it is the shortest at high elevation.'
      }
    },
    {
      id: 'non-5-design',
      type: 'text' as const,
      content: `
### Designing an Experiment on Environmental Effects

To show that the environment changes a phenotype, **hold the genotype constant and vary one environmental factor**:

- Use genetically identical individuals: cuttings or clones of plants, inbred lines, or eggs split from the same clutch.
- Change only one variable (temperature, pH, light, diet), keep the others constant, and include enough individuals per group to see a consistent difference.
- To show the reverse, that genes differ, grow **different genotypes in one shared environment** (a common garden).

**Where the effect comes from.** Environmental signals act through the same machinery covered in gene regulation: they change enzyme activity (tyrosinase), hormone levels (seasonal molts) or which genes are transcribed. Some environmentally triggered changes in gene expression, such as DNA methylation, can persist through cell divisions without any change in DNA sequence.

### Common Mistakes

- Saying the environment "changed the genes." It changes **expression**, not the DNA sequence.
- Assuming that a trait influenced by the environment cannot be genetic. Height is strongly genetic **and** strongly affected by nutrition.
- Forgetting that natural selection acts on phenotypes. A plastic genotype that matches its phenotype to the season, like a white winter coat, can be favored by selection.
      `
    },
    {
      id: 'non-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Environment and Experimental Design
      `,
      exercise: {
        questions: [
          {
            question: 'A baby diagnosed with phenylketonuria (PKU) is raised on a low-phenylalanine diet and develops normally. Which statement about the child is accurate?',
            options: [
              'The diet repaired the mutant alleles in the child\'s cells',
              'The genotype is unchanged, but the diet altered the phenotype',
              'The child must have been heterozygous for the PKU allele',
              'The diet changed the PKU allele from recessive to dominant'
            ],
            correctAnswer: 1,
            explanation: 'The child still has two nonfunctional alleles; limiting phenylalanine prevents the buildup that would damage the brain. Diet does not repair DNA or change dominance, and heterozygotes do not develop PKU in the first place.'
          },
          {
            question: 'A student wants to test whether incubation temperature determines sex in a turtle species. Which design best isolates the effect of temperature?',
            options: [
              'Compare the sex ratios of wild turtles caught in warm and cool regions',
              'Incubate every egg at one temperature and compare different clutches',
              'Split eggs from each clutch among several constant temperatures',
              'Measure the adult body temperature of males and females of the species'
            ],
            correctAnswer: 2,
            explanation: 'Dividing each clutch among several temperatures holds genetic background constant while varying only temperature. Wild turtles from different regions differ in many factors besides temperature, a single temperature tests nothing, and adult body temperature cannot reveal what set sex during development.'
          },
          {
            question: 'In the clone table, G1 changes from 60 cm to 20 cm across elevations while G2 changes from 45 cm to 38 cm. Which statement best compares G1 with G2?',
            options: [
              'G1 is more plastic, varying in height more between elevations',
              'G1 is genetically taller, so it is tallest in every environment',
              'G1 is less plastic, since its height range is the smaller one',
              'G1 carries a mutation that is triggered at high elevation'
            ],
            correctAnswer: 0,
            explanation: 'A wider range of phenotypes across environments means greater plasticity, and G1 varies by 40 cm compared with 7 cm for G2. G1 is actually the shortest plant at 3,000 m, and clones grown from one plant do not differ by mutation.'
          }
        ]
      }
    }
  ]
}
