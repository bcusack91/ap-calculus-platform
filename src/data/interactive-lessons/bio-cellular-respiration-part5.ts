export const bioCellRespirationPart5Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `
## Oxidative Phosphorylation — The Main ATP Factory

**Part 5 of 7**

Oxidative phosphorylation is the culminating stage of aerobic respiration and produces the vast majority of ATP — approximately **30-34 ATP** per glucose.  It consists of two tightly coupled components:

1. **The Electron Transport Chain (ETC):** A series of protein complexes in the inner mitochondrial membrane that pass electrons from NADH and FADH\\(_2\\) to O\\(_2\\), pumping protons (H\\(^+\\)) into the intermembrane space
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
| **Complex I** | NADH dehydrogenase | Accepts electrons from NADH; pumps 4 H\\(^+\\) |
| **Complex II** | Succinate dehydrogenase | Accepts electrons from FADH\\(_2\\); does NOT pump H\\(^+\\) |
| **Ubiquinone (Q)** | Coenzyme Q | Mobile carrier; shuttles electrons from Complexes I and II to Complex III |
| **Complex III** | Cytochrome bc1 complex | Passes electrons to cytochrome c; pumps 4 H\\(^+\\) |
| **Cytochrome c** | — | Mobile carrier; shuttles electrons from Complex III to Complex IV |
| **Complex IV** | Cytochrome c oxidase | Passes electrons to O\\(_2\\) (final electron acceptor); pumps 2 H\\(^+\\) |

**The electron flow path:**

$$\\text{NADH} \\rightarrow \\text{Complex I} \\rightarrow \\text{Q} \\rightarrow \\text{Complex III} \\rightarrow \\text{Cyt c} \\rightarrow \\text{Complex IV} \\rightarrow \\text{O}_2$$

$$\\text{FADH}_2 \\rightarrow \\text{Complex II} \\rightarrow \\text{Q} \\rightarrow \\text{Complex III} \\rightarrow \\text{Cyt c} \\rightarrow \\text{Complex IV} \\rightarrow \\text{O}_2$$

> **Why FADH\\(_2\\) produces fewer ATP than NADH:** FADH\\(_2\\) enters at Complex II, which does NOT pump protons. NADH enters at Complex I, which does pump protons. Fewer protons pumped = smaller gradient = fewer ATP via chemiosmosis (1.5 ATP per FADH\\(_2\\) vs. 2.5 ATP per NADH).

At Complex IV, molecular oxygen accepts the electrons and combines with H\\(^+\\) to form **water** — this is why we breathe oxygen:

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
              'Water',
              'Oxygen (O2)'
            ],
            correctAnswer: 3,
            explanation: 'Molecular oxygen is the final electron acceptor. At Complex IV, O2 accepts electrons and combines with protons to form water. Without O2, electrons back up and the entire chain stops.'
          },
          {
            question: 'FADH2 yields fewer ATP than NADH because:',
            options: [
              'FADH2 carries fewer electrons',
              'FADH2 enters at Complex II, which does not pump protons across the membrane',
              'FADH2 is not oxidized in the ETC',
              'FADH2 bypasses ATP synthase entirely'
            ],
            correctAnswer: 1,
            explanation: 'FADH2 donates electrons to Complex II (succinate dehydrogenase), which passes them to ubiquinone but does NOT pump any H+ ions. This means fewer protons contribute to the gradient, resulting in less ATP per FADH2 (~1.5 vs ~2.5 for NADH).'
          },
          {
            question: 'Which component of the ETC is a small mobile protein (not embedded in the membrane) that carries electrons between Complex III and Complex IV?',
            options: [
              'Ubiquinone (Coenzyme Q)',
              'Cytochrome c',
              'NADH dehydrogenase',
              'ATP synthase'
            ],
            correctAnswer: 1,
            explanation: 'Cytochrome c is a small, water-soluble protein located in the intermembrane space. It accepts electrons from Complex III and delivers them to Complex IV. Ubiquinone (CoQ) is the other mobile carrier, but it operates between Complexes I/II and Complex III within the membrane.'
          }
        ]
      }
    },
    {
      id: 'cr5-chemiosmosis',
      type: 'text' as const,
      content: `
### Chemiosmosis and ATP Synthase

