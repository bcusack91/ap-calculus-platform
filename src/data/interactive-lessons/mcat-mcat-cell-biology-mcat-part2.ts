export const mcatCellBioPart2Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb2-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 2 of 7 — Cell Membrane & Transport**

### Membrane Structure (Fluid Mosaic Model)

- **Phospholipid bilayer**: Hydrophilic heads out, hydrophobic tails in
- **Cholesterol**: Regulates fluidity — prevents crystallization at low temp, prevents excess fluidity at high temp (acts as a "fluidity buffer")
- **Integral proteins**: Span the membrane (channels, receptors, transporters)
- **Peripheral proteins**: Loosely attached to surface (often via electrostatic interactions)
- **Glycoproteins/Glycolipids**: Carbohydrate chains on extracellular face only — cell recognition, immune identity

### Transport Mechanisms

| Type | Energy? | Direction | Examples |
|------|---------|-----------|---------|
| Simple diffusion | No | High → Low | O$_2$, CO$_2$, steroid hormones, small nonpolar |
| Facilitated diffusion | No | High → Low | Glucose (GLUT transporters), ions (channels) |
| Primary active transport | Yes (ATP) | Low → High | Na$^+$/K$^+$ ATPase, Ca$^{2+}$ ATPase |
| Secondary active transport | Yes (gradient) | Low → High | SGLT (Na$^+$-glucose symport), Na$^+$/H$^+$ antiport |
| Endocytosis | Yes | Into cell | Phagocytosis, pinocytosis, receptor-mediated |
| Exocytosis | Yes | Out of cell | Neurotransmitter release, hormone secretion |

### Na$^+$/K$^+$ ATPase (ULTRA HIGH YIELD)

Per ATP hydrolyzed: **3 Na$^+$ out, 2 K$^+$ in**
- Creates electrochemical gradient for both ions
- Maintains resting membrane potential (~$-70$ mV)
- **Electrogenic**: net positive charge moved out (3+ out vs 2+ in)
- Powers secondary active transport (Na$^+$ gradient drives glucose uptake in intestine)

### Osmosis and Tonicity

| Solution | Solute vs. Cell | Water Movement | Cell Response |
|----------|----------------|----------------|---------------|
| Hypotonic | Less solute outside | Water enters cell | Swells (lysis in animal cells) |
| Isotonic | Equal solute | No net movement | Normal shape |
| Hypertonic | More solute outside | Water leaves cell | Shrinks (crenation in RBCs) |

