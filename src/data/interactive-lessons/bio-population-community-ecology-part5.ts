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
              'Forest X, because it has the same richness and one clearly dominant species',
              'Forest Y, because higher evenness lowers $\\Sigma (pi)^{2}$ and therefore raises D',
              'They are identical because richness (5 species) is the same',
              'Forest X, because Simpson\'s index depends only on species number'
            ],
            correctAnswer: 1,
            explanation: 'With equal richness, the more EVEN community (Forest Y) has smaller $\\Sigma (pi)^{2}$ and thus larger D. The trap "they are identical because richness is the same" ignores evenness — Simpson\'s index responds to BOTH components, so a community dominated by one species (Forest X, where one $pi^{2}$ ≈ 0.81 inflates the sum) scores much lower despite equal species counts.'
          }
        ]
      }
    },
    {
      id: 'pcp5-succession',
      type: 'text' as const,
      content: `
### Ecological Succession

Communities are not static; they change over time through **ecological succession** — a directional, somewhat predictable sequence of species replacements following a disturbance or the appearance of new substrate.

| Feature | Primary succession | Secondary succession |
|---|---|---|
| Starting point | Lifeless, **no soil** (bare rock, new volcanic island, retreating glacier) | Disturbed area where **soil remains** (after fire, flood, abandoned farm field) |
| First colonizers | **Pioneer species** — lichens, mosses, nitrogen-fixing bacteria that build soil | Fast-growing weeds, grasses, and seeds already in the soil seed bank |
| Speed | Very slow (soil must form first, over centuries) | Faster (soil and some organisms already present) |
| Example | Lichens colonizing new lava, eventually leading to forest | Forest regrowing after a wildfire |

The sequence proceeds from **pioneer species** toward a relatively stable **climax community**. Pioneers (such as lichens, which secrete acids that break down rock, and nitrogen-fixers that enrich the substrate) modify the environment in ways that make it suitable for later, often larger and more competitive species — a process of facilitation that gradually changes who can live there.

> **Key distinction:** the presence or absence of **soil** is what separates primary from secondary succession. Secondary succession is faster *because* it starts with intact soil (and often a seed bank and surviving roots), whereas primary succession must first build soil from bare mineral substrate.
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
### Checkpoint — Succession & Stability
      `,
      exercise: {
        questions: [
          {
            question: 'A retreating glacier exposes bare rock with no soil. Lichens and nitrogen-fixing bacteria colonize first, gradually building soil that later supports shrubs and trees. This sequence is:',
            options: [
              'Secondary succession, because organisms eventually form a forest',
              'Primary succession, because it begins on a lifeless substrate that lacks soil',
              'A trophic cascade initiated by the lichens',
              'Resource partitioning among the pioneer species'
            ],
            correctAnswer: 1,
            explanation: 'Succession starting on bare rock with NO pre-existing soil is primary succession; pioneer lichens and nitrogen-fixers must build soil before larger plants can establish. The trap "secondary succession" is defined by an intact soil layer remaining after a disturbance (e.g., post-fire) — but here there is no soil at all initially, which is the defining feature of PRIMARY succession.'
          },
          {
            question: 'After a wildfire burns a forest but leaves the soil and seed bank intact, regrowth begins within months with grasses and fast-growing weeds. Compared with succession on new volcanic rock, this secondary succession is:',
            options: [
              'Slower, because fire sterilizes the soil completely',
              'Faster, because intact soil and a surviving seed bank let colonizers establish quickly',
              'Identical in rate, because succession always proceeds at the same pace',
              'Impossible, because climax communities cannot regrow after fire'
            ],
            correctAnswer: 1,
            explanation: 'Secondary succession is faster than primary because the soil (and often a seed bank and surviving roots) is already present, so colonizers skip the slow soil-building stage. The trap "slower because fire sterilizes the soil" overstates fire damage — most fires leave soil and seed banks viable, which is exactly WHY secondary succession outpaces primary succession on bare rock.'
          },
          {
            question: 'A monoculture plantation of a single tree species and a species-rich natural forest both face a new fungal pathogen specialized on that tree species. Which outcome is most consistent with the diversity-stability relationship?',
            options: [
              'The diverse forest is completely immune because high diversity guarantees immunity',
              'The monoculture is more likely to suffer catastrophic loss, while the diverse forest is buffered by functional redundancy',
              'Both lose the same proportion because diversity does not affect stability',
              'The monoculture is more stable because one species is easier to manage'
            ],
            correctAnswer: 1,
            explanation: 'A monoculture has no redundancy, so a specialist pathogen can devastate it, whereas a diverse forest is buffered because other species fill functional roles (the insurance effect). The trap "completely immune because diversity guarantees immunity" overstates the relationship — diversity confers greater resistance and resilience as a TENDENCY, not absolute immunity, so "completely immune" is the wrong, overclaiming choice.'
          }
        ]
      }
    }
  ]
};
