export const apesBiodiversityConservationPart2Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apesbiod2-intro',
      type: 'text' as const,
      content: `
# 🛡️ Biodiversity Conservation

**Part 2 of 7 — Invasive Species in Depth**

---

| Section |
|---------|
| 📖 What Makes a Species Invasive |
| Case Studies From North America and Beyond |
| Spread, Damage and the Cost of Waiting |
| Controlling Invaders and the Trade-offs |

> 🔑 **Key Concept:** Part 1 placed invasive species in HIPPCO. This part explains **why** a few introduced species explode while most fail, follows six real invaders, and uses simple growth and cost calculations to show why early detection is the cheapest form of control.
      `
    },
    {
      id: 'apesbiod2-traits',
      type: 'text' as const,
      content: `
## 📖 What Makes a Species Invasive

A **non-native** (introduced) species lives outside its native range because people moved it there. It becomes **invasive** only when it spreads and causes ecological or economic harm. Most introduced species never establish, and many that do, such as most crop plants, cause little harm.

### Traits that predict invasive success

| Trait | Why it helps an invader |
|---|---|
| **Generalist** diet and habitat | It can use whatever food and shelter the new place offers |
| **r-selected** reproduction | Many offspring, early maturity and short generations allow rapid growth |
| **Tolerance** of a wide range of conditions | It survives new temperatures, salinities or soils |
| **Good dispersal** | Seeds, larvae or adults spread quickly to new sites |
| **Few natural enemies** in the new range | The predators, parasites and diseases that limited it were left behind |

The last trait matters most and is often called **enemy release**. In its native range an invader shares a long history with species that eat it, infect it or compete with it. In a new range the native species have no such history, so native prey may not recognize the invader as a threat, and native predators may not eat it.

### How species are moved

| Pathway | Example |
|---|---|
| Ship ballast water | Zebra mussel larvae carried to the Great Lakes |
| Wood packing material | Emerald ash borer larvae in shipping pallets |
| Pet and aquarium trade | Burmese pythons and lionfish released by owners |
| Ornamental plants and erosion control | Kudzu planted along roads and farms |
| Deliberate release for pest control | Cane toads released in Australia |
| Escape from aquaculture | Bighead and silver carp escaping into the Mississippi basin |

> 🔑 **AP Connection:** When a question asks you to "explain why species X became invasive," name a trait **and** link it to the new environment, for example: "The lionfish has no natural predators in the Atlantic, so its population is not limited by predation and grows rapidly."
      `
    },
    {
      id: 'apesbiod2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A nursery imports four ornamental plant species. Which one is most likely to become invasive if it escapes into nearby fields?',
            options: [
              'A shrub that grows quickly, makes many seeds and tolerates many soils',
              'A shrub that grows slowly and is pollinated by one native bee species',
              'A vine that grows quickly but makes seeds only after twenty years',
              'A herb that makes many seeds but survives only in acidic bog soil'
            ],
            correctAnswer: 0,
            explanation: 'Rapid growth, heavy seed production and broad soil tolerance are the generalist, r-selected traits that let an invader spread. Each other plant has a limiting trait: a single pollinator, slow maturity or a narrow habitat requirement.'
          },
          {
            question: 'Why do many invasive species reach far higher densities in their new range than in their native range?',
            options: [
              'They left behind the predators that limited them',
              'They switch to K-selected reproduction soon after they arrive',
              'They evolve much higher growth rates within a single generation',
              'They receive extra food from native species that benefit from them'
            ],
            correctAnswer: 0,
            explanation: 'Enemy release means the predators, parasites and diseases that held the species in check did not travel with it. Growth rates do not jump within one generation, and invaders typically stay r-selected rather than switching strategies.'
          },
          {
            question: 'Which statement correctly distinguishes a non-native species from an invasive species?',
            options: [
              'Every non-native species eventually becomes invasive given enough time',
              'Invasive species are introduced species that spread and cause harm',
              'Only species from other continents count as non-native or invasive',
              'Non-native species are plants, while invasive species are animals'
            ],
            correctAnswer: 1,
            explanation: 'A species is invasive only if it spreads and causes ecological or economic harm in its new range. Most introduced species never become invasive, and both plants and animals can be invasive whether they came from nearby or overseas.'
          }
        ]
      }
    },
    {
      id: 'apesbiod2-cases',
      type: 'text' as const,
      content: `
## Case Studies From North America and Beyond

| Invader | Native range | How it arrived | Main harm |
|---|---|---|---|
| **Zebra mussel** | Black and Caspian Sea region | Ballast water; detected in the Great Lakes in the late 1980s | Filters plankton from the food web; smothers native mussels; clogs water-intake pipes |
| **Kudzu** | East Asia | Planted for ornament and erosion control | Grows over trees and shrubs, shading them out |
| **Emerald ash borer** | Northeast Asia | Wood packing material; found near Detroit in 2002 | Larvae tunnel under bark and kill ash trees, killing hundreds of millions |
| **Bighead and silver carp** | East Asia | Escaped from southern U.S. fish farms into the Mississippi basin | Eat plankton that native fish and larvae depend on |
| **Cane toad** | Central and South America | Released in Australia in 1935 to control sugarcane beetles | Toxic skin poisons native predators that eat it; did not control the beetles |
| **Lionfish** | Indo-Pacific | Aquarium releases in the western Atlantic | Eats large numbers of small reef fish; few predators in its new range |

### Reading the zebra mussel story as a chain of effects

1. Zebra mussels filter huge volumes of water and remove phytoplankton.
2. Water becomes **clearer**, and sunlight reaches deeper, so rooted plants and bottom algae spread.
3. With less phytoplankton, **zooplankton** and the fish larvae that eat them have less food.
4. Mussels attach to the shells of native mussels, which can no longer feed or move, and native mussel populations decline.

Clearer water sounds like an improvement, but it signals that energy has been diverted from the open-water food web to the mussels.
      `
    },
    {
      id: 'apesbiod2-calcs',
      type: 'text' as const,
      content: `
## Spread, Damage and the Cost of Waiting

Invaders often grow exponentially in their first years because nothing limits them. The numbers below are **illustrative data**.

### Worked Example 1: A Doubling Infestation

An invasive vine covers 2 ha of a state forest and doubles its area each year.

| Year | Area covered |
|---|---|
| 0 | 2 ha |
| 1 | 4 ha |
| 2 | 8 ha |
| 3 | 16 ha |
| 4 | 32 ha |
| 5 | 64 ha |

Shortcut: $\\text{area} = 2 \\times 2^{5} = 64$ ha after 5 years.

### Worked Example 2: The Cost of Waiting

Removing the vine costs \\$500 per hectare.

$$\\text{Act in year 0: } 2\\ \\text{ha} \\times \\$500 = \\$1{,}000$$
$$\\text{Act in year 5: } 64\\ \\text{ha} \\times \\$500 = \\$32{,}000$$

Waiting five years made control 32 times as expensive, which is why agencies stress **early detection and rapid response**.

### Worked Example 3: Percent Decline of a Native Species

Before zebra mussels arrived, native mussels in a lake averaged 40 per m². Five years later they averaged 6 per m².

$$\\text{percent change} = \\frac{6 - 40}{40} \\times 100 = -85\\%$$

Native mussel density fell by 85 percent.
      `
    },
    {
      id: 'apesbiod2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas or units. Values are illustrative.

1) An invasive grass covers 3 ha and doubles its area every year. How many hectares will it cover after 4 years?

