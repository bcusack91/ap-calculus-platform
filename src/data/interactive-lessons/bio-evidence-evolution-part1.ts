export const bioEvidencePart1Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 1 of 7 — The Fossil Record and Dating**

---

| Section |
|---------|
| Why evolution needs many lines of evidence |
| How fossils form, and why the record has gaps |
| Relative dating: reading rock layers |
| Absolute dating: radioactive decay and half-lives |
| Transitional fossils and geographic clues |

> 🔑 **Key Concept:** Fossils are direct physical evidence that the living world has changed over time. Their ages come from the order of rock layers, from the decay of radioactive isotopes, and from where the rocks and fossils are found.

### Evidence comes from many disciplines

Evolution is not supported by one experiment. It is supported by **independent kinds of data that all point to the same history**. The AP Biology framework names five broad sources:

| Kind of data | What it measures | Example in this topic |
|--------------|------------------|-----------------------|
| **Geological** | Rock layers and their ages | Fossils in older layers differ more from living species |
| **Physical** | Rates of radioactive decay | Carbon-14 and potassium-40 dating |
| **Geographical** | Where organisms and fossils occur | Island species resemble nearby mainland species |
| **Biochemical** | DNA and protein sequences | Shared gene sequences across species |
| **Mathematical** | Models and calculations | Half-life math, allele-frequency models |

The power of this evidence is **convergence**: a fossil's position in the rock, its radiometric age, its anatomy, and the DNA of its living relatives are measured by different methods, yet they tell a consistent story. Part 1 starts with the oldest line of evidence, the fossil record.
      `
    },
    {
      id: 'bio-evidence-evolution-p1-s2-fossils',
      type: 'text' as const,
      content: `
### How fossils form

A **fossil** is any preserved remnant or trace of a past organism: bones, shells, teeth, imprints of leaves, footprints, burrows, or even preserved molecules. Most fossils form in **sedimentary rock**:

1. An organism dies and is **buried quickly** by mud, sand, or volcanic ash, which slows scavenging and decay.
2. More sediment piles on top; pressure compacts the lower layers into rock.
3. Groundwater carries dissolved minerals into the remains, which may slowly **replace** the original tissue with stone.
4. Millions of years later, erosion or digging exposes the layer.

### Why the fossil record is incomplete

Fossilization is rare, so the record is a **biased sample** of past life:

| Bias | Consequence |
|------|-------------|
| Hard parts (shells, bones, teeth, wood) survive; soft tissue decays | Jellyfish, worms, and soft-bodied organisms are under-represented |
| Rapid burial is needed | Organisms in wet, sediment-rich places (seafloors, river deltas) fossilize more often than those in forests or on mountains |
| Rock is eroded, melted, or deeply buried | Whole time intervals are missing in many locations |
| Only exposed rock can be searched | Many fossils that exist have never been found |

> 🔑 **AP Connection:** A gap in the fossil record is a **missing observation**, not evidence against evolution. On the exam, if asked why an intermediate form has not been found, the strong answer is about the conditions fossilization requires, not "it never existed."

### Relative dating: the law of superposition

In undisturbed sedimentary rock, each new layer is deposited **on top of** the older one. This gives the **law of superposition**:

> Lower layers are older; higher layers are younger.

Relative dating tells you the **order** of events, not the number of years. A fossil in layer 2 (near the bottom) lived **before** a fossil in layer 6 (near the top).

**Index fossils** extend this across distances. An index fossil comes from a species that was **widespread** but existed for a **short span of time**. If two cliffs 500 km apart both contain the same index fossil, their layers are about the same age, so geologists can line up (correlate) rock sequences from different regions.

#### What the layers show

When biologists compare fossils from bottom to top in long rock sequences, three patterns repeat:

- Fossils in **deeper, older** layers are generally **less similar** to living species.
- Simpler forms of a group usually appear **before** more complex forms of the same group.
- Groups appear in a consistent order worldwide: for example, fish fossils appear in older rock than the earliest amphibian fossils, which appear before the earliest mammal fossils.

