export const bioPopulationPart4Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp4-intro',
      type: 'text' as const,
      content: `
## Community Ecology

**Part 4 of 7 — Population & Community Ecology**

A **community** is an assemblage of all the populations of different species that live and interact in a particular area. While population ecology tracks one species' numbers, community ecology asks how species **affect one another**. These **interspecific interactions** are classified by their effect on the per-capita growth of each participant, scored with a sign:

- **(+)** the interaction benefits that species (raises its $r$ — more food, protection, etc.).
- **(−)** the interaction harms that species (lowers its $r$ — death, lost resources).
- **(0)** the interaction has no significant effect on that species.

Reading interactions as pairs of signs is the fastest way to classify them on the AP exam. The sign convention summarizes whether each partner gains, loses, or is unaffected.
      `
    },
    {
      id: 'pcp4-signtable',
      type: 'text' as const,
      content: `
### The Interspecific Interaction Sign Table

| Interaction | Sign (Species A / Species B) | Description | Example |
|---|---|---|---|
| **Competition** | −/− | Both species use a shared limiting resource; both suffer | Lions and hyenas over prey; two plants for the same light |
| **Predation** | +/− | One organism (predator) kills and eats another (prey) | Owl eats mouse; lynx eats hare |
| **Herbivory** | +/− | An animal eats plant tissue (plant usually survives) | Deer browsing shrubs; caterpillar on a leaf |
| **Parasitism** | +/− | Parasite lives in/on a host, deriving nutrients and harming it | Tapeworm in an intestine; tick on a deer |
| **Mutualism** | +/+ | Both species benefit | Bee pollinating a flower; mycorrhizae and plant roots |
| **Commensalism** | +/0 | One benefits; the other is unaffected | Barnacles on a whale; cattle egret following grazers |

> **Sign-convention trap:** predation, herbivory, and parasitism all share the **+/−** signature — they differ in mechanism, not in their effect signs. Do not assume +/− automatically means "predator eats prey"; a parasite or herbivore also fits +/−. Conversely, mutualism (+/+) and commensalism (+/0) are easy to confuse: in commensalism one partner gains while the other gets **nothing** (a true 0), whereas in mutualism **both** gain.

The interactions that involve one partner consuming another (predation, herbivory, parasitism) are sometimes grouped as **exploitation**: +/− interactions in which one organism's gain is the other's loss.
      `
    },
    {
      id: 'pcp4-competition',
      type: 'text' as const,
      content: `
### Competition, Niches, and Coexistence

#### The ecological niche

A species' **ecological niche** is the sum total of how it uses the biotic and abiotic resources of its environment — its "occupation," not just its "address" (which is the *habitat*). Ecologists distinguish two versions:

- **Fundamental niche** — the full range of conditions and resources a species *could* use in the absence of competitors.
- **Realized niche** — the portion of that range the species *actually* occupies once competitors and other limiting interactions are present. The realized niche is usually **smaller** than the fundamental niche.

#### The competitive exclusion principle

**Two species cannot coexist indefinitely on exactly the same limiting resource** — if their niches overlap completely, the better competitor drives the other locally extinct. This is the **competitive exclusion principle** (Gause). Coexistence requires that the niches differ in some way.

#### Resource partitioning and character displacement

Species often coexist by **resource partitioning** — dividing a contested resource so their realized niches diverge. Classic example: MacArthur's warblers, which feed in different vertical zones of the same spruce trees, partitioning the canopy rather than competing head-to-head. Over evolutionary time, competition can drive **character displacement**, in which competing species evolve differences (e.g., beak sizes in Galápagos finches) that reduce niche overlap.

> **Niche reasoning worked through:** Suppose two barnacle species both *could* settle across an entire intertidal zone (overlapping fundamental niches). In practice the competitively dominant species monopolizes the lower zone, restricting the weaker species to the upper zone — its **realized** niche. Remove the dominant competitor, and the weaker species expands downward toward its fundamental niche. The shrinkage from fundamental to realized niche is the *signature of competition* (−/−) acting in the community.
      `
    },
    {
      id: 'pcp4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Interactions & Niches
      `,
      exercise: {
        questions: [
          {
            question: 'A tick feeds on a deer\'s blood over several days, weakening the deer but not killing it. Using the sign convention, how should this interaction be classified?',
            options: [
              'Mutualism (+/+), because both organisms obtain something',
              'Parasitism (+/−), because the tick benefits while the deer is harmed',
              'Predation (+/−), because the tick consumes the deer',
              'Commensalism (+/0), because the deer is barely affected'
            ],
            correctAnswer: 1,
            explanation: 'The tick benefits (+) and the deer is harmed (−), and the parasite lives on a host it does not immediately kill — this is parasitism. The "predation" trap shares the same +/− signs, so it is tempting, but predation involves an organism killing and consuming prey outright; a tick is a parasite. "Commensalism (+/0)" is wrong because the deer IS harmed (loss of blood, disease risk), so its sign is −, not 0.'
          },
          {
            question: 'In a lab, two protist species each grow well alone on the same bacterial food source, but when cultured together one species consistently dies out. This result is the clearest demonstration of:',
            options: [
              'Mutualism between the two protists',
              'The competitive exclusion principle',
              'Resource partitioning allowing coexistence',
              'A predator-prey relationship between the protists'
            ],
            correctAnswer: 1,
            explanation: 'Two species using the same limiting resource cannot coexist; the superior competitor eliminates the other — the competitive exclusion principle. The trap "resource partitioning" is the opposite outcome: partitioning is the mechanism that ALLOWS coexistence by dividing the resource. Here no division occurred and one species was excluded, so it demonstrates exclusion, not partitioning.'
          },
          {
            question: 'A plant species can physiologically tolerate soils ranging from very dry to very wet, but in the field it is found only in wet soils because a competitor excludes it from drier sites. The dry-to-wet tolerance range represents its ___, and the wet-only field distribution represents its ___.',
            options: [
              'realized niche; fundamental niche',
              'fundamental niche; realized niche',
              'habitat; niche',
              'keystone role; trophic level'
            ],
            correctAnswer: 1,
            explanation: 'The full physiological range it COULD use is the fundamental niche; the narrower range it ACTUALLY occupies under competition is the realized niche. The reversed option is the trap — remember the realized niche is the smaller, real-world subset carved out by interactions, so the broad potential range must be the fundamental niche.'
          }
        ]
      }
    },
    {
      id: 'pcp4-keystone',
      type: 'text' as const,
      content: `
### Keystone Species and Trophic Cascades

Not every species affects a community equally. A **keystone species** has an impact on community structure far out of proportion to its abundance. Like the keystone of an arch, removing it causes the whole structure to collapse, often triggering a sharp drop in diversity.

- **Pisaster sea stars** (Paine's classic experiment): this predatory sea star preferentially eats mussels. When researchers removed *Pisaster* from rocky intertidal plots, mussels outcompeted everything else and species richness fell from about 15 species to roughly 8. The sea star's predation had been keeping a dominant competitor in check.
- **Sea otters** control sea urchins; without otters, urchins overgraze and destroy kelp forests.

#### Trophic cascades

A **trophic cascade** is the chain of indirect effects that ripples down through trophic levels when a top consumer is added or removed. The reintroduction of **gray wolves to Yellowstone** is the canonical case:

| Step | Effect |
|---|---|
| Wolves return (top predator) | Elk numbers drop and elk avoid open valleys |
| Reduced elk browsing | Willows and aspen recover along streams |
| Vegetation rebounds | Beavers, songbirds, and stabilized riverbanks return |

Notice the pattern: the predator's effect "cascades" downward to organisms it never directly touches. A keystone predator can thus **increase** plant abundance two links away by suppressing herbivores — an indirect, top-down effect.

> **Distinguish keystone from dominant.** A *dominant* species exerts its influence through sheer biomass or abundance (e.g., the most common tree in a forest). A *keystone* species is influential despite being relatively rare — its role, not its numbers, makes it pivotal.
      `
    },
    {
      id: 'pcp4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Keystones & Cascades
      `,
      exercise: {
        questions: [
          {
            question: 'After sea otters are hunted out of a coastal zone, sea urchin populations explode and graze the kelp forest down to bare rock, eliminating dozens of kelp-dependent species. Which concept set best explains this chain of events?',
            options: [
              'Commensalism between otters and kelp',
              'Loss of a keystone predator triggering a trophic cascade',
              'Density-independent regulation of the urchins',
              'Resource partitioning between urchins and kelp'
            ],
            correctAnswer: 1,
            explanation: 'Otters are a keystone predator; removing them releases urchins (their prey), whose overgrazing cascades down to destroy kelp and its dependents — a textbook trophic cascade. The trap "commensalism between otters and kelp" misclassifies the link: otters help kelp only INDIRECTLY (by eating urchins), and commensalism (+/0) describes a direct interaction, which this is not. The effect is an indirect, top-down cascade, not commensalism.'
          },
          {
            question: 'Two warbler species feed on insects in the SAME spruce trees but one forages mainly in the upper canopy and the other in the lower branches, allowing both to persist. This is the clearest example of:',
            options: [
              'Competitive exclusion eliminating one warbler',
              'Resource partitioning that reduces niche overlap and permits coexistence',
              'Mutualism between the two warbler species',
              'A predator-prey relationship between the warblers'
            ],
            correctAnswer: 1,
            explanation: 'Dividing the same resource (insects in the canopy) by foraging in different zones is resource partitioning, which shrinks niche overlap and lets competitors coexist. The trap "competitive exclusion" predicts the OPPOSITE outcome — one species driven out — but here BOTH persist precisely because partitioning prevented exclusion. Coexistence by niche division is the signature of partitioning, not exclusion.'
          },
          {
            question: 'A relatively rare predatory snail strongly controls the abundance of a competitively dominant barnacle on a rocky shore. If the snail were experimentally removed, the most likely outcome is:',
            options: [
              'Species richness increases as the barnacle is freed from predation',
              'Species richness decreases as the dominant barnacle monopolizes space',
              'No change, because the snail is too rare to matter',
              'The snail and barnacle were mutualists, so both decline'
            ],
            correctAnswer: 1,
            explanation: 'A keystone predator that suppresses a dominant competitor maintains diversity; removing it lets the barnacle monopolize space and crowd others out, lowering richness. The trap "no change because the snail is too rare" misunderstands the keystone concept — keystone influence comes from ECOLOGICAL ROLE, not abundance, so a rare species can have outsized, community-wide effects.'
          }
        ]
      }
    }
  ]
};
