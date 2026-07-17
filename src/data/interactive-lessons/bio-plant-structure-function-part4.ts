export const bioPlantStructureFunctionPart4Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt4-intro',
      type: 'text' as const,
      content: `# Plant Hormones 🧪

Plant hormones (also called **phytohormones**) are chemical signals produced in small quantities that regulate growth, development, and responses to the environment. Unlike animal hormones, plant hormones are often produced in many tissues and can act locally.

## The Big Five Plant Hormones

| Hormone | Primary Production Site | Key Functions |
|---|---|---|
| **Auxin (IAA)** | Shoot apical meristems, young leaves | Phototropism, apical dominance, cell elongation, root initiation |
| **Gibberellins (GA)** | Root and shoot tips, young leaves | Stem elongation, seed germination, fruit development |
| **Cytokinins** | Root tips, developing seeds | Cell division, delay senescence, promote lateral bud growth |
| **Ethylene** | Ripening fruits, aging tissues, stressed tissues | Fruit ripening, leaf abscission, triple response |
| **Abscisic acid (ABA)** | Leaves, root caps, mature fruits | Stomatal closure, seed dormancy, drought response |

## Auxin — The Master Regulator

Auxin (indole-3-acetic acid, IAA) was the first plant hormone discovered. It is produced primarily in the **shoot apical meristem** and young developing leaves.

### Key Auxin Effects

**Phototropism** — bending toward light:
1. Light hits one side of the shoot
2. Auxin is redistributed to the **shaded side** (via PIN proteins)
3. Cells on the shaded side **elongate more** (in shoots, auxin promotes elongation)
4. Differential growth causes the shoot to bend **toward** the light

**Apical Dominance:**
- High auxin from the shoot tip **inhibits** growth of lateral (axillary) buds
- If the shoot tip is removed (pruning), lateral buds are released from inhibition and grow
- This is why pruning makes plants bushier!

**Concentration-Dependent Effects:**

| Organ | Low Auxin | High Auxin |
|---|---|---|
| **Roots** | Promotes growth | Inhibits growth |
| **Shoots** | Less elongation | Promotes elongation |

This dual response explains **gravitropism**: auxin accumulates on the lower side due to gravity. In shoots, this promotes elongation on the bottom → shoot grows upward. In roots, high auxin inhibits growth on the bottom → root grows downward.`
    },
    {
      id: 'plt4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Auxin** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A gardener cuts the top off a plant to make it grow more branches. This works because:',
            options: [
              'Removing the tip exposes lateral buds to more light',
              'Removing the tip eliminates the source of auxin that suppresses lateral bud growth',
              'Cutting triggers ethylene production that activates lateral buds',
              'The wound produces cytokinins that stimulate branching'
            ],
            correctAnswer: 1,
            explanation: 'The shoot apical meristem produces auxin that travels downward and inhibits lateral bud growth (apical dominance). Removing the tip removes this auxin source, releasing lateral buds from inhibition so they can grow into branches.'
          },
          {
            question: 'During phototropism, auxin causes a seedling to bend toward light by:',
            options: [
              'Destroying cells on the lit side',
              'Promoting cell elongation on the shaded side of the shoot',
              'Inhibiting cell division on the shaded side',
              'Increasing photosynthesis on the lit side'
            ],
            correctAnswer: 1,
            explanation: 'Auxin is redistributed to the shaded side of the shoot, where it promotes cell elongation. Cells on the shaded side elongate more than those on the lit side, causing the shoot to bend toward the light.'
          }
        ]
      }
    },
    {
      id: 'plt4-content2',
      type: 'text' as const,
      content: `## Gibberellins (GA)

Gibberellins promote **growth and elongation**. Over 100 forms exist, but $GA_{3}$ is the most studied.

### Key Effects
- **Stem elongation**: Stimulate cell elongation and division in stems
- **Seed germination**: Trigger production of **α-amylase** in the aleurone layer of cereal seeds, which breaks down starch into sugar for the embryo
- **Fruit development**: Can induce **parthenocarpy** (seedless fruit production)
- **Bolting**: Rapid stem elongation in rosette plants before flowering

### Dwarf Plants & Gibberellins
Many dwarf plant varieties have mutations in gibberellin synthesis genes. Applying exogenous GA restores normal height — evidence that gibberellins control stem elongation.

## Cytokinins

Cytokinins promote **cell division** (cytokinesis) and are produced mainly in **root tips** and transported upward.

### Key Effects
- **Cell division**: Promote mitosis in plant tissues
- **Delay senescence**: Keep leaves green longer by preventing chlorophyll breakdown
- **Promote lateral bud growth**: Oppose auxin's apical dominance

### Auxin-Cytokinin Ratio

The balance of auxin and cytokinins determines tissue differentiation in culture:

| Ratio | Result |
|---|---|
| High auxin : low cytokinin | Root formation |
| Low auxin : high cytokinin | Shoot formation |
| Equal ratio | Undifferentiated callus growth |

This principle is fundamental to **plant tissue culture** and genetic engineering.`
    },
    {
      id: 'plt4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Gibberellins & Cytokinins** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A researcher applies gibberellin to a dwarf pea plant and it grows to normal height. This demonstrates that:',
            options: [
              'Dwarf plants have excess gibberellin that needs to be balanced',
              'The dwarf phenotype is likely due to a deficiency in gibberellin production',
              'Gibberellin inhibits stem elongation in normal plants',
              'Dwarf plants lack the receptor for gibberellin'
            ],
            correctAnswer: 1,
            explanation: 'If exogenous gibberellin restores normal height, the dwarf mutation likely affects gibberellin synthesis (not the receptor). The plant can respond to GA but cannot produce enough on its own.'
          },
          {
            question: 'In plant tissue culture, a high auxin-to-cytokinin ratio would promote:',
            options: [
              'Shoot formation', 
              'Root formation', 
              'Flower development', 
              'Undifferentiated callus growth'
            ],
            correctAnswer: 1,
            explanation: 'A high auxin-to-cytokinin ratio favors root formation, while a low ratio favors shoot formation. Equal concentrations tend to produce undifferentiated callus. This is a key principle in plant tissue culture.'
          }
        ]
      }
    },
    {
      id: 'plt4-content3',
      type: 'text' as const,
      content: `## Ethylene

Ethylene is unique among plant hormones — it's a **gas** $(C_{2}H_{4})$. It is produced by ripening fruits, senescing tissues, and stressed plants.

### Key Effects
- **Fruit ripening**: Triggers color change, softening, sugar production, and aroma
- **Positive feedback**: Ethylene stimulates more ethylene production → rapid, synchronized ripening
- **Leaf abscission**: Promotes formation of the abscission layer → leaf drop
- **Triple response in seedlings**: Thickened stem, shortened stem, exaggerated apical hook (response to mechanical stress underground)
- **Senescence**: Accelerates aging and death of plant tissues

### Practical Applications
- Fruits are picked green and exposed to ethylene gas to ripen uniformly for sale
- "One bad apple spoils the bunch" — a ripening apple releases ethylene that triggers ripening in nearby fruits

## Abscisic Acid (ABA)

Despite its name, ABA is NOT primarily involved in abscission (that's ethylene). ABA is the **stress response hormone**.

### Key Effects
- **Stomatal closure**: ABA released during drought causes guard cells to lose $K^{+}$ → water exits → stomata close → reduces water loss
- **Seed dormancy**: Maintains dormancy until conditions are favorable; must be overcome by gibberellins or cold treatment (stratification) for germination
- **Inhibits growth**: Slows growth during stress conditions

### ABA-GA Antagonism in Seeds

| Hormone | Effect on Seeds |
|---|---|
| **ABA** | Promotes and maintains dormancy |
| **Gibberellin** | Breaks dormancy and promotes germination |

The balance between ABA and GA determines whether a seed remains dormant or germinates.`
    },
    {
      id: 'plt4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Plant Hormones** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The phenomenon where the shoot tip inhibits lateral bud growth is called ___.',
            options: ['apical dominance', 'phototropism', 'gravitropism', 'thigmotropism']
          },
          {
            label: 'Gibberellins stimulate seed germination by triggering production of ___, which digests starch.',
            options: ['α-amylase', 'ATP synthase', 'rubisco', 'cellulase']
          },
          {
            label: '___ is the only gaseous plant hormone and triggers fruit ripening via positive feedback.',
            options: ['Ethylene', 'Auxin', 'Abscisic acid', 'Cytokinin']
          },
          {
            label: 'During drought, ___ triggers stomatal closure to conserve water.',
            options: ['abscisic acid', 'gibberellin', 'auxin', 'ethylene']
          }
        ],
        correctAnswers: ['apical dominance', 'α-amylase', 'Ethylene', 'abscisic acid'],
        hint1: 'This term describes auxin from the tip suppressing side branches.',
        hint2: 'This enzyme breaks down starch reserves in the aleurone layer of cereal seeds.',
        hint3: 'This hormone is unique because it exists as a gas at room temperature.',
        explanation: 'Apical dominance is auxin-mediated suppression of lateral bud growth. Gibberellins trigger α-amylase production to mobilize starch reserves for germination. Ethylene $(C_{2}H_{4})$ is the only gaseous plant hormone. Abscisic acid (ABA) is the primary drought-response hormone, causing stomatal closure.'
      }
    }
  ]
}
