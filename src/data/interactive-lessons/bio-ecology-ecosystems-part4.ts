export const bioEcologyPart4Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p4-s1-intro',
      type: 'text' as const,
      content: `
## Invasive Species and Introduced Disease

**Part 4 of 7 — Invasive Species and Introduced Disease**

Part 3 showed that adding a component can reshape an ecosystem. The most common and most damaging additions are species and pathogens carried by people into places they never reached on their own.

### Three terms that are not the same

| Term | Meaning |
|---|---|
| **Native species** | Lives in a region it reached without human help |
| **Introduced (non-native) species** | Moved to a new region by people, on purpose or by accident |
| **Invasive species** | An introduced species that spreads rapidly and causes ecological or economic harm |

Most introduced species never become invasive. Many fail to establish, and many others persist in small numbers without spreading. The ones that do become invasive tend to share a set of advantages.

### Why some introduced species become invasive

1. **Enemy release.** The species left its predators, parasites and pathogens behind in its home range. Without them, death rates fall.
2. **Open resources.** It can exploit a niche or resource that no native species uses fully, so it faces little competition.
3. **High reproductive rate and fast dispersal.** Many invaders mature early and produce many offspring, so their populations can grow quickly once established.
4. **Broad tolerance.** Generalists that eat many foods and tolerate a wide range of abiotic conditions establish more easily.
5. **Naive natives.** Native prey may not recognize the invader as a threat, and native hosts may have no resistance to a new pathogen.

With few checks on it, an invader's population can grow nearly exponentially, as in the growth models from Population & Community Ecology, until it reaches a carrying capacity far above anything the natives can withstand.

**How they arrive:** ballast water in ships, stowaways in cargo, the pet and plant trade, and deliberate releases for erosion control or pest control.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s2-cases',
      type: 'text' as const,
      content: `
### Four invasive species case studies

| Invader | How it arrived | Main effect |
|---|---|---|
| **Cane toad** (Australia) | Deliberately released in Queensland in 1935 to control beetles in sugarcane | Did not control the beetles. Spread across northern Australia. Its skin toxins kill native predators that try to eat it. |
| **Zebra mussel** (North American Great Lakes) | Arrived in the late 1980s in ballast water from ships | Filters huge volumes of water, removing phytoplankton. Smothers native mussels. Clogs water-intake pipes. |
| **Brown tree snake** (Guam) | Arrived by accident in cargo, probably shortly after World War II | Caused the loss of most of Guam's native forest bird species |
| **Kudzu** (southeastern United States) | Introduced from Asia and widely planted in the 1930s and 1940s for erosion control | A fast-growing vine that climbs over trees and shrubs and shades them out |

#### Tracing the effects through the ecosystem

**Cane toad.** Toads are toxic at every life stage. Native predators that evolved without toads, such as northern quolls, some goannas (monitor lizards) and freshwater crocodiles, die after eating them. Predator populations fell sharply in many areas as the toad front passed. This is a predator-prey interaction running backward: the prey kills the predator.

**Zebra mussel.** A dense mussel bed filters the water column. With fewer phytoplankton, zooplankton and young fish have less food, so the energy base of the open-water food web shrinks. The water also becomes clearer, so light reaches deeper and rooted plants and bottom algae spread. One invader changed both a biotic factor (phytoplankton) and an abiotic factor (light penetration).

**Brown tree snake.** Guam had no native snakes, so its birds had no evolved defenses or wariness. Most of the island's native forest bird species disappeared from the wild. The loss spread further: many Guam trees relied on birds to disperse their seeds, and with the birds gone, far fewer seeds are carried away from the parent tree.

**Kudzu.** By covering the canopy, kudzu removes light from the plants beneath it, an example of an invader altering an abiotic factor for the whole community.

