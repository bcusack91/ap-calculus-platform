export const asvabGsLifeSciencePart3Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl3-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 3 of 7 — Genetics, DNA and Classification**

### DNA: The Instruction Manual

**DNA** (deoxyribonucleic acid) carries the instructions for building and running an organism. It is shaped like a twisted ladder, a **double helix**. The rungs are pairs of four **bases**, and the pairing never changes:

| Base | Always pairs with |
|:---|:---|
| **A**denine | **T**hymine |
| **C**ytosine | **G**uanine |

Memory hook: **A**pple in the **T**ree, **C**ar in the **G**arage. (RNA, DNA's working copy, uses **U**racil in place of T.)

### From DNA to traits

| Term | Meaning |
|:---|:---|
| **Gene** | A section of DNA that codes for one protein, which shapes a trait |
| **Chromosome** | A long, tightly coiled strand of DNA carrying many genes (humans: 46, in 23 pairs) |
| **Allele** | One version of a gene (for example, the version for brown eyes or for blue eyes) |
| **Dominant allele** | Shows up when at least **one** copy is present (capital letter, **B**) |
| **Recessive allele** | Shows up only with **two** copies (lowercase letter, **b**) |
| **Genotype** | The allele letters an organism has: BB, Bb or bb |
| **Phenotype** | The trait you can observe: brown eyes or blue eyes |
| **Homozygous / heterozygous** | Two matching alleles (BB, bb) / two different alleles (Bb) |
| **Mutation** | A change in the DNA sequence |

**Sex chromosomes:** females are **XX** and males are **XY**. Every egg carries an X, so the **father's sperm** (X or Y) decides the child's sex.

> **Key Fact:** "Dominant" does not mean "most common." It only means the allele shows up when one copy is present. Some dominant conditions are rare.`
    },
    {
      id: 'gsl3-punnett',
      type: 'text' as const,
      content: `## Punnett Squares

A **Punnett square** predicts the chances for offspring. Put one parent's alleles across the top, the other's down the side, and fill each box with one letter from each.

### Worked example: two heterozygous parents

In pea plants, tall (**T**) is dominant over short (**t**). Cross **Tt × Tt**:

| | **T** | **t** |
|:---:|:---:|:---:|
| **T** | TT | Tt |
| **t** | Tt | tt |

- Genotypes: 1 TT : 2 Tt : 1 tt
- Phenotypes: **3 tall : 1 short**
- Chance of a short plant: $\\frac{1}{4} = 25\\%$

### Worked example: heterozygous × homozygous recessive

Cross **Tt × tt**:

| | **T** | **t** |
|:---:|:---:|:---:|
| **t** | Tt | tt |
| **t** | Tt | tt |

Two boxes are Tt (tall) and two are tt (short): a **50%** chance of each.

### The three crosses to know cold

| Cross | Offspring showing the dominant trait |
|:---|:---:|
| **AA × anything** | **100%** |
| **Aa × Aa** | **75%** (3 out of 4) |
| **Aa × aa** | **50%** (2 out of 4) |
| **aa × aa** | **0%** |`
    },
    {
      id: 'gsl3-classify',
      type: 'text' as const,
      content: `## Classifying Living Things

Scientists sort organisms into nested groups, from the broadest to the most specific:

| Level | Mnemonic word |
|:---|:---|
| **D**omain | **D**ear |
| **K**ingdom | **K**ing |
| **P**hylum | **P**hilip |
| **C**lass | **C**ame |
| **O**rder | **O**ver |
| **F**amily | **F**or |
| **G**enus | **G**ood |
| **S**pecies | **S**oup |

Going down the list, each group holds **fewer kinds** of organisms that are **more closely related**. A **species** is a group that can breed and produce fertile offspring.

**Scientific names** use two words, the **genus** then the **species**: *Homo sapiens* (humans), *Canis lupus* (gray wolf). This is called **binomial nomenclature**.

### The kingdoms

Many textbooks use six kingdoms: **animals, plants, fungi, protists, and two kingdoms of bacteria** (older books combine the bacteria into one, giving five). The fact tested most: **mushrooms, molds and yeast are fungi, not plants**. Fungi cannot make their own food; they absorb it, often as decomposers.

### Animals with backbones (vertebrates)

| Group | Key features | Examples |
|:---|:---|:---|
| **Mammals** | Hair or fur, feed young milk, warm-blooded | Humans, whales, bats, dolphins |
| **Birds** | Feathers, hard-shelled eggs, warm-blooded | Penguins, ostriches, eagles |
| **Reptiles** | Dry scales, leathery eggs, cold-blooded | Snakes, turtles, alligators |
| **Amphibians** | Moist skin, young live in water, adults often on land | Frogs, toads, salamanders |
| **Fish** | Gills, fins, scales, live in water | Sharks, salmon, tuna |

Animals **without** backbones are **invertebrates**: insects (**6 legs, 3 body sections**), spiders and other arachnids (**8 legs, 2 body sections**), worms, jellyfish, snails.`
    },
    {
      id: 'gsl3-mc',
      type: 'multiple-choice' as const,
      content: '**DNA and heredity.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a DNA molecule, which base always pairs with guanine?',
            options: ['Cytosine', 'Adenine', 'Thymine', 'Uracil'],
            correctAnswer: 0,
            explanation: 'Cytosine pairs with guanine ("Car in the Garage"), and adenine pairs with thymine. Uracil appears in RNA, not DNA.'
          },
          {
            question: 'A plant has the genotype Rr, where R (red flowers) is dominant over r (white flowers). What is its phenotype?',
            options: ['Red flowers', 'White flowers', 'Pink flowers', 'Half red, half white'],
            correctAnswer: 0,
            explanation: 'One dominant allele is enough to show the dominant trait, so Rr plants have red flowers. White would need rr. Blended colors such as pink are not what complete dominance predicts.'
          },
          {
            question: 'The scientific name of the house cat is Felis catus. Which two classification levels does this name give?',
            options: ['Genus and species', 'Kingdom and phylum', 'Family and genus', 'Class and order'],
            correctAnswer: 0,
            explanation: 'Binomial names list the genus first (capitalized) and the species second (lowercase). Felis is the genus and catus the species.'
          },
          {
            question: 'Which of these animals is a mammal?',
            options: ['Dolphin', 'Shark', 'Penguin', 'Salamander'],
            correctAnswer: 0,
            explanation: 'Dolphins breathe air, are warm-blooded and nurse their young with milk, so they are mammals even though they live in the sea. Sharks are fish, penguins are birds and salamanders are amphibians.'
          }
        ]
      }
    },
    {
      id: 'gsl3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Genetics vocabulary.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'An organism with two different alleles for a trait, such as Ee, is:',
            options: ['Heterozygous', 'Homozygous dominant', 'Homozygous recessive', 'Mutated'],
            correctAnswer: 0
          },
          {
            label: 'The sex chromosomes of a typical human male are:',
            options: ['XY', 'XX', 'YY', 'XO'],
            correctAnswer: 0
          },
          {
            label: 'Going from kingdom down to species, the organisms in each group become:',
            options: ['More closely related', 'Less closely related', 'Larger in number', 'More varied in kind'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Heterozygous', 'XY', 'More closely related'],
        hint1: '"Hetero-" means different; "homo-" means same.',
        hint2: 'Females are XX.',
        hint3: 'A species is the narrowest group of all.',
        explanation: 'Ee has two different alleles, so it is heterozygous (EE would be homozygous dominant and ee homozygous recessive). A typical male is XY (a female is XX). Each step from kingdom toward species narrows the group to fewer kinds of organisms that share more features, so they are more closely related.'
      }
    },
    {
      id: 'gsl3-input',
      type: 'input-boxes' as const,
      content: `**Run the crosses.** ✍️ In guinea pigs, black fur (**B**) is dominant over white fur (**b**). Enter each answer as a percent (number only).

**1)** Cross **Bb × bb**. What percent of offspring are expected to have **white** fur?

