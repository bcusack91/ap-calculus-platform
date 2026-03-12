#!/usr/bin/env python3
"""Generate MCAT Batch 4: Cell Biology (7), Molecular Biology (7), Organ Systems (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# CELL BIOLOGY (7 parts)
###############################################################################

def gen_cell_bio():
    parts = {}
    parts[1] = r"""export const mcatCellBioPart1Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb1-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 1 of 7 — Cell Structure & Organelles**

### Prokaryotes vs. Eukaryotes

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| Nucleus | No (nucleoid region) | Yes (membrane-bound) |
| Organelles | None (membrane-bound) | Many |
| Size | 1-10 $\\mu$m | 10-100 $\\mu$m |
| DNA | Circular, no histones | Linear, with histones |
| Ribosomes | 70S (50S + 30S) | 80S (60S + 40S) |
| Cell wall | Peptidoglycan (bacteria) | Cellulose (plants), chitin (fungi), none (animals) |

### Key Organelles

| Organelle | Function | Key Facts |
|-----------|----------|-----------|
| Nucleus | DNA storage, transcription | Double membrane, nuclear pores |
| Rough ER | Protein synthesis (secretory) | Ribosomes attached |
| Smooth ER | Lipid synthesis, detox | No ribosomes |
| Golgi | Modify, sort, package proteins | cis (receiving) → trans (shipping) |
| Mitochondria | ATP production (aerobic) | Own DNA! Double membrane, maternal inheritance |
| Lysosome | Intracellular digestion | pH ~5 (acidic), hydrolytic enzymes |
| Peroxisome | Oxidation, H$_2$O$_2$ breakdown | Catalase enzyme |`
    },
    {
      id: 'cb1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cell Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'A researcher treats cells with a drug that disrupts hydrogen ion pumps on lysosomes, raising lysosomal pH to 7. The most likely effect is:',
            options: ['Lysosomal enzymes become inactive — they require acidic pH to function', 'Lysosomes become more active', 'The cell produces more lysosomes', 'No effect — pH doesn\'t matter'],
            correctAnswer: 0,
            explanation: 'Lysosomal hydrolases are acid hydrolases — they function optimally at pH ~5. At pH 7, these enzymes denature or become inactive, preventing intracellular digestion. This is a common MCAT passage scenario.'
          },
          {
            question: 'Mitochondria have their own DNA because they:',
            options: ['Likely evolved from engulfed aerobic bacteria (endosymbiotic theory)', 'Were always part of eukaryotic cells', 'Stole DNA from the nucleus', 'Need separate DNA for replication'],
            correctAnswer: 0,
            explanation: 'Endosymbiotic theory: mitochondria (and chloroplasts) were once free-living bacteria engulfed by a proto-eukaryote. Evidence: own circular DNA, 70S ribosomes, double membrane, divide by binary fission.'
          }
        ]
      }
    },
    {
      id: 'cb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know every organelle's function — this is guaranteed MCAT content
- Mitochondria and chloroplasts = endosymbiotic origin (own DNA, 70S ribosomes)
- Prokaryote ribosomes: 70S; Eukaryote ribosomes: 80S (antibiotic targeting!)
- Lysosomes need acidic pH; peroxisomes use catalase for H$_2$O$_2$`
    }
  ]
};
"""

    parts[2] = r"""export const mcatCellBioPart2Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb2-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 2 of 7 — Cell Membrane & Transport**

### Membrane Structure (Fluid Mosaic Model)

- **Phospholipid bilayer**: Hydrophilic heads out, hydrophobic tails in
- **Cholesterol**: Regulates fluidity (prevents crystallization at low T, prevents too much fluidity at high T)
- **Integral proteins**: Span the membrane (channels, receptors)
- **Peripheral proteins**: Loosely attached to surface

### Transport Mechanisms

| Type | Energy? | Direction | Examples |
|------|---------|-----------|---------|
| Simple diffusion | No | High → Low | O$_2$, CO$_2$, small nonpolar |
| Facilitated diffusion | No | High → Low | Glucose (GLUT), ions (channels) |
| Active transport | Yes (ATP) | Low → High | Na$^+$/K$^+$ ATPase |
| Endocytosis | Yes | Into cell | Phagocytosis, pinocytosis |
| Exocytosis | Yes | Out of cell | Neurotransmitter release |

### Na$^+$/K$^+$ ATPase (ULTRA HIGH YIELD)

Per ATP hydrolyzed: **3 Na$^+$ out, 2 K$^+$ in**
- Creates electrochemical gradient
- Maintains resting membrane potential (~$-70$ mV)
- Electrogenic (net positive charge moved out)`
    },
    {
      id: 'cb2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Membrane Transport** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cell is placed in a hypertonic solution. The cell will:',
            options: ['Shrink (crenation) — water moves out by osmosis', 'Swell and potentially lyse', 'Remain unchanged', 'Divide'],
            correctAnswer: 0,
            explanation: 'Hypertonic = higher solute concentration outside. Water follows solute (moves out by osmosis) → cell shrinks. In RBCs, this is called crenation.'
          },
          {
            question: 'The Na$^+$/K$^+$ ATPase pumps:',
            options: ['3 Na$^+$ out and 2 K$^+$ in per ATP', '2 Na$^+$ out and 3 K$^+$ in per ATP', '3 Na$^+$ in and 2 K$^+$ out per ATP', 'Equal numbers of Na$^+$ and K$^+$'],
            correctAnswer: 0,
            explanation: '3 Na$^+$ out, 2 K$^+$ in per ATP. This makes the pump electrogenic (net positive charge moved outside), contributing to the negative resting membrane potential (~$-70$ mV).'
          }
        ]
      }
    },
    {
      id: 'cb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Fluid mosaic model: phospholipids + cholesterol + proteins
- Small nonpolar molecules cross membranes freely; ions and large molecules need help
- Na$^+$/K$^+$ ATPase: 3 Na$^+$ out, 2 K$^+$ in (electrogenic)
- Osmosis: water moves toward higher solute concentration`
    }
  ]
};
"""

    parts[3] = r"""export const mcatCellBioPart3Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb3-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 3 of 7 — Cell Cycle & Mitosis**

### The Cell Cycle

| Phase | Events | Duration |
|-------|--------|----------|
| G$_1$ | Cell growth, organelle duplication | Variable |
| S | DNA replication | ~8 hours |
| G$_2$ | Final growth, preparation for mitosis | ~4 hours |
| M | Mitosis + cytokinesis | ~1 hour |
| G$_0$ | Quiescent (non-dividing) | Indefinite |

