export const bioPlantStructureFunctionPart3Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt3-intro',
      type: 'text' as const,
      content: `# Sugar Transport: Phloem & the Pressure-Flow Hypothesis 🍬

While xylem moves water upward from roots, **phloem** transports sugars (primarily **sucrose**) from where they're made to where they're needed. This is called **translocation**.

## Source vs. Sink

| Term | Definition | Examples |
|---|---|---|
| **Source** | Organ that produces or releases sugar | Mature leaves (photosynthesis), storage organs releasing reserves |
| **Sink** | Organ that consumes or stores sugar | Growing roots, developing fruits, young leaves, storage organs accumulating reserves |

**Key insight**: The same organ can switch roles! A potato tuber is a **sink** when storing starch in summer, but becomes a **source** when sprouting in spring (converting starch back to sugar).

## Phloem Structure Review

| Component | Key Features |
|---|---|
| **Sieve-tube elements** | Living cells connected end-to-end; lack nucleus and most organelles; sieve plates have pores for flow |
| **Companion cells** | Nucleated cells adjacent to sieve-tube elements; connected by plasmodesmata; provide metabolic support |
| **Sieve plates** | Perforated end walls between sieve-tube elements; allow bulk flow of phloem sap |`
    },
    {
      id: 'plt3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Source & Sink** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A developing apple fruit would be classified as a:',
            options: ['Source, because it produces sugar via photosynthesis', 'Sink, because it consumes sugar for growth and storage', 'Neither source nor sink', 'Source, because it stores starch'],
            correctAnswer: 1,
            explanation: 'A developing fruit is a sink — it imports sugars from photosynthetic leaves for growth, ripening, and sugar/starch storage. It does not produce enough sugar on its own to sustain its growth.'
          },
          {
            question: 'Why do sieve-tube elements lack a nucleus and most organelles?',
            options: [
              'To maximize space for sugar transport through the cell',
              'Because they are dead at maturity like xylem cells',
              'To prevent sugar from being metabolized during transport',
              'Because they evolved from prokaryotic cells'
            ],
            correctAnswer: 0,
            explanation: 'Sieve-tube elements lose their nucleus, ribosomes, and most organelles during maturation to maximize the internal space available for bulk flow of phloem sap. They remain alive, relying on companion cells for metabolic functions.'
          }
        ]
      }
    },
    {
      id: 'plt3-content2',
      type: 'text' as const,
      content: `## The Pressure-Flow Hypothesis (Münch Model)

The pressure-flow hypothesis explains how sugars move through phloem by **bulk flow** driven by a pressure gradient between source and sink.

### Step-by-Step Mechanism

**At the Source (e.g., mature leaf):**
1. Companion cells **actively load sucrose** into sieve-tube elements using $H^{+}$ cotransport (requires ATP)
2. High sucrose concentration **lowers water potential** inside sieve tubes
3. Water enters from nearby xylem by **osmosis**
4. This creates **high turgor pressure** (positive Ψp) at the source end

**At the Sink (e.g., growing root):**
1. Sucrose is **unloaded** from sieve-tube elements (can be active or passive)
2. Sucrose removal **raises water potential** inside sieve tubes
3. Water exits to nearby xylem by **osmosis**
4. This creates **low turgor pressure** at the sink end

**The Result:**
- A **pressure gradient** exists from source (high P) → sink (low P)
- Phloem sap flows by **bulk flow** down this pressure gradient
- Water recirculates: xylem → source phloem → sink phloem → xylem

### Phloem Loading Mechanisms

| Type | Mechanism | Energy? |
|---|---|---|
| **Apoplastic loading** | Sucrose exits companion cell → enters apoplast → loaded into sieve tube via $H^{+}/sucrose$ cotransporter | Active (requires ATP for $H^{+}$ pump) |
| **Symplastic loading** | Sucrose moves through plasmodesmata directly from mesophyll → companion cell → sieve tube | Passive (polymer trapping may be involved) |`
    },
    {
      id: 'plt3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Pressure-Flow** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the pressure-flow model, what creates the high pressure at the source end of the phloem?',
            options: [
              'Active pumping of water into sieve tubes',
              'Sugar loading lowers water potential, drawing water in by osmosis',
              'Root pressure pushes water upward',
              'Companion cells contract and squeeze sieve tubes'
            ],
            correctAnswer: 1,
            explanation: 'At the source, active sugar loading into sieve-tube elements increases the solute concentration, lowering water potential. Water enters from the adjacent xylem by osmosis, creating high turgor pressure that drives bulk flow toward the sink.'
          },
          {
            question: 'A researcher applies a metabolic poison that blocks ATP production to a section of phloem. What would most directly be affected?',
            options: [
              'Cohesion of water molecules in xylem',
              'Active loading of sucrose at the source',
              'Passive unloading of sucrose at the sink',
              'Evaporation of water from stomata'
            ],
            correctAnswer: 1,
            explanation: 'Apoplastic phloem loading requires ATP to power the $H^{+}$ pump that drives sucrose cotransport into sieve-tube elements. Without ATP, sucrose cannot be actively loaded, disrupting the pressure gradient needed for translocation.'
          },
          {
            question: 'Phloem transport differs from xylem transport in that phloem:',
            options: [
              'Only moves materials upward',
              'Requires living cells and can move materials in any direction',
              'Uses transpiration as the driving force',
              'Operates by capillary action'
            ],
            correctAnswer: 1,
            explanation: 'Phloem transport requires living sieve-tube elements and can move sugars in any direction — from any source to any sink (up, down, or laterally). Xylem transport is primarily upward and uses dead cells.'
          }
        ]
      }
    },
    {
      id: 'plt3-content3',
      type: 'text' as const,
      content: `## Comparing Xylem and Phloem Transport

| Feature | Xylem | Phloem |
|---|---|---|
| **What is transported** | Water and dissolved minerals | Sucrose, amino acids, hormones |
| **Direction** | Upward only (roots → leaves) | Any direction (source → sink) |
| **Driving force** | Transpiration pull (negative pressure) | Pressure-flow (positive pressure gradient) |
| **Cell status** | Dead at maturity | Alive at maturity |
| **Mechanism** | Cohesion-tension (passive) | Bulk flow; loading is active (ATP required) |
| **Speed** | Up to 75 cm/min | Up to 100 cm/hr (slower) |
| **Sap composition** | Dilute mineral solution | Concentrated sugar solution (10-25% sucrose) |

## Experimental Evidence for Pressure-Flow

- **Aphid stylet experiments**: Aphids insert stylets into individual sieve tubes. When the aphid is removed, phloem sap exudes under pressure from the cut stylet — demonstrating positive pressure in phloem
- **Radioactive tracers**: $ {}^{14}C$-labeled $CO_{2}$ fed to a source leaf shows up in sink tissues, confirming directional sugar transport
- **Girdling experiments**: Removing a ring of bark (which includes phloem) causes sugar to accumulate above the girdle, confirming phloem carries sugar downward`
    },
    {
      id: 'plt3-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Phloem Transport** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The pressure-flow hypothesis explains sugar movement by ___ driven by a turgor pressure gradient.',
            options: ['bulk flow', 'osmosis', 'active transport', 'diffusion']
          },
          {
            label: 'At the source, sucrose loading ___ the water potential inside sieve-tube elements.',
            options: ['decreases', 'increases', 'does not change', 'equalizes']
          },
          {
            label: '___ cells provide metabolic support to sieve-tube elements because sieve-tube elements lack a nucleus.',
            options: ['Companion', 'Guard', 'Parenchyma', 'Collenchyma']
          },
          {
            label: 'In aphid stylet experiments, phloem sap exudes under pressure, confirming that phloem operates under ___ pressure.',
            options: ['positive', 'negative', 'atmospheric', 'zero']
          }
        ],
        correctAnswers: ['bulk flow', 'decreases', 'Companion', 'positive'],
        hint1: 'This type of movement involves the mass flow of fluid, not individual molecule movement.',
        hint2: 'Adding solute to a solution makes water potential more negative.',
        hint3: 'These nucleated cells are connected to sieve-tube elements by plasmodesmata.',
        explanation: 'Phloem transport occurs by bulk flow of sap from high-pressure (source) to low-pressure (sink) regions. Sugar loading decreases water potential, drawing water in. Companion cells support the enucleate sieve-tube elements. Aphid experiments confirm positive pressure in phloem, unlike the negative pressure (tension) in xylem.'
      }
    }
  ]
}
