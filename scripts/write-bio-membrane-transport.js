const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src/data/interactive-lessons');

// Part 1: Membrane Structure
const part1 = `export const bioMembraneTransportPart1Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt1-intro',
      type: 'text' as const,
      content: \`
## Membrane Structure — The Fluid Mosaic Model

**Part 1 of 7**

The plasma membrane is far more than a passive barrier — it is a dynamic, selectively permeable structure that regulates the flow of materials into and out of the cell.  Understanding membrane structure is essential for understanding transport mechanisms.

The modern model of membrane structure is the **fluid mosaic model**, proposed by Singer and Nicolson in 1972.
      \`
    },
    {
      id: 'mt1-phospholipids',
      type: 'text' as const,
      content: \`
### Phospholipid Bilayer

The foundation of every biological membrane is a **phospholipid bilayer**:

Each phospholipid has:
- A **hydrophilic head** (polar; contains a phosphate group linked to a glycerol backbone)
- Two **hydrophobic fatty acid tails** (nonpolar; hydrocarbon chains)

In an aqueous environment, phospholipids spontaneously arrange into a bilayer — hydrophilic heads face the water, hydrophobic tails face inward, away from water.  This is driven by the **hydrophobic effect** (maximizing water entropy by minimizing the exposure of nonpolar surfaces to water).

**Membrane fluidity** is influenced by:

| Factor | Effect on Fluidity |
|--------|-------------------|
| **Unsaturated fatty acid tails** | Increase fluidity — kinks from cis double bonds prevent tight packing |
| **Saturated fatty acid tails** | Decrease fluidity — straight chains pack tightly |
| **Cholesterol** | Acts as a fluidity buffer — prevents crystallization at low temp; limits excessive movement at high temp |
| **Temperature** | Higher temp increases fluidity; lower temp decreases fluidity |
| **Tail length** | Shorter tails increase fluidity (fewer van der Waals interactions) |

> **Why "fluid"?** Phospholipids can move **laterally** within their leaflet (~10\\\\(^7\\\\) times per second) but rarely **flip-flop** between leaflets (requires flippase enzymes).  Membrane proteins also move laterally, as demonstrated by the **Frye-Edidin experiment** (1970) using fluorescent labels on human and mouse cells fused into heterokaryons.
      \`
    },
    {
      id: 'mt1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Phospholipid Bilayer
      \`,
      exercise: {
        questions: [
          {
            question: 'A cell membrane is found to have an unusually high proportion of unsaturated fatty acids in its phospholipids. How would this affect membrane properties?',
            options: [
              'The membrane would become more rigid and less permeable',
              'The membrane would be more fluid because unsaturated tails create kinks that prevent tight packing',
              'The membrane would dissolve in water',
              'Cholesterol would no longer be needed'
            ],
            correctAnswer: 1,
            explanation: 'Unsaturated fatty acid tails contain one or more cis double bonds that create kinks in the hydrocarbon chain. These kinks prevent adjacent phospholipids from packing closely together, resulting in greater membrane fluidity.'
          },
          {
            question: 'Cholesterol is often described as a "fluidity buffer." What does this mean?',
            options: [
              'Cholesterol always increases membrane fluidity',
              'Cholesterol always decreases membrane fluidity',
              'At high temperatures cholesterol restrains phospholipid movement (reducing fluidity); at low temperatures it prevents tight packing (maintaining fluidity)',
              'Cholesterol has no effect on fluidity'
            ],
            correctAnswer: 2,
            explanation: 'Cholesterol inserts between phospholipids with its hydroxyl group near the heads and its rigid steroid ring among the tails. At high temps, it restricts adjacent tail movement. At low temps, it prevents the tails from packing into a rigid crystalline state. It stabilizes fluidity across a range of temperatures.'
          }
        ]
      }
    },
    {
      id: 'mt1-proteins',
      type: 'text' as const,
      content: \`
### Membrane Proteins — The "Mosaic"

The "mosaic" in the fluid mosaic model refers to the diverse proteins embedded in or attached to the bilayer:

| Type | Position | Examples |
|------|----------|----------|
| **Integral (transmembrane) proteins** | Span the entire membrane; have hydrophobic regions within the bilayer | Channel proteins, carrier proteins, receptors |
| **Peripheral proteins** | Attached to the membrane surface (not embedded) | Cytoskeletal anchors, enzymes, signal transduction components |
| **Glycoproteins** | Integral proteins with carbohydrate chains attached (on extracellular side) | Cell recognition, immune function (MHC) |
| **Glycolipids** | Lipids with attached carbohydrate chains | Cell-cell recognition |

**Six major functions of membrane proteins:**

1. **Transport** — channels and carriers move specific molecules across the membrane
2. **Enzymatic activity** — enzymes catalyze reactions at the membrane surface
3. **Signal transduction** — receptors bind extracellular ligands and relay signals inside the cell
4. **Cell-cell recognition** — glycoproteins serve as identification tags (e.g., MHC, blood group antigens)
5. **Intercellular joining** — tight junctions, desmosomes, gap junctions connect cells
6. **Attachment to cytoskeleton/ECM** — anchoring proteins maintain cell shape

> **Asymmetry:** The two leaflets of the membrane differ in lipid composition and protein orientation.  Carbohydrates are found exclusively on the **extracellular** face, forming the **glycocalyx**.
      \`
    },
    {
      id: 'mt1-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Membrane Proteins
      \`,
      exercise: {
        questions: [
          {
            question: 'A transmembrane transport protein must have which structural feature to span the lipid bilayer?',
            options: [
              'A long hydrophilic alpha helix',
              'One or more hydrophobic alpha-helical domains that interact with the fatty acid tails of the bilayer',
              'Only beta-sheet secondary structure',
              'A signal peptide on the cytoplasmic side'
            ],
            correctAnswer: 1,
            explanation: 'To span the hydrophobic interior of the lipid bilayer, transmembrane proteins contain one or more alpha-helical regions composed predominantly of nonpolar amino acids. These hydrophobic domains interact favorably with the fatty acid tails, anchoring the protein in the membrane.'
          },
          {
            question: 'The glycocalyx is important for:',
            options: [
              'Maintaining membrane fluidity',
              'Cell-cell recognition, protection, and adhesion — it is composed of carbohydrates attached to membrane proteins and lipids on the extracellular surface',
              'Lipid synthesis within the membrane',
              'Anchoring the nucleus to the membrane'
            ],
            correctAnswer: 1,
            explanation: 'The glycocalyx (carbohydrate coat) consists of oligosaccharide chains on glycoproteins and glycolipids. It functions in cell-cell recognition (e.g., immune system, blood type), protection from mechanical and chemical damage, and cell adhesion.'
          }
        ]
      }
    },
    {
      id: 'mt1-selective',
      type: 'text' as const,
      content: \`
### Selective Permeability

The lipid bilayer is selectively permeable — it allows some substances to cross freely while restricting others:

| Can cross freely | Cannot cross freely |
|-----------------|-------------------|
| Small, nonpolar molecules (O\\\\(_2\\\\), CO\\\\(_2\\\\), N\\\\(_2\\\\)) | Large, polar molecules (glucose, amino acids) |
| Small, uncharged polar molecules (H\\\\(_2\\\\)O — slowly, ethanol) | Ions (Na\\\\(^+\\\\), K\\\\(^+\\\\), Cl\\\\(^-\\\\), Ca\\\\(^{2+}\\\\)) |
| Lipid-soluble molecules (steroid hormones) | Charged molecules (ATP, proteins) |

Substances that cannot cross freely require **transport proteins** (channels or carriers) to cross the membrane.  This selective control allows the cell to maintain an internal environment very different from the exterior.
      \`
    },
    {
      id: 'mt1-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Membrane Structure
      \`,
      exercise: {
        questions: [
          {
            question: 'The model name for modern membrane structure (proposed by Singer and Nicolson):',
            answer: 'fluid mosaic model',
            acceptableAnswers: ['fluid mosaic model', 'Fluid mosaic model', 'fluid mosaic', 'Fluid Mosaic Model'],
            placeholder: 'e.g. lock and key model'
          },
          {
            question: 'The molecule that acts as a fluidity buffer in animal cell membranes:',
            answer: 'cholesterol',
            acceptableAnswers: ['cholesterol', 'Cholesterol'],
            placeholder: 'e.g. phospholipid'
          },
          {
            question: 'The carbohydrate coat on the extracellular surface of the membrane:',
            answer: 'glycocalyx',
            acceptableAnswers: ['glycocalyx', 'Glycocalyx', 'sugar coat'],
            placeholder: 'e.g. cytoskeleton'
          }
        ]
      }
    },
    {
      id: 'mt1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Match the Membrane Component
      \`,
      exercise: {
        questions: [
          {
            question: 'Proteins that span the entire membrane with hydrophobic transmembrane domains:',
            options: ['Peripheral proteins', 'Integral (transmembrane) proteins', 'Glycolipids', 'Cholesterol'],
            correctAnswer: 'Integral (transmembrane) proteins'
          },
          {
            question: 'The component that prevents tight packing of phospholipids due to kinks in the tails:',
            options: ['Saturated fatty acids', 'Unsaturated fatty acids', 'Cholesterol', 'Glycoproteins'],
            correctAnswer: 'Unsaturated fatty acids'
          },
          {
            question: 'Lipids with carbohydrate chains on the extracellular face:',
            options: ['Phospholipids', 'Cholesterol', 'Glycolipids', 'Peripheral proteins'],
            correctAnswer: 'Glycolipids'
          }
        ]
      }
    },
    {
      id: 'mt1-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Membrane Structure
      \`,
      exercise: {
        questions: [
          {
            question: 'A fish living in Arctic waters would most likely have membranes with a higher proportion of _____ compared to a fish in tropical waters.',
            options: [
              'Saturated fatty acids',
              'Unsaturated fatty acids',
              'Cholesterol',
              'Glycoproteins'
            ],
            correctAnswer: 1,
            explanation: 'At cold temperatures, membranes with predominantly saturated fatty acids would become too rigid. Arctic fish compensate by incorporating more unsaturated fatty acids (with kinks from cis double bonds) to maintain membrane fluidity at low temperatures.'
          },
          {
            question: 'Which small molecule can cross the lipid bilayer most easily without a transport protein?',
            options: [
              'Glucose',
              'Sodium ions (Na+)',
              'Oxygen gas (O2)',
              'ATP'
            ],
            correctAnswer: 2,
            explanation: 'O2 is a small, nonpolar molecule that readily dissolves in the hydrophobic core of the lipid bilayer and passes through without any protein assistance. Glucose is too large and polar, Na+ is charged, and ATP is large and highly charged.'
          }
        ]
      }
    }
  ]
};`;