This ordering is exactly what descent with modification predicts. A single rabbit fossil in rock 500 million years old would contradict it, and no such out-of-order fossil has been found.
      `
    },
    {
      id: 'bio-evidence-evolution-p1-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Reading the Rock Record** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In an undisturbed sequence of sedimentary rock, fossils of species P occur only in layer 2 (near the bottom) and fossils of species Q occur only in layer 6 (near the top). Which conclusion is best supported?',
            options: [
              'Species Q is the direct descendant of species P',
              'Species P and Q lived at the same time in different habitats',
              'Species P lived earlier than species Q',
              'Species Q lived first and was later buried under species P'
            ],
            correctAnswer: 2,
            explanation: 'By the law of superposition, lower layers are older, so the layer-2 species lived earlier. Rock position alone gives order, not ancestry, so it cannot show that one species descended directly from the other.'
          },
          {
            question: 'Fossils of clams are far more common than fossils of jellyfish, even though both groups have lived in the oceans for hundreds of millions of years. Which explanation is best supported?',
            options: [
              'Hard shells resist decay long enough to be buried and mineralized',
              'Clams evolved earlier, so they have had more time to leave remains',
              'Jellyfish populations were always far smaller than clam populations',
              'Marine sediments preserve only animals that live on the seafloor'
            ],
            correctAnswer: 0,
            explanation: 'Fossilization favors hard parts such as shells, bones, and teeth, which survive long enough to be buried and replaced by minerals. Soft-bodied animals usually decay first, so their scarcity reflects preservation bias, not their true abundance.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p1-s4-dating',
      type: 'text' as const,
      content: `
### Absolute dating: radioactive decay

Relative dating gives order; **radiometric dating** gives an age in years. Some isotopes are unstable and decay into other elements at a constant rate that is not changed by temperature, pressure, or chemistry. That rate is described by the **half-life**: the time for **half** of the radioactive atoms in a sample to decay.

After each half-life, the amount remaining is cut in half:

| Half-lives elapsed | Fraction of parent isotope left | Percent left |
|--------------------|-------------------------------|--------------|
| 0 | 1 | 100% |
| 1 | 1/2 | 50% |
| 2 | 1/4 | 25% |
| 3 | 1/8 | 12.5% |
| 4 | 1/16 | 6.25% |

$$\\text{fraction remaining} = \\left(\\tfrac{1}{2}\\right)^{n} \\qquad \\text{age} = n \\times \\text{half-life}$$

### Choosing the right isotope

| Isotope | Half-life | Decays to | Best used for |
|---------|-----------|-----------|---------------|
| **Carbon-14** | 5,730 years | Nitrogen-14 | Once-living material (bone, wood, shell) up to about 50,000 years old |
| **Potassium-40** | about 1.25 billion years | Argon-40 | Volcanic rock, millions to billions of years old |

**Why carbon-14 works on organisms:** living things take in carbon (plants from atmospheric CO₂, animals by eating) and keep roughly the same ratio of carbon-14 to carbon-12 as the atmosphere. At death, intake stops and the carbon-14 already present decays. Measuring how much is left gives the time since death.

**Why carbon-14 fails for old fossils:** after about 9 half-lives (roughly 50,000 years), less than 0.2% of the original carbon-14 remains, which is too little to measure reliably. A 70-million-year-old dinosaur bone has gone through about 12,000 carbon-14 half-lives.

### Dating fossils that are millions of years old

Sedimentary rock itself is hard to date by radioactive decay, because its grains came from older rocks. Volcanic ash, however, crystallizes fresh when it erupts, so its potassium-40 "clock" starts at that moment. Geologists therefore **bracket** a fossil:

- An ash layer **below** the fossil gives a **maximum** age (the fossil is younger).
- An ash layer **above** the fossil gives a **minimum** age (the fossil is older).

