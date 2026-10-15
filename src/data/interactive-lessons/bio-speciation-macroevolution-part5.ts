export const bioSpeciationPart5Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 5 of 7 — Macroevolution Patterns**

---

| Section |
|---------|
| Tempo: gradualism vs. punctuated equilibrium |
| Concept Check: reading tempo from fossil data |
| Divergent evolution and adaptive radiation |
| Calculate: diversity as speciation minus extinction |
| Extinction: background, mass and human-caused |
| AP-style check: extinction and radiation |
| Part 5 summary and misconceptions |

> 🔑 **Key Concept:** Over long time scales, the **diversity of life** is set by two rates: how fast new species form (**speciation**) and how fast species disappear (**extinction**). Speciation can be slow and steady or rapid after long stasis, it is especially fast during **adaptive radiations** when new habitats open up, and extinctions, including mass extinctions, open those habitats.

### Two tempos of evolution

| Model | Pattern in the fossil record | What the trait-vs-time graph looks like |
|-------|------------------------------|-----------------------------------------|
| **Gradualism** | Species change slowly and steadily over hundreds of thousands or millions of years | A smooth, steady slope: the trait changes a little in every time interval |
| **Punctuated equilibrium** | Long periods of little change (**stasis**) are interrupted by short bursts of rapid change, often at speciation | A "staircase": flat for millions of years, a near-vertical jump, then flat again |

"Rapid" means rapid on a **geological** scale. A change that takes 50,000 years looks instantaneous in rock layers that each represent hundreds of thousands of years.

#### Worked example: reading two fossil graphs

**Lineage A (a marine snail).** A graph plots average shell length (mm) against time:
- 9 to 6 million years ago (mya): shell length stays near **20 mm**.
- Around 6 mya: within about 50,000 years, shell length shifts to **30 mm**, and the new form appears alongside the old one.
- 6 mya to 1 mya: shell length stays near **30 mm**.

Interpretation: long stasis, a geologically sudden shift associated with the appearance of a new form, then stasis again. This is **punctuated equilibrium**.

**Lineage B (a grazing mammal).** A graph plots average tooth height (mm) against time:
- From 10 mya to 2 mya, tooth height rises from **12 mm to 28 mm**, about 2 mm per million years, with no long flat stretches.

Interpretation: a steady slope across 8 million years. This is **gradualism**.

#### Why might punctuated patterns be common?

1. New species often form in **small, isolated populations** (Parts 2 and 3), where selection and drift can change traits quickly.
2. Small populations leave **few fossils**, so the transition is rarely captured.
3. Once a species is well adapted to a stable environment, **stabilizing selection** can hold its traits nearly constant for millions of years.

Both tempos occur in nature. The AP exam expects you to recognize each from a description or graph, not to declare one "correct."
      `
    },
    {
      id: 'bio-speciation-macroevolution-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Reading Tempo from Fossil Data** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a lineage of fossil brachiopods, shell width stays near 15 mm for 4 million years, shifts to 22 mm over about 30,000 years, and then stays near 22 mm for the next 3 million years. Which pattern of evolution does this record show?',
            options: [
              'Punctuated equilibrium',
              'Gradualism',
              'Convergent evolution',
              'Adaptive radiation'
            ],
            correctAnswer: 0,
            explanation: 'Long periods of stasis broken by a geologically brief shift form the staircase pattern of punctuated equilibrium. Gradualism would show steady change throughout, and convergent evolution describes unrelated lineages becoming similar, not the tempo of change in one lineage.'
          },
          {
            question: 'A graph of average body length in a fossil fish lineage rises at a nearly constant rate from 30 cm to 45 cm across 6 million years, with no long flat stretches. Which interpretation is best supported?',
            options: [
              'Long stasis in the lineage was broken by brief bursts of change',
              'Body length changed slowly and steadily, as gradualism predicts',
              'The lineage split into many species when a new habitat opened',
              'Unrelated fish lineages evolved similar body lengths over time'
            ],
            correctAnswer: 1,
            explanation: 'A steady slope with no flat stretches is the signature of gradualism: small changes accumulating in every interval. The data show no stasis or bursts, give no evidence of many new species, and come from one lineage rather than unrelated ones.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p5-s3-radiation',
      type: 'text' as const,
      content: `
### Divergent evolution and adaptive radiation

**Divergent evolution** occurs when related populations adapt to **different** habitats or ways of life and their phenotypes diversify. When divergence happens many times in a short period from one ancestor, the result is an **adaptive radiation**: the rapid evolution of many species, each adapted to a different niche.

The CED notes that speciation rates can be **especially rapid during adaptive radiations, as new habitats become available**. Habitats become available in three main ways:

| Trigger | How it opens new niches | Example |
|---------|-------------------------|---------|
| **Colonizing a new place** | Few competitors or predators on a new island or lake | Galápagos finches; Hawaiian silverswords |
| **Extinction of other groups** | A mass extinction empties niches that survivors can fill | Mammals after the extinction of the non-avian dinosaurs |
| **A new trait (key innovation)** | A new ability lets a lineage use resources others cannot | The evolution of flight in insects; seeds in plants |

