export const apesPopulationEcologyPart5Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespopu5-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 5 of 7 — Carrying Capacity, Overshoot and Dieback**

---

| Section |
|---------|
| 📖 What Sets Carrying Capacity |
| Overshoot and Dieback: The Reindeer of St. Matthew Island |
| Predator-Prey Cycles: Snowshoe Hare and Lynx |
| Density-Dependent Regulation and Common Misconceptions |

> 🔑 **Key Concept:** Carrying capacity (K) is not a fixed number stamped on a habitat. It is set by the **limiting resource**, it rises and falls as that resource changes, and a population can temporarily **overshoot** it. When that happens, the population **dies back**, and if the overshoot damaged the resource, K itself can stay lower for years.
      `
    },
    {
      id: 'apespopu5-k',
      type: 'text' as const,
      content: `
## 📖 What Sets Carrying Capacity

A population's carrying capacity is set by whichever essential resource runs short first, its **limiting resource**. Depending on the species, that can be:

| Limiting resource | Example population |
|---|---|
| Food | Deer browsing shrubs in winter |
| Water | Wildebeest in the dry season |
| Space or nest sites | Cavity-nesting birds that need old trees |
| Light | Seedlings on a shaded forest floor |
| Nutrients | Algae in a lake with little phosphorus |

### Worked Example 1: Estimating K From a Food Supply (illustrative data)

A meadow produces 600,000 kg of usable forage per year. Each deer needs 1,500 kg per year.

$$K = \\frac{600{,}000\\ \\text{kg/yr}}{1{,}500\\ \\text{kg/deer/yr}} = 400\\ \\text{deer}$$

**K can change.** A drought cuts forage by 25%:

$$600{,}000 \\times (1 - 0.25) = 450{,}000\\ \\text{kg} \\qquad K = \\frac{450{,}000}{1{,}500} = 300\\ \\text{deer}$$

A herd of 380 that was comfortably below K last year is now $380 - 300 = 80$ deer above it, about $\\frac{80}{300} \\times 100 \\approx 27\\%$ over the new carrying capacity, without a single deer being born.

### What raises or lowers K

| Lowers K | Raises K |
|---|---|
| Drought, habitat loss, overgrazing that damages plants | Wetter years, habitat restoration, new food sources |
| Pollution that reduces food or water quality | Removal of a competitor for the same resource |
      `
    },
    {
      id: 'apespopu5-overshoot',
      type: 'text' as const,
      content: `
## Overshoot and Dieback: The Reindeer of St. Matthew Island

**Overshoot** is when a population temporarily exceeds its carrying capacity. **Dieback** is the sharp decline that follows, as the population loses more individuals than are born.

### Why do populations overshoot?

The logistic curve assumes a population responds instantly to crowding. Real populations respond with **time lags**:
- Young conceived in a good year are born after resources have already started to run short.
- Slow-growing resources, such as lichen or old trees, are consumed faster than they regrow, and the shortage only becomes obvious once the stock is gone.
- Animals can live for a while on stored fat, delaying the rise in deaths.

### The St. Matthew Island case

St. Matthew Island lies in the Bering Sea off Alaska. It had thick mats of lichen, the reindeer's main winter food, and no predators of reindeer.

| Year | Reindeer | What happened |
|---|---|---|
| 1944 | 29 | Introduced by the U.S. Coast Guard |
| 1963 | about 6,000 | Herd had grown rapidly; lichen heavily overgrazed |
| 1966 | 42 | After the severe winter of 1963–64, nearly the whole herd starved |

The crash combined two kinds of factor. Overgrazing (density-dependent: the more reindeer, the less lichen per animal) left the herd with almost no food reserves, and a severe winter (density-independent) then triggered mass starvation. The remaining herd later died out entirely.

### Worked Example 2: The Numbers Behind the Boom and Bust

**Step 1. How many doublings from 1944 to 1963?**
$$\\frac{6{,}000}{29} \\approx 207 \\qquad 2^{7} = 128,\\ 2^{8} = 256 \\Rightarrow \\text{about 7.7 doublings}$$

**Step 2. Average doubling time:** $\\frac{19\\ \\text{years}}{7.7} \\approx 2.5$ years.

**Step 3. Average growth rate (rule of 70):** $\\frac{70}{2.5} \\approx 28\\%$ per year.

**Step 4. Size of the dieback:**
$$\\frac{6{,}000 - 42}{6{,}000} \\times 100 \\approx 99.3\\%\\ \\text{decline}$$

### Overshoot can lower K

