export const bioEcologyPart3Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p3-s1-intro',
      type: 'text' as const,
      content: `
## Adding or Removing Ecosystem Components

**Part 3 of 7 — Adding or Removing Ecosystem Components**

The CED asks you to explain how the **addition or removal of any component** of an ecosystem affects its overall **short-term and long-term structure**. Some components hold far more of the structure up than others. The CED names keystone species, producers and essential abiotic and biotic factors as the parts that maintain an ecosystem's diversity.

### Components that hold an ecosystem together

| Component | Definition | Example |
|---|---|---|
| **Producers** | Autotrophs that capture energy and make organic matter for every other organism | Phytoplankton in a lake; grasses on a prairie |
| **Keystone species** | A species whose effect is far out of proportion to its abundance | Sea otters, *Pisaster* sea stars (taught in Population & Community Ecology part 4) |
| **Foundation species** | An abundant species that forms the physical structure of a habitat many others live in | Giant kelp; reef-building corals; eelgrass |
| **Ecosystem engineer** | An organism that physically creates, modifies or maintains habitat | Beavers building dams; elephants knocking down trees in savanna |
| **Essential abiotic factors** | Physical conditions that whole communities depend on | Seasonal floods on a river; a fire cycle in a pine savanna |

#### Keep the labels straight

- A **foundation species** matters because it is **abundant** and builds structure. In that sense it resembles a dominant species.
- A **keystone species** matters **despite** being relatively rare. Its role, not its biomass, is what counts.
- **Ecosystem engineer** describes *what the organism does* (reshapes habitat), so one species can carry two labels. Reef-building corals are both foundation species and engineers.

**Producers** are the base of every food web. If they are removed, the energy supply for every consumer falls. How much energy passes between trophic levels is covered in Energy Flow & Nutrient Cycling.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s2-beaver',
      type: 'text' as const,
      content: `
### Case study: the beaver as ecosystem engineer

A beaver colony cuts trees and builds a dam of branches and mud across a stream. Follow the effects outward over time.

**Short-term effects (the first months to a few years)**

- The fast, shallow stream becomes a deep, slow pond.
- Streamside trees whose roots are flooded die.
- Insects that need fast, oxygen-rich flowing water are replaced by pond species such as dragonfly larvae and water beetles.
- The water in the pond warms because it is slow and exposed to the sun.

**Long-term effects (years to decades)**

- Sediment and organic matter settle behind the dam, building rich, wet soil.
- The local water table rises, so wetland plants spread along the valley.
- Amphibians, waterfowl and fish that use still water increase. The valley now contains several habitats (pond, marsh, flowing stream below the dam) instead of one, which raises ecosystem diversity.
- When the colony leaves and the dam fails, the pond drains and leaves a flat, fertile **beaver meadow** that may persist for decades.

**The removal case.** Fur trapping in the 1700s and 1800s removed beavers from much of North America. Many streams that had once been chains of ponds and wetlands became single, faster channels that held less water. Removing one engineer changed the physical structure of whole valleys.

> **AP Connection:** an engineer's effects are mostly **indirect**. The beaver does not eat dragonfly larvae or plant sedges. It changes abiotic conditions (water depth, flow, temperature, sediment), and those changes decide which species can live there.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s3-mcq-components',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Engineers and Foundation Species
      `,
      exercise: {
        questions: [
          {
            question: 'A beaver colony dams a fast-flowing stream. Which change is most likely within the first year after the dam is built?',
            options: [
              'Streamside trees grow faster as the flooded soil gains nutrients',
              'The stream cuts a deeper channel as sediment washes downstream',
              'Insects that need fast, oxygen-rich stream water are replaced by pond species',
              'The water above the dam cools because the stream now flows more slowly'
            ],
            correctAnswer: 2,
            explanation: 'Slowing the water turns stream habitat into pond habitat, so flowing-water insects give way to pond species. Flooding kills streamside trees rather than helping them, and slow, exposed water warms rather than cools.'
          },
          {
            question: 'Eelgrass forms dense underwater meadows that shelter juvenile fish, and it makes up most of the plant biomass in a shallow bay. Eelgrass is best described as a:',
            options: [
              'Keystone species',
              'Pioneer species',
              'Foundation species',
              'Indicator species'
            ],
            correctAnswer: 2,
            explanation: 'Eelgrass is abundant and forms the physical habitat that many other species use, which defines a foundation species. A keystone species matters despite low abundance, and a pioneer species is an early colonizer in succession.'
          },
          {
            question: 'Which observation shows that an organism is acting as an ecosystem engineer rather than simply being abundant?',
            options: [
              'It makes up more biomass than any other species in the area',
              'It physically changes the habitat that other species live in',
              'It eats the dominant competitor and keeps that species rare',
              'It is the first species to colonize bare rock after a disturbance'
            ],
            correctAnswer: 1,
            explanation: 'An ecosystem engineer is defined by physically creating or modifying habitat, as a beaver does with a dam. High biomass describes a dominant or foundation species, eating a dominant competitor describes a keystone predator, and colonizing bare rock describes a pioneer.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p3-s4-foundation',
      type: 'text' as const,
      content: `