// Part 2: Passive Transport
const part2 = `export const bioMembraneTransportPart2Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt2-intro',
      type: 'text' as const,
      content: \`
## Passive Transport — Moving Down the Gradient

**Part 2 of 7**

Passive transport moves substances **down** their concentration (or electrochemical) gradient — from high concentration to low concentration.  It requires **no energy input** from the cell because the movement is driven by the **second law of thermodynamics** (systems tend toward higher entropy).

There are three main types of passive transport:
1. Simple diffusion
2. Facilitated diffusion (via channels or carriers)
3. Osmosis (water movement)
      \`
    },
    {
      id: 'mt2-diffusion',
      type: 'text' as const,
      content: \`
### Simple Diffusion

Simple diffusion is the net movement of molecules from a region of **higher concentration** to a region of **lower concentration** due to random thermal motion, until equilibrium is reached.

**Characteristics:**
- No protein required
- Only small, nonpolar molecules (O\\\\(_2\\\\), CO\\\\(_2\\\\), N\\\\(_2\\\\)) and some small uncharged polar molecules (ethanol) can diffuse through the lipid bilayer
- Rate depends on: concentration gradient, temperature, membrane surface area, and membrane thickness

> **Equilibrium does NOT mean no movement** — at equilibrium, molecules continue to move randomly in both directions, but the **net movement** is zero because the rates of movement in both directions are equal.
      \`
    },
    {
      id: 'mt2-facilitated',
      type: 'text' as const,
      content: \`
### Facilitated Diffusion

Large polar molecules and ions cannot pass through the lipid bilayer by simple diffusion.  They require membrane proteins to cross — this is **facilitated diffusion**.

**Two types of transport proteins:**

**1. Channel Proteins:**
- Form a hydrophilic pore through the membrane
- Very fast (up to 10\\\\(^8\\\\) ions/second)
- Selective — each channel is specific to particular ions or molecules
- **Gated channels** can be regulated:
  - *Voltage-gated* — open/close in response to membrane potential changes (neurons)
  - *Ligand-gated* — open when a specific molecule binds (neurotransmitter receptors)
  - *Mechanically-gated* — open in response to physical stretching (touch receptors)
- Example: **Aquaporins** — channel proteins specific for water; greatly accelerate osmosis

**2. Carrier Proteins:**
- Bind the solute and undergo a **conformational change** to transport it across
- Slower than channels (100-1000 molecules/second)
- Specific to particular molecules
- Can be saturated (exhibit **Michaelis-Menten kinetics**)
- Example: **GLUT transporters** — facilitate glucose entry into cells

| Feature | Channel Proteins | Carrier Proteins |
|---------|-----------------|-----------------|
| Mechanism | Hydrophilic pore | Conformational change |
| Speed | Very fast | Slower |
| Saturation | Rarely saturated | Can be saturated |
| Example | K\\\\(^+\\\\) channels, aquaporins | GLUT glucose transporters |
      \`
    },
    {
      id: 'mt2-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Passive Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following is true about facilitated diffusion?',
            options: [
              'It requires ATP',
              'It moves solutes against their concentration gradient',
              'It uses membrane proteins but requires no energy input — solutes move down their gradient',
              'It only transports water'
            ],
            correctAnswer: 2,
            explanation: 'Facilitated diffusion uses channel or carrier proteins to help polar molecules and ions cross the membrane, but the driving force is the concentration gradient — no cellular energy (ATP) is expended. It is still passive transport.'
          },
          {
            question: 'A carrier protein that transports glucose shows a maximum transport rate (Vmax) that cannot be exceeded even at very high glucose concentrations. What explains this saturation?',
            options: [
              'The cell runs out of ATP',
              'There is a finite number of carrier proteins, and at high substrate concentrations all carriers are occupied',
              'Glucose begins to denature at high concentrations',
              'The concentration gradient reverses'
            ],
            correctAnswer: 1,
            explanation: 'Like enzymes, carrier proteins have a finite number of binding sites. When all carriers are simultaneously occupied (saturated), increasing substrate concentration cannot increase the rate further — the system operates at Vmax. This is analogous to enzyme saturation kinetics.'
          },
          {
            question: 'Nerve cells have voltage-gated Na+ channels that open when the membrane depolarizes. This is an example of:',
            options: [
              'Active transport',
              'Simple diffusion',
              'Facilitated diffusion through a gated channel',
              'Exocytosis'
            ],
            correctAnswer: 2,
            explanation: 'Na+ ions flow through the voltage-gated channel down their electrochemical gradient (from high Na+ outside to low Na+ inside). No ATP is required for the ion movement itself — the energy comes from the pre-existing Na+ gradient. The channel simply provides a regulated pathway.'
          }
        ]
      }
    },
    {
      id: 'mt2-tonicity',
      type: 'text' as const,
      content: \`
### Key Concept: Electrochemical Gradient

For uncharged molecules, the concentration gradient alone determines the direction of passive transport.  But for **ions**, two forces act simultaneously:

1. **Chemical gradient** — ions move from high to low concentration
2. **Electrical gradient** — ions are attracted to the opposite charge across the membrane

Together these form the **electrochemical gradient**.  An ion might move against its concentration gradient if the electrical force is strong enough (or vice versa).

The **membrane potential** (typically -70 mV in animal cells, inside negative) means:
- Cations (like K\\\\(^+\\\\)) have an electrical force pulling them INTO the cell
- Anions (like Cl\\\\(^-\\\\)) have an electrical force pushing them OUT of the cell

> **AP Exam Tip:** When asked about ion movement, always consider BOTH the concentration gradient AND the electrical gradient.
      \`
    },
    {
      id: 'mt2-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Passive Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'The type of diffusion requiring a membrane protein but no ATP:',
            answer: 'facilitated diffusion',
            acceptableAnswers: ['facilitated diffusion', 'Facilitated diffusion', 'facilitated transport'],
            placeholder: 'e.g. active transport'
          },
          {
            question: 'Channel proteins specific for water:',
            answer: 'aquaporins',
            acceptableAnswers: ['aquaporins', 'Aquaporins', 'aquaporin'],
            placeholder: 'e.g. ion channels'
          },
          {
            question: 'The combined concentration and electrical gradients that determine ion movement:',
            answer: 'electrochemical gradient',
            acceptableAnswers: ['electrochemical gradient', 'Electrochemical gradient'],
            placeholder: 'e.g. osmotic gradient'
          }
        ]
      }
    },
    {
      id: 'mt2-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Passive Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'A molecule moves from an area of lower concentration to higher concentration across a membrane. This movement:',
            options: [
              'Is driven by simple diffusion',
              'Could be facilitated diffusion if the electrical gradient favors that direction (for charged molecules)',
              'Must be simple diffusion because it crosses the membrane',
              'Is impossible — molecules can only move down their gradient'
            ],
            correctAnswer: 1,
            explanation: 'For charged molecules (ions), the electrochemical gradient combines concentration and electrical forces. An ion could move against its concentration gradient if the electrical force (membrane potential) is strong enough to make the net electrochemical gradient favorable. For uncharged molecules, however, movement against the concentration gradient always requires active transport.'
          },
          {
            question: 'Which of the following would NOT increase the rate of simple diffusion across a membrane?',
            options: [
              'Increasing the concentration gradient',
              'Increasing the temperature',
              'Increasing the membrane surface area',
              'Adding more carrier proteins to the membrane'
            ],
            correctAnswer: 3,
            explanation: 'Simple diffusion occurs directly through the lipid bilayer without proteins. Adding carrier proteins would increase the rate of facilitated diffusion, not simple diffusion. The rate of simple diffusion depends on gradient, temperature, surface area, and membrane thickness.'
          }
        ]
      }
    }
  ]
};`;

