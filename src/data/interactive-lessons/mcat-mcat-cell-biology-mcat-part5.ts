export const mcatCellBioPart5Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb5-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 5 of 7 — Cell Signaling**

### Signal Transduction — The Universal Framework

$$\\text{Signal (ligand)} \\to \\text{Receptor} \\to \\text{Transduction (amplification)} \\to \\text{Cellular Response}$$

**Signal amplification** is critical: one hormone molecule can activate millions of downstream effectors through enzyme cascades. Each step multiplies the signal.

### Types of Signaling

| Type | Distance | Speed | Example |
|------|----------|-------|---------|
| Endocrine | Long (via blood) | Slow (minutes-hours) | Insulin from pancreas to muscle |
| Paracrine | Short (nearby cells) | Moderate | Growth factors, histamine |
| Autocrine | Self (same cell) | Fast | IL-2 in activated T cells |
| Juxtacrine | Direct contact | Fast | Notch signaling, MHC-TCR |
| Synaptic | Across synapse | Very fast (ms) | Neurotransmitters |

### Major Receptor Types

| Receptor | Location | Mechanism | Ligands | Example |
|----------|----------|-----------|---------|---------|
| G-protein coupled (GPCR) | Membrane | G-protein → second messenger | Water-soluble hormones, neurotransmitters | Epinephrine (beta receptors) |
| Receptor tyrosine kinase (RTK) | Membrane | Dimerization → autophosphorylation → Ras/MAPK | Growth factors | Insulin receptor, EGF receptor |
| Ligand-gated ion channel | Membrane | Ion flux | Neurotransmitters | nAChR at NMJ |
| Intracellular/Nuclear | Cytoplasm or nucleus | Direct transcription factor | Lipid-soluble hormones | Steroid hormones, thyroid hormone |

### GPCR Signaling — The Most Tested Pathway

1. Ligand binds GPCR (7-transmembrane domain receptor)
2. Conformational change → G$\\alpha$ subunit exchanges GDP for GTP (activation)
3. G$\\alpha$-GTP activates effector enzyme:
   - **G$_s$** → activates adenylyl cyclase → cAMP ↑ → PKA activated
   - **G$_i$** → inhibits adenylyl cyclase → cAMP ↓
   - **G$_q$** → activates phospholipase C → IP$_3$ + DAG
4. G$\\alpha$ has intrinsic GTPase activity → hydrolyzes GTP → returns to inactive state

### Second Messengers

