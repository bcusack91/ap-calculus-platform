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
| Phospholipids | Structural bilayer | Amphipathic: polar head (out), fatty acid tails (in) |
| Cholesterol | Fluidity buffer | At body temp: stiffens membrane; at low temp: prevents tight packing (keeps it fluid) |
| Integral proteins | Transport, receptors | Span the bilayer; hydrophobic transmembrane domains (often alpha-helices) |
| Peripheral proteins | Signaling, support | Attached to surface or to integral proteins; removable without disrupting bilayer |
| Glycolipids/glycoproteins | Cell recognition | Carbohydrates face the extracellular side only |

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
            options: [`O$_2$ — small and nonpolar`, `Glucose — small and metabolically important`, `Na$^+$ — the smallest hydrated ion`, `A tripeptide — flexible backbone`],
            correctAnswer: 0,
            explanation: `Permeability across a protein-free bilayer tracks size and polarity: small nonpolar gases (O$_2$, CO$_2$) cross fastest. Glucose is polar and too large; ions are charged and essentially excluded regardless of size (their hydration shells and charge make the hydrophobic core an enormous energy barrier); a tripeptide is both large and polar.`
          },
          {
            question: `Bacteria grown at low temperature increase the proportion of unsaturated fatty acids in their membrane phospholipids. The most likely purpose is to:`,
            options: [`Maintain membrane fluidity — cis double-bond kinks prevent tight lipid packing in the cold`, `Increase membrane thickness for insulation`, `Reduce permeability to water`, `Strengthen the peptidoglycan cell wall`],
            correctAnswer: 0,
            explanation: `Cold temperatures rigidify membranes by allowing tails to pack tightly. Cis double bonds introduce kinks that disrupt packing, restoring fluidity — a classic homeoviscous adaptation. This is a favorite MCAT experimental setup: expect fluidity logic (unsaturation, tail length, cholesterol, temperature).`
          },
          {
            question: `Cortisol (a steroid) and insulin (a peptide) both regulate metabolism, but only cortisol binds a receptor inside the cytosol. This difference exists because:`,
            options: [`Cortisol is lipophilic and diffuses through the bilayer; insulin is hydrophilic and cannot`, `Insulin is degraded by cytosolic proteases before reaching a receptor`, `Cortisol is actively pumped into cells by ABC transporters`, `Steroid receptors have higher affinity than surface receptors`],
            correctAnswer: 0,
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
- The **Frye-Edidin experiment** (fusing a mouse cell with a human cell and watching surface proteins intermix within ~40 minutes) was the original demonstration of lateral mobility

### Lipid Rafts and Anchored Proteins

- **Lipid rafts**: cholesterol- and sphingolipid-rich microdomains that are thicker and more ordered; they concentrate signaling proteins
- Some proteins are lipid-anchored (GPI anchors on the outer leaflet; prenylation/palmitoylation on the inner leaflet) rather than transmembrane
- Cytoskeletal tethering (e.g., spectrin-ankyrin in red blood cells) restricts protein diffusion — a common explanation for incomplete FRAP recovery

### Why Membrane Asymmetry Is Maintained

- New phospholipids are synthesized on the **cytosolic leaflet of the ER**
- Flippases (ATP-dependent) move specific lipids (like PS) to the cytosolic leaflet; scramblases randomize during apoptosis
- Loss of asymmetry (PS exposed outside) → recognized by macrophages → phagocytosis of the apoptotic cell`
    },
    {
      id: 'mt1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Fluidity Experiments** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a FRAP experiment, a membrane protein shows only 40% fluorescence recovery even after long times. The best interpretation is:`,
            options: [`A substantial fraction of the protein population is immobilized, likely by cytoskeletal anchoring`, `The laser destroyed the membrane in the bleached region`, `The protein has been internalized by endocytosis`, `The fluorophore spontaneously regenerated`],
            correctAnswer: 0,
            explanation: `The mobile fraction (here 40%) diffuses back into the bleached spot; the immobile fraction (60%) cannot, most often because it is tethered to the cytoskeleton or trapped in a domain. Photobleaching is irreversible, so recovery must come from lateral diffusion of unbleached neighbors — the whole basis of the assay.`
          },
          {
            question: `A cell line lacking flippase activity for phosphatidylserine would most likely:`,
            options: [`Display PS on its outer leaflet and be engulfed by macrophages despite being healthy`, `Lose all membrane fluidity`, `Be unable to synthesize phospholipids`, `Have increased transverse (flip-flop) lipid movement`],
            correctAnswer: 0,
            explanation: `Flippases actively keep PS on the inner (cytosolic) leaflet. Without them, PS accumulates on the outer leaflet — the "eat me" signal normally displayed by apoptotic cells — so macrophages would engulf otherwise healthy cells. Flippase loss does not abolish fluidity or synthesis, and spontaneous flip-flop remains rare, not increased.`
          }
        ]
      }
    },
    {
      id: 'mt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Fluid mosaic model: amphipathic phospholipid bilayer + mobile proteins; lateral diffusion fast, flip-flop rare (flippase-catalyzed)
- Permeability hierarchy: small nonpolar >> small uncharged polar >> large polar >> ions (charge is the strictest barrier)
- High partition coefficient (lipophilic) → crosses bilayer → intracellular receptors (steroids); hydrophilic ligands need surface receptors
- Fluidity increases with unsaturation, shorter tails, higher temperature; cholesterol buffers fluidity in both directions
- FRAP: fluorescence recovery = lateral mobility; incomplete recovery = immobile (anchored) fraction
- Membrane asymmetry is active and meaningful: PS on the outer leaflet is an apoptotic "eat me" signal
- Carbohydrates (glycolipids/glycoproteins) always face the extracellular side`
    }
  ]
};