### Worked Example 1 — Carbon-14

A piece of charcoal from an ancient campfire contains **25%** of the carbon-14 found in living wood. How old is it?

- 100% → 50% is one half-life; 50% → 25% is a second.
- $n = 2$, so age $= 2 \\times 5{,}730 = 11{,}460$ years.

### Worked Example 2 — Bracketing with potassium-40

A fossil jaw lies between two ash layers. The lower ash is dated at 3.4 million years and the upper ash at 3.1 million years.

- Lower layer is older and sets the maximum: 3.4 million years.
- Upper layer is younger and sets the minimum: 3.1 million years.
- The fossil is **between 3.1 and 3.4 million years old**. Without more data you cannot pin it to a single value inside that range.
      `
    },
    {
      id: 'bio-evidence-evolution-p1-s5-input',
      type: 'input-boxes' as const,
      content: `
**Half-Life Practice** 🧮

Use a carbon-14 half-life of 5,730 years. Enter numbers only.
      `,
      exercise: {
        questions: [
          {
            question: 'A bone fragment contains 1/16 of its original carbon-14. How many years ago did the animal die?',
            answer: '22920',
            acceptableAnswers: ['22,920', '22 920'],
            explanation: '1 → 1/2 → 1/4 → 1/8 → 1/16 is four halvings, so the age is 4 × 5,730 = 22,920 years.'
          },
          {
            question: 'A volcanic ash sample retains 12.5% of its original potassium-40. How many half-lives have passed?',
            answer: '3',
            acceptableAnswers: ['three'],
            explanation: '100% → 50% → 25% → 12.5% is three halvings, so three half-lives have passed (about 3.75 billion years for potassium-40).'
          },
          {
            question: 'A wooden tool is 17,190 years old. What percent of its original carbon-14 remains?',
            answer: '12.5',
            acceptableAnswers: ['12.5%', '12.5 percent'],
            explanation: '17,190 ÷ 5,730 = 3 half-lives, and (1/2)³ = 1/8 = 12.5% remaining.'
          }
        ],
        hint1: 'Count how many times you halve 1 to reach 1/16.',
        hint2: 'Each halving is one half-life: 100%, 50%, 25%, 12.5%...',
        hint3: 'First find the number of half-lives (age ÷ 5,730), then halve 100% that many times.'
      }
    },
    {
      id: 'bio-evidence-evolution-p1-s6-transitional',
      type: 'text' as const,
      content: `
### Transitional fossils

A **transitional fossil** shows a mix of traits from an ancestral group and a descendant group. It is not necessarily the direct ancestor of any living species; it shows that **intermediate combinations of traits existed** at the time evolution predicts.

#### Case 1: From water to land

Fish fossils appear in older rock than four-limbed vertebrate (tetrapod) fossils. If tetrapods descended from lobe-finned fishes, intermediate forms should appear in rock of in-between age. In 2004 a team searched exposed rock of about that age (roughly 375 million years) on Ellesmere Island in the Canadian Arctic and found **Tiktaalik**:

| Fish-like traits | Tetrapod-like traits |
|------------------|----------------------|
| Scales and fins with fin rays | Flat skull and a mobile **neck** |
| Gills | Sturdy fin bones matching an upper arm, forearm, and wrist |
| Lived in shallow water | Ribs that could support the body out of water |

The key point for AP Biology is the **logic**: the age of the rock was predicted *before* the fossil was found. If intermediates had turned up only in much younger rock, the hypothesis would have been in trouble.

#### Case 2: From land to sea — whales

Whales are mammals: they breathe air, nurse their young, and have hair at some stage. Fossils show a sequence of forms (ages approximate):