2) Removing that grass costs \\$400 per hectare. How many dollars would it cost to clear the area from question 1?

3) A native snail fell from 50 per m² to 8 per m² after an invader arrived. By what percent did its density decrease?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['48', '19200', '84'],
        hint1: 'Four doublings multiply the area by 2⁴ = 16.',
        hint2: 'Multiply the area from question 1 by the cost per hectare.',
        hint3: 'Find the drop (50 − 8), divide by the starting value, then multiply by 100.',
        explanation: '1) 3 × 2⁴ = 48 ha. 2) 48 × \\$400 = \\$19,200. 3) (50 − 8) ÷ 50 × 100 = 84 percent.'
      }
    },
    {
      id: 'apesbiod2-control',
      type: 'text' as const,
      content: `
## Controlling Invaders and the Trade-offs

| Method | Example | Trade-off |
|---|---|---|
| **Prevention** | Ballast water exchange or treatment; inspecting imported wood; banning sale of risky pets | Cheapest per species, but needs constant enforcement at every port and border |
| **Early detection and rapid response** | Volunteer surveys; checking boats for mussels at boat ramps | Works only while the population is still small |
| **Mechanical control** | Hand-pulling, cutting, trapping, spearfishing lionfish | Labor-intensive; rarely eliminates a widespread invader |
| **Chemical control** | Targeted herbicides on kudzu; treating valuable ash trees with insecticide | Can harm non-target species and water quality |
| **Biological control** | Releasing a natural enemy from the invader's native range | Can be effective, but the control agent may attack native species |
| **Physical barriers** | Electric barriers in the Chicago-area canals to block carp | Expensive; one breach can undo the effort |

### Why biological control is tested so often

The cane toad shows the risk. The toads did not reduce the beetles they were released to control, but they spread across much of northern Australia and poisoned native predators such as quolls that tried to eat them. Modern biological control requires years of testing to show that a control agent attacks only its target before it is released.

> 🔑 **AP Connection:** A strong "propose a solution" answer names a specific method **and** its mechanism: "Require ships to exchange ballast water in the open ocean, where freshwater larvae cannot survive the salinity, before entering the Great Lakes."
      `
    },
    {
      id: 'apesbiod2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A state agency finds a small patch of an invasive aquatic plant in one lake. Which response is best supported by the economics of invasive species control?',
            options: [
              'Pull out every plant right away, before the infestation grows',
              'Wait to see whether native snails and fish begin eating it',
              'Release a non-native insect that feeds on the plant elsewhere',
              'Survey the lake for several years before deciding what to do'
            ],
            correctAnswer: 0,
            explanation: 'An infestation that grows exponentially becomes far more expensive to remove each year it is left alone, so rapid response is the cheapest option. Releasing an untested insect risks a new invader, and waiting lets the patch spread.'
          },
          {
            question: 'Cane toads were released in Australia in 1935 to control beetles that damaged sugarcane. Which outcome best illustrates the main risk of biological control?',
            options: [
              'The toads spread widely and poisoned native predators that ate them',
              'The toads ate so many beetles that the sugarcane could not be pollinated',
              'The toads were eaten by native snakes before they could reproduce',
              'The toads bred with native frogs and produced sterile offspring'
            ],
            correctAnswer: 0,
            explanation: 'The toads became an invasive species themselves, spreading far beyond the cane fields and killing native predators with their toxins. The main risk of biological control is exactly this: the control agent harms species other than its target.'
          },
          {
            question: 'Many states restrict moving firewood from one county to another. Which explanation best supports that rule?',
            options: [
              'Smoke from burning ash wood attracts adult beetles from many kilometers away',
              'Ash borer larvae living under the bark can ride along to uninfested forests',
              'Firewood stacks shelter mice that carry ash borer eggs into new forests',
              'Dried ash wood releases chemicals that weaken healthy trees around it'
            ],
            correctAnswer: 1,
            explanation: 'Emerald ash borer larvae live beneath the bark, so moving infested firewood carries them to new forests far faster than the adults could fly. The rule targets this human-assisted pathway of spread.'
          }
        ]
      }
    },
    {
      id: 'apesbiod2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Non-native vs invasive | Invasive = introduced **and** spreading **and** causing harm |
| Invader traits | Generalist, r-selected, tolerant, good dispersal, few natural enemies |
| Enemy release | Predators, parasites and diseases from the native range are left behind |
| Pathways | Ballast water, wood packing, pet trade, ornamentals, deliberate release, aquaculture escape |
| Zebra mussel effects | Clearer water, less plankton for native food webs, native mussels smothered |
| Cost of waiting | Exponential spread makes control costs grow just as fast |
| Biological control | Can work, but the agent itself may become invasive (cane toad) |

**Next:** Part 3 turns to the other side of the problem: which species are most at risk of extinction, and how laws like the Endangered Species Act and CITES work to bring them back.
      `
    }
  ]
};
