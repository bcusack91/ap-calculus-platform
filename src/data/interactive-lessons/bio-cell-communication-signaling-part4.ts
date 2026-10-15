export const bioCellCommPart4Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
## Signal Transduction Pathways

**Part 4 of 7 — Signal Transduction Pathways**

Between the receptor and the response lies a **signaling cascade**: a chain of molecules, each one switching on the next. The CED stresses three things about cascades:

1. They **relay** the signal from the receptor to its targets inside the cell.
2. They often **amplify** the signal, so a few ligand molecules produce a large response.
3. Many of them work through **protein modification**, above all **phosphorylation**, and through small **second messengers**.

This part builds the cascade one molecule at a time, then follows the full epinephrine pathway from Part 1.
      `
    },
    {
      id: 'cell4-phospho',
      type: 'text' as const,
      content: `
### Phosphorylation cascades: switching proteins on and off

A **protein kinase** is an enzyme that transfers a phosphate group from ATP to another protein. The added phosphate carries negative charge, so it changes the target protein's shape, and with it the protein's activity.

| Enzyme | What it does | Effect on the pathway |
|--------|--------------|-----------------------|
| **Protein kinase** | Adds a phosphate (from ATP) to a specific protein | Usually turns the next protein **on** |
| **Protein phosphatase** | Removes that phosphate | Turns the protein **off**, resetting the pathway |

In a **phosphorylation cascade**, kinase 1 phosphorylates and activates kinase 2, which activates kinase 3, and so on, until the final kinase phosphorylates the target protein that produces the response.

**Why use a chain instead of a single step?**

- **Amplification:** each active kinase phosphorylates many copies of the next kinase.
- **Control points:** each step can be sped up or blocked by other signals.
- **Reversibility:** phosphatases can switch every step off as soon as the ligand is gone, so the cell responds to the **current** level of signal.

> 💡 **Misconception alert:** Phosphorylation does not "give the protein energy." It changes the protein's **shape**, and shape determines function.
      `
    },
    {
      id: 'cell4-second',
      type: 'text' as const,
      content: `
### Second messengers

The ligand is the "first messenger." A **second messenger** is a small, non-protein molecule or ion that spreads quickly through the cytoplasm and carries the signal onward.

| Second messenger | How it is made or released | What it typically activates |
|------------------|----------------------------|-----------------------------|
| **Cyclic AMP (cAMP)** | **Adenylyl cyclase** in the membrane converts ATP → cAMP | **Protein kinase A (PKA)** |
| **Calcium ions (Ca²⁺)** | Released from the endoplasmic reticulum or let in through channels | Many enzymes and muscle contraction |

The cAMP signal is short-lived. An enzyme called **phosphodiesterase** quickly converts cAMP to AMP, which is inactive. The cAMP level therefore rises only while the receptor keeps stimulating adenylyl cyclase.

