export const bioEcologyPart5Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p5-s1-intro',
      type: 'text' as const,
      content: `
## Human Activity and Natural Disruption

**Part 5 of 7 — Human Activity and Natural Disruption**

Ecosystems have always been disrupted, by storms, droughts, eruptions and shifting continents. The CED makes two points about this. First, **human impact accelerates change** at local and global levels. Second, **geological and meteorological events** also change ecosystem structure, sometimes on a planet-wide scale.

### Human activities that change ecosystems

| Activity | What it does to the ecosystem |
|---|---|
| **Logging** | Removes the canopy and the foundation trees; exposes soil to erosion; changes light and temperature on the ground |
| **Slash-and-burn agriculture** | Forest is cut and burned to clear land; crops grow for a few years until the thin tropical soil loses fertility, then farmers clear new forest |
| **Urbanization** | Replaces habitat with pavement and buildings; raises local temperatures; increases runoff |
| **Monocropping** | Replaces a diverse community with one crop variety, the low-resilience system from part 2 |
| **Dams** | Turn rivers into reservoirs, block fish migration and stop the seasonal floods that floodplain species need (part 3) |
| **Roads and transmission lines** | Cut habitat into pieces; cause road deaths; open routes for invasive species (part 4) |
| **Climate change** | Shifts temperature, rainfall and ocean chemistry everywhere at once |

Most of these do damage in two ways at once: they **destroy** habitat outright, and they **fragment** what is left.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s2-fragmentation',
      type: 'text' as const,
      content: `
### Habitat loss and fragmentation

**Habitat loss** reduces the total area available. **Fragmentation** breaks the remaining habitat into smaller, more isolated patches. Fragmentation causes harm even when little area is lost:

- **Edge effects.** The outer band of a forest patch gets more light, wind and heat, and is drier than the interior. Edge-loving predators and nest parasites reach in from outside. Species that need deep, shaded interior conditions cannot use the edge band.
- **Small populations.** A small patch supports a small population, which is more easily wiped out by a bad year or a disease, and loses genetic variation to genetic drift.
- **Isolation.** Animals cannot move between patches to find mates, food or new territory, so a local extinction is not reversed by recolonization.

### Worked example: how fragmentation shrinks interior habitat

Assume edge effects reach **100 m** into a forest from every side, and ignore the width of any road.

**Before:** one square forest 1 km on each side (1 square km).

- Interior square = (1 km − 0.1 km − 0.1 km) on each side = 0.8 km.
- Interior area = 0.8 × 0.8 = **0.64 square km**, which is 64% of the forest.

**After:** two roads cut the same forest into four squares, each 0.5 km on a side.

- Each interior square = 0.5 − 0.2 = 0.3 km on a side, so each interior area = 0.09 square km.
- Total interior = 4 × 0.09 = **0.36 square km**, which is 36% of the forest.

Almost no forest was cleared, yet interior habitat fell from 64% to 36%. Smaller patches have more edge per unit of area, so cutting habitat into pieces always raises the share that is edge.

> **Reducing the damage:** **habitat corridors** (strips of habitat that connect patches, such as wildlife overpasses across highways) let animals move between fragments, which keeps populations connected.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s3-mcq-human',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Human Disruption
      `,
      exercise: {
        questions: [
          {
            question: 'Farmers cut and burn a patch of tropical forest, grow crops there for a few years until the soil loses its fertility, and then clear a new patch. What is this practice called?',
            options: [
              'Selective logging',
              'Monocropping',
              'Slash-and-burn agriculture',
              'Urbanization'
            ],
            correctAnswer: 2,
            explanation: 'Cutting and burning forest to farm briefly before moving on is slash-and-burn agriculture. Selective logging removes chosen trees without farming the land, and monocropping is growing one crop variety over a large area year after year.'
          },
          {
            question: 'A square forest 2 km on each side has edge effects that reach 200 m in from every side. What percentage of the forest is interior habitat?',
            options: [
              '80%',
              '90%',
              '64%',
              '36%'
            ],
            correctAnswer: 2,
            explanation: 'The interior square is 2 − 0.4 = 1.6 km on a side, so its area is 2.56 square km out of 4 square km, which is 64%. The 80% option compares side lengths instead of areas.'
          },
          {
            question: 'A large forest is split into several small patches with the same total area. Why does this harm species that need forest-interior conditions?',
            options: [
              'It increases the share of edge habitat',
              'It lowers the number of predators near edges',
              'It makes each separate patch more genetically diverse',
              'It lets animals move more freely between the patches'
            ],
            correctAnswer: 0,
            explanation: 'Small patches have more edge per unit area, so less of the forest offers the shaded, sheltered interior conditions these species need. Fragmentation raises edge predation, isolates patches and reduces genetic variation, the opposite of the other three claims.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p5-s4-climate',
      type: 'text' as const,
      content: `
### Climate change: effects on ecosystems

Why carbon dioxide levels are rising, and how the carbon cycle works, is taught in Energy Flow & Nutrient Cycling. Here the question is what a warmer, more acidic world does to ecosystems.

