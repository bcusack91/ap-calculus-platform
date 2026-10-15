export const apesAgricultureLandPart2Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesagri2-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 2 of 7 — The Green Revolution, Tilling, Slash-and-Burn and Fertilizers**

---

| Section |
|---------|
| 📖 What the Green Revolution Actually Changed |
| Genetically Modified Crops |
| Tilling and Soil Organic Matter |
| Slash-and-Burn and Shifting Cultivation |
| Synthetic Versus Organic Fertilizer |
| Yield Calculations |

> 🔑 **Key Concept:** Part 1 named the farming methods. This part explains **how** the practices of the Green Revolution and conventional farming raise yields, and what each one costs the environment (CED 5.3 and 5.4). Every gain on this page comes with a trade-off, and the AP exam almost always asks for both sides.
      `
    },
    {
      id: 'apesagri2-green',
      type: 'text' as const,
      content: `
## 📖 What the Green Revolution Actually Changed

Beginning in the 1940s in Mexico and spreading through Asia in the 1960s and 1970s, plant breeders such as Norman Borlaug developed **high-yield varieties** of wheat and rice. These short-stemmed ("semi-dwarf") plants put more energy into grain and less into stalk, so they did not fall over under a heavy, well-fertilized head of grain. The new seeds only reached their potential as part of a package:

| Practice | How it raises yield | Environmental cost |
|---|---|---|
| **High-yield varieties** | More grain per plant; some varieties allow two harvests a year | Farmers plant only a few varieties, so **genetic diversity falls** |
| **Mechanization** (tractors, combines) | One farmer works far more land, quickly | **More fossil fuel use**; heavy machines compact soil |
| **Synthetic fertilizer** | Supplies the N, P and K the new varieties demand | Runoff causes eutrophication; making N fertilizer uses natural gas |
| **Irrigation** | Removes water as a limiting factor | Depletes aquifers and rivers; salinization and waterlogging |
| **Pesticides** | Cuts crop losses to insects, weeds and fungi | Resistance, harm to non-target species, water contamination |
| **Monoculture** | Large uniform fields suit machines and markets | Pests and diseases spread easily through identical plants |

### Why genetic uniformity is risky

When nearly every plant in a region shares the same genes, one pathogen can sweep through all of them. In 1970, **southern corn leaf blight** destroyed about 15 percent of the U.S. corn crop, because most hybrid corn of the time carried the same susceptible trait.

### The overall result

Food production grew much faster than farmland, so the Green Revolution fed a rapidly growing population and spared land that would otherwise have been cleared. But it made farming far more dependent on fossil fuels, fertilizer and irrigation water.

> 🔑 **AP Connection:** CED 5.3 lists mechanization, GMOs, fertilization, irrigation and pesticides as the Green Revolution's methods. A full-credit answer pairs one benefit (higher yield, efficiency, profit) with one specific environmental cost.
      `
    },
    {
      id: 'apesagri2-gmo',
      type: 'text' as const,
      content: `
## Genetically Modified Crops

A **genetically modified organism (GMO)** has had a gene inserted from another species to give it a new trait.

| GM trait | How it works | Benefit | Concern |
|---|---|---|---|
| **Bt insect resistance** | A gene from the soil bacterium *Bacillus thuringiensis* makes the plant produce a protein toxic to certain insect larvae | Fewer insecticide sprays | Pests that survive can evolve resistance to the Bt toxin |
| **Herbicide tolerance** | The crop survives a herbicide, such as glyphosate, that kills weeds around it | Easy weed control; works with no-till | Heavy herbicide use selects for herbicide-resistant "superweeds" |
| **Drought or salt tolerance** | Genes that help the plant conserve water | Yields on marginal land | Encourages farming of fragile land |

