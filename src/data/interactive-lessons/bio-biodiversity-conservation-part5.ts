export const bioBiodiversityConservationPart5Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco5-intro',
      type: 'text' as const,
      content: `# Conservation Strategies

**Part 5 of 7 — Biodiversity & Conservation**

Conservation biology applies ecological and genetic principles to protect biodiversity. Strategies fall into two broad categories:

### In Situ Conservation (On-Site)
Protecting species **in their natural habitats**:
- Protected areas (national parks, wildlife refuges, marine reserves)
- Habitat corridors and connectivity
- Community-based conservation
- Sustainable use management

### Ex Situ Conservation (Off-Site)
Maintaining species **outside their natural habitats**:
- Zoos and aquariums (captive breeding programs)
- Botanical gardens
- Seed banks and gene banks
- Cryopreservation of genetic material

**In situ conservation is always preferred** because it preserves entire ecosystems, ecological interactions, and evolutionary processes. Ex situ conservation is a last resort — a safety net for species on the brink of extinction.
`
    },
    {
      id: 'bco5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — In Situ vs. Ex Situ** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A national park that protects 500,000 hectares of tropical rainforest along with all its native species is an example of:',
            options: [
              'Ex situ conservation',
              'In situ conservation',
              'Captive breeding',
              'Genetic rescue'
            ],
            correctAnswer: 1,
            explanation: 'National parks protect species in their natural habitats (in situ). This approach preserves not just individual species but entire ecosystems including ecological interactions, nutrient cycling, and evolutionary processes.'
          },
          {
            question: 'Which statement best explains why in situ conservation is generally preferred over ex situ conservation?',
            options: [
              'It is less expensive to maintain',
              'It preserves entire ecosystems and the ecological interactions that sustain species',
              'It guarantees that no species will go extinct',
              'It requires no human management or intervention'
            ],
            correctAnswer: 1,
            explanation: 'In situ conservation protects species within the context of their natural ecosystems, maintaining ecological relationships (predator-prey, pollination, symbioses), evolutionary pressures, and ecosystem services that can\'t be replicated in captivity.'
          }
        ]
      }
    },
    {
      id: 'bco5-protected',
      type: 'text' as const,
      content: `## Protected Areas & Habitat Connectivity

### Protected Area Design
Conservation biologists use principles from **island biogeography** (MacArthur & Wilson) to design effective reserves:

| Design Principle | Better | Worse | Reason |
|---|---|---|---|
| Size | One large reserve | Several small (same total area) | Supports more species, larger populations |
| Shape | Circular/compact | Long and narrow | Minimizes edge effects |
| Proximity | Close together | Far apart | Facilitates dispersal between fragments |
| Connectivity | Connected by corridors | Isolated | Allows gene flow and recolonization |

This is summarized by the **SLOSS debate** (Single Large Or Several Small):
- Generally, a single large reserve is better for preserving interior species and avoiding edge effects.
- However, several small reserves may capture more **habitat heterogeneity** and protect against a single catastrophe wiping out everything.

### Habitat Corridors
- Strips of habitat connecting isolated fragments.
- Allow organisms to **move between patches** for feeding, mating, and seasonal migration.
- Maintain **gene flow** between subpopulations, reducing inbreeding.
- Examples: wildlife overpasses/underpasses over highways, riparian buffers along streams.
- Concerns: corridors may also facilitate spread of **invasive species, diseases, or fire**.

### Marine Protected Areas (MPAs)
- No-take zones where fishing and extraction are prohibited.
- Allow fish populations to recover; large individuals produce disproportionately more offspring.
- **Spillover effect**: recovered populations inside MPAs disperse into surrounding fishing grounds, improving catches.
- Currently, ~8% of ocean area is in MPAs, but only ~3% is fully protected.
`
    },
    {
      id: 'bco5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Conservation Strategies** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Strips of habitat that connect isolated fragments and allow organisms to move between them are called habitat ___.',
            options: ['edges', 'corridors', 'buffers', 'patches']
          },
          {
            label: 'The SLOSS debate asks whether it is better to create a Single ___ Or Several Small reserves.',
            options: ['Long', 'Linked', 'Large', 'Local']
          },
          {
            label: 'The recovery of fish populations inside marine protected areas that then disperse into surrounding waters is called the ___ effect.',
            options: ['corridor', 'edge', 'spillover', 'founder']
          },
          {
            label: 'Maintaining frozen genetic material (sperm, eggs, embryos) for future use is a form of ___ conservation.',
            options: ['in situ', 'ex situ', 'community', 'passive']
          }
        ],
        correctAnswers: ['corridors', 'Large', 'spillover', 'ex situ'],
        hint1: 'Think of a hallway connecting rooms — corridors connect habitat patches.',
        hint2: 'SLOSS = Single Large Or Several Small.',
        hint3: 'Fish spilling over from protected area into fished waters — the spillover effect.',
        explanation: 'Habitat corridors connect fragmented patches, enabling movement and gene flow. The SLOSS debate compares a Single Large reserve versus Several Small reserves. The spillover effect describes how recovered populations inside MPAs benefit surrounding fisheries. Cryopreservation of genetic material is ex situ (off-site) conservation that preserves genetic diversity outside natural habitats.'
      }
    },
    {
      id: 'bco5-programs',
      type: 'text' as const,
      content: `## Captive Breeding, Reintroduction & Seed Banks

### Captive Breeding Programs
- Breed endangered species in controlled environments (zoos, breeding centers).
- Maintain **studbooks** to track genetics and minimize inbreeding.
- Species Survival Plans (SSPs) coordinate breeding across institutions.
- Successes: California condor (22 → 500+), Arabian oryx (extinct in wild → reintroduced), black-footed ferret (18 → 300+ wild).

### Reintroduction Programs
- Releasing captive-bred or translocated individuals back into their native habitat.
- Requires: sufficient habitat, removal of original threats, **pre-release conditioning** (e.g., predator avoidance training).
- Challenges:
  - Captive-bred animals may lack survival skills (foraging, predator avoidance).
  - Disease transmission between captive and wild populations.
  - Public opposition (e.g., wolf reintroduction in Yellowstone).
- **Yellowstone wolf reintroduction** (1995) → trophic cascade restored ecosystem: wolves reduced elk → vegetation recovered → beaver returned → stream habitat improved.

### Seed Banks & Gene Banks
- **Seed banks** store seeds of crop varieties and wild plant species under cold, dry conditions.
  - Svalbard Global Seed Vault (Norway): backup for >1.1 million seed samples from worldwide collections.
- **Gene banks** store DNA, tissue, gametes, or embryos (cryopreservation).
- Preserve genetic diversity for future breeding programs, crop improvement, and potential de-extinction.
- Limitations: seeds lose viability over time; not all species produce storable seeds; frozen material requires continuous energy and maintenance.
`
    },
    {
      id: 'bco5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Conservation Programs** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Wolves were reintroduced to Yellowstone National Park in 1995. Subsequent recovery of streamside vegetation and return of beavers is best explained by:',
            options: [
              'Wolves directly planted new vegetation',
              'A trophic cascade in which wolves reduced elk herbivory on riparian plants',
              'Climate change increased rainfall in the region',
              'Beavers were reintroduced at the same time as wolves'
            ],
            correctAnswer: 1,
            explanation: 'The Yellowstone wolf reintroduction triggered a trophic cascade: wolves reduced elk numbers and changed elk behavior (landscape of fear), allowing riparian vegetation to recover. This in turn provided habitat for beavers, which altered stream hydrology and further enhanced ecosystem recovery.'
          },
          {
            question: 'A captive breeding program for an endangered bird species uses studbooks to track the pedigree of every individual. This practice primarily aims to:',
            options: [
              'Increase the total number of eggs laid per female',
              'Minimize inbreeding by pairing genetically dissimilar individuals',
              'Select for traits that make birds easier to keep in captivity',
              'Ensure that birds imprint on human handlers for easier management'
            ],
            correctAnswer: 1,
            explanation: 'Studbooks record parentage and genetic relationships, allowing managers to pair individuals that are least related. This minimizes inbreeding and maintains maximum genetic diversity in the captive population — essential for eventual reintroduction success.'
          }
        ]
      }
    },
    {
      id: 'bco5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary — Conservation Strategies

### Key Takeaways
1. **In situ** (on-site) conservation preserves species in their natural habitats; **ex situ** (off-site) is a last resort.
2. Reserve design follows island biogeography: larger, circular, connected reserves are preferred.
3. **Habitat corridors** maintain gene flow but may also spread invasives and disease.
4. **Captive breeding** programs use studbooks and genetic management to maximize diversity.
5. **Reintroduction** requires habitat restoration, threat removal, and pre-release conditioning.
6. **Seed banks** (e.g., Svalbard) and **gene banks** preserve genetic material for the future.

### AP Exam Connection
- Know the island biogeography principles applied to reserve design (SLOSS debate, species-area curves).
- Be ready to explain trophic cascades using the Yellowstone wolf reintroduction example.
- Understand why genetic management (studbooks, pairing strategies) is critical in captive breeding.
- Distinguish in situ vs. ex situ conservation and list advantages/disadvantages of each.

**Next up:** Part 6 — Ecosystem Services & Sustainability
`
    }
  ]
};