### Mitosis Stages (PMAT)

1. **Prophase**: Chromosomes condense, nuclear envelope breaks down, spindle forms
2. **Metaphase**: Chromosomes align at metaphase plate
3. **Anaphase**: Sister chromatids separate, pulled to poles
4. **Telophase**: Nuclear envelopes reform, chromosomes decondense

### Cell Cycle Checkpoints

| Checkpoint | Location | Checks for |
|-----------|----------|-----------|
| G$_1$/S | End of G$_1$ | DNA damage, cell size, growth signals |
| G$_2$/M | End of G$_2$ | Complete DNA replication, no damage |
| Spindle | During M | All chromosomes attached to spindle |

### MCAT Connection: Cancer

Cancer = uncontrolled cell division due to:
- **Oncogenes**: Gain-of-function (gas pedal stuck ON)
- **Tumor suppressors**: Loss-of-function (brakes broken) — e.g., p53, Rb`
    },
    {
      id: 'cb3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cell Cycle** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cell has 46 chromosomes in G$_1$. After S phase but before mitosis, it has:',
            options: ['46 chromosomes, each with 2 sister chromatids (92 chromatids total)', '92 chromosomes', '23 chromosomes', '46 chromosomes with 46 chromatids'],
            correctAnswer: 0,
            explanation: 'DNA replicates in S phase, but centromeres haven\'t split yet. So: still 46 chromosomes, but each consists of 2 sister chromatids joined at the centromere. After anaphase, they separate into 92 individual chromatids.'
          },
          {
            question: 'Loss of p53 function would most directly affect:',
            options: ['The G$_1$/S checkpoint — damaged DNA would not be detected, allowing replication to proceed', 'Chromosome condensation during prophase', 'Cytokinesis', 'Spindle formation'],
            correctAnswer: 0,
            explanation: 'p53 is the "guardian of the genome" — it arrests the cell cycle at G$_1$/S when DNA damage is detected and can trigger apoptosis. Without p53, damaged cells continue dividing → cancer.'
          }
        ]
      }
    },
    {
      id: 'cb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Cell cycle: G$_1$ → S → G$_2$ → M (interphase = G$_1$+S+G$_2$)
- Mitosis: PMAT (Prophase, Metaphase, Anaphase, Telophase)
- Checkpoints prevent damaged/incomplete cells from dividing
- Cancer: oncogenes (gain of function) + tumor suppressors (loss of function)`
    }
  ]
};
"""

    parts[4] = r"""export const mcatCellBioPart4Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb4-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 4 of 7 — Meiosis & Genetic Diversity**

### Meiosis Overview

$$\\text{Diploid (2n)} \\xrightarrow{\\text{Meiosis I}} \\text{Haploid (1n)} \\xrightarrow{\\text{Meiosis II}} \\text{4 haploid gametes}$$

### Meiosis I vs. Meiosis II

| Feature | Meiosis I | Meiosis II |
|---------|----------|-----------|
| Starting cells | 1 diploid | 2 haploid |
| Result | 2 haploid cells | 4 haploid cells |
| Homologs separate? | YES | No |
| Sister chromatids separate? | No | YES |
| Crossing over? | YES (prophase I) | No |
| Reduction division? | YES (2n → n) | No (n → n) |

### Sources of Genetic Diversity

1. **Crossing over** (prophase I): Exchange of segments between homologs
2. **Independent assortment**: Random orientation of homologs at metaphase I ($2^{23}$ possible combinations in humans!)
3. **Random fertilization**: Any sperm + any egg

### Nondisjunction

Failure of chromosomes to separate properly:
- Meiosis I: both homologs go to one cell → affects ALL gametes
- Meiosis II: sister chromatids fail to separate → affects 2 of 4 gametes`
    },
    {
      id: 'cb4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Meiosis** 🎯',
      exercise: {
        questions: [
          {
            question: 'Crossing over occurs between:',
            options: ['Non-sister chromatids of homologous chromosomes during prophase I', 'Sister chromatids during prophase II', 'Homologous chromosomes during metaphase I', 'Any chromosomes during S phase'],
            correctAnswer: 0,
            explanation: 'Crossing over exchanges genetic material between non-sister chromatids of homologous chromosomes during prophase I, forming chiasmata. This produces recombinant chromosomes with new allele combinations.'
          }
        ]
      }
    },
    {
      id: 'cb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Meiosis I: homologs separate (reduction division). Meiosis II: sisters separate (like mitosis).
- Genetic diversity: crossing over + independent assortment + random fertilization
- Nondisjunction in meiosis I affects all 4 gametes; in meiosis II affects only 2
- Meiosis produces 4 UNIQUE haploid cells; mitosis produces 2 IDENTICAL diploid cells`
    }
  ]
};
"""

    parts[5] = r"""export const mcatCellBioPart5Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb5-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 5 of 7 — Cell Signaling**

### Signal Transduction Pathway

$$\\text{Signal} \\to \\text{Receptor} \\to \\text{Transduction} \\to \\text{Response}$$

### Types of Signaling

| Type | Distance | Example |
|------|----------|---------|
| Endocrine | Long (via blood) | Insulin from pancreas |
| Paracrine | Short (nearby cells) | Growth factors |
| Autocrine | Self (same cell) | IL-2 in T cells |
| Juxtacrine | Contact (cell-to-cell) | Notch signaling |

### Receptor Types

| Receptor | Location | Mechanism | Example |
|----------|----------|-----------|---------|
| G-protein coupled (GPCR) | Membrane | G-protein → 2nd messenger (cAMP, IP$_3$) | Epinephrine receptor |
| Receptor tyrosine kinase (RTK) | Membrane | Dimerization → phosphorylation cascade | Insulin receptor |
| Ligand-gated ion channel | Membrane | Ion flow | ACh receptor at NMJ |
| Intracellular/Nuclear | Cytoplasm/nucleus | Direct gene activation | Steroid hormones |

### Second Messengers

