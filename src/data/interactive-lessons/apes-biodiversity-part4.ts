export const apesBiodiversityPart4Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbiod4-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 4 of 7 — Island Biogeography and Habitat Fragmentation**

---

| Section |
|---------|
| 🏝️ The MacArthur–Wilson Model |
| The Species–Area Relationship |
| Area Conversions and Habitat Loss |
| Island Species: Specialists, Radiations and Invaders |
| Habitat Fragments as Islands |

> 🔑 **Key Concept:** **Island biogeography** is the study of how organisms are distributed on islands and how island communities are structured. Every island was colonized at some point by species arriving from elsewhere. The same rules apply to "habitat islands" on land: a forest patch surrounded by farms, a lake, or a mountaintop meadow.
      `
    },
    {
      id: 'apesbiod4-model',
      type: 'text' as const,
      content: `
## 🏝️ The MacArthur–Wilson Model

In the 1960s, ecologists Robert MacArthur and E. O. Wilson proposed that the number of species on an island reflects a **balance between two rates**.

### Reading the Graph (described in words)

- **x-axis:** number of species already on the island
- **y-axis:** rate (species gained or lost per unit of time)

**Immigration curve: starts high and slopes down.** When the island is empty, almost every species that arrives from the mainland is new. As species accumulate, fewer of the mainland's species are left that have not already arrived, so the rate of **new** arrivals falls.

**Extinction curve: starts at zero and slopes up.** With no species there is nothing to lose. As more species crowd in, each has a smaller share of space and food, populations are smaller, and competition is stronger, so more species die out per unit of time.

**Equilibrium:** the point where the two curves **cross**. Directly below it on the x-axis is the equilibrium number of species. At equilibrium, species still arrive and still go extinct, so the **list** of species changes over time (called **turnover**) while the **number** stays about the same.

### Distance and Size Shift the Curves

| Factor | Which curve moves | Effect on equilibrium |
|---|---|---|
| **Near** the mainland | Immigration curve is **higher** (dispersers reach it easily) | More species |
| **Far** from the mainland | Immigration curve is **lower** | Fewer species |
| **Large** island | Extinction curve is **lower** (bigger populations, more habitat types) | More species |
| **Small** island | Extinction curve is **higher** | Fewer species |

So a **large, near** island holds the most species, and a **small, far** island holds the fewest.

**Testing the model.** In the 1960s, Daniel Simberloff and E. O. Wilson removed all the arthropods from several small mangrove islets in the Florida Keys. Within about a year, the islets had been recolonized to roughly their original species numbers, though with a different mix of species, and islets nearer the mainland regained more species than distant ones.

> 🔑 **AP Connection:** If an FRQ asks you to explain why a remote island has few species, use **both** curves when you can: low immigration because few organisms can disperse that far, and (if it is small) high extinction because small populations are easily wiped out.
      `
    },
    {
      id: 'apesbiod4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On the MacArthur–Wilson graph, the immigration curve slopes downward as the number of species on an island increases. What explains the downward slope?',
            options: [
              'Fewer mainland species remain that have not already arrived',
              'Islands far from the mainland receive fewer dispersing organisms',
              'Each resident species has a smaller population and is likelier to die out',
              'Larger islands offer more habitat types for new arrivals to occupy'
            ],
            correctAnswer: 0,
            explanation: 'Immigration in this model counts only new species, and as the island fills there are fewer new ones left to arrive. Distance sets how high the immigration curve sits, not its slope, and shrinking populations explain the rising extinction curve.'
          },
          {
            question: 'Island P covers 500 km² and lies 10 km from the mainland. Island Q also covers 500 km² but lies 300 km away. Compared with Island P, Island Q will most likely have',
            options: [
              'a higher extinction rate and fewer species at equilibrium',
              'a lower immigration rate and fewer species at equilibrium',
              'a lower immigration rate but the same number of species',
              'a lower extinction rate and more species at equilibrium'
            ],
            correctAnswer: 1,
            explanation: 'Distance lowers the immigration curve, and with the extinction curve unchanged the curves cross at fewer species. The two islands have the same area, so there is no reason for their extinction curves to differ.'
          },
          {
            question: 'An island has reached its equilibrium number of species. Which statement about its community is also true?',
            options: [
              'No new species arrive, because every niche is already filled',
              'Some species keep arriving and others keep dying out',
              'Extinctions stop, because each population is at carrying capacity',
              'The island now holds every species found on the nearest mainland'
            ],
            correctAnswer: 1,
            explanation: 'Equilibrium means immigration and extinction are equal, not zero, so the species list keeps turning over while the count stays steady. An island almost never holds the whole mainland species pool.'
          }
        ]
      }
    },
    {
      id: 'apesbiod4-species-area',
      type: 'text' as const,
      content: `
