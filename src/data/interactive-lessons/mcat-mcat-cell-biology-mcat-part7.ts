export const mcatCellBioPart7Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb7-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 7 of 7 — Specialized Cell Types & Tissues**

### The Four Tissue Types

| Type | Function | Key Features | Examples |
|------|----------|-------------|---------|
| **Epithelial** | Cover surfaces, secretion, absorption | Tightly packed, avascular, basement membrane | Skin, intestinal lining, glands |
| **Connective** | Support, connect, protect | Cells in extracellular matrix (ECM) | Bone, blood, cartilage, adipose, tendons |
| **Muscle** | Contraction and movement | Contractile proteins (actin/myosin) | Skeletal, smooth, cardiac |
| **Nervous** | Signal transmission and integration | Neurons + glial cells | Brain, spinal cord, peripheral nerves |

### Epithelial Classifications

| Shape | Layers | Name | Location |
|-------|--------|------|----------|
| Squamous (flat) | Simple | Simple squamous | Alveoli, capillaries, Bowman's capsule |
| Squamous | Stratified | Stratified squamous | Skin, esophagus, vagina (protection) |
| Cuboidal | Simple | Simple cuboidal | Kidney tubules, thyroid follicles |
| Columnar | Simple | Simple columnar | Intestinal lining (with goblet cells) |
| Columnar | Pseudostratified | Pseudostratified columnar | Trachea (ciliated, with goblet cells) |
| Various | Multiple layers | Transitional | Bladder (stretches) |

**Rule**: Simple = one layer (diffusion/absorption). Stratified = multiple layers (protection).

### Muscle Types — Comparison

| Feature | Skeletal | Cardiac | Smooth |
|---------|---------|---------|--------|
| Striated? | Yes | Yes | No |
| Voluntary? | Yes | No (autonomic) | No (autonomic) |
| Nuclei | Multinucleated (peripheral) | 1-2 central nuclei | 1 central nucleus |
| Special features | T-tubules, sarcoplasmic reticulum | Intercalated discs (gap junctions + desmosomes) | Gap junctions, no sarcomeres |
| Repair capacity | Limited (satellite cells) | Very limited | Good (can proliferate) |
| Contraction speed | Fast | Intermediate | Slow, sustained |

### Connective Tissue Components

