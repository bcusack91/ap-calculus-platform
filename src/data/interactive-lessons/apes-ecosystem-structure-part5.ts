export const apesEcosystemStructurePart5Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesecos5-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 5 of 7 — Species Interactions and Common Misconceptions**

---

| Section |
|---------|
| 📖 How Species Interact |
| Competition and Resource Partitioning |
| Misconceptions That Cost Points |

> 🔑 **Key Concept:** Food webs show **who eats whom**, but species also compete, cooperate and live on one another. CED Topic 1.1 asks you to classify these interactions and explain how competing species manage to coexist. The second half of this part lists the errors students most often make across the whole ecosystem-structure topic.
      `
    },
    {
      id: 'apesecos5-interactions',
      type: 'text' as const,
      content: `
## 📖 How Species Interact

Ecologists summarize each interaction by its effect on each partner: **+** (benefits), **−** (harmed) or **0** (unaffected).

| Interaction | Effect (species A / species B) | Example |
|---|---|---|
| **Predation** | + / − | A lynx kills and eats a snowshoe hare |
| **Herbivory** | + / − | A deer browses a sapling (the plant is usually not killed) |
| **Parasitism** | + / − | A tick feeds on a deer's blood; the host usually survives |
| **Mutualism** | + / + | Reef-building coral and zooxanthellae algae: the algae get shelter, the coral gets sugars from photosynthesis |
| **Commensalism** | + / 0 | Barnacles riding on a gray whale gain access to food-rich water; the whale is essentially unaffected |
| **Competition** | − / − | Lions and hyenas competing for the same prey |

### Distinguishing the look-alikes

- **Predation vs. parasitism:** a predator usually kills its prey quickly and eats many prey over its life. A parasite usually lives on or in one host for a long time and seldom kills it outright.
- **Mutualism vs. commensalism:** ask whether the second partner gains anything. Mycorrhizal fungi get sugar from plant roots and give back water and phosphorus, so that is mutualism. An orchid perched on a tree branch gains light while the tree is unaffected, so that is commensalism.
- **Competition** harms both species because each one reduces the resource available to the other.

> 🔑 **AP Connection:** AP questions often describe an interaction in a sentence and ask you to name it. Decide the effect on **each** species separately, write the +/− pair, and the name follows.
      `
    },
    {
      id: 'apesecos5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Cattle egrets follow grazing cattle and eat the insects the cattle stir up from the grass. The cattle are neither helped nor harmed. Which interaction is this?',
            options: [
              'Mutualism',
              'Commensalism',
              'Parasitism',
              'Competition'
            ],
            correctAnswer: 1,
            explanation: 'The egrets benefit and the cattle are unaffected, a + / 0 pair, which defines commensalism. Mutualism would require the cattle to benefit as well.'
          },
          {
            question: 'Coral polyps house zooxanthellae algae in their tissues. When ocean water becomes too warm, the coral expels the algae and often starves. What does this outcome show about the original relationship?',
            options: [
              'It was parasitism, because the algae had been draining the coral of nutrients',
              'It was mutualism, because the coral depended on sugars from the algae',
              'It was commensalism, because only the algae gained shelter from the coral',
              'It was competition, because both species needed the same dissolved nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'The coral starves without the algae, which shows the coral had been benefiting from their photosynthetic sugars, while the algae benefit from shelter. A + / + relationship is mutualism.'
          },
          {
            question: 'A biologist wants to classify an interaction as parasitism rather than predation. Which observation best supports parasitism?',
            options: [
              'The consumer kills each of its food organisms within minutes of capture and then moves on',
              'The consumer feeds on a single living host for weeks, usually without killing it',
              'The consumer eats only plant tissue and never feeds on animals of any kind',
              'The consumer and its food organism both benefit from the long-term contact'
            ],
            correctAnswer: 1,
            explanation: 'Parasites typically live on or in one host for an extended time and seldom kill it outright, while predators usually kill their prey quickly. Mutual benefit would make the interaction mutualism instead.'
          }
        ]
      }
    },
    {
      id: 'apesecos5-partitioning',
      type: 'text' as const,
      content: `
## Competition and Resource Partitioning

The **competitive exclusion principle** states that two species cannot coexist indefinitely if they depend on exactly the same limiting resource in the same way. One will eventually outcompete the other. Yet ecosystems contain many species with overlapping diets. They coexist through **resource partitioning**: dividing a shared resource so that each species uses a different part of it.

| Type of partitioning | How the resource is divided | Example |
|---|---|---|
| **Temporal** | By time | Hawks and owls both hunt rodents, but hawks hunt by day and owls by night |
| **Spatial** | By location | Several warbler species feed on insects in the same spruce trees, but each forages in a different zone of the tree (tips, inner branches, lower trunk) |
| **Morphological** | By body features | Galápagos finch species with different beak sizes eat seeds of different sizes |

Plants partition too: shallow-rooted grasses and deep-rooted shrubs draw water from different soil depths in the same field.

### Why it matters

