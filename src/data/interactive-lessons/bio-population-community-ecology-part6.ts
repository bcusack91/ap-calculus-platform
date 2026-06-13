export const bioPopulationPart6Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Population & Community Ecology**

The AP Biology exam rewards students who can *compute*, not just define. This workshop walks through three fully worked quantitative problem types that appear repeatedly: **mark-recapture** population estimation, **logistic growth** prediction, and **diversity index** calculation. Work each problem yourself before reading the solution, then check the reasoning at every step.

The three formulas you will use:

| Tool | Formula | What it estimates |
|---|---|---|
| Mark-recapture (Lincoln-Petersen) | $N = \\frac{MC}{R}$ | Total population size N |
| Logistic growth | $\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K}$ | Population growth rate |
| Simpson's diversity | $D = 1 - \\sum (p_i)^2$ | Community diversity |
      `
    },
    {
      id: 'pcp6-markrecapture',
      type: 'text' as const,
      content: `
### Problem 1 — Mark-Recapture (Lincoln-Petersen)

You cannot line up and count every fish in a lake, so ecologists **estimate** population size by capturing, marking, releasing, and recapturing. The **Lincoln-Petersen** estimator is:

$N = \\frac{MC}{R}$

where:
- $M$ = number of individuals **marked** in the first capture (then released),
- $C$ = total number **captured** in the second sample,
- $R$ = number in the second sample that are **recaptures** (already marked),
- $N$ = estimated total population size.

The logic: the proportion of marked individuals in the second sample $\\frac{R}{C}$ should equal the proportion of marked individuals in the whole population $\\frac{M}{N}$. Solving $\\frac{R}{C} = \\frac{M}{N}$ for $N$ gives $N = \\frac{MC}{R}$.

#### Worked solution

A researcher captures, tags, and releases **60 trout** ($M = 60$). A week later she captures **80 trout** ($C = 80$), of which **24 are tagged** ($R = 24$). Estimate the population.

$N = \\frac{MC}{R} = \\frac{(60)(80)}{24} = \\frac{4800}{24} = 200 \\text{ trout}$

The lake holds an estimated **200 trout**.

> **Sanity check and assumptions.** The recapture fraction is $\\frac{24}{80} = 0.30$, so marked fish are 30% of the sample; if 60 marked fish are 30% of the population, the population is $\\frac{60}{0.30} = 200$ — consistent. This estimate assumes the marked individuals **mixed randomly** back into the population, no births/deaths/migration occurred between samples, and marks were not lost. A common error is dividing by $C$ instead of $R$ — remember $R$ (recaptures) sits in the denominator.
      `
    },
    {
      id: 'pcp6-logistic',
      type: 'text' as const,
      content: `
### Problem 2 — Logistic Growth Prediction

A wildlife biologist models a reintroduced bison herd with logistic growth: $r_{max} = 0.3\\,\\text{yr}^{-1}$ and carrying capacity $K = 600$ bison. The current population is $N = 200$.

**Part (a): What is the current growth rate $\\frac{dN}{dt}$?**

$\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K} = (0.3)(200)\\frac{(600-200)}{600}$

$= (0.3)(200)\\frac{400}{600} = (0.3)(200)(0.6667) = 40 \\text{ bison per year}$

**Part (b): At what population size will the herd grow fastest, and what is that maximum rate?**

Logistic growth is fastest at $N = K/2 = 600/2 = 300$ bison. At that point:

$\\frac{dN}{dt} = (0.3)(300)\\frac{(600-300)}{600} = (0.3)(300)(0.5) = 45 \\text{ bison per year}$

So the herd's growth peaks at **45 bison/year when N = 300**. Note that the current rate (40/yr at N = 200) is slightly below this peak — the herd has not yet reached its fastest-growing size.

**Part (c): What happens to $\\frac{dN}{dt}$ as $N \\rightarrow 600$?**

As N approaches K = 600, the term $\\frac{(K-N)}{K} \\rightarrow 0$, so $\\frac{dN}{dt} \\rightarrow 0$. For example at $N = 580$:

$\\frac{dN}{dt} = (0.3)(580)\\frac{(600-580)}{600} = (0.3)(580)(0.0333) \\approx 5.8 \\text{ bison per year}$

