export const bioPlantStructureFunctionPart1Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt1-intro',
      type: 'text' as const,
      content: `# Plant Tissues & Organs 🌿

Plants are built from **three tissue systems** that work together to support growth, transport, and protection. Understanding plant anatomy is fundamental to grasping how plants survive and thrive.

## The Three Tissue Systems

| Tissue System | Function | Location |
|---|---|---|
| **Dermal** | Protection, gas exchange | Outer covering of plant |
| **Ground** | Photosynthesis, storage, support | Between dermal and vascular |
| **Vascular** | Transport of water, minerals, sugars | Throughout the plant body |

### Dermal Tissue System

The **epidermis** is the outermost layer of cells in young plants. Key features:
- Covered by a waxy **cuticle** that prevents water loss
- Contains **stomata** — pores flanked by guard cells for gas exchange
- In roots, produces **root hairs** that increase surface area for absorption
- In woody plants, replaced by **periderm** (bark) as secondary growth occurs

### Ground Tissue System

Three cell types make up ground tissue:

| Cell Type | Cell Wall | Function | Example Location |
|---|---|---|---|
| **Parenchyma** | Thin, flexible | Photosynthesis, storage, wound repair | Leaf mesophyll, fruit flesh |
| **Collenchyma** | Unevenly thickened | Flexible structural support | Under epidermis of stems |
| **Sclerenchyma** | Thick, lignified | Rigid support (often dead at maturity) | Seed coats, nut shells |`
    },
    {
      id: 'plt1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Tissue Systems** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which tissue system is responsible for transporting water and minerals throughout the plant?',
            options: ['Dermal tissue system', 'Ground tissue system', 'Vascular tissue system', 'Meristematic tissue system'],
            correctAnswer: 2,
            explanation: 'The vascular tissue system, composed of xylem and phloem, is responsible for transporting water, minerals, and sugars throughout the plant body.'
          },
          {
            question: 'Which ground tissue cell type is dead at functional maturity and provides rigid structural support?',
            options: ['Parenchyma', 'Collenchyma', 'Sclerenchyma', 'Meristem'],
            correctAnswer: 2,
            explanation: 'Sclerenchyma cells have thick, lignified cell walls and are typically dead at maturity. They provide rigid structural support, such as in seed coats and nut shells.'
          },
          {
            question: 'The waxy cuticle on the epidermis primarily functions to:',
            options: ['Absorb sunlight for photosynthesis', 'Prevent water loss from the plant', 'Transport sugars to the roots', 'Provide structural support'],
            correctAnswer: 1,
            explanation: 'The waxy cuticle is a hydrophobic layer on the epidermis that prevents excessive water loss (transpiration) from the plant surface.'
          }
        ]
      }
    },
    {
      id: 'plt1-content2',
      type: 'text' as const,
      content: `## Vascular Tissue System

The vascular tissue system contains two main types of conducting tissue:

### Xylem — Water & Mineral Transport (Upward)

| Component | Structure | Function |
|---|---|---|
| **Tracheids** | Long, tapered cells with pits | Water conduction in all vascular plants |
| **Vessel elements** | Shorter, wider, open ends (perforation plates) | Efficient water conduction in angiosperms |

- Both cell types are **dead at maturity** — only the cell walls remain
- Water moves through continuous columns via **cohesion-tension**

### Phloem — Sugar Transport (Bidirectional)

| Component | Structure | Function |
|---|---|---|
| **Sieve-tube elements** | Living cells lacking nucleus, connected by sieve plates | Sugar conduction |
| **Companion cells** | Adjacent cells with nucleus and organelles | Metabolic support for sieve-tube elements |

- Phloem cells are **alive at maturity** (unlike xylem)
- Transport occurs via the **pressure-flow hypothesis**

## Plant Organs

Plants have three main organs, each containing all three tissue systems:

### Roots
- **Anchor** the plant and **absorb** water and minerals
- Root cap protects the growing tip
- Root hairs dramatically increase absorption surface area
- Store carbohydrates (e.g., carrots, sweet potatoes)

### Stems
- **Support** leaves and reproductive structures
- **Transport** corridor between roots and leaves
- Contain vascular bundles arranged differently in monocots vs. dicots

### Leaves
- Primary site of **photosynthesis**
- **Mesophyll** tissue (palisade and spongy) contains chloroplasts
- **Veins** (vascular bundles) deliver water and remove sugars`
    },
    {
      id: 'plt1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Vascular Tissue & Organs** 🎯`,
      exercise: {
        questions: [
          {
            question: 'How do xylem and phloem differ regarding cell viability at functional maturity?',
            options: [
              'Both are alive at maturity',
              'Xylem cells are dead; phloem sieve-tube elements are alive',
              'Phloem cells are dead; xylem tracheids are alive',
              'Both are dead at maturity'
            ],
            correctAnswer: 1,
            explanation: 'Xylem conducting cells (tracheids and vessel elements) are dead at maturity — only their rigid cell walls remain to form hollow tubes. Phloem sieve-tube elements remain alive (though they lack a nucleus) and rely on companion cells for metabolic support.'
          },
          {
            question: 'Vessel elements are found in angiosperms but not in most gymnosperms. What advantage do they provide over tracheids?',
            options: [
              'They are alive at maturity, allowing active pumping',
              'They are wider with open perforation plates, allowing faster water flow',
              'They can transport sugars as well as water',
              'They have thicker cell walls for more structural support'
            ],
            correctAnswer: 1,
            explanation: 'Vessel elements are shorter and wider than tracheids and have perforation plates (open ends) that allow water to flow more efficiently through continuous tubes. This is an evolutionary advantage of angiosperms.'
          }
        ]
      }
    },
    {
      id: 'plt1-content3',
      type: 'text' as const,
      content: `## Monocots vs. Dicots: Structural Differences

| Feature | Monocots | Dicots |
|---|---|---|
| **Vascular bundles in stem** | Scattered throughout | Arranged in a ring |
| **Leaf venation** | Parallel veins | Branching (net) veins |
| **Root system** | Fibrous roots | Taproot system |
| **Flower parts** | Multiples of 3 | Multiples of 4 or 5 |
| **Examples** | Grasses, corn, lilies | Roses, beans, oaks |

### Leaf Cross-Section Anatomy

A typical dicot leaf contains:
- **Upper epidermis** with cuticle
- **Palisade mesophyll** — tightly packed columnar cells rich in chloroplasts (most photosynthesis)
- **Spongy mesophyll** — loosely arranged cells with air spaces for gas exchange
- **Vascular bundles** (veins) — xylem on top, phloem on bottom
- **Lower epidermis** with more stomata than upper surface
- **Guard cells** surrounding stomata that regulate gas exchange`
    },
    {
      id: 'plt1-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Plant Anatomy** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The three tissue systems in plants are dermal, ground, and ___.',
            options: ['vascular', 'meristematic', 'epidermal', 'cortical']
          },
          {
            label: '___ cells have thick, lignified walls and are dead at maturity, providing rigid support.',
            options: ['Sclerenchyma', 'Parenchyma', 'Collenchyma', 'Companion']
          },
          {
            label: 'In a dicot stem, vascular bundles are arranged in a ___, whereas in monocots they are scattered.',
            options: ['ring', 'spiral', 'random cluster', 'single line']
          },
          {
            label: 'The ___ mesophyll layer is tightly packed and is the primary site of photosynthesis in a leaf.',
            options: ['palisade', 'spongy', 'cortical', 'epidermal']
          }
        ],
        correctAnswers: ['vascular', 'Sclerenchyma', 'ring', 'palisade'],
        hint1: 'Think about the tissue system that includes xylem and phloem.',
        hint2: 'Which cell type is associated with seed coats and nut shells?',
        hint3: 'Consider the organized pattern visible in dicot stem cross-sections.',
        explanation: 'The vascular tissue system transports materials throughout the plant. Sclerenchyma cells are dead at maturity with lignified walls. Dicot vascular bundles form a ring pattern. The palisade mesophyll, located just below the upper epidermis, is the primary photosynthetic tissue.'
      }
    }
  ]
}
