export const bioMembraneTransportPart4Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt4-intro',
      type: 'text' as const,
      content: `
## Active Transport — Moving Against the Gradient

**Part 4 of 7**

Active transport moves substances **against** their concentration (or electrochemical) gradient — from low to high concentration.  This requires **energy input**, typically from ATP hydrolysis.

Active transport is essential for:
- Maintaining ion gradients across membranes
- Accumulating nutrients inside cells
- Removing waste products
- Generating electrical signals in neurons
      `
    },
    {
      id: 'mt4-primary',
      type: 'text' as const,
      content: `
### Primary Active Transport: The Na+/K+ ATPase

The most important primary active transport protein in animal cells is the **sodium-potassium pump** (Na$^+$/K$^+$ ATPase):

**For each ATP hydrolyzed, the pump moves:**
- **3 Na$^+$ ions OUT** of the cell
- **2 K$^+$ ions INTO** the cell

This creates and maintains steep concentration gradients:
- High Na$^+$ outside, low Na$^+$ inside
- High K$^+$ inside, low K$^+$ outside
- Net export of positive charge → contributes to the negative resting membrane potential (-70 mV)

**How it works, in one sentence:** energy from ATP changes the pump protein's shape, so it alternately picks up ions on one side of the membrane and releases them on the other. (The step-by-step pump cycle and the exact ion counts are not tested on the AP exam; the idea that ATP-powered pumps build and maintain the gradients, and so the membrane potential, is.)

> **Energy Cost:** The Na$^+$/K$^+$ ATPase consumes approximately **25-30% of total cellular ATP** in many animal cells. In neurons, this figure can reach 70%.

**Another primary active transport pump:**
- **Proton pump (H$^+$ ATPase)** — in plant cell membranes, uses ATP to pump H$^+$ out of the cell, creating a proton gradient that other transport can use
      `
    },
    {
      id: 'mt4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Primary Active Transport
      `,
      exercise: {
        questions: [
          {
            question: 'The Na+/K+ ATPase pumps 3 Na+ out and 2 K+ in per ATP. Why does this contribute to the membrane potential?',
            options: [
              'It does not contribute, since Na+ and K+ each carry the same single charge',
              'It moves more positive charge out than in, leaving the inside more negative',
              'It pumps chloride ions in along with K+, making the inside more negative',
              'It moves more positive charge in than out, leaving the inside positive'
            ],
            correctAnswer: 1,
            explanation: 'Each cycle of the pump exports 3 positive charges (Na+) and imports only 2 positive charges (K+). The net export of 1 positive charge per cycle contributes to the negative resting membrane potential. However, the pump accounts for only ~10% of the membrane potential — the rest comes from K+ leak channels.'
          },
          {
            question: 'Why is the Na+/K+ ATPase classified as an "active" transporter?',
            options: [
              'It moves Na+ and K+ down their concentration gradients through a pore',
              'It uses ATP hydrolysis to move ions against their gradients',
              'It works only while the cell is metabolically active and dividing',
              'It moves ions faster than channel proteins, so it is called active'
            ],
            correctAnswer: 1,
            explanation: 'Active transport requires direct energy input (ATP hydrolysis in this case) because it moves substances against their gradient. Na+ is pumped out despite being at lower concentration inside, and K+ is pumped in despite being at lower concentration outside.'
          }
        ]
      }
    },
    {
      id: 'mt4-secondary',
      type: 'text' as const,
      content: `
### Secondary Active Transport (Cotransport)

Secondary active transport uses the energy stored in an **existing ion gradient** (established by primary active transport) to drive the transport of another substance.

**Two types:**

**1. Symport (cotransport):**
- Both substances move in the **same direction**
- The ion moves DOWN its gradient, providing energy for the other substance to move AGAINST its gradient
- Example: a **Na$^+$/glucose symporter** in intestinal cells uses the Na$^+$ gradient (established by the Na$^+$/K$^+$ pump) to import glucose against its gradient

**2. Antiport (exchange):**
- Substances move in **opposite directions**
- Example: a Na$^+$/H$^+$ exchanger — Na$^+$ enters (down its gradient) while H$^+$ exits (against its gradient), helping regulate the pH inside the cell

> **Key Concept:** Secondary active transport is "indirectly" active — it does not directly use ATP, but it depends on a gradient that was created by a primary active transporter that DID use ATP. The energy was stored in the gradient.

**In plants:** The H$^+$ ATPase (proton pump) in the plasma membrane creates a proton gradient. This gradient powers secondary active transport of sucrose, amino acids, and other nutrients into the cell via H$^+$/solute symporters.
      `
    },
    {
      id: 'mt4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Secondary Active Transport
      `,
      exercise: {
        questions: [
          {
            question: 'In the small intestine, glucose is absorbed against its concentration gradient using a Na+/glucose symporter. Why is this considered secondary active transport?',
            options: [
              'The symporter uses ATP directly to pump glucose against its gradient',
              'Glucose uptake is powered by the Na+ gradient that the Na+/K+ pump builds',
              'Glucose moves down its own gradient alongside the Na+ ions',
              'It uses GTP instead of ATP to pump glucose into the cell'
            ],
            correctAnswer: 1,
            explanation: 'The symporter couples the downhill movement of Na+ (a gradient built by the Na+/K+ pump) with the uphill movement of glucose. The energy for glucose transport comes indirectly from ATP — via the Na+ gradient — hence "secondary" active transport.'
          },
          {
            question: 'What is the difference between a symporter and an antiporter?',
            options: [
              'A symporter uses ATP directly; an antiporter uses an existing ion gradient',
              'A symporter moves both one way; an antiporter moves them opposite ways',
              'A symporter moves one substance; an antiporter moves two at the same time',
              'A symporter works in plants; an antiporter works only in animal cells'
            ],
            correctAnswer: 1,
            explanation: 'In symport (cotransport), both the ion and the transported molecule move in the same direction across the membrane. In antiport (exchange), the ion and transported molecule move in opposite directions. Both are powered by the existing ion gradient.'
          }
        ]
      }
    },
    {
      id: 'mt4-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Active Transport
      `,
      exercise: {
        questions: [
          {
            question: 'The pump that maintains the Na+ and K+ gradients in animal cells (common name):',
            answer: 'sodium-potassium pump',
            acceptableAnswers: ['sodium-potassium pump', 'Na+/K+ ATPase', 'Na/K ATPase', 'sodium potassium pump', 'Na+/K+ pump'],
            placeholder: 'e.g. calcium pump'
          },
          {
            question: 'A transporter where two substances move in the same direction:',
            answer: 'symporter',
            acceptableAnswers: ['symporter', 'Symporter', 'symport', 'cotransporter', 'cotransport'],
            placeholder: 'e.g. antiporter'
          },
          {
            question: 'Transport that uses an existing ion gradient, rather than ATP directly, to move another substance against its gradient (two words):',
            answer: 'secondary active',
            acceptableAnswers: ['secondary active', 'secondary active transport', 'Secondary active transport', 'cotransport'],
            placeholder: 'e.g. simple diffusion'
          }
        ]
      }
    },
    {
      id: 'mt4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Active Transport
      `,
      exercise: {
        questions: [
          {
            question: 'If a cell is treated with a metabolic poison that stops ATP production, which of the following would be directly affected?',
            options: [
              'Simple diffusion of O2 and CO2 across the lipid bilayer of the membrane',
              'Osmosis of water through aquaporin channels',
              'The Na+/K+ ATPase and all other primary active transport systems',
              'Facilitated diffusion of glucose through carrier proteins'
            ],
            correctAnswer: 2,
            explanation: 'Primary active transport (like the Na+/K+ ATPase) directly requires ATP. Without ATP, these pumps stop. Passive processes (simple diffusion, osmosis, facilitated diffusion) do not require ATP and would continue, though gradient-dependent secondary transport would gradually fail as the Na+ gradient collapses.'
          },
          {
            question: 'A drug specifically inhibits the Na+/K+ pump. If the drug is applied to intestinal cells, what would happen to glucose absorption by the Na+/glucose symporter?',
            options: [
              'It would rise, because more Na+ would stay outside the cells to drive it',
              'It would drop as the Na+ gradient powering the symporter collapses',
              'It would be unaffected, because the symporter hydrolyzes ATP directly',
              'It would continue, since the cells would switch to simple diffusion'
            ],
            correctAnswer: 1,
            explanation: 'The symporter (secondary active transport) depends on the Na+ gradient maintained by the Na+/K+ pump (primary active transport). Blocking the pump lets Na+ accumulate inside the cell and collapses the Na+ gradient. Without this gradient, the symporter cannot drive glucose against its gradient.'
          }
        ]
      }
    }
  ]
};