Lichen grows extremely slowly, so the overgrazed island could support far fewer reindeer after the crash than before it. This is the key lesson of overshoot: by damaging its own resource base, a population can **reduce the carrying capacity** it will have in the future.
      `
    },
    {
      id: 'apespopu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why did the reindeer herd on St. Matthew Island overshoot its carrying capacity instead of leveling off smoothly at K?',
            options: [
              'Predators arrived in 1963, and the herd declined only once they had spread',
              'Hunters removed most bulls, and the herd could no longer breed after that',
              'Lichen was eaten faster than it regrew, and deaths rose only after it was gone',
              'Disease came with new animals, and the herd declined once it had spread'
            ],
            correctAnswer: 2,
            explanation: 'Slow-growing lichen was consumed faster than it could recover, and the time lag between that depletion and rising deaths let the herd climb far above K. The island had no reindeer predators or hunting, and the crash followed starvation, not disease.'
          },
          {
            question: 'The St. Matthew Island herd fell from about 6,000 in 1963 to 42 in 1966. What was the approximate percent decline?',
            options: [
              '0.7%',
              '44.8%',
              '99.3%',
              '14,186%'
            ],
            correctAnswer: 2,
            explanation: 'The decline is (6,000 − 42) ÷ 6,000 × 100 ≈ 99.3 percent. The value 0.7 percent is the share that survived, and 14,186 percent comes from dividing by the final count instead of the starting count.'
          },
          {
            question: 'In the snowshoe hare and lynx cycle, lynx numbers peak a year or two after hare numbers peak. Which explanation best accounts for this lag?',
            options: [
              'Lynx reproduction responds to hare abundance after a delay',
              'Lynx eat hares only when hare numbers are at their lowest point',
              'Hares breed more slowly than lynx, so they recover last in each cycle',
              'Lynx numbers are set by winter weather, independent of hare numbers'
            ],
            correctAnswer: 0,
            explanation: 'Abundant hares raise lynx survival and kitten production, but new lynx are added only over the following breeding seasons, so the predator peak trails the prey peak. Hares, not lynx, have the faster reproduction, and lynx numbers track hare numbers rather than weather alone.'
          }
        ]
      }
    },
    {
      id: 'apespopu5-cycles',
      type: 'text' as const,
      content: `
## Predator-Prey Cycles: Snowshoe Hare and Lynx

(Predation as a species interaction is covered in the ecosystem structure topic, part 5. Here the focus is on how the two **population sizes** change over time.)

Fur-trading records kept by the Hudson's Bay Company in Canada show that snowshoe hare and Canada lynx populations rise and fall in a cycle of **about 10 years**, with lynx peaks following hare peaks.

### The cycle step by step

1. Hares are abundant, so lynx have plenty of food; more lynx kittens survive.
2. Lynx numbers climb, and predation on hares increases. Heavy browsing also reduces the hares' winter food.
3. Hare numbers crash under the combined pressure of predation and food shortage.
4. With few hares left, lynx starve or fail to reproduce, and lynx numbers fall.
5. With fewer predators and recovering vegetation, hares rebound, and the cycle repeats.

Field experiments in the Yukon found that both food supply and predation help drive the hare cycle, so it is not a pure predator-prey story.

### Worked Example 3: Reading a Cycle (illustrative data)

| Year | Hares per km² | Lynx per 100 km² |
|---|---|---|
| 0 | 40 | 8 |
| 2 | 150 | 12 |
| 4 | 400 | 25 |
| 6 | 120 | 40 |
| 8 | 30 | 15 |
| 10 | 50 | 8 |

- **Lag:** hares peak in year 4 and lynx in year 6, a 2-year lag.
- **Hare decline from peak to low:** $\\frac{400 - 30}{400} \\times 100 = 92.5\\%$
- **Lynx increase from year 0 to peak:** $\\frac{40 - 8}{8} \\times 100 = 400\\%$

Notice that the predator never drives the prey to zero. As hares become scarce, the lynx population falls first, which lets the hares recover.
      `
    },
    {
      id: 'apespopu5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas.

1) A grassland produces 900000 kg of usable forage per year, and each bison needs 4500 kg per year (illustrative data). What is the carrying capacity for bison?

2) A drought reduces that forage by 30%. What is the new carrying capacity?

3) A population grows from 50 to 1600 animals. How many doublings is that?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '140', '5'],
        hint1: 'Divide total forage by the forage each bison needs.',
        hint2: 'Find 70% of the original forage, then divide by 4,500 again.',
        hint3: 'Keep doubling 50 until you reach 1,600, counting each step.',
        explanation: '1) 900,000 ÷ 4,500 = 200 bison. 2) 900,000 × 0.70 = 630,000 kg, and 630,000 ÷ 4,500 = 140 bison. 3) 50 → 100 → 200 → 400 → 800 → 1,600 is 5 doublings (1,600 ÷ 50 = 32 = 2⁵).'
      }
    },
    {
      id: 'apespopu5-regulation',
      type: 'text' as const,
      content: `
