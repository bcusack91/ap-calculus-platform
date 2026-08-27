export const bioPhotosynthesisPart1Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps1-intro',
      type: 'text' as const,
      content: `
## Photosynthesis — Light Reactions

**Part 1 of 7**

Photosynthesis is the process by which autotrophs — primarily plants, algae, and cyanobacteria — convert light energy into chemical energy stored in glucose.  It is the ultimate source of virtually all organic matter and molecular oxygen on Earth.

The overall equation is:

$$6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{light energy} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2$$

Photosynthesis occurs in two main stages:
1. **Light-dependent reactions** (the "photo" part) — occur in the **thylakoid membrane**
2. **Light-independent reactions / Calvin cycle** (the "synthesis" part) — occur in the **stroma**

This lesson focuses on the light-dependent reactions.
      `
    },
    {
      id: 'ps1-chloroplast',
      type: 'text' as const,
      content: `
### Chloroplast Anatomy

The chloroplast is a double-membrane organelle with its own DNA (evidence of endosymbiotic origin):

| Structure | Description | Function |
|-----------|-------------|----------|
| **Outer membrane** | Smooth, freely permeable | Allows small molecules to pass |
| **Inner membrane** | Selectively permeable | Contains specific transporters |
| **Stroma** | Fluid-filled interior | Site of Calvin cycle; contains enzymes, DNA, ribosomes |
| **Thylakoid membrane** | Internal membrane system | Site of light reactions; contains photosystems and ETC |
| **Thylakoid lumen** | Space inside thylakoids | Protons accumulate here (low pH) for chemiosmosis |
| **Granum** (pl. grana) | Stack of thylakoid discs | Increases surface area for light absorption |

> **Connection to Respiration:** The chloroplast uses chemiosmosis in much the same way as the mitochondrion — protons are pumped across a membrane to create a gradient, and ATP synthase uses the gradient to make ATP.  However, in chloroplasts, protons accumulate in the thylakoid **lumen** (instead of the intermembrane space), and ATP is produced in the **stroma** (instead of the matrix).
      `
    },
    {
      id: 'ps1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Chloroplast Structure
      `,
      exercise: {
        questions: [
          {
            question: 'Where in the chloroplast do the light-dependent reactions take place?',
            options: [
              'Stroma',
              'Outer membrane',
              'Thylakoid membrane',
              'Cytoplasm'
            ],
            correctAnswer: 2,
            explanation: 'The light-dependent reactions require the photosystems, electron transport chain, and ATP synthase, all of which are embedded in the thylakoid membrane.'
          },
          {
            question: 'Grana (stacks of thylakoids) increase the surface area available for:',
            options: [
              'CO2 fixation by RuBisCO',
              'Glucose storage',
              'Light absorption and the light-dependent reactions',
              'Starch synthesis'
            ],
            correctAnswer: 2,
            explanation: 'Grana provide increased thylakoid membrane surface area, allowing more photosystem complexes to be embedded and increasing the capacity for light capture and the light reactions.'
          }
        ]
      }
    },
    {
      id: 'ps1-pigments',
      type: 'text' as const,
      content: `
### Light and Pigments

Visible light is a small portion of the electromagnetic spectrum with wavelengths from about 380-750 nm.  When light strikes a pigment molecule, certain wavelengths are **absorbed** (their energy excites electrons) while others are **reflected** or **transmitted** (which gives the pigment its visible color).

**Key photosynthetic pigments:**

| Pigment | Color Absorbed | Color Reflected | Role |
|---------|---------------|-----------------|------|
| **Chlorophyll a** | Blue-violet, red-orange | Green | Primary pigment; directly participates in light reactions |
| **Chlorophyll b** | Blue, red-orange | Yellow-green | Accessory pigment; broadens absorption spectrum |
| **Carotenoids** | Blue, green | Yellow, orange | Accessory pigments; photoprotection (quench reactive O$_2$ species) |

The **absorption spectrum** shows which wavelengths a pigment absorbs.  The **action spectrum** shows the rate of photosynthesis at each wavelength.  These two spectra closely match, confirming that light absorption drives photosynthesis.

**Photoexcitation:** When a chlorophyll molecule absorbs a photon, an electron is boosted from a ground state to an **excited state**.  This excited electron can follow three fates:
1. Return to ground state, releasing energy as heat or fluorescence
2. Transfer energy to a neighboring pigment (resonance energy transfer) — this is how the antenna complex funnels energy
3. Be transferred to an electron acceptor, initiating the light reactions (this occurs at the reaction center)
      `
    },
    {
      id: 'ps1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Light and Pigments
      `,
      exercise: {
        questions: [
          {
            question: 'Why do plants appear green?',
            options: [
              'Chlorophyll absorbs green light and uses it for photosynthesis',
              'Chlorophyll reflects (and transmits) green wavelengths while absorbing blue and red light',
              'Green light has the most energy in the visible spectrum',
              'Carotenoids produce green pigment'
            ],
            correctAnswer: 1,
            explanation: 'Chlorophyll absorbs strongly in the blue-violet (430 nm) and red (660-680 nm) regions but reflects green wavelengths, which is why leaves appear green to our eyes.'
          },
          {
            question: 'What is the functional difference between the absorption spectrum and the action spectrum?',
            options: [
              'They are identical measurements',
              'The absorption spectrum shows which wavelengths are absorbed by pigments; the action spectrum shows the rate of photosynthesis at each wavelength',
              'The absorption spectrum measures O2 output; the action spectrum measures CO2 input',
              'The action spectrum only applies to chlorophyll a'
            ],
            correctAnswer: 1,
            explanation: 'The absorption spectrum is a physical measurement of light absorbed. The action spectrum is a biological measurement of photosynthetic rate. Their close correspondence was key evidence that light absorption by pigments drives photosynthesis.'
          },
          {
            question: 'In the antenna complex, energy is transferred from accessory pigments to the reaction center by:',
            options: [
              'Direct electron transfer through the membrane',
              'Resonance energy transfer (inductive coupling between neighboring pigments)',
              'Diffusion of pigment molecules through the stroma',
              'ATP-driven transport'
            ],
            correctAnswer: 1,
            explanation: 'In the antenna complex (light-harvesting complex), absorbed light energy is passed from pigment to pigment by resonance energy transfer — the excited-state energy of one molecule induces excitation in an adjacent molecule, funneling energy toward the reaction center.'
          }
        ]
      }
    },
    {
      id: 'ps1-light-rxns',
      type: 'text' as const,
      content: `
### The Light-Dependent Reactions: Overview

The light reactions use light energy to produce **ATP** and **NADPH**, which then power the Calvin cycle.  They also split water and release **O$_2$** as a byproduct.

The process involves **linear (noncyclic) electron flow** through two photosystems:

$$\\text{H}_2\\text{O} \\xrightarrow{\\text{PSII}} \\text{PQ} \\xrightarrow{\\text{Cyt b6f}} \\text{PC} \\xrightarrow{\\text{PSI}} \\text{Fd} \\rightarrow \\text{NADP}^+ \\rightarrow \\text{NADPH}$$

1. **Photosystem II (PSII):** Light excites electrons in the P680 reaction center. The electrons are passed to the primary electron acceptor.  The "hole" left behind is filled by electrons from **water splitting** (photolysis): $2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$
2. **Electron Transport Chain:** Electrons flow from PSII through plastoquinone (PQ), the cytochrome b6f complex (which pumps H$^+$ into the thylakoid lumen), and plastocyanin (PC)
3. **Photosystem I (PSI):** Light re-energizes electrons at the P700 reaction center. Electrons pass through ferredoxin (Fd) to NADP$^+$ reductase
4. **NADPH production:** NADP$^+$ reductase reduces NADP$^+$ to NADPH

**Chemiosmosis in Chloroplasts:**

As H$^+$ accumulates in the thylakoid lumen (from water splitting and proton pumping by cytochrome b6f), it flows back into the stroma through **ATP synthase**, driving ATP production.

| Source of H$^+$ in lumen | Mechanism |
|----------------------------|-----------|
| Water splitting (PSII) | Direct release of H$^+$ in lumen |
| Plastoquinone (PQ) shuttle | Carries H$^+$ from stroma to lumen |
| Cytochrome b6f complex | Actively pumps H$^+$ into lumen |
      `
    },
    {
      id: 'ps1-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Light Reactions
      `,
      exercise: {
        questions: [
          {
            question: 'The two energy-carrying products of the light reactions that power the Calvin cycle:',
            answer: 'ATP and NADPH',
            acceptableAnswers: ['ATP and NADPH', 'NADPH and ATP', 'ATP, NADPH', 'NADPH, ATP'],
            placeholder: 'e.g. glucose and O2'
          },
          {
            question: 'The molecule that is split to provide electrons and H+ to PSII, releasing O2 as a byproduct:',
            answer: 'water',
            acceptableAnswers: ['water', 'Water', 'H2O', 'h2o'],
            placeholder: 'e.g. CO2'
          },
          {
            question: 'The reaction center chlorophyll of Photosystem II (identified by its peak absorption wavelength in nm):',
            answer: 'P680',
            acceptableAnswers: ['P680', 'p680'],
            placeholder: 'e.g. P700'
          }
        ]
      }
    },
    {
      id: 'ps1-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Light Reaction Component
      `,
      exercise: {
        questions: [
          {
            question: 'Splits water molecules and provides electrons to the ETC:',
            options: ['Photosystem I', 'Photosystem II', 'ATP synthase', 'Cytochrome b6f'],
            correctAnswer: 'Photosystem II'
          },
          {
            question: 'Pumps H+ into the thylakoid lumen as electrons pass through:',
            options: ['Photosystem I', 'Photosystem II', 'ATP synthase', 'Cytochrome b6f complex'],
            correctAnswer: 'Cytochrome b6f complex'
          },
          {
            question: 'Uses the proton gradient to phosphorylate ADP in the stroma:',
            options: ['Photosystem I', 'Photosystem II', 'ATP synthase', 'NADP+ reductase'],
            correctAnswer: 'ATP synthase'
          },
          {
            question: 'The final electron acceptor of linear electron flow, reduced to NADPH:',
            options: ['O2', 'NADP+', 'FAD', 'Plastoquinone'],
            correctAnswer: 'NADP+'
          }
        ]
      }
    },
    {
      id: 'ps1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Light Reactions
      `,
      exercise: {
        questions: [
          {
            question: 'If a plant is given water labeled with 18-O (heavy oxygen), where will the 18-O end up?',
            options: [
              'In glucose (C6H12O6)',
              'In molecular oxygen (O2) released as a byproduct',
              'In CO2',
              'In NADPH'
            ],
            correctAnswer: 1,
            explanation: 'The O2 released during photosynthesis comes from the splitting of water (photolysis) at PSII. This was demonstrated by van Niel and confirmed by Ruben and Kamen using heavy oxygen isotopes. The oxygen in glucose comes from CO2.'
          },
          {
            question: 'During linear electron flow, electrons travel from _____ to _____.',
            options: [
              'PSI to PSII',
              'NADPH to H2O',
              'H2O (via PSII) to NADP+ (via PSI)',
              'ATP synthase to cytochrome b6f'
            ],
            correctAnswer: 2,
            explanation: 'In linear (noncyclic) electron flow, electrons originate from water (split at PSII), pass through the ETC (PQ, Cyt b6f, PC), are re-energized at PSI, and ultimately reduce NADP+ to NADPH.'
          }
        ]
      }
    }
  ]
};