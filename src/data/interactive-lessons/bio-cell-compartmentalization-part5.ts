export const bioCellCompartmentPart5Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p5-s1-intro',
      type: 'text' as const,
      content: `
## Prokaryotes and the Origin of Organelles

**Part 5 of 7 — Prokaryotes and the Origin of Organelles**

CED Topic 2.11 (Origins of Cell Compartmentalization) asks you to compare how prokaryotic and eukaryotic cells are organized inside and to explain where mitochondria and chloroplasts came from. Its essential knowledge makes three points:

1. Membrane-bound organelles **evolved from previously free-living prokaryotic cells via endosymbiosis**.
2. Prokaryotes **generally lack internal membrane-bound organelles** but have internal regions with specialized structures and functions.
3. Eukaryotic cells **maintain internal membranes that partition the cell** into specialized regions.

### How a prokaryote organizes its interior

"No organelles" does not mean "no organization." A typical bacterial cell has:

| Region or structure | What it does |
|---|---|
| **Nucleoid** | A region where the circular chromosome is concentrated; it is not surrounded by a membrane |
| **Ribosomes** | Make proteins throughout the cytoplasm; smaller than eukaryotic cytoplasmic ribosomes |
| **Plasmids** | Small circular DNA molecules that often carry genes such as antibiotic resistance |
| **Plasma membrane** | Site of the electron transport chain and ATP synthase, and of many transport proteins |
| **Internal membranes in some groups** | Cyanobacteria have thylakoid membranes that hold their photosynthetic machinery |
| **Protein-shelled compartments in some groups** | Some photosynthetic bacteria enclose the carbon-fixing enzyme rubisco in a protein shell (not a membrane) that concentrates $\\text{CO}_2$ around it |

The last row is a useful reminder: the *benefits* of compartmentalization (concentrating reactants, separating reactions) can be achieved without a lipid membrane.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p5-s2-compare',
      type: 'text' as const,
      content: `
### Why small cells can manage without internal membranes

Prokaryotic cells are usually about 1 to 5 μm across, while many eukaryotic cells are 10 to 100 μm. A small cell has a high surface-area-to-volume ratio, so its plasma membrane offers enough area for respiration and transport, and diffusion moves molecules across the whole cell quickly. A larger eukaryotic cell relies on internal membranes to supply working surface and to keep its many processes from interfering.

