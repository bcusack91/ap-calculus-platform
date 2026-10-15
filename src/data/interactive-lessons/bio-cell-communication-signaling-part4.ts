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

**Cyclic AMP (cAMP)** is the CED's model second messenger:

- An enzyme in the plasma membrane, switched on by the active G protein, converts **ATP → cAMP**.
- Many cAMP molecules spread through the cytoplasm and activate a **protein kinase**, which starts a phosphorylation cascade.
- The cAMP signal is short-lived: another cytoplasmic enzyme quickly breaks cAMP down to inactive AMP. The cAMP level therefore stays high only while the receptor keeps being stimulated.

> 📝 **AP Connection:** Know the sequence ligand → GPCR → G protein → cAMP-making enzyme → cAMP → protein kinase cascade → response, and be ready to predict what happens if any link is removed or stuck "on." The names of the individual enzymes and kinases in a pathway are not tested on the AP exam.
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
            question: 'A drug blocks the enzyme that breaks cAMP down to AMP in liver cells. How will cAMP levels change after epinephrine binds and is then removed?',
            options: [
              'cAMP will never rise, since cAMP is made by the same enzyme the drug blocks',
              'cAMP will rise as usual and stay high after the hormone leaves',
              'cAMP will rise more slowly but fall back at the usual rate afterward',
              'cAMP will rise only if the cell first makes more epinephrine receptors'
            ],
            correctAnswer: 1,
            explanation: 'That enzyme removes cAMP by converting it to AMP. Without it, cAMP is still made normally but is not removed, so the signal persists after the hormone is gone.'
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
| 3 | The active G protein activates the membrane enzyme that makes cAMP | Transduction |
| 4 | That enzyme converts many ATP molecules to **cAMP** | Transduction |
| 5 | cAMP activates a **protein kinase** | Transduction |
| 6 | The kinase phosphorylates and activates the next kinase in a **phosphorylation cascade** | Transduction |
| 7 | The last kinase phosphorylates and activates the **enzyme that breaks down glycogen** | Transduction |
| 8 | Glycogen is broken down, and the cell releases glucose into the blood | Response |

**How it switches off:** epinephrine leaves the receptor; the G protein hydrolyzes GTP; an enzyme breaks cAMP down; phosphatases remove the phosphates. Every "on" step has a matching "off" step.

### Amplification in numbers

Suppose (with simplified, illustrative numbers) that:

- 1 active receptor activates 10 G proteins, each of which activates one cAMP-making enzyme,
- each of those enzymes makes 100 cAMP molecules,
- every cAMP leads to one active first kinase, and each first kinase activates 10 second kinases,
- each second kinase activates 10 glycogen-breaking enzymes.

Then one epinephrine molecule yields:

$$1 \\times 10 \\times 100 \\times 10 \\times 10 = 10^5 \\text{ active glycogen-breaking enzymes}$$

Each of those enzymes then releases many glucose units per second, so the final output can reach the order of $10^8$ glucose molecules. This is why a tiny concentration of hormone in the blood can change the behavior of an entire organ.
      `
    },
    {
      id: 'cell4-amplify',
      type: 'input-boxes' as const,
      content: `
**Amplification Practice** 🧮

A hypothetical cascade works like this: one active receptor activates **5** G proteins; each G protein activates **1** cAMP-making enzyme; each of those enzymes makes **200** cAMP; each cAMP activates **1** protein kinase; and each kinase activates **20** target enzymes.

**1)** How many cAMP molecules are made per active receptor?
**2)** How many target enzymes are activated per active receptor?
**3)** A drug halves the number of cAMP made by each cAMP-making enzyme. How many target enzymes are now activated per receptor?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1000', '20000', '10000'],
        hint1: 'cAMP: 5 G proteins × 1 enzyme each × 200 cAMP per enzyme.',
        hint2: 'Target enzymes: (number of cAMP) × 1 kinase each × 20 targets per kinase.',
        hint3: 'Halving one factor in a product halves the final result.',
        explanation: '1) 5 × 200 = 1,000 cAMP. 2) 1,000 × 20 = 20,000 enzymes. 3) With 100 cAMP per enzyme: 5 × 100 × 20 = 10,000 enzymes, half the original output.'
      }
    },
    {
      id: 'cell4-branching',
      type: 'text' as const,
      content: `
### Pathways branch and connect

Real cells do not run one isolated chain. Two features matter for the exam:

- **Branching (divergence):** one pathway can activate several targets. In the liver, a kinase in the epinephrine pathway both **activates** glycogen breakdown and **inactivates** glycogen synthesis, so the cell does not build glycogen while breaking it down.
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
            question: 'In liver cells exposed to epinephrine, what is the direct job of the activated G protein?',
            options: [
              'It removes phosphates from the glycogen-breaking enzyme to activate it',
              'It activates the membrane enzyme that makes cAMP from ATP',
              'It binds epinephrine at the cell surface and changes shape',
              'It breaks glycogen into glucose units for export from the cell'
            ],
            correctAnswer: 1,
            explanation: 'The GTP-bound G protein switches on the membrane enzyme that makes the second messenger cAMP. The receptor binds the hormone, kinases (not phosphate removal) activate the glycogen-breaking enzyme, and that enzyme breaks down glycogen.'
          },
          {
            question: 'A kinase in the epinephrine pathway activates glycogen breakdown and also inactivates glycogen synthesis. What is the advantage of this branching for the cell?',
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
**Name the Role** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The signal molecule that binds the receptor on the outside of the cell',
            options: ['Ligand', 'cAMP', 'Protein kinase', 'Protein phosphatase']
          },
          {
            label: 'Small molecule that spreads through the cytoplasm and relays the signal inside',
            options: ['Ligand', 'cAMP', 'Protein kinase', 'Protein phosphatase']
          },
          {
            label: 'Enzyme that removes phosphate groups from proteins',
            options: ['Ligand', 'cAMP', 'Protein kinase', 'Protein phosphatase']
          },
          {
            label: 'Enzyme that adds a phosphate from ATP to the next protein in a cascade',
            options: ['Ligand', 'cAMP', 'Protein kinase', 'Protein phosphatase']
          }
        ],
        correctAnswers: ['Ligand', 'cAMP', 'Protein phosphatase', 'Protein kinase'],
        hint1: 'The ligand is the first messenger; the second messenger works inside.',
        hint2: 'The "on" switches add phosphates; the "off" switches remove them.',
        hint3: 'Kinases add phosphates; phosphatases remove them.',
        explanation: 'The ligand is the first messenger that binds the receptor, cAMP is the second messenger inside the cell, protein kinases add phosphates to switch relay proteins on, and protein phosphatases remove those phosphates.'
      }
    }
  ]
}
