export const bioPhylogeneticsCladisticsPart5Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl5-intro',
      type: 'text' as const,
      content: `# Classification Systems

**Part 5 of 7 — Phylogenetics & Cladistics**

Taxonomy is the science of naming and classifying organisms. Modern classification aims to reflect **evolutionary relationships** (phylogeny), connecting the Linnaean hierarchy with cladistic principles.

### The three domains of life

The broadest classification organizes all life into **three domains**, proposed by Carl Woese based on ribosomal RNA (rRNA) sequence comparisons:

| Domain | Cell type | Membrane lipids | Examples |
|---|---|---|---|
| **Bacteria** | Prokaryotic | Ester-linked | *E. coli*, *Streptococcus*, cyanobacteria |
| **Archaea** | Prokaryotic | Ether-linked | Methanogens, halophiles, thermophiles |
| **Eukarya** | Eukaryotic | Ester-linked | Animals, plants, fungi, protists |

> 🧬 **Key AP point:** Archaea are more closely related to Eukarya than to Bacteria, despite both Archaea and Bacteria being prokaryotic. This was revealed by molecular (rRNA) data and overturned the earlier two-kingdom and five-kingdom classification systems.

### Six kingdoms (within the three domains)

| Kingdom | Domain | Key features |
|---|---|---|
| Bacteria | Bacteria | Peptidoglycan cell walls, diverse metabolism |
| Archaea | Archaea | Unique cell membranes, extremophiles common |
| Protista | Eukarya | Diverse; mostly unicellular eukaryotes (paraphyletic!) |
| Fungi | Eukarya | Heterotrophs, chitin cell walls, absorptive nutrition |
| Plantae | Eukarya | Autotrophs, cellulose cell walls, photosynthesis |
| Animalia | Eukarya | Heterotrophs, no cell walls, motile |

> ⚠️ **Note:** Kingdom Protista is **paraphyletic** — it is a "catch-all" group that does not represent a single clade. Modern classification splits protists into multiple monophyletic supergroups.`
    },
    {
      id: 'phyl5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Domains & Kingdoms** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Based on molecular evidence, which two domains are most closely related?',
            options: [
              'Archaea and Eukarya',
              'Bacteria and Archaea',
              'Bacteria and Eukarya',
              'All three domains are equally related'
            ],
            correctAnswer: 0,
            explanation: 'Ribosomal RNA comparisons and other molecular evidence show that Archaea and Eukarya share a more recent common ancestor than either does with Bacteria. This is surprising because Archaea and Bacteria are both prokaryotic in cell structure, but molecular data reveals the true evolutionary relationship.'
          },
          {
            question: 'Why is Kingdom Protista considered problematic in modern classification?',
            options: [
              'It is paraphyletic — it does not include all descendants of a single common ancestor',
              'It contains too few species to be a valid kingdom',
              'Protists are all actually bacteria misidentified as eukaryotes',
              'It is polyphyletic based on morphological evidence only'
            ],
            correctAnswer: 0,
            explanation: 'Protista is paraphyletic because it excludes plants, animals, and fungi, all of which descended from protist-like ancestors. A proper clade should include ALL descendants of a common ancestor — Protista leaves out major lineages, making it an artificial grouping.'
          }
        ]
      }
    },
    {
      id: 'phyl5-linnaean',
      type: 'text' as const,
      content: `## The Linnaean Hierarchy & Binomial Nomenclature

### Carolus Linnaeus (1707–1778)

Linnaeus developed the hierarchical classification system still used today, along with **binomial nomenclature** — the two-part naming system for species.

### Taxonomic hierarchy (most inclusive → least inclusive)

| Rank | Example (Human) | Example (Dog) | Mnemonic |
|---|---|---|---|
| **Domain** | Eukarya | Eukarya | **D**ear |
| **Kingdom** | Animalia | Animalia | **K**ing |
| **Phylum** | Chordata | Chordata | **P**hilip |
| **Class** | Mammalia | Mammalia | **C**ame |
| **Order** | Primates | Carnivora | **O**ver |
| **Family** | Hominidae | Canidae | **F**or |
| **Genus** | *Homo* | *Canis* | **G**ood |
| **Species** | *H. sapiens* | *C. lupus familiaris* | **S**paghetti |

### Binomial nomenclature rules

1. The scientific name consists of **Genus + specific epithet** (e.g., *Homo sapiens*)
2. The genus name is **capitalized**; the specific epithet is **lowercase**
3. The entire name is **italicized** (or underlined if handwritten)
4. After first mention, the genus can be abbreviated: *H. sapiens*

### Why standardize naming?

- Common names vary by region and language
- The same common name may refer to different organisms
- Scientific names are **universal** and **precise**

> 🐻 **Example:** "Black bear" could mean *Ursus americanus* (American black bear) or *Ursus thibetanus* (Asian black bear). The binomial name eliminates confusion.`
    },
    {
      id: 'phyl5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Taxonomy & Naming** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two organisms are in the same order but different families. What can you conclude?',
            options: [
              'They share a common ancestor at the order level but diverged before the family level',
              'They are members of the same species',
              'They must live in the same geographic region',
              'They cannot share any homologous structures'
            ],
            correctAnswer: 0,
            explanation: 'The Linnaean hierarchy is nested — being in the same order means they share a relatively recent common ancestor (at the order level) but are in different families, meaning they diverged into separate family-level lineages. They definitely share homologous structures (at least those defining the order).'
          },
          {
            question: 'Which of the following is a correctly written scientific name?',
            options: [
              '*Canis lupus*',
              '*canis Lupus*',
              'Canis Lupus',
              '*CANIS LUPUS*'
            ],
            correctAnswer: 0,
            explanation: 'Binomial nomenclature requires: (1) the genus capitalized, (2) the specific epithet lowercase, and (3) the entire name italicized. *Canis lupus* follows all three rules correctly.'
          }
        ]
      }
    },
    {
      id: 'phyl5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Classification Systems** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The three domains of life are Bacteria, Archaea, and', options: ['Eukarya', 'Protista', 'Plantae', 'Fungi'] },
          { label: 'The domain system was established based primarily on', options: ['ribosomal RNA (rRNA) sequences', 'physical appearance', 'habitat type', 'cell size'] },
          { label: 'In the Linnaean hierarchy, the most specific (least inclusive) rank is', options: ['species', 'kingdom', 'domain', 'phylum'] },
          { label: 'In binomial nomenclature, a scientific name consists of', options: ['genus + specific epithet', 'kingdom + phylum', 'family + order', 'domain + kingdom'] }
        ],
        correctAnswers: ['Eukarya', 'ribosomal RNA (rRNA) sequences', 'species', 'genus + specific epithet'],
        hint1: 'The three domains replaced the earlier five-kingdom system based on molecular evidence.',
        hint2: 'Carl Woese compared rRNA sequences to propose the three-domain system.',
        hint3: 'Domain is the most inclusive rank; species is the most specific. Scientific names use genus + specific epithet.',
        explanation: 'The three domains (Bacteria, Archaea, Eukarya) were established by Carl Woese using rRNA comparisons. In the Linnaean hierarchy, species is the most specific rank. Binomial nomenclature combines the genus name and the specific epithet (e.g., *Homo sapiens*).'
      }
    },
    {
      id: 'phyl5-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Taxonomy in Practice** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Two organisms in the same family must also be in the same', options: ['order', 'species', 'genus', 'subspecies'] },
          { label: 'Archaea and Bacteria are both prokaryotic, but Archaea are more closely related to', options: ['Eukarya', 'Bacteria', 'Plantae', 'Fungi'] },
          { label: 'Kingdom Protista is considered paraphyletic because it excludes some', options: ['descendants of its common ancestor (plants, animals, fungi)', 'prokaryotic organisms', 'single-celled organisms', 'extinct species'] }
        ],
        correctAnswers: ['order', 'Eukarya', 'descendants of its common ancestor (plants, animals, fungi)'],
        hint1: 'The hierarchy is nested: species → genus → family → order → class → phylum → kingdom → domain.',
        hint2: 'Molecular data shows Archaea share more recent ancestry with Eukarya despite morphological similarity to Bacteria.',
        hint3: 'Paraphyletic means the group includes the ancestor but leaves out some descendants.',
        explanation: 'Being in the same family means the organisms must also share all higher ranks (order, class, phylum, kingdom, domain). Despite prokaryotic cell structure, Archaea are molecularly closer to Eukarya. Protista is paraphyletic because plants, animals, and fungi all descended from protist-like ancestors but are excluded from the kingdom.'
      }
    }
  ]
};
