export const bioMembraneTransportPart7Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt7-intro',
      type: 'text' as const,
      content: `
## AP Review — Membrane Transport

**Part 7 of 7**

Comprehensive AP-exam-style questions integrating concepts from all parts of the membrane transport unit.
      `
    },
    {
      id: 'mt7-summary',
      type: 'text' as const,
      content: `
### Key Principles Summary

1. **Membranes are selectively permeable** — small nonpolar molecules cross freely; large, polar, and charged molecules need transport proteins
2. **Passive transport** follows the gradient (no ATP); **active transport** goes against the gradient (requires ATP, directly or indirectly)
3. **Water potential** determines the direction of osmosis: $\\Psi = \\Psi_s + \\Psi_p$; water moves from high $\\Psi$ to low $\\Psi$
4. **The Na+/K+ ATPase** is the foundation for many secondary transport processes and helps maintain the resting membrane potential
5. **Bulk transport** (endocytosis/exocytosis) handles large molecules and particles via membrane vesicles
      `
    },
    {
      id: 'mt7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'A cell is placed in an isotonic solution containing a solute that slowly permeates the membrane. Over time, what will happen?',
            options: [
              'The cell will remain unchanged indefinitely',
              'As the permeating solute enters the cell and equilibrates, the non-permeating solutes inside the cell make the interior hypertonic; water will enter by osmosis and the cell will swell',
              'The cell will shrink as the solute draws water out',
              'The solute will be actively pumped out'
            ],
            correctAnswer: 1,
            explanation: 'Initially, the solution is isotonic (equal total solute). As the permeating solute crosses the membrane and equilibrates, it no longer contributes to the osmotic gradient. But the non-permeating solutes inside the cell still exert osmotic pressure, making the interior effectively hypertonic relative to the outside. Water enters, and the cell swells.'
          },
          {
            question: 'Cystic fibrosis is caused by a mutation in the CFTR protein, a Cl- channel in epithelial cells. Defective CFTR prevents normal Cl- secretion. How does this lead to thick, sticky mucus?',
            options: [
              'Cl- directly makes mucus thicker',
              'Without Cl- secretion, less water follows by osmosis to hydrate the mucus layer, resulting in dehydrated, thick mucus that is difficult to clear',
              'The mutation causes excess mucus production',
              'CFTR normally transports mucus proteins'
            ],
            correctAnswer: 1,
            explanation: 'Normally, CFTR exports Cl- to the epithelial surface, and Na+ follows electrically. The resulting NaCl concentration outside the cell draws water out by osmosis, keeping the mucus hydrated. Without functional CFTR, Cl- and water do not exit, and mucus becomes dehydrated and thick.'
          },
          {
            question: 'During a nerve impulse, Na+ channels open and Na+ rushes into the cell. This Na+ movement is:',
            options: [
              'Active transport — it requires ATP',
              'Facilitated diffusion — Na+ moves down its electrochemical gradient through a channel protein, requiring no ATP',
              'Simple diffusion — Na+ passes directly through the lipid bilayer',
              'Exocytosis — Na+ is released from vesicles'
            ],
            correctAnswer: 1,
            explanation: 'Na+ flows through voltage-gated Na+ channels down its electrochemical gradient (high Na+ outside, membrane potential is negative inside — both concentration and electrical gradients favor Na+ entry). No ATP is directly required for this movement. The Na+/K+ ATPase later restores the gradient.'
          }
        ]
      }
    },
    {
      id: 'mt7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'Paramecium (a freshwater protist) has a contractile vacuole that periodically expels water. Why is this organelle necessary?',
            options: [
              'To excrete metabolic waste',
              'Because the freshwater environment is hypotonic — water constantly enters by osmosis, and without the contractile vacuole, the cell would burst',
              'To take in nutrients from the environment',
              'To maintain the cell wall'
            ],
            correctAnswer: 1,
            explanation: 'Freshwater is hypotonic relative to the cytoplasm of Paramecium. Water continuously enters by osmosis. The contractile vacuole collects excess water and periodically contracts to expel it, preventing cell lysis. This process requires ATP — it is an active, energy-consuming process.'
          },
          {
            question: 'A researcher discovers that a particular drug increases membrane fluidity and slightly increases the permeability of the lipid bilayer to small polar molecules. What is a likely mechanism?',
            options: [
              'The drug is inserting between phospholipids and disrupting their packing, similar to the effect of unsaturated fatty acids',
              'The drug is adding more cholesterol to the membrane',
              'The drug is cross-linking membrane proteins',
              'The drug is dehydrating the membrane'
            ],
            correctAnswer: 0,
            explanation: 'A drug that inserts between phospholipids would disrupt the tight packing of the hydrophobic tails, increasing fluidity. Greater fluidity creates transient gaps that allow small polar molecules to slip through more easily. This is similar to how unsaturated fatty acids increase permeability.'
          },
          {
            question: 'Aquaporins increase the rate of osmosis by 10-100 fold compared to diffusion through the lipid bilayer alone. If all aquaporins were suddenly blocked, would osmosis stop?',
            options: [
              'Yes — without aquaporins, water cannot cross the membrane',
              'No — water can still cross slowly by diffusing through the lipid bilayer; aquaporins simply accelerate the process',
              'No — water would use Na+/K+ ATPase pumps instead',
              'Yes — lipid bilayers are completely impermeable to water'
            ],
            correctAnswer: 1,
            explanation: 'Water is a small enough molecule to diffuse slowly through the lipid bilayer. Aquaporins dramatically increase the rate of water movement but are not absolutely required. Without them, osmosis continues at a much slower rate through the bilayer itself.'
          }
        ]
      }
    },
    {
      id: 'mt7-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Comprehensive Matching
      `,
      exercise: {
        questions: [
          {
            question: 'O2 crossing the membrane without a protein:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Active transport', 'Endocytosis'],
            correctAnswer: 'Simple diffusion'
          },
          {
            question: 'Glucose entering a cell via GLUT transporter down its gradient:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Active transport', 'Endocytosis'],
            correctAnswer: 'Facilitated diffusion'
          },
          {
            question: 'Na+ being pumped out of a cell against its gradient using ATP:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Primary active transport', 'Secondary active transport'],
            correctAnswer: 'Primary active transport'
          },
          {
            question: 'Glucose entering intestinal cells via Na+/glucose symporter:',
            options: ['Simple diffusion', 'Facilitated diffusion', 'Primary active transport', 'Secondary active transport'],
            correctAnswer: 'Secondary active transport'
          },
          {
            question: 'A macrophage engulfing a bacterial cell:',
            options: ['Pinocytosis', 'Phagocytosis', 'Exocytosis', 'Facilitated diffusion'],
            correctAnswer: 'Phagocytosis'
          }
        ]
      }
    },
    {
      id: 'mt7-input',
      type: 'input-boxes' as const,
      content: `
### Final Review
      `,
      exercise: {
        questions: [
          {
            question: 'The formula for water potential:',
            answer: 'psi = psi_s + psi_p',
            acceptableAnswers: ['psi = psi_s + psi_p', 'water potential = solute potential + pressure potential', 'Psi = Psi_s + Psi_p'],
            placeholder: 'e.g. PV = nRT'
          },
          {
            question: 'The disease caused by a defective Cl- channel (CFTR) in epithelial cells:',
            answer: 'cystic fibrosis',
            acceptableAnswers: ['cystic fibrosis', 'Cystic fibrosis', 'CF', 'Cystic Fibrosis'],
            placeholder: 'e.g. sickle cell disease'
          }
        ]
      }
    },
    {
      id: 'mt7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'A biologist discovers a unicellular organism in a hot spring. Its membrane has an unusually high proportion of saturated fatty acids and is reinforced with unique lipid-spanning molecules. What is the most likely advantage of this membrane composition?',
            options: [
              'It increases membrane fluidity at high temperatures',
              'It maintains membrane stability and prevents excessive fluidity at the extreme temperatures of the hot spring',
              'It allows the organism to photosynthesize more efficiently',
              'It increases the rate of active transport'
            ],
            correctAnswer: 1,
            explanation: 'At high temperatures (60-80+ °C), a typical membrane would become excessively fluid and leaky. Saturated fatty acids pack tightly, and lipid-spanning molecules (like those in archaeal membranes) form a rigid monolayer, maintaining membrane integrity at extreme temperatures.'
          },
          {
            question: 'Integration question: A cell requires glucose, which is at lower concentration outside than inside. Na+ is at higher concentration outside. The cell uses an Na+/glucose symporter. Identify the transport type for each molecule.',
            options: [
              'Both are actively transported using ATP',
              'Na+ moves by facilitated diffusion (down its gradient); glucose moves by secondary active transport (against its gradient, powered by the Na+ gradient)',
              'Both move by facilitated diffusion',
              'Glucose moves by simple diffusion; Na+ is actively pumped'
            ],
            correctAnswer: 1,
            explanation: 'In the symporter, Na+ moves down its electrochemical gradient (facilitated by the transporter — no ATP needed for Na+ movement itself). The energy released by Na+ entry drives glucose into the cell against its concentration gradient. This is secondary active transport for glucose, coupled to passive transport for Na+.'
          }
        ]
      }
    }
  ]
};