- **cAMP**: Activated by adenylyl cyclase, activates PKA
- **IP$_3$ / DAG**: Activated by phospholipase C
- **Ca$^{2+}$**: Released from ER, activates many enzymes
- **cGMP**: Activated by guanylyl cyclase`
    },
    {
      id: 'cb5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cell Signaling** 🎯',
      exercise: {
        questions: [
          {
            question: 'Steroid hormones (like testosterone) can directly activate genes because they:',
            options: ['Are hydrophobic and cross the cell membrane to bind intracellular receptors', 'Bind to GPCRs on the cell surface', 'Are water-soluble', 'Use cAMP as a second messenger'],
            correctAnswer: 0,
            explanation: 'Steroids are derived from cholesterol (lipid-soluble). They cross the membrane, bind cytoplasmic or nuclear receptors, and the hormone-receptor complex directly acts as a transcription factor.'
          }
        ]
      }
    },
    {
      id: 'cb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Signal transduction: Signal → Receptor → Transduction → Response
- GPCRs use G-proteins and second messengers (cAMP, IP$_3$, Ca$^{2+}$)
- RTKs dimerize and auto-phosphorylate (insulin, growth factors)
- Steroid hormones bypass membrane receptors — directly enter cell`
    }
  ]
};
"""

    parts[6] = r"""export const mcatCellBioPart6Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb6-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 6 of 7 — Apoptosis & Cellular Processes**

### Apoptosis (Programmed Cell Death)

- ORDERLY process — no inflammation
- Cell shrinks, DNA fragments, blebs form, phagocytes clean up
- Regulated by **caspases** (protease cascade)

### Apoptosis Pathways

| Pathway | Trigger | Key Players |
|---------|---------|-------------|
| Intrinsic | DNA damage, stress | Mitochondria release cytochrome c → caspase-9 |
| Extrinsic | Death ligand (FasL, TNF) | Death receptor → caspase-8 |
| Both → | Executioner caspases (caspase-3) → cell death |

### Apoptosis vs. Necrosis

| Feature | Apoptosis | Necrosis |
|---------|-----------|---------|
| Trigger | Programmed signals | Injury, toxins |
| Process | Orderly | Chaotic |
| Inflammation | No | Yes |
| Energy required? | Yes (ATP) | No |

### MCAT Connection

- **Too little apoptosis** → cancer (cells that should die keep dividing)
- **Too much apoptosis** → degenerative diseases (necessary cells die)
- **Bcl-2**: anti-apoptotic protein (overexpressed in some cancers)
- **p53**: pro-apoptotic (triggers apoptosis in damaged cells)`
    },
    {
      id: 'cb6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apoptosis** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cancer cell overexpresses Bcl-2 protein. The effect is:',
            options: ['Resistance to apoptosis — Bcl-2 prevents cytochrome c release from mitochondria', 'Increased apoptosis', 'No change in cell survival', 'Increased cell division rate'],
            correctAnswer: 0,
            explanation: 'Bcl-2 is anti-apoptotic — it stabilizes the mitochondrial membrane, preventing cytochrome c release and thus blocking the intrinsic apoptotic pathway. Overexpression = cells resist apoptosis = cancer.'
          }
        ]
      }
    },
    {
      id: 'cb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Apoptosis: programmed, orderly, no inflammation. Necrosis: traumatic, chaotic, inflammation.
- Intrinsic: mitochondria → cytochrome c → caspase-9. Extrinsic: death receptor → caspase-8.
- Bcl-2 = anti-apoptotic; p53 and Bax = pro-apoptotic
- Cancer often involves BOTH excess proliferation AND resistance to apoptosis`
    }
  ]
};
"""

    parts[7] = r"""export const mcatCellBioPart7Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb7-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 7 of 7 — Specialized Cell Types & Tissues**

### The Four Tissue Types

| Type | Function | Examples |
|------|----------|---------|
| **Epithelial** | Cover/line surfaces, secretion | Skin, intestinal lining, glands |
| **Connective** | Support, connect, protect | Bone, blood, cartilage, adipose |
| **Muscle** | Contraction/movement | Skeletal, smooth, cardiac |
| **Nervous** | Signal transmission | Neurons, glial cells |

### Muscle Types

| Feature | Skeletal | Cardiac | Smooth |
|---------|---------|---------|--------|
| Striated? | Yes | Yes | No |
| Voluntary? | Yes | No | No |
| Nuclei | Multinucleated | 1-2 central | 1 central |
| Special features | T-tubules, SR | Intercalated discs | Gap junctions |

### Stem Cells

| Type | Potency | Can become |
|------|---------|-----------|
| Totipotent | Everything | Any cell + placenta (zygote) |
| Pluripotent | Almost everything | Any cell type (embryonic stem cells) |
| Multipotent | Several types | Limited lineage (hematopoietic stem cells) |
| Unipotent | One type | Only one cell type |`
    },
    {
      id: 'cb7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tissues & Cell Types** 🎯',
      exercise: {
        questions: [
          {
            question: 'Cardiac muscle has intercalated discs because they:',
            options: ['Contain gap junctions that allow synchronized contraction of the heart', 'Provide extra structural support', 'Store calcium', 'Are remnants from embryonic development'],
            correctAnswer: 0,
            explanation: 'Intercalated discs have gap junctions (electrical coupling for rapid signal spread) and desmosomes (mechanical adhesion). This allows the heart to contract as a coordinated unit (functional syncytium).'
          }
        ]
      }
    },
    {
      id: 'cb7-summary',
      type: 'text' as const,
      content: `### Cell Biology — Complete! ✅

From organelles to tissues, cell biology is the foundation of every MCAT biology passage. Know organelle functions, membrane transport, the cell cycle, meiosis, signaling pathways, and apoptosis — these are all ultra-high-yield.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-cell-biology-mcat-part{i}.ts', parts[i])


###############################################################################
# MOLECULAR BIOLOGY (7 parts)
###############################################################################