Resource partitioning **reduces competition**, which allows **more species** to share a habitat. That raises biodiversity and adds connections to the food web, making it more resilient.
      `
    },
    {
      id: 'apesecos5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify It** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bats and swallows both eat flying insects over a pond, but swallows feed in daylight and bats at night. This is ___',
            options: ['temporal partitioning', 'spatial partitioning', 'morphological partitioning', 'competitive exclusion']
          },
          {
            label: 'Two barnacle species compete on a rocky shore, and one species is gradually eliminated from the zone where both once lived. This is ___',
            options: ['competitive exclusion', 'temporal partitioning', 'spatial partitioning', 'commensalism']
          },
          {
            label: 'A tapeworm living in a dog\'s intestine and absorbing its nutrients has a ___ relationship with the dog',
            options: ['parasitic', 'predatory', 'mutualistic', 'commensal']
          }
        ],
        correctAnswers: ['temporal partitioning', 'competitive exclusion', 'parasitic'],
        hint1: 'They share a place and a food but not a time.',
        hint2: 'One competitor wins and the other disappears.',
        hint3: 'One partner benefits, the other is harmed, and the host is not killed quickly.',
        explanation: 'Feeding at different times of day is temporal partitioning. Elimination of one competitor is competitive exclusion. A tapeworm benefits while harming a host it lives inside for a long time, which is parasitism.'
      }
    },
    {
      id: 'apesecos5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions That Cost Points

| Misconception | Correction |
|---|---|
| "Energy cycles through the ecosystem." | **Energy flows one way** and leaves as heat. **Matter** (carbon, nitrogen, phosphorus) cycles. |
| "Exactly 10% passes to the next level." | 10% is an **average**; real efficiencies run from roughly 5% to 20%. Use the value the question gives. |
| "Decomposers sit at the top of the food chain." | Decomposers receive dead matter from **every** level, not just the top. |
| "Arrows show who eats whom, so they point at the prey." | Arrows point **toward the eater**, the direction energy moves. |
| "An inverted biomass pyramid breaks the 10% rule." | Biomass is a snapshot. The **energy** pyramid for the same system is still upright. |
| "Herbivores can use all of the GPP." | Consumers can use only **NPP**; producers spend the rest on respiration. |
| "Removing a predator always helps the ecosystem." | It often triggers a **trophic cascade** that harms producers and habitat. |

### Worked Example: Spot the Error

A student is asked how much energy reaches the **secondary** consumers if producers fix 60,000 kcal. The student writes:

$$60{,}000 \\times 0.1 \\times 0.1 \\times 0.1 = 60\\ \\text{kcal}$$

❌ Incorrect.

**Diagnosis.** Secondary consumers are level 3. From level 1 to level 3 is **two** transfers, not three. The student counted levels instead of transfers.

**Correct work.**

$$60{,}000 \\times 0.1 \\times 0.1 = 600\\ \\text{kcal}$$

✅ Correct.

Rule: number of transfers = (higher level) − (lower level).
      `
    },
    {
      id: 'apesecos5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two species of anole lizards live on the same islands. One perches and hunts on tree trunks near the ground, the other high in the canopy. How does this behavior affect the community?',
            options: [
              'It reduces competition, allowing both species to persist in the same habitat',
              'It raises competition, because the lizards now meet more often in the canopy',
              'It forms a mutualism, because each lizard species benefits the other directly',
              'It causes competitive exclusion, because one species must abandon the islands'
            ],
            correctAnswer: 0,
            explanation: 'Using different heights in the trees is spatial resource partitioning, which lowers competition so both species can coexist. Neither lizard benefits the other, so the relationship is not mutualism.'
          },
          {
            question: 'Which statement about energy and matter in an ecosystem is accurate?',
            options: [
              'Both energy and matter cycle between organisms and the environment',
              'Energy flows through and leaves as heat, while matter is recycled',
              'Matter flows through and leaves as heat, while energy is recycled',
              'Both energy and matter flow one way and leave the ecosystem as heat'
            ],
            correctAnswer: 1,
            explanation: 'Energy enters as sunlight and leaves as heat, so it must be continuously replaced. Atoms of carbon, nitrogen and phosphorus are reused over and over through the biogeochemical cycles.'
          },
          {
            question: 'Producers fix 40,000 kcal. A student calculates the energy reaching the tertiary consumers as 4 kcal. What should the correct answer be under the 10% rule?',
            options: [
              '400 kcal',
              '40 kcal',
              '4,000 kcal',
              '4 kcal'
            ],
            correctAnswer: 1,
            explanation: 'Tertiary consumers are level 4, three transfers above producers: 40,000 × 0.1³ = 40 kcal. The student multiplied by 0.1 four times, counting levels instead of transfers.'
          }
        ]
      }
    },
    {
      id: 'apesecos5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Predation, herbivory, parasitism | + / − |
| Mutualism | + / + |
| Commensalism | + / 0 |
| Competition | − / − |
| Competitive exclusion | Two species cannot share exactly the same limiting resource indefinitely |
| Resource partitioning | Temporal, spatial or morphological division of a resource; reduces competition and raises diversity |
| Transfers | Number of transfers = higher level − lower level |

**Next:** Part 6 puts all of Parts 1–5 to work on AP-style multiple-choice and free-response practice.
      `
    }
  ]
};
