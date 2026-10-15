export const bioEvidencePart4Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 4 of 7 — Common Ancestry Across All Life**

---

| Section |
|---------|
| The logic of universal features |
| Features shared by all three domains |
| Features that unite all eukaryotes |
| Biogeography: where species live |
| Putting the evidence together |

> 🔑 **Key Concept:** Many fundamental molecular and cellular features are **conserved** across bacteria, archaea, and eukaryotes. The simplest explanation for features shared by every living thing is that they were inherited from a single common ancestor of all life.

### The logic of universal features

Parts 1–3 compared species within a group: whales with hippos, humans with chimpanzees. Part 4 zooms out to the whole tree of life. Life today is classified into three **domains**:

| Domain | Cell type | Examples |
|--------|-----------|----------|
| **Bacteria** | Prokaryotic | *E. coli*, cyanobacteria, *Streptococcus* |
| **Archaea** | Prokaryotic | Methane producers, salt-loving and heat-loving microbes |
| **Eukarya** | Eukaryotic | Protists, fungi, plants, animals |

These domains differ enormously in size, shape, habitat, and metabolism. Yet underneath, they share a common molecular toolkit. When a feature appears in **every** domain, there are only two broad explanations:

1. It was inherited from a **common ancestor** of all three domains.
2. It arose **independently** many times.

Option 2 becomes implausible when the shared feature is **complex** (many interacting parts) or **arbitrary** (one of many workable possibilities). The universal features below are both.
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s2-universal',
      type: 'text' as const,
      content: `
### Features shared by all three domains

The CED lists structural and functional evidence that supports the relatedness of organisms in all domains:

| Shared feature | What it means | Why it points to common ancestry |
|----------------|---------------|----------------------------------|
| **DNA and RNA carry genetic information** | Every cell stores its genome in DNA and uses RNA to carry instructions | Many other molecules could, in principle, store information; all life uses the same pair |
| **Ribosomes** | All cells build proteins on ribosomes made of rRNA and protein | Ribosomal RNA sequences are similar enough across all domains to align and compare |
| **The genetic code** | The same codons specify the same amino acids in nearly all organisms | The codon assignments are largely arbitrary, so independent origins would be expected to produce different codes |
| **Core metabolic pathways** | Glycolysis and other central pathways occur, with some variations, across all domains | Multi-step pathways with similar enzymes and intermediates are unlikely to arise identically more than once |

Other widely shared features reinforce the pattern: **ATP** as the cell's energy currency and a **plasma membrane** enclosing every cell.

#### The genetic code as the clearest example

There is no chemical reason why the codon UUU must mean phenylalanine. A different assignment would work just as well. Yet UUU means phenylalanine in bacteria, archaea, fungi, plants, and animals. The code is **nearly universal**: a few organisms and mitochondria reassign a small number of codons, and those minor variants look like later modifications of the standard code, not separate inventions.

This shared code has practical consequences you have met in biotechnology. A human gene can be placed into *E. coli*, and the bacterium reads the codons the same way human cells do, producing human insulin. (The gene must be supplied without introns, because bacteria cannot remove them, which leads to the next set of evidence.)

> 🔑 **AP Connection:** For "evidence of common ancestry of all organisms," list domain-wide features: DNA and RNA as genetic material, ribosomes, the shared genetic code, and conserved core metabolic pathways such as glycolysis. Do not list the nucleus or mitochondria, because bacteria and archaea lack them.
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Universal Features** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which observation provides the strongest evidence that bacteria, archaea, and eukaryotes all descended from one ancestor?',
            options: [
              'All three can live in watery habitats that contain dissolved salts',
              'All three are built from cells too small to see without a microscope',
              'All three require oxygen to release energy from the glucose they use',
              'All three use nearly the same codon assignments for every amino acid'
            ],
            correctAnswer: 3,
            explanation: 'The codon assignments are largely arbitrary, so a shared code across all domains is best explained by inheritance from one ancestor. Shared habitats and small size do not imply ancestry, and many organisms in all three domains live without oxygen.'
          },
          {
            question: 'Bacteria given a human insulin gene, supplied without introns, produce working human insulin. Which feature of life makes this possible?',
            options: [
              'Bacteria and humans splice mRNA with the same machinery',
              'Bacterial and human chromosomes are both linear molecules',
              'Bacteria and humans translate codons with one genetic code',
              'Bacteria and humans share the same membrane-bound organelles'
            ],
            correctAnswer: 2,
            explanation: 'Because bacteria read codons with the same genetic code, a human coding sequence yields the same amino-acid chain. Bacteria lack splicing machinery, linear chromosomes, and membrane-bound organelles, which is why the gene must be supplied without introns.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p4-s4-eukaryotes',
      type: 'text' as const,
      content: `
