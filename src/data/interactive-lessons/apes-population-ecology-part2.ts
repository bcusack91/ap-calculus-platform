export const apesPopulationEcologyPart2Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespopu2-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 2 of 7 — Generalists, Specialists and Reproductive Strategies**

---

| Section |
|---------|
| 📖 Niche Breadth: Generalists and Specialists |
| Reproductive Strategies as a Continuum |
| Biotic Potential: The Numbers Behind r and K |

> 🔑 **Key Concept:** Part 1 listed r-selected and K-selected traits in a table. This part explains **why** those strategies exist, which environments favor each one, and why species that are both generalists and r-selected tend to become invasive while species that are both specialists and K-selected are the most likely to go extinct.
      `
    },
    {
      id: 'apespopu2-niche',
      type: 'text' as const,
      content: `
## 📖 Niche Breadth: Generalists and Specialists

A species' **niche** is its full role in the ecosystem: the range of conditions it can tolerate (temperature, pH, salinity), the resources it uses (food, shelter, nest sites) and how it interacts with other species. **Niche breadth** describes how wide that role is.

| Trait | Generalist species | Specialist species |
|---|---|---|
| Niche | Broad: many foods, habitats and conditions | Narrow: one or a few foods or habitats |
| Range of tolerance | Wide | Narrow |
| Main advantage | Can switch resources when the environment changes | Uses its one resource very efficiently, so it outcompetes generalists for it |
| Main weakness | Less efficient than a specialist at using any single resource | Has no fallback if its resource or habitat disappears |
| Examples | Raccoons, coyotes, Norway rats, cockroaches | Giant pandas (bamboo), koalas (eucalyptus leaves), monarch caterpillars (milkweed) |

### Which environments favor each?

- **Stable, predictable environments favor specialists.** When a resource is reliably available year after year, the species best at exploiting it wins. Old-growth forests and coral reefs are full of specialists.
- **Changing or disturbed environments favor generalists.** Urban growth, farming, climate change and new arrivals all alter what is available. A species that can eat many foods and nest in many places survives the change. This is why raccoons and coyotes now live in cities.

### Worked Example 1: How Much Food Does a Decline Remove? (illustrative data)

A blight kills 60% of a shrub species. Bird S (a specialist) gets 90% of its diet from that shrub. Bird G (a generalist) gets 10% of its diet from it.

**Step 1. Multiply each bird's diet share by the decline.**

$$\\text{Bird S: } 0.90 \\times 0.60 = 0.54 \\quad\\text{(54\\% of its food lost)}$$
$$\\text{Bird G: } 0.10 \\times 0.60 = 0.06 \\quad\\text{(6\\% of its food lost)}$$

**Step 2. Interpret.** The same blight removes 9 times as large a share of the specialist's food. The generalist can also make up its small loss by eating more of its other foods; the specialist has nothing to switch to.

> 🔑 **AP Connection:** The CED states that specialist species are advantaged in habitats that remain constant, while generalists are advantaged when the environment changes. When an FRQ asks why a specialist is more likely to go extinct, link the narrow niche to the missing fallback: "because it relies on one food source, losing that source leaves it nothing else to eat."
      `
    },
    {
      id: 'apespopu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A woodpecker nests only in dead old-growth trees and feeds mainly on one beetle species. Logging removes most old-growth forest in its range. Which outcome is best predicted?',
            options: [
              'It declines sharply, since it has no other nest sites or foods to use',
              'It increases, since logging opens space for its beetle prey to spread',
              'It stays stable, since birds can fly to forests in other regions',
              'It adapts quickly to young trees, since its niche is broad enough'
            ],
            correctAnswer: 0,
            explanation: 'A specialist with a narrow niche has no fallback when its habitat is removed, so its population drops. Its niche is narrow rather than broad, and flying elsewhere does not help when most of the habitat across its range is gone.'
          },
          {
            question: 'In which setting would generalist species most likely outcompete specialists?',
            options: [
              'A coral reef whose conditions have stayed stable for millennia',
              'A deep cave with constant temperature and one reliable food',
              'A suburb where land use and food change from year to year',
              'An old-growth forest where one tree supplies most of the food'
            ],
            correctAnswer: 2,
            explanation: 'Generalists are favored where the environment keeps changing, because they can switch to whatever resources are available. Stable reefs, caves and old-growth forests reward specialists that use one reliable resource efficiently.'
          },
          {
            question: 'Raccoons thrive in cities across North America, while giant pandas survive only in a few mountain bamboo forests. Which difference best explains this?',
            options: [
              'Raccoons have a narrow niche; pandas have a broad niche',
              'Raccoons have a broad niche; pandas have a narrow niche',
              'Raccoons are K-selected; pandas are r-selected',
              'Raccoons have no predators; pandas face many predators'
            ],
            correctAnswer: 1,
            explanation: 'Raccoons are generalists that eat almost anything and shelter in many places, while pandas depend on bamboo. Pandas are the more K-selected of the two, and predators do not explain the difference in range.'
          }
        ]
      }
    },
    {
      id: 'apespopu2-continuum',
      type: 'text' as const,
      content: `
