export const mcatCellSignalingPart2Data = {
  topicSlug: 'mcat-cell-biology-signaling-mcat',
  sections: [
    {
      id: 'sig2-intro',
      type: 'text' as const,
      content: `# Cell Signaling for the MCAT

**Part 2 of 4 — GPCRs & Second Messengers**

### The G Protein Cycle — A Molecular Timer

A GPCR has **7 transmembrane helices** and couples to a **heterotrimeric G protein** (subunits alpha, beta, gamma):

1. **Resting state**: G-alpha holds **GDP** and stays bound to beta-gamma
2. **Ligand binds the GPCR** → the receptor acts as a **GEF** (guanine nucleotide exchange factor): G-alpha releases GDP and picks up **GTP** (GTP is simply more abundant — the receptor does not phosphorylate anything)
3. **G-alpha-GTP dissociates** from beta-gamma; both halves can regulate effectors
4. **Built-in off switch**: G-alpha slowly hydrolyzes its own GTP → GDP (intrinsic GTPase), then reassociates with beta-gamma

> The signal's duration is set by the GTPase timer — a theme that returns with Ras in Part 3 and with toxins in Part 4.

### The Three G-alpha Families to Know Cold

| G-alpha | Effector | Second messenger | Classic receptors |
|---------|----------|------------------|-------------------|
| **Gs** | Stimulates adenylyl cyclase | cAMP up | Beta-1/beta-2 adrenergic, glucagon |
| **Gi** | Inhibits adenylyl cyclase | cAMP down | Alpha-2 adrenergic, M2 muscarinic (slows heart), opioid receptors |
| **Gq** | Activates phospholipase C (PLC) | IP$_3$ + DAG | Alpha-1 adrenergic, M1/M3 muscarinic |

### The cAMP Pathway (Gs)

$$\\text{ATP} \\xrightarrow{\\text{adenylyl cyclase}} \\text{cAMP} \\xrightarrow{\\text{PDE}} \\text{AMP}$$

- cAMP binds the regulatory subunits of **protein kinase A (PKA)**, releasing active catalytic subunits
- PKA phosphorylates serine/threonine residues on target enzymes — e.g., in liver, PKA phosphorylation **activates glycogen phosphorylase kinase** (glycogen breakdown ON) and **inactivates glycogen synthase** (synthesis OFF): one kinase flips both switches in the same metabolic direction
- PKA can also enter the nucleus and phosphorylate **CREB**, linking a fast cytosolic pathway to slower gene expression

### The Phosphoinositide Pathway (Gq)

PLC cleaves the membrane lipid **PIP$_2$** into two messengers:

- **IP$_3$** (soluble): diffuses to the ER and opens **IP$_3$-gated Ca$^{2+}$ channels** → cytosolic Ca$^{2+}$ spikes (from ~100 nM toward micromolar)
- **DAG** (stays in the membrane): with Ca$^{2+}$, activates **protein kinase C (PKC)**
- Ca$^{2+}$ also binds **calmodulin**; Ca$^{2+}$-calmodulin activates CaM kinases and myosin light-chain kinase (smooth muscle contraction — why alpha-1/Gq stimulation constricts vessels)

### Amplification in Numbers

One epinephrine molecule → ~100 G proteins → each adenylyl cyclase makes many cAMP → PKA → phosphorylase cascade → **millions of glucose-1-phosphate molecules**. Each catalytic tier multiplies; only stoichiometric (1:1) steps do not.`
    },
    {
      id: 'sig2-quiz1',
      type: 'multiple-choice' as const,
      content: `**GPCR Mechanics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mutant G-alpha-s subunit binds GTP normally but has lost its intrinsic GTPase activity. In cells expressing it, glucagon stimulation will produce:`,
            options: [`A prolonged cAMP signal that persists after the hormone is removed, because G-alpha-s cannot turn itself off`, `No cAMP signal, because GTP hydrolysis is required to activate adenylyl cyclase`, `A normal signal, because receptor internalization terminates G protein signaling`, `Decreased cAMP, because the mutant subunit sequesters beta-gamma`],
            correctAnswer: 0,
            explanation: `G-alpha is active while GTP-bound; hydrolysis to GDP is the OFF step, not the ON step. Losing GTPase activity locks the subunit in the active state, so adenylyl cyclase keeps producing cAMP long after ligand is gone. This is precisely what cholera toxin does chemically (ADP-ribosylation of G-alpha-s) and what activating GNAS mutations do in some endocrine tumors.`
          },
          {
            question: `Acetylcholine slows heart rate through M2 muscarinic receptors but triggers smooth muscle contraction through M3 receptors. The M2 and M3 pathways differ in that:`,
            options: [`M2 couples to Gi (lowering cAMP and opening K$^+$ channels via beta-gamma), while M3 couples to Gq (IP$_3$/Ca$^{2+}$)`, `M2 is an ion channel and M3 is a GPCR`, `M2 uses cGMP while M3 uses cAMP`, `M2 is intracellular while M3 is on the cell surface`],
            correctAnswer: 0,
            explanation: `Both are muscarinic GPCRs for the same ligand; the downstream G protein differs. M2 (heart) is Gi-coupled — it inhibits adenylyl cyclase and its freed beta-gamma subunits open GIRK K$^+$ channels, hyperpolarizing pacemaker cells. M3 (smooth muscle, glands) is Gq-coupled — PLC → IP$_3$ → Ca$^{2+}$ → contraction/secretion. Same first messenger, different wiring: the MCAT's favorite signaling theme.`
          },
          {
            question: `In hepatocytes, a single PKA activation event simultaneously accelerates glycogen breakdown and halts glycogen synthesis. This is possible because:`,
            options: [`PKA phosphorylates multiple substrates, activating the degradative enzyme cascade while inhibiting glycogen synthase`, `PKA degrades glycogen synthase mRNA`, `cAMP directly allosterically activates glycogen phosphorylase`, `PKA pumps glucose out of the cell, depleting the synthesis substrate`],
            correctAnswer: 0,
            explanation: `A kinase with broad substrate specificity coordinates a whole program: phosphorylation activates phosphorylase kinase (which activates glycogen phosphorylase) AND inhibits glycogen synthase. Reciprocal regulation by one signal prevents a futile cycle. cAMP itself binds PKA's regulatory subunits — it does not act directly on phosphorylase — and no transcription or transport step is needed for this acute response.`
          }
        ]
      }
    },
    {
      id: 'sig2-deep',
      type: 'text' as const,
      content: `### Calcium — The Ion That Acts Like a Hormone

Cytosolic free Ca$^{2+}$ is kept near $10^{-7}$ M against ~$2.5 \\times 10^{-3}$ M outside (SERCA and PMCA pumps, Na$^+$/Ca$^{2+}$ exchanger). Because the resting level is so low, a small influx produces a large **fold change** — ideal for switching:

| Ca$^{2+}$ source | Trigger | Example response |
|------------------|---------|------------------|
| ER release (IP$_3$ receptor) | Gq/PLC signaling | Smooth muscle contraction, secretion |
| ER/SR release (ryanodine receptor) | Depolarization (heart: Ca$^{2+}$-induced Ca$^{2+}$ release) | Cardiac and skeletal contraction |
| Plasma-membrane voltage-gated channels | Action potential at nerve terminal | Synaptotagmin-triggered vesicle fusion |

- **Calmodulin** is the universal decoder: Ca$^{2+}$-CaM activates CaM kinase II (learning/memory), MLCK (smooth muscle), and calcineurin (a phosphatase — immunosuppressants cyclosporine/tacrolimus block it)
- Signals are often **oscillatory**; frequency encodes information (CaMKII acts as a frequency decoder)

### Second Messengers at a Glance

| Messenger | Made by | Removed by | Main targets |
|-----------|---------|-----------|--------------|
| cAMP | Adenylyl cyclase | Phosphodiesterase (PDE) | PKA, CNG channels |
| cGMP | Guanylyl cyclase (soluble = NO target; membrane = ANP receptor) | PDE5 and others | PKG, CNG channels (vision) |
| IP$_3$ | PLC (from PIP$_2$) | Phosphatases | IP$_3$ receptor on ER |
| DAG | PLC (from PIP$_2$) | DAG kinase/lipases | PKC |
| Ca$^{2+}$ | Opened channels (not synthesized) | Pumps/exchangers/buffers | Calmodulin, PKC, synaptotagmin, troponin C |

> Caffeine and theophylline are nonselective **PDE inhibitors** — they prolong cAMP signals, which is why methylxanthines mimic mild adrenergic stimulation.

### Vision — A GPCR Pathway That Runs Backwards

- Rhodopsin (a GPCR with covalently bound retinal) absorbs a photon → activates the G protein **transducin (Gt)** → activates a **cGMP phosphodiesterase** → cGMP **falls** → cGMP-gated Na$^+$/Ca$^{2+}$ channels **close** → the photoreceptor **hyperpolarizes** and releases *less* glutamate
- Light = channel closing: the rare pathway where the stimulus lowers a second messenger; amplification is enormous (1 photon → hundreds of thousands of cGMP hydrolyzed)`
    },
    {
      id: 'sig2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Second Messengers** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell is treated with a drug that blocks the IP$_3$ receptor on the ER. Stimulation of a Gq-coupled receptor in these cells will still produce:`,
            options: [`DAG in the plasma membrane, since PLC cleavage of PIP$_2$ is upstream of the block`, `A normal cytosolic Ca$^{2+}$ spike from the ER`, `Increased cAMP, because IP$_3$ is rerouted to adenylyl cyclase`, `No signaling events of any kind`],
            correctAnswer: 0,
            explanation: `PLC generates IP$_3$ and DAG in one cleavage; blocking the IP$_3$ receptor only prevents the downstream ER Ca$^{2+}$ release. DAG production is untouched (though PKC activation will be weakened, since PKC needs Ca$^{2+}$ as a coactivator). Mapping where in a cascade an inhibitor acts — and what remains intact upstream and in parallel — is the core MCAT signaling skill.`
          },
          {
            question: `In rod photoreceptors, light causes hyperpolarization rather than depolarization. The mechanistic reason is that photon absorption:`,
            options: [`Activates a phosphodiesterase that lowers cGMP, closing cGMP-gated cation channels that were open in the dark`, `Opens Cl$^-$ channels directly`, `Activates adenylyl cyclase, raising cAMP`, `Blocks the Na$^+$/K$^+$ ATPase`],
            correctAnswer: 0,
            explanation: `In darkness, high cGMP holds cation channels open (the "dark current") and the cell sits relatively depolarized. Light-activated rhodopsin → transducin → PDE drops cGMP, channels close, and the cell hyperpolarizes, reducing glutamate release. Signaling by removing a messenger is counterintuitive and therefore heavily tested.`
          }
        ]
      }
    },
    {
      id: 'sig2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- G protein cycle: receptor = GEF (GDP → GTP exchange turns G-alpha ON); intrinsic GTPase turns it OFF — activity duration is a hydrolysis timer
- Gs → adenylyl cyclase up → cAMP → PKA; Gi → cyclase down (+ beta-gamma opens K$^+$ channels, e.g., M2 slowing the heart); Gq → PLC → IP$_3$ (ER Ca$^{2+}$ release) + DAG (PKC)
- PKA coordinates programs by phosphorylating many substrates with opposite effects (phosphorylase ON, glycogen synthase OFF) — no futile cycles
- Ca$^{2+}$ is a second messenger released, not synthesized; ~10,000-fold gradient makes small fluxes loud; calmodulin decodes it (CaMKII, MLCK, calcineurin)
- Messenger removal is a drug target: PDE inhibitors (caffeine, sildenafil) prolong cyclic-nucleotide signals
- Vision inverts the logic: light lowers cGMP → channels close → hyperpolarization
- Amplification occurs only at catalytic steps; a locked-on G-alpha (GTPase-dead, cholera toxin) means a signal that outlives its ligand`
    }
  ]
};
