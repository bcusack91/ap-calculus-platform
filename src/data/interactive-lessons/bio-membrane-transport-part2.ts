export const bioMembraneTransportPart2Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt2-intro',
      type: 'text' as const,
      content: `
## Passive Transport — Moving Down the Gradient

**Part 2 of 7**

Passive transport moves substances **down** their concentration (or electrochemical) gradient — from high concentration to low concentration.  It requires **no energy input** from the cell because the movement is driven by the **second law of thermodynamics** (systems tend toward higher entropy).

There are three main types of passive transport:
1. Simple diffusion
2. Facilitated diffusion (via channels or carriers)
3. Osmosis (water movement)
      `
    },
    {
      id: 'mt2-diffusion',
      type: 'text' as const,
      content: `
### Simple Diffusion

Simple diffusion is the net movement of molecules from a region of **higher concentration** to a region of **lower concentration** due to random thermal motion, until equilibrium is reached.

**Characteristics:**
- No protein required
- Only small, nonpolar molecules (O\\(_2\\), CO\\(_2\\), N\\(_2\\)) and some small uncharged polar molecules (ethanol) can diffuse through the lipid bilayer
- Rate depends on: concentration gradient, temperature, membrane surface area, and membrane thickness

> **Equilibrium does NOT mean no movement** — at equilibrium, molecules continue to move randomly in both directions, but the **net movement** is zero because the rates of movement in both directions are equal.
      `
    },
    {
      id: 'mt2-facilitated',
      type: 'text' as const,
      content: `
### Facilitated Diffusion

Large polar molecules and ions cannot pass through the lipid bilayer by simple diffusion.  They require membrane proteins to cross — this is **facilitated diffusion**.

**Two types of transport proteins:**

**1. Channel Proteins:**
- Form a hydrophilic pore through the membrane
- Very fast (up to 10\\(^8\\) ions/second)
- Selective — each channel is specific to particular ions or molecules
- **Gated channels** can be regulated:
  - *Voltage-gated* — open/close in response to membrane potential changes (neurons)
  - *Ligand-gated* — open when a specific molecule binds (neurotransmitter receptors)
  - *Mechanically-gated* — open in response to physical stretching (touch receptors)
- Example: **Aquaporins** — channel proteins specific for water; greatly accelerate osmosis

**2. Carrier Proteins:**
- Bind the solute and undergo a **conformational change** to transport it across
- Slower than channels (100-1000 molecules/second)
- Specific to particular molecules
- Can be saturated (exhibit **Michaelis-Menten kinetics**)
- Example: **GLUT transporters** — facilitate glucose entry into cells

| Feature | Channel Proteins | Carrier Proteins |
|---------|-----------------|-----------------|
| Mechanism | Hydrophilic pore | Conformational change |
| Speed | Very fast | Slower |
| Saturation | Rarely saturated | Can be saturated |
| Example | K\\(^+\\) channels, aquaporins | GLUT glucose transporters |
      `
    },
    {
      id: 'mt2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Passive Transport
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is true about facilitated diffusion?',
            options: [
              'It requires ATP',
              'It moves solutes against their concentration gradient',
              'It uses membrane proteins but requires no energy input — solutes move down their gradient',
              'It only transports water'
            ],
            correctAnswer: 2,
            explanation: 'Facilitated diffusion uses channel or carrier proteins to help polar molecules and ions cross the membrane, but the driving force is the concentration gradient — no cellular energy (ATP) is expended. It is still passive transport.'
          },
          {
            question: 'A carrier protein that transports glucose shows a maximum transport rate (Vmax) that cannot be exceeded even at very high glucose concentrations. What explains this saturation?',
            options: [
              'The cell runs out of ATP',
              'There is a finite number of carrier proteins, and at high substrate concentrations all carriers are occupied',
              'Glucose begins to denature at high concentrations',
              'The concentration gradient reverses'
            ],
            correctAnswer: 1,
            explanation: 'Like enzymes, carrier proteins have a finite number of binding sites. When all carriers are simultaneously occupied (saturated), increasing substrate concentration cannot increase the rate further — the system operates at Vmax. This is analogous to enzyme saturation kinetics.'
          },
          {
            question: 'Nerve cells have voltage-gated Na+ channels that open when the membrane depolarizes. This is an example of:',
            options: [
              'Active transport',
              'Simple diffusion',
              'Facilitated diffusion through a gated channel',
              'Exocytosis'
            ],
            correctAnswer: 2,
            explanation: 'Na+ ions flow through the voltage-gated channel down their electrochemical gradient (from high Na+ outside to low Na+ inside). No ATP is required for the ion movement itself — the energy comes from the pre-existing Na+ gradient. The channel simply provides a regulated pathway.'
          }
        ]
      }
    },
    {
      id: 'mt2-tonicity',
      type: 'text' as const,
      content: `
### Key Concept: Electrochemical Gradient

For uncharged molecules, the concentration gradient alone determines the direction of passive transport.  But for **ions**, two forces act simultaneously:

1. **Chemical gradient** — ions move from high to low concentration
2. **Electrical gradient** — ions are attracted to the opposite charge across the membrane

Together these form the **electrochemical gradient**.  An ion might move against its concentration gradient if the electrical force is strong enough (or vice versa).

The **membrane potential** (typically -70 mV in animal cells, inside negative) means:
- Cations (like K\\(^+\\)) have an electrical force pulling them INTO the cell
- Anions (like Cl\\(^-\\)) have an electrical force pushing them OUT of the cell

> **AP Exam Tip:** When asked about ion movement, always consider BOTH the concentration gradient AND the electrical gradient.
      `
    },
    {
      id: 'mt2-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Passive Transport
      `,
      exercise: {
        questions: [
          {
            question: 'The type of diffusion requiring a membrane protein but no ATP:',
            answer: 'facilitated diffusion',
            acceptableAnswers: ['facilitated diffusion', 'Facilitated diffusion', 'facilitated transport'],
            placeholder: 'e.g. active transport'
          },
          {
            question: 'Channel proteins specific for water:',
            answer: 'aquaporins',
            acceptableAnswers: ['aquaporins', 'Aquaporins', 'aquaporin'],
            placeholder: 'e.g. ion channels'
          },
          {
            question: 'The combined concentration and electrical gradients that determine ion movement:',
            answer: 'electrochemical gradient',
            acceptableAnswers: ['electrochemical gradient', 'Electrochemical gradient'],
            placeholder: 'e.g. osmotic gradient'
          }
        ]
      }
    },
    {
      id: 'mt2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Passive Transport
      `,
      exercise: {
        questions: [
          {
            question: 'A molecule moves from an area of lower concentration to higher concentration across a membrane. This movement:',
            options: [
              'Is driven by simple diffusion',
              'Could be facilitated diffusion if the electrical gradient favors that direction (for charged molecules)',
              'Must be simple diffusion because it crosses the membrane',
              'Is impossible — molecules can only move down their gradient'
            ],
            correctAnswer: 1,
            explanation: 'For charged molecules (ions), the electrochemical gradient combines concentration and electrical forces. An ion could move against its concentration gradient if the electrical force (membrane potential) is strong enough to make the net electrochemical gradient favorable. For uncharged molecules, however, movement against the concentration gradient always requires active transport.'
          },
          {
            question: 'Which of the following would NOT increase the rate of simple diffusion across a membrane?',
            options: [
              'Increasing the concentration gradient',
              'Increasing the temperature',
              'Increasing the membrane surface area',
              'Adding more carrier proteins to the membrane'
            ],
            correctAnswer: 3,
            explanation: 'Simple diffusion occurs directly through the lipid bilayer without proteins. Adding carrier proteins would increase the rate of facilitated diffusion, not simple diffusion. The rate of simple diffusion depends on gradient, temperature, surface area, and membrane thickness.'
          }
        ]
      }
    }
  ]
};