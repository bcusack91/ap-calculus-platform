export const apesBiodiversityPart2Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbiod2-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 2 of 7 — Genetic Diversity and Measuring Species Diversity**

---

| Section |
|---------|
| 🧬 Genetic Diversity and Adaptive Potential |
| Population Bottlenecks and Inbreeding |
| Richness, Evenness and Percent Composition |
| Simpson's Diversity Index |
| Why Diversity Builds Resilience |

> 🔑 **Key Concept:** Part 1 named the three levels of biodiversity. This part goes deeper into two of them. Genetic diversity decides whether a **population** can survive a new stress. Species diversity can be **measured** from field counts, and the number you calculate predicts how well an **ecosystem** will recover from a disruption.
      `
    },
    {
      id: 'apesbiod2-genetic',
      type: 'text' as const,
      content: `
## 🧬 Genetic Diversity and Adaptive Potential

**Genetic diversity** is the variety of alleles (versions of genes) in a population. It is the raw material for natural selection. When a new stress arrives (a disease, a drought, a warmer summer), a genetically diverse population is more likely to contain **some** individuals whose alleles let them survive and reproduce. Those survivors pass the useful alleles on, and the population persists. This capacity to respond is called **adaptive potential**.

> 🔑 **AP Connection:** The CED states it directly: the more genetically diverse a population is, the better it can respond to environmental stressors. On an FRQ, link low genetic diversity to a specific consequence, such as "every individual is susceptible to the same disease."

---

## Population Bottlenecks

A **population bottleneck** is a sharp drop in population size, caused by hunting, habitat loss, disease or a natural disaster. The few survivors carry only a **sample** of the original gene pool, so many alleles disappear at once. Even if the population later rebounds, the lost alleles do not come back: new alleles arise only by mutation, which takes many generations.

| Species | What happened | Genetic result |
|---|---|---|
| **Northern elephant seal** | Hunted for oil in the 1800s; by the 1890s perhaps only a few dozen to about 100 animals remained | The population has rebounded to well over 100,000, but genetic variation is extremely low |
| **Cheetah** | Scientists think one or more severe bottlenecks occurred, most likely near the end of the last ice age, about 10,000 to 12,000 years ago | Unrelated cheetahs are so genetically similar that skin grafts between them are usually accepted |

> ⚠️ **Common error:** A bottleneck is about **genes lost**, not just individuals lost. A population can recover in **number** and still have a bottleneck's low diversity for thousands of years.

---

## Inbreeding Depression

In a small population, individuals often mate with relatives. Relatives share many alleles, so their offspring are more likely to inherit **two copies of the same allele**, including harmful recessive alleles that are normally hidden in carriers. The result is **inbreeding depression**: lower fertility, more birth defects and weaker immune systems.

**Case: the Florida panther.** By the early 1990s, only about 20 to 30 adult panthers remained in south Florida. Many had kinked tails, heart defects and poor sperm quality. In 1995, wildlife managers released **8 female pumas from Texas** to bring in new alleles (a strategy called *genetic rescue*). Kittens with Texas ancestry had fewer defects, and the population has since grown to well over 100 adults.

> 🔑 **Key Concept:** Small populations face a downward spiral: fewer individuals → more inbreeding and lost alleles → lower survival and reproduction → even fewer individuals. Protecting and managing endangered species is covered in **Biodiversity Conservation** (Unit 9).
      `
    },
    {
      id: 'apesbiod2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Northern elephant seals were hunted down to perhaps 100 or fewer animals by the 1890s. Their numbers have since grown to well over 100,000, but their genetic variation is still extremely low. What best accounts for this?',
            options: [
              'The few survivors carried only part of the original gene pool, and new alleles arise by mutation very slowly',
              'Rapid population growth spreads the existing alleles across far more individuals and dilutes them',
              'Hunters removed mostly the weakest seals and left a uniform group of the strongest animals',
              'Large populations lose alleles faster than small ones do, so recovery itself lowers variation'
            ],
            correctAnswer: 0,
            explanation: 'A bottleneck removes alleles all at once, and regrowth only multiplies the alleles the survivors happened to carry. Population growth does not dilute or remove alleles, and genetic drift erodes variation fastest in small populations, not large ones.'
          },
          {
            question: 'Which outcome is the most direct effect of mating between close relatives in a small, isolated group of animals?',
            options: [
              'More young inherit two copies of harmful recessive alleles',
              'New beneficial mutations appear more often in every generation',
              'Offspring grow larger because competition for mates is reduced',
              'Alleles flow in from neighboring groups more quickly than before'
            ],
            correctAnswer: 0,
            explanation: 'Relatives share alleles, so their offspring are more likely to be homozygous for harmful recessive alleles, which is the cause of inbreeding depression. Inbreeding does not raise mutation rates, and an isolated group receives no outside alleles.'
          },
          {
            question: 'Cheetahs have so little genetic variation that skin grafts between unrelated cheetahs are usually accepted. Which threat does this make most dangerous for cheetahs?',
            options: [
              'Competition with lions and hyenas for prey',
              'A new disease that no individual can resist',
              'Gradual conversion of grassland to farms and ranches',
              'Seasonal dry periods that reduce prey numbers'
            ],
            correctAnswer: 1,
            explanation: 'When individuals are nearly identical genetically, a pathogen that kills one can kill almost all, because no individuals carry resistance alleles. Competition, habitat conversion and dry seasons are real threats, but low genetic variation does not specifically magnify them the way it magnifies disease.'
          }
        ]
      }
    },
    {
      id: 'apesbiod2-measuring',
      type: 'text' as const,
      content: `