Growth has nearly stopped — the herd is leveling off at carrying capacity, the plateau of the S-curve.

> **Pattern recap:** the growth rate climbs from N small, peaks at $N = K/2$ (300 here), then falls back toward 0 as N approaches K (600). The maximum growth rate is *not* at the maximum population size — a point the exam tests relentlessly.
      `
    },
    {
      id: 'pcp6-diversity',
      type: 'text' as const,
      content: `
### Problem 3 — Diversity Index

A biologist surveys a 1 m² quadrat of tide-pool invertebrates and records the counts below. Compute Simpson's Diversity Index, $D = 1 - \\sum (p_i)^2$.

| Species | Count | $p_i$ | $(p_i)^2$ |
|---|---|---|---|
| Mussel | 40 | 0.40 | 0.1600 |
| Barnacle | 40 | 0.40 | 0.1600 |
| Snail | 15 | 0.15 | 0.0225 |
| Anemone | 5 | 0.05 | 0.0025 |
| **Total** | **100** | **1.00** | **0.3450** |

**Step 1 — proportions:** divide each count by the total of 100 to get each $p_i$.

**Step 2 — square** each $p_i$ (rightmost column).

**Step 3 — sum the squares:** $\\sum (p_i)^2 = 0.16 + 0.16 + 0.0225 + 0.0025 = 0.345$.

**Step 4 — subtract from 1:** $D = 1 - 0.345 = 0.655$.

The tide pool's diversity is $D \\approx 0.66$. About 66% of the time, two randomly chosen invertebrates will be different species.

> **Comparison practice:** if a nearby disturbed pool held 90 mussels, 5 barnacles, 3 snails, and 2 anemones, then $\\sum (p_i)^2 = 0.81 + 0.0025 + 0.0009 + 0.0004 \\approx 0.814$ and $D \\approx 0.19$. Same four species (equal richness) but heavy dominance by mussels collapses the diversity from 0.66 to 0.19 — a vivid reminder that evenness, not just richness, drives the index.
      `
    },
    {
      id: 'pcp6-combined',
      type: 'text' as const,
      content: `
### Problem 4 — A Combined, Multi-Step Problem

Real AP free-response items often chain methods together. Here is one that uses **mark-recapture** to find N, then **logistic growth** to predict the trajectory.

**Setup.** A conservation team studies a reintroduced tortoise population on an island with estimated carrying capacity $K = 500$ and $r_{max} = 0.25\\,\\text{yr}^{-1}$. To find the current size, they tag **40 tortoises** ($M = 40$), release them, and later capture **50 tortoises** ($C = 50$), of which **8 are tagged** ($R = 8$).

**Part (a): Estimate the current population.**

$N = \\frac{MC}{R} = \\frac{(40)(50)}{8} = \\frac{2000}{8} = 250 \\text{ tortoises}$

**Part (b): Compute the current growth rate.** With $N = 250$ and $K = 500$, note that $N = K/2$ exactly:

$\\frac{dN}{dt} = (0.25)(250)\\frac{(500-250)}{500} = (0.25)(250)(0.5) = 31.25 \\text{ tortoises per year}$

Because $N = K/2$, this is the **maximum** growth rate the population will ever reach.

**Part (c): Predict what happens next.** Since the population sits right at $N = K/2$, any further increase moves it past the inflection point, so the growth rate will begin to **slow** even as the population keeps rising — the curve bends from its steepest tangent toward the plateau at $K = 500$. Management can expect the fastest absolute gains *now* and diminishing gains as N climbs toward 500.

