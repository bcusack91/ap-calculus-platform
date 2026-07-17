export const bioPlantStructureFunctionPart7Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt7-intro',
      type: 'text' as const,
      content: `# AP Exam Practice: Plant Structure & Function 📝

This section provides AP-style practice problems covering water potential calculations, hormone experiments, and transport mechanisms. These question types frequently appear on the AP Biology exam.

## Water Potential Calculation Review

Remember the key formulas:

$$\\Psi = \\Psi_s + \\Psi_p$$

$$\\Psi_s = -iCRT$$

| Variable | Value |
|---|---|
| $i$ | Ionization constant (1 for glucose/sucrose, 2 for NaCl, 3 for $CaCl_{2}$) |
| $C$ | Molar concentration (mol/L) |
| $R$ | 0.0831 L·bar/mol·K |
| $T$ | Temperature in Kelvin (°C + 273) |

### Example Calculation

**Problem**: A 0.5 M sucrose solution at 25°C in an open container. Calculate Ψ.

**Solution**:
- $\\Psi_s = -iCRT = -(1)(0.5)(0.0831)(298) = -12.38$ bar
- $\\Psi_p = 0$ (open container, no physical pressure)
- $\\Psi = -12.38 + 0 = -12.38$ bar`
    },
    {
      id: 'plt7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Water Potential Problems** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A plant cell is placed in a 0.3 M NaCl solution at 22°C. The cell has a pressure potential of +3.5 bar. What is the water potential of the cell? (Use i = 2 for NaCl, R = 0.0831)',
            options: [
              '−11.18 bar',
              '−14.68 bar',
              '−4.18 bar',
              '+3.5 bar'
            ],
            correctAnswer: 0,
            explanation: 'Ψs = −iCRT = −(2)(0.3)(0.0831)(295) = −14.68 bar. Wait — the question asks about the cell, which has Ψp = +3.5 bar. If the cell is at equilibrium with the solution, the cell\'s Ψs would equal the solution\'s Ψs. Ψ(cell) = Ψs + Ψp = −14.68 + 3.5 = −11.18 bar.'
          },
          {
            question: 'Two cells are adjacent. Cell A has Ψ = −0.5 MPa. Cell B has Ψ = −0.9 MPa. In which direction will water move, and why?',
            options: [
              'From B to A, because B has a more negative water potential',
              'From A to B, because water moves from higher to lower water potential',
              'No movement, because both have negative water potential',
              'From B to A, because B has higher solute concentration'
            ],
            correctAnswer: 1,
            explanation: 'Water always moves from higher Ψ to lower Ψ. Cell A (Ψ = −0.5 MPa) has a higher water potential than Cell B (Ψ = −0.9 MPa), so water moves from A → B. Remember: −0.5 > −0.9 on the number line.'
          },
          {
            question: 'A cell at full turgor in pure water has Ψs = −0.8 MPa. What is its pressure potential?',
            options: ['+0.8 MPa', '−0.8 MPa', '0 MPa', '+1.6 MPa'],
            correctAnswer: 0,
            explanation: 'At equilibrium in pure water, the cell\'s water potential must equal that of pure water (Ψ = 0). Since Ψ = Ψs + Ψp: 0 = −0.8 + Ψp, so Ψp = +0.8 MPa. The turgor pressure exactly balances the solute potential.'
          }
        ]
      }
    },
    {
      id: 'plt7-content2',
      type: 'text' as const,
      content: `## Hormone Experiment Interpretation

AP Biology frequently tests your ability to design and interpret experiments involving plant hormones. Here are common experimental setups:

### Experiment Design Framework

| Element | What to Consider |
|---|---|
| **Independent variable** | What hormone or treatment is being applied? |
| **Dependent variable** | What is being measured? (growth, bending, germination, etc.) |
| **Control group** | Untreated or water-treated plants |
| **Constants** | Light, temperature, species, age of plants |

### Classic Experimental Scenarios

**Scenario 1: Auxin & Phototropism**
- Plant A: Intact, unilateral light → bends toward light
- Plant B: Tip removed, unilateral light → no bending
- Plant C: Tip covered with opaque cap, unilateral light → no bending
- Plant D: Base covered, tip exposed, unilateral light → bends toward light
- **Conclusion**: The **tip** perceives light and produces the bending signal (auxin)

**Scenario 2: Gibberellin & Stem Growth**
- Dwarf pea plants treated with GA → grow to normal height
- Normal pea plants treated with GA inhibitor → become dwarf
- **Conclusion**: Gibberellin is necessary and sufficient for normal stem elongation

**Scenario 3: Ethylene & Ripening**
- Unripe bananas sealed with ripe apple → ripen faster
- Unripe bananas sealed with $KMnO_{4}$ (ethylene absorber) → ripen slowly
- **Conclusion**: Ethylene gas from the apple accelerates banana ripening`
    },
    {
      id: 'plt7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Hormone Experiment Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A researcher applies a paste containing auxin to the cut surface after removing the shoot tip. The lateral buds do NOT grow out. What does this demonstrate?',
            options: [
              'Auxin from the shoot tip is not involved in apical dominance',
              'Exogenous auxin can substitute for the shoot tip in maintaining apical dominance',
              'The cut surface blocks auxin transport',
              'Lateral buds require light to grow'
            ],
            correctAnswer: 1,
            explanation: 'Normally, removing the shoot tip releases lateral buds from apical dominance (they grow out). If applying auxin to the cut surface prevents lateral bud growth, this shows that auxin from the tip is the signal that suppresses lateral buds — and exogenous auxin can replace it.'
          },
          {
            question: 'Seeds of a plant species won\'t germinate even when given water, light, and warm temperatures. When treated with gibberellin, they germinate. When treated with ABA, germination is further inhibited. What is the most likely explanation?',
            options: [
              'The seeds are dead and only gibberellin can revive them',
              'The seeds are maintaining dormancy through high ABA levels, which gibberellin can overcome',
              'Gibberellin replaces the need for water in germination',
              'ABA promotes germination but only in the absence of gibberellin'
            ],
            correctAnswer: 1,
            explanation: 'Seed dormancy is maintained by ABA and broken by gibberellins. The seeds likely have high endogenous ABA levels keeping them dormant. Exogenous GA can overcome ABA-mediated dormancy and trigger germination. Additional ABA reinforces dormancy.'
          },
          {
            question: 'A student places growing seedlings on their side in the dark. After 24 hours, the shoots curve upward and the roots curve downward. If the root caps are removed before the experiment, what would you predict?',
            options: [
              'Both shoots and roots would grow upward',
              'Shoots would curve upward normally, but roots would fail to curve downward',
              'Neither shoots nor roots would respond to gravity',
              'Roots would curve upward instead of downward'
            ],
            correctAnswer: 1,
            explanation: 'Root caps contain statocytes with statoliths that are essential for gravity perception in roots. Without root caps, roots cannot sense gravity and will not show gravitropism. Shoots have their own gravity-sensing cells (in the endodermis), so shoot gravitropism is unaffected by removing root caps.'
          }
        ]
      }
    },
    {
      id: 'plt7-content3',
      type: 'text' as const,
      content: `## Transport Mechanism Analysis

### Comparing Transport Systems

| Feature | Xylem Transport | Phloem Transport |
|---|---|---|
| **Substance** | Water, minerals | Sucrose, amino acids, hormones |
| **Direction** | Unidirectional (root → leaf) | Bidirectional (source → sink) |
| **Driving force** | Transpiration pull (passive) | Pressure-flow (active loading at source) |
| **Cell type** | Dead tracheids/vessels | Living sieve-tube elements |
| **Pressure** | Negative (tension) | Positive (turgor) |
| **Energy input** | Passive (solar-driven transpiration) | Active (ATP for sucrose loading) |

### Common AP Exam Traps

**Trap 1**: "Xylem transport requires no energy from the plant"
- **Partially true**: The transpiration pull is passive (driven by solar energy evaporating water)
- **But**: Root cells use ATP to actively transport minerals into the xylem via the endodermis

**Trap 2**: "Phloem only moves sugars downward"
- **False**: Phloem moves from source to sink in ANY direction
- Sugar can move upward (to a growing shoot tip) or downward (to roots)

**Trap 3**: "Water moves by osmosis in the xylem"
- **False in long-distance transport**: Xylem bulk flow is driven by transpiration pull and cohesion-tension
- Osmosis is important at the **root** level (water entering root cells) and at **source/sink** phloem loading

### Free-Response Strategy

When answering FRQs about plant transport:
1. **Name the mechanism** (transpiration-cohesion-tension or pressure-flow)
2. **Explain the driving force** (transpiration gradient or osmotic pressure gradient)
3. **Describe the molecular basis** (hydrogen bonding for cohesion, active sugar loading)
4. **Connect structure to function** (dead xylem cells for tension, living phloem cells for loading)`
    },
    {
      id: 'plt7-quiz3',
      type: 'multiple-choice' as const,
      content: `**Transport Mechanism Problems** 🎯`,
      exercise: {
        questions: [
          {
            question: 'On a hot, dry, windy day, a plant closes its stomata. Which of the following is the most immediate consequence?',
            options: [
              'Photosynthesis rate increases due to less water competition',
              'Transpiration decreases, reducing the driving force for xylem transport',
              'Phloem transport stops because sugar cannot be produced',
              'Root pressure increases to compensate for lost transpiration'
            ],
            correctAnswer: 1,
            explanation: 'Closing stomata directly reduces transpiration (water loss from leaves). Since transpiration creates the tension that pulls water up through the xylem, closing stomata reduces the driving force for xylem transport. $CO_{2}$ entry is also reduced, slowing photosynthesis — but this is secondary to the immediate transpiration effect.'
          },
          {
            question: 'A ring of bark (including phloem) is removed from around a tree trunk (girdling). Which prediction is correct?',
            options: [
              'Water transport to the leaves stops immediately',
              'Sugar accumulates above the girdle and roots eventually starve',
              'The tree is unaffected because xylem is intact',
              'Sugars are rerouted through the xylem to reach the roots'
            ],
            correctAnswer: 1,
            explanation: 'Girdling removes the phloem but leaves the xylem intact (xylem is deeper). Water can still reach the leaves via xylem, but sugars produced in the leaves cannot be transported past the girdle to the roots. Sugar accumulates above the girdle, and the roots eventually die from starvation, eventually killing the tree.'
          }
        ]
      }
    },
    {
      id: 'plt7-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Exam Review** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In the water potential equation Ψs = −iCRT, the variable "i" represents the ___ constant.',
            options: ['ionization', 'integration', 'inflation', 'inhibition']
          },
          {
            label: 'A cell at equilibrium with its environment has ___ net water movement.',
            options: ['zero', 'maximum', 'increasing', 'variable']
          },
          {
            label: 'The Casparian strip forces water to cross ___ of endodermal cells, allowing selective mineral uptake.',
            options: ['cell membranes', 'cell walls only', 'the vacuole', 'plasmodesmata only']
          },
          {
            label: 'In a girdling experiment, sugars accumulate ___ the girdle because phloem transport is blocked.',
            options: ['above', 'below', 'at both sides of', 'far from']
          }
        ],
        correctAnswers: ['ionization', 'zero', 'cell membranes', 'above'],
        hint1: 'This constant accounts for the number of particles a solute dissociates into.',
        hint2: 'At equilibrium, the rates of water entering and leaving are equal.',
        hint3: 'The Casparian strip blocks the apoplast pathway, so water must enter the symplast.',
        explanation: 'The ionization constant (i) reflects how many particles a solute produces (e.g., NaCl → 2 particles). At equilibrium, Ψ is equal on both sides so net water movement is zero. The Casparian strip blocks apoplastic flow, forcing water through cell membranes for selective transport. In girdling, sugars accumulate above the girdle (closer to the leaves/source) because downward phloem transport is severed.'
      }
    }
  ]
}
