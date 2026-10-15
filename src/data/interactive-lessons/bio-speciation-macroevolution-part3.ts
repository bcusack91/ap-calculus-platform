export const bioSpeciationPart3Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 3 of 7 — Sympatric Speciation**

---

| Section |
|---------|
| Speciation without a geographic barrier |
| Polyploidy: instant isolation by chromosome number |
| Concept Check: why polyploids are isolated |
| Habitat differentiation and sexual selection |
| Calculate: chromosome counts |
| Allopatric vs. sympatric: telling them apart |
| AP-style check: apple flies and cichlids |

> 🔑 **Key Concept:** In **sympatric speciation** ("same homeland"), a new species arises **within the range of its parent population**, with no physical barrier. Gene flow must be cut by something else: a **chromosome change (polyploidy)**, a shift to a **new habitat or food source**, or **sexual selection** on mating signals.

### Why sympatric speciation is harder

In allopatric speciation, geography does the work of stopping gene flow. In sympatric speciation, the diverging groups live side by side, so they could interbreed at any time. Any small difference that starts to build up is erased by gene flow unless something reduces mating between the groups **from the very start**. Three things can do that:

| Route | What reduces gene flow | Main groups |
|-------|------------------------|-------------|
| **Polyploidy** | Offspring of the new and parent forms are sterile | Plants (common); a few animals |
| **Habitat differentiation** | Groups that use different resources also mate in different places or at different times | Insects that mate on their host plant |
| **Sexual selection** | Mate choice based on a trait (color, song) splits a population | Fish, birds, insects |

### Polyploidy: a new species in one generation

A **polyploid** has **more than two complete sets of chromosomes**. Polyploidy usually arises from an error in cell division, such as **nondisjunction** of every chromosome during meiosis, which produces a diploid (2n) gamete instead of a haploid (n) one.

#### Autopolyploidy: extra sets from one species

1. A diploid plant (2n) has a meiotic error and makes some **2n gametes**.
2. Two 2n gametes fuse (often by self-fertilization), giving a **tetraploid (4n)** offspring.
3. The tetraploid is fertile: in meiosis, its four copies of each chromosome pair up evenly and its gametes are 2n.
4. If the tetraploid mates with a diploid, a 2n gamete fuses with an n gamete to make a **triploid (3n)**.
5. The triploid is **sterile**: three copies of each chromosome cannot be divided evenly between two daughter cells in meiosis, so its gametes have unbalanced chromosome sets.

#### Worked example: a diploid with 2n = 14

| Organism | Chromosome sets | Chromosomes in body cells | Chromosomes per gamete |
|----------|-----------------|---------------------------|------------------------|
| Diploid parent | 2 sets of 7 | 14 | 7 |
| New tetraploid | 4 sets of 7 | 28 | 14 |
| Tetraploid x diploid hybrid | 3 sets of 7 | 14 + 7 = **21** | Unbalanced; mostly sterile |

The tetraploids can breed with each other but not successfully with the diploids that produced them. By the biological species concept, they are a **new species** that arose in a single generation, in the same field as its parents.

#### Allopolyploidy: sets from two different species

1. Species A (2n = 10) and species B (2n = 14) occasionally cross. Their hybrid gets 5 + 7 = **12** chromosomes.
2. The hybrid is usually **sterile**: its 5 A-chromosomes and 7 B-chromosomes are not homologous, so they cannot pair in meiosis. It may still reproduce asexually (for example, by runners or bulbs).
3. A later error doubles the hybrid's chromosome number to **24**. Now **every chromosome has a homologous partner**, meiosis works, and gametes carry 12 chromosomes.
4. The fertile allopolyploid (2n = 24) cannot produce fertile offspring with either parent species. It is a new species.

