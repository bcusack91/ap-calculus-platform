export const apesBiomesSuccessionPart5Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbiom5-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 5 of 7 — Keystone Species, Indicator Species, Fire and Misconceptions**

---

| Section |
|---------|
| 📖 Keystone Species and Ecosystem Engineers |
| Indicator Species |
| Scoring a Stream With Indicator Species |
| Fire, Disturbance and Resetting Succession |
| Misconceptions That Cost Points |

> 🔑 **Key Concept:** Some species shape a whole community out of proportion to their numbers, and others reveal the condition of an environment simply by being present or absent. Both ideas sit in the same CED topic as succession (2.7), along with the disturbances that restart it.
      `
    },
    {
      id: 'apesbiom5-keystone',
      type: 'text' as const,
      content: `
## 📖 Keystone Species and Ecosystem Engineers

A **keystone species** has a much larger effect on community structure than its abundance would suggest. Remove it, and the community changes dramatically, just as an arch collapses without its keystone.

| Species | Role | What happens without it |
|---|---|---|
| **Ochre sea star** (*Pisaster*) | Predator of mussels on rocky shores | In Robert Paine's removal experiments in Washington State, mussels crowded out other species and diversity in the plots dropped sharply |
| **Beaver** | Ecosystem engineer: dams streams | Ponds and wetlands drain; habitat for fish, amphibians, waterfowl and moose shrinks |
| **Prairie dog** | Burrows aerate soil; grazing keeps grass short | Burrows used by owls, snakes and ferrets disappear; shrubs invade |
| **Gopher tortoise** | Digs deep burrows in southeastern pine savannas | Hundreds of other species lose shelter from fire and heat |
| **African elephant** | Knocks down and eats trees | Savanna fills in with woodland, crowding out grazers |

The sea otter and the gray wolf are also keystone predators; their trophic cascades were covered in the Ecosystem Structure topic (Part 4).

### Beavers and succession

Beavers **reset** succession along streams. A dam floods a valley and creates a pond. When the beavers leave and the dam fails, the pond drains into a rich "beaver meadow," which then moves through the stages of secondary succession toward forest.

## Indicator Species

An **indicator species** reveals some feature of its environment by its presence, abundance, scarcity or chemical composition.

| Indicator | What it signals |
|---|---|
| **Lichens** on trees and rocks | Many lichens die where air contains sulfur dioxide, so their absence near a city or smelter signals air pollution |
| **Mayfly, stonefly and caddisfly larvae** | These need high dissolved oxygen; finding many of them indicates clean, well-oxygenated water |
| **Aquatic worms, leeches, midge larvae** | Tolerate low oxygen; dominance by them indicates organic pollution |
| **Amphibians** | Thin, permeable skin and life in both water and land make them sensitive to pollutants and habitat change |
| **Trout** | Need cold, clean, oxygen-rich water |
| **Mercury in fish tissue** | Chemical composition signals mercury contamination in the food web |
      `
    },
    {
      id: 'apesbiom5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which observation best identifies a species as a keystone species?',
            options: [
              'Removing it causes large changes even though it is not abundant',
              'It is the most numerous species found in the community',
              'It is the first species to colonize bare rock',
              'Its presence or absence signals the level of pollution'
            ],
            correctAnswer: 0,
            explanation: 'A keystone species is defined by an effect far larger than its abundance, which removal experiments reveal. The first colonizer is a pioneer species, and a species that signals pollution is an indicator species.'
          },
          {
            question: 'A stream survey finds many stonefly and mayfly larvae but very few aquatic worms. What does this most likely indicate?',
            options: [
              'High dissolved oxygen and little organic pollution',
              'Low dissolved oxygen caused by sewage discharge upstream',
              'Water that is warmer than normal for the season',
              'Recent eutrophication from fertilizer runoff nearby'
            ],
            correctAnswer: 0,
            explanation: 'Stonefly and mayfly larvae are pollution-sensitive and need well-oxygenated water, while worms that tolerate low oxygen are scarce. Sewage, warming and eutrophication would all reduce oxygen and favor tolerant organisms.'
          },
          {
            question: 'Beavers are trapped out of a valley, and their dams collapse. Which change in the valley is most likely over the next few decades?',
            options: [
              'Ponds drain into meadows that slowly succeed toward forest',
              'Ponds deepen as streams carve the old dam sites downward',
              'Primary succession begins on bare rock exposed by the water',
              'Fish diversity rises as the stream habitat becomes still water'
            ],
            correctAnswer: 0,
            explanation: 'Without dams, ponds drain and their rich sediments become meadows that follow secondary succession, because soil is present. Losing the ponds also removes still-water habitat, so pond species decline.'
          }
        ]
      }
    },
    {
      id: 'apesbiom5-index',
      type: 'text' as const,
      content: `
