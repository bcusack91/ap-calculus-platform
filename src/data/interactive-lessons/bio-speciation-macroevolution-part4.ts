export const bioSpeciationPart4Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 4 of 7 — Reproductive Isolation**

---

| Section |
|---------|
| The eight barriers, in the order they act |
| Concept Check: naming the barrier |
| Why the timing of a barrier matters |
| Classify: barriers in plants and animals |
| A step-by-step method for classifying any scenario |
| AP-style check: barriers and selection |
| Part 4 summary |

> 🔑 **Key Concept:** **Reproductive isolating barriers** keep species from exchanging genes. **Prezygotic** barriers act **before a zygote forms**: they stop mating or fertilization. **Postzygotic** barriers act **after a hybrid zygote forms**: the hybrid dies, is sterile, or its offspring fail.

### The barriers in the order they act

Picture the path from "two individuals in the same region" to "fertile grandchildren." Each barrier blocks one step on that path.

| # | Barrier | Type | What fails | Classic example |
|---|---------|------|-----------|-----------------|
| 1 | **Habitat isolation** | Prezygotic | The species live in different habitats in the same area and rarely meet | Two garter snake species in one region: one lives mainly in water, the other mainly on land |
| 2 | **Temporal isolation** | Prezygotic | The species breed at different times of day, season or year | Eastern spotted skunks breed in late winter; western spotted skunks breed in late summer |
| 3 | **Behavioral isolation** | Prezygotic | Courtship signals or rituals are not recognized | Blue-footed boobies mate only after a high-stepping display of their blue feet; eastern and western meadowlarks respond to their own songs |
| 4 | **Mechanical isolation** | Prezygotic | Reproductive structures are physically incompatible | Snails whose shells coil in opposite directions cannot align their genital openings |
| 5 | **Gametic isolation** | Prezygotic | Sperm and egg meet but cannot fuse | Red and purple sea urchins release gametes into the same water, but egg-surface proteins do not recognize the other species' sperm |
| 6 | **Reduced hybrid viability** | Postzygotic | The hybrid fails to develop or survives poorly | Some *Ensatina* salamander forms interbreed, but most hybrids die during development or are frail |
| 7 | **Reduced hybrid fertility** | Postzygotic | The hybrid survives but is sterile | A horse (2n = 64) x donkey (2n = 62) cross gives a healthy but sterile mule (2n = 63) |
| 8 | **Hybrid breakdown** | Postzygotic | First-generation hybrids are fertile, but their offspring are feeble or sterile | Strains of cultivated rice: F1 hybrids are vigorous and fertile, but many F2 plants are small and sterile |

#### Memory aid

The prezygotic barriers follow the order of meeting, mating and fertilizing:

- **Where?** Habitat
- **When?** Temporal
- **How do they court?** Behavioral
- **Do the parts fit?** Mechanical
- **Do the gametes fuse?** Gametic

The postzygotic barriers follow the life of the hybrid: **does it live** (viability), **can it reproduce** (fertility), **can its offspring reproduce** (breakdown)?
      `
    },
    {
      id: 'bio-speciation-macroevolution-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Naming the Barrier** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two species of sea star release eggs and sperm into the same water during the same week. Sperm of one species cannot bind to the eggs of the other. Which barrier is acting?',
            options: [
              'Gametic isolation',
              'Mechanical isolation',
              'Temporal isolation',
              'Reduced hybrid viability'
            ],
            correctAnswer: 0,
            explanation: 'The gametes meet but cannot fuse, which is gametic isolation. The species spawn at the same time, so temporal isolation is ruled out; no mating structures are involved, so it is not mechanical; and no hybrid zygote forms, so reduced hybrid viability cannot apply.'
          },
          {
            question: 'Two cricket species live in the same field and are active on the same nights. Males of each species sing a distinct chirp pattern, and females move toward only the pattern of their own species. Which barrier keeps the species apart?',
            options: [
              'Habitat isolation',
              'Behavioral isolation',
              'Temporal isolation',
              'Reduced hybrid fertility'
            ],
            correctAnswer: 1,
            explanation: 'A courtship signal that only same-species females respond to is behavioral isolation. The crickets share a field and the same nights, which rules out habitat and temporal isolation, and no hybrids form, so hybrid fertility is not the issue.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p4-s3-timing',
      type: 'text' as const,
      content: `