| Fossil | Approximate age | Key traits |
|--------|-----------------|-----------|
| *Pakicetus* | 50 million years | Four legs, land-dwelling, but with an ear bone shape found only in whales |
| *Ambulocetus* | 49 million years | Large feet, likely swam and walked; lived in shallow water |
| *Rodhocetus* | 47 million years | Hip bones less tightly joined to the spine; spent most of its time in water |
| *Basilosaurus* | 40 million years | Fully aquatic; tiny hind legs that could not support weight |

Ankle bones of early whales share a distinctive double-pulley shape with hoofed mammals such as hippos, and DNA comparisons independently place whales closest to hippos. Two independent lines of evidence, anatomy and molecules, agree.

### Geographic clues

Where fossils occur is also evidence. Fossils of *Mesosaurus*, a small reptile that lived in fresh or coastal water, are found in both **southern Africa and eastern South America**, and fossils of the seed fern *Glossopteris* occur in South America, Africa, India, Antarctica, and Australia. These organisms could not cross an ocean. Their distribution matches rock evidence that these continents were once joined and later drifted apart, and it lets geologists match rock layers of the same age across continents.
      `
    },
    {
      id: 'bio-evidence-evolution-p1-s7-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Practice — Dating and Transitional Fossils** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A fossil lies in sedimentary rock between two volcanic ash layers. Potassium-argon dating gives the lower ash layer an age of 42 million years and the upper ash layer 39 million years. What is the best estimate of the fossil\'s age?',
            options: [
              'Older than 42 million years',
              'Younger than 39 million years',
              'Exactly 40.5 million years',
              'Between 39 and 42 million years'
            ],
            correctAnswer: 3,
            explanation: 'The lower ash is older and sets a maximum age, while the upper ash is younger and sets a minimum, so the fossil falls in the 39 to 42 million year range. Averaging the two dates assumes steady deposition that the data do not show.'
          },
          {
            question: 'Why would carbon-14 be a poor choice for dating a 70-million-year-old dinosaur bone?',
            options: [
              'Carbon-14 decays too slowly to change in that span',
              'Too little carbon-14 would remain to measure',
              'Carbon-14 is absorbed by plants but never by animals',
              'Carbon-14 dates the rock layer rather than the bone itself'
            ],
            correctAnswer: 1,
            explanation: 'With a half-life of 5,730 years, carbon-14 falls below measurable levels after about 50,000 years, so a 70-million-year-old bone has essentially none left. Animals do take in carbon-14 by eating plants, and the method dates once-living material rather than rock.'
          },
          {
            question: 'Before Tiktaalik was found, researchers chose to search rock about 375 million years old. Why does the discovery count as a test of common descent?',
            options: [
              'Any fossil from rock of that age would count as a transitional form',
              'Rock of that age is the only kind radiometric methods can measure',
              'The hypothesis set a rock age where in-between forms had to appear',
              'Fish living in that era were observed turning into land animals'
            ],
            correctAnswer: 2,
            explanation: 'Descent with modification implied that fish-tetrapod intermediates should occur in rock between the ages of the earliest fish and tetrapod fossils, a prediction that could have failed. Not every fossil of that age is transitional, and the evidence is the fossil anatomy, not observed transformation.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p1-s8-summary',
      type: 'text' as const,
      content: `
### Part 1 Summary

| Concept | Key detail |
|---------|-----------|
| Lines of evidence | Geological, physical, geographical, biochemical, and mathematical data converge |
| Fossilization bias | Hard parts, rapid burial, and wet sediment favor preservation; gaps are expected |
| Law of superposition | In undisturbed layers, lower = older (relative order, not years) |
| Index fossils | Widespread, short-lived species used to match layers across regions |
| Half-life | Fraction left = (1/2)ⁿ; age = n × half-life |
| Carbon-14 | Half-life 5,730 years; once-living material up to about 50,000 years |
| Potassium-40 | Half-life about 1.25 billion years; dates volcanic layers that bracket fossils |
| Transitional fossils | Mixed ancestral and descendant traits, found in rock of the predicted age |

**Up next → Part 2: Anatomical and Developmental Homology**
      `
    }
  ]
};
