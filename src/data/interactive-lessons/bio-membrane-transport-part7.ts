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
              'The cell will stay unchanged indefinitely, since the solution is isotonic',
              'Water will enter and the cell will swell as the solute moves in',
              'The cell will shrink as the solute draws water out of it',
              'The solute will be pumped back out, so nothing will change'
            ],
            correctAnswer: 1,
            explanation: 'Initially, the solution is isotonic (equal total solute). As the permeating solute crosses the membrane and equilibrates, it no longer contributes to the osmotic gradient. But the non-permeating solutes inside the cell still exert osmotic pressure, making the interior effectively hypertonic relative to the outside. Water enters, and the cell swells.'
          },
          {
            question: 'Cystic fibrosis is caused by a mutation in the CFTR protein, a Cl- channel in epithelial cells. Defective CFTR prevents normal Cl- secretion. How does this lead to thick, sticky mucus?',
            options: [
              'Cl- binds secreted mucus proteins and cross-links them',
              'Less Cl- is secreted, so less water follows to hydrate the mucus',
              'The mutation makes cells secrete far more mucus than normal',
              'CFTR normally secretes mucus proteins, so they now build up'
            ],
            correctAnswer: 1,
            explanation: 'Normally, CFTR exports Cl- to the epithelial surface, and Na+ follows electrically. The resulting NaCl concentration outside the cell draws water out by osmosis, keeping the mucus hydrated. Without functional CFTR, Cl- and water do not exit, and mucus becomes dehydrated and thick.'
          },
          {
            question: 'During a nerve impulse, Na+ channels open and Na+ rushes into the cell. This Na+ movement is:',
            options: [
              'Active transport, since each channel spends ATP to let Na+ pass',
              'Facilitated diffusion down its gradient, through a channel',
              'Simple diffusion straight through the lipid bilayer, not a channel',
              'Exocytosis of Na+ ions that were stored inside secretory vesicles'
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
              'Metabolic wastes build up and must be flushed out with excess water',
              'Water keeps entering from the hypotonic pond and must be removed',
              'Nutrients must be drawn in with large volumes of water from the pond',
              'Salt keeps entering with the pond water and must be pumped back out'
            ],
            correctAnswer: 1,
            explanation: 'Freshwater is hypotonic relative to the cytoplasm of Paramecium. Water continuously enters by osmosis. The contractile vacuole collects excess water and periodically contracts to expel it, preventing cell lysis. This process requires ATP — it is an active, energy-consuming process.'
          },
          {
            question: 'A researcher discovers that a particular drug increases membrane fluidity and slightly increases the permeability of the lipid bilayer to small polar molecules. What is a likely mechanism?',
            options: [
              'The drug inserts between phospholipids and disrupts their packing',
              'The drug adds cholesterol that packs phospholipids tightly',
              'The drug cross-links membrane proteins into rigid clusters',
              'The drug dehydrates the membrane by drawing water out of it'
            ],
            correctAnswer: 0,
            explanation: 'A drug that inserts between phospholipids would disrupt the tight packing of the hydrophobic tails, increasing fluidity. Greater fluidity creates transient gaps that allow small polar molecules to slip through more easily. This is similar to how unsaturated fatty acids increase permeability.'
          },
          {
            question: 'Aquaporins increase the rate of osmosis by 10-100 fold compared to diffusion through the lipid bilayer alone. If all aquaporins were suddenly blocked, would osmosis stop?',
            options: [
              'Yes, without aquaporins no water can cross the membrane at all',
              'No, water can still cross slowly through the lipid bilayer',
              'No, the Na+/K+ pumps would carry water across instead',
              'Yes, lipid bilayers are completely impermeable to water'
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
              'It increases membrane fluidity in the hot spring',
              'It keeps the membrane from becoming too fluid at high temperatures',
              'It lets the organism photosynthesize in the light of the spring',
              'It speeds active transport by loosening the membrane'
            ],
            correctAnswer: 1,
            explanation: 'At high temperatures (60-80+ °C), a typical membrane would become excessively fluid and leaky. Saturated fatty acids pack tightly, and lipid-spanning molecules (like those in archaeal membranes) form a rigid monolayer, maintaining membrane integrity at extreme temperatures.'
          },
          {
            question: 'Integration question: A cell requires glucose, which is at lower concentration outside than inside. Na+ is at higher concentration outside. The cell uses an Na+/glucose symporter. Identify the transport type for each molecule.',
            options: [
              'Both move by primary active transport; the symporter hydrolyzes ATP for both',
              'Na+ moves down its gradient; glucose moves by secondary active transport',
              'Both move by facilitated diffusion; neither needs any energy source at all',
              'Glucose moves by simple diffusion; Na+ is pumped in by primary active transport'
            ],
            correctAnswer: 1,
            explanation: 'In the symporter, Na+ moves down its electrochemical gradient (facilitated by the transporter — no ATP needed for Na+ movement itself). The energy released by Na+ entry drives glucose into the cell against its concentration gradient. This is secondary active transport for glucose, coupled to passive transport for Na+.'
          }
        ]
      }
    }
  ]
};