export const bioPopulationPart5Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp5-intro',
      type: 'text' as const,
      content: `
## Biodiversity

**Part 5 of 7 — Population & Community Ecology**

**Biodiversity** describes the variety of life in a community. At the community level it has two distinct components, and a strong AP answer keeps them separate:

- **Species richness** — the *number* of different species present.
- **Species evenness** — how *equally* individuals are distributed among those species (their relative abundances).

These are independent. Two communities can have identical richness yet very different diversity:

| Community | Composition (100 individuals) | Richness | Evenness | Overall diversity |
|---|---|---|---|---|
| **A** | 25 + 25 + 25 + 25 of 4 species | 4 species | High (all equal) | High |
| **B** | 97 + 1 + 1 + 1 of 4 species | 4 species | Low (one dominant) | Low |

Both have 4 species (equal richness), but Community A is far more diverse because no single species dominates. A useful diversity index must reward **both** high richness and high evenness — which is exactly what Simpson's index does.
      `
    },
    {
      id: 'pcp5-simpson',
      type: 'text' as const,
      content: `
### Simpson's Diversity Index

**Simpson's Diversity Index** combines richness and evenness into one number. One common form is:

$D = 1 - \\sum (p_i)^2$

where $p_i$ is the **proportion** of the community made up by species $i$ (that is, species $i$'s count divided by the total number of individuals), and the sum $\\sum$ runs over all species. The term $\\sum (p_i)^2$ is the probability that two randomly drawn individuals belong to the **same** species; subtracting from 1 gives the probability they belong to **different** species. Higher $D$ means greater diversity, on a scale from 0 (one species only) up toward 1.

#### Worked computation

Consider a meadow sample of 100 insects:

| Species | Count | $p_i$ | $(p_i)^2$ |
|---|---|---|---|
| Beetle | 50 | 0.50 | 0.2500 |
| Ant | 30 | 0.30 | 0.0900 |
| Bee | 15 | 0.15 | 0.0225 |
| Fly | 5 | 0.05 | 0.0025 |
| **Total** | **100** | **1.00** | **0.3650** |

**Step 1 — find each $p_i$:** divide each count by 100 (column 3).

**Step 2 — square each proportion** (column 4).

**Step 3 — sum the squares:** $\\sum (p_i)^2 = 0.25 + 0.09 + 0.0225 + 0.0025 = 0.365$.

**Step 4 — subtract from 1:** $D = 1 - 0.365 = 0.635$.

So $D \\approx 0.64$. Interpretation: there is about a 64% chance that two randomly chosen insects are different species.

> **Evenness check:** if instead all four species had 25 individuals each, every $p_i = 0.25$, so $\\sum (p_i)^2 = 4 \\times (0.25)^2 = 4 \\times 0.0625 = 0.25$, giving $D = 1 - 0.25 = 0.75$. Same richness (4 species), but higher evenness pushes $D$ from 0.64 up to 0.75 — confirming that the index rewards evenness, not just species count.
      `
    },
    {
      id: 'pcp5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Diversity & Indices
      `,
      exercise: {
        questions: [
          {
            question: 'A pond sample contains 3 species: 80 Daphnia, 10 copepods, and 10 rotifers (100 total). Using Simpson\'s index D = 1 - $\\Sigma (pi)^{2}$, what is D?',
            options: [
              'D = 0.66',
              'D = 0.34',
              'D = 0.80',
              'D = 0.18'
            ],
            correctAnswer: 1,
            explanation: 'Proportions: 0.80, 0.10, 0.10. Squares: 0.64 + 0.01 + 0.01 = 0.66. D = 1 - 0.66 = 0.34. The trap "D = 0.66" reports $\\Sigma (pi)^{2}$ itself — the probability two individuals are the SAME species — without subtracting from 1. The whole point of the "1 −" step is to convert that into the probability of being DIFFERENT species, so you must finish the subtraction.'
          },
          {
            question: 'Forest X and Forest Y each contain exactly 5 tree species. In Forest X one species makes up 90% of trees; in Forest Y the five species are nearly equal in abundance. Which has higher Simpson\'s diversity, and why?',
            options: [
              'Forest X, because one species clearly dominates',
              'Forest Y, because greater evenness raises Simpson\'s D',
              'Neither, because both have the same richness',
              'Forest X, because Simpson\'s D counts only species'
            ],
            correctAnswer: 1,
            explanation: 'With equal richness, the more EVEN community (Forest Y) has smaller $\\Sigma (pi)^{2}$ and thus larger D. The trap "neither, because both have the same richness" ignores evenness — Simpson\'s index responds to BOTH components, so a community dominated by one species (Forest X, where one $pi^{2}$ ≈ 0.81 inflates the sum) scores much lower despite equal species counts.'
          }
        ]
      }
    },
    {
      id: 'pcp5-genetic-diversity',
      type: 'text' as const,
      content: `
### Diversity Within a Species: Genetic Diversity

Biodiversity is not only the number of species.  It also includes **genetic diversity** within each species, and the AP framework treats it as a key factor in how populations respond to change:

- The ability of a population to respond to changes in the environment is influenced by its **genetic diversity**.  Species and populations with little genetic diversity are at risk of decline or extinction.
- Genetically diverse populations are more resilient to environmental perturbation, because they are more likely to contain individuals that can withstand the new pressure.
- An allele that is adaptive in one environment may be harmful in another, because selective pressures differ.

| Case | What happened | Lesson |
|---|---|---|
| **Irish potato famine (potato blight)** | Most potatoes were one genetically uniform variety; a water mold destroyed nearly all of them | Low genetic diversity left no resistant plants |
| **Southern corn leaf blight (1970)** | Much of the US corn crop shared one genetic trait that made it susceptible to a fungus | A uniform crop failed across a huge area |
| **Prairie chickens, California condors, black-footed ferrets** | Populations shrank to very few individuals, losing genetic diversity | Small, low-diversity populations suffer reduced fertility and are vulnerable to disease |
| **Antibiotic resistance** | In a diverse bacterial population, a few cells already carry resistance alleles | Diversity lets some individuals survive a new pressure |

> **Connection:** genetic drift and bottlenecks (Natural Selection unit) are the usual reasons small populations lose genetic diversity.
      `
    },
    {
      id: 'pcp5-stability',
      type: 'text' as const,
      content: `
### Diversity, Stability, and Resilience

Why does biodiversity matter beyond cataloging species? Greater diversity tends to confer:

- **Stability** — resistance to change. A diverse community is buffered because different species respond differently to perturbations; if one declines, others can fill its functional role.
- **Resilience** — the capacity to recover after a disturbance.
- **Productivity** — diverse communities often use resources more completely (complementary niches), supporting higher overall productivity.

The mechanism is sometimes called the **insurance** or **redundancy** effect: when several species perform similar ecological functions, the loss or failure of one is compensated by the others, so ecosystem processes (pollination, decomposition, nutrient cycling) continue. A community dominated by a single species is far more vulnerable — a pest or pathogen specific to that species can devastate the whole system.

> **Common AP misconception to avoid:** high biodiversity does **not** make a community immune to disturbance. Diverse systems can still be damaged by fire, drought, or invasive species. The accurate claim is statistical and relative: greater diversity tends to make a community *more resistant and more able to recover* than an otherwise similar low-diversity community — not invulnerable. State the relationship as a tendency, not a guarantee.
      `
    },
    {
      id: 'pcp5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Genetic Diversity & Stability
      `,
      exercise: {
        questions: [
          {
            question: 'Two populations of the same plant species are hit by a new fungal disease. Population A is genetically diverse; Population B descends from a few cuttings of one plant. Which outcome is most likely?',
            options: [
              'Population B survives better, because identical plants share defenses',
              'Population A is more likely to include some resistant individuals that survive',
              'Both populations decline equally, because they are the same species',
              'Population A is completely immune because it is diverse'
            ],
            correctAnswer: 1,
            explanation: 'A genetically diverse population is more likely to contain individuals with alleles that let them withstand the new disease, so some survive and reproduce. A population of near-identical plants shares the same susceptibility. Diversity raises the chance of survival; it does not guarantee immunity.'
          },
          {
            question: 'Prairie chicken numbers in one state fell to under 50 birds, and egg hatching success dropped. After birds from larger, genetically different populations were introduced, hatching success rose. What best explains the recovery?',
            options: [
              'The new birds brought fresh food sources to the habitat',
              'Gene flow brought back alleles that the tiny population had lost',
              'The introduced birds outcompeted and replaced all the native birds',
              'Hatching success rose because the population got even smaller'
            ],
            correctAnswer: 1,
            explanation: 'In a very small population, genetic drift and inbreeding reduce genetic diversity, so harmful recessive alleles are more often homozygous and fertility drops. Introducing birds from other populations added new alleles (gene flow), restoring diversity and fitness.'
          },
          {
            question: 'A monoculture plantation of a single tree species and a species-rich natural forest both face a new fungal pathogen specialized on that tree species. Which outcome is most consistent with the diversity-stability relationship?',
            options: [
              'The diverse forest is completely immune to the pathogen',
              'The monoculture is more likely to suffer catastrophic loss',
              'Both forests lose the same proportion of their trees',
              'A monoculture is more stable and loses fewer trees'
            ],
            correctAnswer: 1,
            explanation: 'A monoculture has no redundancy, so a specialist pathogen can devastate it, whereas a diverse forest is buffered because other species fill functional roles (the insurance effect). The trap "completely immune" overstates the relationship — diversity confers greater resistance and resilience as a TENDENCY, not absolute immunity.'
          }
        ]
      }
    }
  ]
};
