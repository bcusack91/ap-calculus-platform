export const bioCellCommPart1Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
## Signal Transduction Overview

**Part 1 of 7 — Signal Transduction Overview**

A liver cell cannot see a predator, and a muscle cell cannot hear an alarm. Yet within seconds of a fright, your liver is dumping glucose into the blood and your heart is beating harder. Every one of those responses depends on **cell communication**: one cell releases a chemical message, and another cell detects it and changes what it is doing.

Cell signaling is not just an animal feature. Bacteria sense how crowded they are, yeast cells find mating partners, and plant cells coordinate defenses, all by detecting chemical signals. AP Biology treats signaling as one of the core ways cells **interact with their environment and with each other** (Unit 4, Topics 4.1–4.4).

### The vocabulary you need from day one

| Term | Meaning | Example |
|------|---------|---------|
| **Ligand** | The signal molecule that binds a receptor | Epinephrine, insulin, estrogen |
| **Receptor** | A protein whose binding site fits one ligand (or a family of closely related ligands) | A membrane receptor for epinephrine |
| **Target cell** | Any cell that has the matching receptor | Liver, heart and skeletal muscle cells for epinephrine |
| **Signal transduction** | Converting the outside signal into an inside change | A chain of relay proteins inside the cell |
| **Response** | The final change in the cell's activity | Glycogen breakdown, gene expression, cell division |

> 🔑 **Key Concept:** The ligand itself usually does **not** do the work inside the cell. It carries **information**, not energy or raw material. The receptor and the proteins downstream of it do the work.
      `
    },
    {
      id: 'cell1-stages',
      type: 'text' as const,
      content: `
### The three stages: reception → transduction → response

Almost every signaling pathway on the AP exam can be described in three stages.

1. **Reception.** The ligand binds the receptor's binding site. Binding is like a key in a lock: it depends on shape and chemical complementarity, and it is **reversible**.
2. **Transduction.** Ligand binding changes the receptor's **shape** (conformation). That shape change starts a series of changes in other molecules, a **relay**. Relay molecules are often proteins that are switched on by having a phosphate added, plus small molecules called **second messengers**.
3. **Response.** The last relay molecule changes something the cell does: it activates an enzyme, opens a channel, rearranges the cytoskeleton, or turns genes on or off.

| Stage | Where it happens (membrane receptor) | What changes |
|-------|--------------------------------------|--------------|
| Reception | Cell surface | Receptor binds ligand and changes shape |
| Transduction | Cytoplasm | Relay proteins and second messengers are activated in sequence |
| Response | Cytoplasm or nucleus | Enzyme activity, transport or gene expression changes |

