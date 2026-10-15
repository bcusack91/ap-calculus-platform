export const bioEcologyPart2Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p2-s1-intro',
      type: 'text' as const,
      content: `
## Biodiversity and Resilience

**Part 2 of 7 — Biodiversity and Resilience**

**Biodiversity** is the variety of life. Ecologists measure it at three levels, and each level protects an ecosystem in a different way.

| Level | What varies | Why it matters |
|---|---|---|
| **Genetic diversity** | Alleles within a population or species | Gives natural selection variation to act on. Some individuals may already carry traits that survive a new disease or climate. |
| **Species diversity** | The number and relative abundance of species in a community | Several species can perform similar jobs, so one species' loss does not stop a process like pollination or decomposition. |
| **Ecosystem diversity** | The variety of ecosystems in a region (forest, wetland, stream, meadow) | Different habitats support different species and act as refuges and sources of recolonists after a disturbance. |

You measured species diversity with Simpson's index in Population & Community Ecology part 5, and saw the basic claim that diversity buffers a community. This part makes that claim precise: what "stability" means, the mechanisms behind it, the field evidence for it, and what happens when diversity is very low.

The CED states the core idea directly: ecosystems with **fewer component parts** and **little diversity among the parts** are often **less resilient** to changes in the environment. That applies both to natural ecosystems and to artificial ones such as farm fields.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s2-resistance',
      type: 'text' as const,
      content: `
### Two parts of stability: resistance and resilience

"Stable" is too vague for an AP answer. Split it into two measurable properties:

- **Resistance** is how little an ecosystem changes *during* a disturbance. A highly resistant grassland loses only a little biomass in a drought.
- **Resilience** is how quickly and how completely an ecosystem returns to its earlier state *after* a disturbance.

#### Reading a stability graph

Picture a graph with time on the x-axis and some ecosystem function (plant biomass, for example) on the y-axis. The line runs level, drops when a disturbance hits, then climbs back.

| Feature of the curve | What it measures |
|---|---|
| Depth of the drop | **Resistance** (a shallow drop means high resistance) |
| Steepness of the climb and time to get back to the old level | **Resilience** (a fast, complete return means high resilience) |
| Whether the line ever returns to the old level | Whether the ecosystem recovered at all or shifted to a new state |

The two properties are independent. A system can drop sharply but bounce back fast (low resistance, high resilience), or barely drop but take years to recover from the change it did suffer.

> **AP Connection:** if an FRQ shows two curves after a disturbance, describe *both* the size of the drop and the speed of recovery, and name each with the correct term.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s3-mcq-stability',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Levels of Diversity and Stability
      `,
      exercise: {
        questions: [
          {
            question: 'Two regions of equal area contain the same 40 tree species in similar numbers. The second region also has wetlands, streams and meadows mixed among its forest. Which kind of diversity is clearly higher in the second region?',
            options: [
              'Genetic diversity within the trees',
              'Ecosystem diversity',
              'Tree species richness',
              'Tree species evenness'
            ],
            correctAnswer: 1,
            explanation: 'The second region contains more types of ecosystems, so its ecosystem diversity is higher. The tree species and their numbers are the same in both regions, so tree richness and evenness do not differ, and nothing in the description tells us about alleles within the trees.'
          },
          {
            question: 'After a hurricane, mangrove stand A lost 20% of its trees and stand B lost 60%. Both stands regrew to their pre-storm tree cover in six years. Compared with stand B, stand A showed greater:',
            options: [
              'Resilience, but not greater resistance',
              'Resistance and also greater resilience',
              'Resistance, but not greater resilience',
              'Neither resistance nor resilience'
            ],
            correctAnswer: 2,
            explanation: 'Stand A changed less during the storm, so it was more resistant. Both stands returned to their starting cover in the same six years, so stand A did not show greater resilience; if anything, stand B recovered more ground in the same time.'
          },
          {
            question: 'Which claim about biodiversity and ecosystem stability is best supported by ecological evidence?',
            options: [
              'Diverse communities cannot be damaged by drought or invasion',
              'More diverse communities tend to change less and recover faster after disturbance',
              'Less diverse communities recover faster, because they have fewer species to replace',
              'Diversity raises productivity but has no measurable effect on stability'
            ],
            correctAnswer: 1,
            explanation: 'Field and experimental studies show that more diverse communities tend to be more resistant and more resilient. Diversity does not make a community immune to damage, and simpler communities generally recover less well, not better.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p2-s4-mechanisms',
      type: 'text' as const,
      content: `
### Why diversity buffers change

Three mechanisms explain the pattern. They often act together.

**1. Functional redundancy.** Several species perform the same ecosystem function. If three bee species pollinate a crop and one declines, the other two keep pollination going. This is the "insurance" idea from Population & Community Ecology part 5.

**2. Response diversity.** Redundancy only helps if the redundant species do *not* all fail at once. Response diversity means species that do the same job respond **differently** to the same stress. Two grasses may both hold the soil, but one is drought-tolerant and the other survives flooding. Whichever stress arrives, one of them keeps working.

**3. The portfolio effect (asynchrony).** Populations of different species rise and fall at different times. When one species has a poor year, another has a good one, so the **total** biomass of the community varies less than any single species does. This works like a diversified investment portfolio.

| Mechanism | Key question to ask |
|---|---|
| Functional redundancy | Is more than one species doing this job? |
| Response diversity | Do those species react differently to the disturbance? |
| Portfolio effect | Do species' populations fluctuate out of step with each other? |

