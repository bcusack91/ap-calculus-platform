export const apesBiodiversityConservationPart1Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apescon1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'apescon1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'apescon1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The acronym HIPPCO stands for Habitat loss, Invasive species, Population growth, Pollution, Climate change, and _______.

2) The US law that protects threatened and endangered species by prohibiting "take" is the _______ Species Act.

3) Strips of habitat connecting isolated patches to allow wildlife movement are called habitat _______.
      `,
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
      content: `
**Match the Strategy** 🔍
      `,
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
      content: `
## AP Exam Strategy: Conservation

- Know HIPPCO and be able to identify which threat applies to a scenario
- **ESA** is the most commonly tested legislation — know what "take" means (harass, harm, pursue, wound, kill)
- Habitat corridors and edge effects are frequently tested concepts
- Understand trade-offs: captive breeding is expensive and may not address root cause (habitat loss)
- Biological control can backfire — the introduced predator can become invasive itself (cane toads in Australia)
      `
    },
    {
      id: 'apescon1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