> 📝 **AP Connection:** The CED names cAMP as its model second messenger. Know the sequence ligand → GPCR → G protein → adenylyl cyclase → cAMP → protein kinase A, and be ready to predict what happens if any link is removed.
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A drug blocks phosphodiesterase in liver cells. How will cAMP levels change after epinephrine binds and is then removed?',
            options: [
              'cAMP will never rise, since adenylyl cyclase also needs phosphodiesterase',
              'cAMP will rise as usual and stay high after the hormone leaves',
              'cAMP will rise more slowly but fall back at the usual rate afterward',
              'cAMP will rise only if the cell first makes more epinephrine receptors'
            ],
            correctAnswer: 1,
            explanation: 'Phosphodiesterase breaks cAMP down to AMP. Without it, cAMP is still made normally but is not removed, so the signal persists after the hormone is gone.'
          },
          {
            question: 'A cell lacks a protein phosphatase that normally acts on the last kinase in a cascade. What is the most likely effect?',
            options: [
              'The cascade cannot begin when the ligand binds',
              'The last enzyme in the chain stays switched on',
              'The ligand can no longer bind its receptor',
              'The second messenger is never produced'
            ],
            correctAnswer: 1,
            explanation: 'Phosphatases switch kinases off by removing phosphates. Without that reset, the last kinase stays phosphorylated and active, so the response is prolonged.'
          }
        ]
      }
    },
    {
      id: 'cell4-epinephrine',
      type: 'text' as const,
      content: `
### Worked example: the epinephrine pathway in a liver cell, step by step

| Step | Event | Stage |
|------|-------|-------|
| 1 | Epinephrine binds its G protein-coupled receptor on the cell surface | Reception |
| 2 | The receptor changes shape; the G protein releases GDP and binds GTP | Transduction |
| 3 | The active G protein activates **adenylyl cyclase** | Transduction |
| 4 | Adenylyl cyclase converts many ATP molecules to **cAMP** | Transduction |
| 5 | cAMP activates **protein kinase A** | Transduction |
| 6 | Protein kinase A phosphorylates and activates **phosphorylase kinase** | Transduction |
| 7 | Phosphorylase kinase phosphorylates and activates **glycogen phosphorylase** | Transduction |
| 8 | Glycogen phosphorylase breaks glycogen into glucose-1-phosphate, and the cell releases glucose | Response |

**How it switches off:** epinephrine leaves the receptor; the G protein hydrolyzes GTP; phosphodiesterase destroys cAMP; phosphatases remove the phosphates. Every "on" step has a matching "off" step.

### Amplification in numbers

Suppose (with simplified, illustrative numbers) that:

- 1 active receptor activates 10 G proteins, each of which activates one adenylyl cyclase,
- each adenylyl cyclase makes 100 cAMP molecules,
- every cAMP leads to one active protein kinase A, and each PKA activates 10 phosphorylase kinases,
- each phosphorylase kinase activates 10 glycogen phosphorylases.

Then one epinephrine molecule yields:

$$1 \\times 10 \\times 100 \\times 10 \\times 10 = 10^5 \\text{ active glycogen phosphorylase molecules}$$

Each of those enzymes then releases many glucose units per second, so the final output can reach the order of $10^8$ glucose molecules. This is why a tiny concentration of hormone in the blood can change the behavior of an entire organ.
      `
    },
    {
      id: 'cell4-amplify',
      type: 'input-boxes' as const,
      content: `
**Amplification Practice** 🧮

A hypothetical cascade works like this: one active receptor activates **5** G proteins; each G protein activates **1** adenylyl cyclase; each adenylyl cyclase makes **200** cAMP; each cAMP activates **1** protein kinase A; and each protein kinase A activates **20** target enzymes.

**1)** How many cAMP molecules are made per active receptor?
**2)** How many target enzymes are activated per active receptor?
**3)** A drug halves the number of cAMP made by each adenylyl cyclase. How many target enzymes are now activated per receptor?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1000', '20000', '10000'],
        hint1: 'cAMP: 5 G proteins × 1 cyclase × 200 cAMP each.',
        hint2: 'Target enzymes: (number of cAMP) × 1 PKA each × 20 targets per PKA.',
        hint3: 'Halving one factor in a product halves the final result.',
        explanation: '1) 5 × 200 = 1,000 cAMP. 2) 1,000 × 20 = 20,000 enzymes. 3) With 100 cAMP per cyclase: 5 × 100 × 20 = 10,000 enzymes, half the original output.'
      }
    },
    {
      id: 'cell4-branching',
      type: 'text' as const,
      content: `
### Pathways branch and connect

Real cells do not run one isolated chain. Two features matter for the exam:

- **Branching (divergence):** one pathway can activate several targets. In the liver, protein kinase A both **activates** glycogen breakdown and **inactivates** glycogen synthesis, so the cell does not build glycogen while breaking it down.
- **Cross-talk (convergence):** two different signals can feed into the same relay molecule, and one pathway can block another. The cell's response reflects **all** the signals it receives at once.

> 🎯 **Takeaway:** In any cascade, ask what turns each step on, what turns it off, and how many molecules each step activates. Those three questions let you predict amplification, duration and the effect of any drug or mutation.
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: Reading the Cascade** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In liver cells exposed to epinephrine, what is the direct role of adenylyl cyclase?',
            options: [
              'It removes phosphates from glycogen phosphorylase to activate it',
              'It makes cAMP from ATP once the G protein activates it',
              'It binds epinephrine at the cell surface and changes shape',
              'It breaks glycogen into glucose units for export from the cell'
            ],
            correctAnswer: 1,
            explanation: 'Adenylyl cyclase is the membrane enzyme, switched on by the active G protein, that makes the second messenger cAMP from ATP. The receptor binds the hormone, and glycogen phosphorylase breaks down glycogen.'
          },
          {
            question: 'Protein kinase A activates glycogen breakdown and also inactivates glycogen synthesis. What is the advantage of this branching for the cell?',
            options: [
              'It allows the cell to store glucose and release glucose at the same time',
              'It keeps the cell from wasting ATP to rebuild the same stores it is now using up',
              'It makes the liver cell respond to insulin instead of to epinephrine',
              'It lets the cell skip the reception stage the next time the hormone arrives'
            ],
            correctAnswer: 1,
            explanation: 'Switching off synthesis while switching on breakdown avoids a futile cycle in which ATP would be spent rebuilding the same glycogen, so glucose output is maximized.'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Molecule** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enzyme that makes cAMP from ATP',
            options: ['Adenylyl cyclase', 'Phosphodiesterase', 'Protein kinase A', 'Protein phosphatase']
          },
          {
            label: 'Enzyme that converts cAMP to inactive AMP',
            options: ['Adenylyl cyclase', 'Phosphodiesterase', 'Protein kinase A', 'Protein phosphatase']
          },
          {
            label: 'Enzyme that removes phosphate groups from proteins',
            options: ['Adenylyl cyclase', 'Phosphodiesterase', 'Protein kinase A', 'Protein phosphatase']
          },
          {
            label: 'Enzyme activated by cAMP that phosphorylates other proteins',
            options: ['Adenylyl cyclase', 'Phosphodiesterase', 'Protein kinase A', 'Protein phosphatase']
          }
        ],
        correctAnswers: ['Adenylyl cyclase', 'Phosphodiesterase', 'Protein phosphatase', 'Protein kinase A'],
        hint1: '"Cyclase" makes the cyclic molecule.',
        hint2: 'The "on" enzymes are the cyclase and the kinase; the "off" enzymes are the other two.',
        hint3: 'Kinases add phosphates; phosphatases remove them.',
        explanation: 'Adenylyl cyclase makes cAMP, phosphodiesterase destroys it, protein kinase A is activated by cAMP and phosphorylates targets, and protein phosphatases remove those phosphates.'
      }
    }
  ]
}
