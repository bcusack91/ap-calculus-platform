export const apesAgricultureLandPart5Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesagri5-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 5 of 7 — Forests, Commons, Mining and Cities**

---

| Section |
|---------|
| 📖 The Tragedy of the Commons |
| Forests: Clearcutting and Sustainable Forestry |
| Mining: Ore, Overburden and Waste |
| Urbanization and Footprints |
| Sustainability and Sustainable Yield |
| Common Misconceptions |

> 🔑 **Key Concept:** Farms are only one way people use land. This part covers the rest of CED Unit 5: shared resources (5.1), forests (5.2 and 5.17), mining (5.9), cities (5.10), footprints (5.11) and the idea of sustainability (5.12).
      `
    },
    {
      id: 'apesagri5-commons',
      type: 'text' as const,
      content: `
## 📖 The Tragedy of the Commons

The **tragedy of the commons**, described by ecologist Garrett Hardin in 1968, is the idea that individuals using a shared resource act in their own self-interest rather than for the common good, and so deplete the resource.

Picture a pasture open to every herder. Each extra cow brings its owner the full profit, while the cost of the extra grazing is shared by everyone. Every herder therefore adds cows, and the pasture is overgrazed.

| Shared resource | How it is overused |
|---|---|
| Open ocean fisheries | Each fleet catches as much as it can before others do |
| Groundwater | Every well owner pumps freely from the same aquifer |
| Grazing land on public range | Overgrazing (Part 3) |
| The atmosphere | Emitters pay nothing for the pollution they add |

### Solutions

- **Regulation:** catch quotas, pumping permits, emission limits
- **Ownership or tradable rights:** assigning a share of the resource so users bear the costs of overuse
- **Community management:** local users set and enforce their own rules, which works well for many small fisheries and pastures

## Forests: Clearcutting and Sustainable Forestry

**Clearcutting** removes all the trees from an area at once. It is economically efficient: machines harvest quickly and cheaply in one pass. But it has major costs (CED 5.2):

| Effect of clearcutting | Why |
|---|---|
| **Soil erosion** | No roots hold the soil, and no canopy breaks the force of the rain |
| **Higher soil and stream temperatures** | No shade; warmer streams hold less dissolved oxygen |
| **Flooding** | Less water is taken up and transpired, so more runs off quickly |
| Habitat loss | Forest species lose shelter and food |
| More atmospheric $CO_{2}$ | Stored carbon is released as slash and soil decompose, and the trees no longer absorb $CO_{2}$ |

Forests also **remove air pollutants** and store carbon, which are services lost with the trees.

### Sustainable forestry (CED 5.17)

| Method | How it reduces impact |
|---|---|
| **Selective cutting** | Removes only some trees, leaving the forest structure and soil cover in place |
| **Reforestation** | Replanting trees after harvest |
| **Ecologically sustainable forestry** | Harvesting in ways that protect soil, water and biodiversity |
| **Buying certified sustainable wood and reusing wood** | Reduces demand for new logging |
| **IPM and removal of infected trees** | Controls pests and pathogens without blanket spraying |
| **Prescribed burns** | Controlled fires that clear built-up dead fuel, reducing the risk of severe wildfires |
      `
    },
    {
      id: 'apesagri5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Dozens of families pump irrigation water from one aquifer, and the water table falls each year. Why does each family keep pumping?',
            options: [
              'Each keeps the full gain from its pumping but splits the loss',
              'The aquifer refills faster as more water is pumped out',
              'Pumping from one aquifer is required for crop insurance',
              'Lower water tables make the remaining water cheaper'
            ],
            correctAnswer: 0,
            explanation: 'Each family keeps the whole benefit of the water it pumps, while the falling water table is a cost spread over everyone. This is the logic of the tragedy of the commons.'
          },
          {
            question: 'A stream that runs through a newly clearcut hillside is found to have lower dissolved oxygen in summer. What best explains this?',
            options: [
              'Loss of shade warms the water',
              'Logging trucks add oxygen-using fuel to the water',
              'Fewer leaves fall in, so decomposers use more oxygen',
              'Tree roots had been adding oxygen to the streambed'
            ],
            correctAnswer: 0,
            explanation: 'Without the canopy, sunlight warms the stream, and warm water holds less dissolved oxygen. Clearcutting is linked in the CED to higher soil and stream temperatures.'
          },
          {
            question: 'Why does a forest manager carry out prescribed burns in a dry pine forest?',
            options: [
              'To clear built-up dead fuel and lower the risk of a severe wildfire',
              'To add nitrogen to the soil so the trees can be harvested more often',
              'To kill every tree so that the site can be replanted in one season',
              'To raise the stream temperature so that more fish can live there'
            ],
            correctAnswer: 0,
            explanation: 'Controlled, low-intensity fires remove the dead branches and litter that would otherwise feed a hot, destructive wildfire. They do not kill all the trees.'
          }
        ]
      }
    },
    {
      id: 'apesagri5-mining',
      type: 'text' as const,
      content: `
