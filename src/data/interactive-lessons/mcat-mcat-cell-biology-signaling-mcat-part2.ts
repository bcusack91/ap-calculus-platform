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
            options: [`No cAMP signal at all, since GTP hydrolysis is the activating step`, `A prolonged cAMP signal that persists after hormone washout`, `A normal cAMP signal, since arrestin still terminates it`, `Reduced cAMP, since the mutant traps beta-gamma subunits`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `G-alpha is active while GTP-bound; hydrolysis to GDP is the OFF step, not the ON step. Losing GTPase activity locks the subunit in the active state, so adenylyl cyclase keeps producing cAMP long after ligand is gone. This is precisely what cholera toxin does chemically (ADP-ribosylation of G-alpha-s).`
          },
          {
            question: `Acetylcholine slows heart rate through M2 muscarinic receptors but triggers smooth muscle contraction through M3 receptors. The M2 and M3 pathways differ in that:`,
            options: [`M2 is an ionotropic channel, while M3 is a GPCR`, `M2 is intracellular, while M3 is on the surface`, `M2 raises cGMP and M3 raises cAMP`, `M2 couples to Gi, while M3 couples to Gq`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Both are muscarinic GPCRs for the same ligand; the downstream G protein differs. M2 (heart) is Gi-coupled — it inhibits adenylyl cyclase and its freed beta-gamma subunits open GIRK K$^+$ channels, hyperpolarizing pacemaker cells. M3 (smooth muscle, glands) is Gq-coupled — PLC → IP$_3$ → Ca$^{2+}$ → contraction/secretion. Same first messenger, different wiring: the MCAT's favorite signaling theme.`
          },
          {
            question: `In hepatocytes, a single PKA activation event simultaneously accelerates glycogen breakdown and halts glycogen synthesis. This is possible because:`,
            options: [`PKA phosphorylates several substrates at once`, `cAMP allosterically activates glycogen phosphorylase`, `PKA targets glycogen synthase to the proteasome`, `PKA degrades the mRNA encoding glycogen synthase`],
            correctAnswer: 0,
            yield: 'HIGH',
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
| Plasma-membrane voltage-gated channels | Action potential at nerve terminal | Ca$^{2+}$-triggered neurotransmitter vesicle fusion |

- **Calmodulin** is the universal decoder for Ca$^{2+}$ from all three sources

<!-- yield:low -->
- Named calmodulin targets: CaM kinase II (learning/memory) and calcineurin (a phosphatase — the immunosuppressants cyclosporine/tacrolimus block it). Ca$^{2+}$ signals are often **oscillatory**, and frequency encodes information (CaMKII acts as a frequency decoder). At the nerve terminal, the Ca$^{2+}$ sensor that triggers vesicle fusion is **synaptotagmin**.
<!-- /yield -->

### Second Messengers at a Glance

| Messenger | Made by | Removed by | Main targets |
|-----------|---------|-----------|--------------|
| cAMP | Adenylyl cyclase | Phosphodiesterase (PDE) | PKA, CNG channels |
| cGMP | Guanylyl cyclase (soluble = NO target; membrane = ANP receptor) | PDE5 and others | PKG, CNG channels (vision) |
| IP$_3$ | PLC (from PIP$_2$) | Phosphatases | IP$_3$ receptor on ER |
| DAG | PLC (from PIP$_2$) | DAG kinase/lipases | PKC |
| Ca$^{2+}$ | Opened channels (not synthesized) | Pumps/exchangers/buffers | Calmodulin, PKC, troponin C |

> Caffeine and theophylline are nonselective **PDE inhibitors** — they prolong cAMP signals, which is why methylxanthines mimic mild adrenergic stimulation.

### Vision — A GPCR Pathway That Runs Backwards

- Rhodopsin (a GPCR with covalently bound retinal) absorbs a photon → activates the G protein **transducin (Gt)** → activates a **cGMP phosphodiesterase** → cGMP **falls** → cGMP-gated Na$^+$/Ca$^{2+}$ channels **close** → the photoreceptor **hyperpolarizes** and releases *less* glutamate
- Light = channel closing: the rare pathway where the stimulus lowers a second messenger; amplification is enormous (1 photon → hundreds of thousands of cGMP hydrolyzed)`
    },
    {
      id: 'sig2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing a Glucagon Signal

**Problem 1.** Glucagon makes hepatocytes break down glycogen. It is given to three batches of cells: one with caffeine, one with an adenylyl cyclase inhibitor, and one expressing a PKA whose regulatory subunits cannot bind cAMP.

- **(a)** Which two glycogen enzymes does the kinase regulate, in which directions, and why does that avoid a futile cycle?
- **(b)** How does caffeine change the response to glucagon?
- **(c)** In the cyclase-inhibited batch, does the G protein still bind GTP, and is glycogen broken down?
- **(d)** In the PKA-mutant batch, what happens to cAMP and to glycogen breakdown?

**(a) One kinase, two switches.** PKA activates glycogen phosphorylase kinase, switching glycogen breakdown on, and inactivates glycogen synthase, switching synthesis off. Because one kinase flips both switches in the same metabolic direction, the cell never builds and breaks glycogen at once.

**(b) Caffeine.** The response is larger and longer. Caffeine is a nonselective PDE inhibitor, so the cAMP that adenylyl cyclase makes is hydrolyzed to AMP more slowly and PKA stays active longer.

**(c) Cyclase blocked.** The glucagon receptor is coupled to Gs, and G-alpha-s still exchanges GDP for GTP and leaves beta-gamma, because those steps lie upstream of the block. But no cAMP is made, PKA stays inactive and glycogen is not broken down.

**(d) PKA mutant.** cAMP rises normally, since every step through adenylyl cyclase works. But cAMP cannot free PKA's catalytic subunits, so PKA stays off and glycogen is not broken down: a high messenger with no response places the lesion downstream of cAMP — here, at PKA.`
    },
    {
      id: 'sig2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Second Messengers** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell is treated with a drug that blocks the IP$_3$ receptor on the ER. Stimulation of a Gq-coupled receptor in these cells will still produce:`,
            options: [`A normal cytosolic Ca$^{2+}$ spike released from the ER`, `Extra cAMP, since IP$_3$ is rerouted to adenylyl cyclase`, `DAG in the plasma membrane, produced upstream of the block`, `Nothing at all, since Gq signaling starts with IP$_3$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `PLC generates IP$_3$ and DAG in one cleavage; blocking the IP$_3$ receptor only prevents the downstream ER Ca$^{2+}$ release. DAG production is untouched (though PKC activation will be weakened, since PKC needs Ca$^{2+}$ as a coactivator). Mapping where in a cascade an inhibitor acts — and what remains intact upstream and in parallel — is the core MCAT signaling skill.`
          },
          {
            question: `In rod photoreceptors, light causes hyperpolarization rather than depolarization. The mechanistic reason is that photon absorption ultimately activates:`,
            options: [`An adenylyl cyclase raising cAMP in the outer segment`, `A PDE that lowers cGMP, closing open cation channels`, `A phosphatase that opens chloride channels directly`, `An inhibitor of the Na$^+$/K$^+$ ATPase in the rod`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `In darkness, high cGMP holds cation channels open (the "dark current") and the cell sits relatively depolarized. Light-activated rhodopsin → transducin → PDE drops cGMP, channels close, and the cell hyperpolarizes, reducing glutamate release. Signaling by removing a messenger is counterintuitive and therefore heavily tested.`
          }
        ]
      }
    },
    {
      id: 'sig2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **The G protein is a timer.** The receptor acts as a GEF, swapping GDP for GTP to turn G-alpha on; its own GTPase turns it off.
- **Three G-alpha families.** Gs raises cAMP; Gi lowers it and its beta-gamma opens K$^+$ channels; Gq activates PLC (IP$_3$ + DAG).
- **One kinase, one program.** PKA turns glycogen phosphorylase kinase on and glycogen synthase off, so no futile cycle runs.
- **Messengers rise and are cleared.** IP$_3$ releases ER Ca$^{2+}$ for calmodulin to decode; PDE inhibitors prolong cAMP and cGMP.

**Common traps**

- **GTP hydrolysis as the ON step.** Hydrolysis is the OFF step, so a GTPase-dead G-alpha stays active after the ligand is gone.
- **Every step amplifies.** Only catalytic tiers multiply the signal; stoichiometric (1:1) steps do not.
- **Light raising cGMP in rods.** Light activates a PDE, cGMP falls, cation channels close and the rod hyperpolarizes.
- **Ca$^{2+}$ as a synthesized messenger.** Ca$^{2+}$ enters the cytosol through opened channels; pumps and exchangers then clear it.

<!-- yield:low -->
**Low-yield extras**

- CaMKII (learning/memory, a Ca$^{2+}$-frequency decoder), calcineurin and its blockers cyclosporine/tacrolimus, oscillatory Ca$^{2+}$ coding, and synaptotagmin as the Ca$^{2+}$ sensor for vesicle fusion
<!-- /yield -->`
    }
  ]
};