### Why the timing of a barrier matters

Both kinds of barriers stop gene flow, but they differ in **cost** to the organisms:

| Barrier type | When it acts | Cost to the parents |
|--------------|--------------|---------------------|
| Prezygotic | Before fertilization | Low: no gametes or energy are spent on a hybrid |
| Postzygotic | After fertilization | High: eggs, sperm, parental care and time are invested in a hybrid that dies or cannot reproduce |

This difference explains **reinforcement** (introduced in Part 2). Where two species meet and their hybrids are unfit, an individual that avoids mating with the other species leaves more offspring than one that wastes matings on hybrids. Natural selection therefore **strengthens prezygotic barriers** in areas of overlap.

#### Worked example: barriers stack

Most pairs of species are kept apart by **several barriers at once**. Suppose two closely related fly species share a forest:

1. **Habitat:** They feed on different trees, so 80% of potential encounters never happen. 20% of encounters remain.
2. **Behavioral:** Of the encounters that do happen, half end without mating because the courtship songs differ. Now 20% x 0.5 = **10%** of potential matings occur.
3. **Reduced hybrid fertility:** Every hybrid that forms is sterile. **0%** of potential matings pass genes into the next generation of either species.

Even the leaky early barriers matter: they mean fewer resources wasted on hybrids. But it takes only **one complete barrier** to stop gene flow entirely.

### Barriers in plants

Plants cannot move to find mates, so their barriers often involve **pollen** and **pollinators**:

| Plant example | Barrier |
|---------------|---------|
| Two species grow in the same valley; one only in wet soil, one only on dry slopes | Habitat isolation |
| Two species flower in different months | Temporal isolation |
| A flower's shape lets only a hummingbird's bill reach the nectar; a related species' flower fits only a bee | Mechanical isolation |
| Pollen lands on the stigma of the other species but its pollen tube cannot grow down to the ovule | Gametic isolation |
| Hybrid seeds form but the seedlings die | Reduced hybrid viability |

