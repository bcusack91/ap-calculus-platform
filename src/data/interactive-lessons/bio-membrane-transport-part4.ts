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

The most important primary active transport protein in animal cells is the **sodium-potassium pump** (Na\\(^+\\)/K\\(^+\\) ATPase):

**For each ATP hydrolyzed, the pump moves:**
- **3 Na\\(^+\\) ions OUT** of the cell
- **2 K\\(^+\\) ions INTO** the cell

This creates and maintains steep concentration gradients:
- High Na\\(^+\\) outside, low Na\\(^+\\) inside
- High K\\(^+\\) inside, low K\\(^+\\) outside
- Net export of positive charge → contributes to the negative resting membrane potential (-70 mV)

**The pump cycle:**
1. 3 Na\\(^+\\) bind to cytoplasmic side of the pump
2. ATP is hydrolyzed; phosphate group is transferred to the pump (phosphorylation)
3. Conformational change exposes Na\\(^+\\) to the extracellular side; Na\\(^+\\) is released
4. 2 K\\(^+\\) bind to the extracellular side
5. Dephosphorylation causes conformational change back
6. K\\(^+\\) is released into the cytoplasm

> **Energy Cost:** The Na\\(^+\\)/K\\(^+\\) ATPase consumes approximately **25-30% of total cellular ATP** in many animal cells. In neurons, this figure can reach 70%.

**Other primary active transport pumps:**
- **Ca\\(^{2+}\\) ATPase** — pumps Ca\\(^{2+}\\) out of the cytoplasm (into ER or extracellular space)
- **H\\(^+\\)/K\\(^+\\) ATPase** — pumps H\\(^+\\) into the stomach lumen (gastric acid secretion)
- **H\\(^+\\) ATPase (proton pump)** — in plant cell membranes, creates proton gradients for secondary transport
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
              'It does not contribute to membrane potential',
              'The unequal exchange of ions (3 positive charges out, 2 positive charges in) creates a net export of positive charge, making the inside more negative',
              'It only moves uncharged molecules',
              'Na+ and K+ cancel each other out'
            ],
            correctAnswer: 1,
            explanation: 'Each cycle of the pump exports 3 positive charges (Na+) and imports only 2 positive charges (K+). The net export of 1 positive charge per cycle contributes to the negative resting membrane potential. However, the pump accounts for only ~10% of the membrane potential — the rest comes from K+ leak channels.'
          },
          {
            question: 'Why is the Na+/K+ ATPase classified as an "active" transporter?',
            options: [
              'It moves Na+ and K+ down their concentration gradients',
              'It uses energy from ATP hydrolysis to move ions AGAINST their electrochemical gradients',
              'It only works when the cell is metabolically active',
              'It transports molecules faster than channel proteins'
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
- Example: **SGLT1** — Na\\(^+\\)/glucose symporter in the intestinal epithelium uses the Na\\(^+\\) gradient (established by Na\\(^+\\)/K\\(^+\\) ATPase) to import glucose against its gradient

**2. Antiport (exchange):**
- Substances move in **opposite directions**
- Example: **Na\\(^+\\)/H\\(^+\\) exchanger** — Na\\(^+\\) enters (down its gradient), H\\(^+\\) exits (against its gradient), helping regulate intracellular pH

> **Key Concept:** Secondary active transport is "indirectly" active — it does not directly use ATP, but it depends on a gradient that was created by a primary active transporter that DID use ATP. The energy was stored in the gradient.

**In plants:** The H\\(^+\\) ATPase (proton pump) in the plasma membrane creates a proton gradient. This gradient powers secondary active transport of sucrose, amino acids, and other nutrients into the cell via H\\(^+\\)/solute symporters.
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
            question: 'In the small intestine, glucose is absorbed against its concentration gradient using a Na+/glucose symporter (SGLT1). Why is this considered secondary active transport?',
            options: [
              'It uses ATP directly to pump glucose',
              'It uses the Na+ gradient (created by the Na+/K+ ATPase) as an energy source — Na+ flows down its gradient, providing energy to move glucose against its gradient',
              'Glucose moves down its gradient alongside Na+',
              'It uses GTP instead of ATP'
            ],
            correctAnswer: 1,
            explanation: 'SGLT1 couples the downhill movement of Na+ (established by the Na+/K+ ATPase on the basolateral membrane) with the uphill movement of glucose. The energy for glucose transport comes indirectly from ATP — via the Na+ gradient — hence "secondary" active transport.'
          },
          {
            question: 'What is the difference between a symporter and an antiporter?',
            options: [
              'A symporter uses ATP; an antiporter does not',
              'A symporter moves two substances in the same direction; an antiporter moves them in opposite directions',
              'A symporter moves one substance; an antiporter moves two',
              'There is no functional difference'
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
            question: 'Number of Na+ ions exported per cycle of the Na+/K+ ATPase:',
            answer: '3',
            acceptableAnswers: ['3', 'three', 'Three'],
            placeholder: 'e.g. 2'
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
              'Simple diffusion of O2 across the membrane',
              'Osmosis through aquaporins',
              'The Na+/K+ ATPase and all other primary active transport systems',
              'Facilitated diffusion of glucose through GLUT channels'
            ],
            correctAnswer: 2,
            explanation: 'Primary active transport (like the Na+/K+ ATPase) directly requires ATP. Without ATP, these pumps stop. Passive processes (simple diffusion, osmosis, facilitated diffusion) do not require ATP and would continue, though gradient-dependent secondary transport would gradually fail as the Na+ gradient collapses.'
          },
          {
            question: 'A drug called ouabain specifically inhibits the Na+/K+ ATPase. If ouabain is applied to intestinal epithelial cells, what would happen to glucose absorption via SGLT1?',
            options: [
              'Glucose absorption would increase',
              'Glucose absorption would decrease because the Na+ gradient that powers SGLT1 would collapse without the Na+/K+ ATPase to maintain it',
              'Glucose absorption would be unaffected because SGLT1 uses ATP directly',
              'The cells would switch to simple diffusion for glucose uptake'
            ],
            correctAnswer: 1,
            explanation: 'SGLT1 (secondary active transport) depends on the Na+ gradient maintained by the Na+/K+ ATPase (primary active transport). Ouabain inhibits the pump, causing Na+ to accumulate inside the cell, collapsing the Na+ gradient. Without this gradient, SGLT1 cannot drive glucose against its gradient.'
          }
        ]
      }
    }
  ]
};