export const bioSpeciationPart2Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 2 of 7 — Allopatric Speciation**

---

| Section |
|---------|
| How a physical barrier splits a gene pool |
| Concept Check: barriers and steps |
| Case studies: snapping shrimp and lab fruit flies |
| Calculate: a mating-preference test |
| What makes allopatric speciation likely, and what happens on reunion |
| AP-style check: evidence and secondary contact |
| Part 2 summary |

> 🔑 **Key Concept:** In **allopatric speciation** ("other homeland"), a **geographic barrier** physically separates a population into isolated groups. With gene flow cut off, natural selection, genetic drift and mutation change each group independently, and reproductive isolation evolves as a **by-product** of that divergence.

### The four steps

| Step | What happens | Evolutionary mechanism |
|------|--------------|------------------------|
| 1. Separation | A barrier divides one population into two | None yet; the barrier is physical |
| 2. No gene flow | Alleles can no longer move between the groups | Gene flow drops to zero |
| 3. Divergence | Allele frequencies change differently in each group | Natural selection (different environments), genetic drift (especially in small groups), new mutations |
| 4. Reproductive isolation | Mating signals, timing, anatomy or chromosomes no longer match | Isolation is a side effect of step 3, not a goal |

If the barrier later disappears and the groups meet but **cannot exchange genes**, speciation is complete.

### Two ways a population gets split

| Route | How the barrier arises | Examples |
|-------|------------------------|----------|
| **Vicariance** | The landscape changes and divides a population that was already there | A river changes course; mountains rise; a land bridge forms and splits a sea; rising sea level turns hilltops into islands |
| **Dispersal** | A few individuals cross an existing barrier and found a new population | Birds blown to a distant island; seeds rafting across a strait |

Dispersal often involves a **founder effect**: the small founding group carries only a sample of the parent population's alleles, so its allele frequencies differ from the start. Genetic drift then acts strongly in the small new population.

### A barrier is only a barrier for some organisms

Whether a feature isolates a population depends on how far and how easily the organisms move:

| Feature | Isolates... | Does not isolate... |
|---------|-------------|---------------------|
| A deep canyon | Small rodents and land snails | Most birds, flying insects, wind-dispersed pollen |
| A 1-km strait | Many land mammals and amphibians | Strong-swimming fish, flying bats |
| A dry valley between two mountaintops | Plants and animals adapted to cool, moist summits | Animals that travel easily across dry land |

