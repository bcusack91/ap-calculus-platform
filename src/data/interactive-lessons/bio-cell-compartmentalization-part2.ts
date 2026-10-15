export const bioCellCompartmentPart2Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p2-s1-intro',
      type: 'text' as const,
      content: `
## Internal Membranes as Work Surfaces

**Part 2 of 7 — Internal Membranes as Work Surfaces**

Part 1 showed that membranes separate reactions. This part covers the second half of the CED statement: internal membranes **increase the surface area where reactions can occur**.

Many of the cell's most important enzymes are not dissolved in a fluid. They are **membrane proteins**, embedded in a lipid bilayer, so the amount of membrane limits how many of them a cell can hold.

| Membrane | Proteins embedded in it | Process it supports |
|---|---|---|
| Inner mitochondrial membrane | Electron transport chain proteins and ATP synthase | Oxidative phosphorylation (ATP from cellular respiration) |
| Thylakoid membrane (chloroplast) | Photosystems I and II, electron carriers, ATP synthase | Light-dependent reactions of photosynthesis |
| Smooth ER membrane | Enzymes of lipid synthesis and detoxification | Building phospholipids and steroids; modifying drugs and toxins |
| Rough ER membrane | Docking sites for ribosomes and protein channels | Making proteins that are secreted or placed in membranes |
| Plasma membrane of a prokaryote | Electron transport chain proteins and ATP synthase | Respiration in cells that lack mitochondria |

The pattern is the same in every row: **more membrane means more copies of the embedded proteins, which means more capacity for the process.**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s2-folding',
      type: 'text' as const,
      content: `
### Folding adds area without adding much volume

A membrane can gain area by folding. The inner mitochondrial membrane folds into **cristae**, and the thylakoid membranes stack into **grana**. Folding packs a large area of membrane into a small organelle.

#### Worked example — counting ATP synthase

A model mitochondrion has an inner membrane that would cover **6 μm²** if it were smooth. Its cristae raise the inner membrane area to **30 μm²**. Assume each square micrometer carries the same density of ATP synthase, **1,500 complexes per μm²**.

1. **Area gain from folding:** 30 ÷ 6 = **5 times** as much membrane.
2. **ATP synthase without folds:** 6 × 1,500 = **9,000** complexes.
3. **ATP synthase with cristae:** 30 × 1,500 = **45,000** complexes.
4. **Interpretation:** the organelle's volume barely changes, but its capacity for oxidative phosphorylation rises fivefold because the number of embedded enzymes scales with membrane area.

(These numbers are a teaching model, not measured values.)

#### Structure tracks demand

Real cells show the same logic. Mitochondria in heart muscle, which works without rest, have **more densely packed cristae** than mitochondria in liver cells. Cells that make large amounts of secreted protein, such as cells of the pancreas that release digestive enzymes, are packed with **rough ER**. When a question describes a cell with an unusually large amount of one membrane, infer that the cell relies heavily on the process that membrane supports.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s3-mcq-surface',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Surface Area and Capacity
      `,
      exercise: {
        questions: [
          {
            question: 'Mitochondria from tissue X have about three times as much cristae membrane per mitochondrion as mitochondria from tissue Y. Which prediction is best supported?',
            options: [
              'Tissue X has a higher capacity for ATP production per mitochondrion',
              'Tissue X mitochondria hold a larger volume of matrix fluid',
              'Tissue Y depends more on oxidative phosphorylation for ATP',
              'Tissue Y mitochondria contain more copies of their own DNA'
            ],
            correctAnswer: 0,
            explanation: 'Electron transport proteins and ATP synthase sit in the inner membrane, so more cristae membrane means more of them and more ATP-making capacity. Folding adds membrane area, not matrix volume.'
          },
          {
            question: 'Why does folding the inner mitochondrial membrane increase the rate of oxidative phosphorylation more effectively than enlarging the matrix would?',
            options: [
              'The matrix enzymes need a folded membrane to stay active',
              'The key proteins are embedded in the membrane itself',
              'A larger matrix would dilute oxygen below its usable level',
              'Folds trap glucose near the respiration enzymes'
            ],
            correctAnswer: 1,
            explanation: 'The electron transport chain and ATP synthase are membrane proteins, so their number depends on membrane area. Glucose is not used inside mitochondria; it is broken down to pyruvate in the cytosol first.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p2-s4-gradients',
      type: 'text' as const,
      content: `
### A sealed compartment can hold a gradient

Surface area is only half the story. The inner mitochondrial membrane and the thylakoid membrane each **enclose a space**, and that enclosure is what makes chemiosmosis possible.

| | Mitochondrion | Chloroplast |
|---|---|---|
| Protons pumped **from** | Matrix | Stroma |
| Protons pumped **into** | Intermembrane space | Thylakoid space (lumen) |
| Energy source for pumping | Electrons from NADH and $\\text{FADH}_2$ | Electrons excited by light |
| Protons flow back through | ATP synthase in the inner membrane | ATP synthase in the thylakoid membrane |
| ATP is made in | Matrix | Stroma |