def gen_mol_bio():
    parts = {}
    parts[1] = r"""export const mcatMolBioPart1Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb1-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 1 of 7 — DNA Replication**

### DNA Replication is Semiconservative

Each new double helix has one old strand and one new strand (Meselson-Stahl experiment).

### Key Enzymes

| Enzyme | Function |
|--------|----------|
| **Helicase** | Unwinds double helix |
| **Topoisomerase** | Relieves supercoiling ahead of replication fork |
| **Primase** | Synthesizes RNA primer |
| **DNA Pol III** | Main synthesis enzyme ($5' \\to 3'$), has proofreading ($3' \\to 5'$ exonuclease) |
| **DNA Pol I** | Removes RNA primers, fills gaps |
| **Ligase** | Joins Okazaki fragments |
| **SSB proteins** | Keep strands separated |

### Leading vs. Lagging Strand

- **Leading**: Continuous synthesis toward the fork
- **Lagging**: Discontinuous ($5' \\to 3'$ away from fork) → Okazaki fragments

### Telomeres

- Protective caps at chromosome ends (TTAGGG repeats in humans)
- Shorten with each division (no primer for end of lagging strand)
- **Telomerase** extends telomeres (active in stem cells and cancer cells)`
    },
    {
      id: 'mb1-quiz1',
      type: 'multiple-choice' as const,
      content: '**DNA Replication** 🎯',
      exercise: {
        questions: [
          {
            question: 'DNA polymerase III requires a primer because it:',
            options: ['Can only add nucleotides to an existing $3\'-OH$ group — it cannot start de novo', 'Needs a template to read', 'Works only in the 3\' to 5\' direction', 'Uses RNA nucleotides'],
            correctAnswer: 0,
            explanation: 'DNA Pol III adds nucleotides to the $3\'-OH$ of a pre-existing strand. Primase provides an RNA primer with a free $3\'-OH$ to get synthesis started. RNA polymerase does NOT need a primer.'
          },
          {
            question: 'Okazaki fragments are found on the:',
            options: ['Lagging strand only', 'Leading strand only', 'Both strands', 'Neither strand'],
            correctAnswer: 0,
            explanation: 'The lagging strand is synthesized discontinuously as short Okazaki fragments because DNA Pol III can only synthesize $5\' \\to 3\'$, but the lagging template runs $5\' \\to 3\'$ away from the fork.'
          }
        ]
      }
    },
    {
      id: 'mb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- DNA replication is semiconservative, bidirectional, and semi-discontinuous
- DNA Pol III: main polymerase, needs primer, $5' \\to 3'$ synthesis + proofreading
- Leading strand: continuous. Lagging strand: Okazaki fragments.
- Telomerase: prevents chromosome shortening (cancer connection!)`
    }
  ]
};
"""

    parts[2] = r"""export const mcatMolBioPart2Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb2-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 2 of 7 — Transcription**

### The Process

$$\\text{DNA (template)} \\xrightarrow{\\text{RNA Polymerase}} \\text{mRNA (pre-mRNA in eukaryotes)}$$

### Prokaryotic vs. Eukaryotic Transcription

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| RNA Polymerase | One type | Three (I, II, III) |
| Promoter | -10 (Pribnow) and -35 | TATA box (~-25) |
| Processing | None (mRNA ready immediately) | 5' cap, 3' poly-A tail, splicing |
| Location | Cytoplasm | Nucleus |
| Coupled with translation? | YES (simultaneous) | NO (transcription in nucleus, translation in cytoplasm) |

### Eukaryotic mRNA Processing

1. **5' cap** (7-methylguanosine): Protects from degradation, ribosome recognition
2. **3' poly-A tail** (~200 adenines): Protects from degradation, facilitates export
3. **Splicing**: Introns removed, exons joined (by spliceosome)

### MCAT Mnemonic

- **In**trons stay **in** the nucleus (removed)
- **Ex**ons are **ex**pressed (kept in mature mRNA)`
    },
    {
      id: 'mb2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Transcription** 🎯',
      exercise: {
        questions: [
          {
            question: 'A mutation in the spliceosome would most directly cause:',
            options: ['Introns retained in mRNA → abnormal protein', 'Failure of 5\' capping', 'DNA replication errors', 'Ribosome malfunction'],
            correctAnswer: 0,
            explanation: 'The spliceosome removes introns from pre-mRNA. If defective, introns remain in the mature mRNA, leading to premature stop codons or frame shifts → nonfunctional protein or disease (e.g., some forms of spinal muscular atrophy).'
          }
        ]
      }
    },
    {
      id: 'mb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- RNA Pol II makes mRNA in eukaryotes
- Eukaryotic mRNA processing: 5' cap + 3' poly-A tail + splicing
- Introns removed, exons kept (alternative splicing = multiple proteins from one gene!)
- Prokaryotes: no processing, transcription + translation can occur simultaneously`
    }
  ]
};
"""

    parts[3] = r"""export const mcatMolBioPart3Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb3-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 3 of 7 — Translation (Protein Synthesis)**

### The Genetic Code

- **Codons**: 3-nucleotide sequences on mRNA
- 64 codons total: 61 code for amino acids, 3 are stop codons
- **Degenerate** (redundant): Multiple codons for same amino acid (wobble position = 3rd base)
- **Start codon**: AUG (methionine) — also signals ribosome binding
- **Stop codons**: UAA, UAG, UGA

### Ribosome Sites

| Site | Name | Function |
|------|------|----------|
| A (Aminoacyl) | Entry | New charged tRNA enters |
| P (Peptidyl) | Holding | Growing peptide chain held here |
| E (Exit) | Exit | Empty tRNA leaves |

### Translation Steps

1. **Initiation**: Small subunit binds mRNA at 5' cap → scans for AUG → large subunit joins
2. **Elongation**: tRNA brings amino acid to A site → peptide bond forms → ribosome translocates
3. **Termination**: Stop codon in A site → release factor → polypeptide released`
    },
    {
      id: 'mb3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Translation** 🎯',
      exercise: {
        questions: [
          {
            question: 'An antibiotic that binds to the 50S ribosomal subunit would inhibit translation in:',
            options: ['Bacteria (they have 70S = 50S + 30S ribosomes)', 'Human cells (they have 80S = 60S + 40S)', 'Both equally', 'Neither'],
            correctAnswer: 0,
            explanation: 'Bacterial ribosomes are 70S (50S + 30S). Human ribosomes are 80S (60S + 40S). Drugs targeting 50S specifically affect bacteria, not human ribosomes. This is why antibiotics like chloramphenicol and erythromycin can target bacteria selectively.'
          }
        ]
      }
    },
    {
      id: 'mb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Genetic code is degenerate (redundant) but NOT ambiguous (each codon = one amino acid)
- Start: AUG (Met). Stop: UAA, UAG, UGA.
- Ribosome sites: A (aminoacyl), P (peptidyl), E (exit)
- Bacterial (70S) vs. eukaryotic (80S) ribosomes = antibiotic targeting`
    }
  ]
};
"""

    parts[4] = r"""export const mcatMolBioPart4Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb4-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 4 of 7 — Gene Regulation**

### Prokaryotic Gene Regulation: The Operon Model

**Lac Operon** (inducible — normally OFF)
- Without lactose: Repressor binds operator → genes OFF
- With lactose: Allolactose binds repressor → repressor falls off → genes ON
- Low glucose + lactose = maximum expression (cAMP-CAP activates promoter)

**Trp Operon** (repressible — normally ON)
- Without tryptophan: Repressor inactive → genes ON (making trp)
- With tryptophan: Trp binds repressor (corepressor) → repressor active → genes OFF

### Eukaryotic Gene Regulation (Multiple Levels!)

| Level | Mechanism | Example |
|-------|-----------|---------|
| Epigenetic | DNA methylation, histone modification | Methylation → gene silencing |
| Transcriptional | Transcription factors, enhancers | Activators increase transcription |
| Post-transcriptional | mRNA stability, alternative splicing | miRNA degrades mRNA |
| Translational | mRNA availability, regulation | Iron response element |
| Post-translational | Protein modification | Phosphorylation, ubiquitination |

### Epigenetics (HIGH YIELD)

- **DNA methylation** (CpG islands): Adds methyl groups → gene silencing
- **Histone acetylation**: Loosens chromatin → gene activation
- **Histone deacetylation**: Tightens chromatin → gene silencing`
    },
    {
      id: 'mb4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Gene Regulation** 🎯',
      exercise: {
        questions: [
          {
            question: 'In the lac operon, the presence of glucose AND lactose results in:',
            options: ['Low expression — glucose keeps cAMP low, so CAP cannot fully activate transcription', 'Maximum expression', 'Complete repression', 'No effect from glucose'],
            correctAnswer: 0,
            explanation: 'With lactose present, the repressor is removed. But with glucose, cAMP is LOW → CAP is inactive → promoter only weakly bound by RNA polymerase. Maximum expression requires low glucose (high cAMP) AND lactose.'
          }
        ]
      }
    },
    {
      id: 'mb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Lac operon: inducible (normally OFF). Trp operon: repressible (normally ON).
- Eukaryotic regulation: epigenetic → transcriptional → post-transcriptional → translational → post-translational
- Methylation = silencing. Acetylation = activation.
- The lac operon is a FAVORITE MCAT topic — know it cold!`
    }
  ]
};
"""

    parts[5] = r"""export const mcatMolBioPart5Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb5-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 5 of 7 — Mutations & DNA Repair**

### Types of Point Mutations

| Type | Change | Effect on Protein |
|------|--------|------------------|
| **Silent** | Different codon, same amino acid | None (degeneracy!) |
| **Missense** | Different codon, different amino acid | May or may not affect function |
| **Nonsense** | Codon → stop codon | Truncated protein (usually nonfunctional) |

### Frameshift Mutations

- **Insertion or deletion** (not multiples of 3) → shifts reading frame
- Every downstream amino acid is wrong → usually nonfunctional protein
- Multiples of 3 inserted/deleted → adds/removes amino acids without shifting frame

### DNA Repair Mechanisms

| Mechanism | Fixes | How |
|-----------|-------|-----|
| **Proofreading** | Replication errors | DNA Pol III $3' \\to 5'$ exonuclease |
| **Mismatch repair** | Post-replication mismatches | Recognizes mismatched bases, excises, repairs |
| **Base excision repair** | Damaged/modified bases | Glycosylase removes base → AP endonuclease → repair |
| **Nucleotide excision repair** | Bulky lesions (thymine dimers) | Excises ~12 nucleotide stretch → repairs |

### MCAT Connection: Xeroderma Pigmentosum

Defect in nucleotide excision repair → can't fix UV-induced thymine dimers → extreme skin cancer risk.`
    },
    {
      id: 'mb5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mutations** 🎯',
      exercise: {
        questions: [
          {
            question: 'A single nucleotide deletion in the second codon of an mRNA would:',
            options: ['Cause a frameshift — every codon downstream is altered', 'Only change one amino acid', 'Have no effect', 'Only affect the second amino acid'],
            correctAnswer: 0,
            explanation: 'A single deletion shifts the reading frame by one nucleotide. Every triplet downstream is now different → every amino acid from that point on is wrong. This is why frameshifts are usually devastating.'
          }
        ]
      }
    },
    {
      id: 'mb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Silent, missense, nonsense: increasing severity of point mutations
- Frameshifts (insertions/deletions not in multiples of 3) are most damaging
- Multiple repair pathways: proofreading → mismatch → base excision → nucleotide excision
- Disease connections: xeroderma pigmentosum (NER), HNPCC (mismatch repair)`
    }
  ]
};
"""

    parts[6] = r"""export const mcatMolBioPart6Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb6-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 6 of 7 — Biotechnology Techniques**

### PCR (Polymerase Chain Reaction)

Amplifies specific DNA sequences exponentially.

| Step | Temperature | What happens |
|------|-------------|-------------|
| Denaturation | ~95°C | Strands separate |
| Annealing | ~55°C | Primers bind to template |
| Extension | ~72°C | Taq polymerase synthesizes new DNA |

After $n$ cycles: $2^n$ copies. After 30 cycles: ~$10^9$ copies!

### Gel Electrophoresis

- DNA migrates toward positive electrode (DNA is negative)
- **Smaller fragments travel faster** (farther from wells)
- Southern blot: DNA. Northern blot: RNA. Western blot: Protein.

### Molecular Cloning

1. Cut DNA with restriction enzymes (recognize palindromic sequences)
2. Insert into vector (plasmid) using ligase
3. Transform bacteria (take up plasmid)
4. Select with antibiotic resistance

### CRISPR-Cas9

- Guide RNA directs Cas9 nuclease to specific DNA sequence
- Creates double-strand break → gene editing
- Can knock out genes or insert new sequences`
    },
    {
      id: 'mb6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Biotechnology** 🎯',
      exercise: {
        questions: [
          {
            question: 'After 20 cycles of PCR, approximately how many copies of the target DNA are produced from one template molecule?',
            options: ['~$10^6$ ($2^{20} \\approx 10^6$)', '20', '40', '200'],
            correctAnswer: 0,
            explanation: 'PCR doubles DNA each cycle: $2^{20} = 1{,}048{,}576 \\approx 10^6$ copies. This exponential amplification is why PCR is so powerful for detecting tiny amounts of DNA.'
          }
        ]
      }
    },
    {
      id: 'mb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- PCR: Denature → Anneal → Extend (uses Taq polymerase, heat-stable)
- Gel electrophoresis: small fragments migrate farther
- Southern (DNA), Northern (RNA), Western (protein) blots
- CRISPR: guide RNA + Cas9 = targeted gene editing`
    }
  ]
};
"""

    parts[7] = r"""export const mcatMolBioPart7Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb7-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 7 of 7 — Viruses & Recombinant DNA**

### Virus Structure & Classification

| Feature | DNA Viruses | RNA Viruses | Retroviruses |
|---------|------------|------------|-------------|
| Genome | dsDNA usually | ssRNA or dsRNA | ssRNA |
| Replication | Host DNA Pol | RNA-dependent RNA Pol (RdRp) | Reverse transcriptase → DNA → integrase |
| Example | Herpes, Adenovirus | Influenza, Ebola | HIV |

### Viral Life Cycles

**Lytic cycle**: Virus replicates → lyses host cell → releases new virions
**Lysogenic cycle**: Viral DNA integrates into host genome (prophage) → replicates with host → can switch to lytic

### Retroviruses (HIV)

$$\\text{ssRNA} \\xrightarrow{\\text{Reverse transcriptase}} \\text{dsDNA} \\xrightarrow{\\text{Integrase}} \\text{Provirus (in host DNA)}$$

### Prions

- NOT viruses — misfolded proteins (no nucleic acid!)
- Convert normal proteins to misfolded form
- Cannot be destroyed by standard sterilization
- Example: Mad cow disease (BSE), Creutzfeldt-Jakob disease`
    },
    {
      id: 'mb7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Viruses** 🎯',
      exercise: {
        questions: [
          {
            question: 'HIV is difficult to treat because:',
            options: ['Reverse transcriptase has no proofreading → high mutation rate → drug resistance', 'HIV has a DNA genome', 'Antibiotics kill HIV-infected cells', 'HIV only infects red blood cells'],
            correctAnswer: 0,
            explanation: 'Reverse transcriptase lacks $3\' \\to 5\'$ exonuclease (proofreading) activity, causing a very high mutation rate. This allows HIV to quickly evolve resistance to single drugs, which is why combination therapy (HAART) is used.'
          }
        ]
      }
    },
    {
      id: 'mb7-summary',
      type: 'text' as const,
      content: `### Molecular Biology — Complete! ✅

From DNA replication to gene regulation to virology — molecular biology is the most heavily tested content on the MCAT Bio/Biochem section. Master the central dogma, regulation, and biotechnology techniques.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-molecular-biology-mcat-part{i}.ts', parts[i])


###############################################################################
# ORGAN SYSTEMS (7 parts)
###############################################################################

def gen_organ_sys():
    parts = {}
    parts[1] = r"""export const mcatOrganSysPart1Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os1-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 1 of 7 — Cardiovascular System**

