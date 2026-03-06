export const mcatCellBioPart1Data = {
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
| Peroxisome | Oxidation, H$_2$O$_2$ breakdown | Catalase enzyme |

### The Endomembrane System — Protein Trafficking

The MCAT frequently tests the path of a secretory protein:

$$\\text{Ribosome on RER} \\to \\text{ER lumen} \\to \\text{transport vesicle} \\to \\text{cis-Golgi} \\to \\text{trans-Golgi} \\to \\text{secretory vesicle} \\to \\text{plasma membrane}$$

- **Signal peptide**: N-terminal sequence that directs the ribosome to the RER
- **Signal recognition particle (SRP)**: Binds signal peptide and docks ribosome on RER
- Glycosylation begins in the ER (N-linked) and is modified in the Golgi (O-linked added)
- Mannose-6-phosphate tag: targets proteins to lysosomes

### Endosymbiotic Theory — Evidence Checklist

Why mitochondria (and chloroplasts) were once free-living bacteria:
- Own **circular DNA** (like bacteria)
- **70S ribosomes** (not 80S like the rest of the eukaryotic cell)
- **Double membrane** (inner = original bacterial membrane; outer = host's endocytic vesicle)
- Reproduce by **binary fission**
- **Maternal inheritance** (mitochondria come from the egg)

### Cytoskeleton Overview

| Component | Diameter | Function | Key Drug |
|-----------|----------|----------|----------|
| Microfilaments (actin) | 7 nm | Cell motility, muscle contraction, cleavage furrow | Cytochalasin (inhibits) |
| Intermediate filaments | 10 nm | Structural support (keratin, vimentin) | — |
| Microtubules (tubulin) | 25 nm | Mitotic spindle, cilia, flagella, intracellular transport | Colchicine, taxol |

- **Cilia**: 9+2 microtubule arrangement (motile) or 9+0 (primary/sensory)
- **Dynein**: motor protein that moves cargo toward minus end (toward cell center)
- **Kinesin**: motor protein that moves cargo toward plus end (toward periphery)`
    },
    {
      id: 'cb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cell Structure & Organelles** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher treats cells with a drug that disrupts hydrogen ion pumps on lysosomes, raising lysosomal pH to 7. The most likely effect is:`,
            options: [`Lysosomal enzymes become inactive — they require acidic pH to function`, `Lysosomes become more active at neutral pH`, `The cell compensates by producing more lysosomes`, `No significant effect on intracellular digestion`],
            correctAnswer: 0,
            explanation: `Lysosomal hydrolases are acid hydrolases — they function optimally at pH ~5. At pH 7, these enzymes denature or become inactive, preventing intracellular digestion. This design also protects the cytoplasm (pH ~7.4): if a lysosome ruptures, the enzymes are inactive at cytoplasmic pH.`
          },
          {
            question: `A protein is found to have a mannose-6-phosphate tag after passing through the Golgi. Its most likely destination is:`,
            options: [`Lysosomes`, `The plasma membrane`, `The nucleus`, `Secretion outside the cell`],
            correctAnswer: 0,
            explanation: `Mannose-6-phosphate (M6P) is the specific sorting signal that directs proteins from the trans-Golgi network to lysosomes. M6P receptors in the Golgi membrane recognize this tag and package the protein into vesicles bound for lysosomes. Defects in this pathway cause I-cell disease.`
          },
          {
            question: `A cell biologist observes that mitochondria in a cell line contain 70S ribosomes. This observation supports:`,
            options: [`Endosymbiotic theory — mitochondria were once free-living bacteria with 70S ribosomes`, `Mitochondria evolved from the host cell nucleus`, `Mitochondria synthesize all their own proteins`, `70S ribosomes are more efficient than 80S`],
            correctAnswer: 0,
            explanation: `Endosymbiotic theory: mitochondria were once free-living aerobic bacteria engulfed by an ancestral eukaryote. They retain bacterial features: circular DNA, 70S ribosomes, double membrane, binary fission. This is why some antibiotics (e.g., chloramphenicol) that target 70S ribosomes can have mitochondrial side effects.`
          }
        ]
      }
    },
    {
      id: 'cb1-deep',
      type: 'text' as const,
      content: `### Passage-Style Thinking: Organelle Dysfunction

MCAT passages often describe a disease and ask you to identify the organelle involved. Key pattern recognitions:

| Disease/Condition | Organelle Defect | Mechanism |
|-------------------|-----------------|-----------|
| I-cell disease | Golgi (M6P tagging) | Lysosomal enzymes secreted instead of delivered to lysosomes |
| Tay-Sachs | Lysosome | Missing hexosaminidase A → ganglioside accumulation |
| Zellweger syndrome | Peroxisome | Cannot import peroxisomal enzymes → very long chain fatty acid buildup |
| Kartagener syndrome | Microtubules (dynein) | Immotile cilia → situs inversus, infertility, respiratory infections |

### Free vs. Bound Ribosomes

- **Free ribosomes**: Make proteins that stay in the cytoplasm (enzymes, structural proteins)
- **Bound ribosomes** (on RER): Make secretory proteins, membrane proteins, and lysosomal enzymes
- The ribosome itself is identical — the **signal peptide** determines where it goes
- This is a common MCAT distractor: the ribosome does not "know" where it needs to be in advance`
    },
    {
      id: 'cb1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Deeper Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `Colchicine, a drug that depolymerizes microtubules, would most directly inhibit:`,
            options: [`Mitotic spindle formation, arresting cells in metaphase`, `Muscle contraction`, `mRNA transport from nucleus to cytoplasm`, `Protein folding in the ER`],
            correctAnswer: 0,
            explanation: `Microtubules form the mitotic spindle. Colchicine prevents tubulin polymerization, so chromosomes cannot be separated during mitosis. Taxol has the opposite mechanism — it stabilizes microtubules so they cannot depolymerize. Both arrest mitosis and are used in cancer treatment.`
          },
          {
            question: `A patient with Kartagener syndrome has immotile cilia. Which protein is most likely defective?`,
            options: [`Dynein — the motor protein that drives ciliary beating`, `Actin — the microfilament protein`, `Keratin — an intermediate filament protein`, `Kinesin — a plus-end directed motor`],
            correctAnswer: 0,
            explanation: `Ciliary motility depends on dynein arms connecting the outer microtubule doublets in the 9+2 arrangement. Defective dynein = immotile cilia → chronic respiratory infections (no mucociliary clearance), male infertility (immotile sperm), and situs inversus (reversed organ placement due to defective nodal cilia in embryo).`
          }
        ]
      }
    },
    {
      id: 'cb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know every organelle's function and the diseases that result from dysfunction
- Protein trafficking path: RER → transport vesicle → cis-Golgi → trans-Golgi → destination
- Mannose-6-phosphate = lysosome targeting signal; defects cause I-cell disease
- Endosymbiotic theory evidence: circular DNA, 70S ribosomes, double membrane, binary fission
- Cytoskeleton: microfilaments (actin, 7nm), intermediate filaments (10nm), microtubules (tubulin, 25nm)
- Motor proteins: dynein (minus-end), kinesin (plus-end); dynein arms also drive cilia
- Free ribosomes → cytoplasmic proteins; bound ribosomes → secretory/membrane/lysosomal proteins`
    }
  ]
};