## Scoring a Stream With Indicator Species

Many volunteer stream programs turn a macroinvertebrate sample into a single number. In one common method, each **type** of organism found (not each individual) earns points by its pollution sensitivity:

| Group | Examples | Points per type found |
|---|---|---|
| Sensitive | Mayfly, stonefly and caddisfly larvae; water penny | 3 |
| Somewhat sensitive | Dragonfly larvae, crayfish, clams | 2 |
| Tolerant | Aquatic worms, leeches, midge larvae, pouch snails | 1 |

| Index value | Water quality rating (illustrative scale) |
|---|---|
| 23 or more | Excellent |
| 17–22 | Good |
| 11–16 | Fair |
| 10 or less | Poor |

### Worked Example 1: Two Sites on One Stream (illustrative data)

**Upstream site:** 5 sensitive types, 3 somewhat sensitive types, 2 tolerant types
$$(5 \\times 3) + (3 \\times 2) + (2 \\times 1) = 15 + 6 + 2 = 23 \\Rightarrow \\text{Excellent}$$

**Below a sewage outfall:** 1 sensitive type, 2 somewhat sensitive types, 5 tolerant types
$$(1 \\times 3) + (2 \\times 2) + (5 \\times 1) = 3 + 4 + 5 = 12 \\Rightarrow \\text{Fair}$$

**Percent change downstream:**
$$\\frac{12 - 23}{23} \\times 100 \\approx -48\\%$$

### Worked Example 2: EPT Percentage

Another measure is the share of individuals that are mayflies, stoneflies and caddisflies (**EPT**, from their order names Ephemeroptera, Plecoptera and Trichoptera). A sample of 250 individuals contains 150 EPT larvae:

$$\\frac{150}{250} \\times 100 = 60\\%\\ \\text{EPT}$$

A high EPT percentage indicates good water quality.
      `
    },
    {
      id: 'apesbiom5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the scoring table above. Enter numbers only.

1) A site has 3 sensitive types, 4 somewhat sensitive types and 3 tolerant types. What is its index value?

2) A sample of 320 macroinvertebrates includes 48 EPT larvae. What percent of the sample is EPT?

3) A site's index rose from 10 to 18 after a farm fenced cattle out of the stream. What was the percent increase?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '15', '80'],
        hint1: 'Multiply each count of types by its points (3, 2 or 1), then add.',
        hint2: 'Divide the EPT count by the total and multiply by 100.',
        hint3: '(18 − 10) ÷ 10 × 100.',
        explanation: '1) 9 + 8 + 3 = 20, a Good rating. 2) 48 ÷ 320 × 100 = 15 percent. 3) 8 ÷ 10 × 100 = 80 percent.'
      }
    },
    {
      id: 'apesbiom5-fire',
      type: 'text' as const,
      content: `
## Fire, Disturbance and Resetting Succession

A **disturbance** removes organisms and opens space, setting succession back to an earlier stage. (Periodic, episodic and random disruptions were classified in the Biodiversity topic, Part 5.) In many biomes, fire is a regular, natural disturbance, and the dominant species depend on it.

| Fire-adapted system | Adaptation |
|---|---|
| **Lodgepole and jack pine forests** | **Serotinous cones** stay sealed with resin until fire heat opens them, releasing seeds onto ash-enriched, sunlit ground |
| **Longleaf pine savannas** | Thick bark; seedlings spend years in a fire-resistant "grass stage" with a protected bud |
| **Grasslands and prairies** | Growing points at or below the soil surface; fire kills invading shrubs and trees |
| **Chaparral** | Shrubs resprout from roots; some seeds germinate only after fire |