> 🔑 **AP Connection:** The CED names these eight barriers, split into five prezygotic mechanisms (habitat, temporal, behavioral, mechanical, gametic) and three postzygotic mechanisms (reduced hybrid viability, reduced hybrid fertility, hybrid breakdown). Expect to name the barrier in a scenario **and** state whether it acts before or after the zygote forms.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p4-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify — Barriers in Plants and Animals** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Two orchid species bloom in the same meadow, one in April and one in July. This is _____.',
            options: ['temporal isolation', 'habitat isolation', 'gametic isolation', 'hybrid breakdown']
          },
          {
            label: 'Hybrid lizard embryos from two species stop developing before hatching. This is _____.',
            options: ['reduced hybrid viability', 'reduced hybrid fertility', 'mechanical isolation', 'hybrid breakdown']
          },
          {
            label: 'Two damselfly species attempt to mate, but the clasping organs of the male do not fit the female. This is _____.',
            options: ['mechanical isolation', 'behavioral isolation', 'gametic isolation', 'temporal isolation']
          },
          {
            label: 'Barriers that act after a hybrid zygote has formed are called _____ barriers.',
            options: ['postzygotic', 'prezygotic', 'geographic', 'gametic']
          }
        ],
        correctAnswers: ['temporal isolation', 'reduced hybrid viability', 'mechanical isolation', 'postzygotic'],
        hint1: 'First ask: did a zygote form? If not, the barrier is prezygotic.',
        hint2: 'Different months = different times; embryos dying = the hybrid does not survive.',
        hint3: 'Physical mismatch of reproductive structures is mechanical; anything after the zygote is postzygotic.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p4-s5-method',
      type: 'text' as const,
      content: `
### A step-by-step method for classifying any scenario

Work through these questions in order. The first "no" names the barrier.

| Step | Question | If the answer is "no"... |
|------|----------|--------------------------|
| 1 | Do the two species occupy the same habitat? | Habitat isolation |
| 2 | Are they ready to breed at the same time? | Temporal isolation |
| 3 | Do they recognize each other as mates? | Behavioral isolation |
| 4 | Do their reproductive structures fit? | Mechanical isolation |
| 5 | Can sperm fertilize the egg? | Gametic isolation |
| 6 | Does the hybrid survive to adulthood? | Reduced hybrid viability |
| 7 | Can the hybrid produce gametes? | Reduced hybrid fertility |
| 8 | Are the hybrid's offspring healthy and fertile? | Hybrid breakdown |

#### Worked example 1

*Two frog species live in the same pond. One breeds in early April, the other in late May.*

- Step 1: same pond, yes. Step 2: different breeding times, **no**.
- **Answer:** temporal isolation (prezygotic).

#### Worked example 2

*Two moth species mate readily in the lab, and the eggs hatch into healthy hybrid caterpillars that become adults. The hybrid adults produce no eggs or sperm.*

- Steps 1–6: yes (they mate, fertilize and survive). Step 7: no gametes, **no**.
- **Answer:** reduced hybrid fertility (postzygotic).

#### Worked example 3

*Two fish species share a reef and spawn on the same night. Females of each species ignore the courtship dances of males of the other species.*

- Steps 1–2: yes. Step 3: no mate recognition, **no**.
- **Answer:** behavioral isolation (prezygotic).

### Tricky distinctions

| Easily confused pair | How to tell them apart |
|----------------------|------------------------|
| Habitat vs. geographic separation | Habitat isolation happens **within one area**; a mountain range between populations is a geographic barrier (allopatry), not a reproductive barrier |
| Behavioral vs. mechanical | Behavioral: they **do not try** to mate. Mechanical: they **try** but the parts do not fit |
| Gametic vs. reduced hybrid viability | Gametic: **no zygote** forms. Viability: a zygote forms, then dies |
| Reduced hybrid fertility vs. hybrid breakdown | Fertility: the **first-generation** hybrid is sterile. Breakdown: the F1 is fertile but **later generations** fail |
      `
    },
    {
      id: 'bio-speciation-macroevolution-p4-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Barriers and Selection** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two grass species are crossed. The first-generation hybrids grow vigorously and produce seed, but most plants in the second generation are stunted and sterile. Which barrier is shown, and when does it act?',
            options: [
              'Reduced hybrid fertility, acting after zygotes form',
              'Hybrid breakdown, acting after hybrid zygotes form',
              'Gametic isolation, acting before zygotes form',
              'Reduced hybrid viability, acting before zygotes form'
            ],
            correctAnswer: 1,
            explanation: 'The F1 hybrids are healthy and fertile and the failure shows up only in the next generation, which is hybrid breakdown, a postzygotic barrier. Reduced hybrid fertility would make the F1 itself sterile, gametic isolation would prevent any zygote, and reduced hybrid viability acts after, not before, zygotes form.'
          },
          {
            question: 'Where the ranges of two toad species overlap, hybrids form but rarely survive. Biologists find that mating calls of the two species differ more inside the overlap zone than outside it. Which explanation is best supported?',
            options: [
              'Toads in the overlap learn new calls, and their offspring inherit them',
              'Calls differ more inside the overlap because hybrids sing in new ways',
              'Selection favored toads whose calls attracted only members of their own species',
              'Mutation rates are higher where the two species overlap than elsewhere'
            ],
            correctAnswer: 2,
            explanation: 'Because hybrids rarely survive, toads that attract only same-species mates leave more offspring, so selection reinforces call differences where the species meet. Learned calls are not inherited, hybrids rarely survive to sing, and nothing suggests the mutation rate differs between regions.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p4-s7-summary',
      type: 'text' as const,
      content: `
### Part 4 Summary

| Barrier | Type | One-line test |
|---------|------|---------------|
| Habitat | Prezygotic | Different places in the same area |
| Temporal | Prezygotic | Different breeding times |
| Behavioral | Prezygotic | Signals not recognized |
| Mechanical | Prezygotic | Parts do not fit |
| Gametic | Prezygotic | Sperm and egg cannot fuse |
| Reduced hybrid viability | Postzygotic | Hybrid dies or is frail |
| Reduced hybrid fertility | Postzygotic | Hybrid is sterile (mule) |
| Hybrid breakdown | Postzygotic | Hybrid's offspring fail |

Prezygotic barriers cost less, so where hybrids are unfit, selection can strengthen them (reinforcement).

**Up next → Part 5: Macroevolution Patterns**, where we zoom out to the tempo of speciation, adaptive radiations and extinctions across Earth's history.
      `
    }
  ]
};
