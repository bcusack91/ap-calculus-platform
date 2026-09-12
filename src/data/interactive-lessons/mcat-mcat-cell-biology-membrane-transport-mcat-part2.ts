export const mcatCellMembraneTransportPart2Data = {
  topicSlug: 'mcat-cell-biology-membrane-transport-mcat',
  sections: [
    {
      id: 'mt2-intro',
      type: 'text' as const,
      content: `# Membrane Transport for the MCAT

**Part 2 of 4 — Passive Transport & Osmosis**

### Passive Transport: Down the Gradient, No ATP

All passive transport moves solutes **down** their electrochemical gradient ($\\Delta G < 0$), so no energy input is required.

| Mode | Protein? | Saturable? | Examples |
|------|----------|-----------|----------|
| Simple diffusion | No | No — rate rises linearly with gradient | O$_2$, CO$_2$, steroids |
| Channel-mediated | Yes (channel/pore) | Effectively no (very high throughput) | Na$^+$, K$^+$ channels; aquaporins |
| Carrier-mediated (facilitated diffusion) | Yes (carrier flips conformation) | **Yes — saturates ($V_{max}$)** | GLUT transporters for glucose |

### Channels vs. Carriers — The Kinetic Signature

- **Channels** form a continuous aqueous pore; ions flow at near-diffusion rates ($10^6$-$10^8$ ions/s). They can be **gated**: voltage-gated (Na$^+$ channels in neurons), ligand-gated (nicotinic ACh receptor), or mechanically gated
- **Carriers** bind the solute, change conformation, and release it on the other side (~$10^2$-$10^4$ molecules/s). Because binding sites are limited, carrier transport shows **saturation kinetics** just like an enzyme:

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

> MCAT experimental signature: plot flux vs. concentration. A straight line = simple diffusion; a hyperbola that plateaus = carrier-mediated. Competitive inhibition by a structural analog also implicates a carrier.

- **GLUT1** (most cells, high basal affinity) vs. **GLUT4** (muscle/adipose, **insulin-inserted** from intracellular vesicles) vs. **GLUT2** (liver/pancreatic beta cells, low affinity/high $K_m$ — acts as a glucose sensor)

### Osmosis and Tonicity

**Osmosis** = passive movement of water across a semipermeable membrane toward the compartment with higher total solute (osmolarity). Water moves through the bilayer slowly and through **aquaporins** rapidly.

| Solution (relative to cell) | Water moves... | Animal cell result |
|-----------------------------|---------------|--------------------|
| Hypertonic | Out of cell | Crenation (shrivels) |
| Isotonic | No net movement | Normal |
| Hypotonic | Into cell | Swelling → lysis |

- **Tonicity counts only impermeant solutes.** Urea crosses membranes, so a urea solution that is iso-osmotic is functionally **hypotonic** — cells still swell
- Osmotic pressure (a colligative property): $\\Pi = iMRT$, where $i$ is the van't Hoff factor (NaCl → $i \\approx 2$; glucose → $i = 1$)

### Equilibrium vs. Steady State

- Passive transport runs until the **electrochemical gradient** is dissipated (for ions, both concentration AND membrane voltage matter)
- A charged solute can be at equilibrium with unequal concentrations if the membrane potential balances the chemical gradient — the reason K$^+$ stays concentrated inside cells near the resting potential`
    },
    {
      id: 'mt2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Passive Transport** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher measures glucose uptake into erythrocytes as external glucose rises. Uptake increases, then plateaus at high concentrations. Adding galactose lowers glucose uptake at every concentration. These data indicate glucose enters by:`,
            options: [`Carrier-mediated facilitated diffusion — saturable and competitively inhibited`, `Simple diffusion through the bilayer`, `Primary active transport`, `An always-open channel with no binding site`],
            correctAnswer: 0,
            explanation: `Saturation (a $V_{max}$) means a limited number of binding sites — the hallmark of a carrier (GLUT1 here). Competition by the structural analog galactose confirms a stereospecific binding site. Simple diffusion never saturates, and nothing in the data requires ATP, ruling out active transport.`
          },
          {
            question: `A patient receives an IV of iso-osmotic urea solution. Compared with iso-osmotic saline, the urea infusion will cause red blood cells to:`,
            options: [`Swell, because urea permeates the membrane and does not contribute to tonicity`, `Shrink, because urea draws water out of cells`, `Remain unchanged, because the solution is iso-osmotic`, `Lyse immediately due to urea toxicity`],
            correctAnswer: 0,
            explanation: `Tonicity depends only on impermeant solutes. Urea crosses membranes (via urea transporters and slow diffusion), equilibrates, and stops opposing water entry — so an iso-osmotic urea solution behaves like pure water over time: functionally hypotonic. Cells take on water and swell. This osmolarity-vs-tonicity distinction is a classic MCAT trap.`
          },
          {
            question: `GLUT4 differs from GLUT1 in that GLUT4-mediated glucose uptake increases sharply after insulin signaling. The mechanism is:`,
            options: [`Insulin triggers translocation of GLUT4-containing vesicles to the plasma membrane, raising transporter number`, `Insulin phosphorylates GLUT4, converting it into an ATP-driven pump`, `Insulin raises the glucose gradient by inhibiting glycolysis`, `Insulin opens a gate within the GLUT4 pore`],
            correctAnswer: 0,
            explanation: `GLUT4 in muscle and adipose is stored in intracellular vesicles. Insulin (via the RTK → PI3K/Akt pathway) drives vesicle fusion with the plasma membrane, increasing $V_{max}$ by increasing transporter count — the transporter itself remains a passive carrier. GLUT4 never uses ATP to move glucose.`
          }
        ]
      }
    },
    {
      id: 'mt2-deep',
      type: 'text' as const,
      content: `### Interpreting Flux Curves — The MCAT's Favorite Graph

| Observation | Interpretation |
|-------------|----------------|
| Flux linear with [S], no plateau | Simple diffusion |
| Hyperbolic, plateaus at $V_{max}$ | Carrier-mediated |
| $V_{max}$ increases after hormone treatment | More transporters inserted (e.g., insulin/GLUT4, ADH/aquaporin-2) |
| $K_m$ increases, $V_{max}$ unchanged with inhibitor | Competitive inhibitor at the binding site |
| Flux abolished when ATP synthesis is poisoned | Active transport (or transporter recycling) is involved |

### Aquaporins and ADH — Regulated Water Permeability

- Aquaporins are water-selective channels; they exclude ions (even H$^+$, via electrostatic barriers)
- **Aquaporin-2** in kidney collecting-duct cells is inserted into the apical membrane in response to **ADH (vasopressin)** acting through a GPCR/cAMP pathway
- Diabetes insipidus logic: no ADH (central) or no receptor/AQP2 response (nephrogenic) → water cannot be reabsorbed → dilute urine, polyuria

### Ion Gradients Store Energy

Typical mammalian cell gradients (approximate):

| Ion | Extracellular | Intracellular |
|-----|---------------|---------------|
| Na$^+$ | 145 mM | 12 mM |
| K$^+$ | 4 mM | 140 mM |
| Ca$^{2+}$ | 2.5 mM | ~100 nM (free) |
| Cl$^-$ | 110 mM | 10 mM |

These gradients (built by pumps — Part 3) are potential energy: they power secondary active transport, action potentials, and neurotransmitter reuptake. The enormous 10,000-fold Ca$^{2+}$ gradient is why tiny Ca$^{2+}$ leaks make excellent signals.`
    },
    {
      id: 'mt2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Osmosis & Flux Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 150 mM NaCl solution and a 300 mM glucose solution are separated from pure water by membranes impermeable to both solutes. Their osmotic pressures are:`,
            options: [`Approximately equal — NaCl dissociates into two particles, so both are ~300 mOsm`, `NaCl exerts half the osmotic pressure of glucose`, `Glucose exerts twice the pressure because it is larger`, `Osmotic pressure depends on solute identity, so they cannot be compared`],
            correctAnswer: 0,
            explanation: `Osmotic pressure is colligative: $\\Pi = iMRT$ depends on particle count, not identity. NaCl has $i \\approx 2$, so 150 mM NaCl ≈ 300 mOsm, matching 300 mM glucose ($i = 1$). Molecular size is irrelevant to colligative properties.`
          },
          {
            question: `In patients with nephrogenic diabetes insipidus, ADH levels are high but urine remains dilute. The defect most likely lies in:`,
            options: [`The collecting duct's ability to insert aquaporin-2 in response to ADH signaling`, `ADH synthesis in the hypothalamus`, `The glomerular filtration barrier`, `Sodium reabsorption in the proximal tubule`],
            correctAnswer: 0,
            explanation: `"Nephrogenic" means the kidney cannot respond: the ADH receptor (V2) or aquaporin-2 pathway is defective, so water channels are not inserted into the apical membrane and water cannot follow the medullary osmotic gradient out of the duct. Central diabetes insipidus, by contrast, is failed ADH production — distinguishable because desmopressin (an ADH analog) fixes central but not nephrogenic DI.`
          }
        ]
      }
    },
    {
      id: 'mt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Passive transport moves solutes down electrochemical gradients without ATP: simple diffusion, channels, carriers
- Carriers saturate (Michaelis-Menten-like kinetics) and show competitive inhibition; simple diffusion is linear and non-saturable
- GLUT1 = basal uptake; GLUT4 = insulin-triggered vesicle insertion (muscle/adipose); GLUT2 = high-$K_m$ glucose sensor (liver, beta cells)
- Osmosis: water toward higher impermeant-solute concentration; tonicity ≠ osmolarity (permeant solutes like urea don't count)
- $\\Pi = iMRT$: count particles (NaCl ≈ 2, glucose = 1)
- Aquaporin-2 insertion is ADH-regulated — the basis of diabetes insipidus reasoning
- Ion gradients (high Na$^+$ out, high K$^+$ in, very low intracellular Ca$^{2+}$) are stored energy for transport and signaling`
    }
  ]
};
