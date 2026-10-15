export const apesBiodiversityConservationPart5Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apesbiod5-intro',
      type: 'text' as const,
      content: `
# 🛡️ Biodiversity Conservation

**Part 5 of 7 — Human Impacts, Solutions and Trade-offs**

---

| Section |
|---------|
| 📖 How Human Activity Drives Biodiversity Loss |
| In-Situ and Ex-Situ Conservation |
| Calculating Protection Targets |
| Misconceptions That Cost Points |

> 🔑 **Key Concept:** Parts 2–4 looked at invaders, endangered species and how to count them. This part looks at the root causes behind both, compares the main families of solutions, and shows why every solution carries a trade-off you should be ready to name on the exam.
      `
    },
    {
      id: 'apesbiod5-impacts',
      type: 'text' as const,
      content: `
## 📖 How Human Activity Drives Biodiversity Loss

### Habitat loss: the leading cause

| Driver | How it removes or degrades habitat |
|---|---|
| **Agricultural expansion** | Converting forest, grassland and wetland to cropland and pasture; the largest driver of tropical deforestation |
| **Urbanization and sprawl** | Paving, buildings and lawns replace native cover; light and noise disturb wildlife |
| **Roads** | Split habitat into fragments, kill animals in collisions and give invasive plants a path inward |
| **Dams** | Block fish migration and turn flowing river habitat into a still reservoir |
| **Draining and filling wetlands** | Removes breeding and feeding grounds for amphibians, waterfowl and fish |

How fragments behave like islands, and why edges degrade them, was covered in the Biodiversity topic (Part 4). The key point here is that fragmentation can harm a species even when total forest area changes little.

### Overexploitation

Harvesting faster than a population can replace itself:

- **Overfishing:** the Atlantic cod fishery off Newfoundland collapsed, and Canada closed it in 1992.
- **Bushmeat hunting:** wild animals hunted for food in parts of Central Africa and Southeast Asia, often beyond sustainable levels as roads open forests to hunters.
- **Wildlife trade:** pets, traditional medicine and luxury goods (Part 3).
- **Selective logging** of valuable trees such as mahogany.

### Pollution and climate change

- **Pollution** harms species directly (DDT and eggshells, oil spills) or through their habitat (nutrient runoff leading to dead zones).
- **Climate change** shifts suitable conditions **poleward and upslope**. Species that can move may track their range; species on mountaintops or with slow dispersal can run out of room. Warmer, more acidic oceans stress coral reefs.

These drivers rarely act alone. A forest frog may face a road that splits its habitat, an introduced fungus, and drier summers, all at once.

### How fast is loss happening?

Extinction is natural; the long-term average is called the **background extinction rate**. The 2019 global assessment by IPBES (the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services) estimated current extinction rates at least tens to hundreds of times higher than the average over the past 10 million years, which is why many scientists argue a human-driven mass extinction is under way.
      `
    },
    {
      id: 'apesbiod5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A new highway crosses a large forest. Total forest area falls by only 2 percent, yet several bird species decline sharply. Which explanation best accounts for this?',
            options: [
              'The road splits the forest into smaller patches with more edge habitat',
              'Clearing for the road removed most of the large trees the birds nest in',
              'Exhaust from traffic lowers the oxygen content of forest air',
              'Birds avoid flying over any cleared strip wider than one meter'
            ],
            correctAnswer: 0,
            explanation: 'Fragmentation increases edge habitat and isolates populations even when little area is lost, which hurts interior species. Only 2 percent of the trees were removed, and traffic does not measurably lower forest oxygen.'
          },
          {
            question: 'A mountain wildflower grows only above 3,000 m. As the climate warms, its suitable zone shifts upslope. Why is this species at particular risk?',
            options: [
              'The zone it needs shrinks and eventually runs out at the summit',
              'Warmer air at high elevation contains much less carbon dioxide',
              'Pollinators move downslope as temperatures rise and abandon it',
              'Snowmelt arrives later each year and shortens its growing season'
            ],
            correctAnswer: 0,
            explanation: 'Moving upslope means a smaller area at each step, and at the summit there is nowhere left to go. Warming brings earlier, not later, snowmelt, and carbon dioxide does not drop with warmer air.'
          },
          {
            question: 'Which example describes overexploitation rather than habitat loss?',
            options: [
              'Draining a coastal marsh for a housing development',
              'Catching cod faster than the population can reproduce',
              'Clearing tropical forest to plant oil palm',
              'Damming a river that salmon use to reach spawning sites'
            ],
            correctAnswer: 1,
            explanation: 'Overexploitation is harvesting a species faster than it can replace itself, as with the Atlantic cod. Draining marshes, clearing forest and damming rivers all destroy or block habitat.'
          }
        ]
      }
    },
    {
      id: 'apesbiod5-strategies',
      type: 'text' as const,
      content: `
## In-Situ and Ex-Situ Conservation

**In-situ** means "in place": protecting species in their natural habitat. **Ex-situ** means "off site": keeping them in zoos, gardens or seed banks.

| Approach | Strengths | Trade-offs |
|---|---|---|
| **Protected areas** (in-situ) | Protects whole ecosystems and every species in them | Land is taken out of other uses; "paper parks" may lack enforcement; boundaries do not move as climate shifts |
| **Habitat restoration** (in-situ) | Rebuilds lost habitat such as wetlands or prairie | Slow and expensive; the restored community may differ from the original |
| **Sustainable use** (in-situ) | Fishing quotas, selective logging and ecotourism let people earn income from intact ecosystems | Needs monitoring; quotas set too high still deplete populations |
| **Captive breeding** (ex-situ) | Can save a species from immediate extinction | Costly; small captive gene pool; does nothing about the threat that caused the decline |
| **Seed banks** (ex-situ) | Store genetic diversity of thousands of plant species cheaply | Plants are frozen in time and do not keep adapting to a changing climate |

The strongest plans combine both. The California condor program bred birds in captivity (ex-situ) while campaigns to replace lead ammunition tackled the threat in the wild (in-situ).

## Calculating Protection Targets

In 2022, nations adopting the **Kunming-Montreal Global Biodiversity Framework** set a target of conserving 30 percent of the world's land and 30 percent of its oceans by 2030, often called "30 by 30."

### Worked Example 1: Meeting a 30% Target (illustrative data)

A country covers 1,200,000 km², and 18 percent is currently protected.

1. Area needed at 30%: $0.30 \\times 1{,}200{,}000 = 360{,}000$ km²
2. Area protected now: $0.18 \\times 1{,}200{,}000 = 216{,}000$ km²
3. Additional area needed: $360{,}000 - 216{,}000 = 144{,}000$ km²

Shortcut: $(0.30 - 0.18) \\times 1{,}200{,}000 = 144{,}000$ km².

### Worked Example 2: Converting to Hectares

$$144{,}000\\ \\text{km}^2 \\times 100\\ \\text{ha/km}^2 = 14{,}400{,}000\\ \\text{ha}$$

### Worked Example 3: Comparing Costs (illustrative data)

Buying and managing habitat costs \\$300 per hectare. A captive-breeding program for one bird costs \\$2,000,000 per year.

$$\\text{Habitat the program's yearly cost could protect} = \\frac{\\$2{,}000{,}000}{\\$300/\\text{ha}} \\approx 6{,}667\\ \\text{ha}$$

That habitat would shelter every species living in it, not just one bird, which is the main argument for in-situ protection. The counterargument is that some species are too few to survive while habitat is being secured.
      `
    },
    {
      id: 'apesbiod5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas or units. Values are illustrative.

1) A state covers 250,000 km², and 12 percent is protected. How many more km² must it protect to reach 30 percent?