## Reproductive Strategies as a Continuum

Part 1 gave the basic r/K table. Here is the fuller comparison the AP exam draws on:

| Trait | r-selected | K-selected |
|---|---|---|
| Offspring per reproductive event | Many | Few |
| Size of each offspring | Small | Large |
| Parental care | Little or none | Extensive |
| Age at first reproduction | Early | Late |
| Lifespan | Short | Long |
| Population size over time | Swings widely, often far from K | Stays relatively close to K |
| Environment that favors it | Unstable, disturbed or unpredictable | Stable and predictable |
| Recovery after a population crash | Fast | Slow |
| Usual survivorship curve | Type III (Part 3) | Type I (Part 3) |

### Most species fall in between

The two columns are endpoints, not boxes. Most species mix traits:

| Species | r-like traits | K-like traits |
|---|---|---|
| Sea turtles | Lay around 100 eggs per nest; no parental care | Mature late; live for decades |
| Oak trees | Produce thousands of acorns | Live for centuries; slow to mature |
| White-tailed deer | Breed at 1 to 2 years old; often twins | Large body; months of maternal care |

Always compare species **relative to each other**: a deer is r-selected compared with an elephant but K-selected compared with a mouse.

### Who becomes invasive, and who goes extinct?

- **Invasive species tend to be generalists and r-selected.** They mature early, produce many offspring and can use many resources, so a few founders can fill a new habitat quickly. (Invasive case studies are covered in the biodiversity topic, part 2.)
- **K-selected species are more likely to be disrupted by environmental change.** With few offspring and late maturity, they replace losses slowly. A species that is **both** a specialist and K-selected, such as the giant panda, is among the most vulnerable.
      `
    },
    {
      id: 'apespopu2-biotic',
      type: 'text' as const,
      content: `
## Biotic Potential: The Numbers Behind r and K

**Biotic potential** is the maximum rate at which a population can increase under ideal conditions: unlimited resources and no predators, disease or competition. It depends on:

1. Age at first reproduction
2. Number of offspring per reproductive event
3. How often the organism reproduces
4. How many years it reproduces (reproductive lifespan)

**Environmental resistance** is the sum of all factors that keep a population below its biotic potential: food shortage, predators, disease, weather and lack of space.

### Worked Example 2: Biotic Potential of Bacteria

Under ideal conditions, some bacteria divide every 20 minutes. Starting from one cell, how many cells exist after 10 hours?

**Step 1. Count generations.** 10 hours × 3 divisions per hour = 30 generations.

**Step 2. Double once per generation.**
$$2^{30} = 1{,}073{,}741{,}824 \\approx 1.1 \\text{ billion cells}$$

This never continues for long in nature: environmental resistance (food, waste buildup) stops it. That is the gap between exponential and logistic growth from Part 1.

### Worked Example 3: Offspring Surviving to Adulthood (illustrative data)

| Species | Offspring per female per year | Percent surviving to adulthood | Adults produced per year |
|---|---|---|---|
| Leopard frog (r) | 3,000 eggs | 0.2% | $3{,}000 \\times 0.002 = 6$ |
| White-tailed deer (between) | 2 fawns | 50% | $2 \\times 0.50 = 1$ |
| African elephant (K) | 0.25 calves (one every 4 years) | 80% | $0.25 \\times 0.80 = 0.2$ |

