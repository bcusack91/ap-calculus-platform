export const bioPlantStructureFunctionPart2Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt2-intro',
      type: 'text' as const,
      content: `# Water Transport in Plants 💧

How does water travel from the soil to the top of a 100-meter tall redwood tree — against gravity, with no pump? The answer lies in the **transpiration-cohesion-tension** mechanism.

## Water Potential ($\\Psi$)

Water moves from regions of **higher water potential** to regions of **lower water potential**. Water potential is measured in megapascals (MPa).

$$\\Psi = \\Psi_s + \\Psi_p$$

| Symbol | Name | Description |
|---|---|---|
| $\\Psi$ | Water potential | Total tendency of water to move |
| $\\Psi_s$ | Solute potential (osmotic potential) | Always ≤ 0; more solute → more negative |
| $\\Psi_p$ | Pressure potential | Can be positive (turgor) or negative (tension) |

### Key Rules
- **Pure water** at atmospheric pressure: $\\Psi = 0$ MPa
- Adding solute **decreases** water potential (makes $\\Psi_s$ more negative)
- Positive pressure (turgor) **increases** water potential
- Negative pressure (tension/suction) **decreases** water potential
- Water **always** flows from high $\\Psi$ to low $\\Psi$

### Calculating Solute Potential

$$\\Psi_s = -iCRT$$

| Variable | Meaning |
|---|---|
| $i$ | Ionization constant (1 for sugar, 2 for NaCl) |
| $C$ | Molar concentration (mol/L) |
| $R$ | Pressure constant = 0.0831 L·bar/mol·K |
| $T$ | Temperature in Kelvin (°C + 273) |`
    },
    {
      id: 'plt2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Water Potential** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A plant cell has a solute potential of −0.7 MPa and a pressure potential of +0.4 MPa. What is its water potential?',
            options: ['−1.1 MPa', '−0.3 MPa', '+0.3 MPa', '+1.1 MPa'],
            correctAnswer: 1,
            explanation: 'Water potential = Ψs + Ψp = (−0.7) + (+0.4) = −0.3 MPa. Water potential is the sum of solute potential and pressure potential.'
          },
          {
            question: 'Water will move from a cell with Ψ = −0.2 MPa to an adjacent cell with Ψ = −0.8 MPa. Why?',
            options: [
              'Water moves from low to high water potential',
              'Water moves from high to low water potential (−0.2 > −0.8)',
              'Water moves toward higher solute concentration only',
              'Water moves toward higher pressure potential only'
            ],
            correctAnswer: 1,
            explanation: 'Water always moves from higher water potential to lower water potential. Since −0.2 MPa is greater than −0.8 MPa, water flows from the first cell to the second cell.'
          },
          {
            question: 'If you add NaCl to pure water, what happens to the water potential?',
            options: [
              'It increases because NaCl raises pressure potential',
              'It stays the same — ions don\'t affect water potential',
              'It decreases because the solute potential becomes more negative',
              'It increases because more particles are present'
            ],
            correctAnswer: 2,
            explanation: 'Adding solute to water makes the solute potential (Ψs) more negative, which decreases the overall water potential. NaCl dissociates into $Na^{+}$ and $Cl^{-}$ (i = 2), having an even greater effect than a non-ionizing solute.'
          }
        ]
      }
    },
    {
      id: 'plt2-content2',
      type: 'text' as const,
      content: `## The Transpiration-Cohesion-Tension Mechanism

This is the primary mechanism for long-distance water transport in plants. It works as a continuous chain from leaves to roots:

### Step 1: Transpiration (the "Pull")
- Water evaporates from **mesophyll cells** into leaf air spaces
- Water vapor exits through open **stomata**
- This creates **negative pressure (tension)** in leaf xylem

### Step 2: Cohesion-Adhesion (the "Chain")
- **Cohesion**: Water molecules stick to each other via hydrogen bonds
- **Adhesion**: Water molecules stick to xylem cell walls
- Together, they maintain a continuous column of water from roots to leaves
- This is the same property that creates a **meniscus** in a glass tube

### Step 3: Water Uptake (the "Source")
- Tension pulls water up from roots through xylem
- Roots absorb water from soil by **osmosis** (water moves toward lower Ψ in root cells)

| Factor | Effect on Transpiration Rate |
|---|---|
| High temperature | Increases (more evaporation) |
| High humidity | Decreases (less vapor gradient) |
| Wind | Increases (removes humid air layer) |
| Light | Increases (stomata open) |
| Dry soil | Decreases (stomata close to conserve water) |

## Stomata and Guard Cells

**Stomata** are pores on leaf surfaces (mainly lower epidermis) that regulate gas exchange:

| State | Mechanism | Result |
|---|---|---|
| **Open** | Guard cells take up $K^{+}$ → water enters by osmosis → cells swell | $CO_{2}$ enters, $O_{2}$ and $H_{2}O$ exit |
| **Closed** | $K^{+}$ leaves guard cells → water exits → cells become flaccid | Reduces water loss |

### What controls stomata opening?
- **Light** → blue light activates proton pumps → $K^{+}$ uptake → stomata open
- **Low $CO_{2}$** inside leaf → stomata open to allow $CO_{2}$ entry
- **Abscisic acid (ABA)** → released during drought → causes stomata to close
- **Circadian rhythms** → stomata typically open during day, close at night`
    },
    {
      id: 'plt2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Transpiration & Stomata** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which property of water is most directly responsible for maintaining a continuous column of water in the xylem?',
            options: [
              'Water\'s high specific heat',
              'Water\'s cohesion via hydrogen bonding',
              'Water\'s ability to dissolve solutes',
              'Water\'s low density as ice'
            ],
            correctAnswer: 1,
            explanation: 'Cohesion — the attraction between water molecules via hydrogen bonding — keeps water molecules linked in a continuous column from roots to leaves. This is essential for the transpiration-cohesion-tension mechanism.'
          },
          {
            question: 'Guard cells open stomata by:',
            options: [
              'Losing water and becoming flaccid',
              'Actively pumping $K^{+}$ in, causing water to enter by osmosis',
              'Contracting their cell walls like muscle cells',
              'Releasing abscisic acid to nearby cells'
            ],
            correctAnswer: 1,
            explanation: 'Guard cells take up $K^{+}$ ions (potassium) actively, which lowers their water potential. Water enters by osmosis, the cells swell, and the stomatal pore opens due to the thickened inner wall bending outward.'
          }
        ]
      }
    },
    {
      id: 'plt2-content3',
      type: 'text' as const,
      content: `## Root Water Uptake Pathways

Water travels from the soil into the root xylem via three pathways:

| Pathway | Route | Key Feature |
|---|---|---|
| **Apoplast** | Through cell walls and extracellular spaces | Fast; does NOT cross membranes |
| **Symplast** | Through cytoplasm via plasmodesmata | Crosses membranes once at entry |
| **Transmembrane** | Across cell membranes of each cell | Slowest; crosses many membranes |

### The Casparian Strip — A Critical Checkpoint

The **endodermis** is a layer of cells surrounding the vascular cylinder of the root. Its cell walls contain the **Casparian strip** — a band of **suberin** (waxy substance) that blocks the apoplast pathway.

**Why does this matter?**
- Forces all water and dissolved minerals to pass **through** endodermal cell membranes
- Allows the plant to **selectively control** which minerals enter the xylem
- Prevents toxic substances and pathogens from freely entering the vascular system
- Acts as a one-way valve: minerals are actively loaded into xylem by transport proteins`
    },
    {
      id: 'plt2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Water Transport** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Water potential is calculated as Ψ = Ψs + ___.',
            options: ['Ψp', 'Ψg', 'Ψm', 'Ψr']
          },
          {
            label: 'The property of water molecules sticking to each other via hydrogen bonds is called ___.',
            options: ['cohesion', 'adhesion', 'transpiration', 'osmosis']
          },
          {
            label: 'The ___ in the endodermis forces water to cross cell membranes before entering the vascular cylinder.',
            options: ['Casparian strip', 'cuticle', 'cortex', 'pericycle']
          },
          {
            label: 'When drought conditions occur, the hormone ___ triggers stomata to close.',
            options: ['abscisic acid', 'auxin', 'gibberellin', 'cytokinin']
          }
        ],
        correctAnswers: ['Ψp', 'cohesion', 'Casparian strip', 'abscisic acid'],
        hint1: 'The two components are solute potential and pressure potential.',
        hint2: 'Think about how water molecules interact with each other vs. with surfaces.',
        hint3: 'This structure contains suberin and acts as a checkpoint in the root.',
        explanation: 'Water potential equals solute potential (Ψs) plus pressure potential (Ψp). Cohesion holds water molecules together in the xylem column. The Casparian strip forces selective membrane transport at the endodermis. Abscisic acid (ABA) is the drought-response hormone that closes stomata.'
      }
    }
  ]
}