**Real examples**
- **Goatsbeards (*Tragopogon*)**: Three European species were introduced to the Pacific Northwest of the United States in the early 1900s. By the mid-1900s, two new allopolyploid species had formed from hybrids between them, and botanists have documented them arising there.
- **Bread wheat** is a **hexaploid (6n = 42)**: it carries six sets of 7 chromosomes, inherited from three ancestral species through two rounds of hybridization and chromosome doubling.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Why Polyploids Are Isolated** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A tetraploid plant arises in a field of its diploid parent species. When it is pollinated by a diploid plant, the resulting triploid offspring grow normally but set almost no seed. Which explanation best accounts for the low seed set?',
            options: [
              'Triploid cells cannot complete mitosis, so the plant stops dividing',
              'Three homologs of each chromosome cannot be split evenly in meiosis',
              'Triploid offspring inherit no chromosomes from the diploid parent',
              'The extra chromosome set blocks the flowers from attracting pollinators'
            ],
            correctAnswer: 1,
            explanation: 'Meiosis must split each group of homologous chromosomes into two equal halves, which is impossible with three copies, so most gametes get unbalanced chromosome sets and fail. Triploids divide by mitosis and grow normally, they do inherit a set from the diploid parent, and their flowers are not the problem.'
          },
          {
            question: 'A sterile hybrid between two plant species undergoes a doubling of its genome and becomes fertile. Which change explains the restored fertility?',
            options: [
              'Doubling adds new mutations that repair the faulty alleles',
              'Doubling makes the hybrid able to mate with both parents',
              'Doubling gives every chromosome a homolog to pair with',
              'Doubling converts the hybrid into an asexual reproducer'
            ],
            correctAnswer: 2,
            explanation: 'Before doubling, chromosomes from the two parent species have no homologs, so they cannot pair in meiosis; after doubling, each chromosome has an identical partner and meiosis proceeds normally. The new allopolyploid is isolated from both parents rather than able to mate with them, and doubling neither adds mutations nor makes the plant asexual.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p3-s3-habitat-sexual',
      type: 'text' as const,
      content: `
### Habitat differentiation: the apple maggot fly

The apple maggot fly (*Rhagoletis pomonella*) originally laid its eggs only on the fruit of **hawthorn** trees, which are native to North America. Apple trees were brought to North America by European settlers, and in the 1800s some flies began laying eggs on **apples** instead.

Why does a change of fruit reduce gene flow?

| Feature of the fly's life | Consequence |
|---------------------------|-------------|
| Flies **mate on or near the fruit** where they will lay eggs | Apple flies mostly meet apple flies; hawthorn flies meet hawthorn flies |
| Apples **ripen a few weeks earlier** than hawthorn fruits | Natural selection has shifted the timing of adult emergence in each group, so the groups are active at different times |
| Larvae develop best on the fruit their parents chose | Selection favors alleles that improve survival on that particular fruit |

Today the apple and hawthorn groups (called **host races**) differ in allele frequencies and in the timing of their life cycles, and gene flow between them is low, all within the same orchards and hedgerows. They are widely studied as a case of speciation **in progress**.

### Sexual selection: Lake Victoria cichlids

Lake Victoria in East Africa holds hundreds of species of **cichlid** fish, many of which have arisen recently within the same lake. Two closely related species illustrate how **mate choice** can split a population:

- Males of one species have **blue** backs; males of the other have **red** backs.
- Females of each species strongly prefer males with their own species' color, so the two species live together without interbreeding.

**The key experiment**
1. Researchers placed females with males of both species in tanks under normal light: females chose males of their own species.
2. They repeated the test under **monochromatic orange light**, which hides the blue/red difference.
3. Under orange light, females mated with males of **both** species, and the hybrid offspring were **viable and fertile**.

**Reasoning:** Nothing about the fish's genes or anatomy prevents interbreeding. The only barrier is **behavioral**: females' color preference. Sexual selection on male color has been enough to stop gene flow in a shared lake. (In parts of the lake where pollution has made the water murky, females can no longer see male color well, and hybridization has increased.)

> 🔑 **AP Connection:** For a sympatric scenario, identify what reduces gene flow **without** a geographic barrier: a change in chromosome number, a change in habitat or timing, or a mate-choice preference. Then name the reproductive barrier it creates.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p3-s4-input',
      type: 'input-boxes' as const,
      content: `**Calculate — Chromosome Counts in Polyploid Speciation** 🧮`,
      exercise: {
        questions: [
          {
            question: 'A diploid plant species has 2n = 20. How many chromosomes are in the body cells of a tetraploid that arises from it?',
            answer: '40',
            acceptableAnswers: ['4n=40', '4n = 40'],
            explanation: 'n = 10, so a tetraploid (four sets) has 4 x 10 = 40 chromosomes.'
          },
          {
            question: 'That tetraploid is pollinated by a diploid of the same species. How many chromosomes are in the body cells of the offspring?',
            answer: '30',
            acceptableAnswers: ['3n=30', '3n = 30'],
            explanation: 'The tetraploid gamete carries 20 chromosomes and the diploid gamete carries 10, so the triploid offspring has 30 chromosomes.'
          },
          {
            question: 'Species A (2n = 12) and species B (2n = 16) form a hybrid, which then doubles its chromosome number. How many chromosomes are in the body cells of the fertile allopolyploid?',
            answer: '28',
            acceptableAnswers: ['2n=28', '2n = 28'],
            explanation: 'The hybrid receives 6 + 8 = 14 chromosomes; doubling gives 28, so every chromosome has a homolog.'
          }
        ],
        hint1: 'Start by finding n (the number in one set, or in one gamete) for each parent.',
        hint2: 'A tetraploid makes gametes with two sets; a diploid makes gametes with one set.',
        hint3: 'An allopolyploid first adds one gamete from each species, then doubles that total.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p3-s5-compare',
      type: 'text' as const,
      content: `
### Allopatric vs. sympatric: telling them apart

| Question to ask | Allopatric | Sympatric |
|-----------------|-----------|-----------|
| Are the diverging groups in the same area? | No: separated by a physical barrier | Yes: same geographic area |
| What first stops gene flow? | Geography (mountains, water, distance) | Polyploidy, habitat or host shift, mate choice |
| How fast can isolation arise? | Usually slowly, over many generations | Can be **one generation** (polyploidy) or gradual (host races) |
| Typical evidence | Sister species on opposite sides of a barrier | New species found among its parents; chromosome counts that are multiples of the parent's set |
| Most common in | Almost all groups of organisms | Polyploidy mostly in plants; host shifts in insects |

#### Worked example: classify the scenario

**Scenario:** A population of a wildflower grows in one meadow. A new form with twice the parent's chromosome number appears. Crosses between the new form and the parent produce seeds that grow into sterile plants.

1. **Where?** Same meadow, so no geographic barrier. This rules out allopatric speciation.
2. **What stopped gene flow?** Hybrids with the parent are sterile because of a chromosome-number difference.
3. **Barrier type:** Reduced hybrid fertility (a postzygotic barrier).
4. **Claim:** This is **sympatric speciation by autopolyploidy**.

### Common misconceptions

- **"Sympatric means no isolation."** No: it means no **geographic** isolation. A reproductive barrier is still needed.
- **"Polyploids are always weaker."** Many polyploid plants are larger and more vigorous than their diploid parents, and many crops (wheat, cotton, potatoes, strawberries) are polyploid.
- **"Only plants speciate sympatrically."** Polyploidy is far more common in plants, but host shifts (insects) and sexual selection (fish, birds) work in animals.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p3-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Apple Flies and Cichlids** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Apple maggot flies that develop on apples and flies that develop on hawthorns live in the same orchards. Which observation best explains why gene flow between the two groups is low?',
            options: [
              'Adults mate on their host fruit, and the two fruits ripen at different times',
              'Flies on apples cannot fly far enough to reach the nearby hawthorn trees',
              'A wide river separates most apple orchards from the hawthorn trees nearby',
              'Flies that eat apples gain traits during their lives that they pass on'
            ],
            correctAnswer: 0,
            explanation: 'Because mating happens on the host fruit and apples ripen earlier than hawthorns, apple flies mostly meet and mate with other apple flies at a different time of year. The groups share orchards, so distance and rivers are not the cause, and traits gained during a fly\'s life are not inherited.'
          },
          {
            question: 'Two cichlid species from Lake Victoria do not interbreed in the lake. Under orange light that hides the visible difference between the males, the fish interbreed and the hybrids are fertile. Which conclusion is best supported?',
            options: [
              'Hybrid sterility is the main barrier between the two cichlid species',
              'Female preference for male color is the main barrier between them',
              'The two species are kept apart by living in different parts of the lake',
              'Orange light causes mutations that make the two species compatible'
            ],
            correctAnswer: 1,
            explanation: 'When color cues are hidden, the species interbreed freely and produce fertile hybrids, so the barrier in nature must be females choosing mates by color. Fertile hybrids rule out hybrid sterility, the fish share the tanks and the lake, and light does not cause mutations that change compatibility in one generation.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p3-s7-summary',
      type: 'text' as const,
      content: `
### Part 3 Summary

| Concept | Key detail |
|---------|-----------|
| Sympatric speciation | A new species forms in the same area as its parent population |
| Autopolyploidy | 2n → 4n; tetraploid x diploid gives a sterile triploid |
| Allopolyploidy | Sterile hybrid of two species + chromosome doubling → fertile new species |
| Habitat differentiation | Apple maggot flies: host fruit sets where and when flies mate |
| Sexual selection | Lake Victoria cichlids: female color preference blocks gene flow |
| Speed | Polyploidy can create a new species in one generation |

**Up next → Part 4: Reproductive Isolation**, a full catalog of the prezygotic and postzygotic barriers that keep species apart.
      `
    }
  ]
};