#### Case: Hawaiian silverswords

- The Hawaiian Islands formed by volcanic activity far from any continent.
- Molecular evidence indicates that the roughly 30 silversword species descend from a single ancestral tarweed that reached Hawaii from North America, probably as a seed carried by a bird.
- The descendants now range from low cushion-shaped plants to shrubs, vines and tree-like forms, in habitats from wet forests to dry volcanic slopes.

#### Case: Galápagos finches

- A small founding population of finches reached the Galápagos from South America.
- Its descendants diverged into more than a dozen species whose beaks are adapted to different foods: large crushing beaks for hard seeds, slender probing beaks for insects, and others.

### Divergent vs. convergent evolution

| Feature | Divergent evolution | Convergent evolution |
|---------|---------------------|----------------------|
| Starting point | Closely related populations | Distantly related lineages |
| Direction | Become **more different** | Become **more similar** |
| Cause | Different environments or niches | Similar environments or niches |
| Structures produced | Homologous structures with different functions | **Analogous** structures with similar functions |
| Example | Finch beaks adapted to different foods | Wings of birds and bats; streamlined bodies of sharks and dolphins |

### Reading radiations on a phylogenetic tree

On a tree drawn with a **time axis**, an adaptive radiation appears as **many branch points clustered within a short time span** soon after a trigger (an island forming, a mass extinction). Branch points spread evenly through time suggest a steadier rate of speciation.