// Part 3: Osmosis
const part3 = `export const bioMembraneTransportPart3Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt3-intro',
      type: 'text' as const,
      content: \`
## Osmosis — Water Follows the Solute

**Part 3 of 7**

Osmosis is the net movement of **water** across a selectively permeable membrane from a region of **lower solute concentration** (higher water concentration) to a region of **higher solute concentration** (lower water concentration).

Water moves through the membrane via:
- Slow diffusion directly through the lipid bilayer
- Rapid flow through **aquaporins** (water-specific channel proteins)

Osmosis is technically a special case of facilitated diffusion (when aquaporins are involved), but it is traditionally treated as a distinct transport category due to its biological importance.
      \`
    },
    {
      id: 'mt3-tonicity',
      type: 'text' as const,
      content: \`
### Tonicity: Predicting Water Movement

**Tonicity** describes the effect of a surrounding solution on cell volume.  It depends on the concentration of **non-penetrating solutes** (solutes that cannot cross the membrane):

| Solution Type | Relative Solute Concentration | Water Movement | Effect on Cell |
|--------------|------------------------------|----------------|----------------|
| **Hypertonic** | Higher solute outside cell | Water moves OUT | Cell shrinks (animal: crenation; plant: plasmolysis) |
| **Hypotonic** | Lower solute outside cell | Water moves IN | Cell swells (animal: may lyse; plant: becomes turgid) |
| **Isotonic** | Equal solute on both sides | No net water movement | Cell volume unchanged |

> **Critical Distinction:** Tonicity depends only on **non-penetrating** solutes.  A solution with high urea (which freely crosses membranes) is technically hyperosmotic but effectively isotonic — urea equilibrates and no lasting water movement occurs.

### Animal Cells vs. Plant Cells in Different Solutions

**In hypotonic solution:**
- **Animal cell:** Water enters, cell swells and may burst (**lysis**)
- **Plant cell:** Water enters, cell swells until the rigid **cell wall** exerts back-pressure (**turgor pressure**) that stops further water entry — the cell becomes **turgid** (this is the ideal state for plant cells)

**In hypertonic solution:**
- **Animal cell:** Water leaves, cell shrinks and wrinkles (**crenation**)
- **Plant cell:** Water leaves, the plasma membrane pulls away from the cell wall (**plasmolysis**) — this causes wilting

**In isotonic solution:**
- **Animal cell:** No net change — cells are maintained (this is why IV fluids are isotonic saline, 0.9% NaCl)
- **Plant cell:** Cell is flaccid (limp) — not ideal; plants need turgor pressure for structural support
      \`
    },
    {
      id: 'mt3-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Osmosis and Tonicity
      \`,
      exercise: {
        questions: [
          {
            question: 'A plant cell is placed in a hypertonic solution. What happens?',
            options: [
              'The cell becomes turgid as water rushes in',
              'The cell undergoes plasmolysis — water leaves, and the plasma membrane pulls away from the cell wall',
              'The cell wall dissolves',
              'Nothing — plant cells are not affected by tonicity'
            ],
            correctAnswer: 1,
            explanation: 'In a hypertonic solution, water moves out of the cell by osmosis. The cytoplasm shrinks, but the rigid cell wall maintains its shape. The plasma membrane pulls away from the cell wall in a process called plasmolysis, which is visible under a microscope.'
          },
          {
            question: 'Why does an animal cell placed in pure water burst (lyse), but a plant cell in the same solution does not?',
            options: [
              'Animal cells absorb more water than plant cells',
              'Plant cells have a rigid cell wall that exerts turgor pressure, preventing over-expansion; animal cells lack a cell wall and cannot resist the osmotic influx',
              'Plant cells actively pump water out',
              'Animal cells have more aquaporins'
            ],
            correctAnswer: 1,
            explanation: 'Both cells experience water influx in a hypotonic environment. The plant cell wall is strong enough to resist expansion, generating turgor pressure that opposes further water entry. Animal cells lack a cell wall and continue to swell until the membrane ruptures (lysis).'
          },
          {
            question: 'IV (intravenous) fluids given to patients are typically isotonic (0.9% NaCl). Why is this important?',
            options: [
              'Hypertonic fluids would cause white blood cells to swell and burst',
              'Isotonic fluids prevent net water movement across red blood cell membranes, avoiding both lysis (hypotonic) and crenation (hypertonic)',
              'Isotonic fluids contain more nutrients',
              'Hypertonic fluids would promote bacterial growth'
            ],
            correctAnswer: 1,
            explanation: 'If IV fluids were hypotonic, water would enter red blood cells, causing them to swell and lyse. If hypertonic, water would leave, causing crenation. Isotonic fluids (0.9% NaCl matches blood plasma osmolarity) prevent net water movement and maintain normal cell shape.'
          }
        ]
      }
    },
    {
      id: 'mt3-osmotic',
      type: 'text' as const,
      content: \`
### Water Potential (for AP Biology)

The AP Biology curriculum uses the concept of **water potential** (\\\\(\\\\Psi\\\\), psi) to quantitatively predict the direction of water movement:

$$\\\\Psi = \\\\Psi_s + \\\\Psi_p$$

Where:
- \\\\(\\\\Psi_s\\\\) = **solute potential** (also called osmotic potential) — always \\\\(\\\\leq 0\\\\); more solute makes it more negative
- \\\\(\\\\Psi_p\\\\) = **pressure potential** — can be positive (turgor in plant cells), zero, or negative (tension in xylem)

**Water moves from HIGH water potential to LOW water potential.**

**Solute potential formula:**

$$\\\\Psi_s = -iCRT$$

Where:
- \\\\(i\\\\) = ionization constant (number of particles the solute dissociates into; NaCl = 2, glucose = 1)
- \\\\(C\\\\) = molar concentration (mol/L)
- \\\\(R\\\\) = ideal gas constant (0.0831 L bar/mol K)
- \\\\(T\\\\) = temperature in Kelvin

**Rules for water potential:**
1. Pure water in an open container: \\\\(\\\\Psi = 0\\\\) (maximum water potential)
2. Adding solute: \\\\(\\\\Psi_s\\\\) becomes more negative, \\\\(\\\\Psi\\\\) decreases
3. Adding pressure: \\\\(\\\\Psi_p\\\\) increases, \\\\(\\\\Psi\\\\) increases
4. Water always moves from higher \\\\(\\\\Psi\\\\) to lower \\\\(\\\\Psi\\\\)
      \`
    },
    {
      id: 'mt3-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Water Potential
      \`,
      exercise: {
        questions: [
          {
            question: 'A plant cell has a solute potential of -0.8 MPa and a pressure potential of 0.3 MPa. What is the water potential?',
            options: [
              '-1.1 MPa',
              '-0.5 MPa',
              '0.5 MPa',
              '1.1 MPa'
            ],
            correctAnswer: 1,
            explanation: 'Water potential = solute potential + pressure potential = (-0.8) + (0.3) = -0.5 MPa. Water would move toward this cell from any source with a water potential higher than -0.5 MPa.'
          },
          {
            question: 'If the same cell is placed in pure water (water potential = 0), which direction will water move?',
            options: [
              'Out of the cell (cell has higher water potential)',
              'Into the cell (pure water has higher water potential than the cell)',
              'No movement (they are equal)',
              'It depends on temperature only'
            ],
            correctAnswer: 1,
            explanation: 'The cell has a water potential of -0.5 MPa. Pure water has a water potential of 0. Water moves from high (0) to low (-0.5), so water enters the cell. This will continue until turgor pressure increases enough to equalize the water potentials.'
          }
        ]
      }
    },
    {
      id: 'mt3-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Osmosis
      \`,
      exercise: {
        questions: [
          {
            question: 'The term for a solution with a higher solute concentration than the cell:',
            answer: 'hypertonic',
            acceptableAnswers: ['hypertonic', 'Hypertonic'],
            placeholder: 'e.g. isotonic'
          },
          {
            question: 'The process where the plant cell membrane pulls away from the cell wall due to water loss:',
            answer: 'plasmolysis',
            acceptableAnswers: ['plasmolysis', 'Plasmolysis'],
            placeholder: 'e.g. lysis'
          },
          {
            question: 'The symbol used for water potential:',
            answer: 'psi',
            acceptableAnswers: ['psi', 'Psi', 'PSI', '\u03A8', '\u03C8'],
            placeholder: 'e.g. delta G'
          }
        ]
      }
    },
    {
      id: 'mt3-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Osmosis
      \`,
      exercise: {
        questions: [
          {
            question: 'A red blood cell is placed in a solution of 10% NaCl. What will happen?',
            options: [
              'The cell will swell and lyse',
              'The cell will crenate (shrink) because the solution is hypertonic, drawing water out by osmosis',
              'Nothing will happen',
              'The cell will become turgid'
            ],
            correctAnswer: 1,
            explanation: '10% NaCl is highly hypertonic compared to the ~0.9% NaCl of blood plasma. Water will leave the red blood cell by osmosis, causing it to shrivel and crenate.'
          },
          {
            question: 'For a turgid plant cell, the pressure potential is positive and opposes further water entry. At full turgor, what is the relationship between water potential of the cell and its surroundings?',
            options: [
              'Cell water potential is lower than surroundings',
              'Cell water potential equals the water potential of the surroundings — no net water movement',
              'Cell water potential is higher than surroundings',
              'Pressure potential equals zero'
            ],
            correctAnswer: 1,
            explanation: 'At full turgor, the positive pressure potential has increased the total water potential of the cell until it equals the water potential of the surrounding solution. At this point, no net water movement occurs — the system is at equilibrium.'
          }
        ]
      }
    }
  ]
};`;