So the same geographic event can start speciation in one species and have no effect on another.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Barriers and Steps** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Over thousands of years, a river cuts a deep canyon through the range of a ground squirrel and a hawk that hunts it. Which outcome is most likely?',
            options: [
              'Squirrels on the two rims diverge, but hawks keep sharing genes',
              'Hawks on the two rims diverge, but squirrels keep exchanging genes',
              'Squirrels and hawks on the two rims diverge at about the same rate',
              'Neither species diverges, since both still share one habitat type'
            ],
            correctAnswer: 0,
            explanation: 'The canyon blocks the movement of ground squirrels but not of flying hawks, so only the squirrel gene pool is split and free to diverge. Hawks cross easily and keep exchanging alleles, so equal divergence or divergence in hawks alone is not expected.'
          },
          {
            question: 'Which sequence correctly orders the events of allopatric speciation?',
            options: [
              'Barrier forms → gene flow stops → populations diverge → isolation evolves',
              'Barrier forms → isolation evolves → gene flow resumes → populations diverge',
              'Populations diverge → barrier forms → isolation evolves → gene flow stops',
              'Barrier forms → populations diverge → gene flow stops → isolation evolves'
            ],
            correctAnswer: 0,
            explanation: 'The physical barrier comes first and immediately stops gene flow; only then can the separated groups diverge, and reproductive isolation builds up as a result of that divergence. Isolation cannot evolve before divergence, and populations sharing genes cannot diverge much before the barrier forms.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p2-s3-cases',
      type: 'text' as const,
      content: `
### Case study 1: snapping shrimp and the Isthmus of Panama

About 3 million years ago, the Isthmus of Panama rose and closed the seaway between the Pacific Ocean and the Caribbean Sea. Marine populations that had been continuous were suddenly split.

- Biologists studied **snapping shrimp** (genus *Alpheus*) and found **15 pairs of species**. In each pair, one species lives on the Pacific side and one on the Caribbean side.
- DNA comparisons show that the **closest relative** of each Pacific species is a Caribbean species just across the isthmus, not another Pacific species.
- When males and females from a pair are put together in the lab, they rarely mate.

**Reasoning:** The pattern of sister species on opposite sides of one barrier is exactly what allopatric speciation predicts. The barrier split each ancestral species, and the two halves became reproductively isolated during roughly 3 million years apart.

### Case study 2: fruit flies on different diets (a lab model)

Can reproductive isolation really arise as a **side effect** of adapting to different environments? Diane Dodd tested this with the fruit fly *Drosophila pseudoobscura*.

**Design**
1. She divided one laboratory population into several groups.
2. Some groups were raised on a **starch** medium and others on a **maltose** medium. No gene flow occurred between groups.
3. After about a year (roughly 40 generations), natural selection had changed the groups' ability to digest their own food.
4. She then offered flies a choice of mates from the starch and maltose groups and counted the matings.

**Results (adapted from Dodd, 1989)**

| Pairing | Number of matings |
|---------|-------------------|
| Starch female x starch male | 22 |
| Maltose female x maltose male | 20 |
| Starch female x maltose male | 9 |
| Maltose female x starch male | 8 |

#### Worked example: reading the table

1. **Same-medium matings:** 22 + 20 = **42**.
2. **Different-medium matings:** 9 + 8 = **17**.
3. **Total:** 42 + 17 = **59**.
4. **Percent same-medium:** 42 ÷ 59 x 100 ≈ **71%**.
5. **Expected with random mating:** about **50%**, because equal numbers of each type were offered.
6. **Conclusion:** Flies preferred mates from their own diet group. A **prezygotic (behavioral) barrier** had begun to form, even though nobody selected for mate choice. It arose as a by-product of adapting to different food.

**Control:** When groups raised separately on the **same** medium were tested against each other, flies showed no strong preference. This rules out "simply being kept apart" as the cause and points to the different diets.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p2-s4-input',
      type: 'input-boxes' as const,
      content: `**Calculate — A Mating-Preference Test** 🧮

A student repeats the diet experiment with two groups of flies kept apart for 50 generations, one on a corn medium and one on a rice medium. Equal numbers of each type are offered as mates. She records **40** same-medium matings and **10** different-medium matings.`,
      exercise: {
        questions: [
          {
            question: 'How many matings did she observe in total?',
            answer: '50',
            acceptableAnswers: ['50 matings'],
            explanation: 'Total = 40 same-medium + 10 different-medium = 50 matings.'
          },
          {
            question: 'What percent of the matings were between flies from the same medium? (number only)',
            answer: '80',
            acceptableAnswers: ['80%', '80 percent'],
            explanation: '40 ÷ 50 x 100 = 80%, well above the 50% expected if mating were random with respect to medium.'
          },
          {
            question: 'What percent of matings would be expected to be same-medium if flies mated at random? (number only)',
            answer: '50',
            acceptableAnswers: ['50%', '50 percent'],
            explanation: 'With equal numbers of each type and no preference, half of all matings should pair flies from the same medium.'
          }
        ],
        hint1: 'Add the two kinds of matings to get the total.',
        hint2: 'Percent = part ÷ total x 100.',
        hint3: 'With two equally common types and random mating, same-type and different-type pairings are equally likely.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p2-s5-conditions',
      type: 'text' as const,
      content: `
### What makes allopatric speciation more likely?

| Factor | Why it speeds divergence |
|--------|--------------------------|
| **Small isolated population** | Genetic drift and founder effects change allele frequencies quickly |
| **Different environment from the parent population** | Natural selection favors different traits on each side of the barrier |
| **Long separation** | More time for mutations, drift and selection to accumulate differences |
| **Low dispersal ability** | The barrier stays effective; migrants rarely cross |

This is why **islands** and isolated habitats (lakes, mountaintops, caves) are hot spots of speciation. The Galápagos and Hawaiian archipelagos have many species found nowhere else.

**Separation is not the same as speciation.** If two groups are reunited before they have diverged much, they simply interbreed and merge back into one gene pool. Geographic isolation sets the stage; it does not guarantee a new species.

### Secondary contact: what happens when the barrier disappears?

| Degree of isolation when groups meet | What happens | Result |
|-------------------------------------|--------------|--------|
| Complete | The groups do not exchange genes | Two species living side by side |
| Partial, and hybrids have low fitness | Selection favors individuals that mate only with their own type, strengthening prezygotic barriers (called **reinforcement**) | Isolation becomes complete |
| Partial, and hybrids have normal fitness | Gene flow resumes and erases differences (**fusion**) | The groups merge into one species |
| Partial, hybrids common in a narrow band | A **hybrid zone** forms where the ranges meet | Two species with limited gene exchange at the border |

#### Worked example: reinforcement

Two bird populations were separated by a glacier and met again when it melted. Hybrids form but few survive to breed. A female that mates with a male of her own type leaves more surviving offspring than a female that mates with the other type. Over generations, alleles for choosing same-type mates increase in frequency, and the plumage of males in the overlap zone becomes **more** different between the two groups than it is far from the overlap. Selection against hybrids has completed the job that geography started.

> 🔑 **AP Connection:** In a free-response question about allopatric speciation, name (1) the **barrier** that stopped gene flow, (2) the **mechanism** of divergence (selection in different environments, drift in a small population, or mutation), and (3) the **reproductive barrier** that now keeps the groups apart.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p2-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Evidence and Secondary Contact** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Researchers hypothesize that the rise of the Isthmus of Panama caused speciation in many marine animals. Which finding about snapping shrimp would most strongly support this hypothesis?',
            options: [
              'Shrimp on both coasts live at similar water depths and temperatures',
              'The closest relative of each Pacific species lives on the Caribbean side',
              'The Pacific side holds more shrimp species than the Caribbean side',
              'Shrimp on both coasts use their claws to stun prey in the same way'
            ],
            correctAnswer: 1,
            explanation: 'If one ancestral species was split by the isthmus, its two descendants should be each other\'s closest relatives and sit on opposite sides of the barrier. Similar habitats, similar hunting behavior or a difference in species number do not link the splits to the isthmus.'
          },
          {
            question: 'Two populations of a frog were separated by a mountain range for 200,000 years. Erosion now lets them meet. Hybrids form, but most die as tadpoles. Which change is most likely over the next many generations?',
            options: [
              'Selection will favor frogs that mate with the other population',
              'Hybrid tadpoles will grow tougher by struggling to survive',
              'Selection will favor frogs that mate only with their own type',
              'Selection will favor the hybrids and fuse the two gene pools'
            ],
            correctAnswer: 2,
            explanation: 'When hybrids die, frogs that choose same-type mates leave more surviving offspring, so alleles for that preference spread and prezygotic isolation is reinforced. Mating with the other population would waste offspring, hybrids are selected against rather than favored, and tadpoles cannot pass on toughness gained during their lives.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p2-s7-summary',
      type: 'text' as const,
      content: `
### Part 2 Summary

| Concept | Key detail |
|---------|-----------|
| Allopatric speciation | A geographic barrier splits a population and stops gene flow |
| Vicariance vs. dispersal | The landscape divides a population, or a few individuals colonize a new place |
| Divergence | Selection, drift and mutation act separately in each group |
| Reproductive isolation | Evolves as a by-product of divergence (Dodd's fruit flies) |
| Evidence | Sister species on opposite sides of a barrier (snapping shrimp) |
| Secondary contact | Reinforcement, fusion or a hybrid zone, depending on hybrid fitness |

**Up next → Part 3: Sympatric Speciation**, where new species arise with no geographic barrier at all.
      `
    }
  ]
};