> **Why chaining is testable:** part (a)'s answer (250) is the input to part (b), and recognizing that 250 = K/2 is what makes part (c)'s prediction precise. A single arithmetic slip in the mark-recapture step would cascade — which is why writing each formula and checking units at every stage protects your score.
      `
    },
    {
      id: 'pcp6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Workshop Problem Set
      `,
      exercise: {
        questions: [
          {
            question: 'Ecologists mark 50 turtles in a pond. In a later sample they catch 40 turtles, of which 10 are marked. Using N = MC/R, what is the estimated population size?',
            options: [
              '125 turtles',
              '200 turtles',
              '80 turtles',
              '500 turtles'
            ],
            correctAnswer: 1,
            explanation: 'N = MC/R = (50 × 40)/10 = 2000/10 = 200 turtles. The trap "80 turtles" comes from dividing by C (the second total, 40) instead of by R (the recaptures, 10): 50 × 40 / 40 = 50... or other mis-pairings. Keep the formula straight: marked (M) times second-catch (C) over recaptures (R). Here recaptures = 10 in the denominator gives 200.'
          },
          {
            question: 'A population grows logistically with r_max = 0.6 per year and K = 800. Which population size produces the FASTEST growth, and what is that maximum dN/dt?',
            options: [
              'N = 800, dN/dt = 480 per year',
              'N = 400, dN/dt = 120 per year',
              'N = 400, dN/dt = 240 per year',
              'N = 700, dN/dt = 420 per year'
            ],
            correctAnswer: 1,
            explanation: 'Fastest growth is at N = K/2 = 400. There dN/dt = (0.6)(400)(800-400)/800 = (0.6)(400)(0.5) = 120/yr. The trap "N = 400, dN/dt = 240" forgets the (K-N)/K = 0.5 factor and just computes r_max × N (0.6 × 400 = 240) — that is the exponential value, double the true logistic maximum. The "N = 800" choice is the always-wrong peak-at-K trap (dN/dt = 0 at K).'
          },
          {
            question: 'A meadow contains 4 species with proportions 0.5, 0.3, 0.1, and 0.1. What is Simpson\'s index D = 1 - Σ(pi)², and what does it represent?',
            options: [
              'D = 0.36; the probability two random individuals are the same species',
              'D = 0.64; the probability two random individuals are different species',
              'D = 0.36; the probability two random individuals are different species',
              'D = 0.64; the probability two random individuals are the same species'
            ],
            correctAnswer: 1,
            explanation: 'Σ(pi)² = 0.25 + 0.09 + 0.01 + 0.01 = 0.36, so D = 1 - 0.36 = 0.64, the probability that two randomly drawn individuals are DIFFERENT species. The "D = 0.36" traps report Σ(pi)² before subtracting from 1 (and 0.36 is the probability of the SAME species). The interpretation must also match: the "1 −" form measures the chance of DIFFERENT species, so any answer pairing 0.64 with "same species" is internally inconsistent.'
          }
        ]
      }
    },
    {
      id: 'pcp6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Workshop Problem Set — Assumptions & Combined Methods
      `,
      exercise: {
        questions: [
          {
            question: 'In a mark-recapture study, many marked animals lose their tags before the second sampling. How does this tag loss bias the population estimate N = MC/R, and why?',
            options: [
              'It underestimates N, because fewer recaptures (R) makes the numerator smaller',
              'It overestimates N, because lost tags lower R, and a smaller R in the denominator inflates N = MC/R',
              'It has no effect, because R appears in both the numerator and denominator',
              'It overestimates N, because more animals appear unmarked, raising M'
            ],
            correctAnswer: 1,
            explanation: 'Tag loss reduces the count of recaptures R. Since R is in the denominator of N = MC/R, a smaller R produces a LARGER (overestimated) N. The trap "underestimates N" misplaces R — it is in the denominator, not the numerator, so fewer recaptures inflates rather than deflates the estimate. This is why "no tag loss" is a key assumption of the method.'
          },
          {
            question: 'A mark-recapture estimate puts a deer population at N = 300 on a reserve with K = 1,000 and r_max = 0.4 per year. Roughly how fast is the population growing now, and is this near its maximum possible growth rate?',
            options: [
              'dN/dt = 120 per year; yes, this is the maximum because 300 is a large population',
              'dN/dt = 84 per year; no, the maximum occurs later at N = K/2 = 500',
              'dN/dt = 0 per year; the population is at carrying capacity',
              'dN/dt = 300 per year; growth equals the current population size'
            ],
            correctAnswer: 1,
            explanation: 'dN/dt = (0.4)(300)(1000-300)/1000 = (0.4)(300)(0.7) = 84/yr. The maximum growth occurs at N = K/2 = 500, which the population has not yet reached, so it is still accelerating toward its fastest phase. The trap "dN/dt = 120, maximum" drops the (K-N)/K = 0.7 factor (giving the exponential 0.4 × 300 = 120) AND wrongly assumes peak growth at N = 300 rather than at K/2 = 500.'
          }
        ]
      }
    }
  ]
};