The proton gradient stores energy only because the membrane is **nearly impermeable to protons**. Protons can return to the other side only by passing through ATP synthase, which harnesses their flow to make ATP.

#### Worked example — what a leaky membrane does

**Setup:** A compound makes the inner mitochondrial membrane permeable to protons.

1. **Pumping continues.** Electron transport still runs and still pumps protons into the intermembrane space.
2. **The gradient collapses.** Protons leak back into the matrix through the bilayer instead of through ATP synthase.
3. **ATP output falls.** Less proton flow passes through ATP synthase, so less ATP is made per unit of fuel.
4. **Energy becomes heat.** The energy of the gradient is released as heat. Brown fat uses this same "uncoupling" on purpose to generate body heat, a link the CED makes to thermoregulation.

**Conclusion:** the membrane's value is not just the proteins it holds but the sealed compartment it forms.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s5-input',
      type: 'input-boxes' as const,
      content: `
### Calculate and name

A model chloroplast with no thylakoids would have only its inner envelope membrane, about **4 μm²**, to hold light-capturing proteins. Its stacked thylakoid membranes instead provide **48 μm²**. Each μm² holds **200** photosystem II complexes.

1) By what factor do the thylakoids increase the membrane area available?

2) How many photosystem II complexes does the stacked chloroplast hold?

3) Into which chloroplast space are protons pumped during the light reactions? (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '9600', 'thylakoid'],
        hint1: 'Divide the thylakoid area by the envelope area.',
        hint2: 'Multiply the stacked area by the number of complexes per square micrometer.',
        hint3: 'Protons build up inside the membrane sacs, not in the surrounding stroma.',
        explanation: 'The thylakoids give 48 ÷ 4 = 12 times the area, and 48 × 200 = 9,600 photosystem II complexes. Protons are pumped from the stroma into the thylakoid space, then flow back out through ATP synthase.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p2-s6-prokaryotes',
      type: 'text' as const,
      content: `
### The prokaryotic version

Prokaryotes lack mitochondria and chloroplasts, yet many respire aerobically and some photosynthesize. They use the **plasma membrane** as their work surface: electron transport proteins in the plasma membrane pump protons **out of the cell**, and ATP synthase in the same membrane lets them flow back in. The "sealed compartment" is the whole cell. Cyanobacteria go further and have internal **thylakoid membranes**, which is one reason they are the accepted relatives of chloroplasts (Part 5).

A larger cell cannot simply rely on its plasma membrane, because surface area grows more slowly than volume. Internal membranes give eukaryotic cells extra working surface that does not depend on the cell's outer surface.

### Common misconceptions

- **"Cristae make the mitochondrion bigger."** Folding adds membrane area, not significant volume.
- **"The proton gradient is a store of ATP."** The gradient stores potential energy; ATP is made only when protons flow through ATP synthase.
- **"Membranes are simply barriers."** In these organelles the membrane is the machine: it holds the enzymes in sequence and seals the gradient they build.

> **AP Connection:** Expect model-analysis questions that show a diagram of a mitochondrion or chloroplast and ask what happens if the membrane becomes leaky, if folding is reduced, or if ATP synthase is blocked. Tie every answer to the proton gradient and to membrane area.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Gradients and Membranes
      `,
      exercise: {
        questions: [
          {
            question: 'A chemical makes thylakoid membranes freely permeable to protons, but the photosystems still absorb light and pass electrons. Which outcome is most likely?',
            options: [
              'ATP output rises as protons cross the membrane more easily',
              'ATP output falls as no proton gradient can form',
              'ATP output holds steady since electron flow still continues',
              'Oxygen release stops since water can no longer be split'
            ],
            correctAnswer: 1,
            explanation: 'Electron flow continues, but protons leak out of the thylakoid space instead of passing through ATP synthase, so the gradient that drives ATP synthesis collapses. Water splitting depends on light and electron flow, which still occur.'
          },
          {
            question: 'An aerobic bacterium has no mitochondria. Where are its electron transport chain and ATP synthase located?',
            options: [
              'In its plasma membrane',
              'In its nucleoid region',
              'In its ribosome subunits',
              'In its cell wall layer'
            ],
            correctAnswer: 0,
            explanation: 'Prokaryotes carry out oxidative phosphorylation in the plasma membrane, pumping protons out of the cell and letting them flow back through ATP synthase. The cell wall lies outside the membrane and cannot hold a sealed gradient.'
          },
          {
            question: 'Brown fat cells contain a protein that lets protons leak across the inner mitochondrial membrane. Compared with other cells using the same amount of fuel, brown fat cells most likely produce:',
            options: [
              'More ATP and less heat',
              'Less ATP and more heat',
              'Less ATP and equal heat',
              'Less ATP and less heat'
            ],
            correctAnswer: 1,
            explanation: 'Protons that leak back through the bilayer bypass ATP synthase, so less ATP is made and the energy of the gradient is released as heat. This uncoupling helps maintain body temperature.'
          }
        ]
      }
    }
  ]
};
