export const bioPopulationPart2Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp2-intro',
      type: 'text' as const,
      content: `
## Carrying Capacity

**Part 2 of 7 — Population & Community Ecology**

In Part 1 you saw that exponential growth cannot last: real environments impose limits. The **carrying capacity**, symbolized $K$, is the maximum population size that a particular environment can sustain indefinitely, given its available resources (food, water, space, nesting sites). As a population approaches $K$, resources per individual shrink, birth rates fall, death rates rise, and growth slows.

The **logistic growth model** captures this self-limiting behavior:

$\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K}$

Compare it to the exponential model $\\frac{dN}{dt} = r_{max}N$. The logistic model simply multiplies the exponential rate by an extra term, $\\frac{(K-N)}{K}$, the **fraction of unused carrying capacity** (an "environmental resistance" term). This braking factor is the entire difference between the two models.

| Quantity | Meaning | Effect on growth |
|---|---|---|
| $r_{max}N$ | The exponential "engine" | Drives growth upward |
| $\\frac{(K-N)}{K}$ | Fraction of K still available | Slows growth as N rises |
| $K - N$ | Individuals the habitat can still add | Shrinks toward 0 as $N \\rightarrow K$ |

Plotting N versus time produces an **S-shaped (sigmoidal) curve**: slow start, a rapid middle phase, then a plateau at $K$.
      `
    },
    {
      id: 'pcp2-mechanics',
      type: 'text' as const,
      content: `
### Reading the Braking Term

The behavior of logistic growth lives entirely in the factor $\\frac{(K-N)}{K}$. Trace what happens as N climbs from small to large:

| Situation | $\\frac{(K-N)}{K}$ value | Behavior of $\\frac{dN}{dt}$ |
|---|---|---|
| **N much smaller than K** | $\\approx 1$ | Growth $\\approx r_{max}N$ — looks exponential (J-curve early phase) |
| **N = K/2** | $= 0.5$ | Growth is at its **maximum** — steepest part of the S-curve |
| **N approaches K** | $\\rightarrow 0$ | Growth slows toward **zero** — the plateau |
| **N = K** | $= 0$ | $\\frac{dN}{dt} = 0$ — population stable at carrying capacity |

> **The single most tested fact in this unit:** the population GROWTH RATE $\\frac{dN}{dt}$ is **maximal when $N = K/2$**, not when N is largest. Students who assume "bigger population = faster growth" miss this. At $N = K/2$ the product of "many reproducing individuals" and "plenty of remaining resources" is balanced for the greatest absolute growth. This $N = K/2$ point is where harvesting produces the maximum sustainable yield.

#### Density-dependent vs. density-independent limiting factors

The factors that enforce carrying capacity fall into two categories:

| Type | Definition | Examples | Effect as density rises |
|---|---|---|---|
| **Density-dependent** | Effect intensifies as population density increases | Competition for food/space, predation, disease and parasites, accumulation of toxic wastes, increased stress | Stronger — these bend the curve toward K |
| **Density-independent** | Effect is unrelated to population density | Floods, fire, drought, hurricanes, extreme cold, volcanic eruptions | Same proportional impact at any density |

Logistic regulation toward a stable $K$ is driven by **density-dependent** factors, because only a density-dependent brake can grow stronger precisely when the population grows larger. Density-independent events can crash a population but do not, on their own, hold it at a particular carrying capacity.
      `
    },
    {
      id: 'pcp2-worked',
      type: 'text' as const,
      content: `
### Worked Examples — Logistic Computations

A deer population grows logistically with $r_{max} = 0.5\\,\\text{yr}^{-1}$ and carrying capacity $K = 1000$ deer. Compute $\\frac{dN}{dt}$ at four population sizes.

**Case 1 — N = 100 (small relative to K):**

$\\frac{dN}{dt} = (0.5)(100)\\frac{(1000-100)}{1000} = (0.5)(100)(0.9) = 45$ deer per year.

The braking term is 0.9, so growth is 90% of the exponential value $(0.5)(100) = 50$. At low density the population behaves *almost* exponentially.

**Case 2 — N = 500 (exactly K/2):**

$\\frac{dN}{dt} = (0.5)(500)\\frac{(1000-500)}{1000} = (0.5)(500)(0.5) = 125$ deer per year.

This is the **maximum** growth rate of the entire trajectory. No other value of N produces a larger $\\frac{dN}{dt}$.

**Case 3 — N = 900 (near K):**

$\\frac{dN}{dt} = (0.5)(900)\\frac{(1000-900)}{1000} = (0.5)(900)(0.1) = 45$ deer per year.

Even though there are far more deer than in Case 1, growth has fallen back to 45/yr because only 10% of the carrying capacity remains unused.

**Case 4 — N = 1000 (at K):**

$\\frac{dN}{dt} = (0.5)(1000)\\frac{(1000-1000)}{1000} = (0.5)(1000)(0) = 0$ deer per year.

The population is stable. Births balance deaths exactly.

> **The symmetry to notice:** Case 1 (N = 100) and Case 3 (N = 900) both give 45 deer/yr — the growth rate is the same far below and far above K/2, and peaks in the middle at $N = K/2$. This is the hallmark of the logistic curve's S-shape.
      `
    },
    {
      id: 'pcp2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Logistic Computations
      `,
      exercise: {
        questions: [
          {
            question: 'A fish population grows logistically with r_max = 1.0 per year and K = 2,000. At what population size N is the growth rate dN/dt the GREATEST, and approximately what is that rate?',
            options: [
              'N = 2,000 (at K), where dN/dt = 2,000 per year',
              'N = 1,000 (at K/2), where dN/dt = 500 per year',
              'N = 100 (small N), where dN/dt is largest because resources are abundant',
              'N = 1,900 (near K), where dN/dt = 950 per year because the population is large'
            ],
            correctAnswer: 1,
            explanation: 'Logistic growth peaks at N = K/2 = 1,000. There dN/dt = (1.0)(1000)(2000-1000)/2000 = (1000)(0.5) = 500/yr. The "N = 2,000 (at K)" choice is the classic trap: at K the braking term (K-N)/K = 0, so dN/dt = 0 — growth is slowest, not fastest. "Near K" is also a trap: large N is offset by the tiny remaining-resource fraction.'
          },
          {
            question: 'A beetle population follows logistic growth with r_max = 0.4 per week and K = 5,000. The current population is N = 4,500. What is dN/dt?',
            options: [
              '1,800 beetles per week',
              '180 beetles per week',
              '2,000 beetles per week',
              '900 beetles per week'
            ],
            correctAnswer: 1,
            explanation: 'dN/dt = r_max × N × (K-N)/K = 0.4 × 4500 × (5000-4500)/5000 = 0.4 × 4500 × 0.1 = 180 beetles/week. The trap "1,800 per week" omits the braking term — that is the EXPONENTIAL value (0.4 × 4500), which ignores that the population is nearly at K. Near carrying capacity the (K-N)/K factor (here 0.1) is essential and drastically reduces growth.'
          },
          {
            question: 'During an unusually severe winter, 40% of a songbird population dies regardless of how dense the population was. Which best classifies this limiting factor?',
            options: [
              'Density-dependent, because cold stress increases with crowding',
              'Density-independent, because the proportional impact is unrelated to population density',
              'Density-dependent, because it reduces the population size',
              'It is the factor that sets carrying capacity for the species'
            ],
            correctAnswer: 1,
            explanation: 'Severe weather kills a fixed proportion regardless of density, so it is density-independent. The trap "density-dependent because it reduces population size" confuses the definitions — ANY factor can reduce population size; what makes a factor density-DEPENDENT is that its per-capita effect intensifies with crowding (e.g., disease, competition). A density-independent event can crash a population but does not, by itself, hold it at K.'
          }
        ]
      }
    },
    {
      id: 'pcp2-regulation',
      type: 'text' as const,
      content: `
### How Density-Dependent Factors Enforce K

The logistic plateau is not magic — it is the visible result of specific biological mechanisms that grow stronger as a population becomes crowded. Each one lowers the per-capita birth rate $b$, raises the per-capita death rate $d$, or both, pulling $r = b - d$ toward zero as $N \\rightarrow K$.

| Density-dependent mechanism | How it intensifies with crowding | Effect on b or d |
|---|---|---|
| **Competition for food** | Less food per individual as N rises | Lowers $b$ (fewer offspring), raises $d$ (starvation) |
| **Competition for space/nest sites** | Fewer territories available | Lowers $b$ (non-breeders) |
| **Predation** | Predators concentrate where prey are dense | Raises $d$ |
| **Disease and parasites** | Spread faster in crowded populations | Raises $d$ |
| **Accumulation of wastes** | Toxic byproducts build up at high density | Raises $d$, lowers $b$ |
| **Physiological stress** | Crowding raises stress hormones | Lowers $b$ (reduced fertility) |

#### Tracing one mechanism quantitatively

Suppose at low density a songbird has $b = 0.5$ and $d = 0.1$, giving $r = 0.4$. As the population approaches K, competition cuts the birth rate to $b = 0.2$ and disease raises the death rate to $d = 0.2$. Now $r = b - d = 0.2 - 0.2 = 0$ — zero population growth, exactly what defines carrying capacity. The population has not stopped reproducing; rather, **births have fallen to match deaths** because the density-dependent factors squeezed both rates together.

> **Why density-INDEPENDENT factors cannot set K.** A flood or hard frost might kill 30% of the population whether it is sparse or crowded. Because its proportional impact does not change with density, it cannot create the negative feedback needed to home in on a specific equilibrium. Only a factor whose strength *rises with crowding* can balance births against deaths precisely at K — which is why the logistic plateau is fundamentally a density-dependent phenomenon.
      `
    },
    {
      id: 'pcp2-curves',
      type: 'text' as const,
      content: `
### Exponential vs. Logistic — Side by Side

| Feature | Exponential | Logistic |
|---|---|---|
| Equation | $\\frac{dN}{dt} = r_{max}N$ | $\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K}$ |
| Curve shape | J-shaped | S-shaped (sigmoidal) |
| Resources | Assumed unlimited | Finite; capped by K |
| Realized r | Constant at $r_{max}$ | Declines as $N \\rightarrow K$ |
| Maximum $\\frac{dN}{dt}$ | At the largest N (never levels) | At $N = K/2$ |
| Long-term behavior | Unbounded increase | Plateau at K |
| When it applies | Early colonization; ideal lab conditions | Most natural populations over time |

