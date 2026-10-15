export const bioCellCommPart6Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
## Cell Communication: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

AP signaling questions rarely ask you to recite a pathway. They hand you an **experiment** and ask you to locate a defect, identify a control, or predict and justify a result. This workshop practices those moves on three data sets.

### A four-step method for any pathway problem

1. **Draw the chain.** Write the pathway as boxes: ligand → receptor → relay(s) → second messenger → kinase → target → response.
2. **Mark what was measured.** Circle the step(s) the data actually report (for example, cAMP level or glucose output).
3. **Locate the break.** A defect lies **after** the last step that still behaves normally and **at or before** the first step that does not.
4. **Justify with direction.** State whether the altered part is stuck on or stuck off, then predict every step downstream.
      `
    },
    {
      id: 'cell6-scenario1',
      type: 'text' as const,
      content: `
### Data set 1: where is the receptor, and what carries the signal?

Liver cells are broken open and separated into a **membrane fraction** and a **cytoplasm fraction** (which contains glycogen and glycogen phosphorylase). Tubes are set up and enzyme activity is measured.

| Tube | Contents | Glycogen phosphorylase activity |
|------|----------|---------------------------------|
| 1 | Cytoplasm + epinephrine | Low |
| 2 | Cytoplasm + membrane fraction + epinephrine | High |
| 3 | Cytoplasm + membrane fraction, no epinephrine | Low |
| 4 | Cytoplasm + cAMP (no membrane, no epinephrine) | High |
| 5 | Membrane fraction + epinephrine (no cytoplasm) | None detected |

**Worked reasoning.**