GM crops add to the genetic-uniformity problem: when a few engineered varieties dominate, the **genetic diversity of that crop** shrinks.
      `
    },
    {
      id: 'apesagri2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Semi-dwarf wheat varieties were central to the Green Revolution. Why did their short stems matter?',
            options: [
              'They supported heavy, fertilized grain heads without falling over',
              'They needed far less water, so irrigation became unnecessary',
              'They fixed their own nitrogen, so fertilizer was no longer needed',
              'They grew too low for insects to reach, so pesticides were dropped'
            ],
            correctAnswer: 0,
            explanation: 'Tall wheat given heavy fertilizer grew so much grain that the stalks bent and collapsed. Short, stiff stems kept the grain upright, so the varieties could make full use of fertilizer and irrigation.'
          },
          {
            question: 'Which environmental cost is most directly linked to the mechanization of farming?',
            options: [
              'Greater use of fossil fuels',
              'Faster evolution of resistant pests',
              'Salt buildup in irrigated soils',
              'Spread of herbicide-tolerant genes'
            ],
            correctAnswer: 0,
            explanation: 'Tractors, combines and other machines run on diesel and gasoline, so mechanization increases fossil fuel use and its emissions. Resistance comes from pesticides, and salt buildup comes from irrigation.'
          },
          {
            question: 'A region plants a single high-yield rice variety on nearly every farm. What is the greatest risk of this choice?',
            options: [
              'One disease could damage most of the crop at once',
              'The rice will slowly lose its high-yield trait over a decade',
              'Neighboring farms will be unable to sell their rice',
              'Soil nitrogen will rise until it poisons the young plants'
            ],
            correctAnswer: 0,
            explanation: 'Genetically identical plants share the same weaknesses, so a pathogen that can infect one can infect nearly all of them. Diverse varieties limit how far a single disease can spread.'
          }
        ]
      }
    },
    {
      id: 'apesagri2-tilling',
      type: 'text' as const,
      content: `
## Tilling and Soil Organic Matter

**Tilling** (plowing) turns over the top layer of soil before planting. Farmers till to bury weeds and crop residue, loosen the soil and prepare a smooth seedbed.

| What tilling does | Consequence |
|---|---|
| Leaves the surface bare until the crop grows | Wind and water **erosion** of topsoil (see Earth Systems Part 2 for erosion rates) |
| Breaks apart soil aggregates and adds oxygen | Decomposers break down **organic matter** faster, releasing $CO_{2}$ |
| Loss of organic matter | Lower water-holding capacity and **lower fertility** over time |
| Repeated passes of heavy equipment | A compacted layer (plow pan) that roots and water struggle to penetrate |

Because humus holds water and nutrients, a field that loses organic matter needs **more fertilizer and more irrigation** to keep the same yield. This is the link the exam often tests: tilling → organic matter loss → lower fertility.

## Slash-and-Burn and Shifting Cultivation

In **slash-and-burn** farming, common in tropical rainforests, farmers cut the vegetation, let it dry, and burn it. The ash fertilizes the soil for a short time.

1. **Burn:** nutrients locked in the plants are released as ash. Tropical rainforest soils are thin and nutrient-poor because most nutrients are stored in the living biomass.
2. **Crop for a few years:** yields are good at first.
3. **Decline:** heavy rain leaches the nutrients, and yields drop within two or three years.
4. **Move on:** farmers clear a new patch. The old plot is left fallow to regrow.

With small populations and long fallow periods (often 10 years or more), the forest can recover. When population pressure shortens the fallow, the soil never recovers.