> 🔑 **AP Connection:** When explaining an adaptive radiation, connect three links: (1) a new habitat or empty niche became available, (2) populations faced different selection pressures in different niches, (3) divergence plus reproductive isolation produced many new species in a short time.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p5-s4-input',
      type: 'input-boxes' as const,
      content: `**Calculate — Diversity as Speciation Minus Extinction** 🧮

The number of species in a group changes by: **new species formed − species lost to extinction**.`,
      exercise: {
        questions: [
          {
            question: 'A lizard clade has 40 species. Over the next 2 million years, 15 new species arise and 6 species go extinct. How many species does the clade have at the end?',
            answer: '49',
            acceptableAnswers: ['49 species'],
            explanation: '40 + 15 − 6 = 49 species. Speciation outpaced extinction, so diversity rose.'
          },
          {
            question: 'During a mass extinction, a group of 80 marine species loses 60 species while 4 new species arise. How many species remain?',
            answer: '24',
            acceptableAnswers: ['24 species'],
            explanation: '80 − 60 + 4 = 24 species. Extinction far outpaced speciation.'
          },
          {
            question: 'In that same mass extinction, what percent of the original 80 species went extinct? (number only)',
            answer: '75',
            acceptableAnswers: ['75%', '75 percent'],
            explanation: '60 ÷ 80 x 100 = 75% of the original species were lost.'
          }
        ],
        hint1: 'Start with the original number of species, add new species, then subtract extinctions.',
        hint2: 'For the percent, divide the number of species lost by the original number, not the final number.',
        hint3: 'Percent lost = (species lost ÷ starting species) x 100.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p5-s5-extinction',
      type: 'text' as const,
      content: `
### Extinction throughout Earth's history

Extinction is a normal part of the history of life: the vast majority of species that have ever lived are now extinct. Biologists distinguish two scales:

| Kind | Rate | Typical causes |
|------|------|----------------|
| **Background extinction** | Low and fairly steady; species disappear one at a time | Local environmental change, competition, disease |
| **Mass extinction** | Very high; a large fraction of species is lost in a geologically short time, across many unrelated groups | Global environmental stress: rapid climate change, volcanic activity, asteroid impact, changes in ocean chemistry |

The CED's key point: **extinction rates can be rapid during times of ecological stress.**

#### The five largest mass extinctions (approximate)

| Event | About when | Leading hypotheses for the stress |
|-------|-----------|-----------------------------------|
| End-Ordovician | ~444 mya | Glaciation and falling sea level |
| Late Devonian | ~372 mya | Loss of oxygen in the oceans; climate change |
| **End-Permian** (largest) | **~252 mya** | Massive volcanic eruptions in Siberia → global warming, ocean acidification, low ocean oxygen; more than 90% of marine species lost |
| End-Triassic | ~201 mya | Massive volcanic eruptions as the supercontinent Pangaea broke apart |
| **End-Cretaceous** | **~66 mya** | An asteroid impact near the Yucatán Peninsula; about three-quarters of species lost, including all non-avian dinosaurs |

### Human activity and extinction

The CED states that **human activity can drive changes in ecosystems that cause extinctions**. Current extinction rates are estimated to be far above the background rate.

| Human-driven cause | How it causes extinction | Example |
|--------------------|--------------------------|---------|
| **Habitat destruction and fragmentation** | Removes the resources a species needs; splits populations into small, isolated groups | Clearing of tropical forests |
| **Invasive (introduced) species** | Introduced predators, competitors or pathogens that native species never evolved defenses against | The brown tree snake, accidentally brought to Guam, wiped out most of the island's native forest birds |
| **Overharvesting** | Hunting or fishing faster than populations can reproduce | The passenger pigeon, once in the billions, was hunted to extinction; the last one died in 1914 |
| **Pollution** | Toxins and nutrient runoff disrupt food webs and habitats | Murky, polluted water in Lake Victoria weakens color-based mate choice in cichlids |
| **Climate change** | Shifts temperature and rainfall faster than many species can adapt or move | Coral bleaching as oceans warm |

**Small populations are at greatest risk.** A small population has less genetic variation, suffers more from genetic drift and inbreeding, and can be wiped out by a single disease or disaster. Habitat fragmentation turns large populations into many small ones.

### Diversity = speciation − extinction

The CED states that the **amount of diversity in an ecosystem can be determined by the rate of speciation and the rate of extinction**:

- Speciation rate > extinction rate → diversity **increases**.
- Speciation rate = extinction rate → diversity stays **steady**.
- Extinction rate > speciation rate → diversity **decreases** (as in a mass extinction).

### Extinction opens the door to adaptive radiation

The CED also states that **extinction can make new environments available for adaptive radiation**. After the end-Cretaceous extinction removed the non-avian dinosaurs and many other groups, mammals, which had existed for well over 100 million years mostly as small animals, radiated into the empty niches. Within roughly 15 million years, early members of the lineages leading to whales, bats, primates and hoofed mammals had appeared.

Extinction and speciation are linked: a mass extinction lowers diversity sharply, then the survivors' radiations rebuild it, usually with different dominant groups.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p5-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Extinction and Radiation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Fossil evidence shows that mammals existed for more than 100 million years as mostly small animals, then diversified rapidly into many large-bodied forms after the end-Cretaceous mass extinction. Which explanation is best supported?',
            options: [
              'The extinction emptied niches that surviving mammals could then fill',
              'Mammals first evolved after the extinction and spread over the land',
              'Mammals developed new traits during their lives to fill the gaps left',
              'The asteroid impact raised mutation rates in mammals above other groups'
            ],
            correctAnswer: 0,
            explanation: 'Removing the non-avian dinosaurs and other groups opened niches, and natural selection in those new niches drove the adaptive radiation of surviving mammals. Mammals predate the extinction, traits gained during a lifetime are not inherited, and there is no evidence that the impact raised mammal mutation rates.'
          },
          {
            question: 'For the last 5 million years, a family of freshwater mussels has had a speciation rate of 0.2 new species per species per million years and an extinction rate of 0.5. Habitat loss is continuing. Which prediction is best supported?',
            options: [
              'Diversity in the family will rise as new species replace extinct ones',
              'Diversity in the family will decline as extinctions outpace speciation',
              'Diversity in the family will stay constant as long as speciation continues',
              'Diversity in the family will rise once habitat loss forces rapid adaptation'
            ],
            correctAnswer: 1,
            explanation: 'Diversity changes by speciation minus extinction, and here extinction (0.5) exceeds speciation (0.2), so the number of species falls. Speciation still happening does not keep diversity constant or rising, and habitat loss does not force adaptive change on demand.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p5-s7-summary',
      type: 'text' as const,
      content: `
### Part 5 Summary

| Concept | Key detail |
|---------|-----------|
| Gradualism | Slow, steady change over hundreds of thousands to millions of years |
| Punctuated equilibrium | Long stasis interrupted by rapid change |
| Divergent evolution | Related populations adapt to different habitats and diversify |
| Adaptive radiation | Rapid speciation when new habitats become available |
| Mass extinction | Rapid loss of many species during ecological stress (end-Permian ~252 mya; end-Cretaceous ~66 mya) |
| Human impact | Habitat loss, invasive species, overharvesting, pollution, climate change |
| Diversity | Set by speciation rate minus extinction rate |

### Common misconceptions in this topic

- **"Evolution always proceeds slowly and steadily."** Fossils show both gradual change and long stasis broken by rapid change.
- **"Organisms evolve because they need to."** Populations change only when heritable variation already exists and selection acts on it; individuals do not develop new traits on demand.
- **"Extinction means a species was poorly designed."** Most species that went extinct in mass extinctions were well adapted to conditions that then changed suddenly.
- **"Mammals replaced dinosaurs by outcompeting them."** Mammals coexisted with dinosaurs for over 100 million years; the extinction, not competition, opened the niches.
- **"Speciation stops in a mass extinction."** Speciation continues, but extinction outpaces it, so diversity falls.

**Up next → Part 6: Problem-Solving Workshop**, where you will use the whole topic on AP-style scenarios, data and experiments.
      `
    }
  ]
};