### Fire suppression and its consequences

Decades of putting out every fire let dead wood and dense young trees accumulate. When fire finally comes, it can burn hot enough to kill mature trees and sterilize soil. **Prescribed burns**, set under controlled conditions, reduce fuel and restore the fire-dependent community.

### A patchwork of stages

Disturbances that hit some patches and not others leave a **mosaic** of successional stages across a landscape. Because early, middle and late stages support different species, a mosaic usually holds more species overall than a landscape of uniform old forest or uniform young regrowth.

## Misconceptions That Cost Points

| Misconception | Correction |
|---|---|
| "The climax community is permanent." | Disturbance, climate change and invasive species keep changing it; it is stable only relative to earlier stages. |
| "Succession always ends in forest." | The endpoint depends on climate: grassland in dry regions, tundra in the Arctic. |
| "Pioneer species are always lichens." | Lichens and mosses pioneer bare rock; in secondary succession the pioneers are fast-growing weeds and grasses. |
| "Fire always damages ecosystems." | Many ecosystems depend on fire to recycle nutrients, open cones and suppress competitors. |
| "A keystone species is the most common species." | Keystone status is about outsized influence, not numbers. |
| "Absence of an indicator always proves pollution." | Other factors such as temperature, habitat or sampling error can explain absence; look for a pattern across sites. |
      `
    },
    {
      id: 'apesbiom5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After 80 years of fire suppression, a lodgepole pine forest has few young pines. Which explanation is best supported?',
            options: [
              'Without fire, sealed cones do not open to release their seeds',
              'Without fire, the soil becomes too nutrient-rich for pine seedlings',
              'Without fire, deer populations crash and stop dispersing pine seeds',
              'Without fire, mature pines grow too slowly to make any cones at all'
            ],
            correctAnswer: 0,
            explanation: 'Lodgepole pines rely heavily on serotinous cones that open in fire heat, so a fire-free forest releases few seeds. Fire also clears shade and competitors, which pine seedlings need.'
          },
          {
            question: 'A land manager wants to keep a tallgrass prairie from turning into shrubland. Which action is most effective?',
            options: [
              'Run regular prescribed burns',
              'Plant more native shrubs among the grasses',
              'Suppress every fire that starts on the prairie',
              'Add nitrogen fertilizer to speed grass growth'
            ],
            correctAnswer: 0,
            explanation: 'Prairie grasses regrow from protected growing points after fire, while invading shrubs and trees are killed. Suppressing fire lets succession move toward shrubland and woodland.'
          },
          {
            question: 'Lichens are abundant in rural areas but nearly absent downwind of a coal-fired power plant. Which pollutant is the most likely cause?',
            options: [
              'Sulfur dioxide released when the plant burns coal',
              'Carbon dioxide released from the plant smokestacks',
              'Warm water discharged into a nearby river',
              'Noise from turbines and transport trucks'
            ],
            correctAnswer: 0,
            explanation: 'Many lichens are highly sensitive to sulfur dioxide, which coal combustion releases, so their absence downwind indicates SO₂ pollution. Carbon dioxide is not toxic to lichens at those levels.'
          }
        ]
      }
    },
    {
      id: 'apesbiom5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Keystone species | Outsized effect relative to abundance (sea star, beaver, prairie dog, elephant) |
| Ecosystem engineer | Physically reshapes habitat; beavers reset stream succession |
| Indicator species | Presence, abundance, scarcity or chemistry reveals conditions (lichens, EPT, amphibians) |
| Stream index | Sum of points by sensitivity; higher = cleaner water |
| Fire adaptation | Serotinous cones, thick bark, protected growing points, resprouting |
| Fire suppression | Fuel buildup leads to severe fires; prescribed burns restore fire-dependent systems |
| Climax | Depends on climate and is never permanent |

**Next:** Part 6 combines biomes, succession and indicator species in AP-style free-response practice.
      `
    }
  ]
};