## The Species–Area Relationship

Larger areas hold more species, but not in direct proportion. Ecologists describe the pattern as $S = cA^z$, where $S$ is the number of species, $A$ is area, and $c$ and $z$ are constants fitted to data. For many islands $z$ is about 0.25 to 0.3, which gives a handy **rule of thumb**:

> **A 10-fold increase in area roughly doubles the number of species.** A 10-fold decrease roughly halves it.

### Worked Example 1: Predicting Species Number

An island of 100 km² holds 40 reptile species. Predict the number on similar islands (same habitat, same distance from the mainland).

| Island area | Change in area | Predicted species |
|---|---|---|
| 10 km² | ÷ 10 | 40 ÷ 2 = **about 20** |
| 100 km² | (reference) | **40** |
| 1,000 km² | × 10 | 40 × 2 = **about 80** |

Notice that the 1,000 km² island has 10 times the area of the 100 km² island but only 2 times the species.

### Worked Example 2: What Habitat Loss Predicts

A forest region of 2,000 km² holds 160 bird species. Logging leaves 200 km².

1. Percent of habitat lost: $\\dfrac{2{,}000 - 200}{2{,}000} \\times 100 = 90\\%$
2. Area fell 10-fold, so species are predicted to fall by about half: $160 \\div 2 = $ **about 80 species**

These losses do not all happen at once. Some species linger in the remaining forest for decades with populations too small to last. Ecologists call these expected future losses an **extinction debt**.

---

## Area Conversions and Habitat Loss

| Unit | Equivalent |
|---|---|
| 1 hectare (ha) | 10,000 m² (a square 100 m on each side) |
| 1 km² | 100 ha = 1,000,000 m² |

### Worked Example 3: Converting Units

1. A reserve covers 250 km². In hectares: $250 \\times 100 = $ **25,000 ha**
2. A woodlot covers 450 ha. In km²: $450 \\div 100 = $ **4.5 km²**
3. A field measures 800 m by 500 m: $800 \\times 500 = 400{,}000 \\text{ m}^2$, and $400{,}000 \\div 10{,}000 = $ **40 ha**

### Worked Example 4: Percent Habitat Loss

A wetland once covered 25,000 ha. Today 7,500 ha remain.

$$\\text{percent lost} = \\frac{\\text{original} - \\text{remaining}}{\\text{original}} \\times 100 = \\frac{25{,}000 - 7{,}500}{25{,}000} \\times 100 = 70\\%$$

Check: 30% of 25,000 is 7,500 ✓. If the two areas are given in different units, convert first.
      `
    },
    {
      id: 'apesbiod4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** A nature reserve covers 3.5 km². How many hectares is that?

**2)** A forest of 12,000 ha is cleared until 4,200 ha remain. What percent of the forest was lost? (number only)

**3)** A 50 km² island holds 30 ant species. Using the rule of thumb, about how many species would you predict on a similar 500 km² island?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['350', '65', '60'],
        hint1: 'Each km² holds 100 ha.',
        hint2: 'Percent lost = (12,000 − 4,200) ÷ 12,000 × 100.',
        hint3: 'The area increased 10-fold. What does a 10-fold increase in area do to species number?',
        explanation: '1) 3.5 × 100 = 350 ha. 2) 7,800 ÷ 12,000 = 0.65, so 65% was lost. 3) A 10-fold increase in area roughly doubles species number, so 30 × 2 = about 60 species.'
      }
    },
    {
      id: 'apesbiod4-island-species',
      type: 'text' as const,
      content: `
## Island Species: Specialists, Radiations and Invaders

### Specialists
Most islands have limited food and territory. Over many generations, island species often become **specialists**: they use a narrow set of foods or habitats very efficiently, which reduces competition with other residents.

### Adaptive Radiation
When a few colonists reach a remote island chain with many empty niches, one ancestral species can split into many species, each adapted to a different niche. This is **adaptive radiation**.
- **Hawaiian honeycreepers:** dozens of species descended from one finch-like ancestor, with bills shaped for nectar, seeds, insects or snails.
- **Galápagos finches:** about a dozen species with bills suited to different seeds and insects.

Because of this, islands have many **endemic** species, found nowhere else on Earth.

