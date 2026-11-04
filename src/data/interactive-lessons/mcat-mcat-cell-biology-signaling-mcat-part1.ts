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
            yield: 'HIGH',
            explanation: `The response to a ligand is a property of the receiving cell, not the ligand. Skin vessels are rich in alpha-1 receptors (Gq → contraction), while skeletal muscle vessels express beta-2 receptors (Gs → cAMP → relaxation). Same first messenger, different receptor and effector wiring — a foundational MCAT concept.`
          },
          {
            question: `A new hormone produces measurable changes in target-cell gene expression only after several hours, and its effect is blocked by transcription inhibitors. The hormone most likely:`,
            options: [`Is lipophilic and binds a receptor that is a transcription factor`, `Binds a surface receptor whose second-messenger cascade is unusually slow`, `Is a peptide acting through a ligand-gated cation channel`, `Acts through a GPCR whose effects require no new transcription`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Hours-long latency plus dependence on new transcription is the signature of the nuclear (intracellular) receptor mechanism used by steroids and thyroid hormone. Ion channels act in milliseconds; second-messenger pathways in seconds to minutes, and their acute effects (phosphorylation of existing proteins) do not require transcription.`
          },
          {
            question: `The nicotinic acetylcholine receptor at the neuromuscular junction depolarizes muscle within a millisecond of ACh binding because it:`,
            options: [`Activates a G protein already bound to the cation channel`, `Phosphorylates a voltage-gated Na$^+$ channel to open it`, `Releases Ca$^{2+}$ from the SR to depolarize`, `Is an ion channel itself; ligand binding opens the pore`],
            correctAnswer: 3,
            yield: 'HIGH',
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
- A **competitive antagonist** shifts the dose-response curve right (more agonist needed) without lowering the maximal response; a **noncompetitive antagonist** (or receptor loss) lowers the maximal response
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
      id: 'sig1-worked',
      type: 'text' as const,
      content: `### Worked Example — Two Drugs, One NO Pathway

**Problem 1.** Arterial smooth muscle strips are tested with the endothelium intact (making NO) or scraped away (making none). Strips receive an NO donor (nitroglycerin), a PDE5 inhibitor (sildenafil), or both.

- **(a)** How does NO made by the endothelium reach and act on the smooth muscle, with no membrane receptor to bind?
- **(b)** Does the NO donor relax the strips that lack endothelium?
- **(c)** Does sildenafil alone relax each set of strips?
- **(d)** In the strips without endothelium, how do both drugs together compare with either drug alone?

**(a) Route and target.** Endothelial NO synthase makes NO from arginine. As a small nonpolar gas, NO diffuses across the bilayer into the smooth muscle and binds soluble guanylyl cyclase inside the cell, which makes cGMP and relaxes the muscle.

**(b) NO donor.** Yes. Nitroglycerin supplies NO directly, so the missing endothelium does not matter: soluble guanylyl cyclase is activated, cGMP rises and the strips relax.

**(c) Sildenafil alone.** It relaxes the intact strips, where endothelial NO keeps cGMP being made, by slowing cGMP breakdown by PDE5. Strips without endothelium barely respond: with no NO, little cGMP is made, so there is almost nothing to spare.

**(d) Both drugs.** Relaxation is larger and longer than with either drug alone. The donor drives cGMP synthesis while sildenafil blocks its degradation, so cGMP climbs higher: two drugs acting at two nodes of the same pathway.`
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
            yield: 'HIGH',
            explanation: `A competitive antagonist occupies the same site reversibly, so sufficient agonist can outcompete it: potency falls (right shift) but efficacy (max response) is preserved. Noncompetitive or irreversible blockers reduce the achievable maximum because no agonist concentration can reclaim the disabled receptors.`
          },
          {
            question: `Vascular smooth muscle strips are treated with an inhibitor of soluble guanylyl cyclase. Relaxation by nitroglycerin is abolished, but relaxation by atrial natriuretic peptide (ANP) is preserved. The best explanation is that:`,
            options: [`ANP triggers extra NO release from the endothelial cells`, `ANP blocks PDE5 so that cGMP breakdown slows down`, `ANP's receptor is itself a membrane guanylyl cyclase`, `ANP binds a nuclear receptor and turns on new genes`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Soluble guanylyl cyclase is NO's target, so blocking it stops nitroglycerin, an NO donor. ANP still works because its surface receptor is a different enzyme, a membrane guanylyl cyclase that makes cGMP itself. Extra endothelial NO would act on the same blocked soluble enzyme. Slowing PDE5 spares cGMP but cannot create it, and with the soluble cyclase blocked little cGMP is being made. A nuclear-receptor route fits lipophilic ligands acting over hours, not a peptide that binds a surface receptor.`
          }
        ]
      }
    },
    {
      id: 'sig1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Ligand chemistry picks the receptor.** Hydrophilic ligands bind surface receptors (fast); lipophilic ones bind nuclear receptors (hours).
- **Receptor class sets the speed.** Ligand-gated channels act in milliseconds, GPCRs in seconds, RTKs and JAK-linked receptors in minutes.
- **The target cell decides.** One ligand acts through different receptor subtypes: epinephrine relaxes via beta-2 but constricts via alpha-1.
- **NO acts at two drug nodes.** NO activates soluble guanylyl cyclase to make cGMP; nitroglycerin adds NO and sildenafil spares cGMP.

**Common traps**

- **Thyroid hormone as a surface ligand.** It is made from tyrosine but is lipophilic and uses a nuclear receptor, like the steroids.
- **Lower $K_d$ as weaker binding.** $K_d$ is the half-occupancy concentration, so a lower $K_d$ means higher affinity.
- **Every right shift as lost efficacy.** A competitive antagonist only lowers potency; excess agonist still reaches the full maximum.
- **Full occupancy as full response.** A partial agonist occupies every receptor yet activates them only submaximally.`
    }
  ]
};
