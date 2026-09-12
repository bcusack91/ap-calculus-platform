export const mcatCellSignalingPart3Data = {
  topicSlug: 'mcat-cell-biology-signaling-mcat',
  sections: [
    {
      id: 'sig3-intro',
      type: 'text' as const,
      content: `# Cell Signaling for the MCAT

**Part 3 of 4 — RTKs, Ras-MAPK, PI3K & JAK-STAT**

### Receptor Tyrosine Kinases — Growth-Factor Logic

RTKs (insulin receptor, EGF receptor, PDGF receptor) follow one canonical activation sequence:

1. **Ligand binding → receptor dimerization** (the insulin receptor is a pre-formed disulfide-linked dimer that changes conformation instead)
2. **Trans-autophosphorylation**: each kinase domain phosphorylates tyrosines on its partner
3. Phosphotyrosines become **docking sites** for proteins with **SH2 domains** (Grb2, PI3K's regulatory subunit, PLC-gamma)
4. Docked adaptors launch parallel downstream cascades

> An RTK is receptor + enzyme in one protein — contrast with GPCRs, which have no catalytic activity and borrow a G protein.

### The Ras-MAPK Cascade (Proliferation Axis)

$$\\text{RTK} \\to \\text{Grb2} \\to \\text{SOS} \\to \\text{Ras} \\to \\text{Raf} \\to \\text{MEK} \\to \\text{ERK}$$

- **Grb2** (adaptor, no catalytic activity) recruits **SOS**, a **GEF** that loads Ras with GTP
- **Ras** is a small **monomeric** G protein (no beta-gamma): GTP-bound = ON; intrinsic GTPase (helped by **GAPs**) = OFF — the same timer logic as G-alpha
- Raf (a MAP kinase kinase kinase) phosphorylates MEK, which phosphorylates **ERK (a MAP kinase)**; ERK enters the nucleus and phosphorylates transcription factors driving **cyclin D** and cell-cycle entry
- A three-kinase tier gives amplification, sharp switch-like output, and multiple regulatory nodes

### The PI3K-Akt Cascade (Survival & Metabolism Axis)

- **PI3K** phosphorylates the membrane lipid PIP$_2$ to **PIP$_3$** (a membrane-embedded docking signal, not a soluble messenger)
- PIP$_3$ recruits **Akt (PKB)** to the membrane, where it is activated by phosphorylation
- Akt promotes survival (inhibits apoptotic proteins), growth (mTOR), and metabolism — in muscle/adipose, insulin → PI3K → Akt drives **GLUT4 vesicle translocation**
- **PTEN** is the phosphatase that removes PIP$_3$'s 3-phosphate — a tumor suppressor because it shuts this pathway off

### JAK-STAT — The Shortcut to the Nucleus

Cytokine receptors (erythropoietin, growth hormone, interferons) have **no kinase domain of their own**:

1. Ligand → receptor dimerization → associated **JAK kinases** trans-phosphorylate the receptor tails
2. **STAT** proteins dock via SH2 domains, get phosphorylated, **dimerize**, and translocate to the nucleus as ready-made transcription factors
3. Only two protein tiers between membrane and DNA — fast transcriptional responses, less amplification hardware

| Pathway | Key intermediates | Primary outcome |
|---------|-------------------|-----------------|
| Ras-MAPK | Grb2, SOS, Ras, Raf/MEK/ERK | Proliferation (immediate-early genes, cyclin D) |
| PI3K-Akt | PIP$_3$, Akt, mTOR; opposed by PTEN | Survival, growth, GLUT4 insertion |
| JAK-STAT | JAK, STAT dimers | Direct transcription (e.g., EPO → red cell production) |
| PLC-gamma | IP$_3$, DAG (RTK-driven, no Gq needed) | Ca$^{2+}$/PKC branch of RTK output |`
    },
    {
      id: 'sig3-quiz1',
      type: 'multiple-choice' as const,
      content: `**RTK Pathways** 🎯`,
      exercise: {
        questions: [
          {
            question: `A truncated EGF receptor lacks its intracellular kinase domain but binds EGF normally. When co-expressed with wild-type receptors, it suppresses EGF signaling. The best explanation is that the truncated receptor:`,
            options: [`Dimerizes with wild-type receptors, forming pairs that cannot trans-autophosphorylate (a dominant-negative effect)`, `Sequesters all cellular ATP`, `Degrades EGF in the medium`, `Blocks transcription of the wild-type gene`],
            correctAnswer: 0,
            explanation: `RTK activation requires each partner in a dimer to phosphorylate the other. A kinase-dead subunit that still dimerizes poisons every dimer it joins — the wild-type partner has no one to phosphorylate it. This dominant-negative logic is a standard MCAT experimental construct; note the mutant would NOT affect a pathway that signals through monomeric receptors.`
          },
          {
            question: `Grb2 contains SH2 and SH3 domains but no enzymatic activity, yet it is essential for RTK-driven Ras activation. Its role is to:`,
            options: [`Physically link phosphotyrosines on the receptor to SOS, positioning the GEF next to membrane-bound Ras`, `Hydrolyze GTP on Ras`, `Phosphorylate Raf directly`, `Transport ERK into the nucleus`],
            correctAnswer: 0,
            explanation: `Adaptor proteins are pure connectors: the SH2 domain reads phosphotyrosine on the activated receptor; the SH3 domains hold SOS. Bringing SOS to the membrane — where Ras is prenyl-anchored — is sufficient to activate Ras. Signal transduction frequently works by regulated proximity rather than catalysis, a concept passages love to test with adaptor mutants.`
          },
          {
            question: `Cells lacking functional PTEN show elevated Akt activity even without growth factors. This occurs because PTEN normally:`,
            options: [`Dephosphorylates PIP$_3$ back to PIP$_2$, removing the membrane docking site that recruits and activates Akt`, `Phosphorylates and inhibits PI3K`, `Degrades insulin receptors`, `Blocks transcription of the Akt gene`],
            correctAnswer: 0,
            explanation: `PI3K writes the PIP$_3$ signal; PTEN erases it. Without the eraser, basal PI3K activity accumulates PIP$_3$, so Akt stays membrane-recruited and active — constitutive survival/growth signaling. This is why PTEN is among the most frequently lost tumor suppressors. Distinguish lipid phosphatases (PTEN) from protein phosphatases: PTEN's substrate is a membrane lipid.`
          }
        ]
      }
    },
    {
      id: 'sig3-deep',
      type: 'text' as const,
      content: `### Insulin Signaling — One Receptor, Two Timescales

The insulin receptor illustrates how a single RTK produces both acute and long-term effects:

| Timescale | Pathway branch | Effect |
|-----------|----------------|--------|
| Seconds-minutes | PI3K → Akt | GLUT4 vesicles fuse with membrane; glycogen synthase activated (Akt inhibits GSK-3) |
| Minutes | Akt → phosphodiesterase activation | cAMP falls → opposes glucagon/epinephrine signaling |
| Hours | Ras-MAPK → gene expression | Growth-promoting transcription |

> Insulin and glucagon meet at cAMP: glucagon (Gs) raises it, insulin lowers it. Hormone pairs that converge on one node with opposite signs are classic passage material.

### Kinase Cascades as Signal Processors

Why stack three kinases (Raf → MEK → ERK) instead of one?

- **Amplification**: each active kinase phosphorylates many downstream molecules
- **Ultrasensitivity**: multi-step cascades convert graded inputs into switch-like outputs
- **Cross-talk nodes**: PKA can phosphorylate and inhibit Raf — a cAMP pathway vetoing a growth pathway
- **Scaffold proteins** hold Raf/MEK/ERK together, insulating parallel MAPK cascades (ERK vs. JNK vs. p38) that share components

### Experimental Dissection Toolkit

| Tool | What it shows |
|------|---------------|
| Constitutively active Ras (GTPase-dead, e.g., G12V) | Downstream events proceed WITHOUT growth factor — places Ras upstream of the response |
| Dominant-negative Ras (locked GDP form) | Blocks growth-factor response — Ras is REQUIRED |
| Kinase inhibitor added at different times | Defines when in the response each kinase acts |
| Phospho-specific antibody (western blot for phospho-ERK) | Read-out of pathway activity, not protein amount |
| Epistasis: active downstream mutant + upstream inhibitor | If the response persists, the downstream component acts after the blocked step |

> Epistasis logic: a constitutively active MEK rescues signaling in Ras-inhibited cells (MEK is downstream), but a constitutively active receptor does not rescue MEK inhibition.`
    },
    {
      id: 'sig3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Pathway Dissection** 🎯`,
      exercise: {
        questions: [
          {
            question: `In cells expressing a constitutively active MEK mutant, an EGF-receptor kinase inhibitor fails to block ERK phosphorylation. This result indicates that:`,
            options: [`MEK acts downstream of the receptor, so activating it bypasses the receptor blockade`, `The inhibitor is inactive in all contexts`, `ERK phosphorylation does not require MEK`, `EGF receptor and MEK are the same protein`],
            correctAnswer: 0,
            explanation: `Classic epistasis: constitutive activity at a downstream node makes upstream input unnecessary. Active MEK phosphorylates ERK regardless of receptor status, so the receptor inhibitor loses its effect. Had MEK been upstream of the receptor (or in a parallel pathway), the inhibitor would still have blocked ERK. Ordering pathway components from such experiments is a guaranteed MCAT skill.`
          },
          {
            question: `Erythropoietin stimulates red-cell precursors through a receptor with no intrinsic kinase domain, yet triggers rapid tyrosine phosphorylation and STAT-dependent transcription. The receptor accomplishes this by:`,
            options: [`Using constitutively associated JAK kinases that trans-phosphorylate the receptor upon ligand-induced dimerization`, `Coupling to Gs and raising cAMP`, `Acting as a ligand-gated calcium channel`, `Entering the nucleus with its ligand`],
            correctAnswer: 0,
            explanation: `Cytokine receptors outsource catalysis: JAKs bound to the receptor tails are brought into range when ligand dimerizes the receptor, then phosphorylate the receptor and the docking STATs. Phosphorylated STATs dimerize via reciprocal SH2-phosphotyrosine contacts and act directly as transcription factors — the shortest membrane-to-gene route among the major pathways.`
          }
        ]
      }
    },
    {
      id: 'sig3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- RTK activation: ligand → dimerization → trans-autophosphorylation → phosphotyrosine docking sites for SH2-domain proteins
- Ras-MAPK: Grb2 (adaptor) → SOS (GEF) → Ras-GTP → Raf → MEK → ERK → nucleus → proliferation genes; Ras uses the same GTP on/off timer as G-alpha
- PI3K makes PIP$_3$ (membrane docking site) → Akt → survival, mTOR growth signaling, GLUT4 translocation; PTEN erases PIP$_3$ and is a major tumor suppressor
- JAK-STAT: receptor has no kinase; JAKs phosphorylate, STATs dimerize and go straight to DNA (cytokines, EPO, interferons)
- Insulin signals on two timescales: acute Akt effects (GLUT4, glycogen synthase, cAMP lowering) and slower MAPK-driven transcription
- Adaptors and scaffolds signal by proximity, not catalysis; cascades add amplification and switch-like behavior
- Experimental logic: constitutively active mutant = sufficiency (and bypasses upstream blocks); dominant-negative = necessity; epistasis orders the pathway`
    }
  ]
};