## Density-Dependent Regulation and Common Misconceptions

Part 1 defined density-dependent and density-independent factors. Here is **how** density-dependent factors hold a population near K.

### The feedback

As density rises:
- **Food per individual falls**, so fewer young are born and more starve.
- **Disease spreads faster**, because contact between individuals increases.
- **Predators focus on the abundant prey**, raising the death rate.
- **Territories and nest sites run out**, so some adults cannot breed.

Each effect lowers the birth rate, raises the death rate, or both. Growth slows and stops near K. If density falls, the pressures ease and growth resumes. This **negative feedback** produces the S-shaped logistic curve.

### Worked Example 4: Food per Individual

Using the meadow from Worked Example 1 (600,000 kg of forage per year):

$$400\\ \\text{deer: } \\frac{600{,}000}{400} = 1{,}500\\ \\text{kg each} \\qquad 600\\ \\text{deer: } \\frac{600{,}000}{600} = 1{,}000\\ \\text{kg each}$$

Each deer gets $\\frac{1{,}500 - 1{,}000}{1{,}500} \\approx 33\\%$ less food at the higher density, below the 1,500 kg it needs. That shortfall is a density-dependent pressure.

### Common misconceptions

| Misconception | Correction |
|---|---|
| K is a fixed number for a habitat | K changes whenever the limiting resource changes |
| At K, organisms stop reproducing | At K, births still occur; they are balanced by deaths |
| Populations sit exactly at K | They fluctuate around K, and time lags cause overshoots |
| After a dieback, the population returns to the old K | Overshoot can damage resources and lower K, as on St. Matthew Island |
| Predators drive their prey to extinction in a cycle | Predator numbers fall when prey become scarce, letting prey recover |
| A storm that kills 200 of 1,000 animals but 20 of 100 is density-dependent | It kills the same 20% at both densities, so it is density-independent |

> 🔑 **AP Connection:** When an FRQ asks you to explain how a population is regulated, name a specific density-dependent factor and walk the chain: higher density → less food per individual → lower birth rate and higher death rate → growth slows toward K.
      `
    },
    {
      id: 'apespopu5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a density-dependent factor that could limit a gray wolf population?',
            options: [
              'A wildfire that burns half of the wolves\' hunting range',
              'Disease spreading faster among packs living close together',
              'A severe blizzard that kills weakened animals across the region',
              'A spring flood that drowns pups in low-lying dens'
            ],
            correctAnswer: 1,
            explanation: 'Disease transmission rises as packs crowd together, so its effect grows with density. Fires, blizzards and floods strike regardless of how many wolves live in the area, so they are density-independent.'
          },
          {
            question: 'A student says a population at carrying capacity has stopped reproducing. Which statement best corrects this claim?',
            options: [
              'Births stop, but immigration keeps adding new individuals each year',
              'Births continue, and the population keeps growing at its fastest rate',
              'Births stop until a disturbance pushes the population back below K',
              'Births still occur but are balanced by an equal number of deaths'
            ],
            correctAnswer: 3,
            explanation: 'At K, the population is not growing because births and deaths are about equal, not because reproduction has ended. The fastest growth occurs at K/2, not at K.'
          },
          {
            question: 'After the crash on St. Matthew Island, the overgrazed lichen took decades to recover. What does this imply about carrying capacity for reindeer after the crash?',
            options: [
              'It was higher than before, since fewer reindeer were left to compete',
              'It stayed the same, since K depends only on the size of the island',
              'It was lower than before, since the damaged food supply set a new limit',
              'It no longer applied, since only density-independent factors acted'
            ],
            correctAnswer: 2,
            explanation: 'Carrying capacity depends on the limiting resource, and the depleted lichen could support far fewer reindeer, so K fell. Fewer competitors do not raise K when the food itself is gone, and island size alone does not set K.'
          }
        ]
      }
    },
    {
      id: 'apespopu5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Limiting resource | The scarcest essential resource sets K |
| K changes | Drought, habitat loss and overgrazing lower it; restoration raises it |
| Overshoot | Population temporarily exceeds K, usually because of time lags |
| Dieback | Sharp decline after overshoot |
| St. Matthew Island | 29 reindeer (1944) → about 6,000 (1963) → 42 (1966) |
| Overshoot can lower K | Damaged resources support fewer individuals afterward |
| Hare and lynx | About 10-year cycle; lynx peaks lag hare peaks |
| Density-dependent regulation | Crowding lowers births and raises deaths: negative feedback toward K |

**Next:** Part 6 puts everything from Parts 1 through 5 to work on AP exam-style data sets with free-response prompts and model answers.
      `
    }
  ]
};