// Part 4: Active Transport
const part4 = `export const bioMembraneTransportPart4Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt4-intro',
      type: 'text' as const,
      content: \`
## Active Transport — Moving Against the Gradient

**Part 4 of 7**

Active transport moves substances **against** their concentration (or electrochemical) gradient — from low to high concentration.  This requires **energy input**, typically from ATP hydrolysis.

Active transport is essential for:
- Maintaining ion gradients across membranes
- Accumulating nutrients inside cells
- Removing waste products
- Generating electrical signals in neurons
      \`
    },
    {
      id: 'mt4-primary',
      type: 'text' as const,
      content: \`
### Primary Active Transport: The Na+/K+ ATPase

The most important primary active transport protein in animal cells is the **sodium-potassium pump** (Na\\\\(^+\\\\)/K\\\\(^+\\\\) ATPase):

**For each ATP hydrolyzed, the pump moves:**
- **3 Na\\\\(^+\\\\) ions OUT** of the cell
- **2 K\\\\(^+\\\\) ions INTO** the cell

This creates and maintains steep concentration gradients:
- High Na\\\\(^+\\\\) outside, low Na\\\\(^+\\\\) inside
- High K\\\\(^+\\\\) inside, low K\\\\(^+\\\\) outside
- Net export of positive charge → contributes to the negative resting membrane potential (-70 mV)

**The pump cycle:**
1. 3 Na\\\\(^+\\\\) bind to cytoplasmic side of the pump
2. ATP is hydrolyzed; phosphate group is transferred to the pump (phosphorylation)
3. Conformational change exposes Na\\\\(^+\\\\) to the extracellular side; Na\\\\(^+\\\\) is released
4. 2 K\\\\(^+\\\\) bind to the extracellular side
5. Dephosphorylation causes conformational change back
6. K\\\\(^+\\\\) is released into the cytoplasm

> **Energy Cost:** The Na\\\\(^+\\\\)/K\\\\(^+\\\\) ATPase consumes approximately **25-30% of total cellular ATP** in many animal cells. In neurons, this figure can reach 70%.

**Other primary active transport pumps:**
- **Ca\\\\(^{2+}\\\\) ATPase** — pumps Ca\\\\(^{2+}\\\\) out of the cytoplasm (into ER or extracellular space)
- **H\\\\(^+\\\\)/K\\\\(^+\\\\) ATPase** — pumps H\\\\(^+\\\\) into the stomach lumen (gastric acid secretion)
- **H\\\\(^+\\\\) ATPase (proton pump)** — in plant cell membranes, creates proton gradients for secondary transport
      \`
    },
    {
      id: 'mt4-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Primary Active Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'The Na+/K+ ATPase pumps 3 Na+ out and 2 K+ in per ATP. Why does this contribute to the membrane potential?',
            options: [
              'It does not contribute to membrane potential',
              'The unequal exchange of ions (3 positive charges out, 2 positive charges in) creates a net export of positive charge, making the inside more negative',
              'It only moves uncharged molecules',
              'Na+ and K+ cancel each other out'
            ],
            correctAnswer: 1,
            explanation: 'Each cycle of the pump exports 3 positive charges (Na+) and imports only 2 positive charges (K+). The net export of 1 positive charge per cycle contributes to the negative resting membrane potential. However, the pump accounts for only ~10% of the membrane potential — the rest comes from K+ leak channels.'
          },
          {
            question: 'Why is the Na+/K+ ATPase classified as an "active" transporter?',
            options: [
              'It moves Na+ and K+ down their concentration gradients',
              'It uses energy from ATP hydrolysis to move ions AGAINST their electrochemical gradients',
              'It only works when the cell is metabolically active',
              'It transports molecules faster than channel proteins'
            ],
            correctAnswer: 1,
            explanation: 'Active transport requires direct energy input (ATP hydrolysis in this case) because it moves substances against their gradient. Na+ is pumped out despite being at lower concentration inside, and K+ is pumped in despite being at lower concentration outside.'
          }
        ]
      }
    },
    {
      id: 'mt4-secondary',
      type: 'text' as const,
      content: \`
### Secondary Active Transport (Cotransport)

Secondary active transport uses the energy stored in an **existing ion gradient** (established by primary active transport) to drive the transport of another substance.

**Two types:**

**1. Symport (cotransport):**
- Both substances move in the **same direction**
- The ion moves DOWN its gradient, providing energy for the other substance to move AGAINST its gradient
- Example: **SGLT1** — Na\\\\(^+\\\\)/glucose symporter in the intestinal epithelium uses the Na\\\\(^+\\\\) gradient (established by Na\\\\(^+\\\\)/K\\\\(^+\\\\) ATPase) to import glucose against its gradient

**2. Antiport (exchange):**
- Substances move in **opposite directions**
- Example: **Na\\\\(^+\\\\)/H\\\\(^+\\\\) exchanger** — Na\\\\(^+\\\\) enters (down its gradient), H\\\\(^+\\\\) exits (against its gradient), helping regulate intracellular pH

> **Key Concept:** Secondary active transport is "indirectly" active — it does not directly use ATP, but it depends on a gradient that was created by a primary active transporter that DID use ATP. The energy was stored in the gradient.

**In plants:** The H\\\\(^+\\\\) ATPase (proton pump) in the plasma membrane creates a proton gradient. This gradient powers secondary active transport of sucrose, amino acids, and other nutrients into the cell via H\\\\(^+\\\\)/solute symporters.
      \`
    },
    {
      id: 'mt4-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Secondary Active Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'In the small intestine, glucose is absorbed against its concentration gradient using a Na+/glucose symporter (SGLT1). Why is this considered secondary active transport?',
            options: [
              'It uses ATP directly to pump glucose',
              'It uses the Na+ gradient (created by the Na+/K+ ATPase) as an energy source — Na+ flows down its gradient, providing energy to move glucose against its gradient',
              'Glucose moves down its gradient alongside Na+',
              'It uses GTP instead of ATP'
            ],
            correctAnswer: 1,
            explanation: 'SGLT1 couples the downhill movement of Na+ (established by the Na+/K+ ATPase on the basolateral membrane) with the uphill movement of glucose. The energy for glucose transport comes indirectly from ATP — via the Na+ gradient — hence "secondary" active transport.'
          },
          {
            question: 'What is the difference between a symporter and an antiporter?',
            options: [
              'A symporter uses ATP; an antiporter does not',
              'A symporter moves two substances in the same direction; an antiporter moves them in opposite directions',
              'A symporter moves one substance; an antiporter moves two',
              'There is no functional difference'
            ],
            correctAnswer: 1,
            explanation: 'In symport (cotransport), both the ion and the transported molecule move in the same direction across the membrane. In antiport (exchange), the ion and transported molecule move in opposite directions. Both are powered by the existing ion gradient.'
          }
        ]
      }
    },
    {
      id: 'mt4-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Active Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'The pump that maintains the Na+ and K+ gradients in animal cells (common name):',
            answer: 'sodium-potassium pump',
            acceptableAnswers: ['sodium-potassium pump', 'Na+/K+ ATPase', 'Na/K ATPase', 'sodium potassium pump', 'Na+/K+ pump'],
            placeholder: 'e.g. calcium pump'
          },
          {
            question: 'A transporter where two substances move in the same direction:',
            answer: 'symporter',
            acceptableAnswers: ['symporter', 'Symporter', 'symport', 'cotransporter', 'cotransport'],
            placeholder: 'e.g. antiporter'
          },
          {
            question: 'Number of Na+ ions exported per cycle of the Na+/K+ ATPase:',
            answer: '3',
            acceptableAnswers: ['3', 'three', 'Three'],
            placeholder: 'e.g. 2'
          }
        ]
      }
    },
    {
      id: 'mt4-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Active Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'If a cell is treated with a metabolic poison that stops ATP production, which of the following would be directly affected?',
            options: [
              'Simple diffusion of O2 across the membrane',
              'Osmosis through aquaporins',
              'The Na+/K+ ATPase and all other primary active transport systems',
              'Facilitated diffusion of glucose through GLUT channels'
            ],
            correctAnswer: 2,
            explanation: 'Primary active transport (like the Na+/K+ ATPase) directly requires ATP. Without ATP, these pumps stop. Passive processes (simple diffusion, osmosis, facilitated diffusion) do not require ATP and would continue, though gradient-dependent secondary transport would gradually fail as the Na+ gradient collapses.'
          },
          {
            question: 'A drug called ouabain specifically inhibits the Na+/K+ ATPase. If ouabain is applied to intestinal epithelial cells, what would happen to glucose absorption via SGLT1?',
            options: [
              'Glucose absorption would increase',
              'Glucose absorption would decrease because the Na+ gradient that powers SGLT1 would collapse without the Na+/K+ ATPase to maintain it',
              'Glucose absorption would be unaffected because SGLT1 uses ATP directly',
              'The cells would switch to simple diffusion for glucose uptake'
            ],
            correctAnswer: 1,
            explanation: 'SGLT1 (secondary active transport) depends on the Na+ gradient maintained by the Na+/K+ ATPase (primary active transport). Ouabain inhibits the pump, causing Na+ to accumulate inside the cell, collapsing the Na+ gradient. Without this gradient, SGLT1 cannot drive glucose against its gradient.'
          }
        ]
      }
    }
  ]
};`;