As electrons pass through Complexes I, III, and IV, the energy released is used to pump H\\(^+\\) ions from the mitochondrial matrix into the **intermembrane space**.  This creates an **electrochemical gradient** (also called the **proton-motive force**):

- **Chemical gradient:** Higher H\\(^+\\) concentration in the intermembrane space
- **Electrical gradient:** More positive charge in the intermembrane space

This gradient represents **stored potential energy** — like water behind a dam.

**ATP synthase** (sometimes called Complex V) is a remarkable molecular machine that harnesses this gradient.  It has two main components:

- **F\\(_0\\) subunit:** A channel embedded in the membrane through which H\\(^+\\) ions flow back into the matrix
- **F\\(_1\\) subunit:** The catalytic "head" that protrudes into the matrix and synthesizes ATP

As protons flow through F\\(_0\\), the rotor spins (~100 revolutions per second), causing conformational changes in F\\(_1\\) that catalyze:

$$\\text{ADP} + \\text{P}_i \\longrightarrow \\text{ATP}$$

Approximately **4 H\\(^+\\)** must pass through ATP synthase to produce 1 ATP.

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
              'The difference in electron concentration across the membrane',
              'The higher concentration of H+ ions in the intermembrane space compared to the matrix',
              'The voltage generated by ATP synthase',
              'The binding of oxygen to cytochrome c'
            ],
            correctAnswer: 1,
            explanation: 'The chemical component of the proton-motive force is the pH gradient (concentration difference of H+ ions) across the inner mitochondrial membrane — higher in the intermembrane space, lower in the matrix.'
          },
          {
            question: 'Which statement best describes how ATP synthase produces ATP?',
            options: [
              'It directly transfers electrons from NADH to ADP',
              'It uses the energy from protons flowing down their concentration gradient to catalyze phosphorylation of ADP',
              'It breaks down glucose in the matrix',
              'It pumps protons out of the matrix to generate heat'
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
            answer: '30-34',
            acceptableAnswers: ['30-34', '30', '32', '34', 'about 30', 'about 34', '30 to 34'],
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
            question: 'Accepts electrons from NADH and pumps 4 H+ ions:',
            options: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
            correctAnswer: 'Complex I'
          },
          {
            question: 'Also known as succinate dehydrogenase; does NOT pump H+:',
            options: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
            correctAnswer: 'Complex II'
          },
          {
            question: 'Transfers electrons to O2 (the final electron acceptor):',
            options: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
            correctAnswer: 'Complex IV'
          },
          {
            question: 'The mobile electron carrier that shuttles electrons within the membrane between Complexes I/II and Complex III:',
            options: ['Cytochrome c', 'Ubiquinone (Coenzyme Q)', 'NADH', 'FAD'],
            correctAnswer: 'Ubiquinone (Coenzyme Q)'
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
            question: 'Cyanide is a poison that inhibits Complex IV. If cyanide is added to actively respiring cells, what will happen?',
            options: [
              'Only the citric acid cycle will be affected',
              'Electrons will back up through the entire chain, the proton gradient will collapse, and ATP production by chemiosmosis will stop',
              'Cells will switch to aerobic respiration at a different complex',
              'FADH2 production will increase to compensate'
            ],
            correctAnswer: 1,
            explanation: 'If Complex IV is blocked, it cannot pass electrons to O2. Electrons back up through Complexes III, I, and the carriers. Proton pumping stops, the gradient dissipates, and ATP synthase can no longer function. The cell must rely on glycolysis (and fermentation) alone.'
          },
          {
            question: 'Dinitrophenol (DNP) is an uncoupling agent that allows protons to leak freely across the inner mitochondrial membrane. What effect would DNP have?',
            options: [
              'ATP production increases because more protons are available',
              'The electron transport chain stops because there are no electrons',
              'The proton gradient is dissipated, so ATP synthase cannot function — energy is released as heat instead',
              'Glycolysis is inhibited'
            ],
            correctAnswer: 2,
            explanation: 'DNP creates pores that allow H+ to flow back into the matrix without going through ATP synthase. The proton gradient collapses, uncoupling electron transport from ATP synthesis. The ETC continues running (electrons still flow to O2), but the energy is released as heat rather than captured as ATP.'
          }
        ]
      }
    }
  ]
};