const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src/data/interactive-lessons');

// Part 1: Light Reactions
const part1 = `export const bioPhotosynthesisPart1Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps1-intro',
      type: 'text' as const,
      content: \`
## Photosynthesis — Light Reactions

**Part 1 of 7**

Photosynthesis is the process by which autotrophs — primarily plants, algae, and cyanobacteria — convert light energy into chemical energy stored in glucose.  It is the ultimate source of virtually all organic matter and molecular oxygen on Earth.

The overall equation is:

$$6\\\\,\\\\text{CO}_2 + 6\\\\,\\\\text{H}_2\\\\text{O} + \\\\text{light energy} \\\\longrightarrow \\\\text{C}_6\\\\text{H}_{12}\\\\text{O}_6 + 6\\\\,\\\\text{O}_2$$

Photosynthesis occurs in two main stages:
1. **Light-dependent reactions** (the "photo" part) — occur in the **thylakoid membrane**
2. **Light-independent reactions / Calvin cycle** (the "synthesis" part) — occur in the **stroma**

This lesson focuses on the light-dependent reactions.
      \`
    },
    {
      id: 'ps1-chloroplast',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'ps1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Chloroplast Structure
      \`,
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
      content: \`
### Light and Pigments

Visible light is a small portion of the electromagnetic spectrum with wavelengths from about 380-750 nm.  When light strikes a pigment molecule, certain wavelengths are **absorbed** (their energy excites electrons) while others are **reflected** or **transmitted** (which gives the pigment its visible color).

**Key photosynthetic pigments:**

| Pigment | Color Absorbed | Color Reflected | Role |
|---------|---------------|-----------------|------|
| **Chlorophyll a** | Blue-violet, red-orange | Green | Primary pigment; directly participates in light reactions |
| **Chlorophyll b** | Blue, red-orange | Yellow-green | Accessory pigment; broadens absorption spectrum |
| **Carotenoids** | Blue, green | Yellow, orange | Accessory pigments; photoprotection (quench reactive O\\\\(_2\\\\) species) |

The **absorption spectrum** shows which wavelengths a pigment absorbs.  The **action spectrum** shows the rate of photosynthesis at each wavelength.  These two spectra closely match, confirming that light absorption drives photosynthesis.

**Photoexcitation:** When a chlorophyll molecule absorbs a photon, an electron is boosted from a ground state to an **excited state**.  This excited electron can follow three fates:
1. Return to ground state, releasing energy as heat or fluorescence
2. Transfer energy to a neighboring pigment (resonance energy transfer) — this is how the antenna complex funnels energy
3. Be transferred to an electron acceptor, initiating the light reactions (this occurs at the reaction center)
      \`
    },
    {
      id: 'ps1-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Light and Pigments
      \`,
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
      content: \`
### The Light-Dependent Reactions: Overview

The light reactions use light energy to produce **ATP** and **NADPH**, which then power the Calvin cycle.  They also split water and release **O\\\\(_2\\\\)** as a byproduct.

The process involves **linear (noncyclic) electron flow** through two photosystems:

$$\\\\text{H}_2\\\\text{O} \\\\xrightarrow{\\\\text{PSII}} \\\\text{PQ} \\\\xrightarrow{\\\\text{Cyt b6f}} \\\\text{PC} \\\\xrightarrow{\\\\text{PSI}} \\\\text{Fd} \\\\rightarrow \\\\text{NADP}^+ \\\\rightarrow \\\\text{NADPH}$$

1. **Photosystem II (PSII):** Light excites electrons in the P680 reaction center. The electrons are passed to the primary electron acceptor.  The "hole" left behind is filled by electrons from **water splitting** (photolysis): \\\\(2\\\\text{H}_2\\\\text{O} \\\\rightarrow 4\\\\text{H}^+ + 4e^- + \\\\text{O}_2\\\\)
2. **Electron Transport Chain:** Electrons flow from PSII through plastoquinone (PQ), the cytochrome b6f complex (which pumps H\\\\(^+\\\\) into the thylakoid lumen), and plastocyanin (PC)
3. **Photosystem I (PSI):** Light re-energizes electrons at the P700 reaction center. Electrons pass through ferredoxin (Fd) to NADP\\\\(^+\\\\) reductase
4. **NADPH production:** NADP\\\\(^+\\\\) reductase reduces NADP\\\\(^+\\\\) to NADPH

**Chemiosmosis in Chloroplasts:**

As H\\\\(^+\\\\) accumulates in the thylakoid lumen (from water splitting and proton pumping by cytochrome b6f), it flows back into the stroma through **ATP synthase**, driving ATP production.

| Source of H\\\\(^+\\\\) in lumen | Mechanism |
|----------------------------|-----------|
| Water splitting (PSII) | Direct release of H\\\\(^+\\\\) in lumen |
| Plastoquinone (PQ) shuttle | Carries H\\\\(^+\\\\) from stroma to lumen |
| Cytochrome b6f complex | Actively pumps H\\\\(^+\\\\) into lumen |
      \`
    },
    {
      id: 'ps1-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Light Reactions
      \`,
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
      content: \`
### Match the Light Reaction Component
      \`,
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
      content: \`
### Exit Ticket — Light Reactions
      \`,
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
};`;

