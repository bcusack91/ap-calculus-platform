export const mcatCellSignalingPart1Data = {
  topicSlug: 'mcat-cell-biology-signaling-mcat',
  sections: [
    {
      id: 'sig1-intro',
      type: 'text' as const,
      content: `# Cell Signaling for the MCAT

**Part 1 of 4 — Signaling Logic & Receptor Classes**

### Modes of Intercellular Signaling

| Mode | Range | Example |
|------|-------|---------|
| **Endocrine** | Long — via bloodstream | Insulin, cortisol, thyroid hormone |
| **Paracrine** | Local — nearby cells | Growth factors, histamine, nitric oxide |
| **Autocrine** | Self — cell signals itself | T-cell IL-2 self-stimulation; many cancers |
| **Juxtacrine** | Contact-dependent | Notch-Delta (membrane-bound ligand and receptor) |
| **Synaptic** | Across a synapse | Neurotransmitters (a fast, targeted paracrine) |

### Ligand Chemistry Determines Receptor Location

- **Hydrophilic ligands** (peptides, catecholamines like epinephrine): cannot cross the membrane → bind **cell-surface receptors** → fast responses via second messengers; the hormone is the "first messenger"
- **Hydrophobic ligands** (steroids, thyroid hormone, vitamin D, retinoic acid): cross the bilayer → bind **intracellular receptors** that act as ligand-activated **transcription factors** → slower responses (hours) requiring new transcription/translation
- Thyroid hormone is the classic trap: it is derived from tyrosine (an amino acid) but is **lipophilic** and uses a nuclear receptor

### The Four Surface Receptor Families

| Receptor class | Mechanism | Speed | Examples |
|----------------|-----------|-------|----------|
| **Ligand-gated ion channel** (ionotropic) | Ligand opens an ion pore directly | Milliseconds | Nicotinic ACh receptor (Na$^+$ in), GABA-A (Cl$^-$ in) |
| **GPCR** (metabotropic) | 7 transmembrane helices; activates a heterotrimeric G protein | Seconds | Beta-adrenergic, muscarinic ACh, rhodopsin, glucagon receptor |
| **Receptor tyrosine kinase (RTK)** | Ligand → dimerization → autophosphorylation → kinase cascades | Minutes | Insulin receptor, EGF receptor |
| **Enzyme-linked (non-kinase) / cytokine receptors** | Receptor associates with a separate kinase (JAK) or has guanylyl cyclase activity | Minutes | Erythropoietin (JAK-STAT), ANP receptor (cGMP) |

### Core Principles Every Pathway Shares

1. **Specificity**: only cells with the receptor respond — the same hormone can trigger different responses in different tissues (epinephrine relaxes airway smooth muscle via beta-2 but constricts vessels via alpha-1)
2. **Amplification**: one ligand → many G proteins → many cAMP → many PKA → thousands of phosphorylated targets; cascades multiply the signal at each tier
3. **Integration**: pathways cross-talk; a cell sums its inputs
4. **Termination**: every "on" switch has a dedicated "off" switch (Part 4) — a signal that cannot be turned off is a disease`
    },
    {
      id: 'sig1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Signaling Fundamentals** 🎯`,
      exercise: {
        questions: [
          {
            question: `Epinephrine causes vasoconstriction in skin arterioles but vasodilation in skeletal muscle arterioles. The best explanation is:`,
            options: [`Epinephrine is chemically modified as it enters muscle`, `Skin arterioles see higher epinephrine concentrations`, `Skin and muscle arterioles express different adrenergic receptor subtypes`, `Skeletal muscle arterioles respond to norepinephrine, not epinephrine`],
            correctAnswer: 2,
            explanation: `The response to a ligand is a property of the receiving cell, not the ligand. Skin vessels are rich in alpha-1 receptors (Gq → contraction), while skeletal muscle vessels express beta-2 receptors (Gs → cAMP → relaxation). Same first messenger, different receptor and effector wiring — a foundational MCAT concept.`
          },
          {
            question: `A new hormone produces measurable changes in target-cell gene expression only after several hours, and its effect is blocked by transcription inhibitors. The hormone most likely:`,
            options: [`Is lipophilic and binds a receptor that is a transcription factor`, `Binds a surface receptor whose second-messenger cascade is unusually slow`, `Is a peptide acting through a ligand-gated cation channel`, `Acts through a GPCR whose effects require no new transcription`],
            correctAnswer: 0,
            explanation: `Hours-long latency plus dependence on new transcription is the signature of the nuclear (intracellular) receptor mechanism used by steroids and thyroid hormone. Ion channels act in milliseconds; second-messenger pathways in seconds to minutes, and their acute effects (phosphorylation of existing proteins) do not require transcription.`
          },
          {
            question: `The nicotinic acetylcholine receptor at the neuromuscular junction depolarizes muscle within a millisecond of ACh binding because it:`,
            options: [`Activates a G protein already bound to the cation channel`, `Phosphorylates a voltage-gated Na$^+$ channel to open it`, `Releases Ca$^{2+}$ from the SR to depolarize`, `Is an ion channel itself; ligand binding opens the pore`],
            correctAnswer: 3,
            explanation: `Ionotropic receptors fuse receptor and effector into one protein: binding opens the pore directly, so the delay is essentially the channel's gating time. Any pathway with intermediate steps (G proteins, kinases) is orders of magnitude slower. Contrast with the muscarinic ACh receptor — same ligand, but a GPCR, hence slower parasympathetic effects.`
          }
        ]
      }
    },
    {
      id: 'sig1-deep',
      type: 'text' as const,
      content: `### Receptor Binding Is Saturable and Specific — Like Enzymes, Minus Catalysis

Ligand-receptor binding obeys the same math as enzyme kinetics:

$$[LR] = \\frac{[R]_{total}[L]}{K_d + [L]}$$

- $K_d$ = ligand concentration at which half the receptors are occupied; **lower $K_d$ = higher affinity**
- A **competitive antagonist** shifts the dose-response curve right (more agonist needed) without lowering the maximal response
- A **noncompetitive antagonist** (or receptor loss) lowers the maximal response
- **Agonist** = binds and activates; **antagonist** = binds and blocks; **partial agonist** = activates submaximally even at full occupancy

### Nitric Oxide — The Gas That Breaks the Rules

- NO is made from **arginine** by nitric oxide synthase in endothelial cells
- As a small nonpolar gas, it needs **no receptor on the membrane**: it diffuses into adjacent smooth muscle and binds **soluble guanylyl cyclase** → cGMP → smooth muscle relaxation
- Nitroglycerin (angina) is an NO donor; sildenafil inhibits the phosphodiesterase (PDE5) that degrades cGMP — two drugs, same pathway, different nodes
- NO is a paracrine signal with a lifetime of seconds — range limited by its rapid reaction with hemoglobin and oxygen

### Reading Dose-Response Curves (Passage Skill)

| Curve change | Interpretation |
|--------------|----------------|
| Right shift, same max | Competitive antagonist present (surmountable) |
| Lower max, similar EC50 | Noncompetitive antagonist or fewer functional receptors |
| Left shift | Higher potency (higher affinity or amplification upstream) |
| Submaximal plateau for a full-occupancy ligand | Partial agonist |`
    },
    {
      id: 'sig1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Receptors & Dose-Response** 🎯`,
      exercise: {
        questions: [
          {
            question: `Drug X shifts the epinephrine dose-response curve to the right, but the original maximal response is still reached at high epinephrine doses. Drug X is best classified as a:`,
            options: [`Noncompetitive antagonist, lowering the maximal response`, `Competitive antagonist, outcompeted by excess agonist`, `Partial agonist, plateauing below the maximal response`, `Irreversible blocker, removing receptors from the pool`],
            correctAnswer: 1,
            explanation: `A competitive antagonist occupies the same site reversibly, so sufficient agonist can outcompete it: potency falls (right shift) but efficacy (max response) is preserved. Noncompetitive or irreversible blockers reduce the achievable maximum because no agonist concentration can reclaim the disabled receptors.`
          },
          {
            question: `Sildenafil enhances NO-mediated vasodilation by inhibiting phosphodiesterase-5. Its direct biochemical effect is to:`,
            options: [`Increase NO synthesis from arginine in the endothelium`, `Activate soluble guanylyl cyclase in place of NO itself`, `Slow cGMP breakdown, prolonging smooth muscle relaxation`, `Block cGMP production by soluble guanylyl cyclase`],
            correctAnswer: 2,
            explanation: `Second-messenger levels reflect a synthesis/degradation balance. NO stimulates soluble guanylyl cyclase (synthesis of cGMP); PDE5 hydrolyzes cGMP (degradation). Inhibiting PDE5 raises cGMP only where NO is already being produced — the drug amplifies an existing signal rather than creating one. Degradation-side drug targets are a recurring MCAT theme.`
          }
        ]
      }
    },
    {
      id: 'sig1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Signaling ranges: endocrine (blood), paracrine (local), autocrine (self), juxtacrine (contact), synaptic
- Hydrophilic ligands → surface receptors + second messengers (fast); lipophilic ligands (steroids, thyroid hormone) → intracellular receptors → transcription (slow)
- Four surface receptor classes: ligand-gated channels (ms), GPCRs (s), RTKs (min), JAK-STAT/cytokine receptors
- Response identity lives in the target cell: one ligand, different receptors/subtypes, different outcomes
- Binding math mirrors enzymes: $K_d$ = half-occupancy concentration; competitive antagonist = right shift, max preserved; noncompetitive = max lowered
- Amplification: each catalytic tier multiplies the signal — one hormone molecule can mobilize millions of product molecules
- NO: gas, no membrane receptor, activates soluble guanylyl cyclase → cGMP → vasodilation (nitroglycerin adds NO; sildenafil spares cGMP)`
    }
  ]
};