## Richness, Evenness and Percent Composition

Recall from Part 1:
- **Species richness** = the number of different species in an area.
- **Species evenness** = how equally individuals are spread among those species.

Two communities can have the **same richness** and very different diversity. Look at these meadow surveys:

| Species | Meadow A (individuals) | Meadow B (individuals) |
|---|---|---|
| Clover | 25 | 85 |
| Goldenrod | 25 | 5 |
| Milkweed | 25 | 5 |
| Aster | 25 | 5 |
| **Total (N)** | **100** | **100** |

Both meadows have a richness of **4**. Meadow A is perfectly even. Meadow B is dominated by clover, so it has **low evenness**.

### Percent Composition

**Percent composition** is the share of all individuals that belong to one species:

$$\\text{percent composition} = \\frac{n}{N} \\times 100$$

where $n$ is the number of individuals of that species and $N$ is the total number of individuals.

**Worked Example: Percent composition in Meadow B**

1. Clover: $\\dfrac{85}{100} \\times 100 = 85\\%$
2. Each of the other three species: $\\dfrac{5}{100} \\times 100 = 5\\%$
3. Check: $85 + 5 + 5 + 5 = 100\\%$ ✓

One species makes up 85% of Meadow B, a clear sign of low evenness.

---

## Simpson's Diversity Index

Field ecologists combine richness and evenness into one number. A version you can calculate by hand is **Simpson's diversity index**:

$$D = 1 - \\Sigma \\left(\\frac{n}{N}\\right)^2$$

**What D means:** the probability that two individuals picked at random from the sample (with replacement) belong to **different** species. D runs from **0** (only one species) up toward **1** (many species, evenly spread). Higher D = more diverse.

### Worked Example: Meadow A vs Meadow B

**Meadow A**

| Species | $n/N$ | $(n/N)^2$ |
|---|---|---|
| Clover | 25/100 = 0.25 | 0.0625 |
| Goldenrod | 0.25 | 0.0625 |
| Milkweed | 0.25 | 0.0625 |
| Aster | 0.25 | 0.0625 |
| **Sum** | | **0.25** |

$D = 1 - 0.25 = $ **0.75**

**Meadow B**

| Species | $n/N$ | $(n/N)^2$ |
|---|---|---|
| Clover | 85/100 = 0.85 | 0.7225 |
| Goldenrod | 0.05 | 0.0025 |
| Milkweed | 0.05 | 0.0025 |
| Aster | 0.05 | 0.0025 |
| **Sum** | | **0.73** |

$D = 1 - 0.73 = $ **0.27**

Same four species, but Meadow A's index is nearly three times higher, because evenness counts.

### Steps for Any Sample
1. Add up all individuals to get $N$.
2. Divide each species count by $N$.
3. Square each fraction.
4. Add the squares.
5. Subtract the sum from 1.