### Foundation species: kelp and coral

#### Giant kelp forests

Giant kelp is a brown alga that grows from the seafloor to the surface along cool, rocky coasts. Its holdfasts, stipes and fronds form a three-dimensional "forest" that shelters fish, snails, crabs and sea urchins, and the dense kelp slows waves and currents. Remove the kelp, and the structure that all of those species use is gone. You saw in Population & Community Ecology part 4 how losing sea otters lets urchins graze kelp down to bare rock. That case is a keystone removal that destroys a foundation species. Both labels apply in the same story.

#### Reef-building corals

Reef-building corals are animals that secrete **calcium carbonate** skeletons. Over thousands of years, those skeletons build the reef itself. Inside coral tissue live photosynthetic algae (zooxanthellae) in a **mutualism**: the algae supply the coral with sugars, and the coral supplies the algae with shelter and nutrients. Coral reefs cover a tiny fraction of the seafloor but support a very large share of marine species, because the reef's cracks and branches create so many places to live and feed.

When corals die, the effects unfold in stages:

| Time after coral death | What happens |
|---|---|
| Weeks | Coral tissue is gone; algae begin to grow on the bare skeletons; coral-eating fish lose their food |
| Years | Waves and boring organisms erode the dead skeletons; the reef flattens |
| Longer term | Fish and invertebrates that need the reef's structure decline; the reef may become dominated by seaweed instead of coral |

That last row is an important idea: an ecosystem may not return to its earlier state. It can shift to a **different stable state** (an urchin barren instead of a kelp forest, a seaweed reef instead of a coral reef) that persists even after the original cause is gone.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s5-framework',
      type: 'text' as const,
      content: `
### A framework for any addition or removal

Use this four-step chain whenever an exam question adds or removes a component.

1. **Identify the component's role.** Producer, consumer, keystone, foundation, engineer, or abiotic factor?
2. **Predict the direct, short-term effect.** Which species interact with it directly, and how do their numbers change first?
3. **Trace the indirect, long-term effects.** Follow the chain through other species and through abiotic conditions.
4. **State the change in structure.** Does diversity rise or fall? Does the ecosystem recover, or shift to a new state?

| Change | Short-term effect | Long-term effect |
|---|---|---|
| Remove a keystone predator (sea otters) | Prey (urchins) increase | Kelp forest lost; many kelp-dependent species decline |
| Remove an engineer (beavers trapped out) | Dams fail; ponds drain | Wetlands shrink; streams become single fast channels |
| Remove an essential abiotic factor (a dam stops spring floods) | No fresh, moist sandbars form below the dam | Floodplain cottonwoods, whose seedlings need flood-deposited sand, stop regenerating; old stands are not replaced |
| Add an engineer (beavers return to a stream) | A pond forms; streamside trees drown | Wetlands, higher water table, more amphibians and waterfowl |
| Remove producers (phytoplankton crash) | Zooplankton lose their food | Fish and every higher consumer decline |

> **Watch the time scale in the question stem.** "Immediately," "within weeks" and "in the first season" point to direct effects. "Over decades" or "long-term" points to indirect effects and changes in community structure.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s6-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Short-Term and Long-Term Effects
      `,
      exercise: {
        questions: [
          {
            question: 'A disease kills most reef-building corals on a reef within one year. Which outcome is best classified as a long-term effect?',
            options: [
              'Coral tissue disappears from the skeletons within weeks',
              'Coral-eating fish lose their main food source that year',
              'Fish that shelter in the reef decline as the dead skeletons erode',
              'Algae begin to grow on the newly exposed coral skeletons'
            ],
            correctAnswer: 2,
            explanation: 'Erosion of the dead reef takes years, and the decline of fish that depend on the reef structure follows from it, so this is a long-term, indirect effect. Tissue loss, lost food for coral-eaters and algae on bare skeletons all happen within weeks to months.'
          },
          {
            question: 'A dam stops the yearly spring floods on a river. Cottonwood seedlings establish mainly on the bare, moist sand that floods leave behind. What is the most likely long-term change along the river below the dam?',
            options: [
              'Cottonwoods spread farther from the river once floods stop disturbing them',
              'Cottonwood numbers hold steady, since adult trees no longer face flooding',
              'Cottonwood seedlings increase as the riverbank soil is left undisturbed',
              'Few young cottonwoods take root, so the aging stands are not replaced over time'
            ],
            correctAnswer: 3,
            explanation: 'The floods are an essential abiotic factor for cottonwood regeneration, so without them few seedlings establish. Adults survive for a while, which hides the problem in the short term, but over decades the stands shrink as old trees die.'
          },
          {
            question: 'Which change to a lake would most directly reduce the energy available to every consumer in the lake?',
            options: [
              'Loss of the top predator fish',
              'Loss of the phytoplankton',
              'Loss of the bottom-dwelling snails',
              'Loss of the migrating waterfowl'
            ],
            correctAnswer: 1,
            explanation: 'Phytoplankton are the producers, so every consumer depends on the energy they capture. Losing a predator, a snail population or visiting birds changes the food web, but none of them is the energy base for all consumers.'
          }
        ]
      }
    }
  ]
};
