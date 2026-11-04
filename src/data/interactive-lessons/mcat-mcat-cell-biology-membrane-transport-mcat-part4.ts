export const mcatCellMembraneTransportPart4Data = {
  topicSlug: 'mcat-cell-biology-membrane-transport-mcat',
  sections: [
    {
      id: 'mt4-intro',
      type: 'text' as const,
      content: `# Membrane Transport for the MCAT

**Part 4 of 4 — Vesicular Transport & MCAT Integration**

### Bulk Transport — Moving Cargo Too Big for Proteins

Vesicular (bulk) transport is always **active** (requires ATP/GTP) and moves material without it ever crossing a membrane directly.

| Process | Direction | Description |
|---------|-----------|-------------|
| **Phagocytosis** | In | "Cell eating" — pseudopodia engulf large particles (bacteria, debris); mainly macrophages/neutrophils |
| **Pinocytosis** | In | "Cell drinking" — nonspecific uptake of extracellular fluid |
| **Receptor-mediated endocytosis** | In | Specific: ligand binds receptor → clathrin-coated pit → coated vesicle |
| **Exocytosis** | Out | Vesicle fuses with plasma membrane; constitutive (continuous) or regulated (Ca$^{2+}$-triggered, e.g., neurotransmitter release) |

### Receptor-Mediated Endocytosis: The LDL Paradigm

The LDL receptor story is the canonical MCAT passage:

1. LDL particles bind **LDL receptors** clustered in **clathrin-coated pits**
2. The pit invaginates and pinches off (the GTPase **dynamin** severs the neck)
3. The clathrin coat is shed; the vesicle fuses with an **early endosome**
4. Endosomal acidification (V-type H$^+$ ATPase) releases LDL from its receptor
5. Receptors **recycle** to the surface; LDL is delivered to lysosomes, where cholesteryl esters are hydrolyzed to free cholesterol

<!-- yield:low -->
(The pathway was worked out by Michael Brown and Joseph Goldstein, Nobel Prize 1985.)
<!-- /yield -->

**Familial hypercholesterolemia** mutations map beautifully onto this pathway:
- No receptor made → no binding, no uptake
- Receptor binds LDL but has a defective cytoplasmic tail → cannot cluster in coated pits → binding without internalization
- Either way: plasma LDL rises → early atherosclerosis

### SNAREs and Regulated Exocytosis

- **v-SNAREs** (on the vesicle) pair with **t-SNAREs** (on the target membrane) to zipper membranes together
- In neurons, an action potential opens voltage-gated Ca$^{2+}$ channels; Ca$^{2+}$ binds a sensor protein on the vesicle, triggering fusion within a millisecond

<!-- yield:low -->
- Named SNAREs: synaptobrevin (v-SNARE); syntaxin and SNAP-25 (t-SNAREs). The Ca$^{2+}$ sensor is **synaptotagmin**.
<!-- /yield -->

- **Botulinum and tetanus toxins are proteases that cleave SNAREs** → block neurotransmitter release (flaccid paralysis for botulinum at the neuromuscular junction; spastic paralysis for tetanus, which blocks inhibitory interneurons)

### Membrane Accounting

- Endocytosis removes plasma membrane; exocytosis adds it — cells balance the two to keep surface area constant
- The **lumen of a vesicle is topologically equivalent to the outside of the cell**: a protein's extracellular domain faces the vesicle lumen after endocytosis, and a secreted protein never touches the cytosol`
    },
    {
      id: 'mt4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Vesicular Transport** 🎯`,
      exercise: {
        questions: [
          {
            question: `Fibroblasts from a familial hypercholesterolemia patient bind normal amounts of fluorescent LDL at the cell surface, yet internalize almost none of it. The most likely defect is:`,
            options: [`Complete absence of LDL receptors from the cell surface`, `A defective acid lipase within the lysosome lumen`, `Receptor recycling running far faster than normal`, `An LDL receptor tail that misses clathrin pits`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Normal surface binding rules out an absent or non-binding receptor. Binding without internalization localizes the lesion to the internalization step: the receptor's cytoplasmic tail must engage adaptor proteins to cluster into clathrin-coated pits. This internalization-defective mutant class was key evidence for how receptor-mediated endocytosis works — and is a recurring MCAT passage.`
          },
          {
            question: `A drug that inhibits the V-type H$^+$ ATPase of endosomes would most directly impair:`,
            options: [`Assembly of the clathrin coat at the cell surface`, `Release of LDL from its receptor after uptake`, `Dynamin-mediated scission of the budding vesicle`, `Binding of LDL at the cell surface`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `LDL-receptor affinity is pH-dependent: the acidic early endosome (~pH 6) triggers dissociation, letting receptors recycle while cargo proceeds to lysosomes. Blocking acidification traps ligand-receptor complexes together, halting both cargo delivery and receptor recycling. Coat assembly, scission, and surface binding are all upstream and pH-independent.`
          },
          {
            question: `Botulinum toxin causes flaccid paralysis by:`,
            options: [`Inhibiting acetylcholinesterase in the synaptic cleft`, `Blocking acetylcholine receptors on muscle`, `Cleaving SNARE proteins so vesicles cannot fuse`, `Permanently depolarizing the motor neuron`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Botulinum toxin is a zinc protease that cleaves SNARE proteins (which one depends on serotype). Without intact SNARE complexes, vesicles cannot fuse and ACh is never released — the synapse is silenced presynaptically. Receptor blockers (curare) and esterase inhibitors act postsynaptically or in the cleft; distinguishing pre- vs. postsynaptic mechanisms is a classic exam move.`
          }
        ]
      }
    },
    {
      id: 'mt4-deep',
      type: 'text' as const,
      content: `### MCAT Passage Toolkit — Transport Experiments

| Experimental manipulation | What it tests / expected result |
|---------------------------|--------------------------------|
| Incubate cells at 4°C | Stops vesicle budding and other fluidity-dependent steps; surface binding still occurs |
| ATP depletion (2-deoxyglucose + oligomycin) | Kills primary/secondary active transport and endocytosis; passive diffusion unaffected |
| Ouabain | Inhibits Na$^+$/K$^+$ ATPase → collapses all Na$^+$-coupled transport over time |
| Nonhydrolyzable GTP analog | Freezes dynamin and other GTPases → vesicles stall as coated pits |
| Structural analog of substrate | Competes at carriers/symporters → carrier-mediated flux drops |

<!-- yield:low -->
- Hypertonic sucrose or K$^+$ depletion disrupts the clathrin lattice, blocking receptor-mediated endocytosis specifically
<!-- /yield -->

### Integrating the Whole Topic: One Epithelial Cell

A single intestinal enterocyte uses nearly every transport mode at once:
- **Apical**: SGLT1 (secondary active), amino acid symporters, facilitated fructose entry
- **Basolateral**: Na$^+$/K$^+$ ATPase (primary active), GLUT2 (facilitated)
- **Both**: aquaporins for transcellular water flow; tight junctions force transport through (not around) the cell
- Lipids: absorbed by simple diffusion/micelle delivery, re-esterified, packaged into chylomicrons, and **exocytosed** into lymph

<!-- yield:low -->
- The apical fructose carrier is GLUT5
<!-- /yield -->

> When a passage gives you a polarized epithelium, immediately sketch which transporter sits on which membrane — the answer usually falls out of the geometry.`
    },
    {
      id: 'mt4-worked',
      type: 'text' as const,
      content: `### Worked Example — Following LDL Through the Cell

**Problem.** Normal fibroblasts take up fluorescent LDL at 37°C. Parallel dishes are either depleted of ATP or treated with a drug that blocks the endosomal V-type H$^+$ ATPase.

- **(a)** Where does the LDL go in untreated cells?
- **(b)** Where does the LDL end up in ATP-depleted cells?
- **(c)** Where does the LDL stall when the V-type H$^+$ ATPase is blocked?
- **(d)** If that pump stays blocked for hours, what happens to LDL binding at the cell surface?

**(a) To the lysosome.** LDL binds receptors in clathrin-coated pits, dynamin pinches the pits off, the vesicles fuse with early endosomes, acidification releases LDL from its receptor, the receptors recycle, and the LDL reaches lysosomes, where cholesteryl esters become free cholesterol.

**(b) Bound at the surface.** Binding is a simple association, but vesicular transport is always active, so without ATP the LDL stays on its receptors at the surface and is not internalized.

**(c) In early endosomes, still on its receptor.** The LDL is internalized, but without acidification it never lets go of its receptor, so it is not delivered to lysosomes.

**(d) Binding falls.** Receptors still holding their LDL cannot recycle to the surface. As internalization continues, the number of surface receptors drops, so less new LDL can bind.`
    },
    {
      id: 'mt4-quiz2',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cells are incubated with transferrin (which enters by receptor-mediated endocytosis) at 4°C, then washed and warmed to 37°C. Which prediction is correct?`,
            options: [`Binding occurs at 4°C, internalization only on warming`, `Transferrin is internalized at 4°C but never bound`, `Uptake is identical at both of these temperatures`, `Warming releases all bound transferrin to the medium`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Receptor binding is a biochemical association that persists in the cold, but vesicle budding requires membrane fluidity and active machinery, both of which stop at 4°C. This bind-in-the-cold, chase-at-37°C protocol is the standard way to synchronize endocytosis — recognize it instantly in passages.`
          },
          {
            question: `A secreted hormone is synthesized with its receptor-binding domain facing the ER lumen. After exocytosis, this domain will be:`,
            options: [`Cytosolic, because fusion inverts the vesicle`, `Embedded within the lipid bilayer itself`, `Degraded, since luminal domains cannot exit`, `Extracellular, facing out from the cell`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Topology is conserved through the secretory pathway: ER lumen → Golgi lumen → vesicle lumen → extracellular space. A luminal domain never touches the cytosol and emerges outside the cell after fusion. The same logic explains why the extracellular domain of a membrane receptor starts as an ER-luminal domain.`
          }
        ]
      }
    },
    {
      id: 'mt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Bulk transport is active.** Phagocytosis, pinocytosis, receptor-mediated endocytosis and exocytosis all need ATP or GTP.
- **The LDL pathway.** Coated pit, dynamin scission, acidified endosome frees LDL; receptors recycle, LDL goes to lysosomes.
- **SNAREs drive fusion.** v- and t-SNAREs zipper membranes, Ca$^{2+}$ triggers regulated release, and botulinum and tetanus cleave SNAREs.
- **Epithelial geometry.** Apical SGLT1 and basolateral GLUT2 plus the Na$^+$/K$^+$ pump make absorption one-way.

**Common traps**

- **Fusion flips topology.** The vesicle lumen equals the outside: an ER-luminal domain ends up extracellular after exocytosis.
- **Binding means uptake.** FH receptors with a defective tail bind LDL but cannot cluster in coated pits to internalize it.
- **Cold blocks binding.** At 4°C ligands still bind their receptors; only vesicle budding and internalization stop.
- **Botulinum blocks receptors.** It acts presynaptically, cleaving SNAREs so acetylcholine is never released.

<!-- yield:low -->
**Low-yield extras**

- Brown and Goldstein worked out the LDL pathway; named SNAREs are synaptobrevin (v), syntaxin and SNAP-25 (t); synaptotagmin is the Ca$^{2+}$ sensor; hypertonic sucrose or K$^+$ depletion disrupts clathrin; GLUT5 is the apical fructose carrier
<!-- /yield -->`
    }
  ]
};