**2)** Cross **BB × bb**. What percent of offspring are expected to have **black** fur?

**3)** Cross **Bb × Bb**. What percent of offspring are expected to be **homozygous** (BB or bb)?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '100', '50'],
        hint1: 'Draw the 2-by-2 square for each cross.',
        hint2: 'BB × bb gives only one possible genotype.',
        hint3: 'In Bb × Bb, count the BB box and the bb box together.',
        explanation: '(1) Bb × bb gives Bb, Bb, bb, bb: $2$ of $4$ are white, $50\\%$. (2) BB × bb gives Bb in every box, all black: $100\\%$. (3) Bb × Bb gives BB, Bb, Bb, bb; the homozygous boxes are BB and bb, $2$ of $4$, so $50\\%$.'
      }
    },
    {
      id: 'gsl3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- DNA is a **double helix**; bases pair **A–T** and **C–G** (RNA uses U instead of T)
- **Gene** = section of DNA; **allele** = version of a gene; humans have **46 chromosomes**
- **Dominant** shows with one copy; **recessive** needs two; **genotype** = letters, **phenotype** = what you see
- Punnett results: **Aa × Aa → 3 : 1** (25% recessive); **Aa × aa → 1 : 1** (50%)
- Females **XX**, males **XY**; the father's sperm decides the sex
- **D**ear **K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup: domain → species; scientific name = **genus + species**
- Mushrooms are **fungi**; whales, bats and dolphins are **mammals**; spiders (8 legs) are not insects (6 legs)

> **Up Next:** Part 4 — the systems of the human body, nutrition and disease.`
    }
  ]
};