// Part 2: Photosystems
const part2 = `export const bioPhotosynthesisPart2Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps2-intro',
      type: 'text' as const,
      content: \`
## Photosystems in Detail

**Part 2 of 7**

The two photosystems — PSII and PSI — are sophisticated multi-protein complexes embedded in the thylakoid membrane.  They work in series during **linear electron flow** to produce both ATP and NADPH, or PSI can operate alone in **cyclic electron flow** to produce only ATP.

Understanding the structure and function of each photosystem is essential for explaining how light energy is converted to chemical energy.
      \`
    },
    {
      id: 'ps2-psii',
      type: 'text' as const,
      content: \`
### Photosystem II (PSII) — Water Splitting

Despite its name, PSII acts **first** in linear electron flow (it was named "II" because it was discovered second).

**Structure:**
- **Antenna complex (LHC II):** ~250 chlorophyll and carotenoid molecules that absorb photons and funnel energy to the reaction center
- **P680 reaction center:** A pair of chlorophyll a molecules with peak absorption at 680 nm
- **Oxygen-evolving complex (OEC):** A manganese-containing cluster (Mn\\\\(_4\\\\)CaO\\\\(_5\\\\)) that catalyzes water splitting
- **Primary electron acceptor (pheophytin):** Accepts the excited electron from P680

**Function:**
1. A photon is absorbed by the antenna complex and energy is funneled to P680
2. An electron in P680 is excited and transferred to pheophytin (the reaction center is now oxidized: P680\\\\(^+\\\\))
3. P680\\\\(^+\\\\) is the strongest biological oxidizing agent — it pulls electrons from water via the OEC
4. Water splitting: \\\\(2\\\\text{H}_2\\\\text{O} \\\\rightarrow 4\\\\text{H}^+ + 4e^- + \\\\text{O}_2\\\\) (occurs in the lumen)
5. The excited electron passes to plastoquinone (PQ) and onward through the ETC

> **Key Fact:** The O\\\\(_2\\\\) we breathe is a byproduct of PSII splitting water.  Every O\\\\(_2\\\\) molecule requires two water molecules and four photons of light.
      \`
    },
    {
      id: 'ps2-psi',
      type: 'text' as const,
      content: \`
### Photosystem I (PSI) — NADPH Production

**Structure:**
- **Antenna complex (LHC I):** ~200 pigment molecules
- **P700 reaction center:** A pair of chlorophyll a molecules with peak absorption at 700 nm
- **Primary electron acceptor (A0):** A modified chlorophyll molecule

**Function:**
1. A photon energizes P700, and an electron is transferred to the primary acceptor
2. The "hole" in P700\\\\(^+\\\\) is filled by an electron arriving from PSII via plastocyanin (PC)
3. The excited electron passes through a series of iron-sulfur (Fe-S) proteins to **ferredoxin** (Fd)
4. **Ferredoxin-NADP\\\\(^+\\\\) reductase (FNR)** transfers electrons from ferredoxin to NADP\\\\(^+\\\\):

$$\\\\text{NADP}^+ + 2e^- + \\\\text{H}^+ \\\\longrightarrow \\\\text{NADPH}$$

NADPH is produced on the **stroma** side of the membrane, where it will be used by the Calvin cycle.
      \`
    },
    {
      id: 'ps2-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Photosystems
      \`,
      exercise: {
        questions: [
          {
            question: 'P680+ (oxidized P680) is described as the strongest biological oxidizing agent. Why is this biologically significant?',
            options: [
              'It allows P680 to absorb more photons',
              'It has a sufficiently high oxidizing potential to extract electrons from water, enabling oxygenic photosynthesis',
              'It prevents photorespiration',
              'It activates the Calvin cycle enzymes'
            ],
            correctAnswer: 1,
            explanation: 'Water is an extremely stable molecule and difficult to oxidize. P680+ has such a strong affinity for electrons (high reduction potential) that it can pull them from water via the oxygen-evolving complex. This capability is what makes oxygenic photosynthesis possible.'
          },
          {
            question: 'The electrons used to reduce NADP+ to NADPH in PSI originally came from:',
            options: [
              'CO2',
              'Glucose',
              'Water (via PSII)',
              'ATP'
            ],
            correctAnswer: 2,
            explanation: 'In linear electron flow, electrons originate from water splitting at PSII, travel through the ETC, are re-energized at PSI, and ultimately reduce NADP+ to NADPH. The entire chain traces electrons from H2O to NADPH.'
          },
          {
            question: 'What is the role of the antenna complex in each photosystem?',
            options: [
              'To split water molecules',
              'To synthesize ATP',
              'To absorb photons across a range of wavelengths and funnel energy to the reaction center',
              'To reduce NADP+ to NADPH'
            ],
            correctAnswer: 2,
            explanation: 'The antenna complex (light-harvesting complex) contains hundreds of pigment molecules that collectively absorb photons from a broad range of wavelengths. They transfer the absorbed energy via resonance energy transfer to the reaction center chlorophyll, concentrating light energy.'
          }
        ]
      }
    },
    {
      id: 'ps2-cyclic',
      type: 'text' as const,
      content: \`
### Cyclic Electron Flow

In addition to linear electron flow, PSI can operate independently in **cyclic electron flow**:

$$\\\\text{PSI} \\\\rightarrow \\\\text{Fd} \\\\rightarrow \\\\text{Cyt b6f} \\\\rightarrow \\\\text{PC} \\\\rightarrow \\\\text{PSI}$$

In cyclic flow:
- Electrons from PSI are passed to ferredoxin
- Instead of going to NADP\\\\(^+\\\\), ferredoxin passes them back to the **cytochrome b6f complex**
- Cytochrome b6f pumps H\\\\(^+\\\\) into the thylakoid lumen (contributing to the proton gradient)
- Electrons return to PSI via plastocyanin

**Products of cyclic electron flow:**
- **ATP** (via chemiosmosis) \\\\(\\\\checkmark\\\\)
- **NADPH** ✗ (electrons return to PSI, not to NADP\\\\(^+\\\\))
- **O\\\\(_2\\\\)** ✗ (no water splitting — PSII is not involved)

**Why is cyclic electron flow important?**

The Calvin cycle consumes ATP and NADPH in a ratio of **3:2**.  Linear electron flow produces approximately equal amounts of each.  Cyclic electron flow supplements the ATP supply to maintain the correct 3:2 ratio.

It also plays a role in **photoprotection** — under high light conditions, cyclic flow can dissipate excess energy safely.
      \`
    },
    {
      id: 'ps2-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Cyclic vs. Linear Electron Flow
      \`,
      exercise: {
        questions: [
          {
            question: 'Cyclic electron flow produces ____ but NOT ____.',
            options: [
              'NADPH; ATP',
              'ATP; NADPH or O2',
              'O2; ATP',
              'Glucose; NADPH'
            ],
            correctAnswer: 1,
            explanation: 'Cyclic electron flow only involves PSI. Electrons cycle from PSI to ferredoxin to cytochrome b6f and back to PSI. This pumps protons for ATP production but does not produce NADPH (electrons do not go to NADP+) or O2 (no water splitting since PSII is not involved).'
          },
          {
            question: 'Why does the cell sometimes switch to cyclic electron flow instead of using only linear flow?',
            options: [
              'To produce more NADPH when stocks are low',
              'To generate additional ATP to maintain the 3:2 ATP:NADPH ratio needed by the Calvin cycle',
              'To produce O2 more efficiently',
              'Because cyclic flow is more energy-efficient overall'
            ],
            correctAnswer: 1,
            explanation: 'The Calvin cycle uses 3 ATP per 2 NADPH. Linear electron flow alone does not produce enough ATP relative to NADPH. Cyclic electron flow generates additional ATP (without NADPH) to maintain the proper ratio for carbon fixation.'
          }
        ]
      }
    },
    {
      id: 'ps2-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Photosystems
      \`,
      exercise: {
        questions: [
          {
            question: 'The cluster of manganese atoms that catalyzes water splitting in PSII (abbreviation):',
            answer: 'OEC',
            acceptableAnswers: ['OEC', 'oec', 'oxygen-evolving complex', 'oxygen evolving complex', 'Oxygen-evolving complex'],
            placeholder: 'e.g. LHC'
          },
          {
            question: 'The mobile electron carrier protein that shuttles electrons from cytochrome b6f to PSI:',
            answer: 'plastocyanin',
            acceptableAnswers: ['plastocyanin', 'Plastocyanin', 'PC', 'pc'],
            placeholder: 'e.g. ferredoxin'
          },
          {
            question: 'The enzyme that catalyzes the final step of NADPH production in PSI (full name or abbreviation):',
            answer: 'FNR',
            acceptableAnswers: ['FNR', 'fnr', 'ferredoxin-NADP+ reductase', 'ferredoxin NADP reductase', 'NADP+ reductase'],
            placeholder: 'e.g. ATP synthase'
          }
        ]
      }
    },
    {
      id: 'ps2-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Photosystems
      \`,
      exercise: {
        questions: [
          {
            question: 'A researcher discovers a mutant plant that cannot perform cyclic electron flow. Which of the following would you predict?',
            options: [
              'The plant could not produce any ATP from photosynthesis',
              'The Calvin cycle would be limited by insufficient ATP relative to NADPH',
              'The plant could not produce O2',
              'NADPH production would increase dramatically'
            ],
            correctAnswer: 1,
            explanation: 'Without cyclic electron flow, the plant would rely solely on linear electron flow for ATP. Since linear flow produces roughly equal amounts of ATP and NADPH, but the Calvin cycle needs a 3:2 ratio, the plant would not have enough ATP to fully utilize the NADPH produced.'
          },
          {
            question: 'Which of the following correctly traces the path of electrons during linear electron flow?',
            options: [
              'NADPH -> PSI -> PSII -> H2O',
              'H2O -> PSII -> PQ -> Cyt b6f -> PC -> PSI -> Fd -> NADP+',
              'PSI -> PSII -> PQ -> PC -> NADP+',
              'CO2 -> PSII -> PSI -> O2'
            ],
            correctAnswer: 1,
            explanation: 'Linear electron flow begins with water splitting at PSII (providing electrons), proceeds through plastoquinone (PQ), cytochrome b6f, plastocyanin (PC), PSI (re-energization), ferredoxin (Fd), and finally NADP+ reductase (producing NADPH).'
          }
        ]
      }
    }
  ]
};`;

