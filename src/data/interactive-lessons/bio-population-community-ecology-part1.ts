export const bioPopulationPart1Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp1-intro',
      type: 'text' as const,
      content: `
## Population Growth

**Part 1 of 7 — Population & Community Ecology**

A **population** is a group of individuals of the same species living in the same area and capable of interbreeding. Population ecology asks a deceptively simple question: *how and why does the number of individuals change over time?* The answer underlies everything from fisheries management to conservation to the spread of invasive species.

Three properties describe a population at any instant:

- **Population size (N)** — the total number of individuals.
- **Population density** — the number of individuals per unit area or volume (for example, 250 oak trees per hectare).
- **Dispersion** — the spatial pattern in which individuals are arranged.

### Three dispersion patterns

| Pattern | Description | Cause | Example |
|---|---|---|---|
| **Clumped** | Individuals grouped in patches | Resources patchy; social behavior; offspring stay near parents | Wolves in packs; mushrooms on a log; schooling fish |
| **Uniform** | Individuals evenly spaced | Antagonistic interactions; territoriality; allelopathy | Nesting penguins; creosote bushes competing for water |
| **Random** | Unpredictable positions, no interaction | Resources uniform; no strong attraction or repulsion | Wind-dispersed dandelions in an open field |

Clumped is by far the **most common** pattern in nature, because resources themselves are usually patchy.
      `
    },
    {
      id: 'pcp1-percapita',
      type: 'text' as const,
      content: `
### The Per-Capita Growth Rate

Populations change through four processes: **births (B)**, **deaths (D)**, **immigration**, and **emigration**. Ignoring migration (a closed population), the change in population size over a time interval is the difference between births and deaths. Written as a continuous rate, the **overall growth rate** of the population is:

$\\frac{dN}{dt} = B - D$

It is more useful to express births and deaths *per individual*. Define the **per-capita birth rate (b)** and **per-capita death rate (d)** — the number of births or deaths per individual per unit time. Then total births $B = bN$ and total deaths $D = dN$, so:

$\\frac{dN}{dt} = bN - dN = (b - d)N$

The quantity $(b - d)$ is the **per-capita growth rate**, symbolized $r$:

$r = b - d$

This gives the foundational equation of population growth:

$\\frac{dN}{dt} = rN$

> **Critical distinction — growth RATE vs. per-capita rate.** The **per-capita rate $r$** is a property of *each individual* (units: per individual per unit time, e.g. $0.05\\,\\text{yr}^{-1}$). The **population growth rate** $\\frac{dN}{dt}$ is the *whole population's* change per unit time (units: individuals per unit time). A population with a small, constant $r$ can still have a huge $\\frac{dN}{dt}$ if N is large — this is the engine of exponential growth.

When $r > 0$ the population grows; when $r = 0$ it is stable (zero population growth); when $r < 0$ it declines.
      `
    },
    {
      id: 'pcp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Density, Dispersion & Per-Capita Rates
      `,
      exercise: {
        questions: [
          {
            question: 'A population of 4,000 field mice experiences 600 births and 200 deaths in one year, with no migration. What is the per-capita growth rate r (per individual per year)?',
            options: [
              '400 mice per year',
              '0.10 per year',
              '0.15 per year',
              '0.05 per year'
            ],
            correctAnswer: 1,
            explanation: 'Per-capita birth rate b = 600/4000 = 0.15; per-capita death rate d = 200/4000 = 0.05. So r = b - d = 0.15 - 0.05 = 0.10 per year. The trap "400 mice per year" is the overall growth rate dN/dt (B - D = 600 - 200 = 400 individuals/yr), a whole-population quantity, NOT the per-capita rate. The question asks for r, which must be per individual.'
          },
          {
            question: 'Territorial seabirds nest at regularly spaced intervals across a beach, each defending a small area from neighbors. Which dispersion pattern does this represent, and what causes it?',
            options: [
              'Clumped dispersion, caused by patchy food resources',
              'Random dispersion, caused by the absence of interactions',
              'Uniform dispersion, caused by antagonistic territorial interactions',
              'Clumped dispersion, caused by social flocking behavior'
            ],
            correctAnswer: 2,
            explanation: 'Even, regular spacing produced by individuals repelling one another (territoriality) is uniform dispersion. The clumped distractor is the trap — clumping is the most common pattern overall, so it is tempting, but clumping requires attraction or patchy resources, whereas these birds actively space themselves APART, the signature of uniform dispersion.'
          }
        ]
      }
    },
    {
      id: 'pcp1-exponential',
      type: 'text' as const,
      content: `
### Exponential Growth — The J-Shaped Curve

Imagine a population in an **idealized environment**: unlimited food, unlimited space, no predators, no disease, no competition. Under these conditions every individual reproduces at its biological maximum, so $r$ takes its largest possible value, the **intrinsic rate of increase**, $r_{max}$. The model becomes:

$\\frac{dN}{dt} = r_{max}N$

This is **exponential growth**. Because the growth rate $\\frac{dN}{dt}$ is proportional to N, the larger the population gets, the faster it adds individuals. Plotting N against time produces the characteristic **J-shaped curve**: it starts shallow, then sweeps steeply upward.

#### Worked example — computing the growth rate

A bacterial culture has $r_{max} = 1.5\\,\\text{hr}^{-1}$. Find $\\frac{dN}{dt}$ at two population sizes.

**At N = 100 cells:** $\\frac{dN}{dt} = r_{max}N = (1.5)(100) = 150$ cells per hour.

**At N = 1000 cells:** $\\frac{dN}{dt} = (1.5)(1000) = 1500$ cells per hour.

Notice: $r_{max}$ did not change, but the population is now adding cells **ten times faster** simply because N is ten times larger. The per-capita rate is constant; the population rate accelerates. That accelerating slope IS the J-curve.

#### Why exponential growth is rarely sustained

True exponential growth occurs only in bursts: a colonizing species entering a new habitat, bacteria in fresh medium, or a population rebounding after a crash. It **cannot continue indefinitely** because no real environment offers unlimited resources. As N rises, food dwindles, waste accumulates, and predators and pathogens find easy targets. These pressures pull the realized $r$ below $r_{max}$, bending the J-curve toward the logistic model you will meet in Part 2.

> A famous illustration: a single *E. coli* dividing every 20 minutes would, in 36 hours of unchecked exponential growth, produce a bacterial mass greater than the planet. Reality intervenes long before that — which is exactly why $r_{max}$ is a *ceiling*, not a sustained rate.
      `
    },
    {
      id: 'pcp1-doubling',
      type: 'text' as const,
      content: `
### Doubling Time — How Fast Is "Fast"?

A vivid way to feel the power of exponential growth is the **doubling time**: how long it takes a population to double in size. Under exponential growth the doubling time depends only on the per-capita rate $r_{max}$, not on the current population size — a population of 100 and a population of 100,000 with the same $r_{max}$ take the *same* time to double. A widely used approximation is the **rule of 70**:

$\\text{doubling time} \\approx \\frac{70}{100 \\times r_{max}}$

where $r_{max}$ is expressed as a decimal rate (the denominator $100 \\times r_{max}$ converts it to a percent).

#### Worked example

A population grows exponentially with $r_{max} = 0.07\\,\\text{yr}^{-1}$ (a 7% per-year growth rate). Its approximate doubling time is:

$\\text{doubling time} \\approx \\frac{70}{7} = 10 \\text{ years}$

So the population doubles roughly every 10 years. If it instead grew at $r_{max} = 0.02\\,\\text{yr}^{-1}$ (2%), the doubling time would stretch to $\\frac{70}{2} = 35$ years. Halving the growth rate roughly *triples-and-a-half* the wait to double — small changes in $r_{max}$ translate into large changes in how quickly a population expands.

| $r_{max}$ (per year) | Growth as percent | Approx. doubling time |
|---|---|---|
| 0.01 | 1% | 70 years |
| 0.02 | 2% | 35 years |
| 0.07 | 7% | 10 years |
| 0.14 | 14% | 5 years |

> **Why doubling time is independent of N:** because $\\frac{dN}{dt} = r_{max}N$ scales with N, a larger population adds more individuals per unit time, but it also needs more individuals to double. The two effects cancel, leaving the doubling time a function of $r_{max}$ alone. This is a hallmark of true exponential growth — and another reminder that it cannot persist once resources become limiting.
      `
    },
    {
      id: 'pcp1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Exponential Growth
      `,
      exercise: {
        questions: [
          {
            question: 'A rabbit population introduced to a predator-free island has r_max = 0.8 per year. At the moment the population reaches N = 500, what is the population growth rate dN/dt?',
            options: [
              '400 rabbits per year',
              '0.8 rabbits per year',
              '625 rabbits per year',
              '500 rabbits per year'
            ],
            correctAnswer: 0,
            explanation: 'Apply dN/dt = r_max × N = 0.8 × 500 = 400 rabbits per year. The trap "0.8 rabbits per year" confuses the per-capita rate r_max (0.8 per individual per year) with the whole-population growth rate; you must multiply by N. The "625" trap comes from dividing N by r_max (500/0.8) — a nonsensical operation for this model.'
          },
          {
            question: 'Which set of conditions is REQUIRED for a population to exhibit true exponential (J-shaped) growth?',
            options: [
              'Population near carrying capacity with strong density-dependent regulation',
              'Unlimited resources and the absence of factors that increase death or lower birth rates',
              'A stable population where births exactly equal deaths',
              'High predation pressure that keeps the population small'
            ],
            correctAnswer: 1,
            explanation: 'Exponential growth requires idealized conditions — unlimited food and space and no checks on reproduction — so that r stays at r_max. The "near carrying capacity" choice is the trap: that scenario produces the OPPOSITE result (logistic leveling), because density-dependent factors near K drive the growth rate toward zero, not toward a J-curve.'
          },
          {
            question: 'Two populations of the same insect have identical per-capita rates r_max = 0.3 per day. Population A has N = 50; Population B has N = 5,000. Which statement is correct?',
            options: [
              'Population A adds individuals faster because smaller populations grow more quickly',
              'Both populations add individuals at the same rate because r_max is identical',
              'Population B adds individuals 100 times faster because dN/dt is proportional to N',
              'Population B has a higher per-capita growth rate than Population A'
            ],
            correctAnswer: 2,
            explanation: 'Because dN/dt = r_max × N, Population B (N = 5,000) adds 0.3 × 5000 = 1,500/day while A adds 0.3 × 50 = 15/day — exactly 100× faster. The trap "both add at the same rate" confuses the equal PER-CAPITA rate with the POPULATION growth rate; identical r does not mean identical dN/dt when N differs. The final option is also wrong: r_max is stated as identical, so neither has a higher per-capita rate.'
          }
        ]
      }
    }
  ]
};