**Why have a middle stage at all?** Transduction is where the cell gains control. Each step can **amplify** the signal (one active enzyme activates many molecules of the next), can be **regulated** by other inputs, and can **branch** so one signal triggers several responses. You will study each of these in Parts 3–5.
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A hormone circulates past every cell in the body, yet only kidney and blood-vessel cells respond to it. What best explains this pattern?',
            options: [
              'Only kidney and vessel cells have a receptor that binds the hormone',
              'The gene for the hormone is switched on in kidney and vessel cells',
              'The hormone is broken down before it reaches any of the other organs',
              'Other cells absorb the hormone but lack the energy needed to use it'
            ],
            correctAnswer: 0,
            explanation: 'Responsiveness depends on having the matching receptor. Body cells share the same genome, and a signal carries information rather than energy, so a cell without the receptor simply does not detect the hormone.'
          },
          {
            question: 'In a signaling pathway, what is the immediate result of a ligand binding its receptor?',
            options: [
              'The ligand is chemically broken apart to release stored energy',
              'The receptor changes shape and starts the transduction stage',
              'The receptor moves into the nucleus and copies the target gene',
              'The receptor triggers cell division so both daughter cells respond'
            ],
            correctAnswer: 1,
            explanation: 'Binding causes a conformational change in the receptor, and that shape change is what starts transduction. The ligand is not an energy source, and receptors do not copy genes.'
          }
        ]
      }
    },
    {
      id: 'cell1-sutherland',
      type: 'text' as const,
      content: `
### A classic case: how epinephrine releases glucose

In the 1950s, Earl Sutherland studied how the hormone **epinephrine** (adrenaline) makes liver cells break down **glycogen** into glucose. His experiments show why the three-stage model matters.

**Observation 1.** Epinephrine added to **intact** liver cells activated the enzyme **glycogen phosphorylase**, which breaks glycogen down.

**Observation 2.** Epinephrine added to a test tube containing **only the purified enzyme** and glycogen did **nothing**.

**Observation 3.** When liver cells were broken open, epinephrine worked only if the **plasma membrane fraction** was present. The membrane fraction produced a small molecule, later identified as **cyclic AMP (cAMP)**, and adding cAMP alone to the cytoplasm activated the enzyme even without epinephrine.

**Interpretation, stage by stage:**

| Stage | What Sutherland's results reveal |
|-------|----------------------------------|
| Reception | Epinephrine acts at the **plasma membrane**; it never has to enter the cell |
| Transduction | A **second messenger** (cAMP) carries the signal from the membrane into the cytoplasm |
| Response | Glycogen phosphorylase becomes active and glucose is released |

> 📝 **AP Connection:** This is exactly the kind of experiment the AP exam describes and asks you to interpret. Ask three questions of any signaling data: *Where is the receptor? What carries the signal inside? What is the measurable response?*
      `
    },
    {
      id: 'cell1-specificity',
      type: 'text' as const,
      content: `
### Specificity: same body, different responses

Specificity has two layers.

1. **Which cells respond** depends on **which receptors a cell makes**. All your cells have the same genes, but each cell type expresses a different set of receptor genes.
2. **How a cell responds** depends on the **relay proteins and target proteins** it has. The same ligand can produce different responses in different cells.

| Cell receiving epinephrine | Response |
|----------------------------|----------|
| Liver cell | Breaks down glycogen and releases glucose |
| Heart muscle cell | Contracts faster and more strongly |
| Smooth muscle around airways | Relaxes, widening the airways |

The ligand is the same in all three rows. The difference lies in the receptor type and the downstream proteins each cell expresses.

> 💡 **Misconception alert:** "The signal tells the cell what to do." It is more accurate to say the signal **selects** a response the cell is already equipped to make. A cell can only respond with proteins it already has or can make from its own genes.
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: Sutherland's Experiments** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Epinephrine activates glycogen phosphorylase in intact liver cells but not in a tube holding only the purified enzyme. Which conclusion is best supported?',
            options: [
              'Epinephrine must be converted to glucose before it can act on the enzyme',
              'The signal reaches the enzyme through cell parts that relay it',
              'Glycogen phosphorylase is permanently inactive outside of living tissue',
              'Epinephrine binds directly to glycogen and blocks access by the enzyme'
            ],
            correctAnswer: 1,
            explanation: 'Because the hormone fails on the enzyme alone but works in whole cells, something in the cell, a receptor and relay system, must carry the signal to the enzyme. The enzyme works when cAMP is added, so it is not inactive outside tissue.'
          },
          {
            question: 'Adding cAMP to liver cytoplasm activates glycogen breakdown even with no epinephrine present. What does this result show about cAMP?',
            options: [
              'It is the extracellular ligand that binds the membrane receptor',
              'It is a stored form of glucose that the cytoplasm breaks down',
              'It acts downstream of the receptor to relay the signal inside',
              'It is the enzyme that removes glucose units from glycogen'
            ],
            correctAnswer: 2,
            explanation: 'cAMP can trigger the response without the hormone, so it acts after reception, inside the cell. That is the definition of a second messenger relaying the signal.'
          },
          {
            question: 'Epinephrine makes heart muscle contract harder but makes airway smooth muscle relax. Which statement best explains this contrast?',
            options: [
              'Heart cells receive more epinephrine than airway cells receive',
              'Each cell type expresses different receptors and relay proteins',
              'Airway cells have lost the gene that codes for the epinephrine receptor',
              'Epinephrine is chemically altered into a new hormone in the airways'
            ],
            correctAnswer: 1,
            explanation: 'The response depends on the receptor subtype and the downstream proteins a cell expresses. Airway cells clearly do respond, so they must have a receptor, and the hormone itself is unchanged.'
          }
        ]
      }
    },
    {
      id: 'cell1-roadmap',
      type: 'text' as const,
      content: `
### Roadmap for this topic

| Part | Focus |
|------|-------|
| 1 | The three-stage model and specificity (this part) |
| 2 | Types of signaling by distance: contact, local and long-distance |
| 3 | Reception: membrane and intracellular receptors |
| 4 | Transduction: cascades, second messengers and amplification |
| 5 | Responses, and what happens when a pathway is altered |
| 6 | Problem-solving workshop with experimental data |
| 7 | Synthesis and AP review |

> 🎯 **Takeaway:** Signal → receptor (shape change) → relay → response. If you can name each stage and say what would happen if it were blocked, you can handle most AP signaling questions.
      `
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Event to Its Stage** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Epinephrine binds a protein in the liver cell membrane',
            options: ['Reception', 'Transduction', 'Response']
          },
          {
            label: 'cAMP levels rise in the cytoplasm and activate a kinase',
            options: ['Reception', 'Transduction', 'Response']
          },
          {
            label: 'Glycogen phosphorylase breaks glycogen into glucose units',
            options: ['Reception', 'Transduction', 'Response']
          }
        ],
        correctAnswers: ['Reception', 'Transduction', 'Response'],
        hint1: 'Reception is the binding event itself.',
        hint2: 'Transduction covers the relay molecules between the receptor and the final target.',
        hint3: 'The response is the change in the cell that you could measure, such as glucose output.',
        explanation: 'Ligand binding is reception; the rise in cAMP and kinase activation are transduction; and the enzyme breaking down glycogen is the response.'
      }
    }
  ]
}
