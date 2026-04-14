export const bioEndocrineSystemPart2Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end2-intro',
      type: 'text' as const,
      content: `
# 💊 Hormone Types & Mechanisms of Action

Not all hormones work the same way. The **chemical nature** of a hormone determines how it travels in the blood, whether it can cross the cell membrane, and how it triggers a response in the target cell.

### What You'll Learn
- The two major classes of hormones: peptide and steroid
- How water-soluble hormones use surface receptors and second messengers
- How lipid-soluble hormones act on intracellular receptors
- The cAMP signal transduction cascade
      `
    },
    {
      id: 'end2-peptide',
      type: 'text' as const,
      content: `
## Peptide (Water-Soluble) Hormones

Most hormones in the body are **peptide hormones** — chains of amino acids that are water-soluble but **cannot cross the plasma membrane**.

### Characteristics
| Property | Detail |
|----------|--------|
| **Chemical nature** | Amino acid chains (proteins/peptides) |
| **Solubility** | Water-soluble; travel freely in blood |
| **Membrane crossing** | Cannot cross lipid bilayer |
| **Receptor location** | Cell surface (transmembrane receptors) |
| **Signal mechanism** | Second messenger cascades |
| **Speed of action** | Fast (seconds to minutes) |
| **Duration** | Relatively short-lived |

### Examples
- **Insulin** (pancreas) — lowers blood glucose
- **Glucagon** (pancreas) — raises blood glucose
- **ADH** (posterior pituitary) — water reabsorption
- **Growth hormone** (anterior pituitary) — stimulates growth
- **Epinephrine** (adrenal medulla) — fight-or-flight

### The cAMP Second Messenger Cascade
This is **the classic AP Biology signal transduction pathway**:

1. **Hormone (first messenger)** binds to a **receptor** on the cell surface
2. Receptor activates a **G protein** (switches GDP → GTP)
3. G protein activates **adenylyl cyclase** (membrane enzyme)
4. Adenylyl cyclase converts **ATP → cyclic AMP (cAMP)**
5. cAMP activates **protein kinase A (PKA)**
6. PKA **phosphorylates** target proteins → cellular response
7. **Phosphodiesterase** breaks down cAMP to stop the signal

> 🔑 **Signal amplification:** Each step multiplies the effect. One hormone molecule can activate many G proteins, each producing many cAMP molecules, each activating many kinases — resulting in millions of product molecules from a single signal.
      `
    },
    {
      id: 'end2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why can\'t peptide hormones cross the plasma membrane?',
            options: [
              'They are too small to interact with membrane proteins',
              'They are water-soluble and cannot pass through the hydrophobic lipid bilayer',
              'They are destroyed by membrane-bound enzymes',
              'They lack a nuclear localization signal'
            ],
            correctAnswer: 1,
            explanation: 'Peptide hormones are polar/hydrophilic (water-soluble), so they cannot pass through the nonpolar/hydrophobic interior of the phospholipid bilayer. They must bind surface receptors instead.'
          },
          {
            question: 'In the cAMP pathway, what is the role of adenylyl cyclase?',
            options: [
              'It serves as the cell surface receptor for the hormone',
              'It directly phosphorylates target proteins',
              'It converts ATP to cyclic AMP (cAMP)',
              'It breaks down cAMP to terminate the signal'
            ],
            correctAnswer: 2,
            explanation: 'Adenylyl cyclase is the enzyme activated by the G protein. It converts ATP into cAMP, the second messenger. Phosphodiesterase (not adenylyl cyclase) breaks down cAMP.'
          }
        ]
      }
    },
    {
      id: 'end2-steroid',
      type: 'text' as const,
      content: `
## Steroid (Lipid-Soluble) Hormones

**Steroid hormones** are derived from **cholesterol** and are lipid-soluble, allowing them to pass directly through the plasma membrane.

### Characteristics
| Property | Detail |
|----------|--------|
| **Chemical nature** | Derived from cholesterol (lipids) |
| **Solubility** | Lipid-soluble; require carrier proteins in blood |
| **Membrane crossing** | Freely cross the lipid bilayer |
| **Receptor location** | Intracellular (cytoplasm or nucleus) |
| **Signal mechanism** | Hormone-receptor complex acts as transcription factor |
| **Speed of action** | Slow (hours to days) |
| **Duration** | Long-lasting effects |

### Examples
- **Estrogen** — female sex characteristics, menstrual cycle
- **Testosterone** — male sex characteristics
- **Progesterone** — pregnancy maintenance
- **Cortisol** — stress response, anti-inflammatory
- **Aldosterone** — sodium/water reabsorption in kidneys

### Mechanism of Action
1. Steroid hormone diffuses through the plasma membrane
2. Binds to an **intracellular receptor** (in cytoplasm or nucleus)
3. Hormone-receptor complex enters the nucleus (if cytoplasmic)
4. Complex binds to **specific DNA sequences** (hormone response elements)
5. Acts as a **transcription factor** — activates or represses gene expression
6. New **mRNA** is transcribed → new **proteins** are synthesized
7. New proteins carry out the cellular response

> 🧬 **Why are steroid effects slower?** Because they alter gene expression — producing new proteins takes time (transcription + translation), but the effects last longer because the proteins persist.
      `
    },
    {
      id: 'end2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Peptide hormones bind to receptors on the ___ of the target cell.',
            options: ['nucleus', 'mitochondria', 'cell surface', 'endoplasmic reticulum']
          },
          {
            label: 'Steroid hormones can cross the plasma membrane because they are ___.',
            options: ['water-soluble', 'lipid-soluble', 'positively charged', 'very small']
          },
          {
            label: 'In the cAMP pathway, the second messenger is ___.',
            options: ['the hormone itself', 'G protein', 'cyclic AMP', 'protein kinase A']
          },
          {
            label: 'Steroid hormones alter cell function by changing ___.',
            options: ['membrane permeability', 'ATP production', 'gene expression', 'cell shape']
          }
        ],
        correctAnswers: ['cell surface', 'lipid-soluble', 'cyclic AMP', 'gene expression'],
        hint1: 'Peptide hormones cannot cross the lipid bilayer.',
        hint2: 'The lipid bilayer is composed of nonpolar fatty acid tails — like dissolves like.',
        hint3: 'Steroid-receptor complexes act as transcription factors in the nucleus.',
        explanation: 'Peptide hormones are water-soluble and bind surface receptors, triggering second messenger cascades (cAMP is the classic second messenger). Steroid hormones are lipid-soluble, cross the membrane, and bind intracellular receptors that directly alter gene expression.'
      }
    },
    {
      id: 'end2-summary',
      type: 'text' as const,
      content: `
## Comparing Hormone Mechanisms — Summary

| Feature | Peptide Hormones | Steroid Hormones |
|---------|-----------------|-----------------|
| **Solubility** | Water-soluble | Lipid-soluble |
| **Blood transport** | Dissolve freely | Need carrier proteins |
| **Receptor** | Cell surface | Intracellular |
| **Mechanism** | Second messengers (cAMP) | Direct gene regulation |
| **Response speed** | Fast (seconds–minutes) | Slow (hours–days) |
| **Response duration** | Short | Long |
| **Signal amplification** | Yes (cascade) | Limited |

### Why This Matters for AP Bio
The AP exam frequently asks you to:
- Predict where a receptor is located based on hormone type
- Explain why certain hormones act faster than others
- Trace signal transduction from receptor to cellular response
- Describe how signal amplification works in the cAMP cascade
- Connect hormone signaling to the broader theme of **cell communication**

> 📝 **Mnemonic:** **P**eptide = **P**lasma membrane receptor = **P**rotein kinase cascade. **S**teroid = **S**lips through membrane = changes gene expre**S**sion.
      `
    }
  ]
}
