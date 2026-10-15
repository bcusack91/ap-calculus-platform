export const bioCellRespirationPart5Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `
## Oxidative Phosphorylation — The Main ATP Factory

**Part 5 of 7**

Oxidative phosphorylation is the culminating stage of aerobic respiration and produces the vast majority of ATP — approximately **26-28 ATP** per glucose.  It consists of two tightly coupled components:

1. **The Electron Transport Chain (ETC):** A series of protein complexes in the inner mitochondrial membrane that pass electrons from NADH and FADH$_2$ to O$_2$, pumping protons (H$^+$) into the intermembrane space
2. **Chemiosmosis:** The flow of protons back through ATP synthase, driving the phosphorylation of ADP to ATP

**Location:** Inner mitochondrial membrane and intermembrane space
      `
    },
    {
      id: 'cr5-etc',
      type: 'text' as const,
      content: `
### The Electron Transport Chain

The ETC consists of four major protein complexes plus two mobile electron carriers:

| Component | Name | Function |
|-----------|------|----------|
| **Complex I** | NADH dehydrogenase | Accepts electrons from NADH; pumps 4 H$^+$ |
| **Complex II** | Succinate dehydrogenase | Accepts electrons from FADH$_2$; does NOT pump H$^+$ |
| **Ubiquinone (Q)** | Coenzyme Q | Mobile carrier; shuttles electrons from Complexes I and II to Complex III |
| **Complex III** | Cytochrome bc1 complex | Passes electrons to cytochrome c; pumps 4 H$^+$ |
| **Cytochrome c** | — | Mobile carrier; shuttles electrons from Complex III to Complex IV |
| **Complex IV** | Cytochrome c oxidase | Passes electrons to O$_2$ (final electron acceptor); pumps 2 H$^+$ |

**The electron flow path:**

$$\\text{NADH} \\rightarrow \\text{Complex I} \\rightarrow \\text{Q} \\rightarrow \\text{Complex III} \\rightarrow \\text{Cyt c} \\rightarrow \\text{Complex IV} \\rightarrow \\text{O}_2$$

$$\\text{FADH}_2 \\rightarrow \\text{Complex II} \\rightarrow \\text{Q} \\rightarrow \\text{Complex III} \\rightarrow \\text{Cyt c} \\rightarrow \\text{Complex IV} \\rightarrow \\text{O}_2$$

> **Why FADH$_2$ produces fewer ATP than NADH:** FADH$_2$ enters at Complex II, which does NOT pump protons. NADH enters at Complex I, which does pump protons. Fewer protons pumped = smaller gradient = fewer ATP via chemiosmosis (1.5 ATP per FADH$_2$ vs. 2.5 ATP per NADH).

At Complex IV, molecular oxygen accepts the electrons and combines with H$^+$ to form **water** — this is why we breathe oxygen:

$$\\frac{1}{2}\\text{O}_2 + 2\\text{H}^+ + 2e^- \\longrightarrow \\text{H}_2\\text{O}$$
      `
    },
    {
      id: 'cr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Electron Transport Chain
      `,
      exercise: {
        questions: [
          {
            question: 'What is the final electron acceptor in the electron transport chain?',
            options: [
              'NAD+',
              'FAD',
              'Water (H2O)',
              'Oxygen (O2)'
            ],
            correctAnswer: 3,
            explanation: 'Molecular oxygen is the final electron acceptor. At the end of the chain, O2 accepts electrons and combines with protons to form water. Without O2, electrons back up and the entire chain stops.'
          },
          {
            question: 'FADH2 yields fewer ATP than NADH because:',
            options: [
              'It carries only one electron, while each NADH carries a pair of them',
              'It hands electrons to the chain later, so less H+ is pumped',
              'It is never oxidized by the chain, so its energy stays locked inside it',
              'Its electrons skip the chain entirely and pass straight to oxygen'
            ],
            correctAnswer: 1,
            explanation: 'FADH2 hands its electrons to the chain at a later point than NADH does, past the first proton pump. Fewer protons are pumped across the membrane per FADH2, so less ATP is made (about 1.5 per FADH2 vs about 2.5 per NADH).'
          },
          {
            question: 'As electrons pass along the electron transport chain from one carrier to the next, what happens?',
            options: [
              'They gain free energy at each step, which is stored directly as ATP',
              'They release free energy that is used to pump H+ across the membrane',
              'They are pumped into the intermembrane space along with the protons',
              'They are passed back to NAD+ to restock NADH for the cycle'
            ],
            correctAnswer: 1,
            explanation: 'Each carrier in the chain holds electrons more tightly than the one before it, ending with oxygen. As electrons move down this series they release free energy, and the chain uses that energy to pump H+ into the intermembrane space. The resulting proton gradient then drives ATP synthase.'
          }
        ]
      }
    },
    {
      id: 'cr5-chemiosmosis',
      type: 'text' as const,
      content: `
### Chemiosmosis and ATP Synthase

As electrons pass through Complexes I, III, and IV, the energy released is used to pump H$^+$ ions from the mitochondrial matrix into the **intermembrane space**.  This creates an **electrochemical gradient** (also called the **proton-motive force**):

- **Chemical gradient:** Higher H$^+$ concentration in the intermembrane space
- **Electrical gradient:** More positive charge in the intermembrane space

This gradient represents **stored potential energy** — like water behind a dam.

**ATP synthase** (sometimes called Complex V) is a remarkable molecular machine that harnesses this gradient.  It has two main components:

- **F$_0$ subunit:** A channel embedded in the membrane through which H$^+$ ions flow back into the matrix
- **F$_1$ subunit:** The catalytic "head" that protrudes into the matrix and synthesizes ATP

As protons flow through F$_0$, the rotor spins (~100 revolutions per second), causing conformational changes in F$_1$ that catalyze:

$$\\text{ADP} + \\text{P}_i \\longrightarrow \\text{ATP}$$

Approximately **4 H$^+$** must pass through ATP synthase to produce 1 ATP.

> **Nobel Prize Connection:** Peter Mitchell received the 1978 Nobel Prize for the chemiosmotic hypothesis — the idea that ATP synthesis is driven by an electrochemical proton gradient across a membrane.  This was initially controversial but is now one of the most fundamental concepts in bioenergetics.
      `
    },
    {
      id: 'cr5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Chemiosmosis
      `,
      exercise: {
        questions: [
          {
            question: 'The proton-motive force has both a chemical and an electrical component. The chemical component is due to:',
            options: [
              'A higher concentration of electrons in the matrix than in the intermembrane space',
              'A higher concentration of H+ in the intermembrane space than in the matrix',
              'The voltage that ATP synthase creates as it spins in the membrane',
              'A higher concentration of O2 in the matrix, where it binds the final carrier'
            ],
            correctAnswer: 1,
            explanation: 'The chemical component of the proton-motive force is the pH gradient (concentration difference of H+ ions) across the inner mitochondrial membrane — higher in the intermembrane space, lower in the matrix.'
          },
          {
            question: 'Which statement best describes how ATP synthase produces ATP?',
            options: [
              'It directly transfers electrons from NADH to ADP to make ATP',
              'It uses energy from protons flowing down their gradient to phosphorylate ADP',
              'It breaks down glucose in the matrix to release stored energy',
              'It pumps protons out of the matrix, using the energy to make heat'
            ],
            correctAnswer: 1,
            explanation: 'ATP synthase is a rotary motor enzyme. Protons flow through its channel (F0) down the electrochemical gradient, causing rotation that drives conformational changes in the catalytic head (F1), forcing ADP and Pi together to form ATP.'
          }
        ]
      }
    },
    {
      id: 'cr5-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Oxidative Phosphorylation
      `,
      exercise: {
        questions: [
          {
            question: 'The molecule formed when O2 accepts electrons at the end of the ETC:',
            answer: 'water',
            acceptableAnswers: ['water', 'Water', 'H2O', 'h2o'],
            placeholder: 'e.g. CO2'
          },
          {
            question: 'The name for the electrochemical H+ gradient that drives ATP synthesis:',
            answer: 'proton-motive force',
            acceptableAnswers: ['proton-motive force', 'proton motive force', 'PMF', 'pmf', 'electrochemical gradient'],
            placeholder: 'e.g. membrane potential'
          },
          {
            question: 'The approximate total number of ATP molecules produced per glucose by oxidative phosphorylation:',
            answer: '26-28',
            acceptableAnswers: ['26-28', '26', '27', '28', 'about 26', 'about 28', '26 to 28'],
            placeholder: 'e.g. 10'
          }
        ]
      }
    },
    {
      id: 'cr5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the ETC Component
      `,
      exercise: {
        questions: [
          {
            question: 'Delivers high-energy electrons to the start of the chain:',
            options: ['NADH', 'ATP', 'O2', 'H2O'],
            correctAnswer: 'NADH'
          },
          {
            question: 'Hands its electrons to the chain at a later point, so fewer H+ are pumped:',
            options: ['NADH', 'FADH2', 'O2', 'ATP'],
            correctAnswer: 'FADH2'
          },
          {
            question: 'Accepts electrons at the end of the chain (the final electron acceptor):',
            options: ['NAD+', 'CO2', 'H2O', 'O2'],
            correctAnswer: 'O2'
          },
          {
            question: 'The compartment into which the chain pumps H+ ions:',
            options: ['Mitochondrial matrix', 'Intermembrane space', 'Cytoplasm', 'Thylakoid space'],
            correctAnswer: 'Intermembrane space'
          }
        ]
      }
    },
    {
      id: 'cr5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Oxidative Phosphorylation
      `,
      exercise: {
        questions: [
          {
            question: 'Cyanide blocks the transfer of electrons to oxygen at the end of the electron transport chain. If cyanide is added to actively respiring cells, what will happen?',
            options: [
              'Only the citric acid cycle will be affected, since it is the step that uses oxygen',
              'Electrons back up along the chain, and ATP synthesis by chemiosmosis stops',
              'Cells will switch to aerobic respiration through a different chain',
              'FADH2 production will increase to keep electrons flowing'
            ],
            correctAnswer: 1,
            explanation: 'If electrons cannot be passed to O2, they back up through the whole chain. Proton pumping stops, the gradient dissipates, and ATP synthase can no longer make ATP by chemiosmosis. The cell must rely on glycolysis (and fermentation) alone.'
          },
          {
            question: 'Dinitrophenol (DNP) is an uncoupling agent that allows protons to leak freely across the inner mitochondrial membrane. What effect would DNP have?',
            options: [
              'ATP production rises, since more protons can now reach ATP synthase',
              'The electron transport chain stops because there are no electrons',
              'The gradient dissipates, so the energy is released as heat',
              'Glycolysis is inhibited, so no NADH reaches the mitochondria'
            ],
            correctAnswer: 2,
            explanation: 'DNP creates pores that allow H+ to flow back into the matrix without going through ATP synthase. The proton gradient collapses, uncoupling electron transport from ATP synthesis. The ETC continues running (electrons still flow to O2), but the energy is released as heat rather than captured as ATP.'
          }
        ]
      }
    }
  ]
};