// Part 5: Bulk Transport
const part5 = `export const bioMembraneTransportPart5Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt5-intro',
      type: 'text' as const,
      content: \`
## Bulk Transport — Vesicle-Mediated Movement

**Part 5 of 7**

Some materials are too large to cross the membrane through channels or carriers (e.g., proteins, polysaccharides, whole cells).  These are transported in membrane-bound **vesicles** through processes called **endocytosis** (into the cell) and **exocytosis** (out of the cell).

Both processes require **energy** (ATP) and involve the dynamic remodeling of the plasma membrane.
      \`
    },
    {
      id: 'mt5-exo',
      type: 'text' as const,
      content: \`
### Exocytosis — Secretion

In exocytosis, a **vesicle** fuses with the plasma membrane and releases its contents outside the cell:

1. Material is packaged into a vesicle (often by the Golgi apparatus)
2. The vesicle is transported to the cell surface along the cytoskeleton
3. **SNARE proteins** on the vesicle (v-SNARE) and target membrane (t-SNARE) interact, bringing the membranes together
4. The vesicle membrane fuses with the plasma membrane
5. Contents are released to the exterior; vesicle membrane becomes part of the plasma membrane

**Examples of exocytosis:**
- Secretion of neurotransmitters at synapses
- Release of hormones (insulin from beta cells)
- Secretion of digestive enzymes
- Secretion of extracellular matrix components
- Mucus secretion by goblet cells

> **Membrane Recycling:** Exocytosis adds membrane to the plasma membrane. This is balanced by endocytosis, which removes membrane — keeping the total surface area relatively constant.
      \`
    },
    {
      id: 'mt5-endo',
      type: 'text' as const,
      content: \`
### Endocytosis — Uptake

Endocytosis is the inward folding of the plasma membrane to form a vesicle that brings material INTO the cell:

**Three types of endocytosis:**

| Type | Mechanism | What is taken in | Example |
|------|-----------|-----------------|---------|
| **Phagocytosis** ("cell eating") | Cell extends pseudopods to engulf large particles | Cells, bacteria, debris | Macrophages engulfing pathogens |
| **Pinocytosis** ("cell drinking") | Small indentations of membrane capture droplets of extracellular fluid | Small dissolved molecules in fluid | Most cell types; non-specific |
| **Receptor-mediated endocytosis** | Specific molecules bind to receptors, triggering clathrin-coated pit formation | Specific molecules (ligands) | Cholesterol uptake via LDL receptors |

**Receptor-mediated endocytosis in detail:**
1. Ligands (e.g., LDL particles carrying cholesterol) bind to specific receptor proteins on the cell surface
2. Receptors cluster in **clathrin-coated pits** — regions of the membrane lined with the protein clathrin on the cytoplasmic side
3. The coated pit invaginates (folds inward) and pinches off as a **clathrin-coated vesicle**
4. The clathrin coat is removed; the vesicle fuses with an **early endosome**
5. Contents are processed (e.g., LDL is broken down to release cholesterol)
6. Receptors may be recycled back to the membrane

> **Clinical Connection:** In **familial hypercholesterolemia**, mutations in the LDL receptor reduce or eliminate receptor-mediated endocytosis of LDL cholesterol. Cholesterol accumulates in the blood, dramatically increasing the risk of cardiovascular disease.
      \`
    },
    {
      id: 'mt5-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Bulk Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'A macrophage engulfs a bacterium by extending pseudopods around it and forming a phagosome. This is an example of:',
            options: [
              'Pinocytosis',
              'Receptor-mediated endocytosis',
              'Phagocytosis',
              'Exocytosis'
            ],
            correctAnswer: 2,
            explanation: 'Phagocytosis ("cell eating") involves the extension of pseudopods to surround and engulf large particles (like bacteria). The resulting vesicle is called a phagosome, which fuses with a lysosome for digestion.'
          },
          {
            question: 'Why is receptor-mediated endocytosis more efficient than pinocytosis for taking up specific molecules like cholesterol?',
            options: [
              'It uses more ATP',
              'Receptors concentrate specific molecules in clathrin-coated pits before internalization, enabling selective and efficient uptake even at low extracellular concentrations',
              'Pinocytosis cannot take in molecules at all',
              'Receptor-mediated endocytosis does not require membrane invagination'
            ],
            correctAnswer: 1,
            explanation: 'Receptor-mediated endocytosis is specific — receptors bind particular ligands and cluster them in coated pits. This concentrating effect allows cells to take up specific molecules efficiently, even when their external concentration is very low. Pinocytosis is non-specific and takes in whatever is dissolved in the fluid.'
          },
          {
            question: 'A neuron releases acetylcholine at a synapse by vesicle fusion with the presynaptic membrane. This is:',
            options: [
              'Endocytosis',
              'Phagocytosis',
              'Exocytosis',
              'Facilitated diffusion'
            ],
            correctAnswer: 2,
            explanation: 'Neurotransmitter release is a classic example of exocytosis. Synaptic vesicles containing acetylcholine fuse with the presynaptic membrane (mediated by SNARE proteins), releasing the neurotransmitter into the synaptic cleft.'
          }
        ]
      }
    },
    {
      id: 'mt5-comparison',
      type: 'text' as const,
      content: \`
### Comprehensive Comparison of All Transport Types

| Transport Type | Direction relative to gradient | Energy required? | Protein required? | Examples |
|---------------|-------------------------------|-----------------|------------------|---------|
| Simple diffusion | Down | No | No | O\\\\(_2\\\\), CO\\\\(_2\\\\), ethanol |
| Facilitated diffusion (channels) | Down | No | Yes (channel) | K\\\\(^+\\\\) leak channels, aquaporins |
| Facilitated diffusion (carriers) | Down | No | Yes (carrier) | GLUT glucose transporters |
| Primary active transport | Against | Yes (ATP) | Yes (pump) | Na\\\\(^+\\\\)/K\\\\(^+\\\\) ATPase, Ca\\\\(^{2+}\\\\) ATPase |
| Secondary active transport | Against (for cargo) | Yes (indirect — gradient) | Yes (cotransporter) | SGLT1, Na\\\\(^+\\\\)/H\\\\(^+\\\\) exchanger |
| Exocytosis | Out of cell | Yes (ATP) | Yes (SNAREs) | Neurotransmitter release, insulin secretion |
| Endocytosis | Into cell | Yes (ATP) | Yes (clathrin, receptors) | Phagocytosis, LDL receptor uptake |
      \`
    },
    {
      id: 'mt5-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Bulk Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'The protein that coats the cytoplasmic side of membrane pits during receptor-mediated endocytosis:',
            answer: 'clathrin',
            acceptableAnswers: ['clathrin', 'Clathrin'],
            placeholder: 'e.g. actin'
          },
          {
            question: 'The general term for vesicle fusion with the plasma membrane to release contents outside the cell:',
            answer: 'exocytosis',
            acceptableAnswers: ['exocytosis', 'Exocytosis'],
            placeholder: 'e.g. endocytosis'
          },
          {
            question: 'The type of endocytosis that is non-specific and takes in extracellular fluid:',
            answer: 'pinocytosis',
            acceptableAnswers: ['pinocytosis', 'Pinocytosis', 'cell drinking'],
            placeholder: 'e.g. phagocytosis'
          }
        ]
      }
    },
    {
      id: 'mt5-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Match the Transport Type
      \`,
      exercise: {
        questions: [
          {
            question: 'A white blood cell engulfing a pathogen:',
            options: ['Exocytosis', 'Phagocytosis', 'Pinocytosis', 'Receptor-mediated endocytosis'],
            correctAnswer: 'Phagocytosis'
          },
          {
            question: 'LDL cholesterol binding to receptors and being internalized via coated pits:',
            options: ['Exocytosis', 'Phagocytosis', 'Pinocytosis', 'Receptor-mediated endocytosis'],
            correctAnswer: 'Receptor-mediated endocytosis'
          },
          {
            question: 'Insulin packaged by the Golgi being released from a beta cell:',
            options: ['Exocytosis', 'Phagocytosis', 'Pinocytosis', 'Receptor-mediated endocytosis'],
            correctAnswer: 'Exocytosis'
          }
        ]
      }
    },
    {
      id: 'mt5-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Bulk Transport
      \`,
      exercise: {
        questions: [
          {
            question: 'A cell is actively performing endocytosis. Over time, what would happen to the plasma membrane if exocytosis did not also occur?',
            options: [
              'The membrane would grow larger and larger',
              'The plasma membrane surface area would decrease as membrane is internalized, potentially compromising cell function',
              'Nothing — membrane is continuously synthesized at the same rate',
              'The cell would divide to compensate'
            ],
            correctAnswer: 1,
            explanation: 'Each endocytic event removes a portion of the plasma membrane to form a vesicle. Without compensating exocytosis (which adds membrane back), the plasma membrane would shrink. In healthy cells, these processes are balanced to maintain constant membrane area.'
          }
        ]
      }
    }
  ]
};`;