**Key distinction**: Osmolarity = total solute concentration. Tonicity = the effect on cell volume (only non-penetrating solutes matter). Urea is an osmole but freely crosses membranes, so it does not affect tonicity.`
    },
    {
      id: 'cb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Membrane Transport** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell is placed in a hypertonic solution. The cell will:`,
            options: [`Shrink (crenation) — water moves out by osmosis to the higher solute concentration`, `Swell and potentially lyse`, `Remain unchanged because the membrane is selectively permeable`, `Divide more rapidly due to osmotic stress`],
            correctAnswer: 0,
            explanation: `Hypertonic = higher solute concentration outside. Water follows solute (moves out by osmosis) → cell shrinks. In RBCs this is called crenation. In plant cells, the membrane pulls away from the cell wall (plasmolysis).`
          },
          {
            question: `The Na$^+$/K$^+$ ATPase is considered electrogenic because:`,
            options: [`It moves a net positive charge out of the cell (3 Na$^+$ out vs 2 K$^+$ in)`, `It requires ATP which carries electrical energy`, `It moves equal charges in both directions`, `It only transports positively charged ions`],
            correctAnswer: 0,
            explanation: `3 Na$^+$ out, 2 K$^+$ in per ATP = net +1 charge moved outside per cycle. This contributes about $-$6 mV to the resting membrane potential. The remaining ~$-$64 mV comes mainly from K$^+$ leak channels (K$^+$ diffusing out down its concentration gradient).`
          },
          {
            question: `Glucose absorption in the small intestine uses Na$^+$-glucose symport (SGLT1). This is an example of:`,
            options: [`Secondary active transport — glucose moves against its gradient using energy from the Na$^+$ gradient`, `Primary active transport using ATP directly`, `Simple diffusion through the membrane`, `Facilitated diffusion through a channel protein`],
            correctAnswer: 0,
            explanation: `SGLT1 is a symporter: Na$^+$ flows down its gradient (established by Na$^+$/K$^+$ ATPase) and glucose is co-transported against its gradient. The energy comes indirectly from ATP — hence "secondary" active transport. On the basolateral side, glucose exits via GLUT2 (facilitated diffusion).`
          }
        ]
      }
    },
    {
      id: 'cb2-deep',
      type: 'text' as const,
      content: `### Membrane Selectivity: What Crosses and What Cannot

This is a fundamental MCAT reasoning skill — predicting what can cross a lipid bilayer:

**Crosses freely (simple diffusion)**:
- Small, nonpolar molecules: O$_2$, CO$_2$, N$_2$
- Small, uncharged polar: H$_2$O (slowly), ethanol, urea
- Hydrophobic molecules: steroid hormones, fatty acids

**Cannot cross without help**:
- Ions: Na$^+$, K$^+$, Ca$^{2+}$, Cl$^-$ (charged = repelled by hydrophobic core)
- Large polar molecules: glucose, amino acids
- Macromolecules: proteins, nucleic acids

### Receptor-Mediated Endocytosis

- Ligand binds receptor → clathrin-coated pit forms → vesicle internalized
- Example: LDL cholesterol uptake via LDL receptors
- **Familial hypercholesterolemia**: defective LDL receptors → LDL stays in blood → atherosclerosis
- This is a favorite MCAT passage topic linking cell biology to disease

### Membrane Potential — Nernst Equation

For a single ion, the equilibrium potential is:

$$E_{ion} = \\frac{61}{z} \\log \\frac{[ion]_{outside}}{[ion]_{inside}} \\text{ (at 37°C, in mV)}$$

- $E_K \\approx -90$ mV (K$^+$ higher inside)
- $E_{Na} \\approx +60$ mV (Na$^+$ higher outside)
- Resting potential (~$-70$ mV) is closer to $E_K$ because the membrane is more permeable to K$^+$ at rest`
    },
    {
      id: 'cb2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Transport** 🎯`,
      exercise: {
        questions: [
          {
            question: `A solution contains 300 mOsm of urea. A red blood cell (with normal intracellular osmolarity of 300 mOsm) is placed in this solution. The cell will:`,
            options: [`Lyse — urea crosses the membrane, so it is effectively hypotonic`, `Crenate — the solution is hypertonic`, `Remain unchanged — the solution is isotonic`, `Initially shrink, then return to normal`],
            correctAnswer: 0,
            explanation: `Urea freely crosses cell membranes, so it is a penetrating solute that does not contribute to tonicity. A 300 mOsm urea solution has an effective tonicity of 0 (hypotonic). Water enters the cell → hemolysis. This is why osmolarity and tonicity are NOT the same concept.`
          },
          {
            question: `In familial hypercholesterolemia, LDL receptor mutations lead to elevated blood cholesterol because:`,
            options: [`Cells cannot internalize LDL via receptor-mediated endocytosis, so LDL accumulates in the blood`, `The liver produces excess cholesterol`, `LDL is converted to HDL at a slower rate`, `Bile acid synthesis is increased`],
            correctAnswer: 0,
            explanation: `LDL receptors on cell surfaces normally bind LDL, triggering clathrin-mediated endocytosis. Without functional receptors, LDL cannot be cleared from the blood → deposits in arterial walls → atherosclerosis. This connects cell biology (endocytosis) to cardiovascular disease — a classic MCAT integration.`
          }
        ]
      }
    },
    {
      id: 'cb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Fluid mosaic model: phospholipids + cholesterol (fluidity buffer) + integral/peripheral proteins + glycocalyx
- Crossing rules: small nonpolar = free diffusion; charged/large polar = need channels or transporters
- Na$^+$/K$^+$ ATPase: 3 Na$^+$ out, 2 K$^+$ in — electrogenic, powers secondary active transport
- Osmolarity ≠ tonicity: only non-penetrating solutes affect cell volume (urea penetrates → does not contribute to tonicity)
- Receptor-mediated endocytosis: clathrin-coated pits (LDL uptake → familial hypercholesterolemia link)
- Resting membrane potential (~$-$70 mV) determined mostly by K$^+$ leak channels, with small contribution from Na$^+$/K$^+$ ATPase`
    }
  ]
};
