export const apesEcosystemStructurePart4Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesecos4-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 4 of 7 — Food Webs, Pyramids and Trophic Cascades**

---

| Section |
|---------|
| 📖 Reading a Food Web |
| Ecological Pyramids and When They Invert |
| Keystone Species and Trophic Cascades |

> 🔑 **Key Concept:** AP questions rarely ask you to define a food web. They hand you one and ask what happens when a species disappears, or show a pyramid and ask why it has that shape. This part builds those reading and prediction skills.
      `
    },
    {
      id: 'apesecos4-webs',
      type: 'text' as const,
      content: `
## 📖 Reading a Food Web

### Rule 1: arrows show the direction of energy flow

An arrow points **from the organism that is eaten to the organism that eats it**. "Algae → snail" means the snail eats the algae and the energy moves into the snail.

### Rule 2: count steps from the producers

An organism's trophic level is one more than the level of what it eats. Organisms that eat at more than one level occupy more than one trophic level.

### Worked Example: A Lake Food Web

Arrows in the web:

- Phytoplankton → zooplankton
- Zooplankton → minnows
- Minnows → bass
- Minnows → herons
- Bass → herons
- Aquatic plants → ducks
- Dead matter from every organism → bacteria and fungi

| Organism | What it eats | Trophic level(s) |
|---|---|---|
| Phytoplankton, aquatic plants | (makes its own food) | 1, producers |
| Zooplankton, ducks | Producers | 2, primary consumers |
| Minnows | Zooplankton | 3, secondary consumers |
| Bass | Minnows | 4, tertiary consumers |
| Herons | Minnows **and** bass | 4 **and** 5 |
| Bacteria and fungi | Dead matter from all levels | Decomposers |

Herons occupy two levels at once: level 4 when they eat minnows and level 5 when they eat bass.

### Predicting a removal

Suppose a disease wipes out the bass:

1. **Minnows increase**, because a predator is gone.
2. **Zooplankton decrease**, because more minnows eat them.
3. **Phytoplankton increase**, because fewer zooplankton graze them.
4. **Herons** may hold steady or shift to eating more minnows, because they have an alternative prey.

Notice the alternating up-down pattern as you move down the chain. Notice too that herons survive the loss because the web gives them another food source. This is why food webs with many connections are more **resilient** than single food chains.
      `
    },
    {
      id: 'apesecos4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Read the Web** 🔍

Use the lake food web above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the arrow "zooplankton → minnows," energy moves from ___',
            options: ['the zooplankton into the minnows', 'the minnows into the zooplankton', 'the minnows into the phytoplankton', 'the zooplankton into the producers']
          },
          {
            label: 'Bass occupy trophic level ___',
            options: ['4', '3', '5', '2']
          },
          {
            label: 'If disease removed the minnows, the zooplankton population would most likely ___',
            options: ['increase at first', 'decrease at first', 'stay exactly the same', 'decrease as bass eat more of them']
          }
        ],
        correctAnswers: ['the zooplankton into the minnows', '4', 'increase at first'],
        hint1: 'Arrows point from the eaten to the eater.',
        hint2: 'Count: phytoplankton (1), zooplankton (2), minnows (3), then bass.',
        hint3: 'Minnows are the zooplankton\'s predator.',
        explanation: 'Energy follows the arrow from prey to predator. Bass eat minnows (level 3), so bass are level 4. Removing the minnows removes the zooplankton\'s main predator, so zooplankton would increase at first.'
      }
    },
    {
      id: 'apesecos4-pyramids',
      type: 'text' as const,
      content: `
## Ecological Pyramids and When They Invert

| Pyramid | What each bar shows | Can it be inverted? |
|---|---|---|
| **Energy** | Energy per area per time at each level ($kcal/m^{2}/yr$) | **Never**: the second law guarantees each level has less |
| **Biomass** | Mass of living tissue at one moment ($g/m^{2}$) | Sometimes, in aquatic systems |
| **Numbers** | Count of individuals at each level | Sometimes, when producers are large |

### Why a biomass pyramid can invert

In the open ocean, phytoplankton are tiny, reproduce within a day or two and are eaten almost as fast as they grow. A snapshot taken at one moment can find **less** phytoplankton biomass than zooplankton biomass. The phytoplankton level still produces far more **energy per year**, because it is replaced so quickly. The biomass pyramid inverts; the energy pyramid never does.

### Worked Example: Reading a Biomass Pyramid

Standing biomass in an English Channel sample (illustrative values):

| Level | Biomass ($g/m^{2}$) |
|---|---|
| Zooplankton | 21 |
| Phytoplankton | 4 |

Ratio: $21 \\div 4 = 5.25$. The consumers outweigh their food by more than five times, which is possible only because phytoplankton turn over so rapidly.

### Why a numbers pyramid can invert

A single oak tree (one producer) can support thousands of caterpillars, which in turn support a few dozen birds. Counting individuals gives a narrow base and a wide middle, even though the energy pyramid for the same oak is upright.

### Biomagnification follows the pyramid

Persistent, fat-soluble pollutants such as DDT and methylmercury are not broken down or excreted. A predator eats many prey over its life, so the pollutant **concentrates** at each higher level.

**Worked example (illustrative values):** DDT in an estuary measures 0.00005 ppm in water and 25 ppm in fish-eating birds.

$$\\frac{25}{0.00005} = 500{,}000$$