> 🔑 **AP Connection:** Some textbooks report Simpson's index without the "1 minus" step (where **lower** means more diverse), and Part 1's Shannon index (H) uses logarithms instead. Read the formula a question gives you, and always state which direction means "more diverse" in your answer.
      `
    },
    {
      id: 'apesbiod2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A student surveys Plot C and counts 50 trees: 20 oak, 15 maple, 10 hickory and 5 beech.

**1)** What percent of the trees in Plot C are oak? (number only)

**2)** Calculate Simpson's diversity index, $D = 1 - \\Sigma (n/N)^2$, for Plot C. (decimal)

**3)** Plot D also has 50 trees, but 45 are oak and 5 are maple. Calculate D for Plot D. (decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '0.7', '0.18'],
        hint1: 'Percent composition = (20 ÷ 50) × 100.',
        hint2: 'The fractions are 0.4, 0.3, 0.2 and 0.1. Square each one, add the squares, then subtract from 1.',
        hint3: 'The fractions are 0.9 and 0.1, so the squares are 0.81 and 0.01.',
        explanation: '1) 20 ÷ 50 = 0.40, or 40%. 2) 0.16 + 0.09 + 0.04 + 0.01 = 0.30, so D = 1 − 0.30 = 0.70. 3) 0.81 + 0.01 = 0.82, so D = 1 − 0.82 = 0.18: lower richness and lower evenness give a much lower index.'
      }
    },
    {
      id: 'apesbiod2-resilience',
      type: 'text' as const,
      content: `
## Why Diversity Builds Resilience

**Resilience** is an ecosystem's ability to return to its original state after a disruption. The CED states that ecosystems with a larger number of species are more likely to recover from disruptions. Two ideas explain why.

| Idea | How it works | Example |
|---|---|---|
| **Functional redundancy** | Several species do similar jobs, so if one declines, another can fill in | If one pollinating bee species crashes, other bees and flies still visit the flowers |
| **Response diversity** | Species and genotypes differ in what they tolerate, so a single stress rarely harms them all | Drought-tolerant grasses keep growing while moisture-loving grasses wilt |

**Field evidence.** In long-term grassland experiments at Cedar Creek, Minnesota, plots with more plant species lost a **smaller share** of their plant biomass during the 1987–88 drought and recovered faster than species-poor plots.

**Low genetic diversity, the human case.** In the 1840s, Ireland's poor depended heavily on one potato variety, planted from cuttings, so the plants were genetically almost identical. When potato blight arrived, nearly every field failed at once, and about one million people died in the famine that followed.

---

## Which Species Disappear First?

When habitat is lost, species do not vanish at random. The CED pattern:

1. **Specialists** go first. They need a narrow set of conditions or one food source (for example, a bird that nests only in old-growth tree cavities).
2. **Generalists** decline later, because they can use many foods and habitats.
3. Species with **large territories** (big predators such as wolves and large cats) decline early, because a shrinking habitat cannot hold enough territories for a viable population.

> 🔑 **AP Connection:** An FRQ answer that just says "diversity increases stability" earns little credit. Name the mechanism: "more species means some can fill the role of a species that is lost," or "more genetic variation means some individuals carry alleles to survive the new disease."
      `
    },
    {
      id: 'apesbiod2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Forest Plot X has a Simpson\'s diversity index (D = 1 − Σ(n/N)²) of 0.82, and Plot Y has an index of 0.41. Both plots contain the same six tree species. What can you conclude?',
            options: [
              'Plot X contains more tree species than Plot Y contains',
              'Trees in Plot X are spread more evenly among the six species',
              'Each species in Plot Y carries more genetic variation than the same species in Plot X',
              'Plot Y holds more trees in total than Plot X holds'
            ],
            correctAnswer: 1,
            explanation: 'With richness fixed at six species, the only way the index can differ is through evenness, so Plot X is more even. Simpson\'s index does not measure genetic variation, and it uses proportions, so it says nothing about total tree counts.'
          },
          {
            question: 'A severe drought strikes two grasslands of equal area. Grassland A has 16 plant species and Grassland B has 2. Based on field studies, which outcome is most likely?',
            options: [
              'Grassland B recovers faster, since fewer species compete for the water that remains',
              'Grassland A loses a smaller share of its plant growth, as some of its species tolerate drought',
              'The two grasslands lose the same share of growth, as drought harms all plants alike',
              'Grassland A loses more growth, as a larger number of species needs more water'
            ],
            correctAnswer: 1,
            explanation: 'More species means more variety in drought tolerance, so some species keep growing while others decline, which is what grassland experiments found. Drought does not harm all plants alike, and species-poor communities recover more slowly, not faster.'
          }
        ]
      }
    }
  ]
}
