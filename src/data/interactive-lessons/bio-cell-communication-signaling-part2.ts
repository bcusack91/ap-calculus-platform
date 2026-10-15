export const bioCellCommPart2Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
## Types of Signaling

**Part 2 of 7 — Types of Signaling**

Part 1 showed that every pathway runs reception → transduction → response. This part asks a different question: **how does the signal get from the sending cell to the target cell?** The AP CED sorts cell communication by **distance**:

| Category | How the signal travels | Typical range |
|----------|------------------------|---------------|
| **Direct contact** | Through junctions joining the cytoplasm of neighbors, or by surface molecules touching | Adjacent cells only |
| **Local (short-distance) signaling** | A **local regulator** diffuses through the fluid between cells | Cells in the vicinity |
| **Long-distance (endocrine) signaling** | A **hormone** travels in the circulatory system (or plant vascular tissue) | Anywhere in the body |

Distance matters because it controls **who** receives the message, **how fast** it arrives and **how long** the effect lasts.
      `
    },
    {
      id: 'cell2-contact',
      type: 'text' as const,
      content: `
### 1. Direct contact

**a. Cell junctions that connect cytoplasm**

- **Gap junctions** (animals) are protein channels linking two cells. Ions and small molecules such as cAMP pass directly from one cell to the next. Heart muscle cells use gap junctions so that an electrical signal spreads quickly and the cells contract together.
- **Plasmodesmata** (plants) are channels through the cell walls lined with plasma membrane. Water, sugars, ions and even some RNA and proteins move from cell to cell.

**b. Cell-surface recognition**

Some signals are never released at all. A molecule anchored on one cell's surface binds a receptor on a neighbor's surface.

- **Immune cells.** An **antigen-presenting cell** displays a fragment of a pathogen on its surface. A **helper T cell** whose receptor matches that fragment binds it by direct contact and becomes activated. Cytotoxic (killer) T cells likewise recognize infected cells by contact before destroying them.
- **Embryonic development.** Neighboring cells touch and signal so that one becomes, for example, a nerve cell while the cell next to it becomes skin.