// Part 3: Calvin Cycle
const part3 = `export const bioPhotosynthesisPart3Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps3-intro',
      type: 'text' as const,
      content: \`
## The Calvin Cycle — Carbon Fixation

**Part 3 of 7**

The Calvin cycle (named after Melvin Calvin, who traced its steps using radioactive \\\\(^{14}\\\\text{C}\\\\)) uses the ATP and NADPH produced by the light reactions to fix atmospheric CO\\\\(_2\\\\) into organic molecules.  It occurs in the **stroma** of the chloroplast and does not directly require light — though it depends on the light reactions for its energy inputs.
      \`
    },
    {
      id: 'ps3-phases',
      type: 'text' as const,
      content: \`
### The Three Phases of the Calvin Cycle

The Calvin cycle can be divided into three phases.  For each molecule of CO\\\\(_2\\\\) fixed, the cycle uses **3 ATP** and **2 NADPH**.  Three complete turns of the cycle fix 3 CO\\\\(_2\\\\) and produce one net molecule of glyceraldehyde-3-phosphate (G3P).

**Phase 1: Carbon Fixation**

The enzyme **RuBisCO** (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes the attachment of CO\\\\(_2\\\\) to the 5-carbon sugar **RuBP** (ribulose-1,5-bisphosphate), forming an unstable 6-carbon intermediate that immediately splits into two molecules of **3-PGA** (3-phosphoglycerate):

$$\\\\text{CO}_2 + \\\\text{RuBP (5C)} \\\\longrightarrow 2 \\\\times \\\\text{3-PGA (3C)}$$

> RuBisCO is the most abundant protein on Earth, comprising up to 50% of leaf protein.

**Phase 2: Reduction**

3-PGA is phosphorylated by **ATP** and then reduced by **NADPH** to produce **G3P** (glyceraldehyde-3-phosphate):

$$\\\\text{3-PGA} \\\\xrightarrow{\\\\text{ATP}} \\\\text{1,3-BPG} \\\\xrightarrow{\\\\text{NADPH}} \\\\text{G3P}$$

This is the step that converts the energy of ATP and NADPH into the chemical bonds of an organic molecule.

**Phase 3: Regeneration of RuBP**

Five of every six G3P molecules are rearranged and phosphorylated (using ATP) to regenerate 3 RuBP molecules, allowing the cycle to continue.  Only **one out of every six G3P** molecules represents net carbon gain and exits the cycle.

**Summary for 3 turns of the cycle (3 CO\\\\(_2\\\\) fixed):**

| Input | Amount |
|-------|--------|
| CO\\\\(_2\\\\) | 3 |
| ATP | 9 |
| NADPH | 6 |

| Output | Amount |
|--------|--------|
| G3P (net) | 1 (a 3-carbon sugar) |
| ADP + P\\\\(_i\\\\) | 9 |
| NADP\\\\(^+\\\\) | 6 |

Two net G3P molecules (from 6 turns / 6 CO\\\\(_2\\\\)) can be combined to make one glucose.
      \`
    },
    {
      id: 'ps3-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Calvin Cycle Steps
      \`,
      exercise: {
        questions: [
          {
            question: 'RuBisCO catalyzes the fixation of CO2 by attaching it to which molecule?',
            options: [
              'G3P (glyceraldehyde-3-phosphate)',
              '3-PGA (3-phosphoglycerate)',
              'RuBP (ribulose-1,5-bisphosphate)',
              'Glucose'
            ],
            correctAnswer: 2,
            explanation: 'RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes the carboxylation of RuBP (5C) with CO2, producing an unstable 6C intermediate that immediately splits into two molecules of 3-PGA (3C).'
          },
          {
            question: 'For every 3 CO2 molecules fixed, how many G3P molecules are produced in total, and how many represent net carbon gain?',
            options: [
              '3 total, 1 net',
              '6 total, 1 net',
              '6 total, 6 net',
              '3 total, 3 net'
            ],
            correctAnswer: 1,
            explanation: 'Three turns of the cycle fix 3 CO2 and produce 6 G3P molecules. However, 5 of the 6 must be recycled to regenerate 3 RuBP molecules. Only 1 G3P (3 carbons) represents net organic carbon gain.'
          },
          {
            question: 'In which phase of the Calvin cycle are ATP and NADPH consumed?',
            options: [
              'Carbon fixation only',
              'Reduction (both ATP and NADPH) and regeneration (ATP only)',
              'Reduction only',
              'Carbon fixation and regeneration'
            ],
            correctAnswer: 1,
            explanation: 'ATP and NADPH are both consumed in the reduction phase (converting 3-PGA to G3P). Additional ATP is consumed in the regeneration phase (phosphorylating the 5C sugars to regenerate RuBP). Carbon fixation itself does not require ATP or NADPH.'
          }
        ]
      }
    },
    {
      id: 'ps3-rubisco',
      type: 'text' as const,
      content: \`
### RuBisCO: The Most Important (and Imperfect) Enzyme

RuBisCO has a critical flaw: it can react with **O\\\\(_2\\\\)** as well as CO\\\\(_2\\\\).  When O\\\\(_2\\\\) binds to RuBP instead of CO\\\\(_2\\\\), the process is called **photorespiration**:

$$\\\\text{RuBP} + \\\\text{O}_2 \\\\longrightarrow \\\\text{3-PGA (3C)} + \\\\text{Phosphoglycolate (2C)}$$

Phosphoglycolate is toxic and must be recycled in a complex pathway involving the chloroplast, peroxisome, and mitochondrion — **consuming ATP and releasing CO\\\\(_2\\\\) without producing useful sugar**.

**Photorespiration:**
- Wastes energy (ATP and NADPH are consumed without net carbon fixation)
- Increases when O\\\\(_2\\\\) concentration is high relative to CO\\\\(_2\\\\)
- Is more severe at **high temperatures** (RuBisCO has lower affinity for CO\\\\(_2\\\\) at higher temperatures, and O\\\\(_2\\\\) solubility decreases less than CO\\\\(_2\\\\) solubility)
- Reduces photosynthetic efficiency by as much as 25-50% in C3 plants on hot days

> **Why does RuBisCO bind O\\\\(_2\\\\)?** RuBisCO evolved ~3.5 billion years ago when Earth had very little atmospheric O\\\\(_2\\\\).  It never needed to distinguish between CO\\\\(_2\\\\) and O\\\\(_2\\\\).  Today, with ~21% O\\\\(_2\\\\) in the atmosphere, this ancient inability to discriminate is a significant liability.
      \`
    },
    {
      id: 'ps3-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Photorespiration
      \`,
      exercise: {
        questions: [
          {
            question: 'Photorespiration is problematic for plants because:',
            options: [
              'It produces too much ATP',
              'It fixes CO2 too efficiently',
              'It consumes ATP and releases CO2 without producing useful organic molecules',
              'It generates too much NADPH'
            ],
            correctAnswer: 2,
            explanation: 'Photorespiration wastes energy: RuBisCO binds O2 instead of CO2, producing phosphoglycolate that must be recycled at the cost of ATP, and CO2 is released without any net carbon fixation. It is a drain on photosynthetic efficiency.'
          },
          {
            question: 'Under which conditions is photorespiration most likely to be a significant problem?',
            options: [
              'Cool temperatures with high CO2',
              'Hot, dry conditions where stomata are closed (high O2:CO2 ratio inside the leaf)',
              'Underwater where O2 is limited',
              'At night when light is absent'
            ],
            correctAnswer: 1,
            explanation: 'When stomata close to prevent water loss (hot, dry conditions), CO2 cannot enter and O2 from photosynthesis accumulates. The rising O2:CO2 ratio favors photorespiration. High temperatures also reduce the CO2 affinity of RuBisCO.'
          }
        ]
      }
    },
    {
      id: 'ps3-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Calvin Cycle
      \`,
      exercise: {
        questions: [
          {
            question: 'The enzyme that catalyzes carbon fixation in the Calvin cycle (full name or common abbreviation):',
            answer: 'RuBisCO',
            acceptableAnswers: ['RuBisCO', 'rubisco', 'Rubisco', 'RUBISCO', 'ribulose-1,5-bisphosphate carboxylase/oxygenase'],
            placeholder: 'e.g. ATP synthase'
          },
          {
            question: 'The 5-carbon molecule that accepts CO2 at the start of the Calvin cycle:',
            answer: 'RuBP',
            acceptableAnswers: ['RuBP', 'rubp', 'ribulose-1,5-bisphosphate', 'ribulose bisphosphate'],
            placeholder: 'e.g. G3P'
          },
          {
            question: 'The wasteful process that occurs when RuBisCO binds O2 instead of CO2:',
            answer: 'photorespiration',
            acceptableAnswers: ['photorespiration', 'Photorespiration', 'photo-respiration'],
            placeholder: 'e.g. glycolysis'
          }
        ]
      }
    },
    {
      id: 'ps3-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Calvin Cycle
      \`,
      exercise: {
        questions: [
          {
            question: 'The Calvin cycle is sometimes called "light-independent" but it typically stops in the dark. Why?',
            options: [
              'It directly requires photons to activate RuBisCO',
              'Without the light reactions, there is no ATP or NADPH to drive the reduction and regeneration phases',
              'CO2 is only available during the day',
              'RuBisCO is denatured in the dark'
            ],
            correctAnswer: 1,
            explanation: 'The Calvin cycle itself does not use light directly, but it depends entirely on the ATP and NADPH produced by the light-dependent reactions. Without these energy inputs, the reduction and regeneration phases cannot proceed, and the cycle stalls.'
          },
          {
            question: 'How many CO2 molecules must be fixed to produce one molecule of glucose?',
            options: [
              '3',
              '6',
              '12',
              '1'
            ],
            correctAnswer: 1,
            explanation: 'Each turn of the Calvin cycle fixes 1 CO2 and produces a net of 1/2 G3P (3C). A glucose molecule (6C) requires 2 G3P, so 6 turns (6 CO2) are needed. This consumes 18 ATP and 12 NADPH.'
          }
        ]
      }
    }
  ]
};`;