## Mining: Ore, Overburden and Waste

| Term | Meaning |
|---|---|
| **Ore** | Rock with enough of a valuable mineral to be mined at a profit |
| **Reserve** | The known amount of a resource that can be extracted profitably with current technology |
| **Overburden** | Soil and rock removed to reach an ore deposit |
| **Tailings** | Finely ground waste left after the mineral is separated from the ore |
| **Slag** | Glassy waste left after smelting (heating ore to extract metal) |

| | **Surface mining** (strip mining, open pit) | **Subsurface mining** |
|---|---|---|
| How | Overburden is removed to expose shallow deposits | Tunnels and shafts reach deep deposits |
| Land impact | Removes vegetation and soil over large areas; erosion | Smaller surface footprint; possible subsidence |
| Worker risk | Lower | Higher: cave-ins, explosions, lung disease |
| Cost | Lower | Higher |
| Water | Exposed rock can produce **acid mine drainage** and leach heavy metals | Same risks from flooded mines and waste piles |

**Mine reclamation** restores mined land toward its original state: regrading the land, replacing topsoil and replanting. It reduces erosion and runoff, but the original ecosystem is rarely recreated.

### Declining ore grade

As the richest, most accessible ores run out, miners turn to **lower-grade ores**. Each tonne of metal then requires moving more rock, using more energy and water, and producing more waste.

### Worked Example: Waste From Lower-Grade Ore (illustrative data)

A copper ore is **0.5% copper** by mass. How much ore must be processed for 1 tonne of copper?

$$\\text{Ore} = \\frac{1\\ \\text{t}}{0.005} = 200\\ \\text{t}, \\quad \\text{waste} = 200 - 1 = 199\\ \\text{t}$$

If the grade falls to **0.25%**, the ore needed doubles to $1 \\div 0.0025 = 400$ t, and the waste rises to 399 t, before even counting the overburden.

## Urbanization and Footprints

**Urbanization** concentrates people and their resource demands (CED 5.10).

| Impact | Mechanism |
|---|---|
| **Saltwater intrusion** | Coastal cities pump fresh groundwater faster than it recharges; seawater moves into the aquifer and contaminates wells |
| Resource depletion | Water, energy and building materials drawn from far beyond city limits |
| More $CO_{2}$ | Burning fossil fuels for transport, heat and electricity; methane and $CO_{2}$ from landfills |
| Impervious surfaces | More runoff and flooding (Earth Systems Part 5 has the runoff calculations) |
| **Urban sprawl** | Population shifts from dense cities to low-density suburbs that spread into farmland and forest, increasing driving and habitat loss |

An **ecological footprint** compares the land and water area needed to supply a person's or society's resources and absorb its wastes with the area available (CED 5.11). A **carbon footprint** counts only greenhouse gas emissions, in tonnes of $CO_{2}$-equivalent. The ecological footprint is the broader measure; the carbon footprint is often its largest component.

## Sustainability and Sustainable Yield

**Sustainability** means using resources without depleting them for future generations (CED 5.12). The CED's **environmental indicators** of whether humanity is on a sustainable path are: biological diversity, food production, average global surface temperature and $CO_{2}$ concentration, human population, and resource depletion.

**Sustainable yield** is the amount of a renewable resource that can be taken each year without reducing the available supply.

### Worked Example: Sustainable Timber Harvest (illustrative data)

A managed forest holds **50,000 $m^{3}$** of timber, and its trees add volume at **2% per year**.

$$\\text{Sustainable yield} = 50{,}000 \\times 0.02 = 1{,}000\\ m^{3}\\ \\text{per year}$$