### Heart Structure

- 4 chambers: RA → RV → Lungs → LA → LV → Body
- Right side: deoxygenated blood to lungs (pulmonary circulation)
- Left side: oxygenated blood to body (systemic circulation)
- LV has thickest walls (pumps against systemic resistance)

### Cardiac Cycle

| Phase | AV Valves | Semilunar Valves | What happens |
|-------|-----------|-----------------|-------------|
| Atrial systole | Open | Closed | Atria contract, blood into ventricles |
| Ventricular systole | Closed (S1) | Open | Ventricles contract, blood into arteries |
| Diastole | Open | Closed (S2) | Ventricles relax, fill with blood |

### Key Equations

$$\\text{Cardiac Output} = \\text{HR} \\times \\text{Stroke Volume}$$

$$\\text{Blood Pressure} = \\text{CO} \\times \\text{Total Peripheral Resistance}$$

### Blood Vessel Types

- **Arteries**: Thick walls, elastic, carry blood FROM heart
- **Veins**: Thin walls, valves, carry blood TO heart
- **Capillaries**: Single cell thick, site of exchange`
    },
    {
      id: 'os1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cardiovascular** 🎯',
      exercise: {
        questions: [
          {
            question: 'During exercise, cardiac output increases primarily through:',
            options: ['Increased heart rate AND increased stroke volume', 'Increased heart rate only', 'Decreased peripheral resistance only', 'Increased blood vessel diameter only'],
            correctAnswer: 0,
            explanation: 'CO = HR $\\times$ SV. During exercise, sympathetic activation increases both HR (via SA node stimulation) and SV (via increased contractility and venous return). Both contribute to the ~4-5x increase in CO during vigorous exercise.'
          }
        ]
      }
    },
    {
      id: 'os1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- CO = HR $\\times$ SV; BP = CO $\\times$ TPR
- Left ventricle = thickest (systemic pressure)
- S1 = AV valves close (lub); S2 = semilunar valves close (dub)
- Capillaries = site of gas/nutrient exchange (largest total cross-sectional area)`
    }
  ]
};
"""

    parts[2] = r"""export const mcatOrganSysPart2Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os2-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 2 of 7 — Respiratory System**