### Vulnerability to Invasive Species
The CED warns that specialists' long-term survival may be jeopardized when **invasive species**, which are typically **generalists**, are introduced and outcompete them. Island species face extra risks:
- Many evolved **without predators** such as snakes or rats, so they lack defensive behaviors. Some island birds even lost the ability to fly.
- Populations are **small** and confined to one island, so there is nowhere to retreat.

| Case | What happened |
|---|---|
| **Guam** | The brown tree snake arrived in military cargo after World War II and wiped out most of the island's native forest bird species |
| **Mauritius** | The flightless dodo was extinct by the late 1600s, hunted by sailors and preyed on by introduced animals such as rats and pigs |
| **Hawaii** | Introduced mosquitoes spread avian malaria, which has eliminated many honeycreeper populations from lowland forests |
      `
    },
    {
      id: 'apesbiod4-fragmentation',
      type: 'text' as const,
      content: `
## Habitat Fragments as Islands

When roads, farms or cities break a large habitat into pieces, each remaining patch behaves like an island: smaller patches hold fewer species, and isolated patches are hard for organisms to recolonize.

### Edge Effects
The outer band of a fragment differs from its interior. Edges are **brighter, windier, hotter and drier**, and they let in **edge species**, nest predators (raccoons, crows) and invasive plants. Species that need deep forest (interior specialists) lose habitat even where trees still stand.

### Worked Example 5: Fragmentation Shrinks the Interior

Assume edge effects reach **100 m** into a forest from every side.

**One square fragment, 1 km × 1 km (100 ha):**
1. Interior side length: $1{,}000 - 2(100) = 800$ m
2. Interior area: $800 \\times 800 = 640{,}000 \\text{ m}^2 = 64$ ha
3. Edge habitat: $100 - 64 = 36$ ha, or **36%** of the fragment

**The same forest cut into four squares, each 500 m × 500 m (25 ha each):**
1. Interior side length: $500 - 2(100) = 300$ m
2. Interior area of one square: $300 \\times 300 = 90{,}000 \\text{ m}^2 = 9$ ha
3. Total interior: $4 \\times 9 = 36$ ha, so edge habitat is $100 - 36 = 64$ ha, or **64%**

The total forest area never changed, but interior habitat fell from 64 ha to 36 ha, a $\\dfrac{36 - 64}{64} \\times 100 \\approx -44\\%$ change.

### Habitat Corridors
A **corridor** is a strip of habitat that links fragments, such as a forested stream bank or the wildlife overpasses built across the Trans-Canada Highway in Banff National Park.

| Benefits | Drawbacks |
|---|---|
| Animals can move between patches to find food, mates and new territory | Can also carry diseases, invasive species and fire between patches |
| Gene flow reduces inbreeding in small populations | Narrow corridors are mostly edge habitat |
| Recolonization after a local extinction raises the effective "immigration rate" | Land for corridors can be costly to buy |

> 🔑 **AP Connection:** Tie corridors to the model: a corridor acts like moving an island **closer to the mainland**, raising immigration. Reserve design debates (one large reserve or several small ones) belong to **Biodiversity Conservation** in Unit 9; here, know the island logic behind them.
      `
    },
    {
      id: 'apesbiod4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Roads split a 100-hectare forest into four separate 25-hectare patches. Total tree cover is unchanged. Which species is most likely to decline?',
            options: [
              'A songbird that nests only deep inside closed woodland',
              'A deer that browses on shrubs growing along openings',
              'A raccoon that raids bird nests near woodland margins',
              'A cowbird that lays its eggs in the nests of other birds'
            ],
            correctAnswer: 0,
            explanation: 'Fragmenting the forest converts interior habitat into edge, so an interior-nesting specialist loses habitat even though tree cover is unchanged. Deer, raccoons and cowbirds thrive along edges and usually increase after fragmentation.'
          },
          {
            question: 'Brown tree snakes, accidentally brought to Guam after World War II, wiped out most of the island\'s native forest bird species. Which trait of island species best explains why the birds were so vulnerable?',
            options: [
              'They were generalists, so the snakes outcompeted them for food',
              'They evolved with no snakes present, so they lacked defenses',
              'They were recent arrivals that had not yet adapted to Guam',
              'They held very large ranges that the snakes could easily reach'
            ],
            correctAnswer: 1,
            explanation: 'Island birds that evolved without snakes had no defensive behaviors against a climbing nest predator. The snakes ate the birds and their eggs rather than competing with them, and the native birds were long-established residents, not recent arrivals.'
          }
        ]
      }
    }
  ]
}