| Messenger | Produced by | Activates | Key Functions |
|-----------|------------|-----------|---------------|
| cAMP | Adenylyl cyclase | PKA | Glycogen breakdown, gene expression |
| IP$_3$ | Phospholipase C | Ca$^{2+}$ release from ER | Smooth muscle contraction, secretion |
| DAG | Phospholipase C | PKC | Cell growth, differentiation |
| Ca$^{2+}$ | Released from ER | Calmodulin, many enzymes | Muscle contraction, exocytosis, signaling |
| cGMP | Guanylyl cyclase | PKG | Vasodilation (NO pathway) |`
    },
    {
      id: 'cb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cell Signaling** 🎯`,
      exercise: {
        questions: [
          {
            question: `Steroid hormones (like cortisol and testosterone) can directly activate genes because they:`,
            options: [`Are lipid-soluble and cross the membrane to bind intracellular receptors that act as transcription factors`, `Bind to GPCRs and use cAMP as a second messenger`, `Activate receptor tyrosine kinases on the cell surface`, `Use IP$_3$ to release calcium from the ER`],
            correctAnswer: 0,
            explanation: `Steroids are derived from cholesterol (lipid-soluble). They diffuse through the membrane, bind cytoplasmic or nuclear receptors, and the hormone-receptor complex acts directly as a transcription factor. This is why steroid effects are slower (hours) but longer-lasting than peptide hormone effects.`
          },
          {
            question: `Cholera toxin permanently activates the G$_s$ subunit by preventing GTP hydrolysis. The primary cellular effect is:`,
            options: [`Continuously elevated cAMP levels → excessive Cl$^-$ and water secretion into the intestine`, `Decreased cAMP and reduced secretion`, `Activation of phospholipase C and IP$_3$ production`, `Blocking of all G-protein signaling`],
            correctAnswer: 0,
            explanation: `G$_s$ normally activates adenylyl cyclase, raising cAMP. Cholera toxin ADP-ribosylates G$_s\\alpha$, preventing GTP hydrolysis → G$_s$ stays permanently ON → cAMP stays high → CFTR chloride channels open → massive Cl$^-$ and water secretion → severe watery diarrhea. Pertussis toxin does the opposite: locks G$_i$ in the OFF state.`
          },
          {
            question: `Insulin binds to a receptor tyrosine kinase (RTK). The first step after ligand binding is:`,
            options: [`Receptor dimerization and autophosphorylation of tyrosine residues`, `Activation of a G-protein`, `Opening of an ion channel`, `Release of cAMP from adenylyl cyclase`],
            correctAnswer: 0,
            explanation: `RTK mechanism: ligand binding → receptor dimerization → each receptor phosphorylates the other's tyrosine residues (autophosphorylation). Phosphotyrosines recruit adapter proteins (like IRS-1 for insulin) → activate Ras → MAPK cascade → gene expression. RTKs do NOT use G-proteins.`
          }
        ]
      }
    },
    {
      id: 'cb5-deep',
      type: 'text' as const,
      content: `### Signal Amplification — Why One Molecule Matters

MCAT passages test quantitative reasoning about amplification:

$$\\text{1 epinephrine} \\to \\text{1 GPCR} \\to \\text{many G-proteins} \\to \\text{many adenylyl cyclase} \\to \\text{many cAMP} \\to \\text{many PKA} \\to \\text{millions of products}$$

Each enzyme activates multiple substrates, creating an **exponential amplification cascade**. This is why hormones work at nanomolar concentrations.

### Key Pathway Connections for MCAT

| Pathway | Clinical Connection |
|---------|-------------------|
| Cholera toxin → G$_s$ locked ON | Watery diarrhea (cAMP ↑ in intestinal cells) |
| Pertussis toxin → G$_i$ locked OFF | Whooping cough (cAMP ↑ because inhibition is removed) |
| Ras mutation (stuck ON) | Cancer (30% of tumors have Ras mutations) |
| Viagra → inhibits PDE5 | Prevents cGMP breakdown → vasodilation |
| Caffeine → inhibits phosphodiesterase | cAMP stays elevated → sympathetic-like effects |

### Receptor Desensitization

Cells can turn down signaling when overstimulated:
- **Receptor phosphorylation**: Kinases phosphorylate the receptor → arrestin binds → blocks G-protein coupling
- **Receptor internalization**: Endocytosis removes receptors from the surface
- **Downregulation**: Decreased receptor gene expression
- This explains drug tolerance and why chronic stimulation leads to diminished response

### Nitric Oxide (NO) Signaling — Unique Pathway

- NO is a gas that diffuses freely through membranes (no receptor needed at surface)
- Activates soluble guanylyl cyclase → cGMP ↑ → PKG → smooth muscle relaxation → vasodilation
- Very short-lived (seconds)
- NO synthase uses arginine + O$_2$ → citrulline + NO
- Clinical: nitroglycerin releases NO → relieves angina`
    },
    {
      id: 'cb5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Signaling** 🎯`,
      exercise: {
        questions: [
          {
            question: `Caffeine inhibits phosphodiesterase (PDE). This leads to:`,
            options: [`Prolonged cAMP signaling because PDE normally breaks down cAMP`, `Decreased cAMP because PDE produces cAMP`, `Increased IP$_3$ signaling`, `Blocked G-protein activation`],
            correctAnswer: 0,
            explanation: `PDE breaks down cAMP → AMP (terminating the signal). When caffeine inhibits PDE, cAMP accumulates → PKA stays active longer → sustained fight-or-flight effects (increased heart rate, alertness). This is the same principle behind Viagra inhibiting PDE5 (cGMP accumulates → vasodilation).`
          },
          {
            question: `A mutation causes a receptor tyrosine kinase to dimerize and autophosphorylate even without ligand binding. This would most likely cause:`,
            options: [`Uncontrolled cell growth — constitutive activation of growth signaling pathways`, `Cell death from excessive apoptosis signaling`, `No effect because the receptor still needs downstream proteins`, `Decreased sensitivity to growth factors`],
            correctAnswer: 0,
            explanation: `Constitutively active RTKs signal growth continuously, even without growth factor present. This is exactly what happens with oncogenic mutations in HER2 (breast cancer) and EGFR (lung cancer). Anti-cancer drugs like trastuzumab (Herceptin) and erlotinib target these overactive RTKs.`
          }
        ]
      }
    },
    {
      id: 'cb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Signal transduction: ligand → receptor → transduction (amplification) → response
- GPCRs: G$_s$ activates adenylyl cyclase (cAMP ↑), G$_i$ inhibits it, G$_q$ activates PLC (IP$_3$ + DAG)
- RTKs: dimerize and autophosphorylate → Ras → MAPK cascade (growth signals)
- Steroid hormones: cross membrane, bind intracellular receptors, act as transcription factors (slow but lasting)
- Second messengers: cAMP, IP$_3$, DAG, Ca$^{2+}$, cGMP — know what produces each and what each activates
- Cholera = G$_s$ locked ON; Pertussis = G$_i$ locked OFF; both raise cAMP
- Signal amplification: each cascade step multiplies the signal exponentially
- NO: gaseous signal → guanylyl cyclase → cGMP → vasodilation`
    }
  ]
};