### Gas Exchange

$$\\text{O}_2: \\text{Alveoli} \\to \\text{Blood} \\to \\text{Tissues}$$
$$\\text{CO}_2: \\text{Tissues} \\to \\text{Blood} \\to \\text{Alveoli}$$

- Driven by PARTIAL PRESSURE gradients (Fick's law)
- Alveoli maximize surface area for diffusion

### Oxygen Transport

- 98.5% bound to hemoglobin (Hb), 1.5% dissolved in plasma
- Each Hb binds 4 O$_2$ molecules
- **Cooperative binding**: Binding of first O$_2$ increases affinity for subsequent O$_2$ (sigmoidal curve)

### The Bohr Effect (MCAT FAVORITE)

Conditions that RIGHT-shift the O$_2$-Hb dissociation curve (promote O$_2$ unloading):
- Increased CO$_2$ (metabolically active tissue)
- Decreased pH (acidic — more CO$_2$)
- Increased temperature
- Increased 2,3-BPG

**Mnemonic**: Right shift = Release O$_2$ to tissues

### CO$_2$ Transport

- 70% as bicarbonate (HCO$_3^-$)
- 23% bound to Hb (carbaminohemoglobin)
- 7% dissolved in plasma`
    },
    {
      id: 'os2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Respiratory** 🎯',
      exercise: {
        questions: [
          {
            question: 'During intense exercise, the O$_2$-hemoglobin dissociation curve shifts RIGHT because:',
            options: ['Increased CO$_2$, lower pH, and higher temperature all promote O$_2$ release to working muscles', 'Muscles need less oxygen', 'Hemoglobin concentration increases', 'The lungs absorb more oxygen'],
            correctAnswer: 0,
            explanation: 'Active muscles produce CO$_2$ and heat, lowering local pH. All three factors right-shift the curve (Bohr effect), causing Hb to release more O$_2$ exactly where it\'s needed most.'
          }
        ]
      }
    },
    {
      id: 'os2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Gas exchange driven by partial pressure gradients
- O$_2$ transport: 98.5% on hemoglobin (cooperative binding, sigmoidal curve)
- Bohr effect: right shift = more O$_2$ release (higher CO$_2$, lower pH, higher temp)
- CO$_2$ transport: mostly as bicarbonate (70%)`
    }
  ]
};
"""

    parts[3] = r"""export const mcatOrganSysPart3Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os3-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 3 of 7 — Digestive System**

