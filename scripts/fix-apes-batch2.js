const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Biodiversity ───
write('apes-biodiversity-part1.ts', `export const apesBiodiversityPart1Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbd1-intro',
      type: 'text' as const,
      content: \`
# 🦜 Biodiversity

**Part 1 of 7 — Types, Importance, and Measurement**

---

## Three Types of Biodiversity

| Type | Definition | Example |
|------|-----------|---------|
| **Genetic diversity** | Variety of genes within a species | Diverse coat colors in wild cat populations |
| **Species diversity** | Number and variety of species in an area | 300 bird species in a tropical forest vs. 50 in a temperate forest |
| **Ecosystem diversity** | Variety of habitats, communities, and ecological processes | Coral reefs, wetlands, grasslands, and forests in one region |

---

## Why Biodiversity Matters

| Category | Ecosystem Service | Example |
|----------|------------------|---------|
| **Provisioning** | Food, medicine, raw materials | 25% of pharmaceuticals derived from plants |
| **Regulating** | Climate regulation, water purification, pollination | Wetlands filter pollutants; bees pollinate 75% of food crops |
| **Supporting** | Nutrient cycling, soil formation, primary production | Decomposers recycle nutrients; forests produce oxygen |
| **Cultural** | Recreation, aesthetic, spiritual value | National parks, ecotourism revenue |

> 🔑 **Key Concept:** Higher biodiversity = greater ecosystem resilience. Diverse ecosystems can better withstand and recover from disturbances.

---

## Measuring Species Diversity

| Metric | What It Measures |
|--------|-----------------|
| **Species richness** | Total number of different species in an area |
| **Species evenness** | How equally individuals are distributed among species |
| **Shannon diversity index (H)** | Combines richness and evenness into one value; higher H = more diverse |
      \`
    },
    {
      id: 'apesbd1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A forest with 20 tree species where each species makes up about 5% of the total has HIGH:',
            options: [
              'Species richness only',
              'Species evenness only',
              'Both species richness and species evenness',
              'Genetic diversity only'
            ],
            correctAnswer: 2,
            explanation: 'With 20 species (high richness) each making up ~5% of the population (high evenness), this forest has both components of high species diversity.'
          },
          {
            question: 'Wetlands filtering pollutants from water before it reaches rivers is an example of:',
            options: [
              'A provisioning ecosystem service',
              'A regulating ecosystem service',
              'A cultural ecosystem service',
              'Genetic diversity'
            ],
            correctAnswer: 1,
            explanation: 'Water purification by wetlands is a regulating service — the ecosystem naturally regulates water quality by filtering sediment, nutrients, and pollutants.'
          }
        ]
      }
    },
    {
      id: 'apesbd1-content',
      type: 'text' as const,
      content: \`
## Hotspots and Global Patterns

### Biodiversity Hotspots
- Areas with **exceptionally high species richness** and **high rates of habitat loss**
- Must have at least **1,500 endemic plant species** and have lost **70%+ of original habitat**
- 36 identified hotspots cover just 2.4% of land but contain 50%+ of all plant species
- Examples: Madagascar, Atlantic Forest (Brazil), Sundaland (Southeast Asia)

### Latitude and Biodiversity
| Pattern | Explanation |
|---------|-----------|
| **Higher biodiversity near equator** | More sunlight, warmth, and rainfall year-round |
| **Lower biodiversity at poles** | Extreme cold, low light, short growing seasons |
| **Island biogeography** | Larger islands closer to mainland = more species |

### Island Biogeography Theory (MacArthur and Wilson)
- **Immigration rate** decreases with distance from mainland
- **Extinction rate** decreases with island size (larger island = more resources)
- Equilibrium species number: where immigration rate = extinction rate
      \`
    },
    {
      id: 'apesbd1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The three types of biodiversity are genetic, species, and _______ diversity.

2) Biodiversity hotspots must have at least 1,500 endemic plant species and have lost at least _______% of original habitat.

3) According to island biogeography, larger islands have _______ extinction rates than small islands.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['ecosystem', '70', 'lower'],
        hint1: 'The variety of habitats and ecological processes.',
        hint2: 'More than two-thirds of the original habitat.',
        hint3: 'Larger islands have more resources to support species.',
        explanation: 'Three types: genetic, species, ecosystem diversity. Hotspots: lost 70%+ habitat. Larger islands = lower extinction rates (more resources and habitat).'
      }
    },
    {
      id: 'apesbd1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Service** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Bees pollinating food crops is a ___ ecosystem service',
            options: ['Regulating', 'Provisioning', 'Cultural', 'Supporting']
          },
          {
            label: 'Harvesting timber from a forest is a ___ ecosystem service',
            options: ['Provisioning', 'Regulating', 'Cultural', 'Supporting']
          },
          {
            label: 'A community with 100 individuals: 97 of Species A and 1 each of Species B, C, D has low ___',
            options: ['Species evenness', 'Species richness', 'Genetic diversity', 'Ecosystem diversity']
          }
        ],
        correctAnswers: ['Regulating', 'Provisioning', 'Species evenness'],
        hint1: 'Pollination regulates food production.',
        hint2: 'Direct provision of raw materials.',
        hint3: 'One species dominates while three are rare.',
        explanation: 'Pollination = regulating. Timber = provisioning. 97% one species = very low evenness despite having 4 species.'
      }
    },
    {
      id: 'apesbd1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Biodiversity

- Shannon diversity index (H) questions: higher H = more diverse. You do not need to calculate H, but know what it represents
- Know the four categories of ecosystem services — the AP exam frequently asks you to classify examples
- **Island biogeography** applies to habitat fragments too (a forest patch surrounded by farmland acts like an island)
- Biodiversity is highest at the equator and lowest at the poles — know WHY (climate stability, energy input)
      \`
    },
    {
      id: 'apesbd1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A fragmented forest surrounded by agricultural fields functions ecologically similar to:',
            options: [
              'A continent with unlimited resources',
              'An island, where smaller and more isolated patches have fewer species',
              'A biodiversity hotspot with high species richness',
              'A corridor connecting two large habitats'
            ],
            correctAnswer: 1,
            explanation: 'Island biogeography theory applies to habitat fragments: smaller, more isolated patches support fewer species, just as small, distant islands have lower species diversity.'
          },
          {
            question: 'If a single crop disease wiped out all the bananas in commercial plantations (which are genetically identical clones), this would illustrate the danger of low:',
            options: [
              'Ecosystem diversity',
              'Species richness',
              'Genetic diversity within a species',
              'Species evenness'
            ],
            correctAnswer: 2,
            explanation: 'Clonal monocultures have virtually no genetic diversity. If one individual is susceptible to a disease, all are susceptible. Genetic diversity provides insurance against such threats.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Biodiversity Conservation ───
write('apes-biodiversity-conservation-part1.ts', `export const apesBiodiversityConservationPart1Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apescon1-intro',
      type: 'text' as const,
      content: \`
# 🛡️ Biodiversity Conservation

**Part 1 of 7 — Threats, Legislation, and Conservation Strategies**

---

## Major Threats to Biodiversity (HIPPCO)

| Threat | Description | Example |
|--------|-----------|---------|
| **H** — Habitat loss | Destruction, fragmentation, degradation | Deforestation for agriculture |
| **I** — Invasive species | Non-native species outcompeting natives | Burmese pythons in Florida Everglades |
| **P** — Population growth | More humans = more resource demand | Urban sprawl converting wildlife habitat |
| **P** — Pollution | Chemical and physical degradation | Pesticides thinning raptor eggshells |
| **C** — Climate change | Shifting temperatures and weather | Coral bleaching from ocean warming |
| **O** — Overexploitation | Overharvesting beyond replacement | Overfishing of bluefin tuna |

> 🔑 **#1 threat:** Habitat loss and fragmentation is the leading cause of species decline worldwide.

---

## Endangered Species Legislation

| Law | Year | Key Provisions |
|-----|------|---------------|
| **Endangered Species Act (ESA)** | 1973 | Protects listed threatened/endangered species; prohibits "take"; requires habitat protection |
| **CITES** | 1975 | Intl treaty regulating trade of endangered species and products (ivory, pelts) |
| **Lacey Act** | 1900 | Prohibits trade in illegally captured wildlife |
| **Marine Mammal Protection Act** | 1972 | Protects whales, dolphins, seals from harassment or killing |
      \`
    },
    {
      id: 'apescon1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The single greatest threat to global biodiversity is:',
            options: [
              'Climate change',
              'Overhunting',
              'Habitat loss and fragmentation',
              'Invasive species'
            ],
            correctAnswer: 2,
            explanation: 'While all HIPPCO factors matter, habitat loss (through deforestation, agriculture, urbanization) is the #1 cause of species decline. Fragmentation isolates populations, reducing genetic diversity.'
          },
          {
            question: 'CITES is an international treaty that:',
            options: [
              'Sets carbon emission limits for countries',
              'Regulates international trade of endangered species',
              'Establishes national parks in developing countries',
              'Funds renewable energy projects'
            ],
            correctAnswer: 1,
            explanation: 'CITES (Convention on International Trade in Endangered Species) regulates cross-border trade of threatened species and their products to prevent overexploitation.'
          }
        ]
      }
    },
    {
      id: 'apescon1-content',
      type: 'text' as const,
      content: \`
## Conservation Strategies

| Strategy | Description | Example |
|----------|-----------|---------|
| **Protected areas** | National parks, wildlife refuges, marine reserves | Yellowstone NP; Great Barrier Reef Marine Park |
| **Habitat corridors** | Strips connecting fragmented habitats | Wildlife overpasses; riparian buffers |
| **Captive breeding** | Breeding endangered species in captivity for release | California condor program |
| **Seed banks** | Storing seeds of diverse plant species | Svalbard Global Seed Vault (Norway) |
| **Bioremediation** | Using organisms to clean up contaminated sites | Bacteria degrading oil spills |
| **Ecotourism** | Tourism that funds conservation and local communities | Gorilla trekking in Rwanda |

### Habitat Corridors
- Connect isolated habitat patches so species can migrate and maintain genetic diversity
- Reduce edge effects (drying, wind, invasive species at habitat boundaries)
- Example: Yellowstone to Yukon corridor for grizzly bear and wolf migration

### Invasive Species Management
| Approach | Method |
|----------|--------|
| **Prevention** | Inspection and quarantine at borders; ballast water treatment |
| **Early detection** | Monitoring programs to catch invaders early |
| **Control** | Mechanical removal, targeted herbicides/pesticides, biological control |
| **Biological control** | Introducing natural predators (risky — can become invasive themselves) |
      \`
    },
    {
      id: 'apescon1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The acronym HIPPCO stands for Habitat loss, Invasive species, Population growth, Pollution, Climate change, and _______.

2) The US law that protects threatened and endangered species by prohibiting "take" is the _______ Species Act.

3) Strips of habitat connecting isolated patches to allow wildlife movement are called habitat _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Overexploitation', 'Endangered', 'corridors'],
        hint1: 'Harvesting more than the population can replace.',
        hint2: 'Passed in 1973.',
        hint3: 'They create a path between habitat fragments.',
        explanation: 'HIPPCO: O = Overexploitation. ESA = Endangered Species Act (1973). Corridors connect fragmented habitats.'
      }
    },
    {
      id: 'apescon1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Strategy** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Breeding California condors in zoos and releasing them into the wild is ___',
            options: ['Captive breeding and reintroduction', 'Biological control', 'Bioremediation', 'Habitat restoration']
          },
          {
            label: 'Burmese pythons in the Florida Everglades eating native wildlife represents the ___  threat in HIPPCO',
            options: ['Invasive species (I)', 'Habitat loss (H)', 'Overexploitation (O)', 'Pollution (P)']
          },
          {
            label: 'The Svalbard Global Seed Vault stores seeds to preserve ___',
            options: ['Genetic diversity of crop and wild plants', 'Endangered animal species', 'Marine biodiversity', 'Soil microorganisms']
          }
        ],
        correctAnswers: ['Captive breeding and reintroduction', 'Invasive species (I)', 'Genetic diversity of crop and wild plants'],
        hint1: 'Raising endangered species to boost wild populations.',
        hint2: 'Non-native predator in a new ecosystem.',
        hint3: 'Seeds contain the genetic information of plants.',
        explanation: 'Condor = captive breeding. Burmese pythons = invasive species. Seed vault = preserving genetic diversity of plants.'
      }
    },
    {
      id: 'apescon1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Conservation

- Know HIPPCO and be able to identify which threat applies to a scenario
- **ESA** is the most commonly tested legislation — know what "take" means (harass, harm, pursue, wound, kill)
- Habitat corridors and edge effects are frequently tested concepts
- Understand trade-offs: captive breeding is expensive and may not address root cause (habitat loss)
- Biological control can backfire — the introduced predator can become invasive itself (cane toads in Australia)
      \`
    },
    {
      id: 'apescon1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A highway divides a forest, isolating two populations of deer. The BEST long-term solution to maintain genetic diversity is:',
            options: [
              'Hunting deer on one side to reduce competition',
              'Building a wildlife overpass or underpass to reconnect the habitat',
              'Introducing deer from another continent',
              'Paving over the remaining forest for development'
            ],
            correctAnswer: 1,
            explanation: 'A wildlife crossing (overpass/underpass) serves as a habitat corridor, allowing gene flow between the two isolated populations and maintaining genetic diversity.'
          },
          {
            question: 'DDT, a pesticide, caused bald eagle populations to decline because it thinned their eggshells through bioaccumulation. This threat falls under which HIPPCO category?',
            options: [
              'Habitat loss',
              'Invasive species',
              'Pollution',
              'Overexploitation'
            ],
            correctAnswer: 2,
            explanation: 'DDT is a chemical pollutant that bioaccumulated in the food chain. It was banned in the US in 1972, and bald eagle populations have since recovered — a conservation success story.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Human Population ───
write('apes-human-population-part1.ts', `export const apesHumanPopulationPart1Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshp1-intro',
      type: 'text' as const,
      content: \`
# 👥 Human Population Dynamics

**Part 1 of 7 — Growth, Demographics, and the Demographic Transition**

---

## Population Growth

| Metric | Definition | Formula/Value |
|--------|-----------|--------------|
| **Global population** | Current world population | ~8 billion (2024) |
| **Growth rate** | Annual % increase | ~1.0% (declining from peak of 2.1% in 1968) |
| **Doubling time** | Years to double at current rate | Rule of 70: 70 / growth rate (%) |
| **CBR** | Crude birth rate (births per 1,000 people per year) | Varies: ~8 (Japan) to ~40+ (Niger) |
| **CDR** | Crude death rate (deaths per 1,000 per year) | Varies: ~3 (Qatar) to ~15+ (Sierra Leone) |
| **NIR** | Natural increase rate | NIR = CBR - CDR |

> 🔑 **Rule of 70:** Doubling time = 70 / growth rate. If a country grows at 2%/year, it doubles in 35 years.

---

## Demographic Transition Model

| Stage | Birth Rate | Death Rate | Population Growth | Description |
|-------|-----------|-----------|------------------|-----------|
| **1: Pre-industrial** | High | High | Low/stable | Subsistence farming; high infant mortality |
| **2: Transitioning** | High | Declining | Rapid increase | Better sanitation, medicine; births still high |
| **3: Industrial** | Declining | Low | Slowing growth | Education, urbanization, contraception access |
| **4: Post-industrial** | Low | Low | Low/stable | Developed nations; birth rate ~ death rate |
| **5: Decline** | Very low | Low | Negative growth | Below-replacement fertility (Japan, Germany) |
      \`
    },
    {
      id: 'apeshp1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A country has a crude birth rate of 35 and a crude death rate of 10. Using the Rule of 70, what is the approximate doubling time?',
            options: [
              '2 years',
              '28 years',
              '35 years',
              '70 years'
            ],
            correctAnswer: 1,
            explanation: 'Growth rate = (CBR - CDR) / 10 = (35 - 10) / 10 = 2.5%. Doubling time = 70 / 2.5 = 28 years. This rapid doubling is typical of Stage 2 countries.'
          },
          {
            question: 'Which stage of the demographic transition has the FASTEST population growth?',
            options: [
              'Stage 1 (pre-industrial)',
              'Stage 2 (transitioning)',
              'Stage 3 (industrial)',
              'Stage 4 (post-industrial)'
            ],
            correctAnswer: 1,
            explanation: 'Stage 2 has the fastest growth because death rates decline (better medicine, sanitation) while birth rates remain high, creating a large gap between births and deaths.'
          }
        ]
      }
    },
    {
      id: 'apeshp1-content',
      type: 'text' as const,
      content: \`
## Age Structure Diagrams

| Shape | Meaning | Example Countries |
|-------|---------|------------------|
| **Expansive (wide base)** | High birth rate; rapid growth | Nigeria, Ethiopia |
| **Stationary (column)** | Birth rate = death rate; stable | United States, France |
| **Constrictive (narrow base)** | Below-replacement fertility; declining | Japan, Germany, Italy |

### Total Fertility Rate (TFR)
- Average number of children per woman
- **Replacement-level fertility:** ~2.1 children per woman (needed to maintain population)
- Sub-Saharan Africa: TFR ~4.5
- Europe: TFR ~1.5 (below replacement)

## Factors Affecting Birth Rates

| Factor | Effect on Birth Rate |
|--------|---------------------|
| **Education (especially women)** | Decreases — most powerful predictor |
| **Access to contraception** | Decreases |
| **Urbanization** | Decreases (children cost more in cities) |
| **Cultural/religious norms** | Can increase or decrease |
| **Government policies** | Can promote or discourage births |
| **Infant mortality** | High infant mortality → higher birth rates |
      \`
    },
    {
      id: 'apeshp1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The Rule of 70 states that doubling time equals 70 divided by the _______ rate.

2) Replacement-level fertility is approximately _______ children per woman.

3) The most powerful factor in reducing birth rates is _______ of women.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['growth', '2.1', 'education'],
        hint1: 'The annual percentage increase.',
        hint2: 'Just above 2 to account for infant mortality.',
        hint3: 'Knowledge is power — this demographic factor is most predictive.',
        explanation: 'Rule of 70: doubling time = 70/growth rate. Replacement fertility = ~2.1. Education of women is the strongest predictor of declining birth rates.'
      }
    },
    {
      id: 'apeshp1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Scenario** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Japan has a TFR of 1.3 and an aging population. Its age structure diagram is ___',
            options: ['Constrictive (narrow base)', 'Expansive (wide base)', 'Stationary (column)', 'Irregular']
          },
          {
            label: 'A country with high birth rates AND high death rates and slow growth is in Stage ___',
            options: ['Stage 1 (pre-industrial)', 'Stage 2 (transitioning)', 'Stage 3 (industrial)', 'Stage 4 (post-industrial)']
          },
          {
            label: 'A country growing at 1% per year will double its population in approximately ___ years',
            options: ['70 years', '35 years', '100 years', '10 years']
          }
        ],
        correctAnswers: ['Constrictive (narrow base)', 'Stage 1 (pre-industrial)', '70 years'],
        hint1: 'Below-replacement fertility = fewer young people.',
        hint2: 'Both rates are high, so growth is minimal.',
        hint3: '70 / 1 = ?',
        explanation: 'Japan = constrictive (TFR below 2.1). High birth + high death = Stage 1. 70/1 = 70 years doubling time.'
      }
    },
    {
      id: 'apeshp1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Human Population

- **Rule of 70 calculations** appear frequently — practice dividing 70 by various growth rates
- Know how to read and interpret age structure diagrams — what shape means what
- The demographic transition model is one of the most tested concepts in APES
- **Stage 2 = fastest growth** (death rates drop but birth rates remain high)
- Know that educating women is the single most effective way to reduce fertility rates
- Understand that some countries (Japan, Germany) face challenges from declining populations (aging workforce, pension funding)
      \`
    },
    {
      id: 'apeshp1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A developing country invests heavily in rural health clinics and childhood vaccinations. In the short term, this will MOST likely cause the country to move from:',
            options: [
              'Stage 1 to Stage 2 (death rates drop while birth rates stay high)',
              'Stage 2 to Stage 4 (immediate stabilization)',
              'Stage 4 to Stage 5 (population decline)',
              'Stage 3 to Stage 1 (regression)'
            ],
            correctAnswer: 0,
            explanation: 'Improving healthcare reduces death rates (especially infant mortality) while birth rates remain high in the short term, causing rapid population growth characteristic of Stage 2.'
          },
          {
            question: 'Two countries each have 10 million people. Country A grows at 1% per year and Country B at 3% per year. After 70 years, Country B will have approximately:',
            options: [
              'The same population as Country A',
              'Twice the population of Country A',
              'Four times the population of Country A',
              'Eight times the population of Country A'
            ],
            correctAnswer: 2,
            explanation: 'Country A: doubles once in 70 years (70/1) = 20M. Country B: doubles every ~23 years (70/3), so 3 doublings in 70 years = 10M → 20M → 40M → 80M. 80M/20M = 4 times as large.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Agriculture & Land Use ───
write('apes-agriculture-land-part1.ts', `export const apesAgricultureLandPart1Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesal1-intro',
      type: 'text' as const,
      content: \`
# 🌾 Agriculture & Land Use

**Part 1 of 7 — Farming Practices and Environmental Impacts**

---

## Agricultural Revolution Timeline

| Revolution | Period | Key Changes |
|-----------|--------|------------|
| **First Agricultural Revolution** | ~10,000 years ago | Shift from hunter-gatherer to farming; domestication of plants and animals |
| **Second (Industrial)** | 1700s-1800s | Mechanization; seed drill, crop rotation, selective breeding |
| **Green Revolution** | 1960s-1970s | High-yield crop varieties, synthetic fertilizers, pesticides, irrigation |

---

## Farming Methods

| Method | Description | Environmental Impact |
|--------|-----------|---------------------|
| **Monoculture** | Growing one crop over large area | Depletes soil nutrients; vulnerable to pests; requires more pesticides |
| **Polyculture** | Growing multiple crops together | Better pest control; maintains soil health; more resilient |
| **No-till farming** | Seeds planted without plowing | Reduces soil erosion; preserves soil structure |
| **Contour plowing** | Plowing along hillside contours | Reduces water runoff and soil erosion |
| **Terracing** | Cutting flat steps into hillsides | Prevents erosion on steep slopes |
| **Crop rotation** | Alternating crops seasonally | Restores soil nutrients; breaks pest cycles |
| **Cover crops** | Planting non-harvest crops between seasons | Prevents erosion; adds nitrogen (legumes) |
| **Integrated Pest Management (IPM)** | Combines biological, cultural, chemical controls | Reduces pesticide use; targets pests precisely |
      \`
    },
    {
      id: 'apesal1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Green Revolution increased crop yields primarily through:',
            options: [
              'Organic farming methods and traditional seed saving',
              'High-yield crop varieties, synthetic fertilizers, and pesticides',
              'Genetically modified organisms only',
              'Switching from agriculture to hunting and gathering'
            ],
            correctAnswer: 1,
            explanation: 'The Green Revolution (1960s-70s) used high-yield varieties (especially wheat and rice), synthetic fertilizers, pesticides, and irrigation to dramatically increase food production in developing nations.'
          },
          {
            question: 'Which soil conservation method involves plowing along the natural contour of a hillside rather than up and down?',
            options: [
              'Terracing',
              'Contour plowing',
              'No-till farming',
              'Strip cropping'
            ],
            correctAnswer: 1,
            explanation: 'Contour plowing follows the natural curves of the terrain, creating ridges that slow water runoff and reduce soil erosion on slopes.'
          }
        ]
      }
    },
    {
      id: 'apesal1-content',
      type: 'text' as const,
      content: \`
## Environmental Impacts of Agriculture

| Impact | Cause | Consequence |
|--------|-------|------------|
| **Soil erosion** | Plowing, deforestation, overgrazing | Loss of topsoil; sedimentation in waterways |
| **Salinization** | Irrigation in arid areas | Salt buildup makes soil infertile |
| **Waterlogging** | Over-irrigation | Roots suffocate; soil becomes compacted |
| **Desertification** | Overgrazing, deforestation, poor farming | Fertile land becomes desert |
| **Eutrophication** | Fertilizer runoff (N and P) | Algal blooms; dead zones in water |
| **Pesticide resistance** | Overuse of pesticides | Pests evolve resistance; requires more chemicals |
| **Bioaccumulation** | Persistent pesticides (DDT) | Toxins concentrate up the food chain |

## Genetically Modified Organisms (GMOs)

| Pros | Cons |
|------|------|
| Higher yields | Potential biodiversity loss |
| Pest resistance (Bt crops) | Gene flow to wild relatives |
| Drought tolerance | Corporate seed dependency |
| Reduced pesticide use for some crops | Consumer health concerns (debated) |
| Nutrient enhancement (Golden Rice) | May encourage monoculture |
      \`
    },
    {
      id: 'apesal1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Growing a single crop over a large area is called _______, which depletes soil nutrients and increases pest vulnerability.

2) Salt buildup in soil from irrigation in arid climates is called _______.

3) The practice that combines biological, cultural, and limited chemical controls to manage pests is called _______ Pest Management.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['monoculture', 'salinization', 'Integrated'],
        hint1: 'Mono = one type of crop.',
        hint2: 'Water evaporates, leaving salt behind.',
        hint3: 'IPM stands for...',
        explanation: 'Monoculture = one crop. Salinization = salt buildup from irrigation. IPM = Integrated Pest Management.'
      }
    },
    {
      id: 'apesal1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Practice** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A farmer plants clover (a legume) between corn seasons to restore nitrogen. This is ___',
            options: ['Using cover crops and crop rotation', 'Monoculture farming', 'Slash-and-burn agriculture', 'Hydroponics']
          },
          {
            label: 'DDT concentrating in bald eagle tissues at higher levels than in their fish prey is ___',
            options: ['Bioaccumulation/biomagnification', 'Eutrophication', 'Salinization', 'Desertification']
          },
          {
            label: 'Cutting flat terraces into steep hillsides to farm without erosion is ___',
            options: ['Terracing', 'Contour plowing', 'No-till farming', 'Strip mining']
          }
        ],
        correctAnswers: ['Using cover crops and crop rotation', 'Bioaccumulation/biomagnification', 'Terracing'],
        hint1: 'Legumes fix nitrogen; planting between seasons.',
        hint2: 'Toxins concentrate as you move up trophic levels.',
        hint3: 'Creating flat steps on slopes.',
        explanation: 'Clover between corn = cover crop/rotation. DDT in eagles = bioaccumulation. Flat steps on hillsides = terracing.'
      }
    },
    {
      id: 'apesal1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Agriculture

- Know specific soil conservation practices and what problem each one addresses
- **Green Revolution trade-offs** are commonly tested: increased yield but increased environmental impact
- Understand IPM as the preferred approach over heavy pesticide use
- Salinization and waterlogging are caused by IRRIGATION (a common FRQ topic)
- Bioaccumulation vs biomagnification: bioaccumulation = within one organism; biomagnification = increasing concentration up food chain
      \`
    },
    {
      id: 'apesal1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A region in sub-Saharan Africa experiences overgrazing and drought. Over time, the grassland turns into barren, unproductive land. This process is called:',
            options: [
              'Eutrophication',
              'Salinization',
              'Desertification',
              'Bioaccumulation'
            ],
            correctAnswer: 2,
            explanation: 'Desertification is the degradation of drylands into desert-like conditions, caused by overgrazing, deforestation, and poor agricultural practices combined with drought.'
          },
          {
            question: 'A farmer practicing IPM would FIRST:',
            options: [
              'Apply broad-spectrum pesticides across all fields',
              'Monitor pest populations and use biological controls before resorting to targeted pesticide application',
              'Plant genetically identical monoculture crops',
              'Eliminate all insects from the farm'
            ],
            correctAnswer: 1,
            explanation: 'IPM prioritizes monitoring and prevention: biological controls (natural predators), habitat manipulation, and resistant varieties before using targeted (not broad-spectrum) pesticides as a last resort.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Water Resources ───
write('apes-water-resources-part1.ts', `export const apesWaterResourcesPart1Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswr1-intro',
      type: 'text' as const,
      content: \`
# 💧 Water Resources

**Part 1 of 7 — Freshwater Supply, Use, and Pollution**

---

## Global Water Distribution

| Water Source | Percentage of Total | Availability |
|-------------|-------------------|-------------|
| **Oceans (saltwater)** | 97.5% | Not directly usable |
| **Ice caps/glaciers** | 1.7% | Locked up; melting due to climate change |
| **Groundwater** | 0.76% | Major freshwater source; aquifers |
| **Surface water (lakes, rivers)** | 0.01% | Most accessible; heavily used |
| **Atmosphere/soil moisture** | 0.04% | Part of water cycle |

> 🔑 **Only ~0.77% of all water on Earth is accessible fresh water** (groundwater + surface water). This makes freshwater conservation critical.

---

## Water Use by Sector

| Sector | Global Water Use | Examples |
|--------|-----------------|---------|
| **Agriculture** | ~70% | Irrigation of crops, livestock |
| **Industry** | ~20% | Manufacturing, cooling, mining |
| **Domestic** | ~10% | Drinking, sanitation, cooking |

## Key Groundwater Terms

| Term | Definition |
|------|-----------|
| **Aquifer** | Underground layer of permeable rock holding water |
| **Water table** | Top surface of the saturated zone |
| **Recharge zone** | Area where water infiltrates to replenish aquifer |
| **Cone of depression** | Lowering of water table around a pumping well |
| **Ogallala Aquifer** | Largest aquifer in US (Great Plains); being depleted faster than recharged |
      \`
    },
    {
      id: 'apeswr1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which sector uses the MOST fresh water globally?',
            options: [
              'Domestic (household use)',
              'Industrial (factories and power)',
              'Agriculture (irrigation and livestock)',
              'Transportation'
            ],
            correctAnswer: 2,
            explanation: 'Agriculture uses approximately 70% of all freshwater globally, primarily for irrigation. This is why water-efficient irrigation techniques are crucial for sustainability.'
          },
          {
            question: 'The Ogallala Aquifer is a concern because:',
            options: [
              'It contains saltwater, not freshwater',
              'It is being depleted faster than it can recharge',
              'It causes flooding in the Great Plains',
              'It is too deep to access with modern technology'
            ],
            correctAnswer: 1,
            explanation: 'The Ogallala Aquifer (beneath the US Great Plains) is being pumped for irrigation much faster than rainfall can recharge it. At current rates, significant portions could be depleted within decades.'
          }
        ]
      }
    },
    {
      id: 'apeswr1-content',
      type: 'text' as const,
      content: \`
## Water Pollution

| Type | Source Category | Examples |
|------|---------------|---------|
| **Point source** | Single, identifiable location | Factory discharge pipe, sewage treatment outfall |
| **Non-point source** | Diffuse, widespread | Agricultural runoff, urban stormwater, atmospheric deposition |

### Major Water Pollutants

| Pollutant | Source | Impact |
|-----------|--------|--------|
| **Nutrients (N, P)** | Fertilizer, sewage | Eutrophication, algal blooms, dead zones |
| **Pathogens** | Sewage, animal waste | Cholera, typhoid, dysentery |
| **Sediment** | Erosion, construction | Reduces water clarity; smothers habitats |
| **Thermal pollution** | Power plant cooling water | Reduces dissolved oxygen; harms aquatic life |
| **Heavy metals** | Mining, industry | Mercury, lead — bioaccumulate in food chains |
| **Endocrine disruptors** | Pesticides, plastics, pharmaceuticals | Interfere with hormone systems in wildlife |

## Water Treatment

| Method | Purpose | Level |
|--------|---------|-------|
| **Primary treatment** | Physical removal (screens, settling) | Removes solids |
| **Secondary treatment** | Biological breakdown by bacteria | Removes organic matter |
| **Tertiary treatment** | Chemical/advanced treatment | Removes nutrients, chemicals, pathogens |
      \`
    },
    {
      id: 'apeswr1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Pollution from a single identifiable location (like a factory pipe) is called _______ source pollution.

2) Agriculture uses approximately _______% of global freshwater.

3) An underground layer of permeable rock that holds water is called an _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['point', '70', 'aquifer'],
        hint1: 'You can point to exactly where it comes from.',
        hint2: 'The largest water-using sector by far.',
        hint3: 'Underground water storage in rock.',
        explanation: 'Point source = identifiable location. Agriculture = 70% of global freshwater. Aquifer = underground water-bearing rock layer.'
      }
    },
    {
      id: 'apeswr1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Pollution** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Fertilizer washing off farm fields during a rainstorm and entering a river is ___ pollution',
            options: ['Non-point source', 'Point source', 'Thermal', 'Sediment']
          },
          {
            label: 'A power plant discharging hot water into a lake, reducing dissolved oxygen, is ___',
            options: ['Thermal pollution', 'Eutrophication', 'Acidification', 'Sedimentation']
          },
          {
            label: 'The treatment stage that uses bacteria to break down organic waste is ___',
            options: ['Secondary treatment', 'Primary treatment', 'Tertiary treatment', 'Disinfection']
          }
        ],
        correctAnswers: ['Non-point source', 'Thermal pollution', 'Secondary treatment'],
        hint1: 'Runoff from many fields — no single pipe.',
        hint2: 'Heat reduces water oxygen capacity.',
        hint3: 'Biological processing stage.',
        explanation: 'Farm runoff = non-point source (diffuse). Hot water discharge = thermal pollution. Bacteria breakdown = secondary treatment.'
      }
    },
    {
      id: 'apeswr1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Water Resources

- **Point vs non-point source** pollution is tested almost every year — know examples of each
- Know the three levels of water treatment and what each removes
- **Groundwater depletion** (especially Ogallala Aquifer) is a common FRQ topic
- Understand cone of depression and how over-pumping affects water tables
- Water scarcity affects 2+ billion people — know the connection to agriculture, population growth, and climate change
      \`
    },
    {
      id: 'apeswr1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A city downstream from agricultural land notices algal blooms in their water supply every spring. The MOST likely cause is:',
            options: [
              'Thermal pollution from a local power plant',
              'Non-point source runoff of nitrogen and phosphorus fertilizers from upstream farms',
              'Point source pollution from a nearby factory',
              'Natural seasonal algae growth unrelated to human activity'
            ],
            correctAnswer: 1,
            explanation: 'Seasonal fertilizer application on farms leads to nutrient runoff (N and P) during spring rains. This non-point source pollution causes eutrophication and algal blooms downstream.'
          },
          {
            question: 'Which water conservation practice would MOST reduce agricultural water consumption?',
            options: [
              'Switching from flood irrigation to drip irrigation',
              'Building more dams to store water',
              'Increasing the number of wells pumping groundwater',
              'Using more fertilizer to grow crops faster'
            ],
            correctAnswer: 0,
            explanation: 'Drip irrigation delivers water directly to plant roots, using 30-50% less water than flood irrigation. This is the most effective agricultural water conservation strategy.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with APES batch 2 (5 files)');