// Part 4: C3 vs C4 vs CAM
const part4 = `export const bioPhotosynthesisPart4Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps4-intro',
      type: 'text' as const,
      content: \`
## C3, C4, and CAM Photosynthesis

**Part 4 of 7**

Plants have evolved different strategies to deal with the problem of photorespiration.  Three major carbon fixation pathways are recognized, named after the first stable product of carbon fixation:

- **C3 plants** — initial product is a 3-carbon molecule (3-PGA)
- **C4 plants** — initial product is a 4-carbon molecule (oxaloacetate)
- **CAM plants** — use crassulacean acid metabolism (temporal separation)

All three types ultimately use the Calvin cycle for sugar synthesis, but C4 and CAM plants have evolved mechanisms to **concentrate CO\\\\(_2\\\\) around RuBisCO**, minimizing photorespiration.
      \`
    },
    {
      id: 'ps4-c3',
      type: 'text' as const,
      content: \`
### C3 Photosynthesis

C3 plants (e.g., rice, wheat, soybeans, most trees) use only the Calvin cycle for carbon fixation.  RuBisCO directly fixes CO\\\\(_2\\\\) from the air in the **mesophyll cells**.

**Characteristics:**
- Most common pathway (~85% of plant species)
- Initial fixation product: **3-PGA** (3-phosphoglycerate), a 3-carbon molecule
- Susceptible to photorespiration, especially in hot, dry, or bright conditions
- **Optimal environment:** Cool, moist climates with moderate light

When stomata close to conserve water, CO\\\\(_2\\\\) levels drop and O\\\\(_2\\\\) rises inside the leaf, dramatically increasing photorespiration.
      \`
    },
    {
      id: 'ps4-c4',
      type: 'text' as const,
      content: \`
### C4 Photosynthesis — Spatial Separation

C4 plants (e.g., corn/maize, sugarcane, sorghum, crabgrass) have evolved a two-step carbon fixation process that **spatially separates** initial carbon fixation from the Calvin cycle:

**Step 1 — Mesophyll cells:**
- The enzyme **PEP carboxylase** (not RuBisCO) fixes CO\\\\(_2\\\\) by attaching it to **PEP** (phosphoenolpyruvate, 3C) to form **oxaloacetate** (OAA, 4C)
- OAA is quickly converted to **malate** (4C)
- Malate is transported to the **bundle-sheath cells** via plasmodesmata

**Step 2 — Bundle-sheath cells:**
- Malate is decarboxylated, releasing CO\\\\(_2\\\\) inside the bundle-sheath cells
- This CO\\\\(_2\\\\) is then fixed by **RuBisCO** in the normal Calvin cycle
- The remaining 3C molecule (pyruvate) returns to the mesophyll to regenerate PEP (costs 2 ATP)

**Why this works:**
- PEP carboxylase has a **much higher affinity for CO\\\\(_2\\\\)** than RuBisCO and does **not** bind O\\\\(_2\\\\)
- CO\\\\(_2\\\\) is concentrated to high levels around RuBisCO in the bundle-sheath cells
- Photorespiration is virtually eliminated

**Cost:** 2 extra ATP per CO\\\\(_2\\\\) fixed (for PEP regeneration), so C4 photosynthesis is only advantageous when photorespiration would otherwise be significant.

| Feature | C3 | C4 |
|---------|----|----|
| First CO\\\\(_2\\\\) fixation enzyme | RuBisCO | PEP carboxylase |
| First stable product | 3-PGA (3C) | Oxaloacetate (4C) |
| Leaf anatomy | No bundle-sheath distinction | **Kranz anatomy** (distinct mesophyll/bundle-sheath) |
| Photorespiration | Significant in hot conditions | Minimal |
| ATP cost per CO\\\\(_2\\\\) | 3 ATP | 5 ATP |
| Optimal environment | Cool, moist | Hot, sunny, tropical |
      \`
    },
    {
      id: 'ps4-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — C3 vs C4
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the key advantage of PEP carboxylase over RuBisCO for initial CO2 fixation?',
            options: [
              'PEP carboxylase produces more ATP',
              'PEP carboxylase has a high affinity for CO2 and does not bind O2, preventing photorespiration',
              'PEP carboxylase directly produces glucose',
              'PEP carboxylase does not require energy'
            ],
            correctAnswer: 1,
            explanation: 'PEP carboxylase binds CO2 effectively even at low concentrations and lacks the oxygenase activity that plagues RuBisCO. This allows C4 plants to capture CO2 efficiently in the mesophyll and deliver it at high concentrations to RuBisCO in the bundle-sheath cells.'
          },
          {
            question: 'C4 photosynthesis requires 2 additional ATP per CO2 compared to C3. Under what conditions is this extra cost worthwhile?',
            options: [
              'In cold, shady environments where light is limiting',
              'In hot, sunny environments where photorespiration would otherwise waste even more energy',
              'Underwater where CO2 diffusion is slow',
              'At night when the Calvin cycle is inactive'
            ],
            correctAnswer: 1,
            explanation: 'The extra 2 ATP per CO2 is a worthwhile investment only when photorespiration would otherwise consume more energy than the C4 "pump" costs. In hot, bright conditions, photorespiration can waste 25-50% of fixed carbon in C3 plants, far exceeding the 2 ATP cost of C4.'
          }
        ]
      }
    },
    {
      id: 'ps4-cam',
      type: 'text' as const,
      content: \`
### CAM Photosynthesis — Temporal Separation

**CAM** (Crassulacean Acid Metabolism) plants — e.g., cacti, pineapple, jade plant, many succulents — face extreme water stress and have evolved a different strategy: **temporal separation** of carbon fixation and the Calvin cycle.

**Night (stomata OPEN):**
- CO\\\\(_2\\\\) enters through open stomata
- **PEP carboxylase** fixes CO\\\\(_2\\\\) into oxaloacetate, which is converted to **malate**
- Malate is stored in large **vacuoles** (as malic acid)

**Day (stomata CLOSED):**
- Stomata close to prevent water loss
- Malate is released from the vacuole and **decarboxylated**, releasing CO\\\\(_2\\\\)
- CO\\\\(_2\\\\) is fixed by RuBisCO in the Calvin cycle using ATP and NADPH from the light reactions

**Key difference from C4:**
- C4 plants separate fixation and Calvin cycle **spatially** (different cell types)
- CAM plants separate them **temporally** (different times of day)
- Both use PEP carboxylase for initial fixation and concentrate CO\\\\(_2\\\\) around RuBisCO

| Feature | C4 | CAM |
|---------|----|----|
| Separation type | Spatial (mesophyll vs. bundle-sheath) | Temporal (night vs. day) |
| Stomata | Open during the day | Open at **night**, closed during the day |
| Growth rate | Fast (corn, sugarcane) | Slow (cacti, succulents) |
| Environment | Hot, sunny, moderate water | Hot, very dry (desert) |
      \`
    },
    {
      id: 'ps4-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — CAM Plants
      \`,
      exercise: {
        questions: [
          {
            question: 'CAM plants open their stomata at night and close them during the day. What is the primary advantage of this strategy?',
            options: [
              'It allows the plant to photosynthesize at night',
              'It minimizes water loss by keeping stomata closed during the hottest part of the day while still allowing CO2 uptake at cooler nighttime temperatures',
              'It prevents O2 from entering the leaf',
              'It increases the rate of the Calvin cycle'
            ],
            correctAnswer: 1,
            explanation: 'Opening stomata at night (when temperatures are lower and humidity is higher) dramatically reduces water loss through transpiration. CO2 is stored as malic acid overnight and released for the Calvin cycle during the day when light is available.'
          },
          {
            question: 'Both C4 and CAM plants use PEP carboxylase for initial CO2 fixation. The key difference between the two strategies is:',
            options: [
              'C4 plants use RuBisCO; CAM plants do not',
              'C4 separates fixation spatially (different cells); CAM separates fixation temporally (day vs. night)',
              'CAM plants do not perform the Calvin cycle',
              'C4 plants store malate in vacuoles; CAM plants do not'
            ],
            correctAnswer: 1,
            explanation: 'Both rely on PEP carboxylase for initial fixation and RuBisCO for the Calvin cycle. C4 achieves separation in different cell types (mesophyll vs. bundle-sheath). CAM achieves separation at different times (night for fixation, day for Calvin cycle).'
          }
        ]
      }
    },
    {
      id: 'ps4-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Match the Plant Type
      \`,
      exercise: {
        questions: [
          {
            question: 'Rice and wheat are examples of:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'C3 plants'
          },
          {
            question: 'Corn (maize) and sugarcane are examples of:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'C4 plants'
          },
          {
            question: 'Cacti and pineapple are examples of:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'CAM plants'
          },
          {
            question: 'Plants with Kranz anatomy (distinct mesophyll and bundle-sheath cells) are:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'C4 plants'
          }
        ]
      }
    },
    {
      id: 'ps4-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Carbon Fixation Strategies
      \`,
      exercise: {
        questions: [
          {
            question: 'Global warming is increasing both temperature and atmospheric CO2 levels. How might this affect the competitive advantage of C4 plants over C3 plants?',
            options: [
              'C4 advantage would increase because temperatures are rising',
              'C4 advantage would decrease because higher CO2 levels reduce photorespiration in C3 plants, partially offsetting the temperature effect',
              'There would be no change',
              'Both C3 and C4 would be replaced by CAM plants'
            ],
            correctAnswer: 1,
            explanation: 'Rising CO2 levels benefit C3 plants by providing more CO2 relative to O2 at the RuBisCO active site, reducing photorespiration. This "CO2 fertilization effect" partially offsets the increased photorespiration from higher temperatures, potentially narrowing the C4 advantage in some environments.'
          },
          {
            question: 'A student identifies a desert plant that gains weight mainly at night and has thick, fleshy leaves with large vacuoles. This plant most likely uses:',
            options: [
              'C3 photosynthesis',
              'C4 photosynthesis',
              'CAM photosynthesis',
              'Chemosynthesis'
            ],
            correctAnswer: 2,
            explanation: 'Night CO2 fixation, desert habitat, fleshy leaves, and large vacuoles (for storing malic acid) are all hallmarks of CAM plants. The plant opens stomata at night to fix CO2 via PEP carboxylase, stores malate in vacuoles, and runs the Calvin cycle during the day with stomata closed.'
          }
        ]
      }
    }
  ]
};`;