### Features that unite all eukaryotes

Within the domain Eukarya, a second layer of shared features shows that protists, fungi, plants, and animals descend from a **common eukaryotic ancestor**. The CED names three:

| Eukaryotic feature | Typical prokaryotic condition |
|--------------------|-------------------------------|
| **Membrane-bound organelles**: nucleus, endoplasmic reticulum, Golgi, mitochondria (and chloroplasts in plants and algae) | No nucleus or membrane-bound organelles |
| **Linear chromosomes**, several to many per cell, with protective telomeres at the ends | Usually a single circular chromosome |
| **Genes that contain introns**, which are removed from pre-mRNA by RNA splicing | Introns are rare, and prokaryotes lack the eukaryotic splicing machinery |

#### Why these count as evidence

- **They are complex.** A nucleus with a double membrane and nuclear pores, or a spliceosome built from many RNAs and proteins, is unlikely to evolve identically in separate lineages.
- **They co-occur.** Organisms with nuclei also have linear chromosomes and spliced genes. Inheriting the whole package from one ancestor explains why the three features travel together.
- **They are shared even by very different eukaryotes.** A yeast cell and a human neuron have little in common in function, yet both have a nucleus, linear chromosomes, and introns.

#### Connection: mitochondria and endosymbiosis

Nearly all eukaryotes have mitochondria or reduced structures derived from them. Mitochondria have their own **circular DNA** and ribosomes that resemble bacterial ribosomes, which supports the model that they descend from free-living bacteria engulfed by an ancestral host cell (you studied this as the endosymbiotic origin of organelles). That single ancient event, inherited by all descendants, is another sign that eukaryotes share one common ancestor.

### Nested evidence

The evidence forms **nested groups**, the pattern expected from branching descent:

| Level | Shared features | Inherited from |
|-------|----------------|----------------|
| All life | DNA, RNA, ribosomes, genetic code, glycolysis, ATP | Common ancestor of all three domains |
| All eukaryotes | Nucleus and other membrane-bound organelles, linear chromosomes, introns | Common ancestor of eukaryotes |
| All vertebrates | Backbone, pharyngeal pouches in embryos | Common ancestor of vertebrates |
| All mammals | Hair, milk production | Common ancestor of mammals |