> 💡 Contact signaling is the most **targeted** form: only the cell actually touching receives the message.
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers inject a fluorescent dye small enough to pass through channels into one heart muscle cell. Within minutes, neighboring cells glow too. What structure most likely allowed this?',
            options: [
              'Gap junctions joining the cytoplasm of adjacent cells',
              'Plasmodesmata passing through the walls of adjacent cells',
              'Hormone receptors on the surface of adjacent cells',
              'Tight junctions sealing the space between adjacent cells'
            ],
            correctAnswer: 0,
            explanation: 'Gap junctions are channels between animal cells that let small molecules pass directly from one cytoplasm to the next. Plasmodesmata do the same job in plants, and tight junctions block passage between cells rather than connect them.'
          },
          {
            question: 'A helper T cell is activated only after it physically binds a pathogen fragment displayed on another cell. This is an example of which kind of signaling?',
            options: [
              'Endocrine signaling by a hormone',
              'Paracrine signaling by a growth factor',
              'Contact signaling between two cells',
              'Synaptic signaling by a neurotransmitter'
            ],
            correctAnswer: 2,
            explanation: 'The signal molecule stays anchored on the antigen-presenting cell and is read by the T cell receptor on contact. No molecule is released to travel to the target.'
          }
        ]
      }
    },
    {
      id: 'cell2-local',
      type: 'text' as const,
      content: `
### 2. Local signaling: local regulators

A **local regulator** is secreted into the extracellular fluid and acts on cells nearby. It is quickly taken up, broken down or diluted, so its effect stays local.

| Form | What happens | Example |
|------|--------------|---------|
| **Paracrine** | A cell secretes a regulator that diffuses to nearby target cells | Growth factors that stimulate nearby cells to divide; **morphogens** that form concentration gradients telling embryonic cells their position |
| **Synaptic** | A nerve cell releases a **neurotransmitter** across a narrow synapse to one target cell | Acetylcholine released onto a muscle cell |
| **Autocrine** | A cell responds to a signal it secreted itself | Some immune cells stimulating their own division |

**Quorum sensing in bacteria.** Bacteria use local signaling to measure their own population density. Each cell releases a small signal molecule (an *autoinducer*) at a low, steady rate. When few cells are present, the signal diffuses away. When the population is dense, the signal accumulates past a **threshold**, binds receptors in every cell, and switches on a set of genes all at once.

*Example:* the marine bacterium *Vibrio fischeri* glows only at high density, inside the light organ of the Hawaiian bobtail squid. A single free-living cell does not waste energy making light that would never be seen.

> 📝 **AP Connection:** Quorum sensing is the CED's model for how a signal can coordinate a **group** response. Biofilm formation and the release of toxins by some pathogens are also controlled this way.
      `
    },
    {
      id: 'cell2-endocrine',
      type: 'text' as const,
      content: `
### 3. Long-distance signaling: hormones

In **endocrine signaling**, specialized cells release **hormones** into the blood. The hormone reaches nearly every cell, but only cells with the matching receptor respond.

| Hormone | Released by | Example target and response |
|---------|-------------|------------------------------|
| **Insulin** | Pancreas (beta cells) | Liver, muscle and fat cells take up glucose |
| **Human growth hormone** | Anterior pituitary | Many tissues grow |
| **Thyroid hormones** | Thyroid gland | Most cells raise their metabolic rate |
| **Testosterone / estrogen** | Testes / ovaries | Reproductive tissues develop and function |

Plants also signal over long distances: hormones such as **ethylene** (fruit ripening) and **auxin** (growth toward light) move through tissues or the air.

### Comparing the three categories

| Feature | Direct contact | Local regulator | Hormone |
|---------|----------------|-----------------|---------|
| Distance | Touching cells | Nearby cells | Whole body |
| Speed of arrival | Very fast | Fast | Slower (minutes to hours) |
| Number of targets | One neighbor | A local cluster | Every cell with the receptor |
| Duration of effect | Brief | Brief | Often long-lasting |

> 💡 **Misconception alert:** Nerve signals are not "long-distance hormone signals." A neuron's electrical impulse travels a long way along the axon, but the **chemical** signal at the end is local: the neurotransmitter crosses only a tiny synapse.
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: Choosing the Signaling Type** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A bacterial species produces a toxin only when its population in a host is large. Each cell releases a small molecule continuously. Which mechanism best explains the timing of toxin release?',
            options: [
              'Each cell divides more slowly as the host runs out of nutrients',
              'The secreted signal builds up past a threshold at high density',
              'Host hormones travel in the blood and activate the bacteria directly',
              'Neighboring bacteria pass the toxin genes to each other by contact'
            ],
            correctAnswer: 1,
            explanation: 'This is quorum sensing: the signal molecule accumulates only when many cells are present, and above a threshold it switches on the toxin genes in all of them together.'
          },
          {
            question: 'In an embryo, cells close to a source of a secreted protein become one tissue type, and cells farther away become another. What kind of signal is the secreted protein?',
            options: [
              'A hormone released into the blood',
              'A neurotransmitter crossing a synapse',
              'A local regulator forming a concentration gradient',
              'A surface protein read by cell contact'
            ],
            correctAnswer: 2,
            explanation: 'A secreted protein whose concentration falls with distance is a morphogen, a local (paracrine) regulator. Cells read their position from how much of it reaches them.'
          },
          {
            question: 'Why does a single dose of a hormone usually affect more tissues than a single release of neurotransmitter does?',
            options: [
              'Hormones bind receptors more strongly than neurotransmitters bind theirs',
              'Neurotransmitters are destroyed before they can bind any receptors at all',
              'Hormones circulate to every cell that has the matching receptor',
              'Neurotransmitters can only act on the cell that released them'
            ],
            correctAnswer: 2,
            explanation: 'Blood carries a hormone throughout the body, so every tissue with the receptor can respond. A neurotransmitter acts on the one target cell across the synapse, not on the cell that released it.'
          }
        ]
      }
    },
    {
      id: 'cell2-evolution',
      type: 'text' as const,
      content: `
### Signaling is ancient: evidence from yeast

Baker's yeast (*Saccharomyces cerevisiae*) has two mating types, **a** and **α**. Each type secretes a **mating factor** that binds a receptor on cells of the other type. The receptor activates a G protein and then a chain of protein kinases, and the two cells grow toward each other and fuse.

The yeast receptor belongs to the same family (G protein-coupled receptors) that detects epinephrine, odors and light in animals, and the yeast kinase chain resembles the growth pathways in your own cells.

**Why this matters:** shared pathway parts in yeast, plants and animals suggest that these signaling systems evolved in an early common ancestor of eukaryotes and have been conserved.

> 🎯 **Takeaway:** Classify a signal by how it reaches the target: contact, local regulator or hormone. Then predict reach, speed and duration from that classification.
      `
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Signal** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Insulin released by the pancreas lowers blood glucose in muscle and fat',
            options: ['Direct contact', 'Local regulator', 'Long-distance hormone']
          },
          {
            label: 'Sugars move between plant cells through plasmodesmata',
            options: ['Direct contact', 'Local regulator', 'Long-distance hormone']
          },
          {
            label: 'A growth factor released by a wound cell stimulates neighbors to divide',
            options: ['Direct contact', 'Local regulator', 'Long-distance hormone']
          }
        ],
        correctAnswers: ['Long-distance hormone', 'Direct contact', 'Local regulator'],
        hint1: 'Ask whether the signal is released at all, and if it is, how far it travels.',
        hint2: 'Plasmodesmata join the cytoplasm of neighboring plant cells.',
        hint3: 'Growth factors acting on nearby cells are paracrine signals.',
        explanation: 'Insulin travels in the blood (endocrine), plasmodesmata connect adjacent plant cells (direct contact), and a growth factor acting on neighbors is a local, paracrine regulator.'
      }
    }
  ]
}