// Part 6: Problem-Solving Workshop
const part6 = `export const bioMembraneTransportPart6Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt6-intro',
      type: 'text' as const,
      content: \`
## Problem-Solving Workshop — Membrane Transport

**Part 6 of 7**

This workshop applies membrane and transport concepts to experimental scenarios and calculations commonly tested on the AP Biology exam.
      \`
    },
    {
      id: 'mt6-scenario1',
      type: 'text' as const,
      content: \`
### Scenario 1: Dialysis Tubing Experiment

A student fills a dialysis tubing bag (selectively permeable — allows water and small molecules to pass, but not large molecules like starch or protein) with a solution of 5% starch and 2% glucose, then places it in a beaker containing 0% starch and 10% glucose.

**After 30 minutes, the student tests:**

| Substance | Inside bag | Outside bag (beaker) |
|-----------|-----------|---------------------|
| Starch (tested with iodine) | Present | Absent |
| Glucose (tested with Benedict reagent) | Present | Present |
| Bag mass | Increased | — |

**Analysis:**
- Starch molecules are too large to cross the dialysis membrane — they stayed inside
- Glucose molecules are small enough to cross — glucose moved from the beaker (high, 10%) into the bag (low, 2%) by diffusion
- The bag gained mass because water moved in by osmosis (the interior solution had higher total solute concentration initially)
      \`
    },
    {
      id: 'mt6-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 1 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'Why was glucose found in the beaker after 30 minutes even though it started at a higher concentration in the beaker?',
            options: [
              'Starch was converted to glucose outside the bag',
              'Glucose diffused in both directions, but the NET movement was from the beaker (10%) into the bag (2%); at 30 minutes, glucose is present in both compartments as it approaches equilibrium',
              'Glucose leaked through pores in the tubing only outward',
              'The tubing is impermeable to glucose'
            ],
            correctAnswer: 1,
            explanation: 'Diffusion is a two-way process. Glucose molecules move randomly in both directions across the membrane. The NET movement is from high to low concentration (beaker to bag). After 30 minutes, glucose is present on both sides as the system approaches equilibrium.'
          },
          {
            question: 'The bag gained mass. This is best explained by:',
            options: [
              'Starch entered the bag from the beaker',
              'Net water movement into the bag by osmosis — the bag contents had a higher total solute concentration (more negative water potential) initially',
              'Glucose accumulating inside the bag made it heavier',
              'The dialysis tubing expanded'
            ],
            correctAnswer: 1,
            explanation: 'The solution inside the bag had starch (5%) plus glucose (initially 2%), while the beaker had only glucose (10%). The total solute concentration inside was higher, meaning the water potential inside was lower. Water moved into the bag by osmosis, increasing its mass.'
          }
        ]
      }
    },
    {
      id: 'mt6-scenario2',
      type: 'text' as const,
      content: \`
### Scenario 2: Water Potential Calculation

A student places potato core cylinders into sucrose solutions of different concentrations and measures the percent change in mass after 24 hours:

| Sucrose Molarity | % Change in Mass |
|-----------------|-----------------|
| 0.0 M | +18.0% |
| 0.2 M | +8.0% |
| 0.4 M | -1.0% |
| 0.6 M | -10.0% |
| 0.8 M | -17.0% |
| 1.0 M | -19.0% |

The approximate **isotonic point** (0% change in mass) is at ~0.38 M sucrose — this is the molar concentration of solute inside the potato cells.

At the isotonic point, the water potential of the solution equals the water potential of the potato cells.

For the 0.4 M solution at 22 °C:
$$\\\\Psi_s = -iCRT = -(1)(0.4)(0.0831)(295) = -9.8 \\\\text{ bars}$$

Since the potato is in a hypotonic solution at 0.2 M (gains mass), water enters. In a hypertonic solution at 0.6 M (loses mass), water exits.
      \`
    },
    {
      id: 'mt6-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 2 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'At 0.0 M sucrose (pure water), the potato gained 18% mass. Why?',
            options: [
              'The potato absorbed sucrose from the water',
              'Pure water has maximum water potential (0 bars); the potato cells have a negative water potential due to dissolved solutes; water moves from high to low water potential — into the cells',
              'The potato expanded due to increased temperature',
              'Starch in the potato attracted water molecules chemically'
            ],
            correctAnswer: 1,
            explanation: 'Pure water has a water potential of 0 bars (the maximum). The potato cells contain dissolved solutes, giving them a negative water potential. Water moves from the solution (higher \\u03A8) into the cells (lower \\u03A8) by osmosis, causing the potato to gain mass.'
          },
          {
            question: 'If the potato cores were boiled before placing them in the solutions, how would the results differ?',
            options: [
              'Results would be identical',
              'Boiled potato cells would have disrupted membranes, eliminating selective permeability; osmosis could not occur normally, and results would be different (likely much less change in mass)',
              'Boiled potatoes would gain more mass in all solutions',
              'Boiling would increase the solute concentration in potato cells'
            ],
            correctAnswer: 1,
            explanation: 'Boiling denatures membrane proteins and disrupts the phospholipid bilayer, destroying selective permeability. Without intact membranes, osmosis cannot function properly. Solutes would also leak out of the cells, further disrupting the expected results.'
          }
        ]
      }
    },
    {
      id: 'mt6-input',
      type: 'input-boxes' as const,
      content: \`
### Apply Your Knowledge
      \`,
      exercise: {
        questions: [
          {
            question: 'In the potato experiment, the approximate sucrose concentration that is isotonic to the potato cells (in M):',
            answer: '0.38',
            acceptableAnswers: ['0.38', '0.4', '0.38 M', '0.4 M', 'about 0.4'],
            placeholder: 'e.g. 0.5'
          },
          {
            question: 'At concentrations above the isotonic point, potato cores lost mass because the solution was (hypertonic/hypotonic):',
            answer: 'hypertonic',
            acceptableAnswers: ['hypertonic', 'Hypertonic'],
            placeholder: 'e.g. isotonic'
          }
        ]
      }
    },
    {
      id: 'mt6-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Workshop
      \`,
      exercise: {
        questions: [
          {
            question: 'E. coli bacteria have a cell wall and live in varying osmotic environments. If placed in distilled water, E. coli will:',
            options: [
              'Lyse immediately like a red blood cell',
              'Swell slightly but survive — the cell wall prevents excessive expansion, similar to a plant cell becoming turgid',
              'Lose water and shrink',
              'The cell wall dissolves'
            ],
            correctAnswer: 1,
            explanation: 'Like plant cells, bacteria have a cell wall that provides structural support. In a hypotonic environment, water enters by osmosis, but the cell wall resists expansion and generates turgor pressure. The cell swells slightly but does not lyse under normal conditions (unlike animal cells which lack a cell wall).'
          },
          {
            question: 'A cell is observed to transport glucose against its concentration gradient using a Na+/glucose symporter. If the extracellular Na+ concentration is reduced to match the intracellular concentration, what happens to glucose transport?',
            options: [
              'Glucose transport increases',
              'Glucose transport stops because the Na+ gradient that provides the driving force has been eliminated',
              'Glucose transport switches to active pumping using ATP',
              'The symporter begins to export glucose instead'
            ],
            correctAnswer: 1,
            explanation: 'The Na+/glucose symporter (SGLT1) is powered by the Na+ gradient — Na+ flows down its gradient, providing energy to move glucose against its gradient. If the Na+ gradient is eliminated, there is no energy source to drive glucose transport, and it stops.'
          }
        ]
      }
    }
  ]
};`;

