export const bioEvidencePart7Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| The two big claims |
| Concept map: five lines of evidence |
| One case, every line: the whale story |
| Integrated calculations |
| Reasoning traps to avoid |
| Final integrated practice |

> 🔑 **Key Concept:** This topic supports two big claims. **(1) All organisms share common ancestry**, shown by fossils, anatomy, development, molecules, and biogeography. **(2) Populations continue to evolve**, shown by genomic change, resistance, and emerging pathogens. The evidence is persuasive because independent methods agree.

### The two big claims

| Claim | CED topic | Core evidence | Parts |
|-------|-----------|---------------|-------|
| Organisms have changed over time and share common ancestors | 7.6 Evidence of Evolution | Dated fossils, morphological homologies including vestigial structures, DNA and protein similarities | 1, 2, 3 |
| All life, and all eukaryotes, share common ancestors | 7.7 Common Ancestry | Universal features (DNA, RNA, ribosomes, genetic code, core pathways); eukaryotic features (organelles, linear chromosomes, introns) | 4 |
| Evolution is ongoing in all populations | 7.8 Continuing Evolution | Genomic change, continuous fossil change, resistance to chemicals, evolving pathogens | 5 |
      `
    },
    {
      id: 'bio-evidence-evolution-p7-s2-concept-map',
      type: 'text' as const,
      content: `
### Concept map: five lines of evidence