The frog produces 12,000 times as many offspring per year as the elephant, but its offspring are 400 times less likely to survive. r-strategists bet on numbers; K-strategists bet on care.

> 🔑 **AP Connection:** A common FRQ prompt asks which species will recover faster after a disturbance. Name the trait (early maturity, many offspring, high biotic potential) and connect it to the outcome (lost individuals are replaced within a few generations).
      `
    },
    {
      id: 'apespopu2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas or percent signs, unless a word is asked for.

1) A female salmon lays 4000 eggs, and 0.5% of them survive to adulthood. How many adults does she produce?

2) A specialist moth gets 80% of its food from one plant. That plant declines by 50%. By what percent does the moth's total food supply fall?

3) The maximum rate at which a population can grow under ideal conditions is its _______ potential.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '40', 'biotic'],
        hint1: 'Convert 0.5% to a decimal (0.005) and multiply by the number of eggs.',
        hint2: 'Multiply the diet share (0.80) by the decline (0.50).',
        hint3: 'It is reached only with unlimited resources and no environmental resistance.',
        explanation: '1) 4,000 × 0.005 = 20 adults. 2) 0.80 × 0.50 = 0.40, a 40 percent drop in total food. 3) Biotic potential is the maximum growth rate under ideal conditions.'
      }
    },
    {
      id: 'apespopu2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which set of traits would make a newly introduced species most likely to become invasive?',
            options: [
              'Late maturity, few offspring and a narrow diet',
              'Early maturity, few offspring and extensive care',
              'Early maturity, many offspring and one food plant',
              'Early maturity, many offspring and a broad diet'
            ],
            correctAnswer: 3,
            explanation: 'Invasive species tend to be r-selected generalists: early maturity and many offspring give a high biotic potential, and a broad diet lets them use many resources. Late maturity, few offspring or dependence on a single food plant all slow the spread.'
          },
          {
            question: 'An oil spill kills 30 percent of the adults of a long-lived seabird that lays one egg per year. A pesticide spray kills 30 percent of the adults of an r-selected insect. Which outcome is most likely?',
            options: [
              'Recovery is far slower for the insect, since its young get no care',
              'Recovery is equally fast for each, since each lost the same share',
              'Recovery is far slower for the seabird, since its biotic potential is low',
              'Recovery is faster for the seabird, since its parents guard each chick'
            ],
            correctAnswer: 2,
            explanation: 'One egg per year gives the seabird a low biotic potential, so replacing lost adults takes many years. The insect\'s many offspring and short generation time let it rebuild quickly, even without parental care.'
          },
          {
            question: 'Sea turtles mature late and live for decades, yet they lay around 100 eggs per nest and give no parental care. What does this best illustrate?',
            options: [
              'Sea turtles are a fully r-selected species with Type I survivorship',
              'Reproductive strategy is a continuum, not two boxes',
              'Late maturity always comes with few offspring and heavy parental care',
              'Sea turtles switch from K-selection to r-selection as they grow older'
            ],
            correctAnswer: 1,
            explanation: 'Sea turtles combine K-like traits (late maturity, long life) with r-like traits (many eggs, no care), showing that most species sit between the two extremes. Their survivorship is Type III, and they do not change strategy with age.'
          }
        ]
      }
    },
    {
      id: 'apespopu2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Niche breadth | How wide a species' range of tolerance and resource use is |
| Generalist | Broad niche; favored when the environment changes |
| Specialist | Narrow niche; favored in stable environments; more likely to go extinct |
| r-selected | Many small offspring, little care, early maturity; favored in unstable environments |
| K-selected | Few large offspring, much care, late maturity; slow to recover from losses |
| Continuum | Most species mix r and K traits; compare species relative to each other |
| Biotic potential | Maximum growth rate under ideal conditions |
| Environmental resistance | Everything that holds a population below its biotic potential |
| Invasive profile | Generalist plus r-selected |

**Next:** Part 3 follows a group of newborns from birth to death and shows how survivorship curves reveal when in life most individuals die.
      `
    }
  ]
};