The birds carry a concentration about 500,000 times that of the water. Because top predators sit where the most concentration has built up, they suffered most, as with eggshell thinning in bald eagles and ospreys.
      `
    },
    {
      id: 'apesecos4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An open-ocean sample contains more zooplankton biomass than phytoplankton biomass. Which explanation is correct?',
            options: [
              'Zooplankton produce more energy per year than the phytoplankton below them',
              'Phytoplankton reproduce so fast that a small standing crop feeds a larger one',
              'The sample violates the second law of thermodynamics and must contain an error',
              'Zooplankton also photosynthesize and so supply most of their own energy needs'
            ],
            correctAnswer: 1,
            explanation: 'Phytoplankton turn over within days, so a small standing biomass can produce enough energy each year to support a larger zooplankton biomass. The energy pyramid stays upright; only the biomass snapshot inverts.'
          },
          {
            question: 'Which type of ecological pyramid can never be inverted?',
            options: [
              'Pyramid of numbers',
              'Pyramid of energy',
              'Pyramid of biomass',
              'Pyramid of species'
            ],
            correctAnswer: 1,
            explanation: 'Each trophic level loses energy as heat, so every level must have less energy flow than the one below it. Biomass and numbers pyramids can invert because they are snapshots or counts rather than energy flows.'
          },
          {
            question: 'Mercury concentrations are highest in tuna and swordfish rather than in the small fish they eat. What best explains this pattern?',
            options: [
              'Large predatory fish swim at depths where mercury dissolves most readily',
              'Large predators eat many contaminated prey and do not excrete the mercury',
              'Mercury enters fish through their gills, and larger fish have larger gills',
              'Small fish break mercury down into harmless compounds before being eaten'
            ],
            correctAnswer: 1,
            explanation: 'Methylmercury is persistent and stored in tissue, so a predator accumulates the mercury from every prey item it eats over its life. This biomagnification is greatest at the top of the food chain.'
          }
        ]
      }
    },
    {
      id: 'apesecos4-cascades',
      type: 'text' as const,
      content: `
## Keystone Species and Trophic Cascades

A **keystone species** has an effect on its community far larger than its abundance would suggest. Removing it causes a **trophic cascade**: a chain of population changes that runs down through several trophic levels.

### Case 1: Sea otters, sea urchins and kelp (North Pacific)

| Step | With otters | Otters removed |
|---|---|---|
| Sea otters (predator) | Present | Hunted for fur, or eaten by orcas |
| Sea urchins (herbivore) | Kept in check | Population explodes |
| Kelp (producer) | Dense kelp forests | Grazed into "urchin barrens" |
| Fish and invertebrates that shelter in kelp | Abundant | Lose habitat and decline |

### Case 2: Gray wolves in Yellowstone

Wolves were eliminated from Yellowstone by the 1920s and reintroduced in 1995–1996. Afterward:

- Elk numbers fell and elk spent less time browsing in exposed stream valleys.
- Willow and aspen regrew along some streams.
- Beaver colonies increased where willows recovered.

Ecologists still debate **how much** of the plant recovery came from wolves versus drought, hunting and other factors, but the case is a standard example of **top-down control**.

### Top-down versus bottom-up control

| Control | Population is limited by | Example |
|---|---|---|
| **Top-down** | Predators above it | Otters limiting urchins |
| **Bottom-up** | Resources below it (producers, nutrients) | Nitrogen limiting plant growth, which limits herbivores |

> 🔑 **AP Connection:** For any "predict the effect of removing species X" question, trace at least two levels in writing: "Removing X increases Y because X preys on Y; more Y then decreases Z because Y eats Z." Graders look for the **because** at each step.
      `
    },
    {
      id: 'apesecos4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Along a stretch of coastline, sea otters disappear after an increase in orca predation. Which change in the kelp forest is most likely?',
            options: [
              'Kelp increases because otters no longer disturb it',
              'Kelp declines as urchins go uncontrolled',
              'Kelp is unaffected because otters do not eat kelp',
              'Kelp increases because urchins lose their main food'
            ],
            correctAnswer: 1,
            explanation: 'Otters prey on sea urchins, which graze kelp. Without otters the urchin population grows and overgrazes the kelp, so the effect cascades down two levels even though otters never eat kelp themselves.'
          },
          {
            question: 'A food web has many omnivores that feed at several trophic levels. Compared with a simple food chain, how is it likely to respond when one prey species declines?',
            options: [
              'Predators collapse quickly with no backup food',
              'Its predators switch to other prey, keeping the web stable',
              'Producers increase without limit as consumers disappear from the web',
              'Decomposers take over as the main energy source'
            ],
            correctAnswer: 1,
            explanation: 'When predators have several food sources, they can shift to other prey, which buffers the web against the loss of one species. A simple chain offers no alternative, so a single loss can collapse the levels above it.'
          }
        ]
      }
    },
    {
      id: 'apesecos4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Arrows | Point from eaten to eater, in the direction of energy flow |
| Multiple levels | An organism that eats at two levels occupies two trophic levels |
| Removal effects | Alternate up and down the chain; trace each step with "because" |
| Energy pyramid | Never inverted |
| Biomass pyramid | Can invert in aquatic systems with fast-reproducing phytoplankton |
| Numbers pyramid | Can invert when one large producer supports many consumers |
| Biomagnification | Persistent pollutants concentrate at higher trophic levels |
| Keystone species | Large effect relative to abundance; removal triggers a trophic cascade |

**Next:** Part 5 looks at the interactions that link species in these webs (predation, competition, symbiosis and resource partitioning) and clears up the most common misconceptions in this unit.
      `
    }
  ]
};