\`\`\`
                     COMMON ANCESTRY  +  CONTINUING EVOLUTION
                                   ▲
     ┌──────────────┬──────────────┼──────────────┬──────────────┐
  FOSSILS       ANATOMY &      MOLECULES     BIOGEOGRAPHY     DIRECT
  (dated)      DEVELOPMENT     (DNA and        (where         OBSERVATION
     │           (homology)     protein)      species live)   (populations
     │              │              │              │             today)
 superposition  homologous     sequence       islands match   resistance
 radiometric    vs analogous   differences    nearest         Grants' finches
 transitional   vestigial      molecular      mainland        flu and HIV
 forms          embryos        clock          drift           genomic change
\`\`\`

| Line of evidence | What it measures | Key rule for interpreting it | Example |
|------------------|------------------|------------------------------|---------|
| **Fossils** | Forms of past life and their ages | Lower layers are older; fraction left = (1/2)ⁿ | *Tiktaalik* in 375-million-year-old rock |
| **Anatomy and development** | Shared internal plans and embryonic stages | Shared plan = homology = ancestry; shared function alone = analogy | Forelimb bones; pharyngeal pouches |
| **Molecules** | Differences in DNA and protein sequences | Fewer differences = more recent common ancestor | Thylacine DNA groups it with marsupials |
| **Biogeography** | Geographic distributions | Species resemble nearby relatives, not distant look-alikes | Galápagos species resemble South American species |
| **Direct observation** | Allele frequencies over generations | Selection acts on existing heritable variation | Resistance after antibiotic use |

#### How the lines connect

- **Fossils + molecules:** fossil dates calibrate the molecular clock; molecular dates predict where to look for fossils.
- **Anatomy + molecules:** when anatomy is ambiguous because of convergence, DNA decides; when they agree (whales and hippos), confidence rises.
- **Biogeography + fossils:** continental drift explains why the same fossil species occur on continents now separated by oceans.
- **Direct observation + all the rest:** the mechanism seen today (selection on heritable variation) is enough to produce the patterns seen in deep time.
      `
    },
    {
      id: 'bio-evidence-evolution-p7-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Matching Evidence to Claims** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which observation supports common ancestry of all living organisms, not just of eukaryotes?',
            options: [
              'Cells of fungi and of animals have nuclei bounded by membranes',
              'Cells of plants and of animals have genes interrupted by introns',
              'Cells of protists and of plants contain several linear chromosomes',
              'Cells of all three domains build their proteins on ribosomes'
            ],
            correctAnswer: 3,
            explanation: 'Ribosomes occur in bacteria, archaea, and eukaryotes alike, so they point to an ancestor of all life. Nuclei, introns, and linear chromosomes are eukaryotic features, so they support only a common eukaryotic ancestor.'
          },
          {
            question: 'Two desert lizards on different continents look nearly identical. Which evidence would best determine whether they are close relatives or the result of convergent evolution?',
            options: [
              'A comparison of DNA sequences from many of their genes',
              'A comparison of their body shapes and scale colors',
              'A measurement of how well each one tolerates high heat',
              'An observation of which insects each lizard prefers to eat'
            ],
            correctAnswer: 0,
            explanation: 'Sequence differences across many genes reflect time since divergence, so DNA can separate true relatives from look-alikes. Body shape, color, heat tolerance, and diet can all be shaped by the same desert conditions in unrelated lineages.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p7-s4-whale-case',
      type: 'text' as const,
      content: `
### One case, every line: the whale story

The origin of whales is a good review because every kind of evidence in this topic contributes:

| Evidence | Observation | Part |
|----------|-------------|------|
| Relative dating | Legged whale fossils lie in older layers than fully aquatic whale fossils | 1 |
| Radiometric dating | The sequence spans roughly 50 to 40 million years ago | 1 |
| Transitional fossils | *Pakicetus*, *Ambulocetus*, and *Basilosaurus* show legs shrinking and life moving into water | 1 |
| Homology | Flippers contain a humerus, radius, ulna, carpals, and phalanges | 2 |
| Vestigial structures | Living whales retain small pelvic bones | 2 |
| Embryology | Whale embryos form hind-limb buds that then regress | 2 |
| Molecular evidence | DNA places whales closest to hippos among living mammals | 3 |
| Fossil + anatomy check | Early whale ankle bones share a double-pulley shape with hippos and other hoofed mammals | 1, 3 |

Each row was gathered by a different method, and any one of them could have contradicted the others. A whale fossil with legs in rock **younger** than fully aquatic whales, or DNA placing whales with sharks, would have been a serious problem. Instead, all the rows agree.

### Reasoning traps to avoid

| Trap | Better reasoning |
|------|------------------|
| Treating similar function as evidence of ancestry | Ask "similar as what?" Function can converge; internal plan and DNA reflect ancestry |
| Reading rock layers as years | Superposition gives order only; radiometric dating gives years |
| Averaging bracketing dates | Two ash layers give a range, not a single age |
| Calling a fossil "the ancestor" | A transitional fossil shows intermediate traits; it may be a side branch, and it cannot be an ancestor if it is younger than the split |
| Saying a drug or pesticide causes resistance | The chemical selects variants that already exist |
| Saying individuals evolve | Populations evolve through allele-frequency change |
| Treating gaps in the fossil record as disproof | Fossilization is rare and biased toward hard parts and rapid burial |
| Listing nuclei or mitochondria as evidence for all life | Those unite eukaryotes only; ribosomes, DNA, RNA, and the code unite all life |
      `
    },
    {
      id: 'bio-evidence-evolution-p7-s5-input',
      type: 'input-boxes' as const,
      content: `
**Integrated Calculations** 🧮

Enter numbers only. Carbon-14 half-life = 5,730 years.
      `,
      exercise: {
        questions: [
          {
            question: 'A bone retains 1/32 of its original carbon-14. How many years ago did the animal die?',
            answer: '28650',
            acceptableAnswers: ['28,650', '28 650'],
            explanation: '1/32 = (1/2)⁵, so 5 half-lives have passed: 5 × 5,730 = 28,650 years.'
          },
          {
            question: 'A gene accumulates 6 differences per 10 million years between diverging lineages. Two species differ at 15 positions in this gene. How many millions of years ago did they diverge?',
            answer: '25',
            acceptableAnswers: ['25 million'],
            explanation: 'The rate is 0.6 differences per million years, so 15 ÷ 0.6 = 25 million years.'
          },
          {
            question: 'An infection contains 4 billion bacteria, and resistant cells occur at a frequency of 1 in 50 million. How many resistant cells are present before treatment?',
            answer: '80',
            acceptableAnswers: ['eighty'],
            explanation: '(4 × 10⁹) ÷ (5 × 10⁷) = 80 resistant cells, present before the antibiotic is ever used.'
          }
        ],
        hint1: 'Write 1/32 as a power of 1/2 to count the half-lives.',
        hint2: 'Find the rate per million years first: 6 ÷ 10.',
        hint3: '4,000,000,000 ÷ 50,000,000 is the same as 400 ÷ 5.'
      }
    },
    {
      id: 'bio-evidence-evolution-p7-s6-final',
      type: 'multiple-choice' as const,
      content: `**Final Integrated Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A 13-million-year-old fossil shows a mix of traits found in two living groups, X and Y. DNA comparisons estimate that X and Y diverged about 20 million years ago. Which statement is best supported?',
            options: [
              'It is the ancestor of X and Y, since it shares traits of both groups',
              'It shows the DNA estimate is wrong, since fossil dates are more exact',
              'It cannot be the shared ancestor, since it is younger than the split',
              'It shows that X evolved from Y, since its traits are intermediate'
            ],
            correctAnswer: 2,
            explanation: 'A common ancestor must be older than the split it gave rise to, so a fossil 7 million years younger than the divergence is a later relative, perhaps an early member of one lineage or a side branch. Mixed traits do not make it an ancestor, and living groups do not descend from one another.'
          },
          {
            question: 'Two primate species carry an identical nonfunctional copy of a gene, disabled by the same mutation at the same position. What is the best explanation?',
            options: [
              'The two species inherited the broken gene from a common ancestor',
              'The same mutation arose separately in each of the species by chance',
              'Each species lost the gene because it stopped needing it',
              'The gene broke in each species once its product was harmful'
            ],
            correctAnswer: 0,
            explanation: 'An identical disabling mutation at the same position is best explained by a single mutation in a common ancestor, inherited by both descendant species. Separate identical mutations would be very unlikely, and genes do not break in response to need.'
          },
          {
            question: 'Why is the agreement among fossils, anatomy, DNA, and biogeography considered strong support for common ancestry?',
            options: [
              'Each method alone settles every detail of the history of life',
              'Independent methods that could have disagreed tell the same history',
              'All four methods measure one shared feature in slightly different ways',
              'The fossil record by itself is complete enough to answer every question'
            ],
            correctAnswer: 1,
            explanation: 'Fossil dates, anatomical homologies, sequence differences, and geographic distributions are gathered in different ways, so their agreement is unlikely by chance. No single method settles everything, the methods measure different things, and the fossil record has gaps.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p7-s7-wrapup',
      type: 'text' as const,
      content: `
### Topic Wrap-Up

| If the question gives you... | Ask yourself... | Then conclude... |
|------------------------------|----------------|------------------|
| Rock layers | Which is lower? | Lower = older (order only) |
| Isotope fractions | How many halvings? | Age = halvings × half-life |
| Similar structures | Same internal plan, or same job only? | Homologous = ancestry; analogous = convergence |
| A reduced structure | What did it do in relatives? | Vestigial = inherited from ancestors that used it |
| Sequence differences | Which pair differs least? | Fewest differences = most recent common ancestor |
| A domain-wide feature | Do bacteria and archaea have it too? | Common ancestry of all life |
| Island or continental distributions | Which source is nearest? | Descended from nearby colonists, then diversified |
| Survival or allele data over time | Did variation exist before the pressure? | Selection changed allele frequencies in the population |

You now have the full toolkit for **Evidence of Evolution**: dating fossils, sorting homology from analogy, reading sequence data, recognizing universal and eukaryotic features, interpreting biogeography, and explaining evolution that is happening right now.
      `
    }
  ]
};
