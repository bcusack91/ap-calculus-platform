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

The Brown & Goldstein LDL story is the canonical MCAT passage:

1. LDL particles bind **LDL receptors** clustered in **clathrin-coated pits**
2. The pit invaginates and pinches off (the GTPase **dynamin** severs the neck)
3. The clathrin coat is shed; the vesicle fuses with an **early endosome**
4. Endosomal acidification (V-type H$^+$ ATPase) releases LDL from its receptor
5. Receptors **recycle** to the surface; LDL is delivered to lysosomes, where cholesteryl esters are hydrolyzed to free cholesterol

**Familial hypercholesterolemia** mutations map beautifully onto this pathway:
- No receptor made → no binding, no uptake
- Receptor binds LDL but has a defective cytoplasmic tail → cannot cluster in coated pits → binding without internalization
- Either way: plasma LDL rises → early atherosclerosis

### SNAREs and Regulated Exocytosis

- **v-SNAREs** (on the vesicle, e.g., synaptobrevin) pair with **t-SNAREs** (on the target membrane, e.g., syntaxin, SNAP-25) to zipper membranes together
- In neurons, an action potential opens voltage-gated Ca$^{2+}$ channels; Ca$^{2+}$ binds **synaptotagmin**, triggering fusion within microseconds
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
            options: [`A mutant LDL receptor cytoplasmic tail that cannot localize to clathrin-coated pits`, `Absence of LDL receptors from the cell surface`, `A defective lysosomal acid lipase`, `Overactive receptor recycling`],
            correctAnswer: 0,
            explanation: `Normal surface binding rules out an absent or non-binding receptor. Binding without internalization localizes the lesion to the internalization step: the receptor's cytoplasmic tail must engage adaptor proteins (AP2) to cluster into clathrin-coated pits. This exact mutant class (JD mutation) was key evidence in Brown & Goldstein's Nobel-winning work — and is a recurring MCAT passage.`
          },
          {
            question: `A drug that inhibits the V-type H$^+$ ATPase of endosomes would most directly impair:`,
            options: [`Release of LDL from its receptor, since ligand-receptor dissociation requires endosomal acidification`, `Clathrin coat assembly at the plasma membrane`, `Dynamin-mediated vesicle scission`, `LDL binding at the cell surface`],
            correctAnswer: 0,
            explanation: `LDL-receptor affinity is pH-dependent: the acidic early endosome (~pH 6) triggers dissociation, letting receptors recycle while cargo proceeds to lysosomes. Blocking acidification traps ligand-receptor complexes together, halting both cargo delivery and receptor recycling. Coat assembly, scission, and surface binding are all upstream and pH-independent.`
          },
          {
            question: `Botulinum toxin causes flaccid paralysis by:`,
            options: [`Proteolytically cleaving SNARE proteins, preventing synaptic vesicle fusion and acetylcholine release`, `Blocking acetylcholine receptors on muscle`, `Inhibiting acetylcholinesterase in the synaptic cleft`, `Depolarizing the motor neuron permanently`],
            correctAnswer: 0,
            explanation: `Botulinum toxin is a zinc protease that cleaves SNAREs (synaptobrevin, SNAP-25, or syntaxin depending on serotype). Without intact SNARE complexes, vesicles cannot fuse and ACh is never released — the synapse is silenced presynaptically. Receptor blockers (curare) and esterase inhibitors act postsynaptically or in the cleft; distinguishing pre- vs. postsynaptic mechanisms is a classic exam move.`
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
| Incubate cells at 4°C | Blocks all vesicular transport and membrane fluidity-dependent processes; surface binding still occurs |
| ATP depletion (2-deoxyglucose + oligomycin) | Kills primary/secondary active transport and endocytosis; passive diffusion unaffected |
| Ouabain | Inhibits Na$^+$/K$^+$ ATPase → collapses all Na$^+$-coupled transport over time |
| Hypertonic sucrose / K$^+$ depletion | Disrupts clathrin lattice → blocks receptor-mediated endocytosis |
| Nonhydrolyzable GTP analog | Freezes dynamin and other GTPases → vesicles stall as coated pits |
| Structural analog of substrate | Competes at carriers/symporters → carrier-mediated flux drops |

### Integrating the Whole Topic: One Epithelial Cell

A single intestinal enterocyte uses nearly every transport mode at once:
- **Apical**: SGLT1 (secondary active), amino acid symporters, facilitated fructose entry (GLUT5)
- **Basolateral**: Na$^+$/K$^+$ ATPase (primary active), GLUT2 (facilitated)
- **Both**: aquaporins for transcellular water flow; tight junctions force transport through (not around) the cell
- Lipids: absorbed by simple diffusion/micelle delivery, re-esterified, packaged into chylomicrons, and **exocytosed** into lymph

> When a passage gives you a polarized epithelium, immediately sketch which transporter sits on which membrane — the answer usually falls out of the geometry.`
    },
    {
      id: 'mt4-quiz2',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cells are incubated with transferrin (which enters by receptor-mediated endocytosis) at 4°C, then washed and warmed to 37°C. Which prediction is correct?`,
            options: [`At 4°C transferrin binds surface receptors but is not internalized; internalization begins upon warming`, `At 4°C transferrin is internalized but not bound`, `Transferrin uptake is identical at both temperatures`, `Warming releases all bound transferrin into the medium`],
            correctAnswer: 0,
            explanation: `Receptor binding is a biochemical association that persists in the cold, but vesicle budding requires membrane fluidity and active machinery, both of which stop at 4°C. This bind-in-the-cold, chase-at-37°C protocol is the standard way to synchronize endocytosis — recognize it instantly in passages.`
          },
          {
            question: `A secreted hormone is synthesized with its receptor-binding domain facing the ER lumen. After exocytosis, this domain will be:`,
            options: [`Extracellular — the vesicle lumen is topologically equivalent to the cell exterior`, `Cytosolic — fusion inverts the vesicle`, `Embedded within the bilayer`, `Degraded, because luminal domains cannot be secreted`],
            correctAnswer: 0,
            explanation: `Topology is conserved through the secretory pathway: ER lumen → Golgi lumen → vesicle lumen → extracellular space. A luminal domain never touches the cytosol and emerges outside the cell after fusion. The same logic explains why the extracellular domain of a membrane receptor starts as an ER-luminal domain.`
          }
        ]
      }
    },
    {
      id: 'mt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Bulk transport is always active: phagocytosis (particles), pinocytosis (fluid), receptor-mediated endocytosis (specific, clathrin), exocytosis (constitutive or Ca$^{2+}$-regulated)
- LDL pathway: coated pit → dynamin scission → endosome acidification releases cargo → receptor recycles, cargo to lysosome; FH mutations can break binding OR internalization separately
- SNARE pairing (v- + t-SNARE) drives fusion; synaptotagmin is the Ca$^{2+}$ sensor; botulinum/tetanus toxins cleave SNAREs
- Vesicle lumen ≡ extracellular space: topology never flips through the secretory/endocytic pathways
- Experiment signatures: 4°C blocks internalization but not binding; ATP depletion kills active + vesicular transport; hypertonic sucrose disrupts clathrin
- Polarized epithelia: apical vs. basolateral transporter placement (SGLT1/GLUT2/Na$^+$-K$^+$ pump) explains directional absorption
- Endocytosis and exocytosis are balanced to conserve membrane surface area`
    }
  ]
};
