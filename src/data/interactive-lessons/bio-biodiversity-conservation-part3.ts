export const bioBiodiversityConservationPart3Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco3-intro',
      type: 'text' as const,
      content: `# Threats to Biodiversity

**Part 3 of 7 — Biodiversity & Conservation**

Earth is experiencing its **sixth mass extinction** — the first driven primarily by a single species. Current extinction rates are estimated to be 100–1,000 times higher than background rates. Understanding the major threats to biodiversity is essential for designing effective conservation strategies.

### The HIPPO Framework

Ecologist E.O. Wilson summarized the major threats using the acronym **HIPPO**:

| Letter | Threat | Relative Impact |
|---|---|---|
| **H** | Habitat loss & fragmentation | #1 threat overall |
| **I** | Invasive species | #2 threat; particularly devastating on islands |
| **P** | Pollution | Affects water, air, soil quality |
| **P** | Population growth (human) | Drives all other threats |
| **O** | Overexploitation | Hunting, fishing, harvesting beyond sustainable levels |

> Some lists add **C** for **Climate change** (making it HIPPOC), reflecting the accelerating impact of global warming.
`
    },
    {
      id: 'bco3-habitat',
      type: 'text' as const,
      content: `## Habitat Destruction & Fragmentation

### Habitat Destruction
The **single greatest threat** to biodiversity worldwide.

- **Deforestation** — tropical forests are cleared for agriculture (cattle ranching, soybean, palm oil), logging, and development. Tropical forests contain >50% of all terrestrial species.
- **Wetland drainage** — >50% of wetlands in the contiguous US have been drained for agriculture or development.
- **Ocean floor trawling** — destroys benthic habitats, including coral reefs and deep-sea communities.

### Habitat Fragmentation
When a large, continuous habitat is broken into smaller, isolated patches:

- **Edge effects** — boundaries between habitat patches and surrounding altered landscape create different conditions (more light, wind, temperature fluctuations, invasive species).
- **Interior species** — species that require deep, undisturbed habitat (e.g., many neotropical migratory birds) cannot survive in small fragments.
- **Reduced gene flow** — isolated patches prevent movement between populations, reducing genetic diversity and increasing inbreeding.
- **Species-area relationship** — smaller habitat areas support fewer species. The relationship follows: $S = cA^z$, where $S$ = number of species, $A$ = area, $c$ and $z$ are constants.

### Case Study: Amazon Fragmentation
The Biological Dynamics of Forest Fragments Project (BDFFP) near Manaus, Brazil:
- 1-hectare fragments lost ~50% of bird species within 15 years.
- 100-hectare fragments retained most species but still showed edge effects.
- Large mammals, army ant colonies, and mixed-species flocks disappeared from small fragments first.
`
    },
    {
      id: 'bco3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Habitat Loss & Fragmentation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A forest is divided by a highway into two smaller patches. Which of the following is the most likely immediate ecological consequence?',
            options: [
              'Increased genetic diversity due to mutation',
              'Increased edge effects and reduced gene flow between patches',
              'Increased species richness in both patches',
              'Decreased human impact on the remaining forest'
            ],
            correctAnswer: 1,
            explanation: 'Fragmentation increases edge effects (altered light, temperature, wind, and invasive species penetration at habitat boundaries) and reduces gene flow by creating barriers to movement between populations. Over time, this leads to decreased genetic diversity and local extinctions.'
          },
          {
            question: 'According to the species-area relationship ($S = cA^z$), if 90% of a habitat is destroyed, what approximate percentage of species is predicted to eventually be lost? (Assume $z = 0.25$)',
            options: [
              'About 10%',
              'About 25%',
              'About 44%',
              'About 90%'
            ],
            correctAnswer: 2,
            explanation: 'If 90% of habitat is destroyed, 10% remains. Using S = $cA^{z}$: S_new/S_original = $(0.1A/A)^{0.25}$ = $0.1^{0.25}$ = 0.562. So about 56% of species remain, meaning approximately 44% are predicted to be lost. Note: this is a long-term prediction; actual species loss may lag behind habitat loss ("extinction debt").'
          }
        ]
      }
    },
    {
      id: 'bco3-invasive-overexploit',
      type: 'text' as const,
      content: `## Invasive Species & Overexploitation

### Invasive Species
An **invasive species** is a non-native organism that causes ecological or economic harm in its new environment.

**Why invasives succeed:**
- No co-evolved predators, parasites, or competitors in the new habitat.
- Often have high reproductive rates and broad environmental tolerances.
- Can outcompete native species for resources.

**Devastating examples:**

| Invasive Species | Location | Impact |
|---|---|---|
| Brown tree snake | Guam | Eliminated 10 of 12 native forest bird species |
| Zebra mussels | North American Great Lakes | Outcompete native mussels, clog water infrastructure |
| Cane toads | Australia | Poison native predators; no natural enemies |
| Kudzu vine | Southeastern US | Smothers native vegetation, growing ~30 cm/day |
| Nile perch | Lake Victoria, Africa | Drove ~200 cichlid species to extinction |

### Overexploitation
Harvesting organisms faster than they can reproduce:

- **Overfishing** — ~33% of marine fish stocks are overfished; collapse of Atlantic cod led to an ecosystem regime shift.
- **Bushmeat hunting** — threatens primates and large mammals in tropical forests.
- **Wildlife trade** — illegal trade in rhino horn, elephant ivory, pangolin scales; worth ~$23 billion/year.
- **Overharvesting plants** — medicinal plants, tropical hardwoods (mahogany, teak).

> The **passenger pigeon**, once the most abundant bird in North America (3–5 billion individuals), was driven to extinction by 1914 through commercial hunting and habitat loss.
`
    },
    {
      id: 'bco3-pollution-climate',
      type: 'text' as const,
      content: `## Pollution & Climate Change

### Pollution
Chemical, physical, and biological contaminants that degrade ecosystems:

- **Nutrient pollution (eutrophication)** — excess nitrogen and phosphorus from agriculture cause algal blooms → oxygen depletion → dead zones (e.g., Gulf of Mexico hypoxic zone: ~15,000 $km^{2}$).
- **Pesticides** — DDT caused eggshell thinning in raptors; neonicotinoids linked to pollinator declines.
- **Heavy metals** — mercury biomagnification through aquatic food chains.
- **Plastic pollution** — ~8 million tons enter oceans annually; microplastics found in virtually all marine organisms.
- **Acid rain** — $SO_{2}$ and $NO_{x}$ emissions lower pH of lakes and soils, harming aquatic organisms and nutrient availability.

### Climate Change
Rapidly becoming one of the most significant threats:

- **Range shifts** — species move poleward or to higher elevations as temperatures rise; not all species can keep pace.
- **Phenological mismatches** — timing of migration, flowering, and insect emergence falls out of sync with food availability.
- **Ocean acidification** — increased $CO_{2}$ dissolves in seawater, lowering pH. Coral reefs and shellfish cannot form calcium carbonate structures.
- **Coral bleaching** — elevated ocean temperatures cause corals to expel symbiotic zooxanthellae; prolonged bleaching causes death.
- **Sea level rise** — threatens coastal habitats (mangroves, salt marshes, nesting beaches).

> The Great Barrier Reef experienced mass bleaching events in 2016, 2017, 2020, and 2022 — the first time back-to-back bleaching occurred.
`
    },
    {
      id: 'bco3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Threats to Biodiversity** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The single greatest threat to biodiversity worldwide is habitat ___.',
            options: ['pollution', 'loss', 'invasion', 'warming']
          },
          {
            label: 'Invasive species often succeed because they lack co-evolved ___ in their new environment.',
            options: ['habitats', 'food sources', 'predators', 'mutations']
          },
          {
            label: 'Excess nitrogen and phosphorus in waterways causes algal blooms and oxygen depletion, a process called ___.',
            options: ['biomagnification', 'eutrophication', 'acidification', 'desertification']
          },
          {
            label: 'Corals expel their symbiotic zooxanthellae during thermal stress in a process called coral ___.',
            options: ['acidification', 'bleaching', 'fragmentation', 'calcification']
          },
          {
            label: 'In the HIPPO framework, the "O" stands for ___.',
            options: ['ocean acidification', 'ozone depletion', 'overexploitation', 'overpopulation']
          }
        ],
        correctAnswers: ['loss', 'predators', 'eutrophication', 'bleaching', 'overexploitation'],
        hint1: 'Deforestation, wetland drainage, and urban sprawl all involve removing habitat.',
        hint2: 'Without natural enemies, invasive populations grow unchecked.',
        hint3: 'HIPPO = Habitat loss, Invasive species, Pollution, Population growth, Overexploitation.',
        explanation: 'Habitat loss (destruction) is the #1 threat to biodiversity globally. Invasive species thrive partly because they lack co-evolved predators, parasites, and competitors. Eutrophication is nutrient enrichment of waterways leading to algal blooms and hypoxia. Coral bleaching occurs when thermal stress causes corals to expel their zooxanthellae. The O in HIPPO stands for overexploitation — harvesting faster than populations can reproduce.'
      }
    },
    {
      id: 'bco3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary — Threats to Biodiversity

### Key Takeaways
1. The **HIPPO** framework: Habitat loss, Invasive species, Pollution, Population growth, Overexploitation (+ Climate change).
2. **Habitat destruction** is the #1 global threat; **fragmentation** creates edge effects and isolates populations.
3. **Invasive species** succeed because they lack co-evolved predators, parasites, and competitors.
4. **Overexploitation** harvests organisms faster than they can reproduce.
5. **Pollution** threatens via eutrophication, biomagnification, and plastic contamination.
6. **Climate change** causes range shifts, coral bleaching, phenological mismatches, and ocean acidification.

### AP Exam Connection
- Know the species-area relationship ($S = cA^z$) and how it predicts species loss from habitat reduction.
- Be ready to analyze data showing biomagnification through trophic levels.
- Questions often present a scenario and ask which HIPPO threat is most relevant.
- Most endangered species face **multiple simultaneous threats** — be prepared to identify and connect them.

**Next up:** Part 4 — Population Ecology & Conservation
`
    }
  ]
};