// Part 7: AP Review
const part7 = `export const bioMembraneTransportPart7Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt7-intro',
      type: 'text' as const,
      content: \`
## AP Review — Membrane Transport

**Part 7 of 7**

Comprehensive AP-exam-style questions integrating concepts from all parts of the membrane transport unit.
      \`
    },
    {
      id: 'mt7-summary',
      type: 'text' as const,
      content: \`
### Key Principles Summary

1. **Membranes are selectively permeable** — small nonpolar molecules cross freely; large, polar, and charged molecules need transport proteins
2. **Passive transport** follows the gradient (no ATP); **active transport** goes against the gradient (requires ATP, directly or indirectly)
3. **Water potential** determines the direction of osmosis: \\\\(\\\\Psi = \\\\Psi_s + \\\\Psi_p\\\\); water moves from high \\\\(\\\\Psi\\\\) to low \\\\(\\\\Psi\\\\)
4. **The Na+/K+ ATPase** is the foundation for many secondary transport processes and helps maintain the resting membrane potential
5. **Bulk transport** (endocytosis/exocytosis) handles large molecules and particles via membrane vesicles
      \`
    },
    {
      id: 'mt7-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 1
      \`,
      exercise: {
        questions: [
          {
            question: 'A cell is placed in an isotonic solution containing a solute that slowly permeates the membrane. Over time, what will happen?',
            options: [
              'The cell will remain unchanged indefinitely',
              'As the permeating solute enters the cell and equilibrates, the non-permeating solutes inside the cell make the interior hypertonic; water will enter by osmosis and the cell will swell',
              'The cell will shrink as the solute draws water out',
              'The solute will be actively pumped out'
            ],
            correctAnswer: 1,
            explanation: 'Initially, the solution is isotonic (equal total solute). As the permeating solute crosses the membrane and equilibrates, it no longer contributes to the osmotic gradient. But the non-permeating solutes inside the cell still exert osmotic pressure, making the interior effectively hypertonic relative to the outside. Water enters, and the cell swells.'
          },
          {
            question: 'Cystic fibrosis is caused by a mutation in the CFTR protein, a Cl- channel in epithelial cells. Defective CFTR prevents normal Cl- secretion. How does this lead to thick, sticky mucus?',
            options: [
              'Cl- directly makes mucus thicker',
              'Without Cl- secretion, less water follows by osmosis to hydrate the mucus layer, resulting in dehydrated, thick mucus that is difficult to clear',
              'The mutation causes excess mucus production',
              'CFTR normally transports mucus proteins'
            ],
            correctAnswer: 1,
            explanation: 'Normally, CFTR exports Cl- to the epithelial surface, and Na+ follows electrically. The resulting NaCl concentration outside the cell draws water out by osmosis, keeping the mucus hydrated. Without functional CFTR, Cl- and water do not exit, and mucus becomes dehydrated and thick.'
          },
          {
            question: 'During a nerve impulse, Na+ channels open and Na+ rushes into the cell. This Na+ movement is:',
            options: [
              'Active transport — it requires ATP',
              'Facilitated diffusion — Na+ moves down its electrochemical gradient through a channel protein, requiring no ATP',
              'Simple diffusion — Na+ passes directly through the lipid bilayer',
              'Exocytosis — Na+ is released from vesicles'
            ],
            correctAnswer: 1,
            explanation: 'Na+ flows through voltage-gated Na+ channels down its electrochemical gradient (high Na+ outside, membrane potential is negative inside — both concentration and electrical gradients favor Na+ entry). No ATP is directly required for this movement. The Na+/K+ ATPase later restores the gradient.'
          }
        ]
      }
    },
    {
      id: 'mt7-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 2
      \`,
      exercise: {
        questions: [
          {
            question: 'Paramecium (a freshwater protist) has a contractile vacuole that periodically expels water. Why is this organelle necessary?',
            options: [
              'To excrete metabolic waste',
              'Because the freshwater environment is hypotonic — water constantly enters by osmosis, and without the contractile vacuole, the cell would burst',
              'To take in nutrients from the environment',
              'To maintain the cell wall'
            ],
            correctAnswer: 1,
            explanation: 'Freshwater is hypotonic relative to the cytoplasm of Paramecium. Water continuously enters by osmosis. The contractile vacuole collects excess water and periodically contracts to expel it, preventing cell lysis. This process requires ATP — it is an active, energy-consuming process.'
          },
          {
            question: 'A researcher discovers that a particular drug increases membrane fluidity and slightly increases the permeability of the lipid bilayer to small polar molecules. What is a likely mechanism?',
            options: [
              'The drug is inserting between phospholipids and disrupting their packing, similar to the effect of unsaturated fatty acids',
              'The drug is adding more cholesterol to the membrane',
              'The drug is cross-linking membrane proteins',
              'The drug is dehydrating the membrane'
            ],
            correctAnswer: 0,
            explanation: 'A drug that inserts between phospholipids would disrupt the tight packing of the hydrophobic tails, increasing fluidity. Greater fluidity creates transient gaps that allow small polar molecules to slip through more easily. This is similar to how unsaturated fatty acids increase permeability.'
          },
          {
            question: 'Aquaporins increase the rate of osmosis by 10-100 fold compared to diffusion through the lipid bilayer alone. If all aquaporins were suddenly blocked, would osmosis stop?',
            options: [
              'Yes — without aquaporins, water cannot cross the membrane',
              'No — water can still cross slowly by diffusing through the lipid bilayer; aquaporins simply accelerate the process',
              'No — water would use Na+/K+ ATPase pumps instead',
              'Yes — lipid bilayers are completely impermeable to water'
            ],
            correctAnswer: 1,
            explanation: 'Water is a small enough molecule to diffuse slowly through the lipid bilayer. Aquaporins dramatically increase the rate of water movement but are not absolutely required. Without them, osmosis continues at a much slower rate through the bilayer itself.'
          }
        ]
      }
    },
    {
      id: 'mt7-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Comprehensive Matching
      \`,
      exercise: {
        questions: [
          {
            question: 'O2 crossing the membrane without a protein:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Active transport', 'Endocytosis'],
            correctAnswer: 'Simple diffusion'
          },
          {
            question: 'Glucose entering a cell via GLUT transporter down its gradient:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Active transport', 'Endocytosis'],
            correctAnswer: 'Facilitated diffusion'
          },
          {
            question: 'Na+ being pumped out of a cell against its gradient using ATP:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Primary active transport', 'Secondary active transport'],
            correctAnswer: 'Primary active transport'
          },
          {
            question: 'Glucose entering intestinal cells via Na+/glucose symporter:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Primary active transport', 'Secondary active transport'],
            correctAnswer: 'Secondary active transport'
          },
          {
            question: 'A macrophage engulfing a bacterial cell:',
            options: ['Pinocytosis', 'Phagocytosis', 'Exocytosis', 'Facilitated diffusion'],
            correctAnswer: 'Phagocytosis'
          }
        ]
      }
    },
    {
      id: 'mt7-input',
      type: 'input-boxes' as const,
      content: \`
### Final Review
      \`,
      exercise: {
        questions: [
          {
            question: 'The formula for water potential:',
            answer: 'psi = psi_s + psi_p',
            acceptableAnswers: ['psi = psi_s + psi_p', 'water potential = solute potential + pressure potential', 'Psi = Psi_s + Psi_p'],
            placeholder: 'e.g. PV = nRT'
          },
          {
            question: 'The disease caused by a defective Cl- channel (CFTR) in epithelial cells:',
            answer: 'cystic fibrosis',
            acceptableAnswers: ['cystic fibrosis', 'Cystic fibrosis', 'CF', 'Cystic Fibrosis'],
            placeholder: 'e.g. sickle cell disease'
          }
        ]
      }
    },
    {
      id: 'mt7-exit',
      type: 'multiple-choice' as const,
      content: \`
### Final Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'A biologist discovers a unicellular organism in a hot spring. Its membrane has an unusually high proportion of saturated fatty acids and is reinforced with unique lipid-spanning molecules. What is the most likely advantage of this membrane composition?',
            options: [
              'It increases membrane fluidity at high temperatures',
              'It maintains membrane stability and prevents excessive fluidity at the extreme temperatures of the hot spring',
              'It allows the organism to photosynthesize more efficiently',
              'It increases the rate of active transport'
            ],
            correctAnswer: 1,
            explanation: 'At high temperatures (60-80+ °C), a typical membrane would become excessively fluid and leaky. Saturated fatty acids pack tightly, and lipid-spanning molecules (like those in archaeal membranes) form a rigid monolayer, maintaining membrane integrity at extreme temperatures.'
          },
          {
            question: 'Integration question: A cell requires glucose, which is at lower concentration outside than inside. Na+ is at higher concentration outside. The cell uses an Na+/glucose symporter. Identify the transport type for each molecule.',
            options: [
              'Both are actively transported using ATP',
              'Na+ moves by facilitated diffusion (down its gradient); glucose moves by secondary active transport (against its gradient, powered by the Na+ gradient)',
              'Both move by facilitated diffusion',
              'Glucose moves by simple diffusion; Na+ is actively pumped'
            ],
            correctAnswer: 1,
            explanation: 'In the symporter, Na+ moves down its electrochemical gradient (facilitated by the transporter — no ATP needed for Na+ movement itself). The energy released by Na+ entry drives glucose into the cell against its concentration gradient. This is secondary active transport for glucose, coupled to passive transport for Na+.'
          }
        ]
      }
    }
  ]
};`;

// Write all files
const files = {
  'bio-membrane-transport-part1.ts': part1,
  'bio-membrane-transport-part2.ts': part2,
  'bio-membrane-transport-part3.ts': part3,
  'bio-membrane-transport-part4.ts': part4,
  'bio-membrane-transport-part5.ts': part5,
  'bio-membrane-transport-part6.ts': part6,
  'bio-membrane-transport-part7.ts': part7,
};

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(BASE, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${filePath} (${content.length} chars)`);
}

console.log('Done! All 7 membrane-transport parts written.');