2) Convert your answer to question 1 into hectares.

3) A wetland restoration costs \\$1,500 per hectare. How many hectares can a \\$600,000 grant restore?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45000', '4500000', '400'],
        hint1: 'Multiply the area by the difference between the two percents, 0.30 − 0.12.',
        hint2: 'Each km² equals 100 hectares.',
        hint3: 'Divide the grant by the cost per hectare.',
        explanation: '1) 0.18 × 250,000 = 45,000 km². 2) 45,000 × 100 = 4,500,000 ha. 3) \\$600,000 ÷ \\$1,500 per ha = 400 ha.'
      }
    },
    {
      id: 'apesbiod5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions That Cost Points

| Misconception | Correction |
|---|---|
| "Captive breeding solves endangerment." | It buys time. Unless the original threat (habitat loss, poaching, lead) is removed, released animals decline again. |
| "Extinction only happens because of people." | Background extinction is natural. The concern is that current rates are far above the background rate. |
| "A protected area on a map is protected." | Without staff, funding and enforcement, logging and poaching can continue inside it. |
| "Climate change affects species only through heat." | It also shifts rainfall, timing of seasons (flowering vs pollinator arrival), sea level and ocean chemistry. |
| "The ESA protects only animals." | Plants can be listed too, though their protection from take is narrower. |
| "Any solution with no downside is the best answer." | AP questions reward naming a realistic trade-off, such as cost, lost land use or enforcement difficulty. |

> 🔑 **AP Connection:** FRQs often ask you to "propose a solution and describe one disadvantage." Give a specific method, explain how it reduces the threat, then name a concrete cost: "Designating the river corridor as protected habitat would stop new development there, but it would limit the town's ability to expand housing."
      `
    },
    {
      id: 'apesbiod5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A zoo successfully breeds an endangered parrot, but released birds keep disappearing because trappers catch them for the pet trade. Which conclusion is best supported?',
            options: [
              'Captive programs fail unless the threat in the wild is reduced',
              'The parrots should be kept permanently in zoos instead of being released',
              'The zoo should breed more parrots so that some escape the trappers',
              'The species should be moved to a different continent with no trappers'
            ],
            correctAnswer: 0,
            explanation: 'Released birds face the same threat that caused the decline, so ex-situ breeding only works alongside in-situ protection such as anti-poaching enforcement. Moving a species to another continent risks creating an invasive species.'
          },
          {
            question: 'Which is the most accurate disadvantage of relying on seed banks to conserve wild plant species?',
            options: [
              'Stored seeds do not keep adapting to changing conditions',
              'Seed banks can store only crop species, not wild plants',
              'Seeds lose all genetic diversity once they are frozen',
              'Seed banks release their seeds into the wild every year'
            ],
            correctAnswer: 0,
            explanation: 'Frozen seeds are a snapshot of past genetic variation and do not evolve with the climate the way wild populations do. Seed banks hold many wild species, and freezing preserves rather than erases genetic diversity.'
          },
          {
            question: 'A national park was created in 2000, but satellite images show logging inside its boundaries has continued. What does this situation best illustrate?',
            options: [
              'A paper park that is protected by law but not in practice',
              'Habitat restoration that has not yet replaced the cut trees',
              'An ex-situ program that stores tree species off site',
              'Sustainable use in which quotas set the logging rate'
            ],
            correctAnswer: 0,
            explanation: 'A paper park exists on maps and in law but lacks the staff, funding or enforcement to stop harmful use. Nothing in the scenario describes replanting, off-site storage or a quota system.'
          }
        ]
      }
    },
    {
      id: 'apesbiod5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Leading driver | Habitat loss, chiefly agricultural expansion |
| Overexploitation | Harvest faster than replacement (Atlantic cod, bushmeat, wildlife trade) |
| Climate change | Ranges shift poleward and upslope; mountaintop species run out of room |
| Extinction rate | At least tens to hundreds of times the background rate (IPBES 2019) |
| In-situ vs ex-situ | In place (parks, restoration, sustainable use) vs off site (zoos, seed banks) |
| 30 by 30 | Kunming-Montreal target: conserve 30% of land and ocean by 2030 |
| Trade-offs | Every solution costs money, land use or enforcement effort |

**Next:** Part 6 puts Parts 1–5 together in AP-style free-response practice with a full data set.
      `
    }
  ]
};