| Impact of slash-and-burn | Explanation |
|---|---|
| Air pollution | Smoke and particulate matter from burning |
| More atmospheric $CO_{2}$ | Carbon stored in the trees is released, and fewer trees remain to absorb it |
| Loss of biodiversity | Habitat in the world's most species-rich biome is destroyed |
| Soil degradation | Leaching and erosion on exposed, nutrient-poor soil |
      `
    },
    {
      id: 'apesagri2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Consequence** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Burning cleared rainforest gives a field good yields for only two or three years, mainly because ___',
            options: ['heavy rain leaches the nutrients the ash released', 'the ash makes the soil too alkaline for any crops', 'the smoke blocks sunlight for several growing seasons', 'the trees regrow and shade out the crops in a year']
          },
          {
            label: 'Repeated deep plowing makes a field hold less water over the years, because tilling ___',
            options: ['speeds the decomposition of soil organic matter', 'adds clay particles to the soil surface', 'raises the water table under the field', 'buries the seeds too deeply to germinate']
          },
          {
            label: 'Farmers planting a herbicide-tolerant GM crop and spraying the same herbicide every year are most likely to see ___',
            options: ['weeds that have evolved resistance to that herbicide', 'crops that lose the inserted gene within a few seasons', 'a steady rise in the number of insect pest species', 'soil that can no longer absorb any rainfall at all']
          }
        ],
        correctAnswers: ['heavy rain leaches the nutrients the ash released', 'speeds the decomposition of soil organic matter', 'weeds that have evolved resistance to that herbicide'],
        hint1: 'Where do tropical rainforest nutrients live, and what does daily heavy rain do to them once they are in the soil?',
        hint2: 'Think about what extra oxygen does for decomposers.',
        hint3: 'Repeated use of one chemical is a strong selective pressure.',
        explanation: 'Ash nutrients are leached away by tropical rain. Tilling aerates the soil, so decomposers consume organic matter that once held water. Spraying one herbicide every year selects for the rare weeds able to survive it.'
      }
    },
    {
      id: 'apesagri2-fertilizer',
      type: 'text' as const,
      content: `
## Synthetic Versus Organic Fertilizer

Crops remove nitrogen (N), phosphorus (P) and potassium (K) from the soil at every harvest, so farmers replace them. (How synthetic nitrogen is made, and how to calculate N from a fertilizer grade, is covered in Biogeochemical Cycles Part 3.)

| | **Synthetic (inorganic) fertilizer** | **Organic fertilizer** (manure, compost, crop residue) |
|---|---|---|
| Nutrient form | Soluble N, P and K, immediately available to plants | Nutrients bound in organic matter, released slowly as it decomposes |
| Speed | Works within days | Works over a season or more |
| Soil organic matter | Adds none | **Adds humus**, improving water retention and soil structure |
| Runoff risk | High: soluble nutrients wash off after heavy rain or overapplication | Lower, though manure can still pollute if overapplied |
| Other costs | Fossil fuel energy to make and ship; phosphate mining | Bulky to transport; may carry pathogens if not composted |

**Overapplication** of either type, or application right before heavy rain, sends nitrogen and phosphorus into streams. That runoff drives eutrophication, and nitrate that leaches into groundwater can contaminate wells.

> 🔑 **AP Connection:** When asked for a disadvantage of synthetic fertilizer, name the **specific pathway**: "Excess soluble nitrate runs off into a river, causing an algal bloom whose decomposition lowers dissolved oxygen." A bare "it pollutes" earns no credit.

## Yield Calculations

### Worked Example 1: Percent Change in Yield (illustrative data)

A district's wheat yield rose from **1.2 t/ha** before the Green Revolution to **3.0 t/ha** after it.

$$\\text{Percent change} = \\frac{3.0 - 1.2}{1.2} \\times 100 = \\frac{1.8}{1.2} \\times 100 = 150\\%$$

### Worked Example 2: Converting Units (illustrative data)

Convert 3.0 t/ha to grams per square meter. Use 1 t = 1,000,000 g and 1 ha = 10,000 $m^{2}$:

$$3.0\\ \\frac{\\text{t}}{\\text{ha}} \\times \\frac{1{,}000{,}000\\ \\text{g}}{1\\ \\text{t}} \\times \\frac{1\\ \\text{ha}}{10{,}000\\ m^{2}} = 300\\ \\text{g}/m^{2}$$

### Worked Example 3: People Fed per Hectare (illustrative data)

Suppose one person needs about **200 kg of grain per year**. How many people can one hectare feed before and after?

- Before: $1.2\\ \\text{t} = 1{,}200\\ \\text{kg}$, and $1{,}200 \\div 200 = 6$ people
- After: $3{,}000 \\div 200 = 15$ people