If the company harvests 1,500 $m^{3}$ a year instead, the standing timber shrinks by about 500 $m^{3}$ in the first year, and the next year's growth is smaller, because growth depends on how much timber remains.
      `
    },
    {
      id: 'apesagri5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A gold-bearing rock is 0.002% gold by mass. How many tonnes of ore must be processed to obtain 1 kg of gold? (1 t = 1,000 kg)

2) A forest holds 80,000 cubic meters of timber and grows 3% per year. What is its sustainable yield in cubic meters per year?

3) A person's ecological footprint is 6 global hectares, and the available biocapacity is 1.5 global hectares per person. How many Earths would be needed if everyone lived this way?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '2400', '4'],
        hint1: '0.002% = 0.00002 as a decimal. Ore = 1 kg ÷ 0.00002 = 50,000 kg. Convert to tonnes.',
        hint2: '80,000 × 0.03.',
        hint3: 'Divide the footprint by the biocapacity per person.',
        explanation: '1) 1 kg ÷ 0.00002 = 50,000 kg = 50 t of ore. 2) 80,000 × 0.03 = 2,400 cubic meters per year. 3) 6 ÷ 1.5 = 4 Earths.'
      }
    },
    {
      id: 'apesagri5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correction |
|---|---|
| "Replanting a clearcut restores the forest." | A young, even-aged plantation of one species lacks the structure, deadwood and biodiversity of the original forest for many decades. |
| "Mine reclamation erases the damage." | Reclamation reduces erosion and restores plant cover, but soils, drainage and communities rarely return to their original condition. |
| "As ore runs low, mining activity shrinks." | Lower-grade ore means **more** rock moved and **more** waste for each tonne of metal. |
| "A shared resource is always destroyed." | The tragedy of the commons describes **unmanaged** shared resources; quotas, permits and community rules can prevent it. |
| "Ecological footprint and carbon footprint are the same." | The carbon footprint counts emissions only; the ecological footprint converts all resource use and waste absorption into an area of land and water. |
| "Saltwater intrusion comes from sea-level rise alone." | Over-pumping of coastal aquifers is a direct, local cause, even without any rise in sea level. |

> 🔑 **AP Connection:** Unit 5 FRQs often ask you to **propose a solution and describe a drawback** of it. Prescribed burns (smoke, escape risk), selective cutting (higher cost, more roads), mine reclamation (expensive, incomplete) and quotas (hard to enforce) each have a standard drawback worth knowing.
      `
    },
    {
      id: 'apesagri5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Wells in a growing coastal city start producing salty water even though sea level has not changed. What is the most likely cause?',
            options: [
              'Pumping lowered the fresh groundwater, letting seawater move inland',
              'Road salt washed into the wells from paved roads during a wet winter',
              'Desalination plants returned brine directly into the city aquifer',
              'Evaporation from the reservoirs concentrated salts in the wells'
            ],
            correctAnswer: 0,
            explanation: 'When fresh groundwater is pumped faster than it recharges, its pressure falls and denser seawater pushes into the aquifer. This saltwater intrusion is a CED-listed impact of urbanization.'
          },
          {
            question: 'Which change would most directly shrink a family\'s carbon footprint without changing its land-based food footprint?',
            options: [
              'Switching home heating to electricity from wind',
              'Buying beef from a farm closer to the family\'s home',
              'Eating half as much meat and more beans and grains',
              'Planting a vegetable garden on unused lawn space'
            ],
            correctAnswer: 0,
            explanation: 'Wind-powered heating cuts greenhouse gas emissions from burning fuel, which is the carbon footprint, and leaves food choices unchanged. Each of the other choices changes how the family\'s food is produced.'
          },
          {
            question: 'Two copper mines each produce 10,000 t of copper a year. Mine X\'s ore is 1% copper; Mine Y\'s is 0.4% copper. How does Mine Y compare?',
            options: [
              'It processes 2.5 times as much ore and makes far more tailings',
              'It processes less ore because each tonne has less copper in it',
              'It processes the same ore because the copper output is equal',
              'It processes 0.4 times as much ore and makes less tailings'
            ],
            correctAnswer: 0,
            explanation: 'Mine X needs 10,000 ÷ 0.01 = 1,000,000 t of ore, and Mine Y needs 10,000 ÷ 0.004 = 2,500,000 t, which is 2.5 times as much. Nearly all of that extra rock becomes tailings.'
          }
        ]
      }
    },
    {
      id: 'apesagri5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Tragedy of the commons | Private benefit, shared cost → overuse; fixed by regulation, rights or community rules |
| Clearcutting | Cheap and efficient; erosion, warmer soil and streams, flooding, habitat and carbon loss |
| Sustainable forestry | Selective cutting, reforestation, certified and reused wood, IPM, prescribed burns |
| Mining | Overburden, tailings, slag; surface vs subsurface; reclamation; lower grade = more waste |
| Urbanization | Saltwater intrusion, resource depletion, $CO_{2}$, sprawl |
| Footprints | Ecological (all resources as area) vs carbon (emissions only) |
| Sustainability | Use without depleting for future generations; sustainable yield = annual regrowth |

**Next:** Part 6 puts the whole topic into AP free-response form, including an investigation design and a feedlot-versus-pasture calculation set.
      `
    }
  ]
};