### GI Tract Order

Mouth → Esophagus → Stomach → Small intestine (duodenum → jejunum → ileum) → Large intestine → Rectum

### Digestive Enzymes

| Enzyme | Source | Substrate | Product |
|--------|--------|-----------|---------|
| Salivary amylase | Mouth | Starch | Maltose |
| Pepsin | Stomach (chief cells) | Protein | Peptides |
| Trypsin, chymotrypsin | Pancreas | Protein | Peptides |
| Pancreatic lipase | Pancreas | Triglycerides | Monoglycerides + fatty acids |
| Pancreatic amylase | Pancreas | Starch | Maltose |
| Lactase, maltase | Small intestine brush border | Disaccharides | Monosaccharides |

### Stomach

- **Parietal cells**: HCl (acidic pH ~2) + intrinsic factor (for B$_{12}$ absorption)
- **Chief cells**: Pepsinogen → activated to pepsin by HCl
- **G cells**: Gastrin (stimulates HCl secretion)
- **Mucous cells**: Protect stomach lining from acid

### Absorption

- **Duodenum**: Iron, calcium
- **Jejunum**: Most nutrients (amino acids, sugars, fatty acids)
- **Ileum**: Bile salts, vitamin B$_{12}$
- **Large intestine**: Water, electrolytes`
    },
    {
      id: 'os3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Digestive System** 🎯',
      exercise: {
        questions: [
          {
            question: 'Bile salts aid fat digestion by:',
            options: ['Emulsifying large fat globules into smaller droplets (increasing surface area for lipase)', 'Directly breaking down triglycerides', 'Neutralizing stomach acid', 'Activating pepsinogen'],
            correctAnswer: 0,
            explanation: 'Bile salts are amphipathic — they break large fat globules into smaller micelles (emulsification), vastly increasing surface area for pancreatic lipase. Bile does NOT digest fat — it prepares fat for digestion.'
          }
        ]
      }
    },
    {
      id: 'os3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Know all digestive enzymes with their sources and substrates
- Stomach: HCl (parietal cells), pepsinogen (chief cells), gastrin (G cells)
- Bile emulsifies fat (produced by liver, stored in gallbladder)
- Most absorption occurs in the jejunum; B$_{12}$ absorbed in ileum`
    }
  ]
};
"""

    parts[4] = r"""export const mcatOrganSysPart4Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os4-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 4 of 7 — Renal System (Kidneys)**

### Nephron Structure

$$\\text{Glomerulus} \\to \\text{PCT} \\to \\text{Loop of Henle} \\to \\text{DCT} \\to \\text{Collecting Duct}$$

### Key Functions by Segment

| Segment | Function | Key Details |
|---------|----------|-------------|
| Glomerulus | Filtration | Blood pressure drives filtrate into Bowman's capsule |
| PCT | Reabsorption (65-70%) | Glucose, amino acids, Na$^+$, H$_2$O (obligatory) |
| Descending loop | Water reabsorption | Permeable to H$_2$O, NOT solutes |
| Ascending loop | Salt reabsorption | Permeable to Na$^+$/Cl$^-$, NOT water (creates medullary gradient) |
| DCT/Collecting duct | Fine-tuning | Hormonal regulation (ADH, aldosterone) |

### Hormonal Regulation

| Hormone | Source | Effect |
|---------|--------|--------|
| **ADH** (vasopressin) | Posterior pituitary | Inserts aquaporins → H$_2$O reabsorption in collecting duct |
| **Aldosterone** | Adrenal cortex | Na$^+$ reabsorption (+ K$^+$ secretion) in DCT |
| **ANP** | Heart (atria) | Na$^+$ excretion, opposes RAAS |

### GFR

$$\\text{GFR} \\approx 180\\;\\text{L/day}$$

But urine output is only ~1.5 L/day → 99% of filtrate is reabsorbed!`
    },
    {
      id: 'os4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Renal System** 🎯',
      exercise: {
        questions: [
          {
            question: 'A patient with diabetes insipidus (ADH deficiency) would present with:',
            options: ['Large volumes of dilute urine (can\'t reabsorb water in collecting duct)', 'Small volumes of concentrated urine', 'High blood glucose', 'Edema'],
            correctAnswer: 0,
            explanation: 'Without ADH, aquaporins aren\'t inserted in the collecting duct → water can\'t be reabsorbed → large volumes of very dilute urine (polyuria) + excessive thirst (polydipsia). Not to be confused with diabetes mellitus!'
          }
        ]
      }
    },
    {
      id: 'os4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Nephron: Glomerulus → PCT → Loop of Henle → DCT → Collecting duct
- Descending loop: water out. Ascending loop: salt out (countercurrent multiplier).
- ADH: water reabsorption. Aldosterone: Na$^+$ reabsorption + K$^+$ secretion.
- 180 L/day filtered but only ~1.5 L urine (99% reabsorbed!)`
    }
  ]
};
"""

    parts[5] = r"""export const mcatOrganSysPart5Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os5-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 5 of 7 — Endocrine System**

### Major Endocrine Glands & Hormones

| Gland | Hormone(s) | Function |
|-------|-----------|----------|
| **Hypothalamus** | Releasing/inhibiting hormones | Controls anterior pituitary |
| **Anterior pituitary** | GH, TSH, ACTH, FSH, LH, Prolactin | Master gland |
| **Posterior pituitary** | ADH, Oxytocin | Stores/releases hypothalamic hormones |
| **Thyroid** | T3/T4, Calcitonin | Metabolism, lowers Ca$^{2+}$ |
| **Parathyroid** | PTH | Raises Ca$^{2+}$ (bone resorption) |
| **Adrenal cortex** | Cortisol, aldosterone, androgens | Stress, Na$^+$/K$^+$, sex |
| **Adrenal medulla** | Epinephrine, norepinephrine | Fight-or-flight |
| **Pancreas** | Insulin ($\\beta$), Glucagon ($\\alpha$) | Blood glucose regulation |

### Feedback Loops

**Negative feedback** (most hormones): Product inhibits further production
- Example: T3/T4 inhibits TSH release from pituitary