| Effect | What happens | Example |
|---|---|---|
| **Range shifts** | Species move toward the poles and upslope as their tolerance zones move | Mountain species move upslope until they run out of mountain |
| **Phenology mismatch** | The timing of seasonal events shifts by different amounts in species that depend on each other | Insects emerge earlier in warm springs, but birds that time migration by day length arrive at the usual time and miss the food peak |
| **Coral bleaching** | Heat stress makes corals expel their photosynthetic algae; the coral turns white and, if the heat lasts, starves | Mass bleaching on the Great Barrier Reef in 2016 and 2017 |
| **Ocean acidification** | Seawater absorbs CO2 and forms carbonic acid; the lower pH leaves less carbonate for building shells and skeletons | Corals, clams, oysters and some plankton build calcium carbonate more slowly |
| **Sea-ice loss** | Habitat that some species hunt or breed on disappears | Polar bears hunt seals from sea ice |

Notice how these effects connect to earlier parts. Corals are a foundation species (part 3), so bleaching removes the structure an entire reef community uses. A phenology mismatch breaks a link in the food web without either species being directly killed by heat.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s5-natural',
      type: 'text' as const,
      content: `
### Geological and meteorological disruption

| Event | Ecosystem effect |
|---|---|
| **El Niño** | Warm surface water spreads across the eastern tropical Pacific and weakens the upwelling of cold, nutrient-rich water off South America. Phytoplankton decline, anchovy populations crash, and the seabirds and sea lions that eat them starve. The 1997–1998 El Niño also caused widespread coral bleaching. |
| **Continental drift** | Moving continents split populations apart, which can lead to speciation, and join landmasses together. When the Isthmus of Panama formed about 3 million years ago, North and South American mammals crossed in both directions, and many South American mammal groups later declined or went extinct. |
| **Volcanic eruptions** | Destroy local ecosystems and restart succession (the 1980 Mount St. Helens eruption). Very large eruptions put sulfur aerosols into the stratosphere and cool the global climate for a year or two, as Mount Pinatubo did after 1991. |
| **Asteroid impact** | About 66 million years ago, an impact at Chicxulub on the Yucatán Peninsula filled the atmosphere with debris, blocked sunlight and collapsed photosynthesis. Roughly three-quarters of species, including all non-avian dinosaurs, went extinct (the K-Pg mass extinction). Mammals then diversified into the vacated niches. |

### Disruption acts on variation that already exists

A disruption does not create the traits needed to survive it. It **selects among variants already present** in the population.

- Coral colonies differ in heat tolerance, partly because they host different types of algae. During a heat wave, tolerant colonies bleach less and are more likely to survive.
- Populations with more genetic variation are more likely to contain individuals that survive a new stress, which links back to the genetic diversity in part 2.
- **Speed matters.** If the environment changes faster than a population can adapt over generations, the population declines or goes extinct. Long-lived, slow-breeding species are most at risk.

> **AP Connection:** in an FRQ about a disruption, state the change in the environment, the trait or variation that affects survival, and the predicted change in the population or community.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s6-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Climate and Natural Disruption
      `,
      exercise: {
        questions: [
          {
            question: 'In a warming region, caterpillars now peak two weeks earlier than they did 30 years ago, but a migratory songbird still times its arrival by day length. Which outcome is most likely?',
            options: [
              'Chicks hatch after the caterpillar peak and receive less food',
              'Eggs develop faster in warm springs, so chicks hatch earlier',
              'Caterpillars shift back to their old timing to match the birds',
              'The birds switch to timing by temperature within one season'
            ],
            correctAnswer: 0,
            explanation: 'The food peak moved earlier while the birds\' timing did not, so chicks hatch after the peak and are underfed, a phenology mismatch. Neither species can rapidly reset its timing cue, and warmer springs do not let migrants arrive earlier if day length sets departure.'
          },
          {
            question: 'Many corals turn white during a marine heat wave. What is happening, and why can prolonged bleaching kill a coral?',
            options: [
              'Corals lose their calcium carbonate skeletons as the seawater warms',
              'Corals are infected by a bacterium that dissolves the coral tissue',
              'Corals expel their photosynthetic algae and lose the sugars those algae supply',
              'Corals stop feeding on plankton, so their algae run short of nutrients'
            ],
            correctAnswer: 2,
            explanation: 'Heat stress breaks down the coral-algae mutualism, and the coral expels the algae that provided most of its food. If the heat lasts, the coral starves. The white color comes from the skeleton showing through clear tissue, not from losing the skeleton.'
          },
          {
            question: 'During a strong El Niño, warm surface water spreads along the coast of Peru, and anchovy populations crash. Which link best explains the crash?',
            options: [
              'Warm water holds more oxygen, so the predators of anchovies multiply',
              'Heavy rainfall dilutes the seawater, so the fish cannot osmoregulate',
              'Stronger trade winds push the fish schools far out into the ocean',
              'Weaker upwelling brings fewer nutrients, so phytoplankton decline'
            ],
            correctAnswer: 3,
            explanation: 'El Niño weakens the upwelling of cold, nutrient-rich water, so phytoplankton at the base of the food web decline and anchovies starve. Warm water actually holds less oxygen, and El Niño weakens rather than strengthens the trade winds.'
          }
        ]
      }
    }
  ]
};