> **Misconception check:** diversity does not mean every species is equally important. A keystone species (Population & Community Ecology part 4) can matter far more than its numbers suggest. The CED lists keystone species, producers and essential biotic and abiotic factors as the parts that **maintain** an ecosystem's diversity. Part 3 shows what happens when such parts are removed.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s5-tilman',
      type: 'text' as const,
      content: `
### Field evidence: the Minnesota grassland drought

In 1994, David Tilman and John Downing reported results from long-term grassland plots at Cedar Creek in Minnesota. The plots differed in plant species richness. A severe drought struck in 1987–1988, and the researchers compared how plant biomass in each plot responded.

**Result:** plots with more plant species lost a **smaller fraction** of their biomass during the drought (higher resistance) and **recovered more fully** afterward (higher resilience). Species-poor plots were hit hardest.

The pattern looks like this (illustrative values, not the published data):

| Plot species richness | Biomass in drought year as a share of pre-drought biomass |
|---|---|
| 1–4 species | About one-fifth |
| 5–9 species | About one-third |
| 10 or more species | About one-half |

**Claim-evidence-reasoning, written out:**

- **Claim:** higher plant diversity increased the grassland's resistance to drought.
- **Evidence:** the share of biomass retained during the drought rose steadily with the number of species in a plot.
- **Reasoning:** richer plots were more likely to contain drought-tolerant species (response diversity), which kept producing biomass while drought-sensitive species declined.

**A fair limitation:** the differences in richness in these plots arose partly from nitrogen-addition treatments, so critics asked whether the fertilizer, not diversity, explained the result. Later experiments that planted plots with chosen numbers of species found the same general pattern. On an FRQ, noting a possible confounding variable like this is a strong move.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Practice — Name the Mechanism

Choose the mechanism that each observation illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three bee species pollinate the same orchard; when one declines, the other two keep pollination going',
            options: ['response diversity', 'functional redundancy', 'portfolio effect', 'competitive exclusion']
          },
          {
            label: 'Two grasses both hold the soil, but one survives drought and the other survives flooding',
            options: ['functional redundancy', 'competitive exclusion', 'response diversity', 'portfolio effect']
          },
          {
            label: 'Species populations rise and fall in different years, so total community biomass stays fairly steady',
            options: ['portfolio effect', 'response diversity', 'competitive exclusion', 'functional redundancy']
          }
        ],
        correctAnswers: ['functional redundancy', 'response diversity', 'portfolio effect'],
        hint1: 'Redundancy is about how many species do the same job.',
        hint2: 'Response diversity is about how differently those species react to a stress.',
        hint3: 'The portfolio effect is about timing: fluctuations that cancel out in the total.',
        explanation: 'Several pollinators doing one job is functional redundancy. Soil-holding species that tolerate different stresses show response diversity. Out-of-step population swings that steady the total are the portfolio effect.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p2-s7-genetic',
      type: 'text' as const,
      content: `
### When diversity is very low: genetic uniformity

Low **genetic** diversity is dangerous for the same reason low species diversity is. If every individual is nearly identical, a disease or stress that harms one harms all of them. No individuals carry the variation that would let them survive and repopulate.

#### Case: the Irish potato famine

- In the 1840s, much of Ireland's population depended on the potato for food.
- Potatoes were planted from tubers (pieces of the parent plant), which is **asexual propagation**. A field of one variety was effectively a field of clones, and only a few varieties were widely grown.
- Beginning in 1845, **late blight**, caused by *Phytophthora infestans*, swept through the crop. *P. infestans* is an **oomycete** (a water mold), not a true fungus.
- Because the plants were genetically uniform, almost none resisted the pathogen. About a million people died and more than a million emigrated.

#### Case: southern corn leaf blight

In 1970, a fungal blight destroyed roughly 15 percent of the United States corn harvest. Most hybrid corn planted that year shared the same cytoplasm type, and that type was highly susceptible to the new strain of the pathogen.

#### The lesson for artificial ecosystems

A **monoculture** (one crop variety over a large area) is an ecosystem with few component parts and little diversity among them. It can be very productive in good conditions, but it is exactly the kind of system the CED describes as **less resilient**. Farmers and seed banks keep many crop varieties and wild relatives partly as a store of genetic variation for breeding resistance.

> **Link to evolution:** genetic diversity is the raw material for natural selection (Unit 7). A population with little variation has a smaller chance that any individual already carries an allele that survives a new disease.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Genetic Uniformity and Resilience
      `,
      exercise: {
        questions: [
          {
            question: 'Potatoes grown in Ireland in the 1840s were propagated from tubers of very few varieties. Why did this make the crop so vulnerable to Phytophthora infestans?',
            options: [
              'The pathogen reproduced faster on potato than on any other host',
              'The plants were near-clones, so few or none carried alleles for resistance',
              'Asexual propagation raised the mutation rate of the potato plants',
              'Cool, wet weather alone allowed the blight to spread so widely'
            ],
            correctAnswer: 1,
            explanation: 'Asexual propagation of a few varieties left the crop almost genetically identical, so a pathogen that could infect one plant could infect nearly all of them. Weather helped the blight spread, but genetic uniformity is why so few plants survived it.'
          },
          {
            question: 'A farmer replaces a mixed pasture of 15 plant species with a single high-yield grass variety. Which prediction about the new pasture is most consistent with CED 8.6?',
            options: [
              'It will resist pests better, since every plant has the same defenses',
              'It will recover faster from disturbance, since it has fewer parts',
              'It will be less resilient to drought or a new pest',
              'It will keep the same stability, since its total yield is similar'
            ],
            correctAnswer: 2,
            explanation: 'A single-variety pasture has few component parts and little diversity among them, which the CED identifies as making an ecosystem less resilient. Identical defenses mean a pest that overcomes one plant can overcome them all.'
          }
        ]
      }
    }
  ]
};