#### Real populations and overshoot

Real populations rarely glide smoothly to a flat plateau. Many **overshoot** $K$ — when a population grows so fast that reproduction continues past the point where resources can support it — and then **crash** back down, oscillating around K. Reindeer introduced to St. Paul Island famously exploded to roughly 2,000, overshot the lichen supply, then collapsed to a few dozen. The logistic model is an idealization; the key insight it captures is that **density-dependent feedback opposes growth more strongly the closer N gets to K**.

> **Carrying capacity is not fixed.** $K$ can rise or fall with climate, resource availability, and species interactions. A drought lowers K for a herbivore; a wet, productive year raises it. Treat K as the environment's *current* ceiling, not a permanent constant.
      `
    },
    {
      id: 'pcp2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Interpreting the Logistic Curve
      `,
      exercise: {
        questions: [
          {
            question: 'A population grows logistically with K = 4,000. Ecologists compare the growth rate dN/dt at N = 1,000, N = 2,000, and N = 3,500. Rank these from FASTEST to slowest growth.',
            options: [
              'N = 3,500 fastest, then 2,000, then 1,000 (bigger is always faster)',
              'N = 2,000 fastest, then 1,000 and 3,500 roughly tied below it',
              'N = 1,000 fastest, then 2,000, then 3,500 (smaller is always faster)',
              'All three are equal because r_max is the same'
            ],
            correctAnswer: 1,
            explanation: 'Growth peaks at N = K/2 = 2,000, so that is fastest. N = 1,000 (well below K/2) and N = 3,500 (well above K/2) both grow more slowly, and by the curve\'s symmetry they fall roughly on either side of the peak. The trap "bigger is always faster" picks N = 3,500, but near K the (K-N)/K factor (here 0.125) chokes growth despite the large population — the hump in dN/dt peaks in the MIDDLE, not at the largest N.'
          },
          {
            question: 'A logistic model gives a population of N = 6,000 when its carrying capacity is K = 5,000, and the growth rate is observed to be negative. Which interpretation is correct?',
            options: [
              'The model is impossible because N can never exceed K',
              'The population has overshot K; with N > K the term (K-N) is negative, so dN/dt is negative and the population declines back toward K',
              'The population is exactly at carrying capacity and stable',
              'r_max must have become negative for this to happen'
            ],
            correctAnswer: 1,
            explanation: 'When a real population overshoots K, N > K makes (K - N) negative, so dN/dt is negative and the population shrinks back toward K — exactly the oscillation/overshoot behavior described for reindeer. The trap "impossible because N can never exceed K" is wrong: K is a sustainable ceiling, not a hard wall, and overshoot is common. The negative growth comes from the (K-N) sign flip, not from r_max turning negative.'
          }
        ]
      }
    }
  ]
};
