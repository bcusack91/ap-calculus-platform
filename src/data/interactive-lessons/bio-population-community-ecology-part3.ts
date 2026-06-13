export const bioPopulationPart3Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp3-intro',
      type: 'text' as const,
      content: `
## r vs. K Selection

**Part 3 of 7 — Population & Community Ecology**

Natural selection shapes not just anatomy but an organism's entire **life history** — the schedule of growth, reproduction, and survival across its lifespan. Because energy and time are finite, every species faces **trade-offs**: resources spent on many offspring cannot also be spent on a few large, well-cared-for offspring. Two contrasting strategies anchor the ends of a continuum.

- **r-selected species** maximize the per-capita rate of increase $r$. They reproduce early, fast, and in huge numbers, accepting high offspring mortality. They thrive where conditions are unstable or unpredictable and population size is often far below $K$ — the regime where $\\frac{(K-N)}{K} \\approx 1$ and rapid growth pays off.
- **K-selected species** are adapted to live at or near carrying capacity $K$, where competition is intense. They produce few offspring, invest heavily in each, and compete efficiently for limited resources.

> **The continuum caution (an AP trap):** r- and K-selection are the *endpoints* of a spectrum, not two rigid boxes. Most species fall somewhere in between and show a mix of traits. Use the labels as a comparative tool, not as strict either/or categories.
      `
    },
    {
      id: 'pcp3-table',
      type: 'text' as const,
      content: `
### r-Selected vs. K-Selected: Trait Comparison

| Trait | r-selected | K-selected |
|---|---|---|
| Body size | Small | Large |
| Number of offspring | Many | Few |
| Parental care | Little or none | Extensive |
| Age at first reproduction | Early | Late |
| Reproductive events | Often one, then die (semelparous) | Repeated over a long life (iteroparous) |
| Lifespan | Short | Long |
| Typical survivorship curve | Type III | Type I |
| Population stability | Boom-and-bust; rarely near K | Stable; usually near K |
| Typical environment | Unstable, unpredictable, disturbed | Stable, predictable, crowded |
| Examples | Insects, weeds, bacteria, many rodents, dandelions | Elephants, whales, humans, oak trees, condors |

The logic ties directly to the growth models. Where disturbance keeps N low (so $\\frac{(K-N)}{K} \\approx 1$), the winner is whoever reproduces fastest — favoring r-selection. Where the population sits near $K$ (so $\\frac{(K-N)}{K} \\rightarrow 0$ and competition is fierce), the winner is whoever competes best per offspring — favoring K-selection.
      `
    },
    {
      id: 'pcp3-survivorship',
      type: 'text' as const,
      content: `
### Survivorship Curves — Three Patterns

A **survivorship curve** plots the proportion of a cohort (a group born at the same time) still alive against age. By convention the **y-axis is logarithmic** (number of survivors per 1,000, on a log scale), so that a constant *proportional* death rate appears as a straight line. There are three idealized shapes.

| Type | Shape | Mortality pattern | Life-history fit | Examples |
|---|---|---|---|---|
| **Type I** | Flat then plunges late | Low death rate early/mid-life; most deaths concentrated in old age | K-selected | Humans, elephants, large mammals |
| **Type II** | Straight diagonal line | Constant death rate at every age | Intermediate | Many birds, squirrels, some lizards, hydra |
| **Type III** | Steep drop then levels off | Very high death rate early; few survivors live long | r-selected | Oysters, frogs, many fish, oak trees (many acorns) |

> **Axis trap:** because the y-axis is a **log scale**, a *straight diagonal* (Type II) means a **constant percentage** dying per time unit, not a constant *number*. Students who read the axis as linear misinterpret the curves. A Type III species like an oyster releases millions of larvae; nearly all die quickly (the steep initial plunge), but the handful that settle successfully then survive well (the leveling tail).

Type I and Type III are near-mirror images: Type I postpones mortality to the end of life (heavy parental investment, few offspring), while Type III front-loads mortality at the start (minimal investment, many offspring).
      `
    },
    {
      id: 'pcp3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Classifying Life Histories
      `,
      exercise: {
        questions: [
          {
            question: 'A newly described marine fish releases 2 million eggs per spawning, provides no parental care, matures within months, and has a very high early death rate. Which classification and survivorship curve best fit this species?',
            options: [
              'K-selected with a Type I survivorship curve',
              'r-selected with a Type III survivorship curve',
              'K-selected with a Type III survivorship curve',
              'r-selected with a Type I survivorship curve'
            ],
            correctAnswer: 1,
            explanation: 'Enormous offspring number, no parental care, early maturity, and high juvenile mortality are textbook r-selection, which pairs with a Type III curve (steep early die-off). The trap "K-selected with Type III" mixes incompatible traits — K-selected species produce FEW offspring with heavy care and show Type I survivorship. The huge egg count alone rules out K-selection.'
          },
          {
            question: 'On a survivorship curve, an animal population plots as a straight diagonal line on the standard (logarithmic y-axis) graph. What does this indicate?',
            options: [
              'A constant NUMBER of individuals dies in each time interval',
              'A constant PROPORTION of individuals dies in each time interval (Type II)',
              'Most deaths occur in old age, indicating Type I survivorship',
              'Mortality is highest among the youngest individuals'
            ],
            correctAnswer: 1,
            explanation: 'A straight line on the log-scaled y-axis is Type II survivorship — a constant per-capita (proportional) death rate at every age. The trap "constant NUMBER dies" is the key misread: on a LOG axis, equal proportions (not equal counts) plot as a straight line. Equal numbers per interval would actually curve on a log plot.'
          },
          {
            question: 'A biologist notes that a tree species produces thousands of tiny seeds with no provisioning, yet textbooks list mature oaks as long-lived and competitive. Why can a single species show both r-like and K-like features?',
            options: [
              'The textbook is simply wrong; species are strictly r OR K',
              'r- and K-selection are endpoints of a continuum, so real species often mix traits',
              'The tree switches its strategy each year depending on weather',
              'Producing many seeds automatically makes a species fully r-selected in every trait'
            ],
            correctAnswer: 1,
            explanation: 'r- and K-selection are ends of a spectrum; many organisms combine traits (here, many cheap seeds = r-like reproduction, but long adult lifespan and strong competition = K-like). The trap "many seeds = fully r-selected" over-applies one trait — classification weighs the whole life history, not a single feature, which is exactly why the continuum concept exists.'
          }
        ]
      }
    },
    {
      id: 'pcp3-tradeoffs',
      type: 'text' as const,
      content: `
### Life-History Trade-Offs

Because every organism has a finite energy budget, investing in one life-history component reduces what is available for another. The central trade-offs are:

- **Quantity vs. quality of offspring.** Many cheap offspring (r-strategy, Type III) versus few expensive, well-provisioned offspring (K-strategy, Type I). You cannot maximize both.
- **Reproduction now vs. survival and reproduction later.** **Semelparous** species (e.g., Pacific salmon, many annual plants) put everything into a single, massive reproductive event ("big bang") and then die. **Iteroparous** species (e.g., humans, oak trees) reproduce repeatedly across a long life, hedging against bad years.
- **Early reproduction vs. growth.** Reproducing young (r-strategy) captures rapid population increase when N is low, but diverts energy from body growth and future competitive ability.

#### Why the environment selects the strategy

| Environment | Selective pressure | Favored strategy |
|---|---|---|
| Frequently disturbed, unpredictable, resources fluctuate | Rapid colonization and reproduction before the next disturbance; N usually far below K | **r-selection** |
| Stable, predictable, crowded near K | Efficient competition for scarce resources; survival of well-provisioned offspring | **K-selection** |

In disturbed habitats, the population is repeatedly knocked far below K, so $\\frac{(K-N)}{K} \\approx 1$ and the fastest reproducer wins the race to exploit open resources. In stable, saturated habitats the population hovers near K, where $\\frac{(K-N)}{K} \\rightarrow 0$, growth is near zero, and success depends on out-competing neighbors rather than out-reproducing them.
      `
    },
    {
      id: 'pcp3-continuum',
      type: 'text' as const,
      content: `
### Working Across the Continuum

Because most organisms sit *between* the extremes, the AP exam often asks you to weigh a mix of traits rather than apply a label mechanically. Use this reasoning order:

1. **Tally the reproductive traits.** Offspring number, parental investment, age at first reproduction, and lifespan are the heaviest signals.
2. **Place the species on the spectrum, not in a box.** Decide whether it leans r-ward or K-ward overall, acknowledging conflicting traits.
3. **Predict the survivorship curve from the dominant pattern.** Heavy early mortality with many cheap offspring -> Type III (r-leaning); low mortality until old age with few, cared-for offspring -> Type I (K-leaning).

#### Worked reasoning — a mixed species

A sea turtle lays **100+ eggs per clutch** with **no parental care** (strongly r-like), yet it is **large**, **long-lived** (decades), and **reproduces repeatedly** over many years (K-like). How should you classify it?

- The reproductive output (many unguarded eggs, very high hatchling mortality on the beach and in the surf) gives it a **Type III survivorship curve** and a clear r-leaning reproductive strategy.
- The adult traits (large body, long lifespan, iteroparity) are K-leaning.
- **Conclusion:** the sea turtle is an *intermediate* species — best described as "r-leaning in reproduction, K-leaning in adult life history." On a free-response item, the credited answer names the **continuum** and cites specific traits on each side, rather than forcing a single label.

> **Why the trade-off is unavoidable:** a fixed energy budget means a turtle producing 100 unprovisioned eggs *cannot* also provision each one heavily. The two strategies are endpoints precisely because energy spent on offspring quantity is energy not spent on offspring quality — the defining life-history trade-off.
      `
    },
    {
      id: 'pcp3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Trade-Offs & Curves
      `,
      exercise: {
        questions: [
          {
            question: 'A semelparous Pacific salmon migrates upstream once, spawns thousands of eggs in a single massive reproductive event, and then dies. Which life-history trade-off does this "big-bang" reproduction most directly illustrate?',
            options: [
              'Investing in large body size at the expense of reproduction',
              'Maximizing one reproductive event at the cost of survival and future reproduction',
              'Providing extensive parental care to few offspring',
              'Delaying reproduction to improve competitive ability'
            ],
            correctAnswer: 1,
            explanation: 'Semelparity pours all reproductive energy into a single event, sacrificing any future reproduction (the fish dies) — the reproduction-now-versus-survival-and-later trade-off. The trap "extensive parental care to few offspring" describes the OPPOSITE (K-selected, iteroparous) strategy; salmon produce thousands of eggs with no care, so that option contradicts the scenario.'
          },
          {
            question: 'Two species are compared on a standard survivorship graph. Species X plots as a nearly flat line that drops sharply only at advanced age; Species Y plots as a steep early plunge that then levels off. Which classification is correct?',
            options: [
              'X is Type III / r-selected; Y is Type I / K-selected',
              'X is Type I / K-selected; Y is Type III / r-selected',
              'Both are Type II because the axis is logarithmic',
              'X is Type II / intermediate; Y is Type I / K-selected'
            ],
            correctAnswer: 1,
            explanation: 'A curve that stays high then drops late (Species X) is Type I, typical of K-selected species with high survival until old age; a steep early die-off that then levels (Species Y) is Type III, typical of r-selected species. The reversed option swaps them — anchor on WHERE the mortality concentrates: late-life deaths = Type I, early-life deaths = Type III.'
          }
        ]
      }
    }
  ]
};