- **Collagen**: Most abundant protein in the body; provides tensile strength (Type I in bone/tendon, Type II in cartilage, Type IV in basement membranes)
- **Elastin**: Allows stretch and recoil (lungs, arteries, skin)
- **Fibroblasts**: Produce collagen and ECM components
- **Ground substance**: Gel-like matrix of proteoglycans and glycosaminoglycans (GAGs)`
    },
    {
      id: 'cb7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Tissues & Cell Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cardiac muscle has intercalated discs primarily because they:`,
            options: [`Contain gap junctions for electrical coupling, allowing synchronized heart contraction`, `Provide structural support to prevent cardiac hypertrophy`, `Store calcium for contraction`, `Allow the heart to regenerate damaged tissue`],
            correctAnswer: 0,
            explanation: `Intercalated discs have gap junctions (allow ion flow for rapid electrical signal spread → synchronized contraction) and desmosomes (mechanical adhesion so cells don't pull apart). This makes the heart a functional syncytium — individual cells but acting as one coordinated unit.`
          },
          {
            question: `The alveoli of the lungs are lined with simple squamous epithelium because:`,
            options: [`A single thin layer allows rapid gas exchange by diffusion`, `Multiple layers would provide better protection against infection`, `Columnar cells would be more efficient at gas exchange`, `Squamous cells can actively transport gases`],
            correctAnswer: 0,
            explanation: `Gas exchange requires minimal distance for diffusion. Simple squamous epithelium is one cell thick and flat → shortest diffusion distance. This is also why capillaries have simple squamous endothelium. Fick's Law: diffusion rate is inversely proportional to membrane thickness.`
          },
          {
            question: `A patient with scurvy (vitamin C deficiency) has weakened connective tissue. This is because vitamin C is required for:`,
            options: [`Hydroxylation of proline and lysine residues in collagen, which stabilizes the triple helix`, `Synthesis of elastin in blood vessel walls`, `Production of keratin in epithelial tissue`, `Assembly of actin microfilaments`],
            correctAnswer: 0,
            explanation: `Collagen synthesis requires hydroxylation of proline → hydroxyproline and lysine → hydroxylysine (by prolyl and lysyl hydroxylase, which need vitamin C as a cofactor). Without hydroxylation, collagen cannot form stable triple helices → weak connective tissue → bleeding gums, poor wound healing, fragile blood vessels.`
          }
        ]
      }
    },
    {
      id: 'cb7-deep',
      type: 'text' as const,
      content: `### Stem Cells — Potency Hierarchy

| Type | Potency | Can Become | Example |
|------|---------|-----------|---------|
| Totipotent | Everything | Any cell type + extraembryonic tissue (placenta) | Zygote, early morula |
| Pluripotent | Almost everything | Any of the 3 germ layers but NOT placenta | Embryonic stem cells (inner cell mass) |
| Multipotent | Several related types | Cells within one lineage | Hematopoietic stem cells → all blood cells |
| Oligopotent | Few types | Limited cell types | Lymphoid progenitor → T, B, NK cells |
| Unipotent | One type | Only one differentiated cell type | Satellite cells → skeletal muscle only |

### Cell Junctions — Holding Tissues Together

| Junction | Function | Key Proteins | Found In |
|----------|----------|-------------|----------|
| Tight junctions (zonula occludens) | Seal between cells (barrier) | Claudins, occludins | Intestinal epithelium, BBB |
| Adherens junctions | Cell-cell adhesion | Cadherins (Ca$^{2+}$-dependent) | Epithelial tissues |
| Desmosomes | Strong mechanical attachment | Cadherins (desmogleins) + intermediate filaments | Skin, cardiac muscle |
| Gap junctions | Direct cell-cell communication | Connexins → connexons | Cardiac muscle, smooth muscle |
| Hemidesmosomes | Cell-to-basement membrane | Integrins + intermediate filaments | Epithelial base |

### Extracellular Matrix (ECM) Signaling

- **Integrins**: Transmembrane receptors linking ECM to cytoskeleton
- Bidirectional signaling: "outside-in" (ECM signals affect cell behavior) and "inside-out" (cell regulates integrin adhesion)
- ECM composition influences cell fate: stiff ECM → bone differentiation; soft ECM → neuronal differentiation
- **Matrix metalloproteinases (MMPs)**: Enzymes that degrade ECM (important in wound healing, but exploited by cancer cells for invasion/metastasis)

### Germ Layer Origins — What Comes From Where

| Germ Layer | Derivatives |
|-----------|-------------|
| **Ectoderm** | Nervous system, skin epidermis, hair, nails, lens, enamel |
| **Mesoderm** | Muscle, bone, blood, heart, kidneys, gonads, connective tissue |
| **Endoderm** | GI tract lining, liver, pancreas, lung lining, thyroid, bladder |`
    },
    {
      id: 'cb7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Topics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Tight junctions in intestinal epithelial cells function to:`,
            options: [`Seal the space between cells, preventing paracellular leakage of gut contents into the blood`, `Allow electrical communication between adjacent cells`, `Anchor cells to the basement membrane`, `Provide mechanical strength to resist shearing forces`],
            correctAnswer: 0,
            explanation: `Tight junctions (claudins, occludins) form a seal near the apical surface of epithelial cells, creating a barrier that regulates what passes between cells (paracellular pathway). In the intestine, this prevents bacteria and undigested food from leaking into the blood. In the blood-brain barrier, tight junctions are exceptionally restrictive.`
          },
          {
            question: `Hematopoietic stem cells in bone marrow are classified as:`,
            options: [`Multipotent — they can differentiate into all blood cell types but not non-blood cells`, `Totipotent — they can form any cell in the body`, `Pluripotent — they can form any of the three germ layers`, `Unipotent — they produce only one type of blood cell`],
            correctAnswer: 0,
            explanation: `Hematopoietic stem cells (HSCs) can differentiate into all blood cell lineages: RBCs, WBCs (neutrophils, lymphocytes, monocytes, etc.), and platelets. But they cannot become neurons, muscle, or other non-blood cells → multipotent. This is the basis of bone marrow transplants for leukemia treatment.`
          }
        ]
      }
    },
    {
      id: 'cb7-summary',
      type: 'text' as const,
      content: `### Cell Biology — Complete! ✅

### Key Takeaways — Part 7

- Four tissue types: epithelial (cover), connective (support), muscle (contract), nervous (signal)
- Epithelial: simple = 1 layer (exchange); stratified = multiple layers (protection). Shape: squamous, cuboidal, columnar
- Muscle: skeletal (voluntary, striated), cardiac (involuntary, striated, intercalated discs), smooth (involuntary, non-striated)
- Collagen: most abundant protein; vitamin C required for hydroxylation (scurvy connection)
- Stem cell potency: totipotent → pluripotent → multipotent → oligopotent → unipotent
- Cell junctions: tight (barrier), adherens/desmosomes (adhesion), gap (communication), hemidesmosomes (to basement membrane)
- Integrins: link ECM to cytoskeleton; bidirectional signaling
- Germ layers: ectoderm (nerves, skin), mesoderm (muscle, bone, blood), endoderm (GI lining, liver, lungs)`
    }
  ]
};