- *Tubes 1 vs 2:* epinephrine works only when membranes are present, so the **receptor is in the membrane**.
- *Tubes 2 vs 3:* membranes alone do not activate the enzyme, so the hormone, not some membrane component, is the trigger. Tube 3 is the **negative control** for tube 2.
- *Tube 4:* cAMP activates the enzyme with no membrane or hormone, so cAMP acts **downstream** of the receptor: it is the second messenger.
- *Tube 5:* no activity because the enzyme and glycogen are in the cytoplasm fraction, which is missing. The response requires the target.
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reasoning: Data Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which comparison in Data Set 1 shows that the membrane fraction by itself does not switch on glycogen phosphorylase?',
            options: [
              'Tube 1 compared with tube 4',
              'Tube 2 compared with tube 3',
              'Tube 4 compared with tube 5',
              'Tube 1 compared with tube 5'
            ],
            correctAnswer: 1,
            explanation: 'Tubes 2 and 3 are identical except for epinephrine. Activity is high only with the hormone, so the membranes alone are not enough.'
          },
          {
            question: 'A student adds cAMP and membranes to a tube with no cytoplasm. Based on the data, what activity should be expected?',
            options: [
              'High, since cAMP bypasses the receptor in the membrane',
              'None, since the target enzyme and glycogen are absent',
              'Low, since cAMP must first bind the membrane receptor',
              'High, since the membranes convert cAMP into glucose'
            ],
            correctAnswer: 1,
            explanation: 'cAMP can activate the enzyme only if the enzyme is present. Without the cytoplasm fraction there is no glycogen phosphorylase or glycogen, just as in tube 5.'
          }
        ]
      }
    },
    {
      id: 'cell6-scenario2',
      type: 'text' as const,
      content: `
### Data set 2: locating the defect in mutant cells

Three mutant liver cell lines and normal cells are given epinephrine. cAMP and glucose release are measured 5 minutes after the hormone is added and again 30 minutes after it is washed away.

| Cell line | cAMP, hormone present | Glucose release, hormone present | cAMP, 30 min after washout |
|-----------|-----------------------|----------------------------------|----------------------------|
| Normal | High | High | Low |
| Mutant A | Low | Low | Low |
| Mutant B | High | High | **High** |
| Mutant C | High | **Low** | Low |

**Worked reasoning with the four-step method.**

- **Mutant A:** nothing downstream responds, not even cAMP. The break is **at or before adenylyl cyclase**: the receptor, the G protein or the cyclase is stuck off. More data would be needed to tell which.
- **Mutant B:** responds normally but cannot shut off. Something that ends the signal is missing, for example a G protein that cannot hydrolyze GTP, or a missing phosphodiesterase. This is a **stuck-on** defect.
- **Mutant C:** cAMP rises normally, but glucose is not released. Every step through cAMP works, so the defect is **after cAMP**: protein kinase A, phosphorylase kinase or glycogen phosphorylase.

> 📝 **AP Connection:** Notice the language: "the defect lies downstream of cAMP **because** cAMP rises normally **but** glucose release does not." AP scoring rewards a claim tied to a specific piece of evidence.
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reasoning: Data Set 2** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Adding a membrane-permeable form of cAMP to Mutant A cells restores normal glucose release. What does this show about the defect?',
            options: [
              'It lies in protein kinase A or in a later step of the pathway',
              'It lies in a step that comes before cAMP is produced',
              'It lies in the glycogen stores of the mutant cells',
              'It lies in the genes that are transcribed in response'
            ],
            correctAnswer: 1,
            explanation: 'If supplying cAMP rescues the response, every step from cAMP onward works, so the defect must be upstream, at the receptor, the G protein or adenylyl cyclase.'
          },
          {
            question: 'Which change would most likely produce the pattern seen in Mutant C?',
            options: [
              'A receptor with a binding site that no longer fits epinephrine',
              'A G protein that is unable to swap its GDP for GTP when activated',
              'A protein kinase A that cannot phosphorylate its target proteins',
              'A phosphodiesterase that breaks down cAMP faster than normal'
            ],
            correctAnswer: 2,
            explanation: 'In Mutant C, cAMP rises normally but glucose is not released, so the break is after cAMP. A nonfunctional protein kinase A fits; the other changes would all lower cAMP.'
          },
          {
            question: 'Why do Mutant B cells keep a high cAMP level after the hormone is washed away?',
            options: [
              'Their pathway has lost its shut-off step',
              'They make extra epinephrine that rebinds receptors',
              'They have receptors that cannot bind epinephrine',
              'They lack the enzyme that produces cAMP from ATP'
            ],
            correctAnswer: 0,
            explanation: 'The pathway turns on normally but does not turn off, which points to a missing off-switch such as GTP hydrolysis by the G protein or cAMP breakdown by phosphodiesterase.'
          }
        ]
      }
    },
    {
      id: 'cell6-scenario3',
      type: 'text' as const,
      content: `
### Data set 3: dose and response

Heart cells are exposed to increasing concentrations of a hormone, and the rate of contraction is measured as a percent of the maximum.

| Hormone concentration (nM) | Response, no drug (% of max) | Response, with drug X (% of max) |
|----------------------------|------------------------------|----------------------------------|
| 0 | 0 | 0 |
| 1 | 30 | 10 |
| 10 | 80 | 40 |
| 100 | 98 | 85 |
| 1000 | 100 | 99 |

**Reading the curve.**

- Without the drug, the response rises steeply and then **levels off near 100%**. At high concentrations nearly every receptor is occupied, so adding more hormone cannot increase the response: the receptors are **saturated**.
- With drug X, more hormone is needed to reach the same response, but at very high hormone concentration the response still reaches nearly 100%. That pattern fits a drug that **competes with the hormone for the binding site** (a competitive antagonist): enough hormone can outcompete it.

**FRQ-style model answer.** *Identify the independent variable, and describe the effect of drug X.*

> The independent variable is the hormone concentration. Drug X reduces the response at low and moderate hormone concentrations (for example, from 80% to 40% at 10 nM) but not at saturating concentrations (99% at 1000 nM), consistent with the drug competing with the hormone for the receptor.
      `
    },
    {
      id: 'cell6-dose',
      type: 'input-boxes' as const,
      content: `
**Calculate from Data Set 3** 🧮

**1)** At 10 nM hormone, by how many percentage points does drug X lower the response?
**2)** Without the drug, what is the response at 1 nM as a fraction of the response at 10 nM? Give a decimal to two places.
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['40', '0.38'],
        hint1: 'At 10 nM, the responses are 80% without the drug and 40% with it.',
        hint2: 'Divide the 1 nM response by the 10 nM response: 30 ÷ 80.',
        hint3: '30 ÷ 80 = 0.375, which rounds to 0.38.',
        explanation: '1) 80 − 40 = 40 percentage points. 2) 30 ÷ 80 = 0.375 ≈ 0.38.'
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Locate the Break** 🔍

For each result, choose where the defect most likely lies.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'No cAMP rise with hormone; a cell-permeable cAMP restores the response',
            options: ['Upstream of cAMP', 'Downstream of cAMP', 'In the off-switch of the pathway']
          },
          {
            label: 'Normal cAMP rise with hormone; no response even with extra cAMP',
            options: ['Upstream of cAMP', 'Downstream of cAMP', 'In the off-switch of the pathway']
          },
          {
            label: 'Normal response that continues long after the hormone is removed',
            options: ['Upstream of cAMP', 'Downstream of cAMP', 'In the off-switch of the pathway']
          }
        ],
        correctAnswers: ['Upstream of cAMP', 'Downstream of cAMP', 'In the off-switch of the pathway'],
        hint1: 'If cAMP rescues the response, everything from cAMP onward works.',
        hint2: 'If cAMP rises but nothing happens, the problem lies after cAMP.',
        hint3: 'A response that will not stop points to a missing shut-off step.',
        explanation: 'A cAMP rescue places the defect upstream; normal cAMP with no response places it downstream; a response that persists means a shut-off step, such as GTP hydrolysis or cAMP breakdown, is missing.'
      }
    }
  ]
}