Every mammal has all the features in the rows above it; no bacterium has the eukaryotic features. Features nest inside one another like branches on a tree, which is exactly what descent from common ancestors predicts.
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Where Is Each Feature Found?** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Ribosomes that build proteins from mRNA instructions are found in _____.',
            options: ['all three domains', 'eukaryotes only', 'bacteria only', 'bacteria and archaea only']
          },
          {
            label: 'A nucleus and other membrane-bound organelles are found in _____.',
            options: ['all three domains', 'eukaryotes only', 'bacteria only', 'bacteria and archaea only']
          },
          {
            label: 'DNA as the carrier of hereditary information is found in _____.',
            options: ['all three domains', 'eukaryotes only', 'bacteria only', 'bacteria and archaea only']
          },
          {
            label: 'Linear chromosomes and genes interrupted by introns are characteristic of _____.',
            options: ['all three domains', 'eukaryotes only', 'bacteria only', 'bacteria and archaea only']
          }
        ],
        correctAnswers: ['all three domains', 'eukaryotes only', 'all three domains', 'eukaryotes only'],
        hint1: 'Ask whether a prokaryotic cell could survive without the feature. If not, it is probably universal.',
        hint2: 'Bacteria and archaea have no nucleus and usually a single circular chromosome.',
        hint3: 'DNA, RNA, ribosomes, and the genetic code are domain-wide; nucleus, linear chromosomes, and introns are eukaryotic.',
        explanation: 'Ribosomes and DNA as genetic material occur in every domain, evidence that all life shares one ancestor. A nucleus with membrane-bound organelles, linear chromosomes, and intron-containing genes are found in eukaryotes, evidence that all eukaryotes share a more recent common ancestor.'
      }
    },
    {
      id: 'bio-evidence-evolution-p4-s6-biogeography',
      type: 'text' as const,
      content: `
### Biogeography: where species live

**Biogeography** is the study of how species are distributed across Earth. If species were simply placed wherever conditions suit them, similar environments would hold similar sets of species. Instead, distributions follow **ancestry and history**: species tend to be most closely related to other species **nearby**, even when distant places have more similar climates.

#### Islands resemble the nearest mainland

Darwin noticed that the plants and animals of the Galápagos Islands, about 1,000 km off Ecuador, resemble those of **South America**, while species of the Cape Verde Islands, off West Africa, resemble those of **Africa**. Both island groups are volcanic and dry. Similar climate did not produce similar species; proximity did.

The explanation: islands are colonized by the few organisms that can reach them (by flying, swimming, or rafting) from the **nearest source**, and those colonists then diversify.

| Island group | Colonist | Result |
|--------------|----------|--------|
| Galápagos | A seed-eating finch-like bird from the American mainland | More than a dozen finch species with different beak shapes |
| Hawaii | A single finch-like bird | Dozens of honeycreeper species, from seed crushers to nectar sippers |

#### Continents carry their own histories

- **Australia** split from other landmasses tens of millions of years ago. Its native mammals are mostly marsupials, which diversified into forms that resemble placental mammals elsewhere (a marsupial "mole," the thylacine "wolf," gliders that resemble flying squirrels).
- **Cacti** are almost entirely native to the Americas. In African deserts, cactus-like succulent euphorbias fill a similar role. They look alike (thick, spiny, water-storing stems) but their flowers and DNA show they belong to an unrelated plant family: convergence on the outside, local ancestry underneath.
- **Continental drift** explains fossil distributions such as *Mesosaurus* in both South America and Africa (Part 1): the continents were once joined.

#### What biogeography adds

Biogeography is independent of anatomy and DNA. It uses a different kind of data (geographic location) yet predicts the same relationships: Galápagos finches are closest in DNA to South American birds; Australian marsupials are closest to one another. Again, independent lines of evidence agree.

> 🔑 **AP Connection:** In biogeography questions, the winning explanation is almost always "descended from colonists from the nearest source population, then diversified," not "adapted to a similar climate."
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s7-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Practice — Common Ancestry and Biogeography** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A newly discovered single-celled organism has a nucleus, linear chromosomes, and genes interrupted by introns. Which conclusion is best supported?',
            options: [
              'It is more closely related to fungi than to bacteria',
              'It is more closely related to bacteria than to fungi',
              'It evolved its nucleus apart from other eukaryotes',
              'It is equally related to bacteria and to fungi'
            ],
            correctAnswer: 0,
            explanation: 'A nucleus, linear chromosomes, and introns together are inherited features of eukaryotes, so the organism shares a more recent ancestor with fungi, which are eukaryotes. A complex nucleus is unlikely to have arisen separately, and the features rule out equal relatedness to a prokaryote.'
          },
          {
            question: 'Species on the Galápagos Islands resemble species of mainland South America, while species on the Cape Verde Islands, with a similar climate, resemble species of Africa. Which explanation is best supported?',
            options: [
              'Similar island climates produced the same kinds of species separately',
              'Each island group gained species suited to its particular conditions',
              'Mainland species descended from colonists that left the island groups',
              'Island species descended from colonists from the closest mainland area'
            ],
            correctAnswer: 3,
            explanation: 'Colonists arrive most easily from the closest mainland, and their descendants diversify, so island species resemble nearby continental species. The two island groups have similar conditions yet very different species, which rules out climate as the explanation.'
          },
          {
            question: 'Succulent plants in African deserts look like American cacti, but their flowers and DNA match African plant groups. What does this pattern best show?',
            options: [
              'Cacti carried to Africa long ago changed into local succulents',
              'Arid conditions selected similar forms in separate lineages',
              'The succulents and cacti inherited their shape from one recent ancestor',
              'Their flowers changed to match local pollinators after migrating'
            ],
            correctAnswer: 1,
            explanation: 'Similar dry environments favored thick, spiny, water-storing stems in two unrelated lineages, which is convergent evolution. The flowers and DNA, which reflect ancestry, place the African succulents with African relatives rather than with cacti.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p4-s8-summary',
      type: 'text' as const,
      content: `
### Part 4 Summary

| Concept | Key detail |
|---------|-----------|
| Three domains | Bacteria, Archaea, Eukarya |
| Universal features | DNA and RNA as genetic material, ribosomes, the genetic code, core pathways such as glycolysis |
| Why the code matters | Codon assignments are arbitrary; one shared code implies one origin |
| Eukaryotic features | Membrane-bound organelles, linear chromosomes, genes with introns |
| Nested groups | Shared features nest like branches, as branching descent predicts |
| Biogeography | Species resemble nearby species, not distant species in similar climates |

**Up next → Part 5: Continuing Evolution**
      `
    }
  ]
};