// Part 5: Factors Affecting Photosynthesis
const part5 = `export const bioPhotosynthesisPart5Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps5-intro',
      type: 'text' as const,
      content: \`
## Factors Affecting Photosynthesis

**Part 5 of 7**

The rate of photosynthesis is influenced by several environmental variables.  Understanding how each factor affects the light reactions and Calvin cycle is essential for predicting plant productivity and interpreting experimental data on the AP exam.

The three main **limiting factors** are:
1. **Light intensity**
2. **CO\\\\(_2\\\\) concentration**
3. **Temperature**
      \`
    },
    {
      id: 'ps5-light',
      type: 'text' as const,
      content: \`
### Light Intensity

As light intensity increases from zero:
- The rate of photosynthesis increases **linearly** at first (light is the limiting factor)
- The curve gradually levels off and reaches a **plateau** (the light-saturation point)
- Beyond the saturation point, increasing light does not increase the rate — another factor (CO\\\\(_2\\\\), temperature, or enzyme capacity) becomes limiting

**Compensation point:** The light intensity at which the rate of photosynthesis equals the rate of cellular respiration (net gas exchange = 0).  Below this point, the plant consumes more O\\\\(_2\\\\) than it produces.

**Very high light intensity** can actually cause **photoinhibition** — damage to PSII reaction centers from excess absorbed energy, reducing photosynthetic efficiency.

> **Experiment Tip:** The leaf disc flotation assay is a common AP lab technique that measures photosynthetic rate by counting how quickly leaf discs float to the surface (O\\\\(_2\\\\) production makes them buoyant).  Light intensity is varied by changing the distance between the light source and the beaker.
      \`
    },
    {
      id: 'ps5-co2',
      type: 'text' as const,
      content: \`
### CO2 Concentration

CO\\\\(_2\\\\) is a substrate for RuBisCO in the Calvin cycle:
- At low CO\\\\(_2\\\\): The rate of carbon fixation is limited because RuBisCO is not saturated
- As CO\\\\(_2\\\\) increases: The rate increases linearly
- At high CO\\\\(_2\\\\): The rate plateaus when RuBisCO is fully saturated or when the light reactions cannot supply enough ATP/NADPH

**Current atmospheric CO\\\\(_2\\\\)** (~420 ppm) is below the saturation point for most C3 plants, meaning **CO\\\\(_2\\\\) enrichment can increase photosynthetic rates** in greenhouses.

C4 and CAM plants are less responsive to CO\\\\(_2\\\\) enrichment because their carbon-concentrating mechanisms already saturate RuBisCO under normal conditions.
      \`
    },
    {
      id: 'ps5-temp',
      type: 'text' as const,
      content: \`
### Temperature

Temperature affects the rate of enzyme-catalyzed reactions:
- From 0 to the optimum (~25-30 °C for most C3 plants, ~30-40 °C for C4 plants): The rate increases as molecular kinetic energy increases
- At the **optimum temperature**: The rate is maximized
- Above the optimum: Enzymes begin to **denature**, active sites lose shape, and the rate drops sharply
- At extremely high temperatures: Enzymes are completely denatured and photosynthesis stops

**Temperature also affects the ratio of RuBisCO carboxylation to oxygenation:**
- Higher temperatures decrease the relative solubility of CO\\\\(_2\\\\) vs O\\\\(_2\\\\)
- RuBisCO also has lower affinity for CO\\\\(_2\\\\) at higher temperatures
- Both effects increase **photorespiration** in C3 plants

This is why C4 plants (which circumvent photorespiration) dominate in tropical grasslands, while C3 plants dominate in temperate forests.
      \`
    },
    {
      id: 'ps5-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Limiting Factors
      \`,
      exercise: {
        questions: [
          {
            question: 'A graph shows photosynthetic rate vs. light intensity reaching a plateau. What could you do to increase the rate beyond the plateau?',
            options: [
              'Increase light intensity further',
              'Increase CO2 concentration or optimize temperature (change the limiting factor)',
              'Decrease O2 concentration around the plant',
              'Both B and C could potentially work'
            ],
            correctAnswer: 3,
            explanation: 'At the light-saturation plateau, light is no longer limiting. Increasing CO2 would accelerate the Calvin cycle, and decreasing O2 would reduce photorespiration — both would increase the net rate. Increasing light further would not help and might cause photoinhibition.'
          },
          {
            question: 'The compensation point is the light intensity at which:',
            options: [
              'Photosynthesis reaches its maximum rate',
              'The rate of photosynthesis equals the rate of cellular respiration',
              'Photorespiration begins',
              'Stomata close completely'
            ],
            correctAnswer: 1,
            explanation: 'At the compensation point, the rate of O2 production by photosynthesis equals the rate of O2 consumption by respiration. Net gas exchange is zero. Below this point, the plant is a net consumer of O2 and producer of CO2.'
          },
          {
            question: 'Why are C3 plants more responsive to CO2 enrichment than C4 plants?',
            options: [
              'C3 plants have more chloroplasts',
              'In C3 plants, RuBisCO is not saturated at current atmospheric CO2 levels, while C4 plants already concentrate CO2 around RuBisCO',
              'C4 plants do not use the Calvin cycle',
              'C3 plants have more stomata'
            ],
            correctAnswer: 1,
            explanation: 'At current atmospheric CO2 (~420 ppm), RuBisCO in C3 plants is below its saturation point — more CO2 directly increases fixation. C4 plants use PEP carboxylase to concentrate CO2 around RuBisCO, which is already saturated, so additional atmospheric CO2 provides little benefit.'
          }
        ]
      }
    },
    {
      id: 'ps5-interactions',
      type: 'text' as const,
      content: \`
### Interactions Between Factors

In real ecosystems, multiple factors interact:

| Scenario | Primary Limiting Factor | Explanation |
|----------|------------------------|-------------|
| Winter morning, clear sky | Temperature & light | Cold slows enzyme kinetics; short days limit light duration |
| Summer noon, full sun | CO\\\\(_2\\\\) (and photorespiration) | Abundant light and heat, but atmospheric CO\\\\(_2\\\\) limits Calvin cycle |
| Cloudy day, warm temperature | Light intensity | Temperature and CO\\\\(_2\\\\) are adequate but insufficient light limits the light reactions |
| Greenhouse with supplemental CO\\\\(_2\\\\) and lighting | Temperature or enzyme capacity | Once light and CO\\\\(_2\\\\) are optimized, the biochemical machinery reaches its maximum capacity |

**Liebig's Law of the Minimum** applies: the rate of photosynthesis is determined by whichever factor is most limiting, regardless of the abundance of other factors.
      \`
    },
    {
      id: 'ps5-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Photosynthetic Factors
      \`,
      exercise: {
        questions: [
          {
            question: 'The light intensity where photosynthetic rate equals respiration rate:',
            answer: 'compensation point',
            acceptableAnswers: ['compensation point', 'Compensation point', 'light compensation point'],
            placeholder: 'e.g. saturation point'
          },
          {
            question: 'The principle stating that the rate is controlled by the most limiting factor:',
            answer: 'limiting factor',
            acceptableAnswers: ['limiting factor', 'Limiting factor', 'law of the minimum', 'law of minimum'],
            placeholder: 'e.g. rate law'
          },
          {
            question: 'Damage to PSII caused by excessive light absorption:',
            answer: 'photoinhibition',
            acceptableAnswers: ['photoinhibition', 'Photoinhibition', 'photo-inhibition', 'photodamage'],
            placeholder: 'e.g. photorespiration'
          }
        ]
      }
    },
    {
      id: 'ps5-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Factors Affecting Photosynthesis
      \`,
      exercise: {
        questions: [
          {
            question: 'A researcher measures O2 production from an aquatic plant at different temperatures while keeping light and CO2 constant. At 45 °C, O2 production drops to near zero. What is the most likely explanation?',
            options: [
              'The water evaporated',
              'Enzymes involved in photosynthesis (especially RuBisCO and those in the light reactions) are denaturing at this high temperature',
              'The plant switched to CAM photosynthesis',
              'All the CO2 was consumed'
            ],
            correctAnswer: 1,
            explanation: 'At 45 °C, proteins begin to denature (lose their 3D shape). Since all stages of photosynthesis depend on enzyme catalysis, denaturation of key enzymes (RuBisCO, photosystem proteins, Calvin cycle enzymes) halts photosynthesis.'
          },
          {
            question: 'Greenhouse growers often add CO2 to the air and provide supplemental lighting. After both are optimized, what typically becomes the next limiting factor?',
            options: [
              'Water availability',
              'Temperature (enzyme kinetics)',
              'Oxygen concentration',
              'Nitrogen in the soil'
            ],
            correctAnswer: 1,
            explanation: 'After light and CO2 are optimized, the biochemical reaction rates become limited by temperature (enzyme kinetics). Greenhouses therefore also control temperature to maintain optimal enzyme function and maximize photosynthetic rate.'
          }
        ]
      }
    }
  ]
};`;