| Feature | Prokaryotic cell | Eukaryotic cell |
|---|---|---|
| DNA location | Nucleoid region, no membrane | Nucleus enclosed by a double-membrane envelope |
| Transcription and translation | Can occur at the same time in the cytoplasm | Separated in space and time by the nuclear envelope |
| ATP synthesis by chemiosmosis | Plasma membrane | Inner mitochondrial membrane (and thylakoids in plants and algae) |
| Protein processing and secretion | Proteins made in the cytoplasm and secreted directly across the plasma membrane | ER, Golgi and vesicles form a dedicated route |
| Digestion of macromolecules | Enzymes secreted outside the cell | Lysosomes (and food vacuoles) inside the cell |
      `
    },
    {
      id: 'bio-cell-compartmentalization-p5-s3-mcq-compare',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Prokaryotic Organization
      `,
      exercise: {
        questions: [
          {
            question: 'A newly described microbe has a circular chromosome concentrated in one region of the cytoplasm with no surrounding membrane, and makes ATP using proteins in its plasma membrane. Which conclusion is best supported?',
            options: [
              'It is a prokaryote whose DNA lies in a nucleoid',
              'It is a eukaryote whose nuclear envelope was lost in preparation',
              'It is a eukaryote that keeps its mitochondria near the membrane',
              'It is a prokaryote that has lost its ability to make ribosomes'
            ],
            correctAnswer: 0,
            explanation: 'A membrane-free region of concentrated circular DNA is a nucleoid, and ATP synthesis at the plasma membrane is the prokaryotic arrangement. Nothing in the description suggests missing ribosomes.'
          },
          {
            question: 'Some bacteria surround the enzyme rubisco with a protein shell that keeps $\\text{CO}_2$ concentrated around the enzyme. Which statement best describes this structure?',
            options: [
              'It is an organelle with a membrane of its own',
              'It shows compartment benefits without a membrane',
              'It is a chloroplast that lost its outer membrane',
              'It shows that bacteria have a full endomembrane system'
            ],
            correctAnswer: 1,
            explanation: 'The protein shell concentrates a substrate around an enzyme, a benefit of compartmentalization, without a lipid bilayer. It is not membrane-bound and does not come from a chloroplast.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p5-s4-endosymbiosis',
      type: 'text' as const,
      content: `
### The endosymbiont model

**Endosymbiosis** is a relationship in which one organism lives inside the cells of another. The endosymbiont model explains mitochondria and chloroplasts in three steps:

1. **Mitochondria.** An ancestral host cell took in an aerobic bacterium. Instead of being digested, the bacterium survived and divided inside the host. The host gained a highly efficient way to make ATP using oxygen; the bacterium gained a protected, nutrient-rich home.
2. **Gene transfer.** Over a very long time, most of the endosymbiont's genes moved to the host nucleus or were lost. The partner became an organelle that can no longer live on its own.
3. **Chloroplasts.** Later, in a lineage that **already had mitochondria**, a cell took in a photosynthetic **cyanobacterium**, which became the chloroplast.

The order follows from the distribution of organelles today: essentially all eukaryotes have mitochondria or organelles derived from them, but only plants, algae and a few other groups have chloroplasts.

### The evidence

| Observation about mitochondria and chloroplasts | Why it supports the model |
|---|---|
| Two membranes surround each organelle | Fits engulfment of a cell by another; the inner membrane resembles a bacterial plasma membrane in its enzymes and transport systems |
| Each has its own **circular DNA** | Bacterial chromosomes are circular; nuclear chromosomes are linear |
| Each has its own **ribosomes**, similar to bacterial ribosomes | Some antibiotics that block bacterial ribosomes also block these organelle ribosomes |
| They divide by a fission-like process | Bacteria reproduce by binary fission; cells cannot build these organelles from scratch |
| Their DNA sequences group with specific bacteria | Mitochondrial genes are most similar to one group of bacteria; chloroplast genes are most similar to cyanobacteria |

The sequence evidence is especially useful because it does more than show "bacteria-like" features: it identifies *which* bacteria the organelles are related to.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Does the observation support the endosymbiont model?
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chloroplast ribosomes are blocked by an antibiotic that targets bacterial ribosomes',
            options: ['Supports the model', 'Does not bear on it', 'Argues against it', 'Supports only for mitochondria']
          },
          {
            label: 'Mitochondria are abundant in muscle cells that use a lot of ATP',
            options: ['Supports the model', 'Argues against it', 'Does not bear on it', 'Supports only for mitochondria']
          },
          {
            label: 'New mitochondria arise only from the division of existing mitochondria',
            options: ['Argues against it', 'Supports the model', 'Does not bear on it', 'Supports only for mitochondria']
          }
        ],
        correctAnswers: ['Supports the model', 'Does not bear on it', 'Supports the model'],
        hint1: 'Ask whether the observation links the organelle to bacteria specifically.',
        hint2: 'How many mitochondria a cell has reflects its energy demand, not its ancestry.',
        hint3: 'Bacteria arise only from other bacteria by division.',
        explanation: 'Antibiotic sensitivity and division from preexisting organelles both match bacterial traits, so they support the model. Mitochondrial abundance in active tissue reflects function, not origin, so it does not bear on the model.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p5-s6-nuance',
      type: 'text' as const,
      content: `
### Nuance and common misconceptions

- **"Mitochondria are bacteria living in our cells."** They are descended from bacteria, but most of the genes they need are now in the nucleus. A mitochondrion cannot be grown outside a cell.
- **"Endosymbiosis explains the nucleus too."** The CED's examples are mitochondria and chloroplasts. How the nucleus and the endomembrane system arose is a separate question; a common textbook model has them forming from infoldings of the plasma membrane. You will not be tested on that model's details.
- **"Chloroplasts came first."** Chloroplasts were acquired by cells that already had mitochondria, which is why every plant cell has both.
- **"Circular DNA alone proves the model."** Each line of evidence is consistent with the model; the case is strong because the independent lines agree.

#### Worked reasoning — why antibiotics can harm human cells

Some antibiotics work by blocking bacterial ribosomes, and they are useful because human cytoplasmic ribosomes are different. But mitochondrial ribosomes resemble bacterial ones. **Prediction:** at high doses, such a drug could reduce protein synthesis inside human mitochondria, lowering production of the few respiratory proteins encoded by mitochondrial DNA. This is a direct, testable consequence of the evolutionary origin of the organelle.

> **AP Connection:** Expect "describe a similarity or difference" items comparing prokaryotic and eukaryotic compartmentalization, and "justify" items that ask which observation supports endosymbiosis. A justification must tie the observation to a bacterial trait, not just state it.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Evaluating the Evidence
      `,
      exercise: {
        questions: [
          {
            question: 'Which observation most specifically supports the claim that chloroplasts descended from cyanobacteria rather than from some other bacterial group?',
            options: [
              'They have their own circular DNA and their own ribosomes',
              'Their gene sequences are closest to those of that lineage',
              'They are enclosed by two membranes, as engulfed cells are',
              'They divide by a fission-like process, as bacteria often do'
            ],
            correctAnswer: 1,
            explanation: 'Own DNA, double membranes and fission point to a bacterial origin in general, but only the sequence comparison picks out cyanobacteria as the closest relatives.'
          },
          {
            question: 'Nearly every eukaryotic lineage has mitochondria or organelles derived from them, but only some lineages have chloroplasts. What does this pattern best support?',
            options: [
              'Chloroplasts arose first and were later lost by animals and fungi',
              'Mitochondria were acquired before the major groups diverged',
              'Mitochondria and chloroplasts arose together in a single engulfment',
              'Chloroplasts formed from mitochondria that gained photosynthesis'
            ],
            correctAnswer: 1,
            explanation: 'A feature shared by nearly all eukaryotic lineages was most likely present in their common ancestor, while chloroplasts were acquired later in only some lineages. Chloroplasts descend from cyanobacteria, not from mitochondria.'
          },
          {
            question: 'An antibiotic that targets bacterial ribosomes is added to cultured human cells at a high dose. Which effect is most consistent with the endosymbiont model?',
            options: [
              'Slower synthesis of proteins inside mitochondria',
              'Faster synthesis of proteins on the rough ER',
              'No effect at all, since human cells lack bacteria',
              'Loss of the nuclear envelope in dividing cells'
            ],
            correctAnswer: 0,
            explanation: 'Mitochondrial ribosomes resemble bacterial ribosomes, so a drug that blocks bacterial ribosomes can also slow protein synthesis inside mitochondria. Cytoplasmic ribosomes on the rough ER are a different type.'
          }
        ]
      }
    }
  ]
};
