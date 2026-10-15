export const bioPhotosynthesisPart1Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps1-intro',
      type: 'text' as const,
      content: `
## Photosynthesis — Light Reactions

**Part 1 of 7**

Photosynthesis is the series of reactions that use carbon dioxide, water, and light energy to make carbohydrates and oxygen.  Photosynthetic organisms — plants, algae, and cyanobacteria — capture energy from the sun and produce sugars that can be used in biological processes or stored.  Photosynthesis is the ultimate source of nearly all organic matter and molecular oxygen on Earth.

The overall equation is:

$$6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{light energy} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2$$

Photosynthesis occurs in two main stages:
1. **Light reactions** (the "photo" part) — occur in the **thylakoid membranes**, which are stacked into **grana**
2. **Calvin cycle** (the "synthesis" part) — occurs in the **stroma**

This lesson focuses on the light reactions.
      `
    },
    {
      id: 'ps1-chloroplast',
      type: 'text' as const,
      content: `
### Chloroplast Anatomy

The chloroplast is a double-membrane organelle with its own DNA (evidence of its endosymbiotic origin):

| Structure | Description | Function |
|-----------|-------------|----------|
| **Outer and inner membranes** | Double membrane around the organelle | Separate the chloroplast from the cytosol |
| **Stroma** | Fluid inside the inner membrane, outside the thylakoids | Site of the Calvin cycle (carbon fixation) |
| **Thylakoid membrane** | Internal membrane system | Holds chlorophyll organized into two photosystems, plus electron transport proteins and ATP synthase |
| **Thylakoid space (lumen)** | Space inside each thylakoid | Protons accumulate here, building the gradient for chemiosmosis |
| **Granum** (pl. grana) | Stack of thylakoids | Site of the light reactions; stacking packs in more membrane |

> **Connection to Respiration:** The chloroplast uses chemiosmosis in much the same way as the mitochondrion — protons are moved across a membrane to create a gradient, and ATP synthase uses the gradient to make ATP.  In chloroplasts, protons accumulate **inside the thylakoid**, and ATP is made on the **stroma** side, where the Calvin cycle will use it.
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
            question: 'Where in the chloroplast do the light reactions take place?',
            options: [
              'Stroma of the chloroplast',
              'Inner chloroplast membrane',
              'Thylakoid membranes of the grana',
              'Cytosol of the leaf cell'
            ],
            correctAnswer: 2,
            explanation: 'The light reactions require the photosystems, electron transport proteins, and ATP synthase, all of which are embedded in the thylakoid membranes. Thylakoids are stacked into grana.'
          },
          {
            question: 'Grana (stacks of thylakoids) increase the surface area available for:',
            options: [
              'CO2 fixation in the Calvin cycle',
              'Storage of sugar as starch granules',
              'Light capture and the light reactions',
              'Gas exchange with the air spaces'
            ],
            correctAnswer: 2,
            explanation: 'Stacking thylakoids into grana provides more membrane area, so more photosystems, electron transport proteins, and ATP synthases can be embedded, increasing the capacity for the light reactions. CO2 fixation happens in the stroma.'
          }
        ]
      }
    },
    {
      id: 'ps1-pigments',
      type: 'text' as const,
      content: `
### Light and Pigments

Visible light is a small portion of the electromagnetic spectrum, with wavelengths from about 380-750 nm.  When light strikes a pigment molecule, certain wavelengths are **absorbed** (their energy boosts electrons to a higher energy level) while others are **reflected** or **transmitted**, which gives the pigment its visible color.

**Chlorophylls** are the pigments that drive photosynthesis.  They absorb mostly **blue-violet and red** light and reflect **green** light, which is why leaves look green.  Other pigments in the chloroplast absorb some additional wavelengths.

**Reading spectra (a common data skill):**
- An **absorption spectrum** shows how much light a pigment absorbs at each wavelength.
- An **action spectrum** shows the *rate of photosynthesis* at each wavelength (for example, O$_2$ produced).
- The two graphs have peaks in the same places.  That match is evidence that light absorbed by chlorophyll is what drives photosynthesis.
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
              'Chlorophyll absorbs green light most strongly and uses it to drive photosynthesis',
              'Chlorophyll reflects green light and absorbs mostly blue and red light',
              'Green light carries the most energy, so leaves emit the excess as green',
              'Leaves contain no pigments that absorb blue or red light at all'
            ],
            correctAnswer: 1,
            explanation: 'Chlorophyll absorbs strongly in the blue-violet and red regions but reflects green wavelengths, which is why leaves appear green to our eyes.'
          },
          {
            question: 'What is the difference between an absorption spectrum and an action spectrum?',
            options: [
              'Absorption spectrum: light reflected by pigments; action spectrum: light absorbed by chlorophyll only',
              'Absorption spectrum: light absorbed by a pigment; action spectrum: photosynthetic rate at each wavelength',
              'Absorption spectrum: O2 released at each wavelength; action spectrum: CO2 taken up at each wavelength',
              'Absorption spectrum: photosynthetic rate at each wavelength; action spectrum: light absorbed by pigments'
            ],
            correctAnswer: 1,
            explanation: 'The absorption spectrum is a physical measurement of light absorbed by a pigment. The action spectrum is a biological measurement of photosynthetic rate. Their close match is evidence that light absorbed by pigments drives photosynthesis.'
          },
          {
            question: 'A student shines equal-intensity light of different colors on aquatic plants and counts O2 bubbles. Which color should give the lowest rate?',
            options: [
              'Blue light',
              'Red light',
              'Green light',
              'White light'
            ],
            correctAnswer: 2,
            explanation: 'Chlorophyll reflects most green light, so little of it is absorbed and little energy is available to drive the light reactions. Blue and red light are strongly absorbed, and white light contains both.'
          }
        ]
      }
    },
    {
      id: 'ps1-light-rxns',
      type: 'text' as const,
      content: `
### The Light Reactions: Overview

The light reactions capture energy present in light and use it to make **ATP** and **NADPH**, which then power the Calvin cycle.  They also split water and release **O$_2$**.

1. **Photosystem II (PSII):** Chlorophyll absorbs light, boosting electrons to a higher energy level.  The excited electrons leave PSII.  **Water is split** to replace them: $2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$
2. **Electron transport chain:** The electrons pass through a series of carriers embedded in the thylakoid membrane, in a sequence of redox reactions.  The energy released moves H$^+$ from the stroma into the thylakoid space.
3. **Photosystem I (PSI):** Light boosts the electrons to a higher energy level again.
4. **NADPH production:** The electrons are ultimately transferred to NADP$^+$, reducing it to **NADPH**.

**Chemiosmosis in chloroplasts:**  H$^+$ builds up inside the thylakoid (from water splitting and from the ETC), so the thylakoid space has a **high** H$^+$ concentration and the stroma a **low** one.  H$^+$ flows back into the stroma through **ATP synthase**, which makes ATP from ADP and P$_i$.  Because light energy drives it, this is called **photophosphorylation**.

> You do not need the names of the individual electron carriers in the chain for the AP exam; the framework excludes them.
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
            question: 'The molecule that is split to replace the electrons lost from PSII, releasing O2:',
            answer: 'water',
            acceptableAnswers: ['water', 'Water', 'H2O', 'h2o'],
            placeholder: 'e.g. CO2'
          },
          {
            question: 'The name for making ATP with energy that came from light (one word):',
            answer: 'photophosphorylation',
            acceptableAnswers: ['photophosphorylation', 'Photophosphorylation', 'photo-phosphorylation'],
            placeholder: 'e.g. glycolysis'
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
            question: 'Loses excited electrons that are replaced by splitting water:',
            options: ['Photosystem I', 'Photosystem II', 'ATP synthase', 'The stroma'],
            correctAnswer: 'Photosystem II'
          },
          {
            question: 'The compartment where H+ accumulates during the light reactions:',
            options: ['Stroma', 'Thylakoid space', 'Cytosol', 'Intermembrane space'],
            correctAnswer: 'Thylakoid space'
          },
          {
            question: 'Uses the proton gradient to phosphorylate ADP:',
            options: ['Photosystem I', 'Photosystem II', 'ATP synthase', 'Chlorophyll'],
            correctAnswer: 'ATP synthase'
          },
          {
            question: 'The molecule that accepts electrons at the end of the light reactions and becomes NADPH:',
            options: ['O2', 'NADP+', 'FAD', 'CO2'],
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
              'In glucose made by the Calvin cycle',
              'In the O2 released as a byproduct',
              'In the CO2 released by respiration',
              'In the NADPH made at photosystem I'
            ],
            correctAnswer: 1,
            explanation: 'The O2 released during photosynthesis comes from the splitting of water at PSII. Isotope experiments with 18-O-labeled water confirmed this. The oxygen atoms in glucose come from CO2.'
          },
          {
            question: 'During the light reactions, electrons travel from _____ to _____.',
            options: [
              'NADP+ (via PSI) to H2O (via PSII)',
              'CO2 (in the stroma) to O2 (via PSII)',
              'H2O (via PSII) to NADP+ (via PSI)',
              'ATP (via ATP synthase) to NADPH (via PSI)'
            ],
            correctAnswer: 2,
            explanation: 'Electrons come from water, which is split at PSII. They pass through the electron transport chain, are boosted again at PSI, and finally reduce NADP+ to NADPH.'
          }
        ]
      }
    }
  ]
};
