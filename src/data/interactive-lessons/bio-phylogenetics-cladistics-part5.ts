export const bioPhylogeneticsCladisticsPart5Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl5-intro',
      type: 'text' as const,
      content: `# Evidence for Common Ancestry

**Part 5 of 7 — Phylogenetics & Cladistics**

Phylogenetic trees and cladograms are hypotheses, and they are built and tested with evidence. Evolution is supported by data from many disciplines — geographical, geological, physical, biochemical, and mathematical — and evidence from both living (extant) and extinct organisms adds to the picture.

### Lines of evidence used to build trees

| Evidence | What it shows | Example |
|---|---|---|
| **Fossils** | When lineages existed; transitional forms | Early whale relatives such as *Pakicetus* had four legs |
| **Morphological homologies** | Shared anatomy inherited from a common ancestor | Vertebrate forelimb bones; the vestigial whale pelvis |
| **DNA and protein sequences** | How many differences separate two lineages | Cytochrome c amino acid comparisons |
| **Cellular features** | Shared structures that point to a single origin | Membrane-bound organelles in all eukaryotes |

### Dating fossils

Fossils can be dated by several methods:
1. **The age of the rocks** where a fossil is found — deeper layers are generally older, and dated layers above and below a fossil bracket its age
2. **The rate of decay of isotopes**, including carbon-14 — carbon-14 works for remains up to roughly 50,000 years old; older fossils are dated with longer-lived isotopes in the surrounding rock
3. **Geographical data** — for example, where a fossil formation sits relative to others of known age

Dated fossils are what calibrate a phylogenetic tree's time scale.

### Common ancestry of all eukaryotes

All eukaryotes share structural and functional features that point to a single common ancestor:
- **Membrane-bound organelles** (nucleus, mitochondria, endoplasmic reticulum, Golgi)
- **Linear chromosomes**
- **Genes that contain introns**

Prokaryotes, by contrast, have no membrane-bound organelles, usually carry a single circular chromosome, and rarely have introns in their genes. A shared package of complex features like this is very unlikely to have evolved independently more than once.`
    },
    {
      id: 'phyl5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Lines of Evidence** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which feature is shared by all eukaryotes and supports their common ancestry?',
            options: [
              'Linear chromosomes inside a nucleus',
              'A cell wall made of peptidoglycan',
              'A single circular chromosome',
              'Chloroplasts in every cell'
            ],
            correctAnswer: 0,
            explanation: 'Linear chromosomes, membrane-bound organelles such as the nucleus, and genes containing introns are shared by all eukaryotes and indicate their common ancestry. Peptidoglycan walls and a single circular chromosome are features of bacteria, and only photosynthetic eukaryotes such as plants and algae have chloroplasts.'
          },
          {
            question: 'A fossil is found in a rock layer that lies below a layer dated at 40 million years old and above a layer dated at 55 million years old. What is the best estimate of the fossil\'s age?',
            options: [
              'Between 40 and 55 million years',
              'Younger than 40 million years',
              'Older than 55 million years',
              'Exactly 47.5 million years'
            ],
            correctAnswer: 0,
            explanation: 'In undisturbed layers, deeper rock is older. The fossil lies beneath the 40-million-year layer, so it is older than that, and above the 55-million-year layer, so it is younger than that. The layers bracket its age; they do not pin it to the midpoint.'
          }
        ]
      }
    },
    {
      id: 'phyl5-revision',
      type: 'text' as const,
      content: `## When New Evidence Revises a Tree

Phylogenetic trees and cladograms are **constantly being revised** as new evidence appears. When morphological and molecular evidence disagree, the molecular evidence is usually given more weight, because it supplies many more characters and is less affected by convergent evolution.

### Case 1 — Whales and hippos

- **Older view:** Based on anatomy, whales were placed in a group of their own, outside the even-toed hoofed mammals (pigs, camels, deer, hippos).
- **Molecular evidence:** DNA comparisons placed whales *within* the even-toed hoofed mammals, with **hippos as their closest living relatives**.
- **Test:** If the DNA tree is right, early fossil whales should share skeletal features with even-toed hoofed mammals. In 2001, fossil whale ancestors were described with the distinctive double-pulley ankle bone found only in that group — supporting the molecular tree.

### Case 2 — Two kinds of prokaryotes

- **Older view:** All organisms without a nucleus were grouped together.
- **Molecular evidence:** Comparisons of ribosomal RNA sequences showed that archaea share a more recent common ancestor with eukaryotes than with bacteria, even though archaea and bacteria look alike under the microscope.

### Evolution is ongoing

All species have evolved and continue to evolve. Evidence includes genomic changes over time, continuous change in the fossil record, and the evolution of resistance to antibiotics, pesticides, herbicides, and chemotherapy drugs. Trees built today are a snapshot of lineages that are still changing.`
    },
    {
      id: 'phyl5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Revising Trees** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Anatomy once placed whales outside the even-toed hoofed mammals, but DNA comparisons place whales closest to hippos. Which new finding would most strongly support the DNA-based tree?',
            options: [
              'Fossil whale ancestors sharing a unique ankle bone with hippos and pigs',
              'Living whales and sharks that both have streamlined bodies and fins',
              'A hippo protein that differs from the whale version at many sites',
              'Whales and hippos that both spend most of their lives in water'
            ],
            correctAnswer: 0,
            explanation: 'A skeletal feature found only in even-toed hoofed mammals, present in early whale fossils, is an independent shared derived character that matches the DNA tree. Streamlined bodies in whales and sharks are convergent, a protein with many differences would argue against a close relationship, and a shared aquatic lifestyle could arise by convergence.'
          },
          {
            question: 'Archaea were once grouped with bacteria because neither has a nucleus. Ribosomal RNA comparisons later showed that archaea share a more recent common ancestor with eukaryotes. What does this example best illustrate?',
            options: [
              'Trees are hypotheses that are revised when new evidence appears',
              'Cell structure is the most reliable evidence for grouping organisms',
              'Ribosomal RNA changes too quickly to be useful for building trees',
              'Organisms that lack a nucleus must share a most recent ancestor'
            ],
            correctAnswer: 0,
            explanation: 'The earlier grouping rested on a shared absence of a nucleus, which is an ancestral state rather than a shared derived character. Molecular data revised the tree, illustrating that phylogenies are hypotheses updated as evidence accumulates. Ribosomal RNA is used precisely because it changes slowly enough to compare very distant lineages.'
          }
        ]
      }
    },
    {
      id: 'phyl5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Evidence for Evolution** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Besides the age of surrounding rock layers, fossils can be dated using the decay rate of isotopes such as', options: ['carbon-14', 'nitrogen-15', 'oxygen-16', 'sodium-23'] },
          { label: 'Membrane-bound organelles, linear chromosomes, and genes with introns are evidence for the common ancestry of all', options: ['eukaryotes', 'bacteria', 'archaea', 'prokaryotes'] },
          { label: 'Reduced remnants of structures that served a function in an ancestor, such as the whale pelvis, are', options: ['vestigial structures', 'analogous structures', 'derived characters', 'transitional fossils'] },
          { label: 'When morphological and molecular trees conflict, the molecular tree is usually considered more', options: ['reliable', 'outdated', 'subjective', 'incomplete'] }
        ],
        correctAnswers: ['carbon-14', 'eukaryotes', 'vestigial structures', 'reliable'],
        hint1: 'Radiometric dating relies on an unstable isotope decaying at a known rate.',
        hint2: 'Prokaryotes lack membrane-bound organelles and usually have one circular chromosome.',
        hint3: 'Molecular data supply many characters and are less affected by convergent evolution.',
        explanation: 'Fossils can be dated by rock layers and by the decay of isotopes such as carbon-14. Membrane-bound organelles, linear chromosomes, and introns are shared by all eukaryotes. Vestigial structures are reduced ancestral remnants, and molecular trees are usually considered more reliable than morphological ones.'
      }
    },
    {
      id: 'phyl5-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Trees as Hypotheses** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Comparing DNA nucleotide sequences or protein amino acid sequences provides', options: ['biochemical evidence', 'geological evidence', 'geographical evidence', 'behavioral evidence'] },
          { label: 'Phylogenetic trees and cladograms are best described as', options: ['hypotheses revised with new evidence', 'permanent records of descent', 'classifications fixed by anatomy', 'lists of ancestors and descendants'] },
          { label: 'The DNA result placing whales closest to hippos was later supported by fossil whales with a distinctive', options: ['ankle bone', 'skull shape', 'tooth enamel', 'tail fluke'] }
        ],
        correctAnswers: ['biochemical evidence', 'hypotheses revised with new evidence', 'ankle bone'],
        hint1: 'Sequences of nucleotides and amino acids are molecules.',
        hint2: 'Every tree is built from the evidence available when it is drawn.',
        hint3: 'Even-toed hoofed mammals share a double-pulley bone in the hind foot.',
        explanation: 'Sequence comparisons are biochemical evidence. Trees and cladograms are hypotheses that are revised as evidence accumulates, as when fossil whales with the double-pulley ankle bone of even-toed hoofed mammals supported the DNA-based placement of whales next to hippos.'
      }
    }
  ]
};
