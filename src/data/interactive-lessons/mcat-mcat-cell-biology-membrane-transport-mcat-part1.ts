export const mcatCellMembraneTransportPart1Data = {
  topicSlug: 'mcat-cell-biology-membrane-transport-mcat',
  sections: [
    {
      id: 'mt1-intro',
      type: 'text' as const,
      content: `# Membrane Transport for the MCAT

**Part 1 of 4 — Membrane Architecture & Permeability**

### The Fluid Mosaic Model

The plasma membrane is a **phospholipid bilayer** with embedded proteins — a two-dimensional fluid in which lipids and many proteins diffuse laterally.

| Component | Role | Key Facts |
|-----------|------|-----------|
| Phospholipids | Structural bilayer | Amphipathic: polar heads out, fatty acid tails in |
| Cholesterol | Fluidity buffer | Stiffens at body temperature; keeps the cold membrane fluid |
| Integral proteins | Transport, receptors | Span the bilayer via hydrophobic alpha-helices |
| Peripheral proteins | Signaling, support | Sit on the surface; removable without disrupting it |
| Glycolipids/glycoproteins | Cell recognition | Sugars face the extracellular side only |

- **Lateral diffusion** (within one leaflet) is fast and common
- **Transverse diffusion ("flip-flop")** between leaflets is rare and slow — it requires a polar head to cross the hydrophobic core; enzymes called **flippases** catalyze it
- Membrane asymmetry matters: phosphatidylserine (PS) is normally on the **inner** leaflet; PS appearing on the outer leaflet is an "eat me" signal in apoptosis

### What Crosses a Pure Lipid Bilayer?

Permeability is governed by **size** and **polarity/charge**:

| Class | Examples | Crosses bilayer without a protein? |
|-------|----------|-----------------------------------|
| Small nonpolar | O$_2$, CO$_2$, N$_2$, steroid hormones | Yes — readily |
| Small uncharged polar | H$_2$O, urea, ethanol | Slowly (water much faster through aquaporins) |
| Large polar | Glucose, amino acids | No — needs a transporter |
| Ions | Na$^+$, K$^+$, Ca$^{2+}$, Cl$^-$, H$^+$ | No — needs a channel or pump |

> Rule of thumb: **charge is the strictest barrier.** Even a proton — the smallest ion — cannot cross the hydrophobic core unaided.

### The Partition Coefficient

A molecule's oil/water **partition coefficient** ($K$) predicts how readily it dissolves into the bilayer:

$$P \\propto \\frac{K \\cdot D}{\\Delta x}$$

where $P$ is permeability, $D$ is the diffusion coefficient within the membrane, and $\\Delta x$ is membrane thickness. High $K$ (lipophilic) → high permeability. This is why steroid hormones (lipophilic) enter cells directly and bind **intracellular receptors**, while peptide hormones (hydrophilic) must bind **cell-surface receptors**.

### Membrane Fluidity — What Changes It?

- **Unsaturated fatty acids** (cis double bonds → kinks) → more fluid
- **Shorter tails** → more fluid
- **Higher temperature** → more fluid
- **Cholesterol** → bidirectional buffer (moderates fluidity in both directions)`
    },
    {
      id: 'mt1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Membrane Structure & Permeability** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher measures the rate at which four molecules cross a pure phospholipid bilayer (no proteins). Which molecule crosses fastest?`,
            options: [`Glucose — polar and hydrogen-bonding`, `Na$^+$ — a small but charged ion`, `O$_2$ — a small nonpolar gas`, `A tripeptide — polar and bulky`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Permeability across a protein-free bilayer tracks size and polarity: small nonpolar gases (O$_2$, CO$_2$) cross fastest. Glucose is polar and too large; ions are charged and essentially excluded regardless of size (their hydration shells and charge make the hydrophobic core an enormous energy barrier); a tripeptide is both large and polar.`
          },
          {
            question: `Bacteria grown at low temperature increase the proportion of unsaturated fatty acids in their membrane phospholipids. The most likely purpose is to:`,
            options: [`Maintain fluidity, since kinks block tight packing`, `Increase membrane thickness for better insulation`, `Reduce the membrane's permeability to water`, `Strengthen the peptidoglycan of the cell wall`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Cold temperatures rigidify membranes by allowing tails to pack tightly. Cis double bonds introduce kinks that disrupt packing, restoring fluidity — a classic homeoviscous adaptation. This is a favorite MCAT experimental setup: expect fluidity logic (unsaturation, tail length, cholesterol, temperature).`
          },
          {
            question: `Cortisol (a steroid) and insulin (a peptide) both regulate metabolism, but only cortisol binds a receptor inside the cytosol. This difference exists because:`,
            options: [`Insulin is destroyed by cytosolic proteases first`, `Cortisol is pumped inward by ABC transporters actively`, `Steroid receptors simply have higher affinity`, `Cortisol is lipophilic and crosses the bilayer`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Steroids have high oil/water partition coefficients, so they cross the bilayer and bind intracellular (cytosolic or nuclear) receptors that act as transcription factors. Hydrophilic peptide hormones cannot cross and must signal through cell-surface receptors and second messengers. This structural logic — not receptor affinity — determines receptor location.`
          }
        ]
      }
    },
    {
      id: 'mt1-deep',
      type: 'text' as const,
      content: `### Experimental Evidence for Membrane Fluidity — FRAP

**Fluorescence Recovery After Photobleaching (FRAP)** is the classic assay MCAT passages use:

1. Label membrane proteins or lipids with a fluorescent tag
2. Photobleach a small spot with an intense laser (destroys fluorescence there)
3. Watch the spot: if the membrane is fluid, unbleached molecules diffuse in and fluorescence **recovers**

- Fast, complete recovery → freely diffusing (mobile) molecules
- Slow or incomplete recovery → molecules anchored to the cytoskeleton or confined to domains

- Fusing a mouse cell with a human cell, each with differently labeled surface proteins, showed the proteins intermix within ~40 minutes — direct evidence of lateral mobility

<!-- yield:low -->
- This is the Frye-Edidin experiment
<!-- /yield -->

### Lipid Rafts and Anchored Proteins

- **Lipid rafts**: cholesterol- and sphingolipid-rich microdomains that are thicker and more ordered; they concentrate signaling proteins
- Some proteins are held at the membrane by a covalently attached lipid anchor rather than spanning the bilayer

<!-- yield:low -->
- Lipid-anchor types: GPI anchors hold proteins on the outer leaflet; prenylation and palmitoylation hold them on the inner leaflet
<!-- /yield -->

- Cytoskeletal tethering restricts protein diffusion — a common explanation for incomplete FRAP recovery

<!-- yield:low -->
- The textbook tether is the spectrin-ankyrin network under the red blood cell membrane
<!-- /yield -->

### Why Membrane Asymmetry Is Maintained

- New phospholipids are synthesized on the **cytosolic leaflet of the ER**
- Flippases (ATP-dependent) move specific lipids (like PS) to the cytosolic leaflet
- Loss of asymmetry (PS exposed outside) → recognized by macrophages → phagocytosis of the apoptotic cell

<!-- yield:low -->
- During apoptosis, scramblases randomize the lipids between leaflets, which is how PS reaches the outer surface
<!-- /yield -->`
    },
    {
      id: 'mt1-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a FRAP Experiment

**Problem.** A membrane protein is tagged with a fluorophore and a small spot is bleached with a laser. At 37°C, fluorescence in the spot recovers to 40% of its starting level and stays there. The experiment is then repeated with extra cholesterol in the membrane.

- **(a)** Why does any fluorescence return to the bleached spot?
- **(b)** What does the 60% that never returns tell you?
- **(c)** At 10°C, how does the added cholesterol change the rate of recovery?
- **(d)** At 37°C, how does the added cholesterol change the rate of recovery?

**(a) Lateral diffusion.** The laser destroys the fluorescence in the spot, so any returning signal must come from unbleached tagged proteins diffusing in from the surrounding membrane. Recovery is direct evidence that the membrane is fluid.

**(b) An immobile fraction.** Only 40% of the protein is mobile. The other 60% cannot diffuse back in, most likely because it is anchored to the cytoskeleton or confined to a domain.

**(c) Faster in the cold.** At low temperature cholesterol prevents the tails from packing tightly, so the membrane stays more fluid than it would without it. The mobile protein diffuses back faster.

**(d) Slower at body temperature.** At 37°C cholesterol stiffens the membrane, so lateral diffusion slows and the mobile protein takes longer to refill the spot. Cholesterol buffers fluidity in both directions.`
    },
    {
      id: 'mt1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Fluidity Experiments** 🎯`,
      exercise: {
        questions: [
          {
            question: `In FRAP experiments, protein A recovers to 95% of its starting fluorescence and protein B to only 40%. After a drug that disassembles the cortical cytoskeleton is added, B's plateau rises but A's does not change. The best interpretation is:`,
            options: [`Protein A, not B, is anchored to the cytoskeleton`, `Much of protein B was tethered to the cytoskeleton`, `The drug made the whole bilayer far more fluid for both`, `The drug regenerated bleached fluorophores in B`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `B's 40% plateau means 60% of B was immobile. Disassembling the cytoskeleton freed that tethered fraction, so B's plateau rose; A was already almost fully mobile, so it had nothing to release. If A were the anchored protein, the drug would have raised A's plateau instead. A general rise in bilayer fluidity would speed recovery of both proteins rather than lift only B's plateau, and photobleaching is irreversible, so recovery never comes from regenerated fluorophore.`
          },
          {
            question: `A cell line lacking flippase activity for phosphatidylserine would most likely:`,
            options: [`Show far faster spontaneous flip-flop of lipids between leaflets`, `Lose membrane fluidity entirely at body temperature`, `Display PS on its outer leaflet and be eaten by macrophages`, `Be unable to synthesize phospholipids at all`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Flippases actively keep PS on the inner (cytosolic) leaflet. Without them, PS accumulates on the outer leaflet — the "eat me" signal normally displayed by apoptotic cells — so macrophages would engulf otherwise healthy cells. Flippase loss does not abolish fluidity or synthesis, and spontaneous flip-flop remains rare, not increased.`
          }
        ]
      }
    },
    {
      id: 'mt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Fluid mosaic membrane.** Lipids and many proteins diffuse laterally fast; flip-flop is rare; carbohydrates face outside only.
- **Permeability hierarchy.** Small nonpolar > small uncharged polar > large polar > ions; charge is the strictest barrier.
- **Fluidity and FRAP.** Unsaturation, shorter tails and heat raise fluidity; FRAP recovery shows lateral mobility.
- **Asymmetry is maintained.** Flippases keep PS on the inner leaflet; PS on the outer leaflet is an apoptotic "eat me" signal.

**Common traps**

- **Small means permeable.** Charge beats size: even H$^+$, the smallest ion, cannot cross the hydrophobic core unaided.
- **Receptor location is arbitrary.** Steroids reach intracellular receptors because a high partition coefficient lets them cross; peptides cannot.
- **Cholesterol only stiffens.** It stiffens at body temperature but prevents tight packing in the cold, buffering both ways.
- **Partial recovery means damage.** Bleaching does not harm the membrane; a plateau below full recovery marks an immobile fraction.

<!-- yield:low -->
**Low-yield extras**

- The mouse-human cell fusion is the Frye-Edidin experiment; lipid anchors come as GPI (outer leaflet) or prenyl/palmitoyl groups (inner leaflet); spectrin-ankyrin is the red-cell tether; scramblases randomize the leaflets during apoptosis
<!-- /yield -->`
    }
  ]
};