// Part 6: Problem-Solving Workshop
const part6 = `export const bioPhotosynthesisPart6Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps6-intro',
      type: 'text' as const,
      content: \`
## Problem-Solving Workshop — Photosynthesis

**Part 6 of 7**

This workshop applies photosynthesis concepts to experimental scenarios and data interpretation problems commonly tested on the AP Biology exam.
      \`
    },
    {
      id: 'ps6-scenario1',
      type: 'text' as const,
      content: \`
### Scenario 1: Hill Reaction Experiment

In 1937, Robert Hill demonstrated that isolated chloroplasts could produce O\\\\(_2\\\\) in the presence of an artificial electron acceptor (like DCPIP, a dye that changes from blue to colorless when reduced), even without CO\\\\(_2\\\\).

**Experimental setup:**
- Tube A: Chloroplasts + DCPIP + light → DCPIP decolorizes; O\\\\(_2\\\\) produced
- Tube B: Chloroplasts + DCPIP + dark → No color change; no O\\\\(_2\\\\)
- Tube C: Boiled chloroplasts + DCPIP + light → No color change; no O\\\\(_2\\\\)
- Tube D: Chloroplasts + no DCPIP + light → Minimal O\\\\(_2\\\\) (DCPIP is needed as electron acceptor)

This experiment demonstrated that:
1. The light reactions can occur independently of the Calvin cycle
2. O\\\\(_2\\\\) comes from water splitting, not from CO\\\\(_2\\\\)
3. Light and functional proteins are both required
      \`
    },
    {
      id: 'ps6-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 1 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'In the Hill reaction experiment, why does Tube C (boiled chloroplasts) not produce O2 or decolorize DCPIP?',
            options: [
              'Boiling removes CO2 from the solution',
              'Boiling denatures the photosystem proteins and enzymes required for the light reactions',
              'Boiling destroys the chlorophyll pigments completely (they photobleach)',
              'Boiling prevents DCPIP from accepting electrons'
            ],
            correctAnswer: 1,
            explanation: 'Boiling denatures proteins, including the photosystem complexes, electron transport chain components, and the oxygen-evolving complex. Without functional proteins, the light reactions cannot proceed, even though chlorophyll pigments may still be present.'
          },
          {
            question: 'The Hill reaction showed that O2 production does not require CO2. What does this tell us about the source of O2 in photosynthesis?',
            options: [
              'O2 comes from the breakdown of CO2',
              'O2 comes from the splitting of water molecules, which does not require CO2',
              'O2 comes from decarboxylation reactions',
              'O2 is released from the DCPIP dye'
            ],
            correctAnswer: 1,
            explanation: 'Since O2 is produced without CO2, the oxygen cannot come from CO2. Instead, it comes from the photolysis (splitting) of water at PSII. This was later confirmed by isotope tracing experiments using 18-O labeled water.'
          }
        ]
      }
    },
    {
      id: 'ps6-scenario2',
      type: 'text' as const,
      content: \`
### Scenario 2: The Lollipop Experiment (Calvin and Benson)

Melvin Calvin and Andrew Benson used the "lollipop" apparatus and \\\\(^{14}\\\\text{C}\\\\)-labeled CO\\\\(_2\\\\) to trace the path of carbon through photosynthesis:

1. Algae (*Chlorella*) were grown in a thin, flat flask illuminated continuously
2. \\\\(^{14}\\\\text{CO}_2\\\\) was injected into the culture
3. At various time intervals (5 seconds, 30 seconds, 5 minutes), samples were killed in hot methanol
4. Radioactive compounds were separated by **two-dimensional paper chromatography** and identified by autoradiography

**Results:**
- After **5 seconds:** Nearly all \\\\(^{14}\\\\text{C}\\\\) was in **3-PGA** (confirming it as the first stable product)
- After **30 seconds:** \\\\(^{14}\\\\text{C}\\\\) appeared in G3P, RuBP, and several sugar phosphates
- After **5 minutes:** \\\\(^{14}\\\\text{C}\\\\) was found in glucose, amino acids, and lipids

This experiment mapped out the complete Calvin cycle and earned Calvin the 1961 Nobel Prize.
      \`
    },
    {
      id: 'ps6-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 2 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'In the Calvin-Benson experiment, why was 3-PGA the first molecule to become radioactively labeled?',
            options: [
              'Because 3-PGA is the most abundant molecule in the chloroplast',
              'Because 3-PGA is the first stable product of CO2 fixation by RuBisCO',
              'Because 3-PGA directly absorbs 14C from the atmosphere',
              'Because RuBisCO converts 3-PGA into RuBP'
            ],
            correctAnswer: 1,
            explanation: 'When 14CO2 enters the Calvin cycle, RuBisCO attaches the 14C to RuBP (5C), forming an unstable 6C intermediate that immediately splits into two 3-PGA molecules. Since this is the first stable product, 3-PGA is the first to contain the radioactive label.'
          },
          {
            question: 'If the light is suddenly turned OFF while 14CO2 is being supplied, what would happen to the levels of 3-PGA and RuBP?',
            options: [
              'Both would increase',
              '3-PGA would increase (cannot be reduced without NADPH); RuBP would decrease (consumed but not regenerated)',
              'Both would decrease',
              '3-PGA would decrease; RuBP would increase'
            ],
            correctAnswer: 1,
            explanation: 'Without light, the light reactions stop producing ATP and NADPH. 3-PGA cannot be reduced to G3P (needs NADPH and ATP), so it accumulates. RuBP cannot be regenerated (needs ATP), so it is consumed but not replaced, and its level drops.'
          }
        ]
      }
    },
    {
      id: 'ps6-scenario3',
      type: 'text' as const,
      content: \`
### Scenario 3: Comparing C3 and C4 Productivity

Researchers measure net photosynthesis rates in a C3 grass and a C4 grass under varying temperatures:

| Temperature (°C) | C3 Net Photosynthesis (\\\\(\\\\mu\\\\)mol CO\\\\(_2\\\\)/m\\\\(^2\\\\)/s) | C4 Net Photosynthesis (\\\\(\\\\mu\\\\)mol CO\\\\(_2\\\\)/m\\\\(^2\\\\)/s) |
|------|------|------|
| 10 | 12 | 5 |
| 20 | 22 | 18 |
| 30 | 18 | 30 |
| 35 | 10 | 35 |
| 40 | 3 | 28 |
| 45 | 0 | 8 |
      \`
    },
    {
      id: 'ps6-quiz3',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 3 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'At 30 °C, C3 net photosynthesis drops from its peak, but C4 continues to increase. What explains this difference?',
            options: [
              'C4 plants have more chloroplasts',
              'C3 plants experience increasing photorespiration at higher temperatures, while C4 plants concentrate CO2 around RuBisCO, avoiding this problem',
              'C4 plants use a completely different form of RuBisCO',
              'C3 plants cannot absorb light at high temperatures'
            ],
            correctAnswer: 1,
            explanation: 'At higher temperatures, RuBisCO in C3 plants increasingly fixes O2 instead of CO2 (photorespiration), reducing net carbon gain. C4 plants pump CO2 into bundle-sheath cells via PEP carboxylase, maintaining high CO2 around RuBisCO and virtually eliminating photorespiration.'
          },
          {
            question: 'At 10 °C, the C3 grass outperforms the C4 grass. Why?',
            options: [
              'C3 plants have antifreeze proteins',
              'At low temperatures, photorespiration is minimal (C4 advantage disappears), and the extra ATP cost of the C4 pathway is wasteful',
              'C4 plants cannot perform photosynthesis below 15 °C',
              'The Calvin cycle only works in C3 plants at low temperatures'
            ],
            correctAnswer: 1,
            explanation: 'At cool temperatures, the ratio of CO2:O2 fixation by RuBisCO favors CO2, so photorespiration is low in C3 plants. The C4 carbon-concentrating mechanism (which costs 2 extra ATP per CO2) becomes an unnecessary expense, putting C4 plants at a net energy disadvantage.'
          }
        ]
      }
    },
    {
      id: 'ps6-input',
      type: 'input-boxes' as const,
      content: \`
### Apply Your Knowledge
      \`,
      exercise: {
        questions: [
          {
            question: 'If light is turned off, 3-PGA levels will (increase/decrease):',
            answer: 'increase',
            acceptableAnswers: ['increase', 'Increase', 'go up', 'rise'],
            placeholder: 'e.g. stay the same'
          },
          {
            question: 'If CO2 is suddenly removed, RuBP levels will (increase/decrease):',
            answer: 'increase',
            acceptableAnswers: ['increase', 'Increase', 'go up', 'rise', 'accumulate'],
            placeholder: 'e.g. decrease'
          }
        ]
      }
    },
    {
      id: 'ps6-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Workshop
      \`,
      exercise: {
        questions: [
          {
            question: 'A researcher adds DCMU (a herbicide that blocks electron flow from PSII to plastoquinone) to illuminated chloroplasts. What will happen?',
            options: [
              'O2 production continues but NADPH production stops',
              'Both O2 production and NADPH production stop; the proton gradient collapses; no ATP or NADPH for the Calvin cycle',
              'The Calvin cycle speeds up to compensate',
              'Cyclic electron flow around PSI stops'
            ],
            correctAnswer: 1,
            explanation: 'DCMU blocks electron flow from PSII. Without electron flow, water splitting stops (no O2), no electrons reach PSI or NADP+ (no NADPH), and proton pumping by cytochrome b6f stops (reduced ATP). The Calvin cycle loses both ATP and NADPH and shuts down.'
          }
        ]
      }
    }
  ]
};`;

