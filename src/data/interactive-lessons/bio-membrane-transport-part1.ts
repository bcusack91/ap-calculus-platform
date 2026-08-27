export const bioMembraneTransportPart1Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt1-intro',
      type: 'text' as const,
      content: `
## Membrane Structure — The Fluid Mosaic Model

**Part 1 of 7**

The plasma membrane is far more than a passive barrier — it is a dynamic, selectively permeable structure that regulates the flow of materials into and out of the cell.  Understanding membrane structure is essential for understanding transport mechanisms.

The modern model of membrane structure is the **fluid mosaic model**, proposed by Singer and Nicolson in 1972.
      `
    },
    {
      id: 'mt1-phospholipids',
      type: 'text' as const,
      content: `
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

> **Why "fluid"?** Phospholipids can move **laterally** within their leaflet (~10$^7$ times per second) but rarely **flip-flop** between leaflets (requires flippase enzymes).  Membrane proteins also move laterally, as demonstrated by the **Frye-Edidin experiment** (1970) using fluorescent labels on human and mouse cells fused into heterokaryons.
      `
    },
    {
      id: 'mt1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Phospholipid Bilayer
      `,
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
      content: `
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
      `
    },
    {
      id: 'mt1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Membrane Proteins
      `,
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
      content: `
### Selective Permeability

The lipid bilayer is selectively permeable — it allows some substances to cross freely while restricting others:

| Can cross freely | Cannot cross freely |
|-----------------|-------------------|
| Small, nonpolar molecules (O$_2$, CO$_2$, N$_2$) | Large, polar molecules (glucose, amino acids) |
| Small, uncharged polar molecules (H$_2$O — slowly, ethanol) | Ions (Na$^+$, K$^+$, Cl$^-$, Ca$^{2+}$) |
| Lipid-soluble molecules (steroid hormones) | Charged molecules (ATP, proteins) |

Substances that cannot cross freely require **transport proteins** (channels or carriers) to cross the membrane.  This selective control allows the cell to maintain an internal environment very different from the exterior.
      `
    },
    {
      id: 'mt1-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Membrane Structure
      `,
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
      content: `
### Match the Membrane Component
      `,
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
      content: `
### Exit Ticket — Membrane Structure
      `,
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
};