> **AP Connection:** a strong FRQ answer names the specific advantage (no predators, naive prey, open niche) and then traces at least one indirect effect on another species or on an abiotic factor.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s3-mcq-invaders',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Invasive Species
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature best explains why an introduced species becomes invasive in its new range?',
            options: [
              'It has a narrower diet than the native species',
              'It reproduces more slowly than native competitors',
              'It has escaped its natural enemies',
              'It arrives as one small founding population'
            ],
            correctAnswer: 2,
            explanation: 'Leaving behind the predators, parasites and pathogens of its home range lowers the invader\'s death rate, a major reason invaders spread. A narrow diet, slow reproduction and a tiny founding population all make establishment harder, not easier.'
          },
          {
            question: 'Cane toads were introduced to Queensland in 1935 to control beetles in sugarcane. Which outcome best describes their main ecological effect?',
            options: [
              'Cane beetles were eliminated, so sugarcane yields rose sharply',
              'Native predators that ate the toxic toads declined in many areas',
              'Native frogs increased as toads ate the frogs\' main predators',
              'Toad numbers stayed low as cool winters killed most of the toads'
            ],
            correctAnswer: 1,
            explanation: 'The toads did not control the beetles, but they spread widely, and native predators such as quolls and goannas died after eating them. Toads do not prey on frog predators, and they spread across northern Australia instead of staying rare.'
          },
          {
            question: 'After zebra mussels spread through a Great Lakes bay, the water became much clearer and rooted plants grew in deeper water. Which explanation best accounts for both changes?',
            options: [
              'Mussels released toxins that killed the bay\'s rooted plant grazers',
              'Mussels filtered out phytoplankton, so light reached deeper water',
              'Mussel shells reflected sunlight downward into the deeper water',
              'Mussels added nitrogen that let rooted plants grow in darker water'
            ],
            correctAnswer: 1,
            explanation: 'Zebra mussels are filter feeders that strip phytoplankton from the water, so the water clears and light penetrates deeper, allowing rooted plants to grow there. The other options invent mechanisms that do not match how the mussels feed.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p4-s4-disease',
      type: 'text' as const,
      content: `
### Introduced disease

The CED singles out the introduction of new diseases as a way humans can devastate native species. The pattern is the same as for naive prey: the hosts have **no evolutionary history** with the pathogen, so few or no individuals carry alleles for resistance.

| Disease | Pathogen and arrival | Effect |
|---|---|---|
| **Dutch elm disease** | A fungus spread by elm bark beetles; reached North America around 1930 in elm logs from Europe | Killed most American elms, which had been planted in long rows as street trees |
| **Chestnut blight** | A fungus from Asia, first found in New York in 1904 | Killed billions of American chestnuts, a dominant tree in many eastern forests. Roots still sprout, but the sprouts are killed before they grow large. |
| **Potato late blight** | *Phytophthora infestans*, an oomycete | Destroyed the genetically uniform Irish potato crop beginning in 1845 (part 2) |
| **Smallpox** | A virus carried to the Americas after European contact | Epidemics killed a large share of many Indigenous populations, who had no prior exposure |
| **Chytridiomycosis** | The chytrid fungus *Batrachochytrium dendrobatidis*, spread worldwide in the amphibian trade | Infects amphibian skin, which amphibians use for gas and water exchange; linked to declines in hundreds of amphibian species |

#### Two amplifiers

- **Genetic uniformity.** Rows of identical street elms and fields of clonal potatoes let a pathogen move from host to host with nothing to stop it.
- **Loss of a foundation species.** American chestnut was a foundation tree that supplied a reliable nut crop for wildlife. When it vanished, the structure and food supply of whole forests changed, the kind of long-term effect described in part 3.

> **Link to evolution:** an introduced disease is a strong new selective pressure. If even a few hosts carry resistance alleles, their survival can shift allele frequencies over generations. With no variation, there is nothing for selection to act on.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Practice — Why Was the Introduction So Damaging?

Choose the main reason each introduction caused so much harm.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cane toads reach very high densities in Australia, where few of the predators and parasites from their home range are present',
            options: ['naive prey', 'enemy release', 'no host resistance', 'resource competition']
          },
          {
            label: 'Guam\'s forest birds had evolved with no snakes and showed little wariness toward the brown tree snake',
            options: ['enemy release', 'resource competition', 'no host resistance', 'naive prey']
          },
          {
            label: 'American chestnuts had never encountered the blight fungus, and almost no trees survived infection',
            options: ['no host resistance', 'naive prey', 'enemy release', 'resource competition']
          }
        ],
        correctAnswers: ['enemy release', 'naive prey', 'no host resistance'],
        hint1: 'Ask whether the problem is about the invader\'s own enemies or about the natives\' defenses.',
        hint2: 'Prey that never met a type of predator do not recognize it as a threat.',
        hint3: 'A host population that never met a pathogen has had no chance to evolve resistance to it.',
        explanation: 'Cane toads escaped the enemies of their home range (enemy release). Guam\'s birds lacked anti-snake behavior (naive prey). Chestnuts lacked resistance alleles to a pathogen they had never encountered (no host resistance).'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p4-s6-vulnerability',
      type: 'text' as const,
      content: `
### Which ecosystems are most vulnerable?

**Islands and isolated lakes** are hit hardest. Their species evolved in isolation, often without whole groups of predators or pathogens (Guam had no snakes; Hawaii had no native land mammals except a bat). Island populations are also small, so a new predator can wipe out a species before it adapts.

**Disturbed habitats** such as roadsides, cleared land and dredged harbors are easier to invade, because the native community has already been thinned and resources are open.

### Prevention and control

- **Prevention is cheapest.** Ballast-water rules, inspections of cargo and limits on the pet and plant trade aim to stop arrivals.
- **Early detection** matters, because a small, new population can still be removed.
- **Biological control** releases a natural enemy of the invader. The cane toad shows the risk: an agent can ignore its target and harm native species instead. Agents today are tested on many non-target species before any release.

### Summary: tracing an invasion

| Step | Question to ask |
|---|---|
| 1. Arrival | How did the species get here? |
| 2. Establishment | What advantage does it have (enemy release, open niche, naive natives)? |
| 3. Spread | How fast does it reproduce and disperse? |
| 4. Impact | Which native species decline, and which abiotic factors change? |
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Introduced Disease and Vulnerability
      `,
      exercise: {
        questions: [
          {
            question: 'American chestnut was a dominant tree in many eastern North American forests until chestnut blight arrived in the early 1900s. Why did the blight kill such a high proportion of the trees?',
            options: [
              'The trees had been weakened by a century of logging',
              'The trees had no evolved resistance to the fungus',
              'The trees reproduced only from root sprouts, not seeds',
              'The trees were stressed by a long regional drought'
            ],
            correctAnswer: 1,
            explanation: 'The fungus came from Asia, so American chestnuts had no evolutionary history with it and almost none carried resistance. Logging, drought and reproduction by sprouts were not what made the blight so lethal.'
          },
          {
            question: 'Which situation would make a native prey species most vulnerable to a newly introduced predator?',
            options: [
              'The prey shares its community with many other predator species',
              'The prey already lives alongside a close relative of the predator',
              'The prey has evolved on an island with no similar predators',
              'The prey has large populations spread across a whole continent'
            ],
            correctAnswer: 2,
            explanation: 'Island prey that evolved without similar predators have no defenses or wariness, as the Guam birds showed. Prey that already face related predators, or that have large, widespread populations, are better able to survive a new predator.'
          },
          {
            question: 'Before a biological control agent is released today, researchers test it on many non-target species. Which lesson from the cane toad does this testing address?',
            options: [
              'Control agents always fail to reduce their target pest populations',
              'An introduced agent may harm native animals rather than its intended target',
              'Agents spread too slowly to affect a pest that is already established',
              'Introduced agents are quickly eliminated by native predators and parasites'
            ],
            correctAnswer: 1,
            explanation: 'Cane toads ignored the target beetles and instead harmed native predators, so modern programs test whether an agent will attack non-target species. Biological control does not always fail, and the toad spread quickly rather than being eliminated.'
          }
        ]
      }
    }
  ]
};