To feed the same 15 people at the old yield would take $15 \\times 200 \\div 1{,}200 = 2.5$ ha. Higher yields **spare land**: 1.5 extra hectares stay forest or grassland.
      `
    },
    {
      id: 'apesagri2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A rice farm's yield rose from 2.5 t/ha to 4.0 t/ha. What is the percent increase?

2) What is 4.0 t/ha expressed in grams per square meter?

3) If one person needs 200 kg of rice per year, how many people can a 3-hectare farm feed at 4.0 t/ha?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '400', '60'],
        hint1: '(4.0 − 2.5) ÷ 2.5 × 100.',
        hint2: 'Multiply by 1,000,000 g per tonne, then divide by 10,000 square meters per hectare.',
        hint3: 'Total harvest is 3 ha × 4.0 t/ha = 12 t = 12,000 kg. Divide by 200 kg per person.',
        explanation: '1) 1.5 ÷ 2.5 × 100 = 60 percent. 2) 4.0 × 1,000,000 ÷ 10,000 = 400 g per square meter. 3) 12,000 kg ÷ 200 kg = 60 people.'
      }
    },
    {
      id: 'apesagri2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer switches from manure to synthetic fertilizer and applies it the day before a forecast of heavy rain. Which outcome is most likely?',
            options: [
              'Soluble nitrate washes into a nearby stream and feeds an algal bloom',
              'Soil organic matter rises because synthetic fertilizer adds humus',
              'The crop absorbs all the nitrogen before any rain can reach it',
              'Nitrogen stays bound in the soil until decomposers slowly release it'
            ],
            correctAnswer: 0,
            explanation: 'Synthetic nitrogen is soluble and immediately mobile, so heavy rain carries it off as runoff, where it fuels algal growth. Slow release from decomposers describes manure and compost, and synthetic fertilizer adds no humus.'
          },
          {
            question: 'Shifting cultivation was sustainable for centuries in some rainforests but is not sustainable in many of them today. What best explains the change?',
            options: [
              'Shorter fallow periods leave too little time for the forest to recover',
              'Modern crops need far less nutrients than the traditional crops once did',
              'Rainforest soils today are deeper and richer than they were in the past',
              'Farmers today burn the vegetation while it is still too wet to ignite'
            ],
            correctAnswer: 0,
            explanation: 'Population pressure forces farmers to return to plots before the forest and its nutrient store have regrown, so each cycle starts from poorer soil. Rainforest soils remain thin and nutrient-poor, which is why the fallow matters.'
          },
          {
            question: 'Which statement best describes the overall land-use effect of the Green Revolution?',
            options: [
              'Higher yields let food output rise far faster than the area farmed',
              'Total farmland roughly tripled to match the growth in food output',
              'Farmland shrank because mechanized farms needed less total food',
              'Food output stayed flat while the area of cropland fell by half'
            ],
            correctAnswer: 0,
            explanation: 'Because each hectare produced much more, food production grew far faster than cropland, which spared land from clearing. The cost was greater dependence on fertilizer, irrigation, pesticides and fossil fuel.'
          }
        ]
      }
    },
    {
      id: 'apesagri2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Green Revolution | High-yield varieties + mechanization + fertilizer + irrigation + pesticides; big yield gains |
| Trade-offs | Fossil fuel dependence, lower genetic diversity, runoff, aquifer depletion, resistance |
| GM crops | Bt insect resistance and herbicide tolerance; resistance evolves in pests and weeds |
| Tilling | Erosion, faster loss of organic matter, lower fertility, compaction |
| Slash-and-burn | Ash nutrients leach within a few years; air pollution, $CO_{2}$, biodiversity loss |
| Synthetic vs organic fertilizer | Fast and soluble vs slow and humus-building; overapplication of either pollutes water |
| Yield math | Percent change; 1 t/ha = 100 g/$m^{2}$; people fed = harvest ÷ need per person |

**Next:** Part 3 turns from crops to animals: feedlots versus grazing, overfishing and aquaculture.
      `
    }
  ]
};