**Positive feedback** (rare):
- Oxytocin during labor (contractions → more oxytocin → stronger contractions)
- LH surge during ovulation`
    },
    {
      id: 'os5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Endocrine** 🎯',
      exercise: {
        questions: [
          {
            question: 'A patient has high T3/T4 levels AND high TSH. The most likely cause is:',
            options: ['A TSH-secreting pituitary tumor (secondary hyperthyroidism)', 'A primary thyroid problem', 'Normal feedback functioning', 'Iodine deficiency'],
            correctAnswer: 0,
            explanation: 'Normally, high T3/T4 should suppress TSH (negative feedback). If both are high, the pituitary is producing TSH autonomously (ignoring feedback) — most likely a pituitary adenoma.'
          }
        ]
      }
    },
    {
      id: 'os5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Hypothalamus → Anterior pituitary → Target gland (3-level axis)
- Negative feedback is the default; positive feedback is rare
- Insulin: lowers glucose (fed state). Glucagon: raises glucose (fasting).
- PTH raises Ca$^{2+}$; Calcitonin lowers Ca$^{2+}$ (opposite effects)`
    }
  ]
};
"""

    parts[6] = r"""export const mcatOrganSysPart6Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os6-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 6 of 7 — Nervous System**

### Organization

- **CNS**: Brain + Spinal cord
- **PNS**: Everything else
  - **Somatic**: Voluntary (skeletal muscle)
  - **Autonomic**: Involuntary
    - **Sympathetic**: Fight-or-flight (increases HR, dilates pupils, inhibits digestion)
    - **Parasympathetic**: Rest-and-digest (decreases HR, constricts pupils, promotes digestion)

### Neuron Structure & Action Potential

1. **Resting potential**: ~$-70$ mV (Na$^+$/K$^+$ ATPase maintains gradient)
2. **Depolarization**: Na$^+$ channels open → Na$^+$ rushes in → membrane potential rises
3. **Repolarization**: Na$^+$ channels close, K$^+$ channels open → K$^+$ flows out
4. **Hyperpolarization**: Slight overshoot below $-70$ mV
5. **Refractory period**: Na$^+$ channels inactivated → cannot fire again immediately

### Synaptic Transmission

$$\\text{AP reaches terminal} \\to \\text{Ca}^{2+}\\text{ influx} \\to \\text{Vesicle fusion} \\to \\text{NT release} \\to \\text{Binds receptor}$$

### Key Neurotransmitters

- **ACh**: NMJ (excitatory), parasympathetic
- **Norepinephrine**: Sympathetic
- **Dopamine**: Reward, movement (low in Parkinson's)
- **Serotonin**: Mood, sleep (targeted by SSRIs)
- **GABA**: Main inhibitory NT in brain
- **Glutamate**: Main excitatory NT in brain`
    },
    {
      id: 'os6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Nervous System** 🎯',
      exercise: {
        questions: [
          {
            question: 'Multiple sclerosis destroys myelin sheaths. This would:',
            options: ['Slow or block action potential conduction (loss of saltatory conduction)', 'Speed up conduction', 'Have no effect on signal transmission', 'Only affect the CNS, not the PNS'],
            correctAnswer: 0,
            explanation: 'Myelin insulates axons, enabling saltatory conduction (AP jumps between nodes of Ranvier). Without myelin, conduction slows dramatically or fails, causing motor and sensory deficits.'
          }
        ]
      }
    },
    {
      id: 'os6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Sympathetic: fight-or-flight. Parasympathetic: rest-and-digest.
- Action potential: resting → depolarization (Na$^+$ in) → repolarization (K$^+$ out)
- Myelin enables saltatory conduction (faster signaling)
- Know major neurotransmitters and their functions`
    }
  ]
};
"""

    parts[7] = r"""export const mcatOrganSysPart7Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os7-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 7 of 7 — Immune System**

### Innate vs. Adaptive Immunity

| Feature | Innate | Adaptive |
|---------|--------|---------|
| Speed | Immediate (0-12 hours) | Slow (days to weeks) |
| Specificity | Broad | Highly specific (antigen-specific) |
| Memory | No | Yes |
| Components | Neutrophils, macrophages, NK cells, complement | T cells, B cells, antibodies |

### Adaptive Immunity

**Humoral (B cells)**:
- B cells → Plasma cells → Antibodies (immunoglobulins)
- Antibodies neutralize, opsonize, activate complement
- **IgG**: Most abundant, crosses placenta
- **IgM**: First responder, pentamer
- **IgA**: Mucosal surfaces (saliva, breast milk)
- **IgE**: Allergies, parasites

**Cell-mediated (T cells)**:
- **CD4+ (Helper T)**: Activate B cells and CD8+ cells
- **CD8+ (Cytotoxic T)**: Kill infected/cancer cells directly
- **T regulatory**: Suppress immune responses (prevent autoimmunity)

### MHC Molecules

- **MHC I**: On ALL nucleated cells. Presents intracellular antigens → recognized by CD8+
- **MHC II**: On APCs only (macrophages, dendritic cells, B cells). Presents extracellular antigens → recognized by CD4+`
    },
    {
      id: 'os7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Immune System** 🎯',
      exercise: {
        questions: [
          {
            question: 'A virus-infected cell would be killed primarily by:',
            options: ['CD8+ cytotoxic T cells recognizing viral peptides on MHC I', 'B cells and antibodies', 'CD4+ helper T cells', 'Neutrophils'],
            correctAnswer: 0,
            explanation: 'Virus-infected cells display viral peptides on MHC I (present on all nucleated cells). CD8+ T cells recognize this and kill the infected cell via perforin/granzyme. This is why MHC I = "license to kill."'
          }
        ]
      }
    },
    {
      id: 'os7-summary',
      type: 'text' as const,
      content: `### Organ Systems — Complete! ✅

From cardiovascular to immune, organ systems make up the bulk of MCAT biology. Know the key structures, functions, and regulatory mechanisms for each system. Integration between systems (e.g., kidney + endocrine, nervous + cardiovascular) is frequently tested.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-organ-systems-mcat-part{i}.ts', parts[i])


# Run all generators
print("=== MCAT Batch 4: Cell Biology ===")
gen_cell_bio()
print("\n=== MCAT Batch 4: Molecular Biology ===")
gen_mol_bio()
print("\n=== MCAT Batch 4: Organ Systems ===")
gen_organ_sys()
print(f"\nBatch 4 complete! Total files: 21")