// Part 7: AP Review
const part7 = `export const bioPhotosynthesisPart7Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps7-intro',
      type: 'text' as const,
      content: \`
## AP Review — Photosynthesis

**Part 7 of 7**

This final section presents comprehensive AP-exam-style questions integrating concepts from all parts of the photosynthesis unit.
      \`
    },
    {
      id: 'ps7-summary',
      type: 'text' as const,
      content: \`
### Master Summary

$$6\\\\text{CO}_2 + 6\\\\text{H}_2\\\\text{O} + \\\\text{light} \\\\longrightarrow \\\\text{C}_6\\\\text{H}_{12}\\\\text{O}_6 + 6\\\\text{O}_2$$

**Light Reactions (thylakoid membrane):**
- Inputs: H\\\\(_2\\\\)O, light, NADP\\\\(^+\\\\), ADP + P\\\\(_i\\\\)
- Outputs: O\\\\(_2\\\\), ATP, NADPH
- Key complexes: PSII, cytochrome b6f, PSI, ATP synthase

**Calvin Cycle (stroma):**
- Inputs: CO\\\\(_2\\\\), ATP, NADPH
- Outputs: G3P, ADP + P\\\\(_i\\\\), NADP\\\\(^+\\\\)
- Key enzyme: RuBisCO
- 3 phases: fixation, reduction, regeneration

**Connections to respiration:**
- Products of photosynthesis (glucose, O\\\\(_2\\\\)) are the reactants of respiration
- Products of respiration (CO\\\\(_2\\\\), H\\\\(_2\\\\)O) are the reactants of photosynthesis
- Both use chemiosmosis (proton gradients + ATP synthase)
- Both involve electron transport chains
      \`
    },
    {
      id: 'ps7-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 1
      \`,
      exercise: {
        questions: [
          {
            question: 'A plant is placed in a sealed chamber with CO2 labeled with 18-O. After several hours of photosynthesis, where will the 18-O label appear?',
            options: [
              'In the O2 released',
              'In the water molecules produced',
              'In the glucose molecules produced',
              'In both glucose and O2'
            ],
            correctAnswer: 2,
            explanation: 'The oxygen in CO2 is incorporated into 3-PGA during carbon fixation, and ultimately into the carbon skeleton of glucose (and other organic molecules). The O2 released by photosynthesis comes from water splitting, not from CO2.'
          },
          {
            question: 'During photosynthesis, chemiosmosis in chloroplasts differs from chemiosmosis in mitochondria in that:',
            options: [
              'Chloroplasts do not use ATP synthase',
              'In chloroplasts, protons accumulate in the thylakoid lumen and ATP is produced in the stroma; in mitochondria, protons accumulate in the intermembrane space and ATP is produced in the matrix',
              'Chloroplasts use FADH2 while mitochondria use NADPH',
              'The proton gradient in chloroplasts is generated by RuBisCO'
            ],
            correctAnswer: 1,
            explanation: 'Both organelles use proton gradients and ATP synthase, but the topology differs. In chloroplasts: H+ accumulates in the thylakoid lumen; ATP synthase releases ATP into the stroma. In mitochondria: H+ accumulates in the intermembrane space; ATP synthase releases ATP into the matrix.'
          },
          {
            question: 'Which statement correctly compares how organisms use the products of photosynthesis?',
            options: [
              'Plants use glucose only for structure; animals use it only for energy',
              'Glucose from photosynthesis can be used by the plant itself for cellular respiration, growth, and storage, or consumed by heterotrophs',
              'Only animals perform cellular respiration on glucose',
              'Plants do not need cellular respiration because they have chloroplasts'
            ],
            correctAnswer: 1,
            explanation: 'Plants are both autotrophs AND heterotrophs in the sense that they produce glucose (photosynthesis) and consume it (cellular respiration). Plants respire 24/7 to generate ATP for their own cellular work. They also use glucose for building cellulose, starch, amino acids, and lipids.'
          }
        ]
      }
    },
    {
      id: 'ps7-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 2
      \`,
      exercise: {
        questions: [
          {
            question: 'A leaf is illuminated with green light only. What effect would this have on the rate of photosynthesis compared to white light?',
            options: [
              'No effect — all wavelengths drive photosynthesis equally',
              'The rate would be significantly reduced because chlorophyll reflects green light and absorbs very little of it',
              'The rate would increase because green light has the most energy',
              'Photosynthesis would stop completely'
            ],
            correctAnswer: 1,
            explanation: 'Chlorophyll a and b absorb primarily in the blue-violet and red regions of the spectrum and reflect green light. Under green-only illumination, very little light energy is absorbed by the photosystems, dramatically reducing the rate of the light reactions and, consequently, the Calvin cycle.'
          },
          {
            question: 'Engineers are attempting to design artificial photosynthesis systems. Which of the following biological components would be MOST critical to replicate?',
            options: [
              'The cell wall of plant cells',
              'A catalyst that can split water using light energy (analogous to the OEC and PSII)',
              'The vacuole for acid storage',
              'Stomata for gas exchange'
            ],
            correctAnswer: 1,
            explanation: 'The oxygen-evolving complex (OEC) of PSII performs one of the most thermodynamically demanding reactions in biology — splitting water using light energy. Replicating this water-splitting catalyst is the central challenge of artificial photosynthesis, as it is the source of electrons and protons for all downstream chemistry.'
          },
          {
            question: 'If you provide a plant with radioactive water (H218O) and normal CO2, where does the labeled oxygen end up?',
            options: [
              'In glucose only',
              'In O2 gas released during photosynthesis',
              'In CO2 released during respiration',
              'In both glucose and O2'
            ],
            correctAnswer: 1,
            explanation: 'Water is split at PSII, and the oxygen atoms from water become the O2 gas released as a byproduct. This was demonstrated by the Ruben-Kamen experiment (1941) using 18O-labeled water, providing definitive evidence that photosynthetic O2 comes from water, not CO2.'
          }
        ]
      }
    },
    {
      id: 'ps7-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Comprehensive Matching
      \`,
      exercise: {
        questions: [
          {
            question: 'The light reactions take place in the:',
            options: ['Stroma', 'Thylakoid membrane', 'Cytoplasm', 'Mitochondrial matrix'],
            correctAnswer: 'Thylakoid membrane'
          },
          {
            question: 'The Calvin cycle takes place in the:',
            options: ['Stroma', 'Thylakoid membrane', 'Thylakoid lumen', 'Inner membrane'],
            correctAnswer: 'Stroma'
          },
          {
            question: 'The primary enzyme of carbon fixation:',
            options: ['PEP carboxylase', 'RuBisCO', 'ATP synthase', 'NADP+ reductase'],
            correctAnswer: 'RuBisCO'
          },
          {
            question: 'The gas released as a byproduct of the light reactions:',
            options: ['CO2', 'N2', 'O2', 'H2'],
            correctAnswer: 'O2'
          },
          {
            question: 'The process that allows C4 plants to minimize photorespiration:',
            options: ['Temporal separation', 'Spatial separation of CO2 fixation and Calvin cycle', 'Increased RuBisCO concentration', 'Reduced stomatal density'],
            correctAnswer: 'Spatial separation of CO2 fixation and Calvin cycle'
          }
        ]
      }
    },
    {
      id: 'ps7-input',
      type: 'input-boxes' as const,
      content: \`
### Final Key Facts
      \`,
      exercise: {
        questions: [
          {
            question: 'Number of CO2 molecules that must be fixed to produce one glucose:',
            answer: '6',
            acceptableAnswers: ['6', 'six', 'Six'],
            placeholder: 'e.g. 3'
          },
          {
            question: 'The ATP:NADPH ratio required by the Calvin cycle per CO2:',
            answer: '3:2',
            acceptableAnswers: ['3:2', '3 to 2', '3/2'],
            placeholder: 'e.g. 2:1'
          },
          {
            question: 'The source of all O2 released during photosynthesis:',
            answer: 'water',
            acceptableAnswers: ['water', 'Water', 'H2O', 'h2o'],
            placeholder: 'e.g. CO2'
          }
        ]
      }
    },
    {
      id: 'ps7-exit',
      type: 'multiple-choice' as const,
      content: \`
### Final Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'A student claims: "Plants only photosynthesize during the day and only respire at night." Is this correct?',
            options: [
              'Yes — these processes alternate with the light cycle',
              'No — plants respire continuously (day and night) and only photosynthesize when light is available; during the day, both processes occur simultaneously',
              'No — plants can photosynthesize at night using stored light energy',
              'Yes — respiration only occurs when O2 is not being produced'
            ],
            correctAnswer: 1,
            explanation: 'Cellular respiration occurs continuously in all living plant cells because ATP is always needed. Photosynthesis occurs only when light is available. During the day, both processes run simultaneously. At night, only respiration occurs. During the day, photosynthesis typically exceeds respiration, so the plant is a net producer of O2 and consumer of CO2.'
          },
          {
            question: 'Evolution of oxygenic photosynthesis (using water as the electron donor) fundamentally changed Earth because:',
            options: [
              'It removed all CO2 from the atmosphere immediately',
              'It released O2 into a previously anoxic atmosphere, enabling aerobic respiration and the formation of the ozone layer',
              'It caused the extinction of all anaerobic organisms',
              'It stopped all volcanic activity'
            ],
            correctAnswer: 1,
            explanation: 'The evolution of oxygenic photosynthesis by cyanobacteria (~2.7 billion years ago) gradually oxygenated the atmosphere (the Great Oxidation Event, ~2.4 BYA). This O2 enabled the evolution of aerobic respiration (much more efficient ATP production) and created the ozone layer (protecting life from UV radiation).'
          }
        ]
      }
    }
  ]
};`;

// Write all files
const files = {
  'bio-photosynthesis-part1.ts': part1,
  'bio-photosynthesis-part2.ts': part2,
  'bio-photosynthesis-part3.ts': part3,
  'bio-photosynthesis-part4.ts': part4,
  'bio-photosynthesis-part5.ts': part5,
  'bio-photosynthesis-part6.ts': part6,
  'bio-photosynthesis-part7.ts': part7,
};

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(BASE, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${filePath} (${content.length} chars)`);
}

console.log('Done! All 7 photosynthesis parts written.');
